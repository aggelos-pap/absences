import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app = express();
dotenv.config();

let mongourl = process.env.PORT_NUMBER;
console.log(process.env.mongourl);

// const connect = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO);
//     console.log("Connected to database.");
//   } catch (err) {
//     console.log(err);
//     throw err;
//   }
// };

// app.listen(8800, () => {
//   connect();
//   console.log("Connected to backend.");
// });
