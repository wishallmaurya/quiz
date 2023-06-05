import React,{useState} from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';

const ScoreCard = () => {
// const[score,setScore]=useState()
const navigate=useNavigate()
  const [searchParams] = useSearchParams();
  console.log(searchParams.get('score'))
  let data = JSON.parse(localStorage.getItem("user"));
  return (
    <>
    <div className=''>   
      <div className="absolute left-[8rem] text-center bg-blue-400 h-72 w-[80%] text-white my-10 rounded">

        <div className=" m-5 text-center text-[2rem] flex-col">
            <span>Congratulations !</span> <br />
            <span> {data.username}</span> <br />
            <span>You have Scored</span><br />
        </div>
            <span className='text-[6rem]'> {searchParams.get('score')} </span>
      </div>
      <div className="flex mx-6 justify-center">
       
      </div> 
            <button
        class="bg-transparent hover:bg-[#3D5890] text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded  my-10 mx-1 absolute top-[80%] left-[45%]"
        onClick={()=>navigate('/myQuiz')}
      >
       Detailed View 
      </button>
      </div>

    </>
  )
}

export default ScoreCard