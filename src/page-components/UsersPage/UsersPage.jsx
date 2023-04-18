import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/filterSlice';
import { useGetUsersQuery } from 'redux/usersApi';

import { Filter } from 'components/Filter';
import { PageWrapper } from 'components/PageWrapper';
import { Paragraph } from 'components/Paragraph';
import { User } from 'components/HeroDescription/User';
import { UsersTable } from 'components/UsersTable';

export const UsersPage = () => {
  const { data: users = [], error, isLoading } = useGetUsersQuery();
  const filterValue = useSelector(getFilter);

  const filteredUsers = () => {
    return users.filter(user =>
      user.name.toLowerCase().includes(filterValue.toLowerCase())
    );
  };

  const normalizedUsers = filteredUsers();
  const isUsersEmpty = normalizedUsers.length === 0;

  if (isLoading) {
    return (
      <PageWrapper>
        <h2>Loading...</h2>
      </PageWrapper>
    );
  }

  if (error) {
    return (
      <PageWrapper>
        <h2>Error: {error}</h2>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <Stack spacing={6}>
        <Filter />

        {normalizedUsers.length > 0 && (
          <UsersTable>
            {normalizedUsers.map(user => (
              <User key={user.id} {...user} />
            ))}
          </UsersTable>
        )}

        {isUsersEmpty && (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Paragraph>
              No users found. Please try another search term.
            </Paragraph>
          </Box>
        )}
      </Stack>
    </PageWrapper>
  );
};
