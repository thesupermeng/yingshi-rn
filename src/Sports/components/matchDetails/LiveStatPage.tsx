import React, { useEffect, useState, useMemo, useRef, useCallback } from 'react';
import { View, TouchableOpacity, Share, Text, StyleSheet, Alert, ScrollView, Image, SafeAreaView } from 'react-native';
import { useTheme, useFocusEffect } from '@react-navigation/native';

import Orientation from 'react-native-orientation-locker';

import { Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import FastImage from 'react-native-fast-image';
import BottomSheet from '@gorhom/bottom-sheet';
import { DetailTab } from '../../../types/ajaxTypes';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ScreenContainer from '../../../components/container/screenContainer';
import Chart from '../statisticCharts/Chart';
import StoryLineEvent from './storyLine/StoryLineEvent';
import MatchStatistics from './MatchStatistics';
import CustomMatchSubTab from './CustomMatchSubTab';

const Tab = createMaterialTopTabNavigator();

interface Props {
    liveRoomUpdate: any
}

export default function LiveStatPage({ liveRoomUpdate }: Props) {

    const subTabs = [
        {
            name: '重要事件',
            children: <StoryLineEvent></StoryLineEvent>
        },
        {
            name: '技术统计',
            children: (
                <MatchStatistics
                    statisticData={liveRoomUpdate?.football_match_stats?.stats?.filter(
                        x => x.type != 'team_id',
                    )}
                    sportType={liveRoomUpdate?.sports_type}
                />
            ),
        }
    ]

    console.log('ADASDAAAAAAA');
    console.log(liveRoomUpdate);

    return (
        <ScreenContainer>
            <ScrollView>
                <Text style={{ color: 'white' }}>Live Stat</Text>
                <Chart stats={undefined} />

                {subTabs != undefined && subTabs.length > 0 &&
                    <CustomMatchSubTab subTabs={subTabs} />
                }
            </ScrollView>
        </ScreenContainer>
    )
}

const styles = StyleSheet.create({

});