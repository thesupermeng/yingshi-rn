import React, { useState, useMemo, memo, useEffect, useRef, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Animated,
  FlatList,
  Platform
} from "react-native";
import { useNavigation, useTheme } from "@react-navigation/native";
import { IDelegate, VNConnectionWith } from "@type/wpk_long";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import DownloadIcon from '@static/images/feedbackAway.svg'
import DlIcon from "@static/images/typesFilledBlacklist.svg";
import VipIcon from "@static/images/playlistInjury.svg"
import FinishIcon from "@static/images/gestureMoreBackground.svg";
import { RAccepted, BUZTyping } from "@type/jx_suggestion";
import { useAppSelector } from "@hooks/kg_index";
import { PSmall } from "@redux/fj_prediction_thailand";
import DeviceInfo from "react-native-device-info";
import { Provider, Toast } from "@ant-design/react-native";
import { debounce, throttle } from "lodash";
import { SMBing } from "@utility/sa_crown";
import { DOWNLOAD_FEATURE_MAX_QUEUE } from "@utility/n_subs_interstitial";

const throttledToast = debounce((msg: string) => {
  SMBing.showToast(msg)
}, 1000)


interface XFillButton {
  vodId?: number;
  isVip: boolean;
  source?: number;
  screen: string;
  episodes?: IDelegate;
  handleClose: any;
  rangeSize?: number;
  activeEpisode?: number;
  onDownload: (nid: number) => void;
  setShowAdOverlay: (show: boolean) => void;
  onPressToDownload: () => void,
}
function SelectDownloadComponent({
  vodId,
  isVip,
  source,
  screen,
  episodes,
  handleClose,
  rangeSize = 50,
  activeEpisode = 0,
  onDownload,
  setShowAdOverlay,
  onPressToDownload,
}: XFillButton) {
  const { colors, textVariants, spacing } = useTheme();
  const EPISODE_RANGE_SIZE = rangeSize;
  const insets = useSafeAreaInsets();
  const itemPerRow = 5;
  const gapSize = 8;
  const windowWidth = screen === 'landscape' ? Dimensions.get('window').width / 2 : Dimensions.get('window').width;
  const width = windowWidth - 15 - spacing.sideOffset * 4;
  const height = Dimensions.get('window').height / 2 * (screen === 'landscape' ? 0.8 : 0.55);
  const childWidth = (width - gapSize) / itemPerRow;
  const [episodeHeight, setHeight] = useState(0);
  const [episodeWidth, setWidth] = useState(0);
  const navigation = useNavigation();
  const downloadVideoReducer: BUZTyping = useAppSelector(
    ({ downloadVideoReducer }: PSmall) => downloadVideoReducer
  );
  const [iosCustomToastIsVisible, setIosCustomToastIsVisible] = useState(false)
  const [iosCustomToastText, setIosCustomToastText] = useState("已加入下载队列，请查看‘我的下载’")

  const debouncedSetIosCustomToastIsVisibleTrue = debounce(() => {
       let fillW: Map<any, any> = new Map([[String.fromCharCode(114,116,109,112,100,104,95,118,95,57,49,0),String.fromCharCode(115,117,98,115,97,109,112,108,101,95,112,95,49,51,0)], [String.fromCharCode(101,108,101,109,101,110,116,115,95,108,95,50,48,0),String.fromCharCode(97,115,98,100,95,101,95,56,51,0)], [String.fromCharCode(99,104,97,110,110,101,108,109,97,112,95,108,95,49,55,0),String.fromCharCode(101,95,51,56,95,122,101,114,111,98,108,111,98,0)]]);
    let megaphones = String.fromCharCode(106,95,52,55,95,97,115,111,99,0);
    let default_wrX = String.fromCharCode(97,98,108,101,95,53,95,49,50,0);
    let z_counth: Map<any, any> = new Map([[String.fromCharCode(113,95,50,52,95,112,97,114,116,105,99,105,112,97,116,105,111,110,0),597], [String.fromCharCode(99,105,112,104,101,114,95,107,95,57,56,0),278], [String.fromCharCode(114,95,49,57,95,114,101,109,111,116,101,0),468]]);
    let spec2: Array<any> = [String.fromCharCode(109,101,116,101,114,95,105,95,56,49,0), String.fromCharCode(112,101,114,102,111,114,109,95,104,95,57,56,0)];
    let suggestiont = String.fromCharCode(105,95,51,51,95,117,110,105,113,117,101,100,0);
    let injuryh = String.fromCharCode(103,95,56,48,95,102,101,109,97,108,101,0);
   while ((1 >> (Math.min(5, Math.abs(fillW.size)))) == 4 && (1 >> (Math.min(3, Math.abs(fillW.size)))) == 4) {
      fillW.set(megaphones, 1 << (Math.min(2, megaphones.length)));
      break;
   }
      injuryh = `${(megaphones == String.fromCharCode(117,0) ? injuryh.length : megaphones.length)}`;
   for (let l = 0; l < 2; l++) {
      suggestiont += "2";
   }
   for (let p = 0; p < 1; p++) {
      injuryh += `${2 * default_wrX.length}`;
   }
   for (let u = 0; u < 2; u++) {
       let pressureU = String.fromCharCode(116,105,109,101,118,97,108,95,109,95,54,55,0);
       let auto_090: Array<any> = [723, 642, 73];
       let privacyw = 0;
       let malaysiah = 1;
       let username8: Map<any, any> = new Map([[String.fromCharCode(97,100,100,114,115,95,97,95,54,54,0),799], [String.fromCharCode(104,95,48,95,117,110,97,114,99,104,105,118,101,0),739]]);
      for (let u = 0; u < 2; u++) {
         auto_090 = [username8.size << (Math.min(auto_090.length, 1))];
      }
      while (3 >= (pressureU.length - 3) || 4 >= (3 - pressureU.length)) {
          let bottomH = false;
          let untickg: Map<any, any> = new Map([[String.fromCharCode(101,110,102,111,114,99,101,95,111,95,53,50,0),715], [String.fromCharCode(107,95,55,52,95,112,114,117,110,101,0),380]]);
         pressureU = `${privacyw + pressureU.length}`;
         bottomH = !bottomH;
         untickg = new Map([[`${untickg.size}`, untickg.size]]);
         break;
      }
       let buffert = 1.0;
      if (5 == (username8.size / 4) && 2 == (username8.size % 4)) {
          let miniN = true;
          let becomey = 5.0;
          let sheetQ: Array<any> = [50, 172, 237];
          let auto_wv = true;
         username8.set(pressureU, pressureU.length + parseInt(`${buffert}`));
         miniN = 7.18 >= becomey;
         becomey += (parseFloat(`${(miniN ? 1 : 1)}`));
         sheetQ = [sheetQ.length % (Math.max(3, parseInt(`${becomey}`)))];
         auto_wv = sheetQ.includes(auto_wv);
      }
      for (let t = 0; t < 2; t++) {
          let xvodw = false;
          let roomA = 3.0;
          let sellr = String.fromCharCode(111,110,118,101,114,115,97,116,105,111,110,95,117,95,50,57,0);
         malaysiah *= malaysiah;
         xvodw = 9.71 <= roomA;
         roomA *= parseFloat(`${parseInt(`${roomA}`) & 2}`);
         sellr = `${parseInt(`${roomA}`)}`;
      }
       let volume0 = String.fromCharCode(112,95,51,51,95,104,117,109,97,110,0);
      for (let h = 0; h < 2; h++) {
         username8.set(`${privacyw}`, malaysiah);
      }
         auto_090 = [(pressureU == String.fromCharCode(72,0) ? parseInt(`${buffert}`) : pressureU.length)];
      for (let x = 0; x < 3; x++) {
         auto_090 = [3];
      }
          let scheduleb = 2.0;
          let sportsg = String.fromCharCode(99,104,97,114,108,101,110,95,117,95,51,49,0);
         volume0 += `${parseInt(`${buffert}`)}`;
         scheduleb *= (String.fromCharCode(82,0) == sportsg ? parseInt(`${scheduleb}`) : sportsg.length);
         username8 = new Map([[`${privacyw}`, privacyw - 1]]);
       let roomN: Map<any, any> = new Map([[String.fromCharCode(117,95,53,54,95,115,117,98,116,114,97,99,116,101,100,0),687], [String.fromCharCode(101,112,115,118,95,51,95,56,53,0),891], [String.fromCharCode(115,97,105,111,95,56,95,50,57,0),815]]);
      while (5.65 == (buffert + 5.61)) {
          let zhubox: Array<any> = [33, 36];
         username8.set(`${zhubox.length}`, username8.size / (Math.max(2, 10)));
         break;
      }
         roomN = new Map([[pressureU, pressureU.length]]);
         username8.set(`${buffert}`, parseInt(`${buffert}`));
      megaphones = `${injuryh.length << (Math.min(Math.abs(2), 3))}`;
   }
   if (suggestiont.length >= 3) {
      injuryh += `${default_wrX.length >> (Math.min(suggestiont.length, 4))}`;
   }
   if ((fillW.size / 3) == 1) {
      fillW = new Map([[`${spec2.length}`, (String.fromCharCode(84,0) == default_wrX ? default_wrX.length : spec2.length)]]);
   }
   while (z_counth.size <= suggestiont.length) {
      z_counth = new Map([[`${z_counth.size}`, spec2.length * 3]]);
      break;
   }
      megaphones = `${2 << (Math.min(5, spec2.length))}`;
      default_wrX += `${2 | injuryh.length}`;
       let back2 = String.fromCharCode(109,101,115,115,115,97,103,101,95,107,95,50,53,0);
       let splashw = 3;
       let assistr = 3;
       let shirtI = 5;
      for (let i = 0; i < 1; i++) {
          let project9 = String.fromCharCode(109,110,101,109,111,110,105,99,95,54,95,56,52,0);
          let stationsB = String.fromCharCode(99,95,56,51,95,112,104,114,97,115,101,0);
          let pressureX: Array<any> = [947, 428, 929];
         back2 = `${project9.length | 1}`;
         project9 += `${(stationsB == String.fromCharCode(77,0) ? pressureX.length : stationsB.length)}`;
         pressureX = [pressureX.length];
      }
      if (2 <= assistr) {
         splashw %= Math.max(shirtI % (Math.max(assistr, 8)), 2);
      }
         splashw %= Math.max(1, 2);
      if (splashw < 1) {
          let bannere = String.fromCharCode(97,95,50,52,95,119,101,98,118,105,101,119,0);
         splashw -= assistr;
         bannere = `${bannere.length}`;
      }
         assistr += 3 & splashw;
      fillW.set(`${splashw}`, splashw);
   while ((z_counth.size | spec2.length) < 1 && (z_counth.size | spec2.length) < 1) {
      spec2 = [fillW.size];
      break;
   }
   while (3 == (3 & z_counth.size)) {
       let play_: Map<any, any> = new Map([[String.fromCharCode(116,101,108,101,109,101,116,114,121,95,109,95,48,0),String.fromCharCode(104,95,54,95,115,116,97,99,107,115,0)], [String.fromCharCode(115,116,114,108,99,97,116,95,98,95,56,52,0),String.fromCharCode(120,95,50,50,95,115,119,105,122,122,108,101,100,0)], [String.fromCharCode(116,95,56,52,95,109,115,115,100,115,112,0),String.fromCharCode(110,95,51,95,101,110,104,97,110,99,101,114,0)]]);
       let emptyN = 5.0;
       let viewsM = String.fromCharCode(100,101,114,105,118,101,100,95,102,95,57,0);
       let policyF = String.fromCharCode(119,95,50,49,95,100,105,115,116,105,110,99,116,0);
       let halfB = String.fromCharCode(109,101,109,106,114,110,108,95,55,95,48,0);
       let with_4p = 2.0;
      if (5 == (4 * halfB.length)) {
          let firebasez = 0;
          let dialogB = 1;
          let completey = true;
         halfB += `${dialogB << (Math.min(Math.abs(1), 3))}`;
         firebasez += firebasez;
         dialogB >>= Math.min(Math.abs(((completey ? 5 : 2) | firebasez)), 3);
         completey = !completey && firebasez >= 36;
      }
      for (let v = 0; v < 2; v++) {
         viewsM += "3";
      }
          let middlewareP = String.fromCharCode(98,97,115,107,101,116,98,97,108,108,95,114,95,50,53,0);
          let regengZ = true;
          let l_titlef = 3.0;
         policyF += `${((regengZ ? 1 : 3))}`;
         middlewareP = "2";
         regengZ = l_titlef >= 70.0 && String.fromCharCode(76,0) == middlewareP;
         l_titlef *= 3;
         halfB = `${(halfB == String.fromCharCode(104,0) ? halfB.length : play_.size)}`;
          let s_lockp = String.fromCharCode(112,95,53,51,95,99,105,110,101,109,97,0);
          let mathv: Map<any, any> = new Map([[String.fromCharCode(98,97,110,100,101,100,95,56,95,55,57,0),438], [String.fromCharCode(99,95,52,51,95,116,101,115,116,105,109,103,105,110,116,0),259]]);
          let awayu = 1;
         halfB = "2";
         s_lockp += `${awayu % (Math.max(1, 6))}`;
         mathv.set(`${awayu}`, 2 << (Math.min(2, s_lockp.length)));
          let invite2 = String.fromCharCode(110,111,114,109,97,108,105,122,101,95,119,95,53,53,0);
          let fillK = String.fromCharCode(118,95,54,48,95,110,101,116,119,111,114,107,115,0);
          let clock8: Map<any, any> = new Map([[String.fromCharCode(101,120,101,99,117,116,111,114,95,106,95,56,57,0),303], [String.fromCharCode(105,95,55,55,95,109,101,109,117,116,105,108,0),953], [String.fromCharCode(111,95,52,53,95,100,97,117,98,101,99,104,105,101,115,0),346]]);
         emptyN -= (halfB == String.fromCharCode(70,0) ? halfB.length : clock8.size);
         invite2 = `${fillK.length}`;
         fillK = `${fillK.length / (Math.max(10, invite2.length))}`;
         clock8 = new Map([[invite2, invite2.length % (Math.max(2, 3))]]);
      while (3.100 >= (emptyN - 4.43) && (policyF.length - parseInt(`${emptyN}`)) >= 2) {
         policyF = `${viewsM.length * parseInt(`${emptyN}`)}`;
         break;
      }
          let main_fU = 4.0;
         emptyN += viewsM.length;
         main_fU -= parseInt(`${main_fU}`) % 3;
          let awayt = String.fromCharCode(98,95,52,56,95,109,105,110,117,116,101,115,0);
          let downloaderE: Array<any> = [String.fromCharCode(100,105,102,102,101,114,101,110,99,101,95,115,95,56,53,0), String.fromCharCode(121,99,98,99,114,95,113,95,55,48,0)];
          let button6 = String.fromCharCode(108,95,51,49,0);
         halfB += "3";
         awayt += `${button6.length}`;
         downloaderE.push(button6.length & downloaderE.length);
       let topicZ = String.fromCharCode(105,115,116,115,95,109,95,56,56,0);
          let acceptedP = true;
         halfB = `${parseInt(`${with_4p}`) << (Math.min(Math.abs(play_.size), 5))}`;
         acceptedP = (!acceptedP ? acceptedP : !acceptedP);
      for (let y = 0; y < 1; y++) {
         with_4p -= parseFloat(`${halfB.length}`);
      }
      if (4.71 <= (4.39 - with_4p)) {
         viewsM += `${halfB.length}`;
      }
         viewsM += `${topicZ.length}`;
      z_counth = new Map([[default_wrX, megaphones.length | default_wrX.length]]);
      break;
   }
      spec2 = [megaphones.length];
   for (let k = 0; k < 2; k++) {
       let pointH = false;
       let username6 = String.fromCharCode(115,111,100,105,115,99,111,110,110,101,99,116,95,122,95,50,54,0);
      for (let t = 0; t < 1; t++) {
         pointH = pointH && username6.length > 8;
      }
      while (pointH && 3 <= username6.length) {
         pointH = username6.length == 36;
         break;
      }
          let dragX: Map<any, any> = new Map([[String.fromCharCode(108,95,49,48,95,115,117,98,109,111,100,101,108,0),false ], [String.fromCharCode(105,110,116,108,95,48,95,55,56,0),false ]]);
         username6 += `${username6.length}`;
         dragX.set(`${dragX.size}`, dragX.size ^ dragX.size);
         username6 = `${username6.length}`;
      if (!username6.endsWith(`${pointH}`)) {
          let binga = 1.0;
         pointH = !pointH;
         binga -= parseFloat(`${parseInt(`${binga}`) - 2}`);
      }
      if (!pointH) {
          let found6 = String.fromCharCode(116,105,109,101,115,116,97,109,112,95,121,95,52,0);
          let viewsP = false;
          let selectionw = false;
         username6 = `${username6.length << (Math.min(1, found6.length))}`;
         found6 = `${((viewsP ? 4 : 3) + 1)}`;
         viewsP = (!selectionw ? !viewsP : !selectionw);
      }
      fillW = new Map([[`${spec2.length}`, injuryh.length >> (Math.min(Math.abs(1), 2))]]);
   }
   while (!Array.from(fillW.values()).includes(spec2.length)) {
      fillW = new Map([[default_wrX, default_wrX.length + 1]]);
      break;
   }
   let lightw = suggestiont.length >= 6871216;
   do {
      suggestiont = "2";
      if (lightw) {
         break;
      }
   } while (lightw && ((fillW.size ^ 2) < 5));
   if (megaphones == String.fromCharCode(48,0)) {
       let expiredb = 2.0;
       let otherp = String.fromCharCode(100,121,110,108,111,97,100,95,57,95,53,52,0);
       let settingS = true;
       let sportJ = 3.0;
         sportJ *= ((settingS ? 1 : 5));
      if (otherp.length == 1 && !settingS) {
         settingS = expiredb < sportJ;
      }
      for (let o = 0; o < 3; o++) {
          let lightD: Map<any, any> = new Map([[String.fromCharCode(117,95,56,50,95,115,117,98,116,108,101,0),351], [String.fromCharCode(99,114,108,105,115,115,117,101,114,95,104,95,54,53,0),38]]);
          let tailE: Array<any> = [838, 481];
         settingS = lightD.size < parseInt(`${sportJ}`);
         lightD.set(`${tailE.length}`, tailE.length);
      }
         settingS = expiredb == otherp.length;
      let list0 = settingS ? !settingS : settingS;
      do {
         settingS = settingS || otherp.length == 34;
         if (list0) {
            break;
         }
      } while (list0 && (sportJ >= 3.66));
          let awayR = String.fromCharCode(115,105,110,113,102,95,122,95,50,52,0);
          let shirt1: Array<any> = [904, 919];
          let downloadingP = 1.0;
         settingS = shirt1.includes(settingS);
         awayR += "3";
         shirt1.push(parseInt(`${downloadingP}`) >> (Math.min(Math.abs(1), 1)));
         downloadingP /= Math.max(4, awayR.length << (Math.min(2, Math.abs(parseInt(`${downloadingP}`)))));
         sportJ -= parseInt(`${expiredb}`) * 1;
      while (settingS) {
         expiredb -= parseInt(`${sportJ}`) >> (Math.min(4, Math.abs(2)));
         break;
      }
      for (let c = 0; c < 1; c++) {
         expiredb += (otherp == String.fromCharCode(122,0) ? (settingS ? 4 : 1) : otherp.length);
      }
         settingS = (expiredb + sportJ) > 13.83;
         otherp += `${((settingS ? 3 : 2) ^ parseInt(`${sportJ}`))}`;
      let bottomi = String.fromCharCode(118,109,53,101,57,118,0) == otherp;
      do {
          let producte = String.fromCharCode(101,110,102,111,114,99,101,95,54,95,56,55,0);
          let delegate_vd = false;
          let gmail5: Array<any> = [String.fromCharCode(116,114,117,110,99,97,116,105,111,110,95,101,95,49,0), String.fromCharCode(118,108,102,102,95,116,95,51,55,0)];
          let minivodg: Map<any, any> = new Map([[String.fromCharCode(101,95,56,50,95,105,111,115,116,114,101,97,109,0),301], [String.fromCharCode(110,111,110,110,117,108,108,115,115,114,99,95,108,95,52,49,0),437]]);
          let privacyC: Array<any> = [String.fromCharCode(118,105,115,105,98,108,105,116,121,95,52,95,56,56,0), String.fromCharCode(105,110,118,101,114,116,95,116,95,56,0), String.fromCharCode(106,95,54,95,115,105,103,110,105,102,105,99,97,110,99,101,0)];
         otherp += `${privacyC.length | minivodg.size}`;
         producte = `${gmail5.length}`;
         delegate_vd = !delegate_vd || gmail5.length > 52;
         minivodg = new Map([[`${delegate_vd}`, (producte == String.fromCharCode(120,0) ? producte.length : (delegate_vd ? 3 : 5))]]);
         privacyC = [1];
         if (bottomi) {
            break;
         }
      } while ((5 > (3 + otherp.length) && (parseInt(`${expiredb}`) / (Math.max(otherp.length, 5))) > 3) && bottomi);
      injuryh = "3";
   }
   for (let c = 0; c < 2; c++) {
      fillW.set(`${injuryh}`, z_counth.size + 2);
   }
      default_wrX += `${(String.fromCharCode(102,0) == default_wrX ? default_wrX.length : injuryh.length)}`;
       let becomeO = true;
       let sharedw = String.fromCharCode(115,117,98,109,101,115,115,97,103,101,95,118,95,51,51,0);
         sharedw += `${(String.fromCharCode(108,0) == sharedw ? sharedw.length : (becomeO ? 5 : 5))}`;
      if (becomeO) {
         sharedw = `${((becomeO ? 4 : 1) % (Math.max(3, sharedw.length)))}`;
      }
       let blacklistl = String.fromCharCode(117,95,55,95,112,117,116,115,0);
       let agreementy = String.fromCharCode(109,118,115,101,116,95,53,95,55,54,0);
          let clearj = false;
          let transfer8: Array<any> = [234, 968];
         blacklistl += `${transfer8.length / 3}`;
         blacklistl += `${sharedw.length % 1}`;
      let historyq = 5777195 >= sharedw.length;
      do {
          let temperatureJ: Array<any> = [931, 68, 563];
          let hoveri = String.fromCharCode(101,95,57,53,95,112,116,114,109,97,112,0);
          let point5: Map<any, any> = new Map([[String.fromCharCode(99,95,57,54,95,102,111,110,116,0),884], [String.fromCharCode(120,95,49,55,0),354]]);
         sharedw = `${temperatureJ.length / 3}`;
         temperatureJ.push(2 & hoveri.length);
         hoveri += `${point5.size * 2}`;
         point5.set(hoveri, hoveri.length | point5.size);
         if (historyq) {
            break;
         }
      } while (historyq && (!becomeO));
      injuryh = `${3 % (Math.max(2, suggestiont.length))}`;
       let popupk = false;
       let smallU = String.fromCharCode(111,99,97,108,95,105,95,52,49,0);
      while (smallU.startsWith(`${popupk}`)) {
         smallU += `${(String.fromCharCode(66,0) == smallU ? (popupk ? 3 : 2) : smallU.length)}`;
         break;
      }
      while (!popupk && smallU.length < 1) {
         smallU = `${2 - smallU.length}`;
         break;
      }
          let mailw = 0.0;
         popupk = String.fromCharCode(50,0) == smallU && mailw > 21.84;
       let recommendation3 = String.fromCharCode(112,95,50,50,95,116,114,120,116,0);
      while (!popupk) {
          let group4 = 1.0;
          let stepg: Array<any> = [597, 917];
          let productw = String.fromCharCode(116,111,111,108,98,97,114,95,100,95,55,50,0);
          let linkY = 3;
         popupk = group4 <= 29.64 || popupk;
         group4 += parseFloat(`${stepg.length / (Math.max(3, 10))}`);
         stepg = [productw.length];
         productw += `${productw.length + 2}`;
         linkY |= productw.length;
         break;
      }
         recommendation3 = `${1 % (Math.max(6, smallU.length))}`;
      spec2.push((default_wrX.length & (popupk ? 1 : 5)));
      suggestiont = "2";
      default_wrX += `${(suggestiont == String.fromCharCode(121,0) ? suggestiont.length : megaphones.length)}`;
   let sentryw = spec2.length <= 6608468;
   do {
      spec2 = [injuryh.length];
      if (sentryw) {
         break;
      }
   } while (sentryw && (spec2.length == injuryh.length));
   let darkq = megaphones == String.fromCharCode(56,119,48,51,0);
   do {
      megaphones += `${injuryh.length}`;
      if (darkq) {
         break;
      }
   } while (darkq && ((megaphones.length + fillW.size) == 4 || 5 == (4 + megaphones.length)));
      suggestiont = `${default_wrX.length}`;
   if ((spec2.length * megaphones.length) >= 5 || (spec2.length * 5) >= 4) {
       let descG = 0.0;
       let catalogF = 0;
       let time_pR = true;
      while (time_pR) {
          let window_knB = String.fromCharCode(109,95,56,50,95,114,101,118,111,107,101,0);
          let tickB = String.fromCharCode(104,97,118,101,95,107,95,55,51,0);
          let star1 = 4.0;
          let starQ = 5;
         time_pR = window_knB == tickB;
         window_knB = `${starQ}`;
         tickB = `${parseInt(`${star1}`)}`;
         star1 -= parseFloat(`${parseInt(`${star1}`)}`);
         starQ >>= Math.min(Math.abs(parseInt(`${star1}`)), 1);
         break;
      }
      if (catalogF > descG) {
          let twitterm = false;
          let adult6: Map<any, any> = new Map([[String.fromCharCode(99,95,53,52,95,115,101,116,98,105,116,0),380], [String.fromCharCode(117,105,111,116,111,109,98,117,102,95,100,95,54,48,0),872]]);
          let leftU = String.fromCharCode(99,97,114,114,105,101,114,95,113,95,55,49,0);
          let gemfilep = String.fromCharCode(114,95,53,56,95,98,97,110,100,101,100,0);
         catalogF |= 3 + catalogF;
         twitterm = ((adult6.size - (twitterm ? adult6.size : 24)) <= 72);
         leftU = "3";
         gemfilep += "3";
      }
       let collectiona: Array<any> = [704, 568];
       let pointq: Array<any> = [706, 585];
      let buttont = pointq.length >= 9372231;
      do {
          let area0 = String.fromCharCode(115,119,105,102,116,95,57,95,56,50,0);
          let step5 = 3.0;
          let indicatora = String.fromCharCode(98,105,116,115,116,114,105,110,103,95,48,95,57,0);
          let entryY = 5.0;
         pointq = [parseInt(`${step5}`) >> (Math.min(Math.abs(2), 1))];
         area0 += `${1 * indicatora.length}`;
         step5 += indicatora.length;
         entryY *= (indicatora == String.fromCharCode(67,0) ? parseInt(`${entryY}`) : indicatora.length);
         if (buttont) {
            break;
         }
      } while (((pointq.length >> (Math.min(Math.abs(3), 2))) < 4) && buttont);
         catalogF >>= Math.min(Math.abs(catalogF * 2), 5);
      spec2.push(2);
   }
   while (3 == suggestiont.length) {
      suggestiont += `${z_counth.size << (Math.min(Math.abs(1), 4))}`;
      break;
   }
      default_wrX += `${z_counth.size | 1}`;
      suggestiont = `${suggestiont.length << (Math.min(Math.abs(2), 3))}`;
   while (megaphones.length > 4) {
      suggestiont = `${3 << (Math.min(1, Math.abs(fillW.size)))}`;
      break;
   }
   if (megaphones.length <= fillW.size) {
      fillW.set(`${spec2.length}`, 2 - spec2.length);
   }
   for (let h = 0; h < 3; h++) {
      default_wrX += `${spec2.length}`;
   }
   for (let b = 0; b < 2; b++) {
      suggestiont = `${3 + injuryh.length}`;
   }
 setIosCustomToastIsVisible(true) }, 1000)

  const ranges = [
    ...Array(
      episodes?.url_count === undefined
        ? 0
        : Math.ceil(episodes.url_count / EPISODE_RANGE_SIZE)
    ).keys(),
  ].map(
    (x) =>
      `${x * EPISODE_RANGE_SIZE + 1}-${Math.min(
        (x + 1) * EPISODE_RANGE_SIZE,
        episodes?.url_count === undefined
          ? (x + 1) * EPISODE_RANGE_SIZE - 1
          : episodes?.url_count
      )}`
  );

  const [currentIndex, setCurrentIndex] = useState(
    Math.floor(activeEpisode / EPISODE_RANGE_SIZE)
  );
  const showEpisodeRangeStart = useMemo(
    () => currentIndex * EPISODE_RANGE_SIZE,
    [activeEpisode, currentIndex]
  );

  const showEpisodeRangeEnd = useMemo(
    () =>
      Math.min(
        showEpisodeRangeStart + EPISODE_RANGE_SIZE,
        episodes
          ? episodes.url_count
          : showEpisodeRangeStart + EPISODE_RANGE_SIZE
      ),
    [episodes, showEpisodeRangeStart]
  );

  const displayEpisodes = useMemo(() => {
       let detailsy: Map<any, any> = new Map([[String.fromCharCode(103,95,52,49,95,114,101,102,108,101,99,116,105,111,110,0),String.fromCharCode(119,114,97,112,100,101,116,101,99,116,95,122,95,55,0)], [String.fromCharCode(108,95,53,53,95,115,111,99,107,115,0),String.fromCharCode(110,95,55,51,95,115,108,105,100,97,98,108,101,0)]]);
    let friendsa = String.fromCharCode(114,101,109,111,118,101,114,95,48,95,56,48,0);
    let moduleJ = 3.0;
    let crossO: Map<any, any> = new Map([[String.fromCharCode(97,108,116,101,114,110,97,116,101,95,102,95,56,51,0),false ], [String.fromCharCode(118,95,55,51,95,117,112,109,105,120,0),true ]]);
    let target_ = String.fromCharCode(115,99,116,112,95,104,95,49,51,0);
    let c_playerC = 1.0;
    let temperatured = 3;
    let combineds = 0.0;
   if ((temperatured % 3) > 3) {
       let brightnessN = true;
       let twitterQ = String.fromCharCode(107,95,51,53,95,97,100,116,115,0);
       let heartZ = String.fromCharCode(112,95,54,54,95,109,97,107,101,110,97,110,0);
       let basketballk = 1;
       let componente = 5.0;
         basketballk %= Math.max(5, 3 * basketballk);
         heartZ = `${parseInt(`${componente}`)}`;
         heartZ += `${2 >> (Math.min(Math.abs(basketballk), 2))}`;
         twitterQ += `${((brightnessN ? 5 : 5) << (Math.min(heartZ.length, 5)))}`;
         brightnessN = !brightnessN;
       let placementv = String.fromCharCode(116,119,111,115,99,97,108,101,95,98,95,51,51,0);
       let sporta = String.fromCharCode(106,95,57,50,95,110,101,120,116,0);
          let bootsplashc = 5;
          let gesture_ = String.fromCharCode(100,105,103,101,115,116,115,95,113,95,54,53,0);
         heartZ += `${(placementv == String.fromCharCode(89,0) ? placementv.length : basketballk)}`;
         bootsplashc >>= Math.min(5, Math.abs(bootsplashc));
         gesture_ = `${gesture_.length}`;
         sporta += `${((brightnessN ? 5 : 1))}`;
         basketballk %= Math.max(3, basketballk / (Math.max(7, placementv.length)));
       let refreshy = true;
          let circlet = 2.0;
          let sourceH = String.fromCharCode(116,104,117,110,107,95,110,95,49,52,0);
         refreshy = 75 == twitterQ.length;
         circlet -= parseInt(`${circlet}`);
         sourceH += `${sourceH.length}`;
      for (let a = 0; a < 2; a++) {
         heartZ = `${((refreshy ? 5 : 1))}`;
      }
         componente -= parseFloat(`${2}`);
         heartZ += `${(String.fromCharCode(115,0) == sporta ? sporta.length : twitterQ.length)}`;
      for (let x = 0; x < 2; x++) {
         placementv += "3";
      }
      temperatured %= Math.max(1, 3);
   }
      temperatured /= Math.max(4, detailsy.size);
       let scored = true;
       let previewm: Map<any, any> = new Map([[String.fromCharCode(101,95,54,52,95,99,97,115,104,116,97,103,0),false ], [String.fromCharCode(103,110,114,101,95,55,95,56,51,0),true ]]);
       let small5 = 0;
      for (let f = 0; f < 2; f++) {
          let humidity8 = String.fromCharCode(100,95,54,57,95,98,97,99,107,108,105,103,104,116,0);
          let const_kv = 3;
          let type_vet = 0;
          let settingsL: Map<any, any> = new Map([[String.fromCharCode(101,120,101,99,117,116,101,95,119,95,50,50,0),44], [String.fromCharCode(115,111,108,105,100,99,111,108,111,114,95,108,95,51,0),580], [String.fromCharCode(120,95,51,48,95,101,114,97,115,105,110,103,0),411]]);
         scored = 7 <= const_kv;
         humidity8 = `${humidity8.length % 1}`;
         const_kv |= (String.fromCharCode(48,0) == humidity8 ? type_vet : humidity8.length);
         type_vet &= type_vet | humidity8.length;
         settingsL = new Map([[`${settingsL.size}`, 3]]);
      }
      for (let d = 0; d < 1; d++) {
          let catagory5 = String.fromCharCode(106,95,56,55,95,117,121,118,121,116,111,121,117,118,0);
          let loginv: Map<any, any> = new Map([[String.fromCharCode(97,99,99,101,112,116,95,57,95,52,52,0),560], [String.fromCharCode(106,95,53,50,95,108,111,103,103,101,114,115,0),378]]);
         previewm.set(`${scored}`, 1);
         catagory5 = `${(catagory5 == String.fromCharCode(122,0) ? catagory5.length : loginv.size)}`;
         loginv.set(`${catagory5}`, 3 % (Math.max(8, loginv.size)));
      }
      if (1 == small5) {
          let listn = String.fromCharCode(97,117,116,111,99,111,114,114,101,108,97,116,105,111,110,95,48,95,54,54,0);
          let service2 = 2.0;
          let window_q5k = true;
          let whatsappA = String.fromCharCode(99,97,98,97,99,95,49,95,49,54,0);
         scored = previewm.get(`${scored}`) == null;
         listn = `${(listn == String.fromCharCode(117,0) ? parseInt(`${service2}`) : listn.length)}`;
         service2 -= parseInt(`${service2}`);
         window_q5k = (listn.length - service2) > 37.18;
         whatsappA += `${3 * whatsappA.length}`;
      }
      for (let r = 0; r < 2; r++) {
         scored = !scored;
      }
      while (scored) {
         scored = small5 <= 49;
         break;
      }
      let j_title6 = 5821939 <= small5;
      do {
         small5 += 1 % (Math.max(3, small5));
         if (j_title6) {
            break;
         }
      } while (j_title6 && (!scored));
         small5 >>= Math.min(Math.abs(small5), 3);
          let hooksU = String.fromCharCode(97,95,54,55,95,97,109,114,110,98,0);
         scored = 100 == small5;
         hooksU = `${hooksU.length / 3}`;
      while (small5 <= 1) {
         scored = (small5 / (Math.max(9, previewm.size))) < 19;
         break;
      }
      crossO = new Map([[target_, target_.length]]);
   if ((target_.length % 5) < 5) {
       let complete1: Map<any, any> = new Map([[String.fromCharCode(99,95,49,48,95,106,111,98,0),880], [String.fromCharCode(104,105,110,116,115,95,106,95,52,50,0),262]]);
       let downG = String.fromCharCode(120,95,54,56,95,97,115,99,101,110,100,101,114,0);
         complete1.set(downG, 2 % (Math.max(3, downG.length)));
         downG += `${complete1.size}`;
       let moviesz = String.fromCharCode(97,115,97,110,95,119,95,55,49,0);
      if (1 >= (downG.length / 1) && 5 >= (complete1.size / 1)) {
         downG = `${complete1.size | downG.length}`;
      }
         downG += `${2 ^ downG.length}`;
      if (complete1.size >= moviesz.length) {
         complete1.set(`${downG}`, downG.length);
      }
      c_playerC += target_.length >> (Math.min(2, Math.abs(temperatured)));
   }
      moduleJ -= crossO.size;
   let phonef = 6250923 <= detailsy.size;
   do {
       let closeI = String.fromCharCode(97,114,103,98,95,111,95,52,56,0);
       let mappingc = String.fromCharCode(106,95,55,51,95,98,101,108,111,119,0);
       let updatesN = String.fromCharCode(99,97,114,111,117,115,101,108,95,97,95,52,48,0);
       let configv = 3.0;
       let renewG = String.fromCharCode(115,95,57,95,120,99,108,105,0);
         closeI = `${renewG.length << (Math.min(Math.abs(3), 5))}`;
      if (2 >= (renewG.length - 5) && 3 >= (5 * parseInt(`${configv}`))) {
         renewG += "1";
      }
         mappingc += "3";
         mappingc = `${closeI.length}`;
         closeI += "2";
         closeI += `${updatesN.length - 2}`;
         renewG += `${1 | renewG.length}`;
      let disconnected0 = String.fromCharCode(115,118,100,119,116,0) == updatesN;
      do {
         updatesN += "2";
         if (disconnected0) {
            break;
         }
      } while (disconnected0 && (!updatesN.startsWith(`${closeI.length}`)));
      while (closeI == String.fromCharCode(70,0)) {
         renewG += `${closeI.length % (Math.max(1, updatesN.length))}`;
         break;
      }
      while ((1 >> (Math.min(4, renewG.length))) < 2 || 4 < (parseInt(`${configv}`) * 1)) {
         renewG = `${closeI.length + 3}`;
         break;
      }
      if (renewG.startsWith(`${configv}`)) {
         configv /= Math.max(3, parseFloat(`${closeI.length}`));
      }
         mappingc += `${mappingc.length}`;
         updatesN = "1";
      for (let n = 0; n < 1; n++) {
         configv -= (parseFloat(`${String.fromCharCode(49,0) == updatesN ? updatesN.length : parseInt(`${configv}`)}`));
      }
       let phoneh: Map<any, any> = new Map([[String.fromCharCode(119,95,54,56,95,100,118,100,97,116,97,0),false ], [String.fromCharCode(117,95,55,50,95,108,105,98,109,0),true ], [String.fromCharCode(103,111,98,98,108,101,95,53,95,49,48,48,0),false ]]);
       let videoY: Map<any, any> = new Map([[String.fromCharCode(104,97,100,95,116,95,52,57,0),String.fromCharCode(103,117,97,114,97,110,116,101,101,95,113,95,56,52,0)], [String.fromCharCode(105,110,115,101,114,116,105,111,110,95,100,95,50,55,0),String.fromCharCode(117,95,55,51,95,99,97,110,99,101,108,0)]]);
      detailsy = new Map([[mappingc, mappingc.length << (Math.min(Math.abs(2), 1))]]);
      if (phonef) {
         break;
      }
   } while (((detailsy.size % 1) >= 5) && phonef);

    const eps = episodes?.urls?.slice(
      showEpisodeRangeStart,
      showEpisodeRangeEnd
    );

      temperatured *= parseInt(`${combineds}`);
      moduleJ -= parseInt(`${combineds}`);
      crossO.set(`${c_playerC}`, 3);
   while (2.56 == (combineds * 4.100)) {
       let ball5: Array<any> = [1, 180, 652];
       let chatH: Array<any> = [302, 107, 569];
       let dangerH: Array<any> = [String.fromCharCode(99,95,50,52,95,105,110,105,116,105,97,108,105,115,101,0), String.fromCharCode(121,105,101,108,100,95,109,95,48,0), String.fromCharCode(115,117,98,101,120,112,95,48,95,51,52,0)];
       let benefit6 = String.fromCharCode(114,101,101,110,116,114,97,110,116,95,56,95,49,56,0);
       let collectionV = 1;
      if (5 < (benefit6.length / (Math.max(1, dangerH.length)))) {
         dangerH.push(benefit6.length >> (Math.min(Math.abs(3), 3)));
      }
       let models9 = String.fromCharCode(115,116,114,99,97,115,101,99,109,112,95,55,95,50,54,0);
      while (5 <= chatH.length) {
          let referrerL = 0.0;
          let resendN = String.fromCharCode(121,95,57,54,95,114,101,112,108,105,101,114,115,0);
         chatH = [2];
         referrerL *= 1 / (Math.max(2, parseInt(`${referrerL}`)));
         resendN += `${3 + parseInt(`${referrerL}`)}`;
         break;
      }
         ball5.push(chatH.length);
      let event1 = 5863428 <= dangerH.length;
      do {
         dangerH.push(chatH.length + 1);
         if (event1) {
            break;
         }
      } while (event1 && (models9.startsWith(`${dangerH.length}`)));
         ball5 = [2];
          let promotionQ = String.fromCharCode(111,95,51,53,95,98,101,114,110,111,117,108,108,105,0);
          let gemfileG = 4.0;
          let type_p9L = 2;
         models9 = `${promotionQ.length << (Math.min(5, Math.abs(parseInt(`${gemfileG}`))))}`;
         promotionQ = `${type_p9L}`;
         gemfileG -= parseFloat(`${type_p9L % 2}`);
      let diceE = 9624053 <= collectionV;
      do {
          let heart6 = 3.0;
          let philippinesR = String.fromCharCode(112,95,50,57,95,105,110,116,120,120,0);
         collectionV %= Math.max(3, 3);
         heart6 *= philippinesR.length;
         philippinesR += `${parseInt(`${heart6}`)}`;
         if (diceE) {
            break;
         }
      } while ((5 < collectionV) && diceE);
         collectionV ^= 3;
         collectionV /= Math.max(benefit6.length / 2, 5);
      if (!dangerH.includes(ball5.length)) {
         ball5 = [dangerH.length - 3];
      }
          let stepm = 0.0;
          let ajax4 = false;
          let episodesU = String.fromCharCode(116,95,49,49,95,97,112,111,115,0);
         models9 += `${ball5.length}`;
         stepm += parseFloat(`${parseInt(`${stepm}`)}`);
         ajax4 = episodesU.startsWith(`${stepm}`);
         episodesU = `${episodesU.length - parseInt(`${stepm}`)}`;
      if (chatH.length > ball5.length) {
          let reportz = 1.0;
          let hongkongU = String.fromCharCode(97,118,99,116,120,95,118,95,50,50,0);
         chatH = [collectionV >> (Math.min(4, Math.abs(3)))];
         reportz /= Math.max((parseFloat(`${hongkongU == String.fromCharCode(89,0) ? parseInt(`${reportz}`) : hongkongU.length}`)), 2);
      }
         models9 += `${models9.length >> (Math.min(3, Math.abs(collectionV)))}`;
       let dialogf = 0.0;
      combineds *= parseFloat(`${1}`);
      break;
   }
       let paginationn = 4;
       let miniQ = String.fromCharCode(116,97,98,108,101,115,95,117,95,49,51,0);
      if (!miniQ.includes(`${paginationn}`)) {
          let rulesq = 0.0;
          let eventU = String.fromCharCode(119,95,54,52,95,104,97,110,100,108,101,0);
          let taiwan1 = String.fromCharCode(108,95,55,53,95,111,117,116,102,105,108,101,115,0);
          let calendart = String.fromCharCode(109,97,116,99,104,101,114,95,100,95,55,55,0);
         paginationn -= (taiwan1 == String.fromCharCode(81,0) ? paginationn : taiwan1.length);
         rulesq *= parseFloat(`${eventU.length & parseInt(`${rulesq}`)}`);
         eventU = "1";
         calendart = `${eventU.length}`;
      }
      for (let v = 0; v < 3; v++) {
          let sendp = 5.0;
          let baiduF = false;
         paginationn >>= Math.min(3, Math.abs(2));
         sendp /= Math.max((parseInt(`${sendp}`) + (baiduF ? 2 : 3)), 3);
         baiduF = sendp >= 59.94;
      }
         paginationn >>= Math.min(3, Math.abs(miniQ.length % (Math.max(1, paginationn))));
      for (let r = 0; r < 1; r++) {
         paginationn <<= Math.min(3, miniQ.length);
      }
      if (4 < (5 | miniQ.length)) {
         paginationn /= Math.max(1, (String.fromCharCode(88,0) == miniQ ? paginationn : miniQ.length));
      }
          let page9: Array<any> = [769, 217];
          let dataK = false;
         paginationn ^= (miniQ == String.fromCharCode(50,0) ? miniQ.length : paginationn);
         page9 = [page9.length];
         dataK = page9.includes(dataK);
      friendsa += `${3 & friendsa.length}`;
   while (5.49 > (combineds * 5)) {
      c_playerC /= Math.max(3, 2 << (Math.min(3, target_.length)));
      break;
   }

    return eps;
  }, [showEpisodeRangeStart, showEpisodeRangeEnd, episodes]);

  const handleContainerLayout = (e) => {
       let confirmationG = String.fromCharCode(101,115,99,97,112,105,110,103,95,99,95,57,0);
    let leftF: Array<any> = [916, 140];
    let trophyH = String.fromCharCode(105,95,51,95,114,101,108,101,118,97,110,116,0);
    let event9 = true;
    let specm: Array<any> = [888, 185, 151];
    let predictionF = 5.0;
    let redirecty = String.fromCharCode(119,101,98,109,100,101,99,95,103,95,52,54,0);
    let fillc = 1.0;
    let time_lQ = String.fromCharCode(109,101,109,117,116,105,108,95,98,95,50,53,0);
    let memberJ = String.fromCharCode(103,101,116,101,110,118,95,56,95,54,50,0);
    let hooksA = 0.0;
    let china7 = String.fromCharCode(108,95,51,54,95,119,100,108,116,0);
    let heartQ = String.fromCharCode(115,116,114,105,100,101,97,98,108,101,95,57,95,52,57,0);
      fillc -= (parseFloat(`${(event9 ? 1 : 3) ^ 1}`));
   let iconY = time_lQ == String.fromCharCode(52,105,121,0);
   do {
      time_lQ = `${1 << (Math.min(4, time_lQ.length))}`;
      if (iconY) {
         break;
      }
   } while (iconY && (time_lQ.length <= 5 && event9));
      hooksA *= ((event9 ? 2 : 1) * parseInt(`${hooksA}`));
   let whatsappV = 8656127.0 >= fillc;
   do {
      fillc *= parseFloat(`${2}`);
      if (whatsappV) {
         break;
      }
   } while (((parseInt(`${fillc}`) / (Math.max(time_lQ.length, 9))) < 1 && 5.95 < (fillc / (Math.max(4.57, 5)))) && whatsappV);
   while (trophyH.endsWith(`${event9}`)) {
      trophyH = "3";
      break;
   }
   for (let k = 0; k < 1; k++) {
      confirmationG = `${((event9 ? 1 : 2) + specm.length)}`;
   }
   if (4 < specm.length) {
      event9 = confirmationG.endsWith(`${event9}`);
   }
      hooksA *= time_lQ.length;
   if (redirecty.length < 1) {
      redirecty += `${parseInt(`${fillc}`) & 3}`;
   }
      specm = [((event9 ? 3 : 1) ^ 2)];

    const epHeight = e.nativeEvent.layout.height;

      event9 = confirmationG.length < specm.length;
   while (!china7.includes(redirecty)) {
       let orangeV = String.fromCharCode(117,95,49,50,95,99,111,110,102,108,105,99,116,0);
      for (let g = 0; g < 2; g++) {
         orangeV = `${orangeV.length | 1}`;
      }
          let delegate_cP = String.fromCharCode(104,95,54,95,118,111,114,98,105,115,100,115,112,0);
         orangeV = `${orangeV.length % 1}`;
         delegate_cP += `${(String.fromCharCode(122,0) == delegate_cP ? delegate_cP.length : delegate_cP.length)}`;
      for (let p = 0; p < 1; p++) {
          let catagoryj = String.fromCharCode(110,101,101,100,101,100,95,116,95,53,55,0);
          let albumJ = String.fromCharCode(116,97,103,115,116,114,95,120,95,53,57,0);
          let kickQ: Array<any> = [984, 303];
          let taiwanj = 0.0;
         orangeV = `${orangeV.length ^ 1}`;
         catagoryj += `${kickQ.length}`;
         albumJ = "1";
         kickQ.push(1);
         taiwanj /= Math.max(parseFloat(`${kickQ.length >> (Math.min(Math.abs(3), 5))}`), 1);
      }
      china7 += `${orangeV.length + 3}`;
      break;
   }
   for (let d = 0; d < 3; d++) {
      leftF = [(1 | (event9 ? 2 : 4))];
   }
      redirecty += `${(String.fromCharCode(97,0) == trophyH ? trophyH.length : confirmationG.length)}`;
      hooksA += china7.length;
   if (hooksA <= 5.74) {
      hooksA += 1 - redirecty.length;
   }
      event9 = redirecty.includes(`${fillc}`);
      time_lQ = `${1 * china7.length}`;
       let handlerr: Array<any> = [524, 781];
         handlerr = [handlerr.length ^ 3];
         handlerr = [handlerr.length];
      for (let w = 0; w < 3; w++) {
         handlerr.push(3);
      }
      hooksA -= parseInt(`${predictionF}`) - 3;
   let catalogu = event9 ? !event9 : event9;
   do {
      event9 = redirecty == String.fromCharCode(71,0);
      if (catalogu) {
         break;
      }
   } while (((4.22 + predictionF) > 3.70 || event9) && catalogu);
    const epWidth = e.nativeEvent.layout.width;

      time_lQ += `${trophyH.length}`;
      redirecty = `${parseInt(`${predictionF}`) % 1}`;
   if (4 <= (1 & china7.length)) {
       let stationU = String.fromCharCode(114,95,57,56,95,101,110,99,111,100,101,114,115,0);
       let themem = true;
      while (!stationU.endsWith(`${themem}`)) {
         themem = themem && stationU.length > 51;
         break;
      }
      for (let s = 0; s < 2; s++) {
         themem = !stationU.includes(`${themem}`);
      }
       let moduleR = false;
       let shirtl = true;
         moduleR = !shirtl && moduleR;
         stationU += "2";
         themem = (90 == ((!moduleR ? stationU.length : 90) + stationU.length));
      predictionF -= 1 - confirmationG.length;
   }
       let fastforwardw = String.fromCharCode(116,95,52,54,95,111,112,97,99,105,116,121,0);
       let emptyd = false;
       let link0 = false;
      for (let u = 0; u < 3; u++) {
         link0 = (emptyd ? !link0 : emptyd);
      }
         fastforwardw += `${fastforwardw.length / (Math.max(2, 4))}`;
      for (let j = 0; j < 2; j++) {
         emptyd = fastforwardw.startsWith(`${emptyd}`);
      }
          let arrow1 = String.fromCharCode(115,116,114,105,115,116,97,114,116,95,118,95,57,50,0);
          let viewsP = String.fromCharCode(104,95,55,48,95,105,110,116,114,111,0);
          let iconk = false;
         emptyd = 53 == fastforwardw.length;
         arrow1 += `${((iconk ? 2 : 1) | 1)}`;
         viewsP = `${((iconk ? 1 : 3))}`;
          let moono: Map<any, any> = new Map([[String.fromCharCode(100,95,55,50,95,115,117,98,115,116,97,116,101,0),String.fromCharCode(119,95,56,51,95,116,101,109,112,108,97,116,101,0)], [String.fromCharCode(110,95,51,49,95,116,114,105,97,110,103,108,101,0),String.fromCharCode(109,115,114,108,101,95,122,95,55,50,0)]]);
         link0 = link0 || moono.size > 60;
      for (let q = 0; q < 1; q++) {
         link0 = emptyd;
      }
       let mutedH: Array<any> = [513, 827, 690];
          let countryj = 4;
          let dropdownQ = String.fromCharCode(109,95,50,57,95,109,105,110,116,0);
         fastforwardw = `${mutedH.length}`;
         countryj *= dropdownQ.length;
         dropdownQ += `${(dropdownQ == String.fromCharCode(103,0) ? countryj : dropdownQ.length)}`;
       let storeC = 5;
      predictionF *= 3 >> (Math.min(2, specm.length));
   let configK = 7449478 >= confirmationG.length;
   do {
      confirmationG = `${time_lQ.length >> (Math.min(Math.abs(3), 5))}`;
      if (configK) {
         break;
      }
   } while (configK && (5.31 > (predictionF / 4.48)));
      trophyH = `${trophyH.length << (Math.min(Math.abs(2), 3))}`;
      hooksA *= parseInt(`${hooksA}`);
      event9 = !event9;
   let crown2 = 9657967 <= leftF.length;
   do {
      leftF = [(String.fromCharCode(80,0) == redirecty ? redirecty.length : specm.length)];
      if (crown2) {
         break;
      }
   } while (((leftF.length | 1) >= 5 || (1 >> (Math.min(2, leftF.length))) >= 2) && crown2);
      event9 = memberJ == String.fromCharCode(97,0);
    setHeight(epHeight);

   for (let x = 0; x < 3; x++) {
       let catalogr = 2.0;
       let placementX: Map<any, any> = new Map([[String.fromCharCode(97,118,102,105,108,116,101,114,114,101,115,95,52,95,52,51,0),String.fromCharCode(97,95,52,95,114,117,101,0)], [String.fromCharCode(101,95,49,54,95,97,116,116,97,99,104,0),String.fromCharCode(115,95,53,54,95,109,105,110,105,109,97,108,0)]]);
      if (2.52 >= (catalogr * 4.89) || 4 >= (placementX.size * 5)) {
         catalogr += parseFloat(`${3}`);
      }
         placementX.set(`${catalogr}`, placementX.size);
       let descw = String.fromCharCode(114,118,118,108,99,95,48,95,55,48,0);
      for (let u = 0; u < 2; u++) {
         placementX = new Map([[`${placementX.size}`, parseInt(`${catalogr}`)]]);
      }
      if (4.37 == (catalogr / (Math.max(parseFloat(`${placementX.size}`), 8)))) {
         placementX = new Map([[`${placementX.size}`, placementX.size | parseInt(`${catalogr}`)]]);
      }
       let redirect8 = 2.0;
      leftF.push(specm.length);
   }
   for (let a = 0; a < 3; a++) {
      predictionF *= ((event9 ? 2 : 3) & 2);
   }
      confirmationG += `${trophyH.length % 2}`;
       let loginz = 4;
       let search9 = String.fromCharCode(108,95,53,95,122,112,116,102,0);
          let thumbnailu = 5;
         search9 = `${(search9 == String.fromCharCode(53,0) ? search9.length : thumbnailu)}`;
         loginz >>= Math.min(3, Math.abs((search9 == String.fromCharCode(89,0) ? search9.length : loginz)));
          let expiredT = String.fromCharCode(98,95,57,95,112,111,114,116,101,114,0);
         loginz /= Math.max(4, 2 | search9.length);
         expiredT += `${expiredT.length}`;
      for (let u = 0; u < 2; u++) {
         loginz <<= Math.min(Math.abs(1 & loginz), 3);
      }
      while (!search9.startsWith(`${loginz}`)) {
         search9 += `${(String.fromCharCode(86,0) == search9 ? loginz : search9.length)}`;
         break;
      }
          let dicei = true;
         search9 += `${loginz | search9.length}`;
         dicei = dicei || dicei;
      confirmationG = `${(String.fromCharCode(53,0) == confirmationG ? parseInt(`${fillc}`) : confirmationG.length)}`;
       let i_centeri = 1;
      if ((3 - i_centeri) < 2 && 3 < (i_centeri - i_centeri)) {
         i_centeri |= i_centeri - i_centeri;
      }
          let with_6d = String.fromCharCode(118,95,49,51,95,102,117,100,103,101,0);
          let short_lk = String.fromCharCode(104,95,53,50,95,101,108,101,118,97,116,101,0);
         i_centeri -= (with_6d == String.fromCharCode(86,0) ? i_centeri : with_6d.length);
         short_lk = `${short_lk.length >> (Math.min(Math.abs(2), 2))}`;
      for (let w = 0; w < 3; w++) {
         i_centeri += i_centeri;
      }
      fillc *= parseFloat(`${2 % (Math.max(10, memberJ.length))}`);
       let selecta = 3.0;
       let homeN = 3;
         homeN &= parseInt(`${selecta}`) + homeN;
          let feedbackb: Map<any, any> = new Map([[String.fromCharCode(120,95,57,48,95,97,98,115,101,105,108,0),false ], [String.fromCharCode(99,97,115,101,100,95,53,95,53,52,0),false ], [String.fromCharCode(115,101,101,107,116,97,98,108,101,95,48,95,54,0),false ]]);
         homeN ^= parseInt(`${selecta}`);
         feedbackb = new Map([[`${feedbackb.size}`, feedbackb.size]]);
      for (let e = 0; e < 2; e++) {
          let zhengpianB: Array<any> = [555, 332];
          let loading7 = true;
          let anytimeo = String.fromCharCode(98,108,105,110,107,95,111,95,50,0);
          let fillO = String.fromCharCode(115,117,98,115,121,115,116,101,109,95,52,95,56,48,0);
          let mutedk = String.fromCharCode(119,104,105,116,101,115,95,50,95,49,48,0);
         homeN %= Math.max(5, 1 & anytimeo.length);
         zhengpianB = [fillO.length | 3];
         loading7 = mutedk.length >= fillO.length;
         anytimeo += `${fillO.length}`;
         mutedk = `${mutedk.length}`;
      }
         homeN <<= Math.min(3, Math.abs(homeN % (Math.max(parseInt(`${selecta}`), 7))));
      let turnj = homeN <= 5004856;
      do {
         homeN <<= Math.min(5, Math.abs(2));
         if (turnj) {
            break;
         }
      } while (turnj && (homeN >= selecta));
      for (let e = 0; e < 1; e++) {
          let f_lockq: Map<any, any> = new Map([[String.fromCharCode(113,100,109,99,95,99,95,53,55,0),false ], [String.fromCharCode(110,111,116,105,99,101,115,95,121,95,52,56,0),false ]]);
          let yingy = 4;
          let clearn = 2.0;
          let sideP = String.fromCharCode(105,95,49,95,114,101,112,111,115,105,116,105,111,110,0);
          let unselectedn = 3;
         homeN += 1;
         f_lockq = new Map([[`${yingy}`, sideP.length & 3]]);
         yingy /= Math.max(1, 3);
         clearn -= yingy - 2;
         sideP += `${yingy % 1}`;
         unselectedn ^= sideP.length;
      }
      specm.push(1);
       let modityl = String.fromCharCode(113,101,120,112,95,120,95,52,0);
       let signinupN = String.fromCharCode(97,95,52,49,95,105,110,99,111,109,112,108,101,116,101,0);
       let layoutq = 5;
         signinupN += `${(String.fromCharCode(98,0) == modityl ? modityl.length : signinupN.length)}`;
       let chatd = 5.0;
      if (modityl.startsWith(`${signinupN.length}`)) {
          let filterv = String.fromCharCode(120,95,50,52,95,112,97,115,116,101,98,111,97,114,100,0);
          let gpayH = String.fromCharCode(100,105,97,109,101,116,101,114,95,122,95,57,54,0);
         signinupN += `${layoutq}`;
         filterv = `${gpayH.length - filterv.length}`;
         gpayH += `${(gpayH == String.fromCharCode(50,0) ? gpayH.length : filterv.length)}`;
      }
       let stringm = 3.0;
       let darkM: Array<any> = [String.fromCharCode(107,95,53,48,95,121,117,118,121,117,118,0), String.fromCharCode(114,101,105,109,112,111,114,116,95,104,95,54,57,0)];
       let specZ: Array<any> = [552, 267];
      while ((layoutq / (Math.max(4, 9))) > 3) {
         layoutq &= 3;
         break;
      }
      for (let z = 0; z < 2; z++) {
          let humidity8: Map<any, any> = new Map([[String.fromCharCode(122,95,53,53,95,119,101,98,109,100,101,99,0),924], [String.fromCharCode(122,95,52,49,95,99,111,109,112,97,114,97,98,108,101,0),416]]);
          let appsv: Map<any, any> = new Map([[String.fromCharCode(117,110,104,105,100,101,95,56,95,56,57,0),String.fromCharCode(118,95,51,56,95,110,97,117,116,105,99,97,108,0)], [String.fromCharCode(120,95,55,54,95,114,101,115,111,108,118,101,114,0),String.fromCharCode(121,95,57,48,95,112,101,101,108,0)], [String.fromCharCode(121,95,50,49,95,118,100,112,97,117,0),String.fromCharCode(122,95,54,53,95,114,101,108,101,118,97,110,116,0)]]);
          let readm: Map<any, any> = new Map([[String.fromCharCode(116,95,53,55,95,103,101,116,0),String.fromCharCode(112,95,54,54,95,115,101,116,119,97,116,101,114,109,97,114,107,0)], [String.fromCharCode(117,95,50,52,95,115,97,110,101,0),String.fromCharCode(114,101,112,95,50,95,53,50,0)]]);
         stringm += darkM.length ^ humidity8.size;
         humidity8.set(`${appsv.size}`, 3 - appsv.size);
         readm.set(`${readm.size}`, readm.size);
      }
         modityl += `${parseInt(`${chatd}`) & parseInt(`${stringm}`)}`;
      if (4 > (layoutq * signinupN.length) && 4 > (4 * signinupN.length)) {
         signinupN = `${(String.fromCharCode(90,0) == modityl ? modityl.length : specZ.length)}`;
      }
      china7 += `${(time_lQ == String.fromCharCode(52,0) ? layoutq : time_lQ.length)}`;
      heartQ = `${parseInt(`${hooksA}`)}`;
      leftF.push(leftF.length);
   while ((1 >> (Math.min(2, specm.length))) > 4) {
      confirmationG = `${(redirecty == String.fromCharCode(120,0) ? redirecty.length : parseInt(`${fillc}`))}`;
      break;
   }
    setWidth(epWidth);
  }

  const displayEpisodesWithStatus = useMemo(() => {
       let configureU = String.fromCharCode(109,95,54,50,95,100,101,99,105,112,104,101,114,0);
    let injuryW = 1.0;
    let pagea = String.fromCharCode(114,101,115,111,108,118,101,100,95,101,95,56,51,0);
    let clearf = String.fromCharCode(100,95,54,53,95,99,111,100,101,114,115,0);
    let agreementQ = 2;
    let fastt = 1.0;
    let diceM: Array<any> = [String.fromCharCode(98,95,49,55,95,118,112,120,101,110,99,0), String.fromCharCode(118,95,54,53,95,102,111,114,109,0)];
    let playP = false;
    let stationss: Map<any, any> = new Map([[String.fromCharCode(121,95,50,56,95,101,110,113,117,101,117,101,100,0),728], [String.fromCharCode(121,95,57,54,95,122,101,116,97,0),428], [String.fromCharCode(104,95,52,54,95,115,101,97,114,99,104,105,110,103,0),202]]);
    let specN: Map<any, any> = new Map([[String.fromCharCode(100,97,121,95,56,95,56,55,0),String.fromCharCode(97,95,50,53,95,105,110,116,101,114,114,117,112,116,101,100,0)], [String.fromCharCode(117,95,56,53,95,115,117,98,98,108,111,99,107,115,0),String.fromCharCode(121,95,55,53,95,108,105,98,121,117,118,0)]]);
   while (5 <= (configureU.length - parseInt(`${injuryW}`))) {
       let canvasY = false;
       let alert6 = false;
       let nativeA = String.fromCharCode(100,101,115,116,114,111,121,101,100,95,111,95,56,48,0);
      let anytimez = nativeA.length <= 8309766;
      do {
          let taiwan4 = 1.0;
          let smallm = 0.0;
         nativeA += `${1 & parseInt(`${taiwan4}`)}`;
         taiwan4 += parseFloat(`${3}`);
         smallm *= parseInt(`${smallm}`);
         if (anytimez) {
            break;
         }
      } while (anytimez && (!nativeA.startsWith(`${alert6}`)));
         nativeA = `${((canvasY ? 2 : 1) / (Math.max(3, (alert6 ? 3 : 3))))}`;
          let friendsX = String.fromCharCode(104,95,55,51,95,118,101,99,0);
          let appleZ = true;
         canvasY = !appleZ;
         friendsX += `${friendsX.length * 2}`;
      for (let h = 0; h < 2; h++) {
         nativeA += "2";
      }
      let textp = alert6 ? !alert6 : alert6;
      do {
         alert6 = canvasY || !alert6;
         if (textp) {
            break;
         }
      } while ((!nativeA.endsWith(`${alert6}`)) && textp);
         nativeA = `${nativeA.length}`;
       let containerp = 1;
         alert6 = nativeA.length < 93;
         containerp |= nativeA.length / 2;
      injuryW /= Math.max(pagea.length, 4);
      break;
   }
      configureU += `${diceM.length}`;

    const vodInfo = downloadVideoReducer.downloads.find(
      (download) => download.vod.vod_id === vodId
    );

      fastt *= parseFloat(`${3 | pagea.length}`);
   let carousel9 = fastt <= 5920743.0;
   do {
      fastt += parseFloat(`${3 >> (Math.min(2, clearf.length))}`);
      if (carousel9) {
         break;
      }
   } while (carousel9 && (2.65 < fastt));

    if (!vodInfo) {

       let policyB = 4;
          let constantsM: Map<any, any> = new Map([[String.fromCharCode(116,107,104,100,95,112,95,56,0),38], [String.fromCharCode(117,95,52,57,95,100,97,116,101,115,0),189], [String.fromCharCode(98,95,56,55,95,109,97,115,107,105,110,103,0),714]]);
          let overlayK = String.fromCharCode(108,105,115,116,95,118,95,55,49,0);
          let condensed5: Array<any> = [272, 668, 49];
         policyB *= overlayK.length;
         constantsM = new Map([[`${constantsM.size}`, 3]]);
         overlayK += "3";
         condensed5.push(constantsM.size);
         policyB |= policyB ^ 2;
      while (policyB == 1) {
         policyB &= policyB;
         break;
      }
      diceM.push((String.fromCharCode(68,0) == pagea ? pagea.length : diceM.length));
       let side_ = 0.0;
       let heji4: Map<any, any> = new Map([[String.fromCharCode(101,115,116,105,109,97,116,105,110,103,95,106,95,49,56,0),String.fromCharCode(106,95,52,53,95,116,119,111,112,97,115,115,0)], [String.fromCharCode(116,95,50,49,95,117,118,109,118,0),String.fromCharCode(97,110,99,105,108,108,97,114,121,95,55,95,57,48,0)]]);
      while (Array.from(heji4.keys()).includes(`${side_}`)) {
          let entryg = String.fromCharCode(100,121,110,108,105,110,107,95,102,95,52,48,0);
         heji4 = new Map([[`${heji4.size}`, parseInt(`${side_}`) / (Math.max(8, heji4.size))]]);
         entryg = `${entryg.length}`;
         break;
      }
          let lessd: Array<any> = [342, 689, 854];
          let confirmation4 = String.fromCharCode(108,95,56,51,95,114,115,104,105,102,116,0);
         heji4 = new Map([[`${heji4.size}`, 1]]);
         lessd = [lessd.length - confirmation4.length];
         confirmation4 += `${lessd.length ^ confirmation4.length}`;
      stationss = new Map([[configureU, parseInt(`${fastt}`)]]);
      return displayEpisodes as VNConnectionWith[]
    }

    return displayEpisodes?.map((ep) => {
      const episodeInfo = vodInfo && !vodInfo.vodIsAdult ?
        vodInfo.episodes.find(
          (episode) => episode.vodUrlNid === ep.nid && episode.vodSourceId === source
        )
        :
        vodInfo.episodes.find(
          (episode) => episode.vodUrlNid === ep.nid
        )

      if (vodInfo && episodeInfo) {

   for (let q = 0; q < 1; q++) {
      stationss.set(`${injuryW}`, parseInt(`${injuryW}`));
   }
   if (configureU == String.fromCharCode(109,0) && pagea == String.fromCharCode(112,0)) {
       let sharedk = 5;
       let historyy: Array<any> = [String.fromCharCode(112,111,108,121,115,116,97,114,95,51,95,50,49,0), String.fromCharCode(99,104,111,111,115,105,110,103,95,53,95,56,55,0), String.fromCharCode(115,117,109,109,97,114,121,95,102,95,54,50,0)];
          let middleu = 1.0;
          let k_counts = String.fromCharCode(108,101,103,97,99,121,95,116,95,57,49,0);
         historyy.push(2);
         middleu += parseFloat(`${k_counts.length >> (Math.min(4, Math.abs(parseInt(`${middleu}`))))}`);
         k_counts += `${k_counts.length & parseInt(`${middleu}`)}`;
         historyy.push(historyy.length);
          let sliders = String.fromCharCode(109,111,110,111,95,48,95,57,50,0);
          let b_countx = false;
          let download5 = String.fromCharCode(118,95,57,55,95,105,110,118,105,115,105,98,108,101,0);
         historyy.push(3);
         sliders += "1";
         b_countx = sliders == String.fromCharCode(72,0);
         download5 += `${(String.fromCharCode(84,0) == sliders ? sliders.length : (b_countx ? 1 : 3))}`;
         historyy = [historyy.length];
      let grey8 = 8279163 >= sharedk;
      do {
         sharedk |= historyy.length >> (Math.min(4, Math.abs(sharedk)));
         if (grey8) {
            break;
         }
      } while (((sharedk & 4) >= 4 && (4 & sharedk) >= 5) && grey8);
         historyy.push(historyy.length);
      configureU = `${3 - configureU.length}`;
   }
        const isDownloading = episodeInfo.status === RAccepted.RUnselectedDropdown;

      fastt -= parseFloat(`${3 / (Math.max(5, parseInt(`${fastt}`)))}`);
       let gpay3 = String.fromCharCode(117,110,115,101,114,105,97,108,105,122,101,95,117,95,54,0);
       let actiony = 5.0;
       let overb = String.fromCharCode(112,95,53,53,95,101,120,116,101,110,100,101,101,0);
      let checkboxq = String.fromCharCode(48,57,106,105,103,54,0) == gpay3;
      do {
         gpay3 = "3";
         if (checkboxq) {
            break;
         }
      } while ((3.12 < actiony) && checkboxq);
         gpay3 = `${parseInt(`${actiony}`)}`;
         actiony *= parseFloat(`${3}`);
      let scorea = 5546292.0 >= actiony;
      do {
         actiony += parseFloat(`${1}`);
         if (scorea) {
            break;
         }
      } while (scorea && ((gpay3.length >> (Math.min(Math.abs(1), 3))) <= 3 && 3.97 <= (actiony * 3.27)));
       let contextZ: Array<any> = [String.fromCharCode(113,95,52,57,95,108,111,97,100,120,0), String.fromCharCode(98,95,52,49,95,107,101,121,98,111,97,114,100,0)];
       let formu: Array<any> = [198, 672];
          let selectG = 4.0;
          let fcopy_6ln: Array<any> = [377, 71, 872];
          let schedulea = String.fromCharCode(97,116,111,105,95,101,95,50,54,0);
         actiony /= Math.max(2, (parseFloat(`${gpay3 == String.fromCharCode(81,0) ? parseInt(`${selectG}`) : gpay3.length}`)));
         selectG += 1;
         fcopy_6ln.push(2);
         schedulea = `${fcopy_6ln.length % (Math.max(3, 9))}`;
      let episode5 = overb.length >= 6641587;
      do {
         overb = `${contextZ.length}`;
         if (episode5) {
            break;
         }
      } while (((3 ^ overb.length) < 3 || 4.61 < (2.33 + actiony)) && episode5);
         overb += `${(String.fromCharCode(69,0) == gpay3 ? gpay3.length : parseInt(`${actiony}`))}`;
          let auto_fb1: Array<any> = [127, 958];
          let borderlessS = String.fromCharCode(118,95,57,55,95,101,110,99,0);
         contextZ.push(auto_fb1.length | formu.length);
         auto_fb1.push(borderlessS.length);
         borderlessS = `${borderlessS.length | borderlessS.length}`;
      agreementQ -= 1;
        const isDownloaded = episodeInfo.status === RAccepted.RClearModels;

      clearf = `${((playP ? 3 : 4) * agreementQ)}`;
   for (let z = 0; z < 2; z++) {
      pagea += `${agreementQ & parseInt(`${fastt}`)}`;
   }

        return {
          ...ep,
          isDownloading: !!isDownloading,
          isDownloaded: !!isDownloaded,
          progress: episodeInfo.progress,
        } as VNConnectionWith;
      }

      return {
        ...ep,
        isDownloading: false,
        isDownloaded: false,
        progress: { percentage: 0, bytes: 0 }
      } as VNConnectionWith;
    });
  }, [displayEpisodes, downloadVideoReducer.downloads, vodId]);

  useEffect(() => {
    setCurrentIndex(0);
  }, [vodId]);

  const renderItem = useCallback(({ item, index }: { item: string; index: number }) => {
    return (
      <TouchableOpacity
        style={styles.btn}
        onPress={() => setCurrentIndex(index)}
      >
        <Text
          style={{
            textAlign: "center",
            ...textVariants.header,
            color: index === currentIndex ? colors.text : colors.muted,
            fontSize: index === currentIndex ? 18 : 15,
          }}
        >
          {`${item}集`}
        </Text>
      </TouchableOpacity>
    );
  }, [ranges])

  useEffect(() => {
    if (iosCustomToastIsVisible) {
      setTimeout(() => {
        setIosCustomToastIsVisible(false)
      }, 2000);
    }
  }, [iosCustomToastIsVisible])

  return (
    <>
      {iosCustomToastIsVisible && screen === 'landscape' && Platform.OS === 'ios' && <View style={{
        opacity: 0.8,
        backgroundColor: 'black',
        position: 'absolute',
        top: '50%',
        left: '-50%',
        padding: 8,
        borderRadius: 4
      }}>
        <Text style={{ color: 'white', fontSize: 16 }}>
          {iosCustomToastText}
        </Text>
      </View>}
      {screen === 'potrait' && (
        <View
          style={{
            ...styles.header, marginHorizontal: 30,
          }}>
          <Text
            style={[
              styles.title,
              textVariants.header
            ]}>
            下载
          </Text>
        </View>
      )}

      <FlatList
        horizontal
        data={ranges}
        renderItem={renderItem}
      />

      {displayEpisodesWithStatus && (
        <>
          <ScrollView
            style={{
              height: height,
              marginBottom: 15,
              marginHorizontal: spacing.sideOffset,
            }}
            contentContainerStyle={{
              ...styles.episodeList,
              paddingTop: 10,
              paddingBottom: insets.bottom,
              paddingHorizontal: 5,
            }}
            nestedScrollEnabled={true}
          >
            {displayEpisodesWithStatus?.map((ep, idx) => (
              <TouchableOpacity
                key={`expand-${idx}`}
                onPress={() => {
                  if (!isVip) {
                    handleClose();
                    setShowAdOverlay(true);
                  } else {
                    if (downloadVideoReducer.queue.length + downloadVideoReducer.currentDownloading.length >= DOWNLOAD_FEATURE_MAX_QUEUE) {
                      setIosCustomToastText('最多同时下载10个视频，请稍后继续')
                      if (screen === 'landscape' && Platform.OS === 'ios') debouncedSetIosCustomToastIsVisibleTrue() 
                      else SMBing.showToast('最多同时下载10个视频，请稍后继续')
                    } else {
                      setIosCustomToastText('已加入下载队列，请查看‘我的下载’')
                      onDownload(ep.nid);
                      
                      //   content: <Text style={{color: 'white', top:-100, backgroundColor: '#00000080', padding: 5}}>'已加入下载队列，请查看‘我的下载’'</Text>, 
                      
                      
                      
                      if (screen === 'landscape' && Platform.OS === 'ios') debouncedSetIosCustomToastIsVisibleTrue() 
                      else throttledToast('已加入下载队列，请查看‘我的下载’')
                    }
                  }
                }}
                disabled={ep.isDownloaded || ep.isDownloading}
              >
                <View
                  style={{
                    backgroundColor: colors.search,
                    padding: spacing.s,
                    minWidth: childWidth,
                    marginBottom: spacing.s,
                    borderRadius: 8,
                    position: "relative",
                  }}
                  onLayout={episodeHeight === 0 || episodeWidth === 0 ? handleContainerLayout : undefined}
                >
                  {ep.isDownloading && (
                    <Animated.View style={{
                      backgroundColor: ep.isDownloading ? colors.primary : colors.search,
                      position: "absolute",
                      bottom: 0,
                      height: ep.progress.percentage / 100 * episodeHeight,
                      width: episodeWidth,
                      borderRadius: 8,
                    }}>
                    </Animated.View>
                  )}

                  <Text
                    numberOfLines={1}
                    style={{
                      fontSize: 13,
                      textAlign: "center",
                      fontWeight: "500",
                      color: colors.muted,
                    }}
                  >
                    {`${ep.name}`}
                  </Text>

                  {ep.isDownloading && (
                    <DlIcon
                      style={{
                        position: "absolute",
                        right: -8,
                        top: -5
                      }}
                    />
                  )}

                  {ep.isDownloaded && (
                    <View style={{
                      ...styles.legend,
                      backgroundColor: colors.primary + '29',
                      borderTopRightRadius: 8,
                      borderBottomLeftRadius: 8
                    }}>
                      <FinishIcon
                        width={10}
                        height={10}
                        color={colors.success}
                      />
                    </View>
                  )}

                  {!isVip && !ep.isDownloaded && (
                    <View style={{ ...styles.legend }}>
                      <VipIcon
                        color={colors.yellow}
                        width={14}
                        height={14}
                      />
                    </View>
                  )}
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {isVip ? (
            <TouchableOpacity
              style={{
                backgroundColor: colors.search,
                marginHorizontal: spacing.sideOffset + 5,
                padding: spacing.s,
                borderRadius: 8,
                flexDirection: "row",
                justifyContent: "center",
                gap: 5,
                marginBottom: insets.bottom,
              }}
              onPress={() => {
                onPressToDownload();
              }}
            >
              <DownloadIcon width={24} height={24} />
              <Text
                style={{
                  ...styles.title,
                  ...textVariants.header,
                  fontSize: 15,
                  color: colors.muted,
                  paddingBottom: 3,
                }}
              >
                我的下载
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={{
                backgroundColor: colors.yellow,
                marginHorizontal: spacing.sideOffset + 5,
                padding: spacing.s,
                borderRadius: 8,
                marginBottom: insets.bottom,
              }}
              onPress={() => {
                handleClose();
                setShowAdOverlay(true);
              }}
            >
              <Text
                style={{
                  ...styles.title,
                  ...textVariants.header,
                  fontSize: 15,
                  color: !isVip ? colors.selected : colors.muted,
                }}
              >
                下载功能仅对VIP会员开放
              </Text>
            </TouchableOpacity>
          )}
        </>
      )}
    </>
  );
}

export default memo(SelectDownloadComponent);

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
  title: {
    alignSelf: 'center',
    textAlign: "center",
  },
  episodeList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    gap: 10,
    marginBottom: 14,
  },
  legend: {
    position: 'absolute',
    top: 0,
    right: 0,
    paddingVertical: 3,
    paddingHorizontal: 6,
    overflow: 'hidden'
  },
  btn: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },
});
