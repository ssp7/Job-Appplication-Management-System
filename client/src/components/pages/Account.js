import React, { useContext, useEffect } from "react";
import User from "../user/User";
import AuthContext from "../../context/auth/authContext";
const Account = () => {
  const authContext = useContext(AuthContext);
  const { loadUser, loadUserJobs } = authContext;
  useEffect(() => {
    loadUser();
    loadUserJobs();
    //eslint-disable-next-line
  }, []);
  return (
    <div>
      <User />
    </div>
  );
};

export default Account;
