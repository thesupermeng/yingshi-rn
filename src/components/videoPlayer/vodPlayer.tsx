import React, { useEffect, useState, useMemo, useCallback, useRef } from 'react';
import { View, TouchableWithoutFeedback, StyleSheet, } from 'react-native';
import Video from 'react-native-video';
import { useTheme } from '@react-navigation/native';
import { useOrientation } from '../../hooks/useOrientation';
import PlayFullScreenGesture from '../gestures/vod/PlayFullScreenGesture';
import { debounce, throttle } from "lodash";

import { Dimensions } from 'react-native';
import VideoControlsOverlay from './VideoControlsOverlay';
import Orientation from 'react-native-orientation-locker';

interface Props {
    vod_url?: string
    currentTimeRef?: any
    initialStartTime?: number
};

const height = Dimensions.get('window').width;
const width = Dimensions.get('window').height;

export default ({ vod_url, currentTimeRef, initialStartTime = 0 }: Props) => {

    const videoPlayerRef = React.createRef<any>();
    const { colors, spacing, textVariants, icons } = useTheme();
    const isPotrait = useOrientation();

    const [isFullScreen, setIsFullScreen] = useState(false);
    const [height, setHeight] = useState(0);

    const [width, setWidth] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [isShowControls, setIsShowControls] = useState(false);
    const [disableFullScreenGesture, setDisableFullScreenGesture] = useState(false);

    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(initialStartTime);

    useEffect(() => {
        const dimension = Dimensions.get('screen');
        let h = dimension.height;
        let w = dimension.width;

        setHeight(h);
        setWidth(w);

        if (!isPotrait) {
            setIsFullScreen(true);
            console.log("FULL SCREEN NW");
        } else {
            setIsFullScreen(false);
            console.log("NOPEEEE FULL SCREEN NOW");
        }
    }, [isPotrait])

    useEffect(() => {

    }, [isPaused])

    useEffect(() => {
        Orientation.addOrientationListener(handleOrientation);
        return () => {
            Orientation.removeOrientationListener(handleOrientation);
        };
    }, []);

    const handleOrientation = (orientation: any) => {
        if (orientation === 'LANDSCAPE-LEFT' || orientation === 'LANDSCAPE-RIGHT') {
            setIsFullScreen(true);
        } else {
            setIsFullScreen(false);
        }
    };

    const onToggleFullScreen = useCallback(() => {
        if (isFullScreen) {
            Orientation.lockToPortrait();
            Orientation.unlockAllOrientations();
            setIsFullScreen(false);
        } else {
            Orientation.lockToLandscapeLeft();
            // Orientation.unlockAllOrientations();
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
        setCurrentTime(initialStartTime);
        if (currentTimeRef) {
            currentTimeRef.current = data.currentTime;
        }
        if (videoPlayerRef.current !== null) {
            videoPlayerRef.current.seek(initialStartTime);
        }
    }

    const onSeek = (time: number) => {
        setCurrentTime(time);
        if (videoPlayerRef.current !== null) {
            videoPlayerRef.current.seek(time);
        }
        if (currentTimeRef) {
            currentTimeRef.current = time;
        }
    };

    const onVideoProgessing = useMemo(() => throttle((data: any) => {
        setCurrentTime(data.currentTime)
        if (currentTimeRef.current !== undefined) {
            currentTimeRef.current = data.currentTime;
        }
    }, 500), [])

    const onSkip = (time: any) => {
        if (videoPlayerRef) {
            videoPlayerRef.current.seek(currentTime + time);
        }
        setCurrentTime(currentTime + time);
        if (currentTimeRef) {
            currentTimeRef.current = currentTime + time;
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
                            ref={videoPlayerRef}
                            fullscreen={isFullScreen}
                            paused={isPaused}
                            resizeMode="contain"
                            source={{ uri: vod_url }}
                            onLoad={onVideoLoaded}
                            onProgress={onVideoProgessing}
                            style={!isFullScreen ? styles.videoPotrait : styles.videoLandscape} />
                    }
                    {vod_url !== undefined && isShowControls &&
                        <VideoControlsOverlay
                            onVideoSeek={onSeek}
                            currentTime={currentTime}
                            duration={duration}
                            onFastForward={onSkip}
                            paused={isPaused}
                            isFullScreen={isFullScreen}
                            onTogglePlayPause={onTogglePlayPause}
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
