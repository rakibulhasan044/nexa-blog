// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5001" }),
  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: () => '/blogs',
    }),
  }),
})


export const { useGetBlogsQuery } = baseApi