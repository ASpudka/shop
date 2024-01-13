import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const productsApi = createApi({
  reducerPath:'products',
  baseQuery: fetchBaseQuery({
    baseUrl:'https://fakestoreapi.com/products'
  }) ,
  tagTypes:['products','categories'],
  endpoints: builder =>({
    getProducts:builder.query({
      query:(value)=>({
        url: value? `/category/${value}`: '/',
        method: 'GET'
      }),
      providesTags: ['products']
    }),
 getCategories:builder.query({
      query:()=>({
        url: '/categories',
        method: 'GET'
      }),
      providesTags: ['categories']

  }),
// getCategoryProducts:builder.query({
// query:(value)=>({
//   url:`/category/${value}`,
//   metod:'GET'
// }),
// providesTags: ['products']
// })

   })
});

export const {useGetProductsQuery, useGetCategoriesQuery, } = productsApi