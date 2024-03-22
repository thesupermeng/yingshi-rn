import React, { useEffect, useState, useMemo, useRef, useCallback } from 'react';
import { View, TouchableOpacity, Share, Text, StyleSheet, Alert, ScrollView, Image, SafeAreaView } from 'react-native';
import { useTheme, useFocusEffect } from '@react-navigation/native';

import { Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import FastImage from 'react-native-fast-image';
import BottomSheet from '@gorhom/bottom-sheet';
import { mayi_DownloadingContainer } from '@type/mayi_green';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ScreenContainer from '../../../components/container/mayi_save';
import TopStats from './mayi_hover';
import SideStats from './mayi_chatroombackground';
import MiddleStats from './mayi_vipsport';
import styles from './mayi_iconarrowrightwhite';
import { RedCard, YellowCard, CornerKick } from '../../assets';

const mayi_DarkPlaceholder = createMaterialTopTabNavigator();

interface mayi_GoogleViews {
    stats: any
}

export default function Chart({ stats }: mayi_GoogleViews) {

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
                    statsLabel={"sideWeiboGraph" ?? 0}
                />
                <SideStats
                    statsIcon={RedCard}
                    statsLabel={"injuryTemperature" ?? 0}
                />
                <SideStats
                    statsIcon={CornerKick}
                    statsLabel={"pointDown" ?? 0}
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
                    statsLabel={"bellWhitevideolive" ?? 0}
                />
                <SideStats
                    statsIcon={RedCard}
                    statsLabel={"0" ?? 0}
                />
                <SideStats
                    statsIcon={YellowCard}
                    statsLabel={"statsnomoredataNeonNetwork" ?? 0}
                />
            </View>
        </View>
    );
}