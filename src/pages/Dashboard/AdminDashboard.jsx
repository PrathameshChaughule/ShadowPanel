import Navbar from "../../components/Navbar";
import { MdOutlineArrowOutward } from "react-icons/md";
import { GoArrowDownLeft } from "react-icons/go";
import { FiX } from "react-icons/fi";
import { IoCheckmark } from "react-icons/io5";
import { TbMoneybag, TbSubtask } from "react-icons/tb";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Legend,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { useAuth } from "../../contexts/authContext";

function AdminDashboard() {
  const { userLoggedIn } = useAuth();
  const data = [
    { year: "2025", female: 90, male: 60 },
    { year: "2026", female: 60, male: 75 },
    { year: "2027", female: 40, male: 80 },
    { year: "2028", female: 85, male: 50 },
    { year: "2029", female: 70, male: 65 },
  ];
  const data1 = [
    { date: "15 Jan", Active: 88, Inprogress: 18, Completed: 38 },
    { date: "16 Jan", Active: 45, Inprogress: 70, Completed: 38 },
    { date: "17 Jan", Active: 88, Inprogress: 18, Completed: 38 },
    { date: "18 Jan", Active: 46, Inprogress: 18, Completed: 80 },
    { date: "19 Jan", Active: 60, Inprogress: 18, Completed: 48 },
    { date: "20 Jan", Active: 25, Inprogress: 18, Completed: 48 },
    { date: "21 Jan", Active: 78, Inprogress: 18, Completed: 48 },
  ];

  const data2 = [
    { name: "Completed", value: 127, fill: "#3163E6" },
    { name: "Ongoing", value: 496, fill: "#BB34E0" },
    { name: "On hold", value: 165, fill: "#70777D" },
  ];

  return (
    <div>
      <Navbar>
        <div className="flex flex-col w-full gap-7 sm:p-[24px]">
          <div className="flex text-sm p-2 justify-around sm:justify-between mb-[-15px]">
            <h4 className="md:text-[1.125rem] font-semibold">
              Admin Dashboard
            </h4>
            <p className="md:text-[1rem]">
              Home &gt; <span className="font-medium">Admin Dashboard</span>
            </p>
          </div>
          <div className="flex flex-wrap justify-around">
            <div className=" p-5 pt-4 shadow shadow-gray-400 dark:shadow-[#011743] dark:bg-[#030318] rounded w-[86%] sm:w-[48%] xl:w-[23%]">
              <div className="mb-3">
                <div>
                  <p className="text-gray-400 ">Working Hours</p>
                  <h4 className="font-bold text-xl">950h 41m</h4>
                </div>
                <div></div>
              </div>
              <div className="flex">
                <span className="bg-[#01B664] text-white px-[7px] rounded mr-2 flex gap-1 items-center">
                  <MdOutlineArrowOutward className="text-md" /> 20%
                </span>
                <p className="text-gray-400">in Last 7 Days</p>
              </div>
            </div>
            <div className="p-5 pt-4 shadow shadow-gray-400 dark:shadow-[#011743] dark:bg-[#030318]  rounded w-[86%] mt-3 sm:w-[48%] sm:mt-0 xl:w-[23%]">
              <div className="mb-3">
                <div>
                  <p className="text-gray-400 ">Production</p>
                  <h4 className="font-bold text-xl">400h 15m</h4>
                </div>
                <div></div>
              </div>
              <div className="flex">
                <span className="bg-[#DC3545] text-white px-[7px] rounded mr-2 flex gap-1 items-center">
                  <GoArrowDownLeft className="text-md" /> 20%
                </span>
                <p className="text-gray-400">in Last 7 Days</p>
              </div>
            </div>
            <div className=" p-5 pt-4 shadow shadow-gray-400 dark:shadow-[#011743] dark:bg-[#030318] sm:mt-7 w-[86%] mt-3  xl:mt-0 rounded sm:w-[48%] xl:w-[23%]">
              <div className="mb-3">
                <div>
                  <p className="text-gray-400 ">Unproductive</p>
                  <h4 className="font-bold text-xl">210h 15m</h4>
                </div>
                <div></div>
              </div>
              <div className="flex">
                <span className="bg-[#01B664] text-white px-[7px] rounded mr-2 flex gap-1 items-center">
                  <MdOutlineArrowOutward className="text-md" /> 45%
                </span>
                <p className="text-gray-400">in Last 7 Days</p>
              </div>
            </div>
            <div className="p-5 pt-4 shadow shadow-gray-400 dark:shadow-[#011743] dark:bg-[#030318] sm:mt-7 w-[86%] mt-3 xl:mt-0 rounded sm:w-[48%] xl:w-[23%]">
              <div className="mb-3">
                <div>
                  <p className="text-gray-400 ">Manual Added</p>
                  <h4 className="font-bold text-xl">46h 45m</h4>
                </div>
                <div></div>
              </div>
              <div className="flex">
                <span className="bg-[#01B664] text-white px-[7px] rounded mr-2 flex gap-1 items-center">
                  <MdOutlineArrowOutward className="text-md" /> 22%
                </span>
                <p className="text-gray-400">in Last 7 Days</p>
              </div>
            </div>
          </div>
          <div className="flex justify-around flex-wrap">
            <div className="p-5 dark:shadow-[#011743] dark:bg-[#030318] pt-4 h-fit md:h-97 overflow-hidden shadow shadow-gray-400 rounded w-[97.5%] xl:w-[31.5%]">
              <h4 className="text-xl font-bold pb-4">Top Members</h4>
              <hr className="mx-[-20px] dark:text-[#011743] text-gray-300" />
              <div className="flex items-center gap-2 my-4">
                <img
                  src="/assets/images/avatar1.jpg"
                  className="rounded-full w-10"
                />
                <div className="w-full">
                  <div className="w-full flex justify-between items-center">
                    <p className="text-[14px] font-semibold hover:text-blue-600 cursor-pointer">
                      James Higham{" "}
                      <span className="text-[10px] p-1 font-medium bg-sky-100 dark:bg-sky-700/20 rounded ml-1 text-sky-600">
                        Mobile App
                      </span>
                    </p>
                    <p className="text-[14px] text-gray-500">Salary</p>
                  </div>
                  <div className="flex w-full justify-between items-center">
                    <p className="text-[14px] text-gray-500">
                      Android Developer
                    </p>
                    <span className="text-[17px] font-semibold">$7478</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 my-4">
                <img
                  src="/assets/images/avatar2.jpg"
                  className="rounded-full w-10"
                />
                <div className="w-full">
                  <div className="w-full flex justify-between items-center">
                    <p className="text-[14px] font-semibold hover:text-blue-600 cursor-pointer">
                      Leon Baxter{" "}
                      <span className="text-[10px] p-1 font-medium bg-indigo-100 dark:bg-indigo-800/30 rounded ml-1 text-sky-600">
                        Testing
                      </span>
                    </p>
                    <p className="text-[14px] text-gray-500">Salary</p>
                  </div>
                  <div className="flex w-full justify-between items-center">
                    <p className="text-[14px] text-gray-500">Test Lead</p>
                    <span className="text-[17px] font-semibold">$6595</span>
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
                      <span className="text-[10px] p-1 font-medium bg-orange-200 dark:bg-orange-400/20  rounded ml-1 text-orange-600">
                        Service
                      </span>
                    </p>
                    <p className="text-[14px] text-gray-500">Salary</p>
                  </div>
                  <div className="flex w-full justify-between items-center">
                    <p className="text-[14px] text-gray-500">
                      Backend Developer
                    </p>
                    <span className="text-[17px] font-semibold hover:text-blue-600 cursor-pointer">
                      $6987
                    </span>
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
                      <span className="text-[10px] p-1 font-medium bg-pink-200 dark:bg-pink-400/20 rounded ml-1 text-pink-600">
                        Design
                      </span>
                    </p>
                    <p className="text-[14px] text-gray-500">Salary</p>
                  </div>
                  <div className="flex w-full justify-between items-center">
                    <p className="text-[14px] text-gray-500">UI Designer</p>
                    <span className="text-[17px] font-semibold hover:text-blue-600 cursor-pointer">
                      $4589
                    </span>
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
                      <span className="text-[10px] p-1 font-medium bg-purple-200 dark:bg-purple-400/20 rounded ml-1 text-purple-600">
                        Cybersecurity
                      </span>
                    </p>
                    <p className="text-[14px] text-gray-500">Salary</p>
                  </div>
                  <div className="flex w-full justify-between items-center">
                    <p className="text-[14px] text-gray-500">
                      Security Engineer
                    </p>
                    <span className="text-[17px] font-semibold">$5145</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-5 dark:shadow-[#011743] dark:bg-[#030318] pt-4 h-fit md:h-97 overflow-hidden shadow shadow-gray-400 rounded mt-6 xl:mt-0 w-[97.5%] lg:w-[47.5%] xl:w-[31.5%] ">
              <h4 className="text-xl font-bold pb-4">Members Overview</h4>
              <hr className="mx-[-20px] dark:text-[#011743] text-gray-300 mb-3" />
              <div className="recharts-wrapper h-full w-full">
                <RadarChart
                  style={{
                    width: "100%",
                    height: "90%",
                    aspectRatio: 1,
                    border: "none",
                  }}
                  responsive
                  outerRadius="65%"
                  data={data}
                >
                  <PolarGrid />
                  <PolarAngleAxis tick={{ fontSize: 12 }} dataKey="year" />
                  <PolarRadiusAxis
                    tick={{ fontSize: 12 }}
                    angle={90}
                    domain={[0, 100]}
                  />
                  <Radar
                    name="Female"
                    dataKey="female"
                    stroke="#e91e63"
                    fill="#e91e63"
                    fillOpacity={0.4}
                  />
                  <Radar
                    name="Male"
                    dataKey="male"
                    stroke="#1e88e5"
                    fill="#1e88e5"
                    fillOpacity={0.4}
                  />
                  <Legend
                    layout="horizontal"
                    verticalAlign="top"
                    align="center"
                    iconType="circle"
                    wrapperStyle={{ fontSize: "12px" }}
                  />
                </RadarChart>
              </div>
            </div>
            <div className="p-5 dark:shadow-[#011743] dark:bg-[#030318] pt-4 h-fit md:h-97 overflow-hidden shadow shadow-gray-400 rounded mt-6 xl:mt-0 w-[97.5%] lg:w-[47.5%] xl:w-[31.5%]">
              <h4 className="text-xl font-bold pb-4">Request Approval</h4>
              <hr className="mx-[-20px] dark:text-[#011743] text-gray-300" />
              <div className="flex items-center gap-2 my-5">
                <img
                  src="/assets/images/avatar6.jpg"
                  className="rounded-full w-10"
                />
                <div className="w-full">
                  <div className="w-full flex justify-between">
                    <div>
                      <p className="text-[14px] font-semibold hover:text-blue-600 cursor-pointer">
                        Thomas Walsh
                      </p>
                      <p className="text-[14px] text-gray-500">
                        Time : 02:00 PM - 02:20 PM
                      </p>
                    </div>
                    <div className="flex items-center text-3xl gap-2">
                      <IoCheckmark className="rounded-full p-1.5 bg-green-200 dark:bg-[#072518] dark:bg-[#072518] text-green-600 hover:text-white hover:bg-green-500 cursor-pointer" />
                      <FiX className="rounded-full p-1.5 bg-red-200 dark:bg-[#2C0B0E] dark:bg-[#2C0B0E] text-red-600 hover:text-white hover:bg-red-600 cursor-pointer" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 my-5">
                <img
                  src="/assets/images/avatar7.jpg"
                  className="rounded-full w-10"
                />
                <div className="w-full">
                  <div className="w-full flex justify-between">
                    <div>
                      <p className="text-[14px] font-semibold hover:text-blue-600 cursor-pointer">
                        Jonathan King
                      </p>
                      <p className="text-[14px] text-gray-500">
                        Time : 12:00 PM - 12:10 PM
                      </p>
                    </div>
                    <div className="flex items-center text-3xl gap-2">
                      <IoCheckmark className="rounded-full p-1.5 bg-green-200 dark:bg-[#072518] text-green-600 hover:text-white hover:bg-green-500 cursor-pointer" />
                      <FiX className="rounded-full p-1.5 bg-red-200 dark:bg-[#2C0B0E] text-red-600 hover:text-white hover:bg-red-600 cursor-pointer" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 my-5">
                <img
                  src="/assets/images/avatar5.jpg"
                  className="rounded-full w-10"
                />
                <div className="w-full">
                  <div className="w-full flex justify-between">
                    <div>
                      <p className="text-[14px] font-semibold hover:text-blue-600 cursor-pointer">
                        Eliz Hilter
                      </p>
                      <p className="text-[14px] text-gray-500">
                        Time : 09:30 AM - 10:00 AM
                      </p>
                    </div>
                    <div className="flex items-center text-3xl gap-2">
                      <IoCheckmark className="rounded-full p-1.5 bg-green-200 dark:bg-[#072518] text-green-600 hover:text-white hover:bg-green-500 cursor-pointer" />
                      <FiX className="rounded-full p-1.5 bg-red-200 dark:bg-[#2C0B0E] text-red-600 hover:text-white hover:bg-red-600 cursor-pointer" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 my-5">
                <img
                  src="/assets/images/avatar9.jpg"
                  className="rounded-full w-10"
                />
                <div className="w-full">
                  <div className="w-full flex justify-between">
                    <div>
                      <p className="text-[14px] font-semibold hover:text-blue-600 cursor-pointer">
                        Peter Brooks
                      </p>
                      <p className="text-[14px] text-gray-500">
                        Time : 09:00 AM - 09:20 AM
                      </p>
                    </div>
                    <div className="flex items-center text-3xl gap-2">
                      <IoCheckmark className="rounded-full p-1.5 bg-green-200 dark:bg-[#072518] text-green-600 hover:text-white hover:bg-green-500 cursor-pointer" />
                      <FiX className="rounded-full p-1.5 bg-red-200 dark:bg-[#2C0B0E] text-red-600 hover:text-white hover:bg-red-600 cursor-pointer" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 my-5">
                <img
                  src="/assets/images/avatar10.jpg"
                  className="rounded-full w-10"
                />
                <div className="w-full">
                  <div className="w-full flex justify-between">
                    <div>
                      <p className="text-[14px] font-semibold hover:text-blue-600 cursor-pointer">
                        Cindy Mateo
                      </p>
                      <p className="text-[14px] text-gray-500">
                        Time : 08:00 AM - 08:20 AM
                      </p>
                    </div>
                    <div className="flex items-center text-3xl gap-2">
                      <IoCheckmark className="rounded-full p-1.5 bg-green-200 dark:bg-[#072518] text-green-600 hover:text-white hover:bg-green-500 cursor-pointer" />
                      <FiX className="rounded-full p-1.5 bg-red-200 dark:bg-[#2C0B0E] text-red-600 hover:text-white hover:bg-red-600 cursor-pointer" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-around flex-wrap">
            <div className="p-5 dark:shadow-[#011743] dark:bg-[#030318] pt-4 h-fit md:h-100 shadow overflow-hidden shadow-gray-400 rounded w-[97.5%] xl:w-[56%]">
              <h4 className="text-xl font-bold pb-4">Project Statistics</h4>
              <hr className="mx-[-20px] dark:text-[#011743] text-gray-300 mb-5" />
              <div className="w-full flex ml-[-15px] sm:ml-[-10px]">
                <BarChart width={"100%"} height={320} data={data1}>
                  <CartesianGrid vertical={false} stroke="#eee" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />

                  <Legend iconType="circle" verticalAlign="top" />

                  <Bar dataKey="Active" fill="#3163E6" radius={[4, 4, 0, 0]} />
                  <Bar
                    dataKey="Inprogress"
                    fill="#70777D"
                    radius={[4, 4, 0, 0]}
                  />
                  <Bar
                    dataKey="Completed"
                    fill="#16A34A"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </div>
            </div>
            <div className="p-5 dark:shadow-[#011743] dark:bg-[#030318] pt-4 h-fit md:h-100 shadow overflow-hidden shadow-gray-400 rounded w-[97.5%] mt-6 xl:mt-0 xl:w-[41%]">
              <h4 className="text-xl font-bold pb-4">Recent Projects</h4>
              <hr className="mx-[-20px] dark:text-[#011743] text-gray-300" />
              <div className="flex items-center gap-2 my-5">
                <p className="p-2.5 px-3 rounded text-blue-600 bg-blue-200 dark:bg-blue-800/30 font-semibold">
                  FS
                </p>
                <div className="w-full">
                  <div className="w-full flex justify-between">
                    <div>
                      <p className="text-[14px] font-semibold hover:text-blue-600 cursor-pointer">
                        FlowSpark - Workflow tools
                      </p>
                      <p className="text-[14px] text-gray-500 flex items-center gap-1">
                        <TbSubtask />
                        <span>08 Tasks |</span> <TbMoneybag />
                        <span>$3500</span>
                      </p>
                    </div>
                    <div className="flex items-center text-3xl">
                      <img
                        src="/assets/images/avatar5.jpg"
                        className="w-7.5 rounded-full mr-[-9px] z-1 cursor-pointer hover:z-5 p-0.5 bg-white dark:bg-[#011743] dark:bg-[#011743] hover:mb-1.5"
                        alt=""
                      />
                      <img
                        src="/assets/images/avatar3.jpg"
                        className="w-7.5 rounded-full mr-[-9px] z-2 cursor-pointer hover:z-5 p-0.5 bg-white dark:bg-[#011743] hover:mb-1.5"
                        alt=""
                      />
                      <img
                        src="/assets/images/avatar9.jpg"
                        className="w-7.5 rounded-full mr-[-9px] z-3 cursor-pointer hover:z-5 p-0.5 bg-white dark:bg-[#011743] hover:mb-1.5"
                        alt=""
                      />
                      <img
                        src="/assets/images/avatar1.jpg"
                        className="w-7.5 rounded-full z-4 cursor-pointer hover:z-5 p-0.5 bg-white dark:bg-[#011743] hover:mb-1.5"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 my-5">
                <p className="p-2.5 px-3 rounded text-orange-600 bg-orange-200 dark:bg-orange-600/30 font-semibold">
                  CL
                </p>
                <div className="w-full">
                  <div className="w-full flex justify-between">
                    <div>
                      <p className="text-[14px] font-semibold hover:text-blue-600 cursor-pointer">
                        Corelytics - Data tools
                      </p>
                      <p className="text-[14px] text-gray-500 flex items-center gap-1">
                        <TbSubtask />
                        <span>56 Tasks |</span> <TbMoneybag />
                        <span>$7896</span>
                      </p>
                    </div>
                    <div className="flex items-center text-3xl w-21 justify-center">
                      <img
                        src="/assets/images/avatar7.jpg"
                        className="w-7.5 rounded-full mr-[-9px] z-1 cursor-pointer hover:z-5 p-0.5 bg-white dark:bg-[#011743] hover:mb-1.5"
                        alt=""
                      />
                      <img
                        src="/assets/images/avatar4.jpg"
                        className="w-7.5 rounded-full mr-[-9px] z-2 cursor-pointer hover:z-5 p-0.5 bg-white dark:bg-[#011743] hover:mb-1.5"
                        alt=""
                      />
                      <img
                        src="/assets/images/avatar9.jpg"
                        className="w-7.5 rounded-full mr-[-9px] z-3 cursor-pointer hover:z-5 p-0.5 bg-white dark:bg-[#011743] hover:mb-1.5"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 my-5">
                <p className="p-2.5 px-3 rounded text-pink-600 bg-pink-200 dark:bg-pink-600/30 font-semibold">
                  TZ
                </p>
                <div className="w-full">
                  <div className="w-full flex justify-between">
                    <div>
                      <p className="text-[14px] font-semibold hover:text-blue-600 cursor-pointer">
                        TaskZen - Productivity
                      </p>
                      <p className="text-[14px] text-gray-500 flex items-center gap-1">
                        <TbSubtask />
                        <span>32 Tasks |</span> <TbMoneybag />
                        <span>$8966</span>
                      </p>
                    </div>
                    <div className="flex items-center text-3xl">
                      <img
                        src="/assets/images/avatar6.jpg"
                        className="w-7.5 rounded-full mr-[-9px] z-1 cursor-pointer hover:z-5 p-0.5 bg-white dark:bg-[#011743] hover:mb-1.5"
                        alt=""
                      />
                      <img
                        src="/assets/images/avatar7.jpg"
                        className="w-7.5 rounded-full mr-[-9px] z-2 cursor-pointer hover:z-5 p-0.5 bg-white dark:bg-[#011743] hover:mb-1.5"
                        alt=""
                      />
                      <img
                        src="/assets/images/avatar3.jpg"
                        className="w-7.5 rounded-full mr-[-9px] z-3 cursor-pointer hover:z-5 p-0.5 bg-white dark:bg-[#011743] hover:mb-1.5"
                        alt=""
                      />
                      <img
                        src="/assets/images/avatar10.jpg"
                        className="w-7.5 rounded-full mr-[-9px] z-4 cursor-pointer hover:z-5 p-0.5 bg-white dark:bg-[#011743] hover:mb-1.5"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 my-5">
                <p className="p-2.5 px-3 rounded text-lime-600 bg-lime-100 dark:bg-lime-600/30 font-semibold">
                  CP
                </p>
                <div className="w-full">
                  <div className="w-full flex justify-between">
                    <div>
                      <p className="text-[14px] font-semibold hover:text-blue-600 cursor-pointer">
                        CodePulse - Cloud tools
                      </p>
                      <p className="text-[14px] text-gray-500 flex items-center gap-1">
                        <TbSubtask />
                        <span>40 Tasks |</span> <TbMoneybag />
                        <span>$4124</span>
                      </p>
                    </div>
                    <div className="flex items-center text-3xl">
                      <img
                        src="/assets/images/avatar3.jpg"
                        className="w-7.5 rounded-full mr-[-9px] z-1 cursor-pointer hover:z-5 p-0.5 bg-white dark:bg-[#011743] hover:mb-1.5"
                        alt=""
                      />
                      <img
                        src="/assets/images/avatar7.jpg"
                        className="w-7.5 rounded-full mr-[-9px] z-2 cursor-pointer hover:z-5 p-0.5 bg-white dark:bg-[#011743] hover:mb-1.5"
                        alt=""
                      />
                      <img
                        src="/assets/images/avatar2.jpg"
                        className="w-7.5 rounded-full mr-[-9px] z-3 cursor-pointer hover:z-5 p-0.5 bg-white dark:bg-[#011743] hover:mb-1.5"
                        alt=""
                      />
                      <img
                        src="/assets/images/avatar1.jpg"
                        className="w-7.5 rounded-full z-4 cursor-pointer hover:z-5 p-0.5 bg-white dark:bg-[#011743] hover:mb-1.5"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 my-5">
                <p className="p-2.5 px-3 rounded text-purple-600 bg-purple-200 dark:bg-purple-700/30 font-semibold">
                  PD
                </p>
                <div className="w-full">
                  <div className="w-full flex justify-between">
                    <div>
                      <p className="text-[14px] font-semibold hover:text-blue-600 cursor-pointer">
                        PulseDesk - Helpdesk
                      </p>
                      <p className="text-[14px] text-gray-500 flex items-center gap-1">
                        <TbSubtask />
                        <span>48 Tasks |</span> <TbMoneybag />
                        <span>$4578</span>
                      </p>
                    </div>
                    <div className="flex items-center text-3xl w-14">
                      <img
                        src="/assets/images/avatar5.jpg"
                        className="w-7.5 rounded-full mr-[-9px] z-1 cursor-pointer hover:z-5 p-0.5 bg-white dark:bg-[#011743] hover:mb-1.5"
                        alt=""
                      />
                      <img
                        src="/assets/images/avatar9.jpg"
                        className="w-7.5 rounded-full mr-[-9px] z-2 cursor-pointer hover:z-5 p-0.5 bg-white dark:bg-[#011743] hover:mb-1.5"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-around flex-wrap">
            <div className="p-5 dark:shadow-[#011743] dark:bg-[#030318] pt-4 h-fit md:h-97 shadow overflow-hidden shadow-gray-400 rounded w-[97.5%] lg:w-[48%] 2xl:w-[31.5%]">
              <h4 className="text-xl font-bold pb-4">Top Teams</h4>
              <hr className="mx-[-20px] dark:text-[#011743] text-gray-300" />
              <div className="flex items-center gap-2.5 my-4">
                <p className="rounded-full p-2 px-3 bg-purple-200 dark:bg-purple-700/30 text-purple-600 ">
                  TS
                </p>
                <div className="w-full">
                  <div className="w-full flex justify-between items-center">
                    <p className="text-[14px] font-semibold hover:text-blue-600 cursor-pointer">
                      Testing{" "}
                    </p>
                    <p className="text-[17px] font-semibold mr-10">94%</p>
                  </div>
                  <div className="flex w-full justify-between items-center">
                    <p className="text-[14px] text-gray-500">
                      Hours Logged : 287h
                    </p>
                    <span className="text-[14px] text-gray-500">
                      Productivity
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2.5 my-4">
                <p className="rounded-full p-2 px-2.5 bg-lime-200 dark:bg-lime-500/30 text-lime-600 ">
                  UR
                </p>
                <div className="w-full">
                  <div className="w-full flex justify-between items-center">
                    <p className="text-[14px] font-semibold hover:text-blue-600 cursor-pointer">
                      UX Research{" "}
                    </p>
                    <p className="text-[17px] font-semibold mr-10">97%</p>
                  </div>
                  <div className="flex w-full justify-between items-center">
                    <p className="text-[14px] text-gray-500">
                      Hours Logged : 312h
                    </p>
                    <span className="text-[14px] text-gray-500">
                      Productivity
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2.5 my-4">
                <p className="rounded-full p-2 px-2.1 bg-orange-200 dark:bg-orange-700/30 text-orange-600 ">
                  DO
                </p>
                <div className="w-full">
                  <div className="w-full flex justify-between items-center">
                    <p className="text-[14px] font-semibold hover:text-blue-600 cursor-pointer">
                      DevOps{" "}
                    </p>
                    <p className="text-[17px] font-semibold mr-10">91%</p>
                  </div>
                  <div className="flex w-full justify-between items-center">
                    <p className="text-[14px] text-gray-500">
                      Hours Logged : 259h
                    </p>
                    <span className="text-[14px] text-gray-500">
                      Productivity
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2.5 my-4">
                <p className="rounded-full p-2 px-2 bg-pink-200 dark:bg-pink-700/30 text-pink-600 ">
                  DN
                </p>
                <div className="w-full">
                  <div className="w-full flex justify-between items-center">
                    <p className="text-[14px] font-semibold hover:text-blue-600 cursor-pointer">
                      Design{" "}
                    </p>
                    <p className="text-[17px] font-semibold mr-10">92%</p>
                  </div>
                  <div className="flex w-full justify-between items-center">
                    <p className="text-[14px] text-gray-500">
                      Hours Logged : 274h
                    </p>
                    <span className="text-[14px] text-gray-500">
                      Productivity
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2.5 my-4">
                <p className="rounded-full p-2 px-3.5 bg-yellow-200 dark:bg-yellow-700/30 text-yellow-600 ">
                  IT
                </p>
                <div className="w-full">
                  <div className="w-full flex justify-between items-center">
                    <p className="text-[14px] font-semibold hover:text-blue-600 cursor-pointer">
                      IT Support{" "}
                    </p>
                    <p className="text-[17px] font-semibold mr-10">88%</p>
                  </div>
                  <div className="flex w-full justify-between items-center">
                    <p className="text-[14px] text-gray-500">
                      Hours Logged : 243h
                    </p>
                    <span className="text-[14px] text-gray-500">
                      Productivity
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-5 dark:shadow-[#011743] dark:bg-[#030318] pt-4 h-fit md:h-97 shadow overflow-hidden shadow-gray-400 rounded w-[97.5%] mt-7 lg:mt-0 lg:w-[48%] 2xl:w-[31.5%]">
              <h4 className="text-xl font-bold pb-4">Task Details</h4>
              <hr className="mx-[-20px] dark:text-[#011743] text-gray-300" />
              <div className="relative w-full">
                <PieChart width={"100%"} height={240}>
                  <Pie
                    data={data2}
                    cx="50%"
                    cy="50%"
                    innerRadius={90}
                    outerRadius={105}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    <Cell />
                    <Cell />
                    <Cell />
                  </Pie>
                  <Tooltip
                    wrapperStyle={{ outline: "none" }}
                    contentStyle={{
                      backgroundColor: "#1E293B",
                      border: "none",
                      borderRadius: "8px",
                      color: "white",
                      fontSize: "12px",
                      padding: "6px 10px",
                    }}
                    labelStyle={{
                      color: "white",
                      fontSize: "12px",
                      marginBottom: "4px",
                    }}
                    itemStyle={{
                      color: "white",
                      fontSize: "12px",
                    }}
                  />
                </PieChart>
              </div>
              <div className="flex w-full border-t-1 border-gray-300 dark:border-[#011743] justify-between items-center mt-[-2px]">
                <div className="flex flex-col w-[33%] h-[90px] border-r dark:border-[#011743] border-gray-300 items-center justify-center">
                  <span className="text-sm text-gray-400 ">Total Task</span>
                  <span className="text-xl font-bold">788</span>
                </div>
                <div className="flex flex-col w-[33%] h-[90px] border-r dark:border-[#011743] border-gray-300 items-center justify-center">
                  <span className="text-sm text-gray-400">Ongoing</span>
                  <span className="text-xl font-bold">496</span>
                </div>
                <div className="flex flex-col w-[33%] h-[90px] border-r dark:border-[#011743] border-gray-300 items-center justify-center">
                  <span className="text-sm text-gray-400">On hold</span>
                  <span className="text-xl font-bold">165</span>
                </div>
                <div className="flex flex-col w-[33%] h-[90px] items-center justify-center">
                  <span className="text-sm text-gray-400">Completed</span>
                  <span className="text-xl font-bold">127</span>
                </div>
              </div>
            </div>
            <div className="p-5 dark:shadow-[#011743] dark:bg-[#030318] pt-4 h-fit md:h-97 shadow overflow-hidden shadow-gray-400 rounded mt-7 2xl:mt-0 w-[97.5%] 2xl:w-[31.5%]">
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
                    <div className="w-30 sm:w-45 h-1.5 rounded bg-gray-200">
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
          <div className="p-5 dark:shadow-[#011743] overflow-hidden h-fit w-[97%] lg:w-full dark:bg-[#030318] pt-4 shadow shadow-gray-400 rounded">
            <div className="flex justify-between items-center">
              <h4 className="text-xl font-bold pb-4">Top Web App & Usage</h4>
              <span className="p-1 px-3 mb-4 rounded bg-blue-600 text-white cursor-pointer hover:bg-blue-800">
                + Add New
              </span>
            </div>
            <hr className="mx-[-20px] dark:text-[#011743] text-gray-300" />
            <div className="overflow-x-auto w-[90vw] sm:w-[70vw] xl:w-full">
              <table className="min-w-300 xl:w-full border-collapse whitespace-nowrap border border-[#D1D5DC] dark:border-[#011743] my-5 ">
                <tr className="bg-gray-300 dark:bg-[#030318] border-b border-[#D1D5DC] dark:border-[#011743]">
                  <th className="text-start px-4 py-3 w-55">Name</th>
                  <th className="text-start w-50">Designation</th>
                  <th className="text-start w-60">Email Address</th>
                  <th className="text-start w-40">Phone Number</th>
                  <th className="text-start w-40">Experience</th>
                  <th className="text-start w-35">Work Location</th>
                  <th className="text-start w-25">Status</th>
                </tr>
                <tr className="border-b border-[#D1D5DC] dark:border-[#011743]">
                  <td className="flex items-center gap-3 p-3 relative">
                    <img
                      src="/assets/images/avatar1.jpg"
                      className="rounded-full w-10"
                    />
                    <span className="border border-white p-[5px] rounded-full bg-[#01b664] absolute left-11 bottom-4"></span>
                    <p className="text-[14px] font-semibold hover:text-blue-600 cursor-pointer">
                      Charles Cline{" "}
                    </p>
                  </td>
                  <td>Usability Specialist</td>
                  <td>charles@example.com</td>
                  <td>+1 5782094965</td>
                  <td>2 years</td>
                  <td>Remote</td>
                  <td>
                    <span className="p-0.5 px-2.5 align-middle pb-1 bg-green-200 dark:bg-[#072518] text-green-600 rounded">
                      Active
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-[#D1D5DC] dark:border-[#011743]">
                  <td className="flex items-center gap-3 p-3 relative">
                    <img
                      src="/assets/images/avatar11.jpg"
                      className="rounded-full w-10"
                    />
                    <span className="border border-white p-[5px] rounded-full bg-[#01b664] absolute left-11 bottom-4"></span>
                    <p className="text-[14px] font-semibold hover:text-blue-600 cursor-pointer">
                      Laren Galvan{" "}
                    </p>
                  </td>
                  <td>Networking</td>
                  <td>karen@example.com</td>
                  <td>+1 7395639826</td>
                  <td>6 years</td>
                  <td>Office</td>
                  <td>
                    <span className="p-0.5 px-2.5 align-middle pb-1 bg-green-200 dark:bg-[#072518] text-green-600 rounded">
                      Active
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-[#D1D5DC] dark:border-[#011743]">
                  <td className="flex items-center gap-3 p-3 relative">
                    <img
                      src="/assets/images/avatar14.jpg"
                      className="rounded-full w-10"
                    />
                    <span className="border border-white p-[5px] rounded-full bg-[#01b664] absolute left-11 bottom-4"></span>
                    <p className="text-[14px] font-semibold hover:text-blue-600 cursor-pointer">
                      Shaun Farley{" "}
                    </p>
                  </td>
                  <td>IT Support</td>
                  <td>shaunfarley@example.com</td>
                  <td>+1 6598354257</td>
                  <td>4 years</td>
                  <td>Office</td>
                  <td>
                    <span className="p-0.5 px-2.5 align-middle pb-1 bg-green-200 dark:bg-[#072518] text-green-600 rounded">
                      Active
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-[#D1D5DC] dark:border-[#011743]">
                  <td className="flex items-center gap-3 p-3 relative">
                    <img
                      src="/assets/images/avatar13.jpg"
                      className="rounded-full w-10"
                    />
                    <span className="border border-white p-[5px] rounded-full bg-red-500 absolute left-11 bottom-4"></span>
                    <p className="text-[14px] font-semibold hover:text-blue-600 cursor-pointer">
                      Allza Duncan{" "}
                    </p>
                  </td>
                  <td>Data & Analytics</td>
                  <td>aliza@example.com</td>
                  <td>+1 2378945376</td>
                  <td>9 years</td>
                  <td>Remote</td>
                  <td>
                    <span className="p-0.5 px-2.5 align-middle pb-1 bg-red-200 dark:bg-[#2C0B0E] text-red-600 rounded">
                      InActive
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="flex items-center gap-3 p-3 relative">
                    <img
                      src="/assets/images/avatar12.jpg"
                      className="rounded-full w-10"
                    />
                    <span className="border border-white p-[5px] rounded-full bg-red-500 absolute left-11 bottom-4"></span>
                    <p className="text-[14px] font-semibold hover:text-blue-600 cursor-pointer">
                      Jenny Ellis{" "}
                    </p>
                  </td>
                  <td>DevOps</td>
                  <td>jenny@example.com</td>
                  <td>+1 7648982635</td>
                  <td>6 years</td>
                  <td>Office</td>
                  <td>
                    <span className="p-0.5 px-2.5 align-middle pb-1 bg-red-200 dark:bg-[#2C0B0E] text-red-600 rounded">
                      InActive
                    </span>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </Navbar>
    </div>
  );
}

export default AdminDashboard;
