"use client";
import Chart from "react-apexcharts";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
const PieChart = () => {
  const series = [44, 45, 10];
  const options = {
    chart: {
      width: "100%",
      type: "pie",
      animations: {
        enabled: true,
        easing: "easeinout",
        speed: 2000,
        animateGradually: {
          enabled: true,
          delay: 150,
        },
        dynamicAnimation: {
          enabled: true,
          speed: 1050,
        },
      },
      legend: {
        show: false,
        showForSingleSeries: false,
        showForNullSeries: true,
        showForZeroSeries: true,
        position: "bottom",
        horizontalAlign: "center",
      },
    },
    labels: ["Women", "Men", "Children"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: "100%",
            type: "pie",
          },
          legend: {
            show: false,
            showForSingleSeries: false,
            showForNullSeries: false,
            showForZeroSeries: true,
            position: "left",
            horizontalAlign: "right",
          },
        },
      },
    ],
  };

  return (
    <div className="border rounded-md shadow-lg bg-white h-full p-4 max-w-lg  max-h-[440px] dark:bg-slate-950 ">
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
        <Chart
          options={options}
          series={series}
          key={"pieChart"}
          type="pie"
          height={350}
          width={"100%"}
        />
      </div>
    </div>
  );
};

export default PieChart;
