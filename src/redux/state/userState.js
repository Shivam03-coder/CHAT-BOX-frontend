import { createSlice } from "@reduxjs/toolkit";
import Cookie from "js-cookie";

const initialState = {
  Registerd_User_info: localStorage.getItem("userInfo") ? true : null,
  isUserAuthenticated: Cookie.get("isUserAuthentucated")
    ? Cookie.get("isUserAuthentucated")
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
      Cookie.set("isUserAuthentucated", action.payload);
    },

    clearIsUserAuthenticated: (state, action) => {
      state.isUserAuthenticated = null;
      Cookie.remove("isUserAuthentucated");
    },

    clearUsercredentials: (state, action) => {
      state.Registerd_User_info = null;
      localStorage.removeItem("userInfo");
    },
  },
});

export const { clearUsercredentials, setUsercredentials } = userReducer.actions;
