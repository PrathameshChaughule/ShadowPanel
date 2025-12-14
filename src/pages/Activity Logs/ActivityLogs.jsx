import React from "react";
import Navbar from "../../components/Navbar";
import { LuFiles } from "react-icons/lu";
import { TbMoneybag, TbSwipe, TbUserEdit, TbUserStar } from "react-icons/tb";
import { FaRegClock } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";

function ActivityLogs() {
  return (
    <div>
      <Navbar>
        <div className="flex flex-col gap-5 m-6 bg-white dark:bg-[#030318] rounded p-3 sm:p-[24px]">
          <div className="flex text-sm p-2 justify-around sm:justify-between">
            <h4 className="md:text-[1.125rem] font-bold">Activity Logs</h4>
            <p>
              Home &gt;
              <span className="md:text-[1rem] font-medium"> Activity Logs</span>
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="w-fit p-0.5 px-3 rounded bg-[#F5F6FA] dark:bg-[#0C0C20]">
              <span className="font-semibold">Today</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="border-4 border-[#E3E7FA] bg-[#3550DC] dark:border-[#091539] text-white w-fit rounded-full p-1.5">
                <LuFiles />
              </div>
              <div>
                <span className="font-semibold">
                  Checked In – Aug 7, 2025 at 9:07 AM
                </span>
                <p className="text-sm text-[#6D777F]">
                  You successfully checked in today using the mobile app’s
                  biometric system. Your working hours will be calculated from
                  this timestamp. Don’t forget to check out before leaving to
                  avoid discrepancies in attendance logs.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="border-4 border-[#E9EBEC] bg-[#6D777F] dark:border-[#161719] text-white w-fit rounded-full p-1.5">
                <TbMoneybag />
              </div>
              <div>
                <span className="font-semibold">
                  Leave Request Submitted – Casual Leave for Aug 9, 2025 at
                  03:14 PM
                </span>
                <p className="text-sm text-[#6D777F]">
                  Your payslip for July 2025 has been generated and is available
                  under the Payroll section. Please verify the salary breakdown
                  and raise any queries before Aug 10.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="w-fit p-0.5 px-3 rounded bg-[#F5F6FA] dark:bg-[#0C0C20]">
              <span className="font-semibold">Yesterday</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="border-4 border-[#D9F4E8] bg-[#01B664] dark:border-[#051B11] text-white w-fit rounded-full p-1.5">
                <TbSwipe />
              </div>
              <div>
                <span className="font-semibold">
                  Feedback Received - Aug 6, 2025 at 06:55 PM
                </span>
                <p className="text-sm text-[#6D777F]">
                  Your team lead added feedback to your monthly check-in. Review
                  it in the Feedback section.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="border-4 border-[#F3E9FF] bg-[#24CDBA] dark:border-[#20073E] text-white w-fit rounded-full p-1.5">
                <FaRegClock />
              </div>
              <div>
                <span className="font-semibold">
                  Performance Review Submitted - Aug 6, 2025 at 05:25 PM
                </span>
                <p className="text-sm text-[#6D777F]">
                  You completed your Q2 FY25 self-assessment. Your manager will
                  review it soon.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="border-4 border-[#FFEEF1] bg-[#F301CA] dark:border-[#3A0610] text-white w-fit rounded-full p-1.5">
                <TbUserEdit />
              </div>
              <div>
                <span className="font-semibold">
                  Bank Details Updated - Aug 6, 2025 at 04:23 PM
                </span>
                <p className="text-sm text-[#6D777F]">
                  Your new salary bank account was saved successfully. All
                  future salary transactions will be directed to this account.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="w-fit p-0.5 px-3 rounded bg-[#F5F6FA] dark:bg-[#0C0C20]">
              <span className="font-semibold">Dec 12, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="border-4 border-[#D9ECFF] bg-[#0080FF] dark:border-[#032830] text-white w-fit rounded-full p-1.5">
                <TbUserStar />
              </div>
              <div>
                <span className="font-semibold">
                  Team Change Notified - Aug 3, 2025 at 04:23 PM
                </span>
                <p className="text-sm text-[#6D777F]">
                  You’ve been moved to the Marketing & Outreach department. New
                  reporting lines and goals are active from this date.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="border-4 border-[#E3E7FA] bg-[#3550DC] dark:border-[#091539] text-white w-fit rounded-full p-1.5">
                <FiMessageCircle />
              </div>
              <div>
                <span className="font-semibold">
                  Feedback Received - Aug 3, 2025 at 06:28 PM
                </span>
                <p className="text-sm text-[#6D777F]">
                  Your team lead submitted monthly performance feedback. Check
                  your Feedback tab for details and follow-up actions.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="border-4 border-[#F3E9FF] bg-[#24CDBA] dark:border-[#20073E] text-white w-fit rounded-full p-1.5">
                <TbUserStar />
              </div>
              <div>
                <span className="font-semibold">
                  Reimbursement Approved - Aug 3, 2025 at 04:50 PM
                </span>
                <p className="text-sm text-[#6D777F]">
                  Your travel expense reimbursement of ₹1,200 was approved. It
                  will be included in the upcoming payroll.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Navbar>
    </div>
  );
}

export default ActivityLogs;
