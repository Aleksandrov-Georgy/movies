import { Box, Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <Container sx={{ textAlign: 'center' }}>
      <Box>
        <Typography
          variant="h1"
          component="h1"
          sx={{ textAlign: 'center' }}>
          oops...
        </Typography>
        <Typography
          variant="h3"
          component="h3"
          sx={{ textAlign: 'center' }}>
          Что-то пошло не так.
        </Typography>
        <Typography
          variant="h3"
          component="h3"
          sx={{ textAlign: 'center' }}>
          Попробуйте ввести запрос повторно.
        </Typography>
        <Link to="/">
          <Button
            variant="outlined"
            sx={{ marginTop: 5 }}>
            НА ГЛАВНУЮ
          </Button>
        </Link>
      </Box>
    </Container>
  );
};

export default Error;
