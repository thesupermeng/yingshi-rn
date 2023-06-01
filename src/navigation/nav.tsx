import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/Home';
import PlaylistScreen from '../screens/Playlist';
import HomeTab from '../../static/images/home_tab.svg';
import HomeActiveTab from '../../static/images/home_tab_active.svg';
import PlaylistTab from '../../static/images/playlist_tab.svg';
import PlaylistActiveTab from '../../static/images/playlist_tab_active.svg';

export default () => {
    const Tab = createBottomTabNavigator();
    return (
        <NavigationContainer >
            <Tab.Navigator screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let Icon;
                    if (route.name === 'Home') {
                        Icon = focused ? HomeActiveTab : HomeTab;
                    } else if (route.name === 'Playlist') {
                        Icon = focused ? PlaylistActiveTab : PlaylistTab;
                    }
                    return (
                        <Icon />
                    );
                },
            })} >
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Playlist" component={PlaylistScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}