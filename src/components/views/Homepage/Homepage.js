import React from 'react';
import styles from './Homepage.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const demoHomepageOrders = [
  {type: 'Local', number: '23'},
  {type: 'Delivery', number: '16'},
];

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

function createData(booking) {
  return {
    booking,
    details: [
      { date: '2021-05-05', hour: '12:30', table: 1, people: 3 },
    ],
  };
}

Row.propTypes = {
  row: PropTypes.shape({
    booking: PropTypes.string.isRequired,
    details: PropTypes.arrayOf(
      PropTypes.shape({
        date: PropTypes.string.isRequired,
        hour: PropTypes.string.isRequired,
        table: PropTypes.string.isRequired,
        people: PropTypes.number.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton className={styles.button} aria-label="expand row" disableFocusRipple="true" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            {row.booking}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0, align: 'right' }} colSpan={3}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Table size="small" aria-label="purchases" style={{ marginTop: '0px', marginBottom: '30px'}}>
              <TableHead>
                <TableRow >
                  <TableCell>Date</TableCell>
                  <TableCell>Hour</TableCell>
                  <TableCell>Table</TableCell>
                  <TableCell>People</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {row.details.map((detailsRow) => (
                  <TableRow key={detailsRow}>
                    <TableCell>{detailsRow.date}</TableCell>
                    <TableCell>{detailsRow.hour}</TableCell>
                    <TableCell>{detailsRow.table}</TableCell>
                    <TableCell>{detailsRow.people}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const rows = [
  createData('Booking #123'),
  createData('Booking #164'),
  createData('Booking #199'),
  createData('Event #199'),
  createData('Booking #201'),
  createData('Event #21'),
  createData('Event #5'),
];

const Homepage = () => (

  <div className={styles.component}>
    <h2 className={styles.h2}>TODAY ORDERS STATISTICS</h2>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell >Type of order</TableCell>
          <TableCell align="center">Number of orders</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {demoHomepageOrders.map(row => (
          <TableRow key={row.type}>
            <TableCell>
              {row.type}
            </TableCell>
            <TableCell align="center">
              {row.number}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    <h2 className={styles.h2}>TODAY BOOKINGS & EVENTS</h2>
    <Table aria-label="collapsible table">
      <TableBody>
        {rows.map((row) => (
          <Row key={row.type} row={row} />
        ))}
      </TableBody>
    </Table>
  </div>
);

export default Homepage;
