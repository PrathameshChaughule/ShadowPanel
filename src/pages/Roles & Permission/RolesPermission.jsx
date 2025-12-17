import Navbar from "../../components/Navbar";
import { CiSearch } from "react-icons/ci";
import { TbSortDescending2 } from "react-icons/tb";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { rolesData } from "../../data/rolesPermissionData";

function RolesPermission() {
  return (
    <div>
      <Navbar>
        <div className="flex flex-col gap-5 m-4 sm:m-6 min-h-fit bg-white dark:bg-[#030318] rounded sm:p-[24px]">
          <div className="flex text-sm p-2 justify-around sm:justify-between">
            <h4 className="md:text-[1.125rem] text-center font-bold">
              Roles & Permissions
            </h4>
            <p className="text-center">
              Home &gt;
              <span className="md:text-[1rem] font-medium">
                {" "}
                Roles & Permissions
              </span>
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row justify-between items-center">
            <div className="flex items-center gap-2 border border-gray-400 dark:border-[#011743] p-3 py-1 rounded ">
              <CiSearch />
              <input
                type="text"
                placeholder="Search Keyword"
                className="outline-none border-none"
              />
            </div>
            <div className="flex gap-3">
              <div className="flex items-center p-1 px-2 border dark:border-[#011743] border-gray-400 rounded gap-1 hover:bg-gray-100 hover:dark:bg-[#011743] cursor-pointer">
                <TbSortDescending2 className="text-[25px]" />
                <select className="outline-none border-none text-sm sm:text-[17px] appearance-none cursor-pointer">
                  <option value="" className="p-2">
                    Sort By : Newest
                  </option>
                  <option value="">Sort By : Oldest</option>
                </select>
              </div>
              <div className="flex items-center gap-2 text-sm sm:text-[17px] border px-3 dark:border-[#011743] rounded text-white bg-blue-600 cursor-pointer hover:bg-blue-700">
                <FaPlus />
                <span className="font-semibold">Add New</span>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto w-[90vw] md:w-[70vw] xl:w-full">
            <table className="min-w-200 xl:w-full border-collapse whitespace-nowrap border border-[#D1D5DC] dark:border-[#011743] whitespace-nowrap">
              <tr className="bg-gray-300 dark:bg-[#030318] border-b border-[#D1D5DC] dark:border-[#011743]">
                <th className="text-start px-4 py-3 w-73">Role Name</th>
                <th className="text-start w-85">Created On</th>
                <th className="text-start w-65">No of Users</th>
                <th className="text-start w-55">Status</th>
                <th className="w-30"></th>
              </tr>
              {rolesData.map((items) => (
                <tr
                  key={items.id}
                  className="border-b border-[#D1D5DC] dark:border-[#011743]"
                >
                  <td className="px-4 py-3 hover:text-blue-600 cursor-pointer">
                    {items.roleName}
                  </td>
                  <td>{items.createdOn}</td>
                  <td>{items.noOfUsers}</td>
                  <td>
                    <span
                      className="p-0.5 px-2.5 align-middle pb-1 dark:bg-[#072518] rounded"
                      style={{
                        backgroundColor: `${items.statusBg}`,
                        color: `${items.statusColor}`,
                      }}
                    >
                      {items.status}
                    </span>
                  </td>
                  <td className="px-3">
                    <BsThreeDotsVertical className="cursor-pointer hover:text-gray-500" />
                  </td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      </Navbar>
    </div>
  );
}

export default RolesPermission;
