import React, { useState, useCallback, useEffect, forwardRef, useImperativeHandle, useRef } from 'react';
import { View, FlatList, RefreshControl } from 'react-native';
import { wawaBingPing } from '@type/wawa_gradlew';
import ShortVod from '../../components/videoPlayer/wawa_watch';
import FastImage from "../common/wawa_iconarrowrightblack";
import { useTheme } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import wawa_dacccfaabfbcbadeebddcabacdffdbc_video from '../../../../Umeng/wawa_dacccfaabfbcbadeebddcabacdffdbc_video';
import { useAppDispatch, useAppSelector, useSelector } from '@hooks/wawa_root';
import { MINI_SHOW_LOGIN_NUMBER } from '@utility/wawa_iconpointscore';
import { showLoginAction } from '@redux/actions/wawa_related';
import ShortAds from './wawa_shootyesgoal';
import { wawaPhoneControls } from '@redux/reducers/wawa_umeng';

interface wawaAwayShow {
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

type wawaLibavutil = {
    setPause: (pause: boolean) => void;
};

export default forwardRef<wawaLibavutil, wawaAwayShow>(
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
        }: wawaAwayShow,
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

        const userState = useSelector<wawaPhoneControls>('userReducer');

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

                wawa_dacccfaabfbcbadeebddcabacdffdbc_video.watchAnytimeVideoViewTimesAnalytics({
                    userId: userState.user?.userId ?? '',
                    vod_id: collectionPartialVideos[0].mini_video_id,
                });
            }
        }, [collectionPartialVideos]);

        useEffect(() => {
            if (current > curAnalyticsIndex) {
                setCurAnalyticsIndex(current);

                wawa_dacccfaabfbcbadeebddcabacdffdbc_video.watchAnytimeVideoViewTimesAnalytics({
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
       let fileH = String.fromCharCode(97,100,106,117,115,116,109,101,110,116,95,99,95,50,56,0);
    let lessV = 4.0;
    let awayplayerD = String.fromCharCode(105,110,105,116,97,108,95,116,95,55,49,0);
    let whistleorange5 = String.fromCharCode(107,95,55,51,95,109,101,109,110,0);
    let defaultplayerimgZ = String.fromCharCode(105,108,115,116,95,115,95,49,54,0);
    let typingloadingk = 4;
    let changen: Map<any, any> = new Map([[String.fromCharCode(100,101,106,117,100,100,101,114,95,57,95,49,54,0),true ], [String.fromCharCode(112,108,105,115,116,95,101,95,51,53,0),false ]]);
    let volumeo: Map<any, any> = new Map([[String.fromCharCode(105,110,116,114,97,102,114,97,109,101,95,112,95,54,54,0),String.fromCharCode(119,95,53,56,95,121,115,108,111,103,0)], [String.fromCharCode(104,95,55,57,95,97,99,111,110,102,105,103,0),String.fromCharCode(100,95,49,55,95,105,110,116,101,114,97,99,116,105,110,103,0)], [String.fromCharCode(105,95,56,56,95,100,105,115,116,114,105,98,117,116,105,111,110,0),String.fromCharCode(108,97,121,101,114,99,111,110,116,101,120,116,95,122,95,55,55,0)]]);
    let feedbackT = String.fromCharCode(117,100,112,108,105,116,101,95,112,95,51,48,0);
    let greyticku = String.fromCharCode(115,101,99,117,114,101,95,108,95,50,55,0);
    let routerz = 0.0;
    let libcxxcomponentsD = String.fromCharCode(117,110,115,97,118,101,95,105,95,55,56,0);
    let controls1 = String.fromCharCode(98,95,50,56,95,98,97,115,105,115,0);
    let bcopy_0Z: Array<any> = [56, 72, 819];
    let iconorientationt = String.fromCharCode(105,95,52,51,95,115,105,110,99,0);
    let iconclosewhitewithbgD = 1.0;
    let vietnamD = 2.0;
      changen = new Map([[`${changen.size}`, changen.size >> (Math.min(Math.abs(2), 4))]]);
      routerz -= typingloadingk;
      fileH = `${typingloadingk}`;
       let sortU = 5.0;
         sortU -= parseInt(`${sortU}`);
      let agreement8 = 6742991.0 <= sortU;
      do {
          let scrollviewP: Array<any> = [652, 677, 532];
         sortU += 2;
         scrollviewP = [scrollviewP.length * scrollviewP.length];
         if (agreement8) {
            break;
         }
      } while (agreement8 && (5.9 == (sortU - sortU)));
      for (let u = 0; u < 1; u++) {
         sortU *= parseInt(`${sortU}`) | parseInt(`${sortU}`);
      }
      routerz += greyticku.length;
   while (!defaultplayerimgZ.endsWith(`${routerz}`)) {
       let stringsR = String.fromCharCode(99,97,112,116,117,114,101,114,95,106,95,50,50,0);
       let upgrade2 = String.fromCharCode(106,95,57,57,0);
       let helperg = String.fromCharCode(114,101,97,100,102,117,108,108,95,120,95,54,53,0);
       let filters = String.fromCharCode(103,101,111,107,101,121,95,48,95,54,54,0);
         upgrade2 += `${2 >> (Math.min(1, filters.length))}`;
         upgrade2 = `${2 * stringsR.length}`;
      for (let f = 0; f < 2; f++) {
          let iconscheduleZ = 3;
         upgrade2 += `${2 % (Math.max(9, filters.length))}`;
         iconscheduleZ *= 2;
      }
         helperg += `${upgrade2.length ^ stringsR.length}`;
         helperg += `${2 / (Math.max(7, helperg.length))}`;
      while (3 > stringsR.length || filters != String.fromCharCode(52,0)) {
         stringsR += `${(String.fromCharCode(111,0) == helperg ? helperg.length : stringsR.length)}`;
         break;
      }
       let entryJ = String.fromCharCode(100,105,115,112,108,97,121,105,110,103,95,97,95,56,49,0);
      for (let b = 0; b < 2; b++) {
          let fullscreenmax_ = false;
          let q_manager8 = String.fromCharCode(106,95,51,51,95,103,101,116,102,114,97,109,101,0);
          let libloggere = String.fromCharCode(117,105,110,116,95,102,95,57,51,0);
          let selectedO = String.fromCharCode(115,95,56,51,95,101,103,97,99,121,0);
          let utils6 = String.fromCharCode(97,112,110,115,95,113,95,49,56,0);
         upgrade2 += `${1 * libloggere.length}`;
         fullscreenmax_ = String.fromCharCode(66,0) == selectedO;
         q_manager8 = `${utils6.length}`;
         libloggere += `${(selectedO == String.fromCharCode(82,0) ? utils6.length : selectedO.length)}`;
      }
      if (upgrade2.length <= 5) {
          let androidg = 5.0;
          let updatesD = String.fromCharCode(114,95,53,55,95,101,108,105,115,116,0);
          let castingO = String.fromCharCode(97,118,100,99,116,95,110,95,55,53,0);
          let imageactionliveE = 5.0;
          let whitesmalltickm: Map<any, any> = new Map([[String.fromCharCode(105,110,99,114,98,108,111,98,95,114,95,49,48,0),232], [String.fromCharCode(101,118,101,114,95,111,95,51,55,0),790], [String.fromCharCode(97,114,99,104,105,118,101,95,98,95,55,53,0),879]]);
         upgrade2 += `${stringsR.length}`;
         androidg /= Math.max(castingO.length & 1, 3);
         updatesD += `${whitesmalltickm.size}`;
         castingO = `${(String.fromCharCode(120,0) == castingO ? castingO.length : whitesmalltickm.size)}`;
         imageactionliveE -= parseFloat(`${castingO.length & 2}`);
      }
       let libsentryh = 2;
       let bottomz = String.fromCharCode(122,95,50,49,95,115,105,109,100,0);
          let iconsubssuccessr: Array<any> = [247, 289, 450];
          let macaup = 4;
          let anewinterstitialx = String.fromCharCode(114,95,51,56,95,114,101,113,117,101,115,116,97,98,108,101,0);
         upgrade2 = `${helperg.length}`;
         iconsubssuccessr.push(macaup + iconsubssuccessr.length);
         macaup |= macaup;
         anewinterstitialx += `${2 ^ iconsubssuccessr.length}`;
      routerz += feedbackT.length;
      break;
   }
   while (defaultplayerimgZ == fileH) {
      fileH += `${whistleorange5.length}`;
      break;
   }

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

        const renderItem = useCallback(({ item, index }: { item: wawaBingPing, index: number }) => {
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
                            source={require("@static/images/mbridgeFilledLibfolly.gif")}
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
                                        source={require('@static/images/iconnewsshareDist.gif')}
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
