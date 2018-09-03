import React, { Component } from 'react';

import Question from './Question';

import './QuestionsList.css';

class QuestionsList extends Component {
  render() {
    const { questions } = this.props;

    return (
      <ul className="QuestionsList">
        {questions.map((question, index) => <Question key={index} question={question} />)}
      </ul>
    );
  }
}

export default QuestionsList;
