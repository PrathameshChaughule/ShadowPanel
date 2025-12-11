import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { GoClock } from "react-icons/go";
import { SlCalender } from "react-icons/sl";
import { project } from "../../data/projectData";

function TableGrid() {
  return (
    <div className="flex gap-7 flex-wrap justify-around">
      {project.map((item) => (
        <div
          key={item.id}
          className="flex flex-col justify-center items-center w-95 shadow-sm shadow-gray-400 dark:shadow-[#011743] dark:bg-[#030318] p-4 rounded"
        >
          <div className="flex items-center justify-between w-[99%] border-b border-gray-300 dark:border-[#011743] pb-2">
            <div className="flex gap-2 items-center">
              <img src={item.img} className="rounded-full w-10" alt="" />
              <div className="flex flex-col">
                <span className="font-semibold">{item.name}</span>
                <span className="text-[#6D777F]">{item.tasks}</span>
              </div>
            </div>
            <BsThreeDotsVertical className="p-1 text-2xl bg-gray-100 dark:bg-[#0C0C20] dark:hover:bg-[#1a1a43] rounded hover:bg-gray-300 cursor-pointer" />
          </div>
          <div className="my-3 border-b pb-5 dark:border-[#011743] border-gray-300">
            <p className="text-[15px] text-[#6D777F]">{item.disc}</p>
            <div className="mt-3">
              <span className="text-[15px] text-[#6D777F]">
                {item.progress}
              </span>
              <div className="h-1 bg-gray-300 rounded mt-1">
                <div
                  className={`h-1 rounded`}
                  style={{
                    width: `${item.progStyle}%`,
                    backgroundColor: `${item.color}`,
                  }}
                ></div>
              </div>
            </div>
          </div>
          <div className="flex justify-between w-[99%] items-center h-7">
            <span className="flex items-center gap-1 text-[14px] font-semibold">
              <SlCalender /> {item.date} <GoClock /> {item.time}
            </span>
            <div className="">
              <div className="flex items-center text-3xl">
                <img
                  src={item.img1}
                  className="w-7.5 rounded-full mr-[-9px] z-2 cursor-pointer hover:z-5 p-0.5 bg-white dark:bg-[#011743] hover:mb-1.5"
                  alt=""
                />
                <img
                  src={item.img2}
                  className="w-7.5 rounded-full mr-[-9px] z-3 cursor-pointer hover:z-5 p-0.5 bg-white dark:bg-[#011743] hover:mb-1.5"
                  alt=""
                />
                <img
                  src={item.img3}
                  className="w-7.5 rounded-full mr-[-9px] z-4 cursor-pointer hover:z-5 p-0.5 bg-white dark:bg-[#011743] hover:mb-1.5"
                  alt=""
                />
                <p className="w-7.5 rounded-full z-4 cursor-pointer hover:z-5 p-[5.5px] text-white dark:bg-[#3550DC] bg-blue-600 hover:mb-1.5 text-[15px]">
                  +{item.count}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="p-1.5 px-2 mb-3 font-semibold rounded bg-black text-white hover:bg-gray-600 cursor-pointer">
        <span>Load More</span>
      </div>
    </div>
  );
}

export default TableGrid;
