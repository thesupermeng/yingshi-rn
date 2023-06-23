import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { View, TouchableOpacity, TouchableWithoutFeedback, Text, StyleSheet, SafeAreaView, ScrollView, Image } from 'react-native';
import Video from 'react-native-video';
import FavoriteButton from '../../components/button/favoriteVodButton';
import FavoriteIcon from '../../../static/images/favorite.svg'
import ScreenContainer from '../../components/container/screenContainer';
import { useTheme } from '@react-navigation/native';

import { RootStackScreenProps } from '../../types/navigationTypes';
import { SuggestResponseType, VodEpisodeType, VodType } from '../../types/ajaxTypes';
import { useOrientation } from '../../hooks/useOrientation';
import PlayFullScreenGesture from '../../components/gestures/vod/PlayFullScreenGesture';
import { addVodToHistory, toggleVodFavorites } from '../../redux/actions/vodActions';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { RootState } from '../../redux/store';
import { VodRecordType, VodReducerState } from '../../redux/reducers/vodReducer';
import BackButton from '../../components/button/backButton';
import SinaIcon from '../../../static/images/sina.svg';
import WeChatIcon from '../../../static/images/wechat.svg'
import QQIcon from '../../../static/images/qq.svg';
import PYQIcon from '../../../static/images/pyq.svg';
import MoreArrow from '../../../static/images/more_arrow.svg';
import { ListItem } from '@rneui/themed';
import Animated, { useAnimatedStyle, FadeInUp, useSharedValue } from 'react-native-reanimated';
import DownIcon from '../../../static/images/down_arrow_grey.svg';
import UpIcon from '../../../static/images/arrow_up_grey.svg'

const definedValue = (val: any) => {
    if (val === undefined || val === null) {
        return '-';
    }
    return val + ' ';
}
import Sun from '../../../static/images/Sun.svg';
import BackIcon from '../../../static/images/back_arrow.svg';
import { Dimensions } from 'react-native';
import VideoControlsOverlay from '../../components/videoPlayer/VideoControlsOverlay';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import VodEpisodeSelectionModal from '../../components/modal/vodEpisodeSelectionModal';
import FastImage from 'react-native-fast-image';
import Orientation from 'react-native-orientation-locker';
import { API_DOMAIN } from '../../constants';
import { useQuery } from '@tanstack/react-query';
import ShowMoreVodButton from '../../components/button/showMoreVodButton';
import VodListVertical from '../../components/vod/vodListVertical';
import { FlatList } from 'react-native-gesture-handler';

type PlayContextValue = {
    value: string;
    updateValue: (newValue: string) => void;
};

const height = Dimensions.get('window').width;
const width = Dimensions.get('window').height;

