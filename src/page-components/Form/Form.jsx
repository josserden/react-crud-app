import { Controller, useForm } from 'react-hook-form';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';

export const Form = ({ onSubmit, handleClose }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleFormSubmit = data => {
    onSubmit(data);
    reset();
  };

  return (
    <Box component="form" onSubmit={handleSubmit(handleFormSubmit)}>
      <Controller
        name="name"
        control={control}
        defaultValue=""
        rules={{
          required: 'Name is required',
          minLength: {
            value: 3,
            message: 'Name should be at least 3 characters',
          },
        }}
        render={({ field }) => (
          <TextField
            {...field}
            label="User name"
            variant="outlined"
            fullWidth
            margin="normal"
            error={!!errors.name}
            helperText={errors?.name?.message}
          />
        )}
      />

      <Controller
        name="nickname"
        control={control}
        defaultValue=""
        rules={{
          required: 'Nickname is required',
          minLength: {
            value: 3,
            message: 'Nickname should be at least 3 characters',
          },
        }}
        render={({ field }) => (
          <TextField
            {...field}
            label="User nickname"
            variant="outlined"
            fullWidth
            margin="normal"
            error={!!errors.nickname}
            helperText={errors?.nickname?.message}
          />
        )}
      />

      <Controller
        name="email"
        control={control}
        defaultValue=""
        rules={{
          required: 'Email is required',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Enter a valid email address',
          },
        }}
        render={({ field }) => (
          <TextField
            {...field}
            type="email"
            label="User email"
            variant="outlined"
            fullWidth
            margin="normal"
            error={!!errors.email}
            helperText={errors?.email?.message}
          />
        )}
      />

      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button type="submit" variant="contained" onSubmit={onSubmit}>
          Create
        </Button>
      </DialogActions>
    </Box>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
};
