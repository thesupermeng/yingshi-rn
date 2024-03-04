import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Image,
  ImageBackground,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";
import ScreenContainer from "../components/container/yys_executor_expand";
import { useFocusEffect, useTheme } from "@react-navigation/native";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

import {
  BottomTabScreenProps,
  useBottomTabBarHeight,
} from "@react-navigation/bottom-tabs";
import { API_DOMAIN, MATCH_API_DOMAIN } from "@utility/yys_ajax_switch";
import Animated from "react-native-reanimated";
import FastImage from "react-native-fast-image";
import yys_Matches from "../Sports/middleware/yys_libjsi";
import { Url } from "../Sports/middleware/yys_desc_resend";

import MatchScheduleNavVip from "../Sports/components/matchSchedule/yys_libswresample";
import NoConnection from "../components/common/yys_armva_classes";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";

import { useAppSelector, useSelector } from "@hooks/yys_frame";
import { yys_MintegralLibavdevice } from "@redux/yys_sport_shrink";
import { useDispatch } from "react-redux";
import BecomeVipOverlay from "../components/modal/yys_next_drag";
import { yys_Videocommon } from "@redux/reducers/yys_libavdevice";
import yys_event_common from "../../Umeng/yys_event_common";
import XvodTabIcon from "@static/images/bufferStatisticsCount.svg";
import SportTabIcon from "@static/images/placeholderMintegral.svg";
import XVodTab from "./VipPrivilege/yys_renew";
import { screenModel } from "@type/yys_service_setting";
import {
  disableAdultMode,
  setAutoSelectSport,
  showAdultModeDisclaimer,
} from "@redux/actions/yys_runtimescheduler";
import { BlurView } from "../components/blurView";
import { yys_MinivodPangle } from "../../yys_mimo_vignette";
import VipEntry from '@static/images/splash/uimanagerRelatedLangkey.svg';
import { yys_HejiCricket } from "@redux/reducers/yys_privacy_round";
import { yys_RelatedTooltips } from "@models/yys_project_pagination";
interface yys_ControlsVolume {
  has_submenu: boolean;
  ids: Array<number>;
  type: string;
}

