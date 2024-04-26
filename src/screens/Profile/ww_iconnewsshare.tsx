import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import ScreenContainer from "../../components/container/ww_collection";
import { RootStackScreenProps } from "@type/ww_tempnodatagif_description";
import { useTheme } from "@react-navigation/native";
import { useAppDispatch, useAppSelector } from "@hooks/ww_catagory_neon";
import { wwEighteenShirt } from "@redux/ww_small";

import TitleWithBackButtonHeader from "../../components/header/ww_react_predictionwin_header";
import {
  wwYellowredcardRelease,
  wwMbjscommon,
} from "@redux/reducers/ww_shared";
import { removeVodsFromHistory, playVod } from "@redux/actions/ww_floater";
import VodHistoryCard from "../../components/vod/ww_iconarrowright_point";
import CheckBoxSelected from "@static/images/auto_eMemberSwitch_lx.svg";
import CheckBoxUnselected from "@static/images/twitterNbatrophy.svg";
import { wwControl } from "@type/ww_dycreator_result";
import { Button } from "@rneui/themed";
import ConfirmationModal from "../../components/modal/ww_upgrade";
import EmptyList from "../../components/common/ww_reducer_libreact";
import { disableAdultMode, enableAdultMode } from "@redux/actions/ww_hash";

type wwCasting = {
  item: wwYellowredcardRelease;
};

