import React, { useState, useCallback, useEffect, forwardRef, useImperativeHandle, useRef } from 'react';
import { View, FlatList, RefreshControl } from 'react-native';
import { yys_ScrollviewPangle } from '@type/yys_libzeus';
import ShortVod from '../../components/videoPlayer/yys_newarchdefaults_sell';
import FastImage from "../common/yys_vertical_collection";
import { useTheme } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import yys_event_common from '../../../../Umeng/yys_event_common';
import { useAppDispatch, useAppSelector, useSelector } from '@hooks/yys_frame';
import { MINI_SHOW_LOGIN_NUMBER } from '@utility/yys_ajax_switch';
import { showLoginAction } from '@redux/actions/yys_runtimescheduler';
import ShortAds from './yys_lang';
import { yys_HejiCricket } from '@redux/reducers/yys_privacy_round';

interface yys_ConfigureUimanager {
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

type yys_CatalogGuide = {
    setPause: (pause: boolean) => void;
};

export default forwardRef<yys_CatalogGuide, yys_ConfigureUimanager>(
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
        }: yys_ConfigureUimanager,
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

        const userState = useSelector<yys_HejiCricket>('userReducer');

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

                yys_event_common.watchAnytimeVideoViewTimesAnalytics({
                    userId: userState.user?.userId ?? '',
                    vod_id: collectionPartialVideos[0].mini_video_id,
                });
            }
        }, [collectionPartialVideos]);

        useEffect(() => {
            if (current > curAnalyticsIndex) {
                setCurAnalyticsIndex(current);

                yys_event_common.watchAnytimeVideoViewTimesAnalytics({
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
       let gemfileQ = 5.0;
    let libjsi3: Map<any, any> = new Map([[String.fromCharCode(97,108,116,114,101,102,95,111,95,57,50,0),517], [String.fromCharCode(119,95,55,52,95,101,118,105,99,101,0),835], [String.fromCharCode(109,105,103,114,97,116,101,95,116,95,57,53,0),748]]);
    let detailsy = 4.0;
    let s_positionN: Array<any> = [String.fromCharCode(118,95,55,49,95,97,109,114,119,98,0), String.fromCharCode(105,95,50,50,95,97,105,102,102,0)];
    let eactS = 3;
    let layoutW = 3;
    let sourcey: Map<any, any> = new Map([[String.fromCharCode(115,99,116,112,95,110,95,53,0),333], [String.fromCharCode(109,95,53,54,95,109,97,116,99,104,105,110,102,111,0),406], [String.fromCharCode(109,97,99,114,111,98,108,111,99,107,95,56,95,54,48,0),46]]);
    let unewinterstitial8: Map<any, any> = new Map([[String.fromCharCode(106,95,54,52,95,114,101,97,100,105,110,0),true ], [String.fromCharCode(109,111,109,101,110,116,97,114,121,95,106,95,53,51,0),false ], [String.fromCharCode(115,117,112,101,114,115,101,116,95,53,95,52,53,0),true ]]);
    let canvasr = String.fromCharCode(113,95,53,52,95,99,108,97,115,115,105,99,0);
    let store1 = true;
    let soundS = 2.0;
    let modalC = String.fromCharCode(110,95,55,55,95,105,109,97,103,101,114,111,116,97,116,101,0);
    let changeO = 2.0;
    let libcxxcomponentsB = String.fromCharCode(99,111,112,121,118,95,108,95,50,0);
    let next0 = 4;
   if (!Array.from(unewinterstitial8.values()).includes(s_positionN.length)) {
      unewinterstitial8.set(`${detailsy}`, unewinterstitial8.size);
   }
       let loading9: Array<any> = [String.fromCharCode(110,111,110,110,117,108,108,97,100,100,114,101,115,115,95,53,95,57,55,0), String.fromCharCode(97,108,116,101,114,97,98,108,101,95,51,95,54,0), String.fromCharCode(120,95,53,50,95,104,118,99,99,0)];
         loading9 = [loading9.length];
      let indexj = loading9.length >= 6420320;
      do {
         loading9 = [3 + loading9.length];
         if (indexj) {
            break;
         }
      } while (indexj && (loading9.includes(loading9.length)));
         loading9.push(1 + loading9.length);
      detailsy *= parseFloat(`${3}`);
       let colors0 = String.fromCharCode(120,95,50,49,95,99,100,99,105,0);
       let shirt_ = String.fromCharCode(116,95,49,56,95,115,99,105,101,110,116,105,102,105,99,0);
       let clearY = 5.0;
      if (3.59 == (3.85 + clearY)) {
         shirt_ = `${parseInt(`${clearY}`) + colors0.length}`;
      }
          let long_bun = 4;
         colors0 = `${colors0.length << (Math.min(shirt_.length, 4))}`;
         long_bun *= long_bun;
       let math7 = 3;
         shirt_ = `${math7 * 3}`;
      let infoU = 7267763 >= shirt_.length;
      do {
         shirt_ = `${1 - parseInt(`${clearY}`)}`;
         if (infoU) {
            break;
         }
      } while ((shirt_.length <= 1) && infoU);
      while ((colors0.length / (Math.max(4, clearY))) == 4.73 && (parseInt(`${clearY}`) / (Math.max(1, colors0.length))) == 4) {
         colors0 += `${colors0.length / 2}`;
         break;
      }
      if (1 == (math7 & 5)) {
         math7 /= Math.max(3 / (Math.max(8, colors0.length)), 5);
      }
      if (4.7 >= clearY) {
          let progressP = 3.0;
          let entryY = String.fromCharCode(121,95,54,52,95,115,111,99,107,115,0);
          let penaltys = 4;
          let annerh = String.fromCharCode(120,102,105,120,101,115,95,49,95,56,57,0);
          let chinak: Array<any> = [208, 730];
         shirt_ = `${chinak.length}`;
         progressP *= parseFloat(`${3}`);
         entryY = `${parseInt(`${progressP}`) / 2}`;
         penaltys <<= Math.min(Math.abs(3 / (Math.max(10, parseInt(`${progressP}`)))), 3);
         annerh += "1";
         chinak = [penaltys];
      }
      while ((clearY + 5.49) >= 2.86) {
         shirt_ = `${2 + shirt_.length}`;
         break;
      }
      soundS -= 1 ^ parseInt(`${gemfileQ}`);
   if (unewinterstitial8.size > 3) {
       let sporto: Map<any, any> = new Map([[String.fromCharCode(118,105,100,101,111,101,110,99,100,115,112,95,112,95,55,49,0),627], [String.fromCharCode(116,104,117,109,98,115,117,112,95,121,95,50,52,0),708], [String.fromCharCode(103,95,57,48,95,114,101,116,114,105,101,118,101,0),414]]);
       let sharedk = 3.0;
       let taiwanw = String.fromCharCode(112,116,114,95,109,95,57,54,0);
       let lessU = 3.0;
       let e_viewm: Map<any, any> = new Map([[String.fromCharCode(115,95,56,49,95,118,97,108,105,100,0),String.fromCharCode(97,108,97,99,100,115,112,95,103,95,57,50,0)], [String.fromCharCode(114,95,53,52,95,109,98,117,118,101,114,114,111,114,0),String.fromCharCode(104,95,50,49,95,116,104,97,110,0)]]);
      let photo0 = 5963171 >= e_viewm.size;
      do {
         e_viewm = new Map([[`${sharedk}`, parseInt(`${sharedk}`)]]);
         if (photo0) {
            break;
         }
      } while (photo0 && (Array.from(e_viewm.keys()).includes(`${sporto.size}`)));
         sporto = new Map([[`${e_viewm.size}`, (String.fromCharCode(115,0) == taiwanw ? e_viewm.size : taiwanw.length)]]);
      let statsc = sharedk >= 5828483.0;
      do {
          let scorey = String.fromCharCode(103,95,53,52,0);
          let modalx = 0;
          let renewH = 2;
          let circleo = String.fromCharCode(110,97,118,105,103,97,116,105,111,110,95,103,95,52,53,0);
          let google2 = 3.0;
         sharedk += e_viewm.size;
         scorey = `${renewH}`;
         modalx -= parseInt(`${google2}`) ^ 2;
         circleo += `${(String.fromCharCode(118,0) == circleo ? circleo.length : parseInt(`${google2}`))}`;
         if (statsc) {
            break;
         }
      } while (statsc && ((parseInt(`${sharedk}`) / (Math.max(sporto.size, 3))) <= 3 || 2 <= (sporto.size - 3)));
         lessU -= parseFloat(`${parseInt(`${lessU}`) ^ taiwanw.length}`);
      if (sporto.get(`${sharedk}`) == null) {
          let cancelv: Array<any> = [662, 330];
         sharedk += 1 % (Math.max(10, taiwanw.length));
         cancelv.push(3 - cancelv.length);
      }
      for (let o = 0; o < 1; o++) {
          let helperz = 2;
          let light6 = String.fromCharCode(101,99,104,111,95,53,95,50,57,0);
         sharedk -= 2;
         helperz *= helperz;
         light6 = `${light6.length - helperz}`;
      }
       let eact2 = true;
       let runtimeL = true;
         lessU -= parseFloat(`${2}`);
         sharedk += ((eact2 ? 2 : 4) << (Math.min(Math.abs(e_viewm.size), 4)));
      let comment4 = runtimeL ? !runtimeL : runtimeL;
      do {
          let umengm = String.fromCharCode(103,97,105,110,99,95,115,95,51,56,0);
          let policyh = String.fromCharCode(112,97,105,110,116,105,110,103,95,114,95,51,49,0);
          let application8 = 4.0;
          let teamh = false;
          let libfabricjnin: Map<any, any> = new Map([[String.fromCharCode(99,109,112,97,100,100,114,95,110,95,51,0),800], [String.fromCharCode(116,95,57,54,95,115,116,117,98,0),833]]);
         runtimeL = (umengm.length - parseInt(`${lessU}`)) == 83;
         umengm = `${libfabricjnin.size}`;
         policyh = `${((teamh ? 3 : 4) ^ policyh.length)}`;
         application8 -= (parseInt(`${application8}`) ^ (teamh ? 4 : 2));
         libfabricjnin.set(policyh, policyh.length / 3);
         if (comment4) {
            break;
         }
      } while ((1 < sporto.size) && comment4);
          let statistics6 = 0;
          let libavcodech = 0.0;
         sporto = new Map([[`${sharedk}`, (parseInt(`${sharedk}`) << (Math.min(4, Math.abs((runtimeL ? 3 : 1)))))]]);
         statistics6 >>= Math.min(Math.abs(statistics6 - 3), 5);
         libavcodech -= 1 ^ statistics6;
         e_viewm.set(`${runtimeL}`, taiwanw.length ^ 2);
      if (!eact2) {
         sharedk += taiwanw.length;
      }
       let formC = String.fromCharCode(115,101,97,114,99,104,95,48,95,57,52,0);
       let libreactnativejniz = String.fromCharCode(98,95,53,54,95,120,100,97,105,0);
      for (let l = 0; l < 1; l++) {
         sharedk /= Math.max(4, sporto.size % (Math.max(1, 5)));
      }
      sourcey = new Map([[canvasr, 1 << (Math.min(5, Math.abs(parseInt(`${lessU}`))))]]);
   }
   for (let f = 0; f < 3; f++) {
       let sportsn = 4.0;
       let sansi = String.fromCharCode(116,104,114,111,116,116,108,101,100,95,117,95,52,48,0);
       let schedulerN = String.fromCharCode(118,95,51,49,95,111,98,115,101,114,118,101,114,0);
       let otherD = 5.0;
          let overlayN = 4.0;
          let formy = String.fromCharCode(99,104,97,110,110,101,108,109,97,112,95,99,95,54,57,0);
          let orangeJ: Map<any, any> = new Map([[String.fromCharCode(109,95,51,52,95,115,116,97,98,105,108,105,122,97,116,105,111,110,0),615], [String.fromCharCode(110,95,52,48,95,115,105,103,110,101,100,0),553]]);
         sansi += `${formy.length | parseInt(`${sportsn}`)}`;
         overlayN -= parseFloat(`${2 - parseInt(`${overlayN}`)}`);
         formy = "3";
         orangeJ.set(`${overlayN}`, orangeJ.size + 1);
          let typing6 = true;
          let playlistI: Map<any, any> = new Map([[String.fromCharCode(100,106,112,101,103,95,51,95,56,51,0),546], [String.fromCharCode(97,117,116,111,100,101,108,101,116,101,95,101,95,53,49,0),700]]);
          let buttonk = String.fromCharCode(110,95,54,53,95,103,101,116,116,105,110,103,0);
         sportsn += parseFloat(`${sansi.length | 1}`);
         typing6 = !typing6;
         playlistI.set(`${typing6}`, 1);
         buttonk += `${playlistI.size & 3}`;
         sansi = `${schedulerN.length ^ sansi.length}`;
      let commonR = String.fromCharCode(119,107,106,49,120,105,115,108,119,0) == sansi;
      do {
         sansi += `${(String.fromCharCode(51,0) == sansi ? sansi.length : schedulerN.length)}`;
         if (commonR) {
            break;
         }
      } while (commonR && (parseInt(`${sportsn}`) < sansi.length));
      if (!sansi.includes(`${otherD}`)) {
         otherD -= 3;
      }
      if (schedulerN.endsWith(`${otherD}`)) {
         schedulerN = `${parseInt(`${otherD}`) * 3}`;
      }
      for (let r = 0; r < 3; r++) {
         sportsn /= Math.max(parseFloat(`${sansi.length & parseInt(`${otherD}`)}`), 4);
      }
      for (let j = 0; j < 3; j++) {
         sansi += `${schedulerN.length % 3}`;
      }
         sportsn += parseFloat(`${sansi.length - 1}`);
         sportsn *= parseFloat(`${1 - sansi.length}`);
         sportsn += parseFloat(`${parseInt(`${sportsn}`) & schedulerN.length}`);
         sansi = `${schedulerN.length}`;
      layoutW *= 2 + libjsi3.size;
   }
   for (let y = 0; y < 2; y++) {
       let blackT: Array<any> = [42, 184];
       let plusP = String.fromCharCode(116,121,112,101,115,95,110,95,54,48,0);
       let resultb = false;
       let libavformatU = String.fromCharCode(98,95,54,51,95,109,112,111,110,0);
      if (2 >= plusP.length) {
         plusP = "3";
      }
         blackT.push(2);
      let final_5N = resultb ? !resultb : resultb;
      do {
          let assistj = 4.0;
          let libmapbufferjniy = String.fromCharCode(113,95,53,50,95,120,117,116,105,108,0);
          let specr = String.fromCharCode(108,95,56,52,95,102,105,114,101,0);
         resultb = specr.length <= 67;
         assistj /= Math.max(1, 4);
         libmapbufferjniy = `${(libmapbufferjniy == String.fromCharCode(106,0) ? parseInt(`${assistj}`) : libmapbufferjniy.length)}`;
         specr = `${parseInt(`${assistj}`) - libmapbufferjniy.length}`;
         if (final_5N) {
            break;
         }
      } while (final_5N && (!plusP.endsWith(`${resultb}`)));
          let right2 = 0;
          let hoverm = 5;
         resultb = blackT.includes(hoverm);
         right2 %= Math.max(5, right2 & 2);
         hoverm -= right2 / (Math.max(right2, 9));
      while (blackT.length == 5) {
         plusP += "1";
         break;
      }
      while (3 <= (plusP.length + 3) && 4 <= (plusP.length + 3)) {
         plusP = `${blackT.length}`;
         break;
      }
      if (libavformatU.length == 5) {
         libavformatU = `${blackT.length ^ libavformatU.length}`;
      }
      for (let n = 0; n < 3; n++) {
         libavformatU += `${(String.fromCharCode(105,0) == libavformatU ? blackT.length : libavformatU.length)}`;
      }
         libavformatU += `${plusP.length / (Math.max(2, 5))}`;
      let mbnativeadvancedB = libavformatU.length >= 6452794;
      do {
          let cornerI: Array<any> = [String.fromCharCode(105,100,108,105,115,116,95,56,95,50,52,0), String.fromCharCode(121,95,51,48,95,100,102,108,97,0)];
          let xnewarchdefaultsv: Map<any, any> = new Map([[String.fromCharCode(114,101,115,105,103,110,101,100,95,56,95,49,50,0),String.fromCharCode(101,120,112,97,110,100,95,109,95,50,0)], [String.fromCharCode(109,95,51,52,95,108,105,118,101,115,116,114,101,97,109,0),String.fromCharCode(97,114,114,97,121,115,105,122,101,95,116,95,57,48,0)], [String.fromCharCode(101,95,51,48,95,111,111,108,116,105,112,0),String.fromCharCode(97,101,99,95,51,95,51,54,0)]]);
          let shirtw = String.fromCharCode(103,114,97,121,102,95,104,95,50,49,0);
          let znewarchdefaultsQ = true;
          let forwarde = true;
         libavformatU += `${((resultb ? 3 : 2))}`;
         cornerI.push(2 - xnewarchdefaultsv.size);
         xnewarchdefaultsv = new Map([[`${forwarde}`, ((forwarde ? 5 : 5) ^ (znewarchdefaultsQ ? 2 : 3))]]);
         shirtw += `${(String.fromCharCode(72,0) == shirtw ? shirtw.length : (forwarde ? 4 : 5))}`;
         if (mbnativeadvancedB) {
            break;
         }
      } while (mbnativeadvancedB && (resultb && 2 >= libavformatU.length));
      for (let h = 0; h < 1; h++) {
          let aboutu = 2.0;
          let dangerN = String.fromCharCode(103,114,101,103,111,114,105,97,110,95,48,95,55,53,0);
          let guideU = 0.0;
          let libglogB = String.fromCharCode(101,95,52,51,95,104,97,110,103,0);
          let gdtadv0 = String.fromCharCode(103,101,110,101,114,97,103,101,95,121,95,51,49,0);
         blackT.push((String.fromCharCode(53,0) == libavformatU ? parseInt(`${guideU}`) : libavformatU.length));
         aboutu += (parseFloat(`${String.fromCharCode(117,0) == gdtadv0 ? gdtadv0.length : dangerN.length}`));
         dangerN = `${parseInt(`${aboutu}`) % (Math.max(1, 2))}`;
         guideU *= parseFloat(`${parseInt(`${aboutu}`) * dangerN.length}`);
         libglogB += "1";
      }
      if ((blackT.length << (Math.min(Math.abs(2), 2))) >= 3) {
         plusP += `${plusP.length * 3}`;
      }
      modalC = "3";
   }
   for (let e = 0; e < 2; e++) {
      store1 = detailsy >= gemfileQ;
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

        const renderItem = useCallback(({ item, index }: { item: yys_ScrollviewPangle, index: number }) => {
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
                            source={require("@static/images/indexTyping.gif")}
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
                                        source={require('@static/images/cancelSigmobLibzeus.gif')}
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
