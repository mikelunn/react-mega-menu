import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import thunkMiddleware from 'redux-thunk'
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducers from './store/index';

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
