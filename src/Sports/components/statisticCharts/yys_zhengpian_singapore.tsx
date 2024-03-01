import React, { useEffect, useState, useMemo, useRef, useCallback } from 'react';
import { View, TouchableOpacity, ImageBackground, Text, StyleSheet, Alert, ScrollView, Image, SafeAreaView } from 'react-native';
import { useTheme, useFocusEffect } from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import styles from './yys_gpay_roboto';
import {ProgressChart} from 'react-native-chart-kit';
import { InOutTargetYellow, InOutTargetRed } from '../../assets';

const yys_GmailAndroid = createMaterialTopTabNavigator();

interface yys_ConfigureUimanager {
    isHome: boolean,
    inTarget: number,
    offTarget: number,
}

export default function MiddleStats({ isHome, inTarget, offTarget }: yys_ConfigureUimanager) {
    const { colors } = useTheme();

    return (
        <ImageBackground
            style={{width: 60, height: 60, position: 'relative'}}
            source={isHome ? InOutTargetYellow : InOutTargetRed}
            resizeMode={'stretch'}>

            <Text
                style={{
                    fontSize: 14,
                    fontWeight: '400',
                    color: colors.text,
                    position: 'absolute',
                    bottom: 12,
                    right: isHome ? 15 : null,
                    left: isHome ? null : 15,
                }}>
            {inTarget}
            </Text>

            <Text
                style={{
                    fontSize: 14,
                    fontWeight: '400',
                    color: colors.text,
                    position: 'absolute',
                    top: 3,
                    left: isHome ? 24 : null,
                    right: isHome ? null : 24,
                }}>
            {offTarget}
            </Text>
        </ImageBackground>
    )
}