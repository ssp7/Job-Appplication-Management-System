import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  ADMIN_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  ADMINLOGIN_SUCCESS,
  ADMINLOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
  GET_QUESTIONS,
  GET_USERJOBS,
  GET_ADMINSTATS,
  UPDATE_ERROR,
  UPDATE_USER,
  GET_ADMINTABLE,
} from "../Types";

export default (state, action) => {
  switch (action.type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload,
      };
    case ADMIN_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        admin: action.payload,
      };
    case GET_USERJOBS:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        jobs: action.payload,
      };
    case GET_ADMINSTATS:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        adminStats: action.payload,
      };
    case GET_QUESTIONS:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        questions: action.payload,
      };
    case GET_QUESTIONS:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        questions: action.payload,
      };
    case GET_ADMINTABLE:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        adminTable: action.payload,
      };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        user: action.payload,
        loading: false,
      };
    case ADMINLOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        admin: action.payload,
        loading: false,
      };
    case UPDATE_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case UPDATE_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case ADMINLOGIN_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        admin: null,
        error: action.payload,
      };
    case REGISTER_FAIL:
    case LOGIN_FAIL:
    case AUTH_ERROR:
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
