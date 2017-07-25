const webpack = require('webpack');

module.exports = {
    // A partir desse arquivo a aplicação será carregada
    entry: './ex/index.js',
    // Aonde a saida do arquivo javascript vai ser gerado
    output: {
        /*
        __dirname: variavel de ambiente disponibilizada pelo
        node que indica o diretório atual
        */
        path: __dirname + '/public',
        // Nome do arquivo gerádo pelo webpack
        filename: './bundle.js'
    },
    // Webpack Dev Server
    devServer: {
        // Porta do Servidor
        port: 8080,
        // Pasta Base onde estarão os arquivos que deverão ser carregados
        contentBase: './public'
    }
};