import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Input from "../../components/UI/Input/Input";
//import Button from "../../components/UI/Button/Button";
import Logo from "../../components/Logo/Logo";
import Aux from "react-aux";
import "./Login.css";
import Dashboard from "../Dashboard/Dashboard";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Login extends Component {
  render() {
    return (
      <Aux>
        <Router>
          <Switch>
            <Route exact path="/">
              <div className="containerlogin">
                <div className="containerlogin">
                  <div className="outercontainer">
                    <Logo />
                    <div>
                      <div>
                        <label>Username</label>
                      </div>
                      <Input type="text" />
                    </div>
                    <div>
                      <div>
                        <label>Password</label>
                      </div>
                      <Input type="password" />
                    </div>

                    <div className="loginbutton">
                      {/* <Button /> */}
                      <Link to="/dashboard">Log In</Link>
                    </div>
                  </div>
                </div>
              </div>
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
          </Switch>
        </Router>
      </Aux>
    );
  }
}

export default Login;
