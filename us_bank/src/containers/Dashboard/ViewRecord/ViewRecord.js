import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Aux from "react-aux";
import Header from "../../../components/Header/Header";
import "./ViewRecord.css";

const ViewRecord = (props) => {
  return (
    <Aux>
      <Header></Header>
      <div style={{ padding: "50px" }}>
        <h2>View</h2>
        <form class="form-horizontal">
          <div class="form-group">
            <label for="inputEmail3" class="col-sm-2 control-label">
              First
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="inputEmail3"
                placeholder="First"
              />
            </div>
          </div>
          <div class="form-group">
            <label for="inputPassword3" class="col-sm-2 control-label">
              Last
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="inputPassword3"
                placeholder="Last"
              />
            </div>
          </div>
          <div class="form-group">
            <label for="inputPassword3" class="col-sm-2 control-label">
              Handle
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="inputPassword3"
                placeholder="Handle"
              />
            </div>
          </div>

          <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
              <button
                type="submit"
                class="btn btn-default"
                style={{ marginRight: "10px" }}
              >
                Save
              </button>
              <button type="submit" class="btn btn-default">
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </Aux>
  );
};

export default ViewRecord;
