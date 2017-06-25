/**
 * Created by complunm on 6/20/2017.
 */
import { combineReducers } from 'redux';
import counter from "./counter/counter.reducer";
import layout from "./layout/layout.reducer";

const rootReducer = combineReducers({
    counter,
    layout
});

export default rootReducer;