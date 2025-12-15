import React, { useState } from "react";
import { CiMail } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { GoEye, GoEyeClosed } from "react-icons/go";
import { NavLink } from "react-router-dom";
import AuthLeftSide from "../../components/AuthLeftSide";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="w-[100vw] h-[100vh] flex">
      <div className="hidden md:block w-[50%] h-full bg-gradient-to-b from-[#324CD4] to-[#11206C] relative overflow-hidden">
        <AuthLeftSide />
      </div>
      <div className="w-full md:w-[50%] h-full flex flex-col justify-center items-center">
        <div className="flex items-center gap-2">
          <img
            src="/assets/images/favicon.png"
            className="w-6 rounded"
            alt=""
          />
          <span className="text-lg font-semibold">ShadowPanel</span>
        </div>
        <div className="flex flex-col gap-1 justify-center mt-2 xl:mt-3 items-center w-[90%] sm:w-[75%] border border-[#CED2D4] py-3 px-5 sm:p-5 rounded">
          <span className="text-xl sm:text-2xl font-semibold">Sing Up</span>
          <span className="text-[#6D777F] text-[14px] sm:text-[16px] text-center">
            Please enter your details to Create Account
          </span>
          <form className="w-[95%] mt-2 xl:mt-3 flex flex-col gap-1 xl:gap-3">
            <div className="flex flex-col gap-1 xl:gap-2">
              <label
                htmlFor=""
                className="text-[#6D777F] text-[14px] sm:text-[16px]"
              >
                Full Name
              </label>
              <div className="border h-8 rounded border-[#CED2D4] flex items-center">
                <input
                  type="text"
                  className="outline-none border-none h-full w-[95%] p-2"
                  required
                />
                <FiUser className="text-[#6D777F] mr-2" />
              </div>
            </div>
            <div className="flex flex-col gap-1 xl:gap-2">
              <label
                htmlFor=""
                className="text-[#6D777F] text-[14px] sm:text-[16px]"
              >
                Email
              </label>
              <div className="border h-8 rounded border-[#CED2D4] flex items-center">
                <input
                  type="email"
                  className="outline-none border-none h-full w-[95%] p-2"
                  required
                />
                <CiMail className="text-[#6D777F] mr-2" />
              </div>
            </div>
            <div className="flex flex-col gap-1 xl:gap-2">
              <label
                htmlFor=""
                className="text-[#6D777F] text-[14px] sm:text-[16px]"
              >
                Password
              </label>
              <div className="border h-8 rounded border-[#CED2D4] flex items-center">
                <input
                  type={showPassword ? "text" : "password"}
                  className="outline-none border-none h-full w-[95%] p-2"
                  required
                />
                <button
                  className="cursor-pointer mr-2"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <GoEyeClosed className="text-[#6D777F]" />
                  ) : (
                    <GoEye className="text-[#6D777F]" />
                  )}
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-1 xl:gap-2">
              <label
                htmlFor=""
                className="text-[#6D777F] text-[14px] sm:text-[16px]"
              >
                Confirm Password
              </label>
              <div className="border h-8 rounded border-[#CED2D4] flex items-center">
                <input
                  type={showPassword ? "text" : "password"}
                  className="outline-none border-none h-full w-[95%] p-2"
                  required
                />
                <button
                  className="cursor-pointer mr-2"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <GoEyeClosed className="text-[#6D777F]" />
                  ) : (
                    <GoEye className="text-[#6D777F]" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center text-[14px] sm:text-[16px] justify-between">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name=""
                  className="w-4 h-4 border-[#CED2D4]"
                  id=""
                  required
                />
                <p className="flex items-center gap-1 flex-wrap leading-3 justify-center my-1 text-md">
                  I agree to the{" "}
                  <span className="text-[#949BA0] hover:text-blue-700 cursor-pointer">
                    Terms of Service
                  </span>
                  and{" "}
                  <span className="text-[#949BA0] hover:text-blue-700 cursor-pointer">
                    Privacy Policy
                  </span>
                </p>
              </div>
            </div>
            <button
              type="submit"
              className="text-center p-1 rounded bg-[#3550DC] text-white cursor-pointer hover:bg-[#213bb8]"
            >
              <span>Sign Up</span>
            </button>

            <div className="flex justify-between items-center">
              <div className="bg-[#CED2D4] h-[1.6px] w-[30%] sm:w-[37%]"></div>
              <span className="text-[13px] text-center text-[#6D777F]">
                Or Sign Up With
              </span>
              <div className="bg-[#CED2D4] h-[1.6px] w-[30%] sm:w-[37%]"></div>
            </div>
            <div className="flex items-center justify-between">
              <div className="border w-[32%] rounded flex border-[#CED2D4] cursor-pointer hover:bg-[#CED2D4]/10 justify-center p-2">
                <img src="/assets/images/facebook.svg" className="w-6" alt="" />
              </div>
              <div className="border w-[32%] rounded flex border-[#CED2D4] cursor-pointer hover:bg-[#CED2D4]/10 justify-center p-2">
                <img src="/assets/images/google.svg" className="w-6" alt="" />
              </div>
              <div className="border w-[32%] rounded flex border-[#CED2D4] cursor-pointer hover:bg-[#CED2D4]/10 justify-center p-2">
                <img src="/assets/images/apple.svg" className="w-6" alt="" />
              </div>
            </div>
            <div className="text-center text-sm flex gap-1 justify-center text-[14px] sm:text-[16px]">
              <p className="text-[#6D777F]">Already have an account?</p>{" "}
              <NavLink to="/login" className="underline">
                Sign In
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
