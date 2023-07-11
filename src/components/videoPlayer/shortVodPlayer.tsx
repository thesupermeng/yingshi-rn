import React, { useEffect, useState, memo, useMemo, useRef } from 'react';
import { View, TouchableWithoutFeedback, StyleSheet, TouchableOpacity, Text, Dimensions } from 'react-native';
import Video, { OnProgressData } from 'react-native-video';
import { debounce, throttle } from "lodash";
import PlayIcon from '../../../static/images/blackPlay.svg';
import PauseIcon from '../../../static/images/pause.svg';

import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import FastImage from 'react-native-fast-image';
import { Slider } from '@rneui/themed';

interface Props {
    vod_url?: string
    thumbnail?: string
    isActive?: boolean
    videoTitle?: string
    displayHeight: number
};

function ShortVideoPlayer({ vod_url, isActive, thumbnail, videoTitle, displayHeight = 0 }: Props) {
    const bottomTabHeight = useBottomTabBarHeight();
    const [isBuffering, setIsBuffering] = useState();
    const videoRef = useRef<Video>(null);
    const [paused, setPaused] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [showOverlay, setShowOverlay] = useState(false);
    const timer = useRef<number>(0);
    const iconTimer = useRef<number>(0);
    const [showIcon, setShowIcon] = useState(false);

    const onBuffer = (bufferObj: any) => {
        setIsBuffering(bufferObj.isBuffering);
    }

    const onError = (errorObj: any) => {
        // console.log(errorObj)
    }

    const handleProgress = (progress: OnProgressData) => {
        setCurrentTime(progress.currentTime);
    };

    const showControls = () => {
        clearTimeout(timer.current);
        setShowOverlay(true);
        timer.current = setTimeout(() => setShowOverlay(false), 3000);
    }
    const handleSeek = useMemo(() => throttle((value: number) => {
        showControls();
        if (videoRef.current) {
            videoRef.current.seek(value);
        }
    }, 250), [videoRef.current, timer.current])

    const handlePlayPause = () => {
        clearTimeout(iconTimer.current);
        setShowIcon(true);
        if (paused) {
            iconTimer.current = setTimeout(() => setShowIcon(false), 1000);
        }
        setPaused(!paused);
    };

    const handleLoad = (meta: any) => {
        setDuration(meta.duration);
    };

    return (
        <TouchableWithoutFeedback onPress={() => {
            showControls();
            if (showOverlay) {
                handlePlayPause();
            }
        }}
        >
            <View style={[
                styles.container,
                { height: displayHeight },
            ]}>
                {isBuffering &&
                    <View style={styles.buffering}>
                        <FastImage
                            source={require('../../../static/images/videoBufferLoading.gif')}
                            style={{ width: 100, height: 100 }}
                            resizeMode="contain"
                        />
                    </View>
                }
                <Video
                    ref={videoRef}
                    resizeMode="contain"
                    poster={thumbnail}
                    source={{ uri: vod_url }}
                    onBuffer={onBuffer}
                    onError={onError}
                    repeat={true}
                    style={styles.video}
                    // ignoreSilentSwitch={"ignore"}
                    paused={!isActive || paused}
                    onLoad={handleLoad}
                    onProgress={handleProgress}
                    progressUpdateInterval={400}
                />
                <View style={{ position: 'absolute', left: (Dimensions.get('window').width - 80) / 2, top: (Dimensions.get('window').height - 80) / 2, zIndex: 999 }}>
                    {
                        showIcon && (
                            paused
                                ? <PauseIcon />
                                : <PlayIcon />
                        )
                    }
                </View>
                <View style={{ position: 'absolute', left: 0, bottom: 0, width: '100%', justifyContent: 'flex-end', padding: 20, paddingBottom: 40 }}>
                    <View style={{ marginTop: 10, flexDirection: 'row' }}>

                        {/* <View style={{ flex: 10, flexDirection: 'column', justifyContent: 'flex-end', marginRight: 35 }}> */}
                        <View style={{ flex: 10, flexDirection: 'column', justifyContent: 'flex-end' }}>
                            <TouchableOpacity>
                                <Text style={{ fontSize: 14, color: '#fff' }}>{videoTitle}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
                <Slider
                    style={styles.slider}
                    maximumValue={duration}
                    minimumValue={0}
                    disabled={!showOverlay}
                    // allowTouchTrack={true}
                    thumbStyle={{ height: showOverlay ? 20 : 1, width: showOverlay ? 20 : 1, }}
                    value={currentTime}
                    onValueChange={handleSeek}
                    onSlidingComplete={handleSeek}
                    minimumTrackTintColor={'#FAC33D'}
                    maximumTrackTintColor={'#FFFFFF'}
                    thumbTintColor={'#FFFFFF'}
                />
            </View>
        </TouchableWithoutFeedback>
    );
}
export default memo(ShortVideoPlayer);

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    video: {
        position: "absolute",
        width: "100%",
        height: "100%",
    },
    bottomSection: {
        position: "absolute",
        bottom: 0,
        flexDirection: "row",
        width: "100%",
        paddingHorizontal: 8,
        paddingBottom: 16,
    },
    bottomLeftSection: {
        flex: 4,
    },
    bottomRightSection: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "flex-end",
    },
    channelName: {
        color: "white",
        fontWeight: "bold",
    },
    caption: {
        color: "white",
        marginVertical: 8,
    },
    musicNameContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    musicNameIcon: {
        width: 12,
        height: 12,
        marginRight: 8,
    },
    musicName: {
        color: "white",
    },
    musicDisc: {
        width: 40,
        height: 40,
    },
    verticalBar: {
        position: "absolute",
        right: 8,
        bottom: 72,
    },
    verticalBarItem: {
        marginBottom: 24,
        alignItems: "center",
    },
    verticalBarIcon: {
        width: 32,
        height: 32,
    },
    verticalBarText: {
        color: "white",
        marginTop: 4,
    },
    avatarContainer: {
        marginBottom: 48,
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
    },
    followButton: {
        position: "absolute",
        bottom: -8,
    },
    followIcon: {
        width: 21,
        height: 21,
    },
    floatingMusicNote: {
        position: "absolute",
        right: 40,
        bottom: 16,
        width: 16,
        height: 16,
        tintColor: "white",
    },
    buffering: {
        paddingHorizontal: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 3,
        color: 'yellow',
        position: 'absolute',
        top: '40%',
        left: '36%',
        zIndex: 100
    },
    slider: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        right: 0,
        height: 40
    }
});
