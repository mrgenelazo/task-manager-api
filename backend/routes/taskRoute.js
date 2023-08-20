const express = require("express");
const Task = require("../model/taskModel");
const router = express.Router();
const { createTask, getTasks } = require("../controllers/taskController");

//Create Tasks
router.post("/api/tasks", createTask);

//Get/Read Data
router.get("/api/tasks", getTasks);

module.exports = router;
