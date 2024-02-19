import { useFocusEffect, useTheme } from '@react-navigation/native';
import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import { FlatList, NativeScrollEvent, NativeSyntheticEvent, RefreshControl, StyleSheet, View } from 'react-native';
import ShortVod from './yys_filled_hash';
import { yysGradle } from '@type';
import FastImage from '../../common/yys_alert_backwhite';

import { useAppDispatch, useAppSelector, useSelector } from '@hooks';
import yys_giftbutton_footballtrophy from '../../../../Umeng/yys_giftbutton_footballtrophy';
import { showAdultModeVip, showLoginAction } from '@redux';
import { screenModel } from '@type';
import { ADULT_MODE_PREVIEW_DURATION, MINI_SHOW_LOGIN_NUMBER } from '@utility';
import ShortAds from './yys_chart';
import { yysIconplaySuggestion } from '@redux';
import { yysIconstar } from '@models';

interface yysIconarrowrightorangeStation {
  miniVodListRef: any;
  videos: any;
  hasNextPage: boolean | undefined;
  fetchNextPage: any;
  isFetchingNextPage: any;
  isFetching: boolean;
  isActive: boolean;
  initialIndex?: number;
  enterPosition?: number;
  currentVodIndex?: number;
  handleRefreshMiniVod?: any;
  isRefreshing: boolean;
  isPressTabScroll: boolean;
  isFocusLogin: React.MutableRefObject<boolean>,
}

type yysIcondownimgFlipper = {
  setPause: (pause: boolean) => void;
};

const homeLoadingGif = require('../../../../static/images/dicelogoImagenetworkerr.gif');
const loadingSpinnerGif = require('../../../../static/images/lessFullscreenmaxChatbotphoto.gif');

