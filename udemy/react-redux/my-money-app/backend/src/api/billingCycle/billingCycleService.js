const BillingCycle = require('./billingCycle');

// Métodos que serão atendidos pela aplicação
BillingCycle.methods(['get', 'post', 'put', 'delete']);
/**
 * new - Retorna o objeto novo ao ser feito um update
 * runValidators - Executará as validações no update
 */
BillingCycle.updateOptions({new: true, runValidators: true});

BillingCycle.route('count', (req, res, next) => {
    BillingCycle.count((error, value) => {
        if (error) {
            res.status(500).json({errors: [error]});
        } else {
            res.json({value});
        };
    });
});

module.exports = BillingCycle;