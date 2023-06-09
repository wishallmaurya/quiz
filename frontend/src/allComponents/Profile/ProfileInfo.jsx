import React,{useState} from "react";
import Menu from "./Menu";
import { axiosInstance } from "../../utils/axiosSetup";
import { ToastContainer, toast } from 'react-toastify';

const ProfileInfo = () => {
  let data = JSON.parse(localStorage.getItem("user"));
  let token = JSON.parse(localStorage.getItem("token"));

  const id = data._id;
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  // const [password, setPassword] = useState("");
        

  const config = {
    headers:{
      Authorization:token
    }
  };
  const handleSubmit = async (e) => {

    e.preventDefault();
    try {
      const res = await axiosInstance.put(`/user/update/${id}`, { username, email,address },config);
      
      if (res.data.success) {
        localStorage.setItem("user", JSON.stringify(res.data.data));
        toast.success("Updated  Successfully")
      } else {
        toast.error("something went wrong")

      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
     {/* <div className="bg-[#152C4F] h-44 w-full  mb-5   "></div> */}
     
    {/* <div className=" bg-[#152C4F] h-20 w-full     "></div> */}
    <div className="flex">

        <div className="">
          <Menu />
        </div>
        <div className="w-full flex flex-col justify-center items-center ">
        <div className="md:text-[3rem] text-[2rem] mb-10">Profile details</div>
      <form className="h-96 w-[50%] font-bold"> 
        <div  >
          <div>
            <label className="block mb-2 text-sm font-medium text-black ">
              Username or Name
            </label>
            <input
              type="text"
              id="first_name"
              className=" bg-white-50 border border-gray-300 text-white text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              defaultValue={data.username} onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-black ">
             Email
            </label>
            <input
              type="email"
              id="last_name"
              disabled
              className="bg-white-50 border border-gray-300 text-white text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              defaultValue={data.email} onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          {/* <div>
            <label className="block mb-2 text-sm font-medium text-black ">
             Password
            </label>
            <input
              type="password"
              id="password"
              className="bg-white-50 border border-gray-300 text-white text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div> */}
          <div className="mb-6">
            <label
              htmlFor="large-input"
              className="block mb-2 text-sm font-medium"
            >
              Address
            </label>
            <textarea
              type="text"
              rows={4}
              cols={50}
              id="large-input"
              className="block w-full p-4 text-black border border-gray-300 rounded-sm bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 h-20"
              required
              defaultValue={data.address}  onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        </div>
        <div className="max-[640px]:flex max-[640px]:flex-col max-[1080px]:justify-center">
          <button class="bg-white hover:bg-[#3D5890] text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-60 " onClick={handleSubmit}>
            Save Changes
          </button>
          <button class="bg-white hover:bg-[#3D5890] text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-60 min-[1080px]:mx-8">
            Cancel
          </button>
        </div>
      </form>
      </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default ProfileInfo;
