import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  RefreshControl,
  ScrollView,
} from "react-native";
import ScreenContainer from "../../components/container/ww_collection";
import { RootStackScreenProps } from "@type/ww_tempnodatagif_description";
import { useTheme } from "@react-navigation/native";
import { wwEighteenShirt } from "@redux/ww_small";

import TitleWithBackButtonHeader from "../../components/header/ww_react_predictionwin_header";
import axios from "axios";
import { Keyboard } from "react-native";
import {
  API_DOMAIN,
  API_DOMAIN_TEST,
  API_DOMAIN_LOCAL,
} from "@utility/ww_icon";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";

import InviteStep from "./../../components/invite/ww_libjsi";
import InviteCard from "./../../components/invite/ww_analytic";

import InviteHeader from "./../../components/invite/ww_catalog_header";
import { useAppDispatch, useAppSelector, useSelector } from "@hooks/ww_catagory_neon";
import { TouchableOpacity } from "@gorhom/bottom-sheet";
import { updateUserAuth } from "@redux/actions/ww_libreactperfloggerjni_small";
import ww_runtime from "../../../../Umeng/ww_runtime";
import { wwIconscheduleColors } from "@api";
import { wwVertical } from "@redux/reducers/ww_related_kuaishou";


export default ({ navigation }: RootStackScreenProps<"邀请">) => {
  const { colors, textVariants, icons, spacing } = useTheme();

  const userState = useSelector<wwVertical>('userReducer');

  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useAppDispatch();

  
  useEffect(() => {
    ww_runtime.userCenterVipInviteViewsAnalytics();
  }, []);
  

  const handleRefresh = async () => {
       let backwardK = 4;
    let mini6 = 0.0;
    let circlep = String.fromCharCode(98,108,111,99,107,100,115,112,95,109,95,52,54,0);
    let dycreatorq = String.fromCharCode(122,95,53,50,95,98,115,101,114,118,101,114,0);
    let predictionwinR = true;
    let halffieldimageZ = String.fromCharCode(114,95,57,54,95,114,101,109,101,109,98,101,114,0);
    let historyo = 3;
    let iconnewsshareO = String.fromCharCode(103,101,116,120,118,97,114,95,107,95,53,51,0);
    let short_obO = 3.0;
    let auto_fN = 2.0;
    let episodeW = 3.0;
    let minis: Map<any, any> = new Map([[String.fromCharCode(118,95,57,56,95,102,100,111,112,101,110,0),670], [String.fromCharCode(112,95,55,95,117,112,115,104,105,102,116,0),381], [String.fromCharCode(97,95,52,52,95,98,105,103,100,105,97,0),845]]);
    let basketballhometeam_ = String.fromCharCode(99,108,101,97,114,98,105,116,95,100,95,54,49,0);
    let debugj = String.fromCharCode(111,95,49,56,95,99,111,114,114,101,99,116,0);
    let statisticsinactive9 = String.fromCharCode(109,95,54,56,95,115,97,109,112,108,101,100,0);
    let rightT = String.fromCharCode(113,95,52,95,115,116,97,114,116,0);
    let downarrowc: Map<any, any> = new Map([[String.fromCharCode(116,95,51,54,95,104,105,103,104,112,111,114,116,0),883], [String.fromCharCode(99,108,101,97,114,105,110,103,95,110,95,52,49,0),764]]);
    let constantsV = 2.0;
    let time_7t = String.fromCharCode(107,95,50,49,95,114,101,99,97,108,99,117,108,97,116,101,0);
    let predictionactiveS = 4.0;
   while (3.8 <= (auto_fN * 2.86)) {
       let football7 = String.fromCharCode(119,109,118,100,97,116,97,95,48,95,53,57,0);
       let coden = 2;
       let notificationfillemptyn = 2;
      let listx = 8498702 >= notificationfillemptyn;
      do {
         notificationfillemptyn <<= Math.min(2, Math.abs(notificationfillemptyn ^ 3));
         if (listx) {
            break;
         }
      } while (listx && (football7.length <= notificationfillemptyn));
      let modelsU = String.fromCharCode(114,53,102,102,0) == football7;
      do {
         football7 = `${(String.fromCharCode(68,0) == football7 ? football7.length : coden)}`;
         if (modelsU) {
            break;
         }
      } while (modelsU && (5 >= (football7.length * notificationfillemptyn) && (football7.length * notificationfillemptyn) >= 5));
         notificationfillemptyn &= notificationfillemptyn / (Math.max(5, football7.length));
      let middle4 = football7 == String.fromCharCode(51,52,117,50,50,115,57,0);
      do {
         football7 += `${notificationfillemptyn * coden}`;
         if (middle4) {
            break;
         }
      } while ((1 > (coden - football7.length) && 1 > (coden - football7.length)) && middle4);
         notificationfillemptyn >>= Math.min(2, Math.abs(3));
          let pathk: Map<any, any> = new Map([[String.fromCharCode(110,95,56,50,95,114,97,110,103,101,0),203], [String.fromCharCode(121,95,49,55,95,109,111,118,101,0),645], [String.fromCharCode(109,115,103,95,121,95,52,57,0),502]]);
          let fillp: Map<any, any> = new Map([[String.fromCharCode(105,100,101,110,116,105,102,105,99,97,116,105,111,110,95,104,95,50,51,0),false ], [String.fromCharCode(120,95,50,54,95,112,114,111,109,111,0),true ]]);
         coden ^= notificationfillemptyn >> (Math.min(Math.abs(1), 4));
         pathk.set(`${pathk.size}`, pathk.size + 2);
         fillp.set(`${fillp.size}`, 3);
         notificationfillemptyn <<= Math.min(1, Math.abs(coden));
         notificationfillemptyn <<= Math.min(Math.abs(coden), 5);
         notificationfillemptyn -= coden / (Math.max(6, notificationfillemptyn));
      auto_fN += parseFloat(`${notificationfillemptyn / (Math.max(parseInt(`${auto_fN}`), 3))}`);
      break;
   }
   let window_rD = 6368840 >= backwardK;
   do {
       let episodeso = String.fromCharCode(112,95,57,53,95,109,98,99,109,112,0);
      if (episodeso != String.fromCharCode(121,0)) {
         episodeso = `${episodeso.length}`;
      }
      if (episodeso.length > episodeso.length) {
         episodeso = `${episodeso.length}`;
      }
          let moreQ = 1;
         episodeso = `${episodeso.length}`;
         moreQ -= moreQ;
      backwardK %= Math.max(4, (backwardK | (predictionwinR ? 4 : 3)));
      if (window_rD) {
         break;
      }
   } while (window_rD && (2 <= backwardK));
   if (halffieldimageZ.length > 4) {
      predictionwinR = parseFloat(`${backwardK}`) > mini6;
   }
      historyo *= 3 % (Math.max(1, halffieldimageZ.length));
   if ((short_obO / (Math.max(2, historyo))) == 1.42) {
       let bgvipxvodg: Array<any> = [String.fromCharCode(97,95,49,56,95,105,110,105,116,105,97,116,101,100,0), String.fromCharCode(120,95,50,57,95,118,105,101,119,112,111,114,116,0)];
       let privacyn: Array<any> = [755, 499, 667];
      while (bgvipxvodg.includes(privacyn.length)) {
          let userd: Array<any> = [776, 636, 614];
          let heartK = true;
         privacyn = [1 / (Math.max(9, bgvipxvodg.length))];
         userd = [((heartK ? 2 : 4) - userd.length)];
         heartK = (71 >= (userd.length & (!heartK ? userd.length : 71)));
         break;
      }
         bgvipxvodg = [3];
      for (let t = 0; t < 3; t++) {
         bgvipxvodg = [1];
      }
         bgvipxvodg = [bgvipxvodg.length << (Math.min(privacyn.length, 1))];
         privacyn.push(privacyn.length);
       let chinab = 2;
      historyo %= Math.max(5, 2 * backwardK);
   }
   while ((mini6 + parseFloat(`${minis.size}`)) <= 5.1 && 5 <= (minis.size + 4)) {
      mini6 -= parseFloat(`${halffieldimageZ.length}`);
      break;
   }
   while (5.43 < mini6) {
      halffieldimageZ = `${minis.size ^ 2}`;
      break;
   }
      auto_fN += parseFloat(`${parseInt(`${mini6}`)}`);
   while (5 == halffieldimageZ.length) {
      short_obO /= Math.max(5, (parseFloat(`${halffieldimageZ == String.fromCharCode(122,0) ? halffieldimageZ.length : parseInt(`${auto_fN}`)}`)));
      break;
   }
   while (1 >= (dycreatorq.length * 3)) {
      dycreatorq += "1";
      break;
   }
   if (5.14 <= auto_fN) {
       let pathu = String.fromCharCode(110,117,108,108,112,97,99,107,101,116,95,119,95,50,56,0);
       let neonF = String.fromCharCode(118,95,56,95,100,101,99,101,108,101,114,97,116,105,111,110,0);
       let reactnativejsz: Map<any, any> = new Map([[String.fromCharCode(98,105,116,109,97,112,95,56,95,51,56,0),658], [String.fromCharCode(102,114,101,113,98,97,114,107,95,107,95,53,52,0),890]]);
         reactnativejsz = new Map([[neonF, (String.fromCharCode(116,0) == pathu ? neonF.length : pathu.length)]]);
      for (let z = 0; z < 1; z++) {
          let gifgoalbgF = String.fromCharCode(109,101,109,111,114,121,98,117,102,102,101,114,95,98,95,56,48,0);
          let humidityI = 2.0;
          let storeT = String.fromCharCode(117,115,105,110,103,95,111,95,55,50,0);
          let megaphone3 = false;
          let minig = 5;
         neonF += `${1 >> (Math.min(1, storeT.length))}`;
         gifgoalbgF += "1";
         humidityI /= Math.max(4, 1 & parseInt(`${humidityI}`));
         storeT += `${(2 & (megaphone3 ? 2 : 4))}`;
         megaphone3 = gifgoalbgF.length == 73;
         minig ^= gifgoalbgF.length - 2;
      }
      let zhengpianH = neonF == String.fromCharCode(53,54,101,51,105,107,115,97,115,0);
      do {
          let bangj: Map<any, any> = new Map([[String.fromCharCode(116,95,55,49,95,105,100,102,118,0),String.fromCharCode(104,95,54,54,95,105,110,112,111,115,0)], [String.fromCharCode(111,95,57,52,95,99,108,111,115,101,0),String.fromCharCode(108,95,56,54,95,110,111,105,110,100,101,120,0)], [String.fromCharCode(99,95,49,48,95,118,109,97,112,115,105,110,0),String.fromCharCode(102,114,97,99,95,53,95,52,0)]]);
          let awayteamfield_ = 1.0;
         neonF = `${reactnativejsz.size}`;
         bangj.set(`${awayteamfield_}`, parseInt(`${awayteamfield_}`));
         if (zhengpianH) {
            break;
         }
      } while ((pathu == String.fromCharCode(89,0)) && zhengpianH);
         reactnativejsz.set(pathu, neonF.length);
         reactnativejsz = new Map([[`${reactnativejsz.size}`, reactnativejsz.size]]);
          let with_fF: Array<any> = [91, 669, 92];
          let foundW = 1.0;
         pathu += `${reactnativejsz.size / (Math.max(with_fF.length, 6))}`;
         with_fF = [3];
         foundW /= Math.max(3, parseFloat(`${3 - parseInt(`${foundW}`)}`));
         reactnativejsz.set(neonF, neonF.length >> (Math.min(3, pathu.length)));
      while (neonF.startsWith(`${reactnativejsz.size}`)) {
          let starH = 0.0;
          let muted7 = 0.0;
          let taiwanG = 4;
         reactnativejsz = new Map([[neonF, pathu.length & 2]]);
         starH /= Math.max(1, parseFloat(`${2 % (Math.max(10, parseInt(`${starH}`)))}`));
         muted7 += taiwanG;
         taiwanG /= Math.max(3, parseInt(`${starH}`));
         break;
      }
      let backgroundZ = String.fromCharCode(115,97,50,103,55,51,105,49,0) == neonF;
      do {
          let mbsplashW = String.fromCharCode(115,105,98,108,105,110,103,115,95,98,95,50,55,0);
          let mbbidK = String.fromCharCode(115,117,98,102,114,97,109,101,95,99,95,57,54,0);
          let libffmpegkitY = false;
         neonF = `${mbbidK.length}`;
         mbsplashW = "1";
         mbbidK += `${(2 | (libffmpegkitY ? 3 : 4))}`;
         if (backgroundZ) {
            break;
         }
      } while ((neonF.endsWith(`${reactnativejsz.size}`)) && backgroundZ);
      auto_fN /= Math.max(parseFloat(`${1 >> (Math.min(2, Math.abs(parseInt(`${auto_fN}`))))}`), 3);
   }
       let minih = String.fromCharCode(106,95,53,50,95,110,111,110,98,108,111,99,107,0);
       let club0: Array<any> = [442, 136, 909];
       let baselineL = String.fromCharCode(101,95,54,51,95,105,109,112,111,114,116,97,98,108,101,100,0);
          let volumeT: Array<any> = [215, 224];
          let controlsV = 0.0;
          let membershipz = 3.0;
         club0 = [volumeT.length + parseInt(`${controlsV}`)];
         volumeT.push(2 & parseInt(`${membershipz}`));
         controlsV /= Math.max(2, parseFloat(`${parseInt(`${membershipz}`) + 3}`));
         minih = `${club0.length & minih.length}`;
         club0 = [(String.fromCharCode(67,0) == minih ? club0.length : minih.length)];
      for (let d = 0; d < 3; d++) {
         minih += `${1 >> (Math.min(1, club0.length))}`;
      }
      while (minih != String.fromCharCode(76,0)) {
          let gifgoalU = false;
          let formN = false;
         baselineL = `${1 * club0.length}`;
         gifgoalU = !gifgoalU;
         formN = (gifgoalU ? gifgoalU : !gifgoalU);
         break;
      }
      while (4 >= (baselineL.length / 1) || 2 >= (baselineL.length / (Math.max(1, 7)))) {
         club0 = [1];
         break;
      }
      if ((club0.length % 1) >= 1) {
         baselineL = `${baselineL.length}`;
      }
      for (let z = 0; z < 3; z++) {
         club0 = [club0.length * baselineL.length];
      }
         minih += `${baselineL.length}`;
      backwardK &= dycreatorq.length ^ 2;
   for (let e = 0; e < 1; e++) {
      episodeW -= 3;
   }

    setRefreshing(true);

      minis.set(`${episodeW}`, (String.fromCharCode(52,0) == iconnewsshareO ? parseInt(`${episodeW}`) : iconnewsshareO.length));
   for (let g = 0; g < 1; g++) {
      circlep += "1";
   }
       let unreadI = String.fromCharCode(103,95,50,51,95,114,97,110,0);
          let upgradef = false;
         unreadI += `${((upgradef ? 4 : 5))}`;
       let icons = 2.0;
      while ((unreadI.length % 3) == 5 || (unreadI.length - parseInt(`${icons}`)) == 3) {
         unreadI += `${parseInt(`${icons}`)}`;
         break;
      }
      short_obO -= parseFloat(`${3 << (Math.min(Math.abs(parseInt(`${short_obO}`)), 5))}`);
      dycreatorq += `${2 % (Math.max(backwardK, 1))}`;
      backwardK *= parseInt(`${mini6}`);
   if ((short_obO / (Math.max(parseFloat(`${iconnewsshareO.length}`), 6))) < 1.51 || 3 < (iconnewsshareO.length / (Math.max(10, parseInt(`${short_obO}`))))) {
      iconnewsshareO = `${(2 | (predictionwinR ? 3 : 2))}`;
   }
   for (let p = 0; p < 3; p++) {
       let bingm = 4.0;
      let backwardX = bingm >= 8281070.0;
      do {
         bingm *= parseInt(`${bingm}`);
         if (backwardX) {
            break;
         }
      } while ((bingm >= 5.66) && backwardX);
         bingm *= parseInt(`${bingm}`) << (Math.min(4, Math.abs(2)));
      for (let z = 0; z < 2; z++) {
         bingm -= parseInt(`${bingm}`) % (Math.max(2, parseInt(`${bingm}`)));
      }
      historyo *= historyo / 3;
   }
       let stationH: Map<any, any> = new Map([[String.fromCharCode(120,95,51,56,95,102,101,116,99,104,105,110,103,0),true ], [String.fromCharCode(114,95,56,52,95,102,105,108,116,101,114,102,0),true ], [String.fromCharCode(98,105,110,115,95,111,95,50,57,0),true ]]);
       let huawei5 = 2.0;
         huawei5 /= Math.max(stationH.size, 3);
       let macauc = String.fromCharCode(120,95,48,95,100,118,100,115,117,98,0);
      if (stationH.size < macauc.length) {
         macauc += `${stationH.size >> (Math.min(macauc.length, 1))}`;
      }
      if (stationH.get(`${huawei5}`) == null) {
         huawei5 -= stationH.size - 1;
      }
         stationH.set(macauc, 3);
         huawei5 -= macauc.length;
      predictionwinR = !predictionwinR;
      short_obO -= parseFloat(`${3 ^ parseInt(`${episodeW}`)}`);
   while (5 < (debugj.length ^ 2) || 3.29 < (mini6 / 4.75)) {
      mini6 -= parseFloat(`${2}`);
      break;
   }
   for (let w = 0; w < 3; w++) {
      debugj += `${minis.size * backwardK}`;
   }
      minis = new Map([[circlep, circlep.length ^ dycreatorq.length]]);
   let shootV = short_obO <= 9141684.0;
   do {
      short_obO -= parseFloat(`${iconnewsshareO.length ^ historyo}`);
      if (shootV) {
         break;
      }
   } while ((halffieldimageZ.includes(`${short_obO}`)) && shootV);
    await refreshUserState();

      halffieldimageZ += "1";
   while (minis.size < 4) {
      minis.set(`${historyo}`, 2 - historyo);
      break;
   }
   while (iconnewsshareO.length == parseInt(`${short_obO}`)) {
       let librrcu = 0;
       let vignette5 = 2.0;
         vignette5 *= librrcu;
      for (let i = 0; i < 3; i++) {
         vignette5 -= parseInt(`${vignette5}`);
      }
      if (vignette5 >= 2.86) {
         vignette5 += 3 * librrcu;
      }
      while ((vignette5 / (Math.max(4.54, 9))) == 3.87 && 5.78 == (vignette5 / (Math.max(4.54, 10)))) {
          let halfk: Map<any, any> = new Map([[String.fromCharCode(115,116,111,114,105,110,103,95,107,95,54,50,0),239], [String.fromCharCode(121,95,53,54,95,97,110,99,101,115,116,114,121,0),441], [String.fromCharCode(101,108,101,109,115,95,110,95,49,48,48,0),828]]);
          let bellK: Array<any> = [96, 717];
         librrcu += 2 * halfk.size;
         halfk = new Map([[`${bellK.length}`, bellK.length - 2]]);
         break;
      }
      while ((3 ^ librrcu) >= 3 || 4.37 >= (vignette5 / 3.60)) {
         librrcu >>= Math.min(Math.abs(librrcu >> (Math.min(Math.abs(parseInt(`${vignette5}`)), 2))), 2);
         break;
      }
         vignette5 /= Math.max(1, parseInt(`${vignette5}`) << (Math.min(3, Math.abs(librrcu))));
      short_obO /= Math.max(1, parseFloat(`${2 | parseInt(`${vignette5}`)}`));
      break;
   }
   let penaltygoalN = circlep.length >= 7934499;
   do {
      circlep = `${minis.size | backwardK}`;
      if (penaltygoalN) {
         break;
      }
   } while (((backwardK - 1) == 4 && (circlep.length - 1) == 4) && penaltygoalN);
       let rewardw = String.fromCharCode(111,95,56,50,95,109,112,101,103,97,117,100,105,111,100,97,116,97,0);
      while (!rewardw.endsWith(rewardw)) {
          let with_oik: Map<any, any> = new Map([[String.fromCharCode(112,114,101,97,109,98,108,101,95,106,95,49,51,0),990], [String.fromCharCode(115,116,114,105,112,95,121,95,56,50,0),668]]);
          let notificationfillemptys = 3;
          let crownW = false;
          let build9 = String.fromCharCode(115,105,109,112,108,101,116,97,103,95,99,95,57,0);
         rewardw += `${((crownW ? 2 : 4))}`;
         with_oik.set(build9, notificationfillemptys * 1);
         notificationfillemptys ^= 2;
         crownW = 60 == notificationfillemptys;
         build9 += `${build9.length}`;
         break;
      }
         rewardw = "2";
      for (let y = 0; y < 3; y++) {
          let libreactperfloggerjniU = String.fromCharCode(120,95,56,48,95,100,111,99,117,109,101,110,116,115,0);
          let cancelN = String.fromCharCode(99,97,110,99,101,108,108,101,114,95,110,95,54,57,0);
          let forwardB = 0.0;
          let gradleb = 0.0;
          let filel = 5;
         rewardw = `${filel - parseInt(`${gradleb}`)}`;
         libreactperfloggerjniU += `${cancelN.length | 3}`;
         cancelN = `${parseInt(`${forwardB}`) & 3}`;
         forwardB /= Math.max(parseFloat(`${libreactperfloggerjniU.length % (Math.max(cancelN.length, 3))}`), 1);
         gradleb += parseInt(`${forwardB}`) + 3;
         filel *= parseInt(`${forwardB}`);
      }
      halffieldimageZ += "3";
      auto_fN /= Math.max(4, (parseFloat(`${parseInt(`${auto_fN}`) << (Math.min(1, Math.abs((predictionwinR ? 1 : 5))))}`)));
      historyo &= statisticsinactive9.length | 3;
   if (minis.size >= basketballhometeam_.length) {
      minis = new Map([[rightT, 3]]);
   }
   if ((dycreatorq.length % 2) == 5 && (historyo % (Math.max(dycreatorq.length, 6))) == 2) {
       let fastforwardq = 5;
       let selectedN = String.fromCharCode(103,95,57,50,95,99,104,101,99,107,108,105,110,101,0);
       let specb = 3.0;
          let bootsplashY = 5.0;
         fastforwardq |= 1;
         bootsplashY /= Math.max(2, 2);
      while (!selectedN.includes(`${fastforwardq}`)) {
         fastforwardq += 2;
         break;
      }
          let libreactnativejnik = String.fromCharCode(101,121,101,100,114,111,112,112,101,114,95,113,95,56,52,0);
         selectedN += `${3 | parseInt(`${specb}`)}`;
         libreactnativejnik = `${libreactnativejnik.length}`;
      if (2 == (3 * fastforwardq)) {
          let greenw = String.fromCharCode(104,95,57,53,95,118,99,100,97,116,97,0);
          let mbbanner_ = String.fromCharCode(114,101,115,112,111,110,100,115,95,56,95,51,50,0);
         selectedN = `${fastforwardq}`;
         greenw += `${mbbanner_.length}`;
         mbbanner_ = "1";
      }
          let libavcodec9 = 2.0;
          let otherb = true;
         fastforwardq &= parseInt(`${libavcodec9}`) >> (Math.min(2, Math.abs(1)));
         libavcodec9 -= (parseFloat(`${(otherb ? 4 : 1)}`));
      if (2 <= selectedN.length) {
          let watchM = String.fromCharCode(115,111,105,115,99,111,110,110,101,99,116,105,110,103,95,118,95,53,48,0);
          let strt = 3.0;
         specb *= 2 % (Math.max(9, watchM.length));
         watchM += "2";
         strt -= parseFloat(`${3}`);
      }
       let gestureA = false;
       let yinit_18 = true;
         specb -= selectedN.length << (Math.min(Math.abs(1), 1));
      while (4 <= selectedN.length) {
          let zhubo9 = 5.0;
          let launcher4 = String.fromCharCode(116,101,115,115,101,108,108,97,116,101,95,117,95,56,0);
         fastforwardq %= Math.max(3, fastforwardq << (Math.min(Math.abs(parseInt(`${specb}`)), 3)));
         zhubo9 /= Math.max(parseFloat(`${launcher4.length}`), 2);
         launcher4 = `${launcher4.length - 1}`;
         break;
      }
      historyo |= backwardK;
   }
   let fcdaebecbcbafcdfceaaeccfeacdbs = 7249022 <= minis.size;
   do {
       let mutedt = String.fromCharCode(115,104,97,114,101,115,95,117,95,49,54,0);
         mutedt = `${mutedt.length}`;
      if (1 <= mutedt.length) {
         mutedt += `${mutedt.length + mutedt.length}`;
      }
         mutedt = `${mutedt.length >> (Math.min(4, mutedt.length))}`;
      minis = new Map([[`${minis.size}`, backwardK]]);
      if (fcdaebecbcbafcdfceaaeccfeacdbs) {
         break;
      }
   } while ((parseInt(`${episodeW}`) <= minis.size) && fcdaebecbcbafcdfceaaeccfeacdbs);
      minis.set(`${episodeW}`, 1);
       let statisticsinactiveI = String.fromCharCode(106,95,56,57,95,99,117,114,114,101,110,116,108,121,0);
          let cornerS = String.fromCharCode(116,95,49,54,95,114,116,115,112,99,111,100,101,115,0);
         statisticsinactiveI = `${(String.fromCharCode(106,0) == statisticsinactiveI ? cornerS.length : statisticsinactiveI.length)}`;
      for (let w = 0; w < 3; w++) {
         statisticsinactiveI = `${statisticsinactiveI.length}`;
      }
         statisticsinactiveI += `${(statisticsinactiveI == String.fromCharCode(81,0) ? statisticsinactiveI.length : statisticsinactiveI.length)}`;
      mini6 *= parseFloat(`${statisticsinactiveI.length}`);
       let floatinge = 0;
         floatinge %= Math.max(floatinge % 3, 3);
          let gestureJ = String.fromCharCode(98,111,117,110,100,115,112,101,99,105,102,105,99,95,55,95,57,55,0);
          let penaltyA = 5;
         floatinge -= gestureJ.length >> (Math.min(4, Math.abs(penaltyA)));
      let renewL = floatinge >= 5240632;
      do {
         floatinge -= floatinge;
         if (renewL) {
            break;
         }
      } while (renewL && (3 == (floatinge ^ floatinge)));
      episodeW /= Math.max(1, halffieldimageZ.length);
    setRefreshing(false);
  };

  const refreshUserState = async () => {
       let rankz = 4;
    let anytimeY = String.fromCharCode(109,95,55,95,117,110,115,99,104,101,100,117,108,101,0);
    let sort9: Map<any, any> = new Map([[String.fromCharCode(100,95,57,55,95,112,114,101,100,105,99,116,105,111,110,115,0),399], [String.fromCharCode(116,105,108,101,100,95,53,95,55,51,0),577]]);
    let styleb = String.fromCharCode(115,95,54,55,95,100,101,109,97,116,101,114,105,97,108,105,122,101,0);
    let xvodX = String.fromCharCode(117,95,51,53,95,97,99,116,105,118,97,116,101,0);
    let libzeusR = 2;
    let rewind5 = String.fromCharCode(106,95,52,57,95,99,111,109,109,105,115,115,105,111,110,0);
    let downloadl = String.fromCharCode(109,105,100,110,105,103,104,116,95,55,95,49,48,0);
    let configure6: Array<any> = [970, 552, 87];
    let turndownF = 5.0;
   if (rewind5 == String.fromCharCode(115,0) || 3 > xvodX.length) {
      rewind5 += `${styleb.length / (Math.max(1, 4))}`;
   }
      anytimeY = "3";
      rewind5 = `${3 & xvodX.length}`;
   for (let a = 0; a < 1; a++) {
      libzeusR ^= anytimeY.length;
   }
   for (let l = 0; l < 3; l++) {
       let libreactnativejnie = 3.0;
       let gdtadvy: Map<any, any> = new Map([[String.fromCharCode(111,95,56,57,95,98,111,116,104,0),String.fromCharCode(117,95,55,53,95,121,111,110,108,121,120,0)], [String.fromCharCode(102,95,52,50,95,108,105,109,105,116,0),String.fromCharCode(117,95,57,56,95,109,101,110,117,0)]]);
          let live6 = 2;
          let chartO: Map<any, any> = new Map([[String.fromCharCode(102,95,57,55,95,98,105,116,0),637], [String.fromCharCode(118,101,108,97,112,115,101,100,116,105,109,101,114,95,48,95,49,0),284], [String.fromCharCode(106,95,53,48,95,99,111,110,102,108,105,99,116,115,0),778]]);
         gdtadvy.set(`${libreactnativejnie}`, parseInt(`${libreactnativejnie}`) | live6);
         live6 *= chartO.size * 1;
         chartO.set(`${chartO.size}`, 3);
         gdtadvy = new Map([[`${gdtadvy.size}`, gdtadvy.size & 2]]);
      downloadl += `${xvodX.length}`;
   }

    const result = await wwIconscheduleColors.getUserDetails();

   for (let l = 0; l < 1; l++) {
      styleb = `${sort9.size}`;
   }
   let libavfilter3 = 9868967 >= sort9.size;
   do {
       let tumbnailQ: Array<any> = [307, 385];
       let contextw = 2.0;
       let iconmore7 = 3.0;
       let morew = String.fromCharCode(115,101,103,109,101,110,116,101,100,95,52,95,49,51,0);
       let defaultroombgE = String.fromCharCode(99,95,50,49,95,114,101,99,111,110,102,105,103,117,114,97,116,105,111,110,0);
       let text9 = 1;
       let l_positionU = 2;
          let navigationN: Array<any> = [String.fromCharCode(104,97,115,104,100,101,115,116,114,111,121,95,51,95,56,52,0), String.fromCharCode(110,95,50,57,95,116,97,108,107,0), String.fromCharCode(116,104,117,110,107,95,103,95,53,51,0)];
          let notificationfillemptyx = 4.0;
          let controlB: Map<any, any> = new Map([[String.fromCharCode(122,95,56,50,95,115,121,109,98,111,108,105,99,97,116,101,0),909], [String.fromCharCode(105,110,118,97,108,105,100,97,116,101,95,111,95,57,0),775]]);
         l_positionU -= l_positionU;
         navigationN = [parseInt(`${notificationfillemptyx}`) ^ 1];
         notificationfillemptyx *= 3;
         controlB.set(`${notificationfillemptyx}`, parseInt(`${notificationfillemptyx}`) % (Math.max(navigationN.length, 9)));
          let castingl = String.fromCharCode(112,95,50,55,95,121,109,101,110,99,0);
          let dropdownS = String.fromCharCode(101,113,117,97,116,97,98,108,101,95,56,95,54,54,0);
         contextw *= parseFloat(`${defaultroombgE.length ^ morew.length}`);
         castingl = `${dropdownS.length - castingl.length}`;
         dropdownS += "3";
       let country1 = false;
          let basketballhometeamM = 1;
         defaultroombgE += `${(morew == String.fromCharCode(116,0) ? parseInt(`${contextw}`) : morew.length)}`;
         basketballhometeamM %= Math.max(3, 3);
         tumbnailQ = [defaultroombgE.length];
          let episode0: Map<any, any> = new Map([[String.fromCharCode(119,105,110,100,111,119,101,100,95,122,95,55,53,0),String.fromCharCode(113,95,54,50,95,99,101,110,116,114,101,0)], [String.fromCharCode(102,108,117,115,104,95,52,95,49,49,0),String.fromCharCode(108,95,57,54,95,101,116,104,114,101,97,100,0)]]);
          let abidetectw = 4.0;
          let privilegeO = String.fromCharCode(99,95,57,55,95,104,97,108,102,100,0);
         iconmore7 *= l_positionU % (Math.max(2, 6));
         episode0.set(`${privilegeO}`, episode0.size ^ privilegeO.length);
         abidetectw -= parseInt(`${abidetectw}`) % 1;
       let iconfeedbackK = 2.0;
       let humiditym = 5.0;
          let bridgea: Array<any> = [738, 216, 811];
         iconmore7 /= Math.max(1, defaultroombgE.length >> (Math.min(4, bridgea.length)));
      if (1.44 < contextw) {
         defaultroombgE = `${parseInt(`${humiditym}`) << (Math.min(3, Math.abs(3)))}`;
      }
         country1 = morew == String.fromCharCode(87,0);
      for (let a = 0; a < 1; a++) {
         iconmore7 /= Math.max(2, parseInt(`${iconfeedbackK}`) & 1);
      }
      while (5.52 <= humiditym && 1.45 <= (5.52 + humiditym)) {
          let components5 = String.fromCharCode(112,97,99,107,97,103,101,115,95,56,95,54,48,0);
          let s_center1 = 4.0;
         country1 = 2.18 >= iconfeedbackK;
         components5 = `${(String.fromCharCode(57,0) == components5 ? components5.length : parseInt(`${s_center1}`))}`;
         s_center1 *= parseFloat(`${components5.length * 3}`);
         break;
      }
      if (!morew.endsWith(`${tumbnailQ.length}`)) {
         morew += `${tumbnailQ.length - parseInt(`${contextw}`)}`;
      }
      let downloadp = l_positionU <= 5269657;
      do {
          let bufferV = String.fromCharCode(119,105,100,101,115,99,114,101,101,110,95,104,95,50,51,0);
          let smallZ = 3.0;
         l_positionU /= Math.max(parseInt(`${humiditym}`), 5);
         bufferV += `${(bufferV == String.fromCharCode(99,0) ? parseInt(`${smallZ}`) : bufferV.length)}`;
         smallZ /= Math.max(3, (parseFloat(`${bufferV == String.fromCharCode(48,0) ? bufferV.length : parseInt(`${smallZ}`)}`)));
         if (downloadp) {
            break;
         }
      } while (downloadp && (3 > (morew.length | l_positionU)));
      sort9 = new Map([[`${contextw}`, 3]]);
      if (libavfilter3) {
         break;
      }
   } while (libavfilter3 && (5 == (sort9.size << (Math.min(Math.abs(2), 4))) || (anytimeY.length << (Math.min(Math.abs(2), 1))) == 2));
   let awayteamfieldq = rewind5 == String.fromCharCode(101,97,117,106,102,53,52,116,0);
   do {
      rewind5 += `${libzeusR}`;
      if (awayteamfieldq) {
         break;
      }
   } while ((rewind5.length < sort9.size) && awayteamfieldq);
   while ((styleb.length % 1) == 1) {
      styleb += `${rewind5.length << (Math.min(5, configure6.length))}`;
      break;
   }
      rewind5 += "2";
    if (result == null) {

       let logouserG = String.fromCharCode(112,101,114,115,105,115,116,101,100,95,114,95,49,52,0);
          let libmapbufferjniM = String.fromCharCode(98,95,52,52,95,97,118,97,105,108,0);
          let agreementh = String.fromCharCode(99,111,111,108,100,111,119,110,95,108,95,54,56,0);
          let chinaE: Map<any, any> = new Map([[String.fromCharCode(97,115,110,95,50,95,50,53,0),473], [String.fromCharCode(120,95,49,57,95,100,105,115,116,97,110,99,101,115,0),945], [String.fromCharCode(98,95,55,56,95,109,97,114,103,105,110,0),874]]);
         logouserG = `${2 | agreementh.length}`;
         libmapbufferjniM += `${chinaE.size}`;
         agreementh = `${libmapbufferjniM.length % (Math.max(8, chinaE.size))}`;
          let minivodp = true;
          let subtextQ: Map<any, any> = new Map([[String.fromCharCode(104,95,56,55,95,119,111,114,107,105,110,103,0),88], [String.fromCharCode(99,111,109,112,108,101,116,101,95,116,95,54,50,0),985]]);
          let bellD: Array<any> = [String.fromCharCode(100,120,110,100,99,95,100,95,49,55,0), String.fromCharCode(111,95,57,57,95,108,97,99,101,115,0), String.fromCharCode(105,108,111,103,95,110,95,57,48,0)];
         logouserG += `${(logouserG.length ^ (minivodp ? 3 : 1))}`;
         minivodp = bellD.length < 77;
         subtextQ = new Map([[`${subtextQ.size}`, bellD.length & subtextQ.size]]);
         logouserG += `${logouserG.length}`;
      rankz |= styleb.length;
      downloadl += `${(styleb == String.fromCharCode(76,0) ? styleb.length : anytimeY.length)}`;
   let progressK = libzeusR <= 6284196;
   do {
      libzeusR %= Math.max(1, 4);
      if (progressK) {
         break;
      }
   } while (progressK && (3 == (libzeusR / (Math.max(3, configure6.length))) || 1 == (3 / (Math.max(10, libzeusR)))));
       let megaphonec: Array<any> = [527, 697];
       let stylesW = 5.0;
       let imagemanagerU = 4.0;
      let shootyesgoalr = 7186204.0 >= imagemanagerU;
      do {
          let gmailn = 5.0;
          let direct2 = String.fromCharCode(121,95,49,50,95,117,110,115,105,103,110,101,100,0);
          let sound3 = String.fromCharCode(115,95,50,55,95,112,114,111,112,115,0);
         imagemanagerU /= Math.max(4, parseFloat(`${parseInt(`${gmailn}`)}`));
         direct2 += `${1 * direct2.length}`;
         sound3 += `${2 % (Math.max(6, sound3.length))}`;
         if (shootyesgoalr) {
            break;
         }
      } while ((!megaphonec.includes(imagemanagerU)) && shootyesgoalr);
      if (imagemanagerU <= stylesW) {
          let linkK = String.fromCharCode(109,105,100,100,108,101,95,56,95,54,53,0);
          let feedbacks = 1.0;
          let mapbufferf = 0.0;
         imagemanagerU *= parseFloat(`${parseInt(`${feedbacks}`)}`);
         linkK += `${(linkK == String.fromCharCode(48,0) ? parseInt(`${mapbufferf}`) : linkK.length)}`;
         mapbufferf /= Math.max(parseFloat(`${2 >> (Math.min(3, Math.abs(parseInt(`${mapbufferf}`))))}`), 5);
      }
      while (imagemanagerU <= 4.82) {
         imagemanagerU *= parseFloat(`${parseInt(`${stylesW}`)}`);
         break;
      }
         imagemanagerU /= Math.max(3, parseFloat(`${1}`));
         stylesW += parseFloat(`${parseInt(`${stylesW}`)}`);
         megaphonec = [parseInt(`${imagemanagerU}`) % 2];
          let webviewG = true;
          let friendsb = String.fromCharCode(115,95,54,95,97,99,116,105,118,105,116,121,0);
          let defaultfootballbgI = 3;
         imagemanagerU *= parseFloat(`${megaphonec.length << (Math.min(4, Math.abs(parseInt(`${stylesW}`))))}`);
         webviewG = (friendsb.length * defaultfootballbgI) < 18;
         friendsb += `${defaultfootballbgI % 3}`;
      if (stylesW < 4.20) {
         stylesW += parseFloat(`${parseInt(`${stylesW}`) - 1}`);
      }
      for (let e = 0; e < 1; e++) {
          let hooksg = String.fromCharCode(112,95,55,95,115,116,114,105,112,101,0);
          let grayW = 5.0;
         stylesW += parseFloat(`${3 >> (Math.min(Math.abs(parseInt(`${stylesW}`)), 2))}`);
         hooksg += `${parseInt(`${grayW}`)}`;
         grayW += hooksg.length;
      }
      styleb = "1";
       let emptyX: Map<any, any> = new Map([[String.fromCharCode(112,95,49,57,95,100,105,115,112,111,115,97,98,108,101,0),960], [String.fromCharCode(115,116,101,110,99,105,108,95,110,95,53,54,0),855], [String.fromCharCode(120,95,56,54,95,103,101,110,100,101,114,0),498]]);
       let countryl = 3;
       let downloader8 = String.fromCharCode(98,115,102,115,95,57,95,54,57,0);
          let renewL = String.fromCharCode(115,95,51,49,95,97,110,99,105,108,108,97,114,121,0);
         downloader8 = `${emptyX.size}`;
         renewL += `${renewL.length % 2}`;
       let policyv = 1;
      if ((5 / (Math.max(3, policyv))) > 5) {
         emptyX.set(`${countryl}`, countryl - 1);
      }
          let loadingr = String.fromCharCode(102,97,105,108,101,100,95,102,95,52,49,0);
         downloader8 += `${downloader8.length | loadingr.length}`;
         countryl %= Math.max(policyv | downloader8.length, 1);
      for (let s = 0; s < 3; s++) {
          let iconstar0 = String.fromCharCode(97,95,52,51,95,100,97,118,100,0);
          let iconstarU = String.fromCharCode(114,95,49,49,95,97,109,112,108,105,102,121,0);
         emptyX = new Map([[downloader8, countryl]]);
         iconstar0 = "3";
         iconstarU += `${3 | iconstarU.length}`;
      }
       let borderlessc = String.fromCharCode(116,104,117,109,98,95,97,95,49,57,0);
          let aboutx = 4.0;
         policyv *= 3;
         aboutx += parseFloat(`${parseInt(`${aboutx}`) / 3}`);
         countryl ^= emptyX.size;
      xvodX += `${rankz}`;
      return;
    }

    await dispatch(updateUserAuth(result));

      rewind5 += `${downloadl.length}`;
       let suggestionD = String.fromCharCode(118,97,116,97,114,95,48,95,49,57,0);
       let acceptedr: Map<any, any> = new Map([[String.fromCharCode(108,95,51,51,95,119,111,114,100,108,105,115,116,0),163], [String.fromCharCode(100,114,97,119,95,49,95,53,55,0),434]]);
      while (5 <= (4 << (Math.min(5, suggestionD.length)))) {
         suggestionD += `${suggestionD.length & 3}`;
         break;
      }
       let giftbuttonW = String.fromCharCode(97,97,99,112,115,100,115,112,95,113,95,54,52,0);
      if (giftbuttonW.length >= 2) {
         giftbuttonW += `${suggestionD.length}`;
      }
       let championy = 0.0;
       let application1 = String.fromCharCode(109,97,110,100,97,116,111,114,121,95,98,95,57,54,0);
       let libglogc = String.fromCharCode(121,95,50,95,100,114,105,118,101,114,0);
       let analyticsi = 1.0;
       let playr = 1.0;
      libzeusR &= (suggestionD == String.fromCharCode(85,0) ? suggestionD.length : anytimeY.length);
      acceptedr.set(`${acceptedr.size}`, acceptedr.size);
   let mimok = libzeusR <= 7789598;
   do {
       let mbsplashz = String.fromCharCode(107,95,56,56,95,99,102,115,116,114,101,97,109,0);
       let dataD = String.fromCharCode(98,97,116,116,101,114,121,95,98,95,50,53,0);
       let binddatasM = 2.0;
         dataD = `${3 >> (Math.min(3, mbsplashz.length))}`;
          let weatherL = String.fromCharCode(115,112,108,105,116,95,98,95,55,0);
          let render9 = false;
         binddatasM *= (parseFloat(`${(render9 ? 2 : 2)}`));
         weatherL += "3";
         render9 = 82 <= weatherL.length && 82 <= weatherL.length;
         dataD += `${dataD.length * 1}`;
      if ((parseInt(`${binddatasM}`) / (Math.max(dataD.length, 9))) > 4) {
         dataD += `${(String.fromCharCode(111,0) == dataD ? mbsplashz.length : dataD.length)}`;
      }
       let matchesx = String.fromCharCode(121,95,54,52,95,97,100,97,112,116,97,116,105,111,110,0);
      if (matchesx.includes(`${binddatasM}`)) {
          let combineS = String.fromCharCode(117,95,53,49,95,112,101,114,109,117,116,101,115,0);
          let redirectv = String.fromCharCode(112,105,112,101,108,111,115,115,95,105,95,54,54,0);
          let eighteenB: Array<any> = [48, 523];
         binddatasM -= parseFloat(`${combineS.length * eighteenB.length}`);
         combineS += `${redirectv.length}`;
         redirectv = `${(String.fromCharCode(51,0) == redirectv ? redirectv.length : redirectv.length)}`;
      }
      let shareg = 8338057 >= matchesx.length;
      do {
         matchesx += `${(mbsplashz == String.fromCharCode(100,0) ? mbsplashz.length : matchesx.length)}`;
         if (shareg) {
            break;
         }
      } while (((parseInt(`${binddatasM}`) * 2) >= 4 || 5.34 >= (binddatasM * 4.26)) && shareg);
         binddatasM += parseFloat(`${dataD.length * mbsplashz.length}`);
       let macauE = String.fromCharCode(98,95,53,54,95,115,99,114,111,108,108,105,110,103,0);
       let filed7 = String.fromCharCode(115,117,112,112,111,114,116,97,98,108,101,95,48,95,53,53,0);
      libzeusR -= anytimeY.length ^ 2;
      if (mimok) {
         break;
      }
   } while (mimok && (styleb.length > 1));
      rankz |= sort9.size - rewind5.length;
   if (styleb.length < 3) {
      libzeusR *= anytimeY.length;
   }
    return;
  };

  return (
    <ScreenContainer>
      <TitleWithBackButtonHeader title="邀请好友奖励" />
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} tintColor="#FAC33D" />
        }
      >
        {/* <TitleWithBackButtonHeader title="邀请好友奖励" /> */}
        <View style={{ paddingHorizontal: 0 }}>
          { }
          <InviteHeader />
          { }
          <InviteCard userState={userState.user!} />
          { }

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("活动规则");
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                paddingVertical: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  textDecorationLine: "underline",
                  color: "#ffffff",
                }}
              >
                活动规则
              </Text>
            </View>
          </TouchableOpacity>
          { }
        </View>
        <InviteStep />
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({});
