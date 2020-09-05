import React, { useContext, Fragment, useEffect } from "react";
import AdminItem from "./AdminItem";
import AuthContext from "../../context/auth/authContext";

const Admin = () => {
  const authContext = useContext(AuthContext);
  const {
    admin,
    loadAdmin,
    loadAdminStats,
    loadAdminTable,
    adminStats,
    adminTable,
  } = authContext;
  useEffect(() => {
    loadAdmin();
    loadAdminStats();
    loadAdminTable();
    //eslint-disable-next-line
  });
  return (
    <Fragment>
      <AdminItem admin={admin} adminStats={adminStats} table={adminTable} />
    </Fragment>
  );
};

export default Admin;
