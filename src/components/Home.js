import React, { Component } from "react";
import logo from "../logo.svg";
import "../assets/Home.css";
import DelayLink from "./DelayLink";

const styles = {
  transition: "all 1s ease-out",
};

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      covidOpacity: 1,
      covidScale: 1,
      brexitOpacity: 1,
      brexitScale: 1,
    };
  }

  onUserClickCovid() {
    this.setState({
      covidOpacity: 0,
      covidScale: 10,
    });
  }

  onUserClickBrexit() {
    this.setState({
      brexitOpacity: 0,
      brexitScale: 10,
    });
  }

  render() {
    return (
      <div className="Home">
        <header className="Home-header">
          <div
            className="Covid"
            style={{
              ...styles,
              opacity: this.state.covidOpacity,
              transform: "scale(" + this.state.covidScale + ")",
            }}
          >
            <h1>
              <DelayLink
                delay={1000}
                replace={false}
                to={"/Covid"}
                onUserClick={this.onUserClickCovid.bind(this)}
              >
                COVID
              </DelayLink>
            </h1>
          </div>
          <img src={logo} className="Home-logo" alt="logo" />
          <div
            className="Brexit"
            style={{
              ...styles,
              opacity: this.state.brexitOpacity,
              transform: "scale(" + this.state.brexitScale + ")",
            }}
          >
            <h1>
              <DelayLink
                delay={1000}
                replace={false}
                to={"/Brexit"}
                onUserClick={this.onUserClickBrexit.bind(this)}
              >
                BREXIT
              </DelayLink>
            </h1>
          </div>
        </header>
      </div>
    );
  }
}
