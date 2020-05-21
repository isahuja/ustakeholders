import React, { Component } from "react";
import "./Modal.css";
import Aux from "react-aux";
import Backdrop from "../Backdrop/Backdrop";

class Modal extends Component {
  render() {
    return (
      <Aux>
        <Backdrop
          show={this.props.show}
          clicked={this.props.modalClosed}
        ></Backdrop>
        <div
          style={{
            opacity: this.props.show ? "1" : "0",
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
          }}
          className="Modal"
        >
          {this.props.children}
        </div>
      </Aux>
    );
  }
}

export default Modal;
