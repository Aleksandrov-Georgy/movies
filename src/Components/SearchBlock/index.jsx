import { Box,  TextField } from '@mui/material';
// import S from './search.module.scss';

const Search = () => {
  
  return (
    <Box sx={{ width: '100%', color: 'indigo50' }}>
      <TextField
        sx={{  background: 'transparent', borderRadius: '5px', color: 'white' }}
        label="поиск фильмов и сериалов"
        variant="standard"
        autoComplete="off"
        fullWidth 
      />

      {/* <Button
      sx={{marginLeft: '10px'}}
      >Поиск</Button> */}
    </Box>
  );
};

export default Search;
