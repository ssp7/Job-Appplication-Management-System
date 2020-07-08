import React, { useContext, Fragment, useEffect, useState } from "react";
import UserItem from "./UserItem";
import AuthContext from "../../context/auth/authContext";

const User = (props) => {
  const authContext = useContext(AuthContext);
  const { user, jobs, loadUser, updateUser, getCurrentQuestions } = authContext;
  const { jobName } = jobs;

  useEffect(() => {
    updateUser(user);
    loadUser();
    getCurrentQuestions(jobName);
    //eslint-disable-next-line
  });

  return (
    <Fragment>
      <UserItem user={user} jobs={jobs} />
    </Fragment>
  );
};

export default User;
