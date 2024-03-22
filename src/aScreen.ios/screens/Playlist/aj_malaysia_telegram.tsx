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
import ScreenContainer from "../../components/container/ypy_fast";
import MainHeader from "../../components/header/tae_refresh_header";
import {
  useFocusEffect,
  useNavigation,
  useTheme,
} from "@react-navigation/native";
import { useInfiniteQuery } from "@tanstack/react-query";
import { LDGray, RBEmojiEwarded } from "@type/wpk_long";
import VodPlaylist from "../../components/playlist/ki_gift_zhubo";
import {
  BottomTabScreenProps,
  useBottomTabBarHeight,
} from "@react-navigation/bottom-tabs";
import { API_DOMAIN } from "@utility/n_subs_interstitial";
import FastImage from "../../components/common/gwi_with";
import { useIsFocused } from "@react-navigation/native";
import NoConnection from "./../../components/common/nyr_animation_langkey";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";
import { GBYMiniCanvas } from "@redux/reducers/t_types";
import { PSmall } from "@redux/fj_prediction_thailand";
import { useAppSelector } from "@hooks/kg_index";
import umb_center_carousel from "../../../../Umeng/umb_center_carousel";
import { RLarge } from "@api";
import VodWithDescriptionListRank from "../../../components/vod/hc_index_shared";

type MEYMode = {
  item: any;
  index: number;
};

