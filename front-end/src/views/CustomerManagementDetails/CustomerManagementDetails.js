import React, { useEffect, useState} from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Tabs, Tab, Divider, colors } from '@material-ui/core';

import { Page } from 'components';
import { Header, Summary, Invoices, Logs } from './components';
import axios from '../../utils/axios';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  tabs: {
    marginTop: theme.spacing(3)
  },
  divider: {
    backgroundColor: colors.grey[300]
  },
  content: {
    marginTop: theme.spacing(3)
  }
}));

const CustomerManagementDetails = props => {
  const { match, history } = props;
  const classes = useStyles();
  const { id, tab } = match.params;
  const [user, setUser] = useState(false);

  useEffect(() => {
    let mounted = true;

    const fetchCustomer = () => {
      axios.get('/api/users/sales/'.concat(id)).then( response => {
        if (mounted) {
          setUser(response.data);
        }
      });
    };

    fetchCustomer();

  }, []);



  return (
    <Page
      className={classes.root}
      title="Sales Details"
    >

      {user && <Header user={user} />}
      <div className={classes.content}>
        {user && <Summary user={user} />}
      </div>

    </Page>
  );
};

CustomerManagementDetails.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

export default CustomerManagementDetails;
