import React from "react";
import Navbar from "./Navbar";
import "../../assets/Covid.css";

export default function About() {
  return (
    <div>
      <div className="covid-container">
        <Navbar />
        <h1 className="covid-title" style={{ color: "white" }}>
          UK: The Covid Crisis
        </h1>
        <body>
          <h4>Notes</h4>
          <div className="lines"></div>
          <ul className="list">
            <li>
              The United Kingdom is home to approximately 67 million people.
            </li>
            <li>
              Of that 67 million people about 1.85 million people have been
              infected with Covid-19.
            </li>
            <li>As of 12/13/2020, there have been over 67,000 deaths.</li>
            <li>
              Just liked in the United States we saw two spikes in the UK.
            </li>
            <li>
              The United Kingdom has had two national lockdowns. Unfortunately,
              the second one was unavoidable as data showed the second wave
              could be way more severe than the first wave.
            </li>
            <li>
              Data showed that the second wave could possibly have several
              thousand deaths per day and a peak of mortality greater than the
              first wave.
            </li>
            <li>
              However, another 4 week lockdown would hit the economy hard. Some
              would even say the country couldn’t survive another lockdown as
              the country is already over £2 trillion in debt.
            </li>
            <li>
              Businesses who barely survived the first look down were likely to
              sink after a second, which is sad. The businesses people built
              would not only be destroyed but the mental health of many as well.
            </li>
            <li>
              Compared to 2019 where 22 suicides averaged a day, during the
              COVID-19 pandemic 37 averaged a day which is quite a jump, that’s
              15 more people taking their lives a day.
            </li>
            <li>
              {" "}
              This harsh second lockdown of 4 weeks could have been avoided.
              Talk about a second lockdown was discussed in the second half of
              september. The government delayed the second lockdown with hopes
              of not destroying the economy that was just beginning again.
            </li>
            <li>
              The decision to wait was worse for the people because the lockdown
              would be longer and harder which would only hurt the economy more
              and ruin lives of more people.
            </li>
          </ul>
        </body>
      </div>
    </div>
  );
}
