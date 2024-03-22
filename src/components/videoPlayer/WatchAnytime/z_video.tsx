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
import ShortVod from './xr_settings';
import { DSplash } from '@type/wpk_long';
import FastImage from '../../common/gwi_with';

import { useAppDispatch, useAppSelector, useSelector } from '@hooks/kg_index';
import umb_center_carousel from '../../../../Umeng/umb_center_carousel';
import { showAdultModeVip, showLoginAction } from '@redux/actions/a_switch';
import { screenModel } from '@type/nb_shared_target';
import { ADULT_MODE_PREVIEW_DURATION, MINI_SHOW_LOGIN_NUMBER } from '@utility/n_subs_interstitial';
import ShortAds from './qh_buffer';
import { HDTGesturesList } from '@redux/reducers/f_gmail';
import { KWConstants } from '@models/kl_sheet';
import { AdultVipPrivilegeOverlay } from './../../modal/tu_group_change';
import BecomeVipOverlay from "./../../modal/pg_buffer_alert";

interface XFillButton {
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

type MConstantsClock = {
  setPause: (pause: boolean) => void;
};

const homeLoadingGif = require('@static/images/hongkongBottom.gif');
const loadingSpinnerGif = require('@static/images/settingsGrayZhengpian.gif');

export default forwardRef<MConstantsClock, XFillButton>(
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
    }: XFillButton,
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
    const userState = useSelector<HDTGesturesList>('userReducer');
    const swipeCount = useRef(0);
    const {
      adultModeDisclaimerShow,
      adultModeVipShow,
      adultVideoWatchTime,
      
      watchAnytimeAdultMode: adultMode, 
    } = screenState;
    const isVip = KWConstants.isVip(userState.user);
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

