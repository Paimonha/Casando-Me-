const sequelize = require("./bd/banco")
const User = require('.//model/usuario')

sequelize.sync({ force: true })