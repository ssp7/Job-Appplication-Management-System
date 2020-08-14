import React, { Fragment, useContext, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { I18nProvider, LOCALES} from "../../i18n";
import AuthContext from "../../context/auth/authContext";
import translate from "../../i18n/translate";

const Navbar = ({ title, icon }) => {
  const authContext = useContext(AuthContext);

  const { isAuthenticated, logout, user, admin } = authContext;
  const [locale, setLocale] = useState(LOCALES.ENGLISH); 
  const onLogout = () => {
    logout();
  };
  const authLinks = (
    <Fragment>
      <li>{translate('Hello')} {(user && user.name) || (admin && admin.name)}</li>
      <li>
        <a onClick={onLogout} href="/">
          <i className="fas fa-sign-out-alt"></i>{" "}
          <span className="hide-sm">{translate('Logout')}</span>
        </a>
      </li>
      {user && (
        <li>
          <Link to="/account">{translate('Profile')}</Link>
        </li>
      )}
    </Fragment>
  );
  const guestLinks = (
    <Fragment>
      <li>
        <Link to="/">{translate('Jobs')}</Link>
      </li>
      <li>
        <Link to="/login">{translate('Login')}</Link>
      </li>
      <li>
        <Link to="/adminLogin">{translate('AdminLogin')}</Link>
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
  title: `Job Portal`,
  icon: "fas fa-briefcase",
};

export default Navbar;
