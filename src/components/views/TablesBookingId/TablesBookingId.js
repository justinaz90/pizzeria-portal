import React from 'react';
import styles from './TablesBookingId.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const demoBookingId = [
  {table: '1', date: '05.05.2021', time: '14:30', duration: '01:00 h', people: '3', starters: 'no', contact: 'Marie Andrews / tel. 123 456 789'},
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: theme.spacing(3),
  },
  button: {
    margin: '10px',
  },
}));

export default function TablesBookingId () {

  const classes = useStyles();

  return (
    <div className={styles.component}>
      <h2>Booking #123</h2>
      <Paper className={styles.component}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Table</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Hour</TableCell>
              <TableCell>Duration</TableCell>
              <TableCell>People</TableCell>
              <TableCell>Starters</TableCell>
              <TableCell>Contact</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {demoBookingId.map(row => (
              <TableRow key={row.booking}>
                <TableCell>
                  {row.table}
                </TableCell>
                <TableCell>
                  {row.date}
                </TableCell>
                <TableCell>
                  {row.time}
                </TableCell>
                <TableCell>
                  {row.duration}
                </TableCell>
                <TableCell>
                  {row.people}
                </TableCell>
                <TableCell>
                  {row.starters}
                </TableCell>
                <TableCell>
                  {row.contact}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className={classes.root}>
          <Button 
            className={classes.button}
            variant="contained" 
            color="primary"
            size="large"
            type="submit"
          >
            Edit booking
          </Button>
          <Button 
            className={classes.button}
            variant="contained" 
            color="primary"
            size="large"
            type="submit"
          >
            Save changes
          </Button>
        </div>
      </Paper>
    </div>
  );
}