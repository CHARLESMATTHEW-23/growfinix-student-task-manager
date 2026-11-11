require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Task = require("./models/task");
const authRoutes = require("./routes/authroutes");
const authMiddleware = require("./middleware/authmiddleware");
const app = express();
const PORT = 5001;
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("MongoDB Atlas connected successfully!");

        app.listen(PORT, () => {
            console.log(`Server running at http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.error("MongoDB connection failed:", error.message);
    });

// Home route
app.get("/", (req, res) => {
    res.send("Student Task Manager Backend is Running!");
});

// CREATE TASK
app.post("/api/tasks", authMiddleware,async (req, res) => {
    try {
        const task = await Task.create(req.body);

        res.status(201).json({
            success: true,
            message: "Task created successfully",
            task
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
});

// READ ALL TASKS
app.get("/api/tasks", authMiddleware, async (req, res) => {
    try {
        
const { search, status } = req.query;

const filter = {};

// Filter by completion status
if (status === "completed") {
    filter.completed = true;
} else if (status === "pending") {
    filter.completed = false;
}

// Search by title or description
if (search) {
    filter.$or = [
        { title: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } }
    ];
}

const tasks = await Task.find(filter);


        res.json({
            success: true,
            tasks
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

// UPDATE TASK
app.put("/api/tasks/:id", authMiddleware,async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!task) {
            return res.status(404).json({
                success: false,
                message: "Task not found"
            });
        }

        res.json({
            success: true,
            message: "Task updated successfully",
            task
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
});

// DELETE TASK
app.delete("/api/tasks/:id",authMiddleware, async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);

        if (!task) {
            return res.status(404).json({
                success: false,
                message: "Task not found"
            });
        }

        res.json({
            success: true,
            message: "Task deleted successfully"
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
});
