import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import App from './main/app';
import reducers from './main/reducers';

// Cria o estado único da aplicação
const store = createStore(reducers);

ReactDOM.render(
    /**
     * O Provider envolve toda a aplicação para
     * passar o estado único
     */
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('app'));