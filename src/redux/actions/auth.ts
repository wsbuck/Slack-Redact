import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

import { myFirebase } from '../../firebase/firebase';
import { charge } from '../../firebase/firebase';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
// export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

export const SUBSCRIBE_REQUEST = 'SUBSCRIBE_REQUEST';
export const SUBSCRIBE_SUCCESS = 'SUBSCRIBE_SUCCESS';
export const SUBSCRIBE_FAILURE = 'SUBSCRIBE_FAILURE';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

export const VERIFY_REQUEST = 'VERIFY_REQUEST';
export const VERIFY_SUCCESS = 'VERIFY_SUCCESS';

const requestLogin = () => {
  return {
    type: LOGIN_REQUEST,
  };
};


const receiveLogin = (user: any) => {
  return {
    type: LOGIN_SUCCESS,
    user
  };
};

const loginError = () => {
  return {
    type: LOGIN_FAILURE
  };
};

const requestSignup = () => {
  return {
    type: SIGNUP_REQUEST,
  };
};

const signupError = () => {
  return {
    type: SIGNUP_FAILURE
  };
};

const requestSubscribe = () => {
  return {
    type: SUBSCRIBE_REQUEST,
  };
};

const subscribeSuccess = () => {
  return {
    type: SUBSCRIBE_SUCCESS,
  };
};

const subscribeError = () => {
  return {
    type: SUBSCRIBE_FAILURE,
  };
};

const requestLogout = () => {
  return {
    type: LOGOUT_REQUEST
  };
};

const receiveLogout = () => {
  return {
    type: LOGOUT_SUCCESS
  };
};

const logoutError = () => {
  return {
    type: LOGOUT_FAILURE
  };
};

const verifyRequest = () => {
  return {
    type: VERIFY_REQUEST
  };
};

const verifySuccess = () => {
  return {
    type: VERIFY_SUCCESS
  };
};

export const loginUser = (email: string, password: string) => (
  dispatch: ThunkDispatch<{}, {}, AnyAction>
  ) => {
  dispatch(requestLogin());
  myFirebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(user => {
      dispatch(receiveLogin(user));
    })
    .catch(error => {
      console.error(error);
      dispatch(loginError());
    });
};

export const createUser = (email: string, password: string) => (
  dispatch: ThunkDispatch<{}, {}, AnyAction>
) => {
  dispatch(requestSignup());
  myFirebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(user => {
      dispatch(receiveLogin(user));
    })
    .catch(error => {
      console.log(error);
      dispatch(signupError());
    });
};

export const subscribeUser = (userID: string, token: any) => (
  dispatch: ThunkDispatch<{}, {}, AnyAction>
) => {
  dispatch(requestSubscribe());
  charge({ tokenID: token.id, userID: userID })
    .then((status) => {
      if (status) {
        dispatch(subscribeSuccess());
      }
    })
    .catch((err) => {
      console.error(err);
      dispatch(subscribeError());
    });
};

export const logoutUser = () => (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
  dispatch(requestLogout());
  myFirebase
    .auth()
    .signOut()
    .then(() => {
      dispatch(receiveLogout());
    })
    .catch(error => {
      console.error(error);
      dispatch(logoutError());
    });
};

export const verifyAuth = () => (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
  dispatch(verifyRequest());
  myFirebase.auth().onAuthStateChanged(user => {
    if (user !== null) {
      dispatch(receiveLogin(user));
    }
    dispatch(verifySuccess());
  })
}
