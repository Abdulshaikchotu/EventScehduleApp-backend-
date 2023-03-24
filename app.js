const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const eventrouter = require("./routes/eventroutes");
const mongoose = require("mongoose");
app.use(eventrouter);
mongoose
  .connect("mongodb://0.0.0.0:27017/eventschduleApp")
  .then(() => console.log("connected to database"));

app.listen(5000, () => console.log("server is up at 5000"));
