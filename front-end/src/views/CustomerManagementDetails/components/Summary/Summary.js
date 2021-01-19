import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Button,
  Card,
  CardContent,
  colors,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow, Typography
} from '@material-ui/core';

import axios from 'utils/axios';
import { CustomerInfo, Invoices, SendEmails, OtherActions } from './components';
import { Label } from '../../../../components';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  root: {}
}));

const Summary = props => {
  const { className, user, ...rest } = props;

  const classes = useStyles();

  return (
    <CardContent className={classes.content}>
      <PerfectScrollbar>
        {/*<div className={classes.inner}>*/}
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
        {/*</div>*/}
      </PerfectScrollbar>
    </CardContent>
  );
};

Summary.propTypes = {
  className: PropTypes.string,
  user: PropTypes.object.isRequired
};

export default Summary;
