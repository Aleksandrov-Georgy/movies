import React from 'react';
import { useDispatch } from 'react-redux';
import S from './App.module.scss';
import { BsSearch } from 'react-icons/bs';
import MovieCard from './Components/MovieCard';
import { Pagination } from '@mui/material';
import { setPageFetch } from './Redux/fetchDataSlice';

function App() {
  const dispatch = useDispatch();
  const [page, setPage] = React.useState(1);

  const handleChange = (event, value) => {
    dispatch(setPageFetch(value));
    setPage(value);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <div className={S.header}>
        <div className={S.search}>
          <input
            type="text"
            placeholder="Фильмы и сериалы"
          />
          <BsSearch className={S.svg} />
        </div>
        <button type="button">Поиск</button>
      </div>
      <MovieCard />
      <div className={S.pagination}>
        <Pagination
          page={page}
          onChange={handleChange}
          color="secondary"
          count={1038604}
        />
      </div>
    </div>
  );
}

export default App;
