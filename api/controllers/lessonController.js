import Lesson from "../models/Lesson.js";
import { createError } from "../utils/error.js";

export const createLesson = async (req, res, next) => {
  try {
    const { title, category, absences } = req.body;

    // create a new Lesson document with the provided data
    const lesson = new Lesson({
      title,
      category,
      absences,
    });

    // save the new document to the database
    await lesson.save();

    res.status(201).json(lesson);
  } catch (err) {
    next(err);
  }
};

export const updateLesson = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, category } = req.body;

    // find the existing lesson document by ID
    const lesson = await Lesson.findById(id);

    if (!lesson) {
      return res
        .status(404)
        .json({ success: false, error: "Lesson not found" });
    }

    // update the lesson document with the provided data
    lesson.title = title || lesson.title;
    lesson.category = category || lesson.category;

    // save the updated document to the database
    await lesson.save();

    res.status(201).json(lesson);
  } catch (err) {
    next(err);
  }
};

export const deleteLesson = async (req, res, next) => {
  try {
    const { id } = req.params;

    // find the existing lesson document by ID
    const lesson = await Lesson.findById(id);

    if (!lesson) {
      return res
        .status(404)
        .json({ success: false, error: "Lesson not found" });
    }

    await Lesson.findByIdAndDelete(req.params.id);

    res.status(200).json({ success: true });
  } catch (err) {
    next(err);
  }
};

export const getLessons = async (req, res, next) => {
  try {
    const lessons = await Lesson.find();
    res.status(200).json(lessons);
  } catch (err) {
    next(err);
  }
};

export const getLesson = async (req, res, next) => {
  try {
    const lesson = await Lesson.findById(req.params.id);
    res.status(200).json(lesson);
  } catch (err) {
    next(err);
  }
};
