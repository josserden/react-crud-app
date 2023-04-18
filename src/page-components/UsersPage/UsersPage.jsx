import { Stack } from '@mui/material';
import { useGetUsersQuery } from 'redux/usersApi';

import { Filter } from 'components/Filter';
import { PageWrapper } from 'components/PageWrapper';
import { User } from 'components/User';
import { UsersTable } from 'components/UsersTable';

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
