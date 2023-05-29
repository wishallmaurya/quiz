import React from 'react'
import { axiosInstance } from '../../utils/axiosSetup';

import { AiOutlineClockCircle, AiOutlineCalendar } from "react-icons/ai";
const AllResults = () => {
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
            console.log(res.data.data)
          }
        } catch (error) {}
      };
  return (
    <>
      <div className="bg-[#152C4F] h-44 w-full text-white text-center text-[3rem] py-5 ">

      </div>
      <div className="text-green-400 text-center text-[16px] font-light  mt-8">
        You have Scored 3/23
      </div>
      <div className="flex ">

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
<button onClick={getResult}>get all the details</button>
    </>
  )
}

export default AllResults