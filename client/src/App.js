import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layouts/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Account from "./components/pages/Account";
import AdminAccount from "./components/pages/AdminAccount";
import QuestionBank from "./components/pages/QuestionBank";
import JobsState from "./context/Jobs/JobsState";
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import AdminLogin from "./components/auth/AdminLogin";
import Alerts from "./components/layouts/Alerts";
import PrivateRoute from "./components/routing/PrivateRoute";

const App = () => {
  return (
    <AuthState>
      <JobsState>
        <AlertState>
          <Router>
            <Fragment className="App">
              <Navbar />
              <div className="container">
                <Alerts />
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/about" component={About} />
                  <PrivateRoute exact path="/account" component={Account} />
                  <PrivateRoute
                    exact
                    path="/adminAccount"
                    component={AdminAccount}
                  />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/adminLogin" component={AdminLogin} />
                  <PrivateRoute
                    exact
                    path="/QuestionBank"
                    component={QuestionBank}
                  />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertState>
      </JobsState>
    </AuthState>
  );
};

export default App;
