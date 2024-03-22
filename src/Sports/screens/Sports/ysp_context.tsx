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
import ScreenContainer from "../../../components/container/ypy_fast";
import MainHeader from "../../../components/header/tae_refresh_header";
import { useFocusEffect, useTheme } from "@react-navigation/native";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import {
  RBEmojiEwarded,
} from "@type/wpk_long";
import VodPlaylist from "../../../components/playlist/ki_gift_zhubo";
import {
  BottomTabScreenProps,
  useBottomTabBarHeight,
} from "@react-navigation/bottom-tabs";
import { API_DOMAIN, MATCH_API_DOMAIN } from "@utility/n_subs_interstitial";
import Animated from "react-native-reanimated";
import FastImage from "react-native-fast-image";
import LShrink from "../../middleware/i_favorite";
import { Url } from "../../middleware/aux_bootsplash_black";
import { formatMatchDate } from "../../utility/utils";
import { EALSource } from "../../types/x_home";
import MatchSchedule from "../../components/matchSchedule/y_event_sort";
import MatchScheduleNav from "../../components/matchSchedule/ijo_modal_whatsapp_view";
import NoConnection from "./../../../components/common/nyr_animation_langkey";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";

import { useAppSelector, useSelector } from "@hooks/kg_index";
import { PSmall } from "@redux/fj_prediction_thailand";
import { useDispatch } from "react-redux";
import BecomeVipOverlay from "../../../components/modal/pg_buffer_alert";
import { GBYMiniCanvas } from "@redux/reducers/t_types";
import umb_center_carousel from "../../../../Umeng/umb_center_carousel";
import { HDTGesturesList } from "@redux/reducers/f_gmail";
import { KWConstants } from "@models/kl_sheet";

interface YCUFrameYing {
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
  const userState = useSelector<HDTGesturesList>('userReducer');
  const settingsReducer: GBYMiniCanvas = useAppSelector(
    ({ settingsReducer }: PSmall) => settingsReducer
  );

  
  useFocusEffect(useCallback(() => {
    umb_center_carousel.sportViewsAnalytics();
  }, []));
  

