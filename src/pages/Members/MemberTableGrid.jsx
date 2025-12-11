import { BsThreeDotsVertical } from "react-icons/bs";
import { FaAngleRight } from "react-icons/fa";
import { LuSmartphone } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { members } from "../../data/membersData";

function MemberTableGrid() {
  return (
    <div className="flex flex-col justify-center gap-3 items-center">
      <div className="flex gap-7 flex-wrap justify-around items-center">
        {members.map((item) => (
          <div
            key={item.id}
            className="border rounded p-5 w-70 border-[#E8EAEB] dark:border-[#011743]"
          >
            <div className="flex items-center justify-between p-2 bg-[#F5F6FA] dark:bg-[#0C0C20] rounded">
              <div className="flex items-center gap-2">
                <img src={item.avatar} className="w-10 rounded-full" alt="" />
                <div className="flex flex-col">
                  <span className="font-semibold">{item.name}</span>
                  <span className="text-gray-500 dark:text-gray-400">
                    {item.role}
                  </span>
                </div>
              </div>

              <BsThreeDotsVertical className="cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800 p-1 rounded text-2xl" />
            </div>
            <div className="flex justify-between w-full my-4">
              <div className="flex flex-col">
                <span className="font-semibold">Team</span>
                <span className="text-gray-500 dark:text-[#DEE2E6]">
                  {item.team}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold">Experience</span>
                <span className="text-gray-500 dark:text-[#DEE2E6]">
                  {item.experience}
                </span>
              </div>
            </div>
            <hr className="text-[#E8EAEB] dark:border-[#011743]" />
            <div className="flex flex-col gap-2 my-3">
              <div className="flex items-center gap-1">
                <MdOutlineEmail />
                <span className="text-gray-500 dark:text-[#DEE2E6]">
                  {item.email}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <LuSmartphone />
                <span className="text-gray-500 dark:text-[#DEE2E6]">
                  {item.phone}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 border dark:border-[#011743] dark:hover:dark:bg-[#011743] justify-center p-1.5 rounded border-[#E8EAEB] hover:bg-gray-100 cursor-pointer">
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
  );
}

export default MemberTableGrid;
