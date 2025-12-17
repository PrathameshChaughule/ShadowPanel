import React from "react";
import Navbar from "../../components/Navbar";
import { FaRegSquarePlus } from "react-icons/fa6";
import {
  TbBrandFeedly,
  TbCoffee,
  TbMapPinHeart,
  TbMessageDots,
  TbMessageStar,
  TbMoodSearch,
  TbUserShare,
  TbUserX,
  TbWorld,
} from "react-icons/tb";
import {
  BsFillPatchCheckFill,
  BsHash,
  BsThreeDotsVertical,
} from "react-icons/bs";
import { AiOutlineDislike, AiOutlineLink } from "react-icons/ai";
import { LuMailCheck, LuRefreshCcw, LuShare2 } from "react-icons/lu";
import {
  IoCheckmarkCircleSharp,
  IoHeartSharp,
  IoListSharp,
  IoVideocamOutline,
} from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";
import { FiFileText } from "react-icons/fi";
import { RiMusic2Line, RiShareForwardLine } from "react-icons/ri";
import { RxImage } from "react-icons/rx";
import { FaArrowRight, FaRegPlusSquare } from "react-icons/fa";
import { MdOutlineMood } from "react-icons/md";
import { GoDotFill, GoTrash } from "react-icons/go";
import { IoIosBookmark, IoMdHeartEmpty } from "react-icons/io";

