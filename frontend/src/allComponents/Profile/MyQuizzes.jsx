import React from "react";
import Menu from "./Menu";
import { AiOutlineClockCircle, AiOutlineCalendar } from "react-icons/ai";

const MyQuizzes = () => {
  return (
    <>
      <div className="bg-[#152C4F] h-44 w-full text-white text-center text-[3rem] py-5 ">

      </div>
      <div className="text-green-400 text-center text-[16px] font-light  mt-8">
        You have Scored 3/23
      </div>
      <div className="flex ">
        <div className="flex-col">
          <Menu />
        </div>

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
              <AiOutlineClockCircle />
              20:45
            </div>
          </div>
        </div>
      </div>
      <div className="relative left-2/4">
        <button class="bg-white hover:bg-[#3D5890] text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-60">
          Play More
        </button>
      </div>
    </>
  );
};

export default MyQuizzes;
