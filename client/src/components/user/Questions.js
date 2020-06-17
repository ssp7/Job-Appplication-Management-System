import React, { useContext, Fragment, useEffect } from "react";
import QuestionItem from "./QuestionItem";
import AuthContext from "../../context/auth/authContext";

const Questions = (jobName) => {
  const authContext = useContext(AuthContext);
  const { getCurrentQuestions, questions } = authContext;
  useEffect(() => {
    //eslint-disable-nextline
    getCurrentQuestions({
      job: jobName,
    });
  }, []);
  console.log(questions);
  return (
    <Fragment>
      {/* {questions.map(
        (question) => (
          <h1>{question.question}</h1>
        )
        // <QuestionItem question={question} key={question.id} />
      )} */}
    </Fragment>
  );
};

export default Questions;
