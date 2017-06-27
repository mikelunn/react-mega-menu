/**
 * Created by complunm on 6/21/2017.
 */

import {INITIALIZE, MENU_BACK, MENU_FORWARD, TOGGLE_NAV} from "./layout.constants";
import {push} from "react-router-redux";
export function toggleNav() {
    return {
        type: TOGGLE_NAV
    }
}

export function initialize(items) {
    return {
        type: INITIALIZE,
        payload:items
    }
}
export function menuForward(items) {
    console.log("menu-forward")
    return {
        type: MENU_FORWARD,
        payload:items
    }
}
export function menuBack(items) {
    return {
        type: MENU_BACK,
        payload:items
    }
}
export function menuItemActivate(item) {
    console.log(item);
    return dispatch => {
        if(item.children){
            dispatch(menuForward(item.children));
        }
        else{
            dispatch(toggleNav());
            //route to component here then toggle nav
            dispatch(push(item.route));
        }
    }
}