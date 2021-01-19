import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/styles';

import { Page } from 'components';
import {
  Statistics
} from './components';

import Results from '../UsersFeed/components/Results';
import axios from '../../utils/axios';

const useStyles = makeStyles(theme => ({
  root: {
    width: theme.breakpoints.values.lg,
    maxWidth: '100%',
    margin: '0 auto',
    padding: theme.spacing(3)
  },
  statistics: {
    marginTop: theme.spacing(3)
  },
  notifications: {
    marginTop: theme.spacing(6)
  },
  projects: {
    marginTop: theme.spacing(6)
  },
  todos: {
    marginTop: theme.spacing(6)
  },
  results: {
    marginTop: theme.spacing(6)
  }

}));

const Overview = () => {
  const classes = useStyles();

  const [users, setUsers] = useState([]);


  useEffect(() => {
    let mounted = true;

    const fetchUsers = () => {
      axios.get('/api/users/top').then(response => {
        if (mounted) {
          setUsers(response.data);
        }
      });
    };

    fetchUsers();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <Page
      className={classes.root}
      title="Home"
    >
      <Results className={classes.results} users={users} />
      <Statistics className={classes.statistics} />
    </Page>
  );
};

export default Overview;
