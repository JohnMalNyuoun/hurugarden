import "./config/env.js";
import express from "express";
import cors from "cors";
import path from "node:path";
import { fileURLToPath } from "node:url";
import bookingRoutes from "./routes/bookingRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import mpesaRoutes from "./routes/mpesaRoutes.js";
import { getMailerStatus, verifyMailer } from "./utils/mailer.js";

const app = express();
const port = process.env.PORT || 5000;
const clientDistPath = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../client/dist",
);
app.use(cors({ origin: process.env.CLIENT_URL || "http://localhost:5173" }));
app.use(express.json());
app.get("/api/health", (_req, res) =>
  res.json({ status: "ok", service: "huru-garden" }),
);
app.use("/api/bookings", bookingRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/mpesa", mpesaRoutes);
app.use(express.static(clientDistPath));
app.get("*", (_req, res) =>
  res.sendFile(path.join(clientDistPath, "index.html")),
);
app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ message: "Something went wrong." });
});
app.listen(port, async () => {
  console.log(`Huru Garden API listening on port ${port}`);
  console.log("Email configuration:", getMailerStatus());
  if (getMailerStatus().configured) {
    try {
      await verifyMailer();
      console.log("Email provider verified.");
    } catch (error) {
      console.error("Email provider verification failed:", {
        message: error.message,
        code: error.code,
        responseCode: error.responseCode,
      });
    }
  }
});
