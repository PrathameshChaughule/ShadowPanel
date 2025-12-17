import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { FaRegFaceGrin, FaRegSquarePlus } from "react-icons/fa6";
import { LuMinimize } from "react-icons/lu";
import { GiSoundWaves } from "react-icons/gi";
import { HiOutlineMicrophone } from "react-icons/hi";
import { IoCallOutline, IoVideocamOutline } from "react-icons/io5";
import { TbDeviceDesktopShare, TbMessages } from "react-icons/tb";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
function VideoCall() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      document.documentElement.requestFullscreen(); // enter
    } else {
      document.exitFullscreen(); // exit
    }
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div>
      <Navbar>
        <div className="flex min-h-[80vh] flex-col gap-7 md:text-[1rem] sm:p-[24px]">
          <div className="flex text-sm p-2 justify-around sm:justify-between mb-[-15px]">
            <h4 className="md:text-[1.125rem] font-semibold hidden sm:block">
              Video Call
            </h4>
            <p>
              Home &gt; Application &gt;{" "}
              <span className="md:text-[1rem] font-medium">Video Call</span>
            </p>
          </div>
          <div className="flex text-[10px] sm:text-lg gap-2 mb-[-16px] sm:mb-[-10px] w-fit ml-[4vw] px-2 sm:px-4 hover:bg-blue-700 items-center cursor-pointer justify-center bg-blue-600 text-white p-1 sm:p-1.5 rounded font-semibold">
            <FaRegSquarePlus />
            <span>Add Participant</span>
          </div>
          <div className="bg-white dark:bg-[#030318] text-[6px] sm:text-xl rounded gap-2 sm:gap-5 flex flex-col justify-center border border-[#CED2D4] dark:border-[#011743] p-5 ">
            <div className="w-full relative">
              <img
                src="/assets/images/video-call.jpg"
                className="w-full object-cover rounded h-[30vw]"
                alt=""
              />
              <div className="flex gap-2 absolute top-0.5 sm:top-4 left-0.5 sm:left-4">
                <span className="px-1 pt-0.5 sm:px-2 rounded bg-white dark:bg-[#030318] border border-[#CED2D4] dark:border-[#011743] text-[10px] sm:text-sm font-semibold">
                  Rachael Thomas
                </span>
                <span className="px-1 pt-0.5 sm:px-2 rounded bg-white dark:bg-[#030318] border border-[#CED2D4] dark:border-[#011743] text-[10px] sm:text-sm font-semibold">
                  01:45
                </span>
              </div>
              <div
                onClick={toggleFullscreen}
                className="p-1 sm:p-3 rounded absolute cursor-pointer top-0.5 sm:top-4 right-0.5 sm:right-4 bg-white dark:bg-[#030318] border border-[#CED2D4] dark:border-[#011743] w-fit"
              >
                <LuMinimize />
              </div>
            </div>
            <div className="flex justify-around gap-2 sm:gap-5">
              <div className="relative">
                <img
                  src="/assets/images/avatar5.jpg"
                  className="w-70 rounded"
                  alt=""
                />
                <span className="absolute rounded text-center w-[94%] bottom-2 left-0.5 sm:left-2 bg-white dark:bg-[#030318] border border-[#CED2D4] dark:border-[#011743]">
                  Rosa Shelby
                </span>
              </div>
              <div className="relative">
                <img
                  src="/assets/images/avatar1.jpg"
                  className="w-70 rounded"
                  alt=""
                />
                <span className="absolute rounded text-center w-[94%] bottom-2 left-0.5 sm:left-2 bg-white dark:bg-[#030318] border border-[#CED2D4] dark:border-[#011743]">
                  Allen Snyder
                </span>
                <GiSoundWaves className="absolute text-xl sm:text-3xl text-white top-0.5 sm:top-1 left-0.5 sm:left-2" />
              </div>
              <div className="relative">
                <img
                  src="/assets/images/avatar2.jpg"
                  className="w-70 rounded"
                  alt=""
                />
                <span className="absolute rounded text-center w-[94%] bottom-2 left-0.5 sm:left-2 bg-white dark:bg-[#030318] border border-[#CED2D4] dark:border-[#011743]">
                  Charlotte Ayala
                </span>
              </div>
              <div className="relative">
                <img
                  src="/assets/images/avatar9.jpg"
                  className="w-70 rounded"
                  alt=""
                />
                <span className="absolute rounded text-center w-[94%] bottom-2 left-0.5 sm:left-2 bg-white dark:bg-[#030318] border border-[#CED2D4] dark:border-[#011743]">
                  Andrew Foster
                </span>
              </div>
            </div>
            <div className="p-2 border gap-2.5 flex justify-center items-center text-3xl sm:text-5xl rounded sm:mt-5 border-[#CED2D4] dark:border-[#011743]">
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

export default VideoCall;
