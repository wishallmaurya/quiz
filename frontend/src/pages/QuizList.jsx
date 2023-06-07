import React, { useState,useEffect } from "react";
import Header from "../layouts/Header";
import { axiosInstance } from "../utils/axiosSetup";
import { useNavigate, } from "react-router-dom";

const QuizList = () => {
  const navigate=useNavigate()
  let token = JSON.parse(localStorage.getItem("token"));

  const [category, setCategory] = useState();

  const config = {
    headers: {
      Authorization:token,
    },
  };
  const handleData = async (e) => {
    try {
      const res = await axiosInstance.get("/quiz-module", config);
      if (res.data.success) {
        setCategory(res.data.data);
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleNavigateForm = (id) => {
    navigate(`/quiz/${id}`);
  }
  useEffect(()=>(handleData),[])

  return (
    <>
      <Header />
      <div className="relative top-[6rem] text-[2rem] font-bold text-black text-center ">
        Select the Quiz to Solve
      </div>
      <div className="flex flex-wrap flex-grow justify-center">
      {category?.map((p) => (
        <div className="relative top-[8rem] px-8 ">
          <button class="bg-[#3D5890] hover:bg-transparent text-white font-semibold hover:text-blue-700 py-2 px-4 border border-blue-500 hover:border-blue-600 rounded-lg shadow-2xl  my-8 mx-5 h-52 w-96 max-[640px]:w-40 max-[640px]:h-16 max-[640px]:mx-2 max-[640px]:my-4" 
          onClick={()=>handleNavigateForm(p?._id)}>
            {p.name}
            {/* <br />
            <div className="mt-4 text-[10px]">Number of Question :{p.noOfQuestions}</div> */}
            
          </button> 
        </div>
      ))}
      </div>
    </>
  );
};

export default QuizList;
