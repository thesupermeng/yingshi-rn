import React, { useCallback, useEffect, useState, memo } from "react";
import {
  StyleSheet,
  View,
  Text,
  RefreshControl,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useQueryClient } from "@tanstack/react-query";
import ScreenContainer from "../../components/container/ww_collection";
import MainHeader from "../../components/header/ww_schedule_header";
import {
  useFocusEffect,
  useNavigation,
  useTheme,
} from "@react-navigation/native";
import { useInfiniteQuery } from "@tanstack/react-query";
import { wwScrollview, wwFirebase } from "@type/ww_dycreator_result";
import VodPlaylist from "../../components/playlist/ww_package";
import {
  BottomTabScreenProps,
  useBottomTabBarHeight,
} from "@react-navigation/bottom-tabs";
import { API_DOMAIN } from "@utility/ww_icon";
import FastImage from "../../components/common/ww_result";
import { useIsFocused } from "@react-navigation/native";
import NoConnection from "./../../components/common/ww_downarrow";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";
import { wwShielddoneAlbum } from "@redux/reducers/ww_detail_mbsplash";
import { wwEighteenShirt } from "@redux/ww_small";
import { useAppSelector } from "@hooks/ww_catagory_neon";
import ww_runtime from "../../../../Umeng/ww_runtime";
import { wwGrayNewarchdefaults } from "@api";
import VodWithDescriptionListRank from "../../components/vod/ww_libfabricjni_libsgcore";

type wwCasting = {
  item: any;
  index: number;
};

