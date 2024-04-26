import { useTheme } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import LinearGradient from "react-native-linear-gradient";
import Video from "react-native-video"
import BackButton from "../button/wawa_awayteamfield_airbnbstarselected_button";
import { RectButton } from "react-native-gesture-handler";
import React, { useEffect } from "react";
import ProjectIcon from '@static/images/dataPromotion.svg'
import MinimizeScreen from '@static/images/notificationgrayInouttargetyellowIconedit.svg';
import FullScreen from '@static/images/classesSend.svg';
import { CPressable } from "../atoms";
import FastImage from '../common/wawa_iconarrowrightblack';


type wawaAwayShow = {
    videoPlayerRef: any,
    type: 'image' | 'video',
    url: string,
    countdownTime: number,
    isFullScreen: boolean,
    isShowShare: boolean,
    onPressAd: () => void,
    onPressCountdown?: () => void,
    onGoBack: () => void,
    onShare: () => void,
    onPressFullScreenBtn: () => void,
    onMount?: () => void,
    onUmmount?: () => void,
}

export const AdVideoImage = ({
    videoPlayerRef,
    type = 'video',
    url,
    countdownTime,
    isFullScreen,
    isShowShare,
    onPressAd,
    onPressCountdown,
    onGoBack,
    onShare,
    onPressFullScreenBtn,
    onMount,
    onUmmount,
}: wawaAwayShow) => {
    const { colors } = useTheme();

    useEffect(() => {
        if (onMount) onMount();
        return () => {
            if (onUmmount) onUmmount();
        }
    }, []);

    return <CPressable
        onPress={onPressAd}
    >
        {type === 'image'
            ? <FastImage
                source={{
                    uri: url
                }}
                resizeMode="contain"
                style={styles.video}
            />
            : <Video
                ref={ref => videoPlayerRef.current = ref}
                source={{
                    uri: url,
                }}
                resizeMode="contain"
                style={styles.video}
                playWhenInactive={true}
                repeat={true}
            />
        }

        { }
        <View
            style={styles.topBlur}
        >
            <View style={{ ...styles.videoHeader, marginRight: isFullScreen ? 20 : 0 }}>
                <TouchableOpacity onPress={() => onGoBack()} style={{ flexDirection: 'row', alignItems: 'center', flexShrink: 1, paddingRight: 10, }}>
                    <BackButton btnStyle={styles.backBtn} />
                </TouchableOpacity>

                <CPressable
                    onPress={onPressCountdown}
                    style={styles.countdownContainer}
                >
                    <Text style={{ color: 'white' }}>
                        {countdownTime}s {' '}
                    </Text>

                    <Text style={{ color: 'white' }}>
                        后关闭广告
                    </Text>

                    <View style={styles.verticalLine} />

                    <Text style={{ color: colors.primary }}>
                        VIP跳广告 》
                    </Text>
                </CPressable>
                {/* {isShowShare &&
                    <CPressable onPress={onShare}>
                        <ProjectIcon width={30} height={30} />
                    </CPressable>
                } */}
            </View>
            {/* </LinearGradient> */}
        </View>

        { }
        <View
            style={styles.bottomBlur}
        >
            <CPressable
                onPress={() => {
                    onPressFullScreenBtn()
                }}>
                {isFullScreen
                    ? <MinimizeScreen width={30} height={30} />
                    : <FullScreen width={30} height={30} />
                }
            </CPressable>
            {/* </LinearGradient> */}
        </View>
    </CPressable>
}

const styles = StyleSheet.create({
    countdownContainer: {
        
        
        
        zIndex: 999,
        backgroundColor: '#00000055',
        flexDirection: 'row',
        paddingVertical: 6,
        paddingHorizontal: 10,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
    },
    verticalLine: {
        height: '100%',
        width: 2,
        borderRadius: 8,
        backgroundColor: '#ffffff66',
        marginHorizontal: 4,
    },
    video: {
        width: '100%',
        aspectRatio: 16 / 9,
    },
    topBlur: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        zIndex: 99,
    },
    bottomBlur: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 99,
        alignItems: 'flex-end',
        paddingRight: 10,
    },
    videoHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    backBtn: {
        padding: 20,
    }
});
