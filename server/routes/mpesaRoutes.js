import { Router } from "express";
import {
  createStkPush,
  getPaymentStatus,
  receiveCallback,
} from "../controllers/mpesaController.js";

const router = Router();
router.post("/stkpush", createStkPush);
router.post("/callback", receiveCallback);
router.get("/status/:id", getPaymentStatus);

export default router;
