import React from "react";
import Header from "../layouts/Header";
import { useNavigate } from "react-router-dom";

const Language = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div className="bg-gray-400 w-full h-screen flex justify-center items-center">
        <div className="flex-col justify-center items-center bg-white w-[90%] h-[90%]">
          
        <div className=" text-[2rem] font-bold text-black text-center pt-10">
          Choose Your Language
        </div>
        <div className="text-[1.13rem] m-10  text-gray-500 text-center ">
          Select Your Preferred Language to Start the Quiz
        </div>
        <div className="flex flex-wrap mx-4 justify-center">
          <button class="bg-gray-200 hover:bg-[#3D5890] text-black-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded max-[640px]:my-3 my-10 mx-16">
            English
          </button>
          <button class="bg-gray-200 hover:bg-[#3D5890] text-black-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded max-[640px]:my-3 my-10 mx-16">
            Hindi
          </button>
          <button class="bg-gray-200 hover:bg-[#3D5890] text-black-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded max-[640px]:my-3 my-10 mx-16">
            Tamil
          </button>
          <button class="bg-gray-200 hover:bg-[#3D5890] text-black-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded max-[640px]:my-3 my-10 mx-16">
            German
          </button>
        </div>
        <button
          class="bg-[#3D5890] hover:bg-transparent text-white font-semibold hover:text-blue-700 py-2 px-4 border border-blue-500 hover:border-blue-600 rounded  my-10 mx-6 float-right"
          onClick={() => navigate("/quiz")}
        >
          Start the Quiz
        </button>
        </div>
      </div>
    </>
  );
};

export default Language;
