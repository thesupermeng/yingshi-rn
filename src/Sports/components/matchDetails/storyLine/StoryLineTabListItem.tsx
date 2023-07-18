import React, { useEffect, useState, useMemo, useRef, useCallback } from 'react';
import { View, TouchableOpacity, Share, Text, StyleSheet, Alert, ScrollView, Image, SafeAreaView, Switch } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { GoalLogo, PenaltyMatchIcon } from '../../../assets';
import { useSelector } from 'react-redux';
import { getMatchStorylineStatus } from '../../../utility/utils';
import StoryLineTab from './StoryLineTab';

const Tab = createMaterialTopTabNavigator();

interface Props {
    data: any
}

export default function StoryLineTabList({ data }: Props) {

    // const arrayValue = props?.data;
    const arrayValue = data;
    const dataTesting = { imageName: GoalLogo, textName: '123' };
    // const dataTime = arrayValue?.time > 90 ? 90 : arrayValue?.time;
    const dataTime = arrayValue?.time;
    const dataType = arrayValue?.type;
    const matchStorylineStatus = getMatchStorylineStatus(dataType);
    // console.log('apalumau', matchStorylineStatus);
    const isHome = arrayValue?.position == 1 ? true : false;
    const systemExcluded = [11, 12, 19, 26, 27];
    const panaltyBattleType = [29, 30];

    return (
        <View style={styles.mainContainer}>
            {!isHome && (
                <View
                    style={{
                        flex: 1,
                    }}></View>
            )}
            {!isHome &&
                (systemExcluded.includes(dataType) ? (
                    <View style={styles.orangeNumberHT}>
                        <Text style={styles.HTtimeTitle}>{matchStorylineStatus}</Text>
                    </View>
                ) : (
                    <View style={styles.orangeNumber}>
                        {panaltyBattleType.includes(dataType) ? (
                            <Image
                                source={PenaltyMatchIcon}
                                resizeMode={'stretch'}
                                style={styles.timelineIcon}></Image>
                        ) : (
                            <Text style={styles.timeTitle}>{dataTime}</Text>
                        )}
                    </View>
                ))}

            {systemExcluded.includes(dataType) ? (
                <View style={styles.mainTextContainContainer}></View>
            ) : (
                <View style={styles.mainTextContainContainer}>
                    {!isHome && <View style={styles.leftArrow}></View>}

                    <View style={styles.containContainer}>
                        <StoryLineTab isHome={isHome} listData={arrayValue}></StoryLineTab>
                    </View>
                    {isHome && <View style={styles.rightArrow}></View>}
                </View>
            )}

            {isHome && (
                <View style={styles.orangeNumber}>
                    {panaltyBattleType.includes(dataType) ? (
                        <Image
                            source={PenaltyMatchIcon}
                            resizeMode={'stretch'}
                            style={styles.timelineIcon}></Image>
                    ) : (
                        <Text style={styles.timeTitle}>{dataTime}</Text>
                    )}
                </View>
            )}
            {isHome && <View style={{ flex: 1 }}></View>}
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {

        flex: 1,
        // marginHorizontal: 5,
        // marginTop: 100, // testing
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 10,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    mainTextContainContainer: {
        backgroundColor: 'white',
        flex: 1,
        // marginHorizontal: 5,
        // marginTop: 100, // testing
        display: 'flex',
        // padding: 10,
        flexDirection: 'row',
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containContainer: {
        borderColor: '#D9D9D9',
        borderRadius: 8,
        borderWidth: 1,
        padding: 3,
        flex: 1,
        marginHorizontal: 8,
        // justifyContent: 'center',
        // alignItems: 'center',
        // display: 'flex',
    },
    leftArrow: {
        backgroundColor: 'white',
        borderColor: '#D9D9D9',
        borderBottomWidth: 0,
        borderRightWidth: 0,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        height: 15,
        width: 15,
        zIndex: 2,
        position: 'absolute',
        left: 0,
        borderBottomColor: 'transparent',
        borderRightColor: 'transparent',
        transform: [{ rotate: '-45deg' }],
    },

    rightArrow: {
        backgroundColor: 'white',
        borderColor: '#D9D9D9',
        borderBottomWidth: 0,
        borderRightWidth: 0,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        height: 15,
        width: 15,
        zIndex: 2,
        position: 'absolute',
        right: 0,
        borderBottomColor: 'transparent',
        borderRightColor: 'transparent',
        transform: [{ rotate: '135deg' }],
    },

    orangeNumber: {
        width: 21,
        height: 21,
        borderRadius: 30,
        justifyContent: 'center',
        backgroundColor: '#FFA100',
        alignItems: 'center',
        marginHorizontal: 10,
    },

    orangeNumberHT: {
        // width: '100%',
        flex: 1,
        height: 21,
        borderRadius: 30,
        justifyContent: 'center',
        backgroundColor: 'white',
        alignItems: 'center',
        marginHorizontal: 10,
        // marginVertical: 30,
    },
    timeTitle: {
        color: '#FFFFFF',
        fontWeight: '500',
        fontSize: 11,
        textAlign: 'center',
    },
    HTtimeTitle: {
        color: '#FFA100',
        fontWeight: '500',
        fontSize: 11,
        textAlign: 'center',
    },
    timelineIcon: {
        height: '80%',
        width: '80%',
    },
});