import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css'

import './App.css';
import Counter from './components/Counter'

import MegaMenu from './components/MegaMenu';

class App extends Component {
  render() {
    return (
        <div>
            <MegaMenu/>
            <Counter/>
        </div>
    );
  }
}

export default App;
