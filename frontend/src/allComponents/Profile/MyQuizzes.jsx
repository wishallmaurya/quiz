import React,{useEffect, useState} from "react";
import Menu from "./Menu";
import { AiOutlineClockCircle, AiOutlineCalendar } from "react-icons/ai";
import { axiosInstance } from "../../utils/axiosSetup";

export default function MyQuizzes() {
  const [quizList,setQuizList]=useState('');
  let token = JSON.parse(localStorage.getItem("token"));
  let user = JSON.parse(localStorage.getItem("user"));
  console.log(user._id)
  const config = {
    headers: {
      Authorization: token,
    },
  };

  useEffect(()=>(
    getResult()
  ),[])


  const getResult = async () => {
      const res = await axiosInstance.get(`/result/${user._id}`,config, );
      console.log(res)
      if (res.data.success) {
        setQuizList(res.data.data)
        console.log("quizList====-----",res.data.data) 
        console.log(quizList,'.....................') 
      

    }
  }
  
  return (
    <>
    <div className="bg-[#152C4F] h-44 w-full  mb-5   "></div>
    <div className="flex-col">
          <Menu />
        </div>
     { quizList?.map((e)=>(
      <div className="flex  relative left-20 m-2">

        <div className="w-5/6 h-28 rounded-lg overflow-hidden shadow-lg flex">
          <div className="px-6 mx-10 py-4">
            <div className="font-bold text-xl mb-2">{e.quizModule.name}</div>
          </div>
          <div className="px-6 mx-10 py-4">
            <div className="font-bold text-xl mb-2">Question 1-{e.totalQuestions}</div>
          </div>
          <div className="px-6 mx-10 py-4 flex-col text-[0.8rem]">
            <div className="  mb-2">
              <AiOutlineCalendar />
              Monday
            </div>
            <div className="  mb-2"> {e.createdAt}</div>
          </div>
          <div className=" py-4 flex-col text-[0.8rem]">
            <div className="  mb-2 mx-7">
             Question Attempt
            </div>
            <div className="  mb-2 mx-7">
             {e.questionAttempted}
            </div>
          </div>
          <div className=" py-4 flex-col text-[0.8rem]">
            <div className="  mb-2 mx-7">
             Correct Answer 
            </div>
            <div className="  mb-2 mx-7">
             {e.correctAnswers}
            </div>
          </div>
          <div className=" py-4 flex-col text-[0.8rem]">
            <div className="  mb-2 mx-7">
             Wrong Answer 
            </div>
            <div className="  mb-2 mx-7">
            {e.wrongAnswers}
            </div>
            
          </div>
          <div className=" py-4 flex-col text-[0.8rem]">
            <div className="mb-2 mx-7">
            Score
            </div>
            <div className="mb-2 mx-7">
            {e.score}
            </div>
          </div>
        </div>
      </div>
      ))}
      <div className="relative left-2/4">
        <button class="bg-white hover:bg-[#3D5890] text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-60">
          Play More
        </button>
      </div>
    </>
  );
};


