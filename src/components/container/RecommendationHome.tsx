import React, { memo, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, TouchableWithoutFeedback } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';
import Swiper from 'react-native-swiper';
import ShowMoreVodButton from '../button/showMoreVodButton';
import { VodCarousellResponseType, VodPlaylistResponseType, VodTopicType, VodType, LiveTVStationsResponseType } from '../../types/ajaxTypes';
import FastImage from 'react-native-fast-image'
import { VodReducerState } from '../../redux/reducers/vodReducer';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { RootState } from '../../redux/store';
import VodHistoryList from '../vod/vodHistoryList';
import VodLiveStationList from '../vod/vodLiveStationList';
import { API_DOMAIN, API_DOMAIN_TEST } from '../../constants';
import VodListVertical from '../vod/vodListVertical';
import { playVod, viewPlaylistDetails } from '../../redux/actions/vodActions';
import { useQuery, useInfiniteQuery } from '@tanstack/react-query';
import LinearGradient from 'react-native-linear-gradient';

interface NavType {
    id: number,
    name: string,
}
interface Props {
    vodCarouselRes: VodCarousellResponseType,
    navOptions?: NavType[] | undefined,
    onNavChange?: any,
    navId?: number,
    setScrollEnabled?: any
}

const fetchPlaylist = (page: number) => fetch(`${API_DOMAIN}topic/v1/topic?page=${page}`)
    .then(response => response.json())
    .then((json: VodPlaylistResponseType) => {
        return Object.values(json.data.List)
    })

