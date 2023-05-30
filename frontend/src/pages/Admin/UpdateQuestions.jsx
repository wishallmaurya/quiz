import React, { useState, useEffect } from "react";
import { useNavigate, createSearchParams } from "react-router-dom";
import { axiosInstance } from "../../utils/axiosSetup";

const UpdateQuestions = () => {
  let token = JSON.parse(localStorage.getItem("token"));

  const navigate = useNavigate();
  const [id, setId] = useState();
  const [question, setQuestion] = useState();
  const [questionNumber, setQuestionNumber] = useState(1);
  const [totalQuestion, setTotalQuestion] = useState();
  const [option1, setOption1] = useState();
  const [option2, setOption2] = useState();
  const [option3, setOption3] = useState();
  const [option1Answer, setOption1Answer] = useState();
  const [option2Answer, setOption2Answer] = useState();
  const [option3Answer, setOption3Answer] = useState();
  const [totalScoreCount, setTotalScoreCount] = useState(0);

  const config = {
    headers: {
      Authorization: token,
    },
  };
  const handleSubmit = async (e) => {
    try {
      const res = await axiosInstance.get(
        "/question/quiz-module/638072e926bbb50dfd9ed8e3",
        config
      );
      if (res.data.success) {
        setId(res.data.data[questionNumber - 1]._id);
        setQuestion(res.data.data[questionNumber - 1].question);
        setOption1(res.data.data[questionNumber - 1].options[0].option);
        setOption2(res.data.data[questionNumber - 1].options[1].option);
        setOption3(res.data.data[questionNumber - 1].options[2].option);
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
  const questionCount = () => {
    if (questionNumber < totalQuestion) {
      setQuestionNumber(questionNumber + 1);
      handleSubmit();
    } else {
    }
  };
  const previousQuestion = () => {
    if (questionNumber > 1) {
      setQuestionNumber(questionNumber - 1);
      handleSubmit();
    }
  };
  const skipQuestion = () => {
    if (questionNumber < totalQuestion) {
      setQuestionNumber(questionNumber + 1);
      handleSubmit();
    }
  };
  const answerCount1 = () => {
    if (option1Answer === true) {
      setTotalScoreCount(totalScoreCount + 1);
    }
  };
  const answerCount2 = () => {
    if (option2Answer === true) {
      setTotalScoreCount(totalScoreCount + 1);
    }
  };
  const answerCount3 = () => {
    if (option3Answer === true) {
      setTotalScoreCount(totalScoreCount + 1);
    }
  };
  const scoreShare = () => {
    navigate({
      pathname: "/score",
      search: createSearchParams({
        score: totalScoreCount,
      }).toString(),
    });
  };
  useEffect(() => {
    handleSubmit();
  });
 const deleteQuestion=async(id)=>{
    try {
        // const res = await axiosInstance.delete(`/question/${id}`,
        //     config
        //   );
        
    } catch (error) {
        
    }
  }
  const updateQuestion =  async(e) => {
    e.preventDefault();

      let payload = {
        quizModule:'638072e926bbb50dfd9ed8e3',
        question: question,
        // options:option
    }
    console.log(payload,"Payload+++++++++++")
    const data = await axiosInstance.post(`/question`, payload,config);
    console.log(config)
    if(data){
        console.log(data)
    }
  }

  return (
    <>
      {/* <ScoreCard score={totalScoreCount}/> */}

      <div className="text-center text-[2rem] my-6">Update Questions</div>
      <div className="text-center text-[2rem] my-6">
        Question {questionNumber}/{totalQuestion}
      </div>
      <button className="bg-red-600 text-white rounded-md text-center py-3 px-3 focus:bg-[#3D5890] focus:text-white" onClick={deleteQuestion(id)}>
          Delete
        </button>
      <div className="bg-[#3D5890] h-72 min-h-24 w-[100%] text-white my-10 ">
        <div className="absolute top-[15rem] left-[1.7rem] text-center bg-white rounded-full w-[4rem] h-[4rem] ">
          <div className="absolute top-[1rem] left-[1.7rem] text-[2rem] font-semibold text-black">
            {questionNumber}
          </div>
        </div>
        <div className="absolute top-[15rem] left-[7rem] text-center text-[1.5rem] ">
          {/* {question} */}
        </div>
        <div className="mb-6">
          <input
            type="text"
            id="default-input"
            className=" absolute top-[15rem] left-[7rem] text-[1.5rem] bg-[#3D5890] w-[100%] p-2.5 "
            defaultValue={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
        </div>
      </div>
      <div className="flex mx-6 justify-center">

        <div className="mb-6">
          <input
            type="text"
            id="default-input"
            className=" bg-gray-200  mx-10 my-5 rounded-md text-center py-3 px-3] w-[15rem] h-[4rem] p-2.5 "
            defaultValue={option1}
          />
        </div>

        <div className="mb-6">
          <input
            type="text"
            id="default-input"
            className=" bg-gray-200  mx-10 my-5 rounded-md text-center py-3 px-3] w-[15rem] h-[4rem] p-2.5 "
            defaultValue={option2}
          />
        </div>

        <div className="mb-6">
          <input
            type="text"
            id="default-input"
            className=" bg-gray-200  mx-10 my-5 rounded-md text-center py-3 px-3] w-[15rem] h-[4rem] p-2.5 "
            defaultValue={option3} 
          />
        </div>
        {/* <div className="bg-gray-200  mx-10 my-5 rounded-md text-center py-3 px-3">
          D. 
        </div> */}
      </div>
      <button
        class="bg-gray-200 hover:bg-[#3D5890] text-black-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded my-10 mx-16"
        onClick={previousQuestion}
      >
        Previous
      </button>
      <button
        class="bg-transparent hover:bg-[#3D5890] text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded my-10 mx-1 absolute right-[15rem]"
        onClick={questionCount}
      >
        Next
      </button>
      <button
        class="bg-transparent hover:bg-[#3D5890] text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded  my-10 mx-1 absolute right-[10rem]"
        onClick={skipQuestion}
      >
        Skip
      </button>
      <br />
      <button
        class="bg-transparent hover:bg-[#3D5890] text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded  my-10 mx-1 absolute right-[10rem]"
        onClick={scoreShare}
      >
        Submit the Quiz
      </button>
    </>
  );
};

export default UpdateQuestions;
