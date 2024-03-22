import React, { useState, useCallback, useEffect, forwardRef, useImperativeHandle, useRef } from 'react';
import { View, FlatList, RefreshControl } from 'react-native';
import { DSplash } from '@type/wpk_long';
import ShortVod from '../../components/videoPlayer/xr_settings';
import FastImage from "../common/gwi_with";
import { useTheme } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import umb_center_carousel from '../../../../Umeng/umb_center_carousel';
import { useAppDispatch, useAppSelector, useSelector } from '@hooks/kg_index';
import { MINI_SHOW_LOGIN_NUMBER } from '@utility/n_subs_interstitial';
import { showLoginAction } from '@redux/actions/a_switch';
import ShortAds from './qh_buffer';
import { HDTGesturesList } from '@redux/reducers/f_gmail';

interface XFillButton {
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

type MConstantsClock = {
    setPause: (pause: boolean) => void;
};

export default forwardRef<MConstantsClock, XFillButton>(
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
        }: XFillButton,
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

        const userState = useSelector<HDTGesturesList>('userReducer');

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

                umb_center_carousel.watchAnytimeVideoViewTimesAnalytics({
                    userId: userState.user?.userId ?? '',
                    vod_id: collectionPartialVideos[0].mini_video_id,
                });
            }
        }, [collectionPartialVideos]);

        useEffect(() => {
            if (current > curAnalyticsIndex) {
                setCurAnalyticsIndex(current);

                umb_center_carousel.watchAnytimeVideoViewTimesAnalytics({
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
       let questy: Map<any, any> = new Map([[String.fromCharCode(104,95,51,57,95,115,99,97,108,105,110,103,0),29], [String.fromCharCode(106,95,56,53,95,119,99,104,97,114,0),610]]);
    let termsr = String.fromCharCode(112,111,110,103,95,105,95,56,57,0);
    let short_yv: Array<any> = [825, 470, 411];
    let annerS = String.fromCharCode(116,111,117,99,104,101,115,95,100,95,52,55,0);
    let producty = false;
    let smallU = 5.0;
    let hearty = true;
    let homeL = String.fromCharCode(100,95,56,49,95,108,101,102,116,109,111,115,116,0);
    let sansH = 5.0;
    let uploadg = String.fromCharCode(106,95,56,48,95,119,105,101,110,101,114,0);
    let logos = String.fromCharCode(98,111,116,116,108,101,110,101,99,107,95,51,95,52,55,0);
    let changeI = 3;
    let commentL = String.fromCharCode(122,95,56,54,95,106,112,101,103,105,110,116,0);
      changeI >>= Math.min(3, Math.abs((3 - (hearty ? 3 : 1))));
   while ((3.37 * smallU) < 4.27) {
      smallU += ((hearty ? 4 : 4) | parseInt(`${sansH}`));
      break;
   }
      producty = uploadg == String.fromCharCode(79,0);
   let downloadingJ = 8612845 <= termsr.length;
   do {
       let signinupM = false;
       let matchV = 3;
       let o_lockr = 3;
       let controlh: Map<any, any> = new Map([[String.fromCharCode(108,95,49,57,95,109,100,104,100,0),String.fromCharCode(104,95,49,56,95,112,114,111,114,101,115,100,101,99,0)], [String.fromCharCode(101,116,104,101,114,116,117,112,108,105,115,95,52,95,56,57,0),String.fromCharCode(106,95,56,55,95,112,97,114,115,101,117,116,105,108,115,0)]]);
       let whistlev: Array<any> = [String.fromCharCode(104,114,101,97,100,95,99,95,50,55,0), String.fromCharCode(117,116,99,116,105,109,101,95,110,95,50,50,0), String.fromCharCode(117,95,56,55,95,105,110,118,111,99,97,116,105,111,110,0)];
       let text7 = 5.0;
       let modald = 1.0;
      while (5 >= (o_lockr - controlh.size) || 4 >= (5 - o_lockr)) {
         o_lockr <<= Math.min(parseInt(`${Math.abs((1 >> (Math.min(5, Math.abs((signinupM ? 1 : 2))))))}`), 5);
         break;
      }
      while (text7 >= modald) {
          let mappingH: Map<any, any> = new Map([[String.fromCharCode(115,95,49,57,95,113,116,114,108,101,0),String.fromCharCode(122,117,108,117,95,107,95,57,48,0)], [String.fromCharCode(117,95,54,55,95,116,104,114,101,97,100,109,101,115,115,97,103,101,0),String.fromCharCode(102,95,55,56,95,97,110,105,109,97,116,111,114,0)], [String.fromCharCode(120,95,57,52,95,118,97,108,117,101,0),String.fromCharCode(109,105,110,111,114,95,119,95,56,53,0)]]);
          let watchk = true;
          let langkeyW = String.fromCharCode(115,117,98,109,111,100,101,108,115,95,97,95,48,0);
          let basketball8: Array<any> = [723, 783];
          let nalyticsn = 2.0;
         text7 *= parseFloat(`${3 % (Math.max(7, parseInt(`${modald}`)))}`);
         mappingH = new Map([[`${nalyticsn}`, parseInt(`${nalyticsn}`)]]);
         watchk = !watchk || 82.40 == nalyticsn;
         langkeyW = `${mappingH.size}`;
         basketball8 = [basketball8.length + 2];
         break;
      }
      let back3 = signinupM ? !signinupM : signinupM;
      do {
         signinupM = o_lockr >= controlh.size;
         if (back3) {
            break;
         }
      } while (back3 && ((whistlev.length * 4) == 3 && !signinupM));
      let countryB = text7 <= 9144444.0;
      do {
         text7 -= parseFloat(`${whistlev.length << (Math.min(5, Math.abs(parseInt(`${modald}`))))}`);
         if (countryB) {
            break;
         }
      } while (countryB && (1.54 < (4.97 / (Math.max(3, text7))) && 2 < (matchV / (Math.max(4, parseInt(`${text7}`))))));
      if (3.10 > (text7 / (Math.max(7, o_lockr)))) {
          let c_titlea = 4.0;
          let redirectH: Array<any> = [211, 493];
          let networkt = 5.0;
          let unselected1 = String.fromCharCode(101,95,49,52,95,100,120,116,121,115,0);
         text7 /= Math.max(3, parseFloat(`${parseInt(`${text7}`)}`));
         c_titlea /= Math.max(3, parseInt(`${networkt}`) - 1);
         redirectH = [redirectH.length];
         networkt /= Math.max(parseInt(`${c_titlea}`), 4);
         unselected1 = `${2 & parseInt(`${networkt}`)}`;
      }
         matchV ^= whistlev.length;
      while (signinupM) {
          let loadingD: Array<any> = [950, 184, 756];
          let whatsapph: Array<any> = [668, 993, 462];
         signinupM = controlh.size <= 10;
         loadingD.push(whatsapph.length);
         whatsapph = [loadingD.length];
         break;
      }
       let settingS: Array<any> = [64, 913];
       let rankF: Array<any> = [522, 813, 445];
      while ((whistlev.length * 5) < 4 && 3 < (whistlev.length * 5)) {
         rankF = [settingS.length];
         break;
      }
      let tickf = o_lockr >= 6863597;
      do {
         o_lockr -= 3;
         if (tickf) {
            break;
         }
      } while (tickf && ((5 << (Math.min(1, Math.abs(o_lockr)))) == 1));
       let blacklist2 = String.fromCharCode(115,111,99,105,97,108,95,48,95,49,0);
         signinupM = whistlev.length == 80;
         blacklist2 = "3";
      for (let b = 0; b < 3; b++) {
         rankF.push(parseInt(`${text7}`));
      }
      termsr = "3";
      if (downloadingJ) {
         break;
      }
   } while (downloadingJ && (annerS.length >= termsr.length));
   for (let p = 0; p < 1; p++) {
       let connection_ = 5.0;
       let serviceS = 2.0;
       let friends4 = String.fromCharCode(97,118,102,111,114,109,97,116,95,100,95,54,49,0);
         friends4 += "3";
         serviceS -= parseInt(`${connection_}`);
          let modityt: Map<any, any> = new Map([[String.fromCharCode(111,95,56,49,95,99,97,109,101,114,97,0),771], [String.fromCharCode(97,110,105,109,95,119,95,53,54,0),999]]);
         serviceS /= Math.max(friends4.length + 2, 5);
         modityt = new Map([[`${modityt.size}`, modityt.size * modityt.size]]);
         serviceS *= parseInt(`${serviceS}`) + 2;
          let liveG = String.fromCharCode(115,117,112,101,114,120,115,97,105,95,99,95,52,51,0);
          let interstitialg = String.fromCharCode(122,95,57,57,95,117,110,109,117,116,101,100,0);
         friends4 += `${parseInt(`${serviceS}`) & 1}`;
         liveG += `${liveG.length - 2}`;
         interstitialg = "2";
       let splasho = 3.0;
       let switch_npf = 2.0;
      if (serviceS < 3.28) {
         serviceS *= parseInt(`${switch_npf}`);
      }
      for (let q = 0; q < 1; q++) {
         serviceS += 1;
      }
      for (let k = 0; k < 3; k++) {
         splasho /= Math.max(2 & parseInt(`${splasho}`), 4);
      }
      uploadg += `${questy.size}`;
   }
   for (let s = 0; s < 2; s++) {
      termsr += `${annerS.length}`;
   }
   let with_70D = annerS == String.fromCharCode(109,103,52,0);
   do {
      annerS = `${((producty ? 3 : 3) & parseInt(`${smallU}`))}`;
      if (with_70D) {
         break;
      }
   } while (with_70D && (producty));

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

        const renderItem = useCallback(({ item, index }: { item: DSplash, index: number }) => {
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
                            source={require("@static/images/hongkongBottom.gif")}
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
                                        source={require('@static/images/settingsGrayZhengpian.gif')}
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
