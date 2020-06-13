import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App'
import './scss/main.scss'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './app/common/redux/reducers'

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

