import { privateApi } from "../app/baseApi";
import { User } from "../model";
import { updateStaff } from "../model/Staff";

const staffApi = privateApi.injectEndpoints({
    endpoints: builder => ({
        getStaffs: builder.query<User [], void>({
            query: (search) => ({
                url: `staff`,
                method:"GET",
            }),
            providesTags: (result, error, arg) => [{type: 'Staff', id: "query"}],
        }),
        updateStaff: builder.mutation<void, updateStaff>({
            query: ({id, status}) => ({
                url: `staff/${id}`,
                method:"PATCH",
                body: {
                    status
                }
            }),
            invalidatesTags: (result, error, arg) => [{type: 'Staff'}],
        }),
        deleteStaff: builder.mutation<void, number>({
            query: id => ({
                url: `staff/${id}`,
                method:"DELETE",
            }),
            invalidatesTags: (result, error, arg) => [{type: 'Staff'}],
        }),

    }),
    overrideExisting: false
})
export default staffApi;



export const { useGetStaffsQuery, useUpdateStaffMutation, useDeleteStaffMutation} = staffApi