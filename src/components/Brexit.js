import React, { Component } from "react";
import "../assets/Brexit.css";
import Navbar from "./BrexitComponents/Navbar";
import CardImageOne from "../assets/images/brexit1.jpg";
import CardImageTwo from "../assets/images/brexit2.jpg";

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
        <div className="card">
          <h2>Brexit, the day after</h2>
          <a
            href="https://www.france24.com/en/20200201-brexit-the-day-after-a-divided-britain-grapples-with-leaving-the-eu"
            title="Brexit, the day after: A divided Britain grapples with leaving the EU"
          >
            <img src={CardImageOne} alt="logo" width="615" height="409" />
          </a>
          <div className="container">
            <h1>
              <b>What is Brexit?</b>
            </h1>
            <p>
              The United Kingdom(UK) voted to leave the European Union(EU) which
              occurred on January 31, 2020.
            </p>
            <p>Br(itish) + Exit = Brexit</p>
            <p>
              Both sides agreed that life would remain the same until December
              31, 2020 meaning the UK would still follow the EU rules
            </p>
            <p>
              During this transition period, a deal between the leaders of the
              UK and the EU was meant to be made
            </p>
            <p>
              Luckily, if a deal isn’t agreed upon by December 31, 2020 that
              doesn't mean a deal will never be made. However, the problems that
              may arise will make that necessary deal agreement take place
              sooner.
            </p>
          </div>
        </div>

        <div className="card">
          <h2>Brexit: Fraying Union</h2>
          <a
            href="https://www.ft.com/content/8710df70-d49d-11e5-8887-98e7feb46f27"
            title="Without Britain, countries such as Denmark will find it harder to keep voters on the EU path"
          >
            <img src={CardImageTwo} alt="logo" width="615" height="409" />
          </a>
          <div className="container">
            <h1>
              <b>Why did Brexit occur?</b>
            </h1>
            <p>
              The Uk joined the European Economic Community (the precursor of
              the EU) on January 1, 1973.
            </p>
            <p>
              The UK would remain a member for 47 years, a very long
              relationship. So why leave? Three factors came into play:
            </p>
            <p>
              Economics - The EU is thought to be a dysfunctional Economic
              Entity
            </p>
            <p>Sovereignty - Due to the rise of nationalism across the world</p>
            <p>
              Political Elitism - The vote to leave, was a vote against the
              British Elite.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
