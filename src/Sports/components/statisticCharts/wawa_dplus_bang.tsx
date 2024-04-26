import React, { useEffect, useState, useMemo, useRef, useCallback } from 'react';
import { View, TouchableOpacity, Share, Text, StyleSheet, Alert, ScrollView, Image, SafeAreaView } from 'react-native';
import { useTheme, useFocusEffect } from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import styles from './wawa_hiad_iconnewchat';
import {ProgressChart} from 'react-native-chart-kit';

const wawaDefaultteam = createMaterialTopTabNavigator();

interface wawaAwayShow {
    statsIcon: any,
    statsLabel: string
}

export default function SideStats({ statsIcon, statsLabel }: wawaAwayShow) {
    const { colors } = useTheme();

    return (
        <View style={styles.bottomStatsColumnContent}>
            <View style={styles.bottomImageStatsContainer}>
                <Image
                style={{width: 20, height: 20}}
                source={statsIcon}
                resizeMode={'contain'}></Image>
            </View>
            <Text style={{fontSize: 14, fontWeight: '400', color: colors.text}}>
            {statsLabel}
            </Text>
        </View>
    )
}