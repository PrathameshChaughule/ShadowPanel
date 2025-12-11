import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { FaRegSquarePlus } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { HiOutlineInbox, HiOutlineTrash } from "react-icons/hi";
import { FiClock } from "react-icons/fi";
import {
  BsArchive,
  BsBoxSeam,
  BsSend,
  BsThreeDotsVertical,
} from "react-icons/bs";
import {
  TbBadge,
  TbBrandHipchat,
  TbClockRecord,
  TbFilePower,
  TbMessageReport,
} from "react-icons/tb";
import { LuMessagesSquare } from "react-icons/lu";
import { CiStar } from "react-icons/ci";
import { emails } from "../../data/emailsData";

function Email() {
  const [selected, setSelected] = useState([]);
  const [star, setStar] = useState();

  const selectAll = () => {
    selected.length === emails.length
      ? setSelected([])
      : setSelected(emails.map((i) => i.id));
  };

  return (
    <div>
      <Navbar>
        <div className="flex w-full flex-col gap-7 sm:p-[24px]">
          <div className="flex text-sm p-2 justify-around sm:justify-between mb-[-15px]">
            <h4 className="md:text-[1.125rem] font-semibold">Email</h4>
            <p>
              Home &gt; Application &gt;{" "}
              <span className="md:text-[1rem] font-medium">Email</span>
            </p>
          </div>
          <div className="w-[100%] bg-white border border-[#CED2D4] dark:bg-[#030318] dark:border-[#011743] flex rounded">
            {/* left */}
            <div className="w-[24%] border-r border-[#CED2D4] dark:border-[#011743] p-4 px-6">
              <div className="flex gap-2 hover:bg-blue-700 items-center cursor-pointer justify-center bg-blue-600 text-white p-1.5 rounded font-semibold my-3">
                <FaRegSquarePlus />
                <span>Compose New</span>
              </div>
              <ul>
                <li className="flex mb-1 justify-between items-center gap-2 p-2 cursor-pointer dark:bg-[#0C0C20] bg-blue-100 rounded text-blue-600 font-semibold">
                  <div className="flex items-center gap-2">
                    <HiOutlineInbox />
                    Inbox
                  </div>

                  <div className="bg-red-600 px-2 rounded-full">
                    <span className="text-white">6</span>
                  </div>
                </li>
                <li className="flex items-center gap-2 p-2 hover:bg-blue-100 dark:hover:bg-[#0C0C20] cursor-pointer rounded hover:text-blue-600 font-semibold">
                  <FaRegStar />
                  Starred
                </li>
                <li className="flex items-center gap-2 p-2 hover:bg-blue-100 dark:hover:bg-[#0C0C20] cursor-pointer rounded hover:text-blue-600 font-semibold">
                  <FiClock />
                  Snoozed
                </li>
                <li className="flex items-center gap-2 p-2 hover:bg-blue-100 dark:hover:bg-[#0C0C20] cursor-pointer rounded hover:text-blue-600 font-semibold">
                  <BsSend />
                  Sent
                </li>
                <li className="flex items-center gap-2 p-2 hover:bg-blue-100 dark:hover:bg-[#0C0C20] cursor-pointer rounded hover:text-blue-600 font-semibold">
                  <TbFilePower />
                  Drafts
                </li>
                <li className="flex items-center gap-2 p-2 hover:bg-blue-100 dark:hover:bg-[#0C0C20] cursor-pointer rounded hover:text-blue-600 font-semibold">
                  <TbBadge />
                  Important
                </li>
                <li className="flex items-center gap-2 p-2 hover:bg-blue-100 dark:hover:bg-[#0C0C20] cursor-pointer rounded hover:text-blue-600 font-semibold">
                  <TbBrandHipchat />
                  Chats
                </li>
                <li className="flex items-center gap-2 p-2 hover:bg-blue-100  dark:hover:bg-[#0C0C20] cursor-pointer rounded hover:text-blue-600 font-semibold">
                  <TbClockRecord />
                  Scheduled
                </li>

                <hr className="my-5 text-gray-300 dark:border-[#011743]" />
                <span className="text-gray-500 dark:text-[#DBDCDA]">
                  Others
                </span>
                <li className="flex items-center gap-2 p-2 hover:bg-blue-100 dark:hover:bg-[#0C0C20] cursor-pointer rounded hover:text-blue-600 font-semibold">
                  <LuMessagesSquare />
                  All Emails
                </li>
                <li className="flex items-center gap-2 p-2 hover:bg-blue-100 dark:hover:bg-[#0C0C20] cursor-pointer rounded hover:text-blue-600 font-semibold">
                  <BsBoxSeam />
                  Spam
                </li>
                <li className="flex items-center gap-2 p-2 hover:bg-blue-100 dark:hover:bg-[#0C0C20] cursor-pointer rounded hover:text-blue-600 font-semibold">
                  <HiOutlineTrash />
                  Trash
                </li>
                <hr className="my-5 text-gray-300 dark:border-[#011743]" />
                <span className="text-gray-500 dark:text-[#DBDCDA]">
                  Labels
                </span>
                <li className="flex items-center w-fit mt-2 mb-2 gap-1 hover:text-blue-500 cursor-pointer font-semibold">
                  <GoDotFill className="text-green-500" />
                  Personal
                </li>
                <li className="flex items-center w-fit gap-1 mb-2 hover:text-blue-500 cursor-pointer font-semibold">
                  <GoDotFill className="text-yellow-500" />
                  Client
                </li>
                <li className="flex items-center w-fit gap-1 mb-2 hover:text-blue-500 cursor-pointer font-semibold">
                  <GoDotFill className="text-blue-500" />
                  Marketing
                </li>
                <li className="flex items-center w-fit gap-1 hover:text-blue-500 cursor-pointer font-semibold">
                  <GoDotFill className="text-red-500" />
                  Office
                </li>
              </ul>
            </div>
            {/* right */}
            <div className="w-[80%] ">
              <div className="flex justify-between p-3 border-b dark:border-[#011743] border-[#CED2D4]">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name=""
                    className="h-4 w-4 cursor-pointer"
                    id=""
                    checked={selected.length === emails.length}
                    onChange={selectAll}
                  />
                  <BsArchive className="p-2.5 text-4xl dark:bg-[#3C4056] dark:hover:bg-[#505572] rounded bg-gray-200 cursor-pointer hover:bg-gray-300" />
                  <HiOutlineTrash className="p-2.5 text-4xl dark:bg-[#3C4056] dark:hover:bg-[#505572] rounded bg-gray-200 cursor-pointer hover:bg-gray-300" />
                  <TbMessageReport className="p-2.5 text-4xl rounded dark:bg-[#3C4056] dark:hover:bg-[#505572] bg-gray-200 cursor-pointer hover:bg-gray-300" />
                  <BsThreeDotsVertical className="p-2.5 text-4xl rounded border border-gray-300 cursor-pointer dark:border-[#011743] dark:hover:bg-[#011743] hover:bg-gray-100" />
                </div>
                <div className="border dark:border-[#011743] border-gray-300 rounded">
                  <input
                    type="text"
                    placeholder="Search Keyword"
                    className="outline-none h-full w-full px-3 border-none"
                  />
                </div>
              </div>
              {emails.map((items) => (
                <div
                  key={items.id}
                  className="flex justify-between p-3 border-b dark:border-[#011743] border-[#CED2D4]"
                >
                  <div className="flex gap-13">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        name=""
                        className="h-4 w-4 cursor-pointer"
                        id=""
                        checked={selected.includes(items.id)}
                        onChange={() => {
                          setSelected((prev) =>
                            prev.includes(items.id)
                              ? prev.filter((id) => id !== items.id)
                              : [...prev, items.id]
                          );
                        }}
                      />
                      <CiStar className="text-2xl text-gray-500 cursor-pointer" />
                    </div>
                    <div className="flex items-center w-40 gap-2">
                      <img
                        src={items.senderImage}
                        className="w-9 rounded"
                        alt=""
                      />
                      <span>{items.sender}</span>
                    </div>
                  </div>

                  <div className="flex flex-col w-125">
                    <div>
                      <span className="font-semibold">{items.title}</span>
                      <span
                        className={`px-2 pb-0.5 rounded text-white ml-2`}
                        style={{ backgroundColor: `${items.tagColor}` }}
                      >
                        {items.tag}
                      </span>
                    </div>

                    <span className="text-sm text-gray-500 dark:text-[#c7c8c6]">
                      {items.message}
                    </span>
                  </div>
                  <div className="flex items-center mr-9">
                    <span className="font-semibold">{items.time}</span>
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

export default Email;
