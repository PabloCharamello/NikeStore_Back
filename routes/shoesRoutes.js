const express = require("express");
const routes = express.Router();
const shoesController = require("../controllers/shoesController");

routes.get("/shoes", shoesController.index);

module.exports = routes;
