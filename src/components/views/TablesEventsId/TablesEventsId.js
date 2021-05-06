import React from 'react';
import styles from './TablesEventsId.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const demoEventId = [
  {table: 'Bar', date: '10.05.2021', time: '19:00', duration: '02:30 h', people: '5', contact: 'Tom Smith / e-mail: tom.smith@gmail.com'},
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

export default function TablesEventId () {

  const classes = useStyles();

  return (
    <div className={styles.component}>
      <h2>Event #99</h2>
      <Paper className={styles.component}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Table</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Hour</TableCell>
              <TableCell>Duration</TableCell>
              <TableCell>People</TableCell>
              <TableCell>Contact</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {demoEventId.map(row => (
              <TableRow key={row.event}>
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
            Edit event
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