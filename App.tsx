import React from 'react'
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { NavigationContainer } from '@react-navigation/native';
import Nav from './src/navigation/nav'
import reducers from './src/redux/reducers/combineReducer';
var middlewares = applyMiddleware(thunk);
const store = createStore(reducers, middlewares);
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

export default function App() {
  const queryClient = new QueryClient()
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Nav />
      </QueryClientProvider>
    </Provider>
  );
}