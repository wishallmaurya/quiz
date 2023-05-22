import React, { useState } from "react";
import Header from "../layouts/Header";
import { axiosInstance } from "../utils/axiosSetup";

const QuizList = () => {
  const [category, setCategory] = useState();

  const config = {
    headers: {
      Authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NjQ2NzNiNmViNDc4OWEzZTRhYTE5ZiIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjg0NDAwNTYyfQ.6Vrf_lVI4WAVpIOP5LFNZukmH3bP4UUw8wNlrxDyINI",
    },
  };
  const handleData = async (e) => {
    try {
      const res = await axiosInstance.get("/category", config);
      if (res.data.success) {
        setCategory(res.data.data);
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header />
      <div className="relative top-[6rem] text-[2rem] font-bold text-black text-center ">
        Select the Quiz to Solve
      </div>
      <button
        className="relative top-[6rem]"
        onClick={handleData}
      >
        Click to show data
      </button>
      <div className="flex">
      {category?.map((p) => (
        <div className="relative top-[8rem] px-8 ">
          <button class="bg-[#3D5890] hover:bg-transparent text-white font-semibold hover:text-blue-700 py-2 px-4 border border-blue-500 hover:border-blue-600 rounded-lg shadow-2xl  my-10 mx-5 h-44 w-80 ">
            {p.name}
          </button>
        </div>
      ))}
      </div>
    </>
  );
};

export default QuizList;
