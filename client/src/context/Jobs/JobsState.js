import React, { useReducer } from "react";
import axios from "axios";
import JobsContext from "./jobsContext";
import jobsReducer from "./jobsReducer";
import {
  GET_JOBS,
  JOBS_ERROR,
  CLEAR_FILTER,
  CLEAR_CURRENT,
  FILTER_JOBS,
  CLEAR_JOBS,
} from "../Types";

const JobsState = (props) => {
  const initialState = {
    jobs: [],
    current: null,
    filtered: null,
    error: null,
  };

  const [state, dispatch] = useReducer(jobsReducer, initialState);

  //Get Jobs
  const getJobs = async () => {
    try {
      const res = await axios.get("/api/job");
      dispatch({
        type: GET_JOBS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: JOBS_ERROR,
        payload: err.reponse.msg,
      });
    }
  };
  const clearJobs = (id) => {
    dispatch({ type: CLEAR_JOBS });
  };
  // Clear Current Contact
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // Filter Contact
  const filterJobs = (text) => {
    dispatch({ type: FILTER_JOBS, payload: text });
  };
  // Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };
  return (
    <JobsContext.Provider
      value={{
        jobs: state.jobs,
        filtered: state.filtered,
        filterJobs,
        clearFilter,
        getJobs,
        clearCurrent,
        clearJobs,
      }}
    >
      {props.children}
    </JobsContext.Provider>
  );
};

export default JobsState;
