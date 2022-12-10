import {fetchBaseQuery, createApi} from "@reduxjs/toolkit/query/react"
import Cookies from "js-cookie";

export const publicApi = createApi({
    reducerPath: `publicApi`,
    baseQuery: fetchBaseQuery({
      baseUrl:/* process.env.REACT_APP_DEV_URL */ 'http://localhost:3001/api/',
    }),
    endpoints: () => ({}),
    tagTypes: ["Signup", "Signin"],
  });

  export const privateApi = createApi({
    reducerPath: `privateApi`,
    baseQuery: fetchBaseQuery({
      baseUrl:/* process.env.REACT_APP_DEV_URL */ 'http://localhost:3001/api/',
      prepareHeaders: (headers) => {
        headers.set("Authorization", `Bearer ${Cookies.get("access_token")}`);
        return headers;
      },
    }),
    endpoints: () => ({}),
    tagTypes: ['Category', 'Subcategory', 'Product', 'SetCategory', 'User', 'Cart-Product', 'Staff'],
  });