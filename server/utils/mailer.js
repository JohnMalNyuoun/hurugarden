import nodemailer from "nodemailer";

const hasSmtp =
  process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS;
const transporter = hasSmtp
  ? nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    })
  : null;
export async function sendNotification({ subject, replyTo, text }) {
  if (!transporter) {
    console.log("[mail preview]", { subject, replyTo, text });
    return;
  }
  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to: process.env.CONTACT_EMAIL,
    replyTo,
    subject,
    text,
  });
}
