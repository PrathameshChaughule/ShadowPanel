import Navbar from "../../components/Navbar";
import { IoTrashOutline } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import { HiOutlineInbox } from "react-icons/hi";
import { GoDotFill } from "react-icons/go";
import { FaRegSquarePlus } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";
import CircularProgress from "../../components/CircularProgress";
import { todo } from "../../data/todoData";

function ToDo() {
  return (
    <div>
      <Navbar>
        <div className="flex flex-col gap-7 sm:p-[24px]">
          <div className="flex text-sm p-2 justify-around sm:justify-between mb-[-15px]">
            <h4 className="md:text-[1.125rem] font-semibold">Todo</h4>
            <p>
              Home &gt; Application &gt;{" "}
              <span className="md:text-[1rem] font-medium">Todo</span>
            </p>
          </div>
          <div className="w-[100%] bg-white dark:border-[#011743] dark:bg-[#030318] border border-[#CED2D4] flex rounded">
            {/* left */}
            <div className="w-[20%] border-r dark:border-[#011743] border-[#CED2D4] p-4 px-6">
              <div className="flex gap-2 hover:bg-blue-700 items-center cursor-pointer justify-center bg-blue-600 text-white p-1.5 rounded font-semibold my-3">
                <FaRegSquarePlus />
                <span>Create New</span>
              </div>
              <ul>
                <li className="flex mb-2 justify-between items-center gap-2 p-2 dark:bg-[#0C0C20] bg-blue-100 rounded text-blue-600 font-semibold">
                  <div className="flex items-center gap-2">
                    <HiOutlineInbox />
                    All Notes
                  </div>
                </li>
                <li className="flex mb-1 items-center gap-2 p-2 hover:dark:bg-[#0C0C20] hover:bg-blue-100 cursor-pointer rounded hover:text-blue-600 font-semibold">
                  <FaRegStar />
                  Starred
                </li>
                <li className="flex mb-2 items-center gap-2 p-2 hover:dark:bg-[#0C0C20] hover:bg-blue-100 cursor-pointer rounded hover:text-blue-600 font-semibold">
                  <IoTrashOutline />
                  Trash
                </li>
                <hr className="my-5 text-gray-300 dark:border-[#011743]" />
                <span className="text-gray-500 dark:text-[#DBE0E6]">
                  Labels
                </span>
                <li className="flex items-center w-fit mt-2 mb-2 gap-1 hover:text-blue-500 cursor-pointer font-semibold">
                  <GoDotFill className="text-red-500" />
                  Low
                </li>
                <li className="flex items-center w-fit gap-1 mb-2 hover:text-blue-500 cursor-pointer font-semibold">
                  <GoDotFill className="text-sky-500" />
                  Medium
                </li>
                <li className="flex items-center w-fit gap-1 hover:text-blue-500 cursor-pointer font-semibold">
                  <GoDotFill className="text-green-500" />
                  High
                </li>
                <hr className="my-5 text-gray-300 dark:border-[#011743]" />
                <span className="text-gray-500 dark:text-[#DBE0E6]">
                  Categories
                </span>
                <li className="flex items-center w-fit mt-2 mb-2 gap-1 hover:text-blue-500 cursor-pointer font-semibold">
                  <GoDotFill className="text-purple-500" />
                  Social
                </li>
                <li className="flex items-center w-fit gap-1 mb-2 hover:text-blue-500 cursor-pointer font-semibold">
                  <GoDotFill className="text-blue-500" />
                  Research
                </li>
                <li className="flex items-center w-fit gap-1 mb-2 hover:text-blue-500 cursor-pointer font-semibold">
                  <GoDotFill className="text-pink-500" />
                  Web Design
                </li>
                <li className="flex items-center w-fit gap-1 hover:text-blue-500 cursor-pointer font-semibold">
                  <GoDotFill className="text-yellow-500" />
                  Reminder
                </li>
              </ul>
            </div>
            {/* right */}
            <div className="w-[80%] p-7">
              <div className="border dark:border-[#011743] dark:bg-[#030318] rounded">
                <div className="px-4 pt-3 pb-2">
                  <div className="flex gap-2">
                    <span className="font-semibold">Todo</span>
                    <div className="px-2 bg-red-500 h-fit rounded">
                      <span className="text-white">{todo.length}</span>
                    </div>
                  </div>
                </div>
                <div className="overflow-x-auto w-[90vw] sm:w-[70vw] xl:w-full">
                  <table className="min-w-300 xl:w-full border-collapse whitespace-nowrap border dark:border-[#011743] dark:bg-[#030318] w-full my-2 align-middle items-center">
                    <tr className="bg-gray-200 font-semibold border dark:bg-[#030318] dark:border-[#011743]">
                      <th className="text-start pl-4 py-3">Task Title</th>
                      <th className="text-start">Created Date</th>
                      <th className="text-start">Status</th>
                      <th className="text-start">Due date</th>
                      <th className="text-start pr-9">Priority</th>
                      <th className="text-start pr-10">Progress</th>
                      <th> </th>
                    </tr>
                    {todo.map((item) => (
                      <tr
                        key={item.id}
                        className="border-b dark:border-[#011743]"
                      >
                        <td className="p-3">
                          <p className="text-[15px] w-fit dark:text-[#DBE0E6] text-[#6D777F] font-semibold hover:text-blue-600 cursor-pointer">
                            {item.title}
                          </p>
                        </td>
                        <td className="text-[#6D777F] dark:text-[#DBE0E6] pr-7">
                          {item.createdDate}
                        </td>
                        <td className="pr-4">
                          <div
                            className={`px-2 pb-0.5 rounded w-fit`}
                            style={{ backgroundColor: `${item.statusColor}` }}
                          >
                            <span className="text-white dark:text-[#DBE0E6]">
                              {item.status}
                            </span>
                          </div>
                        </td>
                        <td className="text-[#6D777F] dark:text-[#DBE0E6] pr-5">
                          {item.dueDate}
                        </td>
                        <td>
                          <div
                            className={`px-2 rounded w-fit dark:text-[#DBE0E6] text-white pb-0.5`}
                            style={{ backgroundColor: `${item.priorityColor}` }}
                          >
                            <span>{item.priority}</span>
                          </div>
                        </td>
                        <td className="flex gap-1 items-center pt-1">
                          <CircularProgress progress={item.progress} />
                          <span className="text-[#6D777F]">
                            {item.progress}%
                          </span>
                        </td>
                        <td className="pr-4">
                          <BsThreeDotsVertical className="cursor-pointer hover:text-gray-500" />
                        </td>
                      </tr>
                    ))}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Navbar>
    </div>
  );
}

export default ToDo;
