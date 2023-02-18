# API RESTful

Uma API RESTful é uma interface de programação de aplicativos (API) baseada na arquitetura REST,
que permite que os usuários criem, atualizem, leiam e excluam recursos usando métodos HTTP padrão
(GET, POST, PUT, DELETE).
Essa abordagem é amplamente usada na construção de aplicativos da web e móveis modernos.

## Tecnologias utilizadas

- _Node.js_: plataforma de desenvolvimento JavaScript para construir aplicativos do lado do servidor
- _Express_: framework para construção de aplicativos web do lado do servidor em Node.js
- _MYSQL_: sistema de gerenciamento de banco de dados relacional para armazenar os recursos

## Configuração do ambiente

Para executar a API RESTful, é necessário ter o Node.js e o MySQL instalados no computador.

### Passos

1. Clone o repositório para o seu computador
2. Instale as dependências do projeto usando o comando `npm install`
3. Crie um banco de dados MySQL e uma tabela para armazenar os recursos.
   Aqui está um exemplo de como criar uma tabela:
```
CREATE TABLE recursos (
  id INT NOT NULL AUTO_INCREMENT,
  nome VARCHAR(255) NOT NULL,
  descricao VARCHAR(255) NOT NULL,
  data_criacao DATETIME NOT NULL,
  data_atualizacao DATETIME NOT NULL,
  PRIMARY KEY (id)
);
```
4. Configure as informações de conexão do banco de dados no arquivo `api.js`
5. Inicie a API RESTful usando o comando `npm start`

## Endpoints

A API RESTful possui os seguintes endpoints:
- `GET /recursos`: retorna uma lista de todos os recursos
- `GET /recursos/`:id: retorna um recurso específico com base no ID
- `POST /recursos`: cria um novo recurso
- `PUT /recursos/:id`: atualiza um recurso existente com base no ID
- `DELETE /recursos/:id`: exclui um recurso existente com base no ID

Cada endpoint deve retornar uma resposta HTTP adequada com o status e o corpo apropriados.
O status HTTP indica se a solicitação foi bem-sucedida ou não e o corpo contém os dados do recurso.

### Exemplo de uso

Para criar um novo recurso, faça uma solicitação POST para /recursos com os dados do recurso no corpo
da solicitação. Por exemplo:
```
POST /recursos HTTP/1.1
Host: localhost:3000
Content-Type: application/json

{
  "nome": "Recurso 1",
  "descricao": "Descrição do recurso 1"
}
```
A API deve responder com um status 201 Created e o corpo da resposta deve conter os dados do recurso
criado.

Para atualizar um recurso existente, faça uma solicitação PUT para `/recursos/:id` com os dados
atualizados no corpo da solicitação. Por exemplo:
```
PUT /recursos/1 HTTP/1.1
Host: localhost:3000
Content-Type: application/json

{
  "nome": "Recurso 1 atualizado",
  "descricao": "Nova descrição do recurso 1"
}
```
A API deve responder com um status 200 OK e o corpo da resposta deve conter os dados do recurso
atualizado.
