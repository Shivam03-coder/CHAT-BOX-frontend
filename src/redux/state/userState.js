import { createSlice } from "@reduxjs/toolkit";
import Cookie from "js-cookie";

const initialState = {
  Registerd_User_info: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
  isUserAuthenticated: Cookie.get("isUserAuthenticated")
    ? Cookie.get("isUserAuthenticated")
    : null,
};

export const userReducer = createSlice({
  name: "userstate",
  initialState,
  reducers: {
    setUsercredentials: (state, action) => {
      state.Registerd_User_info = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
    },

    setIsUserAuthenticated: (state, action) => {
      state.isUserAuthenticated = action.payload;
      Cookie.set("isUserAuthenticated", action.payload);
    },

    clearIsUserAuthenticated: (state, action) => {
      state.isUserAuthenticated = null;
      Cookie.remove("isUserAuthenticated");
    },

    clearUsercredentials: (state, action) => {
      state.Registerd_User_info = null;
      localStorage.removeItem("userInfo");
    },
  },
});

export const { clearUsercredentials, setUsercredentials } = userReducer.actions;
