import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'
// import toast from 'react-hot-toast';
// import Api from '../../api/Api';
// import * as Endpoints from '../../api/api-endpoints';

const initialState = {
    loading: false,
    enquiries: [],
    enquiryError: null,
};

export const getEnquiry = async() => {
    try{
        const response = axios.get("http://localhost:3001/api/v1/enquiry/all")
        console.log("response --" , response)
        return response
    }catch(error){
        console.log(error)
    }
};

const EnquirySlice = createSlice({
    name: 'Enquiry',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        // // Get enquiry
        // builder.addCase(getEnquiry.fulfilled, (state, action) => {
        //     const { data } = action.payload;
        //     state.loading = false;
        //     state.enquiries = data;
        // });
        // builder.addCase(getEnquiry.pending, (state) => {
        //     state.loading = true;
        // });
        // builder.addCase(getEnquiry.rejected, (state, action) => {
        //     state.loading = false;
        //     state.enquiryError = action.payload;
        // });
    },
});

export default EnquirySlice.reducer;
