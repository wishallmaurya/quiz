import React, { useState } from "react";
import Menu from "./Menu";

const MyReward = () => {
  const [rewards,setRewards]=useState()
  let data = JSON.parse(localStorage.getItem("user"));
  
  setRewards(data.rewards )
  return (
    <>
      <div className="bg-[#152C4F] h-44 w-full  mb-5   "></div>
      <div className="flex">
        <div className="flex-col">
          <Menu />
        </div>
        <div className="w-44 h-44 rounded-lg overflow-hidden shadow-lg ">
            <div className="px-5 text-green-400 text-[2rem]">2333</div>
            <div className="px-10">Points</div>
          </div>
     {     rewards?.map((e)=>(
        <div className="w-3/5 h-20 rounded-lg overflow-hidden shadow-lg flex">
          <div className="px-6 mx-10 py-4 flex-col text-[0.8rem]">
            <div className="  mb-2">{e.data}</div>
            <div className="  mb-2">{e.date}</div>
          </div>
          <div className="px-6 mx-10 py-4 text-green-400">
            <div className="font-bold text-sm mb-2">500</div>
          </div>
          <div className="px-6 mx-10 py-4">
            <div className=" text-sm mb-2">Gift Voucher:   </div>
          </div>
          <div className="px-6 mx-1 py-4 bg-gray-300 h-9 w-32"> {e.code}</div> 
        </div>
        ))}
      </div>
    </>
  );
};

export default MyReward;
