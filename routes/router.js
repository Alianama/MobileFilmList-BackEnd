const express = require("express");
const router = express.Router();

const addFilmHandler = require("./handler/addFilmHandler.js");
const getDataFilmHandler = require("./handler/getDataFilmHandler.js");
const deleteFilmHandler = require("./handler/deleteFilmHandler.js");
const getEachFilmHandler = require("./handler/getEachFilmHandler.js");

router.post("/addfilm", addFilmHandler);
router.get("/getfilm", getDataFilmHandler);
router.post("/deletefilm/:id", deleteFilmHandler);
router.get("/geteachfilm/:id", getEachFilmHandler);

module.exports = router;
