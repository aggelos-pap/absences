import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import cateRoute from "./routes/categories.js";
import lessRoute from "./routes/lessons.js";
import userRoute from "./routes/users.js";

const app = express();
dotenv.config();

//Google dns required to connect to db :))))
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to database.");
  } catch (err) {
    console.log(err);
    throw err;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("Disconnected from database.");
});

//Middleware & routes

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/categories", cateRoute);
app.use("/api/lessons", lessRoute);

//Error handling
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(8800, () => {
  connect();
  console.log("Connected to backend.");
});
