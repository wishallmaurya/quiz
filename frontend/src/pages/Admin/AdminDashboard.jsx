import React from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineHome, AiFillPlayCircle } from "react-icons/ai";
import { FaUsers, FaRupeeSign } from "react-icons/fa";
import { VscPassFilled } from "react-icons/vsc";

const AdminDashboard = () => {
  return (
    <>
      <div>
        <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-300  text-black ">
          <div className="fixed w-full flex items-center justify-between h-14 text-white z-10">
            <div className="flex items-center justify-start md:justify-left pl-4 w-14 md:w-64 h-14 bg-[#152C4F]  border-none">
              <img
                className="w-7 h-7 md:w-10 md:h-10 mr-2 rounded-md overflow-hidden"
                src="https://therminic2018.eu/wp-content/uploads/2018/07/dummy-avatar.jpg"
                alt=""
              />
              <span className="hidden md:block ">ADMIN</span>
            </div>
          </div>
          <div className="fixed flex flex-col top-14 left-0 w-14 hover:w-64 md:w-64 bg-[#152C4F] h-full text-white transition-all duration-300 border-none z-10 sidebar">
            <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
              <ul className="flex flex-col py-4 space-y-1">
                <li className="px-5 hidden md:block">
                  <div className="flex flex-row items-center h-8">
                    <div className="text-sm font-light tracking-wide text-gray-400 uppercase">
                      Quiz
                    </div>
                  </div>
                </li>
                <li>
                  <NavLink
                    to="/quiz"
                    className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-100   hover:text-black border-l-4 border-transparent  pr-6"
                  >
                    <span className="inline-flex justify-center items-center ml-4">
                      <AiOutlineHome />
                    </span>
                    <span className="ml-2 text-sm tracking-wide truncate">
                      Quiz Questions
                    </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/createQuestion"
                    className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-100   hover:text-black border-l-4 border-transparent  pr-6"
                  >
                    <span className="inline-flex justify-center items-center ml-4">
                      <AiOutlineHome />
                    </span>
                    <span className="ml-2 text-sm tracking-wide truncate">
                      Create Questions
                    </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/updateQuestion"
                    className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-100   hover:text-black border-l-4 border-transparent  pr-6"
                  >
                    <span className="inline-flex justify-center items-center ml-4">
                      <AiOutlineHome />
                    </span>
                    <span className="ml-2 text-sm tracking-wide truncate">
                      Update Question
                    </span>
                  </NavLink>
                </li>
                <li className="px-5 hidden md:block">
                  <div className="flex flex-row items-center mt-5 h-8">
                    <div className="text-sm font-light tracking-wide text-gray-400 uppercase">
                      Users
                    </div>
                  </div>
                </li>
                <li>
                  <NavLink className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-100   hover:text-black border-l-4 border-transparent  pr-6">
                    <span className="inline-flex justify-center items-center ml-4">
                      <AiOutlineHome />
                    </span>
                    <span className="ml-2 text-sm tracking-wide truncate">
                      User List
                    </span>
                    <span className="hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-500 bg-red-50 rounded-full">
                      New 3+
                    </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-100   hover:text-black border-l-4 border-transparent  pr-6">
                    <span className="inline-flex justify-center items-center ml-4">
                      <AiOutlineHome />
                    </span>
                    <span className="ml-2 text-sm tracking-wide truncate">
                      Users Result
                    </span>
                  </NavLink>
                </li>
                <li className="px-5 hidden md:block">
                  <div className="flex flex-row items-center mt-5 h-8">
                    <div className="text-sm font-light tracking-wide text-gray-400 uppercase">
                      Settings
                    </div>
                  </div>
                </li>
                <li>
                  <NavLink className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-100   hover:text-black border-l-4 border-transparent  pr-6">
                    <span className="inline-flex justify-center items-center ml-4">
                      <AiOutlineHome />
                    </span>
                    <span className="ml-2 text-sm tracking-wide truncate">
                      Profile
                    </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-100   hover:text-black border-l-4 border-transparent  pr-6">
                    <span className="inline-flex justify-center items-center ml-4">
                      <AiOutlineHome />
                    </span>
                    <span className="ml-2 text-sm tracking-wide truncate">
                      Settings
                    </span>
                  </NavLink>
                </li>
              </ul>
              <p className="mb-14 px-5 py-3 hidden md:block text-center text-sm">
                OLIVA MINISTERIES QUIZ
              </p>
            </div>
          </div>

          <div className="h-full ml-14 mt-2 mb-10 md:ml-64">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 gap-4 ">
              <Link
                to="/userlist"
                className="bg-[#152C4F]  shadow-lg rounded-md flex items-center justify-between p-3  text-white font-medium group hover:bg-blue-100 hover:text-black"
              >
                <div className="flex justify-center items-center w-16 h-16 bg-white rounded-full transition-all duration-300 transform group-hover:-rotate-12 text-[#152C4F] hover:bg-blue-200 hover:text-black">
                  <FaUsers size={60} />
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold">257</p>
                  <p>Daily Registration</p>
                </div>
              </Link>
              <Link
                to="userList"
                className="bg-[#152C4F]  shadow-lg rounded-md flex items-center justify-between p-3  text-white font-medium group hover:bg-blue-100 hover:text-black"
              >
                <div className="flex justify-center items-center w-16 h-16 bg-white rounded-full transition-all duration-300 transform group-hover:-rotate-12 text-[#152C4F] hover:bg-blue-200 hover:text-black">
                  <AiFillPlayCircle size={70} />
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold">157</p>
                  <p>Daily Quiz Played</p>
                </div>
              </Link>
              <Link
                to="/AllResults"
                className="bg-[#152C4F]  shadow-lg rounded-md flex items-center justify-between p-3  text-white font-medium group hover:bg-blue-100 hover:text-black"
              >
                <div className="flex justify-center items-center w-16 h-16 bg-white rounded-full transition-all duration-300 transform group-hover:-rotate-12 text-[#152C4F] hover:bg-blue-200 hover:text-black">
                  <VscPassFilled size={70} />
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold">121</p>
                  <p>Daily Passed User</p>
                </div>
              </Link>
              <Link
                to="/"
                className="bg-[#152C4F]  shadow-lg rounded-md flex items-center justify-between p-3  text-white font-medium group hover:bg-blue-100 hover:text-black"
              >
                <div className="flex justify-center items-center w-16 h-16 bg-white rounded-full transition-all duration-300 transform group-hover:-rotate-12 text-[#152C4F] hover:bg-blue-200 hover:text-black">
                  <FaRupeeSign size={50} />
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold">₹ 75,257</p>
                  <p>Daily Earnings</p>
                </div>
              </Link>
            </div>

            {/* userList Start */}
            <div className>
              <div className="mt-4 mx-4">
                <div className="w-full overflow-hidden rounded-lg shadow-xs">
                  <div className="w-full overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="text-xs font-semibold tracking-wide text-left text-white uppercase border-b  bg-[#152C4F]">
                          <th className="px-4 py-3">Users</th>
                          <th className="px-4 py-3">Email</th>
                          <th className="px-4 py-3">Quiz-Played</th>
                          <th className="px-4 py-3">Score</th>
                          <th className="px-4 py-3">Subscription</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                        <tr className="bg-[#152C4F]  hover:bg-blue-100  text-white hover:text-black ">
                          <td className="px-4 py-3">
                            <div className="flex items-center text-sm">
                              <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                                <img
                                  className="object-cover w-full h-full rounded-full"
                                  src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-512.png"
                                  alt=''
                                  loading="lazy"
                                />
                                <div
                                  className="absolute inset-0 rounded-full shadow-inner"
                                  aria-hidden="true"
                                />
                              </div>
                              <div>
                                <p className="font-semibold">User Name </p>
                                <p className="text-xs text-gray-600 dark:text-gray-400">
                                  referralCode
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-3 text-sm">user@gmail.com</td>
                          <td className="">
                            <span className="px-4 py-3  ">
                              General Knowledge Quiz
                            </span>
                          </td>
                          <td className>
                            <span className="px-4 py-3  ">67</span>
                          </td>
                          <td className>
                            <span className="px-4 py-3  ">
                              Yes
                            </span>
                          </td>
                        </tr>
                        <tr className="bg-[#152C4F]  hover:bg-blue-100  text-white hover:text-black ">
                          <td className="px-4 py-3">
                            <div className="flex items-center text-sm">
                              <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                                <img
                                  className="object-cover w-full h-full rounded-full"
                                  src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-512.png"
                                  alt=''
                                  loading="lazy"
                                />
                                <div
                                  className="absolute inset-0 rounded-full shadow-inner"
                                  aria-hidden="true"
                                />
                              </div>
                              <div>
                                <p className="font-semibold">User Name </p>
                                <p className="text-xs text-gray-600 dark:text-gray-400">
                                  referralCode
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-3 text-sm">user@gmail.com</td>
                          <td className="">
                            <span className="px-4 py-3  ">
                              General Knowledge Quiz
                            </span>
                          </td>
                          <td className>
                            <span className="px-4 py-3  ">67</span>
                          </td>
                          <td className>
                            <span className="px-4 py-3  ">
                              Yes
                            </span>
                          </td>
                        </tr>
                        <tr className="bg-[#152C4F]  hover:bg-blue-100  text-white hover:text-black ">
                          <td className="px-4 py-3">
                            <div className="flex items-center text-sm">
                              <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                                <img
                                  className="object-cover w-full h-full rounded-full"
                                  src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-512.png"
                                  alt=''
                                  loading="lazy"
                                />
                                <div
                                  className="absolute inset-0 rounded-full shadow-inner"
                                  aria-hidden="true"
                                />
                              </div>
                              <div>
                                <p className="font-semibold">User Name </p>
                                <p className="text-xs text-gray-600 dark:text-gray-400">
                                  referralCode
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-3 text-sm">user@gmail.com</td>
                          <td className="">
                            <span className="px-4 py-3  ">
                              General Knowledge Quiz
                            </span>
                          </td>
                          <td className>
                            <span className="px-4 py-3  ">67</span>
                          </td>
                          <td className>
                            <span className="px-4 py-3  ">
                              Yes
                            </span>
                          </td>
                        </tr>
                        <tr className="bg-[#152C4F]  hover:bg-blue-100  text-white hover:text-black ">
                          <td className="px-4 py-3">
                            <div className="flex items-center text-sm">
                              <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                                <img
                                  className="object-cover w-full h-full rounded-full"
                                  src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-512.png"
                                  alt=''
                                  loading="lazy"
                                />
                                <div
                                  className="absolute inset-0 rounded-full shadow-inner"
                                  aria-hidden="true"
                                />
                              </div>
                              <div>
                                <p className="font-semibold">User Name </p>
                                <p className="text-xs text-gray-600 dark:text-gray-400">
                                  referralCode
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-3 text-sm">user@gmail.com</td>
                          <td className="">
                            <span className="px-4 py-3  ">
                              General Knowledge Quiz
                            </span>
                          </td>
                          <td className>
                            <span className="px-4 py-3  ">67</span>
                          </td>
                          <td className>
                            <span className="px-4 py-3  ">
                              Yes
                            </span>
                          </td>
                        </tr>
                        <tr className="bg-[#152C4F]  hover:bg-blue-100  text-white hover:text-black ">
                          <td className="px-4 py-3">
                            <div className="flex items-center text-sm">
                              <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                                <img
                                  className="object-cover w-full h-full rounded-full"
                                  src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-512.png"
                                  alt=''
                                  loading="lazy"
                                />
                                <div
                                  className="absolute inset-0 rounded-full shadow-inner"
                                  aria-hidden="true"
                                />
                              </div>
                              <div>
                                <p className="font-semibold">User Name </p>
                                <p className="text-xs text-gray-600 dark:text-gray-400">
                                  referralCode
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-3 text-sm">user@gmail.com</td>
                          <td className="">
                            <span className="px-4 py-3  ">
                              General Knowledge Quiz
                            </span>
                          </td>
                          <td className>
                            <span className="px-4 py-3  ">67</span>
                          </td>
                          <td className>
                            <span className="px-4 py-3  ">
                              Yes
                            </span>
                          </td>
                        </tr>
                        <tr className="bg-[#152C4F]  hover:bg-blue-100  text-white hover:text-black ">
                          <td className="px-4 py-3">
                            <div className="flex items-center text-sm">
                              <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                                <img
                                  className="object-cover w-full h-full rounded-full"
                                  src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-512.png"
                                  alt=''
                                  loading="lazy"
                                />
                                <div
                                  className="absolute inset-0 rounded-full shadow-inner"
                                  aria-hidden="true"
                                />
                              </div>
                              <div>
                                <p className="font-semibold">User Name </p>
                                <p className="text-xs text-gray-600 dark:text-gray-400">
                                  referralCode
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-3 text-sm">user@gmail.com</td>
                          <td className="">
                            <span className="px-4 py-3  ">
                              General Knowledge Quiz
                            </span>
                          </td>
                          <td className>
                            <span className="px-4 py-3  ">67</span>
                          </td>
                          <td className>
                            <span className="px-4 py-3  ">
                              Yes
                            </span>
                          </td>
                        </tr>
                        <tr className="bg-[#152C4F]  hover:bg-blue-100  text-white hover:text-black ">
                          <td className="px-4 py-3">
                            <div className="flex items-center text-sm">
                              <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                                <img
                                  className="object-cover w-full h-full rounded-full"
                                  src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-512.png"
                                  alt=''
                                  loading="lazy"
                                />
                                <div
                                  className="absolute inset-0 rounded-full shadow-inner"
                                  aria-hidden="true"
                                />
                              </div>
                              <div>
                                <p className="font-semibold">User Name </p>
                                <p className="text-xs text-gray-600 dark:text-gray-400">
                                  referralCode
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-3 text-sm">user@gmail.com</td>
                          <td className="">
                            <span className="px-4 py-3  ">
                              General Knowledge Quiz
                            </span>
                          </td>
                          <td className>
                            <span className="px-4 py-3  ">67</span>
                          </td>
                          <td className>
                            <span className="px-4 py-3  ">
                              Yes
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800">
                    <span className="flex items-center col-span-3">
                      Showing 21-30 of 100
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* userList end */}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
