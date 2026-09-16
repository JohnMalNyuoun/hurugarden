import "dotenv/config";
import express from "express";
import cors from "cors";
import bookingRoutes from "./routes/bookingRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";

const app = express();
const port = process.env.PORT || 5000;
app.use(cors({ origin: process.env.CLIENT_URL || "http://localhost:5173" }));
app.use(express.json());
app.get("/api/health", (_req, res) =>
  res.json({ status: "ok", service: "huru-garden" }),
);
app.use("/api/bookings", bookingRoutes);
app.use("/api/contact", contactRoutes);
app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ message: "Something went wrong." });
});
app.listen(port, () =>
  console.log(`Huru Garden API listening on port ${port}`),
);
