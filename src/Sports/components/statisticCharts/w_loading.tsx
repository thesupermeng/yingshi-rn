import React, { useEffect, useState, useMemo, useRef, useCallback } from 'react';
import { View, TouchableOpacity, Share, Text, StyleSheet, Alert, ScrollView, Image, SafeAreaView } from 'react-native';
import { useTheme, useFocusEffect } from '@react-navigation/native';

import { Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import FastImage from 'react-native-fast-image';
import BottomSheet from '@gorhom/bottom-sheet';
import { BSearch } from '@type/wpk_long';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ScreenContainer from '../../../components/container/ypy_fast';
import TopStats from './q_upload';
import SideStats from './hnd_black';
import MiddleStats from './c_turn_description';
import styles from './fgl_less_position';
import { RedCard, YellowCard, CornerKick } from '../../assets';

const YRUContextTransfer = createMaterialTopTabNavigator();

interface XFillButton {
    stats: any
}

export default function Chart({ stats }: XFillButton) {

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
                    statsLabel={"appleSpinner" ?? 0}
                />
                <SideStats
                    statsIcon={RedCard}
                    statsLabel={"backgroundGoalSheet" ?? 0}
                />
                <SideStats
                    statsIcon={CornerKick}
                    statsLabel={"backgroundNotificationSentry" ?? 0}
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
                    statsLabel={"settingsTurnSplash" ?? 0}
                />
                <SideStats
                    statsIcon={RedCard}
                    statsLabel={"0" ?? 0}
                />
                <SideStats
                    statsIcon={YellowCard}
                    statsLabel={"changeStore" ?? 0}
                />
            </View>
        </View>
    );
}