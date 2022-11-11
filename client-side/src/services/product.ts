import {privateApi} from "../app/baseApi"
import { CreateProduct } from "../model/Product";

const productApi = privateApi.injectEndpoints({
    endpoints: builder => ({
        getAllProduct: builder.query<any[],string>({
            query: search => ({
                url: `product?search=${search}`,
                method: "GET"
            }),
            providesTags: (result = [], error, arg) => [{type:'Product', id: arg}],
        }),
        createProduct: builder.mutation<void, CreateProduct>({
            query: body => ({
                url: `product`,
                method:"POST",
                body
            }),
            invalidatesTags: (result, error, arg) => [{type:"Product"}]
        }),
    }),
    overrideExisting: false
})
export default productApi;

export const { useCreateProductMutation, useGetAllProductQuery } = productApi