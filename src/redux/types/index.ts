import rootReducer from '../reducers';

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
  SUBSCRIBE_FAILURE,
  SUBSCRIBE_SUCCESS,
  SUBSCRIBE_REQUEST,
} from '../actions/auth';

export interface AuthState {
  isAuthenticated: boolean;
  isSubscribed: boolean;
  isSubscribing: boolean;
  isLoggingIn: boolean;
  isLoggingOut: boolean;
  isVerifying: boolean;
  loginError: boolean;
  logoutError: boolean;
  signupError: boolean;
  user: object;
};

interface RequestLoginAction {
  type: typeof LOGIN_REQUEST;
  user: void;
}

interface ReceiveLoginAction {
  type: typeof LOGIN_SUCCESS;
  user: any;
}

interface LoginErrorAction {
  type: typeof LOGIN_FAILURE;
  user: void;
}

interface RequestSignupAction {
  type: typeof SIGNUP_REQUEST;
  user: void;
}

interface SignupErrorAction {
  type: typeof SIGNUP_FAILURE;
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

interface SubscribeSuccessAction {
  type: typeof SUBSCRIBE_SUCCESS;
  user: void;
}

interface RequestSubscribeAction {
  type: typeof SUBSCRIBE_REQUEST;
  user: void;
}

interface SubscribeErrorAction {
  type: typeof SUBSCRIBE_FAILURE;
  user: void;
}

export type AuthActionTypes = (
  RequestLoginAction |
  ReceiveLoginAction |
  LoginErrorAction |
  RequestSignupAction |
  SignupErrorAction |
  RequestLogoutAction |
  ReceiveLogoutAction |
  LogoutErrorAction |
  VerifyRequestAction |
  VerifySuccessAction |
  SubscribeSuccessAction |
  SubscribeErrorAction |
  RequestSubscribeAction
);

export type RootState = ReturnType<typeof rootReducer>;
