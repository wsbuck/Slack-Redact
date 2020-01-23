import React from "react";
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Elements, StripeProvider } from 'react-stripe-elements';

import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import Subscribe from "./Subscribe";
import PrivateRoute from "./PrivateRoute";

import { RootState } from "../redux/types";

import "../assets/App.css";

function App() {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const isSubscribed = useSelector(
    (state: RootState) => state.auth.isSubscribed
  );
  const stripeKey = process.env.REACT_APP_STRIPE_PUBLISHABLE || 'none';

  return (
    <div className="App">
      <Switch>
        <PrivateRoute
          exact
          path='/'
          isAuthenticated={isAuthenticated}
          isSubscribed={isSubscribed}
        >
          <Home />
        </PrivateRoute>
        <Route exact path='/login'>
          <Login />
        </Route>
        <Route exact path='/signup'>
          <SignUp />
        </Route>
        <Route exact path='/subscribe'>
          <StripeProvider apiKey={stripeKey}>
            <Elements>
              <Subscribe />
            </Elements>
          </StripeProvider>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
