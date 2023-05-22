import React, { useEffect, useState } from 'react'
import Skeleton from '../../layouts/Skeleton'
import { getAPI, postAPI } from '../../network'

import { Link, useNavigate } from 'react-router-dom'
import { checkVisibility, componentVisibility, fullName, validation } from '../../utils'

import Loader from "../../components/Loader"
import Gpay from "../../assets/images/gpay.png"
import PhonePe from "../../assets/images/phonepay.png"
import Paytm from "../../assets/images/paytm.png"
import Scanner from "../../assets/images/scanner.png"
import Button from '../../components/Button'



function Method({ navigation }) {

    const [load, setLoad] = useState(false)
    const [payment,setPayment]=useState('');

    const handleChange=(e)=>{
        setPayment( e.target.value);
     }
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
                                Choose Payment method
                            </div>
                            <div className="text-[#828282] text-[16px] font-light  mt-8">Please pay the One time fee payment to proceed</div>

                            <div className='flex justify-center mt-6 '>
                                <div className="w-[50rem] h-80 border  rounded-xl">
                                    
                                <form>
                                    <div className="grid grid-cols-3 gap-4 m-10">
                                   
                                        <div className="col-span-2 border-r">
                                           
                                                <div className="flex items-center form-check m-3 shadow-md rounded mt-2">

                                                    <div className="ml-3"><input
                                                            type="radio"
                                                            name="payment"
                                                            value="Paytm"
                                                             onChange={handleChange} 
                                                            id="paytm"
                                                        /></div>
                                                    <div><img className="p-2 w-12" src={Paytm}></img></div>
                                                    <div> <div className='text-[#181725] font-semibold'>Paytm UPI</div></div>
                                                   
                                                </div>
                                                <div className="flex items-center form-check m-3 shadow-md rounded mt-2">
                                                    <div className="ml-3">
                                                    <input
                                                            type="radio"
                                                             name="payment"
                                                            value="Gpay"
                                                              onChange={handleChange} 
                                                            id="gpay"
                                                        />
                                                    </div>
                                                    <div>
                                                    <img className="p-2 w-12" src={Gpay}></img>
                                                    </div>
                                                    <div> <div  className='text-[#181725] font-semibold'>Google Pay UPI</div></div>
                                                   
                                                </div>
                                                <div className="flex items-center form-check m-3 shadow-md rounded mt-2">
                                                    <div className="ml-3">
                                                    <input
                                                            type="radio"
                                                             name="payment"
                                                            value="Phonpay"
                                                              onChange={handleChange} 
                                                            id="phonePay"
                                                        />
                                                    </div>
                                                    <div> <img className="p-2 w-12" src={PhonePe}></img></div>
                                                    <div>  <div className='text-[#181725] font-semibold'>PhonePe UPI</div></div>
                                                     
                                                </div>
                                            
                                        </div>
                                        <div className="flex flex-col justify-center items-center ">
                                            <div className="p-2">Scan & Pay</div>
                                            <div className="p-2"> <img  className="p-2 w-20" src={Scanner}></img></div>
                                            <div className="p-2">Total : <b> ₹ 100</b></div>
                                        </div>
                                  

                                    </div>
                                    </form>

                                
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='m-10 float-right'>
                        <Button title={"Pay ₹100"}></Button>
                    </div>
                    
                </div> 
            </div>



        </Skeleton>
    )
}

export default Method