const RecommendationHome = ({ vodCarouselRes, setScrollEnabled }: Props) => {
    const { colors, textVariants, spacing } = useTheme();
    const vodReducer: VodReducerState = useAppSelector(({ vodReducer }: RootState) => vodReducer);
    const history = vodReducer.history;
    const dispatch = useAppDispatch();
    const navigation = useNavigation();
    const data = vodCarouselRes.data;
    const [results, setResults] = useState<Array<VodTopicType>>([]);
    const { data: playlists, isSuccess, hasNextPage, fetchNextPage, isFetchingNextPage, isFetching } =
        useInfiniteQuery(['vodPlaylist'], ({ pageParam = 1 }) => fetchPlaylist(pageParam), {
            getNextPageParam: (lastPage, allPages) => {
                if (lastPage === null) {
                    return undefined;
                }
                const nextPage =
                    lastPage.length === 10 ? allPages.length + 1 : undefined;
                return nextPage;
            },
            onSuccess: (data) => {
                if (data && data?.pages) {
                    setResults([...results, ...data.pages[data.pages.length - 1].flat()])
                }
            }
        });

    

    const { data: liveStations } = useQuery({
        queryKey: ["LiveTVStations"],
        queryFn: () =>
            fetch(`${API_DOMAIN_TEST}live/v1/livestations`, {})
            .then(response => response.json())
            .then((json: LiveTVStationsResponseType) => {
            return json.data
        }),
    });

    return (
        <FlatList
            ListHeaderComponent={
                <>
                    {
                        data?.carousel[0] && <View style={{ height: 200, paddingLeft: spacing.sideOffset, paddingRight: spacing.sideOffset }}>
                            <Swiper style={styles.wrapper}
                                autoplay
                                nestedScrollEnabled={true}
                                loadMinimal={true}
                                dotColor={colors.sliderDot}
                                activeDotColor={colors.text}
                                dotStyle={styles.dotStyle}
                                paginationStyle={styles.paginationStyle}
                                activeDotStyle={styles.activeDotStyle}>
                                {
                                    data.carousel.map((carouselItem, idx) => {
                                        return <TouchableOpacity key={`slider-${idx}`} onPress={() => {
                                            dispatch(playVod(carouselItem.vod));
                                            navigation.navigate('播放', {
                                                vod_id: carouselItem.carousel_content_id,
                                            });
                                        }}
                                        onPressIn={() => { setScrollEnabled(false) }}
                                        onPressOut={() => { setScrollEnabled(true) }}
                                        delayPressIn={0}
                                        delayPressOut={0}
                                        delayLongPress={0}
                                        >
                                            <FastImage
                                                style={styles.image}
                                                source={{
                                                    uri: carouselItem.carousel_pic_mobile,
                                                    priority: FastImage.priority.normal,
                                                }}
                                                resizeMode={FastImage.resizeMode.cover}
                                            />
                                            <LinearGradient
                                                colors={['transparent', 'black']}
                                                start={{ x: 0.5, y: 0 }}
                                                end={{ x: 0.5, y: 0.6 }}
                                                style={styles.bottomBlur}
                                            />
                                            <Text style={{ ...textVariants.bodyBold, ...styles.carouselTag, color: 'white' }} numberOfLines={1}>{carouselItem.carousel_name}</Text>
                                        </TouchableOpacity>
                                    })
                                }
                            </Swiper>
                        </View>
                    }
                    <View>
                        {
                            history.length > 0 &&
                            <View style={{ gap: spacing.m }}>
                                <View style={{ paddingLeft: spacing.sideOffset, paddingRight: spacing.sideOffset }}>
                                    <ShowMoreVodButton text='继续看' onPress={() => {
                                        navigation.navigate('播放历史');
                                    }} />
                                </View>
                                <View style={{ paddingLeft: spacing.sideOffset }}>
                                    <VodHistoryList vodStyle={styles.vod_hotlist} vodList={history.slice(0, 10)} showInfo='watch_progress' />
                                </View>
                            </View>
                        }
                        {
                            liveStations && liveStations?.length > 0 &&
                            <View style={{ gap: spacing.m }}>
                                <View style={{ paddingLeft: spacing.sideOffset, paddingRight: spacing.sideOffset }}>
                                    <ShowMoreVodButton text='电视台推荐' onPress={() => {
                                        navigation.navigate('电视台列表', { liveStationItemList: liveStations });
                                    }} />
                                </View>
                                <View style={{ paddingLeft: spacing.sideOffset }}>
                                    <VodLiveStationList vodStyle={styles.vod_live_station} liveStationList={liveStations.slice(0, 10)} />
                                </View>
                            </View>
                        }
                        {
                            data?.yunying && data.yunying.length > 0 &&
                            <View style={{ paddingLeft: spacing.sideOffset, paddingRight: spacing.sideOffset, gap: spacing.m }}>
                                <View>
                                    <ShowMoreVodButton text='精选热播' onPress={() => {
                                        navigation.navigate('片库', { type_id: data.yunying[0].type_id });
                                    }} />
                                </View>
                                <VodListVertical vods={data.yunying[0].vod_list.slice(0, 6)} />
                            </View>
                        }
                    </View>
                </>
            }
            data={results}
            onEndReached={() => {
                if (hasNextPage && !isFetchingNextPage && !isFetching) {
                    fetchNextPage();
                }
            }}
            initialNumToRender={0}
            onEndReachedThreshold={0.5}
            renderItem={({ item, index }: { item: VodTopicType, index: number }) =>
                <View style={{ paddingLeft: spacing.sideOffset, paddingRight: spacing.sideOffset, gap: spacing.m }}>
                    <View key={`${item.topic_name}-${index}`} style={{ gap: spacing.m }}>
                        <ShowMoreVodButton text={item.topic_name} onPress={() => {
                            dispatch(viewPlaylistDetails(item));
                            navigation.navigate('PlaylistDetail', { topic_id: item.topic_id });
                        }} />
                        <VodListVertical vods={item.vod_list.slice(0, 6)} />
                    </View>
                </View>

            }
            ListFooterComponent={
                <View style={{ ...styles.loading, marginBottom: spacing.xl }}>
                    {
                        hasNextPage && <FastImage
                            style={{ height: 80, width: 80 }}
                            source={require('../../../static/images/loading-spinner.gif')}
                            resizeMode={FastImage.resizeMode.contain}
                        />
                    }
                    {
                        !(isFetchingNextPage || isFetching) && !hasNextPage &&
                        <Text style={{ ...textVariants.body, color: colors.muted }}>没有更多了</Text>
                    }
                </View>
            }
        />
    )
}

export default memo(RecommendationHome);

const styles = StyleSheet.create({
    wrapper: {
        borderRadius: 100,
        marginTop: 10,
    },
    image: {
        width: '100%',
        height: 160,
        borderRadius: 10,
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    dotStyle: {
        width: 6,
        height: 4
    },
    activeDotStyle: {
        width: 14,
        height: 4
    },
    paginationStyle: {
        top: 173,
        height: 20
    },
    vod_hotlist: {
        height: 99,
        width: 176
    },
    vod_live_station: {
        height: 90,
        width: 150
    },
    nav: {
        flexGrow: 1,
        justifyContent: 'center',
        marginBottom: 10,
    },
    catalogNav: {
        flexGrow: 1,
        justifyContent: 'center',
        marginTop: 5
    },
    vodList: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    bottomBlur: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 45,
        flex: 1,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        opacity: 0.8
    },
    carouselTag: {
        position: 'absolute',
        bottom: 12,
        left: 16,
        marginRight: 16
    },
    loading: {
        flexDirection: 'row',
        justifyContent: 'center',
        flex: 1
    }
})