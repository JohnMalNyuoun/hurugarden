import ContactForm from "../components/forms/ContactForm";
import { Clock, Mail, MapPin } from "lucide-react";
export default function ContactPage() {
  return (
    <div className="inner-page">
      <section className="page-hero contact-hero">
        <p className="eyebrow light">
          Let's talk <span>✳</span>
        </p>
        <h1>
          Come as
          <br />
          <i>you are.</i>
        </h1>
        <p>Questions, ideas, directions? We would love to hear from you.</p>
      </section>
      <section className="contact-layout section-pad">
        <div className="contact-details">
          <p className="eyebrow">Find us</p>
          <div className="contact-detail">
            <MapPin />
            <span>
              <b>Kakuma, Kenya</b>Huru Garden, near the main market
            </span>
          </div>
          <div className="contact-detail">
            <Clock />
            <span>
              <b>Open Tuesday–Sunday</b>9:00 am – 6:00 pm
            </span>
          </div>
          <div className="contact-detail">
            <Mail />
            <span>
              <b>hello@hurugarden.org</b>We reply within one working day
            </span>
          </div>
        </div>
        <ContactForm />
      </section>
    </div>
  );
}
