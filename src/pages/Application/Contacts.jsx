import React from "react";
import Navbar from "../../components/Navbar";
import { FaRegSquarePlus } from "react-icons/fa6";
import { TbMessageChatbot, TbPhoneCalling, TbVideoPlus } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
import { contactData } from "../../data/contactData";

function Contacts() {
  return (
    <div>
      <Navbar>
        <div className="flex flex-col gap-7 sm:p-[24px]">
          <div className="flex text-sm p-2 justify-around sm:justify-between mb-[-15px]">
            <h4 className="md:text-[1.125rem] font-semibold hidden sm:block">Contacts</h4>
            <p>
              Home &gt; Application &gt;{" "}
              <span className="md:text-[1rem] font-medium">Contacts</span>
            </p>
          </div>
          <div className="flex text-[10px] sm:text-lg gap-2 mb-[-16px] sm:mb-[-10px] w-fit ml-[4vw] px-2 sm:px-4 hover:bg-blue-700 items-center cursor-pointer justify-center bg-blue-600 text-white p-1 sm:p-1.5 rounded font-semibold">
            <FaRegSquarePlus />
            <span>Add Contact</span>
          </div>
          <div className="flex justify-around items-center gap-8 flex-wrap">
            {contactData.map((item) => (
              <div
                key={item.id}
                className="flex flex-col gap-4 bg-white p-5 w-[80%] lg:w-[45%] xl:w-[28%] overflow-hidden rounded dark:bg-[#030318] dark:border-[#011743]"
              >
                <div className="flex gap-2 items-center">
                  <img src={item.image} className="w-10 rounded" alt="" />
                  <div className="flex flex-col justify-center">
                    <span className="font-semibold">{item.name}</span>
                    <span className="text-sm text-gray-500">{item.email}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex gap-1">
                    <NavLink
                      to="/voicecall"
                      className="p-2 text-xl rounded bg-gray-100 hover:bg-gray-200 dark:bg-[#3C4056] dark:hover:bg-[#505572] w-fit"
                    >
                      <TbPhoneCalling />
                    </NavLink>
                    <NavLink
                      to="/chat"
                      className="p-2 text-xl rounded bg-gray-100 hover:bg-gray-200 dark:bg-[#3C4056] dark:hover:bg-[#505572] w-fit"
                    >
                      <TbMessageChatbot />
                    </NavLink>
                    <NavLink
                      to="/videocall"
                      className="p-2 text-xl rounded bg-gray-100 hover:bg-gray-200 dark:bg-[#3C4056] dark:hover:bg-[#505572] w-fit"
                    >
                      <TbVideoPlus />
                    </NavLink>
                  </div>
                  <NavLink className="p-2 hover:bg-gray-100 text-xl rounded border dark:border-[#011743] dark:hover:bg-[#011743] border-gray-300 w-fit">
                    <BsThreeDotsVertical />
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Navbar>
    </div>
  );
}

export default Contacts;
