import { persistReducer, persistStore } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { persistConfig } from "./middlewares/persistconfig";
import { rootReducers } from "./Reducers";
import { Apiservices } from "./middlewares/apiServices";

const persistedReducer = persistReducer(persistConfig, rootReducers);

export const Store = configureStore({
  reducer: persistedReducer,
  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(Apiservices.middleware),
});

setupListeners(Store.dispatch);

export const persitor = persistStore(Store);
