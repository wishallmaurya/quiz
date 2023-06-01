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


function Demo({ navigation }) {
    const copyText='olivaquiz.referral-50641'
     
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
            
            <h1>Helllooooo</h1>

           

        </Skeleton>
    )
}

export default Demo
