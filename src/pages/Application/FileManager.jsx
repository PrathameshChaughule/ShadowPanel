import Navbar from "../../components/Navbar";
import { FaRegSquarePlus } from "react-icons/fa6";
import { TbFolderPlus, TbOctahedron } from "react-icons/tb";
import { MdAddToDrive, MdOutlineIosShare } from "react-icons/md";
import { FaRegFile, FaRegStar } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import { IoMusicalNotesOutline } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CiStar } from "react-icons/ci";
function FileManager() {
  return (
    <div>
      <Navbar>
        <div className="flex flex-col gap-7 sm:p-[24px]">
          <div className="flex text-sm p-2 justify-around sm:justify-between mb-[-15px]">
            <h4 className="md:text-[1.125rem] font-semibold">File Manager</h4>
            <p>
              Home &gt; Application &gt;{" "}
              <span className="md:text-[1rem] font-medium">File Manager</span>
            </p>
          </div>
          <div className="w-[100%] bg-white dark:border-[#011743] dark:bg-[#030318] border border-[#CED2D4] flex rounded">
            {/* left */}
            <div className="w-[26%] border-r dark:border-[#011743] border-[#CED2D4] p-4 px-6">
              <div className="flex items-center gap-2">
                <img
                  src="/assets/images/you.jpg"
                  className="w-10 h-10 rounded-full"
                  alt=""
                />
                <div className="flex flex-col">
                  <span className="text-xl font-bold mt-[-4px]">
                    James Hong
                  </span>
                  <span className="text-sm text-gray-500 mt-[-3px]">
                    jameshong@example.com
                  </span>
                </div>
              </div>
              <hr className="h-1 mt-5 dark:border-[#011743] border-[#CED2D4]" />
              <div className="flex gap-2 hover:bg-blue-700 items-center cursor-pointer justify-center bg-blue-600 text-white p-1.5 rounded font-semibold my-3">
                <FaRegSquarePlus />
                <span>Create New</span>
              </div>
              <ul>
                <li className="flex mb-2 items-center gap-2 p-2 dark:bg-[#0C0C20] bg-blue-100 rounded text-blue-600 font-semibold">
                  <TbFolderPlus />
                  All Folder / Files
                </li>
                <li className="flex mb-2 items-center gap-2 p-2 hover:dark:bg-[#0C0C20] hover:bg-blue-100 cursor-pointer rounded hover:text-blue-600 font-semibold">
                  <MdAddToDrive />
                  Drive
                </li>
                <li className="flex mb-2 items-center gap-2 p-2 hover:dark:bg-[#0C0C20] hover:bg-blue-100 cursor-pointer rounded hover:text-blue-600 font-semibold">
                  <TbOctahedron />
                  Dropbox
                </li>
                <li className="flex mb-2 items-center gap-2 p-2 hover:dark:bg-[#0C0C20] hover:bg-blue-100 cursor-pointer rounded hover:text-blue-600 font-semibold">
                  <MdOutlineIosShare />
                  Shared with Me
                </li>
                <li className="flex mb-2 items-center gap-2 p-2 hover:dark:bg-[#0C0C20] hover:bg-blue-100 cursor-pointer rounded hover:text-blue-600 font-semibold">
                  <FaRegFile />
                  Document
                </li>
                <li className="flex mb-2 items-center gap-2 p-2 hover:dark:bg-[#0C0C20] hover:bg-blue-100 cursor-pointer rounded hover:text-blue-600 font-semibold">
                  <FiClock />
                  Recent File
                </li>
                <li className="flex mb-2 items-center gap-2 p-2 hover:dark:bg-[#0C0C20] hover:bg-blue-100 cursor-pointer rounded hover:text-blue-600 font-semibold">
                  <FaRegStar />
                  Important
                </li>
                <li className="flex mb-2 items-center gap-2 p-2 hover:dark:bg-[#0C0C20] hover:bg-blue-100 cursor-pointer rounded hover:text-blue-600 font-semibold">
                  <IoMusicalNotesOutline />
                  Media
                </li>
              </ul>
              <div className="flex flex-col items-center justify-center text-center dark:bg-[#0C0C20] bg-[#F5F6FA] rounded p-4 gap-2">
                <img src="/assets/images/file-manager-bg.svg" alt="" />
                <span className="font-bold">Upgrade to Pro</span>
                <span className="text-[#6D777F]">
                  Unlock Pro for faster transfers, stronger security, and
                  unlimited storage.
                </span>
              </div>
            </div>
            {/* right */}
            <div className="w-[74%] p-5">
              <span className="font-bold text-xl">Quick Access</span>
              <div className="mt-3 flex gap-6 justify-around items-center">
                <div className="w-[32%] cursor-pointer border dark:border-[#011743] border-gray-300 rounded p-5">
                  <div className="flex items-center justify-between pb-4">
                    <div className="flex items-center gap-2 ">
                      <img src="/assets/images/dropbox.svg" alt="" />
                      <span className="font-semibold hover:text-blue-500 cursor-pointer">
                        Dropbox
                      </span>
                    </div>
                    <BsThreeDotsVertical className="cursor-pointer hover:text-gray-400" />
                  </div>
                  <div className="w-full h-1.5 rounded bg-gray-100">
                    <div className="w-[30%] h-full rounded bg-red-600"></div>
                  </div>
                  <div className="flex justify-between text-sm items-center mt-1">
                    <span>1454 Files</span>
                    <span className="font-semibold">28GB / 300GB</span>
                  </div>
                </div>
                <div className="w-[30%] cursor-pointer border dark:border-[#011743] border-gray-300 rounded p-5">
                  <div className="flex items-center justify-between pb-4">
                    <div className="flex items-center gap-2 ">
                      <img src="/assets/images/drive.svg" alt="" />
                      <span className="font-semibold hover:text-blue-500 cursor-pointer">
                        Google Drive
                      </span>
                    </div>
                    <BsThreeDotsVertical className="cursor-pointer hover:text-gray-400" />
                  </div>
                  <div className="w-full h-1.5 rounded bg-gray-100">
                    <div className="w-[75%] h-full rounded bg-pink-400"></div>
                  </div>
                  <div className="flex justify-between text-sm items-center mt-1">
                    <span>200 Files</span>
                    <span className="font-semibold">24GB / 65GB</span>
                  </div>
                </div>
                <div className="w-[32%] cursor-pointer border dark:border-[#011743] border-gray-300 rounded p-5">
                  <div className="flex items-center justify-between pb-4">
                    <div className="flex items-center gap-2 ">
                      <img src="/assets/images/cloud.svg" alt="" />
                      <span className="font-semibold hover:text-blue-500 cursor-pointer">
                        Cloud Storage
                      </span>
                    </div>
                    <BsThreeDotsVertical className="cursor-pointer hover:text-gray-400" />
                  </div>
                  <div className="w-full h-1.5 rounded bg-gray-100">
                    <div className="w-[50%] h-full rounded bg-green-600"></div>
                  </div>
                  <div className="flex justify-between text-sm items-center mt-1">
                    <span>144 Files</span>
                    <span className="font-semibold">54GB / 60GB</span>
                  </div>
                </div>
              </div>
              <hr className="text-gray-300 dark:border-[#011743] mt-6 mb-3" />
              <span className="font-bold text-xl">Recent Files</span>
              <div className="flex justify-around gap-4 items-center my-3">
                <div className="w-[23%] cursor-pointer border dark:border-[#011743] border-gray-300 rounded p-5">
                  <div className="flex justify-between mb-3 items-center">
                    <img src="/assets/images/file.svg" alt="" />
                    <BsThreeDotsVertical className="cursor-pointer hover:text-gray-400" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold">Final Change.doc</span>
                    <span className="text-sm">26 Jul 2025 | 8MB</span>
                  </div>
                </div>
                <div className="w-[23%] cursor-pointer border dark:border-[#011743] border-gray-300 rounded p-5">
                  <div className="flex justify-between mb-3 items-center">
                    <img src="/assets/images/pdf.svg" alt="" />
                    <BsThreeDotsVertical className="cursor-pointer hover:text-gray-400" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold">Marklist.pdf</span>
                    <span className="text-sm">25 Jul 2025 | 6MB</span>
                  </div>
                </div>
                <div className="w-[23%] cursor-pointer border dark:border-[#011743] border-gray-300 rounded p-5">
                  <div className="flex justify-between mb-3 items-center">
                    <img src="/assets/images/image.svg" alt="" />
                    <BsThreeDotsVertical className="cursor-pointer hover:text-gray-400" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold">nature.png</span>
                    <span className="text-sm">24 Jul 2025 | 6MB</span>
                  </div>
                </div>
                <div className="w-[23%] cursor-pointer border dark:border-[#011743] border-gray-300 rounded p-5">
                  <div className="flex justify-between mb-3 items-center">
                    <img src="/assets/images/folder.svg" alt="" />
                    <BsThreeDotsVertical className="cursor-pointer hover:text-gray-400" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold">Group Photos</span>
                    <span className="text-sm">23 Jul 2025 | 10MB</span>
                  </div>
                </div>
              </div>
              <hr className="text-gray-300 mt-6 mb-3 dark:border-[#011743]" />
              <div className="flex justify-between items-center">
                <span className="font-bold text-xl">Files</span>
                <div className="py-1 px-2.5 rounded border-gray-300 dark:border-[#011743] dark:hover:bg-[#082050] hover:bg-gray-100 cursor-pointer border">
                  <span className="font-semibold">View All</span>
                </div>
              </div>
              <table className="border border-gray-200 dark:border-[#011743] w-full my-2 align-middle items-center">
                <tr className="bg-gray-200 dark:bg-[#030318] font-semibold border-b border-gray-200 dark:border-[#011743]">
                  <th className="text-start p-3 pl-6">Name</th>
                  <th className="text-start">Size</th>
                  <th className="text-start">Type</th>
                  <th className="text-start pl-4">Modified</th>
                  <th className="text-start">Share</th>
                  <th> </th>
                </tr>
                <tr className="border-b border-gray-200 dark:border-[#011743]">
                  <td className="flex items-center gap-2 py-4 ml-6">
                    <img
                      src="/assets/images/pdf.svg"
                      className="bg-gray-200 dark:bg-[#0C0C20] p-1 rounded w-8"
                    />
                    <span className="font-semibold hover:text-blue-500 cursor-pointer">
                      Secret
                    </span>
                  </td>
                  <td className="text-[#6D777F]">7.6 MB</td>
                  <td className="text-[#6D777F]">PDF</td>
                  <td className="text-[#6D777F] pl-4 py-2">
                    <span className="font-semibold text-black/70">
                      Mar 15,2025
                    </span>
                    <br />
                    <span>05:00:14 PM</span>
                  </td>
                  <td>
                    <div className="flex items-center text-3xl">
                      <img
                        src="/assets/images/avatar2.jpg"
                        className="w-7.5 rounded-full mr-[-9px] z-2 cursor-pointer hover:z-5 p-0.5 dark:bg-[#011743] bg-white hover:mb-1.5"
                        alt=""
                      />
                      <img
                        src="/assets/images/avatar4.jpg"
                        className="w-7.5 rounded-full mr-[-9px] z-3 cursor-pointer hover:z-5 p-0.5 dark:bg-[#011743] bg-white hover:mb-1.5"
                        alt=""
                      />
                      <img
                        src="/assets/images/avatar9.jpg"
                        className="w-7.5 rounded-full mr-[-9px] z-4 cursor-pointer hover:z-5 p-0.5 dark:bg-[#011743] bg-white hover:mb-1.5"
                        alt=""
                      />
                      <p className="w-7.5 rounded-full z-4 cursor-pointer hover:z-5 p-[5.5px] text-white bg-blue-600 hover:mb-1.5 text-[15px]">
                        +2
                      </p>
                    </div>
                  </td>
                  <td className="flex gap-3 items-center">
                    <CiStar className="text-2xl cursor-pointer" />
                    <BsThreeDotsVertical className="text-xl cursor-pointer hover:text-gray-500" />
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-[#011743]">
                  <td className="flex items-center gap-2 py-4 ml-6">
                    <img
                      src="/assets/images/file.svg"
                      className="bg-gray-200 dark:bg-[#0C0C20] p-1 rounded w-8"
                    />
                    <span className="font-semibold hover:text-blue-500 cursor-pointer">
                      Sophie Headrick
                    </span>
                  </td>
                  <td className="text-[#6D777F]">7.4 MB</td>
                  <td className="text-[#6D777F]">Doc</td>
                  <td className="text-[#6D777F] pl-4 py-2">
                    <span className="font-semibold text-black/70">
                      Jan 8,2025
                    </span>
                    <br />
                    <span>08:20:13 PM</span>
                  </td>
                  <td>
                    <div className="flex items-center text-3xl">
                      <img
                        src="/assets/images/avatar12.jpg"
                        className="w-7.5 rounded-full mr-[-9px] z-2 cursor-pointer hover:z-5 p-0.5 dark:bg-[#011743] bg-white hover:mb-1.5"
                        alt=""
                      />
                      <img
                        src="/assets/images/avatar5.jpg"
                        className="w-7.5 rounded-full mr-[-9px] z-3 cursor-pointer hover:z-5 p-0.5 dark:bg-[#011743] bg-white hover:mb-1.5"
                        alt=""
                      />
                    </div>
                  </td>
                  <td className="flex gap-3 items-center">
                    <CiStar className="text-2xl cursor-pointer" />
                    <BsThreeDotsVertical className="text-xl cursor-pointer hover:text-gray-500" />
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-[#011743]">
                  <td className="flex items-center gap-2 py-4 ml-6">
                    <img
                      src="/assets/images/image.svg"
                      className="bg-gray-200 dark:bg-[#0C0C20] p-1 rounded w-8"
                    />
                    <span className="font-semibold hover:text-blue-500 cursor-pointer">
                      Gallery
                    </span>
                  </td>
                  <td className="text-[#6D777F]">6.1 MB</td>
                  <td className="text-[#6D777F]">Image</td>
                  <td className="text-[#6D777F] pl-4 py-2">
                    <span className="font-semibold text-black/70">
                      Aug 6,2025
                    </span>
                    <br />
                    <span>04:10:12 PM</span>
                  </td>
                  <td>
                    <div className="flex items-center text-3xl">
                      <img
                        src="/assets/images/avatar3.jpg"
                        className="w-7.5 rounded-full mr-[-9px] z-2 cursor-pointer hover:z-5 p-0.5 dark:bg-[#011743] bg-white hover:mb-1.5"
                        alt=""
                      />
                      <img
                        src="/assets/images/avatar14.jpg"
                        className="w-7.5 rounded-full mr-[-9px] z-3 cursor-pointer hover:z-5 p-0.5 dark:bg-[#011743] bg-white hover:mb-1.5"
                        alt=""
                      />
                      <img
                        src="/assets/images/avatar16.jpg"
                        className="w-7.5 rounded-full mr-[-9px] z-4 cursor-pointer hover:z-5 p-0.5 dark:bg-[#011743] bg-white hover:mb-1.5"
                        alt=""
                      />
                      <p className="w-7.5 rounded-full z-4 cursor-pointer hover:z-5 p-[5.5px] text-white bg-blue-600 hover:mb-1.5 text-[15px]">
                        +1
                      </p>
                    </div>
                  </td>
                  <td className="flex gap-3 items-center">
                    <CiStar className="text-2xl cursor-pointer" />
                    <BsThreeDotsVertical className="text-xl cursor-pointer hover:text-gray-500" />
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-[#011743]">
                  <td className="flex items-center gap-2 py-4 ml-6">
                    <img
                      src="/assets/images/folder.svg"
                      className="bg-gray-200 dark:bg-[#0C0C20] p-1 rounded w-8"
                    />
                    <span className="font-semibold hover:text-blue-500 cursor-pointer">
                      Dorls Crowley
                    </span>
                  </td>
                  <td className="text-[#6D777F]">20 MB</td>
                  <td className="text-[#6D777F]">Folder</td>
                  <td className="text-[#6D777F] pl-4 py-2">
                    <span className="font-semibold text-black/70">
                      Jan 6,2025
                    </span>
                    <br />
                    <span>03:40:14 PM</span>
                  </td>
                  <td>
                    <div className="flex items-center text-3xl">
                      <img
                        src="/assets/images/avatar7.jpg"
                        className="w-7.5 rounded-full mr-[-9px] z-2 cursor-pointer hover:z-5 p-0.5 dark:bg-[#011743] bg-white hover:mb-1.5"
                        alt=""
                      />
                      <img
                        src="/assets/images/avatar10.jpg"
                        className="w-7.5 rounded-full mr-[-9px] z-3 cursor-pointer hover:z-5 p-0.5 dark:bg-[#011743] bg-white hover:mb-1.5"
                        alt=""
                      />
                      <img
                        src="/assets/images/avatar13.jpg"
                        className="w-7.5 rounded-full mr-[-9px] z-4 cursor-pointer hover:z-5 p-0.5 dark:bg-[#011743] bg-white hover:mb-1.5"
                        alt=""
                      />
                    </div>
                  </td>
                  <td className="flex gap-3 items-center">
                    <CiStar className="text-2xl cursor-pointer" />
                    <BsThreeDotsVertical className="text-xl cursor-pointer hover:text-gray-500" />
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-[#011743]">
                  {" "}
                  <td className="flex items-center gap-2 py-4 ml-6">
                    <img
                      src="/assets/images/xls.svg"
                      className="w-8 bg-gray-200 dark:bg-[#0C0C20] p-1 rounded"
                    />
                    <span className="font-semibold hover:text-blue-500 cursor-pointer">
                      Cheat_codez
                    </span>
                  </td>
                  <td className="text-[#6D777F]">8 MB</td>
                  <td className="text-[#6D777F]">XML</td>
                  <td className="text-[#6D777F] pl-4 py-2">
                    <span className="font-semibold text-black/70">
                      Oct 12,2025
                    </span>
                    <br />
                    <span>02:00:10 PM</span>
                  </td>
                  <td>
                    <div className="flex items-center text-3xl">
                      <img
                        src="/assets/images/avatar16.jpg"
                        className="w-7.5 rounded-full mr-[-9px] z-2 cursor-pointer hover:z-5 p-0.5 dark:bg-[#011743] bg-white hover:mb-1.5"
                        alt=""
                      />
                      <img
                        src="/assets/images/avatar15.jpg"
                        className="w-7.5 rounded-full mr-[-9px] z-3 cursor-pointer hover:z-5 p-0.5 dark:bg-[#011743] bg-white hover:mb-1.5"
                        alt=""
                      />
                      <img
                        src="/assets/images/avatar14.jpg"
                        className="w-7.5 rounded-full mr-[-9px] z-4 cursor-pointer hover:z-5 p-0.5 dark:bg-[#011743] bg-white hover:mb-1.5"
                        alt=""
                      />
                      <img
                        src="/assets/images/avatar13.jpg"
                        className="w-7.5 rounded-full mr-[-9px] z-4 cursor-pointer hover:z-5 p-0.5 dark:bg-[#011743] bg-white hover:mb-1.5"
                        alt=""
                      />
                    </div>
                  </td>
                  <td className="flex gap-3 items-center">
                    <CiStar className="text-2xl cursor-pointer" />
                    <BsThreeDotsVertical className="text-xl cursor-pointer hover:text-gray-500" />
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </Navbar>
    </div>
  );
}

export default FileManager;
