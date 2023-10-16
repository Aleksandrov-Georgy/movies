import React from 'react';
import { useLazyGetSearchMovieQuery } from '../../Redux/fetchData';

import debounce from 'lodash.debounce';
import CloseIcon from '@mui/icons-material/Close';
import { Box, TextField } from '@mui/material';

const Search = () => {
  const [search, setSearch] = React.useState('');

  const [fetchDataMovies, { data: Movie }, isError] = useLazyGetSearchMovieQuery();

  console.log('Movie', Movie);
  const getMoviesDebounce = React.useCallback(
    debounce((e) => {
      fetchDataMovies(e);
    }, 500),
    [],
  );

  const onClickClear = () => {
    setSearch('');
  };

  const onChangeInput = (e) => {
    setSearch(e);
    getMoviesDebounce(e);
  };

  return (
    <Box sx={{ width: '100%', color: 'indigo50', display: 'flex', alignItems: 'center' }}>
      <TextField
        sx={{ background: 'transparent', borderRadius: '5px', color: 'white' }}
        label={isError ? 'поиск фильмов и сериалов' : 'Произошла ошибка, попробуйте еще раз!'}
        variant="standard"
        autoComplete="off"
        fullWidth
        value={search}
        onChange={(e) => onChangeInput(e.target.value)}
      />
      {search && <CloseIcon onClick={onClickClear} />}
    </Box>
  );
};

export default Search;
