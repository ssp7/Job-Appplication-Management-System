import React, { useContext, Fragment, useEffect } from "react";
import UserItem from "./UserItem";
import AuthContext from "../../context/auth/authContext";

const User = () => {
  const authContext = useContext(AuthContext);
  const { user, jobs } = authContext;
  return (
    <Fragment>
      <UserItem user={user} jobs={jobs} />
    </Fragment>
  );
};

export default User;
