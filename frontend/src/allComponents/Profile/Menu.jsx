import React from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineHome, AiFillPlayCircle, AiOutlineDatabase} from "react-icons/ai";
import { FaUsers, FaRupeeSign } from "react-icons/fa";
import { VscPassFilled,VscReferences } from "react-icons/vsc";
import { BsPlay } from "react-icons/bs";
import { MdPassword ,MdOutlinePayment} from "react-icons/md";
import {BiTransferAlt} from "react-icons/bi";
import {GiReceiveMoney} from "react-icons/gi";
import {CgProfile} from "react-icons/cg";


const Menu = () => {
  let data = JSON.parse(localStorage.getItem("user"));
  return (
    <>
      {/* <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow fixed ml-2 border-b-gray-600 border  w-72 p-6">
        <img
          className=" flex justify-center rounded-full border-2 border-sky-100"
          src={data.profilePhoto}
          alt="Rounded avatar"
        />

        <span className="px-10 flex justify-center text-[1.4rem]">{data}username </span>
        <br />
        <br />
        <br />
        <div className="w-96">
          <NavLink
            to="/profileInfo"
            className="block w-64 cursor-pointer rounded-lg p-4 text-left transition duration-500 hover:bg-blue-300 hover:text-black focus:bg-blue-300 focus:text-black focus:ring-0 dark:hover:bg-blue-300 dark:hover:text-black dark:focus:bg-blue-300 dark:focus:text-black"
          >
            Profile Details
          </NavLink>
          <NavLink
            to="/myReward"
            className="block w-64 cursor-pointer rounded-lg p-4 text-black duration-500 hover:bg-blue-300 hover:text-black focus:bg-blue-300 focus:text-black focus:ring-0 dark:hover:bg-blue-300 dark:hover:text-black dark:focus:bg-blue-300 dark:focus:text-black"
          >
            My Rewards
          </NavLink>
          <NavLink
            to="/quizPaymentDetails"
            className="block w-64 cursor-pointer rounded-lg p-4 text-black duration-500 hover:bg-blue-300 hover:text-black focus:bg-blue-300 focus:text-black focus:ring-0 dark:hover:bg-blue-300 dark:hover:text-black dark:focus:bg-blue-300 dark:focus:text-black"
          >
            Quiz Payment Details
          </NavLink>
          <NavLink className="block w-64 cursor-pointer rounded-lg p-4 text-black duration-500 hover:bg-blue-300 hover:text-black focus:bg-blue-300 focus:text-black focus:ring-0 dark:hover:bg-blue-300 dark:hover:text-black dark:focus:bg-blue-300 dark:focus:text-black">
            Transactions
          </NavLink>
          <NavLink
            to="/myQuiz"
            className="block w-64 cursor-pointer rounded-lg p-4 text-black duration-500 hover:bg-blue-300 hover:text-black focus:bg-blue-300 focus:text-black focus:ring-0 dark:hover:bg-blue-300 dark:hover:text-black dark:focus:bg-blue-300 dark:focus:text-black"
          >
            My Quiz
          </NavLink>
          <NavLink
            to="/changePassword"
            className="block w-64 cursor-pointer rounded-lg p-4 text-black duration-500 hover:bg-blue-300 hover:text-black focus:bg-blue-300 focus:text-black focus:ring-0 dark:hover:bg-blue-300 dark:hover:text-black dark:focus:bg-blue-300 dark:focus:text-black"
          >
            Change Password
          </NavLink>
          <Link
            to="/Invite"
            className="block w-64 cursor-pointer rounded-lg p-4 text-black duration-500 hover:bg-blue-300 hover:text-black focus:bg-blue-300 focus:text-black focus:ring-0 dark:hover:bg-blue-300 dark:hover:text-black dark:focus:bg-blue-300 dark:focus:text-black"
          >
            Invite
          </Link>
          <Link
            to="/QuizList"
            className="block w-64 cursor-pointer rounded-lg p-4 text-black duration-500 hover:bg-blue-300 hover:text-black focus:bg-blue-300 focus:text-black focus:ring-0 dark:hover:bg-blue-300 dark:hover:text-black dark:focus:bg-blue-300 dark:focus:text-black"
          >
            Play Quiz
          </Link>
        </div>
      </div>
 */}


      <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-300  text-black ">


          <div className="fixed flex flex-col left-0 w-14 hover:md:w-80 hover:w-60 md:w-80 h-full text-black transition-all duration-300 border-none z-10 sidebar text-[1.5rem] ">
            <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow border-r-2">
              <ul className="flex flex-col py-4 space-y-1">
              <li className="flex flex-col items-center ">
        
              <img
                className="w-8 h-8 md:w-40 md:h-40  border-2 rounded-full  overflow-hidden"
                src={data.profilePhoto}
                alt=""
              />
              <span className="hidden md:block ">{data.username}</span>
         
          </li>
              <li className="px-5 hidden md:block">
                  <div className="flex flex-row items-center mt-5 h-8">
                    <div className="text-[1rem] font-light tracking-wide text-gray-400 uppercase">
                      Profile
                    </div>
                  </div>
                </li>
                <li>
                  <NavLink
                   to="/profileInfo"
                    className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-100   hover:text-black border-l-4 border-transparent  pr-6"
                  >
                    <span className="inline-flex justify-center items-center ml-4">
                      <CgProfile />
                    </span>
                    <span className="ml-2 text-[1.3rem] tracking-wide truncate">
                      Profile Details 
                    </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/myRewards"
                    className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-100   hover:text-black border-l-4 border-transparent  pr-6"
                  >
                    <span className="inline-flex justify-center items-center ml-4">
                      <GiReceiveMoney />
                    </span>
                    <span className="ml-2 text-[1.3rem] tracking-wide truncate">
                      My Rewards
                    </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/quizPaymentDetails"
                    className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-100   hover:text-black border-l-4 border-transparent  pr-6"
                  >
                    <span className="inline-flex justify-center items-center ml-4">
                      <MdOutlinePayment />
                    </span>
                    <span className="ml-2 text-[1.3rem] tracking-wide truncate">
                     Quiz Payment Details
                    </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/quizPaymentDetails"
                    className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-100   hover:text-black border-l-4 border-transparent  pr-6"
                  >
                    <span className="inline-flex justify-center items-center ml-4">
                      <BiTransferAlt />
                    </span>
                    <span className="ml-2 text-[1.3rem] tracking-wide truncate">
                      Transaction 
                    </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/myQuiz"
                    className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-100   hover:text-black border-l-4 border-transparent  pr-6"
                  >
                    <span className="inline-flex justify-center items-center ml-4">
                      <AiOutlineDatabase />
                    </span>
                    <span className="ml-2 text-[1.3rem] tracking-wide truncate">
                      My Quizzes 
                    </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/changePassword"
                    className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-100   hover:text-black border-l-4 border-transparent  pr-6"
                  >
                    <span className="inline-flex justify-center items-center ml-4">
                      <MdPassword />
                    </span>
                    <span className="ml-2 text-[1.3rem] tracking-wide truncate">
                      Change Password 
                    </span>
                  </NavLink>
                </li>
                <li className="px-5 hidden md:block">
                  <div className="flex flex-row items-center mt-5 h-8">
                    <div className="text-[1rem] font-light tracking-wide text-gray-400 uppercase">
                      Other Options
                    </div>
                  </div>
                </li>
                <li>
                  <NavLink
                  to='/Invite' className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-100   hover:text-black border-l-4 border-transparent  pr-6">
                    <span className="inline-flex justify-center items-center ml-4">
                      <VscReferences />
                    </span>
                    <span className="ml-2 text-[1.3rem] tracking-wide truncate">
                    Invite
                    </span>
                    <span className="hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-500 bg-red-50 rounded-full">
                      {/* {userCount?`New ${userCount}+`:''} */}
                    </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                  to='/quizList'
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-100   hover:text-black border-l-4 border-transparent  pr-6">
                    <span className="inline-flex justify-center items-center ml-4">
                      <BsPlay />
                    </span>
                    <span className="ml-2 text-[1.3rem] tracking-wide truncate">
                    Play Quiz 
                    </span>
                  </NavLink>
                </li>
                {/* <li className="px-5 hidden md:block">
                  <div className="flex flex-row items-center mt-5 h-8">
                    <div className="text-sm font-light tracking-wide text-gray-400 uppercase">
                      Settings
                    </div>
                  </div>
                </li> */}
                {/* <li>
                  <NavLink
                  to='/profile' className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-100   hover:text-black border-l-4 border-transparent  pr-6">
                    <span className="inline-flex justify-center items-center ml-4">
                      <AiOutlineHome />
                    </span>
                    <span className="ml-2 text-sm tracking-wide truncate">
                      Profile
                    </span>
                  </NavLink>
                </li> */}
                <li>
                  {/* <NavLink className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-100   hover:text-black border-l-4 border-transparent  pr-6">
                    <span className="inline-flex justify-center items-center ml-4">
                      <AiOutlineHome />
                    </span>
                    <span className="ml-2 text-sm tracking-wide truncate">
                      Settings
                    </span>
                  </NavLink> */}
                </li>
              </ul>
              <Link to='/' className="mb-14 px-5 py-3 hidden md:block text-center text-sm">
                OLIVA MINISTERIES QUIZ
              </Link>
            </div>
          </div>
          </div>
    </>
  );
};

export default Menu;
