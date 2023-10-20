import S from './infoMovies.module.scss';
import { useSelector } from 'react-redux';
import { useGetMoviesIdQuery } from '../../Redux/fetchData';
import { Box, Button, CircularProgress, Grid, Rating, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const InfoBlock = () => {
  const navigate = useNavigate();
  const movieId = useSelector((state) => state.loadingMovies.selectedMovieId);

  const { data = [], isLoading, isError } = useGetMoviesIdQuery(movieId);

  if (isError) {
    navigate('*');
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
          <Box sx={{ display: 'flex', marginTop: 3 }}>
            <Box>
              <img
                className={S.img}
                src={data.poster.previewUrl}
                alt="preview"
              />
            </Box>
            <Box sx={{ marginLeft: 4 }}>
              <Typography
                sx={{ marginBottom: 1 }}
                variant="h3"
                component="h3">
                {data.name}
              </Typography>
              <Rating
                sx={{ marginBottom: 2 }}
                readOnly
                max={10}
                precision={0.1}
                defaultValue={data?.rating.imdb}
              />
              <Typography
                variant="body1"
                component="p">
                {data.description}
              </Typography>
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
                    key={i}
                    sx={2}>
                    <Link
                      sx={{ width: '200px' }}
                      to={button.url}
                      target="_blank">
                      <Button variant="contained">Смотреть фильм на {button.name}</Button>
                    </Link>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
          <Link to="/">
            <Button>На главную</Button>
          </Link>
        </Box>
      )}
    </>
  );
};

export default InfoBlock;
