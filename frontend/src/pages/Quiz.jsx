import React, { useState, useEffect } from "react";
import Header from "../layouts/Header";
import { axiosInstance } from "../utils/axiosSetup";
import ScoreCard from "./ScoreCard";
import { createSearchParams, useNavigate,useParams } from "react-router-dom";

const Quiz = (props) => {
  let token = JSON.parse(localStorage.getItem("token"));
  let user = JSON.parse(localStorage.getItem("user"));
  const {id}= useParams()

  const navigate = useNavigate();
  const [question, setQuestion] = useState();
  const [skipQuestionCount, setSkipQuestionCount] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [totalQuestion, setTotalQuestion] = useState();
  const [option1, setOption1] = useState();
  const [option2, setOption2] = useState();
  const [option3, setOption3] = useState();
  const [option4, setOption4] = useState();
  const [option1Answer, setOption1Answer] = useState();
  const [option2Answer, setOption2Answer] = useState();
  const [option3Answer, setOption3Answer] = useState();
  const [option4Answer, setOption4Answer] = useState();
  const [totalScoreCount, setTotalScoreCount] = useState(0);
  const [skipAlert, setSkipAlert] = useState(false);

  const config = {
    headers: {
      Authorization: token,
    },
  };
  const handleSubmit = async (e) => {
    try {
      const res = await axiosInstance.get(
        `/question/quiz-module/${id}`,
        config
      );
      if (res.data.success) {
        setQuestion(res.data.data[questionNumber - 1].question);
        setOption1(res.data.data[questionNumber - 1].options[0].option);
        setOption2(res.data.data[questionNumber - 1].options[1].option);
        if (res.data.data[questionNumber - 1].options[2]) {
          setOption3(res.data.data[questionNumber - 1].options[2].option);
        }
        if (res.data.data[questionNumber - 1].options[3]) {
          setOption4(res.data.data[questionNumber - 1].options[3].option);
        }
        setOption1Answer(
          res.data.data[questionNumber - 1].options[0].isCorrect
        );
        setOption2Answer(
          res.data.data[questionNumber - 1].options[1].isCorrect
        );
        if (res.data.data[questionNumber - 1].options[2]) {
          setOption3Answer(
            res.data.data[questionNumber - 1].options[2].isCorrect
          );
        }
        if (res.data.data[questionNumber - 1].options[3]) {
          setOption4Answer(
            res.data.data[questionNumber - 1].options[3].isCorrect
          );
        }
        setTotalQuestion(res.data.data.length);
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  };
  const questionCount = () => {
    if(!skipAlert){
      var answer = window.confirm("Are You Sure Want to skip");
      if (answer) {
        if (questionNumber < totalQuestion) {
          setQuestionNumber(questionNumber + 1);
          handleSubmit();
        }
      }
    }else{
      if (questionNumber < totalQuestion) {
        setQuestionNumber(questionNumber + 1);
        handleSubmit();
      }
    }
    setSkipAlert(false)
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
      setSkipQuestionCount(skipQuestionCount + 1);
      handleSubmit();
    }
  };
  const answerCount1 = () => {
    if (option1Answer === true) {
      setTotalScoreCount(totalScoreCount + 1);
    }
    setSkipAlert(!skipAlert);
  };
  const answerCount2 = () => {
    if (option2Answer === true) {
      setTotalScoreCount(totalScoreCount + 1);
    }
    setSkipAlert(!skipAlert);
  };
  const answerCount3 = () => {
    if (option3Answer === true) {
      setTotalScoreCount(totalScoreCount + 1);
    }
    setSkipAlert(!skipAlert);
  };
  const answerCount4 = () => {
    if (option4Answer === true) {
      setTotalScoreCount(totalScoreCount + 1);
    }
    setSkipAlert(!skipAlert);
  };
  const scoreShare = () => {
    navigate({
      pathname: "/score",
      search: createSearchParams({
        score: totalScoreCount,
      }).toString(),
    });
  };
  const scorePayload = {
    quizModule: "638072e926bbb50dfd9ed8e3",
    totalQuestions: totalQuestion,
    questionAttempted: totalQuestion - skipQuestionCount,
    correctAnswers: totalScoreCount,
    wrongAnswers: totalQuestion - totalScoreCount,
    score: totalScoreCount,
  };
  const submitScore = async () => {
    const res = await axiosInstance.post(`/result/${user._id}`, scorePayload, config);
    console.log(res);
  };
  const submitAlerts = () => {
    let answer = window.confirm("Sure want to Submit?");
    if (answer) {
      submitScore();
      scoreShare();
    } else {
    }
  };
  useEffect(() => {
    handleSubmit();
  });
  return (
    <>
      {/* <ScoreCard score={totalScoreCount}/> */}
      <Header></Header>
      <div className="text-center text-[2rem] my-6">
        Question {questionNumber}/{totalQuestion}
      </div>
      <div className="bg-[#3D5890] h-72 min-h-24 w-[100%] text-white my-10 ">
        <div className="absolute top-[15rem] left-[1.7rem] text-center bg-white rounded-full w-[4rem] h-[4rem] ">
          <div className="absolute top-[1rem] left-[1.7rem] text-[2rem] font-semibold text-black">
            {questionNumber}
          </div>
        </div>
        <div className="absolute top-[15rem] left-[7rem] text-center text-[1.5rem] ">
          {question}
        </div>
      </div>
      <div className="flex justify-center">
        <button
          className="bg-gray-200  mx-10 my-5  max-[640px]:mx-2  max-[640px]:my-1 rounded-md text-center py-3 px-3 focus:bg-[#3D5890] focus:text-white "
          onClick={answerCount1}
        >
          A. {option1}
        </button>
        <button
          className="bg-gray-200 mx-10 my-5  max-[640px]:mx-2  max-[640px]:my-1 rounded-md text-center py-3 px-3 focus:bg-[#3D5890] focus:text-white"
          onClick={answerCount2}
        >
          B. {option2}
        </button>
        {option3 ? (
          <button
            className="bg-gray-200  mx-10 my-5  max-[640px]:mx-2  max-[640px]:my-1 rounded-md text-center py-3 px-3 focus:bg-[#3D5890] focus:text-white"
            onClick={answerCount3}
          >
            C. {option3}
          </button>
        ) : (
          ""
        )}
        {option4 ? (
          <button
            className="bg-gray-200  mx-10 my-5  max-[640px]:mx-2  max-[640px]:my-1 rounded-md text-center py-3 px-3 focus:bg-[#3D5890] focus:text-white"
            onClick={answerCount4}
          >
            D. {option4}
          </button>
        ) : (
          ""
        )}
      </div>
      <div className="flex ">
      <button
        class="bg-gray-200 hover:bg-[#3D5890] text-black-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded my-10 mx-10"
        onClick={previousQuestion}
      >
        Previous
      </button>
      <div className="absolute right-9">
      <button
        class="bg-transparent hover:bg-[#3D5890] text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded my-10 mx-1"
        onClick={questionCount}
      >
        Next
      </button>
      <button
        class="bg-transparent hover:bg-[#3D5890] text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded  my-10 mx-1 "
        onClick={skipQuestion}
      >
        Skip
      </button>
      </div>
      </div>
      <br />
      <button
        class="bg-transparent hover:bg-[#3D5890] text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded  my-6 mx-6 float-right"
        onClick={submitAlerts}
      >
        Submit the Quiz
      </button>
    </>
  );
};

export default Quiz;
