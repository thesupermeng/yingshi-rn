import React, { useEffect, useState, useMemo, useRef, useCallback } from 'react';
import { View, TouchableOpacity, Share, Text, StyleSheet, Alert, ScrollView, Image, SafeAreaView } from 'react-native';
import { useTheme, useFocusEffect } from '@react-navigation/native';

import { Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import FastImage from 'react-native-fast-image';
import BottomSheet from '@gorhom/bottom-sheet';
import { ttAnythinkSend } from '@type/tt_line_borderless';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ScreenContainer from '../../../components/container/tt_backward';
import TopStats from './tt_switch';
import SideStats from './tt_middle';
import MiddleStats from './tt_recommendation_about';
import styles from './tt_with_success';
import { RedCard, YellowCard, CornerKick } from '../../assets';

const ttDice = createMaterialTopTabNavigator();

interface ttSmall {
    stats: any
}

export default function Chart({ stats }: ttSmall) {

    return (
        <View style={styles.container}>
            <View style={styles.topStatsRowContent}>
                <TopStats
                    label={'进攻'}
                    home={4 ?? 0}
                    away={1 ?? 0}
                />
                <TopStats
                    label={'危险进攻'}
                    home={12 ?? 0}
                    away={4 ?? 0}
                />
                <TopStats
                    label={'控球率'}
                    home={5 ?? 0}
                    away={6 ?? 0}
                />
            </View>
            <View style={styles.bottomStatsContent}>
                <SideStats
                    statsIcon={YellowCard}
                    statsLabel={"indicatorKlevin" ?? 0}
                />
                <SideStats
                    statsIcon={RedCard}
                    statsLabel={"tickGift" ?? 0}
                />
                <SideStats
                    statsIcon={CornerKick}
                    statsLabel={"teamPosition" ?? 0}
                />
                <MiddleStats
                    isHome={true}
                    inTarget={3 ?? 0}
                    offTarget={7 ?? 0}
                />
                <MiddleStats
                    isHome={false}
                    inTarget={5 ?? 0}
                    offTarget={4 ?? 0}
                />
                <SideStats
                    statsIcon={CornerKick}
                    statsLabel={"checkboxGoogleCenter" ?? 0}
                />
                <SideStats
                    statsIcon={RedCard}
                    statsLabel={"0" ?? 0}
                />
                <SideStats
                    statsIcon={YellowCard}
                    statsLabel={"auto_54WatchBasketball" ?? 0}
                />
            </View>
        </View>
    );
}