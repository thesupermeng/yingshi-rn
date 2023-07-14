import React, { useEffect, useState, useMemo, useRef, useCallback } from 'react';
import { View, TouchableOpacity, Share, Text, StyleSheet, Alert, ScrollView, Image, SafeAreaView } from 'react-native';
import { useTheme, useFocusEffect } from '@react-navigation/native';

import Orientation from 'react-native-orientation-locker';

import { Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import FastImage from 'react-native-fast-image';
import BottomSheet from '@gorhom/bottom-sheet';
import { DetailTab } from '../../../types/ajaxTypes';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ScreenContainer from '../../../components/container/screenContainer';
import Chart from '../statisticCharts/Chart';
import StoryLineEvent from './StoryLineEvent';
import MatchStatistics from './MatchStatistics';
import CustomMatchSubTab from './CustomMatchSubTab';

const Tab = createMaterialTopTabNavigator();

interface Props {
    
}

const subTabs = [
    {
        name: '重要事件',
        children: StoryLineEvent
    },
    {
        name: '技术统计',
        children: MatchStatistics
    }
]

export default function LiveStatPage({ }: Props) {    
    // console.log('LIVESTAT PAGE');

    return (
        <ScreenContainer>
            <Text style={{ color: 'white' }}>Live Stat</Text>
            <Chart stats={undefined} />

            {subTabs != undefined && subTabs.length > 0 &&
                <CustomMatchSubTab subTabs={subTabs} />
            }
        </ScreenContainer>
    )
}

const styles = StyleSheet.create({
    
});