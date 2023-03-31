const express = require('express');
const router = express.Router();
const Produto = require('../models/produto');

// Obter todos os produtos
router.get('/', async (req, res) => {
  try {
    const produtos = await Produto.findAll();
    res.json(produtos);
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao obter os produtos.');
  }
});

// Obter um produto pelo ID
router.get('/:id', async (req, res) => {
  try {
    const produto = await Produto.findByPk(req.params.id);
    if (produto === null) {
      res.status(404).send('Produto não encontrado.');
    } else {
      res.json(produto);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao obter o produto.');
  }
});

// Adicionar um novo produto
router.post('/', async (req, res) => {
  try {
    const produto = await Produto.create(req.body);
    res.json(produto);
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao adicionar o produto.');
  }
});

// Atualizar um produto pelo ID
router.put('/:id', async (req, res) => {
  try {
    const produto = await Produto.findByPk(req.params.id);
    if (produto === null) {
      res.status(404).send('Produto não encontrado.');
    } else {
      await produto.update(req.body);
      res.json(produto);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao atualizar o produto.');
  }
});

// Excluir um produto pelo ID
router.delete('/:id', async (req, res) => {
  try {
    const produto = await Produto.findByPk(req.params.id);
    if (produto === null) {
      res.status(404).send('Produto não encontrado.');
    } else {
      await produto.destroy();
      res.send('Produto excluído com sucesso.');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao excluir o produto.');
  }
});

module.exports = router;
