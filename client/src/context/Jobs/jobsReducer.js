import {
  JOBS_ERROR,
  GET_JOBS,
  CLEAR_JOBS,
  FILTER_JOBS,
  CLEAR_FILTER,
  SET_CURRENT,
  CLEAR_CURRENT,
} from "../Types";

export default (state, action) => {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...state,
        jobs: action.payload,
        loading: false,
      };
    case CLEAR_JOBS:
      return {
        ...state,
        jobs: null,
        filtered: null,
        error: null,
        current: null,
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    case FILTER_JOBS:
      return {
        ...state,
        filtered: state.jobs.filter((job) => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return job.jobName.match(regex) || job.jobName.match(regex);
        }),
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      };
    case JOBS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
