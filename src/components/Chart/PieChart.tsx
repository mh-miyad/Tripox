"use client";
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Acquisition", "Purchase", "Retention"],

  datasets: [
    {
      label: "Cost Of Sales",
      data: [11, 56, 33],
      backgroundColor: [
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
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
      position: "top" as const,
      display: true,
    },
    title: {
      display: false,
      text: "Sales Overview",
    },
  },
};
const PieChart = () => {
  return (
    <div className="w-[100%] md:w-[355px]  bg-white dark:bg-slate-950 dark:backdrop-blur-md border rounded-sm py-9 px-5  ">
      {/* <Pie data={data} options={options} /> */}
      <div className="flex items-center justify-between gap-5 mb-5  ">
        <h2 className="text-2xl font-medium  tracking-wide capitalize">
          {" "}
          Total Order Cost{" "}
        </h2>
        <div>
          <Select>
            <SelectTrigger className="w-fit min-w-[120px] focus:ring-0 focus-within:ring-0 ">
              <SelectValue placeholder="This Week" />
            </SelectTrigger>
            <SelectContent color="indigo">
              <SelectItem value="week">This Week</SelectItem>
              <SelectItem value="month">This Month</SelectItem>
              <SelectItem value="year">This Year</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="w-full">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

export default PieChart;
