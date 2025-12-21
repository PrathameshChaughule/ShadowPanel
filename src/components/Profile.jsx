import React, { useEffect, useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { MdLogout, MdOutlineMailOutline } from "react-icons/md";
import { PiLifebuoy } from "react-icons/pi";
import { RiUser3Line } from "react-icons/ri";
import { TbBrandFeedly } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import { doSignOut } from "../firebase/auth";
import { ThreeCircles } from "react-loader-spinner";

function Profile() {
  const navigate = useNavigate();
  const userDetails = JSON.parse(localStorage.getItem("userData"));
  return (
    <div className="bg-white shadow-sm z-100 dark:bg-[#030318] shadow-gray-400 rounded p-4 w-80 h-fit absolute right-4 mt-1">
      {userDetails ? (
        <>
          <div className="px-2 rounded text-center text-2xl mb-2.5 bg-[#01B664]">
            <span className="font-semibold text-white">{userDetails.role}</span>
          </div>
          <div className="flex items-center rounded justify-between p-4 px-3 bg-[#F5F6FA] dark:bg-[#0C0C20]">
            <div className="flex items-center gap-3">
              <div className="p-[9px] px-[11px] flex items-center rounded-full justify-center bg-amber-400/40 dark:bg-amber-300">
                <p className="font-bold w-full h-full text-amber-600 text-xl">
                  {userDetails.firstName.charAt(0)}
                  {userDetails.lastName.charAt(0)}
                </p>
              </div>
              <div className="flex flex-col">
                <div className="font-semibold flex flex-wrap gap-1 leading-4">
                  <span>{userDetails.firstName}</span>
                  <span>{userDetails.lastName}</span>
                </div>
                <span className="dark:text-[#D6DADF]">{userDetails.email}</span>
              </div>
            </div>
          </div>
          <ul className="p-3 px-4 ">
            <Link
              to="/settings"
              className="py-1 dark:text-[#D6DADF] cursor-pointer hover:text-blue-500 flex gap-1 font-medium text-gray-700 items-center"
            >
              <RiUser3Line />
              Profile Settings
            </Link>
            <Link
              to="/settings"
              className="py-1 dark:text-[#D6DADF] cursor-pointer hover:text-blue-500 flex gap-1 font-medium text-gray-700 items-center"
            >
              <IoSettingsOutline />
              Settings
            </Link>
            <Link
              to="/email"
              className="py-1 dark:text-[#D6DADF] cursor-pointer hover:text-blue-500 flex gap-1 font-medium text-gray-700 items-center"
            >
              <MdOutlineMailOutline />
              Mail Box
            </Link>
            <hr className="my-2 border-gray-400" />
            <Link
              to="/activityLogs"
              className="py-1 dark:text-[#D6DADF] cursor-pointer hover:text-blue-500 flex gap-1 font-medium text-gray-700 items-center"
            >
              <PiLifebuoy />
              Activity Log
            </Link>
            <Link
              to="/social"
              className="py-1 dark:text-[#D6DADF] cursor-pointer hover:text-blue-500 flex gap-1 font-medium text-gray-700 items-center"
            >
              <TbBrandFeedly />
              Social Feeds
            </Link>
            <hr className="my-2 border-gray-400" />
            <button
              onClick={() => {
                doSignOut().then(() => {
                  navigate("/login");
                });
              }}
              className="py-1 cursor-pointer hover:text-red-700 flex gap-1 font-medium text-[#FF1A1A] items-center"
            >
              <MdLogout />
              Sign Out
            </button>
          </ul>
        </>
      ) : (
        <div className="w-full h-full flex flex-col justify-center items-center">
          <ThreeCircles
            visible={true}
            height="100"
            width="100"
            color="#2563EB"
            ariaLabel="three-circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
          <button
            onClick={() => {
              doSignOut().then(() => {
                navigate("/login");
              });
            }}
            className="py-1 cursor-pointer hover:text-red-700 flex gap-1 font-medium text-[#FF1A1A] items-center"
          >
            <MdLogout />
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}

export default Profile;
