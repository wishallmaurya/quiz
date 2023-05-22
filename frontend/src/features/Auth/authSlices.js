import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "./authAPI";

const initialState = {
  error: null,
  loading: false,
  data: {},
  token: null,
  role:null,
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOutUser: (state) => {
      localStorage.clear();
      return { ...state, ...initialState };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      return {
        ...state,
        data: {},
        isAuthenticated: false,
        token: null,
        role:null,
        loading: false,
        error: action.payload,
      };
    });
    builder.addCase(loginUser.fulfilled, (state, { payload }) => {
      console.log('ACCESS TOKEN',payload.data?.accessToken)
      localStorage.setItem("token", payload.data?.accessToken);
      localStorage.setItem("role", JSON.stringify(payload.data?.user?.role));
      localStorage.setItem("user", JSON.stringify(payload.data));
      localStorage.setItem("permissions", JSON.stringify([]));
      return {
        ...state,
        error: null,
        isAuthenticated: true,
        loading: false,
        token: payload.data?.accessToken,
        role:JSON.stringify(payload.data?.user?.role),
        data: payload.data,
      };
    });
  },
});

export const { logOutUser } = authSlice.actions;

export const selectAuth = (state) => state.auth;

export default authSlice.reducer;
