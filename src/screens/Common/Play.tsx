import React, { useEffect, useState, useMemo, useRef } from 'react';
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
import { debounce, throttle } from "lodash";

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
import VodPlayer from '../../components/videoPlayer/vodPlayer';
import BottomSheet from '@gorhom/bottom-sheet';

type PlayContextValue = {
    value: string;
    updateValue: (newValue: string) => void;
};

export default ({ navigation, route }: RootStackScreenProps<'播放'>) => {
    const insets = useSafeAreaInsets();

    const { colors, spacing, textVariants, icons } = useTheme();
    const vodReducer: VodReducerState = useAppSelector(({ vodReducer }: RootState) => vodReducer);
    const vod = vodReducer.playVod.vod;
    const isFavorite = vodReducer.playVod.isFavorite;
    const [currentEpisode, setCurrentEpisode] = useState(vod?.episodeWatched === undefined ? 0 : vod.episodeWatched);
    const currentTimeRef = useRef<number>(0);
    const sheetRef = useRef<BottomSheet>(null);
    const isExpandEpisodes = useSharedValue(false);
    const dispatch = useAppDispatch();


    // Calculate the scroll position, number of episodes per row to display given viewport width, margin right
    // to get a even, centered grid
    const EPISODE_RANGE_SIZE = 100;

    const showEpisodeRangeStart = useMemo(() => Math.floor((currentEpisode ? currentEpisode : 0) / EPISODE_RANGE_SIZE) * EPISODE_RANGE_SIZE, [currentEpisode]);
    const showEpisodeRangeEnd = useMemo(
        () => Math.min(showEpisodeRangeStart + EPISODE_RANGE_SIZE,
            vod?.vod_play_list ? vod.vod_play_list.url_count : showEpisodeRangeStart + EPISODE_RANGE_SIZE),
        [currentEpisode, showEpisodeRangeStart]
    );
    const windowDim = useMemo(() => (Dimensions.get('window').width - insets.left - insets.right - (spacing.sideOffset * 3)), [insets]);

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
        return Math.floor((windowDim - (NUM_PER_ROW * BTN_SELECT_WIDTH)) / (NUM_PER_ROW - 1))
    }, [NUM_PER_ROW, BTN_SELECT_WIDTH, windowDim])
    const NUM_OF_ROWS = useMemo(() => vod?.vod_play_list ? Math.floor(vod.vod_play_list.url_count / NUM_PER_ROW) : 0, [vod, NUM_PER_ROW]);
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
        return () => {
            if (vod) {
                dispatch(addVodToHistory(vod, currentTimeRef.current, currentEpisode));
            }
        }
    }, [currentEpisode, vod, currentTimeRef]);

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
        <ScreenContainer containerStyle={{ flex: 1, paddingRight: 0, paddingLeft: 0 }}>
            <View style={styles.videoHeader}>
                <BackButton btnStyle={{ padding: 20 }} onPress={() => navigation.goBack()} />
                <Text style={{ ...textVariants.body, fontSize: 17, fontWeight: '600', color: colors.text, flex: 1, paddingBottom: 3 }}
                    numberOfLines={1}>{vod?.vod_name}
                </Text>
            </View>
            {
                vod?.vod_play_list?.urls?.find(url => url.nid === currentEpisode)?.url !== undefined &&
                <VodPlayer vod_url={vod.vod_play_list.urls.find(url => url.nid === currentEpisode)?.url}
                    currentTimeRef={currentTimeRef}
                    initialStartTime={vod.timeWatched}
                />
            }
            <ScrollView
                nestedScrollEnabled={true}
                contentContainerStyle={{ marginTop: spacing.m }}
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
                                        <FavoriteIcon width={20} height={20} style={{ color: isFavorite ? colors.primary : colors.muted }} />
                                        {
                                            isFavorite
                                                ? <Text style={{ ...textVariants.small, color: colors.primary, paddingBottom: 3 }}>已收藏</Text>
                                                : <Text style={{ ...textVariants.small, color: colors.muted, paddingBottom: 3 }}>收藏</Text>
                                        }
                                    </View>
                                }
                            />}
                            <Text style={{ ...textVariants.subBody, color: colors.muted }} numberOfLines={2}>
                                {`${definedValue(vod?.vod_year)}`}
                                {`${definedValue(vod?.vod_area)}`}
                                {`${definedValue(vod?.vod_class.split(",").join(" "))}`}
                            </Text>
                            <Text style={{ ...textVariants.subBody, color: colors.muted }}>
                                {`更新：${vod ?
                                    new Date(vod?.vod_time_add * 1000).toLocaleDateString().replace(/\//g, '-')
                                    : new Date().toLocaleDateString().replace(/\//g, '-')
                                    }`}
                            </Text>
                            <View style={styles.share} gap={10}>
                                <Text style={{ ...textVariants.subBody, color: colors.muted }}>分享：</Text>
                                <WeChatIcon />
                                <PYQIcon />
                                <SinaIcon />
                                <QQIcon />
                            </View>
                        </View>
                    </View>
                    <Text>
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
                                <Text style={textVariants.body}>选集播放</Text>
                                <TouchableOpacity style={styles.share} onPress={() => sheetRef.current?.snapToIndex(1)}>
                                    <Text style={{ color: colors.muted, fontSize: 15, paddingBottom: 3 }}>{`${showEpisodeRangeStart + 1}-${showEpisodeRangeEnd}集`}</Text>
                                    <MoreArrow style={{ color: colors.muted }} height={icons.sizes.m} width={icons.sizes.m} ></MoreArrow>
                                </TouchableOpacity>
                            </View>
                            <View style={{ height: NUM_OF_ROWS > 6 ? ROW_HEIGHT * 6.5 : 'auto' }}>
                                <ScrollView
                                    contentContainerStyle={styles.episodeList}
                                    nestedScrollEnabled={true}
                                    contentOffset={{ x: 0, y: ROW_HEIGHT * (Math.floor((currentEpisode % EPISODE_RANGE_SIZE) / NUM_PER_ROW)) }}
                                    scrollEnabled={NUM_OF_ROWS > 6}>
                                    {
                                        vod?.vod_play_list && vod.vod_play_list.urls.slice(showEpisodeRangeStart, showEpisodeRangeEnd).map((url, idx) => {
                                            return <TouchableOpacity key={`url-${url.nid}`} style={{
                                                backgroundColor: currentEpisode === url.nid ? colors.primary : colors.search,
                                                padding: spacing.s,
                                                width: BTN_SELECT_WIDTH,
                                                marginBottom: spacing.s,
                                                marginRight: (idx % NUM_PER_ROW) === NUM_PER_ROW - 1 ? 0 : BTN_MARGIN_RIGHT,
                                                ...styles.episodeBtn
                                            }} onPress={() => {
                                                // dispatch(addVodToHistory(vod, 0, url.nid));
                                                setCurrentEpisode(url.nid);
                                            }}>
                                                <Text style={{
                                                    textAlign: 'center',
                                                    ...textVariants.header,
                                                    fontWeight: '500',
                                                    color: currentEpisode === url.nid ? colors.selected : colors.muted,
                                                }}>{url.name}</Text>
                                            </TouchableOpacity>
                                        })
                                    }
                                </ScrollView>
                            </View>
                        </>
                    }
                    {
                        vod && suggestedVods !== undefined && suggestedVods.length > 0 &&
                        <View gap={spacing.l}>
                            <ShowMoreVodButton text={`相关${vod?.type_name}`} onPress={() => {
                                navigation.navigate('片库', { type_id: vod.type_id });
                            }} />
                            <VodListVertical vods={suggestedVods} outerRowPadding={40} />
                        </View>
                    }
                </View>
            </ScrollView>
            <VodEpisodeSelectionModal activeEpisode={currentEpisode}
                episodes={vod?.vod_play_list}
                // isVisible={openVodSelectionModal}
                sheetRef={sheetRef}
                onCancel={() => sheetRef.current?.close()}
                onConfirm={setCurrentEpisode} />
        </ScreenContainer>
    )
}

const styles = StyleSheet.create({
    videoHeader: {
        position: 'absolute',
        top: 0,
        left: 0,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        zIndex: 50,
    },
    videoDescription: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly',
        marginBottom: 10
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
        fontSize: 14
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
