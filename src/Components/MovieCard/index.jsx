import S from './movie.module.scss';
import { useGetMoviesAllQuery } from '../../Redux/fetchData';
// console.log(data.docs[0].id);

const MovieCard = () => {
  const { data = [] } = useGetMoviesAllQuery();

  return (
    <div className={S.movies}>
      {data.docs?.map((movie) => (
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
          {/* <button>< Смотреть</button> */}
        </div>
      ))}
    </div>
  );
};

export default MovieCard;
