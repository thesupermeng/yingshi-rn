import React, { useState } from "react";
import {
   View,
   Text,
   StyleSheet,
   Image,
   Clipboard,
   Platform,
} from "react-native";
import ScreenContainer from "../../components/container/yys_executor_expand";
import { RootStackScreenProps } from "@type/yys_settings";
import { useTheme } from "@react-navigation/native";
import TitleWithBackButtonHeader from "../../components/header/yys_anner_header";
import { useSelector } from "@hooks/yys_frame";
import { TouchableOpacity } from "@gorhom/bottom-sheet";
import NotificationModal from "../../components/modal/yys_graph";
import { yys_StatsForm } from "@utility/yys_context_muted";
import FastImage from "../../components/common/yys_vertical_collection";
import { ChangeUsernameModal } from "../../components/modal/yys_imagemanager";
import { ChangeReferrerModal } from "../../components/modal/yys_desc_gift";
import { yys_HejiCricket } from "@redux/reducers/yys_privacy_round";

export default ({ navigation }: RootStackScreenProps<"个人中心">) => {
   const { colors } = useTheme();

   const userState = useSelector<yys_HejiCricket>('userReducer');

   const [username, setUsername] = useState(userState.user?.userName ?? '');

   const [isShowUsernameModal, setShowUsernameModal] = useState(false);
   const [isShowReferrerModal, setShowReferrerModal] = useState(false);

   const [isDialogOpen, setIsDialogOpen] = useState(false);


   const toggleOverlay = () => {
      let collection7: Array<any> = [String.fromCharCode(116, 114, 117, 101, 95, 55, 95, 48, 0), String.fromCharCode(101, 114, 105, 97, 108, 105, 122, 97, 116, 105, 111, 110, 95, 118, 95, 50, 53, 0), String.fromCharCode(112, 114, 101, 115, 101, 110, 116, 101, 100, 95, 97, 95, 50, 56, 0)];
      let telegramY = String.fromCharCode(109, 95, 51, 49, 95, 115, 116, 114, 105, 100, 101, 0);
      let libhermes0 = 3.0;
      let eact0 = String.fromCharCode(115, 116, 112, 115, 95, 106, 95, 49, 53, 0);
      let libsgcorer = String.fromCharCode(97, 99, 100, 101, 99, 95, 48, 95, 52, 54, 0);
      let dycreatorN = 3;
      let linkV = String.fromCharCode(115, 105, 99, 107, 95, 97, 95, 55, 56, 0);
      let neonQ = 0.0;
      let libavdevicek = 2.0;
      let download5 = String.fromCharCode(107, 95, 54, 56, 95, 99, 108, 111, 99, 107, 100, 114, 105, 102, 116, 0);
      let incidentj = String.fromCharCode(116, 114, 97, 99, 107, 101, 114, 95, 113, 95, 56, 0);
      let modityX = true;
      let auto_ynw = 3;
      let redirectq = true;
      let basketball_: Array<any> = [37, 130, 892];
      telegramY += `${linkV.length << (Math.min(download5.length, 3))}`;
      let guide6 = false;
      let eighteenk: Array<any> = [487, 884];
      let searchbar2 = false;
      let middle8 = true;
      let scrollviewL: Map<any, any> = new Map([[String.fromCharCode(122, 95, 51, 55, 95, 119, 101, 98, 112, 97, 103, 101, 0), String.fromCharCode(119, 95, 57, 95, 100, 105, 102, 102, 105, 99, 117, 108, 116, 121, 0)], [String.fromCharCode(117, 95, 51, 95, 100, 115, 116, 0), String.fromCharCode(98, 95, 49, 52, 95, 100, 101, 108, 101, 103, 97, 116, 101, 115, 0)]]);
      guide6 = eighteenk.length > 83;
      searchbar2 = (searchbar2 ? middle8 : !searchbar2);
      middle8 = (!searchbar2 ? !middle8 : !searchbar2);
      scrollviewL.set(`${middle8}`, ((middle8 ? 4 : 4) >> (Math.min(Math.abs(2), 2))));
      guide6 = guide6 && eighteenk.length <= 17;
      download5 += `${(parseInt(`${neonQ}`) * (guide6 ? 4 : 1))}`;
      let q_position3 = String.fromCharCode(115, 116, 114, 111, 107, 101, 95, 121, 95, 55, 56, 0);
      let weiboq = String.fromCharCode(120, 95, 54, 53, 95, 109, 105, 115, 115, 101, 115, 0);
      let subs6 = 0;
      let mergerT = 8958014 <= subs6;
      do {
         let calendarW = String.fromCharCode(114, 95, 49, 48, 48, 95, 114, 111, 108, 108, 105, 110, 103, 0);
         subs6 += 1 ^ calendarW.length;
         if (mergerT) {
            break;
         }
      } while (mergerT && (q_position3.startsWith(`${subs6}`)));
      weiboq = `${weiboq.length}`;
      let libreanimatedG = String.fromCharCode(119, 101, 97, 107, 95, 48, 95, 50, 54, 0);
      let thailandS = String.fromCharCode(114, 95, 56, 56, 95, 117, 105, 110, 116, 0);
      subs6 ^= subs6 / 1;
      while (libreanimatedG.length < 3) {
         let inewarchdefaultsf = 0;
         let xnewsn = false;
         let playlistD = String.fromCharCode(115, 117, 98, 115, 101, 113, 117, 101, 110, 99, 101, 95, 55, 95, 49, 52, 0);
         let mbbannerG = true;
         libreanimatedG = `${weiboq.length}`;
         inewarchdefaultsf %= Math.max(1, 3);
         xnewsn = (xnewsn ? mbbannerG : !xnewsn);
         playlistD = `${1 + inewarchdefaultsf}`;
         mbbannerG = (((xnewsn ? playlistD.length : 100) - playlistD.length) < 100);
         break;
      }
      while (4 >= (subs6 & libreanimatedG.length) || (4 & subs6) >= 2) {
         subs6 *= libreanimatedG.length;
         break;
      }
      for (let s = 0; s < 1; s++) {
         libreanimatedG += `${libreanimatedG.length}`;
      }
      q_position3 = `${thailandS.length}`;
      let specV = String.fromCharCode(106, 95, 51, 54, 95, 115, 116, 97, 98, 108, 101, 0);
      modityX = incidentj.length < 63;
      libhermes0 /= Math.max(3, 1);
      while (3 > dycreatorN) {
         libsgcorer = `${2 + eact0.length}`;
         break;
      }
      libavdevicek -= (incidentj.length << (Math.min(2, Math.abs((modityX ? 5 : 1)))));
      let matchF = 6350874.0 <= libavdevicek;
      do {
         libavdevicek *= libsgcorer.length - download5.length;
         if (matchF) {
            break;
         }
      } while (matchF && ((parseInt(`${libavdevicek}`) + 5) <= 2 || (libavdevicek + telegramY.length) <= 2.92));
      if (incidentj.startsWith(`${libhermes0}`)) {
         incidentj += `${(parseInt(`${neonQ}`) + (modityX ? 4 : 1))}`;
      }
      dycreatorN &= auto_ynw << (Math.min(collection7.length, 5));
      let typesp: Array<any> = [743, 11, 869];
      let favorite2 = String.fromCharCode(116, 95, 57, 48, 95, 111, 112, 116, 101, 100, 0);
      let register_q5W = String.fromCharCode(109, 97, 103, 101, 95, 115, 95, 51, 48, 0);
      for (let b = 0; b < 1; b++) {
         typesp = [favorite2.length | register_q5W.length];
      }
      if (favorite2.includes(register_q5W)) {
         favorite2 += `${typesp.length & 2}`;
      }
      if (1 >= typesp.length) {
         typesp.push((register_q5W == String.fromCharCode(71, 0) ? register_q5W.length : typesp.length));
      }
      for (let s = 0; s < 3; s++) {
         register_q5W += `${typesp.length}`;
      }
      typesp.push(register_q5W.length);
      favorite2 = `${favorite2.length}`;
      favorite2 += `${typesp.length}`;
      for (let f = 0; f < 1; f++) {
         register_q5W = `${favorite2.length}`;
      }
      let brightnesso = String.fromCharCode(57, 100, 54, 105, 0) == favorite2;
      do {
         favorite2 = `${register_q5W.length}`;
         if (brightnesso) {
            break;
         }
      } while (brightnesso && (4 >= (typesp.length / 1) || (typesp.length / 1) >= 4));
      eact0 += "2";
      let combinedl = modityX ? !modityX : modityX;
      do {
         let combinet: Map<any, any> = new Map([[String.fromCharCode(114, 101, 103, 105, 115, 116, 101, 114, 105, 110, 103, 95, 111, 95, 51, 50, 0), 888], [String.fromCharCode(97, 116, 116, 97, 99, 107, 95, 106, 95, 53, 48, 0), 379], [String.fromCharCode(107, 95, 50, 50, 95, 99, 111, 110, 99, 97, 116, 101, 110, 97, 116, 101, 0), 252]]);
         while (combinet.size == combinet.size) {
            let textinputE = 5;
            combinet = new Map([[`${combinet.size}`, combinet.size << (Math.min(Math.abs(3), 4))]]);
            textinputE |= 1;
            break;
         }
         combinet = new Map([[`${combinet.size}`, combinet.size]]);
         while ((combinet.size - combinet.size) < 2) {
            combinet.set(`${combinet.size}`, combinet.size / (Math.max(7, combinet.size)));
            break;
         }
         modityX = String.fromCharCode(102, 0) == libsgcorer;
         if (combinedl) {
            break;
         }
      } while (combinedl && (!modityX));
      dycreatorN /= Math.max(parseInt(`${neonQ}`) + telegramY.length, 2);
      let typing5 = 5.0;
      typing5 += parseFloat(`${parseInt(`${typing5}`) / (Math.max(parseInt(`${typing5}`), 3))}`);
      for (let o = 0; o < 2; o++) {
         typing5 *= parseFloat(`${parseInt(`${typing5}`) - parseInt(`${typing5}`)}`);
      }
      typing5 -= parseFloat(`${1}`);
      modityX = String.fromCharCode(89, 0) == eact0;
      download5 = `${collection7.length >> (Math.min(Math.abs(2), 3))}`;
      let whistle6: Map<any, any> = new Map([[String.fromCharCode(105, 110, 99, 114, 101, 109, 101, 110, 116, 101, 100, 95, 51, 95, 56, 50, 0), String.fromCharCode(116, 95, 51, 53, 95, 99, 97, 114, 114, 121, 111, 117, 116, 0)], [String.fromCharCode(116, 114, 97, 110, 115, 105, 101, 110, 116, 95, 48, 95, 54, 57, 0), String.fromCharCode(111, 95, 56, 53, 95, 102, 97, 110, 99, 121, 0)], [String.fromCharCode(102, 95, 54, 56, 95, 97, 114, 109, 99, 97, 112, 0), String.fromCharCode(116, 95, 52, 56, 95, 102, 97, 97, 110, 105, 100, 99, 116, 0)]]);
      if (!Array.from(whistle6.keys()).includes(`${whistle6.size}`)) {
         whistle6.set(`${whistle6.size}`, 2 & whistle6.size);
      }
      while (1 < whistle6.size) {
         whistle6 = new Map([[`${whistle6.size}`, 2 ^ whistle6.size]]);
         break;
      }
      whistle6 = new Map([[`${whistle6.size}`, 3 ^ whistle6.size]]);
      telegramY = `${3 ^ linkV.length}`;
      let data4: Map<any, any> = new Map([[String.fromCharCode(104, 95, 53, 48, 95, 109, 101, 100, 105, 97, 0), 198], [String.fromCharCode(118, 100, 101, 99, 95, 53, 95, 55, 48, 0), 770], [String.fromCharCode(114, 101, 109, 111, 118, 97, 98, 108, 101, 95, 112, 95, 53, 57, 0), 155]]);
      let promotionR: Map<any, any> = new Map([[String.fromCharCode(109, 95, 49, 48, 48, 95, 103, 114, 97, 109, 115, 0), String.fromCharCode(111, 95, 49, 50, 95, 109, 107, 100, 105, 114, 0)], [String.fromCharCode(98, 106, 101, 99, 116, 95, 53, 95, 52, 54, 0), String.fromCharCode(117, 95, 56, 51, 95, 116, 104, 114, 101, 115, 104, 111, 108, 100, 115, 0)], [String.fromCharCode(100, 111, 112, 115, 95, 119, 95, 56, 51, 0), String.fromCharCode(99, 97, 108, 105, 98, 114, 97, 116, 101, 100, 95, 103, 95, 49, 48, 48, 0)]]);
      let bingi = String.fromCharCode(97, 114, 101, 110, 97, 115, 95, 115, 95, 56, 53, 0);
      let annerW = data4.size >= 9850963;
      do {
         let activityy: Map<any, any> = new Map([[String.fromCharCode(108, 95, 55, 57, 95, 114, 116, 109, 112, 99, 114, 121, 112, 116, 0), 926], [String.fromCharCode(110, 95, 50, 54, 95, 112, 97, 108, 109, 0), 850], [String.fromCharCode(110, 95, 52, 52, 95, 115, 101, 97, 108, 101, 100, 0), 13]]);
         let sortT = 0.0;
         let executorZ = String.fromCharCode(100, 101, 116, 97, 99, 104, 101, 100, 95, 119, 95, 48, 0);
         let huawei3 = String.fromCharCode(117, 95, 55, 54, 95, 109, 111, 116, 105, 111, 110, 0);
         let reminderJ = false;
         data4.set(executorZ, executorZ.length << (Math.min(Math.abs(3), 5)));
         activityy = new Map([[`${activityy.size}`, parseInt(`${sortT}`)]]);
         sortT /= Math.max(2, 5);
         huawei3 = "1";
         reminderJ = 44.46 >= sortT;
         if (annerW) {
            break;
         }
      } while ((1 > (4 + bingi.length) || 5 > (4 + bingi.length)) && annerW);
      promotionR.set(`${bingi}`, bingi.length << (Math.min(1, Math.abs(promotionR.size))));
      while (promotionR.size <= bingi.length) {
         let onewarchdefaultsV: Array<any> = [667, 536, 31];
         let tickedP: Map<any, any> = new Map([[String.fromCharCode(119, 95, 52, 52, 95, 99, 97, 115, 116, 115, 0), 287], [String.fromCharCode(99, 114, 97, 115, 104, 101, 100, 95, 113, 95, 57, 52, 0), 211], [String.fromCharCode(122, 95, 51, 52, 95, 115, 105, 103, 115, 0), 872]]);
         let lefth = true;
         let configure6 = 2.0;
         promotionR = new Map([[`${lefth}`, ((lefth ? 2 : 4) - parseInt(`${configure6}`))]]);
         onewarchdefaultsV.push(onewarchdefaultsV.length);
         tickedP = new Map([[`${tickedP.size}`, onewarchdefaultsV.length / (Math.max(4, tickedP.size))]]);
         configure6 += 1 & onewarchdefaultsV.length;
         break;
      }
      bingi = `${1 | promotionR.size}`;
      let libimagepipelinek = String.fromCharCode(105, 95, 49, 56, 95, 115, 112, 101, 97, 107, 105, 110, 103, 0);
      let iconf: Array<any> = [666, 505, 901];
      promotionR = new Map([[`${data4.size}`, 2 & promotionR.size]]);
      libimagepipelinek += `${(libimagepipelinek == String.fromCharCode(82, 0) ? iconf.length : libimagepipelinek.length)}`;
      iconf.push(iconf.length);
      while ((2 | promotionR.size) < 5 || (2 | promotionR.size) < 3) {
         let scrollviewm = String.fromCharCode(106, 118, 101, 114, 115, 105, 111, 110, 95, 53, 95, 51, 49, 0);
         let contextZ = String.fromCharCode(109, 95, 49, 57, 0);
         promotionR.set(`${bingi}`, (String.fromCharCode(78, 0) == bingi ? bingi.length : promotionR.size));
         scrollviewm = `${contextZ.length ^ scrollviewm.length}`;
         contextZ = `${(contextZ == String.fromCharCode(68, 0) ? scrollviewm.length : contextZ.length)}`;
         break;
      }
      for (let a = 0; a < 3; a++) {
         promotionR.set(`${bingi}`, 3 << (Math.min(4, Math.abs(promotionR.size))));
      }
      let borderlessx = String.fromCharCode(108, 105, 115, 116, 101, 110, 105, 110, 103, 95, 119, 95, 49, 48, 0);
      let fastforwardv = String.fromCharCode(109, 111, 110, 105, 116, 111, 114, 95, 48, 95, 51, 0);
      while (3 == (promotionR.size - fastforwardv.length)) {
         let nterstitialp = String.fromCharCode(114, 101, 118, 101, 114, 115, 101, 95, 97, 95, 51, 56, 0);
         promotionR = new Map([[`${promotionR.size}`, 3]]);
         nterstitialp = `${nterstitialp.length << (Math.min(nterstitialp.length, 5))}`;
         break;
      }
      modityX = 41.86 < libhermes0;
      let libturbomodulejsijniN: Array<any> = [199, 29, 154];
      if (libturbomodulejsijniN.length < 2) {
         libturbomodulejsijniN.push(2);
      }
      if (3 < (libturbomodulejsijniN.length / (Math.max(2, libturbomodulejsijniN.length)))) {
         let logine = 3.0;
         let traminiS = 2.0;
         let f_titleM: Array<any> = [218, 620, 978];
         libturbomodulejsijniN = [3];
         logine -= parseFloat(`${parseInt(`${logine}`)}`);
         traminiS *= parseFloat(`${parseInt(`${traminiS}`) & f_titleM.length}`);
         f_titleM = [3 / (Math.max(7, parseInt(`${traminiS}`)))];
      }
      while ((2 | libturbomodulejsijniN.length) <= 1) {
         libturbomodulejsijniN.push(3);
         break;
      }
      libsgcorer = "2";
      dycreatorN += 2 << (Math.min(2, linkV.length));
      libhermes0 -= dycreatorN % (Math.max(download5.length, 4));
      linkV = `${eact0.length ^ incidentj.length}`;
      if ((3 << (Math.min(2, incidentj.length))) <= 1 || 4 <= (3 << (Math.min(2, incidentj.length)))) {
         dycreatorN %= Math.max(2, telegramY.length & collection7.length);
      }
      let mutedm = String.fromCharCode(118, 99, 97, 114, 100, 95, 56, 95, 49, 51, 0);
      let greyH = String.fromCharCode(105, 110, 100, 101, 102, 105, 110, 105, 116, 101, 108, 121, 95, 97, 95, 50, 51, 0);
      let routerV = String.fromCharCode(100, 99, 115, 116, 114, 95, 53, 95, 55, 57, 0);
      greyH += `${routerV.length % (Math.max(mutedm.length, 5))}`;
      routerV = "2";
      routerV = "2";
      greyH += `${2 / (Math.max(3, routerV.length))}`;
      routerV += `${(String.fromCharCode(117, 0) == greyH ? routerV.length : greyH.length)}`;
      for (let q = 0; q < 3; q++) {
         routerV = `${mutedm.length}`;
      }
      let graphicsG = String.fromCharCode(109, 95, 51, 57, 95, 117, 110, 109, 97, 115, 107, 0);
      let libflipper5 = String.fromCharCode(101, 110, 104, 97, 110, 99, 101, 114, 95, 119, 95, 52, 53, 0);
      routerV += `${(String.fromCharCode(75, 0) == greyH ? greyH.length : routerV.length)}`;
      graphicsG = `${graphicsG.length}`;
      libflipper5 = `${libflipper5.length}`;
      mutedm += `${(routerV == String.fromCharCode(108, 0) ? greyH.length : routerV.length)}`;
      if (greyH == routerV) {
         routerV = `${greyH.length - 2}`;
      }
      modityX = eact0.length < 99;
      let bannert = 5379319 >= telegramY.length;
      do {
         telegramY += "2";
         if (bannert) {
            break;
         }
      } while ((telegramY.length >= collection7.length) && bannert);
      while (libsgcorer.length >= 4) {
         eact0 += `${2 | parseInt(`${neonQ}`)}`;
         break;
      }
      let storep = redirectq ? !redirectq : redirectq;
      do {
         redirectq = 73.55 == libhermes0;
         if (storep) {
            break;
         }
      } while ((redirectq) && storep);
      let fadfdeebbbfdabbbabdadfaaddaaW = String.fromCharCode(101, 112, 105, 99, 95, 120, 95, 51, 50, 0);
      let unselectedx = String.fromCharCode(101, 95, 53, 54, 95, 99, 111, 109, 112, 105, 108, 101, 0);
      for (let x = 0; x < 2; x++) {
         unselectedx += "2";
      }
      fadfdeebbbfdabbbabdadfaaddaaW += `${fadfdeebbbfdabbbabdadfaaddaaW.length}`;
      if (4 > fadfdeebbbfdabbbabdadfaaddaaW.length || unselectedx.length > 4) {
         unselectedx += "2";
      }
      for (let z = 0; z < 3; z++) {
         unselectedx += `${1 >> (Math.min(1, fadfdeebbbfdabbbabdadfaaddaaW.length))}`;
      }
      if (4 >= unselectedx.length) {
         unselectedx = "2";
      }
      while (fadfdeebbbfdabbbabdadfaaddaaW != String.fromCharCode(81, 0)) {
         let topicT = true;
         let graph8 = 2.0;
         let canvasR = 4.0;
         let unimplementedview7: Array<any> = [774, 241, 585];
         let mutedZ = String.fromCharCode(101, 95, 52, 53, 95, 105, 100, 101, 97, 108, 0);
         unselectedx += `${2 % (Math.max(parseInt(`${canvasR}`), 9))}`;
         topicT = graph8 <= 99.88 && 52 <= mutedZ.length;
         graph8 *= parseFloat(`${2 / (Math.max(1, mutedZ.length))}`);
         canvasR /= Math.max(1, (parseFloat(`${(topicT ? 1 : 5) ^ parseInt(`${graph8}`)}`)));
         unimplementedview7 = [parseInt(`${graph8}`)];
         break;
      }
      download5 = "1";
      for (let g = 0; g < 3; g++) {
         modityX = eact0.length <= libavdevicek;
      }
      if ((telegramY.length * auto_ynw) > 1 || (auto_ynw * telegramY.length) > 1) {
         let moreW = 2;
         let gemfile8 = false;
         if ((2 & moreW) <= 5 && gemfile8) {
            gemfile8 = !gemfile8 && moreW == 59;
         }
         let white9 = 5.0;
         let phoneT: Map<any, any> = new Map([[String.fromCharCode(121, 95, 53, 55, 95, 112, 105, 120, 108, 101, 116, 0), 854], [String.fromCharCode(97, 118, 100, 101, 118, 105, 99, 101, 114, 101, 115, 95, 114, 95, 49, 56, 0), 90], [String.fromCharCode(118, 95, 54, 54, 95, 114, 97, 119, 118, 105, 100, 101, 111, 0), 3]]);
         let activec = 2.0;
         moreW += phoneT.size;
         white9 /= Math.max(parseFloat(`${parseInt(`${activec}`)}`), 1);
         phoneT = new Map([[`${activec}`, parseInt(`${activec}`)]]);
         if (3 >= (5 | moreW)) {
            moreW <<= Math.min(3, Math.abs(moreW));
         }
         let reactnativejsv = String.fromCharCode(115, 95, 54, 48, 95, 112, 97, 117, 115, 101, 0);
         gemfile8 = (63 == ((gemfile8 ? reactnativejsv.length : 63) + reactnativejsv.length));
         while (!reactnativejsv.includes(`${moreW}`)) {
            reactnativejsv = `${((gemfile8 ? 3 : 2) ^ reactnativejsv.length)}`;
            break;
         }
         telegramY += `${telegramY.length}`;
      }

      setIsDialogOpen(!isDialogOpen);
   };

   const onPressUsername = () => {
      let login7 = 1.0;
      let sigmobm = 0.0;
      let historyE = String.fromCharCode(98, 108, 111, 99, 107, 115, 105, 122, 101, 95, 57, 95, 50, 49, 0);
      let placeholder0 = String.fromCharCode(105, 110, 116, 101, 114, 109, 101, 100, 105, 97, 116, 101, 95, 104, 95, 49, 51, 0);
      let descr = String.fromCharCode(122, 95, 54, 56, 95, 104, 111, 110, 101, 121, 0);
      let libglog8: Array<any> = [207, 726];
      let leftq = false;
      let pointr = 3.0;
      let oinit_bZ = 4.0;
      let infou: Array<any> = [String.fromCharCode(104, 101, 97, 100, 112, 104, 111, 110, 101, 95, 54, 95, 52, 57, 0), String.fromCharCode(107, 95, 56, 55, 95, 114, 101, 116, 114, 105, 101, 114, 0), String.fromCharCode(97, 112, 97, 114, 97, 109, 115, 95, 119, 95, 56, 49, 0)];
      if (5 == placeholder0.length && !leftq) {
         placeholder0 += `${libglog8.length}`;
      }
      leftq = !descr.startsWith(`${pointr}`);
      for (let e = 0; e < 1; e++) {
         leftq = historyE.length <= 44;
      }
      let liveg = String.fromCharCode(115, 95, 54, 95, 115, 116, 97, 108, 108, 0);
      let minivodD = String.fromCharCode(109, 95, 49, 54, 0);
      let matches2: Array<any> = [26, 584, 93];
      minivodD = `${minivodD.length}`;
      let schedulerT = matches2.length >= 7076888;
      do {
         matches2 = [2 * matches2.length];
         if (schedulerT) {
            break;
         }
      } while ((minivodD.length < 2) && schedulerT);
      liveg += `${minivodD.length}`;
      minivodD += `${liveg.length}`;
      minivodD += `${matches2.length}`;
      if (minivodD.endsWith(`${matches2.length}`)) {
         let libcxxcomponentsZ = String.fromCharCode(119, 112, 116, 104, 114, 101, 97, 100, 115, 95, 103, 95, 52, 56, 0);
         let reactnativejso = String.fromCharCode(104, 95, 51, 48, 95, 115, 111, 114, 116, 101, 114, 0);
         matches2 = [libcxxcomponentsZ.length | reactnativejso.length];
      }
      let recommendationH = 4.0;
      for (let u = 0; u < 1; u++) {
         minivodD += `${liveg.length / 2}`;
      }
      let phone0 = String.fromCharCode(116, 95, 54, 51, 95, 99, 111, 110, 116, 105, 110, 117, 101, 115, 0);
      minivodD = `${3 + parseInt(`${recommendationH}`)}`;
      phone0 = `${phone0.length + phone0.length}`;
      historyE += `${(minivodD == String.fromCharCode(103, 0) ? liveg.length : minivodD.length)}`;
      let launcheri = sigmobm <= 9111796.0;
      do {
         sigmobm /= Math.max(parseFloat(`${parseInt(`${pointr}`)}`), 4);
         if (launcheri) {
            break;
         }
      } while (launcheri && (!descr.includes(`${sigmobm}`)));
      pointr *= historyE.length;
      let bufferQ = leftq ? !leftq : leftq;
      do {
         leftq = 47.74 >= (login7 + sigmobm);
         if (bufferQ) {
            break;
         }
      } while ((leftq) && bufferQ);
      for (let d = 0; d < 1; d++) {
         leftq = (pointr / (Math.max(9, placeholder0.length))) <= 75.78;
      }
      for (let l = 0; l < 1; l++) {
         leftq = placeholder0 == String.fromCharCode(66, 0);
      }
      for (let p = 0; p < 2; p++) {
         let invitek: Map<any, any> = new Map([[String.fromCharCode(103, 95, 55, 52, 95, 105, 110, 118, 111, 107, 101, 0), 452], [String.fromCharCode(112, 114, 101, 99, 111, 109, 112, 117, 116, 101, 95, 115, 95, 53, 52, 0), 974]]);
         let libfollyn = String.fromCharCode(115, 117, 98, 115, 101, 113, 117, 101, 110, 99, 101, 115, 95, 105, 95, 55, 53, 0);
         let graphicsi = false;
         let fieldV = String.fromCharCode(114, 101, 118, 101, 114, 116, 95, 122, 95, 51, 56, 0);
         graphicsi = String.fromCharCode(104, 0) == fieldV && invitek.size >= 62;
         for (let l = 0; l < 1; l++) {
            invitek.set(`${graphicsi}`, (libfollyn == String.fromCharCode(87, 0) ? (graphicsi ? 4 : 4) : libfollyn.length));
         }
         libfollyn += `${(3 % (Math.max(3, (graphicsi ? 2 : 3))))}`;
         libfollyn += `${libfollyn.length}`;
         let videocommonY = libfollyn == String.fromCharCode(106, 113, 52, 0);
         do {
            libfollyn += `${invitek.size / (Math.max(1, 7))}`;
            if (videocommonY) {
               break;
            }
         } while ((1 == (libfollyn.length | 1)) && videocommonY);
         while (5 > libfollyn.length) {
            let termsI: Map<any, any> = new Map([[String.fromCharCode(97, 95, 50, 50, 95, 115, 99, 114, 101, 101, 110, 112, 114, 101, 115, 115, 111, 0), String.fromCharCode(115, 101, 114, 105, 97, 108, 110, 111, 95, 97, 95, 49, 51, 0)], [String.fromCharCode(106, 95, 50, 52, 95, 99, 104, 101, 99, 107, 112, 97, 99, 107, 101, 116, 0), String.fromCharCode(118, 95, 55, 95, 97, 110, 99, 105, 108, 108, 97, 114, 121, 0)], [String.fromCharCode(117, 95, 56, 57, 95, 103, 101, 110, 101, 114, 97, 116, 111, 114, 115, 0), String.fromCharCode(104, 95, 49, 54, 95, 119, 101, 97, 107, 0)]]);
            let injuryn: Map<any, any> = new Map([[String.fromCharCode(116, 95, 49, 51, 95, 120, 119, 109, 97, 0), 898], [String.fromCharCode(118, 95, 55, 53, 95, 105, 110, 116, 101, 114, 108, 101, 97, 118, 101, 100, 0), 14], [String.fromCharCode(102, 97, 105, 108, 117, 114, 101, 95, 105, 95, 49, 54, 0), 800]]);
            let giftg = 5;
            libfollyn += `${((graphicsi ? 4 : 5) / 3)}`;
            termsI = new Map([[`${injuryn.size}`, injuryn.size]]);
            giftg %= Math.max(termsI.size, 2);
            break;
         }
         invitek.set(`${libfollyn}`, 3);
         while (!graphicsi) {
            libfollyn += `${(libfollyn == String.fromCharCode(114, 0) ? libfollyn.length : (graphicsi ? 3 : 2))}`;
            break;
         }
         let klevinn = String.fromCharCode(118, 95, 57, 51, 95, 116, 114, 101, 97, 116, 0);
         graphicsi = !libfollyn.includes(`${graphicsi}`);
         klevinn += `${klevinn.length ^ klevinn.length}`;
         leftq = !leftq;
      }
      while (pointr <= login7) {
         pointr += 1 ^ parseInt(`${login7}`);
         break;
      }
      while (4.27 < (sigmobm / 1.33)) {
         sigmobm /= Math.max((parseFloat(`${(leftq ? 5 : 3)}`)), 1);
         break;
      }
      placeholder0 = `${(placeholder0 == String.fromCharCode(99, 0) ? descr.length : placeholder0.length)}`;
      if (!placeholder0.endsWith(`${leftq}`)) {
         let typesz = String.fromCharCode(110, 97, 110, 111, 115, 95, 119, 95, 49, 50, 0);
         for (let y = 0; y < 2; y++) {
            let nativeS: Array<any> = [900, 25];
            let assist9 = String.fromCharCode(100, 95, 52, 54, 95, 111, 118, 101, 114, 119, 114, 105, 116, 101, 0);
            let sport_ = String.fromCharCode(108, 111, 111, 107, 115, 95, 119, 95, 49, 50, 0);
            typesz = `${(assist9 == String.fromCharCode(71, 0) ? nativeS.length : assist9.length)}`;
            nativeS.push(sport_.length & 1);
         }
         let crown9 = typesz.length <= 8825864;
         do {
            typesz = `${typesz.length}`;
            if (crown9) {
               break;
            }
         } while ((!typesz.endsWith(`${typesz.length}`)) && crown9);
         typesz += `${typesz.length}`;
         leftq = placeholder0.length < 14;
      }
      descr = `${(parseInt(`${pointr}`) << (Math.min(1, Math.abs((leftq ? 5 : 4)))))}`;
      leftq = placeholder0 == String.fromCharCode(67, 0);
      login7 /= Math.max(1, 1);
      let pangleV = String.fromCharCode(122, 95, 52, 95, 98, 97, 99, 107, 116, 114, 97, 99, 101, 0);
      let sheetl = 2;
      let libreactnativejniA: Map<any, any> = new Map([[String.fromCharCode(114, 95, 51, 51, 95, 114, 116, 115, 112, 99, 111, 100, 101, 115, 0), false], [String.fromCharCode(118, 95, 53, 57, 95, 112, 101, 114, 112, 101, 110, 100, 105, 99, 117, 108, 97, 114, 0), true]]);
      while (Array.from(libreactnativejniA.values()).includes(sheetl)) {
         libreactnativejniA = new Map([[`${libreactnativejniA.size}`, libreactnativejniA.size]]);
         break;
      }
      if ((libreactnativejniA.size % 4) == 1 && (libreactnativejniA.size % 4) == 2) {
         let refreshw = 4.0;
         libreactnativejniA.set(`${refreshw}`, sheetl);
      }
      sheetl += pangleV.length;
      let acceptedU = String.fromCharCode(98, 95, 54, 48, 95, 116, 114, 101, 110, 100, 108, 105, 110, 101, 0);
      let backZ: Array<any> = [247, 230];
      let statsq = String.fromCharCode(115, 111, 109, 101, 116, 104, 105, 110, 103, 95, 57, 95, 56, 0);
      sheetl %= Math.max(1, statsq.length - pangleV.length);
      acceptedU = `${(acceptedU == String.fromCharCode(97, 0) ? backZ.length : acceptedU.length)}`;
      backZ.push(1 | backZ.length);
      statsq = `${(acceptedU == String.fromCharCode(117, 0) ? backZ.length : acceptedU.length)}`;
      sheetl &= sheetl & 2;
      while ((sheetl + 2) == 2 && (sheetl + libreactnativejniA.size) == 2) {
         sheetl /= Math.max(2, pangleV.length % 1);
         break;
      }
      libreactnativejniA = new Map([[`${libreactnativejniA.size}`, libreactnativejniA.size]]);
      let philippinesT = 3.0;
      let libswresampleo = String.fromCharCode(114, 101, 100, 117, 110, 100, 97, 110, 99, 121, 95, 111, 95, 54, 48, 0);
      sheetl /= Math.max(parseInt(`${philippinesT}`), 1);
      philippinesT /= Math.max(libswresampleo.length - libswresampleo.length, 5);
      sheetl += sheetl;
      descr += `${pangleV.length}`;

      setShowUsernameModal(true);
   }

   const onUsernameUpdateSuccess = (newUsername: string) => {
      setUsername(newUsername);
   }

   const onPressReferrer = () => {
      let penaltyX = 5.0;
      let statisticsZ = String.fromCharCode(113, 109, 97, 116, 95, 114, 95, 57, 57, 0);
      let unread7: Map<any, any> = new Map([[String.fromCharCode(99, 95, 53, 50, 95, 115, 101, 97, 114, 99, 104, 101, 100, 0), String.fromCharCode(107, 95, 54, 52, 95, 115, 101, 101, 100, 101, 100, 0)], [String.fromCharCode(114, 101, 102, 105, 110, 101, 95, 116, 95, 53, 49, 0), String.fromCharCode(116, 95, 54, 49, 95, 119, 111, 114, 107, 105, 110, 103, 0)]]);
      let interstitialS = String.fromCharCode(110, 95, 51, 50, 95, 103, 114, 97, 112, 104, 105, 99, 115, 0);
      let sidew: Map<any, any> = new Map([[String.fromCharCode(102, 108, 111, 97, 116, 105, 110, 103, 95, 57, 95, 55, 48, 0), 98], [String.fromCharCode(115, 95, 56, 56, 95, 114, 101, 103, 105, 115, 116, 101, 114, 102, 100, 115, 0), 341], [String.fromCharCode(104, 95, 56, 55, 95, 99, 104, 101, 99, 107, 0), 879]]);
      let privilegeX: Map<any, any> = new Map([[String.fromCharCode(115, 121, 110, 116, 104, 101, 115, 105, 122, 101, 95, 122, 95, 53, 56, 0), 603], [String.fromCharCode(99, 95, 49, 52, 95, 108, 111, 115, 115, 121, 0), 120], [String.fromCharCode(99, 95, 51, 49, 95, 109, 97, 105, 110, 0), 396]]);
      let verticals = 5.0;
      let hoverg = false;
      let infoy = String.fromCharCode(118, 102, 108, 97, 103, 95, 121, 95, 53, 0);
      let cross9 = String.fromCharCode(115, 111, 99, 105, 97, 108, 95, 50, 95, 49, 54, 0);
      let filled4: Array<any> = [String.fromCharCode(109, 111, 110, 111, 115, 112, 97, 99, 101, 95, 113, 95, 52, 56, 0), String.fromCharCode(103, 95, 51, 49, 95, 117, 109, 98, 101, 114, 0)];
      let componentregistryQ = String.fromCharCode(98, 95, 52, 48, 95, 115, 97, 110, 100, 98, 111, 120, 0);
      let models6 = 3.0;
      let guide0: Array<any> = [389, 146];
      let libsentryK = String.fromCharCode(110, 95, 50, 53, 95, 116, 104, 117, 109, 98, 115, 117, 112, 0);
      let langkeyt = false;
      let commono = 2.0;
      let membership2 = 2.0;
      let malaysiaN = String.fromCharCode(99, 111, 111, 114, 100, 105, 110, 97, 116, 111, 114, 115, 95, 107, 95, 57, 49, 0);
      let activity1 = String.fromCharCode(106, 95, 49, 57, 95, 116, 116, 97, 103, 0);
      langkeyt = commono == 96.13 && membership2 == 96.13;
      membership2 -= activity1.length;
      malaysiaN = `${activity1.length}`;
      if ((commono + 3.19) == 2.93 || !langkeyt) {
         commono /= Math.max(4, parseFloat(`${parseInt(`${commono}`) + 2}`));
      }
      let bodant = commono <= 7585519.0;
      do {
         let t_center0 = String.fromCharCode(121, 95, 56, 56, 95, 98, 101, 105, 103, 110, 101, 116, 0);
         let detail9: Array<any> = [987, 109, 306];
         commono += (parseFloat(`${(langkeyt ? 4 : 5) | parseInt(`${commono}`)}`));
         t_center0 += "2";
         detail9 = [t_center0.length];
         if (bodant) {
            break;
         }
      } while ((!langkeyt) && bodant);
      let abidetect0 = 7417083.0 >= commono;
      do {
         let mailV = String.fromCharCode(120, 105, 110, 103, 95, 114, 95, 51, 0);
         commono /= Math.max(5, parseFloat(`${mailV.length}`));
         if (abidetect0) {
            break;
         }
      } while (abidetect0 && (2.31 == (5.32 + commono) || langkeyt));
      commono /= Math.max(3, parseFloat(`${parseInt(`${commono}`) >> (Math.min(3, Math.abs(3)))}`));
      let megaphoneo = 2.0;
      statisticsZ += `${filled4.length * 3}`;
      componentregistryQ = `${(String.fromCharCode(55, 0) == cross9 ? sidew.size : cross9.length)}`;
      let checkboxa = String.fromCharCode(119, 95, 49, 57, 95, 112, 114, 101, 109, 117, 108, 116, 115, 116, 114, 97, 105, 103, 104, 116, 0);
      let config5 = false;
      while (checkboxa.length < 5) {
         checkboxa = `${1 * checkboxa.length}`;
         break;
      }
      let anytimeF: Map<any, any> = new Map([[String.fromCharCode(118, 95, 50, 54, 95, 103, 101, 116, 110, 101, 116, 119, 111, 114, 107, 112, 97, 114, 97, 109, 115, 0), 821], [String.fromCharCode(115, 116, 114, 117, 99, 116, 117, 114, 101, 95, 50, 95, 56, 54, 0), 331], [String.fromCharCode(104, 95, 52, 95, 102, 97, 108, 115, 101, 0), 3]]);
      while (!checkboxa.endsWith(`${config5}`)) {
         let unselected0: Map<any, any> = new Map([[String.fromCharCode(108, 111, 119, 98, 100, 95, 114, 95, 52, 55, 0), String.fromCharCode(114, 95, 51, 53, 95, 98, 111, 117, 110, 100, 97, 114, 121, 0)], [String.fromCharCode(100, 95, 50, 50, 95, 118, 111, 116, 101, 0), String.fromCharCode(112, 114, 101, 115, 101, 116, 95, 104, 95, 55, 55, 0)], [String.fromCharCode(103, 95, 51, 55, 95, 103, 114, 97, 112, 104, 99, 121, 99, 108, 101, 115, 0), String.fromCharCode(116, 101, 115, 116, 99, 108, 101, 97, 110, 95, 109, 95, 56, 48, 0)]]);
         let libjsijniprofilerM = 3.0;
         let short__J: Map<any, any> = new Map([[String.fromCharCode(109, 95, 55, 53, 95, 98, 105, 116, 111, 112, 115, 0), false], [String.fromCharCode(122, 95, 57, 53, 95, 112, 117, 114, 103, 101, 0), false]]);
         let splash2 = 3.0;
         config5 = anytimeF.size <= 50;
         unselected0 = new Map([[`${short__J.size}`, 2 & parseInt(`${splash2}`)]]);
         libjsijniprofilerM -= 1 << (Math.min(1, Math.abs(parseInt(`${libjsijniprofilerM}`))));
         short__J = new Map([[`${unselected0.size}`, 1 - parseInt(`${splash2}`)]]);
         break;
      }
      for (let x = 0; x < 1; x++) {
         let sinaR = String.fromCharCode(99, 95, 53, 57, 95, 99, 104, 97, 112, 0);
         checkboxa = "2";
         sinaR += `${sinaR.length}`;
      }
      config5 = 89 <= anytimeF.size;
      let successj = String.fromCharCode(106, 95, 50, 95, 103, 101, 116, 114, 97, 110, 100, 111, 109, 0);
      anytimeF = new Map([[`${anytimeF.size}`, anytimeF.size / 3]]);
      successj = `${successj.length & successj.length}`;
      statisticsZ = `${parseInt(`${verticals}`) ^ filled4.length}`;
      filled4 = [cross9.length];
      let rewardvideo5 = 8494974 <= infoy.length;
      do {
         let chartk = String.fromCharCode(97, 118, 112, 114, 111, 103, 114, 97, 109, 95, 120, 95, 49, 50, 0);
         let datao = String.fromCharCode(108, 95, 51, 54, 95, 114, 101, 115, 0);
         let private_xO = 4;
         let dangerY = String.fromCharCode(108, 105, 115, 116, 101, 110, 101, 114, 115, 95, 101, 95, 55, 57, 0);
         if (2 < (5 << (Math.min(2, Math.abs(private_xO)))) && 4 < (5 << (Math.min(2, Math.abs(private_xO))))) {
            private_xO *= private_xO + datao.length;
         }
         if (private_xO > 5) {
            let scrollview6 = 0.0;
            let launcherf: Array<any> = [84, 944, 868];
            private_xO &= 2;
            scrollview6 += parseFloat(`${parseInt(`${scrollview6}`) | launcherf.length}`);
            launcherf = [1];
         }
         for (let f = 0; f < 2; f++) {
            dangerY += `${chartk.length % 2}`;
         }
         let chinasamew = true;
         let projecta = true;
         let temperaturec = dangerY.length <= 8258940;
         do {
            dangerY = `${1 - datao.length}`;
            if (temperaturec) {
               break;
            }
         } while (temperaturec && (datao == String.fromCharCode(53, 0)));
         let rewindb = false;
         let linkz: Array<any> = [686, 974];
         let orangek = String.fromCharCode(110, 95, 53, 57, 95, 100, 101, 116, 101, 114, 109, 105, 110, 105, 115, 116, 105, 99, 0);
         datao = "3";
         rewindb = (orangek.length << (Math.min(2, linkz.length))) == 44;
         linkz.push(orangek.length >> (Math.min(Math.abs(3), 4)));
         for (let z = 0; z < 1; z++) {
            let libzeus4: Array<any> = [String.fromCharCode(115, 117, 109, 100, 105, 102, 102, 95, 55, 95, 56, 50, 0), String.fromCharCode(116, 95, 57, 48, 95, 112, 117, 116, 110, 117, 109, 112, 97, 115, 115, 101, 115, 0), String.fromCharCode(105, 115, 116, 111, 103, 114, 97, 109, 95, 117, 95, 51, 49, 0)];
            chinasamew = (78 == ((projecta ? dangerY.length : 78) >> (Math.min(dangerY.length, 5))));
            libzeus4 = [libzeus4.length | libzeus4.length];
         }
         if (!datao.startsWith(`${private_xO}`)) {
            let libgloge = 5;
            let long_wk = 0.0;
            let encryptq = 2.0;
            let shirtL = String.fromCharCode(109, 97, 103, 101, 95, 117, 95, 53, 54, 0);
            private_xO /= Math.max(1, (dangerY == String.fromCharCode(99, 0) ? private_xO : dangerY.length));
            libgloge += parseInt(`${encryptq}`) & 2;
            long_wk += (parseFloat(`${String.fromCharCode(121, 0) == shirtL ? shirtL.length : parseInt(`${long_wk}`)}`));
            encryptq += 2 & libgloge;
         }
         let vinit_81: Array<any> = [675, 355];
         let adult9 = 2;
         chartk += "2";
         vinit_81.push(adult9 >> (Math.min(vinit_81.length, 3)));
         adult9 ^= adult9 ^ 2;
         chinasamew = datao.length == 68 && projecta;
         let prediction6 = String.fromCharCode(100, 101, 99, 101, 108, 101, 114, 97, 116, 105, 110, 103, 95, 101, 95, 52, 48, 0);
         let apps7 = String.fromCharCode(120, 95, 57, 50, 95, 114, 105, 103, 104, 116, 115, 0);
         let friendsG = 3;
         private_xO %= Math.max(1, private_xO >> (Math.min(datao.length, 2)));
         prediction6 = `${(String.fromCharCode(80, 0) == apps7 ? apps7.length : friendsG)}`;
         friendsG %= Math.max(apps7.length, 5);
         private_xO ^= private_xO;
         infoy += "3";
         if (rewardvideo5) {
            break;
         }
      } while ((cross9.length < infoy.length) && rewardvideo5);
      hoverg = infoy.length <= 51 || componentregistryQ.length <= 51;
      if ((statisticsZ.length & unread7.size) == 1 && (unread7.size & statisticsZ.length) == 1) {
         let whistlel = String.fromCharCode(105, 95, 53, 50, 95, 115, 113, 108, 105, 116, 101, 114, 98, 117, 0);
         let clearN = String.fromCharCode(98, 95, 52, 95, 116, 115, 99, 99, 0);
         let overlay3 = String.fromCharCode(109, 101, 109, 99, 109, 112, 95, 54, 95, 52, 54, 0);
         let temp6 = 0;
         let u_positions = 9807443 >= whistlel.length;
         do {
            whistlel += `${clearN.length >> (Math.min(1, overlay3.length))}`;
            if (u_positions) {
               break;
            }
         } while (u_positions && (!clearN.startsWith(whistlel)));
         overlay3 += `${(overlay3 == String.fromCharCode(50, 0) ? temp6 : overlay3.length)}`;
         while (whistlel.length < clearN.length) {
            let dycreatorW = false;
            whistlel = `${temp6}`;
            dycreatorW = !dycreatorW;
            break;
         }
         clearN = "1";
         if (whistlel.length < 4) {
            let lineE: Array<any> = [332, 0, 805];
            let orangem = 3.0;
            let typingy = String.fromCharCode(107, 95, 49, 50, 95, 116, 114, 101, 101, 119, 114, 105, 116, 101, 114, 0);
            let t_manager2 = 4;
            overlay3 += `${lineE.length}`;
            lineE = [2];
            orangem += parseFloat(`${3 >> (Math.min(Math.abs(parseInt(`${orangem}`)), 5))}`);
            typingy = `${typingy.length >> (Math.min(Math.abs(1), 1))}`;
            t_manager2 |= (String.fromCharCode(110, 0) == typingy ? typingy.length : parseInt(`${orangem}`));
         }
         for (let f = 0; f < 1; f++) {
            clearN = `${whistlel.length}`;
         }
         for (let m = 0; m < 2; m++) {
            clearN += `${overlay3.length}`;
         }
         let internetB = String.fromCharCode(105, 100, 51, 108, 0) == clearN;
         do {
            let xadsdkf = 2.0;
            let constantsU = String.fromCharCode(112, 101, 101, 108, 95, 113, 95, 54, 48, 0);
            let runtimen = String.fromCharCode(113, 95, 56, 55, 95, 100, 97, 97, 108, 97, 0);
            let private_zB = 5.0;
            clearN += `${(clearN == String.fromCharCode(71, 0) ? parseInt(`${xadsdkf}`) : clearN.length)}`;
            xadsdkf += 3;
            constantsU += `${3 >> (Math.min(5, Math.abs(parseInt(`${private_zB}`))))}`;
            runtimen = `${(String.fromCharCode(52, 0) == runtimen ? runtimen.length : parseInt(`${private_zB}`))}`;
            if (internetB) {
               break;
            }
         } while ((whistlel == clearN) && internetB);
         while (overlay3.includes(`${clearN.length}`)) {
            overlay3 = `${3 + overlay3.length}`;
            break;
         }
         let relatedw = String.fromCharCode(105, 110, 115, 116, 97, 108, 108, 95, 100, 95, 52, 0);
         let greyd = 4;
         let inviteJ = 4.0;
         temp6 /= Math.max(temp6, 2);
         relatedw = `${greyd}`;
         greyd &= greyd * 2;
         inviteJ += parseFloat(`${greyd}`);
         for (let g = 0; g < 1; g++) {
            let humidityN = 0.0;
            let videoI = String.fromCharCode(121, 101, 115, 116, 101, 114, 100, 97, 121, 95, 55, 95, 52, 48, 0);
            overlay3 = `${parseInt(`${humidityN}`) * temp6}`;
            humidityN += videoI.length;
            videoI = `${videoI.length}`;
         }
         for (let j = 0; j < 1; j++) {
            let membershipV = 4.0;
            let pangle5: Array<any> = [702, 805];
            let bootsplashX = 1.0;
            clearN = `${parseInt(`${bootsplashX}`) & 2}`;
            membershipV *= pangle5.length;
            pangle5.push(parseInt(`${membershipV}`));
            bootsplashX += parseFloat(`${1}`);
         }
         statisticsZ = `${componentregistryQ.length ^ 2}`;
      }
      penaltyX += interstitialS.length >> (Math.min(Math.abs(3), 1));
      let hooksR = hoverg ? !hoverg : hoverg;
      do {
         hoverg = verticals > 89.39;
         if (hooksR) {
            break;
         }
      } while ((4 >= (privilegeX.size / (Math.max(1, 2))) && privilegeX.size >= 1) && hooksR);
      infoy = `${parseInt(`${penaltyX}`) % (Math.max(componentregistryQ.length, 6))}`;
      interstitialS += `${parseInt(`${penaltyX}`)}`;
      if (4 < infoy.length) {
         infoy = `${parseInt(`${penaltyX}`) ^ 1}`;
      }
      while ((penaltyX + 2.22) < 2.39) {
         let fieldF = String.fromCharCode(118, 95, 50, 48, 95, 118, 105, 101, 119, 101, 114, 0);
         let changeS = 0.0;
         let wind9 = String.fromCharCode(99, 95, 53, 56, 95, 100, 116, 115, 109, 0);
         wind9 += `${parseInt(`${changeS}`) - 1}`;
         while (!wind9.startsWith(`${changeS}`)) {
            changeS += parseInt(`${changeS}`);
            break;
         }
         let window_2O = wind9.length >= 7676328;
         do {
            wind9 += "3";
            if (window_2O) {
               break;
            }
         } while (window_2O && (parseInt(`${changeS}`) == wind9.length));
         fieldF = `${wind9.length / 1}`;
         changeS += parseInt(`${changeS}`);
         while (!fieldF.endsWith(`${changeS}`)) {
            changeS += 2 >> (Math.min(1, fieldF.length));
            break;
         }
         if (4 == (fieldF.length / (Math.max(1, 2))) || 2.32 == (changeS * 5.17)) {
            changeS -= (String.fromCharCode(106, 0) == fieldF ? fieldF.length : wind9.length);
         }
         let pagey = 3;
         let libavformatZ = 4.0;
         let carouselB: Array<any> = [String.fromCharCode(108, 105, 110, 117, 120, 95, 106, 95, 51, 57, 0), String.fromCharCode(102, 95, 57, 57, 0), String.fromCharCode(97, 117, 116, 111, 114, 111, 116, 97, 116, 101, 95, 55, 95, 56, 53, 0)];
         changeS *= fieldF.length;
         pagey <<= Math.min(3, Math.abs(pagey));
         libavformatZ /= Math.max(pagey, 4);
         carouselB = [carouselB.length];
         for (let i = 0; i < 1; i++) {
            changeS *= parseInt(`${changeS}`);
         }
         infoy += `${unread7.size}`;
         break;
      }
      for (let b = 0; b < 1; b++) {
         models6 /= Math.max(5, unread7.size);
      }
      hoverg = !cross9.startsWith(`${verticals}`);
      if (componentregistryQ.length == 4 || !hoverg) {
         hoverg = (componentregistryQ.length & interstitialS.length) == 100;
      }
      let sentryF = interstitialS.length >= 6248932;
      do {
         interstitialS += `${componentregistryQ.length}`;
         if (sentryF) {
            break;
         }
      } while (sentryF && (1 <= (privilegeX.size | interstitialS.length)));
      let bottomQ = 9293617 <= sidew.size;
      do {
         sidew.set(interstitialS, (String.fromCharCode(121, 0) == interstitialS ? sidew.size : interstitialS.length));
         if (bottomQ) {
            break;
         }
      } while (bottomQ && (filled4.length > 1));
      while (sidew.size < 4) {
         unread7.set(`${cross9}`, cross9.length);
         break;
      }
      let typingb = String.fromCharCode(108, 97, 115, 116, 95, 56, 95, 49, 52, 0);
      let mintegralJ = 3.0;
      if ((mintegralJ * parseFloat(`${typingb.length}`)) < 2.3) {
         mintegralJ /= Math.max(2, parseFloat(`${parseInt(`${mintegralJ}`) / (Math.max(3, 2))}`));
      }
      let libcxxcomponents_: Array<any> = [965, 544];
      let recommendationA = true;
      typingb += `${parseInt(`${mintegralJ}`) >> (Math.min(typingb.length, 1))}`;
      libcxxcomponents_ = [libcxxcomponents_.length];
      recommendationA = recommendationA && libcxxcomponents_.length < 43;
      if ((parseFloat(`${typingb.length}`) + mintegralJ) == 2.85 || 4 == (typingb.length + parseInt(`${mintegralJ}`))) {
         let regengL = String.fromCharCode(102, 95, 57, 55, 95, 99, 111, 100, 101, 99, 105, 100, 0);
         mintegralJ *= parseFloat(`${parseInt(`${mintegralJ}`)}`);
         regengL += `${regengL.length % (Math.max(10, regengL.length))}`;
      }
      let relatedE: Map<any, any> = new Map([[String.fromCharCode(115, 98, 115, 112, 108, 105, 116, 95, 50, 95, 51, 50, 0), 737], [String.fromCharCode(98, 95, 54, 57, 95, 104, 97, 110, 110, 105, 110, 103, 0), 615], [String.fromCharCode(106, 95, 53, 56, 95, 99, 121, 117, 118, 0), 782]]);
      mintegralJ += parseFloat(`${typingb.length / 3}`);
      relatedE.set(`${relatedE.size}`, relatedE.size ^ relatedE.size);
      while (1 > (5 >> (Math.min(3, typingb.length))) && 5 > (parseInt(`${mintegralJ}`) * typingb.length)) {
         typingb += `${typingb.length / (Math.max(3, 10))}`;
         break;
      }
      while (2 <= (typingb.length | 2) && (parseInt(`${mintegralJ}`) + typingb.length) <= 2) {
         typingb = `${parseInt(`${mintegralJ}`)}`;
         break;
      }
      statisticsZ += `${typingb.length}`;
      if ((2 / (Math.max(5, unread7.size))) < 1 || (unread7.size / (Math.max(2, 10))) < 4) {
         privilegeX.set(componentregistryQ, componentregistryQ.length ^ statisticsZ.length);
      }
      for (let k = 0; k < 2; k++) {
         hoverg = 73 >= infoy.length;
      }
      for (let q = 0; q < 2; q++) {
         interstitialS += `${parseInt(`${verticals}`)}`;
      }
      while ((interstitialS.length % 2) >= 2) {
         let specl = String.fromCharCode(116, 95, 55, 52, 95, 103, 117, 97, 114, 97, 110, 116, 101, 101, 115, 0);
         let hongkongx = 2.0;
         let libavformatr = true;
         if ((hongkongx / (Math.max(2.42, 5))) == 5.20 && 2.42 == (hongkongx / (Math.max(specl.length, 10)))) {
            let refreshw = 3.0;
            let statsh = String.fromCharCode(98, 108, 111, 99, 107, 104, 97, 115, 104, 95, 99, 95, 53, 57, 0);
            let securityS = true;
            let become_ = 3.0;
            let greenE = String.fromCharCode(97, 117, 116, 111, 109, 97, 116, 105, 99, 95, 103, 95, 51, 52, 0);
            hongkongx /= Math.max(specl.length / (Math.max(2, 1)), 2);
            refreshw -= (parseInt(`${refreshw}`) >> (Math.min(3, Math.abs((securityS ? 4 : 4)))));
            statsh = `${(String.fromCharCode(112, 0) == statsh ? (securityS ? 2 : 4) : statsh.length)}`;
            become_ += parseFloat(`${2 * parseInt(`${refreshw}`)}`);
            greenE = `${((securityS ? 2 : 2) >> (Math.min(Math.abs(2), 2)))}`;
         }
         for (let p = 0; p < 2; p++) {
            let floatingd: Map<any, any> = new Map([[String.fromCharCode(100, 105, 102, 95, 98, 95, 49, 49, 0), true], [String.fromCharCode(101, 110, 100, 97, 95, 122, 95, 51, 51, 0), true], [String.fromCharCode(120, 95, 51, 49, 95, 105, 109, 97, 103, 101, 0), false]]);
            libavformatr = specl.length < 49;
            floatingd = new Map([[`${floatingd.size}`, floatingd.size]]);
         }
         hongkongx -= parseInt(`${hongkongx}`) << (Math.min(3, Math.abs(1)));
         while (5 == (specl.length >> (Math.min(Math.abs(5), 2)))) {
            hongkongx /= Math.max(3, specl.length);
            break;
         }
         while (specl.length < 2) {
            let paginationW: Map<any, any> = new Map([[String.fromCharCode(99, 111, 110, 116, 97, 99, 116, 115, 95, 107, 95, 56, 51, 0), String.fromCharCode(106, 95, 49, 50, 95, 98, 108, 111, 98, 115, 105, 122, 101, 0)], [String.fromCharCode(118, 105, 115, 105, 98, 105, 108, 105, 116, 105, 101, 115, 95, 121, 95, 56, 48, 0), String.fromCharCode(100, 95, 53, 56, 95, 112, 116, 114, 109, 97, 112, 0)], [String.fromCharCode(116, 95, 54, 95, 115, 116, 101, 114, 101, 111, 0), String.fromCharCode(114, 101, 110, 101, 119, 97, 98, 108, 101, 95, 56, 95, 54, 51, 0)]]);
            specl += `${paginationW.size}`;
            break;
         }
         while ((hongkongx * specl.length) >= 1.71 && 2.35 >= (hongkongx * 1.71)) {
            specl += `${((libavformatr ? 3 : 5) % (Math.max(10, parseInt(`${hongkongx}`))))}`;
            break;
         }
         let update_9A = 6533029.0 <= hongkongx;
         do {
            let sidep = 0.0;
            let frame_coa = 4;
            hongkongx += 1 % (Math.max(4, frame_coa));
            sidep += parseFloat(`${parseInt(`${sidep}`) - 3}`);
            frame_coa *= parseInt(`${sidep}`) ^ 1;
            if (update_9A) {
               break;
            }
         } while (((hongkongx / 3.11) < 1.79) && update_9A);
         hongkongx *= parseInt(`${hongkongx}`) * 1;
         let halfz = 5359205.0 <= hongkongx;
         do {
            hongkongx -= specl.length;
            if (halfz) {
               break;
            }
         } while (((3 << (Math.min(1, specl.length))) < 5) && halfz);
         interstitialS = `${1 / (Math.max(5, parseInt(`${hongkongx}`)))}`;
         break;
      }
      infoy += `${unread7.size}`;
      let pause1 = String.fromCharCode(103, 111, 111, 103, 95, 114, 95, 56, 54, 0);
      let resultB = 3.0;
      let selectY = String.fromCharCode(117, 112, 100, 97, 116, 101, 114, 95, 53, 95, 56, 48, 0);
      let reward8 = selectY == String.fromCharCode(104, 103, 51, 101, 108, 122, 108, 115, 53, 0);
      do {
         selectY += "2";
         if (reward8) {
            break;
         }
      } while (reward8 && (2 >= pause1.length));
      let googleW = 1.0;
      let mergerD = googleW >= 8036646.0;
      do {
         let roota = 4.0;
         let mbbannerl = String.fromCharCode(107, 108, 97, 121, 116, 110, 95, 53, 95, 49, 56, 0);
         let eventf = String.fromCharCode(106, 95, 55, 52, 95, 97, 110, 105, 109, 97, 116, 101, 0);
         let roboto8 = true;
         let fastforwardX = String.fromCharCode(121, 95, 56, 53, 95, 115, 115, 101, 100, 105, 102, 102, 0);
         googleW -= 1 ^ fastforwardX.length;
         roota -= mbbannerl.length;
         mbbannerl += `${(eventf == String.fromCharCode(73, 0) ? parseInt(`${roota}`) : eventf.length)}`;
         roboto8 = eventf.startsWith(`${roota}`);
         fastforwardX += `${(String.fromCharCode(102, 0) == eventf ? eventf.length : (roboto8 ? 2 : 1))}`;
         if (mergerD) {
            break;
         }
      } while (mergerD && ((2.34 * googleW) > 3.33));
      selectY += `${pause1.length - parseInt(`${resultB}`)}`;
      selectY += `${2 + parseInt(`${googleW}`)}`;
      while (2.40 < (resultB / (Math.max(googleW, 5))) || 1.7 < (googleW / 2.40)) {
         let hoverY = String.fromCharCode(103, 95, 51, 52, 95, 109, 114, 122, 0);
         let cricketA = String.fromCharCode(104, 119, 109, 97, 112, 95, 54, 95, 53, 52, 0);
         let cricketW = true;
         let showl = String.fromCharCode(115, 95, 53, 48, 95, 114, 101, 110, 100, 105, 116, 105, 111, 110, 0);
         googleW -= parseInt(`${resultB}`) << (Math.min(1, Math.abs(parseInt(`${googleW}`))));
         hoverY = `${((cricketW ? 4 : 4) & hoverY.length)}`;
         cricketA += "1";
         cricketW = !showl.includes(`${cricketW}`);
         showl = `${hoverY.length * 3}`;
         break;
      }
      while (2 == (pause1.length * 4)) {
         resultB /= Math.max(parseFloat(`${1 << (Math.min(4, Math.abs(parseInt(`${resultB}`))))}`), 4);
         break;
      }
      resultB += parseFloat(`${2 * pause1.length}`);
      while (parseInt(`${googleW}`) >= selectY.length) {
         let annerO = false;
         let text1 = String.fromCharCode(117, 118, 114, 100, 95, 51, 95, 52, 50, 0);
         let chinaM = String.fromCharCode(118, 95, 51, 51, 95, 114, 101, 112, 111, 0);
         let actionst = 3.0;
         let tick6: Map<any, any> = new Map([[String.fromCharCode(121, 95, 50, 50, 95, 99, 114, 111, 119, 100, 105, 110, 0), false], [String.fromCharCode(113, 95, 56, 95, 103, 101, 110, 102, 105, 108, 101, 115, 0), false], [String.fromCharCode(98, 111, 100, 101, 114, 95, 118, 95, 54, 48, 0), false]]);
         selectY = `${parseInt(`${resultB}`)}`;
         annerO = (tick6.size * parseInt(`${actionst}`)) < 2;
         text1 = `${chinaM.length * parseInt(`${actionst}`)}`;
         chinaM += `${((annerO ? 2 : 3) * 1)}`;
         tick6 = new Map([[`${tick6.size}`, parseInt(`${actionst}`) * 1]]);
         break;
      }
      penaltyX += infoy.length + 3;
      let unselectedK = String.fromCharCode(101, 95, 57, 48, 95, 109, 109, 97, 112, 0);
      let leagueT = String.fromCharCode(99, 95, 54, 55, 95, 99, 109, 105, 111, 0);
      let downloadedq = String.fromCharCode(122, 95, 57, 56, 95, 110, 105, 115, 116, 112, 0);
      unselectedK = `${1 + leagueT.length}`;
      downloadedq = `${downloadedq.length}`;
      leagueT += `${3 & leagueT.length}`;
      let views_: Array<any> = [String.fromCharCode(117, 95, 49, 57, 95, 98, 117, 102, 102, 101, 114, 101, 100, 0), String.fromCharCode(111, 95, 55, 54, 95, 99, 111, 108, 111, 114, 0), String.fromCharCode(103, 95, 56, 55, 95, 118, 105, 97, 0)];
      let philippines_: Array<any> = [String.fromCharCode(100, 105, 97, 108, 111, 103, 115, 95, 110, 95, 56, 53, 0), String.fromCharCode(112, 95, 55, 49, 95, 114, 101, 99, 112, 0)];
      while (2 == views_.length) {
         unselectedK = `${1 * unselectedK.length}`;
         break;
      }
      leagueT += `${philippines_.length}`;
      philippines_.push(leagueT.length >> (Math.min(unselectedK.length, 2)));
      statisticsZ = `${parseInt(`${verticals}`)}`;
      while (!componentregistryQ.endsWith(`${penaltyX}`)) {
         let backS = 0;
         let private_1_y: Map<any, any> = new Map([[String.fromCharCode(108, 95, 48, 95, 103, 101, 116, 104, 100, 114, 0), 471], [String.fromCharCode(110, 95, 53, 95, 101, 109, 112, 105, 114, 105, 99, 97, 108, 108, 121, 0), 513], [String.fromCharCode(110, 117, 109, 101, 114, 97, 108, 115, 95, 55, 95, 55, 56, 0), 300]]);
         let success0: Map<any, any> = new Map([[String.fromCharCode(108, 111, 99, 107, 99, 104, 97, 105, 110, 95, 110, 95, 53, 54, 0), String.fromCharCode(114, 95, 57, 53, 95, 97, 117, 116, 104, 111, 114, 105, 122, 101, 0)], [String.fromCharCode(105, 100, 97, 115, 115, 101, 116, 115, 95, 102, 95, 53, 55, 0), String.fromCharCode(115, 101, 116, 116, 108, 101, 95, 114, 95, 56, 0)]]);
         let mbnativek = backS <= 6777938;
         do {
            backS /= Math.max(private_1_y.size ^ 3, 4);
            if (mbnativek) {
               break;
            }
         } while (mbnativek && (5 >= private_1_y.size));
         let libzeusp: Array<any> = [883, 449, 278];
         let libfba = 4.0;
         let layoutX = 0;
         backS |= backS;
         libzeusp.push(3);
         libfba += parseInt(`${libfba}`) >> (Math.min(libzeusp.length, 5));
         layoutX <<= Math.min(4, Math.abs(layoutX + parseInt(`${libfba}`)));
         let mbridgeo = 4;
         let philippinesu: Map<any, any> = new Map([[String.fromCharCode(102, 111, 114, 101, 105, 103, 110, 95, 109, 95, 53, 53, 0), String.fromCharCode(111, 95, 55, 50, 95, 105, 109, 112, 111, 114, 116, 97, 98, 108, 101, 100, 0)], [String.fromCharCode(101, 95, 50, 53, 95, 101, 115, 101, 110, 100, 0), String.fromCharCode(108, 95, 54, 54, 95, 114, 97, 100, 97, 114, 0)]]);
         private_1_y.set(`${mbridgeo}`, philippinesu.size);
         private_1_y.set(`${backS}`, private_1_y.size * backS);
         private_1_y.set(`${backS}`, backS);
         let selection4 = String.fromCharCode(107, 95, 50, 49, 95, 112, 97, 115, 115, 101, 100, 0);
         private_1_y = new Map([[`${private_1_y.size}`, 3]]);
         for (let t = 0; t < 2; t++) {
            private_1_y.set(`${backS}`, 3);
         }
         while (backS >= success0.size) {
            let eventj = 1.0;
            let textlayoutmanagerT = 0.0;
            let showR = 3.0;
            let cricketz = 1.0;
            let libreactperfloggerjniq = 4.0;
            success0.set(`${showR}`, parseInt(`${textlayoutmanagerT}`) * parseInt(`${showR}`));
            eventj += parseFloat(`${parseInt(`${eventj}`) & parseInt(`${libreactperfloggerjniq}`)}`);
            textlayoutmanagerT *= parseFloat(`${parseInt(`${eventj}`)}`);
            cricketz -= parseFloat(`${parseInt(`${eventj}`)}`);
            libreactperfloggerjniq -= parseFloat(`${parseInt(`${cricketz}`)}`);
            break;
         }
         componentregistryQ = "3";
         break;
      }

      setShowReferrerModal(true);
   }

   const onCopyReferralCode = () => {
      let modityW = true;
      let utils6 = String.fromCharCode(120, 95, 53, 52, 95, 107, 101, 121, 102, 114, 97, 109, 101, 0);
      let membero: Array<any> = [406, 39, 157];
      let closeR = String.fromCharCode(99, 121, 97, 110, 95, 119, 95, 49, 52, 0);
      let complete1 = true;
      let viewerT = 4.0;
      let loginj = 1.0;
      let hiadH = String.fromCharCode(97, 95, 57, 50, 95, 112, 114, 111, 99, 101, 115, 115, 0);
      let applicationZ = String.fromCharCode(112, 114, 111, 118, 105, 115, 105, 111, 110, 95, 52, 95, 49, 56, 0);
      let bufferM = String.fromCharCode(115, 95, 57, 53, 95, 99, 111, 111, 107, 105, 101, 0);
      let username_ = 2.0;
      let huaweiI = 4.0;
      let source1 = 3;
      let telemetryD = String.fromCharCode(118, 95, 57, 53, 95, 114, 101, 118, 97, 108, 105, 100, 97, 116, 105, 110, 103, 0);
      while (2 >= (5 + telemetryD.length)) {
         telemetryD = "3";
         break;
      }
      let ajaxG = 1.0;
      ajaxG -= parseFloat(`${3 / (Math.max(4, source1))}`);
      let googleD = String.fromCharCode(99, 111, 109, 112, 108, 105, 97, 110, 116, 95, 98, 95, 51, 0);
      source1 >>= Math.min(Math.abs(3), 5);
      googleD = `${googleD.length}`;
      for (let f = 0; f < 1; f++) {
         ajaxG /= Math.max(parseFloat(`${2}`), 2);
      }
      while (1 > (parseInt(`${ajaxG}`) + telemetryD.length)) {
         telemetryD += `${source1 + 2}`;
         break;
      }
      bufferM = `${((modityW ? 4 : 3) >> (Math.min(applicationZ.length, 3)))}`;
      if (modityW && (viewerT - 3.34) <= 4.49) {
         let clubo = String.fromCharCode(99, 111, 108, 111, 114, 109, 97, 116, 114, 105, 120, 95, 103, 95, 53, 51, 0);
         let modityO = false;
         modityO = clubo.length >= 25 && modityO;
         clubo = `${(String.fromCharCode(103, 0) == clubo ? (modityO ? 4 : 3) : clubo.length)}`;
         for (let m = 0; m < 3; m++) {
            modityO = modityO || clubo.length >= 10;
         }
         while (!modityO && clubo.length > 2) {
            clubo = `${((modityO ? 4 : 1) + 2)}`;
            break;
         }
         let sentrya = String.fromCharCode(107, 95, 55, 49, 95, 97, 98, 111, 117, 116, 0);
         modityO = !modityO;
         sentrya = `${3 | sentrya.length}`;
         let accepted7 = String.fromCharCode(119, 95, 56, 55, 95, 97, 103, 97, 105, 110, 115, 116, 0);
         clubo += `${(String.fromCharCode(113, 0) == clubo ? clubo.length : (modityO ? 2 : 3))}`;
         accepted7 += `${accepted7.length / 2}`;
         modityW = clubo == String.fromCharCode(73, 0);
      }
      let borderless0 = modityW ? !modityW : modityW;
      do {
         modityW = bufferM.startsWith(`${complete1}`);
         if (borderless0) {
            break;
         }
      } while (borderless0 && (modityW));
      let controlsJ = complete1 ? !complete1 : complete1;
      do {
         complete1 = utils6.length <= membero.length;
         if (controlsJ) {
            break;
         }
      } while (controlsJ && (!complete1));
      let abidetectz = true;
      let detaill = String.fromCharCode(117, 110, 114, 101, 97, 100, 95, 115, 95, 52, 53, 0);
      let orientationw = 4;
      if (1 > (detaill.length % (Math.max(2, orientationw)))) {
         orientationw *= orientationw;
      }
      abidetectz = 31 >= orientationw || !abidetectz;
      orientationw -= (detaill == String.fromCharCode(95, 0) ? detaill.length : orientationw);
      abidetectz = !abidetectz;
      let tickR = String.fromCharCode(101, 95, 57, 50, 95, 120, 115, 117, 98, 0);
      let unreadx = String.fromCharCode(122, 95, 52, 53, 95, 105, 112, 118, 105, 100, 101, 111, 0);
      let componenti: Array<any> = [10, 532, 548];
      let mbbannerr = String.fromCharCode(116, 104, 114, 101, 97, 100, 115, 97, 102, 101, 95, 48, 95, 57, 52, 0);
      abidetectz = tickR.length < componenti.length;
      componenti.push(mbbannerr.length);
      mbbannerr = `${mbbannerr.length}`;
      orientationw |= tickR.length;
      let libreactnativejni4 = String.fromCharCode(105, 95, 52, 52, 0);
      complete1 = !complete1 && hiadH.length < 17;
      let libfollyg = String.fromCharCode(99, 95, 50, 50, 95, 97, 98, 108, 0);
      let containerd = 5;
      let downd = false;
      while (!downd) {
         downd = libfollyg.includes(`${containerd}`);
         break;
      }
      let resulto = 3;
      let sharedg: Array<any> = [165, 879];
      containerd |= resulto;
      resulto *= 1;
      sharedg = [sharedg.length];
      let forms = String.fromCharCode(99, 95, 51, 95, 115, 98, 119, 97, 105, 116, 0);
      let z_count7 = String.fromCharCode(122, 95, 57, 48, 95, 115, 101, 110, 116, 0);
      downd = !downd;
      let libpangleflippedI = 0.0;
      let infoj = String.fromCharCode(98, 95, 53, 52, 95, 109, 101, 115, 104, 0);
      let libloggerZ: Array<any> = [294, 208];
      containerd /= Math.max(2, (z_count7 == String.fromCharCode(120, 0) ? containerd : z_count7.length));
      libpangleflippedI -= parseFloat(`${libloggerZ.length}`);
      infoj = `${parseInt(`${libpangleflippedI}`) * 2}`;
      libloggerZ = [1 * libloggerZ.length];
      if (!forms.startsWith(`${downd}`)) {
         let klevin9 = String.fromCharCode(116, 95, 51, 52, 95, 102, 105, 108, 116, 0);
         let uimanagerF = 4.0;
         let suggestion8 = false;
         let brightness_ = 5.0;
         let reactnativejsR = 0.0;
         forms += `${parseInt(`${brightness_}`)}`;
         klevin9 += `${3 | klevin9.length}`;
         uimanagerF += (parseFloat(`${(suggestion8 ? 4 : 4) | parseInt(`${reactnativejsR}`)}`));
         brightness_ *= 3 + klevin9.length;
         reactnativejsR += parseInt(`${uimanagerF}`);
      }
      if (2 == libfollyg.length) {
         libfollyg = `${containerd & 1}`;
      }
      forms = "3";
      z_count7 += `${forms.length}`;
      hiadH = `${2 % (Math.max(parseInt(`${loginj}`), 3))}`;
      if (!complete1 || 5 == utils6.length) {
         complete1 = closeR.length < 63;
      }
      let unimplementedviewp = membero.length <= 5954567;
      do {
         membero = [applicationZ.length];
         if (unimplementedviewp) {
            break;
         }
      } while ((2.17 == viewerT) && unimplementedviewp);
      let larger = utils6 == String.fromCharCode(51, 107, 103, 114, 0);
      do {
         utils6 = `${(2 << (Math.min(3, Math.abs((complete1 ? 2 : 2)))))}`;
         if (larger) {
            break;
         }
      } while ((utils6 != String.fromCharCode(88, 0) && closeR == String.fromCharCode(112, 0)) && larger);
      loginj += (applicationZ == String.fromCharCode(95, 0) ? applicationZ.length : bufferM.length);
      let loginjy = complete1 ? !complete1 : complete1;
      do {
         complete1 = applicationZ == String.fromCharCode(121, 0);
         if (loginjy) {
            break;
         }
      } while (loginjy && (5 == utils6.length));
      for (let a = 0; a < 3; a++) {
         loginj -= closeR.length + applicationZ.length;
      }
      while (!applicationZ.includes(`${username_}`)) {
         let grey1: Array<any> = [33, 828, 927];
         let membershipp = String.fromCharCode(103, 95, 56, 95, 109, 111, 100, 101, 99, 111, 115, 116, 115, 0);
         let forwardC: Array<any> = [String.fromCharCode(97, 95, 53, 56, 95, 115, 117, 112, 101, 114, 110, 111, 100, 101, 115, 0), String.fromCharCode(103, 95, 51, 55, 95, 108, 97, 100, 100, 101, 114, 115, 116, 101, 112, 0)];
         let borderlessT = String.fromCharCode(113, 95, 53, 52, 95, 109, 111, 110, 111, 119, 104, 105, 116, 101, 0);
         let config9: Array<any> = [String.fromCharCode(111, 95, 51, 57, 95, 97, 108, 112, 104, 97, 101, 120, 116, 114, 97, 99, 116, 0), String.fromCharCode(98, 95, 57, 53, 95, 99, 111, 111, 114, 100, 105, 110, 97, 116, 105, 111, 110, 0), String.fromCharCode(112, 95, 55, 52, 95, 114, 101, 97, 115, 115, 101, 109, 98, 108, 121, 0)];
         membershipp += `${forwardC.length}`;
         config9 = [config9.length * config9.length];
         let vietnamL = grey1.length >= 6263693;
         do {
            grey1.push(borderlessT.length - 1);
            if (vietnamL) {
               break;
            }
         } while (vietnamL && (membershipp.endsWith(`${grey1.length}`)));
         let statsO = 8624727 <= membershipp.length;
         do {
            let mutedT = true;
            let connectionI = true;
            membershipp += `${membershipp.length - 1}`;
            mutedT = !connectionI;
            connectionI = connectionI || mutedT;
            if (statsO) {
               break;
            }
         } while (statsO && (2 <= (forwardC.length | 2)));
         grey1.push(membershipp.length - grey1.length);
         let referrerF: Array<any> = [537, 335];
         forwardC = [membershipp.length];
         referrerF = [referrerF.length];
         let iconr = String.fromCharCode(100, 101, 115, 116, 111, 114, 121, 95, 55, 95, 56, 55, 0);
         if (referrerF.length > 2) {
            let trophyv = String.fromCharCode(119, 95, 55, 57, 95, 116, 105, 100, 121, 0);
            let largeo: Map<any, any> = new Map([[String.fromCharCode(122, 111, 110, 101, 105, 110, 102, 111, 95, 48, 95, 49, 50, 0), 135], [String.fromCharCode(108, 95, 50, 95, 105, 110, 116, 101, 114, 112, 111, 108, 97, 116, 111, 114, 115, 0), 974]]);
            let viewsg = String.fromCharCode(119, 105, 101, 110, 101, 114, 95, 118, 95, 57, 0);
            iconr += `${referrerF.length ^ 2}`;
            trophyv += `${(String.fromCharCode(89, 0) == trophyv ? largeo.size : trophyv.length)}`;
            largeo.set(trophyv, trophyv.length / 2);
            viewsg = "3";
         }
         let applicationc = forwardC.length <= 7516354;
         do {
            forwardC.push(2);
            if (applicationc) {
               break;
            }
         } while (((grey1.length / (Math.max(2, 2))) == 4) && applicationc);
         membershipp += `${1 << (Math.min(4, membershipp.length))}`;
         if (borderlessT == String.fromCharCode(89, 0) && iconr != String.fromCharCode(104, 0)) {
            let r_positionB = 3;
            borderlessT += `${1 - grey1.length}`;
            r_positionB |= r_positionB / 3;
         }
         applicationZ += `${utils6.length}`;
         break;
      }
      let pagee = username_ >= 7030551.0;
      do {
         let anytime9 = String.fromCharCode(97, 115, 115, 105, 103, 110, 95, 107, 95, 56, 51, 0);
         let rules_ = 3;
         let zhengpianX = 4.0;
         let injury3 = 0.0;
         let whitek = zhengpianX >= 8832691.0;
         do {
            zhengpianX -= parseFloat(`${3}`);
            if (whitek) {
               break;
            }
         } while (((1.68 + injury3) >= 4.89 || 1.32 >= (1.68 + zhengpianX)) && whitek);
         for (let h = 0; h < 1; h++) {
            let crickets: Map<any, any> = new Map([[String.fromCharCode(105, 95, 56, 57, 95, 115, 99, 97, 110, 120, 0), 633], [String.fromCharCode(103, 95, 53, 95, 114, 101, 100, 117, 99, 116, 105, 111, 110, 0), 817], [String.fromCharCode(108, 95, 55, 51, 95, 116, 104, 114, 101, 97, 100, 115, 97, 102, 101, 0), 238]]);
            let modelR = 0.0;
            zhengpianX += (parseFloat(`${String.fromCharCode(98, 0) == anytime9 ? anytime9.length : crickets.size}`));
            crickets.set(`${modelR}`, 2 - parseInt(`${modelR}`));
         }
         if ((3.65 - injury3) >= 5.69 || 3.65 >= (parseFloat(`${rules_}`) - injury3)) {
            injury3 -= parseFloat(`${parseInt(`${injury3}`) >> (Math.min(1, Math.abs(parseInt(`${zhengpianX}`))))}`);
         }
         while (rules_ > injury3) {
            rules_ /= Math.max(1, 3 + parseInt(`${injury3}`));
            break;
         }
         zhengpianX += parseFloat(`${anytime9.length | parseInt(`${injury3}`)}`);
         let kuaishouJ = 1.0;
         let muted1 = 1.0;
         for (let c = 0; c < 2; c++) {
            anytime9 += `${anytime9.length}`;
         }
         let react3 = String.fromCharCode(55, 120, 103, 103, 54, 114, 0) == anytime9;
         do {
            anytime9 = `${parseInt(`${muted1}`)}`;
            if (react3) {
               break;
            }
         } while (react3 && ((anytime9.length + 4) < 2 || (4 - parseInt(`${kuaishouJ}`)) < 1));
         zhengpianX *= parseFloat(`${anytime9.length}`);
         if (1 < (2 << (Math.min(5, Math.abs(rules_)))) || 5 < (rules_ << (Math.min(Math.abs(2), 4)))) {
            anytime9 = `${3 << (Math.min(2, Math.abs(parseInt(`${kuaishouJ}`))))}`;
         }
         kuaishouJ /= Math.max(3, 3 >> (Math.min(Math.abs(parseInt(`${kuaishouJ}`)), 2)));
         let successx = zhengpianX >= 9173209.0;
         do {
            let shrink1 = 1;
            let rncoreZ: Map<any, any> = new Map([[String.fromCharCode(116, 95, 57, 51, 95, 102, 114, 101, 101, 100, 111, 109, 0), true], [String.fromCharCode(106, 95, 49, 57, 95, 117, 110, 99, 111, 109, 112, 114, 101, 115, 115, 0), true], [String.fromCharCode(97, 95, 56, 54, 95, 97, 99, 108, 114, 0), true]]);
            let sorts: Array<any> = [874, 558, 866];
            zhengpianX /= Math.max(parseFloat(`${rules_ / (Math.max(rncoreZ.size, 4))}`), 4);
            shrink1 >>= Math.min(3, Math.abs(2 / (Math.max(9, shrink1))));
            rncoreZ = new Map([[`${sorts.length}`, sorts.length]]);
            if (successx) {
               break;
            }
         } while ((1.20 < (zhengpianX + 2.68) || (5 - anytime9.length) < 4) && successx);
         username_ /= Math.max(parseFloat(`${closeR.length}`), 4);
         if (pagee) {
            break;
         }
      } while (((1 - loginj) <= 2.67) && pagee);
      hiadH += `${bufferM.length ^ 3}`;

      Clipboard.setString(userState.user?.userReferralCode ?? '');

      let downloading2 = String.fromCharCode(116, 101, 120, 116, 117, 114, 101, 100, 95, 57, 95, 51, 55, 0);
      let upgradeQ = String.fromCharCode(103, 95, 57, 53, 95, 102, 105, 102, 111, 115, 0);
      let pageN = String.fromCharCode(102, 95, 57, 95, 109, 97, 121, 0);
      let themeZ = String.fromCharCode(115, 95, 51, 52, 95, 112, 111, 108, 121, 109, 101, 115, 104, 0);
      let rewardm = String.fromCharCode(116, 95, 52, 49, 95, 105, 110, 102, 105, 110, 105, 116, 121, 0);
      downloading2 = `${1 * downloading2.length}`;
      pageN = `${2 / (Math.max(10, pageN.length))}`;
      themeZ += `${pageN.length >> (Math.min(Math.abs(1), 4))}`;
      rewardm += `${pageN.length}`;
      if (upgradeQ == downloading2) {
         downloading2 += "2";
      }
      upgradeQ = `${(upgradeQ == String.fromCharCode(106, 0) ? upgradeQ.length : downloading2.length)}`;
      downloading2 += `${2 << (Math.min(5, upgradeQ.length))}`;
      downloading2 = `${(downloading2 == String.fromCharCode(121, 0) ? downloading2.length : upgradeQ.length)}`;
      while (upgradeQ.length >= 5 || downloading2 == String.fromCharCode(109, 0)) {
         downloading2 += `${(String.fromCharCode(88, 0) == upgradeQ ? downloading2.length : upgradeQ.length)}`;
         break;
      }
      utils6 = `${parseInt(`${loginj}`)}`;
      complete1 = viewerT >= 62.60;
      while (hiadH.length >= 1) {
         hiadH += `${1 << (Math.min(4, utils6.length))}`;
         break;
      }
      let loginN = String.fromCharCode(108, 95, 51, 95, 100, 101, 102, 101, 114, 0);
      let mintegralL = 4.0;
      let eacte = String.fromCharCode(114, 101, 115, 105, 122, 105, 110, 103, 95, 98, 95, 54, 52, 0);
      let libloggerw = String.fromCharCode(97, 117, 116, 111, 97, 114, 99, 104, 105, 118, 101, 95, 110, 95, 50, 53, 0);
      let langkey6 = String.fromCharCode(119, 95, 49, 57, 95, 109, 105, 108, 108, 101, 114, 0);
      for (let s = 0; s < 2; s++) {
         langkey6 = `${eacte.length}`;
      }
      let mbbidB = String.fromCharCode(97, 108, 112, 104, 97, 101, 120, 116, 114, 97, 99, 116, 95, 53, 95, 50, 52, 0);
      let volumep = 2.0;
      loginN += `${3 % (Math.max(3, parseInt(`${mintegralL}`)))}`;
      mbbidB = `${(mbbidB == String.fromCharCode(98, 0) ? mbbidB.length : parseInt(`${volumep}`))}`;
      volumep *= 2;
      libloggerw = `${(eacte == String.fromCharCode(66, 0) ? libloggerw.length : eacte.length)}`;
      eacte = `${(loginN == String.fromCharCode(105, 0) ? loginN.length : parseInt(`${mintegralL}`))}`;
      let annerg: Map<any, any> = new Map([[String.fromCharCode(118, 111, 112, 101, 110, 95, 104, 95, 50, 55, 0), 748], [String.fromCharCode(100, 95, 56, 54, 95, 116, 101, 120, 116, 117, 114, 101, 100, 115, 112, 101, 110, 99, 0), 380], [String.fromCharCode(101, 95, 56, 55, 95, 99, 114, 97, 115, 104, 108, 121, 116, 105, 99, 115, 0), 299]]);
      let gpaya = String.fromCharCode(115, 95, 50, 51, 95, 106, 111, 98, 115, 0);
      eacte = `${libloggerw.length}`;
      annerg.set(`${gpaya}`, gpaya.length);
      eacte = "1";
      while (loginN.includes(`${libloggerw.length}`)) {
         libloggerw += `${langkey6.length}`;
         break;
      }
      while ((libloggerw.length * parseInt(`${mintegralL}`)) > 2 || (2 >> (Math.min(4, libloggerw.length))) > 2) {
         mintegralL -= parseFloat(`${langkey6.length}`);
         break;
      }
      hiadH += `${parseInt(`${viewerT}`) - 1}`;
      if (3 == utils6.length || complete1) {
         complete1 = applicationZ.length >= 62;
      }
      username_ /= Math.max(parseFloat(`${3 << (Math.min(5, bufferM.length))}`), 1);
      if (bufferM.endsWith(`${username_}`)) {
         let edit2: Map<any, any> = new Map([[String.fromCharCode(115, 119, 105, 114, 108, 95, 113, 95, 54, 53, 0), false], [String.fromCharCode(121, 95, 57, 54, 95, 111, 112, 101, 110, 101, 100, 0), false]]);
         edit2 = new Map([[`${edit2.size}`, edit2.size % (Math.max(2, 4))]]);
         let flipper4 = 5;
         let ainit_pbA = 4;
         let mbnativeadvancedx = 1;
         let containerF = 5;
         bufferM += `${(bufferM == String.fromCharCode(95, 0) ? closeR.length : bufferM.length)}`;
      }
      closeR += `${utils6.length}`;
      let description__c = 1.0;
      for (let g = 0; g < 2; g++) {
         let search_: Array<any> = [922, 206, 315];
         let typesK = String.fromCharCode(103, 95, 54, 56, 95, 112, 117, 114, 112, 111, 115, 101, 102, 117, 108, 0);
         let descB = String.fromCharCode(99, 111, 112, 121, 105, 110, 105, 111, 118, 95, 107, 95, 56, 56, 0);
         let catalog6 = 4.0;
         description__c /= Math.max(5, 3);
         search_ = [(descB == String.fromCharCode(65, 0) ? descB.length : parseInt(`${catalog6}`))];
         typesK += `${(descB == String.fromCharCode(53, 0) ? descB.length : parseInt(`${catalog6}`))}`;
      }
      if ((description__c + 3.31) == 4.67) {
         let teamw = false;
         description__c -= (parseInt(`${description__c}`) + (teamw ? 2 : 3));
      }
      if (5.41 < description__c) {
         description__c -= parseInt(`${description__c}`);
      }
      applicationZ += `${(parseInt(`${viewerT}`) >> (Math.min(5, Math.abs((modityW ? 2 : 4)))))}`;
      let android5 = 4.0;
      let stepP = String.fromCharCode(115, 119, 102, 112, 108, 97, 121, 101, 114, 95, 101, 95, 50, 57, 0);
      let backgrounds = 7373333.0 >= android5;
      do {
         let productn: Map<any, any> = new Map([[String.fromCharCode(110, 105, 115, 116, 112, 95, 99, 95, 55, 51, 0), 585], [String.fromCharCode(109, 97, 103, 101, 95, 106, 95, 50, 55, 0), 593]]);
         android5 /= Math.max(parseInt(`${android5}`), 2);
         productn = new Map([[`${productn.size}`, productn.size | productn.size]]);
         if (backgrounds) {
            break;
         }
      } while ((stepP.endsWith(`${android5}`)) && backgrounds);
      let sportsu = String.fromCharCode(120, 95, 54, 55, 95, 103, 114, 111, 119, 116, 104, 0);
      stepP += `${2 - parseInt(`${android5}`)}`;
      sportsu += `${(String.fromCharCode(114, 0) == sportsu ? sportsu.length : sportsu.length)}`;
      stepP += `${parseInt(`${android5}`) * stepP.length}`;
      let weiboZ = String.fromCharCode(109, 95, 54, 95, 98, 117, 98, 98, 108, 101, 0);
      let mbridgeC = 5.0;
      let configf: Array<any> = [String.fromCharCode(112, 95, 54, 52, 95, 97, 101, 118, 97, 108, 0), String.fromCharCode(107, 95, 53, 55, 95, 99, 111, 112, 121, 102, 100, 0), String.fromCharCode(99, 95, 57, 57, 95, 97, 116, 114, 97, 99, 100, 97, 116, 97, 0)];
      stepP += `${parseInt(`${android5}`) ^ configf.length}`;
      weiboZ = `${(weiboZ == String.fromCharCode(87, 0) ? parseInt(`${mbridgeC}`) : weiboZ.length)}`;
      mbridgeC *= parseFloat(`${weiboZ.length}`);
      configf.push(parseInt(`${mbridgeC}`));
      if ((1 + stepP.length) < 2) {
         android5 *= (stepP == String.fromCharCode(109, 0) ? parseInt(`${android5}`) : stepP.length);
      }
      let greenA = 4.0;
      username_ /= Math.max(parseFloat(`${3 << (Math.min(2, stepP.length))}`), 2);
      for (let q = 0; q < 1; q++) {
         hiadH += `${bufferM.length * 3}`;
      }
      let shrinkq = utils6 == String.fromCharCode(114, 111, 122, 107, 53, 53, 108, 48, 121, 0);
      do {
         utils6 = `${parseInt(`${viewerT}`) & 2}`;
         if (shrinkq) {
            break;
         }
      } while ((utils6.length < 1 || !modityW) && shrinkq);
      viewerT -= 1 * applicationZ.length;
      if ((viewerT / (Math.max(hiadH.length, 3))) > 4.38) {
         viewerT /= Math.max(1, (1 * (complete1 ? 5 : 2)));
      }
      membero = [3 + parseInt(`${loginj}`)];
      setIsDialogOpen(true);
   }

   return (
      <ScreenContainer>
         <TitleWithBackButtonHeader title='个人中心' />
         <View
            style={{
               justifyContent: 'space-between',
               flex: 1,
               paddingHorizontal: 10,
            }}
         >
            <View style={{ marginTop: 30 }}>
               <TouchableOpacity
                  style={styles.pressableTextContainer}
                  onPress={() => {
                     yys_StatsForm.showToast('目前暂不支持更改头像，敬请期待');
                  }}
               >
                  <Text style={{ fontSize: 16, color: '#9C9C9C' }}>头像</Text>
                  <FastImage
                     style={{
                        height: 34,
                        width: 34,
                     }}
                     source={require('@static/images/tempBasketballHooks.png')}
                  />
               </TouchableOpacity>

               { }
               <TouchableOpacity
                  style={styles.pressableTextContainer}
                  onPress={onPressUsername}
               >
                  <Text style={{ fontSize: 16, color: 'white' }}>
                     {username}
                  </Text>
               </TouchableOpacity>

               { }
               <View style={styles.pressableTextContainer}>
                  <Text style={{ fontSize: 16, color: '#9C9C9C' }}>
                     {userState.user?.userEmail !== '' ? userState.user?.userEmail : userState.user?.userPhoneNumber}
                  </Text>
               </View>

               { }
               {userState.user?.userReferrerName == '' &&
                  userState.user.userAllowUpdateReferral == true &&
                  <TouchableOpacity
                     style={styles.pressableTextContainer}
                     onPress={onPressReferrer}
                  >
                     <Text style={{ fontSize: 16, color: '#B6B6B6' }}>
                        补填邀请码 (只能填写一次)
                     </Text>
                  </TouchableOpacity>
               }

               {userState.user?.userReferrerName != '' && (
                  <View style={styles.pressableTextContainer}>
                     <Text style={{ fontSize: 16, color: '#9C9C9C' }}>推介人</Text>

                     <View
                        style={{
                           flexDirection: 'row',
                           justifyContent: 'center',
                           alignItems: 'center',
                        }}
                     >
                        <Text style={{ fontSize: 14, color: '#9C9C9C' }}>
                           {userState.user?.userReferrerName}
                        </Text>
                     </View>
                  </View>
               )}

               { }
               <TouchableOpacity
                  style={styles.pressableTextContainer}
                  onPress={onCopyReferralCode}
               >
                  <Text style={{ fontSize: 16, color: colors.primary }}>
                     {userState.user?.userReferralCode}
                  </Text>

                  <View
                     style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                     }}
                  >
                     <Text style={{ fontSize: 14, color: '#9C9C9C' }}>
                        复制邀请码
                     </Text>
                     <Image
                        style={{
                           height: 27,
                           width: 27,
                           position: 'relative',
                           top: 2,
                        }}
                        source={require('@static/images/profile/qaagShare.png')}
                     />
                  </View>
               </TouchableOpacity>

               <NotificationModal
                  onConfirm={toggleOverlay}
                  isVisible={isDialogOpen}
                  title='复制成功'
                  subtitle1=''
                  subtitle2=''
                  subtitle3=''
               />
            </View>

            <ChangeUsernameModal
               isVisible={isShowUsernameModal}
               handleClose={() => {
                  setShowUsernameModal(false);
               }}
               initialUsername={username}
               onSubmitSuccess={onUsernameUpdateSuccess}
            />

            <ChangeReferrerModal
               isVisible={isShowReferrerModal}
               handleClose={() => {
                  setShowReferrerModal(false);
               }}
            />
         </View>
      </ScreenContainer>
   );
};

const styles = StyleSheet.create({
   pressableTextContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#1d2023',
      marginTop: 20,
      paddingLeft: 18,
      paddingRight: 13,
      height: 48,
      borderRadius: 8,
      marginBottom: 20,
   },
});
