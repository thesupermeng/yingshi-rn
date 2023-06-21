import React, { useEffect, useState, useCallback } from 'react';
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
import LinearGradient from 'react-native-linear-gradient';
import SinaIcon from '../../../static/images/sina.svg';
import WeChatIcon from '../../../static/images/wechat.svg'
import QQIcon from '../../../static/images/qq.svg';
import PYQIcon from '../../../static/images/pyq.svg';
import debounce = require("lodash.debounce");

const definedValue = (val: any) => {
    if (val === undefined || val === null) {
        return '';
    }
    return val + ' ';
}
import Sun from '../../../static/images/Sun.svg';
import BackIcon from '../../../static/images/back_arrow.svg';
import { Dimensions } from 'react-native';
import VideoControlsOverlay from '../../components/videoPlayer/VideoControlsOverlay';
import Orientation from 'react-native-orientation-locker';

type PlayContextValue = {
    value: string;
    updateValue: (newValue: string) => void;
};

const height = Dimensions.get('window').width;
const width = Dimensions.get('window').height;

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
    const [disableFullScreenGesture, setDisableFullScreenGesture] = useState(false);

    const [episodeUrl, setEpisodeUrl] = useState("");
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (vod) {
            setEpisodeUrl(vod.vod_play_list.urls[0]?.url);
            dispatch(addVodToHistory(vod, 0));
        }
    }, [vod])
    useEffect(() => {
        // const dimension = Dimensions.get('screen');
        // let h = dimension.height;
        // let w = dimension.width;

        // setHeight(h);
        // setWidth(w);

        // if (!isPotrait) {
        //     setIsFullScreen(true);
        //     console.log("FULL SCREEN NW");
        // }else{
        //     setIsFullScreen(false);
        //     console.log("NOPEEEE FULL SCREEN NOW");
        // }
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

    const onToggleFullScreen = () => {
        if (isFullScreen) {
            Orientation.lockToPortrait();
            Orientation.unlockAllOrientations();
        } else {
            Orientation.lockToLandscapeLeft();
            Orientation.unlockAllOrientations();
        }
    }

    const toggleControls = () => {
        console.log('Toggle Controls');
        setIsShowControls(prev => !prev);
        setDisableFullScreenGesture(prev => !prev);
        debouncedFn();
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
        console.log('togglePLAYPAUSE');
        setIsPaused(prev => !prev);
        debouncedFn();
    }

    const onTouchScreen = useCallback(() => {
        console.log('TOUCHTYYYTTTT')
        setDisableFullScreenGesture(prev => !prev);
        setIsShowControls(prev => !prev);
        debouncedFn();
    }, []);

    const changeControlsState = () => {
        setIsShowControls(prev => false);
        setDisableFullScreenGesture(prev => false);
        return;
    }

    const debounce = (func: any) => {
        let timer: any;
        return function (...args: any) {
            const context = this;
            if (timer) clearTimeout(timer);
            timer = setTimeout(() => {
                timer = null;
                func.apply(context, args);
            }, 2000);
        };
    };
    
    const debouncedFn = useCallback(debounce(changeControlsState), []);

    return (
        <ScreenContainer style={{ flex: 1, paddingRight: 0, paddingLeft: 0 }}>
            {isFullScreen && 
                <PlayFullScreenGesture onScreenTouched={onTouchScreen} disableFullScreenGesture={disableFullScreenGesture} />
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
                            style={!isFullScreen ? styles.videoPotrait : styles.videoLandscape} />
                    }
                    {isShowControls &&
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
                            <Text style={{ ...textVariants.body, color: colors.muted }} numberOfLines={2}>
                                {`${definedValue(vod?.vod_year)}`}
                                {`${definedValue(vod?.vod_area)}`}
                                {`${definedValue(vod?.vod_class.split(",").join(" "))}`}
                            </Text>
                            <Text style={{ ...textVariants.body, color: colors.muted }}>
                                {`更新：${vod ?
                                    new Date(vod?.vod_time_add * 1000).toLocaleDateString().replace(/\//g, '-')
                                    : new Date().toLocaleDateString().replace(/\//g, '-')
                                    }`}
                            </Text>
                            <View style={styles.share}>
                                <Text style={{ ...textVariants.body, color: colors.muted }}>分享：</Text>
                                <WeChatIcon />
                                <PYQIcon />
                                <WeChatIcon />
                                <QQIcon />
                            </View>


                        </View>
                    </View>
                    <View style={styles.descriptionContainer2} gap={spacing.m}>
                        <Text style={styles.descriptionContainer2Text}>
                            {
                                `导演：${definedValue(vod?.vod_director)}${'\n'}编剧：${definedValue(vod?.vod_writer)}${'\n'}主演：${definedValue(vod?.vod_actor)}`
                            }
                        </Text>
                        <Text style={styles.descriptionContainer2Text}>{`${definedValue(vod?.vod_blurb)}`}</Text>
                    </View>
                    {/* <FlatList
                        data={vod?.vod_play_list}
                        renderItem={({ item }: FlatListType) => {
                            return <VodCard vod_name={item.vod_name} vod_pic={item.vod_pic} onPress={() => {
                                dispatch(playVod(item));
                                navigator.navigate('播放', {
                                    vod_id: item.vod_id,
                                })
                            }} />
                        }}
                    /> */}
                </View>
            </ScrollView>
        </ScreenContainer>
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
    share: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    }
});
