import S from './App.module.scss';
import { BsSearch } from 'react-icons/bs';
import MovieCard from './Components/MovieCard';
import { Pagination } from '@mui/material';
// import { useGetMoviesAllQuery } from './Redux/fetchData';

function App() {
  // const { data = [] } = useGetMoviesAllQuery();

  // console.log(data.docs[0].id);

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
        {/* <div> */}
        {/* {data.docs.map((el) => (
            <h1 key={el.id}>{el.id}</h1>
          ))} */}
        {/* </div> */}
      </div>
      <MovieCard />
      <div className={S.pagination}>
        <Pagination
          color="primary"
          count={1038604}
        />
      </div>
    </div>
  );
}

export default App;