        umb_center_carousel.watchAnytimeVideoViewTimesAnalytics({
          userId: userState.user?.userId ?? '',
          vod_id: collectionPartialVideos[0].mini_video_id,
          isXmode: adultMode,
        });
      }
      
    }, [collectionPartialVideos]);

    useEffect(() => {
      if (current > curAnalyticsIndex && current < collectionPartialVideos.length) {
        setCurAnalyticsIndex(current);

        umb_center_carousel.watchAnytimeVideoViewTimesAnalytics({
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
       let viewsn = String.fromCharCode(104,95,51,53,95,102,102,118,108,0);
    let mappingX = 2.0;
    let appsM = String.fromCharCode(112,114,111,116,111,99,111,108,115,95,101,95,55,52,0);
    let lightE = String.fromCharCode(116,95,50,51,95,112,117,116,98,121,116,101,0);
    let whiteQ = String.fromCharCode(101,95,55,95,108,111,103,108,101,118,101,108,0);
    let nalytics_ = 2.0;
    let auto_0f5 = String.fromCharCode(109,95,56,55,95,108,105,115,116,101,110,101,114,115,0);
    let typesh = 4.0;
    let related7 = 1.0;
    let savev: Array<any> = [214, 76];
    let countdownz = 0;
    let firebasep = 4.0;
    let suggestionI = true;
    let upgradeU: Array<any> = [254, 859, 525];
   while ((lightE.length ^ 2) <= 1 || (1.14 * typesh) <= 3.90) {
       let umenge = 4.0;
       let frame_r_: Array<any> = [String.fromCharCode(116,97,114,103,101,116,95,106,95,51,57,0), String.fromCharCode(112,114,111,102,105,108,101,95,111,95,51,55,0), String.fromCharCode(103,95,56,48,95,109,97,115,116,101,114,0)];
         umenge /= Math.max(1, parseFloat(`${frame_r_.length - parseInt(`${umenge}`)}`));
          let tooltipsv: Array<any> = [954, 490, 586];
          let progressg: Map<any, any> = new Map([[String.fromCharCode(121,95,49,51,95,112,114,101,115,101,108,101,99,116,0),630], [String.fromCharCode(100,101,100,117,112,101,95,53,95,50,56,0),435], [String.fromCharCode(112,117,116,110,117,109,112,97,115,115,101,115,95,102,95,57,56,0),455]]);
          let v_titley = String.fromCharCode(120,95,57,57,95,115,99,114,111,108,108,101,100,0);
         umenge /= Math.max(parseFloat(`${1}`), 5);
         tooltipsv = [(String.fromCharCode(101,0) == v_titley ? progressg.size : v_titley.length)];
         progressg.set(`${tooltipsv.length}`, progressg.size * 1);
      let infol = frame_r_.length >= 8871474;
      do {
         frame_r_.push(3 / (Math.max(parseInt(`${umenge}`), 2)));
         if (infol) {
            break;
         }
      } while ((1 > frame_r_.length) && infol);
         frame_r_ = [2 / (Math.max(parseInt(`${umenge}`), 2))];
      for (let r = 0; r < 2; r++) {
         umenge -= parseFloat(`${1 + frame_r_.length}`);
      }
      let otherT = umenge >= 7386340.0;
      do {
          let plashN = 2.0;
          let cornerM = 2.0;
         umenge /= Math.max(5, parseFloat(`${parseInt(`${cornerM}`)}`));
         plashN *= 1 ^ parseInt(`${plashN}`);
         cornerM /= Math.max(parseInt(`${plashN}`), 3);
         if (otherT) {
            break;
         }
      } while ((!frame_r_.includes(umenge)) && otherT);
      lightE = `${appsM.length}`;
      break;
   }
   for (let j = 0; j < 1; j++) {
       let paginationp = false;
       let resendX = 4.0;
       let frame_ig = 5.0;
       let modityv = String.fromCharCode(118,95,54,55,0);
          let textw = String.fromCharCode(112,114,101,118,111,117,115,95,56,95,51,55,0);
         frame_ig += textw.length;
      while ((resendX - 4.60) == 4.83 && paginationp) {
          let thailandM = String.fromCharCode(121,95,57,55,95,104,101,97,100,101,114,115,0);
          let shareF = 1.0;
          let zhengpianp = 5.0;
          let const_6bM = 2.0;
          let refreshw = String.fromCharCode(101,95,54,49,95,114,101,111,115,0);
         resendX -= parseFloat(`${3}`);
         thailandM = `${2 - parseInt(`${zhengpianp}`)}`;
         shareF *= (parseFloat(`${thailandM == String.fromCharCode(55,0) ? thailandM.length : parseInt(`${const_6bM}`)}`));
         zhengpianp /= Math.max(thailandM.length ^ parseInt(`${const_6bM}`), 1);
         refreshw = `${thailandM.length << (Math.min(1, Math.abs(parseInt(`${zhengpianp}`))))}`;
         break;
      }
         frame_ig += 2;
          let ranko = 0.0;
          let catalog5: Map<any, any> = new Map([[String.fromCharCode(105,95,51,49,95,101,120,97,99,116,0),796], [String.fromCharCode(115,117,98,115,116,105,116,117,116,101,100,95,107,95,53,51,0),123], [String.fromCharCode(104,99,104,97,99,104,97,95,121,95,52,54,0),133]]);
          let renewX = true;
         resendX /= Math.max((parseFloat(`${parseInt(`${resendX}`) * (paginationp ? 2 : 3)}`)), 3);
         ranko -= parseFloat(`${3 & catalog5.size}`);
         catalog5.set(`${renewX}`, 2);
      while (resendX >= parseFloat(`${modityv.length}`)) {
         modityv = `${modityv.length}`;
         break;
      }
       let applef = 4;
       let singaporeT = 2.0;
       let chatN = 3.0;
         chatN -= (parseFloat(`${String.fromCharCode(104,0) == modityv ? (paginationp ? 1 : 5) : modityv.length}`));
         resendX += parseFloat(`${modityv.length * applef}`);
          let bodanV = String.fromCharCode(106,95,51,54,95,112,111,108,121,115,116,97,114,0);
          let product3 = 5;
         chatN /= Math.max(parseFloat(`${bodanV.length & 2}`), 3);
         bodanV += `${product3}`;
      while (!paginationp) {
         singaporeT -= (parseFloat(`${(paginationp ? 2 : 1) | parseInt(`${chatN}`)}`));
         break;
      }
      while (4 <= (3 << (Math.min(5, Math.abs(applef)))) || 1.98 <= (singaporeT - 4.35)) {
         applef |= modityv.length;
         break;
      }
      whiteQ = `${3 ^ parseInt(`${nalytics_}`)}`;
   }
   let photoI = 5619486.0 <= related7;
   do {
      related7 -= auto_0f5.length - 1;
      if (photoI) {
         break;
      }
   } while (((related7 * 4.100) <= 2.69 && (related7 * savev.length) <= 4.100) && photoI);
      typesh *= 3 + auto_0f5.length;
   let googlei = viewsn == String.fromCharCode(117,121,115,0);
   do {
      viewsn += `${parseInt(`${related7}`)}`;
      if (googlei) {
         break;
      }
   } while (googlei && (countdownz <= 3));
   for (let k = 0; k < 1; k++) {
      typesh -= (String.fromCharCode(89,0) == auto_0f5 ? parseInt(`${nalytics_}`) : auto_0f5.length);
   }
      nalytics_ /= Math.max(savev.length, 5);
   while (4.73 > (countdownz * nalytics_) && 2.36 > (4.73 * nalytics_)) {
      nalytics_ += 2 >> (Math.min(4, auto_0f5.length));
      break;
   }
       let link2: Array<any> = [462, 661];
       let indicatorA: Array<any> = [909, 730, 211];
       let hooke = 0;
      for (let w = 0; w < 3; w++) {
          let register_3I = String.fromCharCode(101,109,98,101,100,95,52,95,54,53,0);
         hooke /= Math.max(indicatorA.length, 2);
         register_3I = `${register_3I.length - 2}`;
      }
      let common3 = link2.length >= 7914594;
      do {
         link2.push(3);
         if (common3) {
            break;
         }
      } while (common3 && (1 >= (hooke + 5)));
       let episodesM = String.fromCharCode(110,116,112,95,55,95,54,53,0);
      let arrows = 8914277 >= hooke;
      do {
         hooke ^= 1;
         if (arrows) {
            break;
         }
      } while ((5 >= episodesM.length) && arrows);
         indicatorA = [2];
          let moreT = String.fromCharCode(116,95,56,57,95,115,111,110,105,99,0);
          let configM = String.fromCharCode(104,95,52,95,110,105,110,101,0);
          let native5 = String.fromCharCode(108,95,53,54,95,100,101,109,111,116,101,0);
         episodesM += "1";
         moreT = `${native5.length % 2}`;
         configM += `${configM.length % (Math.max(native5.length, 1))}`;
      if (hooke <= 1) {
         hooke %= Math.max(episodesM.length % 3, 2);
      }
          let bannerA = 2.0;
         episodesM = `${episodesM.length - link2.length}`;
         bannerA /= Math.max(parseInt(`${bannerA}`) % 3, 4);
      if (!link2.includes(hooke)) {
         link2 = [link2.length >> (Math.min(Math.abs(3), 5))];
      }
      whiteQ += "1";
      whiteQ = `${parseInt(`${nalytics_}`)}`;
      typesh += parseInt(`${nalytics_}`) + 3;
      mappingX -= 3;
       let gemfilev: Map<any, any> = new Map([[String.fromCharCode(104,95,53,53,95,99,111,109,112,97,116,0),243], [String.fromCharCode(110,97,118,105,103,97,116,101,95,50,95,51,53,0),5]]);
       let action0 = String.fromCharCode(115,121,115,108,111,103,95,98,95,54,55,0);
       let singled: Map<any, any> = new Map([[String.fromCharCode(114,101,99,111,114,100,105,110,103,95,99,95,54,50,0),String.fromCharCode(97,95,55,56,95,118,100,97,116,97,0)], [String.fromCharCode(122,95,57,56,95,110,101,99,101,115,115,97,114,121,0),String.fromCharCode(115,110,110,105,100,95,51,95,56,0)], [String.fromCharCode(111,112,101,110,95,108,95,57,51,0),String.fromCharCode(121,95,55,48,95,99,111,110,100,105,116,105,111,110,97,108,0)]]);
      for (let r = 0; r < 1; r++) {
          let recommendationy = String.fromCharCode(114,95,56,95,109,97,114,107,101,100,0);
          let checkbox2 = 5;
          let miniM = String.fromCharCode(97,95,50,55,95,100,101,99,111,114,97,116,101,0);
         gemfilev.set(recommendationy, 3 - recommendationy.length);
         checkbox2 -= checkbox2 ^ 1;
         miniM += `${2 - miniM.length}`;
      }
      related7 *= viewsn.length / 2;
      typesh -= savev.length;
   let membershipf = String.fromCharCode(118,55,106,97,50,50,0) == lightE;
   do {
      lightE += `${parseInt(`${firebasep}`)}`;
      if (membershipf) {
         break;
      }
   } while (membershipf && (lightE.startsWith(`${auto_0f5.length}`)));
      savev.push(appsM.length);
       let combineE: Map<any, any> = new Map([[String.fromCharCode(105,95,56,54,95,114,101,115,121,110,99,0),542], [String.fromCharCode(108,95,50,51,95,112,97,103,101,99,111,117,110,116,0),436]]);
       let typing9 = 0.0;
         typing9 /= Math.max(parseFloat(`${combineE.size % (Math.max(2, 2))}`), 2);
      let routerh = 7200346.0 <= typing9;
      do {
         typing9 += parseFloat(`${1}`);
         if (routerh) {
            break;
         }
      } while (routerh && (parseFloat(`${combineE.size}`) < typing9));
      auto_0f5 += `${parseInt(`${firebasep}`) % 3}`;
      lightE += `${parseInt(`${mappingX}`) % (Math.max(parseInt(`${nalytics_}`), 1))}`;
      related7 -= 1 | viewsn.length;
   if (viewsn.length > 3) {
      mappingX -= countdownz;
   }
       let foundr = String.fromCharCode(97,95,57,51,95,101,110,99,111,100,101,109,118,0);
      for (let g = 0; g < 3; g++) {
         foundr = `${foundr.length * foundr.length}`;
      }
      for (let u = 0; u < 3; u++) {
         foundr = `${(String.fromCharCode(70,0) == foundr ? foundr.length : foundr.length)}`;
      }
      let singaporeF = 8920669 <= foundr.length;
      do {
          let selectionv = 3.0;
          let formo = true;
          let statsH = String.fromCharCode(109,97,116,105,99,95,122,95,50,50,0);
          let turnI = String.fromCharCode(113,108,111,103,115,95,99,95,55,54,0);
          let const_8ay = false;
         foundr = `${turnI.length}`;
         selectionv -= statsH.length;
         formo = !const_8ay && formo;
         statsH = `${2 & parseInt(`${selectionv}`)}`;
         turnI += `${(String.fromCharCode(50,0) == statsH ? parseInt(`${selectionv}`) : statsH.length)}`;
         const_8ay = statsH.length >= 95 && const_8ay;
         if (singaporeF) {
            break;
         }
      } while ((foundr != String.fromCharCode(81,0)) && singaporeF);
      mappingX -= appsM.length;
      lightE += "3";
       let pingQ = 5.0;
       let entryz = String.fromCharCode(107,95,56,56,95,108,101,110,103,116,104,115,0);
       let temperaturee = false;
          let whatsappz = String.fromCharCode(102,95,51,53,95,111,98,106,116,120,116,0);
          let spinnerY = false;
          let constants8 = 4;
         pingQ -= parseFloat(`${whatsappz.length + 2}`);
         whatsappz = "3 * constants8";
         spinnerY = !spinnerY;
         constants8 /= Math.max(constants8, 5);
          let resultQ: Array<any> = [977, 994];
         temperaturee = entryz.includes(`${pingQ}`);
         resultQ = [resultQ.length | 1];
          let foundC = String.fromCharCode(102,95,55,51,95,121,117,118,112,116,111,121,117,121,0);
          let penaltyY = 2.0;
          let membershipX: Array<any> = [419, 703, 247];
         pingQ /= Math.max(1, parseFloat(`${2 | parseInt(`${pingQ}`)}`));
         foundC += `${foundC.length}`;
         penaltyY += parseFloat(`${2 ^ parseInt(`${penaltyY}`)}`);
         membershipX = [2];
       let k_centerL = String.fromCharCode(122,95,56,57,95,117,114,118,101,0);
       let trophy2 = String.fromCharCode(122,95,53,54,95,98,117,102,102,101,114,113,117,101,117,101,0);
      while (5 < entryz.length || temperaturee) {
         entryz += `${3 - parseInt(`${pingQ}`)}`;
         break;
      }
         entryz = `${parseInt(`${pingQ}`) << (Math.min(2, Math.abs(2)))}`;
      if (trophy2.length > 3) {
         k_centerL += `${trophy2.length + entryz.length}`;
      }
      if (!temperaturee) {
          let castingd = 0.0;
         temperaturee = entryz.length > 27 || castingd > 48.73;
      }
      nalytics_ /= Math.max(1, viewsn.length / 1);
   if (suggestionI && 4.19 == (4.47 * mappingX)) {
      suggestionI = typesh <= nalytics_;
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
      ({ item, index }: { item: DSplash; index: number }) => {
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
       let renews = 4.0;
    let whistlep = true;
    let const_2sz = 0.0;
    let volumeL: Map<any, any> = new Map([[String.fromCharCode(110,101,97,114,101,114,95,104,95,51,50,0),String.fromCharCode(119,95,52,56,95,115,104,111,114,116,101,110,0)], [String.fromCharCode(112,111,112,117,112,95,105,95,56,51,0),String.fromCharCode(108,95,52,48,95,101,102,102,101,99,116,115,0)]]);
    let suggestion7 = true;
    let bottomG = String.fromCharCode(120,95,53,52,95,102,108,101,120,102,101,99,0);
    let hejiN = String.fromCharCode(117,95,52,50,95,115,101,116,115,0);
    let anner3 = 5.0;
    let refresh0: Map<any, any> = new Map([[String.fromCharCode(102,95,55,52,95,102,108,111,97,116,115,104,111,114,116,0),63], [String.fromCharCode(117,95,55,48,95,97,118,100,101,118,105,99,101,114,101,115,0),931]]);
    let historyt = 2.0;
    let vietnamn: Map<any, any> = new Map([[String.fromCharCode(120,95,49,56,95,101,114,108,101,0),102], [String.fromCharCode(110,95,49,50,95,100,101,105,110,116,101,114,108,97,99,101,0),510]]);
    let guidem = String.fromCharCode(108,105,98,120,109,108,95,57,95,57,52,0);
   let containero = hejiN.length >= 8348445;
   do {
      hejiN += `${((whistlep ? 3 : 3) >> (Math.min(Math.abs(2), 1)))}`;
      if (containero) {
         break;
      }
   } while (containero && (4 < (volumeL.size ^ 1) && (volumeL.size ^ hejiN.length) < 1));
      renews += volumeL.size / (Math.max(2, 6));
       let sportsD = String.fromCharCode(99,104,114,111,109,97,109,99,95,104,95,50,51,0);
       let sliderV = String.fromCharCode(116,95,53,49,95,116,105,108,101,104,100,114,0);
          let floater8 = String.fromCharCode(121,95,53,51,95,109,111,99,107,105,110,103,0);
          let googlee = true;
         sportsD += `${sportsD.length | 1}`;
         floater8 = `${(1 & (googlee ? 1 : 4))}`;
         googlee = !googlee;
         sliderV = `${sportsD.length % (Math.max(7, sliderV.length))}`;
         sliderV = `${sliderV.length << (Math.min(4, sportsD.length))}`;
         sportsD = `${sportsD.length}`;
      while (sliderV.length == 4 || sportsD == String.fromCharCode(77,0)) {
         sportsD = `${sliderV.length}`;
         break;
      }
       let china1 = String.fromCharCode(99,104,101,99,107,95,105,95,50,56,0);
       let hookP = String.fromCharCode(113,95,50,54,95,117,110,105,110,105,116,0);
      const_2sz += parseFloat(`${sliderV.length}`);
   let backwards = bottomG == String.fromCharCode(53,102,54,119,0);
   do {
      bottomG += `${(parseInt(`${renews}`) & (whistlep ? 2 : 2))}`;
      if (backwards) {
         break;
      }
   } while (((volumeL.size | bottomG.length) >= 5) && backwards);
   for (let q = 0; q < 1; q++) {
       let sheeti = true;
       let plusK = false;
       let chaty = String.fromCharCode(99,95,50,51,95,116,111,112,115,0);
       let pingd = String.fromCharCode(116,95,55,56,95,100,120,103,105,0);
       let unreadA: Map<any, any> = new Map([[String.fromCharCode(101,120,105,115,116,101,110,99,101,95,106,95,55,49,0),false ], [String.fromCharCode(97,95,51,49,95,109,117,109,98,97,105,0),false ]]);
         plusK = String.fromCharCode(52,0) == pingd;
      while (plusK) {
         sheeti = 7 > pingd.length;
         break;
      }
      for (let k = 0; k < 2; k++) {
          let animationS = String.fromCharCode(103,95,50,51,95,119,104,105,116,101,115,112,97,99,101,0);
          let styleY: Array<any> = [115, 737, 129];
          let renewsQ = 1.0;
          let telegramU = false;
         unreadA.set(`${chaty}`, 3 / (Math.max(5, chaty.length)));
         animationS += `${(parseInt(`${renewsQ}`) ^ (telegramU ? 4 : 1))}`;
         styleY.push(parseInt(`${renewsQ}`));
         telegramU = renewsQ >= 54.81;
      }
       let history1: Array<any> = [685, 321];
       let assist7: Array<any> = [523, 912];
       let moon_ = true;
       let floatingE = false;
      let membershipE = moon_ ? !moon_ : moon_;
      do {
          let gestureso = String.fromCharCode(101,120,116,114,97,95,56,95,56,54,0);
          let emptyF = String.fromCharCode(118,115,102,114,97,109,101,95,102,95,49,49,0);
          let taiwano = false;
          let humidityD = 4.0;
          let constantsd = 5;
         moon_ = pingd.length >= chaty.length;
         gestureso += `${emptyF.length << (Math.min(Math.abs(2), 4))}`;
         emptyF += "3";
         taiwano = 7 >= gestureso.length;
         humidityD -= parseFloat(`${constantsd | emptyF.length}`);
         constantsd ^= 2;
         if (membershipE) {
            break;
         }
      } while ((3 > unreadA.size) && membershipE);
          let trophyY = String.fromCharCode(121,95,53,57,95,99,104,97,110,103,101,99,111,117,110,116,101,114,0);
         pingd = `${((moon_ ? 2 : 2) * 2)}`;
         trophyY += `${trophyY.length}`;
      for (let n = 0; n < 2; n++) {
          let handlerW = String.fromCharCode(115,95,52,56,95,106,112,101,103,105,110,116,0);
          let umengA = String.fromCharCode(105,95,57,95,118,105,111,108,101,110,99,101,0);
          let descl = String.fromCharCode(109,95,56,57,95,115,119,105,116,99,104,101,100,0);
          let gesturesk: Map<any, any> = new Map([[String.fromCharCode(101,114,114,115,116,114,95,116,95,57,55,0),41], [String.fromCharCode(114,101,110,100,101,114,101,114,115,95,122,95,54,51,0),958], [String.fromCharCode(119,101,98,109,95,48,95,56,48,0),857]]);
          let f_centerY: Array<any> = [180, 367, 702];
         plusK = unreadA.size == descl.length;
         handlerW += "1";
         umengA += `${umengA.length}`;
         descl += `${3 * f_centerY.length}`;
         gesturesk.set(`${f_centerY.length}`, gesturesk.size);
      }
      let fieldp = chaty.length >= 7395549;
      do {
         chaty += `${assist7.length}`;
         if (fieldp) {
            break;
         }
      } while ((pingd.endsWith(chaty)) && fieldp);
         chaty = `${assist7.length}`;
          let gift3: Array<any> = [254, 224, 174];
          let servicec = 2.0;
         plusK = ((pingd.length & (plusK ? pingd.length : 89)) == 89);
         gift3.push(gift3.length / (Math.max(3, 7)));
         servicec += parseFloat(`${parseInt(`${servicec}`) - gift3.length}`);
      renews /= Math.max(4, (String.fromCharCode(68,0) == chaty ? chaty.length : (sheeti ? 1 : 1)));
   }

      if (!isVip && !adultMode) {
        
      } else if (hasNextPage && !isFetchingNextPage && !isFetching) {

      const_2sz -= parseFloat(`${bottomG.length}`);
       let eighteenc = 5.0;
       let mail9: Map<any, any> = new Map([[String.fromCharCode(109,95,51,51,95,109,97,114,107,101,100,0),String.fromCharCode(113,95,51,55,95,105,110,116,101,114,114,117,112,116,105,98,108,101,0)], [String.fromCharCode(97,95,52,95,108,101,110,118,108,99,0),String.fromCharCode(113,117,97,100,116,114,101,101,95,115,95,54,51,0)], [String.fromCharCode(108,105,116,101,114,97,108,95,122,95,54,0),String.fromCharCode(121,95,52,50,95,116,104,111,117,115,97,110,100,115,0)]]);
       let customk = false;
      for (let w = 0; w < 2; w++) {
          let trophyE = String.fromCharCode(103,95,56,54,95,101,110,100,105,110,103,0);
          let zhuboB = false;
          let feedbackU = 3.0;
         mail9.set(`${customk}`, mail9.size);
         trophyE = `${trophyE.length}`;
         zhuboB = !zhuboB;
         feedbackU *= trophyE.length;
      }
          let flyerP = String.fromCharCode(105,95,51,57,95,116,111,114,99,104,0);
          let suggestionV = 4.0;
         eighteenc += 3;
         flyerP += `${parseInt(`${suggestionV}`)}`;
         suggestionV += (parseFloat(`${flyerP == String.fromCharCode(95,0) ? flyerP.length : parseInt(`${suggestionV}`)}`));
       let rankN: Array<any> = [224, 52];
       let overZ: Array<any> = [577, 154, 476];
      let redirect9 = mail9.size >= 7154772;
      do {
         mail9 = new Map([[`${rankN.length}`, 3]]);
         if (redirect9) {
            break;
         }
      } while (redirect9 && (Array.from(mail9.keys()).includes(`${rankN.length}`)));
       let time_u7 = 4.0;
         mail9.set(`${rankN.length}`, mail9.size);
       let blacklistq = String.fromCharCode(99,111,114,114,101,115,112,111,110,100,101,110,116,115,95,53,95,49,54,0);
      let sharedZ = customk ? !customk : customk;
      do {
         customk = time_u7 == 6.30 && customk;
         if (sharedZ) {
            break;
         }
      } while (sharedZ && (3 == rankN.length));
       let r_lockz = String.fromCharCode(115,116,114,97,116,101,103,105,101,115,95,102,95,54,57,0);
       let interstitial9 = String.fromCharCode(98,109,111,100,101,95,51,95,55,53,0);
      bottomG = `${((customk ? 1 : 1))}`;
       let fullV = String.fromCharCode(101,95,49,48,95,99,108,101,97,114,0);
       let linkA = String.fromCharCode(121,95,56,52,95,97,108,108,0);
      while (1 == linkA.length) {
          let streamingE = 0.0;
          let resendS: Map<any, any> = new Map([[String.fromCharCode(112,95,49,51,95,114,101,102,108,0),String.fromCharCode(114,101,109,111,118,101,103,114,97,105,110,95,112,95,55,51,0)], [String.fromCharCode(106,95,51,48,95,111,112,101,114,97,116,105,110,103,0),String.fromCharCode(121,101,116,95,100,95,56,55,0)], [String.fromCharCode(117,110,118,111,116,101,95,120,95,52,57,0),String.fromCharCode(121,95,50,49,95,112,105,100,0)]]);
         fullV += `${linkA.length}`;
         streamingE *= 2;
         resendS.set(`${streamingE}`, resendS.size);
         break;
      }
          let shootc = 0.0;
         fullV += `${fullV.length}`;
         shootc += parseFloat(`${1}`);
         fullV = `${linkA.length >> (Math.min(fullV.length, 1))}`;
         linkA = `${linkA.length}`;
         linkA += `${linkA.length + 3}`;
       let ballh = 5.0;
       let p_title7 = 2.0;
      hejiN += "1";
      const_2sz += (parseFloat(`${String.fromCharCode(102,0) == hejiN ? (suggestion7 ? 4 : 4) : hejiN.length}`));
      bottomG += `${parseInt(`${anner3}`)}`;
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
       let entry8 = 2.0;
    let zhengpianj: Map<any, any> = new Map([[String.fromCharCode(107,95,54,52,95,100,101,102,105,110,105,116,105,111,110,0),String.fromCharCode(102,100,111,112,101,110,95,109,95,49,53,0)], [String.fromCharCode(98,105,110,95,55,95,54,55,0),String.fromCharCode(105,95,53,55,95,110,97,118,105,103,97,116,111,114,0)]]);
    let xvodj = 5.0;
    let forward6 = 1.0;
    let send6 = 5.0;
    let delegate_u1 = 4.0;
    let headery = 4.0;
    let aboutP = 4.0;
    let videoh = String.fromCharCode(114,101,99,111,114,100,101,114,95,112,95,57,56,0);
    let modelsr = String.fromCharCode(115,95,49,48,48,95,119,101,108,115,0);
      send6 /= Math.max(3, 3);
   while (3.92 == (delegate_u1 / 4.61)) {
       let referreru: Map<any, any> = new Map([[String.fromCharCode(106,117,108,105,97,110,100,97,121,95,104,95,55,53,0),227], [String.fromCharCode(111,95,57,53,95,99,111,110,97,110,102,105,108,101,0),108], [String.fromCharCode(111,95,55,54,95,114,101,107,101,121,0),206]]);
       let strr: Array<any> = [430, 699, 952];
          let nalyticsE = 2.0;
          let pressurey: Array<any> = [90, 659];
         referreru.set(`${nalyticsE}`, pressurey.length);
         referreru.set(`${strr.length}`, 1 | strr.length);
       let internetz = true;
      for (let i = 0; i < 2; i++) {
         strr.push(referreru.size);
      }
          let borderlessr = false;
         strr.push((referreru.size * (borderlessr ? 1 : 5)));
          let splashW = 2;
         referreru.set(`${splashW}`, 1);
      delegate_u1 -= parseInt(`${send6}`);
      break;
   }
   for (let j = 0; j < 3; j++) {
      headery *= 3 + zhengpianj.size;
   }
   if (3.40 > (delegate_u1 / (Math.max(4, xvodj))) || (xvodj / (Math.max(delegate_u1, 6))) > 3.40) {
      delegate_u1 /= Math.max(parseInt(`${headery}`), 3);
   }
      send6 -= parseInt(`${delegate_u1}`);
       let layoutZ = 3.0;
       let eventu = String.fromCharCode(115,101,116,115,97,114,95,120,95,50,50,0);
       let targett: Map<any, any> = new Map([[String.fromCharCode(100,101,105,110,116,101,114,108,101,97,118,101,100,95,114,95,55,48,0),474], [String.fromCharCode(104,95,56,55,95,104,107,100,102,0),881], [String.fromCharCode(108,95,51,48,95,111,98,106,101,99,116,105,118,101,0),553]]);
          let shareI = true;
         layoutZ /= Math.max(2 >> (Math.min(4, Math.abs(targett.size))), 4);
         shareI = !shareI && !shareI;
         eventu += `${parseInt(`${layoutZ}`) / (Math.max(targett.size, 8))}`;
      let moonL = targett.size <= 4931550;
      do {
         targett = new Map([[`${layoutZ}`, parseInt(`${layoutZ}`) % (Math.max(7, eventu.length))]]);
         if (moonL) {
            break;
         }
      } while (moonL && (targett.get(`${layoutZ}`) == null));
         targett = new Map([[`${layoutZ}`, eventu.length]]);
      if (1 >= (targett.size >> (Math.min(eventu.length, 5))) || (eventu.length >> (Math.min(4, Math.abs(targett.size)))) >= 1) {
          let whistleJ = false;
          let country2 = String.fromCharCode(99,95,48,95,115,104,105,102,116,101,100,0);
          let crownO = String.fromCharCode(115,111,108,105,100,105,116,121,95,119,95,57,54,0);
          let popupI = 1.0;
          let entryK: Map<any, any> = new Map([[String.fromCharCode(122,117,108,117,95,50,95,56,51,0),String.fromCharCode(118,111,116,101,95,118,95,54,51,0)], [String.fromCharCode(98,95,55,95,97,108,108,111,99,97,116,111,114,0),String.fromCharCode(98,121,116,101,115,104,117,109,97,110,95,53,95,49,51,0)], [String.fromCharCode(115,111,114,116,101,100,95,101,95,49,51,0),String.fromCharCode(100,117,109,95,106,95,57,55,0)]]);
         targett.set(`${country2}`, country2.length & entryK.size);
         whistleJ = 67.64 >= popupI;
         crownO += `${((whistleJ ? 5 : 2))}`;
         popupI *= parseFloat(`${crownO.length}`);
         entryK.set(`${popupI}`, 3 ^ parseInt(`${popupI}`));
      }
      if (eventu.includes(`${layoutZ}`)) {
          let chati = true;
          let calendarf = String.fromCharCode(113,95,50,55,95,104,121,115,99,97,108,101,0);
          let dialog3 = String.fromCharCode(116,101,109,112,111,114,97,114,121,95,52,95,52,0);
          let stats1 = false;
          let tailn = String.fromCharCode(97,99,100,115,112,95,100,95,56,48,0);
         layoutZ += 1 >> (Math.min(3, eventu.length));
         chati = tailn.endsWith(`${stats1}`);
         calendarf += `${((stats1 ? 4 : 2))}`;
         dialog3 = `${1 * tailn.length}`;
      }
         targett.set(eventu, eventu.length >> (Math.min(Math.abs(2), 4)));
         targett = new Map([[`${targett.size}`, eventu.length]]);
          let inviteT = 4.0;
          let windQ = 1.0;
          let sharedK = 3.0;
         layoutZ -= targett.size << (Math.min(5, Math.abs(parseInt(`${windQ}`))));
         inviteT /= Math.max(4, parseFloat(`${parseInt(`${sharedK}`)}`));
         windQ -= parseFloat(`${3 >> (Math.min(Math.abs(parseInt(`${sharedK}`)), 4))}`);
      xvodj -= parseFloat(`${3 & eventu.length}`);

      setIsScrolling(false);

       let mutedx = 4.0;
      for (let o = 0; o < 3; o++) {
         mutedx *= parseFloat(`${parseInt(`${mutedx}`)}`);
      }
      let unselectedl = 5498357.0 >= mutedx;
      do {
         mutedx /= Math.max(parseFloat(`${parseInt(`${mutedx}`) >> (Math.min(4, Math.abs(parseInt(`${mutedx}`))))}`), 1);
         if (unselectedl) {
            break;
         }
      } while ((mutedx < mutedx) && unselectedl);
      let weiboJ = mutedx >= 9127177.0;
      do {
         mutedx -= parseFloat(`${parseInt(`${mutedx}`) >> (Math.min(2, Math.abs(parseInt(`${mutedx}`))))}`);
         if (weiboJ) {
            break;
         }
      } while (weiboJ && (mutedx == mutedx));
      send6 -= parseInt(`${headery}`) % 2;
      xvodj -= parseFloat(`${parseInt(`${delegate_u1}`) | parseInt(`${headery}`)}`);
      zhengpianj = new Map([[`${zhengpianj.size}`, zhengpianj.size - 1]]);
      send6 *= parseInt(`${forward6}`);
   let mailr = entry8 >= 5551843.0;
   do {
      entry8 /= Math.max(1, parseFloat(`${parseInt(`${entry8}`) - parseInt(`${delegate_u1}`)}`));
      if (mailr) {
         break;
      }
   } while (mailr && (5.83 >= (entry8 / 2.45)));
      delegate_u1 += videoh.length;

      if (isFocus
        && Platform.OS !== 'ios'
        && KWConstants.isGuest(userState.user)
        && !KWConstants.isVip(userState.user)
        && swipeCount.current >= MINI_SHOW_LOGIN_NUMBER
        && current >= MINI_SHOW_LOGIN_NUMBER
      ) {

   let plusV = delegate_u1 >= 7317410.0;
   do {
      delegate_u1 += parseInt(`${xvodj}`);
      if (plusV) {
         break;
      }
   } while ((4.42 > delegate_u1) && plusV);
      zhengpianj = new Map([[`${zhengpianj.size}`, parseInt(`${aboutP}`)]]);
   for (let a = 0; a < 1; a++) {
      forward6 -= zhengpianj.size + 2;
   }
       let lessp = 4.0;
          let common1 = 0.0;
          let gmailk: Array<any> = [795, 754];
          let controlu: Map<any, any> = new Map([[String.fromCharCode(99,114,111,110,111,115,95,103,95,57,48,0),false ], [String.fromCharCode(105,116,101,109,95,105,95,56,52,0),true ], [String.fromCharCode(106,95,49,52,95,97,100,100,105,0),true ]]);
         lessp *= parseFloat(`${controlu.size / 2}`);
         common1 -= gmailk.length >> (Math.min(5, Math.abs(parseInt(`${common1}`))));
         gmailk.push(3 >> (Math.min(5, gmailk.length)));
         controlu = new Map([[`${gmailk.length}`, parseInt(`${common1}`)]]);
         lessp -= parseFloat(`${parseInt(`${lessp}`) - 1}`);
         lessp += parseFloat(`${parseInt(`${lessp}`)}`);
      zhengpianj = new Map([[`${send6}`, 2 / (Math.max(parseInt(`${headery}`), 8))]]);
   if (parseFloat(`${videoh.length}`) == xvodj) {
      xvodj += (parseFloat(`${modelsr == String.fromCharCode(55,0) ? videoh.length : modelsr.length}`));
   }
      modelsr += "3";
        dispatch(showLoginAction());
      }
    }, [userState.user, current, isFocus]);

    useEffect(() => {
      if (KWConstants.isLogin(userState.user) || KWConstants.isVip(userState.user)) return;

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
