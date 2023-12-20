import express from 'express';
import { createOrderControllers, getOrderController } from '../controllers/orderController.js';
const router = express.Router();

router.get("/get-order", getOrderController);
router.post("/create-order", createOrderControllers);

export default router;