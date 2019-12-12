import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import hfla from '../assets/hfla.png';
import bid from '../assets/bid.png';

const useStyles = makeStyles(theme => ({
  root: {
    margin: 'auto',
    width: 600,
    padding: theme.spacing(2),
  },
  imageContainer: {
    padding: theme.spacing(2),
    justifyContent: 'center',
    alignContent: 'center',
  },
  image: {
    width: 120,
    maxWidth: '100%',
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Grid container justify='center' spacing={2}>
        <Grid className={classes.imageContainer} container item sm={6}>
          <img className={classes.image} src={hfla} alt="Hack for LA" />
        </Grid>
        <Grid className={classes.imageContainer} container item sm={6}>
          <img className={classes.image} src={bid} alt="Business Improvement Development" />
        </Grid>
        <Grid item xs={12}>
          <Typography variant='caption'>
            created by <a href="https://williambuck.dev">William Buck</a> 
            &nbsp;and <a href="https://www.linkedin.com/in/bonnieawolfe/">Bonnie Wolfe</a>
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Footer;
