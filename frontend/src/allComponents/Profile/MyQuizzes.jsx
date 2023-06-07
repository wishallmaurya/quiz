import React,{useEffect, useState} from "react";
import Menu from "./Menu";
import { AiOutlineClockCircle, AiOutlineCalendar } from "react-icons/ai";
import { axiosInstance } from "../../utils/axiosSetup";

export default function MyQuizzes() {
  const [list,setList]=useState();
  let temp
  let token = JSON.parse(localStorage.getItem("token"));
  let user = JSON.parse(localStorage.getItem("user"));
  console.log(user._id)
  const config = {
    headers: {
      Authorization: token,
    },
  };


  const getResult = async () => {
      const res = await axiosInstance.get(`/result/${user._id}`,config, );
      if (res.data.success) {
        setList(res.data.data)
        console.log("LIST====-----",res.data.data) 
        temp=res.data.data
        console.log("temp====-----",temp[0]) 
      

    }
  }
  useEffect(()=>(
    getResult
  ),[])


  
  return (
    <>
    <div className="bg-[#152C4F] h-20 w-full  mb-5   "></div>
    <div className="flex">
    <div className="flex-col">
          <Menu />
        </div>

      {/* <div className="relative left-2/4">
        <button class="bg-white hover:bg-[#3D5890] text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-60">
          Play More
        </button>
      </div> */}
               {/* Quiz Result Start */}
               <div className="ml-96">
               { list?.map((e)=>(

              <div className="mt-4 mx-4 ">
                <div className="w-[150%] overflow-hidden rounded-lg shadow-xs">
                  <div className="w-[100%] overflow-x-auto">
                    <table className="w-[100%]">
                      {/* <thead>
                        <tr className="text-xs font-semibold tracking-wide text-left text-white uppercase border-b  bg-[#152C4F]">
                          <th className="px-4 py-3">Quiz</th>
                          <th className="px-4 py-3">Questions</th>
                          <th className="px-4 py-3">Date</th>
                          <th className="px-4 py-3">Question Attempt</th>
                          <th className="px-4 py-3">Correct Answer</th>
                          <th className="px-4 py-3">Wrong Answer</th>
                          <th className="px-4 py-3">Score</th>
                        </tr>
                      </thead> */}
                      <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                        <tr className=" hover:bg-[#152C4F]  bg-white  hover:text-white text-black  ">
                          <td className="px-4 py-3 ">
                            <div className="flex items-center text-sm">
                              <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block bg-[#152C4F] text-white">
                                <div className="flex justify-center pt-1">
                                  { list.indexOf(e)+1}
                                   </div>

                            
                              </div>
                              <div>
                                <p className="font-semibold">{e.quizModule.name} </p>
                                
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-3 text-sm">Question 1-{e.totalQuestions}</td>
                          <td className="">
                            <span className="px-4 py-3  ">
                            {e.createdAt.split('T')[0]}
                            </span>
                          </td>
                          {/* <td className>
                            <span className="px-4 py-3  ">{e.questionAttempted}</span>
                          </td>
                          <td className>
                            <span className="px-4 py-3  ">
                            {e.correctAnswers}
                            </span>
                          </td>
                          <td className>
                            <span className="px-4 py-3  ">
                            {e.wrongAnswers}
                            </span>
                          </td> */}
                          <td className>
                            <span className="px-4 py-3  ">
                            {e.score}
                            </span>
                          </td>
                        </tr>
                        </tbody>
                    </table>
                  </div>

                </div>
              </div>
                    ))}

            </div>

            {/* Quiz result end */}
            </div>
    </>
  );
};