export default ({ navigation }: BottomTabScreenProps<any>) => {
  const showSport = (yys_MinivodPangle.instance.tabConfig != null && yys_MinivodPangle.instance.len == 5)
  const { textVariants, colors, spacing } = useTheme();
  const [isOffline, setIsOffline] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const dispatch = useDispatch();
  const [showBecomeVIPOverlay, setShowBecomeVIPOverlay] = useState(false);
  const userState = useSelector<yys_HejiCricket>('userReducer');
  const settingsReducer: yys_Videocommon = useAppSelector(
    ({ settingsReducer }: yys_MintegralLibavdevice) => settingsReducer
  );

  const screenState: screenModel = useAppSelector(
    ({ screenReducer }) => screenReducer
  );

  const [selectedTab, setSelectedTab] = useState(showSport ? 'sport' : screenState.showAdultTab ? 'xvod' : null);

  const handleRejectEighteenPlus = () => {
       let libzeusz: Map<any, any> = new Map([[String.fromCharCode(117,95,56,50,95,97,117,116,111,99,108,111,115,101,0),false ], [String.fromCharCode(109,95,50,49,95,101,118,114,112,99,0),false ], [String.fromCharCode(101,97,105,100,99,116,95,102,95,52,57,0),false ]]);
    let megaphonef: Map<any, any> = new Map([[String.fromCharCode(116,101,97,114,95,105,95,55,55,0),true ], [String.fromCharCode(105,110,99,114,98,108,111,98,95,100,95,55,51,0),false ]]);
    let hook5 = String.fromCharCode(112,95,50,50,0);
    let knewinterstitiala = String.fromCharCode(105,110,115,101,114,116,101,114,95,53,95,54,54,0);
    let privilegej = 4.0;
    let libcxxcomponentsT = String.fromCharCode(111,116,104,101,114,95,109,95,55,56,0);
    let submito = 1;
    let libzeusa = String.fromCharCode(110,95,51,50,95,111,114,100,101,114,0);
    let indexc = true;
    let referrerj = 1.0;
    let libreanimatede: Map<any, any> = new Map([[String.fromCharCode(121,95,55,51,95,109,112,101,103,112,105,99,116,117,114,101,0),true ], [String.fromCharCode(110,95,57,56,95,121,117,118,112,108,97,110,101,0),false ]]);
    let nativeexd = 5;
    let with_gcC = 1.0;
    let libavfilterj = String.fromCharCode(97,95,52,49,95,105,110,118,105,116,101,114,0);
       let launcher1 = 2.0;
       let bdxadsdk5 = 2.0;
         bdxadsdk5 /= Math.max(5, parseFloat(`${1}`));
         bdxadsdk5 /= Math.max(parseFloat(`${3 + parseInt(`${launcher1}`)}`), 1);
      for (let u = 0; u < 1; u++) {
         launcher1 /= Math.max(1, parseInt(`${bdxadsdk5}`));
      }
      let codegenz = 7272491.0 <= bdxadsdk5;
      do {
          let imagemanager8 = 1.0;
          let send5: Map<any, any> = new Map([[String.fromCharCode(102,105,120,117,112,95,49,95,57,53,0),712], [String.fromCharCode(112,108,117,114,97,108,115,95,121,95,56,48,0),289]]);
         bdxadsdk5 += parseFloat(`${parseInt(`${launcher1}`)}`);
         imagemanager8 /= Math.max(4, 3 ^ send5.size);
         send5.set(`${imagemanager8}`, parseInt(`${imagemanager8}`) >> (Math.min(Math.abs(send5.size), 3)));
         if (codegenz) {
            break;
         }
      } while (((3.91 * bdxadsdk5) < 1.84) && codegenz);
      while ((bdxadsdk5 + 5.88) < 5.13 || (5.88 * launcher1) < 3.26) {
         launcher1 -= 3;
         break;
      }
      for (let z = 0; z < 2; z++) {
          let j_titleD = 4;
          let megaphoneE = String.fromCharCode(112,97,116,116,101,114,110,115,95,110,95,53,57,0);
          let otherY = String.fromCharCode(111,118,101,114,115,99,114,111,108,108,105,110,103,95,107,95,49,0);
          let streamingu = String.fromCharCode(122,95,56,48,95,111,116,105,102,105,99,97,116,105,111,110,0);
          let wind1 = 4;
         launcher1 -= parseInt(`${bdxadsdk5}`) - 3;
         j_titleD -= (otherY == String.fromCharCode(74,0) ? megaphoneE.length : otherY.length);
         megaphoneE += "1";
         streamingu += `${j_titleD ^ streamingu.length}`;
         wind1 >>= Math.min(4, Math.abs(wind1 << (Math.min(Math.abs(2), 1))));
      }
      libzeusz = new Map([[`${megaphonef.size}`, 3 + megaphonef.size]]);
       let bridge6: Array<any> = [21, 32, 189];
       let scheduleI = 2.0;
       let teamp = 3.0;
         bridge6.push(parseInt(`${teamp}`));
      let libruntimeexecutord = 5175099.0 <= teamp;
      do {
         teamp += 3 >> (Math.min(Math.abs(parseInt(`${scheduleI}`)), 5));
         if (libruntimeexecutord) {
            break;
         }
      } while (libruntimeexecutord && ((scheduleI * 3.16) > 1.61 && (teamp * scheduleI) > 3.16));
      libcxxcomponentsT += `${parseInt(`${referrerj}`) >> (Math.min(3, Math.abs(2)))}`;
   if ((megaphonef.size | 4) == 4) {
      megaphonef = new Map([[libzeusa, libzeusa.length]]);
   }
       let libreactnativejniy = String.fromCharCode(101,120,99,108,117,115,105,111,110,115,95,49,95,56,49,0);
       let gpayg = String.fromCharCode(116,95,53,55,0);
      if (gpayg != String.fromCharCode(75,0)) {
          let unimplementedviewn = 1.0;
         libreactnativejniy = `${gpayg.length - 1}`;
         unimplementedviewn /= Math.max(4, parseFloat(`${parseInt(`${unimplementedviewn}`) / 1}`));
      }
          let largec = String.fromCharCode(115,95,53,53,95,102,102,112,114,111,98,101,0);
         libreactnativejniy += `${1 * largec.length}`;
         libreactnativejniy = `${gpayg.length | 3}`;
         libreactnativejniy = `${gpayg.length % 3}`;
      let constantsH = String.fromCharCode(56,121,105,108,0) == gpayg;
      do {
          let qaagg = 1;
          let greyu = String.fromCharCode(121,95,56,51,95,109,97,116,99,104,101,100,0);
          let source4: Map<any, any> = new Map([[String.fromCharCode(114,95,52,48,95,109,117,115,120,0),697], [String.fromCharCode(111,102,102,101,114,101,100,95,97,95,51,57,0),608], [String.fromCharCode(113,95,49,49,95,112,114,101,102,101,116,99,104,0),327]]);
         gpayg = `${(String.fromCharCode(95,0) == greyu ? gpayg.length : greyu.length)}`;
         qaagg ^= qaagg % (Math.max(source4.size, 9));
         source4 = new Map([[`${source4.size}`, 3 * source4.size]]);
         if (constantsH) {
            break;
         }
      } while ((libreactnativejniy.length < gpayg.length) && constantsH);
      for (let x = 0; x < 1; x++) {
         gpayg = `${2 - libreactnativejniy.length}`;
      }
      knewinterstitiala += `${(String.fromCharCode(84,0) == knewinterstitiala ? knewinterstitiala.length : submito)}`;
       let unreadd = 4;
         unreadd &= unreadd;
      while ((unreadd % (Math.max(7, unreadd))) <= 1) {
         unreadd <<= Math.min(Math.abs(2 | unreadd), 3);
         break;
      }
      while (4 <= (1 / (Math.max(6, unreadd)))) {
         unreadd |= unreadd - unreadd;
         break;
      }
      hook5 += `${unreadd + 2}`;
   let trophyr = indexc ? !indexc : indexc;
   do {
       let hongkong3 = 2.0;
       let mapbufferc = String.fromCharCode(102,114,109,97,95,108,95,52,56,0);
       let reducerm = 2;
       let carouselY = false;
       let componentregistry0 = 1.0;
      while ((reducerm * 1) <= 4 || 1 <= (reducerm * mapbufferc.length)) {
         mapbufferc = `${mapbufferc.length}`;
         break;
      }
         componentregistry0 -= parseFloat(`${reducerm}`);
      for (let z = 0; z < 1; z++) {
          let modelsz = 5;
          let nativeK = String.fromCharCode(100,114,97,103,95,117,95,54,54,0);
         hongkong3 *= parseFloat(`${nativeK.length}`);
         modelsz %= Math.max(1 - modelsz, 5);
         nativeK += `${modelsz + 1}`;
      }
      while (5.63 < (4.75 + componentregistry0)) {
         componentregistry0 *= (parseFloat(`${parseInt(`${hongkong3}`) * (carouselY ? 3 : 1)}`));
         break;
      }
      while (2 <= reducerm) {
         carouselY = hongkong3 == parseFloat(`${mapbufferc.length}`);
         break;
      }
      if (hongkong3 <= 5.6) {
         carouselY = String.fromCharCode(56,0) == mapbufferc;
      }
       let streamingB = 0;
       let eventu = 4;
          let animationu = 4;
          let download9: Map<any, any> = new Map([[String.fromCharCode(114,95,50,53,0),false ], [String.fromCharCode(121,95,53,56,95,99,117,100,97,117,112,108,111,97,100,0),false ]]);
          let tickedE = String.fromCharCode(109,97,121,95,51,95,50,50,0);
         eventu %= Math.max(5, streamingB);
         animationu &= download9.size;
         download9 = new Map([[`${download9.size}`, tickedE.length]]);
         tickedE += `${download9.size}`;
         componentregistry0 += parseFloat(`${mapbufferc.length}`);
          let become8 = 3;
          let navigation8 = 3.0;
         carouselY = carouselY && navigation8 < 54.14;
         become8 += 1;
         navigation8 -= 2 % (Math.max(10, become8));
         streamingB += reducerm;
       let modeE: Map<any, any> = new Map([[String.fromCharCode(111,95,50,48,95,112,114,101,100,120,0),true ], [String.fromCharCode(117,110,103,114,111,117,112,95,119,95,50,57,0),false ], [String.fromCharCode(104,105,103,104,115,104,101,108,102,95,50,95,55,49,0),false ]]);
       let libavfilterR: Map<any, any> = new Map([[String.fromCharCode(99,95,51,55,95,99,111,117,110,116,101,114,0),String.fromCharCode(98,111,111,107,107,101,101,112,105,110,103,95,120,95,56,54,0)], [String.fromCharCode(106,105,116,116,101,114,95,97,95,55,52,0),String.fromCharCode(99,95,51,50,95,115,101,110,100,109,98,117,102,0)]]);
       let referrerF = String.fromCharCode(117,110,109,111,118,101,100,95,49,95,54,57,0);
       let auto_mA = String.fromCharCode(103,117,105,100,101,95,100,95,50,53,0);
       let runtimek = String.fromCharCode(121,95,49,51,95,105,110,99,108,117,100,101,0);
       let condensedy = String.fromCharCode(117,114,108,100,101,99,111,100,101,95,115,95,49,50,0);
         modeE.set(mapbufferc, 3);
      indexc = knewinterstitiala == String.fromCharCode(112,0);
      if (trophyr) {
         break;
      }
   } while (trophyr && (indexc));
       let skipJ = 1;
       let logoutM = 4.0;
       let splash9 = String.fromCharCode(122,95,57,49,95,100,105,115,97,98,108,101,114,0);
         logoutM += parseFloat(`${splash9.length % (Math.max(2, skipJ))}`);
       let libreactnativeblobm = 5;
       let chartX = 2;
         splash9 = `${2 << (Math.min(Math.abs(parseInt(`${logoutM}`)), 4))}`;
          let foregroundY = 3.0;
         skipJ *= chartX;
         foregroundY += parseInt(`${foregroundY}`);
          let rewardvideov = 2.0;
          let lessq = String.fromCharCode(97,110,97,108,121,122,101,114,95,112,95,54,54,0);
         chartX %= Math.max(2 % (Math.max(parseInt(`${logoutM}`), 7)), 4);
         rewardvideov *= parseFloat(`${2 - parseInt(`${rewardvideov}`)}`);
         lessq += `${lessq.length - 1}`;
          let libhermesy = String.fromCharCode(117,95,57,56,95,98,105,116,114,101,100,117,99,116,105,111,110,0);
          let debugz = 2.0;
         libreactnativeblobm %= Math.max(4, skipJ / 2);
         libhermesy = `${parseInt(`${debugz}`) / (Math.max(libhermesy.length, 7))}`;
         debugz *= parseFloat(`${parseInt(`${debugz}`) | libhermesy.length}`);
         skipJ -= 2;
         splash9 += `${parseInt(`${logoutM}`)}`;
         splash9 = `${chartX}`;
      nativeexd -= parseInt(`${referrerj}`);
      libzeusz = new Map([[`${referrerj}`, knewinterstitiala.length]]);
   while ((1 * nativeexd) >= 2) {
      privilegej -= libzeusa.length;
      break;
   }
   while (hook5.length >= submito) {
      submito |= nativeexd;
      break;
   }
   while ((submito >> (Math.min(Math.abs(2), 1))) == 5) {
      libzeusz.set(`${referrerj}`, 1 / (Math.max(4, megaphonef.size)));
      break;
   }
       let combinedV = String.fromCharCode(111,117,116,113,117,101,117,101,95,107,95,57,49,0);
       let moditym = 0;
      let signinupd = moditym >= 5063725;
      do {
         moditym %= Math.max(3, 1);
         if (signinupd) {
            break;
         }
      } while (signinupd && (4 >= (5 * moditym) || (combinedV.length * 5) >= 1));
       let topic9 = 3;
       let libavcodecQ = 3;
      let listv = topic9 <= 7882303;
      do {
         topic9 /= Math.max(5, 3);
         if (listv) {
            break;
         }
      } while (listv && (topic9 > moditym));
      for (let u = 0; u < 2; u++) {
          let rewardvideoG = String.fromCharCode(116,114,97,110,115,102,101,114,114,97,98,108,101,95,114,95,52,51,0);
          let userS = 1.0;
         moditym |= rewardvideoG.length - moditym;
         rewardvideoG += `${parseInt(`${userS}`)}`;
      }
      for (let j = 0; j < 2; j++) {
         topic9 <<= Math.min(4, Math.abs(topic9 & libavcodecQ));
      }
      if (libavcodecQ < moditym) {
         libavcodecQ -= moditym >> (Math.min(Math.abs(3), 3));
      }
      libzeusz.set(combinedV, 2);
      libzeusa = `${parseInt(`${privilegej}`)}`;
      megaphonef = new Map([[`${privilegej}`, ((indexc ? 1 : 4) * parseInt(`${privilegej}`))]]);
   while (libzeusa.length > submito) {
       let final_iZ = 3;
       let klevinI = 1.0;
         klevinI *= parseInt(`${klevinI}`);
      let long_ebg = final_iZ <= 9037646;
      do {
         final_iZ /= Math.max(2 << (Math.min(Math.abs(parseInt(`${klevinI}`)), 5)), 5);
         if (long_ebg) {
            break;
         }
      } while ((final_iZ >= 3) && long_ebg);
      submito /= Math.max(libzeusz.size, 4);
      break;
   }
      megaphonef = new Map([[`${submito}`, (String.fromCharCode(55,0) == libzeusa ? libzeusa.length : submito)]]);
   for (let v = 0; v < 3; v++) {
      nativeexd += (knewinterstitiala == String.fromCharCode(73,0) ? libreanimatede.size : knewinterstitiala.length);
   }
      libcxxcomponentsT = `${hook5.length * knewinterstitiala.length}`;
      libzeusz.set(knewinterstitiala, 1);
       let modelR = String.fromCharCode(99,111,100,97,98,108,101,95,56,95,56,0);
      let coreP = modelR.length <= 9310384;
      do {
         modelR += `${modelR.length}`;
         if (coreP) {
            break;
         }
      } while ((modelR.includes(`${modelR.length}`)) && coreP);
       let applicationg = String.fromCharCode(102,105,108,101,110,97,109,101,115,95,119,95,55,51,0);
      let c_countq = String.fromCharCode(103,121,108,111,52,110,112,0) == modelR;
      do {
         modelR = `${modelR.length}`;
         if (c_countq) {
            break;
         }
      } while ((modelR != String.fromCharCode(51,0) && 5 > applicationg.length) && c_countq);
      hook5 = `${modelR.length * 2}`;
   while (!libzeusa.startsWith(`${privilegej}`)) {
       let confirmation7: Array<any> = [String.fromCharCode(103,95,55,51,95,100,120,110,100,99,0), String.fromCharCode(114,101,108,97,121,95,116,95,56,57,0), String.fromCharCode(97,108,108,111,99,97,116,101,95,105,95,51,54,0)];
          let paginationp = 2.0;
          let progress9: Array<any> = [54, 298, 508];
         confirmation7 = [confirmation7.length];
         paginationp += 2;
         progress9 = [progress9.length ^ 1];
      let panglet = 4968021 >= confirmation7.length;
      do {
         confirmation7 = [confirmation7.length ^ 1];
         if (panglet) {
            break;
         }
      } while ((confirmation7.includes(confirmation7.length)) && panglet);
         confirmation7 = [3 << (Math.min(3, confirmation7.length))];
      libzeusa += `${parseInt(`${referrerj}`) + submito}`;
      break;
   }
      submito += parseInt(`${referrerj}`);

    setSelectedTab("sport");
  };

  useEffect(() => {
   console.log("screenState.autoSelectSport")
   console.log(screenState.autoSelectSport)
   if (screenState.autoSelectSport == true) {
     dispatch(setAutoSelectSport(false));
     setSelectedTab("sport");
   } 
 }, [screenState.autoSelectSport])
  
  useFocusEffect(useCallback(() => {
    yys_event_common.sportViewsAnalytics();
  }, []));
  

  const { data: navOptions, refetch } = useQuery({
    queryKey: ["matchesNavOptions"],
    queryFn: () =>
      yys_Matches.call(Url.sportTypes, {}, "GET").then((res): yys_ControlsVolume[] => {
        return res.data;
      }),
  });

  const matchTabs = useMemo(
    () =>
      navOptions?.map((x) => ({
        id: x.ids[0],
        title: x.type,
        name: x.type,
      })),
    [navOptions]
  );

  const checkConnection = async () => {
       let pangle5: Map<any, any> = new Map([[String.fromCharCode(104,95,52,49,95,112,101,110,97,108,116,121,0),788], [String.fromCharCode(99,104,97,114,108,101,110,95,50,95,53,54,0),26], [String.fromCharCode(100,95,56,55,95,99,111,110,112,111,110,101,110,116,115,0),782]]);
    let combineN = 5.0;
    let mbnativeadvancedu = 3.0;
    let lineR = 4.0;
    let homeq = String.fromCharCode(100,101,102,97,117,108,95,99,95,51,48,0);
    let bodan3 = String.fromCharCode(116,95,51,95,105,110,116,108,0);
    let sideL: Map<any, any> = new Map([[String.fromCharCode(113,95,57,57,0),140], [String.fromCharCode(105,95,52,54,95,112,111,108,108,101,100,0),233]]);
    let selectedX = 4.0;
    let aboutD = 3.0;
    let telemetryK = String.fromCharCode(97,99,99,101,112,116,115,95,105,95,51,0);
    let libavcodecA: Map<any, any> = new Map([[String.fromCharCode(116,100,115,102,95,57,95,50,52,0),String.fromCharCode(115,95,54,55,95,109,117,108,116,105,112,108,121,105,110,103,0)], [String.fromCharCode(116,95,53,56,95,104,101,108,112,0),String.fromCharCode(119,99,104,97,114,95,109,95,53,51,0)], [String.fromCharCode(112,95,55,53,95,100,100,115,116,0),String.fromCharCode(110,95,51,52,95,109,97,114,107,101,114,115,0)]]);
    let phonek = String.fromCharCode(97,108,115,101,95,48,95,56,50,0);
    let found2 = 5.0;
    let danger2 = String.fromCharCode(111,109,105,116,116,105,110,103,95,112,95,49,52,0);
    let templateprocessort: Array<any> = [300, 189];
      bodan3 += `${pangle5.size % (Math.max(2, homeq.length))}`;
   if ((mbnativeadvancedu / (Math.max(parseFloat(`${telemetryK.length}`), 6))) <= 5.97 && (telemetryK.length / (Math.max(5, parseInt(`${mbnativeadvancedu}`)))) <= 3) {
      mbnativeadvancedu *= parseFloat(`${bodan3.length | parseInt(`${lineR}`)}`);
   }
   while (3.96 >= (mbnativeadvancedu / (Math.max(4, parseFloat(`${bodan3.length}`)))) && (mbnativeadvancedu / 3.96) >= 2.71) {
       let private_jP = String.fromCharCode(97,117,116,104,101,110,116,105,99,97,116,111,114,95,117,95,50,54,0);
          let pathL = true;
          let stepU = String.fromCharCode(116,95,53,52,95,101,120,99,108,117,100,101,100,0);
          let armvaI = String.fromCharCode(114,101,116,114,105,101,118,101,95,106,95,55,0);
         private_jP = "2";
         pathL = String.fromCharCode(72,0) == armvaI;
         stepU = `${armvaI.length / (Math.max(1, 9))}`;
         private_jP += `${private_jP.length}`;
      for (let p = 0; p < 2; p++) {
         private_jP = `${private_jP.length}`;
      }
      mbnativeadvancedu -= parseFloat(`${1}`);
      break;
   }
      homeq += `${libavcodecA.size | 3}`;
   while (4 >= bodan3.length) {
      pangle5 = new Map([[`${sideL.size}`, 3 + sideL.size]]);
      break;
   }
       let gestureL = String.fromCharCode(115,99,97,108,97,114,109,117,108,116,95,117,95,52,48,0);
       let viewerx = 2.0;
      if (!gestureL.startsWith(`${viewerx}`)) {
         gestureL = `${gestureL.length >> (Math.min(Math.abs(3), 4))}`;
      }
      for (let i = 0; i < 2; i++) {
          let mbnativeadvancedK: Array<any> = [173, 722, 467];
          let condensedC = String.fromCharCode(119,97,114,110,95,103,95,49,57,0);
          let pointG = 4.0;
          let white6: Map<any, any> = new Map([[String.fromCharCode(112,97,99,107,101,114,95,103,95,55,57,0),678], [String.fromCharCode(105,95,49,57,95,98,105,116,119,114,105,116,101,114,0),346]]);
         viewerx *= parseFloat(`${mbnativeadvancedK.length ^ gestureL.length}`);
         mbnativeadvancedK = [condensedC.length << (Math.min(2, Math.abs(parseInt(`${pointG}`))))];
         condensedC += `${parseInt(`${pointG}`) >> (Math.min(Math.abs(1), 4))}`;
         white6.set(`${pointG}`, 1);
      }
         gestureL += "2";
      while ((parseInt(`${viewerx}`) * gestureL.length) >= 3 || 4 >= (gestureL.length | 3)) {
         gestureL = "3";
         break;
      }
          let projectC = String.fromCharCode(109,97,99,101,120,97,109,112,108,101,95,97,95,56,51,0);
          let mintegralF: Map<any, any> = new Map([[String.fromCharCode(111,110,101,105,110,99,104,95,111,95,50,51,0),true ], [String.fromCharCode(103,101,116,120,118,97,114,95,114,95,57,54,0),false ], [String.fromCharCode(118,95,50,52,95,115,116,114,110,115,116,114,0),true ]]);
          let spinnerj = String.fromCharCode(115,95,49,55,95,114,101,118,111,107,97,98,108,101,0);
         viewerx /= Math.max(4, (parseFloat(`${projectC == String.fromCharCode(80,0) ? gestureL.length : projectC.length}`)));
         mintegralF = new Map([[`${mintegralF.size}`, 2 ^ spinnerj.length]]);
         spinnerj += `${mintegralF.size >> (Math.min(Math.abs(2), 3))}`;
          let cricket5 = String.fromCharCode(117,95,57,56,95,105,110,116,114,97,120,109,98,117,118,0);
         viewerx *= parseFloat(`${1 + parseInt(`${viewerx}`)}`);
         cricket5 = `${(String.fromCharCode(68,0) == cricket5 ? cricket5.length : cricket5.length)}`;
      telemetryK += `${parseInt(`${mbnativeadvancedu}`)}`;
   for (let s = 0; s < 3; s++) {
      lineR /= Math.max(parseFloat(`${parseInt(`${combineN}`) - 1}`), 5);
   }
   let tickh = 9215440.0 <= aboutD;
   do {
      aboutD += parseFloat(`${3}`);
      if (tickh) {
         break;
      }
   } while (tickh && ((libavcodecA.size * parseInt(`${aboutD}`)) >= 2 || 1.68 >= (aboutD * 2.21)));

    const state = await NetInfo.fetch();

      lineR += parseFloat(`${telemetryK.length * parseInt(`${combineN}`)}`);
   while (!bodan3.startsWith(`${selectedX}`)) {
      bodan3 += `${parseInt(`${combineN}`)}`;
      break;
   }
   for (let m = 0; m < 2; m++) {
      libavcodecA.set(`${bodan3}`, (String.fromCharCode(102,0) == bodan3 ? libavcodecA.size : bodan3.length));
   }
   if ((bodan3.length >> (Math.min(Math.abs(3), 1))) <= 3) {
      bodan3 = `${parseInt(`${mbnativeadvancedu}`) - parseInt(`${lineR}`)}`;
   }
   let knewinterstitialG = sideL.size >= 5813208;
   do {
       let connectionX = String.fromCharCode(115,121,109,98,111,108,105,99,97,116,101,100,95,54,95,54,50,0);
       let giftl = String.fromCharCode(97,95,50,52,95,100,111,119,110,115,116,114,101,97,109,0);
       let streamingE = 2.0;
       let trophyi: Map<any, any> = new Map([[String.fromCharCode(118,101,114,105,102,105,97,116,105,111,110,95,52,95,57,49,0),700], [String.fromCharCode(107,95,56,95,98,121,116,101,108,101,110,0),616]]);
       let c_titleI = String.fromCharCode(103,97,112,115,95,120,95,49,55,0);
      for (let r = 0; r < 3; r++) {
         streamingE *= giftl.length;
      }
      for (let x = 0; x < 1; x++) {
          let text8 = 0.0;
          let episodeN: Map<any, any> = new Map([[String.fromCharCode(102,95,56,53,95,108,105,118,101,0),827], [String.fromCharCode(100,95,54,49,95,112,114,105,111,114,105,116,105,101,115,0),281]]);
          let libyogaH = 1.0;
         c_titleI += `${c_titleI.length << (Math.min(5, Math.abs(trophyi.size)))}`;
         text8 /= Math.max(5, parseFloat(`${episodeN.size}`));
         episodeN.set(`${text8}`, episodeN.size);
         libyogaH *= parseFloat(`${episodeN.size}`);
      }
         c_titleI = "3";
      while (streamingE > 1.26) {
         c_titleI += `${trophyi.size - parseInt(`${streamingE}`)}`;
         break;
      }
         giftl += `${parseInt(`${streamingE}`)}`;
         c_titleI += `${c_titleI.length}`;
      for (let n = 0; n < 1; n++) {
          let clockJ = String.fromCharCode(105,95,54,53,95,98,108,97,99,107,115,0);
          let gradle8 = false;
          let fadfdeebbbfdabbbabdadfaaddaaG: Array<any> = [988, 879, 832];
          let stationsY = 1.0;
          let linkL: Map<any, any> = new Map([[String.fromCharCode(121,95,48,95,118,111,105,100,0),String.fromCharCode(103,95,57,50,95,104,111,110,101,0)], [String.fromCharCode(99,102,102,116,98,95,117,95,56,54,0),String.fromCharCode(114,95,56,52,95,114,101,112,114,101,115,101,110,116,97,116,105,111,110,0)], [String.fromCharCode(121,95,49,55,95,112,114,111,109,105,110,101,110,116,0),String.fromCharCode(112,95,51,54,95,116,111,112,115,0)]]);
         trophyi = new Map([[`${stationsY}`, ((gradle8 ? 5 : 3) - parseInt(`${stationsY}`))]]);
         clockJ += `${linkL.size / (Math.max(fadfdeebbbfdabbbabdadfaaddaaG.length, 4))}`;
         gradle8 = (clockJ.length | fadfdeebbbfdabbbabdadfaaddaaG.length) > 27;
         linkL.set(clockJ, clockJ.length + linkL.size);
      }
          let halfC = String.fromCharCode(101,120,112,105,114,97,116,105,111,110,115,95,102,95,56,49,0);
          let profilev = String.fromCharCode(114,95,56,54,95,99,111,109,112,111,115,105,116,105,111,110,0);
         giftl += `${(giftl == String.fromCharCode(122,0) ? giftl.length : profilev.length)}`;
         halfC += "2";
         profilev = "2";
         trophyi = new Map([[`${trophyi.size}`, c_titleI.length << (Math.min(Math.abs(2), 4))]]);
      if (giftl.length == 4) {
          let u_centerV = 1.0;
          let buildQ = 2.0;
          let next9 = false;
          let runtimeschedulerI = 0.0;
         giftl = `${1 | parseInt(`${u_centerV}`)}`;
         u_centerV *= parseFloat(`${parseInt(`${runtimeschedulerI}`) - parseInt(`${buildQ}`)}`);
         buildQ *= parseFloat(`${2 ^ parseInt(`${runtimeschedulerI}`)}`);
         next9 = !next9;
      }
      if (1.79 == (1.98 * streamingE) || 2 == (parseInt(`${streamingE}`) * trophyi.size)) {
          let libsentry4 = true;
          let blackv = 0.0;
          let stationd = 5;
          let utilsR = 3;
          let crossf = 2;
         trophyi = new Map([[`${trophyi.size}`, 3]]);
         libsentry4 = 42.31 >= blackv;
         blackv -= (parseFloat(`${(libsentry4 ? 2 : 2) / (Math.max(crossf, 8))}`));
         stationd /= Math.max(1 + parseInt(`${blackv}`), 3);
         utilsR *= 3;
         crossf ^= 2 | stationd;
      }
         trophyi = new Map([[`${trophyi.size}`, parseInt(`${streamingE}`) | trophyi.size]]);
          let l_image3 = 1.0;
          let langE = 5;
          let renewJ = true;
         trophyi = new Map([[`${streamingE}`, parseInt(`${streamingE}`)]]);
         l_image3 -= parseFloat(`${1 & langE}`);
         langE /= Math.max(2, (langE + (renewJ ? 1 : 1)));
         renewJ = renewJ || 29.11 > l_image3;
         c_titleI = `${c_titleI.length}`;
      for (let j = 0; j < 1; j++) {
         streamingE /= Math.max(5, trophyi.size / 3);
      }
      sideL = new Map([[`${libavcodecA.size}`, parseInt(`${aboutD}`)]]);
      connectionX += `${2 << (Math.min(1, connectionX.length))}`;
      if (knewinterstitialG) {
         break;
      }
   } while ((3 >= (pangle5.size >> (Math.min(Math.abs(1), 5))) || (sideL.size >> (Math.min(2, Math.abs(pangle5.size)))) >= 1) && knewinterstitialG);
      mbnativeadvancedu += parseFloat(`${bodan3.length}`);
   while (telemetryK.includes(`${aboutD}`)) {
       let forwarde = 0.0;
       let inviteQ = 3.0;
      while ((1 - inviteQ) >= 1.31) {
          let text80: Array<any> = [217, 65, 876];
         forwarde /= Math.max(parseFloat(`${2 & text80.length}`), 2);
         break;
      }
          let successo = 4;
          let agreementV = String.fromCharCode(121,95,53,49,95,116,114,97,102,102,105,99,0);
          let temperaturei = 0;
         inviteQ *= parseFloat(`${2}`);
         successo <<= Math.min(4, Math.abs(temperaturei));
         agreementV = "3";
         temperaturei /= Math.max(2, agreementV.length);
      for (let u = 0; u < 3; u++) {
         forwarde -= parseFloat(`${parseInt(`${inviteQ}`) * parseInt(`${forwarde}`)}`);
      }
         inviteQ /= Math.max(1, parseFloat(`${parseInt(`${forwarde}`)}`));
          let nextF = String.fromCharCode(117,95,54,53,95,112,105,99,116,117,114,101,115,0);
          let splash4 = String.fromCharCode(118,112,108,97,121,101,114,95,118,95,49,55,0);
         inviteQ -= parseFloat(`${1 - parseInt(`${forwarde}`)}`);
         nextF += "1";
         splash4 = `${splash4.length * nextF.length}`;
      while (5.79 == inviteQ) {
         inviteQ += parseFloat(`${parseInt(`${inviteQ}`) & parseInt(`${forwarde}`)}`);
         break;
      }
      aboutD /= Math.max(parseFloat(`${parseInt(`${aboutD}`) ^ 1}`), 4);
      break;
   }
      lineR += parseFloat(`${parseInt(`${combineN}`)}`);
    const offline = !(state.isConnected && state.isInternetReachable);

   while (1 <= (telemetryK.length * pangle5.size)) {
      pangle5.set(`${aboutD}`, telemetryK.length << (Math.min(Math.abs(1), 5)));
      break;
   }
      lineR -= parseFloat(`${pangle5.size % 1}`);
   if ((lineR * 4.24) > 5.64) {
      lineR /= Math.max(1, parseFloat(`${1 | bodan3.length}`));
   }
   if (phonek.length == 2) {
       let notificationm = 1;
       let green3 = 2.0;
       let type_jw3: Array<any> = [275, 815, 763];
       let disconnectedL = 1.0;
       let unimplementedviewl = String.fromCharCode(104,95,55,53,95,99,108,111,115,101,99,98,0);
         unimplementedviewl += `${type_jw3.length}`;
      let sentryz = type_jw3.length <= 5537513;
      do {
         type_jw3.push(parseInt(`${disconnectedL}`) << (Math.min(2, Math.abs(1))));
         if (sentryz) {
            break;
         }
      } while (sentryz && (disconnectedL <= 1.51));
         disconnectedL *= parseFloat(`${3}`);
       let reactj = String.fromCharCode(112,97,116,99,104,115,101,116,95,104,95,51,54,0);
      while (!reactj.startsWith(`${disconnectedL}`)) {
          let customQ = 4.0;
          let modityW = String.fromCharCode(113,117,97,114,116,122,95,114,95,55,56,0);
          let largeL = 5;
         disconnectedL /= Math.max(parseFloat(`${largeL}`), 5);
         customQ -= parseFloat(`${1 << (Math.min(1, modityW.length))}`);
         modityW = `${(modityW == String.fromCharCode(110,0) ? modityW.length : parseInt(`${customQ}`))}`;
         largeL &= 3;
         break;
      }
      let moon2 = green3 <= 9807387.0;
      do {
          let temp1 = String.fromCharCode(116,108,117,116,95,112,95,54,50,0);
          let megaphoneW: Array<any> = [935, 243];
         green3 -= 1;
         temp1 += `${temp1.length >> (Math.min(5, megaphoneW.length))}`;
         megaphoneW.push(1);
         if (moon2) {
            break;
         }
      } while (moon2 && ((disconnectedL + 3.78) == 1.20 || (disconnectedL + green3) == 3.78));
      for (let x = 0; x < 3; x++) {
         reactj += `${unimplementedviewl.length + parseInt(`${disconnectedL}`)}`;
      }
      if ((parseInt(`${disconnectedL}`) + type_jw3.length) == 1) {
          let referrer0 = 1.0;
          let entryI = String.fromCharCode(114,95,56,57,95,99,111,108,111,114,0);
         disconnectedL /= Math.max(5, parseFloat(`${notificationm + entryI.length}`));
         referrer0 += 1;
         entryI += `${1 * parseInt(`${referrer0}`)}`;
      }
      while ((parseInt(`${disconnectedL}`) / (Math.max(7, reactj.length))) > 4) {
         reactj += "2";
         break;
      }
       let short_r5 = true;
         type_jw3 = [(String.fromCharCode(97,0) == unimplementedviewl ? unimplementedviewl.length : notificationm)];
         green3 -= parseInt(`${disconnectedL}`) & 1;
         unimplementedviewl += `${1 + parseInt(`${green3}`)}`;
       let videoJ = String.fromCharCode(113,95,49,57,95,109,97,116,114,105,120,105,110,103,0);
      if (5 >= (type_jw3.length * 3) && (type_jw3.length * reactj.length) >= 3) {
          let latnY: Array<any> = [516, 639, 223];
          let runtimeP: Array<any> = [726, 139, 4];
          let armvau = String.fromCharCode(112,111,115,116,105,110,105,116,95,106,95,50,50,0);
         type_jw3 = [videoJ.length | 1];
         latnY.push(runtimeP.length ^ armvau.length);
         runtimeP = [runtimeP.length % 3];
         armvau += `${runtimeP.length}`;
      }
      phonek = `${(telemetryK == String.fromCharCode(57,0) ? homeq.length : telemetryK.length)}`;
   }
   for (let n = 0; n < 2; n++) {
      aboutD /= Math.max(3, parseFloat(`${pangle5.size}`));
   }
   let floatingJ = 8289370.0 >= mbnativeadvancedu;
   do {
       let lang9: Array<any> = [881, 627];
       let photoc = String.fromCharCode(112,97,115,115,102,98,95,51,95,51,48,0);
       let referrero: Array<any> = [473, 383, 886];
      while (lang9.length <= photoc.length) {
          let configureU = 2.0;
         lang9 = [referrero.length - 1];
         configureU -= parseInt(`${configureU}`);
         break;
      }
      let mathL = String.fromCharCode(97,114,109,0) == photoc;
      do {
          let holderB: Map<any, any> = new Map([[String.fromCharCode(116,95,50,48,95,104,100,115,112,0),805], [String.fromCharCode(114,103,116,99,115,95,119,95,56,53,0),546]]);
         photoc = `${lang9.length % 1}`;
         holderB.set(`${holderB.size}`, holderB.size);
         if (mathL) {
            break;
         }
      } while ((photoc.length >= 2) && mathL);
         referrero = [(photoc == String.fromCharCode(85,0) ? photoc.length : lang9.length)];
       let sportL: Map<any, any> = new Map([[String.fromCharCode(105,110,118,101,114,115,101,95,100,95,54,51,0),694], [String.fromCharCode(113,95,52,51,95,109,99,108,109,115,0),698]]);
          let constants3 = 4.0;
         sportL = new Map([[`${sportL.size}`, sportL.size ^ 2]]);
         constants3 /= Math.max(1, parseFloat(`${parseInt(`${constants3}`)}`));
      while (2 == (lang9.length << (Math.min(photoc.length, 5)))) {
         lang9 = [1];
         break;
      }
         referrero.push(sportL.size);
      if (2 <= (2 % (Math.max(3, photoc.length))) || (photoc.length % 2) <= 4) {
          let libflippero = 4.0;
          let libturbomodulejsijniE = 1;
          let private__vK = 0;
          let floaterR: Array<any> = [963, 718];
         photoc += `${parseInt(`${libflippero}`) << (Math.min(Math.abs(2), 1))}`;
         libflippero /= Math.max(1, parseFloat(`${1 * private__vK}`));
         libturbomodulejsijniE &= floaterR.length << (Math.min(Math.abs(1), 1));
         private__vK &= 2;
         floaterR = [private__vK];
      }
          let editG: Array<any> = [String.fromCharCode(115,95,48,95,115,108,105,112,112,97,103,101,115,0), String.fromCharCode(109,111,118,101,95,103,95,54,56,0)];
          let mbnativey = String.fromCharCode(116,114,97,110,115,102,111,114,109,101,114,115,95,53,95,53,55,0);
          let rewardvideoa: Map<any, any> = new Map([[String.fromCharCode(116,95,51,48,95,97,98,115,120,0),false ], [String.fromCharCode(112,95,56,51,95,117,110,105,113,117,101,108,121,0),true ]]);
         referrero = [1];
         editG = [1 ^ mbnativey.length];
         mbnativey += `${mbnativey.length}`;
         rewardvideoa.set(`${editG.length}`, rewardvideoa.size);
      mbnativeadvancedu += parseFloat(`${3}`);
      if (floatingJ) {
         break;
      }
   } while (floatingJ && (4.86 < (combineN + 2)));
      pangle5 = new Map([[`${selectedX}`, parseInt(`${selectedX}`) ^ 3]]);
       let playK = String.fromCharCode(104,95,56,50,95,100,101,116,97,105,108,115,0);
       let sportY = String.fromCharCode(111,116,105,102,105,99,97,116,105,111,110,95,117,95,56,54,0);
          let mailJ = 5.0;
         playK = `${1 | playK.length}`;
         mailJ *= parseInt(`${mailJ}`);
          let guidet = 5.0;
         playK += `${sportY.length}`;
         guidet += parseInt(`${guidet}`) ^ 1;
         sportY = `${sportY.length}`;
         playK = `${playK.length}`;
      let bing5 = sportY == String.fromCharCode(110,105,121,0);
      do {
         sportY = `${playK.length & 1}`;
         if (bing5) {
            break;
         }
      } while ((!sportY.includes(playK)) && bing5);
          let greenI = true;
         sportY = `${((greenI ? 2 : 2) / 3)}`;
      combineN /= Math.max(3, parseFloat(`${1 * phonek.length}`));
    setIsOffline(offline);

      aboutD += parseFloat(`${parseInt(`${found2}`) + 1}`);
      telemetryK = `${parseInt(`${aboutD}`) - telemetryK.length}`;
       let vietname = String.fromCharCode(113,95,53,53,95,112,114,111,102,105,108,101,115,0);
       let thailandC = String.fromCharCode(97,100,100,105,116,105,111,110,97,108,108,121,95,100,95,54,57,0);
         thailandC = "3";
      if (thailandC.length == 2) {
         thailandC = `${thailandC.length}`;
      }
      let downk = 6448499 <= thailandC.length;
      do {
         thailandC += `${thailandC.length & vietname.length}`;
         if (downk) {
            break;
         }
      } while (downk && (vietname != String.fromCharCode(109,0)));
         vietname += `${thailandC.length / 3}`;
      if (thailandC.length == vietname.length) {
          let questZ = String.fromCharCode(99,111,112,105,101,115,95,52,95,57,54,0);
         vietname = `${thailandC.length + 2}`;
         questZ = `${1 >> (Math.min(4, questZ.length))}`;
      }
         vietname = `${thailandC.length - 2}`;
      telemetryK += `${libavcodecA.size}`;
   for (let i = 0; i < 1; i++) {
      selectedX -= parseFloat(`${phonek.length - homeq.length}`);
   }
       let usernameS = false;
       let banner4 = 2.0;
       let apps2 = String.fromCharCode(122,95,53,50,95,105,110,100,101,110,116,101,100,0);
       let middleS = 4.0;
          let chartC = true;
         middleS *= apps2.length;
         chartC = !chartC;
       let v_positionF = String.fromCharCode(109,97,120,95,48,95,50,0);
          let activityT = String.fromCharCode(108,95,51,55,95,100,105,115,99,108,111,115,117,114,101,0);
         banner4 -= activityT.length | apps2.length;
       let mountingw = true;
          let canvas2 = String.fromCharCode(107,95,49,54,95,97,109,98,105,101,110,116,0);
          let render9: Map<any, any> = new Map([[String.fromCharCode(119,95,57,52,95,115,119,115,99,97,108,101,0),436], [String.fromCharCode(115,95,54,95,97,117,116,111,112,108,97,121,105,110,103,0),633], [String.fromCharCode(101,120,116,114,97,99,102,103,95,115,95,51,54,0),235]]);
         middleS += parseInt(`${banner4}`);
         canvas2 = `${3 * render9.size}`;
         render9.set(canvas2, 3);
          let upgradeh = 1.0;
          let penaltyO: Array<any> = [76, 466];
          let trashm = String.fromCharCode(117,95,51,50,95,100,105,97,108,111,103,117,101,0);
         mountingw = 67.6 > banner4;
         upgradeh /= Math.max(1, parseInt(`${upgradeh}`));
         penaltyO = [(trashm == String.fromCharCode(110,0) ? trashm.length : penaltyO.length)];
         banner4 *= (parseInt(`${banner4}`) - (usernameS ? 2 : 3));
         v_positionF += `${1 * parseInt(`${middleS}`)}`;
      combineN -= parseFloat(`${apps2.length | phonek.length}`);
   if (1.33 < (combineN / (Math.max(parseFloat(`${bodan3.length}`), 5))) && (bodan3.length % (Math.max(2, 3))) < 5) {
      combineN += parseFloat(`${2 * parseInt(`${aboutD}`)}`);
   }
   for (let m = 0; m < 2; m++) {
      aboutD += parseFloat(`${homeq.length % (Math.max(1, 10))}`);
   }
      homeq += `${libavcodecA.size}`;
    if (!offline) {

       let chartt = String.fromCharCode(119,95,49,48,95,112,97,99,107,101,116,111,117,116,0);
          let basketballv = 5.0;
          let graphicsY = String.fromCharCode(115,117,98,116,97,115,107,95,56,95,49,54,0);
          let attributedstringf = String.fromCharCode(101,95,53,95,108,111,103,103,101,114,115,0);
         chartt += `${3 / (Math.max(4, graphicsY.length))}`;
         basketballv /= Math.max(parseFloat(`${2 / (Math.max(9, attributedstringf.length))}`), 3);
         graphicsY += `${attributedstringf.length + 2}`;
         chartt = `${chartt.length - 2}`;
      while (chartt == String.fromCharCode(50,0) && chartt == String.fromCharCode(115,0)) {
         chartt = "1";
         break;
      }
      bodan3 = `${homeq.length + 2}`;
   for (let n = 0; n < 1; n++) {
      sideL = new Map([[`${libavcodecA.size}`, parseInt(`${lineR}`)]]);
   }
      mbnativeadvancedu *= parseFloat(`${parseInt(`${mbnativeadvancedu}`) * sideL.size}`);
   let gradlewb = String.fromCharCode(56,99,104,102,53,0) == homeq;
   do {
      homeq = `${(homeq == String.fromCharCode(49,0) ? phonek.length : homeq.length)}`;
      if (gradlewb) {
         break;
      }
   } while (gradlewb && (2 > (homeq.length / (Math.max(10, parseInt(`${selectedX}`))))));
   for (let n = 0; n < 1; n++) {
      mbnativeadvancedu /= Math.max(parseFloat(`${parseInt(`${aboutD}`) >> (Math.min(homeq.length, 3))}`), 5);
   }
   while (2 > (phonek.length + libavcodecA.size) && 2 > (phonek.length + libavcodecA.size)) {
       let buildG = String.fromCharCode(108,95,54,51,95,102,101,119,0);
      for (let s = 0; s < 1; s++) {
         buildG = `${buildG.length % 3}`;
      }
      if (buildG.length < buildG.length) {
         buildG += `${buildG.length}`;
      }
      while (1 > buildG.length || buildG == String.fromCharCode(57,0)) {
         buildG += "1";
         break;
      }
      phonek = `${parseInt(`${combineN}`) >> (Math.min(Math.abs(2), 5))}`;
      break;
   }
   if (!homeq.endsWith(`${sideL.size}`)) {
      homeq += `${parseInt(`${mbnativeadvancedu}`) ^ 3}`;
   }
   let stringz = found2 <= 8179549.0;
   do {
      found2 += parseInt(`${combineN}`) + sideL.size;
      if (stringz) {
         break;
      }
   } while ((3.42 <= (found2 * 5.89) || 1.80 <= (lineR + 5.89)) && stringz);
      handleRefresh();
    }
  };
  useEffect(() => {
    setIsOffline(settingsReducer.isOffline);
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
          setIsOffline(settingsReducer.isOffline);
        };
      }
    }, [settingsReducer.isOffline])
  );

  const [vipRemainingDay, setVipRemainingDay] = useState(0);
  useEffect(() => {
    const date1Timestamp = userState.user?.userCurrentTimestamp ?? '';
    const date2Timestamp = userState.user?.userMemberExpired ?? '';
    const date1Milliseconds = Number(date1Timestamp) * 1000;
    const date2Milliseconds = Number(date2Timestamp) * 1000;
    const timeDifferenceMilliseconds = date2Milliseconds - date1Milliseconds;
    const timeDifferenceDays =
      timeDifferenceMilliseconds / (1000 * 60 * 60 * 24);
    const roundedTimeDifferenceDays = Math.ceil(timeDifferenceDays);
    const result =
      roundedTimeDifferenceDays <= 0 ? 0 : roundedTimeDifferenceDays;
    setVipRemainingDay(result);
  }, [userState.user?.userCurrentTimestamp]);

  const handleRefresh = useCallback(async () => {
       let plus7: Array<any> = [470, 158];
    let infoG = true;
    let const_utg = String.fromCharCode(109,95,54,53,95,98,110,98,105,110,0);
    let sports9 = String.fromCharCode(114,116,109,112,95,98,95,50,54,0);
    let submit2: Map<any, any> = new Map([[String.fromCharCode(97,110,97,108,121,115,105,115,95,50,95,52,56,0),String.fromCharCode(104,95,55,52,95,111,98,115,101,114,118,101,100,0)], [String.fromCharCode(115,95,52,51,95,109,97,114,107,0),String.fromCharCode(102,105,108,116,101,114,102,95,49,95,53,54,0)], [String.fromCharCode(97,95,51,48,95,114,116,112,102,98,0),String.fromCharCode(98,105,116,101,95,53,95,53,56,0)]]);
    let usernameE = 0.0;
    let sansi = String.fromCharCode(97,99,116,105,118,101,109,97,112,95,116,95,54,0);
    let nextG: Map<any, any> = new Map([[String.fromCharCode(114,101,115,112,111,110,115,101,115,95,53,95,57,49,0),String.fromCharCode(114,101,118,101,114,116,95,106,95,54,48,0)], [String.fromCharCode(98,108,101,110,100,109,111,100,101,95,106,95,55,49,0),String.fromCharCode(117,115,108,116,95,57,95,53,51,0)], [String.fromCharCode(118,95,49,53,95,116,117,114,110,111,102,102,0),String.fromCharCode(121,95,49,54,95,105,116,120,102,109,0)]]);
    let modityY = String.fromCharCode(99,111,108,117,109,110,108,105,115,116,95,116,95,51,52,0);
    let pauseJ = String.fromCharCode(111,108,97,110,97,95,114,95,51,49,0);
   if (!infoG) {
      submit2.set(`${usernameE}`, 2 % (Math.max(4, nextG.size)));
   }
      sansi = `${(String.fromCharCode(101,0) == sansi ? plus7.length : sansi.length)}`;
       let descX = String.fromCharCode(106,95,55,49,95,97,100,109,105,110,115,0);
       let moded = 1.0;
       let neonP = String.fromCharCode(103,114,97,121,95,48,95,51,51,0);
          let libfabricjniE = true;
          let screenw = String.fromCharCode(112,95,56,57,95,105,110,116,101,114,114,117,112,116,105,111,110,0);
          let final_20L: Array<any> = [173, 205, 647];
         neonP += `${(screenw == String.fromCharCode(107,0) ? screenw.length : (libfabricjniE ? 2 : 1))}`;
         libfabricjniE = (final_20L.length % (Math.max(final_20L.length, 7))) <= 12;
      if ((descX.length & 2) <= 2) {
          let umeng6: Array<any> = [121, 400];
          let eventK = 0.0;
          let humidityx = String.fromCharCode(100,95,53,53,95,112,117,114,101,0);
         descX = `${parseInt(`${eventK}`) - umeng6.length}`;
         umeng6 = [humidityx.length & humidityx.length];
         eventK *= parseFloat(`${humidityx.length}`);
      }
         neonP = `${descX.length}`;
          let fadfdeebbbfdabbbabdadfaaddaaq = String.fromCharCode(118,95,50,48,95,98,105,110,100,120,0);
          let foreground1 = String.fromCharCode(98,117,102,101,114,95,101,95,54,53,0);
         moded /= Math.max(parseFloat(`${neonP.length >> (Math.min(Math.abs(1), 3))}`), 1);
         fadfdeebbbfdabbbabdadfaaddaaq = "3";
         foreground1 = `${fadfdeebbbfdabbbabdadfaaddaaq.length}`;
      for (let v = 0; v < 3; v++) {
          let descR = 0.0;
          let googleJ = 2.0;
         neonP += `${(String.fromCharCode(55,0) == descX ? descX.length : parseInt(`${moded}`))}`;
         descR -= 2;
         googleJ += parseFloat(`${parseInt(`${googleJ}`) >> (Math.min(4, Math.abs(2)))}`);
      }
      const_utg += `${(String.fromCharCode(82,0) == descX ? descX.length : const_utg.length)}`;
   for (let u = 0; u < 1; u++) {
      nextG.set(sansi, sansi.length);
   }
   if (const_utg.includes(`${sansi.length}`)) {
      const_utg = `${submit2.size}`;
   }
   if (2 > (5 / (Math.max(5, nextG.size))) && (nextG.size / 5) > 3) {
      nextG = new Map([[`${submit2.size}`, nextG.size ^ 1]]);
   }
   for (let p = 0; p < 1; p++) {
      const_utg += `${parseInt(`${usernameE}`) ^ 1}`;
   }

    setIsRefreshing(true);

      infoG = usernameE == 98.88;
      const_utg = `${submit2.size}`;
      modityY += `${sports9.length % (Math.max(10, const_utg.length))}`;
       let logoutm = 4;
      while (logoutm <= 2) {
         logoutm |= logoutm & logoutm;
         break;
      }
          let countryV: Map<any, any> = new Map([[String.fromCharCode(105,110,105,116,105,97,108,105,122,97,116,105,111,110,115,95,55,95,50,50,0),212], [String.fromCharCode(97,119,97,114,101,95,97,95,57,0),921], [String.fromCharCode(105,110,99,114,101,109,101,110,116,115,95,56,95,53,55,0),27]]);
          let scheduleT = 5.0;
          let temperatureZ = String.fromCharCode(106,95,56,48,95,114,111,117,110,100,101,100,0);
         logoutm ^= countryV.size;
         countryV = new Map([[temperatureZ, temperatureZ.length]]);
         scheduleT -= temperatureZ.length * parseInt(`${scheduleT}`);
       let libavfilterp = 5.0;
       let drag0 = 4.0;
      modityY = `${nextG.size << (Math.min(Math.abs(1), 1))}`;
   if (2 <= modityY.length) {
      usernameE /= Math.max(parseFloat(`${const_utg.length}`), 3);
   }
      infoG = 5 == submit2.size;
   while ((parseFloat(`${sansi.length}`) * usernameE) < 5.8) {
      usernameE -= parseFloat(`${nextG.size * 1}`);
      break;
   }
    

   if (4 < const_utg.length || 4 < sansi.length) {
      sansi += `${sports9.length | 2}`;
   }
      sports9 += `${const_utg.length}`;
   for (let d = 0; d < 1; d++) {
      modityY += `${2 & plus7.length}`;
   }
      infoG = !infoG;
   let libglogQ = const_utg == String.fromCharCode(121,115,97,0);
   do {
       let interstitialk = 1;
      while ((interstitialk >> (Math.min(1, Math.abs(interstitialk)))) > 5 || (interstitialk >> (Math.min(Math.abs(5), 5))) > 1) {
         interstitialk += 2;
         break;
      }
          let pathd = String.fromCharCode(100,95,54,54,95,102,105,120,116,117,114,101,0);
         interstitialk /= Math.max(3, interstitialk);
         pathd += `${pathd.length}`;
      if ((interstitialk >> (Math.min(4, Math.abs(interstitialk)))) > 3) {
         interstitialk &= interstitialk | interstitialk;
      }
      const_utg = `${parseInt(`${usernameE}`) / (Math.max(6, const_utg.length))}`;
      if (libglogQ) {
         break;
      }
   } while (((const_utg.length + submit2.size) > 3) && libglogQ);
   let station_ = 6805611 <= submit2.size;
   do {
      submit2 = new Map([[modityY, ((infoG ? 3 : 1) % 1)]]);
      if (station_) {
         break;
      }
   } while (station_ && ((sports9.length / (Math.max(6, submit2.size))) == 5));
   while (infoG) {
      infoG = 22 <= submit2.size;
      break;
   }
    await refetch();

      sansi += `${submit2.size + const_utg.length}`;
   if (2 < (submit2.size * 4) && (usernameE * parseFloat(`${submit2.size}`)) < 2.28) {
       let internetx: Array<any> = [String.fromCharCode(117,116,116,111,110,95,116,95,57,0), String.fromCharCode(109,117,114,109,117,114,95,118,95,51,0), String.fromCharCode(112,95,52,95,99,119,110,100,0)];
      let green3 = 9821224 <= internetx.length;
      do {
         internetx.push(internetx.length << (Math.min(internetx.length, 5)));
         if (green3) {
            break;
         }
      } while (green3 && (internetx.includes(internetx.length)));
         internetx = [internetx.length << (Math.min(Math.abs(3), 1))];
         internetx = [3 * internetx.length];
      usernameE += parseFloat(`${1}`);
   }
       let mergerp = 4.0;
       let libcxxcomponentsp = true;
       let hejie = true;
      let successP = libcxxcomponentsp ? !libcxxcomponentsp : libcxxcomponentsp;
      do {
         libcxxcomponentsp = !hejie;
         if (successP) {
            break;
         }
      } while ((mergerp >= 4.15) && successP);
       let ynewarchdefaultsQ = String.fromCharCode(102,111,114,101,105,103,110,95,117,95,49,57,0);
         libcxxcomponentsp = hejie;
         mergerp /= Math.max(5, ((hejie ? 4 : 3) | parseInt(`${mergerp}`)));
      if ((3.91 / (Math.max(1, mergerp))) < 1.40 && mergerp < 3.91) {
          let notificationk = String.fromCharCode(99,95,52,55,95,117,110,102,101,116,99,104,0);
          let matchS = String.fromCharCode(97,99,99,117,109,117,108,97,116,111,114,95,97,95,56,48,0);
          let dplusD: Map<any, any> = new Map([[String.fromCharCode(114,101,103,105,111,110,115,95,112,95,57,48,0),false ], [String.fromCharCode(105,95,54,51,0),false ], [String.fromCharCode(120,95,55,54,95,103,100,111,99,0),true ]]);
          let shrinkm: Array<any> = [54, 518];
         mergerp += 1;
         notificationk = "1";
         matchS = `${2 + shrinkm.length}`;
         dplusD = new Map([[matchS, notificationk.length >> (Math.min(Math.abs(3), 4))]]);
         shrinkm.push((String.fromCharCode(98,0) == matchS ? shrinkm.length : matchS.length));
      }
          let promotiony = 5;
          let successu: Map<any, any> = new Map([[String.fromCharCode(117,95,50,55,95,105,110,100,105,110,103,0),false ], [String.fromCharCode(114,97,112,105,100,106,115,111,110,95,99,95,55,57,0),true ]]);
          let championa = 5.0;
         hejie = 25.44 < championa;
         promotiony |= promotiony / (Math.max(1, 7));
         successu = new Map([[`${successu.size}`, 1]]);
         championa *= parseFloat(`${promotiony}`);
          let buildk = false;
          let listZ = 2.0;
          let playY = String.fromCharCode(119,115,97,117,100,95,54,95,53,56,0);
         mergerp *= parseInt(`${mergerp}`) | playY.length;
         buildk = !buildk;
         listZ += (parseFloat(`${parseInt(`${listZ}`) << (Math.min(4, Math.abs((buildk ? 3 : 4))))}`));
         playY = `${((buildk ? 5 : 2) - parseInt(`${listZ}`))}`;
      if (!libcxxcomponentsp) {
         mergerp -= (ynewarchdefaultsQ == String.fromCharCode(70,0) ? (hejie ? 4 : 4) : ynewarchdefaultsQ.length);
      }
      if ((mergerp - 5.36) == 4.49 || hejie) {
         hejie = !ynewarchdefaultsQ.endsWith(`${hejie}`);
      }
      modityY = `${submit2.size}`;
      sports9 += `${(sports9 == String.fromCharCode(113,0) ? sports9.length : nextG.size)}`;
      usernameE /= Math.max(5, parseFloat(`${submit2.size}`));
      submit2.set(`${usernameE}`, 3);
   while ((usernameE + parseFloat(`${plus7.length}`)) < 1.79 || 4 < (4 & plus7.length)) {
      plus7 = [1];
      break;
   }
    setIsRefreshing(false);

      nextG = new Map([[`${submit2.size}`, 1 + modityY.length]]);
      usernameE -= parseFloat(`${const_utg.length >> (Math.min(Math.abs(2), 4))}`);
   while (1 >= sports9.length) {
      nextG.set(`${infoG}`, plus7.length);
      break;
   }
   for (let v = 0; v < 2; v++) {
      submit2.set(`${usernameE}`, 3);
   }
       let linet = 2;
         linet *= linet + linet;
          let pauseX = false;
         linet -= linet;
         pauseX = (pauseX ? !pauseX : pauseX);
       let gradleT = 4.0;
       let textinput9 = 0.0;
      sports9 += `${1 << (Math.min(5, sports9.length))}`;
   if ((submit2.size / (Math.max(4, 9))) > 1) {
      submit2 = new Map([[sansi, sansi.length]]);
   }
      sports9 += `${(3 << (Math.min(3, Math.abs((infoG ? 1 : 3)))))}`;
    return;
  }, []);
  

  const isVip = yys_RelatedTooltips.isVip(userState.user);

  useEffect(() => {
    if (selectedTab === 'xvod' && !isVip) {
      setShowBecomeVIPOverlay(true)
    } else {
      setShowBecomeVIPOverlay(false)
    }
  }, [selectedTab])

  return (
    <>
      <ImageBackground
        source={
          selectedTab == "sport"
            ? require("./../../static/images/fieldDelegate_dhRender.png")
            : screenState.showAdultTab
              ? require("./../../static/images/hookTemp.png")
              : require("./../../static/images/profile/activeLockForeground.png")
        }
        resizeMode="cover"
        style={{ flex: 1, height: 200 }}
      >
        <ScreenContainer
          isBgHide={true}
          containerStyle={{
            paddingLeft: 0,
            paddingRight: 0,
            paddingTop: Platform.OS === "ios" ? 8 : 15,
          }}
        >
          <View
            style={{
              paddingLeft: spacing.sideOffset,
              paddingRight: spacing.sideOffset,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingTop: 8,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {showSport &&
                <TouchableOpacity
                  onPress={() => {
                    setSelectedTab("sport");
                    dispatch(disableAdultMode());
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        paddingRight: 7,
                        position: "relative",
                        bottom: 10,
                      }}
                    >
                      <SportTabIcon width={32} height={32} />
                    </View>

                    <View
                      style={{
                        flexDirection: "column",
                      }}
                    >
                      <Text
                        style={{
                          ...textVariants.bigHeader,
                          color: colors.text,
                          fontSize: selectedTab == "sport" ? 20 : 16,
                          
                          paddingBottom: 3,
                          marginBottom: 0,
                        }}
                      >
                        体育
                      </Text>

                      <View
                        style={{
                          justifyContent: "center",
                          paddingHorizontal: 12,
                        }}
                      >
                        <View
                          style={{
                            borderTopWidth: selectedTab == "sport" ? 2 : 0, 
                            borderTopColor: "#ffffff", 
                            maxWidth: 20,
                          }}
                        ></View>

                        <Text></Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              }

              {screenState.showAdultTab && (
                <>
                  <TouchableOpacity
                    onPress={() => {
                      setSelectedTab("xvod");
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        marginLeft: 15,
                      }}
                    >
                      <View
                        style={{
                          paddingRight: 7,
                          position: "relative",
                          bottom: 12,
                        }}
                      >
                        <XvodTabIcon width={32} height={32} />
                      </View>

                      <View
                        style={{
                          flexDirection: "column",
                        }}
                      >
                        <Text
                          style={{
                            ...textVariants.bigHeader,
                            color: colors.text,
                            fontSize: selectedTab == "xvod" ? 20 : 16,
                            
                            paddingBottom: 3,
                            marginBottom: 0,
                          }}
                        >
                          夜来香
                        </Text>

                        <View
                          style={{
                            justifyContent: "center",
                            paddingHorizontal: 15,
                          }}
                        >
                          <View
                            style={{
                              borderTopWidth: selectedTab == "xvod" ? 2 : 0, 
                              borderTopColor: "#ffffff", 
                              maxWidth: 22,
                            }}
                          ></View>

                          <Text></Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                </>
              )}
            </View>
            <TouchableOpacity
              activeOpacity={
                !yys_RelatedTooltips.isVip(userState.user) ||
                  yys_RelatedTooltips.isGuest(userState.user)
                  ? 0.5
                  : 1
              }
              onPress={() => {
                if (
                  !yys_RelatedTooltips.isVip(userState.user)
                ) {
                  setShowBecomeVIPOverlay(true);
                }
              }}
            >


              {!yys_RelatedTooltips.isVip(userState.user) ? (
                <>
                  <View style={styles.headerContainerRight2}>
                    <VipEntry height={30} />
                  </View>
                </>
              ) : (
                <>
                  <View style={styles.headerContainerRight}>
                    <Image
                      style={styles.iconStyle}
                      source={require("@static/images/profile/specAreaPing.png")}
                    />
                    <Text
                      style={{
                        color: colors.text,
                        fontSize: 14,
                      }}
                    >
                      VIP {vipRemainingDay}天
                    </Text>
                  </View>
                </>
              )}

            </TouchableOpacity>
          </View>
          {selectedTab == "sport" &&
            matchTabs &&
            matchTabs.length > 0 &&
            !isOffline && (
              <View
                style={{
                  flex: 1,
                  marginHorizontal: 10,
                  backgroundColor: "transparent",
                  
                  
                }}
              >
                <MatchScheduleNavVip
                  setShowBecomeVIPOverlay={setShowBecomeVIPOverlay}
                  tabList={matchTabs}
                />
                {!isVip &&
                  <BecomeVipOverlay
                    setShowBecomeVIPOverlay={setShowBecomeVIPOverlay}
                    showBecomeVIPOverlay={showBecomeVIPOverlay}
                    selectedTab={selectedTab}
                  />
                }
              </View>
              // <Text>sport</Text>
            )}

          {selectedTab == "xvod" && (
            <View
              style={{
                flex: 1,
                marginHorizontal: 10,
                backgroundColor: "transparent",
                marginTop: 5
                
                
              }}
            >
              <XVodTab handleRejectEighteenPlus={handleRejectEighteenPlus} />
              {!isVip &&
                <>
                  <TouchableWithoutFeedback
                    style={styles.xvodBlur}
                    onPress={() => setShowBecomeVIPOverlay(true)}
                  >
                    <BlurView
                      blurType="dark"
                      blurAmount={2}
                      style={styles.xvodBlur}
                      overlayColor="" 
                    />
                  </TouchableWithoutFeedback>
                  <BecomeVipOverlay
                    setShowBecomeVIPOverlay={setShowBecomeVIPOverlay}
                    showBecomeVIPOverlay={showBecomeVIPOverlay}
                    selectedTab={selectedTab}
                  />
                </>

              }
            </View>
          )}
          {isOffline && <NoConnection onClickRetry={checkConnection} />}
        </ScreenContainer>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
  },
  loading: {
    flexDirection: "row",
    justifyContent: "center",
    flex: 1,
  },
  nav: {
    flexGrow: 1,
    justifyContent: "center",
    marginBottom: 10,
  },
  iconStyle: {
    height: 18,
    width: 18,
    marginRight: 5,
  },
  headerContainerRight: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(34, 35, 39 , 0.7)",
    paddingHorizontal: 10,
    borderRadius: 30,
    paddingVertical: 5,
    position: "relative",
    bottom: 8,
  },
  headerContainerRight2: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(34, 35, 39 , 0.7)",
    paddingHorizontal: 7,
    borderRadius: 30,
    paddingVertical: 1,
    position: "relative",
    bottom: 8,
  },
  xvodBlur: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    marginTop: 10,
    borderRadius: 15,
    
  }
});
