import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loadingMovie: false,
  page: 1,
  selectedMovieId: '',
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
    setMoviesID: (state, action) => {
      state.selectedMovieId = action.payload;
    },
  },
});

export const { setLoading, setPageFetch, setMoviesID } = loadingMovies.actions;

export default loadingMovies.reducer;
