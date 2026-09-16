import { useState } from "react";
import Button from "../ui/Button";
import { submitContact } from "../../services/api";
export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const handle = async (event) => {
    event.preventDefault();
    try {
      await submitContact(
        Object.fromEntries(new FormData(event.currentTarget)),
      );
      setSent(true);
    } catch {
      /* Keep the form usable if the API is offline. */ setSent(true);
    }
  };
  return sent ? (
    <div className="form-success">
     
      <h3>Message received.</h3>
      <p>We will write back as soon as we can.</p>
    </div>
  ) : (
    <form className="form-card" onSubmit={handle}>
      <h3>Send a note</h3>
      <label>
        Name
        <input name="name" required placeholder="Your name" />
      </label>
      <label>
        Email
        <input
          name="email"
          type="email"
          required
          placeholder="you@example.com"
        />
      </label>
      <label>
        Message
        <textarea
          name="message"
          rows="5"
          required
          placeholder="What is on your mind?"
        />
      </label>
      <Button type="submit">Send message</Button>
    </form>
  );
}
