import React from 'react'
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { NavigationContainer } from '@react-navigation/native';
import Nav from './src/navigation/nav'
import reducers from './src/redux/reducers/combineReducer';
var middlewares = applyMiddleware(thunk);
const store = createStore(reducers, middlewares);

export default function App() {
  return (
    <Provider store={store}>
      <Nav />
    </Provider>
  );
}