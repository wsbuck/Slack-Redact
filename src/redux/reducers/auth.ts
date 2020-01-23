import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  VERIFY_SUCCESS,
  VERIFY_REQUEST,
  SUBSCRIBE_REQUEST,
  SUBSCRIBE_SUCCESS,
  SUBSCRIBE_FAILURE,
} from '../actions/auth';

import { AuthActionTypes, AuthState } from '../types';

const initialAuthState: AuthState = {
  isAuthenticated: false,
  isSubscribed: false,
  isSubscribing: false,
  isLoggingIn: false,
  isLoggingOut: false,
  isVerifying: false,
  loginError: false,
  logoutError: false,
  signupError: false,
  user: {},
};

export const auth = (state=initialAuthState, action: AuthActionTypes) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoggingIn: true,
        loginError: false
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggingIn: false,
        loginError: false,
        signupError: false,
        isAuthenticated: true,
        user: action.user
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoggingIn: false,
        isAuthenticated: false,
        loginError: true
      };
    case SIGNUP_REQUEST:
      return {
        ...state,
        isLoggingIn: true,
        signupError: false
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        isLoggingIn: false,
        isAuthenticated: false,
        signupError: true,
      };
    case LOGOUT_REQUEST:
      return {
        ...state,
        isLogginOut: true,
        logoutError: false
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isLoggingOut: false,
        isAuthenticated: false,
        user: {}
      }
    case LOGOUT_FAILURE:
      return {
        ...state,
        isLogginOut: false,
        logoutError: true
      }
    case VERIFY_REQUEST:
      return {
        ...state,
        isVerifying: true,
        verifyingError: false
      };
    case VERIFY_SUCCESS:
      return {
        ...state,
        isVerifying: false
      };
    case SUBSCRIBE_REQUEST:
      return {
        ...state,
        isSubscribing: true
      };
    case SUBSCRIBE_SUCCESS:
      return {
        ...state,
        isSubscribed: true,
        isSubscribing: false,
      };
    case SUBSCRIBE_FAILURE:
      return {
        ...state,
        isSubscribing: false,
        isSubscribed: false
      };
    default:
      return state;
  }
};
