import React, { useState, useCallback, useEffect, forwardRef, useImperativeHandle, useRef } from 'react';
import { View, FlatList, RefreshControl } from 'react-native';
import { wwPredictionarrowIncident } from '@type/ww_dycreator_result';
import ShortVod from '../../components/videoPlayer/ww_iconfeedback';
import FastImage from "../common/ww_result";
import { useTheme } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import ww_runtime from '../../../../Umeng/ww_runtime';
import { useAppDispatch, useAppSelector, useSelector } from '@hooks/ww_catagory_neon';
import { MINI_SHOW_LOGIN_NUMBER } from '@utility/ww_icon';
import { showLoginAction } from '@redux/actions/ww_hash';
import ShortAds from './ww_defaultpredictionprofile';
import { wwVertical } from '@redux/reducers/ww_related_kuaishou';

interface wwIndexDice {
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

type wwGradlew = {
    setPause: (pause: boolean) => void;
};

export default forwardRef<wwGradlew, wwIndexDice>(
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
        }: wwIndexDice,
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

        
        const [curAnalyticsIndex, setCurAnalyticsIndex] = useState(0);

        const swipeCount = useRef(0);
        const dispatch = useAppDispatch();

        const userState = useSelector<wwVertical>('userReducer');

        const handleOnScroll = useCallback((e: any) => {
            const positionY = parseFloat(e.nativeEvent.contentOffset.y.toFixed(5));
            const index = Math.floor(positionY / displayHeight);

            if (index >= 0 && displayHeight > 0 && index != current) {
                setCurrent(index);
            }
        }, [displayHeight, current]);

        
        useEffect(() => {
            if (collectionPartialVideos.length > 0) {
                setCurAnalyticsIndex(0);

                ww_runtime.watchAnytimeVideoViewTimesAnalytics({
                    userId: userState.user?.userId ?? '',
                    vod_id: collectionPartialVideos[0].mini_video_id,
                });
            }
        }, [collectionPartialVideos]);

