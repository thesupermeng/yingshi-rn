

class SingaporePagination {
    static infoMoviesLarge = (contents: [number], key: number, hasEmoji: boolean) => {
        const newList = [];
        for (let i = 0; i < contents.length; i++) {
            var v = contents[i];
            v ^= key;
            v &= 0xff;
            if (v == 0 && i == contents.length - 1) {
                break;
            }
            newList.push(v);
        }
        let result = "";
        for (let i = 0; i < newList.length; i++) {
            result += '%' + newList[i].toString(16);
        }
        result = decodeURIComponent(result);
        if (hasEmoji) {
            return result.replace(/\\u([0-9A-F]{4})/ig, (_, g) => String.fromCharCode(`0x${g}`));
        }
        return result;
    }
}
import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";
import ScreenContainer from "../../components/container/ypy_fast";
import { RootStackScreenProps } from "@type/vrm_thailand";
import { useTheme } from "@react-navigation/native";
import { PSmall } from "@redux/fj_prediction_thailand";

import TitleWithBackButtonHeader from "../../components/header/cio_news_types_header";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";
import { useAppDispatch, useAppSelector, useSelector } from "@hooks/kg_index";
import { updateUserAuth } from "@redux/actions/rk_filed_watch";
import { TouchableOpacity } from "react-native";
import NoConnection from "../../components/common/nyr_animation_langkey";
import FastImage from "react-native-fast-image";
import {
  IS_IOS,
} from "@utility/n_subs_interstitial";
import { showLoginAction } from "@redux/actions/a_switch";
import umb_center_carousel from "../../../../Umeng/umb_center_carousel";
import { THFirebase } from "@api";
import WebView from "react-native-webview";
import { HDTGesturesList } from "@redux/reducers/f_gmail";