export default ({ navigation, route }: RootStackScreenProps<'播放'>) => {

    const videoPlayerRef = React.createRef<any>();
    const insets = useSafeAreaInsets();

    const { colors, spacing, textVariants, icons } = useTheme();
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

    const [currentEpisode, setCurrentEpisode] = useState(vod?.episodeWatched === undefined ? 0 : vod.episodeWatched);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [openVodSelectionModal, setOpenVodSelectionModal] = useState(false);
    const isExpandEpisodes = useSharedValue(false);
    const dispatch = useAppDispatch();

    let controlsOverlayTimeOut: any;


    const EPISODE_RANGE_SIZE = 100;
    const INIT_NUM_OF_EPISODES_ROWS = 6;

    const showEpisodeRangeStart = useMemo(() => Math.floor((currentEpisode ? currentEpisode : 0) / EPISODE_RANGE_SIZE) * EPISODE_RANGE_SIZE, [currentEpisode]);
    const showEpisodeRangeEnd = useMemo(
        () => Math.min(showEpisodeRangeStart + EPISODE_RANGE_SIZE,
            vod ? vod.vod_play_list.url_count : showEpisodeRangeStart + EPISODE_RANGE_SIZE),
        [currentEpisode, showEpisodeRangeStart]
    );
    const windowDim = useMemo(() => (Dimensions.get('window').width - insets.left - insets.right), [insets]);

    const BTN_SELECT_WIDTH = useMemo(() => {
        if (vod?.vod_play_list === undefined || vod === null) {
            return spacing.m;
        }
        let maxTitleLength = vod.vod_play_list.urls.reduce(function (prev, current) {
            return (prev.name.length > current.name.length) ? prev : current
        }).name.length * textVariants.header.fontSize * 0.9;
        maxTitleLength += (2 * spacing.s) // Padding
        return maxTitleLength
    }, [vod]);

    const NUM_PER_ROW = useMemo(() => Math.max(Math.floor(windowDim / (BTN_SELECT_WIDTH + 10)), 1), [windowDim, BTN_SELECT_WIDTH]);
    const BTN_MARGIN_RIGHT = useMemo(() => {
        return (windowDim - (NUM_PER_ROW * BTN_SELECT_WIDTH) - 40) / (NUM_PER_ROW - 1)
    }, [NUM_PER_ROW, BTN_SELECT_WIDTH, windowDim])
    const NUM_OF_ROWS = useMemo(() => vod ? Math.floor(vod.vod_play_list.url_count / NUM_PER_ROW) : 0, [vod, NUM_PER_ROW]);
    const ROW_HEIGHT = useMemo(() => (spacing.s * 3) + textVariants.header.fontSize + 6, [])


    const animatedTextStyle = useAnimatedStyle(() => {
        return {
            display: isExpandEpisodes.value ? 'flex' : 'none',
        };
    }, []);

    const animatedBtnStyle = useAnimatedStyle(() => {
        return {

            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            transform: isExpandEpisodes.value ? [{ rotate: '180deg' }] : [{ rotate: '0deg' }]
        };
    }, []);

    useEffect(() => {
        if (vod) {
            setCurrentEpisode(vod.episodeWatched);
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
            setIsFullScreen(false);
        } else {
            Orientation.lockToLandscapeLeft();
            Orientation.unlockAllOrientations();
            setIsFullScreen(true);
        }
    }

    const toggleControls = () => {
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

    const fetchVod = () => fetch(`${API_DOMAIN}vod/v1/vod?class=${vod?.vod_class.split(",").shift()}&tid=${vod?.type_id}&limit=6`)
        .then(response => response.json())
        .then((json: SuggestResponseType) => {
            return json.data.List
        });

    const { data: suggestedVods } = useQuery({
        queryKey: ["relatedVods", vod],
        queryFn: () => fetchVod()
    });

    return (
        <ScreenContainer style={{ flex: 1, paddingRight: 0, paddingLeft: 0 }}>
            {isFullScreen &&
                <PlayFullScreenGesture onScreenTouched={onTouchScreen} disableFullScreenGesture={disableFullScreenGesture} />
            }
            <TouchableWithoutFeedback onPress={toggleControls}>
                <View style={styles.bofangBox}>
                    {currentEpisode !== undefined && vod &&
                        <Video
                            ref={videoPlayerRef}
                            fullscreen={isFullScreen}
                            paused={isPaused}
                            resizeMode="contain"
                            source={{ uri: vod.vod_play_list.urls.find(url => url.nid === currentEpisode)?.url }}
                            onLoad={onVideoLoaded}
                            // onProgress={onVideoProgessing}
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
            <VodEpisodeSelectionModal activeEpisode={currentEpisode}
                episodes={vod?.vod_play_list}
                isVisible={openVodSelectionModal}
                onCancel={() => setOpenVodSelectionModal(false)}
                onConfirm={setCurrentEpisode} />
            <ScrollView
                nestedScrollEnabled={true}

                contentInsetAdjustmentBehavior="automatic">
                <View style={styles.descriptionContainer2} gap={spacing.m}>
                    <View style={styles.videoDescription}>
                        <FastImage
                            source={{ uri: vod?.vod_pic }}
                            resizeMode={'cover'}
                            style={{ ...styles.descriptionImage, ...styles.imageContainer }}
                        />
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
                            <View style={styles.share} gap={4}>
                                <Text style={{ ...textVariants.body, color: colors.muted }}>分享：</Text>
                                <WeChatIcon />
                                <PYQIcon />
                                <SinaIcon />
                                <QQIcon />
                            </View>
                        </View>
                    </View>
                    <Text >
                        <Text style={styles.descriptionContainer2Text}>
                            {
                                `导演：${definedValue(vod?.vod_director)}${'\n'}` +
                                `编剧：${definedValue(vod?.vod_writer)}${'\n'}` +
                                `主演：${definedValue(vod?.vod_actor)}`
                            }
                        </Text>
                        <Text style={styles.descriptionContainer2Text}>{`${definedValue(vod?.vod_blurb)}`}</Text>
                    </Text>
                    {
                        vod?.vod_play_list !== undefined &&
                        <>
                            <View style={styles.spaceApart} gap={spacing.l}>
                                <Text style={textVariants.header}>选集播放</Text>
                                <TouchableOpacity style={styles.share} onPress={() => setOpenVodSelectionModal(!openVodSelectionModal)}>
                                    <Text style={{ color: colors.text, fontSize: textVariants.body.fontSize }}>{`${showEpisodeRangeStart + 1}-${showEpisodeRangeEnd}集`}</Text>
                                    <MoreArrow style={{ color: colors.muted }} height={icons.sizes.m} width={icons.sizes.m} ></MoreArrow>
                                </TouchableOpacity>
                            </View>
                            <View style={{ height: NUM_OF_ROWS > 6 ? ROW_HEIGHT * 6.5 : 'auto' }}>
                                <ScrollView
                                    contentContainerStyle={styles.episodeList}
                                    nestedScrollEnabled={true}
                                    contentOffset={{x: 0, y: ROW_HEIGHT * (Math.floor(currentEpisode / NUM_PER_ROW))}}
                                    scrollEnabled={NUM_OF_ROWS > 6}>
                                    {
                                        vod && vod.vod_play_list.urls.slice(showEpisodeRangeStart, showEpisodeRangeEnd).map((url, idx) => {
                                            return <TouchableOpacity key={`url-${url.nid}`} style={{
                                                backgroundColor: currentEpisode === url.nid ? colors.primary : colors.search,
                                                padding: spacing.s,
                                                width: BTN_SELECT_WIDTH,
                                                marginBottom: spacing.s,
                                                marginRight: (idx % NUM_PER_ROW) === NUM_PER_ROW - 1 ? 0 : BTN_MARGIN_RIGHT,
                                                ...styles.episodeBtn
                                            }} onPress={() => setCurrentEpisode(url.nid)}>
                                                <Text style={{ textAlign: 'center', ...textVariants.header }}>{url.name}</Text>
                                            </TouchableOpacity>
                                        })
                                    }
                                </ScrollView>
                                {/* {
                            // Show more episodes
                            vod && vod.vod_play_list.url_count > NUM_PER_ROW * INIT_NUM_OF_EPISODES_ROWS &&
                            <>
                                <Animated.View
                                    style={animatedStyle}
                                    entering={FadeInUp}
                                    exiting={FadeInUp}
                                >
                                    {
                                        vod && vod.vod_play_list.urls.slice(NUM_PER_ROW * INIT_NUM_OF_EPISODES_ROWS, showEpisodeRangeEnd).map(url =>
                                            <TouchableOpacity key={`url=-${url.nid}`} style={{
                                                backgroundColor: colors.primary,
                                                padding: spacing.s,
                                                width: BTN_SELECT_WIDTH,
                                                marginBottom: spacing.s,
                                                marginRight: BTN_MARGIN_RIGHT,
                                                ...styles.episodeBtn
                                            }}>
                                                <Text style={{ textAlign: 'center', ...textVariants.header }}>{url.name}</Text>
                                            </TouchableOpacity>)
                                    }
                                </Animated.View>
                                <Animated.View style={animatedBtnStyle}>
                                    <TouchableOpacity style={{ height: icons.sizes.l * 2, width: icons.sizes.l * 2, ...styles.share, justifyContent: 'center', }}
                                        onPress={() => isExpandEpisodes.value = !isExpandEpisodes.value}>
                                        <DownIcon height={icons.sizes.l} width={icons.sizes.l} />
                                    </TouchableOpacity>
                                </Animated.View>
                            </>
                        } */}

                            </View>
                        </>
                    }
                    {
                        vod && suggestedVods !== undefined && suggestedVods.length > 0 &&
                        <View style={{ marginTop: spacing.m }} gap={spacing.l}>
                            <ShowMoreVodButton text={`相关${vod?.type_name}`} onPress={() => {
                                navigation.navigate('片库', { type_id: vod.type_id });
                            }} />
                            <VodListVertical vods={suggestedVods} outerRowPadding={40} />
                        </View>
                    }
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
        marginBottom: 20
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
    },
    spaceApart: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    episodeBtn: {
        borderRadius: 8,
    },
    episodeList: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
    }
});
