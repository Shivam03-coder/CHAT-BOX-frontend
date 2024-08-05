import { combineReducers } from "@reduxjs/toolkit";
import { Apiservices } from "./middlewares/apiServices";
import { userReducer } from "./state/userauthState";
import { userprofileState } from "./state/userprofileState";

export const rootReducers = combineReducers({
  user: userReducer.reducer,
  userinfo: userprofileState.reducer,
  [Apiservices.reducerPath]: Apiservices.reducer,
});
