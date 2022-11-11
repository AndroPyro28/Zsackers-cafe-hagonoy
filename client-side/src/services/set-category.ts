import {privateApi} from "../app/baseApi"
import { createSetCategory, SetCategory } from "../model";

const setCategoryApi = privateApi.injectEndpoints({
    endpoints: builder => ({
        getAllSetCategory: builder.query<SetCategory[],string>({
            query: search => ({
                url: `setcategory`,
                method: "GET"
            }),
            providesTags: (result = [], error, arg) => [{type:'SetCategory', id: arg}, {type:'Subcategory', id: arg}, {type:'Category', id: arg}],
        }),
        createSetCategory: builder.mutation<void, createSetCategory>({
            query: body => ({
                url: `setcategory`,
                method:"POST",
                body
            }),
            invalidatesTags: (result, error, arg) => [{type:"SetCategory"}, {type:'Subcategory'}, {type:'Category'}]
        }),
    }),
    overrideExisting: false
})
export default setCategoryApi;

export const { useCreateSetCategoryMutation, useGetAllSetCategoryQuery } = setCategoryApi