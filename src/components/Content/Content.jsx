/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import './index.scss';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',  
    padding: '80px 0 0',  
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(80),
      height: theme.spacing(100),
    },
  },
  resume: {
    margin: "auto",
  },
  topSection: {
    height: 240,
    width: 180,
    display: 'flex',
    flexWrap: 'wrap', 
  }
}));

const Content = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root + " " + classes.resume}>
       <Paper elevation={3}>
        <Grid container className={classes.topSection}>
          <Grid className={classes.topSection} justify="center" ></Grid>
          <Grid className={classes.topSection} justify="center" ></Grid>
        </Grid>
       </Paper>
    </div>
  );
};

Content.propTypes = {
  };

export default Content;
