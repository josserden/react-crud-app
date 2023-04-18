import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import { Paragraph } from 'components/Paragraph';
import { ROUTES } from 'utils/routes';

export const HeroDescription = () => {
  return (
    <Stack spacing={3}>
      <Paragraph>
        Our app is a powerful tool for managing the user list. You can easily
        add, edit and delete users in a convenient format for you.
      </Paragraph>

      <Paragraph>
        Thanks to our application, you can easily and quickly find the right
        user and view information about him. Our intuitive interface and simple
        navigation make it easy to use our app even for those with minimal
        computer experience.
      </Paragraph>

      <Paragraph>
        To start using our app, go to the{' '}
        <Button
          component={Link}
          to={ROUTES.USERS}
          sx={{
            padding: 0,
            fontWeight: 700,
            fontSize: '1rem',
            color: 'primary.main',
            minWidth: 'auto',

            '&:hover': {
              textDecoration: 'underline',
              backgroundColor: 'transparent',
            },
          }}
        >
          Users
        </Button>{' '}
        page where you can view a list of all registered users and add a new
        user.
      </Paragraph>
    </Stack>
  );
};