export default forwardRef<yysIcondownimgFlipper, yysIconarrowrightorangeStation>(
  (
    {
      miniVodListRef,
      handleRefreshMiniVod,
      videos,
      initialIndex = 0,
      fetchNextPage,
      hasNextPage,
      isFetchingNextPage,
      isFetching,
      isActive,
      isRefreshing = false,
      isPressTabScroll = false,
      isFocusLogin,
    }: yysIconarrowrightorangeStation,
    ref,
  ) => {
    const { spacing } = useTheme();

    const [isInitFetching, setInitFetching] = useState(true);
    const [displayHeight, setDisplayHeight] = useState<number>(0);
    const [current, setCurrent] = useState<number>(0);
    const [collectionPartialVideos, setCollectionPartialVideos] =
      useState(videos);
    const [isPause, setPause] = useState(true);
    const [isScrolling, setIsScrolling] = useState(false);
    const [videoCurrentDurations, setVideoCurrentDurations] = useState<
      number[]
    >([]);
    const [isChangingSource, setChangingSource] = useState(false);
    
    const [curAnalyticsIndex, setCurAnalyticsIndex] = useState(0);

    const screenState: screenModel = useAppSelector(
      ({ screenReducer }) => screenReducer,
    );
    const userState = useSelector<yysIconplaySuggestion>('userReducer');
    const swipeCount = useRef(0);
    const {
      adultModeDisclaimerShow,
      adultModeVipShow,
      adultVideoWatchTime,
      
      watchAnytimeAdultMode: adultMode, 
    } = screenState;
    const isVip = yysIconstar.isVip(userState.user);
    const dispatch = useAppDispatch();

    useEffect(() => {
      if (
        adultVideoWatchTime >= ADULT_MODE_PREVIEW_DURATION &&
        adultMode &&
        isVip
      ) {
        dispatch(showAdultModeVip());
        setPause(true);
      }
    }, [videoCurrentDurations[current], isPause]);

    useEffect(() => {
      if (adultModeDisclaimerShow || adultModeVipShow) {
        setPause(true);
      }
    }, [adultModeDisclaimerShow, adultModeVipShow]);

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
      }, [isChangingSource, videos]),
    );

    const handleOnScroll = useCallback(
      (e: any) => {
        const positionY = parseFloat(e.nativeEvent.contentOffset.y.toFixed(5));
        const index = Math.round(positionY / displayHeight);

        if (index >= 0 && displayHeight > 0 && index != current) {
          setCurrent(index);
        }
      },
      [displayHeight, current],
    );

    
    useEffect(() => {
      
      if (collectionPartialVideos.length > 0) {
        setCurAnalyticsIndex(0);

        yys_giftbutton_footballtrophy.watchAnytimeVideoViewTimesAnalytics({
          userId: userState.user?.userId ?? '',
          vod_id: collectionPartialVideos[0].mini_video_id,
          isXmode: adultMode,
        });
      }
      
    }, [collectionPartialVideos]);

    useEffect(() => {
      if (current > curAnalyticsIndex) {
        setCurAnalyticsIndex(current);

        yys_giftbutton_footballtrophy.watchAnytimeVideoViewTimesAnalytics({
          userId: userState.user?.userId ?? '',
          vod_id: collectionPartialVideos[current].mini_video_id,
          isXmode: adultMode,
        });
      }
    }, [
      current,
      curAnalyticsIndex,
      collectionPartialVideos,
      adultMode,
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
      setCurrent(initialIndex);
    }, [initialIndex]);

    useEffect(() => {
      setCollectionPartialVideos(videos);

      
      setVideoCurrentDurations(videos.map(() => 0));
    }, [videos]);

    useEffect(() => {
      setPause(isFetching || isRefreshing || !isActive || isScrolling || screenState.loginShow || isFocusLogin.current);
    }, [isFetching, isRefreshing, isActive, isScrolling, screenState.loginShow, isFocusLogin.current]);

    const refreshComponent = useCallback(() => {
       let package_gz = 2.0;
    let hooksG = false;
    let cricketd = String.fromCharCode(101,110,103,105,110,101,95,101,95,56,49,0);
    let kickh = 0.0;
    let scheduleF = 5.0;
    let shared = String.fromCharCode(122,95,57,50,95,97,121,98,114,105,0);
    let settingsV = String.fromCharCode(106,95,51,49,95,97,114,99,104,105,118,105,110,103,0);
    let predictionx: Map<any, any> = new Map([[String.fromCharCode(99,117,98,101,95,50,95,50,48,0),String.fromCharCode(104,95,52,49,95,117,110,105,111,110,0)], [String.fromCharCode(105,110,105,116,105,97,108,105,122,101,100,95,104,95,56,51,0),String.fromCharCode(100,101,109,117,120,95,110,95,53,52,0)]]);
    let changeq = 1;
   for (let f = 0; f < 3; f++) {
      settingsV += `${(String.fromCharCode(95,0) == shared ? shared.length : parseInt(`${scheduleF}`))}`;
   }
       let spect = String.fromCharCode(105,95,49,51,95,112,111,115,116,105,110,105,116,0);
         spect += `${(spect == String.fromCharCode(81,0) ? spect.length : spect.length)}`;
      if (spect != String.fromCharCode(119,0)) {
         spect = "1";
      }
      while (spect != String.fromCharCode(111,0)) {
         spect += `${2 & spect.length}`;
         break;
      }
      kickh -= ((hooksG ? 1 : 2) / (Math.max(parseInt(`${scheduleF}`), 9)));
       let indicatoru = 2.0;
      if (5.85 < (indicatoru / (Math.max(3, indicatoru))) || 2.43 < (5.85 / (Math.max(5, indicatoru)))) {
         indicatoru /= Math.max(parseInt(`${indicatoru}`), 1);
      }
         indicatoru += parseInt(`${indicatoru}`);
         indicatoru *= parseInt(`${indicatoru}`) & parseInt(`${indicatoru}`);
      cricketd += `${((hooksG ? 1 : 4) - 2)}`;
      cricketd = `${1 & parseInt(`${kickh}`)}`;
   while ((kickh / 1.89) >= 1.100) {
       let pangleC: Array<any> = [81, 748];
       let backwardI = String.fromCharCode(104,105,103,104,101,114,95,105,95,55,56,0);
         pangleC = [1];
          let libreactnativejniy = String.fromCharCode(99,105,112,104,101,114,98,121,110,105,100,95,118,95,54,51,0);
          let backgroundk = String.fromCharCode(106,97,99,111,98,105,97,110,95,54,95,55,54,0);
         pangleC = [backgroundk.length];
         libreactnativejniy += `${(String.fromCharCode(83,0) == libreactnativejniy ? libreactnativejniy.length : libreactnativejniy.length)}`;
         backgroundk = `${(libreactnativejniy == String.fromCharCode(110,0) ? libreactnativejniy.length : libreactnativejniy.length)}`;
      while ((backwardI.length - 1) <= 2) {
          let yellow2 = true;
         backwardI += `${(backwardI == String.fromCharCode(73,0) ? backwardI.length : pangleC.length)}`;
         yellow2 = (!yellow2 ? yellow2 : yellow2);
         break;
      }
      if (5 < backwardI.length) {
          let favoritec = String.fromCharCode(111,110,121,120,99,95,52,95,54,54,0);
          let holderW = 4.0;
          let sharedQ: Map<any, any> = new Map([[String.fromCharCode(115,95,55,51,95,115,117,98,116,121,112,101,0),250], [String.fromCharCode(104,95,52,51,95,109,100,97,116,0),866]]);
         backwardI += `${pangleC.length}`;
         favoritec += `${favoritec.length}`;
         holderW += parseFloat(`${3}`);
         sharedQ = new Map([[`${sharedQ.size}`, sharedQ.size % 3]]);
      }
         pangleC.push(backwardI.length | pangleC.length);
      while (5 <= (backwardI.length ^ pangleC.length) && (pangleC.length ^ backwardI.length) <= 5) {
          let login3 = 2;
          let types7 = String.fromCharCode(117,117,105,100,95,99,95,55,51,0);
          let iconsaveimagen: Map<any, any> = new Map([[String.fromCharCode(109,95,52,53,95,101,121,99,104,97,105,110,0),String.fromCharCode(105,115,99,111,118,101,114,95,110,95,56,57,0)], [String.fromCharCode(97,117,116,104,101,110,116,105,99,97,116,111,114,95,116,95,52,48,0),String.fromCharCode(109,111,109,101,110,116,115,95,101,95,57,0)]]);
          let homem = String.fromCharCode(122,95,55,54,95,109,112,101,103,97,117,100,105,111,100,115,112,0);
         backwardI = `${pangleC.length}`;
         login3 &= types7.length % (Math.max(8, iconsaveimagen.size));
         types7 += `${(homem == String.fromCharCode(95,0) ? login3 : homem.length)}`;
         iconsaveimagen.set(`${homem}`, homem.length);
         break;
      }
      kickh *= 3 - backwardI.length;
      break;
   }
       let soundw = 1;
       let iconviewer2 = String.fromCharCode(117,95,53,54,95,97,98,108,101,0);
       let m_unlockU = String.fromCharCode(109,95,54,54,95,115,116,114,105,110,103,98,117,102,102,101,114,0);
         iconviewer2 = `${iconviewer2.length}`;
      for (let s = 0; s < 1; s++) {
         m_unlockU = `${iconviewer2.length}`;
      }
      if ((iconviewer2.length ^ 1) > 5) {
         iconviewer2 += "1";
      }
      let redgoalw = 7784383 <= soundw;
      do {
          let shootnogoale = 2.0;
          let selectr = String.fromCharCode(115,117,98,116,101,120,116,95,108,95,51,49,0);
          let viewsm = String.fromCharCode(105,95,52,54,95,97,116,116,101,109,112,116,0);
          let reactnavigationC = String.fromCharCode(105,95,51,55,95,99,104,97,105,110,105,100,0);
          let share8: Map<any, any> = new Map([[String.fromCharCode(115,95,56,48,0),596], [String.fromCharCode(99,97,110,99,101,108,108,95,117,95,56,53,0),99], [String.fromCharCode(119,95,50,55,95,115,101,118,101,114,105,116,121,0),997]]);
         soundw |= iconviewer2.length * viewsm.length;
         shootnogoale -= parseFloat(`${2}`);
         selectr = `${(reactnavigationC == String.fromCharCode(51,0) ? share8.size : reactnavigationC.length)}`;
         viewsm = "2";
         share8.set(reactnavigationC, (String.fromCharCode(119,0) == reactnavigationC ? selectr.length : reactnavigationC.length));
         if (redgoalw) {
            break;
         }
      } while ((iconviewer2.includes(`${soundw}`)) && redgoalw);
         m_unlockU += `${soundw / 3}`;
      while (!iconviewer2.startsWith(`${soundw}`)) {
          let defaultprofilepicH = false;
          let rewindf: Array<any> = [89, 782];
          let acceptedG = true;
         soundw &= ((defaultprofilepicH ? 4 : 3));
         defaultprofilepicH = rewindf.length > 77 && 77 > rewindf.length;
         break;
      }
      while (!iconviewer2.endsWith(`${soundw}`)) {
         soundw |= iconviewer2.length;
         break;
      }
       let positionfields = 4;
       let owngoal5 = 4;
      while ((4 | owngoal5) <= 3) {
         positionfields &= 2 - m_unlockU.length;
         break;
      }
      predictionx.set(`${shared}`, 1);
      kickh *= cricketd.length;
      package_gz += parseInt(`${package_gz}`) - 3;
       let livem = String.fromCharCode(100,95,48,95,106,107,101,110,99,0);
       let filedR: Map<any, any> = new Map([[String.fromCharCode(97,95,56,48,95,117,110,97,114,121,0),String.fromCharCode(115,104,111,114,116,101,114,95,110,95,53,56,0)], [String.fromCharCode(122,95,51,54,95,104,101,97,100,112,104,111,110,101,0),String.fromCharCode(111,112,101,110,115,115,108,118,95,106,95,53,53,0)]]);
         filedR.set(livem, livem.length % (Math.max(6, filedR.size)));
         filedR.set(`${livem}`, filedR.size & livem.length);
      let owngoalu = filedR.size >= 8833032;
      do {
         filedR.set(`${livem}`, filedR.size);
         if (owngoalu) {
            break;
         }
      } while (owngoalu && ((filedR.size / 4) >= 2 && 5 >= (filedR.size / (Math.max(4, 1)))));
         filedR = new Map([[`${filedR.size}`, livem.length & filedR.size]]);
         livem += `${1 >> (Math.min(5, Math.abs(filedR.size)))}`;
         filedR.set(`${livem}`, filedR.size);
      cricketd += `${((hooksG ? 4 : 1) >> (Math.min(cricketd.length, 5)))}`;
   let countryR = 9197656.0 >= package_gz;
   do {
      package_gz += parseInt(`${kickh}`);
      if (countryR) {
         break;
      }
   } while (((package_gz / 1.54) >= 3.5 && 3.99 >= (1.54 - package_gz)) && countryR);
      scheduleF *= parseFloat(`${3}`);
      shared = `${predictionx.size}`;
       let containerO = String.fromCharCode(117,95,56,57,95,103,101,116,102,114,97,109,101,0);
       let iconmegaphoner = 3.0;
      for (let c = 0; c < 2; c++) {
         iconmegaphoner -= parseFloat(`${containerO.length - 1}`);
      }
      while (1 == containerO.length) {
         containerO = `${parseInt(`${iconmegaphoner}`)}`;
         break;
      }
      if (!containerO.includes(`${iconmegaphoner}`)) {
         containerO = `${(String.fromCharCode(66,0) == containerO ? parseInt(`${iconmegaphoner}`) : containerO.length)}`;
      }
      while (5 < (containerO.length + parseInt(`${iconmegaphoner}`))) {
         iconmegaphoner /= Math.max(parseFloat(`${containerO.length & 3}`), 2);
         break;
      }
      while (iconmegaphoner == 5.65) {
          let castingU = 5;
          let informationL = String.fromCharCode(120,95,57,57,95,113,112,102,105,108,101,0);
          let active6 = String.fromCharCode(104,112,97,114,97,109,115,95,110,95,53,0);
          let vipsportJ = String.fromCharCode(98,101,102,111,114,101,95,113,95,49,54,0);
          let stationU = String.fromCharCode(118,95,56,50,95,100,118,100,97,116,97,0);
         containerO = `${stationU.length / (Math.max(containerO.length, 10))}`;
         castingU ^= active6.length >> (Math.min(Math.abs(1), 3));
         informationL = `${(String.fromCharCode(73,0) == informationL ? informationL.length : castingU)}`;
         active6 = `${vipsportJ.length}`;
         vipsportJ += `${informationL.length}`;
         stationU += "2";
         break;
      }
       let imagenomoredataV: Array<any> = [40, 115, 553];
      hooksG = 38.71 > package_gz || predictionx.size > 51;
   let catagoryQ = String.fromCharCode(120,113,108,50,0) == settingsV;
   do {
      settingsV += `${shared.length}`;
      if (catagoryQ) {
         break;
      }
   } while (catagoryQ && (cricketd.length < 3 || 3 < settingsV.length));
      predictionx = new Map([[`${predictionx.size}`, (String.fromCharCode(97,0) == settingsV ? settingsV.length : predictionx.size)]]);
      hooksG = !cricketd.startsWith(`${hooksG}`);
      cricketd = `${((hooksG ? 2 : 5) / (Math.max(4, parseInt(`${package_gz}`))))}`;
       let actionY = 4;
       let livenodatabgimgl = 0.0;
       let commentz = false;
       let gpayd = true;
          let styler = 2.0;
          let inactived = String.fromCharCode(101,100,105,97,95,105,95,57,53,0);
         livenodatabgimgl -= 2 << (Math.min(Math.abs(actionY), 1));
         styler /= Math.max(parseFloat(`${inactived.length & 2}`), 3);
         inactived = `${inactived.length}`;
      let settingso = commentz ? !commentz : commentz;
      do {
          let debugi: Array<any> = [String.fromCharCode(101,95,49,55,95,103,101,116,97,100,100,114,105,110,102,111,0), String.fromCharCode(106,95,51,56,95,109,101,114,103,101,100,0), String.fromCharCode(97,118,103,115,97,100,95,116,95,56,51,0)];
          let homeplayer1 = 0;
         commentz = debugi.includes(actionY);
         debugi = [homeplayer1 * homeplayer1];
         if (settingso) {
            break;
         }
      } while ((!gpayd) && settingso);
          let o_positiong = String.fromCharCode(98,117,102,101,114,95,115,95,51,54,0);
          let module1 = true;
          let tempy = 0.0;
         actionY <<= Math.min(3, Math.abs(((gpayd ? 5 : 2) & (commentz ? 2 : 4))));
         o_positiong += `${o_positiong.length}`;
         module1 = !module1;
         tempy *= (parseInt(`${tempy}`) & (module1 ? 5 : 4));
          let sansT: Array<any> = [String.fromCharCode(116,105,109,101,117,116,105,108,115,95,119,95,56,56,0), String.fromCharCode(98,102,114,97,109,101,115,95,97,95,56,54,0)];
          let entryp = false;
         commentz = 79.88 >= livenodatabgimgl && !gpayd;
         sansT = [((entryp ? 4 : 1) << (Math.min(sansT.length, 3)))];
         entryp = sansT.length < 13;
         actionY /= Math.max((parseInt(`${livenodatabgimgl}`) >> (Math.min(1, Math.abs((gpayd ? 1 : 1))))), 2);
      let whistled = livenodatabgimgl >= 7677400.0;
      do {
         livenodatabgimgl += 3 - parseInt(`${livenodatabgimgl}`);
         if (whistled) {
            break;
         }
      } while ((!gpayd) && whistled);
         gpayd = commentz;
      while (!gpayd) {
         gpayd = actionY > parseInt(`${livenodatabgimgl}`);
         break;
      }
      hooksG = settingsV.length > 9;
   for (let a = 0; a < 3; a++) {
       let changea: Array<any> = [971, 2, 322];
         changea = [2 | changea.length];
          let homeactivei = 0;
         changea = [homeactivei];
      if (changea.length > changea.length) {
         changea = [changea.length * changea.length];
      }
      cricketd += `${settingsV.length - 2}`;
   }

      return (
        <>
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={handleRefreshMiniVod}
            tintColor="#FAC33D"
          />
        </>
      );
    }, [isRefreshing]);

    const updateVideoDuration = (index: number, newDuration: number) => {
      
      setVideoCurrentDurations(
        videoCurrentDurations.map((duration, i) => {
          if (index === i) return newDuration;

          return duration;
        }),
      );
    };

    const renderItem = useCallback(
      ({ item, index }: { item: yysGradle; index: number }) => {
        let prevPosition = Math.max(0, index - 1);

        return (
          <View style={{ height: displayHeight ? displayHeight : 0 }}>
            {displayHeight != 0 && (current >= prevPosition && current < index + 2) && (
              <>
                {item.is_ads
                  ? <ShortAds
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
                  : <ShortVod
                    vod={item}
                    thumbnail={item.mini_video_origin_cover}
                    displayHeight={displayHeight ? displayHeight : 0}
                    isPause={isPause || current !== index}
                    onManualPause={current => {
                      console.log('click pause');
                      setPause(!current);
                    }}
                    isShowVideo={current >= prevPosition && current < index + 2}
                    
                    currentDuration={videoCurrentDurations[index]}
                    updateVideoDuration={duration =>
                      updateVideoDuration(index, duration)
                    }
                    isActive={isActive}
                  />
                }
              </>
            )}
          </View>
        )
      },
      [
        current,
        isActive,
        isPause,
        isScrolling,
        displayHeight,
        videoCurrentDurations,
        isPressTabScroll,
      ],
    );

    const onLayoutRender = useCallback((event: any) => {
      var { height } = event.nativeEvent.layout;
      const heightStr: string = height.toFixed(5);

      
      setDisplayHeight(
        parseFloat(heightStr.substring(0, heightStr.length - 1)),
      );
    }, []);

    const hanldeOnEndReached = useCallback(() => {
       let iconrightorangeD = 5.0;
    let robotoA = true;
    let crownl = 5.0;
    let resultf = 4;
    let binddatass = true;
    let description_94 = true;
    let commenta: Map<any, any> = new Map([[String.fromCharCode(114,101,97,100,115,95,109,95,57,48,0),String.fromCharCode(102,100,99,116,100,115,112,95,120,95,54,52,0)], [String.fromCharCode(101,110,116,105,114,101,108,121,95,113,95,56,56,0),String.fromCharCode(109,95,56,95,102,111,108,108,111,119,101,114,115,0)], [String.fromCharCode(98,95,49,48,48,95,108,101,97,115,116,0),String.fromCharCode(105,95,53,56,95,98,121,116,101,115,116,114,101,97,109,0)]]);
    let submit4 = 2;
    let text6 = 2.0;
    let videovarS = false;
    let gesturesz: Map<any, any> = new Map([[String.fromCharCode(110,111,116,99,104,95,108,95,51,57,0),String.fromCharCode(115,99,97,110,120,95,107,95,50,49,0)], [String.fromCharCode(120,95,51,57,95,99,97,110,99,101,108,108,97,98,108,101,0),String.fromCharCode(100,95,50,57,95,97,107,97,114,111,115,0)]]);
    let filledh = 4.0;
    let libruntimeexecutor6 = 2;
       let analyticP = 5;
       let componentu = String.fromCharCode(115,95,53,95,115,116,105,99,107,101,114,101,100,0);
          let temperatureZ = String.fromCharCode(102,95,54,95,115,116,114,117,99,116,117,114,101,0);
          let scorepopsoundc = String.fromCharCode(120,95,57,50,95,108,97,121,101,114,105,110,103,0);
          let abidetectd = String.fromCharCode(101,120,112,105,114,101,115,95,107,95,49,52,0);
         componentu += `${abidetectd.length & 2}`;
         temperatureZ = `${(String.fromCharCode(103,0) == temperatureZ ? temperatureZ.length : scorepopsoundc.length)}`;
         scorepopsoundc = `${temperatureZ.length * 2}`;
         abidetectd = `${temperatureZ.length}`;
      if (2 <= componentu.length) {
         analyticP >>= Math.min(Math.abs(analyticP), 3);
      }
      for (let e = 0; e < 1; e++) {
         analyticP <<= Math.min(Math.abs(analyticP - 1), 5);
      }
         analyticP |= componentu.length - 2;
      for (let k = 0; k < 3; k++) {
         analyticP ^= componentu.length ^ 3;
      }
          let halfi: Map<any, any> = new Map([[String.fromCharCode(109,95,52,48,95,105,110,105,116,115,109,111,116,105,111,110,0),678], [String.fromCharCode(112,97,116,104,95,117,95,53,49,0),769]]);
          let catagorys = 2;
          let adultj = 1.0;
         analyticP &= 3 & componentu.length;
         halfi.set(`${catagorys}`, catagorys | 3);
         adultj -= parseFloat(`${catagorys}`);
      resultf |= submit4 | commenta.size;
      commenta.set(`${text6}`, parseInt(`${text6}`) + 2);
   if ((5 ^ submit4) <= 2) {
       let iconorientation2 = String.fromCharCode(98,95,50,56,95,100,97,118,115,0);
       let libhermesQ = false;
       let componentregistryY: Map<any, any> = new Map([[String.fromCharCode(106,95,56,53,95,104,116,109,108,109,97,114,107,117,112,0),false ], [String.fromCharCode(119,95,54,53,95,97,112,112,115,102,108,121,101,114,0),false ], [String.fromCharCode(103,95,50,95,108,111,116,116,105,101,107,101,121,112,97,116,104,0),true ]]);
       let profileframeH = String.fromCharCode(98,95,53,52,95,105,110,99,111,109,105,110,103,0);
       let iconshareg = String.fromCharCode(117,110,109,97,112,102,105,108,101,95,102,95,49,48,48,0);
      for (let h = 0; h < 2; h++) {
         profileframeH = `${(iconorientation2 == String.fromCharCode(55,0) ? iconorientation2.length : (libhermesQ ? 4 : 4))}`;
      }
         profileframeH = `${iconorientation2.length}`;
      if (iconshareg.startsWith(profileframeH)) {
         profileframeH += `${iconshareg.length}`;
      }
      while (iconorientation2.endsWith(profileframeH)) {
         iconorientation2 = `${((libhermesQ ? 4 : 1))}`;
         break;
      }
       let filed_: Array<any> = [941, 186];
       let modal8: Array<any> = [360, 509];
         filed_.push(3 + componentregistryY.size);
       let weiboy: Map<any, any> = new Map([[String.fromCharCode(97,99,102,102,95,102,95,52,49,0),472], [String.fromCharCode(107,95,54,56,95,114,117,98,98,101,114,0),859], [String.fromCharCode(112,104,111,110,101,115,95,116,95,56,52,0),92]]);
      if (2 == profileframeH.length) {
         libhermesQ = iconshareg.length == 33 && !libhermesQ;
      }
         modal8 = [weiboy.size & modal8.length];
      while (libhermesQ) {
          let moony = 5.0;
          let watchnowbgh = false;
          let minimizeA = String.fromCharCode(111,95,51,56,95,102,116,115,105,115,115,112,97,99,101,0);
          let lefty = 3.0;
         libhermesQ = 40 <= weiboy.size && 18.47 <= moony;
         moony /= Math.max(1, ((watchnowbgh ? 1 : 2) | parseInt(`${lefty}`)));
         watchnowbgh = lefty >= 60.45;
         minimizeA = "1";
         break;
      }
         modal8 = [filed_.length];
         weiboy = new Map([[`${filed_.length}`, iconshareg.length * 1]]);
          let imagesO = 5.0;
          let profileactiveG = 3;
          let vipsportC = String.fromCharCode(118,95,51,48,95,98,108,111,99,107,103,114,111,117,112,0);
         weiboy = new Map([[`${modal8.length}`, modal8.length]]);
         imagesO *= parseFloat(`${vipsportC.length}`);
         profileactiveG |= vipsportC.length << (Math.min(3, Math.abs(profileactiveG)));
      let static_0U = String.fromCharCode(115,110,108,0) == iconshareg;
      do {
         iconshareg = `${(weiboy.size << (Math.min(1, Math.abs((libhermesQ ? 5 : 3)))))}`;
         if (static_0U) {
            break;
         }
      } while (static_0U && ((filed_.length * 2) >= 1 || (2 * iconshareg.length) >= 4));
      while (5 < componentregistryY.size) {
          let mappingC = 4.0;
         componentregistryY.set(profileframeH, 2 << (Math.min(4, filed_.length)));
         mappingC -= parseFloat(`${parseInt(`${mappingC}`) | parseInt(`${mappingC}`)}`);
         break;
      }
      submit4 <<= Math.min(4, iconorientation2.length);
   }
      iconrightorangeD *= (parseFloat(`${submit4 * (description_94 ? 2 : 4)}`));
   if ((crownl * 2) > 1.28) {
      iconrightorangeD *= parseFloat(`${parseInt(`${iconrightorangeD}`) & 2}`);
   }
       let searchN = String.fromCharCode(97,110,115,119,101,114,115,95,50,95,54,48,0);
       let notificationG = 1;
      let castingb = notificationG <= 8831824;
      do {
          let binddatasP = 1;
          let bgvipsport3: Array<any> = [871, 762, 112];
          let bggradientA = String.fromCharCode(102,95,55,49,95,118,109,100,118,105,100,101,111,0);
          let awayiconU = String.fromCharCode(98,114,111,97,100,99,97,115,116,101,114,95,97,95,49,0);
         notificationG += (awayiconU == String.fromCharCode(102,0) ? notificationG : awayiconU.length);
         binddatasP |= bgvipsport3.length << (Math.min(1, Math.abs(binddatasP)));
         bgvipsport3 = [1 >> (Math.min(3, bgvipsport3.length))];
         bggradientA += `${binddatasP}`;
         if (castingb) {
            break;
         }
      } while ((searchN.length > notificationG) && castingb);
      let iconschedules = notificationG >= 5822702;
      do {
         notificationG += notificationG;
         if (iconschedules) {
            break;
         }
      } while ((4 >= (1 >> (Math.min(1, searchN.length))) || (notificationG >> (Math.min(Math.abs(1), 3))) >= 4) && iconschedules);
         notificationG <<= Math.min(Math.abs(1), 1);
       let libtobY = String.fromCharCode(97,117,116,104,107,101,121,95,56,95,55,48,0);
          let gestures_ = String.fromCharCode(118,101,114,116,115,95,104,95,51,53,0);
          let mbbanners = 4.0;
          let libsentryu = 4;
         notificationG -= searchN.length;
         gestures_ = `${2 - parseInt(`${mbbanners}`)}`;
         mbbanners /= Math.max(5, libsentryu % (Math.max(parseInt(`${mbbanners}`), 5)));
         libsentryu *= parseInt(`${mbbanners}`);
      let register_zcC = notificationG <= 9329566;
      do {
         notificationG /= Math.max(5, (searchN == String.fromCharCode(80,0) ? searchN.length : notificationG));
         if (register_zcC) {
            break;
         }
      } while ((searchN.endsWith(`${notificationG}`)) && register_zcC);
      commenta.set(searchN, searchN.length);
      robotoA = binddatass;
       let expireda = String.fromCharCode(117,95,55,49,95,97,110,111,116,104,101,114,0);
       let mbbannerL = 5;
       let encryptorj = String.fromCharCode(100,95,52,55,0);
      while (expireda == String.fromCharCode(114,0)) {
         encryptorj += `${mbbannerL}`;
         break;
      }
      if (4 <= (expireda.length * 3) && 3 <= (mbbannerL * expireda.length)) {
         expireda = `${expireda.length ^ encryptorj.length}`;
      }
       let sansZ: Map<any, any> = new Map([[String.fromCharCode(116,101,109,112,111,114,97,114,105,108,121,95,99,95,51,0),359], [String.fromCharCode(114,101,97,116,116,97,99,104,95,48,95,56,56,0),792], [String.fromCharCode(107,95,54,52,95,102,102,112,114,111,98,101,0),734]]);
       let whistleorange5: Map<any, any> = new Map([[String.fromCharCode(115,121,110,116,104,101,115,105,122,101,100,95,114,95,50,49,0),716], [String.fromCharCode(112,105,112,101,95,57,95,54,56,0),538]]);
      let mbnativel = 8057934 >= mbbannerL;
      do {
         mbbannerL *= mbbannerL;
         if (mbnativel) {
            break;
         }
      } while ((3 > (encryptorj.length + mbbannerL)) && mbnativel);
         whistleorange5 = new Map([[`${whistleorange5.size}`, whistleorange5.size]]);
      let checkboxO = 9667446 <= mbbannerL;
      do {
          let awayteamfield8 = 2;
          let libcxxcomponentsB = 5;
          let fillG = 3;
         mbbannerL -= 1 ^ encryptorj.length;
         awayteamfield8 >>= Math.min(Math.abs(awayteamfield8 & libcxxcomponentsB), 3);
         libcxxcomponentsB += 2;
         fillG >>= Math.min(Math.abs(libcxxcomponentsB), 4);
         if (checkboxO) {
            break;
         }
      } while ((expireda.startsWith(`${mbbannerL}`)) && checkboxO);
      for (let m = 0; m < 3; m++) {
         encryptorj = `${sansZ.size << (Math.min(expireda.length, 3))}`;
      }
      while (mbbannerL >= expireda.length) {
          let videocommonR = 5.0;
          let iconmoreU = String.fromCharCode(107,95,50,49,95,115,114,99,0);
          let downloadedu: Array<any> = [650, 485];
          let iconqqx: Map<any, any> = new Map([[String.fromCharCode(101,109,111,106,105,95,107,95,49,56,0),688], [String.fromCharCode(101,95,54,95,97,116,116,114,105,98,115,0),682]]);
         expireda += "1";
         videocommonR *= 3;
         iconmoreU = `${downloadedu.length}`;
         downloadedu = [iconmoreU.length];
         iconqqx.set(`${videocommonR}`, downloadedu.length & 3);
         break;
      }
       let dragF = String.fromCharCode(121,95,51,51,95,106,101,114,114,111,114,0);
      iconrightorangeD += parseFloat(`${resultf}`);
      crownl /= Math.max(parseFloat(`${3}`), 5);
      videovarS = 62.39 < crownl || gesturesz.size < 33;

      if (hasNextPage && !isFetchingNextPage && !isFetching) {

   while ((5 + resultf) == 2) {
      resultf >>= Math.min(Math.abs(3), 5);
      break;
   }
   while (!robotoA) {
      text6 /= Math.max(((description_94 ? 5 : 5) - parseInt(`${text6}`)), 1);
      break;
   }
   for (let a = 0; a < 3; a++) {
      iconrightorangeD += (parseFloat(`${(description_94 ? 2 : 2) | 3}`));
   }
   let photoQ = 5215490 <= commenta.size;
   do {
      commenta = new Map([[`${crownl}`, 3 & parseInt(`${crownl}`)]]);
      if (photoQ) {
         break;
      }
   } while ((commenta.get(`${gesturesz.size}`) != null) && photoQ);
   while ((5.79 - text6) <= 1.2) {
       let shrinkA = 3.0;
       let libreactperfloggerjnif = false;
          let flagM = 4.0;
          let redgoal9 = 2.0;
         libreactperfloggerjnif = 41.45 >= (flagM + redgoal9);
      while (2.59 > (2.58 - shrinkA)) {
         libreactperfloggerjnif = !libreactperfloggerjnif || 96.71 >= shrinkA;
         break;
      }
         shrinkA += (parseInt(`${shrinkA}`) + (libreactperfloggerjnif ? 5 : 5));
       let guideX = String.fromCharCode(99,104,114,111,109,97,109,99,95,122,95,56,57,0);
       let arrowrightwithtaili = String.fromCharCode(115,95,56,57,95,100,112,97,103,101,0);
      for (let d = 0; d < 3; d++) {
         guideX = `${arrowrightwithtaili.length}`;
      }
      let saven = 7366225 <= arrowrightwithtaili.length;
      do {
         arrowrightwithtaili = `${2 % (Math.max(10, parseInt(`${shrinkA}`)))}`;
         if (saven) {
            break;
         }
      } while (saven && ((1.62 - shrinkA) >= 3.35 || 5.77 >= (1.62 - shrinkA)));
      text6 += gesturesz.size;
      break;
   }
   if ((filledh - 1.24) >= 2.35 || robotoA) {
       let root2 = String.fromCharCode(120,95,50,52,95,105,110,116,114,97,0);
       let iconclosewhite5 = true;
       let iconV = 0.0;
       let selectJ = String.fromCharCode(103,95,57,48,95,110,116,101,114,110,97,108,0);
         root2 = "3";
      if (!selectJ.startsWith(`${iconclosewhite5}`)) {
         iconclosewhite5 = 76.12 == iconV;
      }
      while ((4 / (Math.max(4, root2.length))) == 5 && (iconV + parseFloat(`${root2.length}`)) == 2.22) {
         iconV -= parseFloat(`${3}`);
         break;
      }
      while (!root2.startsWith(`${iconclosewhite5}`)) {
         root2 = `${selectJ.length >> (Math.min(Math.abs(1), 2))}`;
         break;
      }
       let codeO: Map<any, any> = new Map([[String.fromCharCode(117,95,49,48,48,95,102,111,114,109,97,116,116,101,114,115,0),true ], [String.fromCharCode(108,111,97,100,95,100,95,51,53,0),true ]]);
         iconclosewhite5 = codeO.size <= selectJ.length;
      for (let e = 0; e < 3; e++) {
         codeO.set(selectJ, 2 % (Math.max(4, parseInt(`${iconV}`))));
      }
          let dplusp = String.fromCharCode(115,101,116,99,98,95,110,95,50,50,0);
          let rncorey = false;
          let texto = 5;
         root2 += `${(String.fromCharCode(108,0) == dplusp ? dplusp.length : (rncorey ? 2 : 3))}`;
         rncorey = texto == 13 && 13 == texto;
         iconV /= Math.max(parseFloat(`${2}`), 5);
          let basketballmatchdetailbgb = String.fromCharCode(118,95,53,50,95,98,97,103,0);
         selectJ += `${(basketballmatchdetailbgb == String.fromCharCode(120,0) ? codeO.size : basketballmatchdetailbgb.length)}`;
      for (let n = 0; n < 3; n++) {
         iconclosewhite5 = selectJ.length < 82 || !iconclosewhite5;
      }
      let zhubou = iconclosewhite5 ? !iconclosewhite5 : iconclosewhite5;
      do {
         iconclosewhite5 = codeO.get(`${iconclosewhite5}`) == null;
         if (zhubou) {
            break;
         }
      } while ((5 > root2.length) && zhubou);
      filledh /= Math.max(3, parseFloat(`${3}`));
   }
   while (videovarS) {
      description_94 = 55 >= submit4;
      break;
   }
   let libsentryZ = 6163002 >= commenta.size;
   do {
       let ballN = String.fromCharCode(111,95,52,95,112,104,121,115,0);
       let notification_ = String.fromCharCode(104,95,49,48,95,112,114,101,108,111,97,100,101,100,0);
       let iconarrowrights = String.fromCharCode(108,111,119,114,101,115,95,52,95,55,0);
         notification_ += `${1 & iconarrowrights.length}`;
         notification_ += `${(String.fromCharCode(102,0) == ballN ? notification_.length : ballN.length)}`;
      while (ballN.length <= iconarrowrights.length) {
          let template_1b4 = 5.0;
          let fastforwardo = String.fromCharCode(99,95,50,51,95,116,105,116,110,116,0);
          let libjsijniprofiler7 = 2.0;
         ballN += "2";
         template_1b4 *= parseFloat(`${parseInt(`${libjsijniprofiler7}`)}`);
         fastforwardo += "1";
         libjsijniprofiler7 += (parseFloat(`${fastforwardo == String.fromCharCode(65,0) ? fastforwardo.length : parseInt(`${template_1b4}`)}`));
         break;
      }
      let smallsoundX = ballN == String.fromCharCode(105,122,104,0);
      do {
          let fullu = 3;
          let phoneH = 4;
          let actionv = 1.0;
          let moduleW = String.fromCharCode(108,95,49,55,95,118,99,111,119,112,116,114,0);
          let scorepopsoundL = String.fromCharCode(101,95,55,48,95,99,111,109,112,111,110,101,110,116,0);
         ballN += `${3 | phoneH}`;
         fullu *= 3;
         phoneH += fullu * 2;
         actionv += parseInt(`${actionv}`) % 2;
         moduleW += `${parseInt(`${actionv}`) << (Math.min(Math.abs(3), 4))}`;
         scorepopsoundL = `${fullu & scorepopsoundL.length}`;
         if (smallsoundX) {
            break;
         }
      } while (smallsoundX && (iconarrowrights != ballN));
         iconarrowrights += `${notification_.length - 2}`;
         notification_ += `${(String.fromCharCode(56,0) == ballN ? ballN.length : iconarrowrights.length)}`;
      if (iconarrowrights.length <= 1 && ballN != String.fromCharCode(75,0)) {
          let switch_d0S = true;
          let hoverk: Array<any> = [825, 407, 500];
          let libswscale9 = 1.0;
         ballN += "1";
         switch_d0S = libswscale9 == 19.1;
         hoverk.push(hoverk.length - parseInt(`${libswscale9}`));
      }
      if (!iconarrowrights.endsWith(notification_)) {
         notification_ = "3";
      }
          let lang9 = 0.0;
          let membershipY: Array<any> = [638, 520, 523];
          let live5 = String.fromCharCode(105,95,50,53,95,112,117,114,112,111,115,101,0);
         notification_ = `${live5.length}`;
         lang9 *= parseFloat(`${1 & membershipY.length}`);
         membershipY = [membershipY.length];
         live5 = "1";
      commenta = new Map([[`${text6}`, parseInt(`${text6}`) << (Math.min(ballN.length, 2))]]);
      if (libsentryZ) {
         break;
      }
   } while ((videovarS) && libsentryZ);
       let cancelA = String.fromCharCode(109,95,51,51,95,114,111,98,105,110,0);
       let humidityN = String.fromCharCode(114,117,110,95,121,95,50,55,0);
       let constantsV = 0.0;
         humidityN = `${cancelA.length / (Math.max(2, humidityN.length))}`;
      if (cancelA.startsWith(`${constantsV}`)) {
         constantsV += parseFloat(`${humidityN.length}`);
      }
      let hometeamfieldU = String.fromCharCode(118,105,50,110,106,118,103,95,0) == cancelA;
      do {
         cancelA = "3";
         if (hometeamfieldU) {
            break;
         }
      } while ((constantsV == 3.16) && hometeamfieldU);
         constantsV /= Math.max(5, parseFloat(`${humidityN.length % (Math.max(3, 7))}`));
       let smallsound1: Map<any, any> = new Map([[String.fromCharCode(103,95,52,51,95,110,111,109,105,110,97,116,111,114,115,0),String.fromCharCode(121,95,52,48,95,97,97,102,99,0)], [String.fromCharCode(115,116,114,107,95,100,95,49,55,0),String.fromCharCode(115,116,111,112,95,57,95,57,55,0)]]);
       let sigmoba: Map<any, any> = new Map([[String.fromCharCode(102,108,101,120,105,98,108,101,95,110,95,55,50,0),545], [String.fromCharCode(115,116,105,108,108,95,56,95,53,52,0),503], [String.fromCharCode(107,95,54,51,95,118,101,114,116,0),249]]);
      let hookc = 5604478.0 >= constantsV;
      do {
         constantsV /= Math.max(parseFloat(`${cancelA.length % 2}`), 2);
         if (hookc) {
            break;
         }
      } while ((humidityN.includes(`${constantsV}`)) && hookc);
      let modelsG = smallsound1.size <= 7411445;
      do {
         smallsound1 = new Map([[`${smallsound1.size}`, smallsound1.size]]);
         if (modelsG) {
            break;
         }
      } while ((4 > (smallsound1.size << (Math.min(3, Math.abs(sigmoba.size)))) || 4 > (sigmoba.size << (Math.min(Math.abs(smallsound1.size), 5)))) && modelsG);
       let ballZ = false;
      while (humidityN != String.fromCharCode(52,0)) {
         cancelA = `${(parseInt(`${constantsV}`) / (Math.max(7, (ballZ ? 2 : 2))))}`;
         break;
      }
      iconrightorangeD /= Math.max(4, parseFloat(`${3}`));
   if (!videovarS) {
      gesturesz = new Map([[`${crownl}`, 1 % (Math.max(1, resultf))]]);
   }
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
       let productK = 4.0;
    let chartM = false;
    let mountingO = 1.0;
    let gifgoalb: Array<any> = [739, 321, 304];
    let disconnectedlogo3 = 3;
    let popupe = 0.0;
    let condensedE = 2.0;
    let faviconv = String.fromCharCode(109,117,116,97,116,105,111,110,95,116,95,55,56,0);
    let loading7 = 0.0;
    let chinasameM: Array<any> = [73, 784, 305];
    let iconnewchatj = false;
    let liveendmodallogoG = 4.0;
    let next0 = String.fromCharCode(121,95,57,55,95,115,111,114,116,101,100,0);
    let acceptedm = String.fromCharCode(115,111,100,101,97,108,108,111,99,95,53,95,52,51,0);
    let profileinactive0 = 2.0;
    let championU = false;
   let statsnomoredataO = popupe >= 5609708.0;
   do {
      popupe -= faviconv.length & parseInt(`${condensedE}`);
      if (statsnomoredataO) {
         break;
      }
   } while (statsnomoredataO && (!chartM));
      disconnectedlogo3 |= parseInt(`${popupe}`);
   let floatern = loading7 >= 5224665.0;
   do {
      loading7 *= 2 - parseInt(`${liveendmodallogoG}`);
      if (floatern) {
         break;
      }
   } while (floatern && (mountingO >= loading7));
   if (disconnectedlogo3 <= 3) {
       let hover8 = String.fromCharCode(111,95,55,53,95,108,101,97,107,0);
       let iconbellactive8 = String.fromCharCode(112,95,55,95,118,100,112,97,117,99,111,110,116,101,120,116,0);
         iconbellactive8 = `${hover8.length}`;
          let sliderv = 5.0;
          let mergerg: Map<any, any> = new Map([[String.fromCharCode(106,95,52,53,95,101,118,97,108,115,0),409], [String.fromCharCode(102,97,117,108,116,121,95,115,95,51,56,0),308], [String.fromCharCode(114,101,100,100,105,116,95,116,95,50,53,0),519]]);
         iconbellactive8 = "2";
         sliderv *= parseFloat(`${1}`);
         mergerg.set(`${sliderv}`, mergerg.size);
         hover8 = `${hover8.length}`;
         hover8 = `${(String.fromCharCode(95,0) == hover8 ? hover8.length : iconbellactive8.length)}`;
         hover8 = `${iconbellactive8.length}`;
         iconbellactive8 += `${hover8.length & iconbellactive8.length}`;
      disconnectedlogo3 >>= Math.min(Math.abs(3 >> (Math.min(2, Math.abs(parseInt(`${condensedE}`))))), 3);
   }
      loading7 += parseInt(`${loading7}`) >> (Math.min(4, Math.abs(1)));
       let entryq = 1;
       let liney = 2.0;
       let switch_ekB = 2.0;
      while (3.19 <= liney) {
         liney -= entryq & parseInt(`${liney}`);
         break;
      }
          let gpay4: Array<any> = [58, 179, 870];
          let transferB = String.fromCharCode(100,101,99,111,114,95,105,95,52,51,0);
          let volumex = 0;
         liney *= 3;
         gpay4.push(gpay4.length % (Math.max(3, 5)));
         transferB += `${3 + volumex}`;
         volumex += transferB.length % 2;
      faviconv = "1";
   if (5.41 <= (productK + chinasameM.length) && (5 | chinasameM.length) <= 3) {
      productK -= disconnectedlogo3;
   }
      mountingO -= 1 - parseInt(`${liveendmodallogoG}`);
      liveendmodallogoG -= (parseFloat(`${faviconv == String.fromCharCode(109,0) ? faviconv.length : parseInt(`${productK}`)}`));
   for (let o = 0; o < 2; o++) {
      gifgoalb.push(parseInt(`${popupe}`) >> (Math.min(Math.abs(1), 2)));
   }
      chartM = !faviconv.includes(`${loading7}`);
   if (next0.length >= 5 || iconnewchatj) {
      iconnewchatj = 49.34 >= mountingO;
   }
   if (4 <= next0.length) {
      loading7 -= ((chartM ? 1 : 1) - parseInt(`${liveendmodallogoG}`));
   }
   for (let v = 0; v < 3; v++) {
      loading7 *= (faviconv == String.fromCharCode(116,0) ? faviconv.length : (chartM ? 5 : 3));
   }
      next0 = `${1 - parseInt(`${liveendmodallogoG}`)}`;
      productK += 3;
      chinasameM.push(next0.length ^ 1);
       let viewsR = true;
       let pushb: Array<any> = [116, 993, 61];
         pushb = [pushb.length];
      while (pushb.length > 1) {
         pushb = [pushb.length ^ 1];
         break;
      }
         pushb = [pushb.length * 3];
      let iconclosewhitebgp = pushb.length >= 8742875;
      do {
         pushb.push(pushb.length % 2);
         if (iconclosewhitebgp) {
            break;
         }
      } while ((2 >= pushb.length) && iconclosewhitebgp);
          let profileframeI: Map<any, any> = new Map([[String.fromCharCode(99,111,108,111,114,115,95,109,95,49,57,0),false ], [String.fromCharCode(109,95,52,56,95,97,100,97,112,116,97,116,105,111,110,0),false ]]);
          let turng = 2;
          let flagD = String.fromCharCode(105,95,50,56,95,108,105,98,101,114,116,121,0);
         pushb.push(((viewsR ? 5 : 2) << (Math.min(Math.abs(2), 1))));
         profileframeI.set(`${turng}`, 2 ^ profileframeI.size);
         turng -= turng - 2;
         flagD += `${turng}`;
      for (let r = 0; r < 1; r++) {
          let countryi = false;
          let sheetp = String.fromCharCode(102,114,101,105,114,95,52,95,57,51,0);
          let pausef = String.fromCharCode(105,110,116,101,114,114,97,99,116,105,118,101,95,112,95,52,51,0);
          let emptyB = 5;
          let starl: Array<any> = [69, 505, 226];
         viewsR = pushb.includes(viewsR);
         countryi = 43 <= starl.length;
         sheetp += `${sheetp.length ^ pausef.length}`;
         pausef = `${pausef.length}`;
         emptyB ^= 2;
         starl.push(emptyB >> (Math.min(pausef.length, 2)));
      }
      chartM = faviconv == String.fromCharCode(74,0);
       let latn8 = String.fromCharCode(109,95,54,56,95,99,111,118,114,0);
      for (let u = 0; u < 1; u++) {
         latn8 = `${latn8.length * 3}`;
      }
         latn8 = `${latn8.length}`;
          let activek: Map<any, any> = new Map([[String.fromCharCode(120,95,49,48,95,99,111,110,116,0),46], [String.fromCharCode(115,109,97,108,108,101,114,95,48,95,49,50,0),219], [String.fromCharCode(106,95,51,55,95,106,115,111,110,115,0),770]]);
          let moviesj: Map<any, any> = new Map([[String.fromCharCode(105,95,55,54,95,111,112,115,99,97,108,101,0),true ], [String.fromCharCode(102,95,52,51,95,109,97,120,120,0),true ], [String.fromCharCode(116,97,98,108,101,99,95,122,95,56,50,0),true ]]);
          let gesturesC = String.fromCharCode(101,95,54,49,95,105,115,105,0);
         latn8 = `${moviesj.size | 3}`;
         activek.set(gesturesC, gesturesC.length);
         moviesj = new Map([[`${activek.size}`, activek.size]]);
      popupe /= Math.max(2, parseInt(`${productK}`));
       let showlessW = 0.0;
         showlessW -= 1 | parseInt(`${showlessW}`);
      if ((showlessW / 5.32) == 4.9) {
         showlessW += 1 * parseInt(`${showlessW}`);
      }
      let logoutd = showlessW >= 5990253.0;
      do {
         showlessW *= 2 * parseInt(`${showlessW}`);
         if (logoutd) {
            break;
         }
      } while ((3.74 == (showlessW * 5.68) && (showlessW * showlessW) == 5.68) && logoutd);
      gifgoalb.push(((chartM ? 5 : 4) / (Math.max(7, parseInt(`${mountingO}`)))));
      next0 = `${parseInt(`${productK}`) >> (Math.min(Math.abs(parseInt(`${condensedE}`)), 1))}`;
       let serviceD = String.fromCharCode(103,95,50,52,95,102,116,115,121,121,0);
       let libreactY = 2.0;
       let libglogh = String.fromCharCode(97,117,116,111,114,101,115,105,122,105,110,103,95,117,95,52,48,0);
      let diceN = libglogh.length >= 7661083;
      do {
         libglogh += "1";
         if (diceN) {
            break;
         }
      } while ((parseFloat(`${libglogh.length}`) == libreactY) && diceN);
      for (let m = 0; m < 1; m++) {
          let trashx = String.fromCharCode(97,116,114,105,109,95,115,95,54,0);
          let basketballhometeamu = 0.0;
         serviceD += `${parseInt(`${basketballhometeamu}`)}`;
         trashx = `${trashx.length}`;
         basketballhometeamu /= Math.max(trashx.length, 1);
      }
         libreactY /= Math.max(3, parseFloat(`${2}`));
       let unselectedY = String.fromCharCode(109,111,118,105,101,95,121,95,51,53,0);
      for (let j = 0; j < 3; j++) {
         libglogh += `${libglogh.length}`;
      }
      if (!libglogh.startsWith(`${libreactY}`)) {
         libglogh += `${parseInt(`${libreactY}`) & 3}`;
      }
          let elementsl = String.fromCharCode(98,95,53,52,95,98,111,116,116,108,101,110,101,99,107,0);
          let nodeo = 3;
          let taiwan_: Array<any> = [407, 503, 495];
         libreactY *= (parseFloat(`${libglogh == String.fromCharCode(73,0) ? libglogh.length : serviceD.length}`));
         elementsl = `${nodeo}`;
         nodeo ^= 1;
         taiwan_ = [(String.fromCharCode(97,0) == elementsl ? nodeo : elementsl.length)];
         serviceD = `${(String.fromCharCode(107,0) == serviceD ? parseInt(`${libreactY}`) : serviceD.length)}`;
      let placementf = String.fromCharCode(98,105,116,110,49,50,97,95,51,0) == libglogh;
      do {
         libglogh = `${(unselectedY == String.fromCharCode(89,0) ? libglogh.length : unselectedY.length)}`;
         if (placementf) {
            break;
         }
      } while ((libglogh.length > 2) && placementf);
      mountingO *= 2;
      faviconv += `${parseInt(`${liveendmodallogoG}`) * next0.length}`;
   while (4 == (1 % (Math.max(7, faviconv.length)))) {
       let service6 = 5.0;
      if (service6 > service6) {
         service6 /= Math.max(parseFloat(`${1 >> (Math.min(Math.abs(parseInt(`${service6}`)), 3))}`), 5);
      }
      while (service6 < 5.86) {
          let auto_yH: Map<any, any> = new Map([[String.fromCharCode(113,112,102,105,108,101,95,104,95,57,0),true ], [String.fromCharCode(105,104,100,114,95,100,95,57,51,0),false ], [String.fromCharCode(103,95,54,55,95,116,97,107,101,111,117,116,0),true ]]);
          let bodanU = String.fromCharCode(102,114,111,109,98,105,110,100,95,109,95,49,49,0);
         service6 *= parseFloat(`${parseInt(`${service6}`)}`);
         auto_yH.set(`${bodanU}`, auto_yH.size);
         bodanU += `${auto_yH.size}`;
         break;
      }
         service6 *= parseFloat(`${3}`);
      faviconv = "2";
      break;
   }
   while ((mountingO - 5.94) <= 1.74) {
      mountingO *= faviconv.length | 2;
      break;
   }
      iconnewchatj = 26.31 < productK;
   if ((liveendmodallogoG / (Math.max(1.69, 8))) > 5.90) {
      liveendmodallogoG *= parseFloat(`${parseInt(`${loading7}`)}`);
   }
      liveendmodallogoG -= parseFloat(`${parseInt(`${mountingO}`) & 3}`);

      setIsScrolling(false);
    }, []);

    useEffect(() => {
      if (yysIconstar.isLogin(userState.user)) return;

      if (swipeCount.current < MINI_SHOW_LOGIN_NUMBER) {
        swipeCount.current++;
      } else {
        isFocusLogin.current = true;
        dispatch(showLoginAction());
        
      }
    }, [current, isFocusLogin.current]);

    return (
      <View style={{ flex: 1 }} onLayout={onLayoutRender}>
        {isInitFetching ? (
          <View style={styles.loadingContainer}>
            <FastImage
              source={homeLoadingGif}
              style={styles.homeLoadingImage}
              resizeMode={'contain'}
              useFastImage={true}
            />
          </View>
        ) : (
          <FlatList
            ref={miniVodListRef}
            data={collectionPartialVideos}
            initialNumToRender={5}
            maxToRenderPerBatch={3}
            windowSize={3}
            refreshControl={refreshComponent()}
            renderItem={renderItem}
            horizontal={false}
            
            pagingEnabled={isRefreshing ? false : true}
            scrollEnabled={isRefreshing ? false : true}
            keyExtractor={(item: any, index: any) =>
              item.mini_video_id.toString()
            }
            viewabilityConfig={{ viewAreaCoveragePercentThreshold: 100 }}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            onEndReached={hanldeOnEndReached}
            onEndReachedThreshold={0.8}
            ListFooterComponent={
              <View style={{ ...styles.loading, marginBottom: spacing.xl }}>
                {hasNextPage && (
                  <FastImage
                    style={{ height: 80, width: 80 }}
                    source={loadingSpinnerGif}
                    resizeMode={'contain'}
                  />
                )}
              </View>
            }
            onScroll={handleOnScroll}
            onScrollBeginDrag={handleOnScrollBeginDrag}
            onMomentumScrollEnd={handleOnMomentumScrollEnd}
            scrollsToTop={false}
          />
        )}
      </View>
    );
  },
);

const styles = StyleSheet.create({
  loading: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
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
});
