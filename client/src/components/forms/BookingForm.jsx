import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Calendar, CheckCircle } from "lucide-react";
import Button from "../ui/Button";
import { submitBooking } from "../../services/api";

// Inline Style Objects
const styles = {
  card: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "2.5rem 3rem", // Increased padding for a more open look
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
    maxWidth: "1500px", // Expanded width from 600px to 1000px
    width: "100%",
    margin: "0 auto",
    boxSizing: "border-box",
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  },
  heading: {
    marginTop: 0,
    marginBottom: "1.75rem",
    color: "#29130c",
    fontSize: "1.65rem",
    fontWeight: "700",
  },
  label: {
    display: "block",
    fontSize: "0.9rem",
    fontWeight: "600",
    color: "#29130c",
    marginBottom: "1.1rem",
  },
  input: {
    display: "block",
    width: "100%",
    padding: "0.8rem 1rem",
    marginTop: "0.45rem",
    borderRadius: "8px",
    border: "1px solid #d1d5db",
    fontSize: "0.95rem",
    boxSizing: "border-box",
    backgroundColor: "#fff",
    color: "#333",
    outline: "none",
  },
  row: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", // Flexible 2-column layout
    gap: "1.5rem",
  },
  dateSection: {
    backgroundColor: "#fcf8f2",
    padding: "1.5rem",
    borderRadius: "10px",
    marginBottom: "1.5rem",
    border: "1px solid #f0e6d8",
  },
  dateHeader: {
    margin: "0 0 1rem",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    color: "#f26622",
    fontSize: "1.05rem",
  },
  error: {
    color: "#d32f2f",
    backgroundColor: "#ffebee",
    padding: "0.85rem",
    borderRadius: "8px",
    fontSize: "0.875rem",
    marginBottom: "1.25rem",
  },
  confirmationCard: {
    padding: "3rem",
    textAlign: "center",
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
    maxWidth: "780px",
    width: "100%",
    margin: "0 auto",
    boxSizing: "border-box",
  },
  detailsBox: {
    backgroundColor: "#f9f9f9",
    padding: "1.25rem",
    borderRadius: "8px",
    margin: "1.75rem 0",
    border: "1px solid #eee",
  },
};

const initialFormData = (venueArea) => ({
  fullName: "",
  phone: "",
  email: "",
  eventType: "Private Gathering",
  venueArea,
  startDate: "",
  numberOfDays: 1,
  timeOfDay: "Full Day (8 AM - 10 PM)",
  estimatedGuests: "30-80",
  specialRequests: "",
});

