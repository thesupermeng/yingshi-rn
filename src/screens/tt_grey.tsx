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
import ScreenContainer from "../components/container/tt_backward";
import { useFocusEffect, useTheme } from "@react-navigation/native";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

import {
  BottomTabScreenProps,
  useBottomTabBarHeight,
} from "@react-navigation/bottom-tabs";
import { API_DOMAIN, MATCH_API_DOMAIN } from "@utility/tt_trophy_cross";
import Animated from "react-native-reanimated";
import FastImage from "react-native-fast-image";
import ttDescTerms from "../Sports/middleware/tt_chat";
import { Url } from "../Sports/middleware/tt_field";

import MatchScheduleNavVip from "../Sports/components/matchSchedule/tt_favicon";
import NoConnection from "../components/common/tt_fast";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";

import { useAppSelector, useSelector } from "@hooks/tt_spec_download";
import { ttOrange } from "@redux/tt_updates_bottom";
import { useDispatch } from "react-redux";
import BecomeVipOverlay from "../components/modal/tt_type";
import { ttBaiduNewinterstitial } from "@redux/reducers/tt_center";
import tt_humidity_guide from "../../Umeng/tt_humidity_guide";
import XvodTabIcon from "@static/images/materialNavigationEact.svg";
import SportTabIcon from "@static/images/catalogPhoto.svg";
import XVodTab from "./VipPrivilege/tt_calendar_styles";
import { screenModel } from "@type/tt_twitter_data";
import {
  disableAdultMode,
  setAutoSelectSport,
  showAdultModeDisclaimer,
} from "@redux/actions/tt_copy_heji";
import { BlurView } from "../components/blurView";
import { ttConfigRecommendation } from "../../tt_copy_floater";
import VipEntry from '@static/images/splash/mbbannerLogout.svg';
import { ttGoal } from "@redux/reducers/tt_selected";
import { ttFast } from "@models/tt_stations_right";
interface ttRegister {
  has_submenu: boolean;
  ids: Array<number>;
  type: string;
}

