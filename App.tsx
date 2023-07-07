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
import { FilterOptionsResponseType, NavOptionsResponseType, SuggestResponseType, VodCarousellResponseType, VodPlaylistResponseType, } from './src/types/ajaxTypes';
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 300000,
      },
    },
  })

  queryClient.prefetchQuery({
    queryKey: ["recommendationList"],
    queryFn: () =>
      fetch(`${API_DOMAIN}vod/v1/vod?by=hits_day`)
        .then(response => response.json())
        .then((json: SuggestResponseType) => {
          return json.data.List
        })
  });

  queryClient.prefetchQuery({
    queryKey: ["HomePage", 0],
    queryFn: () =>
      fetch(`${API_DOMAIN}page/v1/typepage?id=0`)
        .then(response => response.json())
        .then((json: VodCarousellResponseType) => {
          return json
        })
  });

  queryClient.prefetchQuery({
    queryKey: ["filterOptions"],
    queryFn: () => fetch(`${API_DOMAIN}type/v1/type`)
      .then(response => {
        return response.json()
      })
      .then((json: FilterOptionsResponseType) => {
        return json.data
      })
  });

  queryClient.prefetchQuery({
    queryKey: ["HomePageNavOptions"],
    queryFn: () =>
      fetch(`${API_DOMAIN}nav/v1/navItems`, {})
        .then(response => response.json())
        .then((json: NavOptionsResponseType) => {
          return json.data
        })
  });

  const fetchPlaylist = (page: number) => fetch(`${API_DOMAIN}topic/v1/topic?page=${page}`)
    .then(response => response.json())
    .then((json: VodPlaylistResponseType) => {
      // console.log("PREFETCHED!")
      return Object.values(json.data.List)
    })

  queryClient.prefetchInfiniteQuery(['vodPlaylist'], ({ pageParam = 1 }) => fetchPlaylist(pageParam));

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <BottomSheetModalProvider>
              <Nav />
            </BottomSheetModalProvider>
          </GestureHandlerRootView>
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
}