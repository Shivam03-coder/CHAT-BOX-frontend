import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userdata: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
  userAvatarprops: {
    backgroundColor: "#ffff00",
  },
};

export const userprofileState = createSlice({
  name: "userprofileinfo",
  initialState,
  reducers: {
    setUserdata: (state, action) => {
      state.userdata.fullname = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(state.userdata));
    },
    setUserAvatarprops: (state, action) => {
      state.userAvatarprops.backgroundColor = action.payload;
    },
  },
});

export const { setUserdata, setUserAvatarprops } = userprofileState.actions;
