import 'date-fns';
import styles from './TablesEventsNew.module.scss';
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
import TextField from '@material-ui/core/TextField';
import clsx from 'clsx';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    margin: theme.spacing(3),
  },
  margin: {
    margin: theme.spacing(1),
  },
  textField: {
    width: '25ch',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function TablesEventsNew () {
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [state, setState] = React.useState('');
  const classes = useStyles();

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleChange = (event) => {
    setState(event.target.value);
  };

  return (
    <div className={styles.component}>
      <h2>New Event</h2>
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
      <div className={classes.root}>
        <TextField
          required
          id="outlined-basic" 
          label="Full name" 
          variant="outlined"
          className={clsx(classes.margin, classes.textField)}
        />
        <TextField
          required
          id="outlined-basic" 
          label="Contact" 
          variant="outlined"
          className={clsx(classes.margin, classes.textField)}
        />

        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">People</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={state.people}
            onChange={handleChange}
            label="People"
          >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={6}>6</MenuItem>
            <MenuItem value={7}>7</MenuItem>
            <MenuItem value={8}>8</MenuItem>
            <MenuItem value={9}>9</MenuItem>
          </Select>
        </FormControl>

        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel htmlFor="uncontrolled-native" id="demo-simple-select-outlined-label">Table</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={state.table}
            onChange={handleChange}
            label="Table"
          >
            <MenuItem value={10}>1</MenuItem>
            <MenuItem value={11}>2</MenuItem>
            <MenuItem value={12}>3</MenuItem>
            <MenuItem value={13}>Bar</MenuItem>
          </Select>
        </FormControl>
      </div>

      <div className={classes.root}>
        <Button 
          variant="contained" 
          color="primary"
          size="large"
          type="submit"
        >
          Save changes
        </Button>
      </div>
    </div>
  );
}
