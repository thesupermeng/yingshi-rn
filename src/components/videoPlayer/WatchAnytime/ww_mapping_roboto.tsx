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
import ShortVod from './ww_iconfeedback';
import { wwPredictionarrowIncident } from '@type/ww_dycreator_result';
import FastImage from '../../common/ww_result';

import { useAppDispatch, useAppSelector, useSelector } from '@hooks/ww_catagory_neon';
import ww_runtime from '../../../../Umeng/ww_runtime';
import { showAdultModeVip, showLoginAction } from '@redux/actions/ww_hash';
import { screenModel } from '@type/ww_jingdong_libavfilter';
import { ADULT_MODE_PREVIEW_DURATION, MINI_SHOW_LOGIN_NUMBER } from '@utility/ww_icon';
import ShortAds from './ww_defaultpredictionprofile';
import { wwVertical } from '@redux/reducers/ww_related_kuaishou';
import { wwBodan } from '@models/ww_liveendmodallogo_awayteamfield';
import { AdultVipPrivilegeOverlay } from './../../modal/ww_video_halffieldimage';
import BecomeVipOverlay from "./../../modal/ww_animation";

interface wwIndexDice {
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

type wwGradlew = {
  setPause: (pause: boolean) => void;
};

const homeLoadingGif = require('@static/images/inouttargetredRoundLeague.gif');
const loadingSpinnerGif = require('@static/images/runtimeschedulerPromotion.gif');

export default forwardRef<wwGradlew, wwIndexDice>(
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
    }: wwIndexDice,
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
    const userState = useSelector<wwVertical>('userReducer');
    const swipeCount = useRef(0);
    const {
      adultModeDisclaimerShow,
      adultModeVipShow,
      adultVideoWatchTime,
      
      watchAnytimeAdultMode: adultMode, 
    } = screenState;
    const isVip = wwBodan.isVip(userState.user);
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
      if (current > 0 && current % 4 == 0 && !wwBodan.fakeIsVip(userState.user) && adultMode) {
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

        ww_runtime.watchAnytimeVideoViewTimesAnalytics({
          userId: userState.user?.userId ?? '',
          vod_id: collectionPartialVideos[0].mini_video_id,
          isXmode: adultMode,
        });
      }
      
    }, [collectionPartialVideos]);

    useEffect(() => {
      if (current > curAnalyticsIndex && current < collectionPartialVideos.length) {
        setCurAnalyticsIndex(current);

        ww_runtime.watchAnytimeVideoViewTimesAnalytics({
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
       let libzeus8: Map<any, any> = new Map([[String.fromCharCode(115,98,112,114,111,95,112,95,56,48,0),false ], [String.fromCharCode(112,114,101,99,101,110,99,101,95,55,95,57,56,0),true ]]);
    let hiad8 = String.fromCharCode(112,95,53,95,100,101,98,108,111,99,107,105,110,103,0);
    let dycreatorp = String.fromCharCode(114,101,99,111,114,100,101,114,95,122,95,51,48,0);
    let full_ = 3;
    let stationm = String.fromCharCode(99,111,108,115,107,105,112,95,105,95,57,51,0);
    let sports7 = 0.0;
    let stylesx = String.fromCharCode(115,101,116,116,105,110,103,95,113,95,56,51,0);
    let taiwanq = true;
    let libcxxcomponents7 = 0;
    let imagenetworkerr_: Array<any> = [466, 586, 781];
    let libmapbufferjniv = String.fromCharCode(111,99,99,117,114,114,101,110,99,101,115,95,48,95,52,51,0);
    let iconwatchnows = 3.0;
    let sansr = String.fromCharCode(102,114,111,122,101,110,95,114,95,52,54,0);
    let frame_ss = false;
    let lightB = String.fromCharCode(98,105,116,101,95,122,95,52,48,0);
   while (sports7 < full_) {
       let buttonF: Map<any, any> = new Map([[String.fromCharCode(97,103,103,105,110,102,111,95,102,95,55,50,0),898], [String.fromCharCode(98,101,105,103,110,101,116,95,53,95,52,48,0),174], [String.fromCharCode(107,97,105,115,101,114,95,115,95,53,53,0),581]]);
       let awayteamfieldr = 3.0;
       let plashx = String.fromCharCode(98,101,108,108,95,108,95,50,56,0);
       let webviewF = 3;
       let dacccfaabfbcbadeebddcabacdffdbY = 1;
      while (3 > (buttonF.size ^ plashx.length) && 3 > (plashx.length ^ 3)) {
          let splashP = false;
          let episodesK = String.fromCharCode(103,95,57,48,95,102,114,97,103,109,101,110,116,0);
         plashx += `${episodesK.length}`;
         break;
      }
         webviewF += buttonF.size;
         awayteamfieldr -= parseFloat(`${dacccfaabfbcbadeebddcabacdffdbY}`);
          let codeg = false;
         awayteamfieldr /= Math.max((parseFloat(`${(codeg ? 3 : 4) - 1}`)), 5);
      if (dacccfaabfbcbadeebddcabacdffdbY == 5) {
          let shootyesgoalN: Array<any> = [474, 936];
          let j_view7 = String.fromCharCode(113,95,53,50,95,114,100,98,120,0);
          let directH = 5;
         webviewF %= Math.max(5, 2);
         shootyesgoalN.push((String.fromCharCode(67,0) == j_view7 ? shootyesgoalN.length : j_view7.length));
         directH |= 2;
      }
      for (let t = 0; t < 3; t++) {
          let stringsl = String.fromCharCode(108,95,54,50,95,104,99,108,114,0);
          let defaultpredictionprofile3 = String.fromCharCode(116,121,112,101,115,116,114,95,53,95,53,55,0);
         webviewF ^= 3;
         stringsl = "1";
         defaultpredictionprofile3 = `${defaultpredictionprofile3.length + 2}`;
      }
         webviewF &= 1 - parseInt(`${awayteamfieldr}`);
      for (let d = 0; d < 3; d++) {
          let blackJ = String.fromCharCode(97,95,54,48,0);
          let libsgcorex = String.fromCharCode(107,95,56,57,95,98,108,99,107,0);
          let searchbarb: Map<any, any> = new Map([[String.fromCharCode(117,95,50,53,95,97,103,97,105,110,0),783], [String.fromCharCode(107,105,108,111,98,121,116,101,95,97,95,51,54,0),993], [String.fromCharCode(115,121,109,109,101,116,114,105,99,95,56,95,56,52,0),756]]);
          let bootsplash4 = String.fromCharCode(98,101,116,104,115,111,102,116,118,105,100,95,55,95,55,57,0);
          let libzeust = 5.0;
         awayteamfieldr *= parseFloat(`${libsgcorex.length / (Math.max(2, 8))}`);
         blackJ += "3";
         libsgcorex = `${parseInt(`${libzeust}`) & 1}`;
         searchbarb.set(bootsplash4, bootsplash4.length << (Math.min(Math.abs(1), 2)));
         libzeust -= (parseFloat(`${String.fromCharCode(122,0) == blackJ ? blackJ.length : searchbarb.size}`));
      }
      if (4 > (dacccfaabfbcbadeebddcabacdffdbY % (Math.max(1, 1)))) {
         plashx += `${plashx.length}`;
      }
      for (let r = 0; r < 3; r++) {
          let iconstarI = 5.0;
         buttonF = new Map([[`${iconstarI}`, plashx.length ^ 3]]);
      }
      let halffieldimage_ = awayteamfieldr <= 7940055.0;
      do {
          let agreementI = 5.0;
          let libreactnativeblobA: Map<any, any> = new Map([[String.fromCharCode(112,101,111,112,108,101,95,106,95,49,51,0),218], [String.fromCharCode(98,95,55,53,95,100,100,114,97,110,103,101,0),263]]);
          let bggradientt = 5.0;
         awayteamfieldr *= parseFloat(`${parseInt(`${bggradientt}`)}`);
         agreementI -= parseFloat(`${libreactnativeblobA.size & 3}`);
         libreactnativeblobA.set(`${agreementI}`, parseInt(`${agreementI}`) & libreactnativeblobA.size);
         bggradientt /= Math.max(4, parseFloat(`${parseInt(`${agreementI}`)}`));
         if (halffieldimage_) {
            break;
         }
      } while (halffieldimage_ && (5.44 == (parseFloat(`${plashx.length}`) / (Math.max(2, awayteamfieldr)))));
         webviewF &= (plashx == String.fromCharCode(52,0) ? parseInt(`${awayteamfieldr}`) : plashx.length);
         plashx = `${dacccfaabfbcbadeebddcabacdffdbY}`;
      while (2 > (webviewF >> (Math.min(Math.abs(3), 4)))) {
         webviewF |= 2 << (Math.min(1, Math.abs(dacccfaabfbcbadeebddcabacdffdbY)));
         break;
      }
      let stringw = awayteamfieldr <= 7258125.0;
      do {
         awayteamfieldr -= parseFloat(`${plashx.length * 1}`);
         if (stringw) {
            break;
         }
      } while ((3.56 >= (awayteamfieldr / (Math.max(3.60, 8)))) && stringw);
      full_ |= parseInt(`${sports7}`) * 1;
      break;
   }
       let contextt = 4.0;
       let mbjscommonU = String.fromCharCode(115,98,114,101,115,101,114,118,101,95,101,95,50,54,0);
         contextt += mbjscommonU.length;
       let morer: Array<any> = [526, 208, 565];
       let gifgoalbgS: Array<any> = [842, 196];
      while (2 == (gifgoalbgS.length | 5) && (5 | gifgoalbgS.length) == 3) {
         gifgoalbgS = [parseInt(`${contextt}`) % (Math.max(9, mbjscommonU.length))];
         break;
      }
          let libsentryQ = String.fromCharCode(97,112,111,115,95,50,95,52,55,0);
          let fullL = 2.0;
         contextt *= gifgoalbgS.length * mbjscommonU.length;
         libsentryQ = `${1 >> (Math.min(5, Math.abs(parseInt(`${fullL}`))))}`;
         fullL += libsentryQ.length << (Math.min(Math.abs(3), 3));
         gifgoalbgS.push(mbjscommonU.length ^ 3);
      for (let g = 0; g < 3; g++) {
         morer.push(parseInt(`${contextt}`) - gifgoalbgS.length);
      }
      stationm += `${hiad8.length}`;
      dycreatorp = `${dycreatorp.length * 2}`;
       let listX: Map<any, any> = new Map([[String.fromCharCode(107,95,53,55,95,105,112,97,100,100,0),String.fromCharCode(108,111,99,97,108,105,122,97,98,108,101,95,100,95,55,53,0)], [String.fromCharCode(115,95,56,49,0),String.fromCharCode(119,95,51,51,95,115,101,114,105,102,0)], [String.fromCharCode(105,95,52,51,95,101,108,101,109,115,0),String.fromCharCode(98,111,120,101,100,95,57,95,52,53,0)]]);
       let sinaT = 0.0;
       let libswscaleo = 3.0;
      for (let q = 0; q < 1; q++) {
          let actionf: Map<any, any> = new Map([[String.fromCharCode(107,95,53,48,95,112,101,114,115,111,110,115,0),224], [String.fromCharCode(114,101,97,108,108,111,99,95,101,95,52,55,0),287]]);
          let homen = String.fromCharCode(108,105,115,116,95,107,95,49,55,0);
          let activityi = true;
         sinaT -= parseFloat(`${parseInt(`${libswscaleo}`) + parseInt(`${sinaT}`)}`);
         actionf.set(`${activityi}`, (homen.length & (activityi ? 3 : 5)));
         homen += `${actionf.size ^ 2}`;
      }
       let fieldX = String.fromCharCode(119,95,50,54,95,115,109,97,114,116,0);
       let clubC = String.fromCharCode(120,95,55,50,95,108,111,99,111,0);
       let gifgoalC = 4.0;
      if (gifgoalC > 1.27) {
          let borderlessn: Array<any> = [739, 618];
          let sellO = 3.0;
         libswscaleo *= 2 - borderlessn.length;
         borderlessn.push(parseInt(`${sellO}`));
      }
      while ((listX.size & fieldX.length) >= 2 || (2 & listX.size) >= 2) {
         listX = new Map([[`${libswscaleo}`, 1]]);
         break;
      }
      if (5.85 > (sinaT * parseFloat(`${listX.size}`)) || (sinaT * 5.85) > 2.22) {
          let albumB = false;
          let album3 = String.fromCharCode(120,95,57,48,95,115,99,97,108,101,115,0);
         sinaT *= (parseFloat(`${(albumB ? 5 : 4) * 2}`));
         albumB = album3.length < album3.length;
      }
      let checkboxa = fieldX.length >= 5728050;
      do {
         fieldX += `${parseInt(`${gifgoalC}`)}`;
         if (checkboxa) {
            break;
         }
      } while (checkboxa && (clubC == fieldX));
       let libruntimeexecutorj = false;
       let mailZ = true;
      if (1.18 <= (parseFloat(`${clubC.length}`) * sinaT)) {
         clubC += "3";
      }
      taiwanq = libmapbufferjniv.length > hiad8.length;
       let iconclosewhitebgN = 0.0;
          let backwardl = false;
          let iconscheduleQ = 4.0;
         iconclosewhitebgN /= Math.max((parseFloat(`${parseInt(`${iconclosewhitebgN}`) & (backwardl ? 3 : 4)}`)), 1);
         backwardl = 5.85 == iconscheduleQ || iconscheduleQ == 5.85;
         iconclosewhitebgN -= parseFloat(`${parseInt(`${iconclosewhitebgN}`)}`);
       let dropdownM = 1.0;
       let shareM = 5.0;
      sports7 *= 3 % (Math.max(parseInt(`${sports7}`), 10));
   for (let c = 0; c < 1; c++) {
      dycreatorp += "1";
   }
      libcxxcomponents7 >>= Math.min(Math.abs(3 & parseInt(`${sports7}`)), 3);
      hiad8 += `${libzeus8.size % (Math.max(hiad8.length, 8))}`;
      sports7 *= hiad8.length / 2;
   if (4 < libcxxcomponents7) {
       let graphX: Map<any, any> = new Map([[String.fromCharCode(115,95,53,57,95,99,104,101,99,107,115,0),702], [String.fromCharCode(102,105,110,100,97,115,111,99,95,116,95,54,57,0),977]]);
         graphX = new Map([[`${graphX.size}`, graphX.size]]);
      let overg = 5176808 <= graphX.size;
      do {
         graphX = new Map([[`${graphX.size}`, graphX.size]]);
         if (overg) {
            break;
         }
      } while ((graphX.get(`${graphX.size}`) == null) && overg);
      while (!Array.from(graphX.values()).includes(graphX.size)) {
         graphX.set(`${graphX.size}`, graphX.size);
         break;
      }
      stylesx += `${dycreatorp.length >> (Math.min(Math.abs(2), 5))}`;
   }
      imagenetworkerr_.push(1);
   while (hiad8.includes(`${stylesx.length}`)) {
       let listr = 2;
       let iconstarv = false;
       let dycreator4 = String.fromCharCode(106,95,52,57,95,112,114,101,100,105,99,116,111,114,115,0);
      let e_titleE = iconstarv ? !iconstarv : iconstarv;
      do {
         iconstarv = !iconstarv;
         if (e_titleE) {
            break;
         }
      } while (e_titleE && (!iconstarv));
       let bdxadsdkU = false;
       let componentF = false;
       let questP = String.fromCharCode(110,97,109,101,95,107,95,49,48,0);
       let mappingL = String.fromCharCode(99,111,110,110,101,99,116,95,108,95,54,56,0);
         bdxadsdkU = (listr + mappingL.length) >= 92;
         questP += `${((componentF ? 4 : 4) ^ (bdxadsdkU ? 2 : 4))}`;
      stylesx += "3";
      break;
   }
   while (!stylesx.startsWith(`${taiwanq}`)) {
      stylesx = `${2 >> (Math.min(2, Math.abs(libcxxcomponents7)))}`;
      break;
   }
       let mbbidg = false;
         mbbidg = !mbbidg && mbbidg;
       let footballfieldf = 5.0;
      let starN = 7744262.0 >= footballfieldf;
      do {
         footballfieldf -= (parseFloat(`${parseInt(`${footballfieldf}`) >> (Math.min(3, Math.abs((mbbidg ? 5 : 3))))}`));
         if (starN) {
            break;
         }
      } while ((footballfieldf >= 4.42) && starN);
      hiad8 += `${(dycreatorp == String.fromCharCode(115,0) ? dycreatorp.length : parseInt(`${sports7}`))}`;
   if (hiad8.length < 1) {
      taiwanq = (libzeus8.size ^ libcxxcomponents7) > 100;
   }
   let disconnectedc = sports7 >= 6558114.0;
   do {
      sports7 -= libmapbufferjniv.length;
      if (disconnectedc) {
         break;
      }
   } while (disconnectedc && ((4 | libzeus8.size) <= 4 && (4 & libzeus8.size) <= 2));
       let buildh = String.fromCharCode(113,117,97,100,114,95,120,95,52,52,0);
       let halffieldimageH: Array<any> = [159, 707, 310];
       let disconnectedlogoA = 0.0;
       let infot = true;
      if (!infot) {
         disconnectedlogoA -= (buildh.length & (infot ? 4 : 2));
      }
      let imagenetworkerr9 = infot ? !infot : infot;
      do {
         infot = (disconnectedlogoA - halffieldimageH.length) >= 35.96;
         if (imagenetworkerr9) {
            break;
         }
      } while (imagenetworkerr9 && (infot));
      let reactH = halffieldimageH.length >= 6189437;
      do {
         halffieldimageH.push((buildh == String.fromCharCode(51,0) ? buildh.length : (infot ? 2 : 2)));
         if (reactH) {
            break;
         }
      } while ((1 == (5 - halffieldimageH.length) && halffieldimageH.length == 5) && reactH);
      while (5.22 < (disconnectedlogoA - 3.79) && disconnectedlogoA < 3.79) {
         disconnectedlogoA /= Math.max(halffieldimageH.length, 2);
         break;
      }
      let indexE = 9255730.0 >= disconnectedlogoA;
      do {
         disconnectedlogoA /= Math.max(1, halffieldimageH.length | buildh.length);
         if (indexE) {
            break;
         }
      } while (indexE && (1.83 > disconnectedlogoA));
         disconnectedlogoA += parseInt(`${disconnectedlogoA}`) / (Math.max(2, halffieldimageH.length));
         infot = infot || buildh.length < 89;
      while (4.52 == (disconnectedlogoA * 2.88) || disconnectedlogoA == 2.88) {
         disconnectedlogoA -= buildh.length;
         break;
      }
      stylesx = "1";
       let lightI = true;
       let vipsportP = 4.0;
       let componentss: Map<any, any> = new Map([[String.fromCharCode(112,97,115,116,101,100,95,101,95,57,49,0),175], [String.fromCharCode(101,118,97,108,95,111,95,56,57,0),247], [String.fromCharCode(115,101,97,95,122,95,57,52,0),560]]);
      let webviewa = lightI ? !lightI : lightI;
      do {
         lightI = 35.7 <= vipsportP;
         if (webviewa) {
            break;
         }
      } while ((vipsportP <= 1.30) && webviewa);
         lightI = vipsportP >= 32.33;
      for (let s = 0; s < 1; s++) {
         vipsportP /= Math.max(((lightI ? 4 : 5) * parseInt(`${vipsportP}`)), 5);
      }
      while (3.41 >= (vipsportP - 4.51)) {
         vipsportP *= 1;
         break;
      }
      while (4.21 < vipsportP || (4.21 + vipsportP) < 4.35) {
         vipsportP -= parseInt(`${vipsportP}`) ^ 1;
         break;
      }
       let viewsw = String.fromCharCode(112,101,114,99,101,110,116,95,116,95,52,55,0);
       let grayM = String.fromCharCode(99,111,109,112,108,101,116,101,115,95,49,95,55,57,0);
      while (viewsw.length >= 3) {
         lightI = 38.19 < vipsportP && componentss.size < 94;
         break;
      }
      let modelsN = 6067265 >= componentss.size;
      do {
          let reactnativeultimatelistviewU = 1;
         componentss = new Map([[`${vipsportP}`, (grayM == String.fromCharCode(88,0) ? grayM.length : parseInt(`${vipsportP}`))]]);
         reactnativeultimatelistviewU += 2 & reactnativeultimatelistviewU;
         if (modelsN) {
            break;
         }
      } while (modelsN && (2 <= (componentss.size % (Math.max(2, 5))) && 4 <= (2 | componentss.size)));
         componentss = new Map([[`${componentss.size}`, 2 >> (Math.min(4, Math.abs(parseInt(`${vipsportP}`))))]]);
      libmapbufferjniv += `${1 - parseInt(`${sports7}`)}`;
   for (let u = 0; u < 3; u++) {
      imagenetworkerr_ = [parseInt(`${iconwatchnows}`) & libmapbufferjniv.length];
   }
      libmapbufferjniv = `${((taiwanq ? 3 : 4))}`;
      taiwanq = imagenetworkerr_.includes(libcxxcomponents7);
   for (let o = 0; o < 2; o++) {
       let s_positionJ: Array<any> = [String.fromCharCode(97,95,56,48,95,114,97,110,103,101,99,111,100,101,114,0), String.fromCharCode(122,95,49,55,95,99,111,110,102,105,114,109,97,116,105,111,110,115,0), String.fromCharCode(101,95,54,57,95,112,103,109,120,0)];
       let mbbidR = String.fromCharCode(119,95,56,54,95,118,105,115,105,116,0);
      for (let h = 0; h < 3; h++) {
         s_positionJ = [mbbidR.length + 3];
      }
          let e_managerZ: Array<any> = [952, 261, 651];
          let floater_ = String.fromCharCode(98,95,49,55,95,115,99,97,108,97,98,108,101,0);
          let attributedstringM = String.fromCharCode(115,102,114,97,109,101,95,106,95,57,52,0);
         s_positionJ = [2];
         e_managerZ = [attributedstringM.length];
         floater_ = `${floater_.length & e_managerZ.length}`;
         attributedstringM = `${floater_.length % (Math.max(7, e_managerZ.length))}`;
          let bellT: Array<any> = [514, 410, 799];
          let v_imager = 5;
          let libjsijniprofilere = false;
         mbbidR += `${mbbidR.length}`;
         bellT = [((libjsijniprofilere ? 2 : 1) / (Math.max(v_imager, 7)))];
         v_imager >>= Math.min(Math.abs(((libjsijniprofilere ? 4 : 2) * bellT.length)), 2);
      let sportZ = String.fromCharCode(113,53,100,0) == mbbidR;
      do {
         mbbidR += `${mbbidR.length ^ s_positionJ.length}`;
         if (sportZ) {
            break;
         }
      } while ((mbbidR.length >= s_positionJ.length) && sportZ);
      let penaltygoal5 = 7054547 <= mbbidR.length;
      do {
          let s_hashF: Array<any> = [182, 200, 222];
         mbbidR += "1";
         s_hashF.push(s_hashF.length ^ 1);
         if (penaltygoal5) {
            break;
         }
      } while (((3 * mbbidR.length) > 4 && (3 * mbbidR.length) > 4) && penaltygoal5);
         s_positionJ = [mbbidR.length & 2];
      libmapbufferjniv += `${hiad8.length}`;
   }
   let tempnodatagifh = String.fromCharCode(122,99,107,50,0) == stylesx;
   do {
      stylesx = `${2 >> (Math.min(2, libmapbufferjniv.length))}`;
      if (tempnodatagifh) {
         break;
      }
   } while ((stylesx.length <= hiad8.length) && tempnodatagifh);
      iconwatchnows -= parseFloat(`${parseInt(`${sports7}`)}`);
   if (!stationm.includes(`${full_}`)) {
      stationm = `${1 / (Math.max(parseInt(`${iconwatchnows}`), 3))}`;
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
      ({ item, index }: { item: wwPredictionarrowIncident; index: number }) => {
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
       let overK = 2.0;
    let matcheso = String.fromCharCode(122,95,55,57,95,109,115,115,100,115,112,0);
    let googler = 3.0;
    let iconuserr: Array<any> = [900, 855];
    let zhengpiang = String.fromCharCode(105,110,116,101,114,115,101,99,116,105,110,103,95,112,95,56,52,0);
    let pauseW: Map<any, any> = new Map([[String.fromCharCode(116,111,107,101,110,115,95,99,95,57,57,0),199], [String.fromCharCode(97,95,52,51,95,112,114,111,112,111,114,116,105,111,110,0),977], [String.fromCharCode(109,115,112,101,108,95,107,95,52,53,0),51]]);
    let mimon = 1.0;
    let nextP = String.fromCharCode(103,101,110,101,114,97,116,111,114,95,49,95,55,54,0);
    let bridgeH = false;
    let formS = 5.0;
    let orangeclocks = String.fromCharCode(102,95,56,53,95,114,101,100,115,112,97,114,107,0);
    let disconnectedlogoA = String.fromCharCode(114,111,116,97,116,105,111,110,97,110,103,108,101,95,54,95,49,55,0);
    let pangleA = String.fromCharCode(118,105,100,101,111,115,95,102,95,51,48,0);
    let iconsettingK: Array<any> = [190, 145, 676];
    let rncore0 = true;
    let hooksA = 3.0;
    let m_hash8 = 3;
   let previewi = mimon <= 9560911.0;
   do {
      mimon += parseFloat(`${parseInt(`${formS}`)}`);
      if (previewi) {
         break;
      }
   } while ((4.18 <= (parseFloat(`${iconuserr.length}`) * mimon) && (1 ^ iconuserr.length) <= 3) && previewi);
      orangeclocks += `${zhengpiang.length + 2}`;
   let modityx = 9211810 <= zhengpiang.length;
   do {
      zhengpiang = `${iconuserr.length & pauseW.size}`;
      if (modityx) {
         break;
      }
   } while (modityx && (nextP.length >= zhengpiang.length));
   let episodes2 = disconnectedlogoA == String.fromCharCode(53,103,55,98,0);
   do {
       let vignetteQ = 2.0;
       let str8 = 4.0;
      while (3.77 == (2.28 - str8) && (vignetteQ - 2.28) == 4.10) {
         vignetteQ -= parseFloat(`${parseInt(`${str8}`)}`);
         break;
      }
      if ((vignetteQ / (Math.max(9, str8))) == 3.63) {
          let baselinev = 3;
          let gifgoalw = true;
         vignetteQ += parseFloat(`${2 & parseInt(`${vignetteQ}`)}`);
         baselinev %= Math.max(5, baselinev);
         gifgoalw = baselinev > 49;
      }
         vignetteQ /= Math.max(parseFloat(`${2 % (Math.max(parseInt(`${vignetteQ}`), 2))}`), 5);
      if (1.89 > (3.69 * str8)) {
         str8 -= 1;
      }
      if ((vignetteQ * str8) <= 4.38 && (4.38 * vignetteQ) <= 5.75) {
         vignetteQ *= parseFloat(`${parseInt(`${str8}`) % (Math.max(parseInt(`${vignetteQ}`), 3))}`);
      }
         str8 *= 3;
      disconnectedlogoA += `${3 | matcheso.length}`;
      if (episodes2) {
         break;
      }
   } while (((2 >> (Math.min(1, disconnectedlogoA.length))) >= 3 && (disconnectedlogoA.length + parseInt(`${formS}`)) >= 2) && episodes2);
   if (zhengpiang != String.fromCharCode(57,0) && nextP.length <= 5) {
      nextP += "1";
   }
   if ((pauseW.size + 3) > 1 && (4.56 + mimon) > 3.84) {
      mimon /= Math.max((parseFloat(`${String.fromCharCode(84,0) == matcheso ? matcheso.length : (bridgeH ? 2 : 1)}`)), 4);
   }
      nextP = `${pauseW.size >> (Math.min(Math.abs(2), 1))}`;
      mimon /= Math.max(parseFloat(`${3}`), 1);
   if (disconnectedlogoA == String.fromCharCode(114,0) || matcheso.length > 4) {
      disconnectedlogoA = `${3 * disconnectedlogoA.length}`;
   }

      if (!wwBodan.fakeIsVip(userState.user) && !adultMode) {
        
      } else if (hasNextPage && !isFetchingNextPage && !isFetching) {

      overK += pauseW.size;
   for (let v = 0; v < 3; v++) {
      googler /= Math.max(2, 3);
   }
      formS += parseFloat(`${parseInt(`${formS}`)}`);
   let greyarrowupZ = googler >= 7983210.0;
   do {
       let form_ = String.fromCharCode(108,109,108,109,95,55,95,54,50,0);
       let eventsplashd = String.fromCharCode(118,95,51,57,95,98,101,115,116,0);
       let anythinku = false;
      for (let m = 0; m < 1; m++) {
         eventsplashd += "1";
      }
         form_ += `${form_.length}`;
         anythinku = !form_.endsWith(`${anythinku}`);
      if (eventsplashd.length >= 1) {
         anythinku = !form_.endsWith(`${anythinku}`);
      }
         eventsplashd += `${((anythinku ? 1 : 4))}`;
         eventsplashd = `${((anythinku ? 3 : 5))}`;
      while (form_.length == 1 || eventsplashd.length == 1) {
          let sportsB = 4;
          let tooltipsi: Map<any, any> = new Map([[String.fromCharCode(112,97,114,116,110,101,114,95,56,95,50,53,0),605], [String.fromCharCode(98,95,53,50,95,110,111,110,98,108,111,99,107,105,110,103,0),22]]);
          let flyerZ = String.fromCharCode(121,95,55,48,95,110,105,99,101,108,121,0);
          let iconsaveimage7 = String.fromCharCode(120,95,56,51,95,117,116,99,116,105,109,101,0);
          let smallP = String.fromCharCode(101,110,99,114,121,112,116,101,100,95,118,95,55,54,0);
         eventsplashd = `${3 | sportsB}`;
         sportsB /= Math.max(1, 3);
         tooltipsi = new Map([[iconsaveimage7, iconsaveimage7.length]]);
         flyerZ += `${flyerZ.length}`;
         smallP += `${1 | iconsaveimage7.length}`;
         break;
      }
      let componentN = form_ == String.fromCharCode(108,120,111,0);
      do {
          let typing2 = 2.0;
          let giftbuttonu = false;
          let resendk = false;
          let const_mp = false;
         form_ = `${((resendk ? 5 : 2))}`;
         typing2 += parseFloat(`${parseInt(`${typing2}`) ^ 2}`);
         giftbuttonu = (const_mp ? !giftbuttonu : const_mp);
         resendk = 39.65 > typing2;
         if (componentN) {
            break;
         }
      } while (componentN && (2 > eventsplashd.length));
         eventsplashd += `${form_.length & eventsplashd.length}`;
      googler /= Math.max(3, zhengpiang.length);
      if (greyarrowupZ) {
         break;
      }
   } while ((!iconuserr.includes(googler)) && greyarrowupZ);
      orangeclocks = `${(zhengpiang == String.fromCharCode(81,0) ? zhengpiang.length : parseInt(`${mimon}`))}`;
      iconsettingK = [iconuserr.length];
      matcheso = `${iconuserr.length * 2}`;
   let boots = formS <= 5616255.0;
   do {
      formS += (parseFloat(`${(bridgeH ? 3 : 1) / (Math.max(3, 5))}`));
      if (boots) {
         break;
      }
   } while ((4.10 < formS && 3.66 < (4.10 + formS)) && boots);
   if (formS >= 5.25) {
       let chartp = 5;
       let gpay8 = String.fromCharCode(115,97,102,101,95,104,95,52,51,0);
         chartp ^= gpay8.length;
      for (let b = 0; b < 2; b++) {
         gpay8 += "1";
      }
      for (let v = 0; v < 3; v++) {
          let fileS = 4;
          let downloadingh = 5.0;
          let typesI = String.fromCharCode(100,95,50,56,95,100,99,116,120,0);
          let volumez = false;
         chartp %= Math.max(chartp % 2, 4);
         fileS >>= Math.min(4, typesI.length);
         downloadingh /= Math.max((parseInt(`${downloadingh}`) + (volumez ? 1 : 5)), 1);
         typesI = `${typesI.length}`;
      }
       let promotion2 = 0.0;
       let searchbarv = 1.0;
         gpay8 += `${2 % (Math.max(1, chartp))}`;
         searchbarv -= parseFloat(`${gpay8.length - parseInt(`${promotion2}`)}`);
      iconsettingK = [(gpay8 == String.fromCharCode(113,0) ? pauseW.size : gpay8.length)];
   }
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
       let debugo = true;
    let with_a8P = 1.0;
    let cornerA: Map<any, any> = new Map([[String.fromCharCode(100,95,54,54,95,113,100,109,100,97,116,97,0),618], [String.fromCharCode(101,95,50,50,95,102,105,108,101,102,117,110,99,0),521]]);
    let libfabricjniR = 2;
    let selected_ = String.fromCharCode(105,95,55,95,115,110,97,112,112,121,0);
    let indexY: Map<any, any> = new Map([[String.fromCharCode(116,95,57,54,95,115,116,114,101,115,115,0),750], [String.fromCharCode(107,95,56,51,95,101,120,105,115,116,105,110,103,0),387]]);
    let merger8 = 4.0;
    let memberE = false;
    let policy6 = true;
    let weibo1 = String.fromCharCode(112,114,101,108,111,97,100,101,100,95,53,95,51,51,0);
    let frame_qf = String.fromCharCode(99,111,110,112,111,110,101,110,116,115,95,110,95,57,54,0);
    let jnewst = String.fromCharCode(113,95,49,57,95,115,101,114,105,97,108,105,122,105,110,103,0);
    let playercommons = 2.0;
    let heji6 = String.fromCharCode(117,116,118,105,100,101,111,100,115,112,95,113,95,51,55,0);
    let dependenciesg = false;
    let yellowD: Map<any, any> = new Map([[String.fromCharCode(113,95,50,54,95,109,99,108,109,115,0),923], [String.fromCharCode(116,104,114,101,97,100,105,110,103,95,108,95,54,55,0),90], [String.fromCharCode(117,95,53,95,97,100,100,114,101,115,115,101,115,0),263]]);
    let launcherv: Map<any, any> = new Map([[String.fromCharCode(109,97,112,95,117,95,54,51,0),true ], [String.fromCharCode(101,95,53,48,95,112,117,115,104,105,110,103,0),true ], [String.fromCharCode(100,105,118,105,100,111,114,115,95,50,95,54,52,0),true ]]);
   for (let r = 0; r < 3; r++) {
       let bufferv = String.fromCharCode(111,110,121,120,99,95,55,95,51,48,0);
       let headerw = String.fromCharCode(119,101,101,107,100,97,121,115,95,103,95,54,52,0);
       let chinasameT = 5.0;
       let iconnewsshareV = String.fromCharCode(115,99,97,108,105,110,103,95,56,95,57,56,0);
      for (let g = 0; g < 2; g++) {
          let thailandk: Map<any, any> = new Map([[String.fromCharCode(120,95,54,55,95,98,117,116,116,111,110,0),390], [String.fromCharCode(104,105,110,116,115,95,110,95,50,52,0),964]]);
          let adultH = 3.0;
          let borderlesss = String.fromCharCode(117,95,49,53,95,97,98,99,115,0);
          let shootyesgoal6 = 5.0;
          let modelss: Map<any, any> = new Map([[String.fromCharCode(110,101,119,108,105,110,101,115,95,116,95,56,0),919], [String.fromCharCode(118,95,57,54,95,114,101,99,101,105,118,101,100,0),550], [String.fromCharCode(119,95,53,57,95,99,111,109,112,97,114,101,114,115,0),309]]);
         chinasameT /= Math.max(2, parseFloat(`${parseInt(`${chinasameT}`)}`));
         thailandk = new Map([[`${adultH}`, 2 * parseInt(`${adultH}`)]]);
         borderlesss = `${parseInt(`${shootyesgoal6}`)}`;
         shootyesgoal6 += 3;
         modelss = new Map([[borderlesss, parseInt(`${shootyesgoal6}`) - 3]]);
      }
      while (headerw.length == 3 && bufferv == String.fromCharCode(114,0)) {
         headerw += `${bufferv.length}`;
         break;
      }
         headerw = `${(bufferv == String.fromCharCode(78,0) ? bufferv.length : iconnewsshareV.length)}`;
      if (5 == iconnewsshareV.length) {
         bufferv = `${bufferv.length ^ headerw.length}`;
      }
         bufferv += `${(headerw == String.fromCharCode(87,0) ? parseInt(`${chinasameT}`) : headerw.length)}`;
         headerw = `${headerw.length >> (Math.min(Math.abs(1), 4))}`;
      let downarrowE = 6481284.0 >= chinasameT;
      do {
         chinasameT /= Math.max(4, parseFloat(`${headerw.length}`));
         if (downarrowE) {
            break;
         }
      } while (downarrowE && (parseInt(`${chinasameT}`) < headerw.length));
      while (3.92 < (2.37 / (Math.max(8, chinasameT)))) {
         bufferv += `${bufferv.length + 3}`;
         break;
      }
         headerw = `${headerw.length ^ bufferv.length}`;
      if (bufferv == headerw) {
          let schedule7 = false;
          let ajaxM = 5.0;
          let jnewinterstitiali: Array<any> = [807, 863];
          let libfbjni6 = 4;
         headerw += `${parseInt(`${chinasameT}`)}`;
         schedule7 = schedule7 && libfbjni6 < 13;
         ajaxM *= parseFloat(`${libfbjni6}`);
         jnewinterstitiali = [jnewinterstitiali.length % (Math.max(1, 7))];
      }
         iconnewsshareV = `${bufferv.length}`;
      while (chinasameT > parseFloat(`${bufferv.length}`)) {
         chinasameT += parseFloat(`${1}`);
         break;
      }
      libfabricjniR *= 1;
   }
      cornerA.set(jnewst, parseInt(`${merger8}`) >> (Math.min(Math.abs(2), 3)));
   if (libfabricjniR == frame_qf.length) {
      libfabricjniR >>= Math.min(frame_qf.length, 3);
   }
      cornerA.set(`${policy6}`, (parseInt(`${merger8}`) >> (Math.min(2, Math.abs((policy6 ? 1 : 2))))));
   for (let p = 0; p < 3; p++) {
      debugo = policy6;
   }
      memberE = jnewst == frame_qf;
   while (2 >= (parseInt(`${playercommons}`) + selected_.length) && 2.97 >= (playercommons + 3.62)) {
      playercommons += 2 / (Math.max(5, weibo1.length));
      break;
   }
      libfabricjniR &= indexY.size;
   if (2 <= (indexY.size >> (Math.min(Math.abs(5), 3))) || (5 >> (Math.min(4, Math.abs(indexY.size)))) <= 3) {
       let back2 = 4.0;
       let submitb = 5.0;
       let combinex = 2.0;
       let large4 = 4;
      let defaultplayerimgU = 6130854.0 <= combinex;
      do {
          let backicono = 1.0;
         combinex -= parseFloat(`${1 / (Math.max(6, parseInt(`${backicono}`)))}`);
         if (defaultplayerimgU) {
            break;
         }
      } while ((large4 > combinex) && defaultplayerimgU);
      while (back2 == submitb) {
         back2 -= parseFloat(`${large4}`);
         break;
      }
         back2 *= parseFloat(`${2}`);
      let play4 = 7887490.0 >= combinex;
      do {
          let materialV = 0.0;
         combinex /= Math.max(3, parseFloat(`${2}`));
         materialV += parseFloat(`${3}`);
         if (play4) {
            break;
         }
      } while (play4 && (large4 <= 5));
         back2 *= parseFloat(`${parseInt(`${combinex}`)}`);
      for (let a = 0; a < 1; a++) {
         combinex *= parseFloat(`${3}`);
      }
       let libruntimeexecutorc: Map<any, any> = new Map([[String.fromCharCode(104,95,51,50,95,117,110,108,111,97,100,0),67], [String.fromCharCode(114,101,113,117,101,115,116,105,110,103,95,105,95,56,48,0),858]]);
       let navigationr: Map<any, any> = new Map([[String.fromCharCode(97,95,55,95,99,104,97,112,116,101,114,0),String.fromCharCode(97,116,116,114,97,99,116,111,114,95,117,95,56,51,0)], [String.fromCharCode(116,95,54,95,112,114,111,112,97,103,97,116,105,111,110,0),String.fromCharCode(97,95,56,57,95,109,106,112,101,103,0)]]);
         libruntimeexecutorc = new Map([[`${submitb}`, 1 & parseInt(`${combinex}`)]]);
         back2 -= parseFloat(`${parseInt(`${submitb}`)}`);
          let middlebrightnessC = 0.0;
          let imagenetworkerrL = String.fromCharCode(117,95,57,49,95,111,115,116,114,105,110,103,115,116,114,101,97,109,0);
          let sportsS = 4.0;
         navigationr.set(`${large4}`, 1 + large4);
         middlebrightnessC /= Math.max(3, imagenetworkerrL.length >> (Math.min(3, Math.abs(parseInt(`${middlebrightnessC}`)))));
         imagenetworkerrL = `${parseInt(`${sportsS}`) * 2}`;
         sportsS -= parseFloat(`${1}`);
         navigationr.set(`${combinex}`, 2 << (Math.min(4, Math.abs(parseInt(`${combinex}`)))));
         libruntimeexecutorc = new Map([[`${back2}`, parseInt(`${submitb}`)]]);
      indexY.set(jnewst, parseInt(`${back2}`));
   }

      setIsScrolling(false);

       let awayteamfieldO = 5.0;
      let androidV = awayteamfieldO <= 9425448.0;
      do {
          let codegenU = true;
          let typesj = 3.0;
          let eighteenN = 5;
          let miniy: Map<any, any> = new Map([[String.fromCharCode(100,120,116,97,95,110,95,49,48,0),557], [String.fromCharCode(106,117,115,116,105,102,105,99,97,116,105,111,110,95,57,95,57,0),361], [String.fromCharCode(102,108,101,120,105,98,108,101,95,121,95,49,56,0),649]]);
          let greyarrowupI: Map<any, any> = new Map([[String.fromCharCode(97,95,57,52,95,101,120,112,108,105,99,105,116,101,108,121,0),182], [String.fromCharCode(106,95,49,53,95,108,105,115,116,115,0),546]]);
         awayteamfieldO -= parseFloat(`${miniy.size << (Math.min(Math.abs(1), 2))}`);
         codegenU = (greyarrowupI.size / (Math.max(9, eighteenN))) <= 80;
         typesj += 2 & eighteenN;
         miniy = new Map([[`${typesj}`, (parseInt(`${typesj}`) >> (Math.min(4, Math.abs((codegenU ? 5 : 5)))))]]);
         greyarrowupI = new Map([[`${eighteenN}`, 1]]);
         if (androidV) {
            break;
         }
      } while ((2.4 == (awayteamfieldO - 5)) && androidV);
       let overlayt: Array<any> = [404, 218];
       let sheetr: Array<any> = [String.fromCharCode(114,101,115,105,122,97,98,108,101,95,105,95,55,54,0), String.fromCharCode(98,95,56,56,95,118,115,114,99,0), String.fromCharCode(115,95,54,95,102,111,110,116,115,0)];
      if ((sheetr.length * parseInt(`${awayteamfieldO}`)) < 5 && (sheetr.length & 5) < 5) {
         sheetr = [overlayt.length >> (Math.min(sheetr.length, 1))];
      }
      frame_qf += `${3 ^ parseInt(`${with_a8P}`)}`;
   if (1 > (parseInt(`${playercommons}`) * weibo1.length)) {
      playercommons += weibo1.length & 2;
   }
      frame_qf = "3";
       let mapbufferR: Array<any> = [352, 101, 300];
         mapbufferR = [mapbufferR.length];
      let iconeditG = 6881258 <= mapbufferR.length;
      do {
         mapbufferR = [mapbufferR.length];
         if (iconeditG) {
            break;
         }
      } while (iconeditG && (3 > (mapbufferR.length / (Math.max(2, 3)))));
      while (1 <= (mapbufferR.length & mapbufferR.length)) {
         mapbufferR = [mapbufferR.length];
         break;
      }
      merger8 += (parseFloat(`${2 - (memberE ? 1 : 1)}`));
   for (let c = 0; c < 1; c++) {
      playercommons /= Math.max(2, libfabricjniR);
   }
   if (5 < (parseInt(`${playercommons}`) + 2) && (playercommons + heji6.length) < 2.9) {
      playercommons /= Math.max(heji6.length, 5);
   }
   let stars = debugo ? !debugo : debugo;
   do {
       let controlsY = 0.0;
         controlsY += parseInt(`${controlsY}`) >> (Math.min(4, Math.abs(parseInt(`${controlsY}`))));
         controlsY /= Math.max(parseInt(`${controlsY}`), 4);
      let updatesK = controlsY <= 8213584.0;
      do {
          let libavcodecv: Array<any> = [126, 136, 4];
          let codegenT = String.fromCharCode(103,95,53,50,95,100,101,97,100,108,111,99,107,101,100,0);
         controlsY -= 3 >> (Math.min(1, codegenT.length));
         libavcodecv = [libavcodecv.length];
         codegenT = `${libavcodecv.length - 3}`;
         if (updatesK) {
            break;
         }
      } while (updatesK && ((controlsY * 4) < 4.35));
      debugo = 12 == jnewst.length;
      if (stars) {
         break;
      }
   } while ((2 == indexY.size || 4 == (2 + indexY.size)) && stars);
       let iconmores = false;
       let sansF: Map<any, any> = new Map([[String.fromCharCode(115,101,116,99,98,95,119,95,54,50,0),244], [String.fromCharCode(105,100,101,110,116,105,102,105,101,114,95,106,95,51,0),979], [String.fromCharCode(110,97,109,101,115,101,114,118,101,114,115,95,99,95,52,57,0),763]]);
       let h_hashJ = 1;
      let booty = 8098253 <= sansF.size;
      do {
         sansF = new Map([[`${sansF.size}`, h_hashJ]]);
         if (booty) {
            break;
         }
      } while ((h_hashJ <= sansF.size) && booty);
         sansF.set(`${iconmores}`, ((iconmores ? 1 : 5) & sansF.size));
      if (iconmores || 3 == (5 << (Math.min(4, Math.abs(h_hashJ))))) {
         iconmores = 99 >= sansF.size || 99 >= h_hashJ;
      }
          let libfbH = String.fromCharCode(116,114,97,105,108,101,114,95,103,95,56,48,0);
          let tooltipsX = 1;
          let currentY: Array<any> = [336, 721];
         h_hashJ *= ((iconmores ? 5 : 5) << (Math.min(Math.abs(2), 1)));
         libfbH = `${libfbH.length | 1}`;
         tooltipsX -= libfbH.length << (Math.min(Math.abs(1), 5));
         currentY = [2];
         h_hashJ *= ((iconmores ? 3 : 3) >> (Math.min(Math.abs(sansF.size), 5)));
         h_hashJ &= (sansF.size | (iconmores ? 4 : 2));
      for (let l = 0; l < 3; l++) {
         sansF.set(`${iconmores}`, 2);
      }
       let entryT = String.fromCharCode(112,107,112,107,101,121,95,57,95,51,55,0);
         entryT = `${sansF.size}`;
      weibo1 = `${sansF.size % 3}`;
   if (1.54 <= playercommons) {
      policy6 = 29 < heji6.length;
   }

      if (isFocus
        && Platform.OS !== 'ios'
        && !wwBodan.fakeIsLogin(userState.user)
        && !wwBodan.fakeIsVip(userState.user)
        && swipeCount.current >= MINI_SHOW_LOGIN_NUMBER
        && current >= MINI_SHOW_LOGIN_NUMBER
      ) {

      heji6 += "1";
      debugo = cornerA.size <= 22;
      libfabricjniR <<= Math.min(Math.abs(((memberE ? 3 : 3) ^ parseInt(`${with_a8P}`))), 1);
   for (let z = 0; z < 1; z++) {
      playercommons *= 1;
   }
      heji6 += `${(jnewst == String.fromCharCode(109,0) ? selected_.length : jnewst.length)}`;
   let router6 = debugo ? !debugo : debugo;
   do {
      debugo = 1.16 == with_a8P && !policy6;
      if (router6) {
         break;
      }
   } while (router6 && (!frame_qf.includes(`${debugo}`)));
   if (!weibo1.startsWith(`${indexY.size}`)) {
      indexY = new Map([[heji6, 1 + heji6.length]]);
   }
       let untickI = String.fromCharCode(100,115,116,115,117,98,95,112,95,52,51,0);
       let whatsappJ: Map<any, any> = new Map([[String.fromCharCode(111,118,101,114,114,105,100,100,101,110,95,115,95,52,53,0),822], [String.fromCharCode(99,95,57,55,95,102,117,110,99,116,105,111,110,0),503]]);
       let currentf = false;
      while (currentf) {
          let logousern = 3;
          let constantsz: Map<any, any> = new Map([[String.fromCharCode(115,97,109,105,95,107,95,55,51,0),546], [String.fromCharCode(111,95,51,51,95,117,110,112,105,110,0),171], [String.fromCharCode(114,101,115,99,104,101,100,117,108,101,95,105,95,49,48,0),661]]);
          let eventsplashg = false;
         untickI = "3";
         logousern %= Math.max(3 | logousern, 4);
         constantsz.set(`${eventsplashg}`, constantsz.size);
         break;
      }
         currentf = ((whatsappJ.size ^ (!currentf ? whatsappJ.size : 44)) <= 67);
      for (let u = 0; u < 2; u++) {
          let libhermesT = String.fromCharCode(102,95,51,57,95,116,105,108,101,104,100,114,0);
          let pointw = String.fromCharCode(97,117,116,104,101,110,116,105,99,97,116,101,95,103,95,57,50,0);
         whatsappJ.set(libhermesT, whatsappJ.size & libhermesT.length);
         pointw = `${(String.fromCharCode(90,0) == pointw ? pointw.length : pointw.length)}`;
      }
          let away7 = 5.0;
         whatsappJ = new Map([[`${currentf}`, parseInt(`${away7}`) * 1]]);
         currentf = (18 <= ((currentf ? whatsappJ.size : 25) * whatsappJ.size));
          let ajaxB: Array<any> = [160, 699];
         untickI = "3";
         ajaxB.push(ajaxB.length | 1);
      if (!untickI.endsWith(`${whatsappJ.size}`)) {
         untickI = `${(3 + (currentf ? 5 : 1))}`;
      }
         untickI += "1";
          let nextN = String.fromCharCode(105,110,99,114,101,97,115,105,110,103,95,49,95,53,53,0);
         whatsappJ.set(untickI, untickI.length << (Math.min(Math.abs(1), 3)));
         nextN = `${nextN.length ^ nextN.length}`;
      merger8 /= Math.max(2, parseFloat(`${whatsappJ.size}`));
      with_a8P -= frame_qf.length & libfabricjniR;
        dispatch(showLoginAction());
      }
    }, [userState.user, current, isFocus]);

    useEffect(() => {
      if (wwBodan.fakeIsLogin(userState.user) || wwBodan.fakeIsVip(userState.user)) return;

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
                wwBodan.fakeIsVip(userState.user) ?
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
