import express from 'express';
import { getUserData, login, register } from '../controllers/loginController.js';
const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.get("/get-detail/:email", getUserData);

export default router;