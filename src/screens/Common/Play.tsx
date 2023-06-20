import React, { useEffect, useState, createContext, useContext } from 'react';
import { View, TouchableOpacity, TouchableWithoutFeedback, Text, StyleSheet, SafeAreaView, ScrollView, Image } from 'react-native';
import Video from 'react-native-video';
import { YingshiDarkTheme } from '../../theme';
import FavoriteButton from '../../components/button/favoriteVodButton';
import FavoriteIcon from '../../../static/images/favorite.svg'
import ScreenContainer from '../../components/container/screenContainer';
import { useTheme } from '@react-navigation/native';

import { RootStackScreenProps } from '../../types/navigationTypes';
import { VodType } from '../../types/ajaxTypes';
import { useOrientation } from '../../hooks/useOrientation';
import PlayFullScreenGesture from '../../components/gestures/vod/PlayFullScreenGesture';
import { addVodToHistory, toggleVodFavorites } from '../../redux/actions/vodActions';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { RootState } from '../../redux/store';
import { VodReducerState } from '../../redux/reducers/vodReducer';
import BackButton from '../../components/button/backButton';
import Sun from '../../../static/images/Sun.svg';
import BackIcon from '../../../static/images/back_arrow.svg';
import { Dimensions } from 'react-native';
import VideoControlsOverlay from '../../components/videoPlayer/VideoControlsOverlay';

type PlayContextValue = {
    value: string;
    updateValue: (newValue: string) => void;
};

const PlayContext = createContext<PlayContextValue | undefined>(undefined);

