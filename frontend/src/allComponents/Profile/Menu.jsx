import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
    let data = JSON.parse(localStorage.getItem("user"));
  return (
    <>
    
      <img
        className="w-44 rounded-full border-2 border-sky-100"
        src={data.profilePhoto}
        alt="Rounded avatar"
      />

      <span className="px-10 text-[1.4rem]">{data.username} </span>
      <br />
      <br />
      <br />
      <div className="w-96">
        <NavLink to='/profileInfo' className="block w-64 cursor-pointer rounded-lg p-4 text-left transition duration-500 hover:bg-blue-300 hover:text-black focus:bg-blue-300 focus:text-black focus:ring-0 dark:hover:bg-blue-300 dark:hover:text-black dark:focus:bg-blue-300 dark:focus:text-black">
          Profile Details 
        </NavLink>
        <NavLink to='/myReward' className="block w-64 cursor-pointer rounded-lg p-4 text-black duration-500 hover:bg-blue-300 hover:text-black focus:bg-blue-300 focus:text-black focus:ring-0 dark:hover:bg-blue-300 dark:hover:text-black dark:focus:bg-blue-300 dark:focus:text-black">
         My Rewards 
        </NavLink>
        <NavLink to='/quizPaymentDetails' className="block w-64 cursor-pointer rounded-lg p-4 text-black duration-500 hover:bg-blue-300 hover:text-black focus:bg-blue-300 focus:text-black focus:ring-0 dark:hover:bg-blue-300 dark:hover:text-black dark:focus:bg-blue-300 dark:focus:text-black">
         Quiz Payment Details
        </NavLink>
        <NavLink className="block w-64 cursor-pointer rounded-lg p-4 text-black duration-500 hover:bg-blue-300 hover:text-black focus:bg-blue-300 focus:text-black focus:ring-0 dark:hover:bg-blue-300 dark:hover:text-black dark:focus:bg-blue-300 dark:focus:text-black">
         Transactions
        </NavLink>
        <NavLink to='/myQuiz' className="block w-64 cursor-pointer rounded-lg p-4 text-black duration-500 hover:bg-blue-300 hover:text-black focus:bg-blue-300 focus:text-black focus:ring-0 dark:hover:bg-blue-300 dark:hover:text-black dark:focus:bg-blue-300 dark:focus:text-black">
         My Quiz
        </NavLink>
        <NavLink to='/changePassword' className="block w-64 cursor-pointer rounded-lg p-4 text-black duration-500 hover:bg-blue-300 hover:text-black focus:bg-blue-300 focus:text-black focus:ring-0 dark:hover:bg-blue-300 dark:hover:text-black dark:focus:bg-blue-300 dark:focus:text-black">
         Change Password
        </NavLink>
      </div>
    </>
  );
};

export default Menu;
