import React, { Fragment } from "react";
import translate from "../../i18n/translate";

const AdminItem = ({ admin, adminStats, table }) => {
  const { name, email } = admin;
  return (
    <div className="container">
      <h1>
        {translate('Admin')} <span className="text-primary">{translate('Account')}</span>
      </h1>
      <p>
        <strong>
          <span className="text-primary">{translate("Name")}: </span>
        </strong>
        <strong>{name}</strong>
      </p>
      <p>
        <strong>
          <span className="text-primary">{translate("Email Address")}: </span>
        </strong>{" "}
        <strong>{email}</strong>
      </p>
      <h2>{translate("Statistics For Applicants")}</h2>
      <div className="w3-table w3-bordered w3-striped w3-border test w3-hoverable">
        <p>
          <table className="w3-table w3-striped w3-bordered">
            <tr style={{backgroundColor:"primary"}}>
              <th>{translate("Job Title")}</th>
              <th>{translate("Number of Applicants")}</th>
            </tr>
            {table.map((t) => (
              <tr>
                <td>{t.jobName}</td>
                <td>{t.applicants}</td>
              </tr>
            ))}
          </table>
        </p>
      </div>

      {adminStats.map((user) => (
        <Fragment>
          <div className="card bg-light">
            <strong> {translate("Applicant Name")}: </strong>
            <h2 className="text-primary text-left">{user.name}</h2>
            <strong style={{ float: "right" }}>
              {translate("Progress")}: -{" "}
              <span
                style={{ float: "right" }}
                className={
                  "badge " +
                  (user.jobName === "Human Resources" || user.progress === 100
                    ? "badge-success"
                    : "badge-primary")
                }
              >
                {user.jobName === "Human Resources" || user.progress === 100
                  ? "Application is in review"
                  : +user.progress + " %"}
              </span>
            </strong>
            <strong> {translate("Applicant Name")}: </strong>{" "}
            <h4 className="text-primary text-left">{user.jobName}</h4>
          </div>
        </Fragment>
      ))}
    </div>
  );
};

export default AdminItem;
