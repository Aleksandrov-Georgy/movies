import React from 'react';
import S from './home.module.scss';
import { useDispatch } from 'react-redux';
import { setMoviesNewList } from '../../Redux/fetchDataSlice';
import MovieCard from '../../Components/MovieCard';
import { Pagination } from '@mui/material';
import { useLazyGetMoviesAllQuery } from '../../Redux/fetchData';
// import { useNavigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const [page, setPage] = React.useState(1);

  const [getNewDataMovies, data] = useLazyGetMoviesAllQuery(page);

  React.useEffect(() => {
    getNewDataMovies();
  }, []);

  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    getNewDataMovies(page);
  }, [page]);

  if (data) {
    setTimeout(() => {
      dispatch(setMoviesNewList(data));
    }, 10);
  }

  // if (data.isError) {
  //   navigate('*');
  // }

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <>
      <MovieCard />
      <div className={S.pagination}>
        <Pagination
          sx={{ marginTop: 1 }}
          page={page}
          onChange={handleChange}
          color="secondary"
          count={65082}
        />
      </div>
    </>
  );
};

export default Home;
