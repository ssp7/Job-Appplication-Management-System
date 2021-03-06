import React from "react";
import { Link } from "react-router-dom";
import translate from "../../i18n/translate";
const UserItem = ({ user, jobs }) => {
  const { name, email, progress } = user;
  const { jobName } = jobs;
  return (
    <div className="container">
      <h1>
        {translate("Your")} <span className="text-primary">{translate('Account')}</span>
      </h1>
      <p>
        <strong>
          <span className="text-primary">{translate('Name')}: </span>
        </strong>
        <strong>{name}</strong>
      </p>
      <p>
        <strong>
          <span className="text-primary">{translate('Email Address')}: </span>
        </strong>{" "}
        <strong>{email}</strong>
      </p>
      <p>
        <div className="card bg-light">
          <strong>
            <span>{translate('Jobs')}: -</span>
          </strong>
          <br />
          <h3 className="text-primary text-left">
            {jobName}
            <span style={{ float: "right" }}>
              {(progress === 100) ? (
                <p className="btn btn-success btn-sm">
                  {translate('Application is in review')}
                </p>) : ((progress >= 0 && progress <100)? (<Link
                className="btn btn-success btn-sm"
                to={{
                  pathname: "/QuestionBank",
                  job: {
                    jobName: { jobName },
                  },
                }}
              >
                {translate('Start from', {path: progress+1})}
              </Link>) : (progress < 0))
               }
            </span>
          </h3>
          <strong>
            <span>{translate('Progress')}: -</span>{" "}
            <strong>
              <span className="text-primary">
                {jobName === "Human Resources" || progress === 100
                  ? translate("Application is in review")
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
