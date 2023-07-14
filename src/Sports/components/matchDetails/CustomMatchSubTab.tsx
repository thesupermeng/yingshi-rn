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
import ScreenContainer from '../../../components/container/screenContainer';
import Chart from '../statisticCharts/Chart';

const Tab = createMaterialTopTabNavigator();

interface Props {
    subTabs: any
}

export default function CustomMatchSubTab({ subTabs }: Props) {

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
                            tab === idx ? activeTabColor : Colors.colorLightGrey,
                        },
                    ]}>
                    <Text
                        onPress={() => {
                            setTab(idx);
                        }}
                        style={[
                            styles.textTabNavigator,
                            {color: tab === idx ? activeTextColor : '#8D8D8D'},
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
        backgroundColor: 'grey',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 30,
        width: '96%',
        flex: 1,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8
    },
    tabNavigator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6,
        height: 26,
        marginLeft: 2.5,
        marginRight : 2.5
    },
    textTabNavigator: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '600',
    },
    tab: {
        backgroundColor: '#FFFFFF',
        paddingVertical: 15,
        flex: 1,
    },
  });