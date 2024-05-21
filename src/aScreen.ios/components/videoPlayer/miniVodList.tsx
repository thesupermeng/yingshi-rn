import React, { useState, useCallback, useEffect, forwardRef, useImperativeHandle, useRef } from 'react';
import { View, FlatList, RefreshControl, NativeSyntheticEvent, NativeScrollEvent, Platform } from 'react-native';
import { MiniVideo } from '@type/ajaxTypes';
import ShortVod from '../../components/videoPlayer/shortVod';
import FastImage from "../common/customFastImage";
import { useIsFocused, useTheme } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import UmengAnalytics from '../../../../Umeng/UmengAnalytics';
import { useAppDispatch, useAppSelector, useSelector } from '@hooks/hooks';
import { MINI_SHOW_LOGIN_NUMBER } from '@utility/constants';
import { showLoginAction } from '@redux/actions/screenAction';
import ShortAds from './shortAds';
import { UserStateType } from '@redux/reducers/userReducer';
import { User } from '@models';

interface Props {
    miniVodListRef: any,
    videos: any,
    hasNextPage: boolean | undefined,
    fetchNextPage: any,
    isFetchingNextPage: any,
    isFetching: boolean,
    isActive: boolean,
    inCollectionView?: boolean,
    setParentCurrent?: any,
    initialIndex?: number,
    collection_ori_all_videos?: any,
    enterPosition?: number,
    setCollectionEpisode?: any,
    currentVodIndex?: number,
    handleRefreshMiniVod?: any,
    isRefreshing: boolean,
    isPressTabScroll: boolean;
    videoHeaderReferer?: string,
}

type MiniVodRef = {
    setPause: (pause: boolean) => void;
};

const homeLoadingGif = require('@static/images/home-loading.gif');
const loadingSpinnerGif = require('@static/images/loading-spinner.gif');

