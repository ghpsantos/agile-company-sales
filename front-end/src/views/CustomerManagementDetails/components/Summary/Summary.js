import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {

  CardContent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '@material-ui/core';


import PerfectScrollbar from 'react-perfect-scrollbar';

const useStyles = makeStyles(() => ({
  root: {}
}));

const Summary = props => {
  const {user} = props;

  const classes = useStyles();

  return (
    <CardContent className={classes.content}>
      <PerfectScrollbar>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">Product</TableCell>
              <TableCell align="center">Quantity</TableCell>
              <TableCell align="center">Sale</TableCell>
              <TableCell align="center">Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {user.sales.map(sale => (
              <TableRow
              >
                <TableCell align="center" >{sale.product}</TableCell>
                <TableCell align="center">{sale.quantity}</TableCell>
                <TableCell align="center">{sale.sale}</TableCell>
                <TableCell align="center">{sale.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </PerfectScrollbar>
    </CardContent>
  );
};

Summary.propTypes = {
  className: PropTypes.string,
  user: PropTypes.object.isRequired
};

export default Summary;
