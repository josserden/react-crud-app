import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

import Button from '@mui/material/Button';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

import { ROUTES } from 'utils/routes';

export const User = ({ id, name, nickname }) => {
  const location = useLocation();

  return (
    <TableRow
      sx={{
        '&:last-child td, &:last-child th': { border: 0 },
      }}
    >
      <TableCell>{id}</TableCell>
      <TableCell>{name}</TableCell>
      <TableCell>{nickname}</TableCell>
      <TableCell>
        <Button
          variant="outlined"
          component={Link}
          to={`${ROUTES.USERS}/${id}`}
          state={{ from: location }}
        >
          View
        </Button>
      </TableCell>
    </TableRow>
  );
};

User.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
};
