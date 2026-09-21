import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";


export default function TermsOfService() {
  return (
    <div className="policy-page">
      <div className="policy-container">
        <Link to="/" className="policy-back-link">
          <ArrowLeft size={16} /> Back to Home
        </Link>

        <header className="policy-header">
          <span className="policy-badge">Agreement</span>
          <h1>Terms of Service</h1>
          <p className="policy-updated">Last Updated: September 2026</p>
        </header>

        <div className="policy-content">
          <section className="policy-section">
            <p className="policy-lead">
              Welcome to Huru Garden. By using our website, making dining or event reservations, or visiting our premises in Kakuma, you agree to comply with and be bound by the following Terms of Service.
            </p>
          </section>

          <section className="policy-section">
            <h2>1. Reservations & Payments</h2>
            <ul>
              <li><strong>Booking Confirmation:</strong> All table reservations and play garden entries are subject to space availability and confirmation upon receipt of payment.</li>
              <li><strong>Payment Currency:</strong> All prices listed on our platform are denominated in <strong>Kenyan Shillings (KES)</strong> inclusive of applicable levies and taxes.</li>
              <li><strong>M-Pesa Verification:</strong> Payments processed via M-Pesa require standard transaction reference validation before booking status is finalized.</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>2. Cancellations & Refunds</h2>
            <p>
              Cancellations submitted at least 24 hours prior to scheduled dining reservations or event site bookings are eligible for full or partial credit refunds. Late cancellations or no-shows on the day of reservation may incur an administrative charge.
            </p>
          </section>

          <section className="policy-section">
            <h2>3. Visitor Rules & Garden Guidelines</h2>
            <p>To preserve a safe, welcoming environment for everyone in Kakuma, visitors agree to adhere to the following:</p>
            <ul>
              <li>Respect garden installations, natural spaces, and facility property.</li>
              <li>Maintain appropriate conduct around children's play areas.</li>
              <li>Follow all safety protocols and guidelines issued by Huru Garden staff.</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>4. Intellectual Property</h2>
            <p>
              All branding, logos, photography, web text, layout assets, and visual designs featured on this website are the intellectual property of <strong>Huru Garden</strong> and its operational partners (including Danish Refugee Council references) and are protected by applicable copyright law.
            </p>
          </section>

          <section className="policy-section">
            <h2>5. Limitation of Liability</h2>
            <p>
              Huru Garden provides web application services on an "as-is" basis. While we strive for 100% uptime, we are not liable for temporary technical outages or payment gateway service interruptions beyond our immediate control.
            </p>
          </section>

          <section className="policy-section">
            <h2>6. Governing Law</h2>
            <p>
              These Terms of Service are governed by and construed in accordance with the laws of the <strong>Republic of Kenya</strong>. Any disputes shall be subject to jurisdiction in Kenyan courts.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}