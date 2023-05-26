import React from 'react'
import Skeleton from '../../layouts/Skeleton'

const CreateQuestion = () => {
  return (
    <>
    <Skeleton>
    <div className="text-[2rem] text-center font-bold">Create Questions</div>
    
    <div className="text-center text-[2rem] my-6">Question {}/{}</div>
      <div className="bg-[#3D5890] h-72 min-h-24 w-[100%] text-white my-10 ">
        <div className="absolute top-[15rem] left-[1.7rem] text-center bg-white rounded-full w-[4rem] h-[4rem] ">
          <div className="absolute top-[1rem] left-[1.7rem] text-[2rem] font-semibold text-black">
            {}
          </div>
        </div>
        <div className="absolute top-[15rem] left-[7rem] text-center text-[1.5rem] ">
        {}
        </div>      
      </div>
      <div className="flex mx-6 justify-center">
        <button className="bg-gray-200  mx-10 my-5 rounded-md text-center py-3 px-3 focus:bg-[#3D5890] focus:text-white" >
          A. {}
        </button>
        <button className="bg-gray-200 mx-10 my-5 rounded-md text-center py-3 px-3 focus:bg-[#3D5890] focus:text-white">
          B. {}
        </button>
        <button className="bg-gray-200  mx-10 my-5 rounded-md text-center py-3 px-3 focus:bg-[#3D5890] focus:text-white" >
          C. {}
        </button>
        {/* <div className="bg-gray-200  mx-10 my-5 rounded-md text-center py-3 px-3">
          D. 
        </div> */}
      </div>
      <button class="bg-gray-200 hover:bg-[#3D5890] text-black-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded my-10 mx-16">
        Previous 
      </button>
      <button class="bg-transparent hover:bg-[#3D5890] text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded my-10 mx-1 absolute right-[15rem]" >
        Next 
      </button>
      <button class="bg-transparent hover:bg-[#3D5890] text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded  my-10 mx-1 absolute right-[10rem]" >
        Skip 
      </button>
      <br />
      <button class="bg-transparent hover:bg-[#3D5890] text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded  my-10 mx-1 absolute right-[10rem]" >
        Submit the Quiz 
      </button>

    </Skeleton>

    </>
  )
}

export default CreateQuestion