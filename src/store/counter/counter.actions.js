/**
 * Created by complunm on 6/20/2017.
 */

import {DECREMENT_COUNT_ACTION, INCREMENT_COUNT_ACTION} from "./counter.constants";

export function increment() {
    return {
        type: INCREMENT_COUNT_ACTION
    }
}

export function decrement() {
    return {
        type: DECREMENT_COUNT_ACTION
    }
}

