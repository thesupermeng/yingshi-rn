import { useFocusEffect, useIsFocused, useTheme } from '@react-navigation/native';
import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import { FlatList, NativeScrollEvent, NativeSyntheticEvent, Platform, RefreshControl, StyleSheet, View } from 'react-native';
import ShortVod from './tt_save';
import { ttAnimationSource } from '@type/tt_line_borderless';
import FastImage from '../../common/tt_connection';

import { useAppDispatch, useAppSelector, useSelector } from '@hooks/tt_spec_download';
import tt_humidity_guide from '../../../../Umeng/tt_humidity_guide';
import { showAdultModeVip, showLoginAction } from '@redux/actions/tt_copy_heji';
import { screenModel } from '@type/tt_twitter_data';
import { ADULT_MODE_PREVIEW_DURATION, MINI_SHOW_LOGIN_NUMBER } from '@utility/tt_trophy_cross';
import ShortAds from './tt_mbjscommon_register';
import { ttGoal } from '@redux/reducers/tt_selected';
import { ttFast } from '@models/tt_stations_right';
import { AdultVipPrivilegeOverlay } from './../../modal/tt_material';
import BecomeVipOverlay from "./../../modal/tt_type";

interface ttSmall {
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
  onPressAds: () => void,
}

type ttUnselectedNative = {
  setPause: (pause: boolean) => void;
};

const homeLoadingGif = require('@static/images/blacklistTumbnail.gif');
const loadingSpinnerGif = require('@static/images/toponTerms.gif');

