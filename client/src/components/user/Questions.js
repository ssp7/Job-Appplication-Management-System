import React, { Component } from "react";
import { Link } from "react-router-dom";
import { quizData } from "./quizData";
import translate from "../../i18n/translate"

export class Questions extends Component {
  state = {
    currentQuestion: 0,
    myAnswer: [],
    options: [],
    score: 0,
    type: "",
    disabled: true,
    isEnd: false,
  };

  loadQuizData = () => {
    // console.log(quizData[0].question)
    this.setState(() => {
      return {
        questions: quizData[this.state.currentQuestion].question,
        type: quizData[this.state.currentQuestion].type,
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
          type: quizData[this.state.currentQuestion].type,
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
    const { options, myAnswer, currentQuestion, isEnd, type } = this.state;
    let previousAnswer = myAnswer;
    if (isEnd) {
      return (
        <div className="result">
          <h2>
            Game Over your Final score is {this.state.score} points out of{" "}
            {quizData.length}{" "}
          </h2>
          <br />
          <div>
            <strong>
              The correct answers for the questions were.{" "}
              <span className="text-primary">Sorry! we cannot hire you!</span>
            </strong>

            <ul>
              <br />
              {quizData.map((item, index) => (
                <li className="ui floating message options" key={index}>
                  {item.answer}
                </li>
              ))}
            </ul>
            <br />
            <Link
              to={{ pathname: "/account", progress: quizData.length }}
              className="btn btn-primary"
            >
              Back to Account
            </Link>
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
            }  out of ${quizData.length}`}</span>
          </strong>
          <br />
          <br />
          {type === "checkbox" && (
            <div>
              <h4 style={{color:"black", fontWeight:"30px"}}>{translate("Select all that applies")}</h4>
              {
                options.map((option) => (
                  <div onClick={(option) => this.checkAnswer(option)}>
                   <label class="checkbox-container" style={{color:"black"}}>{option}
                   <input type="checkbox" />
                   <span class="checkmark"></span>
                  </label>
                  </div>
                ))
              }
            </div>
          )}
          {type === "dropdown" && (
            <div className="dropdown">
              <button className="btn btn-dark">{translate("Dropdown Options")}</button>
              <div className="dropdown-content">
                {options.map((option) => (
                  <div onClick={() => this.checkAnswer(option)}>
                    {myAnswer === option ? (
                      <h4
                        style={{
                          backgroundColor: "text-primary",
                          color: "white",
                        }}
                      >
                        {option}
                      </h4>
                    ) : (
                      <h4 style={{ backgroundColor: "black" }}>{option}</h4>
                    )}
                  </div>
                ))}
              </div>
              {(myAnswer === "pizza" ||
                myAnswer === "burger" ||
                myAnswer === "Indian Food") && (
                <div>
                  <strong>
                    <h4 style={{ color: "black" }}>You selected </h4>
                    <strong>
                      <span className="text-primary">{myAnswer}</span>
                    </strong>
                  </strong>
                </div>
              )}
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </div>
          )}

          {type === "mcq" &&
            options.map((option) => (
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
          {
            <Link
              to={{ pathname: "/account", Progress: currentQuestion }}
              className="btn btn-primary"
            >
              Back to Account
            </Link>
          }
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
