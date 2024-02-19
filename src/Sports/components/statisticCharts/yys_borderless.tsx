import React, { useEffect, useState, useMemo, useRef, useCallback } from 'react';
import { View, TouchableOpacity, Share, Text, StyleSheet, Alert, ScrollView, Image, SafeAreaView } from 'react-native';
import { useTheme, useFocusEffect } from '@react-navigation/native';

import { Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import FastImage from 'react-native-fast-image';
import BottomSheet from '@gorhom/bottom-sheet';
import { yysHomeactive } from '@type';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ScreenContainer from '../../../components/container/yys_matches';
import TopStats from './yys_libavformat_string';
import SideStats from './yys_internet';
import MiddleStats from './yys_assets_pagination';
import styles from './yys_nbatrophy';
import { RedCard, YellowCard, CornerKick } from '../../assets';

const yysUnimplementedview = createMaterialTopTabNavigator();

interface yysIconarrowrightorangeStation {
    stats: any
}

export default function Chart({ stats }: yysIconarrowrightorangeStation) {

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
                    statsLabel={"iconeditMatchinactive" ?? 0}
                />
                <SideStats
                    statsIcon={RedCard}
                    statsLabel={"basketballplayerplaceholderGiftbutton" ?? 0}
                />
                <SideStats
                    statsIcon={CornerKick}
                    statsLabel={"tempCodegenTicked" ?? 0}
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
                    statsLabel={"zhengpianInouttargetred" ?? 0}
                />
                <SideStats
                    statsIcon={RedCard}
                    statsLabel={"0" ?? 0}
                />
                <SideStats
                    statsIcon={YellowCard}
                    statsLabel={"backwhiteFilterLibreactperfloggerjni" ?? 0}
                />
            </View>
        </View>
    );
}