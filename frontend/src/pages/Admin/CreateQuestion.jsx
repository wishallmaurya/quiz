import React, { useState } from 'react'
import Skeleton from '../../layouts/Skeleton'
import { MdDelete } from 'react-icons/md'
import { checkVisibility, componentVisibility, fullName, validation } from '../../utils'

const CreateQuestion = () => {

  const [option, setOptions] = useState([{index:0,  option:''}])


  const [questions, setQuestions] = useState([{ index: 0, question: '', options: [], correctAns: '' }])

  // const addExperience = () => {
  //   let index = questions.length;
  //   var exp = questions;
  //   exp.push({ index: index, question: '', options: [], correctAns: '' });
  //   setQuestions([...exp])
  //   setQuestions({
  //     options:option
  //   })
  //   console.log("++++questions++++",questions)
  //   setOptions([{index:0,  option:''}])
  // }

  const removeExperience = async (index, exp_id) => {
    var arr = [];
    if (questions.length === 1) {
      validation(null, 'At least one field of', questions)
      return;
    }

    for (var i = 0; i < questions.length; i++) {
      if (i !== index) {
        arr.push(questions[i])
      }
    }
    setQuestions([...arr])
   
    console.log(questions, "--------------------remove questions")
  }

  const changeQuestion = (value, ind) => {
    setQuestions(current =>
        current.map((obj, index) => {
            if (index === ind) {
                return { ...obj, question: value };
            }

            return obj;
        }),
    );
}
const addOptionBtn=()=>{
  let index=option.length
  var opts=option
  opts.push({index:index,option:''})

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

  return (
    <>
      
        <div className="text-[2rem] text-center font-bold">Create Questions</div>

        <div className="text-center text-[2rem] my-6">Question { }/{ }</div>


        <div className="w-full absolute flex justify-center items-center text-[1rem] flex-col font-semibold text-black"><span> Question &nbsp; &nbsp;  </span>

         


          {
            questions.map((item, index) => (
              <div className='grid' container key={index} sx={{ border: '1px solid lightgrey', p: 2, mt: 2, position: 'relative' }}>
                <button variant="contained" color="error" size="small" onClick={() => { removeExperience(index, item.id) }} sx={{ position: 'absolute', left: -10, top: -10 }}><MdDelete /></button>

                <div className='mb-5 bg-gray-100 p-5 border-current rounded'>
                  <div className='w-4/5'>

                  </div>

                  <div className='mb-5 '>
                    <div className='grid grid-cols-2 gap-5  mt-10'>

                      <label className="block text-gray-700 text-sm font-bold  "> Question
                      <input className='p-3 outline-none rounded-md text-12 w-1/2'
                      onChange={(v) => {
                        changeQuestion(v.target.value, index)
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
                        <p>{item.option}</p>
                        </label>
                        
                         ))
                      }
                      
                     <button onClick={addOptionBtn}>Add Option</button>
                      </div>
                  </div>

                </div>

              </div>
            ))
          }
          <div className='grid m-5' item xs={12} align="right">
            <button align="right" className={`text-white text-base w-1/2 rounded-3xl py-2 px-10 btn-bg-green `} variant="contained" >Add Question</button>
          </div>
        </div>
    </>
  )
}

export default CreateQuestion