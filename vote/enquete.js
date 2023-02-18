const mongoose = require('mongoose');

const enqueteSchema = new mongoose.Schema({
  pergunta: String,
  opcoes: [{ nome: String, votos: Number }],
});

enqueteSchema.methods.votar = function(opcao) {
  const index = this.opcoes.findIndex(o => o.nome === opcao);
  if (index !== -1) {
    this.opcoes[index].votos++;
  }
};

module.exports = mongoose.model('Enquete', enqueteSchema);