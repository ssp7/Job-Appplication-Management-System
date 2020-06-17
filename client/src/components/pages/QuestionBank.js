import React, { useContext, useEffect } from "react";
import Questions from "../user/Questions";
import AuthContext from "../../context/auth/authContext";
const QuestionBank = (props) => {
  const authContext = useContext(AuthContext);
  const { loadUser, loadUserJobs } = authContext;
  useEffect(() => {
    loadUser();
    loadUserJobs();
    //eslint-disable-next-line
  }, []);
  return (
    <div>
      <Questions jobName={props.location.job} />
    </div>
  );
};

export default QuestionBank;
