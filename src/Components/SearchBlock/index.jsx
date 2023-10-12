import React from 'react';

import { Box,  TextField } from '@mui/material';

const Search = () => {
  const [search, setSearch] = React.useState(null);

  return (
    <Box sx={{ width: '100%', color: 'indigo50' }}>
      <TextField
        sx={{ background: 'transparent', borderRadius: '5px', color: 'white' }}
        label="поиск фильмов и сериалов"
        variant="standard"
        autoComplete="off"
        fullWidth
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

    </Box>
  );
};

export default Search;
