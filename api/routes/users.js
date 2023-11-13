import express from "express";
import User from "../models/User.js";
import { createError } from "../utils/error.js";
import {
  getUsers,
  updateUser,
  deleteUser,
  getUser,
  countUsers,
  getLast24Hours,
} from "../controllers/userController.js";
import { verifyToken, verifyUser, verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CRUD operations

//Update a user
router.put("/:id", updateUser);

//Delete a user if isAdmin:true
router.delete("/:id", deleteUser);

//Get all users
router.get("/", getUsers);

//Count all users
router.get("/cc", countUsers);

router.get("/info/last24", getLast24Hours);

//Get a single user
router.get("/:id", getUser);

export default router;
