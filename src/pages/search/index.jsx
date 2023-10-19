import { Box, Button, Grid, Paper, Rating, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import S from '../../Components/MovieCard/movie.module.scss';
import { setMoviesID } from '../../Redux/fetchDataSlice';
import { useNavigate } from 'react-router-dom';

const SearchBlock = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const searchMovies = useSelector((state) => state.searchMovies.searchVariants);

  const infoButtonClick = (id) => {
    dispatch(setMoviesID(id));
    navigate(`/movie/${id}`);
  };

  const buttonMainPage = () => {
    
    navigate('/');
  };

  return (
    <>
      <Button
        onClick={buttonMainPage}
        variant="outlined"
        sx={{ position: 'absolute', left: 5 }}>
        Вернуться на главную
      </Button>
      <Grid
        sx={{ marginTop: 2 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        container
        spacing={2}>
        {searchMovies.docs?.map((movie) => (
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
                  src={
                    movie.poster
                      ? movie.poster
                      : 'https://flyclipart.com/thumb2/clipart-sad-face-clipart-school-clipart-sad-face-clipart-sad-785595.png'
                  }
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
                  defaultValue={movie.rating}
                />
                <Typography
                  variant="caption"
                  component="h6">
                  {movie.rating.toFixed(1)}
                </Typography>
              </Box>
              <Button
                onClick={() => infoButtonClick(movie.id)}
                variant="outlined">
                Информация о фильме
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default SearchBlock;
