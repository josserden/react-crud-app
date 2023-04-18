import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const Filter = () => {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': {
          display: 'block',
          m: 1,
          width: '25ch',
          ml: 'auto',
        },
      }}
      autoComplete="off"
    >
      <TextField id="standard-basic" label="Find user" variant="standard" />
    </Box>
  );
};
