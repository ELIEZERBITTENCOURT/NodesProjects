const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Produto extends Model {}

Produto.init({
  nome: DataTypes.STRING,
  descricao: DataTypes.STRING,
  preco: DataTypes.FLOAT,
  quantidade: DataTypes.INTEGER,
}, { sequelize, modelName: 'produto' });

module.exports = Produto;
