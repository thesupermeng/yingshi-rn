import React from 'react'
import { Provider } from "react-redux";
import Nav from './src/navigation/nav'
import { store } from './src/redux/store';
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