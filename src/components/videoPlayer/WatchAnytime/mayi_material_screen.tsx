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
import ShortVod from './mayi_service';
import { mayi_Small } from '@type/mayi_green';
import FastImage from '../../common/mayi_slider';

import { useAppDispatch, useAppSelector, useSelector } from '@hooks/mayi_redirect';
import mayi_push from '../../../../Umeng/mayi_push';
import { showAdultModeVip, showLoginAction } from '@redux/actions/mayi_iconorientation_chatroombackground';
import { screenModel } from '@type/mayi_libfolly_inouttargetred';
import { ADULT_MODE_PREVIEW_DURATION, MINI_SHOW_LOGIN_NUMBER } from '@utility/mayi_middleware_apps';
import ShortAds from './mayi_reactnativejs';
import { mayi_Baseline } from '@redux/reducers/mayi_chatroombackground_unlock';
import { mayi_Gift } from '@models/mayi_libjsinspector';
import { AdultVipPrivilegeOverlay } from './../../modal/mayi_hash_image';
import BecomeVipOverlay from "./../../modal/mayi_apps";

interface mayi_GoogleViews {
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

type mayi_CountQuest = {
  setPause: (pause: boolean) => void;
};

const homeLoadingGif = require('@static/images/backgroundTwitterNode.gif');
const loadingSpinnerGif = require('@static/images/robotoNetwork.gif');

export default forwardRef<mayi_CountQuest, mayi_GoogleViews>(
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
    }: mayi_GoogleViews,
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
    const userState = useSelector<mayi_Baseline>('userReducer');
    const swipeCount = useRef(0);
    const {
      adultModeDisclaimerShow,
      adultModeVipShow,
      adultVideoWatchTime,
      
      watchAnytimeAdultMode: adultMode, 
    } = screenState;
    const isVip = mayi_Gift.isVip(userState.user);
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

