import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import "./Usercontrol.css";

const Usercontrol = (props) => {
  return (
    <div>
      <div className="user">
        <div className="userimg"></div>
        <div className="u-mgmnt">
          <ul>
            <li>User Management</li>
            <li>API Process Management</li>
            <li>Sign out</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Usercontrol;
