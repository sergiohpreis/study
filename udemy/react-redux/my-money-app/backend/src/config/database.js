const mongoose = require('mongoose');
/**
 * Para evitar erros no console.
 * A API de Promise do Mongoose será descontinuada,
 * por isso, estamos referenciando o método Promise para
 * o objeto global do NodeJS
 */
mongoose.Promise = global.Promise;

module.exports = mongoose.connect('mongodb://localhost/mymoney')