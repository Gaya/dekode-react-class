import React, { Component } from 'react';

class Question extends Component {
  removeQuestion = () => {
    const { index, onRemoveQuestion } = this.props;

    if (typeof onRemoveQuestion === 'function') {
      onRemoveQuestion(index);
    }
  };

  render() {
    const { question } = this.props;

    return (
      <li>
        {question}
        <button onClick={this.removeQuestion} type="button">Remove</button>
      </li>
    );
  }
}

export default Question;
