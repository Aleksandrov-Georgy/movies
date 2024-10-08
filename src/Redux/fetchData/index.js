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
      query: (page) => `/v1.4/movie?limit=32&page=${page}`,
      providesTags: ['movies'],
    }),
    getMoviesId: build.query({
      query: (id) => `/v1.4/movie/${id}`,
      providesTags: ['movies'],
    }),
    getSearchMovie: build.query({
      query: (search) => `v1.4/movie/search?page=1&limit=32&query=${search}`,
      providesTags: ['movies'],
    }),
  }),
});

export const { useGetMoviesAllQuery, useGetMoviesIdQuery, useLazyGetSearchMovieQuery, useLazyGetMoviesAllQuery } = fetchData;
