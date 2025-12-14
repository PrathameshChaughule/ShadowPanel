import Navbar from "../../components/Navbar";
import { CiSearch } from "react-icons/ci";
import { LuLayoutGrid } from "react-icons/lu";
import { TbListTree, TbSortDescending2 } from "react-icons/tb";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";
import TeamsTableList from "./TeamsTableList";
import TeamsTableGrid from "./TeamsTableGrid";

function Teams() {
  const [show, setShow] = useState("one");
  return (
    <div>
      <Navbar>
        <div className="flex flex-col gap-5 m-6 bg-white dark:bg-[#030318]  rounded p-3 sm:p-[24px]">
          <div className="flex text-sm justify-around sm:justify-between">
            <h4 className="md:text-[1.125rem] font-bold">Teams</h4>
            <p>
              Home &gt;
              <span className="md:text-[1rem] font-medium"> Teams</span>
            </p>
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
            {show === "one" && <TeamsTableList />}
            {show === "two" && <TeamsTableGrid />}
          </div>
        </div>
      </Navbar>
    </div>
  );
}

export default Teams;