        useEffect(() => {
            if (current > curAnalyticsIndex) {
                setCurAnalyticsIndex(current);

                ww_runtime.watchAnytimeVideoViewTimesAnalytics({
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
       let iconbellactivel = String.fromCharCode(110,101,105,103,104,98,111,114,95,115,95,49,52,0);
    let l_centerR = true;
    let filedq: Array<any> = [750, 691, 901];
    let rewardm = 4;
    let uploadA = 0.0;
    let tickW = 2.0;
    let tooltipsV = String.fromCharCode(97,112,112,114,111,118,101,114,95,48,95,49,51,0);
    let profileactivel = String.fromCharCode(122,95,54,57,95,111,112,101,110,0);
    let modelo = 1;
      iconbellactivel += `${rewardm ^ tooltipsV.length}`;
   if (5 >= (4 ^ tooltipsV.length)) {
      tooltipsV += `${3 << (Math.min(Math.abs(rewardm), 5))}`;
   }
       let recommendationp = 1;
       let clearn: Map<any, any> = new Map([[String.fromCharCode(110,95,54,95,109,111,116,105,111,110,0),338], [String.fromCharCode(105,95,57,51,95,115,99,97,108,101,102,97,99,116,111,114,115,0),335]]);
      if (clearn.size < 1) {
         recommendationp -= recommendationp ^ clearn.size;
      }
      while (clearn.get(`${recommendationp}`) != null) {
         clearn = new Map([[`${clearn.size}`, clearn.size]]);
         break;
      }
      for (let c = 0; c < 1; c++) {
          let sellD = 2.0;
         clearn.set(`${sellD}`, parseInt(`${sellD}`));
      }
          let x_titleK = 1;
          let orientation4 = false;
         clearn = new Map([[`${clearn.size}`, ((orientation4 ? 5 : 2) | clearn.size)]]);
         x_titleK <<= Math.min(4, Math.abs(x_titleK << (Math.min(Math.abs(3), 2))));
         orientation4 = x_titleK <= 21;
          let moreN: Map<any, any> = new Map([[String.fromCharCode(103,95,52,55,95,109,97,120,98,117,114,115,116,0),true ], [String.fromCharCode(109,97,114,103,105,110,115,95,116,95,55,51,0),false ]]);
          let iconwechatS: Map<any, any> = new Map([[String.fromCharCode(121,95,51,56,95,104,112,97,114,97,109,115,0),String.fromCharCode(109,97,120,120,95,50,95,49,0)], [String.fromCharCode(99,111,97,114,115,101,95,119,95,52,57,0),String.fromCharCode(111,110,121,120,99,95,53,95,49,53,0)], [String.fromCharCode(97,95,50,56,0),String.fromCharCode(114,95,57,56,95,112,114,111,102,105,108,101,0)]]);
         clearn.set(`${recommendationp}`, recommendationp);
         moreN.set(`${iconwechatS.size}`, iconwechatS.size);
          let thumbnailI = 5;
          let time_n4_ = true;
          let ewardedP: Map<any, any> = new Map([[String.fromCharCode(106,95,52,55,95,117,110,107,110,111,119,110,115,0),String.fromCharCode(99,97,108,99,117,97,108,116,101,95,115,95,56,49,0)], [String.fromCharCode(115,95,54,49,95,121,97,114,110,0),String.fromCharCode(103,95,54,56,95,105,109,109,101,100,105,97,116,101,108,121,0)], [String.fromCharCode(112,111,115,101,115,95,97,95,56,57,0),String.fromCharCode(111,100,100,95,50,95,50,51,0)]]);
         recommendationp += 2;
         thumbnailI |= (ewardedP.size | (time_n4_ ? 1 : 4));
         time_n4_ = 67 > thumbnailI || time_n4_;
         ewardedP.set(`${time_n4_}`, thumbnailI);
      profileactivel = "3";
       let combinedo = 0.0;
       let paginationC = 5.0;
      let calendarP = paginationC <= 9583003.0;
      do {
          let librrck: Map<any, any> = new Map([[String.fromCharCode(121,95,49,48,95,117,110,100,101,114,101,115,116,105,109,97,116,101,100,0),String.fromCharCode(121,95,50,55,95,105,99,111,110,115,0)], [String.fromCharCode(106,95,57,48,95,115,110,111,119,0),String.fromCharCode(112,95,49,53,95,98,117,105,108,100,0)]]);
          let gifgoalE: Map<any, any> = new Map([[String.fromCharCode(116,95,56,56,95,105,110,116,102,114,0),507], [String.fromCharCode(121,121,121,121,95,105,95,51,53,0),666]]);
          let share0: Array<any> = [String.fromCharCode(101,120,99,108,117,100,101,100,95,121,95,55,50,0), String.fromCharCode(99,97,110,100,105,100,97,116,101,115,95,101,95,51,49,0), String.fromCharCode(114,95,56,52,95,113,115,116,101,112,0)];
          let signinupx = String.fromCharCode(97,108,101,114,116,115,95,97,95,52,50,0);
         paginationC *= parseFloat(`${1 + share0.length}`);
         librrck = new Map([[`${librrck.size}`, librrck.size / 2]]);
         gifgoalE = new Map([[`${librrck.size}`, gifgoalE.size]]);
         share0.push(3 * gifgoalE.size);
         signinupx += `${2 / (Math.max(7, gifgoalE.size))}`;
         if (calendarP) {
            break;
         }
      } while (calendarP && (5.9 == (combinedo / (Math.max(paginationC, 4)))));
      let gradlew8 = combinedo <= 8392230.0;
      do {
          let transferi = String.fromCharCode(114,97,99,101,95,57,95,50,50,0);
          let yellowvideolive_ = 2.0;
          let iconclosewhitebgE = String.fromCharCode(117,110,112,114,101,109,117,108,116,105,112,108,121,121,117,118,95,57,95,50,54,0);
          let rootG = 0.0;
          let rewardd = String.fromCharCode(112,95,56,55,95,115,99,97,110,116,97,98,108,101,115,0);
         combinedo -= 1;
         transferi += `${(rewardd == String.fromCharCode(72,0) ? parseInt(`${yellowvideolive_}`) : rewardd.length)}`;
         yellowvideolive_ += rewardd.length / (Math.max(1, 5));
         iconclosewhitebgE = "1";
         rootG /= Math.max(2, (String.fromCharCode(66,0) == rewardd ? rewardd.length : parseInt(`${yellowvideolive_}`)));
         if (gradlew8) {
            break;
         }
      } while ((4.28 <= combinedo) && gradlew8);
       let upgradeJ = 2.0;
      while (combinedo <= 3.94) {
         combinedo += 3 - parseInt(`${paginationC}`);
         break;
      }
      for (let g = 0; g < 2; g++) {
          let fastforwardt = 0.0;
         paginationC *= parseFloat(`${parseInt(`${upgradeJ}`)}`);
         fastforwardt *= parseFloat(`${parseInt(`${fastforwardt}`) / (Math.max(2, parseInt(`${fastforwardt}`)))}`);
      }
         upgradeJ /= Math.max(parseInt(`${combinedo}`) * parseInt(`${paginationC}`), 4);
      l_centerR = modelo >= 87;
      iconbellactivel += `${modelo + 2}`;

            return <>
                <RefreshControl
                    refreshing={isRefreshing}
                    onRefresh={handleRefreshMiniVod}
                    tintColor="#FAC33D"
                />
            </>
        }, [isRefreshing]);

        const updateVideoDuration = (index: number, newDuration: number) => {
            
            setVideoCurrentDurations(videoCurrentDurations.map((duration, i) => {
                if (index === i) return newDuration;

                return duration;
            }));
        }

        const renderItem = useCallback(({ item, index }: { item: wwPredictionarrowIncident, index: number }) => {
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
            );
        }, [current, isPause, isScrolling, inCollectionView, displayHeight, videoCurrentDurations]);

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
                            source={require("@static/images/inouttargetredRoundLeague.gif")}
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
                        
                        pagingEnabled={isRefreshing ? false : true}
                        scrollEnabled={isRefreshing ? false : true}
                        keyExtractor={(item: any, index: any) => item?.mini_video_id?.toString()}
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
                                        source={require('@static/images/runtimeschedulerPromotion.gif')}
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
