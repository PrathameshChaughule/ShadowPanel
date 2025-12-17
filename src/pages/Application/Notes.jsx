import Navbar from "../../components/Navbar";
import { HiOutlineInbox } from "react-icons/hi";
import { FaRegStar } from "react-icons/fa";
import { IoTrashOutline } from "react-icons/io5";
import { LuFiles } from "react-icons/lu";
import { FaRegSquarePlus } from "react-icons/fa6";
import { GoDotFill, GoTrash } from "react-icons/go";
import { BsThreeDotsVertical } from "react-icons/bs";
import { notesData } from "../../data/notesData";

function Notes() {
  return (
    <div>
      <Navbar>
        <div className="flex flex-col gap-7 sm:p-[24px]">
          <div className="flex text-sm p-2 justify-around sm:justify-between mb-[-15px]">
            <h4 className="md:text-[1.125rem] font-semibold hidden sm:block">
              Notes
            </h4>
            <p>
              Home &gt; Application &gt;{" "}
              <span className="md:text-[1rem] font-medium">Notes</span>
            </p>
          </div>
          <div className="w-[100%] bg-white border dark:border-[#011743] dark:bg-[#030318] border-[#CED2D4] flex flex-col lg:flex-row rounded">
            {/* left */}
            <div className="w-full xl:w-[26%] border-r dark:border-[#011743] border-[#CED2D4] p-4 px-6">
              <div className="flex gap-2 hover:bg-blue-700 items-center cursor-pointer justify-center bg-blue-600 text-white p-1.5 rounded font-semibold my-3">
                <FaRegSquarePlus />
                <span>Create New</span>
              </div>
              <ul>
                <li className="flex mb-2 justify-between items-center gap-2 p-2 dark:bg-[#0C0C20] hover:dark:bg-[#0C0C20] bg-blue-100 rounded text-blue-600 font-semibold">
                  <div className="flex items-center gap-2">
                    <HiOutlineInbox />
                    All Notes
                  </div>

                  <div className="bg-red-600 px-2 rounded-full">
                    <span className="text-white">6</span>
                  </div>
                </li>
                <li className="flex mb-2 items-center gap-2 p-2 hover:dark:bg-[#0C0C20] hover:bg-blue-100 cursor-pointer rounded hover:text-blue-600 font-semibold">
                  <FaRegStar />
                  Starred
                </li>
                <li className="flex mb-2 items-center gap-2 p-2 hover:dark:bg-[#0C0C20] hover:bg-blue-100 cursor-pointer rounded hover:text-blue-600 font-semibold">
                  <IoTrashOutline />
                  Trash
                </li>
                <li className="flex mb-2 items-center gap-2 p-2 hover:dark:bg-[#0C0C20] hover:bg-blue-100 cursor-pointer rounded hover:text-blue-600 font-semibold">
                  <LuFiles />
                  Draft
                </li>
                <hr className="my-5 text-gray-300 dark:border-[#011743]" />
                <span className="text-gray-500 dark:text-[#DBE0E6]">
                  Labels
                </span>
                <li className="flex items-center mt-2 mb-2 gap-1 hover:text-blue-500 cursor-pointer font-semibold">
                  <GoDotFill className="text-green-500" />
                  Low
                </li>
                <li className="flex items-center gap-1 mb-2 hover:text-blue-500 cursor-pointer font-semibold">
                  <GoDotFill className="text-purple-500" />
                  Medium
                </li>
                <li className="flex items-center gap-1 hover:text-blue-500 cursor-pointer font-semibold">
                  <GoDotFill className="text-red-500" />
                  High
                </li>
              </ul>
            </div>
            {/* right */}
            <div className="w-full lg:w-[74%] gap-5 p-5 flex flex-wrap justify-center">
              {notesData.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col h-50 gap-4 border p-5 w-full lg:w-100 xl:min-w-83 rounded dark:border-[#011743] border-gray-300"
                >
                  <div className="flex items-center justify-between">
                    <div
                      className={`bg-${item.priorityColor}-500 px-2 rounded text-white`}
                    >
                      <span>{item.priority}</span>
                    </div>
                    <BsThreeDotsVertical className="cursor-pointer hover:text-gray-500" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold hover:text-blue-500 cursor-pointer">
                      {item.title}
                    </span>
                    <span className="text-sm text-gray-500">
                      {item.description}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2 items-center">
                      <div className="p-2 rounded dark:bg-[#3C4056] bg-gray-200 cursor-pointer">
                        <FaRegStar />
                      </div>
                      <div className="p-2 rounded dark:bg-[#3C4056] bg-gray-200 cursor-pointer">
                        <GoTrash />
                      </div>
                    </div>
                    <img src={item.image} className="w-8 rounded" alt="" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Navbar>
    </div>
  );
}

export default Notes;
