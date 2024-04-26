import React, { useEffect, useState, useMemo, useRef, useCallback } from 'react';
import { View, TouchableOpacity, Share, Text, StyleSheet, Alert, ScrollView, Image, SafeAreaView } from 'react-native';
import { useTheme, useFocusEffect } from '@react-navigation/native';


import { Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import FastImage from 'react-native-fast-image';
import BottomSheet from '@gorhom/bottom-sheet';
import { wwIconnewsshareShoot } from '@type/ww_dycreator_result';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ScreenContainer from '../../../components/container/ww_collection';
import Chart from '../statisticCharts/ww_libswscale_privatechatbg';
import EmptyDataPage from '../ww_result_clock';

const wwEncryptSource = createMaterialTopTabNavigator();

interface wwIndexDice {
    subTabs: any
}

export default function CustomMatchSubTab({ subTabs }: wwIndexDice) {

    const { colors } = useTheme();

    const [tab, setTab] = useState(0);
    const activeTabColor = colors.primary;
    const activeTextColor = colors.text;

    return (
        <View style={styles.outerContainer}>
            <View style={styles.container}>
                {subTabs?.map((x: any, idx: number) => {
                    return (
                        <View
                            key={`MatchDetailsTabBar-${idx}`}
                            style={[
                                styles.tabNavigator,
                                {
                                    backgroundColor:
                                        tab === idx ? activeTabColor : '#1D2023',
                                },
                            ]}>
                            <Text
                                onPress={() => {
                                    setTab(idx);
                                }}
                                style={[
                                    styles.textTabNavigator,
                                    { color: tab === idx ? '#000' : activeTextColor },
                                ]}>
                                {x.name}
                            </Text>
                        </View>
                    );
                })}
            </View>

            {subTabs?.map((x: any, idx: number) => {
                return (
                    tab === idx && (
                        <View
                            key={`MatchDetailsTabBarContent-${idx}`}
                            style={[
                                styles.tab,
                                {
                                    height: x?.children ? '100%' : 350,
                                },
                            ]}>
                            {x?.children ? x.children : <EmptyDataPage></EmptyDataPage>}
                        </View>
                    )
                );
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    outerContainer: {
        display: 'flex',
        flex: 1,
        paddingTop: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 30,
        width: '96%',
        flex: 1,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        marginBottom: 12
    },
    tabNavigator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6,
        height: 45,
        marginLeft: 2.5,
        marginRight: 2.5
    },
    textTabNavigator: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '600'
    },
    tab: {
        backgroundColor: '#FFFFFF',
        paddingVertical: 15,
        flex: 1,
    },
});