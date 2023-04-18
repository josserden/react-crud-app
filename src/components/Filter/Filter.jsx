import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilteredUsers } from 'redux/filterSlice';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const Filter = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const handleChangeFilter = e => {
    setValue(e.target.value);
    dispatch(setFilteredUsers(e.target.value));
  };

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': {
          width: '25ch',
        },
      }}
      autoComplete="off"
    >
      <TextField
        id="standard-basic"
        label="Find user by name"
        variant="standard"
        type="text"
        value={value}
        onChange={handleChangeFilter}
      />
    </Box>
  );
};
