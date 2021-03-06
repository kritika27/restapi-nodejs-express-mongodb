const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");

const app = express();
app.use(cors());
app.use(bodyParser.json());

//Connecting to database
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useCreateIndex: true },
  () => console.log("Connected to databse.")
);

const userRouter = require("./routes/users");
app.use("/users", userRouter);

//Listening to server
app.listen(5000, () => {
  console.log("Server started.");
});
