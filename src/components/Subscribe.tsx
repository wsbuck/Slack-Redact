import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { CardElement, injectStripe } from 'react-stripe-elements';

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';

import { RootState } from '../redux/types';

const useStyles = makeStyles((theme: Theme) => createStyles({
    paper: {
      marginTop: 100,
      display: 'flex',
      padding: 20,
      flexDirection: 'column',
      alignItems: 'center'
    },
    cardDetails: {
      marginTop: 20,
      marginBottom: 20,
      width: '100%',
    },
  })
);

function Subscribe() {
  const dispatch = useDispatch();
  const classes = useStyles({});
  const isSubscribed = useSelector((state: RootState) => state.auth.isSubscribed);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    console.log('submit');
  }

  if (isSubscribed) {
    return <Redirect to='/' />;
  } else {
    return (
      <Container component='main' maxWidth='xs'>
        <Paper className={classes.paper}>
          <Typography component='h1' variant='h5'>
            Subscribe
          </Typography>
          <Typography variant='body1'>
            Please enter your credit card information into the secure form
            below. There is a one time payment required for use of Slack Redact.
          </Typography>
          <CardElement className={classes.cardDetails} />
          <Button
            onClick={handleSubmit}
            type='submit'
            variant='contained'
            fullWidth
            color='primary'
          >
            Subscribe
          </Button>
        </Paper>
      </Container>
    );
  }
}

export default injectStripe(Subscribe);
