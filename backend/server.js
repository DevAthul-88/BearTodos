require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoute = require("./Routes/userRouter");
const todoRoute = require("./Routes/todoRouter");

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect(process.env.MONGO_URL, (err) => {
  if (err) return console.error(err);
  console.log("Database connection established");
});

app.use("/user", userRoute);
app.use("/todo", todoRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});
