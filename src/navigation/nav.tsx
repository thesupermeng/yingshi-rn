import * as React from 'react';
import { useSelector } from "react-redux";
import { NavigationContainer } from '@react-navigation/native'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/Home';
import PlaylistScreen from '../screens/Playlist';
import ProfileScreen from '../screens/Profile';
import WatchAnytime from '../screens/WatchAnytime';
import SearchScreen from '../screens/Search';
import PlayScreen from '../screens/Play';

import HomeTab from '../../static/images/home_tab.svg';
import HomeActiveTab from '../../static/images/home_tab_active.svg';
import PlaylistTab from '../../static/images/playlist_tab.svg';
import PlaylistActiveTab from '../../static/images/playlist_tab_active.svg';
import ProfileTab from '../../static/images/profile_tab.svg';
import ProfileActiveTab from '../../static/images/profile_tab_active.svg';
import WatchAnytimeTab from '../../static/images/video_tab.svg';
import WatchAnytimeActiveTab from '../../static/images/video_tab_active.svg';

import { YingshiDarkTheme, YingshiLightTheme } from '../theme';
import { HomeStackParamList, RootTabParamList } from '../types/navigationTypes';
import combineReducer from '../redux/reducers/combineReducer';
import RNBootSplash from "react-native-bootsplash";

export default () => {
    const Tab = createBottomTabNavigator<RootTabParamList>();
    const HomeStack = createNativeStackNavigator<HomeStackParamList>();
    const themeReducer = useSelector(({ themeReducer }:ReturnType<typeof combineReducer>) => themeReducer);
    function HomeStackScreen() {
        return (
            <HomeStack.Navigator>
                <HomeStack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
                <HomeStack.Screen name="Search" component={SearchScreen} options={{ headerShown: false }} />
                <HomeStack.Screen name="Play" component={PlayScreen} options={{ headerShown: false }} />
            </HomeStack.Navigator>
        );
    }
    return (
        <NavigationContainer theme={themeReducer.theme ? YingshiDarkTheme : YingshiLightTheme} onReady={() => RNBootSplash.hide()}>
            <Tab.Navigator screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                    let icon: React.ReactNode;
                    if (route.name === '首页') {
                        icon = focused ? <HomeActiveTab /> : <HomeTab />;
                    } else if (route.name === '随心看') {
                        icon = focused ? <PlaylistActiveTab /> : <PlaylistTab />;
                    } else if (route.name === '播单') {
                        icon = focused ? <ProfileActiveTab /> : <ProfileTab />;
                    } else if (route.name === '我的') {
                        icon = focused ? <WatchAnytimeActiveTab /> : <WatchAnytimeTab />;
                    }
                    return icon;
                },
            })} >
                <Tab.Screen name="首页" component={HomeStackScreen} />
                <Tab.Screen name="随心看" component={WatchAnytime} />
                <Tab.Screen name="播单" component={PlaylistScreen} />
                <Tab.Screen name="我的" component={PlayScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}