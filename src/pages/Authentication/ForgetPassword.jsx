import React from "react";
import { CiMail } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import AuthLeftSide from "../../components/AuthLeftSide";

function ForgetPassword() {
  return (
    <div className="w-[100vw] h-[100vh] flex">
      <div className="hidden md:block w-[50%] h-full bg-gradient-to-b from-[#324CD4] to-[#11206C] relative overflow-hidden">
        <AuthLeftSide />
      </div>
      <div className="md:w-[50%] h-full flex flex-col justify-center items-center">
        <div className="flex items-center gap-2">
          <img
            src="/assets/images/favicon.png"
            className="w-6 rounded"
            alt=""
          />
          <span className="text-lg font-semibold">ShadowPanel</span>
        </div>
        <div className="flex flex-col gap-1 justify-center mt-3 items-center w-[75%] border border-[#CED2D4] p-7 rounded">
          <span className="text-xl sm:text-2xl font-semibold">
            Forget Password
          </span>
          <p className="text-[#6D777F] text-[14px] sm:text-[16px] text-center leading-5">
            If you forgot your password, well, then we'll email you instructions
            to reset your password.
          </p>
          <form className="w-[95%] mt-3 flex flex-col gap-3 sm:gap-5">
            <div className="flex flex-col gap-1 sm:gap-2">
              <label htmlFor="" className="text-[#6D777F]">
                Email
              </label>
              <div className="border h-8 rounded border-[#CED2D4] flex items-center">
                <input
                  type="email"
                  className="outline-none border-none h-full w-[95%] p-2"
                  required
                />
                <CiMail className="text-[#6D777F] mr-1" />
              </div>
            </div>

            <button
              type="submit"
              className="text-center p-1 rounded bg-[#3550DC] text-white cursor-pointer hover:bg-[#213bb8]"
            >
              <span>Reset</span>
            </button>
            <div className="text-center text-sm flex gap-1 justify-center">
              <p className="text-[#6D777F]">Return to</p>{" "}
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

export default ForgetPassword;
