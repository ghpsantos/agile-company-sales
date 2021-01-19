import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {},
  top: {marginTop:10}
}));

const Header = props => {
  const { className, user, ...rest } = props;

  const classes = useStyles();

  return (
    <div
      {...rest}
      className={classes.content}
    >
      <Typography
        component="h2"
        gutterBottom
        variant="overline"
      >
        User Sales Details
      </Typography>
      <Typography className={classes.top}
        component="h1"
        variant="h3"
      >
        Name: {user.name}

      </Typography>
      <Typography className={classes.top}
        component="h1"
        variant="h3"
      >
        User Name: {user.username}

      </Typography>

      <Typography className={classes.top}
        component="h1"
        variant="h3"
      >
        Phone: {user.number}

      </Typography>

      <Typography className={classes.top}
        component="h1"
        variant="h3"
      >

        Sales: {user.total_amount}

      </Typography>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string
};

export default Header;
