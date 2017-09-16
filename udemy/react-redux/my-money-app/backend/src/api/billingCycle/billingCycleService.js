const BillingCycle = require('./billingCycle');

// Métodos que serão atendidos pela aplicação
BillingCycle.methods(['get', 'post', 'put', 'delete']);
/**
 * new - Retorna o objeto novo ao ser feito um update
 * runValidators - Executará as validações no update
 */
BillingCycle.updateOptions({new: true, runValidators: true});

module.exports = BillingCycle;