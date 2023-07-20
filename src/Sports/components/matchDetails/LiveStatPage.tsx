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
import EmptyDataPage from '../EmptyDataPage';
import AreaChart from '../statisticCharts/AreaChart';
import FootballIconComponent from './FootballIconComponent';

const Tab = createMaterialTopTabNavigator();

interface Props {
    liveRoomUpdate?: any
    liveRoomMatchDetails?: any
}

export default function LiveStatPage({ liveRoomUpdate, liveRoomMatchDetails }: Props) {

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
                        (x: any) => x.type != 'team_id',
                    )}
                    sportType={liveRoomUpdate?.sports_type}
                />
            ),
        }
    ]

    // console.log(liveRoomMatchDetails?.sports_type);
    // console.log(liveRoomMatchDetails?.status);

    if (liveRoomMatchDetails?.sports_type === 1) {
        // 比赛未开赛
        if (liveRoomMatchDetails.status <= 0) {
            return (
                <ScrollView>
                    {/* {ads && <AdsComp item={ads} />} */}
                    {/* <Weather
                        weather={liveRoomMatchDetails?.football_match?.environment}
                        venue={liveRoomMatchDetails?.football_match?.venue}
                    /> */}
                    <Chart stats={liveRoomUpdate?.football_match_live?.stats} />
                </ScrollView>
            );
        }
        if (liveRoomMatchDetails.status !== 0) {
            return (
                <ScrollView>
                    {/* {ads && <AdsComp item={ads} />} */}
                    {liveRoomUpdate?.football_match_live && (
                        <AreaChart liveRoomUpdate={liveRoomUpdate} />
                    )}

                    <Chart stats={liveRoomUpdate?.football_match_live?.stats} />

                    {subTabs.length && liveRoomUpdate && (
                        <CustomMatchSubTab subTabs={subTabs} />
                    )}

                    <FootballIconComponent />

                    {/* <Weather
                        weather={liveRoomMatchDetails?.football_match?.environment}
                        venue={liveRoomMatchDetails?.football_match?.venue}
                    /> */}
                </ScrollView>
            );
        }
    } else if (liveRoomMatchDetails?.sports_type === 2) {
        if (liveRoomMatchDetails.status === 0) {
            return (
                <ScrollView>
                    {/* {ads && <AdsComp item={ads} />} */}
                </ScrollView>
            );
        }
        if (liveRoomMatchDetails.status !== 0) {
            return (
                <ScrollView>
                    {/* {ads && <AdsComp item={ads} />} */}
                </ScrollView>
            );
        }
    } else if (liveRoomMatchDetails?.sports_type !== 1) {
        return (
            <View>
                <EmptyDataPage />
            </View>
        );
    }

    return (
        <ScreenContainer>
            <ScrollView>
                <Text style={{ color: 'white' }}>Live Stat</Text>
                <Chart stats={liveRoomUpdate?.football_match_live?.stats} />

                {subTabs != undefined && subTabs.length > 0 &&
                    <CustomMatchSubTab subTabs={subTabs} />
                }
            </ScrollView>
        </ScreenContainer>
    )
}

const styles = StyleSheet.create({

});