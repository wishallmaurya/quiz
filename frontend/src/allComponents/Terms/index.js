import React, { useEffect, useState } from 'react'
import Skeleton from '../../layouts/Skeleton'
import { getAPI, postAPI } from '../../network'
import { useNavigate,Link } from 'react-router-dom'
import { checkVisibility, componentVisibility, fullName, validation } from '../../utils'
import Loader from "../../components/Loader"

function TermsAndCondition({ navigation }) {
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
            <div className='bg-[#152C4F] h-auto p-5 w-full ' >
                <div className='flex justify-center text-3xl text-white leading-9 '>
                    <p className='align-center mt-16'>Oliva Ministries Terms & Conditions and Privacy Policy</p>
                </div>
                
            </div>
            <div className='flex justify-center'>
            <div className='w-2/3 leading-[3rem] mt-5'>
                    <p>1. Terms
                        By accessing the website at &nbsp;
                        <Link to='/' className='text-blue-400 hover:text-blue-600'>
                        https://olivaministries.com</Link>
                        , you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.
                        </p><br></br>  
                        <p>  
                        2. Use License
                        Permission is granted to temporarily download one copy of the materials (information or software) on Oliva Ministries’s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                        modify or copy the materials;
                        use the materials for any commercial purpose, or for any public display (commercial or non-commercial);
                        attempt to decompile or reverse engineer any software contained on Oliva Ministries’s website;
                        remove any copyright or other proprietary notations from the materials; or
                        transfer the materials to another person or “mirror” the materials on any other server.
                        This license shall automatically terminate if you violate any of these restrictions and may be terminated by Oliva Ministries at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.
                        </p><br></br> 
                        <p>
                        3. Disclaimer
                        The materials on Oliva Ministries’s website are provided on an ‘as is’ basis. Oliva Ministries makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                        Further, Oliva Ministries does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
                        </p><br></br> 
                        <p>
                        4. Limitations
                        In no event shall Oliva Ministries or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Oliva Ministrie’s website, even if Oliva Ministries or an Oliva Ministries authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
                        </p>
                    
                </div>
            </div>

        </Skeleton>
    )
}

export default TermsAndCondition