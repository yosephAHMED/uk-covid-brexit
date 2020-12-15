import React, { Component } from "react";
import axios from "axios";
import "../assets/Covid.css";
import Navbar from "./CovidComponents/Navbar";
import LineGraph from "./CovidComponents/LineGraph";
import CardImageOne from "../assets/images/2_LU.jpg";
import CardImageTwo from "../assets/images/corona.jpg";

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

  render() {
    if (this.state.data[0] === undefined) {
      return <div>Fetching data from API...</div>;
    } else {
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
          <div className="card">
            <h2>London Reveals New Transport Rules</h2>
            <a
              href="https://www.mylondon.news/news/zone-1-news/transport-london-reveals-new-rules-18362065"
              title="Transport for London reveals new rules about travel for over 60s using London Underground and buses"
            >
              <img src={CardImageOne} alt="logo" />
            </a>
            <div className="container">
              <h1>
                <b>{this.state.data[0].date}</b>
              </h1>
              <p>Area: {this.state.data[0].areaName}</p>
              <p>Today New Cases: {this.state.data[0].newCasesByPublishDate}</p>
              <p>Today New Deaths: NYD</p>
              <p>Total Cases: {this.state.data[0].cumCasesByPublishDate}</p>
              <p>Total Deaths: NYD</p>
            </div>
          </div>
          <div className="card">
            <h2>'New variant' of Coronavirus Identified in England</h2>
            <a
              href="https://www.bbc.com/news/health-55308211"
              title="A new variant of coronavirus has been found which is growing faster in some parts of England, MPs have been told"
            >
              <img src={CardImageTwo} alt="logo" width="615" height="409" />
            </a>
            <div className="container">
              <h1>
                <b>{this.state.data[1].date}</b>
              </h1>
              <p>Area: {this.state.data[1].areaName}</p>
              <p>Today New Cases: {this.state.data[1].newCasesByPublishDate}</p>
              <p>Today New Deaths: {this.state.data[1].newDeathsByDeathDate}</p>
              <p>Total Cases: {this.state.data[1].cumCasesByPublishDate}</p>
              <p>Total Deaths: {this.state.data[1].cumDeathsByDeathDate}</p>
            </div>
          </div>
          <LineGraph json={this.state.data} />
          <h4>https://github.com/publichealthengland/coronavirus-dashboard-api-python-sdk</h4>
        </div>
      );
    }
  }
}
