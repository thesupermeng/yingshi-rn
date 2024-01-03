import React, { useState, useCallback, useEffect, forwardRef, useImperativeHandle, useRef } from 'react';
import { View, FlatList, RefreshControl } from 'react-native';
import { MiniVideo } from '@type/ajaxTypes';
import ShortVod from '../../components/videoPlayer/shortVod';
import FastImage from "../common/customFastImage";
import { useTheme } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import useAnalytics from '@hooks/useAnalytics';
import { userModel } from '@type/userType';
import { RootState } from '@redux/store';
import { useAppDispatch, useAppSelector } from '@hooks/hooks';
import { MINI_SHOW_LOGIN_NUMBER } from '@utility/constants';
import { showLoginAction } from '@redux/actions/screenAction';

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
}

type MiniVodRef = {
    setPause: (pause: boolean) => void;
};

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
        }: Props,
        ref,
    ) => {
        const { spacing } = useTheme();

        const [isInitFetching, setInitFetching] = useState(true);
        const [displayHeight, setDisplayHeight] = useState<number>(0);
        const [current, setCurrent] = useState<number>(0);
        const [collectionPartialVideos, setCollectionPartialVideos] = useState(videos);
        const [isPause, setPause] = useState(true);
        const [isScrolling, setIsScrolling] = useState(false);
        const [videoCurrentDurations, setVideoCurrentDurations] = useState<number[]>([]);

        // for analytics used
        const [preTolVideoViews, setPreTolVideoViews] = useState(0); // previous
        const [curTolVideoViews, setCurTolVideoViews] = useState(1); // current

        const swipeCount = useRef(0);
        const dispatch = useAppDispatch();

        const userState: userModel = useAppSelector(
            ({ userReducer }: RootState) => userReducer
        );

        const handleOnScroll = useCallback((e: any) => {
            const positionY = parseFloat(e.nativeEvent.contentOffset.y.toFixed(5));
            const index = Math.floor(positionY / displayHeight);

            if (index >= 0 && displayHeight > 0 && index != current) {
                setCurrent(index);
            }

            // for analytics used
            if ((index + 1) > curTolVideoViews) {
                setPreTolVideoViews(curTolVideoViews);
                setCurTolVideoViews(index + 1);
            }
        }, [displayHeight, current, curTolVideoViews]);

        // ========== for analytics - start ==========
        const { watchAnytimeVideoViewTimesAnalytics } = useAnalytics();

        useEffect(() => {
            if (!isActive && curTolVideoViews > preTolVideoViews) {
                watchAnytimeVideoViewTimesAnalytics({
                    userId: userState.userId,
                    vod_id: collectionPartialVideos[0].mini_video_id,
                });
            }
        }, [isActive, preTolVideoViews, curTolVideoViews]);

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

            if (inCollectionView == true) {
            }

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
            setVideoCurrentDurations(videoCurrentDurations.map((duration, i) => {
                if (index === i) return newDuration;

                return duration;
            }));
        }

        const renderItem = useCallback(({ item, index }: { item: MiniVideo, index: number }) => (
            <View style={{ height: displayHeight ? displayHeight : 0 }}>
                {displayHeight != 0 && (
                    <ShortVod
                        vod={item}
                        thumbnail={item.mini_video_origin_cover}
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
                    />
                )}
            </View>
        ), [current, isPause, isScrolling, inCollectionView, displayHeight, videoCurrentDurations]);

        useEffect(() => {
            if ((swipeCount.current + 1) < MINI_SHOW_LOGIN_NUMBER) {
                swipeCount.current++;
            } else {
                dispatch(showLoginAction());
                swipeCount.current = 0;
            }
        }, [current]);

        return (
            <View style={{ flex: 1 }} onLayout={(event: any) => {
                var { height } = event.nativeEvent.layout;
                const heightStr: string = height.toFixed(5);

                // use substring to prevent rounding
                setDisplayHeight(parseFloat(heightStr.substring(0, heightStr.length - 1)))
            }}>
                {isInitFetching ?
                    <View
                        style={{
                            flex: 1,
                            width: '100%',
                            height: '100%',
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <FastImage
                            source={require("@static/images/home-loading.gif")}
                            style={{
                                width: 150,
                                height: 150,
                                bottom: 50,
                                zIndex: 1,
                            }}
                            resizeMode={"contain"}
                            useFastImage={true}
                        />
                    </View>
                    : <FlatList
                        ref={miniVodListRef}
                        data={collectionPartialVideos}
                        initialNumToRender={10}
                        maxToRenderPerBatch={5}
                        windowSize={5}
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
                        onEndReached={() => {
                            if (hasNextPage && !isFetchingNextPage && !isFetching) {
                                fetchNextPage();
                            }
                        }}
                        onEndReachedThreshold={0.8}
                        ListFooterComponent={
                            <View style={{ ...styles.loading, marginBottom: spacing.xl }}>
                                {
                                    hasNextPage && <FastImage
                                        style={{ height: 80, width: 80 }}
                                        source={require('@static/images/loading-spinner.gif')}
                                        resizeMode={'contain'}
                                    />
                                }
                            </View>
                        }
                        onScroll={handleOnScroll}
                        onScrollBeginDrag={(e) => {
                            if (!isScrolling) setIsScrolling(true);
                        }}
                        onMomentumScrollEnd={() => {
                            setIsScrolling(false);
                        }}
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
    }
})
