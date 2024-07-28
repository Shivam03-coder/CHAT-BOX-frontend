import { combineReducers } from "@reduxjs/toolkit";
import { Apiservices } from "./middlewares/apiServices";
import { userReducer } from "./state/userState";

export const rootReducers = combineReducers({
  user: userReducer.reducer,
  [Apiservices.reducerPath]: Apiservices.reducer,
});