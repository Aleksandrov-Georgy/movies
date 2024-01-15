import S from './infoMovies.module.scss';
import { useSelector } from 'react-redux';
import { useGetMoviesIdQuery } from '../../Redux/fetchData';
import { Box, Button, CircularProgress, Grid, Rating } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const InfoBlock = () => {
  const navigate = useNavigate();
  const movieId = useSelector((state) => state.loadingMovies.selectedMovieId);

  const { data = [], isLoading, isError } = useGetMoviesIdQuery(movieId);

  if (isError) {
    navigate('/');
  }

  return (
    <>
      {isLoading ? (
        <Box
          sx={{
            width: '100%',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <CircularProgress color="success" />
        </Box>
      ) : (
        <Box>
          <div className={S.box}>
            <Box>
              <img
                className={S.img}
                src={data.poster.previewUrl}
                alt="preview"
              />
            </Box>
            <div className={S.box__info}>
              <div className={S.box__content}>
                <h1 className={S.box__title}>{data.name}</h1>
                <Rating
                  sx={{ marginBottom: 2 }}
                  readOnly
                  max={10}
                  precision={0.1}
                  defaultValue={data?.rating.imdb}
                />
              </div>

              <p className={S.box__desc}>{data.description}</p>
              <Box sx={{ display: 'flex', flexDirection: 'column', width: '200px', marginY: 5 }}>
                <Link
                  to={data.videos.trailers[0]?.url}
                  target="_blank">
                  <Button
                    sx={{ marginBottom: 2, width: '200px' }}
                    variant="outlined">
                    Смотреть трейлер
                  </Button>
                </Link>
              </Box>
              <Grid
                container
                spacing={2}
                sx={{ width: '100%' }}>
                {data.watchability.items.map((button, i) => (
                  <Grid
                    item
                    key={i}>
                    <Link
                      sx={{ width: '200px' }}
                      to={button.url}
                      target="_blank">
                      <Button variant="contained">Смотреть фильм на {button.name}</Button>
                    </Link>
                  </Grid>
                ))}
              </Grid>
            </div>
          </div>
          <Button
            sx={{ margin: 2 }}
            onClick={() => navigate(-1)}>
            Назад
          </Button>
        </Box>
      )}
    </>
  );
};

export default InfoBlock;
