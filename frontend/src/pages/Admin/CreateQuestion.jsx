import React, { useEffect, useState } from "react";
import Skeleton from "../../layouts/Skeleton";
import { MdDelete } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import { validation } from "../../utils";
import { getAPI, postAPI, patchAPI, deleteAPI } from "../../network";
import { axiosInstance } from "../../utils/axiosSetup";
import { useNavigate } from "react-router-dom";

const CreateQuestion = () => {
  let token = JSON.parse(localStorage.getItem("token"));
  const navigate = useNavigate();
  const [quizModule,setQuizModule]=useState()
  const [quizModuleSave,setQuizModuleSave]=useState()
  const [option, setOptions] = useState([
    { index: 0, option: "", isCorrect: false },
  ]);
  const [check, setCheck] = useState(false);
  const [ques, setQues] = useState("");
  const [questions, setQuestions] = useState({ question: "", options: [] });

  const config = {
    headers: {
      Authorization: token,
    },
  };
  const quizModuleFetch = async (e) => {
    try {
      const res = await axiosInstance.get("/quiz-module", config);
      if (res.data.success) {
        setQuizModule(res.data.data);
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  };
 useEffect(()=>(quizModuleFetch),[])
  const saveQuestion = async (e) => {
    // e.preventDefault();

    if (validation("empty", "Question", ques)) {
      return;
    } else if (validation("option", "options", option)) {
      return;
    } else if (check === false) {
      toast.error("Please Select Correct Answer ");
      return;
    }

    let payload = {
      quizModule: quizModuleSave,
      question: ques,
      options: option,
    };
    // console.log(payload,"Payload+++++++++++++++++++++++")
    const data = await axiosInstance.post(`/question`, payload, config);
    console.log(data);
    if (data.data.success) {
      toast.success(data.data.message);

      // console.log(data,  )
      // setQuestions({question: '', options: []})
      // setOptions([{index:0,  option:'',isCorrect:false }])
      // option.option('')
      // navigate(`/updateQuestion/${quizModuleSave}`);
    }
  };

  const addOptionBtn = () => {
    let index = option.length;
    var opts = option;
    opts.push({ index: index, option: "", isCorrect: false });
    setOptions([...opts]);
  };

  const changeOptions = (value, ind) => {
    setOptions((current) =>
      current.map((obj, index) => {
        if (index === ind) {
          return { ...obj, option: value };
        }

        return obj;
      })
    );
  };
  const setChecked = (val, ind) => {
    setCheck(val);
    let index = option.length;
    setOptions((current) =>
      current.map((obj, index) => {
        if (index === ind) {
          return { ...obj, isCorrect: true };
        }

        return obj;
      })
    );
  };
  console.log(quizModuleSave,`..................`)
  return (
    <>
      <div className="text-[2rem] text-center font-bold my-10">
        Create Questions
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
                <label htmlFor="cars">Choose a Quiz Module     :</label>
                <select  name="quiz" id="quiz" onChange={(e) => {
                  setQuizModuleSave(e.target.value);
                }}>

                  <option value="value" disabled selected >--Select Quiz Module--</option>
                  {quizModule?.map((p)=>( <option value={p?._id}>{p?.name}</option>))}
                </select>
              </div>

              <div className="mt-5">
                <label className="block text-gray-700 text-sm font-bold ">
                  {" "}
                  Question
                  <input
                    className="p-3 m-5 outline-none rounded-md text-12 w-1/2"
                    onChange={(v) => {
                      setQues(v.target.value);
                    }}
                  ></input>
                </label>
              </div>
              <div className="w-4/5">
                <label className="block text-gray-700 text-sm font-bold ">
                  {" "}
                  Please select checkbox to save correct option
                </label>
              </div>

              <div className="grid grid-cols-2 gap-5  mt-5">
                {option.map((item, index) => (
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Option {index + 1}
                    <div className="flex">
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        onChange={(e) => setChecked(e.target.checked, index)}
                      />
                      <input
                        type="text"
                        className="w-full m-2 p-2 h-10 border-1  shadow-md outline-0 rounded-lg bg-white text-gray-500 border-gray-300"
                        onChange={(v) => {
                          changeOptions(v.target.value, index);
                        }}
                      />
                    </div>
                  </label>
                ))}

                <button
                  className="bg-transparent hover:bg-blue-500 text-blue-700 p-2 mt-5 h-10 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                  onClick={addOptionBtn}
                >
                  Add Option
                </button>
              </div>
              <span>Create at Least 2 Options </span>
            </div>
          </div>
        </div>

        <div className="grid m-5" item xs={12} align="right">
          <button
            align="right"
            className={`text-white text-base w-56 rounded-3xl py-2 px-10 btn-bg-green `}
            variant="contained"
            onClick={saveQuestion}
          >
            Add Question
          </button>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default CreateQuestion;
