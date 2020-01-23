import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function PrivateRoute({
  children, isAuthenticated, isSubscribed, ...rest
}: any) {
  return (
    <Route
      {...rest}
      render={({ location }) => (
        isAuthenticated && isSubscribed
        ? children
        : isAuthenticated
          ? (<Redirect to={{ pathname: '/subscribe', state: { from: location }}} />)
          : (<Redirect to={{ pathname: '/login', state: { from: location }}} />)

        // isAuthenticated
        // ? children
        // : (
        //   <Redirect
        //     to={{ pathname: '/login', state: { from: location }}}
        //   />
        // )
      )}
    />
  );
}
