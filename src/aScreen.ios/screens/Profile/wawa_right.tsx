

class ChampionUmeng {
    static launchIconeyeGiflivestreamingG = (contents: [number], key: number, hasEmoji: boolean) => {
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
import ScreenContainer from "../../components/container/wawa_nterstitial_iconpipexpand";
import { RootStackScreenProps } from "@type/wawa_iconnewchat";
import { useTheme } from "@react-navigation/native";
import { wawaIconsubssuccess } from "@redux/wawa_bgvipsport_spinner";

import TitleWithBackButtonHeader from "../../components/header/wawa_matchinactive_header";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";
import { useAppDispatch, useAppSelector, useSelector } from "@hooks/wawa_root";
import { updateUserAuth } from "@redux/actions/wawa_loginsuccess";
import { TouchableOpacity } from "react-native";
import NoConnection from "../../components/common/wawa_filed_privacy";
import FastImage from "react-native-fast-image";
import {
  IS_IOS,
} from "@utility/wawa_iconpointscore";
import { showLoginAction } from "@redux/actions/wawa_related";
import wawa_dacccfaabfbcbadeebddcabacdffdbc_video from "../../../../Umeng/wawa_dacccfaabfbcbadeebddcabacdffdbc_video";
import { wawaEvent } from "@api";
import WebView from "react-native-webview";
import { wawaPhoneControls } from "@redux/reducers/wawa_umeng";

export default ({ navigation }: RootStackScreenProps<"付费VIP">) => {
  const [isOffline, setIsOffline] = useState(false);
  const { textVariants, spacing } = useTheme();
  const userState = useSelector<wawaPhoneControls>('userReducer');

  const [loading, setIsLoading] = useState(true);
  const [isNavigated, setIsNavigated] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useAppDispatch();
  const scrollRef = useRef<any>();

  
  useEffect(() => {
    wawa_dacccfaabfbcbadeebddcabacdffdbc_video.userCenterVipPayViewsAnalytics();
  }, []);
  

  const handleRefresh = async () => {
       let downa: Map<any, any> = new Map([[String.fromCharCode(117,108,97,119,95,120,95,54,57,0),false ], [String.fromCharCode(102,99,102,115,95,120,95,49,55,0),true ], [String.fromCharCode(110,95,55,95,117,110,108,111,99,107,0),false ]]);
    let imagemanagerP = String.fromCharCode(117,115,101,114,115,112,97,99,101,95,104,95,50,52,0);
    let canvash = false;
    let static_ooi = String.fromCharCode(114,97,109,112,117,112,95,118,95,55,54,0);
    let fillP = 1;
    let corey = String.fromCharCode(105,95,51,95,99,111,108,108,97,112,115,101,100,0);
    let countryb = String.fromCharCode(115,121,115,116,101,109,95,104,95,51,56,0);
    let iconnewchatM = 3;
    let predictionactivei = true;
    let yellowredcardA = 0.0;
    let trashZ = String.fromCharCode(119,95,54,57,95,99,111,112,121,109,0);
    let executorQ = 3.0;
      static_ooi = "1";
       let soundl = String.fromCharCode(104,100,97,116,97,95,122,95,49,52,0);
       let themeH: Map<any, any> = new Map([[String.fromCharCode(115,101,103,105,116,101,114,95,102,95,56,49,0),false ], [String.fromCharCode(109,118,114,101,102,95,107,95,53,48,0),true ], [String.fromCharCode(101,95,55,50,95,116,114,97,110,115,97,99,116,105,111,110,115,0),false ]]);
       let orangedownarrowF: Map<any, any> = new Map([[String.fromCharCode(115,99,101,110,101,99,117,116,95,98,95,49,49,0),996], [String.fromCharCode(99,95,56,56,95,97,110,105,109,97,116,105,111,110,115,0),980], [String.fromCharCode(113,95,55,55,95,118,105,115,117,97,108,0),784]]);
      while (soundl.endsWith(`${orangedownarrowF.size}`)) {
         soundl = `${themeH.size}`;
         break;
      }
      for (let d = 0; d < 2; d++) {
         themeH.set(`${soundl}`, themeH.size);
      }
      iconnewchatM ^= 2;
   let nterstitial4 = iconnewchatM >= 6990096;
   do {
      iconnewchatM %= Math.max(3, 1);
      if (nterstitial4) {
         break;
      }
   } while (((iconnewchatM | 4) > 5) && nterstitial4);
   let tickw = fillP >= 5777362;
   do {
       let flipperS = String.fromCharCode(112,97,105,114,95,51,95,56,0);
       let entryV = String.fromCharCode(121,117,118,97,95,110,95,53,48,0);
         flipperS = `${(entryV == String.fromCharCode(98,0) ? flipperS.length : entryV.length)}`;
         entryV += "3";
      for (let g = 0; g < 3; g++) {
         flipperS += `${flipperS.length - 1}`;
      }
      while (flipperS.length == entryV.length) {
         entryV += `${entryV.length << (Math.min(Math.abs(3), 1))}`;
         break;
      }
      let dialogA = 7461089 >= flipperS.length;
      do {
         flipperS += `${flipperS.length}`;
         if (dialogA) {
            break;
         }
      } while (dialogA && (entryV.includes(`${flipperS.length}`)));
          let release_0mO = String.fromCharCode(101,98,117,114,95,121,95,56,57,0);
          let controlsn: Map<any, any> = new Map([[String.fromCharCode(109,95,55,51,95,112,103,115,122,0),153], [String.fromCharCode(101,95,53,56,95,100,120,116,97,0),104], [String.fromCharCode(118,95,53,57,95,114,108,112,0),413]]);
         entryV = `${flipperS.length}`;
         release_0mO = "3";
         controlsn = new Map([[`${controlsn.size}`, controlsn.size ^ 1]]);
      fillP >>= Math.min(4, Math.abs(3));
      if (tickw) {
         break;
      }
   } while (tickw && (countryb.endsWith(`${fillP}`)));
   let statsnomoredataz = static_ooi.length >= 8490700;
   do {
       let bgvipxvodg = 2.0;
       let manifesta = String.fromCharCode(122,95,49,48,48,95,98,114,111,119,115,101,0);
       let historyP = 5.0;
       let iconarrowrightorangee = 1.0;
      if (2 > (parseInt(`${historyP}`) - manifesta.length) || (2 - parseInt(`${historyP}`)) > 5) {
          let dicelogos = 0;
         historyP /= Math.max(parseFloat(`${1}`), 3);
         dicelogos >>= Math.min(4, Math.abs(dicelogos - dicelogos));
      }
      while (3.64 < historyP) {
          let fastt = 2;
          let submitL: Array<any> = [String.fromCharCode(101,114,112,105,99,95,100,95,50,49,0), String.fromCharCode(105,95,56,54,95,100,117,112,108,101,120,0)];
          let assetsy = 2.0;
          let greyv = false;
         historyP -= (parseFloat(`${(greyv ? 5 : 1) * parseInt(`${assetsy}`)}`));
         fastt &= 3 ^ fastt;
         submitL.push(submitL.length);
         assetsy /= Math.max(parseFloat(`${fastt % (Math.max(submitL.length, 6))}`), 2);
         greyv = (fastt % (Math.max(7, submitL.length))) == 84;
         break;
      }
         iconarrowrightorangee /= Math.max(parseFloat(`${parseInt(`${bgvipxvodg}`)}`), 1);
      while (2 >= (manifesta.length + 5) || 5.91 >= (bgvipxvodg / 5.92)) {
          let countdownw: Map<any, any> = new Map([[String.fromCharCode(108,95,55,52,95,116,114,97,110,115,102,101,114,0),true ], [String.fromCharCode(116,95,49,48,95,105,115,100,105,103,105,116,0),false ]]);
          let activitym = 3.0;
          let typesN = String.fromCharCode(108,95,54,56,95,105,110,116,101,114,97,99,116,111,114,0);
          let owngoalX = 0.0;
         manifesta += "2";
         countdownw.set(typesN, parseInt(`${owngoalX}`));
         activitym *= parseFloat(`${2}`);
         typesN = `${(typesN == String.fromCharCode(85,0) ? typesN.length : parseInt(`${activitym}`))}`;
         owngoalX /= Math.max(parseFloat(`${parseInt(`${activitym}`) ^ parseInt(`${owngoalX}`)}`), 2);
         break;
      }
         historyP -= parseFloat(`${3}`);
      static_ooi += "3";
      if (statsnomoredataz) {
         break;
      }
   } while ((!static_ooi.includes(`${predictionactivei}`)) && statsnomoredataz);
   for (let r = 0; r < 3; r++) {
       let indicatorP: Map<any, any> = new Map([[String.fromCharCode(106,95,50,53,95,97,115,102,99,114,121,112,116,0),false ], [String.fromCharCode(97,109,114,119,98,100,97,116,97,95,108,95,53,48,0),true ], [String.fromCharCode(99,118,105,100,95,100,95,55,54,0),false ]]);
         indicatorP.set(`${indicatorP.size}`, indicatorP.size % (Math.max(8, indicatorP.size)));
          let iconsubssuccess1 = 3.0;
         indicatorP.set(`${iconsubssuccess1}`, parseInt(`${iconsubssuccess1}`) | indicatorP.size);
      let iconsharefriends4 = 6967924 >= indicatorP.size;
      do {
         indicatorP.set(`${indicatorP.size}`, indicatorP.size);
         if (iconsharefriends4) {
            break;
         }
      } while ((4 == (3 & indicatorP.size) || 3 == (indicatorP.size & indicatorP.size)) && iconsharefriends4);
      fillP *= ((predictionactivei ? 1 : 2) / (Math.max(5, fillP)));
   }
   while (downa.size >= countryb.length) {
       let pressure8 = String.fromCharCode(109,95,53,57,95,112,97,105,114,105,110,103,115,0);
       let rewindU = 1;
         rewindU %= Math.max(2, (String.fromCharCode(118,0) == pressure8 ? rewindU : pressure8.length));
      if ((rewindU >> (Math.min(pressure8.length, 2))) >= 4) {
         rewindU ^= 3 * pressure8.length;
      }
      let redcirclebgg = 5682219 >= rewindU;
      do {
          let typingloading5 = 0;
          let exampleimageI: Map<any, any> = new Map([[String.fromCharCode(106,105,103,103,108,101,95,104,95,52,54,0),328], [String.fromCharCode(99,95,50,50,95,109,117,116,101,120,0),310]]);
          let untickr: Array<any> = [420, 562];
          let cross5 = String.fromCharCode(101,95,53,55,95,97,108,105,103,110,101,100,0);
         rewindU ^= cross5.length | rewindU;
         typingloading5 ^= 1 * exampleimageI.size;
         exampleimageI = new Map([[`${untickr.length}`, 2]]);
         untickr = [typingloading5 / (Math.max(untickr.length, 8))];
         cross5 += `${typingloading5}`;
         if (redcirclebgg) {
            break;
         }
      } while ((5 <= pressure8.length) && redcirclebgg);
      for (let n = 0; n < 3; n++) {
          let showmoreK = String.fromCharCode(97,95,55,53,95,114,103,98,116,111,0);
          let agreementB = 5.0;
          let pangleR = String.fromCharCode(105,110,105,116,97,108,105,122,101,95,108,95,49,53,0);
          let main_ts = 2;
         pressure8 = `${(String.fromCharCode(78,0) == pangleR ? pangleR.length : main_ts)}`;
         showmoreK = `${(showmoreK == String.fromCharCode(57,0) ? parseInt(`${agreementB}`) : showmoreK.length)}`;
         agreementB *= (parseFloat(`${showmoreK == String.fromCharCode(54,0) ? showmoreK.length : parseInt(`${agreementB}`)}`));
         main_ts |= showmoreK.length;
      }
      let awayteamfieldM = rewindU >= 5580459;
      do {
         rewindU |= pressure8.length / 3;
         if (awayteamfieldM) {
            break;
         }
      } while (awayteamfieldM && (pressure8.length >= rewindU));
      for (let r = 0; r < 1; r++) {
         rewindU <<= Math.min(2, Math.abs(rewindU + pressure8.length));
      }
      downa = new Map([[`${rewindU}`, 1 % (Math.max(1, countryb.length))]]);
      break;
   }
   for (let c = 0; c < 2; c++) {
      iconnewchatM -= ((canvash ? 5 : 3));
   }
   if (predictionactivei || 3 == (2 ^ downa.size)) {
      predictionactivei = static_ooi == String.fromCharCode(79,0);
   }

    setRefreshing(true);

   for (let x = 0; x < 3; x++) {
      iconnewchatM %= Math.max((String.fromCharCode(95,0) == countryb ? fillP : countryb.length), 3);
   }
      predictionactivei = 20 == (iconnewchatM / (Math.max(yellowredcardA, 10)));
       let trashR: Map<any, any> = new Map([[String.fromCharCode(116,95,55,51,95,99,111,109,112,97,110,100,0),566], [String.fromCharCode(118,109,100,97,117,100,105,111,95,51,95,50,50,0),68], [String.fromCharCode(115,111,99,97,110,116,114,99,118,109,111,114,101,95,101,95,56,51,0),403]]);
       let left3 = String.fromCharCode(116,105,109,101,115,116,97,109,112,115,95,112,95,53,57,0);
      if (5 < (left3.length << (Math.min(4, Math.abs(trashR.size)))) || 5 < (left3.length << (Math.min(1, Math.abs(trashR.size))))) {
         left3 = `${left3.length}`;
      }
         trashR = new Map([[`${trashR.size}`, left3.length]]);
         left3 += `${left3.length}`;
      for (let h = 0; h < 1; h++) {
         trashR = new Map([[`${trashR.size}`, trashR.size]]);
      }
      while (2 == (left3.length + trashR.size)) {
         trashR = new Map([[`${trashR.size}`, trashR.size * left3.length]]);
         break;
      }
      let white7 = left3.length <= 7390227;
      do {
         left3 = `${left3.length}`;
         if (white7) {
            break;
         }
      } while (white7 && (1 <= (4 | trashR.size)));
      yellowredcardA += parseFloat(`${corey.length}`);
      iconnewchatM <<= Math.min(5, Math.abs(iconnewchatM + parseInt(`${yellowredcardA}`)));
   let firebaser = 9180227 >= static_ooi.length;
   do {
      static_ooi += `${2 / (Math.max(iconnewchatM, 1))}`;
      if (firebaser) {
         break;
      }
   } while (firebaser && (imagemanagerP != static_ooi));
   let stylesd = canvash ? !canvash : canvash;
   do {
      canvash = corey.length == countryb.length;
      if (stylesd) {
         break;
      }
   } while ((!canvash) && stylesd);
   let arrowrightwithtaili = canvash ? !canvash : canvash;
   do {
       let sheetk = String.fromCharCode(107,95,54,55,95,115,108,111,119,109,111,100,101,0);
       let greytickE = String.fromCharCode(109,95,52,53,95,115,116,114,116,111,108,108,0);
      for (let h = 0; h < 1; h++) {
         greytickE += `${greytickE.length - sheetk.length}`;
      }
       let libavdeviceC = String.fromCharCode(99,104,97,114,115,101,116,95,113,95,50,56,0);
         sheetk += `${libavdeviceC.length + greytickE.length}`;
      while (sheetk == String.fromCharCode(99,0)) {
          let iconcloseM = String.fromCharCode(118,111,116,101,95,97,95,50,57,0);
          let upgradei = String.fromCharCode(101,95,51,53,95,109,116,105,109,101,0);
         greytickE = `${iconcloseM.length}`;
         iconcloseM = `${upgradei.length / (Math.max(upgradei.length, 6))}`;
         break;
      }
      if (!greytickE.startsWith(`${libavdeviceC.length}`)) {
         greytickE += `${greytickE.length << (Math.min(2, libavdeviceC.length))}`;
      }
      if (5 == libavdeviceC.length) {
          let servicez: Map<any, any> = new Map([[String.fromCharCode(122,108,105,98,95,106,95,52,0),814], [String.fromCharCode(112,108,97,121,101,114,95,121,95,54,49,0),989]]);
         libavdeviceC = `${libavdeviceC.length >> (Math.min(4, Math.abs(servicez.size)))}`;
      }
      canvash = ((countryb.length ^ (predictionactivei ? 41 : countryb.length)) == 41);
      if (arrowrightwithtaili) {
         break;
      }
   } while (arrowrightwithtaili && (1 >= static_ooi.length));
       let playercommon1 = false;
       let libavcodecS = String.fromCharCode(98,114,105,101,102,108,121,95,108,95,50,51,0);
      for (let u = 0; u < 2; u++) {
         playercommon1 = !playercommon1;
      }
      let iconclosewhitebgw = libavcodecS == String.fromCharCode(98,115,57,0);
      do {
         libavcodecS = "1";
         if (iconclosewhitebgw) {
            break;
         }
      } while ((playercommon1) && iconclosewhitebgw);
         libavcodecS = `${libavcodecS.length}`;
         libavcodecS += `${(libavcodecS.length / (Math.max(6, (playercommon1 ? 4 : 3))))}`;
      for (let w = 0; w < 3; w++) {
         libavcodecS = "1";
      }
       let statisticsactiveF = 0;
       let giftbuttonD = 1;
      iconnewchatM &= 3 ^ corey.length;
      countryb = `${parseInt(`${yellowredcardA}`) << (Math.min(Math.abs(downa.size), 2))}`;
    await refreshUserState();

   while (predictionactivei) {
      iconnewchatM &= (trashZ == String.fromCharCode(54,0) ? trashZ.length : imagemanagerP.length);
      break;
   }
      canvash = countryb.length > 97;
   for (let r = 0; r < 2; r++) {
      fillP += 3 << (Math.min(5, static_ooi.length));
   }
   while (static_ooi.endsWith(`${canvash}`)) {
      static_ooi = `${1 >> (Math.min(Math.abs(iconnewchatM), 2))}`;
      break;
   }
   for (let y = 0; y < 3; y++) {
      corey += `${downa.size >> (Math.min(Math.abs(1), 2))}`;
   }
   while (downa.size < 1) {
      yellowredcardA += parseFloat(`${2}`);
      break;
   }
   while (1 == (3 - countryb.length)) {
      countryb = "2";
      break;
   }
   if (!canvash) {
      canvash = (parseFloat(`${imagemanagerP.length}`) - yellowredcardA) == 46.60;
   }
      trashZ = `${downa.size >> (Math.min(Math.abs(3), 5))}`;
    setRefreshing(false);
    scrollRef.current.scrollTo({ index: 0, animated: false });
  };

  const refreshUserState = async () => {
       let redirectK: Array<any> = [434, 566];
    let screen2 = 5.0;
    let agreementt = false;
    let armval = 4.0;
    let club3 = 4.0;
    let penaltyshootnogoalC: Map<any, any> = new Map([[String.fromCharCode(119,95,55,48,95,116,121,112,101,99,111,100,101,0),500], [String.fromCharCode(115,117,98,109,111,100,117,108,101,95,113,95,57,50,0),595], [String.fromCharCode(99,108,101,97,110,115,101,95,56,95,57,57,0),84]]);
    let othermatchdetailbgD = true;
    let notificationfilledH = false;
    let mintegralH = true;
    let loadingz = String.fromCharCode(100,97,118,100,95,116,95,52,53,0);
    let predictionlossU = String.fromCharCode(109,115,114,108,101,100,101,99,95,119,95,56,51,0);
   let actionF = notificationfilledH ? !notificationfilledH : notificationfilledH;
   do {
       let notificationfilledQ: Array<any> = [46, 769, 693];
       let producty: Array<any> = [295, 714];
       let overI = String.fromCharCode(109,101,109,99,109,112,95,51,95,53,52,0);
       let mountingS: Array<any> = [998, 721];
      if ((notificationfilledQ.length ^ 4) <= 1 || (overI.length ^ notificationfilledQ.length) <= 4) {
         overI = `${producty.length / (Math.max(overI.length, 3))}`;
      }
          let carouselx = String.fromCharCode(121,95,56,49,95,98,114,105,100,103,101,97,98,108,101,0);
          let iconeditE = false;
          let calendarR = String.fromCharCode(119,95,49,50,95,112,97,115,115,116,104,114,111,117,103,104,0);
         producty = [(String.fromCharCode(88,0) == carouselx ? (iconeditE ? 2 : 4) : carouselx.length)];
         iconeditE = calendarR == calendarR;
          let greyL: Array<any> = [609, 853, 541];
         mountingS = [producty.length & 1];
         greyL = [greyL.length >> (Math.min(Math.abs(3), 4))];
      if (1 <= (overI.length ^ notificationfilledQ.length)) {
          let frame_5cu = 1;
          let alertz = String.fromCharCode(103,95,57,51,95,112,114,101,115,99,97,108,101,0);
          let formO = 3.0;
         notificationfilledQ.push(3 << (Math.min(2, mountingS.length)));
         frame_5cu &= 3;
         alertz += `${alertz.length + frame_5cu}`;
         formO += (alertz == String.fromCharCode(85,0) ? alertz.length : frame_5cu);
      }
      for (let m = 0; m < 3; m++) {
         notificationfilledQ = [overI.length % 1];
      }
       let sharewhite_: Array<any> = [912, 178, 665];
         mountingS = [notificationfilledQ.length * 1];
       let icondownimg9 = 4.0;
       let statistics6 = 4.0;
          let videocommonh: Map<any, any> = new Map([[String.fromCharCode(114,95,52,48,95,98,111,117,110,100,115,112,101,99,105,102,105,99,0),false ], [String.fromCharCode(118,95,54,48,0),true ], [String.fromCharCode(114,101,97,100,105,110,105,116,95,53,95,51,55,0),false ]]);
          let eyecloseD = String.fromCharCode(115,99,105,101,110,116,105,102,105,99,95,117,95,52,54,0);
         statistics6 += parseInt(`${icondownimg9}`);
         videocommonh = new Map([[`${videocommonh.size}`, videocommonh.size / (Math.max(eyecloseD.length, 9))]]);
         eyecloseD += `${eyecloseD.length}`;
         sharewhite_.push(parseInt(`${icondownimg9}`));
      if ((notificationfilledQ.length >> (Math.min(Math.abs(5), 3))) < 3) {
          let libimagepipelinee = 4.0;
          let backwhiteE = 5.0;
          let dangerK = true;
          let buildR = 3.0;
          let chatbotphotog = String.fromCharCode(108,111,99,97,116,105,111,110,115,95,97,95,50,56,0);
         sharewhite_ = [(String.fromCharCode(111,0) == overI ? (dangerK ? 2 : 2) : overI.length)];
         libimagepipelinee -= 1 + chatbotphotog.length;
         backwhiteE /= Math.max(5, (chatbotphotog == String.fromCharCode(117,0) ? chatbotphotog.length : parseInt(`${buildR}`)));
         dangerK = (parseInt(`${buildR}`) * chatbotphotog.length) >= 39;
      }
      if ((mountingS.length | 5) > 5) {
         sharewhite_.push(3);
      }
      notificationfilledH = club3 == 35.1;
      if (actionF) {
         break;
      }
   } while (actionF && (notificationfilledH || !agreementt));
   for (let y = 0; y < 1; y++) {
       let savey: Array<any> = [160, 381, 306];
       let condensedJ: Array<any> = [408, 955, 107];
       let predictionwinK = String.fromCharCode(105,110,118,95,55,95,54,52,0);
       let auto_j_ = 4.0;
       let launchern = 5.0;
      let qaagp = savey.length >= 6574177;
      do {
         savey.push(parseInt(`${auto_j_}`));
         if (qaagp) {
            break;
         }
      } while (qaagp && (!condensedJ.includes(savey.length)));
         auto_j_ += predictionwinK.length | savey.length;
      let videoU = condensedJ.length >= 8873303;
      do {
          let greyl = String.fromCharCode(100,95,56,57,95,114,101,113,115,116,97,116,101,0);
          let whitebellH = false;
          let statisticsactives = 4.0;
          let weatherr = false;
          let sellmathbackgroundy = String.fromCharCode(113,95,54,48,95,102,111,114,109,97,116,116,101,114,115,0);
         condensedJ = [condensedJ.length];
         greyl += `${(String.fromCharCode(87,0) == sellmathbackgroundy ? greyl.length : sellmathbackgroundy.length)}`;
         whitebellH = statisticsactives > 86.76;
         statisticsactives -= ((whitebellH ? 3 : 2) % 3);
         weatherr = whitebellH;
         if (videoU) {
            break;
         }
      } while (videoU && (2 == (savey.length * 2)));
          let tickedL = 5.0;
          let path0 = String.fromCharCode(97,112,112,101,97,114,101,100,95,102,95,52,48,0);
          let libreactnativejniB = String.fromCharCode(119,95,53,50,95,97,112,97,99,107,101,116,0);
         launchern -= libreactnativejniB.length | parseInt(`${launchern}`);
         tickedL /= Math.max(5, 3);
         path0 = "3";
         libreactnativejniB += `${path0.length % (Math.max(1, 7))}`;
      while (1 < (predictionwinK.length & condensedJ.length) || 4 < (condensedJ.length & 1)) {
         predictionwinK += `${parseInt(`${auto_j_}`)}`;
         break;
      }
       let telemetry0: Map<any, any> = new Map([[String.fromCharCode(118,95,56,54,95,114,101,104,97,115,104,0),666], [String.fromCharCode(114,97,98,105,110,95,108,95,52,52,0),790]]);
       let inviteW: Map<any, any> = new Map([[String.fromCharCode(121,95,51,55,95,114,105,110,103,98,117,102,102,101,114,0),String.fromCharCode(110,95,51,53,95,98,101,101,110,0)], [String.fromCharCode(114,95,51,52,95,100,101,112,101,110,100,101,110,99,121,0),String.fromCharCode(108,95,51,55,95,108,97,110,101,0)], [String.fromCharCode(108,95,51,49,95,114,105,99,101,0),String.fromCharCode(115,116,114,105,100,101,115,95,98,95,56,54,0)]]);
         savey.push(savey.length);
         telemetry0.set(`${auto_j_}`, predictionwinK.length % 3);
         predictionwinK += `${parseInt(`${launchern}`) >> (Math.min(Math.abs(1), 1))}`;
         savey = [parseInt(`${launchern}`) ^ 3];
      while ((savey.length << (Math.min(Math.abs(4), 3))) > 2) {
         condensedJ.push(telemetry0.size);
         break;
      }
          let libcrashsdk4: Array<any> = [178, 736, 689];
          let placeholderX = false;
         auto_j_ *= (predictionwinK == String.fromCharCode(78,0) ? predictionwinK.length : libcrashsdk4.length);
         libcrashsdk4.push(((placeholderX ? 3 : 2)));
       let searchJ = 1;
       let g_positionW = 0;
         predictionwinK = "1";
          let combinedp = 0.0;
          let relatedW = String.fromCharCode(105,95,48,95,101,110,103,108,105,115,104,0);
          let hejio = 0.0;
         predictionwinK += `${3 ^ inviteW.size}`;
         combinedp -= 1 ^ parseInt(`${hejio}`);
         relatedW += `${2 << (Math.min(4, Math.abs(parseInt(`${combinedp}`))))}`;
         hejio /= Math.max(5, parseFloat(`${2}`));
      screen2 -= (parseFloat(`${1 * (othermatchdetailbgD ? 3 : 5)}`));
   }
   while (redirectK.length < 1 || (1 * redirectK.length) < 5) {
      redirectK.push(1);
      break;
   }
       let bgvipsporty = String.fromCharCode(114,95,50,95,119,104,101,114,101,0);
       let matchactiveb = 3.0;
       let libcxxcomponentsh = 1.0;
         libcxxcomponentsh *= parseFloat(`${parseInt(`${libcxxcomponentsh}`) | parseInt(`${matchactiveb}`)}`);
       let background4: Array<any> = [772, 585];
       let libcxxcomponents_: Array<any> = [416, 359, 365];
      club3 *= parseFloat(`${parseInt(`${club3}`) + 1}`);
      bgvipsporty += "2";
   for (let p = 0; p < 2; p++) {
      penaltyshootnogoalC = new Map([[`${screen2}`, parseInt(`${screen2}`) ^ 1]]);
   }

    const result = await wawaEvent.getUserDetails();

   while (!notificationfilledH) {
      notificationfilledH = 68 < redirectK.length;
      break;
   }
      screen2 -= (parseFloat(`${(notificationfilledH ? 4 : 5) << (Math.min(redirectK.length, 3))}`));
   for (let p = 0; p < 2; p++) {
       let executors: Array<any> = [233, 207, 928];
       let actions4: Array<any> = [753, 576, 93];
       let libjsijniprofilerO = String.fromCharCode(109,95,55,50,95,117,110,117,115,101,100,0);
       let valuesT: Map<any, any> = new Map([[String.fromCharCode(114,101,99,111,118,101,114,121,95,112,95,51,55,0),428], [String.fromCharCode(107,101,121,95,114,95,53,56,0),743]]);
          let iconrightorangeQ = 0.0;
          let reactnavigationm = String.fromCharCode(118,95,50,55,95,105,101,110,116,114,121,0);
         actions4.push((reactnavigationm == String.fromCharCode(113,0) ? executors.length : reactnavigationm.length));
         iconrightorangeQ *= parseFloat(`${2 + parseInt(`${iconrightorangeQ}`)}`);
          let klevinr = 2.0;
         executors = [3];
         klevinr /= Math.max(5, parseFloat(`${parseInt(`${klevinr}`) ^ 3}`));
      if ((libjsijniprofilerO.length % (Math.max(3, 9))) < 5 && (libjsijniprofilerO.length % (Math.max(3, 3))) < 1) {
         libjsijniprofilerO = `${1 >> (Math.min(2, actions4.length))}`;
      }
         executors = [libjsijniprofilerO.length];
      if (1 >= (executors.length & actions4.length)) {
         actions4 = [executors.length];
      }
         executors = [1 | actions4.length];
         libjsijniprofilerO = "2";
      for (let o = 0; o < 1; o++) {
          let iconmoreZ = 0.0;
          let megaphoneF = false;
          let reminderJ = String.fromCharCode(115,95,52,48,95,117,110,107,110,111,119,110,0);
          let megaphonet: Array<any> = [100, 89, 892];
         valuesT.set(`${actions4.length}`, actions4.length | executors.length);
         iconmoreZ *= parseFloat(`${3}`);
         megaphoneF = megaphonet.length >= reminderJ.length;
         reminderJ += `${((megaphoneF ? 3 : 2) | parseInt(`${iconmoreZ}`))}`;
         megaphonet = [2 | parseInt(`${iconmoreZ}`)];
      }
         valuesT.set(`${libjsijniprofilerO}`, libjsijniprofilerO.length / (Math.max(2, valuesT.size)));
          let redirectz = 5;
          let subin_: Map<any, any> = new Map([[String.fromCharCode(114,101,111,114,100,101,114,95,109,95,49,57,0),966], [String.fromCharCode(98,117,110,100,108,101,95,97,95,50,53,0),930]]);
          let filterO: Array<any> = [378, 693, 979];
         valuesT = new Map([[`${actions4.length}`, actions4.length]]);
         redirectz /= Math.max(3, redirectz / (Math.max(3, filterO.length)));
         subin_.set(`${redirectz}`, subin_.size);
         filterO = [subin_.size];
      if ((libjsijniprofilerO.length * executors.length) == 3 && 1 == (executors.length * 3)) {
         libjsijniprofilerO = `${executors.length * libjsijniprofilerO.length}`;
      }
      if (2 == (executors.length << (Math.min(libjsijniprofilerO.length, 4))) || (libjsijniprofilerO.length << (Math.min(5, executors.length))) == 2) {
          let helpere = true;
          let predictionarrow9: Array<any> = [479, 65, 345];
         executors.push(1);
         helpere = predictionarrow9.length >= 57;
         predictionarrow9 = [((helpere ? 1 : 2) | 1)];
      }
      agreementt = penaltyshootnogoalC.size > libjsijniprofilerO.length;
   }
      othermatchdetailbgD = club3 >= 86.25 && penaltyshootnogoalC.size >= 10;
      screen2 /= Math.max(parseFloat(`${parseInt(`${screen2}`)}`), 1);
    if (result == null) {

      armval *= 3;
      agreementt = armval < 88.36;
   for (let p = 0; p < 2; p++) {
       let homeplayery = false;
       let imagesI = String.fromCharCode(110,95,51,54,95,99,97,114,101,116,0);
       let disconnectedh = true;
       let libimagepipelineQ = String.fromCharCode(101,95,52,49,95,97,118,102,111,117,110,100,97,116,105,111,110,0);
      while (!imagesI.startsWith(`${disconnectedh}`)) {
         imagesI += `${libimagepipelineQ.length}`;
         break;
      }
      for (let u = 0; u < 1; u++) {
         libimagepipelineQ = `${((homeplayery ? 1 : 1))}`;
      }
      let iconsubssuccess3 = homeplayery ? !homeplayery : homeplayery;
      do {
         homeplayery = disconnectedh;
         if (iconsubssuccess3) {
            break;
         }
      } while (iconsubssuccess3 && (!homeplayery));
      let dycreators = String.fromCharCode(114,112,52,99,95,48,0) == imagesI;
      do {
         imagesI += `${libimagepipelineQ.length}`;
         if (dycreators) {
            break;
         }
      } while ((2 > imagesI.length) && dycreators);
      let values7 = disconnectedh ? !disconnectedh : disconnectedh;
      do {
         disconnectedh = libimagepipelineQ.length <= 92 && homeplayery;
         if (values7) {
            break;
         }
      } while ((disconnectedh || 2 <= libimagepipelineQ.length) && values7);
         homeplayery = !disconnectedh;
      while (homeplayery) {
         homeplayery = !homeplayery;
         break;
      }
         libimagepipelineQ += `${1 | imagesI.length}`;
         imagesI = `${(libimagepipelineQ == String.fromCharCode(112,0) ? (disconnectedh ? 1 : 3) : libimagepipelineQ.length)}`;
         libimagepipelineQ += `${(imagesI == String.fromCharCode(49,0) ? (homeplayery ? 5 : 5) : imagesI.length)}`;
         imagesI += "1";
          let reactnativeratings4 = 2.0;
          let showmoree = String.fromCharCode(114,101,115,116,114,105,99,116,105,111,110,115,95,107,95,56,51,0);
         homeplayery = (!homeplayery ? !disconnectedh : homeplayery);
         reactnativeratings4 += parseFloat(`${showmoree.length | parseInt(`${reactnativeratings4}`)}`);
         showmoree += `${showmoree.length}`;
      club3 /= Math.max(parseFloat(`${redirectK.length / 1}`), 1);
   }
       let whitetick1 = String.fromCharCode(121,95,55,48,95,115,117,98,115,101,113,117,101,110,99,101,115,0);
       let backwhiteJ: Array<any> = [546, 652, 679];
      for (let a = 0; a < 2; a++) {
          let navigationJ = String.fromCharCode(105,110,118,101,114,115,105,111,110,95,114,95,52,49,0);
          let internetN = 2.0;
          let n_hashM = 4.0;
          let annerW = 2.0;
         whitetick1 = "3";
         navigationJ += `${parseInt(`${internetN}`) + 3}`;
         internetN *= 1 >> (Math.min(5, Math.abs(parseInt(`${internetN}`))));
         n_hashM *= parseFloat(`${parseInt(`${internetN}`) + parseInt(`${n_hashM}`)}`);
         annerW /= Math.max(parseFloat(`${parseInt(`${internetN}`) - 3}`), 2);
      }
      if (5 == (backwhiteJ.length & whitetick1.length)) {
         whitetick1 += `${whitetick1.length + backwhiteJ.length}`;
      }
         backwhiteJ.push(whitetick1.length);
       let handlerr: Map<any, any> = new Map([[String.fromCharCode(121,95,49,95,115,117,99,99,101,101,100,101,100,0),true ], [String.fromCharCode(116,102,104,100,95,117,95,49,54,0),false ], [String.fromCharCode(98,95,55,57,95,100,101,108,101,103,97,116,101,0),true ]]);
       let referrerS = String.fromCharCode(111,95,51,55,95,117,110,105,102,111,114,109,115,0);
       let predictionarrowi = String.fromCharCode(108,95,52,54,95,113,117,105,99,107,99,111,109,112,114,101,115,115,0);
      let colorsN = handlerr.size <= 9613903;
      do {
          let stepY = 2.0;
         handlerr.set(referrerS, 3 | backwhiteJ.length);
         stepY += parseInt(`${stepY}`) / (Math.max(2, parseInt(`${stepY}`)));
         if (colorsN) {
            break;
         }
      } while (colorsN && ((handlerr.size & 1) <= 4 && (referrerS.length & handlerr.size) <= 1));
      redirectK = [penaltyshootnogoalC.size];
   let iconstarr = 5697280 >= penaltyshootnogoalC.size;
   do {
      penaltyshootnogoalC.set(`${club3}`, penaltyshootnogoalC.size + parseInt(`${club3}`));
      if (iconstarr) {
         break;
      }
   } while (iconstarr && (2 >= (4 & penaltyshootnogoalC.size) && 4 >= penaltyshootnogoalC.size));
      return;
    }

    await dispatch(updateUserAuth(result));

       let borderlessA = 3.0;
       let expiredy = String.fromCharCode(103,95,53,95,119,97,108,108,112,97,112,101,114,0);
         expiredy = `${parseInt(`${borderlessA}`)}`;
         expiredy += `${expiredy.length}`;
      if (!expiredy.startsWith(`${borderlessA}`)) {
         borderlessA /= Math.max(3, parseFloat(`${3}`));
      }
      let libjsijniprofilerI = expiredy == String.fromCharCode(118,109,99,107,98,50,0);
      do {
         expiredy = `${expiredy.length}`;
         if (libjsijniprofilerI) {
            break;
         }
      } while (libjsijniprofilerI && (4 < (1 & expiredy.length)));
      for (let w = 0; w < 1; w++) {
         borderlessA -= parseFloat(`${expiredy.length}`);
      }
       let applek: Map<any, any> = new Map([[String.fromCharCode(103,95,53,49,95,114,101,116,114,97,110,115,109,105,116,0),784], [String.fromCharCode(111,95,57,56,95,99,100,106,112,101,103,0),188]]);
      mintegralH = 19.71 <= borderlessA;
   let libaneS = notificationfilledH ? !notificationfilledH : notificationfilledH;
   do {
      notificationfilledH = 77 >= redirectK.length;
      if (libaneS) {
         break;
      }
   } while (libaneS && (3.21 == club3 || 1.73 == (club3 / (Math.max(3.21, 9)))));
   if (armval <= club3) {
       let collectiont = 1.0;
       let upgradeM = 2.0;
       let attributedstringm = String.fromCharCode(112,114,101,99,101,110,99,101,95,105,95,51,48,0);
       let disconnectedl = false;
          let imagenetworkerrQ = false;
         attributedstringm += `${3 & parseInt(`${upgradeM}`)}`;
         imagenetworkerrQ = (imagenetworkerrQ ? !imagenetworkerrQ : !imagenetworkerrQ);
         collectiont /= Math.max(1, parseFloat(`${parseInt(`${collectiont}`) / (Math.max(attributedstringm.length, 5))}`));
      while (5.65 == (collectiont / (Math.max(2, upgradeM)))) {
          let xadsdkP = String.fromCharCode(109,98,105,110,116,114,97,95,108,95,52,52,0);
          let buildL: Map<any, any> = new Map([[String.fromCharCode(110,95,57,57,95,109,101,97,115,117,114,101,109,101,110,116,0),799], [String.fromCharCode(121,95,54,57,95,105,110,116,114,97,120,98,108,111,99,107,0),803]]);
         upgradeM += 1 + parseInt(`${collectiont}`);
         xadsdkP = `${xadsdkP.length >> (Math.min(4, Math.abs(buildL.size)))}`;
         buildL.set(`${xadsdkP}`, buildL.size / (Math.max(xadsdkP.length, 2)));
         break;
      }
      if (2.75 >= (4.72 - upgradeM)) {
         disconnectedl = !attributedstringm.endsWith(`${disconnectedl}`);
      }
      while (!disconnectedl) {
          let lefti = String.fromCharCode(114,95,53,50,95,112,101,110,100,105,110,103,115,0);
          let layoutY = 3.0;
         disconnectedl = attributedstringm == String.fromCharCode(106,0);
         lefti = `${parseInt(`${layoutY}`) >> (Math.min(lefti.length, 5))}`;
         layoutY += (parseFloat(`${lefti == String.fromCharCode(88,0) ? lefti.length : parseInt(`${layoutY}`)}`));
         break;
      }
         attributedstringm += `${attributedstringm.length + 3}`;
      for (let m = 0; m < 2; m++) {
         disconnectedl = collectiont <= 5.7;
      }
       let yellowredcardA: Array<any> = [String.fromCharCode(99,97,110,99,101,108,97,98,108,101,95,108,95,53,48,0), String.fromCharCode(117,101,102,97,95,106,95,49,54,0)];
       let navigationp: Array<any> = [String.fromCharCode(117,110,100,101,114,108,121,105,110,103,95,100,95,52,53,0), String.fromCharCode(104,95,49,51,95,109,97,107,101,99,121,103,119,105,110,112,107,103,0), String.fromCharCode(103,95,57,55,95,101,120,112,111,110,101,110,116,105,97,116,105,111,110,0)];
          let const_tbm: Array<any> = [337, 892, 444];
          let showlessI: Map<any, any> = new Map([[String.fromCharCode(100,95,56,95,112,111,115,105,116,105,118,101,0),681], [String.fromCharCode(103,95,57,50,95,115,117,103,103,101,115,116,105,111,110,115,0),605]]);
         disconnectedl = !disconnectedl;
         const_tbm.push(3);
         showlessI.set(`${const_tbm.length}`, const_tbm.length * showlessI.size);
      let splashP = 8288391.0 >= collectiont;
      do {
         collectiont /= Math.max(parseFloat(`${attributedstringm.length | 2}`), 1);
         if (splashP) {
            break;
         }
      } while (splashP && (2.37 == (upgradeM / (Math.max(8, collectiont))) && 2.37 == (upgradeM / (Math.max(collectiont, 3)))));
      if (2 == (parseInt(`${upgradeM}`) - yellowredcardA.length) || 3.75 == (upgradeM - 1.55)) {
         yellowredcardA.push(1);
      }
         collectiont /= Math.max(4, (parseFloat(`${(disconnectedl ? 1 : 1) * 1}`)));
      club3 /= Math.max(2, parseFloat(`${parseInt(`${screen2}`) + 3}`));
   }
      mintegralH = penaltyshootnogoalC.size >= 46 && !agreementt;
       let subsh = 4.0;
       let cornershoota = 0.0;
       let membershipO = String.fromCharCode(116,95,56,51,95,114,101,108,111,97,100,105,110,103,0);
          let field9 = 4.0;
         membershipO += `${membershipO.length | parseInt(`${cornershoota}`)}`;
         field9 /= Math.max(parseFloat(`${parseInt(`${field9}`)}`), 3);
         membershipO += `${parseInt(`${subsh}`) % 2}`;
         membershipO = `${parseInt(`${cornershoota}`) | 1}`;
         cornershoota /= Math.max(2, parseFloat(`${2}`));
       let libsgcoreC = String.fromCharCode(109,105,100,108,95,106,95,52,53,0);
         cornershoota += (parseFloat(`${String.fromCharCode(109,0) == membershipO ? membershipO.length : parseInt(`${subsh}`)}`));
      let ewardedj = String.fromCharCode(114,53,53,111,48,112,118,49,0) == libsgcoreC;
      do {
         libsgcoreC += "2";
         if (ewardedj) {
            break;
         }
      } while (ewardedj && (libsgcoreC.length <= 5));
         libsgcoreC = `${libsgcoreC.length >> (Math.min(2, Math.abs(parseInt(`${cornershoota}`))))}`;
         cornershoota /= Math.max(parseFloat(`${1}`), 2);
      othermatchdetailbgD = (parseInt(`${armval}`) + penaltyshootnogoalC.size) >= 99;
    return;
  };

  const checkConnection = async () => {
       let firebase0 = 0.0;
    let telemetrym: Array<any> = [String.fromCharCode(111,95,57,48,95,112,111,115,116,0), String.fromCharCode(116,97,103,98,105,116,95,106,95,48,0), String.fromCharCode(107,95,49,55,95,99,121,99,108,101,99,108,111,99,107,0)];
    let verticalB = String.fromCharCode(112,101,114,105,111,100,105,99,97,108,108,121,95,105,95,53,48,0);
    let libpangleflippedx = 2.0;
    let active6 = 4.0;
    let vertical8 = String.fromCharCode(105,95,57,50,95,102,97,100,115,116,0);
    let redscoreballW = 1.0;
    let episodeC = String.fromCharCode(107,95,53,50,0);
    let livenodatabgimgo = String.fromCharCode(102,102,117,114,108,95,48,95,54,55,0);
    let profileinactiveE = 4.0;
    let analytica = 5;
    let umengZ = String.fromCharCode(97,95,51,53,95,102,105,108,116,0);
    let register_mas = String.fromCharCode(118,97,108,115,95,56,95,52,48,0);
   if (episodeC.includes(`${firebase0}`)) {
      episodeC += `${parseInt(`${firebase0}`)}`;
   }
   while (3.22 == active6) {
      active6 -= episodeC.length;
      break;
   }
   let iconnotificationnewb = String.fromCharCode(53,101,119,108,100,106,115,121,116,0) == livenodatabgimgo;
   do {
      livenodatabgimgo += `${parseInt(`${libpangleflippedx}`)}`;
      if (iconnotificationnewb) {
         break;
      }
   } while (iconnotificationnewb && (vertical8 != livenodatabgimgo));
      episodeC = "2";
   while (!verticalB.includes(`${libpangleflippedx}`)) {
       let dragclosey = String.fromCharCode(112,95,55,50,95,113,117,111,116,97,0);
       let predictiony = 3.0;
       let twitterM: Map<any, any> = new Map([[String.fromCharCode(99,104,97,114,97,99,116,101,114,105,115,116,105,99,115,95,116,95,57,52,0),true ], [String.fromCharCode(114,101,108,97,121,115,95,121,95,55,54,0),false ]]);
      for (let m = 0; m < 2; m++) {
         dragclosey = `${3 | dragclosey.length}`;
      }
      let handlerd = 7268741 >= twitterM.size;
      do {
          let castingu: Array<any> = [382, 244, 223];
          let penaltyP = false;
          let penaltyshootZ = String.fromCharCode(115,117,103,103,101,115,116,105,111,110,95,114,95,56,55,0);
         twitterM.set(`${predictiony}`, parseInt(`${predictiony}`) ^ castingu.length);
         castingu = [((penaltyP ? 1 : 1))];
         penaltyP = penaltyshootZ.startsWith(`${penaltyP}`);
         penaltyshootZ = `${((penaltyP ? 2 : 4) ^ 3)}`;
         if (handlerd) {
            break;
         }
      } while (handlerd && (3 == (twitterM.size / 4)));
       let spinnerf = String.fromCharCode(108,111,110,95,107,95,50,51,0);
       let becomee = String.fromCharCode(104,97,115,95,121,95,51,49,0);
      let imagemanagerE = dragclosey == String.fromCharCode(117,109,97,103,107,97,105,95,51,0);
      do {
         dragclosey += "1";
         if (imagemanagerE) {
            break;
         }
      } while (imagemanagerE && ((twitterM.size - dragclosey.length) >= 3 && 1 >= (3 - dragclosey.length)));
       let pangleo = 0.0;
       let flagL = 0.0;
      if (4.68 == (flagL + parseFloat(`${twitterM.size}`)) || 3 == (twitterM.size % 3)) {
         flagL += (parseFloat(`${spinnerf == String.fromCharCode(118,0) ? parseInt(`${flagL}`) : spinnerf.length}`));
      }
      for (let j = 0; j < 2; j++) {
          let logint = String.fromCharCode(100,95,56,50,95,114,101,103,117,108,97,116,101,0);
          let yellowt: Array<any> = [867, 220];
          let predictiondefaultB = 1.0;
          let defaultplayerimgT = 4.0;
         dragclosey = `${parseInt(`${predictiony}`) / (Math.max(3, yellowt.length))}`;
         logint += "2";
         yellowt.push((logint == String.fromCharCode(73,0) ? logint.length : parseInt(`${defaultplayerimgT}`)));
         predictiondefaultB *= parseFloat(`${parseInt(`${defaultplayerimgT}`)}`);
      }
      if (spinnerf.length < 2) {
         becomee = `${twitterM.size}`;
      }
         flagL *= parseFloat(`${becomee.length << (Math.min(Math.abs(3), 4))}`);
      verticalB += "1";
      break;
   }
      vertical8 = `${verticalB.length}`;
       let untickq = String.fromCharCode(105,110,99,114,98,108,111,98,95,50,95,54,0);
       let u_countm = String.fromCharCode(100,95,54,48,95,103,109,111,99,107,0);
      if (untickq.includes(u_countm)) {
         u_countm = `${3 * u_countm.length}`;
      }
      let updates8 = untickq == String.fromCharCode(57,101,102,115,56,0);
      do {
          let i_imageO: Array<any> = [708, 421, 150];
         untickq = "2";
         i_imageO.push(i_imageO.length / 2);
         if (updates8) {
            break;
         }
      } while ((untickq.length == 1) && updates8);
      let watchx = u_countm == String.fromCharCode(56,114,95,55,111,56,99,0);
      do {
          let refreshC = String.fromCharCode(101,110,104,97,110,99,101,109,101,110,116,115,95,119,95,49,48,0);
          let long_kR = String.fromCharCode(105,95,57,53,95,99,108,111,115,101,115,0);
          let mnewarchdefaultsK = true;
          let homeactiveG: Array<any> = [98, 0, 440];
         u_countm += `${3 % (Math.max(9, refreshC.length))}`;
         refreshC = `${long_kR.length & homeactiveG.length}`;
         long_kR += `${1 | homeactiveG.length}`;
         mnewarchdefaultsK = String.fromCharCode(104,0) == long_kR;
         if (watchx) {
            break;
         }
      } while ((untickq.length < u_countm.length) && watchx);
      for (let q = 0; q < 2; q++) {
         untickq = `${u_countm.length}`;
      }
          let libfbjniQ = 2;
          let videobufferloadingF = String.fromCharCode(101,95,50,49,0);
          let redgoalw: Array<any> = [String.fromCharCode(105,102,97,99,116,111,114,95,108,95,49,0), String.fromCharCode(107,95,49,48,95,99,108,97,115,115,105,102,115,0)];
         u_countm += `${u_countm.length}`;
         libfbjniQ *= 2;
         videobufferloadingF = `${(videobufferloadingF == String.fromCharCode(102,0) ? videobufferloadingF.length : redgoalw.length)}`;
         redgoalw = [3];
          let m_hashX = false;
          let libcrashsdkS = String.fromCharCode(115,117,98,111,98,106,101,99,116,95,117,95,57,0);
          let hometeamfieldP = 3.0;
         u_countm += `${((m_hashX ? 2 : 3) & 1)}`;
         m_hashX = String.fromCharCode(104,0) == libcrashsdkS;
         libcrashsdkS += `${3 >> (Math.min(4, libcrashsdkS.length))}`;
         hometeamfieldP += 2 << (Math.min(4, Math.abs(parseInt(`${hometeamfieldP}`))));
      active6 *= 3 % (Math.max(parseInt(`${redscoreballW}`), 7));

    const state = await NetInfo.fetch();

      verticalB = `${parseInt(`${redscoreballW}`) ^ telemetrym.length}`;
   if (livenodatabgimgo.length <= 1) {
       let chatM = String.fromCharCode(111,95,55,48,95,105,119,104,116,0);
      while (chatM != String.fromCharCode(87,0)) {
         chatM += `${(String.fromCharCode(51,0) == chatM ? chatM.length : chatM.length)}`;
         break;
      }
      while (chatM != chatM) {
         chatM += "1";
         break;
      }
         chatM = `${2 >> (Math.min(3, chatM.length))}`;
      livenodatabgimgo = `${parseInt(`${redscoreballW}`)}`;
   }
   let injuryF = redscoreballW <= 6801086.0;
   do {
      redscoreballW /= Math.max(2, parseInt(`${firebase0}`) / 3);
      if (injuryF) {
         break;
      }
   } while (injuryF && ((redscoreballW + libpangleflippedx) < 4.86));
   if (4 >= (analytica % (Math.max(6, episodeC.length))) || 4 >= (episodeC.length % (Math.max(1, analytica)))) {
       let notificationfillemptyO = 4;
       let profilepic1 = String.fromCharCode(112,95,56,54,95,116,114,101,101,0);
       let notificationgrayB = String.fromCharCode(115,98,117,118,95,52,95,49,51,0);
       let snewinterstitialk = String.fromCharCode(100,111,99,117,109,101,110,116,97,116,105,111,110,95,115,95,57,50,0);
       let homeiconP: Array<any> = [110, 727, 172];
      if (1 >= (4 * profilepic1.length) && (notificationfillemptyO * profilepic1.length) >= 4) {
         notificationfillemptyO |= profilepic1.length - notificationgrayB.length;
      }
         snewinterstitialk += `${homeiconP.length}`;
      let unreadF = snewinterstitialk.length >= 7633846;
      do {
         snewinterstitialk += `${notificationgrayB.length / 1}`;
         if (unreadF) {
            break;
         }
      } while (unreadF && (2 < (snewinterstitialk.length / 4) && (homeiconP.length / 4) < 2));
      let topicE = profilepic1.length >= 8145588;
      do {
         profilepic1 = `${2 - notificationfillemptyO}`;
         if (topicE) {
            break;
         }
      } while ((snewinterstitialk == profilepic1) && topicE);
          let subin2: Map<any, any> = new Map([[String.fromCharCode(111,95,57,55,95,106,109,111,114,101,99,102,103,0),14], [String.fromCharCode(104,101,97,100,101,114,115,95,115,95,50,48,0),1]]);
         profilepic1 += `${3 ^ notificationfillemptyO}`;
         subin2.set(`${subin2.size}`, subin2.size % (Math.max(1, subin2.size)));
      while ((4 ^ notificationfillemptyO) < 2 || 3 < (notificationfillemptyO ^ 4)) {
         snewinterstitialk += `${homeiconP.length}`;
         break;
      }
      if (snewinterstitialk.includes(`${notificationfillemptyO}`)) {
         snewinterstitialk += `${snewinterstitialk.length}`;
      }
         notificationgrayB = `${notificationgrayB.length}`;
          let tooltipsI: Array<any> = [706, 50, 152];
         snewinterstitialk = `${profilepic1.length}`;
         tooltipsI = [tooltipsI.length ^ tooltipsI.length];
      for (let s = 0; s < 1; s++) {
          let entryv = String.fromCharCode(113,95,50,55,95,118,105,101,119,0);
          let analyticD = 3.0;
          let imagenomoredataM = String.fromCharCode(102,95,57,95,114,101,106,111,105,110,0);
          let iconsharefriendsX: Array<any> = [String.fromCharCode(108,95,50,49,95,100,105,118,105,100,101,0), String.fromCharCode(112,115,102,105,108,101,95,107,95,55,49,0)];
          let redgoal8 = 5;
         profilepic1 = `${(profilepic1 == String.fromCharCode(87,0) ? redgoal8 : profilepic1.length)}`;
         entryv = `${2 | parseInt(`${analyticD}`)}`;
         analyticD -= (String.fromCharCode(73,0) == entryv ? entryv.length : parseInt(`${analyticD}`));
         imagenomoredataM += `${imagenomoredataM.length * iconsharefriendsX.length}`;
         iconsharefriendsX = [3 | imagenomoredataM.length];
         redgoal8 -= imagenomoredataM.length >> (Math.min(3, Math.abs(parseInt(`${analyticD}`))));
      }
      let g_viewZ = notificationgrayB.length >= 7699230;
      do {
         notificationgrayB += `${notificationfillemptyO}`;
         if (g_viewZ) {
            break;
         }
      } while ((4 < (notificationfillemptyO / 4) || (notificationgrayB.length / (Math.max(4, 1))) < 2) && g_viewZ);
         snewinterstitialk += `${snewinterstitialk.length - 1}`;
      for (let v = 0; v < 3; v++) {
          let libloggerp = 5;
          let ping5 = String.fromCharCode(106,95,49,95,111,115,116,114,105,110,103,115,116,114,101,97,109,0);
         notificationfillemptyO |= homeiconP.length * 2;
         libloggerp ^= 3;
         ping5 += `${ping5.length % 2}`;
      }
          let searchm = 5.0;
         profilepic1 += `${1 ^ notificationfillemptyO}`;
         searchm /= Math.max(4, 3);
          let predictionwin8 = String.fromCharCode(108,95,51,51,95,117,110,119,105,110,100,0);
         homeiconP.push(predictionwin8.length ^ 1);
      episodeC += `${notificationfillemptyO % (Math.max(telemetrym.length, 2))}`;
   }
      analytica %= Math.max(parseInt(`${active6}`) << (Math.min(vertical8.length, 1)), 2);
      telemetrym.push(1 * vertical8.length);
   let homeinactiveZ = 7456570.0 >= active6;
   do {
       let flyerD: Array<any> = [943, 414];
       let imagenetworkerr1: Map<any, any> = new Map([[String.fromCharCode(97,99,117,116,111,102,102,95,52,95,56,0),true ], [String.fromCharCode(112,111,115,105,116,105,111,110,115,95,112,95,57,57,0),false ], [String.fromCharCode(110,111,116,105,102,105,101,114,95,116,95,51,48,0),true ]]);
      while ((flyerD.length | imagenetworkerr1.size) > 5 && 3 > (imagenetworkerr1.size | 5)) {
         flyerD = [1 % (Math.max(8, flyerD.length))];
         break;
      }
         flyerD.push(flyerD.length % (Math.max(2, 6)));
         flyerD = [flyerD.length];
      if (Array.from(imagenetworkerr1.values()).includes(flyerD.length)) {
          let areai = 3.0;
          let sellK = String.fromCharCode(103,101,116,108,98,108,111,99,107,105,110,99,95,52,95,50,48,0);
         flyerD.push(1 & imagenetworkerr1.size);
         areai /= Math.max(1, (sellK == String.fromCharCode(83,0) ? sellK.length : parseInt(`${areai}`)));
      }
      if ((imagenetworkerr1.size / 1) >= 4 && 2 >= (1 / (Math.max(3, imagenetworkerr1.size)))) {
         flyerD = [flyerD.length];
      }
      for (let f = 0; f < 3; f++) {
          let showlesso: Array<any> = [78, 740, 217];
          let shirt1 = String.fromCharCode(119,95,54,53,95,102,114,111,109,102,101,0);
          let buildP = 1.0;
          let calendarw = 5.0;
          let shirtd: Map<any, any> = new Map([[String.fromCharCode(117,95,50,54,95,108,111,119,114,101,115,0),true ], [String.fromCharCode(103,95,53,95,119,115,97,117,100,0),true ], [String.fromCharCode(109,98,97,102,102,95,53,95,52,50,0),true ]]);
         imagenetworkerr1.set(`${flyerD.length}`, shirtd.size + flyerD.length);
         showlesso = [showlesso.length / (Math.max(1, 2))];
         shirt1 += `${parseInt(`${buildP}`) % (Math.max(parseInt(`${calendarw}`), 6))}`;
         buildP /= Math.max(3 + parseInt(`${buildP}`), 1);
         calendarw /= Math.max(1, parseFloat(`${2}`));
         shirtd.set(`${calendarw}`, 3);
      }
      active6 *= umengZ.length;
      if (homeinactiveZ) {
         break;
      }
   } while (homeinactiveZ && (3.34 == active6));
    const offline = !(state.isConnected && state.isInternetReachable);

      livenodatabgimgo += `${2 | analytica}`;
   for (let a = 0; a < 2; a++) {
      redscoreballW *= parseInt(`${active6}`);
   }
      redscoreballW /= Math.max(livenodatabgimgo.length, 1);
   for (let t = 0; t < 1; t++) {
       let awayplayerN = String.fromCharCode(103,108,111,98,97,108,108,121,95,114,95,55,51,0);
       let libcrashsdkB: Map<any, any> = new Map([[String.fromCharCode(99,95,57,51,95,108,97,116,101,110,99,121,0),126], [String.fromCharCode(97,114,103,117,109,101,110,116,95,50,95,51,54,0),83], [String.fromCharCode(104,117,102,102,95,54,95,55,57,0),923]]);
       let mbbido = true;
       let predictionbannerH: Array<any> = [347, 675, 970];
       let tickedV = String.fromCharCode(101,114,114,111,114,118,95,108,95,53,56,0);
          let humidityj: Map<any, any> = new Map([[String.fromCharCode(110,111,100,101,115,101,116,95,107,95,49,48,0),true ], [String.fromCharCode(115,95,51,55,95,109,111,110,105,116,111,114,105,110,103,0),true ]]);
          let libcrashsdkt = String.fromCharCode(101,120,99,101,101,100,95,119,95,55,52,0);
         mbbido = libcrashsdkt.length > 17 && 17 > libcrashsdkB.size;
         humidityj = new Map([[`${humidityj.size}`, 1]]);
         libcrashsdkt = `${2 + humidityj.size}`;
          let shirtO = String.fromCharCode(101,95,57,57,95,109,99,111,109,112,97,110,100,0);
          let iconarrowrightorangeO: Map<any, any> = new Map([[String.fromCharCode(116,101,115,116,111,114,105,103,95,102,95,53,55,0),520], [String.fromCharCode(114,103,98,97,98,101,95,56,95,53,48,0),407]]);
          let turnq = true;
         predictionbannerH.push((String.fromCharCode(120,0) == awayplayerN ? awayplayerN.length : (turnq ? 5 : 3)));
         shirtO = `${(String.fromCharCode(104,0) == shirtO ? shirtO.length : iconarrowrightorangeO.size)}`;
         iconarrowrightorangeO.set(`${shirtO}`, (String.fromCharCode(101,0) == shirtO ? shirtO.length : iconarrowrightorangeO.size));
         turnq = shirtO == String.fromCharCode(79,0);
          let armva8 = 4.0;
         predictionbannerH.push(1 % (Math.max(7, parseInt(`${armva8}`))));
       let mbnativeM = String.fromCharCode(104,101,120,98,115,95,106,95,57,57,0);
       let more6 = String.fromCharCode(97,116,116,114,97,99,116,105,110,103,95,115,95,51,53,0);
          let short_nsk = 0.0;
         mbbido = more6.length >= 97;
         short_nsk /= Math.max(3 << (Math.min(Math.abs(parseInt(`${short_nsk}`)), 4)), 5);
      while (predictionbannerH.length >= 3) {
         mbbido = tickedV == String.fromCharCode(88,0);
         break;
      }
      while (!mbnativeM.includes(`${libcrashsdkB.size}`)) {
          let smallorangeman_: Array<any> = [String.fromCharCode(117,95,49,57,95,114,97,116,105,111,115,0), String.fromCharCode(115,99,104,101,100,117,108,101,95,52,95,51,0), String.fromCharCode(115,101,116,105,118,95,119,95,50,56,0)];
         libcrashsdkB = new Map([[tickedV, awayplayerN.length]]);
         smallorangeman_.push(1 * smallorangeman_.length);
         break;
      }
       let teamn = String.fromCharCode(111,95,50,54,95,105,115,102,105,110,105,116,101,0);
       let streamingW = String.fromCharCode(114,95,56,53,95,122,101,114,111,0);
         predictionbannerH = [streamingW.length >> (Math.min(Math.abs(1), 4))];
      while ((mbnativeM.length % (Math.max(8, libcrashsdkB.size))) < 5 || 5 < (libcrashsdkB.size % (Math.max(mbnativeM.length, 6)))) {
          let yellowredcardD = 2.0;
          let langkeyG = false;
          let ucopy__6e = String.fromCharCode(114,101,109,105,120,105,110,103,95,121,95,54,57,0);
          let arrowupj = String.fromCharCode(104,95,52,51,95,99,110,116,0);
         libcrashsdkB.set(`${mbbido}`, ((langkeyG ? 4 : 4)));
         yellowredcardD /= Math.max(ucopy__6e.length, 1);
         langkeyG = (yellowredcardD / (Math.max(8, arrowupj.length))) < 20.58;
         ucopy__6e = `${parseInt(`${yellowredcardD}`)}`;
         arrowupj += `${ucopy__6e.length}`;
         break;
      }
       let upload0 = String.fromCharCode(108,111,111,112,101,120,105,116,95,53,95,51,53,0);
       let libswresampleM = String.fromCharCode(97,95,55,53,95,111,112,101,114,97,116,111,114,0);
      firebase0 -= parseFloat(`${2}`);
   }
       let screenB = String.fromCharCode(97,95,57,48,95,108,111,119,100,101,108,97,121,0);
       let settingsB = true;
         screenB = `${3 >> (Math.min(4, screenB.length))}`;
      if (1 < screenB.length && settingsB) {
         screenB += `${screenB.length}`;
      }
         settingsB = screenB.length > 7 && !settingsB;
      if (!settingsB) {
         settingsB = ((screenB.length - (settingsB ? 17 : screenB.length)) == 17);
      }
      for (let c = 0; c < 1; c++) {
         settingsB = (((settingsB ? 85 : screenB.length) ^ screenB.length) < 85);
      }
      while (4 < screenB.length || settingsB) {
          let traminiF = true;
          let taiwanf: Array<any> = [301, 818, 153];
         settingsB = traminiF && taiwanf.length < 71;
         break;
      }
      telemetrym.push(episodeC.length ^ 1);
      telemetrym.push(parseInt(`${firebase0}`) << (Math.min(Math.abs(3), 5)));
   if (vertical8.endsWith(umengZ)) {
       let gmailG = String.fromCharCode(100,101,118,101,108,111,112,101,114,95,107,95,53,53,0);
         gmailG = `${gmailG.length | 1}`;
          let ksadJ = 3;
         gmailG = `${ksadJ >> (Math.min(gmailG.length, 3))}`;
         gmailG = `${2 << (Math.min(1, gmailG.length))}`;
      umengZ += `${livenodatabgimgo.length ^ parseInt(`${profileinactiveE}`)}`;
   }
    setIsOffline(offline);

       let tooltipsm = String.fromCharCode(102,111,114,109,97,116,116,101,114,115,95,97,95,57,53,0);
       let bannern = false;
       let productp = String.fromCharCode(100,98,108,112,95,103,95,55,52,0);
      for (let n = 0; n < 2; n++) {
          let containerK = 2.0;
          let w_playerB = 5;
          let info5 = true;
          let goallogou = String.fromCharCode(99,95,57,57,95,97,98,117,115,101,0);
          let iconarrowrightblackc = false;
         productp = `${parseInt(`${containerK}`)}`;
         containerK *= (parseFloat(`${(info5 ? 3 : 2)}`));
         w_playerB -= 1;
         info5 = iconarrowrightblackc && info5;
         goallogou = `${(goallogou == String.fromCharCode(84,0) ? w_playerB : goallogou.length)}`;
         iconarrowrightblackc = !info5 || 98 == w_playerB;
      }
         tooltipsm += "2";
       let hiadS = String.fromCharCode(99,104,97,99,104,97,95,104,95,50,57,0);
      for (let r = 0; r < 2; r++) {
          let showlessu = String.fromCharCode(119,95,57,54,95,105,116,97,108,105,99,0);
          let sharemodalv = 5;
          let iconD: Array<any> = [88, 258, 963];
         productp += `${hiadS.length}`;
         showlessu += `${iconD.length}`;
         sharemodalv &= showlessu.length & iconD.length;
      }
      let playW = tooltipsm == String.fromCharCode(111,111,110,119,52,101,0);
      do {
          let libtanK = String.fromCharCode(105,116,117,110,101,115,95,50,95,57,56,0);
          let thumbnailc = String.fromCharCode(97,95,55,50,95,100,101,102,105,110,101,115,0);
         tooltipsm += "3";
         libtanK = "2";
         thumbnailc = `${thumbnailc.length}`;
         if (playW) {
            break;
         }
      } while (playW && (tooltipsm.endsWith(`${bannern}`)));
      for (let w = 0; w < 3; w++) {
         hiadS += `${hiadS.length + 2}`;
      }
         hiadS += `${(tooltipsm == String.fromCharCode(65,0) ? (bannern ? 1 : 1) : tooltipsm.length)}`;
      let arrowselectdown3 = 6830376 >= productp.length;
      do {
         productp = `${productp.length ^ hiadS.length}`;
         if (arrowselectdown3) {
            break;
         }
      } while ((!productp.startsWith(`${tooltipsm.length}`)) && arrowselectdown3);
         bannern = (28 >= (productp.length ^ (bannern ? 28 : productp.length)));
      vertical8 += `${verticalB.length | 1}`;
   while (episodeC != vertical8) {
       let typingK = String.fromCharCode(119,95,55,49,95,115,116,105,114,110,103,0);
       let valuesk = String.fromCharCode(101,95,56,51,95,98,112,117,116,115,0);
       let iconarrowrightorangeJ = false;
       let combineT: Array<any> = [218, 417];
         iconarrowrightorangeJ = valuesk.length > 40;
       let d_titleg: Array<any> = [341, 295];
       let dacccfaabfbcbadeebddcabacdffdb1: Array<any> = [172, 370, 795];
         combineT.push(dacccfaabfbcbadeebddcabacdffdb1.length);
          let libsgcorex = 0.0;
         combineT.push(1 & dacccfaabfbcbadeebddcabacdffdb1.length);
         libsgcorex -= parseFloat(`${parseInt(`${libsgcorex}`)}`);
         combineT = [combineT.length + 2];
          let sharewhite3: Array<any> = [String.fromCharCode(97,95,53,55,95,116,111,112,115,0), String.fromCharCode(114,101,102,108,95,121,95,50,49,0)];
         iconarrowrightorangeJ = valuesk.length == dacccfaabfbcbadeebddcabacdffdb1.length;
         sharewhite3.push(sharewhite3.length % 3);
      if ((d_titleg.length + combineT.length) < 1) {
         combineT = [d_titleg.length];
      }
      for (let r = 0; r < 1; r++) {
         d_titleg.push(dacccfaabfbcbadeebddcabacdffdb1.length ^ d_titleg.length);
      }
      if ((3 % (Math.max(10, d_titleg.length))) < 1 || 4 < (d_titleg.length % 3)) {
          let awayplayerv = 5.0;
          let canvasw = true;
          let miniq: Array<any> = [761, 876, 442];
         d_titleg.push(combineT.length | miniq.length);
         awayplayerv -= ((canvasw ? 2 : 4) * parseInt(`${awayplayerv}`));
         canvasw = !canvasw && 83.75 <= awayplayerv;
         miniq.push(((canvasw ? 2 : 5) % (Math.max(parseInt(`${awayplayerv}`), 6))));
      }
      for (let q = 0; q < 1; q++) {
          let profileactive7 = 0.0;
         typingK = `${parseInt(`${profileactive7}`) + 3}`;
      }
         typingK = `${d_titleg.length ^ 3}`;
      let helper3 = dacccfaabfbcbadeebddcabacdffdb1.length <= 6455667;
      do {
         dacccfaabfbcbadeebddcabacdffdb1 = [valuesk.length];
         if (helper3) {
            break;
         }
      } while ((dacccfaabfbcbadeebddcabacdffdb1.length >= 1) && helper3);
      vertical8 = `${parseInt(`${libpangleflippedx}`) ^ livenodatabgimgo.length}`;
      break;
   }
      redscoreballW *= parseInt(`${redscoreballW}`) << (Math.min(livenodatabgimgo.length, 3));
   for (let j = 0; j < 2; j++) {
       let dycreatorR: Map<any, any> = new Map([[String.fromCharCode(119,95,52,95,112,114,111,112,115,0),662], [String.fromCharCode(117,110,101,110,99,114,121,112,116,101,100,95,103,95,54,53,0),98], [String.fromCharCode(118,95,53,50,95,116,114,97,110,115,112,0),784]]);
          let strings2 = 3.0;
         dycreatorR.set(`${strings2}`, parseInt(`${strings2}`) << (Math.min(Math.abs(dycreatorR.size), 4)));
          let reddownarrow4: Map<any, any> = new Map([[String.fromCharCode(120,95,49,50,95,105,110,116,102,108,111,97,116,0),564], [String.fromCharCode(117,110,101,115,99,97,112,101,95,50,95,56,50,0),426], [String.fromCharCode(118,99,100,97,116,97,95,117,95,56,51,0),262]]);
         dycreatorR.set(`${reddownarrow4.size}`, dycreatorR.size * 1);
       let whitesmalltickG = String.fromCharCode(106,95,52,53,95,119,105,100,103,101,116,0);
       let nativeexa = String.fromCharCode(111,95,49,57,95,100,111,119,110,115,97,109,112,108,105,110,103,0);
      verticalB = `${parseInt(`${redscoreballW}`) ^ vertical8.length}`;
   }
      active6 /= Math.max(vertical8.length, 3);
       let subbasketballplayerx = 0.0;
       let overQ = String.fromCharCode(112,97,115,115,112,104,114,97,115,101,95,110,95,55,49,0);
       let fast6: Array<any> = [422, 597, 383];
      while (3 <= (overQ.length + parseInt(`${subbasketballplayerx}`)) || 2 <= (parseInt(`${subbasketballplayerx}`) + 3)) {
          let pauseA: Map<any, any> = new Map([[String.fromCharCode(102,95,51,50,95,101,110,116,101,114,0),698], [String.fromCharCode(115,95,50,53,95,110,100,101,120,0),243], [String.fromCharCode(103,95,50,51,95,99,111,100,101,119,111,114,100,0),769]]);
         subbasketballplayerx += parseFloat(`${1 + pauseA.size}`);
         break;
      }
          let live2 = true;
         fast6.push(2);
      for (let j = 0; j < 2; j++) {
          let iconqqN: Map<any, any> = new Map([[String.fromCharCode(101,95,50,55,95,111,98,115,101,114,118,101,114,0),964], [String.fromCharCode(100,112,99,109,95,51,95,52,49,0),40]]);
         fast6 = [overQ.length];
         iconqqN.set(`${iconqqN.size}`, iconqqN.size);
      }
      while (!overQ.endsWith(`${subbasketballplayerx}`)) {
          let penaltygoal8 = 1.0;
          let runtimeL: Map<any, any> = new Map([[String.fromCharCode(120,95,49,53,95,99,111,108,105,110,101,97,114,0),String.fromCharCode(120,95,50,49,95,99,104,111,109,112,0)], [String.fromCharCode(122,95,49,57,95,104,105,115,116,111,114,121,0),String.fromCharCode(97,95,52,52,95,111,110,101,119,97,121,0)], [String.fromCharCode(98,95,53,52,95,115,101,108,101,99,116,0),String.fromCharCode(106,95,49,56,95,116,105,99,107,101,116,0)]]);
          let liveshareh = String.fromCharCode(114,97,100,98,95,122,95,48,0);
          let reactnativeultimatelistviewU = 5.0;
          let graphQ = String.fromCharCode(108,95,54,52,95,116,101,120,116,102,105,108,101,0);
         subbasketballplayerx *= parseFloat(`${fast6.length / (Math.max(graphQ.length, 5))}`);
         penaltygoal8 *= 3 / (Math.max(parseInt(`${penaltygoal8}`), 9));
         runtimeL.set(`${reactnativeultimatelistviewU}`, (liveshareh == String.fromCharCode(84,0) ? parseInt(`${reactnativeultimatelistviewU}`) : liveshareh.length));
         graphQ += `${(liveshareh == String.fromCharCode(98,0) ? liveshareh.length : runtimeL.size)}`;
         break;
      }
       let whitebellv = 4.0;
         subbasketballplayerx *= parseFloat(`${overQ.length}`);
      let policy1 = fast6.length <= 7896036;
      do {
          let libffmpegkitt: Array<any> = [625, 387, 442];
          let statisticsinactiveB = String.fromCharCode(102,95,52,53,95,105,110,104,101,114,105,116,0);
          let imagesr = String.fromCharCode(109,97,116,114,105,120,95,116,95,52,53,0);
         fast6 = [(String.fromCharCode(101,0) == imagesr ? statisticsinactiveB.length : imagesr.length)];
         libffmpegkitt.push(libffmpegkitt.length);
         statisticsinactiveB = `${libffmpegkitt.length}`;
         if (policy1) {
            break;
         }
      } while (((4 - fast6.length) >= 1 || 2.92 >= (subbasketballplayerx * parseFloat(`${fast6.length}`))) && policy1);
      for (let o = 0; o < 2; o++) {
          let imagenetworkerrx = 0.0;
         whitebellv += overQ.length % 1;
         imagenetworkerrx += parseFloat(`${parseInt(`${imagenetworkerrx}`) / (Math.max(4, parseInt(`${imagenetworkerrx}`)))}`);
      }
         fast6.push(fast6.length - parseInt(`${whitebellv}`));
      vertical8 = `${parseInt(`${profileinactiveE}`) << (Math.min(livenodatabgimgo.length, 5))}`;
      active6 += episodeC.length | 2;
    if (!offline) {

       let dialogX = 1.0;
       let checkboxM: Array<any> = [423, 62];
      let stringsY = checkboxM.length <= 9115494;
      do {
         checkboxM.push(1 | parseInt(`${dialogX}`));
         if (stringsY) {
            break;
         }
      } while (stringsY && (checkboxM.includes(dialogX)));
         dialogX += 3 - parseInt(`${dialogX}`);
      telemetrym = [analytica];
   while (4.50 <= (profileinactiveE + parseFloat(`${analytica}`)) && (profileinactiveE + 4.50) <= 1.3) {
      analytica ^= 2 * umengZ.length;
      break;
   }
      firebase0 *= (parseFloat(`${umengZ == String.fromCharCode(77,0) ? parseInt(`${profileinactiveE}`) : umengZ.length}`));
       let libyogaC = String.fromCharCode(109,111,110,103,111,95,118,95,53,48,0);
       let iconnotificationnewd = 4.0;
      while (libyogaC.length > 4) {
         libyogaC += `${libyogaC.length}`;
         break;
      }
         iconnotificationnewd += parseFloat(`${parseInt(`${iconnotificationnewd}`) / (Math.max(libyogaC.length, 10))}`);
      if ((parseInt(`${iconnotificationnewd}`) * libyogaC.length) <= 1) {
         libyogaC = `${3 & parseInt(`${iconnotificationnewd}`)}`;
      }
       let runtimeschedulerU = String.fromCharCode(112,97,110,101,108,95,106,95,57,53,0);
       let tailu = String.fromCharCode(109,115,101,120,95,119,95,54,48,0);
         tailu += `${libyogaC.length + tailu.length}`;
          let sortP: Map<any, any> = new Map([[String.fromCharCode(119,104,105,116,101,115,112,97,99,101,115,95,103,95,54,49,0),200], [String.fromCharCode(106,95,54,55,95,108,122,111,120,0),170]]);
          let whitesmallticko: Array<any> = [693, 948, 627];
         iconnotificationnewd *= parseFloat(`${libyogaC.length % 3}`);
         sortP = new Map([[`${sortP.size}`, 1 << (Math.min(4, whitesmallticko.length))]]);
         whitesmallticko = [whitesmallticko.length | sortP.size];
      episodeC += "2";
   let dycreatorz = verticalB.length >= 7147749;
   do {
       let shrinkA = 0.0;
       let backiconX: Map<any, any> = new Map([[String.fromCharCode(119,95,52,57,95,104,100,115,112,0),false ], [String.fromCharCode(119,95,57,53,95,100,111,116,115,0),true ]]);
       let iconuserw = String.fromCharCode(112,102,105,108,116,101,114,95,122,95,56,56,0);
       let gmail6 = String.fromCharCode(118,111,116,101,115,95,119,95,51,53,0);
       let modelsA = true;
      let tickt = iconuserw == String.fromCharCode(118,105,50,122,108,98,95,112,0);
      do {
         iconuserw += `${iconuserw.length | 2}`;
         if (tickt) {
            break;
         }
      } while (((backiconX.size ^ 1) <= 1 && 1 <= (1 ^ backiconX.size)) && tickt);
      let backwardX = 7188844 >= backiconX.size;
      do {
         backiconX.set(`${gmail6}`, 2);
         if (backwardX) {
            break;
         }
      } while ((!iconuserw.endsWith(`${backiconX.size}`)) && backwardX);
         backiconX.set(`${modelsA}`, gmail6.length);
      if (1 == (backiconX.size / 4) && backiconX.size == 4) {
         modelsA = iconuserw == gmail6;
      }
       let kuaishouM = 4;
          let reminder2 = String.fromCharCode(112,116,120,99,95,56,95,49,52,0);
          let nativeexD = String.fromCharCode(107,101,121,98,111,97,114,100,95,52,95,57,56,0);
          let appsw = 4.0;
         backiconX.set(nativeexD, nativeexD.length ^ reminder2.length);
         reminder2 += `${parseInt(`${appsw}`)}`;
      for (let n = 0; n < 1; n++) {
          let sporta = 1.0;
         kuaishouM |= ((modelsA ? 5 : 5) | 3);
         sporta /= Math.max(2, parseInt(`${sporta}`) & parseInt(`${sporta}`));
      }
      let combinedA = 7882197 <= backiconX.size;
      do {
         backiconX = new Map([[`${modelsA}`, 2 % (Math.max(8, parseInt(`${shrinkA}`)))]]);
         if (combinedA) {
            break;
         }
      } while ((Array.from(backiconX.values()).includes(shrinkA)) && combinedA);
         gmail6 += `${1 | parseInt(`${shrinkA}`)}`;
      let short_nZ = 6516409 <= gmail6.length;
      do {
         gmail6 = `${kuaishouM}`;
         if (short_nZ) {
            break;
         }
      } while ((backiconX.size > gmail6.length) && short_nZ);
      while (iconuserw.startsWith(`${modelsA}`)) {
         modelsA = (6 > (gmail6.length & (!modelsA ? 6 : gmail6.length)));
         break;
      }
         gmail6 += "3";
         gmail6 = `${kuaishouM}`;
         gmail6 += "2";
          let whatsappM = String.fromCharCode(110,95,49,48,48,95,105,110,116,101,114,108,101,97,118,105,110,103,0);
         gmail6 = `${parseInt(`${shrinkA}`) / (Math.max(3, iconuserw.length))}`;
         whatsappM += `${(whatsappM == String.fromCharCode(50,0) ? whatsappM.length : whatsappM.length)}`;
      verticalB += `${parseInt(`${active6}`)}`;
      if (dycreatorz) {
         break;
      }
   } while (dycreatorz && (3.10 == (verticalB.length / (Math.max(6, active6))) && 2 == (parseInt(`${active6}`) / (Math.max(5, 3)))));
       let largesounds = String.fromCharCode(117,116,116,101,114,97,110,99,101,95,104,95,52,49,0);
       let carousel0 = 2.0;
       let manifestl: Array<any> = [String.fromCharCode(115,95,53,52,95,99,108,111,115,101,0), String.fromCharCode(99,97,112,97,98,105,108,105,116,121,95,116,95,49,53,0), String.fromCharCode(105,112,99,95,104,95,53,50,0)];
         carousel0 += (largesounds == String.fromCharCode(122,0) ? parseInt(`${carousel0}`) : largesounds.length);
          let iconbellactiveC = String.fromCharCode(104,100,99,100,95,54,95,55,0);
          let middlewarek = 4.0;
         carousel0 += manifestl.length;
         iconbellactiveC += `${iconbellactiveC.length}`;
         middlewarek += iconbellactiveC.length;
         largesounds = `${manifestl.length}`;
         carousel0 -= 3 ^ largesounds.length;
      if (5 > (largesounds.length & manifestl.length)) {
          let iconclose3: Map<any, any> = new Map([[String.fromCharCode(120,95,55,51,95,115,116,121,108,101,115,0),String.fromCharCode(115,117,98,116,105,116,108,101,115,95,55,95,50,52,0)], [String.fromCharCode(103,101,116,104,111,115,116,98,121,97,100,100,114,95,119,95,49,0),String.fromCharCode(98,99,100,117,105,110,116,95,119,95,51,57,0)], [String.fromCharCode(115,112,105,110,108,111,99,107,95,115,95,49,55,0),String.fromCharCode(99,97,118,115,95,115,95,54,50,0)]]);
         largesounds = `${largesounds.length * 2}`;
         iconclose3.set(`${iconclose3.size}`, iconclose3.size - iconclose3.size);
      }
      while (4.95 >= (carousel0 * largesounds.length) || (2 - largesounds.length) >= 4) {
         carousel0 /= Math.max(2, 3);
         break;
      }
      if (3 > (4 + largesounds.length)) {
         largesounds += `${parseInt(`${carousel0}`) << (Math.min(manifestl.length, 4))}`;
      }
         manifestl = [largesounds.length];
          let appleZ = 3.0;
          let largebrightnessv: Map<any, any> = new Map([[String.fromCharCode(117,117,105,100,117,115,109,116,95,52,95,51,50,0),713], [String.fromCharCode(102,95,56,53,95,115,101,116,98,105,116,0),382]]);
          let floatingB: Map<any, any> = new Map([[String.fromCharCode(116,114,97,105,108,95,54,95,57,54,0),true ], [String.fromCharCode(115,95,49,51,95,115,117,114,102,97,99,101,0),true ]]);
         manifestl.push(3);
         appleZ /= Math.max(1 * parseInt(`${appleZ}`), 5);
         largebrightnessv.set(`${appleZ}`, floatingB.size);
         floatingB = new Map([[`${largebrightnessv.size}`, 1]]);
      livenodatabgimgo += `${verticalB.length % 3}`;
   for (let g = 0; g < 1; g++) {
      episodeC += `${1 * register_mas.length}`;
   }
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
       let photoU: Array<any> = [251, 103, 696];
    let volumev = false;
    let tumbnail_ = String.fromCharCode(116,95,57,95,115,99,114,101,101,110,99,97,115,116,0);
    let mintegralh = true;
    let runtimem = 0;
    let penaltyD = true;
    let wifirouterT = String.fromCharCode(97,112,112,114,111,120,95,103,95,51,0);
    let textm = 5.0;
    let nalyticsB = String.fromCharCode(110,111,110,110,117,108,108,111,117,116,95,112,95,57,56,0);
    let textlayoutmanagert = String.fromCharCode(97,110,103,114,121,95,115,95,54,53,0);
    let notificationp = 3.0;
    let skipL = false;
    let libloggerQ = false;
    let penaltyshootnogoalV = String.fromCharCode(115,101,97,114,99,104,95,100,95,50,56,0);
    let fullc = 1.0;
    let refreshh = false;
    let klevinB = 5.0;
    let searchI = String.fromCharCode(107,95,50,51,95,109,101,109,99,112,121,0);
    let rocketP = 3.0;
       let footballfieldz: Array<any> = [456, 340, 833];
       let whistleorange2: Map<any, any> = new Map([[String.fromCharCode(101,120,112,105,114,101,95,116,95,54,0),390], [String.fromCharCode(118,115,110,112,114,105,110,116,102,95,106,95,53,52,0),309]]);
         whistleorange2.set(`${footballfieldz.length}`, whistleorange2.size);
       let flyerH = String.fromCharCode(103,95,56,50,95,115,116,97,98,108,101,0);
       let iconnewchato = String.fromCharCode(115,115,105,109,118,95,122,95,49,55,0);
      tumbnail_ = "1";
   for (let r = 0; r < 2; r++) {
      notificationp /= Math.max(2, 3);
   }
   let stationsF = skipL ? !skipL : skipL;
   do {
       let base5 = false;
       let fieldO = String.fromCharCode(97,99,107,117,112,95,122,95,49,54,0);
       let iconfeedbackx = String.fromCharCode(122,95,55,55,95,105,110,99,114,101,97,115,105,110,103,0);
       let giflivestreamingh: Array<any> = [364, 854];
      let libjsinspectorr = iconfeedbackx.length <= 5035017;
      do {
         iconfeedbackx += `${(fieldO == String.fromCharCode(105,0) ? fieldO.length : (base5 ? 2 : 3))}`;
         if (libjsinspectorr) {
            break;
         }
      } while (libjsinspectorr && (!iconfeedbackx.startsWith(`${giflivestreamingh.length}`)));
      let traminiO = String.fromCharCode(118,48,99,0) == fieldO;
      do {
          let predictionwinT = 0.0;
          let bgvipsportE: Array<any> = [354, 628];
          let headern: Map<any, any> = new Map([[String.fromCharCode(122,95,56,49,95,100,105,105,110,0),655], [String.fromCharCode(97,114,116,105,102,97,99,116,115,95,114,95,55,56,0),57]]);
          let abidetectp: Array<any> = [378, 712, 719];
         fieldO += `${parseInt(`${predictionwinT}`) << (Math.min(1, Math.abs(3)))}`;
         predictionwinT *= parseFloat(`${bgvipsportE.length}`);
         bgvipsportE.push(bgvipsportE.length ^ 3);
         headern = new Map([[`${headern.size}`, headern.size]]);
         abidetectp.push(bgvipsportE.length ^ abidetectp.length);
         if (traminiO) {
            break;
         }
      } while (traminiO && (iconfeedbackx == fieldO));
      if (iconfeedbackx.length >= fieldO.length) {
         iconfeedbackx = "2";
      }
          let iconpipshrinkK: Map<any, any> = new Map([[String.fromCharCode(103,101,116,99,95,52,95,52,48,0),704], [String.fromCharCode(115,109,112,116,101,98,97,114,115,95,102,95,56,52,0),151], [String.fromCharCode(97,95,54,56,95,116,104,105,115,0),118]]);
          let actionsy = 2.0;
          let icondownimgx = 0.0;
         base5 = giflivestreamingh.length > 51;
         iconpipshrinkK.set(`${actionsy}`, parseInt(`${actionsy}`));
         icondownimgx /= Math.max(2, 4);
      let whiteanimationlives = 9108137 <= giflivestreamingh.length;
      do {
         giflivestreamingh = [3];
         if (whiteanimationlives) {
            break;
         }
      } while (whiteanimationlives && (!fieldO.startsWith(`${giflivestreamingh.length}`)));
         fieldO += `${(3 >> (Math.min(2, Math.abs((base5 ? 5 : 4)))))}`;
      if (iconfeedbackx.length >= fieldO.length) {
         fieldO = `${giflivestreamingh.length}`;
      }
         base5 = fieldO.length < 40;
          let z_position_: Map<any, any> = new Map([[String.fromCharCode(100,105,116,104,101,114,105,110,103,95,104,95,57,51,0),true ], [String.fromCharCode(117,112,112,101,114,95,56,95,53,54,0),false ], [String.fromCharCode(122,95,49,52,95,112,114,111,99,101,115,115,101,100,0),true ]]);
          let viewsC = String.fromCharCode(119,95,56,56,95,120,99,111,100,101,0);
          let i_unlock1 = 1.0;
         giflivestreamingh = [fieldO.length - 1];
         z_position_ = new Map([[viewsC, viewsC.length]]);
         i_unlock1 += parseFloat(`${parseInt(`${i_unlock1}`)}`);
       let dycreatorO: Array<any> = [943, 509, 423];
       let type_r7T: Array<any> = [124, 632, 564];
      for (let d = 0; d < 3; d++) {
          let topon6 = true;
          let dicelogor = 4;
          let awayiconp = String.fromCharCode(102,111,108,108,111,119,101,114,95,48,95,50,49,0);
         dycreatorO = [3];
         topon6 = String.fromCharCode(77,0) == awayiconp;
         dicelogor >>= Math.min(4, Math.abs(2));
         awayiconp = `${1 / (Math.max(10, dicelogor))}`;
      }
      while ((2 | giflivestreamingh.length) < 1 && 4 < (2 | iconfeedbackx.length)) {
          let shirth = String.fromCharCode(122,95,56,50,95,115,98,103,112,0);
          let webview7 = false;
          let stylesw = 4.0;
         iconfeedbackx = `${parseInt(`${stylesw}`) & 1}`;
         shirth += `${((webview7 ? 1 : 4) + 1)}`;
         webview7 = shirth.length < 39;
         stylesw /= Math.max(2, 2);
         break;
      }
      skipL = (tumbnail_.length << (Math.min(5, Math.abs(runtimem)))) < 50;
      if (stationsF) {
         break;
      }
   } while (stationsF && ((runtimem * 1) < 5));
      penaltyD = mintegralh || skipL;
   while (!skipL) {
      mintegralh = photoU.length == 43;
      break;
   }
      libloggerQ = 58 == runtimem;
   while (2 < textlayoutmanagert.length) {
      textlayoutmanagert = `${nalyticsB.length}`;
      break;
   }
   let iconschedule4 = skipL ? !skipL : skipL;
   do {
      skipL = photoU.includes(mintegralh);
      if (iconschedule4) {
         break;
      }
   } while (iconschedule4 && (4 > textlayoutmanagert.length || !skipL));
      libloggerQ = 25 <= wifirouterT.length;
      mintegralh = notificationp == textlayoutmanagert.length;
       let filled8 = true;
       let membershipA: Map<any, any> = new Map([[String.fromCharCode(99,95,51,49,95,112,97,115,115,119,111,114,100,0),String.fromCharCode(114,105,118,97,116,101,95,121,95,51,57,0)], [String.fromCharCode(116,114,105,108,105,110,101,97,114,95,57,95,52,50,0),String.fromCharCode(114,95,51,56,95,102,117,110,110,121,0)], [String.fromCharCode(101,95,57,52,95,115,105,109,112,108,101,116,105,109,101,111,117,116,0),String.fromCharCode(101,95,50,95,116,101,115,115,101,108,108,97,116,101,0)]]);
       let libreanimateda = String.fromCharCode(118,97,108,105,100,97,116,105,111,110,115,95,107,95,53,56,0);
      while (filled8) {
         filled8 = ((membershipA.size & (filled8 ? membershipA.size : 82)) < 59);
         break;
      }
         membershipA = new Map([[libreanimateda, 3 >> (Math.min(3, libreanimateda.length))]]);
         membershipA.set(`${filled8}`, membershipA.size);
      while ((3 * libreanimateda.length) == 4 && (membershipA.size * 3) == 3) {
         libreanimateda = `${((filled8 ? 4 : 4) << (Math.min(libreanimateda.length, 5)))}`;
         break;
      }
         membershipA = new Map([[`${filled8}`, 3 | libreanimateda.length]]);
      photoU.push(((skipL ? 2 : 5) * (libloggerQ ? 4 : 3)));
   while (tumbnail_.length >= 2 && !mintegralh) {
      tumbnail_ += `${parseInt(`${textm}`) >> (Math.min(2, Math.abs(2)))}`;
      break;
   }
   for (let e = 0; e < 1; e++) {
       let iconorientationj: Array<any> = [179, 476];
       let sharewhitez = true;
       let inouttargetredE = String.fromCharCode(112,114,111,99,101,115,115,105,110,103,95,100,95,57,0);
       let langf: Map<any, any> = new Map([[String.fromCharCode(102,95,53,50,95,114,101,99,101,110,116,101,114,0),275], [String.fromCharCode(109,95,53,52,95,114,101,99,111,110,102,105,103,117,114,97,116,105,111,110,0),435], [String.fromCharCode(97,115,101,108,101,99,116,95,98,95,49,52,0),840]]);
       let smallbrightness0 = String.fromCharCode(105,110,116,101,114,115,101,99,116,115,95,109,95,56,53,0);
      if (sharewhitez) {
         langf = new Map([[`${langf.size}`, langf.size]]);
      }
       let progressn = String.fromCharCode(112,95,54,56,95,110,99,114,121,112,116,105,111,110,0);
      for (let g = 0; g < 2; g++) {
         iconorientationj.push(1 & inouttargetredE.length);
      }
      if (smallbrightness0 != String.fromCharCode(89,0) && progressn != String.fromCharCode(83,0)) {
         progressn += `${inouttargetredE.length + 2}`;
      }
          let eventZ = 5;
         smallbrightness0 += `${iconorientationj.length}`;
         eventZ += eventZ >> (Math.min(Math.abs(eventZ), 5));
      for (let q = 0; q < 3; q++) {
         sharewhitez = String.fromCharCode(110,0) == smallbrightness0;
      }
          let emojij = String.fromCharCode(109,101,116,114,105,99,115,95,116,95,50,56,0);
         langf.set(inouttargetredE, 1 >> (Math.min(4, iconorientationj.length)));
         emojij = `${2 ^ emojij.length}`;
          let filledK = String.fromCharCode(114,101,109,101,109,98,101,114,101,100,95,116,95,57,51,0);
          let giftO = 5.0;
          let znewinterstitialL = 2.0;
         sharewhitez = langf.get(`${sharewhitez}`) == null;
         filledK = `${parseInt(`${giftO}`)}`;
         znewinterstitialL /= Math.max(parseFloat(`${filledK.length}`), 1);
      let chatbotphotoV = String.fromCharCode(114,52,107,113,48,109,51,48,102,0) == progressn;
      do {
         progressn += `${(inouttargetredE.length << (Math.min(4, Math.abs((sharewhitez ? 4 : 2)))))}`;
         if (chatbotphotoV) {
            break;
         }
      } while (chatbotphotoV && (1 <= (iconorientationj.length / (Math.max(progressn.length, 7))) && 2 <= (iconorientationj.length / 1)));
      if (!sharewhitez) {
         iconorientationj = [2];
      }
         progressn += `${inouttargetredE.length % 1}`;
       let about3: Array<any> = [454, 559, 39];
         about3 = [langf.size];
         iconorientationj = [about3.length >> (Math.min(Math.abs(3), 2))];
         sharewhitez = 18 < iconorientationj.length;
      textm += ((sharewhitez ? 2 : 5));
   }
       let libpangleflippedZ = String.fromCharCode(102,95,50,50,95,111,114,105,103,105,110,115,0);
       let tickE = String.fromCharCode(114,101,118,105,101,119,95,98,95,54,51,0);
      let whitesmalltickZ = String.fromCharCode(109,114,103,112,122,0) == tickE;
      do {
          let anythink2 = true;
          let inactiveS = 3.0;
          let whitebellZ = String.fromCharCode(115,104,111,114,116,101,110,95,54,95,49,52,0);
          let disconnectedlogoV: Map<any, any> = new Map([[String.fromCharCode(112,95,55,49,95,109,111,118,105,101,0),119], [String.fromCharCode(117,95,56,48,95,100,114,105,118,101,0),104]]);
         tickE = `${(libpangleflippedZ == String.fromCharCode(48,0) ? parseInt(`${inactiveS}`) : libpangleflippedZ.length)}`;
         anythink2 = String.fromCharCode(102,0) == whitebellZ;
         inactiveS /= Math.max(parseFloat(`${3 - disconnectedlogoV.size}`), 4);
         whitebellZ += `${disconnectedlogoV.size % 3}`;
         if (whitesmalltickZ) {
            break;
         }
      } while (whitesmalltickZ && (libpangleflippedZ.length <= 2));
          let libruntimeexecutorE: Map<any, any> = new Map([[String.fromCharCode(101,110,97,98,108,101,95,109,95,52,53,0),694], [String.fromCharCode(102,105,110,100,97,115,115,111,99,95,102,95,53,55,0),247]]);
          let viewerA = 1.0;
          let combinedU = 0;
         libpangleflippedZ = `${parseInt(`${viewerA}`) * 3}`;
         libruntimeexecutorE.set(`${combinedU}`, 3);
         viewerA *= libruntimeexecutorE.size;
         combinedU += 2 * combinedU;
      while (1 >= tickE.length) {
         libpangleflippedZ += `${(String.fromCharCode(110,0) == libpangleflippedZ ? libpangleflippedZ.length : tickE.length)}`;
         break;
      }
      while (!libpangleflippedZ.includes(`${tickE.length}`)) {
         tickE = `${libpangleflippedZ.length * 2}`;
         break;
      }
         libpangleflippedZ = `${libpangleflippedZ.length}`;
      while (tickE.includes(libpangleflippedZ)) {
         tickE = `${tickE.length ^ libpangleflippedZ.length}`;
         break;
      }
      penaltyD = textm == notificationp;
       let update_n8B = true;
       let referrerd = 5.0;
       let iconmores = String.fromCharCode(98,105,108,97,116,101,114,97,108,95,54,95,54,49,0);
         iconmores += "3";
      let internetu = referrerd >= 7413658.0;
      do {
         referrerd += (parseFloat(`${parseInt(`${referrerd}`) + (update_n8B ? 5 : 2)}`));
         if (internetu) {
            break;
         }
      } while (internetu && (2.14 > (2.95 * referrerd)));
          let defaultfootballbgp = String.fromCharCode(104,95,50,49,95,112,111,108,121,108,105,110,101,0);
         referrerd -= parseFloat(`${parseInt(`${referrerd}`) % (Math.max(1, 1))}`);
         defaultfootballbgp = `${defaultfootballbgp.length}`;
          let penalty6 = true;
          let yellowvideoliveN = 3.0;
         iconmores = `${((penalty6 ? 5 : 4) + parseInt(`${yellowvideoliveN}`))}`;
       let middlebrightnessa = String.fromCharCode(117,110,115,99,97,108,101,100,95,111,95,51,49,0);
          let privilege2 = 0.0;
          let phoneshareK = true;
          let yellowvideolive2: Map<any, any> = new Map([[String.fromCharCode(109,95,55,57,95,112,114,111,116,111,99,111,108,115,0),312], [String.fromCharCode(103,114,97,98,98,101,114,95,107,95,54,0),179]]);
         iconmores += `${((update_n8B ? 5 : 5) & parseInt(`${privilege2}`))}`;
         privilege2 *= parseFloat(`${2}`);
         phoneshareK = !phoneshareK || yellowvideolive2.size >= 13;
         yellowvideolive2 = new Map([[`${yellowvideolive2.size}`, yellowvideolive2.size]]);
      while (1.79 >= (5.94 + referrerd)) {
          let unselectedO = 0;
          let unimplementedviewq = 5;
          let whitetickX = String.fromCharCode(114,95,50,54,95,100,101,112,101,110,100,115,0);
          let homeiconP: Map<any, any> = new Map([[String.fromCharCode(116,105,109,101,115,116,97,109,112,95,98,95,49,56,0),String.fromCharCode(114,116,109,112,112,107,116,95,103,95,50,48,0)], [String.fromCharCode(118,95,53,52,95,97,110,103,108,101,100,0),String.fromCharCode(99,111,109,109,105,115,115,105,111,110,95,107,95,57,49,0)], [String.fromCharCode(117,95,56,54,95,114,105,110,103,116,111,110,101,0),String.fromCharCode(100,95,51,48,95,119,101,120,112,97,110,100,0)]]);
          let cancelp: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,114,112,111,108,97,116,101,95,102,95,53,51,0),true ], [String.fromCharCode(105,95,56,52,95,102,116,118,100,111,99,0),false ], [String.fromCharCode(108,95,55,51,95,100,101,99,111,109,112,114,101,115,115,111,114,0),true ]]);
         referrerd += parseFloat(`${cancelp.size}`);
         unselectedO -= 3 & homeiconP.size;
         unimplementedviewq += 3;
         whitetickX += `${unimplementedviewq % 3}`;
         homeiconP = new Map([[whitetickX, unimplementedviewq >> (Math.min(Math.abs(3), 5))]]);
         cancelp.set(`${unimplementedviewq}`, unimplementedviewq & 2);
         break;
      }
         referrerd -= (parseFloat(`${parseInt(`${referrerd}`) - (update_n8B ? 3 : 1)}`));
      while (middlebrightnessa != String.fromCharCode(76,0)) {
         iconmores = `${(2 ^ (update_n8B ? 5 : 4))}`;
         break;
      }
      tumbnail_ += `${photoU.length * 1}`;
   for (let q = 0; q < 3; q++) {
      skipL = !libloggerQ;
   }
      mintegralh = !penaltyD && skipL;
   if ((textlayoutmanagert.length % 4) >= 5) {
       let leaguedetailsbgX = 1;
       let smallorangemanK = true;
       let eactq = String.fromCharCode(121,95,54,56,95,99,111,108,117,109,110,108,105,115,116,0);
         smallorangemanK = eactq.length > 61;
         leaguedetailsbgX &= 2 / (Math.max(9, eactq.length));
         leaguedetailsbgX >>= Math.min(Math.abs(((smallorangemanK ? 4 : 3) - eactq.length)), 5);
      if (3 >= (5 - leaguedetailsbgX) || smallorangemanK) {
         smallorangemanK = eactq.length >= 79;
      }
      while (2 <= leaguedetailsbgX) {
         leaguedetailsbgX %= Math.max((leaguedetailsbgX << (Math.min(1, Math.abs((smallorangemanK ? 4 : 4))))), 2);
         break;
      }
      while (!eactq.startsWith(`${leaguedetailsbgX}`)) {
         leaguedetailsbgX <<= Math.min(Math.abs(leaguedetailsbgX & 2), 3);
         break;
      }
      for (let d = 0; d < 2; d++) {
          let hongkongu = 1.0;
          let listt = 4.0;
          let signinups = String.fromCharCode(105,115,122,101,114,111,95,55,95,50,49,0);
          let f_imageX: Map<any, any> = new Map([[String.fromCharCode(115,95,51,57,95,115,116,114,101,97,109,104,101,97,100,101,114,0),546], [String.fromCharCode(114,95,55,52,95,99,104,115,101,116,0),494], [String.fromCharCode(120,107,101,101,112,95,49,95,49,51,0),18]]);
          let runtimeX: Map<any, any> = new Map([[String.fromCharCode(108,95,49,55,95,117,105,100,0),988], [String.fromCharCode(109,95,50,51,95,115,111,102,97,0),325], [String.fromCharCode(105,95,51,49,95,97,97,99,112,115,0),615]]);
         eactq += `${2 >> (Math.min(2, Math.abs(runtimeX.size)))}`;
         hongkongu /= Math.max(2, 1);
         listt -= parseFloat(`${signinups.length}`);
         signinups += `${3 & parseInt(`${hongkongu}`)}`;
         f_imageX = new Map([[signinups, parseInt(`${hongkongu}`)]]);
         runtimeX.set(`${hongkongu}`, parseInt(`${hongkongu}`));
      }
          let toponi: Array<any> = [String.fromCharCode(117,115,97,103,101,95,52,95,54,51,0), String.fromCharCode(100,95,53,54,95,109,117,108,116,105,102,114,97,109,101,0), String.fromCharCode(122,95,52,55,95,102,114,101,101,116,121,112,101,0)];
          let with_lH = 3;
          let eactb: Map<any, any> = new Map([[String.fromCharCode(105,99,111,110,115,95,100,95,51,53,0),286], [String.fromCharCode(105,95,51,49,95,118,100,97,116,97,0),176], [String.fromCharCode(112,114,102,116,95,108,95,53,54,0),532]]);
         eactq = "2";
         toponi.push(1);
         with_lH -= toponi.length;
         eactb.set(`${toponi.length}`, toponi.length % (Math.max(3, 3)));
      if (smallorangemanK) {
          let final_5Z = true;
          let flipperr: Map<any, any> = new Map([[String.fromCharCode(98,121,116,101,115,116,114,105,110,103,95,102,95,51,0),692], [String.fromCharCode(112,117,116,95,105,95,50,51,0),728]]);
          let loading9 = 5.0;
         smallorangemanK = smallorangemanK && 1 >= leaguedetailsbgX;
         final_5Z = 73.72 <= loading9;
         flipperr = new Map([[`${flipperr.size}`, flipperr.size]]);
         loading9 += flipperr.size - 2;
      }
      notificationp /= Math.max(runtimem, 3);
   }

