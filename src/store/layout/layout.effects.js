/**
 * Created by complunm on 6/23/2017.
 */

import {menuItemActivate} from "./layout.actions";
export function activateMenu(navItem){
    return (dispatch) => {
        dispatch(menuItemActivate(navItem))
    }
}