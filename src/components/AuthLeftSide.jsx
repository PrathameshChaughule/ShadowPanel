import React from "react";

function AuthLeftSide() {
  return (
    <div className="h-full w-full ">
      <div className="flex flex-col gap-3 mt-6 w-full items-center text-white">
        <span className="font-bold text-2xl">Keep track of Time with Ease</span>
        <p className="w-[70%] text-center text-lg">
          Effortlessly track your time, stay productive, and achieve more every
          day with our intuitive app
        </p>
      </div>
      <div className="h-[75%] absolute bottom-0 w-full left-0">
        <img
          src="/assets/images/auth1.png"
          className="absolute w-[46vw] -bottom-55"
          alt=""
        />
        <img
          src="/assets/images/auth2.svg"
          className="absolute w-[28vw] bottom-0 left-[17.4%]"
          alt=""
        />
      </div>
    </div>
  );
}

export default AuthLeftSide;
