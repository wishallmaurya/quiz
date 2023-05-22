import React,{useState} from 'react'
import { useSearchParams } from 'react-router-dom';

const ScoreCard = () => {
// const[score,setScore]=useState()
  const [searchParams] = useSearchParams();
  console.log(searchParams.get('score'))
  return (
    <>
    <div>


   
      <div className="absolute left-[8rem] text-center bg-blue-400 h-72 w-[80%] text-white my-10 rounded">

        <div className=" m-5 text-center text-[2rem] flex-col">
            <span>Congratulations !</span> <br />
            <span> John</span> <br />
            <span>You have Scored</span><br />
        </div>
            <span className='text-[6rem]'> {searchParams.get('score')} </span>
      </div>
      <div className="flex mx-6 justify-center">
       
      </div> 
      
      </div>

    </>
  )
}

export default ScoreCard