import React from "react";
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Home from "./Home";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";

import { RootState } from "../redux/types";

import "../assets/App.css";

function App() {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  return (
    <div className="App">
      <Switch>
        <PrivateRoute exact path='/' isAuthenticated={isAuthenticated}>
          <Home />
        </PrivateRoute>
        <Route path='/login'>
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
