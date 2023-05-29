import React from 'react'
import { AiOutlineClockCircle, AiOutlineCalendar,AiOutlineMail } from "react-icons/ai";
const SingleUser = () => {
  return (
    <>
      <div className="text-center font-bold text-[2rem] bg-slate-500 p-5"> User Details </div>
      <div className="flex flex-wrap m-3 p-3">

          <div className="flex-shrink-0 mb-6 h-60 w-60 mx-10 ">
            <img
              src=''
              alt=""
              className="object-cover object-center w-full h-full rounded dark:bg-gray-500"
            />
          </div>
          <div className="flex flex-col space-y-4">
            <div>
              <h2 className="text-2xl font-semibold">username</h2>
              <span className="text-sm dark:text-gray-400"> Referral Code:</span>
              <span className="text-sm dark:text-black"> referralCode</span>
            </div>
            <div className="space-y-1">
              <span className="flex items-center space-x-2">
                <span className="dark:text-gray-400 flex">
                 <AiOutlineMail/> email
                </span>
              </span>
              <span className="flex items-center space-x-2">
                <span className="dark:text-gray-400">address</span>
              </span>
              <span className="flex items-center space-x-2"></span>
            </div>
          </div>
      </div>
      <div className="text-center font-bold text-[2rem] bg-slate-500 p-5"> User Quiz Score </div>

      <div className="text-green-400 text-center text-[16px] font-light  mt-8">
        You have Scored 3/23
      </div>
      <div className="flex ">

        <div className="w-3/5 h-20 rounded-lg overflow-hidden shadow-lg flex">
          <div className="px-6 mx-10 py-4">
            <div className="font-bold text-xl mb-2">Quiz 1</div>
          </div>
          <div className="px-6 mx-10 py-4">
            <div className="font-bold text-xl mb-2">Question 1-100</div>
          </div>
          <div className="px-6 mx-10 py-4 flex-col text-[0.8rem]">
            <div className="  mb-2">
              <AiOutlineCalendar />
              Monday
            </div>
            <div className="  mb-2"> 22 May 2023</div>
          </div>
          <div className=" py-4 flex-col text-[0.8rem]">
            <div className="  mb-2">
             Question Attempt
            </div>
          </div>
          <div className=" py-4 flex-col text-[0.8rem]">
            <div className="  mb-2">
             Correct Answer 
            </div>
          </div>
          <div className=" py-4 flex-col text-[0.8rem]">
            <div className="  mb-2">
             Wrong Answer
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default SingleUser