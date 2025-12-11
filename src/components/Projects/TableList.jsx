import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { project } from "../../data/projectData";

function TableList() {
  return (
    <div>
      <table className="border border-[#D1D5DC] dark:border-[#011743] w-full my-2 align-middle items-center">
        <tr className="bg-gray-200 font-semibold dark:bg-[#030318]">
          <th className="text-start px-4 py-3">Project Code</th>
          <th className="text-start">Project Name</th>
          <th className="text-start">Description</th>
          <th className="text-start">Team Members</th>
          <th className="text-start">Budget</th>
          <th className="text-start pl-3">Due Date</th>
          <th className="text-start pl-3">Status</th>
          <th> </th>
        </tr>
        {project.map((item) => (
          <tr
            key={item.id}
            className="border-b border-[#D1D5DC] dark:border-[#011743]"
          >
            <td className="p-3">
              <p className="text-[14px] font-semibold hover:text-blue-600 cursor-pointer">
                #PR000{item.id}{" "}
              </p>
            </td>
            <td className="flex items-center gap-2 py-3">
              <img
                src={item.img}
                className="rounded-full w-8 border border-gray-400"
              />
              <span className="font-semibold hover:text-blue-500 cursor-pointer">
                {item.name}
              </span>
            </td>
            <td className="text-[#6D777F]">{item.sDisc}</td>
            <td>
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
            </td>
            <td className="text-[#6D777F]">${item.price}</td>
            <td className="pl-3 text-[#6D777F]">{item.date}</td>
            <td className="pl-3">
              <span
                className={`p-0.5 text-[12px] px-2.5 align-middle pb-1 rounded`}
                style={{
                  backgroundColor: `${item.bgColor}`,
                  color: `${item.color}`,
                }}
              >
                {item.status}
              </span>
            </td>
            <td className="px-3">
              <BsThreeDotsVertical className="cursor-pointer hover:text-gray-500" />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default TableList;
