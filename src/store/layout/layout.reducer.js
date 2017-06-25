/**
 * Created by complunm on 6/21/2017.
 */
import * as actions from "./layout.constants";
const initialLayout = {
    navButtonActive: false,
    navMenuTitle: 'Main Menu',
    defaultNavItems: [
        {
            name: 'Home',
            icon: 'fa-home',
            route: '/'
        }
    ],
    initialNavItems: [],
    currentNavItems: [],
    previousNavItems: []
};
export default function layout(state = initialLayout, action) {
    switch(action.type){
        case actions.TOGGLE_NAV:
            return {...state, navButtonActive: !state.navButtonActive, currentNavItems: state.initialNavItems,
                previousNavItems: []};
        case actions.INITIALIZE:
            console.log(action);
            return {...state, initialNavItems:[].concat(state.defaultNavItems, action.payload)};
        case actions.MENU_FORWARD:
            console.log('in reducer');
            const newState = {...state, currentNavItems:action.payload};
            newState.previousNavItems.push(state.currentNavItems);
            return newState;
        case actions.MENU_BACK:
            const last = state.previousNavItems[state.previousNavItems.length - 1];
            const prev = state.previousNavItems;
            prev.pop();
            return {...state, currentNavItems: last, previousNavItems:prev};


        default:
            return state;
    }
}