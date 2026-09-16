import { sendNotification } from "../utils/mailer.js";
export async function createContact(req, res) {
  const { name, email, message } = req.body;
  if (!name || !email || !message)
    return res
      .status(400)
      .json({ message: "Name, email, and message are required." });
  await sendNotification({
    subject: `New Huru message from ${name}`,
    replyTo: email,
    text: message,
  });
  res.status(201).json({ message: "Message received." });
}
