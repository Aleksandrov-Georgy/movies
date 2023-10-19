import { Container } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import InfoBlock from './pages/infoMovies';
import Error from './pages/error';
import Search from './Components/SearchBlock';
import SearchBlock from './pages/search';

function App() {
  return (
    <Container sx={{ marginTop: 2 }}>
      <Search />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/search"
          element={<SearchBlock />}
        />
        <Route
          exact
          path="/movie/:id"
          element={<InfoBlock />}
        />
        <Route
          path="*"
          element={<Error />}
        />
      </Routes>
    </Container>
  );
}

export default App;
