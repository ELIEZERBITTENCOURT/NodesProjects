const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('gerenciamento_de_estoque', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
// Observe que definimos o nome do banco de dados como gerenciamento_de_estoque e 
// usamos as credenciais padrão (root e nenhum password). 
// Certifique-se de alterar essas informações para as credenciais corretas do seu banco de dados MySQL.