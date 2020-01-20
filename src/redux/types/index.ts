import rootReducer from '../reducers';

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

export interface AuthState {
  isAuthenticated: boolean;
}

interface RequestLoginAction {
  type: typeof LOGIN_REQUEST,
  user: void;
}

interface ReceiveLoginAction {
  type: typeof LOGIN_SUCCESS,
  user: any;
}

interface LoginErrorAction {
  type: typeof LOGIN_FAILURE,
  user: void;
}

interface RequestLogoutAction {
  type: typeof LOGOUT_REQUEST;
  user: void;
}

interface ReceiveLogoutAction {
  type: typeof LOGOUT_SUCCESS;
  user: void;
}

interface LogoutErrorAction {
  type: typeof LOGOUT_FAILURE;
  user: void;
}

interface VerifyRequestAction {
  type: typeof VERIFY_REQUEST;
  user: void;
}

interface VerifySuccessAction {
  type: typeof VERIFY_SUCCESS;
  user: void;
}

export type AuthActionTypes = (
  RequestLoginAction |
  ReceiveLoginAction |
  LoginErrorAction |
  RequestLogoutAction |
  ReceiveLogoutAction |
  LogoutErrorAction |
  VerifyRequestAction |
  VerifySuccessAction
);

export type RootState = ReturnType<typeof rootReducer>;
