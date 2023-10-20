import S from './movie.module.scss';
import { Box, Button, Grid, Paper, Rating, Skeleton, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setMoviesID } from '../../Redux/fetchDataSlice';
import { useGetMoviesAllQuery } from '../../Redux/fetchData';
import InfoIcon from '@mui/icons-material/Info';

const MovieCard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const page = useSelector((state) => state.loadingMovies.page);

  const { data = [], isLoading, isError } = useGetMoviesAllQuery(page);

  if (isError) {
    navigate('*');
  }

  const infoButtonClick = (id) => {
    dispatch(setMoviesID(id));
    navigate(`/movie/${id}`);
  };

  return (
    <>
      <Grid
        sx={{ marginTop: 2 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        container
        spacing={2}>
        {isLoading &&
          Array(20)
            .fill()
            .map(() => (
              <Grid
                item
                xs={3}
                sx={{ marginBottom: '20px' }}
                key={Math.random()}>
                <Skeleton
                  key={Math.random()}
                  variant="rounded"
                  height={450}
                  width={270}
                />
              </Grid>
            ))}
        {data.docs?.map((movie) => (
          <Grid
            item
            key={movie.id}
            xs={3}>
            <Paper
              elevation={16}
              sx={{ borderRadius: '10px' }}
              key={movie.id}
              className={S.movie}>
              <div className={S.imageBlock}>
                <img
                  src={movie.poster.previewUrl}
                  alt="preview"
                />
              </div>
              <Box
                padding={1}
                sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                <Typography
                  variant="h6"
                  component="h6">
                  {movie.name}
                </Typography>
                <Typography
                  variant="caption"
                  component="h6">
                  Рейтинг
                </Typography>
                <Rating
                  readOnly
                  max={10}
                  precision={0.1}
                  defaultValue={movie.rating.imdb}
                />
                <Typography
                  variant="caption"
                  component="h6">
                  {movie.rating.imdb}
                </Typography>
              </Box>
              <Button
                onClick={() => infoButtonClick(movie.id)}
                variant="outlined"
                startIcon={<InfoIcon />}>
                Информация о фильме
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default MovieCard;
