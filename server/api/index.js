const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

//Routes
const questionsRoute = require("../routes/questions");

//Middlewares
app.use(express.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/questions", questionsRoute);

//Connect and start api
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connected!"))
  .catch((error) => console.log(`${error} did not connect`));

export default {
  path: "/api",
  handler: app,
};
