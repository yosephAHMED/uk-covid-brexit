import React from "react";
import Navbar from "./Navbar";
import "../../assets/Covid.css";
import ImageOne from "../../assets/images/coronaAbout1.jpg";

export default function About() {
  return (
    <div>
      <div className="covid-container">
        <Navbar />
        <h1 className="covid-title" style={{ color: "white" }}>
          UK: The Covid Crisis
        </h1>
        <img src={ImageOne} style={{ padding: "20px" }} />
        <body>
          <h4>A Quick Overview of COVID-19 in the UK</h4>
          <div className="lines" style={{ height: "900px" }}></div>
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
            <li>The United Kingdom has had two national lockdowns.</li>
            <li>
              It’s first lockdown began March 23 and would remain that way until
              about May 28th, where restrictions would begin to start being
              uplifted. This is very similar to what we saw in New York, where
              we as well faced a tiered system post lockdown. Each tier would
              proceed as long as covid cases stayed at or decreased below a
              preferred percentage.
            </li>
            <li>
              Unfortunately, the second one was unavoidable as data showed the
              second wave could be way more severe than the first wave.
            </li>
            <li>
              It seems New York may be on the verge of another strict lockdown
              as well. We are starting to see places being forced to close down
              due to the increase in covid cases.
            </li>
            <li>
              Data showed that the second wave could possibly have several
              thousand deaths per day and a peak of mortality greater than the
              first wave.
            </li>
            <li>
              This second lockdown would begin Thursday, November 5th and would
              remain in effect until December 2nd, 2020.
            </li>
          </ul>
        </body>
        <img
          src={
            "https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/05/04/13/uk-coronavirus-response-charts.jpg?width=990"
          }
          style={{ padding: "20px" }}
        />
        <body>
          <h4>Lockdowns... A Necessary Evil?</h4>
          <div className="lines" style={{ height: "500px" }}></div>
          <ul className="list">
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
              Luckily, the furlough system would still be in effect throughout
              November. It paid 80% of employees. At least something is better
              than nothing.
            </li>
          </ul>
        </body>
        <img
          src={
            "https://images.mktw.net/im-267208?width=620&size=1.4988290398126465"
          }
          style={{ padding: "20px" }}
        />
        <body>
          <h4>Poor Administration</h4>
          <div className="lines" style={{ height: "370px" }}></div>
          <ul className="list">
            <li>
              The government and Prime Minister Boris Johnson have let their
              people down. This harsh second lockdown of 4 weeks could have been
              avoided. Talk about a second lockdown was discussed in the second
              half of september. The government delayed the second lockdown with
              hopes of not destroying the economy that was just beginning again.
            </li>
            <li>
              On the other hand, that decision to wait would prove to be worse
              for the people because the lockdown would be longer and harder
              which would only hurt the economy more and ruin lives of more
              people. If there was no delay, a shorter lockdown could have been
              enacted.
            </li>
          </ul>
        </body>
        <img
          src={
            "https://foreignpolicy.com/wp-content/uploads/2020/06/dominic-cummings-loses-popularity-in-britain.jpg?w=1500"
          }
          style={{ padding: "20px" }}
        />
        <body>
          <h4>Dominic Cummings... The Rules Don't Apply to Everyone</h4>
          <div className="lines" style={{ height: "1000px" }}></div>
          <ul className="list">
            <li>
              However this isn’t the first time this has happened. During the
              first COVID-19 lockdown, Dominic Cummings disobeyed the lockdown
              orders. If you are unaware of who Dominic Cummings is…
            </li>
            <li>
              he was the former chief advisor to the Prime Minister Boris
              Johnson. During the first lockdown, Cummings would leave his home
              in London and travel to his second home in Durham while displaying
              symptoms of the virus. The public really frowned upon this as it
              showed the government can do whatever they want.
            </li>
            <li>
              The public felt this rule breaking undermined compliance of
              Lockdown rules. They were right to feel this way because why
              should their livelihoods such as losing jobs be under attack to
              follow strict lockdown orders but a government official who has
              job security can break the orders.
            </li>
            <li>
              Life during Lockdown was pretty similar to over here in New York.
              The following is what occurred….
            </li>
            <li>Pubs and restaurants were closed but takeout was allowed.</li>
            <li>
              Non-essential businesses along with leisure and entertainment
              venues would be closed.
            </li>
            <li>
              No households mixing for gatherings indoors or in private gardens.
            </li>
            <li>
              People sre to stay home with exception to going to school, work or
              medical: Schools, Universities, and colleges would remain open
              which is different than the first lockdown.
            </li>
            <li>
              The UK is currently in a tiered system which replaced the national
              Lockdown on December 2nd, 2020.
            </li>
          </ul>
        </body>
        <img
          src={
            "https://i0.wp.com/metro.co.uk/wp-content/uploads/2020/11/PRI_173873482-1.jpg?quality=90&strip=all&zoom=1&resize=964%2C1069&ssl=1"
          }
          style={{ padding: "20px" }}
        />
      </div>
    </div>
  );
}
