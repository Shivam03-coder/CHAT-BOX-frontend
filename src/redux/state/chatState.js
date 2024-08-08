import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedChatType: undefined,
  selectedChatData: undefined,
  selectedChatMessages: [],
};

export const chatSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {
    setSelectedChatData: (state, action) => {
      state.selectedChatData = action.payload;
    },
    closeSelectedChat: (state) => {
      state.selectedChatData = null;
      state.selectedChatType = undefined;
      state.selectedChatMessages = [];
    },
    setSelectedChatType: (state, action) => {
      state.selectedChatType = action.payload;
    },
    setSelectedChatMessages: (state, action) => {
      state.selectedChatMessages = action.payload;
    },
    addMessageToSelectedChat: (state, action) => {
      state.selectedChatMessages.push(action.payload);
    },
    clearSelectedChatMessages: (state) => {
      state.selectedChatMessages = [];
    },
  },
});

export const {
  setSelectedChatData,
  setSelectedChatType,
  closeSelectedChat,
  setSelectedChatMessages,
  addMessageToSelectedChat,
  clearSelectedChatMessages,
} = chatSlice.actions;

export default chatSlice.reducer;
