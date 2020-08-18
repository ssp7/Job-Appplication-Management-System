import React, { useContext, Fragment, useEffect } from "react";
import JobItem from "./JobItem";
import JobsContext from "../../context/Jobs/jobsContext";
import Spinner from "../layouts/Spinner";

const Jobs = () => {
  const jobsContext = useContext(JobsContext);

  const { jobs, getJobs, loading } = jobsContext;

  useEffect(() => {
    getJobs();
    //eslint-disable-next-line
  }, []);
  return (
    
    <Fragment>
      {jobs !== null && !loading ? 
      (jobs.map((job) => (
        <JobItem job={job} key={job._id} />
      ))) : <Spinner />
      }
    </Fragment>
     
  );
};

export default Jobs;
