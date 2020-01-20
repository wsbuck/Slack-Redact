import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  VERIFY_SUCCESS,
  VERIFY_REQUEST,
} from '../actions/auth';

import { AuthActionTypes, AuthState } from '../types';

const initialAuthState: AuthState = {
  isAuthenticated: false,
  isLoggingIn: false,
  isLoggingOut: false,
  isVerifying: false,
  loginError: false,
  logoutError: false,
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
    default:
      return state;
  }
};
