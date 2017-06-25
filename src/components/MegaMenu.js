
import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../store/layout/layout.actions';
import NavButton from "./NavButton";
import NavMenu from "./NavMenu";

class MegaMenu extends Component {
    navItems = [
    {
        name: 'Parent',
        icon: 'fa-wrench',
        route: '/account',
        children: [
            {
                name: 'Change Password',
                icon: 'fa-unlock',
                route: '/account/password'
            },
            {
                name: 'Another Parent',
                icon: 'fa-credit-card',
                route: '/account/payment',
                children: [
                    {
                        name: 'Payment Settings',
                        icon: 'fa-credit-card',
                        route: '/account/payment',
                    },
                    {
                        name: 'Yet Another Parent',
                        icon: 'fa-credit-card',
                        route: '/account/payment',
                        children: [
                            {
                                name: 'Payment Settings',
                                icon: 'fa-credit-card',
                                route: '/account/payment',
                            }
                        ]
                    }
                ]
            },
            {
                name: 'Transaction History',
                icon: 'fa-history',
                route: '/account/history'
            }
        ]
    },
    {
        name: 'Features',
        icon: 'fa-car',
        route: '/features'
    },
    {
        name: 'Currency',
        icon: 'fa-money',
        route: '/features/currency'
    }];

    componentWillMount(){
        this.props.initialize(this.navItems);
    }
    backButton(){
        if(this.props.layout.previousNavItems.length > 0 && this.props.layout.navButtonActive){
            return (
                <div className="navbar-header">
                    <a className="navbar-brand" onClick={(e) => this.props.menuBack()}>Back</a>
                </div>
            )
        }

    }
    render() {
        const divStyle = {
            marginBottom: 75
        }
        return (
            <div style={divStyle}>
                <Navbar className="navbar navbar-inverse navbar-fixed-top">
                    <div className="container">
                        {this.backButton()}

                        <Navbar.Header className="navbar-header">
                            <Navbar.Brand className="navbar-brand navbar-title text-center center-block">
                                <a href="/">{
                                    this.props.layout.navButtonActive
                                        ? <span>Menu</span>
                                        : <img src="https://secure.miamibeachfl.gov/parking/content/images/mb-logo-w.png" alt="Miami Beach"/>}
                                </a>
                            </Navbar.Brand>
                            <NavButton active={this.props.layout.navButtonActive} toggle={(e) => this.props.toggleNav()}/>
                        </Navbar.Header>
                    </div>
                </Navbar>
                <NavMenu onActivate={this.props.menuItemActivate} items={this.props.layout.currentNavItems} open={this.props.layout.navButtonActive}/>
            </div>

        );
    }

}


function mapStateToProps(state) {
    return {
        layout: state.layout
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(MegaMenu);