/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme } from '@material-ui/core/styles';
import { AppBar } from '@material-ui/core';


import mainPhoto from './photo1.jpg';
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
    height: 100,
    width: "auto",         
  },

  Paper: {
    position: "relative",
  },

  absoluterow: {
    position: 'absolute',
    top: 292,
    left: 'auto',
    right: 0,
    display: "flex",
    height: 77,
    width: "100%",
    padding:" 10px 0 0",
    backgroundColor: "rgba(192, 167, 40, 0.71)",
  },

  main_photo: {
    background: `url(${mainPhoto})`,
    backgroundSize: "148%",
    backgroundPosition: "-84px -20px",
    height: "400px",
  },

  frontEnd: {
    background: "rgb(108,101,101)",
    background: `url(${mainPhoto})`,
    textAlign: "left",
    height: "17px",
    padding: "7px",
    fontSize: "14px",
    color: "#d2c166",
    backgroundPosition: "-36px -88px",
    backgroundSize: "1118px",
    backgroundRepeat: "no-repeat",
    
  },

  firstName: {
    textAlign: "left",
  },

  BoxBanner: {
    textAlign: "left",
    color: "white",
    fontSize: "10px",
    paddingRight: "15px",
  }

}));

const Content = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root + " " + classes.resume}>
       <Paper className={classes.Paper} elevation={6}>
        <Grid container spacing={0}>
          <Grid item xs={12} sm={4}>
            <Box className={classes.Box + " " + classes.main_photo}></Box>
          </Grid>

          <Grid item  sm={1} >
            <Box className={classes.Box} display="none"></Box>
          </Grid>

          <Grid item xs={12} sm={7}>
            <Box className={classes.Box}>
              <h1 className={classes.firstName} variant="h1">Presniakov <br/> Vladyslav</h1>
              <Box className={classes.Box + " " + classes.frontEnd}>FRONTEND DEVELOPER</Box>
              <h2 variant="h2">Hharkiv, Ukraine</h2>
            </Box>
          </Grid>
         
            <Grid item xs={12} sm={12} className={classes.absoluterow}>
              <Grid item xs={12} sm={4}>
                <Box className={classes.Box} item sm={1} >PROFESSIONAL<br/>---PROFILE</Box>
              </Grid>

             <Grid item  sm={1} >
                <Box className={classes.Box} display="none"></Box>
              </Grid>

              <Grid item xs={12} sm={7}>
                <Box className={classes.BoxBanner}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                   
                </Box>
              </Grid>
            </Grid>          
        </Grid>
       </Paper>
    </div>
  );
};

Content.propTypes = {
  };

export default Content;
