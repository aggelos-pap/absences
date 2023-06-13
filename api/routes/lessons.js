import express from "express";
import {
  createLesson,
  updateLesson,
  deleteLesson,
  getLessons,
  getLesson,
  countLessons,
} from "../controllers/lessonController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/", (req, res) => {
//   res.send("Hello from auth");
// });
//Again add verifyAdmin
//router.post("/", verifyAdmin, createLesson);
//Sto post / put /:id delete /:id
router.post("/", createLesson);

router.put("/:id", updateLesson);

router.delete("/:id", deleteLesson);

//Get all categories
router.get("/", getLessons);

//Count all lessons
router.get("/cc", countLessons);

//Get a single category
router.get("/:id", getLesson);

export default router;
