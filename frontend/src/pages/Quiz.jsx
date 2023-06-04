import React,{useState,useEffect} from "react";
import Header from "../layouts/Header";
import { axiosInstance } from "../utils/axiosSetup";
import ScoreCard from "./ScoreCard";
import { createSearchParams, useNavigate } from "react-router-dom";

const Quiz = (props) => {
  let token = JSON.parse(localStorage.getItem("token"));

  const navigate=useNavigate()
    const [question,setQuestion]=useState()
    const [skipQuestionCount,setSkipQuestionCount]=useState(0)
    const [questionNumber,setQuestionNumber]=useState(1)
    const [totalQuestion,setTotalQuestion]=useState()
    const [option1,setOption1]=useState()
    const [option2,setOption2]=useState()
    const [option3,setOption3]=useState()
    const [option1Answer,setOption1Answer]=useState()
    const [option2Answer,setOption2Answer]=useState()
    const [option3Answer,setOption3Answer]=useState()
    const [totalScoreCount,setTotalScoreCount]=useState(0)
   
    const config = {
        headers:{
          Authorization: token
        }
      };
    const handleSubmit = async (e) => {
        try {
          const res = await axiosInstance.get("/question/quiz-module/638072e926bbb50dfd9ed8e3",config);
          if (res.data.success) {
            setQuestion(res.data.data[questionNumber-1].question)
            setOption1(res.data.data[questionNumber-1].options[0].option)
            setOption2(res.data.data[questionNumber-1].options[1].option)
            setOption3(res.data.data[questionNumber-1].options[2].option)
            setOption1Answer(res.data.data[questionNumber-1].options[0].isCorrect)
            setOption2Answer(res.data.data[questionNumber-1].options[1].isCorrect)
            setOption3Answer(res.data.data[questionNumber-1].options[2].isCorrect)
            setTotalQuestion(res.data.data.length)
            

          } else {
          } 
        } catch (error) {
          console.log(error);
        }
      };
      const questionCount=()=>{
        if(questionNumber<totalQuestion){
          setQuestionNumber( questionNumber+1) 
          handleSubmit()
        }else{

        }
        
      }
      const previousQuestion=()=>{
        if(questionNumber>1){
            setQuestionNumber(questionNumber-1)
            handleSubmit()
        }
        
      }
      const skipQuestion=()=>{
        if(questionNumber<totalQuestion){
            setQuestionNumber( questionNumber+1)
            setSkipQuestionCount(skipQuestionCount+1)
            handleSubmit()
          }
      }
      const answerCount1=()=>{
        if(option1Answer===true){
          setTotalScoreCount(totalScoreCount+1)
        }
      }
      const answerCount2=()=>{
        if(option2Answer===true){
          setTotalScoreCount(totalScoreCount+1)
        }
      }
      const answerCount3=()=>{
        if(option3Answer===true){
          setTotalScoreCount(totalScoreCount+1)
        }
      }
      const scoreShare=()=>{
        submitScore()
        navigate({
          pathname:'/score',
          search:createSearchParams({
            score:totalScoreCount
          }).toString()
        })
      }
      const scorePayload={
        quizModule: '638072e926bbb50dfd9ed8e3',
        totalQuestions:totalQuestion,
        questionAttempted:totalQuestion-skipQuestionCount,
        correctAnswers: totalScoreCount,
        wrongAnswers:totalQuestion-totalScoreCount,
        score:totalScoreCount
      }
      const submitScore=async()=>{
        const res = await axiosInstance.post("/result",scorePayload,config);
        console.log(res)
      }
      const submitAlerts=()=>{
        if(skipQuestionCount>0){

          alert("Are You Sure Want to submit");
          scoreShare()
        }else{
          scoreShare()
        }
      }
      useEffect(() => {
        handleSubmit()
      });
  return (
    <> 
    {/* <ScoreCard score={totalScoreCount}/> */}
      <Header></Header>
      <div className="text-center text-[2rem] my-6">Question {questionNumber}/{totalQuestion}</div>
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
      <div className="flex mx-6 justify-center">
        <button className="bg-gray-200  mx-10 my-5 rounded-md text-center py-3 px-3 focus:bg-[#3D5890] focus:text-white" onClick={answerCount1}>
          A. {option1}
        </button>
        <button className="bg-gray-200 mx-10 my-5 rounded-md text-center py-3 px-3 focus:bg-[#3D5890] focus:text-white" onClick={answerCount2}>
          B. {option2}
        </button>
        <button className="bg-gray-200  mx-10 my-5 rounded-md text-center py-3 px-3 focus:bg-[#3D5890] focus:text-white" onClick={answerCount3}>
          C. {option3}
        </button>
        {/* <div className="bg-gray-200  mx-10 my-5 rounded-md text-center py-3 px-3">
          D. 
        </div> */}
      </div>
      <button class="bg-gray-200 hover:bg-[#3D5890] text-black-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded my-10 mx-16" onClick={previousQuestion}>
        Previous 
      </button>
      <button class="bg-transparent hover:bg-[#3D5890] text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded my-10 mx-1 absolute right-[15rem]" onClick={questionCount}>
        Next 
      </button>
      <button class="bg-transparent hover:bg-[#3D5890] text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded  my-10 mx-1 absolute right-[10rem]"onClick={skipQuestion} >
        Skip 
      </button>
      <br />
      <button class="bg-transparent hover:bg-[#3D5890] text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded  my-10 mx-1 absolute right-[10rem]"onClick={submitAlerts} >
        Submit the Quiz 
      </button>
    </>
  );
};

export default Quiz;
