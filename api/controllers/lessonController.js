import Lesson from "../models/Lesson.js";
import { createError } from "../utils/error.js";

export const createLesson = async (req, res, next) => {
  try {
    const { title, category } = req.body;

    const lesson = new Lesson({
      title,
      category,
    });

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

    const lesson = await Lesson.findById(id);

    if (!lesson) {
      return res
        .status(404)
        .json({ success: false, error: "Lesson not found" });
    }

    lesson.title = title || lesson.title;
    lesson.category = category || lesson.category;

    await lesson.save();

    res.status(201).json(lesson);
  } catch (err) {
    next(err);
  }
};

export const deleteLesson = async (req, res, next) => {
  try {
    const { id } = req.params;

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

export const countLessons = async (req, res, next) => {
  try {
    const count = await Lesson.count();
    res.status(200).json({ count });
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
