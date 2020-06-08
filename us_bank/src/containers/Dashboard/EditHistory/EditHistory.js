import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Aux from "react-aux";
import Header from "../../../components/Header/Header";
import "./EditHistory.css";

const EditHistory = (props) => {
  return (
    <Aux>
      <Header></Header>
      <div style={{ padding: "50px" }}>
        <h2>No actions performed by user.</h2>
      </div>
    </Aux>
  );
};

export default EditHistory;
