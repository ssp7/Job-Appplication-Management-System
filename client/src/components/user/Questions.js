import React, { Component } from "react";
import { quizData } from "./quizData";

export class Questions extends Component {
  state = {
    currentQuestion: 0,
    myAnswer: null,
    options: [],
    score: 0,
    disabled: true,
    isEnd: false,
  };

  loadQuizData = () => {
    // console.log(quizData[0].question)
    this.setState(() => {
      return {
        questions: quizData[this.state.currentQuestion].question,
        answer: quizData[this.state.currentQuestion].answer,
        options: quizData[this.state.currentQuestion].options,
      };
    });
  };

  componentDidMount() {
    this.loadQuizData();
  }

  nextQuestionHandler = () => {
    // console.log('test')
    const { myAnswer, answer, score } = this.state;

    if (myAnswer === answer) {
      this.setState({
        score: score + 1,
      });
    }

    this.setState({
      currentQuestion: this.state.currentQuestion + 1,
    });
    console.log(this.state.currentQuestion);
  };
  previousQuestionHandler = () => {
    // console.log('test')
    const { myAnswer, answer, score } = this.state;

    if (myAnswer === answer) {
      this.setState({
        score: score + 1,
      });
    }

    this.setState({
      currentQuestion: this.state.currentQuestion - 1,
    });
    console.log(this.state.currentQuestion);
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.currentQuestion !== prevState.currentQuestion) {
      this.setState(() => {
        return {
          disabled: true,
          questions: quizData[this.state.currentQuestion].question,
          options: quizData[this.state.currentQuestion].options,
          answer: quizData[this.state.currentQuestion].answer,
        };
      });
    }
  }
  checkAnswer = (answer) => {
    this.setState({ myAnswer: answer, disabled: false });
  };
  finishHandler = () => {
    if (this.state.currentQuestion === quizData.length - 1) {
      this.setState({
        isEnd: true,
      });
    }
    if (this.state.myAnswer === this.state.answer) {
      this.setState({
        score: this.state.score + 1,
      });
    }
  };
  render() {
    const { options, myAnswer, currentQuestion, isEnd } = this.state;
    let previousAnswer = myAnswer;
    if (isEnd) {
      return (
        <div className="result">
          <h3>Game Over your Final score is {this.state.score} points </h3>
          <div>
            The correct answer's for the questions was
            <ul>
              {quizData.map((item, index) => (
                <li className="ui floating message options" key={index}>
                  {item.answer}
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    } else {
      return (
        <div className="App">
          <br />
          <h1 style={{ color: "black" }}>{this.state.questions} </h1>
          <strong>
            {" "}
            <span style={{ color: "#001799" }}>{`Questions ${
              currentQuestion + 1
            }  out of ${quizData.length} remaining `}</span>
          </strong>
          <br />
          <br />

          {options.map((option) => (
            <strong>
              <p
                key={option.id}
                className={`ui floating message options ${
                  myAnswer === option ? "selected" : null
                }`}
                onClick={() => this.checkAnswer(option)}
                style={{ color: "black" }}
              >
                {myAnswer === option ? (
                  <h4 style={{ color: "white" }}>{option}</h4>
                ) : (
                  <h4 style={{ color: "black" }}>{option}</h4>
                )}
              </p>
              <br />
            </strong>
          ))}
          <br />
          {currentQuestion < quizData.length - 1 && currentQuestion !== null && (
            <button
              className="btn btn-primary"
              myAnswer={previousAnswer}
              onClick={this.previousQuestionHandler}
            >
              Previous
            </button>
          )}

          {currentQuestion < quizData.length - 1 && (
            <button
              className="btn btn-primary"
              disabled={this.state.disabled}
              myAnswer={previousAnswer}
              onClick={this.nextQuestionHandler}
            >
              {console.log(previousAnswer)}
              Next
            </button>
          )}
          {/* //adding a finish button */}
          {currentQuestion === quizData.length - 1 && (
            <button
              className="btn btn-primary"
              onClick={this.previousQuestionHandler}
            >
              Previous
            </button>
          )}
          {currentQuestion === quizData.length - 1 && (
            <button
              className="btn btn-primary"
              onClick={this.finishHandler}
              disabled={this.state.disabled}
            >
              Finish
            </button>
          )}
        </div>
      );
    }
  }
}

export default Questions;
