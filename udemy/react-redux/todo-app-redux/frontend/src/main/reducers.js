/**
 * Esse arquivo que concentra todos os reducers
 * da aplicação
 */

// Combina os reducers
import {combineReducers} from 'redux';

// Reducer que combina todos os outros reducers
const rootReducer = combineReducers({
    todo: () => ({
        description: 'Ler Livro',
        list: [{
            _id: 1,
            description: 'Pagar fatura do cartão',
            done: true
        }, {
            _id: 2,
            description: 'Reunião com a equipe as 10:00',
            done: false
        }, {
            _id: 3,
            description: 'Consulta médica na terça depois do almoço',
            done: false
        }]
    })
});

export default rootReducer;