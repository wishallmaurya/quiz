import React, { useEffect, useState } from "react";
import Menu from "./Menu";
import { axiosInstance } from "../../utils/axiosSetup";
import Spinner from '../../layouts/Spinner'

const MyReward = () => {
  const [rewards, setRewards] = useState();
  const [loading, setLoading] = useState(true)
  let [totalRewards, setTotalRewards] = useState(0);
  let token = JSON.parse(localStorage.getItem("token"));

  const emptyData = [
    {
      rewardType: "no-referral",
      date: "nodataTa",
      code: "nodata to show",
      data:'empty'
    },
  ];

  const config = {
    headers: {
      Authorization: token,
    },
  };
  const fetchData = async () => {
    try {
      const res = await axiosInstance.get(`/user`, config);
      if (res.data.success) {
        if (res.data.data.rewards) {
          setRewards(res.data.data.rewards);
          totalRewardsCount(res.data.data.rewards);
        } else {
          setRewards(emptyData);
          totalRewardsCount(emptyData);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const totalRewardsCount = (rewards) => {
    rewards.map((e) =>
      setTotalRewards(
        (e.rewardType = "referral"
          ? (totalRewards = totalRewards + 500)
          : (totalRewards = totalRewards + 0))
      )
    );
  };
  useEffect(() => fetchData, 
  // eslint-disable-next-line
  []);
  useEffect(()=>{
    rewards?setLoading(false):setLoading(true)
  // eslint-disable-next-line
  },[fetchData])
  console.log(rewards,emptyData);
  return (
    <>
      {/* <div className="bg-[#152C4F] h-20 w-full  mb-5   "></div> */}
      <div className="flex">
        <div className="">
          <Menu />
        </div>
        <div className="w-auto flex-col justify-center items-center m-2 ">
          <div className="w-auto  h-auto py-10 my-10 border-gray-400 border-2 rounded-lg flex justify-center items-center px-5 max-[640px]:flex-col max-[1100px]:ml-2 ml-40">
            
            <img
                className="w-8 h-8 md:w-20 md:h-20 bg-blue-200  rounded-lg"
                src='https://ik.imagekit.io/wish/MAD_QUIZ_PROJECT/Reward-PNG-Transparent-Image.png?updatedAt=1686288893823'
                alt=""
              />
            <div className="px-5 text-green-600 font-bold text-[2rem]">
              {totalRewards}
            </div>
            <div className="text-[0.7rem] pt-3">Points</div>
            <button class="bg-white hover:bg-[#3D5890] text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-auto ml-10" >
            Redeem Voucher
          </button>
          </div>
        <div className="w-auto mt-10 flex flex-col justify-center items-center max-[1100px]:ml-2 ml-40">
          <div className="flex-col  ">
            {loading?<Spinner/>:rewards?.map((e) => (
              <div className="w-[100%] mt-4 h-20 rounded-lg overflow-hidden shadow-lg flex border-gray-400 border-2">
                <div className="px-6 max-[1080px]:mx-1 max-[480px]:px-1 mx-10 py-4 flex-col text-[0.8rem]">
                  <div className="  mb-2">{e.data}</div>
                  <div className="  mb-2">{e.date.split("T")[0]}</div>
                </div>
                <div className="px-6 max-[1080px]:mx-1 max-[480px]:px-1 mx-10 py-4 text-green-600 flex">
                  <div className="font-bold text-sm mb-2">
                    {(e.rewardType = "referral" ? "500" : "")}
                  </div>
                  <div className="pl-2 text-sm mb-2 text-black">
                    Points
                  </div>
                </div>
                <div className="px-6 max-[1080px]:mx-1 max-[480px]:px-1 mx-10 py-4">
                  <div className=" text-sm mb-2">Gift Voucher: </div>
                </div>
                <div className="p-6 max-[1080px]:mx-1 max-[480px]:px-1 mx-1 py-4 bg-gray-300 h-9 w-32 border-2 border-gray-400 border-dashed">
                  {e.code}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default MyReward;