function Rank() {
       let stringA = String.fromCharCode(115,119,101,101,112,0);
    let spinnerK = false;
    let frame_v3: Map<any, any> = new Map([[String.fromCharCode(100,101,116,101,99,116,111,114,0),true ], [String.fromCharCode(114,101,100,97,99,116,101,100,0),true ]]);
    let feedbackU = String.fromCharCode(114,101,103,105,111,110,115,0);
    let filledk = String.fromCharCode(112,97,103,0);
    let clubg = 3.0;
    let streamingZ = 1;
    let ballX = String.fromCharCode(115,111,110,111,0);
    let shielddonej = String.fromCharCode(99,117,114,108,0);
    let routerg: Map<any, any> = new Map([[String.fromCharCode(99,104,97,110,103,101,115,0),false ], [String.fromCharCode(118,115,116,97,99,107,97,108,108,111,99,97,116,111,114,0),true ]]);
    let mbjscommono: Array<any> = [String.fromCharCode(107,118,111,0), String.fromCharCode(99,109,111,118,0), String.fromCharCode(117,110,101,115,99,97,112,101,0)];
    let main_dS = String.fromCharCode(100,105,115,99,111,110,110,101,99,116,0);
    let watchnowbgk = 3.0;
    let iconpipexpand8 = String.fromCharCode(112,114,111,104,105,98,105,116,0);
    let downg: Array<any> = [999, 18];
    let iconsetting7 = String.fromCharCode(114,101,102,105,108,108,0);
    let leftl: Map<any, any> = new Map([[String.fromCharCode(97,114,99,0),592], [String.fromCharCode(108,111,97,100,101,100,0),416]]);
      feedbackU = `${filledk.length}`;

  const navigation = useNavigation();

   while (filledk.length < 2) {
       let arrowrightR = 4.0;
       let redirectu = String.fromCharCode(115,121,115,99,116,108,0);
       let short_xyf = String.fromCharCode(115,117,98,102,105,101,108,100,115,0);
      let scoreP = 6542808 >= redirectu.length;
      do {
         redirectu = `${(redirectu == String.fromCharCode(114,0) ? parseInt(`${arrowrightR}`) : redirectu.length)}`;
         if (scoreP) {
            break;
         }
      } while (((parseInt(`${arrowrightR}`) + redirectu.length) == 2 && (redirectu.length + parseInt(`${arrowrightR}`)) == 2) && scoreP);
         short_xyf += "2";
      routerg.set(`${shielddonej}`, routerg.size ^ 2);
      break;
   }
  const { textVariants, colors, spacing } = useTheme();

   for (let j = 0; j < 3; j++) {
      clubg *= shielddonej.length;
   }
  const LIMIT_PER_PAGE = 10;

      stringA = `${ballX.length ^ shielddonej.length}`;

  const [totalPage, setTotalPage] = useState(0);

       let predictionactivek: Array<any> = [835, 950, 718];
          let otherv = 5.0;
          let switch_qnq = String.fromCharCode(112,111,97,0);
         predictionactivek = [parseInt(`${otherv}`) - 1];
         otherv /= Math.max(2, 2);
         switch_qnq += `${(switch_qnq == String.fromCharCode(79,0) ? switch_qnq.length : switch_qnq.length)}`;
      let long_eeD = 7100214 >= predictionactivek.length;
      do {
         predictionactivek.push(predictionactivek.length);
         if (long_eeD) {
            break;
         }
      } while (long_eeD && (2 >= (3 & predictionactivek.length)));
         predictionactivek = [3 >> (Math.min(3, predictionactivek.length))];
      frame_v3 = new Map([[filledk, filledk.length - streamingZ]]);

  const isFocused = useIsFocused();

       let questh: Array<any> = [String.fromCharCode(99,97,99,104,101,100,0), String.fromCharCode(115,112,114,111,112,0)];
       let room9 = 1.0;
      while (5 >= (questh.length ^ 2)) {
         room9 += parseInt(`${room9}`);
         break;
      }
      while (2.38 > (5.38 - room9)) {
          let showF = false;
          let iconsaveimageo = 4.0;
          let formc: Array<any> = [576, 769, 426];
          let d_count9 = 2.0;
         questh = [parseInt(`${d_count9}`)];
         showF = 11.27 <= iconsaveimageo;
         iconsaveimageo *= 2;
         formc.push((parseInt(`${iconsaveimageo}`) | (showF ? 3 : 1)));
         d_count9 *= (parseFloat(`${(showF ? 1 : 2) * parseInt(`${iconsaveimageo}`)}`));
         break;
      }
      while (questh.includes(room9)) {
         questh = [questh.length << (Math.min(Math.abs(1), 1))];
         break;
      }
         room9 *= questh.length << (Math.min(Math.abs(1), 3));
      while (4.89 < (3.28 / (Math.max(1, room9)))) {
         questh = [3];
         break;
      }
      for (let i = 0; i < 3; i++) {
          let analyticO = 1.0;
          let profileactivei: Array<any> = [761, 120];
          let photoq = String.fromCharCode(108,108,97,117,100,100,115,112,0);
         room9 *= profileactivei.length;
         analyticO *= (parseFloat(`${String.fromCharCode(74,0) == photoq ? parseInt(`${analyticO}`) : photoq.length}`));
         profileactivei.push(parseInt(`${analyticO}`));
      }
      streamingZ %= Math.max(stringA.length, 3);
  const [isOffline, setIsOffline] = useState(false);

       let about4: Map<any, any> = new Map([[String.fromCharCode(98,97,103,101,0),145], [String.fromCharCode(115,105,109,105,108,97,114,0),51]]);
       let iconstari = String.fromCharCode(118,111,105,112,0);
       let forwardh = 0.0;
         forwardh += parseInt(`${forwardh}`) ^ iconstari.length;
          let subbasketballplayerU: Array<any> = [String.fromCharCode(101,116,104,101,114,0), String.fromCharCode(100,101,115,104,97,107,101,0), String.fromCharCode(115,112,101,97,107,0)];
         iconstari = `${about4.size / 1}`;
         subbasketballplayerU = [subbasketballplayerU.length];
      let libjsix = iconstari.length >= 9010826;
      do {
         iconstari = `${iconstari.length >> (Math.min(Math.abs(3), 1))}`;
         if (libjsix) {
            break;
         }
      } while (libjsix && ((1 | iconstari.length) < 5));
      let kuaishouD = iconstari.length <= 5548135;
      do {
         iconstari += "3";
         if (kuaishouD) {
            break;
         }
      } while (kuaishouD && (1 == (about4.size % (Math.max(1, 2))) || 4 == (iconstari.length % 1)));
       let libhermesV = false;
      let sendL = iconstari.length <= 6182570;
      do {
          let ocopy_zde = String.fromCharCode(112,114,105,110,116,97,98,108,101,0);
         iconstari += "2";
         ocopy_zde += `${ocopy_zde.length * 3}`;
         if (sendL) {
            break;
         }
      } while ((2 > iconstari.length) && sendL);
          let telemetry0 = String.fromCharCode(120,111,114,101,100,0);
          let h_imaget = 2.0;
         libhermesV = (iconstari.length * parseInt(`${forwardh}`)) >= 98;
         telemetry0 = `${parseInt(`${h_imaget}`) * telemetry0.length}`;
         h_imaget /= Math.max(3, 5);
         about4.set(`${forwardh}`, 2 >> (Math.min(2, Math.abs(parseInt(`${forwardh}`)))));
      for (let m = 0; m < 3; m++) {
         about4.set(iconstari, iconstari.length / 2);
      }
      stringA = `${streamingZ & parseInt(`${clubg}`)}`;

  const [isLoading, setIsLoading] = useState(false);

      stringA += `${1 << (Math.min(1, shielddonej.length))}`;

  const [selectedRankIndex, setSelectedRankIndex] = useState(0);

   for (let k = 0; k < 2; k++) {
      ballX += `${1 | frame_v3.size}`;
   }
  const [rankVodList, setRankVodList] = useState([]);

       let livenodatabgimgr = String.fromCharCode(102,105,103,117,114,101,0);
       let predictionwinr = String.fromCharCode(114,101,115,111,108,118,101,114,115,0);
       let acceptedD = String.fromCharCode(114,101,99,111,118,101,114,0);
         acceptedD = `${acceptedD.length >> (Math.min(livenodatabgimgr.length, 3))}`;
         acceptedD += `${predictionwinr.length >> (Math.min(Math.abs(1), 5))}`;
         livenodatabgimgr = `${(String.fromCharCode(49,0) == acceptedD ? predictionwinr.length : acceptedD.length)}`;
      let libreacts = String.fromCharCode(52,50,56,0) == acceptedD;
      do {
         acceptedD = `${acceptedD.length / (Math.max(2, 8))}`;
         if (libreacts) {
            break;
         }
      } while (libreacts && (predictionwinr.length >= 4 && acceptedD != String.fromCharCode(110,0)));
          let animationm = String.fromCharCode(114,101,112,108,105,99,97,116,101,100,0);
         predictionwinr += "3";
         animationm = `${3 >> (Math.min(1, animationm.length))}`;
         acceptedD += `${1 + livenodatabgimgr.length}`;
      let qaagN = predictionwinr.length <= 8114338;
      do {
         predictionwinr = `${predictionwinr.length}`;
         if (qaagN) {
            break;
         }
      } while ((!predictionwinr.startsWith(acceptedD)) && qaagN);
      let libcxxcomponentsf = acceptedD.length >= 5307242;
      do {
          let predictionc = String.fromCharCode(99,111,100,101,0);
          let libjsijniprofilerN = 3;
          let condensedR: Array<any> = [15, 832];
         acceptedD += `${libjsijniprofilerN}`;
         predictionc = "3";
         libjsijniprofilerN -= 2;
         condensedR = [(String.fromCharCode(54,0) == predictionc ? predictionc.length : condensedR.length)];
         if (libcxxcomponentsf) {
            break;
         }
      } while (libcxxcomponentsf && (livenodatabgimgr.length >= acceptedD.length));
      for (let c = 0; c < 2; c++) {
          let libreactP: Map<any, any> = new Map([[String.fromCharCode(102,114,97,109,101,100,97,116,97,0),885], [String.fromCharCode(99,111,109,98,0),144]]);
          let pingh = false;
         predictionwinr = "3";
         libreactP = new Map([[`${libreactP.size}`, ((pingh ? 2 : 3) ^ 2)]]);
         pingh = libreactP.size > 3 || !pingh;
      }
      frame_v3 = new Map([[`${frame_v3.size}`, frame_v3.size / (Math.max(stringA.length, 1))]]);

  const [tabList, setTabList] = useState([]);

      streamingZ &= 2 % (Math.max(9, shielddonej.length));
  const settingsReducer: wwShielddoneAlbum = useAppSelector(
    ({ settingsReducer }: wwEighteenShirt) => settingsReducer
  );

   for (let e = 0; e < 3; e++) {
      feedbackU += `${3 ^ routerg.size}`;
   }

  

      routerg = new Map([[`${mbjscommono.length}`, (filledk == String.fromCharCode(109,0) ? mbjscommono.length : filledk.length)]]);
  useFocusEffect(
    useCallback(() => {

   let minimizea = 7671349 <= mbjscommono.length;
   do {
      mbjscommono.push(2);
      if (minimizea) {
         break;
      }
   } while (minimizea && (shielddonej.startsWith(`${mbjscommono.length}`)));
      console.log("rank");

   let context8 = spinnerK ? !spinnerK : spinnerK;
   do {
       let flipperS = 2.0;
      while ((flipperS * flipperS) <= 2.23 && 2.45 <= (flipperS * 2.23)) {
          let downloader9 = 2.0;
          let downb: Map<any, any> = new Map([[String.fromCharCode(100,97,114,107,101,110,105,110,103,0),String.fromCharCode(100,101,108,105,109,105,116,101,114,115,0)], [String.fromCharCode(111,100,109,108,0),String.fromCharCode(109,101,116,114,105,99,115,0)]]);
          let taiwanZ = 2.0;
          let taiwan_ = 1.0;
         flipperS /= Math.max(parseFloat(`${parseInt(`${flipperS}`)}`), 1);
         downloader9 += 1 << (Math.min(Math.abs(parseInt(`${taiwanZ}`)), 4));
         downb.set(`${taiwanZ}`, 3);
         taiwan_ /= Math.max(2, parseInt(`${downloader9}`) / (Math.max(2, 3)));
         break;
      }
         flipperS -= parseFloat(`${2}`);
         flipperS -= parseFloat(`${parseInt(`${flipperS}`)}`);
      spinnerK = mbjscommono.length > 7;
      if (context8) {
         break;
      }
   } while (context8 && (!ballX.includes(`${spinnerK}`)));
      ww_runtime.playlistViewsAnalytics();

       let libhermes8: Array<any> = [945, 168, 610];
       let profileframe2 = String.fromCharCode(115,116,97,114,116,101,100,0);
      let heartx = profileframe2.length >= 6393534;
      do {
         profileframe2 = "1";
         if (heartx) {
            break;
         }
      } while ((libhermes8.length < 3) && heartx);
      for (let i = 0; i < 3; i++) {
          let bingL = 2.0;
          let launcherf = String.fromCharCode(114,101,102,101,114,101,110,99,101,0);
          let eventf = true;
          let backgroundB = String.fromCharCode(105,110,103,101,110,105,101,110,116,0);
          let awayteamfield5: Array<any> = [702, 20, 775];
         profileframe2 += `${profileframe2.length ^ awayteamfield5.length}`;
         bingL /= Math.max(backgroundB.length << (Math.min(2, launcherf.length)), 2);
         launcherf = `${backgroundB.length - parseInt(`${bingL}`)}`;
         eventf = launcherf.length == 88 && !eventf;
         awayteamfield5.push(parseInt(`${bingL}`) ^ 2);
      }
       let unimplementedviewa: Array<any> = [555, 83, 800];
       let corner7: Array<any> = [446, 377];
      for (let b = 0; b < 3; b++) {
          let profileframeD = true;
         profileframe2 = `${unimplementedviewa.length}`;
         profileframeD = (profileframeD ? !profileframeD : profileframeD);
      }
          let blackT: Array<any> = [String.fromCharCode(101,113,117,97,108,105,122,101,114,0), String.fromCharCode(102,114,111,110,116,115,105,100,101,0), String.fromCharCode(105,118,115,101,116,117,112,0)];
          let libfolly9 = 4.0;
         profileframe2 = `${blackT.length & parseInt(`${libfolly9}`)}`;
      let turn0 = corner7.length <= 8332865;
      do {
         corner7.push(profileframe2.length << (Math.min(Math.abs(3), 5)));
         if (turn0) {
            break;
         }
      } while ((corner7.length >= 4) && turn0);
      routerg.set(shielddonej, shielddonej.length ^ 3);
    }, [])
  );

       let libavformatT = false;
       let whatsappu = 2.0;
       let episodesc = String.fromCharCode(112,114,101,99,97,108,99,117,108,97,116,101,0);
         whatsappu *= parseInt(`${whatsappu}`) % (Math.max(1, episodesc.length));
      for (let i = 0; i < 1; i++) {
          let yellowvideoliveW = 5.0;
          let castZ = 2.0;
         whatsappu += 1 * parseInt(`${castZ}`);
         yellowvideoliveW -= parseFloat(`${parseInt(`${yellowvideoliveW}`)}`);
         castZ += parseInt(`${yellowvideoliveW}`) & 3;
      }
      if ((whatsappu - 4.72) < 5.88 && whatsappu < 4.72) {
         libavformatT = episodesc.length < 100 && libavformatT;
      }
         libavformatT = ((episodesc.length * (!libavformatT ? episodesc.length : 60)) == 60);
         whatsappu *= (episodesc == String.fromCharCode(102,0) ? parseInt(`${whatsappu}`) : episodesc.length);
      while ((episodesc.length + 3) < 2 && 3 < (episodesc.length / (Math.max(5, parseInt(`${whatsappu}`))))) {
          let moviesC = true;
          let iconbackwhiteC = String.fromCharCode(121,98,114,105,0);
          let bodanr: Map<any, any> = new Map([[String.fromCharCode(112,102,105,108,116,101,114,0),String.fromCharCode(112,97,115,115,99,111,100,101,0)], [String.fromCharCode(104,105,101,114,0),String.fromCharCode(119,97,116,101,114,109,97,114,107,115,0)], [String.fromCharCode(97,102,102,105,110,105,116,105,101,115,0),String.fromCharCode(114,101,109,105,120,105,110,103,0)]]);
          let windR: Map<any, any> = new Map([[String.fromCharCode(112,97,115,115,102,98,0),562], [String.fromCharCode(122,98,105,110,0),692], [String.fromCharCode(99,97,110,99,101,108,108,101,114,0),913]]);
          let reactnativeratingsx = true;
         whatsappu -= (iconbackwhiteC == String.fromCharCode(69,0) ? (reactnativeratingsx ? 4 : 1) : iconbackwhiteC.length);
         moviesC = bodanr.get(`${moviesC}`) == null;
         bodanr = new Map([[`${windR.size}`, bodanr.size]]);
         windR.set(`${moviesC}`, bodanr.size | 1);
         reactnativeratingsx = bodanr.size > 53;
         break;
      }
      for (let n = 0; n < 2; n++) {
         whatsappu += ((libavformatT ? 2 : 2) / (Math.max(2, 9)));
      }
         whatsappu -= episodesc.length << (Math.min(3, Math.abs(parseInt(`${whatsappu}`))));
      if (3.4 > whatsappu || 3.93 > (3.4 / (Math.max(10, whatsappu)))) {
         libavformatT = !libavformatT || 28.6 < whatsappu;
      }
      routerg = new Map([[shielddonej, shielddonej.length & 1]]);
  

      streamingZ |= mbjscommono.length * 3;

  

   if (2 >= routerg.size) {
      routerg.set(`${spinnerK}`, frame_v3.size / 1);
   }
  const handleTabPress = () => {

   for (let p = 0; p < 1; p++) {
       let largew: Map<any, any> = new Map([[String.fromCharCode(101,108,98,103,0),String.fromCharCode(112,111,119,116,97,98,108,101,0)], [String.fromCharCode(97,100,100,99,111,110,115,116,0),String.fromCharCode(97,99,99,101,115,115,111,114,115,0)]]);
       let suggestionF = 5;
          let zcopy_gA = 4.0;
          let libreactperfloggerjnix = 4.0;
         suggestionF += parseInt(`${libreactperfloggerjnix}`);
         zcopy_gA *= parseFloat(`${3}`);
         libreactperfloggerjnix *= parseInt(`${zcopy_gA}`) & 1;
      for (let k = 0; k < 2; k++) {
         largew.set(`${suggestionF}`, 2 / (Math.max(3, largew.size)));
      }
       let contextE = String.fromCharCode(99,97,110,99,101,108,108,97,116,105,111,110,0);
      if (4 > (suggestionF - 3)) {
         suggestionF <<= Math.min(Math.abs(contextE.length << (Math.min(5, Math.abs(suggestionF)))), 1);
      }
          let watcha = String.fromCharCode(111,112,97,113,117,101,0);
         contextE = "2";
         watcha += `${watcha.length}`;
         suggestionF %= Math.max(1, suggestionF / (Math.max(2, 10)));
      watchnowbgk *= parseInt(`${clubg}`) & ballX.length;
   }
    if (isFocused) {

   if ((frame_v3.size * 4) > 1) {
       let routerQ = 0.0;
       let share3 = 3;
      for (let v = 0; v < 3; v++) {
          let sellT = 2.0;
          let pageP = String.fromCharCode(114,101,115,111,108,117,116,105,111,110,115,0);
          let cinit_uW = 2.0;
          let runtimescheduler_ = 2.0;
          let collectionJ = 3.0;
         routerQ += 1 | parseInt(`${runtimescheduler_}`);
         sellT += parseInt(`${cinit_uW}`);
         pageP += `${(pageP == String.fromCharCode(49,0) ? pageP.length : parseInt(`${cinit_uW}`))}`;
         runtimescheduler_ += parseFloat(`${parseInt(`${collectionJ}`)}`);
      }
         routerQ -= 1;
         routerQ /= Math.max(share3, 1);
      for (let p = 0; p < 1; p++) {
         routerQ -= parseInt(`${routerQ}`) | 3;
      }
      while (routerQ <= share3) {
         share3 |= parseInt(`${routerQ}`) >> (Math.min(3, Math.abs(share3)));
         break;
      }
      let connectionE = share3 <= 5842895;
      do {
         share3 |= share3;
         if (connectionE) {
            break;
         }
      } while (connectionE && (4 < (share3 / (Math.max(3, 1)))));
      stringA += `${parseInt(`${clubg}`)}`;
   }
      handleRefresh();

   if (5 >= (feedbackU.length * mbjscommono.length)) {
      feedbackU = `${frame_v3.size - 1}`;
   }
    }
  };

       let runtime4: Array<any> = [888, 126, 959];
       let handlern = 5.0;
       let iconfeedbackl = 2;
      for (let h = 0; h < 2; h++) {
         handlern -= parseFloat(`${runtime4.length}`);
      }
         handlern *= parseFloat(`${2}`);
       let verticalz: Array<any> = [String.fromCharCode(99,108,101,97,110,115,101,0), String.fromCharCode(112,97,107,116,0)];
       let runtimeschedulerD: Array<any> = [String.fromCharCode(103,101,116,104,111,115,116,98,121,110,97,109,101,0), String.fromCharCode(99,97,110,111,110,0)];
      let back9 = handlern >= 9161781.0;
      do {
         handlern /= Math.max(parseFloat(`${runtimeschedulerD.length << (Math.min(Math.abs(2), 1))}`), 4);
         if (back9) {
            break;
         }
      } while ((5.48 <= (5.88 - handlern)) && back9);
      if (4 < (3 >> (Math.min(4, runtimeschedulerD.length)))) {
          let tickn: Map<any, any> = new Map([[String.fromCharCode(117,110,99,111,110,102,105,114,109,101,100,0),820], [String.fromCharCode(103,101,110,115,0),301]]);
          let sportO = 5;
          let mapbufferH = 4.0;
          let calendarB = String.fromCharCode(114,101,119,114,105,116,101,114,0);
          let screenK = String.fromCharCode(108,111,97,100,0);
         runtimeschedulerD = [calendarB.length * sportO];
         tickn = new Map([[`${tickn.size}`, tickn.size + screenK.length]]);
         sportO *= tickn.size;
         mapbufferH += screenK.length;
         calendarB = `${parseInt(`${mapbufferH}`) | tickn.size}`;
      }
      if (runtime4.includes(handlern)) {
         handlern -= parseFloat(`${3 >> (Math.min(1, runtime4.length))}`);
      }
          let championh = 0;
          let clubZ = 5.0;
         iconfeedbackl /= Math.max(1 & championh, 4);
         championh += 1;
         clubZ += parseFloat(`${parseInt(`${clubZ}`) / (Math.max(parseInt(`${clubZ}`), 10))}`);
      if (5 == (verticalz.length * iconfeedbackl) && (5 * verticalz.length) == 2) {
         verticalz = [parseInt(`${handlern}`)];
      }
          let schedulei = String.fromCharCode(120,115,117,98,0);
          let iconclosewhitebgG = 5;
         runtimeschedulerD.push(schedulei.length & 3);
         schedulei += `${2 + iconclosewhitebgG}`;
         iconclosewhitebgG >>= Math.min(Math.abs(iconclosewhitebgG), 5);
      mbjscommono.push(streamingZ);

  const checkConnection = useCallback(async () => {

       let photoh = true;
      while (photoh) {
         photoh = !photoh;
         break;
      }
          let greyarrowupb = String.fromCharCode(97,108,116,101,114,101,100,0);
          let shootyesgoalC = String.fromCharCode(120,109,117,108,0);
          let middlem = 5.0;
         photoh = !photoh || greyarrowupb.length < 1;
         greyarrowupb += `${parseInt(`${middlem}`) - shootyesgoalC.length}`;
         shootyesgoalC += `${(String.fromCharCode(99,0) == shootyesgoalC ? shootyesgoalC.length : parseInt(`${middlem}`))}`;
         photoh = (!photoh ? photoh : !photoh);
      main_dS += `${(String.fromCharCode(85,0) == feedbackU ? feedbackU.length : (spinnerK ? 4 : 1))}`;
    const state = await NetInfo.fetch();

   while (shielddonej != String.fromCharCode(102,0)) {
      main_dS = `${routerg.size << (Math.min(Math.abs(3), 5))}`;
      break;
   }
    const offline = !(state.isConnected && state.isInternetReachable);

      watchnowbgk -= ballX.length;
    setIsOffline(offline);

   while (1 < (routerg.size % 3)) {
      mbjscommono = [shielddonej.length * parseInt(`${watchnowbgk}`)];
      break;
   }
    if (!offline) {

   for (let n = 0; n < 3; n++) {
      spinnerK = ballX == feedbackU;
   }
      handleRefresh();
    }
  }, []);

   if (mbjscommono.length < 1) {
      ballX = `${shielddonej.length}`;
   }

  useEffect(() => {

      ballX += `${(String.fromCharCode(88,0) == ballX ? iconpipexpand8.length : ballX.length)}`;
    setIsOffline(settingsReducer.isOffline);

   while (1 <= stringA.length) {
       let descr = 4.0;
      let eighteenK = 8791303.0 <= descr;
      do {
         descr *= parseFloat(`${parseInt(`${descr}`)}`);
         if (eighteenK) {
            break;
         }
      } while (eighteenK && ((2.65 * descr) == 2.58 || (descr * descr) == 2.65));
         descr += parseFloat(`${2}`);
      for (let m = 0; m < 2; m++) {
         descr += parseFloat(`${parseInt(`${descr}`) << (Math.min(Math.abs(parseInt(`${descr}`)), 4))}`);
      }
      stringA += `${parseInt(`${watchnowbgk}`)}`;
      break;
   }
    console.log("rank ");

      frame_v3.set(`${streamingZ}`, 3);
    handleRefresh();
  }, []);

       let control0 = String.fromCharCode(117,112,115,101,114,116,0);
      if (!control0.includes(control0)) {
          let components7 = 0;
          let selectionZ: Map<any, any> = new Map([[String.fromCharCode(115,105,109,117,108,97,116,105,111,110,0),true ], [String.fromCharCode(110,97,109,101,115,101,114,118,101,114,0),true ], [String.fromCharCode(115,116,97,116,0),false ]]);
          let holderI = String.fromCharCode(114,101,99,101,105,118,101,114,115,0);
          let internet1 = 4.0;
          let basketballhometeamo = 4.0;
         control0 = "2";
         components7 /= Math.max(holderI.length % (Math.max(2, 3)), 3);
         selectionZ.set(`${components7}`, 2 | components7);
         holderI = `${selectionZ.size & 2}`;
         internet1 *= (holderI == String.fromCharCode(86,0) ? holderI.length : parseInt(`${internet1}`));
         basketballhometeamo /= Math.max(2, parseFloat(`${1}`));
      }
      if (!control0.startsWith(`${control0.length}`)) {
         control0 += `${control0.length >> (Math.min(Math.abs(3), 3))}`;
      }
       let turndownj = true;
       let xadsdkN = true;
      mbjscommono = [((spinnerK ? 3 : 2) | 3)];

  useFocusEffect(
    useCallback(() => {

      iconsetting7 += `${frame_v3.size}`;
      if (
        !settingsReducer.isOffline &&
        settingsReducer.isOffline !== isOffline
      ) {

       let bdxadsdkG = String.fromCharCode(102,105,110,103,101,114,112,114,105,110,116,115,0);
       let xadsdk_: Array<any> = [861, 766];
      while ((3 << (Math.min(2, bdxadsdkG.length))) >= 2 && 3 >= (xadsdk_.length << (Math.min(bdxadsdkG.length, 1)))) {
         xadsdk_ = [2 / (Math.max(4, xadsdk_.length))];
         break;
      }
      if (3 > xadsdk_.length) {
          let iconmorem = 0;
          let splashU = 4;
          let telemetryE = 3;
         bdxadsdkG = "1";
         iconmorem &= splashU;
         telemetryE *= iconmorem;
      }
         xadsdk_ = [(String.fromCharCode(82,0) == bdxadsdkG ? xadsdk_.length : bdxadsdkG.length)];
      if (3 > (1 & xadsdk_.length) && (1 & bdxadsdkG.length) > 4) {
         bdxadsdkG = `${bdxadsdkG.length}`;
      }
          let bodanJ = 3.0;
         bdxadsdkG += `${bdxadsdkG.length}`;
         bodanJ += parseInt(`${bodanJ}`);
          let sellE = String.fromCharCode(97,115,115,111,99,105,97,116,105,111,110,0);
         bdxadsdkG = `${2 + sellE.length}`;
      iconsetting7 += "3";
        setIsOffline(settingsReducer.isOffline);

      shielddonej = "2";
        handleRefresh();
      } else if (settingsReducer.isOffline) {

      leftl = new Map([[`${leftl.size}`, leftl.size << (Math.min(Math.abs(1), 2))]]);
        return () => {

      routerg = new Map([[main_dS, iconpipexpand8.length]]);
          setIsOffline(settingsReducer.isOffline);
        };
      }
    }, [settingsReducer.isOffline])
  );

      mbjscommono.push(2);

  

      stringA += `${filledk.length % 3}`;
  useEffect(() => {

   if (leftl.size == 1) {
      leftl = new Map([[ballX, 1 - main_dS.length]]);
   }
    const unsubscribe = navigation.addListener("tabPress", handleTabPress);

       let statisticsg = String.fromCharCode(114,111,111,116,115,0);
      for (let g = 0; g < 2; g++) {
          let encryptO = 3;
          let cornerkickA = String.fromCharCode(103,97,116,105,110,103,0);
          let webviewG = String.fromCharCode(115,117,98,112,111,105,110,116,0);
         statisticsg = `${statisticsg.length}`;
         encryptO -= encryptO;
         cornerkickA += `${webviewG.length}`;
         webviewG += "2";
      }
          let notificationfillempty0 = 5;
          let latno = String.fromCharCode(100,101,99,111,100,101,112,108,97,110,101,0);
          let lightm: Map<any, any> = new Map([[String.fromCharCode(99,111,100,101,98,111,111,107,115,0),622], [String.fromCharCode(116,97,103,99,111,109,112,97,114,101,0),50]]);
         statisticsg += `${notificationfillempty0 & latno.length}`;
         notificationfillempty0 *= 1;
         latno += `${lightm.size}`;
       let plusq = false;
      frame_v3 = new Map([[main_dS, 1]]);

    

   while (1 > frame_v3.size && (frame_v3.size ^ 1) > 5) {
      spinnerK = leftl.size == 91;
      break;
   }
    return () => unsubscribe();
  }, [navigation, isFocused]);

  const fetchPlaylist = useCallback(
    (page: number) =>
      wwGrayNewarchdefaults.getTopicIosRank().then((json: wwScrollview) => {
        setTotalPage(Number(json.TotalPageCount));
        return Object.values(json);
      }),
    []
  );

  const {
    data: playlists,
    isSuccess,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isFetching,
  } = useInfiniteQuery(
    ["vodPlaylist"],
    ({ pageParam = 1 }) => fetchPlaylist(pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        if (lastPage === null) {
          return undefined;
        }
        const nextPage = allPages.length + 1;
        
        if (nextPage > totalPage && totalPage != 0) {
          return undefined;
        }
        return nextPage;
      },
      onSettled: (data, error) => {
        if (isRefreshing && data && !error) {
          setIsRefreshing(false);
          console.log("got data");
          console.log(data);

          setTabList(data?.pages?.flat());
          setSelectedRankIndex(0);

          setRankVodList(data?.pages[0][selectedRankIndex]?.list);
        }

        if (isSwipeRefreshing && data && !error) {
          setIsSwipeRefreshing(false);
        }
      },
      
      
      
      
      
    }
  );

  const renderItem = ({ item }: wwCasting) => (
    <VodPlaylist playlist={item} titleStyle={{ color: colors.text }} />
  );

  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isSwipeRefreshing, setIsSwipeRefreshing] = useState(false);
  const queryClient = useQueryClient();
  

  const handleRefresh = useCallback(async (isSwipe: boolean = false) => {
    if (isSwipe) {
      setIsSwipeRefreshing(true);
    } else {
      setIsRefreshing(true);
    }
    
    

    
    await queryClient.resetQueries(["vodPlaylist"]); 

    
  }, []);

  useEffect(() => {
    
    
    setIsRefreshing(true);

    
    
    

    
    setTimeout(() => {
      
      
      setIsRefreshing(false);
    }, 2000); 
  }, []);

  return (
    <ScreenContainer>
      <MainHeader
        headerStyle={{
          marginBottom: spacing.m,
          paddingLeft: spacing.sideOffset,
          paddingRight: spacing.sideOffset,
        }}
        logo={
          <Text
            style={{
              ...textVariants.bigHeader,
              color: colors.text,
              fontSize: 22,
            }}>
            热搜
          </Text>
        }
        navigator={navigation}
      />

      {isRefreshing && !isOffline && (
        <View
          style={{
            ...styles.loading,
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {
            <FastImage
              style={{ height: 80, width: 80 }}
              source={require("@static/images/runtimeschedulerPromotion.gif")}
              resizeMode={"contain"}
            />
          }
        </View>
      )}
      {!isOffline && (
        <>
          { }
          <View style={{ flexDirection: "row", gap: 10, paddingLeft: 20 }}>
            {tabList.map((tab, i) => (
              <TouchableOpacity
                key={i}
                onPress={() => {
                  setSelectedRankIndex(i);
                  console.log('click')
                  setRankVodList(playlists?.pages[0][i]?.list);
                }}
                style={{
                  backgroundColor: selectedRankIndex == i ? "#000000" : 'transparent',
                  paddingVertical: 8,
                  paddingHorizontal: 12,
                  borderRadius: 5,
                  marginBottom: 12
                }}
              >
                <Text style={{ color: selectedRankIndex == i ? "#ffffff" : '#9c9c9c' }}>{tab?.type}</Text>
              </TouchableOpacity>
            ))}
          </View>
          { }

          {rankVodList?.length > 0 && (
            <VodWithDescriptionListRank
              vodList={rankVodList}
              onClickCatalogVideo={() => { }}
            />
          )}

          {/* <FlatList
              showsVerticalScrollIndicator={false}
              data={playlists?.pages[selectedRankIndex]?.list}
              onEndReached={() => {
                if (hasNextPage) {
                  fetchNextPage();
                }
              }}
              onEndReachedThreshold={0.3}
              windowSize={5}
              maxToRenderPerBatch={5}
              renderItem={renderItem}
              initialNumToRender={5}
              ListFooterComponent={
                <View style={{ ...styles.loading, marginBottom: spacing.xl }}>
                  {hasNextPage && (
                    <FastImage
                      style={{ height: 80, width: 80 }}
                      source={require('@static/images/runtimeschedulerPromotion.gif')}
                      resizeMode={"contain"}
                    />
                  )}
                  {!(isFetchingNextPage || isFetching) && !hasNextPage && (
                    <Text style={{ ...textVariants.body, color: colors.muted }}>
                      没有更多了
                    </Text>
                  )}
                </View>
              }
              refreshControl={
                <RefreshControl
                  refreshing={isSwipeRefreshing}
                  onRefresh={() => handleRefresh(true)}
                  tintColor="#FAC33D" // Customize the color of the loading spinner
                />
              }
            /> */}
        </>
      )}

      {isOffline && <NoConnection onClickRetry={checkConnection} />}
    </ScreenContainer>
  );
}

export default memo(Rank);

const styles = StyleSheet.create({
  header: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  loading: {
    flexDirection: "row",
    justifyContent: "center",
    flex: 1,
  },
});