function SocialFeed() {
  return (
    <div>
      <Navbar>
        <div className="flex flex-col gap-7 sm:p-[24px]">
          <div className="flex text-sm p-2 justify-around sm:justify-between mb-[-15px]">
            <h4 className="md:text-[1.125rem] font-semibold hidden sm:block">
              Social Feed
            </h4>
            <p>
              Home &gt; Application &gt;{" "}
              <span className="md:text-[1rem] font-medium">Social Feed</span>
            </p>
          </div>
          <div className="w-[100%] flex-col gap-3 2xl:gap-0 2xl:flex-row bg-white border border-[#CED2D4] dark:border-[#011743] dark:bg-[#030318] p-4 flex justify-between rounded 2xl:h-screen overflow-auto 2xl:overflow-hidden">
            {/* left */}
            <div className="w-full 2xl:w-[23%] 2xl:overflow-auto 2xl:sticky top-0 2xl:h-screen p-1 pb-10 border 2xl:border-0 border-[#CED2D4] dark:border-[#011743]">
              <div className="flex flex-col border border-[#CED2D4] dark:border-[#011743] relative p-5 rounded items-center gap-2">
                <div className="relative">
                  <img
                    src="/assets/images/you.jpg"
                    className="w-10 cursor-pointer h-10 rounded-full"
                    alt=""
                  />
                  <div className="h-3 w-3 p-0.5 cursor-pointer dark:bg-[#030318] bg-white rounded-full bottom-0 right-0 absolute">
                    <div className="bg-green-400 rounded-full h-full w-full"></div>
                  </div>
                </div>
                <div className="flex items-center flex-col">
                  <span className="text-xl hover:text-blue-600 cursor-pointer font-bold mt-[-4px]">
                    Peter Brooks
                  </span>
                  <span className="text-sm text-gray-500 mt-[-3px]">
                    @peter_Brooks124
                  </span>
                </div>
                <BsThreeDotsVertical className="p-2 text-4xl rounded border border-[#CED2D4] dark:border-[#011743] dark:hover:bg-[#011743] absolute top-2 right-2 cursor-pointer hover:bg-gray-100" />
              </div>
              <hr className="h-1 mt-5 border-[#CED2D4] dark:border-[#011743]" />
              <div className="flex gap-2 hover:bg-blue-700 items-center cursor-pointer justify-center bg-blue-600 text-white p-1.5 rounded font-semibold my-3">
                <FaRegSquarePlus />
                <span>Create Post</span>
              </div>
              <ul>
                <div className="flex flex-row 2xl:flex-col flex-wrap justify-evenly 2xl:justify-start w-full">
                  <li className="flex mb-2 items-center gap-2 p-2 bg-blue-100 rounded dark:bg-[#0C0C20] text-blue-600 cursor-pointer font-semibold">
                    <TbBrandFeedly />
                    All Feeds
                  </li>
                  <li className="flex items-center gap-2 p-2 hover:bg-blue-100 rounded hover:dark:bg-[#0C0C20] hover:text-blue-600 cursor-pointer font-semibold">
                    <TbMoodSearch />
                    Explore
                  </li>
                  <li className="flex items-center gap-2 p-2 hover:bg-blue-100 rounded hover:dark:bg-[#0C0C20] hover:text-blue-600 cursor-pointer font-semibold">
                    <LuMailCheck />
                    Messages
                  </li>
                  <li className="flex items-center gap-2 p-2 hover:bg-blue-100 rounded hover:dark:bg-[#0C0C20] hover:text-blue-600 cursor-pointer font-semibold">
                    <IoListSharp />
                    Lists
                  </li>
                  <li className="flex items-center gap-2 p-2 hover:bg-blue-100 rounded hover:dark:bg-[#0C0C20] hover:text-blue-600 cursor-pointer font-semibold">
                    <CiBookmark />
                    Bookmark
                  </li>
                  <li className="flex items-center gap-2 p-2 hover:bg-blue-100 rounded hover:dark:bg-[#0C0C20] hover:text-blue-600 cursor-pointer font-semibold">
                    <TbCoffee />
                    Marketplace
                  </li>
                  <li className="flex items-center gap-2 p-2 hover:bg-blue-100 rounded hover:dark:bg-[#0C0C20] hover:text-blue-600 cursor-pointer font-semibold">
                    <FiFileText />
                    Files
                  </li>
                  <li className="flex items-center gap-2 p-2 hover:bg-blue-100 rounded hover:dark:bg-[#0C0C20] hover:text-blue-600 cursor-pointer font-semibold">
                    <RiMusic2Line />
                    Media
                  </li>
                  <li className="flex  items-center gap-2 p-2 hover:bg-blue-100 rounded hover:dark:bg-[#0C0C20] hover:text-blue-600 cursor-pointer font-semibold">
                    <TbUserShare />
                    Profile
                  </li>
                </div>
                <hr className="text-gray-300 my-3 dark:border-[#011743]" />
                <span className="font-semibold text-lg">Pages You Liked</span>
                <div className="flex flex-row 2xl:flex-col flex-wrap justify-evenly 2xl:justify-start w-full">
                  <li className="flex items-center justify-between w-50 mt-1.5">
                    <div className="flex items-center gap-2">
                      <img
                        src="/assets/images/dribble.svg"
                        className="cursor-pointer"
                        alt=""
                      />
                      <span className="font-semibold cursor-pointer hover:text-blue-600">
                        Dribble
                      </span>
                    </div>
                    <AiOutlineDislike className="p-2 cursor-pointer dark:bg-[#3C4056] dark:hover:bg-[#505572] hover:bg-gray-200 bg-gray-200/50 text-4xl rounded" />
                  </li>
                  <li className="flex items-center justify-between w-50 mt-2">
                    <div className="flex items-center gap-2">
                      <img
                        src="/assets/images/uiux.svg"
                        className="cursor-pointer"
                        alt=""
                      />
                      <span className="font-semibold cursor-pointer hover:text-blue-600">
                        UI/UX Designs
                      </span>
                    </div>
                    <AiOutlineDislike className="p-2 cursor-pointer dark:bg-[#3C4056] dark:hover:bg-[#505572] hover:bg-gray-200 bg-gray-200/50 text-4xl rounded" />
                  </li>
                  <li className="flex items-center justify-between w-50 mt-2">
                    <div className="flex items-center gap-2">
                      <img
                        src="/assets/images/figmaupdate.svg"
                        className="cursor-pointer"
                        alt=""
                      />
                      <span className="font-semibold cursor-pointer hover:text-blue-600">
                        Dribble
                      </span>
                    </div>
                    <AiOutlineDislike className="p-2 cursor-pointer dark:bg-[#3C4056] dark:hover:bg-[#505572] hover:bg-gray-200 bg-gray-200/50 text-4xl rounded" />
                  </li>
                </div>
              </ul>
            </div>
            {/* mid */}
            <div className="flex flex-col gap-6 w-full 2xl:w-[52%] 2xl:overflow-auto 2xl:h-screen p-2 pb-10 border 2xl:border-0 border-[#CED2D4] dark:border-[#011743]">
              <div className="flex flex-col p-4 rounded border border-[#CED2D4] dark:border-[#011743]">
                <span className="text-lg font-bold mb-1">Create Post</span>
                <textarea
                  placeholder="What's on your mind?"
                  className="p-3 outline-none border border-[#CED2D4] dark:border-[#011743] h-22 rounded"
                ></textarea>
                <div className="flex flex-col gap-3 md:flex-row items-center justify-between mt-4">
                  <div className="flex items-center gap-2">
                    <RxImage className="p-2 text-4xl dark:bg-[#3C4056] dark:hover:bg-[#505572] bg-gray-200/80 rounded cursor-pointer hover:bg-gray-300/79" />
                    <AiOutlineLink className="p-2 text-4xl dark:bg-[#3C4056] dark:hover:bg-[#505572] bg-gray-200/80 rounded cursor-pointer hover:bg-gray-300/79" />
                    <IoVideocamOutline className="p-2 text-4xl dark:bg-[#3C4056] dark:hover:bg-[#505572] bg-gray-200/80 rounded cursor-pointer hover:bg-gray-300/79" />
                    <BsHash className="p-2 text-4xl dark:bg-[#3C4056] dark:hover:bg-[#505572] bg-gray-200/80 rounded cursor-pointer hover:bg-gray-300/79" />
                    <TbMapPinHeart className="p-2 text-4xl dark:bg-[#3C4056] dark:hover:bg-[#505572] bg-gray-200/80 rounded cursor-pointer hover:bg-gray-300/79" />
                    <MdOutlineMood className="p-2 text-4xl dark:bg-[#3C4056] dark:hover:bg-[#505572] bg-gray-200/80 rounded cursor-pointer hover:bg-gray-300/79" />
                  </div>
                  <div className="flex items-center gap-2">
                    <LuRefreshCcw className="p-2 text-4xl dark:bg-[#3C4056] dark:hover:bg-[#505572] bg-gray-200/80 rounded cursor-pointer hover:bg-gray-300/79" />
                    <GoTrash className="p-2 text-4xl dark:bg-[#3C4056] dark:hover:bg-[#505572] bg-gray-200/80 rounded cursor-pointer hover:bg-gray-300/79" />
                    <TbWorld className="p-2 text-4xl dark:bg-[#3C4056] dark:hover:bg-[#505572] bg-gray-200/80 rounded cursor-pointer hover:bg-gray-300/79" />
                    <div className="flex gap-2 cursor-pointer hover:bg-blue-700 items-center text-white rounded px-3 bg-blue-600 p-1.5">
                      <FaRegPlusSquare className="font-bold" />
                      <span>Share Post</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col p-4 rounded border border-[#CED2D4] dark:border-[#011743]">
                <span className="font-semibold text-lg">Popular Channels</span>
                <div className="flex flex-wrap gap-2 items-center justify-evenly mt-3">
                  <img src="/assets/images/channel-01.svg" alt="" />
                  <img src="/assets/images/channel-02.svg" alt="" />
                  <img src="/assets/images/channel-03.svg" alt="" />
                  <img src="/assets/images/channel-04.svg" alt="" />
                  <img src="/assets/images/channel-05.svg" alt="" />
                  <img src="/assets/images/channel-06.svg" alt="" />
                  <img src="/assets/images/channel-07.svg" alt="" />
                  <img src="/assets/images/channel-08.svg" alt="" />
                </div>
              </div>
              <div className="flex flex-col p-4 px-5 rounded border border-[#CED2D4] dark:border-[#011743]">
                <div className="flex flex-wrap items-center justify-center sm:justify-between">
                  <div className="flex items-center gap-2">
                    <img
                      src="/assets/images/avatar1.jpg"
                      className="w-10 rounded-full"
                      alt=""
                    />
                    <div>
                      <span className="font-semibold flex items-center gap-2 cursor-pointer hover:text-blue-500">
                        Richard Smith{" "}
                        <BsFillPatchCheckFill className="text-green-500 text-xl" />
                      </span>
                      <span className="flex items-center flex-col sm:flex-row text-md sm:gap-2 text-sky-500">
                        @richard442
                        <span className="flex items-center gap-2 text-gray-400">
                          <GoDotFill className="text-gray-400 hidden sm:block text-sm" />
                          United Kingdom
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="flex w-full justify-between sm:w-fit items-center gap-2">
                    <span className="text-gray-500">About 1 hr ago</span>
                    <BsThreeDotsVertical className="p-2 text-4xl border border-[#CED2D4] dark:border-[#011743] dark:hover:bg-[#011743] rounded cursor-pointer hover:bg-gray-100" />
                  </div>
                </div>
                <hr className="text-gray-300 dark:border-[#011743] my-3" />
                <div>
                  <p className="font-semibold">
                    "Believe in yourself and all that you are. Know that there
                    is something inside you that is greater than any obstacle.
                    <span className="text-[#0080FF] cursor-pointer">
                      {" "}
                      #MotivationMonday #Inspiration
                    </span>{" "}
                    🌟"
                  </p>
                </div>
                <div>
                  <div className="overflow-hidden h-60 mb-1 rounded">
                    <img
                      src="/assets/images/post1.jpg"
                      className="h-full w-full rounded my-2 object-cover  transition-transform duration-300 hover:scale-105 cursor-pointer"
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex items-center flex-wrap md:flex-nowrap overflow-hidden justify-around gap-1.5">
                  <img
                    src="/assets/images/post11.jpg"
                    className="w-33.5 rounded cursor-pointer"
                  />
                  <img
                    src="/assets/images/post12.jpg"
                    className="w-33.5 rounded cursor-pointer"
                  />
                  <img
                    src="/assets/images/post13.jpg"
                    className="w-33.5 rounded cursor-pointer"
                  />
                  <img
                    src="/assets/images/post14.jpg"
                    className="w-33.5 rounded cursor-pointer"
                  />
                </div>
                <div className="py-2 flex flex-wrap justify-center md:justify-between items-center">
                  <div className="flex items-center flex-wrap sm:flex-nowrap justify-center gap-2 sm:gap-3">
                    <div className="flex items-center gap-1.5">
                      <IoMdHeartEmpty />
                      <span className=" cursor-pointer hover:text-blue-500">
                        340K Likes
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <TbMessageDots />
                      <span className=" cursor-pointer hover:text-blue-500">
                        {" "}
                        45 Comments
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <RiShareForwardLine />
                      <span className=" cursor-pointer hover:text-blue-500">
                        28 Share
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <IoHeartSharp className="p-2 text-4xl text-red-500 hover:bg-gray-100 cursor-pointer rounded" />
                    <LuShare2 className="p-2 text-4xl hover:bg-gray-100 cursor-pointer rounded" />
                    <TbMessageStar className="p-2 text-4xl hover:bg-gray-100 cursor-pointer rounded" />
                    <IoIosBookmark className="text-yellow-500 p-2 text-4xl hover:bg-gray-100 cursor-pointer rounded" />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <img
                    src="/assets/images/you.jpg"
                    className="w-10 rounded-full"
                    alt=""
                  />
                  <div className="border w-[100%] p-2 px-3 rounded dark:border-[#011743]  border-gray-300">
                    <input
                      type="text"
                      className="w-full text-gray-400 h-full border-none outline-none"
                      placeholder="Enter Comments"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col p-4 px-5 rounded border border-[#CED2D4] dark:border-[#011743]">
                <div className="flex flex-wrap items-center justify-center sm:justify-between">
                  <div className="flex items-center gap-2">
                    <img
                      src="/assets/images/avatar2.jpg"
                      className="w-10 rounded-full"
                      alt=""
                    />
                    <div>
                      <span className="font-semibold flex items-center gap-2 cursor-pointer hover:text-blue-500">
                        Jason Heier{" "}
                        <BsFillPatchCheckFill className="text-green-500 text-xl" />
                      </span>
                      <span className="flex items-center flex-col sm:flex-row text-md gap-2 text-sky-500">
                        @jason118
                        <span className="flex items-center gap-2 text-gray-400">
                          {" "}
                          <GoDotFill className="text-gray-400 hidden sm:block text-sm" />
                          United Kingdom
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="flex w-full justify-between sm:w-fit items-center gap-2">
                    <span className="text-gray-500">About 1 hr ago</span>
                    <BsThreeDotsVertical className="p-2 text-4xl border border-[#CED2D4] dark:border-[#011743] dark:hover:bg-[#011743] rounded cursor-pointer hover:bg-gray-100" />
                  </div>
                </div>
                <hr className="text-gray-300 dark:border-[#011743] my-3" />
                <div>
                  <p className="font-semibold mb-1">
                    "Believe in yourself and all that you are. Know that there
                    is something inside you that is greater than any obstacle.
                    <span className="text-[#0080FF] cursor-pointer">
                      {" "}
                      #MotivationMonday #Inspiration
                    </span>{" "}
                    🌟"
                  </p>
                </div>
                <div className="flex flex-col shadow shadow-gray-300 rounded">
                  <div className="overflow-hidden">
                    <img
                      src="/assets/images/post2.jpg"
                      className="h-full w-full rounded-t object-cover transition-transform duration-300 hover:scale-110 cursor-pointer"
                      alt=""
                    />
                  </div>

                  <div className="flex flex-col px-2 py-1">
                    <span className="font-semibold cursor-pointer hover:text-blue-600">
                      Drinking water boosts skin health and beauty. Stay
                      hydrated!💧
                    </span>
                    <span className="cursor-pointer hover:text-blue-600">
                      Health.com
                    </span>
                  </div>
                </div>
                <div className="py-2 flex flex-wrap justify-center md:justify-between items-center">
                  <div className="flex items-center flex-wrap sm:flex-nowrap justify-center gap-2 sm:gap-3">
                    <div className="flex items-center gap-1.5">
                      <IoMdHeartEmpty />
                      <span className=" cursor-pointer hover:text-blue-500">
                        340K Likes
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <TbMessageDots />
                      <span className=" cursor-pointer hover:text-blue-500">
                        {" "}
                        45 Comments
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <RiShareForwardLine />
                      <span className=" cursor-pointer hover:text-blue-500">
                        28 Share
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <IoHeartSharp className="p-2 text-4xl text-red-500 hover:bg-gray-100 cursor-pointer rounded" />
                    <LuShare2 className="p-2 text-4xl hover:bg-gray-100 cursor-pointer rounded" />
                    <TbMessageStar className="p-2 text-4xl hover:bg-gray-100 cursor-pointer rounded" />
                    <IoIosBookmark className="text-yellow-500 p-2 text-4xl hover:bg-gray-100 cursor-pointer rounded" />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <img
                    src="/assets/images/you.jpg"
                    className="w-10 rounded-full"
                    alt=""
                  />
                  <div className="border w-[100%] p-2 px-3 rounded dark:border-[#011743]  border-gray-300">
                    <input
                      type="text"
                      className="w-full text-gray-400 h-full border-none outline-none"
                      placeholder="Enter Comments"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col p-4 px-5 rounded border border-[#CED2D4] dark:border-[#011743]">
                <div className="flex flex-col sm:flex-row items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img
                      src="/assets/images/avatar4.jpg"
                      className="w-10 rounded-full"
                      alt=""
                    />
                    <div>
                      <span className="font-semibold flex items-center gap-2 cursor-pointer hover:text-blue-500">
                        Sophie Headrick{" "}
                        <BsFillPatchCheckFill className="text-green-500 text-xl" />
                      </span>
                      <span className="flex items-center flex-col sm:flex-row text-md gap-2 text-sky-500">
                        @sophie241
                        <span className="flex items-center gap-2 text-gray-400">
                          <GoDotFill className="text-gray-400 hidden sm:block text-sm" />
                          United Kingdom
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 w-full justify-between sm:w-fit">
                    <span className="text-gray-500">About 1 hr ago</span>
                    <BsThreeDotsVertical className="p-2 text-4xl border border-[#CED2D4] dark:border-[#011743] dark:hover:bg-[#011743] rounded cursor-pointer hover:bg-gray-100" />
                  </div>
                </div>
                <hr className="text-gray-300 dark:border-[#011743] my-3" />
                <div>
                  <p className="font-semibold mb-1">
                    "Believe in yourself and all that you are. Know that there
                    is something inside you that is greater than any obstacle.
                    <span className="text-[#0080FF] cursor-pointer">
                      {" "}
                      #MotivationMonday #Inspiration
                    </span>{" "}
                    🌟"
                  </p>
                </div>
                <div className="flex flex-col border dark:border-[#011743] rounded">
                  <div className="overflow-hidden">
                    <img
                      src="/assets/images/post3.jpg"
                      className="h-full w-full rounded-t object-cover transition-transform duration-300 hover:scale-110 cursor-pointer"
                      alt=""
                    />
                  </div>

                  <div className="flex flex-col px-2 py-1">
                    <span className="font-semibold cursor-pointer hover:text-blue-600">
                      Drinking water boosts skin health and beauty. Stay
                      hydrated!💧
                    </span>
                    <span className="cursor-pointer hover:text-blue-600">
                      Health.com
                    </span>
                  </div>
                </div>
                <div className="py-2 flex flex-wrap justify-center md:justify-between items-center">
                  <div className="flex items-center flex-wrap sm:flex-nowrap justify-center gap-2 sm:gap-3">
                    <div className="flex items-center gap-1.5">
                      <IoMdHeartEmpty />
                      <span className=" cursor-pointer hover:text-blue-500">
                        340K Likes
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <TbMessageDots />
                      <span className=" cursor-pointer hover:text-blue-500">
                        {" "}
                        45 Comments
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <RiShareForwardLine />
                      <span className=" cursor-pointer hover:text-blue-500">
                        28 Share
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <IoHeartSharp className="p-2 text-4xl text-red-500 hover:bg-gray-100 cursor-pointer rounded" />
                    <LuShare2 className="p-2 text-4xl hover:bg-gray-100 cursor-pointer rounded" />
                    <TbMessageStar className="p-2 text-4xl hover:bg-gray-100 cursor-pointer rounded" />
                    <IoIosBookmark className="text-yellow-500 p-2 text-4xl hover:bg-gray-100 cursor-pointer rounded" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-start gap-2 mb-3">
                    <img
                      src="/assets/images/avatar2.jpg"
                      className="w-10 rounded-full cursor-pointer"
                      alt=""
                    />
                    <div className="bg-gray-100 dark:bg-[#0C0C20] p-2 rounded">
                      <p className="font-semibold cursor-pointer hover:text-blue-500">
                        Frank Hoffman{" "}
                        <span className="text-gray-400"> 12:45 PM</span>
                      </p>
                      <p className="text-gray-500 dark:text-[#DEE2E6]">
                        Congratulations on the launch! I've been eagerly waiting
                        for this product, and the special discount makes it even
                        more exciting.
                      </p>
                      <span className="flex items-center gap-1 cursor-pointer hover:text-blue-600">
                        <RiShareForwardLine /> Reply
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 mb-3 ml-7">
                    <img
                      src="/assets/images/avatar4.jpg"
                      className="w-10 rounded-full cursor-pointer"
                      alt=""
                    />
                    <div className="bg-gray-100 dark:bg-[#0C0C20] p-2 rounded w-full">
                      <p className="font-semibold cursor-pointer hover:text-blue-500">
                        Sophie Headrick{" "}
                        <span className="text-gray-400"> 12:15 PM</span>
                      </p>
                      <p className="text-gray-500 dark:text-[#DEE2E6]">
                        Thank you so much for your enthusiasm and support!
                      </p>
                      <span className="flex items-center gap-1 cursor-pointer hover:text-blue-600">
                        <RiShareForwardLine /> Reply
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 mb-3">
                    <img
                      src="/assets/images/avatar3.jpg"
                      className="w-10 rounded-full cursor-pointer"
                      alt=""
                    />
                    <div className="bg-gray-100 dark:bg-[#0C0C20] p-2 rounded">
                      <p className="font-semibold cursor-pointer hover:text-blue-500">
                        Samuel Butler{" "}
                        <span className="text-gray-400"> 12:00 PM</span>
                      </p>
                      <p className="text-gray-500 dark:text-[#DEE2E6]">
                        So thrilled to see this product finally launched! I've
                        heard amazing things about it and am excited to see how
                        it lives up to the hype.
                      </p>
                      <span className="flex items-center gap-1 cursor-pointer hover:text-blue-600">
                        <RiShareForwardLine /> Reply
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <img
                    src="/assets/images/you.jpg"
                    className="w-10 rounded-full"
                    alt=""
                  />
                  <div className="border w-[100%] p-2 px-3 rounded dark:border-[#011743] border-gray-300">
                    <input
                      type="text"
                      className="w-full text-gray-400 h-full border-none outline-none"
                      placeholder="Enter Comments"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* right */}
            <div className=" w-full 2xl:w-[22%] flex flex-col gap-6 2xl:overflow-auto 2xl:sticky top-0 h-screen p-1 pb-10 border 2xl:border-0 border-[#CED2D4] dark:border-[#011743]">
              <div className="rounded border border-[#CED2D4] dark:border-[#011743] p-4">
                <span className="font-bold text-xl">Peoples</span>
                <div className="flex items-center justify-between mt-1">
                  <div className="flex items-center gap-2">
                    <img
                      src="/assets/images/avatar9.jpg"
                      className="w-10 rounded-full"
                      alt=""
                    />
                    <div className="flex flex-col">
                      <span className="flex items-center gap-1 font-semibold">
                        Anthony Lewis{" "}
                        <BsFillPatchCheckFill className="text-green-500" />
                      </span>
                      <span className="text-sm text-gray-500">
                        United States
                      </span>
                    </div>
                  </div>
                  <TbUserX className="p-2 text-4xl bg-gray-100 rounded dark:bg-[#3C4056] dark:hover:bg-[#505572] cursor-pointer hover:bg-gray-200" />
                </div>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-2">
                    <img
                      src="/assets/images/avatar8.jpg"
                      className="w-10 rounded-full"
                      alt=""
                    />
                    <div className="flex flex-col">
                      <span className="flex items-center gap-1 font-semibold">
                        Harvey Smith{" "}
                      </span>
                      <span className="text-sm text-gray-500">Ukrain</span>
                    </div>
                  </div>
                  <TbUserX className="p-2 text-4xl bg-gray-100 rounded dark:bg-[#3C4056] dark:hover:bg-[#505572] cursor-pointer hover:bg-gray-200" />
                </div>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-2">
                    <img
                      src="/assets/images/avatar7.jpg"
                      className="w-10 rounded-full"
                      alt=""
                    />
                    <div className="flex flex-col">
                      <span className="flex items-center gap-1 font-semibold">
                        Stephan Peralt{" "}
                      </span>
                      <span className="text-sm text-gray-500">Isreal</span>
                    </div>
                  </div>
                  <TbUserX className="p-2 text-4xl bg-gray-100 rounded dark:bg-[#3C4056] dark:hover:bg-[#505572] cursor-pointer hover:bg-gray-200" />
                </div>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-2">
                    <img
                      src="/assets/images/avatar6.jpg"
                      className="w-10 rounded-full"
                      alt=""
                    />
                    <div className="flex flex-col">
                      <span className="flex items-center gap-1 font-semibold">
                        Doglas Martini{" "}
                      </span>
                      <span className="text-sm text-gray-500">Belgium</span>
                    </div>
                  </div>
                  <TbUserX className="p-2 text-4xl bg-gray-100 rounded dark:bg-[#3C4056] dark:hover:bg-[#505572] cursor-pointer hover:bg-gray-200" />
                </div>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-2">
                    <img
                      src="/assets/images/avatar3.jpg"
                      className="w-10 rounded-full"
                      alt=""
                    />
                    <div className="flex flex-col">
                      <span className="flex items-center gap-1 font-semibold">
                        Brian Villalobos{" "}
                        <BsFillPatchCheckFill className="text-green-500" />
                      </span>
                      <span className="text-sm text-gray-500">
                        United Kingdom
                      </span>
                    </div>
                  </div>
                  <TbUserX className="p-2 text-4xl bg-gray-100 rounded dark:bg-[#3C4056] dark:hover:bg-[#505572] cursor-pointer hover:bg-gray-200" />
                </div>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-2">
                    <img
                      src="/assets/images/avatar1.jpg"
                      className="w-10 rounded-full"
                      alt=""
                    />
                    <div className="flex flex-col">
                      <span className="flex items-center gap-1 font-semibold">
                        Linda Ray{" "}
                      </span>
                      <span className="text-sm text-gray-500">Argentina</span>
                    </div>
                  </div>
                  <TbUserX className="p-2 text-4xl bg-gray-100 rounded cursor-pointer dark:bg-[#3C4056] dark:hover:bg-[#505572] hover:bg-gray-200" />
                </div>
                <div className="p-2 border flex justify-center rounded mt-3 cursor-pointer dark:border-[#011743] dark:hover:bg-[#011743] hover:bg-gray-100 border-gray-300">
                  <span className="flex items-center gap-2 font-semibold">
                    View All <FaArrowRight />
                  </span>
                </div>
              </div>
              <div className="rounded border border-[#CED2D4] dark:border-[#011743] p-4">
                <span className="font-bold text-xl">Saved Feeds</span>
                <div className="bg-gray-100 dark:bg-[#030318] rounded p-2.5 py-3.5 mt-3 flex flex-col">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <img src="/assets/images/feeds-01.svg" alt="" />
                      <span className="font-semibold">World Health</span>
                    </div>
                    <IoIosBookmark className="text-yellow-500" />
                  </div>
                  <span className="">
                    Retail investor party continues even as
                  </span>
                </div>
                <div className="bg-gray-100 dark:bg-[#030318] rounded p-2.5 py-3.5 mt-3 flex flex-col">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <img src="/assets/images/feeds-02.svg" alt="" />
                      <span className="font-semibold">F3 Tech</span>
                    </div>
                    <IoIosBookmark className="text-yellow-500" />
                  </div>
                  <span className="">
                    Ipad Air (2020) vs Samsung Galsxy Tab
                  </span>
                </div>
                <div className="bg-gray-100 dark:bg-[#030318] rounded p-2.5 py-3.5 mt-3 flex flex-col">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <img src="/assets/images/feeds-03.svg" alt="" />
                      <span className="font-semibold">Fstoppers</span>
                    </div>
                    <IoIosBookmark className="text-yellow-500" />
                  </div>
                  <span className="">
                    Beyond capital gains tax! Top 50 stock
                  </span>
                </div>
                <div className="bg-gray-100 dark:bg-[#030318] rounded p-2.5 py-3.5 mt-3 flex flex-col">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <img src="/assets/images/feeds-04.svg" alt="" />
                      <span className="font-semibold">Evernote</span>
                    </div>
                    <IoIosBookmark className="text-yellow-500" />
                  </div>
                  <span className="">Sony Just Destroyed the Competition</span>
                </div>
                <div className="p-2 border flex justify-center rounded mt-3 cursor-pointer dark:border-[#011743] dark:hover:bg-[#011743] hover:bg-gray-100 border-gray-300">
                  <span className="flex items-center gap-2 font-semibold">
                    View All <FaArrowRight />
                  </span>
                </div>
              </div>
              <div className="rounded border border-[#CED2D4] dark:border-[#011743] p-4 py-5 flex flex-col gap-2">
                <span className="font-bold text-xl">Trending Hashtags</span>
                <span className="cursor-pointer text-[#00A0FF] text-sm">
                  #HealthTips #Wellness #Motivation #Inspiration
                </span>
              </div>
              <div className="rounded border border-[#CED2D4] dark:border-[#011743] p-4 py-5 flex flex-col items-center gap-2">
                <div className="h-fit w-fit rounded overflow-hidden ">
                  <img
                    src="/assets/images/social-feed-04.jpg"
                    className="rounded object-cover  transition-transform duration-300 hover:scale-110 cursor-pointer"
                    alt=""
                  />
                </div>
                <span className="font-semibold text-center cursor-pointer hover:text-blue-500">
                  Enjoy Unlimited Access on a small price monthly.
                </span>
                <div className="p-2 border flex justify-center rounded mt-1 cursor-pointer dark:border-[#011743] dark:hover:bg-[#011743] hover:bg-gray-100 border-gray-300">
                  <span className="flex items-center gap-2 font-semibold">
                    Upgrade Now <FaArrowRight />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Navbar>
    </div>
  );
}

export default SocialFeed;
