/**
 * Created by complunm on 6/20/2017.
 */
import * as actions from "./counter.constants";

export default function counter(state = 0, action) {
    switch(action.type){
        case actions.INCREMENT_COUNT_ACTION:
            return state = state + 1;
        case actions.DECREMENT_COUNT_ACTION:
            return state = state - 1;
        default:
            return state;
    }
}