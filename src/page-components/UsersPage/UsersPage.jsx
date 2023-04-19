import { useSelector } from 'react-redux';
import { getFilter } from 'redux/filterSlice';
import { useGetUsersQuery } from 'redux/usersApi';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import { Filter } from 'components/Filter';
import { User } from 'components/HeroDescription/User';
import { PageWrapper } from 'components/PageWrapper';
import { Paragraph } from 'components/Paragraph';
import { UsersTable } from 'components/UsersTable';
import { Modal } from 'page-components/Modal';

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
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'end',
          }}
        >
          <Modal />
          <Filter />
        </Box>

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
            <Paragraph>There are no users...</Paragraph>
          </Box>
        )}
      </Stack>
    </PageWrapper>
  );
};
