"use client";
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],

  datasets: [
    {
      label: "# of Votes",
      data: [113, 143, 233, 125, 232, 321],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "right" as const,
      display: false,
    },
    title: {
      display: false,
      text: "Sales Overview",
    },
  },
};
const PieChart = () => {
  return (
    <div className="w-full max-w-fit bg-white dark:bg-slate-950 dark:backdrop-blur-md border rounded-sm p-4 my-4 max-h-[300px]">
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
