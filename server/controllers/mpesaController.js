const payments = new Map();

function getMpesaConfig() {
  return {
    consumerKey: process.env.MPESA_CONSUMER_KEY,
    consumerSecret: process.env.MPESA_CONSUMER_SECRET,
    shortCode: process.env.MPESA_SHORT_CODE,
    passkey: process.env.MPESA_PASSKEY,
    callbackUrl: process.env.MPESA_CALLBACK_URL,
    transactionType:
      process.env.MPESA_TRANSACTION_TYPE || "CustomerBuyGoodsOnline",
    apiBaseUrl:
      process.env.MPESA_ENVIRONMENT === "sandbox"
        ? "https://sandbox.safaricom.co.ke"
        : "https://api.safaricom.co.ke",
  };
}

function formatPhone(phone) {
  const digits = String(phone || "").replace(/\D/g, "");
  if (digits.startsWith("0") && digits.length === 10)
    return `254${digits.slice(1)}`;
  if (digits.startsWith("254") && digits.length === 12) return digits;
  if (digits.startsWith("7") && digits.length === 9) return `254${digits}`;
  return null;
}

function getTimestamp() {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Africa/Nairobi",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).formatToParts(new Date());
  const values = Object.fromEntries(
    parts.map(({ type, value }) => [type, value]),
  );
  return `${values.year}${values.month}${values.day}${values.hour}${values.minute}${values.second}`;
}

async function getMpesaToken(config) {
  const auth = Buffer.from(
    `${config.consumerKey}:${config.consumerSecret}`,
  ).toString("base64");
  const response = await fetch(
    `${config.apiBaseUrl}/oauth/v1/generate?grant_type=client_credentials`,
    { headers: { Authorization: `Basic ${auth}` } },
  );
  const data = await response.json();
  if (!response.ok || !data.access_token) {
    throw new Error(data.errorMessage || "Unable to authenticate with M-Pesa.");
  }
  return data.access_token;
}

export async function createStkPush(req, res) {
  const { phone, amount, itemTitle, units } = req.body;
  const config = getMpesaConfig();
  const formattedPhone = formatPhone(phone);
  const numericAmount = Number(amount);
  const numericUnits = Number(units);

  if (
    !formattedPhone ||
    !Number.isFinite(numericAmount) ||
    numericAmount < 1 ||
    !itemTitle
  ) {
    return res.status(400).json({
      success: false,
      message: "Enter a valid Kenyan M-Pesa number and booking amount.",
    });
  }

  if (
    !config.consumerKey ||
    !config.consumerSecret ||
    !config.shortCode ||
    !config.passkey ||
    !config.callbackUrl
  ) {
    return res.status(503).json({
      success: false,
      message: "M-Pesa payments are not configured yet.",
    });
  }

  try {
    const token = await getMpesaToken(config);
    const timestamp = getTimestamp();
    const password = Buffer.from(
      `${config.shortCode}${config.passkey}${timestamp}`,
    ).toString("base64");
    const response = await fetch(
      `${config.apiBaseUrl}/mpesa/stkpush/v1/processrequest`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          BusinessShortCode: config.shortCode,
          Password: password,
          Timestamp: timestamp,
          TransactionType: config.transactionType,
          Amount: Math.ceil(numericAmount),
          PartyA: formattedPhone,
          PartyB: config.shortCode,
          PhoneNumber: formattedPhone,
          CallBackURL: config.callbackUrl,
          AccountReference: `Huru-${String(itemTitle).slice(0, 12)}`,
          TransactionDesc: `Booking for ${Number.isFinite(numericUnits) ? numericUnits : 1} unit(s)`,
        }),
      },
    );
    const data = await response.json();

    if (!response.ok || !data.CheckoutRequestID) {
      throw new Error(
        data.errorMessage ||
          data.ResponseDescription ||
          "M-Pesa rejected the payment request.",
      );
    }

    payments.set(data.CheckoutRequestID, {
      status: "PENDING",
      amount: Math.ceil(numericAmount),
      phone: formattedPhone,
      createdAt: Date.now(),
    });
    return res.json({
      success: true,
      checkoutRequestID: data.CheckoutRequestID,
      message: data.ResponseDescription || "Payment prompt sent to your phone.",
    });
  } catch (error) {
    console.error("M-Pesa STK push failed:", error.message);
    return res
      .status(502)
      .json({
        success: false,
        message: "Payment initialization failed. Please try again.",
      });
  }
}

export function receiveCallback(req, res) {
  const callback = req.body?.Body?.stkCallback;
  if (callback?.CheckoutRequestID) {
    const currentPayment = payments.get(callback.CheckoutRequestID) || {};
    payments.set(callback.CheckoutRequestID, {
      ...currentPayment,
      status: Number(callback.ResultCode) === 0 ? "SUCCESS" : "FAILED",
      reason: callback.ResultDesc,
      details: callback.CallbackMetadata,
      updatedAt: Date.now(),
    });
  }
  return res.json({ ResultCode: 0, ResultDesc: "Accepted" });
}

export function getPaymentStatus(req, res) {
  const payment = payments.get(req.params.id);
  if (!payment) return res.json({ status: "NOT_FOUND" });
  return res.json({ status: payment.status, reason: payment.reason });
}
