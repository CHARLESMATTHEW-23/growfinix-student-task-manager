const express = require("express");
const cors = require("cors"); // cross origin resource sharing 
const app = express();
const PORT = 5001;
app.use(cors());
app.use(express.json());
// Temporary task storage
let tasks = [];
let nextId = 1;
// Home route
app.get("/", (req, res) => {
    res.send("Student Task Manager Backend is Running!");
});
// Health check
app.get("/api/health", (req, res) => {
    res.json({
        success: true,
        message: "Backend API is working successfully!"
    });
});
// CREATE TASK
app.post("/api/tasks", (req, res) => {
    const { title, description, deadline } = req.body;
    if (!title) {
        return res.status(400).json({
            success: false,
            message: "Task title is required"
        });
    }
    const newTask = {
        id: nextId++,
        title,
        description: description || "",
        deadline: deadline || "",
        completed: false
    };
    tasks.push(newTask);
    res.status(201).json({
        success: true,
        message: "Task created successfully",
        task: newTask
    });
});
// READ ALL TASKS
app.get("/api/tasks", (req, res) => {
    res.json({
        success: true,
        tasks
    });
});
// UPDATE TASK
app.put("/api/tasks/:id", (req, res) => {
    const id = Number(req.params.id);
    const task = tasks.find(t => t.id === id);
    if (!task) {
        return res.status(404).json({
            success: false,
            message: "Task not found"
        });
    }
    Object.assign(task, req.body, { id: task.id });
    res.json({
        success: true,
        message: "Task updated successfully",
        task
    });
});
// DELETE TASK
app.delete("/api/tasks/:id", (req, res) => {
    const id = Number(req.params.id);
    const taskExists = tasks.some(t => t.id === id);
    if (!taskExists) {
        return res.status(404).json({
            success: false,
            message: "Task not found"
        });
    }
    tasks = tasks.filter(t => t.id !== id);
    res.json({
        success: true,
        message: "Task deleted successfully"
    });
});
// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
