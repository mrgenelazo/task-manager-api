const express = require("express");
const dotenv = require("dotenv").config();
const connectDB = require("./config/connectDB");
const app = express();
const Task = require("./model/taskModel");
const taskRoutes = require("./routes/taskRoute");

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(taskRoutes);

//Routes
app.get("/", (req, res) => {
  res.send("Home Page");
});

const port = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
startServer();
