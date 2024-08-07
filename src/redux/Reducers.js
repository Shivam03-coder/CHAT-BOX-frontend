import { combineReducers } from "@reduxjs/toolkit";
import { Apiservices } from "./middlewares/apiServices";
import { userauthSlice } from "./state/userauthState";
import { userprofileSlice } from "./state/userprofileState";
import { socketSlice } from "./state/socketState";
import { chatSlice } from "./state/chatState";

export const rootReducers = combineReducers({
  user: userauthSlice.reducer,
  userinfo: userprofileSlice.reducer,
  socket: socketSlice.reducer,
  chats: chatSlice.reducer,
  [Apiservices.reducerPath]: Apiservices.reducer,
});