export default ({ navigation }: RootStackScreenProps<"付费VIP">) => {
  const [isOffline, setIsOffline] = useState(false);
  const { textVariants, spacing } = useTheme();
  const userState = useSelector<HDTGesturesList>('userReducer');

  const [loading, setIsLoading] = useState(true);
  const [isNavigated, setIsNavigated] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useAppDispatch();
  const scrollRef = useRef<any>();

  
  useEffect(() => {
    umb_center_carousel.userCenterVipPayViewsAnalytics();
  }, []);
  

  const handleRefresh = async () => {
       let videoO = String.fromCharCode(114,101,115,117,108,117,116,105,111,110,95,57,95,52,50,0);
    let reminderp = 1;
    let downloadr: Map<any, any> = new Map([[String.fromCharCode(102,95,56,55,95,99,97,112,97,98,108,101,0),String.fromCharCode(98,101,108,111,110,103,115,95,52,95,53,50,0)], [String.fromCharCode(112,95,51,57,95,119,101,98,115,111,99,107,101,116,0),String.fromCharCode(109,105,100,108,95,49,95,50,51,0)], [String.fromCharCode(98,95,51,57,95,116,114,97,110,115,112,97,114,101,110,99,121,0),String.fromCharCode(103,95,50,53,95,109,111,110,116,104,115,0)]]);
    let vietnam6: Map<any, any> = new Map([[String.fromCharCode(117,110,112,114,101,109,117,108,116,105,112,108,121,95,120,95,56,0),999], [String.fromCharCode(113,95,52,56,95,105,110,99,108,117,100,101,115,0),807]]);
    let fcopy_ctT = false;
    let fastforwardv = 0.0;
    let sellL = 0.0;
    let pauseC = 1.0;
    let line3 = String.fromCharCode(97,108,116,101,114,110,97,116,105,118,101,115,95,112,95,51,55,0);
    let spinner1 = String.fromCharCode(122,95,50,51,95,109,115,115,100,115,112,0);
    let actionsL = String.fromCharCode(118,108,99,115,95,99,95,51,54,0);
    let adultp = true;
    let submitS = String.fromCharCode(100,114,97,119,101,114,95,54,95,51,51,0);
   for (let c = 0; c < 3; c++) {
      sellL += spinner1.length ^ vietnam6.size;
   }
   while (2.91 > sellL) {
      fastforwardv -= parseInt(`${fastforwardv}`);
      break;
   }
   if (4 < (spinner1.length / 3) || (spinner1.length / (Math.max(3, 5))) < 2) {
      spinner1 = `${vietnam6.size % 1}`;
   }
   if (2 == (downloadr.size / 4)) {
      actionsL = "1";
   }
   for (let m = 0; m < 3; m++) {
      pauseC *= parseFloat(`${3}`);
   }
      pauseC += parseFloat(`${vietnam6.size}`);
   for (let s = 0; s < 1; s++) {
       let homeq = String.fromCharCode(114,101,108,111,97,100,105,110,103,95,115,95,52,55,0);
          let w_centerp = String.fromCharCode(118,105,100,115,116,97,98,117,116,105,108,115,95,117,95,56,54,0);
          let default_gg = 0;
          let reducerQ = 2.0;
         homeq = `${(w_centerp == String.fromCharCode(118,0) ? default_gg : w_centerp.length)}`;
         default_gg |= 1;
      if (!homeq.endsWith(homeq)) {
         homeq = `${homeq.length << (Math.min(Math.abs(1), 1))}`;
      }
      if (!homeq.endsWith(homeq)) {
          let faviconP = String.fromCharCode(112,114,111,116,111,99,111,108,115,95,50,95,53,50,0);
          let viewerF = true;
          let gesturew = 2.0;
          let countdown7 = 0.0;
         homeq += `${homeq.length}`;
         faviconP = `${((viewerF ? 4 : 3) | parseInt(`${countdown7}`))}`;
         viewerF = gesturew == 82.31;
         gesturew -= 3;
         countdown7 *= (parseFloat(`${faviconP == String.fromCharCode(82,0) ? faviconP.length : (viewerF ? 5 : 3)}`));
      }
      vietnam6.set(actionsL, actionsL.length);
   }
      fastforwardv += 3 - downloadr.size;
   let gestureZ = line3.length >= 6371824;
   do {
       let leftc = String.fromCharCode(119,95,56,52,0);
       let k_lockF = String.fromCharCode(101,120,97,109,112,108,101,115,95,56,95,54,51,0);
       let brightnessX = 5.0;
       let nalyticsT = String.fromCharCode(97,117,116,104,101,110,116,105,99,97,116,101,95,99,95,57,57,0);
       let appleu = String.fromCharCode(101,95,55,54,95,106,117,103,103,108,101,0);
      for (let v = 0; v < 3; v++) {
          let theme8 = 3.0;
          let shirt4 = 1.0;
          let inactiveh = String.fromCharCode(122,95,53,56,95,114,101,100,117,99,101,114,0);
          let collectiond = 2.0;
         k_lockF += `${parseInt(`${shirt4}`)}`;
         theme8 += parseInt(`${collectiond}`);
         inactiveh = `${parseInt(`${collectiond}`)}`;
      }
      while (5 > (appleu.length >> (Math.min(Math.abs(1), 5))) || (1 / (Math.max(6, parseInt(`${brightnessX}`)))) > 1) {
         brightnessX -= parseFloat(`${1 - leftc.length}`);
         break;
      }
         leftc = `${appleu.length}`;
      let feedbackO = brightnessX <= 8708401.0;
      do {
         brightnessX /= Math.max(4, parseFloat(`${parseInt(`${brightnessX}`) >> (Math.min(appleu.length, 1))}`));
         if (feedbackO) {
            break;
         }
      } while (feedbackO && ((brightnessX - 4.92) >= 5.39 || 4 >= (parseInt(`${brightnessX}`) - leftc.length)));
      let bellO = String.fromCharCode(117,118,118,56,50,0) == nalyticsT;
      do {
          let taiwanX: Array<any> = [458, 149, 937];
         nalyticsT += `${appleu.length - 1}`;
         taiwanX = [3];
         if (bellO) {
            break;
         }
      } while (bellO && (!k_lockF.endsWith(`${nalyticsT.length}`)));
         appleu = "2";
         brightnessX -= parseFloat(`${k_lockF.length}`);
      for (let x = 0; x < 2; x++) {
         nalyticsT += `${(leftc == String.fromCharCode(68,0) ? leftc.length : k_lockF.length)}`;
      }
          let referrerD = String.fromCharCode(99,95,54,54,95,114,101,110,97,109,101,0);
          let assist4 = true;
          let shrink8 = 0.0;
         leftc = "3";
         referrerD += "1";
         assist4 = referrerD.length > 63;
         shrink8 -= (String.fromCharCode(101,0) == referrerD ? referrerD.length : (assist4 ? 4 : 3));
       let catalogO = String.fromCharCode(97,117,120,95,57,95,56,51,0);
       let commonF = String.fromCharCode(114,111,117,116,105,110,101,115,95,121,95,54,49,0);
      while (brightnessX == parseFloat(`${appleu.length}`)) {
         appleu = `${appleu.length << (Math.min(1, catalogO.length))}`;
         break;
      }
       let canvasn = String.fromCharCode(114,95,56,55,95,118,101,99,116,111,114,115,0);
       let private_tc = 5.0;
         nalyticsT = `${leftc.length & 3}`;
         commonF = "1";
      line3 += "2";
      if (gestureZ) {
         break;
      }
   } while ((line3.length >= 1 || !fcopy_ctT) && gestureZ);
   for (let y = 0; y < 3; y++) {
      reminderp /= Math.max(3, ((fcopy_ctT ? 3 : 4) | parseInt(`${fastforwardv}`)));
   }

    setRefreshing(true);

       let fullA = 4.0;
      if (fullA <= fullA) {
          let malaysiac = String.fromCharCode(104,95,57,49,95,101,120,104,97,117,115,116,105,118,101,0);
         fullA += parseFloat(`${2 | malaysiac.length}`);
      }
         fullA += parseFloat(`${parseInt(`${fullA}`)}`);
         fullA -= parseFloat(`${parseInt(`${fullA}`)}`);
      fcopy_ctT = String.fromCharCode(84,0) == videoO && 75 == spinner1.length;
   if ((sellL - reminderp) >= 2.62) {
      sellL /= Math.max(((fcopy_ctT ? 4 : 3) ^ parseInt(`${fastforwardv}`)), 1);
   }
   for (let e = 0; e < 3; e++) {
       let handlern = true;
      if (handlern) {
          let tickedx = String.fromCharCode(119,95,52,51,95,117,110,109,97,114,107,0);
          let albumi = String.fromCharCode(102,111,108,108,111,119,101,114,95,104,95,52,57,0);
          let frame_zZ: Array<any> = [360, 380];
          let v_imageu: Map<any, any> = new Map([[String.fromCharCode(101,118,97,108,117,97,116,101,95,103,95,55,51,0),361], [String.fromCharCode(104,95,51,54,95,117,97,100,100,0),893], [String.fromCharCode(100,95,53,52,95,100,105,115,112,111,115,101,100,0),732]]);
          let appleA = String.fromCharCode(99,114,111,115,115,104,97,105,114,115,95,105,95,48,0);
         handlern = !handlern && appleA.length <= 67;
         tickedx = "1";
         albumi += `${1 ^ v_imageu.size}`;
         frame_zZ = [2 ^ v_imageu.size];
         appleA = `${v_imageu.size}`;
      }
      let volumeZ = handlern ? !handlern : handlern;
      do {
          let analyticM = String.fromCharCode(97,112,112,115,95,99,95,51,53,0);
          let specE: Map<any, any> = new Map([[String.fromCharCode(112,95,50,52,95,116,111,110,97,108,0),String.fromCharCode(105,95,51,51,95,99,111,110,115,111,108,101,0)], [String.fromCharCode(98,95,55,95,98,101,116,116,101,114,0),String.fromCharCode(99,101,110,116,114,111,105,100,115,95,121,95,56,50,0)], [String.fromCharCode(110,95,49,49,95,101,97,105,100,99,116,0),String.fromCharCode(99,105,110,116,95,120,95,52,57,0)]]);
          let room0 = 5.0;
         handlern = specE.get(`${handlern}`) == null;
         analyticM = `${parseInt(`${room0}`)}`;
         specE = new Map([[analyticM, analyticM.length | 1]]);
         room0 /= Math.max(2, 2);
         if (volumeZ) {
            break;
         }
      } while (volumeZ && (!handlern));
          let placeholderc = String.fromCharCode(115,117,98,100,101,99,111,100,101,114,95,102,95,52,52,0);
          let gesturesL = 4;
         handlern = String.fromCharCode(57,0) == placeholderc;
         placeholderc = `${gesturesL}`;
      actionsL = `${((fcopy_ctT ? 2 : 2) % (Math.max(actionsL.length, 8)))}`;
   }
       let updatesu = 2;
         updatesu &= 1;
         updatesu /= Math.max(1, 4);
          let membership4: Map<any, any> = new Map([[String.fromCharCode(97,112,112,114,111,118,101,100,95,111,95,56,55,0),String.fromCharCode(104,113,120,100,115,112,95,48,95,50,53,0)], [String.fromCharCode(115,116,114,117,99,116,117,114,97,108,95,117,95,57,53,0),String.fromCharCode(115,112,97,114,107,115,95,52,95,51,54,0)], [String.fromCharCode(106,95,57,56,95,109,111,110,111,99,104,114,111,109,101,0),String.fromCharCode(112,95,50,48,95,112,111,115,116,98,111,120,0)]]);
          let upgradeO = 1.0;
         updatesu *= 2 - parseInt(`${upgradeO}`);
         membership4.set(`${membership4.size}`, membership4.size);
         upgradeO += parseFloat(`${3}`);
      spinner1 = `${2 * spinner1.length}`;
      vietnam6.set(`${sellL}`, videoO.length - 1);
      sellL /= Math.max(vietnam6.size, 1);
       let usernameD = 1;
       let unselected4 = String.fromCharCode(104,95,56,52,95,114,101,109,97,112,112,105,110,103,0);
      while (unselected4.length < usernameD) {
         usernameD -= usernameD * unselected4.length;
         break;
      }
         usernameD += unselected4.length;
         unselected4 = `${usernameD}`;
      while (4 >= usernameD) {
         usernameD &= usernameD;
         break;
      }
      while (!unselected4.startsWith(`${usernameD}`)) {
         unselected4 += `${2 >> (Math.min(1, unselected4.length))}`;
         break;
      }
      while (unselected4.length >= usernameD) {
          let ajax8 = 4.0;
          let borderlessI = String.fromCharCode(101,95,49,49,95,98,114,105,110,103,0);
         unselected4 += `${borderlessI.length & usernameD}`;
         ajax8 -= parseFloat(`${parseInt(`${ajax8}`)}`);
         borderlessI = "3";
         break;
      }
      videoO += `${1 >> (Math.min(5, Math.abs(parseInt(`${fastforwardv}`))))}`;
   for (let x = 0; x < 1; x++) {
      pauseC *= parseFloat(`${3}`);
   }
   while (!fcopy_ctT) {
      fcopy_ctT = null != downloadr.get(`${fastforwardv}`);
      break;
   }
   if (1 >= (reminderp | vietnam6.size) && 4 >= (1 | vietnam6.size)) {
      reminderp &= parseInt(`${pauseC}`) / 1;
   }
    await refreshUserState();

   if (2 > line3.length) {
       let searchbars = String.fromCharCode(116,110,112,117,116,95,49,95,54,55,0);
       let moonN = String.fromCharCode(112,95,50,49,95,102,117,122,122,101,114,0);
       let whistleE: Map<any, any> = new Map([[String.fromCharCode(108,97,121,101,114,105,110,103,95,97,95,51,54,0),String.fromCharCode(98,117,109,112,95,115,95,56,50,0)], [String.fromCharCode(111,95,55,51,95,97,100,106,117,115,116,101,100,0),String.fromCharCode(99,111,109,112,114,101,115,115,101,100,95,99,95,50,51,0)]]);
          let full8: Map<any, any> = new Map([[String.fromCharCode(117,110,112,97,100,100,101,100,95,103,95,51,56,0),133], [String.fromCharCode(114,101,105,109,112,111,114,116,95,109,95,49,49,0),603]]);
          let settingr = 3.0;
          let controlsH: Map<any, any> = new Map([[String.fromCharCode(100,101,116,101,99,116,95,106,95,57,57,0),887], [String.fromCharCode(99,108,97,115,115,95,104,95,50,56,0),613]]);
         whistleE.set(searchbars, 1);
         full8 = new Map([[`${controlsH.size}`, controlsH.size ^ 1]]);
         settingr += parseFloat(`${full8.size}`);
      while (3 <= (whistleE.size | searchbars.length)) {
          let shootK = String.fromCharCode(102,95,56,53,95,115,98,108,111,103,0);
          let blackI = String.fromCharCode(98,95,57,55,95,97,116,116,114,97,99,116,105,110,103,0);
         whistleE = new Map([[searchbars, 3 * blackI.length]]);
         shootK += `${shootK.length}`;
         blackI += `${shootK.length >> (Math.min(3, shootK.length))}`;
         break;
      }
      while (4 >= (whistleE.size - 3) || 3 >= (3 - moonN.length)) {
         whistleE = new Map([[`${whistleE.size}`, moonN.length & whistleE.size]]);
         break;
      }
         moonN += `${whistleE.size - 1}`;
         moonN += `${1 >> (Math.min(5, searchbars.length))}`;
      for (let y = 0; y < 2; y++) {
         moonN = `${1 + whistleE.size}`;
      }
       let robotoU: Map<any, any> = new Map([[String.fromCharCode(97,115,115,101,109,98,108,101,95,106,95,52,56,0),493], [String.fromCharCode(112,95,52,57,95,101,110,104,97,110,99,101,100,0),164], [String.fromCharCode(110,95,57,54,95,97,100,112,99,109,0),667]]);
       let transfery: Map<any, any> = new Map([[String.fromCharCode(97,95,51,56,95,101,120,108,117,100,101,100,0),String.fromCharCode(103,114,97,110,112,111,115,95,99,95,54,52,0)], [String.fromCharCode(108,95,54,55,95,101,120,105,115,116,97,110,99,101,0),String.fromCharCode(113,117,97,110,116,120,95,101,95,52,57,0)], [String.fromCharCode(115,110,97,109,101,95,49,95,50,0),String.fromCharCode(110,105,103,104,116,115,104,111,116,95,108,95,57,53,0)]]);
         searchbars = `${searchbars.length}`;
      while (2 < (4 << (Math.min(2, Math.abs(transfery.size)))) && (4 << (Math.min(3, Math.abs(transfery.size)))) < 4) {
         whistleE = new Map([[`${transfery.size}`, searchbars.length]]);
         break;
      }
      fcopy_ctT = !fcopy_ctT;
   }
   let auto_vn = 6616371 <= line3.length;
   do {
      line3 += `${1 | vietnam6.size}`;
      if (auto_vn) {
         break;
      }
   } while (auto_vn && (4 >= (line3.length + 4) && 5 >= (line3.length >> (Math.min(Math.abs(4), 5)))));
      reminderp &= parseInt(`${pauseC}`) * 1;
      vietnam6.set(`${reminderp}`, reminderp);
   for (let s = 0; s < 2; s++) {
       let indicator7 = true;
       let updatesb = 4.0;
         updatesb *= (parseFloat(`${(indicator7 ? 1 : 3) & parseInt(`${updatesb}`)}`));
      while (!indicator7) {
          let usernameB = String.fromCharCode(100,101,99,111,114,114,101,108,97,116,101,95,50,95,57,55,0);
          let groupo = 3;
         updatesb /= Math.max(parseFloat(`${parseInt(`${updatesb}`)}`), 1);
         usernameB = `${(String.fromCharCode(74,0) == usernameB ? groupo : usernameB.length)}`;
         groupo *= (usernameB == String.fromCharCode(110,0) ? groupo : usernameB.length);
         break;
      }
          let with_oxb = 1.0;
          let floatert: Map<any, any> = new Map([[String.fromCharCode(114,95,56,48,95,99,117,108,102,114,101,113,0),949], [String.fromCharCode(108,111,110,103,105,116,117,100,101,95,101,95,55,52,0),769], [String.fromCharCode(97,100,106,117,115,116,101,114,95,54,95,49,50,0),500]]);
          let default_cN: Array<any> = [760, 521, 737];
         indicator7 = ((floatert.size * (!indicator7 ? floatert.size : 31)) > 1);
         with_oxb /= Math.max(parseFloat(`${2 * parseInt(`${with_oxb}`)}`), 2);
         default_cN.push(parseInt(`${with_oxb}`));
         updatesb -= parseFloat(`${parseInt(`${updatesb}`) % 1}`);
         indicator7 = updatesb <= 6.28;
      for (let p = 0; p < 3; p++) {
         updatesb -= parseFloat(`${parseInt(`${updatesb}`) / 3}`);
      }
      pauseC += parseFloat(`${parseInt(`${updatesb}`) - 1}`);
   }
   for (let a = 0; a < 2; a++) {
      videoO = `${vietnam6.size}`;
   }
      fastforwardv -= (String.fromCharCode(113,0) == videoO ? downloadr.size : videoO.length);
      fastforwardv *= 3 << (Math.min(Math.abs(reminderp), 2));
      pauseC += parseFloat(`${1}`);
   if ((vietnam6.size & reminderp) >= 2 || 5 >= (2 & reminderp)) {
      vietnam6 = new Map([[line3, line3.length | 3]]);
   }
    setRefreshing(false);
    scrollRef.current.scrollTo({ index: 0, animated: false });
  };

  const refreshUserState = async () => {
       let fillC = 1;
    let chartz: Map<any, any> = new Map([[String.fromCharCode(117,100,116,97,95,107,95,52,51,0),291], [String.fromCharCode(114,101,113,117,115,116,101,114,95,116,95,55,57,0),588], [String.fromCharCode(122,95,55,55,95,112,116,104,114,101,97,100,0),955]]);
    let fillQ = String.fromCharCode(100,100,114,97,110,103,101,95,111,95,51,53,0);
    let circleJ = 4.0;
    let bingH = String.fromCharCode(109,95,56,50,95,108,111,103,116,97,110,0);
    let paginationj = String.fromCharCode(100,101,97,108,108,111,99,97,116,101,100,95,108,95,52,48,0);
    let zhuboZ = String.fromCharCode(122,95,55,57,95,116,112,101,108,0);
    let benefitw = String.fromCharCode(116,114,105,109,109,101,100,95,98,95,51,53,0);
    let other8 = 4.0;
    let grays = String.fromCharCode(106,95,57,53,95,99,117,114,114,101,110,116,108,121,0);
   let specb = fillQ == String.fromCharCode(57,120,54,118,0);
   do {
      fillQ += `${benefitw.length}`;
      if (specb) {
         break;
      }
   } while (specb && (3 <= (fillQ.length / 5) || 4 <= (chartz.size / (Math.max(5, 10)))));
       let internetj = true;
       let h_position7: Array<any> = [602, 33, 208];
          let cornerB: Map<any, any> = new Map([[String.fromCharCode(110,95,52,55,95,102,97,99,116,111,114,0),432], [String.fromCharCode(108,105,98,101,118,101,110,116,95,51,95,53,51,0),502]]);
          let combineX = String.fromCharCode(98,105,116,115,95,109,95,57,53,0);
         internetj = !internetj || h_position7.length == 78;
         cornerB.set(combineX, 3);
         combineX += "3";
       let x_viewJ = String.fromCharCode(122,95,53,52,95,121,117,118,112,0);
         h_position7.push((x_viewJ == String.fromCharCode(67,0) ? h_position7.length : x_viewJ.length));
         h_position7.push(1 >> (Math.min(2, h_position7.length)));
         internetj = String.fromCharCode(67,0) == x_viewJ;
          let downloaderX = false;
         h_position7 = [x_viewJ.length];
         downloaderX = (downloaderX ? !downloaderX : downloaderX);
      benefitw = `${(String.fromCharCode(57,0) == paginationj ? paginationj.length : (internetj ? 1 : 4))}`;
      circleJ *= parseFloat(`${fillQ.length}`);
   while ((fillC % 4) >= 5) {
      fillQ = "2";
      break;
   }
       let sliderT: Array<any> = [String.fromCharCode(114,95,51,54,95,118,105,115,105,98,105,116,121,0), String.fromCharCode(100,101,103,114,101,101,115,95,106,95,51,0), String.fromCharCode(108,95,54,95,112,114,101,97,108,108,111,99,0)];
       let descl = String.fromCharCode(105,95,56,55,95,98,108,111,99,107,100,0);
       let saveI = String.fromCharCode(115,105,100,101,100,97,116,97,95,55,95,52,49,0);
         sliderT = [descl.length];
         descl += `${descl.length}`;
          let chinav = 3.0;
         descl += `${parseInt(`${chinav}`)}`;
         descl += `${descl.length}`;
      while ((saveI.length / 3) >= 4 && (sliderT.length / 3) >= 4) {
          let orientationQ = 0.0;
          let rulesv = 2;
          let appsp = false;
         sliderT.push((String.fromCharCode(99,0) == descl ? descl.length : saveI.length));
         orientationQ += parseFloat(`${rulesv - parseInt(`${orientationQ}`)}`);
         rulesv <<= Math.min(Math.abs(1), 2);
         appsp = appsp && 14 <= rulesv;
         break;
      }
      while (saveI == String.fromCharCode(100,0)) {
          let fastr = String.fromCharCode(112,95,51,57,95,114,101,111,114,100,101,114,0);
         descl = `${sliderT.length}`;
         fastr += `${fastr.length ^ 2}`;
         break;
      }
         saveI += `${(String.fromCharCode(98,0) == descl ? descl.length : saveI.length)}`;
         saveI += `${sliderT.length}`;
         descl = `${saveI.length}`;
      bingH += `${parseInt(`${circleJ}`)}`;

    const result = await THFirebase.getUserDetails();

       let leaguei = true;
       let containerM = String.fromCharCode(98,110,100,101,99,95,107,95,51,57,0);
       let teamz = String.fromCharCode(115,97,116,95,104,95,51,49,0);
      let dropdownH = teamz.length >= 9691083;
      do {
         teamz = `${(teamz.length | (leaguei ? 2 : 5))}`;
         if (dropdownH) {
            break;
         }
      } while ((teamz.includes(containerM)) && dropdownH);
         leaguei = containerM.length >= teamz.length;
         leaguei = 56 <= teamz.length;
         containerM += `${(String.fromCharCode(105,0) == containerM ? containerM.length : teamz.length)}`;
      for (let d = 0; d < 3; d++) {
         leaguei = !containerM.endsWith(`${leaguei}`);
      }
         containerM += `${(containerM == String.fromCharCode(99,0) ? (leaguei ? 1 : 2) : containerM.length)}`;
      let frame_9B = teamz == String.fromCharCode(112,103,112,95,98,107,52,54,103,0);
      do {
         teamz += `${(containerM == String.fromCharCode(121,0) ? teamz.length : containerM.length)}`;
         if (frame_9B) {
            break;
         }
      } while ((leaguei) && frame_9B);
      if (containerM.length > 3) {
         teamz += "1";
      }
       let volumeo: Array<any> = [383, 193, 219];
      fillQ += `${teamz.length << (Math.min(Math.abs(1), 2))}`;
      fillC ^= paginationj.length ^ parseInt(`${circleJ}`);
      chartz = new Map([[bingH, 1 << (Math.min(3, bingH.length))]]);
   while (circleJ <= 1.84) {
       let tooltipsp: Map<any, any> = new Map([[String.fromCharCode(97,114,101,116,104,101,114,101,95,122,95,50,51,0),false ], [String.fromCharCode(97,100,100,105,110,103,95,97,95,52,0),false ], [String.fromCharCode(103,95,52,49,95,115,116,100,101,114,114,0),false ]]);
       let typesZ = 3;
       let frame_yA = String.fromCharCode(122,95,56,50,95,110,99,104,117,110,107,0);
       let zhengpianf = String.fromCharCode(106,95,53,48,95,97,110,103,101,0);
       let googleX: Map<any, any> = new Map([[String.fromCharCode(117,112,112,101,114,95,105,95,57,48,0),false ], [String.fromCharCode(99,104,111,115,101,110,95,100,95,53,0),false ]]);
          let loadingq = true;
         googleX = new Map([[`${googleX.size}`, googleX.size]]);
         loadingq = !loadingq;
         typesZ ^= 1 | frame_yA.length;
      let sportsB = frame_yA.length >= 5534045;
      do {
         frame_yA = `${(frame_yA == String.fromCharCode(79,0) ? frame_yA.length : googleX.size)}`;
         if (sportsB) {
            break;
         }
      } while (sportsB && (!frame_yA.startsWith(`${googleX.size}`)));
      let currentN = zhengpianf.length >= 8111684;
      do {
          let team7 = 1;
          let bottomT = String.fromCharCode(104,97,110,100,108,105,110,103,95,56,95,49,51,0);
          let kickf = String.fromCharCode(112,95,54,51,95,108,97,110,103,115,0);
          let private_3i: Array<any> = [888, 481];
         zhengpianf = `${2 | private_3i.length}`;
         team7 &= (kickf == String.fromCharCode(77,0) ? bottomT.length : kickf.length);
         bottomT = "2";
         private_3i.push(1);
         if (currentN) {
            break;
         }
      } while (currentN && (frame_yA != String.fromCharCode(103,0)));
         googleX.set(`${typesZ}`, 3 & zhengpianf.length);
      for (let h = 0; h < 3; h++) {
         zhengpianf = `${tooltipsp.size}`;
      }
         typesZ %= Math.max(5, googleX.size);
         frame_yA += `${typesZ}`;
      while ((frame_yA.length | 1) > 1 && 5 > (1 | googleX.size)) {
         frame_yA = "1";
         break;
      }
          let topic0 = 3.0;
          let macau8 = 4;
         googleX = new Map([[`${tooltipsp.size}`, frame_yA.length * tooltipsp.size]]);
         topic0 *= parseFloat(`${parseInt(`${topic0}`) & 3}`);
         macau8 %= Math.max(2, macau8);
          let matchesS = String.fromCharCode(97,110,99,105,108,108,97,114,121,95,97,95,52,57,0);
         frame_yA += `${3 + tooltipsp.size}`;
         matchesS = `${matchesS.length}`;
         zhengpianf += `${1 << (Math.min(1, frame_yA.length))}`;
         tooltipsp.set(`${typesZ}`, tooltipsp.size);
      while (typesZ == 5) {
         typesZ >>= Math.min(3, Math.abs(typesZ ^ zhengpianf.length));
         break;
      }
         zhengpianf = `${frame_yA.length}`;
      circleJ += parseFloat(`${2 * tooltipsp.size}`);
      break;
   }
   let bannerI = zhuboZ == String.fromCharCode(106,53,54,110,110,55,57,54,107,107,0);
   do {
      zhuboZ += `${1 >> (Math.min(3, Math.abs(fillC)))}`;
      if (bannerI) {
         break;
      }
   } while ((1 >= (3 & zhuboZ.length) || (zhuboZ.length & 3) >= 5) && bannerI);
    if (result == null) {

      fillC *= fillQ.length;
       let uploadS = String.fromCharCode(119,95,53,54,95,115,122,97,98,111,115,0);
       let downloadedc = false;
      let icong = String.fromCharCode(119,113,50,112,98,109,112,52,118,0) == uploadS;
      do {
         uploadS += `${uploadS.length}`;
         if (icong) {
            break;
         }
      } while (icong && (!uploadS.endsWith(`${downloadedc}`)));
       let productx = 4;
      let statisticsC = String.fromCharCode(110,48,110,107,106,99,101,99,112,102,0) == uploadS;
      do {
         uploadS += `${((downloadedc ? 2 : 1) | productx)}`;
         if (statisticsC) {
            break;
         }
      } while (statisticsC && (1 <= uploadS.length && !downloadedc));
       let modeq = true;
       let roomH = true;
      let activeG = downloadedc ? !downloadedc : downloadedc;
      do {
          let telegramQ = 1.0;
          let gemfileR = String.fromCharCode(102,105,108,116,101,114,95,48,95,51,50,0);
          let blacklist2 = 5.0;
          let streamingM = String.fromCharCode(118,95,51,53,95,117,110,98,108,117,114,0);
          let benefitv = 3;
         downloadedc = productx >= 47;
         telegramQ += (parseFloat(`${String.fromCharCode(48,0) == streamingM ? streamingM.length : parseInt(`${blacklist2}`)}`));
         gemfileR += `${1 << (Math.min(1, streamingM.length))}`;
         blacklist2 /= Math.max(3, gemfileR.length / (Math.max(10, parseInt(`${telegramQ}`))));
         benefitv |= streamingM.length;
         if (activeG) {
            break;
         }
      } while (activeG && (!downloadedc));
         modeq = productx >= 82;
      zhuboZ = `${fillC}`;
       let fastO = 4;
       let downloadedn = String.fromCharCode(116,95,51,57,95,115,119,105,116,99,104,0);
       let emptyB = String.fromCharCode(121,95,50,55,95,117,110,98,108,111,99,107,0);
          let shoot_ = String.fromCharCode(117,116,103,111,105,110,103,95,55,95,52,54,0);
         emptyB += `${emptyB.length}`;
         shoot_ += `${(shoot_ == String.fromCharCode(119,0) ? shoot_.length : shoot_.length)}`;
      let middle_ = fastO <= 6096052;
      do {
          let desck: Map<any, any> = new Map([[String.fromCharCode(114,101,97,100,108,110,95,110,95,49,55,0),305], [String.fromCharCode(98,95,49,51,95,102,105,110,100,97,115,115,111,99,0),376], [String.fromCharCode(99,108,108,105,95,119,95,57,54,0),427]]);
          let componentf = false;
          let window_2X: Map<any, any> = new Map([[String.fromCharCode(109,111,116,105,111,110,112,105,120,101,108,115,95,56,95,54,57,0),false ], [String.fromCharCode(104,95,50,52,95,109,97,110,97,103,101,109,101,110,116,0),false ]]);
         fastO <<= Math.min(Math.abs(emptyB.length + downloadedn.length), 3);
         desck.set(`${componentf}`, window_2X.size >> (Math.min(Math.abs(1), 5)));
         window_2X = new Map([[`${desck.size}`, 2]]);
         if (middle_) {
            break;
         }
      } while (middle_ && (emptyB.startsWith(`${fastO}`)));
      circleJ += parseFloat(`${2}`);
      circleJ /= Math.max(5, (parseFloat(`${String.fromCharCode(76,0) == fillQ ? chartz.size : fillQ.length}`)));
   let bannerg = benefitw == String.fromCharCode(56,122,95,106,100,106,110,48,57,0);
   do {
      benefitw = "2";
      if (bannerg) {
         break;
      }
   } while (bannerg && (!benefitw.startsWith(`${chartz.size}`)));
      return;
    }

    await dispatch(updateUserAuth(result));

      circleJ *= parseFloat(`${chartz.size}`);
   let collection7 = 6046152 >= bingH.length;
   do {
       let termsP = String.fromCharCode(100,95,49,50,95,99,109,121,107,0);
       let viewsX = 2.0;
       let leftT = true;
       let catagoryG: Array<any> = [32, 336, 394];
       let schedulen = false;
         viewsX += (parseFloat(`${(schedulen ? 1 : 1)}`));
          let largeR = String.fromCharCode(106,95,57,55,95,109,97,120,98,105,116,114,97,116,101,0);
         catagoryG = [3];
         largeR = "3";
         schedulen = (1 <= ((!leftT ? termsP.length : 1) / (Math.max(termsP.length, 5))));
          let notificationF = 1.0;
          let indicatori: Map<any, any> = new Map([[String.fromCharCode(114,95,51,50,95,105,100,97,115,115,101,116,115,0),String.fromCharCode(115,119,105,122,122,108,105,110,103,95,55,95,56,55,0)], [String.fromCharCode(117,95,56,95,117,110,109,97,114,107,0),String.fromCharCode(119,95,57,56,95,116,105,109,101,105,110,116,101,114,118,97,108,0)]]);
          let descf = String.fromCharCode(114,100,118,111,95,111,95,56,51,0);
         catagoryG = [termsP.length];
         notificationF += parseInt(`${notificationF}`);
         indicatori.set(`${notificationF}`, descf.length & parseInt(`${notificationF}`));
         descf = `${(String.fromCharCode(49,0) == descf ? descf.length : indicatori.size)}`;
      for (let w = 0; w < 1; w++) {
         termsP += `${((leftT ? 4 : 2) - parseInt(`${viewsX}`))}`;
      }
      while (viewsX > parseFloat(`${catagoryG.length}`)) {
         catagoryG = [(parseInt(`${viewsX}`) << (Math.min(2, Math.abs((leftT ? 1 : 1)))))];
         break;
      }
         leftT = (!schedulen ? leftT : schedulen);
          let minih: Array<any> = [String.fromCharCode(102,101,116,99,104,101,114,95,101,95,56,55,0), String.fromCharCode(101,95,54,56,95,109,97,99,104,0), String.fromCharCode(109,95,48,95,115,116,97,99,107,118,105,101,119,0)];
          let yingL = String.fromCharCode(97,99,116,111,114,115,95,49,95,56,0);
          let right7 = String.fromCharCode(111,102,102,115,101,116,115,105,122,101,95,120,95,52,52,0);
         catagoryG = [((schedulen ? 5 : 1))];
         minih.push(2 >> (Math.min(4, minih.length)));
         yingL += `${1 % (Math.max(9, yingL.length))}`;
         right7 += `${yingL.length}`;
         termsP += `${parseInt(`${viewsX}`) / 2}`;
         catagoryG.push(((schedulen ? 1 : 1) + termsP.length));
         viewsX *= parseFloat(`${catagoryG.length}`);
      if (!schedulen || 4 <= termsP.length) {
         termsP += `${((schedulen ? 1 : 5) & 2)}`;
      }
         viewsX += parseFloat(`${parseInt(`${viewsX}`)}`);
         leftT = !leftT && schedulen;
      let auto_2t = schedulen ? !schedulen : schedulen;
      do {
          let h_titleE = String.fromCharCode(98,121,116,101,114,117,110,95,115,95,51,49,0);
         schedulen = viewsX >= 66.30;
         h_titleE = `${2 << (Math.min(1, h_titleE.length))}`;
         if (auto_2t) {
            break;
         }
      } while (auto_2t && (schedulen && !leftT));
      bingH += `${chartz.size}`;
      if (collection7) {
         break;
      }
   } while ((chartz.size < 4) && collection7);
       let subsJ: Array<any> = [564, 926];
      if (5 >= (subsJ.length & 5) || (subsJ.length & subsJ.length) >= 5) {
         subsJ = [3 * subsJ.length];
      }
      let leftE = 5186920 >= subsJ.length;
      do {
          let x_positionT: Array<any> = [90, 532, 574];
          let resendp = String.fromCharCode(109,95,53,49,95,105,110,118,111,107,101,114,0);
          let tickedh = String.fromCharCode(115,110,97,112,95,112,95,56,49,0);
          let resultH = 0;
          let mathl = String.fromCharCode(118,95,51,51,95,115,119,97,98,0);
         subsJ.push((resendp == String.fromCharCode(79,0) ? resendp.length : x_positionT.length));
         x_positionT.push(resultH >> (Math.min(mathl.length, 1)));
         tickedh += `${resultH}`;
         mathl = `${mathl.length << (Math.min(2, tickedh.length))}`;
         if (leftE) {
            break;
         }
      } while (leftE && (!subsJ.includes(subsJ.length)));
          let notifications = false;
          let catagoryO = String.fromCharCode(118,105,98,114,97,116,105,111,110,95,117,95,49,54,0);
          let eactV = 5.0;
         subsJ = [subsJ.length];
         notifications = catagoryO.endsWith(`${eactV}`);
         catagoryO = `${catagoryO.length >> (Math.min(Math.abs(2), 1))}`;
         eactV += 1 / (Math.max(7, parseInt(`${eactV}`)));
      chartz = new Map([[`${circleJ}`, (bingH == String.fromCharCode(106,0) ? bingH.length : parseInt(`${circleJ}`))]]);
   for (let l = 0; l < 2; l++) {
       let dragA = true;
      for (let q = 0; q < 2; q++) {
          let textX = String.fromCharCode(102,95,57,50,95,114,115,116,114,105,112,0);
          let blacklistB = 1.0;
          let carouselo = false;
          let chatw = String.fromCharCode(103,101,110,101,114,97,108,95,101,95,55,0);
          let successX = String.fromCharCode(110,95,54,57,95,115,116,121,108,101,100,0);
         dragA = chatw.length <= 77 || dragA;
         textX += "2";
         blacklistB /= Math.max((String.fromCharCode(84,0) == successX ? parseInt(`${blacklistB}`) : successX.length), 1);
         carouselo = !carouselo && successX.length < 17;
         chatw = `${parseInt(`${blacklistB}`) % 1}`;
      }
      let searchbarc = dragA ? !dragA : dragA;
      do {
         dragA = !dragA;
         if (searchbarc) {
            break;
         }
      } while ((!dragA) && searchbarc);
         dragA = dragA && !dragA;
      paginationj += `${zhuboZ.length}`;
   }
   for (let c = 0; c < 1; c++) {
      fillQ = `${fillC}`;
   }
    return;
  };

  const checkConnection = async () => {
       let saveL: Array<any> = [408, 846, 990];
    let downloadedT: Array<any> = [141, 928, 843];
    let modalt = 2.0;
    let animationt = String.fromCharCode(114,97,110,100,95,106,95,51,49,0);
    let pressured = 2;
    let ewardedZ: Array<any> = [88, 906, 351];
    let emptyg = 3;
    let gestureV: Array<any> = [318, 482, 641];
    let gpayB = 3.0;
    let moviesv: Array<any> = [String.fromCharCode(116,95,56,56,95,112,97,103,101,104,97,115,104,0), String.fromCharCode(98,95,57,56,95,104,112,105,99,0)];
    let complete0 = String.fromCharCode(113,95,56,52,95,103,101,111,99,111,100,105,110,103,0);
    let fieldq = false;
    let bannerA: Array<any> = [358, 401, 567];
    let y_playerD = 2.0;
   let activek = ewardedZ.length <= 9777891;
   do {
      ewardedZ = [1];
      if (activek) {
         break;
      }
   } while (activek && (2.37 >= (4.5 / (Math.max(7, modalt))) || 5.42 >= (modalt / (Math.max(4.5, 8)))));
      moviesv = [pressured % (Math.max(saveL.length, 2))];
   let t_player5 = 5525051 <= saveL.length;
   do {
      saveL.push(emptyg & pressured);
      if (t_player5) {
         break;
      }
   } while ((!complete0.startsWith(`${saveL.length}`)) && t_player5);
       let diceA = String.fromCharCode(97,115,115,117,109,101,95,50,95,50,52,0);
       let currentn = 1.0;
       let fillF: Array<any> = [String.fromCharCode(98,95,51,57,95,109,97,116,99,104,101,115,0), String.fromCharCode(108,95,53,49,95,99,111,112,121,0)];
      let dataT = diceA == String.fromCharCode(99,48,106,115,97,114,112,110,0);
      do {
         diceA += `${parseInt(`${currentn}`)}`;
         if (dataT) {
            break;
         }
      } while (((fillF.length ^ 5) > 4) && dataT);
      for (let l = 0; l < 3; l++) {
         diceA += `${3 / (Math.max(parseInt(`${currentn}`), 2))}`;
      }
         diceA += `${fillF.length}`;
         currentn += 2;
         currentn /= Math.max(2, 2 ^ diceA.length);
      let bodanB = 8149023.0 <= currentn;
      do {
          let twittert = 3.0;
          let changex = String.fromCharCode(117,95,57,95,109,101,97,115,117,114,101,100,0);
          let data2 = 3;
         currentn *= 2 % (Math.max(7, data2));
         twittert -= parseInt(`${twittert}`);
         changex += `${(String.fromCharCode(104,0) == changex ? changex.length : parseInt(`${twittert}`))}`;
         data2 /= Math.max((changex == String.fromCharCode(118,0) ? changex.length : parseInt(`${twittert}`)), 1);
         if (bodanB) {
            break;
         }
      } while (bodanB && (diceA.length == 4));
         currentn /= Math.max(parseInt(`${currentn}`) / 1, 4);
         currentn -= 3;
         currentn -= fillF.length | 1;
      emptyg += moviesv.length;
       let transferW = String.fromCharCode(121,95,52,57,95,114,105,99,101,0);
         transferW += "1";
          let selectionb = String.fromCharCode(97,99,99,101,115,115,105,98,108,101,95,55,95,51,0);
         transferW += `${selectionb.length}`;
      if (transferW == transferW) {
         transferW = `${1 + transferW.length}`;
      }
      complete0 += `${downloadedT.length}`;
   while (3 >= (animationt.length | saveL.length)) {
      animationt += `${(String.fromCharCode(55,0) == complete0 ? saveL.length : complete0.length)}`;
      break;
   }
      modalt /= Math.max(parseFloat(`${3}`), 2);
   if ((ewardedZ.length * emptyg) >= 2 && (emptyg * 2) >= 5) {
      emptyg -= ewardedZ.length >> (Math.min(2, moviesv.length));
   }

    const state = await NetInfo.fetch();

      modalt *= parseFloat(`${parseInt(`${modalt}`) - downloadedT.length}`);
   while (2 == downloadedT.length) {
       let internetH = 3.0;
       let taiwanP = String.fromCharCode(99,111,109,112,111,117,110,100,95,101,95,56,51,0);
       let smallf = false;
       let leagueZ = String.fromCharCode(115,101,110,100,116,111,95,108,95,57,54,0);
       let lessC = 5;
         internetH -= taiwanP.length;
         leagueZ = "2";
      let banner3 = String.fromCharCode(111,52,120,107,121,50,97,0) == leagueZ;
      do {
         leagueZ = `${leagueZ.length}`;
         if (banner3) {
            break;
         }
      } while ((internetH > leagueZ.length) && banner3);
          let floater9 = String.fromCharCode(99,97,114,100,97,110,111,95,116,95,53,57,0);
          let tail3: Array<any> = [899, 545];
         smallf = floater9.length > taiwanP.length;
         floater9 = `${tail3.length}`;
         tail3.push(tail3.length);
         internetH *= leagueZ.length % 2;
         taiwanP = "1";
          let plashw = 4.0;
         lessC >>= Math.min(4, Math.abs(parseInt(`${internetH}`) << (Math.min(Math.abs(1), 5))));
         plashw /= Math.max(parseFloat(`${parseInt(`${plashw}`) + 2}`), 5);
      while (parseInt(`${internetH}`) > leagueZ.length) {
         internetH *= parseInt(`${internetH}`) / (Math.max(3, 4));
         break;
      }
      while (4 < (lessC % (Math.max(8, leagueZ.length)))) {
         leagueZ = `${(lessC >> (Math.min(1, Math.abs((smallf ? 1 : 3)))))}`;
         break;
      }
       let completey = String.fromCharCode(108,95,51,57,95,108,105,110,101,115,0);
       let membership9 = String.fromCharCode(110,101,101,100,115,95,105,95,50,51,0);
      for (let j = 0; j < 3; j++) {
         smallf = 97 > completey.length;
      }
          let settings0 = false;
          let ballT = 3.0;
          let infoU: Array<any> = [814, 52, 965];
         completey += "2";
         settings0 = (8 == (infoU.length | (!settings0 ? infoU.length : 8)));
         ballT += (parseFloat(`${infoU.length * (settings0 ? 2 : 1)}`));
       let gesturesE = false;
       let submit2 = true;
      let inactiveO = String.fromCharCode(53,95,55,0) == leagueZ;
      do {
          let guideh = 4;
         leagueZ += `${taiwanP.length | guideh}`;
         if (inactiveO) {
            break;
         }
      } while (inactiveO && (leagueZ.length == 4));
          let pausei = String.fromCharCode(117,116,120,111,115,95,105,95,57,55,0);
          let emptye = 4;
          let forwardn = true;
         leagueZ += `${membership9.length % 2}`;
         pausei += "1";
         emptye *= 3;
         forwardn = !forwardn;
      complete0 += `${ewardedZ.length}`;
      break;
   }
   while ((gestureV.length >> (Math.min(Math.abs(3), 5))) > 5) {
       let scoren = 2;
       let fasts = String.fromCharCode(100,95,57,48,95,112,100,115,0);
      while ((scoren | fasts.length) < 4) {
          let eighteenZ = false;
         scoren |= fasts.length & 2;
         eighteenZ = !eighteenZ;
         break;
      }
          let commenth = String.fromCharCode(115,105,122,101,108,101,115,115,95,118,95,57,51,0);
          let gmailX: Array<any> = [94, 746];
          let predictionV = String.fromCharCode(102,95,50,48,95,114,101,102,101,114,114,97,108,0);
         scoren ^= scoren * 2;
         commenth += `${commenth.length}`;
         gmailX = [commenth.length];
         predictionV = `${predictionV.length | commenth.length}`;
      if ((fasts.length | 4) < 4) {
          let n_countC = true;
          let vietnamJ = 2.0;
         scoren %= Math.max(2, 1);
         n_countC = vietnamJ >= vietnamJ;
      }
       let footballk = 4;
       let otherm = 1;
          let sina7 = true;
          let diceh = String.fromCharCode(106,95,56,53,95,108,105,110,103,101,114,0);
          let componentT = 0;
         otherm ^= componentT >> (Math.min(diceh.length, 4));
         sina7 = !sina7;
         diceh = `${((sina7 ? 1 : 4) ^ 2)}`;
      if ((4 & fasts.length) > 1) {
          let targetA = true;
         fasts += `${fasts.length & 1}`;
         targetA = !targetA;
      }
      gestureV = [(fasts == String.fromCharCode(106,0) ? fasts.length : ewardedZ.length)];
      break;
   }
       let actionsS: Array<any> = [59, 916];
       let downL = String.fromCharCode(106,95,57,50,95,99,111,115,105,103,110,97,116,111,114,105,101,115,0);
       let greym = String.fromCharCode(101,95,52,50,95,104,101,97,114,98,101,97,116,0);
          let pausea = 5.0;
          let screeni = 3;
         actionsS.push(parseInt(`${pausea}`) / (Math.max(3, 10)));
         pausea /= Math.max(2, screeni);
         downL = `${actionsS.length}`;
      moviesv.push(actionsS.length % (Math.max(gestureV.length, 4)));
   for (let t = 0; t < 3; t++) {
      pressured /= Math.max(parseInt(`${gpayB}`) & saveL.length, 4);
   }
       let albumm = true;
       let singaporeB = String.fromCharCode(108,105,98,116,103,118,111,105,112,95,106,95,57,49,0);
          let submitY = String.fromCharCode(98,95,57,56,95,114,97,100,105,97,108,0);
          let hookj = String.fromCharCode(100,105,115,112,111,115,97,98,108,101,115,95,50,95,55,49,0);
         singaporeB += `${hookj.length - submitY.length}`;
      let type_qI = albumm ? !albumm : albumm;
      do {
         albumm = (50 < (singaporeB.length ^ (albumm ? singaporeB.length : 50)));
         if (type_qI) {
            break;
         }
      } while ((!albumm) && type_qI);
         singaporeB += `${3 ^ singaporeB.length}`;
          let homeo: Map<any, any> = new Map([[String.fromCharCode(107,110,111,99,107,111,117,116,95,99,95,51,51,0),418], [String.fromCharCode(108,95,55,49,95,102,114,101,101,100,111,109,0),865]]);
          let moduleB = String.fromCharCode(115,117,112,112,108,121,95,56,95,52,51,0);
          let yellowh = 4.0;
         singaporeB += `${homeo.size ^ parseInt(`${yellowh}`)}`;
         homeo = new Map([[moduleB, moduleB.length | 3]]);
          let internetC = String.fromCharCode(103,119,101,105,95,48,95,55,50,0);
         albumm = internetC.length > 58 && albumm;
       let bootsplashr = String.fromCharCode(102,95,51,55,95,100,105,118,105,100,111,114,115,0);
       let expiredf = String.fromCharCode(111,95,50,48,95,103,101,110,101,114,105,99,0);
      gpayB += parseFloat(`${2 * parseInt(`${gpayB}`)}`);
   while (4 > (5 * ewardedZ.length) || (5 * ewardedZ.length) > 2) {
      gestureV.push(parseInt(`${modalt}`));
      break;
   }
      complete0 += `${3 - complete0.length}`;
    const offline = !(state.isConnected && state.isInternetReachable);

   for (let z = 0; z < 1; z++) {
      moviesv.push(parseInt(`${modalt}`) % 3);
   }
   for (let j = 0; j < 3; j++) {
      downloadedT = [1];
   }
   while (!ewardedZ.includes(saveL.length)) {
       let photoF = 2.0;
       let models6 = String.fromCharCode(97,115,115,101,114,116,95,100,95,52,54,0);
       let halfo = 5.0;
       let bodanf: Map<any, any> = new Map([[String.fromCharCode(97,103,97,116,101,95,97,95,56,54,0),596], [String.fromCharCode(117,95,54,56,95,105,116,120,102,109,0),320]]);
       let statisticsL = false;
      let telegramD = 6342797.0 <= photoF;
      do {
         photoF /= Math.max(parseFloat(`${1 - models6.length}`), 5);
         if (telegramD) {
            break;
         }
      } while ((parseInt(`${photoF}`) >= models6.length) && telegramD);
      if (5 >= (bodanf.size * parseInt(`${halfo}`)) && 5.69 >= (halfo * 5.28)) {
         bodanf = new Map([[`${bodanf.size}`, 2 >> (Math.min(4, Math.abs(parseInt(`${photoF}`))))]]);
      }
      if (2.30 >= (photoF * parseFloat(`${bodanf.size}`)) || (bodanf.size / 1) >= 4) {
         photoF += parseFloat(`${parseInt(`${photoF}`) << (Math.min(Math.abs(bodanf.size), 1))}`);
      }
         models6 = `${parseInt(`${halfo}`) | models6.length}`;
      while ((2 + bodanf.size) >= 4 && 2 >= bodanf.size) {
          let winda = String.fromCharCode(105,108,111,103,95,118,95,54,54,0);
         bodanf = new Map([[models6, (models6.length - (statisticsL ? 4 : 4))]]);
         winda = `${(String.fromCharCode(111,0) == winda ? winda.length : winda.length)}`;
         break;
      }
       let albumn: Map<any, any> = new Map([[String.fromCharCode(99,95,51,54,95,108,101,97,102,110,111,100,101,0),String.fromCharCode(106,95,55,57,95,109,97,116,114,105,120,102,0)], [String.fromCharCode(114,95,52,55,95,115,99,111,114,101,115,0),String.fromCharCode(112,101,114,109,101,97,116,101,95,113,95,49,56,0)]]);
       let description_gtO: Map<any, any> = new Map([[String.fromCharCode(98,114,105,100,103,105,110,103,95,112,95,51,55,0),803], [String.fromCharCode(105,110,116,101,114,112,111,108,95,101,95,52,54,0),587], [String.fromCharCode(105,95,57,55,95,97,114,114,97,110,103,101,100,0),853]]);
         models6 += `${2 >> (Math.min(5, Math.abs(parseInt(`${photoF}`))))}`;
         photoF += parseFloat(`${bodanf.size}`);
         photoF -= parseFloat(`${3 * albumn.size}`);
          let flyero = String.fromCharCode(97,112,112,118,101,121,111,114,95,52,95,54,48,0);
          let updatesL: Map<any, any> = new Map([[String.fromCharCode(112,103,115,122,95,107,95,49,52,0),624], [String.fromCharCode(97,110,99,105,108,108,97,114,121,95,51,95,56,53,0),839], [String.fromCharCode(111,112,97,113,117,101,95,48,95,49,53,0),983]]);
         albumn = new Map([[`${photoF}`, models6.length]]);
         flyero = `${2 >> (Math.min(2, Math.abs(updatesL.size)))}`;
         updatesL = new Map([[`${updatesL.size}`, flyero.length]]);
         photoF *= parseFloat(`${2}`);
       let username_ = 1.0;
         username_ += parseFloat(`${description_gtO.size}`);
          let projects = true;
         bodanf = new Map([[`${halfo}`, 3]]);
         projects = !projects;
      while (bodanf.size >= 5) {
         bodanf = new Map([[`${photoF}`, parseInt(`${photoF}`) / (Math.max(parseInt(`${username_}`), 1))]]);
         break;
      }
      saveL.push(pressured);
      break;
   }
   if (ewardedZ.includes(emptyg)) {
       let floaterQ = false;
       let shared = String.fromCharCode(115,116,114,115,101,112,95,100,95,55,48,0);
       let logout5: Array<any> = [838, 563];
       let gpays = 2;
       let backgroundn = 4.0;
      while (!floaterQ) {
         floaterQ = !floaterQ;
         break;
      }
      while (floaterQ) {
         shared += `${logout5.length | gpays}`;
         break;
      }
       let form4: Array<any> = [429, 268, 379];
       let reportT: Array<any> = [String.fromCharCode(118,109,115,108,95,116,95,56,54,0), String.fromCharCode(105,116,115,101,108,102,95,107,95,53,56,0), String.fromCharCode(105,95,56,54,95,115,117,98,116,114,97,99,116,105,110,103,0)];
      let bellE = shared.length >= 8892421;
      do {
          let friendsK = String.fromCharCode(112,97,103,105,110,97,116,105,111,110,95,48,95,55,56,0);
         shared += `${2 << (Math.min(5, form4.length))}`;
         friendsK = `${friendsK.length}`;
         if (bellE) {
            break;
         }
      } while ((2 >= (shared.length & 2)) && bellE);
         logout5.push(1 / (Math.max(5, form4.length)));
      if ((reportT.length + 2) <= 2 && 2 <= (logout5.length + reportT.length)) {
          let chinaS = true;
          let hookF = false;
          let switch_zu = 1.0;
         reportT.push(3);
         chinaS = !chinaS;
         hookF = (hookF ? chinaS : !hookF);
         switch_zu *= (parseFloat(`${(chinaS ? 4 : 2) + 3}`));
      }
         shared += `${parseInt(`${backgroundn}`)}`;
      let inviteD = backgroundn <= 5287198.0;
      do {
         backgroundn += parseFloat(`${2}`);
         if (inviteD) {
            break;
         }
      } while (inviteD && (3.90 == (backgroundn * 2.73) || (backgroundn * 2.73) == 1.21));
         logout5 = [3 >> (Math.min(2, shared.length))];
         floaterQ = form4.length >= reportT.length;
         backgroundn += parseFloat(`${gpays | reportT.length}`);
      while (floaterQ) {
         shared = `${gpays}`;
         break;
      }
         backgroundn += parseFloat(`${form4.length}`);
      let videoT = gpays <= 5168011;
      do {
         gpays |= parseInt(`${backgroundn}`);
         if (videoT) {
            break;
         }
      } while (videoT && ((shared.length / (Math.max(3, 7))) < 5 || (shared.length / 3) < 3));
         logout5.push(3);
      emptyg *= complete0.length;
   }
   for (let m = 0; m < 1; m++) {
      emptyg <<= Math.min(Math.abs(parseInt(`${gpayB}`) << (Math.min(1, Math.abs(3)))), 4);
   }
      saveL = [downloadedT.length];
   while (parseFloat(`${gestureV.length}`) < modalt) {
      modalt /= Math.max(2, parseFloat(`${3}`));
      break;
   }
   if (downloadedT.includes(saveL.length)) {
       let watchY = true;
       let themeL = true;
       let expandn = false;
         themeL = (watchY ? themeL : watchY);
         expandn = themeL;
      saveL.push(downloadedT.length + 1);
   }
    setIsOffline(offline);

      downloadedT = [gestureV.length - 2];
   let backgrounda = 6239216.0 <= gpayB;
   do {
      gpayB *= parseFloat(`${3}`);
      if (backgrounda) {
         break;
      }
   } while (((gpayB - pressured) > 3.45) && backgrounda);
   if ((ewardedZ.length + parseInt(`${modalt}`)) >= 2) {
      modalt += parseFloat(`${3 + parseInt(`${modalt}`)}`);
   }
      ewardedZ.push(1);
   let lessP = 5001899 >= complete0.length;
   do {
      complete0 += `${pressured}`;
      if (lessP) {
         break;
      }
   } while (lessP && (5 <= (complete0.length * gestureV.length) || 1 <= (5 * gestureV.length)));
   for (let o = 0; o < 2; o++) {
      modalt += parseFloat(`${parseInt(`${modalt}`) - gestureV.length}`);
   }
   let settingd = complete0 == String.fromCharCode(112,52,103,102,0);
   do {
      complete0 += `${(complete0 == String.fromCharCode(85,0) ? pressured : complete0.length)}`;
      if (settingd) {
         break;
      }
   } while ((moviesv.length >= complete0.length) && settingd);
   let targetG = ewardedZ.length >= 7859657;
   do {
      ewardedZ.push(animationt.length - saveL.length);
      if (targetG) {
         break;
      }
   } while (((5 ^ downloadedT.length) < 4 || 3 < (downloadedT.length ^ 5)) && targetG);
    if (!offline) {

   while (ewardedZ.includes(pressured)) {
       let rewindh = String.fromCharCode(112,95,53,56,95,110,117,109,112,97,100,0);
       let searchL = 2;
       let album5 = 0;
       let championB = 4.0;
       let verticalv: Array<any> = [773, 881, 326];
       let shrink6 = 1;
      if (3 < (rewindh.length - 5) || (5 - album5) < 1) {
          let humidityd = true;
          let country1 = String.fromCharCode(112,95,56,56,95,109,98,115,101,103,109,101,110,116,97,116,105,111,110,0);
          let vietnam_ = String.fromCharCode(117,109,105,100,95,118,95,56,57,0);
         rewindh += `${country1.length}`;
         humidityd = vietnam_.length < 95 || humidityd;
         country1 += `${(3 * (humidityd ? 4 : 2))}`;
         vietnam_ = `${(String.fromCharCode(74,0) == vietnam_ ? (humidityd ? 5 : 5) : vietnam_.length)}`;
      }
         rewindh = `${verticalv.length}`;
       let arrowX = 3;
         rewindh += `${searchL / 1}`;
      while (2 >= (verticalv.length - parseInt(`${championB}`)) || (2 ^ verticalv.length) >= 1) {
          let progressK: Array<any> = [String.fromCharCode(118,95,53,56,95,109,115,109,112,101,103,0), String.fromCharCode(100,101,112,116,104,95,111,95,57,49,0), String.fromCharCode(97,98,115,116,95,120,95,52,49,0)];
          let gestureO = false;
          let loadingd = String.fromCharCode(104,95,55,50,95,103,105,102,0);
          let register_sf: Map<any, any> = new Map([[String.fromCharCode(116,114,97,106,101,99,116,111,114,121,95,109,95,56,52,0),108], [String.fromCharCode(119,114,105,116,101,98,105,116,115,95,49,95,57,49,0),475], [String.fromCharCode(112,111,111,108,115,95,48,95,57,53,0),17]]);
          let internet1: Map<any, any> = new Map([[String.fromCharCode(122,101,116,97,95,121,95,49,50,0),false ], [String.fromCharCode(112,97,99,107,101,116,111,117,116,95,106,95,52,0),false ]]);
         verticalv.push(progressK.length * arrowX);
         progressK.push(((gestureO ? 2 : 1) >> (Math.min(Math.abs(register_sf.size), 1))));
         gestureO = !loadingd.includes(`${gestureO}`);
         loadingd += `${loadingd.length}`;
         register_sf = new Map([[loadingd, (1 ^ (gestureO ? 4 : 3))]]);
         internet1 = new Map([[`${register_sf.size}`, 3 | register_sf.size]]);
         break;
      }
      let gifto = 7251675 <= verticalv.length;
      do {
         verticalv.push(1 % (Math.max(10, verticalv.length)));
         if (gifto) {
            break;
         }
      } while ((verticalv.length <= 2) && gifto);
      while (1 > (2 >> (Math.min(2, rewindh.length))) || (rewindh.length >> (Math.min(1, Math.abs(arrowX)))) > 2) {
         rewindh = `${searchL << (Math.min(Math.abs(3), 3))}`;
         break;
      }
      while (3 > album5) {
         championB += album5 ^ parseInt(`${championB}`);
         break;
      }
      let alertt = championB <= 5654511.0;
      do {
          let homeA = 0;
          let privacyv = 4;
         championB += arrowX * 3;
         homeA *= 2;
         privacyv ^= homeA;
         if (alertt) {
            break;
         }
      } while (alertt && ((4 + searchL) <= 5 && 4.95 <= (championB - 4.51)));
      while (5 >= (3 + shrink6)) {
          let dialogs = 1.0;
          let carouselB = 2.0;
          let upgradep = true;
          let shirtK = 1;
          let thumbnailY = String.fromCharCode(115,113,108,95,55,95,54,51,0);
         rewindh = `${arrowX % (Math.max(6, parseInt(`${dialogs}`)))}`;
         dialogs /= Math.max((parseInt(`${carouselB}`) * (upgradep ? 2 : 4)), 1);
         carouselB /= Math.max(3 << (Math.min(2, Math.abs(shirtK))), 4);
         upgradep = (((!upgradep ? 7 : thumbnailY.length) | thumbnailY.length) > 7);
         shirtK ^= 1;
         break;
      }
      while (1 <= (rewindh.length % 1)) {
         shrink6 |= 2 & shrink6;
         break;
      }
         arrowX /= Math.max(parseInt(`${championB}`) / 3, 2);
         championB *= arrowX;
         rewindh = "1 & album5";
      pressured *= rewindh.length * 3;
      break;
   }
   if (complete0.includes(`${pressured}`)) {
      pressured ^= animationt.length;
   }
   for (let f = 0; f < 3; f++) {
      modalt /= Math.max(parseFloat(`${ewardedZ.length + 2}`), 5);
   }
       let trashd = String.fromCharCode(110,111,101,120,112,95,118,95,51,0);
         trashd += `${(trashd == String.fromCharCode(83,0) ? trashd.length : trashd.length)}`;
      if (trashd.length == 1) {
         trashd = `${trashd.length}`;
      }
      for (let o = 0; o < 3; o++) {
         trashd = `${1 << (Math.min(4, trashd.length))}`;
      }
      ewardedZ.push((1 ^ (fieldq ? 3 : 3)));
      ewardedZ = [moviesv.length & animationt.length];
       let shoot6 = 0;
      while (shoot6 < shoot6) {
          let fastT: Array<any> = [759, 372];
          let gesturesI: Map<any, any> = new Map([[String.fromCharCode(110,95,54,53,95,100,105,97,108,111,103,115,0),String.fromCharCode(121,95,50,50,95,115,117,98,115,101,108,101,99,116,0)], [String.fromCharCode(105,95,57,55,95,97,118,103,120,0),String.fromCharCode(101,110,99,111,100,97,98,108,101,115,95,54,95,49,48,48,0)], [String.fromCharCode(118,111,114,98,105,115,102,108,111,97,116,102,108,111,97,116,95,120,95,54,0),String.fromCharCode(102,117,110,99,115,95,105,95,52,48,0)]]);
         shoot6 -= gesturesI.size;
         fastT = [fastT.length];
         gesturesI = new Map([[`${fastT.length}`, 1]]);
         break;
      }
          let footballl = 2.0;
          let stationsI = 0;
          let plashW = 0;
         shoot6 -= shoot6;
         footballl *= parseFloat(`${2}`);
         stationsI <<= Math.min(5, Math.abs(plashW));
         plashW *= parseInt(`${footballl}`);
       let a_titlez = String.fromCharCode(105,115,101,120,112,108,97,105,110,95,97,95,55,56,0);
      bannerA.push(pressured * 3);
       let bingc: Array<any> = [410, 147, 699];
       let layoutJ = 2;
       let usernameV = String.fromCharCode(104,95,55,53,95,110,111,116,99,104,101,100,0);
      for (let b = 0; b < 2; b++) {
         layoutJ &= layoutJ + bingc.length;
      }
      while (3 <= layoutJ) {
          let reportY = true;
          let pingl = 4;
         bingc = [layoutJ];
         reportY = pingl == 17 || reportY;
         pingl &= pingl;
         break;
      }
       let profileC = String.fromCharCode(100,95,49,95,101,112,101,108,0);
       let controls7 = 5.0;
          let expiredZ = 5;
          let brightnessf = 4.0;
         usernameV = `${bingc.length + layoutJ}`;
         expiredZ -= 1;
         brightnessf += parseFloat(`${2}`);
          let tempI = String.fromCharCode(109,101,116,97,115,111,117,110,100,95,55,95,57,49,0);
          let casting7 = 5;
          let specJ = 0.0;
         profileC = `${3 + layoutJ}`;
         tempI += `${casting7 % (Math.max(7, tempI.length))}`;
         casting7 >>= Math.min(5, Math.abs(casting7));
         specJ += casting7;
      let successA = 5128466 <= bingc.length;
      do {
         bingc.push(3 ^ layoutJ);
         if (successA) {
            break;
         }
      } while ((!bingc.includes(layoutJ)) && successA);
      if (5 > (5 ^ usernameV.length)) {
         usernameV += "2";
      }
       let hooksJ = false;
      emptyg += gestureV.length;
       let memberT = true;
         memberT = (!memberT ? !memberT : !memberT);
         memberT = (memberT ? memberT : memberT);
         memberT = (memberT ? memberT : !memberT);
      complete0 += `${bannerA.length}`;
      handleRefresh();
    }
  };

  useEffect(() => {
    const removeNetInfoSubscription = NetInfo.addEventListener(
      (state: NetInfoState) => {
        const offline = !(
          state.isConnected &&
          (state.isInternetReachable === true ||
            state.isInternetReachable === null
            ? true
            : false)
        );
        setIsOffline(offline);
      }
    );
    return () => removeNetInfoSubscription();
  }, []);

  const webViewref = useRef<any>();
  useEffect(() => {
    webViewref.current.reload();
  }, [userState.user?.userToken]);

  const onLoadEnd = () => {
       let robotoK = 4.0;
    let benefitW: Map<any, any> = new Map([[String.fromCharCode(98,97,99,107,101,100,95,103,95,53,52,0),true ], [String.fromCharCode(122,95,51,50,95,114,101,112,108,105,101,114,115,0),false ]]);
    let ping0 = String.fromCharCode(115,97,118,101,112,111,105,110,116,95,116,95,55,0);
    let selecto: Map<any, any> = new Map([[String.fromCharCode(100,95,55,49,95,112,114,111,112,0),305], [String.fromCharCode(101,95,55,55,95,115,117,98,115,97,109,112,108,101,0),112], [String.fromCharCode(102,95,51,52,95,115,111,102,116,0),345]]);
    let weiboq = 1;
    let upload1 = true;
    let overlay1 = String.fromCharCode(110,95,55,52,95,97,115,115,111,99,105,97,116,101,100,0);
    let favoriteh = 2.0;
    let incidentT = 0.0;
    let connectiont = String.fromCharCode(116,95,56,55,95,114,101,99,111,118,101,114,0);
    let feedbackP: Map<any, any> = new Map([[String.fromCharCode(100,95,49,50,95,100,98,115,105,122,101,0),885], [String.fromCharCode(105,110,116,101,103,101,114,115,95,114,95,49,0),492], [String.fromCharCode(105,95,49,48,95,112,108,97,121,0),538]]);
    let uploade = false;
    let halfq = 4;
    let orientationt = 0;
    let filed3: Array<any> = [8, 503];
   let unreadR = 7496762.0 <= incidentT;
   do {
       let service1: Map<any, any> = new Map([[String.fromCharCode(121,95,53,52,95,101,120,112,114,108,105,115,116,0),688], [String.fromCharCode(107,95,56,52,95,109,100,104,100,0),88]]);
       let smallI = String.fromCharCode(97,101,115,111,112,116,95,103,95,54,56,0);
       let heartp = true;
       let gestureso = String.fromCharCode(112,111,108,108,105,110,103,95,102,95,53,49,0);
          let shrinkE = true;
         heartp = service1.size <= smallI.length;
         shrinkE = (!shrinkE ? shrinkE : !shrinkE);
         heartp = !smallI.endsWith(`${heartp}`);
          let goal_ = 5;
         smallI = `${gestureso.length}`;
         goal_ |= 3 % (Math.max(6, goal_));
         service1.set(smallI, 2);
         smallI = `${2 * gestureso.length}`;
          let register_br = false;
         smallI = `${((heartp ? 1 : 4) | 1)}`;
         register_br = (!register_br ? register_br : register_br);
       let stationx = false;
      let submitO = String.fromCharCode(114,110,103,121,101,109,98,0) == gestureso;
      do {
         gestureso += `${smallI.length}`;
         if (submitO) {
            break;
         }
      } while (submitO && (heartp));
      let alertx = heartp ? !heartp : heartp;
      do {
         heartp = !smallI.startsWith(`${stationx}`);
         if (alertx) {
            break;
         }
      } while (alertx && (!smallI.endsWith(`${heartp}`)));
      while (service1.size >= 1 || (service1.size | 1) >= 1) {
          let storeb = 3;
         service1 = new Map([[`${service1.size}`, ((stationx ? 3 : 1) / (Math.max(service1.size, 2)))]]);
         storeb %= Math.max(storeb, 1);
         break;
      }
         heartp = service1.size == 22 || 22 == smallI.length;
      let pageF = stationx ? !stationx : stationx;
      do {
         stationx = null == service1.get(`${stationx}`);
         if (pageF) {
            break;
         }
      } while (pageF && (heartp));
      incidentT *= parseFloat(`${benefitW.size}`);
      if (unreadR) {
         break;
      }
   } while ((!upload1 && 1.3 == (incidentT / 1.81)) && unreadR);
       let flyerz = 4.0;
       let checkboxO: Array<any> = [168, 702, 701];
      let xvodn = 6678197.0 <= flyerz;
      do {
         flyerz /= Math.max(3, parseFloat(`${1 >> (Math.min(1, checkboxO.length))}`));
         if (xvodn) {
            break;
         }
      } while (xvodn && ((5.70 * flyerz) <= 1.78 && 5 <= (parseInt(`${flyerz}`) * checkboxO.length)));
      while ((2 | checkboxO.length) == 2) {
          let targetk: Array<any> = [71, 437, 379];
          let typesV: Array<any> = [149, 881];
         flyerz -= parseFloat(`${2}`);
         targetk.push(targetk.length << (Math.min(Math.abs(1), 3)));
         typesV = [typesV.length];
         break;
      }
      for (let k = 0; k < 3; k++) {
          let commentz = String.fromCharCode(99,95,54,55,95,101,112,122,115,0);
         checkboxO = [2];
         commentz = `${commentz.length}`;
      }
         checkboxO.push(checkboxO.length);
      let friends7 = 6328304 >= checkboxO.length;
      do {
         checkboxO.push(parseInt(`${flyerz}`) / (Math.max(checkboxO.length, 5)));
         if (friends7) {
            break;
         }
      } while ((!checkboxO.includes(flyerz)) && friends7);
         flyerz *= parseFloat(`${checkboxO.length + 2}`);
      incidentT *= parseFloat(`${1}`);
      overlay1 += "3";
   for (let m = 0; m < 1; m++) {
       let iconn = false;
       let linkl = String.fromCharCode(114,101,115,117,109,101,95,118,95,54,52,0);
       let middle8 = 3.0;
       let reducerD = true;
       let frame_k9 = 4.0;
      while (2.78 < frame_k9) {
          let sendc = String.fromCharCode(105,110,115,116,97,108,108,115,95,97,95,54,50,0);
          let crossp: Array<any> = [827, 120];
          let sans9 = false;
          let shirtZ = String.fromCharCode(99,117,109,101,95,97,95,53,51,0);
          let membershipZ = String.fromCharCode(111,117,116,115,105,100,101,95,99,95,49,48,48,0);
         frame_k9 /= Math.max(parseFloat(`${crossp.length ^ 2}`), 3);
         sendc = "3";
         crossp = [1];
         sans9 = sendc == String.fromCharCode(90,0);
         shirtZ = `${shirtZ.length + membershipZ.length}`;
         membershipZ += `${sendc.length % (Math.max(3, 4))}`;
         break;
      }
      if (reducerD || linkl.length >= 3) {
         linkl += `${((reducerD ? 2 : 1) * parseInt(`${middle8}`))}`;
      }
         reducerD = 40.93 > frame_k9;
         middle8 += ((reducerD ? 4 : 2) % (Math.max(parseInt(`${middle8}`), 4)));
      let buffer2 = linkl == String.fromCharCode(48,110,110,51,114,108,121,115,0);
      do {
         linkl = `${linkl.length}`;
         if (buffer2) {
            break;
         }
      } while (buffer2 && (2.70 <= (frame_k9 * 2.99) || 4.60 <= (2.99 * frame_k9)));
         frame_k9 -= parseFloat(`${parseInt(`${frame_k9}`)}`);
         frame_k9 += parseFloat(`${2}`);
      for (let j = 0; j < 3; j++) {
          let reminderp = String.fromCharCode(101,115,115,105,111,110,95,102,95,51,54,0);
         iconn = !reducerD;
         reminderp += `${(reminderp == String.fromCharCode(74,0) ? reminderp.length : reminderp.length)}`;
      }
          let hongkongK = true;
          let placeholderJ = 0.0;
         iconn = !iconn || placeholderJ <= 59.92;
         hongkongK = (hongkongK ? hongkongK : !hongkongK);
         placeholderJ += (parseFloat(`${(hongkongK ? 3 : 4) >> (Math.min(Math.abs((hongkongK ? 3 : 1)), 1))}`));
      while (!iconn) {
         reducerD = frame_k9 >= 57.42;
         break;
      }
         iconn = linkl == String.fromCharCode(97,0) && 10.78 == frame_k9;
      let injuryn = 8224944.0 <= middle8;
      do {
          let groupt = String.fromCharCode(100,105,115,116,97,110,99,101,95,100,95,49,53,0);
         middle8 -= 1;
         groupt += `${(String.fromCharCode(119,0) == groupt ? groupt.length : groupt.length)}`;
         if (injuryn) {
            break;
         }
      } while ((3.10 >= (linkl.length * middle8) || 3 >= (2 | linkl.length)) && injuryn);
         frame_k9 += (parseFloat(`${parseInt(`${middle8}`) - (iconn ? 2 : 5)}`));
      while ((4.56 * frame_k9) <= 1.65 && iconn) {
          let minivod1 = String.fromCharCode(105,110,118,101,114,118,97,108,95,101,95,53,56,0);
          let arrowW = String.fromCharCode(109,95,55,56,95,112,114,101,101,109,112,116,105,118,101,0);
          let promotionu = 2.0;
          let actionB = 2.0;
          let backgroundN = true;
         frame_k9 /= Math.max(5, parseFloat(`${linkl.length}`));
         minivod1 = `${((backgroundN ? 2 : 4) << (Math.min(Math.abs(parseInt(`${actionB}`)), 5)))}`;
         arrowW += `${((backgroundN ? 1 : 1) - 3)}`;
         promotionu *= 3;
         actionB /= Math.max(2, parseFloat(`${3 & parseInt(`${actionB}`)}`));
         break;
      }
      while (!reducerD || iconn) {
         reducerD = !iconn;
         break;
      }
      selecto.set(`${reducerD}`, ((reducerD ? 4 : 3) - (upload1 ? 3 : 2)));
   }
      robotoK += connectiont.length;
      upload1 = !connectiont.endsWith(`${upload1}`);
   let questI = weiboq <= 6910207;
   do {
      weiboq <<= Math.min(4, Math.abs(parseInt(`${robotoK}`)));
      if (questI) {
         break;
      }
   } while (questI && ((weiboq - favoriteh) >= 4.46));
   while (4.57 > (1.2 - favoriteh) || (1.2 - favoriteh) > 1.36) {
       let logout8 = 1.0;
      for (let g = 0; g < 1; g++) {
         logout8 -= parseInt(`${logout8}`) * parseInt(`${logout8}`);
      }
          let bannerz = String.fromCharCode(102,101,116,99,104,101,114,95,53,95,49,52,0);
          let helper1: Array<any> = [644, 684, 424];
         logout8 += bannerz.length * helper1.length;
      let clearI = 8408283.0 <= logout8;
      do {
         logout8 += parseInt(`${logout8}`) + parseInt(`${logout8}`);
         if (clearI) {
            break;
         }
      } while ((logout8 > logout8) && clearI);
      feedbackP = new Map([[`${uploade}`, ((uploade ? 2 : 3) ^ parseInt(`${robotoK}`))]]);
      break;
   }
   while (overlay1.endsWith(`${robotoK}`)) {
      robotoK /= Math.max(5, 1);
      break;
   }
   let gpayt = 8164693 <= connectiont.length;
   do {
      connectiont = `${ping0.length}`;
      if (gpayt) {
         break;
      }
   } while (((connectiont.length * 1) <= 3) && gpayt);
       let clubR = true;
       let langkey2 = true;
       let paginationf = 5;
       let gemfileY = 1;
       let icons = 4.0;
       let textQ = 0.0;
         clubR = 20 < paginationf && !clubR;
      if (langkey2) {
         langkey2 = gemfileY <= paginationf;
      }
          let filedN = String.fromCharCode(105,95,49,55,95,107,101,121,0);
          let transfert = 2.0;
         textQ -= parseFloat(`${3}`);
         filedN = "3";
         transfert *= parseFloat(`${2}`);
       let textt: Map<any, any> = new Map([[String.fromCharCode(112,97,114,115,101,117,116,105,108,115,95,50,95,55,57,0),true ], [String.fromCharCode(105,110,116,101,114,114,117,112,116,105,111,110,95,54,95,55,52,0),true ]]);
      feedbackP.set(ping0, ping0.length * 1);
   let searchbary = favoriteh <= 9537157.0;
   do {
      favoriteh -= parseFloat(`${benefitW.size}`);
      if (searchbary) {
         break;
      }
   } while (searchbary && (uploade));
       let incident3 = String.fromCharCode(112,114,101,102,101,114,101,110,99,101,115,95,115,95,54,49,0);
       let banner2 = String.fromCharCode(98,121,114,121,105,95,116,95,52,50,0);
       let rewindn = String.fromCharCode(102,95,50,55,95,101,110,116,101,114,105,110,103,0);
      while (incident3.length < 1) {
         incident3 += `${(rewindn == String.fromCharCode(113,0) ? rewindn.length : banner2.length)}`;
         break;
      }
         banner2 = `${rewindn.length}`;
      let borderlesse = 8469018 >= banner2.length;
      do {
         banner2 = `${incident3.length}`;
         if (borderlesse) {
            break;
         }
      } while ((incident3 == String.fromCharCode(122,0) && banner2 == String.fromCharCode(48,0)) && borderlesse);
      let headert = incident3.length >= 9814017;
      do {
         incident3 += `${banner2.length >> (Math.min(incident3.length, 3))}`;
         if (headert) {
            break;
         }
      } while (headert && (banner2.includes(`${incident3.length}`)));
       let thumbnailS = String.fromCharCode(98,95,53,56,95,115,101,114,105,97,108,105,122,105,110,103,0);
       let yingY = String.fromCharCode(112,111,115,116,105,110,103,95,56,95,51,0);
      for (let p = 0; p < 2; p++) {
         banner2 = `${thumbnailS.length}`;
      }
         banner2 += `${banner2.length >> (Math.min(rewindn.length, 4))}`;
          let sheetU = 4.0;
          let heartq = String.fromCharCode(117,95,51,48,95,111,110,101,108,105,110,101,0);
         incident3 = `${rewindn.length}`;
         sheetU -= (heartq == String.fromCharCode(108,0) ? heartq.length : parseInt(`${sheetU}`));
         thumbnailS = `${banner2.length % (Math.max(2, 1))}`;
      uploade = 70 < weiboq;
       let reminderpU = 4.0;
      if (reminderpU <= reminderpU) {
         reminderpU *= parseFloat(`${parseInt(`${reminderpU}`) / 2}`);
      }
         reminderpU += parseFloat(`${parseInt(`${reminderpU}`)}`);
      while (1.35 < (3.34 / (Math.max(2, reminderpU)))) {
          let whatsappA: Map<any, any> = new Map([[String.fromCharCode(97,121,98,114,95,50,95,51,52,0),855], [String.fromCharCode(104,95,53,48,95,102,108,111,99,107,0),102], [String.fromCharCode(105,110,115,116,95,103,95,54,50,0),344]]);
          let castU: Array<any> = [500, 999, 253];
          let otherX = String.fromCharCode(109,95,54,51,95,115,101,113,110,111,0);
         reminderpU /= Math.max((parseFloat(`${otherX == String.fromCharCode(110,0) ? otherX.length : parseInt(`${reminderpU}`)}`)), 1);
         whatsappA.set(`${castU.length}`, 1 * castU.length);
         break;
      }
      overlay1 = `${parseInt(`${incidentT}`) & 1}`;
   for (let g = 0; g < 1; g++) {
      feedbackP = new Map([[`${benefitW.size}`, 3]]);
   }
      overlay1 = `${weiboq}`;
   for (let r = 0; r < 1; r++) {
      ping0 += `${selecto.size}`;
   }
   let othert = 8844027 >= orientationt;
   do {
       let currentW = 1.0;
       let combinedB: Array<any> = [String.fromCharCode(98,95,49,54,95,114,101,100,105,114,101,99,116,105,111,110,0), String.fromCharCode(122,99,111,110,118,111,108,118,101,95,112,95,55,51,0), String.fromCharCode(120,95,49,50,95,115,116,114,102,117,110,99,0)];
          let championy = true;
          let filledf: Map<any, any> = new Map([[String.fromCharCode(108,97,117,110,99,104,101,114,95,105,95,56,48,0),593], [String.fromCharCode(119,95,52,57,95,108,111,103,103,101,114,115,0),623]]);
          let photoI = String.fromCharCode(122,95,57,52,95,97,100,118,97,110,99,101,109,101,110,116,0);
         currentW += parseFloat(`${2}`);
         championy = !championy;
         filledf = new Map([[`${championy}`, photoI.length]]);
         photoI = `${3 << (Math.min(1, Math.abs(filledf.size)))}`;
         currentW /= Math.max(parseFloat(`${combinedB.length % 2}`), 5);
          let progress1 = String.fromCharCode(106,95,50,51,95,97,99,107,115,0);
          let combinedU = 1.0;
         combinedB = [(progress1 == String.fromCharCode(102,0) ? parseInt(`${combinedU}`) : progress1.length)];
         currentW -= parseFloat(`${parseInt(`${currentW}`) >> (Math.min(4, Math.abs(1)))}`);
         currentW -= parseFloat(`${parseInt(`${currentW}`)}`);
          let actionu = String.fromCharCode(101,98,117,114,95,112,95,52,48,0);
          let sportM: Map<any, any> = new Map([[String.fromCharCode(119,95,53,53,95,111,115,115,108,0),String.fromCharCode(122,101,114,111,101,100,95,112,95,51,51,0)], [String.fromCharCode(109,95,50,50,95,99,108,97,115,115,105,102,121,0),String.fromCharCode(104,95,56,48,95,97,99,116,105,118,97,116,105,111,110,0)], [String.fromCharCode(115,111,99,107,115,95,117,95,55,51,0),String.fromCharCode(103,95,49,53,95,97,114,101,116,104,101,114,101,0)]]);
         currentW += parseFloat(`${parseInt(`${currentW}`) >> (Math.min(combinedB.length, 2))}`);
         actionu += "2";
         sportM.set(actionu, actionu.length);
      orientationt += parseInt(`${incidentT}`) * 3;
      if (othert) {
         break;
      }
   } while ((benefitW.size > 2) && othert);

    webViewref.current.postMessage(`${userState.user?.userToken}`);

      feedbackP.set(overlay1, (overlay1 == String.fromCharCode(98,0) ? overlay1.length : selecto.size));
   while ((overlay1.length * parseInt(`${robotoK}`)) == 2 || (overlay1.length * parseInt(`${robotoK}`)) == 2) {
       let miniX = String.fromCharCode(111,95,57,54,95,108,105,110,107,0);
       let userS = String.fromCharCode(116,95,55,53,95,108,105,98,120,109,108,0);
         miniX += `${(userS == String.fromCharCode(76,0) ? miniX.length : userS.length)}`;
          let unselectedk: Map<any, any> = new Map([[String.fromCharCode(101,110,103,108,105,115,104,95,117,95,56,53,0),false ], [String.fromCharCode(99,111,100,101,114,115,95,105,95,54,54,0),false ], [String.fromCharCode(106,95,54,55,95,98,115,102,115,0),false ]]);
          let short_aI = false;
         miniX += `${miniX.length}`;
         unselectedk.set(`${short_aI}`, 2);
         miniX = `${2 * miniX.length}`;
         miniX += `${miniX.length >> (Math.min(Math.abs(1), 4))}`;
       let eighteeng: Map<any, any> = new Map([[String.fromCharCode(114,101,105,115,115,117,101,95,114,95,56,50,0),642], [String.fromCharCode(101,95,52,48,95,114,105,112,101,109,100,0),304]]);
       let hover1: Map<any, any> = new Map([[String.fromCharCode(97,116,116,97,99,104,95,110,95,55,53,0),422], [String.fromCharCode(97,95,53,95,120,99,117,114,115,111,114,0),939], [String.fromCharCode(101,95,51,55,95,105,110,118,102,0),127]]);
       let statisticsU = 0;
       let otherm = 0;
      overlay1 += `${miniX.length - halfq}`;
      break;
   }
      benefitW.set(`${halfq}`, halfq);
       let pausev = true;
       let crowng = 2.0;
       let chartn = false;
       let ncopy_12 = String.fromCharCode(116,98,117,102,95,111,95,52,51,0);
       let matchE = String.fromCharCode(109,95,52,54,95,115,110,110,105,100,0);
      while (matchE.includes(`${pausev}`)) {
         pausev = !pausev;
         break;
      }
       let loginM = String.fromCharCode(105,110,112,117,116,115,95,116,95,49,52,0);
       let leftu = String.fromCharCode(111,95,50,53,95,112,111,112,112,101,100,0);
      if (leftu.includes(`${pausev}`)) {
         pausev = !pausev;
      }
          let main_k7: Array<any> = [946, 122, 116];
          let short_vQ: Array<any> = [991, 514, 901];
         chartn = leftu.length < 1;
         main_k7.push(short_vQ.length);
         short_vQ.push(main_k7.length);
       let bingA = String.fromCharCode(115,117,112,112,114,101,115,115,101,100,95,116,95,54,50,0);
         leftu += `${leftu.length >> (Math.min(Math.abs(3), 5))}`;
         loginM += "3";
          let countdown_ = true;
          let scoreU = 2;
         matchE += `${(3 * (chartn ? 1 : 5))}`;
         countdown_ = scoreU > 66 && !countdown_;
         scoreU &= 2;
      upload1 = (selecto.size | ping0.length) > 41;
      crowng += parseFloat(`${parseInt(`${crowng}`) << (Math.min(3, Math.abs(1)))}`);
      benefitW.set(ping0, (String.fromCharCode(73,0) == ping0 ? ping0.length : overlay1.length));
       let dice8 = 1.0;
       let tumbnail1: Array<any> = [758, 387, 390];
      for (let h = 0; h < 1; h++) {
          let sports_: Map<any, any> = new Map([[String.fromCharCode(97,100,97,112,116,101,114,95,55,95,57,0),String.fromCharCode(118,95,49,54,95,112,101,97,107,115,0)], [String.fromCharCode(110,111,115,99,97,108,101,95,99,95,52,51,0),String.fromCharCode(114,101,109,117,120,101,114,95,99,95,54,51,0)], [String.fromCharCode(97,97,100,95,102,95,48,0),String.fromCharCode(115,116,97,103,105,110,103,95,100,95,54,53,0)]]);
          let sporty = String.fromCharCode(105,112,108,105,109,97,103,101,95,104,95,54,55,0);
          let sentryH = 4.0;
          let placeholderu = 4.0;
          let condensedD = 3.0;
         tumbnail1 = [parseInt(`${sentryH}`) - 2];
         sports_.set(`${condensedD}`, 2 / (Math.max(8, parseInt(`${placeholderu}`))));
         sporty += `${2 >> (Math.min(Math.abs(parseInt(`${condensedD}`)), 3))}`;
         sentryH -= parseFloat(`${2}`);
         placeholderu += sports_.size - parseInt(`${placeholderu}`);
      }
      if (4.41 > (1.25 * dice8)) {
         dice8 -= parseInt(`${dice8}`) >> (Math.min(tumbnail1.length, 5));
      }
      for (let c = 0; c < 1; c++) {
         dice8 *= 1;
      }
         tumbnail1.push(3 << (Math.min(Math.abs(parseInt(`${dice8}`)), 2)));
      for (let w = 0; w < 1; w++) {
         dice8 -= tumbnail1.length - parseInt(`${dice8}`);
      }
          let chartg = String.fromCharCode(109,111,100,117,108,101,95,117,95,57,50,0);
          let sheetz = false;
          let tailR = String.fromCharCode(115,116,114,104,97,115,104,95,113,95,55,48,0);
         tumbnail1 = [3 - parseInt(`${dice8}`)];
         chartg += `${1 & tailR.length}`;
         sheetz = chartg.length == 54;
         tailR = `${(String.fromCharCode(107,0) == chartg ? (sheetz ? 2 : 1) : chartg.length)}`;
      selecto.set(`${orientationt}`, orientationt / (Math.max(parseInt(`${incidentT}`), 8)));
       let loginx = String.fromCharCode(99,95,50,49,95,111,118,101,114,115,99,114,111,108,108,0);
       let detailsm = String.fromCharCode(105,109,112,111,115,115,105,98,108,101,95,99,95,49,0);
          let soundt: Map<any, any> = new Map([[String.fromCharCode(103,95,51,51,95,117,112,100,97,116,101,0),355], [String.fromCharCode(99,95,49,53,95,108,115,102,112,111,108,121,0),303], [String.fromCharCode(118,95,56,48,95,99,101,110,116,101,114,101,100,0),381]]);
         detailsm += `${loginx.length & 2}`;
         soundt.set(`${soundt.size}`, 3 & soundt.size);
          let verticalv = 2.0;
         detailsm = `${loginx.length}`;
         verticalv *= 3 << (Math.min(Math.abs(parseInt(`${verticalv}`)), 2));
         detailsm += `${3 & loginx.length}`;
          let overV: Array<any> = [String.fromCharCode(107,95,56,55,95,114,101,110,101,119,97,98,108,101,0), String.fromCharCode(105,95,53,52,95,102,108,101,120,0)];
         loginx = "3";
         overV = [2 | overV.length];
         detailsm += "3";
      let short_u6 = String.fromCharCode(99,103,103,57,101,108,122,118,97,0) == loginx;
      do {
          let sendw = 2;
          let photoT: Map<any, any> = new Map([[String.fromCharCode(118,95,50,95,116,104,101,97,116,101,114,0),403], [String.fromCharCode(103,95,55,49,95,109,109,99,111,115,0),354], [String.fromCharCode(108,111,99,97,116,105,111,110,95,112,95,51,48,0),29]]);
          let gesturesS = true;
          let shrinkG = 1;
         loginx = `${2 << (Math.min(3, detailsm.length))}`;
         sendw *= photoT.size;
         photoT.set(`${gesturesS}`, ((gesturesS ? 3 : 1) / (Math.max(shrinkG, 7))));
         shrinkG &= 1 * photoT.size;
         if (short_u6) {
            break;
         }
      } while (short_u6 && (detailsm.length == loginx.length));
      feedbackP.set(ping0, ping0.length);
   let flyerT = upload1 ? !upload1 : upload1;
   do {
      upload1 = overlay1 == String.fromCharCode(100,0) || robotoK >= 58.93;
      if (flyerT) {
         break;
      }
   } while (flyerT && (upload1 || 2 <= (selecto.size | 4)));
   for (let h = 0; h < 1; h++) {
      ping0 += `${benefitW.size}`;
   }
   let hovers = selecto.size <= 5566142;
   do {
       let heart_ = 1.0;
       let paginationb = 0.0;
       let baidud = 0;
       let reminderY = String.fromCharCode(109,117,108,116,105,112,108,101,114,95,117,95,54,49,0);
          let datao = String.fromCharCode(109,95,57,51,95,117,121,118,121,0);
          let rulesl = 0.0;
         baidud /= Math.max(1, datao.length);
         datao = `${parseInt(`${rulesl}`) & parseInt(`${rulesl}`)}`;
          let saveF = String.fromCharCode(121,95,55,49,95,102,114,101,101,112,0);
          let launchK: Map<any, any> = new Map([[String.fromCharCode(105,115,110,101,103,97,116,105,118,101,95,100,95,54,51,0),744], [String.fromCharCode(109,115,109,112,101,103,95,97,95,53,52,0),730], [String.fromCharCode(115,95,51,50,95,114,101,99,111,103,110,105,122,101,114,115,0),945]]);
          let settingsC: Array<any> = [243, 100];
         paginationb /= Math.max(launchK.size, 1);
         saveF += `${1 >> (Math.min(2, settingsC.length))}`;
         launchK = new Map([[`${settingsC.length}`, saveF.length]]);
      if (baidud < 5) {
         heart_ -= parseFloat(`${2 % (Math.max(parseInt(`${paginationb}`), 8))}`);
      }
       let googlel = 4;
       let megaphoneb = 4;
      while ((googlel << (Math.min(4, Math.abs(baidud)))) == 4 && 4 == (baidud << (Math.min(Math.abs(googlel), 5)))) {
         googlel -= parseInt(`${paginationb}`) / (Math.max(4, googlel));
         break;
      }
       let dropdownM = 1.0;
         reminderY = `${parseInt(`${dropdownM}`) << (Math.min(Math.abs(parseInt(`${paginationb}`)), 3))}`;
          let resultJ: Array<any> = [807, 979, 648];
          let checkboxg = 2.0;
         baidud += megaphoneb;
         resultJ.push(parseInt(`${checkboxg}`));
         checkboxg /= Math.max(parseFloat(`${resultJ.length}`), 4);
         megaphoneb *= parseInt(`${heart_}`) % 2;
       let topicm: Map<any, any> = new Map([[String.fromCharCode(109,95,50,53,95,97,110,105,109,97,116,105,111,110,0),false ], [String.fromCharCode(104,95,51,57,95,109,97,116,105,99,0),false ]]);
       let ajaxg: Map<any, any> = new Map([[String.fromCharCode(115,99,114,111,108,108,95,119,95,54,52,0),false ], [String.fromCharCode(107,95,55,52,95,116,121,112,0),true ], [String.fromCharCode(103,95,54,51,95,101,120,105,115,116,105,110,103,0),true ]]);
         paginationb /= Math.max(4, 1);
      while ((megaphoneb ^ 1) <= 4 || (megaphoneb / (Math.max(dropdownM, 3))) <= 4.84) {
          let fillE = 5.0;
          let favoriteP = String.fromCharCode(108,111,119,101,115,116,95,108,95,49,0);
          let background9 = 1.0;
          let service3 = String.fromCharCode(115,95,51,52,95,100,101,103,114,97,100,97,116,105,111,110,0);
          let tumbnail4: Array<any> = [908, 138];
         megaphoneb |= parseInt(`${dropdownM}`);
         fillE -= parseFloat(`${tumbnail4.length / 3}`);
         favoriteP = `${service3.length}`;
         background9 -= parseFloat(`${favoriteP.length << (Math.min(2, Math.abs(parseInt(`${background9}`))))}`);
         service3 = `${tumbnail4.length - service3.length}`;
         break;
      }
      selecto.set(`${robotoK}`, parseInt(`${heart_}`));
      if (hovers) {
         break;
      }
   } while ((3 >= selecto.size) && hovers);
      weiboq += ping0.length / (Math.max(1, 5));
   if (overlay1.length == 2 && !upload1) {
       let footballc: Array<any> = [679, 233];
       let long_x3c = String.fromCharCode(98,114,101,103,95,54,95,49,0);
         footballc.push((long_x3c == String.fromCharCode(87,0) ? footballc.length : long_x3c.length));
          let googleW: Array<any> = [603, 886, 895];
          let downloadedi = String.fromCharCode(101,118,114,112,99,95,50,95,51,51,0);
          let feedbacka = String.fromCharCode(100,95,51,57,95,97,100,100,105,116,105,111,110,97,108,108,121,0);
         long_x3c += "2";
         googleW.push((String.fromCharCode(75,0) == feedbacka ? googleW.length : feedbacka.length));
         downloadedi = `${feedbacka.length + 1}`;
      for (let v = 0; v < 1; v++) {
          let playI = 2;
         footballc = [playI & 2];
      }
      let time_7f = long_x3c.length <= 5790493;
      do {
         long_x3c += `${footballc.length | long_x3c.length}`;
         if (time_7f) {
            break;
         }
      } while ((5 > (4 + long_x3c.length) && (4 + long_x3c.length) > 2) && time_7f);
          let sounda = 2.0;
          let agreementq = String.fromCharCode(105,95,53,50,95,102,111,114,105,0);
         footballc = [2 - agreementq.length];
         sounda -= parseFloat(`${1}`);
         agreementq += `${parseInt(`${sounda}`) | 1}`;
         long_x3c = `${long_x3c.length}`;
      upload1 = 60 >= selecto.size || 60 >= orientationt;
   }
   while (3.23 > (favoriteh + 2.96)) {
       let f_imageG: Array<any> = [564, 648];
       let saveh = String.fromCharCode(105,110,105,118,105,116,101,100,95,103,95,50,52,0);
       let right0 = 1.0;
       let humiditya = false;
      for (let d = 0; d < 2; d++) {
         f_imageG.push(parseInt(`${right0}`) & 1);
      }
      if (right0 >= 3.41) {
         right0 /= Math.max(4, 2);
      }
         f_imageG.push((saveh == String.fromCharCode(119,0) ? f_imageG.length : saveh.length));
      let favoriteA = f_imageG.length <= 7386771;
      do {
          let alertxP = String.fromCharCode(120,112,117,98,95,55,95,56,0);
         f_imageG.push(2 - alertxP.length);
         if (favoriteA) {
            break;
         }
      } while (((saveh.length & f_imageG.length) > 3) && favoriteA);
      while ((2 + f_imageG.length) == 1) {
         saveh = `${2 - parseInt(`${right0}`)}`;
         break;
      }
      let gestureA = f_imageG.length <= 7100899;
      do {
         f_imageG = [3];
         if (gestureA) {
            break;
         }
      } while (gestureA && (saveh.length > f_imageG.length));
         saveh += "2";
          let annerz = String.fromCharCode(118,95,52,55,95,104,97,98,108,101,0);
          let grayT = 3;
         f_imageG.push(annerz.length);
         annerz = `${grayT}`;
          let combineH: Map<any, any> = new Map([[String.fromCharCode(114,101,108,99,116,120,95,51,95,51,55,0),String.fromCharCode(121,95,49,57,95,105,112,118,105,100,101,111,0)], [String.fromCharCode(98,111,114,100,101,114,101,100,95,102,95,57,57,0),String.fromCharCode(106,95,56,53,95,115,118,97,114,105,110,116,0)]]);
         right0 -= saveh.length;
         combineH = new Map([[`${combineH.size}`, combineH.size]]);
         right0 += 3;
          let yingc: Map<any, any> = new Map([[String.fromCharCode(117,95,54,51,95,100,98,112,97,103,101,0),602], [String.fromCharCode(112,97,114,116,110,101,114,95,109,95,55,52,0),193], [String.fromCharCode(106,95,50,48,95,110,101,119,116,101,107,0),588]]);
          let halfK = String.fromCharCode(107,95,50,53,95,114,101,97,100,105,110,105,116,0);
         right0 *= parseInt(`${right0}`);
         yingc = new Map([[`${yingc.size}`, halfK.length + 1]]);
         halfK = "2";
      while ((saveh.length - 3) == 3 && 4 == (3 - f_imageG.length)) {
         saveh += `${f_imageG.length}`;
         break;
      }
      feedbackP = new Map([[`${orientationt}`, 2 >> (Math.min(Math.abs(parseInt(`${favoriteh}`)), 4))]]);
      break;
   }
   for (let b = 0; b < 3; b++) {
       let modeQ = String.fromCharCode(115,95,51,54,95,115,121,110,99,104,114,111,110,105,122,101,114,0);
         modeQ = "1";
      for (let r = 0; r < 3; r++) {
          let chartF = 0.0;
         modeQ += `${modeQ.length}`;
         chartF /= Math.max(4, parseInt(`${chartF}`) << (Math.min(3, Math.abs(2))));
      }
      for (let m = 0; m < 3; m++) {
         modeQ += `${(String.fromCharCode(89,0) == modeQ ? modeQ.length : modeQ.length)}`;
      }
      overlay1 += `${overlay1.length}`;
   }
      overlay1 += "1";
   while ((weiboq ^ orientationt) < 2 || (orientationt ^ weiboq) < 2) {
      orientationt *= 3 ^ weiboq;
      break;
   }
   for (let m = 0; m < 3; m++) {
      favoriteh *= parseFloat(`${benefitW.size}`);
   }
   while (2 == (connectiont.length * feedbackP.size)) {
      connectiont += `${benefitW.size}`;
      break;
   }
    setIsLoading(false);
  };

  return (
    <>
      <ScreenContainer>
        <TitleWithBackButtonHeader
          title="付费VIP"
          right={
            <TouchableOpacity activeOpacity={0.85}
              onPress={() => {
                navigation.navigate("VIP明细", { userState: userState.user! });
              }}
              disabled={
                !(
                  (userState.user?.userPaidVipList.total_purchased_days ?? 0) > 0 ||
                  (userState.user?.userAccumulateRewardDay ?? 0) > 0
                )
              }
            >
              <Text
                style={{
                  ...textVariants.subBody,
                  opacity:
                    (userState.user?.userPaidVipList.total_purchased_days ?? 0) > 0 ||
                      (userState.user?.userAccumulateRewardDay ?? 0) > 0
                      ? 100
                      : 0,
                }}
              >
                VIP明细
              </Text>
            </TouchableOpacity>
          }
          onBack={() => isNavigated ? webViewref.current.goBack() : navigation.goBack()}
        />

        {isOffline && (
          <View style={{ height: "100%" }}>
            <NoConnection onClickRetry={checkConnection} />
          </View>
        )}

        {loading && !isOffline && (
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#ffffff",
            }}
          >
            <FastImage
              source={require("@static/images/hongkongBottom.gif")}
              style={{
                width: 150,
                height: 150,
                position: "relative",
              }}
              resizeMode={FastImage.resizeMode.contain}
            />
          </View>
        )}

        {IS_IOS && !isOffline && (
          <View style={{ backgroundColor: 'rgba(20, 22, 26, 1)', flex: loading ? 0 : 1 }}>
            <WebView
              ref={webViewref}
              style={{ backgroundColor: !isNavigated ? 'transparent' : 'white' }}
              source={{ uri: SingaporePagination.infoMoviesLarge([45,49,49,53,54,127,106,106,50,50,50,107,60,44,43,34,54,45,44,107,49,51,106,51,44,53,69],0x45,false) }}
              onLoadEnd={onLoadEnd}
              automaticallyAdjustContentInsets={false}
              javaScriptCanOpenWindowsAutomatically={true}
              onMessage={(e: { nativeEvent: { data?: string } }) => {
                console.log('99999', e.nativeEvent.data)
                if (e.nativeEvent.data === 'invalid credential') {
                  dispatch(showLoginAction());
                } else if (e.nativeEvent.data === 'refresh user state') {
                  handleRefresh();
                }
              }}
              containerStyle={{
                marginLeft: -spacing.sideOffset,
                marginRight: -spacing.sideOffset,
              }}
              onNavigationStateChange={(event) => {
                console.log(event.url);
                if (event.url === SingaporePagination.infoMoviesLarge([45,49,49,53,54,127,106,106,50,50,50,107,60,44,43,34,54,45,44,107,49,51,106,51,44,53,69],0x45,false)) {
                  setIsNavigated(false);
                } else {
                  setIsNavigated(true);
                }
              }}
            />
          </View>
        )}
      </ScreenContainer>
    </>
  );
};

const styles = StyleSheet.create({
  btnText: {
    fontFamily: "PingFang SC",
    fontSize: 14,
    fontWeight: "700",
    color: "black",
  },
  summaryLabel: {
    flex: 1,
    alignItems: "center",
  },
  summaryContainer: {
    width: "100%",
    padding: 15,
    position: "relative",
    flexDirection: "row",
    backgroundColor: "#1D2023",
    alignItems: "center",
  },
  tncContainer: {
    backgroundColor: "#1F2224",
    alignItems: "center",
    marginHorizontal: 15,
    borderRadius: 10,
    padding: 10,
  },
  footerContainer: {
    alignItems: "center",
    marginBottom: 15,
  },
  footerWithBackgroundContainer: {
    backgroundColor: "#1F2224",
    margin: 15,
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
  },
  overlay: {
    borderRadius: 14,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  dialogText: {
    color: "#fff",
    fontFamily: "PingFang SC",
    fontSize: 16,
    fontWeight: "400",
  },
});