function Rank() {
       let championW = 4.0;
    let navigation9: Array<any> = [706, 80, 239];
    let launchN = String.fromCharCode(109,95,49,50,95,114,101,112,0);
    let benefitv = 5;
    let emptyO = String.fromCharCode(97,98,99,115,95,101,95,54,0);
    let connectionW = String.fromCharCode(117,114,98,103,95,102,95,57,48,0);
    let pingV = String.fromCharCode(99,95,50,56,95,110,105,101,108,115,97,100,100,0);
    let pingJ: Map<any, any> = new Map([[String.fromCharCode(101,95,49,50,95,100,101,116,97,105,108,115,0),true ], [String.fromCharCode(100,95,50,54,95,97,114,116,105,99,108,101,0),false ], [String.fromCharCode(99,117,116,111,117,116,95,56,95,54,48,0),true ]]);
    let formC: Map<any, any> = new Map([[String.fromCharCode(100,95,55,54,0),685], [String.fromCharCode(111,118,101,114,114,105,100,101,115,95,106,95,51,51,0),230], [String.fromCharCode(102,95,57,57,95,97,103,97,105,110,0),185]]);
    let middleware7 = String.fromCharCode(114,101,115,101,116,95,99,95,55,52,0);
    let download4 = String.fromCharCode(99,95,52,50,95,111,112,116,115,0);
      connectionW += `${navigation9.length - pingJ.size}`;

  const navigation = useNavigation();

   let styleP = 7438640 <= navigation9.length;
   do {
       let fullY = 2.0;
       let shareO = 2.0;
       let eventQ = 1;
       let shootv = 5.0;
       let ajaxQ = true;
       let orange0 = true;
         shootv /= Math.max(5, eventQ);
          let skipH = String.fromCharCode(99,97,114,116,95,99,95,50,51,0);
          let disconnectedW = String.fromCharCode(108,111,97,100,105,110,103,95,104,95,52,52,0);
          let yellow2 = 1.0;
         ajaxQ = 51.66 > shareO;
         skipH = `${disconnectedW.length}`;
         disconnectedW = "1";
         yellow2 /= Math.max(3, parseFloat(`${disconnectedW.length / 2}`));
      while (fullY <= shareO) {
         fullY /= Math.max(5, (parseFloat(`${(orange0 ? 5 : 2)}`)));
         break;
      }
      for (let i = 0; i < 3; i++) {
         ajaxQ = fullY <= 39.48;
      }
         orange0 = eventQ >= 8 && 42.74 >= shareO;
      let context6 = orange0 ? !orange0 : orange0;
      do {
         orange0 = parseFloat(`${eventQ}`) < fullY;
         if (context6) {
            break;
         }
      } while (context6 && (!ajaxQ));
      while (!orange0 || 4 > (eventQ & 5)) {
         orange0 = 3.1 < shareO;
         break;
      }
      if ((5.20 / (Math.max(7, shootv))) <= 2.41 && (5.20 / (Math.max(3, shootv))) <= 4.94) {
          let favorite9 = String.fromCharCode(112,101,114,115,105,115,116,97,110,116,95,101,95,51,0);
          let disconnectedx = String.fromCharCode(115,117,112,101,114,110,111,100,101,115,95,57,95,53,50,0);
          let ewardedg = 5.0;
          let logoL = String.fromCharCode(111,95,50,53,95,115,116,114,116,111,108,108,0);
         fullY += parseFloat(`${2 + favorite9.length}`);
         favorite9 = `${disconnectedx.length}`;
         disconnectedx += `${1 | logoL.length}`;
         ewardedg *= parseFloat(`${parseInt(`${ewardedg}`) ^ logoL.length}`);
      }
          let c_position1 = false;
          let sports6 = String.fromCharCode(115,105,103,110,108,101,95,48,95,50,54,0);
         eventQ /= Math.max(eventQ, 2);
         c_position1 = sports6.length > 70;
         sports6 = `${sports6.length}`;
      let frame_4u = 9778362.0 <= fullY;
      do {
         fullY /= Math.max(1, parseFloat(`${3}`));
         if (frame_4u) {
            break;
         }
      } while ((5.72 == (fullY / (Math.max(2.19, 3)))) && frame_4u);
         ajaxQ = shootv == fullY;
      navigation9.push(3);
      if (styleP) {
         break;
      }
   } while ((navigation9.length <= 4) && styleP);
  const { textVariants, colors, spacing } = useTheme();

   let modalf = connectionW.length >= 6313667;
   do {
      connectionW += `${benefitv}`;
      if (modalf) {
         break;
      }
   } while (((5 * connectionW.length) <= 4) && modalf);
  const LIMIT_PER_PAGE = 10;

      connectionW += `${connectionW.length}`;

  const [totalPage, setTotalPage] = useState(0);

      championW /= Math.max(4, parseFloat(`${1}`));

  const isFocused = useIsFocused();

   while (!middleware7.startsWith(`${connectionW.length}`)) {
      connectionW += `${launchN.length - 1}`;
      break;
   }
  const [isOffline, setIsOffline] = useState(false);

   let brightnessW = emptyO.length >= 7633290;
   do {
       let signinupc = 3.0;
       let lightg: Map<any, any> = new Map([[String.fromCharCode(113,95,52,53,95,112,114,111,100,117,99,116,102,0),String.fromCharCode(117,95,50,52,95,112,117,116,115,116,114,0)], [String.fromCharCode(103,114,97,112,104,105,99,115,95,116,95,51,57,0),String.fromCharCode(116,109,99,100,95,113,95,49,0)]]);
       let whatsappY = 1.0;
         lightg = new Map([[`${signinupc}`, parseInt(`${signinupc}`)]]);
      for (let r = 0; r < 3; r++) {
         signinupc += parseFloat(`${2 | lightg.size}`);
      }
      while (3.71 == (whatsappY - 2.72)) {
         whatsappY -= parseFloat(`${lightg.size % 1}`);
         break;
      }
          let textJ = 3.0;
          let controlc = String.fromCharCode(121,95,49,49,95,112,105,120,101,108,98,117,102,102,101,114,0);
          let episodeM = String.fromCharCode(116,101,109,112,111,114,97,114,121,95,112,95,56,53,0);
         signinupc += parseFloat(`${2 + lightg.size}`);
         textJ /= Math.max(parseFloat(`${controlc.length}`), 4);
         controlc += `${episodeM.length * 1}`;
         episodeM = `${controlc.length}`;
         lightg.set(`${signinupc}`, parseInt(`${signinupc}`));
      for (let o = 0; o < 2; o++) {
         lightg = new Map([[`${lightg.size}`, lightg.size]]);
      }
          let sharedw = String.fromCharCode(108,105,115,116,101,110,95,101,95,56,50,0);
          let pause1 = true;
          let screen4: Map<any, any> = new Map([[String.fromCharCode(121,95,57,52,95,98,108,97,99,107,108,105,115,116,0),String.fromCharCode(102,108,97,99,101,110,99,95,103,95,49,50,0)], [String.fromCharCode(108,95,48,95,100,114,111,112,0),String.fromCharCode(120,103,97,115,95,110,95,55,56,0)], [String.fromCharCode(119,114,105,116,105,110,103,95,118,95,57,55,0),String.fromCharCode(117,95,53,53,0)]]);
         whatsappY -= (parseFloat(`${parseInt(`${whatsappY}`) >> (Math.min(3, Math.abs((pause1 ? 3 : 1))))}`));
         sharedw += `${sharedw.length}`;
         pause1 = (screen4.size << (Math.min(sharedw.length, 1))) <= 86;
         screen4.set(`${sharedw}`, (String.fromCharCode(121,0) == sharedw ? screen4.size : sharedw.length));
          let cornerL = 3.0;
          let floatingv = String.fromCharCode(99,111,101,102,102,105,99,105,101,110,116,115,95,108,95,49,49,0);
         signinupc += parseFloat(`${1}`);
         cornerL *= parseFloat(`${parseInt(`${cornerL}`) + floatingv.length}`);
         floatingv = `${(floatingv == String.fromCharCode(109,0) ? floatingv.length : parseInt(`${cornerL}`))}`;
          let short_4K = true;
         whatsappY -= parseFloat(`${parseInt(`${signinupc}`) / 2}`);
         short_4K = (short_4K ? short_4K : !short_4K);
      emptyO = `${3 | parseInt(`${championW}`)}`;
      if (brightnessW) {
         break;
      }
   } while ((4 < (benefitv % 2)) && brightnessW);

  const [isLoading, setIsLoading] = useState(false);

       let watchB = 5;
      while (2 >= (watchB - watchB)) {
          let megaphonem: Map<any, any> = new Map([[String.fromCharCode(110,95,52,50,95,116,117,114,110,111,102,102,0),true ], [String.fromCharCode(97,97,99,112,115,100,115,112,95,100,95,56,51,0),false ], [String.fromCharCode(97,95,55,48,95,115,116,114,105,99,109,112,0),true ]]);
          let refreshQ = String.fromCharCode(100,95,55,49,95,114,114,116,114,0);
         watchB -= 3 >> (Math.min(5, Math.abs(watchB)));
         megaphonem = new Map([[`${megaphonem.size}`, refreshQ.length - 1]]);
         refreshQ = `${2 | refreshQ.length}`;
         break;
      }
         watchB *= 2 | watchB;
      for (let n = 0; n < 1; n++) {
         watchB ^= 3;
      }
      benefitv <<= Math.min(Math.abs(2 - navigation9.length), 1);

  const [selectedRankIndex, setSelectedRankIndex] = useState(0);

      championW += parseFloat(`${3 + pingV.length}`);
  const [rankVodList, setRankVodList] = useState([]);

   for (let q = 0; q < 1; q++) {
      connectionW = `${(String.fromCharCode(54,0) == emptyO ? pingV.length : emptyO.length)}`;
   }

  const [tabList, setTabList] = useState([]);

   for (let f = 0; f < 1; f++) {
       let a_countt = false;
       let singleM = String.fromCharCode(110,95,57,55,95,109,117,120,0);
       let suggestion9 = String.fromCharCode(115,109,105,120,95,113,95,52,50,0);
       let spinner5 = true;
       let other8 = 3;
      while (1 >= suggestion9.length) {
         suggestion9 += `${(String.fromCharCode(99,0) == singleM ? singleM.length : (a_countt ? 2 : 2))}`;
         break;
      }
      while (singleM == String.fromCharCode(77,0)) {
         suggestion9 = `${((spinner5 ? 4 : 2) >> (Math.min(singleM.length, 3)))}`;
         break;
      }
         suggestion9 = `${((a_countt ? 2 : 5))}`;
          let pressurep = String.fromCharCode(111,112,116,105,111,110,97,108,108,121,95,121,95,54,50,0);
         spinner5 = other8 > 29;
         pressurep += `${pressurep.length}`;
      if ((2 << (Math.min(2, singleM.length))) > 3 || 2 > (singleM.length << (Math.min(2, Math.abs(other8))))) {
         singleM = `${other8}`;
      }
      let w_unlocke = suggestion9 == String.fromCharCode(106,51,116,107,122,114,52,0);
      do {
          let appsP: Map<any, any> = new Map([[String.fromCharCode(102,105,108,116,101,114,115,95,102,95,55,48,0),14], [String.fromCharCode(113,95,55,49,95,116,114,97,110,115,102,111,114,109,0),386], [String.fromCharCode(112,95,56,52,95,102,117,110,103,105,98,108,101,0),454]]);
          let queste = 2.0;
         suggestion9 = "1";
         appsP = new Map([[`${appsP.size}`, 3]]);
         queste /= Math.max(5, parseFloat(`${1}`));
         if (w_unlocke) {
            break;
         }
      } while (w_unlocke && (suggestion9.length < 2));
      let long_g5t = 8135811 >= singleM.length;
      do {
         singleM += `${(String.fromCharCode(88,0) == suggestion9 ? suggestion9.length : other8)}`;
         if (long_g5t) {
            break;
         }
      } while (long_g5t && (singleM.length <= 2));
          let unselected_ = String.fromCharCode(115,95,50,57,95,114,97,100,98,103,0);
         spinner5 = unselected_ == String.fromCharCode(122,0);
         singleM += `${singleM.length * 3}`;
      let filterf = String.fromCharCode(50,119,95,97,0) == suggestion9;
      do {
          let buttonu = String.fromCharCode(114,116,109,100,95,117,95,53,55,0);
          let injuryc: Map<any, any> = new Map([[String.fromCharCode(97,114,114,97,121,115,95,98,95,50,54,0),654], [String.fromCharCode(113,95,57,57,95,97,117,116,111,102,111,99,117,115,105,110,103,0),82], [String.fromCharCode(115,99,101,110,101,99,117,116,95,120,95,56,49,0),932]]);
          let episodesR = String.fromCharCode(113,95,56,53,95,100,101,102,108,105,99,107,101,114,0);
          let area9 = String.fromCharCode(118,95,57,51,95,109,101,97,115,117,114,101,0);
          let zhengpiane = String.fromCharCode(105,109,112,108,105,101,115,95,105,95,54,56,0);
         suggestion9 += `${singleM.length}`;
         buttonu = `${(area9 == String.fromCharCode(53,0) ? area9.length : zhengpiane.length)}`;
         injuryc = new Map([[zhengpiane, buttonu.length]]);
         episodesR = `${zhengpiane.length / (Math.max(8, episodesR.length))}`;
         if (filterf) {
            break;
         }
      } while (filterf && (!suggestion9.startsWith(`${other8}`)));
      for (let z = 0; z < 2; z++) {
          let foundA = 0.0;
          let twitterZ = 2;
         a_countt = 70 >= suggestion9.length;
         foundA /= Math.max(4, parseFloat(`${2}`));
         twitterZ *= 3 | twitterZ;
      }
      if (!singleM.includes(`${a_countt}`)) {
         singleM = `${singleM.length >> (Math.min(Math.abs(1), 4))}`;
      }
      while (singleM.startsWith(suggestion9)) {
          let t_title6 = String.fromCharCode(114,95,52,57,95,101,109,109,105,110,116,114,105,110,0);
          let dicev = String.fromCharCode(113,95,50,56,95,97,116,116,97,99,104,101,100,0);
          let subsk = String.fromCharCode(114,95,54,95,114,97,116,101,115,0);
          let memberw: Map<any, any> = new Map([[String.fromCharCode(97,95,53,53,95,100,101,108,97,121,115,0),String.fromCharCode(119,100,108,116,95,122,95,55,57,0)], [String.fromCharCode(114,101,112,101,97,116,105,110,103,95,101,95,56,50,0),String.fromCharCode(109,95,52,56,95,103,101,116,109,97,120,114,115,115,0)]]);
         singleM = `${1 & memberw.size}`;
         t_title6 = "1";
         dicev += `${subsk.length >> (Math.min(Math.abs(2), 5))}`;
         subsk += `${2 * t_title6.length}`;
         memberw.set(subsk, subsk.length);
         break;
      }
      for (let l = 0; l < 2; l++) {
         suggestion9 += `${singleM.length}`;
      }
      if (singleM.endsWith(`${a_countt}`)) {
         singleM = "1";
      }
      launchN = `${benefitv ^ 2}`;
   }
  const settingsReducer: GBYMiniCanvas = useAppSelector(
    ({ settingsReducer }: PSmall) => settingsReducer
  );

       let selection3 = String.fromCharCode(121,117,118,112,99,95,117,95,56,55,0);
       let resendB = String.fromCharCode(99,97,112,116,117,114,101,95,101,95,50,0);
      if (!resendB.startsWith(selection3)) {
         selection3 += `${selection3.length + resendB.length}`;
      }
         selection3 += `${selection3.length - 1}`;
      let championk = String.fromCharCode(119,121,116,102,107,120,0) == selection3;
      do {
         selection3 += `${resendB.length}`;
         if (championk) {
            break;
         }
      } while (championk && (resendB == selection3));
      while (selection3 == String.fromCharCode(52,0) || resendB != String.fromCharCode(102,0)) {
         resendB += `${selection3.length}`;
         break;
      }
      let k_viewq = String.fromCharCode(50,57,95,108,95,106,100,102,101,0) == resendB;
      do {
         resendB += `${(String.fromCharCode(85,0) == selection3 ? resendB.length : selection3.length)}`;
         if (k_viewq) {
            break;
         }
      } while (k_viewq && (selection3 != resendB));
      if (selection3 != resendB) {
         resendB += `${(resendB == String.fromCharCode(86,0) ? selection3.length : resendB.length)}`;
      }
      middleware7 = `${selection3.length}`;

  

      navigation9 = [emptyO.length + 3];
  useFocusEffect(
    useCallback(() => {

      emptyO = `${navigation9.length}`;
      console.log("rank");

      connectionW += `${1 ^ navigation9.length}`;
      umb_center_carousel.playlistViewsAnalytics();

   let customV = benefitv <= 6463866;
   do {
      benefitv /= Math.max(pingJ.size * 1, 3);
      if (customV) {
         break;
      }
   } while ((formC.get(`${benefitv}`) != null) && customV);
    }, [])
  );

      formC.set(`${formC.size}`, pingJ.size);
  

       let selected5 = String.fromCharCode(118,95,54,57,95,117,110,100,101,114,0);
      for (let i = 0; i < 1; i++) {
         selected5 += `${selected5.length ^ 1}`;
      }
         selected5 += `${2 >> (Math.min(5, selected5.length))}`;
          let bootsplashn = String.fromCharCode(102,95,49,54,95,105,110,118,101,114,116,101,100,0);
         selected5 = `${1 ^ selected5.length}`;
         bootsplashn += `${bootsplashn.length}`;
      navigation9.push(middleware7.length);

  

   let righth = 8604034 >= navigation9.length;
   do {
      navigation9 = [navigation9.length];
      if (righth) {
         break;
      }
   } while (((launchN.length & 2) == 5 && 4 == (launchN.length & 2)) && righth);
  const handleTabPress = () => {

      emptyO = `${launchN.length}`;
    if (isFocused) {

   if (middleware7.length >= 3) {
      middleware7 += `${connectionW.length + 1}`;
   }
      handleRefresh();

   let update_ib = 7800679 <= formC.size;
   do {
      formC = new Map([[`${pingJ.size}`, formC.size >> (Math.min(Math.abs(pingJ.size), 5))]]);
      if (update_ib) {
         break;
      }
   } while (update_ib && ((formC.size / (Math.max(launchN.length, 10))) == 4 || 4 == (formC.size / (Math.max(3, launchN.length)))));
    }
  };

   while (navigation9.length >= 3) {
       let calendarI = String.fromCharCode(116,114,105,97,108,95,101,95,50,52,0);
       let launcht = 4.0;
       let brightnessw = String.fromCharCode(117,95,53,52,95,113,117,97,110,116,105,108,101,0);
       let stringc = String.fromCharCode(97,100,100,105,116,105,118,101,95,114,95,57,48,0);
         brightnessw = `${parseInt(`${launcht}`) >> (Math.min(calendarI.length, 5))}`;
         stringc += `${stringc.length | brightnessw.length}`;
      while ((calendarI.length & 5) >= 3) {
         calendarI = `${(String.fromCharCode(78,0) == brightnessw ? brightnessw.length : parseInt(`${launcht}`))}`;
         break;
      }
      while (4 >= (1 ^ calendarI.length)) {
         calendarI += `${3 / (Math.max(4, parseInt(`${launcht}`)))}`;
         break;
      }
      let ewardedh = 9351910.0 <= launcht;
      do {
          let baiduk = 0.0;
         launcht *= parseFloat(`${1 / (Math.max(8, brightnessw.length))}`);
         baiduk += parseInt(`${baiduk}`);
         if (ewardedh) {
            break;
         }
      } while (ewardedh && ((parseFloat(`${calendarI.length}`) - launcht) >= 4.93 && (launcht - 4.93) >= 1.69));
      connectionW = "1";
      break;
   }

  const checkConnection = useCallback(async () => {

      formC = new Map([[`${pingJ.size}`, pingJ.size]]);
    const state = await NetInfo.fetch();

   if (middleware7.endsWith(`${formC.size}`)) {
      middleware7 += `${benefitv ^ parseInt(`${championW}`)}`;
   }
    const offline = !(state.isConnected && state.isInternetReachable);

   let long_1R = String.fromCharCode(95,109,107,110,117,95,100,111,103,99,0) == connectionW;
   do {
      connectionW += `${launchN.length}`;
      if (long_1R) {
         break;
      }
   } while (long_1R && (!emptyO.startsWith(connectionW)));
    setIsOffline(offline);

   while ((4 / (Math.max(4, emptyO.length))) >= 1 || 5 >= (4 * parseInt(`${championW}`))) {
      emptyO = `${pingJ.size}`;
      break;
   }
    if (!offline) {

   let combineQ = benefitv >= 8310013;
   do {
       let penaltyI: Map<any, any> = new Map([[String.fromCharCode(98,110,98,105,110,112,97,100,95,104,95,51,52,0),true ], [String.fromCharCode(106,95,57,54,95,109,97,99,104,105,110,101,0),true ], [String.fromCharCode(105,95,54,55,95,111,112,101,110,109,112,116,0),true ]]);
       let stringG = String.fromCharCode(105,95,50,54,95,100,111,116,116,101,100,0);
       let baiduJ = String.fromCharCode(117,95,52,56,95,117,110,105,120,0);
       let buffer7: Array<any> = [String.fromCharCode(114,101,109,105,120,95,110,95,52,53,0), String.fromCharCode(119,95,53,49,95,106,114,110,108,0)];
       let nativeH = 4.0;
          let incidentt = 5;
          let searchz: Map<any, any> = new Map([[String.fromCharCode(104,97,114,112,101,110,95,57,95,51,53,0),false ], [String.fromCharCode(108,111,99,107,101,100,95,53,95,52,0),true ]]);
         baiduJ += `${penaltyI.size}`;
         incidentt >>= Math.min(Math.abs(2 >> (Math.min(4, Math.abs(incidentt)))), 1);
         searchz = new Map([[`${searchz.size}`, 3 << (Math.min(4, Math.abs(incidentt)))]]);
         nativeH += parseFloat(`${buffer7.length / (Math.max(stringG.length, 6))}`);
         penaltyI.set(`${nativeH}`, buffer7.length);
       let episodesc = String.fromCharCode(114,101,118,101,114,116,95,117,95,54,53,0);
         stringG += `${stringG.length % 2}`;
      if (2.38 <= (parseFloat(`${stringG.length}`) - nativeH)) {
         nativeH -= parseFloat(`${penaltyI.size | buffer7.length}`);
      }
         stringG = `${stringG.length << (Math.min(Math.abs(3), 5))}`;
         stringG += `${parseInt(`${nativeH}`)}`;
      let modeQ = 8162842 <= stringG.length;
      do {
          let gesturesg = 1.0;
          let indexY = 4;
          let membern = String.fromCharCode(97,108,112,104,97,110,117,109,101,114,105,99,115,95,106,95,50,51,0);
          let mappings = String.fromCharCode(100,95,57,52,95,112,105,120,98,108,111,99,107,100,115,112,0);
          let shirtP = 2;
         stringG = `${mappings.length}`;
         gesturesg += indexY;
         indexY -= shirtP;
         membern += `${shirtP % (Math.max(9, indexY))}`;
         mappings += `${indexY >> (Math.min(Math.abs(shirtP), 3))}`;
         if (modeQ) {
            break;
         }
      } while (modeQ && ((5 ^ stringG.length) > 3 && (penaltyI.size ^ 5) > 2));
      if (5 == (1 / (Math.max(9, stringG.length))) && (1 / (Math.max(8, penaltyI.size))) == 4) {
         stringG += `${(String.fromCharCode(53,0) == stringG ? stringG.length : parseInt(`${nativeH}`))}`;
      }
      let action8 = 9585382.0 <= nativeH;
      do {
         nativeH -= parseFloat(`${episodesc.length << (Math.min(4, buffer7.length))}`);
         if (action8) {
            break;
         }
      } while (action8 && (nativeH > 5.7));
         nativeH -= (parseFloat(`${String.fromCharCode(67,0) == baiduJ ? baiduJ.length : stringG.length}`));
         baiduJ = `${baiduJ.length | 3}`;
         stringG = `${(baiduJ == String.fromCharCode(122,0) ? buffer7.length : baiduJ.length)}`;
      let resendf = episodesc.length >= 6329368;
      do {
         episodesc += `${penaltyI.size | 2}`;
         if (resendf) {
            break;
         }
      } while (resendf && (5.74 < nativeH));
      benefitv %= Math.max(penaltyI.size << (Math.min(Math.abs(2), 1)), 4);
      if (combineQ) {
         break;
      }
   } while ((5 <= (benefitv + 5) && (benefitv + 5) <= 4) && combineQ);
      handleRefresh();
    }
  }, []);

   if (emptyO != launchN) {
      launchN += `${(String.fromCharCode(99,0) == middleware7 ? middleware7.length : launchN.length)}`;
   }

  useEffect(() => {

   if (navigation9.length > 5) {
      emptyO = `${(emptyO == String.fromCharCode(74,0) ? parseInt(`${championW}`) : emptyO.length)}`;
   }
    setIsOffline(settingsReducer.isOffline);

   if (1 == (benefitv >> (Math.min(Math.abs(formC.size), 3))) && (benefitv >> (Math.min(Math.abs(1), 2))) == 5) {
      benefitv >>= Math.min(2, emptyO.length);
   }
    console.log("rank ");

   for (let a = 0; a < 2; a++) {
      navigation9.push(benefitv);
   }
    handleRefresh();
  }, []);

   for (let q = 0; q < 1; q++) {
      launchN = `${(String.fromCharCode(65,0) == connectionW ? connectionW.length : formC.size)}`;
   }

  useFocusEffect(
    useCallback(() => {

   while (1 <= (pingV.length >> (Math.min(2, Math.abs(pingJ.size))))) {
      pingV += `${(String.fromCharCode(97,0) == middleware7 ? emptyO.length : middleware7.length)}`;
      break;
   }
      if (
        !settingsReducer.isOffline &&
        settingsReducer.isOffline !== isOffline
      ) {

   let bingQ = middleware7 == String.fromCharCode(121,107,115,0);
   do {
      middleware7 += `${(emptyO == String.fromCharCode(112,0) ? emptyO.length : benefitv)}`;
      if (bingQ) {
         break;
      }
   } while ((!middleware7.startsWith(`${pingJ.size}`)) && bingQ);
        setIsOffline(settingsReducer.isOffline);

      championW -= parseFloat(`${1 - parseInt(`${championW}`)}`);
        handleRefresh();
      } else if (settingsReducer.isOffline) {

   while (1.47 > (championW / 5.70) && 2.9 > (championW / 5.70)) {
       let watchH: Map<any, any> = new Map([[String.fromCharCode(97,95,51,52,95,99,100,108,109,115,0),549], [String.fromCharCode(98,95,53,49,95,109,100,97,116,0),784], [String.fromCharCode(115,95,55,52,95,107,105,110,100,0),514]]);
       let penaltyV = 2.0;
       let anner3 = String.fromCharCode(99,104,101,99,107,115,117,109,109,101,100,95,49,95,57,55,0);
       let turnp = String.fromCharCode(121,117,118,112,97,99,107,101,100,95,102,95,52,57,0);
         anner3 = `${(String.fromCharCode(54,0) == turnp ? turnp.length : watchH.size)}`;
      if (4.90 >= (penaltyV / 4.64)) {
         turnp = "2";
      }
      for (let k = 0; k < 3; k++) {
          let module8 = true;
         anner3 += `${parseInt(`${penaltyV}`) * 2}`;
         module8 = (module8 ? module8 : module8);
      }
          let modulet = String.fromCharCode(114,95,52,53,95,109,117,114,109,117,114,0);
          let typingJ = String.fromCharCode(114,101,112,95,118,95,56,0);
         penaltyV -= parseFloat(`${1}`);
         modulet = `${1 / (Math.max(4, typingJ.length))}`;
         typingJ = `${(typingJ == String.fromCharCode(112,0) ? typingJ.length : modulet.length)}`;
       let u_lockd = 5.0;
      while (!anner3.endsWith(`${watchH.size}`)) {
         anner3 = `${watchH.size & anner3.length}`;
         break;
      }
      for (let g = 0; g < 3; g++) {
         turnp = `${turnp.length >> (Math.min(4, anner3.length))}`;
      }
         u_lockd /= Math.max(4, parseInt(`${penaltyV}`));
      if (u_lockd <= anner3.length) {
          let penaltyx = 0.0;
          let whistlem = true;
          let configured = 1.0;
         u_lockd += 3 + turnp.length;
         penaltyx += parseFloat(`${parseInt(`${penaltyx}`) | 2}`);
         whistlem = 4.96 <= penaltyx;
         configured += ((whistlem ? 5 : 5) & parseInt(`${configured}`));
      }
      if (5.11 > (parseFloat(`${watchH.size}`) / (Math.max(8, penaltyV))) || (penaltyV / (Math.max(parseFloat(`${watchH.size}`), 4))) > 5.11) {
         watchH = new Map([[anner3, anner3.length & turnp.length]]);
      }
      while (turnp.length > 5) {
         watchH = new Map([[`${u_lockd}`, (turnp == String.fromCharCode(118,0) ? turnp.length : parseInt(`${u_lockd}`))]]);
         break;
      }
      for (let n = 0; n < 3; n++) {
         penaltyV /= Math.max(parseFloat(`${1}`), 5);
      }
      championW -= parseFloat(`${3 >> (Math.min(1, navigation9.length))}`);
      break;
   }
        return () => {

   for (let e = 0; e < 3; e++) {
      connectionW += `${download4.length}`;
   }
          setIsOffline(settingsReducer.isOffline);
        };
      }
    }, [settingsReducer.isOffline])
  );

       let favoriteM = String.fromCharCode(116,95,50,55,95,109,101,116,97,0);
       let closei = 3;
       let googlen: Map<any, any> = new Map([[String.fromCharCode(121,117,118,121,97,95,121,95,53,55,0),447], [String.fromCharCode(99,95,49,56,0),938]]);
         closei ^= googlen.size;
         closei |= googlen.size;
      while (Array.from(googlen.keys()).includes(`${closei}`)) {
         googlen.set(`${closei}`, 1 + closei);
         break;
      }
      let styleJ = 5146047 <= closei;
      do {
         closei /= Math.max(5, closei * 3);
         if (styleJ) {
            break;
         }
      } while (styleJ && ((closei - googlen.size) < 5 && 5 < (closei - 5)));
         closei += favoriteM.length << (Math.min(1, Math.abs(closei)));
          let vignettep = String.fromCharCode(99,104,105,108,108,95,121,95,50,0);
         googlen = new Map([[vignettep, 3 - vignettep.length]]);
       let countryZ = false;
          let penaltym = 2.0;
          let typesG = 1;
         closei /= Math.max(1, ((countryZ ? 4 : 1) / (Math.max(10, googlen.size))));
         penaltym /= Math.max(parseInt(`${penaltym}`), 4);
         typesG &= 2 << (Math.min(Math.abs(parseInt(`${penaltym}`)), 1));
       let sellc: Array<any> = [String.fromCharCode(117,114,97,110,100,111,109,95,53,95,52,54,0), String.fromCharCode(108,95,55,53,95,115,97,119,0), String.fromCharCode(97,95,49,51,95,114,101,97,100,102,117,108,108,0)];
      benefitv *= closei;

  

   while (4 > (4 >> (Math.min(2, Math.abs(formC.size))))) {
      formC = new Map([[`${benefitv}`, benefitv ^ connectionW.length]]);
      break;
   }
  useEffect(() => {

   let description_awF = middleware7 == String.fromCharCode(48,51,55,112,0);
   do {
      middleware7 += `${connectionW.length + 3}`;
      if (description_awF) {
         break;
      }
   } while ((connectionW != middleware7) && description_awF);
    const unsubscribe = navigation.addListener("tabPress", handleTabPress);

      download4 = `${(String.fromCharCode(49,0) == pingV ? pingV.length : connectionW.length)}`;

    

   for (let c = 0; c < 1; c++) {
       let largeQ = 2.0;
       let chinaW = String.fromCharCode(120,95,49,54,95,119,105,114,101,0);
      while (4.93 == (largeQ / 5.45) && 2 == (chinaW.length << (Math.min(Math.abs(1), 2)))) {
          let hoverC = String.fromCharCode(117,95,57,54,95,110,111,110,110,117,108,108,100,101,115,116,105,110,97,116,105,111,110,0);
          let lang4 = String.fromCharCode(114,101,103,101,110,101,114,97,116,101,95,52,95,50,57,0);
          let blacklistQ = true;
          let viewer1 = 5.0;
         chinaW += `${3 << (Math.min(Math.abs(parseInt(`${viewer1}`)), 1))}`;
         hoverC = `${(String.fromCharCode(120,0) == lang4 ? lang4.length : hoverC.length)}`;
         blacklistQ = hoverC.length == lang4.length;
         viewer1 -= ((blacklistQ ? 5 : 5));
         break;
      }
          let darka = String.fromCharCode(118,95,52,57,95,99,111,110,115,117,109,101,100,0);
          let d_unlock8 = String.fromCharCode(103,101,116,101,110,118,95,119,95,53,50,0);
          let foundr = 0.0;
         largeQ += 3;
         darka += `${darka.length | 1}`;
         d_unlock8 = `${3 + darka.length}`;
         foundr *= parseInt(`${foundr}`) ^ 3;
      while (5 > (parseInt(`${largeQ}`) / 1) && (chinaW.length << (Math.min(Math.abs(1), 1))) > 4) {
         largeQ += chinaW.length + parseInt(`${largeQ}`);
         break;
      }
      if (chinaW.length <= parseInt(`${largeQ}`)) {
         chinaW = `${1 << (Math.min(5, chinaW.length))}`;
      }
      for (let i = 0; i < 1; i++) {
         chinaW += `${(String.fromCharCode(83,0) == chinaW ? chinaW.length : parseInt(`${largeQ}`))}`;
      }
         chinaW = `${(chinaW == String.fromCharCode(75,0) ? parseInt(`${largeQ}`) : chinaW.length)}`;
      middleware7 = `${download4.length}`;
   }
    return () => unsubscribe();
  }, [navigation, isFocused]);

   if (!middleware7.endsWith(`${benefitv}`)) {
       let sinas = 0.0;
       let countdownq = 5;
         sinas += 3;
       let more2 = 5.0;
          let minimizeA: Array<any> = [408, 44, 802];
          let indexz = String.fromCharCode(112,95,57,48,95,115,116,97,116,105,111,110,97,114,105,116,121,0);
          let main_zd: Map<any, any> = new Map([[String.fromCharCode(99,104,114,111,109,97,104,111,108,100,95,101,95,57,50,0),true ], [String.fromCharCode(117,100,105,111,95,111,95,52,54,0),true ]]);
         more2 -= parseFloat(`${parseInt(`${sinas}`)}`);
         minimizeA.push(main_zd.size + 2);
         indexz += `${(String.fromCharCode(79,0) == indexz ? minimizeA.length : indexz.length)}`;
         main_zd = new Map([[`${minimizeA.length}`, (indexz == String.fromCharCode(112,0) ? indexz.length : minimizeA.length)]]);
      for (let t = 0; t < 3; t++) {
         countdownq /= Math.max(3 >> (Math.min(Math.abs(countdownq), 2)), 2);
      }
         countdownq %= Math.max(2, parseInt(`${more2}`));
          let forwardx: Array<any> = [32, 431, 742];
          let ping0 = String.fromCharCode(98,97,114,99,111,100,101,95,56,95,51,56,0);
         sinas -= parseInt(`${more2}`) * 1;
         forwardx = [3 | forwardx.length];
         ping0 += `${forwardx.length >> (Math.min(Math.abs(2), 1))}`;
      middleware7 = `${launchN.length}`;
   }

  const fetchPlaylist = useCallback(
    (page: number) =>
      RLarge.getTopicIosRank().then((json: LDGray) => {
        setTotalPage(Number(json.TotalPageCount));

   if (5 > (benefitv - 3) && 3 > (3 - download4.length)) {
       let halfG = String.fromCharCode(104,95,57,95,115,116,97,116,105,115,116,105,99,115,0);
       let stepx = 3.0;
      let progresse = 5699020 <= halfG.length;
      do {
         halfG += `${2 >> (Math.min(4, halfG.length))}`;
         if (progresse) {
            break;
         }
      } while (((stepx - 5.12) == 3.5) && progresse);
         halfG += `${(String.fromCharCode(80,0) == halfG ? parseInt(`${stepx}`) : halfG.length)}`;
          let phoneO = String.fromCharCode(116,111,114,101,100,95,97,95,57,52,0);
         stepx /= Math.max(2, (parseFloat(`${halfG == String.fromCharCode(85,0) ? halfG.length : phoneO.length}`)));
      let combinek = halfG.length <= 6184138;
      do {
          let overlayd = true;
         halfG = `${(halfG == String.fromCharCode(68,0) ? parseInt(`${stepx}`) : halfG.length)}`;
         overlayd = (overlayd ? overlayd : !overlayd);
         if (combinek) {
            break;
         }
      } while (combinek && ((parseFloat(`${halfG.length}`) + stepx) == 2.85 && 4.20 == (stepx + 2.85)));
         halfG += `${halfG.length / 1}`;
      let minimizeB = stepx <= 7234114.0;
      do {
         stepx += (parseFloat(`${String.fromCharCode(65,0) == halfG ? halfG.length : parseInt(`${stepx}`)}`));
         if (minimizeB) {
            break;
         }
      } while (minimizeB && (5.1 >= (stepx / 1.91) || 1 >= (4 / (Math.max(3, halfG.length)))));
      download4 = `${launchN.length}`;
   }
        return Object.values(json);
      }),
    []
  );

   if (2 == download4.length || launchN.length == 2) {
      download4 += "3";
   }

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

   let speca = String.fromCharCode(116,111,115,101,106,55,120,0) == middleware7;
   do {
       let policyF = 5.0;
       let ballZ = String.fromCharCode(102,95,54,57,95,116,97,112,112,101,100,0);
      while (policyF == 1.100) {
          let castingf = String.fromCharCode(107,105,116,95,49,95,54,56,0);
         policyF *= (ballZ == String.fromCharCode(109,0) ? ballZ.length : parseInt(`${policyF}`));
         castingf = `${castingf.length}`;
         break;
      }
      for (let u = 0; u < 3; u++) {
         ballZ += "1";
      }
         policyF /= Math.max(ballZ.length | parseInt(`${policyF}`), 2);
         policyF += ballZ.length * parseInt(`${policyF}`);
          let megaphonex = String.fromCharCode(115,116,121,108,101,100,95,48,95,54,51,0);
         policyF /= Math.max(2, 1);
         megaphonex += `${megaphonex.length * 2}`;
      for (let i = 0; i < 2; i++) {
         ballZ += `${ballZ.length}`;
      }
      middleware7 = `${emptyO.length / 1}`;
      if (speca) {
         break;
      }
   } while ((5 > pingV.length) && speca);
          return undefined;

       let infot = String.fromCharCode(105,95,53,49,95,101,100,105,116,0);
       let modityR = String.fromCharCode(111,95,50,48,95,106,107,101,110,99,0);
         infot = "1";
      if (infot.length < 1) {
          let profile4: Map<any, any> = new Map([[String.fromCharCode(102,114,97,109,101,112,111,111,108,95,53,95,57,57,0),String.fromCharCode(119,95,51,49,95,112,111,115,116,112,114,111,99,101,115,115,0)], [String.fromCharCode(99,98,99,114,95,51,95,55,52,0),String.fromCharCode(121,95,56,95,115,116,114,110,105,99,109,112,0)], [String.fromCharCode(114,95,49,54,95,115,109,107,97,0),String.fromCharCode(101,95,55,53,95,112,114,101,102,101,114,101,110,99,101,0)]]);
          let fullN = true;
         modityR += `${modityR.length & 2}`;
         profile4 = new Map([[`${profile4.size}`, profile4.size]]);
         fullN = (42 == (profile4.size | (!fullN ? 42 : profile4.size)));
      }
         modityR = `${(infot == String.fromCharCode(99,0) ? infot.length : modityR.length)}`;
      let sinaD = modityR == String.fromCharCode(106,49,52,108,98,100,100,0);
      do {
          let type_weo = 4.0;
          let networkM = String.fromCharCode(112,101,114,102,111,114,109,101,114,95,55,95,50,53,0);
          let gpayX = 4;
          let hooka = String.fromCharCode(116,95,57,49,95,109,98,99,109,112,0);
         modityR = `${hooka.length % (Math.max(1, 4))}`;
         type_weo /= Math.max(parseFloat(`${networkM.length}`), 1);
         networkM += `${gpayX}`;
         gpayX |= gpayX;
         hooka += `${networkM.length}`;
         if (sinaD) {
            break;
         }
      } while ((infot.length > 5) && sinaD);
         modityR = `${(String.fromCharCode(119,0) == modityR ? infot.length : modityR.length)}`;
         modityR = `${(String.fromCharCode(55,0) == modityR ? infot.length : modityR.length)}`;
      pingJ.set(`${championW}`, parseInt(`${championW}`) + 2);
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

  const renderItem = ({ item }: MEYMode) => (
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
    <>
      {isRefreshing && !isOffline && (
        <View
          style={{
            ...styles.loading,
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            paddingBottom:200
          }}
        >
          {
            <FastImage
              style={{ height: 80, width: 80 }}
              source={require("@static/images/settingsGrayZhengpian.gif")}
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
                  marginBottom:12
                }}
              >
                <Text style={{ color: selectedRankIndex == i ? "#ffffff" : '#9c9c9c'}}>{tab?.type}</Text>
              </TouchableOpacity>
            ))}
          </View>
          { }

          {rankVodList?.length > 0 && (
            <VodWithDescriptionListRank
              vodList={rankVodList}
              onClickCatalogVideo={() => {}}
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
                      source={require('@static/images/settingsGrayZhengpian.gif')}
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
    </>
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
