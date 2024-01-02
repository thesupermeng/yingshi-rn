import React, { useEffect, useState, useMemo, useRef, useCallback } from 'react';
import { View, TouchableOpacity, Share, Text, StyleSheet, Alert, ScrollView, Image, SafeAreaView } from 'react-native';
import { useTheme, useFocusEffect } from '@react-navigation/native';
import { DetailTab } from '@type/ajaxTypes';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

interface Props {
    streamId: number;
    tabList: Array<DetailTab> | undefined;
}

export default function MatchDetailsNav({ tabList, streamId }: Props) {
    const { colors } = useTheme();
    // console.log('MATCH DETAILSS');

    return (
        <SafeAreaView style={{ flex: 1, marginBottom: 50 }}>
            <Tab.Navigator
                initialRouteName={"Live"}
                keyboardDismissMode="none"
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
                    tabBarStyle: {
                        borderBottomColor: '#1D2023',
                        borderBottomWidth: 1
                    },
                }}
                // tabBar={tabBarArrow}
                sceneContainerStyle={{ backgroundColor: 'white' }}>
                {tabList != undefined && tabList.map((tab, index) => {
                    return (
                        <Tab.Screen
                            key={index}
                            name={tab.name}
                            children={() => (
                                tab.page
                            )}
                            options={{
                                tabBarLabel: tab.title,
                                tabBarActiveTintColor: colors.primary,
                                tabBarInactiveTintColor: colors.text,
                                tabBarIndicatorStyle: { opacity: 0 },
                                tabBarIcon: () =>
                                    tab.name == 'PUBLIC',
                                tabBarIconStyle: { position: 'absolute', top: -22, right: -20 },
                            }}></Tab.Screen>
                    );
                })}
            </Tab.Navigator>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

});