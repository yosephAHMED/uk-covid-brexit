import React, { Component } from "react";
import "../assets/Brexit.css";
import Navbar from "./BrexitComponents/Navbar";

const styles = {
  transition: "all 1s ease-in",
};

export default class Brexit extends Component {
  constructor() {
    super();
    this.state = {
      // initial opacity and scale of title
      opacity: 0,
      scale: 10,
      color: "#61dafb",
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        // set opacity and scale to normal
        opacity: 1,
        scale: 1,
        color: "white",
      });
    }, 500);
  }

  render() {
    return (
      <div className="covid-container">
        <Navbar />
        <h1
          className="covid-title"
          style={{
            ...styles,
            opacity: this.state.opacity,
            transform: "scale(" + this.state.scale + ")",
            color: this.state.color,
            animationName: "changeColor",
            animationDelay: "1s",
            animationDuration: "5s",
          }}
        >
          Brexit: UK and the EU
        </h1>
      </div>
    );
  }
}
