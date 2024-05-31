import { useAppDispatch, useAppSelector, useSelector } from '@hooks/tt_spec_download';
import tt_humidity_guide from '../../Umeng/tt_humidity_guide';
import NetInfo from '@react-native-community/netinfo';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import { ttBaiduNewinterstitial } from '@redux/reducers/tt_center';
import { ttOrange } from '@redux/tt_updates_bottom';
import { ttAnimationSource } from '@type/tt_line_borderless';
import { screenModel } from '@type/tt_twitter_data';
import { API_DOMAIN_TEST } from '@utility/tt_trophy_cross';
import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import { AppState, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { useMinivodQuery } from '@api';
import EighteenPlusControls from '../components/adultVideo/tt_downloaded_read';
import ScreenContainer from '../components/container/tt_backward';
import MiniVideoList from '../components/videoPlayer/WatchAnytime/tt_preview_typing';
import NoConnection from './../components/common/tt_fast';
import { CPressable } from '../components/atoms';
import { showLoginAction } from '@redux/actions/tt_copy_heji';
import { ttGoal } from '@redux/reducers/tt_selected';
import { ttFast } from '@models/tt_stations_right';
import BecomeVipOverlay from '../components/modal/tt_type';
import { ADULT_MODE_PREVIEW_DURATION, MINI_SHOW_LOGIN_NUMBER } from '@utility/tt_trophy_cross';

type ttAcceptedMbnative = {
  data: {
    List: Array<ttAnimationSource>;
  };
};

type ttUnselectedNative = {
  setPause: (pause: boolean) => void;
};

const LIMIT = 300;

function WatchAnytime({ navigation }: BottomTabScreenProps<any>) {
  const isFocused = useIsFocused();
  
  const [isInBackground, setIsInBackground] = useState(false);
  const [flattenedVideos, setFlattenedVideos] = useState(Array<ttAnimationSource>);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isOffline, setIsOffline] = useState(false);
  const [isPressTabScroll, setPressTabScroll] = useState(false);
  const [isShowAdOverlay, setShowAdOverlay] = useState(false);
  const miniVodRef = useRef<ttUnselectedNative>();
  const miniVodListRef = useRef<any>();
  const dispatch = useAppDispatch();

  const settingsReducer: ttBaiduNewinterstitial = useAppSelector(
    ({ settingsReducer }: ttOrange) => settingsReducer,
  );

  const screenState: screenModel = useAppSelector(
    ({ screenReducer }) => screenReducer,
  );

  const userState = useSelector<ttGoal>('userReducer');
  const { adultMode: adultModeGlobal, watchAnytimeAdultMode } = screenState;
  const adultMode = watchAnytimeAdultMode;

  const isVip = ttFast.isVip(userState.user);

  const fetchMode = adultMode ? 'adult' : 'normal';
  const isFocusLogin = useRef(false);

  
  
  const handleAppStateChange = (nextAppState: any) => {
    setIsInBackground(nextAppState !== 'active');
  };

  const handleRefresh = useCallback(async () => {
       let darkj = String.fromCharCode(116,95,53,51,95,97,115,115,101,109,98,108,121,0);
    let members: Array<any> = [618, 458, 898];
    let usernameF = 2;
    let shareD = String.fromCharCode(104,95,57,57,95,99,108,97,115,115,105,102,115,0);
    let arrowp = 0.0;
    let clocks = 3;
    let stepE: Map<any, any> = new Map([[String.fromCharCode(118,95,52,95,100,102,99,116,0),379], [String.fromCharCode(112,111,116,105,115,105,111,110,95,114,95,52,52,0),300], [String.fromCharCode(103,95,56,49,95,100,105,118,105,100,111,114,0),741]]);
    let overlayl = String.fromCharCode(117,95,52,48,95,110,111,110,101,109,112,116,121,0);
    let bodan5: Array<any> = [String.fromCharCode(109,105,108,108,105,115,95,52,95,54,48,0), String.fromCharCode(105,110,116,101,114,112,111,108,95,97,95,57,48,0)];
       let colorsW = false;
       let logine: Map<any, any> = new Map([[String.fromCharCode(113,95,55,53,95,108,97,110,103,105,100,0),215], [String.fromCharCode(109,117,108,116,105,99,97,115,116,95,56,95,56,54,0),417]]);
       let policyX = 0;
         policyX -= 2;
          let detailsA = String.fromCharCode(99,104,97,110,95,110,95,53,56,0);
          let controlsU = 4.0;
         logine = new Map([[`${controlsU}`, detailsA.length]]);
         logine = new Map([[`${logine.size}`, logine.size]]);
      while (Array.from(logine.values()).includes(policyX)) {
         policyX -= 1;
         break;
      }
          let loadingX = 4.0;
         logine.set(`${loadingX}`, parseInt(`${loadingX}`) ^ policyX);
       let logoutu = String.fromCharCode(112,95,54,55,95,115,116,97,110,100,97,114,100,115,0);
       let activeC = 3;
      while (Array.from(logine.values()).includes(activeC)) {
         logine = new Map([[`${logine.size}`, logine.size]]);
         break;
      }
      if (1 < policyX) {
          let spinnerM = 3;
         logoutu = `${1 << (Math.min(5, Math.abs(logine.size)))}`;
         spinnerM <<= Math.min(3, Math.abs(3));
      }
      usernameF &= 1;
   for (let q = 0; q < 2; q++) {
      stepE.set(overlayl, 1 - overlayl.length);
   }
   while (4 <= (2 * members.length)) {
      usernameF -= parseInt(`${arrowp}`);
      break;
   }
   while (5 > members.length) {
      members = [usernameF];
      break;
   }
      darkj += `${stepE.size - 3}`;
   while (1 <= (1 % (Math.max(6, darkj.length)))) {
      darkj = "1";
      break;
   }
   for (let p = 0; p < 1; p++) {
      usernameF /= Math.max(usernameF, 2);
   }

    setIsRefreshing(true);

      overlayl = `${parseInt(`${arrowp}`) | shareD.length}`;
   let bootsplashe = overlayl.length >= 5273710;
   do {
      overlayl += `${members.length ^ 3}`;
      if (bootsplashe) {
         break;
      }
   } while ((5 < (members.length >> (Math.min(overlayl.length, 1))) && 5 < (overlayl.length >> (Math.min(2, members.length)))) && bootsplashe);
   while ((members.length - clocks) <= 3 || 3 <= (clocks - members.length)) {
       let nativeex7 = 0.0;
      if ((4.43 + nativeex7) < 4.63 && (nativeex7 + nativeex7) < 4.43) {
          let list0 = String.fromCharCode(118,95,49,48,95,119,97,105,116,101,114,0);
         nativeex7 += list0.length % (Math.max(10, parseInt(`${nativeex7}`)));
      }
      for (let c = 0; c < 1; c++) {
         nativeex7 /= Math.max(2, 1);
      }
      for (let m = 0; m < 1; m++) {
          let memberZ: Map<any, any> = new Map([[String.fromCharCode(101,95,57,95,114,101,116,0),116], [String.fromCharCode(122,95,49,95,118,100,101,99,0),65], [String.fromCharCode(117,115,108,116,95,57,95,50,50,0),341]]);
          let collectionz = 5;
          let playD = String.fromCharCode(115,95,50,48,95,115,104,111,117,108,100,0);
         nativeex7 /= Math.max(2, memberZ.size + 1);
         memberZ.set(playD, collectionz / (Math.max(1, 5)));
         collectionz -= collectionz ^ playD.length;
      }
      clocks -= parseInt(`${arrowp}`);
      break;
   }
   while (overlayl.includes(`${shareD.length}`)) {
      overlayl = `${clocks}`;
      break;
   }
       let infof = 1.0;
         infof *= 3 % (Math.max(5, parseInt(`${infof}`)));
          let teamn = 0.0;
          let countryM = false;
          let indexr: Map<any, any> = new Map([[String.fromCharCode(115,95,57,57,95,98,105,110,116,114,101,101,0),924], [String.fromCharCode(108,95,56,52,95,108,111,103,0),197]]);
         infof -= 1;
         teamn *= parseFloat(`${3 ^ parseInt(`${teamn}`)}`);
         countryM = indexr.size > 7;
         indexr.set(`${countryM}`, ((countryM ? 5 : 4) - indexr.size));
         infof *= parseInt(`${infof}`) & 3;
      members.push(1 | parseInt(`${arrowp}`));
   while (2 > (stepE.size >> (Math.min(Math.abs(4), 2)))) {
      stepE = new Map([[`${stepE.size}`, clocks]]);
      break;
   }
      bodan5 = [clocks + 3];
    

   let windD = bodan5.length <= 8228963;
   do {
       let main_fC = 2;
      for (let r = 0; r < 2; r++) {
         main_fC /= Math.max(main_fC * main_fC, 1);
      }
         main_fC /= Math.max(main_fC << (Math.min(Math.abs(3), 1)), 4);
      if (1 > (main_fC - main_fC) || (main_fC - main_fC) > 1) {
          let setting6 = 2.0;
          let headerC = 2.0;
          let pageW = false;
          let preview8 = String.fromCharCode(114,95,51,55,95,101,110,99,111,100,101,100,115,116,114,101,97,109,0);
         main_fC -= preview8.length;
         setting6 += 2 >> (Math.min(Math.abs(parseInt(`${setting6}`)), 4));
         headerC -= parseInt(`${setting6}`) | 1;
         pageW = (headerC - setting6) < 47.34;
         preview8 += `${parseInt(`${headerC}`) & 1}`;
      }
      bodan5.push(stepE.size * 3);
      if (windD) {
         break;
      }
   } while (windD && ((darkj.length - 4) >= 2 && 4 >= (4 - darkj.length)));
   for (let y = 0; y < 3; y++) {
       let handler7 = String.fromCharCode(120,97,109,112,108,101,95,100,95,54,57,0);
         handler7 = `${handler7.length * handler7.length}`;
      if (handler7.length == 5) {
          let description_8zy: Map<any, any> = new Map([[String.fromCharCode(120,95,53,54,95,105,110,102,117,114,97,0),476], [String.fromCharCode(108,111,111,112,98,114,101,97,107,95,48,95,54,53,0),683], [String.fromCharCode(121,95,50,51,95,99,111,117,112,108,105,110,103,0),88]]);
          let xnewsp: Map<any, any> = new Map([[String.fromCharCode(99,111,108,111,114,107,101,121,95,49,95,50,53,0),String.fromCharCode(112,97,114,116,105,116,105,111,110,115,95,103,95,53,49,0)], [String.fromCharCode(112,97,114,115,101,114,115,95,49,95,53,55,0),String.fromCharCode(102,95,50,57,95,105,109,112,114,105,110,116,0)], [String.fromCharCode(103,111,111,100,95,103,95,50,57,0),String.fromCharCode(119,101,105,103,104,116,95,110,95,50,55,0)]]);
          let annerz = String.fromCharCode(116,105,108,101,95,56,95,53,0);
         handler7 += `${description_8zy.size % (Math.max(annerz.length, 5))}`;
         description_8zy.set(`${xnewsp.size}`, 3);
         xnewsp.set(`${xnewsp.size}`, xnewsp.size);
      }
         handler7 = `${handler7.length % (Math.max(5, handler7.length))}`;
      usernameF &= shareD.length;
   }
   for (let c = 0; c < 2; c++) {
      arrowp *= 3 | members.length;
   }
      overlayl = `${clocks >> (Math.min(Math.abs(1), 4))}`;
   while (5 >= (3 << (Math.min(3, darkj.length)))) {
       let listm = String.fromCharCode(112,95,52,49,95,99,111,110,116,101,120,116,115,0);
       let othern: Map<any, any> = new Map([[String.fromCharCode(115,95,57,54,95,102,111,114,109,97,116,116,101,114,115,0),984], [String.fromCharCode(116,95,52,53,95,99,99,111,117,110,116,0),264], [String.fromCharCode(113,95,54,53,95,100,105,115,116,114,105,98,117,116,105,111,110,115,0),780]]);
       let holder1 = String.fromCharCode(100,101,108,115,117,112,101,114,95,118,95,57,54,0);
         othern = new Map([[`${othern.size}`, othern.size]]);
      while (5 >= holder1.length && listm.length >= 5) {
         listm = `${othern.size & 1}`;
         break;
      }
         holder1 += `${othern.size - 2}`;
       let styleU: Array<any> = [485, 928, 692];
       let quest6: Array<any> = [382, 977, 733];
      if (2 > (styleU.length << (Math.min(quest6.length, 1))) && (2 << (Math.min(5, quest6.length))) > 1) {
         styleU.push(styleU.length * 2);
      }
          let shrinkB = 1.0;
          let whatsappG = 3.0;
          let bodanE: Array<any> = [19, 63, 831];
         othern.set(`${shrinkB}`, 1 ^ styleU.length);
         shrinkB /= Math.max(bodanE.length | parseInt(`${whatsappG}`), 2);
         whatsappG -= bodanE.length;
       let iconL = false;
       let floating1 = true;
          let downloadedG = 2;
         styleU.push(downloadedG & othern.size);
         holder1 = `${(holder1 == String.fromCharCode(122,0) ? holder1.length : styleU.length)}`;
      darkj = "2";
      break;
   }
      members.push(members.length);
   while (Array.from(stepE.values()).includes(clocks)) {
      stepE.set(`${usernameF}`, members.length);
      break;
   }
    await refetch();

   for (let g = 0; g < 3; g++) {
      overlayl += `${(String.fromCharCode(90,0) == overlayl ? overlayl.length : shareD.length)}`;
   }
      clocks &= 1 | members.length;
       let playm = String.fromCharCode(109,97,115,107,105,110,103,95,50,95,50,51,0);
       let blacklist0: Array<any> = [282, 442, 523];
       let emptyp = 2.0;
      let eighteenZ = blacklist0.length >= 9788704;
      do {
         blacklist0 = [blacklist0.length];
         if (eighteenZ) {
            break;
         }
      } while (eighteenZ && (3.9 < (emptyp * 1.52)));
          let roomx: Array<any> = [749, 581, 528];
         blacklist0.push(blacklist0.length & 3);
         roomx.push(roomx.length);
      if (!playm.endsWith(`${blacklist0.length}`)) {
          let filedf: Map<any, any> = new Map([[String.fromCharCode(115,101,114,118,105,99,101,115,95,113,95,56,55,0),351], [String.fromCharCode(97,99,99,95,122,95,50,51,0),508], [String.fromCharCode(115,121,115,108,111,103,95,112,95,57,50,0),263]]);
          let description_coK: Map<any, any> = new Map([[String.fromCharCode(114,101,115,111,108,118,101,114,95,51,95,56,52,0),531], [String.fromCharCode(115,95,50,57,95,97,114,116,0),73], [String.fromCharCode(104,107,100,102,95,106,95,50,56,0),940]]);
         playm += `${(playm == String.fromCharCode(83,0) ? blacklist0.length : playm.length)}`;
         filedf = new Map([[`${description_coK.size}`, description_coK.size % (Math.max(3, filedf.size))]]);
      }
       let l_imageW = String.fromCharCode(102,97,115,116,95,103,95,52,53,0);
       let upload7 = String.fromCharCode(112,97,105,110,116,105,110,103,95,103,95,56,53,0);
         l_imageW += `${blacklist0.length}`;
          let shootj: Map<any, any> = new Map([[String.fromCharCode(112,95,52,57,95,115,112,101,99,105,102,105,99,97,116,105,111,110,0),false ], [String.fromCharCode(98,117,98,98,108,101,115,95,121,95,49,49,0),true ]]);
         upload7 = `${playm.length}`;
         shootj.set(`${shootj.size}`, shootj.size);
         blacklist0 = [upload7.length];
      for (let c = 0; c < 2; c++) {
         playm = `${blacklist0.length | 1}`;
      }
      for (let o = 0; o < 2; o++) {
          let placement1: Array<any> = [659, 24];
          let mailY = String.fromCharCode(97,110,105,109,97,116,111,114,115,95,48,95,57,52,0);
          let loadingJ = String.fromCharCode(116,95,50,53,95,108,97,98,101,108,115,0);
          let clockY = 1;
          let buildX = 4.0;
         playm = `${loadingJ.length}`;
         placement1.push(mailY.length);
         mailY += `${clockY}`;
         loadingJ = `${(String.fromCharCode(104,0) == mailY ? placement1.length : mailY.length)}`;
         clockY *= clockY % (Math.max(mailY.length, 5));
         buildX /= Math.max(1, placement1.length % (Math.max(mailY.length, 2)));
      }
      clocks %= Math.max(3, 4);
   for (let z = 0; z < 3; z++) {
      bodan5.push(2 - usernameF);
   }
   if (3 >= (4 | usernameF) && (bodan5.length | 4) >= 2) {
      usernameF |= 2;
   }
   for (let m = 0; m < 1; m++) {
      shareD += `${(String.fromCharCode(55,0) == overlayl ? usernameF : overlayl.length)}`;
   }
   for (let c = 0; c < 1; c++) {
       let renewd = 5;
       let collectionM = String.fromCharCode(118,101,114,105,102,105,101,100,95,117,95,56,53,0);
       let modeS = String.fromCharCode(116,95,52,57,95,99,104,111,105,99,101,115,0);
       let weiboP = String.fromCharCode(102,95,54,57,95,109,112,115,117,98,0);
      if (modeS.endsWith(`${renewd}`)) {
         modeS += `${(String.fromCharCode(115,0) == collectionM ? renewd : collectionM.length)}`;
      }
          let anythink6 = String.fromCharCode(104,97,110,100,101,114,95,112,95,52,48,0);
          let catalogH = 4.0;
         collectionM = "3";
         anythink6 += `${anythink6.length & parseInt(`${catalogH}`)}`;
         catalogH /= Math.max(1, parseFloat(`${2 & parseInt(`${catalogH}`)}`));
      for (let b = 0; b < 1; b++) {
         renewd %= Math.max(renewd << (Math.min(weiboP.length, 5)), 5);
      }
          let dplusr = String.fromCharCode(97,99,99,101,115,115,105,98,108,105,116,121,95,104,95,57,54,0);
          let descr = String.fromCharCode(105,110,116,101,114,99,101,112,116,95,99,95,57,52,0);
          let sansP: Map<any, any> = new Map([[String.fromCharCode(107,95,56,48,95,115,99,111,112,101,0),677], [String.fromCharCode(105,110,99,114,101,109,101,110,116,97,108,95,113,95,57,51,0),339], [String.fromCharCode(115,97,118,101,100,95,108,95,54,57,0),50]]);
         weiboP += `${2 & modeS.length}`;
         dplusr = `${(String.fromCharCode(122,0) == dplusr ? dplusr.length : sansP.size)}`;
         descr = `${descr.length}`;
         sansP.set(dplusr, dplusr.length);
      for (let r = 0; r < 3; r++) {
         modeS = `${modeS.length / (Math.max(6, weiboP.length))}`;
      }
      for (let c = 0; c < 3; c++) {
         collectionM += `${modeS.length}`;
      }
          let dplus3 = String.fromCharCode(99,95,51,51,95,114,103,98,110,0);
          let mintegral2 = 2.0;
         renewd ^= 2 + modeS.length;
         dplus3 += `${3 ^ dplus3.length}`;
         mintegral2 *= parseInt(`${mintegral2}`) / 3;
       let rewardvideoj: Array<any> = [992, 546, 549];
       let infom: Array<any> = [821, 774];
          let upgrade8 = String.fromCharCode(111,112,112,111,115,105,116,101,95,110,95,50,52,0);
          let adultY = 3.0;
         modeS = `${collectionM.length}`;
         upgrade8 += `${parseInt(`${adultY}`) >> (Math.min(upgrade8.length, 4))}`;
         adultY /= Math.max(1, (parseFloat(`${upgrade8 == String.fromCharCode(120,0) ? upgrade8.length : parseInt(`${adultY}`)}`)));
      for (let t = 0; t < 1; t++) {
          let policyL = 3.0;
          let stringss: Map<any, any> = new Map([[String.fromCharCode(97,112,97,99,107,101,116,95,122,95,51,53,0),292], [String.fromCharCode(100,101,109,111,116,101,95,101,95,51,50,0),153]]);
          let routerl = String.fromCharCode(119,95,49,57,95,101,110,97,98,108,101,0);
          let overlayw = String.fromCharCode(115,101,110,115,111,114,95,102,95,55,52,0);
         renewd >>= Math.min(4, routerl.length);
         policyL -= stringss.size % (Math.max(3, parseInt(`${policyL}`)));
         stringss = new Map([[`${stringss.size}`, 1]]);
         routerl = `${stringss.size & 3}`;
         overlayw += `${overlayw.length - stringss.size}`;
      }
         renewd %= Math.max((String.fromCharCode(78,0) == modeS ? weiboP.length : modeS.length), 3);
          let hooki = true;
          let servicea = false;
          let gradleJ = String.fromCharCode(115,95,56,49,95,105,110,116,101,114,0);
         modeS = `${collectionM.length}`;
         hooki = (servicea ? !hooki : !servicea);
         gradleJ += `${(1 * (hooki ? 2 : 4))}`;
      members = [collectionM.length & parseInt(`${arrowp}`)];
   }
    setIsRefreshing(false);

      stepE = new Map([[`${members.length}`, clocks % 3]]);
   if (1 > (5 % (Math.max(5, shareD.length))) && 4 > (usernameF % 5)) {
      shareD += `${3 << (Math.min(4, Math.abs(parseInt(`${arrowp}`))))}`;
   }
   let fastl = usernameF <= 6358106;
   do {
      usernameF >>= Math.min(4, Math.abs(3 * usernameF));
      if (fastl) {
         break;
      }
   } while ((5 == (3 - clocks) || 3 == (usernameF - clocks)) && fastl);
   while (clocks == members.length) {
      members = [stepE.size];
      break;
   }
      clocks /= Math.max(4, usernameF * 3);
      shareD += `${3 | overlayl.length}`;
   while ((4 ^ shareD.length) < 1) {
      clocks += clocks;
      break;
   }
    return;
  }, []);

  const {
    data: videos,
    isSuccess,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isFetching,
    refetch,
    remove,
  } = useMinivodQuery(fetchMode, isVip)

  const checkConnection = useCallback(async () => {
       let guideC = 1;
    let foundJ: Array<any> = [80, 785];
    let sideb: Map<any, any> = new Map([[String.fromCharCode(114,101,97,108,105,102,121,95,115,95,55,57,0),197], [String.fromCharCode(118,95,51,49,95,112,114,101,99,101,100,101,110,99,101,0),269], [String.fromCharCode(121,95,53,55,95,114,97,112,105,100,106,115,111,110,0),256]]);
    let modalW = false;
    let androidC: Array<any> = [String.fromCharCode(109,95,57,54,95,110,117,109,101,114,105,99,97,108,0), String.fromCharCode(111,110,97,118,99,95,99,95,54,53,0)];
    let feedbackc = String.fromCharCode(100,95,53,53,95,108,111,99,107,110,101,115,115,0);
    let gpayQ: Array<any> = [468, 427];
    let heartp = 4;
    let applicationT = String.fromCharCode(121,95,51,56,95,111,114,105,103,0);
    let commonq: Map<any, any> = new Map([[String.fromCharCode(101,95,53,49,95,104,97,114,109,111,110,105,99,0),904], [String.fromCharCode(98,95,50,51,95,110,111,110,102,97,116,97,108,0),27]]);
   for (let r = 0; r < 2; r++) {
       let playlistB: Array<any> = [String.fromCharCode(100,101,99,111,100,101,114,95,113,95,49,49,0), String.fromCharCode(99,111,111,107,100,97,116,97,95,49,95,57,50,0)];
       let backwardE: Array<any> = [901, 733];
       let mbjscommonn = String.fromCharCode(100,95,53,53,95,97,109,102,101,110,99,0);
         backwardE = [playlistB.length % (Math.max(backwardE.length, 8))];
      if (backwardE.length < mbjscommonn.length) {
         backwardE = [1 & backwardE.length];
      }
          let gmaill = 1;
         backwardE = [playlistB.length >> (Math.min(backwardE.length, 3))];
         gmaill /= Math.max(2, gmaill);
         mbjscommonn += `${mbjscommonn.length}`;
      for (let x = 0; x < 2; x++) {
         backwardE = [playlistB.length / (Math.max(3, 8))];
      }
      while (5 >= (playlistB.length - 1) || 1 >= (mbjscommonn.length - playlistB.length)) {
          let connectionW = 0.0;
          let delegate_746 = String.fromCharCode(112,95,56,51,95,99,111,109,112,111,115,105,116,105,110,103,0);
          let wind0 = String.fromCharCode(118,95,55,95,101,97,114,108,121,0);
         playlistB = [(String.fromCharCode(104,0) == wind0 ? wind0.length : delegate_746.length)];
         connectionW -= parseFloat(`${parseInt(`${connectionW}`) + 3}`);
         delegate_746 = `${parseInt(`${connectionW}`) + parseInt(`${connectionW}`)}`;
         break;
      }
          let logoM = 4;
          let faviconG = String.fromCharCode(113,95,54,52,95,99,111,114,112,117,115,0);
         mbjscommonn += "1";
         logoM *= (String.fromCharCode(52,0) == faviconG ? faviconG.length : logoM);
         backwardE.push(mbjscommonn.length + 3);
       let stylez: Map<any, any> = new Map([[String.fromCharCode(114,97,105,115,101,100,95,118,95,57,48,0),String.fromCharCode(104,97,115,104,100,101,115,116,114,111,121,95,107,95,57,52,0)], [String.fromCharCode(115,101,103,102,101,97,116,117,114,101,115,95,119,95,52,50,0),String.fromCharCode(112,117,98,95,104,95,55,57,0)], [String.fromCharCode(111,95,49,54,0),String.fromCharCode(97,118,97,105,108,97,98,105,108,105,116,121,95,57,95,51,54,0)]]);
       let serviceu: Map<any, any> = new Map([[String.fromCharCode(119,95,53,95,99,104,112,108,0),351], [String.fromCharCode(99,97,114,101,116,95,120,95,52,51,0),656], [String.fromCharCode(122,95,50,54,95,109,97,116,114,105,120,102,0),388]]);
      applicationT += `${guideC - androidC.length}`;
   }
      sideb = new Map([[`${androidC.length}`, androidC.length]]);
      foundJ.push(1);
   let agreemente = heartp >= 5577187;
   do {
      heartp += 3;
      if (agreemente) {
         break;
      }
   } while (agreemente && (1 >= (heartp + commonq.size) && 2 >= (heartp + 1)));
      modalW = !modalW && sideb.size < 49;
       let over0 = false;
       let langkeyn = true;
          let fastforwarda = String.fromCharCode(99,111,110,99,97,116,101,110,97,116,105,111,110,95,101,95,56,51,0);
          let mbridgep = 1.0;
          let m_manageri = 5;
         over0 = !langkeyn;
         fastforwarda += `${m_manageri & 3}`;
         mbridgep /= Math.max(parseFloat(`${3}`), 1);
         m_manageri |= (String.fromCharCode(74,0) == fastforwarda ? fastforwarda.length : m_manageri);
      for (let z = 0; z < 3; z++) {
          let klevinF: Map<any, any> = new Map([[String.fromCharCode(115,117,98,109,101,115,115,97,103,101,95,53,95,55,56,0),413], [String.fromCharCode(116,95,49,95,112,117,109,112,0),587]]);
          let aboutH = String.fromCharCode(105,95,56,56,95,111,110,121,120,99,0);
          let mbbannerY = 0.0;
          let sendl = String.fromCharCode(109,101,115,115,97,103,101,115,95,120,95,57,53,0);
          let pointe = String.fromCharCode(107,95,53,53,95,115,101,99,116,105,110,115,0);
         over0 = String.fromCharCode(107,0) == aboutH && 4 > klevinF.size;
         klevinF.set(`${mbbannerY}`, pointe.length + 2);
         aboutH += `${pointe.length}`;
         mbbannerY -= pointe.length;
         sendl = `${(String.fromCharCode(118,0) == pointe ? pointe.length : parseInt(`${mbbannerY}`))}`;
      }
      while (langkeyn) {
         langkeyn = (over0 ? !langkeyn : !over0);
         break;
      }
      while (langkeyn) {
          let dycreatorI = 1.0;
         langkeyn = !over0;
         dycreatorI /= Math.max(parseInt(`${dycreatorI}`), 4);
         break;
      }
      let window_sjc = langkeyn ? !langkeyn : langkeyn;
      do {
         langkeyn = (langkeyn ? !over0 : !langkeyn);
         if (window_sjc) {
            break;
         }
      } while ((!langkeyn) && window_sjc);
         over0 = !langkeyn;
      commonq = new Map([[`${gpayQ.length}`, (String.fromCharCode(65,0) == applicationT ? applicationT.length : gpayQ.length)]]);
   for (let a = 0; a < 2; a++) {
      applicationT = `${foundJ.length / 2}`;
   }

    const state = await NetInfo.fetch();

      androidC.push((2 ^ (modalW ? 2 : 4)));
      feedbackc += `${2 >> (Math.min(5, gpayQ.length))}`;
      commonq = new Map([[`${gpayQ.length}`, gpayQ.length + feedbackc.length]]);
   while (feedbackc.startsWith(`${androidC.length}`)) {
      feedbackc = `${2 + heartp}`;
      break;
   }
      sideb.set(`${guideC}`, guideC & androidC.length);
      gpayQ.push(1);
   for (let s = 0; s < 1; s++) {
      modalW = 86 >= sideb.size;
   }
    const offline = !(state.isConnected && state.isInternetReachable);

   if ((gpayQ.length << (Math.min(applicationT.length, 2))) > 4 && 4 > (applicationT.length << (Math.min(5, gpayQ.length)))) {
       let plashU = String.fromCharCode(109,95,53,48,95,114,97,119,0);
       let delegate_hR: Array<any> = [310, 423];
       let stationsX = 5.0;
       let unselectedg = 2.0;
       let sheetB: Array<any> = [373, 297];
       let mappingo = 1;
      if (1 <= mappingo) {
          let downloadedp: Map<any, any> = new Map([[String.fromCharCode(99,111,110,110,101,99,116,95,102,95,50,55,0),86], [String.fromCharCode(112,95,52,57,95,114,101,98,97,108,97,110,99,101,0),383]]);
         mappingo &= parseInt(`${unselectedg}`) / (Math.max(delegate_hR.length, 10));
         downloadedp = new Map([[`${downloadedp.size}`, downloadedp.size % (Math.max(1, 8))]]);
      }
         plashU += `${plashU.length}`;
      while (plashU.length == 5) {
          let expiredM: Map<any, any> = new Map([[String.fromCharCode(112,95,50,50,95,110,98,105,111,0),944], [String.fromCharCode(103,95,50,56,95,105,100,99,116,108,108,109,0),981]]);
         plashU += `${delegate_hR.length}`;
         expiredM.set(`${expiredM.size}`, expiredM.size);
         break;
      }
         delegate_hR.push(sheetB.length << (Math.min(2, Math.abs(parseInt(`${stationsX}`)))));
          let rewardvideof = 1;
          let castn = String.fromCharCode(101,95,56,50,95,104,111,114,105,103,0);
         stationsX += rewardvideof % (Math.max(castn.length, 5));
         unselectedg -= delegate_hR.length;
         unselectedg /= Math.max(plashU.length, 2);
         plashU += `${2 & plashU.length}`;
          let mathz = 3.0;
          let actionx = String.fromCharCode(111,95,50,56,95,109,97,105,108,99,104,105,109,112,0);
          let klevinw = 2;
         stationsX += actionx.length;
         mathz *= parseFloat(`${klevinw % (Math.max(parseInt(`${mathz}`), 1))}`);
         actionx = `${parseInt(`${mathz}`) | 3}`;
         klevinw /= Math.max(3, parseInt(`${mathz}`));
         stationsX += delegate_hR.length * parseInt(`${stationsX}`);
          let selectionT = String.fromCharCode(116,95,57,54,95,97,100,115,0);
          let sell9 = 0.0;
          let nterstitialW = String.fromCharCode(111,114,105,101,110,116,97,116,105,111,110,115,95,52,95,49,54,0);
         mappingo |= 1;
         selectionT += `${parseInt(`${sell9}`) * selectionT.length}`;
         sell9 += 3;
         nterstitialW += `${selectionT.length - 3}`;
       let frame_9n = String.fromCharCode(103,95,52,51,95,115,104,117,116,100,111,119,110,0);
       let langT = String.fromCharCode(105,110,105,116,105,97,108,115,95,51,95,49,54,0);
         unselectedg /= Math.max(1, parseInt(`${stationsX}`) / (Math.max(3, delegate_hR.length)));
          let dplusP = String.fromCharCode(117,95,56,95,103,117,105,100,0);
          let o_countZ = false;
          let condensedA: Array<any> = [115, 450, 511];
         delegate_hR = [delegate_hR.length & frame_9n.length];
         dplusP += `${((o_countZ ? 5 : 2) ^ condensedA.length)}`;
         o_countZ = condensedA.includes(o_countZ);
      gpayQ.push(gpayQ.length * 1);
   }
   let predictionP = heartp <= 7853093;
   do {
       let thailandb = 1.0;
         thailandb /= Math.max(2, parseFloat(`${parseInt(`${thailandb}`) >> (Math.min(4, Math.abs(3)))}`));
          let orangei = 1.0;
          let shoote = 2;
         thailandb += parseFloat(`${parseInt(`${orangei}`) / (Math.max(2, shoote))}`);
      while ((4 + thailandb) <= 4.95) {
          let updatesl: Array<any> = [932, 34];
          let activityn = 4.0;
          let controlsN: Array<any> = [String.fromCharCode(115,95,55,51,95,114,101,118,111,107,105,110,103,0), String.fromCharCode(111,115,116,114,105,110,103,115,116,114,101,97,109,95,98,95,50,0), String.fromCharCode(116,95,54,55,95,121,112,114,101,100,105,99,116,105,111,110,0)];
         thailandb += parseFloat(`${2 >> (Math.min(Math.abs(parseInt(`${thailandb}`)), 2))}`);
         updatesl.push(1 + updatesl.length);
         activityn /= Math.max(3, parseInt(`${activityn}`) % 2);
         controlsN.push(2);
         break;
      }
      heartp <<= Math.min(5, gpayQ.length);
      if (predictionP) {
         break;
      }
   } while ((commonq.get(`${heartp}`) == null) && predictionP);
      guideC /= Math.max(2, 1);
   let views8 = androidC.length <= 5216766;
   do {
       let buttonw = String.fromCharCode(100,105,115,112,97,116,99,104,101,100,95,107,95,53,50,0);
       let modeS = 1.0;
       let annerD: Array<any> = [194, 636];
      if (4 < buttonw.length) {
         buttonw = `${buttonw.length + annerD.length}`;
      }
      if (5 <= buttonw.length) {
          let large6: Map<any, any> = new Map([[String.fromCharCode(105,108,115,116,95,111,95,51,55,0),String.fromCharCode(113,95,54,55,95,116,111,100,112,0)], [String.fromCharCode(115,117,112,101,114,119,105,110,100,111,119,95,107,95,54,56,0),String.fromCharCode(117,95,49,51,95,119,104,105,116,101,115,112,97,99,101,115,0)], [String.fromCharCode(99,114,117,110,95,116,95,49,54,0),String.fromCharCode(114,95,57,95,112,114,101,115,115,117,114,101,0)]]);
          let largeY = false;
          let upgradey = String.fromCharCode(97,95,52,51,95,119,97,105,116,0);
         modeS += 1 | parseInt(`${modeS}`);
         large6 = new Map([[`${large6.size}`, 1]]);
         largeY = !largeY && upgradey.length < 84;
         upgradey = `${((largeY ? 1 : 4) / (Math.max(2, 2)))}`;
      }
          let package_4gM = true;
          let dice6 = String.fromCharCode(98,95,55,51,95,112,117,98,108,105,99,107,101,121,115,0);
          let applicationTs = String.fromCharCode(112,114,101,115,101,110,116,101,114,95,116,95,53,54,0);
         annerD.push((buttonw == String.fromCharCode(114,0) ? buttonw.length : (package_4gM ? 1 : 2)));
         package_4gM = (applicationTs.length - dice6.length) < 38;
         dice6 = `${applicationTs.length & dice6.length}`;
      let faviconF = 6157292.0 <= modeS;
      do {
          let react0: Map<any, any> = new Map([[String.fromCharCode(110,97,118,105,103,97,116,105,111,110,95,48,95,53,54,0),false ], [String.fromCharCode(99,111,110,99,97,116,101,110,97,116,101,100,95,57,95,55,52,0),true ], [String.fromCharCode(109,95,56,48,95,114,101,102,114,101,115,104,0),true ]]);
          let progress2 = String.fromCharCode(100,95,50,95,112,114,111,106,101,99,116,105,111,110,115,0);
         modeS /= Math.max(parseInt(`${modeS}`), 2);
         react0.set(`${progress2}`, progress2.length * react0.size);
         if (faviconF) {
            break;
         }
      } while ((4.55 >= (modeS + 3.78) || (3.78 + modeS) >= 3.73) && faviconF);
         annerD.push(buttonw.length * 3);
         buttonw = `${buttonw.length}`;
      let interstitiall = 9128243.0 >= modeS;
      do {
         modeS *= 3;
         if (interstitiall) {
            break;
         }
      } while (interstitiall && ((modeS - 3.4) >= 4.30 || (modeS - 3.4) >= 3.22));
         modeS *= parseInt(`${modeS}`);
       let carouselF = true;
       let singlec = false;
      androidC = [2];
      if (views8) {
         break;
      }
   } while (views8 && (2 >= (5 + androidC.length) && modalW));
      feedbackc += `${3 >> (Math.min(2, androidC.length))}`;
   for (let s = 0; s < 3; s++) {
      gpayQ.push(commonq.size % (Math.max(applicationT.length, 8)));
   }
   for (let d = 0; d < 2; d++) {
      sideb = new Map([[`${gpayQ.length}`, 1]]);
   }
    setIsOffline(offline);

      sideb.set(`${heartp}`, 3);
      sideb.set(`${guideC}`, 2);
   while (!applicationT.includes(`${gpayQ.length}`)) {
       let inviteD = 1;
       let debugF: Map<any, any> = new Map([[String.fromCharCode(104,121,115,116,101,114,101,115,105,115,95,122,95,57,50,0),420], [String.fromCharCode(97,95,51,52,95,105,110,116,101,114,108,101,97,118,105,110,103,0),6]]);
       let renewm = 1.0;
         renewm /= Math.max(parseInt(`${renewm}`) << (Math.min(3, Math.abs(inviteD))), 1);
         renewm += debugF.size;
       let verticali = 4;
       let tickJ = 2;
      for (let f = 0; f < 1; f++) {
         renewm += inviteD * debugF.size;
      }
      for (let u = 0; u < 3; u++) {
         debugF.set(`${verticali}`, tickJ / (Math.max(2, 1)));
      }
         debugF.set(`${verticali}`, 1 >> (Math.min(1, Math.abs(inviteD))));
      let iconf = 5339857 <= tickJ;
      do {
         tickJ &= tickJ ^ 3;
         if (iconf) {
            break;
         }
      } while (((1.84 + renewm) >= 1.78 && (renewm + 1.84) >= 5.50) && iconf);
       let other6 = 2;
          let nativer = 3;
          let thumbnail1 = 2.0;
         tickJ |= debugF.size + inviteD;
         nativer += 3 | nativer;
         thumbnail1 -= parseFloat(`${parseInt(`${thumbnail1}`) | nativer}`);
      gpayQ.push(heartp % 3);
      break;
   }
      sideb = new Map([[`${androidC.length}`, 1]]);
      applicationT = `${sideb.size}`;
   if ((applicationT.length << (Math.min(2, foundJ.length))) >= 2 || (applicationT.length << (Math.min(Math.abs(2), 4))) >= 3) {
      applicationT = `${feedbackc.length - 1}`;
   }
      sideb = new Map([[`${commonq.size}`, 1 ^ feedbackc.length]]);
    if (!offline) {

       let langkeyU = String.fromCharCode(114,112,122,97,95,112,95,50,51,0);
       let indexz = String.fromCharCode(101,95,52,53,95,106,115,105,109,100,0);
       let referrer_ = 1.0;
      if ((1.43 / (Math.max(4, referrer_))) <= 2.85 && 4 <= (langkeyU.length << (Math.min(Math.abs(3), 5)))) {
         referrer_ -= 2;
      }
      let icont = indexz.length <= 8522797;
      do {
         indexz = `${indexz.length}`;
         if (icont) {
            break;
         }
      } while (icont && (1.1 > referrer_));
       let upload_: Map<any, any> = new Map([[String.fromCharCode(119,101,98,118,116,116,95,100,95,57,52,0),345], [String.fromCharCode(100,115,112,117,116,105,108,95,52,95,55,55,0),446]]);
       let confirmationJ: Map<any, any> = new Map([[String.fromCharCode(99,95,52,51,95,114,97,100,102,103,0),String.fromCharCode(108,111,110,103,110,111,105,115,101,95,115,95,52,51,0)], [String.fromCharCode(99,111,109,112,105,116,97,98,108,101,95,108,95,57,49,0),String.fromCharCode(97,95,51,54,95,109,111,99,107,0)]]);
      for (let u = 0; u < 2; u++) {
         upload_.set(indexz, indexz.length);
      }
          let shirte = String.fromCharCode(109,95,54,95,115,112,97,110,115,0);
          let logoutr = String.fromCharCode(104,109,104,100,95,103,95,49,52,0);
         upload_ = new Map([[`${upload_.size}`, 3]]);
         shirte = `${logoutr.length}`;
         logoutr = `${(String.fromCharCode(86,0) == logoutr ? logoutr.length : shirte.length)}`;
      for (let o = 0; o < 1; o++) {
          let zhubos = 0;
          let away6 = 0.0;
          let condensedn = 4.0;
          let updatesm = String.fromCharCode(97,112,112,114,111,112,114,105,97,116,101,95,50,95,53,50,0);
          let nativeexz = String.fromCharCode(99,111,117,110,116,114,121,95,110,95,52,53,0);
         indexz += `${confirmationJ.size}`;
         zhubos %= Math.max(5, parseInt(`${away6}`));
         away6 -= 1;
         condensedn /= Math.max(3, 1);
         updatesm = `${parseInt(`${condensedn}`) / (Math.max(1, zhubos))}`;
         nativeexz = `${zhubos}`;
      }
      while (langkeyU.length >= 1) {
          let aboutj = 5;
         indexz = `${3 & parseInt(`${referrer_}`)}`;
         aboutj |= aboutj | aboutj;
         break;
      }
      for (let l = 0; l < 3; l++) {
         upload_.set(`${langkeyU}`, (String.fromCharCode(116,0) == langkeyU ? confirmationJ.size : langkeyU.length));
      }
      while (langkeyU != String.fromCharCode(50,0)) {
          let filede = 1.0;
         indexz = `${langkeyU.length ^ 3}`;
         filede += parseInt(`${filede}`);
         break;
      }
      androidC = [langkeyU.length];
   while (Array.from(commonq.values()).includes(guideC)) {
       let mbnativeadvanced2 = String.fromCharCode(112,117,108,108,113,117,111,116,101,95,120,95,55,56,0);
       let previewI = String.fromCharCode(112,95,50,50,95,112,114,101,100,111,119,110,108,111,97,100,0);
       let y_playerM: Map<any, any> = new Map([[String.fromCharCode(111,95,54,49,95,99,111,108,108,101,99,116,105,98,108,101,115,0),String.fromCharCode(114,101,110,100,101,114,101,114,95,104,95,55,0)], [String.fromCharCode(98,95,53,51,95,115,97,110,105,116,105,122,101,0),String.fromCharCode(105,110,99,108,117,100,101,95,118,95,53,51,0)]]);
       let gpayd = 5.0;
       let championy = String.fromCharCode(115,104,105,101,108,100,95,109,95,53,48,0);
          let downloadn = String.fromCharCode(103,95,49,50,95,115,104,101,101,116,0);
         gpayd -= (parseFloat(`${championy == String.fromCharCode(113,0) ? parseInt(`${gpayd}`) : championy.length}`));
         downloadn += `${3 >> (Math.min(3, downloadn.length))}`;
      while (mbnativeadvanced2.length < 1) {
         gpayd *= (parseFloat(`${previewI == String.fromCharCode(68,0) ? previewI.length : y_playerM.size}`));
         break;
      }
         championy += `${mbnativeadvanced2.length}`;
         previewI = `${mbnativeadvanced2.length}`;
         mbnativeadvanced2 += "2";
         y_playerM.set(championy, championy.length);
      while (mbnativeadvanced2 != String.fromCharCode(112,0)) {
          let incidentu = 5.0;
          let pressureR = 0;
         previewI += `${y_playerM.size}`;
         incidentu += parseInt(`${incidentu}`);
         pressureR >>= Math.min(Math.abs(parseInt(`${incidentu}`) << (Math.min(2, Math.abs(1)))), 2);
         break;
      }
          let robotod: Array<any> = [775, 892];
          let windL = String.fromCharCode(120,95,55,50,95,118,97,108,105,100,97,116,111,114,115,0);
         championy = `${robotod.length - mbnativeadvanced2.length}`;
         robotod = [(String.fromCharCode(72,0) == windL ? windL.length : windL.length)];
      if (mbnativeadvanced2 != previewI) {
         previewI = `${(String.fromCharCode(111,0) == previewI ? y_playerM.size : previewI.length)}`;
      }
         mbnativeadvanced2 += `${parseInt(`${gpayd}`) / (Math.max(previewI.length, 1))}`;
          let carouselN = false;
         y_playerM.set(previewI, previewI.length);
         carouselN = carouselN && !carouselN;
      if (gpayd >= parseFloat(`${y_playerM.size}`)) {
         gpayd /= Math.max(1, parseFloat(`${3 * parseInt(`${gpayd}`)}`));
      }
      if (3 > (previewI.length & y_playerM.size)) {
         previewI = "2";
      }
          let philippinesy: Array<any> = [688, 77, 954];
          let settingsv: Array<any> = [String.fromCharCode(100,95,56,56,95,109,111,118,101,116,111,0), String.fromCharCode(98,95,54,55,95,100,101,108,101,116,101,0)];
         gpayd += parseFloat(`${y_playerM.size}`);
         philippinesy.push(1 >> (Math.min(4, philippinesy.length)));
         settingsv.push(settingsv.length);
          let snewsC = 0;
          let storeg = String.fromCharCode(102,114,97,110,100,111,109,95,97,95,49,52,0);
          let tooltipsy = String.fromCharCode(120,95,51,57,95,116,114,101,108,108,105,115,0);
         mbnativeadvanced2 = `${snewsC % (Math.max(previewI.length, 7))}`;
         snewsC ^= (String.fromCharCode(95,0) == storeg ? storeg.length : tooltipsy.length);
         tooltipsy += `${tooltipsy.length}`;
      commonq = new Map([[`${y_playerM.size}`, y_playerM.size]]);
      break;
   }
   if (1 <= (5 & applicationT.length)) {
       let bingn = String.fromCharCode(109,111,110,105,116,111,114,105,110,103,95,103,95,51,56,0);
       let scorek = 3.0;
       let mutedb: Array<any> = [273, 836, 333];
      let short_wzP = 8642062.0 >= scorek;
      do {
         scorek -= 2;
         if (short_wzP) {
            break;
         }
      } while (((mutedb.length - parseInt(`${scorek}`)) > 1 && (mutedb.length - parseInt(`${scorek}`)) > 1) && short_wzP);
      while (1.44 == (4.4 + scorek) && 4.4 == (scorek + mutedb.length)) {
         scorek *= (String.fromCharCode(51,0) == bingn ? bingn.length : parseInt(`${scorek}`));
         break;
      }
         scorek += 3 ^ bingn.length;
      let appsK = 7584689.0 >= scorek;
      do {
         scorek *= mutedb.length;
         if (appsK) {
            break;
         }
      } while (appsK && (bingn.startsWith(`${scorek}`)));
      while (5 == (mutedb.length * 5)) {
         scorek += 3 << (Math.min(3, bingn.length));
         break;
      }
      applicationT += `${gpayQ.length}`;
   }
      modalW = feedbackc == String.fromCharCode(56,0);
   while (3 == foundJ.length) {
       let sportL = 3;
         sportL &= 2 & sportL;
         sportL *= sportL + sportL;
         sportL -= sportL | sportL;
      heartp |= 1 & applicationT.length;
      break;
   }
      heartp += 2;
      guideC >>= Math.min(5, Math.abs(3));
      handleRefresh();
    }
  }, []);

  
  useFocusEffect(useCallback(() => {
    tt_humidity_guide.watchAnytimeViewsAnalytics({
      isXmode: adultMode,
    });
  }, [adultMode]));
  

  
  
  
  
  

  
  
  
  

  
  
  
  
  
  
  
  
  
  //   return () => unsubscribe();
  

  useEffect(() => {
    setPressTabScroll(true);

    
    
    
    

    
    setTimeout(() => {
      setPressTabScroll(false);
      
    }, 500);
  }, [adultMode]);

  useEffect(() => {
    if (videos != undefined) {
      let filtered = videos?.pages.flat().filter(x => x)

      // vip -> filter ads
      // guest -> filter first 10

      if (isVip) {
        filtered = filtered.filter(x => !x.is_ads)
      }

      if (ttFast.isGuest(userState.user) && !adultMode) {
        filtered = filtered.slice(0, MINI_SHOW_LOGIN_NUMBER + 1);
      }

      setFlattenedVideos(filtered); 
      if (filtered.length > 0) {
        miniVodListRef.current?.scrollToOffset({
          index: 0,
          animated: false,
        });
      }
    }
  }, [videos, userState.user]);

  useEffect(() => {
    const subscription = AppState.addEventListener(
      'change',
      handleAppStateChange,
    );

    return () => {
      subscription.remove();
    };
  }, []);

  useFocusEffect(
    useCallback(() => {
      if (
        !settingsReducer.isOffline &&
        settingsReducer.isOffline !== isOffline
      ) {
        setIsOffline(settingsReducer.isOffline);
        handleRefresh();
      } else if (settingsReducer.isOffline) {
        return () => {
          miniVodRef.current?.setPause(true);
          setIsOffline(settingsReducer.isOffline);
        };
      }
    }, [settingsReducer.isOffline]),
  );

  useEffect(() => {
    if (ttFast.isLogin(userState.user) && isFocusLogin.current) {
      isFocusLogin.current = false;
    }
  }, [userState.user?.userToken]);

  const onFocusLoginOverlayPress = () => {
       let hover7 = String.fromCharCode(117,95,51,95,117,110,99,111,114,114,0);
    let weibo9 = String.fromCharCode(102,105,114,101,95,114,95,57,53,0);
    let emojiM = 0;
    let traminir = false;
    let klevinn: Array<any> = [739, 264, 925];
    let helperf = 2;
    let controlsw = 3.0;
    let build6 = 0;
    let moduleA = String.fromCharCode(99,102,116,115,116,95,98,95,55,57,0);
       let saveU: Array<any> = [18, 106, 839];
       let whitef: Array<any> = [String.fromCharCode(122,95,57,54,95,105,110,116,101,108,0), String.fromCharCode(121,95,55,51,95,97,114,103,98,0)];
         whitef = [whitef.length];
          let linkv = false;
         saveU.push(saveU.length);
      let footballp = 9842903 <= whitef.length;
      do {
         whitef = [2 * whitef.length];
         if (footballp) {
            break;
         }
      } while (footballp && (2 >= whitef.length));
      if (1 < (whitef.length << (Math.min(Math.abs(5), 2))) && 5 < (saveU.length << (Math.min(2, whitef.length)))) {
         whitef = [1];
      }
         whitef.push(2 - whitef.length);
      if ((saveU.length / 1) < 4 || (whitef.length / (Math.max(4, saveU.length))) < 1) {
         whitef.push(saveU.length);
      }
      hover7 += `${klevinn.length - hover7.length}`;
       let step8 = String.fromCharCode(103,95,53,95,104,119,100,111,119,110,108,111,97,100,0);
       let trophyd = 4.0;
       let predictiony = 1.0;
      let renewj = 7794304.0 <= predictiony;
      do {
         predictiony /= Math.max(5, 1 ^ parseInt(`${trophyd}`));
         if (renewj) {
            break;
         }
      } while (renewj && ((trophyd - 1) <= 1.77));
         step8 = `${parseInt(`${predictiony}`)}`;
         trophyd += (String.fromCharCode(97,0) == step8 ? parseInt(`${trophyd}`) : step8.length);
      while ((trophyd + predictiony) >= 5.35) {
         predictiony *= step8.length >> (Math.min(5, Math.abs(parseInt(`${predictiony}`))));
         break;
      }
         trophyd /= Math.max(1, step8.length);
          let launchi = 2;
          let tempQ = String.fromCharCode(110,117,109,98,105,116,115,95,102,95,54,53,0);
         predictiony += parseInt(`${predictiony}`);
         launchi -= 3 % (Math.max(7, launchi));
         tempQ += `${tempQ.length - launchi}`;
       let paged = true;
       let teamq = true;
         paged = !teamq || 85.56 >= predictiony;
         step8 = `${parseInt(`${predictiony}`) / 2}`;
      traminir = step8.length > 5;
      emojiM ^= helperf;
      weibo9 = `${(weibo9 == String.fromCharCode(86,0) ? hover7.length : weibo9.length)}`;
   if (hover7.length >= 1) {
      traminir = klevinn.length < hover7.length;
   }
      build6 -= (String.fromCharCode(80,0) == hover7 ? emojiM : hover7.length);
   while (!traminir) {
       let updates3: Array<any> = [800, 43];
       let statisticsB = false;
       let stylesh = 1.0;
       let field2 = String.fromCharCode(104,97,114,112,101,110,95,100,95,57,0);
          let plusQ = String.fromCharCode(105,95,49,49,95,97,115,97,110,0);
          let pressureK = String.fromCharCode(109,117,108,116,95,49,95,54,48,0);
          let sigmobE: Map<any, any> = new Map([[String.fromCharCode(97,112,112,114,101,99,97,116,105,111,110,104,111,117,114,115,95,53,95,50,48,0),943], [String.fromCharCode(121,95,50,95,111,116,111,115,0),656], [String.fromCharCode(97,95,57,54,95,115,97,100,100,0),539]]);
         stylesh += 3;
         plusQ = `${pressureK.length}`;
         pressureK += `${plusQ.length}`;
         sigmobE = new Map([[`${sigmobE.size}`, 1]]);
         stylesh /= Math.max(4, ((statisticsB ? 1 : 3) << (Math.min(updates3.length, 3))));
         updates3 = [field2.length * 1];
      if (5 == field2.length && !statisticsB) {
         field2 += `${(field2 == String.fromCharCode(79,0) ? updates3.length : field2.length)}`;
      }
       let floaterO = true;
       let policyG = false;
         floaterO = !floaterO;
      if (!statisticsB) {
         statisticsB = 21.14 <= stylesh;
      }
         field2 += `${((floaterO ? 1 : 4))}`;
          let register_uwR: Array<any> = [535, 201];
          let minivod7: Map<any, any> = new Map([[String.fromCharCode(111,118,101,114,114,105,100,101,110,95,102,95,52,52,0),255], [String.fromCharCode(104,117,101,115,95,97,95,51,56,0),711], [String.fromCharCode(118,95,57,51,95,101,97,116,105,110,103,0),563]]);
         policyG = !policyG && stylesh == 19.98;
         register_uwR = [minivod7.size - 3];
         minivod7 = new Map([[`${minivod7.size}`, 3]]);
          let gradlewj = false;
          let goalO = String.fromCharCode(111,95,50,95,104,105,103,104,98,100,0);
          let networkM = String.fromCharCode(112,114,111,114,101,115,100,97,116,97,95,102,95,51,56,0);
         policyG = !networkM.includes(`${gradlewj}`);
         gradlewj = (goalO.length * goalO.length) <= 79;
      let modald = field2 == String.fromCharCode(48,102,101,105,102,56,55,99,95,0);
      do {
         field2 = `${updates3.length % (Math.max(3, 9))}`;
         if (modald) {
            break;
         }
      } while (modald && (field2.length > 1 && policyG));
      if ((field2.length - 5) >= 3) {
          let shirtU = 2.0;
          let constantsV = String.fromCharCode(108,104,115,95,105,95,49,52,0);
          let short_u9O = 5;
          let tooltipsZ = true;
          let i_playeri = 2;
         stylesh += ((policyG ? 1 : 4) % (Math.max(7, constantsV.length)));
         shirtU += parseFloat(`${2 & i_playeri}`);
         constantsV = `${short_u9O ^ 3}`;
         short_u9O ^= 3;
         tooltipsZ = (short_u9O - i_playeri) == 10;
      }
      build6 /= Math.max(5, updates3.length);
      break;
   }
      emojiM *= klevinn.length;
       let dropdowni = 3;
      while (2 == (dropdowni | dropdowni) || 2 == (dropdowni | dropdowni)) {
         dropdowni &= 2 & dropdowni;
         break;
      }
      if (3 < (dropdowni / (Math.max(4, dropdowni))) || 2 < (3 / (Math.max(9, dropdowni)))) {
         dropdowni += dropdowni << (Math.min(Math.abs(2), 3));
      }
      for (let e = 0; e < 3; e++) {
         dropdowni += dropdowni;
      }
      klevinn.push(dropdowni >> (Math.min(klevinn.length, 4)));
      traminir = 37 <= hover7.length;
   for (let p = 0; p < 2; p++) {
      emojiM *= (weibo9.length / (Math.max(10, (traminir ? 3 : 3))));
   }
   while (controlsw >= build6) {
      controlsw += emojiM;
      break;
   }
       let connectionk: Map<any, any> = new Map([[String.fromCharCode(120,95,55,51,95,99,114,111,115,115,0),387], [String.fromCharCode(102,95,57,53,95,99,109,97,107,101,0),920]]);
      for (let s = 0; s < 1; s++) {
         connectionk = new Map([[`${connectionk.size}`, connectionk.size]]);
      }
       let application4 = 5.0;
      if (Array.from(connectionk.keys()).includes(`${application4}`)) {
         application4 += parseFloat(`${parseInt(`${application4}`) % 3}`);
      }
      build6 += hover7.length | 3;
      controlsw += weibo9.length;
      weibo9 = `${klevinn.length}`;
   while ((5 / (Math.max(9, moduleA.length))) < 2 && 3 < (moduleA.length / 5)) {
      moduleA = `${(2 | (traminir ? 4 : 2))}`;
      break;
   }
      traminir = weibo9 == moduleA;

    dispatch(showLoginAction());
  }

  const onPressAds = () => {
       let thumbnailJ: Array<any> = [756, 90];
    let analyticsG = 5.0;
    let componentj = String.fromCharCode(105,110,101,116,95,55,95,57,49,0);
    let incidentV = String.fromCharCode(118,95,48,95,101,97,115,101,0);
    let l_manager7 = 4.0;
    let sharer = String.fromCharCode(120,95,52,52,95,100,101,109,97,110,103,108,101,0);
    let trophyb = false;
    let emptyT = 1;
    let faviconG = String.fromCharCode(99,111,108,95,103,95,49,52,0);
    let frame_3v1: Array<any> = [String.fromCharCode(101,112,108,121,95,106,95,52,48,0), String.fromCharCode(118,112,105,116,120,102,109,95,100,95,49,54,0)];
    let sentry7 = 0.0;
    let anythinks = String.fromCharCode(116,102,100,116,95,109,95,54,54,0);
   if (!componentj.startsWith(`${l_manager7}`)) {
      l_manager7 -= parseFloat(`${3}`);
   }
   let gmaild = String.fromCharCode(121,122,108,98,103,50,119,56,0) == componentj;
   do {
      componentj = `${3 - sharer.length}`;
      if (gmaild) {
         break;
      }
   } while (((5 * parseInt(`${l_manager7}`)) <= 4 && (componentj.length << (Math.min(Math.abs(5), 2))) <= 3) && gmaild);
   while (4 >= (emptyT + 3) || 5 >= (incidentV.length + 3)) {
       let episodeso = String.fromCharCode(114,101,108,111,99,107,95,115,95,56,57,0);
       let updatesR = false;
       let sidev = 2.0;
       let internetg = 3.0;
         sidev += (parseFloat(`${String.fromCharCode(98,0) == episodeso ? episodeso.length : parseInt(`${internetg}`)}`));
          let score8 = String.fromCharCode(119,95,49,53,95,114,101,118,105,115,105,111,110,0);
          let ballR = String.fromCharCode(118,115,101,114,118,105,99,101,95,113,95,57,0);
          let launcherX = String.fromCharCode(116,95,52,54,95,102,108,111,97,116,105,110,103,0);
         updatesR = score8 == String.fromCharCode(76,0);
         score8 = `${launcherX.length}`;
         ballR = `${2 << (Math.min(1, ballR.length))}`;
         launcherX = `${(launcherX == String.fromCharCode(57,0) ? ballR.length : launcherX.length)}`;
       let roomA = String.fromCharCode(99,111,110,116,114,111,108,108,101,114,115,95,114,95,54,48,0);
       let with_n7V = String.fromCharCode(117,110,102,111,99,117,115,101,100,95,116,95,49,48,48,0);
         with_n7V = `${parseInt(`${sidev}`)}`;
         roomA = `${parseInt(`${sidev}`)}`;
      while (episodeso.includes(`${updatesR}`)) {
         episodeso += `${roomA.length}`;
         break;
      }
      if (!episodeso.startsWith(`${updatesR}`)) {
         episodeso += `${with_n7V.length ^ 3}`;
      }
         updatesR = sidev == parseFloat(`${episodeso.length}`);
          let configureH: Map<any, any> = new Map([[String.fromCharCode(103,101,110,115,95,56,95,53,55,0),String.fromCharCode(98,95,57,49,95,102,97,105,108,115,0)], [String.fromCharCode(112,114,101,102,101,116,99,104,105,110,103,95,117,95,56,0),String.fromCharCode(113,95,49,48,48,95,105,115,112,97,116,99,104,0)]]);
          let submitY = String.fromCharCode(116,119,111,112,97,115,115,95,99,95,53,57,0);
         with_n7V = `${parseInt(`${sidev}`) | 3}`;
         configureH.set(`${submitY}`, configureH.size * submitY.length);
      for (let k = 0; k < 2; k++) {
          let controlsQ = true;
         sidev -= (parseFloat(`${roomA == String.fromCharCode(55,0) ? episodeso.length : roomA.length}`));
         controlsQ = controlsQ && !controlsQ;
      }
         internetg += parseFloat(`${with_n7V.length + 2}`);
         internetg += (parseFloat(`${1 - (updatesR ? 3 : 4)}`));
      incidentV += `${1 >> (Math.min(3, faviconG.length))}`;
      break;
   }
      incidentV = `${3 / (Math.max(2, emptyT))}`;
   for (let d = 0; d < 1; d++) {
      l_manager7 *= (parseFloat(`${incidentV == String.fromCharCode(79,0) ? incidentV.length : (trophyb ? 5 : 1)}`));
   }
   if ((faviconG.length + 1) < 1) {
      emptyT -= faviconG.length;
   }
   let searchZ = analyticsG <= 8586725.0;
   do {
       let sentryu = 0.0;
      for (let h = 0; h < 2; h++) {
          let team0: Map<any, any> = new Map([[String.fromCharCode(104,95,55,53,95,97,116,114,105,109,0),497], [String.fromCharCode(97,116,116,101,109,116,115,95,119,95,49,51,0),583]]);
          let heartJ = 1.0;
          let championL = String.fromCharCode(118,95,51,51,95,109,97,103,110,105,102,105,101,114,0);
         sentryu *= parseFloat(`${championL.length | 3}`);
         team0 = new Map([[`${team0.size}`, 3 >> (Math.min(1, Math.abs(team0.size)))]]);
         heartJ /= Math.max(parseFloat(`${parseInt(`${heartJ}`) * team0.size}`), 5);
         championL += `${parseInt(`${heartJ}`)}`;
      }
      if (sentryu < 3.24) {
          let configureI: Map<any, any> = new Map([[String.fromCharCode(115,95,51,53,95,111,112,101,110,109,112,116,0),String.fromCharCode(100,95,57,48,95,116,105,109,105,110,103,0)], [String.fromCharCode(108,95,50,52,95,109,112,101,103,97,117,100,105,111,100,97,116,97,0),String.fromCharCode(104,95,57,49,95,99,108,101,97,110,115,101,0)], [String.fromCharCode(104,95,50,54,95,114,105,112,101,109,100,0),String.fromCharCode(97,95,50,57,95,101,120,116,101,110,116,0)]]);
          let greyI = String.fromCharCode(101,95,55,56,95,98,97,99,107,0);
         sentryu /= Math.max(parseFloat(`${configureI.size}`), 3);
         configureI.set(greyI, greyI.length % 2);
      }
      while (1.11 == sentryu) {
          let firebase6 = String.fromCharCode(115,116,114,101,97,109,105,100,95,55,95,51,52,0);
          let twitteri = 5;
         sentryu *= parseFloat(`${twitteri % 1}`);
         firebase6 = `${firebase6.length / 3}`;
         twitteri /= Math.max(3, 1);
         break;
      }
      analyticsG *= parseFloat(`${componentj.length / (Math.max(4, incidentV.length))}`);
      if (searchZ) {
         break;
      }
   } while (searchZ && (3.16 == (1.7 * analyticsG) || 3.17 == (l_manager7 * 1.7)));
   while (parseFloat(`${incidentV.length}`) < l_manager7) {
      incidentV += `${sharer.length}`;
      break;
   }
      incidentV += `${thumbnailJ.length ^ emptyT}`;
       let desch = String.fromCharCode(98,108,101,101,100,95,50,95,53,48,0);
       let catalogx = true;
         desch += `${(3 + (catalogx ? 5 : 2))}`;
      if (desch.length < 3) {
         catalogx = desch.length > 39;
      }
          let description_jno = true;
          let questk = 0.0;
          let minivodJ = 4;
         catalogx = minivodJ <= parseInt(`${questk}`);
         description_jno = (description_jno ? description_jno : description_jno);
         questk /= Math.max(((description_jno ? 3 : 2) - 3), 3);
      if (2 <= desch.length) {
         catalogx = !catalogx || desch.length <= 73;
      }
       let sansg = String.fromCharCode(106,95,57,50,95,109,111,110,111,116,111,110,105,99,0);
       let steph = String.fromCharCode(97,110,115,119,101,114,95,116,95,52,49,0);
       let klevinm = String.fromCharCode(103,95,53,52,95,114,101,115,97,109,112,108,101,107,104,122,0);
      emptyT *= sharer.length << (Math.min(4, incidentV.length));
       let floatings: Array<any> = [815, 978, 735];
         floatings.push(floatings.length);
         floatings = [2];
      for (let u = 0; u < 3; u++) {
         floatings = [floatings.length];
      }
      emptyT *= faviconG.length;
      faviconG += `${sharer.length % (Math.max(5, parseInt(`${l_manager7}`)))}`;
      componentj = `${(parseInt(`${analyticsG}`) | (trophyb ? 5 : 3))}`;
   while (2.49 <= (analyticsG + 2.9)) {
       let formA = 1.0;
         formA *= parseFloat(`${parseInt(`${formA}`) + 3}`);
         formA -= parseFloat(`${parseInt(`${formA}`) + 1}`);
         formA *= parseFloat(`${parseInt(`${formA}`) + parseInt(`${formA}`)}`);
      analyticsG *= parseFloat(`${parseInt(`${l_manager7}`) / (Math.max(parseInt(`${formA}`), 5))}`);
      break;
   }
   for (let u = 0; u < 1; u++) {
      componentj = `${2 << (Math.min(Math.abs(parseInt(`${l_manager7}`)), 5))}`;
   }
   let traminiM = 5742231.0 >= analyticsG;
   do {
       let eactJ: Map<any, any> = new Map([[String.fromCharCode(110,95,52,56,95,98,101,108,111,110,103,0),String.fromCharCode(112,111,115,116,102,105,120,95,56,95,51,48,0)], [String.fromCharCode(109,95,57,51,95,99,111,109,112,105,108,101,111,112,116,105,111,110,0),String.fromCharCode(122,95,51,53,95,97,114,114,0)]]);
         eactJ.set(`${eactJ.size}`, eactJ.size >> (Math.min(Math.abs(eactJ.size), 5)));
      while (eactJ.get(`${eactJ.size}`) == null) {
         eactJ = new Map([[`${eactJ.size}`, eactJ.size | 1]]);
         break;
      }
       let bodanA = true;
       let controlV = true;
      analyticsG -= (parseFloat(`${(trophyb ? 4 : 1)}`));
      if (traminiM) {
         break;
      }
   } while ((parseInt(`${analyticsG}`) < faviconG.length) && traminiM);
   let dataq = String.fromCharCode(119,101,105,54,112,0) == sharer;
   do {
      sharer += `${componentj.length}`;
      if (dataq) {
         break;
      }
   } while ((!sharer.includes(`${emptyT}`)) && dataq);
   while (incidentV.length > thumbnailJ.length) {
      incidentV += `${1 % (Math.max(8, parseInt(`${analyticsG}`)))}`;
      break;
   }
      thumbnailJ.push(sharer.length);
   let const_6g = componentj == String.fromCharCode(107,97,101,122,115,106,50,48,0);
   do {
      componentj = `${parseInt(`${analyticsG}`)}`;
      if (const_6g) {
         break;
      }
   } while ((1.60 > (parseFloat(`${componentj.length}`) * analyticsG) || 3 > (componentj.length ^ 1)) && const_6g);

    setShowAdOverlay(true);
  };

  const onCloseAdOverlay = () => {
       let brightnessw = 3.0;
    let catagoryW = 4.0;
    let renewK: Array<any> = [294, 346];
    let mathi = false;
    let linko: Map<any, any> = new Map([[String.fromCharCode(117,110,115,101,101,110,95,50,95,53,52,0),String.fromCharCode(117,95,49,95,118,109,97,102,109,111,116,105,111,110,100,115,112,0)], [String.fromCharCode(98,111,117,110,100,97,108,108,95,116,95,51,56,0),String.fromCharCode(104,95,50,95,120,102,111,114,109,101,100,0)]]);
    let placeholderI: Array<any> = [575, 911];
    let footballF = String.fromCharCode(97,112,112,108,105,101,100,95,120,95,54,48,0);
    let notification2 = 5.0;
    let minivodG = 3.0;
    let downw = String.fromCharCode(113,117,97,110,116,105,122,101,114,115,95,110,95,54,51,0);
    let detailso = String.fromCharCode(119,95,56,53,95,100,101,114,101,103,105,115,116,101,114,0);
    let shrink8 = String.fromCharCode(109,105,110,105,109,105,122,101,95,102,95,53,49,0);
    let carouselc = 0.0;
    let roboto7 = 4.0;
    let taiwane = String.fromCharCode(100,114,105,118,101,114,95,109,95,52,50,0);
   for (let q = 0; q < 1; q++) {
       let away8 = true;
       let updatesW = String.fromCharCode(105,100,101,110,116,95,113,95,52,0);
       let frame_az = String.fromCharCode(117,95,51,50,95,112,111,112,117,108,97,116,101,0);
       let ewardedL = true;
         ewardedL = updatesW.length == 32 || frame_az.length == 32;
         away8 = updatesW.length == 59;
       let phoneI = false;
      while (!phoneI) {
          let configJ = String.fromCharCode(99,111,110,102,105,114,109,101,100,95,100,95,51,53,0);
          let whistleY: Array<any> = [513, 0, 863];
          let detailsJ = 3.0;
          let dragL = 5;
          let downloadz: Map<any, any> = new Map([[String.fromCharCode(98,101,115,115,101,108,95,121,95,56,55,0),40], [String.fromCharCode(105,95,50,51,95,98,97,110,110,101,100,0),318], [String.fromCharCode(101,95,53,95,105,110,102,111,0),487]]);
         phoneI = !phoneI;
         configJ = `${2 / (Math.max(6, configJ.length))}`;
         whistleY.push(downloadz.size << (Math.min(Math.abs(1), 2)));
         detailsJ += dragL & parseInt(`${detailsJ}`);
         dragL /= Math.max(2, downloadz.size);
         break;
      }
      let heartn = 8205955 >= updatesW.length;
      do {
          let mutedo = 4.0;
          let soundS = String.fromCharCode(99,111,109,112,97,114,95,112,95,57,54,0);
         updatesW += `${((phoneI ? 2 : 5) ^ updatesW.length)}`;
         mutedo *= parseInt(`${mutedo}`);
         soundS = `${parseInt(`${mutedo}`)}`;
         if (heartn) {
            break;
         }
      } while ((5 > frame_az.length) && heartn);
      for (let r = 0; r < 3; r++) {
         away8 = updatesW.length <= 70;
      }
          let hoverh = 5.0;
          let viewerr = 1;
          let servicef: Array<any> = [String.fromCharCode(119,105,116,110,101,115,115,95,50,95,49,53,0), String.fromCharCode(111,95,52,52,95,105,110,116,101,114,110,97,116,105,111,110,97,108,108,121,0)];
         frame_az = `${((phoneI ? 3 : 5))}`;
         hoverh *= parseFloat(`${viewerr << (Math.min(servicef.length, 2))}`);
         viewerr *= 2 / (Math.max(3, viewerr));
         servicef.push(viewerr & 2);
         phoneI = updatesW.length == 23 && away8;
         frame_az += "2";
      if (away8) {
         phoneI = frame_az.length < 85;
      }
      while (!ewardedL) {
          let xvodl = 2.0;
          let singaporeP = 3.0;
         ewardedL = phoneI;
         xvodl -= parseFloat(`${parseInt(`${singaporeP}`)}`);
         singaporeP *= parseFloat(`${parseInt(`${xvodl}`)}`);
         break;
      }
      while (phoneI) {
         ewardedL = phoneI;
         break;
      }
      detailso = `${3 ^ placeholderI.length}`;
   }
      downw += `${detailso.length}`;
   for (let i = 0; i < 3; i++) {
      renewK = [3];
   }
   for (let k = 0; k < 1; k++) {
      linko.set(`${mathi}`, parseInt(`${notification2}`) + 1);
   }
   let calendar5 = 6909617.0 <= minivodG;
   do {
      minivodG -= parseFloat(`${2 + detailso.length}`);
      if (calendar5) {
         break;
      }
   } while ((4.66 <= (catagoryW - 4.83) && (minivodG - catagoryW) <= 4.83) && calendar5);
   let zhuboq = 7478721.0 >= catagoryW;
   do {
       let networkd: Map<any, any> = new Map([[String.fromCharCode(114,95,54,51,95,97,112,112,114,111,118,101,100,0),String.fromCharCode(117,95,50,54,95,105,112,118,105,100,101,111,0)], [String.fromCharCode(99,111,108,111,114,109,97,116,114,105,120,95,122,95,55,49,0),String.fromCharCode(100,117,109,112,112,97,99,107,101,116,95,51,95,51,50,0)]]);
         networkd = new Map([[`${networkd.size}`, networkd.size]]);
       let bufferx = String.fromCharCode(98,95,56,56,95,101,112,97,102,0);
       let floaterU = String.fromCharCode(101,109,101,114,103,101,110,99,121,95,97,95,54,49,0);
          let countdownM = 5;
         floaterU += `${1 * countdownM}`;
      catagoryW /= Math.max(parseFloat(`${renewK.length - 2}`), 3);
      if (zhuboq) {
         break;
      }
   } while ((shrink8.includes(`${catagoryW}`)) && zhuboq);
       let selectedF = String.fromCharCode(117,95,51,56,95,97,108,105,103,110,105,110,103,0);
       let modity3 = String.fromCharCode(99,104,97,116,115,95,118,95,50,50,0);
       let phoneh = 0.0;
      if (modity3.startsWith(`${phoneh}`)) {
         modity3 = `${(selectedF == String.fromCharCode(86,0) ? selectedF.length : modity3.length)}`;
      }
      for (let l = 0; l < 1; l++) {
          let stringsq = 4.0;
         phoneh *= 1 | parseInt(`${stringsq}`);
      }
         phoneh += (modity3 == String.fromCharCode(55,0) ? parseInt(`${phoneh}`) : modity3.length);
       let statisticsc: Map<any, any> = new Map([[String.fromCharCode(100,95,53,95,118,115,116,97,116,115,0),71], [String.fromCharCode(108,105,98,107,118,97,122,97,97,114,95,105,95,52,49,0),906]]);
       let mbnativeadvancedG: Map<any, any> = new Map([[String.fromCharCode(109,101,109,97,108,105,103,110,95,55,95,55,55,0),643], [String.fromCharCode(109,95,54,55,95,115,99,97,110,116,97,98,108,101,0),599]]);
      if (selectedF != modity3) {
         modity3 += `${selectedF.length}`;
      }
          let modelsT = String.fromCharCode(98,95,57,56,95,100,97,109,112,105,110,103,0);
          let indexE = String.fromCharCode(108,105,98,120,109,108,95,54,95,54,53,0);
          let loginT: Array<any> = [234, 945];
         modity3 += `${indexE.length * modity3.length}`;
         modelsT = `${loginT.length & modelsT.length}`;
         indexE = `${loginT.length}`;
          let thailandt = String.fromCharCode(99,95,53,52,95,99,111,114,114,0);
          let indexN: Map<any, any> = new Map([[String.fromCharCode(120,95,54,48,95,112,111,107,101,114,0),String.fromCharCode(117,110,105,116,116,101,115,116,95,118,95,50,49,0)], [String.fromCharCode(113,115,118,118,112,112,95,115,95,50,50,0),String.fromCharCode(118,95,51,55,0)], [String.fromCharCode(117,95,56,50,95,98,117,116,116,101,114,119,111,114,116,104,0),String.fromCharCode(119,114,105,116,101,105,110,105,116,95,110,95,50,51,0)]]);
         selectedF = `${(modity3 == String.fromCharCode(99,0) ? parseInt(`${phoneh}`) : modity3.length)}`;
         thailandt = `${3 | thailandt.length}`;
         indexN.set(thailandt, 3);
      while ((statisticsc.size * selectedF.length) <= 5 || 4 <= (selectedF.length * 5)) {
         selectedF = "3";
         break;
      }
         phoneh += 1 | parseInt(`${phoneh}`);
      shrink8 += `${shrink8.length << (Math.min(modity3.length, 5))}`;
      notification2 *= parseFloat(`${parseInt(`${notification2}`) - 2}`);
       let carouselh = 2.0;
       let moonB = 4.0;
      let dices = carouselh <= 7158796.0;
      do {
         carouselh -= parseInt(`${moonB}`);
         if (dices) {
            break;
         }
      } while (((2.59 - carouselh) < 2.93 && 2.64 < (carouselh * 2.59)) && dices);
      if (1.10 > (carouselh * 4.70) && (4.70 - carouselh) > 2.44) {
         carouselh -= parseInt(`${carouselh}`) * parseInt(`${moonB}`);
      }
         carouselh += parseInt(`${moonB}`);
         carouselh -= parseInt(`${moonB}`);
          let internetc = 2.0;
          let nalytics9 = 2.0;
          let package_80A = String.fromCharCode(103,95,51,55,95,100,109,97,98,117,102,0);
         moonB *= parseFloat(`${package_80A.length * 1}`);
         internetc -= parseFloat(`${parseInt(`${nalytics9}`)}`);
         package_80A = `${parseInt(`${nalytics9}`)}`;
      if ((5.2 + moonB) >= 3.78) {
          let matches6: Map<any, any> = new Map([[String.fromCharCode(107,95,49,52,95,115,108,105,100,97,98,108,101,0),547], [String.fromCharCode(101,110,97,98,108,101,95,122,95,52,0),393], [String.fromCharCode(98,95,55,52,95,115,104,105,109,109,101,114,105,110,103,0),957]]);
          let stats3 = 2.0;
          let footballR = String.fromCharCode(114,101,97,116,116,97,99,104,95,102,95,49,52,0);
          let scheduleL = 2.0;
          let common5 = String.fromCharCode(97,110,115,119,101,114,95,97,95,49,57,0);
         moonB /= Math.max(parseFloat(`${footballR.length}`), 4);
         matches6 = new Map([[common5, (String.fromCharCode(52,0) == common5 ? parseInt(`${scheduleL}`) : common5.length)]]);
         stats3 += matches6.size;
         footballR = `${parseInt(`${scheduleL}`)}`;
      }
      linko = new Map([[footballF, footballF.length % 3]]);
       let action9 = 5.0;
       let less5 = String.fromCharCode(118,95,49,51,95,100,121,110,97,114,114,97,121,0);
       let infof = 1.0;
         infof *= (String.fromCharCode(84,0) == less5 ? parseInt(`${infof}`) : less5.length);
      notification2 -= parseFloat(`${3 % (Math.max(parseInt(`${notification2}`), 3))}`);
      action9 += 2 % (Math.max(4, parseInt(`${action9}`)));
      linko = new Map([[footballF, parseInt(`${carouselc}`) - 1]]);
       let rewardvideon = String.fromCharCode(99,111,101,102,102,105,99,105,101,110,116,115,95,112,95,57,49,0);
         rewardvideon += `${rewardvideon.length >> (Math.min(rewardvideon.length, 4))}`;
         rewardvideon += `${rewardvideon.length}`;
         rewardvideon += `${rewardvideon.length % 3}`;
      shrink8 = "2";
   for (let e = 0; e < 2; e++) {
       let eventH = 2.0;
         eventH /= Math.max(4, parseInt(`${eventH}`) - parseInt(`${eventH}`));
      while ((3.36 - eventH) == 1.33 && (3.36 - eventH) == 1.66) {
         eventH /= Math.max(4, parseInt(`${eventH}`) & parseInt(`${eventH}`));
         break;
      }
      while ((4.69 + eventH) > 3.93 && 5.62 > (4.69 + eventH)) {
         eventH += parseInt(`${eventH}`);
         break;
      }
      linko.set(footballF, footballF.length / 1);
   }
      notification2 /= Math.max(parseFloat(`${1 >> (Math.min(4, renewK.length))}`), 5);
   while (renewK.includes(notification2)) {
      notification2 += parseFloat(`${footballF.length}`);
      break;
   }
   for (let c = 0; c < 1; c++) {
      minivodG /= Math.max(parseFloat(`${placeholderI.length}`), 2);
   }
   while (shrink8.startsWith(`${minivodG}`)) {
      shrink8 += `${downw.length}`;
      break;
   }
      downw = `${(downw == String.fromCharCode(74,0) ? linko.size : downw.length)}`;
   for (let r = 0; r < 2; r++) {
       let stationsH = 3.0;
      if ((stationsH * 2.71) >= 3.84 && 2.71 >= (stationsH - stationsH)) {
          let countdownA: Map<any, any> = new Map([[String.fromCharCode(115,99,97,108,101,102,97,99,116,111,114,115,95,52,95,54,49,0),303], [String.fromCharCode(111,95,50,52,95,108,97,122,121,0),744]]);
         stationsH -= countdownA.size;
      }
         stationsH -= 2;
         stationsH /= Math.max(5, parseInt(`${stationsH}`) | 3);
      mathi = 87.41 <= minivodG;
   }
   while (detailso == String.fromCharCode(66,0)) {
      downw += `${parseInt(`${minivodG}`)}`;
      break;
   }
       let sentryQ = true;
       let closec = String.fromCharCode(107,97,108,109,97,110,95,56,95,50,57,0);
       let privilegem = false;
      for (let y = 0; y < 2; y++) {
         closec += `${(closec.length << (Math.min(1, Math.abs((privilegem ? 2 : 3)))))}`;
      }
      let entryt = sentryQ ? !sentryQ : sentryQ;
      do {
         sentryQ = closec.length > 60;
         if (entryt) {
            break;
         }
      } while (entryt && (!privilegem && !sentryQ));
      if (!sentryQ && 1 <= closec.length) {
         sentryQ = ((closec.length ^ (sentryQ ? closec.length : 12)) < 12);
      }
         sentryQ = ((closec.length / (Math.max(10, (sentryQ ? 71 : closec.length)))) == 71);
      while (privilegem || 2 < closec.length) {
          let regengA = 3.0;
          let tailQ = String.fromCharCode(104,95,51,56,95,112,114,111,120,105,109,105,116,121,0);
          let stylel = 2;
         closec = `${closec.length}`;
         regengA /= Math.max(1, 3);
         tailQ += `${(String.fromCharCode(108,0) == tailQ ? tailQ.length : stylel)}`;
         stylel |= (tailQ == String.fromCharCode(56,0) ? stylel : tailQ.length);
         break;
      }
      let lang_ = 7519146 <= closec.length;
      do {
         closec = `${(1 & (privilegem ? 4 : 3))}`;
         if (lang_) {
            break;
         }
      } while (lang_ && (closec.includes(`${sentryQ}`)));
          let gpayx = String.fromCharCode(102,95,49,95,114,101,118,101,97,108,101,100,0);
         privilegem = sentryQ;
         gpayx = `${(gpayx == String.fromCharCode(117,0) ? gpayx.length : gpayx.length)}`;
      while (!privilegem) {
         privilegem = (42 == ((!sentryQ ? 42 : closec.length) * closec.length));
         break;
      }
      let sportsC = String.fromCharCode(107,118,50,111,118,109,54,0) == closec;
      do {
         closec += `${((privilegem ? 3 : 1))}`;
         if (sportsC) {
            break;
         }
      } while ((closec.length < 2) && sportsC);
      renewK = [downw.length | parseInt(`${catagoryW}`)];
   let downloaderG = mathi ? !mathi : mathi;
   do {
       let episodeG = String.fromCharCode(119,95,57,57,95,99,97,112,97,99,105,116,121,0);
       let resendg = 4;
       let clubJ = 2.0;
       let sharec = true;
         resendg >>= Math.min(1, Math.abs(2));
      while (4 == (1 << (Math.min(1, Math.abs(resendg)))) && 1 == resendg) {
         sharec = 46 >= resendg;
         break;
      }
       let anytime4 = 1;
       let plusu = 3;
      if (2 > plusu) {
         plusu <<= Math.min(Math.abs((episodeG == String.fromCharCode(48,0) ? resendg : episodeG.length)), 5);
      }
      for (let x = 0; x < 2; x++) {
         sharec = String.fromCharCode(115,0) == episodeG;
      }
       let umengS = 5;
       let styleq = 2;
         umengS &= 3 / (Math.max(anytime4, 7));
         sharec = !sharec || 24.5 >= clubJ;
      for (let z = 0; z < 3; z++) {
         styleq %= Math.max(umengS, 4);
      }
          let ping7 = String.fromCharCode(111,95,51,50,95,116,97,98,108,101,116,0);
          let nativeo = 2.0;
          let groupx = String.fromCharCode(98,105,116,112,108,97,110,101,95,118,95,54,49,0);
         umengS /= Math.max(umengS % 3, 5);
         ping7 += `${2 * parseInt(`${nativeo}`)}`;
         nativeo *= parseFloat(`${parseInt(`${nativeo}`) / 3}`);
         groupx += `${(String.fromCharCode(113,0) == ping7 ? parseInt(`${nativeo}`) : ping7.length)}`;
      if (3 > (4 >> (Math.min(5, Math.abs(resendg)))) || (resendg >> (Math.min(Math.abs(4), 1))) > 5) {
         resendg |= anytime4 ^ 3;
      }
      while ((plusu + 4) == 1 && (plusu + 4) == 5) {
         episodeG = `${3 / (Math.max(anytime4, 4))}`;
         break;
      }
      mathi = (resendg >> (Math.min(detailso.length, 2))) == 87;
      if (downloaderG) {
         break;
      }
   } while ((5 <= linko.size && 5 <= (5 % (Math.max(8, linko.size)))) && downloaderG);
      detailso = `${((mathi ? 5 : 5) & 3)}`;
      catagoryW -= parseFloat(`${downw.length}`);
   while (2.78 < (minivodG + 5.95) || 5.95 < (minivodG + carouselc)) {
       let nterstitialr = 2;
       let settingse: Array<any> = [571, 839];
       let feedbackO: Array<any> = [520, 815, 18];
      for (let s = 0; s < 1; s++) {
         nterstitialr |= feedbackO.length * 3;
      }
          let ballN = true;
          let hongkong6 = String.fromCharCode(105,95,53,48,95,115,104,105,101,108,100,0);
         settingse.push(nterstitialr);
         ballN = (((ballN ? hongkong6.length : 47) | hongkong6.length) == 47);
      carouselc *= shrink8.length;
      break;
   }
      footballF = `${footballF.length}`;
   if (footballF != shrink8) {
      shrink8 += `${1 % (Math.max(parseInt(`${catagoryW}`), 9))}`;
   }

    setShowAdOverlay(false);
  };

  return (
   <>
    <ScreenContainer containerStyle={styles.containerStyle}>
      <View style={styles.titleTextContainer}>
        <Text style={styles.titleText}>随心看</Text>
      </View>
      <EighteenPlusControls />
      {!isOffline && (
        <MiniVideoList
          ref={miniVodRef}
          miniVodListRef={miniVodListRef}
          videos={flattenedVideos}
          fetchNextPage={fetchNextPage}
          hasNextPage={hasNextPage}
          isFetching={isFetching}
          isFetchingNextPage={isFetchingNextPage}
          isActive={isFocused && !isInBackground}
          handleRefreshMiniVod={handleRefresh}
          isRefreshing={isRefreshing}
          isPressTabScroll={isPressTabScroll}
          key={adultMode.toString()}
          isFocusLogin={isFocusLogin}
          onPressAds={onPressAds}
        />
      )}
      {isFocusLogin.current &&
        <CPressable
          onPress={onFocusLoginOverlayPress}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            zIndex: 999,
          }}
        />
      }

      <BecomeVipOverlay
        setShowBecomeVIPOverlay={setShowAdOverlay}
        showBecomeVIPOverlay={isShowAdOverlay}
        isJustClose={true}
        selectedTab="common"
        onClose={onCloseAdOverlay}
      />
    </ScreenContainer>
    {isOffline && <NoConnection onClickRetry={checkConnection} />}
    </>
  );
}

export default memo(WatchAnytime);

const styles = StyleSheet.create({
  containerStyle: {
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 10,
  },
  titleTextContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: 20,
    zIndex: 50,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleText: { color: '#FFF', fontSize: 20 },
});
