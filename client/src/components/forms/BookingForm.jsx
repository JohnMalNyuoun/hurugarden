import { useState } from "react";
import Button from "../ui/Button";
import { submitBooking } from "../../services/api";
export default function BookingForm() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const handle = async (event) => {
    event.preventDefault();
    setError("");
    try {
      await submitBooking(
        Object.fromEntries(new FormData(event.currentTarget)),
      );
      setSent(true);
    } catch {
      setError("Something went wrong. Please email hello@hurugarden.org.");
    }
  };
  if (sent)
    return (
      <div className="form-success">
        <span></span>
        <h3>We got it.</h3>
        <p>Thanks for sharing your plans. We will be in touch shortly.</p>
      </div>
    );
  return (
    <form className="form-card" onSubmit={handle}>
      <h3>Tell us the good stuff</h3>
      <label>
        Your name
        <input name="name" required placeholder="e.g. Amina Hassan" />
      </label>
      <label>
        Email address
        <input
          name="email"
          type="email"
          required
          placeholder="you@example.com"
        />
      </label>
      <div className="form-row">
        <label>
          Date
          <input name="date" type="date" required />
        </label>
        <label>
          Guests
          <input
            name="guests"
            type="number"
            min="1"
            required
            placeholder="20"
          />
        </label>
      </div>
      <label>
        What are you planning?
        <select name="eventType" defaultValue="">
          <option value="" disabled>
            Select one
          </option>
          <option>Birthday or celebration</option>
          <option>Team or community gathering</option>
          <option>Private lunch</option>
          <option>Something else</option>
        </select>
      </label>
      <label>
        Anything else?{" "}
        <textarea
          name="message"
          rows="3"
          placeholder="Tell us a little more..."
        />
      </label>
      {error && <p className="form-error">{error}</p>}
      <Button type="submit">Send enquiry</Button>
    </form>
  );
}
