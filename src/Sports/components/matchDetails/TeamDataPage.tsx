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

const Tab = createMaterialTopTabNavigator();

interface Props {
    
}

export default function TeamDataPage({ }: Props) {
    console.log('TEAM DATA PAGE');
    
    return (
        <ScreenContainer>
            <Text style={{ color: 'white' }}>Team Data</Text>
        </ScreenContainer>
    )
}

const styles = StyleSheet.create({
    
});