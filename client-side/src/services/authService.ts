import {publicApi} from "./baseApi"

const authApi = publicApi.injectEndpoints({
    endpoints: builder => ({
        signup: builder.mutation<void, object>({
            query: body => ({
                url: `auth/signup`,
                method:"POST",
                body
            }),
            invalidatesTags: ['Signup']
        }),
        signin: builder.mutation<void, object>({
            query: body => ({
                url: `auth/signin`,
                method:"POST",
                body
            }),
            invalidatesTags: ['Signin']
        }),
    }),
    overrideExisting: false
})
export default authApi;

export const { useSigninMutation, useSignupMutation } = authApi