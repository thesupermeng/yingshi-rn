import React, { useEffect, useState, useMemo, useRef, useCallback } from 'react';
import { View, TouchableOpacity, Share, Text, StyleSheet, Alert, ScrollView, Image, SafeAreaView } from 'react-native';
import { useTheme, useFocusEffect } from '@react-navigation/native';

import { Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import FastImage from 'react-native-fast-image';
import BottomSheet from '@gorhom/bottom-sheet';
import { wwIconnewsshareShoot } from '@type/ww_dycreator_result';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ScreenContainer from '../../../components/container/ww_collection';
import TopStats from './ww_init';
import SideStats from './ww_eighteen';
import MiddleStats from './ww_vipsport';
import styles from './ww_utils_orangeclock';
import { RedCard, YellowCard, CornerKick } from '../../assets';

const wwEncryptSource = createMaterialTopTabNavigator();

interface wwIndexDice {
    stats: any
}

export default function Chart({ stats }: wwIndexDice) {

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
                    statsLabel={"largebrightnessBgvipxvodSingapore" ?? 0}
                />
                <SideStats
                    statsIcon={RedCard}
                    statsLabel={"mbbidBall" ?? 0}
                />
                <SideStats
                    statsIcon={CornerKick}
                    statsLabel={"umengCodegenDanger" ?? 0}
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
                    statsLabel={"sharemodalProjectBuild" ?? 0}
                />
                <SideStats
                    statsIcon={RedCard}
                    statsLabel={"0" ?? 0}
                />
                <SideStats
                    statsIcon={YellowCard}
                    statsLabel={"tickIconbellactiveGmail" ?? 0}
                />
            </View>
        </View>
    );
}