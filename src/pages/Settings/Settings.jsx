import React from "react";
import Navbar from "../../components/Navbar";

function Settings() {
  return (
    <div>
      <Navbar>
        <div className="flex flex-col gap-5 m-6 bg-white dark:bg-[#030318]  rounded p-3 sm:p-[24px]">
          <div className="flex text-sm p-2 justify-around sm:justify-between">
            <h4 className="md:text-[1.125rem] font-bold">Settings</h4>
            <p>
              Home &gt;
              <span className="md:text-[1rem] font-medium"> Settings</span>
            </p>
          </div>
        </div>
      </Navbar>
    </div>
  );
}

export default Settings;
