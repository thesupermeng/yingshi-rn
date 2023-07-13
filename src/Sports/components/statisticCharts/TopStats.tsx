import React, { useEffect, useState, useMemo, useRef, useCallback } from 'react';
import { View, TouchableOpacity, Share, Text, StyleSheet, Alert, ScrollView, Image, SafeAreaView } from 'react-native';
import { useTheme, useFocusEffect } from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import styles from './style';
import {ProgressChart} from 'react-native-chart-kit';

const Tab = createMaterialTopTabNavigator();

interface Props {
    label: string,
    home: number,
    away: number
}

export default function TopStats({ label = '进攻', home = 3, away = 8 }: Props) {
    const { colors, textVariants, spacing, icons } = useTheme();

    const totalProgress = home + away;
    const awayProgress = away / totalProgress;

    const data = {
        data: [awayProgress ? awayProgress : 0],
        colors: [awayProgress ? 'blue' : ''],
    }

    return (
        <View style={styles.topStatsContent}>
            <Text style={styles.topStatsLabel}>{label}</Text>
            <View style={styles.topStatsRow}>
                <Text style={styles.topStatsLabel}>{home}</Text>
                <></>
                <ProgressChart
                    style={{marginHorizontal: 8}}
                    data={data}
                    width={36}
                    height={36}
                    radius={15}
                    strokeWidth={4}
                    chartConfig={{
                    // backgroundGradientFrom: 'white',
                    // backgroundGradientTo: 'white',
                    backgroundGradientFromOpacity: 0,
                    backgroundGradientToOpacity: 0,
                    color: (opacity = 1) => colors.primary,
                    }}
                    hideLegend={true}
                    withCustomBarColorFromData={true}
                />
                <Text style={{...styles.topStatsLabel, color: colors.text}}>{away}</Text>
            </View>
        </View>
    )
}