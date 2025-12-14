import { NavLink } from "react-router-dom";

function EmailVerification() {
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
        <div className="flex flex-col gap-3 justify-center mt-3 items-center w-[75%] border border-[#CED2D4] p-7 rounded">
          <span className="text-2xl font-semibold">Verify Your Email</span>
          <p className="text-[#6D777F] text-center leading-5">
            We have sent OTP to info@example.com to verify your email address
            and activate your account by entering OTP
          </p>
          <form className="w-[95%] mt-3 flex flex-col gap-4">
            <div className="flex gap-5 justify-center">
              <div className="h-13 rounded flex items-center">
                <div className="border w-14 rounded h-full">
                  <input
                    type="text"
                    className="outline-none border-none p-5.5 h-full w-full"
                    maxLength={1}
                    required
                    inputMode="numeric"
                  />
                </div>
              </div>
              <div className="h-13 rounded flex items-center">
                <div className="border w-14 rounded h-full">
                  <input
                    type="text"
                    className="outline-none border-none h-full w-full p-5.5"
                    required
                    maxLength={1}
                    inputMode="numeric"
                  />
                </div>
              </div>
              <div className="h-13 rounded flex items-center">
                <div className="border w-14 rounded h-full">
                  <input
                    type="text"
                    className="outline-none border-none h-full w-full p-5.5"
                    required
                    maxLength={1}
                    inputMode="numeric"
                  />
                </div>
              </div>
              <div className="h-13 rounded flex items-center">
                <div className="border w-14 rounded h-full">
                  <input
                    type="text"
                    className="outline-none border-none h-full w-full p-5.5"
                    required
                    maxLength={1}
                    inputMode="numeric"
                  />
                </div>
              </div>
            </div>
            <span className="text-pink-600 text-center">05:00</span>
            <div className="text-center text-sm flex gap-1 justify-center">
              <NavLink to="/login" className="underline">
                Resend OTP
              </NavLink>
            </div>
            <button
              type="submit"
              className="text-center p-1 rounded bg-[#3550DC] text-white cursor-pointer hover:bg-[#213bb8]"
            >
              <span>Verify</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EmailVerification;
