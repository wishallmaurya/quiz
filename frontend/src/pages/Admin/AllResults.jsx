import React,{useState,useEffect} from 'react'
import { axiosInstance } from '../../utils/axiosSetup';

import { AiOutlineClockCircle, AiOutlineCalendar } from "react-icons/ai";
const AllResults = () => {
  const [resultList,setResultList]=useState()
  let token = JSON.parse(localStorage.getItem("token"));
  const config = {
    headers: {
      Authorization: token,
    },
  };
    const getResult = async () => {
        try {
          const res = await axiosInstance.get("/result/all", config);
          if (res.data.success) {
            setResultList(res.data.data)
          }
        } catch (error) {}
      };
      useEffect(()=>(
        getResult
      ),[])
      console.log(resultList)
      
  return (
    <>
      <div className="text-center font-bold text-[2rem]">List  of the user</div>

      <div className='w-[60%] '>
               { resultList?.map((e)=>(

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
                                  { resultList.indexOf(e)+1}
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

    </>
  )
}

export default AllResults