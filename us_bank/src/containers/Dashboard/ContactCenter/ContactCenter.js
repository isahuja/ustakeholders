import React, { Component } from "react";
import Aux from "react-aux";
import Header from "../../../components/Header/Header";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./ContactCenter.css";

import Sampling from "./../Sampling/Sampling";
import Heirarchy from "./../Heirarchy/Heirarchy";
import Searchsuggestion from "../../Searchsuggestion/Searchsuggestion";
import Modal from "../../../components/Modal/Modal";
import Transaction from "./../Transaction/Transaction";

class ContactCenter extends Component {
  state = {
    transationdata: true,
    heirarchy: false,
    sampling: false,
    purchasing: false,
  };

  showAdvancefilter = () => {
    this.setState({ purchasing: true });
  };
  closeModal = () => {
    this.setState({ purchasing: false });
  };
  purchaseCancelHandler = () => {};

  changeTabs = (tab) => {
    let state = { ...this.state };
    Object.keys(state).forEach((itm) => {
      itm === tab ? (state[itm] = true) : (state[itm] = false);
    });

    this.setState(state);
  };
  render() {
    return (
      <Aux>
        <Header></Header>
        <div style={{ padding: "50px" }}>
          <h2>Contact Center Program</h2>
          {/* <h2 className="contact">Contact Center</h2> */}
          <br></br>
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
            <div style={{ paddingTop: "30px" }}>
              <div className="autosearch">
                <Searchsuggestion></Searchsuggestion>
                {/* <Sampling /> */}
                {this.state.transationdata ? <Transaction /> : null}
                {this.state.sampling ? <Sampling /> : null}
                {this.state.heirarchy ? <Heirarchy /> : null}
              </div>
              <div className="advsearch">
                <button
                  className="btn btn-primary"
                  onClick={this.showAdvancefilter}
                >
                  Advance Search
                </button>

                <Modal
                  show={this.state.purchasing}
                  modalClosed={this.purchaseCancelHandler}
                >
                  <h4>
                    <u>Advance Search</u>
                  </h4>
                  <select>
                    <option>LPId</option>
                  </select>

                  <select>
                    <option>Branch Id</option>
                  </select>
                  <select>
                    <option>Email</option>
                  </select>
                  <select>
                    <option>Customer Name</option>
                  </select>
                  <div style={{ textAlign: "center" }}>
                    <br></br>
                    <button
                      onClick={this.closeModal}
                      className="btn btn-primary"
                    >
                      Submit
                    </button>
                  </div>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </Aux>
    );
  }
}

export default ContactCenter;
