////////////////////////////////////////
// Import Dependencies
////////////////////////////////////////
const express = require("express");
const People = require("../models/people");
///////////////////////////////

/////////////////////////////////////////
// Create Route
/////////////////////////////////////////
const router = express.Router();

// ROUTES////////////////////////////////

  // PEOPLE INDEX ROUTE
  router.get("/", async (req, res) => {
    try {
      // send all people
      res.json(await People.find({}));
    } catch (error) {
      //send error
      res.status(400).json(error);
    }
  });
  
  router.get("/:id", async (req, res) => {
    try {
      res.json(await People.findById(req.params.id)).status(200);
    } catch (error) {
      res.status(400).json(error);
      console.log("error", error);
    } finally {
      console.log("this is finally");
    }
  });
  
  // PEOPLE CREATE ROUTE
  router.post("/", async (req, res) => {
    try {
      // send all people
      res.json(await People.create(req.body));
    } catch (error) {
      //send error
      res.status(400).json(error);
    }
  });

  // PEOPLE UPDATE ROUTE
  router.put("/:id", async (req, res) => {
    try {
      // send all people
      res.json(
        await People.findByIdAndUpdate(req.params.id, req.body, { new: true })
      );
    } catch (error) {
      //send error
      res.status(400).json(error);
    }
  });
  
  // PEOPLE DELETE ROUTE
  router.delete("/:id", async (req, res) => {
    try {
      // send all people
      res.json(await People.findByIdAndRemove(req.params.id));
    } catch (error) {
      //send error
      res.status(400).json(error);
    }
  });


  module.exports = router;