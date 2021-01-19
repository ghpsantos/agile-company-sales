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
  // const [sales, setSales] = useState([]);

  useEffect(() => {
    let mounted = true;

    const fetchCustomer = () => {
      // axios.get('/api/management/customers/1/summary').then(response => {
      axios.get('/api/users/sales/'.concat(id)).then( response => {
        if (mounted) {
          setUser(response.data);
        }
      });
    };

    fetchCustomer();

    // return () => {
    //   mounted = false;
    // };
  }, []);


  // console.log(user)

  // const tabs = [
  //   { value: 'summary', label: 'Summary' },
  //   // { value: 'invoices', label: 'Invoices' },
  //   // { value: 'logs', label: 'Logs' }
  // ];

  // if (!tab) {
  //   return <Redirect to={`/management/customers/${id}/summary`} />;
  // }
  //
  // if (!tabs.find(t => t.value === tab)) {
  //   return <Redirect to="/errors/error-404" />;
  // }

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
