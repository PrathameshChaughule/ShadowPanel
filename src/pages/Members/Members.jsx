import Navbar from "../../components/Navbar";
import { CiSearch } from "react-icons/ci";
import { IoMdTrendingDown, IoMdTrendingUp } from "react-icons/io";
import { LuLayoutGrid } from "react-icons/lu";
import { TbListTree, TbSortDescending2 } from "react-icons/tb";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";
import MemberTableList from "./MemberTableList";
import MemberTableGrid from "./MemberTableGrid";

function Members() {
  const [show, setShow] = useState("one");
  return (
    <div>
      <Navbar>
        <div className="flex flex-col gap-5 m-6 bg-white dark:bg-[#030318] rounded p-3 sm:p-[24px]">
          <div className="flex text-sm p-2 justify-around sm:justify-between">
            <h4 className="md:text-[1.125rem] font-bold">Members</h4>
            <p>
              Home &gt;
              <span className="md:text-[1rem] font-medium"> Members</span>
            </p>
          </div>
          <div className="flex justify-around flex-wrap gap-7">
            <div className=" p-5 pt-4 shadow shadow-gray-400 dark:shadow-[#011743] dark:bg-[#030318] rounded w-[23%]">
              <div className="flex items-center justify-between relative">
                <div className="text-3xl p-1.5 rounded text-white z-10">
                  <img src="/assets/images/member-01.svg" alt="" />
                </div>
                <div>
                  <p className="text-gray-400 ">Total Employees</p>
                  <div className="flex gap-2">
                    <h4 className="font-bold text-xl">2520 </h4>
                  </div>
                </div>
                <div className="flex items-center mt-6.5 text-center text-sm gap-1 text-green-500 font-semibold">
                  <IoMdTrendingUp /> <span>22.5%</span>
                </div>
              </div>
              <div className="flex text-[16px] font-medium"></div>
            </div>
            <div className=" p-5 pt-4 shadow shadow-gray-400 dark:shadow-[#011743] dark:bg-[#030318] rounded w-[23%]">
              <div className="flex items-center justify-between relative">
                <div className="text-3xl p-1.5 rounded text-white z-10">
                  <img src="/assets/images/member-02.svg" alt="" />
                </div>
                <div>
                  <p className="text-gray-400 ">Active Employees</p>
                  <div className="flex gap-2">
                    <h4 className="font-bold text-xl">2000 </h4>
                  </div>
                </div>
                <div className="flex items-center mt-6.5 text-center text-sm gap-1 text-green-500 font-semibold">
                  <IoMdTrendingUp /> <span>15.2%</span>
                </div>
              </div>
              <div className="flex text-[16px] font-medium"></div>
            </div>
            <div className=" p-5 pt-4 shadow shadow-gray-400 dark:shadow-[#011743] dark:bg-[#030318] rounded w-[23%]">
              <div className="flex items-center justify-between relative">
                <div className="text-3xl p-1.5 rounded text-white z-10">
                  <img src="/assets/images/member-03.svg" alt="" />
                </div>
                <div>
                  <p className="text-gray-400 ">Inactive Employees</p>
                  <div className="flex gap-2">
                    <h4 className="font-bold text-xl">350 </h4>
                  </div>
                </div>
                <div className="flex items-center mt-6.5 text-center text-sm gap-1 text-green-500 font-semibold">
                  <IoMdTrendingUp /> <span>16.3%</span>
                </div>
              </div>
              <div className="flex text-[16px] font-medium"></div>
            </div>
            <div className=" p-5 pt-4 shadow shadow-gray-400 dark:shadow-[#011743] dark:bg-[#030318] rounded w-[23%]">
              <div className="flex items-center justify-between relative">
                <div className="text-3xl p-1.5 rounded text-white z-10">
                  <img src="/assets/images/member-04.svg" alt="" />
                </div>
                <div>
                  <p className="text-gray-400 ">Achieved Employees</p>
                  <div className="flex gap-2">
                    <h4 className="font-bold text-xl">170 </h4>
                  </div>
                </div>
                <div className="flex items-center mt-6.5 text-center text-sm gap-1 text-red-500 font-semibold">
                  <IoMdTrendingDown /> <span>10.5%</span>
                </div>
              </div>
              <div className="flex text-[16px] font-medium"></div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 border border-gray-400 dark:border-[#011743] p-3 py-1 rounded ">
              <CiSearch />
              <input
                type="text"
                placeholder="Search Keyword"
                className="outline-none border-none"
              />
            </div>
            <div className="flex gap-3">
              <div className="flex text-[25px] p-1 px-2 border dark:border-[#011743] border-gray-400 rounded gap-2">
                <TbListTree
                  onClick={() => setShow("one")}
                  className={`p-1 rounded cursor-pointer
                            ${
                              show === "one"
                                ? "bg-black text-white dark:bg-gray-800"
                                : "bg-white text-black dark:bg-transparent dark:text-white hover:text-blue-600"
                            }`}
                />

                <LuLayoutGrid
                  onClick={() => setShow("two")}
                  className={`p-1 rounded cursor-pointer
                            ${
                              show === "two"
                                ? "bg-black text-white dark:bg-gray-800"
                                : "bg-white text-black dark:bg-transparent dark:text-white hover:text-blue-600"
                            }`}
                />
              </div>
              <div className="flex items-center p-1 px-2 border dark:border-[#011743] border-gray-400 rounded gap-1 hover:bg-gray-100 cursor-pointer">
                <TbSortDescending2 className="text-[25px]" />
                <select className="outline-none border-none text-[17px] appearance-none cursor-pointer">
                  <option value="" className="p-2">
                    Sort By : Newest
                  </option>
                  <option value="">Sort By : Oldest</option>
                </select>
              </div>
              <div className="flex items-center gap-2 border px-3 dark:border-[#011743] rounded text-white bg-blue-600 cursor-pointer hover:bg-blue-700">
                <FaPlus />
                <span className="font-semibold">Add New</span>
              </div>
            </div>
          </div>
          <div>
            {show === "one" && <MemberTableList />}
            {show === "two" && <MemberTableGrid />}
          </div>
        </div>
      </Navbar>
    </div>
  );
}

export default Members;
