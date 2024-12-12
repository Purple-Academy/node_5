module.exports = (Sequelize, sequelize) => {
  return sequelize.define("Weapons", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoincrement: true,
    },
    name: {
      type: Sequelize.STRING,
    },
    dps: {
      type: Sequelize.INTEGER,
    },
  });
};
