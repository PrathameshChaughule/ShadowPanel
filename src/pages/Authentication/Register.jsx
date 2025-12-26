import React, { useState } from "react";
import { CiMail } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { GoEye, GoEyeClosed } from "react-icons/go";
import { NavLink, useNavigate } from "react-router-dom";
import AuthLeftSide from "../../components/AuthLeftSide";
import {
  doCreateUserWithEmailAndPassword,
  doSignInWithGoogle,
} from "../../firebase/auth";
import { useAuth } from "../../contexts/authContext";
import { toast } from "react-toastify";
import { auth, db } from "../../firebase/firebase";
import { doc, setDoc } from "firebase/firestore";
import { VscTriangleDown } from "react-icons/vsc";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [openRole, setOpenRole] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!role) {
      toast.error("Role is required");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    if (isRegistering) return;
    setIsRegistering(true);
    try {
      const userCredential = await doCreateUserWithEmailAndPassword(
        email,
        password
      );

      const user = userCredential.user;
      await setDoc(doc(db, "Users", user.uid), {
        firstName: fname,
        lastName: lname,
        email: user.email,
        role: role,
        createdAt: new Date(),
      });
      if (role === "Admin") {
        navigate("/", { replace: true });
      } else {
        navigate("/user", { replace: true });
      }
      toast.success("Account Created Successfully 🎉");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        toast.error("Email already registered");
      } else if (error.code === "auth/invalid-email") {
        toast.error("Invalid email address");
      } else if (error.code === "auth/weak-password") {
        toast.error("Password should be at least 6 characters");
      } else {
        toast.error("Registration failed");
      }
    } finally {
      setIsRegistering(false);
    }
  };

  const onGoogleSignIn = async (e) => {
    e.preventDefault();
    if (isRegistering) return;

    setIsRegistering(true);

    try {
      const { user, userData } = await doSignInWithGoogle();

      localStorage.setItem("isAuth", "true");
      localStorage.setItem("userData", JSON.stringify(userData));

      toast.success("Login successful 🎉");

      if (userData.role === "Admin") {
        navigate("/admin", { replace: true });
      } else {
        navigate("/user", { replace: true });
      }
    } catch (err) {
      console.error(err);
      toast.error("Google sign-in failed");
    } finally {
      setIsRegistering(false);
    }
  };

  return (
    <>
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
            <form
              onSubmit={onSubmit}
              className="w-[95%] mt-2 xl:mt-3 flex flex-col gap-1 xl:gap-3"
            >
              <div className="flex justify-between">
                <div className="flex w-[49%] flex-col gap-1 xl:gap-2">
                  <label
                    htmlFor=""
                    className="text-[#6D777F] text-[14px] sm:text-[16px]"
                  >
                    First Name
                  </label>
                  <div className="border h-8 rounded border-[#CED2D4] flex items-center">
                    <input
                      type="text"
                      className="outline-none border-none h-full w-[95%] p-2"
                      required
                      onChange={(e) => setFName(e.target.value)}
                    />
                    <FiUser className="text-[#6D777F] mr-2" />
                  </div>
                </div>
                <div className="flex flex-col w-[49%] gap-1 xl:gap-2">
                  <label
                    htmlFor=""
                    className="text-[#6D777F] text-[14px] sm:text-[16px]"
                  >
                    Last Name
                  </label>
                  <div className="border h-8 rounded border-[#CED2D4] flex items-center">
                    <input
                      type="text"
                      className="outline-none border-none h-full w-[95%] p-2"
                      required
                      onChange={(e) => setLName(e.target.value)}
                    />
                    <FiUser className="text-[#6D777F] mr-2" />
                  </div>
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
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <CiMail className="text-[#6D777F] mr-2" />
                </div>
              </div>
              <div className="flex flex-col gap-1 xl:gap-2">
                <label
                  htmlFor=""
                  className="text-[#6D777F] text-[14px] sm:text-[16px]"
                >
                  Role
                </label>
                <div className="border h-8 rounded border-[#CED2D4] flex relative items-center">
                  <div className="outline-none h-full cursor-pointer w-full border-none text-gray-400">
                    <p
                      onClick={() => setOpenRole(!openRole)}
                      className="h-full px-2 py-0.5 flex items-center justify-between"
                    >
                      {role || "Select Role"}
                      <VscTriangleDown
                        className={openRole ? "rotate-180" : "rotate-0"}
                      />
                    </p>
                    {openRole && (
                      <div
                        onClick={() => setOpenRole(false)}
                        className="bg-white shadow shadow-gray-500 absolute top-9 w-full rounded p-3 flex flex-col gap-1 text-lg"
                      >
                        <span
                          onClick={() => setRole("User")}
                          className="px-2 rounded cursor-pointer hover:bg-gray-100"
                        >
                          User
                        </span>
                        <span
                          onClick={() => setRole("Admin")}
                          className="px-2 rounded cursor-pointer hover:bg-gray-100"
                        >
                          Admin
                        </span>
                        <span
                          onClick={() => setRole("Guest")}
                          className="px-2 rounded cursor-pointer hover:bg-gray-100"
                        >
                          Guest
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex w-[49%] flex-col gap-1 xl:gap-2">
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
                <div className="flex w-[49%] flex-col gap-1 xl:gap-2">
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
                      onChange={(e) => setConfirmPassword(e.target.value)}
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
              <div className="flex items-center justify-center">
                <div
                  disabled={isRegistering}
                  onClick={(e) => {
                    onGoogleSignIn(e);
                  }}
                  className="border w-[100%] rounded flex border-[#CED2D4] cursor-pointer hover:bg-[#CED2D4]/10 justify-center p-2"
                >
                  <img src="/assets/images/google.svg" className="w-6" alt="" />
                  <span className="font-semibold ml-2 text-md">
                    Sign Un With Google
                  </span>
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
    </>
  );
}

export default Register;
