const sequelize = require("./bd/banco")
const User = require('.//model/usuario')
const Cerimonialista = require('.//model/cerimonialista')

sequelize.sync({ force: true }).then(() => {
    console.log('Banco de dados sincronizado.');
  }).catch((error) => {
    console.error('Erro ao sincronizar banco de dados:', error);
  });