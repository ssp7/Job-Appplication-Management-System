import React, { Fragment, useContext } from "react";
import AuthContext from "../../context/auth/authContext";

const AdminItem = ({ admin, adminStats, table }) => {
  const { name, email } = admin;
  const authContext = useContext(AuthContext);
  const { loadUserJobs } = authContext;

  return (
    <div className="container">
      <h1>
        Admin <span className="text-primary">Account</span>
      </h1>
      <p>
        <strong>
          <span className="text-primary">Name: </span>
        </strong>
        <strong>{name}</strong>
      </p>
      <p>
        <strong>
          <span className="text-primary">Email: </span>
        </strong>{" "}
        <strong>{email}</strong>
      </p>
      <h2>Statistics For Applicants</h2>
      <div className="w3-table w3-bordered w3-striped w3-border test w3-hoverable">
        <p>
          <table className="w3-tables">
            <tr style={{ backgroundColor: "#4CAF50!important" }}>
              <th>Job Title</th>
              <th>No. of Applicants</th>
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
            <strong> Applicant Name: </strong>
            <h2 className="text-primary text-left">{user.name}</h2>
            <strong style={{ float: "right" }}>
              Progress: -{" "}
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
            <strong> Applicant Name: </strong>{" "}
            <h4 className="text-primary text-left">{user.jobName}</h4>
          </div>
        </Fragment>
      ))}
    </div>
  );
};

export default AdminItem;
