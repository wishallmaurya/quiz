import React, { useState, useEffect } from "react";
import { useNavigate, createSearchParams,useParams } from "react-router-dom";
import { axiosInstance } from "../../utils/axiosSetup";
import { ToastContainer, toast } from 'react-toastify';


const UpdateQuestions = () => {
  let token = JSON.parse(localStorage.getItem("token"));

  const {moduleId}= useParams()
  const navigate = useNavigate();
  console.log(moduleId,'..............1.')
  const [id, setId] = useState();
  const [question, setQuestion] = useState();
  const [allQuestion, setAllQuestion] = useState([]);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [totalQuestion, setTotalQuestion] = useState();
  const [option1, setOption1] = useState('');
  const [option2, setOption2] = useState('');
  const [option3, setOption3] = useState('');
  const [option1Answer, setOption1Answer] = useState();
  const [option2Answer, setOption2Answer] = useState();
  const [option3Answer, setOption3Answer] = useState();
  const [totalScoreCount, setTotalScoreCount] = useState(0);

  const config = {
    headers: {
      Authorization: token,
    },
  };
  useEffect(() => {
    handleSubmit();
  }, []);

  const handleSubmit = async (e) => {
    try {
      const res = await axiosInstance.get(
        `/question/quiz-module/${moduleId}`,
        config
      );
      if (res.data.success) {
        setId(res.data.data[questionNumber - 1]._id);
        setQuestion(res.data.data[questionNumber - 1].question);
        setOption1(res.data.data[questionNumber - 1].options[0].option);
        setOption2(res.data.data[questionNumber - 1].options[1].option);
        setOption3(res.data.data[questionNumber - 1].options[2].option);
        setAllQuestion(res.data.data)
        setOption1Answer(
          res.data.data[questionNumber - 1].options[0].isCorrect
        );
        setOption2Answer(
          res.data.data[questionNumber - 1].options[1].isCorrect
        );
        setOption3Answer(
          res.data.data[questionNumber - 1].options[2].isCorrect
        );
        setTotalQuestion(res.data.data.length);

      } else {
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleNavigateForm = (quesId) => {
    navigate(`${window.location.pathname}/question/${quesId}`);
  }

  const deleteQuestion = async (id) => {

    const res = await axiosInstance.delete(`/question/${id}`,
      config

    );
      if(res.data.success){
        toast.success(res.data.message)
        handleSubmit();
      }
  }
  const updateQuestion = async (e) => {
    e.preventDefault();

    let payload = {
      quizModule: '638072e926bbb50dfd9ed8e3',
      question: question,
      options: [
        { option: option1 },
        { option: option2 },
        { option: option3 }
      ]
    }
    console.log(payload, "Payload+++++++++++")
    const data = await axiosInstance.put(`/question`, payload, config);
    console.log(config)
    if (data) {
      toast.success(data.data.message)
      console.log(data)
    }
  }

  return (
    <>
      {/* <ScoreCard score={totalScoreCount}/> */}

      <div className="text-center text-[1.5rem] my-6">Update Questions</div>
      <table className="w-full">
        <thead>
          <tr className="text-xs font-semibold tracking-wide text-left text-white uppercase border-b  bg-[#152C4F]">
            <th className="px-4 py-3">Sr No</th>
            <th className="px-4 py-3">Question</th>
            <th className="px-4 py-3">Edit</th>
            <th className="px-4 py-3">Delete</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
          {allQuestion.map((item, index) => (
            <tr className="bg-[#152C4F]  hover:bg-blue-100  text-white hover:text-black ">
              <td className="px-4 py-3">
                <div className="flex items-center text-sm">
                  <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                    {index}
                  </div>
                </div>
              </td>
              <td className="">
                <span className="px-4 py-3  ">
                  {item.question}
                </span>
              </td>
              <td className="">
                <span className="px-4 py-3  ">
                  <button onClick={() => handleNavigateForm(item?._id)}>Edit Question</button>
                </span>
              </td>
              <td className="">
                <span className="px-4 py-3  ">
                  <button onClick={()=>deleteQuestion(item?._id)} >Delete Question</button>
                </span>
              </td>

            </tr>
          ))
          }

        </tbody>
      </table>
<ToastContainer/>

    </>
  );
};

export default UpdateQuestions;