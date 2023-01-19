const express = require("express");
const routes = express.Router();
const shoesController = require("../controllers/shoesController");

routes.get("/shoes", shoesController.index);
routes.get("/shoes/:id", shoesController.show);

module.exports = routes;
