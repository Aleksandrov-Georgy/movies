import React from 'react';
import { useLazyGetSearchMovieQuery } from '../../Redux/fetchData';

import debounce from 'lodash.debounce';
import CloseIcon from '@mui/icons-material/Close';
import { Box, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSearchMovies } from '../../Redux/fetchDataSlice';

const Search = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [search, setSearch] = React.useState('');

  const [fetchDataMovies, { data: Movie }, isError] = useLazyGetSearchMovieQuery(search);

  if (Movie) {
    dispatch(setSearchMovies(Movie));
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

  const onClickClose = () => {
    setSearch('');
    dispatch(setSearchMovies([]));

    
    navigate('/');
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
      {search && <CloseIcon onClick={onClickClose} />}
    </Box>
  );
};

export default Search;
