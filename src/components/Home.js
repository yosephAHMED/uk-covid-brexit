import React, { Component } from "react";
import logo from "../logo.svg";
import "../assets/Home.css";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <header className="Home-header">
          <div className="Covid">
            <h1>
              <Link to="/Covid">COVID</Link>
            </h1>
          </div>
          <img src={logo} className="Home-logo" alt="logo" />
          <div className="Brexit">
            <h1>
              <Link to="/Brexit">BREXIT</Link>
            </h1>
          </div>
        </header>
      </div>
    );
  }
}
