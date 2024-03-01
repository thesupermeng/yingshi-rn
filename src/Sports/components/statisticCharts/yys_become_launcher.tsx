import React, { useEffect, useState, useMemo, useRef, useCallback } from 'react';
import { View, TouchableOpacity, Share, Text, StyleSheet, Alert, ScrollView, Image, SafeAreaView } from 'react-native';
import { useTheme, useFocusEffect } from '@react-navigation/native';

import { Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import FastImage from 'react-native-fast-image';
import BottomSheet from '@gorhom/bottom-sheet';
import { yys_ArrowApple } from '@type/yys_libzeus';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ScreenContainer from '../../../components/container/yys_executor_expand';
import TopStats from './yys_flyer_eighteen';
import SideStats from './yys_movies';
import MiddleStats from './yys_zhengpian_singapore';
import styles from './yys_gpay_roboto';
import { RedCard, YellowCard, CornerKick } from '../../assets';

const yys_GmailAndroid = createMaterialTopTabNavigator();

interface yys_ConfigureUimanager {
    stats: any
}

export default function Chart({ stats }: yys_ConfigureUimanager) {

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
                    statsLabel={"changeBdxadsdkLibpangleflipped" ?? 0}
                />
                <SideStats
                    statsIcon={RedCard}
                    statsLabel={"detailExecutorFeedback" ?? 0}
                />
                <SideStats
                    statsIcon={CornerKick}
                    statsLabel={"newinterstitialDelegate_oEpisode" ?? 0}
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
                    statsLabel={"singaporeRewindPhone" ?? 0}
                />
                <SideStats
                    statsIcon={RedCard}
                    statsLabel={"0" ?? 0}
                />
                <SideStats
                    statsIcon={YellowCard}
                    statsLabel={"reducerModule" ?? 0}
                />
            </View>
        </View>
    );
}