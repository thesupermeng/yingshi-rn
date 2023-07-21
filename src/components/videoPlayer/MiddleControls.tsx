import React, { useEffect, useState, useContext } from 'react';
import { View, PanResponder, StyleSheet, TouchableOpacity } from 'react-native';
import Play from '../../../static/images/blackPlay.svg';
import Pause from '../../../static/images/pause.svg';
import Rewind from '../../../static/images/rewind.svg';
import Fastforward from '../../../static/images/fastforward.svg';

type Props = {
    fastForward: (params: any) => any,
    togglePlayPause: () => any,
    paused: boolean
    videoType?: string
}

export default ({ fastForward, togglePlayPause, paused, videoType }: Props) => {

    useEffect(() => {

    }, [])

    const onSkip = (seconds: number) => {
        fastForward(seconds);
    }

    const onTogglePlayPause = () => {
        togglePlayPause();
    }

    return (
        <View style={styles.middleControls}>
            {
                videoType !== 'live' &&
                <TouchableOpacity style={styles.sideButtons} onPress={() => onSkip(-10)}>
                    <Rewind width={60} height={60} />
                </TouchableOpacity>
            }
            <TouchableOpacity onPress={() => onTogglePlayPause()}>
                {paused ?
                    <Play width={55} height={55} />
                    :
                    <Pause width={55} height={55} />
                }
            </TouchableOpacity>
            {
                videoType !== 'live' &&
                <TouchableOpacity style={styles.sideButtons} onPress={() => onSkip(10)}>
                    <Fastforward width={60} height={60} />
                </TouchableOpacity>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    middleControls: {
        paddingHorizontal: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 3,
    },
    sideButtons: {
        paddingLeft: 20,
        paddingRight: 20,
    }
});