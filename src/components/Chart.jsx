import React, { Component } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

class Chart extends Component {
  render() {
    const { countries } = this.props;

    if (countries.length === 0) return <div></div>;

    const data = {
      labels: countries.map((c) => c.name),
      datasets: [
        {
          data: countries.map((c) => c.total),
          backgroundColor: ["orange", "blue", "red", "purple", "green"],
        },
      ],
    };

    return (
      <div>
        <Pie
          data={data}
          width={100}
          height={300}
          options={{ maintainAspectRatio: false }}
        />
      </div>
    );
  }
}

export default Chart;
