import { useIsFocused, useTheme } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import LinearGradient from "react-native-linear-gradient";
import Video from "react-native-video"
import BackButton from "../button/backButton";
import { RectButton } from "react-native-gesture-handler";
import React from "react";
import ProjectIcon from '@static/images/project.svg'
import MinimizeScreen from '@static/images/minimizeScreen.svg';
import FullScreen from '@static/images/fullScreen.svg';
import { CPressable } from "../atoms";
import FastImage from '../common/customFastImage';


type Props = {
    videoPlayerRef: any,
    type: 'image' | 'video',
    url: string,
    countdownTime: number,
    isFullScreen: boolean,
    isShowShare: boolean,
    onPressAd: () => void,
    onGoBack: () => void,
    onShare: () => void,
    onPressFullScreenBtn: () => void,
}

export const AdVideoImage = ({
    videoPlayerRef,
    type = 'video',
    url,
    countdownTime,
    isFullScreen,
    isShowShare,
    onPressAd,
    onGoBack,
    onShare,
    onPressFullScreenBtn,
}: Props) => {
    const { colors } = useTheme();

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
            />
        }


        <View style={styles.countdownContainer} >
            <Text style={{ color: colors.primary }}>
                {countdownTime} 秒
            </Text>

            <Text style={{ color: 'white' }}>
                后关闭广告
            </Text>

            <View style={styles.verticalLine} />

            <Text style={{ color: 'white' }}>
                会员去广告 》
            </Text>
        </View>

        <LinearGradient
            colors={['transparent', 'black']}
            start={{ x: 0.5, y: 0.8 }}
            end={{ x: 0.5, y: 0 }}
            style={styles.topBlur}
        >
            <View style={{ ...styles.videoHeader, marginRight: isFullScreen ? 20 : 0 }}>
                <TouchableOpacity onPress={() => onGoBack()} style={{ flexDirection: 'row', alignItems: 'center', flexShrink: 1, paddingRight: 10, }}>
                    <BackButton btnStyle={styles.backBtn} />
                </TouchableOpacity>
                {isShowShare &&
                    <RectButton
                        disallowInterruption={true}
                        onPress={onShare}>
                        <ProjectIcon width={30} height={30} />
                    </RectButton>
                }
            </View>
        </LinearGradient>

        <LinearGradient
            colors={['transparent', 'black']}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 0.8 }}
            style={styles.bottomBlur}
        >
            <RectButton
                disallowInterruption={true}
                onPress={onPressFullScreenBtn}>
                {isFullScreen
                    ? <MinimizeScreen width={30} height={30} />
                    : <FullScreen width={30} height={30} />
                }
            </RectButton>
        </LinearGradient>
    </CPressable>
}

const styles = StyleSheet.create({
    countdownContainer: {
        position: 'absolute',
        right: 0,
        top: 50,
        zIndex: 999,
        backgroundColor: '#00000055',
        flexDirection: 'row',
        paddingVertical: 6,
        paddingHorizontal: 10,
    },
    verticalLine: {
        height: '100%',
        width: 2,
        borderRadius: 8,
        backgroundColor: '#00000044',
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
