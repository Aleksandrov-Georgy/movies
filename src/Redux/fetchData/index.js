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
      query: (page) => `/v1.3/movie?limit=16&page=${page}`,
      providesTags: ['movies'],
    }),
    getMoviesId: build.query({
      query: (id) => `/v1.3/movie/${id}`,
      providesTags: ['movies'],
    }),
    getSearchMovie: build.query({
      query: (search) => `v1.2/movie/search?page=1&limit=10&query=${search}`,
      providesTags: ['movies'],
    }),
    getMoviesScroll: build.query({
      query: (page) => `/v1.3/movie?limit=12&page=${page}`,
      providesTags: ['movies'],
    }),
  }),

});

export const { useGetMoviesAllQuery, useGetMoviesIdQuery, useLazyGetSearchMovieQuery, useLazyGetMoviesScrollQuery } = fetchData;
