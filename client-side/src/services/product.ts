import {privateApi} from "../app/baseApi"
import { CreateProduct, Product, Search } from "../model/product";

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
    }),
    overrideExisting: false
})
export default productApi;

export const { useCreateProductMutation, useGetAllProductQuery } = productApi