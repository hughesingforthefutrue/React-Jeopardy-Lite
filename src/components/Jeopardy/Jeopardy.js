import React, { Component } from "react";
import JeopardyService from "../JeopardyService/JeopardyService";
import Display from "../display/display";

class Jeopardy extends Component {
  //set our initial state and set up our service as this.client on this component
  constructor(props) {
    super(props);
    this.client = new JeopardyService();
    this.state = {
      data: {},
      score: 0,
      answer: "",
    };
  }
  //get a new random question from the API and add it to the data object in state
  getNewQuestion() {
    return this.client.getQuestion().then((result) => {
      this.setState({
        data: result.data[0],
      });
    });
  }
  //when the component mounts, get a the first question
  componentDidMount() {
    this.getNewQuestion();
  }

  updateScore = (event) => {
    event.preventDefault();
    let userAnswer = this.state.answer.toLowerCase();
    let dataAnswer = this.state.data.answer.toLowerCase();
    if (dataAnswer === userAnswer) {
      this.setState((state, props) => ({
        score: state.score + state.data.value,
        answer: "",
      }));
    } else {
      this.setState((state, props) => ({
        score: state.score - state.data.value,
        answer: "",
      }));
    }
    this.getNewQuestion();
  };
  handleChange = (event) => {
    this.setState({ answer: event.target.value });
  };

  //display the results on the screen
  render() {
    let categoryTitle = "loading";
    if (this.state.data.category) {
      categoryTitle = this.state.data.category.title;
    }

    return (
      <Display
        question={this.state.data.question}
        score={this.state.score}
        answer={this.state.answer}
        value={this.state.data.value}
        category={categoryTitle}
        updateScore={this.updateScore}
        handleChange={this.handleChange}
      />
    );
  }
}
export default Jeopardy;
