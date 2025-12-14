import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { teams } from "../../data/teamsData";

function TeamsTableGrid() {
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="flex justify-between gap-4 items-center flex-wrap">
        {teams.map((items) => (
          <div
            key={items.id}
            className="flex flex-col justify-center gap-3 items-center w-95 shadow-sm shadow-gray-400 dark:shadow-[#011743] dark:bg-[#030318] p-5 px-6 rounded"
          >
            <div className="w-full flex flex-col gap-1.5">
              <di className="flex items-center justify-between">
                <span className="font-semibold">{items.teamName}</span>
                <div className="px-3 ">
                  <BsThreeDotsVertical className="cursor-pointer hover:text-gray-500" />
                </div>
              </di>

              <div className="flex items-center gap-2">
                <span className="text-gray-500">Members :</span>
                <div>
                  <div className="flex items-center h-9 w-fit text-3xl">
                    {items.members.map((val, index) => (
                      <img
                        key={index}
                        src={val}
                        className="w-7.5 rounded-full mr-[-9px] z-2 cursor-pointer hover:z-5 p-0.5 bg-white dark:bg-[#011743] hover:mb-1.5"
                        alt=""
                      />
                    ))}

                    <p className="w-7.5 rounded-full z-4 cursor-pointer hover:z-5 p-[5.5px] text-white dark:bg-[#3550DC] bg-blue-600 hover:mb-1.5 text-[15px]">
                      +1
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full text-center p-1 rounded bg-[#F5F6FA] dark:bg-[#0C0C20]">
              <span className="font-semibold">
                Total Worked (h) : {items.totalWorked}
              </span>
            </div>
            <div className="flex justify-between w-full">
              <div className="flex flex-col">
                <span className="text-gray-500">Productive (h)</span>
                <span className="font-semibold">{items.productive}</span>
                <div className="bg-[#3550DC] h-0.5 mt-2"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-500">Manual (h)</span>
                <span className="font-semibold">{items.manual}</span>
                <div className="bg-[#F9B906] h-0.5 mt-2"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-500">Unproductive (h)</span>
                <span className="font-semibold">{items.unproductive}</span>
                <div className="bg-[#FF0000] h-0.5 mt-2"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="p-1.5 px-2 mb-3 w-fit font-semibold rounded bg-black text-white hover:bg-gray-600 cursor-pointer">
        <span>Load More</span>
      </div>
    </div>
  );
}

export default TeamsTableGrid;
