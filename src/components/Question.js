import React, { Component } from 'react';

class Question extends Component {
  render() {
    const { question } = this.props;

    return (
      <li>
        {question}
      </li>
    );
  }
}

export default Question;
