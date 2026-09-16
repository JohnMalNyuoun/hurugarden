import { sendNotification } from "../utils/mailer.js";
export async function createBooking(req, res) {
  const { name, email, date, guests, eventType } = req.body;
  if (!name || !email || !date || !guests || !eventType)
    return res
      .status(400)
      .json({ message: "Please complete the required fields." });
  try {
    await sendNotification({
      subject: `New Huru booking enquiry from ${name}`,
      replyTo: email,
      text: JSON.stringify(req.body, null, 2),
    });
  } catch (error) {
    console.error(error);
    return res
      .status(503)
      .json({
        message: "Booking received, but email delivery is unavailable.",
      });
  }
  res.status(201).json({ message: "Booking enquiry received." });
}