export default function BookingForm() {
  const [searchParams] = useSearchParams();
  const selectedService = searchParams.get("service");
  const selectedActivity = searchParams.get("activity");
  const preSelectedService =
    selectedService || selectedActivity || "Huru Main Garden & Hall";
  const [formData, setFormData] = useState(() =>
    initialFormData(preSelectedService),
  );
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (selectedService || selectedActivity) {
      setFormData((previous) => ({
        ...previous,
        venueArea: preSelectedService,
      }));
    }
  }, [preSelectedService, selectedActivity, selectedService]);

  const numberOfDays = Math.max(1, Number(formData.numberOfDays) || 1);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  }

  async function saveBooking() {
    await submitBooking({
      name: formData.fullName,
      email: formData.email,
      date: formData.startDate,
      guests: formData.estimatedGuests,
      eventType: formData.eventType,
      phone: formData.phone,
      venueArea: formData.venueArea,
      numberOfDays,
      timeOfDay: formData.timeOfDay,
      specialRequests: formData.specialRequests,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      await saveBooking();
      setSubmitted(true);
    } catch (requestError) {
      setError(
        requestError.response?.data?.message ||
          "Something went wrong. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  }

  function resetForm() {
    setFormData(initialFormData(preSelectedService));
    setSubmitted(false);
    setError("");
  }

  if (submitted) {
    return (
      <div style={styles.confirmationCard}>
        <CheckCircle
          size={52}
          color="#2e7d32"
          style={{ marginBottom: "1rem" }}
        />
        <h3 style={{ marginTop: 0, color: "#29130c", fontSize: "1.5rem" }}>
          Booking Confirmed!
        </h3>
        <p style={{ color: "#555", lineHeight: 1.6, fontSize: "1.05rem" }}>
          Your reservation for <strong>{formData.venueArea}</strong> on{" "}
          <strong>{formData.startDate}</strong> for{" "}
          <strong>{numberOfDays} day(s)</strong> has been received.
        </p>
        <div style={styles.detailsBox}>
          <p style={{ margin: "0.25rem 0", color: "#333", fontSize: "1rem" }}>
            Phone Number: <strong>{formData.phone}</strong>
          </p>
        </div>
        <Button type="button" onClick={resetForm} style={{ width: "100%", padding: "0.85rem" }}>
          Book Another Reservation
        </Button>
      </div>
    );
  }

  return (
    <div style={styles.card}>
      <form onSubmit={handleSubmit}>
        <h3 style={styles.heading}>Book a Space</h3>

        <div style={styles.row}>
          <label style={styles.label}>
            Full Name
            <input
              name="fullName"
              style={styles.input}
              placeholder="Your name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </label>

          <label style={styles.label}>
            Selected Venue / Space
            <select
              name="venueArea"
              style={styles.input}
              value={formData.venueArea}
              onChange={handleChange}
            >
              <option>Huru Main Garden &amp; Hall</option>
              <option>Dining Terrace &amp; Pavilion</option>
              <option>Play Garden Grounds</option>
              <option>Full Facility Hire</option>
            </select>
          </label>
        </div>

        <div style={styles.row}>
          <label style={styles.label}>
            Phone Number (M-Pesa)
            <input
              name="phone"
              type="tel"
              style={styles.input}
              placeholder="0712345678"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </label>
          <label style={styles.label}>
            Email Address
            <input
              name="email"
              type="email"
              style={styles.input}
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <div style={styles.dateSection}>
          <h4 style={styles.dateHeader}>
            <Calendar size={18} /> Date &amp; Duration
          </h4>
          <div style={styles.row}>
            <label style={styles.label}>
              Start Date
              <input
                type="date"
                name="startDate"
                style={styles.input}
                value={formData.startDate}
                onChange={handleChange}
                min={new Date().toISOString().split("T")[0]}
                required
              />
            </label>
            <label style={styles.label}>
              Number of Days
              <input
                type="number"
                name="numberOfDays"
                style={styles.input}
                min="1"
                max="30"
                value={formData.numberOfDays}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <label style={{ ...styles.label, marginBottom: 0 }}>
            Time Slot / Schedule
            <select
              name="timeOfDay"
              style={styles.input}
              value={formData.timeOfDay}
              onChange={handleChange}
            >
              <option>Full Day (8 AM - 10 PM)</option>
              <option>Morning Shift (8 AM - 1 PM)</option>
              <option>Afternoon/Evening (2 PM - 10 PM)</option>
              <option>Overnight / Multi-Day Continuous</option>
            </select>
          </label>
        </div>

        <div style={styles.row}>
          <label style={styles.label}>
            Type of Event
            <input
              name="eventType"
              style={styles.input}
              value={formData.eventType}
              onChange={handleChange}
              required
            />
          </label>
          <label style={styles.label}>
            Guests Count
            <select
              name="estimatedGuests"
              style={styles.input}
              value={formData.estimatedGuests}
              onChange={handleChange}
            >
              <option>10-30</option>
              <option>30-80</option>
              <option>80+</option>
            </select>
          </label>
        </div>

        <label style={styles.label}>
          Special Requests
          <textarea
            name="specialRequests"
            style={{ ...styles.input, resize: "vertical" }}
            rows="3"
            value={formData.specialRequests}
            onChange={handleChange}
            placeholder="Tell us a little more..."
          />
        </label>

        {error && <p style={styles.error}>{error}</p>}

        <Button type="submit" disabled={loading} style={{ width: "100%", marginTop: "0.5rem", padding: "0.85rem" }}>
          {loading ? "Sending Request..." : "Submit Request"}
        </Button>
      </form>
    </div>
  );
}