const { Shoes } = require("../models");

async function index(req, res) {
  try {
    if (req.query.popularSales && req.query.topRated) {
      const popularSalesAndTopRated = await Shoes.findAll({
        where: {
          popularSales: req.query.popularSales === "true",
          topRated: req.query.topRated === "true",
        },
      });
      if (popularSalesAndTopRated.length > 0) {
        res.status(200).json(popularSalesAndTopRated);
      } else {
        res.status(400).json({ message: "product not found" });
      }
    } else if (req.query.popularSales) {
      const popularShoes = await Shoes.findAll({
        where: { popularSales: req.query.popularSales === "true" },
      });
      if (popularShoes) {
        res.status(200).json(popularShoes);
      } else {
        res.status(400).json({ message: "product not found" });
      }
    } else if (req.query.topRated) {
      const topRatedShoes = await Shoes.findAll({
        where: { topRated: req.query.topRated === "true" },
      });
      if (topRatedShoes) {
        res.status(200).json(topRatedShoes);
      } else {
        res.status(400).json({ message: "product not found" });
      }
    } else {
      const shoes = await Shoes.findAll(req.query);
      if (shoes) {
        res.status(200).json(shoes);
      } else {
        res.status(400).json({ message: "product not found" });
      }
    }
  } catch (error) {
    res.status(400).json(error);
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
