import React, { Component } from 'react';

import Assignments from './Assignments';

import './App.css';

class App extends Component {
  state = {
    questions: [
      'What is React?',
      'Never going to give up whom?',
    ],
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Dekode React Class!</h1>
        </header>

        <div className="App-container">
          <Assignments />
        </div>
      </div>
    );
  }
}

export default App;
