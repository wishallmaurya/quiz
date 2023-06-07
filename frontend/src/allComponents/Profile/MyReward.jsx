import React, { useEffect, useState } from "react";
import Menu from "./Menu";
import { axiosInstance } from "../../utils/axiosSetup";

const MyReward = () => {
  const [rewards, setRewards] = useState();
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
  useEffect(() => fetchData, []);
  console.log(rewards,emptyData);
  return (
    <>
      <div className="bg-[#152C4F] h-20 w-full  mb-5   "></div>
      <div className="flex">
        <div className="flex-col">
          <Menu />
        </div>
        <div className="flex-col m-10 ml-80">
          <div className="w-44 h-44 rounded-lg overflow-hidden shadow-lg ">
            <div className="px-5 text-green-400 text-[2rem]">
              {totalRewards}
            </div>
            <div className="px-10">Points</div>
          </div>
          <div className="flex-col">
            {rewards?.map((e) => (
              <div className="w-[100%] h-20 rounded-lg overflow-hidden shadow-lg flex">
                <div className="px-6 mx-10 py-4 flex-col text-[0.8rem]">
                  <div className="  mb-2">{e.data}</div>
                  <div className="  mb-2">{e.date.split("T")[0]}</div>
                </div>
                <div className="px-6 mx-10 py-4 text-green-400">
                  <div className="font-bold text-sm mb-2">
                    {(e.rewardType = "referral" ? "500" : "")}
                  </div>
                </div>
                <div className="px-6 mx-10 py-4">
                  <div className=" text-sm mb-2">Gift Voucher: </div>
                </div>
                <div className="px-6 mx-1 py-4 bg-gray-300 h-9 w-32">
                  {" "}
                  {e.code}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyReward;
