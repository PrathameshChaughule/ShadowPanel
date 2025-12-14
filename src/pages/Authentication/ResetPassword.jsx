import React, { useState } from "react";
import { CiMail } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { GoEye, GoEyeClosed } from "react-icons/go";
import { NavLink } from "react-router-dom";

function ResetPassword() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="w-[100vw] h-[100vh] flex">
      <div className="w-[50%] h-full bg-gradient-to-b from-[#324CD4] to-[#11206C] relative overflow-hidden">
        <div className="flex flex-col gap-3 mt-6 w-full items-center text-white">
          <span className="font-bold text-2xl">
            Keep track of Time with Ease
          </span>
          <p className="w-[70%] text-center text-lg">
            Effortlessly track your time, stay productive, and achieve more
            every day with our intuitive app
          </p>
        </div>
        <div className="h-[75%] absolute bottom-0 w-full left-0">
          <img
            src="/assets/images/auth1.png"
            className="absolute -bottom-55"
            alt=""
          />
          <img
            src="/assets/images/auth2.svg"
            className="absolute w-110 bottom-0 left-[17.4%]"
            alt=""
          />
        </div>
      </div>
      <div className="w-[50%] h-full flex flex-col justify-center items-center">
        <div className="flex items-center gap-2">
          <img
            src="/assets/images/favicon.png"
            className="w-6 rounded"
            alt=""
          />
          <span className="text-lg font-semibold">ShadowPanel</span>
        </div>
        <div className="flex flex-col gap-1 justify-center mt-3 items-center w-[75%] border border-[#CED2D4] p-7 rounded">
          <span className="text-2xl font-semibold">Reset Password</span>
          <span className="text-[#6D777F] text-center leading-5">
            Securely reset your account password if you've forgotten it or need
            to update it
          </span>
          <form className="w-[95%] mt-3 flex flex-col gap-3">
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-[#6D777F]">
                Password
              </label>
              <div className="border h-8 rounded border-[#CED2D4] flex items-center">
                <input
                  type={showPassword ? "text" : "password"}
                  className="outline-none border-none h-full w-[95%] p-2"
                  required
                />
                <button
                  className="cursor-pointer"
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
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-[#6D777F]">
                Confirm Password
              </label>
              <div className="border h-8 rounded border-[#CED2D4] flex items-center">
                <input
                  type={showPassword ? "text" : "password"}
                  className="outline-none border-none h-full w-[95%] p-2"
                  required
                />
                <button
                  className="cursor-pointer"
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

export default ResetPassword;
