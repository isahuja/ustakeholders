import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Style from "./Input.css";

const Input = (props) => {
  let input = null;
  switch (props.type) {
    case "text":
      input = <input className={Style.Input} type={props.type} />;
      break;

    case "password":
      input = <input className={Style.Input} type={props.type} />;
      break;

    default:
      input = <input className={Style.Input} type="text" />;
      break;
  }

  return input;
};

export default Input;
