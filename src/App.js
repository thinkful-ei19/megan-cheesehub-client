import React, { Component } from 'react';
import {connect} from 'react-redux';
import CheeseList from './components/cheese-list';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <CheeseList />
      </div>
    );
  }
}


 

// connect()(App);