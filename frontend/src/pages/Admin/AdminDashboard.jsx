import React from "react";
import { NavLink } from "react-router-dom";
import {AiOutlineHome} from 'react-icons/ai'
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
                alt=''
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
                    className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-100   hover:text-black border-l-4 border-transparent  pr-6"
                  >
                    <span className="inline-flex justify-center items-center ml-4">
                    <AiOutlineHome/>
                    </span>
                    <span className="ml-2 text-sm tracking-wide truncate">
                      Quiz Questions
                    </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-100   hover:text-black border-l-4 border-transparent  pr-6"
                  >
                    <span className="inline-flex justify-center items-center ml-4">
                    <AiOutlineHome/>
                    </span>
                    <span className="ml-2 text-sm tracking-wide truncate">
                      Create Questions
                    </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-100   hover:text-black border-l-4 border-transparent  pr-6"
                  >
                    <span className="inline-flex justify-center items-center ml-4">
                    <AiOutlineHome/>
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
                  <NavLink
                    className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-100   hover:text-black border-l-4 border-transparent  pr-6"
                  >
                    <span className="inline-flex justify-center items-center ml-4">
                    <AiOutlineHome/>
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
                  <NavLink
                    className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-100   hover:text-black border-l-4 border-transparent  pr-6"
                  >
                    <span className="inline-flex justify-center items-center ml-4">
                    <AiOutlineHome/>
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
                  <NavLink
                    className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-100   hover:text-black border-l-4 border-transparent  pr-6"
                  >
                    <span className="inline-flex justify-center items-center ml-4">
                    <AiOutlineHome/>
                    </span>
                    <span className="ml-2 text-sm tracking-wide truncate">
                      Profile
                    </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-100   hover:text-black border-l-4 border-transparent  pr-6"
                  >
                    <span className="inline-flex justify-center items-center ml-4">
                    <AiOutlineHome/>
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

        
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;