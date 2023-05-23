import React from "react";
import Right from "../../assets/images/right.png";
import Menu from "./Menu";
const QuizPaymentDetails = () => {
  return (
    <>
         <div className="bg-[#152C4F] h-44 w-full   mb-5  "></div>
    <div className="flex">
        <div className="flex-col">
          <Menu />
        </div>
      <div className="">
        <div className="text-green-400 text-center text-[16px] font-light  mt-8">
          You have paid your one time Fee
        </div>

        <div className="flex justify-center mt-6 ">
          <div className="w-72 h-80 border  rounded-xl">
            <div>
              <div className="text-xl  mt-5 font-bold text-center">
                One Time Fee
              </div>
              <div className="text-xl font-bold mt-8 text-center">₹100</div>
              <div className="text-gray-600 text-[14px] font-light text-center">
                Per Month / Year
              </div>
              <div>
                <div className="flex ml-6 mt-12">
                  <img className="w-6 m-1 p-1" src={Right} alt="right" />
                  Exciting Rewards
                </div>
              </div>
              <div>
                <div className="flex ml-6 mt-2">
                  <img className="w-6 m-1 p-1" src={Right} alt="right" />
                  100 Questions in 1 Quiz
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default QuizPaymentDetails;
