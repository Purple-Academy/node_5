module.exports = (Sequelize) => {
  const sequelize = new Sequelize(
    "postgres",
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST,
      dialect: process.env.DB_DIALECT,
    }
  );

  //models
  const turtle = require("../models/turtle");

  return {
    sequelize,

    turtle,
  };
};
