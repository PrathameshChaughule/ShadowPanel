import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { members } from "../../data/membersData";

function MemberTableList() {
  return (
    <div> 
      <div className="overflow-x-auto w-[94vw] sm:w-[70vw] xl:w-full">
        <table className="min-w-300 xl:w-full border-collapse border border-[#D1D5DC] dark:border-[#011743] whitespace-nowrap">
          <tr className="bg-gray-300 dark:bg-[#030318] border-b border-[#D1D5DC] dark:border-[#011743]">
            <th className="text-start px-4 py-3">Name</th>
            <th className="text-start">Team</th>
            <th className="text-start">Work Location</th>
            <th className="text-start">Email Address</th>
            <th className="text-start">Phone Number</th>
            <th className="text-start">Experience</th>
            <th className="text-start">Status</th>
            <th></th>
          </tr>
          {members.map((item) => (
            <tr className="border-b border-[#D1D5DC] dark:border-[#011743]">
              <td className="flex items-center gap-3 p-3 relative">
                <img src={item.avatar} className="rounded-full w-10" />
                <span className="border border-white p-[5px] rounded-full bg-[#01b664] absolute left-11 bottom-4"></span>
                <p className="text-[14px] flex flex-col font-semibold hover:text-blue-600 cursor-pointer">
                  {item.name}{" "}
                  <span className="dark:text-[#DEE2E6] text-[#000000]">
                    {item.role}
                  </span>
                </p>
              </td>
              <td>{item.team}</td>
              <td>{item.workLocation}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.experience}</td>
              <td>
                <span
                  className="p-0.5 px-2.5 align-middle pb-1 dark:bg-[#072518] rounded"
                  style={{
                    backgroundColor: `${item.color}`,
                    color: `${item.textColor}`,
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
    </div>
  );
}

export default MemberTableList;
