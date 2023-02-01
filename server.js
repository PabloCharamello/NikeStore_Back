require("dotenv").config();
const express = require("express");
const routes = require("./routes");
// const cors = require("cors");
const dbInitialSetup = require("./dbInitialSetup");

const app = express();

const APP_PORT = process.env.PORT || 8000;
// app.use(cors);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

routes(app);
dbInitialSetup();

app.listen(APP_PORT, () => {
  console.log(`server listening on port ${APP_PORT}`);
});
