import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedChat: null,
};

export const chatSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {
    setSelelctedChat: (state, action) => {
      state.selectedChat = action.payload;
    },
    removeSelectedChat: (state) => {
      state.selectedChat = null;
    },
  },
});

export const { setSelelctedChat, removeSelectedChat } = chatSlice.actions;
