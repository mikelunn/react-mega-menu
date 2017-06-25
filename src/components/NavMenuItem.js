/**
 * Created by complunm on 6/21/2017.
 */
/**
 * Created by complunm on 6/21/2017.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';


class NavMenuItem extends Component {

    render() {
        return (
            <div className="tile-menu__wrap">
                <a className="tile-menu__link" onClick={() => this.props.activate(this.props.navItem)} >
                <div className="tile-menu__pic">
                    <i className={`fa ${this.props.navItem.icon}  fa-3x icon-green`}></i>
                </div>
                <div className="tile-menu__title">{this.props.navItem.name}
                </div>
            </a>
    </div>
        );
    }

}
NavMenuItem.propTypes = {
    navItem: PropTypes.object.isRequired,
    activate: PropTypes.func
}

export default NavMenuItem;
