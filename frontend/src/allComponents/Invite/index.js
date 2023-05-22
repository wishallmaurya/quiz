import React, { useEffect, useState } from 'react'
import Skeleton from '../../layouts/Skeleton'
import { getAPI, postAPI } from '../../network'
import copy from "copy-to-clipboard";
import { Link, useNavigate } from 'react-router-dom'
import { checkVisibility, componentVisibility, fullName, validation } from '../../utils'
import Copy from "../../assets/images/copy.png"
import Loader from "../../components/Loader"
import Gmail from "../../assets/images/email.png"
import FB from "../../assets/images/fb.png"


function Invite({ navigation }) {
    let data = JSON.parse(localStorage.getItem("user"));
    const copyText=data.referralCode
     
     const copyToClipboard = () => {
        copy(copyText);
        alert(`You have copied "${copyText}"`);
     }
    // const navigateTo = useNavigate();
    // const [firstName, setFirstName] = useState('')
    // const [lastName, setLastName] = useState('')
    // const [email, setEmail] = useState('')
    // const [mobile, setMobile] = useState('')
    // const [company, setCompany] = useState('')
    // const [user, setUser] = useState({})
    // const [userPhoto, setUserPhoto] = useState('')
    const [load, setLoad] = useState(false)

    // useEffect(() => { 
    //    let newUser = JSON.parse(localStorage.getItem('user'))
    //    setUser(newUser)
    //    setFirstName(newUser.firstName)
    //    setLastName(newUser.lastName)
    //    setMobile(newUser.mobile)
    //    setEmail(newUser.email)
    //    setCompany(newUser.company)

    // },[])
    // useDocumentTitle('IVY | Add Lead')


    // const onSubmit = async(e) => {
    //     e.preventDefault();
    //     const values = {
    //         firstName,
    //         lastName,
    //         email,
    //         mobile,
    //         userPhoto,
    //         company
    //     }

    //     console.log('Values',values)

    //     if(validation(null, 'First Name', firstName)){
    //         return;
    //     }
    //     if(validation(null, 'Last Name', lastName)){
    //         return;
    //     }
    //     else if(validation('phone', 'Mobile', mobile.toString())){
    //         return;
    //     }
    //     else if(validation('email', 'Email', email)){
    //         return;
    //     }

    //     else if(validation(null, 'Company', company)){
    //         return;
    //     }
    //     else if(validation('empty', 'Profile Picture', userPhoto)){
    //         return;
    //     }


    //     var formData = new FormData();
    //     formData.append('firstName',firstName)
    //     formData.append('lastName',lastName)
    //     formData.append('mobile',mobile)
    //     formData.append('email',email)
    //     formData.append('userPhoto', userPhoto)
    //     formData.append('company',company)

    //     setLoad(true)
    //     let datas = await postAPI('/profile', formData);
    //     if(datas){

    //     }
    //     setLoad(false)
    // }

    return (
        <Skeleton>
            <Loader loader={load} />
            
            <div className='bg-[#152C4F] h-44 w-full rounded-br-full' >
            <div className='flex justify-center text-3xl text-white leading-9 '>
                    <p className='align-center mt-16'>Invite your Friends</p>
                </div>
            </div>
                <div className=' flex justify-center mt-5 relative bottom-16'>
                    <div className=' bg-[#FCFCFC] h-[28rem] w-2/3 rounded-xl sm:shadow-md shadow-inner'>
                        <div className='flex justify-center '>
                            <div className='text-2xl text-[#282828] font-medium mt-10'>
                                Refer a friend! Give 500 Points, Get 500 Points
                            </div>
                        </div>
                        <div className='flex justify-center '>
                            <div className='text-sm text-[#282828] w-96 text-center mt-16'>
                                Get your referral link to give your friends 500 pts when they join on Oliva Ministries Quizzes via your link/code. If they join it, we’ll reward you with 500 pts and more exciting rewards
                            </div>
                        </div>
                        <div className='flex justify-center text-sm mt-4 '>
                            <Link to={"/termsAndCondition"} className="underline">Terms & Conditions</Link>
                        </div>
                        <div className='flex justify-center text-sm mt-4 '>
                            <div className=' text-sm font-bold'>
                                Invite now using:
                            </div>
                        </div>
                        <div className='flex justify-center text-sm mt-4 '>
                            <img height={"30px"} width={"30px"} style={{ margin: "10px" }} src={Gmail} alt="email" />
                            <img height={"30px"} width={"30px"} style={{ margin: "10px" }} src={FB} alt="email" />
                        </div>
                        <div className='flex justify-center text-sm mt-4 '>
                            <p className='text-sm text-[#282828]'>Or copy your personal link</p>
                        </div>
                        <div className='flex justify-center text-sm mt-4 '>
                            <div className='flex  justify-between border-solid border-2' style={{ height: "2rem", width: "20rem" }}>
                                <p className='p-1'>{copyText}</p> 
                               
                                <span  style={{ height: "1.9rem", width: "2rem" ,float:"right",backgroundColor:"#001246" }}>
                                <img className="p-2"src={Copy} alt='' onClick={copyToClipboard}/>
                                </span> 
                            </div>
                        </div>

                    </div>
                </div>

            

        </Skeleton>
    )
}

export default Invite
