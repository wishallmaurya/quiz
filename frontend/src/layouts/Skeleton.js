import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { ToastContainer, toast } from 'react-toastify';
import Footer from "./Footer";


export default function Skeleton(props) {
    const [show, setShow] = useState(false);
    const [eqNav, setEqNav] = useState(false);
    const [dashboardNav, setDashboardNav] = useState(false);
    const [settingNav, setSettingNav] = useState(false);
    const [sideBar, setSideBar] = useState(true);
    const [profile, setProfile] = useState(false);
    const [windowWidth, setWindowWidth] = useState('100%')

    const [responsive, setResponsive] = useState(false)

    React.useEffect(() => {
        function handleResize() {
          console.log('resized to: ', window.innerWidth, 'x', window.innerHeight)
          if(window.innerWidth <= 1049){
            setResponsive(true)
          }
          else{
            setResponsive(false)
          }
        }
    
    window.addEventListener('resize', handleResize)
    handleResize()
   }, [])


    return (
        <>
            <div className="w-full h-full bg-[#F7F8FA]" >
            <ToastContainer />
                <div className="flex flex-no-wrap">
                   
                    <div className=" w-full">
                        
                        <Header show={show} setShow={(val) => setShow(val)}  profile={profile} setProfile={(val) => setProfile(val)}/>
                        {props.children}
                        
                        <Footer/>
                        
                    </div>
                  
                </div>
            </div>
        </>
    );
}
