# Sistema de Gerenciamento de Estoque

Este é um projeto de um sistema simples de gerenciamento de estoque criado usando
Node.js e MySQL. O sistema permite gerenciar a quantidade e o status do estoque, com
funcionalidades como adicionar, atualizar e excluir produtos.

## Requisitos

- _Node.js_
- _MySQL_

## Instalação

1. Clone o repositório em sua máquina.
2. Na pasta raiz do projeto, execute o comando npm install para instalar as dependências.
3. Crie um banco de dados MySQL com o nome estoque e execute o script database.sql para criar a tabela de produtos.
4. Configure as informações de conexão com o banco de dados no arquivo config.js.
5. Inicie o servidor com o comando ```node index.js```.

## Rotas

- GET /produtos: retorna todos os produtos cadastrados no banco de dados.
- GET /produtos/:id: retorna o produto com o ID especificado.
- POST /produtos: adiciona um novo produto.
- PUT /produtos/:id: atualiza o produto com o ID especificado.
- DELETE /produtos/:id: exclui o produto com o ID especificado.

## Exemplo de corpo de requisição para adicionar ou atualizar um produto

```
{
  "nome": "Produto 1",
  "descricao": "Descrição do Produto 1",
  "quantidade": 10,
  "status": "disponivel"
}
```
