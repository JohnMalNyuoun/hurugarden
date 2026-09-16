import { sendNotification } from "../utils/mailer.js";
export async function createContact(req, res) {
  const { name, email, message } = req.body;
  if (!name || !email || !message)
    return res
      .status(400)
      .json({ message: "Name, email, and message are required." });
  try {
    await sendNotification({
      subject: `New Huru message from ${name}`,
      replyTo: email,
      text: message,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(503)
      .json({
        message: "Message received, but email delivery is unavailable.",
      });
  }
  res.status(201).json({ message: "Message received." });
}
