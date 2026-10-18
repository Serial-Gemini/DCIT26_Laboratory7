import "dotenv/config";
import express from "express";
import cors from "cors";

import mongoose from "mongoose";

import Student from "./models/students.js";
import Faculty from "./models/faculty.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/students", async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch students" });
  }
});

app.get("/api/faculty", async (req, res) => {
  try {
    const faculty = await Faculty.find();
    res.json(faculty);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch faculty" });
  }
});

app.get("/", (req, res) => {
  res.send("Student Portal API is running");
});

const PORT = process.env.PORT || 5000;

if (process.env.MONGO_URI) {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("Connected to MongoDB Atlas");

      app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
      });
    })
    .catch((error) => {
      console.error("MongoDB connection failed:", error.message);
      process.exit(1);
    });
} else {
  console.error("MONGO_URI is missing from .env");
  process.exit(1);
}

export default app;
