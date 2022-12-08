import { privateApi } from "../app/baseApi";
import { CreateOrder } from "../model";

const orderApi = privateApi.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation<void, CreateOrder>({
      query: (body) => ({
        url: `order/checkout`,
        method: "POST",
        body,
      }),
    //   invalidatesTags: (result, error, arg) => [{ type: "Category" }],
    }),
    
  }),
  overrideExisting: false,
});
export default orderApi;

export const {
  useCreateOrderMutation,
} = orderApi;
