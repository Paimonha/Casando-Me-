const Sequelize = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./bd/Casando.sqlite",
});

module.exports = sequelize;
