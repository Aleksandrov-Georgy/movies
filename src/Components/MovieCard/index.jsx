import S from './movie.module.scss';
import { Box, Button, Grid, Paper, Rating, Skeleton, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setMoviesID } from '../../Redux/fetchDataSlice';
import InfoIcon from '@mui/icons-material/Info';
import React from 'react';

const MovieCard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [imgLoad, setImgLoad] = React.useState(false);

  const loading = useSelector((state) => state.loadingMovies.loadingMovie);

  const moviesList = useSelector((state) => state.loadingMovies.moviesNewList);

  const infoButtonClick = (id) => {
    dispatch(setMoviesID(id));
    navigate(`/movie/${id}`);
  };

  return (
    <>
      <div className={S.movies}>
        {loading === 'fulfilled'
          ? moviesList.data?.docs?.map((movie) => (
              <Grid
                item
                key={movie.id}
                onClick={() => infoButtonClick(movie.id)}
                xs={3}>
                <Paper
                
                  elevation={16}
                  sx={{ borderRadius: '10px' }}
                  key={movie.id}
                  className={S.movie}>
                  <div className={imgLoad ? `${S.imageBlock}` : `${S.imageBlock__loader}`}>
                    <img
                      onLoad={() => setImgLoad(true)}
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
            ))
          : Array(32)
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
      </div>
    </>
  );
};

export default MovieCard;
