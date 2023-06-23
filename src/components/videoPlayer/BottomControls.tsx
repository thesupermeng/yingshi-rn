import React, { useEffect, useState, useContext } from 'react';
import { View, PanResponder, StyleSheet, Dimensions, Text } from 'react-native';
import Slider from '@react-native-community/slider';
import FullScreen from '../../../static/images/fullScreen.svg';
import Unlock from '../../../static/images/unlock.svg';
import Episodes from '../../../static/images/episodes.svg';
import NextEpisode from '../../../static/images/nextEpisode.svg';
import { TouchableWithoutFeedback } from 'react-native';

type Props = {
    currentTime: number,
    duration: number,
    onSlideCapture: (params: any) => any,
    onSlideStart: (params: any) => any,
    onSlideComplete: (params: any) => any,
    onToggleFullScreen: () => any,
    onToggleEpisodes: () => any,
    isFullScreen: boolean
}

export default ({ currentTime, duration, onSlideCapture, onSlideStart, onSlideComplete, onToggleFullScreen, onToggleEpisodes, isFullScreen }: Props) => {

    useEffect(() => {
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

    const handleShowEpisodes = () => {
        onToggleEpisodes();
    }

    const position = getMinutesFromSeconds(currentTime);
    const fullDuration = getMinutesFromSeconds(duration);

    return (
        <>
            {!isFullScreen ?
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
                            <FullScreen width={30} height={30} />
                        </TouchableWithoutFeedback>
                    </View>
                </View>

                :

                <View style={styles.landscapeContainer}>
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
                            style={{ flex: 16, marginTop: 2 }} />
                        <View style={styles.timeWrapperLandscape}>
                            <Text style={styles.timeLeftLandscape}>{position} / </Text>
                            <Text style={styles.timeRightLandscape}>{fullDuration}</Text>
                        </View>
                    </View>
                    <View style={styles.buttonsContainer}>
                        <View style={{ flex: 7 }}>
                            <TouchableWithoutFeedback onPress={onPressFullScreenBtn}>
                                <Unlock width={30} height={30} />
                            </TouchableWithoutFeedback>
                        </View>
                        <View style={styles.buttonsSubContainer}>
                            <TouchableWithoutFeedback style={styles.containerItem} onPress={handleShowEpisodes}>
                                <Text>1.25x</Text>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback style={styles.containerItem} onPress={handleShowEpisodes}>
                                <NextEpisode width={30} height={30} />
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback style={styles.containerItem} onPress={handleShowEpisodes}>
                                <Episodes width={30} height={30} />
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback style={styles.containerItem} onPress={onPressFullScreenBtn}>
                                <FullScreen width={30} height={30} />
                            </TouchableWithoutFeedback>
                        </View>
                    </View>
                </View>
            }
        </>
    )
}

const styles = StyleSheet.create({
    landscapeContainer: {
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal: 20
    },
    buttonsContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10
    },
    buttonsSubContainer: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    containerItem: {
        marginLeft: 50
    },
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
    timeWrapperLandscape: {
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    timeLeft: {
        fontSize: 12,
        color: '#FFFFFF',
    },
    timeRight: {
        fontSize: 12,
        color: '#FFFFFF',
        textAlign: 'right',
    },
    timeLeftLandscape: {
        fontSize: 12,
        color: '#FFFFFF',
    },
    timeRightLandscape: {
        fontSize: 12,
        color: '#FFFFFF',
        textAlign: 'right',
    },
});