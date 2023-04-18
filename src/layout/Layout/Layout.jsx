import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

import { Header } from 'layout/Header';
import { Footer } from 'layout/Footer';

export const Layout = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Header />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
        }}
      >
        {<Outlet />}
      </Box>

      <Footer />
    </Box>
  );
};
