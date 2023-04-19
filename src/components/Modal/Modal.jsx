import { useState } from 'react';
import { useCreateUserMutation } from 'redux/usersApi';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { Form } from 'page-components/Form';

export const Modal = () => {
  const [open, setOpen] = useState(false);
  const [createUser] = useCreateUserMutation();

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onSubmit = async user => {
    try {
      await createUser(user);
      setOpen(false);
    } catch (error) {
      console.error(error);
    }
  };

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

          <Form onSubmit={onSubmit} handleClose={handleClose} />
        </DialogContent>
      </Dialog>
    </>
  );
};
