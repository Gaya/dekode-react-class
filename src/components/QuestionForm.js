import React, { Component } from 'react';

import './QuestionForm.css';

class QuestionForm extends Component {
  state = {
    question: '',
  };

  onChange = (e) => {
    this.setState({
      question: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { question } = this.state;
    const { onAddQuestion } = this.props;

    if (typeof onAddQuestion === 'function') {
      onAddQuestion(question);
    }

    this.setState({
      question: '',
    });
  };

  render() {
    const { question } = this.state;

    return (
      <form className="QuestionForm" onSubmit={this.onSubmit}>
        <input
          type="text"
          placeholder="Insert question"
          onChange={this.onChange}
          value={question}
        />
        <button type="submit">Add question</button>
      </form>
    );
  }
}

export default QuestionForm;
