import React, { useEffect, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { MdTouchApp } from 'react-icons/md'
import 'alpinejs';
import { checkPermission, checkVisibility } from "../utils";
export default function Sidebar(props) {
    const { show, setShow, eqNav, setEqNav, dashboardNav, setDashboardNav, settingNav, setSettingNav, sideBar, setSideBar, windowWidth } = props;
    const navigate = useNavigate();

    const [permissions , setPermissions] = useState([])
    const [userType, setUserType] = useState('admin')

    useEffect(() => {
      let type = localStorage.getItem('userType')
      let newPermissions = JSON.parse(localStorage.getItem('permissions'))
      setUserType(type)
      setPermissions(newPermissions)
    },[])

    const checkAccess = (permission) => {
        if(userType === 'user'){
            return  permissions.includes(permission) ? true : false;
        }
        else{
            return   true;
        }
    }

    const logOut = () => {
            localStorage.clear();
            let path = `/signin`; 
            navigate(path);
    }


    return (
        <>
            {
                sideBar &&
                <div className="absolute lg:relative w-64 h-screen shadow bg-white hidden lg:block">
                    <div className="h-16 w-full flex items-center px-8 mb-2">
                        <img src={require('../assets/images/logo.png')} style={{ width: 60, margin: 'auto' }} className="pt-4" />
                    </div>
                    <ul aria-orientation="vertical" className=" py-6">
                        <li className=" cursor-pointer  text-sm leading-3 tracking-normal">
                            <div className="flex pl-6 p-2 relative items-center font-semibold focus:text-indigo-700 focus:outline-none text-gray-500  bg-gray-100 mr-2 border-l-4 border-indigo-500">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                                        <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                                    </svg>
                                </div>
                                
                                <span className="ml-2" onClick={() => {navigate('/dashboard')}}>Dashboard</span>
                                <div className="absolute right-0 mx-1">
                                    {
                                        dashboardNav ?
                                            <span onClick={() => { setDashboardNav(false) }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                    <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clipRule="evenodd" />
                                                </svg>
                                            </span>
                                            :
                                            <span onClick={() => {
                                                setDashboardNav(true)
                                            }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                    <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
                                                </svg>
                                            </span>
                                    }
                                </div>
                            </div>
                            {
                                dashboardNav &&
                                <ul className=" my-3 space-y-2 bg-white ml-6">
                                    <li>
                                        <Link to="/enquiry" 
                                            className="flex items-center w-full font-medium  ml-5 p-1 px-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">Menu 1</Link>
                                    </li>
                                    <li>
                                        <a href="/leads_enquiry"
                                            className="flex items-center w-full font-medium  ml-5 p-1 px-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">Menu 2</a>
                                    </li>
                                    <li>
                                        <a href="/leads_enquiry_visa"
                                            className="flex items-center w-full font-medium ml-5 p-1 px-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">Menu 3</a>
                                    </li>
                                </ul>
                            }
                        </li>
                        {
                            checkAccess('LEAD_READ') &&
                            <li className=" cursor-pointer text-gray-600 text-sm leading-3 tracking-normal ">
                                <div className="flex pl-6 p-2 relative items-center font-semibold hover:text-indigo-700 focus:text-indigo-700 focus:outline-none mr-2">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                            <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
                                        </svg>
                                    </div>
                                    <span className="ml-2">Enquiry</span>
                                    <div className="absolute right-0 mx-1">
                                        {
                                            eqNav ?
                                                <span onClick={() => { setEqNav(false) }}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                        <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clipRule="evenodd" />
                                                    </svg>
                                                </span>
                                                :
                                                <span onClick={() => {
                                                  
                                                    setEqNav(true)
                                                }}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                        <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
                                                    </svg>
                                                </span>
                                        }
                                    </div>
                                </div>
                                {
                                    eqNav &&
                                    <ul id="dropdown-example" className=" py-3 space-y-2 pl-7">
                                        {
                                            checkAccess('LEAD_ADD') &&
                                            <li>
                                                <span 
                                                    className="flex items-center w-full font-medium  ml-5 p-1 px-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none" onClick={() => {navigate('/enquiry/addleads')}} >Add Leads</span>
                                            </li>
                                        }
                                        
                                        <li>
                                            <span 
                                                className="flex items-center w-full font-medium  ml-5 p-1 px-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none" onClick={() => {navigate('/enquiry/list')}}>Students List</span>
                                        </li>
                                        {/* {
                                            checkAccess('LEAD_ASSIGN') &&
                                            <li>
                                                <span
                                                    className="flex items-center w-full font-medium ml-5 p-1 px-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none" onClick={() => {navigate('/enquiry/assign')}}>Assign Enquiry</span>
                                            </li>
                                        } */}
                                    </ul>
                                }
                            </li>
                        }
                        {
                            checkAccess('') &&
                            <li className=" cursor-pointer text-gray-600 text-sm leading-3 tracking-normal hover:text-indigo-700 focus:text-indigo-700 focus:outline-none mr-2">
                                <div className="flex pl-6 p-2 items-center font-semibold">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path fillRule="evenodd" d="M5.625 1.5H9a3.75 3.75 0 013.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 013.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 01-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875zM9.75 17.25a.75.75 0 00-1.5 0V18a.75.75 0 001.5 0v-.75zm2.25-3a.75.75 0 01.75.75v3a.75.75 0 01-1.5 0v-3a.75.75 0 01.75-.75zm3.75-1.5a.75.75 0 00-1.5 0V18a.75.75 0 001.5 0v-5.25z" clipRule="evenodd" />
                                        <path d="M14.25 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0016.5 7.5h-1.875a.375.375 0 01-.375-.375V5.25z" />
                                    </svg>

                                    <span className="ml-2">Reports</span>
                                </div>
                            </li>
                          }

                        {
                            checkAccess('') &&
                            <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                <div className="flex pl-6 p-2 items-center font-semibold mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z" />
                                    </svg>

                                    <span className="ml-2" onClick={() => {navigate('/users/list')}}>User</span>
                                </div>
                            </li>
                        }
                        
                        {
                            checkAccess('') &&
                            <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                <div className="flex pl-6 p-2 items-center font-semibold mr-2">
                                    <MdTouchApp style={{fontSize : 22}}/>

                                    <span className="ml-2" onClick={() => {navigate('/roles')}}> Role</span>
                                </div>
                            </li>
                        }
                       {
                            checkAccess('') &&
                            <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal">
                            <div className="flex pl-6 p-2 relative items-center font-semibold hover:text-indigo-700 focus:text-indigo-700 focus:outline-none mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path fillRule="evenodd" d="M11.828 2.25c-.916 0-1.699.663-1.85 1.567l-.091.549a.798.798 0 01-.517.608 7.45 7.45 0 00-.478.198.798.798 0 01-.796-.064l-.453-.324a1.875 1.875 0 00-2.416.2l-.243.243a1.875 1.875 0 00-.2 2.416l.324.453a.798.798 0 01.064.796 7.448 7.448 0 00-.198.478.798.798 0 01-.608.517l-.55.092a1.875 1.875 0 00-1.566 1.849v.344c0 .916.663 1.699 1.567 1.85l.549.091c.281.047.508.25.608.517.06.162.127.321.198.478a.798.798 0 01-.064.796l-.324.453a1.875 1.875 0 00.2 2.416l.243.243c.648.648 1.67.733 2.416.2l.453-.324a.798.798 0 01.796-.064c.157.071.316.137.478.198.267.1.47.327.517.608l.092.55c.15.903.932 1.566 1.849 1.566h.344c.916 0 1.699-.663 1.85-1.567l.091-.549a.798.798 0 01.517-.608 7.52 7.52 0 00.478-.198.798.798 0 01.796.064l.453.324a1.875 1.875 0 002.416-.2l.243-.243c.648-.648.733-1.67.2-2.416l-.324-.453a.798.798 0 01-.064-.796c.071-.157.137-.316.198-.478.1-.267.327-.47.608-.517l.55-.091a1.875 1.875 0 001.566-1.85v-.344c0-.916-.663-1.699-1.567-1.85l-.549-.091a.798.798 0 01-.608-.517 7.507 7.507 0 00-.198-.478.798.798 0 01.064-.796l.324-.453a1.875 1.875 0 00-.2-2.416l-.243-.243a1.875 1.875 0 00-2.416-.2l-.453.324a.798.798 0 01-.796.064 7.462 7.462 0 00-.478-.198.798.798 0 01-.517-.608l-.091-.55a1.875 1.875 0 00-1.85-1.566h-.344zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" clipRule="evenodd" />
                                </svg>

                                <span className="ml-2 leading-4">Settings Configuration</span>
                                <div className="absolute right-0 mx-1">
                                    {
                                        settingNav ?
                                            <span onClick={() => { setSettingNav(false) }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                    <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clipRule="evenodd" />
                                                </svg>
                                            </span>
                                            :
                                            <span onClick={() => {
                                                setSettingNav(true)
                                            }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                    <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
                                                </svg>
                                            </span>
                                    }
                                </div>
                            </div>
                            {
                                settingNav &&
                                    <div className="py-2 mx-5 bg-white pl-3">
                                        <ul id="dropdown-example" className="space-y-2">
                                            <li>
                                                <span 
                                                    className="flex leading-4 items-center w-full font-semibold  ml-3 p-1.5 px-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none"  onClick={() => {navigate('/source')}}>Source </span>
                                            </li>

                                        </ul>

                                        <ul id="dropdown-example" className="space-y-2">
                                            <li>
                                                <span href="country"
                                                    className="flex leading-4 leading-3 items-center w-full font-medium  ml-3 p-1.5 px-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none"  onClick={() => {navigate('/country')}}>Country </span>
                                            </li>
                                        </ul>
                                        
                                        <ul id="dropdown-example" className="space-y-2">
                                            <li>
                                                <span
                                                    className="flex items-center leading-4 w-full font-medium ml-3 p-1.5 px-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none"onClick={() => {navigate('/qualification')}}>Qualification  </span>
                                            </li>

                                        </ul>

                                        
                                        <ul id="dropdown-example" className="space-y-2">
                                            
                                            <li>
                                            <span
                                                    className="flex items-center leading-4 w-full font-medium  ml-3 p-1.5 px-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none" onClick={() => {navigate('/councellor')}}>Counsellor  </span>
                                            
                                            </li>

                                        </ul>

                                        
                                        <ul id="dropdown-example" className="space-y-2">
                                        
                                            <li>
                                            <span
                                                    className="flex items-center leading-4 w-full font-medium  ml-3 p-1.5 px-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none" onClick={() => {navigate('/branch')}}>Branch  </span>
                                            </li>
                                        </ul>
                                    
                                        <ul id="dropdown-example" className="space-y-2">
                                        
                                            <li>
                                            <span
                                                    className="flex items-center leading-4 w-full font-medium  ml-3 p-1.5 px-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none" onClick={() => {navigate('/university')}}>University  </span>
                                            </li>

                                        </ul>
                                    </div>
                              }
                            </li>
                            
                       }

                       <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                            <div className="flex pl-6 p-2 items-center font-semibold mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-code" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <polyline points="7 8 3 12 7 16" />
                                    <polyline points="17 8 21 12 17 16" />
                                    <line x1={14} y1={4} x2={10} y2={20} />
                                </svg>
                                <a href="signin" onClick={logOut}><span className="ml-2">Log Out</span></a>
                            </div>
                        </li>
                       
                    </ul>
                </div>
            }
            {/*Mobile responsive sidebar*/}

            <div className={show ? "w-full h-full absolute z-40  transform  translate-x-0 " : "   w-full h-full absolute z-40  transform -translate-x-full"} id="mobile-nav">
                <div className="bg-gray-800 opacity-50 absolute h-full w-full lg:hidden" onClick={() => setShow(true)} />
                <div className="absolute z-40 sm:relative w-64 md:w-96 shadow pb-4 bg-gray-100 lg:hidden transition duration-150 ease-in-out h-full">
                    <div className="flex flex-col justify-between h-full w-full">
                        <div>
                            <div className="flex items-center justify-between pl-8 px-2">
                                <div className="h-16 w-full flex items-center">

                                    <img src={require('../assets/images/logo.png')} style={{ width: 60, margin: 'auto' }} className="pt-4" />
                                </div>
                                <div id="closeSideBar" className="flex items-center justify-center h-10 w-10" onClick={() => setShow(false)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <line x1={18} y1={6} x2={6} y2={18} />
                                        <line x1={6} y1={6} x2={18} y2={18} />
                                    </svg>
                                </div>
                            </div>
                            <ul aria-orientation="vertical" className=" py-6">
                                <li className=" cursor-pointer  text-sm leading-3 tracking-normal">
                                    <div className="flex pl-6 p-2 relative items-center font-semibold focus:text-indigo-700 focus:outline-none text-gray-500  bg-gray-100 mr-2 border-l-4 border-indigo-500">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                                                <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                                            </svg>
                                        </div>
                                        <span className="ml-2">Dashboard</span>
                                        <div className="absolute right-0 mx-1">
                                            {
                                                dashboardNav ?
                                                    <span onClick={() => { setDashboardNav(false) }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                            <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clipRule="evenodd" />
                                                        </svg>
                                                    </span>
                                                    :
                                                    <span onClick={() => {
                                                        setDashboardNav(true)
                                                    }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                            <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
                                                        </svg>
                                                    </span>
                                            }
                                        </div>
                                    </div>
                                    {
                                        dashboardNav &&
                                        <ul className=" my-3 space-y-2 bg-white ml-6">
                                            <li>
                                                <Link to="/"
                                                    className="flex items-center w-full font-medium  ml-5 p-1 px-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">Menu 1</Link>
                                            </li>
                                            <li>
                                                <a href="#"
                                                    className="flex items-center w-full font-medium  ml-5 p-1 px-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">Menu 2</a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                    className="flex items-center w-full font-medium ml-5 p-1 px-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">Menu 3</a>
                                            </li>
                                        </ul>
                                    }
                                </li>
                                <li className=" cursor-pointer text-gray-600 text-sm leading-3 tracking-normal ">
                                    <div className="flex pl-6 p-2 relative items-center font-semibold hover:text-indigo-700 focus:text-indigo-700 focus:outline-none mr-2">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
                                            </svg>
                                        </div>
                                        <span className="ml-2">Enquiry</span>
                                        <div className="absolute right-0 mx-1">
                                            {
                                                eqNav ?
                                                    <span onClick={() => { setEqNav(false) }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                            <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clipRule="evenodd" />
                                                        </svg>
                                                    </span>
                                                    :
                                                    <span onClick={() => {
                                                        console.log('False')
                                                        setEqNav(true)
                                                    }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                            <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
                                                        </svg>
                                                    </span>
                                            }
                                        </div>
                                    </div>
                                    {
                                        eqNav &&
                                        <ul id="dropdown-example" className=" py-3 space-y-2 pl-7">
                                            
                                            <li>
                                                <Link to="/enquiry/list"
                                                    className="flex items-center w-full font-medium  ml-5 p-1 px-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">List</Link>
                                            </li>
                                            <li>
                                                <a href="#"
                                                    className="flex items-center w-full font-medium ml-5 p-1 px-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">Assign Inquiry</a>
                                            </li>
                                        </ul>
                                    }
                                </li>
                                <li className=" cursor-pointer text-gray-600 text-sm leading-3 tracking-normal hover:text-indigo-700 focus:text-indigo-700 focus:outline-none mr-2">
                                    <div className="flex pl-6 p-2 items-center font-semibold">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                            <path fillRule="evenodd" d="M5.625 1.5H9a3.75 3.75 0 013.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 013.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 01-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875zM9.75 17.25a.75.75 0 00-1.5 0V18a.75.75 0 001.5 0v-.75zm2.25-3a.75.75 0 01.75.75v3a.75.75 0 01-1.5 0v-3a.75.75 0 01.75-.75zm3.75-1.5a.75.75 0 00-1.5 0V18a.75.75 0 001.5 0v-5.25z" clipRule="evenodd" />
                                            <path d="M14.25 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0016.5 7.5h-1.875a.375.375 0 01-.375-.375V5.25z" />
                                        </svg>

                                        <span className="ml-2">Reports</span>
                                    </div>
                                </li>
                                <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                    <div className="flex pl-6 p-2 items-center font-semibold mr-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                            <path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z" />
                                        </svg>

                                        <span className="ml-2">Users</span>
                                    </div>
                                </li>
                                <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal">
                                    <div className="flex pl-6 p-2 relative items-center font-semibold hover:text-indigo-700 focus:text-indigo-700 focus:outline-none mr-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                            <path fillRule="evenodd" d="M11.828 2.25c-.916 0-1.699.663-1.85 1.567l-.091.549a.798.798 0 01-.517.608 7.45 7.45 0 00-.478.198.798.798 0 01-.796-.064l-.453-.324a1.875 1.875 0 00-2.416.2l-.243.243a1.875 1.875 0 00-.2 2.416l.324.453a.798.798 0 01.064.796 7.448 7.448 0 00-.198.478.798.798 0 01-.608.517l-.55.092a1.875 1.875 0 00-1.566 1.849v.344c0 .916.663 1.699 1.567 1.85l.549.091c.281.047.508.25.608.517.06.162.127.321.198.478a.798.798 0 01-.064.796l-.324.453a1.875 1.875 0 00.2 2.416l.243.243c.648.648 1.67.733 2.416.2l.453-.324a.798.798 0 01.796-.064c.157.071.316.137.478.198.267.1.47.327.517.608l.092.55c.15.903.932 1.566 1.849 1.566h.344c.916 0 1.699-.663 1.85-1.567l.091-.549a.798.798 0 01.517-.608 7.52 7.52 0 00.478-.198.798.798 0 01.796.064l.453.324a1.875 1.875 0 002.416-.2l.243-.243c.648-.648.733-1.67.2-2.416l-.324-.453a.798.798 0 01-.064-.796c.071-.157.137-.316.198-.478.1-.267.327-.47.608-.517l.55-.091a1.875 1.875 0 001.566-1.85v-.344c0-.916-.663-1.699-1.567-1.85l-.549-.091a.798.798 0 01-.608-.517 7.507 7.507 0 00-.198-.478.798.798 0 01.064-.796l.324-.453a1.875 1.875 0 00-.2-2.416l-.243-.243a1.875 1.875 0 00-2.416-.2l-.453.324a.798.798 0 01-.796.064 7.462 7.462 0 00-.478-.198.798.798 0 01-.517-.608l-.091-.55a1.875 1.875 0 00-1.85-1.566h-.344zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" clipRule="evenodd" />
                                        </svg>

                                        <span className="ml-2leading-4">Settings Configuration</span>
                                        <div className="absolute right-0 mx-1">
                                            {
                                                settingNav ?
                                                    <span onClick={() => { setSettingNav(false) }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                            <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clipRule="evenodd" />
                                                        </svg>
                                                    </span>
                                                    :
                                                    <span onClick={() => {
                                                        setSettingNav(true)
                                                    }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                            <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
                                                        </svg>
                                                    </span>
                                            }
                                        </div>
                                    </div>
                                    {
                                        settingNav &&
                                        <div className="py-3 mx-7 bg-white pl-7">
                                            <div className="float-left mb-2 mt-1 font-semibold">Source</div>
                                            <ul id="dropdown-example" className="space-y-2">
                                                
                                                <li>
                                                    <a href="/source/list"
                                                        className="flex items-center w-full font-medium  ml-3 p-1 px-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">List</a>
                                                </li>

                                            </ul>

                                            
                                            <ul id="dropdown-example" className="space-y-2">
                                               
                                                <li>
                                                    <a href="/country/list"
                                                        className="flex items-center w-full font-medium  ml-3 p-1 px-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">List</a>
                                                </li>

                                            </ul>
                                                <div className="float-left mb-2 mt-5 font-semibold">Qualification</div>
                                                <ul id="dropdown-example" className="space-y-2">
                                                   
                                                    <li>
                                                        <a href="/qualification/list"
                                                            className="flex items-center w-full font-medium  ml-3 p-1 px-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">List</a>
                                                    </li>

                                                </ul>
                                            <div className="float-left mb-2 mt-5 font-semibold">Counsellor</div>
                                            <ul id="dropdown-example" className="space-y-2">
                                               
                                                <li>
                                                    <a href="/councellor/list"
                                                        className="flex items-center w-full font-medium  ml-3 p-1 px-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">List</a>
                                                </li>

                                            </ul>

                                            <div className="float-left mb-2 mt-5 font-semibold">Branch</div>
                                            <ul id="dropdown-example" className="space-y-2">
                                               
                                                <li>
                                                    <a href="/branch/list"
                                                        className="flex items-center w-full font-medium  ml-3 p-1 px-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">List</a>
                                                </li>
                                            </ul>
                                            <div className="float-left mb-2 mt-5 font-semibold">University</div>
                                            <ul id="dropdown-example" className="space-y-2">
                                               
                                                <li>
                                                    <a href="/university/list"
                                                        className="flex items-center w-full font-medium  ml-3 p-1 px-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">List</a>
                                                </li>

                                            </ul>
                                        </div>
                                    }
                                </li>
                                <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                    <div className="flex pl-6 p-2 items-center font-semibold mr-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-code" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <polyline points="7 8 3 12 7 16" />
                                            <polyline points="17 8 21 12 17 16" />
                                            <line x1={14} y1={4} x2={10} y2={20} />
                                        </svg>
                                        <span className="ml-2">Log Out</span>
                                    </div>
                                </li>
                                
                            </ul>

                        </div>
                        <div className="w-full">
                            <div className="flex justify-center mb-4 w-full px-6">
                                <div className="relative w-full">
                                    <div className="text-gray-500 absolute ml-4 inset-0 m-auto w-4 h-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width={16} height={16} viewBox="0 0 24 24" strokeWidth={1} stroke="#A0AEC0" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <circle cx={10} cy={10} r={7} />
                                            <line x1={21} y1={21} x2={15} y2={15} />
                                        </svg>
                                    </div>
                                    <input className="bg-gray-200 focus:outline-none rounded w-full text-sm text-gray-500  pl-10 py-2" type="text" placeholder="Search" />
                                </div>
                            </div>
                            <div className="border-t border-gray-300">
                                <div className="w-full flex items-center justify-between px-6 pt-1">
                                    <div className="flex items-center">

                                        <p className="md:text-xl text-gray-800 text-base leading-4 ml-2">Virendra Arekar</p>
                                        <img alt="profile-pic" src="https://tuk-cdn.s3.amazonaws.com/assets/components/boxed_layout/bl_1.png" className="w-8 h-8 rounded-md" />
                                    </div>
                                    <ul className="flex">
                                        <li className="cursor-pointer text-white pt-5 pb-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-messages" width={24} height={24} viewBox="0 0 24 24" strokeWidth={1} stroke="#718096" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10" />
                                                <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" />
                                            </svg>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*Mobile responsive sidebar*/}
        </>
    );
}
