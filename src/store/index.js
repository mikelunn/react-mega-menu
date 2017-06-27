/**
 * Created by complunm on 6/20/2017.
 */
import { combineReducers } from 'redux';
import counter from "./counter/counter.reducer";
import layout from "./layout/layout.reducer";
import { routerReducer} from 'react-router-redux'
const rootReducer = combineReducers({
    counter,
    layout,
    router: routerReducer
});

export default rootReducer;