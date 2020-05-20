import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Input from "../../components/UI/Input/Input";
//import Button from "../../components/UI/Button/Button";
// import Logo from "../../components/Logo/Logo";
import Aux from "react-aux";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
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
              <Header></Header>
              <div className="otercontainerlogin">
                <div class="headingproject">
                  <h2>
                    Sample Management <span style={{ color: "#000" }}>&</span>{" "}
                    <span style={{ color: "#d62948" }}>Data Query System</span>
                  </h2>
                </div>
                <div className="containerlogin">
                  <div className="outercontainer">
                    {/* <Logo /> */}
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
              <Footer></Footer>
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
