import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useCreateUserMutation } from 'redux/usersApi';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export const Modal = () => {
  const [open, setOpen] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [createUser, { isLoading, isSuccess, isError, error }] =
    useCreateUserMutation();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = data => {
    createUser(data);
    setOpen(false);
  };

  if (isLoading) return <p>Loading...</p>;
  if (isSuccess) return <p>Success!</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add new user
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New user</DialogTitle>

        <DialogContent>
          <DialogContentText
            sx={{
              mb: 2,
            }}
          >
            To add new user, please enter name, username and email.
          </DialogContentText>

          <Box component="form" onSubmit={handleSubmit(onSubmit)}>
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
        </DialogContent>
      </Dialog>
    </>
  );
};
