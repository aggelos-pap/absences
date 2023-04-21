import express from "express";
import { register } from "../controllers/authController.js";
import { login } from "../controllers/authController.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

//verifyAdmin when w finish
router.post("/register", register);
router.post("/login", login);

export default router;
