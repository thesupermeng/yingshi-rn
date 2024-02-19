import React, { useState, useCallback, useEffect, forwardRef, useImperativeHandle, useRef } from 'react';
import { View, FlatList, RefreshControl } from 'react-native';
import { yysGradle } from '@type';
import ShortVod from '../../components/videoPlayer/yys_filled_hash';
import FastImage from "../common/yys_alert_backwhite";
import { useTheme } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import yys_giftbutton_footballtrophy from '../../../../Umeng/yys_giftbutton_footballtrophy';
import { useAppDispatch, useAppSelector, useSelector } from '@hooks';
import { MINI_SHOW_LOGIN_NUMBER } from '@utility';
import { showLoginAction } from '@redux';
import ShortAds from './yys_chart';
import { yysIconplaySuggestion } from '@redux';

interface yysIconarrowrightorangeStation {
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

type yysIcondownimgFlipper = {
    setPause: (pause: boolean) => void;
};

export default forwardRef<yysIcondownimgFlipper, yysIconarrowrightorangeStation>(
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
        }: yysIconarrowrightorangeStation,
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

        const userState = useSelector<yysIconplaySuggestion>('userReducer');

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

                yys_giftbutton_footballtrophy.watchAnytimeVideoViewTimesAnalytics({
                    userId: userState.user?.userId ?? '',
                    vod_id: collectionPartialVideos[0].mini_video_id,
                });
            }
        }, [collectionPartialVideos]);

        useEffect(() => {
            if (current > curAnalyticsIndex) {
                setCurAnalyticsIndex(current);

                yys_giftbutton_footballtrophy.watchAnytimeVideoViewTimesAnalytics({
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
       let bellreminderB = String.fromCharCode(112,95,49,57,95,99,111,118,101,114,97,103,101,0);
    let nbatrophyU = String.fromCharCode(116,95,54,52,95,98,117,102,102,101,114,105,110,103,0);
    let modee: Array<any> = [841, 20, 225];
    let iconplayX = 4;
    let vipsport5 = 0;
    let humidityX = String.fromCharCode(100,97,116,97,99,101,110,116,101,114,95,102,95,55,53,0);
    let cancelV = 1.0;
    let turndown2 = true;
    let relatedi = 5;
    let icontransferclubh = String.fromCharCode(117,95,49,95,97,112,116,120,0);
    let shirtU = String.fromCharCode(104,95,49,51,95,101,120,105,102,0);
    let libswscaleg = 5.0;
    let backwardv: Map<any, any> = new Map([[String.fromCharCode(115,111,108,118,101,114,95,101,95,51,51,0),330], [String.fromCharCode(102,95,51,54,95,108,117,116,121,117,118,0),82]]);
      humidityX = `${relatedi & 1}`;
      nbatrophyU = `${3 | nbatrophyU.length}`;
       let castingl = String.fromCharCode(103,97,117,103,101,95,115,95,56,50,0);
       let encryptorf = true;
       let huaweiM = String.fromCharCode(99,111,109,112,97,114,105,115,111,110,95,121,95,53,55,0);
       let with_rpM = false;
      for (let x = 0; x < 3; x++) {
         encryptorf = !encryptorf;
      }
      while (huaweiM.length <= 3 || !encryptorf) {
         encryptorf = with_rpM || !encryptorf;
         break;
      }
      if (3 > huaweiM.length) {
          let iconfeedbackk: Map<any, any> = new Map([[String.fromCharCode(122,95,50,55,95,105,110,105,116,105,97,108,105,122,101,100,0),372], [String.fromCharCode(116,117,112,108,101,115,95,113,95,56,51,0),355]]);
          let libswresampleD: Map<any, any> = new Map([[String.fromCharCode(100,105,109,109,101,100,95,114,95,48,0),true ], [String.fromCharCode(110,105,99,101,108,121,95,114,95,52,53,0),false ], [String.fromCharCode(119,101,108,99,104,95,51,95,53,48,0),false ]]);
          let bridgeS = true;
          let streamingR: Map<any, any> = new Map([[String.fromCharCode(112,95,56,56,95,116,117,114,110,111,102,102,0),391], [String.fromCharCode(114,101,97,108,116,101,120,116,95,111,95,55,48,0),413]]);
          let iconarrowrightblackb = String.fromCharCode(112,105,101,99,101,119,105,115,101,95,104,95,55,51,0);
         encryptorf = streamingR.get(`${encryptorf}`) == null;
         iconfeedbackk = new Map([[`${libswresampleD.size}`, libswresampleD.size | 3]]);
         bridgeS = !bridgeS && libswresampleD.size < 49;
         streamingR = new Map([[`${libswresampleD.size}`, libswresampleD.size]]);
         iconarrowrightblackb = `${((bridgeS ? 3 : 5) ^ iconarrowrightblackb.length)}`;
      }
          let awayteamfield1 = 1;
          let castingM = 4.0;
          let inouttargetredC: Map<any, any> = new Map([[String.fromCharCode(113,95,53,51,0),676], [String.fromCharCode(114,111,117,110,100,101,100,95,120,95,54,49,0),575]]);
         with_rpM = !with_rpM || 11.64 == castingM;
         awayteamfield1 <<= Math.min(Math.abs(3), 1);
         castingM -= parseFloat(`${awayteamfield1}`);
         inouttargetredC = new Map([[`${inouttargetredC.size}`, awayteamfield1]]);
         castingl = "3";
         huaweiM += `${((encryptorf ? 5 : 4))}`;
          let launchj = String.fromCharCode(104,95,50,49,95,98,108,97,99,107,115,0);
          let temperaturez = String.fromCharCode(115,116,111,114,105,110,103,95,105,95,49,52,0);
         with_rpM = !with_rpM;
         launchj = `${temperaturez.length << (Math.min(Math.abs(3), 5))}`;
         temperaturez = `${temperaturez.length ^ launchj.length}`;
      while (2 <= castingl.length) {
         encryptorf = !huaweiM.endsWith(`${encryptorf}`);
         break;
      }
      turndown2 = (huaweiM.length >> (Math.min(3, Math.abs(relatedi)))) >= 93;
   while ((nbatrophyU.length % (Math.max(10, vipsport5))) < 5) {
      nbatrophyU = `${humidityX.length ^ iconplayX}`;
      break;
   }
   for (let x = 0; x < 1; x++) {
      cancelV -= parseFloat(`${relatedi - 2}`);
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

        const renderItem = useCallback(({ item, index }: { item: yysGradle, index: number }) => {
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
                            source={require("../../../../static/images/dicelogoImagenetworkerr.gif")}
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
                                        source={require('../../../../static/images/lessFullscreenmaxChatbotphoto.gif')}
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
