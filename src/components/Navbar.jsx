import { CgProfile } from "react-icons/cg";
import { IoMoonOutline } from "react-icons/io5";
import { RiMenu5Fill } from "react-icons/ri";
import { TbBellCheck } from "react-icons/tb";
import SidebarContent from "./SidebarContent";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import { LuSun } from "react-icons/lu";
import { doSignOut } from "../firebase/auth";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext";

function Navbar({ children }) {
  const navigate = useNavigate();
  const { userLoggedIn } = useAuth();

  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    document.documentElement.classList.toggle("dark", storedTheme === "dark");
  });

  return (
    <div className="h-screen flex overflow-hidden">
      {/* ------------------------------Sidebar--------------------------- */}
      <aside
        className={`
          bg-white dark:bg-[#030318] border-r dark:border-[#11112F] border-gray-300 h-full w-64 transition-all duration-300 z-50 fixed md:static top-0 left-0
          ${isOpen ? "translate-x-0" : "-translate-x-64"} 
          md:translate-x-0   
        `}
      >
        <div className="flex items-center gap-2 p-[13px] border-b dark:border-[#11112F] border-gray-300">
          <div className="flex justify-center w-full text-purple-600 font-bold text-xl cursor-pointer">
            <span className="flex text-[1.4rem] dark:text-[#DBE0E6] [font-family:Roboto,sans-serif] font-semibold tracking-tight items-center gap-2 text-black">
              {theme === "light" ? (
                <img src="/assets/images/favicon.png" className="w-7" alt="" />
              ) : (
                <img src="/assets/images/favicon1.png" className="w-7" alt="" />
              )}
              ShadowPanel
            </span>
          </div>
        </div>

        <nav className="pt-1 px-4 pb-20 sm:pb-2 max-h-screen xl:max-h-165 m-1 overflow-y-auto">
          <SidebarContent />
        </nav>
      </aside>

      {/* -------- OPTIONAL OVERLAY (Close on click) -------- */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        ></div>
      )}

      <div className="flex-1 flex flex-col">
        {/* --------------------------------NavBar----------------------- */}
        <div className="flex h-[58px] gap-0 sm:gap-2 justify-between px-1 sm:px-5 bg-white dark:bg-[#030318] border-b dark:border-[#11112F] border-gray-300">
          <div className="flex py-2.5 items-center gap-3">
            <img
              src="/assets/images/favicon.png"
              className="w-7 md:hidden"
              alt=""
            />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer md:hidden"
            >
              <RiMenu5Fill className="text-2xl dark:text-[#DBE0E6]" />
            </button>
            <div className="border-1 w-[50vw] flex items-center dark:border-[#11112F] justify-between border-gray-300 p-1.5 px-2.5 rounded-sm">
              <input
                type="text"
                placeholder="Search..."
                className="border-none text-[14px] w-full outline-none text-gray-500"
              />
              <span className="bg-gray-500 text-center dark:bg-[#0C0C20] w-[70px] p-1 px-1.5 cursor-pointer hover:bg-gray-400 dark:hover:bg-[#1a1a38] dark:text-[#DBE0E6] text-white text-[9px] sm:text-[13px] rounded-sm ">
                Ctrl + K
              </span>
            </div>
          </div>
          <div className="flex items-center dark:text-[#DBE0E6] gap-1 text-[22px]">
            <div
              onClick={toggleTheme}
              className="cursor-pointer p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-900"
            >
              {theme === "light" ? (
                <IoMoonOutline className="text-[20px]" />
              ) : (
                <LuSun className="text-[20px]" />
              )}
            </div>
            <div
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="cursor-pointer p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-900"
            >
              <TbBellCheck className="text-[20px] cursor-pointer" />
            </div>
            {userLoggedIn && (
              <button
                onClick={() => {
                  doSignOut().then(() => {
                    navigate("/login");
                  });
                }}
                className="cursor-pointer p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-900"
              >
                <CgProfile className="text-[24px] cursor-pointer" />
              </button>
            )}
          </div>
        </div>
        <div className="overflow-y-auto h-screen flex flex-col justify-between dark:text-white dark:bg-[#0C0C20]">
          
          {children}
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
