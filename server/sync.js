const sequelize = require("./bd/banco")
const User = require('.//model/usuario')


sequelize.sync({ force: true }).then(() => {
    console.log('Banco de dados sincronizado.');
  }).catch((error) => {
    console.error('Erro ao sincronizar banco de dados:', error);
  });