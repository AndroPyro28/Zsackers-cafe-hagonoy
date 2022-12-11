import { privateApi } from "../app/baseApi";
import { CreateOrder, GetOrdersByAdmin, OrderDetails } from "../model";

const orderApi = privateApi.injectEndpoints({
  endpoints: (builder) => ({
    checkoutOrder: builder.mutation<void, CreateOrder>({
      query: (body) => ({
        url: `order/checkout`,
        method: "POST",
        body,
      }),
       invalidatesTags: (result, error, arg) => [{ type: "Order" }],
    }),
    createOrder: builder.mutation<void, CreateOrder>({
      query: (body) => ({
        url: `order/payment`,
        method: "POST",
        body,
      }),
      invalidatesTags: (result, error, arg) => [{ type: "Order" }],
    }),
    getOrdersByAdmin: builder.query<OrderDetails[], GetOrdersByAdmin>({
      query: ({search, order_status}) => ({
        url: `order/admin/?search=${search}&&order_status=${order_status}`,
        method: "GET",
      }),
      providesTags: (result, error, arg) => [{ type: "Order", id:"LIST" }],
    }),

    getOrderByOrderId: builder.query<OrderDetails, string>({
      query: (order_id) => ({
        url: `order/order-id/${order_id}`,
        method: "GET",
      }),
      providesTags: (result, error, arg) => [{ type: "Order", id:"LIST" }],
    }),

    OrderDetailsNextStage: builder.mutation<OrderDetails, {id: number, deliveryStatus: number}>({
      query: ({id , deliveryStatus}) => ({
        url: `order/${id}`,
        method: "PATCH",
        body: {deliveryStatus}
      }),
      invalidatesTags: (result, error, arg) => [{ type: "Order"}],
    }),

  }),
  overrideExisting: false,
});
export default orderApi;

export const {
  useCheckoutOrderMutation,
  useCreateOrderMutation,
  useGetOrdersByAdminQuery,
  useGetOrderByOrderIdQuery,
  useOrderDetailsNextStageMutation
} = orderApi;
