const { Shoes } = require("../models");

async function index(req, res) {
  console.log(req.query);
  if (req.query.popularSales) {
    const shoes = await Shoes.findAll({
      where: { popularSales: req.query.popularSales },
    });
    res.status(200).json(shoes);
    //   } else if (req.query.topRated) {
    //     const shoes = await Shoes.findAll({
    //       where: { topRated: req.query.topRated },
    //     });
    //     res.status(200).json(shoes);
    //
  } else {
    const shoes = await Shoes.findAll();
    res.status(200).json({ message: "hola" });
  }
}
module.exports = {
  index,
};