export default ({ navigation, route }: RootStackScreenProps<'播放'>) => {

    const videoPlayerRef = React.createRef<any>();

    const { colors, spacing, textVariants } = useTheme();
    const isPotrait = useOrientation();
    const vodReducer: VodReducerState = useAppSelector(({ vodReducer }: RootState) => vodReducer);
    const vod = vodReducer.playVod.vod;
    const isFavorite = vodReducer.playVod.isFavorite;

    const [isFullScreen, setIsFullScreen] = useState(false);
    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [isShowControls, setIsShowControls] = useState(false);

    const [episodeUrl, setEpisodeUrl] = useState("");
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

    const dispatch = useAppDispatch();

    let controlsOverlayTimeOut: any;

    useEffect(() => {
        if (vod) {
            setEpisodeUrl(vod.vod_play_list.urls[0]?.url);
            dispatch(addVodToHistory(vod, 0));
        }
    }, [vod])
    useEffect(() => {
        const dimension = Dimensions.get('screen');
        let h = dimension.height;
        let w = dimension.width;

        setHeight(h);
        setWidth(w);

        if (!isPotrait) {
            setIsFullScreen(true);
            console.log("FULL SCREEN NW");
        }else{
            setIsFullScreen(false);
            console.log("NOPEEEE FULL SCREEN NOW");
        }
    }, [isPotrait])

    useEffect(() => {
        
    }, [isPaused])

    const toggleControls = () => {
        setIsShowControls(prev => !prev);
        clearTimeout(controlsOverlayTimeOut);
        if(!isShowControls){
            controlsOverlayTimeOut = setTimeout(() => setIsShowControls(prev => !prev), 2000);
        }
    }

    const onVideoLoaded = (data: any) => {
        setDuration(data.duration);
        setCurrentTime(data.currentTime);
    }

    const onSeek = (time: number) => {
        console.log("SEEK : " + time);
        videoPlayerRef.current.seek(time);
        setCurrentTime(time);
    };

    const onVideoProgessing = (data: any) => {
        setCurrentTime(data.currentTime);
    }

    const onSkip = (time: any) => {
        videoPlayerRef.current.seek(currentTime + time);
        setCurrentTime(currentTime + time);
    }

    const onTogglePlayPause = () => {
        setIsPaused(prev => !prev);
    }
    
    return (
        <SafeAreaView style={{ flex: 1 }}>
            {isFullScreen &&
                <PlayFullScreenGesture />
            }
            <TouchableWithoutFeedback onPress={toggleControls}>
                <View style={styles.bofangBox}>
                    {episodeUrl != "" &&
                        <Video
                            ref={videoPlayerRef}
                            fullscreen={isFullScreen}
                            paused={isPaused}
                            resizeMode="contain"
                            source={{ uri: episodeUrl }}
                            onLoad={onVideoLoaded}
                            onProgress={onVideoProgessing}
                            style={!isFullScreen ? styles.videoPotrait : [styles.panView, { height: height }]} />
                    }
                    {isShowControls && !isFullScreen &&
                        <VideoControlsOverlay
                            onVideoSeek={onSeek}
                            currentTime={currentTime}
                            duration={duration}
                            onFastForward={onSkip}
                            paused={isPaused}
                            onTogglePlayPause={onTogglePlayPause} />
                    }
                </View>
            </TouchableWithoutFeedback>
            <View style={styles.videoHeader}>
                <BackButton btnStyle={{ padding: 20 }} onPress={() => navigation.goBack()} />
                <Text style={{ ...textVariants.small, color: colors.text, marginLeft: spacing.s, flex: 1 }} numberOfLines={1}>{vod?.vod_name}</Text>
            </View>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic">
                <View>
                    <View style={styles.videoDescription}>
                        <View style={styles.imageContainer}>
                            <Image
                                source={{ uri: vod?.vod_pic }}
                                resizeMode={'cover'}
                                style={styles.descriptionImage}
                                alt='Thumbnail'
                            />
                        </View>
                        <View style={styles.descriptionContainer}>
                            {vod && <FavoriteButton
                                vod={vod}
                                leftIcon={
                                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} gap={spacing.xxs}>
                                        <FavoriteIcon width={24} height={24} style={{ color: isFavorite ? colors.primary : colors.muted }} />
                                        <Text style={{ color: isFavorite ? colors.primary : colors.muted }}>收藏</Text>
                                    </View>
                                }
                            />}
                            <Text style={styles.descriptionContainerText}>2023 大陆 古装 爱情 仙侠 剧情</Text>
                            <Text style={styles.descriptionContainerText}>更新：2023-02-10</Text>
                            <Text style={styles.descriptionContainerText}>分享：2023-02-10</Text>
                        </View>
                    </View>

                    <View style={styles.descriptionContainer2}>
                        <Text style={styles.descriptionContainer2Text}>
                            导演：瑞恩·库格勒
                            编剧：乔·罗伯特·科尔/瑞恩·库格勒
                            主演：利蒂希娅·赖特/露皮塔·尼永奥/安吉拉·贝塞特/丹娜·奎里拉/温斯顿·杜克/马丁·弗瑞曼/特诺切·韦尔塔/理查德·希夫/多米尼克·索恩/米凯拉·科尔/弗洛伦丝·卡松巴/玛丽亚·梅塞德斯·科罗伊/伊萨赫·德·班克尔/施奎塔·詹姆斯/胡安·卡洛斯·坎图/洁基伯明翰/索佩·阿卢科/小弗洛伊德·安东尼·约翰/布伦特·莫雷尔·加斯金斯/拉希姆·赖利/乔丹·沃克·罗斯
                        </Text>
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    videoPotrait: {
        height: '100%',
        width: '100%',
        backgroundColor: '#000',
    },
    videoLandscape: {
        width: '100%',
        backgroundColor: '#000',
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
    videoDescription: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly',
        padding: 20
    },
    imageContainer: {
        flex: 2
    },
    descriptionImage: {
        width: '100%',
        aspectRatio: 93 / 139,
        borderRadius: 10
    },
    descriptionContainer: {
        flex: 5,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        paddingLeft: 10
    },
    descriptionContainerText: {
        fontSize: 17
    },
    descriptionContainer2: {
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
    },
    descriptionContainer2Text: {
        color: '#9C9C9C',
        fontSize: 16
    },
});
