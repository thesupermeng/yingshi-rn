import React from 'react'
import { Provider } from "react-redux";
import Nav from './src/navigation/nav'
import { store, persistor } from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { API_DOMAIN } from './src/constants';
import { SuggestResponseType, VodCarousellResponseType, VodPlaylistResponseType, } from './src/types/ajaxTypes';

export default function App() {
  const queryClient = new QueryClient();

  queryClient.prefetchQuery({
    queryKey: ["recommendationList"],
    queryFn: () =>
      fetch(`${API_DOMAIN}vod/v1/vod?by=hits_day`)
        .then(response => response.json())
        .then((json: SuggestResponseType) => {
          return json.data.List
        }),
    initialData: [],
  })

  queryClient.prefetchQuery({
    queryKey: ["HomePage", 0],
    queryFn: () =>
      fetch(`${API_DOMAIN}page/v1/typepage?id=0`)
        .then(response => response.json())
        .then((json: VodCarousellResponseType) => {
          return json.data
        })
  })

  queryClient.prefetchQuery({
    queryKey: ["vodPlaylist"],
    queryFn: () =>
      fetch(`https://yingshi.tv/index.php/ajax/data?mid=3&page=2&limit=18&by=id`)
        .then(response => response.json())
        .then((json: VodPlaylistResponseType) => {
          return Object.values(json.list)
        })
  })
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