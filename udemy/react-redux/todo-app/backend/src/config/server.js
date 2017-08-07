/* Arquivo responsável pelos Web Services */

// Porta do Servidor
const port = 3003;

// Parse do corpo da requisição
const bodyParser = require('body-parser');
// Servidor Web
const express = require('express');
// Instancia do Express
const server = express();

/* Middleware responsável pelas requisições do padrão 'urlencoded' 
(Padrão usado na submissão de formulários) */
server.use(bodyParser.urlencoded({extended: true}));
// Middleware que faz o parse dos JSONs
server.use(bodyParser.json());

// Monitora a porta
server.listen(port, () => {
    console.log(`BACKEND is running on port ${port}`);
});

module.exports = server;