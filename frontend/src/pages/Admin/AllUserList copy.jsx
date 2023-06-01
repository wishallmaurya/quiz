import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../utils/axiosSetup";
import { useEffect } from "react";
import {AiOutlineMail} from 'react-icons/ai'
import { getAPI,postAPI,deleteAPI } from "../../network";

export default function AllUserList(){
  const navigate=useNavigate();
  
  const [userList, setUserList] = useState();
  const [id, setId] = useState();
  

  useEffect(()=>{
    getUser()
  },[])
  const getUser = async () => {
    console.log('called')
    try {
      const data = await getAPI("/user/all");
      if (data) {
        console.log(data,"data-----------------------")
        setUserList(data);
      }
    } catch (error) {}
  };


const deleteUser=(id)=>{
      
          console.log('delete click============')
          // const res = await axiosInstance.delete(`/user/${id}`, config);
        
}


  return (
    <>
      <div className="text-center font-bold text-[2rem]">List  of the user</div>
      <div className="flex-row flex-wrap m-3 p-3">
      {userList?.map((e) => (
        <div className="flex flex-row  w-5/6 p-10 ml-5  bg:white text-black border-2 border-grey-500">
          <div className="flex-shrink-0 w-10 mb-6 h-10 mx-10">
            <img
              src={e.profilePhoto}
              alt=""
              className="object-cover object-center w-full h-full rounded dark:bg-gray-500 "
            />
          </div>
          <div className="flex flex-row space-y-1 space-x-10">
            <div className="">
              <h2 className="text-2xl font-semibold ">{e.username}</h2>
              <span className="text-sm dark:text-gray-400"> Referral Code:</span>
              <span className="text-sm dark:text-black"> {e.referralCode}</span>
            </div>
            <div className="space-y-1 space-x-10">
              <span className="flex items-center space-x-2">
                <span className="dark:text-gray-400 flex">
                 <AiOutlineMail/> {e.email}
                </span>
              </span>
            </div>
            <div className="space-y-1 space-x-10">
              <span className="flex items-center space-x-2">
                <span className="dark:text-gray-400">{e.address}</span>
              </span>
              <span className="flex items-center space-x-2"></span>
              </div>
            <div className="absolute right-80">
            <button className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
            <button className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-red-900">More details</button>
          </div>
          </div>
        </div>
      ))} 
      </div>
    </>
  );
};


