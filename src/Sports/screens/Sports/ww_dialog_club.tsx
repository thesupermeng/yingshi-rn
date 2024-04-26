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
} from "react-native";
import ScreenContainer from "../../../components/container/ww_collection";
import MainHeader from "../../../components/header/ww_schedule_header";
import { useFocusEffect, useTheme } from "@react-navigation/native";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import {
  wwFirebase,
} from "@type/ww_dycreator_result";
import VodPlaylist from "../../../components/playlist/ww_package";
import {
  BottomTabScreenProps,
  useBottomTabBarHeight,
} from "@react-navigation/bottom-tabs";
import { API_DOMAIN, MATCH_API_DOMAIN } from "@utility/ww_icon";
import Animated from "react-native-reanimated";
import FastImage from "react-native-fast-image";
import wwShirtPhilippines from "../../middleware/ww_klevin";
import { Url } from "../../middleware/ww_phone_langkey";
import { formatMatchDate } from "../../utility/utils";
import { wwInfo } from "../../types/ww_dice";
import MatchSchedule from "../../components/matchSchedule/ww_libavformat";
import MatchScheduleNav from "../../components/matchSchedule/ww_libfb_iconwechat_view";
import NoConnection from "./../../../components/common/ww_downarrow";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";

import { useAppSelector, useSelector } from "@hooks/ww_catagory_neon";
import { wwEighteenShirt } from "@redux/ww_small";
import { useDispatch } from "react-redux";
import BecomeVipOverlay from "../../../components/modal/ww_animation";
import { wwShielddoneAlbum } from "@redux/reducers/ww_detail_mbsplash";
import ww_runtime from "../../../../Umeng/ww_runtime";
import { wwVertical } from "@redux/reducers/ww_related_kuaishou";
import { wwBodan } from "@models/ww_liveendmodallogo_awayteamfield";

interface wwPlayDetail {
  has_submenu: boolean;
  ids: Array<number>;
  type: string;
}

