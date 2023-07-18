import React, { useEffect, useState, useMemo, useRef, useCallback } from 'react';
import { View, TouchableOpacity, Share, Text, StyleSheet, Alert, ScrollView, Image, SafeAreaView, Switch } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import styles from '../style';
import { GoalLogo } from '../../../assets';
import { useSelector } from 'react-redux';
import StorylineTabListItem from './StoryLineTabListItem';

const Tab = createMaterialTopTabNavigator();

interface Props {
    isEnabled: boolean
}

export default function StoryLineTabList({ isEnabled = false }: Props) {

    const listLiveUpdates = useSelector(state => state.liveRoomUpdate);
    const arrayValue = listLiveUpdates?.football_match_live?.incidents ?? [];

    const dataTesting = { imageName: GoalLogo, textName: '123' };

    // const isHome = true;
    const arrayExcluded = [10, 2, 0];
    const arrayOnlyWatchGoal = [1, 8, 11, 12, 26, 27, 29, 30, 17];

    return (
        // <ScrollView>
        <View style={{ flex: 1, marginBottom: 50 }}>
            {arrayValue.map((value, index) => {
                if (isEnabled) {
                    return (
                        arrayOnlyWatchGoal.includes(value?.type) && (
                            <View style={styles.mainContainer} key={`incident-${index}`}>
                                <StorylineTabListItem data={value}></StorylineTabListItem>
                            </View>
                        )
                    );
                } else {
                    return (
                        !arrayExcluded.includes(value?.type) && (
                            <View style={styles.mainContainer} key={`incident-${index}`}>
                                <StorylineTabListItem data={value}></StorylineTabListItem>
                            </View>
                        )
                    );
                }
            })}
        </View>
        // </ScrollView>
    );
}