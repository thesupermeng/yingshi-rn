import React, { useEffect, useState, useContext } from 'react';
import { View, PanResponder, StyleSheet, Dimensions, Text } from 'react-native';
import Slider from '@react-native-community/slider';
import FullScreen from '../../../static/images/fullScreen.svg';
import { TouchableWithoutFeedback } from 'react-native';

type Props = {
    currentTime: number,
    duration: number,
    onSlideCapture: (params: any) => any,
    onSlideStart: (params: any) => any,
    onSlideComplete: (params: any) => any,
    onToggleFullScreen: () => any
}

export default ({ currentTime, duration, onSlideCapture, onSlideStart, onSlideComplete, onToggleFullScreen }: Props) => {

    useEffect(() => {
        console.log('ASDADASDASDADADADADADADA')
        console.log(currentTime);
    }, [])

    const getMinutesFromSeconds = (time: number) => {
        const minutes = time >= 60 ? Math.floor(time / 60) : 0;
        const seconds = Math.floor(time - minutes * 60);

        return `${minutes >= 10 ? minutes : '0' + minutes}:${
            seconds >= 10 ? seconds : '0' + seconds
        }`;
    };

    const onSlideProgressBar = (time: any) => {
        onSlideCapture(time);
    };

    const onPressFullScreenBtn = () => {
        onToggleFullScreen();
    }

    const position = getMinutesFromSeconds(currentTime);
    const fullDuration = getMinutesFromSeconds(duration);

    return (
        <View style={styles.wrapper}>
            <Slider 
                value={currentTime}
                minimumValue={0}
                maximumValue={duration}
                step={1}
                onValueChange={onSlideProgressBar}
                onSlidingStart={onSlideStart}
                onSlidingComplete={onSlideComplete}
                minimumTrackTintColor={'#FAC33D'}
                maximumTrackTintColor={'#FFFFFF'}
                thumbTintColor={'#FFFFFF'}
                style={{ flex: 10, marginTop: 2 }} />
            <View style={styles.timeWrapper}>
                <Text style={styles.timeLeft}>{position} / </Text>
                <Text style={styles.timeRight}>{fullDuration}</Text>
                <TouchableWithoutFeedback onPress={onPressFullScreenBtn}>
                    <FullScreen width={24} height={24} />
                </TouchableWithoutFeedback>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    timeWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 4,
    },
    timeLeft: {
        fontSize: 12,
        color: '#9C9C9C',
    },
    timeRight: {
        fontSize: 12,
        color: '#9C9C9C',
        textAlign: 'right',
    },
});