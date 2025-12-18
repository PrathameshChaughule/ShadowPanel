import React, { useState } from "react";
import { CiMail } from "react-icons/ci";
import { GoEye, GoEyeClosed } from "react-icons/go";
import { Navigate, NavLink } from "react-router-dom";
import AuthLeftSide from "../../components/AuthLeftSide";
import {
  doSignInWithEmailAndPassword,
  doSignInWithGoogle,
} from "../../firebase/auth";
import { useAuth } from "../../contexts/authContext";
import { toast } from "react-toastify";

function Login() {
  const { userLoggedIn } = useAuth();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      try {
        await doSignInWithEmailAndPassword(email, password);
        toast.success("Login Successfully 🎉");
      } catch (error) {
        if (error.code === "auth/invalid-credential") {
          toast.error("Invalid email or password");
        } else {
          toast.error("Login failed");
        }
      } finally {
        setIsSigningIn(false);
      }
    }
  };

  const onGoogleSignIn = (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      doSignInWithGoogle().catch((err) => {
        setIsSigningIn(false);
      });
    }
  };

  return (
    <div>
      {userLoggedIn && <Navigate to={"/"} replace={true} />}
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
          <div className="flex flex-col gap-1 justify-center mt-3 items-center w-[90%] sm:w-[75%] border border-[#CED2D4] p-7 rounded">
            <span className="text-xl md:text-2xl font-semibold">Sing In</span>
            <span className="text-[#6D777F] text-center text-[14px] sm:text-[16px]">
              Please enter your details to sign in
            </span>
            <form
              onSubmit={onSubmit}
              className="w-[95%] mt-3 flex flex-col gap-3 sm:gap-5"
            >
              <div className="flex flex-col gap-2">
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
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <CiMail className="text-[#6D777F] mr-2" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
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
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div
                    className="cursor-pointer mr-2"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <GoEyeClosed className="text-[#6D777F]" />
                    ) : (
                      <GoEye className="text-[#6D777F]" />
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-end">
                <NavLink
                  to="/forgetPass"
                  className="text-[#949BA0] hover:text-blue-700 cursor-pointer"
                >
                  <span className="text-[14px] sm:text-[16px]">
                    Forget Password?
                  </span>
                </NavLink>
              </div>
              <button
                type="submit"
                className="text-center p-1 rounded bg-[#3550DC] text-white cursor-pointer hover:bg-[#213bb8]"
              >
                <span>Sign In</span>
              </button>
              <div className="flex justify-between items-center">
                <div className="bg-[#CED2D4] h-[1.6px] w-[30%] sm:w-[37%]"></div>
                <span className="text-[13px] text-center text-[#6D777F]">
                  Or Sign In With
                </span>
                <div className="bg-[#CED2D4] h-[1.6px] w-[30%] sm:w-[37%]"></div>
              </div>
              <div className="flex">
                <button
                  disabled={isSigningIn}
                  onClick={(e) => {
                    onGoogleSignIn(e);
                  }}
                  className="border w-[100%] rounded flex border-[#CED2D4] cursor-pointer hover:bg-[#CED2D4]/10 justify-center p-2"
                >
                  <img src="/assets/images/google.svg" className="w-6" alt="" />
                  <span className="font-semibold ml-2 text-md">
                    Sign In With Google
                  </span>
                </button>
              </div>
              <div className="text-center text-sm flex gap-1 text-[14px] sm:text-[16px] justify-center">
                <p className="text-[#6D777F]">Dont't have an account?</p>{" "}
                <NavLink to="/register" className="underline">
                  Get Started for Free
                </NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
