import { privateApi, publicApi } from "./baseApi";
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/userSlice";
 const store = configureStore({
  reducer: {
    [publicApi.reducerPath]: publicApi.reducer,
    [privateApi.reducerPath]: privateApi.reducer,
    user: userSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(publicApi.middleware, privateApi.middleware),
   
});

export default store