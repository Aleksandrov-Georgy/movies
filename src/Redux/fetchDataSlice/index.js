import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loadingMovie: false,
  page: 1,
};

export const loadingMovies = createSlice({
  name: 'loadingMovies',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loadingMovie = action.payload;
    },
    setPageFetch: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const { setLoading, setPageFetch } = loadingMovies.actions;

export default loadingMovies.reducer;
