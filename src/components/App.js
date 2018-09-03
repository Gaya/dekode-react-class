import React, { Component } from 'react';

import QuestionsList from './QuestionsList';
import QuestionForm from './QuestionForm';
import Assignments from './Assignments';

import './App.css';

class App extends Component {
  state = {
    questions: [
      'What is React?',
      'Never going to give up whom?',
    ],
  };

  addQuestion = (question) => {
    const { questions } = this.state;

    this.setState({
      questions: [...questions, question],
    });
  };

  removeQuestion = (index) => {
    const { questions } = this.state;

    this.setState({
      questions: questions.filter((item, itemIndex) => itemIndex !== index),
    });
  };

  render() {
    const { questions } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Dekode React Class!</h1>
        </header>

        <div className="App-container">
          <QuestionForm onAddQuestion={this.addQuestion} />
          <QuestionsList
            questions={questions}
            onRemoveQuestion={this.removeQuestion}
          />
          <Assignments />
        </div>
      </div>
    );
  }
}

export default App;
