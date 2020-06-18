import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import JobItem from "../Jobs/JobItem";
const UserItem = ({ user, jobs }) => {
  const { name, email } = user;
  const { jobName } = jobs;
  return (
    <div className="container">
      <h1>
        Your <span className="text-primary">Account</span>
      </h1>
      <p>
        <strong>
          <span className="text-primary">Name </span>
        </strong>
        <strong>{name}</strong>
      </p>
      <p>
        <strong>
          <span className="text-primary">email </span>
        </strong>{" "}
        <strong>{email}</strong>
      </p>
      <p>
        <strong>
          <span className="text-primary">Job: -</span>
        </strong>
        <div className="card bg-light">
          <h3 className="text-primary text-left">
            {jobName}
            <span style={{ float: "right" }}>
              <Link
                className="btn btn-success btn-sm"
                to={{
                  pathname: "/QuestionBank",
                  job: {
                    jobName: { jobName },
                  },
                }}
              >
                Fill out the question bank
              </Link>
            </span>
          </h3>
        </div>
      </p>
    </div>
  );
};

export default UserItem;
