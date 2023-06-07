import React from "react";
import { Link, NavLink } from "react-router-dom";

const Menu = () => {
  let data = JSON.parse(localStorage.getItem("user"));
  return (
    <>
      <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow fixed ml-2 border-b-gray-600 border  w-72 p-6">
        <img
          className=" flex justify-center rounded-full border-2 border-sky-100"
          src={data.profilePhoto}
          alt="Rounded avatar"
        />

        <span className="px-10 flex justify-center text-[1.4rem]">{data.username} </span>
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
    </>
  );
};

export default Menu;
