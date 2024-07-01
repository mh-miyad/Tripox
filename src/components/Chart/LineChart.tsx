"use client";
import dayjs from "dayjs";
import Chart from "react-apexcharts";
export const data = {
  series: [
    {
      name: "sales",
      data: [
        {
          x: "2019/01/01",
          y: 400,
        },
        {
          x: "2019/04/01",
          y: 430,
        },
        {
          x: "2019/07/01",
          y: 448,
        },
        {
          x: "2019/10/01",
          y: 470,
        },
        {
          x: "2020/01/01",
          y: 540,
        },
        {
          x: "2020/04/01",
          y: 580,
        },
        {
          x: "2020/07/01",
          y: 690,
        },
        {
          x: "2020/10/01",
          y: 690,
        },
      ],
    },
  ],
  options: {
    chart: {
      type: "bar",
      height: 280,
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        barWidth: 2,
        columnWidth: "30%",
      },
    },
    xaxis: {
      type: "category",
      labels: {
        formatter: function (val: { val: any }) {
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
        formatter: function (val) {
          return "Q" + dayjs(val).format() + " " + dayjs(val).format("YYYY");
        },
      },
    },
  },
};
const LineChart = () => (
  <>
    <div className="w-full max-w-[68rem] border rounded-md shadow-lg bg-white h-full p-4  max-h-[400px] dark:bg-slate-950">
      <Chart
        options={data.options}
        series={data.series}
        type="bar"
        width="100%"
        height={380}
      />
    </div>
  </>
);

export default LineChart;
