const db = require("./models");
module.exports = async () => {
  await db.sequelize.sync({ force: true });
  await require("./seeders/shoesSeeders")();
  console.log("hola");
};
