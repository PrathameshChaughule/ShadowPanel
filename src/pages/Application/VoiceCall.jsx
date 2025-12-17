import React from "react";
import Navbar from "../../components/Navbar";
import { BsThreeDotsVertical } from "react-icons/bs";
import { HiOutlineMicrophone } from "react-icons/hi";
import { IoCallOutline, IoVideocamOutline } from "react-icons/io5";
import { TbDeviceDesktopShare, TbMessages } from "react-icons/tb";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import { FaRegFaceGrin } from "react-icons/fa6";
function VoiceCall() {
  return (
    <div>
      <Navbar>
        <div className="flex flex-col min-h-[80vh] gap-7 sm:p-[24px]">
          <div className="flex text-sm p-2 justify-around sm:justify-between mb-[-15px]">
            <h4 className="md:text-[1.125rem] font-semibold hidden sm:block">
              Voice Call
            </h4>
            <p>
              Home &gt; Application &gt;{" "}
              <span className="md:text-[1rem] font-medium">Voice Call</span>
            </p>
          </div>
          <div className="bg-white dark:bg-[#030318] rounded p-2 sm:p-5 border border-[#CED2D4] dark:border-[#011743]">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 relative">
                <img
                  src="/assets/images/avatar15.jpg"
                  className="w-11 rounded-full cursor-pointer"
                  alt=""
                />
                <div className="w-3 h-3 p-0.5 rounded-full absolute bottom-0 left-8.5 dark:bg-[#030318] bg-white">
                  <div className="bg-green-500 w-full rounded-full h-full"></div>
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold hover:text-blue-500 cursor-pointer">
                    Edward Lietz
                  </span>
                  <span className="text-sm text-gray-500">+91 9596872367</span>
                </div>
              </div>
              <div className="p-2 border w-fit cursor-pointer hover:bg-gray-100 rounded dark:bg-[#030318] dark:hover:bg-[#0c0c52] border-[#CED2D4] dark:border-[#011743]">
                <BsThreeDotsVertical />
              </div>
            </div>
            <div className="w-full relative my-3 rounded border-[#CED2D4] dark:border-[#011743] bg-gradient-to-bl from-[#D5E7E2] via-white to-[#A0C1DE] dark:from-[#142E2C] dark:via-[#172024] dark:to-[#1A4365] h-[45vh] py-2 flex flex-col items-center justify-center gap-4">
              <img
                src="/assets/images/avatar15.jpg"
                className="w-40 rounded-full"
                alt=""
              />
              <span className="text-sm bg-white dark:bg-[#030318] rounded px-3 font-semibold">
                01:45
              </span>
              <div className="p-2 border-2 rounded border-blue-600 absolute bottom-4 right-4">
                <img
                  src="/assets/images/avatar9.jpg"
                  className="w-10 rounded-full cursor-pointer"
                  alt=""
                />
              </div>
            </div>
            <div className="p-2 border gap-2.5 flex justify-center items-center text-3xl sm:text-5xl rounded mt-5 border-[#CED2D4] dark:border-[#011743]">
              <HiOutlineMicrophone className="p-2 dark:bg-[#3C4056] dark:hover:bg-[#505572] sm:p-3 bg-gray-100 rounded cursor-pointer hover:bg-gray-200" />
              <IoVideocamOutline className="p-2 dark:bg-[#3C4056] dark:hover:bg-[#505572] sm:p-3 bg-gray-100 rounded cursor-pointer hover:bg-gray-200" />
              <TbMessages className="p-2 dark:bg-[#3C4056] dark:hover:bg-[#505572] sm:p-3 bg-gray-100 rounded cursor-pointer hover:bg-gray-200" />
              <IoCallOutline className="p-3 sm:p-4 text-4xl sm:text-6xl bg-[#FF0000] font-semibold text-white rounded cursor-pointer hover:bg-red-400" />
              <HiOutlineSpeakerWave className="p-2 dark:bg-[#3C4056] dark:hover:bg-[#505572] sm:p-3 bg-gray-100 rounded cursor-pointer hover:bg-gray-200" />
              <FaRegFaceGrin className="p-2 dark:bg-[#3C4056] dark:hover:bg-[#505572] sm:p-3 bg-gray-100 rounded cursor-pointer hover:bg-gray-200" />
              <TbDeviceDesktopShare className="p-2 dark:bg-[#3C4056] dark:hover:bg-[#505572] sm:p-3 bg-gray-100 rounded cursor-pointer hover:bg-gray-200" />
            </div>
          </div>
        </div>
      </Navbar>
    </div>
  );
}

export default VoiceCall;
