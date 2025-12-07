import React from "react";
import Navbar from "../../components/Navbar";
import {
  TbClockPlus,
  TbClockShare,
  TbClockX,
  TbMoneybag,
  TbSwipe,
  TbUserEdit,
} from "react-icons/tb";
import { HiOutlineBriefcase } from "react-icons/hi";
import { LuFiles } from "react-icons/lu";
import { FaRegClock } from "react-icons/fa";
import ReactApexChart from "react-apexcharts";
import { PieChart, Pie, Cell, ResponsiveContainer, Label } from "recharts";

function UserDashboard() {
  const HOURS = [
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "01:00",
    "02:00",
    "03:00",
    "04:00",
    "05:00",
    "06:00",
    "07:00",
    "08:00",
  ];

  const series = [
    {
      name: "Sat",
      data: [
        { x: "09:00", y: 90 },
        { x: "10:00", y: 90 },
        { x: "11:00", y: null },
        { x: "12:00", y: null },
        { x: "01:00", y: 90 },
        { x: "02:00", y: 90 },
        { x: "03:00", y: null },
        { x: "04:00", y: null },
        { x: "05:00", y: 90 },
        { x: "06:00", y: 90 },
        { x: "07:00", y: 90 },
        { x: "08:00", y: null },
      ],
    },
    {
      name: "Fri",
      data: HOURS.map((h) => ({ x: h, y: null })),
    },
    {
      name: "Thu",
      data: [
        { x: "09:00", y: null },
        { x: "10:00", y: null },
        { x: "11:00", y: null },
        { x: "12:00", y: 90 },
        { x: "01:00", y: null },
        { x: "02:00", y: null },
        { x: "03:00", y: null },
        { x: "04:00", y: null },
        { x: "05:00", y: 90 },
        { x: "06:00", y: null },
        { x: "07:00", y: 90 },
        { x: "08:00", y: null },
      ],
    },
    {
      name: "Wed",
      data: [
        { x: "09:00", y: null },
        { x: "10:00", y: null },
        { x: "11:00", y: null },
        { x: "12:00", y: null },
        { x: "01:00", y: 90 },
        { x: "02:00", y: null },
        { x: "03:00", y: null },
        { x: "04:00", y: null },
        { x: "05:00", y: null },
        { x: "06:00", y: null },
        { x: "07:00", y: 90 },
        { x: "08:00", y: null },
      ],
    },
    {
      name: "Tue",
      data: [
        { x: "09:00", y: null },
        { x: "10:00", y: null },
        { x: "11:00", y: null },
        { x: "12:00", y: null },
        { x: "01:00", y: null },
        { x: "02:00", y: 90 },
        { x: "03:00", y: null },
        { x: "04:00", y: null },
        { x: "05:00", y: 90 },
        { x: "06:00", y: null },
        { x: "07:00", y: null },
        { x: "08:00", y: null },
      ],
    },
    {
      name: "Mon",
      data: [
        { x: "09:00", y: 90 },
        { x: "10:00", y: null },
        { x: "11:00", y: 90 },
        { x: "12:00", y: 90 },
        { x: "01:00", y: 90 },
        { x: "02:00", y: 90 },
        { x: "03:00", y: 90 },
        { x: "04:00", y: 90 },
        { x: "05:00", y: 90 },
        { x: "06:00", y: 90 },
        { x: "07:00", y: 90 },
        { x: "08:00", y: 90 },
      ],
    },
  ];

  const options = {
    chart: {
      type: "heatmap",
      toolbar: { show: false },
    },

    legend: {
      show: false,
    },
    xaxis: {
      type: "category",
      categories: HOURS,
    },

    dataLabels: {
      enabled: false,
    },

    colors: ["#00b050"],

    plotOptions: {
      heatmap: {
        shadeIntensity: 0.3,
        radius: 4,
        enableShades: true,
        colorScale: {
          ranges: [
            { from: -1, to: -1, color: "#f4f6f4" },
            { from: 0, to: 60, color: "#c8f5d6" },
            { from: 61, to: 80, color: "#66d27a" },
            { from: 81, to: 100, color: "#00b050" },
          ],
        },
      },
    },
  };

  const data = [
    { name: "Ongoing", value: 49, color: "#4169E1" },
    { name: "To Do", value: 35, color: "#808080" },
    { name: "Completed", value: 64, color: "#00C853" },
    { name: "Incomplete", value: 32, color: "#FF1744" },
  ];

  const total = data.reduce((a, b) => a + b.value, 0);

  const [state, setState] = React.useState({
    series: [74, 70],
    options: {
      chart: {
        height: 350,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: "45%",
          },
          track: {
            background: "#E0E0E0",
            strokeWidth: "100%",
          },
          dataLabels: {
            name: {
              fontSize: "22px",
            },
            value: {
              fontSize: "16px",
            },
            total: {
              show: true,
              label: "Total",
              formatter: function () {
                return 249;
              },
            },
          },

          barLabels: {
            enabled: false,
          },
          startAngle: -120,
          endAngle: 232,
        },
      },

      stroke: {
        lineCap: "round",
      },

      labels: ["Production", "Manual"],

      legend: {
        show: true,
        position: "top",
        fontSize: "16px",
        offsetY: 19,
        labels: {
          colors: "#333",
        },
        markers: {
          width: 12,
          height: 12,
          radius: 12,
        },
        formatter: function (seriesName, opts) {
          return `${seriesName}: ${opts.w.globals.series[opts.seriesIndex]}`;
        },
      },

      colors: ["#2962FF", "#FFA726"],
    },
  });

  const [chart, setChart] = React.useState({
    series: [
      {
        name: "This Year",
        type: "column",
        data: [40, 20, 35, 50, 60, 80, 30, 50, 70, 45, 35, 25],
      },
      {
        name: "Sales",
        type: "area",
        data: [30, 35, 40, 55, 30, 45, 35, 50, 60, 55, 60, 70],
      },
    ],

    options: {
      chart: {
        height: 350,
        type: "line",
        stacked: false,
        toolbar: { show: false },
      },

      fill: {
        type: ["solid", "gradient"], // column = solid, area = gradient
        gradient: {
          shade: "light",
          type: "vertical",
          opacityFrom: 0.45,
          opacityTo: 0.05,
          stops: [0, 100],
        },
      },

      stroke: {
        width: [0, 2], // bar = 0, area = smooth line
        curve: "smooth",
      },

      plotOptions: {
        bar: {
          borderRadius: 3,
          columnWidth: "45%",
        },
      },

      colors: ["#3550DC", "#FF8A00"],

      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],

      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },

      legend: {
        position: "bottom",
        markers: { width: 14, height: 14, radius: 12 },
      },

      dataLabels: { enabled: false },
    },
  });

  return (
    <div>
      <Navbar>
        <div className="flex flex-col w-full gap-7 sm:p-[24px]">
          <div className="flex text-sm p-2 justify-around sm:justify-between mb-[-15px]">
            <h4 className="md:text-[1.125rem] font-semibold">User Dashboard</h4>
            <p>
              Home &gt;{" "}
              <span className="md:text-[1rem] font-medium">User Dashboard</span>
            </p>
          </div>
          <div className="flex justify-around flex-wrap">
            <div className=" p-5 pt-4 shadow shadow-gray-400 dark:shadow-[#011743] dark:bg-[#030318] rounded w-[86%] sm:w-[48%] xl:w-[23%]">
              <div className="mb-3 flex items-center justify-between relative">
                <div>
                  <p className="text-gray-400 ">Total Working Hours</p>
                  <h4 className="font-bold text-xl">95h 41m</h4>
                </div>
                <div className="text-3xl p-1.5 rounded text-white bg-blue-500 z-10">
                  <TbClockShare />
                </div>
              </div>
              <div className="flex text-[16px] font-medium">
                <span className="text-[#06bb69] rounded mr-2 flex items-center">
                  +22.3%
                </span>
                <p className="text-gray-400">Compared to Last Month</p>
              </div>
            </div>
            <div className=" p-5 pt-4 shadow shadow-gray-400 dark:shadow-[#011743] dark:bg-[#030318] rounded w-[86%] mt-3 sm:w-[48%] sm:mt-0 xl:w-[23%]">
              <div className="mb-3 flex items-center justify-between">
                <div>
                  <p className="text-gray-400 ">Manual Added Time</p>
                  <h4 className="font-bold text-xl">6h 33m</h4>
                </div>
                <div className="text-3xl p-1.5 rounded text-white bg-gray-500 z-10">
                  <TbClockPlus />
                </div>
              </div>
              <div className="flex text-[16px] font-medium">
                <span className="text-[#06bb69] rounded mr-2 flex items-center">
                  +22.3%
                </span>
                <p className="text-gray-400">Compared to Last Month</p>
              </div>
            </div>
            <div className=" p-5 pt-4 shadow shadow-gray-400 dark:shadow-[#011743] dark:bg-[#030318] rounded sm:mt-7 w-[86%] mt-3  xl:mt-0 sm:w-[48%] xl:w-[23%]">
              <div className="mb-3 flex items-center justify-between">
                <div>
                  <p className="text-gray-400 ">Unproductive Time</p>
                  <h4 className="font-bold text-xl">21h 15m</h4>
                </div>
                <div className="text-3xl p-1.5 rounded text-white bg-red-500 z-10">
                  <TbClockX />
                </div>
              </div>
              <div className="flex text-[16px] font-medium">
                <span className="text-red-600 rounded mr-2 flex items-center">
                  -15.5%
                </span>
                <p className="text-gray-400">Compared to Last Month</p>
              </div>
            </div>
            <div className=" p-5 pt-4 shadow shadow-gray-400 dark:shadow-[#011743] dark:bg-[#030318] rounded sm:mt-7 w-[86%] mt-3 xl:mt-0 sm:w-[48%] xl:w-[23%]">
              <div className="mb-3 flex items-center justify-between">
                <div>
                  <p className="text-gray-400 ">Productive Time</p>
                  <h4 className="font-bold text-xl">40h 22m</h4>
                </div>
                <div className="text-3xl p-1.5 rounded text-white bg-purple-500 z-10">
                  <HiOutlineBriefcase />
                </div>
              </div>
              <div className="flex text-[16px] font-medium">
                <span className="text-[#06bb69] rounded mr-2 flex items-center">
                  +15.3%
                </span>
                <p className="text-gray-400">Compared to Last Month</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between flex-wrap sm:pl-2 md:pl-5 xl:px-4">
            <div className="pt-4 h-98 shadow shadow-gray-400 dark:shadow-[#011743] dark:bg-[#030318] overflow-hidden rounded w-[97.5%] xl:w-[56%]">
              <h4 className="text-xl font-bold pb-4 pl-3">
                Project Statistics
              </h4>
              <hr className="mx-[-20px] dark:text-[#011743] text-gray-300 mb-5" />
              <div className="w-full mt-[-13px]">
                <ReactApexChart
                  options={chart.options}
                  series={chart.series}
                  height={320}
                  width={"100%"}
                  type="line"
                />
              </div>
            </div>
            <div className="p-5 pt-4 h-98 shadow shadow-gray-400 dark:shadow-[#011743] dark:bg-[#030318] overflow-hidden rounded w-[97.5%] mt-6 xl:mt-0 xl:w-[41%]">
              <h4 className="text-xl font-bold pb-4">Top Web App & Usage</h4>
              <hr className="mx-[-20px] dark:text-[#011743] text-gray-300" />
              <div className="flex items-center gap-2 my-4">
                <img
                  src="/assets/images/figma.png"
                  className="rounded-full w-10"
                />
                <div className="w-full">
                  <div className="w-full flex justify-between items-center">
                    <p className="text-[14px] font-semibold hover:text-blue-600 cursor-pointer">
                      Figma{" "}
                    </p>
                    <p className="text-[17px] font-semibold">36h 40m</p>
                  </div>
                  <div className="flex w-full justify-between items-center">
                    <p className="text-[14px] text-gray-500">Design</p>
                    <div className="w-30 sm:w-45 h-1.5 rounded bg-gray-200">
                      <div className="w-20 sm:w-30 h-1.5 rounded-l bg-green-500"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 my-4">
                <img
                  src="/assets/images/chrome.png"
                  className="rounded-full w-10"
                />
                <div className="w-full">
                  <div className="w-full flex justify-between items-center">
                    <p className="text-[14px] font-semibold hover:text-blue-600 cursor-pointer">
                      Google{" "}
                    </p>
                    <p className="text-[17px] font-semibold">24h 40m</p>
                  </div>
                  <div className="flex w-full justify-between items-center">
                    <p className="text-[14px] text-gray-500">Browser</p>
                    <div className="w-30 sm:w-45 h-1.5 rounded bg-gray-200">
                      <div className="w-13 sm:w-27 h-1.5 rounded-l bg-purple-600"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 my-4">
                <img
                  src="/assets/images/ai.png"
                  className="rounded-full w-10"
                />
                <div className="w-full">
                  <div className="w-full flex justify-between items-center">
                    <p className="text-[14px] font-semibold hover:text-blue-600 cursor-pointer">
                      Adobe illustrator{" "}
                    </p>
                    <p className="text-[17px] font-semibold">20h 40m</p>
                  </div>
                  <div className="flex w-full justify-between items-center">
                    <p className="text-[14px] text-gray-500">Design</p>
                    <div className=" w-30 sm:w-45 h-1.5 rounded bg-gray-200">
                      <div className="w-8 sm:w-17 h-1.5 rounded-l bg-yellow-500"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 my-4">
                <img
                  src="/assets/images/slack.png"
                  className="rounded-full w-10"
                />
                <div className="w-full">
                  <div className="w-full flex justify-between items-center">
                    <p className="text-[14px] font-semibold hover:text-blue-600 cursor-pointer">
                      Slack{" "}
                    </p>
                    <p className="text-[17px] font-semibold">22h 40m</p>
                  </div>
                  <div className="flex w-full justify-between items-center">
                    <p className="text-[14px] text-gray-500">Communication</p>
                    <div className="w-30 sm:w-45 h-1.5 rounded bg-gray-200">
                      <div className="w-13 sm:w-25 h-1.5 rounded-l bg-blue-500"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 my-4">
                <img
                  src="/assets/images/teams.png"
                  className="rounded-full w-10"
                />
                <div className="w-full">
                  <div className="w-full flex justify-between items-center">
                    <p className="text-[14px] font-semibold hover:text-blue-600 cursor-pointer">
                      Teams{" "}
                    </p>
                    <p className="text-[17px] font-semibold">18h 40m</p>
                  </div>
                  <div className="flex w-full justify-between items-center">
                    <p className="text-[14px] text-gray-500">Communication</p>
                    <div className="w-30 sm:w-45 h-1.5 rounded bg-gray-200">
                      <div className="w-6 sm:w-30 h-1.5 rounded-l bg-red-600"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-around flex-wrap">
            <div className="p-5 pt-4 h-100 shadow shadow-gray-400 dark:shadow-[#011743] dark:bg-[#030318] overflow-hidden rounded w-[97.5%] xl:w-[33%]">
              <h4 className="text-xl font-bold pb-4">Recent Tasks</h4>
              <hr className="mx-[-20px] dark:text-[#011743] text-gray-300" />
              <div className="flex items-center gap-2 my-5">
                <p className="p-2.5 px-3 rounded text-blue-600 bg-blue-200 dark:bg-blue-600/30 font-semibold">
                  FS
                </p>
                <div className="w-full">
                  <div className="w-full flex justify-between items-center">
                    <div>
                      <p className="text-[14px] font-semibold hover:text-blue-600 cursor-pointer">
                        FlowSpark - Workflow tools
                      </p>
                      <p className="text-[14px] text-gray-500 flex items-center gap-1">
                        <span>Inner pages demo</span>
                      </p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <span className="font-semibold text-sm">4h 22m</span>
                      <span className="text-[13px] font-semibold mt-0.5 px-2 pb-1 rounded bg-pink-100 dark:bg-pink-700/30 text-pink-500">
                        Ongoing
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 my-5">
                <p className="p-2.5 px-3 rounded text-orange-600 bg-orange-200 dark:bg-orange-700/30 font-semibold">
                  CL
                </p>
                <div className="w-full">
                  <div className="w-full flex justify-between items-center">
                    <div>
                      <p className="text-[14px] font-semibold hover:text-blue-600 cursor-pointer">
                        Corelytics - Data tools
                      </p>
                      <p className="text-[14px] text-gray-500 flex items-center gap-1">
                        <span>Write Function on Hover</span>
                      </p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <span className="font-semibold text-sm">42h 33m</span>
                      <span className="text-[13px] font-semibold mt-0.5 px-2 pb-1 rounded bg-green-100 dark:bg-green-700/30 text-green-600">
                        Completed
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 my-5">
                <p className="p-2.5 px-3 rounded text-pink-600 bg-pink-200 dark:bg-pink-700/30 font-semibold">
                  TZ
                </p>
                <div className="w-full">
                  <div className="w-full items-center flex justify-between">
                    <div>
                      <p className="text-[14px] font-semibold hover:text-blue-600 cursor-pointer">
                        TaskZen - Productivity
                      </p>
                      <p className="text-[14px] text-gray-500 flex items-center gap-1">
                        <span>Creating Login Pages</span>
                      </p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <span className="font-semibold text-sm">2h 33m</span>
                      <span className="text-[13px] font-semibold mt-0.5 px-2 pb-1 rounded bg-green-100 dark:bg-green-700/30 text-green-600">
                        Completed
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 my-5">
                <p className="p-2.5 px-3 rounded text-lime-600 bg-lime-100 dark:bg-lime-700/30 font-semibold">
                  CP
                </p>
                <div className="w-full">
                  <div className="w-full items-center flex justify-between">
                    <div>
                      <p className="text-[14px] font-semibold hover:text-blue-600 cursor-pointer">
                        CodePulse - Cloud tools
                      </p>
                      <p className="text-[14px] text-gray-500 flex items-center gap-1">
                        <span>Design a Service Detail Page</span>
                      </p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <span className="font-semibold text-sm">4h 33m</span>
                      <span className="text-[13px] font-semibold mt-0.5 px-2 pb-1 rounded bg-green-100 dark:bg-green-700/30 text-green-600">
                        Completed
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 my-5">
                <p className="p-2.5 px-3 rounded text-purple-600 bg-purple-200 dark:bg-purple-700/30 font-semibold">
                  PD
                </p>
                <div className="w-full">
                  <div className="w-full items-center flex justify-between">
                    <div>
                      <p className="text-[14px] font-semibold hover:text-blue-600 cursor-pointer">
                        PulseDesk - Helpdesk
                      </p>
                      <p className="text-[14px] text-gray-500 flex items-center gap-1">
                        <span>Creating Admin Dashboard</span>
                      </p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <span className="font-semibold text-sm">16h 22m</span>
                      <span className="text-[13px] font-semibold mt-0.5 px-2 pb-1 rounded bg-green-100 dark:bg-green-700/30 text-green-600">
                        Completed
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-5 pt-4 h-100 shadow shadow-gray-400 dark:shadow-[#011743] dark:bg-[#030318] overflow-hidden rounded mt-6 xl:mt-0 w-[97.5%] lg:w-[47.5%] xl:w-[36%]">
              <h4 className="text-xl font-bold pb-4">Work By Hours</h4>
              <hr className="mx-[-20px] dark:text-[#011743] text-gray-300" />
              <div className="w-full">
                <ReactApexChart
                  options={options}
                  series={series}
                  type="heatmap"
                  height={340}
                  width={"100%"}
                  style={{ marginTop: "-10px" }}
                />
              </div>
            </div>
            <div className="p-5 pt-4 h-100 shadow shadow-gray-400 dark:shadow-[#011743] dark:bg-[#030318] overflow-hidden rounded mt-6 xl:mt-0 w-[97.5%] lg:w-[47.5%] xl:w-[25%] relative">
              <h4 className="text-xl font-bold pb-4">Task Statistics</h4>
              <hr className="mx-[-20px] dark:text-[#011743] text-gray-300" />
              <div>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={data}
                      dataKey="value"
                      startAngle={180}
                      endAngle={0}
                      innerRadius={94}
                      outerRadius={110}
                      stroke="none"
                    >
                      {data.map((entry, index) => (
                        <Cell key={index} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex flex-col absolute top-[34%] left-[46%] text-center">
                <span className="text-[19px] font-semibold">Total</span>
                <span className="text-gray-500">{total}</span>
              </div>
              <div className="border-1 dark:border-[#011743] border-gray-300s rounded mt-[-80px]">
                <div className="flex justify-between p-1.5 px-3 border-b border-gray-300 dark:border-[#011743]">
                  <span className="text-sm text-gray-400 font-semibold flex items-center gap-2">
                    <div className="bg-blue-500 rounded-full w-2 h-2"></div>
                    Ongoing Tasks
                  </span>
                  <span className="font-semibold">49</span>
                </div>
                <div className="flex justify-between p-1.5 px-3 border-b dark:border-[#011743] border-gray-300">
                  <span className="text-sm text-gray-400 font-semibold flex items-center gap-2">
                    <div className="bg-gray-500 rounded-full w-2 h-2"></div>
                    To Do Tasks
                  </span>
                  <span className="font-semibold">35</span>
                </div>
                <div className="flex justify-between p-1.5 px-3 border-b dark:border-[#011743] border-gray-300">
                  <span className="text-sm text-gray-400 font-semibold flex items-center gap-2">
                    <div className="bg-green-500 rounded-full w-2 h-2"></div>
                    Completed Tasks
                  </span>
                  <span className="font-semibold">64</span>
                </div>
                <div className="flex justify-between p-1.5 px-3">
                  <span className="text-sm text-gray-400 font-semibold flex items-center gap-2">
                    <div className="bg-red-500 rounded-full w-2 h-2"></div>
                    Incompleted Tasks
                  </span>
                  <span className="font-semibold">32</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-around flex-wrap">
            <div className="p-5 pt-4 h-fit md:h-97 shadow shadow-gray-400 dark:shadow-[#011743] dark:bg-[#030318] overflow-hidden rounded w-[97.5%] xl:w-[31.5%]">
              <h4 className="text-xl font-bold pb-4">Team Members</h4>
              <hr className="mx-[-20px] dark:text-[#011743] text-gray-300" />
              <div className="flex items-center gap-2 my-4">
                <img
                  src="/assets/images/avatar2.jpg"
                  className="rounded-full w-10"
                />
                <div className="w-full">
                  <div className="w-full flex justify-between items-center">
                    <p className="text-[14px] font-semibold hover:text-blue-600 cursor-pointer">
                      Leon Baxter{" "}
                    </p>
                    <span className="text-[10px] p-1 px-3 font-medium bg-indigo-100 dark:bg-indigo-700/30 rounded ml-1 text-sky-600">
                      Fresher
                    </span>
                  </div>
                  <div className="flex w-full justify-between items-center">
                    <p className="text-[14px] text-gray-500">Test Lead</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 my-4">
                <img
                  src="/assets/images/avatar8.jpg"
                  className="rounded-full w-10"
                />
                <div className="w-full">
                  <div className="w-full flex justify-between items-center">
                    <p className="text-[14px] font-semibold hover:text-blue-600 cursor-pointer">
                      Charles Cline{" "}
                    </p>
                    <span className="text-[10px] p-1 font-medium bg-purple-200 dark:bg-purple-700/30 rounded px-3 ml-1 text-purple-600">
                      8+ Years
                    </span>
                  </div>
                  <div className="flex w-full justify-between items-center">
                    <p className="text-[14px] text-gray-500">
                      Security Engineer
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 my-4">
                <img
                  src="/assets/images/avatar3.jpg"
                  className="rounded-full w-10"
                />
                <div className="w-full">
                  <div className="w-full flex justify-between items-center">
                    <p className="text-[14px] font-semibold hover:text-blue-600 cursor-pointer">
                      Aliza Duncan{" "}
                    </p>
                    <span className="px-3  text-[10px] p-1 font-medium bg-orange-200 dark:bg-orange-700/30 rounded ml-1 text-orange-600">
                      4+ Years
                    </span>
                  </div>
                  <div className="flex w-full justify-between items-center">
                    <p className="text-[14px] text-gray-500">
                      Backend Developer
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 my-4">
                <img
                  src="/assets/images/avatar4.jpg"
                  className="rounded-full w-10"
                />
                <div className="w-full">
                  <div className="w-full flex justify-between items-center">
                    <p className="text-[14px] font-semibold hover:text-blue-600 cursor-pointer">
                      Thomas Ward{" "}
                    </p>
                    <span className="px-3 text-[10px] p-1 font-medium bg-pink-200 dark:bg-pink-700/30 rounded ml-1 text-pink-600">
                      2+ Years
                    </span>
                  </div>
                  <div className="flex w-full justify-between items-center">
                    <p className="text-[14px] text-gray-500">UI Designer</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 my-4">
                <img
                  src="/assets/images/avatar1.jpg"
                  className="rounded-full w-10"
                />
                <div className="w-full">
                  <div className="w-full flex justify-between items-center">
                    <p className="text-[14px] font-semibold hover:text-blue-600 cursor-pointer">
                      James Higham{" "}
                    </p>
                    <span className="px-3 text-[10px] p-1 font-medium bg-sky-100 dark:bg-sky-700/30 rounded ml-1 text-sky-600">
                      12+ Years
                    </span>
                  </div>
                  <div className="flex w-full justify-between items-center">
                    <p className="text-[14px] text-gray-500">
                      Android Developer
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-5 pt-4 h-fit md:h-97 shadow shadow-gray-400 dark:shadow-[#011743] dark:bg-[#030318] overflow-hidden rounded mt-6 xl:mt-0 w-[97.5%] lg:w-[47.5%] xl:w-[31.5%]">
              <h4 className="text-xl font-bold pb-4">Production Statistics</h4>
              <hr className="mx-[-20px] dark:text-[#011743] text-gray-300 mb-3" />
              <div className="mt-[-13px]">
                <ReactApexChart
                  options={state.options}
                  series={state.series}
                  type="radialBar"
                  height={260}
                />
              </div>
              <div className="flex justify-around items-center text-center border border-gray-300 dark:border-[#011743] rounded p-2 mt-[-50px]">
                <div className="">
                  <p className="text-sm font-semibold text-gray-400">
                    Production Hours
                  </p>
                  <span className="text-xl font-semibold">265</span>
                </div>
                <div className="bg-gray-300 dark:bg-[#011743] h-15 my-[-9px] w-[1.5px]"></div>
                <div>
                  <p className="text-sm font-semibold text-gray-400">
                    Manual Hours
                  </p>
                  <span className="text-xl font-semibold">82</span>
                </div>
              </div>
            </div>
            <div className="p-5 pt-4 h-fit md:h-97 shadow shadow-gray-400 dark:shadow-[#011743] dark:bg-[#030318] overflow-hidden rounded mt-6 xl:mt-0 w-[97.5%] lg:w-[47.5%] xl:w-[31.5%] relative">
              <h4 className="text-xl font-bold pb-4">Recent Activity</h4>
              <hr className="mx-[-20px] dark:text-[#011743] text-gray-300" />
              <div className="flex items-center gap-2.5 my-4">
                <div>
                  <div className="flex items-center">
                    <div className="bg-blue-200 dark:bg-blue-500/30 p-1 rounded-full">
                      <LuFiles className="text-white bg-blue-600 p-1.5 text-[32px] rounded-full" />
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <div className="w-full flex justify-between text-sm items-center">
                    <span className="font-semibold text-[17px]">
                      Leave approved
                    </span>
                    <span className="text-gray-500">20 Mins Ago</span>
                  </div>
                  <p className="text-[13.5px] text-gray-600">
                    Medical Leave (Aug 1-2) by HR Manager
                  </p>
                </div>
              </div>
              <span className="absolute rotate-90 left-8 hidden xl:block top-29.5 text-gray-400">
                ---
              </span>
              <div className="flex items-center gap-2.5 my-4">
                <div>
                  <div className="flex items-center">
                    <div className="bg-green-100 dark:bg-green-500/30 p-1 rounded-full">
                      <TbMoneybag className="text-white bg-green-500 p-1.5 text-[32px] rounded-full" />
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <div className="w-full flex justify-between text-sm items-center">
                    <span className="font-semibold text-[17px]">Appraisal</span>
                    <span className="text-gray-500">10 Mins Ago</span>
                  </div>
                  <p className="text-[13.5px] text-gray-600">
                    Performance Review submitted for Q2 FY25
                  </p>
                </div>
              </div>
              <span className="absolute rotate-90 left-8 hidden xl:block top-44 text-gray-400">
                ---
              </span>
              <div className="flex items-center gap-2.5 my-4">
                <div>
                  <div className="flex items-center">
                    <div className="bg-gray-200 dark:bg-gray-300/30 p-1 rounded-full">
                      <TbSwipe className="text-white bg-gray-400 p-1.5 text-[32px] rounded-full" />
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <div className="w-full flex justify-between text-sm items-center">
                    <span className="font-semibold text-[17px]">
                      Payslip For July
                    </span>
                    <span className="text-gray-500">25 Mins Ago</span>
                  </div>
                  <p className="text-[13.5px] text-gray-600">
                    Payslip for July 2025 generated - Download
                  </p>
                </div>
              </div>
              <span className="absolute rotate-90 left-8 hidden xl:block top-59.5 text-gray-400">
                ---
              </span>
              <div className="flex items-center gap-2.5 my-4">
                <div>
                  <div className="flex items-center">
                    <div className="bg-teal-100 dark:bg-teal-500/30 p-1 rounded-full">
                      <FaRegClock className="text-white bg-teal-400 p-1.5 text-[32px] rounded-full" />
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <div className="w-full flex justify-between text-sm items-center">
                    <span className="font-semibold text-[17px]">
                      Updated Time Sheet
                    </span>
                    <span className="text-gray-500">6 Aug 2025</span>
                  </div>
                  <p className="text-[13.5px] text-gray-600">
                    Added comment to Project Phoenix Timesheet
                  </p>
                </div>
              </div>
              <span className="absolute rotate-90 left-8 hidden xl:block top-74.5 text-gray-400">
                ---
              </span>
              <div className="flex items-center gap-2.5 my-4">
                <div>
                  <div className="flex items-center">
                    <div className="bg-pink-200 dark:bg-pink-500/30 p-1 rounded-full">
                      <TbUserEdit className="text-white bg-pink-400 p-1.5 text-[32px] rounded-full" />
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <div className="w-full flex justify-between text-sm items-center">
                    <span className="font-semibold text-[17px]">
                      Contact Changed
                    </span>
                    <span className="text-gray-500">5 Aug 2025</span>
                  </div>
                  <p className="text-[13.5px] text-gray-600">
                    Changed emergency contact info
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Navbar>
    </div>
  );
}

export default UserDashboard;
