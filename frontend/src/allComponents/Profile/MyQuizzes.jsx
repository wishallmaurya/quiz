import React, { useEffect, useState } from "react";
import Menu from "./Menu";
import { axiosInstance } from "../../utils/axiosSetup";

export default function MyQuizzes() {
  const [list, setList] = useState();
  let temp;
  let token = JSON.parse(localStorage.getItem("token"));
  let user = JSON.parse(localStorage.getItem("user"));
  console.log(user._id);
  const config = {
    headers: {
      Authorization: token,
    },
  };

  const getResult = async () => {
    const res = await axiosInstance.get(`/result/${user._id}`, config);
    if (res.data.success) {
      setList(res.data.data);
      console.log("LIST====-----", res.data.data);
      temp = res.data.data;
      console.log("temp====-----", temp[0]);
    }
  };
  useEffect(() => getResult,
  // eslint-disable-next-line
  []);

  return (
    <>
      {/* <div className="bg-[#152C4F] h-20 w-full  mb-5"></div> */}
      <div className="flex  ">
        <div className="">
          <Menu />
        </div>

        {/* Quiz Result Start */}
        <div className="w-[100%] flex flex-col justify-center items-center max-[640px]:ml-2">
          {list?.map((e) => (
            
                <table className="mt-4 mx-4  w-[100%]">
                  <tbody className="border-2 flex">
                    <tr className=" hover:bg-[#152C4F]  bg-white  hover:text-white text-black  ">
                      <td className="px-4 py-3">
                        <div className="flex items-center text-sm">
                          <div className="relative hidden h-8 w-8 mr-3 rounded-full md:block bg-[#152C4F] text-white">
                            <div className="flex justify-center pt-1">
                              {list.indexOf(e) + 1}
                            </div>
                          </div>
                          <div>
                            <p className="font-semibold">
                              {e.quizModule.name}{" "}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm ">
                        Question 1-{e.totalQuestions}
                      </td>
                      <td className="">
                        <span className="px-4 py-3  ">
                          {e.createdAt.split("T")[0]}
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
                        <span className="px-4 py-3  ">{e.score}</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
          ))}
        </div>

        {/* Quiz result end */}
      </div>
    </>
  );
}
