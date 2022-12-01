import React, { Component } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

class Chart extends Component {
  render() {
    const { countries } = this.props;

    //if (countries.length === 0) return <div></div>;

    const data = {
      labels: countries.map((c) => c.name),
      datasets: [
        {
          data: countries.map((c) => c.total),
          //   backgroundColor: "red",
        },
      ],
    };

    return <div>Selected {countries.length} countries</div>;
  }
}

export default Chart;
