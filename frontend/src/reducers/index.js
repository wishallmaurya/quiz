import { combineReducers } from "redux";
import  enquiryReducer from "./enquiryReducer";


export const rootReducer = combineReducers({
    enquiry: enquiryReducer
})