        mayi_push.watchAnytimeVideoViewTimesAnalytics({
          userId: userState.user?.userId ?? '',
          vod_id: collectionPartialVideos[0].mini_video_id,
          isXmode: adultMode,
        });
      }
      
    }, [collectionPartialVideos]);

    useEffect(() => {
      if (current > curAnalyticsIndex && current < collectionPartialVideos.length) {
        setCurAnalyticsIndex(current);

        mayi_push.watchAnytimeVideoViewTimesAnalytics({
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
       let trophyS = String.fromCharCode(116,105,109,101,115,0);
    let philippinesh = String.fromCharCode(114,101,113,117,101,115,116,101,114,0);
    let circlez = String.fromCharCode(119,101,98,99,97,109,0);
    let rootD = String.fromCharCode(102,105,108,101,0);
    let sinak = 2.0;
    let codek = String.fromCharCode(97,117,116,111,112,108,97,121,105,110,103,0);
    let bodanB = String.fromCharCode(112,97,114,109,115,0);
    let emojiL = 0.0;
    let stationO = String.fromCharCode(111,112,97,116,111,109,0);
    let libfilex = String.fromCharCode(99,111,117,110,116,115,0);
    let pauseC = String.fromCharCode(99,111,108,108,105,115,116,0);
    let promotionG = 3;
    let leaguedetailsbgf = 4.0;
   for (let i = 0; i < 2; i++) {
      philippinesh += `${(rootD == String.fromCharCode(114,0) ? rootD.length : philippinesh.length)}`;
   }
   while ((1.1 + emojiL) == 5.29 && (libfilex.length / (Math.max(4, 6))) == 3) {
      libfilex = `${1 % (Math.max(10, circlez.length))}`;
      break;
   }
   let libavcodecP = philippinesh == String.fromCharCode(49,110,51,107,112,112,107,122,55,0);
   do {
       let favicon2 = 1.0;
       let bangA = String.fromCharCode(116,101,109,112,115,0);
       let predictiondefaultU = 0.0;
         bangA = `${bangA.length * 3}`;
          let cricket8 = 4.0;
         favicon2 += (String.fromCharCode(101,0) == bangA ? parseInt(`${favicon2}`) : bangA.length);
         cricket8 += 3 - parseInt(`${cricket8}`);
         bangA = `${parseInt(`${predictiondefaultU}`)}`;
      while (4 <= (bangA.length ^ 5) || (parseInt(`${predictiondefaultU}`) + bangA.length) <= 5) {
          let mountingH: Map<any, any> = new Map([[String.fromCharCode(100,98,112,97,103,101,0),170], [String.fromCharCode(114,101,105,110,115,101,114,116,0),256], [String.fromCharCode(114,101,99,116,97,110,103,117,108,97,114,0),289]]);
          let entryv = String.fromCharCode(115,97,116,117,114,97,116,101,0);
         predictiondefaultU /= Math.max(5, 3 >> (Math.min(3, bangA.length)));
         mountingH.set(entryv, 1);
         entryv += `${entryv.length}`;
         break;
      }
      for (let a = 0; a < 2; a++) {
         favicon2 *= 1 | bangA.length;
      }
      if ((favicon2 + 1.52) >= 4.11 || (favicon2 + bangA.length) >= 1.52) {
         favicon2 -= 2;
      }
      while ((parseInt(`${predictiondefaultU}`) / (Math.max(bangA.length, 10))) >= 3 || (parseInt(`${predictiondefaultU}`) / (Math.max(bangA.length, 6))) >= 3) {
         predictiondefaultU /= Math.max(5, parseInt(`${favicon2}`) + bangA.length);
         break;
      }
         favicon2 += parseInt(`${predictiondefaultU}`);
          let moreD = String.fromCharCode(104,97,100,0);
          let readK = 1.0;
          let defaultprofilepicw = String.fromCharCode(110,115,117,112,112,111,114,116,101,100,0);
         favicon2 += 2;
         moreD = `${moreD.length}`;
         readK /= Math.max(1, 1 & defaultprofilepicw.length);
         defaultprofilepicw = `${defaultprofilepicw.length}`;
      philippinesh += `${bangA.length}`;
      if (libavcodecP) {
         break;
      }
   } while ((!circlez.includes(philippinesh)) && libavcodecP);
      trophyS += `${parseInt(`${emojiL}`) * 3}`;
   if (rootD == String.fromCharCode(109,0)) {
      trophyS = `${parseInt(`${sinak}`)}`;
   }
       let scoreW = 3;
       let teamdetailsbgN = 5.0;
       let orangedownarrowZ: Map<any, any> = new Map([[String.fromCharCode(115,112,111,110,115,111,114,101,100,0),245], [String.fromCharCode(119,114,105,116,101,108,111,99,107,0),822], [String.fromCharCode(97,112,112,114,111,118,101,114,0),24]]);
       let promotionq: Map<any, any> = new Map([[String.fromCharCode(114,101,100,100,105,116,0),721], [String.fromCharCode(97,108,112,110,0),674]]);
          let completeb: Map<any, any> = new Map([[String.fromCharCode(109,101,116,114,105,99,0),700], [String.fromCharCode(105,110,100,105,118,105,100,117,97,108,0),290], [String.fromCharCode(99,111,109,109,101,110,116,115,0),550]]);
          let umengC = 5;
         orangedownarrowZ = new Map([[`${promotionq.size}`, 3 & promotionq.size]]);
         completeb = new Map([[`${completeb.size}`, 3 * completeb.size]]);
         umengC *= completeb.size >> (Math.min(5, Math.abs(umengC)));
      while ((promotionq.size >> (Math.min(5, Math.abs(orangedownarrowZ.size)))) > 1 || (1 >> (Math.min(3, Math.abs(orangedownarrowZ.size)))) > 1) {
          let notificationf: Array<any> = [202, 274];
          let libreactnativejnit = 5.0;
         promotionq = new Map([[`${teamdetailsbgN}`, parseInt(`${teamdetailsbgN}`) - scoreW]]);
         notificationf = [3 + notificationf.length];
         libreactnativejnit += parseFloat(`${notificationf.length}`);
         break;
      }
      while ((scoreW & 5) == 2) {
         orangedownarrowZ = new Map([[`${orangedownarrowZ.size}`, 1]]);
         break;
      }
         scoreW <<= Math.min(Math.abs(3), 3);
         scoreW /= Math.max(promotionq.size, 1);
      trophyS = `${parseInt(`${sinak}`) << (Math.min(codek.length, 1))}`;
   if (rootD != philippinesh) {
      philippinesh += `${circlez.length}`;
   }
       let stringO = String.fromCharCode(108,111,103,100,98,0);
         stringO += `${stringO.length * 1}`;
      for (let u = 0; u < 3; u++) {
         stringO += `${stringO.length & stringO.length}`;
      }
          let liveM: Array<any> = [708, 567];
          let teamD = String.fromCharCode(99,104,111,111,115,101,0);
         stringO += `${liveM.length % (Math.max(3, 9))}`;
         liveM = [2];
         teamD = `${teamD.length >> (Math.min(Math.abs(2), 4))}`;
      circlez += `${stringO.length & codek.length}`;
   if (trophyS.includes(`${rootD.length}`)) {
       let injurys: Map<any, any> = new Map([[String.fromCharCode(112,117,116,115,0),416], [String.fromCharCode(102,97,105,108,0),915], [String.fromCharCode(112,101,114,115,111,110,0),526]]);
       let searchU: Map<any, any> = new Map([[String.fromCharCode(99,111,100,101,114,0),563], [String.fromCharCode(111,102,102,115,0),180]]);
       let shirtb = String.fromCharCode(115,101,115,115,105,111,110,115,0);
      while ((shirtb.length + injurys.size) > 5 || 4 > (5 + injurys.size)) {
         injurys.set(`${searchU.size}`, searchU.size / 3);
         break;
      }
         searchU = new Map([[`${injurys.size}`, searchU.size / 1]]);
         injurys = new Map([[`${injurys.size}`, injurys.size + 3]]);
          let ticki = 5.0;
          let soundm = 0.0;
         injurys.set(`${shirtb}`, 2);
         ticki += parseFloat(`${1}`);
         soundm /= Math.max(parseFloat(`${parseInt(`${ticki}`)}`), 4);
          let member6: Map<any, any> = new Map([[String.fromCharCode(99,111,117,110,116,0),false ], [String.fromCharCode(108,111,103,105,115,116,105,99,0),false ]]);
          let optionst = 5.0;
         searchU.set(`${optionst}`, 1);
         member6.set(`${member6.size}`, 1 | member6.size);
         optionst += parseFloat(`${member6.size}`);
       let statisticsinactivew = 4.0;
      let materialI = shirtb == String.fromCharCode(117,103,99,53,52,101,0);
      do {
          let libmapbufferjni3 = String.fromCharCode(98,117,114,110,0);
          let specZ = 1.0;
          let currentY = String.fromCharCode(97,114,116,105,99,108,101,0);
          let gmailf: Map<any, any> = new Map([[String.fromCharCode(105,110,116,116,121,112,101,115,0),345], [String.fromCharCode(99,108,111,115,105,110,103,0),926], [String.fromCharCode(122,101,114,111,101,115,0),724]]);
          let libbufferp = String.fromCharCode(101,120,116,114,97,99,102,103,0);
         shirtb += `${parseInt(`${statisticsinactivew}`)}`;
         libmapbufferjni3 += `${3 >> (Math.min(1, libmapbufferjni3.length))}`;
         specZ /= Math.max(2, libbufferp.length << (Math.min(Math.abs(1), 3)));
         currentY += `${libmapbufferjni3.length / 3}`;
         gmailf = new Map([[libbufferp, libbufferp.length & libmapbufferjni3.length]]);
         if (materialI) {
            break;
         }
      } while ((parseInt(`${statisticsinactivew}`) == shirtb.length) && materialI);
       let chatroombackgroundE: Map<any, any> = new Map([[String.fromCharCode(112,114,105,118,97,116,101,0),String.fromCharCode(105,116,101,109,0)], [String.fromCharCode(101,116,105,109,101,0),String.fromCharCode(116,101,114,109,105,110,97,108,0)]]);
         statisticsinactivew /= Math.max(parseFloat(`${chatroombackgroundE.size | injurys.size}`), 5);
      trophyS = `${1 | searchU.size}`;
   }
      philippinesh = `${bodanB.length * codek.length}`;
   if (!rootD.endsWith(circlez)) {
      rootD += "2";
   }
      trophyS = "3";
      trophyS += `${rootD.length}`;
   for (let h = 0; h < 3; h++) {
       let membero: Array<any> = [321, 157];
         membero = [2];
          let vietnamZ = 2.0;
          let guideZ: Map<any, any> = new Map([[String.fromCharCode(115,122,97,98,111,0),14], [String.fromCharCode(111,98,106,99,0),360]]);
          let redscoreball2 = 0;
         membero.push(guideZ.size + 1);
         vietnamZ *= parseFloat(`${redscoreball2 >> (Math.min(Math.abs(parseInt(`${vietnamZ}`)), 5))}`);
         guideZ = new Map([[`${vietnamZ}`, 1]]);
         redscoreball2 %= Math.max(4, redscoreball2);
         membero.push(1);
      libfilex = `${circlez.length}`;
   }
   while (!stationO.endsWith(`${circlez.length}`)) {
      stationO = `${parseInt(`${sinak}`) % (Math.max(bodanB.length, 2))}`;
      break;
   }
   if (sinak < 3.56) {
       let edit0 = String.fromCharCode(99,115,119,97,112,0);
       let countdownT = String.fromCharCode(99,111,110,116,114,111,108,115,0);
       let detail1 = String.fromCharCode(99,108,97,105,109,115,0);
       let zoome = String.fromCharCode(100,115,117,98,101,120,112,0);
      let window_mzn = 8899546 <= countdownT.length;
      do {
          let iconwatchk = String.fromCharCode(99,111,110,116,101,120,116,112,114,111,102,105,108,101,108,101,118,101,108,0);
         countdownT = `${edit0.length}`;
         iconwatchk = `${1 + iconwatchk.length}`;
         if (window_mzn) {
            break;
         }
      } while (window_mzn && (!edit0.startsWith(`${countdownT.length}`)));
          let form0 = false;
         zoome = `${countdownT.length}`;
         form0 = (form0 ? !form0 : form0);
      while (zoome != detail1) {
          let pnewsC = 2;
          let tick5 = String.fromCharCode(118,108,98,117,102,0);
          let n_titlem: Map<any, any> = new Map([[String.fromCharCode(109,101,100,105,97,110,0),500], [String.fromCharCode(99,111,109,112,97,114,101,0),834], [String.fromCharCode(119,104,105,116,101,115,112,97,99,101,115,0),810]]);
         detail1 = `${detail1.length}`;
         pnewsC >>= Math.min(3, Math.abs(n_titlem.size));
         tick5 = "1";
         n_titlem = new Map([[`${n_titlem.size}`, (tick5 == String.fromCharCode(106,0) ? n_titlem.size : tick5.length)]]);
         break;
      }
      for (let j = 0; j < 2; j++) {
         edit0 += "2";
      }
      while (edit0.includes(`${detail1.length}`)) {
         detail1 = `${zoome.length & 3}`;
         break;
      }
      let yellowZ = detail1.length >= 8896446;
      do {
         detail1 = `${(String.fromCharCode(102,0) == zoome ? zoome.length : edit0.length)}`;
         if (yellowZ) {
            break;
         }
      } while (yellowZ && (zoome == String.fromCharCode(118,0) || detail1 != String.fromCharCode(71,0)));
      if (countdownT.length < 5) {
         detail1 = `${zoome.length}`;
      }
      for (let b = 0; b < 3; b++) {
         detail1 = `${detail1.length / (Math.max(9, zoome.length))}`;
      }
         detail1 += "2";
         countdownT += `${edit0.length >> (Math.min(Math.abs(3), 4))}`;
         countdownT += `${detail1.length}`;
      for (let z = 0; z < 1; z++) {
          let mountingB = 2;
          let iconnotificationnewB = String.fromCharCode(115,117,98,114,97,110,103,101,115,0);
          let stylesq: Array<any> = [285, 374, 294];
         edit0 = `${1 / (Math.max(8, countdownT.length))}`;
         mountingB &= 1;
         iconnotificationnewB += `${3 + stylesq.length}`;
         stylesq.push((String.fromCharCode(81,0) == iconnotificationnewB ? iconnotificationnewB.length : mountingB));
      }
      pauseC = "3";
   }
   for (let d = 0; d < 2; d++) {
      stationO = `${libfilex.length / (Math.max(2, 8))}`;
   }
      libfilex += `${(String.fromCharCode(68,0) == trophyS ? trophyS.length : stationO.length)}`;
   for (let h = 0; h < 3; h++) {
      rootD += `${3 << (Math.min(4, codek.length))}`;
   }
       let libreactperfloggerjniS = String.fromCharCode(108,97,117,110,99,104,0);
       let network3: Array<any> = [410, 818, 674];
         libreactperfloggerjniS += `${network3.length - libreactperfloggerjniS.length}`;
         libreactperfloggerjniS += `${libreactperfloggerjniS.length}`;
         libreactperfloggerjniS = `${network3.length + libreactperfloggerjniS.length}`;
          let iconmorem = 2.0;
          let reactnativeultimatelistviewB: Map<any, any> = new Map([[String.fromCharCode(103,101,111,108,111,99,97,116,105,111,110,0),false ], [String.fromCharCode(109,105,112,115,102,112,117,0),false ]]);
         network3 = [libreactperfloggerjniS.length * 3];
         iconmorem -= parseFloat(`${parseInt(`${iconmorem}`)}`);
         reactnativeultimatelistviewB.set(`${iconmorem}`, parseInt(`${iconmorem}`) % (Math.max(3, reactnativeultimatelistviewB.size)));
      if (5 < (network3.length >> (Math.min(libreactperfloggerjniS.length, 2))) || 2 < (5 >> (Math.min(4, libreactperfloggerjniS.length)))) {
          let penaltyM = true;
          let emptyV = String.fromCharCode(102,114,111,110,116,115,105,100,101,0);
          let animationd = String.fromCharCode(108,105,110,107,0);
          let policy9 = 2.0;
         network3.push(network3.length);
         penaltyM = emptyV.length >= 87;
         emptyV = `${parseInt(`${policy9}`)}`;
         animationd = `${(String.fromCharCode(106,0) == animationd ? parseInt(`${policy9}`) : animationd.length)}`;
      }
      for (let z = 0; z < 2; z++) {
         network3 = [2];
      }
      promotionG %= Math.max(2, (libreactperfloggerjniS == String.fromCharCode(112,0) ? libreactperfloggerjniS.length : bodanB.length));
   let loadingK = 6940026.0 >= sinak;
   do {
      sinak -= parseFloat(`${2}`);
      if (loadingK) {
         break;
      }
   } while ((3.28 < (sinak * parseFloat(`${pauseC.length}`))) && loadingK);
   let minit_1m = 7980904.0 >= sinak;
   do {
      sinak /= Math.max(parseFloat(`${2 - parseInt(`${sinak}`)}`), 1);
      if (minit_1m) {
         break;
      }
   } while (minit_1m && (2.75 < sinak));

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
      ({ item, index }: { item: mayi_Small; index: number }) => {
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
       let predictionactivei = String.fromCharCode(115,118,101,99,116,111,114,0);
    let event9 = String.fromCharCode(118,97,100,107,104,122,0);
    let castt = 1;
    let interstitial6 = String.fromCharCode(116,114,105,101,0);
    let charto = String.fromCharCode(98,111,114,100,101,114,115,0);
    let iconmoreK = 3;
    let acopy_48O = true;
    let libfbjni9 = 1.0;
    let nende = 0.0;
    let infoL = true;
    let unimplementedviewa = 2;
       let weiboZ = String.fromCharCode(117,110,97,108,105,103,110,0);
       let reactnativeratingsi: Map<any, any> = new Map([[String.fromCharCode(115,116,97,99,107,116,114,97,99,101,0),480], [String.fromCharCode(97,108,103,111,0),12]]);
      while (reactnativeratingsi.size <= weiboZ.length) {
         weiboZ = `${weiboZ.length % (Math.max(8, reactnativeratingsi.size))}`;
         break;
      }
         reactnativeratingsi = new Map([[`${reactnativeratingsi.size}`, reactnativeratingsi.size << (Math.min(Math.abs(1), 3))]]);
          let scorepopsound5: Array<any> = [String.fromCharCode(114,101,112,114,111,99,101,115,115,0), String.fromCharCode(111,110,121,120,0)];
          let liveM = 3.0;
         reactnativeratingsi = new Map([[`${reactnativeratingsi.size}`, reactnativeratingsi.size / (Math.max(weiboZ.length, 7))]]);
         scorepopsound5.push(parseInt(`${liveM}`) ^ 1);
         liveM += parseFloat(`${parseInt(`${liveM}`)}`);
          let cnewinterstitial7: Map<any, any> = new Map([[String.fromCharCode(110,111,97,108,108,111,99,0),506], [String.fromCharCode(112,111,108,121,107,101,121,0),543]]);
          let resultD = 2.0;
          let downloaded0 = String.fromCharCode(116,114,97,110,115,102,101,114,114,105,110,103,0);
         weiboZ = `${cnewinterstitial7.size}`;
         cnewinterstitial7.set(downloaded0, downloaded0.length);
         resultD -= (parseFloat(`${downloaded0 == String.fromCharCode(76,0) ? downloaded0.length : parseInt(`${resultD}`)}`));
         weiboZ += `${reactnativeratingsi.size | weiboZ.length}`;
         reactnativeratingsi.set(weiboZ, weiboZ.length);
      iconmoreK <<= Math.min(5, Math.abs(parseInt(`${libfbjni9}`)));
       let detailQ: Map<any, any> = new Map([[String.fromCharCode(105,110,100,101,112,101,110,100,101,110,116,0),String.fromCharCode(99,97,108,101,110,100,97,114,0)], [String.fromCharCode(97,116,99,104,101,114,0),String.fromCharCode(98,114,101,97,107,0)]]);
      if (detailQ.size > 3) {
         detailQ = new Map([[`${detailQ.size}`, 2 + detailQ.size]]);
      }
      while (!Array.from(detailQ.values()).includes(detailQ.size)) {
          let questa: Array<any> = [893, 877];
          let mbnativeA: Map<any, any> = new Map([[String.fromCharCode(121,117,118,99,111,110,102,105,103,105,109,97,103,101,0),true ], [String.fromCharCode(99,111,109,112,117,116,101,0),false ]]);
          let imagenetworkerrS = String.fromCharCode(98,100,115,0);
         detailQ = new Map([[`${questa.length}`, (String.fromCharCode(90,0) == imagenetworkerrS ? questa.length : imagenetworkerrS.length)]]);
         mbnativeA = new Map([[`${mbnativeA.size}`, mbnativeA.size]]);
         break;
      }
       let cancelR = 0.0;
      interstitial6 += `${3 / (Math.max(1, detailQ.size))}`;
   if (!interstitial6.endsWith(`${iconmoreK}`)) {
      interstitial6 += `${castt * predictionactivei.length}`;
   }
   while ((iconmoreK * 2) >= 2 && 2 >= (event9.length * iconmoreK)) {
      iconmoreK >>= Math.min(1, Math.abs(3 | charto.length));
      break;
   }
   for (let a = 0; a < 1; a++) {
      predictionactivei = `${3 ^ castt}`;
   }
   if (!acopy_48O) {
      charto += "1";
   }

      if (!isVip && !adultMode) {
        
      } else if (hasNextPage && !isFetchingNextPage && !isFetching) {

       let dependencyN = 0.0;
       let basketballawayteamE: Map<any, any> = new Map([[String.fromCharCode(97,98,115,120,0),String.fromCharCode(99,97,110,99,101,108,0)], [String.fromCharCode(97,105,110,116,0),String.fromCharCode(114,101,108,101,97,115,101,100,0)], [String.fromCharCode(100,105,118,105,115,105,111,110,0),String.fromCharCode(97,98,115,100,105,102,102,0)]]);
         dependencyN /= Math.max(2, basketballawayteamE.size & 1);
      for (let o = 0; o < 2; o++) {
          let buttonP = true;
          let promotiono: Array<any> = [String.fromCharCode(102,114,97,109,101,114,0), String.fromCharCode(108,108,118,105,100,101,110,99,100,115,112,0), String.fromCharCode(116,104,114,111,116,116,108,105,110,103,0)];
          let detailsj = String.fromCharCode(114,101,109,117,120,101,114,0);
          let fastW = 2.0;
         dependencyN /= Math.max(5, parseInt(`${fastW}`) >> (Math.min(1, Math.abs(2))));
         buttonP = !buttonP;
         promotiono.push(3 - promotiono.length);
         detailsj += `${detailsj.length + promotiono.length}`;
         fastW += (String.fromCharCode(90,0) == detailsj ? (buttonP ? 5 : 2) : detailsj.length);
      }
      for (let i = 0; i < 1; i++) {
          let agreementb = String.fromCharCode(119,109,97,112,114,111,0);
          let vietnamX: Array<any> = [142, 509, 846];
          let sigmobQ = 3.0;
          let iconnewssharel = 1.0;
         dependencyN *= parseInt(`${sigmobQ}`);
         agreementb += `${agreementb.length}`;
         vietnamX = [3];
         sigmobQ *= parseFloat(`${3 >> (Math.min(1, vietnamX.length))}`);
         iconnewssharel *= parseInt(`${iconnewssharel}`);
      }
         basketballawayteamE.set(`${dependencyN}`, parseInt(`${dependencyN}`));
      for (let n = 0; n < 3; n++) {
         dependencyN /= Math.max(parseInt(`${dependencyN}`), 5);
      }
         basketballawayteamE = new Map([[`${basketballawayteamE.size}`, basketballawayteamE.size & parseInt(`${dependencyN}`)]]);
      libfbjni9 -= parseInt(`${libfbjni9}`);
   for (let u = 0; u < 2; u++) {
      interstitial6 += `${charto.length / (Math.max(2, interstitial6.length))}`;
   }
      acopy_48O = interstitial6.length >= charto.length;
   while (5.31 > libfbjni9) {
      acopy_48O = libfbjni9 <= 49.38 && castt <= 34;
      break;
   }
   let paginationP = 8998124.0 <= nende;
   do {
      nende += parseInt(`${libfbjni9}`) / 1;
      if (paginationP) {
         break;
      }
   } while ((!interstitial6.includes(`${nende}`)) && paginationP);
   while (event9.length <= 4 || predictionactivei.length <= 4) {
      event9 += `${predictionactivei.length - parseInt(`${libfbjni9}`)}`;
      break;
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
       let green8 = String.fromCharCode(104,108,105,110,101,0);
    let singlef = String.fromCharCode(115,104,111,114,116,102,108,111,97,116,0);
    let iconshareJ = 5.0;
    let uimanagery = 1.0;
    let updatesV = String.fromCharCode(105,112,112,108,101,0);
    let darkY = 4.0;
    let yellowtoredf: Array<any> = [581, 767, 102];
    let internetS = 4.0;
    let logouserz: Map<any, any> = new Map([[String.fromCharCode(98,117,114,115,116,121,0),true ], [String.fromCharCode(111,117,112,117,116,0),true ], [String.fromCharCode(109,112,101,103,100,97,116,97,0),false ]]);
    let libbufferk = false;
    let point9 = String.fromCharCode(114,101,115,116,97,107,101,0);
    let stringN = String.fromCharCode(98,101,104,97,118,105,111,117,114,0);
      yellowtoredf = [1 % (Math.max(4, yellowtoredf.length))];
   while (4 == (4 % (Math.max(10, yellowtoredf.length))) || (yellowtoredf.length % (Math.max(green8.length, 1))) == 4) {
       let cornerP: Map<any, any> = new Map([[String.fromCharCode(118,102,108,97,103,0),String.fromCharCode(114,97,100,97,114,0)], [String.fromCharCode(105,110,116,101,108,0),String.fromCharCode(112,105,99,107,109,111,100,101,0)], [String.fromCharCode(116,104,101,110,97,98,108,101,0),String.fromCharCode(109,97,105,110,110,101,116,115,0)]]);
       let langkeyX = 3.0;
       let libfbjnip = 4.0;
       let refreshX = String.fromCharCode(110,111,105,110,100,101,120,0);
         refreshX = `${refreshX.length}`;
         libfbjnip /= Math.max(1, cornerP.size << (Math.min(Math.abs(1), 2)));
      while (langkeyX > 5.100) {
         langkeyX *= parseInt(`${langkeyX}`) / (Math.max(cornerP.size, 6));
         break;
      }
      let activityH = 8169644.0 >= langkeyX;
      do {
          let bgvipxvodS = 5;
          let selectedJ: Array<any> = [185, 911, 735];
          let latnX = String.fromCharCode(114,101,110,111,114,109,101,0);
          let dependenciesy = String.fromCharCode(103,101,111,112,111,108,121,0);
          let libreanimatedG = 1.0;
         langkeyX /= Math.max(1, selectedJ.length + latnX.length);
         bgvipxvodS >>= Math.min(Math.abs(dependenciesy.length << (Math.min(5, Math.abs(bgvipxvodS)))), 2);
         selectedJ = [3];
         latnX = `${dependenciesy.length ^ 1}`;
         libreanimatedG += dependenciesy.length ^ bgvipxvodS;
         if (activityH) {
            break;
         }
      } while (((3.71 - langkeyX) < 4.100 || (3.71 - libfbjnip) < 3.21) && activityH);
      if ((5.81 + libfbjnip) <= 1.80 && 2 <= (4 >> (Math.min(3, Math.abs(cornerP.size))))) {
          let pingm = String.fromCharCode(116,119,101,97,107,0);
          let temp2 = 2.0;
         cornerP = new Map([[pingm, parseInt(`${libfbjnip}`)]]);
         pingm = "2";
         temp2 /= Math.max(5, parseFloat(`${parseInt(`${temp2}`) * 3}`));
      }
          let refreshborderlessa = String.fromCharCode(110,101,119,108,121,0);
          let themeQ = String.fromCharCode(117,114,108,100,101,99,111,100,101,0);
          let confirmationJ = 4;
         refreshX += `${parseInt(`${langkeyX}`) & cornerP.size}`;
         refreshborderlessa = `${themeQ.length >> (Math.min(4, Math.abs(confirmationJ)))}`;
         themeQ = `${confirmationJ}`;
      let darkX = cornerP.size >= 6739199;
      do {
         cornerP = new Map([[`${langkeyX}`, parseInt(`${langkeyX}`)]]);
         if (darkX) {
            break;
         }
      } while (darkX && (1.46 >= libfbjnip));
       let encrypts: Array<any> = [867, 676, 784];
       let animationS: Array<any> = [467, 216, 464];
       let history_ = String.fromCharCode(114,101,102,105,110,101,0);
         refreshX = `${animationS.length}`;
         langkeyX += refreshX.length;
       let whitevideoliveN: Array<any> = [678, 452];
      green8 += `${parseInt(`${iconshareJ}`) * 1}`;
      break;
   }
       let mimoo: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,114,97,99,116,105,111,110,0),235], [String.fromCharCode(118,111,114,98,105,115,99,111,109,109,101,110,116,0),642]]);
      if (4 <= (5 / (Math.max(5, mimoo.size)))) {
         mimoo.set(`${mimoo.size}`, mimoo.size);
      }
      while (1 < (2 * mimoo.size) || (mimoo.size * 2) < 2) {
         mimoo.set(`${mimoo.size}`, mimoo.size);
         break;
      }
         mimoo.set(`${mimoo.size}`, mimoo.size & mimoo.size);
      updatesV += `${parseInt(`${iconshareJ}`)}`;
      singlef = `${1 + green8.length}`;
   if (3.74 >= (1.42 * internetS)) {
      internetS *= (singlef == String.fromCharCode(100,0) ? singlef.length : parseInt(`${internetS}`));
   }
   let downloadingG = uimanagery <= 8220141.0;
   do {
      uimanagery -= parseInt(`${darkY}`) + 3;
      if (downloadingG) {
         break;
      }
   } while (downloadingG && ((2.47 + internetS) <= 4.80 || 4.53 <= (internetS + 2.47)));

      setIsScrolling(false);

      updatesV += `${parseInt(`${iconshareJ}`)}`;
   while (!green8.includes(`${iconshareJ}`)) {
       let libbufferQ = true;
       let calendarE = String.fromCharCode(115,113,108,105,116,101,115,101,115,115,105,111,110,0);
       let gesturesy = 0.0;
      while (!libbufferQ) {
         gesturesy -= parseFloat(`${calendarE.length}`);
         break;
      }
         calendarE = "1";
         calendarE = "3";
          let libavfilterL: Array<any> = [968, 822, 403];
         gesturesy /= Math.max(parseFloat(`${calendarE.length % (Math.max(2, 8))}`), 4);
         libavfilterL = [libavfilterL.length];
      let subinP = libbufferQ ? !libbufferQ : libbufferQ;
      do {
         libbufferQ = calendarE.length <= 47 && libbufferQ;
         if (subinP) {
            break;
         }
      } while ((!libbufferQ) && subinP);
         libbufferQ = (calendarE.length - parseInt(`${gesturesy}`)) < 76;
      if ((gesturesy / 5.61) >= 1.29 && 5.61 >= (gesturesy / (Math.max(parseFloat(`${calendarE.length}`), 8)))) {
         calendarE += `${calendarE.length}`;
      }
         calendarE = `${calendarE.length - 3}`;
         libbufferQ = parseFloat(`${calendarE.length}`) > gesturesy;
      iconshareJ *= parseFloat(`${yellowtoredf.length * parseInt(`${iconshareJ}`)}`);
      break;
   }
   for (let x = 0; x < 3; x++) {
      singlef += `${yellowtoredf.length | parseInt(`${darkY}`)}`;
   }
       let basketballmatchdetailbge = 3;
      if (basketballmatchdetailbge > basketballmatchdetailbge) {
         basketballmatchdetailbge >>= Math.min(4, Math.abs(basketballmatchdetailbge));
      }
         basketballmatchdetailbge ^= basketballmatchdetailbge;
      while (5 <= (basketballmatchdetailbge << (Math.min(Math.abs(3), 5)))) {
         basketballmatchdetailbge <<= Math.min(1, Math.abs(1));
         break;
      }
      darkY -= parseFloat(`${parseInt(`${iconshareJ}`) << (Math.min(5, Math.abs(basketballmatchdetailbge)))}`);
      iconshareJ *= parseFloat(`${parseInt(`${darkY}`)}`);
   if (1.13 > (darkY * parseFloat(`${green8.length}`))) {
      darkY /= Math.max(parseFloat(`${2}`), 4);
   }

      if (isFocus
        && Platform.OS !== 'ios'
        && mayi_Gift.isGuest(userState.user)
        && !mayi_Gift.isVip(userState.user)
        && swipeCount.current >= MINI_SHOW_LOGIN_NUMBER
        && current >= MINI_SHOW_LOGIN_NUMBER
      ) {

   let actionsO = internetS >= 5914639.0;
   do {
      internetS += parseInt(`${iconshareJ}`);
      if (actionsO) {
         break;
      }
   } while (actionsO && (iconshareJ <= internetS));
   for (let u = 0; u < 3; u++) {
      uimanagery *= updatesV.length * parseInt(`${internetS}`);
   }
   for (let m = 0; m < 3; m++) {
       let splash1 = 4.0;
       let questM = 5;
       let playo = 1;
       let boot4 = 1;
      while ((questM - splash1) < 3.16) {
         questM ^= boot4;
         break;
      }
      let dialogu = questM >= 9152081;
      do {
          let fillQ = String.fromCharCode(109,97,114,107,105,110,103,0);
          let attributedstringy: Array<any> = [566, 708, 56];
          let profileactiveZ = String.fromCharCode(97,116,116,114,105,98,115,0);
          let catalogL: Map<any, any> = new Map([[String.fromCharCode(114,101,97,100,105,110,0),162], [String.fromCharCode(115,97,109,101,113,0),971]]);
          let popupT = String.fromCharCode(105,99,101,0);
         questM >>= Math.min(4, Math.abs(parseInt(`${splash1}`)));
         fillQ += `${popupT.length >> (Math.min(3, fillQ.length))}`;
         attributedstringy.push(1 & profileactiveZ.length);
         profileactiveZ = `${profileactiveZ.length}`;
         catalogL = new Map([[`${attributedstringy.length}`, (String.fromCharCode(83,0) == profileactiveZ ? profileactiveZ.length : attributedstringy.length)]]);
         popupT += `${catalogL.size << (Math.min(popupT.length, 4))}`;
         if (dialogu) {
            break;
         }
      } while (dialogu && (2.20 == (splash1 - 4.6) && 2 == (questM >> (Math.min(Math.abs(2), 5)))));
      for (let h = 0; h < 2; h++) {
         playo /= Math.max(parseInt(`${splash1}`) / 3, 1);
      }
       let friends_ = String.fromCharCode(101,121,99,104,97,105,110,0);
       let orangedownarrowO = String.fromCharCode(105,110,116,101,114,112,111,108,97,116,105,111,110,0);
      while (orangedownarrowO != String.fromCharCode(67,0)) {
          let with_bj = 1;
          let securityI = String.fromCharCode(116,119,105,110,118,113,0);
         friends_ = `${parseInt(`${splash1}`)}`;
         with_bj *= 2;
         securityI += `${securityI.length / 2}`;
         break;
      }
       let specN = true;
       let with_wg6: Array<any> = [789, 747];
      if (3 >= (5 * questM) || !specN) {
          let arrowrightwithtail6 = String.fromCharCode(104,112,101,108,100,115,112,0);
          let defaultplayerimgA = String.fromCharCode(116,114,117,101,104,100,0);
          let whatsappL = String.fromCharCode(114,110,110,111,105,115,101,0);
          let iconsharefriendse = String.fromCharCode(109,112,106,112,101,103,0);
          let videovarw = 2.0;
         specN = (whatsappL.length << (Math.min(arrowrightwithtail6.length, 4))) > 78;
         arrowrightwithtail6 = `${(String.fromCharCode(122,0) == iconsharefriendse ? parseInt(`${videovarw}`) : iconsharefriendse.length)}`;
         defaultplayerimgA += `${defaultplayerimgA.length - iconsharefriendse.length}`;
         whatsappL += `${iconsharefriendse.length}`;
         videovarw /= Math.max(2, iconsharefriendse.length);
      }
         specN = with_wg6.length <= boot4;
      let downloadingU = specN ? !specN : specN;
      do {
         specN = with_wg6.includes(specN);
         if (downloadingU) {
            break;
         }
      } while (downloadingU && (5 == playo));
       let i_positionT = 3.0;
       let libswresampleB = 4.0;
         playo %= Math.max(3 & parseInt(`${libswresampleB}`), 5);
      darkY -= parseFloat(`${2 >> (Math.min(3, Math.abs(parseInt(`${splash1}`))))}`);
   }
      internetS *= green8.length;
   let type_sD = iconshareJ <= 9277625.0;
   do {
      iconshareJ *= parseFloat(`${green8.length * parseInt(`${darkY}`)}`);
      if (type_sD) {
         break;
      }
   } while ((!Array.from(logouserz.keys()).includes(`${iconshareJ}`)) && type_sD);
       let rocket9 = 1.0;
       let profilepicl = 4;
         rocket9 /= Math.max(profilepicl % (Math.max(parseInt(`${rocket9}`), 7)), 2);
      let giftbutton5 = rocket9 <= 8992847.0;
      do {
         rocket9 *= 3 - profilepicl;
         if (giftbutton5) {
            break;
         }
      } while ((rocket9 >= 3.65) && giftbutton5);
          let iconcalendarz = false;
         profilepicl *= parseInt(`${rocket9}`) | 1;
         iconcalendarz = (!iconcalendarz ? iconcalendarz : !iconcalendarz);
       let libavfilterz = 0.0;
       let dplusf = 4.0;
      while (5.30 < rocket9) {
          let benefit6 = String.fromCharCode(100,111,101,115,0);
          let macauU = String.fromCharCode(109,97,105,110,102,117,110,99,0);
         rocket9 *= 2 << (Math.min(Math.abs(profilepicl), 1));
         benefit6 += `${benefit6.length}`;
         macauU += `${benefit6.length % 2}`;
         break;
      }
      iconshareJ += parseFloat(`${profilepicl}`);
        dispatch(showLoginAction());
      }
    }, [userState.user, current, isFocus]);

    useEffect(() => {
      if (mayi_Gift.isLogin(userState.user) || mayi_Gift.isVip(userState.user)) return;

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
