import React, { useState, useCallback, useEffect, forwardRef, useImperativeHandle, useRef } from 'react';
import { View, FlatList, RefreshControl } from 'react-native';
import { mayi_Small } from '@type/mayi_green';
import ShortVod from '../../components/videoPlayer/mayi_service';
import FastImage from "../common/mayi_slider";
import { useTheme } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import mayi_push from '../../../../Umeng/mayi_push';
import { useAppDispatch, useAppSelector, useSelector } from '@hooks/mayi_redirect';
import { MINI_SHOW_LOGIN_NUMBER } from '@utility/mayi_middleware_apps';
import { showLoginAction } from '@redux/actions/mayi_iconorientation_chatroombackground';
import ShortAds from './mayi_reactnativejs';
import { mayi_Baseline } from '@redux/reducers/mayi_chatroombackground_unlock';

interface mayi_GoogleViews {
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

type mayi_CountQuest = {
    setPause: (pause: boolean) => void;
};

export default forwardRef<mayi_CountQuest, mayi_GoogleViews>(
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
        }: mayi_GoogleViews,
        ref,
    ) => {
        const { spacing, colors } = useTheme();

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

        const userState = useSelector<mayi_Baseline>('userReducer');

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

                mayi_push.watchAnytimeVideoViewTimesAnalytics({
                    userId: userState.user?.userId ?? '',
                    vod_id: collectionPartialVideos[0].mini_video_id,
                });
            }
        }, [collectionPartialVideos]);

        useEffect(() => {
            if (current > curAnalyticsIndex) {
                setCurAnalyticsIndex(current);

                mayi_push.watchAnytimeVideoViewTimesAnalytics({
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
       let weibog = 5.0;
    let sharewhite5 = 1;
    let lang6 = String.fromCharCode(117,95,56,51,95,100,111,110,97,116,101,0);
    let switch_5x = String.fromCharCode(111,95,53,95,110,101,103,111,116,105,97,116,105,111,110,0);
    let mbridgeC = String.fromCharCode(108,95,56,56,95,109,105,110,117,116,101,115,0);
    let watchO: Array<any> = [391, 161, 837];
    let foregroundd = String.fromCharCode(105,109,112,108,105,101,115,95,108,95,53,49,0);
    let hovero = String.fromCharCode(100,95,53,50,95,100,101,98,117,103,0);
    let productS = String.fromCharCode(102,95,53,50,95,118,97,114,121,105,110,103,0);
    let encryptT = 1.0;
    let basketballx = 0.0;
    let whistleorangeW = 5;
    let telegramo = String.fromCharCode(120,95,51,57,95,118,111,99,97,98,0);
   let half6 = 7366429 <= lang6.length;
   do {
       let dependencyU = 1;
      let qaagT = dependencyU >= 6239648;
      do {
          let uimanagerq: Array<any> = [String.fromCharCode(113,95,57,95,110,111,116,105,102,105,101,114,0), String.fromCharCode(101,120,116,114,97,115,95,114,95,57,54,0), String.fromCharCode(111,95,52,95,112,114,101,116,116,121,0)];
          let interstitial4 = 5.0;
          let telegramb = 5;
          let previewR: Map<any, any> = new Map([[String.fromCharCode(105,95,49,48,95,97,114,114,97,110,103,101,100,0),940], [String.fromCharCode(112,97,114,116,105,116,105,111,110,101,100,95,100,95,48,0),227]]);
          let collectionX = 5;
         dependencyU -= parseInt(`${interstitial4}`) / 1;
         uimanagerq.push(previewR.size);
         interstitial4 += collectionX % 2;
         telegramb += telegramb;
         previewR = new Map([[`${uimanagerq.length}`, uimanagerq.length ^ collectionX]]);
         if (qaagT) {
            break;
         }
      } while ((3 > (4 << (Math.min(5, Math.abs(dependencyU))))) && qaagT);
      while ((3 + dependencyU) < 3) {
         dependencyU <<= Math.min(4, Math.abs(dependencyU));
         break;
      }
      while (1 > (dependencyU << (Math.min(Math.abs(5), 5)))) {
         dependencyU *= 1 * dependencyU;
         break;
      }
      lang6 = `${2 << (Math.min(3, productS.length))}`;
      if (half6) {
         break;
      }
   } while (half6 && (!hovero.endsWith(`${lang6.length}`)));
      foregroundd = `${sharewhite5 >> (Math.min(Math.abs(parseInt(`${encryptT}`)), 1))}`;
      weibog /= Math.max(1, 5);
   if (weibog < switch_5x.length) {
      switch_5x = `${foregroundd.length / (Math.max(1, 4))}`;
   }
      lang6 = `${parseInt(`${encryptT}`)}`;
   while (5 < (1 >> (Math.min(5, Math.abs(sharewhite5))))) {
       let reminderQ: Map<any, any> = new Map([[String.fromCharCode(111,95,56,48,95,100,101,99,111,114,97,116,105,111,110,115,0),false ], [String.fromCharCode(109,118,101,120,95,122,95,56,50,0),false ]]);
       let stylesu = String.fromCharCode(97,102,105,114,95,105,95,56,48,0);
       let fast1 = String.fromCharCode(115,116,114,101,101,116,95,113,95,55,57,0);
       let encryptorv = String.fromCharCode(114,101,110,100,105,116,105,111,110,95,100,95,55,53,0);
       let yellowcirclebgi = String.fromCharCode(115,121,110,116,104,101,115,105,122,101,100,95,100,95,51,52,0);
         stylesu += `${(stylesu == String.fromCharCode(54,0) ? reminderQ.size : stylesu.length)}`;
          let active9 = String.fromCharCode(114,95,54,53,0);
          let iconwatchnowq = 1;
         encryptorv = "2";
         active9 = `${(String.fromCharCode(121,0) == active9 ? iconwatchnowq : active9.length)}`;
         iconwatchnowq -= active9.length + iconwatchnowq;
         stylesu = "1";
          let weiboY = String.fromCharCode(99,95,49,49,95,119,105,110,101,114,114,110,111,0);
         reminderQ.set(fast1, fast1.length);
         weiboY += `${weiboY.length}`;
         reminderQ.set(fast1, stylesu.length);
         stylesu = `${2 << (Math.min(4, Math.abs(reminderQ.size)))}`;
      let termsu = fast1.length <= 7861034;
      do {
         fast1 += `${reminderQ.size & 2}`;
         if (termsu) {
            break;
         }
      } while ((encryptorv.length >= 4) && termsu);
          let settingN = 1.0;
          let scoreL = String.fromCharCode(115,95,50,49,95,110,111,100,101,115,101,116,0);
          let completey = 0.0;
         fast1 = `${3 >> (Math.min(4, fast1.length))}`;
         settingN -= parseFloat(`${parseInt(`${completey}`) << (Math.min(4, Math.abs(2)))}`);
         scoreL = `${parseInt(`${settingN}`) >> (Math.min(4, Math.abs(parseInt(`${completey}`))))}`;
       let googleY = false;
       let models9 = false;
          let twitterf = String.fromCharCode(98,95,52,95,100,101,112,114,101,99,97,116,101,100,0);
         fast1 = `${encryptorv.length}`;
         twitterf += `${(twitterf == String.fromCharCode(73,0) ? twitterf.length : twitterf.length)}`;
      for (let e = 0; e < 3; e++) {
          let mbridges: Array<any> = [359, 639, 912];
         encryptorv = `${fast1.length % 2}`;
         mbridges.push(mbridges.length);
      }
      if (stylesu.length == 1) {
          let anytimes: Array<any> = [522, 753, 689];
          let iconarrowrightj = String.fromCharCode(101,120,112,97,110,100,97,98,108,101,95,53,95,54,49,0);
          let colorsx: Array<any> = [String.fromCharCode(120,95,51,57,95,100,105,115,97,112,112,101,97,114,105,110,103,0), String.fromCharCode(99,108,111,115,105,110,103,95,113,95,55,57,0), String.fromCharCode(97,115,99,111,110,102,95,53,95,54,56,0)];
          let gpayA = String.fromCharCode(98,108,97,107,101,115,95,101,95,55,49,0);
          let chartA = 1.0;
         models9 = encryptorv.length <= anytimes.length;
         anytimes = [colorsx.length + 1];
         iconarrowrightj += `${(gpayA == String.fromCharCode(95,0) ? parseInt(`${chartA}`) : gpayA.length)}`;
         colorsx = [2];
         chartA *= parseFloat(`${iconarrowrightj.length >> (Math.min(1, Math.abs(parseInt(`${chartA}`))))}`);
      }
      let corner6 = models9 ? !models9 : models9;
      do {
         models9 = !googleY;
         if (corner6) {
            break;
         }
      } while ((models9) && corner6);
      if (3 <= stylesu.length) {
          let detailso = String.fromCharCode(118,101,114,105,102,121,95,54,95,56,57,0);
          let ewardedr = 1;
          let defaultlogoL: Array<any> = [String.fromCharCode(107,95,49,52,95,104,97,100,100,0), String.fromCharCode(102,95,52,52,95,101,110,101,114,103,121,0)];
          let mode3: Map<any, any> = new Map([[String.fromCharCode(101,95,50,50,95,119,101,108,99,111,109,101,0),String.fromCharCode(120,95,57,57,95,102,101,101,100,98,97,99,107,0)], [String.fromCharCode(118,115,116,97,116,115,95,51,95,53,49,0),String.fromCharCode(119,95,50,55,95,99,111,108,111,114,115,112,97,99,101,0)], [String.fromCharCode(115,109,118,106,112,101,103,95,108,95,53,53,0),String.fromCharCode(117,95,57,53,0)]]);
          let actionsn: Map<any, any> = new Map([[String.fromCharCode(116,119,111,108,111,111,112,95,114,95,50,53,0),551], [String.fromCharCode(106,95,54,53,95,104,113,100,115,112,0),116]]);
         stylesu += "3";
         detailso = `${mode3.size}`;
         ewardedr <<= Math.min(Math.abs(2 - mode3.size), 5);
         defaultlogoL.push(ewardedr * 1);
         actionsn.set(detailso, 1);
      }
         fast1 += `${yellowcirclebgi.length}`;
      sharewhite5 /= Math.max(3, hovero.length);
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

        const renderItem = useCallback(({ item, index }: { item: mayi_Small, index: number }) => {
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
                            backgroundColor: colors.background,
                        }}
                    >
                        <FastImage
                            source={require("@static/images/backgroundTwitterNode.gif")}
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
                                        source={require('@static/images/robotoNetwork.gif')}
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
