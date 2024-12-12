const Sequelize = require("sequelize");
const express = require("express");

require("dotenv").config();

const db = require("./config")(Sequelize);
const app = express();

db.sequelize
  .sync({})
  .then(() => {
    console.log("💾 Connected to Database!");

    app.listen(process.env.PORT || 3000, () => {
      console.log(`🚀 Server Started at http://localhost:${process.env.PORT}`);
    });
  })
  .catch((e) => console.log("error", e));
