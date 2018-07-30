import React, { Component } from 'react';

class QuizQuestionButton extends Component {
    render() {
        return (
          <li><Button>{this.props.button_text}</Button></li>  
        )
    }
}