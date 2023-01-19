const { Shoes } = require("../models");

async function index(req, res) {
  console.log(req.query);
  try {
    if (req.query) {
      const shoes = await Shoes.findAll(req.query);
      res.status(200).json(shoes);
    }
    if (req.query.popularSales) {
      const poopularShoes = await Shoes.findAll({
        where: { popularSales: req.query.popularSales === "true" },
      });
      res.status(200).json(poopularShoes);
    } else if (req.query.topRated) {
      const topRatedShoes = await Shoes.findAll({
        where: { topRated: req.query.topRated === "true" },
      });
      res.status(200).json(topRatedShoes);
    } else {
      res.status(200).json({ message: "product not found" });
    }
  } catch (error) {
    res.statur(400).json(error);
  }
}

async function show(req, res) {
  try {
    const oneProduct = await Shoes.findByPk(req.params.id);
    if (oneProduct) {
      res.status(200).json(oneProduct);
    } else {
      res.status(404).json({ message: "product not found" });
    }
  } catch (error) {
    res.status(400).json(error);
  }
}

module.exports = {
  index,
  show,
};
