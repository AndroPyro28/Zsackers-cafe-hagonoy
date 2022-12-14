import { privateApi } from "../app/baseApi";
import { CreateOrder, CreateOrderWalkin, GetOrdersByAdmin, OrderDetails } from "../model";

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
    createOrderOnline: builder.mutation<void, CreateOrder>({
      query: (body) => ({
        url: `order/payment`,
        method: "POST",
        body,
      }),
      invalidatesTags: (result, error, arg) => [{ type: "Order" }],
    }),
    createOrderWalkin: builder.mutation<void, CreateOrderWalkin>({
      query: (body) => ({
        url: `order/pos`,
        method: "POST",
        body,
      }),
      invalidatesTags: (result, error, arg) => [{ type: "Order" }, {type: 'Cart-Product'}],
    }),
    getOrdersByAdmin: builder.query<OrderDetails[], GetOrdersByAdmin>({
      query: ({search, order_status}) => ({
        url: `order/admin/?search=${search}&&order_status=${order_status}`,
        method: "GET",
      }),
      providesTags: (result: any, error, arg) => [
        { type: "Order", id:"LIST" },
        ...result?.map(({id}: any) => ({id, type: 'Order' })),
    ],
    }),

    getOrdersByCustomer: builder.query<OrderDetails[], string>({
      query: (status) => ({
        url: `order/customer/?status=${status}`,
        method: "GET",
      }),
      providesTags: (result: any, error, arg) => [
        { type: "Order", id:"LIST" },
        ...result?.map(({id}: any) => ({id, type: 'Order' })),
    ],
    }),

    getOrderByOrderId: builder.query<OrderDetails, string>({
      query: (order_id) => ({
        url: `order/order-id/${order_id}`,
        method: "GET",
      }),
      providesTags: (result, error, arg) => [{ type: "Order", id:arg }],
    }),

    OrderDetailsNextStage: builder.mutation<OrderDetails, {id: number, deliveryStatus: number}>({
      query: ({id , deliveryStatus}) => ({
        url: `order/${id}`,
        method: "PATCH",
        body: {deliveryStatus}
      }),
      invalidatesTags: (result, error, arg) => [{ type: "Order"}],
    }),

    cancelOrder: builder.mutation<OrderDetails, {id: number, reason: string}>({
      query: ({id, reason}) => ({
        url: `order/cancel/${id}`,
        method: "PATCH",
        body: {reason}
      }),
      invalidatesTags: (result, error, arg) => [{ type: "Order"}],
    }),

  }),
  overrideExisting: false,
});
export default orderApi;

export const {
  useCheckoutOrderMutation,
  useCreateOrderOnlineMutation,
  useGetOrdersByAdminQuery,
  useGetOrderByOrderIdQuery,
  useOrderDetailsNextStageMutation,
  useGetOrdersByCustomerQuery,
  useCancelOrderMutation,
  useCreateOrderWalkinMutation
} = orderApi;
