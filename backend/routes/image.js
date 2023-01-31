const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
const fetchuser = require("../middleware/fetchuser");
const Image = require("../models/Image");
const multer = require("multer");
const fs = require("fs");
const ImageModel = require("../models/Image");

const Storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: Storage,
});

router.post(
  "/upload",
  upload.single("testImage"),
  fetchuser,
  async (req, res) => {
    try {
      // const { name, testImage } = req.body;
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const saveImage = new ImageModel({
        name: req.body.name,
        img: {
          data: fs.readFileSync("uploads/" + req.file.filename),
          contentType: "image/png",
        },
        user: req.user.id,
      });
      const savedimg = await saveImage.save().then((res) => {
        console.log("image is saved");
      });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
    res.send("image is saved");
  }
);

router.get("/getimg", fetchuser, async (req, res) => {
  try {
    const allData = await ImageModel.find();
    res.json(allData);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

router.put(
  "/updateimg/:id",
  upload.single("testImage"),
  fetchuser,
  async (req, res) => {
    const { testImage } = req.body;
    try {
      const newImage = {};
      if (testImage) {
        newImage.testImage = testImage;
      }
      let newimg = await Image.findById(req.params.id);
      if (!newimg) {
        res.status(404).send("Not Found");
      }
      if (newimg.user.toString() !== req.user.id) {
        return res.status(401).send("Not Allowed");
      }

      newimg = await Image.findByIdAndUpdate(
        req.params.id,
        { $set: newImage },
        { new: true }
      );
      console.log("Image Updated");
      res.json({ newimg });
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

module.exports = router;
