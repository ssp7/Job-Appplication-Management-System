import React, { useContext, useEffect } from "react";
import User from "../user/User";
import AuthContext from "../../context/auth/authContext";
const Account = () => {
  const authContext = useContext(AuthContext);
  const { loadUser } = authContext;
  useEffect(() => {
    loadUser();
    //eslint-disable-next-line
  }, []);
  return (
    <div className="grid-2">
      <div>
        <User />
      </div>
    </div>
  );
};

export default Account;
