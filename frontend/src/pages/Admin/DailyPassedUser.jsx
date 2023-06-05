import React, { useEffect, useLayoutEffect, useState } from "react";
import { axiosInstance } from "../../utils/axiosSetup";
import { AiOutlineMail } from "react-icons/ai";

const DailyPassedUser = () => {
  let token = JSON.parse(localStorage.getItem("token"));

  const [quizList, setQuizList] = useState();
  console.log(quizList)
  const config = {
    headers: {
      Authorization: token,
    },
  };

  const getUser = async () => {
    console.log("called");

    const res = await axiosInstance.get("dashboard/dailyPassedUser", config);
    if (res.data.success) {
      setQuizList(res.data.data);
    }
  };
  useEffect(() => getUser, []);
  return (
    <>
      <div className="text-center font-bold text-[2rem]">List of Daily Passed User</div>
      <div className="flex-row flex-wrap m-3 p-3">
        {/* <table className="w-[100%]">
        <tbody>
          <tr className="text-xs font-semibold tracking-wide text-left text-white uppercase border-b  bg-[#152C4F]">
            <th className="px-3 py-3">Sn</th>
            <th className="px-3 py-3 ">Quiz</th>
            <th className="px-4 py-3 flex justify-center">Questions</th>
            <th className="px-4 py-3">Score</th>
            <th className="px-4 py-3">Username</th>
          </tr>
        </tbody>
        </table> */}
        <div className="w-[100%]">
        {quizList?.map((e) => (
  <div className="">
  <div className="w-[100%] overflow-hidden rounded-lg shadow-xs">
    <div className="w-[100%] overflow-x-auto">
      <table className="w-[100%]">
        <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
          <tr className=" hover:bg-[#152C4F]  bg-white  hover:text-white text-black  ">
            <td className="py-3 ">
                <div className="w-8 h-8  rounded-full bg-[#152C4F] text-white">
                  <div className="flex justify-center pt-1">
                    { quizList.indexOf(e)+1}
                     </div>
                </div>
                </td>
                <td>
                  <div className=" font-semibold">{e.quizModule.name} </div>
   
            </td>
            <td className="px-4 py-3   text-sm f">Question 1-{e.totalQuestions}</td>

            <td className>
              <span className="px-4 py-3  ">
              {e.score}
              </span>
            </td>
            <td className>
              <div className="px-4 py-3  ">
              {e.userId.username}
              </div>
            </td>
          </tr>
          </tbody>
      </table>
    </div>

  </div>
</div>
        ))}
      </div>
      </div>
    </>
  );
};

export default DailyPassedUser;
