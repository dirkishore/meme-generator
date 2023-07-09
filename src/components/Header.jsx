import React, { Component } from "react";
import logo from "../images/Logo.png";

class Header extends Component {
  state = {};

  render() {
    return (
      <div className="header">
        <img className="logo--img" src={logo} alt="" />
      </div>
    );
  }
}

export default Header;
