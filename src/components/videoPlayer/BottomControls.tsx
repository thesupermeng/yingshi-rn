import React, { useEffect, useState, useContext } from 'react';
import { View, PanResponder, StyleSheet, Dimensions, Text } from 'react-native';
import Slider from '@react-native-community/slider';

type Props = {
    currentTime: number,
    duration: number,
    onSlideCapture: (params: any) => any,
    onSlideStart: (params: any) => any,
    onSlideComplete: (params: any) => any
}

export default ({ currentTime, duration, onSlideCapture, onSlideStart, onSlideComplete }: Props) => {

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
        console.log("PULL SLIDE");
        onSlideCapture(time);
    };

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
        flex: 6,
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