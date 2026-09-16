import "../config/env.js";
import nodemailer from "nodemailer";

const smtpPort = Number(process.env.SMTP_PORT || 587);
const smtpPassword = process.env.SMTP_PASS?.replace(/\s+/g, "");
const hasSmtp =
  Boolean(process.env.SMTP_HOST) &&
  Boolean(process.env.SMTP_USER) &&
  Boolean(smtpPassword);

if (!hasSmtp) {
  console.warn(
    "SMTP is not configured. Set SMTP_HOST, SMTP_USER, and SMTP_PASS to enable email notifications.",
  );
}

const transporter = hasSmtp
  ? nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: smtpPort,
      secure: smtpPort === 465,
      requireTLS: smtpPort === 587,
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 15000,
      auth: { user: process.env.SMTP_USER, pass: smtpPassword },
    })
  : null;

export async function sendNotification({ subject, replyTo, text }) {
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
      to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
      replyTo,
      subject,
      text,
    });
  } catch (error) {
    console.error("SMTP notification failed:", error.message);
    throw new Error("Email notification could not be sent.");
  }
}