export default forwardRef<MiniVodRef, Props>(
    (
        {
            miniVodListRef,
            handleRefreshMiniVod,
            videos,
            initialIndex = 0,
            setParentCurrent = null,
            fetchNextPage,
            hasNextPage,
            isFetchingNextPage,
            isFetching,
            isActive,
            inCollectionView = false,
            setCollectionEpisode,
            isRefreshing = false,
            isPressTabScroll = false,
            videoHeaderReferer,
        }: Props,
        ref,
    ) => {
        const { spacing } = useTheme();
        const isFocus = useIsFocused();

        const [isInitFetching, setInitFetching] = useState(true);
        const [displayHeight, setDisplayHeight] = useState<number>(0);
        const [current, setCurrent] = useState<number>(0);
        const [collectionPartialVideos, setCollectionPartialVideos] = useState(videos);
        const [isPause, setPause] = useState(true);
        const [isScrolling, setIsScrolling] = useState(false);
        const [videoCurrentDurations, setVideoCurrentDurations] = useState<number[]>([]);

        // for analytics used
        const [curAnalyticsIndex, setCurAnalyticsIndex] = useState(0);

        const userState = useSelector<UserStateType>('userReducer');
        const swipeCount = useRef(0);
        const isVip = User.isVip(userState.user);
        const dispatch = useAppDispatch();

        const handleOnScroll = useCallback((e: any) => {
            const positionY = parseFloat(e.nativeEvent.contentOffset.y.toFixed(5));
            const index = Math.floor(positionY / displayHeight);

            if (index >= 0 && displayHeight > 0 && index != current) {
                setCurrent(index);
            }
        }, [displayHeight, current]);

        // ========== for analytics - start ==========
        useEffect(() => {
            if (collectionPartialVideos.length > 0) {
                setCurAnalyticsIndex(0);

                UmengAnalytics.watchAnytimeVideoViewTimesAnalytics({
                    userId: userState.user?.userId ?? '',
                    vod_id: collectionPartialVideos[0].mini_video_id,
                });
            }
        }, [collectionPartialVideos]);

        useEffect(() => {
            if (current > curAnalyticsIndex && current < collectionPartialVideos.length) {
                setCurAnalyticsIndex(current);

                UmengAnalytics.watchAnytimeVideoViewTimesAnalytics({
                    userId: userState.user?.userId ?? '',
                    vod_id: collectionPartialVideos[current].mini_video_id,
                });
            }
        }, [
            current,
            curAnalyticsIndex,
            collectionPartialVideos,
            userState,
        ]);
        // ========== for analytics - end ==========

        // ========== for analytics - end ==========

        useImperativeHandle(ref, () => ({
            setPause: (pause: boolean) => {
                setPause(pause);
            },
        }));

        useEffect(() => {
            if (isInitFetching && !isFetching) setInitFetching(false);
        }, [isFetching, isInitFetching]);

        useEffect(() => {
            setCurrent(initialIndex)
        }, [initialIndex]);

        useEffect(() => {
            setCollectionPartialVideos(videos);

            // set default 0 for all video duration
            setVideoCurrentDurations(videos.map(() => 0));
        }, [videos]);

        useEffect(() => {
            setPause(isFetching || isRefreshing || !isActive || isScrolling);
        }, [isFetching, isRefreshing, isActive, isScrolling])

        const setCollectionEpisodeToTitle = (index: number) => {
            setCollectionEpisode(index);
        }

        const refreshComponent = useCallback(() => {
            return <>
                <RefreshControl
                    refreshing={isRefreshing}
                    onRefresh={handleRefreshMiniVod}
                    tintColor="#FAC33D"
                />
            </>
        }, [isRefreshing]);

        const updateVideoDuration = (index: number, newDuration: number) => {
            // use map function for generate new list for update state
            setVideoCurrentDurations(
                videoCurrentDurations.map((duration, i) => {
                    if (index === i) return newDuration;

                    return duration;
                })
            );
        }

        const renderItem = useCallback(({ item, index }: { item: MiniVideo, index: number }) => {
            let prevPosition = Math.max(0, index - 1);

            if (item.is_ads) {
                return <ShortAds
                    vod={item}
                    thumbnail={item.ads_thumbnail}
                    displayHeight={displayHeight ? displayHeight : 0}
                    isPause={isPause || current !== index}
                    onManualPause={current => {
                        console.log('click pause');
                        setPause(!current);
                    }}
                    isShowVideo={current >= prevPosition && current < index + 2}
                    currentDuration={videoCurrentDurations[index]}
                    isActive={isActive}
                    index={index}
                />
            }

            return (
                <View style={{ height: displayHeight ? displayHeight : 0 }}>
                    {displayHeight != 0 && (current >= prevPosition && current < index + 2) && (
                        <ShortVod
                            vod={item}
                            thumbnail={item.mini_video_image}
                            displayHeight={displayHeight ? displayHeight : 0}
                            inCollectionView={inCollectionView}
                            setCollectionEpisode={setCollectionEpisodeToTitle}
                            isPause={isPause || current !== index}
                            onManualPause={(current) => {
                                setPause(!current);
                            }}
                            isShowVideo={current === index && !isScrolling}
                            currentDuration={videoCurrentDurations[index]}
                            updateVideoDuration={(duration) => updateVideoDuration(index, duration)}
                            isActive={isActive}
                            videoHeaderReferer={videoHeaderReferer}
                        />
                    )}
                </View>
            );
        }, [current, isActive, isPause, isScrolling, displayHeight, videoCurrentDurations, isPressTabScroll]);

        const onLayoutRender = useCallback((event: any) => {
            var { height } = event.nativeEvent.layout;
            const heightStr: string = height.toFixed(5);

            // use substring to prevent rounding
            setDisplayHeight(
                parseFloat(heightStr.substring(0, heightStr.length - 1)),
            );
        }, []);

        const hanldeOnEndReached = useCallback(() => {
            if (!isVip) {
                //   dispatch(showLoginAction());
            } else if (hasNextPage && !isFetchingNextPage && !isFetching) {
                fetchNextPage();
            }
        }, [hasNextPage, isFetchingNextPage, isFetching]);

        const handleOnScrollBeginDrag = useCallback(
            (e: NativeSyntheticEvent<NativeScrollEvent>) => {
                if (!isScrolling) setIsScrolling(true);
            },
            [isScrolling],
        );

        const handleOnMomentumScrollEnd = useCallback(() => {
            setIsScrolling(false);

            // if (isFocus
            //     && Platform.OS !== 'ios'
            //     && User.isGuest(userState.user)
            //     && !User.isVip(userState.user)
            //     && swipeCount.current >= MINI_SHOW_LOGIN_NUMBER
            //     && current >= MINI_SHOW_LOGIN_NUMBER
            // ) {
            //     dispatch(showLoginAction());
            // }
        }, [userState.user, current, isFocus]);

        useEffect(() => {
            if (User.isLogin(userState.user) || User.isVip(userState.user)) return;

            if (swipeCount.current < MINI_SHOW_LOGIN_NUMBER) {
                swipeCount.current++;
            } else {
                // isFocusLogin.current = true;
                // dispatch(showLoginAction());
                // swipeCount.current = 0;
            }
        }, [current, userState.user]);

        return (
            <View style={{ flex: 1 }} onLayout={onLayoutRender}>
                {isInitFetching ?
                    <View style={styles.loadingContainer}>
                        <FastImage
                            source={homeLoadingGif}
                            style={styles.homeLoadingImage}
                            resizeMode={"contain"}
                            useFastImage={true}
                        />
                    </View>
                    : <FlatList
                        ref={miniVodListRef}
                        data={collectionPartialVideos}
                        initialNumToRender={5}
                        maxToRenderPerBatch={3}
                        windowSize={3}
                        refreshControl={refreshComponent()}
                        renderItem={renderItem}
                        horizontal={false}
                        // isRefreshing will change disable (because if pagingEnabled=true, refresh loading will not working)
                        pagingEnabled={isRefreshing ? false : true}
                        scrollEnabled={isRefreshing ? false : true}
                        keyExtractor={(item: any, index: any) => item.mini_video_id.toString()}
                        viewabilityConfig={{ viewAreaCoveragePercentThreshold: 100 }}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        onEndReached={hanldeOnEndReached}
                        onEndReachedThreshold={0.8}
                        ListFooterComponent={
                            <View style={{ ...styles.loading, marginBottom: spacing.xl }}>
                                {hasNextPage &&
                                    <FastImage
                                        style={{ height: 80, width: 80 }}
                                        source={loadingSpinnerGif}
                                        resizeMode={'contain'}
                                    />
                                }
                            </View>
                        }
                        onScroll={handleOnScroll}
                        onScrollBeginDrag={handleOnScrollBeginDrag}
                        onMomentumScrollEnd={handleOnMomentumScrollEnd}
                        scrollsToTop={false}
                    />
                }
            </View>
        )
    }
)

const styles = StyleSheet.create({
    loading: {
        flexDirection: 'row',
        justifyContent: 'center',
        flex: 1
    },
    loadingContainer: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    homeLoadingImage: {
        width: 150,
        height: 150,
        bottom: 50,
        zIndex: 1,
    },
})
