import React from 'react';
import styles from './Kitchen.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const demoKitchen = [
  {order: '#87', tableOrDelivery: 'delivery', dishes: 'Zio Stefanos Dougnut' , status: 'completed'},
  {order: '#94', tableOrDelivery: 'table 3', dishes: 'Nonno Albertos Salad (Tomatoes, Cucumber, Olives, Feta cheese)', status: 'completed'},
  {order: '#126', tableOrDelivery: 'bar', dishes: 'Zia Giulias Breakfast', status: 'completed'},
  {order: '#133', tableOrDelivery: 'delivery', dishes: 'Nonna Albas Pizza (Sour cream, Green peppers, Olives)', status: 'completed'},
  {order: '#134', tableOrDelivery: 'table 1', dishes: 'Zia Giulias Breakfast, Espresso', status: 'in progress'},
  {order: '#145', tableOrDelivery: 'delivery', dishes: 'Nonna Albas Pizza (Salami, Fresh basil), Cappuccino', status: 'in progress'},
  {order: '#146', tableOrDelivery: 'table 2', dishes: 'Nonna Albas Pizza (Fresh basil, Olives, Mushrooms), Nonno Albertos Salad (Tomatoes, Feta cheese)', status: 'completed'},
];

export default function Kitchen () {
  
  const [state, setState] = React.useState({
    inProgress: false,
    completed: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const renderActions = status => {
    switch (status) {
      case 'in progress':
        return (
          <FormControlLabel
            control={<Switch checked={false} onChange={handleChange} name="inProgress" />}
            label="Completed"
          />
        );
      case 'completed':
        return (
          <FormControlLabel
            control={<Switch checked={true} onChange={handleChange} name="completed" />}
            label="Completed"
          />
        );
      default:
        return null;
    }
  };

  return (
    <Paper className={styles.component}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Order</TableCell>
            <TableCell>Table / Delivery</TableCell>
            <TableCell>Dishes</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {demoKitchen.map(row => (
            <TableRow key={row.order}>
              <TableCell>
                {row.order && (
                  <Button to={`${process.env.PUBLIC_URL}/waiter/order/${row.order}`}>
                    {row.order}
                  </Button>
                )}
              </TableCell>
              <TableCell>
                {row.tableOrDelivery}
              </TableCell>
              <TableCell>
                {row.dishes}
              </TableCell>
              <TableCell>
                {renderActions(row.status)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}