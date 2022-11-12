import {privateApi} from "../app/baseApi"
import { CreateProduct, Product, Search, UpdateProduct } from "../model/product";

const productApi = privateApi.injectEndpoints({
    endpoints: builder => ({
        getAllProduct: builder.query<Product[], Search>({
            query: ({searchName, categoryId, subcategoryId, setcategoryId}) => ({
                url: `products?name=${searchName}&&categoryId=${categoryId}&&subcategoryId=${subcategoryId}&&setcategoryId=${setcategoryId}`,
                method: "GET"
            }),
            providesTags: (result = [], error, arg) => [{type:'Product', id: arg.searchName}],
        }),
        createProduct: builder.mutation<void, CreateProduct>({
            query: body => ({
                url: `products`,
                method:"POST",
                body
            }),
            invalidatesTags: (result, error, arg) => [{type:"Product"}]
        }),
        updateProduct: builder.mutation<void, UpdateProduct>({
            query: ({id, ...rest}) => ({
                url: `products/${id}`,
                method:"PATCH",
                body: {...rest}
            }),
            invalidatesTags: (result, error, arg) => [{type:"Product"}]
        }),
        archiveProduct: builder.mutation<void, number>({
            query: id => ({
                url: `products/${id}`,
                method:"PUT",
            }),
            invalidatesTags: (result, error, arg) => [{type:"Product"}]
        }),
    }),
    overrideExisting: false
})
export default productApi;

export const { useCreateProductMutation, useGetAllProductQuery, useArchiveProductMutation, useUpdateProductMutation } = productApi