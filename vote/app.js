const express = require('express');
const app = express();

// Configurações do Express
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Rotas
const routes = require('./routes');
app.use('/', routes);

// Inicia o servidor
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Servidor iniciado na porta ${port}`));
