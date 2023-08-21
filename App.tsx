import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import Nav from './src/navigation/nav';
import { store, persistor } from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  API_DOMAIN,
  API_DOMAIN_TEST,
  API_DOMAIN_LOCAL,
  APPSFLYER_DEVKEY,
  UMENG_CHANNEL,
} from './src/utility/constants';
import {
  BottomNavTabs,
  BottomNavTabsResponse,
  FilterOptionsResponseType,
  MiniVideo,
  NavOptionsResponseType,
  SuggestResponseType,
  VodCarousellResponseType,
  VodPlaylistResponseType,
  LiveTVStationsResponseType,
} from './src/types/ajaxTypes';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import appsFlyer from 'react-native-appsflyer';
import Api from './src/Sports/middleware/api';
import { Url } from './src/Sports/middleware/url';
import { StatusBar } from 'react-native';

export default function App() {
  appsFlyer.initSdk(
    {
      devKey: APPSFLYER_DEVKEY,
      isDebug: false,
      //appId: '41*****44',
      onInstallConversionDataListener: true,
      onDeepLinkListener: true,
      timeToWaitForATTUserAuthorization: 10,
    },
    result => {
      // console.log(result);
      const eventName = 'open_app';
      const eventValues = {
        ip: '1',
      };

      appsFlyer.logEvent(
        eventName,
        eventValues,
        res => {
          // console.log(res);
        },
        err => {
          console.error(err);
        },
      );
    },
    error => {
      console.error(error);
    },
  );

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 300000,
      },
    },
  });

  queryClient.prefetchQuery({
    queryKey: ['recommendationList'],
    queryFn: () =>
      fetch(`${API_DOMAIN}vod/v1/vod?by=hits_day`)
        .then(response => response.json())
        .then((json: SuggestResponseType) => {
          return json.data.List;
        }),
  });

  queryClient.prefetchQuery({
    queryKey: ['HomePage', 0],
    queryFn: () =>
      fetch(`${API_DOMAIN}page/v1/typepage?id=0`)
        .then(response => response.json())
        .then((json: VodCarousellResponseType) => {
          return json;
        }),
  });

  queryClient.prefetchQuery({
    queryKey: ['filterOptions'],
    queryFn: () =>
      fetch(`${API_DOMAIN}type/v1/type`)
        .then(response => {
          return response.json();
        })
        .then((json: FilterOptionsResponseType) => {
          return json.data;
        }),
    staleTime: Infinity,
  });

  queryClient.prefetchQuery({
    queryKey: ['HomePageNavOptions'],
    queryFn: () =>
      fetch(`${API_DOMAIN}nav/v1/navItems`, {})
        .then(response => response.json())
        .then((json: NavOptionsResponseType) => {
          return json.data;
        }),
    staleTime: Infinity,
  });

  queryClient.prefetchQuery({
    queryKey: ['LiveTVStations'],
    queryFn: () =>
      fetch(`${API_DOMAIN}live/v1/livestations`, {})
        .then(response => response.json())
        .then((json: LiveTVStationsResponseType) => {
          return json.data;
        }),
    staleTime: Infinity,
  });

  const fetchPlaylist = (page: number) =>
    fetch(`${API_DOMAIN}topic/v1/topic?page=${page}`)
      .then(response => response.json())
      .then((json: VodPlaylistResponseType) => {
        return Object.values(json.data.List);
      });

  queryClient.prefetchInfiniteQuery(['vodPlaylist'], ({ pageParam = 1 }) =>
    fetchPlaylist(pageParam),
  );

  queryClient.prefetchInfiniteQuery(['vodPlaylist'], ({ pageParam = 1 }) => fetchPlaylist(pageParam));

  const fetchVods = (page: number) => fetch(
    `${API_DOMAIN}miniVod/v1/miniVod?page=${page}&limit=100`,
  )
    .then(response => response.json())
    .then((json: MiniVideoResponseType) => {
      return json.data.List
    })

  type MiniVideoResponseType = {
    data: {
      List: Array<MiniVideo>;
    };
  };
  queryClient.prefetchInfiniteQuery(['watchAnytime'], ({ pageParam = 1 }) =>
    fetchVods(pageParam),
  );

  queryClient.prefetchQuery({
    queryKey: ['matchesNavOptions'],
    queryFn: () =>
      Api.call(Url.sportTypes, {}, 'GET').then(
        (
          res,
        ): {
          has_submenu: boolean;
          ids: Array<number>;
          type: string;
        }[] => {
          return res.data;
        },
      ),
    staleTime: Infinity,
  });

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
