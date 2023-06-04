import React, { useState } from "react";
import Button from "../components/Button";
import { ToastContainer, toast } from "react-toastify";
import Google from "../assets/images/g_search.png";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { axiosInstance } from "../utils/axiosSetup";

export default function SignUp(props) {
  const [referedBy, setReferral] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [checkBox, setCheckBox] = useState(true);
  const navigate = useNavigate();

  // checkbox 
  const check=(e)=>{
    e.preventDefault();
    if(!checkBox){
      toast.error('Accept to Term and Conditions ')
    }else{
      handleSubmit(e)
    }
  }

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if(!checkBox){
        toast.error('Accept the Term and Conditions ')
      }
      const res = await axiosInstance.post("/user/create", {
        username,
        email,
        password, 
        address,
        referedBy,
      });
      console.log(res.data);
      if (res.data.success) {
        toast.success(res.data.message);
        setTimeout(() => {
          navigate("/signIn");
        }, 900);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error("something went wrong");
      console.log(error);
    }
  };
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-[100%]  flex justify-center sm:w-1/2 ">
        <div className="flex justify-center flex-col w-96  ">
          <div className="p-3 flex justify-center ">
              
              <img
                src={require("../assets/images/logo.png")}
                alt=""
                style={{
                  width: "10rem",
                }}
              />
            </div>
            <div className="text-[rgba(0, 0, 0, 0.6)] p-6 text-center text-[14px] flex justify-center">
              Register to create an account with Oliva Ministries
            </div>
            <div>
              <form onSubmit={check}>
                <div className="form-group mb-6 mt-4">
                  <label
                    for="exampleInputEmail2"
                    className="form-label inline-block mb-2 text-gray-700 text-[14px]"
                  >
                    Referral Code
                  </label>
                  <input
                    type="text"
                    className="form-control block text-[14px] w-full px-3  text-base  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleInputEmail2"
                    aria-describedby="emailHelp"
                    placeholder="Enter Referral Code"
                    onChange={(e) => setReferral(e.target.value)}
                  />
                </div>
                <div className="form-group mb-6 mt-4">
                  <label
                    for="exampleInputEmail2"
                    className="form-label inline-block mb-2 text-gray-700 text-[14px]"
                  >
                    Name{" "}
                  </label>
                  <span style={{ color: "red" }}> &nbsp; *</span>
                  <input
                    type="text"
                    className="form-control block text-[14px] w-full px-3  text-base  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Enter Name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="form-group mb-6 mt-4">
                  <label
                    for="exampleInputEmail2"
                    className="form-label inline-block mb-2 text-gray-700 text-[14px]"
                  >
                    Email{" "}
                  </label>
                  <span style={{ color: "red" }}> &nbsp; *</span>
                  <input
                    type="email"
                    className="form-control block text-[14px] w-full px-3  text-base  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleInputEmail2"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group mb-6 mt=2">
                  <label
                    for="exampleInputPassword2"
                    className="form-label inline-block mb-2 text-gray-700 text-[14px]"
                  >
                    Password
                  </label>
                  <span style={{ color: "red" }}> &nbsp; *</span>
                  <input
                    type="password"
                    className="form-control block w-full px-3 py-1.5 text-base text-[14px] text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleInputPassword2"
                    placeholder="Enter Your Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="form-group mb-6 mt=2">
                  <label
                    for="exampleInputPassword2"
                    className="form-label inline-block mb-2 text-gray-700 text-[14px]"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control block w-full px-3 py-1.5 text-base text-[14px] text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleInputPassword2"
                    placeholder="Enter Your Address"
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
                <div className="form-group form-check text-center mb-6 ">
                  <input
                    defaultChecked
                    id="checked-checkbox"
                    type="checkbox"
                    defaultValue
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  dark:bg-gray-700 dark:border-gray-600 m-2"
                    onChange={(e) => setCheckBox(!checkBox)}
                  />
                  <label
                    htmlFor="checked-checkbox"
                    className="form-check-label inline text-[14px] text-gray-800"
                  >
                    I agree to the Oliva Ministries
                    <Link to='/termsAndCondition' className="hover:text-blue-400">Terms & Conditions and Privacy Policy</Link>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-2.5 bg-[#3D5890]  text-white font-medium text-xs text-[14px]  leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0  active:bg-blue-800 active:shadow-lg  transition  duration-150 ease-in-out mt-2"
                >
                  Register
                </button>
                <button
                  type="submit"
                  className="w-full px-6 py-2.5  
              text-[#065FD4] font-medium text-xs border-2 text-[14px] leading-tight rounded shadow-md hover:bg-[#3D5890] hover:text-white  hover:shadow-lg focus:bg-[#3D5890] focus:shadow-lg focus:outline-none focus:ring-0   active:shadow-lg  transition  duration-150 ease-in-out mt-5"
                  onClick={() => navigate("/signIn")}
                >
                  Log In
                </button>
              </form>
            </div>
            <div className="text-[rgba(0, 0, 0, 0.6)] p-7 text-center text-[14px] flex justify-center">
              Or Login with
            </div>
            {/* <div>
              <button
                type="submit"
                className="w-full px-6 py-2.5  
              text-[#065FD4] font-medium text-xs border-2 leading-tight rounded shadow-md hover:bg-[#3D5890] hover:text-white  hover:shadow-lg focus:bg-[#3D5890] focus:shadow-lg focus:outline-none focus:ring-0   active:shadow-lg  transition  duration-150 ease-in-out mt-5 "
              >
                <span>
                  <img
                    src={Google}
                    alt=""
                    style={{ display: "inline", padding: "2px" }}
                  />
                </span>
                &nbsp;Sign Up in with Google
              </button>
            </div> */}
          </div>
        </div>

        <div className="w-1/2 h-screen flex justify-center items-center bg-[#D5D8DB] max-[640px]:hidden">
          <img
            src={require("../assets/images/imgSignUp.png")}
            alt=""
            style={{ height: "400px", width: "400px" }}
          />
        </div>
      </div>

      <ToastContainer />
      {/* </div> */}
    </>
  );
}
