import React from "react";
import Header from "../layouts/Header";
import { useNavigate } from "react-router-dom";

const Language = () => {
    const navigate=useNavigate()
  return (
    <>
      <Header />
      <div className="">
      <div className="relative top-[12rem] text-[2rem] font-bold text-black text-center ">
        Choose Your Language
      </div>
      <div className="relative top-[15rem]  text-[1.13rem] text-gray-500 text-center ">
        Select Your Preferred Language to Start the Quiz                                
      </div>
      <div className="flex mx-6 justify-center relative top-[20rem]">
        <button class="bg-gray-200 hover:bg-[#3D5890] text-black-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded my-10 mx-16">
          English
        </button>
        <button class="bg-gray-200 hover:bg-[#3D5890] text-black-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded my-10 mx-16">
          Hindi
        </button>
        <button class="bg-gray-200 hover:bg-[#3D5890] text-black-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded my-10 mx-16">
          Tamil
        </button>
        <button class="bg-gray-200 hover:bg-[#3D5890] text-black-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded my-10 mx-16">
          German
        </button>

      </div>
      <button class="bg-[#3D5890] hover:bg-transparent text-white font-semibold hover:text-blue-700 py-2 px-4 border border-blue-500 hover:border-blue-600 rounded  my-10 mx-1 absolute right-[10rem] top-[40rem]" onClick={()=>navigate("/quizList")}>
        Start the Quiz 
      </button>
      </div>
    </>
  );
};

export default Language;
