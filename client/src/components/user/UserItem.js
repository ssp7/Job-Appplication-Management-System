import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";

const UserItem = ({ user, jobs }) => {
  const { name, email, progress } = user;
  const { jobName } = jobs;
  const authContext = useContext(AuthContext);
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
        <div className="card bg-light">
          <strong>
            <span>Job: -</span>
          </strong>
          <br />
          <h3 className="text-primary text-left">
            {jobName}
            <span style={{ float: "right" }}>
              {jobName !== "Human Resources" && (
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
              )}
            </span>
          </h3>
          <strong>
            <span>Progress: -</span>{" "}
            <strong>
              <span className="text-primary">
                {jobName === "Human Resources" || progress === 100
                  ? "Application is in review"
                  : progress + "%"}
              </span>
            </strong>
          </strong>
        </div>
      </p>
    </div>
  );
};

export default UserItem;
