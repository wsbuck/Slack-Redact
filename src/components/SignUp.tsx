import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import { RootState } from '../redux/types';
import { createUser } from '../redux/actions';

const useStyles = makeStyles((theme: Theme) => (
  createStyles({
    paper: {
      marginTop: 100,
      display: 'flex',
      padding: 20,
      flexDirection: 'column',
      alignItems: 'center'
    },
    form: {
      width: '100%',
    },
    errorText: {
      color: '#f50057',
      marginBottom: 5,
      textAlign: 'center'
    },
  })
));

function SignUp(props: any) {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const isLoggingIn = useSelector((state: RootState) => state.auth.isLoggingIn);
  const signupError = useSelector((state: RootState) => state.auth.signupError);
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const dispatch = useDispatch();

  async function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault();

    if (password1 !== password2) {
      setError(true);
      setErrorMessage('Passwords do not match!');
    } else if (password1.length < 8) {
      setError(true);
      setErrorMessage('Password must be at least 8 characters.');
    } else {
      dispatch(createUser(email, password1));
    }
  }

  if (isAuthenticated) {
    return (<Redirect to='/' />);
  } else {
    return (
      <Container component='main' maxWidth='xs'>
        <Paper className={classes.paper}>
          <Typography component='h1' variant='h5'>
            Sign Up
          </Typography>
          {error && (
            <Typography component='p' className={classes.errorText}>
              { errorMessage }
            </Typography>
          )}
          {signupError && (
            <Typography component='p' className={classes.errorText}>
              There was an error creating an account
            </Typography>
          )}
          <form onSubmit={handleSubmit} className={classes.form}>
            <TextField
              variant='outlined'
              margin='normal'
              fullWidth
              id='name'
              label='Full Name / Organization'
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
            <TextField
              variant='outlined'
              margin='normal'
              fullWidth
              id='email'
              label='Email Address'
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <TextField
              variant='outlined'
              margin='normal'
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              value={password1}
              onChange={e => setPassword1(e.target.value)}
              required
            />
            <TextField
              variant='outlined'
              margin='normal'
              fullWidth
              name='password2'
              label='Repeat Passsword'
              type='password'
              id='password2'
              value={password2}
              onChange={e => setPassword2(e.target.value)}
              required
            />
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              onClick={handleSubmit}
              disabled={isLoggingIn}
            >
              {isLoggingIn ? <CircularProgress size={24} /> : 'Sign Up'}
            </Button>
          </form>
          <p>Already have an account? <Link to='/login'>Sign In</Link></p>
        </Paper>
      </Container>
    );

  }

}

export default SignUp;
