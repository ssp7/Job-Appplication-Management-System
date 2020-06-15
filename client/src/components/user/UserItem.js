import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";

const UserItem = ({ user }) => {
  return (
    <div>
      <h1>
        Your <span className="text-primary">Account</span>
      </h1>
      <p>
        <strong>
          <span className="text-primary">Name </span>
        </strong>
        {}
      </p>
      <p>
        <strong>
          <span className="text-primary">email </span>
        </strong>{" "}
        {}
      </p>
      <p>
        <strong>
          <span className="text-primary">Job: -</span>
        </strong>{" "}
        {}
      </p>
    </div>
  );
};

export default UserItem;
