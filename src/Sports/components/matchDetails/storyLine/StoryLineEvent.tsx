import React, { useEffect, useState, useMemo, useRef, useCallback } from 'react';
import { View, Text, Image, SafeAreaView, Switch } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ScreenContainer from '../../../../components/container/screenContainer';
import Chart from '../../statisticCharts/Chart';
import styles from '../style';
import { WhistleOrange, OrangeClock } from '../../../assets';
import StoryLineTabList from './StoryLineTabList';

const Tab = createMaterialTopTabNavigator();

interface Props {

}

export default function StoryLineEvent({ }: Props) {

    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => {
        setIsEnabled(prevState => !prevState)
    }

    return (
        <ScreenContainer>
            <View style={styles.mainContainer}>
                <View style={styles.switchContainer}>
                    <Text style={styles.switchTitle}>只看进球</Text>
                    <Switch
                        trackColor={{ false: '#767577', true: '#FF6835' }}
                        thumbColor={isEnabled ? 'white' : 'white'}
                        ios_backgroundColor="#3e3e3e"
                        style={styles.switchStyle}
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>
                <View style={styles.lineContainer}>
                    <Image
                        resizeMode="contain"
                        style={styles.smallIcon}
                        source={OrangeClock}></Image>
                    <View style={styles.middleline}>
                        <View style={styles.smallOrangeCircle}></View>

                        <View style={styles.smallOrangeCircle}></View>
                    </View>
                    <Image
                        resizeMode="contain"
                        style={styles.smallIcon}
                        source={WhistleOrange}></Image>
                </View>
                <View style={styles.scrollViewContainer}>
                    <StoryLineTabList isEnabled={isEnabled}></StoryLineTabList>
                </View>
            </View>
        </ScreenContainer>
    )
}