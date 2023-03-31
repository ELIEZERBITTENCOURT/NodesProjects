const express = require('express');
const app = express();
const produtosRoutes = require('./routes/produtos');

app.use(express.json());

app.use('/produtos', produtosRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});
