import { useEffect, useState } from "react";
import api from "../../services/api";

const styles = {
  overlay: {
    position: "fixed",
    inset: 0,
    zIndex: 1000,
    display: "grid",
    placeItems: "center",
    padding: "1rem",
    background: "rgba(41, 19, 12, 0.72)",
  },
  content: {
    width: "min(100%, 460px)",
    maxHeight: "90vh",
    overflowY: "auto",
    padding: "2rem",
    background: "#fff",
    borderRadius: "14px",
    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.25)",
  },
  input: {
    width: "100%",
    padding: "0.8rem",
    border: "1px solid rgba(41, 19, 12, 0.25)",
    borderRadius: "6px",
    marginTop: "0.4rem",
  },
};

export default function BookingPaymentModal({ item, onClose }) {
  const [units, setUnits] = useState(1);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState("IDLE");
  const [checkoutId, setCheckoutId] = useState("");
  const [message, setMessage] = useState("");
  const selectedOption = item.pricingOptions?.[selectedOptionIndex];
  const baseRate =
    selectedOption?.rate ??
    item.rateValue ??
    Number(String(item.pricing || item.rate).replace(/[^0-9]/g, ""));
  const quantityEnabled = selectedOption?.allowMultiple ?? true;
  const maxUnits = selectedOption?.maxUnits;
  const totalAmount = baseRate * units;

  function handleOptionChange(event) {
    const nextOptionIndex = Number(event.target.value);
    const nextOption = item.pricingOptions[nextOptionIndex];
    setSelectedOptionIndex(nextOptionIndex);
    setUnits(nextOption.allowMultiple ? 1 : 1);
  }

  useEffect(() => {
    if (!checkoutId || status !== "PROMPTED") return undefined;
    const interval = window.setInterval(async () => {
      try {
        const response = await api.get(`/mpesa/status/${checkoutId}`);
        if (
          response.data.status === "SUCCESS" ||
          response.data.status === "FAILED"
        ) {
          setStatus(response.data.status);
          setMessage(
            response.data.reason ||
              (response.data.status === "SUCCESS"
                ? "Payment received. Booking confirmed."
                : "Payment was cancelled or declined."),
          );
          window.clearInterval(interval);
        }
      } catch {
        setMessage(
          "We could not check payment status. Please keep the prompt open and try again.",
        );
      }
    }, 3000);
    return () => window.clearInterval(interval);
  }, [checkoutId, status]);

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("PROCESSING");
    setMessage("");
    try {
      const response = await api.post("/mpesa/stkpush", {
        phone,
        amount: totalAmount,
        itemTitle: item.title,
        units,
      });
      setCheckoutId(response.data.checkoutRequestID);
      setStatus("PROMPTED");
      setMessage(
        "Check your phone and enter your M-Pesa PIN to complete payment.",
      );
    } catch (error) {
      setStatus("FAILED");
      setMessage(
        error.response?.data?.message ||
          "Payment initialization failed. Please try again.",
      );
    }
  }

  return (
    <div
      style={styles.overlay}
      role="presentation"
      onMouseDown={(event) => event.target === event.currentTarget && onClose()}
    >
      <div
        style={styles.content}
        role="dialog"
        aria-modal="true"
        aria-labelledby="payment-title"
      >
        <h2 id="payment-title" style={{ marginTop: 0, color: "#29130c" }}>
          Book &amp; Pay: {item.title}
        </h2>
        <p style={{ color: "#625550" }}>
          Pay securely with an M-Pesa prompt sent to your phone.
        </p>
        <form onSubmit={handleSubmit}>
          {item.pricingOptions && (
            <>
              <label htmlFor="payment-option">Booking option</label>
              <select
                id="payment-option"
                style={styles.input}
                value={selectedOptionIndex}
                onChange={handleOptionChange}
              >
                {item.pricingOptions.map((option, index) => (
                  <option key={option.label} value={index}>
                    {option.label} - Ksh {option.rate.toLocaleString()}
                  </option>
                ))}
              </select>
            </>
          )}
          <label
            htmlFor="payment-units"
            style={{ display: "block", marginTop: "1rem" }}
          >
            {selectedOption?.label === "Full Day"
              ? "Number of full days"
              : "Number of days / units"}
          </label>
          <input
            id="payment-units"
            style={styles.input}
            type="number"
            min="1"
            max={maxUnits}
            step="1"
            value={units}
            disabled={!quantityEnabled}
            onChange={(event) =>
              setUnits(
                Math.min(
                  maxUnits || Number.POSITIVE_INFINITY,
                  Math.max(1, Number(event.target.value) || 1),
                ),
              )
            }
            required
          />
          <label
            htmlFor="payment-phone"
            style={{ display: "block", marginTop: "1rem" }}
          >
            M-Pesa phone number
          </label>
          <input
            id="payment-phone"
            style={styles.input}
            type="tel"
            inputMode="numeric"
            placeholder="0712345678"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            required
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "1.25rem 0",
              padding: "1rem",
              background: "#f7f195",
              borderRadius: "8px",
              fontWeight: 700,
            }}
          >
            <span>Total payable</span>
            <span>Ksh {totalAmount.toLocaleString()}</span>
          </div>
          {message && (
            <p
              role="status"
              style={{
                padding: "0.8rem",
                borderRadius: "6px",
                background:
                  status === "SUCCESS"
                    ? "#d4edda"
                    : status === "FAILED"
                      ? "#f8d7da"
                      : "#e2e3e5",
                color: "#29130c",
              }}
            >
              {message}
            </p>
          )}
          <div
            style={{ display: "flex", gap: "0.75rem", marginTop: "1.25rem" }}
          >
            <button
              type="submit"
              disabled={
                status === "PROCESSING" ||
                status === "PROMPTED" ||
                status === "SUCCESS"
              }
              style={{
                flex: 1,
                padding: "0.8rem",
                border: 0,
                borderRadius: "6px",
                background: "#f26622",
                color: "#fff",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              {status === "PROCESSING"
                ? "Starting payment..."
                : status === "PROMPTED"
                  ? "Awaiting PIN..."
                  : `Pay Ksh ${totalAmount.toLocaleString()}`}
            </button>
            <button
              type="button"
              onClick={onClose}
              style={{
                padding: "0.8rem 1rem",
                border: "0",
                borderRadius: "6px",
                background: "#e2dede",
                color: "#29130c",
                cursor: "pointer",
              }}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
