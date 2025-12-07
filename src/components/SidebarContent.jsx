import React from "react";
import { useState, useEffect } from "react";
import { CiLock } from "react-icons/ci";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";
import { HiOutlineViewGridAdd } from "react-icons/hi";
import { LuUserCog, LuUsersRound } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { PiCirclesThree } from "react-icons/pi";
import {
  TbArrowForwardUpDouble,
  TbBellDown,
  TbChecklist,
  TbError404,
  TbFilePower,
  TbHelpTriangle,
  TbLayoutDistributeVertical,
  TbLayoutNavbarCollapse,
  TbSettingsCog,
  TbTopologyBus,
  TbUserBolt,
  TbUsersGroup,
} from "react-icons/tb";
import { TiEqualsOutline } from "react-icons/ti";
import { VscDash } from "react-icons/vsc";
import { NavLink, useLocation } from "react-router-dom";

function SidebarContent() {
  const [openMenu, setOpenMenu] = useState(null);
  const location = useLocation();

  const toggle = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };
  useEffect(() => {
    if (
      location.pathname.startsWith("/") ||
      location.pathname.startsWith("/user")
    ) {
      setOpenMenu("dashboard");
    }

    if (
      location.pathname.startsWith("/calender") ||
      location.pathname.startsWith("/chat") ||
      location.pathname.startsWith("/contacts") ||
      location.pathname.startsWith("/email") ||
      location.pathname.startsWith("/file") ||
      location.pathname.startsWith("/invoice") ||
      location.pathname.startsWith("/kanban") ||
      location.pathname.startsWith("/notes") ||
      location.pathname.startsWith("/projects") ||
      location.pathname.startsWith("/search") ||
      location.pathname.startsWith("/social") ||
      location.pathname.startsWith("/todo") ||
      location.pathname.startsWith("/videocall") ||
      location.pathname.startsWith("/voicecall")
    ) {
      setOpenMenu("apps");
    }
  }, [location.pathname]);
  return (
    <>
      <div className="dark:text-[#a1a2a7]">
        <div>
          <span className="text-sm font-semibold">Main</span>

          {/* DASHBOARD DROPDOWN BUTTON */}
          <button
            onClick={() => {
              toggle("dashboard");
            }}
            className={`flex items-center gap-2 mt-2 px-4 p-2 w-full
              hover:text-blue-600 dark:text-[#8B9CB3] cursor-pointer transition rounded-lg justify-between
              ${
                openMenu === "dashboard"
                  ? "text-indigo-600 dark:text-[#D8D8DD] dark:bg-[#080B2C] dark:border-indigo-600 font-semibold bg-blue-100 border-l-[3px]"
                  : "text-gray-600"
              }`}
          >
            <span className="flex items-center gap-3">
              <HiOutlineViewGridAdd />
              <span>Dashboard</span>
            </span>

            {openMenu === "dashboard" ? (
              <FaChevronDown className="text-[11px] font-normal" />
            ) : (
              <FaChevronRight className="text-[11px] font-normal" />
            )}
          </button>
          {/* DROPDOWN CONTENT */}
          {openMenu === "dashboard" && (
            <div className="ml-8 mt-1 text-sm">
              <NavLink
                to="/"
                className={({
                  isActive,
                }) => `block text-left dark:text-[#8B9CB3] hover:text-blue-600 p-1 rounded flex items-center cursor-pointer 
              ${
                isActive
                  ? "text-blue-600 dark:text-blue-600 font-semibold"
                  : "text-gray-600"
              }`}
              >
                <VscDash className="text-2xl font-extrabold" />
                Admin Dashboard
              </NavLink>

              <NavLink
                to="/user"
                className={({
                  isActive,
                }) => `block text-left p-1 dark:text-[#8B9CB3] hover:text-blue-600 rounded flex items-center cursor-pointer 
              ${
                isActive
                  ? "text-blue-600 dark:text-blue-600 font-semibold"
                  : "text-gray-600"
              }`}
              >
                <VscDash className="text-2xl" />
                User Dashboard
              </NavLink>
            </div>
          )}

          {/* APPLICATION DROPDOWN BUTTON */}
          <button
            onClick={() => {
              toggle("apps");
            }}
            className={`flex items-center gap-2 px-4 p-2 w-full
              hover:text-blue-600 dark:text-[#8B9CB3] cursor-pointer transition rounded-lg justify-between
              ${
                openMenu === "apps"
                  ? "text-indigo-600 dark:text-[#D8D8DD] dark:bg-[#080B2C] dark:border-indigo-600 font-semibold bg-blue-100 border-l-[3px]"
                  : "text-gray-600"
              }`}
          >
            <span className="flex items-center gap-3">
              <TiEqualsOutline className="text-[23px]" />
              <span>Application</span>
            </span>

            {openMenu === "apps" ? (
              <FaChevronDown className="text-[11px] font-normal" />
            ) : (
              <FaChevronRight className="text-[11px] font-normal" />
            )}
          </button>
          {/* DROPDOWN CONTENT */}
          {openMenu === "apps" && (
            <div className="ml-8 mt-1 text-sm space-y-1">
              <NavLink
                to="/projects"
                className={({
                  isActive,
                }) => `block text-left p-1 dark:text-[#8B9CB3] hover:text-blue-600 rounded flex items-center cursor-pointer
              ${
                isActive
                  ? "text-blue-600 dark:text-blue-600 font-semibold"
                  : "text-gray-600"
              }`}
              >
                <VscDash className="text-2xl font-extrabold" />
                Projects
              </NavLink>
              <NavLink
                to="/chat"
                className={({
                  isActive,
                }) => `block text-left p-1 dark:text-[#8B9CB3] hover:text-blue-600 rounded flex items-center cursor-pointer 
              ${
                isActive
                  ? "text-blue-600 dark:text-blue-600 font-semibold"
                  : "text-gray-600"
              }`}
              >
                <VscDash className="text-2xl font-extrabold" />
                Chat
              </NavLink>
              <NavLink
                to="/calender"
                className={({
                  isActive,
                }) => `block text-left p-1 dark:text-[#8B9CB3] hover:text-blue-600 rounded flex items-center cursor-pointer 
              ${
                isActive
                  ? "text-blue-600 dark:text-blue-600 font-semibold"
                  : "text-gray-600"
              }`}
              >
                <VscDash className="text-2xl font-extrabold" />
                Calender
              </NavLink>
              <NavLink
                to="/invoice"
                className={({
                  isActive,
                }) => `block text-left p-1 dark:text-[#8B9CB3] hover:text-blue-600 rounded flex items-center cursor-pointer 
              ${
                isActive
                  ? "text-blue-600 dark:text-blue-600 font-semibold"
                  : "text-gray-600"
              }`}
              >
                <VscDash className="text-2xl font-extrabold" />
                Invoices
              </NavLink>
              <NavLink
                to="/file"
                className={({
                  isActive,
                }) => `block text-left p-1 dark:text-[#8B9CB3] hover:text-blue-600 rounded flex items-center cursor-pointer 
              ${
                isActive
                  ? "text-blue-600 dark:text-blue-600 font-semibold"
                  : "text-gray-600"
              }`}
              >
                <VscDash className="text-2xl font-extrabold" />
                File Manager
              </NavLink>
              <NavLink
                to="/notes"
                className={({
                  isActive,
                }) => `block text-left p-1 dark:text-[#8B9CB3] hover:text-blue-600 rounded flex items-center cursor-pointer 
              ${
                isActive
                  ? "text-blue-600 dark:text-blue-600 font-semibold"
                  : "text-gray-600"
              }`}
              >
                <VscDash className="text-2xl font-extrabold" />
                Notes
              </NavLink>
              <NavLink
                to="/todo"
                className={({
                  isActive,
                }) => `block text-left p-1 dark:text-[#8B9CB3] hover:text-blue-600 rounded flex items-center cursor-pointer 
              ${
                isActive
                  ? "text-blue-600 dark:text-blue-600 font-semibold"
                  : "text-gray-600"
              }`}
              >
                <VscDash className="text-2xl font-extrabold" />
                To Do
              </NavLink>
              <NavLink
                to="/kanban"
                className={({
                  isActive,
                }) => `block text-left p-1 dark:text-[#8B9CB3] hover:text-blue-600 rounded flex items-center cursor-pointer 
              ${
                isActive
                  ? "text-blue-600 dark:text-blue-600 font-semibold"
                  : "text-gray-600"
              }`}
              >
                <VscDash className="text-2xl font-extrabold" />
                Kanban Board
              </NavLink>
              <NavLink
                to="/social"
                className={({
                  isActive,
                }) => `block text-left p-1 dark:text-[#8B9CB3] hover:text-blue-600 rounded flex items-center cursor-pointer 
              ${
                isActive
                  ? "text-blue-600 dark:text-blue-600 font-semibold"
                  : "text-gray-600"
              }`}
              >
                <VscDash className="text-2xl font-extrabold" />
                Social Feed
              </NavLink>
              <NavLink
                to="/email"
                className={({
                  isActive,
                }) => `block text-left p-1 dark:text-[#8B9CB3] hover:text-blue-600 rounded flex items-center cursor-pointer 
              ${
                isActive
                  ? "text-blue-600 dark:text-blue-600 font-semibold"
                  : "text-gray-600"
              }`}
              >
                <VscDash className="text-2xl font-extrabold" />
                Email
              </NavLink>
              <NavLink
                to="/contacts"
                className={({
                  isActive,
                }) => `block text-left p-1 dark:text-[#8B9CB3] hover:text-blue-600 rounded flex items-center cursor-pointer 
              ${
                isActive
                  ? "text-blue-600 dark:text-blue-600 font-semibold"
                  : "text-gray-600"
              }`}
              >
                <VscDash className="text-2xl font-extrabold" />
                Contacts
              </NavLink>
              <NavLink
                to="/videocall"
                className={({
                  isActive,
                }) => `block text-left p-1 dark:text-[#8B9CB3] hover:text-blue-600 rounded flex items-center cursor-pointer 
              ${
                isActive
                  ? "text-blue-600 dark:text-blue-600 font-semibold"
                  : "text-gray-600"
              }`}
              >
                <VscDash className="text-2xl font-extrabold" />
                Video Call
              </NavLink>
              <NavLink
                to="/voicecall"
                className={({
                  isActive,
                }) => `block text-left p-1 dark:text-[#8B9CB3] hover:text-blue-600 rounded flex items-center cursor-pointer 
              ${
                isActive
                  ? "text-blue-600 dark:text-blue-600 font-semibold"
                  : "text-gray-600"
              }`}
              >
                <VscDash className="text-2xl font-extrabold" />
                Voice Call
              </NavLink>
            </div>
          )}
        </div>
        <div>
          <span className="text-sm font-semibold">Workforce</span>

          <NavLink
            onClick={() => {
              toggle("members");
            }}
            className={`flex items-center gap-2 mt-2 px-4 p-2 w-full
              hover:text-blue-600 dark:text-[#8B9CB3] cursor-pointer transition rounded-lg justify-between
              ${
                openMenu === "members"
                  ? "text-indigo-600 dark:text-[#D8D8DD] dark:bg-[#080B2C] dark:border-indigo-600 font-semibold bg-blue-100 border-l-[3px]"
                  : "text-gray-600"
              }`}
          >
            <span className="flex items-center gap-3">
              <TbUserBolt />
              <span>Members</span>
            </span>
          </NavLink>
          <NavLink
            onClick={() => {
              toggle("teams");
            }}
            className={`flex items-center gap-2 mt-2 px-4 p-2 w-full
              hover:text-blue-600 dark:text-[#8B9CB3] cursor-pointer transition rounded-lg justify-between
              ${
                openMenu === "teams"
                  ? "text-indigo-600 dark:text-[#D8D8DD] dark:bg-[#080B2C] dark:border-indigo-600 font-semibold bg-blue-100 border-l-[3px]"
                  : "text-gray-600"
              }`}
          >
            <span className="flex items-center gap-3">
              <TbUsersGroup />
              <span>Teams</span>
            </span>
          </NavLink>
          <NavLink
            onClick={() => {
              toggle("clients");
            }}
            className={`flex items-center gap-2 mt-2 px-4 p-2 w-full
              hover:text-blue-600 dark:text-[#8B9CB3] cursor-pointer transition rounded-lg justify-between
              ${
                openMenu === "clients"
                  ? "text-indigo-600 dark:text-[#D8D8DD] dark:bg-[#080B2C] dark:border-indigo-600 font-semibold bg-blue-100 border-l-[3px]"
                  : "text-gray-600"
              }`}
          >
            <span className="flex items-center gap-3">
              <LuUsersRound />
              <span>Clients</span>
            </span>
          </NavLink>
          <NavLink
            onClick={() => {
              toggle("roles");
            }}
            className={`flex items-center gap-2 mt-2 px-4 p-2 w-full
              hover:text-blue-600 dark:text-[#8B9CB3] cursor-pointer transition rounded-lg justify-between
              ${
                openMenu === "roles"
                  ? "text-indigo-600 dark:text-[#D8D8DD] dark:bg-[#080B2C] dark:border-indigo-600 font-semibold bg-blue-100 border-l-[3px]"
                  : "text-gray-600"
              }`}
          >
            <span className="flex items-center gap-3">
              <PiCirclesThree />
              <span>Roles & Permission</span>
            </span>
          </NavLink>
          <NavLink
            onClick={() => {
              toggle("activity");
            }}
            className={`flex items-center gap-2 mt-2 px-4 p-2 w-full
              hover:text-blue-600 dark:text-[#8B9CB3] cursor-pointer transition rounded-lg justify-between
              ${
                openMenu === "activity"
                  ? "text-indigo-600 dark:text-[#D8D8DD] dark:bg-[#080B2C] dark:border-indigo-600 font-semibold bg-blue-100 border-l-[3px]"
                  : "text-gray-600"
              }`}
          >
            <span className="flex items-center gap-3">
              <TbTopologyBus />
              <span>Activity Logs</span>
            </span>
          </NavLink>
        </div>
        <div>
          <span className="text-sm font-semibold">Management</span>

          <NavLink
            onClick={() => {
              toggle("notification");
            }}
            className={`flex items-center gap-2 mt-2 px-4 p-2 w-full
              hover:text-blue-600 dark:text-[#8B9CB3] cursor-pointer transition rounded-lg justify-between
              ${
                openMenu === "notification"
                  ? "text-indigo-600 dark:text-[#D8D8DD] dark:bg-[#080B2C] dark:border-indigo-600 font-semibold bg-blue-100 border-l-[3px]"
                  : "text-gray-600"
              }`}
          >
            <span className="flex items-center gap-3">
              <TbBellDown />
              <span>Notification</span>
            </span>
          </NavLink>
          <NavLink
            onClick={() => {
              toggle("settings");
            }}
            className={`flex items-center gap-2 mt-2 px-4 p-2 w-full
              hover:text-blue-600 dark:text-[#8B9CB3] cursor-pointer transition rounded-lg justify-between
              ${
                openMenu === "settings"
                  ? "text-indigo-600 dark:text-[#D8D8DD] dark:bg-[#080B2C] dark:border-indigo-600 font-semibold bg-blue-100 border-l-[3px]"
                  : "text-gray-600"
              }`}
          >
            <span className="flex items-center gap-3">
              <TbSettingsCog />
              <span>Settings</span>
            </span>
          </NavLink>
        </div>
        <div>
          <span className="text-sm font-semibold">Pages</span>

          <NavLink
            onClick={() => {
              toggle("login");
            }}
            className={`flex items-center gap-2 mt-2 px-4 p-2 w-full
              hover:text-blue-600 dark:text-[#8B9CB3] cursor-pointer transition rounded-lg justify-between
              ${
                openMenu === "login"
                  ? "text-indigo-600 dark:text-[#D8D8DD] dark:bg-[#080B2C] dark:border-indigo-600 font-semibold bg-blue-100 border-l-[3px]"
                  : "text-gray-600"
              }`}
          >
            <span className="flex items-center gap-3">
              <CiLock />
              <span>Login</span>
            </span>
          </NavLink>
          <NavLink
            onClick={() => {
              toggle("register");
            }}
            className={`flex items-center gap-2 mt-2 px-4 p-2 w-full
              hover:text-blue-600 dark:text-[#8B9CB3] cursor-pointer transition rounded-lg justify-between
              ${
                openMenu === "register"
                  ? "text-indigo-600 dark:text-[#D8D8DD] dark:bg-[#080B2C] dark:border-indigo-600 font-semibold bg-blue-100 border-l-[3px]"
                  : "text-gray-600"
              }`}
          >
            <span className="flex items-center gap-3">
              <LuUserCog />
              <span>Register</span>
            </span>
          </NavLink>
          <NavLink
            onClick={() => {
              toggle("forgetPass");
            }}
            className={`flex items-center gap-2 mt-2 px-4 p-2 w-full
              hover:text-blue-600 dark:text-[#8B9CB3] cursor-pointer transition rounded-lg justify-between
              ${
                openMenu === "forgetPass"
                  ? "text-indigo-600 dark:text-[#D8D8DD] dark:bg-[#080B2C] dark:border-indigo-600 font-semibold bg-blue-100 border-l-[3px]"
                  : "text-gray-600"
              }`}
          >
            <span className="flex items-center gap-3">
              <TbHelpTriangle />
              <span>Forget Password</span>
            </span>
          </NavLink>
          <NavLink
            onClick={() => {
              toggle("resetPass");
            }}
            className={`flex items-center gap-2 mt-2 px-4 p-2 w-full
              hover:text-blue-600 dark:text-[#8B9CB3] cursor-pointer transition rounded-lg justify-between
              ${
                openMenu === "resetPass"
                  ? "text-indigo-600 dark:text-[#D8D8DD] dark:bg-[#080B2C] dark:border-indigo-600 font-semibold bg-blue-100 border-l-[3px]"
                  : "text-gray-600"
              }`}
          >
            <span className="flex items-center gap-3">
              <TbArrowForwardUpDouble />
              <span>Reset Password</span>
            </span>
          </NavLink>
          <NavLink
            onClick={() => {
              toggle("emailVer");
            }}
            className={`flex items-center gap-2 mt-2 px-4 p-2 w-full
              hover:text-blue-600 dark:text-[#8B9CB3] cursor-pointer transition rounded-lg justify-between
              ${
                openMenu === "emailVer"
                  ? "text-indigo-600 dark:text-[#D8D8DD] dark:bg-[#080B2C] dark:border-indigo-600 font-semibold bg-blue-100 border-l-[3px]"
                  : "text-gray-600"
              }`}
          >
            <span className="flex items-center gap-3">
              <MdOutlineEmail />
              <span>Email Verification</span>
            </span>
          </NavLink>
          <NavLink
            onClick={() => {
              toggle("2step");
            }}
            className={`flex items-center gap-2 mt-2 px-4 p-2 w-full
              hover:text-blue-600 dark:text-[#8B9CB3] cursor-pointer transition rounded-lg justify-between
              ${
                openMenu === "2step"
                  ? "text-indigo-600 dark:text-[#D8D8DD] dark:bg-[#080B2C] dark:border-indigo-600 font-semibold bg-blue-100 border-l-[3px]"
                  : "text-gray-600"
              }`}
          >
            <span className="flex items-center gap-3">
              <TbChecklist />
              <span>2 Step Verification</span>
            </span>
          </NavLink>
          <NavLink
            onClick={() => {
              toggle("error");
            }}
            className={`flex items-center gap-2 mt-2 px-4 p-2 w-full
              hover:text-blue-600 dark:text-[#8B9CB3] cursor-pointer transition rounded-lg justify-between
              ${
                openMenu === "error"
                  ? "text-indigo-600 dark:text-[#D8D8DD] dark:bg-[#080B2C] dark:border-indigo-600 font-semibold bg-blue-100 border-l-[3px]"
                  : "text-gray-600"
              }`}
          >
            <span className="flex items-center gap-3">
              <TbError404 />
              <span>Error Pages</span>
            </span>
          </NavLink>
          <NavLink
            onClick={() => {
              toggle("lockScreen");
            }}
            className={`flex items-center gap-2 mt-2 px-4 p-2 w-full
              hover:text-blue-600 dark:text-[#8B9CB3] cursor-pointer transition rounded-lg justify-between
              ${
                openMenu === "lockScreen"
                  ? "text-indigo-600 dark:text-[#D8D8DD] dark:bg-[#080B2C] dark:border-indigo-600 font-semibold bg-blue-100 border-l-[3px]"
                  : "text-gray-600"
              }`}
          >
            <span className="flex items-center gap-3">
              <TbLayoutNavbarCollapse />
              <span>Look Screen</span>
            </span>
          </NavLink>
          <NavLink
            onClick={() => {
              toggle("general");
            }}
            className={`flex items-center gap-2 mt-2 px-4 p-2 w-full
              hover:text-blue-600 dark:text-[#8B9CB3] cursor-pointer transition rounded-lg justify-between
              ${
                openMenu === "general"
                  ? "text-indigo-600 dark:text-[#D8D8DD] dark:bg-[#080B2C] dark:border-indigo-600 font-semibold bg-blue-100 border-l-[3px]"
                  : "text-gray-600"
              }`}
          >
            <span className="flex items-center gap-3">
              <TbLayoutDistributeVertical />
              <span>General Pages</span>
            </span>
          </NavLink>
          <NavLink
            onClick={() => {
              toggle("starter");
            }}
            className={`flex items-center gap-2 mt-2 px-4 p-2 w-full
              hover:text-blue-600 dark:text-[#8B9CB3] cursor-pointer transition rounded-lg justify-between
              ${
                openMenu === "starter"
                  ? "text-indigo-600 dark:text-[#D8D8DD] dark:bg-[#080B2C] dark:border-indigo-600 font-semibold bg-blue-100 border-l-[3px]"
                  : "text-gray-600"
              }`}
          >
            <span className="flex items-center gap-3">
              <TbFilePower />
              <span>Starter Page</span>
            </span>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default SidebarContent;
