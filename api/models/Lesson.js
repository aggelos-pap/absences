import mongoose from "mongoose";

const LessonSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    absences: {
      type: Map,
      of: Number,
      required: true,
      default: {},
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Lesson || mongoose.model("Lesson", LessonSchema);
