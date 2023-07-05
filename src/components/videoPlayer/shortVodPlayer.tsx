import React, { useEffect, useState, memo, useCallback, useRef } from 'react';
import { View, TouchableWithoutFeedback, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Video from 'react-native-video';
import { useOrientation } from '../../hooks/useOrientation';
import PlayFullScreenGesture from '../gestures/vod/PlayFullScreenGesture';
import { debounce, throttle } from "lodash";
import { useTheme, useFocusEffect } from '@react-navigation/native';
import { Dimensions } from 'react-native';
import VideoControlsOverlay from './VideoControlsOverlay';
import Orientation from 'react-native-orientation-locker';
import Play from '../../../static/images/blackPlay.svg';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import FastImage from 'react-native-fast-image';

interface Props {
    vod_url?: string
    thumbnail?: string
    isActive?: boolean
    videoTitle?: string
    displayHeight: number | null
};

function ShortVideoPlayer({ vod_url, isActive, thumbnail, videoTitle, displayHeight }: Props) {
    const bottomTabHeight = useBottomTabBarHeight();
    const [isBuffering, setIsBuffering] = useState();
    // console.log(vod_url, 'playing', isActive)

    const onBuffer = (bufferObj: any) => {
        setIsBuffering(bufferObj.isBuffering);
    }

    return (
        <View
            style={[
                styles.container,
                { height: displayHeight },
            ]}
        >
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
                resizeMode="contain"
                poster={thumbnail}
                source={{ uri: vod_url }}
                onBuffer={onBuffer}
                repeat={true}
                style={styles.video}
                paused={!isActive}
            />
            <View column style={{ position: 'absolute', left: 0, bottom: 0, width: '100%', justifyContent: 'flex-end', padding: 20, paddingBottom: 30 }}>
                <View style={{ marginTop: 10, flexDirection: 'row' }}>
                    {/* <View style={{ flex: 10, flexDirection: 'column', justifyContent: 'flex-end', marginRight: 35 }}> */}
                    <View style={{ flex: 10, flexDirection: 'column', justifyContent: 'flex-end' }}>
                        <TouchableOpacity row style={{ background: 'rgba(255, 255, 255, 0.16)', borderRadius: 17 }}>
                            <Text style={{ fontSize: 14, color: '#fff' }}>{videoTitle}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
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
});
