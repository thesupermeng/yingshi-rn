import React, { useState, useCallback, useEffect, forwardRef, useImperativeHandle } from 'react';
import { View, FlatList, RefreshControl } from 'react-native';
import { MiniVideo } from '../../types/ajaxTypes';
import ShortVod from '../../components/videoPlayer/shortVod';
import FastImage from "../common/customFastImage";
import { useFocusEffect, useTheme } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

import { screenModel } from '../../types/screenType';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { ADULT_MODE_PREVIEW_DURATION } from '../../utility/constants';
import { showAdultModeVip } from '../../redux/actions/screenAction';
import { userModel } from '../../types/userType';
import useAnalytics from '../../hooks/useAnalytics';
import { RootState } from '../../redux/store';


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
    isPressTabScroll: boolean,
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
            isPressTabScroll = false,
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
        const [isChangingSource, setChangingSource] = useState(false);
        // for analytics used
        const [curAnalyticsIndex, setCurAnalyticsIndex] = useState(0);

        const screenState: screenModel = useAppSelector(
            ({screenReducer}) => screenReducer
          )
        const userState: userModel = useAppSelector(
            ({userReducer}) => userReducer
        )

        const {adultModeDisclaimerShow, adultModeVipShow, adultVideoWatchTime, adultMode} = screenState
        const isVip = (Number(userState.userMemberExpired) <=
                        Number(userState.userCurrentTimestamp) ||
                        userState.userToken === "")
        const dispatch = useAppDispatch()
        useEffect(() => {
            if (adultVideoWatchTime >= ADULT_MODE_PREVIEW_DURATION && adultMode && isVip){
                dispatch(showAdultModeVip())
                setPause(true)
            }
        }, [videoCurrentDurations[current], isPause])

        useEffect(() => {
            if (adultModeDisclaimerShow || adultModeVipShow) {
                setPause(true)
            }
        }, [adultModeDisclaimerShow, adultModeVipShow])

        useEffect(() => {
            setChangingSource(true);
            setPause(true);
        }, [adultMode]);

        useFocusEffect(
            useCallback(() => {
                if (videos.length > 0 && isChangingSource) {
                    setChangingSource(false);
                    setPause(false);
                }
            }, [isChangingSource, videos])
        )

        const handleOnScroll = useCallback((e: any) => {
            const positionY = parseFloat(e.nativeEvent.contentOffset.y.toFixed(5));
            const index = Math.floor(positionY / displayHeight);

            if (index >= 0 && displayHeight > 0 && index != current) {
                setCurrent(index);
            }
        }, [displayHeight, current]);

        // ========== for analytics - start ==========
        const { watchAnytimeVideoViewTimesAnalytics } = useAnalytics();

        useEffect(() => {
            // ========== for analytics - start ==========
            if (collectionPartialVideos.length > 0) {
                setCurAnalyticsIndex(0);

                watchAnytimeVideoViewTimesAnalytics({
                    userId: userState.userId,
                    vod_id: collectionPartialVideos[0].mini_video_id,
                    isXmode: adultMode
                });
            }
            // ========== for analytics - end ==========
        }, [collectionPartialVideos]);

        useEffect(() => {
            if(current > curAnalyticsIndex){
                setCurAnalyticsIndex(current);

                watchAnytimeVideoViewTimesAnalytics({
                    userId: userState.userId,
                    vod_id: collectionPartialVideos[current].mini_video_id,
                    isXmode: adultMode
                });
            }
        }, [current, curAnalyticsIndex, collectionPartialVideos, adultMode, userState]);
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
                            console.log('click pause');
                            setPause(!current);
                        }}
                        isShowVideo={current === index && !isScrolling && !isPressTabScroll}
                        currentDuration={videoCurrentDurations[index]}
                        updateVideoDuration={(duration) => updateVideoDuration(index, duration)}
                        isActive={isActive}
                    />
                )}
            </View>
        ), [current, isActive, isPause, isScrolling, inCollectionView, displayHeight, videoCurrentDurations, isPressTabScroll]);

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
                            source={require("../../../static/images/home-loading.gif")}
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
                                        source={require('../../../static/images/loading-spinner.gif')}
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
);

const styles = StyleSheet.create({
    loading: {
        flexDirection: 'row',
        justifyContent: 'center',
        flex: 1
    }
})
