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
import ShortVod from './wawa_watch';
import { wawaBingPing } from '@type/wawa_gradlew';
import FastImage from '../../common/wawa_iconarrowrightblack';

import { useAppDispatch, useAppSelector, useSelector } from '@hooks/wawa_root';
import wawa_dacccfaabfbcbadeebddcabacdffdbc_video from '../../../../Umeng/wawa_dacccfaabfbcbadeebddcabacdffdbc_video';
import { showAdultModeVip, showLoginAction } from '@redux/actions/wawa_related';
import { screenModel } from '@type/wawa_rules';
import { ADULT_MODE_PREVIEW_DURATION, MINI_SHOW_LOGIN_NUMBER } from '@utility/wawa_iconpointscore';
import ShortAds from './wawa_shootyesgoal';
import { wawaPhoneControls } from '@redux/reducers/wawa_umeng';
import { wawaLibglog } from '@models/wawa_refreshborderless_found';
import { AdultVipPrivilegeOverlay } from './../../modal/wawa_whitetick';
import BecomeVipOverlay from "./../../modal/wawa_arrowrightwithtail";

interface wawaAwayShow {
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

type wawaLibavutil = {
  setPause: (pause: boolean) => void;
};

const homeLoadingGif = require('@static/images/mbridgeFilledLibfolly.gif');
const loadingSpinnerGif = require('@static/images/iconnewsshareDist.gif');

export default forwardRef<wawaLibavutil, wawaAwayShow>(
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
    }: wawaAwayShow,
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
    const userState = useSelector<wawaPhoneControls>('userReducer');
    const swipeCount = useRef(0);
    const {
      adultModeDisclaimerShow,
      adultModeVipShow,
      adultVideoWatchTime,
      
      watchAnytimeAdultMode: adultMode, 
    } = screenState;
    const isVip = wawaLibglog.isVip(userState.user);
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
      if (current > 0 && current % 4 == 0 && !wawaLibglog.fakeIsVip(userState.user) && adultMode) {
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

        wawa_dacccfaabfbcbadeebddcabacdffdbc_video.watchAnytimeVideoViewTimesAnalytics({
          userId: userState.user?.userId ?? '',
          vod_id: collectionPartialVideos[0].mini_video_id,
          isXmode: adultMode,
        });
      }
      
    }, [collectionPartialVideos]);

    useEffect(() => {
      if (current > curAnalyticsIndex && current < collectionPartialVideos.length) {
        setCurAnalyticsIndex(current);

        wawa_dacccfaabfbcbadeebddcabacdffdbc_video.watchAnytimeVideoViewTimesAnalytics({
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
       let telegramH = 5;
    let owngoalq = false;
    let leftf = 5.0;
    let libglog0: Array<any> = [String.fromCharCode(115,116,97,116,101,112,0), String.fromCharCode(108,97,121,101,114,99,111,110,116,101,120,116,0), String.fromCharCode(112,108,97,99,101,0)];
    let ynewsQ: Map<any, any> = new Map([[String.fromCharCode(103,108,111,98,97,108,105,110,102,111,0),341], [String.fromCharCode(99,108,97,115,115,110,97,109,101,0),5]]);
    let castj: Map<any, any> = new Map([[String.fromCharCode(113,117,97,110,116,105,122,97,116,105,111,110,0),String.fromCharCode(110,111,99,97,115,101,0)], [String.fromCharCode(101,110,100,101,100,0),String.fromCharCode(112,114,111,100,117,99,101,114,0)], [String.fromCharCode(104,105,103,104,98,105,116,115,0),String.fromCharCode(116,111,107,101,110,105,122,101,114,0)]]);
    let championB = String.fromCharCode(110,97,114,114,111,119,0);
    let typesC = 3;
    let unimplementedview9 = false;
    let textinputY = 2.0;
    let subbasketballplayere = 0;
    let cornerkickV = false;
    let matchesD = 0.0;
    let matches1 = 2.0;
   let result5 = 5054060 >= castj.size;
   do {
      castj.set(`${typesC}`, 2);
      if (result5) {
         break;
      }
   } while (result5 && (!Array.from(castj.keys()).includes(`${typesC}`)));
      castj.set(`${unimplementedview9}`, 3);
      subbasketballplayere += (championB.length * (owngoalq ? 2 : 3));
      cornerkickV = castj.size == 43 || !owngoalq;
   while (2 < (parseInt(`${textinputY}`) / (Math.max(7, ynewsQ.size))) || 2.38 < (textinputY / (Math.max(ynewsQ.size, 8)))) {
      textinputY += (parseInt(`${leftf}`) | (owngoalq ? 1 : 2));
      break;
   }
   if ((3.22 * leftf) >= 5.74) {
      libglog0.push(subbasketballplayere);
   }
       let minimizeq: Array<any> = [String.fromCharCode(97,118,105,97,108,97,98,108,101,0), String.fromCharCode(115,113,108,105,116,101,0), String.fromCharCode(109,111,100,101,108,115,0)];
       let analyticsy = false;
         minimizeq = [minimizeq.length];
         analyticsy = analyticsy || minimizeq.length == 2;
         minimizeq = [(1 ^ (analyticsy ? 2 : 5))];
      for (let s = 0; s < 1; s++) {
         minimizeq = [(1 & (analyticsy ? 3 : 2))];
      }
          let imageactionliveN = String.fromCharCode(113,117,105,99,0);
         analyticsy = minimizeq.length < 46;
         imageactionliveN = `${imageactionliveN.length ^ imageactionliveN.length}`;
         minimizeq = [3 >> (Math.min(1, minimizeq.length))];
      cornerkickV = subbasketballplayere >= telegramH;
   while (championB.length > 2) {
      championB += `${championB.length ^ ynewsQ.size}`;
      break;
   }
   if (2.62 < (1.80 + leftf) && (leftf + 1.80) < 1.75) {
       let dangerh: Map<any, any> = new Map([[String.fromCharCode(104,111,115,116,102,108,97,103,115,0),644], [String.fromCharCode(97,110,116,105,97,108,105,97,115,101,100,0),175]]);
       let xadsdkL: Array<any> = [String.fromCharCode(118,108,99,115,0), String.fromCharCode(97,110,111,116,104,101,114,0), String.fromCharCode(97,118,114,101,115,97,109,112,108,101,114,101,115,0)];
      let types4 = 9178674 <= xadsdkL.length;
      do {
         xadsdkL.push(dangerh.size);
         if (types4) {
            break;
         }
      } while ((dangerh.get(`${xadsdkL.length}`) == null) && types4);
      let photoN = 8739413 >= xadsdkL.length;
      do {
         xadsdkL = [xadsdkL.length % (Math.max(7, dangerh.size))];
         if (photoN) {
            break;
         }
      } while ((!Array.from(dangerh.values()).includes(xadsdkL.length)) && photoN);
         xadsdkL.push(dangerh.size - 2);
         xadsdkL = [dangerh.size];
         xadsdkL.push(1 * dangerh.size);
       let tailp: Map<any, any> = new Map([[String.fromCharCode(119,101,101,107,100,97,121,115,0),357], [String.fromCharCode(111,114,105,103,105,110,0),146], [String.fromCharCode(97,100,106,117,115,116,105,110,103,0),444]]);
      leftf -= parseFloat(`${libglog0.length << (Math.min(championB.length, 3))}`);
   }
   let updatesh = 6776509.0 <= textinputY;
   do {
      textinputY += 1;
      if (updatesh) {
         break;
      }
   } while (((1.32 - textinputY) >= 5.93) && updatesh);
      telegramH &= 2 & ynewsQ.size;
   let crossv = libglog0.length <= 8816784;
   do {
       let questg = 3;
       let iconnewchatt = 0;
       let fullscreenmin5: Array<any> = [836, 744, 553];
       let libpangleflippedc = String.fromCharCode(113,100,109,100,97,116,97,0);
      if ((questg & libpangleflippedc.length) >= 4 || (libpangleflippedc.length & questg) >= 4) {
         libpangleflippedc += `${(String.fromCharCode(68,0) == libpangleflippedc ? questg : libpangleflippedc.length)}`;
      }
         questg ^= iconnewchatt;
      for (let a = 0; a < 3; a++) {
         questg %= Math.max(questg | 2, 3);
      }
      while (4 > (questg + 4) || 2 > (4 + questg)) {
         questg += iconnewchatt;
         break;
      }
         fullscreenmin5 = [questg >> (Math.min(Math.abs(1), 5))];
      for (let z = 0; z < 2; z++) {
          let malaysiaC = 3;
          let baselineQ = false;
          let chartt = String.fromCharCode(100,114,97,119,103,114,105,100,0);
         libpangleflippedc += `${questg}`;
         malaysiaC *= (chartt.length ^ (baselineQ ? 5 : 3));
         baselineQ = malaysiaC <= 50 || !baselineQ;
         chartt += "3";
      }
          let whistleorangeH: Array<any> = [String.fromCharCode(104,97,108,102,102,108,111,97,116,0), String.fromCharCode(114,101,109,97,112,112,105,110,103,0), String.fromCharCode(105,110,110,100,101,114,0)];
          let promotionS: Map<any, any> = new Map([[String.fromCharCode(114,101,119,114,105,116,101,0),676], [String.fromCharCode(100,101,108,101,116,101,100,0),85]]);
          let mbsplash4 = 2;
         libpangleflippedc += `${fullscreenmin5.length}`;
         whistleorangeH = [whistleorangeH.length];
         promotionS = new Map([[`${promotionS.size}`, whistleorangeH.length | 2]]);
         mbsplash4 += whistleorangeH.length;
      for (let v = 0; v < 1; v++) {
         iconnewchatt >>= Math.min(Math.abs(1), 5);
      }
         libpangleflippedc = `${questg}`;
       let rootP = false;
       let dicen = false;
         rootP = (((rootP ? 19 : fullscreenmin5.length) << (Math.min(fullscreenmin5.length, 2))) >= 19);
      for (let b = 0; b < 3; b++) {
         rootP = questg > 79 && 79 > libpangleflippedc.length;
      }
      libglog0 = [2];
      if (crossv) {
         break;
      }
   } while (((ynewsQ.size + libglog0.length) <= 1 && (1 + libglog0.length) <= 3) && crossv);
   if (castj.size < telegramH) {
       let qaag5: Map<any, any> = new Map([[String.fromCharCode(112,117,112,105,108,0),false ], [String.fromCharCode(114,111,116,97,116,105,111,110,0),true ]]);
       let iconmegaphoneS = String.fromCharCode(116,105,108,101,100,0);
       let googlez = String.fromCharCode(104,101,120,98,105,110,0);
       let gemfileq = String.fromCharCode(114,101,110,101,119,97,98,108,101,0);
       let private_seZ = 4.0;
      let canvasd = qaag5.size <= 5588015;
      do {
         qaag5 = new Map([[`${qaag5.size}`, qaag5.size]]);
         if (canvasd) {
            break;
         }
      } while ((!iconmegaphoneS.includes(`${qaag5.size}`)) && canvasd);
      if (Array.from(qaag5.values()).includes(private_seZ)) {
         qaag5 = new Map([[gemfileq, (googlez == String.fromCharCode(90,0) ? googlez.length : gemfileq.length)]]);
      }
      if (iconmegaphoneS == gemfileq) {
          let questP = String.fromCharCode(97,103,114,101,101,109,101,110,116,0);
          let mergerC = 5;
          let sigmobT = 4;
          let classesW: Map<any, any> = new Map([[String.fromCharCode(112,97,99,107,101,116,105,122,97,116,105,111,110,0),686], [String.fromCharCode(102,114,101,105,114,0),650], [String.fromCharCode(97,100,100,98,108,107,0),821]]);
         gemfileq = "1";
         questP = `${classesW.size + questP.length}`;
         mergerC += 3 - sigmobT;
         sigmobT &= sigmobT + 2;
         classesW.set(`${sigmobT}`, 1 - sigmobT);
      }
         qaag5 = new Map([[iconmegaphoneS, iconmegaphoneS.length]]);
      for (let o = 0; o < 3; o++) {
          let ticked5 = 4;
         iconmegaphoneS = `${3 & googlez.length}`;
         ticked5 |= 1;
      }
      if (iconmegaphoneS == String.fromCharCode(65,0)) {
         googlez = `${(String.fromCharCode(101,0) == googlez ? googlez.length : qaag5.size)}`;
      }
      while (iconmegaphoneS.endsWith(`${private_seZ}`)) {
         iconmegaphoneS += `${gemfileq.length & googlez.length}`;
         break;
      }
      let basketballhometeami = googlez.length >= 7289949;
      do {
          let iconmorel = String.fromCharCode(97,98,111,117,116,115,0);
          let distc = String.fromCharCode(100,105,115,112,108,97,121,0);
          let placeholderL = String.fromCharCode(115,116,105,108,108,0);
         googlez += `${parseInt(`${private_seZ}`)}`;
         iconmorel = `${distc.length}`;
         distc = `${3 * distc.length}`;
         placeholderL = `${placeholderL.length}`;
         if (basketballhometeami) {
            break;
         }
      } while (basketballhometeami && ((private_seZ / 3.38) < 1.54));
      for (let z = 0; z < 1; z++) {
          let rewindO = String.fromCharCode(100,101,99,105,115,105,111,110,0);
          let eventI = String.fromCharCode(112,114,111,112,111,115,97,108,115,0);
          let suggestionI = String.fromCharCode(117,115,97,103,101,0);
         gemfileq = `${parseInt(`${private_seZ}`)}`;
         rewindO += `${2 + eventI.length}`;
         eventI += "3";
         suggestionI = `${(String.fromCharCode(102,0) == eventI ? eventI.length : suggestionI.length)}`;
      }
          let libreactnativeblobU = String.fromCharCode(106,112,101,103,116,97,98,108,101,115,0);
          let customF = String.fromCharCode(109,100,99,116,0);
         googlez = `${2 / (Math.max(7, iconmegaphoneS.length))}`;
         libreactnativeblobU = `${libreactnativeblobU.length}`;
         customF += `${customF.length & libreactnativeblobU.length}`;
      while (googlez.length > 5) {
          let grayw = String.fromCharCode(100,101,101,112,0);
          let layout6: Array<any> = [438, 353, 918];
         googlez += `${qaag5.size * 3}`;
         grayw += `${layout6.length}`;
         layout6.push(2);
         break;
      }
         googlez = `${iconmegaphoneS.length % 1}`;
      let stationI = String.fromCharCode(95,49,48,50,108,109,97,120,116,117,0) == googlez;
      do {
          let downE = String.fromCharCode(114,97,100,105,97,108,0);
         googlez += `${googlez.length}`;
         downE += "3";
         if (stationI) {
            break;
         }
      } while ((iconmegaphoneS != String.fromCharCode(119,0) || 5 > googlez.length) && stationI);
         qaag5.set(`${iconmegaphoneS}`, 1 | qaag5.size);
      if (!iconmegaphoneS.includes(`${gemfileq.length}`)) {
         gemfileq = `${2 % (Math.max(6, iconmegaphoneS.length))}`;
      }
      telegramH += ((unimplementedview9 ? 4 : 5) | (owngoalq ? 5 : 5));
   }
       let teamv = 4.0;
          let soundX: Map<any, any> = new Map([[String.fromCharCode(97,108,108,111,99,97,116,111,114,115,0),80], [String.fromCharCode(97,118,99,99,0),382], [String.fromCharCode(99,117,118,105,100,0),123]]);
          let brightnessP = String.fromCharCode(119,105,112,101,0);
         teamv += (parseFloat(`${brightnessP == String.fromCharCode(110,0) ? soundX.size : brightnessP.length}`));
         teamv += parseFloat(`${parseInt(`${teamv}`)}`);
       let iconclosewhitebgV = false;
      castj = new Map([[`${castj.size}`, 1]]);
   while ((telegramH - 2) <= 5) {
      textinputY -= ynewsQ.size;
      break;
   }
   let airbnbstarselectedM = telegramH >= 9012206;
   do {
      telegramH *= 3 ^ libglog0.length;
      if (airbnbstarselectedM) {
         break;
      }
   } while (airbnbstarselectedM && (5 < telegramH));
       let shielddoneV: Array<any> = [516, 920, 203];
         shielddoneV = [1 << (Math.min(2, shielddoneV.length))];
      for (let l = 0; l < 2; l++) {
         shielddoneV.push(shielddoneV.length & shielddoneV.length);
      }
         shielddoneV = [shielddoneV.length + 1];
      libglog0.push(1 | shielddoneV.length);
   if (1.90 == (3.12 - textinputY) || 3.12 == (textinputY / (Math.max(3, leftf)))) {
      textinputY -= ((unimplementedview9 ? 1 : 2) << (Math.min(Math.abs(subbasketballplayere), 3)));
   }
      subbasketballplayere ^= 3 | parseInt(`${textinputY}`);
   let rewardj = owngoalq ? !owngoalq : owngoalq;
   do {
       let baidul = 5.0;
       let confirmationQ = 3;
       let bootsplashx = 1.0;
       let iconrightorangef = 1;
      while (confirmationQ < 5) {
         confirmationQ *= 2 | parseInt(`${baidul}`);
         break;
      }
      let iconstar1 = baidul <= 6261191.0;
      do {
          let brightnessi: Array<any> = [945, 440];
          let downloadingf: Map<any, any> = new Map([[String.fromCharCode(112,110,103,100,115,112,0),602], [String.fromCharCode(99,111,110,118,101,114,115,97,116,105,111,110,0),744]]);
          let videoQ = 0;
         baidul -= brightnessi.length;
         brightnessi = [2];
         downloadingf = new Map([[`${downloadingf.size}`, videoQ]]);
         videoQ <<= Math.min(3, Math.abs(2 << (Math.min(5, Math.abs(downloadingf.size)))));
         if (iconstar1) {
            break;
         }
      } while ((1.20 < (confirmationQ + baidul) && (baidul + confirmationQ) < 1.20) && iconstar1);
      let tempnodatagifZ = 7290767.0 >= baidul;
      do {
         baidul += parseInt(`${bootsplashx}`);
         if (tempnodatagifZ) {
            break;
         }
      } while (tempnodatagifZ && ((1.4 * baidul) < 4.59));
      for (let w = 0; w < 3; w++) {
         baidul /= Math.max(5, 2 | iconrightorangef);
      }
         confirmationQ %= Math.max(4, parseInt(`${bootsplashx}`));
          let short_put = 2.0;
          let searchp = String.fromCharCode(100,114,105,102,116,0);
          let screeng = String.fromCharCode(99,111,110,110,101,99,116,101,100,0);
         iconrightorangef ^= parseInt(`${short_put}`) - 3;
         short_put -= searchp.length >> (Math.min(Math.abs(2), 1));
         searchp = "3";
         screeng = `${searchp.length}`;
          let utilsd = false;
         bootsplashx /= Math.max(2, confirmationQ - iconrightorangef);
         utilsd = !utilsd;
      if ((5.29 * bootsplashx) < 1.84) {
          let time_glr = String.fromCharCode(113,117,105,99,107,0);
          let shootyesgoalb = String.fromCharCode(114,101,115,111,108,118,0);
         bootsplashx -= confirmationQ;
         time_glr = `${time_glr.length % 2}`;
         shootyesgoalb = `${(shootyesgoalb == String.fromCharCode(120,0) ? time_glr.length : shootyesgoalb.length)}`;
      }
       let gnewarchdefaults0 = 2.0;
       let analyticsD = 0.0;
         analyticsD /= Math.max(4, iconrightorangef + parseInt(`${analyticsD}`));
      while (iconrightorangef >= gnewarchdefaults0) {
         gnewarchdefaults0 -= confirmationQ * parseInt(`${gnewarchdefaults0}`);
         break;
      }
         analyticsD *= parseInt(`${analyticsD}`) ^ 3;
      owngoalq = (typesC / (Math.max(textinputY, 3))) <= 90;
      if (rewardj) {
         break;
      }
   } while (rewardj && (2 < telegramH || (2 + telegramH) < 1));
   if ((subbasketballplayere / (Math.max(leftf, 3))) == 5.99) {
      leftf += parseFloat(`${subbasketballplayere}`);
   }
      typesC ^= parseInt(`${leftf}`) & 3;
   if ((typesC % 1) < 5 || 5 < (1 % (Math.max(9, ynewsQ.size)))) {
      typesC &= (championB == String.fromCharCode(114,0) ? typesC : championB.length);
   }
      castj = new Map([[`${unimplementedview9}`, ((cornerkickV ? 4 : 1) + 2)]]);
   let backwhiteK = 5580412 >= castj.size;
   do {
      castj.set(`${telegramH}`, typesC);
      if (backwhiteK) {
         break;
      }
   } while (backwhiteK && ((castj.size >> (Math.min(Math.abs(1), 4))) >= 4 && 1 >= (castj.size >> (Math.min(2, Math.abs(typesC))))));
   for (let i = 0; i < 1; i++) {
      cornerkickV = !championB.includes(`${leftf}`);
   }
      cornerkickV = (telegramH * matchesD) >= 47;

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
      ({ item, index }: { item: wawaBingPing; index: number }) => {
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
       let libreactnativejniM: Map<any, any> = new Map([[String.fromCharCode(99,111,110,102,105,100,101,110,116,105,97,108,0),false ], [String.fromCharCode(102,97,99,101,115,0),true ]]);
    let fullscreenmaxf = true;
    let refreshborderless4: Array<any> = [422, 444];
    let weiboU = String.fromCharCode(101,110,116,101,114,105,110,103,0);
    let whiteanimationlivey = 1.0;
    let relatedq: Array<any> = [622, 81];
    let controlsR = String.fromCharCode(108,117,109,97,0);
    let jingdongi = 1.0;
    let dark7: Array<any> = [391, 428, 215];
    let orangeuparrowX: Array<any> = [String.fromCharCode(99,97,110,111,110,105,99,97,108,0), String.fromCharCode(114,101,115,105,122,97,98,108,101,0), String.fromCharCode(115,101,116,99,98,0)];
    let bottomY = String.fromCharCode(111,117,116,113,117,101,117,101,0);
    let proxyn = false;
    let traminia = 5.0;
    let iconnewchath = true;
    let libavdevicex = 3;
       let iconviewerv: Map<any, any> = new Map([[String.fromCharCode(111,108,108,101,99,116,105,111,110,115,0),String.fromCharCode(109,111,98,105,117,115,0)], [String.fromCharCode(107,101,121,112,97,116,104,0),String.fromCharCode(105,110,116,0)], [String.fromCharCode(103,100,111,99,0),String.fromCharCode(115,99,97,110,110,105,110,103,0)]]);
       let editA = 4.0;
      for (let t = 0; t < 3; t++) {
         editA /= Math.max(1, parseFloat(`${iconviewerv.size}`));
      }
         iconviewerv = new Map([[`${iconviewerv.size}`, iconviewerv.size | 1]]);
      while (!Array.from(iconviewerv.values()).includes(editA)) {
         editA += parseFloat(`${parseInt(`${editA}`) + iconviewerv.size}`);
         break;
      }
       let private_7uZ: Array<any> = [559, 517];
       let splashj: Array<any> = [639, 789, 700];
      while (!splashj.includes(private_7uZ.length)) {
          let catagoryA: Map<any, any> = new Map([[String.fromCharCode(115,104,117,116,116,101,114,0),502], [String.fromCharCode(118,97,108,105,100,97,116,105,110,103,0),579], [String.fromCharCode(115,101,108,101,99,116,97,98,108,101,0),481]]);
         private_7uZ.push(3);
         catagoryA = new Map([[`${catagoryA.size}`, catagoryA.size]]);
         break;
      }
      if (splashj.length <= private_7uZ.length) {
         splashj = [splashj.length];
      }
      controlsR += `${controlsR.length << (Math.min(Math.abs(2), 3))}`;
   while (!refreshborderless4.includes(relatedq.length)) {
      relatedq = [relatedq.length % 3];
      break;
   }
   while (!controlsR.includes(`${libreactnativejniM.size}`)) {
      libreactnativejniM.set(`${jingdongi}`, relatedq.length);
      break;
   }
   for (let e = 0; e < 1; e++) {
       let starA: Map<any, any> = new Map([[String.fromCharCode(112,111,115,116,101,114,115,0),552], [String.fromCharCode(105,111,115,98,117,105,108,100,0),204]]);
       let sharee = String.fromCharCode(116,100,108,116,0);
       let disconnectedlogoO = String.fromCharCode(105,110,116,101,103,114,97,108,0);
       let roomh = 0.0;
         disconnectedlogoO += `${sharee.length + disconnectedlogoO.length}`;
      while (5 > (disconnectedlogoO.length & 5) || 3 > (starA.size & 5)) {
         disconnectedlogoO = `${parseInt(`${roomh}`)}`;
         break;
      }
      while ((sharee.length & starA.size) >= 1 || (1 & sharee.length) >= 5) {
         sharee += `${3 + sharee.length}`;
         break;
      }
      for (let r = 0; r < 2; r++) {
          let scoreu = 1;
          let subtexts = 3.0;
         roomh += parseFloat(`${2 - disconnectedlogoO.length}`);
         scoreu &= 3 / (Math.max(1, parseInt(`${subtexts}`)));
         subtexts -= parseFloat(`${parseInt(`${subtexts}`)}`);
      }
       let sideb: Map<any, any> = new Map([[String.fromCharCode(112,104,105,0),false ], [String.fromCharCode(101,110,116,114,121,112,111,105,110,116,0),false ]]);
      let stepR = disconnectedlogoO == String.fromCharCode(107,106,54,50,111,101,55,55,0);
      do {
         disconnectedlogoO = `${parseInt(`${roomh}`) ^ sharee.length}`;
         if (stepR) {
            break;
         }
      } while ((!disconnectedlogoO.startsWith(`${roomh}`)) && stepR);
       let roomy = 1;
       let lnewsz = 3;
      for (let z = 0; z < 1; z++) {
          let adultz = false;
          let favicont = 2;
          let cornerkickz = String.fromCharCode(101,103,97,99,121,0);
          let nbatrophyv = String.fromCharCode(108,97,116,116,105,99,101,0);
          let textinputC = 5.0;
         sideb.set(nbatrophyv, disconnectedlogoO.length + nbatrophyv.length);
         adultz = !adultz || 66 <= favicont;
         favicont %= Math.max(((adultz ? 1 : 4) & cornerkickz.length), 3);
         cornerkickz += `${cornerkickz.length ^ 1}`;
         textinputC += 3;
      }
      weiboU += "3";
   }
   let profileactiver = weiboU == String.fromCharCode(103,109,103,102,0);
   do {
      weiboU = `${bottomY.length}`;
      if (profileactiver) {
         break;
      }
   } while (profileactiver && (parseFloat(`${weiboU.length}`) > whiteanimationlivey));
   if (1 == orangeuparrowX.length) {
       let flagU = String.fromCharCode(99,111,112,121,114,105,103,104,116,0);
       let clearZ = false;
      while (flagU.startsWith(`${clearZ}`)) {
         flagU = `${((clearZ ? 3 : 3))}`;
         break;
      }
         clearZ = !clearZ || flagU.length >= 97;
      orangeuparrowX = [1];
   }
      controlsR += "2";
   for (let w = 0; w < 1; w++) {
       let tickedp = String.fromCharCode(101,118,97,108,117,97,116,101,100,0);
       let googleR = 4.0;
       let progress9 = String.fromCharCode(100,101,118,101,108,111,112,101,114,0);
       let eventA = String.fromCharCode(108,98,108,0);
         progress9 = `${(String.fromCharCode(119,0) == eventA ? eventA.length : parseInt(`${googleR}`))}`;
         progress9 += `${parseInt(`${googleR}`)}`;
          let turn_: Map<any, any> = new Map([[String.fromCharCode(99,117,114,118,101,0),false ], [String.fromCharCode(114,101,102,108,101,99,116,0),true ]]);
         googleR += parseInt(`${googleR}`) | 3;
         turn_.set(`${turn_.size}`, turn_.size >> (Math.min(3, Math.abs(turn_.size))));
         progress9 = `${(tickedp == String.fromCharCode(107,0) ? tickedp.length : parseInt(`${googleR}`))}`;
          let notificationgrayV = true;
          let emojiheart7 = String.fromCharCode(97,110,116,105,97,108,105,97,115,0);
         googleR += 3 - parseInt(`${googleR}`);
         notificationgrayV = (((notificationgrayV ? 2 : emojiheart7.length) + emojiheart7.length) >= 2);
      if (tickedp.length == 3) {
          let recommendationa = String.fromCharCode(116,98,117,102,0);
         eventA += "2";
         recommendationa += "3";
      }
      let leakchecker7 = progress9.length <= 9034370;
      do {
         progress9 = `${parseInt(`${googleR}`)}`;
         if (leakchecker7) {
            break;
         }
      } while (leakchecker7 && (!progress9.includes(`${googleR}`)));
      if (eventA != progress9) {
         progress9 = `${3 ^ tickedp.length}`;
      }
         eventA = `${(progress9 == String.fromCharCode(118,0) ? eventA.length : progress9.length)}`;
         googleR /= Math.max(progress9.length - parseInt(`${googleR}`), 2);
      for (let a = 0; a < 1; a++) {
         eventA += `${tickedp.length << (Math.min(Math.abs(2), 1))}`;
      }
       let closeC = true;
       let teamdetailsbgS = false;
      weiboU = "2";
   }
   while (1.8 <= jingdongi) {
       let sinak = String.fromCharCode(111,112,101,110,115,115,108,0);
       let aboutv: Array<any> = [String.fromCharCode(111,111,117,114,97,0), String.fromCharCode(115,117,112,112,114,101,115,115,101,115,0)];
       let flag0 = String.fromCharCode(103,101,116,115,105,103,99,116,120,110,111,0);
       let h_viewD = 3.0;
       let tailC = String.fromCharCode(117,110,108,105,110,107,0);
      for (let h = 0; h < 1; h++) {
          let merger4 = 5.0;
          let reactnativeratingsP = String.fromCharCode(114,101,112,108,105,99,97,116,101,0);
          let shareblackB = false;
          let mbsplashY: Array<any> = [135, 221];
          let subtextV = String.fromCharCode(107,101,121,115,0);
         aboutv = [parseInt(`${merger4}`)];
         merger4 *= parseFloat(`${mbsplashY.length}`);
         reactnativeratingsP += `${subtextV.length - mbsplashY.length}`;
         shareblackB = mbsplashY.length >= 54 && shareblackB;
         subtextV += `${3 ^ mbsplashY.length}`;
      }
      let guideP = 4922902 >= aboutv.length;
      do {
         aboutv = [sinak.length | 1];
         if (guideP) {
            break;
         }
      } while (guideP && ((aboutv.length * tailC.length) == 1 && 3 == (aboutv.length * 1)));
      let confign = 7086861 <= tailC.length;
      do {
         tailC += `${(sinak == String.fromCharCode(57,0) ? sinak.length : parseInt(`${h_viewD}`))}`;
         if (confign) {
            break;
         }
      } while (confign && (1 >= (tailC.length + 4) && (4 ^ tailC.length) >= 5));
         flag0 = `${aboutv.length | flag0.length}`;
      let chatbotphotog = tailC == String.fromCharCode(103,112,105,0);
      do {
          let nbatrophy7 = String.fromCharCode(116,105,109,101,112,101,114,102,114,97,109,101,0);
         tailC += `${aboutv.length}`;
         nbatrophy7 += `${nbatrophy7.length % (Math.max(9, nbatrophy7.length))}`;
         if (chatbotphotog) {
            break;
         }
      } while ((3.84 > (h_viewD * 1.52)) && chatbotphotog);
          let iconmoreu = 5.0;
          let custom7 = String.fromCharCode(97,100,106,117,115,116,109,101,110,116,0);
         flag0 += "2";
         iconmoreu /= Math.max(parseFloat(`${parseInt(`${iconmoreu}`)}`), 4);
         custom7 = `${custom7.length % (Math.max(2, parseInt(`${iconmoreu}`)))}`;
      while (sinak.includes(`${aboutv.length}`)) {
         aboutv = [3 - sinak.length];
         break;
      }
          let sport6 = String.fromCharCode(112,117,116,115,0);
          let encryptG = 3.0;
         tailC = `${sport6.length << (Math.min(Math.abs(2), 4))}`;
         sport6 = `${parseInt(`${encryptG}`)}`;
          let emojir = String.fromCharCode(108,114,111,110,100,0);
          let macauO: Array<any> = [464, 750, 324];
          let basketballhometeamJ = String.fromCharCode(112,97,108,98,97,114,115,0);
         tailC += `${(String.fromCharCode(116,0) == tailC ? flag0.length : tailC.length)}`;
         emojir = `${basketballhometeamJ.length}`;
         macauO = [2];
         basketballhometeamJ = "2";
      while (1.79 == h_viewD) {
          let goallogoA = 0;
          let notificationfillemptyc: Array<any> = [38, 255, 230];
         tailC = `${notificationfillemptyc.length}`;
         goallogoA *= 1;
         notificationfillemptyc.push(2 * goallogoA);
         break;
      }
      while (4 <= (parseInt(`${h_viewD}`) - tailC.length) && (3.95 - h_viewD) <= 1.44) {
          let middlewareU: Map<any, any> = new Map([[String.fromCharCode(102,105,110,97,108,105,115,101,114,0),433], [String.fromCharCode(116,97,105,108,115,0),549], [String.fromCharCode(115,116,121,108,101,115,0),334]]);
         h_viewD -= 1;
         middlewareU = new Map([[`${middlewareU.size}`, 2]]);
         break;
      }
         flag0 = `${(String.fromCharCode(99,0) == tailC ? parseInt(`${h_viewD}`) : tailC.length)}`;
      while (aboutv.length >= sinak.length) {
          let statisticsj: Map<any, any> = new Map([[String.fromCharCode(110,115,101,103,109,101,110,116,115,0),354], [String.fromCharCode(115,101,114,105,97,108,105,122,105,110,103,0),491]]);
         aboutv.push(parseInt(`${h_viewD}`));
         statisticsj.set(`${statisticsj.size}`, statisticsj.size);
         break;
      }
         h_viewD *= tailC.length / 2;
      while (aboutv.includes(h_viewD)) {
          let iconchatsendg = String.fromCharCode(111,95,54,52,0);
          let ksad1 = 1;
          let playlisto = 3;
         aboutv = [ksad1];
         iconchatsendg += `${(String.fromCharCode(103,0) == iconchatsendg ? playlisto : iconchatsendg.length)}`;
         playlisto <<= Math.min(4, Math.abs(3 | iconchatsendg.length));
         break;
      }
      orangeuparrowX.push(refreshborderless4.length);
      break;
   }

      if (!wawaLibglog.fakeIsVip(userState.user) && !adultMode) {
        
      } else if (hasNextPage && !isFetchingNextPage && !isFetching) {

       let trash3: Array<any> = [String.fromCharCode(114,112,99,115,0), String.fromCharCode(112,114,111,103,114,101,115,115,101,115,0)];
         trash3.push(3 / (Math.max(5, trash3.length)));
         trash3.push(trash3.length - 2);
      for (let r = 0; r < 3; r++) {
         trash3.push(trash3.length);
      }
      controlsR += "1";
   if (2 > libreactnativejniM.size) {
       let const_6vl: Array<any> = [String.fromCharCode(98,108,101,110,100,109,111,100,101,0), String.fromCharCode(109,112,108,97,109,101,0)];
      if (5 <= const_6vl.length) {
         const_6vl = [const_6vl.length];
      }
         const_6vl.push(const_6vl.length);
          let chatj = 2;
          let logoutu = 1.0;
          let penaltygoalZ = String.fromCharCode(99,105,116,121,0);
         const_6vl = [penaltygoalZ.length % 2];
         chatj ^= chatj ^ parseInt(`${logoutu}`);
         logoutu -= chatj ^ 1;
         penaltygoalZ += `${chatj << (Math.min(Math.abs(parseInt(`${logoutu}`)), 3))}`;
      libreactnativejniM = new Map([[`${libreactnativejniM.size}`, libreactnativejniM.size]]);
   }
       let smallorangeman7 = 2.0;
       let listR: Map<any, any> = new Map([[String.fromCharCode(108,111,116,116,105,101,112,97,114,115,101,114,0),398], [String.fromCharCode(114,101,109,111,118,101,100,0),893], [String.fromCharCode(97,112,112,101,97,114,0),454]]);
      if (listR.get(`${smallorangeman7}`) == null) {
         smallorangeman7 -= parseFloat(`${1 << (Math.min(5, Math.abs(listR.size)))}`);
      }
       let successd = String.fromCharCode(115,105,108,101,110,99,101,0);
       let downK = String.fromCharCode(101,120,99,104,97,110,103,101,115,0);
      for (let s = 0; s < 2; s++) {
         downK = `${listR.size << (Math.min(Math.abs(1), 3))}`;
      }
      let builds = smallorangeman7 >= 9521420.0;
      do {
         smallorangeman7 /= Math.max(parseFloat(`${parseInt(`${smallorangeman7}`)}`), 4);
         if (builds) {
            break;
         }
      } while ((3.32 > (smallorangeman7 / (Math.max(parseFloat(`${listR.size}`), 3))) || (smallorangeman7 / 3.32) > 5.100) && builds);
         smallorangeman7 /= Math.max(2, parseFloat(`${2 | downK.length}`));
         successd += `${(successd == String.fromCharCode(122,0) ? successd.length : parseInt(`${smallorangeman7}`))}`;
      proxyn = (listR.size << (Math.min(4, Math.abs(libreactnativejniM.size)))) < 17;
   for (let p = 0; p < 3; p++) {
       let defaultroombgg = String.fromCharCode(112,97,114,101,110,116,104,101,115,105,115,0);
      if (1 == defaultroombgg.length) {
          let controlb = String.fromCharCode(109,109,120,101,120,116,0);
          let whatsappN = String.fromCharCode(102,105,110,116,0);
         defaultroombgg += `${defaultroombgg.length - controlb.length}`;
         controlb = `${whatsappN.length}`;
         whatsappN += `${whatsappN.length ^ 1}`;
      }
          let bdxadsdkv: Array<any> = [413, 913, 674];
         defaultroombgg += `${defaultroombgg.length}`;
         bdxadsdkv.push(bdxadsdkv.length);
         defaultroombgg += `${defaultroombgg.length}`;
      whiteanimationlivey -= (parseFloat(`${controlsR.length - (proxyn ? 4 : 2)}`));
   }
   if (1 < (parseInt(`${jingdongi}`) - relatedq.length) || (2.69 - jingdongi) < 4.15) {
      relatedq = [relatedq.length & parseInt(`${whiteanimationlivey}`)];
   }
   while (!fullscreenmaxf) {
      fullscreenmaxf = (traminia + whiteanimationlivey) == 54.71;
      break;
   }
      jingdongi /= Math.max(1, 3);
   if ((jingdongi - 2.67) < 4.72 && 2.67 < (relatedq.length - jingdongi)) {
      relatedq.push(orangeuparrowX.length);
   }
      weiboU += `${1 - weiboU.length}`;
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
       let untickm = 3.0;
    let sharedT: Array<any> = [807, 201];
    let templateprocessorH = 3.0;
    let downloadedP = 0;
    let whistlei = 4.0;
    let pointN = String.fromCharCode(109,100,110,115,0);
    let const_hN: Map<any, any> = new Map([[String.fromCharCode(117,110,115,112,101,99,105,102,105,101,100,0),964], [String.fromCharCode(118,105,98,114,97,110,99,101,0),774], [String.fromCharCode(116,101,114,109,105,110,97,116,111,114,0),503]]);
    let reada = true;
    let themeN: Map<any, any> = new Map([[String.fromCharCode(115,101,110,100,116,111,0),false ], [String.fromCharCode(100,118,100,97,116,97,0),true ]]);
    let humidity0 = String.fromCharCode(108,97,116,101,115,116,0);
    let closeZ = String.fromCharCode(115,115,101,114,116,0);
    let libsentryL = String.fromCharCode(98,97,99,107,98,114,111,117,110,100,0);
    let streamingU = String.fromCharCode(109,111,99,107,101,100,0);
    let tempG = 5.0;
    let n_titleS = 0.0;
    let placeholderX = String.fromCharCode(120,110,97,115,109,0);
   if (5.23 >= templateprocessorH) {
       let project8: Map<any, any> = new Map([[String.fromCharCode(110,117,108,108,112,97,99,107,101,116,0),true ], [String.fromCharCode(118,115,99,97,108,101,0),true ]]);
       let renewk: Map<any, any> = new Map([[String.fromCharCode(99,111,100,101,99,112,114,105,118,0),370], [String.fromCharCode(114,101,109,105,110,100,101,114,0),575], [String.fromCharCode(119,101,108,115,0),460]]);
      while (renewk.get(`${project8.size}`) == null) {
          let style9 = String.fromCharCode(115,105,122,101,108,101,115,115,0);
          let minivodx = 0.0;
         renewk = new Map([[`${renewk.size}`, parseInt(`${minivodx}`) | renewk.size]]);
         style9 = `${(String.fromCharCode(100,0) == style9 ? style9.length : style9.length)}`;
         minivodx *= 3 * style9.length;
         break;
      }
         renewk = new Map([[`${project8.size}`, project8.size]]);
         project8 = new Map([[`${renewk.size}`, 2 | project8.size]]);
      while (!Array.from(project8.keys()).includes(`${renewk.size}`)) {
          let controlL: Array<any> = [108, 156];
          let downloadD = 1.0;
          let sharer: Map<any, any> = new Map([[String.fromCharCode(115,112,97,109,0),597], [String.fromCharCode(115,110,111,119,0),837], [String.fromCharCode(109,97,116,104,101,115,0),353]]);
          let otherD = String.fromCharCode(116,111,108,101,114,97,110,99,101,0);
         project8 = new Map([[`${sharer.size}`, 1]]);
         controlL.push(3);
         downloadD *= 2;
         sharer.set(`${downloadD}`, controlL.length);
         otherD += `${2 ^ parseInt(`${downloadD}`)}`;
         break;
      }
          let blackN = String.fromCharCode(100,110,111,119,0);
          let homeactiveq = String.fromCharCode(108,105,116,116,108,101,0);
         renewk.set(blackN, 2 - blackN.length);
         homeactiveq = "1";
      for (let o = 0; o < 2; o++) {
         project8.set(`${project8.size}`, project8.size);
      }
      templateprocessorH *= parseFloat(`${2}`);
   }
       let settingsS = 2;
       let saveu = 0.0;
       let renderu = String.fromCharCode(116,114,97,110,115,105,116,0);
       let robotoq: Map<any, any> = new Map([[String.fromCharCode(115,117,98,112,97,114,116,0),284], [String.fromCharCode(119,97,114,110,0),152]]);
      if (!renderu.endsWith(`${saveu}`)) {
          let subtext2 = 3.0;
          let emojiv = String.fromCharCode(115,104,105,102,116,101,100,0);
         saveu -= parseFloat(`${parseInt(`${saveu}`) << (Math.min(Math.abs(1), 1))}`);
         subtext2 /= Math.max(5, emojiv.length);
         emojiv += `${emojiv.length}`;
      }
         saveu += parseFloat(`${parseInt(`${saveu}`) + 1}`);
      for (let c = 0; c < 2; c++) {
         renderu += "2";
      }
      if (!renderu.includes(`${settingsS}`)) {
          let inouttargetrede = String.fromCharCode(117,112,103,114,97,100,101,100,0);
          let reactnavigationg = true;
          let uploadL = 4.0;
          let flag6 = String.fromCharCode(100,105,115,109,105,115,115,101,115,0);
          let shootnogoalg = String.fromCharCode(105,110,118,101,114,116,0);
         renderu += `${flag6.length}`;
         inouttargetrede += "1";
         reactnavigationg = inouttargetrede.includes(`${uploadL}`);
         uploadL /= Math.max(3, inouttargetrede.length * 1);
         flag6 = `${shootnogoalg.length}`;
         shootnogoalg += `${(String.fromCharCode(102,0) == inouttargetrede ? inouttargetrede.length : parseInt(`${uploadL}`))}`;
      }
       let filterC = String.fromCharCode(112,108,117,114,97,108,105,122,101,100,0);
      while ((filterC.length * 2) >= 5) {
         filterC += `${robotoq.size - 1}`;
         break;
      }
      while (renderu.length <= 4) {
         renderu += "1";
         break;
      }
      let libreactnativeblobb = filterC.length >= 6397008;
      do {
         filterC += `${(String.fromCharCode(112,0) == filterC ? filterC.length : settingsS)}`;
         if (libreactnativeblobb) {
            break;
         }
      } while (libreactnativeblobb && ((robotoq.size >> (Math.min(filterC.length, 5))) == 3 || (robotoq.size >> (Math.min(filterC.length, 1))) == 3));
      sharedT.push(renderu.length);
   while ((2 ^ const_hN.size) < 1) {
      const_hN.set(`${pointN}`, (pointN == String.fromCharCode(115,0) ? themeN.size : pointN.length));
      break;
   }
       let share2 = 0.0;
       let auto_kL = 1.0;
       let renewi = String.fromCharCode(114,116,112,112,114,111,116,111,0);
       let mbnativeq = String.fromCharCode(97,97,99,115,98,114,100,97,116,97,0);
       let connectionk = String.fromCharCode(115,119,105,122,122,108,101,100,0);
          let awayiconw = 5.0;
          let statisticsactive1 = String.fromCharCode(116,104,114,111,116,116,108,101,100,0);
         share2 *= parseFloat(`${3}`);
         awayiconw /= Math.max(1 % (Math.max(3, statisticsactive1.length)), 2);
         statisticsactive1 += "1";
         renewi += `${parseInt(`${share2}`) >> (Math.min(mbnativeq.length, 5))}`;
      if ((3 - parseInt(`${share2}`)) <= 5 && 3 <= (parseInt(`${share2}`) - renewi.length)) {
         share2 /= Math.max(4, parseFloat(`${2 << (Math.min(3, connectionk.length))}`));
      }
      for (let q = 0; q < 2; q++) {
         mbnativeq += `${mbnativeq.length ^ renewi.length}`;
      }
      let gemfilef = auto_kL <= 8842728.0;
      do {
         auto_kL -= parseFloat(`${1}`);
         if (gemfilef) {
            break;
         }
      } while (gemfilef && (2 < mbnativeq.length));
       let fullo = String.fromCharCode(119,105,116,104,111,117,116,0);
      let giflivestreamingb = 8129231 >= renewi.length;
      do {
         renewi += `${mbnativeq.length & renewi.length}`;
         if (giflivestreamingb) {
            break;
         }
      } while ((connectionk != String.fromCharCode(116,0)) && giflivestreamingb);
         fullo = `${connectionk.length | 1}`;
      pointN = `${parseInt(`${templateprocessorH}`) * sharedT.length}`;
   if (reada) {
      reada = closeZ.length < 4;
   }
   if (parseFloat(`${humidity0.length}`) < whistlei) {
       let libreanimatede = 4;
         libreanimatede >>= Math.min(3, Math.abs(2 & libreanimatede));
       let predictionwinv = false;
          let libavformatL = 2;
         predictionwinv = 93 > libreanimatede;
         libavformatL <<= Math.min(5, Math.abs(libavformatL + 3));
      whistlei *= parseFloat(`${libsentryL.length >> (Math.min(Math.abs(2), 1))}`);
   }
      humidity0 += `${parseInt(`${whistlei}`) << (Math.min(streamingU.length, 2))}`;
       let networkb = 1.0;
       let abidetectH = String.fromCharCode(105,110,118,116,114,97,110,115,0);
         networkb -= 2;
      let malaysiaf = networkb <= 6716463.0;
      do {
         networkb -= abidetectH.length;
         if (malaysiaf) {
            break;
         }
      } while (malaysiaf && (3 < (5 - parseInt(`${networkb}`)) || 5 < (abidetectH.length | 5)));
      for (let n = 0; n < 2; n++) {
         abidetectH += `${1 & parseInt(`${networkb}`)}`;
      }
          let libyogap = false;
          let c_centerM: Array<any> = [731, 682];
          let anythink2 = 4.0;
         abidetectH += `${abidetectH.length % 2}`;
         libyogap = 52 >= c_centerM.length;
         c_centerM = [parseInt(`${anythink2}`) | 2];
         anythink2 -= parseFloat(`${c_centerM.length}`);
      for (let a = 0; a < 3; a++) {
         abidetectH = `${1 % (Math.max(1, abidetectH.length))}`;
      }
         abidetectH = `${abidetectH.length}`;
      downloadedP -= parseInt(`${untickm}`);
      libsentryL = `${pointN.length | parseInt(`${tempG}`)}`;

      setIsScrolling(false);

   if (4 < (3 % (Math.max(5, sharedT.length)))) {
      humidity0 = `${2 / (Math.max(10, closeZ.length))}`;
   }
      tempG -= 1 >> (Math.min(1, humidity0.length));
      templateprocessorH -= parseFloat(`${2 << (Math.min(5, Math.abs(parseInt(`${templateprocessorH}`))))}`);
       let eyeclosee = 5.0;
       let videocommonG = String.fromCharCode(116,111,107,101,110,105,122,101,0);
       let backgroundX = String.fromCharCode(97,110,105,109,97,116,97,98,108,101,0);
       let issubv = String.fromCharCode(101,110,99,111,100,101,114,0);
      let middlewaref = backgroundX == String.fromCharCode(104,56,49,52,0);
      do {
         backgroundX = `${backgroundX.length / 1}`;
         if (middlewaref) {
            break;
         }
      } while ((videocommonG.length <= backgroundX.length) && middlewaref);
      for (let j = 0; j < 1; j++) {
         videocommonG += `${backgroundX.length}`;
      }
       let package_aA = false;
      let smallsound5 = videocommonG == String.fromCharCode(55,50,97,0);
      do {
         videocommonG += `${1 - parseInt(`${eyeclosee}`)}`;
         if (smallsound5) {
            break;
         }
      } while (smallsound5 && (1.63 < (3.88 * eyeclosee) && (parseFloat(`${videocommonG.length}`) * eyeclosee) < 3.88));
       let redcirclebge: Array<any> = [String.fromCharCode(98,95,50,56,0), String.fromCharCode(101,121,98,111,97,114,100,0), String.fromCharCode(111,118,101,114,104,101,97,100,0)];
      templateprocessorH /= Math.max((parseFloat(`${(reada ? 4 : 3) - parseInt(`${tempG}`)}`)), 1);
      streamingU += `${2 * const_hN.size}`;
       let reactnavigation5 = false;
       let recommendationo = 2;
       let vignetteR = String.fromCharCode(105,115,115,112,97,99,101,0);
      if (!reactnavigation5 && (recommendationo / 1) > 3) {
          let targetn = 5.0;
          let libreactnativeblob6 = String.fromCharCode(114,111,117,110,100,101,100,110,101,115,115,0);
          let iconarrowrightorangef = 5.0;
          let loadingspinnerz = String.fromCharCode(97,117,116,111,99,104,101,99,107,112,111,105,110,116,0);
          let arrowQ = true;
         recommendationo <<= Math.min(2, Math.abs(libreactnativeblob6.length << (Math.min(1, loadingspinnerz.length))));
         targetn -= ((arrowQ ? 1 : 4) << (Math.min(Math.abs(parseInt(`${targetn}`)), 4)));
         libreactnativeblob6 += `${(parseInt(`${targetn}`) - (arrowQ ? 1 : 1))}`;
         iconarrowrightorangef *= parseInt(`${targetn}`) - parseInt(`${iconarrowrightorangef}`);
         loadingspinnerz += `${(parseInt(`${iconarrowrightorangef}`) / (Math.max(3, (arrowQ ? 1 : 2))))}`;
      }
         reactnavigation5 = !reactnavigation5;
       let schedulerq: Map<any, any> = new Map([[String.fromCharCode(113,95,56,54,0),609], [String.fromCharCode(110,115,112,97,99,101,115,0),430]]);
      if (3 <= (recommendationo | schedulerq.size) || (3 | recommendationo) <= 1) {
         schedulerq = new Map([[`${recommendationo}`, recommendationo << (Math.min(5, Math.abs(2)))]]);
      }
      for (let z = 0; z < 2; z++) {
         vignetteR = `${schedulerq.size - 2}`;
      }
      if ((recommendationo + vignetteR.length) <= 2 && 2 <= (2 + vignetteR.length)) {
         vignetteR += "1";
      }
      for (let p = 0; p < 1; p++) {
         reactnavigation5 = vignetteR.startsWith(`${recommendationo}`);
      }
          let launcherS: Map<any, any> = new Map([[String.fromCharCode(109,111,100,105,102,105,99,97,116,105,111,110,0),true ], [String.fromCharCode(112,116,120,99,0),true ], [String.fromCharCode(106,115,105,109,100,0),true ]]);
         vignetteR += "2";
         launcherS.set(`${launcherS.size}`, 3 | launcherS.size);
          let iconshare8 = 5.0;
          let paginationD: Array<any> = [String.fromCharCode(97,101,99,109,0), String.fromCharCode(99,111,108,108,101,99,116,105,111,110,0)];
         schedulerq = new Map([[`${schedulerq.size}`, schedulerq.size]]);
         iconshare8 /= Math.max(3 + parseInt(`${iconshare8}`), 4);
         paginationD = [paginationD.length];
      streamingU = "2";
   while (sharedT.length < parseInt(`${templateprocessorH}`)) {
      sharedT.push(3);
      break;
   }
   if (untickm >= 5.72) {
      downloadedP -= ((reada ? 3 : 3) % (Math.max(const_hN.size, 1)));
   }
   if (3 < (humidity0.length * parseInt(`${tempG}`))) {
       let bnewarchdefaultsu = 3;
       let tempw = true;
       let questA: Array<any> = [906, 454];
      for (let b = 0; b < 3; b++) {
          let playlistj = 2.0;
          let distk = String.fromCharCode(111,110,102,105,103,117,114,97,116,105,111,110,0);
          let whitetickA = String.fromCharCode(102,114,97,109,101,115,121,110,99,0);
          let bellreminderm = 2.0;
         tempw = playlistj > 31.50 || whitetickA == String.fromCharCode(87,0);
         playlistj *= 2;
         distk = `${parseInt(`${bellreminderm}`) ^ 3}`;
         whitetickA += `${1 + distk.length}`;
         bellreminderm /= Math.max(3, 1 * distk.length);
      }
      for (let o = 0; o < 1; o++) {
         questA = [questA.length];
      }
      if (questA.length >= 4) {
         bnewarchdefaultsu ^= bnewarchdefaultsu;
      }
       let nbatrophyK: Map<any, any> = new Map([[String.fromCharCode(119,105,108,100,99,97,114,100,0),79], [String.fromCharCode(99,111,111,108,100,111,119,110,115,0),900], [String.fromCharCode(117,110,117,115,101,100,0),744]]);
       let trashx: Map<any, any> = new Map([[String.fromCharCode(114,115,104,105,102,116,0),502], [String.fromCharCode(114,97,116,105,111,110,97,108,0),936], [String.fromCharCode(97,117,116,104,101,110,116,105,99,97,116,101,0),61]]);
         nbatrophyK.set(`${bnewarchdefaultsu}`, (bnewarchdefaultsu + (tempw ? 3 : 3)));
      let reactnativeultimatelistviewM = nbatrophyK.size >= 9053111;
      do {
         nbatrophyK.set(`${tempw}`, (nbatrophyK.size & (tempw ? 1 : 4)));
         if (reactnativeultimatelistviewM) {
            break;
         }
      } while (reactnativeultimatelistviewM && ((1 << (Math.min(2, Math.abs(nbatrophyK.size)))) == 5));
      while (tempw) {
         tempw = questA.length <= bnewarchdefaultsu;
         break;
      }
      if (!questA.includes(bnewarchdefaultsu)) {
         questA.push(1 | bnewarchdefaultsu);
      }
         bnewarchdefaultsu >>= Math.min(Math.abs(bnewarchdefaultsu), 1);
      humidity0 = "2";
   }

      if (isFocus
        && Platform.OS !== 'ios'
        && !wawaLibglog.fakeIsLogin(userState.user)
        && !wawaLibglog.fakeIsVip(userState.user)
        && swipeCount.current >= MINI_SHOW_LOGIN_NUMBER
        && current >= MINI_SHOW_LOGIN_NUMBER
      ) {

       let iconj = String.fromCharCode(97,105,116,101,114,0);
       let vietnamB = String.fromCharCode(115,111,97,98,111,114,116,0);
          let dycreatorJ = true;
         vietnamB += "3";
         vietnamB += `${iconj.length / (Math.max(vietnamB.length, 3))}`;
      while (2 >= iconj.length) {
          let fullp = String.fromCharCode(117,110,97,108,105,103,110,101,100,0);
          let actionsG = 2.0;
         iconj += "3";
         fullp = "3";
         actionsG /= Math.max(parseInt(`${actionsG}`) % (Math.max(1, 8)), 1);
         break;
      }
       let modalt: Map<any, any> = new Map([[String.fromCharCode(99,111,109,112,108,101,116,105,111,110,0),String.fromCharCode(101,110,117,109,115,0)], [String.fromCharCode(116,97,115,107,115,0),String.fromCharCode(108,111,110,103,101,114,0)]]);
       let halfo: Map<any, any> = new Map([[String.fromCharCode(108,115,112,115,0),72], [String.fromCharCode(100,101,102,105,110,101,100,0),966]]);
      if (iconj.includes(vietnamB)) {
         iconj += `${halfo.size - vietnamB.length}`;
      }
      if (iconj.length >= 4) {
         iconj = `${modalt.size}`;
      }
      whistlei *= parseFloat(`${downloadedP + iconj.length}`);
   while (humidity0.length > 1) {
      humidity0 = `${streamingU.length}`;
      break;
   }
      libsentryL += `${parseInt(`${untickm}`) & sharedT.length}`;
       let roomJ = 5;
       let iconL = String.fromCharCode(105,115,119,114,105,116,101,97,98,108,101,0);
       let nativemoduleB: Map<any, any> = new Map([[String.fromCharCode(100,117,114,98,0),954], [String.fromCharCode(102,102,112,108,97,121,0),721]]);
      if (iconL.startsWith(`${roomJ}`)) {
         iconL += "3";
      }
      while (3 <= (nativemoduleB.size / (Math.max(iconL.length, 6))) && (iconL.length / (Math.max(3, 3))) <= 2) {
         iconL += `${nativemoduleB.size}`;
         break;
      }
          let photor = String.fromCharCode(115,117,105,116,101,115,0);
         nativemoduleB.set(iconL, photor.length >> (Math.min(iconL.length, 1)));
         nativemoduleB.set(`${roomJ}`, nativemoduleB.size);
      for (let a = 0; a < 3; a++) {
          let areaI = String.fromCharCode(118,97,114,105,97,98,108,101,0);
          let flipperl: Array<any> = [String.fromCharCode(115,116,97,110,100,97,114,100,105,122,101,0), String.fromCharCode(115,105,108,107,0), String.fromCharCode(105,97,100,115,116,0)];
          let stationO = String.fromCharCode(111,110,101,105,110,99,104,0);
         iconL += `${(String.fromCharCode(120,0) == areaI ? roomJ : areaI.length)}`;
         flipperl.push(1);
         stationO = `${(stationO == String.fromCharCode(76,0) ? stationO.length : flipperl.length)}`;
      }
         iconL += `${iconL.length / (Math.max(1, 8))}`;
      if (iconL.length > nativemoduleB.size) {
         nativemoduleB.set(`${roomJ}`, (String.fromCharCode(120,0) == iconL ? iconL.length : roomJ));
      }
      let windE = 7153666 >= iconL.length;
      do {
         iconL += `${iconL.length}`;
         if (windE) {
            break;
         }
      } while (windE && ((roomJ * 2) == 5 || (roomJ * iconL.length) == 2));
         nativemoduleB = new Map([[`${nativemoduleB.size}`, nativemoduleB.size]]);
      templateprocessorH /= Math.max(2, parseFloat(`${1 ^ pointN.length}`));
       let update_8wO = String.fromCharCode(103,100,97,116,97,0);
      for (let q = 0; q < 1; q++) {
         update_8wO += `${update_8wO.length}`;
      }
       let libruntimeexecutorT: Array<any> = [226, 516, 23];
      let controls9 = 9530596 >= libruntimeexecutorT.length;
      do {
         libruntimeexecutorT = [(String.fromCharCode(108,0) == update_8wO ? update_8wO.length : libruntimeexecutorT.length)];
         if (controls9) {
            break;
         }
      } while (controls9 && (!update_8wO.startsWith(`${libruntimeexecutorT.length}`)));
      libsentryL += `${sharedT.length * 2}`;
      humidity0 = `${parseInt(`${untickm}`)}`;
   while ((tempG / 3.87) >= 2.62 && 2 >= (parseInt(`${tempG}`) / (Math.max(6, closeZ.length)))) {
       let turn0 = String.fromCharCode(109,112,101,103,112,105,99,116,117,114,101,0);
      if (turn0 != String.fromCharCode(48,0)) {
          let readN = 3.0;
          let iconclosewhite_ = String.fromCharCode(112,97,103,101,99,111,117,110,116,0);
          let tempnodatagifP = 1.0;
         turn0 += `${parseInt(`${tempnodatagifP}`) + turn0.length}`;
         readN /= Math.max(parseFloat(`${iconclosewhite_.length}`), 4);
         iconclosewhite_ = `${parseInt(`${readN}`) * iconclosewhite_.length}`;
         tempnodatagifP -= parseFloat(`${iconclosewhite_.length % 2}`);
      }
      while (!turn0.endsWith(turn0)) {
         turn0 = `${turn0.length}`;
         break;
      }
         turn0 += `${turn0.length / (Math.max(10, turn0.length))}`;
      closeZ = `${turn0.length}`;
      break;
   }
   for (let q = 0; q < 3; q++) {
      untickm *= closeZ.length - humidity0.length;
   }
   for (let v = 0; v < 3; v++) {
      libsentryL += "3";
   }
        dispatch(showLoginAction());
      }
    }, [userState.user, current, isFocus]);

    useEffect(() => {
      if (wawaLibglog.fakeIsLogin(userState.user) || wawaLibglog.fakeIsVip(userState.user)) return;

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
                wawaLibglog.fakeIsVip(userState.user) ?
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
