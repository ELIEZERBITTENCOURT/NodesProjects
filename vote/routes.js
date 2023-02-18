const express = require('express');
const router = express.Router();
const Enquete = require('./enquete');

// Página inicial (lista de enquetes)
router.get('/', async (req, res) => {
  const enquetes = await Enquete.find();
  res.render('index', { enquetes });
});

// Página para criar uma nova enquete
router.get('/nova-enquete', (req, res) => {
  res.render('nova-enquete');
});

// Ação para criar uma nova enquete
router.post('/nova-enquete', async (req, res) => {
  const { pergunta, opcoes } = req.body;
  const enquete = new Enquete({ pergunta, opcoes });
  await enquete.save();
  res.redirect('/');
});

// Página da enquete
router.get('/enquete/:id', async (req, res) => {
  const enquete = await Enquete.findById(req.params.id);
  res.render('enquete', { enquete });
  });
  
  // Ação para votar em uma opção da enquete
  router.post('/enquete/:id/votar', async (req, res) => {
  const { opcao } = req.body;
  const enquete = await Enquete.findById(req.params.id);
  enquete.votar(opcao);
  await enquete.save();
  res.redirect(`/enquete/${req.params.id}`);
  });
  
  module.exports = router;
