"use client";
import { ApexOptions } from "apexcharts";
import dayjs from "dayjs";
import Chart from "react-apexcharts";

const data: ApexOptions = {
  series: [
    {
      name: "sales",
      data: [
        { x: "2019/01/01", y: 400 },
        { x: "2019/04/01", y: 430 },
        { x: "2019/07/01", y: 448 },
        { x: "2019/10/01", y: 470 },
        { x: "2020/01/01", y: 540 },
        { x: "2020/04/01", y: 580 },
        { x: "2020/07/01", y: 690 },
        { x: "2020/10/01", y: 690 },
      ],
    },
  ],

  chart: {
    type: "bar",
    height: "100%",
  },
  // responsive: [
  //   {
  //     breakpoint: 480,
  //     options: {
  //       charts: {
  //         width: 500,
  //       },
  //     },
  //   },
  //   {
  //     breakpoint: 680,
  //     options: {
  //       charts: {
  //         width: 700,
  //       },
  //     },
  //   },
  // ],
  plotOptions: {
    bar: {
      borderRadius: 10,
      columnWidth: "50%",
    },
  },
  xaxis: {
    type: "category",
    labels: {
      formatter: function (val: any) {
        return "Q" + dayjs(val).format("Q");
      },
    },
    group: {
      style: {
        fontSize: "16px",
        fontWeight: 500,
      },
      groups: [
        { title: "2019", cols: 4 },
        { title: "2020", cols: 4 },
      ],
    },
  },
  title: {
    text: "Grouped Labels on the X-axis",
  },
  tooltip: {
    x: {
      formatter: function (val: any) {
        return "Q" + dayjs(val).format() + " " + dayjs(val).format("YYYY");
      },
    },
  },
};

const LineChart = () => (
  <div className="w-full xl:max-w-[65rem] border rounded-md shadow-lg bg-white p-4 max-h-[400px] dark:bg-slate-950">
    <Chart options={data} series={data.series} type="bar" height={380} />
  </div>
);

export default LineChart;
