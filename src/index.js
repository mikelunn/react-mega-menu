import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk'
import registerServiceWorker from './registerServiceWorker';
import App from "./App";
import './index.css';
import { createStore, applyMiddleware } from 'redux'
import reducers from './store/index';
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware, ConnectedRouter} from 'react-router-redux'
import * as RoutesModule from './components/routes';

const history = createHistory();
const middleware = routerMiddleware(history);

const store = createStore(reducers,  applyMiddleware(thunkMiddleware, middleware));
// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/foo'))
ReactDOM.render(
    <Provider store={store}>
        <div>
            <App />
            <ConnectedRouter history={history} children={RoutesModule.routes}/>
        </div>

    </Provider>, document.getElementById('root'));
registerServiceWorker();
