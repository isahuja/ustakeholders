import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import Logo from "../../components/Logo/Logo";
import Aux from "react-aux";
import "./Login.css";

class Login extends Component {
  render() {
    return (
      <Aux>
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

            <div>
              <Button />
            </div>
          </div>
        </div>
      </Aux>
    );
  }
}

export default Login;
