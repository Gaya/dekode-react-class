import React, { Component } from 'react';

import Question from './Question';

import './QuestionsList.css';

class QuestionsList extends Component {
  render() {
    const { questions, onChangeQuestion, onRemoveQuestion } = this.props;

    return (
      <ul className="QuestionsList">
        {questions.map((question, index) => (
          <Question
            key={index}
            index={index}
            question={question}
            onChangeQuestion={onChangeQuestion}
            onRemoveQuestion={onRemoveQuestion}
          />
        ))}
      </ul>
    );
  }
}

export default QuestionsList;
