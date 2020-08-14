import React from "react";
import { Link } from "react-router-dom";
import translate from "../../i18n/translate";

const JobItem = ({ job }) => {
  const { _id, jobName } = job;

  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">
        {jobName}
        <span style={{ float: "right" }}>
          <Link
            className="btn btn-success btn-sm"
            to={{
              pathname: "/register",
              AppliedJob: jobName,
            }}
          >
            {translate('Apply')}
          </Link>
        </span>
      </h3>
    </div>
  );
};

export default JobItem;
