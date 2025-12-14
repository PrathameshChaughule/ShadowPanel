import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaAngleRight } from "react-icons/fa";
import { LuPhone } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { TbBuildings } from "react-icons/tb";
import { clients } from "../../data/clientsData";

function ClientsTableGrid() {
  return (
    <div>
      <div className="flex flex-col justify-center gap-3 items-center">
        <div className="flex gap-7 flex-wrap justify-around items-center">
          {clients.map((items) => (
            <div
              key={items.id}
              className="border rounded p-5 w-70 border-[#E8EAEB] dark:border-[#011743]"
            >
              <div className="flex items-center justify-between p-2 rounded">
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <img
                      src={items.avatar}
                      className="w-10 rounded-full"
                      alt=""
                    />
                    <span
                      className="border border-white p-[5px] rounded-full absolute bottom-0 right-0"
                      style={{ backgroundColor: `${items.statusTextColor}` }}
                    ></span>
                  </div>

                  <div className="flex flex-col">
                    <span className="font-semibold">{items.name}</span>
                    <span className="text-gray-500 text-sm dark:text-gray-400">
                      {items.country}
                    </span>
                  </div>
                </div>

                <BsThreeDotsVertical className="cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800 p-1 rounded text-2xl" />
              </div>
              <div className="flex flex-col gap-2 my-3 p-2 rounded bg-[#F5F6FA] dark:bg-[#0C0C20]">
                <div className="flex items-center gap-1.5">
                  <TbBuildings />
                  <span className="text-gray-500 text-sm dark:text-[#DEE2E6]">
                    {items.company}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MdOutlineEmail />
                  <span className="text-gray-500 text-sm dark:text-[#DEE2E6]">
                    {items.email}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <LuPhone />
                  <span className="text-gray-500 text-sm dark:text-[#DEE2E6]">
                    {items.phone}
                  </span>
                </div>
              </div>
              <div className="w-full flex flex-col gap-1">
                <div className="flex justify-between w-full">
                  <span className="font-semibold">Projects</span>
                  <span className="text-gray-500 dark:text-[#DEE2E6]">
                    {items.projects}/{items.projectsTotal}
                  </span>
                </div>
                <div className="h-1 bg-[#F5F6FA] dark:bg-[#2B3035] rounded">
                  <div
                    className="h-full rounded"
                    style={{
                      backgroundColor: `${items.statusbar}`,
                      width: `${items.statusPer}`,
                    }}
                  ></div>
                </div>
              </div>
              <div className="flex mt-4 items-center gap-2 border dark:border-[#011743] dark:hover:dark:bg-[#011743] justify-center p-1.5 rounded border-[#E8EAEB] hover:bg-gray-100 cursor-pointer">
                <span className="font-semibold">View Details </span>
                <FaAngleRight />
              </div>
            </div>
          ))}
        </div>
        <div className="p-1.5 px-2 mb-3 w-fit font-semibold rounded bg-black text-white hover:bg-gray-600 cursor-pointer">
          <span>Load More</span>
        </div>
      </div>
    </div>
  );
}

export default ClientsTableGrid;
