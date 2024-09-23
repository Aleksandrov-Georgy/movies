import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loadingMovie: '',
  page: 1,
  selectedMovieId: '',
  moviesNewList: [],
  searchMovies: [],
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
    setMoviesNewList: (state, action) => {
      state.loadingMovie = action.payload.status;
      state.moviesNewList = action.payload;
    },
    setSearchMovies: (state, action) => {
      state.searchMovies = action.payload;
    },
  },
});

export const { setLoading, setPageFetch, setMoviesID, setMoviesNewList, setSearchMovies } =
  loadingMovies.actions;

export default loadingMovies.reducer;
