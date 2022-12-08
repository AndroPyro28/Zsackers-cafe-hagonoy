import { privateApi } from "../app/baseApi";
import { CreateOrder } from "../model";

const orderApi = privateApi.injectEndpoints({
  endpoints: (builder) => ({
    checkoutOrder: builder.mutation<void, CreateOrder>({
      query: (body) => ({
        url: `order/checkout`,
        method: "POST",
        body,
      }),
    //   invalidatesTags: (result, error, arg) => [{ type: "Category" }],
    }),
    createOrder: builder.mutation<void, CreateOrder>({
      query: (body) => ({
        url: `order/payment`,
        method: "POST",
        body,
      }),
    })
    
  }),
  overrideExisting: false,
});
export default orderApi;

export const {
  useCheckoutOrderMutation,
  useCreateOrderMutation
} = orderApi;
