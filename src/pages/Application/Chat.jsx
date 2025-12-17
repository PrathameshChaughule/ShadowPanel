import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { CiSearch } from "react-icons/ci";
import { GoDotFill } from "react-icons/go";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { IoCheckmarkDone, IoVideocamOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import { BsSend, BsThreeDotsVertical } from "react-icons/bs";
import { TbMoodSmileBeam, TbPhotoPlus } from "react-icons/tb";
import { admin, contacts } from "../../data/chatData";
import { RxCross2 } from "react-icons/rx";

function Chat() {
  const [activeChat, setActiveChat] = useState(contacts[0]);
  const [openChat, setOpenChat] = useState(1);

  return (
    <div>
      <Navbar>
        <div className="flex flex-col gap-7 p-2 sm:p-[24px]">
          <div className="flex text-sm p-2 justify-around sm:justify-between mb-[-15px]">
            <h4 className="md:text-[1.125rem] font-semibold hidden sm:block">Chat</h4>
            <p>
              Home &gt; Application &gt;{" "}
              <span className="md:text-[1rem] font-medium">Chat</span>
            </p>
          </div>
          <div className="w-[100%] bg-white border border-[#CED2D4] dark:border-[#011743] dark:bg-[#030318] flex rounded">
            {/* Left Side */}
            <div
              className={`${
                openChat !== null ? "hidden" : "block"
              } w-[100%] lg:block lg:w-87 xl:w-[28%] border-r dark:border-[#011743] border-[#CED2D4]`}
            >
              <div className="flex justify-between border-b dark:border-[#011743] border-[#CED2D4] items-center p-2.5 px-3">
                <div className="flex items-center gap-2">
                  <img
                    src="/assets/images/you.jpg"
                    className="w-9 rounded-full"
                    alt=""
                  />
                  <div className="flex flex-col">
                    <span className="font-semibold">Peter Brooks</span>
                    <span className="text-gray-500 mt-[-4px]">Admin</span>
                  </div>
                </div>
                <div>
                  <span className="bg-blue-500 cursor-pointer hover:bg-blue-700 text-white text-2xl text-center px-2.5 pb-[3px] rounded">
                    +
                  </span>
                </div>
              </div>
              <div className="p-2.5 px-3">
                <div className="flex items-center gap-1 p-1.5 px-2.5 border rounded border-[#CED2D4] dark:border-[#011743]">
                  <CiSearch className="text-xl " />
                  <input
                    type="text"
                    placeholder="Search Keyword"
                    className="outline-none border-none w-[100%]"
                  />
                </div>
                <div className="mt-2 p-1.5 overflow-y-auto max-h-95">
                  <span className="mb-3 font-semibold">All Messages</span>
                  <div className="mt-2 flex flex-col gap-3">
                    {contacts.map((c) => (
                      <div
                        key={c.id}
                        onClick={() => {
                          setActiveChat(c);
                          setOpenChat(!null);
                        }}
                        className={`
                                  flex justify-between p-2 px-2.5 rounded cursor-pointer
                                  hover:bg-gray-50 dark:hover:bg-[#1E2930]
                                  ${
                                    activeChat?.id === c.id
                                      ? "bg-gray-100 dark:bg-[#1E2930]"
                                      : ""
                                  }
                                `}
                      >
                        <div className="flex items-center gap-2">
                          <div className="relative">
                            <div
                              className="absolute w-2.5 h-2.5 left-[26px] top-[25px] border-2 rounded-full border-white dark:border-[#030318]"
                              style={{ backgroundColor: `${c.color}` }}
                            ></div>
                            <img
                              src={c.img}
                              className="w-9 rounded-full"
                              alt=""
                            />
                          </div>
                          <div className="flex flex-col">
                            <span className="font-semibold">{c.name}</span>
                            <span className="text-gray-500 mt-[-4px]">
                              {c.msg}
                            </span>
                          </div>
                        </div>
                        <div>
                          <span className="text-sm">
                            {c.chat[c.chat.length - 1].time}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* Right Side */}
            <div
              className={`${
                openChat !== null ? "block" : "hidden"
              } lg:block w-[100%] lg:w-[72%]`}
            >
              <Chat1
                admin={admin}
                chatData={activeChat}
                setOpenChat={setOpenChat}
              />
            </div>
          </div>
        </div>
      </Navbar>
    </div>
  );
}

function Chat1({ admin, chatData, setOpenChat }) {
  return (
    <div>
      <div className="flex justify-between border-b dark:border-[#011743] border-[#CED2D4] items-center p-2.5 px-3">
        <div className="flex items-center gap-2">
          <img src={chatData.img} className="w-9 rounded-full" alt="" />
          <div className="flex flex-col">
            <span className="font-semibold">{chatData.name}</span>
            <span className="text-gray-500 mt-[-4px] flex items-center">
              <GoDotFill style={{ color: `${chatData.color}` }} />
              {chatData.status}
            </span>
          </div>
        </div>
        <div className="flex gap-1 sm:gap-2 text-black text-[12px] items-center sm:text-xl">
          <span className="bg-gray-200 text-center p-2 sm:p-2.5 rounded cursor-pointer hover:bg-gray-300 dark:bg-[#3C4056] dark:text-white dark:hover:bg-[#3c40568f]">
            <LuPhone />
          </span>
          <span className="bg-gray-200 text-center p-2 sm:p-2.5 rounded cursor-pointer hover:bg-gray-300 dark:bg-[#3C4056] dark:text-white dark:hover:bg-[#3c40568f]">
            <IoVideocamOutline />
          </span>
          <span className="bg-gray-200 text-center p-2 sm:p-2.5 rounded cursor-pointer hover:bg-gray-300 dark:bg-[#3C4056] dark:text-white dark:hover:bg-[#3c40568f]">
            <IoIosInformationCircleOutline />
          </span>
          <span
            onClick={() => setOpenChat(null)}
            className="bg-gray-200 lg:hidden text-center p-2 sm:p-2.5 rounded cursor-pointer hover:bg-gray-300 dark:bg-[#3C4056] dark:text-white dark:hover:bg-[#3c40568f]"
          >
            <RxCross2 />
          </span>
        </div>
      </div>
      <div className="h-101 overflow-y-auto p-2">
        {chatData.chat.map((msg, i) => (
          <div key={i}>
            {msg.from !== "You" ? (
              // ---------------- CONTACT MESSAGE BLOCK ----------------
              <div className="flex justify-between p-2.5 px-3">
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <img
                      src={chatData.img}
                      className="w-9 rounded-full mt-[-40px]"
                      alt=""
                    />
                  </div>

                  <div className="flex flex-col">
                    <span className="font-semibold flex gap-1 items-center">
                      {msg.from}
                      <GoDotFill className="text-sm text-gray-400" />
                      <span className="font-normal text-gray-500">
                        {msg.time}
                      </span>
                    </span>

                    <div className="flex items-center gap-2">
                      <span className="text-gray-500 border border-[#CED2D4] p-4 rounded bg-white dark:bg-[#172024] dark:border-[#11112F] dark:text-white">
                        {msg.text}
                      </span>
                      <BsThreeDotsVertical className="text-gray-500 cursor-pointer hover:text-gray-400 text-2xl p-1 dark:text-white" />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              // ---------------- ADMIN (YOU) MESSAGE BLOCK ----------------
              <div className="flex justify-end p-2.5 px-3">
                <div className="flex items-center gap-2">
                  <div className="flex flex-col">
                    <span className="font-semibold justify-end flex gap-1 items-center">
                      <IoCheckmarkDone className="text-green-500" />
                      <span className="font-normal text-gray-500">
                        {msg.time}
                      </span>
                      <GoDotFill className="text-sm text-gray-400" />
                      You
                    </span>

                    <div className="flex items-center gap-2">
                      <BsThreeDotsVertical className="text-gray-500 cursor-pointer hover:text-gray-400 text-2xl p-1 dark:text-white" />
                      <span className="text-gray-500 border border-[#CED2D4] p-4 rounded bg-gray-50 dark:bg-[#1E2930] dark:border-[#11112F] dark:text-white">
                        {msg.text}
                      </span>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute w-2.5 h-2.5 left-[28px] top-[-14px] border-2 rounded-full border-white dark:border-[#030318] bg-green-400"></div>
                    <img
                      src="/assets/images/you.jpg"
                      className="w-9 rounded-full mt-[-40px]"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-between border-t dark:border-[#011743] border-[#CED2D4] items-center p-2.5 px-3">
        <div className="w-full ml-3">
          <input
            type="text"
            className="w-full border-none outline-none"
            placeholder="Type Something"
          />
        </div>
        <div className="flex gap-1 sm:gap-2 text-black text-[12px] sm:text-xl">
          <span className="bg-gray-200  text-center p-2 sm:p-2.5 rounded cursor-pointer hover:bg-gray-300 dark:bg-[#3C4056] dark:text-white dark:hover:bg-[#3c40568f]">
            <TbPhotoPlus />
          </span>
          <span className="bg-gray-200  text-center p-2 sm:p-2.5 rounded cursor-pointer hover:bg-gray-300 dark:bg-[#3C4056] dark:text-white dark:hover:bg-[#3c40568f]">
            <TbMoodSmileBeam />
          </span>
          <span className="bg-gray-200  text-center p-2 sm:p-2.5 rounded cursor-pointer hover:bg-gray-300 dark:bg-[#3C4056] dark:text-white dark:hover:bg-[#3c40568f]">
            <BsThreeDotsVertical />
          </span>
          <span className="bg-blue-600 text-white text-center p-2 sm:p-2.5 rounded cursor-pointer hover:bg-blue-700">
            <BsSend />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Chat;
