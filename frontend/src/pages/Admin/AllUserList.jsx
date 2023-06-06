import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../utils/axiosSetup";
import { useEffect } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";

export default function AllUserList() {
  const navigate = useNavigate();
  let token = JSON.parse(localStorage.getItem("token"));
  const [userList, setUserList] = useState();
  const [id, setId] = useState();
  const config = {
    headers: {
      Authorization: token,
    },
  };

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    console.log("called");

    const res = await axiosInstance.get("/user/all", config);
    if (res.data.success) {
      setUserList(res.data.data);
    }
  };

  const deleteUser = async (id) => {
    console.log(id, "delete click============");
    const res = await axiosInstance.delete(`/user/${id}`, config);
    if (res.data.success) {
      toast.success("User Deleted Successfully");
      getUser();
    }
  };
  const deleteConformation = (id) => {
    let answer = window.confirm("Sure want to delete?");
    if (answer) {
      deleteUser(id);
    } else {
    }
  };
  const handleNavigateForm = (id) => {
    navigate(`/SingleUser/${id}`);
  };
  return (
    <>
    <div className="text-center font-bold text-[2rem]">List  of the user</div>
      <div className>
        <div className="mt-4 mx-4">
          <div className="w-full overflow-hidden rounded-lg shadow-xs">
            <div className="w-full overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-xs font-semibold tracking-wide text-left text-white uppercase border-b  bg-[#152C4F]">
                    <th className="px-4 py-3">Users</th>
                    <th className="px-4 py-3">Email</th>
                    <th className="px-4 py-3">Joined</th>
                    <th className="px-4 py-3">Refer Count</th>
                    <th className="px-4 py-3">Subscription</th>
                    <th className="px-4 py-3">Delete</th>
                    <th className="px-4 py-3">View</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                  {userList?.map((item) => (
                    <tr className="bg-[#152C4F]  hover:bg-blue-100  text-white hover:text-black ">
                      <td className="px-4 py-3">
                        <div className="flex items-center text-sm">
                          <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                            <img
                              className="object-cover w-full h-full rounded-full"
                              src={item.profilePhoto}
                              alt=""
                              loading="lazy"
                            />
                            <div
                              className="absolute inset-0 rounded-full shadow-inner"
                              aria-hidden="true"
                            />
                          </div>
                          <div>
                            <p className="font-semibold">{item.username} </p>
                            <p className="text-xs text-gray-600 dark:text-gray-400">
                              {item.referralCode}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm">{item.email}</td>
                      <td className="">
                        <span className="px-4 py-3  ">
                          {item?.createdAt.split("T")[0]}
                        </span>
                      </td>
                      <td className>
                        <span className="px-4 py-3  ">
                          {item?.rewards?.length}
                        </span>
                      </td>
                      <td className>
                        <span className="px-4 py-3  ">Yes</span>
                      </td>
                      <td className>

                          <button
                            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                            onClick={(e) => {
                              deleteConformation(item._id);
                            }}
                          >
                            Delete
                          </button>

                      </td>
                      <td className>
                          <button
                            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-red-900"
                            onClick={(e) => {
                              handleNavigateForm(item._id);
                            }}
                          >
                            More details
                          </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800">
              <span className="flex items-center col-span-3">
                Showing {userList?.length} users
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
