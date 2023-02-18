const express = require('express');
const mysql = require('mysql');

const app = express();

// Configuração do banco de dados
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'senha',
  database: 'meu_banco_de_dados'
});

// Conexão com o banco de dados
connection.connect();

// Rota para criar um novo recurso
app.post('/recursos', (req, res) => {
  const { nome, descricao } = req.body;
  const dataCriacao = new Date();
  const dataAtualizacao = new Date();

  const sql = 'INSERT INTO recursos (nome, descricao, data_criacao, data_atualizacao) VALUES (?, ?, ?, ?)';
  connection.query(sql, [nome, descricao, dataCriacao, dataAtualizacao], (err, result) => {
    if (err) throw err;
    res.status(201).send('Recurso criado com sucesso');
  });
});

// Rota para atualizar um recurso existente
app.put('/recursos/:id', (req, res) => {
  const id = req.params.id;
  const { nome, descricao } = req.body;
  const dataAtualizacao = new Date();

  const sql = 'UPDATE recursos SET nome = ?, descricao = ?, data_atualizacao = ? WHERE id = ?';
  connection.query(sql, [nome, descricao, dataAtualizacao, id], (err, result) => {
    if (err) throw err;
    res.send('Recurso atualizado com sucesso');
  });
});

// Rota para ler um recurso existente
app.get('/recursos/:id', (req, res) => {
  const id = req.params.id;

  const sql = 'SELECT * FROM recursos WHERE id = ?';
  connection.query(sql, [id], (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

// Rota para excluir um recurso existente
app.delete('/recursos/:id', (req, res) => {
  const id = req.params.id;

  const sql = 'DELETE FROM recursos WHERE id = ?';
  connection.query(sql, [id], (err, result) => {
    if (err) throw err;
    res.send('Recurso excluído com sucesso');
  });
});

// Iniciar o servidor
app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});
