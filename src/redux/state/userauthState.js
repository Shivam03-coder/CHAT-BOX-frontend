import { createSlice } from "@reduxjs/toolkit";
import Cookie from "js-cookie";

const initialState = {
  UserRegisterd: localStorage.getItem("userInfo") ? true : false,
  isUserAuthenticated: Cookie.get("isUserAuthenticated")
    ? Cookie.get("isUserAuthenticated")
    : null,
};

export const userReducer = createSlice({
  name: "userstate",
  initialState,
  reducers: {
    setUsercredentials: (state, action) => {
      state.UserRegisterd = action.payload;
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
      state.UserRegisterd = false;
      localStorage.removeItem("userInfo");
    },
  },
});

export const { clearUsercredentials, setUsercredentials } = userReducer.actions;