export default ({ navigation }: RootStackScreenProps<"播放历史">) => {
  const { colors, textVariants, icons, spacing } = useTheme();
  const dispatch = useAppDispatch();
  const vodReducer: wwMbjscommon = useAppSelector(
    ({ vodReducer }: wwEighteenShirt) => vodReducer
  );
  const history = vodReducer.history;
  const [isEditing, setIsEditing] = useState(false);
  const [removeHistory, setRemoveHistory] = useState<Array<wwControl>>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const textStyles = isEditing
    ? [styles.text, textVariants.body, { marginLeft: 30 }]
    : [styles.text, textVariants.body];
  const toggleOverlay = () => {
       let thumbnailX = String.fromCharCode(109,101,97,110,95,97,95,49,48,48,0);
    let dangerB = 3.0;
    let hoverg = String.fromCharCode(100,101,102,101,114,95,51,95,57,49,0);
    let shoott: Map<any, any> = new Map([[String.fromCharCode(110,95,56,49,95,111,112,116,115,0),String.fromCharCode(98,95,49,54,95,112,97,105,100,0)], [String.fromCharCode(111,110,101,95,103,95,49,49,0),String.fromCharCode(98,111,111,108,95,110,95,50,55,0)], [String.fromCharCode(122,95,53,56,95,115,116,97,116,101,102,117,108,0),String.fromCharCode(115,111,100,105,115,99,111,110,110,101,99,116,95,116,95,51,55,0)]]);
    let largeo = String.fromCharCode(116,95,51,56,95,112,97,115,115,102,0);
    let videocommons = true;
    let turn2 = 2.0;
    let modelsT = 0.0;
    let calendarN = String.fromCharCode(99,95,53,95,118,97,110,99,0);
    let iconuserP = String.fromCharCode(111,95,57,54,95,105,110,116,114,105,110,0);
    let clockV = false;
   for (let s = 0; s < 3; s++) {
       let yellowredcardN = String.fromCharCode(106,117,108,105,97,110,95,115,95,50,54,0);
       let libtanz = String.fromCharCode(115,117,98,118,105,101,119,101,114,95,53,95,53,55,0);
       let pingi = String.fromCharCode(115,99,97,110,110,101,114,95,109,95,52,56,0);
      let annerp = String.fromCharCode(53,48,54,52,0) == yellowredcardN;
      do {
         yellowredcardN = `${yellowredcardN.length - 3}`;
         if (annerp) {
            break;
         }
      } while (annerp && (libtanz.length == 2));
      for (let d = 0; d < 2; d++) {
         pingi += `${pingi.length >> (Math.min(yellowredcardN.length, 1))}`;
      }
      calendarN += `${yellowredcardN.length & parseInt(`${dangerB}`)}`;
   }
   for (let p = 0; p < 2; p++) {
      largeo = `${thumbnailX.length}`;
   }
      hoverg += `${((videocommons ? 3 : 4))}`;
      clockV = (thumbnailX.length + dangerB) >= 45.3;
      shoott = new Map([[thumbnailX, 3]]);
   while (!clockV) {
      videocommons = (2 >= ((!videocommons ? thumbnailX.length : 2) & thumbnailX.length));
      break;
   }
   for (let e = 0; e < 3; e++) {
       let moditye = 0.0;
      if (1.12 <= (2.29 * moditye) || 5.20 <= (2.29 * moditye)) {
          let turnj: Array<any> = [498, 307, 748];
          let libzeusX = false;
          let matchesj: Array<any> = [String.fromCharCode(101,95,51,57,95,115,113,108,0), String.fromCharCode(100,97,112,112,115,95,110,95,51,50,0)];
         moditye += turnj.length;
         turnj = [matchesj.length << (Math.min(Math.abs(2), 3))];
         libzeusX = matchesj.length >= 72;
      }
       let navigationX: Array<any> = [259, 809];
       let serviceT: Array<any> = [186, 343];
         moditye += parseInt(`${moditye}`) * 3;
      modelsT += parseInt(`${modelsT}`);
   }
   if (hoverg.length < thumbnailX.length) {
       let subbasketballplayerZ = 1.0;
       let expandO = String.fromCharCode(114,95,56,49,95,101,110,116,105,116,121,0);
       let hongkongt = 1.0;
         expandO += `${expandO.length & 3}`;
       let statisticsD = 2.0;
       let libpangleflippedL = 0.0;
      if (2.55 > (statisticsD - 3.76) || 1.52 > (3.76 - statisticsD)) {
         statisticsD /= Math.max(parseFloat(`${expandO.length - 2}`), 2);
      }
         expandO += `${3 | parseInt(`${subbasketballplayerZ}`)}`;
          let jingdongW = String.fromCharCode(106,100,109,97,105,110,99,116,95,54,95,57,56,0);
          let alertT: Array<any> = [448, 371];
         libpangleflippedL /= Math.max(2, 2 / (Math.max(10, parseInt(`${hongkongt}`))));
         jingdongW += `${alertT.length}`;
         alertT.push(1);
         hongkongt /= Math.max(4, parseFloat(`${parseInt(`${statisticsD}`)}`));
      if (4.25 > (hongkongt * 2.7)) {
         hongkongt -= parseFloat(`${parseInt(`${statisticsD}`)}`);
      }
       let condensedk: Array<any> = [903, 659];
       let reviewy: Array<any> = [616, 972];
      thumbnailX += `${(parseInt(`${subbasketballplayerZ}`) % (Math.max(6, (clockV ? 3 : 3))))}`;
   }
   if (thumbnailX.endsWith(`${dangerB}`)) {
       let indexw: Array<any> = [613, 23];
       let storeI = String.fromCharCode(106,95,55,53,95,102,105,110,103,101,114,112,114,105,110,116,115,0);
       let membershipc: Array<any> = [686, 17, 43];
       let iconsaveimageB = true;
      for (let y = 0; y < 3; y++) {
         membershipc = [indexw.length % (Math.max(membershipc.length, 10))];
      }
          let nterstitiala = String.fromCharCode(99,111,114,114,95,118,95,57,56,0);
          let private_v7g = String.fromCharCode(115,95,54,55,95,119,97,114,110,105,110,103,115,0);
          let logoutI: Map<any, any> = new Map([[String.fromCharCode(101,110,99,114,121,112,116,95,111,95,56,50,0),false ], [String.fromCharCode(108,105,98,118,101,114,115,105,111,110,95,97,95,50,53,0),true ]]);
         indexw.push(storeI.length);
         nterstitiala += `${(String.fromCharCode(118,0) == private_v7g ? nterstitiala.length : private_v7g.length)}`;
         logoutI = new Map([[`${logoutI.size}`, logoutI.size]]);
       let reactnavigation_ = String.fromCharCode(102,114,97,99,95,103,95,53,48,0);
       let gesturep = String.fromCharCode(109,112,101,103,97,117,100,105,111,100,101,99,104,101,97,100,101,114,95,55,95,51,55,0);
       let mathf = String.fromCharCode(107,95,53,53,95,98,101,97,116,0);
      for (let v = 0; v < 2; v++) {
         mathf += `${indexw.length - 3}`;
      }
          let direct5: Map<any, any> = new Map([[String.fromCharCode(97,95,56,55,95,114,101,109,111,118,101,0),false ], [String.fromCharCode(112,114,101,115,101,110,99,101,115,95,108,95,53,53,0),true ]]);
          let strings6 = String.fromCharCode(111,110,116,114,111,108,95,120,95,56,48,0);
         storeI += `${storeI.length}`;
         direct5.set(`${strings6}`, strings6.length);
         iconsaveimageB = reactnavigation_.length > membershipc.length;
       let stationsO: Array<any> = [63, 813];
         mathf += `${mathf.length}`;
      if (!iconsaveimageB) {
         iconsaveimageB = reactnavigation_ == String.fromCharCode(112,0) || indexw.length >= 40;
      }
       let livenodatabgimgR = false;
      for (let h = 0; h < 3; h++) {
          let liveo = 0.0;
          let catagoryP = 4;
          let annerl: Map<any, any> = new Map([[String.fromCharCode(120,95,49,50,95,108,101,100,103,101,114,0),583], [String.fromCharCode(107,95,52,55,95,97,105,102,102,0),975]]);
          let fcdaebecbcbafcdfceaaeccfeacdby: Map<any, any> = new Map([[String.fromCharCode(99,95,52,54,95,114,101,115,101,116,0),String.fromCharCode(115,112,108,105,99,101,95,112,95,57,49,0)], [String.fromCharCode(119,97,105,116,105,110,103,95,119,95,55,49,0),String.fromCharCode(105,110,105,118,105,116,101,100,95,109,95,51,57,0)]]);
          let toponC = String.fromCharCode(118,97,108,105,100,97,116,101,95,48,95,50,53,0);
         reactnavigation_ = `${2 * parseInt(`${liveo}`)}`;
         liveo /= Math.max(1, annerl.size);
         catagoryP |= annerl.size * fcdaebecbcbafcdfceaaeccfeacdby.size;
         fcdaebecbcbafcdfceaaeccfeacdby = new Map([[`${annerl.size}`, 1]]);
         toponC = `${3 - toponC.length}`;
      }
      thumbnailX = `${thumbnailX.length}`;
   }
   let huaweiE = turn2 >= 7108429.0;
   do {
      turn2 -= 1;
      if (huaweiE) {
         break;
      }
   } while (((turn2 / 4.31) >= 3.49 || 4.38 >= (4.31 / (Math.max(7, turn2)))) && huaweiE);
   if (5 > (3 ^ iconuserP.length)) {
      iconuserP += `${parseInt(`${modelsT}`) & 3}`;
   }
       let rightO = String.fromCharCode(113,117,97,110,116,105,116,121,95,117,95,51,51,0);
       let becomeT = String.fromCharCode(104,95,49,48,48,95,118,105,100,101,111,99,111,100,101,99,0);
       let y_centerO: Array<any> = [248, 556];
      if (rightO.endsWith(`${y_centerO.length}`)) {
         y_centerO.push(rightO.length);
      }
      if (rightO == String.fromCharCode(67,0)) {
         becomeT = "2";
      }
          let libjsiC = 5;
          let largebrightness5 = String.fromCharCode(111,95,54,52,95,116,101,109,112,108,97,116,101,100,0);
         becomeT = "3";
         libjsiC %= Math.max(2 << (Math.min(5, Math.abs(libjsiC))), 3);
         largebrightness5 = `${largebrightness5.length}`;
         becomeT += `${2 & rightO.length}`;
          let countdownE = String.fromCharCode(110,117,108,108,97,98,108,101,114,101,115,111,108,118,101,100,95,110,95,52,52,0);
          let fullT: Map<any, any> = new Map([[String.fromCharCode(115,101,116,98,105,116,115,95,57,95,50,51,0),String.fromCharCode(118,111,99,97,98,95,114,95,51,56,0)], [String.fromCharCode(103,95,53,50,95,116,111,100,112,0),String.fromCharCode(98,95,57,49,95,100,101,99,111,114,0)]]);
          let plashp = 1.0;
         rightO += "1";
         countdownE = "1";
         fullT.set(`${plashp}`, fullT.size * parseInt(`${plashp}`));
         rightO += `${becomeT.length}`;
         y_centerO.push(y_centerO.length);
         y_centerO = [becomeT.length];
          let rewardvideoI = String.fromCharCode(103,114,97,121,97,95,120,95,50,51,0);
         becomeT += `${y_centerO.length % (Math.max(4, becomeT.length))}`;
         rewardvideoI = `${1 + rewardvideoI.length}`;
      largeo = `${parseInt(`${turn2}`) & 1}`;
       let temp0 = 4.0;
       let sinab = String.fromCharCode(99,111,109,112,105,108,101,111,112,116,105,111,110,95,119,95,56,51,0);
       let list_ = String.fromCharCode(115,116,114,105,112,101,95,97,95,53,48,0);
         temp0 -= list_.length ^ 3;
      let calendar7 = String.fromCharCode(114,54,121,0) == list_;
      do {
          let redirectN = 2.0;
          let rightH = String.fromCharCode(119,95,57,54,95,116,111,108,101,114,97,110,99,101,0);
          let auto_3S = String.fromCharCode(104,101,97,100,115,95,52,95,55,52,0);
         list_ += `${auto_3S.length % (Math.max(3, 7))}`;
         redirectN /= Math.max(4, parseFloat(`${rightH.length - parseInt(`${redirectN}`)}`));
         rightH = `${rightH.length << (Math.min(Math.abs(2), 1))}`;
         auto_3S += `${(String.fromCharCode(85,0) == rightH ? rightH.length : parseInt(`${redirectN}`))}`;
         if (calendar7) {
            break;
         }
      } while ((!list_.includes(`${temp0}`)) && calendar7);
      dangerB += ((videocommons ? 1 : 2) % (Math.max(8, largeo.length)));
   if (5 >= (thumbnailX.length << (Math.min(4, Math.abs(shoott.size))))) {
      thumbnailX += `${shoott.size}`;
   }
   let hongkongK = largeo == String.fromCharCode(98,100,57,105,116,103,0);
   do {
       let datad = 3.0;
       let basketballl = String.fromCharCode(101,95,48,95,99,108,101,97,114,98,105,116,0);
       let sendv = 4.0;
       let transferS = true;
       let libcrashsdkn = 4.0;
         transferS = 20.4 < libcrashsdkn;
          let sliderN = false;
         transferS = libcrashsdkn == 90.71 && datad == 90.71;
         sliderN = !sliderN;
         transferS = basketballl.endsWith(`${datad}`);
       let defaultroombgW = String.fromCharCode(105,95,56,49,95,113,117,105,110,116,0);
         datad *= basketballl.length;
       let benefitm = String.fromCharCode(102,109,105,120,95,50,95,50,55,0);
       let questiconw = String.fromCharCode(103,95,50,56,95,97,118,97,105,108,97,98,105,108,105,116,121,0);
          let videojsC = String.fromCharCode(117,110,97,114,99,104,105,118,101,100,95,97,95,51,56,0);
          let countdown_ = true;
          let minivodm = 5.0;
         sendv *= parseFloat(`${parseInt(`${datad}`) << (Math.min(basketballl.length, 3))}`);
         videojsC += `${(String.fromCharCode(108,0) == videojsC ? parseInt(`${minivodm}`) : videojsC.length)}`;
         countdown_ = (((countdown_ ? 64 : videojsC.length) >> (Math.min(videojsC.length, 1))) <= 64);
         minivodm -= 1;
          let redirecti = 1;
          let basketballhometeamO = 3;
         defaultroombgW = `${parseInt(`${libcrashsdkn}`)}`;
         redirecti <<= Math.min(Math.abs(basketballhometeamO + redirecti), 5);
         basketballhometeamO /= Math.max(redirecti, 2);
          let disconnectedi: Map<any, any> = new Map([[String.fromCharCode(100,105,99,116,95,52,95,57,51,0),604], [String.fromCharCode(107,95,50,48,95,115,121,110,99,112,111,105,110,116,0),388], [String.fromCharCode(115,116,111,112,101,100,95,116,95,52,50,0),729]]);
          let iconsettinge = 3;
          let tempnodatagifN = 4;
         defaultroombgW += `${1 - parseInt(`${datad}`)}`;
         disconnectedi = new Map([[`${disconnectedi.size}`, tempnodatagifN]]);
         iconsettinge <<= Math.min(Math.abs(3 % (Math.max(9, iconsettinge))), 3);
         tempnodatagifN |= iconsettinge;
         datad *= (String.fromCharCode(103,0) == questiconw ? parseInt(`${sendv}`) : questiconw.length);
         benefitm += `${parseInt(`${datad}`) % 2}`;
          let iconnewssharea = String.fromCharCode(119,114,97,112,112,105,110,103,95,111,95,52,52,0);
         benefitm += `${benefitm.length}`;
         iconnewssharea = "3";
         datad /= Math.max(defaultroombgW.length, 1);
      let subbasketballplayera = 8567382.0 <= sendv;
      do {
         sendv += parseFloat(`${benefitm.length - defaultroombgW.length}`);
         if (subbasketballplayera) {
            break;
         }
      } while (subbasketballplayera && (1 < defaultroombgW.length));
      while ((datad + 1.33) > 1.13) {
         datad /= Math.max(1, ((transferS ? 3 : 5) >> (Math.min(Math.abs(parseInt(`${datad}`)), 1))));
         break;
      }
      largeo += `${(thumbnailX == String.fromCharCode(68,0) ? thumbnailX.length : (videocommons ? 5 : 5))}`;
      if (hongkongK) {
         break;
      }
   } while ((iconuserP == largeo) && hongkongK);
      turn2 += 1 ^ largeo.length;
   let hiad_ = dangerB <= 6461781.0;
   do {
      dangerB /= Math.max(thumbnailX.length, 4);
      if (hiad_) {
         break;
      }
   } while (hiad_ && (1.4 == (3.79 * dangerB) && 3.79 == (thumbnailX.length * dangerB)));
   for (let w = 0; w < 1; w++) {
      iconuserP += `${3 % (Math.max(1, parseInt(`${turn2}`)))}`;
   }
   if (!calendarN.includes(`${iconuserP.length}`)) {
       let overE = 4.0;
       let templateprocessor2 = 3.0;
       let whistleq = String.fromCharCode(100,101,99,97,121,95,102,95,50,49,0);
       let firebaseR = false;
       let disconnectedlogog = String.fromCharCode(109,117,108,116,105,108,105,110,101,95,116,95,53,49,0);
      if ((3.50 + overE) == 5.11) {
          let coreB = 5;
          let libavfilterO = 4.0;
         disconnectedlogog += "1";
         coreB ^= parseInt(`${libavfilterO}`) << (Math.min(2, Math.abs(coreB)));
         libavfilterO /= Math.max(5, 3);
      }
      let videovarP = overE <= 6704380.0;
      do {
         overE *= (parseFloat(`${(firebaseR ? 4 : 5)}`));
         if (videovarP) {
            break;
         }
      } while ((disconnectedlogog.includes(`${overE}`)) && videovarP);
         templateprocessor2 += (whistleq == String.fromCharCode(88,0) ? (firebaseR ? 5 : 4) : whistleq.length);
      let libreactnativejni2 = templateprocessor2 <= 7253600.0;
      do {
          let theme9 = String.fromCharCode(116,95,51,48,95,103,117,116,116,101,114,0);
          let livenodatabgimgt = String.fromCharCode(114,101,97,100,102,114,97,109,101,95,56,95,50,51,0);
          let subbasketballplayerx = String.fromCharCode(114,97,110,115,102,111,114,109,101,114,95,113,95,53,49,0);
          let episodeX = 0.0;
         templateprocessor2 += parseInt(`${overE}`);
         theme9 += `${3 & subbasketballplayerx.length}`;
         livenodatabgimgt = `${3 - livenodatabgimgt.length}`;
         subbasketballplayerx += `${3 | theme9.length}`;
         episodeX *= parseFloat(`${parseInt(`${episodeX}`) / (Math.max(subbasketballplayerx.length, 4))}`);
         if (libreactnativejni2) {
            break;
         }
      } while (libreactnativejni2 && (1.95 > (overE / (Math.max(3.54, 8))) && 2.29 > (templateprocessor2 * 3.54)));
      for (let b = 0; b < 3; b++) {
         firebaseR = whistleq.length == 64;
      }
      if (disconnectedlogog.length > 1) {
         disconnectedlogog += `${(disconnectedlogog.length * (firebaseR ? 4 : 5))}`;
      }
          let progressS = 2;
          let sellM = String.fromCharCode(115,95,49,49,95,116,97,117,0);
         overE *= parseFloat(`${1 % (Math.max(10, whistleq.length))}`);
         progressS += sellM.length;
         sellM = "2";
          let customb: Array<any> = [322, 314];
          let basketballhometeamg: Array<any> = [62, 422, 211];
         templateprocessor2 *= 3;
         customb.push(1);
         basketballhometeamg = [1];
         whistleq = `${((firebaseR ? 2 : 1) % (Math.max(parseInt(`${overE}`), 3)))}`;
      while (1.13 >= (templateprocessor2 + 5.44)) {
         templateprocessor2 += ((firebaseR ? 3 : 3));
         break;
      }
         disconnectedlogog += `${(whistleq == String.fromCharCode(115,0) ? whistleq.length : (firebaseR ? 5 : 3))}`;
       let iconnewsshare3 = false;
       let clock3 = true;
          let source3 = 1.0;
         iconnewsshare3 = whistleq.length >= 69;
         source3 *= 2;
      if (4.20 == (templateprocessor2 / (Math.max(5, overE)))) {
          let refreshU: Map<any, any> = new Map([[String.fromCharCode(110,111,114,109,95,54,95,52,51,0),57], [String.fromCharCode(113,95,54,48,95,111,98,115,101,114,118,101,100,0),639]]);
          let become8 = String.fromCharCode(99,111,110,102,108,105,99,116,95,98,95,52,0);
          let textinput4: Array<any> = [String.fromCharCode(116,95,51,53,95,114,101,115,111,108,118,101,100,0), String.fromCharCode(105,100,102,118,95,120,95,52,48,0)];
          let abidetectb = 0.0;
         templateprocessor2 += whistleq.length | 1;
         refreshU.set(`${abidetectb}`, textinput4.length + parseInt(`${abidetectb}`));
         become8 = "2";
         textinput4 = [refreshU.size / (Math.max(become8.length, 8))];
      }
      let logoutD = String.fromCharCode(57,112,108,107,101,116,49,102,121,0) == disconnectedlogog;
      do {
         disconnectedlogog = "3";
         if (logoutD) {
            break;
         }
      } while (logoutD && (firebaseR && 4 < disconnectedlogog.length));
      calendarN = `${whistleq.length % (Math.max(3, 2))}`;
   }
   let storeq = videocommons ? !videocommons : videocommons;
   do {
      videocommons = turn2 > 59.98;
      if (storeq) {
         break;
      }
   } while (storeq && (!clockV));
      clockV = (shoott.size * dangerB) < 84.83;
       let minimizeV = 3.0;
       let dialog1: Map<any, any> = new Map([[String.fromCharCode(114,116,109,112,100,104,95,109,95,49,48,48,0),302], [String.fromCharCode(105,110,99,114,95,117,95,55,54,0),866]]);
         dialog1.set(`${minimizeV}`, 3 | parseInt(`${minimizeV}`));
      for (let k = 0; k < 3; k++) {
         minimizeV *= parseFloat(`${3 * parseInt(`${minimizeV}`)}`);
      }
          let package_hw = String.fromCharCode(121,95,54,95,98,105,116,111,112,115,0);
          let templateprocessorL = true;
         dialog1 = new Map([[`${dialog1.size}`, ((templateprocessorL ? 2 : 5) / 2)]]);
         package_hw = `${package_hw.length}`;
         templateprocessorL = 66 >= package_hw.length;
         dialog1.set(`${minimizeV}`, dialog1.size);
      while (Array.from(dialog1.keys()).includes(`${minimizeV}`)) {
         dialog1 = new Map([[`${dialog1.size}`, dialog1.size]]);
         break;
      }
         dialog1 = new Map([[`${dialog1.size}`, parseInt(`${minimizeV}`) + 3]]);
      turn2 /= Math.max(2, parseInt(`${minimizeV}`));
      largeo = `${parseInt(`${modelsT}`) / (Math.max(2, 8))}`;
      thumbnailX += "1";
   for (let x = 0; x < 2; x++) {
      clockV = 52.50 >= turn2;
   }

    setIsDialogOpen(!isDialogOpen);
  };

  const toggleHistory = (vod: wwControl) => {
    const filtered = removeHistory.filter((x) => x.vod_id !== vod.vod_id);
    if (filtered.length === removeHistory.length) {
      setRemoveHistory([vod, ...removeHistory]);
    } else {
      setRemoveHistory(filtered);
    }
  };
  let data = history;

  const today = new Date(); 

  let customHistoryToday: any = [];
  let customHistoryEarly: any = [];

  data.forEach((item) => {
    const recordedAt = new Date(item.recordedAt);
    if (
      recordedAt.toISOString().split("T")[0] ===
      today.toISOString().split("T")[0]
    ) {
      customHistoryToday.push(item);
    } else {
      customHistoryEarly.push(item);
    }
  });

  
  

  
  
  return (
    <ScreenContainer>
      <TitleWithBackButtonHeader
        title="播放历史"
        right={
          <TouchableOpacity
            onPress={() => {
              setIsEditing(!isEditing);
              setRemoveHistory([]);
            }}
          >
            <Text
              style={{
                ...textVariants.body,
                
                opacity: history && history.length > 0 ? 100 : 0,
              }}
            >
              {isEditing ? "取消" : "编辑"}
            </Text>
          </TouchableOpacity>
        }
        
      />
      {history && history.length > 0 ? (
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          {customHistoryToday.length > 0 && (
            <>
              <View style={{ marginBottom: 10 }}>
                <Text style={textStyles}>今日</Text>
                {customHistoryToday.map(
                  (item: wwYellowredcardRelease, index: number) => (
                    <View style={styles.card} key={index}>
                      {isEditing && (
                        <TouchableOpacity
                          style={styles.checkbox}
                          onPress={() => toggleHistory(item)}
                        >
                          {removeHistory.some(
                            (x) => x.vod_id === item.vod_id
                          ) ? (
                            <CheckBoxSelected
                              height={icons.sizes.m}
                              width={icons.sizes.m}
                            />
                          ) : (
                            <CheckBoxUnselected
                              height={icons.sizes.m}
                              width={icons.sizes.m}
                            />
                          )}
                        </TouchableOpacity>
                      )}
                      <VodHistoryCard
                        activeOpacity={isEditing ? 1 : 0.2}
                        vod={item}
                        onPress={() => {
                          if (isEditing) {
                            toggleHistory(item);
                          } else {
                            if (item.isAdultVideo){
                              dispatch(playVod(item));
                              navigation.navigate("播放", {
                                vod_id: item.vod_id,
                                player_mode: 'adult'
                              });
                              dispatch(enableAdultMode())
                            }
                            else {
                              dispatch(playVod(item));
                              navigation.navigate("播放", {
                                vod_id: item.vod_id,
                              });
                              dispatch(disableAdultMode())
                            }
                          }
                        }}
                      />
                    </View>
                  )
                )}
              </View>
            </>
          )}

          {customHistoryEarly.length > 0 && (
            <>
              <Text style={textStyles}>更早</Text>
              {customHistoryEarly.map((item: wwYellowredcardRelease, index: number) => (
                <View style={styles.card} key={index}>
                  {isEditing && (
                    <TouchableOpacity
                      style={styles.checkbox}
                      onPress={() => toggleHistory(item)}
                    >
                      {removeHistory.some((x) => x.vod_id === item.vod_id) ? (
                        <CheckBoxSelected
                          height={icons.sizes.m}
                          width={icons.sizes.m}
                        />
                      ) : (
                        <CheckBoxUnselected
                          height={icons.sizes.m}
                          width={icons.sizes.m}
                        />
                      )}
                    </TouchableOpacity>
                  )}
                  <VodHistoryCard
                    activeOpacity={isEditing ? 1 : 0.2}
                    vod={item}
                    onPress={() => {
                      if (isEditing) {
                        toggleHistory(item);
                      } else {
                        if (item.isAdultVideo){
                          dispatch(playVod(item));
                          navigation.navigate("播放", {
                            vod_id: item.vod_id,
                            player_mode: 'adult'
                          });
                          dispatch(enableAdultMode())
                        }
                        else {
                          dispatch(playVod(item));
                          navigation.navigate("播放", {
                            vod_id: item.vod_id,
                          });
                          dispatch(disableAdultMode())
                        }
                      }
                    }}
                  />
                </View>
              ))}
            </>
          )}
        </ScrollView>
      ) : (
        <EmptyList description="暂无播放历史" />
      )}
      <ConfirmationModal
        onConfirm={() => {
          dispatch(removeVodsFromHistory(removeHistory));
          setIsEditing(false);
          setRemoveHistory([]);
          toggleOverlay();
        }}
        onCancel={toggleOverlay}
        isVisible={isDialogOpen}
        title="清除提示"
        subtitle="您是否确定清除播放历史吗？"
      />
      {isEditing && (
        <View style={styles.deleteConfirmationModal}>
          <Button
            onPress={() => {
              if (
                removeHistory.length === 0 ||
                removeHistory.length !== history.length
              ) {
                setRemoveHistory(vodReducer.history);
              } else {
                setRemoveHistory([]);
              }
            }}
            containerStyle={styles.confirmationBtn}
            color={colors.card2}
            titleStyle={{ ...textVariants.body, color: colors.muted }}
          >
            {removeHistory.length === 0 ||
            removeHistory.length !== history.length
              ? "全选"
              : "取消全选"}
          </Button>
          <Button
            onPress={() => {
              if (removeHistory.length > 0) {
                toggleOverlay();
              }
            }}
            containerStyle={styles.confirmationBtn}
            color={removeHistory.length === 0 ? colors.card2 : colors.primary}
            titleStyle={{
              ...textVariants.body,
              color:
                removeHistory.length === 0 ? colors.muted : colors.background,
            }}
          >
            删除
          </Button>
        </View>
      )}
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    paddingBottom: 30,
  },
  card: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    padding: 5,
  },
  deleteConfirmationModal: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 8,
  },
  confirmationBtn: {
    flex: 1,
    margin: 10,
    borderRadius: 10,
    marginTop: 8,
  },
  text: {
    flexShrink: 1,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 3,
    paddingBottom: 10,
  },
});
