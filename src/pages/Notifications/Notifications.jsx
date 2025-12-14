import React from "react";
import Navbar from "../../components/Navbar";
import { IoMdCheckmark } from "react-icons/io";
import { HiOutlineTrash } from "react-icons/hi";
import { FiClock } from "react-icons/fi";

function Notifications() {
  return (
    <div>
      <Navbar>
        <div className="flex flex-col gap-5 m-6 bg-white dark:bg-[#030318] rounded p-3 sm:p-[24px]">
          <div className="flex text-sm p-2 justify-around sm:justify-between">
            <h4 className="md:text-[1.125rem] font-bold">All Notifications</h4>
            <p>
              Home &gt;
              <span className="md:text-[1rem] font-medium">
                {" "}
                All Notifications
              </span>
            </p>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-semibold">Total Unread : 02</span>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 font-semibold px-2.5 py-1 rounded dark:bg-[#3C4056] dark:hover:bg-[#3C4056]/80 bg-[#E6EAEC] cursor-pointer hover:bg-[#E6EAEC]/70">
                <IoMdCheckmark />
                <span>Mark all as read</span>
              </div>
              <div className="flex items-center gap-1 font-semibold px-2.5 py-1 rounded bg-[#FF0000] cursor-pointer hover:bg-[#d10101] text-white">
                <HiOutlineTrash />
                <span>Delete all</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="border p-3.5 rounded border-[#CED2D4] dark:border-[#11112F] hover:-translate-y-1 transition-all hover:shadow-md hover:shadow-gray-300 dark:hover:shadow-[#11112F] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src="/assets/images/avatar2.jpg"
                  className="w-12 rounded-full"
                  alt=""
                />
                <div>
                  <p className="font-semibold">
                    <span className="hover:text-blue-600 cursor-pointer">
                      New user registered{" "}
                    </span>
                    <span className="font-normal text-gray-600 dark:text-[#8090A7]">
                      A new user (emma@example.com) signed up at{" "}
                    </span>
                    <span className="hover:text-blue-600 cursor-pointer">
                      09:23 AM
                    </span>
                  </p>
                  <span className="text-sm text-gray-600 dark:text-[#8090A7] flex items-center gap-1">
                    <FiClock /> Just Now
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between gap-2">
                <div className="rounded bg-[#E6EAEC] p-3 py-1 font-semibold cursor-pointer hover:bg-[#E6EAEC]/70 dark:bg-[#3C4056] dark:hover:bg-[#3C4056]/80">
                  <span>Decline</span>
                </div>
                <div className="rounded bg-[#3550DC] p-3 py-1 font-semibold cursor-pointer text-white hover:bg-[#1531bb] ">
                  <span>Accept</span>
                </div>
              </div>
            </div>
            <div className="group border p-3.5 rounded border-[#CED2D4] dark:border-[#11112F] hover:-translate-y-1 transition-all hover:shadow-md hover:shadow-gray-300 dark:hover:shadow-[#11112F] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src="/assets/images/avatar4.jpg"
                  className="w-12 rounded-full"
                  alt=""
                />
                <div>
                  <p className="font-semibold">
                    <span className="hover:text-blue-600 cursor-pointer">
                      Elizabeth Olsen{" "}
                    </span>
                    <span className="font-normal text-gray-600 dark:text-[#8090A7]">
                      added a new product category{" "}
                    </span>
                    <span className="hover:text-blue-600 cursor-pointer">
                      Desktop Computers
                    </span>
                  </p>
                  <span className="text-sm text-gray-600 dark:text-[#8090A7] flex items-center gap-1">
                    <FiClock /> 4 min ago
                  </span>
                </div>
              </div>
              <div className="mr-3 hidden group-hover:block">
                <div className="p-2 rounded-full text-red-600 bg-red-600/20 cursor-pointer hover:bg-red-600 hover:text-white transition-all">
                  <HiOutlineTrash />
                </div>
              </div>
            </div>
            <div className="group border p-3.5 rounded border-[#CED2D4] dark:border-[#11112F] hover:-translate-y-1 transition-all hover:shadow-md hover:shadow-gray-300 dark:hover:shadow-[#11112F] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src="/assets/images/avatar5.jpg"
                  className="w-12 rounded-full"
                  alt=""
                />
                <div>
                  <p className="font-semibold">
                    <span className="hover:text-blue-600 cursor-pointer">
                      Minerva Rameriz{" "}
                    </span>
                    <span className="font-normal text-gray-600 dark:text-[#8090A7]">
                      added a new sales list for{" "}
                    </span>
                    <span className="hover:text-blue-600 cursor-pointer">
                      January Month
                    </span>
                  </p>
                  <span className="text-sm text-gray-600 dark:text-[#8090A7] flex items-center gap-1">
                    <FiClock /> 6 min ago
                  </span>
                </div>
              </div>
              <div className="mr-3 hidden group-hover:block">
                <div className="p-2 rounded-full text-red-600 bg-red-600/20 cursor-pointer hover:bg-red-600 hover:text-white transition-all">
                  <HiOutlineTrash />
                </div>
              </div>
            </div>
            <div className="group border p-3.5 rounded border-[#CED2D4] dark:border-[#11112F] hover:-translate-y-1 transition-all hover:shadow-md hover:shadow-gray-300 dark:hover:shadow-[#11112F] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src="/assets/images/avatar7.jpg"
                  className="w-12 rounded-full"
                  alt=""
                />
                <div>
                  <p className="font-semibold">
                    <span className="hover:text-blue-600 cursor-pointer">
                      Lesley Grauer{" "}
                    </span>
                    <span className="font-normal text-gray-600 dark:text-[#8090A7]">
                      has updated invoice{" "}
                    </span>
                    <span className="hover:text-blue-600 cursor-pointer">
                      #987654
                    </span>
                  </p>
                  <span className="text-sm text-gray-600 dark:text-[#8090A7] flex items-center gap-1">
                    <FiClock /> 12 min ago
                  </span>
                </div>
              </div>
              <div className="mr-3 hidden group-hover:block">
                <div className="p-2 rounded-full text-red-600 bg-red-600/20 cursor-pointer hover:bg-red-600 hover:text-white transition-all">
                  <HiOutlineTrash />
                </div>
              </div>
            </div>
            <div className="group border p-3.5 rounded border-[#CED2D4] dark:border-[#11112F] hover:-translate-y-1 transition-all hover:shadow-md hover:shadow-gray-300 dark:hover:shadow-[#11112F] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src="/assets/images/avatar8.jpg"
                  className="w-12 rounded-full"
                  alt=""
                />
                <div>
                  <p className="font-semibold">
                    <span className="hover:text-blue-600 cursor-pointer">
                      Carl Evans{" "}
                    </span>
                    <span className="font-normal text-gray-600 dark:text-[#8090A7]">
                      adjust the time for{" "}
                    </span>
                    <span className="hover:text-blue-600 cursor-pointer">
                      Management Project
                    </span>
                  </p>
                  <span className="text-sm text-gray-600 dark:text-[#8090A7] flex items-center gap-1">
                    <FiClock /> 2 days ago
                  </span>
                </div>
              </div>
              <div className="mr-3 hidden group-hover:block">
                <div className="p-2 rounded-full text-red-600 bg-red-600/20 cursor-pointer hover:bg-red-600 hover:text-white transition-all">
                  <HiOutlineTrash />
                </div>
              </div>
            </div>
            <div className="group border p-3.5 rounded border-[#CED2D4] dark:border-[#11112F] hover:-translate-y-1 transition-all hover:shadow-md hover:shadow-gray-300 dark:hover:shadow-[#11112F] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src="/assets/images/avatar9.jpg"
                  className="w-12 rounded-full"
                  alt=""
                />
                <div>
                  <p className="font-semibold">
                    <span className="hover:text-blue-600 cursor-pointer">
                      Alex Johnson{" "}
                    </span>
                    <span className="font-normal text-gray-600 dark:text-[#8090A7]">
                      was granted admin access{" "}
                    </span>
                  </p>
                  <span className="text-sm text-gray-600 dark:text-[#8090A7] flex items-center gap-1">
                    <FiClock /> 1 months ago
                  </span>
                </div>
              </div>
              <div className="mr-3 hidden group-hover:block">
                <div className="p-2 rounded-full text-red-600 bg-red-600/20 cursor-pointer hover:bg-red-600 hover:text-white transition-all">
                  <HiOutlineTrash />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Navbar>
    </div>
  );
}

export default Notifications;
