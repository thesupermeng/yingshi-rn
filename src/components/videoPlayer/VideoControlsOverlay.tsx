import React, { useEffect, useState, useContext } from 'react';
import { View, PanResponder, StyleSheet, Dimensions } from 'react-native';
import MiddleControls from './MiddleControls';
import BottomControls from './BottomControls';
import TopControls from './TopControls';

type Props = {
    currentTime: number,
    duration: number,
    onVideoSeek: (params: any) => any,
    onFastForward: (params: any) => any,
    onTogglePlayPause: () => any,
    onHandleFullScreen: () => any,
    paused: boolean,
    isFullScreen: boolean
}

const height = Dimensions.get('window').width;
const width = Dimensions.get('window').height;

export default ({ currentTime, duration, onVideoSeek, onFastForward, onTogglePlayPause, onHandleFullScreen, paused, isFullScreen }: Props) => {

    useEffect(() => {
        console.log(paused)
    }, [paused])

    const handleFastForward = (time: any) => {
        onFastForward(time);
    }

    const handlePlayPause = () => {
        onTogglePlayPause();
    }

    const onSeek = (time: number) => {
        // console.log(time);
        onVideoSeek(time);
    }

    const handleFullScreen = () => {
        onHandleFullScreen();
    }

    const handleToggleEpisodes = () => {

    }

    return (
        <View style={!isFullScreen ? styles.controlsOverlay : [styles.controlsOverlay, { height: height }]}>
            {/* Top Controls */}
            <TopControls 
                isFullScreen={isFullScreen}/>
            {/* Middle Controls */}
            <MiddleControls 
                fastForward={handleFastForward}
                togglePlayPause={handlePlayPause}
                paused={paused}/>
            {/* Bottom Controls */}
            <BottomControls 
                currentTime={currentTime}
                duration={duration > 0 ? duration : 0}
                onSlideStart={handlePlayPause}
                onSlideComplete={handlePlayPause}
                onSlideCapture={onSeek}
                onToggleFullScreen={handleFullScreen}
                onToggleEpisodes={handleToggleEpisodes}
                isFullScreen={isFullScreen} />
        </View>
    )
}

const styles = StyleSheet.create({
    controlsOverlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#00000090',
        justifyContent: 'space-between',
    },
    fullScreenBottom: {
        paddingBottom: 60
    }
});