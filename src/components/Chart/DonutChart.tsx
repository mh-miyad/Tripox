"use client";
import Chart from "react-apexcharts";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
const DonutChart = () => {
  const series = [44, 45, 10];
  const options = {
    chart: {
      width: "100%",
      type: "donut",
      height: "100%",
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
    <div>
      <div className="border rounded-md shadow-lg overflow-hidden bg-red-500  h-full p-4 w-full max-h-[450px] dark:bg-slate-950 ">
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

        <div className="w-full ">
          <Chart
            options={options}
            series={series}
            key={"pieChart"}
            type="donut"
            width={400}
            height={350}
          />
        </div>
      </div>
    </div>
  );
};

export default DonutChart;
