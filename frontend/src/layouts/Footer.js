import React, { useEffect, useState } from "react";
import { MdPadding } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import Arrow from "../assets/images/arrow.png";
import { ToastContainer, toast } from "react-toastify";
import AnchorLink from "react-anchor-link-smooth-scroll";

import Logo from "../assets/images/logImg.png";
import Linkedin from "../assets/images/linkedin.png";
import Facebook from "../assets/images/facebook.png";
import Twitter from "../assets/images/twitter.png";
let Year = new Date().getFullYear();

export default function Footer() {
  let navigate = useNavigate({});
  let x=window.location.pathname
  if(x){
    x=x.split('/')[1]
  }
  // useEffect(() => {
  //     let data = JSON.parse(localStorage.getItem('user'))
  //     setUser(data)
  // }, [])

  // const logout = async () => {
  //     let clear = await localStorage.clear();
  //     navigate('/signin');
  // }
  const subscribe = () => {
    toast.success("Subscribed");
  };
  return (
    <>
      <div className="flex justify-center h-80 bg-[#152C4F] text-[#FFFFFF] mt-8">
        <div className="w-4/5">
          <div className="flex justify-around h-50 mb-5">
            <div className="flex justify-between mt-6 ">
              <div>
                <img
                  src={Logo}
                  alt="logo"
                  height={"auto"}
                  width={"100px"}
                ></img>
                <p className="text-[18px] mt-4 ">Oliva Ministries</p>
                <div className="text-[18px] mt-4">+1 (7635) 547-12-97</div>
                <div className="text-[12px] mt-4">support@lift.agency</div>
              </div>
            </div>
            <div className="flex justify-around flex-col mt-6">
              <div className="font-normal">Quick Links</div>
              <div className="text-[#D6D6D6] text-[12px] font-light">
              {x ? (
              <button onClick={() => navigate("/")} className="m-4">
              About Us
            </button>
            ) : (
              <AnchorLink href="#aboutUs" className="m-4 cursor-pointer">
              <button>About Us</button>
            </AnchorLink>
            )}
              </div>
              <div className="text-[#D6D6D6] text-[12px] font-light">
              {x ? (
              <button onClick={() => navigate("/")} className="m-4">
              Pricing
            </button>
            ) : (
              <AnchorLink href="#pricing" className="m-4 cursor-pointer">
              <button>Pricing</button>
            </AnchorLink>
            )}
              </div>
            </div>
            <div className="flex justify-around flex-col mt-6">
              <div className="font-normal">&nbsp;</div>
              <div className="text-[#D6D6D6] text-[12px] font-light">
                <Link to="/termsAndCondition">Terms and Policy</Link>
              </div>
              <div className="text-[#D6D6D6] text-[12px] font-light">
                <Link to="/quizList">Quiz</Link>
              </div>
            </div>
            <div className="flex justify-around flex-col mt-6">
              <div className="font-normal">Subscribe</div>
              <div className="text-[#152C4F]">
                <input
                  type="text"
                  className="focus:outline-none  p-2 rounded-l-lg"
                ></input>
                <span>
                  <button
                    onClick={subscribe}
                    style={{
                      height: "2.1rem",
                      width: "2rem",
                      float: "right",
                      backgroundColor: "#478EFF",
                    }}
                    className="rounded-r-lg"
                  >
                    <img alt="arrow" src={Arrow} className="p-2 "></img>
                  </button>
                </span>
              </div>
            </div>
          </div>
          <div className="border-b"></div>
          <div className="flex justify-between m-8">
            <div className="flex justify-between p-1">
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className=" w-12"
              >
                <img src={Linkedin} alt="link"></img>
              </a>
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noreferrer"
                className="w-12"
              >
                <img src={Facebook} alt="fb"></img>
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noreferrer"
                className="w-12"
              >
                <img src={Twitter} alt="twt"></img>
              </a>
            </div>
            <div>
              <p>© {Year} Oliva Ministries. All rights reserved</p>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer />
    </>
  );
}
