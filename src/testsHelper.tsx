import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './redux/store';


export default function providerWrapper(component: any) {
  const store = configureStore({});
  return (
    <Provider store={store}>
      {component}
    </Provider>);
}
