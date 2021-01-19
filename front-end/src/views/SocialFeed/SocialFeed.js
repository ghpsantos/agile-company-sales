import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';

import axios from 'utils/axios';
import { Page, PostCard, AddPost } from 'components';
import { Header } from './components';
import Results from '../CustomerManagementList/components/Results';

const useStyles = makeStyles(theme => ({
  root: {
    width: theme.breakpoints.values.lg,
    maxWidth: '100%',
    margin: '0 auto',
    padding: theme.spacing(3)
  },
  newPost: {
    marginTop: theme.spacing(3)
  },
  posts: {
    marginTop: theme.spacing(3)
  },
  post: {
    marginBottom: theme.spacing(3)
  }
}));

const SocialFeed = () => {
  const classes = useStyles();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    let mounted = true;

    const fetchPosts = () => {
      axios.get('/api/users').then(response => {
        if (mounted) {
          setUsers(response.data);
        }
      });
    };

    fetchPosts();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <Page
      className={classes.root}
      title="Users"
    >
      <Results className={classes.results} customers={users} />

      {/*<Header />*/}
      {/*<AddPost className={classes.newPost} />*/}
      {/*<div className={classes.posts}>*/}
      {/*  {posts.map(post => (*/}
      {/*    <PostCard*/}
      {/*      className={classes.post}*/}
      {/*      key={post.id}*/}
      {/*      post={post}*/}
      {/*    />*/}
      {/*  ))}*/}
      {/*</div>*/}
    </Page>
  );
};

export default SocialFeed;
