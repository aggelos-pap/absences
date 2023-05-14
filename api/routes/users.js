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

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//   res.send("Hello user you are logged in ");
// });

// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//   res.send("Hello user you are logged in and can delete your acc ");
// });

//Update a user
router.put("/:id", updateUser);

//Delete a user if isAdmin:true
router.delete("/:id", verifyAdmin, deleteUser);

//Get all users
router.get("/", getUsers);

//Count all users
router.get("/cc", countUsers);

router.get("/info/last24", getLast24Hours);

//Get a single user
router.get("/:id", getUser);

export default router;
