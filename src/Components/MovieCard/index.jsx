import S from './movie.module.scss';
import { useGetMoviesAllQuery } from '../../Redux/fetchData';
import { Skeleton } from '@mui/material';
import { useSelector } from 'react-redux';

const MovieCard = () => {
  const page = useSelector((state) => state.loadingMovies.page);

  const { data = [], isLoading } = useGetMoviesAllQuery(page);

  return (
    <div className={S.movies}>
      {!isLoading
        ? data.docs?.map((movie) => (
            <div
              key={movie.id}
              className={S.movie}>
              <div className={S.imageBlock}>
                <img
                  src={movie.poster.previewUrl}
                  alt="preview"
                />
              </div>
              <div className={S.contentBlock}>
                <h3>{movie.name}</h3>
                <p>Рейтинг: {movie.rating.imdb}</p>
              </div>
              <button>Информация о фильме</button>
            </div>
          ))
        : Array(20)
            .fill()
            .map(() => (
              <Skeleton
                key={Math.random()}
                variant="rounded"
                width={'93%'}
                height={410}
              />
            ))}
    </div>
  );
};

export default MovieCard;
