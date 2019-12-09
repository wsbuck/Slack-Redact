import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import InfoButton from './InfoButton';

const useStyles = makeStyles(theme => ({
  root: {
    // maxWidth: '100%',
    width: 600,
    textAlign: 'center',
    margin: theme.spacing(2),
  },
  info: {
    textAlign: 'right',
    height: 20,
    marginRight: theme.spacing(3),
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Grid container justify='center' spacing={2}>
          <Grid className={classes.info} item xs={12}>
            <InfoButton />
          </Grid>
          <Grid item xs={12}>
            <Typography variant='h3'>
              Redact your JSON
            </Typography>
          </Grid>
        </Grid>
    </div>
  );
}

export default Header;