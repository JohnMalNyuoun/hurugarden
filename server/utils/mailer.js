import "../config/env.js";
import nodemailer from "nodemailer";

const emailProvider = process.env.EMAIL_PROVIDER || "smtp";
const smtpPort = Number(process.env.SMTP_PORT || 587);
const smtpPassword = process.env.SMTP_PASS?.replace(/\s+/g, "");
const hasSmtp =
  Boolean(process.env.SMTP_HOST) &&
  Boolean(process.env.SMTP_USER) &&
  Boolean(smtpPassword);
const hasResend = Boolean(process.env.RESEND_API_KEY);
const recipient = process.env.CONTACT_EMAIL || process.env.SMTP_USER;
const resendFrom =
  process.env.EMAIL_FROM || "Huru Garden <onboarding@resend.dev>";

class EmailDeliveryError extends Error {
  constructor(message, details = {}) {
    super(message);
    this.name = "EmailDeliveryError";
    this.details = details;
  }
}

const transporter =
  emailProvider === "resend" || !hasSmtp
    ? null
    : nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: smtpPort,
        secure: smtpPort === 465,
        requireTLS: smtpPort === 587,
        connectionTimeout: 10000,
        greetingTimeout: 10000,
        socketTimeout: 15000,
        auth: { user: process.env.SMTP_USER, pass: smtpPassword },
      });

if (emailProvider === "resend" && !hasResend) {
  console.warn("EMAIL_PROVIDER is resend but RESEND_API_KEY is missing.");
}

if (emailProvider !== "resend" && !hasSmtp) {
  console.warn(
    "SMTP is not configured. Set SMTP_HOST, SMTP_USER, and SMTP_PASS to enable email notifications.",
  );
}

export function getMailerStatus() {
  return {
    provider: emailProvider,
    configured: emailProvider === "resend" ? hasResend : hasSmtp,
    host:
      emailProvider === "resend"
        ? "api.resend.com"
        : process.env.SMTP_HOST || null,
    port: emailProvider === "resend" ? 443 : smtpPort,
    user: process.env.SMTP_USER || null,
    recipient: recipient || null,
    sender:
      emailProvider === "resend" ? resendFrom : process.env.SMTP_USER || null,
  };
}

export async function verifyMailer() {
  if (emailProvider === "resend") {
    if (!hasResend) return false;
    const response = await fetch("https://api.resend.com/domains", {
      headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}` },
    });
    if (!response.ok)
      throw new Error(`Resend verification failed (${response.status}).`);
    return true;
  }
  if (!transporter) return false;
  await transporter.verify();
  return true;
}

async function sendWithResend({ subject, replyTo, text }) {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: resendFrom,
      to: [recipient],
      reply_to: replyTo,
      subject,
      text,
    }),
  });
  if (!response.ok) {
    const details = await response.text();
    throw new EmailDeliveryError("Resend rejected the email.", {
      status: response.status,
      response: details.slice(0, 500),
    });
  }
}

export async function sendNotification({ subject, replyTo, text }) {
  if (emailProvider === "resend") {
    if (!hasResend || !recipient) {
      throw new Error("Resend email is not configured.");
    }
    try {
      await sendWithResend({ subject, replyTo, text });
      return;
    } catch (error) {
      console.error("Resend notification failed:", {
        message: error.message,
        details: error.details,
        sender: resendFrom,
        recipient,
      });
      throw new EmailDeliveryError("Email notification could not be sent.", {
        provider: "resend",
        status: error.details?.status,
      });
    }
  }

  if (!transporter) {
    if (process.env.NODE_ENV === "production") {
      throw new Error("SMTP is not configured.");
    }
    console.log("[mail preview]", { subject, replyTo, text });
    return;
  }

  try {
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: recipient,
      replyTo,
      subject,
      text,
    });
  } catch (error) {
    console.error("SMTP notification failed:", {
      message: error.message,
      code: error.code,
      responseCode: error.responseCode,
    });
    throw new EmailDeliveryError("Email notification could not be sent.", {
      provider: "smtp",
      code: error.code,
    });
  }
}
