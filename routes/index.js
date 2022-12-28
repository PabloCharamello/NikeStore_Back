const shoesRoutes = require("./shoesRoutes");

module.exports = (app) => {
  app.use(shoesRoutes);
};
