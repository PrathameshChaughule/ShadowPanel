import Navbar from "../../components/Navbar";
import { TbCards } from "react-icons/tb";
import { HiOutlinePlusCircle, HiOutlineTrash } from "react-icons/hi";
import { LuClipboardList, LuComponent } from "react-icons/lu";
import { RiCalendarEventLine } from "react-icons/ri";
import { invoices } from "../../data/invoicesData";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

function Invoices() {
  return (
    <div>
      <Navbar>
        <div className="flex flex-col w-[100vw] sm:w-full gap-7 sm:p-[24px]">
          <div className="flex text-sm p-2 justify-around sm:justify-between mb-[-15px]">
            <h4 className="md:text-[1.125rem] font-semibold hidden sm:block">
              Invoices
            </h4>
            <p>
              Home &gt; Applications &gt;
              <span className="md:text-[1rem] font-medium"> Invoices</span>
            </p>
          </div>
          <div className="flex justify-around flex-wrap">
            <div className=" p-5 pt-4 shadow shadow-gray-400 dark:shadow-[#011743] dark:bg-[#030318] rounded w-[86%] sm:w-[48%] xl:w-[23%]">
              <div className="mb-3 flex items-center justify-between relative">
                <div>
                  <p className="text-gray-400 ">Total Invoice</p>
                  <h4 className="font-bold text-3xl">$2,45,445</h4>
                </div>
                <div className="text-3xl p-1.5 rounded-full text-blue-600 bg-blue-200 z-10">
                  <LuComponent />
                </div>
              </div>
              <hr className="text-gray-300 h-4 dark:text-[#011743]" />
              <div className="flex text-[16px] font-medium">
                <span className="text-[#06bb69] font-bold rounded mr-2 flex items-center">
                  +31%
                </span>
                <p className="text-gray-400">Increased from last month</p>
              </div>
            </div>
            <div className=" p-5 pt-4 shadow shadow-gray-400 dark:shadow-[#011743] dark:bg-[#030318] rounded w-[86%] mt-3 sm:w-[48%] sm:mt-0 xl:w-[23%]">
              <div className="mb-3 flex items-center justify-between">
                <div>
                  <p className="text-gray-400 ">Unpaid Invoice</p>
                  <h4 className="font-bold text-3xl">$50,000</h4>
                </div>
                <div className="text-3xl p-1.5 rounded-full text-red-600 bg-red-200 z-10">
                  <LuClipboardList />
                </div>
              </div>
              <hr className="text-gray-300 h-4 dark:text-[#011743]" />
              <div className="flex text-[16px] font-medium">
                <span className="text-red-500 font-bold rounded-full mr-2 flex items-center">
                  -15%
                </span>
                <p className="text-gray-400">Decreased from last month</p>
              </div>
            </div>
            <div className=" p-5 pt-4 shadow shadow-gray-400 dark:shadow-[#011743] dark:bg-[#030318] sm:mt-7 w-[86%] mt-3  xl:mt-0 rounded sm:w-[48%] xl:w-[23%]">
              <div className="mb-3 flex items-center justify-between">
                <div>
                  <p className="text-gray-400 ">Pending Invoice</p>
                  <h4 className="font-bold text-3xl">$41,000</h4>
                </div>
                <div className="text-3xl p-1.5 rounded-full text-sky-600 bg-sky-200 z-10">
                  <TbCards />
                </div>
              </div>
              <hr className="text-gray-300 h-4 dark:text-[#011743]" />
              <div className="flex text-[16px] font-medium">
                <span className="text-[#06bb69] font-bold rounded mr-2 flex items-center">
                  +48%
                </span>
                <p className="text-gray-400">Increased from last month</p>
              </div>
            </div>
            <div className=" p-5 pt-4 shadow shadow-gray-400 dark:shadow-[#011743] dark:bg-[#030318] sm:mt-7 w-[86%] mt-3  xl:mt-0 rounded sm:w-[48%] xl:w-[23%]">
              <div className="mb-3 flex items-center justify-between">
                <div>
                  <p className="text-gray-400 ">Overdue Invoice</p>
                  <h4 className="font-bold text-xl">$2.50.550</h4>
                </div>
                <div className="text-3xl p-1.5 rounded-full text-orange-600 bg-orange-200 z-10">
                  <RiCalendarEventLine />
                </div>
              </div>
              <hr className="text-gray-300 h-4 dark:text-[#011743]" />
              <div className="flex text-[16px] font-medium">
                <span className="text-[#06bb69] font-bold rounded mr-2 flex items-center">
                  +39%
                </span>
                <p className="text-gray-400">Increased from last month</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between w-full px-1">
            <span className="text-xl font-semibold">
              Invoices{" "}
              <span className="text-sm bg-gray-200/30 px-2 py-0.5 rounded">
                {invoices.length} Invoices
              </span>
            </span>
            <div className="flex cursor-pointer hover:bg-blue-700 items-center gap-1 sm:text-[17px] p-1 px-2 font-semibold bg-blue-600 text-white w-fit rounded">
              <HiOutlinePlusCircle className="font-bold" />
              <span>Add Invoices</span>
            </div>
          </div>
          <div className="overflow-hidden h-fit w-[99%] p-1 lg:w-full">
            <div className="overflow-x-auto w-[95vw] md:w-[70vw] xl:w-full">
              <table className="min-w-300 xl:w-full border-collapse border border-[#D1D5DC] dark:border-[#011743] w-full my-2 align-middle items-center">
                <tr className="bg-gray-200 dark:bg-[#030318] font-semibold">
                  <th className="text-start px-4 py-3">Invoice</th>
                  <th className="text-start pl-3">Name</th>
                  <th className="text-start">Created On</th>
                  <th className="text-start">Total</th>
                  <th className="text-start pl-3">Amount Due</th>
                  <th className="text-start pl-3">Due Date</th>
                  <th className="text-start pl-3">Status</th>
                  <th> </th>
                </tr>
                {invoices.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b border-[#D1D5DC] dark:border-[#011743]"
                  >
                    <td className="p-3">
                      <p className="text-[14px] font-semibold dark:text-[#ACC0D6] hover:text-blue-600 cursor-pointer">
                        {item.invoiceId}{" "}
                      </p>
                    </td>
                    <td className="flex items-center gap-2 py-3 pl-3">
                      <img
                        src={item.img}
                        className="rounded-full w-8 border border-gray-400"
                      />
                      <span className="flex flex-col font-semibold dark:text-[#ACC0D6] hover:text-blue-500 cursor-pointer">
                        {item.name}
                        <span className="text-sm font-normal mt-[-4px]">
                          {item.email}
                        </span>
                      </span>
                    </td>
                    <td className="text-[#6D777F] dark:text-[#ACC0D6]">
                      {item.date}
                    </td>
                    <td>
                      <span className="text-sm text-[#6D777F] dark:text-[#ACC0D6]">
                        {item.amount}
                      </span>
                    </td>
                    <td className="text-[#6D777F] dark:text-[#ACC0D6] pl-3">
                      {item.due}
                    </td>
                    <td className="pl-3 text-[#6D777F] dark:text-[#ACC0D6]">
                      {item.statusDate}
                    </td>
                    <td className="pl-3">
                      <span
                        className={`p-0.5 text-[12px] px-2.5 align-middle pb-1 bg-${item.color}-200 text-${item.color}-600 rounded`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="flex gap-3 text-xl text-[#6D777F] dark:text-[#ACC0D6]">
                      <MdOutlineRemoveRedEye className="cursor-pointer hover:text-gray-700" />
                      <FaRegEdit className="cursor-pointer hover:text-gray-700" />
                      <HiOutlineTrash className="cursor-pointer hover:text-gray-700" />
                    </td>
                  </tr>
                ))}{" "}
              </table>
            </div>
          </div>
        </div>
      </Navbar>
    </div>
  );
}

export default Invoices;
