import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { clients } from "../../data/clientsData";

function ClientsTableList() {
  return (
    <div className="overflow-x-auto w-[93vw] md:w-[70vw] xl:w-full border sm:border-none border-[#D1D5DC] dark:border-[#011743]">
      <table className=" min-w-300 xl:w-full border-collapseborder border-[#D1D5DC] dark:border-[#011743] whitespace-nowrap">
        <tr className="bg-gray-300 dark:bg-[#030318] border-b border-[#D1D5DC] dark:border-[#011743]">
          <th className="text-start px-4 py-3">Client</th>
          <th className="text-start">Company Name</th>
          <th className="text-start">Email Address</th>
          <th className="text-start">Phone</th>
          <th className="text-start">No of Projects</th>
          <th className="text-start">Created Date</th>
          <th className="text-start">Status</th>
          <th></th>
        </tr>
        {clients.map((items) => (
          <tr
            key={items.id}
            className="border-b border-[#D1D5DC] dark:border-[#011743]"
          >
            <td className="flex items-center gap-3 p-3 relative">
              <img src={items.avatar} className="rounded-full w-10" />
              <p className="text-[14px] flex flex-col font-semibold hover:text-blue-600 cursor-pointer">
                {items.name}
                <span className="dark:text-[#DEE2E6] text-[#000000] font-normal">
                  {items.country}
                </span>
              </p>
            </td>
            <td>{items.company}</td>
            <td>{items.email}</td>
            <td>{items.phone}</td>
            <td>{items.projects}</td>
            <td>{items.createdDate}</td>
            <td>
              <span
                className="p-0.5 px-2.5 align-middle pb-1 dark:bg-[#072518] rounded"
                style={{
                  backgroundColor: `${items.statusBgColor}`,
                  color: `${items.statusTextColor}`,
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
  );
}

export default ClientsTableList;
