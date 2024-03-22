import React, { useEffect, useState, useMemo, useRef, useCallback } from 'react';
import { View, TouchableOpacity, Share, Text, StyleSheet, Alert, ScrollView, Image, SafeAreaView } from 'react-native';
import { useTheme, useFocusEffect } from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import styles from './fgl_less_position';
import {ProgressChart} from 'react-native-chart-kit';

const YRUContextTransfer = createMaterialTopTabNavigator();

interface XFillButton {
    statsIcon: any,
    statsLabel: string
}

export default function SideStats({ statsIcon, statsLabel }: XFillButton) {
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