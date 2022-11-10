import {privateApi} from "../app/baseApi"
import { CreateSubcategory, Subcategory } from "../model";

const subCategoryApi = privateApi.injectEndpoints({
    endpoints: builder => ({
        getAllSubcategory: builder.query<Subcategory[],string>({
            query: search => ({
                url: `subcategory`,
                method: "GET"
            }),
            providesTags: (result = [], error, arg) => [{type:'Subcategory', id: arg}, {type:'Category', id: arg}],
        }),
        createSubcategory: builder.mutation<void, CreateSubcategory>({
            query: body => ({
                url: `subcategory`,
                method:"POST",
                body
            }),
            invalidatesTags: (result, error, arg) => [{type:"Subcategory"}, {type:'Category'}]
        }),
    }),
    overrideExisting: false
})
export default subCategoryApi;

export const { useCreateSubcategoryMutation, useGetAllSubcategoryQuery } = subCategoryApi