import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { carReducer } from './components/Reducers/carReducer';
import { createStore } from 'redux';

import 'bulma/css/bulma.css';
import './styles.scss';

const store = createStore(carReducer);
console.log("*******", store.getState());

const rootElement = document.getElementById('root');
ReactDOM.render(<Provider store={store}>
    <App />
    </Provider>, 
    rootElement);
