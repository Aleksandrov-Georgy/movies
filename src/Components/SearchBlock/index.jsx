import React from 'react';
import { useLazyGetSearchMovieQuery } from '../../Redux/fetchData';
import S from './search.module.scss';
import debounce from 'lodash.debounce';
import CloseIcon from '@mui/icons-material/Close';
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
    <div className={S.input}>
      <input
        title="поиск фильмов и сериалов"
        placeholder={isError ? 'поиск фильмов и сериалов' : 'Произошла ошибка, попробуйте еще раз!'}
        // className={S.input}
        type="text"
        value={search}
        onChange={(e) => onChangeInput(e.target.value)}
      />
      {search && <CloseIcon className={S.input_svg} onClick={onClickClose} />}
    </div>
  );
};

export default Search;