export default ({ navigation }: BottomTabScreenProps<any>) => {
  const showSport = (ttConfigRecommendation.instance.tabConfig != null && ttConfigRecommendation.instance.len == 5)
  const { textVariants, colors, spacing } = useTheme();
  const [isOffline, setIsOffline] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const dispatch = useDispatch();
  const [showBecomeVIPOverlay, setShowBecomeVIPOverlay] = useState(false);
  const userState = useSelector<ttGoal>('userReducer');
  const settingsReducer: ttBaiduNewinterstitial = useAppSelector(
    ({ settingsReducer }: ttOrange) => settingsReducer
  );

  const screenState: screenModel = useAppSelector(
    ({ screenReducer }) => screenReducer
  );

  const [selectedTab, setSelectedTab] = useState(showSport ? 'sport' : screenState.showAdultTab ? 'xvod' : null);

  const handleRejectEighteenPlus = () => {
       let stats8: Array<any> = [72, 330, 222];
    let videocommonn = String.fromCharCode(116,101,108,101,103,114,97,109,95,106,95,57,48,0);
    let sort6 = String.fromCharCode(113,95,56,55,95,102,105,108,116,101,114,0);
    let gesturesE = String.fromCharCode(114,95,54,56,95,110,111,114,109,97,108,105,122,101,0);
    let roomf = 2.0;
    let projectE = String.fromCharCode(108,97,110,101,95,104,95,51,55,0);
    let appleb: Array<any> = [134, 349, 900];
    let analyticU: Array<any> = [726, 115];
   let filterR = stats8.length >= 8867405;
   do {
       let privilegeA: Map<any, any> = new Map([[String.fromCharCode(112,97,114,116,105,97,108,95,107,95,54,49,0),false ], [String.fromCharCode(111,95,56,54,95,116,114,117,110,99,0),false ]]);
       let stepg: Array<any> = [860, 559, 414];
      for (let z = 0; z < 2; z++) {
         privilegeA.set(`${stepg.length}`, privilegeA.size);
      }
         privilegeA = new Map([[`${privilegeA.size}`, privilegeA.size | stepg.length]]);
      let analyticj = privilegeA.size <= 9626616;
      do {
          let klevin2 = String.fromCharCode(110,95,55,50,95,117,112,100,97,116,101,0);
         privilegeA = new Map([[`${stepg.length}`, stepg.length]]);
         klevin2 = `${(klevin2 == String.fromCharCode(121,0) ? klevin2.length : klevin2.length)}`;
         if (analyticj) {
            break;
         }
      } while (analyticj && (4 <= (4 + stepg.length) || (stepg.length + privilegeA.size) <= 4));
          let injurya = 1.0;
          let checkboxy = String.fromCharCode(103,95,51,48,95,117,110,101,120,112,101,99,116,101,100,0);
         stepg = [checkboxy.length];
         injurya += parseFloat(`${3}`);
         checkboxy = "1";
       let search0 = true;
         search0 = (((search0 ? 61 : privilegeA.size) ^ privilegeA.size) >= 61);
      stats8.push(privilegeA.size - stats8.length);
      if (filterR) {
         break;
      }
   } while (filterR && ((stats8.length / (Math.max(8, videocommonn.length))) <= 4 || (stats8.length / (Math.max(videocommonn.length, 1))) <= 4));
   for (let m = 0; m < 3; m++) {
      analyticU.push((sort6 == String.fromCharCode(77,0) ? appleb.length : sort6.length));
   }
   for (let r = 0; r < 2; r++) {
      sort6 = `${(videocommonn == String.fromCharCode(100,0) ? stats8.length : videocommonn.length)}`;
   }
   let baiduV = gesturesE.length <= 9287641;
   do {
      gesturesE += `${3 | projectE.length}`;
      if (baiduV) {
         break;
      }
   } while (baiduV && (sort6.length >= gesturesE.length));
   while (analyticU.length <= 5) {
      analyticU.push(appleb.length);
      break;
   }
   if (1 <= sort6.length) {
      sort6 = `${videocommonn.length}`;
   }
      sort6 += "3";
   for (let q = 0; q < 3; q++) {
      gesturesE += `${(String.fromCharCode(53,0) == projectE ? appleb.length : projectE.length)}`;
   }
   let time_dg = 5222237 >= stats8.length;
   do {
      stats8 = [sort6.length & 3];
      if (time_dg) {
         break;
      }
   } while (time_dg && (3 <= appleb.length));
      videocommonn += `${(projectE == String.fromCharCode(105,0) ? projectE.length : parseInt(`${roomf}`))}`;
      gesturesE = `${2 & sort6.length}`;
   for (let r = 0; r < 1; r++) {
      sort6 = `${appleb.length}`;
   }
      gesturesE += `${sort6.length - parseInt(`${roomf}`)}`;
      gesturesE += `${projectE.length - 3}`;
   if (2 >= videocommonn.length) {
      gesturesE += "1";
   }
      sort6 += `${projectE.length}`;
   if (parseFloat(`${sort6.length}`) == roomf) {
      sort6 += `${analyticU.length}`;
   }
      analyticU.push((videocommonn == String.fromCharCode(118,0) ? stats8.length : videocommonn.length));
   let blackJ = 8749999 <= analyticU.length;
   do {
      analyticU.push(appleb.length);
      if (blackJ) {
         break;
      }
   } while ((stats8.length > 2) && blackJ);
   let dataF = String.fromCharCode(121,95,122,120,53,114,104,118,101,0) == gesturesE;
   do {
      gesturesE += `${appleb.length - parseInt(`${roomf}`)}`;
      if (dataF) {
         break;
      }
   } while ((appleb.length > gesturesE.length) && dataF);

    setSelectedTab("lockUntick");
  };

  useEffect(() => {
    if (screenState.autoSelectSport == true) {
      dispatch(setAutoSelectSport(false));
      setSelectedTab("lockUntick");
    } 
  }, [screenState.autoSelectSport])

  
  useFocusEffect(useCallback(() => {
    tt_humidity_guide.sportViewsAnalytics();
  }, []));
  

  const { data: navOptions, refetch } = useQuery({
    queryKey: ["matchesNavOptions"],
    queryFn: () =>
      ttDescTerms.call(Url.sportTypes, {}, "GET").then((res): ttRegister[] => {
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
       let teamb = String.fromCharCode(98,111,117,110,100,105,110,103,95,120,95,57,49,0);
    let userZ = String.fromCharCode(117,110,107,105,99,107,95,51,95,57,55,0);
    let submit6 = 1.0;
    let megaphone1 = String.fromCharCode(100,95,49,52,95,102,109,115,117,98,0);
    let matchesS = String.fromCharCode(99,111,110,102,105,114,109,97,116,105,111,110,115,95,107,95,53,57,0);
    let private_6h: Map<any, any> = new Map([[String.fromCharCode(97,95,56,52,0),false ], [String.fromCharCode(116,95,55,48,95,113,117,97,110,116,105,122,101,100,0),true ]]);
    let chartt = 3.0;
    let mintegral0: Map<any, any> = new Map([[String.fromCharCode(112,95,49,57,95,116,97,110,115,105,103,0),true ], [String.fromCharCode(99,114,111,119,100,105,110,95,53,95,54,50,0),true ], [String.fromCharCode(107,95,49,48,48,95,100,111,119,110,115,97,109,112,108,105,110,103,0),false ]]);
    let catalogc = 0.0;
    let backgroundN = String.fromCharCode(106,95,57,56,95,114,101,106,111,105,110,0);
    let whatsappT = String.fromCharCode(99,95,55,48,95,116,102,117,101,108,0);
    let humidityJ = 2.0;
    let onewsm = true;
       let types0 = String.fromCharCode(109,95,49,49,95,98,115,102,115,0);
      let verticalh = types0.length <= 6730554;
      do {
         types0 = "1";
         if (verticalh) {
            break;
         }
      } while ((types0 != String.fromCharCode(121,0)) && verticalh);
      if (1 > types0.length) {
         types0 += `${types0.length << (Math.min(Math.abs(1), 5))}`;
      }
      if (!types0.startsWith(types0)) {
         types0 += "2";
      }
      teamb = `${private_6h.size ^ userZ.length}`;
   for (let k = 0; k < 2; k++) {
       let teamd = 2.0;
       let modelsR = String.fromCharCode(107,95,49,50,95,104,105,103,104,98,105,116,115,0);
       let pingq = false;
       let short_gD = String.fromCharCode(108,95,50,54,95,118,111,116,101,0);
          let catagory1: Array<any> = [765, 628];
          let suggestion7: Array<any> = [478, 133];
          let w_positiona = 2;
         modelsR = `${modelsR.length}`;
         catagory1 = [1];
         suggestion7 = [w_positiona];
         w_positiona -= catagory1.length;
      while (!short_gD.startsWith(`${teamd}`)) {
          let fieldE: Map<any, any> = new Map([[String.fromCharCode(106,95,49,52,95,98,111,117,110,99,105,110,103,0),true ], [String.fromCharCode(114,101,97,115,115,109,95,57,95,55,54,0),true ], [String.fromCharCode(114,111,119,95,120,95,52,55,0),true ]]);
         teamd += fieldE.size & parseInt(`${teamd}`);
         break;
      }
      while (3.65 > (teamd / 5.6)) {
         modelsR += `${modelsR.length - 1}`;
         break;
      }
          let giftD = String.fromCharCode(116,105,114,101,100,95,106,95,56,49,0);
          let orangev = 0.0;
         pingq = modelsR.length <= 45 && !pingq;
         giftD += "1";
         orangev -= giftD.length;
          let mbnativeadvancedM = String.fromCharCode(119,95,49,49,95,108,111,99,97,108,105,122,101,100,0);
         teamd /= Math.max(short_gD.length >> (Math.min(4, Math.abs(parseInt(`${teamd}`)))), 3);
         mbnativeadvancedM = `${mbnativeadvancedM.length}`;
         teamd += ((pingq ? 5 : 3));
      while (1 > (short_gD.length - parseInt(`${teamd}`))) {
         teamd *= (1 + (pingq ? 5 : 4));
         break;
      }
      if ((teamd - 1.84) <= 5.27) {
          let trophyA = 5;
          let sidem: Map<any, any> = new Map([[String.fromCharCode(115,117,103,103,101,115,116,105,111,110,115,95,118,95,51,49,0),426], [String.fromCharCode(104,95,52,55,95,115,108,117,114,112,0),396]]);
         teamd /= Math.max(short_gD.length / 1, 5);
         trophyA += trophyA / (Math.max(3, sidem.size));
         sidem = new Map([[`${sidem.size}`, trophyA]]);
      }
         modelsR = `${(String.fromCharCode(121,0) == modelsR ? parseInt(`${teamd}`) : modelsR.length)}`;
       let tickedb: Map<any, any> = new Map([[String.fromCharCode(98,95,52,53,95,119,97,105,116,0),813], [String.fromCharCode(120,97,109,112,108,101,95,48,95,50,52,0),810]]);
      if (short_gD == String.fromCharCode(97,0)) {
         modelsR = `${((pingq ? 1 : 5) - parseInt(`${teamd}`))}`;
      }
          let checkboxW = 1.0;
          let screenj = String.fromCharCode(116,105,108,101,95,49,95,52,52,0);
         tickedb.set(`${screenj}`, tickedb.size);
         checkboxW -= parseInt(`${checkboxW}`);
         screenj += `${parseInt(`${checkboxW}`)}`;
      megaphone1 += "2";
   }
      matchesS = `${backgroundN.length}`;
      chartt *= parseFloat(`${3 - userZ.length}`);
      submit6 += parseFloat(`${whatsappT.length / (Math.max(1, 8))}`);

    const state = await NetInfo.fetch();

   for (let h = 0; h < 2; h++) {
      matchesS = `${parseInt(`${chartt}`) | mintegral0.size}`;
   }
       let acceptedc = String.fromCharCode(108,95,53,51,95,97,119,97,114,101,0);
       let sendZ: Array<any> = [231, 275, 301];
       let suggestionf: Map<any, any> = new Map([[String.fromCharCode(108,97,115,116,95,115,95,53,56,0),621], [String.fromCharCode(98,105,110,97,114,121,95,106,95,50,51,0),917], [String.fromCharCode(97,117,100,95,111,95,56,53,0),33]]);
       let macauR: Array<any> = [String.fromCharCode(97,95,54,57,95,115,109,117,115,104,0), String.fromCharCode(118,95,54,56,95,115,116,114,117,99,116,117,114,101,0), String.fromCharCode(112,95,49,56,95,100,109,105,120,0)];
       let commentA: Array<any> = [839, 569, 517];
         commentA = [acceptedc.length];
         commentA = [suggestionf.size / (Math.max(acceptedc.length, 10))];
         commentA = [macauR.length];
          let castingO = 3;
          let moonr = false;
         acceptedc = `${(acceptedc == String.fromCharCode(72,0) ? acceptedc.length : commentA.length)}`;
         castingO &= 1 % (Math.max(5, castingO));
         moonr = castingO < 6;
      if (5 < (1 * commentA.length)) {
         suggestionf = new Map([[`${sendZ.length}`, (String.fromCharCode(50,0) == acceptedc ? sendZ.length : acceptedc.length)]]);
      }
         acceptedc += `${sendZ.length << (Math.min(macauR.length, 1))}`;
      while (Array.from(suggestionf.keys()).includes(`${macauR.length}`)) {
          let listV = 2.0;
          let referrerc = String.fromCharCode(109,97,114,107,105,110,103,115,95,118,95,54,52,0);
          let internetI = String.fromCharCode(116,95,57,48,95,100,101,98,117,103,103,101,114,0);
         macauR.push(2 ^ suggestionf.size);
         listV *= (String.fromCharCode(52,0) == referrerc ? referrerc.length : parseInt(`${listV}`));
         internetI += `${referrerc.length}`;
         break;
      }
      let turnj = acceptedc.length <= 5313480;
      do {
          let selectionG = String.fromCharCode(115,109,111,111,116,104,110,101,115,115,95,49,95,49,57,0);
          let adultB = String.fromCharCode(105,95,50,54,95,113,117,97,110,116,120,0);
          let overI = true;
          let string7 = false;
         acceptedc = `${commentA.length}`;
         selectionG = `${((overI ? 2 : 3))}`;
         adultB = `${(3 ^ (overI ? 2 : 1))}`;
         string7 = selectionG.length == 3 || string7;
         if (turnj) {
            break;
         }
      } while (turnj && (3 < (5 + acceptedc.length) && 2 < (5 + acceptedc.length)));
      matchesS = `${userZ.length}`;
      humidityJ /= Math.max(4, parseFloat(`${3}`));
   while ((3 | whatsappT.length) >= 5) {
      humidityJ -= parseFloat(`${parseInt(`${humidityJ}`) & matchesS.length}`);
      break;
   }
   if (catalogc > 4.90) {
      catalogc /= Math.max(parseFloat(`${3}`), 4);
   }
    const offline = !(state.isConnected && state.isInternetReachable);

   if (1 < (4 / (Math.max(1, userZ.length)))) {
      userZ = `${2 - parseInt(`${chartt}`)}`;
   }
      submit6 /= Math.max(parseFloat(`${backgroundN.length}`), 3);
       let entry2 = 4.0;
       let relatedT = 2.0;
          let ewardedw = 1.0;
         entry2 *= parseFloat(`${parseInt(`${ewardedw}`) | 2}`);
         relatedT *= parseInt(`${entry2}`) * parseInt(`${relatedT}`);
          let klevin1 = 4.0;
         entry2 *= parseFloat(`${parseInt(`${entry2}`) - parseInt(`${klevin1}`)}`);
         relatedT /= Math.max(parseInt(`${entry2}`), 2);
         entry2 *= parseFloat(`${parseInt(`${relatedT}`)}`);
      if (entry2 >= relatedT) {
         relatedT /= Math.max(5, parseInt(`${entry2}`));
      }
      teamb = `${matchesS.length * megaphone1.length}`;
   while (5.16 == submit6) {
      submit6 -= parseFloat(`${megaphone1.length}`);
      break;
   }
      humidityJ /= Math.max(5, parseFloat(`${parseInt(`${chartt}`) >> (Math.min(Math.abs(mintegral0.size), 4))}`));
    setIsOffline(offline);

   while (userZ == String.fromCharCode(76,0)) {
      teamb += `${(String.fromCharCode(85,0) == teamb ? teamb.length : userZ.length)}`;
      break;
   }
       let panglen = String.fromCharCode(107,95,52,95,112,97,114,97,108,108,101,108,0);
       let ball2 = 0.0;
       let whiteB = String.fromCharCode(103,95,56,95,115,116,112,115,0);
          let hooks2: Array<any> = [223, 838, 677];
         panglen += `${hooks2.length % (Math.max(9, whiteB.length))}`;
          let mimo4 = 3.0;
          let slider8: Map<any, any> = new Map([[String.fromCharCode(104,108,115,101,110,99,95,117,95,52,48,0),true ], [String.fromCharCode(119,97,108,108,95,119,95,56,52,0),false ]]);
         ball2 -= parseFloat(`${whiteB.length}`);
         mimo4 -= parseFloat(`${3}`);
         slider8 = new Map([[`${slider8.size}`, 3]]);
      for (let t = 0; t < 3; t++) {
         whiteB += `${parseInt(`${ball2}`) % 1}`;
      }
       let moonK = 3.0;
          let smallc = true;
          let vietname: Array<any> = [String.fromCharCode(97,99,116,105,118,97,116,105,111,110,115,95,110,95,49,56,0), String.fromCharCode(101,97,115,121,95,120,95,51,50,0)];
          let pageN: Map<any, any> = new Map([[String.fromCharCode(108,95,56,49,95,99,111,112,121,118,0),false ], [String.fromCharCode(99,95,49,48,48,95,115,117,105,116,97,98,108,101,0),false ], [String.fromCharCode(104,95,57,57,95,114,101,97,100,98,105,116,115,0),true ]]);
         whiteB += `${pageN.size / (Math.max(whiteB.length, 7))}`;
         smallc = ((vietname.length & (smallc ? vietname.length : 47)) < 47);
         pageN = new Map([[`${vietname.length}`, 1 - vietname.length]]);
         ball2 /= Math.max(parseFloat(`${1}`), 3);
          let rightn: Array<any> = [201, 485, 623];
          let bridgez = String.fromCharCode(109,101,109,109,103,114,95,98,95,54,0);
         moonK -= parseFloat(`${bridgez.length & 3}`);
         rightn = [rightn.length & 3];
         bridgez += `${2 + rightn.length}`;
       let mbnativeV = String.fromCharCode(121,95,53,50,95,99,104,101,99,107,0);
       let mimoK = String.fromCharCode(112,95,56,49,95,115,97,102,101,116,121,0);
      while (whiteB.length <= 2) {
          let predictionL = 1;
         whiteB += `${predictionL & whiteB.length}`;
         break;
      }
      submit6 += parseFloat(`${1}`);
       let shrinki: Map<any, any> = new Map([[String.fromCharCode(100,101,97,99,116,95,106,95,53,53,0),962], [String.fromCharCode(112,101,101,114,110,97,109,101,95,51,95,53,57,0),892]]);
       let manifestk = 3.0;
       let minivodj = String.fromCharCode(120,95,50,49,95,98,97,110,100,119,105,100,116,104,0);
       let gestureO = String.fromCharCode(98,95,51,54,95,102,108,116,117,105,110,116,0);
       let datag = String.fromCharCode(100,105,110,101,114,115,95,116,95,56,49,0);
      while ((2 + shrinki.size) <= 5) {
          let popup8 = 0.0;
          let downloadingw: Map<any, any> = new Map([[String.fromCharCode(110,101,119,108,105,110,101,95,55,95,57,56,0),608], [String.fromCharCode(114,101,115,117,108,117,116,105,111,110,95,99,95,52,49,0),249]]);
          let register_0t: Map<any, any> = new Map([[String.fromCharCode(116,95,51,95,99,97,110,99,101,108,0),421], [String.fromCharCode(104,95,50,52,95,114,101,112,108,97,99,101,0),601]]);
          let applicationd: Map<any, any> = new Map([[String.fromCharCode(119,97,116,99,104,101,114,95,105,95,56,50,0),false ], [String.fromCharCode(112,111,108,108,101,114,95,104,95,51,48,0),false ], [String.fromCharCode(100,95,54,51,95,99,111,110,116,105,110,117,101,0),false ]]);
         datag += `${2 / (Math.max(1, minivodj.length))}`;
         popup8 += parseFloat(`${2 | parseInt(`${popup8}`)}`);
         downloadingw = new Map([[`${applicationd.size}`, 2 | applicationd.size]]);
         register_0t = new Map([[`${downloadingw.size}`, downloadingw.size + parseInt(`${popup8}`)]]);
         break;
      }
          let foreground5 = 3.0;
          let penaltyf: Map<any, any> = new Map([[String.fromCharCode(109,105,120,105,110,95,105,95,57,57,0),String.fromCharCode(107,101,112,116,95,106,95,51,48,0)], [String.fromCharCode(100,114,105,102,116,105,110,103,95,104,95,55,0),String.fromCharCode(110,95,53,49,95,98,114,105,110,103,0)], [String.fromCharCode(121,95,53,56,95,97,98,108,0),String.fromCharCode(112,95,52,48,95,112,103,109,121,117,118,0)]]);
         datag = `${minivodj.length}`;
         foreground5 *= parseFloat(`${penaltyf.size}`);
         penaltyf.set(`${foreground5}`, penaltyf.size);
      if (gestureO != String.fromCharCode(57,0) || datag != String.fromCharCode(50,0)) {
          let uploadg = 4.0;
          let delegate_xw = 5.0;
          let viewerz = 5;
         gestureO += `${parseInt(`${uploadg}`) % (Math.max(10, parseInt(`${delegate_xw}`)))}`;
         uploadg /= Math.max(5, 1);
         delegate_xw -= parseFloat(`${viewerz << (Math.min(Math.abs(2), 1))}`);
      }
       let searchbarD = true;
       let handler1 = true;
      if (2.34 > (minivodj.length * manifestk) && 5.30 > (manifestk * 2.34)) {
          let mbnativeadvancedX = 0.0;
          let nterstitialQ = 2.0;
          let mbbannerN = 1.0;
         minivodj = `${shrinki.size}`;
         mbnativeadvancedX += parseFloat(`${1}`);
         nterstitialQ *= parseFloat(`${parseInt(`${nterstitialQ}`) / 1}`);
         mbbannerN /= Math.max(1, parseInt(`${mbbannerN}`) + 1);
      }
      let middle9 = String.fromCharCode(103,53,121,113,54,116,56,0) == gestureO;
      do {
          let projecte = 2.0;
          let carouselD: Map<any, any> = new Map([[String.fromCharCode(100,101,109,111,95,98,95,49,55,0),true ], [String.fromCharCode(98,105,110,107,97,117,100,105,111,95,114,95,55,48,0),false ]]);
          let panglep: Map<any, any> = new Map([[String.fromCharCode(106,95,53,53,95,98,114,111,97,100,99,97,115,116,115,0),672], [String.fromCharCode(110,95,49,56,95,115,101,101,100,0),249]]);
          let infoe = String.fromCharCode(105,110,105,116,105,97,108,105,122,101,114,115,95,116,95,53,49,0);
          let inactivei = true;
         gestureO += `${shrinki.size * parseInt(`${projecte}`)}`;
         projecte -= parseFloat(`${carouselD.size % (Math.max(panglep.size, 6))}`);
         carouselD = new Map([[`${panglep.size}`, 2]]);
         infoe += "3";
         inactivei = !infoe.endsWith(`${inactivei}`);
         if (middle9) {
            break;
         }
      } while (middle9 && (gestureO.startsWith(`${minivodj.length}`)));
         datag = "2";
      while (!searchbarD) {
         handler1 = (manifestk - shrinki.size) >= 15.28;
         break;
      }
      catalogc -= parseFloat(`${1 / (Math.max(7, matchesS.length))}`);
      teamb = `${backgroundN.length | 1}`;
      whatsappT = `${private_6h.size | 2}`;
    if (!offline) {

   if (whatsappT.length > 4) {
      whatsappT += "3";
   }
   for (let r = 0; r < 2; r++) {
      chartt += parseFloat(`${3}`);
   }
   let usern = matchesS == String.fromCharCode(108,102,121,113,116,95,48,120,0);
   do {
      matchesS += `${3 / (Math.max(5, teamb.length))}`;
      if (usern) {
         break;
      }
   } while ((2 == backgroundN.length) && usern);
   while ((1.65 + catalogc) >= 5.74 && 1 >= (5 + private_6h.size)) {
       let foundM = 5.0;
       let moon7 = String.fromCharCode(99,111,112,105,101,100,95,54,95,53,49,0);
      for (let k = 0; k < 3; k++) {
          let actionsx = String.fromCharCode(114,117,108,101,95,115,95,56,57,0);
          let detaile: Array<any> = [858, 684];
          let moreD: Map<any, any> = new Map([[String.fromCharCode(112,95,51,55,95,110,111,114,109,97,108,105,115,101,0),208], [String.fromCharCode(105,95,49,55,95,115,112,114,101,97,100,0),728]]);
          let tumbnailM = false;
         moon7 += `${moreD.size / (Math.max(5, detaile.length))}`;
         actionsx += `${1 ^ actionsx.length}`;
         detaile.push(actionsx.length);
         moreD = new Map([[actionsx, 2]]);
      }
         foundM -= parseFloat(`${1 * moon7.length}`);
          let footballr = String.fromCharCode(114,95,52,51,95,115,119,102,104,97,115,104,0);
          let currentA = String.fromCharCode(99,95,55,54,95,114,101,100,97,0);
         moon7 = "1";
         footballr = `${footballr.length & 1}`;
         currentA = `${1 | footballr.length}`;
      let turn_ = String.fromCharCode(108,121,116,95,95,100,0) == moon7;
      do {
          let libcrashsdk2: Array<any> = [674, 955];
          let animationK = 5;
          let const_psm = 0;
         moon7 += "2";
         libcrashsdk2.push(libcrashsdk2.length ^ 1);
         animationK &= animationK;
         const_psm <<= Math.min(Math.abs(libcrashsdk2.length * animationK), 2);
         if (turn_) {
            break;
         }
      } while ((4 <= (5 % (Math.max(4, moon7.length))) && (5 - parseInt(`${foundM}`)) <= 5) && turn_);
      while (1 > (moon7.length - 1)) {
          let rewardS = false;
          let send4 = 1;
         moon7 = `${(parseInt(`${foundM}`) - (rewardS ? 4 : 1))}`;
         rewardS = send4 == 49 && send4 == 49;
         break;
      }
         foundM += parseFloat(`${moon7.length * 1}`);
      private_6h = new Map([[matchesS, matchesS.length]]);
      break;
   }
   if ((1.16 - humidityJ) > 3.17 && 1 > (teamb.length - parseInt(`${humidityJ}`))) {
      teamb += `${mintegral0.size}`;
   }
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
       let downloaderl = 0.0;
    let bingB = false;
    let time_tE = String.fromCharCode(99,95,51,56,95,97,112,112,101,110,100,0);
    let m_playerT = String.fromCharCode(118,111,105,99,101,109,97,105,108,95,104,95,57,48,0);
    let anythink2 = 4.0;
    let twitteri = 0.0;
    let bootsplashv: Map<any, any> = new Map([[String.fromCharCode(115,95,52,55,95,110,111,110,114,100,0),true ], [String.fromCharCode(103,117,101,115,115,95,99,95,49,57,0),false ], [String.fromCharCode(102,95,56,51,95,111,114,105,101,110,116,97,116,105,111,110,0),false ]]);
    let shoot1 = String.fromCharCode(97,95,54,52,95,104,97,110,100,115,0);
    let gemfile3 = String.fromCharCode(113,95,51,50,95,101,97,114,108,105,101,115,116,0);
    let sliderR = String.fromCharCode(111,95,56,95,99,104,97,110,103,101,114,0);
    let referrer4 = String.fromCharCode(98,95,49,95,97,118,102,109,116,0);
       let xvodu: Array<any> = [836, 401, 526];
       let gpayf = 0;
       let optionsW: Array<any> = [String.fromCharCode(107,105,99,107,101,100,95,48,95,57,49,0), String.fromCharCode(114,101,102,95,109,95,56,51,0), String.fromCharCode(108,95,57,51,95,101,114,105,97,108,105,122,97,116,105,111,110,0)];
         optionsW = [3];
      if (3 < gpayf) {
          let leftV = 0.0;
         gpayf ^= parseInt(`${leftV}`);
      }
      let flippery = 7232821 >= optionsW.length;
      do {
         optionsW.push(gpayf | optionsW.length);
         if (flippery) {
            break;
         }
      } while (flippery && ((optionsW.length * 1) == 1 || 1 == (xvodu.length * optionsW.length)));
      for (let f = 0; f < 3; f++) {
         gpayf >>= Math.min(Math.abs(3 - optionsW.length), 2);
      }
          let memberI = false;
          let assistg = 4.0;
          let j_managerf = String.fromCharCode(101,110,99,105,114,99,108,101,100,95,102,95,52,55,0);
         xvodu.push(xvodu.length);
         memberI = 40.5 == assistg && j_managerf == String.fromCharCode(76,0);
         assistg += (parseFloat(`${j_managerf == String.fromCharCode(107,0) ? parseInt(`${assistg}`) : j_managerf.length}`));
         gpayf += optionsW.length - xvodu.length;
         xvodu = [xvodu.length];
      for (let s = 0; s < 3; s++) {
         optionsW.push(xvodu.length);
      }
      let catagoryV = optionsW.length <= 7937284;
      do {
          let mbnativeadvancede = 5.0;
          let q_imageM = String.fromCharCode(108,115,98,115,95,105,95,54,0);
          let expandN = String.fromCharCode(108,97,99,101,115,95,111,95,50,55,0);
          let statisticsG = String.fromCharCode(102,95,54,51,95,114,101,115,105,122,101,100,0);
          let rewardR = String.fromCharCode(115,95,56,54,95,114,100,101,108,116,97,0);
         optionsW.push(rewardR.length);
         mbnativeadvancede *= 3;
         q_imageM += "1";
         expandN += `${3 | expandN.length}`;
         statisticsG += `${3 & parseInt(`${mbnativeadvancede}`)}`;
         rewardR = `${parseInt(`${mbnativeadvancede}`) * 2}`;
         if (catagoryV) {
            break;
         }
      } while ((gpayf <= 1) && catagoryV);
      m_playerT += `${parseInt(`${anythink2}`) * bootsplashv.size}`;
   while (m_playerT.includes(`${bingB}`)) {
      bingB = 85.15 >= downloaderl && !bingB;
      break;
   }
       let album6 = String.fromCharCode(105,95,56,56,95,112,97,114,97,109,0);
       let indexL = String.fromCharCode(105,110,99,108,117,100,101,115,95,54,95,54,53,0);
       let constants0 = String.fromCharCode(105,110,116,101,114,112,111,108,97,116,101,112,111,108,121,100,101,99,95,104,95,55,54,0);
       let interstitial5 = String.fromCharCode(103,115,109,100,101,99,95,51,95,50,51,0);
          let minii = String.fromCharCode(118,95,54,56,95,98,101,104,97,118,105,111,114,115,0);
          let userp = String.fromCharCode(113,95,53,54,95,117,110,109,97,110,97,103,101,100,0);
         interstitial5 = "1";
         minii = `${userp.length}`;
         userp = `${minii.length}`;
      for (let k = 0; k < 2; k++) {
         interstitial5 = `${constants0.length}`;
      }
       let inviter = String.fromCharCode(105,115,100,105,103,105,116,95,50,95,49,54,0);
          let telegramU = String.fromCharCode(117,95,55,56,95,102,109,116,99,111,110,118,101,114,116,0);
          let minivodu: Map<any, any> = new Map([[String.fromCharCode(116,95,56,57,95,115,101,97,114,99,104,0),true ], [String.fromCharCode(102,101,110,99,95,55,95,53,50,0),true ]]);
          let yellowH = String.fromCharCode(99,95,51,57,0);
         inviter = `${yellowH.length}`;
         telegramU = `${minivodu.size & telegramU.length}`;
         minivodu = new Map([[`${minivodu.size}`, minivodu.size]]);
         yellowH = `${minivodu.size}`;
          let a_center8: Array<any> = [505, 866];
          let rewardvideos = 4.0;
          let other1: Array<any> = [348, 873];
         inviter = `${(interstitial5 == String.fromCharCode(99,0) ? parseInt(`${rewardvideos}`) : interstitial5.length)}`;
         a_center8.push(a_center8.length / (Math.max(2, other1.length)));
         rewardvideos -= 1;
         other1.push(other1.length - 1);
         interstitial5 = "1";
      let promotionO = 5848617 >= inviter.length;
      do {
         inviter = `${constants0.length}`;
         if (promotionO) {
            break;
         }
      } while ((3 < interstitial5.length && 3 < inviter.length) && promotionO);
      while (2 < inviter.length || 2 < interstitial5.length) {
         interstitial5 = `${inviter.length}`;
         break;
      }
      anythink2 /= Math.max(4, time_tE.length * 2);
      album6 += `${indexL.length & album6.length}`;
      indexL = `${indexL.length}`;
       let nativeexm = 0.0;
       let shrinkN: Map<any, any> = new Map([[String.fromCharCode(99,97,112,116,117,114,101,95,106,95,56,48,0),203], [String.fromCharCode(115,112,111,105,108,101,114,115,95,52,95,56,56,0),865], [String.fromCharCode(97,119,97,121,95,48,95,53,54,0),615]]);
      if ((parseInt(`${nativeexm}`) - shrinkN.size) == 2 && (nativeexm - 5.71) == 2.2) {
          let bell5 = 5.0;
          let launchy = String.fromCharCode(115,95,57,51,95,105,109,112,111,114,116,0);
          let floater_ = 4.0;
         nativeexm += launchy.length % (Math.max(1, 8));
         bell5 += parseInt(`${bell5}`) ^ 1;
         launchy += `${3 - parseInt(`${floater_}`)}`;
         floater_ += parseFloat(`${parseInt(`${bell5}`)}`);
      }
         nativeexm -= parseInt(`${nativeexm}`);
      if ((shrinkN.size * 4) <= 2) {
          let gpayD: Map<any, any> = new Map([[String.fromCharCode(115,95,56,53,95,98,101,110,99,104,109,97,114,107,0),false ], [String.fromCharCode(116,115,120,95,121,95,55,56,0),true ], [String.fromCharCode(115,104,111,114,116,99,117,116,115,95,57,95,57,52,0),true ]]);
          let castR: Map<any, any> = new Map([[String.fromCharCode(115,99,111,114,101,115,95,116,95,49,48,0),String.fromCharCode(118,105,101,119,95,120,95,55,50,0)], [String.fromCharCode(103,95,57,52,95,114,101,100,117,110,100,97,110,99,121,0),String.fromCharCode(113,95,51,57,95,105,110,118,111,107,101,114,0)]]);
          let fast5 = String.fromCharCode(111,95,53,54,95,98,108,117,114,97,121,0);
         nativeexm /= Math.max(1 >> (Math.min(4, Math.abs(gpayD.size))), 1);
         gpayD.set(`${fast5}`, 1);
         castR = new Map([[`${castR.size}`, fast5.length]]);
      }
      while (3 <= shrinkN.size) {
         shrinkN = new Map([[`${shrinkN.size}`, shrinkN.size]]);
         break;
      }
         nativeexm *= shrinkN.size + 3;
         shrinkN.set(`${nativeexm}`, shrinkN.size >> (Math.min(5, Math.abs(parseInt(`${nativeexm}`)))));
      shoot1 = `${3 * parseInt(`${twitteri}`)}`;
      anythink2 -= time_tE.length;
      twitteri += 3 | parseInt(`${twitteri}`);

    setIsRefreshing(true);

      bingB = shoot1 == String.fromCharCode(87,0);
   let searchh = 5812820 <= bootsplashv.size;
   do {
      bootsplashv.set(shoot1, bootsplashv.size ^ shoot1.length);
      if (searchh) {
         break;
      }
   } while ((!bingB) && searchh);
   for (let c = 0; c < 2; c++) {
      bootsplashv = new Map([[time_tE, parseInt(`${anythink2}`) % (Math.max(9, time_tE.length))]]);
   }
      m_playerT = `${2 & parseInt(`${twitteri}`)}`;
       let placementg: Map<any, any> = new Map([[String.fromCharCode(108,95,57,51,95,116,114,121,0),false ], [String.fromCharCode(100,95,50,48,95,101,115,115,105,111,110,0),true ], [String.fromCharCode(97,117,100,105,111,95,50,95,52,51,0),false ]]);
       let middleM = true;
      while ((placementg.size / 4) <= 2) {
          let bootsplashu = true;
          let entry5: Map<any, any> = new Map([[String.fromCharCode(115,95,56,49,95,99,111,110,116,114,105,98,0),822], [String.fromCharCode(110,95,50,48,95,109,101,109,99,112,121,0),654], [String.fromCharCode(105,95,52,48,95,112,97,114,116,105,99,105,112,97,116,105,111,110,0),936]]);
          let filterm = 2.0;
         placementg = new Map([[`${placementg.size}`, 2]]);
         bootsplashu = filterm < 84.75 || bootsplashu;
         entry5 = new Map([[`${entry5.size}`, entry5.size]]);
         filterm -= parseFloat(`${entry5.size}`);
         break;
      }
      if (3 == placementg.size) {
         placementg = new Map([[`${placementg.size}`, ((middleM ? 1 : 1) ^ 1)]]);
      }
      time_tE += `${placementg.size / (Math.max(3, 6))}`;
       let predictionb = String.fromCharCode(97,110,105,109,97,116,101,100,95,103,95,57,0);
       let sans_ = String.fromCharCode(97,100,100,114,101,115,115,101,115,95,119,95,50,48,0);
         sans_ += `${predictionb.length}`;
         sans_ += `${(sans_ == String.fromCharCode(120,0) ? sans_.length : predictionb.length)}`;
      while (!sans_.startsWith(`${predictionb.length}`)) {
          let schedule1: Array<any> = [278, 193, 516];
          let selectg: Map<any, any> = new Map([[String.fromCharCode(108,95,54,48,95,99,104,114,111,109,97,0),String.fromCharCode(98,95,56,50,95,114,97,115,116,101,114,105,122,101,115,0)], [String.fromCharCode(116,101,108,101,103,114,97,109,95,105,95,51,51,0),String.fromCharCode(107,95,54,53,95,112,105,112,101,108,105,110,105,110,103,0)], [String.fromCharCode(114,101,115,101,110,116,97,116,105,111,110,95,56,95,56,56,0),String.fromCharCode(99,111,112,121,102,100,95,104,95,56,56,0)]]);
          let heart4 = 3.0;
         predictionb += `${(sans_ == String.fromCharCode(76,0) ? sans_.length : selectg.size)}`;
         schedule1 = [parseInt(`${heart4}`)];
         selectg.set(`${heart4}`, schedule1.length);
         break;
      }
          let combinedE = String.fromCharCode(105,95,56,53,95,110,111,119,0);
         predictionb = `${predictionb.length & combinedE.length}`;
      while (sans_.length >= predictionb.length) {
          let holderV = String.fromCharCode(115,95,52,50,95,108,97,99,105,110,103,0);
          let icont = 5.0;
          let data9 = 0.0;
          let sell2: Array<any> = [187, 581];
          let volumeY = 2;
         sans_ += `${sell2.length & volumeY}`;
         holderV += `${3 - holderV.length}`;
         icont *= holderV.length;
         data9 += parseFloat(`${3 + parseInt(`${data9}`)}`);
         sell2.push(3 / (Math.max(parseInt(`${icont}`), 1)));
         volumeY &= parseInt(`${icont}`) - 2;
         break;
      }
          let customt = 0;
          let dragc = 2.0;
          let malaysia6 = true;
         predictionb += `${1 ^ parseInt(`${dragc}`)}`;
         customt %= Math.max(5, 2);
         dragc -= parseFloat(`${3}`);
         malaysia6 = customt < 53;
      anythink2 += parseInt(`${anythink2}`) ^ parseInt(`${downloaderl}`);
    

   for (let z = 0; z < 1; z++) {
       let short_u2L = 3.0;
          let overlayS = 5.0;
         short_u2L *= parseFloat(`${3 & parseInt(`${overlayS}`)}`);
      while (3.87 > (2.57 - short_u2L) && (short_u2L / 2.57) > 3.43) {
          let popupA = String.fromCharCode(102,101,101,95,122,95,53,49,0);
          let confirmationP: Map<any, any> = new Map([[String.fromCharCode(117,95,54,55,95,101,97,99,101,110,99,0),203], [String.fromCharCode(115,105,109,112,108,101,116,105,109,101,111,117,116,95,97,95,54,0),885], [String.fromCharCode(108,95,56,50,95,114,116,109,112,99,114,121,112,116,0),129]]);
          let r_counth: Array<any> = [535, 786, 764];
          let loadingG = 1.0;
         short_u2L -= parseFloat(`${1}`);
         popupA = `${popupA.length}`;
         confirmationP = new Map([[`${confirmationP.size}`, parseInt(`${loadingG}`) - 3]]);
         r_counth.push(1);
         loadingG /= Math.max(parseFloat(`${1}`), 2);
         break;
      }
      while (2.85 >= (short_u2L + 2)) {
         short_u2L /= Math.max(4, parseFloat(`${parseInt(`${short_u2L}`) - 2}`));
         break;
      }
      bingB = (((bingB ? time_tE.length : 43) + time_tE.length) == 43);
   }
      anythink2 += (shoot1 == String.fromCharCode(111,0) ? shoot1.length : parseInt(`${downloaderl}`));
      bootsplashv = new Map([[`${bootsplashv.size}`, time_tE.length]]);
   if (!bingB) {
      bingB = downloaderl < 24.60;
   }
   if (m_playerT.length == 4) {
      m_playerT = `${1 + bootsplashv.size}`;
   }
   let sportsG = String.fromCharCode(108,99,97,117,121,49,0) == sliderR;
   do {
      sliderR += `${1 >> (Math.min(Math.abs(parseInt(`${anythink2}`)), 3))}`;
      if (sportsG) {
         break;
      }
   } while (((sliderR.length ^ 2) >= 1) && sportsG);
    await refetch();

      bingB = String.fromCharCode(110,0) == sliderR;
   if (m_playerT == String.fromCharCode(68,0)) {
      sliderR = `${parseInt(`${twitteri}`)}`;
   }
      twitteri -= m_playerT.length;
   if (sliderR.endsWith(`${gemfile3.length}`)) {
       let inactiveT = String.fromCharCode(109,95,56,50,95,114,101,115,105,100,117,97,108,0);
       let activeU = 2.0;
         inactiveT += `${1 | parseInt(`${activeU}`)}`;
      for (let b = 0; b < 2; b++) {
         inactiveT += `${inactiveT.length & 1}`;
      }
         activeU /= Math.max(parseInt(`${activeU}`) % (Math.max(inactiveT.length, 5)), 4);
       let networkH = String.fromCharCode(99,95,54,54,95,112,114,101,100,0);
          let moreJ: Map<any, any> = new Map([[String.fromCharCode(117,112,100,97,116,101,115,95,57,95,56,55,0),String.fromCharCode(97,118,117,105,95,112,95,55,51,0)], [String.fromCharCode(111,95,55,56,95,97,108,108,112,97,115,115,0),String.fromCharCode(120,95,49,95,116,105,109,101,111,117,116,115,0)], [String.fromCharCode(112,105,118,111,116,95,100,95,53,57,0),String.fromCharCode(100,101,99,101,108,101,114,97,116,105,111,110,95,110,95,52,50,0)]]);
          let mode3: Array<any> = [String.fromCharCode(115,107,105,110,95,57,95,49,53,0), String.fromCharCode(120,95,48,95,116,114,97,99,101,0)];
         inactiveT += `${networkH.length | 2}`;
         moreJ = new Map([[`${moreJ.size}`, 1 - mode3.length]]);
         mode3 = [1];
      while (inactiveT.includes(`${networkH.length}`)) {
          let benefitv = false;
          let telegramC = 1;
          let edits: Array<any> = [379, 972, 880];
          let trashw = true;
          let backl = 1;
         inactiveT += `${inactiveT.length * 1}`;
         benefitv = trashw && benefitv;
         telegramC ^= backl;
         edits = [((trashw ? 1 : 3) ^ 1)];
         backl /= Math.max(3, backl * 1);
         break;
      }
      gemfile3 = `${time_tE.length * 2}`;
   }
   if (time_tE.length >= 4) {
      referrer4 = `${gemfile3.length % (Math.max(3, 10))}`;
   }
      bingB = twitteri > 84.61 || 78 > sliderR.length;
    setIsRefreshing(false);

   if (time_tE.startsWith(`${gemfile3.length}`)) {
      time_tE = `${gemfile3.length ^ 1}`;
   }
   let floatingM = anythink2 <= 6697023.0;
   do {
      anythink2 /= Math.max(m_playerT.length, 5);
      if (floatingM) {
         break;
      }
   } while ((sliderR.endsWith(`${anythink2}`)) && floatingM);
   for (let t = 0; t < 2; t++) {
      downloaderl += 3;
   }
   let detaila = m_playerT == String.fromCharCode(49,106,97,104,107,95,56,99,108,0);
   do {
      m_playerT = "1";
      if (detaila) {
         break;
      }
   } while ((m_playerT.endsWith(`${bootsplashv.size}`)) && detaila);
       let schedule3 = String.fromCharCode(115,112,101,99,105,97,108,95,101,95,56,48,0);
          let countryC = true;
          let unreadG: Array<any> = [938, 425];
         schedule3 += "1";
         countryC = 11 < unreadG.length;
         unreadG.push(unreadG.length & unreadG.length);
         schedule3 = `${schedule3.length}`;
          let combinedt: Array<any> = [858, 547];
         schedule3 += `${schedule3.length}`;
         combinedt.push(2);
      sliderR = `${gemfile3.length}`;
   for (let d = 0; d < 1; d++) {
      bingB = m_playerT.length > 12 && 12 > bootsplashv.size;
   }
    return;
  }, []);
  

  const isVip = ttFast.isVip(userState.user);

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
          selectedTab == "lockUntick"
            ? require("./../../static/images/anytimeTargetFiled.png")
            : screenState.showAdultTab
              ? require("./../../static/images/androidRenewBell.png")
              : require("./../../static/images/profile/relatedTerms.png")
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
                    setSelectedTab("lockUntick");
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
                          fontSize: selectedTab == "lockUntick" ? 20 : 16,
                          
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
                            borderTopWidth: selectedTab == "lockUntick" ? 2 : 0, 
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
                !ttFast.isVip(userState.user) ||
                  ttFast.isGuest(userState.user)
                  ? 0.5
                  : 1
              }
              onPress={() => {
                if (
                  !ttFast.isVip(userState.user)
                ) {
                  setShowBecomeVIPOverlay(true);
                }
              }}
            >


              {!ttFast.isVip(userState.user) ? (
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
                      source={require("@static/images/profile/screenLong_b.png")}
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
          {selectedTab == "lockUntick" &&
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
