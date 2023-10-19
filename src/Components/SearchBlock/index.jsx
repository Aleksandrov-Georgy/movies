import React from 'react';
import { useLazyGetSearchMovieQuery } from '../../Redux/fetchData';

import debounce from 'lodash.debounce';
import CloseIcon from '@mui/icons-material/Close';
import { Box, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setDataMovies } from '../../Redux/searchData';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const [search, setSearch] = React.useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [fetchDataMovies, { data: Movie }, isError] = useLazyGetSearchMovieQuery();

  if (Movie) {
    dispatch(setDataMovies(Movie));
  }

  const getMoviesDebounce = React.useCallback(
    debounce((e) => {
      fetchDataMovies(e);
      navigate('/search');
    }, 500),
    [],
  );

  const onChangeInput = (e) => {
    setSearch(e);
    getMoviesDebounce(e);
  };

  return (
    <Box sx={{ width: '100%', color: 'indigo50', display: 'flex', alignItems: 'center' }}>
      <TextField
        label={isError ? 'поиск фильмов и сериалов' : 'Произошла ошибка, попробуйте еще раз!'}
        variant="standard"
        autoComplete="off"
        fullWidth
        value={search}
        onChange={(e) => onChangeInput(e.target.value)}
      />
      {search && <CloseIcon onClick={() => setSearch('')} />}
    </Box>
  );
};

export default Search;
