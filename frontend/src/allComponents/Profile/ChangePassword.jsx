import React, { useState } from "react";
import Menu from "./Menu";
import { axiosInstance } from "../../utils/axiosSetup";
import { ToastContainer, toast } from "react-toastify";

const ChangePassword = () => {
  let data = JSON.parse(localStorage.getItem("user"));
  let token = JSON.parse(localStorage.getItem("token"));

  const [id, setId] = useState(data._id);
  const [password, setPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  const [newPassword2, setNewPassword2] = useState();
  const [passShow, setPassShow] = useState(false);
  const [passShow2, setPassShow2] = useState(false);
  const [passShow3, setPassShow3] = useState(false);

  const matchPassword = (e) => {
    e.preventDefault();

    if (newPassword === newPassword2) {
      handleSubmit(e);
    } else {
      toast.error("Confirm Password not Matched");
    }
  };
  const config = {
    headers: {
      Authorization: token,
    },
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.put(
        `/user/updatePassword/${id}`,
        { password, newPassword },
        config
      );

      if (res.data.success) {
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error(`something went wrong`);

      console.log(error);
    }
  };
  return (
    <>
      {" "}
      <div className="bg-[#152C4F] h-20 w-full "></div>
      <div className="flex">
        <div className="flex-col">
          <Menu />
        </div>
        <form className="ml-56 flex-col flex-wrap">
          <div className="grid gap-6 w-90 relative left-2/4 ">
            <span className="text-[2rem] text-center font-bold">
              Change Password
            </span>

            <div className="relative w-full">
              <label className="block mb-2 text-sm font-medium text-black">
                Old Password
              </label>
              <input
                type={passShow?'text':'password'}
                id="password"
                className=" bg-white-50 border border-gray-300 text-white text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Old Password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="cursor-pointer absolute inset-y-0 right-0 pr-3 pt-6 flex items-center text-sm leading-5"
              onClick={()=>setPassShow(!passShow)}>
                {passShow?'Hide':'Show'}
              </div>
            </div>

            <div className="relative w-full">
              <label className="block mb-2 text-sm font-medium text-black ">
                New Password
              </label>
              <input
                type={passShow2?'text':'password'}
                id="password"
                className="bg-white-50 border border-gray-300 text-white text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                required
                placeholder="New Password"
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <div className="cursor-pointer absolute inset-y-0 right-0 pr-3 pt-6 flex items-center text-sm leading-5" onClick={()=>setPassShow2(!passShow2)}>
              {passShow2?'Hide':'Show'}
              </div>
            </div>
            <div className="relative w-full mb-6">
              <label className="block mb-2 text-sm font-medium text-black ">
                Confirm Password
              </label>
              <input
                type={passShow3?'text':'password'}
                id="password"
                className="bg-white-50 border border-gray-300 text-white text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
                placeholder="Confirm Password"
                onChange={(e) => setNewPassword2(e.target.value)}
              />
            <div className="cursor-pointer absolute inset-y-0 right-0 pr-3 pt-6 flex items-center text-sm leading-5"
            onClick={()=>setPassShow3(!passShow3)}>
              {passShow3?'Hide':'Show'}
            </div>
            </div>
          </div>
          <div className="relative left-2/4">
            <button
              class="bg-white hover:bg-[#3D5890] focus:scale-110 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-60"
              onClick={matchPassword}
            >
              Save Changes
            </button>
            <button class="bg-white hover:bg-[#3D5890]  text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-60 mx-8">
              Cancel
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default ChangePassword;
