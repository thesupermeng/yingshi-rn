import React, { useEffect, useState, useMemo, useRef, useCallback } from 'react';
import { View, TouchableOpacity, Share, Text, StyleSheet, Alert, ScrollView, Image } from 'react-native';
import Video from 'react-native-video';
import FavoriteButton from '../../components/button/favoriteVodButton';
import FavoriteIcon from '../../../static/images/favorite.svg'
import ScreenContainer from '../../components/container/screenContainer';
import { useTheme, useFocusEffect } from '@react-navigation/native';

import { RootStackScreenProps } from '../../types/navigationTypes';
import { SuggestResponseType } from '../../types/ajaxTypes';
import { addVodToHistory } from '../../redux/actions/vodActions';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { RootState } from '../../redux/store';
import { FavoriteVodReducerState, VodReducerState } from '../../redux/reducers/vodReducer';
import BackButton from '../../components/button/backButton';
import SinaIcon from '../../../static/images/sina.svg';
import WeChatIcon from '../../../static/images/wechat.svg'
import QQIcon from '../../../static/images/qq.svg';
import PYQIcon from '../../../static/images/pyq.svg';
import MoreArrow from '../../../static/images/more_arrow.svg';
import Animated, { useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import Orientation from 'react-native-orientation-locker';
import { getMaxWidth } from '../../helper';

import { Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import VodEpisodeSelectionModal from '../../components/modal/vodEpisodeSelectionModal';
import FastImage from 'react-native-fast-image';
import { API_DOMAIN } from '../../constants';
import { useQuery } from '@tanstack/react-query';
import ShowMoreVodButton from '../../components/button/showMoreVodButton';
import VodListVertical from '../../components/vod/vodListVertical';
import VodPlayer from '../../components/videoPlayer/vodPlayer';
import BottomSheet from '@gorhom/bottom-sheet';

type PlayContextValue = {
    value: string;
    updateValue: (newValue: string) => void;
};

const definedValue = (val: any) => {
    if (val === undefined || val === null) {
        return '';
    }
    return val + ' ';
}

export default ({ navigation, route }: RootStackScreenProps<'播放'>) => {
    const insets = useSafeAreaInsets();

    const { colors, spacing, textVariants, icons } = useTheme();
    const vodReducer: VodReducerState = useAppSelector(({ vodReducer }: RootState) => vodReducer);
    const vodFavouriteReducer: FavoriteVodReducerState = useAppSelector(({ vodFavouritesReducer }: RootState) => vodFavouritesReducer);

    const vod = vodReducer.playVod.vod;
    const isFavorite = vodFavouriteReducer.favorites.some(x => x.vod_id === vod?.vod_id);
    const [currentEpisode, setCurrentEpisode] = useState(vod?.episodeWatched === undefined ? 0 : vod.episodeWatched);
    const currentTimeRef = useRef<number>(0);
    const sheetRef = useRef<BottomSheet>(null);
    const isExpandEpisodes = useSharedValue(false);
    const dispatch = useAppDispatch();

    const [dismountPlayer, setDismountPlayer] = useState(false);

    // Calculate the scroll position, number of episodes per row to display given viewport width, margin right
    // to get a even, centered grid
    const EPISODE_RANGE_SIZE = 100;

    const showEpisodeRangeStart = useMemo(() => Math.floor((currentEpisode ? currentEpisode : 0) / EPISODE_RANGE_SIZE) * EPISODE_RANGE_SIZE, [currentEpisode]);
    const showEpisodeRangeEnd = useMemo(
        () => Math.min(showEpisodeRangeStart + EPISODE_RANGE_SIZE,
            vod?.vod_play_list ? vod.vod_play_list.url_count : showEpisodeRangeStart + EPISODE_RANGE_SIZE),
        [currentEpisode, showEpisodeRangeStart]
    );
    const windowDim = useMemo(() => (Dimensions.get('window').width - insets.left - insets.right - (spacing.sideOffset * 2.5)), [insets]);

    const BTN_SELECT_WIDTH = useMemo(() => {
        if (vod?.vod_play_list === undefined || vod === null) {
            return spacing.m;
        }
        const val = textVariants?.header?.fontSize === undefined ? 16 : textVariants.header.fontSize;
        const episodes = vod.vod_play_list.urls.slice(showEpisodeRangeStart, showEpisodeRangeEnd);
        let maxTitleWidth = 0;
        for (const ep of episodes) {
            const width = getMaxWidth(ep.name, val);
            if (width > maxTitleWidth) {
                maxTitleWidth = width;
            }
        }
        maxTitleWidth += (2 * spacing.s) // Padding
        return maxTitleWidth
    }, [vod, showEpisodeRangeStart, showEpisodeRangeEnd]);

    const NUM_PER_ROW = useMemo(() => Math.max(Math.floor(windowDim / (BTN_SELECT_WIDTH + 10)), 1), [windowDim, BTN_SELECT_WIDTH]);
    const BTN_MARGIN_RIGHT = useMemo(() => {
        let mr = 0;
        if (NUM_PER_ROW > 1) {
            mr = Math.floor((windowDim - (NUM_PER_ROW * BTN_SELECT_WIDTH)) / (NUM_PER_ROW - 1))
        }
        return Math.min(mr, BTN_SELECT_WIDTH / 2);
    }, [NUM_PER_ROW, BTN_SELECT_WIDTH, windowDim])

    const NUM_OF_ROWS = useMemo(() => vod?.vod_play_list ? Math.floor(vod.vod_play_list.url_count / NUM_PER_ROW) : 0, [vod, NUM_PER_ROW]);
    const ROW_HEIGHT = useMemo(() => {
        const height = textVariants?.header?.fontSize === undefined ? 22 : textVariants.header.fontSize + 6;
        return (spacing.s * 3) + height;
    }, [])
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

    const onShare = async () => {
        try {
            const result = await Share.share({
                message:
                    `《${vod?.vod_name}》高清播放${'\n'}https://yingshi.tv/index.php/vod/play/id/${vod?.vod_id}/sid/1/nid/${currentEpisode + 1}.html${'\n'}影视TV-海量高清视频在线观看`,
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error: any) {
            Alert.alert(error.message);
        }
    };

    useEffect(() => {
        return () => {
            if (vod) {
                dispatch(addVodToHistory(vod, currentTimeRef.current, currentEpisode));
            }
        }
    }, [currentEpisode, vod, currentTimeRef.current]);

    const fetchVod = () => fetch(`${API_DOMAIN}vod/v1/vod?class=${vod?.vod_class?.split(",").shift()}&tid=${vod?.type_id}&limit=6`)
        .then(response => response.json())
        .then((json: SuggestResponseType) => {
            return json.data.List
        });

    useEffect(() => {
        setCurrentEpisode(vod?.episodeWatched === undefined ? 0 : vod.episodeWatched);
    }, [vod])

    const { data: suggestedVods } = useQuery({
        queryKey: ["relatedVods", vod],
        queryFn: () => fetchVod()
    });

    useFocusEffect(
        useCallback(() => {
            return () => {
                setDismountPlayer(true);
                Orientation.unlockAllOrientations();
            };
        }, [])
    );
    return (
        <ScreenContainer containerStyle={{ flex: 1, paddingRight: 0, paddingLeft: 0 }}>
            {
                vod?.vod_play_list?.urls?.find(url => url.nid === currentEpisode)?.url !== undefined && !dismountPlayer &&
                <VodPlayer vod_url={vod.vod_play_list.urls.find(url => url.nid === currentEpisode)?.url}
                    currentTimeRef={currentTimeRef}
                    initialStartTime={vod.timeWatched}
                    vodTitle={vod.vod_name}
                />
            }
            <ScrollView
                nestedScrollEnabled={true}
                contentContainerStyle={{ marginTop: spacing.m }}
                contentInsetAdjustmentBehavior="automatic">
                <View style={{ ...styles.descriptionContainer2, gap: spacing.m }}>
                    <View style={styles.videoDescription}>
                        <FastImage
                            source={{ uri: vod?.vod_pic }}
                            resizeMode={'cover'}
                            style={{ ...styles.descriptionImage, ...styles.imageContainer }}
                        />
                        <View style={styles.descriptionContainer}>
                            {vod && <FavoriteButton
                                initialState={isFavorite}
                                vod={vod}
                                leftIcon={
                                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: spacing.xxs }}>
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
                                {`${definedValue(vod?.vod_class?.split(",").join(" "))}`}
                            </Text>
                            <Text style={{ ...textVariants.subBody, color: colors.muted }}>
                                {`更新：${vod ?
                                    new Date(vod?.vod_time_add * 1000).toLocaleDateString('en-GB').replace(/\//g, '-')
                                    : new Date().toLocaleDateString('en-GB').replace(/\//g, '-')
                                    }`}
                            </Text>
                            <TouchableOpacity onPress={onShare}>
                                <View style={{ ...styles.share, gap: 10 }}>
                                    <Text style={{ ...textVariants.subBody, color: colors.muted }}>分享：</Text>
                                    <WeChatIcon />
                                    <PYQIcon />
                                    <SinaIcon />
                                    <QQIcon />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Text>
                        <Text style={styles.descriptionContainer2Text}>
                            {
                                `导演：${definedValue(vod?.vod_director)}${'\n'}` +
                                `主演：${definedValue(vod?.vod_actor)}`
                            }
                        </Text>
                        <Text style={styles.descriptionContainer2Text}>{`${definedValue(vod?.vod_blurb)}`}</Text>
                    </Text>
                    {
                        vod?.vod_play_list !== undefined &&
                        <>
                            <View style={{ ...styles.spaceApart, gap: spacing.l }}>
                                <Text style={textVariants.body}>选集播放</Text>
                                {
                                    showEpisodeRangeEnd - showEpisodeRangeStart === 100 &&
                                    <TouchableOpacity style={styles.share} onPress={() => sheetRef.current?.snapToIndex(1)}>
                                        <Text style={{ color: colors.muted, fontSize: 15, paddingBottom: 3 }}>{`${showEpisodeRangeStart + 1}-${showEpisodeRangeEnd}集`}</Text>
                                        <MoreArrow style={{ color: colors.muted }} height={icons.sizes.m} width={icons.sizes.m} ></MoreArrow>
                                    </TouchableOpacity>
                                }
                            </View>
                            <View style={{ height: NUM_OF_ROWS > 6 ? ROW_HEIGHT * 6.5 : 'auto' }}>
                                <ScrollView
                                    contentContainerStyle={styles.episodeList}
                                    nestedScrollEnabled={true}
                                    contentOffset={{ x: 0, y: ROW_HEIGHT * (Math.floor((currentEpisode % EPISODE_RANGE_SIZE) / NUM_PER_ROW)) }}
                                >
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
                        vod && suggestedVods !== undefined && suggestedVods?.length > 0 &&
                        <View style={{ gap: spacing.l }}>
                            <ShowMoreVodButton text={`相关${vod?.type_name}`} onPress={() => {
                                navigation.navigate('片库', { type_id: vod.type_id });
                            }} />
                            <VodListVertical vods={suggestedVods} outerRowPadding={2 * (20 - spacing.sideOffset)} />
                        </View>
                    }
                </View>
            </ScrollView>
            {
                showEpisodeRangeEnd - showEpisodeRangeStart === 100 &&
                <VodEpisodeSelectionModal
                    activeEpisode={currentEpisode}
                    episodes={vod?.vod_play_list}
                    sheetRef={sheetRef}
                    onCancel={() => sheetRef.current?.close()}
                    onConfirm={setCurrentEpisode} />
            }
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
