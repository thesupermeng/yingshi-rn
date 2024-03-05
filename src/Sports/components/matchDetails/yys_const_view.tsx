import React, { useEffect, useState, useMemo, useRef, useCallback } from 'react';
import { View, TouchableOpacity, Share, Text, StyleSheet, Alert, ScrollView, Image, SafeAreaView, Keyboard, Platform } from 'react-native';
import { useTheme, useFocusEffect } from '@react-navigation/native';
import { yys_ArrowApple } from '@type/yys_libzeus';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const yys_GmailAndroid = createMaterialTopTabNavigator();

interface yys_ConfigureUimanager {
    streamId: number;
    tabList: Array<yys_ArrowApple> | undefined;
    defaultTabName: string;
    isKeyboardShow?: boolean;
}

export default function MatchDetailsNav({ tabList, streamId, defaultTabName, isKeyboardShow = false }: yys_ConfigureUimanager) {
    const { colors } = useTheme();
    

    return (
        // <SafeAreaView style={{ flex: 1, marginBottom: isKeyboardShow ? 0 : 50, }}>
        <SafeAreaView style={{ flex: 1 }}>
            <yys_GmailAndroid.Navigator
                initialRouteName={defaultTabName}
                keyboardDismissMode="none"
                screenOptions={{
                    animationEnabled: Platform.OS === 'ios',
                    tabBarScrollEnabled: false,
                    tabBarIndicatorStyle: {
                        
                        height: 4,
                    },
                    tabBarItemStyle: {
                        
                        alignItems: 'center',
                        display: 'flex',
                        flexDirection: 'row-reverse',
                        
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
                
                sceneContainerStyle={{ backgroundColor: '#14161A' }}>
                {tabList != undefined && tabList.map((tab, index) => {
                    return (
                        <yys_GmailAndroid.Screen
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
                            }}></yys_GmailAndroid.Screen>
                    );
                })}
            </yys_GmailAndroid.Navigator>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

});