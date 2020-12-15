import React from "react";
import { Line } from "react-chartjs-2";
import "../../assets/Chart.css";

function LineGraph(props) {
  const json = props.json;

  // this arrays will store coordinates
  let x = [];
  let y = [];

  let deathY = [];

  if (json !== undefined) {
    //json is an array of objects
    //we have to iterate over each index and grab: date(x), newCasesByPublishDate(y)
    json
      .slice()
      .reverse()
      .forEach((element, index, array) => {
        // to the arrays
        x.push(element.date);
        y.push(element.newCasesByPublishDate);
        deathY.push(element.newDeathsByDeathDate);
      });
  }

  let dataObj = {
    labels: x,
    datasets: [
      {
        label: "newCasesByPublishDate",
        data: y,
      },
    ],
  };

  let deathDataObj = {
    labels: x,
    datasets: [
      {
        label: "newDeathsByDeathDate",
        data: deathY,
      },
    ],
  };

  return (
    <div>
      <div className="chart">
        <Line
          data={dataObj}
          height={400}
          width={600}
          options={{
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
          }}
        />
      </div>
      <div className="chart">
        <Line
          data={deathDataObj}
          height={400}
          width={600}
          options={{
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
          }}
        />
      </div>
    </div>
  );
}

export default LineGraph;
