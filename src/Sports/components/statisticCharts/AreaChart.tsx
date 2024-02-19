import React, { useEffect, useState, useMemo, useRef, useCallback } from 'react';
import { View, TouchableOpacity, Share, Text, StyleSheet, Alert, ScrollView, Image, SafeAreaView } from 'react-native';
import { useTheme, useFocusEffect } from '@react-navigation/native';

import { Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import FastImage from 'react-native-fast-image';
import BottomSheet from '@gorhom/bottom-sheet';
import { DetailTab } from '@type';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ScreenContainer from '../../../components/container/screenContainer';
import Chart from '../statisticCharts/Chart';
import EmptyDataPage from '../EmptyDataPage';
import { Goal, RedCard, YellowCard, YellowToRedCard, CornerKick, PenaltyGoal } from '../../assets';
import DefaultTeamIcon from '../DefaultTeamIcon';
import CanvasIncident from './CanvasIncident';

const Tab = createMaterialTopTabNavigator();

const chartHeight = 40;
const iconHeight = 24;

const EventIcon: any = {
    1: Goal,
    2: CornerKick,
    3: YellowCard,
    4: RedCard,
    15: YellowToRedCard,
    29: PenaltyGoal,
};

interface Props {
    liveRoomUpdate: any
    chartCallback?: any
}

export default function AreaChart({ liveRoomUpdate, chartCallback }: Props) {

    const [rightContentWidth, setRightContentWidth] = useState(0);
    const { colors } = useTheme();

    const home = liveRoomUpdate?.home;
    const away = liveRoomUpdate?.away;
    const chartIncident = Array.prototype.filter
        .call(liveRoomUpdate?.football_match_live?.tlive || [], x => x.main === 1)
        .sort((a, b) => {
            if (a.time === b.time) {
                return 0;
            } else if (a.time > b.time) {
                return 1;
            } else {
                return -1;
            }
        });

    const chartData = liveRoomUpdate?.football_match_trend?.data;
    if (!chartData || !chartData.length) {
        chartCallback?.(false);
        return;
    } else {
        chartCallback?.(true);
    }

    const time = chartData?.length;
    const totalTime = time <= 90 ? 90 : time; //比赛总时间

    const minutes = [0, 15, 30, 45, 60, 75, totalTime];

    // 为了应付相同时间碰撞问题，给予每一个时间 allocateTime 在更加好的位置 [只计算了之前的位置重叠，并未计算未来时间的重叠问题]
    const incidentFilter = (incidents: any) => {
        let allocateTime: any;
        return incidents?.map((x: any, idx: number) => {
            const curTime = x.time;
            if (idx > 0) {
                if (curTime <= allocateTime) {
                    return { ...x, allocateTime: ++allocateTime };
                } else {
                    allocateTime = curTime;
                    return { ...x, allocateTime: allocateTime };
                }
            } else {
                allocateTime = curTime;
                return { ...x, allocateTime: curTime };
            }
        });
    };
    const filteredHomeIncident = incidentFilter(
        chartIncident?.filter(x => x.position === 1),
    );
    const filteredAwayIncident = incidentFilter(
        chartIncident?.filter(x => x.position === 2),
    );

    // if (filteredHomeIncident?.length <= 0 && filteredAwayIncident?.length <= 0)
    //   return;

    const rightContentlayout = (e: any) => {
        setRightContentWidth(e.nativeEvent.layout.width);
    };

    const IncidentIcons = ({ data }: any) => {
        return (
            <View style={{ ...styles.eventContent }}>
                {data?.map((e: any, index: number) => {
                    const size = e.type === 1 || e.type === 29 ? 8 : 10;
                    return (
                        <Image
                            key={`filteredHomeIncident-${index}`}
                            style={{
                                width: size,
                                height: size,
                                position: 'absolute',
                                left: (rightContentWidth * e.allocateTime) / totalTime,
                                transform: [{ translateX: -size / 2 }],
                            }}
                            source={EventIcon[e.type] || ''}
                            resizeMode={'contain'}></Image>
                    );
                })}
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.rowContent}>
                <View style={styles.leftContent}></View>
                <View
                    style={[styles.rightContent, { height: iconHeight }]}
                    onLayout={rightContentlayout}>
                    <View
                        style={{
                            position: 'relative',
                            flexDirection: 'row',
                            paddingBottom: 10,
                        }}>
                        {minutes.map((e, index) => {
                            return (
                                <Text
                                    key={`footBallAreaChartMinute-${index}`}
                                    style={[
                                        styles.minuteText,
                                        {
                                            width: 400,
                                            textAlign: 'center',
                                            position: 'absolute',
                                            left: (e / totalTime) * rightContentWidth,
                                            transform: [{ translateX: -200 }],
                                        },
                                    ]}>
                                    {e === 45 ? 'HT' : ` ${e}'`}
                                </Text>
                            );
                        })}
                    </View>
                    {/* Home Incident */}
                    <IncidentIcons data={filteredHomeIncident || []} />
                </View>
            </View>
            <View style={styles.rowContent}>
                <View style={styles.leftContent}>
                    {home?.icon ? (
                        <Image style={styles.teamIcon} source={{ uri: home?.icon }}></Image>
                    ) : (
                        <DefaultTeamIcon iconSize={20} isHome={true} text={home?.name} />
                    )}
                    {away?.icon ? (
                        <Image style={styles.teamIcon} source={{ uri: away?.icon }}></Image>
                    ) : (
                        <DefaultTeamIcon iconSize={20} isHome={false} text={away?.name} />
                    )}
                </View>
                <View style={[styles.rightContent, { height: chartHeight }]}>
                    <View style={{ position: 'relative' }}>
                        {/* 背景颜色 */}
                        <View
                            style={{
                                position: 'absolute',
                                height: chartHeight,
                                width: rightContentWidth,
                            }}>
                            <View
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    bottom: '50%',
                                    left: 0,
                                    right: 0,
                                    backgroundColor: 'rgba(255, 161, 0, 0.18)',
                                }}></View>
                            <View
                                style={{
                                    position: 'absolute',
                                    top: '50%',
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    backgroundColor: 'rgba(7, 193, 96, 0.18)',
                                }}></View>
                        </View>
                        {/* 时间指标 */}
                        <View
                            style={{
                                position: 'absolute',
                                height: chartHeight,
                                width: 1,
                                zIndex: 99,
                                backgroundColor: colors.primary,
                                left: (time / totalTime) * rightContentWidth + 1,
                            }}
                        />
                        {/* <CanvasIncident
                            data={chartData}
                            height={chartHeight}
                            width={(time / totalTime) * rightContentWidth}
                        /> */}
                    </View>
                </View>
            </View>
            <View style={styles.rowContent}>
                <View style={styles.leftContent}></View>
                <View style={[styles.rightContent, { height: iconHeight }]}>
                    {/* Away Incident */}
                    <IncidentIcons data={filteredAwayIncident || []} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        display: 'flex',
        flexDirection: 'column',
        paddingHorizontal: 16, // 暂时不要随便改这个，因为chart的写法宽度兼容性不是很好
        paddingVertical: 16,
    },
    rowContent: {
        display: 'flex',
        flex: 0,
        flexDirection: 'row',
    },
    leftContent: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    rightContent: {
        flex: 9,
        display: 'flex',
        flexDirection: 'column',
        // backgroundColor: 'yellow',
    },
    minuteContent: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    minuteText: {
        fontSize: 9,
        fontWeight: '400',
        color: 'grey',
    },
    eventContent: {
        flex: 1,
        // position: 'relative',
        justifyContent: 'center',
    },
    teamIcon: {
        flex: 0,
        width: 20,
        height: 20,
        resizeMode: 'contain',
    },
});