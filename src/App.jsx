import S from './App.module.scss';
import { Container } from '@mui/material';
import Search from './Components/SearchBlock';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import InfoBlock from './pages/infoMovies';

function App() {
  return (
    <Container>
      <div className={S.header}>
        <Search />
      </div>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          exact
          path="/movie/:id"
          element={<InfoBlock />}
        />
      </Routes>
    </Container>
  );
}

export default App;
