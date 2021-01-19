import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Card, Typography, Grid } from '@material-ui/core';

import axios from 'utils/axios';

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  item: {
    padding: theme.spacing(3),
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      '&:not(:last-of-type)': {
        borderRight: `1px solid ${theme.palette.divider}`
      }
    },
    [theme.breakpoints.down('sm')]: {
      '&:not(:last-of-type)': {
        borderBottom: `1px solid ${theme.palette.divider}`
      }
    }
  },
  titleWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  label: {
    marginLeft: theme.spacing(1)
  },
  overline: {
    marginTop: theme.spacing(1)
  }
}));

const Statistics = props => {
  const { className, ...rest } = props;

  const classes = useStyles();
  const [statistics, setStatistics] = useState(null);

  useEffect(() => {
    let mounted = true;

    const fetchStatistics = () => {
      axios.get('/api/users/revenue').then(response => {
        if (mounted) {
          setStatistics(response.data);
        }

      });
    };

    fetchStatistics();

    return () => {
      mounted = false;
    };
  }, []);

  if (!statistics) {
    return null;
  }

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Grid
        alignItems="center"
        container
        justify="space-between"
      >
        <Grid
          className={classes.item}
          item
          md={4}
          sm={6}
          xs={12}
        >
          <Typography variant="h2">${statistics.total_sales}</Typography>
          <Typography
            className={classes.overline}
            variant="overline"
          >
            Total Sales
          </Typography>
        </Grid>
        <Grid
          className={classes.item}
          item
          md={4}
          sm={6}
          xs={12}
        >
          <Typography variant="h2">{statistics.total_products}</Typography>
          <Typography
            className={classes.overline}
            variant="overline"
          >
            Total products
          </Typography>
        </Grid>
        <Grid
          className={classes.item}
          item
          md={4}
          sm={6}
          xs={12}
        >
          <Typography variant="h2">{statistics.total_users}</Typography>
          <Typography
            className={classes.overline}
            variant="overline"
          >
            Total Users
          </Typography>
        </Grid>

      </Grid>
    </Card>
  );
};

Statistics.propTypes = {
  className: PropTypes.string
};

export default Statistics;
