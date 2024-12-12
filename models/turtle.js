module.exports = (Sequelize, sequelize) => {
  return sequelize.define("Turtles", {
    id: {
      type: Sequelize.STRING,
      primaryKey: true,
      autoincrement: true,
    },
    name: {
      type: Sequelize.STRING,
    },
    color: {
      type: Sequelize.STRING,
    },
    weaponId: {
      type: Sequelize.STRING,
    },
    firstFavoritePizzaId: {
      type: Sequelize.INTEGER,
    },
    secondFavoritePizzaId: {
      type: Sequelize.INTEGER,
    },
  });
};
