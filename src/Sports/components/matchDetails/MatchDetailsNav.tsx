import React, { useEffect, useState, useMemo, useRef, useCallback } from 'react';
import { View, TouchableOpacity, Share, Text, StyleSheet, Alert, ScrollView, Image, SafeAreaView } from 'react-native';
import { useTheme, useFocusEffect } from '@react-navigation/native';

import Orientation from 'react-native-orientation-locker';

import { Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import FastImage from 'react-native-fast-image';
import BottomSheet from '@gorhom/bottom-sheet';
import { DetailTab } from '../../../types/ajaxTypes';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import LineUpPage from './LineUpPage';

const Tab = createMaterialTopTabNavigator();

interface Props {
    streamId: number;
    tabList: Array<DetailTab> | undefined;
}

export default function MatchDetailsNav({ tabList, streamId }: Props) {
    const { colors } = useTheme();
    // console.log('MATCH DETAILSS');
    
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Tab.Navigator
                initialRouteName={"Live"}
                keyboardDismissMode="none"
                animationEnabled={false}
                screenOptions={{
                    tabBarScrollEnabled: false,
                    tabBarIndicatorStyle: {
                        // width: '10%',
                        height: 4,
                    },
                    tabBarItemStyle: {
                        // justifyContent: 'center',
                        alignItems: 'center',
                        display: 'flex',
                        flexDirection: 'row-reverse',
                        // marginHorizontal: 45,
                    },
                    tabBarLabelStyle: {
                        fontFamily: 'PingFang SC',
                        fontWeight: '500',
                        fontSize: 15,
                        lineHeight: 21,
                        marginHorizontal: -3,
                    },
                    tabBarStyle: {},
                }}
                // tabBar={tabBarArrow}
                sceneContainerStyle={{backgroundColor: 'white'}}>
                {tabList != undefined && tabList.map((tab, index) => {
                    return (
                        <Tab.Screen
                            key={index}
                            name={tab.name}
                            children={() => (
                                <tab.page />
                            )}
                            // listeners={({route}) =>
                            //     e.name == 'PrivateChatRoom' && {
                            //         tabPress: privateTabPressed,
                            //     }
                            // }
                            options={{
                                tabBarLabel: tab.title,
                                tabBarActiveTintColor: colors.primary,
                                tabBarInactiveTintColor: colors.text,
                                tabBarIndicatorStyle: {opacity: 0},
                                tabBarIcon: () =>
                                tab.name == 'PUBLIC',
                                tabBarIconStyle: {position: 'absolute', top: -22, right: -20},
                            }}></Tab.Screen>
                    );
                })}
            </Tab.Navigator>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    
});