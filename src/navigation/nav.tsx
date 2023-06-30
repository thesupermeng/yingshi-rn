import * as React from 'react';
import { useSelector } from "react-redux";
import { NavigationContainer, RouteProp, getFocusedRouteNameFromRoute } from '@react-navigation/native'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/Home';
import PlaylistScreen from '../screens/Playlist/Playlist';
import ProfileScreen from '../screens/Profile/Profile';
import WatchAnytime from '../screens/WatchAnytime';
import SearchScreen from '../screens/Common/Search';
import PlayScreen from '../screens/Common/Play';
import VodCollectionScreen from '../screens/Profile/Collection/VodCollection';
import FeedbackScreen from '../screens/Profile/Feedback';
import PlaylistCollectionScreen from '../screens/Profile/Collection/PlaylistCollection';
import PlaylistDetailsScreen from '../screens/Playlist/PlaylistDetails';
import HistoryScreen from '../screens/Profile/History';
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

import { YingshiDarkTheme, YingshiLightTheme } from '../theme';
import { HomeTabParamList, PlaylistTabParamList, ProfileTabParamList, RootStackParamList, WatchAnytimeTabParamList } from '../types/navigationTypes';
import RNBootSplash from "react-native-bootsplash";
import { RootState } from '../redux/store';
import {
    SafeAreaProvider,
    useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';


export default () => {
    const Stack = createNativeStackNavigator<RootStackParamList>();
    const HomeTab = createBottomTabNavigator<HomeTabParamList>();
    const ProfileTab = createBottomTabNavigator<ProfileTabParamList>();
    const PlaylistTab = createBottomTabNavigator<PlaylistTabParamList>();
    const WatchAnytimeTab = createBottomTabNavigator<WatchAnytimeTabParamList>();

    const themeReducer = useSelector(({ themeReducer }: RootState) => themeReducer);
    const theme = themeReducer.theme ? YingshiDarkTheme : YingshiLightTheme

    function HomeTabScreen() {
        return (
            <HomeTab.Navigator screenOptions={({ route }) => ({
                headerShown: false,
                tabBarStyle: { paddingBottom: 5, paddingTop: 4 },
                tabBarIcon: ({ focused, color, size }) => {
                    let icon: React.ReactNode;
                    if (route.name === '首页') {
                        icon = focused ? <HomeActiveTabIcon color={theme.icons.activeNavIconColor} /> : <HomeTabIcon color={theme.icons.inactiveNavIconColor} />;
                    } else if (route.name === '播单') {
                        icon = focused ? <PlaylistActiveTabIcon color={theme.icons.activeNavIconColor} /> : <PlaylistTabIcon color={theme.icons.inactiveNavIconColor} />;
                    } else if (route.name === '我的') {
                        icon = focused ? <ProfileActiveTabIcon color={theme.icons.activeNavIconColor} /> : <ProfileTabIcon color={theme.icons.inactiveNavIconColor} />;
                    } else if (route.name === '随心看') {
                        icon = focused ? <WatchAnytimeActiveTabIcon color={theme.icons.activeNavIconColor} /> : <WatchAnytimeTabIcon color={theme.icons.inactiveNavIconColor} />;
                    }
                    return icon;
                },
            })
            } >
                <HomeTab.Screen name="首页" component={HomeScreen} />
                <HomeTab.Screen name="随心看" component={WatchAnytime} />
                <HomeTab.Screen name="播单" component={PlaylistScreen} />
                <HomeTab.Screen name="我的" component={ProfileScreen} />
            </HomeTab.Navigator>

        );
    }

    function ProfileTabScreen() {
        return (
            <ProfileTab.Navigator screenOptions={{
                tabBarStyle: { paddingBottom: 5, paddingTop: 4 },
                headerShown: false
            }}>
                <ProfileTab.Screen name="首页" component={HomeScreen} />
                <ProfileTab.Screen name="随心看" component={WatchAnytime} />
                <ProfileTab.Screen name="播单" component={PlaylistScreen} />
                <ProfileTab.Screen name="我的" component={ProfileScreen} />
            </ProfileTab.Navigator>
        );
    }

    function PlaylistTabScreen() {
        return (
            <PlaylistTab.Navigator screenOptions={{
                headerShown: false,
                tabBarStyle: { paddingBottom: 5, paddingTop: 4 },
            }}>
                <PlaylistTab.Screen name="首页" component={HomeScreen} />
                <PlaylistTab.Screen name="随心看" component={WatchAnytime} />
                <PlaylistTab.Screen name="播单" component={PlaylistScreen} />
                <PlaylistTab.Screen name="我的" component={ProfileScreen} />
            </PlaylistTab.Navigator>
        );
    }

    function WatchAnytimeTabScreen() {
        return (
            <WatchAnytimeTab.Navigator screenOptions={{
                tabBarStyle: { paddingBottom: 5, paddingTop: 4 },
                headerShown: false
            }}>
                <WatchAnytimeTab.Screen name="首页" component={HomeScreen} />
                <WatchAnytimeTab.Screen name="随心看" component={WatchAnytime} />
                <WatchAnytimeTab.Screen name="播单" component={PlaylistScreen} />
                <WatchAnytimeTab.Screen name="我的" component={ProfileScreen} />
            </WatchAnytimeTab.Navigator>
        );
    }

    return (
        <SafeAreaProvider>
            <StatusBar
                backgroundColor={theme.colors.background}
                barStyle = {themeReducer.theme ? "light-content" : "dark-content"}
            />
            <NavigationContainer theme={theme} onReady={() => RNBootSplash.hide()}>
                <Stack.Navigator screenOptions={({ route }) => ({
                    headerShown: false,
                })} >
                    <Stack.Screen name='Home' component={HomeTabScreen} />
                    <Stack.Screen name='Profile' component={ProfileTabScreen} />
                    <Stack.Screen name='Playlist' component={PlaylistTabScreen} />
                    <Stack.Screen name='WatchAnytime' component={WatchAnytimeTabScreen} />
                    <Stack.Screen name='视频收藏' component={VodCollectionScreen} />
                    <Stack.Screen name='播单收藏' component={PlaylistCollectionScreen} />
                    <Stack.Screen name='反馈' component={FeedbackScreen} />
                    <Stack.Screen name='播放' component={PlayScreen} initialParams={{ vod_id: 1 }} />
                    <Stack.Screen name='播放历史' component={HistoryScreen} />
                    <Stack.Screen name='关于我们' component={AboutUsScreen} />
                    <Stack.Screen name='搜索' component={SearchScreen} initialParams={{ initial: "" }} />
                    <Stack.Screen name='PlaylistDetail' component={PlaylistDetailsScreen} />
                    <Stack.Screen name='隐私政策' component={PrivacyScreen} />
                    <Stack.Screen name='用户协议' component={UserAgreementScreen} />
                    <Stack.Screen name='片库' component={CatalogScreen} initialParams={{ type_id: 1 }} />
                    <Stack.Screen name='设置' component={ConfigureScreen} />
                    <Stack.Screen name='合辑收藏' component={ShortVodCollectionScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}