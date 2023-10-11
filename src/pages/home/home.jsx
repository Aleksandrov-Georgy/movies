import React from 'react';
import S from './home.module.scss';
import { useDispatch } from 'react-redux';
import { setPageFetch } from '../../Redux/fetchDataSlice';
import MovieCard from '../../Components/MovieCard';
import { Pagination } from '@mui/material';

const Home = () => {
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
    <>
      <MovieCard />
      <div className={S.pagination}>
        <Pagination
          page={page}
          onChange={handleChange}
          color="secondary"
          count={1038604}
        />
      </div>
    </>
  );
};

export default Home;
