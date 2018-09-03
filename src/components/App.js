import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Dekode React Class!</h1>
        </header>

        <div className="App-container">
          <div className="App-assignments">
            <h2>First assignment:</h2>
            <p>
              Display the list of questions creating two new components: QuestionsList, Question.
            </p>

            <h2>Second assignment:</h2>
            <p>
              Create a form with input which communicates adding a question through the App component.
              (1. App passes callback to form, 2. form calls callback with new question, 3. App adds question to state)
            </p>

            <h2>Third assignment (BONUS!):</h2>
            <p>
              Make some UX improvements:
              <ul>
                <li>
                  Clear question input when adding.
                </li>
                <li>
                  Press "return" to add question.
                </li>
                <li>
                  Remove questions.
                </li>
                <li>
                  Edit questions.
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
