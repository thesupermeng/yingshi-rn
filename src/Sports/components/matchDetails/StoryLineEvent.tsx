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

const Tab = createMaterialTopTabNavigator();

interface Props {
    
}

export default function StoryLineEvent({ }: Props) {
    return (
        <ScreenContainer>
            <Text style={{ color: 'white' }}>Live Stat</Text>
            <Chart stats={undefined} />
        </ScreenContainer>
    )
}

const styles = StyleSheet.create({
    
});