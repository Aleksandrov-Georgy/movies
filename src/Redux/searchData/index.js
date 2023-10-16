import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchVariants: [],
};

export const searchMovies = createSlice({
  name: 'searchMovies',
  initialState,
  reducers: {
    setDataMovies: (state, action) => {
      state.searchVariants = action.payload;
    },
  },
});

export const { setDataMovies } = searchMovies.actions;

export default searchMovies.reducer;
