import { verifyAdmin, verifyUser, verifyToken } from "../utils/verifyToken.js";
import express from "express";
import Category from "../models/Category.js";
import { createError } from "../utils/error.js";
import {
  createCategory,
  getCategories,
  updateCategory,
  deleteCategory,
  getCategory,
  countCategories,
} from "../controllers/categoryController.js";

const router = express.Router();

//CRUD operations

router.post("/", createCategory);

//Update a category
router.put("/:id", updateCategory);

//Delete a category
router.delete("/:id", deleteCategory);

//Get all categories
router.get("/", getCategories);

//Count all categories
router.get("/cc", countCategories);

//Get a single category
router.get("/:id", getCategory);

// router.get("/cc", countCategories);

export default router;
