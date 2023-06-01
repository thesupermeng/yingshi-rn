import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/Home';
import PlaylistScreen from '../screens/Playlist';
import ProfileScreen from '../screens/Profile';
import WatchAnytime from '../screens/WatchAnytime';

import MainHeader from '../components/header/mainHeader';

import HomeTab from '../../static/images/home_tab.svg';
import HomeActiveTab from '../../static/images/home_tab_active.svg';
import PlaylistTab from '../../static/images/playlist_tab.svg';
import PlaylistActiveTab from '../../static/images/playlist_tab_active.svg';
import ProfileTab from '../../static/images/profile_tab.svg';
import ProfileActiveTab from '../../static/images/profile_tab_active.svg';
import WatchAnytimeTab from '../../static/images/video_tab.svg';
import WatchAnytimeActiveTab from '../../static/images/video_tab_active.svg';


import { YingshiDarkTheme } from '../theme';
export default () => {
    const Tab = createBottomTabNavigator();
    return (
        <NavigationContainer theme={YingshiDarkTheme}>
            <Tab.Navigator screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let Icon;
                    if (route.name === '首页') {
                        Icon = focused ? HomeActiveTab : HomeTab;
                    } else if (route.name === '随心看') {
                        Icon = focused ? PlaylistActiveTab : PlaylistTab;
                    } else if (route.name === '播单') {
                        Icon = focused ? ProfileActiveTab : ProfileTab;
                    } else if (route.name === '我的') {
                        Icon = focused ? WatchAnytimeActiveTab : WatchAnytimeTab;
                    }
                    return (
                        <Icon />
                    );
                },
            })} >
                <Tab.Screen name="首页" component={HomeScreen} options={{header: () => <MainHeader />}}/>
                <Tab.Screen name="随心看" component={WatchAnytime} />
                <Tab.Screen name="播单" component={PlaylistScreen} />
                <Tab.Screen name="我的" component={ProfileScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}