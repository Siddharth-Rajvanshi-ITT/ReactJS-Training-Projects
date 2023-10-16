import { createSlice } from "@reduxjs/toolkit";
import { authType } from "../Types/authType";

const initialState: authType = {
  user: null,
  isAuthenticated: false,
  rememberUser: localStorage.getItem("username") ? true : false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    rememberUser: (state) => {
      state.rememberUser = true;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { actions, reducer } = authSlice;
