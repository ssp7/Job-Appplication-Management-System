import React, { useContext, useEffect } from "react";
import Admin from "../admin/Admin";
import AuthContext from "../../context/auth/authContext";
const AdminAccount = () => {
  const authContext = useContext(AuthContext);
  const { loadAdmin } = authContext;
  useEffect(() => {
    loadAdmin();
    //eslint-disable-next-line
  }, []);
  return (
    <div>
      <Admin />
    </div>
  );
};

export default AdminAccount;
