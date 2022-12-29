import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  reducerPath: "adminApi",
  tagTypes: ["User","Products"],
  endpoints: (build) => ({
    getUser: build.query({
      query: (id) => `general/user/${id}`,
      providesTags: ["User"],
    }),
    getProducts:build.query({
      query:() => "clients/products",
      providesTags:["Products"]
    }),
    getCustomers:build.query({
      query:() => "clients/customers",
      providesTags:["Customers"]
    })
  }),
});

export const { useGetUserQuery, useGetProductsQuery, useGetCustomersQuery } = api;
