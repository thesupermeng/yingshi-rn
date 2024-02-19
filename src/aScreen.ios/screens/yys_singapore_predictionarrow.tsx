import React, { useCallback, useEffect, useState } from "react";
import { FlatList, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { RootStackScreenProps } from "@type";
import { CommentCard } from "../components/vodComment/yys_feedback_station";
import { yysSubmit } from "@type";
import ScreenContainer from "../components/container/yys_matches";
import TitleWithBackButtonHeader from "../components/header/yys_away_predictionloss_header";
import { useTheme } from "@react-navigation/native";
import { useAppDispatch, useAppSelector, useSelector } from "@hooks";
import { yysIconclosewhiteBaiduads } from "@redux";
import { SubmitBtnSvg } from "@static";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { showLoginAction } from "@redux";
import { yysHomeinactiveUntick } from "@utility";
import { yysIconplaySuggestion } from "@redux";
import { yysIconstar } from "@models";

export const AllCommentScreen = ({ navigation, route }: RootStackScreenProps<"全部评论">) => {
  const { vod_id, vod_name, commentItems } = route.params;
  const { colors, textVariants, } = useTheme();
  const [comment, setComment] = useState('');
  const [allComment, setAllComment] = useState<yysSubmit[] | undefined>([]);
  const userState = useSelector<yysIconplaySuggestion>('userReducer');
  const [isUpdated, setIsUpdated] = useState(false);
  const dispatch = useAppDispatch();

  const locCommentId = "userComment" + vod_id;
  const getLocalComments = async () => {
       let stepm = 3;
    let rockety = String.fromCharCode(111,95,50,53,95,115,119,97,112,0);
    let whitevideolive7: Array<any> = [654, 463, 385];
    let mutedH = String.fromCharCode(97,115,99,105,105,105,110,100,101,120,95,114,95,56,56,0);
    let themec = 5.0;
    let cancelU = false;
    let philippinesT = String.fromCharCode(115,95,50,48,95,108,108,100,98,105,110,105,116,0);
    let baiduW: Array<any> = [134, 327];
    let backv = String.fromCharCode(102,102,109,109,97,108,95,122,95,55,51,0);
    let chartq: Array<any> = [String.fromCharCode(105,110,115,116,101,97,100,95,122,95,57,55,0), String.fromCharCode(106,95,54,55,95,98,97,115,101,100,0)];
   if (rockety != String.fromCharCode(119,0)) {
      philippinesT = "2";
   }
      whitevideolive7.push(3 >> (Math.min(3, philippinesT.length)));
   if (whitevideolive7.length <= 3) {
      rockety += "1";
   }

    try {

   if (3 >= (parseInt(`${themec}`) - 1) || 1 >= (philippinesT.length - parseInt(`${themec}`))) {
      philippinesT = `${rockety.length}`;
   }
       let template_9v = String.fromCharCode(115,105,110,100,101,120,95,101,95,57,48,0);
       let source3 = 5.0;
       let cancelt = 4.0;
         template_9v = `${template_9v.length ^ 3}`;
      let predictionlossd = 8978577.0 >= source3;
      do {
         source3 *= parseFloat(`${template_9v.length * 1}`);
         if (predictionlossd) {
            break;
         }
      } while (((4 - cancelt) < 2.76) && predictionlossd);
         template_9v = `${template_9v.length}`;
      while (3.84 < (parseFloat(`${template_9v.length}`) - source3)) {
          let libswresamplen: Array<any> = [String.fromCharCode(99,100,97,116,97,95,107,95,56,53,0), String.fromCharCode(104,95,51,50,95,98,121,116,101,115,116,114,101,97,109,0)];
          let awayp = String.fromCharCode(109,111,100,117,108,101,115,95,98,95,49,48,48,0);
          let greyX = String.fromCharCode(98,95,52,55,95,115,102,116,112,0);
          let androidT: Map<any, any> = new Map([[String.fromCharCode(109,101,109,97,108,105,103,110,95,121,95,54,49,0),53], [String.fromCharCode(116,101,115,116,105,109,103,105,110,116,95,105,95,54,56,0),504], [String.fromCharCode(108,111,110,103,109,117,108,97,119,95,99,95,50,53,0),114]]);
          let styleW = String.fromCharCode(101,110,116,105,116,101,115,95,57,95,55,53,0);
         source3 += parseFloat(`${greyX.length}`);
         libswresamplen.push(libswresamplen.length % (Math.max(9, styleW.length)));
         awayp += "3";
         greyX += `${androidT.size % (Math.max(9, libswresamplen.length))}`;
         androidT = new Map([[`${libswresamplen.length}`, libswresamplen.length % (Math.max(8, styleW.length))]]);
         break;
      }
      while ((2.86 * cancelt) == 5.92) {
         cancelt -= parseInt(`${cancelt}`) >> (Math.min(2, Math.abs(3)));
         break;
      }
       let alert6 = true;
       let iconchatsendH = true;
         source3 -= (parseFloat(`${(iconchatsendH ? 4 : 2)}`));
          let listg = String.fromCharCode(99,95,52,50,95,101,120,97,99,116,108,121,0);
         template_9v = `${2 | parseInt(`${cancelt}`)}`;
         listg += `${(listg == String.fromCharCode(67,0) ? listg.length : listg.length)}`;
      if (cancelt < 3.84) {
         alert6 = !alert6 || 76.41 >= source3;
      }
      rockety += `${2 << (Math.min(1, template_9v.length))}`;
      mutedH += "3";
      const comments = await AsyncStorage.getItem(locCommentId);

      themec *= parseFloat(`${mutedH.length}`);
       let watchnowbg4 = 5.0;
       let shareh = String.fromCharCode(99,95,51,95,121,101,97,114,0);
          let iconpointscoreL = 3;
          let render_ = false;
          let stationi = 1;
         watchnowbg4 *= (parseFloat(`${String.fromCharCode(89,0) == shareh ? (render_ ? 4 : 4) : shareh.length}`));
         iconpointscoreL -= 1 ^ stationi;
         render_ = 20 == stationi;
         shareh += `${parseInt(`${watchnowbg4}`) & 1}`;
      for (let g = 0; g < 3; g++) {
         watchnowbg4 *= parseFloat(`${shareh.length - 2}`);
      }
       let closeF = 0;
      if (!shareh.startsWith(`${closeF}`)) {
         shareh = `${parseInt(`${watchnowbg4}`) * shareh.length}`;
      }
      let catalogI = 9068948.0 >= watchnowbg4;
      do {
         watchnowbg4 -= (parseFloat(`${shareh == String.fromCharCode(84,0) ? shareh.length : closeF}`));
         if (catalogI) {
            break;
         }
      } while (catalogI && (2.77 == (watchnowbg4 * 5.42)));
      mutedH = `${3 | rockety.length}`;
       let turnZ = String.fromCharCode(110,111,105,115,101,115,95,56,95,55,53,0);
         turnZ += "1";
      let analyticsz = 9730118 >= turnZ.length;
      do {
          let qaagD = String.fromCharCode(97,100,115,103,97,115,95,102,95,51,55,0);
         turnZ += `${(String.fromCharCode(73,0) == qaagD ? turnZ.length : qaagD.length)}`;
         if (analyticsz) {
            break;
         }
      } while ((2 < turnZ.length) && analyticsz);
         turnZ += `${turnZ.length >> (Math.min(4, turnZ.length))}`;
      whitevideolive7.push(whitevideolive7.length - 3);
      console.log("comments stored in local storage ", locCommentId);

   while (1 < whitevideolive7.length) {
      themec += parseFloat(`${1 << (Math.min(3, baiduW.length))}`);
      break;
   }
       let iconfeedbackk = 5.0;
       let kick3 = 5.0;
       let profileframec = String.fromCharCode(100,101,98,117,103,98,111,120,95,53,95,56,0);
          let minimize7 = true;
          let matchc = true;
         iconfeedbackk /= Math.max(1, parseFloat(`${parseInt(`${iconfeedbackk}`) + parseInt(`${kick3}`)}`));
         minimize7 = matchc && minimize7;
         matchc = !minimize7;
      let playercommonz = iconfeedbackk >= 8767545.0;
      do {
         iconfeedbackk /= Math.max(1, parseFloat(`${3}`));
         if (playercommonz) {
            break;
         }
      } while (playercommonz && ((profileframec.length ^ 4) == 2 && 5 == (4 * parseInt(`${iconfeedbackk}`))));
          let vignettez = String.fromCharCode(112,95,55,55,95,115,116,114,105,99,109,112,0);
         profileframec += `${3 + parseInt(`${iconfeedbackk}`)}`;
         vignettez += `${vignettez.length / 3}`;
          let rightK: Array<any> = [419, 21];
         kick3 += parseFloat(`${1 % (Math.max(parseInt(`${kick3}`), 10))}`);
         rightK.push(rightK.length);
         kick3 *= parseFloat(`${parseInt(`${iconfeedbackk}`)}`);
       let default_pm: Array<any> = [90, 23, 235];
       let backwhite8: Array<any> = [848, 71];
      while (5 < (profileframec.length + 1) && 5.47 < (parseFloat(`${profileframec.length}`) - iconfeedbackk)) {
         iconfeedbackk += parseFloat(`${2}`);
         break;
      }
          let goalk = 4;
          let iconlogoutY: Map<any, any> = new Map([[String.fromCharCode(102,105,114,101,98,97,115,101,95,102,95,54,0),519], [String.fromCharCode(99,111,110,110,95,111,95,49,51,0),936]]);
         default_pm = [profileframec.length];
         goalk <<= Math.min(Math.abs(iconlogoutY.size / (Math.max(1, 8))), 5);
         iconlogoutY = new Map([[`${iconlogoutY.size}`, goalk % (Math.max(iconlogoutY.size, 1))]]);
         profileframec = `${1 ^ profileframec.length}`;
      mutedH = `${parseInt(`${iconfeedbackk}`) * baiduW.length}`;
      mutedH = `${whitevideolive7.length ^ 3}`;
      console.log(comments);

   let edith = String.fromCharCode(48,121,119,53,116,51,0) == philippinesT;
   do {
      philippinesT = `${1 << (Math.min(5, Math.abs(parseInt(`${themec}`))))}`;
      if (edith) {
         break;
      }
   } while (edith && ((philippinesT.length / 4) > 1 || (parseFloat(`${philippinesT.length}`) * themec) > 4.24));
   for (let i = 0; i < 2; i++) {
      philippinesT = `${(String.fromCharCode(69,0) == philippinesT ? parseInt(`${themec}`) : philippinesT.length)}`;
   }
   for (let i = 0; i < 2; i++) {
      themec *= parseFloat(`${philippinesT.length}`);
   }

      if (comments !== null) {

   while (!mutedH.startsWith(`${backv.length}`)) {
       let bally: Array<any> = [331, 402, 601];
       let greenarrowupB = String.fromCharCode(108,95,51,49,95,115,111,98,101,108,0);
       let yellowanimationlive9: Array<any> = [290, 531, 147];
       let langkeyq = String.fromCharCode(101,95,49,51,95,109,111,100,97,108,108,121,0);
       let bannerq = 5.0;
         greenarrowupB = `${parseInt(`${bannerq}`)}`;
      for (let o = 0; o < 1; o++) {
         bannerq -= parseFloat(`${2 + langkeyq.length}`);
      }
       let subbasketballplayer3 = String.fromCharCode(97,95,57,54,95,105,110,100,101,102,105,110,105,116,101,0);
       let foundn = String.fromCharCode(111,112,117,115,95,118,95,57,56,0);
      while (subbasketballplayer3 != String.fromCharCode(56,0)) {
         foundn = "1";
         break;
      }
          let predictionz = String.fromCharCode(108,105,98,118,101,114,115,105,111,110,95,55,95,54,0);
          let baselinei = String.fromCharCode(97,110,99,104,111,114,105,110,103,95,54,95,57,56,0);
         langkeyq = `${langkeyq.length}`;
         predictionz += `${predictionz.length % (Math.max(baselinei.length, 4))}`;
         baselinei += `${2 * baselinei.length}`;
         yellowanimationlive9 = [1];
      while (5 < foundn.length) {
         foundn = `${2 << (Math.min(3, Math.abs(parseInt(`${bannerq}`))))}`;
         break;
      }
          let playercommonx: Map<any, any> = new Map([[String.fromCharCode(122,95,53,54,95,114,101,112,108,97,99,101,115,0),true ], [String.fromCharCode(105,115,112,108,97,121,95,113,95,53,48,0),true ]]);
          let iconarrowrightwhite8: Array<any> = [704, 615];
          let iconviewergif1 = true;
         langkeyq = `${2 << (Math.min(3, Math.abs(playercommonx.size)))}`;
         playercommonx.set(`${iconviewergif1}`, ((iconviewergif1 ? 1 : 1) * 2));
         iconarrowrightwhite8.push(1);
         greenarrowupB += `${(greenarrowupB == String.fromCharCode(101,0) ? greenarrowupB.length : parseInt(`${bannerq}`))}`;
      let less5 = greenarrowupB == String.fromCharCode(108,112,97,105,114,114,0);
      do {
         greenarrowupB += `${foundn.length}`;
         if (less5) {
            break;
         }
      } while (less5 && (!greenarrowupB.endsWith(`${bally.length}`)));
         foundn += `${foundn.length}`;
      while ((bally.length % (Math.max(5, greenarrowupB.length))) > 4) {
         bally.push(subbasketballplayer3.length);
         break;
      }
      let bgvipsports = foundn == String.fromCharCode(52,100,53,112,104,109,50,0);
      do {
         foundn = "2";
         if (bgvipsports) {
            break;
         }
      } while (bgvipsports && (5 == foundn.length));
         bally.push(1 % (Math.max(6, parseInt(`${bannerq}`))));
      let ajaxJ = 5039742.0 <= bannerq;
      do {
         bannerq *= parseFloat(`${3}`);
         if (ajaxJ) {
            break;
         }
      } while (ajaxJ && (3.82 > (bannerq - 1.58) || (langkeyq.length ^ 2) > 2));
      backv += `${(String.fromCharCode(50,0) == backv ? backv.length : baiduW.length)}`;
      break;
   }
      cancelU = baiduW.length < 50;
   if ((4 - stepm) <= 1 || (stepm - whitevideolive7.length) <= 4) {
      stepm -= backv.length;
   }
        return JSON.parse(comments);
      }
      return [];
    } catch (error) {

       let iconmegaphoneL = 5.0;
       let owngoalc = String.fromCharCode(107,95,57,49,95,97,117,114,97,0);
       let loadingg = String.fromCharCode(117,95,50,49,95,100,97,98,97,115,101,0);
         loadingg += `${parseInt(`${iconmegaphoneL}`) + loadingg.length}`;
       let iconarrowleftI: Array<any> = [String.fromCharCode(99,111,110,103,101,115,116,105,111,110,95,111,95,56,50,0), String.fromCharCode(109,95,50,95,108,105,98,115,112,101,101,120,0), String.fromCharCode(115,95,49,53,95,99,111,110,99,97,116,100,101,99,0)];
       let annera: Array<any> = [830, 444];
       let whitebellQ = false;
      let libswresampleC = iconarrowleftI.length <= 5769006;
      do {
         iconarrowleftI = [3 * owngoalc.length];
         if (libswresampleC) {
            break;
         }
      } while (libswresampleC && ((owngoalc.length ^ 4) > 4));
      let controls9 = loadingg == String.fromCharCode(110,49,102,0);
      do {
         loadingg = `${annera.length}`;
         if (controls9) {
            break;
         }
      } while ((loadingg.length >= owngoalc.length) && controls9);
      while (5 >= iconarrowleftI.length) {
         iconarrowleftI = [1];
         break;
      }
       let productw = 0.0;
         loadingg = `${(String.fromCharCode(75,0) == loadingg ? loadingg.length : annera.length)}`;
      if (4.50 >= iconmegaphoneL && (iconmegaphoneL - 4.50) >= 4.64) {
         whitebellQ = (((!whitebellQ ? 92 : loadingg.length) / (Math.max(5, loadingg.length))) > 92);
      }
      whitevideolive7 = [2 - parseInt(`${themec}`)];
      baiduW.push(whitevideolive7.length);
       let defaultplayerimg0: Map<any, any> = new Map([[String.fromCharCode(118,95,51,56,95,97,115,115,101,114,116,0),String.fromCharCode(99,110,111,110,99,101,95,105,95,53,56,0)], [String.fromCharCode(116,104,105,114,116,121,95,108,95,52,48,0),String.fromCharCode(99,111,100,101,99,114,97,119,95,112,95,53,51,0)], [String.fromCharCode(107,95,50,57,95,109,97,107,101,0),String.fromCharCode(116,95,55,51,95,119,101,98,102,105,108,101,0)]]);
         defaultplayerimg0 = new Map([[`${defaultplayerimg0.size}`, defaultplayerimg0.size / 1]]);
         defaultplayerimg0.set(`${defaultplayerimg0.size}`, defaultplayerimg0.size);
      for (let i = 0; i < 3; i++) {
         defaultplayerimg0.set(`${defaultplayerimg0.size}`, defaultplayerimg0.size - 1);
      }
      cancelU = rockety.length <= mutedH.length;
      console.log("error when retrieving local comments: ", error);

   if (rockety.startsWith(`${philippinesT.length}`)) {
       let imagenetworkerrw: Map<any, any> = new Map([[String.fromCharCode(116,105,109,101,95,115,95,55,54,0),585], [String.fromCharCode(101,118,111,108,118,101,95,120,95,49,49,0),806]]);
       let borderlessQ = String.fromCharCode(118,95,56,54,95,102,97,115,116,101,115,116,0);
       let black7: Array<any> = [658, 927, 243];
       let lang_ = 3.0;
       let bgvipxvod5 = String.fromCharCode(104,101,120,95,102,95,56,50,0);
       let half3: Map<any, any> = new Map([[String.fromCharCode(116,114,97,110,115,102,111,114,109,97,116,105,111,110,95,57,95,51,55,0),false ], [String.fromCharCode(120,95,53,51,95,100,111,119,110,108,111,97,100,0),true ]]);
       let upgradeQ: Map<any, any> = new Map([[String.fromCharCode(106,95,54,50,95,101,98,117,108,97,115,0),400], [String.fromCharCode(113,95,54,57,95,114,112,122,97,0),616]]);
      for (let z = 0; z < 2; z++) {
          let telemetryX = 2;
          let sheety = String.fromCharCode(99,111,109,112,114,101,115,115,95,115,95,57,49,0);
          let styles1 = true;
          let libfba: Array<any> = [955, 981, 469];
          let emojihearty = String.fromCharCode(108,95,52,57,95,99,111,108,111,99,97,116,101,100,0);
         borderlessQ = `${imagenetworkerrw.size >> (Math.min(libfba.length, 1))}`;
         telemetryX ^= 1;
         sheety = `${sheety.length}`;
         styles1 = sheety.length <= 70;
         libfba = [emojihearty.length / 2];
         emojihearty = `${((styles1 ? 3 : 5) / (Math.max(emojihearty.length, 2)))}`;
      }
          let relatedV = 3.0;
         bgvipxvod5 += `${black7.length}`;
         relatedV -= parseFloat(`${1}`);
      while ((black7.length >> (Math.min(Math.abs(5), 4))) <= 2) {
         black7 = [bgvipxvod5.length | 2];
         break;
      }
          let anythinkK = 2.0;
          let dependencies0: Map<any, any> = new Map([[String.fromCharCode(102,95,50,51,95,102,111,114,103,111,116,0),false ], [String.fromCharCode(107,95,53,55,95,102,116,118,112,110,111,100,101,0),true ]]);
         half3.set(`${upgradeQ.size}`, half3.size);
         anythinkK += parseFloat(`${3 >> (Math.min(3, Math.abs(parseInt(`${anythinkK}`))))}`);
         dependencies0 = new Map([[`${dependencies0.size}`, parseInt(`${anythinkK}`)]]);
      let liveshareC = 5909562 <= half3.size;
      do {
         half3 = new Map([[`${black7.length}`, black7.length | parseInt(`${lang_}`)]]);
         if (liveshareC) {
            break;
         }
      } while (((2 + upgradeQ.size) >= 2 || (half3.size + 2) >= 2) && liveshareC);
         borderlessQ = `${parseInt(`${lang_}`) >> (Math.min(Math.abs(upgradeQ.size), 5))}`;
      let regengi = borderlessQ == String.fromCharCode(95,101,100,106,122,102,95,105,108,0);
      do {
         borderlessQ = `${1 << (Math.min(4, bgvipxvod5.length))}`;
         if (regengi) {
            break;
         }
      } while (regengi && (3.20 > (lang_ / 5.21) && 4 > (borderlessQ.length % 5)));
      let cornerN = 7549153 <= borderlessQ.length;
      do {
          let statsv = true;
          let homeloading9: Array<any> = [831, 519];
          let penaltymatchiconR = String.fromCharCode(105,110,99,108,117,100,101,95,54,95,54,54,0);
         borderlessQ = `${parseInt(`${lang_}`) & 1}`;
         statsv = (((statsv ? homeloading9.length : 79) ^ homeloading9.length) == 79);
         penaltymatchiconR = `${((statsv ? 2 : 4))}`;
         if (cornerN) {
            break;
         }
      } while (((borderlessQ.length & 1) <= 1) && cornerN);
         upgradeQ.set(bgvipxvod5, imagenetworkerrw.size);
      for (let x = 0; x < 3; x++) {
         upgradeQ.set(`${lang_}`, bgvipxvod5.length << (Math.min(Math.abs(2), 1)));
      }
          let coreI = String.fromCharCode(120,100,97,105,95,112,95,56,49,0);
          let whatsappc: Map<any, any> = new Map([[String.fromCharCode(114,95,56,56,95,109,118,114,101,102,0),String.fromCharCode(99,111,110,116,111,117,114,95,116,95,53,0)], [String.fromCharCode(119,97,110,116,115,95,111,95,49,55,0),String.fromCharCode(108,122,109,97,95,115,95,53,52,0)], [String.fromCharCode(102,95,48,95,114,101,116,97,105,110,101,100,0),String.fromCharCode(116,97,98,108,101,105,110,105,116,95,122,95,53,54,0)]]);
         half3.set(`${lang_}`, 3 % (Math.max(9, parseInt(`${lang_}`))));
         coreI += `${coreI.length}`;
         whatsappc = new Map([[`${whatsappc.size}`, coreI.length]]);
          let iconnewsshare9 = true;
          let pathi = true;
          let backwhiten = 0.0;
         bgvipxvod5 = `${black7.length + 1}`;
         iconnewsshare9 = !iconnewsshare9;
         pathi = backwhiten > 37.53 && !iconnewsshare9;
         backwhiten -= (parseFloat(`${(iconnewsshare9 ? 4 : 1) | parseInt(`${backwhiten}`)}`));
      for (let o = 0; o < 1; o++) {
         half3 = new Map([[`${imagenetworkerrw.size}`, 3 + imagenetworkerrw.size]]);
      }
      for (let b = 0; b < 2; b++) {
         borderlessQ += `${(String.fromCharCode(89,0) == bgvipxvod5 ? upgradeQ.size : bgvipxvod5.length)}`;
      }
      philippinesT += `${baiduW.length}`;
   }
   for (let a = 0; a < 3; a++) {
      mutedH += `${chartq.length}`;
   }
   if ((backv.length ^ 4) < 5 || 5 < (4 ^ chartq.length)) {
      chartq = [(String.fromCharCode(69,0) == backv ? chartq.length : backv.length)];
   }
      return [];
    }
  };

  const storeUserComments = async () => {
       let reactnativeultimatelistviewr = 2;
    let list8 = String.fromCharCode(105,95,55,57,95,105,109,112,111,114,116,97,110,116,0);
    let mimok = String.fromCharCode(114,101,99,101,105,118,101,95,52,95,54,54,0);
    let iconnotificationnewp = 1.0;
    let calendar1 = 1;
    let iconclosewhitewithbga = 4.0;
    let indexw = 0;
    let iconstarZ = 4.0;
   for (let q = 0; q < 2; q++) {
      mimok += `${parseInt(`${iconstarZ}`) - 3}`;
   }
   while ((4 << (Math.min(5, Math.abs(indexw)))) <= 4 && 4 <= (4 << (Math.min(4, Math.abs(indexw))))) {
      reactnativeultimatelistviewr >>= Math.min(4, Math.abs(indexw - 1));
      break;
   }

    if (!comment) {

   while (list8.startsWith(`${calendar1}`)) {
      list8 = `${mimok.length}`;
      break;
   }
       let filterE: Array<any> = [605, 400, 409];
       let stationS = String.fromCharCode(108,105,115,116,115,95,54,95,56,57,0);
       let umengx: Map<any, any> = new Map([[String.fromCharCode(104,119,97,99,99,101,108,115,95,102,95,52,48,0),577], [String.fromCharCode(104,111,108,100,95,105,95,53,48,0),764], [String.fromCharCode(119,95,49,49,95,103,117,105,100,0),982]]);
         stationS += `${stationS.length}`;
      for (let i = 0; i < 2; i++) {
         stationS += `${stationS.length << (Math.min(2, filterE.length))}`;
      }
      while (stationS.length == umengx.size) {
         stationS = `${umengx.size}`;
         break;
      }
      if ((stationS.length - 1) > 5 || 2 > (stationS.length - 1)) {
         stationS = `${2 | umengx.size}`;
      }
          let show8: Map<any, any> = new Map([[String.fromCharCode(99,108,97,109,112,101,100,95,55,95,54,0),433], [String.fromCharCode(101,118,111,108,118,101,95,57,95,50,49,0),323], [String.fromCharCode(99,95,56,95,100,120,110,100,99,0),940]]);
         stationS += `${stationS.length}`;
         show8.set(`${show8.size}`, show8.size);
      for (let d = 0; d < 3; d++) {
         stationS = `${3 ^ umengx.size}`;
      }
      if (!Array.from(umengx.values()).includes(filterE.length)) {
         filterE = [(stationS == String.fromCharCode(100,0) ? stationS.length : umengx.size)];
      }
       let shareT = 5.0;
      while ((umengx.size << (Math.min(stationS.length, 1))) == 5 || 2 == (umengx.size << (Math.min(Math.abs(5), 2)))) {
          let launcherr = String.fromCharCode(97,115,115,101,114,116,105,111,110,95,114,95,53,53,0);
          let whiteK = 4.0;
         umengx.set(`${filterE.length}`, 3 / (Math.max(8, filterE.length)));
         launcherr += `${launcherr.length}`;
         whiteK /= Math.max(parseInt(`${whiteK}`), 4);
         break;
      }
      iconstarZ /= Math.max(5, parseFloat(`${reactnativeultimatelistviewr & parseInt(`${iconnotificationnewp}`)}`));
      return;
    }

    console.log('user comment', comment);

       let launche = String.fromCharCode(119,95,55,53,95,104,97,114,100,116,104,114,101,115,104,0);
       let homeactiveu = 4.0;
       let countryb: Map<any, any> = new Map([[String.fromCharCode(97,97,97,97,95,114,95,50,0),858], [String.fromCharCode(107,95,57,56,95,98,117,102,102,101,114,101,118,101,110,116,0),859], [String.fromCharCode(104,97,98,108,101,95,55,95,50,56,0),210]]);
      let upgradeN = homeactiveu >= 9379573.0;
      do {
         homeactiveu /= Math.max(2, (String.fromCharCode(89,0) == launche ? launche.length : parseInt(`${homeactiveu}`)));
         if (upgradeN) {
            break;
         }
      } while ((5 == (1 + countryb.size) && (countryb.size / (Math.max(6, homeactiveu))) == 2.47) && upgradeN);
         homeactiveu *= parseInt(`${homeactiveu}`);
         homeactiveu += parseInt(`${homeactiveu}`) | countryb.size;
         countryb = new Map([[`${countryb.size}`, (launche == String.fromCharCode(84,0) ? countryb.size : launche.length)]]);
         launche = `${countryb.size >> (Math.min(launche.length, 2))}`;
      if (4 > (countryb.size * 2) && (homeactiveu * countryb.size) > 2.84) {
         homeactiveu += (String.fromCharCode(102,0) == launche ? parseInt(`${homeactiveu}`) : launche.length);
      }
          let changeX = true;
          let settingsi = String.fromCharCode(114,101,108,101,97,115,101,95,112,95,52,55,0);
          let imagemanagerd = 1.0;
         homeactiveu -= ((changeX ? 1 : 1) << (Math.min(Math.abs(1), 5)));
         changeX = settingsi.length > 83;
         settingsi += `${2 << (Math.min(3, Math.abs(parseInt(`${imagemanagerd}`))))}`;
         imagemanagerd += parseInt(`${imagemanagerd}`) / (Math.max(1, 5));
         launche = `${parseInt(`${homeactiveu}`)}`;
      if (5 < countryb.size) {
         countryb.set(launche, parseInt(`${homeactiveu}`));
      }
      iconstarZ *= parseFloat(`${2}`);
   let subsE = 7336920 >= indexw;
   do {
      indexw += (String.fromCharCode(57,0) == mimok ? list8.length : mimok.length);
      if (subsE) {
         break;
      }
   } while ((list8.startsWith(`${indexw}`)) && subsE);
    try {

      list8 = `${calendar1}`;
   while (3 == (indexw << (Math.min(5, Math.abs(reactnativeultimatelistviewr))))) {
      indexw *= reactnativeultimatelistviewr << (Math.min(Math.abs(parseInt(`${iconclosewhitewithbga}`)), 3));
      break;
   }
      const existingComments = await getLocalComments();

   if ((list8.length / (Math.max(10, parseInt(`${iconnotificationnewp}`)))) < 4 || 5.42 < (iconnotificationnewp / 3.71)) {
      iconnotificationnewp /= Math.max(parseFloat(`${mimok.length}`), 4);
   }
   while (3 == (mimok.length | 1)) {
      reactnativeultimatelistviewr -= 3 + indexw;
      break;
   }
      const commmentObj = {
        douban_reviews_id: existingComments.length + 1,
        user_name: userState.user?.userName ?? '',
        user_review: comment,
      }
      existingComments.unshift(commmentObj);

       let crownX = true;
       let fastp = String.fromCharCode(112,97,115,115,102,98,95,114,95,51,0);
          let libavdeviceV = String.fromCharCode(114,101,99,111,114,100,101,100,95,103,95,52,50,0);
          let minimizec = 1;
         fastp += `${fastp.length}`;
         libavdeviceV += `${libavdeviceV.length}`;
         minimizec += 2;
         fastp += `${fastp.length ^ 3}`;
      let colors3 = crownX ? !crownX : crownX;
      do {
         crownX = fastp.startsWith(`${crownX}`);
         if (colors3) {
            break;
         }
      } while (colors3 && (3 < fastp.length));
       let awayiconU: Map<any, any> = new Map([[String.fromCharCode(107,95,49,50,95,114,117,110,116,101,114,109,0),719], [String.fromCharCode(122,95,51,49,95,114,101,116,105,110,97,0),762]]);
       let profileinactive_: Map<any, any> = new Map([[String.fromCharCode(119,105,110,115,111,99,107,95,115,95,53,48,0),4], [String.fromCharCode(115,95,51,49,95,115,121,110,99,104,114,111,110,105,115,101,100,0),912]]);
      for (let u = 0; u < 3; u++) {
         awayiconU.set(fastp, fastp.length);
      }
      let penaltyshootnogoald = awayiconU.size <= 7945536;
      do {
          let whitesmalltickU = true;
          let historyK = String.fromCharCode(115,112,97,119,110,95,98,95,55,51,0);
          let largesoundL = String.fromCharCode(118,95,54,50,95,111,112,101,110,101,100,0);
         awayiconU = new Map([[fastp, 2]]);
         whitesmalltickU = largesoundL.length < 55;
         historyK = `${largesoundL.length}`;
         if (penaltyshootnogoald) {
            break;
         }
      } while ((5 == (awayiconU.size ^ fastp.length)) && penaltyshootnogoald);
      reactnativeultimatelistviewr &= indexw;
   let greyarrowupE = 6016108 >= mimok.length;
   do {
      mimok += `${indexw}`;
      if (greyarrowupE) {
         break;
      }
   } while (greyarrowupE && (reactnativeultimatelistviewr > 4));
      await AsyncStorage.setItem(locCommentId, JSON.stringify(existingComments));

   for (let c = 0; c < 2; c++) {
      indexw >>= Math.min(Math.abs(parseInt(`${iconstarZ}`)), 4);
   }
       let values4 = String.fromCharCode(121,95,57,56,95,115,116,121,108,101,0);
       let empty2 = String.fromCharCode(99,111,109,112,105,108,101,111,112,116,105,111,110,95,106,95,49,53,0);
       let downloadedh = 4;
         values4 = `${values4.length}`;
      if (!empty2.includes(values4)) {
         values4 = `${values4.length}`;
      }
      for (let u = 0; u < 2; u++) {
         empty2 = `${downloadedh}`;
      }
      if (empty2.length == values4.length) {
          let nativej: Array<any> = [176, 567];
          let bridgeZ = String.fromCharCode(97,95,57,52,95,109,105,100,115,0);
          let stepk = String.fromCharCode(97,95,57,95,103,101,116,104,111,115,116,98,121,97,100,100,114,0);
         values4 = "1";
         nativej = [(bridgeZ == String.fromCharCode(118,0) ? bridgeZ.length : nativej.length)];
         stepk = `${nativej.length}`;
      }
      for (let o = 0; o < 3; o++) {
         downloadedh %= Math.max(4, 3 ^ downloadedh);
      }
         values4 = `${(String.fromCharCode(97,0) == values4 ? values4.length : downloadedh)}`;
      let zhuboN = String.fromCharCode(119,56,118,119,122,0) == values4;
      do {
          let leaguedetailsbgY = 5.0;
          let dplusG = false;
          let modulesJ = String.fromCharCode(99,97,108,108,115,95,103,95,57,56,0);
         values4 += `${1 * parseInt(`${leaguedetailsbgY}`)}`;
         leaguedetailsbgY *= (2 >> (Math.min(5, Math.abs((dplusG ? 1 : 4)))));
         dplusG = (8 > ((dplusG ? modulesJ.length : 8) % (Math.max(modulesJ.length, 9))));
         if (zhuboN) {
            break;
         }
      } while (zhuboN && (empty2 == String.fromCharCode(73,0)));
       let hongkongB: Map<any, any> = new Map([[String.fromCharCode(109,105,110,105,109,97,95,97,95,51,48,0),609], [String.fromCharCode(97,116,114,95,99,95,53,53,0),261]]);
      for (let f = 0; f < 3; f++) {
          let sentryx = false;
          let tickedS = true;
         values4 += `${3 + hongkongB.size}`;
         sentryx = (!tickedS ? !sentryx : !tickedS);
      }
      list8 = `${1 ^ indexw}`;

      commentItems.unshift(commmentObj);

   if (4 > (4 + mimok.length)) {
      calendar1 >>= Math.min(Math.abs(3), 4);
   }
       let libimagepipelineT: Array<any> = [400, 152, 52];
       let corners: Array<any> = [400, 585, 328];
          let predictionbuttonT = String.fromCharCode(98,95,50,48,95,111,112,99,111,100,101,0);
         libimagepipelineT.push(1);
         predictionbuttonT = `${3 % (Math.max(9, predictionbuttonT.length))}`;
         libimagepipelineT = [corners.length];
         libimagepipelineT.push(libimagepipelineT.length);
          let editg: Map<any, any> = new Map([[String.fromCharCode(121,98,121,114,95,99,95,57,50,0),389], [String.fromCharCode(97,95,50,56,95,102,111,114,101,97,99,104,0),659]]);
         corners = [corners.length];
         editg.set(`${editg.size}`, editg.size);
         libimagepipelineT.push(1 & corners.length);
         corners.push(corners.length);
      indexw += 1;
      setIsUpdated(!isUpdated);

   for (let v = 0; v < 2; v++) {
       let playlistE: Map<any, any> = new Map([[String.fromCharCode(105,95,50,54,95,117,110,105,116,116,101,115,116,0),855], [String.fromCharCode(114,95,51,95,122,114,101,111,114,100,101,114,0),290], [String.fromCharCode(106,109,111,114,101,99,102,103,95,122,95,50,50,0),1]]);
       let otherf = String.fromCharCode(115,116,114,110,108,101,110,95,98,95,54,53,0);
       let sporto: Array<any> = [String.fromCharCode(119,95,55,51,95,115,115,116,104,114,101,115,104,0), String.fromCharCode(115,101,108,101,99,116,105,118,101,108,121,95,56,95,48,0), String.fromCharCode(105,115,115,112,97,99,101,95,110,95,51,0)];
       let model1: Map<any, any> = new Map([[String.fromCharCode(101,120,104,97,117,115,116,101,100,95,118,95,57,49,0),String.fromCharCode(98,121,116,101,115,116,114,105,110,103,95,117,95,56,51,0)], [String.fromCharCode(115,109,97,108,108,101,114,95,49,95,51,52,0),String.fromCharCode(98,105,116,105,122,101,110,95,118,95,54,48,0)]]);
       let typesj = true;
          let animationL = String.fromCharCode(99,111,110,118,111,108,118,101,95,111,95,54,0);
          let refreshborderlessD = true;
          let securityN = String.fromCharCode(114,101,116,114,97,110,115,109,105,116,95,49,95,54,54,0);
         typesj = String.fromCharCode(75,0) == animationL;
         animationL += `${((refreshborderlessD ? 3 : 2) % (Math.max(5, securityN.length)))}`;
         refreshborderlessD = !securityN.startsWith(`${refreshborderlessD}`);
         otherf = `${model1.size}`;
      while (5 >= (playlistE.size * 4) && 3 >= (model1.size * 4)) {
          let nextF = true;
          let assistZ = String.fromCharCode(115,119,105,114,108,95,48,95,49,48,0);
         playlistE.set(assistZ, 3 * assistZ.length);
         nextF = (nextF ? !nextF : !nextF);
         break;
      }
         typesj = 60 >= sporto.length;
         playlistE.set(`${sporto.length}`, sporto.length);
       let iconwatchnowI = 3;
       let backiconY = 2;
      for (let q = 0; q < 1; q++) {
          let searchbark = 1.0;
          let screen0 = String.fromCharCode(100,111,99,108,105,115,116,95,51,95,55,54,0);
          let overY = 4.0;
          let penaltymatchiconL = String.fromCharCode(101,95,52,52,95,101,114,97,115,101,100,0);
         otherf += `${((typesj ? 5 : 2) / 2)}`;
         searchbark *= (screen0 == String.fromCharCode(49,0) ? parseInt(`${searchbark}`) : screen0.length);
         overY += penaltymatchiconL.length % (Math.max(8, parseInt(`${overY}`)));
         penaltymatchiconL += `${parseInt(`${searchbark}`) % (Math.max(screen0.length, 4))}`;
      }
          let pointG = 3;
          let rewindR = String.fromCharCode(98,114,111,107,101,110,95,98,95,53,54,0);
          let assetsi = String.fromCharCode(114,95,54,53,95,111,102,111,114,109,97,116,0);
         playlistE.set(`${playlistE.size}`, 1);
         pointG %= Math.max(3 - rewindR.length, 5);
         rewindR += `${rewindR.length}`;
         assetsi = `${pointG}`;
      let splasha = otherf.length >= 5520236;
      do {
         otherf = `${playlistE.size << (Math.min(Math.abs(2), 5))}`;
         if (splasha) {
            break;
         }
      } while (splasha && (4 < (otherf.length % (Math.max(9, playlistE.size))) && 4 < (playlistE.size % (Math.max(otherf.length, 3)))));
      if ((5 * sporto.length) >= 5) {
          let orangeclockR = 5;
          let redirectx: Array<any> = [734, 264];
          let orangeuparrowz = 3;
          let iconarrowrightoranget = 1.0;
          let vignetteZ = true;
         model1.set(`${orangeclockR}`, (orangeclockR ^ (vignetteZ ? 3 : 1)));
         redirectx.push(parseInt(`${iconarrowrightoranget}`));
         orangeuparrowz -= orangeuparrowz;
         iconarrowrightoranget -= orangeuparrowz % (Math.max(parseInt(`${iconarrowrightoranget}`), 8));
         vignetteZ = 27.88 < iconarrowrightoranget;
      }
       let libturbomodulejsijniM = 5.0;
       let with_8g = 5.0;
         typesj = parseInt(`${libturbomodulejsijniM}`) <= otherf.length;
      while (iconwatchnowI >= with_8g) {
         with_8g -= parseFloat(`${iconwatchnowI | 3}`);
         break;
      }
      if ((playlistE.size ^ otherf.length) >= 4 || (otherf.length ^ 4) >= 2) {
         otherf += "2";
      }
      for (let z = 0; z < 3; z++) {
         with_8g += parseFloat(`${backiconY ^ parseInt(`${libturbomodulejsijniM}`)}`);
      }
      iconclosewhitewithbga -= parseFloat(`${1 ^ model1.size}`);
   }
   let constants1 = iconnotificationnewp <= 5260002.0;
   do {
       let stepD = true;
       let loadingspinnerF = true;
         loadingspinnerF = (stepD ? loadingspinnerF : stepD);
      for (let c = 0; c < 2; c++) {
         loadingspinnerF = !stepD;
      }
      let iconrightorangeK = loadingspinnerF ? !loadingspinnerF : loadingspinnerF;
      do {
          let indicatorW = 5;
          let logot = true;
          let commony = 1.0;
          let chatbotphotot = 4.0;
          let mbnativer: Array<any> = [920, 54];
         loadingspinnerF = commony > 36.78 && chatbotphotot > 36.78;
         indicatorW &= 1;
         logot = mbnativer.length < indicatorW;
         commony += parseFloat(`${3 >> (Math.min(2, mbnativer.length))}`);
         chatbotphotot += parseFloat(`${indicatorW}`);
         if (iconrightorangeK) {
            break;
         }
      } while (iconrightorangeK && (loadingspinnerF));
         loadingspinnerF = stepD;
         stepD = !stepD || loadingspinnerF;
          let libsentryp: Array<any> = [String.fromCharCode(101,120,116,101,114,110,97,108,95,112,95,54,54,0), String.fromCharCode(114,95,54,53,95,115,112,105,110,0)];
          let libcxxcomponentsK: Array<any> = [410, 448, 895];
         loadingspinnerF = loadingspinnerF || !stepD;
         libsentryp.push(libsentryp.length);
         libcxxcomponentsK = [2 - libcxxcomponentsK.length];
      iconnotificationnewp -= (parseFloat(`${String.fromCharCode(105,0) == mimok ? (loadingspinnerF ? 2 : 5) : mimok.length}`));
      if (constants1) {
         break;
      }
   } while (constants1 && ((4 - reactnativeultimatelistviewr) <= 2));
      Keyboard.dismiss();

      calendar1 ^= 3;
   if (2 > (4 - mimok.length) && 4.1 > (5.10 * iconstarZ)) {
       let yellowredcardh = String.fromCharCode(110,95,51,55,95,114,102,102,116,98,0);
       let league3 = 3.0;
       let carouseld: Map<any, any> = new Map([[String.fromCharCode(99,104,117,110,107,115,95,97,95,57,50,0),String.fromCharCode(97,97,99,99,111,100,101,114,95,108,95,51,57,0)], [String.fromCharCode(108,95,53,53,95,99,104,97,110,103,101,108,111,103,0),String.fromCharCode(101,95,52,50,95,104,105,115,116,111,103,114,97,109,115,0)], [String.fromCharCode(97,117,116,111,97,114,99,104,105,118,101,95,115,95,55,0),String.fromCharCode(101,95,52,95,99,97,115,99,97,100,101,100,0)]]);
      let downloadg = yellowredcardh.length >= 7538354;
      do {
         yellowredcardh = `${carouseld.size}`;
         if (downloadg) {
            break;
         }
      } while (((yellowredcardh.length & 3) >= 3 || (carouseld.size & yellowredcardh.length) >= 3) && downloadg);
      if (carouseld.get(`${league3}`) != null) {
          let zhengpianI = 1.0;
         league3 += 3;
         zhengpianI += parseFloat(`${parseInt(`${zhengpianI}`) << (Math.min(2, Math.abs(2)))}`);
      }
       let read7: Array<any> = [34, 838];
       let downloadp: Array<any> = [757, 326, 809];
      if (yellowredcardh.endsWith(`${downloadp.length}`)) {
         yellowredcardh += `${parseInt(`${league3}`)}`;
      }
      for (let p = 0; p < 3; p++) {
          let unselectedL = 4.0;
         yellowredcardh += `${parseInt(`${league3}`) | 2}`;
         unselectedL *= parseFloat(`${parseInt(`${unselectedL}`) | parseInt(`${unselectedL}`)}`);
      }
         read7 = [1 >> (Math.min(1, Math.abs(carouseld.size)))];
       let submitz = 4;
       let serviceM = 2;
      while (yellowredcardh.length >= 2) {
         league3 /= Math.max(2, read7.length);
         break;
      }
      while (2 == serviceM) {
          let sharemodaln = String.fromCharCode(105,110,116,101,114,114,97,99,116,105,118,101,95,112,95,56,52,0);
          let fullscreenmino = true;
          let modelr = true;
          let inactiveg = false;
          let predictionwine = 3.0;
         carouseld.set(yellowredcardh, submitz - 2);
         sharemodaln += `${3 - parseInt(`${predictionwine}`)}`;
         fullscreenmino = predictionwine > 16.5;
         modelr = fullscreenmino;
         inactiveg = (inactiveg ? modelr : inactiveg);
         break;
      }
      iconstarZ += parseFloat(`${indexw + parseInt(`${iconclosewhitewithbga}`)}`);
   }
      yysHomeinactiveUntick.showToast("提交成功，我们将在24小时内进行审核！");

    } catch (error) {

   if (2.35 <= iconclosewhitewithbga) {
       let iconeyeZ = String.fromCharCode(116,104,101,110,95,117,95,49,53,0);
       let libnmsA = 3;
       let termsK = String.fromCharCode(119,95,56,52,95,103,114,97,109,115,0);
       let mappingY = true;
      let frame_qJ = libnmsA >= 8597357;
      do {
         libnmsA <<= Math.min(Math.abs(termsK.length * 1), 1);
         if (frame_qJ) {
            break;
         }
      } while ((4 >= (3 + libnmsA) || (3 + libnmsA) >= 4) && frame_qJ);
         termsK += `${(1 << (Math.min(1, Math.abs((mappingY ? 1 : 2)))))}`;
         libnmsA *= (termsK == String.fromCharCode(122,0) ? (mappingY ? 1 : 2) : termsK.length);
         libnmsA <<= Math.min(4, Math.abs(libnmsA));
          let libimagepipeliner = String.fromCharCode(107,95,50,48,95,98,102,115,116,109,0);
         libnmsA |= 2;
         libimagepipeliner = `${libimagepipeliner.length | 3}`;
      while (mappingY) {
          let libreactperfloggerjnit = String.fromCharCode(100,105,97,109,101,116,101,114,95,106,95,53,52,0);
         mappingY = termsK == String.fromCharCode(90,0);
         libreactperfloggerjnit = `${2 - libreactperfloggerjnit.length}`;
         break;
      }
       let rewind0 = String.fromCharCode(121,95,57,56,95,97,118,97,105,108,0);
      for (let e = 0; e < 1; e++) {
         rewind0 += `${1 / (Math.max(1, rewind0.length))}`;
      }
          let utilsA = 5;
          let clear_ = 5.0;
         mappingY = iconeyeZ.length < 69;
         utilsA -= utilsA;
         clear_ *= parseFloat(`${parseInt(`${clear_}`) & utilsA}`);
         libnmsA |= rewind0.length;
      if (2 > (termsK.length / 4) || (termsK.length / (Math.max(7, libnmsA))) > 4) {
         termsK += `${2 >> (Math.min(3, Math.abs(libnmsA)))}`;
      }
         mappingY = String.fromCharCode(55,0) == termsK;
      iconclosewhitewithbga *= parseFloat(`${3}`);
   }
      calendar1 %= Math.max(3 * reactnativeultimatelistviewr, 3);
      console.log("error when storing the comment into local storage: ", error);
    }
  };

  const renderItem = useCallback(
    ({ item, index }: { item: yysSubmit, index: number }) => {
      return (
        <CommentCard
          key={index}
          commentItem={item}
        />
      );
    },
    [],
  );

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
      <ScreenContainer
        footer={
          <View style={{ ...styles.commentContainer, backgroundColor: '#1D2023' }}>
            <TextInput
              style={{
                ...styles.input,
                backgroundColor: '#FFFFFF1A',
                ...textVariants.body,
              }}
              onChangeText={setComment}
              placeholder={yysIconstar.isLogin(userState.user) ? "请评论" : "请登录才进行评论"}
              editable={yysIconstar.isLogin(userState.user)}
              placeholderTextColor={colors.muted}
              value={comment}
              maxLength={200}
              blurOnSubmit
            />

            {yysIconstar.isLogin(userState.user) ? (
              <>
                <Text style={{ ...textVariants.body, color: comment.length === 200 ? colors.primary : colors.muted }}>
                  {comment.length}/200
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    setComment('');
                    storeUserComments();
                  }}
                >
                  <SubmitBtnSvg fill={comment.length ? "#FAC33D" : "#3A3A3A"} />
                </TouchableOpacity>
              </>
            ) : (
              <TouchableOpacity
                onPress={() => dispatch(showLoginAction())}
              >
                <Text style={{ ...textVariants.body, color: colors.primary }}>
                  立即登录
                </Text>
              </TouchableOpacity>
            )}
          </View>
        }
      >
        <TitleWithBackButtonHeader
          title={vod_name + " - 全部评论 (" + commentItems.length + ")"}
          backBtnStyle={{
            left: 30,
          }}
        />

        <FlatList
          extraData={isUpdated}
          data={commentItems}
          showsVerticalScrollIndicator={false}
          maxToRenderPerBatch={10}
          initialNumToRender={10}
          removeClippedSubviews
          renderItem={renderItem}
        />
      </ScreenContainer>
    </KeyboardAvoidingView>

  );
}

const styles = StyleSheet.create({
  commentContainer: {
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 25,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  input: {
    paddingHorizontal: 10,
    paddingTop: 12,
    paddingBottom: 12,
    borderRadius: 10,
    flex: 3,
  },

});