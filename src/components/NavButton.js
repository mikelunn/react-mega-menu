/**
 * Created by complunm on 6/21/2017.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';


class NavButton extends Component {

    render() {
        return (
            <div className={this.props.active ? 'button_container active': 'button_container'} id="toggle" onClick={this.props.toggle}>
                <span className="top"></span>
                <span className="middle"></span>
                <span className="bottom"></span>
            </div>
        );
    }

}
NavButton.propTypes = {
    active: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired
}
NavButton.defaultProps = {
    navButtonActive: false
}

export default NavButton;