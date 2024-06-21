"use client";
import { Chart } from "chart.js"; // Import Chart from chart.js
import { Line } from "react-chartjs-2";

// Register the needed controllers
Chart
  .register
  // Add any other controllers you plan to use
  // For example, if you want to fill the area under the graph line:
  // Chart.controllers.line.filler
  ();

const data = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
    {
      label: "Sales",
      data: [65, 59, 80, 81, 56],
      borderColor: "rgba(75, 192, 192, 1)",
      fill: true, // Fill area under the line
    },
  ],
};

const options = {
  scales: {
    y: {
      // Use 'linear' for Y-axis scale
      beginAtZero: true,
    },
  },
};

const LineChart = () => (
  <div>
    <h2>Your Line Chart</h2>
    <Line data={data} options={options} />
  </div>
);

export default LineChart;
