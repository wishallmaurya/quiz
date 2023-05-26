import React, { useState } from 'react'
import Skeleton from '../../layouts/Skeleton'
import { MdDelete } from 'react-icons/md'
import {  validation } from '../../utils'
import { getAPI, postAPI , patchAPI, deleteAPI} from "../../network";
import { axiosInstance } from '../../utils/axiosSetup';

const CreateQuestion = () => {
  let token = JSON.parse(localStorage.getItem("token"));

  const [option, setOptions] = useState([{index:0,  option:'',isCorrect:false }])

  const [ques,setQues]=useState('')
  const [questions, setQuestions] = useState({question: '', options: []})

  const config = {
    headers:{
      Authorization:token
    }
  };
  const saveQuestion =  async(e) => {
    e.preventDefault();

    if(validation('empty','Question',ques)){
       
        return;
      }
      else if(validation('array','options',option)){
       
        return;
      }
      let payload = {
        quizModule:'638072e926bbb50dfd9ed8e3',
        question: ques,
        options:option
    }
    console.log(payload,"Payload+++++++++++++++++++++++")
    const data = await axiosInstance.post(`/question`, payload,config);
    console.log(config)
    if(data){
      console.log(data)
    }
  }


const addOptionBtn=()=>{
  let index=option.length
  var opts=option
  opts.push({index:index,option:'',isCorrect:false})

  setOptions([...opts])

}

const changeOptions=(value,ind)=>{
  setOptions(current =>
    current.map((obj, index) => {
        if (index === ind) {
            return { ...obj, option: value };
        }

        return obj;
    }),
);
}
const setChecked=(val ,ind)=>{
   let index=option.length
  var opts=option
  opts.push({index:index,option:'',isCorrect:true})

  setOptions([...opts])

}

  return (
    <>
      
        <div className="text-[2rem] text-center font-bold my-10">Create Questions</div>

        {/* <div className="text-center text-[2rem] my-6">Question { }/{ }</div> */}


        <div className="w-full absolute flex justify-center items-center text-[1rem] flex-col font-semibold text-black">
          {/* <span> Question &nbsp; &nbsp;  </span> */}


         


          
              <div className='grid w-[60rem]' container sx={{ border: '1px solid lightgrey', p: 2, mt: 2, position: 'relative' }}>
               

                <div className='mb-5 bg-gray-100 p-5 border-current rounded ' >
                  <div className='w-4/5'>

                  </div>

                  <div className='mb-5 '>
                    <div className='grid grid-cols-2 gap-5  mt-10'>

                      <label className="block text-gray-700 text-sm font-bold w-[98rem] "> Question
                      <input className='p-3 m-5 outline-none rounded-md text-12 w-1/2'
                      onChange={(v) => {
                        setQues(v.target.value)
                      }}
                      ></input>
                      </label>
                    </div>
                    <div className='grid grid-cols-2 gap-5  mt-10'>
                      {
                         option.map((item, index) => (
                          <label className="block text-gray-700 text-sm font-bold mb-2"> Add Options
                
                          <input type="text" className='w-full p-2 h-10 border-1  shadow-md outline-0 rounded-lg bg-white text-gray-500 border-gray-300' onChange={(v) => {
                            changeOptions(v.target.value, index)
                          }}
                          />
                          <input type="checkbox" name="" id=""  onChange={(e) => setChecked(e.target.checked,)} />
                          
                        </label>
                        
                         ))
                      }
                      
                     <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded' onClick={addOptionBtn}>Add Option</button>
                      </div>
                  </div>


                </div>



              </div>
            
          

          <div className='grid m-5' item xs={12} align="right">
            <button align="right" className={`text-white text-base w-56 rounded-3xl py-2 px-10 btn-bg-green `} variant="contained" onClick={saveQuestion}>Add Question</button>
          </div>

        </div>

    </>
  )
}

export default CreateQuestion