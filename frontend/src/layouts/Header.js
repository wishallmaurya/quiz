import React, { useEffect, useState } from "react";
import { MdPadding } from "react-icons/md";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import User from "../assets/images/user.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function Header(props) {
  const {
    show,
    setShow,
    sideBar,
    setSideBar,
    profile,
    setProfile,
    responsive,
  } = props;
  let x=window.location.pathname
  if(x){
    x=x.split('/')[1]
  }
  // const [user, setUser] = useState();
  const [visible, setVisible] = useState(false);
  let navigate = useNavigate({});
  let data = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("user"));
    console.log(data);
    data ? setVisible(true) : setVisible(false);
    console.log(visible);
  }, []);

  const logout = async () => {
    console.log("logoutClick----------  -----");
    let clear = await localStorage.clear();
    navigate("/signIn");
  };
  console.log(window.location.pathname);
  return (
    <nav className="h-20 flex items-center lg:items-stretch justify-end lg:justify-between bg-white shadow relative z-0">
      <div className="hidden lg:flex w-full pr-6">
        <div className=" w-1/2 h-full hidden lg:flex items-center pl-3 pr-24">
          <img
            src={Logo}
            alt="logo"
            height={"80px"}
            width={"80px"}
            className="p-2 ml-5 cursor-pointer"
            onClick={() => navigate("/")}
          ></img>
        </div>
        <div className="w-1/2 hidden lg:flex">
          <div className="w-full flex items-center pl-10 justify-end">
            {x ? (
              <button onClick={() => navigate("/")} className="m-4">
              How it works
            </button>
            ) : (
              <AnchorLink href="#howItsWork" className="m-4 cursor-pointer">
              <button>How it works</button>
            </AnchorLink>
            )}
            {x ? (
              <button onClick={() => navigate("/")} className="m-4">
              Pricing
            </button>
            ) : (
              <AnchorLink href="#pricing" className="m-4 cursor-pointer">
              <button>Pricing</button>
            </AnchorLink>
            )}
            {x ? (
              <button onClick={() => navigate("/")} className="m-4">
             About Us
            </button>
            ) : (
              <AnchorLink href="#aboutUs" className="m-4 cursor-pointer">
              <button>About Us</button>
            </AnchorLink>
            )}

  

            <div
              className="flex items-center relative cursor-pointer w-48"
              onClick={() => setProfile(!profile)}
            >
              {visible || (
                <div className="m-2">
                  <button
                    class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    onClick={() => navigate("/signIn")}
                  >
                    Login
                  </button>
                </div>
              )}
              {visible || (
                <div className="m-2">
                  <button
                    class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    onClick={() => navigate("/signUp")}
                  >
                    Register
                  </button>
                </div>
              )}
              {/* <p className="text-gray-800 text-sm mx-3">{user?.firstName} <br></br>
                          <span className="text-xs text-gray-400">{user?.lastName}</span> */}

              {visible && (
                <p className=" flex items-center text-gray-800 text-sm mx-3 ">
                  {/* <img className="p-2 " src={data?.profilePhoto} alt="userImg" /> */}
                  <div className="relative">
                    <img
                      className="rounded-full h-8 w-8 object-cover"
                      src={data?.profilePhoto}
                      alt="avatar"
                    />
                    <div className="w-2 h-2 rounded-full bg-green-300 border border-white absolute inset-0 mb-0 mr-0 m-auto" />
                  </div>
                  <span>{data?.username}</span>
                </p>
              )}

              <div className="top-8 absolute bg-white z-1">
                {profile ? (
                  // <button onClick={(e)=>{logout(e)}}>My Profile</button>

                  <ul className="py-1 m-2">
                    <li className="">
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm5.03 4.72a.75.75 0 010 1.06l-1.72 1.72h10.94a.75.75 0 010 1.5H10.81l1.72 1.72a.75.75 0 11-1.06 1.06l-3-3a.75.75 0 010-1.06l3-3a.75.75 0 011.06 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-sm ml-2" onClick={logout}>
                          Sign Out
                        </span>
                      </div>
                    </li>

                    <li className="">
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-user"
                          width={18}
                          height={18}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <circle cx={12} cy={7} r={4} />
                          <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                        </svg>
                        <span
                          className="text-sm ml-2"
                          onClick={() => navigate("/profile")}
                        >
                          My Profile
                        </span>
                      </div>
                    </li>

                    {/* <li className="flex w-full justify-between text-gray-600 hover:text-indigo-700 cursor-pointer items-center">
                      <div
                        className="flex items-center"
                        onClick={() => navigate("/profile")}
                      >
                      </div>
                    </li> */}
                    <li
                    // className="flex w-full justify-between text-gray-600 hover:text-indigo-700 cursor-pointer items-center mt-2"
                    >
                      {/* <div 
                      className="flex items-center"
                      > 
                      
                      
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-6 h-6"
                          
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm5.03 4.72a.75.75 0 010 1.06l-1.72 1.72h10.94a.75.75 0 010 1.5H10.81l1.72 1.72a.75.75 0 11-1.06 1.06l-3-3a.75.75 0 010-1.06l3-3a.75.75 0 011.06 0z"
                            clipRule="evenodd"
                          />
                        </svg>

                        <span className="cursor-pointer" onClick={logout} >Sign out</span>
                      </div> */}
                    </li>
                  </ul>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="text-gray-600 mr-3 visible lg:hidden relative"
        onClick={() => setShow(true)}
      >
        {!show && (
          <svg
            aria-label="Main Menu"
            aria-haspopup="true"
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-menu cursor-pointer"
            width={30}
            height={30}
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <line x1={4} y1={8} x2={20} y2={8} />
            <line x1={4} y1={16} x2={20} y2={16} />
          </svg>
        )}
      </div>
    </nav>
  );
}
