import React, { Component } from "react";
import axios from "axios";
import "../assets/Covid.css";
import Navbar from "./CovidComponents/Navbar";

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
      color: "#61dafb",
      data: {},
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

    axios
      .get(
        `https://api.coronavirus.data.gov.uk/v1/data?filters=areaType=nation;areaName=england&structure={"date":"date","areaName":"areaName","areaCode":"areaCode","newCasesByPublishDate":"newCasesByPublishDate","cumCasesByPublishDate":"cumCasesByPublishDate","newDeathsByDeathDate":"newDeathsByDeathDate","cumDeathsByDeathDate":"cumDeathsByDeathDate"}`
      )
      .then((res) => {
        this.setState({ data: res.data.data });
      });
  }

  componentDidUpdate() {
    console.log("data: ", this.state.data[0]);
    console.log("data: ", this.state.data[1]);
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
          UK: The Covid Crisis
        </h1>
      </div>
    );
  }
}
