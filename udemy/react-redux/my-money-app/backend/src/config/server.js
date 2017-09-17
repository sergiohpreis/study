const port = 3003;

const bodyParser = require('body-parser');
const express = require('express');
const server = express();
const allowCors = require('./cors');
const queryParser = require('express-query-int');

/**
 * Aplicando os middlewares, que são responsáveis por
 * interceptar as requisições e aplicar suas funções
 */
server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());
server.use(allowCors);
// Transforma as requisições numéricas em inteiros
server.use(queryParser());

server.listen(port, () => {
    console.log(`BACKEND is running on port ${port}`);
});

module.exports = server;