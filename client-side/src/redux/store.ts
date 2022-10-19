import { privateApi, publicApi } from "../services/baseApi";
import { configureStore } from "@reduxjs/toolkit";
 const store = configureStore({
  reducer: {
    [publicApi.reducerPath]: publicApi.reducer,
    [privateApi.reducerPath]: privateApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
    }).concat(publicApi.middleware),
});

export default store