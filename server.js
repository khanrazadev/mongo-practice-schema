import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/connection.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3010;
connectDB();

app.use(express.json());

app.listen(PORT, () => {
  console.log("App is running on port", PORT);
});
