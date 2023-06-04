import React, { useEffect, useState } from 'react'
import {  AiOutlineCalendar,AiOutlineMail } from "react-icons/ai";
import { axiosInstance } from '../../utils/axiosSetup';
const SingleUser = () => {
    const [list,setList]=useState();
    const [username, setUsername] = useState();
    const [profilePhoto, setProfilePhoto] = useState();
    const [email, setEmail] = useState();
    const [referralCode, setReferralCode] = useState();
    const [address, setAddress] = useState();
    let token = JSON.parse(localStorage.getItem("token"));
    const config = {
      headers: {
        Authorization: token,
      },
    };
      const getResult = async () => {
          try {
            const res = await axiosInstance.get("/result/637e10cfa459c390c7127b5f",config, );
            if (res.data.success) {
              // console.log(res.data.data)
              setList(res.data.data)
            }
          } catch (error) {}
        };
      const getUser = async () => {
          try {
            const res = await axiosInstance.get(`/user/singleUser/64746559f643e9d4f9bcd1f8`,config, );
            if (res.data.success) {
              setUsername(res.data.data.username)
              setProfilePhoto(res.data.data.profilePhoto)
              setEmail(res.data.data.email)
              setReferralCode(res.data.data.referralCode)
              setAddress(res.data.data.address)
            }
          } catch (error) {}
        };
        useEffect(()=>{
            getResult()
            getUser()
        },[])
  return (
    <>
      <div className="text-center font-bold text-[2rem] bg-[#152C4F] text-white p-5"> User Details </div>
      <div className="flex flex-wrap m-3 p-3">

          <div className="flex-shrink-0 mb-6 h-60 w-60 mx-10 ">
            <img
              src={profilePhoto}
              alt=""
              className="object-cover object-center w-full h-full rounded dark:bg-gray-500"
            />
          </div>
          <div className="flex flex-col space-y-4">
            <div>
            <span className="text-sm dark:text-gray-400">Username:</span>
              <span className="text-2xl font-semibold">{username}</span>
              <br />
              <span className="text-sm dark:text-gray-400"> Referral Code:</span>
              <span className="text-sm dark:text-black"> {referralCode}</span>
            </div>
            <div className="space-y-1">
              <span className="flex items-center space-x-2">
                <span className="text-sm dark:text-black flex">
              <span className="text-sm dark:text-gray-400">Email::</span>
                 
                 <AiOutlineMail/> {email}
                </span>
              </span>
              <span className="flex items-center space-x-2">
              <span className="text-sm dark:text-gray-400"> Referral Code:</span>
                <span className="text-sm dark:text-gray-400">{address}</span>
              </span>
              <span className="flex items-center space-x-2"></span>
            </div>
          </div>
      </div>
      <div className="text-center font-bold text-[2rem] bg-[#152C4F] text-white p-5"> User Quiz Score </div>
     { list?.map((e)=>(
      <div className="flex  relative left-20 m-2">

        <div className="w-5/6 h-28 rounded-lg overflow-hidden shadow-lg flex">
          <div className="px-6 mx-10 py-4">
            <div className="font-bold text-xl mb-2">{e.quizModule.name}</div>
          </div>
          <div className="px-6 mx-10 py-4">
            <div className="font-bold text-xl mb-2">Question 1-{e.totalQuestions}</div>
          </div>
          <div className="px-6 mx-10 py-4 flex-col text-[0.8rem]">
            <div className="  mb-2">
              <AiOutlineCalendar />
              Monday
            </div>
            <div className="  mb-2"> {e.createdAt}</div>
          </div>
          <div className=" py-4 flex-col text-[0.8rem]">
            <div className="  mb-2 mx-7">
             Question Attempt
            </div>
            <div className="  mb-2 mx-7">
             {e.questionAttempted}
            </div>
          </div>
          <div className=" py-4 flex-col text-[0.8rem]">
            <div className="  mb-2 mx-7">
             Correct Answer 
            </div>
            <div className="  mb-2 mx-7">
             {e.correctAnswers}
            </div>
          </div>
          <div className=" py-4 flex-col text-[0.8rem]">
            <div className="  mb-2 mx-7">
             Wrong Answer 
            </div>
            <div className="  mb-2 mx-7">
            {e.wrongAnswers}
            </div>
            
          </div>
          <div className=" py-4 flex-col text-[0.8rem]">
            <div className="mb-2 mx-7">
            Score
            </div>
            <div className="mb-2 mx-7">
            {e.score}
            </div>
          </div>
        </div>
      </div>
      ))}
    </>
  )
}

export default SingleUser