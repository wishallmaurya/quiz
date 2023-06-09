import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import { axiosInstance } from "../../utils/axiosSetup";
import { useNavigate } from "react-router-dom";
const CreateQuizModule = () => {
  let token = JSON.parse(localStorage.getItem("token"));
  const navigate=useNavigate();
  const [name, setName] = useState();
  const [noOfQuestions, setNoOfQuestions] = useState();
  const config = {
    headers: {
      Authorization: token,
    },
  };

  console.log('working')
  const submitHandler = async () => {
    
    const payload={
        name:name,
        category:'63806dc5bf63f3e4c7ecf586',
        noOfQuestions:noOfQuestions
      }
  
    const res = await axiosInstance.post("/quiz-module",payload, config);
    console.log(res)
    if(res.data.success){
        toast.success(res.data.message);
        setTimeout(() => {
            navigate('/createQuestion')
        }, 900);
    }else{
        toast.error(res.data.message);
    }
   
    
    
  };

  return (
    <>
      <div className="text-[2rem] text-center font-bold my-10">
        Create Question Module
      </div>

      <div className="w-full absolute flex justify-center items-center text-[1rem] flex-col font-semibold text-black">
        <div
          className="grid w-[80%]"
          container
          sx={{
            border: "1px solid lightgrey",
            p: 2,
            mt: 2,
            position: "relative",
          }}
        >
          <div className="mb-5 bg-gray-100 p-5 border-current rounded ">
            <div className="mb-5 ">
              <div className="mt-5">
                <label className="block text-gray-700 text-sm font-bold ">
                  Module Name :
                  <input
                    className="p-3 m-5 outline-none rounded-md text-12 w-1/2"
                    onChange={(e) => setName(e.target.value)}
                  ></input>
                </label>
                <label className="block text-gray-700 text-sm font-bold ">
                  Question Count :
                  <input
                    type="number"
                    className="p-3 m-5 outline-none rounded-md text-12 w-40"
                    onChange={(e) => setNoOfQuestions(e.target.value)}
                  ></input>
                </label>
              </div>
              <Link to="/createQuestion" className="hover:text-blue-500">
                After Creating the Module Go to Create Question Page to Add
                Questions in this Module
              </Link>
            </div>
          </div>
        </div>

        <div className="grid m-5" item xs={12} align="right">
          <button
            align="right"
            className={`text-white text-base w-56 rounded-3xl py-2 px-10 btn-bg-green `}
            variant="contained"
            onClick={submitHandler}
          >
            Add Module
          </button>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default CreateQuizModule;
