module.exports = (Sequelize) => {
  const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST,
      dialect: process.env.DB_DIALECT,
    }
  );

  //models
  const turtle = require("../models/turtle")(Sequelize, sequelize);
  const pizza = require("../models/pizza")(Sequelize, sequelize);
  const weapon = require("../models/weapon")(Sequelize, sequelize);

  return {
    sequelize,

    turtle,
    pizza,
    weapon,
  };
};
