// import axios from "axios";
// import { BASE_URL } from "../../constant";
// // const apiURL = process.env.REACT_APP_API_URL;

// export const isAuthenticate = () =>
//   localStorage.getItem("jwt") ? JSON.parse(localStorage.getItem("jwt")) : false;

// export const isAdmin = () =>
//   localStorage.getItem("jwt")
//     ? JSON.parse(localStorage.getItem("jwt")).user.role === "admin"
//     : false;
  
// export const loginReq = async ({ username, password }) => {
//   console.log(username,password,"FROM Auth")
//   const data = { username, password };
//   try {
//     let res = await axios.post(`${BASE_URL}/signin`, data);
//     return res.data;
//   } catch (error) {
//     console.log(error);
//   }
// };

