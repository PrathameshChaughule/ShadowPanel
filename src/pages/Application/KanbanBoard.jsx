import Navbar from "../../components/Navbar";
import { FiPlus } from "react-icons/fi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { LuMessageSquareText, LuPaperclip } from "react-icons/lu";
import { kanbanData } from "../../data/kanbanData";
function KanbanBoard() {
  return (
    <div>
      <Navbar>
        <div className="flex flex-col gap-7 sm:p-[24px]">
          <div className="flex text-sm p-2 justify-around sm:justify-between mb-[-15px]">
            <h4 className="md:text-[1.125rem] font-semibold">Kanban View</h4>
            <p>
              Home &gt; Application &gt;{" "}
              <span className="md:text-[1rem] font-medium">Kanban View</span>
            </p>
          </div>
          <div className="flex justify-around items-start gap-4">
            <div className="w-[33%] bg-white dark:bg-[#030318] rounded shadow">
              <div className="flex items-center justify-between border-b-2 border-gray-100 dark:border-[#011743] p-4">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-xl">To Do</span>
                  <div className="px-1.5 rounded-full bg-red-500 text-white text-sm w-fit">
                    <span>{kanbanData.todo.length}</span>
                  </div>
                </div>
                <FiPlus className="text-4xl bg-gray-100 p-2 dark:bg-[#3C4056] dark:hover:bg-[#515671] rounded cursor-pointer hover:bg-gray-200" />
              </div>
              <div className="p-4.5 flex flex-col gap-5">
                {kanbanData.todo.map((item) => (
                  <div
                    key={item.id}
                    className="border dark:border-[#011743] rounded px-4 py-3"
                  >
                    <div className="flex justify-between items-center">
                      <span
                        className={`px-1.5 text-white rounded bg-${item.priorityColor}-500`}
                      >
                        {item.priority}
                      </span>
                      <BsThreeDotsVertical className="p-1.5 text-3xl dark:hover:bg-[#515671] rounded cursor-pointer hover:bg-gray-50 border-gray-300 border" />
                    </div>
                    <hr className="text-gray-300 my-3 dark:border-[#011743] " />
                    <div className="flex flex-col mb-2">
                      <span className="font-semibold text-lg">
                        {item.title}
                      </span>
                      <span className="text-gray-500">{item.description}</span>
                    </div>
                    <div className="flex flex-col gap-1.5 mb-3">
                      <span className="text-sm text-gray-600">
                        Progress: {item.progress}
                      </span>
                      <div className="rounded h-1.5 dark:bg-[#2B3035] bg-gray-200/80">
                        <div
                          className={`h-full rounded `}
                          style={{
                            backgroundColor: item.progressColor,
                            width: item.progress,
                          }}
                        ></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center h-8 text-3xl">
                          <img
                            src={item.team[0]}
                            className="w-7.5 rounded-full mr-[-9px] z-2 cursor-pointer hover:z-5 p-0.5 dark:bg-[#011743] bg-white hover:mb-1.5"
                            alt=""
                          />
                          <img
                            src={item.team[1]}
                            className="w-7.5 rounded-full mr-[-9px] z-3 cursor-pointer hover:z-5 p-0.5 dark:bg-[#011743] bg-white hover:mb-1.5"
                            alt=""
                          />
                          <img
                            src={item.team[2]}
                            className="w-7.5 rounded-full mr-[-9px] z-4 cursor-pointer hover:z-5 p-0.5 dark:bg-[#011743] bg-white hover:mb-1.5"
                            alt=""
                          />
                          <img
                            src={item.team[3]}
                            className="w-7.5 rounded-full mr-[-9px] z-4 cursor-pointer hover:z-5 p-0.5 dark:bg-[#011743] bg-white hover:mb-1.5"
                            alt=""
                          />
                          <p className="w-7.5 rounded-full z-4 cursor-pointer hover:z-5 p-[5.5px] text-white dark:bg-[#3550DC] bg-black hover:mb-1.5 text-[15px]">
                            {item.imgCount}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1">
                          <LuMessageSquareText /> {item.comments}
                        </span>
                        <span className="flex items-center gap-1">
                          <LuPaperclip /> {item.attachments}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-[33%] bg-white dark:bg-[#030318] rounded shadow">
              <div className="flex items-center justify-between border-b-2 border-gray-100 dark:border-[#011743]  p-4">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-xl">In Progress</span>
                  <div className="px-1.5 rounded-full bg-red-500 text-white text-sm w-fit">
                    <span>{kanbanData.inprogress.length}</span>
                  </div>
                </div>
                <FiPlus className="text-4xl bg-gray-100 dark:bg-[#3C4056] dark:hover:bg-[#515671] p-2 rounded cursor-pointer hover:bg-gray-200" />
              </div>
              <div className="p-4.5 flex flex-col gap-5">
                {kanbanData.inprogress.map((item) => (
                  <div
                    key={item.id}
                    className="border dark:border-[#011743] rounded px-4 py-3"
                  >
                    <div className="flex justify-between items-center">
                      <span
                        className={`px-1.5 text-white rounded bg-${item.priorityColor}-500`}
                      >
                        {item.priority}
                      </span>
                      <BsThreeDotsVertical className="p-1.5 text-3xl rounded cursor-pointer dark:hover:bg-[#3C4056] hover:bg-gray-50 border-gray-300 border" />
                    </div>
                    <hr className="text-gray-300 dark:border-[#011743] my-3" />
                    <div className="flex flex-col mb-2">
                      <span className="font-semibold text-lg">
                        {item.title}
                      </span>
                      <span className="text-gray-500">{item.description}</span>
                    </div>
                    <div className="flex flex-col gap-1.5 mb-3">
                      <span className="text-sm text-gray-600">
                        Progress: {item.progress}
                      </span>
                      <div className="rounded h-1.5 dark:bg-[#2B3035] bg-gray-200/80">
                        <div
                          className={`h-full rounded `}
                          style={{
                            backgroundColor: item.progressColor,
                            width: item.progress,
                          }}
                        ></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center h-8 text-3xl">
                          <img
                            src={item.team[0]}
                            className="w-7.5 rounded-full mr-[-9px] z-2 cursor-pointer hover:z-5 p-0.5 dark:bg-[#011743] bg-white hover:mb-1.5"
                            alt=""
                          />
                          <img
                            src={item.team[1]}
                            className="w-7.5 rounded-full mr-[-9px] z-3 cursor-pointer hover:z-5 p-0.5 dark:bg-[#011743] bg-white hover:mb-1.5"
                            alt=""
                          />
                          <img
                            src={item.team[2]}
                            className="w-7.5 rounded-full mr-[-9px] z-4 cursor-pointer hover:z-5 p-0.5 dark:bg-[#011743] bg-white hover:mb-1.5"
                            alt=""
                          />
                          <img
                            src={item.team[3]}
                            className="w-7.5 rounded-full mr-[-9px] z-4 cursor-pointer hover:z-5 p-0.5 dark:bg-[#011743] bg-white hover:mb-1.5"
                            alt=""
                          />
                          <p className="w-7.5 rounded-full z-4 cursor-pointer hover:z-5 p-[5.5px] text-white dark:bg-[#3550DC] bg-black hover:mb-1.5 text-[15px]">
                            {item.imgCount}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1">
                          <LuMessageSquareText /> {item.comments}
                        </span>
                        <span className="flex items-center gap-1">
                          <LuPaperclip /> {item.attachments}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-[33%] bg-white dark:bg-[#030318] rounded shadow">
              <div className="flex items-center justify-between border-b-2 border-gray-100 dark:border-[#011743]  p-4">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-xl">Completed</span>
                  <div className="px-1.5 rounded-full bg-red-500 text-white text-sm w-fit">
                    <span>{kanbanData.completed.length}</span>
                  </div>
                </div>
                <FiPlus className="text-4xl bg-gray-100 dark:bg-[#3C4056] dark:hover:bg-[#515671] p-2 rounded cursor-pointer hover:bg-gray-200" />
              </div>
              <div className="p-4.5 flex flex-col gap-5">
                {kanbanData.completed.map((item) => (
                  <div
                    key={item.id}
                    className="border dark:border-[#011743] rounded px-4 py-3"
                  >
                    <div className="flex justify-between items-center">
                      <span
                        className={`px-1.5 text-white rounded bg-${item.priorityColor}-500`}
                      >
                        {item.priority}
                      </span>
                      <BsThreeDotsVertical className="p-1.5 text-3xl dark:hover:bg-[#515671] rounded cursor-pointer hover:bg-gray-50 border-gray-300 border" />
                    </div>
                    <hr className="text-gray-300 my-3 dark:border-[#011743] " />
                    <div className="flex flex-col mb-2">
                      <span className="font-semibold text-lg">
                        {item.title}
                      </span>
                      <span className="text-gray-500">{item.description}</span>
                    </div>
                    <div className="flex flex-col gap-1.5 mb-3">
                      <span className="text-sm text-gray-600">
                        Progress: {item.progress}
                      </span>
                      <div className="rounded h-1.5 dark:bg-[#2B3035] bg-gray-200/80">
                        <div
                          className={`h-full rounded `}
                          style={{
                            backgroundColor: item.progressColor,
                            width: item.progress,
                          }}
                        ></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center h-8 text-3xl">
                          <img
                            src={item.team[0]}
                            className="w-7.5 rounded-full mr-[-9px] z-2 cursor-pointer hover:z-5 p-0.5 dark:bg-[#011743] bg-white hover:mb-1.5"
                            alt=""
                          />
                          <img
                            src={item.team[1]}
                            className="w-7.5 rounded-full mr-[-9px] z-3 cursor-pointer hover:z-5 p-0.5 dark:bg-[#011743] bg-white hover:mb-1.5"
                            alt=""
                          />
                          <img
                            src={item.team[2]}
                            className="w-7.5 rounded-full mr-[-9px] z-4 cursor-pointer hover:z-5 p-0.5 dark:bg-[#011743] bg-white hover:mb-1.5"
                            alt=""
                          />
                          <img
                            src={item.team[3]}
                            className="w-7.5 rounded-full mr-[-9px] z-4 cursor-pointer hover:z-5 p-0.5 dark:bg-[#011743] bg-white hover:mb-1.5"
                            alt=""
                          />
                          <p className="w-7.5 rounded-full z-4 cursor-pointer hover:z-5 p-[5.5px] text-white bg-black hover:mb-1.5 text-[15px]">
                            {item.imgCount}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1">
                          <LuMessageSquareText /> {item.comments}
                        </span>
                        <span className="flex items-center gap-1">
                          <LuPaperclip /> {item.attachments}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Navbar>
    </div>
  );
}

export default KanbanBoard;
