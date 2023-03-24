const eventmodel = require("../models/eventmodel");
const express = require("express");
let Router = express.Router();
//creating event
Router.post("/post/v1/events", async (req, res) => {
  try {
    let postdata = await eventmodel.create(req.body);
    res.json({
      status: 200,
      data: postdata,
    });
  } catch (e) {
    res.json({
      status: "fail",
      msg: e.message,
    });
  }
});

//getting all the events data
Router.get("/get/v1/events", async (req, res) => {
  try {
    let getdata = await eventmodel.find();
    res.json({
      status: 200,
      data: getdata,
    });
  } catch (e) {
    res.json({
      status: "fail",
      msg: e.message,
    });
  }
});

//getting data with specific id
Router.get("/get/v1/events/:id", async (req, res) => {
  try {
    let getdata = await eventmodel.find({ _id: req.params.id });
    res.json({
      status: 200,
      data: getdata,
    });
  } catch (e) {
    res.json({
      httpcode: 404,
      status: "there is no id with that event",
      msg: e.message,
    });
  }
});
//deleteing event data with specific id
Router.delete("/delete/v1/events/:id", async (req, res) => {
  try {
    let getdata = await eventmodel.deleteOne({ _id: req.params.id });
    res.json({
      status: 200,
      data: getdata,
    });
  } catch (e) {
    res.json({
      httpcode: 404,
      status: "there is no id with that event",
      msg: e.message,
    });
  }
});
//deleteing event data with specific id
Router.put("/put/v1/events/:id", async (req, res) => {
  try {
    let getdata = await eventmodel.updateOne(
      { _id: req.params.id },
      {
        title: req.body.title,
        description: req.body.description,
        location: req.body.location,
        starttime: req.body.starttime,
        endtime: req.body.endtime,
      },
      {
        new: true,
      }
    );
    res.json({
      status: 200,
      data: getdata,
    });
  } catch (e) {
    res.json({
      httpcode: 404,
      status: "there is no id with that event",
      msg: e.message,
    });
  }
});

module.exports = Router;
