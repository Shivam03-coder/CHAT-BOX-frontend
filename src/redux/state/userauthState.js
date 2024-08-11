import { createSlice } from "@reduxjs/toolkit";
import Cookie from "js-cookie";

const initialState = {
  UserRegisterd: localStorage.getItem("userInfo") ? true : false,
  isUserAuthenticated: Cookie.get("isUserAuthenticated")
    ? JSON.parse(Cookie.get("isUserAuthenticated"))
    : false,
};

export const userauthSlice = createSlice({
  name: "userstate",
  initialState,
  reducers: {
    setUsercredentials: (state, action) => {
      state.UserRegisterd = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
    },

    setIsUserAuthenticated: (state, action) => {
      state.isUserAuthenticated = action.payload;
      Cookie.set("isUserAuthenticated", JSON.stringify(action.payload));
    },

    clearIsUserAuthenticated: (state) => {
      state.isUserAuthenticated = false;
      Cookie.remove("isUserAuthenticated");
    },

    clearUsercredentials: (state) => {
      state.UserRegisterd = false;
      localStorage.removeItem("userInfo");
    },
  },
});

export const {
  clearUsercredentials,
  setUsercredentials,
  setIsUserAuthenticated,
  clearIsUserAuthenticated,
} = userauthSlice.actions;

export default userauthSlice.reducer;
