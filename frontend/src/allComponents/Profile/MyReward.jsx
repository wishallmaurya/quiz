import React from "react";
import Menu from "./Menu";

const MyReward = () => {
  return (
    <>
      <div className="bg-[#152C4F] h-44 w-full  mb-5   "></div>
      <div className="flex">
        <div className="flex-col">
          <Menu />
        </div>

        <div className="w-3/5 h-20 rounded-lg overflow-hidden shadow-lg flex">
          <div className="px-6 mx-10 py-4 flex-col text-[0.8rem]">
            <div className="  mb-2">Monday</div>
            <div className="  mb-2"> 22 May 2023</div>
          </div>
          <div className="px-6 mx-10 py-4 text-green-400">
            <div className="font-bold text-sm mb-2">43 points</div>
          </div>
          <div className="px-6 mx-10 py-4">
            <div className=" text-sm mb-2">Gift Voucher:   </div>
          </div>
          <div className="px-6 mx-1 py-4 bg-gray-300 h-9 w-32"> 12365129</div> 
        </div>
      </div>
    </>
  );
};

export default MyReward;
