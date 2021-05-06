import 'date-fns';
import styles from './Tables.module.scss';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  KeyboardTimePicker,
} from '@material-ui/pickers';
import { makeStyles } from '@material-ui/core/styles';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

const demoTables = [
  {
    hour: '12:00',
    tables: [
      { id: '1', status: 'free', bookingId: null, eventId: null},
      { id: '2', status: 'booked', bookingId: 15, eventId: null},
      { id: '3', status: 'free', bookingId: null, eventId: null},
      { id: 'bar', status: 'booked', bookingId: null, eventId: 5},
    ],
  },

  {
    hour: '12:30',
    tables: [
      { id: '1', status: 'free'},
      { id: '2', status: 'booked'},
      { id: '3', status: 'free'},
      { id: 'bar', status: 'event'},
    ],
  },

  {
    hour: '13:00',
    tables: [
      { id: '1', status: 'booked'},
      { id: '2', status: 'free'},
      { id: '3', status: 'free'},
      { id: 'bar', status: 'event'},
    ],
  },

  {
    hour: '13:30',
    tables: [
      { id: '1', status: 'booked'},
      { id: '2', status: 'booked'},
      { id: '3', status: 'event'},
      { id: 'bar', status: 'free'},
    ],
  },

  {
    hour: '14:00',
    tables: [
      { id: '1', status: 'free'},
      { id: '2', status: 'free'},
      { id: '3', status: 'free'},
      { id: 'bar', status: 'free'},
    ],
  },
];

const renderActions = status => {
  switch (status) {
    case 'free':
      return (
        <div className={styles.free}>
          <h3>FREE</h3>
          <Button 
            size="small"
            component={Link} to={`${process.env.PUBLIC_URL}/tables/events/new`}
          >
          new event
          </Button>
          <Button 
            size="small"
            component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/new`}
          >
          new booking
          </Button>
        </div>
      );
    case 'booked':
      return (
        <div className={styles.booked}>
          <h3>BOOKED</h3>
          <Button 
            size="small"
            component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/:id`}
          >
          show details
          </Button>
        </div>
      );
    case 'event':
      return (
        <div className={styles.booked}>
          <h3>EVENT</h3>
          <Button 
            size="small"
            component={Link} to={`${process.env.PUBLIC_URL}/tables/events/:id`}
          >
          show details
          </Button>
        </div>
      );
    default:
      return null;
  }
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    margin: theme.spacing(3),
  },
}));

export default function Tables () {
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const classes = useStyles();

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className={styles.component}>
      <div className={classes.root}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justify="space-evenly">
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              inputVariant="outlined"
              format="dd/MM/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Select a date"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />   
            <KeyboardTimePicker
              disableToolbar
              margin="normal"
              id="time"
              inputVariant="outlined"
              label="Select a time"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change time',
              }}
              keyboardIcon={<AccessTimeIcon />}
            /> 
          </Grid>
        </MuiPickersUtilsProvider>
      </div>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="center">TABLE 1</TableCell>
            <TableCell align="center">TABLE 2</TableCell>
            <TableCell align="center">TABLE 3</TableCell>
            <TableCell align="center">BAR</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {demoTables.map((row) => (
            <TableRow key={row.hour}>
              <TableCell component="th" scope="row">
                {row.hour}
              </TableCell>
              {row.tables.map((mapTable) => (
                <TableCell key={mapTable.id}>
                  {renderActions(mapTable.status)}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
