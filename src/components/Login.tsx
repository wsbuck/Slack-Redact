import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';

import { loginUser } from '../redux/actions';
import { RootState } from '../redux/types';

import { addMessage } from '../firebase/firebase';
import { helloWorld } from '../firebase/firebase';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      marginTop: 100,
      display: 'flex',
      padding: 20,
      flexDirection: 'column',
      alignItems: 'center'
    },
    avatar: {
      marginLeft: 'auto',
      marginRight: 'auto',
      backgroundColor: '#f50057'
    },
    form: {
      marginTop: 1
    },
    errorText: {
      color: '#f50057',
      marginBottom: 5,
      textAlign: 'center'
    }
  })
);

function Login() {
  const dispatch = useDispatch();
  const classes = useStyles({});
  const loginError = useSelector((state: RootState) => state.auth.loginError);
  const isLoggingIn = useSelector((state: RootState) => state.auth.isLoggingIn);
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event: React.FormEvent): void {
    event.preventDefault();
    dispatch(loginUser(email, password));
    helloWorld().then(console.log);
    addMessage({ text: 'what up yo' }).then(console.log);
    // addMessage('what up yo').then(console.log);
  }

  if (isAuthenticated) {
    return <Redirect to='/' />;
  } else {
    return (
      <Container component='main' maxWidth='xs'>
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Sign in
          </Typography>
          {loginError && (
            <Typography component='p' className={classes.errorText}>
              Incorrect email or password.
            </Typography>
          )}
          <form onSubmit={handleSubmit}>
            <TextField
              variant='outlined'
              margin='normal'
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              onChange={e => setEmail(e.target.value)}
            />
            <TextField
              variant='outlined'
              margin='normal'
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              onChange={e => setPassword(e.target.value)}
            />
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              onClick={handleSubmit}
              disabled={isLoggingIn}
            >
              {isLoggingIn ? <CircularProgress size={24} /> : 'Sign In'}
            </Button>
          </form>
          <p>Need to create an account? <Link to='/signup'>Sign Up</Link></p>
        </Paper>
      </Container>
    );
  }
}

export default Login;