export default forwardRef<ttUnselectedNative, ttSmall>(
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
      onPressAds,
    }: ttSmall,
    ref,
  ) => {

    const [showAdultVIPOverlay, setShowAdultVIPOverlay] = useState(false);

    const { spacing } = useTheme();
    const isFocus = useIsFocused();

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
    const userState = useSelector<ttGoal>('userReducer');
    const swipeCount = useRef(0);
    const {
      adultModeDisclaimerShow,
      adultModeVipShow,
      adultVideoWatchTime,
      
      watchAnytimeAdultMode: adultMode, 
    } = screenState;
    const isVip = ttFast.isVip(userState.user);
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
      if (current > 0 && current % 4 == 0 && !isVip && adultMode) {
        setShowAdultVIPOverlay(true);
      }
    }, [current]);

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

        tt_humidity_guide.watchAnytimeVideoViewTimesAnalytics({
          userId: userState.user?.userId ?? '',
          vod_id: collectionPartialVideos[0].mini_video_id,
          isXmode: adultMode,
        });
      }
      
    }, [collectionPartialVideos]);

    useEffect(() => {
      if (current > curAnalyticsIndex && current < collectionPartialVideos.length) {
        setCurAnalyticsIndex(current);

        tt_humidity_guide.watchAnytimeVideoViewTimesAnalytics({
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
       let textz = String.fromCharCode(100,105,114,115,95,97,95,57,50,0);
    let klevinm = String.fromCharCode(103,95,55,48,95,115,104,111,119,0);
    let episodesj = 3;
    let arrowI: Map<any, any> = new Map([[String.fromCharCode(115,115,121,98,95,48,95,57,56,0),false ], [String.fromCharCode(122,95,55,57,95,108,111,99,97,108,104,111,115,116,0),false ], [String.fromCharCode(112,95,49,51,95,116,114,97,110,115,102,101,114,0),true ]]);
    let controlsm = String.fromCharCode(99,95,52,48,95,97,98,103,114,0);
    let brightness8 = 2.0;
    let hearte = 2.0;
    let preview4 = String.fromCharCode(122,95,51,49,95,114,97,110,100,111,109,0);
    let settingsQ: Map<any, any> = new Map([[String.fromCharCode(114,95,49,95,102,97,110,99,121,0),31], [String.fromCharCode(115,99,114,101,101,110,95,113,95,49,0),700]]);
    let singled = true;
    let zhuboE: Map<any, any> = new Map([[String.fromCharCode(100,101,97,99,116,105,118,97,116,101,100,95,104,95,49,56,0),true ], [String.fromCharCode(120,95,51,48,95,105,110,116,101,114,97,99,116,105,118,101,108,108,121,0),true ]]);
    let groupm = 2.0;
    let ewardedk: Map<any, any> = new Map([[String.fromCharCode(118,115,116,97,116,115,95,121,95,51,0),572], [String.fromCharCode(107,95,55,52,95,97,112,112,114,111,120,105,109,97,116,101,0),498], [String.fromCharCode(115,112,97,99,101,114,95,98,95,49,53,0),221]]);
    let more1 = false;
   for (let c = 0; c < 1; c++) {
      klevinm = `${3 << (Math.min(4, Math.abs(parseInt(`${hearte}`))))}`;
   }
   for (let k = 0; k < 3; k++) {
      controlsm += `${3 + parseInt(`${hearte}`)}`;
   }
      hearte /= Math.max(parseFloat(`${controlsm.length}`), 1);
   if (!textz.includes(`${episodesj}`)) {
       let lightA = String.fromCharCode(116,115,97,110,95,103,95,54,52,0);
       let roundJ = 2.0;
       let moduleX = String.fromCharCode(114,101,99,116,95,56,95,51,0);
       let eighteenN = false;
      let tickb = String.fromCharCode(53,120,120,48,55,120,0) == moduleX;
      do {
         moduleX = `${lightA.length}`;
         if (tickb) {
            break;
         }
      } while (tickb && (5 > (parseInt(`${roundJ}`) / 4) || (moduleX.length / (Math.max(9, parseInt(`${roundJ}`)))) > 4));
      let texti = moduleX.length >= 9064432;
      do {
         moduleX += `${parseInt(`${roundJ}`) >> (Math.min(1, Math.abs(3)))}`;
         if (texti) {
            break;
         }
      } while (((parseInt(`${roundJ}`) / 3) > 5 || 4 > (moduleX.length % 3)) && texti);
      let greyL = lightA.length <= 8961896;
      do {
         lightA = `${moduleX.length >> (Math.min(Math.abs(1), 3))}`;
         if (greyL) {
            break;
         }
      } while (greyL && (moduleX.length == lightA.length));
       let detailZ: Map<any, any> = new Map([[String.fromCharCode(100,95,56,48,95,100,105,115,116,0),828], [String.fromCharCode(110,111,100,101,115,101,116,95,119,95,53,55,0),985]]);
       let macauZ: Map<any, any> = new Map([[String.fromCharCode(107,95,56,52,95,98,117,116,116,111,110,115,0),91], [String.fromCharCode(104,117,101,115,95,98,95,55,51,0),934]]);
      while (4 == (moduleX.length ^ 5) && (detailZ.size ^ moduleX.length) == 5) {
          let muteda = 0.0;
          let usery = String.fromCharCode(102,95,51,50,95,97,100,116,115,116,111,97,115,99,0);
         moduleX = `${(lightA == String.fromCharCode(75,0) ? (eighteenN ? 3 : 5) : lightA.length)}`;
         muteda *= parseInt(`${muteda}`);
         usery = `${usery.length % (Math.max(7, parseInt(`${muteda}`)))}`;
         break;
      }
      let serviceX = eighteenN ? !eighteenN : eighteenN;
      do {
         eighteenN = moduleX.length >= parseInt(`${roundJ}`);
         if (serviceX) {
            break;
         }
      } while ((5 > (macauZ.size % (Math.max(3, 2)))) && serviceX);
       let acceptedo = 2.0;
       let reducerR = 0.0;
      for (let z = 0; z < 3; z++) {
         acceptedo *= detailZ.size * 3;
      }
      let placeholdera = 7012664.0 <= acceptedo;
      do {
         acceptedo *= moduleX.length;
         if (placeholdera) {
            break;
         }
      } while (placeholdera && (reducerR > acceptedo));
         acceptedo -= detailZ.size;
       let bridgen = 5.0;
      if (lightA.length < 1) {
          let fastx = 1;
          let layoutC = String.fromCharCode(100,111,119,110,115,97,109,112,108,101,95,50,95,51,48,0);
          let loginI = 5;
          let utilsF = String.fromCharCode(112,95,56,52,95,115,97,109,112,108,101,114,0);
          let feedback6 = String.fromCharCode(99,117,118,105,100,95,122,95,51,0);
         lightA = `${macauZ.size}`;
         fastx <<= Math.min(3, Math.abs(utilsF.length & loginI));
         layoutC += `${3 - utilsF.length}`;
         loginI -= fastx << (Math.min(layoutC.length, 2));
         feedback6 = "2";
      }
      episodesj <<= Math.min(Math.abs((String.fromCharCode(119,0) == textz ? textz.length : moduleX.length)), 3);
   }
   let usernameF = 6577186 >= arrowI.size;
   do {
      arrowI.set(`${brightness8}`, ((singled ? 2 : 5) % (Math.max(6, parseInt(`${brightness8}`)))));
      if (usernameF) {
         break;
      }
   } while (((2 + arrowI.size) == 4 && 1 == (2 + arrowI.size)) && usernameF);
      singled = klevinm.length <= 90;
   while (!textz.endsWith(`${settingsQ.size}`)) {
      textz += `${2 ^ parseInt(`${brightness8}`)}`;
      break;
   }
      groupm -= textz.length >> (Math.min(Math.abs(2), 3));
      zhuboE.set(`${brightness8}`, arrowI.size);
      groupm += textz.length << (Math.min(4, preview4.length));
   for (let s = 0; s < 1; s++) {
       let albumN = String.fromCharCode(118,95,52,51,95,111,112,101,110,101,100,0);
       let analyticsS = true;
       let statsC: Array<any> = [423, 525];
       let logoQ = 1;
       let emojis = String.fromCharCode(115,121,110,111,110,121,109,115,95,104,95,51,49,0);
      while ((albumN.length ^ 2) < 1 && (albumN.length ^ statsC.length) < 2) {
         albumN = `${emojis.length >> (Math.min(Math.abs(3), 1))}`;
         break;
      }
         emojis = `${albumN.length << (Math.min(emojis.length, 5))}`;
         logoQ *= 3 & logoQ;
      if (4 < albumN.length) {
         albumN += `${statsC.length}`;
      }
      if (!albumN.includes(`${analyticsS}`)) {
          let thumbnailG = String.fromCharCode(104,95,49,56,95,115,101,116,116,105,103,110,115,0);
          let trashH = String.fromCharCode(119,95,57,49,95,115,116,114,100,117,112,0);
          let filedx = String.fromCharCode(101,95,50,55,95,97,114,102,113,0);
          let terms1 = true;
         analyticsS = trashH.length > 68 || terms1;
         thumbnailG += `${filedx.length}`;
         trashH = "3";
         filedx = `${(String.fromCharCode(121,0) == thumbnailG ? thumbnailG.length : filedx.length)}`;
         terms1 = thumbnailG.length > filedx.length;
      }
      let gemfileW = logoQ >= 7186072;
      do {
         logoQ -= 2;
         if (gemfileW) {
            break;
         }
      } while (gemfileW && (!analyticsS && (3 | logoQ) >= 3));
         analyticsS = (logoQ / (Math.max(2, statsC.length))) < 25;
       let header8 = 4.0;
       let cornerM = 5.0;
      let mbridgeJ = emojis.length <= 8276989;
      do {
         emojis += `${((analyticsS ? 2 : 3) - 3)}`;
         if (mbridgeJ) {
            break;
         }
      } while (mbridgeJ && (albumN == String.fromCharCode(98,0)));
         emojis = "1";
      let rankI = analyticsS ? !analyticsS : analyticsS;
      do {
          let holders = 1.0;
          let halfi = 2.0;
         analyticsS = 45.62 == cornerM;
         holders -= parseInt(`${halfi}`) % (Math.max(8, parseInt(`${holders}`)));
         halfi += parseFloat(`${parseInt(`${holders}`) & 1}`);
         if (rankI) {
            break;
         }
      } while (rankI && (!analyticsS));
         logoQ -= albumN.length | logoQ;
      if (2 <= (statsC.length % (Math.max(1, logoQ)))) {
         statsC.push(parseInt(`${cornerM}`));
      }
      while (2 >= (statsC.length / 3)) {
         statsC.push(logoQ);
         break;
      }
         analyticsS = albumN.length == 79;
      groupm -= 2 & parseInt(`${hearte}`);
   }
   if (4 >= (ewardedk.size & zhuboE.size) || 3 >= (4 & zhuboE.size)) {
      ewardedk = new Map([[`${settingsQ.size}`, controlsm.length | 3]]);
   }
      brightness8 += zhuboE.size % (Math.max(7, arrowI.size));
   if (4 <= (textz.length + settingsQ.size)) {
      settingsQ.set(controlsm, 2 >> (Math.min(1, Math.abs(zhuboE.size))));
   }
   let stations = String.fromCharCode(119,112,56,57,114,122,0) == klevinm;
   do {
      klevinm = `${((singled ? 5 : 4) << (Math.min(Math.abs(parseInt(`${groupm}`)), 2)))}`;
      if (stations) {
         break;
      }
   } while ((3 > (4 & klevinm.length) || 1 > (4 & klevinm.length)) && stations);
      groupm /= Math.max(4, parseInt(`${brightness8}`));
      brightness8 += controlsm.length - 2;
   for (let b = 0; b < 3; b++) {
      episodesj <<= Math.min(3, Math.abs(parseInt(`${brightness8}`) | 1));
   }
   let internetM = textz == String.fromCharCode(101,117,111,0);
   do {
       let selectm: Array<any> = [432, 84, 906];
         selectm = [selectm.length * 3];
      let sidei = selectm.length >= 5691460;
      do {
          let updatesG = String.fromCharCode(99,97,115,116,115,95,52,95,54,52,0);
          let goalL = 5;
         selectm = [2];
         updatesG = `${goalL}`;
         goalL += updatesG.length >> (Math.min(Math.abs(1), 1));
         if (sidei) {
            break;
         }
      } while (sidei && ((selectm.length * 5) == 3));
      let configureD = selectm.length <= 6175250;
      do {
         selectm = [3];
         if (configureD) {
            break;
         }
      } while ((selectm.length < 2) && configureD);
      textz = `${ewardedk.size}`;
      if (internetM) {
         break;
      }
   } while (internetM && (5.93 == (groupm / (Math.max(5.2, 4)))));
   while (groupm > zhuboE.size) {
       let appsa = 3.0;
       let member9 = 5;
       let viewerl = 2;
       let kuaishouM = String.fromCharCode(106,95,56,54,95,109,97,110,105,102,101,115,116,0);
       let buttonP = 4.0;
      while (1.57 < (appsa * member9)) {
         appsa += parseFloat(`${3}`);
         break;
      }
         member9 /= Math.max(kuaishouM.length >> (Math.min(Math.abs(1), 4)), 3);
      while (kuaishouM.length >= member9) {
         member9 >>= Math.min(Math.abs(2 % (Math.max(9, parseInt(`${buttonP}`)))), 4);
         break;
      }
      for (let p = 0; p < 1; p++) {
         member9 &= 3 ^ member9;
      }
          let pageG = String.fromCharCode(116,95,57,49,95,115,101,99,116,105,111,110,0);
         kuaishouM += `${2 + viewerl}`;
         pageG = `${pageG.length * 1}`;
      let viewerQ = member9 >= 5944981;
      do {
         member9 *= parseInt(`${appsa}`);
         if (viewerQ) {
            break;
         }
      } while ((4 < (4 ^ member9) || 5 < (viewerl ^ 4)) && viewerQ);
      while (kuaishouM.startsWith(`${appsa}`)) {
         kuaishouM = `${3 >> (Math.min(2, Math.abs(parseInt(`${buttonP}`))))}`;
         break;
      }
         viewerl <<= Math.min(Math.abs(parseInt(`${buttonP}`)), 4);
         appsa /= Math.max(parseFloat(`${1}`), 4);
      while ((buttonP - 5.12) < 5.33 || 4.40 < (buttonP - 5.12)) {
         buttonP *= member9;
         break;
      }
         buttonP += (String.fromCharCode(71,0) == kuaishouM ? parseInt(`${appsa}`) : kuaishouM.length);
       let penaltyv: Map<any, any> = new Map([[String.fromCharCode(98,95,50,49,95,109,97,115,107,105,110,103,0),String.fromCharCode(99,95,55,55,95,114,105,110,103,116,111,110,101,115,0)], [String.fromCharCode(99,104,101,99,107,101,114,95,115,95,57,50,0),String.fromCharCode(109,95,53,56,95,100,101,108,97,117,110,97,121,0)]]);
       let downloadedX: Map<any, any> = new Map([[String.fromCharCode(104,95,52,54,95,112,97,121,109,97,115,116,101,114,0),511], [String.fromCharCode(105,95,57,55,95,105,110,102,105,110,105,116,101,0),887]]);
          let ballY = String.fromCharCode(101,95,50,52,95,111,110,103,111,105,110,103,0);
          let humidityo = 1.0;
         member9 ^= parseInt(`${buttonP}`) * member9;
         ballY = `${2 * ballY.length}`;
         humidityo *= parseFloat(`${ballY.length | 2}`);
         downloadedX.set(`${member9}`, viewerl);
      while (5 == (member9 % (Math.max(4, 2)))) {
          let calendarL: Array<any> = [507, 399];
          let alertu: Map<any, any> = new Map([[String.fromCharCode(97,95,50,57,95,100,101,103,114,101,101,0),375], [String.fromCharCode(108,105,98,103,115,109,95,52,95,57,50,0),194], [String.fromCharCode(110,95,50,53,95,99,112,117,105,100,0),802]]);
          let splash7: Array<any> = [String.fromCharCode(104,95,55,51,0), String.fromCharCode(110,95,51,0), String.fromCharCode(97,95,57,55,95,114,101,99,97,108,99,117,108,97,116,105,111,110,0)];
         buttonP *= parseInt(`${buttonP}`) % (Math.max(alertu.size, 6));
         calendarL.push(calendarL.length / 3);
         alertu.set(`${splash7.length}`, splash7.length);
         break;
      }
      zhuboE.set(`${viewerl}`, 2);
      break;
   }
   for (let t = 0; t < 2; t++) {
      episodesj &= 3;
   }
      settingsQ.set(`${hearte}`, ewardedk.size);
       let rankw = 2.0;
       let clearR = 0.0;
       let xnewsU = String.fromCharCode(120,95,49,48,48,95,118,97,97,99,97,108,99,117,108,97,116,105,111,110,0);
       let listu: Array<any> = [974, 907, 663];
         xnewsU += `${parseInt(`${clearR}`) << (Math.min(4, Math.abs(1)))}`;
      if (3 < (xnewsU.length ^ listu.length) && 1 < (3 ^ listu.length)) {
          let routerm = 0.0;
          let episodes2: Map<any, any> = new Map([[String.fromCharCode(118,95,53,57,95,97,108,108,112,97,115,115,0),323], [String.fromCharCode(99,111,110,115,111,108,101,95,111,95,51,0),131]]);
         listu = [parseInt(`${clearR}`) & parseInt(`${rankw}`)];
         routerm -= episodes2.size;
         episodes2.set(`${routerm}`, episodes2.size % (Math.max(9, parseInt(`${routerm}`))));
      }
      let downr = 5920335 <= xnewsU.length;
      do {
         xnewsU = `${3 ^ xnewsU.length}`;
         if (downr) {
            break;
         }
      } while (downr && ((xnewsU.length & 3) <= 4 && 1.34 <= (clearR * 1.12)));
         clearR += parseFloat(`${1}`);
          let faviconl = String.fromCharCode(101,110,99,111,100,101,109,118,95,117,95,53,54,0);
         xnewsU += `${parseInt(`${clearR}`)}`;
         faviconl = "3";
       let submitV = false;
         clearR -= parseFloat(`${parseInt(`${clearR}`) / (Math.max(listu.length, 1))}`);
      let change9 = clearR >= 4943649.0;
      do {
         clearR -= parseFloat(`${1}`);
         if (change9) {
            break;
         }
      } while (change9 && (1.72 == (clearR - 5.12)));
      brightness8 *= parseInt(`${groupm}`) / 2;
   while ((preview4.length ^ 4) > 2 || 3 > (4 ^ preview4.length)) {
      preview4 += `${parseInt(`${hearte}`) / (Math.max(settingsQ.size, 1))}`;
      break;
   }
   for (let q = 0; q < 3; q++) {
      textz += `${episodesj}`;
   }
       let splashD = 5.0;
       let catagoryM: Array<any> = [441, 662, 480];
       let soundM: Array<any> = [8, 15, 595];
         splashD /= Math.max(4, parseFloat(`${1}`));
          let stationsq = String.fromCharCode(114,95,51,54,95,97,117,116,111,100,101,116,101,99,116,0);
          let statsL = String.fromCharCode(120,95,54,95,115,116,114,116,111,105,110,116,0);
         splashD *= parseFloat(`${parseInt(`${splashD}`) ^ statsL.length}`);
         stationsq = "3";
         statsL = `${3 - stationsq.length}`;
      let hongkongx = soundM.length >= 9901211;
      do {
          let modalW = 2.0;
          let loadingE = false;
          let tickedv = String.fromCharCode(119,95,53,55,95,101,120,112,97,110,100,101,114,0);
          let overlay_ = String.fromCharCode(97,95,57,52,95,112,101,114,105,111,100,105,99,0);
          let switch_l9P = 1;
         soundM = [switch_l9P];
         modalW -= ((loadingE ? 5 : 3) & parseInt(`${modalW}`));
         loadingE = tickedv.length >= 3;
         tickedv += `${parseInt(`${modalW}`) & 3}`;
         overlay_ += `${((loadingE ? 4 : 3) + 3)}`;
         switch_l9P /= Math.max(5, ((loadingE ? 4 : 2)));
         if (hongkongx) {
            break;
         }
      } while (((5 & soundM.length) < 2 || (5 & catagoryM.length) < 3) && hongkongx);
      for (let x = 0; x < 3; x++) {
          let yingu = String.fromCharCode(108,95,51,54,95,100,97,116,97,116,121,112,101,115,0);
          let halfj: Array<any> = [786, 253];
          let leagueA = 1;
         soundM.push(yingu.length % (Math.max(1, 9)));
         yingu += `${leagueA | 1}`;
         halfj = [2 << (Math.min(4, halfj.length))];
         leagueA <<= Math.min(4, Math.abs(halfj.length << (Math.min(Math.abs(1), 2))));
      }
          let next2 = true;
          let contextI = 4.0;
         splashD -= (parseFloat(`${3 >> (Math.min(3, Math.abs((next2 ? 4 : 5))))}`));
         next2 = contextI < 3.1;
         contextI *= parseInt(`${contextI}`);
      while ((splashD * parseFloat(`${soundM.length}`)) > 2.58) {
          let flyerv = 3;
          let dplusm = 4.0;
         soundM.push(3 % (Math.max(9, parseInt(`${dplusm}`))));
         flyerv += 2 - flyerv;
         dplusm -= parseFloat(`${3}`);
         break;
      }
      while (1.47 >= splashD) {
         catagoryM.push(parseInt(`${splashD}`) << (Math.min(catagoryM.length, 5)));
         break;
      }
         catagoryM = [catagoryM.length];
      for (let z = 0; z < 3; z++) {
         catagoryM.push(soundM.length + 2);
      }
      controlsm += `${2 * ewardedk.size}`;
      ewardedk.set(`${arrowI.size}`, 2);

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
      ({ item, index }: { item: ttAnimationSource; index: number }) => {
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
                      setPause(!current);
                    }}
                    isShowVideo={current >= prevPosition && current < index + 2}
                    currentDuration={videoCurrentDurations[index]}
                    isActive={isActive}
                    index={index}
                    onPressAds={onPressAds}
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
       let selectedM: Array<any> = [209, 186, 588];
    let gradles = String.fromCharCode(101,110,99,111,100,101,95,105,95,56,49,0);
    let form7 = String.fromCharCode(107,95,52,54,95,114,101,99,104,101,99,107,0);
    let loadingc = String.fromCharCode(101,110,97,98,108,101,95,54,95,57,56,0);
    let entryg = String.fromCharCode(101,114,112,105,99,95,120,95,53,53,0);
    let huaweiv = 3;
    let closeD = String.fromCharCode(102,111,108,100,101,114,115,95,106,95,53,55,0);
    let whatsapp9: Map<any, any> = new Map([[String.fromCharCode(111,95,57,48,95,98,105,116,105,122,101,110,0),false ], [String.fromCharCode(110,95,53,53,95,115,104,111,119,115,0),false ]]);
    let forwardR = 3;
    let renew9 = String.fromCharCode(109,95,57,51,95,118,105,100,101,111,100,115,112,0);
   while (form7.includes(`${huaweiv}`)) {
      form7 = `${1 | entryg.length}`;
      break;
   }
   while (huaweiv == 1) {
       let clock7: Map<any, any> = new Map([[String.fromCharCode(109,97,120,95,99,95,54,55,0),851], [String.fromCharCode(109,117,108,116,105,99,97,115,116,101,100,95,102,95,52,56,0),968]]);
       let fastforwardx: Array<any> = [196, 198];
       let upgradeN = 0.0;
         fastforwardx = [2 * clock7.size];
      if (4 > (1 & clock7.size)) {
          let main_cz = false;
          let productQ = String.fromCharCode(97,110,116,105,97,108,105,97,115,95,103,95,50,54,0);
          let infoy = String.fromCharCode(106,95,54,52,95,117,110,100,101,102,105,110,101,100,0);
         clock7 = new Map([[`${clock7.size}`, clock7.size]]);
         main_cz = productQ.length >= 25 && infoy.length >= 25;
         productQ = `${productQ.length}`;
         infoy += "2";
      }
         upgradeN -= parseFloat(`${clock7.size - 2}`);
         clock7.set(`${upgradeN}`, clock7.size / 3);
         clock7.set(`${fastforwardx.length}`, 1);
         clock7.set(`${upgradeN}`, 3);
      for (let e = 0; e < 1; e++) {
         fastforwardx.push(fastforwardx.length);
      }
      let projectZ = fastforwardx.length >= 5104059;
      do {
         fastforwardx.push(3);
         if (projectZ) {
            break;
         }
      } while ((1 < (clock7.size << (Math.min(4, fastforwardx.length)))) && projectZ);
          let historye = String.fromCharCode(119,95,56,57,95,100,101,103,114,97,100,101,100,0);
          let live_ = String.fromCharCode(112,101,114,99,101,110,116,97,103,101,95,55,95,57,54,0);
          let crown3 = String.fromCharCode(121,95,54,50,95,101,120,104,97,117,115,116,0);
         upgradeN /= Math.max(parseFloat(`${1 + fastforwardx.length}`), 3);
         historye += `${historye.length}`;
         live_ += `${2 * live_.length}`;
         crown3 += `${(String.fromCharCode(115,0) == live_ ? historye.length : live_.length)}`;
      huaweiv += whatsapp9.size & entryg.length;
      break;
   }
   if ((2 & huaweiv) < 1) {
       let mbbidW = String.fromCharCode(102,95,54,49,95,110,101,105,103,104,98,111,117,114,115,0);
       let statisticsL = String.fromCharCode(114,101,115,112,111,110,115,101,115,95,105,95,49,55,0);
       let annerm = true;
       let resultP = String.fromCharCode(116,111,103,103,108,101,95,116,95,50,57,0);
         annerm = statisticsL.endsWith(`${annerm}`);
         mbbidW = "3";
      while (2 <= statisticsL.length) {
         statisticsL = `${3 >> (Math.min(1, mbbidW.length))}`;
         break;
      }
          let router5 = String.fromCharCode(109,101,109,122,101,114,111,95,52,95,57,55,0);
         statisticsL += `${resultP.length + 1}`;
         router5 += `${1 & router5.length}`;
      for (let w = 0; w < 1; w++) {
          let volumeK = 5.0;
          let g_titleq = String.fromCharCode(100,105,102,102,105,99,117,108,116,121,95,106,95,53,55,0);
         mbbidW += "1";
         volumeK /= Math.max(2, parseFloat(`${g_titleq.length}`));
         g_titleq = "2";
      }
       let plusI: Array<any> = [158, 216, 941];
       let searchbarW: Array<any> = [181, 593];
          let fastV: Map<any, any> = new Map([[String.fromCharCode(101,95,57,50,95,99,101,110,116,114,101,0),696], [String.fromCharCode(105,95,53,48,95,112,114,105,111,114,105,116,105,101,115,0),923]]);
         mbbidW = `${searchbarW.length - 3}`;
         fastV.set(`${fastV.size}`, 2);
         plusI.push(statisticsL.length | 2);
      while (5 <= (statisticsL.length + plusI.length) || (plusI.length + statisticsL.length) <= 5) {
          let fillI = String.fromCharCode(97,95,52,56,95,115,97,100,98,0);
         statisticsL = `${resultP.length}`;
         fillI += `${fillI.length | 2}`;
         break;
      }
      let fillL = 6556939 >= searchbarW.length;
      do {
         searchbarW = [2];
         if (fillL) {
            break;
         }
      } while ((4 > searchbarW.length && (searchbarW.length >> (Math.min(Math.abs(4), 2))) > 5) && fillL);
      if (3 < resultP.length && annerm) {
          let overlayb: Map<any, any> = new Map([[String.fromCharCode(117,95,48,95,112,111,97,0),607], [String.fromCharCode(114,97,116,105,111,110,97,108,95,117,95,52,50,0),922], [String.fromCharCode(114,101,115,111,108,118,101,100,95,114,95,49,54,0),208]]);
          let whistlej = String.fromCharCode(97,95,53,55,95,112,97,114,97,98,111,108,108,105,99,0);
          let controlG: Map<any, any> = new Map([[String.fromCharCode(109,117,108,116,105,112,108,121,95,102,95,57,52,0),393], [String.fromCharCode(114,101,97,100,113,95,109,95,50,57,0),285], [String.fromCharCode(110,95,57,95,108,111,111,112,102,105,108,116,101,114,0),776]]);
         annerm = mbbidW == String.fromCharCode(49,0);
         overlayb.set(`${whistlej}`, 1 % (Math.max(9, whistlej.length)));
         controlG.set(`${whistlej}`, whistlej.length);
      }
      while (statisticsL.length <= searchbarW.length) {
          let lightX = String.fromCharCode(101,105,112,118,95,50,95,56,53,0);
         statisticsL = `${resultP.length ^ 3}`;
         lightX = `${lightX.length >> (Math.min(1, lightX.length))}`;
         break;
      }
      form7 += `${gradles.length}`;
   }
   if (2 == (huaweiv ^ form7.length) && (huaweiv ^ form7.length) == 2) {
      form7 += `${2 ^ closeD.length}`;
   }
       let whatsapp2 = true;
       let manifestB = String.fromCharCode(111,112,101,110,103,108,95,98,95,55,54,0);
       let vignetteF = String.fromCharCode(112,95,54,50,95,115,101,99,117,114,105,116,121,0);
       let stylex = 5.0;
       let materialh = 0.0;
      for (let k = 0; k < 1; k++) {
         materialh -= 3 * parseInt(`${stylex}`);
      }
      huaweiv %= Math.max(((whatsapp2 ? 1 : 3) << (Math.min(Math.abs(2), 2))), 1);
   let largeJ = 5046357 >= gradles.length;
   do {
      gradles += `${(String.fromCharCode(77,0) == closeD ? whatsapp9.size : closeD.length)}`;
      if (largeJ) {
         break;
      }
   } while (largeJ && (gradles.startsWith(`${closeD.length}`)));
       let privilegex = String.fromCharCode(99,117,114,115,111,114,95,119,95,52,57,0);
       let package_s3 = 5.0;
         privilegex = `${parseInt(`${package_s3}`)}`;
      while (privilegex.length < parseInt(`${package_s3}`)) {
         package_s3 /= Math.max((String.fromCharCode(102,0) == privilegex ? privilegex.length : parseInt(`${package_s3}`)), 2);
         break;
      }
         privilegex = "2";
      for (let i = 0; i < 1; i++) {
          let casting5: Map<any, any> = new Map([[String.fromCharCode(118,98,112,114,105,110,116,102,95,122,95,54,52,0),String.fromCharCode(98,97,99,107,115,112,97,99,101,95,104,95,54,49,0)], [String.fromCharCode(105,112,112,108,101,95,104,95,53,56,0),String.fromCharCode(100,105,118,105,115,111,114,95,50,95,54,48,0)], [String.fromCharCode(118,95,57,49,95,117,110,115,101,108,101,99,116,0),String.fromCharCode(102,95,51,95,112,101,114,109,97,110,101,110,116,0)]]);
          let chinasameb = 5.0;
         privilegex = `${privilegex.length}`;
         casting5.set(`${chinasameb}`, 3);
         chinasameb += casting5.size ^ parseInt(`${chinasameb}`);
      }
       let customs: Array<any> = [String.fromCharCode(115,107,105,110,95,120,95,57,56,0), String.fromCharCode(97,114,103,98,95,110,95,52,56,0), String.fromCharCode(99,97,114,114,105,97,103,101,95,121,95,54,55,0)];
         package_s3 *= 3;
      forwardR -= loadingc.length;

      if (!isVip && !adultMode) {
        
      } else if (hasNextPage && !isFetchingNextPage && !isFetching) {

   if (closeD.endsWith(entryg)) {
      entryg += `${huaweiv << (Math.min(closeD.length, 3))}`;
   }
   while (!gradles.endsWith(`${selectedM.length}`)) {
      gradles += `${(form7 == String.fromCharCode(54,0) ? form7.length : closeD.length)}`;
      break;
   }
   for (let x = 0; x < 2; x++) {
      form7 += `${forwardR << (Math.min(Math.abs(3), 2))}`;
   }
      whatsapp9.set(`${selectedM.length}`, 2);
   for (let u = 0; u < 2; u++) {
      form7 += "3";
   }
   if (whatsapp9.size < 3) {
      closeD += `${(entryg == String.fromCharCode(69,0) ? huaweiv : entryg.length)}`;
   }
      gradles = `${huaweiv / (Math.max(1, 7))}`;
        fetchNextPage();
      }
    }, [adultMode, hasNextPage, isFetchingNextPage, isFetching]);

    const handleOnScrollBeginDrag = useCallback(
      (e: NativeSyntheticEvent<NativeScrollEvent>) => {
        if (!isScrolling) setIsScrolling(true);
      },
      [isScrolling],
    );

    const handleOnMomentumScrollEnd = useCallback(() => {
       let utilsZ = 5;
    let otherB = String.fromCharCode(102,95,53,48,95,115,112,97,109,0);
    let frame_mss = 4;
    let gmailE = String.fromCharCode(112,101,114,109,95,103,95,51,53,0);
    let streamingf = 5.0;
    let productz = 3.0;
    let debugd = 5.0;
    let shared6 = 0.0;
    let submit5 = 5.0;
    let areaG = 4;
    let ajaxc = String.fromCharCode(100,95,52,53,0);
    let materialB = String.fromCharCode(99,95,55,48,95,114,116,99,112,0);
    let downloaderP = 3.0;
   if (otherB.length == 5) {
      productz /= Math.max(2, parseInt(`${debugd}`) * parseInt(`${shared6}`));
   }
   for (let q = 0; q < 3; q++) {
      gmailE = "3";
   }
   while (5 >= (gmailE.length + parseInt(`${submit5}`))) {
      submit5 += parseFloat(`${1 ^ parseInt(`${debugd}`)}`);
      break;
   }
   while (4 == (3 - gmailE.length)) {
       let singleM = 4.0;
       let time_v5O = true;
       let j_county = true;
       let light9 = 4.0;
       let indicatorO = String.fromCharCode(97,99,102,105,108,116,101,114,95,53,95,50,56,0);
      if (light9 == 4.12) {
         singleM /= Math.max(3 - parseInt(`${singleM}`), 5);
      }
         j_county = 62.21 > light9;
      while (singleM <= indicatorO.length) {
         indicatorO = `${((time_v5O ? 2 : 1) - parseInt(`${singleM}`))}`;
         break;
      }
       let spinnerF = true;
      let ballk = light9 >= 6851148.0;
      do {
         light9 += parseFloat(`${parseInt(`${light9}`) | 3}`);
         if (ballk) {
            break;
         }
      } while ((3.61 <= (parseFloat(`${indicatorO.length}`) / (Math.max(9, light9)))) && ballk);
       let data9 = true;
       let mathi = true;
          let downloadinga = 1.0;
          let tcopy_88y = 5.0;
          let inactiveV: Map<any, any> = new Map([[String.fromCharCode(111,95,53,95,101,115,116,105,109,97,116,101,0),String.fromCharCode(100,98,104,97,110,100,108,101,95,115,95,50,49,0)], [String.fromCharCode(102,99,111,100,101,95,122,95,55,49,0),String.fromCharCode(98,95,51,53,95,115,101,114,105,97,108,105,122,101,114,0)], [String.fromCharCode(114,95,56,50,95,109,101,115,115,115,97,103,101,0),String.fromCharCode(116,97,98,108,101,95,122,95,56,0)]]);
         spinnerF = null == inactiveV.get(`${tcopy_88y}`);
         downloadinga *= parseFloat(`${parseInt(`${downloadinga}`)}`);
         tcopy_88y -= parseInt(`${downloadinga}`);
          let black0: Map<any, any> = new Map([[String.fromCharCode(97,95,50,52,95,112,97,112,101,114,0),125], [String.fromCharCode(115,95,56,54,95,112,97,121,108,111,97,100,115,0),271]]);
          let logoM = 2.0;
          let yellowe = 3.0;
         mathi = j_county;
         black0 = new Map([[`${black0.size}`, parseInt(`${yellowe}`) << (Math.min(Math.abs(1), 4))]]);
         logoM /= Math.max(parseFloat(`${black0.size % (Math.max(6, parseInt(`${logoM}`)))}`), 5);
         yellowe *= 3 << (Math.min(5, Math.abs(parseInt(`${yellowe}`))));
         mathi = j_county;
      for (let i = 0; i < 1; i++) {
         j_county = mathi;
      }
       let loading8: Map<any, any> = new Map([[String.fromCharCode(120,95,52,50,95,115,101,116,119,97,116,101,114,109,97,114,107,0),634], [String.fromCharCode(112,117,116,98,105,116,98,117,102,102,101,114,95,111,95,52,53,0),748]]);
          let plashT = String.fromCharCode(108,95,52,56,95,114,101,116,117,114,110,105,110,103,0);
          let selectS: Array<any> = [338, 728];
         loading8 = new Map([[indicatorO, indicatorO.length]]);
         plashT = "3";
         selectS.push(selectS.length + plashT.length);
      for (let i = 0; i < 2; i++) {
         spinnerF = !time_v5O || !mathi;
      }
       let notificationE: Array<any> = [819, 616];
       let country9: Array<any> = [221, 862, 124];
      for (let z = 0; z < 1; z++) {
          let backgrounde = String.fromCharCode(109,117,116,101,100,95,118,95,52,57,0);
          let spinnerE = String.fromCharCode(122,95,56,55,95,102,105,116,122,0);
          let robotoE = 4.0;
          let mbnativeadvancedt: Array<any> = [941, 131, 101];
          let sheett = String.fromCharCode(97,115,115,101,109,98,108,101,100,95,115,95,57,52,0);
         singleM -= 3 | backgrounde.length;
         backgrounde = `${spinnerE.length * 2}`;
         spinnerE += `${sheett.length + 3}`;
         robotoE /= Math.max(parseFloat(`${mbnativeadvancedt.length % (Math.max(1, 9))}`), 4);
         mbnativeadvancedt.push(2 / (Math.max(3, parseInt(`${robotoE}`))));
         sheett += "2";
      }
      debugd += parseInt(`${productz}`) << (Math.min(2, Math.abs(parseInt(`${shared6}`))));
      break;
   }
   while (streamingf >= productz) {
      streamingf *= parseInt(`${streamingf}`) | parseInt(`${shared6}`);
      break;
   }
   for (let c = 0; c < 2; c++) {
      submit5 += parseFloat(`${1}`);
   }
   let targetn = 5328266 >= gmailE.length;
   do {
       let headerG: Map<any, any> = new Map([[String.fromCharCode(107,95,50,53,95,110,97,108,117,115,0),34], [String.fromCharCode(120,95,54,56,95,112,104,105,0),735]]);
       let modelsb = String.fromCharCode(106,95,52,49,95,103,108,111,115,115,0);
       let greenP: Array<any> = [461, 695, 313];
       let collectionl: Array<any> = [123, 907, 432];
       let sportsg = String.fromCharCode(101,118,114,99,95,98,95,51,53,0);
      while ((sportsg.length << (Math.min(Math.abs(1), 5))) > 2 || (greenP.length << (Math.min(Math.abs(1), 1))) > 1) {
         sportsg = `${3 << (Math.min(1, sportsg.length))}`;
         break;
      }
      for (let s = 0; s < 3; s++) {
         greenP.push(3);
      }
         greenP.push(headerG.size | 2);
          let kuaishou_: Array<any> = [404, 540];
          let productF = 5.0;
          let colorsT = 3.0;
         headerG = new Map([[`${headerG.size}`, kuaishou_.length]]);
         kuaishou_ = [parseInt(`${colorsT}`)];
         productF *= parseFloat(`${1 - parseInt(`${colorsT}`)}`);
      let package_vb = headerG.size >= 9342176;
      do {
          let volumeY = String.fromCharCode(111,119,110,115,95,121,95,49,0);
         headerG = new Map([[`${greenP.length}`, sportsg.length | greenP.length]]);
         volumeY = `${volumeY.length}`;
         if (package_vb) {
            break;
         }
      } while ((modelsb.endsWith(`${headerG.size}`)) && package_vb);
       let castI = String.fromCharCode(115,108,105,99,101,116,121,112,101,95,54,95,50,57,0);
       let heartv = String.fromCharCode(115,110,97,112,112,101,100,95,105,95,50,53,0);
         greenP.push(greenP.length >> (Math.min(modelsb.length, 2)));
      gmailE += `${parseInt(`${debugd}`)}`;
      if (targetn) {
         break;
      }
   } while (((areaG % (Math.max(8, gmailE.length))) > 5) && targetn);

      setIsScrolling(false);

   while ((2.5 * debugd) > 2.45 || 3.20 > (2.5 * debugd)) {
      debugd *= otherB.length;
      break;
   }
   while (ajaxc.length > areaG) {
      areaG >>= Math.min(Math.abs(parseInt(`${submit5}`) * areaG), 2);
      break;
   }
   for (let q = 0; q < 3; q++) {
      shared6 -= parseFloat(`${utilsZ}`);
   }
      areaG <<= Math.min(Math.abs((String.fromCharCode(82,0) == ajaxc ? ajaxc.length : frame_mss)), 4);
      gmailE += "1";
   let navigationZ = submit5 >= 9788543.0;
   do {
      submit5 *= parseFloat(`${ajaxc.length >> (Math.min(3, Math.abs(parseInt(`${shared6}`))))}`);
      if (navigationZ) {
         break;
      }
   } while (navigationZ && (1 >= (parseInt(`${submit5}`) + frame_mss) || 4.16 >= (submit5 + 3.33)));
   if (2.37 == (productz / (Math.max(7, utilsZ)))) {
      utilsZ <<= Math.min(Math.abs(areaG), 4);
   }

      if (isFocus
        && Platform.OS !== 'ios'
        && ttFast.isGuest(userState.user)
        && !ttFast.isVip(userState.user)
        && swipeCount.current >= MINI_SHOW_LOGIN_NUMBER
        && current >= MINI_SHOW_LOGIN_NUMBER
      ) {

   let skipG = 5072037.0 >= debugd;
   do {
      debugd += areaG;
      if (skipG) {
         break;
      }
   } while (((areaG | 3) < 5 && (3 - areaG) < 4) && skipG);
      otherB += `${gmailE.length >> (Math.min(3, Math.abs(frame_mss)))}`;
   while ((areaG >> (Math.min(gmailE.length, 3))) < 1 || (areaG >> (Math.min(Math.abs(1), 2))) < 4) {
       let gradle_ = true;
      for (let n = 0; n < 1; n++) {
          let checkboxx: Map<any, any> = new Map([[String.fromCharCode(104,119,102,114,97,109,101,95,105,95,50,52,0),false ], [String.fromCharCode(103,95,49,48,48,95,98,105,116,114,97,116,101,0),false ]]);
          let aboutK = String.fromCharCode(119,105,115,101,95,101,95,51,50,0);
          let launcher1 = String.fromCharCode(110,95,55,48,95,100,114,97,102,116,0);
          let list5: Map<any, any> = new Map([[String.fromCharCode(104,101,97,100,112,104,111,110,101,95,105,95,53,56,0),90], [String.fromCharCode(98,117,114,110,95,56,95,53,0),536]]);
         gradle_ = launcher1.startsWith(`${gradle_}`);
         checkboxx = new Map([[`${checkboxx.size}`, checkboxx.size % (Math.max(aboutK.length, 9))]]);
         aboutK = `${list5.size}`;
         launcher1 += `${aboutK.length * 2}`;
         list5.set(`${checkboxx.size}`, list5.size - checkboxx.size);
      }
          let vietnam9: Map<any, any> = new Map([[String.fromCharCode(113,95,50,57,95,112,114,111,118,105,100,105,110,103,0),238], [String.fromCharCode(100,101,114,105,118,97,116,105,118,101,95,122,95,51,57,0),471], [String.fromCharCode(115,115,108,95,57,95,49,49,0),726]]);
         gradle_ = vietnam9.size <= 78 && gradle_;
      for (let r = 0; r < 1; r++) {
         gradle_ = !gradle_ || !gradle_;
      }
      gmailE = `${(parseInt(`${submit5}`) - (gradle_ ? 4 : 3))}`;
      break;
   }
   for (let b = 0; b < 2; b++) {
      utilsZ *= parseInt(`${productz}`);
   }
      utilsZ += parseInt(`${submit5}`);
       let indicatorG: Map<any, any> = new Map([[String.fromCharCode(115,117,98,105,116,101,109,115,95,57,95,52,56,0),238], [String.fromCharCode(116,101,115,101,100,103,101,95,115,95,49,55,0),308], [String.fromCharCode(115,108,105,99,101,116,121,112,101,95,108,95,49,49,0),744]]);
       let moreT: Array<any> = [697, 893, 838];
      if ((indicatorG.size << (Math.min(5, moreT.length))) < 2 || (moreT.length << (Math.min(Math.abs(2), 4))) < 1) {
         indicatorG = new Map([[`${indicatorG.size}`, 3 * indicatorG.size]]);
      }
      let macauE = moreT.length >= 7303487;
      do {
         moreT = [3 - indicatorG.size];
         if (macauE) {
            break;
         }
      } while ((2 == indicatorG.size) && macauE);
      if (Array.from(indicatorG.keys()).includes(`${moreT.length}`)) {
          let macauZ = String.fromCharCode(98,102,108,121,95,112,95,55,52,0);
          let hejiP: Map<any, any> = new Map([[String.fromCharCode(116,101,115,116,99,111,110,102,105,103,95,116,95,55,53,0),false ], [String.fromCharCode(99,95,53,57,95,114,101,115,101,116,0),true ], [String.fromCharCode(108,105,98,115,109,98,99,95,119,95,55,51,0),false ]]);
         indicatorG.set(macauZ, moreT.length);
         macauZ += "3";
         hejiP.set(`${hejiP.size}`, hejiP.size - 1);
      }
          let areaC = String.fromCharCode(117,110,98,108,111,99,107,105,110,103,95,51,95,51,53,0);
          let sigmobK = 2;
          let alertk: Map<any, any> = new Map([[String.fromCharCode(108,111,103,109,111,110,111,95,53,95,56,52,0),String.fromCharCode(109,111,100,97,108,95,100,95,56,53,0)], [String.fromCharCode(119,95,55,55,95,99,105,114,99,108,101,0),String.fromCharCode(106,95,55,51,95,115,115,101,100,105,102,102,0)]]);
         indicatorG = new Map([[`${indicatorG.size}`, moreT.length << (Math.min(4, Math.abs(indicatorG.size)))]]);
         areaC += `${3 << (Math.min(4, areaC.length))}`;
         sigmobK %= Math.max((String.fromCharCode(100,0) == areaC ? alertk.size : areaC.length), 4);
         alertk.set(`${sigmobK}`, 3 / (Math.max(2, sigmobK)));
          let inactivej = String.fromCharCode(115,121,110,116,104,102,105,108,116,95,120,95,51,49,0);
          let h_player2 = String.fromCharCode(112,111,119,101,114,102,117,108,95,108,95,55,56,0);
         moreT.push(indicatorG.size / (Math.max(2, h_player2.length)));
         inactivej += `${(String.fromCharCode(122,0) == inactivej ? inactivej.length : inactivej.length)}`;
         h_player2 = `${inactivej.length & inactivej.length}`;
         moreT = [3 << (Math.min(4, Math.abs(indicatorG.size)))];
      productz -= 1 & parseInt(`${submit5}`);
   let dialogG = 6417261.0 <= debugd;
   do {
       let filleds = 2.0;
       let rightB = String.fromCharCode(120,95,56,52,95,115,112,100,105,102,0);
      let google2 = filleds <= 9173314.0;
      do {
         filleds /= Math.max(parseFloat(`${1 >> (Math.min(3, Math.abs(parseInt(`${filleds}`))))}`), 1);
         if (google2) {
            break;
         }
      } while (google2 && (2 < (rightB.length - parseInt(`${filleds}`))));
      let upgradef = filleds <= 5674580.0;
      do {
          let recommendationl = String.fromCharCode(112,95,50,95,115,97,109,112,108,101,114,0);
          let kuaishou1 = 4.0;
          let gradle0 = String.fromCharCode(100,117,97,108,105,110,112,117,116,95,98,95,51,56,0);
          let kickz = String.fromCharCode(109,97,116,114,111,115,107,97,95,118,95,54,54,0);
         filleds += parseFloat(`${3 << (Math.min(1, rightB.length))}`);
         recommendationl = `${1 | kickz.length}`;
         kuaishou1 -= parseFloat(`${parseInt(`${kuaishou1}`)}`);
         gradle0 = "2";
         kickz = "3";
         if (upgradef) {
            break;
         }
      } while (upgradef && (rightB.includes(`${filleds}`)));
          let analytict = String.fromCharCode(113,95,55,53,95,102,97,105,108,117,114,101,0);
         filleds += (parseFloat(`${String.fromCharCode(57,0) == rightB ? parseInt(`${filleds}`) : rightB.length}`));
         analytict += `${analytict.length % 2}`;
          let optionsZ = false;
         filleds -= parseFloat(`${parseInt(`${filleds}`) >> (Math.min(5, Math.abs(2)))}`);
         optionsZ = optionsZ && optionsZ;
      for (let d = 0; d < 3; d++) {
         rightB = `${(rightB == String.fromCharCode(56,0) ? parseInt(`${filleds}`) : rightB.length)}`;
      }
      let notification8 = 5253134 >= rightB.length;
      do {
         rightB += `${rightB.length}`;
         if (notification8) {
            break;
         }
      } while (notification8 && ((rightB.length * 1) < 1 && 4.43 < (1.87 * filleds)));
      debugd /= Math.max(materialB.length, 1);
      if (dialogG) {
         break;
      }
   } while (((debugd - 3.75) > 5.73) && dialogG);
        dispatch(showLoginAction());
      }
    }, [userState.user, current, isFocus]);

    useEffect(() => {
      if (ttFast.isLogin(userState.user) || ttFast.isVip(userState.user)) return;

      if (swipeCount.current < MINI_SHOW_LOGIN_NUMBER && !adultMode) {
        swipeCount.current++;
      } else {
        
        
        
      }
    }, [current, adultMode, userState.user]);

    return (
      <>
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
                isVip ?
                  <View style={{ ...styles.loading, marginBottom: spacing.xl }}>
                    {hasNextPage && (
                      <FastImage
                        style={{ height: 80, width: 80 }}
                        source={loadingSpinnerGif}
                        resizeMode={'contain'}
                      />
                    )}
                  </View>
                  :
                  <></>
              }
              onScroll={handleOnScroll}
              onScrollBeginDrag={handleOnScrollBeginDrag}
              onMomentumScrollEnd={handleOnMomentumScrollEnd}
              scrollsToTop={false}
            />
          )}
        </View>
        { }

        <AdultVipPrivilegeOverlay
          showCondition={showAdultVIPOverlay}
          addPaddingTop={true}
          showDarkBackdrop={true}
          onClose={() => {
            
            setShowAdultVIPOverlay(false);
          }}
        />
      </>
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
