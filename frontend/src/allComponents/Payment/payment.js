import React, { useEffect, useState } from 'react'
import Skeleton from '../../layouts/Skeleton'
import { getAPI, postAPI } from '../../network'

import { Link, useNavigate } from 'react-router-dom'
import { checkVisibility, componentVisibility, fullName, validation } from '../../utils'

import Loader from "../../components/Loader"
import Right from "../../assets/images/right.png"
import Button from '../../components/Button'



function Payment({ navigation }) {
    const navigate = useNavigate();
    const GoToPayment = () => {
        let navigate = useNavigate();
        navigate('/paymentmethod');
    }
   
    const [load, setLoad] = useState(false)

    return (
        <Skeleton>
            <Loader loader={load} />

            <div className=' flex justify-center mt-3 relative '>
                <div className=' bg-[#FCFCFC] h-[auto] w-2/3 rounded-xl sm:shadow-md shadow-inner'>
                    <div className='flex justify-center m-8'>
                        <div className='text-center align-center'>
                            <div className='text-xl text-[#282828] font-medium'>
                                Quiz Payments
                            </div>
                            <div className='text-3xl font-bold mt-6'>
                                Please pay ₹100 to proceed
                            </div>
                            <div className="text-[#828282] text-[16px] font-light  mt-8">Please select and pay the One Time Fee of Rs.100 in order to play the Quiz</div>

                            <div className='flex justify-center mt-6 '>
                                <div className="w-72 h-80 border  rounded-xl">
                                    <div>
                                        <div className='text-xl font-medium mt-5 font-bold' >One Time Fee</div>
                                        <div className='text-xl font-bold mt-8'>₹100</div>
                                        <div className="text-[#828282] text-[14px] font-light">Per Month / Year</div>
                                        <div>
                                            <div className='flex ml-6 mt-12' ><img className="w-6 m-1 p-1" src={Right} alt="right" />Exciting Rewards</div>
                                        </div>
                                        <div>
                                            <div className='flex ml-6 mt-2' ><img className="w-6 m-1 p-1" src={Right} alt="right" />100 Questions in 1 Quiz</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='m-10 float-right'>
                       <div onClick={()=>navigate("/paymentmethod")}><Button title={"Continue to Payment"} ></Button></div>
                    </div>
                </div>
            </div>



        </Skeleton>
    )
}

export default Payment
