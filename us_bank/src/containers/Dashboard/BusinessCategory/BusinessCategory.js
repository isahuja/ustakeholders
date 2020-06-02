import React, { Component } from "react";
import Aux from "react-aux";
import Header from "../../../components/Header/Header";
import Dashboard from "../Dashboard";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./BusinessCategory.css";

class BusinessCategory extends Component {
  state = {
    table: [
      {
        isChecked: false,
        name: "Branch",
      },
      {
        isChecked: false,
        name: "Mortgage Organization",
      },
      {
        isChecked: false,
        name: "ATM",
      },
      {
        isChecked: false,
        name: "Digital",
      },
      {
        isChecked: false,
        name: "Loyality",
      },
    ],
  };

  checkboxHandler = () => {};

  render() {
    return (
      <Aux>
        <Router>
          <Switch>
            <Route exact path="/businesscategory">
              <Header></Header>
              <div className="businsesscategory" style={{ padding: "50px" }}>
                <div>Please select your CX journey program</div>
                <br></br>
                <table className="table">
                  <thead className="thead-dark">
                    <tr>
                      <th>Select</th>
                      <th>Jounerys</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        {" "}
                        <button>
                          {" "}
                          <Link to="/dashboard">Select</Link>
                        </button>
                      </td>
                      <td>Branch</td>
                    </tr>
                    <tr>
                      <td>
                        {" "}
                        <button>Select</button>
                      </td>
                      <td>Mortgage Organization</td>
                    </tr>

                    <tr>
                      <td>
                        {" "}
                        <button>Select</button>
                      </td>
                      <td>ATM</td>
                    </tr>
                    <tr>
                      <td>
                        {" "}
                        <button>Select</button>
                      </td>
                      <td>Digital</td>
                    </tr>
                    <tr>
                      <td>
                        {" "}
                        <button>Select</button>
                      </td>
                      <td>Loyality</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Route>
            <Route path="/dashboard">
              <Dashboard></Dashboard>
            </Route>
          </Switch>
        </Router>
      </Aux>
    );
  }
}

export default BusinessCategory;