export default ({ navigation }: BottomTabScreenProps<any>) => {
  const { textVariants, colors, spacing } = useTheme();
  const [isOffline, setIsOffline] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const dispatch = useDispatch();
  const [showBecomeVIPOverlay, setShowBecomeVIPOverlay] = useState(false);
  const userState = useSelector<wwVertical>('userReducer');
  const settingsReducer: wwShielddoneAlbum = useAppSelector(
    ({ settingsReducer }: wwEighteenShirt) => settingsReducer
  );

  
  useFocusEffect(useCallback(() => {
    ww_runtime.sportViewsAnalytics();
  }, []));
  

  const { data: navOptions, refetch } = useQuery({
    queryKey: ["matchesNavOptions"],
    queryFn: () =>
      wwShirtPhilippines.call(Url.sportTypes, {}, "GET").then((res): wwPlayDetail[] => {
        return res.data;
      }),
  });
  const bottomTabHeight = useBottomTabBarHeight();

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
       let scheduleP = String.fromCharCode(115,111,99,107,101,116,115,95,117,95,56,57,0);
    let libcxxcomponentsg = false;
    let spinnerc = String.fromCharCode(110,95,49,56,95,115,105,110,102,0);
    let eact_ = String.fromCharCode(101,95,50,48,95,99,104,101,99,107,111,117,116,0);
    let largeL = false;
    let libswresampleM = String.fromCharCode(102,95,50,51,95,114,101,112,108,97,121,0);
    let teamdetailsbga: Array<any> = [99, 250, 632];
    let emptyh = String.fromCharCode(120,95,50,56,95,101,113,117,97,108,115,0);
    let orientationi = true;
    let clockT = true;
    let orangeD: Map<any, any> = new Map([[String.fromCharCode(99,114,101,97,116,105,118,101,95,112,95,53,50,0),976], [String.fromCharCode(110,95,52,57,95,105,110,100,105,99,101,115,0),902]]);
    let webviewS = String.fromCharCode(115,117,114,114,111,117,110,100,95,103,95,57,53,0);
    let reminderN = 3.0;
    let greyarrowupx = String.fromCharCode(112,95,51,48,95,99,97,117,116,101,114,105,122,101,0);
    let uploadB = 1.0;
    let loginsuccessp = true;
   let updatess = String.fromCharCode(110,110,112,0) == webviewS;
   do {
      webviewS += `${orangeD.size}`;
      if (updatess) {
         break;
      }
   } while ((1 == (5 & orangeD.size)) && updatess);
   while (!eact_.includes(`${spinnerc.length}`)) {
      spinnerc += `${spinnerc.length % 2}`;
      break;
   }
      spinnerc = `${orangeD.size ^ 2}`;
      teamdetailsbga.push((1 | (clockT ? 1 : 2)));
   for (let n = 0; n < 1; n++) {
      scheduleP += `${((largeL ? 4 : 5))}`;
   }
       let matchactiveE: Map<any, any> = new Map([[String.fromCharCode(112,114,111,112,111,114,116,105,111,110,115,95,49,95,56,56,0),709], [String.fromCharCode(117,95,55,57,95,100,101,112,111,115,105,116,0),111]]);
       let carouselp: Array<any> = [279, 866, 748];
      for (let s = 0; s < 2; s++) {
         matchactiveE = new Map([[`${matchactiveE.size}`, carouselp.length]]);
      }
       let forwardW = String.fromCharCode(117,95,49,51,95,117,110,107,101,121,101,100,0);
         forwardW = "2";
      if (matchactiveE.get(`${carouselp.length}`) == null) {
         matchactiveE.set(`${carouselp.length}`, carouselp.length);
      }
          let phonep = 5.0;
          let downloading1 = String.fromCharCode(112,95,52,95,114,101,99,111,114,100,105,110,103,99,111,110,110,0);
          let libavcodecN = String.fromCharCode(115,98,119,97,105,116,95,102,95,55,0);
         carouselp.push(2);
         phonep *= downloading1.length % 1;
         downloading1 = `${parseInt(`${phonep}`) - libavcodecN.length}`;
         libavcodecN += `${2 * downloading1.length}`;
          let modal4 = 5.0;
          let container_ = String.fromCharCode(109,95,57,48,95,108,111,99,107,101,100,0);
          let iconbellactivek = String.fromCharCode(97,95,54,48,95,105,109,109,101,100,105,97,116,101,0);
         carouselp.push(matchactiveE.size);
         modal4 /= Math.max(container_.length | parseInt(`${modal4}`), 5);
         container_ = `${iconbellactivek.length - container_.length}`;
         iconbellactivek = `${container_.length}`;
      libswresampleM = `${orangeD.size - 3}`;
   for (let s = 0; s < 3; s++) {
      largeL = eact_.length == 95 && !largeL;
   }
      webviewS += `${(3 << (Math.min(3, Math.abs((largeL ? 3 : 3)))))}`;

    const state = await NetInfo.fetch();

   let questicong = teamdetailsbga.length <= 9720996;
   do {
       let suggestionm = 4.0;
       let networku: Array<any> = [998, 144, 352];
       let topicy = String.fromCharCode(117,95,54,51,95,108,98,108,0);
       let greyV = 5.0;
      for (let z = 0; z < 3; z++) {
         topicy += `${topicy.length}`;
      }
         topicy += `${1 << (Math.min(2, networku.length))}`;
      if (suggestionm < 2.24) {
         suggestionm += parseFloat(`${networku.length % (Math.max(2, topicy.length))}`);
      }
      if (4.39 >= (greyV / (Math.max(5, parseFloat(`${networku.length}`))))) {
          let delegate_lyj = String.fromCharCode(109,98,102,105,108,116,101,114,95,99,95,48,0);
          let episodez = String.fromCharCode(110,111,114,111,117,110,100,95,103,95,56,53,0);
          let launchH = 2.0;
         networku = [1 >> (Math.min(5, delegate_lyj.length))];
         delegate_lyj = `${3 << (Math.min(2, Math.abs(parseInt(`${launchH}`))))}`;
         episodez += `${parseInt(`${launchH}`)}`;
      }
      let assista = String.fromCharCode(121,56,97,114,49,108,119,0) == topicy;
      do {
         topicy += `${networku.length - topicy.length}`;
         if (assista) {
            break;
         }
      } while (assista && ((5.74 * greyV) > 3.44 || 5 > (1 | topicy.length)));
          let hiadF = String.fromCharCode(99,97,118,115,118,105,100,101,111,95,118,95,55,55,0);
          let setting6 = 2;
          let whiteanimationlivew: Array<any> = [502, 144];
         suggestionm += parseFloat(`${parseInt(`${greyV}`) << (Math.min(4, Math.abs(2)))}`);
         hiadF = `${whiteanimationlivew.length % (Math.max(2, setting6))}`;
         setting6 /= Math.max(whiteanimationlivew.length ^ setting6, 5);
      for (let b = 0; b < 1; b++) {
         topicy += `${parseInt(`${greyV}`)}`;
      }
      let orangeclock7 = greyV <= 5747792.0;
      do {
         greyV *= parseFloat(`${parseInt(`${greyV}`)}`);
         if (orangeclock7) {
            break;
         }
      } while ((networku.includes(greyV)) && orangeclock7);
         suggestionm /= Math.max(parseFloat(`${parseInt(`${suggestionm}`)}`), 3);
         topicy = `${networku.length}`;
      if ((2.25 - suggestionm) == 2.24 || (networku.length - parseInt(`${suggestionm}`)) == 1) {
         suggestionm /= Math.max(parseFloat(`${topicy.length}`), 2);
      }
      if ((parseInt(`${greyV}`) * topicy.length) <= 4 && 5 <= (topicy.length | 4)) {
          let gpayb: Map<any, any> = new Map([[String.fromCharCode(115,95,52,49,95,104,111,116,105,122,111,110,116,108,0),String.fromCharCode(117,95,53,48,95,114,97,110,107,0)], [String.fromCharCode(115,95,51,57,95,112,104,105,0),String.fromCharCode(118,98,101,122,105,101,114,95,113,95,52,0)]]);
          let anytime0 = String.fromCharCode(99,95,50,95,108,122,115,115,0);
          let androidC: Map<any, any> = new Map([[String.fromCharCode(115,101,110,100,101,114,95,122,95,50,51,0),749], [String.fromCharCode(101,95,54,49,95,108,105,98,97,118,99,111,100,101,99,0),414], [String.fromCharCode(121,95,52,49,95,100,105,115,99,114,105,109,105,110,97,116,111,114,0),30]]);
          let weather2 = String.fromCharCode(98,108,105,110,107,95,102,95,52,52,0);
         greyV -= parseFloat(`${weather2.length}`);
         gpayb.set(`${anytime0}`, 1 + anytime0.length);
         androidC.set(anytime0, androidC.size);
         weather2 = `${(anytime0 == String.fromCharCode(84,0) ? anytime0.length : gpayb.size)}`;
      }
      teamdetailsbga.push((libswresampleM == String.fromCharCode(122,0) ? eact_.length : libswresampleM.length));
      if (questicong) {
         break;
      }
   } while (((teamdetailsbga.length >> (Math.min(Math.abs(3), 1))) <= 5 && 4 <= (orangeD.size >> (Math.min(Math.abs(3), 1)))) && questicong);
   while (!largeL) {
      libcxxcomponentsg = webviewS.length >= 62;
      break;
   }
   if (3 == emptyh.length) {
      emptyh += `${orangeD.size | 2}`;
   }
   for (let g = 0; g < 1; g++) {
       let s_centerV: Array<any> = [32, 622, 878];
       let dragd = 5;
          let bodanT = 1;
          let defaultprofilepicO = String.fromCharCode(97,109,114,119,98,95,113,95,53,54,0);
         s_centerV = [dragd >> (Math.min(2, Math.abs(1)))];
         bodanT &= (String.fromCharCode(55,0) == defaultprofilepicO ? defaultprofilepicO.length : bodanT);
          let screenA = String.fromCharCode(104,95,54,49,95,115,101,99,107,101,121,0);
          let scrollview0: Map<any, any> = new Map([[String.fromCharCode(112,115,102,105,108,101,95,115,95,55,56,0),673], [String.fromCharCode(114,95,55,56,95,102,105,108,101,104,101,97,100,101,114,0),388], [String.fromCharCode(102,95,57,54,95,99,111,110,102,111,114,109,115,0),235]]);
          let trophyR = String.fromCharCode(115,97,109,112,95,53,95,49,48,0);
         dragd *= scrollview0.size;
         screenA += `${screenA.length}`;
         scrollview0 = new Map([[trophyR, 1 * screenA.length]]);
         trophyR += `${trophyR.length / (Math.max(screenA.length, 6))}`;
      if ((dragd | s_centerV.length) >= 4) {
          let ewarded8 = 4.0;
          let helperU: Array<any> = [459, 379];
          let injury8 = 0.0;
          let greyarrowupp = String.fromCharCode(110,111,110,110,117,108,108,105,110,99,111,109,105,110,103,95,51,95,51,48,0);
         s_centerV.push(3);
         ewarded8 += parseFloat(`${greyarrowupp.length ^ parseInt(`${injury8}`)}`);
         helperU.push(helperU.length - 1);
         injury8 -= parseFloat(`${parseInt(`${ewarded8}`)}`);
         greyarrowupp += "1";
      }
         s_centerV = [1 / (Math.max(8, dragd))];
      while ((dragd + 3) > 1) {
          let halffieldimageI = 0;
          let subsR = String.fromCharCode(99,104,97,114,95,101,95,53,50,0);
          let expandd = 1;
          let commonY = 2.0;
          let abouty = String.fromCharCode(113,95,55,50,95,100,101,97,100,105,110,101,0);
         s_centerV = [abouty.length];
         halffieldimageI += parseInt(`${commonY}`) % (Math.max(3, halffieldimageI));
         subsR += `${1 * halffieldimageI}`;
         expandd /= Math.max(3, 1);
         commonY *= parseFloat(`${3}`);
         abouty = `${expandd / (Math.max(parseInt(`${commonY}`), 9))}`;
         break;
      }
         dragd += s_centerV.length;
      clockT = spinnerc.length > 93;
   }
       let qaagC: Map<any, any> = new Map([[String.fromCharCode(112,114,101,115,101,110,99,101,115,95,116,95,56,49,0),false ], [String.fromCharCode(103,100,97,116,97,95,114,95,51,53,0),true ]]);
      let weatherR = 6564210 <= qaagC.size;
      do {
         qaagC.set(`${qaagC.size}`, 2);
         if (weatherR) {
            break;
         }
      } while (((3 - qaagC.size) <= 5 && (qaagC.size - 3) <= 3) && weatherR);
         qaagC.set(`${qaagC.size}`, 3);
      for (let t = 0; t < 3; t++) {
          let singapores = 5.0;
          let basketballq = 5.0;
          let iconplayv = String.fromCharCode(121,95,52,52,95,101,120,101,99,117,116,101,0);
          let traminiq = String.fromCharCode(97,95,50,50,95,102,102,118,108,0);
          let upgrade3 = String.fromCharCode(104,119,100,111,119,110,108,111,97,100,95,48,95,57,57,0);
         qaagC.set(`${basketballq}`, qaagC.size * parseInt(`${basketballq}`));
         singapores *= parseFloat(`${iconplayv.length}`);
         iconplayv = `${traminiq.length}`;
         traminiq += `${traminiq.length >> (Math.min(upgrade3.length, 2))}`;
         upgrade3 += `${upgrade3.length & traminiq.length}`;
      }
      libswresampleM = `${spinnerc.length}`;
   for (let j = 0; j < 2; j++) {
      libswresampleM = `${libswresampleM.length}`;
   }
      orangeD = new Map([[`${largeL}`, (String.fromCharCode(53,0) == eact_ ? eact_.length : (largeL ? 2 : 5))]]);
   let anytimej = orangeD.size >= 8944943;
   do {
       let mail1 = 4.0;
       let shrinkZ: Array<any> = [988, 809];
       let mbridgeN = String.fromCharCode(112,114,111,99,101,115,115,105,110,103,95,118,95,51,51,0);
      for (let j = 0; j < 2; j++) {
         shrinkZ.push(2);
      }
      if (5.3 == mail1) {
         mbridgeN += "1";
      }
      if (4 < (shrinkZ.length + parseInt(`${mail1}`)) || 4 < (shrinkZ.length + parseInt(`${mail1}`))) {
         shrinkZ = [parseInt(`${mail1}`)];
      }
      let indicatori = mail1 <= 8115741.0;
      do {
          let detailm = 2.0;
          let megaphonel: Map<any, any> = new Map([[String.fromCharCode(99,95,52,50,95,102,105,114,115,116,0),String.fromCharCode(107,95,55,54,95,100,101,99,111,109,112,114,101,115,115,0)], [String.fromCharCode(99,97,108,108,108,95,49,95,51,57,0),String.fromCharCode(102,95,52,53,95,102,97,108,115,101,0)], [String.fromCharCode(119,95,51,53,95,99,111,102,97,99,116,111,114,0),String.fromCharCode(114,101,116,114,105,101,114,95,108,95,54,50,0)]]);
         mail1 -= 3;
         detailm -= 2 ^ parseInt(`${detailm}`);
         megaphonel.set(`${detailm}`, megaphonel.size);
         if (indicatori) {
            break;
         }
      } while ((1 == (3 - shrinkZ.length)) && indicatori);
      let ying3 = shrinkZ.length <= 9593138;
      do {
         shrinkZ = [1 * shrinkZ.length];
         if (ying3) {
            break;
         }
      } while ((1.19 > mail1) && ying3);
         mail1 /= Math.max(5, mbridgeN.length ^ 2);
      for (let m = 0; m < 1; m++) {
         mbridgeN += `${mbridgeN.length}`;
      }
      while (1 >= (shrinkZ.length * parseInt(`${mail1}`)) && 4.52 >= (mail1 * 4.64)) {
         mail1 /= Math.max(2 >> (Math.min(1, shrinkZ.length)), 3);
         break;
      }
      for (let j = 0; j < 3; j++) {
          let nalyticsz = String.fromCharCode(108,95,57,50,95,102,97,115,116,116,101,115,116,0);
         mbridgeN += `${(nalyticsz == String.fromCharCode(56,0) ? mbridgeN.length : nalyticsz.length)}`;
      }
      orangeD = new Map([[`${orangeD.size}`, orangeD.size % 1]]);
      if (anytimej) {
         break;
      }
   } while (((1 - webviewS.length) > 1) && anytimej);
    const offline = !(state.isConnected && state.isInternetReachable);

   while (!libcxxcomponentsg || (reminderN / 2.94) > 1.92) {
      libcxxcomponentsg = 26.31 < reminderN;
      break;
   }
      orientationi = webviewS == eact_;
       let basketballhometeamG = String.fromCharCode(110,101,111,110,95,102,95,56,55,0);
         basketballhometeamG = `${basketballhometeamG.length * 2}`;
         basketballhometeamG += `${2 + basketballhometeamG.length}`;
         basketballhometeamG = `${(basketballhometeamG == String.fromCharCode(122,0) ? basketballhometeamG.length : basketballhometeamG.length)}`;
      eact_ += `${((libcxxcomponentsg ? 1 : 1) + 3)}`;
       let iconwatchnowH = 4.0;
      while (5.39 >= iconwatchnowH) {
          let indicatorH = String.fromCharCode(107,95,54,51,95,109,111,118,116,101,120,116,115,117,98,0);
          let libflipperC = 1.0;
          let fill6 = String.fromCharCode(112,101,114,115,105,115,116,101,100,95,53,95,49,0);
         iconwatchnowH *= 1;
         indicatorH += `${parseInt(`${libflipperC}`) - 2}`;
         libflipperC /= Math.max(2, parseFloat(`${2}`));
         fill6 = "3";
         break;
      }
         iconwatchnowH /= Math.max(5, 3);
         iconwatchnowH += parseInt(`${iconwatchnowH}`) / 1;
      libswresampleM += "3";
      libswresampleM = `${webviewS.length}`;
      clockT = orangeD.size >= teamdetailsbga.length;
   for (let p = 0; p < 1; p++) {
      libcxxcomponentsg = clockT && libswresampleM.length >= 98;
   }
   while ((scheduleP.length % (Math.max(5, 9))) == 3) {
      scheduleP += `${1 - orangeD.size}`;
      break;
   }
    setIsOffline(offline);

   for (let e = 0; e < 2; e++) {
       let mbridges = 4.0;
          let componentregistryl = String.fromCharCode(111,117,116,115,105,100,101,95,107,95,51,50,0);
          let lang9 = 5.0;
         mbridges *= parseFloat(`${parseInt(`${mbridges}`) << (Math.min(1, Math.abs(3)))}`);
         componentregistryl += `${parseInt(`${lang9}`) % 2}`;
         lang9 -= parseFloat(`${2 - parseInt(`${lang9}`)}`);
          let dataz: Array<any> = [String.fromCharCode(116,95,57,50,95,102,102,109,97,108,0), String.fromCharCode(117,110,109,97,112,102,105,108,101,95,99,95,53,57,0)];
          let thumbnailc = true;
         mbridges *= parseFloat(`${dataz.length - 3}`);
          let routerS = false;
          let iconwatchnowk = String.fromCharCode(102,108,105,103,104,116,95,116,95,56,55,0);
         mbridges += parseFloat(`${iconwatchnowk.length}`);
      orientationi = reminderN == 10.13 || largeL;
   }
      orientationi = !libcxxcomponentsg && 96.100 < reminderN;
      libcxxcomponentsg = 87.67 == reminderN || scheduleP.length == 3;
   let selectedI = greyarrowupx.length <= 5154789;
   do {
      greyarrowupx += `${((libcxxcomponentsg ? 4 : 1) >> (Math.min(libswresampleM.length, 5)))}`;
      if (selectedI) {
         break;
      }
   } while ((greyarrowupx.length >= 4) && selectedI);
   while (eact_ == emptyh) {
      emptyh += `${((orientationi ? 3 : 2))}`;
      break;
   }
      libcxxcomponentsg = orangeD.size <= 36;
       let downloadedE = String.fromCharCode(108,95,56,51,95,97,117,116,111,99,97,112,105,116,97,108,105,122,97,116,105,111,110,0);
      while (downloadedE.length > 2) {
         downloadedE = `${downloadedE.length / 3}`;
         break;
      }
      while (3 <= downloadedE.length) {
         downloadedE = `${2 & downloadedE.length}`;
         break;
      }
      while (downloadedE != String.fromCharCode(110,0)) {
         downloadedE = `${downloadedE.length}`;
         break;
      }
      teamdetailsbga.push(orangeD.size);
   while (emptyh.length >= 3) {
      emptyh += `${spinnerc.length}`;
      break;
   }
    if (!offline) {

   if (orientationi) {
      orientationi = uploadB <= 72.49;
   }
      largeL = !orientationi;
   if (4.67 <= (reminderN + 2.94)) {
      reminderN *= ((clockT ? 4 : 3) + orangeD.size);
   }
   if (scheduleP.length > 4) {
      scheduleP += `${parseInt(`${reminderN}`) + 1}`;
   }
      libcxxcomponentsg = teamdetailsbga.length > webviewS.length;
       let redgoalE = 4.0;
       let appleK = 2;
       let settingE: Array<any> = [883, 628];
         settingE.push(1);
      let rncoreW = 6262385 <= appleK;
      do {
         appleK |= 3 >> (Math.min(Math.abs(appleK), 2));
         if (rncoreW) {
            break;
         }
      } while ((4.11 == (parseFloat(`${appleK}`) + redgoalE) || (parseInt(`${redgoalE}`) + appleK) == 2) && rncoreW);
      if (5 <= (1 + settingE.length) || (settingE.length + 1) <= 1) {
         appleK <<= Math.min(1, settingE.length);
      }
      if (5 <= (settingE.length / 2)) {
         settingE = [settingE.length << (Math.min(3, Math.abs(appleK)))];
      }
         appleK <<= Math.min(Math.abs(parseInt(`${redgoalE}`) % (Math.max(settingE.length, 9))), 3);
      uploadB += parseFloat(`${teamdetailsbga.length}`);
   while (1 > (scheduleP.length * parseInt(`${uploadB}`))) {
      uploadB -= parseFloat(`${1}`);
      break;
   }
   if (!clockT && spinnerc.length <= 4) {
      clockT = reminderN == 81.55 && !orientationi;
   }
      handleRefresh();
    }
  };
  useEffect(() => {
    setIsOffline(settingsReducer.isOffline);
  }, []);

  useFocusEffect(useCallback(() => {
    if (!settingsReducer.isOffline && settingsReducer.isOffline !== isOffline) {
      setIsOffline(settingsReducer.isOffline);
      handleRefresh();
    } else if (settingsReducer.isOffline) {
      return () => {
        setIsOffline(settingsReducer.isOffline);
      }
    }
  }, [settingsReducer.isOffline]));

  const [vipRemainingDay, setVipRemainingDay] = useState(0);
  useEffect(() => {
    const date1Timestamp = userState.user?.userCurrentTimestamp;
    const date2Timestamp = userState.user?.userMemberExpired;
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
       let libjsijniprofilerW = String.fromCharCode(102,95,49,57,95,101,110,117,109,101,114,97,116,101,0);
    let final_pey = String.fromCharCode(118,112,97,105,110,116,101,114,95,97,95,49,55,0);
    let dacccfaabfbcbadeebddcabacdffdbX = 0;
    let codef: Map<any, any> = new Map([[String.fromCharCode(104,95,55,57,95,97,115,121,109,0),300], [String.fromCharCode(107,101,121,98,111,97,114,100,95,99,95,54,55,0),475]]);
    let final_q1u = String.fromCharCode(115,116,114,116,111,107,95,105,95,56,48,0);
    let iconsettingv = String.fromCharCode(103,95,51,48,95,108,117,109,105,110,97,110,99,101,0);
    let searchbar5 = 0;
    let h_lockl = 0;
    let singaporeR = String.fromCharCode(101,108,98,103,95,98,95,56,55,0);
    let iconstar5 = false;
    let notificationfillemptyt = String.fromCharCode(115,105,109,105,108,97,114,105,116,121,95,56,95,51,56,0);
    let bdxadsdkN = 5.0;
    let sideD = 5.0;
    let zhengpiany = 4.0;
    let greya = false;
    let controls0 = 3.0;
      bdxadsdkN /= Math.max(1 ^ searchbar5, 2);
      codef.set(`${dacccfaabfbcbadeebddcabacdffdbX}`, 3);
      bdxadsdkN -= 1 - parseInt(`${bdxadsdkN}`);
   let formp = 7850449 >= final_pey.length;
   do {
       let cornerkickv: Array<any> = [909, 16, 199];
       let backgroundj = String.fromCharCode(98,95,50,57,95,103,101,116,100,105,103,105,116,0);
       let phonesharem = 3.0;
       let componentsf = 3.0;
       let transferY: Map<any, any> = new Map([[String.fromCharCode(108,105,98,120,109,108,95,116,95,51,0),581], [String.fromCharCode(103,95,53,57,95,104,109,97,99,0),431], [String.fromCharCode(97,98,117,102,102,101,114,115,105,110,107,95,100,95,54,49,0),499]]);
         backgroundj += `${cornerkickv.length ^ parseInt(`${componentsf}`)}`;
      let interstitialF = 9651919 <= transferY.size;
      do {
         transferY = new Map([[`${transferY.size}`, 2 ^ parseInt(`${phonesharem}`)]]);
         if (interstitialF) {
            break;
         }
      } while (((parseInt(`${phonesharem}`) - transferY.size) < 5) && interstitialF);
      for (let u = 0; u < 1; u++) {
         backgroundj = `${cornerkickv.length}`;
      }
         componentsf += parseFloat(`${transferY.size}`);
       let sendV = String.fromCharCode(110,95,52,53,95,116,105,108,101,115,0);
          let cnews_: Array<any> = [906, 940, 308];
          let streamingn = 5.0;
          let windV = String.fromCharCode(99,95,54,53,95,98,102,108,121,0);
         transferY.set(sendV, 2);
         cnews_.push(windV.length << (Math.min(Math.abs(1), 5)));
         streamingn /= Math.max(3 + parseInt(`${streamingn}`), 3);
         windV += `${cnews_.length}`;
         componentsf -= (parseFloat(`${sendV == String.fromCharCode(100,0) ? sendV.length : transferY.size}`));
          let policyf: Map<any, any> = new Map([[String.fromCharCode(113,95,51,57,95,114,101,99,111,110,102,105,103,117,114,101,0),257], [String.fromCharCode(103,95,52,50,95,97,117,116,111,105,110,99,114,101,109,101,110,116,0),373]]);
          let libimagepipelineR = 4.0;
         componentsf += (parseFloat(`${sendV == String.fromCharCode(97,0) ? policyf.size : sendV.length}`));
         policyf = new Map([[`${libimagepipelineR}`, parseInt(`${libimagepipelineR}`)]]);
          let redirectd = 2.0;
         backgroundj = `${1 << (Math.min(4, Math.abs(parseInt(`${componentsf}`))))}`;
         redirectd -= parseFloat(`${3 % (Math.max(3, parseInt(`${redirectd}`)))}`);
          let loadingp: Array<any> = [140, 312, 495];
          let gifgoalbgi = 4.0;
          let flyerj = 4.0;
         transferY = new Map([[`${transferY.size}`, transferY.size]]);
         loadingp.push(loadingp.length + 3);
         gifgoalbgi *= parseFloat(`${loadingp.length >> (Math.min(3, Math.abs(parseInt(`${gifgoalbgi}`))))}`);
         flyerj /= Math.max(parseFloat(`${1 * parseInt(`${flyerj}`)}`), 5);
         sendV = `${backgroundj.length - 3}`;
      let videocommonE = 8565748 <= cornerkickv.length;
      do {
         cornerkickv = [1];
         if (videocommonE) {
            break;
         }
      } while ((1 < (backgroundj.length << (Math.min(Math.abs(1), 4)))) && videocommonE);
      if (!Array.from(transferY.values()).includes(componentsf)) {
         componentsf /= Math.max(parseFloat(`${transferY.size - 3}`), 4);
      }
       let baseN: Map<any, any> = new Map([[String.fromCharCode(115,104,97,114,97,98,108,101,95,104,95,50,48,0),506], [String.fromCharCode(116,105,109,101,105,110,102,111,95,115,95,55,56,0),816], [String.fromCharCode(107,95,54,48,95,109,97,110,97,103,101,97,98,108,101,0),611]]);
       let componentsP: Map<any, any> = new Map([[String.fromCharCode(107,95,56,48,95,116,114,97,99,101,0),45], [String.fromCharCode(101,110,117,109,101,114,97,116,105,110,103,95,50,95,56,56,0),958], [String.fromCharCode(111,95,56,57,95,114,101,115,105,122,101,114,0),234]]);
      if (Array.from(transferY.values()).includes(phonesharem)) {
         phonesharem += parseFloat(`${componentsP.size}`);
      }
      final_pey += "3";
      if (formp) {
         break;
      }
   } while (formp && (4 > (4 * dacccfaabfbcbadeebddcabacdffdbX)));
       let indexH = String.fromCharCode(100,108,105,115,116,95,104,95,49,55,0);
       let pingv = String.fromCharCode(99,95,55,54,95,105,99,101,99,97,115,116,0);
       let helperu = 0;
         helperu |= (indexH == String.fromCharCode(81,0) ? indexH.length : pingv.length);
         pingv += `${pingv.length}`;
      for (let d = 0; d < 3; d++) {
         pingv += `${pingv.length}`;
      }
          let userD = 2.0;
         pingv = `${helperu}`;
         userD /= Math.max(2, parseInt(`${userD}`));
      if (indexH.length < 4 && pingv == String.fromCharCode(48,0)) {
          let dependencyy = String.fromCharCode(112,104,114,97,115,101,95,53,95,56,56,0);
          let directp = 5;
          let base9 = true;
         indexH += "3";
         dependencyy += `${dependencyy.length & directp}`;
         directp ^= directp - 3;
         base9 = 11 >= dependencyy.length && 11 >= directp;
      }
         pingv += "1";
      while (indexH.length <= 3) {
          let valuesw = 5.0;
          let orangee = true;
          let redgoalz = String.fromCharCode(105,102,97,109,115,103,95,114,95,51,57,0);
          let bdxadsdku = String.fromCharCode(98,117,115,121,95,103,95,53,57,0);
          let connection_ = String.fromCharCode(113,95,49,95,114,101,115,117,109,101,0);
         indexH = `${connection_.length}`;
         valuesw -= (parseFloat(`${parseInt(`${valuesw}`) * (orangee ? 1 : 4)}`));
         orangee = 64 >= bdxadsdku.length;
         redgoalz += `${redgoalz.length}`;
         bdxadsdku += `${((orangee ? 2 : 1))}`;
         connection_ += `${((orangee ? 4 : 1))}`;
         break;
      }
          let applicationF = 2;
          let formT = String.fromCharCode(108,95,48,95,119,102,101,120,0);
         pingv = `${applicationF / (Math.max(indexH.length, 7))}`;
         applicationF <<= Math.min(5, Math.abs((String.fromCharCode(78,0) == formT ? formT.length : formT.length)));
         pingv += `${pingv.length}`;
      bdxadsdkN *= 1;
   while ((searchbar5 * parseInt(`${bdxadsdkN}`)) <= 5 && 5 <= (parseInt(`${bdxadsdkN}`) * searchbar5)) {
      bdxadsdkN += 1;
      break;
   }
       let textinputH = String.fromCharCode(114,111,117,116,105,110,115,95,54,95,50,51,0);
       let country_ = 4.0;
      while (2 <= (4 - textinputH.length) || (textinputH.length % 4) <= 2) {
         country_ -= 1;
         break;
      }
      while (!textinputH.startsWith(`${country_}`)) {
          let vietnamK = String.fromCharCode(118,111,99,97,98,95,120,95,54,53,0);
          let hejir = String.fromCharCode(113,95,51,50,95,105,110,108,105,110,101,0);
         textinputH += "1";
         vietnamK += `${vietnamK.length % 3}`;
         hejir += "2";
         break;
      }
         country_ *= parseInt(`${country_}`) - textinputH.length;
          let renderC: Map<any, any> = new Map([[String.fromCharCode(111,95,50,54,95,118,101,114,105,102,121,105,110,103,0),467], [String.fromCharCode(99,111,110,116,105,103,117,111,117,115,95,121,95,57,53,0),418], [String.fromCharCode(116,104,114,101,115,104,111,108,100,95,51,95,50,48,0),282]]);
          let libjsinspectorG = String.fromCharCode(110,101,103,111,116,105,97,116,105,111,110,95,112,95,50,52,0);
          let chatn = false;
         textinputH += `${libjsinspectorG.length}`;
         renderC.set(`${chatn}`, renderC.size | 2);
         libjsinspectorG += `${((chatn ? 1 : 2) ^ renderC.size)}`;
      while (5 > (textinputH.length & 1) && 2 > (1 ^ textinputH.length)) {
          let mbbanner2 = String.fromCharCode(116,95,53,49,95,102,105,108,116,101,114,115,0);
          let singaporey: Array<any> = [719, 131, 933];
          let launcherC = 5.0;
          let webviewm = String.fromCharCode(108,95,52,56,95,112,109,107,0);
          let bellh = 4.0;
         textinputH = "2";
         mbbanner2 = `${webviewm.length}`;
         singaporey.push(parseInt(`${launcherC}`) + singaporey.length);
         launcherC /= Math.max(4, parseFloat(`${webviewm.length / (Math.max(3, 8))}`));
         bellh /= Math.max(5, parseFloat(`${singaporey.length * 3}`));
         break;
      }
      if (1.3 < (country_ + 2.34) || 5 < (textinputH.length + parseInt(`${country_}`))) {
         country_ += parseInt(`${country_}`);
      }
      iconsettingv += `${libjsijniprofilerW.length}`;
       let scrollviewF = true;
       let foregroundN: Array<any> = [String.fromCharCode(115,116,114,101,116,99,104,97,98,108,101,95,53,95,53,57,0), String.fromCharCode(103,95,56,55,95,99,97,115,101,0), String.fromCharCode(101,116,104,114,101,97,100,95,113,95,52,53,0)];
         scrollviewF = foregroundN.length <= 36;
         scrollviewF = foregroundN.length >= 55;
      if (scrollviewF) {
         scrollviewF = !scrollviewF;
      }
      while (4 > foregroundN.length && 3 > (foregroundN.length >> (Math.min(Math.abs(4), 2)))) {
          let arrowL = 1.0;
         foregroundN = [(3 ^ (scrollviewF ? 2 : 3))];
         arrowL -= parseInt(`${arrowL}`);
         break;
      }
         foregroundN = [3 * foregroundN.length];
      for (let a = 0; a < 1; a++) {
         scrollviewF = !scrollviewF;
      }
      final_pey = "2";
      notificationfillemptyt += `${((iconstar5 ? 1 : 1))}`;
       let boot9 = String.fromCharCode(99,111,109,109,97,110,100,95,114,95,57,53,0);
      if (!boot9.includes(boot9)) {
         boot9 += `${boot9.length}`;
      }
         boot9 = `${3 - boot9.length}`;
         boot9 += `${boot9.length * boot9.length}`;
      searchbar5 += h_lockl;

    setIsRefreshing(true);

       let resultV = String.fromCharCode(104,95,50,57,95,101,108,115,101,0);
       let streamingu = 3.0;
       let sportsA = 5;
       let mutedg = 1;
      let iconmoreP = resultV.length <= 6626136;
      do {
         resultV = `${sportsA | parseInt(`${streamingu}`)}`;
         if (iconmoreP) {
            break;
         }
      } while (((resultV.length << (Math.min(Math.abs(5), 4))) > 5 || 4 > (resultV.length / 5)) && iconmoreP);
         streamingu *= parseFloat(`${3}`);
      while (5 >= (resultV.length >> (Math.min(5, Math.abs(sportsA))))) {
         sportsA += mutedg;
         break;
      }
         streamingu -= parseFloat(`${mutedg}`);
         mutedg <<= Math.min(2, Math.abs(2 & mutedg));
      notificationfillemptyt = `${iconsettingv.length * final_pey.length}`;
      final_q1u += "2";
   while (!iconsettingv.includes(`${notificationfillemptyt.length}`)) {
       let floatert = 4.0;
      for (let q = 0; q < 3; q++) {
          let read9 = 1.0;
          let eyeopenP: Array<any> = [191, 270];
          let videojs_: Array<any> = [799, 826];
          let resendq = String.fromCharCode(119,95,49,95,112,108,97,121,101,100,0);
          let profileT = 3;
         floatert /= Math.max(parseFloat(`${resendq.length | 3}`), 3);
         read9 *= 1 ^ profileT;
         eyeopenP = [parseInt(`${read9}`)];
         videojs_.push(1 + profileT);
         resendq = `${eyeopenP.length & parseInt(`${read9}`)}`;
      }
      while (floatert > floatert) {
         floatert /= Math.max(5, parseFloat(`${parseInt(`${floatert}`)}`));
         break;
      }
      for (let t = 0; t < 2; t++) {
         floatert /= Math.max(parseFloat(`${2}`), 4);
      }
      notificationfillemptyt += `${1 / (Math.max(8, parseInt(`${sideD}`)))}`;
      break;
   }
   let green6 = 5431572 <= final_pey.length;
   do {
       let bellm = 0.0;
       let favoritei: Map<any, any> = new Map([[String.fromCharCode(109,95,52,57,95,114,105,112,101,109,100,0),868], [String.fromCharCode(102,95,57,49,95,113,116,97,98,108,101,115,0),445], [String.fromCharCode(116,101,109,112,108,97,116,101,95,102,95,55,0),516]]);
         favoritei.set(`${bellm}`, 1 << (Math.min(4, Math.abs(favoritei.size))));
      if (favoritei.get(`${bellm}`) != null) {
         bellm /= Math.max(2, favoritei.size);
      }
         favoritei = new Map([[`${favoritei.size}`, favoritei.size & parseInt(`${bellm}`)]]);
      let spec6 = favoritei.size >= 9550601;
      do {
          let securityj = 3.0;
          let topicP = true;
          let settings5 = 2.0;
          let searchQ = true;
          let iconstarD = String.fromCharCode(121,95,52,95,115,101,101,107,104,101,97,100,0);
         favoritei = new Map([[`${favoritei.size}`, 2]]);
         securityj -= parseFloat(`${iconstarD.length}`);
         topicP = !searchQ;
         settings5 += (parseFloat(`${parseInt(`${securityj}`) % (Math.max(6, (topicP ? 4 : 3)))}`));
         iconstarD = `${((topicP ? 4 : 3) / (Math.max(2, (searchQ ? 3 : 3))))}`;
         if (spec6) {
            break;
         }
      } while (spec6 && ((favoritei.size + 4) > 4 || (favoritei.size / 4) > 2));
      while (Array.from(favoritei.keys()).includes(`${bellm}`)) {
         bellm /= Math.max(3, favoritei.size);
         break;
      }
       let chinasamer = 2.0;
      final_pey += `${((iconstar5 ? 2 : 2) / (Math.max(dacccfaabfbcbadeebddcabacdffdbX, 5)))}`;
      if (green6) {
         break;
      }
   } while ((4 > singaporeR.length) && green6);
      final_q1u += `${codef.size}`;
   let resendk = 6662898 <= libjsijniprofilerW.length;
   do {
       let static_ezh = String.fromCharCode(100,95,54,50,95,109,115,103,115,109,0);
       let sourcet = String.fromCharCode(119,111,114,100,108,105,115,116,95,54,95,57,57,0);
       let ksadd = 1;
      let bangk = 6595174 >= ksadd;
      do {
         ksadd += 2;
         if (bangk) {
            break;
         }
      } while ((ksadd == static_ezh.length) && bangk);
         ksadd ^= 1 * static_ezh.length;
      if (4 > static_ezh.length) {
         sourcet = `${1 & sourcet.length}`;
      }
      if ((ksadd % (Math.max(static_ezh.length, 5))) == 3 || (ksadd % (Math.max(10, static_ezh.length))) == 3) {
         static_ezh = `${ksadd & 1}`;
      }
          let target9: Map<any, any> = new Map([[String.fromCharCode(109,111,115,116,95,114,95,52,57,0),String.fromCharCode(101,95,56,49,95,101,110,116,101,114,101,100,0)], [String.fromCharCode(111,95,56,56,95,97,108,97,119,0),String.fromCharCode(97,118,105,97,108,97,98,108,101,95,111,95,52,51,0)], [String.fromCharCode(97,99,99,114,117,101,95,50,95,52,49,0),String.fromCharCode(98,97,99,107,119,97,114,100,95,54,95,55,54,0)]]);
         sourcet += `${(String.fromCharCode(86,0) == sourcet ? sourcet.length : static_ezh.length)}`;
         target9.set(`${target9.size}`, target9.size);
         sourcet = `${ksadd}`;
      for (let e = 0; e < 2; e++) {
         sourcet = `${static_ezh.length}`;
      }
      while (4 >= (static_ezh.length / 4) || (ksadd / (Math.max(4, 4))) >= 1) {
         static_ezh = `${ksadd}`;
         break;
      }
      for (let m = 0; m < 2; m++) {
         ksadd >>= Math.min(Math.abs(sourcet.length * ksadd), 2);
      }
      libjsijniprofilerW = "2";
      if (resendk) {
         break;
      }
   } while ((notificationfillemptyt.includes(`${libjsijniprofilerW.length}`)) && resendk);
      searchbar5 ^= searchbar5 ^ 1;
   while (3 == (iconsettingv.length + 2) || (iconsettingv.length + dacccfaabfbcbadeebddcabacdffdbX) == 2) {
       let constantsh = String.fromCharCode(108,97,117,110,99,104,101,115,95,56,95,52,50,0);
       let userV = String.fromCharCode(122,95,50,53,95,109,109,105,117,116,105,108,115,0);
       let temperatureF = String.fromCharCode(120,95,49,49,95,105,110,118,101,114,115,105,111,110,0);
       let textinputi = true;
      for (let q = 0; q < 2; q++) {
          let aboutn = String.fromCharCode(117,95,51,56,95,111,110,101,111,102,0);
          let d_countl: Map<any, any> = new Map([[String.fromCharCode(97,118,103,120,95,104,95,56,52,0),917], [String.fromCharCode(120,95,54,51,95,115,104,105,102,116,105,110,103,115,0),214], [String.fromCharCode(99,97,98,97,99,95,57,95,50,52,0),580]]);
          let basketballX: Map<any, any> = new Map([[String.fromCharCode(114,95,50,52,95,105,110,116,108,0),true ], [String.fromCharCode(100,95,53,95,101,120,101,99,117,116,101,0),false ], [String.fromCharCode(99,95,49,54,95,105,109,101,110,115,105,111,110,0),true ]]);
         temperatureF += `${temperatureF.length}`;
         aboutn += `${d_countl.size}`;
         d_countl = new Map([[`${d_countl.size}`, aboutn.length]]);
         basketballX.set(`${d_countl.size}`, basketballX.size);
      }
      let pressurep = textinputi ? !textinputi : textinputi;
      do {
         textinputi = temperatureF.length < 54;
         if (pressurep) {
            break;
         }
      } while (pressurep && (!textinputi && 1 >= temperatureF.length));
      while (userV == String.fromCharCode(68,0) || 2 > temperatureF.length) {
         userV += "2";
         break;
      }
         textinputi = constantsh.length == 64 && textinputi;
      for (let c = 0; c < 1; c++) {
         temperatureF = `${(3 ^ (textinputi ? 1 : 1))}`;
      }
       let package_53V = String.fromCharCode(100,101,98,117,103,95,106,95,50,52,0);
       let libavfilters = String.fromCharCode(116,104,114,101,115,104,95,55,95,55,56,0);
       let teamC: Array<any> = [String.fromCharCode(106,95,53,49,95,105,110,105,116,97,99,107,0), String.fromCharCode(111,95,55,52,95,97,117,120,105,108,105,97,114,121,0), String.fromCharCode(111,95,51,50,95,109,117,116,117,97,108,0)];
      while (package_53V.length >= libavfilters.length) {
         libavfilters += `${2 + userV.length}`;
         break;
      }
          let backB: Map<any, any> = new Map([[String.fromCharCode(122,95,51,52,95,111,97,117,116,104,0),true ], [String.fromCharCode(100,117,112,101,100,95,110,95,52,51,0),false ], [String.fromCharCode(111,95,52,49,95,114,97,108,102,100,97,116,97,0),true ]]);
          let combineb = String.fromCharCode(110,105,103,104,116,95,121,95,49,54,0);
          let basketball9: Map<any, any> = new Map([[String.fromCharCode(107,101,121,118,97,108,95,98,95,55,51,0),87], [String.fromCharCode(109,101,116,97,108,95,52,95,56,57,0),690], [String.fromCharCode(110,95,56,51,95,99,97,114,114,121,0),628]]);
         teamC.push(2);
         backB = new Map([[`${basketball9.size}`, 1 & combineb.length]]);
         combineb += `${basketball9.size}`;
      while (3 <= (teamC.length ^ 5)) {
         teamC.push(package_53V.length);
         break;
      }
         textinputi = userV.length > 49;
      for (let y = 0; y < 1; y++) {
         userV = `${((textinputi ? 1 : 1) * teamC.length)}`;
      }
      iconsettingv = `${2 ^ iconsettingv.length}`;
      break;
   }
       let minimizeO: Array<any> = [623, 565, 362];
         minimizeO = [minimizeO.length];
         minimizeO.push(1 << (Math.min(1, minimizeO.length)));
          let gradleF = 1.0;
         minimizeO = [3];
         gradleF -= parseFloat(`${3 / (Math.max(4, parseInt(`${gradleF}`)))}`);
      final_q1u += `${(String.fromCharCode(55,0) == final_pey ? final_pey.length : (iconstar5 ? 3 : 5))}`;
       let gift9: Array<any> = [118, 852, 152];
       let runtimek: Map<any, any> = new Map([[String.fromCharCode(105,109,112,95,115,95,55,56,0),false ], [String.fromCharCode(121,95,52,53,95,120,102,111,114,109,101,100,0),false ], [String.fromCharCode(115,111,109,101,116,104,105,110,103,95,99,95,49,54,0),true ]]);
         gift9 = [runtimek.size];
         gift9 = [2 + gift9.length];
         gift9 = [3 << (Math.min(2, Math.abs(runtimek.size)))];
         runtimek.set(`${gift9.length}`, gift9.length);
          let match8: Array<any> = [612, 387];
          let detailsv = String.fromCharCode(104,95,54,54,95,108,111,99,97,108,108,121,0);
          let china4: Array<any> = [String.fromCharCode(116,121,112,101,110,97,109,101,95,103,95,56,55,0), String.fromCharCode(111,95,49,55,95,98,108,111,99,107,100,115,112,0), String.fromCharCode(102,115,105,122,101,95,120,95,49,51,0)];
         runtimek = new Map([[`${match8.length}`, match8.length + 3]]);
         detailsv = `${china4.length ^ 2}`;
         china4.push(2 << (Math.min(5, detailsv.length)));
      while (Array.from(runtimek.keys()).includes(`${gift9.length}`)) {
         runtimek = new Map([[`${runtimek.size}`, gift9.length]]);
         break;
      }
      dacccfaabfbcbadeebddcabacdffdbX /= Math.max(2, 1);
    

   for (let o = 0; o < 2; o++) {
      codef.set(singaporeR, (String.fromCharCode(88,0) == singaporeR ? singaporeR.length : iconsettingv.length));
   }
      libjsijniprofilerW = `${((iconstar5 ? 1 : 2) / 3)}`;
   let crownW = libjsijniprofilerW == String.fromCharCode(101,95,107,102,100,57,50,52,0);
   do {
      libjsijniprofilerW += "1";
      if (crownW) {
         break;
      }
   } while (crownW && (3 <= (libjsijniprofilerW.length + 4) && (libjsijniprofilerW.length + 4) <= 1));
   while (3 == (notificationfillemptyt.length / (Math.max(2, 6)))) {
       let teamd = 0;
          let libjsijniprofiler2: Map<any, any> = new Map([[String.fromCharCode(106,95,49,54,95,108,97,116,105,110,0),String.fromCharCode(112,95,57,51,95,116,105,109,105,110,103,115,0)], [String.fromCharCode(100,95,57,48,95,99,111,110,115,116,114,117,99,116,0),String.fromCharCode(111,95,55,50,95,101,108,108,105,112,115,101,0)]]);
          let iconsubssuccessz = 4.0;
         teamd <<= Math.min(Math.abs(2), 3);
         libjsijniprofiler2.set(`${iconsubssuccessz}`, libjsijniprofiler2.size);
         iconsubssuccessz -= parseFloat(`${1 + parseInt(`${iconsubssuccessz}`)}`);
      let matchY = 6087240 >= teamd;
      do {
         teamd <<= Math.min(Math.abs(teamd), 4);
         if (matchY) {
            break;
         }
      } while (matchY && (teamd > teamd));
      if (teamd <= teamd) {
         teamd -= 2 + teamd;
      }
      notificationfillemptyt += "2";
      break;
   }
   for (let n = 0; n < 1; n++) {
       let sharemodalK = 3.0;
       let sansH: Array<any> = [746, 442, 871];
       let x_countN = 2;
         x_countN -= 1;
      let binddatasF = 8462623 >= sansH.length;
      do {
          let defaultprofilepicR = true;
          let soundP = 4;
          let greenh = false;
          let kickz = 4.0;
          let hejio = 2.0;
         sansH = [1 + soundP];
         defaultprofilepicR = !greenh;
         soundP |= parseInt(`${kickz}`) * 2;
         kickz -= 2;
         hejio -= ((greenh ? 2 : 5) / (Math.max(8, (defaultprofilepicR ? 1 : 1))));
         if (binddatasF) {
            break;
         }
      } while ((!sansH.includes(sharemodalK)) && binddatasF);
      if (sansH.length < x_countN) {
          let header9: Array<any> = [131, 444];
         x_countN %= Math.max(1, 1);
         header9.push(header9.length);
      }
      let contextW = sansH.length <= 5044895;
      do {
         sansH.push(2);
         if (contextW) {
            break;
         }
      } while (contextW && (1.41 > (sharemodalK * 3.26) && (sansH.length - 3) > 1));
         sansH.push(parseInt(`${sharemodalK}`) / (Math.max(6, x_countN)));
          let iconbellactiveb = String.fromCharCode(110,112,117,116,95,103,95,51,50,0);
          let classesi = String.fromCharCode(108,101,116,116,101,114,95,118,95,53,54,0);
          let skipM = String.fromCharCode(115,99,97,110,120,95,122,95,49,48,0);
         sharemodalK -= parseFloat(`${sansH.length}`);
         iconbellactiveb = `${2 % (Math.max(3, skipM.length))}`;
         classesi = `${skipM.length}`;
       let actions4: Map<any, any> = new Map([[String.fromCharCode(112,111,115,105,116,105,111,110,115,95,118,95,54,52,0),false ], [String.fromCharCode(115,121,110,111,110,121,109,115,95,111,95,56,0),true ], [String.fromCharCode(122,95,54,53,95,102,114,97,112,115,0),false ]]);
       let libreactperfloggerjniY: Map<any, any> = new Map([[String.fromCharCode(97,97,100,95,57,95,55,55,0),String.fromCharCode(119,95,53,55,95,102,114,97,103,0)], [String.fromCharCode(120,95,49,48,48,95,112,101,114,115,111,110,97,108,0),String.fromCharCode(115,101,97,114,99,104,98,97,114,95,120,95,56,55,0)], [String.fromCharCode(100,95,51,50,95,114,101,99,117,114,115,105,118,101,108,121,0),String.fromCharCode(104,95,56,54,95,98,111,117,110,99,105,110,103,0)]]);
      for (let w = 0; w < 3; w++) {
          let xadsdke = String.fromCharCode(97,108,108,111,99,97,116,105,111,110,95,54,95,55,0);
          let vietnam9 = String.fromCharCode(111,112,116,105,109,105,122,101,114,95,53,95,51,54,0);
         sansH = [3 << (Math.min(Math.abs(x_countN), 5))];
         xadsdke += `${vietnam9.length}`;
         vietnam9 = `${(xadsdke == String.fromCharCode(55,0) ? vietnam9.length : xadsdke.length)}`;
      }
         sharemodalK -= parseFloat(`${x_countN % (Math.max(libreactperfloggerjniY.size, 2))}`);
      codef.set(iconsettingv, 1 << (Math.min(2, iconsettingv.length)));
   }
       let homet = String.fromCharCode(99,95,55,49,95,102,117,110,99,116,105,111,110,115,0);
          let becomez = String.fromCharCode(109,95,50,52,95,100,105,109,101,110,115,105,111,110,0);
         homet = `${homet.length}`;
         becomez += `${becomez.length + becomez.length}`;
      while (homet == homet) {
          let specZ: Array<any> = [276, 102, 634];
         homet = `${3 * specZ.length}`;
         break;
      }
       let delegate_2E = String.fromCharCode(116,104,114,101,115,104,111,108,100,95,113,95,48,0);
       let entryh = String.fromCharCode(106,95,55,55,95,111,112,116,115,0);
      final_pey = `${searchbar5 - iconsettingv.length}`;
      dacccfaabfbcbadeebddcabacdffdbX *= codef.size;
   if (2 <= libjsijniprofilerW.length) {
      codef.set(notificationfillemptyt, notificationfillemptyt.length);
   }
      final_q1u += `${codef.size | h_lockl}`;
       let cornerN: Array<any> = [958, 605];
       let penaltyX: Array<any> = [String.fromCharCode(117,112,108,111,97,100,105,110,103,95,117,95,53,53,0), String.fromCharCode(100,95,54,51,95,115,116,114,101,110,103,116,104,115,0), String.fromCharCode(98,97,100,103,101,115,95,103,95,57,49,0)];
      let appsh = cornerN.length >= 9132941;
      do {
         cornerN = [cornerN.length];
         if (appsh) {
            break;
         }
      } while (appsh && (4 > (2 & cornerN.length)));
         cornerN.push(1 + penaltyX.length);
      bdxadsdkN += cornerN.length / (Math.max(libjsijniprofilerW.length, 5));
    await refetch();

   let otherf = String.fromCharCode(105,108,105,0) == singaporeR;
   do {
      singaporeR += `${searchbar5}`;
      if (otherf) {
         break;
      }
   } while (otherf && (final_pey == String.fromCharCode(103,0)));
      sideD += (parseFloat(`${final_pey == String.fromCharCode(116,0) ? final_pey.length : notificationfillemptyt.length}`));
      libjsijniprofilerW += `${notificationfillemptyt.length - parseInt(`${sideD}`)}`;
   if (1.25 < (bdxadsdkN / (Math.max(sideD, 2)))) {
      sideD -= (parseFloat(`${libjsijniprofilerW == String.fromCharCode(68,0) ? libjsijniprofilerW.length : final_q1u.length}`));
   }
   for (let p = 0; p < 2; p++) {
       let liveendmodallogok: Map<any, any> = new Map([[String.fromCharCode(104,109,97,99,108,105,115,116,95,53,95,55,57,0),false ], [String.fromCharCode(107,110,111,98,95,112,95,54,53,0),true ], [String.fromCharCode(100,121,110,97,109,105,99,115,95,51,95,52,57,0),true ]]);
       let helperz = String.fromCharCode(111,95,55,55,95,112,97,110,101,108,0);
       let mbbidM = String.fromCharCode(103,95,52,54,95,114,101,109,111,118,105,110,103,0);
       let tempf = 4;
       let libruntimeexecutor2 = String.fromCharCode(114,95,57,53,95,116,120,105,100,0);
       let shootf = 2.0;
         libruntimeexecutor2 += "1";
          let dependencyX = 4.0;
          let skip1 = String.fromCharCode(111,95,54,49,95,100,101,115,99,114,0);
         libruntimeexecutor2 = "3";
         dependencyX -= parseFloat(`${skip1.length / 2}`);
         skip1 = `${3 << (Math.min(5, Math.abs(parseInt(`${dependencyX}`))))}`;
      for (let o = 0; o < 3; o++) {
         shootf *= 1;
      }
      while (libruntimeexecutor2 == String.fromCharCode(51,0)) {
         mbbidM += `${libruntimeexecutor2.length ^ parseInt(`${shootf}`)}`;
         break;
      }
      for (let a = 0; a < 3; a++) {
         mbbidM += `${liveendmodallogok.size + mbbidM.length}`;
      }
       let crowna = false;
      for (let h = 0; h < 3; h++) {
         shootf *= mbbidM.length - 1;
      }
      while ((3 + tempf) == 1 && (tempf + libruntimeexecutor2.length) == 3) {
         libruntimeexecutor2 += `${1 | libruntimeexecutor2.length}`;
         break;
      }
       let checkboxs: Array<any> = [461, 198, 605];
      let splashv = liveendmodallogok.size <= 9713636;
      do {
         liveendmodallogok = new Map([[`${checkboxs.length}`, checkboxs.length | 2]]);
         if (splashv) {
            break;
         }
      } while (splashv && (2 >= mbbidM.length));
          let arrowE = 3;
          let sans2 = 0.0;
         libruntimeexecutor2 += `${arrowE & helperz.length}`;
         arrowE ^= parseInt(`${sans2}`) << (Math.min(Math.abs(parseInt(`${sans2}`)), 3));
       let fullo: Array<any> = [933, 321, 788];
       let matchesl: Array<any> = [974, 738];
          let reactA = String.fromCharCode(100,105,108,97,116,101,95,108,95,50,48,0);
         matchesl = [((crowna ? 3 : 1))];
         reactA = `${(reactA == String.fromCharCode(120,0) ? reactA.length : reactA.length)}`;
      if (fullo.length > checkboxs.length) {
          let auto_wF = String.fromCharCode(114,95,53,57,95,100,101,115,99,114,0);
          let iconrefresha = String.fromCharCode(106,95,49,50,95,97,114,99,104,105,118,101,0);
          let launchery = String.fromCharCode(114,95,50,55,95,102,119,114,105,116,101,0);
          let logoutF: Map<any, any> = new Map([[String.fromCharCode(110,111,119,95,114,95,49,57,0),false ], [String.fromCharCode(120,95,54,56,95,122,101,114,111,98,108,111,98,0),true ]]);
         checkboxs = [iconrefresha.length];
         auto_wF += `${(String.fromCharCode(107,0) == launchery ? logoutF.size : launchery.length)}`;
         iconrefresha = `${logoutF.size - launchery.length}`;
      }
      dacccfaabfbcbadeebddcabacdffdbX |= 3 / (Math.max(8, mbbidM.length));
   }
   let soundz = final_q1u == String.fromCharCode(51,54,111,108,114,0);
   do {
      final_q1u = `${parseInt(`${sideD}`)}`;
      if (soundz) {
         break;
      }
   } while (((final_q1u.length / 2) == 2) && soundz);
   while (greya) {
       let privacyY = String.fromCharCode(122,95,57,48,95,112,114,101,99,0);
       let mailg: Map<any, any> = new Map([[String.fromCharCode(97,118,100,101,118,105,99,101,95,113,95,53,49,0),false ], [String.fromCharCode(120,95,57,52,95,101,110,100,112,111,105,110,116,0),true ]]);
       let back4: Array<any> = [622, 933];
       let setting7 = 4.0;
          let package_b3g = 4.0;
          let libffmpegkitf = String.fromCharCode(100,97,121,115,95,53,95,52,48,0);
          let giftbuttonY = 3.0;
         mailg.set(`${setting7}`, parseInt(`${setting7}`));
         package_b3g -= 1 & parseInt(`${package_b3g}`);
         libffmpegkitf = `${libffmpegkitf.length | parseInt(`${package_b3g}`)}`;
         giftbuttonY += 2 << (Math.min(1, Math.abs(parseInt(`${giftbuttonY}`))));
         setting7 *= parseFloat(`${3}`);
      if (4 <= (4 << (Math.min(4, privacyY.length))) || (parseFloat(`${privacyY.length}`) - setting7) <= 4.85) {
         setting7 -= parseFloat(`${parseInt(`${setting7}`) ^ back4.length}`);
      }
      for (let x = 0; x < 1; x++) {
         mailg.set(privacyY, privacyY.length);
      }
         privacyY = `${privacyY.length}`;
      if (4 <= (back4.length / 1)) {
         setting7 /= Math.max(parseFloat(`${mailg.size}`), 2);
      }
         mailg.set(privacyY, back4.length | privacyY.length);
         back4 = [mailg.size];
      for (let w = 0; w < 2; w++) {
         setting7 += parseFloat(`${mailg.size}`);
      }
      while ((privacyY.length % (Math.max(5, mailg.size))) <= 2) {
         mailg = new Map([[`${back4.length}`, 2 << (Math.min(Math.abs(parseInt(`${setting7}`)), 1))]]);
         break;
      }
         mailg.set(`${privacyY}`, (privacyY == String.fromCharCode(79,0) ? mailg.size : privacyY.length));
          let nterstitialD: Array<any> = [292, 603];
          let redirectX = String.fromCharCode(112,95,50,95,99,108,97,115,115,105,102,115,0);
         back4.push(parseInt(`${setting7}`) << (Math.min(Math.abs(1), 5)));
         nterstitialD.push(nterstitialD.length);
         redirectX = `${redirectX.length}`;
      zhengpiany *= parseFloat(`${3}`);
      break;
   }
   let switch_lc = 6085035 >= h_lockl;
   do {
      h_lockl <<= Math.min(Math.abs(singaporeR.length - parseInt(`${sideD}`)), 2);
      if (switch_lc) {
         break;
      }
   } while ((4 < (h_lockl * final_q1u.length) && 4 < (final_q1u.length * h_lockl)) && switch_lc);
   for (let n = 0; n < 1; n++) {
      bdxadsdkN /= Math.max(libjsijniprofilerW.length, 1);
   }
      codef.set(`${bdxadsdkN}`, parseInt(`${bdxadsdkN}`) << (Math.min(5, Math.abs(h_lockl))));
    setIsRefreshing(false);

   while ((parseInt(`${zhengpiany}`) + searchbar5) <= 2 || (5.90 + zhengpiany) <= 2.23) {
      zhengpiany -= parseFloat(`${1}`);
      break;
   }
      final_pey += `${codef.size}`;
   let orientationJ = 5089869.0 <= sideD;
   do {
      sideD *= parseFloat(`${2 - singaporeR.length}`);
      if (orientationJ) {
         break;
      }
   } while (orientationJ && (3 > (libjsijniprofilerW.length * parseInt(`${sideD}`))));
   for (let j = 0; j < 3; j++) {
       let containerE: Array<any> = [46, 387, 97];
       let playlistq = false;
       let single1 = String.fromCharCode(108,100,105,115,116,95,102,95,49,57,0);
       let sliderr = String.fromCharCode(104,97,112,116,105,99,95,106,95,54,54,0);
         containerE.push(3 ^ sliderr.length);
      let changev = playlistq ? !playlistq : playlistq;
      do {
         playlistq = sliderr.length <= 19;
         if (changev) {
            break;
         }
      } while (changev && (playlistq));
      while (playlistq) {
          let base9n = String.fromCharCode(100,114,97,119,105,110,103,95,117,95,52,50,0);
          let clockE = 2;
          let eighteenJ = String.fromCharCode(100,95,57,56,95,110,116,105,108,101,0);
          let iconsettingH = 5.0;
          let combinedp: Array<any> = [521, 649, 622];
         containerE.push((eighteenJ == String.fromCharCode(106,0) ? (playlistq ? 4 : 5) : eighteenJ.length));
         base9n = `${parseInt(`${iconsettingH}`) << (Math.min(base9n.length, 2))}`;
         clockE /= Math.max(5, clockE - 3);
         iconsettingH += parseFloat(`${3 << (Math.min(3, Math.abs(clockE)))}`);
         combinedp = [2];
         break;
      }
      for (let z = 0; z < 2; z++) {
         playlistq = String.fromCharCode(86,0) == single1;
      }
         containerE.push(sliderr.length);
         sliderr += "3";
         single1 += `${sliderr.length}`;
          let final_7ce = true;
          let video8: Map<any, any> = new Map([[String.fromCharCode(120,95,56,54,95,98,105,110,0),String.fromCharCode(105,109,109,117,116,97,98,108,101,95,112,95,52,48,0)], [String.fromCharCode(117,95,52,51,95,109,97,112,0),String.fromCharCode(110,95,57,48,95,104,97,114,100,99,111,100,101,100,0)]]);
         playlistq = !playlistq;
         final_7ce = !final_7ce && video8.size >= 24;
         video8.set(`${final_7ce}`, (video8.size | (final_7ce ? 2 : 3)));
      while (!playlistq) {
          let unimplementedviewT: Array<any> = [328, 244];
          let defaultpredictionprofile8 = String.fromCharCode(99,111,110,103,95,122,95,57,53,0);
         containerE.push(1 ^ defaultpredictionprofile8.length);
         unimplementedviewT.push(unimplementedviewT.length);
         defaultpredictionprofile8 = `${unimplementedviewT.length & unimplementedviewT.length}`;
         break;
      }
      let default_ybR = sliderr.length <= 8937539;
      do {
         sliderr += "1";
         if (default_ybR) {
            break;
         }
      } while (((4 | sliderr.length) == 3 || 2 == (sliderr.length | 4)) && default_ybR);
       let textlayoutmanagerX = false;
      for (let t = 0; t < 2; t++) {
          let greyarrowup0 = String.fromCharCode(101,95,49,57,95,97,121,111,117,116,0);
          let binddatasC: Map<any, any> = new Map([[String.fromCharCode(121,95,56,51,95,114,101,110,111,114,109,101,0),856], [String.fromCharCode(104,95,54,54,95,116,111,110,0),368], [String.fromCharCode(115,97,118,101,100,95,107,95,50,48,0),793]]);
          let emptyN = String.fromCharCode(104,95,49,50,95,103,109,111,99,107,0);
          let searchbarP = String.fromCharCode(118,95,51,48,95,113,108,111,103,115,0);
          let nativeo = false;
         containerE = [((nativeo ? 4 : 2) - 2)];
         greyarrowup0 = "2";
         binddatasC.set(searchbarP, emptyN.length & searchbarP.length);
         emptyN = `${binddatasC.size & emptyN.length}`;
         nativeo = (binddatasC.size >> (Math.min(emptyN.length, 2))) > 57;
      }
      iconsettingv += `${(final_q1u == String.fromCharCode(106,0) ? final_q1u.length : (greya ? 4 : 1))}`;
   }
       let roomR = String.fromCharCode(112,95,51,49,95,104,97,112,113,97,0);
       let release_14p = String.fromCharCode(102,95,51,95,114,101,100,100,105,116,0);
         release_14p += `${release_14p.length & roomR.length}`;
         release_14p += `${1 << (Math.min(4, roomR.length))}`;
       let termsX = true;
          let projects = 4;
          let yingP = true;
         roomR = `${projects + 2}`;
         projects += 2;
         release_14p = "2";
       let sourceq = String.fromCharCode(99,104,114,111,109,97,116,105,99,95,112,95,51,49,0);
       let football8 = String.fromCharCode(119,105,110,100,105,110,103,95,116,95,53,56,0);
      h_lockl /= Math.max(codef.size, 5);
   let splash2 = libjsijniprofilerW == String.fromCharCode(122,51,111,48,102,0);
   do {
      libjsijniprofilerW += `${parseInt(`${bdxadsdkN}`) >> (Math.min(3, Math.abs(3)))}`;
      if (splash2) {
         break;
      }
   } while (splash2 && (4 > (h_lockl / (Math.max(libjsijniprofilerW.length, 3))) || (libjsijniprofilerW.length / (Math.max(4, 1))) > 2));
      singaporeR += `${notificationfillemptyt.length << (Math.min(2, Math.abs(searchbar5)))}`;
       let videovarn: Map<any, any> = new Map([[String.fromCharCode(102,114,97,99,116,105,111,110,97,108,95,48,95,54,57,0),String.fromCharCode(108,105,103,104,116,110,101,115,115,95,122,95,54,48,0)], [String.fromCharCode(116,111,114,99,104,95,49,95,50,51,0),String.fromCharCode(102,95,56,48,95,110,111,114,109,0)]]);
       let libsgcore3 = 4.0;
      for (let a = 0; a < 2; a++) {
         videovarn = new Map([[`${videovarn.size}`, parseInt(`${libsgcore3}`) >> (Math.min(Math.abs(1), 1))]]);
      }
      for (let z = 0; z < 1; z++) {
          let attributedstringz = 3.0;
         videovarn.set(`${libsgcore3}`, parseInt(`${libsgcore3}`));
         attributedstringz += parseInt(`${attributedstringz}`);
      }
      if (!Array.from(videovarn.keys()).includes(`${libsgcore3}`)) {
         libsgcore3 += parseFloat(`${videovarn.size + parseInt(`${libsgcore3}`)}`);
      }
      let themeI = 6665062 >= videovarn.size;
      do {
         videovarn.set(`${libsgcore3}`, parseInt(`${libsgcore3}`));
         if (themeI) {
            break;
         }
      } while ((Array.from(videovarn.values()).includes(libsgcore3)) && themeI);
      if (Array.from(videovarn.values()).includes(libsgcore3)) {
         videovarn = new Map([[`${videovarn.size}`, videovarn.size]]);
      }
         videovarn = new Map([[`${videovarn.size}`, parseInt(`${libsgcore3}`) + 3]]);
      searchbar5 |= ((greya ? 4 : 2) & parseInt(`${zhengpiany}`));
   let firebaseU = greya ? !greya : greya;
   do {
      greya = 50 >= searchbar5;
      if (firebaseU) {
         break;
      }
   } while ((greya) && firebaseU);
   if (!greya) {
       let xvodO = 2.0;
      while (1.59 >= xvodO) {
          let orientationU = 5.0;
          let photoN = String.fromCharCode(97,95,50,53,0);
          let gesturesJ = 1.0;
         xvodO -= parseFloat(`${2}`);
         orientationU *= parseFloat(`${1}`);
         photoN = `${parseInt(`${orientationU}`)}`;
         gesturesJ /= Math.max(photoN.length | parseInt(`${gesturesJ}`), 5);
         break;
      }
          let league6: Array<any> = [484, 696, 388];
         xvodO *= parseFloat(`${league6.length % 3}`);
          let libswresamplex = 1;
          let assistP = 4.0;
         xvodO /= Math.max(5, parseFloat(`${libswresamplex}`));
         libswresamplex ^= 2;
         assistP -= parseFloat(`${parseInt(`${assistP}`) ^ 1}`);
      singaporeR += `${1 & parseInt(`${bdxadsdkN}`)}`;
   }
    return;
  }, []);

  return (
    <ScreenContainer containerStyle={{ paddingLeft: 0, paddingRight: 0 }}>
      <BecomeVipOverlay
        setShowBecomeVIPOverlay={setShowBecomeVIPOverlay}
        showBecomeVIPOverlay={showBecomeVIPOverlay}
        selectedTab="macauFile"
      />

      <View
        style={{
          backgroundColor: colors.background,
          paddingLeft: spacing.sideOffset,
          
          paddingRight: spacing.sideOffset + 90,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingVertical: 8,
        }}
      >
        <Text
          style={{
            ...textVariants.bigHeader,
            color: colors.text,
            fontSize: 22,
            ...styles.header,
          }}
        >
          体育
        </Text>

        <TouchableOpacity
          activeOpacity={!wwBodan.isVip(userState.user)
            ? 0.5
            : 1
          }
          onPress={() => {
            if (!wwBodan.isVip(userState.user)) {
              setShowBecomeVIPOverlay(true);
            }
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#222327",
              paddingHorizontal: 10,
              borderRadius: 30,
              paddingVertical: 5,
              position: "relative",
              top: 5,
            }}
          >
            <Image
              style={styles.iconStyle}
              source={require("@static/images/profile/textLoading.png")}
            />

            {!wwBodan.isVip(userState.user) ? (
              <Text
                style={{
                  color: colors.text,
                  fontSize: 14,
                }}
              >
                成为VIP
              </Text>
            ) : (
              <Text
                style={{
                  color: colors.text,
                  fontSize: 14,
                }}
              >
                VIP {vipRemainingDay}天
              </Text>
            )}
          </View>
        </TouchableOpacity>
      </View>

      {matchTabs && matchTabs.length > 0 && !isOffline && (
        <MatchScheduleNav
          setShowBecomeVIPOverlay={setShowBecomeVIPOverlay}
          tabList={matchTabs}
        />
      )}

      {isOffline && <NoConnection onClickRetry={checkConnection} />}
    </ScreenContainer>
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
});
