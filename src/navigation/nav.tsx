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
import History from '../screens/Profile/History';
import AboutUs from '../screens/Profile/AboutUs';

import HomeTabIcon from '../../static/images/home_tab.svg';
import HomeActiveTabIcon from '../../static/images/home_tab_active.svg';
import PlaylistTabIcon from '../../static/images/playlist_tab.svg';
import PlaylistActiveTabIcon from '../../static/images/playlist_tab_active.svg';
import ProfileTabIcon from '../../static/images/profile_tab.svg';
import ProfileActiveTabIcon from '../../static/images/profile_tab_active.svg';
import WatchAnytimeTabIcon from '../../static/images/video_tab.svg';
import WatchAnytimeActiveTabIcon from '../../static/images/video_tab_active.svg';

import { YingshiDarkTheme, YingshiLightTheme } from '../theme';
import { HomeTabParamList, PlaylistTabParamList, ProfileTabParamList, RootStackParamList, WatchAnytimeTabParamList } from '../types/navigationTypes';
import RNBootSplash from "react-native-bootsplash";
import { RootState } from '../redux/store';
import {
    SafeAreaProvider,
    useSafeAreaInsets,
} from 'react-native-safe-area-context';


export default () => {
    const Stack = createNativeStackNavigator<RootStackParamList>();
    const HomeTab = createBottomTabNavigator<HomeTabParamList>();
    const ProfileTab = createBottomTabNavigator<ProfileTabParamList>();
    const PlaylistTab = createBottomTabNavigator<PlaylistTabParamList>();
    const WatchAnytimeTab = createBottomTabNavigator<WatchAnytimeTabParamList>();

    const themeReducer = useSelector(({ themeReducer }: RootState) => themeReducer);
    const theme = themeReducer.theme ? YingshiDarkTheme : YingshiLightTheme

    {/* < Tab.Navigator screenOptions = {({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
                let icon: React.ReactNode;
                if (route.name === '首页') {
                    icon = focused ? <HomeActiveTab color={theme.icons.activeNavIconColor} /> : <HomeTab />;
                } else if (route.name === '播单') {
                    icon = focused ? <PlaylistActiveTab color={theme.icons.activeNavIconColor} /> : <PlaylistTab />;
                } else if (route.name === '我的') {
                    icon = focused ? <ProfileActiveTab color={theme.icons.activeNavIconColor} /> : <ProfileTab />;
                } else if (route.name === '随心看') {
                    icon = focused ? <WatchAnytimeActiveTab color={theme.icons.activeNavIconColor} /> : <WatchAnytimeTab />;
                }
                return icon;
            },
        })
} >
                    <Tab.Screen name="首页" component={HomeStackScreen} />
                    <Tab.Screen name="随心看" component={WatchAnytime} />
                    <Tab.Screen name="播单" component={PlaylistStackScreen} />
                    <Tab.Screen name="我的" component={ProfileNavigator} />
                </Tab.Navigator > */}
    // const ProfileNavigator = ({ navigation, route }: RootTabScreenProps<'我的'>) => {
    //     const tabHiddenRoutes = ['关于我们'];
    //     React.useLayoutEffect(() => {
    //         const name = getFocusedRouteNameFromRoute(route);
    //         if (name && tabHiddenRoutes.includes(name)) {
    //             navigation.setOptions({ tabBarStyle: { display: 'none' } });
    //         } else {
    //             navigation.setOptions({ tabBarStyle: { display: 'flex' } });
    //         }
    //     }, [navigation, route]);

    //     return (
    //         <ProfileStack.Navigator screenOptions={{ headerShown: false }}>
    //             <ProfileStack.Screen name='Profile' component={ProfileScreen} />
    //             <ProfileStack.Screen name='视频收藏' component={VodCollectionScreen} />
    //             <ProfileStack.Screen name='播单收藏' component={PlaylistCollectionScreen} />
    //             <ProfileStack.Screen name='反馈' component={FeedbackScreen} />
    //             <ProfileStack.Screen name='播放' component={PlayScreen} initialParams={{ vod_id: 1 }} />
    //             <ProfileStack.Screen name='播放历史' component={History} />
    //             <ProfileStack.Screen name='关于我们' component={AboutUs} />
    //         </ProfileStack.Navigator>
    //     )
    // };

    function HomeTabScreen() {
        return (
            <HomeTab.Navigator screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                    let icon: React.ReactNode;
                    if (route.name === '首页') {
                        icon = focused ? <HomeActiveTabIcon color={theme.icons.activeNavIconColor} /> : <HomeTabIcon />;
                    } else if (route.name === '播单') {
                        icon = focused ? <PlaylistActiveTabIcon color={theme.icons.activeNavIconColor} /> : <PlaylistTabIcon />;
                    } else if (route.name === '我的') {
                        icon = focused ? <ProfileActiveTabIcon color={theme.icons.activeNavIconColor} /> : <ProfileTabIcon />;
                    } else if (route.name === '随心看') {
                        icon = focused ? <WatchAnytimeActiveTabIcon color={theme.icons.activeNavIconColor} /> : <WatchAnytimeTabIcon />;
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
            <ProfileTab.Navigator screenOptions={{ headerShown: false }}>
                <ProfileTab.Screen name="首页" component={HomeScreen} />
                <ProfileTab.Screen name="随心看" component={WatchAnytime} />
                <ProfileTab.Screen name="播单" component={PlaylistScreen} />
                <ProfileTab.Screen name="我的" component={ProfileScreen} />
            </ProfileTab.Navigator>
        );
    }

    function PlaylistTabScreen() {
        return (
            <PlaylistTab.Navigator screenOptions={{ headerShown: false }}>
                <PlaylistTab.Screen name="首页" component={HomeScreen} />
                <PlaylistTab.Screen name="随心看" component={WatchAnytime} />
                <PlaylistTab.Screen name="播单" component={PlaylistScreen} />
                <PlaylistTab.Screen name="我的" component={ProfileScreen} />
            </PlaylistTab.Navigator>
        );
    }

    function WatchAnytimeTabScreen() {
        return (
            <WatchAnytimeTab.Navigator screenOptions={{ headerShown: false }}>
                <WatchAnytimeTab.Screen name="首页" component={HomeScreen} />
                <WatchAnytimeTab.Screen name="随心看" component={WatchAnytime} />
                <WatchAnytimeTab.Screen name="播单" component={PlaylistScreen} />
                <WatchAnytimeTab.Screen name="我的" component={ProfileScreen} />
            </WatchAnytimeTab.Navigator>
        );
    }

    return (
        <SafeAreaProvider>
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
                    <Stack.Screen name='播放历史' component={History} />
                    <Stack.Screen name='关于我们' component={AboutUs} />
                    <Stack.Screen name='搜索' component={SearchScreen} />
                    <Stack.Screen name='PlaylistDetail' component={PlaylistDetailsScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}