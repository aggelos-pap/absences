import Category from "../models/Category.js";
import mongoose from "mongoose";

export const createCategory = async (req, res, next) => {
  const newCategory = new Category(req.body);
  console.log(newCategory.toObject());
  try {
    const savedCategory = await newCategory.save();
    res.status(200).json(savedCategory);
  } catch (err) {
    next(err);
  }
};

export const updateCategory = async (req, res, next) => {
  try {
    const updatedCategory = await Category.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedCategory);
  } catch (err) {
    next(err);
  }
};

export const deleteCategory = async (req, res, next) => {
  try {
    await Category.findByIdAndDelete(req.params.id);
    res.status(200).json("Deleted category successfully");
  } catch (err) {
    next(err);
  }
};

export const getCategories = async (req, res, next) => {
  try {
    const categories = await Category.find();
    // console.log(categories); // eslint-disable-line no-console
    res.status(200).json(categories);
  } catch (err) {
    next(err);
  }
};

export const countCategories = async (req, res, next) => {
  try {
    const count = await Category.count();
    res.status(200).json({ count });
  } catch (err) {
    next(err);
  }
};

export const getCategory = async (req, res, next) => {
  try {
    const category = await Category.findById(req.params.id);
    res.status(200).json(category);
  } catch (err) {
    next(err);
  }
};

//   const countAll = await Category.find();
// const countAll = await Category.countDocuments({}, { hint: "_id" });
