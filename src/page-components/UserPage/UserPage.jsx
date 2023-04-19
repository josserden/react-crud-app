import { Link, Navigate, useLocation, useParams } from 'react-router-dom';
import { useDeleteUserMutation, useGetUserQuery } from 'redux/usersApi';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';

import { PageWrapper } from 'components/PageWrapper';
import { Paragraph } from 'components/Paragraph';

import { ROUTES } from 'utils/routes';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(3),
  color: theme.palette.text.secondary,
}));

export const UserPage = () => {
  const { userId } = useParams();
  const [deleteUser] = useDeleteUserMutation();

  const { data: user = {}, error, isLoading } = useGetUserQuery(userId);
  const location = useLocation();
  const {
    country,
    city,
    company,
    email,
    id,
    name,
    phone,
    username,
    website,
    companyBs,
  } = user;

  const handleGoBack = location.state?.from ?? ROUTES.USERS;

  if (isLoading) {
    return (
      <PageWrapper>
        <h2>Loading...</h2>
      </PageWrapper>
    );
  }

  if (error) {
    return <Navigate to={ROUTES.HOME} replace />;
  }

  return (
    <PageWrapper>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '2rem',
        }}
        component={Link}
        to={handleGoBack}
      >
        <Button variant="contained">GO BACK</Button>

        <ButtonGroup
          disableElevation
          variant="contained"
          aria-label="Disabled elevation buttons"
        >
          <Button>Edit</Button>
          <Button
            onClick={() => {
              deleteUser(userId);
            }}
          >
            Delete
          </Button>
        </ButtonGroup>
      </Box>

      <Box
        sx={{
          marginBottom: '2rem',
        }}
      >
        <Paragraph>
          <strong>ID:</strong> {id}
        </Paragraph>

        <Typography
          variant="h3"
          component="h1"
          style={{
            fontWeight: 700,
          }}
        >
          {name}
        </Typography>

        <Typography variant="overline" display="block" gutterBottom>
          @{username}
        </Typography>
      </Box>

      <Grid container spacing={2}>
        <Grid xs={6}>
          <Item>
            <Stack spacing={2}>
              <strong>City:</strong> {city}
              <strong>Country:</strong> {country}
            </Stack>
          </Item>
        </Grid>

        <Grid xs={6}>
          <Item>
            <Stack spacing={2}>
              <strong>Company:</strong> {company}
              <strong> BS:</strong> {companyBs}
            </Stack>
          </Item>
        </Grid>

        <Grid xs={12}>
          <Item>
            <Stack spacing={2}>
              <strong>Email:</strong> {email} <strong>Phone:</strong> {phone},
              <strong> Website:</strong> {website}
            </Stack>
          </Item>
        </Grid>
      </Grid>
    </PageWrapper>
  );
};
