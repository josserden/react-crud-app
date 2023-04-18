import Box from '@mui/material/Box';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        borderTop: '1px solid #eaeaea',
      }}
    >
      <Container maxWidth="xl">
        <Typography
          variant="body2"
          sx={{
            textAlign: 'center',
            fontWeight: 700,
          }}
        >
          {new Date().getFullYear()} © React Crud App
        </Typography>
      </Container>
    </Box>
  );
};
