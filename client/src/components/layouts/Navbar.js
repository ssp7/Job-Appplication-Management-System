import React, { Fragment, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";

const Navbar = ({ title, icon }) => {
  const authContext = useContext(AuthContext);

  const { isAuthenticated, logout, user, admin } = authContext;

  const onLogout = () => {
    logout();
  };
  const authLinks = (
    <Fragment>
      <li>Hello {(user && user.name) || (admin && admin.name)}</li>
      <li>
        <a onClick={onLogout} href="/">
          <i className="fas fa-sign-out-alt"></i>{" "}
          <span className="hide-sm">Logout</span>
        </a>
      </li>
      {user && (
        <li>
          <Link to="/account">Profile</Link>
        </li>
      )}
    </Fragment>
  );
  const guestLinks = (
    <Fragment>
      <li>
        <Link to="/">Jobs</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/adminLogin">AdminLogin</Link>
      </li>
    </Fragment>
  );

  return (
    <div className="navbar bg-primary">
      <h1>
        <i className={icon} />
        {title}
      </h1>
      <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
    </div>
  );
};

Navbar.protoTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Job Portal",
  icon: "fas fa-briefcase",
};

export default Navbar;
