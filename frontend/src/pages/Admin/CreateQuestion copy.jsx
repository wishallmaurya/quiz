import React, { useState } from 'react'
import Skeleton from '../../layouts/Skeleton'

const CreateQuestion = () => {

  const [options, setOptions] = useState(['option1', 'option2', 'option3', 'option4'])



  return (
    <>
      <Skeleton>
        <div className="text-[2rem] text-center font-bold">Create Questions</div>

        <div className="text-center text-[2rem] my-6">Question { }/{ }</div>
       

          <div className="w-full absolute flex justify-center items-center h-screen text-[1rem] font-semibold text-black"><span> Question &nbsp; &nbsp;  </span>

            <input className='p-3 outline-none rounded-md text-12 w-1/2' ></input>



          </div>

          <div className="w-full absolute flex justify-center items-center h-screen text-[1rem] font-semibold text-black">
            {
              options.map((item) => (

                <div className='m-2 p-2'>{item}</div>

              ))

            }
          </div>




          <div className="absolute top-[15rem] left-[7rem] text-center text-[1.5rem] ">


          </div>
       
        <div className="flex mx-6 justify-center">
          <button className="bg-gray-200  mx-10 my-5 rounded-md text-center py-3 px-3 focus:bg-[#3D5890] focus:text-white" >
            A. { }
          </button>
          <button className="bg-gray-200 mx-10 my-5 rounded-md text-center py-3 px-3 focus:bg-[#3D5890] focus:text-white">
            B. { }
          </button>
          <button className="bg-gray-200  mx-10 my-5 rounded-md text-center py-3 px-3 focus:bg-[#3D5890] focus:text-white" >
            C. { }
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