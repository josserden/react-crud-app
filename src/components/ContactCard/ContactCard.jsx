import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';

import { linksVariants } from 'utils/linksVariants';

const params = ['website', 'email', 'phone'];

export const ContactCard = ({ id, name, company, website, email, phone }) => {
  const location = useLocation();

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography
          sx={{ fontSize: '0.875rem' }}
          color="text.secondary"
          component="p"
          gutterBottom
        >
          {company.name}
        </Typography>

        <Typography
          variant="h5"
          component="h3"
          sx={{
            fontWeight: 700,
          }}
        >
          {name}
        </Typography>

        <Stack spacing={2}>
          {params.map(param => (
            <Typography
              key={param}
              sx={{ fontSize: '0.875rem' }}
              variant="body2"
              component="p"
            >
              {param}:{' '}
              {linksVariants(
                param,
                param === 'website'
                  ? website
                  : param === 'email'
                  ? email
                  : phone
              )}
            </Typography>
          ))}
        </Stack>
      </CardContent>

      <CardActions
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Link
          to={id}
          state={{
            from: location,
          }}
        >
          <Button
            variant="outlined"
            sx={{
              fontWeight: 700,
            }}
          >
            Read more
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

ContactCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  company: PropTypes.shape({
    name: PropTypes.string.isRequired,
    street: PropTypes.string,
    suite: PropTypes.string,
    city: PropTypes.string,
    zipcode: PropTypes.string,
    geo: PropTypes.shape({
      lat: PropTypes.string,
      lon: PropTypes.string,
    }),
  }).isRequired,
  website: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
