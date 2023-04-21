import express from "express";
import { register } from "../controllers/authController.js";
import { login } from "../controllers/authController.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

router.post("/register", verifyAdmin, register);
router.post("/login", login);

export default router;
