import * as React from 'react';
import { useSelector } from "react-redux";
import { NavigationContainer } from '@react-navigation/native'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/Home';
import PlaylistScreen from '../screens/Playlist';
import ProfileScreen from '../screens/Profile/Profile';
import WatchAnytime from '../screens/WatchAnytime';
import SearchScreen from '../screens/Common/Search';
import PlayScreen from '../screens/Common/Play';

import HomeTab from '../../static/images/home_tab.svg';
import HomeActiveTab from '../../static/images/home_tab_active.svg';
import PlaylistTab from '../../static/images/playlist_tab.svg';
import PlaylistActiveTab from '../../static/images/playlist_tab_active.svg';
import ProfileTab from '../../static/images/profile_tab.svg';
import ProfileActiveTab from '../../static/images/profile_tab_active.svg';
import WatchAnytimeTab from '../../static/images/video_tab.svg';
import WatchAnytimeActiveTab from '../../static/images/video_tab_active.svg';

import { YingshiDarkTheme, YingshiLightTheme } from '../theme';
import { HomeStackParamList, RootTabParamList, ProfileStackParamList } from '../types/navigationTypes';
import combineReducer from '../redux/reducers/combineReducer';
import RNBootSplash from "react-native-bootsplash";

export default () => {
    const Tab = createBottomTabNavigator<RootTabParamList>();
    const HomeStack = createNativeStackNavigator<HomeStackParamList>();
    const ProfileStack = createNativeStackNavigator<ProfileStackParamList>();
    const themeReducer = useSelector(({ themeReducer }:ReturnType<typeof combineReducer>) => themeReducer);
    const theme = themeReducer.theme ? YingshiDarkTheme : YingshiLightTheme
    function HomeStackScreen() {
        return (
            <HomeStack.Navigator screenOptions={{headerShown: false}}>
                <HomeStack.Screen name='Home' component={HomeScreen} />
                <HomeStack.Screen name='搜索' component={SearchScreen} />
                <HomeStack.Screen name='播放' component={PlayScreen} />
            </HomeStack.Navigator>
        );
    }

    function ProfileStackScreen() {
        return (
            <ProfileStack.Navigator screenOptions={{headerShown: false}}>
                <ProfileStack.Screen name='Profile' component={ProfileScreen} />
            </ProfileStack.Navigator>
        );
    }

    return (
        <NavigationContainer theme={theme} onReady={() => RNBootSplash.hide()}>
            <Tab.Navigator screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                    let icon: React.ReactNode;
                    if (route.name === '首页') {
                        icon = focused ? <HomeActiveTab color={theme.icons.activeNavIconColor} /> : <HomeTab />;
                    } else if (route.name === '随心看') {
                        icon = focused ? <PlaylistActiveTab color={theme.icons.activeNavIconColor}/> : <PlaylistTab />;
                    } else if (route.name === '播单') {
                        icon = focused ? <ProfileActiveTab color={theme.icons.activeNavIconColor} /> : <ProfileTab />;
                    } else if (route.name === '我的') {
                        icon = focused ? <WatchAnytimeActiveTab color={theme.icons.activeNavIconColor} /> : <WatchAnytimeTab />;
                    }
                    return icon;
                },
            })} >
                <Tab.Screen name="首页" component={HomeStackScreen} />
                <Tab.Screen name="随心看" component={WatchAnytime} />
                <Tab.Screen name="播单" component={PlaylistScreen} />
                <Tab.Screen name="我的" component={ProfileStackScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}