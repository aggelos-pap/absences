import express from "express";
import {
  createLesson,
  updateLesson,
  deleteLesson,
  getLessons,
  getLesson,
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

//Get a single category
router.get("/:id", getLesson);

export default router;
