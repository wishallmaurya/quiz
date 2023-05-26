import React, { useState } from "react";
import { axiosInstance } from "../../utils/axiosSetup";
import { useEffect } from "react";
import {AiOutlineMail} from 'react-icons/ai'

const AllUserList = () => {
  let token = JSON.parse(localStorage.getItem("token"));
  const [userList, setUserList] = useState();
  const [id, setId] = useState();
  const config = {
    headers: {
      Authorization: token,
    },
  };
  const getUser = async () => {
    console.log('called')
    try {
      const res = await axiosInstance.get("/user/all", config);
      if (res.data.success) {
        setUserList(res.data.data);
      }
    } catch (error) {}
  };
  useEffect(()=>{
    getUser()
  },[])

const deleteUser=async(id)=>{
        try {
            
            const res = await axiosInstance.delete(`/user/${id}`, config);

            console.log(res)
        } catch (error) {
            
        }
}


  return (
    <>
      <div className="text-center font-bold text-[2rem]">List  of the user</div>
      <div className="flex flex-wrap m-3 p-3">
      {userList?.map((e) => (
        <div className="w-96 p-10 m-5  bg:white text-black border-2 border-grey-500">
          <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
            <img
              src={e.profilePhoto}
              alt=""
              className="object-cover object-center w-full h-full rounded dark:bg-gray-500"
            />
          </div>
          <div className="flex flex-col space-y-4">
            <div>
              <h2 className="text-2xl font-semibold">{e.username}</h2>
              <span className="text-sm dark:text-gray-400"> Referral Code:</span>
              <span className="text-sm dark:text-black"> {e.referralCode}</span>
            </div>
            <div className="space-y-1">
              <span className="flex items-center space-x-2">
                <span className="dark:text-gray-400 flex">
                 <AiOutlineMail/> {e.email}
                </span>
              </span>
              <span className="flex items-center space-x-2">
                <span className="dark:text-gray-400">{e.address}</span>
              </span>
              <span className="flex items-center space-x-2"></span>
            </div>
            <button className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={deleteUser}>Delete</button>
          </div>
        </div>
      ))} 
      </div>
    </>
  );
};

export default AllUserList;
