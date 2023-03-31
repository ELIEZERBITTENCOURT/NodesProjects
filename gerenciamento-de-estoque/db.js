const Produto = require('./models/produto');
const sequelize = require('./config/database');

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexão com o banco de dados estabelecida com sucesso.');

    await sequelize.sync({ force: true });
    console.log('Todas as tabelas sincronizadas com sucesso.');
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
  }
})();
