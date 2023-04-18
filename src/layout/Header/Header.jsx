import { GiGrain } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { ROUTES } from 'utils/routes';

const pages = [
  {
    name: 'Home',
    path: ROUTES.HOME,
  },
  {
    name: 'Users',
    path: ROUTES.USERS,
  },
];

export const Header = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            py: 1,
          }}
        >
          <Typography variant="h3" noWrap component="a" href={ROUTES.HOME}>
            <GiGrain
              style={{
                color: 'yellow',
              }}
            />
          </Typography>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
            }}
          >
            {pages.map(({ name, path }) => (
              <Button
                component={NavLink}
                to={path}
                exact="true"
                key={name.toLowerCase()}
                sx={{
                  color: 'white',
                  fontWeight: 700,
                  fontSize: '1rem',

                  '&.active': {
                    color: 'yellow',
                  },
                }}
              >
                {name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
