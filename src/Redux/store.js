import { configureStore } from '@reduxjs/toolkit';
import { fetchData } from './fetchData';

export const store = configureStore({
  reducer: {
    [fetchData.reducerPath]: fetchData.reducer,
  },
  middleware: (getDefault) => getDefault().concat(fetchData.middleware),
});
