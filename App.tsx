import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Provider } from 'react-redux';
import Nav from './src/navigation/nav';
import { store, persistor } from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useNavigation, useTheme } from '@react-navigation/native';
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
import VipModal from './src/components/modal/vipModal';

export default function App() {

  const { colors, textVariants, spacing, icons } = useTheme();
  const [showVIPOverlay, setShowVIPOverlay] = useState(true);
  // const navigation = useNavigation();

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

  const hideVipPrompt = useCallback(() => {
    setShowVIPOverlay(false);
  }, [])

  return (
    <>
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
      {showVIPOverlay &&
        <View style={{ height: '100%', width: '100%', backgroundColor: 'rgba(0, 0, 0, 0.8)', position: 'absolute' }}>
          <VipModal>
            <View style={{ backgroundColor: 'rgba(34, 34, 34, 0.9)', marginTop: 40, borderRadius: 12, paddingTop: 36, paddingBottom: 26, paddingHorizontal: 28 }}>
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 20, fontWeight: '500', color: '#E2820E', paddingTop: 20, paddingVertical: 12 }}>VIP会员奖励，等你来领取！</Text>
                <Text style={{ color: 'white', padding: 2, fontSize: 16, fontWeight: '300' }}>受邀用户通过邀请码注册即可</Text>
                <Text style={{ color: 'white', padding: 2, fontSize: 16, fontWeight: '300' }}>领取15天VIP会员</Text>
                <View style={{ paddingTop: 22, alignItems: 'center' }}>
                  <TouchableOpacity onPress={() => hideVipPrompt()} style={{ backgroundColor: '#F37021', paddingVertical: 12, paddingHorizontal: 38, borderRadius: 8 }}>
                    <Text style={{ color: colors.text, fontWeight: '600', fontSize: 16 }}>立即领取</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{ paddingTop: 16 }}>
                    <Text style={{ color: '#9C9C9C', fontSize: 16 }}>取消</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </VipModal>
        </View>
      }
    </>
  );
}