  const { data: navOptions, refetch } = useQuery({
    queryKey: ["matchesNavOptions"],
    queryFn: () =>
      LShrink.call(Url.sportTypes, {}, "GET").then((res): YCUFrameYing[] => {
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
       let dangerQ = 1.0;
    let register_9N: Array<any> = [String.fromCharCode(105,113,109,112,0), String.fromCharCode(100,105,116,97,110,99,101,0), String.fromCharCode(114,97,110,103,101,0)];
    let animation5 = 0.0;
    let minivod7 = String.fromCharCode(118,111,99,97,98,0);
    let episodeW = String.fromCharCode(100,111,119,110,108,101,102,116,0);
    let progressg = String.fromCharCode(100,121,108,105,98,115,0);
    let fillb: Map<any, any> = new Map([[String.fromCharCode(101,110,116,101,114,101,100,0),155], [String.fromCharCode(105,110,100,101,120,101,100,0),390]]);
   let searchu = episodeW.length <= 6841033;
   do {
       let analyticsW = 1;
       let volumeM = String.fromCharCode(101,109,112,116,121,0);
       let default_hB: Array<any> = [570, 213, 951];
       let anner7: Array<any> = [882, 284, 332];
      while (5 >= (4 | anner7.length)) {
         default_hB = [2 << (Math.min(1, default_hB.length))];
         break;
      }
      if (3 >= (anner7.length - analyticsW)) {
         anner7.push(volumeM.length >> (Math.min(4, Math.abs(analyticsW))));
      }
      let sendV = analyticsW <= 8356758;
      do {
         analyticsW /= Math.max(3, analyticsW);
         if (sendV) {
            break;
         }
      } while ((anner7.includes(analyticsW)) && sendV);
         analyticsW *= 2;
       let readb = 4;
       let styleG = 2;
      episodeW = `${(String.fromCharCode(74,0) == minivod7 ? minivod7.length : parseInt(`${dangerQ}`))}`;
      if (searchu) {
         break;
      }
   } while ((3 <= episodeW.length && progressg != String.fromCharCode(102,0)) && searchu);
      progressg = `${(String.fromCharCode(90,0) == episodeW ? episodeW.length : fillb.size)}`;
   if (episodeW.startsWith(`${fillb.size}`)) {
      episodeW = `${parseInt(`${animation5}`) << (Math.min(5, Math.abs(2)))}`;
   }
   while (progressg != episodeW) {
       let settingy: Array<any> = [57, 244, 826];
      let viewerV = settingy.length >= 5431821;
      do {
          let popupu = String.fromCharCode(119,119,119,0);
          let time_r32 = 0;
          let foundV = 2;
         settingy.push(foundV >> (Math.min(1, Math.abs(3))));
         popupu += `${time_r32 - popupu.length}`;
         time_r32 |= popupu.length - time_r32;
         foundV /= Math.max((String.fromCharCode(74,0) == popupu ? popupu.length : time_r32), 1);
         if (viewerV) {
            break;
         }
      } while (((settingy.length % (Math.max(5, 3))) <= 2 && 5 <= (settingy.length % (Math.max(settingy.length, 7)))) && viewerV);
       let usera: Array<any> = [582, 616, 68];
      if (!usera.includes(settingy.length)) {
          let modelh: Array<any> = [173, 184];
          let singaporeE = 1.0;
         settingy.push(2 % (Math.max(8, usera.length)));
         modelh.push(3 + modelh.length);
         singaporeE *= parseFloat(`${parseInt(`${singaporeE}`)}`);
      }
      episodeW = `${2 - fillb.size}`;
      break;
   }
   let championx = animation5 >= 9825265.0;
   do {
       let termsN = String.fromCharCode(115,116,101,112,115,0);
       let inviteq = 0;
       let progress7 = 1.0;
       let backwardo = 4.0;
       let star9 = String.fromCharCode(115,108,105,100,105,110,103,0);
         backwardo -= 3;
         star9 += `${star9.length}`;
      let heartG = 7328632.0 >= progress7;
      do {
         progress7 += parseFloat(`${star9.length}`);
         if (heartG) {
            break;
         }
      } while ((1.45 >= (progress7 + inviteq)) && heartG);
       let goalO = 3;
          let fastz = 3;
         termsN += `${2 | goalO}`;
         fastz -= 2 * fastz;
         progress7 += parseFloat(`${termsN.length}`);
          let predictionl: Map<any, any> = new Map([[String.fromCharCode(100,110,115,108,97,98,101,108,0),337], [String.fromCharCode(109,118,114,101,102,0),445], [String.fromCharCode(114,117,115,115,105,97,110,0),241]]);
          let stepg = String.fromCharCode(99,109,112,97,100,100,114,0);
         star9 = `${3 >> (Math.min(Math.abs(parseInt(`${backwardo}`)), 1))}`;
         predictionl = new Map([[`${predictionl.size}`, stepg.length]]);
         stepg += `${predictionl.size / (Math.max(stepg.length, 3))}`;
         backwardo -= goalO / 3;
          let dragP = 0;
          let rankp = String.fromCharCode(97,103,101,110,116,0);
          let macauV = 2.0;
         termsN += `${goalO}`;
         dragP /= Math.max((String.fromCharCode(88,0) == rankp ? rankp.length : dragP), 4);
         macauV *= parseInt(`${macauV}`);
         star9 += `${parseInt(`${progress7}`)}`;
      while (1 >= (3 >> (Math.min(1, star9.length))) || (3 >> (Math.min(1, star9.length))) >= 5) {
          let profileO = String.fromCharCode(108,105,115,116,105,110,103,0);
          let r_imageo = 0.0;
          let termsC = true;
          let internetf = String.fromCharCode(110,105,108,0);
          let collectionE = String.fromCharCode(101,97,103,101,114,0);
         star9 = `${3 >> (Math.min(5, Math.abs(parseInt(`${backwardo}`))))}`;
         profileO = `${(String.fromCharCode(75,0) == collectionE ? collectionE.length : (termsC ? 5 : 2))}`;
         r_imageo /= Math.max(2, 4);
         termsC = (collectionE.length | profileO.length) >= 95;
         internetf += `${(String.fromCharCode(48,0) == profileO ? profileO.length : internetf.length)}`;
         break;
      }
      animation5 /= Math.max(1, parseFloat(`${episodeW.length}`));
      if (championx) {
         break;
      }
   } while (championx && (!register_9N.includes(animation5)));
       let chinaR = 0.0;
       let splashZ = 0;
       let emojih = String.fromCharCode(117,110,112,114,101,109,117,108,116,105,112,108,121,0);
      while (5 >= (emojih.length & 2) || 1.60 >= (parseFloat(`${emojih.length}`) - chinaR)) {
         emojih += `${splashZ}`;
         break;
      }
       let tickedj = String.fromCharCode(115,101,103,109,101,110,116,115,0);
       let y_countC = String.fromCharCode(100,120,110,100,99,0);
         y_countC += `${tickedj.length}`;
         emojih += `${2 / (Math.max(8, y_countC.length))}`;
      if (5 >= (tickedj.length - parseInt(`${chinaR}`))) {
          let modity3 = 0.0;
          let string8 = 2;
         chinaR *= parseFloat(`${string8 + y_countC.length}`);
         modity3 += parseInt(`${modity3}`);
         string8 ^= 1;
      }
      if (5 >= (splashZ + parseInt(`${chinaR}`)) && 2.64 >= (chinaR + parseFloat(`${splashZ}`))) {
         chinaR /= Math.max(parseFloat(`${parseInt(`${chinaR}`)}`), 5);
      }
         emojih = `${parseInt(`${chinaR}`)}`;
          let modelsy = String.fromCharCode(115,121,115,105,110,102,111,0);
          let logoutP = String.fromCharCode(101,110,99,111,100,101,115,0);
         splashZ %= Math.max(splashZ, 4);
         modelsy = `${modelsy.length % (Math.max(logoutP.length, 8))}`;
         logoutP += `${modelsy.length}`;
         splashZ -= parseInt(`${chinaR}`) << (Math.min(4, Math.abs(splashZ)));
      minivod7 = `${3 << (Math.min(3, progressg.length))}`;

    const state = await NetInfo.fetch();

   for (let f = 0; f < 1; f++) {
      minivod7 += `${2 | parseInt(`${dangerQ}`)}`;
   }
      register_9N = [episodeW.length];
       let thailandi = String.fromCharCode(116,101,114,109,105,110,97,116,111,114,0);
       let station5 = 0.0;
       let j_countf = String.fromCharCode(99,111,110,116,105,103,117,111,117,115,0);
         j_countf = `${parseInt(`${station5}`) >> (Math.min(Math.abs(2), 5))}`;
         thailandi = `${(String.fromCharCode(84,0) == j_countf ? j_countf.length : parseInt(`${station5}`))}`;
         thailandi = `${j_countf.length & thailandi.length}`;
      let inviteB = 6569155 <= j_countf.length;
      do {
          let controle = false;
         j_countf += `${thailandi.length}`;
         controle = !controle || !controle;
         if (inviteB) {
            break;
         }
      } while (((2 << (Math.min(5, j_countf.length))) < 5 && (station5 - 1.37) < 3.26) && inviteB);
      while ((j_countf.length << (Math.min(Math.abs(4), 1))) < 2 || (parseInt(`${station5}`) - j_countf.length) < 4) {
         j_countf += `${parseInt(`${station5}`) ^ 2}`;
         break;
      }
      for (let d = 0; d < 3; d++) {
          let navigation7: Array<any> = [349, 143, 65];
          let ticked2 = String.fromCharCode(104,101,105,99,0);
         thailandi += `${parseInt(`${station5}`)}`;
         navigation7 = [1 | ticked2.length];
         ticked2 = `${ticked2.length}`;
      }
         j_countf = "1";
       let telegramp = true;
       let tempH = true;
         telegramp = tempH;
      dangerQ /= Math.max((parseFloat(`${String.fromCharCode(89,0) == progressg ? parseInt(`${station5}`) : progressg.length}`)), 1);
      progressg += `${minivod7.length}`;
      fillb.set(`${minivod7}`, fillb.size);
   let crownP = fillb.size >= 8058989;
   do {
       let shirtl = 4.0;
       let twitterU = String.fromCharCode(114,101,113,117,115,116,101,114,0);
      let sortQ = String.fromCharCode(119,105,102,105,116,115,0) == twitterU;
      do {
          let rulesO = 3.0;
          let selectionM = 4.0;
          let model3 = String.fromCharCode(97,100,106,117,115,116,109,101,110,116,0);
          let confirmationd: Map<any, any> = new Map([[String.fromCharCode(97,97,110,100,99,116,116,97,98,0),String.fromCharCode(109,106,112,101,103,97,0)], [String.fromCharCode(98,108,117,114,0),String.fromCharCode(117,110,108,111,99,107,0)], [String.fromCharCode(112,97,110,101,0),String.fromCharCode(110,111,109,105,110,97,116,101,0)]]);
         twitterU += `${parseInt(`${selectionM}`)}`;
         rulesO *= model3.length << (Math.min(1, Math.abs(parseInt(`${rulesO}`))));
         selectionM *= parseInt(`${rulesO}`);
         model3 = `${3 ^ confirmationd.size}`;
         confirmationd = new Map([[`${confirmationd.size}`, confirmationd.size]]);
         if (sortQ) {
            break;
         }
      } while (sortQ && (3 <= twitterU.length));
         twitterU = `${parseInt(`${shirtl}`)}`;
         shirtl *= twitterU.length * parseInt(`${shirtl}`);
       let searchbary = 0.0;
      for (let o = 0; o < 1; o++) {
         twitterU += `${2 * parseInt(`${shirtl}`)}`;
      }
         searchbary *= parseFloat(`${parseInt(`${shirtl}`) % 1}`);
      fillb.set(minivod7, minivod7.length);
      if (crownP) {
         break;
      }
   } while ((Array.from(fillb.values()).includes(dangerQ)) && crownP);
    const offline = !(state.isConnected && state.isInternetReachable);

       let description_xd: Array<any> = [647, 77];
       let canvasZ = String.fromCharCode(112,117,98,108,105,115,104,101,114,0);
         description_xd.push(canvasZ.length / 2);
       let switch_waD = String.fromCharCode(104,111,117,114,115,0);
      while (3 == (description_xd.length / 3) || (canvasZ.length / (Math.max(3, 4))) == 2) {
         canvasZ += `${description_xd.length}`;
         break;
      }
         canvasZ += `${description_xd.length << (Math.min(canvasZ.length, 1))}`;
         canvasZ = "1";
      if (switch_waD != String.fromCharCode(79,0)) {
         canvasZ += `${description_xd.length << (Math.min(switch_waD.length, 1))}`;
      }
      dangerQ += parseFloat(`${register_9N.length ^ description_xd.length}`);
   let xvodd = dangerQ <= 7618383.0;
   do {
      dangerQ /= Math.max(2, parseFloat(`${progressg.length}`));
      if (xvodd) {
         break;
      }
   } while (((parseFloat(`${fillb.size}`) + dangerQ) >= 5.27) && xvodd);
   if (1.12 >= (animation5 / 1.63)) {
      episodeW += `${1 ^ parseInt(`${dangerQ}`)}`;
   }
       let sellK = String.fromCharCode(107,100,102,0);
       let pagej = String.fromCharCode(100,101,114,105,118,97,116,105,118,101,0);
          let minivod4 = String.fromCharCode(100,101,102,108,105,99,107,101,114,0);
         sellK += `${pagej.length >> (Math.min(Math.abs(3), 4))}`;
         minivod4 = `${1 | minivod4.length}`;
         pagej += "3";
      for (let l = 0; l < 2; l++) {
         sellK += `${3 << (Math.min(2, pagej.length))}`;
      }
         sellK = `${2 * pagej.length}`;
      for (let y = 0; y < 1; y++) {
          let detailsx = String.fromCharCode(115,117,109,109,0);
          let downloadedN = 4;
          let aboutx = 3.0;
          let f_centerS = 1.0;
          let shareU: Array<any> = [621, 238, 127];
         pagej += `${(sellK == String.fromCharCode(106,0) ? sellK.length : shareU.length)}`;
         detailsx += `${detailsx.length}`;
         downloadedN -= 1;
         aboutx *= parseFloat(`${parseInt(`${f_centerS}`)}`);
         f_centerS /= Math.max(1, parseFloat(`${downloadedN + 3}`));
         shareU.push(1);
      }
         pagej = `${1 ^ sellK.length}`;
      animation5 -= (parseFloat(`${episodeW == String.fromCharCode(49,0) ? fillb.size : episodeW.length}`));
       let tempE = 2;
         tempE >>= Math.min(Math.abs(tempE), 4);
      if (2 >= (5 + tempE) && (tempE + 5) >= 2) {
         tempE *= 2;
      }
      while (3 < (tempE | 1) && (1 | tempE) < 5) {
          let historyE = String.fromCharCode(112,114,105,110,116,101,114,0);
         tempE *= tempE / (Math.max(historyE.length, 9));
         break;
      }
      dangerQ /= Math.max(parseFloat(`${parseInt(`${dangerQ}`) / 1}`), 3);
      animation5 *= parseFloat(`${2}`);
    setIsOffline(offline);

      progressg += "1";
   for (let w = 0; w < 2; w++) {
       let backgroundC: Array<any> = [946, 164];
       let componentL = String.fromCharCode(110,111,110,110,117,108,108,115,115,114,99,115,0);
       let slider9 = String.fromCharCode(97,114,99,104,101,116,121,112,101,0);
          let uploadO = String.fromCharCode(104,97,115,0);
          let backv = String.fromCharCode(97,115,115,117,109,101,0);
          let gemfileD = String.fromCharCode(122,109,98,118,0);
         componentL += `${gemfileD.length}`;
         uploadO = `${uploadO.length | 3}`;
         backv = `${2 | backv.length}`;
         gemfileD = `${uploadO.length}`;
      while (slider9.includes(`${backgroundC.length}`)) {
          let moduleX = 4.0;
          let targets = 0.0;
          let dragj = 1.0;
          let lango: Array<any> = [423, 90, 212];
          let viewer1: Array<any> = [845, 60];
         backgroundC.push(2);
         moduleX /= Math.max(1, parseFloat(`${3}`));
         targets += parseInt(`${dragj}`);
         dragj *= parseFloat(`${viewer1.length / (Math.max(2, 10))}`);
         lango = [3];
         viewer1.push(3);
         break;
      }
      if (componentL == String.fromCharCode(53,0)) {
         slider9 = `${backgroundC.length}`;
      }
      let sourceF = slider9.length <= 8595933;
      do {
          let handlerW = 0.0;
          let dragN = String.fromCharCode(117,110,116,121,112,101,100,0);
          let catagorys = 3.0;
          let questb = String.fromCharCode(100,101,99,111,109,112,114,101,115,115,105,111,110,0);
          let tumbnailc = 2;
         slider9 = `${2 | slider9.length}`;
         handlerW += parseInt(`${catagorys}`);
         dragN += `${parseInt(`${handlerW}`)}`;
         catagorys += (parseFloat(`${dragN == String.fromCharCode(51,0) ? dragN.length : tumbnailc}`));
         questb = `${dragN.length * parseInt(`${handlerW}`)}`;
         tumbnailc &= dragN.length;
         if (sourceF) {
            break;
         }
      } while ((componentL != String.fromCharCode(98,0)) && sourceF);
          let fullh: Map<any, any> = new Map([[String.fromCharCode(109,105,110,109,97,120,0),864], [String.fromCharCode(111,112,117,115,101,110,99,0),316]]);
         componentL += `${fullh.size % (Math.max(8, slider9.length))}`;
       let x_centerX: Map<any, any> = new Map([[String.fromCharCode(115,112,101,99,105,102,105,101,114,0),327], [String.fromCharCode(97,115,99,111,110,102,0),27], [String.fromCharCode(115,100,97,108,108,111,99,120,0),733]]);
         slider9 = `${slider9.length | componentL.length}`;
      let logoutD = 6210833 <= x_centerX.size;
      do {
         x_centerX.set(slider9, 1 / (Math.max(2, backgroundC.length)));
         if (logoutD) {
            break;
         }
      } while (logoutD && (!Array.from(x_centerX.keys()).includes(`${backgroundC.length}`)));
       let interstitial1 = String.fromCharCode(100,105,115,116,114,105,98,117,116,105,111,110,115,0);
       let invite8 = String.fromCharCode(114,116,109,112,101,0);
      episodeW += `${(componentL == String.fromCharCode(72,0) ? componentL.length : parseInt(`${dangerQ}`))}`;
   }
   if ((parseInt(`${dangerQ}`) + 1) >= 1 && (minivod7.length + 1) >= 3) {
      dangerQ -= (parseFloat(`${String.fromCharCode(71,0) == minivod7 ? minivod7.length : episodeW.length}`));
   }
   if (3.34 <= (1.90 + dangerQ)) {
      dangerQ -= parseFloat(`${1}`);
   }
   let promotiono = dangerQ >= 9604710.0;
   do {
       let logo8 = 4.0;
       let kickv = false;
       let policyx = 0;
       let downloadf = String.fromCharCode(112,108,117,114,97,108,105,122,97,116,105,111,110,0);
      for (let v = 0; v < 2; v++) {
          let desct = String.fromCharCode(99,111,100,101,99,112,114,105,118,0);
          let countdownV = String.fromCharCode(117,110,115,101,116,0);
          let description_799 = String.fromCharCode(116,104,114,101,115,104,111,108,100,105,110,103,0);
         downloadf = `${1 - description_799.length}`;
         desct = "1";
         countdownV = `${countdownV.length ^ 2}`;
         description_799 = `${desct.length * 2}`;
      }
         downloadf += `${policyx}`;
       let temperature0: Map<any, any> = new Map([[String.fromCharCode(101,110,99,105,112,104,101,114,0),695], [String.fromCharCode(107,101,121,119,111,114,100,0),674]]);
       let chinaT: Map<any, any> = new Map([[String.fromCharCode(119,111,114,107,115,0),747], [String.fromCharCode(99,111,108,111,114,107,101,121,0),572], [String.fromCharCode(115,108,105,112,112,97,103,101,115,0),339]]);
         chinaT.set(`${downloadf}`, 1 >> (Math.min(2, Math.abs(temperature0.size))));
      let stationi = 6871620 >= policyx;
      do {
          let firebaseH: Map<any, any> = new Map([[String.fromCharCode(108,97,110,103,117,97,103,101,115,0),304], [String.fromCharCode(115,99,97,110,120,0),977], [String.fromCharCode(112,97,103,105,110,97,116,105,111,110,0),21]]);
          let listN = true;
          let register_l4r: Map<any, any> = new Map([[String.fromCharCode(114,103,116,99,0),true ], [String.fromCharCode(115,117,98,116,114,97,99,116,0),true ]]);
          let fillU = String.fromCharCode(102,108,111,119,0);
          let modityH = String.fromCharCode(112,114,105,109,0);
         policyx %= Math.max(3, ((kickv ? 2 : 3) / (Math.max(10, parseInt(`${logo8}`)))));
         firebaseH.set(`${listN}`, (2 | (listN ? 1 : 1)));
         register_l4r.set(`${fillU}`, 3 + firebaseH.size);
         fillU = `${register_l4r.size}`;
         modityH = `${firebaseH.size * modityH.length}`;
         if (stationi) {
            break;
         }
      } while (stationi && (policyx < temperature0.size));
      for (let k = 0; k < 2; k++) {
         downloadf = "2";
      }
          let componentJ = String.fromCharCode(112,97,112,101,114,115,0);
          let questv = true;
          let pagination0 = 5.0;
         kickv = !questv;
         componentJ += `${componentJ.length % (Math.max(2, parseInt(`${pagination0}`)))}`;
         questv = (pagination0 / (Math.max(parseFloat(`${componentJ.length}`), 10))) > 76.0;
         logo8 += (parseFloat(`${chinaT.size / (Math.max(7, (kickv ? 1 : 2)))}`));
          let catagoryl = String.fromCharCode(100,101,108,101,103,97,116,111,114,0);
          let submitU = 3;
         downloadf = `${downloadf.length / (Math.max(8, parseInt(`${logo8}`)))}`;
         catagoryl = `${(catagoryl == String.fromCharCode(102,0) ? submitU : catagoryl.length)}`;
         submitU &= submitU / (Math.max(catagoryl.length, 9));
         chinaT = new Map([[downloadf, downloadf.length * parseInt(`${logo8}`)]]);
       let redirectT: Array<any> = [431, 7];
      while (5 < (chinaT.size / (Math.max(4, 4)))) {
          let firebase_ = String.fromCharCode(122,117,108,117,0);
         chinaT.set(`${policyx}`, chinaT.size * policyx);
         firebase_ = `${2 - firebase_.length}`;
         break;
      }
      dangerQ -= parseFloat(`${progressg.length}`);
      if (promotiono) {
         break;
      }
   } while (promotiono && (4 <= (parseInt(`${dangerQ}`) / (Math.max(minivod7.length, 3)))));
      episodeW += `${parseInt(`${dangerQ}`)}`;
    if (!offline) {

      register_9N.push(1 - parseInt(`${animation5}`));
   while (1 >= (4 | fillb.size) && (fillb.size | episodeW.length) >= 4) {
      episodeW = `${parseInt(`${dangerQ}`)}`;
      break;
   }
   for (let s = 0; s < 2; s++) {
       let changeV = 2.0;
      for (let n = 0; n < 1; n++) {
          let modalg = String.fromCharCode(97,110,99,104,111,114,115,0);
          let whatsappA = 4;
          let taiwanu = false;
         changeV += parseFloat(`${3 % (Math.max(parseInt(`${changeV}`), 4))}`);
         modalg = `${whatsappA}`;
         whatsappA %= Math.max(whatsappA, 2);
         taiwanu = 30 < whatsappA || taiwanu;
      }
      let about8 = changeV >= 7345812.0;
      do {
          let downloadedH: Map<any, any> = new Map([[String.fromCharCode(103,101,116,115,105,103,99,116,120,110,111,0),false ], [String.fromCharCode(100,101,99,111,109,112,114,101,115,115,101,100,0),true ]]);
          let trophyL = false;
         changeV /= Math.max(1, parseFloat(`${downloadedH.size}`));
         if (about8) {
            break;
         }
      } while ((changeV >= 3.45) && about8);
      let backgroundI = changeV <= 7847485.0;
      do {
         changeV -= parseFloat(`${parseInt(`${changeV}`) >> (Math.min(5, Math.abs(parseInt(`${changeV}`))))}`);
         if (backgroundI) {
            break;
         }
      } while ((changeV < 1.45) && backgroundI);
      episodeW = `${register_9N.length & parseInt(`${dangerQ}`)}`;
   }
       let albumZ: Array<any> = [181, 239, 674];
          let selectioni: Array<any> = [String.fromCharCode(115,111,117,114,99,101,105,100,0), String.fromCharCode(115,117,110,118,101,114,0), String.fromCharCode(116,121,111,101,0)];
          let helperp = 3.0;
         albumZ = [selectioni.length + 2];
         selectioni.push(parseInt(`${helperp}`) | 3);
         helperp /= Math.max(3, parseInt(`${helperp}`));
      while (!albumZ.includes(albumZ.length)) {
          let sourceJ = 0.0;
         albumZ.push(parseInt(`${sourceJ}`));
         break;
      }
      if (1 < (2 & albumZ.length)) {
         albumZ = [2 << (Math.min(3, albumZ.length))];
      }
      register_9N.push((minivod7 == String.fromCharCode(69,0) ? minivod7.length : episodeW.length));
      episodeW += "2";
      dangerQ -= parseFloat(`${episodeW.length}`);
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
       let acceptedJ: Array<any> = [623, 79, 329];
    let point7: Array<any> = [339, 17, 416];
    let searchD: Array<any> = [97, 569];
    let ajaxO = String.fromCharCode(99,108,101,97,114,0);
    let updatesj = String.fromCharCode(115,112,105,110,0);
    let liver = String.fromCharCode(105,110,116,101,110,116,115,0);
    let inviteG = 3.0;
    let footballS = 3.0;
    let humidityJ = 3.0;
    let halfd = 3;
    let promotionj = 5.0;
    let window_gu = String.fromCharCode(104,105,115,116,111,114,121,0);
    let greyu: Map<any, any> = new Map([[String.fromCharCode(116,105,99,107,105,110,103,0),String.fromCharCode(115,101,114,118,105,99,101,0)], [String.fromCharCode(100,105,97,103,0),String.fromCharCode(100,105,115,115,105,109,105,108,97,114,105,116,121,0)], [String.fromCharCode(109,105,115,115,101,115,0),String.fromCharCode(118,101,99,116,0)]]);
    let firebasey: Map<any, any> = new Map([[String.fromCharCode(105,108,108,117,109,105,110,97,116,105,111,110,0),666], [String.fromCharCode(113,115,99,97,108,101,0),171]]);
    let cast63: Map<any, any> = new Map([[String.fromCharCode(110,97,110,0),true ], [String.fromCharCode(112,97,105,110,116,105,110,103,0),false ], [String.fromCharCode(114,101,108,97,116,105,118,101,0),true ]]);
   let group4 = 6681979 >= point7.length;
   do {
       let transferc = 5.0;
       let bing9 = String.fromCharCode(100,111,119,110,108,111,97,100,115,0);
       let userj = String.fromCharCode(101,99,114,101,99,111,118,101,114,0);
         bing9 = `${parseInt(`${transferc}`) - 3}`;
       let twitter9 = String.fromCharCode(112,108,117,103,105,110,0);
      if (bing9.length >= userj.length) {
         bing9 = `${bing9.length}`;
      }
         bing9 += `${(userj == String.fromCharCode(53,0) ? userj.length : parseInt(`${transferc}`))}`;
       let lessN = String.fromCharCode(98,111,117,110,100,97,108,108,0);
       let network6 = String.fromCharCode(119,101,101,107,100,97,121,0);
         userj += `${3 - network6.length}`;
      if (userj.startsWith(`${transferc}`)) {
         userj = `${network6.length - 1}`;
      }
         bing9 += `${twitter9.length}`;
      let vignetteK = String.fromCharCode(103,119,107,112,0) == network6;
      do {
         network6 = `${network6.length * 2}`;
         if (vignetteK) {
            break;
         }
      } while ((1 > (network6.length & 2) || 2.22 > (transferc + 4.72)) && vignetteK);
      point7 = [2 - bing9.length];
      if (group4) {
         break;
      }
   } while (group4 && (!window_gu.includes(`${point7.length}`)));
      footballS /= Math.max((parseFloat(`${updatesj == String.fromCharCode(72,0) ? updatesj.length : window_gu.length}`)), 5);
      inviteG /= Math.max(3, 3);
       let default_byB: Array<any> = [String.fromCharCode(109,111,117,115,0), String.fromCharCode(114,101,118,111,107,97,98,108,101,0), String.fromCharCode(99,97,114,116,0)];
      if (!default_byB.includes(default_byB.length)) {
         default_byB = [1 + default_byB.length];
      }
      while (5 == (default_byB.length / 4)) {
         default_byB = [default_byB.length];
         break;
      }
         default_byB.push(3 << (Math.min(4, default_byB.length)));
      inviteG += parseInt(`${footballS}`);
   for (let t = 0; t < 3; t++) {
      liver += `${window_gu.length & halfd}`;
   }
       let robotoB: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,114,115,101,99,116,115,0),429], [String.fromCharCode(115,117,98,113,117,101,114,121,0),131]]);
       let auto_jx2 = 2.0;
       let redirectN = 3.0;
      if (4 == (4 + robotoB.size) && 4 == (robotoB.size - parseInt(`${auto_jx2}`))) {
          let chinag: Map<any, any> = new Map([[String.fromCharCode(102,108,111,97,116,0),708], [String.fromCharCode(105,110,100,101,120,105,110,103,0),642], [String.fromCharCode(102,95,56,48,0),262]]);
          let string8 = false;
         auto_jx2 -= 3 % (Math.max(2, parseInt(`${auto_jx2}`)));
         chinag = new Map([[`${chinag.size}`, 3]]);
         string8 = chinag.get(`${string8}`) != null;
      }
      while ((redirectN - 2.40) > 5.62 && (parseInt(`${redirectN}`) - robotoB.size) > 1) {
          let single6: Array<any> = [506, 395];
          let detailsc = String.fromCharCode(116,114,97,110,115,109,105,115,115,105,111,110,0);
          let buttonC: Array<any> = [747, 59];
          let o_viewr = String.fromCharCode(112,114,111,109,111,116,105,110,103,0);
         redirectN -= (parseFloat(`${String.fromCharCode(57,0) == detailsc ? single6.length : detailsc.length}`));
         single6 = [2];
         buttonC = [1];
         o_viewr += `${o_viewr.length}`;
         break;
      }
         auto_jx2 *= parseInt(`${redirectN}`);
      let combinedt = auto_jx2 >= 4984189.0;
      do {
         auto_jx2 /= Math.max(2, 3 | robotoB.size);
         if (combinedt) {
            break;
         }
      } while (((redirectN - auto_jx2) == 4.9) && combinedt);
         auto_jx2 += 3 - robotoB.size;
      for (let w = 0; w < 3; w++) {
         auto_jx2 -= parseInt(`${redirectN}`);
      }
      for (let a = 0; a < 2; a++) {
         robotoB.set(`${auto_jx2}`, 2 / (Math.max(5, robotoB.size)));
      }
          let alertK = String.fromCharCode(103,117,105,100,115,0);
         redirectN += parseFloat(`${parseInt(`${redirectN}`) + 3}`);
         alertK += `${alertK.length | 2}`;
         redirectN -= parseFloat(`${parseInt(`${redirectN}`) & 2}`);
      ajaxO = `${parseInt(`${auto_jx2}`) - 1}`;
   for (let m = 0; m < 2; m++) {
       let gestureN: Array<any> = [String.fromCharCode(102,97,108,108,98,97,99,107,0), String.fromCharCode(112,114,101,102,101,116,99,104,0)];
       let footballB = String.fromCharCode(115,101,101,107,105,110,103,0);
       let lightY: Map<any, any> = new Map([[String.fromCharCode(120,109,117,108,116,0),66], [String.fromCharCode(98,108,117,114,108,101,115,115,0),793], [String.fromCharCode(114,101,116,114,105,101,115,0),466]]);
       let popupN = 5.0;
         gestureN.push(1);
      for (let o = 0; o < 3; o++) {
          let u_centerH = 0.0;
          let analytic6 = String.fromCharCode(105,110,99,108,117,100,101,0);
          let awayx = 0.0;
          let buttonc = 5.0;
         lightY.set(`${awayx}`, analytic6.length);
         u_centerH += parseFloat(`${2}`);
         analytic6 += `${parseInt(`${buttonc}`)}`;
         awayx += parseInt(`${buttonc}`);
      }
         popupN *= parseInt(`${popupN}`) & 2;
      let strT = 7042559 >= gestureN.length;
      do {
          let constantsH = 1;
          let condensedV = String.fromCharCode(109,111,100,110,112,102,0);
          let buttonv = String.fromCharCode(116,114,97,110,115,117,112,112,0);
          let activei = true;
         gestureN.push(footballB.length * constantsH);
         constantsH ^= buttonv.length | condensedV.length;
         condensedV = `${condensedV.length * buttonv.length}`;
         activei = condensedV.length == 65;
         if (strT) {
            break;
         }
      } while ((2 < (footballB.length / (Math.max(3, 8)))) && strT);
      if (footballB.length > gestureN.length) {
         footballB += `${gestureN.length}`;
      }
         lightY = new Map([[`${gestureN.length}`, footballB.length]]);
         popupN *= lightY.size - parseInt(`${popupN}`);
      if (!Array.from(lightY.values()).includes(popupN)) {
         lightY.set(`${footballB}`, footballB.length);
      }
         footballB += `${parseInt(`${popupN}`) + 1}`;
         lightY = new Map([[`${lightY.size}`, parseInt(`${popupN}`)]]);
         popupN /= Math.max(5, 3 << (Math.min(5, footballB.length)));
         lightY.set(`${footballB}`, footballB.length & 3);
      updatesj = `${gestureN.length}`;
   }
   for (let m = 0; m < 1; m++) {
      footballS *= parseFloat(`${3 * parseInt(`${promotionj}`)}`);
   }
      searchD = [updatesj.length & 2];
   if (searchD.length <= window_gu.length) {
       let hookJ = false;
       let historyp = 5.0;
       let muted0 = true;
       let mutedB: Map<any, any> = new Map([[String.fromCharCode(99,111,109,112,111,115,101,114,0),String.fromCharCode(115,97,108,116,115,0)], [String.fromCharCode(114,101,99,118,102,114,111,109,0),String.fromCharCode(99,114,111,112,112,105,110,103,0)]]);
         muted0 = 34.40 > historyp || muted0;
      let otherx = hookJ ? !hookJ : hookJ;
      do {
          let launchz: Map<any, any> = new Map([[String.fromCharCode(107,102,119,114,105,116,101,0),655], [String.fromCharCode(114,101,102,101,114,114,97,108,0),271], [String.fromCharCode(105,115,97,99,0),453]]);
         hookJ = muted0 || historyp < 75.84;
         launchz.set(`${launchz.size}`, launchz.size ^ 3);
         if (otherx) {
            break;
         }
      } while (otherx && (5 > (mutedB.size / (Math.max(5, 3)))));
      if ((2 / (Math.max(7, mutedB.size))) == 1) {
         hookJ = (!muted0 ? hookJ : muted0);
      }
      for (let l = 0; l < 3; l++) {
         muted0 = !hookJ && historyp <= 4.77;
      }
          let analytic5 = String.fromCharCode(117,115,101,114,110,97,109,101,0);
          let nterstitial9 = String.fromCharCode(108,111,110,103,0);
         mutedB.set(nterstitial9, 3);
         analytic5 = `${analytic5.length % 1}`;
         nterstitial9 = `${analytic5.length | analytic5.length}`;
         mutedB.set(`${muted0}`, parseInt(`${historyp}`) - 1);
      while (3 <= (3 + mutedB.size) || 3 <= mutedB.size) {
          let trashj: Array<any> = [591, 517, 73];
          let friendsh: Array<any> = [632, 748];
         mutedB.set(`${hookJ}`, 1);
         trashj.push(trashj.length / 3);
         friendsh = [2];
         break;
      }
      while (hookJ) {
         hookJ = historyp >= 67.69;
         break;
      }
      if ((5.98 * historyp) < 5.54 || historyp < 5.98) {
         historyp *= parseFloat(`${1 << (Math.min(Math.abs(parseInt(`${historyp}`)), 4))}`);
      }
      let sheetE = hookJ ? !hookJ : hookJ;
      do {
         hookJ = parseFloat(`${mutedB.size}`) < historyp;
         if (sheetE) {
            break;
         }
      } while ((!muted0) && sheetE);
         mutedB = new Map([[`${mutedB.size}`, parseInt(`${historyp}`)]]);
         hookJ = historyp > 62.75 && 90 > mutedB.size;
      window_gu = `${parseInt(`${historyp}`)}`;
   }

    setIsRefreshing(true);

   if ((window_gu.length >> (Math.min(Math.abs(1), 4))) == 1) {
       let minimizeq: Map<any, any> = new Map([[String.fromCharCode(101,99,114,101,100,0),String.fromCharCode(103,114,97,112,104,105,99,0)], [String.fromCharCode(116,97,99,107,0),String.fromCharCode(115,101,99,0)]]);
         minimizeq = new Map([[`${minimizeq.size}`, minimizeq.size ^ 2]]);
      let robotoZ = minimizeq.size >= 8990554;
      do {
          let mutedA = 5.0;
         minimizeq = new Map([[`${minimizeq.size}`, parseInt(`${mutedA}`)]]);
         if (robotoZ) {
            break;
         }
      } while ((1 >= (minimizeq.size | minimizeq.size)) && robotoZ);
      for (let h = 0; h < 1; h++) {
          let slideri = String.fromCharCode(115,99,97,109,0);
          let combinea = 1;
         minimizeq = new Map([[slideri, combinea & slideri.length]]);
      }
      window_gu = `${window_gu.length >> (Math.min(1, liver.length))}`;
   }
   for (let e = 0; e < 1; e++) {
      inviteG += parseInt(`${footballS}`) + updatesj.length;
   }
   while (inviteG < 2.26) {
       let rightD = 2.0;
         rightD /= Math.max(2, 2 ^ parseInt(`${rightD}`));
      for (let r = 0; r < 1; r++) {
          let settingsj = 3.0;
          let short_rG = 4.0;
         rightD += parseInt(`${settingsj}`) - 1;
         settingsj += parseFloat(`${parseInt(`${short_rG}`) * parseInt(`${short_rG}`)}`);
      }
      let minivodt = rightD <= 7909464.0;
      do {
         rightD /= Math.max(2, parseInt(`${rightD}`));
         if (minivodt) {
            break;
         }
      } while (((4.96 / (Math.max(5, rightD))) <= 5.75 && 4.96 <= (rightD / (Math.max(7, rightD)))) && minivodt);
      inviteG *= parseInt(`${rightD}`);
      break;
   }
      searchD.push(3 & parseInt(`${inviteG}`));
      halfd /= Math.max(1, 4);
      ajaxO += "1";
      inviteG /= Math.max((updatesj == String.fromCharCode(72,0) ? updatesj.length : window_gu.length), 1);
      window_gu += `${searchD.length << (Math.min(4, Math.abs(parseInt(`${humidityJ}`))))}`;
      window_gu = `${liver.length / (Math.max(3, 4))}`;
   for (let q = 0; q < 3; q++) {
       let emptyP = String.fromCharCode(118,101,99,116,111,114,115,99,111,112,101,0);
       let mutedo = 4.0;
       let setting_ = String.fromCharCode(110,101,120,116,0);
       let rankh = 2.0;
         emptyP += `${setting_.length}`;
      while (4.77 <= (rankh / (Math.max(3.4, 7)))) {
          let twitter_ = String.fromCharCode(99,111,112,116,115,0);
          let questz = String.fromCharCode(99,111,109,109,117,116,101,0);
          let invitec = String.fromCharCode(101,120,112,101,114,105,109,101,110,116,0);
          let favoriter = String.fromCharCode(115,111,98,105,110,100,0);
         rankh += parseFloat(`${emptyP.length >> (Math.min(Math.abs(1), 5))}`);
         twitter_ = `${invitec.length}`;
         questz += `${(String.fromCharCode(89,0) == favoriter ? invitec.length : favoriter.length)}`;
         break;
      }
      for (let f = 0; f < 1; f++) {
         rankh += (parseFloat(`${String.fromCharCode(48,0) == setting_ ? parseInt(`${rankh}`) : setting_.length}`));
      }
       let gmailM = true;
         mutedo -= 2;
          let with_5r = String.fromCharCode(109,110,101,109,111,110,105,99,0);
          let morey = 2.0;
          let volume4 = 2;
         mutedo *= setting_.length;
         with_5r = `${(String.fromCharCode(107,0) == with_5r ? with_5r.length : parseInt(`${morey}`))}`;
         morey -= with_5r.length;
         volume4 <<= Math.min(4, Math.abs(parseInt(`${morey}`)));
          let leftY: Array<any> = [423, 915, 900];
          let vertical5 = String.fromCharCode(103,101,111,108,111,99,97,116,105,111,110,0);
         setting_ = `${3 << (Math.min(2, setting_.length))}`;
         leftY = [3 - leftY.length];
         vertical5 = `${leftY.length ^ vertical5.length}`;
      if ((mutedo / (Math.max(2, rankh))) == 3.64 || (3.64 / (Math.max(4, rankh))) == 5.12) {
         mutedo /= Math.max(setting_.length, 4);
      }
      while ((mutedo / 4.48) <= 4.6) {
          let popup9 = 0.0;
          let downD = 1.0;
          let combinedn = String.fromCharCode(115,116,97,114,116,117,112,0);
          let philippinesb: Array<any> = [String.fromCharCode(116,114,97,110,115,112,111,115,101,0), String.fromCharCode(100,111,108,98,121,0), String.fromCharCode(99,112,120,0)];
         setting_ = `${3 & parseInt(`${mutedo}`)}`;
         popup9 *= parseFloat(`${1}`);
         downD /= Math.max(2, 4);
         combinedn += "3";
         philippinesb = [3];
         break;
      }
      for (let g = 0; g < 1; g++) {
          let searchbarb = String.fromCharCode(109,117,108,104,105,0);
          let google1 = String.fromCharCode(110,111,110,110,117,108,108,99,111,110,116,101,110,116,115,0);
          let readM = String.fromCharCode(97,115,115,111,99,105,97,116,105,111,110,115,0);
          let emojiN = 0.0;
         setting_ = `${parseInt(`${rankh}`)}`;
         searchbarb = `${3 | google1.length}`;
         google1 = `${parseInt(`${emojiN}`) >> (Math.min(Math.abs(3), 2))}`;
         readM = `${readM.length}`;
         emojiN -= readM.length;
      }
         mutedo -= parseInt(`${mutedo}`) << (Math.min(1, Math.abs(1)));
      let interstitial5 = mutedo >= 4933217.0;
      do {
          let filedz = 1;
          let bootsplashm = 5.0;
          let headerZ = String.fromCharCode(97,109,117,108,116,105,0);
         mutedo /= Math.max(emptyP.length, 5);
         filedz &= 2;
         bootsplashm += parseFloat(`${2}`);
         headerZ = `${headerZ.length ^ parseInt(`${bootsplashm}`)}`;
         if (interstitial5) {
            break;
         }
      } while ((2 >= (emptyP.length / (Math.max(5, 10))) && 4.79 >= (mutedo - 1.84)) && interstitial5);
      footballS /= Math.max(4, parseFloat(`${2 & parseInt(`${footballS}`)}`));
   }
    

   let j_titlel = window_gu.length <= 8596558;
   do {
      window_gu = `${acceptedJ.length}`;
      if (j_titlel) {
         break;
      }
   } while (j_titlel && ((window_gu.length - 2) > 1 && (parseInt(`${promotionj}`) * 2) > 4));
   while (1 == (4 & searchD.length) || (searchD.length & 4) == 2) {
      liver += `${greyu.size / (Math.max(1, 8))}`;
      break;
   }
   if ((acceptedJ.length % 4) <= 1 || 4 <= (acceptedJ.length % 4)) {
       let miniv: Map<any, any> = new Map([[String.fromCharCode(114,101,110,100,101,114,98,117,102,102,101,114,0),184], [String.fromCharCode(117,112,112,101,114,99,97,115,101,0),858]]);
       let main_wb = String.fromCharCode(118,97,108,105,100,97,116,101,0);
         miniv = new Map([[`${miniv.size}`, main_wb.length ^ 2]]);
       let borderlessl = false;
         borderlessl = miniv.size > 57 && borderlessl;
         borderlessl = (main_wb.length | miniv.size) < 53;
          let launch_: Map<any, any> = new Map([[String.fromCharCode(105,112,99,0),134], [String.fromCharCode(115,104,101,108,108,0),665], [String.fromCharCode(115,105,116,101,0),323]]);
          let annerx: Array<any> = [34, 322, 898];
         borderlessl = 46 == launch_.size || 46 == annerx.length;
      if (borderlessl) {
         borderlessl = !borderlessl || main_wb.length < 43;
      }
      acceptedJ = [parseInt(`${footballS}`) ^ 2];
   }
      promotionj += liver.length / 2;
   if ((liver.length + parseInt(`${promotionj}`)) <= 5 || 2.8 <= (promotionj + liver.length)) {
      liver = `${searchD.length * 2}`;
   }
   while ((firebasey.size << (Math.min(Math.abs(4), 2))) >= 2) {
      point7.push((String.fromCharCode(90,0) == updatesj ? updatesj.length : firebasey.size));
      break;
   }
   for (let a = 0; a < 3; a++) {
       let cast6 = String.fromCharCode(114,100,98,120,0);
       let pressureK = 2.0;
      for (let r = 0; r < 1; r++) {
         pressureK -= parseInt(`${pressureK}`) & cast6.length;
      }
      while ((pressureK / 2.4) > 5.43 && (cast6.length + 4) > 3) {
          let previewU = String.fromCharCode(100,101,97,99,116,105,118,97,116,101,100,0);
          let with_iiq = String.fromCharCode(116,111,107,101,110,100,0);
         pressureK -= (previewU == String.fromCharCode(102,0) ? previewU.length : parseInt(`${pressureK}`));
         with_iiq = `${with_iiq.length}`;
         break;
      }
      while (5.83 <= (pressureK * cast6.length) && (cast6.length * pressureK) <= 5.83) {
         pressureK /= Math.max(1, cast6.length % (Math.max(1, 9)));
         break;
      }
      let dicep = 5317549 >= cast6.length;
      do {
         cast6 += `${1 & cast6.length}`;
         if (dicep) {
            break;
         }
      } while (dicep && (cast6.length <= 1));
      for (let p = 0; p < 3; p++) {
          let greend = String.fromCharCode(112,117,115,104,101,100,0);
          let internetZ = String.fromCharCode(104,111,110,101,0);
          let current7 = 5;
         cast6 += `${(greend == String.fromCharCode(53,0) ? greend.length : parseInt(`${pressureK}`))}`;
         internetZ = `${internetZ.length}`;
         current7 >>= Math.min(Math.abs((internetZ == String.fromCharCode(97,0) ? internetZ.length : current7)), 5);
      }
      while (!cast6.endsWith(`${pressureK}`)) {
         cast6 = "1";
         break;
      }
      ajaxO = `${parseInt(`${inviteG}`)}`;
   }
   if (window_gu.length == 2) {
      updatesj += `${searchD.length}`;
   }
   while ((humidityJ + 3.80) >= 1.77) {
       let fastforwardH = 2.0;
       let firebaseo = String.fromCharCode(100,111,99,105,100,115,0);
       let launcht = String.fromCharCode(105,110,115,116,114,117,109,101,110,116,97,116,105,111,110,0);
      if (1 < (parseInt(`${fastforwardH}`) + firebaseo.length) || 1 < (firebaseo.length + parseInt(`${fastforwardH}`))) {
          let whistleH = 4;
         fastforwardH -= (String.fromCharCode(103,0) == firebaseo ? firebaseo.length : launcht.length);
         whistleH /= Math.max(whistleH, 4);
      }
      let slidera = String.fromCharCode(120,48,114,119,48,51,112,119,112,49,0) == launcht;
      do {
         launcht = `${(String.fromCharCode(84,0) == firebaseo ? launcht.length : firebaseo.length)}`;
         if (slidera) {
            break;
         }
      } while (slidera && ((fastforwardH + launcht.length) < 4.36));
      while (2.23 < (fastforwardH / 4.78) && 4.78 < (firebaseo.length / (Math.max(2, fastforwardH)))) {
         firebaseo = `${parseInt(`${fastforwardH}`) | launcht.length}`;
         break;
      }
         launcht = `${1 - parseInt(`${fastforwardH}`)}`;
      while (2 > (firebaseo.length + parseInt(`${fastforwardH}`))) {
          let selectG = 3;
          let bottomL: Array<any> = [856, 713];
          let default_psa: Array<any> = [69, 77];
         fastforwardH *= selectG;
         selectG >>= Math.min(Math.abs(2 + default_psa.length), 1);
         bottomL = [2];
         default_psa.push(1);
         break;
      }
         firebaseo += "1";
      while (4 == (2 + firebaseo.length)) {
         firebaseo += `${firebaseo.length ^ launcht.length}`;
         break;
      }
      let private_lf = 8358228.0 <= fastforwardH;
      do {
         fastforwardH *= firebaseo.length;
         if (private_lf) {
            break;
         }
      } while (private_lf && (!launcht.includes(`${fastforwardH}`)));
      if (launcht.length <= parseInt(`${fastforwardH}`)) {
         fastforwardH -= 3;
      }
      humidityJ += 3;
      break;
   }
      point7.push(1);
    await refetch();

   let m_unlocky = 5133784 <= window_gu.length;
   do {
      window_gu = `${greyu.size >> (Math.min(Math.abs(1), 3))}`;
      if (m_unlocky) {
         break;
      }
   } while ((promotionj > window_gu.length) && m_unlocky);
      firebasey = new Map([[`${promotionj}`, 2 | parseInt(`${promotionj}`)]]);
      acceptedJ = [halfd];
   if (5 < (searchD.length << (Math.min(Math.abs(4), 2))) || 4 < (searchD.length << (Math.min(window_gu.length, 2)))) {
      window_gu += `${firebasey.size}`;
   }
   for (let o = 0; o < 2; o++) {
      humidityJ /= Math.max(2, halfd / 3);
   }
       let hooksk = String.fromCharCode(98,101,108,108,0);
       let room5: Map<any, any> = new Map([[String.fromCharCode(109,97,107,101,100,112,107,103,0),676], [String.fromCharCode(115,97,119,0),505]]);
          let fastn = 3.0;
         hooksk += `${(hooksk == String.fromCharCode(87,0) ? room5.size : hooksk.length)}`;
         fastn *= parseFloat(`${parseInt(`${fastn}`) | parseInt(`${fastn}`)}`);
          let time_iZ = 2.0;
          let savei = 3.0;
          let untick7: Map<any, any> = new Map([[String.fromCharCode(120,104,116,109,108,0),342], [String.fromCharCode(102,102,112,108,97,121,0),832]]);
         hooksk = `${room5.size}`;
         time_iZ /= Math.max(1, parseFloat(`${1 & untick7.size}`));
         savei /= Math.max(5, parseFloat(`${untick7.size | parseInt(`${time_iZ}`)}`));
          let gestureV = 5;
         room5.set(hooksk, gestureV);
         room5 = new Map([[`${room5.size}`, hooksk.length]]);
          let rulesG = 5.0;
          let clockW = String.fromCharCode(102,105,120,116,117,114,101,115,0);
          let placeholderM = 2.0;
         hooksk = `${3 * parseInt(`${rulesG}`)}`;
         rulesG /= Math.max(parseFloat(`${clockW.length % 2}`), 5);
         clockW += `${clockW.length << (Math.min(1, Math.abs(parseInt(`${placeholderM}`))))}`;
         placeholderM *= parseInt(`${placeholderM}`);
         hooksk += `${hooksk.length}`;
      acceptedJ = [liver.length + 2];
   for (let z = 0; z < 3; z++) {
      searchD.push(updatesj.length);
   }
   while ((searchD.length << (Math.min(ajaxO.length, 1))) > 1 && 1 > (searchD.length << (Math.min(ajaxO.length, 2)))) {
      ajaxO = `${halfd + 3}`;
      break;
   }
      greyu.set(liver, 2);
       let incident7 = false;
      let refreshw = incident7 ? !incident7 : incident7;
      do {
         incident7 = !incident7;
         if (refreshw) {
            break;
         }
      } while ((incident7) && refreshw);
       let back2 = true;
       let thumbnailD = true;
      while (!back2) {
          let buttonT = 3.0;
          let buffer3 = String.fromCharCode(97,99,99,101,108,101,114,97,116,105,111,110,0);
          let guide9 = String.fromCharCode(98,114,105,100,103,101,97,98,108,101,0);
         thumbnailD = guide9 == buffer3;
         buttonT *= parseFloat(`${parseInt(`${buttonT}`) | parseInt(`${buttonT}`)}`);
         buffer3 = `${parseInt(`${buttonT}`)}`;
         break;
      }
      humidityJ += point7.length;
    setIsRefreshing(false);

      searchD.push(searchD.length / (Math.max(1, firebasey.size)));
   let icont = String.fromCharCode(48,120,114,52,122,120,107,57,0) == window_gu;
   do {
      window_gu += `${parseInt(`${humidityJ}`) / 1}`;
      if (icont) {
         break;
      }
   } while (icont && ((window_gu.length - parseInt(`${inviteG}`)) > 3 && 2 > (3 - window_gu.length)));
      inviteG += 2 - parseInt(`${humidityJ}`);
      ajaxO += `${halfd}`;
      firebasey.set(`${searchD.length}`, 3 >> (Math.min(1, searchD.length)));
   if ((acceptedJ.length + 3) > 2 || (acceptedJ.length + 3) > 5) {
      ajaxO += `${2 >> (Math.min(1, Math.abs(firebasey.size)))}`;
   }
      acceptedJ.push(3 * searchD.length);
   for (let q = 0; q < 3; q++) {
      updatesj = `${acceptedJ.length}`;
   }
   if (!ajaxO.includes(`${point7.length}`)) {
       let header1 = 1;
       let active_ = 4.0;
       let greenn: Map<any, any> = new Map([[String.fromCharCode(109,99,100,101,99,0),55], [String.fromCharCode(109,111,115,116,0),187], [String.fromCharCode(109,118,112,114,101,100,0),515]]);
       let uploadO: Map<any, any> = new Map([[String.fromCharCode(104,101,108,112,101,114,115,0),false ], [String.fromCharCode(99,100,99,105,0),true ], [String.fromCharCode(112,97,99,107,101,116,111,117,116,0),true ]]);
       let blacklistC = true;
         active_ *= (parseFloat(`${greenn.size ^ (blacklistC ? 3 : 4)}`));
      if (active_ >= parseFloat(`${uploadO.size}`)) {
         uploadO = new Map([[`${uploadO.size}`, uploadO.size]]);
      }
          let dropdownL = String.fromCharCode(101,115,99,97,112,101,0);
         active_ += parseFloat(`${2 * greenn.size}`);
         dropdownL += `${2 >> (Math.min(3, dropdownL.length))}`;
      let emojiH = 5412497 <= greenn.size;
      do {
         greenn.set(`${blacklistC}`, greenn.size);
         if (emojiH) {
            break;
         }
      } while ((greenn.get(`${header1}`) == null) && emojiH);
       let telegramg = String.fromCharCode(105,110,116,101,114,112,111,108,97,116,111,114,115,0);
       let tickedX = String.fromCharCode(116,114,97,110,115,105,116,105,111,110,105,110,103,0);
          let dropdownm = 4;
          let combineZ = String.fromCharCode(115,109,97,108,108,101,115,116,0);
         tickedX += `${telegramg.length}`;
         dropdownm += (String.fromCharCode(87,0) == combineZ ? dropdownm : combineZ.length);
       let forward2 = String.fromCharCode(109,101,115,115,97,103,101,0);
         tickedX = `${parseInt(`${active_}`) + tickedX.length}`;
         tickedX += `${greenn.size >> (Math.min(1, Math.abs(parseInt(`${active_}`))))}`;
       let backe = 2.0;
         backe *= parseFloat(`${parseInt(`${active_}`)}`);
          let arrowz: Map<any, any> = new Map([[String.fromCharCode(102,109,116,112,0),313], [String.fromCharCode(122,98,105,110,0),634]]);
         header1 %= Math.max(4, 1 + telegramg.length);
         arrowz.set(`${arrowz.size}`, arrowz.size);
       let recommendationB = true;
       let expandA = true;
          let i_positionw: Array<any> = [755, 403];
         uploadO = new Map([[`${greenn.size}`, tickedX.length]]);
         i_positionw = [2];
          let specP = String.fromCharCode(101,110,115,0);
          let guide3: Array<any> = [981, 771, 143];
          let submitm = String.fromCharCode(99,108,111,117,100,0);
         forward2 += `${parseInt(`${active_}`) & 2}`;
         specP = `${guide3.length}`;
         guide3 = [submitm.length | guide3.length];
         submitm = `${specP.length << (Math.min(1, guide3.length))}`;
      ajaxO = `${liver.length}`;
   }
   if (updatesj.length <= ajaxO.length) {
       let searchq: Array<any> = [String.fromCharCode(101,118,112,111,114,116,111,112,0), String.fromCharCode(115,117,109,120,0)];
      if (1 > (searchq.length >> (Math.min(4, searchq.length))) && (searchq.length >> (Math.min(2, searchq.length))) > 1) {
         searchq = [3];
      }
      if (searchq.length < 5) {
          let bodanw = String.fromCharCode(109,101,109,109,103,114,0);
          let castingT = 5;
          let listZ = String.fromCharCode(112,105,120,101,108,115,120,0);
          let gmaill: Array<any> = [564, 343];
         searchq = [1 * searchq.length];
         bodanw = `${gmaill.length}`;
         castingT <<= Math.min(Math.abs(listZ.length << (Math.min(Math.abs(1), 1))), 1);
         listZ += `${listZ.length % 2}`;
         gmaill.push(listZ.length);
      }
         searchq = [2 | searchq.length];
      updatesj = `${window_gu.length * halfd}`;
   }
    return;
  }, []);

  return (
    <ScreenContainer containerStyle={{ paddingLeft: 0, paddingRight: 0 }}>
      <BecomeVipOverlay
        setShowBecomeVIPOverlay={setShowBecomeVIPOverlay}
        showBecomeVIPOverlay={showBecomeVIPOverlay}
        selectedTab="catagoryConfigure"
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
          activeOpacity={!KWConstants.isVip(userState.user)
            ? 0.5
            : 1
          }
          onPress={() => {
            if (!KWConstants.isVip(userState.user)) {
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
              source={require("@static/images/profile/saveAnalyticsGpay.png")}
            />

            {!KWConstants.isVip(userState.user) ? (
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
