import React, { useContext, Fragment, useEffect } from "react";
import UserItem from "./UserItem";
import AuthContext from "../../context/auth/authContext";

const User = () => {
  const authContext = useContext(AuthContext);
  const { user, loading, loadUser } = authContext;
  useEffect(() => {
    loadUser();
    //eslint-disable-next-line
  }, []);
  return (
    <Fragment>
      <UserItem user={user} />
    </Fragment>
  );
};

export default User;
