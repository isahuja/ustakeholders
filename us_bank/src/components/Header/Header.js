import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Img from "../../assets/images/usbank.png";
import "./Header.css";

const Header = (props) => {
  return (
    <header className=".header">
      <img src={Img} alt="" />
    </header>
  );
};

export default Header;
