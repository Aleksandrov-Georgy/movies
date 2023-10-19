import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  defaultValue: '',
  searchVariants: [],
};

export const searchMovies = createSlice({
  name: 'searchMovies',
  initialState,
  reducers: {
    setDataMovies: (state, action) => {
      state.searchVariants = action.payload;
    },
    setDefaultValue: (state) => {
      state.defaultValue = '';
    },
  },
});

export const { setDataMovies, setDefaultValue } = searchMovies.actions;

export default searchMovies.reducer;
