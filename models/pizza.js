module.exports = (Sequelize, sequelize) => {
  return sequelize.define("Pizzas", {
    id: {
      type: Sequelize.STRING,
      primaryKey: true,
      autoincrement: true,
    },
    name: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    calories: {
      type: Sequelize.DOUBLE,
    },
  });
};
