import { useGetUsersQuery } from 'redux/usersApi';
import { Stack } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import { User } from 'components/User';
import { PageWrapper } from 'components/PageWrapper';
import { Filter } from 'components/Filter';
import { UsersTable } from 'components/UsersTable';
import { Link } from 'react-router-dom';

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
      <Stack spacing={6}>
        <Filter />

        <UsersTable>
          {users.map(user => (
            <User key={user.id} {...user} />
          ))}
        </UsersTable>
      </Stack>
    </PageWrapper>
  );
};
