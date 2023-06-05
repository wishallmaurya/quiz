import React, { useEffect, useLayoutEffect, useState } from "react";
import { axiosInstance } from "../../utils/axiosSetup";
import { AiOutlineMail } from "react-icons/ai";

const DailyRegisteredUser = () => {
  let token = JSON.parse(localStorage.getItem("token"));

  const [userList, setUserList] = useState();
  const config = {
    headers: {
      Authorization: token,
    },
  };

  const getUser = async () => {
    console.log("called");

    const res = await axiosInstance.get("dashboard/dailyRegistration", config);
    if (res.data.success) {
      setUserList(res.data.data);
    }
  };
  useEffect(() => getUser, []);
  return (
    <>
      <div className="text-center font-bold text-[2rem]">List of Daily Registered user</div>
      <div className="flex-row flex-wrap m-3 p-3">
        {userList?.map((item, i) => (
          <div className="flex flex-row  w-5/6 p-10 ml-5  bg:white text-black border-2 border-grey-500">
            <div className="flex-shrink-0 w-10 mb-6 h-10 mx-10">
              <img
                src={item.profilePhoto}
                alt=""
                className="object-cover object-center w-full h-full rounded dark:bg-gray-500 "
              />
            </div>
            <div className="flex flex-row space-y-1 space-x-10">
              <div className="">
                <h2 className="text-2xl font-semibold ">{item.username}</h2>
                <span className="text-sm dark:text-gray-400">
                  {" "}
                  Referral Code:
                </span>
                <span className="text-sm dark:text-black">
                  {" "}
                  {item.referralCode}
                </span>
              </div>
              <div className="space-y-1 space-x-10">
                <span className="flex items-center space-x-2">
                  <span className="dark:text-gray-400 flex">
                    <AiOutlineMail /> {item.email}
                  </span>
                </span>
              </div>
              <div className="space-y-1 space-x-10">
                <span className="flex items-center space-x-2">
                  <span className="dark:text-gray-400">{item.address}</span>
                </span>
                <span className="flex items-center space-x-2"></span>
              </div>
              <div className="absolute right-80">
                {/* <button className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-red-900">
                  More details
                </button> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DailyRegisteredUser;
