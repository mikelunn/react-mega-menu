/**
 * Created by complunm on 6/20/2017.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../store/counter/counter.actions';

class Counter extends Component {

    render() {
        return (
            <div>
                Current counter value: {this.props.count}
                <div><button onClick={(e) => this.props.increment()}>Increment</button></div>
                <div><button onClick={(e) => this.props.decrement()}>Decrement</button></div>
                {this.props.children}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        count: state.counter
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
