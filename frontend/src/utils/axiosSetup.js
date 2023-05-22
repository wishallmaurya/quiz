import axios from "axios";
import {BASE_URL} from "../constant";

// export const BASE_URL = "http://50.17.107.208:3004/v1";

const userToken = localStorage.getItem("token");
const userRole =localStorage.getItem("user")
console.log('AXIOS TOKEN',userToken)
console.log('ROLE',JSON.parse(userRole))

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: !!userToken ? { Authorization: `Bearer ${userToken}` } : null,
});
