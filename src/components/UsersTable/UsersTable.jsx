import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import PropTypes from 'prop-types';

const tableRows = ['id', 'name', 'username', 'view'];

export const UsersTable = ({ children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <TableContainer
        component={Paper}
        sx={{ display: 'block', maxWidth: 750, mx: 'auto' }}
      >
        <Table sx={{ width: '100%' }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {tableRows.map(row => (
                <TableCell
                  key={row}
                  sx={{
                    fontWeight: 700,
                  }}
                >
                  {row.toUpperCase()}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>{children}</TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

UsersTable.propTypes = {
  children: PropTypes.node.isRequired,
};
