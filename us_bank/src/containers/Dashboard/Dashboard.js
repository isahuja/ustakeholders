import React, { Component } from "react";
import Aux from "react-aux";
import "bootstrap/dist/css/bootstrap.css";
import Header from "../../components/Header/Header";
import Transaction from "./Transaction/Transaction";
import Sampling from "./Sampling/Sampling";
import Heirarchy from "./Heirarchy/Heirarchy";

export default class Dashboard extends Component {
  state = {
    transationdata: true,
    heirarchy: false,
    sampling: false,
  };

  changeTabs = (tab) => {
    let state = { ...this.state };
    Object.keys(state).forEach((itm) => {
      itm === tab ? (state[itm] = true) : (state[itm] = false);
    });
    debugger;
    this.setState(state);
  };
  render() {
    return (
      <Aux>
        <Header></Header>
        <div style={{ padding: "50px" }}>
          <ul className="nav nav-tabs">
            <li
              onClick={() => {
                this.changeTabs("transationdata");
              }}
              className={this.state.transationdata ? "active" : ""}
            >
              <a href="#">Transaction Data</a>
            </li>
            <li
              onClick={() => {
                this.changeTabs("heirarchy");
              }}
              className={this.state.heirarchy ? "active" : ""}
            >
              <a href="#">Heirarchy Data</a>
            </li>
            <li
              onClick={() => {
                this.changeTabs("sampling");
              }}
              className={this.state.sampling ? "active" : ""}
            >
              <a href="#">Sampling</a>
            </li>
          </ul>
          <div style={{ padding: "10px 30px" }}>
            {this.state.transationdata ? <Transaction /> : null}
            {this.state.sampling ? <Sampling /> : null}
            {this.state.heirarchy ? <Heirarchy /> : null}
          </div>
        </div>
      </Aux>
    );
  }
}
