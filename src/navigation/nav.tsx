import React, {useState, useEffect} from 'react';
import {
  NavigationContainer,
  RouteProp,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/Home';
import PlaylistScreen from '../screens/Playlist/Playlist';
import ProfileScreen from '../screens/Profile/Profile';
import WatchAnytime from '../screens/WatchAnytime';
import SearchScreen from '../screens/Common/Search';
import PlayScreen from '../screens/Common/Play';
import LiveStationPlayScreen from '../screens/Common/LiveStationPlay';
// import VodCollectionScreen from '../screens/Profile/Collection/VodCollection';
// import PlaylistCollectionScreen from '../screens/Profile/Collection/PlaylistCollection';
import FeedbackScreen from '../screens/Profile/Feedback';

import MainCollectionScreen from '../screens/Profile/Collection/MainCollection';
import PlaylistDetailsScreen from '../screens/Playlist/PlaylistDetails';
import HistoryScreen from '../screens/Profile/History';
import LiveStationsScreen from '../screens/Common/LiveStations';
import AboutUsScreen from '../screens/Profile/AboutUs';
import PrivacyScreen from '../screens/Profile/Privacy';
import UserAgreementScreen from '../screens/Profile/UserAgreement';
import ConfigureScreen from '../screens/Profile/Configure';

import HomeTabIcon from '../../static/images/home_tab.svg';
import HomeActiveTabIcon from '../../static/images/home_tab_active.svg';
import PlaylistTabIcon from '../../static/images/playlist_tab.svg';
import PlaylistActiveTabIcon from '../../static/images/playlist_tab_active.svg';
import ProfileTabIcon from '../../static/images/profile_tab.svg';
import ProfileActiveTabIcon from '../../static/images/profile_tab_active.svg';
import WatchAnytimeTabIcon from '../../static/images/video_tab.svg';
import WatchAnytimeActiveTabIcon from '../../static/images/video_tab_active.svg';
import CatalogScreen from '../screens/Common/Catalog';
import ShortVodCollectionScreen from '../screens/Profile/Collection/shortVodCollection';
import SportsIcon from '../../static/images/sports.svg';
import MatchesScreen from '../Sports/screens/Sports/Matches';
import MatchDetailsScreen from '../Sports/screens/Sports/MatchDetails';
import WatchCollectionScreen from '../../src/screens/WatchCollection';

import {YingshiDarkTheme, YingshiLightTheme} from '../utility/theme';
import {
  HomeTabParamList,
  PlaylistTabParamList,
  ProfileTabParamList,
  RootStackParamList,
  WatchAnytimeTabParamList,
} from '../types/navigationTypes';
import RNBootSplash from 'react-native-bootsplash';
import {RootState} from '../redux/store';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import {StyleSheet, View} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {useAppSelector} from '../hooks/hooks';
import {QueryClient, useQuery} from '@tanstack/react-query';
import {API_DOMAIN, UMENG_CHANNEL} from '../../src/utility/constants';
import {BottomNavTabsResponse} from '../../src/types/ajaxTypes';
import {YSConfig} from '../../ysConfig';

export default () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  const HomeTab = createBottomTabNavigator<HomeTabParamList>();

  const themeReducer = useAppSelector(
    ({themeReducer}: RootState) => themeReducer,
  );
  const theme = themeReducer.theme ? YingshiDarkTheme : YingshiLightTheme;

  let hasNotch = DeviceInfo.hasNotch();

  let iconWidth = 22;
  if (hasNotch) {
    iconWidth = 22;
  }
  function HomeTabScreen() {
    return (
      <HomeTab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarStyle: hasNotch ? styles.navStyleWithNotch : styles.navStyle,
          tabBarLabelStyle: {
            paddingBottom: 6,
          },
          tabBarIcon: ({focused, color, size}) => {
            let icon: React.ReactNode;

            if (route.name === '首页') {
              icon = focused ? (
                <HomeActiveTabIcon
                  width={iconWidth}
                  color={theme.icons.activeNavIconColor}
                />
              ) : (
                <HomeTabIcon
                  width={iconWidth}
                  color={theme.icons.inactiveNavIconColor}
                />
              );
            } else if (route.name === '播单') {
              icon = focused ? (
                <PlaylistActiveTabIcon
                  width={iconWidth}
                  color={theme.icons.activeNavIconColor}
                />
              ) : (
                <PlaylistTabIcon
                  width={iconWidth}
                  color={theme.icons.inactiveNavIconColor}
                />
              );
            } else if (route.name === '我的') {
              icon = focused ? (
                <ProfileActiveTabIcon
                  width={iconWidth}
                  color={theme.icons.activeNavIconColor}
                />
              ) : (
                <ProfileTabIcon
                  width={iconWidth}
                  color={theme.icons.inactiveNavIconColor}
                />
              );
            } else if (route.name === '随心看') {
              icon = focused ? (
                <WatchAnytimeActiveTabIcon
                  width={iconWidth}
                  color={theme.icons.activeNavIconColor}
                />
              ) : (
                <WatchAnytimeTabIcon
                  width={iconWidth}
                  color={theme.icons.inactiveNavIconColor}
                />
              );
            } else if (route.name === '体育') {
              icon = focused ? (
                <SportsIcon
                  width={iconWidth}
                  color={theme.icons.activeNavIconColor}
                />
              ) : (
                <SportsIcon
                  width={iconWidth}
                  color={theme.icons.inactiveNavIconColor}
                />
              );
            }
            return icon;
          },
        })}>
        {YSConfig.instance.tabConfig != null && YSConfig.instance.len == 5 ? (
          <>
            <HomeTab.Screen name="首页" component={HomeScreen} />
            <HomeTab.Screen name="随心看" component={WatchAnytime} />
            <HomeTab.Screen name="体育" component={MatchesScreen} />
            <HomeTab.Screen name="播单" component={PlaylistScreen} />
            <HomeTab.Screen name="我的" component={ProfileScreen} />
          </>
        ) : (
          <>
            <HomeTab.Screen name="首页" component={HomeScreen} />
            <HomeTab.Screen name="随心看" component={WatchAnytime} />
            <HomeTab.Screen name="播单" component={PlaylistScreen} />
            <HomeTab.Screen name="我的" component={ProfileScreen} />
          </>
        )}
      </HomeTab.Navigator>
    );
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={theme} onReady={() => RNBootSplash.hide()}>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={({route}) => ({
            headerShown: false,
            autoHideHomeIndicator: true,
            animation: 'slide_from_right',
            // statusBarColor: theme.colors.background,
            navigationBarColor: theme.colors.background,
          })}>
          <Stack.Screen
            name="Home"
            component={HomeTabScreen}
            options={{orientation: 'portrait'}}
          />
          <Stack.Screen
            name="我的收藏"
            component={MainCollectionScreen}
            options={{orientation: 'portrait'}}
          />
          <Stack.Screen
            name="反馈"
            component={FeedbackScreen}
            options={{orientation: 'portrait'}}
          />
          <Stack.Screen
            name="播放"
            component={PlayScreen}
            initialParams={{vod_id: 1}}
            options={{orientation: 'all', navigationBarHidden: true}}
          />
          <Stack.Screen
            name="播放历史"
            component={HistoryScreen}
            options={{orientation: 'portrait'}}
          />
          <Stack.Screen
            name="关于我们"
            component={AboutUsScreen}
            options={{orientation: 'portrait'}}
          />
          <Stack.Screen
            name="搜索"
            component={SearchScreen}
            initialParams={{initial: ''}}
            options={{orientation: 'portrait'}}
          />
          <Stack.Screen
            name="PlaylistDetail"
            component={PlaylistDetailsScreen}
            options={{orientation: 'portrait'}}
          />
          <Stack.Screen
            name="隐私政策"
            component={PrivacyScreen}
            options={{orientation: 'portrait'}}
          />
          <Stack.Screen
            name="用户协议"
            component={UserAgreementScreen}
            options={{orientation: 'portrait'}}
          />
          <Stack.Screen
            name="片库"
            component={CatalogScreen}
            initialParams={{type_id: 1}}
            options={{orientation: 'portrait'}}
          />
          <Stack.Screen
            name="设置"
            component={ConfigureScreen}
            options={{orientation: 'portrait'}}
          />
          <Stack.Screen
            name="合集收藏"
            component={ShortVodCollectionScreen}
            options={{orientation: 'portrait'}}
          />
          <Stack.Screen
            name="体育详情"
            component={MatchDetailsScreen}
            options={{navigationBarHidden: true}}
            initialParams={{
              streamerId: undefined,
              matchId: undefined,
            }}
          />
          <Stack.Screen
            name="电视台列表"
            component={LiveStationsScreen}
            initialParams={{liveStationItemList: undefined}}
            options={{orientation: 'portrait'}}
          />
          <Stack.Screen
            name="电视台播放"
            component={LiveStationPlayScreen}
            initialParams={{
              liveStationItemList: undefined,
              liveStationItem: undefined,
            }}
            options={{navigationBarHidden: true}}
          />
          <Stack.Screen
            name="合集播放"
            component={WatchCollectionScreen}
            options={{orientation: 'portrait'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  navStyleWithNotch: {
    paddingTop: 10,
    paddingBottom: 25,
    height: 80,
  },
  navStyle: {
    // flex: 0,
    // flexGrow: 0

    flex: 0,
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
