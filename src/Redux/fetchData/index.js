import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://api.kinopoisk.dev',
  prepareHeaders: (headers) => {
    headers.append('X-API-KEY', 'AT06YB5-WFTM0QM-MVFEWVQ-XVTVSMY');
    return headers;
  },
});

export const fetchData = createApi({
  reducerPath: 'fetchData',
  tagTypes: ['movies'],

  baseQuery: baseQuery,

  endpoints: (build) => ({
    getMoviesAll: build.query({
      query: (page) => `/v1.3/movie?limit=20&page=${page}`,
      providesTags: ['movies'],
    }),
    
    
  }),
});

export const { useGetMoviesAllQuery } = fetchData;
