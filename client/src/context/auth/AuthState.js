import React, { useReducer } from "react";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import setAuthToken from "../../utils/SetAuthToken";
import axios from "axios";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  ADMIN_LOADED,
  GET_USERJOBS,
  GET_ADMINSTATS,
  GET_ADMINTABLE,
  AUTH_ERROR,
  GET_QUESTIONS,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  ADMINLOGIN_SUCCESS,
  ADMINLOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
  UPDATE_USER,
  UPDATE_ERROR,
} from "../Types";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    user: {},
    jobs: [],
    admin: {},
    adminTable: [],
    questions: [],
    adminStats: [],
    loading: true,
    error: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // load User
  const loadUser = async () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    try {
      const res = await axios.get("/api/auth");
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: AUTH_ERROR,
      });
    }
  };
  const loadAdmin = async () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    try {
      const res = await axios.get("/api/adminAuth");
      dispatch({
        type: ADMIN_LOADED,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: AUTH_ERROR,
      });
    }
  };
  const getCurrentQuestions = async (jobName) => {
    try {
      const res = await axios.get(`/api/questions/${jobName}`);
      dispatch({
        type: GET_QUESTIONS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: AUTH_ERROR,
      });
    }
  };

  const loadUserJobs = async () => {
    try {
      const res = await axios.get("/api/getUserJobs");
      dispatch({
        type: GET_USERJOBS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: AUTH_ERROR,
      });
    }
  };
  // Loading Admin's Data

  const loadAdminStats = async () => {
    try {
      const res = await axios.get("/api/adminStats");
      dispatch({
        type: GET_ADMINSTATS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: AUTH_ERROR,
      });
    }
  };
  const loadAdminTable = async () => {
    try {
      const res = await axios.get("/api/table");
      dispatch({
        type: GET_ADMINTABLE,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: UPDATE_ERROR,
      });
    }
  };
  // Register User
  const register = async (formData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("/api/users", formData, config);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data.msg,
      });
    }
  };

  // update user progress
  const updateUser = async (user) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.put(`api/users/${user._id}`, user, config);

      dispatch({
        type: UPDATE_USER,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: UPDATE_ERROR,
        payload: err.response.msg,
      });
    }
  };
  // Login User
  const login = async (formData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("/api/auth", formData, config);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
      loadUser();
    } catch (err) {
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response.data.msg,
      });
    }
  };
  const adminLogin = async (formData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("/api/adminAuth", formData, config);
      dispatch({
        type: ADMINLOGIN_SUCCESS,
        payload: res.data,
      });
      loadAdmin();
    } catch (err) {
      dispatch({
        type: ADMINLOGIN_FAIL,
        payload: err.response.data.msg,
      });
    }
  };
  // Logout
  const logout = () => {
    dispatch({
      type: LOGOUT,
    });
  };
  // Clear Errors
  const clearErrors = () => {
    dispatch({
      type: CLEAR_ERRORS,
    });
  };
  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.token,
        user: state.user,
        jobs: state.jobs,
        admin: state.admin,
        adminTable: state.adminTable,
        adminStats: state.adminStats,
        questions: state.questions,
        loading: state.token,
        error: state.token,
        register,
        loadUser,
        loadUserJobs,
        loadAdminStats,
        loadAdmin,
        loadAdminTable,
        getCurrentQuestions,
        login,
        adminLogin,
        updateUser,
        logout,
        clearErrors,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
