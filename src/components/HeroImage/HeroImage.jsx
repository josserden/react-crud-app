import { Paper } from '@mui/material';

export const HeroImage = () => {
  return (
    <Paper
      sx={{
        overflow: 'hidden',
        borderRadius: '0.5rem',

        height: '100%',
      }}
    >
      <img
        src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
        alt="people working on a laptop"
        style={{
          objectFit: 'cover',
        }}
      />
    </Paper>
  );
};
