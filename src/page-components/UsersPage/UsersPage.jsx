import Grid from '@mui/material/Unstable_Grid2';

import { ContactCard } from 'components/ContactCard';
import { PageWrapper } from 'components/PageWrapper';

export const UsersPage = () => {
  return (
    <PageWrapper>
      <h1>Users Page</h1>

      <Grid container spacing={3}>
        <Grid xs={4}>
          <ContactCard />
        </Grid>

        <Grid xs={4}>
          <ContactCard />
        </Grid>

        <Grid xs={4}>
          <ContactCard />
        </Grid>
      </Grid>
    </PageWrapper>
  );
};
