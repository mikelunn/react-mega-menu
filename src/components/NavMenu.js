/**
 * Created by complunm on 6/21/2017.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NavMenuItem from './NavMenuItem';

class NavMenu extends Component {

    render() {
        const separatorStyle = {
            marginTop: 50
        };
        return (
            <div  id="overlay" className={this.props.open ? 'overlay open' : 'overlay'} aria-hidden="true">
                <div id="separator" className="row" style={separatorStyle}></div>
            <div className="tile-menu">
                {this.props.items.map((item, key) => <NavMenuItem activate={this.props.onActivate} key={key} navItem={item}/> )}
            </div>
            </div>
        );
    }

}
NavMenu.propTypes = {
    open: PropTypes.bool.isRequired,
    items: PropTypes.array.isRequired,
    onActivate: PropTypes.func
}
NavMenu.defaultProps = {
    open: false
}



export default NavMenu;
