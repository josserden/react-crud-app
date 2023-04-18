import { Stack } from '@mui/material';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';

import { HeroDescription } from 'components/HeroDescription';
import { HeroImage } from 'components/HeroImage';
import { HeroTitle } from 'components/HeroTitle';
import { PageWrapper } from 'components/PageWrapper';

export const HomePage = () => {
  return (
    <PageWrapper>
      <Box>
        <Grid container spacing={3} columns={16}>
          <Grid xs={8}>
            <Stack spacing={6}>
              <HeroTitle />
              <HeroDescription />
            </Stack>
          </Grid>

          <Grid xs={8}>
            <HeroImage />
          </Grid>
        </Grid>
      </Box>
    </PageWrapper>
  );
};
