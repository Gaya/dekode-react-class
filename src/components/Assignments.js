import React, { Component } from 'react';

class Assignments extends Component {
  render() {
    return (
      <div className="App-assignments">
        <h2>First assignment:</h2>
        <p>
          Display the list of questions creating two new components: QuestionsList, Question.
        </p>

        <h2>Second assignment:</h2>
        <p>
          Create a form with input which communicates adding a question through the App component.
        </p>
        <ol>
          <li>
            App passes callback to form
          </li>
          <li>
            Form calls callback with new question
          </li>
          <li>
            App adds question to state
          </li>
        </ol>

        <h2>Third assignment (BONUS!):</h2>
        <p>
          Make some UX improvements:
        </p>
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
        </ul>
      </div>
    );
  }
}

export default Assignments;
