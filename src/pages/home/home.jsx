import React from 'react';
import { useSearchParams } from 'react-router-dom';
import S from './home.module.scss';
import { useDispatch } from 'react-redux';
import { setMoviesNewList } from '../../Redux/fetchDataSlice';
import MovieCard from '../../Components/MovieCard';
import { Pagination } from '@mui/material';
import { useLazyGetMoviesAllQuery } from '../../Redux/fetchData';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [params, setParams] = useSearchParams();
  const page = params.get('page');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [getNewDataMovies, data] = useLazyGetMoviesAllQuery();

  React.useEffect(() => {
    !setParams && setParams({ page: '1' });
    getNewDataMovies(page);
  }, [getNewDataMovies, page, setParams]);

  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    getNewDataMovies(page);
  }, [getNewDataMovies, page, params]);

  if (data) {
    setTimeout(() => {
      dispatch(setMoviesNewList(data));
    }, 10);
  }

  if (data.isError) {
    navigate('*');
  }

  const handleChange = (event, value) => {
    setParams({ page: value.toString() });
  };

  return (
    <>
      <MovieCard />
      <div className={S.pagination}>
        <Pagination
          sx={{ marginTop: 1 }}
          page={Number(page)}
          onChange={handleChange}
          color="secondary"
          count={data.data?.pages}
        />
      </div>
    </>
  );
};

export default Home;
