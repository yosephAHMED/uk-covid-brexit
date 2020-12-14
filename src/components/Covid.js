import React, { Component } from "react";
import "../assets/Covid.css";

const styles = {
  transition: "all 1s ease-in",
};

export default class Covid extends Component {
  constructor() {
    super();
    this.state = {
      // initial opacity and scale of title
      opacity: 0,
      scale: 10,
      color: '#61dafb',
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        // set opacity and scale to normal
        opacity: 1,
        scale: 1,
        color: 'white',
      });
    }, 500);
  }

  render() {
    return (
      <div className="covid-container">
        <h1
          className="covid-title"
          style={{
            ...styles,
            opacity: this.state.opacity,
            transform: "scale(" + this.state.scale + ")",
            color: this.state.color,
            animationName: 'changeColor',
            animationDelay: '1s',
            animationDuration: '5s',
          }}
        >
          COVID
        </h1>
      </div>
    );
  }
}
