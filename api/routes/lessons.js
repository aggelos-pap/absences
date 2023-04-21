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

// router.post("/:hotelid", verifyAdmin, createRoom);
router.post("/", verifyAdmin, createLesson);

router.put("/:id", verifyAdmin, updateLesson);

router.delete("/:id", verifyAdmin, deleteLesson);

//Get all categories
router.get("/", getLessons);

//Count all lessons
router.get("/cc", countLessons);

//Get a single category
router.get("/:id", getLesson);

export default router;
