// import React from 'react'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useSelector } from 'react-redux';
import { useGetMoviesIdQuery } from '../../Redux/fetchData';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Rating,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';

const InfoBlock = () => {
  const movieId = useSelector((state) => state.loadingMovies.selectedMovieId);

  const { data = [], isLoading } = useGetMoviesIdQuery(movieId);
  console.log(isLoading);
  console.log(data);

  return (
    <>
      {isLoading ? (
        <useGetMoviesIdQuery color="success" />
      ) : (
        <Box>
          <Box sx={{ display: 'flex' }}>
            <Box sx={{ width: '40%' }}>
              <img
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
                  to={data.videos.trailers[0].url}
                  target="_blank">
                  <Button
                    sx={{ marginBottom: 2, width: '200px' }}
                    variant="outlined">
                    Смотреть трейлер
                  </Button>
                </Link>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
                  {data.watchability.items.map((button, i) => (
                    <Link
                      key={i}
                      sx={{ width: '200px' }}
                      to={button.url}
                      target="_blank">
                      <Button variant="contained">Смотреть фильм на {button.name}</Button>
                    </Link>
                  ))}
                </Box>
              </Box>
            </Box>
          </Box>
          <Box>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header">
                <Typography>Accordion 1</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
                  lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Box>
      )}
    </>
  );
};

export default InfoBlock;
