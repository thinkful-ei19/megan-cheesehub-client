import React, { Component } from 'react';
import CheeseList from './components/cheese-list';
import AddCheeseForm from './components/add-cheese-form';


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <AddCheeseForm />
        <CheeseList />
      </div>
    );
  }
}


 

