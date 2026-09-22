import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, ArrowLeft } from "lucide-react";


export default function PrivacyPolicy() {
  return (
    <div className="policy-page">
      <div className="policy-container">
        <Link to="/" className="policy-back-link">
          <ArrowLeft size={16} /> Back to Home
        </Link>

        <header className="policy-header">
          <span className="policy-badge">Legal & Security</span>
          <h1>Privacy Policy</h1>
          <p className="policy-updated">Last Updated: September 2026</p>
        </header>

        <div className="policy-content">
          <section className="policy-section">
            <p className="policy-lead">
              Huru Garden ("we," "our," or "us") is dedicated to protecting your privacy and managing your personal data transparently. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website, book services, or visit our site in Kakuma, Kenya, in compliance with the <strong>Kenya Data Protection Act, 2019</strong>.
            </p>
          </section>

          <section className="policy-section">
            <h2>1. Information We Collect</h2>
            <p>We collect personal information that you provide voluntarily when interacting with our digital services:</p>
            <ul>
              <li><strong>Contact Information:</strong> Full name, phone number, and email address submitted during venue reservations, dining bookings, or contact forms.</li>
              <li><strong>Payment & Transaction Details:</strong> Mobile money payment confirmation tokens (e.g., M-Pesa transaction reference codes) and transaction logs. <em>We do not store credit card credentials or mobile money PINs on our servers.</em></li>
              <li><strong>Technical Data:</strong> IP addresses, browser types, device diagnostics, and page engagement metrics gathered automatically through cookies.</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>2. How We Use Your Data</h2>
            <p>Your information is used strictly for operational and service delivery purposes:</p>
            <ul>
              <li>To confirm and process event venue bookings and dining table reservations.</li>
              <li>To send confirmation receipts, billing invoices, and service updates via SMS or email.</li>
              <li>To analyze website usage and improve visitor navigation and experience.</li>
              <li>To fulfill statutory compliance obligations under Kenyan law.</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>3. Third-Party Data Sharing</h2>
            <p>We do not sell, rent, or trade your personal data. Data is shared exclusively with necessary operational partners under strict confidentiality agreements:</p>
            <ul>
              <li><strong>Payment Gateways:</strong> Safaricom M-Pesa and payment gateways to process transactions securely.</li>
              <li><strong>Hosting & Analytics:</strong> Cloud infrastructure (Vercel/Render) and analytics providers (Meta Pixel and Google Analytics) operating with strict encryption protocols.</li>
              <li><strong>Legal Authorities:</strong> Disclosed only when legally required by judicial order or statutory enforcement in Kenya.</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>4. Data Retention & Your Rights</h2>
            <p>Under the Kenya Data Protection Act, you maintain full control over your personal information:</p>
            <ul>
              <li><strong>Right to Access:</strong> Request a copy of all personal records we hold about you.</li>
              <li><strong>Right to Correction:</strong> Request updates or corrections to incomplete or inaccurate data.</li>
              <li><strong>Right to Erasure:</strong> Request the deletion of your personal records from our databases.</li>
            </ul>
          </section>

          <section className="policy-section contact-box">
            <h3>Questions or Data Requests?</h3>
            <p>Contact our team regarding data privacy queries:</p>
            <div className="contact-info">
              <span><Mail size={16} /> privacy@hurugarden.com</span>
              <span><Phone size={16} /> +254 700 000 000</span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
