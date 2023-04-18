import Grid from '@mui/material/Unstable_Grid2';

import { ContactCard } from 'components/ContactCard';
import { PageWrapper } from 'components/PageWrapper';
import { useGetUsersQuery } from 'redux/usersApi';

export const UsersPage = () => {
  const { data: users = [], error, isLoading } = useGetUsersQuery();

  if (isLoading) {
    return <PageWrapper>Loading...</PageWrapper>;
  }

  if (error) {
    return <PageWrapper>Error: {error}</PageWrapper>;
  }

  return (
    <PageWrapper>
      <h1>Users Page</h1>

      <Grid container spacing={3}>
        {users.map(user => (
          <Grid xs={4} key={user.id}>
            <ContactCard {...user} />
          </Grid>
        ))}
      </Grid>
    </PageWrapper>
  );
};
