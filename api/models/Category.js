import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    semesters: {
      type: [String],
      required: true,
    },
    amountOfLessons: {
      type: Number,
      required: true,
    },
    lessonsPerSemester: {
      type: Map,
      of: Number,
      required: true,
      validate: {
        validator: function (v) {
          return Object.keys(v).length === this.semesters.length;
        },
        message: (props) =>
          `${props.value} does not match semesters array length`,
      },
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Category ||
  mongoose.model("Category", CategorySchema);
