import { configureStore } from '@reduxjs/toolkit';
import { fetchData } from './fetchData';
import loadingMovies from './fetchDataSlice';

export const store = configureStore({
  reducer: {
    [fetchData.reducerPath]: fetchData.reducer,
    loadingMovies: loadingMovies,
  },
  middleware: (getDefault) => getDefault().concat(fetchData.middleware),
});
