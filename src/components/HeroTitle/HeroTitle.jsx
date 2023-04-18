import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const HeroTitle = () => {
  return (
    <Box>
      <Badge badgeContent={'New'} color="success" />
      <Typography
        variant="h2"
        component="h1"
        gutterBottom
        style={{
          fontWeight: 700,
          marginTop: '1rem',
        }}
      >
        Welcome to our app!
      </Typography>
    </Box>
  );
};
