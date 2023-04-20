//     name: {
//       type: String,
//       required: true,
//     },
//     semesters: {
//       type: [String],
//       required: true,
//     },
//     amountOfLessons: {
//       type: Number,
//       required: true,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

import express from "express";
import Category from "../models/Category.js";
import { createError } from "../utils/error.js";
import {
  createCategory,
  getCategories,
  updateCategory,
  deleteCategory,
  getCategory,
} from "../controllers/categoryController.js";

const router = express.Router();

//CRUD operations
//Create a new category
router.post("/", createCategory);

//Update a category
router.put("/:id", updateCategory);

//Delete a category
router.delete("/:id", deleteCategory);

//Get all categories
router.get("/", getCategories);

//Get a single category
router.get("/:id", getCategory);

export default router;
