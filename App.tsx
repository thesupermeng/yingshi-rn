import React from 'react'
import { Provider } from "react-redux";
import Nav from './src/navigation/nav'
import { store, persistor } from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

export default function App() {
  const queryClient = new QueryClient()
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <Nav />
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
}