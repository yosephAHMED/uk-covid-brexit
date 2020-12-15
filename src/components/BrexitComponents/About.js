import React from "react";
import Navbar from "./Navbar";
import "../../assets/Brexit.css";
import ImageOne from "../../assets/images/brexitAbout1.jpg";
import ImageTwo from "../../assets/images/brexitAbout2.jpg";
import ImageThree from "../../assets/images/brexitAbout3.jpg";

export default function About() {
  return (
    <div>
      <div className="covid-container">
        <Navbar />
        <h1 className="covid-title" style={{ color: "white" }}>
          UK: The Covid Crisis
        </h1>
        <img src={ImageOne} className="image" />
        <body>
          <h4>What is the need for a Brexit Deal?</h4>
          <div className="lines" style={{ height: "550px" }}></div>
          <ul className="list">
            <li>
              Inorder for the UK and EU to coexist there have always been rules
              which layout how the two can live, work and trade together.
            </li>
            <li>If there is no deal life can drastically change.</li>
            <li>
              For example, the cost of living will increase if there is no trade
              deal agreed upon. This is because buy and selling across EU
              borders was previously tariff free( no tax) but if there is no
              trade deal tariffs will be placed on the UK for buying and selling
              across EU borders. Therefore, the cost of living will increase
              because companies will most likely end up charging more for
              products to offset the losses they will face from the possible new
              tariffs.
            </li>
            <li>
              Other areas of interest relate to airline safety, medicine, and
              the sharing of information about security threats; all of which
              are important aspects of life where agreements upon are needed
            </li>
          </ul>
        </body>
        <img src={ImageTwo} className="image" width="700" height="394" />
        <body>
          <h4>What if no deal is agreed upon?</h4>
          <div className="lines" style={{ height: "550px" }}></div>
          <ul className="list">
            <li>
              No trade deal = higher prices in UK shops due to possible tariffs.
            </li>
            <li>
              No free-trade agreements means operate under WTO (World Trade
              Organization) where countries set their own tariffs.
            </li>
            <li>
              Long queues for lorries(large trucks) due to increased border
              checks, in other words product delay.
            </li>
            <li>
              Less choices of food specifically fresh food due to the increased
              cost of new replacements.
            </li>
            <li>The supply of medicines can be jeopardized.</li>
            <li>No health care arrangement for UK people in the EU.</li>
            <li>
              Education could be affected such as Erasmus. It previously helped
              students study in other countries but that may end.
            </li>
          </ul>
        </body>
        <img src={ImageThree} className="image" width="700" height="394" />
        <body>
          <h4>What will life be like on January 1, 2021 and there after?</h4>
          <div className="lines" style={{ height: "550px" }}></div>
          <ul className="list">
            <li>Regardless of deal or no deal...LIFE WILL CHANGE!</li>
            <li>The big annual payments to the EU will end.</li>
            <li>
              People will no longer have the ease of moving between the UK and
              the EU to live, work or retire as you will no longer be
              automatically allowed to do so.
            </li>
            <li>
              Travel rules will change... So you will need to ensure your
              passport is still valid, that you have health insurance, as well
              as the right driving documents
            </li>
            <li>
              Businesses trading with the EU will face a lot more paperwork.
            </li>
          </ul>
        </body>
      </div>
    </div>
  );
}
