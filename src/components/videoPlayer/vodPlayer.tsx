import React, { useEffect, useState, useMemo, useCallback, useRef } from 'react';
import { View, TouchableWithoutFeedback, StyleSheet, StatusBar } from 'react-native';
import Video from 'react-native-video';
import { useTheme } from '@react-navigation/native';
import { useOrientation } from '../../hooks/useOrientation';
import PlayFullScreenGesture from '../gestures/vod/PlayFullScreenGesture';
import { debounce } from "lodash";

import { Dimensions } from 'react-native';
import VideoControlsOverlay from './VideoControlsOverlay';
import Orientation from 'react-native-orientation-locker';

interface Props {
    vod_url?: string
    vodTitle?: string
    currentTimeRef?: any
    initialStartTime?: number
};

const height = Dimensions.get('window').width;
const width = Dimensions.get('window').height;

export default ({ vod_url, currentTimeRef, initialStartTime = 0, vodTitle='' }: Props) => {

    const videoPlayerRef = React.useRef<Video | null>();
    const { colors, spacing, textVariants, icons } = useTheme();
    const isPotrait = useOrientation();
    const [isFullScreen, setIsFullScreen] = useState(false);

    const [isPaused, setIsPaused] = useState(false);
    const [isShowControls, setIsShowControls] = useState(false);
    const [disableFullScreenGesture, setDisableFullScreenGesture] = useState(false);

    const [duration, setDuration] = useState(0);
    // const [currentTime, setCurrentTime] = useState(initialStartTime);
    const hasSeeked = useRef(false);
    // const currentTime = useRef(initialStartTime);

    useEffect(() => {
        const dimension = Dimensions.get('screen');
        let h = dimension.height;
        let w = dimension.width;
        setHeight(h);
        setWidth(w);

        if (!isPotrait) {
            setIsFullScreen(true);
        } else {
            setIsFullScreen(false);
        }
    }, [isPotrait])

    useEffect(() => {
        Orientation.addOrientationListener(handleOrientation);
        return () => {
            Orientation.removeOrientationListener(handleOrientation);
        };
    }, []);

    const handleOrientation = (orientation: any) => {
        if (orientation === 'LANDSCAPE-LEFT' || orientation === 'LANDSCAPE-RIGHT') {
            StatusBar.setHidden(true);
            setIsFullScreen(true);
        } else {
            StatusBar.setHidden(false);
            setIsFullScreen(false);
        }
    };

    const onToggleFullScreen = useCallback(() => {
        console.log(isFullScreen);
        if (isFullScreen) {
            Orientation.lockToPortrait();
            Orientation.unlockAllOrientations();
            StatusBar.setHidden(false);
            setIsFullScreen(false);
        } else {
            Orientation.lockToLandscapeLeft();
            // Orientation.unlockAllOrientations();
            StatusBar.setHidden(true);
            setIsFullScreen(true);
        }
    }, [isFullScreen, Orientation])

    const toggleControls = () => {
        setIsShowControls(prev => !prev);
        setDisableFullScreenGesture(prev => !prev);
        debouncedFn();
    }

    const onVideoLoaded = (data: any) => {
        setDuration(data.duration);
        // setCurrentTime(initialStartTime);
        if (currentTimeRef) {
            currentTimeRef.current = data.currentTime;
        }
        if (videoPlayerRef.current) {
            videoPlayerRef.current.seek(initialStartTime);
        }
    }

    const onSeek = (time: number) => {
        // setCurrentTime(time);
        hasSeeked.current = true;
        if (videoPlayerRef.current) {
            videoPlayerRef.current.seek(time);
        }
        if (currentTimeRef) {
            currentTimeRef.current = time;
        }
    };

    // const onVideoProgessing = (data: any) => {
    //     if (!hasSeeked.current) {
    //         // setCurrentTime(data.currentTime)
    //         if (currentTimeRef.current !== undefined) {
    //             currentTimeRef.current = data.currentTime;
    //         }
    //     }
    //     hasSeeked.current = false;
    // }

    const onSkip = (time: any) => {
        if (videoPlayerRef?.current) {
            videoPlayerRef.current.seek(currentTimeRef.current + time);
        }
        // setCurrentTime(currentTime + time);
        if (currentTimeRef) {
            currentTimeRef.current += time;
        }
        debouncedFn();
    }

    const onTogglePlayPause = () => {
        setIsPaused(prev => !prev);
        debouncedFn();
    }

    const onTouchScreen = useCallback(() => {
        setDisableFullScreenGesture(prev => !prev);
        setIsShowControls(prev => !prev);
        debouncedFn();
    }, []);

    const changeControlsState = () => {
        setIsShowControls(prev => false);
        setDisableFullScreenGesture(prev => false);
        return;
    }

    const debouncedFn = useCallback(debounce(changeControlsState, 1000), []);

    return (
        <>
            {isFullScreen &&
                <PlayFullScreenGesture onScreenTouched={onTouchScreen} disableFullScreenGesture={disableFullScreenGesture} />
            }
            <TouchableWithoutFeedback onPress={toggleControls}>
                <View style={styles.bofangBox}>
                    {
                        vod_url !== undefined && <Video 
                            ignoreSilentSwitch={"ignore"}
                            ref={ref => (videoPlayerRef.current = ref)}
                            fullscreen={isFullScreen}
                            paused={isPaused}
                            resizeMode="contain"
                            source={{ uri: vod_url }}
                            onLoad={onVideoLoaded}
                            // onProgress={onVideoProgessing}
                            style={!isFullScreen ? styles.videoPotrait : styles.videoLandscape} />
                    }
                    {vod_url !== undefined && isShowControls &&
                        <VideoControlsOverlay
                            onVideoSeek={onSeek}
                            currentTime={currentTimeRef.current}
                            duration={duration}
                            onFastForward={onSkip}
                            paused={isPaused}
                            isFullScreen={isFullScreen}
                            onTogglePlayPause={onTogglePlayPause}
                            headerTitle={vodTitle}
                            onHandleFullScreen={onToggleFullScreen} />
                    }
                </View>
            </TouchableWithoutFeedback>
        </>
    )
}

const styles = StyleSheet.create({
    videoPotrait: {
        height: '100%',
        width: '100%',
        backgroundColor: '#000',
    },
    videoLandscape: {
        flex: 1,
        maxHeight: height,
        width: '100%',
        backgroundColor: 'black',
    },
    bofangBox: {
        aspectRatio: 428 / 242,
        width: '100%',
    },
    videoHeader: {
        position: 'absolute',
        top: 0,
        left: 0,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        zIndex: 50
    },
});
