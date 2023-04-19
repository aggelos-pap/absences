import mongoose from "mongoose";

const LessonSchema = new mongoose.Schema(
  {
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    title: {
      type: String,
      required: true,
    },
    absencesAllowed: {
      type: Number,
      required: true,
    },
    absencesCompleted: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Lesson", LessonSchema);
