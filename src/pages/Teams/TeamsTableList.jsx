import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { teams } from "../../data/teamsData";

function TeamsTableList() {
  return (
    <div>
      <div className="overflow-x-auto w-[93vw] md:w-[70vw] xl:w-full border sm:border-none border-[#D1D5DC] dark:border-[#011743]">
        <table className="min-w-300 xl:w-full border-collapse border border-[#D1D5DC] dark:border-[#011743] whitespace-nowrap">
          <tr className="bg-[#E6EAEC] dark:bg-[#030318] border-b border-[#D1D5DC] dark:border-[#011743]">
            <th className="text-start px-4 py-3 w-55">Team Name</th>
            <th className="text-start w-55">Team Lead</th>
            <th className="text-start w-45">Members</th>
            <th className="text-start w-35">Performance</th>
            <th className="text-start w-40">Total Hours</th>
            <th className="text-start w-35">Created Date</th>
            <th className="text-start w-25">Status</th>
            <th className="w-20"></th>
          </tr>
          {teams.map((item) => (
            <tr
              key={item.id}
              className="border-b border-[#D1D5DC] dark:border-[#011743]"
            >
              <td className="flex gap-2 items-center p-3">
                <div
                  className="p-2 px-[9px] rounded-full w-10 flex items-center justify-center"
                  style={{ backgroundColor: `${item.codeColorBg}` }}
                >
                  <span
                    className={`font-semibold`}
                    style={{ color: `${item.codeColorText}` }}
                  >
                    {item.code}
                  </span>
                </div>
                <span className="font-semibold hover:text-blue-600 cursor-pointer">
                  {item.teamName}
                </span>
              </td>
              <td>
                <div className="flex items-center gap-2">
                  <img
                    src={item.members[1]}
                    className="w-9 rounded-full"
                    alt=""
                  />
                  <span className="font-semibold hover:text-blue-600 cursor-pointer">
                    {item.lead}
                  </span>
                </div>
              </td>
              <td>
                <div className="flex items-center text-3xl">
                  {item.members.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      className="w-7.5 rounded-full mr-[-9px] z-2 cursor-pointer hover:z-5 p-0.5 bg-white dark:bg-[#011743] hover:mb-1.5"
                      alt=""
                    />
                  ))}

                  <p className="w-7.5 rounded-full z-4 cursor-pointer hover:z-5 p-[5.5px] text-white dark:bg-[#3550DC] bg-blue-600 hover:mb-1.5 text-[15px]">
                    +1
                  </p>
                </div>
              </td>
              <td>
                <div
                  className="flex items-center gap-2 p-0.5 px-3 rounded text-white w-fit"
                  style={{ backgroundColor: `${item.perBg}` }}
                >
                  <span>{item.performance}%</span>
                </div>
              </td>
              <td>{item.totalHours}</td>
              <td>{item.createdDate}</td>
              <td>
                <div
                  style={{ backgroundColor: `${item.statusBg}` }}
                  className="w-fit p-2 py-0.5 rounded font-semibold"
                >
                  <span style={{ color: `${item.statusText}` }}>
                    {item.status}
                  </span>
                </div>
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

export default TeamsTableList;
