import React, { useState, useContext, useEffect } from "react";
import AlertContext from "../../context/alert/alertContext";
import AuthContext from "../../context/auth/authContext";
import translate from "../../i18n/translate";
const AdminLogin = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);
  const { setAlert } = alertContext;
  const { adminLogin, error, clearErrors, isAuthenticated } = authContext;

  const [admin, setAdmin] = useState({
    email: "",
    password: "",
  });
  const { email, password } = admin;
  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/adminAccount");
    }
    if (error === "Invalid Credentials") {
      setAlert(error, "danger");
      clearErrors();
    }
    //eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const onChange = (e) =>
    setAdmin({ ...admin, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setAlert("Please fill in all fields", "danger");
    } else {
      adminLogin({ email, password });
    }
  };
  return (
    <div className="form-container">
      <h1>
  <span className="text-primary">{translate('Admin')}</span> {translate('Account')}{" "}
        <span className="text-primary">Login</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className="from-group">
          <label htmlFor="email">{translate('Email Address')}</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <div className="from-group">
          <label htmlFor="password">{translate('Password')}</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            required
          />
        </div>
        <input
          type="submit"
          value="Login"
          className="btn btn-primary btn-block"
        />
      </form>
    </div>
  );
};

export default AdminLogin;