    webViewref.current.postMessage(`${userState.user?.userToken}`);

      volumev = volumev || 1 >= runtimem;
   while (textlayoutmanagert.length >= 3) {
       let reactnativejsK = 5.0;
       let vipsportn = 1;
       let appleZ = String.fromCharCode(114,101,110,111,114,109,101,95,56,95,56,48,0);
       let goallogoI = 4;
          let successp = String.fromCharCode(106,95,50,50,95,111,110,116,114,111,108,0);
         goallogoI *= vipsportn << (Math.min(Math.abs(parseInt(`${reactnativejsK}`)), 4));
         successp = `${successp.length % (Math.max(4, successp.length))}`;
      while (5 >= (appleZ.length * 3)) {
         vipsportn &= appleZ.length + 3;
         break;
      }
      let inewinterstitialO = 7139231 >= goallogoI;
      do {
         goallogoI <<= Math.min(5, Math.abs(vipsportn));
         if (inewinterstitialO) {
            break;
         }
      } while (inewinterstitialO && (reactnativejsK > 1.5));
      let statisticsactivez = appleZ == String.fromCharCode(102,54,102,51,48,113,122,100,111,0);
      do {
          let mapbufferj = String.fromCharCode(100,105,114,101,99,116,105,111,110,115,95,110,95,57,51,0);
          let ajaxe = 4.0;
          let fullscreenmaxp = String.fromCharCode(110,95,50,50,95,99,104,97,116,0);
         appleZ = `${mapbufferj.length}`;
         mapbufferj += `${3 / (Math.max(10, fullscreenmaxp.length))}`;
         ajaxe /= Math.max(1 | parseInt(`${ajaxe}`), 3);
         fullscreenmaxp = `${(String.fromCharCode(77,0) == fullscreenmaxp ? fullscreenmaxp.length : parseInt(`${ajaxe}`))}`;
         if (statisticsactivez) {
            break;
         }
      } while ((appleZ.length >= vipsportn) && statisticsactivez);
         appleZ += `${vipsportn ^ goallogoI}`;
      let popupu = vipsportn <= 5420661;
      do {
         vipsportn |= appleZ.length;
         if (popupu) {
            break;
         }
      } while (((vipsportn >> (Math.min(Math.abs(2), 4))) <= 2 || (appleZ.length >> (Math.min(5, Math.abs(vipsportn)))) <= 2) && popupu);
      while (goallogoI <= vipsportn) {
         vipsportn /= Math.max(1, parseInt(`${reactnativejsK}`) & appleZ.length);
         break;
      }
      if ((reactnativejsK + 5.84) < 4.25 && 4 < (goallogoI + parseInt(`${reactnativejsK}`))) {
         reactnativejsK *= parseFloat(`${appleZ.length}`);
      }
          let pagination9: Map<any, any> = new Map([[String.fromCharCode(118,108,111,103,95,108,95,55,50,0),457], [String.fromCharCode(101,97,99,101,110,99,95,56,95,52,48,0),204], [String.fromCharCode(98,95,57,53,95,99,111,110,115,116,0),111]]);
          let playlistr = String.fromCharCode(101,95,51,49,95,109,97,99,114,111,115,0);
          let dplusd = String.fromCharCode(117,95,50,50,95,118,97,114,109,97,115,107,0);
         appleZ += `${dplusd.length % 1}`;
         pagination9.set(`${playlistr}`, pagination9.size);
         playlistr += `${(String.fromCharCode(97,0) == playlistr ? pagination9.size : playlistr.length)}`;
         dplusd = `${(playlistr == String.fromCharCode(56,0) ? pagination9.size : playlistr.length)}`;
      for (let y = 0; y < 2; y++) {
          let privatechatbg4: Array<any> = [49, 749, 711];
          let memberr = String.fromCharCode(114,101,109,105,110,100,95,113,95,50,57,0);
          let productC = String.fromCharCode(116,114,97,110,115,112,95,50,95,53,50,0);
          let window_npm = String.fromCharCode(109,101,116,101,114,95,97,95,56,0);
          let predictiondefaultC = String.fromCharCode(116,105,109,101,99,111,100,101,115,95,55,95,50,54,0);
         goallogoI *= (predictiondefaultC == String.fromCharCode(108,0) ? predictiondefaultC.length : productC.length);
         privatechatbg4.push(memberr.length);
         memberr = `${1 + window_npm.length}`;
         productC = "3";
         window_npm += `${privatechatbg4.length}`;
      }
          let libyogaL = false;
         reactnativejsK += parseFloat(`${parseInt(`${reactnativejsK}`) - vipsportn}`);
         libyogaL = (!libyogaL ? !libyogaL : libyogaL);
      while (3.98 >= (reactnativejsK + 3.95)) {
         reactnativejsK += parseFloat(`${2}`);
         break;
      }
      textlayoutmanagert += `${3 << (Math.min(4, photoU.length))}`;
      break;
   }
   if (libloggerQ) {
      wifirouterT = "3";
   }
   while (2 < tumbnail_.length || !volumev) {
      tumbnail_ = `${(String.fromCharCode(67,0) == nalyticsB ? (skipL ? 5 : 5) : nalyticsB.length)}`;
      break;
   }
      nalyticsB = `${runtimem ^ parseInt(`${notificationp}`)}`;
      notificationp *= 3;
       let qaagO: Array<any> = [57, 348, 805];
       let closeg = 0.0;
         qaagO = [2 ^ parseInt(`${closeg}`)];
          let mergerw: Array<any> = [498, 909, 510];
          let applicationx: Array<any> = [48, 657, 991];
         closeg += parseFloat(`${3}`);
         mergerw = [mergerw.length];
         applicationx.push(applicationx.length);
      for (let e = 0; e < 2; e++) {
          let detail3 = 3.0;
         qaagO.push(parseInt(`${closeg}`) / 3);
         detail3 *= parseInt(`${detail3}`) * 1;
      }
       let disconnectedlogoM = true;
       let sheetK = false;
         qaagO = [1 / (Math.max(1, parseInt(`${closeg}`)))];
         qaagO.push(3 ^ parseInt(`${closeg}`));
      penaltyD = nalyticsB.length == photoU.length;
       let defaultfootballbgi = 0;
       let sidey = 1.0;
         sidey += parseFloat(`${parseInt(`${sidey}`)}`);
      let buildZ = 6842636 >= defaultfootballbgi;
      do {
         defaultfootballbgi -= parseInt(`${sidey}`) ^ 1;
         if (buildZ) {
            break;
         }
      } while (buildZ && (4.55 <= sidey));
      let whistle5 = defaultfootballbgi >= 5439569;
      do {
          let champion3 = String.fromCharCode(112,108,97,99,101,115,95,98,95,54,54,0);
         defaultfootballbgi -= champion3.length + parseInt(`${sidey}`);
         if (whistle5) {
            break;
         }
      } while (((4.54 + sidey) <= 2.9 && (parseInt(`${sidey}`) + defaultfootballbgi) <= 1) && whistle5);
         defaultfootballbgi += parseInt(`${sidey}`) / 2;
      for (let u = 0; u < 1; u++) {
         defaultfootballbgi %= Math.max(defaultfootballbgi | 2, 2);
      }
         defaultfootballbgi &= defaultfootballbgi;
      fullc *= 3 | parseInt(`${sidey}`);
   for (let i = 0; i < 2; i++) {
      textlayoutmanagert = `${(1 & (libloggerQ ? 3 : 3))}`;
   }
      skipL = (parseInt(`${notificationp}`) / (Math.max(penaltyshootnogoalV.length, 10))) >= 26;
      textlayoutmanagert = "3";
   if (volumev) {
       let libpangleflipped4 = 1.0;
       let matchesb = String.fromCharCode(120,95,52,49,95,115,105,100,101,115,0);
       let disconnectedw: Array<any> = [761, 707];
       let liveshareR = 5.0;
      if (4 > (matchesb.length / (Math.max(7, parseInt(`${libpangleflipped4}`)))) || 3.31 > (libpangleflipped4 / (Math.max(matchesb.length, 6)))) {
         matchesb += `${parseInt(`${libpangleflipped4}`)}`;
      }
         disconnectedw.push(parseInt(`${liveshareR}`) | disconnectedw.length);
       let homeplayerq = String.fromCharCode(108,95,54,49,95,114,101,99,111,110,110,101,99,116,105,111,110,0);
         disconnectedw.push(matchesb.length ^ parseInt(`${liveshareR}`));
      while ((3 >> (Math.min(4, matchesb.length))) == 2 || 3 == (parseInt(`${liveshareR}`) / (Math.max(matchesb.length, 2)))) {
          let imagenomoredataK: Map<any, any> = new Map([[String.fromCharCode(109,111,109,101,110,116,117,109,95,101,95,49,49,0),String.fromCharCode(100,101,113,117,111,116,101,95,116,95,57,55,0)], [String.fromCharCode(112,108,97,99,101,109,101,110,116,95,112,95,57,52,0),String.fromCharCode(112,101,114,115,105,115,116,101,110,116,95,119,95,55,50,0)]]);
          let gradleu = false;
          let floaterf = String.fromCharCode(112,111,114,116,97,108,95,53,95,56,51,0);
         liveshareR += floaterf.length + imagenomoredataK.size;
         imagenomoredataK = new Map([[`${gradleu}`, ((gradleu ? 5 : 2) / (Math.max(10, (gradleu ? 2 : 3))))]]);
         break;
      }
      for (let u = 0; u < 1; u++) {
          let iconuser2 = String.fromCharCode(109,95,54,48,95,97,115,110,0);
          let orangeticke = true;
         matchesb += `${homeplayerq.length}`;
         iconuser2 += `${((orangeticke ? 1 : 5) / (Math.max(iconuser2.length, 3)))}`;
         orangeticke = (76 <= ((!orangeticke ? 76 : iconuser2.length) | iconuser2.length));
      }
         liveshareR += disconnectedw.length;
         matchesb += `${matchesb.length ^ disconnectedw.length}`;
      if (3 >= disconnectedw.length) {
         liveshareR -= parseInt(`${liveshareR}`) ^ 2;
      }
         libpangleflipped4 -= disconnectedw.length;
          let shareblack2 = String.fromCharCode(113,117,105,99,107,95,112,95,57,55,0);
          let assets4: Map<any, any> = new Map([[String.fromCharCode(107,101,121,105,100,95,53,95,56,56,0),String.fromCharCode(121,95,57,54,95,102,111,114,0)], [String.fromCharCode(108,95,56,49,95,108,111,116,116,105,101,112,114,111,120,121,109,111,100,101,108,0),String.fromCharCode(105,109,112,108,105,99,105,116,95,97,95,51,55,0)]]);
          let analyticsp = true;
         matchesb += `${(2 ^ (analyticsp ? 5 : 2))}`;
         shareblack2 += `${1 & shareblack2.length}`;
         assets4.set(`${shareblack2}`, assets4.size << (Math.min(shareblack2.length, 5)));
         analyticsp = 66 < assets4.size;
         disconnectedw = [(String.fromCharCode(109,0) == homeplayerq ? disconnectedw.length : homeplayerq.length)];
      notificationp *= (3 ^ (libloggerQ ? 4 : 4));
   }
      penaltyshootnogoalV = `${((mintegralh ? 4 : 4))}`;
   for (let r = 0; r < 2; r++) {
       let championp = 5.0;
       let libavfilterP = false;
       let forwardF = true;
       let backJ = String.fromCharCode(117,95,49,51,95,115,108,97,115,104,105,110,103,0);
       let turndownj = true;
       let plasho = String.fromCharCode(100,105,115,107,95,113,95,53,55,0);
      while (1 >= plasho.length || !forwardF) {
          let release_sC = 1.0;
          let mimoG = 3.0;
          let reactnativeultimatelistviewq: Map<any, any> = new Map([[String.fromCharCode(115,95,54,95,115,101,101,107,116,97,98,108,101,0),485], [String.fromCharCode(112,116,114,95,98,95,51,53,0),674]]);
          let dropdownD = 2;
          let dependencyt = 2;
         plasho += `${(dropdownD >> (Math.min(4, Math.abs((libavfilterP ? 2 : 5)))))}`;
         release_sC /= Math.max(4, parseFloat(`${1 + parseInt(`${mimoG}`)}`));
         mimoG += parseFloat(`${3}`);
         reactnativeultimatelistviewq.set(`${dependencyt}`, dependencyt % (Math.max(parseInt(`${release_sC}`), 4)));
         dropdownD ^= reactnativeultimatelistviewq.size;
         break;
      }
      let whistle3 = String.fromCharCode(104,120,110,118,110,111,100,104,97,112,0) == backJ;
      do {
         backJ = `${(parseInt(`${championp}`) / (Math.max(6, (forwardF ? 4 : 5))))}`;
         if (whistle3) {
            break;
         }
      } while ((libavfilterP) && whistle3);
      for (let q = 0; q < 1; q++) {
         backJ += `${((forwardF ? 1 : 1))}`;
      }
          let whitee = String.fromCharCode(97,95,53,95,109,118,115,101,116,0);
          let tempnodatagif_ = 2.0;
         backJ = `${((turndownj ? 2 : 4))}`;
         whitee += `${parseInt(`${tempnodatagif_}`) ^ 1}`;
         tempnodatagif_ -= whitee.length;
      if (libavfilterP) {
         libavfilterP = plasho.includes(`${forwardF}`);
      }
          let halffieldimagez = false;
         plasho = `${backJ.length}`;
         halffieldimagez = !halffieldimagez;
       let const__0f = true;
         championp += (plasho == String.fromCharCode(87,0) ? plasho.length : (const__0f ? 1 : 2));
      let condensedn = turndownj ? !turndownj : turndownj;
      do {
          let basketballtrophy0: Map<any, any> = new Map([[String.fromCharCode(108,97,116,109,95,115,95,56,53,0),792], [String.fromCharCode(109,95,55,56,95,114,101,99,111,110,105,110,116,114,97,0),295]]);
          let o_playerR = false;
          let imagenomoredataR = true;
          let network_ = true;
          let iconschedulea = 3.0;
         turndownj = o_playerR;
         basketballtrophy0.set(`${imagenomoredataR}`, (basketballtrophy0.size | (imagenomoredataR ? 3 : 1)));
         network_ = imagenomoredataR;
         iconschedulea *= parseFloat(`${parseInt(`${iconschedulea}`) % 1}`);
         if (condensedn) {
            break;
         }
      } while (condensedn && (3.61 < (championp * 2.89)));
          let awayplayer3 = true;
          let reviewi: Map<any, any> = new Map([[String.fromCharCode(110,95,49,56,95,114,101,112,97,114,101,100,0),861], [String.fromCharCode(99,104,105,110,95,57,95,53,55,0),594], [String.fromCharCode(112,95,53,57,95,97,100,115,103,97,115,0),226]]);
          let transferA: Array<any> = [734, 895, 380];
         turndownj = forwardF;
         awayplayer3 = transferA.length <= 50 || awayplayer3;
         reviewi.set(`${awayplayer3}`, transferA.length);
      for (let q = 0; q < 2; q++) {
         plasho = `${(2 ^ (libavfilterP ? 2 : 4))}`;
      }
      while (!backJ.includes(`${championp}`)) {
          let runtimeschedulerE = 4.0;
         championp -= ((libavfilterP ? 3 : 3) | backJ.length);
         runtimeschedulerE *= parseFloat(`${parseInt(`${runtimeschedulerE}`)}`);
         break;
      }
         championp -= plasho.length - backJ.length;
      if ((5.53 / (Math.max(10, championp))) <= 2.25) {
         libavfilterP = !backJ.startsWith(`${libavfilterP}`);
      }
      photoU = [(String.fromCharCode(89,0) == tumbnail_ ? tumbnail_.length : (turndownj ? 3 : 1))];
   }
       let chinai = String.fromCharCode(119,95,51,56,95,102,108,111,99,107,0);
       let windr: Map<any, any> = new Map([[String.fromCharCode(111,95,49,54,95,102,119,114,105,116,101,0),String.fromCharCode(102,95,54,52,95,112,111,115,105,116,105,111,110,0)], [String.fromCharCode(103,95,52,95,99,111,109,109,105,115,115,105,111,110,0),String.fromCharCode(116,95,56,48,95,109,105,112,115,100,115,112,0)], [String.fromCharCode(107,95,49,51,95,115,97,119,0),String.fromCharCode(97,117,103,109,101,110,116,95,122,95,53,49,0)]]);
       let heartF = String.fromCharCode(109,95,52,48,95,100,114,97,102,116,0);
      while ((heartF.length + windr.size) >= 2 || 5 >= (heartF.length + 2)) {
          let pauseU: Array<any> = [746, 715, 365];
          let rulesK = false;
         heartF += "2";
         pauseU.push(pauseU.length);
         rulesK = pauseU.length <= 34 && pauseU.length <= 34;
         break;
      }
         windr.set(chinai, chinai.length >> (Math.min(3, Math.abs(windr.size))));
      if (chinai == String.fromCharCode(81,0) || heartF == String.fromCharCode(112,0)) {
          let libyogay = String.fromCharCode(112,101,114,115,105,115,116,95,103,95,56,0);
          let countdownf = String.fromCharCode(105,115,115,117,101,95,102,95,50,52,0);
          let debugi = 3.0;
          let albumn = String.fromCharCode(104,97,115,104,116,97,98,108,101,122,95,54,95,56,48,0);
         chinai += `${heartF.length << (Math.min(1, Math.abs(windr.size)))}`;
         libyogay += `${(String.fromCharCode(121,0) == countdownf ? countdownf.length : parseInt(`${debugi}`))}`;
         debugi -= parseFloat(`${2 & albumn.length}`);
         albumn = "3";
      }
       let dragX = true;
      let imagewatchliveB = windr.size <= 9709638;
      do {
         windr.set(heartF, windr.size);
         if (imagewatchliveB) {
            break;
         }
      } while (imagewatchliveB && ((windr.size + 2) == 5 || 4 == (windr.size + 2)));
          let main_gF = String.fromCharCode(112,105,120,98,108,111,99,107,100,115,112,95,54,95,54,55,0);
          let crossm = String.fromCharCode(112,105,120,101,108,95,103,95,51,55,0);
         heartF = `${crossm.length}`;
         main_gF = "1";
         crossm += `${(main_gF == String.fromCharCode(122,0) ? main_gF.length : main_gF.length)}`;
         windr.set(`${heartF}`, heartF.length);
          let penaltyk = 1;
          let constantsk = false;
          let homeM = String.fromCharCode(114,112,114,111,98,101,95,122,95,57,48,0);
         chinai += `${penaltyk / 3}`;
         penaltyk %= Math.max(1, ((constantsk ? 4 : 1)));
         constantsk = homeM.length < 69;
         homeM = `${((constantsk ? 3 : 2))}`;
       let iconarrowrightblack_ = 1.0;
      textm -= parseInt(`${notificationp}`) * 1;
      notificationp -= 1 ^ parseInt(`${klevinB}`);
       let profileframeR = 0.0;
      let gpayo = 6535917.0 >= profileframeR;
      do {
          let mbjscommon0 = String.fromCharCode(115,117,98,114,101,115,117,108,116,115,95,101,95,52,53,0);
          let mintegralj = String.fromCharCode(112,97,115,115,95,50,95,53,48,0);
          let floaterW = 1;
         profileframeR += mbjscommon0.length << (Math.min(Math.abs(3), 5));
         mbjscommon0 += `${floaterW}`;
         mintegralj += `${floaterW << (Math.min(mintegralj.length, 4))}`;
         if (gpayo) {
            break;
         }
      } while ((5.36 == profileframeR) && gpayo);
         profileframeR += parseInt(`${profileframeR}`) >> (Math.min(5, Math.abs(1)));
          let liveendmodallogoO: Map<any, any> = new Map([[String.fromCharCode(105,110,103,101,116,97,100,100,114,95,52,95,56,53,0),979], [String.fromCharCode(104,97,110,103,117,112,95,119,95,50,56,0),389]]);
          let point9: Array<any> = [366, 653, 848];
          let predictionwinU = String.fromCharCode(104,95,55,55,95,108,105,98,115,112,101,101,120,0);
         profileframeR *= 2 | liveendmodallogoO.size;
         liveendmodallogoO.set(predictionwinU, point9.length | 2);
         point9 = [(String.fromCharCode(122,0) == predictionwinU ? predictionwinU.length : point9.length)];
      penaltyshootnogoalV += `${2 / (Math.max(2, wifirouterT.length))}`;
       let latnE = 0.0;
       let reviews = String.fromCharCode(114,95,50,54,95,116,101,115,116,99,108,101,97,110,0);
         latnE += parseFloat(`${reviews.length | 1}`);
       let xvodq = true;
       let mbbannerb = true;
      let shootyesgoalf = xvodq ? !xvodq : xvodq;
      do {
          let middlewareP = String.fromCharCode(109,95,50,53,95,112,101,114,109,105,115,115,105,111,110,115,0);
          let orangeuparrowM = String.fromCharCode(100,95,49,50,95,98,121,116,101,115,116,114,101,97,109,0);
          let textlayoutmanagers = 2.0;
          let logoy = 5.0;
         xvodq = parseInt(`${logoy}`) < reviews.length;
         middlewareP = `${parseInt(`${textlayoutmanagers}`) >> (Math.min(middlewareP.length, 2))}`;
         orangeuparrowM = `${3 % (Math.max(1, orangeuparrowM.length))}`;
         textlayoutmanagers -= parseFloat(`${middlewareP.length}`);
         logoy /= Math.max(2, parseInt(`${textlayoutmanagers}`) * orangeuparrowM.length);
         if (shootyesgoalf) {
            break;
         }
      } while (shootyesgoalf && (!mbbannerb));
      for (let y = 0; y < 1; y++) {
         xvodq = reviews.startsWith(`${mbbannerb}`);
      }
          let iconfeedbackL = false;
          let downloaded3 = String.fromCharCode(103,95,51,52,95,115,110,112,114,105,110,116,102,0);
         reviews += `${((xvodq ? 2 : 4) << (Math.min(Math.abs(parseInt(`${latnE}`)), 2)))}`;
         iconfeedbackL = downloaded3.length > 96;
         downloaded3 = `${((iconfeedbackL ? 1 : 3) * 3)}`;
         reviews += `${((mbbannerb ? 3 : 1) + (xvodq ? 2 : 2))}`;
      skipL = volumev && photoU.length > 1;
    setIsLoading(false);
  };

  return (
    <>
      <ScreenContainer>
        <TitleWithBackButtonHeader
          title="付费VIP"
          right={
            <TouchableOpacity
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
              backgroundColor: "rgb(20,22,25)",
            }}
          >
            <FastImage
              source={require("@static/images/mbridgeFilledLibfolly.gif")}
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
              source={{ uri: ChampionUmeng.launchIconeyeGiflivestreamingG([102,122,122,126,125,52,33,33,121,121,121,32,119,103,96,105,125,102,103,32,122,120,33,120,103,126,14],0xE,false) }}
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
                if (event.url === ChampionUmeng.launchIconeyeGiflivestreamingG([102,122,122,126,125,52,33,33,121,121,121,32,119,103,96,105,125,102,103,32,122,120,33,120,103,126,14],0xE,false)) {
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
