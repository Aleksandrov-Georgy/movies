import { configureStore } from '@reduxjs/toolkit';
import { fetchData } from './fetchData';
import loadingMovies from './fetchDataSlice';
import searchMovies from './searchData';

export const store = configureStore({
  reducer: {
    [fetchData.reducerPath]: fetchData.reducer,
    loadingMovies: loadingMovies,
    searchMovies: searchMovies,
  },
  middleware: (getDefault) => getDefault().concat(fetchData.middleware),
});
