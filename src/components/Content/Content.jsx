/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme } from '@material-ui/core/styles';
import { AppBar } from '@material-ui/core';


//import mainPhoto from './photo1.jpg';
import './index.scss';

const theme = createMuiTheme ({
  spacing: 4,
});

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',  
    padding: '80px 0 0',  
    '& > *': {
      margin: theme.spacing(1),
      width: 800,
      height: 1100,
    },
  },

  resume: {
    margin: "auto",    
  },

  Box: {
    height: 260,
    width: "auto",
    backgroundColor: "#373a41",      
  },

  Paper: {
    position: "relative",
  },

  absoluterow: {
    position: 'absolute',
    top: 0,
    left: 'auto',
    right: 0,
    height: 100,
    width: "100%",
    backgroundColor: "rgba(192, 167, 40, 0.71)",
  },

  main_photo: {
    //background: "url(mainPhoto)",
  }

}));

const Content = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root + " " + classes.resume}>
       <Paper className={classes.Paper} elevation={6}>
        <Grid container spacing={0}>
          <Grid item xs={12} sm={3}>
            <Box className={classes.Box + " " + classes.main_photo}>xs=12 sm=6</Box>
          </Grid>

          <Grid item  sm={2} >
            <Box className={classes.Box} display="none"></Box>
          </Grid>

          <Grid item xs={12} sm={7}>
            <Box className={classes.Box}>xs=12 sm=6</Box>
          </Grid>

          <Grid item xs={12} sm={3}>
            <Box className={classes.Box}>xs=12 sm=6</Box>
          </Grid>

          <Grid item  sm={2} >
            <Box className={classes.Box} display="none"></Box>
          </Grid>

          <Grid item xs={12} sm={7}>
            <Box className={classes.Box}>xs=12 sm=6</Box>
          </Grid>
        </Grid>
       </Paper>
    </div>
  );
};

Content.propTypes = {
  };

export default Content;
