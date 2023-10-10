import React from 'react';
import { useDispatch } from 'react-redux';
import S from './App.module.scss';
import MovieCard from './Components/MovieCard';
import { Container, Pagination } from '@mui/material';
import { setPageFetch } from './Redux/fetchDataSlice';
import Search from './Components/SearchBlock';

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
    <Container>
      <div className={S.header}>
        <Search />
        
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
    </Container>
  );
}

export default App;
