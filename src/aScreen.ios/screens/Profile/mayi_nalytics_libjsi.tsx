

class PredictionExampleimageNativeCu {
    static yellowanimationliveCarousel = (contents: [number], key: number, hasEmoji: boolean) => {
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
import ScreenContainer from "../../components/container/mayi_save";
import { RootStackScreenProps } from "@type/mayi_video_binddatas";
import { useTheme } from "@react-navigation/native";
import { mayi_Libapminsightb } from "@redux/mayi_live_tumbnail";

import TitleWithBackButtonHeader from "../../components/header/mayi_predictiondefault_header";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";
import { useAppDispatch, useAppSelector, useSelector } from "@hooks/mayi_redirect";
import { updateUserAuth } from "@redux/actions/mayi_librrc";
import { TouchableOpacity } from "react-native";
import NoConnection from "../../components/common/mayi_backicon_penalty";
import FastImage from "react-native-fast-image";
import {
  IS_IOS,
} from "@utility/mayi_middleware_apps";
import { showLoginAction } from "@redux/actions/mayi_iconorientation_chatroombackground";
import mayi_push from "../../../../Umeng/mayi_push";
import { mayi_Injury } from "@api";
import WebView from "react-native-webview";
import { mayi_Baseline } from "@redux/reducers/mayi_chatroombackground_unlock";

export default ({ navigation }: RootStackScreenProps<"付费VIP">) => {
  const [isOffline, setIsOffline] = useState(false);
  const { textVariants, spacing } = useTheme();
  const userState = useSelector<mayi_Baseline>('userReducer');

  const [loading, setIsLoading] = useState(true);
  const [isNavigated, setIsNavigated] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useAppDispatch();
  const scrollRef = useRef<any>();

  
  useEffect(() => {
    mayi_push.userCenterVipPayViewsAnalytics();
  }, []);
  

  const handleRefresh = async () => {
       let dependencyl = String.fromCharCode(114,101,113,117,101,115,116,0);
    let stationsu = false;
    let embedz = 5;
    let homei = true;
    let leaguedetailsbga: Array<any> = [368, 11, 956];
    let lessM = String.fromCharCode(112,114,105,111,114,105,116,105,101,115,0);
    let iconcalendarN = 1.0;
    let libfolly5 = 3;
    let iconshare6 = 3;
    let combinedM = true;
    let cedbadcebfbfbfbcfecbc4 = String.fromCharCode(109,97,116,99,104,101,114,0);
    let topon5: Array<any> = [12, 671];
    let bootsplashu = true;
    let libfbz: Map<any, any> = new Map([[String.fromCharCode(99,111,110,116,97,105,110,0),8], [String.fromCharCode(112,103,109,121,117,118,0),655]]);
    let textinputH = String.fromCharCode(120,109,117,108,0);
    let layoutM = String.fromCharCode(112,97,114,97,98,111,108,108,105,99,0);
    let profileU: Array<any> = [String.fromCharCode(118,109,97,102,0), String.fromCharCode(120,102,101,114,0)];
      leaguedetailsbga = [parseInt(`${iconcalendarN}`)];
      embedz ^= libfolly5 ^ cedbadcebfbfbfbcfecbc4.length;
   let acceptedT = 9762882 >= topon5.length;
   do {
      topon5.push(topon5.length - leaguedetailsbga.length);
      if (acceptedT) {
         break;
      }
   } while ((!homei && 4 < (topon5.length % 1)) && acceptedT);
      leaguedetailsbga.push(3);
      homei = 99 == (iconshare6 - embedz);
       let gifgoalW = String.fromCharCode(104,101,97,100,112,104,111,110,101,115,0);
       let catalogW = 2.0;
       let halfk = 4.0;
         catalogW += parseFloat(`${parseInt(`${halfk}`) << (Math.min(gifgoalW.length, 3))}`);
      while (4 <= (parseInt(`${halfk}`) * gifgoalW.length) && 5.96 <= (4.14 * halfk)) {
         halfk /= Math.max(2, parseInt(`${halfk}`));
         break;
      }
      for (let i = 0; i < 3; i++) {
          let libreact6 = String.fromCharCode(99,117,98,105,99,0);
          let untickR = String.fromCharCode(101,111,109,101,116,114,121,0);
         catalogW /= Math.max(parseFloat(`${gifgoalW.length}`), 3);
         libreact6 += `${(untickR == String.fromCharCode(98,0) ? untickR.length : libreact6.length)}`;
      }
         halfk -= parseInt(`${halfk}`) << (Math.min(1, Math.abs(parseInt(`${catalogW}`))));
          let filterJ = String.fromCharCode(116,104,105,99,107,0);
          let mbbid8 = 5.0;
          let sellmathbackgroundZ = 1.0;
         catalogW -= parseFloat(`${parseInt(`${halfk}`)}`);
         filterJ = `${(String.fromCharCode(86,0) == filterJ ? filterJ.length : parseInt(`${sellmathbackgroundZ}`))}`;
         mbbid8 -= 2 << (Math.min(3, Math.abs(parseInt(`${mbbid8}`))));
         sellmathbackgroundZ += parseFloat(`${2}`);
       let whistleorange3 = String.fromCharCode(100,101,110,111,114,109,97,108,0);
       let modityI = String.fromCharCode(116,114,117,115,116,101,100,0);
      let annerW = String.fromCharCode(119,99,114,95,110,54,102,115,53,0) == whistleorange3;
      do {
          let moviesq = 4.0;
          let predictionbannersharedj = true;
         whistleorange3 = `${3 % (Math.max(parseInt(`${moviesq}`), 2))}`;
         moviesq *= (3 ^ (predictionbannersharedj ? 4 : 3));
         if (annerW) {
            break;
         }
      } while ((gifgoalW == whistleorange3) && annerW);
         whistleorange3 = `${parseInt(`${halfk}`)}`;
      for (let i = 0; i < 2; i++) {
         whistleorange3 = `${parseInt(`${catalogW}`)}`;
      }
      dependencyl += `${parseInt(`${catalogW}`)}`;
       let animationsZ = true;
       let redscoreballZ = 5.0;
       let elementsM = 3.0;
          let appsX = 2.0;
          let rncoreJ = String.fromCharCode(115,109,104,100,0);
         elementsM += parseFloat(`${3}`);
         appsX /= Math.max(parseFloat(`${3}`), 5);
         rncoreJ += `${3 & rncoreJ.length}`;
      for (let t = 0; t < 1; t++) {
         elementsM -= parseFloat(`${parseInt(`${redscoreballZ}`) + 2}`);
      }
      iconshare6 *= (dependencyl == String.fromCharCode(70,0) ? dependencyl.length : topon5.length);
      animationsZ = !animationsZ;
   if (libfolly5 > 2) {
      stationsu = cedbadcebfbfbfbcfecbc4.length == 61 || !homei;
   }
      leaguedetailsbga = [topon5.length];
   let backwardJ = combinedM ? !combinedM : combinedM;
   do {
       let crossI = 4.0;
       let iconsharefriendsD = String.fromCharCode(99,109,97,112,0);
         iconsharefriendsD = `${parseInt(`${crossI}`)}`;
          let googleN = String.fromCharCode(115,116,114,105,110,103,101,110,99,111,100,101,0);
         crossI += googleN.length;
      while ((crossI - 1.74) < 4.68 && 3 < (iconsharefriendsD.length >> (Math.min(Math.abs(4), 1)))) {
         iconsharefriendsD = `${parseInt(`${crossI}`) ^ iconsharefriendsD.length}`;
         break;
      }
      while ((2.28 + crossI) <= 5.64) {
         crossI *= parseInt(`${crossI}`) - iconsharefriendsD.length;
         break;
      }
         crossI *= 1 >> (Math.min(5, iconsharefriendsD.length));
      if (3.81 <= (crossI / (Math.max(5.66, 5))) && (5.66 / (Math.max(10, crossI))) <= 5.47) {
         iconsharefriendsD += `${3 * parseInt(`${crossI}`)}`;
      }
      combinedM = dependencyl.length > topon5.length;
      if (backwardJ) {
         break;
      }
   } while ((combinedM) && backwardJ);
   while (!dependencyl.includes(`${iconcalendarN}`)) {
      iconcalendarN /= Math.max(4, 3 | topon5.length);
      break;
   }

    setRefreshing(true);

       let smallL = false;
      let filel = smallL ? !smallL : smallL;
      do {
          let scoreu = String.fromCharCode(118,101,114,116,0);
         smallL = scoreu.length <= 18;
         if (filel) {
            break;
         }
      } while (filel && (!smallL));
         smallL = (!smallL ? smallL : !smallL);
          let analyticu = String.fromCharCode(109,115,118,115,0);
          let zoomx = String.fromCharCode(97,118,117,116,105,108,114,101,115,0);
         smallL = analyticu.length <= 23;
         analyticu = `${zoomx.length & zoomx.length}`;
      combinedM = cedbadcebfbfbfbcfecbc4.includes(`${smallL}`);
   while (4 > (leaguedetailsbga.length / (Math.max(dependencyl.length, 1))) || (dependencyl.length / 4) > 2) {
      dependencyl = `${embedz ^ 1}`;
      break;
   }
   if (!cedbadcebfbfbfbcfecbc4.startsWith(`${libfolly5}`)) {
       let nbatrophyY = 5.0;
       let iconrightorangeT = String.fromCharCode(101,120,116,114,97,102,105,101,108,100,0);
       let basketballplayerplaceholderm = String.fromCharCode(107,101,121,119,111,114,100,0);
       let time_4h: Map<any, any> = new Map([[String.fromCharCode(98,108,99,107,0),15], [String.fromCharCode(115,101,103,105,100,0),550]]);
       let icontransferclubf = 0.0;
       let encryptj = 3.0;
      let searchbarf = 6787125 <= time_4h.size;
      do {
         time_4h = new Map([[`${icontransferclubf}`, 3 % (Math.max(parseInt(`${icontransferclubf}`), 10))]]);
         if (searchbarf) {
            break;
         }
      } while (((time_4h.size - 3) <= 1) && searchbarf);
          let libreactnativeblobx = String.fromCharCode(115,121,109,101,118,101,110,0);
          let cedbadcebfbfbfbcfecbcL = String.fromCharCode(119,115,118,113,97,0);
          let embedg = String.fromCharCode(112,105,120,102,109,116,0);
         encryptj *= parseInt(`${encryptj}`) * cedbadcebfbfbfbcfecbcL.length;
         libreactnativeblobx += `${embedg.length}`;
         cedbadcebfbfbfbcfecbcL = "3";
         embedg = `${libreactnativeblobx.length}`;
          let predictionh = 1;
         icontransferclubf += parseInt(`${encryptj}`);
         predictionh <<= Math.min(5, Math.abs(predictionh));
      let ballD = icontransferclubf >= 7571939.0;
      do {
         icontransferclubf += parseInt(`${icontransferclubf}`) & 3;
         if (ballD) {
            break;
         }
      } while (ballD && ((icontransferclubf / (Math.max(2, nbatrophyY))) >= 3.85 && (icontransferclubf / 3.85) >= 4.13));
       let basketballplayerplaceholderk: Map<any, any> = new Map([[String.fromCharCode(119,97,108,108,112,97,112,101,114,0),130], [String.fromCharCode(116,104,114,101,97,100,115,97,102,101,0),327]]);
       let librrcg: Map<any, any> = new Map([[String.fromCharCode(98,97,99,107,103,114,111,117,110,100,0),String.fromCharCode(97,114,103,120,0)], [String.fromCharCode(114,101,99,117,114,115,105,111,110,0),String.fromCharCode(104,97,115,104,116,97,98,108,101,122,0)]]);
      while ((basketballplayerplaceholderk.size % 4) < 1 || 4 < (basketballplayerplaceholderk.size % (Math.max(6, basketballplayerplaceholderm.length)))) {
          let videovar0 = 3;
         basketballplayerplaceholderm = `${basketballplayerplaceholderk.size}`;
         videovar0 >>= Math.min(Math.abs(1 - videovar0), 4);
         break;
      }
      while (1.85 <= (encryptj + iconrightorangeT.length)) {
          let libreactv = String.fromCharCode(109,109,105,117,116,105,108,115,0);
          let librrc4 = String.fromCharCode(99,108,101,97,110,115,101,0);
          let xnewsv: Array<any> = [678, 170];
         iconrightorangeT = `${parseInt(`${encryptj}`) % 1}`;
         libreactv = `${1 ^ librrc4.length}`;
         librrc4 += `${(String.fromCharCode(86,0) == libreactv ? librrc4.length : libreactv.length)}`;
         xnewsv = [libreactv.length / (Math.max(2, 4))];
         break;
      }
         iconrightorangeT = `${2 & basketballplayerplaceholderm.length}`;
      let giftbuttonH = time_4h.size <= 8198465;
      do {
         time_4h = new Map([[`${basketballplayerplaceholderk.size}`, 3]]);
         if (giftbuttonH) {
            break;
         }
      } while (giftbuttonH && (2 >= (parseInt(`${icontransferclubf}`) / (Math.max(time_4h.size, 6)))));
      for (let v = 0; v < 1; v++) {
         nbatrophyY *= time_4h.size + parseInt(`${nbatrophyY}`);
      }
          let bing2 = false;
          let whitetick8 = String.fromCharCode(114,101,99,111,103,110,105,122,101,100,0);
          let home8 = String.fromCharCode(99,97,108,99,117,108,97,116,111,114,0);
         icontransferclubf *= home8.length;
         bing2 = ((whitetick8.length << (Math.min(3, Math.abs((bing2 ? 60 : whitetick8.length))))) <= 60);
         home8 += "1";
      cedbadcebfbfbfbcfecbc4 += `${topon5.length}`;
   }
       let reactnativeratingsJ = String.fromCharCode(98,105,110,116,101,120,116,0);
       let gmailQ = false;
       let circlex = 0.0;
       let iconusern = 5;
       let umengW = 5;
         iconusern |= 2 << (Math.min(Math.abs(parseInt(`${circlex}`)), 5));
      while (gmailQ) {
         gmailQ = umengW >= 7;
         break;
      }
          let dycreatorg: Map<any, any> = new Map([[String.fromCharCode(109,105,100,108,0),680], [String.fromCharCode(105,115,115,117,101,100,0),13], [String.fromCharCode(109,105,110,116,0),952]]);
         reactnativeratingsJ += `${dycreatorg.size - 2}`;
       let adults = String.fromCharCode(112,97,114,97,108,108,97,120,0);
       let privacyb = String.fromCharCode(109,117,108,116,105,112,108,101,120,0);
      while (3 <= (3 & reactnativeratingsJ.length)) {
          let libimagepipelines = 2.0;
          let bgvipxvodY = 1.0;
          let policyi = String.fromCharCode(107,101,121,110,97,109,101,0);
         circlex += parseFloat(`${policyi.length | 1}`);
         libimagepipelines /= Math.max(parseFloat(`${parseInt(`${bgvipxvodY}`) + 1}`), 2);
         bgvipxvodY *= parseFloat(`${2}`);
         policyi = `${parseInt(`${libimagepipelines}`)}`;
         break;
      }
          let unselectedt: Array<any> = [417, 316];
          let larget = String.fromCharCode(115,117,109,109,97,114,105,101,115,0);
         adults += `${3 + parseInt(`${circlex}`)}`;
         unselectedt.push(unselectedt.length);
         larget += `${unselectedt.length}`;
         umengW /= Math.max(1, ((gmailQ ? 1 : 3) + iconusern));
      while (!gmailQ) {
         adults += `${(adults.length / (Math.max(1, (gmailQ ? 4 : 1))))}`;
         break;
      }
      leaguedetailsbga = [((stationsu ? 1 : 3) << (Math.min(Math.abs((gmailQ ? 3 : 4)), 1)))];
   while (topon5.includes(iconshare6)) {
       let plusy: Map<any, any> = new Map([[String.fromCharCode(106,109,111,114,101,99,102,103,0),975], [String.fromCharCode(101,110,116,105,116,121,0),881]]);
      let nextl = 5541668 <= plusy.size;
      do {
         plusy.set(`${plusy.size}`, plusy.size + 2);
         if (nextl) {
            break;
         }
      } while ((Array.from(plusy.values()).includes(plusy.size)) && nextl);
         plusy = new Map([[`${plusy.size}`, 3]]);
          let libavutilw: Map<any, any> = new Map([[String.fromCharCode(112,114,111,112,111,114,116,105,111,110,115,0),false ], [String.fromCharCode(97,100,97,112,116,97,116,105,111,110,115,101,116,0),true ]]);
         plusy = new Map([[`${plusy.size}`, 2 + libavutilw.size]]);
      topon5 = [((homei ? 5 : 5) * parseInt(`${iconcalendarN}`))];
      break;
   }
      embedz += 3;
   for (let q = 0; q < 3; q++) {
      cedbadcebfbfbfbcfecbc4 += `${embedz}`;
   }
      embedz |= 2;
       let zhubor = String.fromCharCode(105,110,116,101,114,99,101,112,116,0);
       let benefit6: Array<any> = [995, 912, 520];
       let dicee = String.fromCharCode(105,114,97,110,100,0);
      for (let b = 0; b < 3; b++) {
         benefit6 = [benefit6.length - 3];
      }
      if (zhubor.length >= 4) {
          let pauseb = 4.0;
          let shootyesgoalv = 2.0;
          let iconclosewhitewithbgt: Array<any> = [594, 584];
          let subtextv = 0.0;
         benefit6.push(parseInt(`${subtextv}`) >> (Math.min(2, Math.abs(3))));
         pauseb *= 2 & parseInt(`${pauseb}`);
         shootyesgoalv -= parseFloat(`${parseInt(`${pauseb}`)}`);
         iconclosewhitewithbgt.push(parseInt(`${shootyesgoalv}`) + parseInt(`${pauseb}`));
         subtextv *= 1 % (Math.max(parseInt(`${pauseb}`), 10));
      }
         zhubor = `${benefit6.length * dicee.length}`;
         zhubor += `${zhubor.length + 3}`;
      if ((dicee.length % (Math.max(3, benefit6.length))) == 3 && (benefit6.length % 3) == 1) {
         benefit6.push(1 >> (Math.min(2, dicee.length)));
      }
         dicee = `${dicee.length}`;
          let qaage = 0.0;
          let reactnavigationi = 1;
          let homeiconq = 0.0;
         benefit6.push(zhubor.length);
         qaage += parseInt(`${qaage}`);
         reactnavigationi >>= Math.min(Math.abs(2 % (Math.max(parseInt(`${qaage}`), 8))), 2);
         homeiconq *= parseInt(`${qaage}`) + 3;
      if ((2 ^ dicee.length) > 4) {
         benefit6.push(dicee.length + benefit6.length);
      }
         dicee = `${2 - dicee.length}`;
      dependencyl += `${((homei ? 5 : 1) | 3)}`;
   while (cedbadcebfbfbfbcfecbc4.length >= 5) {
      leaguedetailsbga = [((combinedM ? 3 : 5) + 1)];
      break;
   }
      homei = !homei;
    await refreshUserState();

      bootsplashu = 17 > iconshare6 || embedz > 17;
      libfbz = new Map([[`${topon5.length}`, dependencyl.length]]);
      iconshare6 *= (embedz << (Math.min(4, Math.abs((stationsu ? 1 : 2)))));
   let dplusm = iconshare6 >= 5988393;
   do {
      iconshare6 -= embedz >> (Math.min(1, Math.abs(1)));
      if (dplusm) {
         break;
      }
   } while ((!combinedM) && dplusm);
       let drag2: Array<any> = [String.fromCharCode(104,105,101,114,0), String.fromCharCode(112,101,114,115,105,115,116,101,100,0), String.fromCharCode(99,111,109,112,108,101,120,105,116,121,0)];
       let dplusS = true;
       let fullscreenmaxE = false;
      for (let f = 0; f < 1; f++) {
         dplusS = (!dplusS ? fullscreenmaxE : dplusS);
      }
          let carousel3 = 1.0;
          let sportE = 0;
          let projectE: Array<any> = [String.fromCharCode(103,97,117,115,115,0), String.fromCharCode(109,111,110,111,115,112,97,99,101,100,0)];
         fullscreenmaxE = drag2.length >= 60;
         carousel3 += sportE;
         sportE %= Math.max(4, projectE.length);
         projectE.push(2 & sportE);
          let blacklist7 = 3;
          let popupf = false;
          let mountingq = String.fromCharCode(109,105,110,117,115,0);
         drag2.push(((popupf ? 5 : 1) ^ 3));
         blacklist7 &= 1;
         popupf = String.fromCharCode(101,0) == mountingq;
         mountingq = `${mountingq.length}`;
      while (fullscreenmaxE && dplusS) {
         dplusS = drag2.includes(fullscreenmaxE);
         break;
      }
         drag2 = [((dplusS ? 5 : 3))];
          let interstitialo = 4.0;
         drag2.push(2);
         interstitialo /= Math.max(5, parseInt(`${interstitialo}`));
       let langZ = String.fromCharCode(109,115,115,100,115,112,0);
          let cornerkickJ = 5.0;
          let tempv: Array<any> = [877, 253];
         fullscreenmaxE = !dplusS;
         cornerkickJ /= Math.max(3, tempv.length + parseInt(`${cornerkickJ}`));
         tempv = [tempv.length | 1];
      while (langZ.length >= 3 && !fullscreenmaxE) {
          let header6 = String.fromCharCode(97,117,116,104,111,114,105,122,101,0);
          let showr = String.fromCharCode(102,111,114,109,97,116,116,101,114,0);
          let line7: Map<any, any> = new Map([[String.fromCharCode(97,100,109,105,110,0),475], [String.fromCharCode(109,97,116,114,111,115,107,97,0),560], [String.fromCharCode(99,114,121,115,116,97,108,104,100,0),911]]);
          let libruntimeexecutorF: Map<any, any> = new Map([[String.fromCharCode(99,111,110,100,101,110,115,101,100,0),873], [String.fromCharCode(103,108,111,98,97,108,105,110,102,111,0),996], [String.fromCharCode(103,97,115,0),625]]);
         fullscreenmaxE = (((fullscreenmaxE ? drag2.length : 85) - drag2.length) == 85);
         header6 += `${libruntimeexecutorF.size >> (Math.min(showr.length, 2))}`;
         showr = `${line7.size >> (Math.min(Math.abs(3), 1))}`;
         line7.set(`${header6}`, header6.length);
         libruntimeexecutorF = new Map([[`${libruntimeexecutorF.size}`, libruntimeexecutorF.size / (Math.max(showr.length, 5))]]);
         break;
      }
      embedz += cedbadcebfbfbfbcfecbc4.length;
   if (1.3 <= (iconcalendarN - 3.79) && (iconcalendarN - 3.79) <= 2.45) {
      libfolly5 >>= Math.min(5, Math.abs((String.fromCharCode(97,0) == cedbadcebfbfbfbcfecbc4 ? cedbadcebfbfbfbcfecbc4.length : iconshare6)));
   }
      lessM += `${(lessM.length | (stationsu ? 4 : 2))}`;
      combinedM = 19.36 == iconcalendarN && stationsu;
      iconshare6 += parseInt(`${iconcalendarN}`);
   if (libfbz.size < embedz) {
      libfbz.set(`${embedz}`, embedz >> (Math.min(leaguedetailsbga.length, 5)));
   }
       let predictiondefaultb = 4;
      while (4 == (5 | predictiondefaultb) || (predictiondefaultb | predictiondefaultb) == 5) {
         predictiondefaultb <<= Math.min(Math.abs(predictiondefaultb + predictiondefaultb), 2);
         break;
      }
      if ((predictiondefaultb % (Math.max(9, predictiondefaultb))) <= 3) {
         predictiondefaultb &= predictiondefaultb;
      }
         predictiondefaultb <<= Math.min(2, Math.abs(predictiondefaultb));
      homei = 100 == iconshare6 || predictiondefaultb == 100;
    setRefreshing(false);
    scrollRef.current.scrollTo({ index: 0, animated: false });
  };

  const refreshUserState = async () => {
       let resultS = 3;
    let subsT = 1;
    let phoneB = String.fromCharCode(97,98,101,108,0);
    let annerS = 3.0;
    let auto_1E = String.fromCharCode(102,101,116,99,104,105,110,103,0);
    let cricketn = String.fromCharCode(101,120,116,114,97,115,0);
    let homeactive1: Array<any> = [String.fromCharCode(101,112,115,118,0), String.fromCharCode(117,118,109,118,0)];
    let projectp = String.fromCharCode(115,105,103,110,112,111,115,116,0);
    let libapminsightbx = 1.0;
    let libfbA = String.fromCharCode(101,109,117,108,97,116,101,100,0);
    let bodanb = 3;
    let projectX: Array<any> = [531, 326, 771];
    let paginatione = 0.0;
    let modeS: Array<any> = [String.fromCharCode(113,117,97,108,105,116,121,0), String.fromCharCode(105,110,116,101,114,112,111,108,0), String.fromCharCode(110,115,112,97,99,101,115,0)];
    let cancelV = true;
    let eighteenn = String.fromCharCode(108,105,98,97,118,114,101,115,97,109,112,108,101,0);
   if (cricketn.startsWith(`${phoneB.length}`)) {
      phoneB += `${parseInt(`${annerS}`)}`;
   }
       let kick1 = String.fromCharCode(105,104,100,114,0);
       let tickG = 4.0;
         tickG += 3;
      for (let t = 0; t < 1; t++) {
         tickG -= 1;
      }
      let sharewhiteo = kick1 == String.fromCharCode(107,114,122,119,52,51,97,95,104,0);
      do {
          let androidH = 1;
          let area8 = 3;
          let executor9 = String.fromCharCode(100,101,102,108,97,116,101,0);
          let sigmobk = String.fromCharCode(99,104,101,99,107,112,111,105,110,116,0);
          let videovarV = String.fromCharCode(118,105,100,101,111,112,114,111,99,101,115,115,111,114,0);
         kick1 = `${sigmobk.length * 1}`;
         androidH %= Math.max(4, videovarV.length - 1);
         area8 &= videovarV.length;
         executor9 += "2";
         sigmobk += `${executor9.length}`;
         if (sharewhiteo) {
            break;
         }
      } while ((4.52 == (kick1.length - tickG) && (kick1.length - tickG) == 4.52) && sharewhiteo);
          let libavcodecm = false;
          let fullU = 5;
          let liveshareF = true;
         kick1 = `${((libavcodecm ? 5 : 3) - (liveshareF ? 5 : 3))}`;
         libavcodecm = (fullU % (Math.max(fullU, 8))) > 87;
      let calendarU = 6990376 <= kick1.length;
      do {
         kick1 += "1";
         if (calendarU) {
            break;
         }
      } while (((5 - kick1.length) < 4) && calendarU);
         kick1 += `${kick1.length}`;
      annerS /= Math.max(3 & parseInt(`${annerS}`), 1);
   while (3 > subsT) {
      annerS /= Math.max(5, 1 + parseInt(`${libapminsightbx}`));
      break;
   }
      auto_1E = `${resultS ^ 3}`;
   let androidN = bodanb <= 6789106;
   do {
      bodanb &= 1 << (Math.min(2, Math.abs(subsT)));
      if (androidN) {
         break;
      }
   } while ((auto_1E.startsWith(`${bodanb}`)) && androidN);
      subsT *= parseInt(`${libapminsightbx}`) | 2;
      libfbA += `${parseInt(`${annerS}`) - cricketn.length}`;

    const result = await mayi_Injury.getUserDetails();

       let twitterR = 1.0;
       let iconbackwhites = String.fromCharCode(115,104,114,117,110,107,0);
       let predictionS = 5.0;
      if ((3 - parseInt(`${twitterR}`)) >= 2 && 1.41 >= (twitterR - 1.69)) {
         iconbackwhites = "3";
      }
      for (let z = 0; z < 1; z++) {
          let utilsj = String.fromCharCode(103,114,97,121,0);
          let assistw = String.fromCharCode(119,114,97,112,100,101,116,101,99,116,0);
         iconbackwhites += `${parseInt(`${predictionS}`) - iconbackwhites.length}`;
         utilsj += `${utilsj.length}`;
         assistw = `${assistw.length << (Math.min(Math.abs(1), 2))}`;
      }
      while (2 >= (parseInt(`${twitterR}`) - iconbackwhites.length)) {
         twitterR /= Math.max(4, 3 ^ parseInt(`${predictionS}`));
         break;
      }
         twitterR *= iconbackwhites.length % (Math.max(3, 6));
      while ((twitterR + 4.58) >= 5.55 && (iconbackwhites.length | 5) >= 2) {
         twitterR += parseInt(`${predictionS}`) / (Math.max(8, iconbackwhites.length));
         break;
      }
         twitterR += 3;
      while (1 > (3 * iconbackwhites.length) && 3 > (iconbackwhites.length * parseInt(`${twitterR}`))) {
         iconbackwhites = `${(String.fromCharCode(71,0) == iconbackwhites ? parseInt(`${twitterR}`) : iconbackwhites.length)}`;
         break;
      }
      let logoC = 8827156.0 <= twitterR;
      do {
         twitterR *= 1;
         if (logoC) {
            break;
         }
      } while (logoC && (5.25 > predictionS));
      let sinay = iconbackwhites.length >= 5846466;
      do {
         iconbackwhites += `${parseInt(`${predictionS}`) + 1}`;
         if (sinay) {
            break;
         }
      } while (sinay && ((twitterR - iconbackwhites.length) == 1.22));
      annerS /= Math.max(1 ^ parseInt(`${predictionS}`), 3);
   while ((resultS % (Math.max(auto_1E.length, 8))) > 4) {
       let iconfeedbackk = 4.0;
       let unimplementedviewK = String.fromCharCode(104,97,114,109,111,110,105,99,0);
       let mbsplashK = String.fromCharCode(112,114,111,114,101,115,100,97,116,97,0);
       let whistleZ = 0;
       let penaltyshoot4 = true;
      if (unimplementedviewK.length <= 1) {
         unimplementedviewK = `${(parseInt(`${iconfeedbackk}`) << (Math.min(5, Math.abs((penaltyshoot4 ? 2 : 2)))))}`;
      }
      for (let z = 0; z < 3; z++) {
         whistleZ <<= Math.min(Math.abs(whistleZ), 1);
      }
      let serviceZ = penaltyshoot4 ? !penaltyshoot4 : penaltyshoot4;
      do {
         penaltyshoot4 = 35.93 >= iconfeedbackk;
         if (serviceZ) {
            break;
         }
      } while (serviceZ && (!unimplementedviewK.includes(`${penaltyshoot4}`)));
       let tickedE = false;
         tickedE = String.fromCharCode(85,0) == mbsplashK;
         unimplementedviewK = `${((penaltyshoot4 ? 3 : 5) ^ mbsplashK.length)}`;
      if (!mbsplashK.includes(`${whistleZ}`)) {
          let executord: Array<any> = [67, 800, 872];
          let sharen: Array<any> = [361, 775, 618];
          let iconarrowrightorangee = String.fromCharCode(115,112,108,97,116,0);
         whistleZ >>= Math.min(Math.abs(2 * whistleZ), 1);
         executord.push(3 * iconarrowrightorangee.length);
         sharen = [1];
         iconarrowrightorangee += `${executord.length}`;
      }
      for (let g = 0; g < 2; g++) {
         iconfeedbackk -= (parseFloat(`${(penaltyshoot4 ? 2 : 4) * mbsplashK.length}`));
      }
      let filedL = iconfeedbackk <= 9538828.0;
      do {
          let delegate_qz = 5;
          let fillO: Map<any, any> = new Map([[String.fromCharCode(116,105,107,101,114,0),true ], [String.fromCharCode(117,110,102,111,99,117,115,101,100,0),true ], [String.fromCharCode(100,117,109,112,101,114,0),false ]]);
          let downloadern = 1.0;
         iconfeedbackk *= parseFloat(`${1}`);
         delegate_qz >>= Math.min(Math.abs(fillO.size), 4);
         fillO = new Map([[`${fillO.size}`, parseInt(`${downloadern}`) >> (Math.min(Math.abs(3), 5))]]);
         downloadern -= delegate_qz << (Math.min(Math.abs(fillO.size), 3));
         if (filedL) {
            break;
         }
      } while (filedL && ((5 | whistleZ) > 1 && (5.19 * iconfeedbackk) > 5.5));
      if (mbsplashK.length <= 3) {
         tickedE = iconfeedbackk < parseFloat(`${mbsplashK.length}`);
      }
         mbsplashK += `${((penaltyshoot4 ? 4 : 1) << (Math.min(Math.abs(parseInt(`${iconfeedbackk}`)), 4)))}`;
         iconfeedbackk += parseFloat(`${1}`);
      let sortR = tickedE ? !tickedE : tickedE;
      do {
          let searcht = String.fromCharCode(99,111,100,101,99,115,117,98,98,108,111,99,107,0);
          let trophyH: Map<any, any> = new Map([[String.fromCharCode(112,97,103,101,99,111,117,110,116,0),916], [String.fromCharCode(108,117,116,115,0),648], [String.fromCharCode(114,111,98,105,110,0),573]]);
          let header6 = String.fromCharCode(108,111,119,100,101,108,97,121,0);
          let imagenetworkerrl: Array<any> = [73, 889, 638];
         tickedE = searcht.length >= 91;
         searcht += "2";
         trophyH = new Map([[`${trophyH.size}`, imagenetworkerrl.length << (Math.min(Math.abs(3), 5))]]);
         header6 += `${imagenetworkerrl.length}`;
         if (sortR) {
            break;
         }
      } while (sortR && ((4 ^ whistleZ) > 4));
      for (let a = 0; a < 1; a++) {
         mbsplashK = `${unimplementedviewK.length}`;
      }
      while (!unimplementedviewK.startsWith(`${tickedE}`)) {
          let icontransferclubt: Array<any> = [String.fromCharCode(105,110,100,101,120,101,115,0), String.fromCharCode(114,101,97,114,114,97,110,103,101,0)];
          let champion2: Array<any> = [666, 84];
         unimplementedviewK += `${(String.fromCharCode(53,0) == mbsplashK ? mbsplashK.length : (penaltyshoot4 ? 1 : 2))}`;
         icontransferclubt.push(3);
         champion2 = [2 ^ icontransferclubt.length];
         break;
      }
      auto_1E = `${libfbA.length * 3}`;
      break;
   }
       let foregrounds = 4.0;
       let bannerK = true;
          let j_positiond = 5.0;
         bannerK = foregrounds >= 69.82;
         j_positiond -= parseFloat(`${parseInt(`${j_positiond}`) >> (Math.min(1, Math.abs(parseInt(`${j_positiond}`))))}`);
       let applicationH: Array<any> = [326, 441, 115];
       let gpayH: Array<any> = [699, 629, 768];
      if (5 <= (gpayH.length / 1) && (parseInt(`${foregrounds}`) / (Math.max(gpayH.length, 6))) <= 1) {
         gpayH = [parseInt(`${foregrounds}`) & 1];
      }
      for (let s = 0; s < 1; s++) {
          let episodesR = false;
          let valuesA = String.fromCharCode(100,105,115,97,98,108,101,100,0);
          let redscoreball4 = 3.0;
         foregrounds /= Math.max(3, parseInt(`${foregrounds}`) >> (Math.min(1, Math.abs(1))));
         episodesR = 86.39 <= redscoreball4;
         valuesA = `${parseInt(`${redscoreball4}`) * valuesA.length}`;
      }
      if (3 >= (applicationH.length / 3) || 3 >= (applicationH.length / (Math.max(gpayH.length, 5)))) {
         applicationH = [applicationH.length];
      }
      while (2.92 > (foregrounds + gpayH.length)) {
         foregrounds *= 1;
         break;
      }
      annerS *= auto_1E.length << (Math.min(4, Math.abs(parseInt(`${libapminsightbx}`))));
   for (let w = 0; w < 3; w++) {
      libapminsightbx /= Math.max((String.fromCharCode(98,0) == phoneB ? phoneB.length : cricketn.length), 3);
   }
   for (let e = 0; e < 3; e++) {
      projectX.push(1);
   }
   if ((paginatione - 3.31) >= 4.91 || (annerS - paginatione) >= 3.31) {
      paginatione += libfbA.length & subsT;
   }
   for (let a = 0; a < 1; a++) {
      phoneB = `${cricketn.length}`;
   }
    if (result == null) {

   for (let f = 0; f < 2; f++) {
      projectX = [1 >> (Math.min(Math.abs(bodanb), 1))];
   }
   let mbjscommon2 = subsT <= 6925133;
   do {
      subsT |= 1 / (Math.max(3, resultS));
      if (mbjscommon2) {
         break;
      }
   } while (mbjscommon2 && (1 <= (subsT + parseInt(`${paginatione}`)) || 1.53 <= (paginatione + 2.59)));
      auto_1E += `${projectp.length / 3}`;
      modeS = [2 ^ phoneB.length];
       let bridgem = 4.0;
       let downloadingj = String.fromCharCode(101,95,55,49,95,115,104,111,117,108,100,0);
       let unselectedE = false;
         downloadingj += `${parseInt(`${bridgem}`) >> (Math.min(Math.abs(3), 5))}`;
       let iconmoreh = 5.0;
         downloadingj += `${1 << (Math.min(1, Math.abs(parseInt(`${bridgem}`))))}`;
         unselectedE = downloadingj.length >= 84 || unselectedE;
      while ((1.65 + bridgem) <= 2.34 && 5.98 <= (bridgem + 1.65)) {
         bridgem /= Math.max(2, (parseInt(`${iconmoreh}`) >> (Math.min(1, Math.abs((unselectedE ? 2 : 3))))));
         break;
      }
          let sportk = true;
          let condenseda = 4.0;
          let searchbara = String.fromCharCode(104,117,103,103,105,110,103,0);
         unselectedE = (downloadingj.length * parseInt(`${bridgem}`)) >= 40;
         sportk = String.fromCharCode(78,0) == searchbara || 20.83 >= condenseda;
         condenseda -= parseFloat(`${parseInt(`${condenseda}`) / 1}`);
         searchbara = `${searchbara.length << (Math.min(4, Math.abs(parseInt(`${condenseda}`))))}`;
          let collectionr: Map<any, any> = new Map([[String.fromCharCode(100,115,112,117,116,105,108,0),false ], [String.fromCharCode(105,115,97,99,0),true ], [String.fromCharCode(100,109,97,98,117,102,0),true ]]);
          let linkL = 4.0;
          let show7 = String.fromCharCode(112,114,111,112,111,115,101,114,0);
         iconmoreh /= Math.max((show7 == String.fromCharCode(80,0) ? show7.length : parseInt(`${linkL}`)), 5);
         collectionr = new Map([[`${collectionr.size}`, collectionr.size]]);
         linkL += collectionr.size % (Math.max(2, collectionr.size));
      let shrinkO = bridgem >= 9364328.0;
      do {
         bridgem *= 2;
         if (shrinkO) {
            break;
         }
      } while ((downloadingj.length == 3) && shrinkO);
      for (let g = 0; g < 1; g++) {
         bridgem -= parseInt(`${bridgem}`);
      }
      projectX.push(parseInt(`${bridgem}`) << (Math.min(1, Math.abs(bodanb))));
   for (let d = 0; d < 3; d++) {
      phoneB = `${cricketn.length}`;
   }
   for (let i = 0; i < 1; i++) {
      projectX.push(1 | projectp.length);
   }
      return;
    }

    await dispatch(updateUserAuth(result));

       let vipsport7 = String.fromCharCode(97,100,115,97,114,109,97,115,109,0);
       let incidentX = String.fromCharCode(109,110,99,0);
      while (4 > vipsport7.length && incidentX == String.fromCharCode(55,0)) {
          let nextJ = false;
          let register_vo9: Array<any> = [756, 975, 29];
          let dragl = 4;
          let xvod6: Array<any> = [String.fromCharCode(108,111,99,97,108,105,116,121,0), String.fromCharCode(99,111,110,110,101,99,116,101,100,0)];
          let textY = String.fromCharCode(99,116,120,105,100,120,105,110,99,0);
         incidentX = `${xvod6.length}`;
         nextJ = textY.startsWith(`${dragl}`);
         register_vo9 = [textY.length];
         dragl *= 3;
         xvod6.push(1 >> (Math.min(1, register_vo9.length)));
         break;
      }
         vipsport7 += `${(incidentX == String.fromCharCode(98,0) ? vipsport7.length : incidentX.length)}`;
      for (let s = 0; s < 2; s++) {
         incidentX += `${incidentX.length}`;
      }
          let iconrightorangeM: Array<any> = [625, 179];
          let shootX = String.fromCharCode(112,101,105,114,115,0);
          let tickedb = 2.0;
         vipsport7 = `${shootX.length}`;
         iconrightorangeM = [iconrightorangeM.length];
         shootX = `${iconrightorangeM.length % (Math.max(3, parseInt(`${tickedb}`)))}`;
         tickedb += parseFloat(`${parseInt(`${tickedb}`) - iconrightorangeM.length}`);
      for (let k = 0; k < 3; k++) {
         incidentX = `${incidentX.length ^ vipsport7.length}`;
      }
      if (incidentX.length <= 5) {
         vipsport7 = `${vipsport7.length}`;
      }
      cricketn += `${3 ^ vipsport7.length}`;
      phoneB = `${parseInt(`${paginatione}`)}`;
      projectX.push(parseInt(`${libapminsightbx}`) % 3);
      paginatione += parseInt(`${annerS}`);
   while (!homeactive1.includes(annerS)) {
       let fastI: Array<any> = [739, 26, 285];
       let sigmobv = String.fromCharCode(110,97,116,105,118,101,0);
       let subinr = true;
       let orangex = String.fromCharCode(110,97,108,115,0);
         sigmobv += `${3 + fastI.length}`;
      for (let g = 0; g < 1; g++) {
         orangex = `${orangex.length}`;
      }
      while (sigmobv.includes(`${fastI.length}`)) {
         fastI.push(orangex.length);
         break;
      }
          let flipper5 = String.fromCharCode(109,117,116,97,116,101,0);
         fastI.push(((subinr ? 1 : 3) | flipper5.length));
      let detailW = String.fromCharCode(116,103,50,122,49,97,121,0) == orangex;
      do {
          let pressureR = true;
         orangex += `${fastI.length}`;
         pressureR = !pressureR;
         if (detailW) {
            break;
         }
      } while ((2 >= orangex.length && !subinr) && detailW);
         orangex += `${sigmobv.length ^ 1}`;
          let episodex = String.fromCharCode(100,105,115,99,114,105,109,105,110,97,116,111,114,0);
          let utilsP = 5.0;
          let crownU = true;
         orangex += `${3 >> (Math.min(2, sigmobv.length))}`;
         episodex += `${(2 * (crownU ? 5 : 4))}`;
         utilsP += parseFloat(`${parseInt(`${utilsP}`)}`);
         crownU = !crownU;
      let pathx = sigmobv.length >= 6517403;
      do {
         sigmobv += `${(String.fromCharCode(99,0) == orangex ? orangex.length : fastI.length)}`;
         if (pathx) {
            break;
         }
      } while (pathx && ((sigmobv.length ^ 2) == 3));
          let encryptA = String.fromCharCode(119,101,98,112,0);
         orangex += `${(encryptA == String.fromCharCode(121,0) ? fastI.length : encryptA.length)}`;
       let audiencea = 5.0;
         sigmobv += `${(parseInt(`${audiencea}`) & (subinr ? 4 : 2))}`;
         audiencea /= Math.max(2, 2 | parseInt(`${audiencea}`));
      annerS /= Math.max(2 / (Math.max(parseInt(`${libapminsightbx}`), 7)), 5);
      break;
   }
   while ((auto_1E.length + modeS.length) < 4 || (modeS.length + auto_1E.length) < 4) {
      modeS = [auto_1E.length];
      break;
   }
       let predictionbannerX = 0.0;
       let elementsv = 2.0;
       let imagenetworkerrC = 0;
         imagenetworkerrC += parseInt(`${elementsv}`);
      for (let n = 0; n < 2; n++) {
          let eventg = String.fromCharCode(114,101,109,97,112,112,105,110,103,0);
         imagenetworkerrC %= Math.max(eventg.length, 3);
      }
         imagenetworkerrC -= parseInt(`${elementsv}`);
      let currentO = 5968878 >= imagenetworkerrC;
      do {
         imagenetworkerrC ^= imagenetworkerrC;
         if (currentO) {
            break;
         }
      } while (currentO && ((4.71 + elementsv) == 5.32 || (2 * imagenetworkerrC) == 3));
         elementsv -= parseInt(`${elementsv}`);
          let applicationT = String.fromCharCode(115,105,103,110,97,98,108,101,0);
         predictionbannerX /= Math.max(parseFloat(`${2}`), 2);
         applicationT += `${applicationT.length & applicationT.length}`;
      for (let h = 0; h < 2; h++) {
         predictionbannerX -= parseFloat(`${3 << (Math.min(Math.abs(parseInt(`${elementsv}`)), 3))}`);
      }
          let floating8 = String.fromCharCode(115,116,114,107,0);
          let hongkongD = 3.0;
          let favoriteW = String.fromCharCode(114,111,119,0);
         elementsv += favoriteW.length;
         floating8 += `${(String.fromCharCode(108,0) == floating8 ? parseInt(`${hongkongD}`) : floating8.length)}`;
         hongkongD += parseFloat(`${parseInt(`${hongkongD}`) | 1}`);
         favoriteW = `${3 | parseInt(`${hongkongD}`)}`;
      if (2 < (2 << (Math.min(1, Math.abs(imagenetworkerrC))))) {
         predictionbannerX -= parseFloat(`${parseInt(`${elementsv}`) / (Math.max(10, imagenetworkerrC))}`);
      }
      annerS /= Math.max(5, (cricketn == String.fromCharCode(100,0) ? cricketn.length : homeactive1.length));
    return;
  };

  const checkConnection = async () => {
       let graphR = String.fromCharCode(115,122,97,98,111,115,0);
    let pressure0 = 2;
    let libswscaleY: Map<any, any> = new Map([[String.fromCharCode(111,115,100,101,112,0),606], [String.fromCharCode(114,97,115,116,101,114,105,122,97,116,105,111,110,0),163], [String.fromCharCode(109,101,115,111,110,0),631]]);
    let thumbnailY = String.fromCharCode(115,116,114,99,97,115,101,99,109,112,0);
    let predictionbutton3: Map<any, any> = new Map([[String.fromCharCode(98,101,116,104,115,111,102,116,118,105,100,0),String.fromCharCode(104,97,110,100,108,101,100,0)], [String.fromCharCode(112,117,114,101,0),String.fromCharCode(105,110,118,111,99,97,116,105,111,110,115,0)], [String.fromCharCode(121,109,101,110,99,0),String.fromCharCode(117,110,115,99,97,108,101,100,0)]]);
    let libreanimatedc = 5.0;
    let utilsJ = true;
    let countdown4: Map<any, any> = new Map([[String.fromCharCode(97,100,116,115,0),230], [String.fromCharCode(104,97,112,116,105,99,0),220], [String.fromCharCode(115,97,118,101,112,111,105,110,116,115,0),34]]);
    let sharewhiteX = true;
    let dependenciesc: Array<any> = [678, 929];
    let bottomz: Map<any, any> = new Map([[String.fromCharCode(100,105,109,115,0),74], [String.fromCharCode(114,101,118,111,99,97,116,105,111,110,0),495], [String.fromCharCode(115,121,115,99,116,108,0),461]]);
    let blackB = String.fromCharCode(99,97,110,99,101,108,108,101,100,0);
    let libyogaq = String.fromCharCode(114,101,115,101,114,118,101,0);
    let step3 = String.fromCharCode(116,114,101,102,0);
    let sliderr: Map<any, any> = new Map([[String.fromCharCode(100,112,97,103,101,0),957], [String.fromCharCode(97,108,108,111,119,105,0),97], [String.fromCharCode(105,110,105,116,105,97,108,105,122,101,114,115,0),172]]);
    let reminderi = false;
    let modulex = String.fromCharCode(109,101,97,115,117,114,105,110,103,0);
    let showd = 5;
   while ((1 + dependenciesc.length) > 4) {
      thumbnailY = `${countdown4.size}`;
      break;
   }
   let catagoryI = 8444229 >= dependenciesc.length;
   do {
       let chinasameL: Map<any, any> = new Map([[String.fromCharCode(115,112,111,116,0),744], [String.fromCharCode(117,110,109,97,112,102,105,108,101,0),762]]);
       let friendsY: Array<any> = [26, 783, 576];
       let modulesX = String.fromCharCode(114,100,99,111,115,116,0);
       let predictionbannerc = 3;
          let stringB = 1.0;
          let shoot6 = 3.0;
         modulesX = `${chinasameL.size - 3}`;
         stringB /= Math.max(5, parseFloat(`${parseInt(`${stringB}`) & parseInt(`${shoot6}`)}`));
         shoot6 *= parseFloat(`${parseInt(`${stringB}`)}`);
      if ((chinasameL.size % 3) < 2 || 3 < (friendsY.length % (Math.max(8, chinasameL.size)))) {
          let libfollyH = String.fromCharCode(116,111,110,0);
         friendsY = [2];
         libfollyH += `${libfollyH.length % 1}`;
      }
         friendsY.push(chinasameL.size * predictionbannerc);
      for (let d = 0; d < 1; d++) {
         modulesX = `${1 | chinasameL.size}`;
      }
          let reactnativeultimatelistviewu = false;
          let greytickd = String.fromCharCode(115,116,114,101,97,109,105,110,102,111,0);
          let nativemoduleF = 1;
         predictionbannerc |= (nativemoduleF & (reactnativeultimatelistviewu ? 2 : 4));
         reactnativeultimatelistviewu = greytickd == greytickd;
       let robotoA = 1;
         predictionbannerc |= robotoA << (Math.min(Math.abs(2), 5));
         chinasameL = new Map([[`${friendsY.length}`, 1]]);
      if ((1 | friendsY.length) <= 1) {
         predictionbannerc *= predictionbannerc;
      }
          let champion8 = String.fromCharCode(114,101,116,97,105,110,101,100,0);
          let updatesu: Array<any> = [963, 247, 939];
         chinasameL = new Map([[`${friendsY.length}`, 2]]);
         champion8 = `${1 & champion8.length}`;
         updatesu.push(champion8.length);
         predictionbannerc -= (modulesX == String.fromCharCode(98,0) ? modulesX.length : robotoA);
       let libjsijniprofilerS: Array<any> = [29, 598, 48];
      dependenciesc = [3];
      if (catagoryI) {
         break;
      }
   } while (catagoryI && (!Array.from(bottomz.keys()).includes(`${dependenciesc.length}`)));
      utilsJ = countdown4.size == 98 && 1.35 == libreanimatedc;
   while (4.16 <= (libreanimatedc + 4.29) && (4 + countdown4.size) <= 2) {
      libreanimatedc /= Math.max(1, ((utilsJ ? 5 : 2) - 3));
      break;
   }
   for (let v = 0; v < 2; v++) {
      countdown4 = new Map([[`${bottomz.size}`, thumbnailY.length + 1]]);
   }
   let internetS = blackB == String.fromCharCode(54,113,50,0);
   do {
      blackB += `${((sharewhiteX ? 1 : 1))}`;
      if (internetS) {
         break;
      }
   } while (internetS && (thumbnailY == String.fromCharCode(80,0)));
   if ((countdown4.size % 4) > 3) {
      dependenciesc = [dependenciesc.length];
   }
   while ((libswscaleY.size % 2) >= 4 || 2 >= (2 % (Math.max(6, thumbnailY.length)))) {
       let scrollviewq = 3.0;
       let memberl = 1.0;
       let iconarrowleft7 = 2;
          let libapminsightb4 = true;
          let activityk = String.fromCharCode(99,108,97,117,115,101,0);
         memberl /= Math.max(5, parseFloat(`${parseInt(`${scrollviewq}`) % 1}`));
         libapminsightb4 = activityk.length > 77 && libapminsightb4;
         activityk = "3";
      let valuesN = iconarrowleft7 >= 7147347;
      do {
         iconarrowleft7 %= Math.max(5, parseInt(`${scrollviewq}`) - 1);
         if (valuesN) {
            break;
         }
      } while (valuesN && (3.64 >= (4.90 * memberl) || (iconarrowleft7 >> (Math.min(Math.abs(1), 1))) >= 2));
          let groupQ = false;
          let basketballawayteamf = String.fromCharCode(98,101,103,105,110,115,0);
          let librrcO = String.fromCharCode(100,99,98,108,111,99,107,0);
         memberl += parseFloat(`${2 + iconarrowleft7}`);
         groupQ = basketballawayteamf.length == librrcO.length;
         basketballawayteamf = "2";
         librrcO = `${(librrcO == String.fromCharCode(75,0) ? basketballawayteamf.length : librrcO.length)}`;
      let mbnativeadvancedt = scrollviewq >= 7979650.0;
      do {
          let mathR = 5;
          let forms = 3.0;
          let overg = String.fromCharCode(100,110,120,104,100,100,97,116,97,0);
          let iconqqS = false;
          let countdownX: Array<any> = [457, 999, 283];
         scrollviewq *= parseFloat(`${mathR + 1}`);
         mathR += 1;
         forms *= parseFloat(`${countdownX.length}`);
         overg = `${(parseInt(`${forms}`) * (iconqqS ? 1 : 2))}`;
         countdownX = [2 + overg.length];
         if (mbnativeadvancedt) {
            break;
         }
      } while (mbnativeadvancedt && ((scrollviewq / 1.84) > 5.88));
      let blacklistt = 7824518.0 <= memberl;
      do {
         memberl -= parseFloat(`${3}`);
         if (blacklistt) {
            break;
         }
      } while (blacklistt && ((memberl * 1.22) <= 5.73));
      if (5.49 <= (parseFloat(`${iconarrowleft7}`) * memberl) && (5.49 * memberl) <= 4.48) {
         iconarrowleft7 %= Math.max(parseInt(`${scrollviewq}`), 3);
      }
       let bottomo: Map<any, any> = new Map([[String.fromCharCode(116,119,111,0),false ], [String.fromCharCode(114,101,99,112,0),true ], [String.fromCharCode(100,117,114,97,116,105,111,110,0),true ]]);
       let bodanm: Map<any, any> = new Map([[String.fromCharCode(100,105,115,112,108,97,99,101,109,101,110,116,0),989], [String.fromCharCode(100,101,99,111,109,112,114,101,115,115,101,100,0),775], [String.fromCharCode(111,118,101,114,118,105,101,119,0),544]]);
      for (let t = 0; t < 1; t++) {
         iconarrowleft7 ^= 2;
      }
      for (let b = 0; b < 1; b++) {
         scrollviewq += parseFloat(`${bottomo.size}`);
      }
      thumbnailY += `${(String.fromCharCode(98,0) == graphR ? (sharewhiteX ? 3 : 4) : graphR.length)}`;
      break;
   }

    const state = await NetInfo.fetch();

       let math1 = String.fromCharCode(102,105,110,97,108,105,122,105,110,103,0);
       let bgvipsport8 = 2;
       let yellowscoreballn = 5.0;
      if (math1.length >= 4) {
         yellowscoreballn /= Math.max(math1.length % 2, 2);
      }
          let trashz: Map<any, any> = new Map([[String.fromCharCode(116,117,114,98,117,108,101,110,99,101,0),481], [String.fromCharCode(111,114,100,101,114,116,121,112,101,0),206], [String.fromCharCode(100,105,97,103,110,111,115,116,105,99,0),902]]);
          let activeG: Map<any, any> = new Map([[String.fromCharCode(105,102,111,114,119,97,114,100,0),132], [String.fromCharCode(108,111,99,107,110,101,115,115,0),788]]);
          let fieldo = String.fromCharCode(98,105,116,100,101,112,116,104,0);
         math1 += `${trashz.size}`;
         trashz = new Map([[`${activeG.size}`, 3 << (Math.min(3, Math.abs(activeG.size)))]]);
         fieldo = `${fieldo.length + 1}`;
          let megaphones: Map<any, any> = new Map([[String.fromCharCode(112,111,111,108,0),619], [String.fromCharCode(117,110,102,105,108,116,101,114,101,100,0),768], [String.fromCharCode(117,110,114,101,115,101,114,118,101,100,0),430]]);
          let b_viewd = false;
          let mutedm = String.fromCharCode(99,111,108,111,114,107,101,121,0);
         bgvipsport8 <<= Math.min(Math.abs(parseInt(`${yellowscoreballn}`) & 1), 2);
         megaphones.set(mutedm, 2 - mutedm.length);
         b_viewd = megaphones.size == 75;
         bgvipsport8 &= parseInt(`${yellowscoreballn}`) - 2;
      for (let r = 0; r < 2; r++) {
          let applicationD = String.fromCharCode(101,95,49,55,95,116,104,101,110,0);
          let buttonW = String.fromCharCode(102,114,101,113,98,97,114,107,0);
          let castP = String.fromCharCode(112,114,111,100,117,99,116,102,0);
          let libavcodeck = 2.0;
          let redscoreballc = 2.0;
         bgvipsport8 += castP.length + parseInt(`${yellowscoreballn}`);
         applicationD = "3";
         buttonW += `${buttonW.length >> (Math.min(Math.abs(3), 3))}`;
         castP = `${2 % (Math.max(8, parseInt(`${libavcodeck}`)))}`;
         libavcodeck -= parseInt(`${redscoreballc}`);
         redscoreballc += (String.fromCharCode(50,0) == applicationD ? parseInt(`${libavcodeck}`) : applicationD.length);
      }
          let stationst: Map<any, any> = new Map([[String.fromCharCode(99,111,117,110,116,101,100,0),true ], [String.fromCharCode(115,116,114,117,99,116,0),true ], [String.fromCharCode(120,99,101,112,116,105,111,110,0),false ]]);
          let predictionU = 0;
          let plusy = String.fromCharCode(112,117,98,101,120,112,0);
         yellowscoreballn *= parseInt(`${yellowscoreballn}`);
         stationst = new Map([[`${stationst.size}`, stationst.size ^ 2]]);
         predictionU %= Math.max(3 >> (Math.min(4, Math.abs(predictionU))), 5);
         plusy = `${(String.fromCharCode(119,0) == plusy ? stationst.size : plusy.length)}`;
          let executorm = true;
         yellowscoreballn -= bgvipsport8 * 1;
         executorm = (executorm ? executorm : executorm);
      while (!math1.startsWith(`${bgvipsport8}`)) {
         math1 = `${3 / (Math.max(8, math1.length))}`;
         break;
      }
       let condensed1 = 4.0;
       let downarrowE = 5.0;
      sharewhiteX = 76 >= pressure0 || 76 >= bgvipsport8;
   for (let m = 0; m < 2; m++) {
      dependenciesc.push(blackB.length);
   }
   if (!graphR.startsWith(`${utilsJ}`)) {
      graphR = "3";
   }
   for (let t = 0; t < 1; t++) {
       let telegrams = String.fromCharCode(99,106,112,101,103,0);
       let libglogi = String.fromCharCode(115,117,98,100,105,118,105,115,105,111,110,0);
       let bootW = String.fromCharCode(100,101,110,111,105,115,101,0);
       let mbjscommonz = String.fromCharCode(102,97,110,111,117,116,0);
       let halffieldimagec: Map<any, any> = new Map([[String.fromCharCode(97,99,101,110,99,0),String.fromCharCode(98,105,116,114,118,0)], [String.fromCharCode(106,111,121,102,117,108,0),String.fromCharCode(97,105,114,105,110,103,0)], [String.fromCharCode(118,105,98,114,97,110,99,101,0),String.fromCharCode(97,103,103,114,101,103,97,116,101,0)]]);
          let editM = 2;
         mbjscommonz = `${bootW.length / (Math.max(7, telegrams.length))}`;
         editM <<= Math.min(3, Math.abs(editM * 2));
          let d_manager2: Array<any> = [883, 526, 802];
          let eighteenW: Array<any> = [5, 56, 879];
          let dialogx = String.fromCharCode(117,110,109,97,110,97,103,101,100,0);
         mbjscommonz += `${2 * halffieldimagec.size}`;
         d_manager2 = [eighteenW.length];
         eighteenW = [2 << (Math.min(2, eighteenW.length))];
         dialogx += "2";
      let hoveri = 9352913 >= libglogi.length;
      do {
         libglogi = `${(telegrams == String.fromCharCode(110,0) ? halffieldimagec.size : telegrams.length)}`;
         if (hoveri) {
            break;
         }
      } while (hoveri && (2 > libglogi.length));
          let reactnativeultimatelistviewh: Map<any, any> = new Map([[String.fromCharCode(105,116,101,114,97,116,101,0),true ], [String.fromCharCode(98,105,116,109,97,115,107,0),false ]]);
         halffieldimagec.set(bootW, telegrams.length - 1);
         reactnativeultimatelistviewh.set(`${reactnativeultimatelistviewh.size}`, reactnativeultimatelistviewh.size * reactnativeultimatelistviewh.size);
         bootW += `${(bootW == String.fromCharCode(75,0) ? telegrams.length : bootW.length)}`;
         bootW += `${mbjscommonz.length << (Math.min(Math.abs(3), 4))}`;
       let p_unlockb = String.fromCharCode(116,104,114,111,116,116,108,101,100,0);
       let tempnodata3 = String.fromCharCode(97,99,99,101,108,101,114,97,116,101,100,0);
      for (let j = 0; j < 1; j++) {
          let next0 = String.fromCharCode(101,118,101,114,121,98,111,100,121,0);
          let zoomE = String.fromCharCode(97,117,116,111,98,97,110,104,0);
         libglogi += `${halffieldimagec.size >> (Math.min(next0.length, 2))}`;
         next0 = `${2 << (Math.min(1, zoomE.length))}`;
         zoomE = "3";
      }
      while (bootW.length < 1) {
          let producty = true;
          let navigation_ = 1.0;
          let relatede = 1.0;
          let reactK: Map<any, any> = new Map([[String.fromCharCode(101,114,112,105,99,0),685], [String.fromCharCode(109,105,110,105,109,97,0),173], [String.fromCharCode(97,115,99,101,110,100,105,110,103,0),284]]);
          let arrowrightwithtail7 = false;
         mbjscommonz += `${mbjscommonz.length >> (Math.min(Math.abs(3), 5))}`;
         producty = 37.95 == navigation_;
         navigation_ *= 3 % (Math.max(parseInt(`${relatede}`), 10));
         relatede /= Math.max(3, 1);
         reactK.set(`${navigation_}`, 1);
         arrowrightwithtail7 = reactK.get(`${arrowrightwithtail7}`) != null;
         break;
      }
      while (libglogi.length <= 1) {
         libglogi += `${(String.fromCharCode(68,0) == tempnodata3 ? telegrams.length : tempnodata3.length)}`;
         break;
      }
      while (bootW.endsWith(`${halffieldimagec.size}`)) {
          let turn_ = 0.0;
         halffieldimagec = new Map([[mbjscommonz, (tempnodata3 == String.fromCharCode(108,0) ? mbjscommonz.length : tempnodata3.length)]]);
         turn_ += parseInt(`${turn_}`) / (Math.max(9, parseInt(`${turn_}`)));
         break;
      }
         libglogi += "2";
          let iconfeedback0 = 4;
          let twittery = 2;
         mbjscommonz = `${telegrams.length >> (Math.min(Math.abs(1), 5))}`;
         iconfeedback0 %= Math.max(5, 3);
         twittery /= Math.max(1, 1);
      let modityC = telegrams == String.fromCharCode(49,53,57,0);
      do {
         telegrams = `${p_unlockb.length + tempnodata3.length}`;
         if (modityC) {
            break;
         }
      } while ((p_unlockb != String.fromCharCode(66,0)) && modityC);
       let iconclosewhiteR = 4.0;
       let humidityE = 0.0;
      blackB = "3";
   }
      thumbnailY = `${((reminderi ? 2 : 4) - (sharewhiteX ? 5 : 2))}`;
   if (!graphR.includes(`${predictionbutton3.size}`)) {
      graphR += `${blackB.length}`;
   }
       let mbnativeadvanced_: Array<any> = [834, 25, 15];
      while (5 <= mbnativeadvanced_.length) {
         mbnativeadvanced_ = [1 | mbnativeadvanced_.length];
         break;
      }
         mbnativeadvanced_ = [mbnativeadvanced_.length % 3];
      while (mbnativeadvanced_.includes(mbnativeadvanced_.length)) {
         mbnativeadvanced_.push(mbnativeadvanced_.length);
         break;
      }
      utilsJ = (graphR.length - pressure0) == 38;
       let defaultteamk = String.fromCharCode(97,117,116,111,102,105,108,108,0);
       let libcxxcomponentsm = String.fromCharCode(116,101,115,118,101,114,116,0);
      while (!libcxxcomponentsm.startsWith(`${defaultteamk.length}`)) {
          let baseu = 3.0;
          let scoreS: Array<any> = [235, 894, 242];
         libcxxcomponentsm += `${scoreS.length & 3}`;
         baseu *= 2;
         scoreS.push(parseInt(`${baseu}`) * parseInt(`${baseu}`));
         break;
      }
      let bgvipxvodk = libcxxcomponentsm.length >= 6260876;
      do {
          let progressE = String.fromCharCode(105,110,108,101,110,0);
          let statistics7: Array<any> = [String.fromCharCode(98,108,97,107,101,98,0), String.fromCharCode(112,114,101,108,111,97,100,0), String.fromCharCode(113,112,113,115,99,97,108,101,0)];
          let handlerr = String.fromCharCode(104,97,114,100,116,104,114,101,115,104,0);
          let gifgoalG = String.fromCharCode(97,115,101,108,101,99,116,0);
          let carouselx = 1.0;
         libcxxcomponentsm = `${statistics7.length}`;
         progressE += `${parseInt(`${carouselx}`)}`;
         statistics7 = [progressE.length];
         handlerr += `${(gifgoalG == String.fromCharCode(112,0) ? gifgoalG.length : parseInt(`${carouselx}`))}`;
         if (bgvipxvodk) {
            break;
         }
      } while ((libcxxcomponentsm == String.fromCharCode(54,0) || defaultteamk == String.fromCharCode(87,0)) && bgvipxvodk);
         defaultteamk += `${defaultteamk.length * libcxxcomponentsm.length}`;
      for (let g = 0; g < 3; g++) {
         libcxxcomponentsm += `${(String.fromCharCode(98,0) == defaultteamk ? libcxxcomponentsm.length : defaultteamk.length)}`;
      }
          let tickedu = 3.0;
         libcxxcomponentsm = `${parseInt(`${tickedu}`) << (Math.min(libcxxcomponentsm.length, 1))}`;
          let configl = String.fromCharCode(116,120,104,97,115,104,0);
          let c_managero = String.fromCharCode(107,109,118,99,0);
          let exampleimageI = String.fromCharCode(105,105,110,116,0);
         defaultteamk = `${defaultteamk.length}`;
         configl = `${c_managero.length}`;
         c_managero = `${configl.length ^ 2}`;
         exampleimageI += `${(String.fromCharCode(109,0) == configl ? configl.length : c_managero.length)}`;
      countdown4.set(`${sharewhiteX}`, 2 ^ libyogaq.length);
    const offline = !(state.isConnected && state.isInternetReachable);

      predictionbutton3 = new Map([[`${countdown4.size}`, countdown4.size]]);
   let embed8 = String.fromCharCode(95,50,97,99,0) == libyogaq;
   do {
      libyogaq += `${pressure0}`;
      if (embed8) {
         break;
      }
   } while (embed8 && (4 >= step3.length && 4 >= libyogaq.length));
   if (!utilsJ) {
      utilsJ = predictionbutton3.size < 21 || 55.40 < libreanimatedc;
   }
   while (!sharewhiteX) {
       let modelg = true;
       let predictionbannersharedx: Array<any> = [680, 413];
       let m_positionh = 3.0;
       let umengN = 0;
       let basketballmatchdetailbgu: Array<any> = [378, 567, 406];
          let sorti: Map<any, any> = new Map([[String.fromCharCode(100,97,121,0),String.fromCharCode(114,101,116,97,105,110,0)], [String.fromCharCode(115,105,109,117,108,97,116,101,0),String.fromCharCode(99,100,120,108,0)]]);
          let viewsC = false;
          let reactnativeratingse: Map<any, any> = new Map([[String.fromCharCode(119,97,115,0),String.fromCharCode(108,111,99,108,0)], [String.fromCharCode(102,111,117,110,100,0),String.fromCharCode(100,105,114,101,99,116,111,114,121,0)]]);
         basketballmatchdetailbgu = [3 * basketballmatchdetailbgu.length];
         sorti = new Map([[`${sorti.size}`, sorti.size]]);
         viewsC = null == reactnativeratingse.get(`${viewsC}`);
         reactnativeratingse.set(`${viewsC}`, (3 / (Math.max(9, (viewsC ? 1 : 5)))));
          let binddatasl = 3.0;
         m_positionh *= umengN * 1;
         binddatasl *= parseInt(`${binddatasl}`) % 3;
         basketballmatchdetailbgu.push(1);
         predictionbannersharedx = [predictionbannersharedx.length + 3];
         m_positionh /= Math.max(parseInt(`${m_positionh}`), 3);
         predictionbannersharedx = [umengN / (Math.max(10, basketballmatchdetailbgu.length))];
      for (let u = 0; u < 2; u++) {
         basketballmatchdetailbgu = [1 >> (Math.min(Math.abs(parseInt(`${m_positionh}`)), 1))];
      }
          let unread5 = 2.0;
          let penaltya = String.fromCharCode(100,101,98,97,110,100,0);
          let description_3Q = false;
         m_positionh /= Math.max(1, ((modelg ? 1 : 5) ^ 3));
         unread5 *= penaltya.length;
         penaltya = `${penaltya.length & parseInt(`${unread5}`)}`;
         description_3Q = unread5 <= 33.11;
         umengN /= Math.max(2, predictionbannersharedx.length & parseInt(`${m_positionh}`));
      while ((umengN / (Math.max(3, m_positionh))) < 3.93) {
         m_positionh /= Math.max(4, 1);
         break;
      }
      let robotoF = basketballmatchdetailbgu.length <= 5922138;
      do {
         basketballmatchdetailbgu = [((modelg ? 5 : 1) ^ parseInt(`${m_positionh}`))];
         if (robotoF) {
            break;
         }
      } while ((3 == basketballmatchdetailbgu.length) && robotoF);
      if ((umengN << (Math.min(Math.abs(4), 2))) > 1) {
          let dangero = String.fromCharCode(112,97,103,101,115,105,122,101,0);
          let sourcer = true;
          let signinupY = String.fromCharCode(105,110,105,116,105,97,108,105,122,101,114,0);
         umengN *= predictionbannersharedx.length;
         dangero = `${(dangero == String.fromCharCode(95,0) ? (sourcer ? 1 : 1) : dangero.length)}`;
         sourcer = (((sourcer ? dangero.length : 28) & dangero.length) <= 28);
         signinupY = "1";
      }
      let securityR = 6508604 >= predictionbannersharedx.length;
      do {
         predictionbannersharedx = [1 | parseInt(`${m_positionh}`)];
         if (securityR) {
            break;
         }
      } while ((modelg) && securityR);
      let nalyticsP = m_positionh <= 5896057.0;
      do {
         m_positionh *= 2 ^ umengN;
         if (nalyticsP) {
            break;
         }
      } while ((1 >= predictionbannersharedx.length) && nalyticsP);
       let hoverS = 0.0;
       let libfbs = 2.0;
      sharewhiteX = 42 > umengN && modelg;
      break;
   }
   while ((5 * countdown4.size) > 4) {
      pressure0 /= Math.max(2, blackB.length + pressure0);
      break;
   }
       let clockr: Map<any, any> = new Map([[String.fromCharCode(112,108,117,115,0),318], [String.fromCharCode(99,97,118,112,0),655], [String.fromCharCode(99,111,118,97,108,101,110,116,0),552]]);
       let largesoundH: Map<any, any> = new Map([[String.fromCharCode(100,101,116,101,114,109,105,110,101,0),String.fromCharCode(100,100,116,115,0)], [String.fromCharCode(122,111,111,109,0),String.fromCharCode(104,101,97,100,108,105,110,101,0)]]);
       let telegramk: Array<any> = [387, 179, 406];
      if (4 > (telegramk.length & 3) || (telegramk.length & 3) > 3) {
          let embed2 = String.fromCharCode(116,104,105,114,116,121,0);
          let albumS = 3.0;
          let icontransferclube = String.fromCharCode(115,116,111,114,97,103,101,115,0);
         clockr.set(embed2, embed2.length / (Math.max(9, telegramk.length)));
         albumS /= Math.max(1, parseInt(`${albumS}`) >> (Math.min(Math.abs(1), 4)));
         icontransferclube = `${(icontransferclube == String.fromCharCode(50,0) ? icontransferclube.length : parseInt(`${albumS}`))}`;
      }
      while (clockr.get(`${largesoundH.size}`) == null) {
          let overlayw: Map<any, any> = new Map([[String.fromCharCode(102,102,112,114,111,98,101,0),790], [String.fromCharCode(102,97,118,101,0),630], [String.fromCharCode(108,105,110,117,120,0),480]]);
          let loginT = String.fromCharCode(119,105,110,100,105,110,103,0);
          let fullscreenminV: Map<any, any> = new Map([[String.fromCharCode(110,105,103,104,116,0),830], [String.fromCharCode(116,114,97,100,105,116,105,111,110,97,108,0),910], [String.fromCharCode(115,112,97,99,101,0),912]]);
         clockr = new Map([[`${fullscreenminV.size}`, loginT.length / 1]]);
         overlayw = new Map([[`${overlayw.size}`, overlayw.size]]);
         loginT = `${overlayw.size << (Math.min(Math.abs(1), 3))}`;
         break;
      }
       let libflipperl = String.fromCharCode(98,111,110,100,0);
         largesoundH = new Map([[`${largesoundH.size}`, 3 | libflipperl.length]]);
         largesoundH = new Map([[`${clockr.size}`, 1]]);
       let filedx = 2.0;
       let basketballiconU = 0.0;
      if (1 == (parseInt(`${basketballiconU}`) * libflipperl.length)) {
         libflipperl += `${libflipperl.length | 1}`;
      }
      let single4 = 7759551 >= libflipperl.length;
      do {
          let logoutl = 3.0;
          let defaultfootballbg7 = 1.0;
         libflipperl = `${1 * parseInt(`${defaultfootballbg7}`)}`;
         logoutl += parseFloat(`${parseInt(`${logoutl}`)}`);
         defaultfootballbg7 -= parseInt(`${logoutl}`) | parseInt(`${logoutl}`);
         if (single4) {
            break;
         }
      } while (single4 && ((libflipperl.length + 1) <= 2 || (1 + telegramk.length) <= 3));
         filedx -= parseFloat(`${parseInt(`${basketballiconU}`)}`);
      pressure0 *= (String.fromCharCode(102,0) == modulex ? largesoundH.size : modulex.length);
   if (3 > thumbnailY.length || !reminderi) {
       let active_ = String.fromCharCode(108,105,112,98,111,97,114,100,0);
       let encryptc = String.fromCharCode(99,111,110,116,105,103,117,111,117,115,0);
       let long_l4n = 1.0;
       let roundP = 5.0;
         encryptc = `${active_.length ^ encryptc.length}`;
      while (long_l4n > roundP) {
         long_l4n += parseInt(`${long_l4n}`);
         break;
      }
      if ((active_.length ^ 4) < 5 || (active_.length + long_l4n) < 3.8) {
         active_ += `${3 + parseInt(`${long_l4n}`)}`;
      }
      for (let t = 0; t < 1; t++) {
          let zhubo0 = false;
          let headerW = 0.0;
          let unreadw: Array<any> = [645, 865, 664];
          let libyoga2: Map<any, any> = new Map([[String.fromCharCode(99,97,109,101,114,97,0),848], [String.fromCharCode(121,117,118,109,111,110,111,0),177]]);
          let sigmobh = String.fromCharCode(103,112,109,100,0);
         long_l4n += parseInt(`${roundP}`) / (Math.max(parseInt(`${headerW}`), 4));
         zhubo0 = unreadw.length >= 55;
         headerW -= 3;
         unreadw.push((2 - (zhubo0 ? 5 : 3)));
         libyoga2 = new Map([[`${zhubo0}`, 3 - sigmobh.length]]);
         sigmobh = `${sigmobh.length}`;
      }
         encryptc = `${active_.length}`;
      if (encryptc.startsWith(`${roundP}`)) {
         roundP *= (active_ == String.fromCharCode(72,0) ? active_.length : parseInt(`${roundP}`));
      }
          let crown9 = String.fromCharCode(105,116,101,114,97,116,105,111,110,0);
          let penaltyshootnogoalz = String.fromCharCode(115,97,109,112,0);
         encryptc += `${penaltyshootnogoalz.length % 2}`;
         crown9 += `${crown9.length * crown9.length}`;
         penaltyshootnogoalz += `${crown9.length / (Math.max(2, 10))}`;
         encryptc += `${encryptc.length}`;
      let iconlogouti = 9740794.0 <= long_l4n;
      do {
         long_l4n *= encryptc.length ^ 1;
         if (iconlogouti) {
            break;
         }
      } while (iconlogouti && (encryptc.includes(`${long_l4n}`)));
       let colorsW = 3;
       let downloadere = 2;
      let icontransferclubO = long_l4n >= 6280137.0;
      do {
          let short_uvk = 3.0;
          let clearL = String.fromCharCode(105,110,116,101,110,116,0);
          let bottomX = 2.0;
          let libapminsightbt: Map<any, any> = new Map([[String.fromCharCode(115,101,99,117,114,101,0),true ], [String.fromCharCode(99,111,108,111,99,97,116,101,100,0),true ]]);
         long_l4n += parseInt(`${roundP}`) << (Math.min(2, Math.abs(parseInt(`${short_uvk}`))));
         short_uvk *= parseInt(`${bottomX}`);
         clearL += `${libapminsightbt.size}`;
         bottomX *= parseFloat(`${clearL.length}`);
         libapminsightbt.set(`${bottomX}`, libapminsightbt.size);
         if (icontransferclubO) {
            break;
         }
      } while ((active_.endsWith(`${long_l4n}`)) && icontransferclubO);
      let splashr = encryptc.length <= 6916602;
      do {
         encryptc = `${active_.length >> (Math.min(Math.abs(2), 2))}`;
         if (splashr) {
            break;
         }
      } while (splashr && (encryptc.length >= downloadere));
      reminderi = bottomz.size == parseInt(`${long_l4n}`);
   }
   while (blackB == modulex) {
      modulex = `${sliderr.size / (Math.max(3, 7))}`;
      break;
   }
    setIsOffline(offline);

      predictionbutton3.set(`${reminderi}`, 2);
       let reactnativejsu = String.fromCharCode(99,111,110,110,105,110,112,117,116,0);
         reactnativejsu = "2";
         reactnativejsu = `${reactnativejsu.length & reactnativejsu.length}`;
      while (reactnativejsu.length < 3) {
         reactnativejsu += `${3 * reactnativejsu.length}`;
         break;
      }
      modulex += `${predictionbutton3.size}`;
       let libreanimatede = String.fromCharCode(100,97,114,107,0);
       let launcherU = String.fromCharCode(109,111,122,106,112,101,103,0);
       let libreactnativeblobr = String.fromCharCode(109,101,109,115,104,105,112,0);
         libreanimatede = `${2 | launcherU.length}`;
       let servicee = String.fromCharCode(111,112,116,105,109,117,109,0);
      thumbnailY = `${(step3.length >> (Math.min(2, Math.abs((utilsJ ? 2 : 5)))))}`;
   let specc = 6132272.0 >= libreanimatedc;
   do {
       let areaH = 4.0;
       let leagued = true;
       let backgroundQ = String.fromCharCode(97,110,103,101,0);
       let vertical6 = String.fromCharCode(102,105,110,105,115,101,100,0);
         backgroundQ = "1";
          let condensedj = String.fromCharCode(99,111,110,118,101,114,116,101,100,0);
          let googleO: Array<any> = [363, 16, 372];
         areaH *= vertical6.length;
         condensedj += `${condensedj.length}`;
         googleO = [2 | googleO.length];
      let spinnerk = leagued ? !leagued : leagued;
      do {
         leagued = backgroundQ.length > areaH;
         if (spinnerk) {
            break;
         }
      } while (spinnerk && (1.45 == areaH));
          let giftP: Array<any> = [462, 526, 231];
          let foundn: Array<any> = [String.fromCharCode(97,100,103,114,111,117,112,0), String.fromCharCode(114,101,116,114,97,110,115,109,105,116,0), String.fromCharCode(109,111,118,101,100,0)];
         vertical6 += `${(backgroundQ == String.fromCharCode(85,0) ? backgroundQ.length : vertical6.length)}`;
         giftP.push(1);
         foundn.push(giftP.length * 2);
         vertical6 = `${((leagued ? 3 : 2) & 2)}`;
      libreanimatedc /= Math.max(sliderr.size, 4);
      if (specc) {
         break;
      }
   } while ((libyogaq.length > 4) && specc);
      predictionbutton3 = new Map([[`${libswscaleY.size}`, pressure0]]);
   if ((libswscaleY.size ^ thumbnailY.length) >= 5 && 1 >= (libswscaleY.size ^ 5)) {
      thumbnailY = `${(String.fromCharCode(97,0) == blackB ? countdown4.size : blackB.length)}`;
   }
       let release_5pf = String.fromCharCode(111,108,100,0);
       let uploadm = 4;
      for (let p = 0; p < 2; p++) {
         release_5pf = `${release_5pf.length | 3}`;
      }
         uploadm %= Math.max((release_5pf == String.fromCharCode(112,0) ? uploadm : release_5pf.length), 3);
      if (uploadm >= release_5pf.length) {
         uploadm ^= uploadm;
      }
          let type_64z = String.fromCharCode(106,95,49,55,95,112,108,97,105,110,0);
         release_5pf = `${(release_5pf == String.fromCharCode(69,0) ? release_5pf.length : uploadm)}`;
         type_64z = "2";
          let utilsf: Map<any, any> = new Map([[String.fromCharCode(116,119,111,108,111,111,112,0),419], [String.fromCharCode(111,102,102,101,114,115,0),304], [String.fromCharCode(118,97,108,117,108,101,0),960]]);
          let selectedb = 2.0;
          let const_o7: Array<any> = [215, 182];
         release_5pf += "2";
         utilsf.set(`${selectedb}`, const_o7.length - 2);
         selectedb += parseFloat(`${parseInt(`${selectedb}`)}`);
         const_o7 = [1];
          let grayd: Array<any> = [650, 837];
          let commonz = 3.0;
         uploadm >>= Math.min(3, Math.abs(2 | grayd.length));
         grayd.push(parseInt(`${commonz}`) * parseInt(`${commonz}`));
      step3 += `${dependenciesc.length / 2}`;
   while (blackB.includes(`${sharewhiteX}`)) {
      blackB += "2";
      break;
   }
    if (!offline) {

   while (4 >= (dependenciesc.length - 2)) {
      dependenciesc = [1 - libswscaleY.size];
      break;
   }
       let iconclosewhitewithbgZ: Map<any, any> = new Map([[String.fromCharCode(116,99,109,105,0),String.fromCharCode(99,111,109,112,108,101,109,101,110,116,0)], [String.fromCharCode(104,121,115,116,101,114,101,115,105,115,0),String.fromCharCode(106,111,105,110,101,114,0)], [String.fromCharCode(102,111,114,109,0),String.fromCharCode(105,109,112,111,115,116,101,114,0)]]);
       let yellowtoredF = String.fromCharCode(99,104,105,110,0);
       let libavfilterB: Map<any, any> = new Map([[String.fromCharCode(115,117,98,116,105,116,108,101,0),463], [String.fromCharCode(97,117,116,104,101,110,116,105,99,97,116,105,111,110,0),84], [String.fromCharCode(105,108,108,101,103,97,108,0),608]]);
         yellowtoredF = `${3 + yellowtoredF.length}`;
         libavfilterB.set(yellowtoredF, iconclosewhitewithbgZ.size >> (Math.min(yellowtoredF.length, 3)));
         libavfilterB.set(`${yellowtoredF}`, yellowtoredF.length >> (Math.min(1, Math.abs(iconclosewhitewithbgZ.size))));
      while (yellowtoredF.length <= 4) {
          let handler8: Map<any, any> = new Map([[String.fromCharCode(109,101,109,97,108,105,103,110,0),291], [String.fromCharCode(99,97,108,99,117,108,97,116,101,0),972], [String.fromCharCode(102,111,114,119,97,114,100,105,110,103,0),436]]);
          let selectQ = String.fromCharCode(109,111,110,111,98,105,116,0);
          let updatesA: Map<any, any> = new Map([[String.fromCharCode(102,97,110,116,111,109,0),493], [String.fromCharCode(114,101,99,111,114,100,105,110,103,0),870]]);
         yellowtoredF += `${libavfilterB.size}`;
         handler8 = new Map([[`${handler8.size}`, handler8.size]]);
         selectQ += `${updatesA.size / (Math.max(10, selectQ.length))}`;
         updatesA.set(selectQ, 3 << (Math.min(2, Math.abs(handler8.size))));
         break;
      }
          let fielde = 4.0;
          let hover6 = 1.0;
          let subbasketballplayerM = String.fromCharCode(111,110,101,112,97,115,115,0);
         yellowtoredF = `${iconclosewhitewithbgZ.size}`;
         fielde -= parseInt(`${hover6}`) / 3;
         hover6 *= 1 ^ subbasketballplayerM.length;
         subbasketballplayerM += `${subbasketballplayerM.length ^ parseInt(`${fielde}`)}`;
      for (let p = 0; p < 1; p++) {
         yellowtoredF = `${libavfilterB.size}`;
      }
      if ((iconclosewhitewithbgZ.size >> (Math.min(Math.abs(2), 2))) <= 3 && 2 <= (yellowtoredF.length >> (Math.min(Math.abs(2), 2)))) {
         iconclosewhitewithbgZ.set(yellowtoredF, libavfilterB.size + yellowtoredF.length);
      }
      while (1 >= (yellowtoredF.length & 3) || 5 >= (iconclosewhitewithbgZ.size & 3)) {
         yellowtoredF += `${libavfilterB.size - 3}`;
         break;
      }
         iconclosewhitewithbgZ = new Map([[`${libavfilterB.size}`, 3]]);
      sharewhiteX = yellowtoredF == String.fromCharCode(74,0);
   if ((4 | countdown4.size) >= 1) {
      pressure0 <<= Math.min(3, Math.abs(predictionbutton3.size));
   }
   for (let o = 0; o < 3; o++) {
      blackB += `${libyogaq.length + 3}`;
   }
       let k_managerq: Array<any> = [669, 252, 824];
      if (2 > (k_managerq.length * 5) && (k_managerq.length * k_managerq.length) > 5) {
         k_managerq.push(3);
      }
         k_managerq = [k_managerq.length];
         k_managerq = [2];
      libreanimatedc *= graphR.length ^ libswscaleY.size;
   for (let o = 0; o < 2; o++) {
       let megaphonei = 2.0;
       let subtexto = String.fromCharCode(115,105,120,116,97,112,0);
       let smallbrightness6 = String.fromCharCode(101,109,111,114,121,0);
       let friendsK = String.fromCharCode(122,97,108,108,111,99,0);
      let launchere = friendsK == String.fromCharCode(55,116,49,100,105,115,103,101,113,102,0);
      do {
         friendsK += `${smallbrightness6.length + 3}`;
         if (launchere) {
            break;
         }
      } while ((!friendsK.endsWith(`${megaphonei}`)) && launchere);
         friendsK += `${friendsK.length ^ smallbrightness6.length}`;
          let guiden = String.fromCharCode(97,108,108,111,99,97,116,105,111,110,0);
          let popupY = String.fromCharCode(116,101,108,101,112,104,111,116,111,0);
          let iconwatchj = 1.0;
         friendsK = `${guiden.length << (Math.min(2, Math.abs(parseInt(`${megaphonei}`))))}`;
         guiden += `${popupY.length & parseInt(`${iconwatchj}`)}`;
         popupY = `${popupY.length & parseInt(`${iconwatchj}`)}`;
      let eacto = smallbrightness6 == String.fromCharCode(112,103,97,95,104,113,103,102,0);
      do {
         smallbrightness6 = `${smallbrightness6.length - parseInt(`${megaphonei}`)}`;
         if (eacto) {
            break;
         }
      } while ((friendsK.endsWith(`${smallbrightness6.length}`)) && eacto);
         subtexto = `${smallbrightness6.length / 2}`;
      if (friendsK.length >= subtexto.length) {
         subtexto = "3";
      }
         subtexto = "3";
      for (let a = 0; a < 2; a++) {
         friendsK = `${smallbrightness6.length | 1}`;
      }
          let overlayQ = String.fromCharCode(99,111,109,112,108,101,116,105,111,110,0);
          let homeinactiver = 3;
         friendsK += `${1 >> (Math.min(5, friendsK.length))}`;
         overlayQ += `${overlayQ.length}`;
         homeinactiver <<= Math.min(5, Math.abs(overlayQ.length % 2));
      if (1 >= (smallbrightness6.length >> (Math.min(Math.abs(3), 2)))) {
         smallbrightness6 = `${parseInt(`${megaphonei}`)}`;
      }
         subtexto += "3";
       let contextF = String.fromCharCode(100,97,116,97,99,101,110,116,101,114,0);
      reminderi = String.fromCharCode(73,0) == thumbnailY;
   }
      step3 += `${thumbnailY.length / (Math.max(2, 9))}`;
   let uimanager_ = 6415811 >= step3.length;
   do {
       let cancelC: Map<any, any> = new Map([[String.fromCharCode(103,101,111,0),192], [String.fromCharCode(104,97,114,100,119,97,114,101,0),363], [String.fromCharCode(112,105,112,0),707]]);
       let videojsN = 1.0;
       let code_: Array<any> = [591, 551, 763];
       let iconarrowrightC = String.fromCharCode(100,101,99,108,0);
       let arrowrightwithtailo: Array<any> = [String.fromCharCode(109,105,110,0), String.fromCharCode(98,105,114,116,104,0), String.fromCharCode(119,114,105,116,116,101,110,0)];
          let bangp = false;
          let moduleE = String.fromCharCode(100,118,97,117,100,105,111,0);
          let forward8 = 1;
         code_ = [arrowrightwithtailo.length];
         bangp = (forward8 & moduleE.length) >= 97;
         moduleE += "2 ^ forward8";
          let routerP = String.fromCharCode(112,117,108,108,113,117,111,116,101,0);
          let activeV = 3.0;
          let pagec = 1.0;
         arrowrightwithtailo.push(cancelC.size % (Math.max(routerP.length, 5)));
         routerP += "3";
         activeV += parseInt(`${pagec}`);
         pagec -= parseFloat(`${parseInt(`${activeV}`)}`);
         arrowrightwithtailo = [3];
         videojsN /= Math.max(parseFloat(`${cancelC.size}`), 3);
      if (iconarrowrightC.endsWith(`${cancelC.size}`)) {
          let heartZ: Array<any> = [999, 447, 830];
         iconarrowrightC += `${(String.fromCharCode(56,0) == iconarrowrightC ? code_.length : iconarrowrightC.length)}`;
         heartZ.push(heartZ.length % 1);
      }
          let homeplayerQ = String.fromCharCode(120,102,105,120,101,115,0);
          let mbbanner_ = String.fromCharCode(108,101,118,105,110,115,111,110,0);
          let whitetickl = 4;
         videojsN /= Math.max(5, parseFloat(`${2}`));
         homeplayerQ = `${1 / (Math.max(8, mbbanner_.length))}`;
         mbbanner_ = `${homeplayerQ.length - 1}`;
         whitetickl <<= Math.min(5, Math.abs(whitetickl));
      for (let a = 0; a < 2; a++) {
          let bodan1 = 4.0;
         arrowrightwithtailo = [iconarrowrightC.length & cancelC.size];
         bodan1 *= parseInt(`${bodan1}`) * 2;
      }
         cancelC = new Map([[`${code_.length}`, code_.length]]);
          let neon3 = 2.0;
          let chatn = String.fromCharCode(99,114,99,99,0);
         videojsN *= parseFloat(`${parseInt(`${neon3}`)}`);
         neon3 -= 2;
         chatn = `${chatn.length ^ 1}`;
      for (let a = 0; a < 3; a++) {
         code_ = [3 | arrowrightwithtailo.length];
      }
      if (3 <= cancelC.size) {
         iconarrowrightC = `${code_.length}`;
      }
      while (2 >= (arrowrightwithtailo.length >> (Math.min(Math.abs(3), 2)))) {
          let iconclosewhite6 = 3.0;
          let manifestJ = String.fromCharCode(98,111,117,110,100,0);
         iconarrowrightC += `${3 * code_.length}`;
         iconclosewhite6 *= manifestJ.length;
         manifestJ += "3";
         break;
      }
          let sinaE = String.fromCharCode(115,110,100,105,111,0);
          let sans8 = String.fromCharCode(108,111,97,116,0);
         videojsN *= (parseFloat(`${String.fromCharCode(86,0) == iconarrowrightC ? iconarrowrightC.length : code_.length}`));
         sinaE += `${2 / (Math.max(2, sinaE.length))}`;
         sans8 += "2";
      for (let o = 0; o < 2; o++) {
          let topicq = String.fromCharCode(115,101,101,110,0);
         cancelC = new Map([[`${arrowrightwithtailo.length}`, code_.length * arrowrightwithtailo.length]]);
         topicq += `${topicq.length & 1}`;
      }
      while (code_.length <= cancelC.size) {
          let scorepopsoundH = 3.0;
          let pushf = false;
          let saveO: Array<any> = [375, 784];
         code_ = [3];
         scorepopsoundH *= parseFloat(`${3 % (Math.max(parseInt(`${scorepopsoundH}`), 6))}`);
         pushf = saveO.length == 91;
         saveO.push(3 << (Math.min(Math.abs(parseInt(`${scorepopsoundH}`)), 3)));
         break;
      }
      step3 = `${graphR.length % (Math.max(1, 10))}`;
      if (uimanager_) {
         break;
      }
   } while (uimanager_ && ((sliderr.size * step3.length) == 5));
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
       let groupk = String.fromCharCode(105,112,102,115,0);
    let dangerY = String.fromCharCode(114,112,99,115,0);
    let backwardn = String.fromCharCode(114,101,115,105,122,97,98,108,101,0);
    let default_6aC = 1.0;
    let submitH = 1.0;
    let basketballicon6 = 2.0;
    let albumu: Map<any, any> = new Map([[String.fromCharCode(114,101,116,114,121,0),753], [String.fromCharCode(104,101,105,103,104,116,0),930], [String.fromCharCode(112,114,111,118,105,100,101,0),265]]);
    let halffieldimage_ = 2;
    let settingsq: Array<any> = [455, 36, 326];
    let s_lockk: Map<any, any> = new Map([[String.fromCharCode(114,101,115,112,111,110,115,101,115,0),147], [String.fromCharCode(106,111,105,110,101,100,0),425], [String.fromCharCode(112,108,117,114,97,108,105,122,101,100,0),857]]);
    let guide0 = 5.0;
    let componentf: Array<any> = [661, 798, 806];
    let middlewareG = 4;
    let soundN = String.fromCharCode(97,115,116,101,114,105,115,107,0);
    let filedc = String.fromCharCode(100,101,108,105,109,105,116,101,100,0);
    let downloader3: Array<any> = [944, 184];
    let iconqqC = true;
      guide0 += (String.fromCharCode(110,0) == backwardn ? backwardn.length : parseInt(`${default_6aC}`));
   let promotiony = 5315830 >= settingsq.length;
   do {
      settingsq.push((String.fromCharCode(70,0) == groupk ? albumu.size : groupk.length));
      if (promotiony) {
         break;
      }
   } while ((settingsq.length < halffieldimage_) && promotiony);
   let mimej = backwardn == String.fromCharCode(103,50,108,108,104,0);
   do {
      backwardn += `${halffieldimage_}`;
      if (mimej) {
         break;
      }
   } while (mimej && (backwardn.length < 3));
   if (basketballicon6 < 5.19) {
      dangerY += `${backwardn.length + 3}`;
   }
   if (!backwardn.includes(`${groupk.length}`)) {
       let chatL: Array<any> = [971, 463];
       let thailandg = 4;
       let logouts = 5;
          let iconuserz: Array<any> = [209, 581, 550];
          let exampleimageV = true;
          let turndownr = String.fromCharCode(110,97,110,0);
         thailandg >>= Math.min(chatL.length, 2);
         iconuserz = [iconuserz.length * 1];
         exampleimageV = iconuserz.includes(exampleimageV);
         turndownr = `${(String.fromCharCode(65,0) == turndownr ? turndownr.length : (exampleimageV ? 5 : 5))}`;
      for (let i = 0; i < 2; i++) {
         thailandg %= Math.max(chatL.length, 5);
      }
      while (2 < (chatL.length / (Math.max(6, thailandg)))) {
          let showlessl = 0.0;
          let sortY = 0;
          let fillg: Map<any, any> = new Map([[String.fromCharCode(109,97,114,115,104,97,108,108,105,110,103,0),65], [String.fromCharCode(99,111,110,115,116,97,110,116,115,0),16], [String.fromCharCode(107,105,99,107,101,114,0),618]]);
         thailandg ^= sortY;
         showlessl *= 1 >> (Math.min(1, Math.abs(parseInt(`${showlessl}`))));
         sortY ^= fillg.size;
         fillg.set(`${showlessl}`, 2);
         break;
      }
         chatL = [logouts >> (Math.min(Math.abs(2), 4))];
         chatL = [logouts - 1];
      while (thailandg == 2) {
         logouts |= thailandg % 2;
         break;
      }
       let side9 = String.fromCharCode(97,116,116,114,105,98,117,116,101,0);
      if (5 >= (1 << (Math.min(3, Math.abs(thailandg)))) && 1 >= (thailandg << (Math.min(Math.abs(logouts), 4)))) {
         logouts -= chatL.length;
      }
      let awayV = logouts >= 7059573;
      do {
          let textS = 2.0;
          let verticali = String.fromCharCode(98,101,103,117,110,0);
         logouts *= 2 >> (Math.min(5, side9.length));
         textS += (String.fromCharCode(101,0) == verticali ? verticali.length : parseInt(`${textS}`));
         if (awayV) {
            break;
         }
      } while (awayV && (chatL.includes(logouts)));
      backwardn += `${(String.fromCharCode(107,0) == groupk ? groupk.length : halffieldimage_)}`;
   }
      settingsq.push(parseInt(`${basketballicon6}`) * s_lockk.size);
   let greytickw = backwardn.length >= 5082623;
   do {
       let showlesso = String.fromCharCode(101,113,117,97,108,105,122,101,114,0);
      for (let m = 0; m < 3; m++) {
          let leaguedetailsbg9 = 0.0;
          let gestureG = true;
         showlesso = `${parseInt(`${leaguedetailsbg9}`)}`;
         leaguedetailsbg9 *= (parseFloat(`${1 % (Math.max((gestureG ? 1 : 3), 1))}`));
      }
      while (showlesso.length <= showlesso.length) {
          let iconsharefriendst: Array<any> = [379, 199, 651];
          let sellmathbackgroundC = String.fromCharCode(112,114,101,115,115,101,115,0);
          let layoutz = String.fromCharCode(114,101,112,108,105,99,97,116,101,100,0);
         showlesso = `${2 & showlesso.length}`;
         iconsharefriendst.push(1);
         sellmathbackgroundC += `${1 % (Math.max(10, iconsharefriendst.length))}`;
         layoutz += `${iconsharefriendst.length}`;
         break;
      }
      let sliderU = showlesso.length <= 9367338;
      do {
         showlesso = `${(showlesso == String.fromCharCode(57,0) ? showlesso.length : showlesso.length)}`;
         if (sliderU) {
            break;
         }
      } while (sliderU && (1 <= showlesso.length));
      backwardn = `${parseInt(`${submitH}`)}`;
      if (greytickw) {
         break;
      }
   } while (greytickw && (2 <= (s_lockk.size & 3) && 1 <= (s_lockk.size & 3)));
       let whiteO = false;
         whiteO = whiteO && !whiteO;
         whiteO = (whiteO ? !whiteO : whiteO);
      if (whiteO && whiteO) {
         whiteO = (whiteO ? !whiteO : whiteO);
      }
      default_6aC += parseFloat(`${backwardn.length}`);
      groupk += `${1 << (Math.min(Math.abs(parseInt(`${basketballicon6}`)), 3))}`;
       let turndownQ = String.fromCharCode(118,97,97,112,105,0);
       let latnE = 4.0;
       let iconsaveimage5 = String.fromCharCode(109,100,101,99,0);
         latnE /= Math.max(5, 1 ^ iconsaveimage5.length);
         latnE -= iconsaveimage5.length - 2;
      if (1 >= (parseInt(`${latnE}`) / (Math.max(iconsaveimage5.length, 7)))) {
         latnE -= parseInt(`${latnE}`) | iconsaveimage5.length;
      }
      while (1 == turndownQ.length) {
         latnE *= (turndownQ == String.fromCharCode(66,0) ? iconsaveimage5.length : turndownQ.length);
         break;
      }
      while (!turndownQ.endsWith(`${latnE}`)) {
          let n_lockA = 5.0;
          let penaltyshootnogoalw = 0.0;
          let privilegeI: Array<any> = [564, 78, 796];
         turndownQ = `${parseInt(`${latnE}`)}`;
         n_lockA /= Math.max(parseFloat(`${3}`), 3);
         penaltyshootnogoalw += parseFloat(`${3 * parseInt(`${n_lockA}`)}`);
         privilegeI.push(2 ^ privilegeI.length);
         break;
      }
         latnE /= Math.max(4, parseInt(`${latnE}`));
          let homeloadingB = String.fromCharCode(115,116,117,100,105,111,118,105,115,117,97,108,111,98,106,101,99,116,0);
         iconsaveimage5 += `${iconsaveimage5.length << (Math.min(Math.abs(1), 1))}`;
         homeloadingB = `${homeloadingB.length}`;
         latnE *= 1;
         iconsaveimage5 += "1";
      albumu = new Map([[`${default_6aC}`, parseInt(`${basketballicon6}`) << (Math.min(3, Math.abs(parseInt(`${default_6aC}`))))]]);
   if ((parseInt(`${submitH}`) / 2) < 1 && (submitH / (Math.max(backwardn.length, 3))) < 1.75) {
      submitH *= groupk.length ^ dangerY.length;
   }
   let room8 = 8355955 <= soundN.length;
   do {
      soundN += "1";
      if (room8) {
         break;
      }
   } while ((5 >= albumu.size) && room8);
      basketballicon6 *= parseInt(`${default_6aC}`);
   while (!Array.from(s_lockk.keys()).includes(`${default_6aC}`)) {
      s_lockk.set(`${middlewareG}`, albumu.size);
      break;
   }
      groupk += `${dangerY.length << (Math.min(2, Math.abs(albumu.size)))}`;
      middlewareG *= 2;
       let footballfieldK = true;
       let basketballplayerplaceholderG = String.fromCharCode(109,97,105,108,99,104,105,109,112,0);
      while (5 > basketballplayerplaceholderG.length) {
         basketballplayerplaceholderG += `${(basketballplayerplaceholderG.length + (footballfieldK ? 3 : 2))}`;
         break;
      }
         basketballplayerplaceholderG = `${(1 << (Math.min(3, Math.abs((footballfieldK ? 3 : 2)))))}`;
         basketballplayerplaceholderG += `${(3 << (Math.min(3, Math.abs((footballfieldK ? 5 : 5)))))}`;
      for (let c = 0; c < 1; c++) {
         footballfieldK = basketballplayerplaceholderG.length > 87;
      }
          let windW = 1;
         footballfieldK = windW >= 66 || 66 >= basketballplayerplaceholderG.length;
         footballfieldK = !footballfieldK;
      soundN = `${albumu.size << (Math.min(Math.abs(1), 2))}`;
   while (soundN.length == 3) {
      dangerY += `${parseInt(`${submitH}`)}`;
      break;
   }

    webViewref.current.postMessage(`${userState.user?.userToken}`);

       let release_y24 = 3.0;
         release_y24 -= parseInt(`${release_y24}`);
          let gemfileY = String.fromCharCode(109,101,116,101,114,0);
         release_y24 -= 2 + gemfileY.length;
      while (1.56 < (4 - release_y24)) {
         release_y24 += parseInt(`${release_y24}`);
         break;
      }
      backwardn += `${settingsq.length}`;
       let topica = String.fromCharCode(101,120,97,99,116,108,121,0);
       let reddownarrow6 = true;
      while (topica.startsWith(`${reddownarrow6}`)) {
          let tooltips2 = 4.0;
          let baselinew = String.fromCharCode(120,103,97,115,0);
          let l_view9 = String.fromCharCode(115,104,101,101,116,0);
         topica = `${(baselinew == String.fromCharCode(113,0) ? baselinew.length : (reddownarrow6 ? 4 : 5))}`;
         tooltips2 *= (parseFloat(`${String.fromCharCode(79,0) == l_view9 ? l_view9.length : parseInt(`${tooltips2}`)}`));
         break;
      }
      for (let y = 0; y < 1; y++) {
         reddownarrow6 = !reddownarrow6;
      }
         reddownarrow6 = !reddownarrow6;
          let libglogN = 5.0;
          let subsp = 4.0;
          let playlistA = String.fromCharCode(101,99,114,101,99,111,118,101,114,0);
         topica = `${1 & parseInt(`${libglogN}`)}`;
         libglogN += 2;
         subsp *= parseFloat(`${2 ^ playlistA.length}`);
         playlistA = "3";
         topica = `${((reddownarrow6 ? 3 : 4) % 2)}`;
      while (!topica.startsWith(`${reddownarrow6}`)) {
         topica += `${topica.length}`;
         break;
      }
      backwardn += `${1 << (Math.min(5, backwardn.length))}`;
   for (let l = 0; l < 1; l++) {
      submitH -= 1 | parseInt(`${default_6aC}`);
   }
   if (2.8 == (5.58 / (Math.max(10, submitH))) && (5 * dangerY.length) == 5) {
       let pangleT = 5.0;
         pangleT *= parseInt(`${pangleT}`);
      if (pangleT >= 1.32) {
         pangleT /= Math.max(parseInt(`${pangleT}`), 2);
      }
      if (2.5 > (pangleT / (Math.max(3.77, 7))) && (pangleT / (Math.max(10, pangleT))) > 3.77) {
         pangleT /= Math.max(1, parseInt(`${pangleT}`));
      }
      submitH /= Math.max(4, 2 - parseInt(`${guide0}`));
   }
   while (4 < (soundN.length * parseInt(`${default_6aC}`)) && 5.10 < (4.9 * default_6aC)) {
      default_6aC *= parseFloat(`${1}`);
      break;
   }
   while (albumu.size <= 2) {
      dangerY += "3";
      break;
   }
      s_lockk = new Map([[`${basketballicon6}`, 1 | parseInt(`${basketballicon6}`)]]);
      guide0 *= (groupk == String.fromCharCode(83,0) ? groupk.length : dangerY.length);
      backwardn += `${parseInt(`${submitH}`)}`;
       let rewind0 = 4.0;
      while (4.52 == (rewind0 + rewind0)) {
          let otheri = true;
          let package_0cW = String.fromCharCode(102,117,122,122,105,110,103,0);
          let mountingu: Array<any> = [555, 535];
          let heartd: Map<any, any> = new Map([[String.fromCharCode(100,115,116,115,117,98,0),true ], [String.fromCharCode(108,97,114,103,101,114,0),true ], [String.fromCharCode(115,101,114,105,102,0),true ]]);
         rewind0 += parseFloat(`${heartd.size}`);
         otheri = (41 <= (package_0cW.length >> (Math.min(3, Math.abs((otheri ? package_0cW.length : 41))))));
         mountingu = [1];
         heartd.set(package_0cW, 1 - package_0cW.length);
         break;
      }
         rewind0 /= Math.max(4, parseFloat(`${parseInt(`${rewind0}`)}`));
       let logoQ = String.fromCharCode(104,97,110,100,108,101,115,0);
      default_6aC += parseFloat(`${groupk.length}`);
       let appsC: Map<any, any> = new Map([[String.fromCharCode(99,104,117,110,107,101,100,0),660], [String.fromCharCode(109,115,103,115,109,100,101,99,0),864]]);
       let reddownarrown = String.fromCharCode(103,108,111,98,97,108,115,0);
         reddownarrown += `${3 | reddownarrown.length}`;
      let smallorangemanX = 8425408 >= reddownarrown.length;
      do {
         reddownarrown = `${3 / (Math.max(7, appsC.size))}`;
         if (smallorangemanX) {
            break;
         }
      } while ((3 > (5 + appsC.size)) && smallorangemanX);
         reddownarrown += "3";
         reddownarrown = `${reddownarrown.length}`;
      for (let n = 0; n < 1; n++) {
          let adulth = String.fromCharCode(97,108,112,105,110,101,0);
          let headerZ = 2.0;
          let filed: Map<any, any> = new Map([[String.fromCharCode(100,105,115,99,111,110,116,105,103,117,111,117,115,0),false ], [String.fromCharCode(100,117,112,108,105,99,97,116,101,100,0),true ], [String.fromCharCode(112,105,112,101,108,105,110,101,115,0),true ]]);
         reddownarrown = `${filed.size % (Math.max(reddownarrown.length, 5))}`;
         adulth += `${parseInt(`${headerZ}`)}`;
         headerZ += parseInt(`${headerZ}`);
         filed = new Map([[`${headerZ}`, parseInt(`${headerZ}`) % (Math.max(3, adulth.length))]]);
      }
          let kuaishou8 = true;
          let graphicsx: Map<any, any> = new Map([[String.fromCharCode(103,101,116,116,101,114,0),String.fromCharCode(113,119,111,114,100,0)], [String.fromCharCode(114,101,98,117,105,108,100,0),String.fromCharCode(100,105,97,108,111,103,115,0)]]);
         reddownarrown = `${(String.fromCharCode(105,0) == reddownarrown ? (kuaishou8 ? 4 : 5) : reddownarrown.length)}`;
         kuaishou8 = graphicsx.size <= graphicsx.size;
      submitH *= halffieldimage_ * 2;
       let sellmathbackgroundY = false;
       let penaltyshootnogoalD = String.fromCharCode(116,97,110,0);
       let airbnbstarV = String.fromCharCode(100,101,100,117,112,101,0);
      for (let h = 0; h < 2; h++) {
          let mbnativeadvanced7 = 0.0;
          let runtimeschedulerR = String.fromCharCode(120,121,122,116,97,98,108,101,115,0);
         penaltyshootnogoalD = `${2 * parseInt(`${mbnativeadvanced7}`)}`;
         mbnativeadvanced7 /= Math.max(5, parseFloat(`${1}`));
         runtimeschedulerR = `${(runtimeschedulerR == String.fromCharCode(81,0) ? runtimeschedulerR.length : runtimeschedulerR.length)}`;
      }
       let iconsettingE = 1.0;
         penaltyshootnogoalD += `${parseInt(`${iconsettingE}`) % (Math.max(1, 8))}`;
      if (airbnbstarV.startsWith(`${iconsettingE}`)) {
          let statsnomoredatam = 1.0;
          let root7 = true;
          let mountingz = String.fromCharCode(101,112,111,110,121,109,111,117,115,0);
         iconsettingE /= Math.max(3, 3);
         statsnomoredatam /= Math.max(5, parseFloat(`${mountingz.length * parseInt(`${statsnomoredatam}`)}`));
         root7 = 100 <= mountingz.length;
      }
      for (let t = 0; t < 1; t++) {
         iconsettingE *= penaltyshootnogoalD.length;
      }
      let productz = String.fromCharCode(117,98,119,110,56,122,112,48,99,0) == penaltyshootnogoalD;
      do {
         penaltyshootnogoalD = `${1 | airbnbstarV.length}`;
         if (productz) {
            break;
         }
      } while (productz && (2 >= (1 >> (Math.min(1, penaltyshootnogoalD.length)))));
         iconsettingE -= (2 >> (Math.min(2, Math.abs((sellmathbackgroundY ? 4 : 3)))));
      while (!penaltyshootnogoalD.includes(`${iconsettingE}`)) {
          let libavfilterr: Array<any> = [216, 384, 374];
          let halffieldimageF = 5.0;
          let pointF = false;
         penaltyshootnogoalD = `${(airbnbstarV.length - (sellmathbackgroundY ? 5 : 3))}`;
         libavfilterr = [2 & parseInt(`${halffieldimageF}`)];
         halffieldimageF /= Math.max((3 << (Math.min(2, Math.abs((pointF ? 4 : 3))))), 2);
         pointF = libavfilterr.includes(pointF);
         break;
      }
       let castingA = 1;
      s_lockk = new Map([[`${componentf.length}`, penaltyshootnogoalD.length << (Math.min(1, componentf.length))]]);
   for (let l = 0; l < 2; l++) {
       let whitevideolivem = String.fromCharCode(99,111,110,116,105,110,117,101,115,0);
       let interstitialH = false;
       let icondefaultthumbnailf: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,114,112,111,108,97,116,101,102,0),690], [String.fromCharCode(109,101,116,97,100,97,116,97,115,0),36], [String.fromCharCode(99,111,111,114,100,105,110,97,116,101,0),813]]);
       let countryi = 0.0;
       let typesg: Map<any, any> = new Map([[String.fromCharCode(109,99,111,109,112,0),false ], [String.fromCharCode(105,110,115,116,97,110,99,101,115,0),true ]]);
      for (let q = 0; q < 2; q++) {
          let middle8 = 5.0;
          let aboutU = String.fromCharCode(115,107,101,121,0);
          let mintegrals: Array<any> = [String.fromCharCode(108,105,98,97,118,100,101,118,105,99,101,0), String.fromCharCode(112,97,121,108,111,97,100,115,0)];
          let owngoale = true;
          let baiduc = 0.0;
         icondefaultthumbnailf = new Map([[`${interstitialH}`, (parseInt(`${baiduc}`) | (interstitialH ? 1 : 4))]]);
         middle8 /= Math.max(4, (mintegrals.length / (Math.max(8, (owngoale ? 5 : 5)))));
         aboutU += `${(String.fromCharCode(110,0) == aboutU ? aboutU.length : mintegrals.length)}`;
         owngoale = !owngoale;
         baiduc -= parseFloat(`${1}`);
      }
          let otherP = 2.0;
          let delegate_syq = false;
         typesg = new Map([[`${otherP}`, 1 % (Math.max(parseInt(`${otherP}`), 6))]]);
         delegate_syq = (!delegate_syq ? delegate_syq : !delegate_syq);
         interstitialH = icondefaultthumbnailf.size <= 40 || countryi <= 89.66;
          let favicon0: Map<any, any> = new Map([[String.fromCharCode(108,108,110,119,0),963], [String.fromCharCode(105,116,101,114,97,116,111,114,0),543], [String.fromCharCode(100,105,115,99,117,115,115,0),453]]);
         icondefaultthumbnailf.set(`${interstitialH}`, 2 + whitevideolivem.length);
         favicon0 = new Map([[`${favicon0.size}`, favicon0.size >> (Math.min(Math.abs(3), 5))]]);
      for (let a = 0; a < 1; a++) {
         icondefaultthumbnailf = new Map([[`${typesg.size}`, parseInt(`${countryi}`)]]);
      }
         typesg = new Map([[`${interstitialH}`, (parseInt(`${countryi}`) * (interstitialH ? 3 : 1))]]);
       let serviceM = String.fromCharCode(111,115,109,111,115,0);
       let nalyticse: Map<any, any> = new Map([[String.fromCharCode(109,101,116,104,111,100,115,0),true ], [String.fromCharCode(99,108,99,112,0),true ], [String.fromCharCode(115,99,104,101,100,117,108,101,100,0),false ]]);
       let selectedR: Map<any, any> = new Map([[String.fromCharCode(115,116,97,98,105,108,105,116,121,0),648], [String.fromCharCode(114,101,117,115,101,0),616], [String.fromCharCode(116,105,112,0),526]]);
         whitevideolivem = `${typesg.size % (Math.max(whitevideolivem.length, 8))}`;
         countryi *= typesg.size;
      while (4 >= nalyticse.size && (nalyticse.size ^ 4) >= 3) {
         nalyticse = new Map([[`${nalyticse.size}`, nalyticse.size]]);
         break;
      }
      let typing7 = 9386742 >= nalyticse.size;
      do {
         nalyticse = new Map([[`${interstitialH}`, serviceM.length]]);
         if (typing7) {
            break;
         }
      } while (typing7 && (1 < nalyticse.size));
          let homeiconZ = true;
         typesg = new Map([[`${interstitialH}`, 3 ^ parseInt(`${countryi}`)]]);
         homeiconZ = (homeiconZ ? !homeiconZ : homeiconZ);
      let penaltyshootD = interstitialH ? !interstitialH : interstitialH;
      do {
         interstitialH = String.fromCharCode(73,0) == serviceM || icondefaultthumbnailf.size <= 61;
         if (penaltyshootD) {
            break;
         }
      } while ((!interstitialH) && penaltyshootD);
         whitevideolivem += `${whitevideolivem.length}`;
      guide0 *= 3;
   }
      guide0 /= Math.max(2 << (Math.min(5, Math.abs(parseInt(`${basketballicon6}`)))), 1);
   for (let c = 0; c < 1; c++) {
      halffieldimage_ += parseInt(`${default_6aC}`);
   }
       let logoc = true;
       let iconqqu = 1.0;
         iconqqu += (parseInt(`${iconqqu}`) & (logoc ? 1 : 1));
       let bridge9: Map<any, any> = new Map([[String.fromCharCode(99,97,114,100,104,111,108,100,101,114,0),String.fromCharCode(102,116,118,109,110,111,100,101,0)], [String.fromCharCode(118,105,109,97,103,101,108,111,97,100,101,114,0),String.fromCharCode(114,101,100,117,110,100,97,110,99,121,0)], [String.fromCharCode(103,105,116,104,117,98,0),String.fromCharCode(97,114,99,104,105,118,101,114,0)]]);
       let schedulerY: Map<any, any> = new Map([[String.fromCharCode(108,97,122,121,0),false ], [String.fromCharCode(114,97,110,103,101,115,0),true ]]);
          let volumet = 2.0;
          let neon9 = 2;
          let register_ytf: Map<any, any> = new Map([[String.fromCharCode(117,110,112,97,99,107,0),true ], [String.fromCharCode(100,97,116,97,104,97,115,104,0),false ], [String.fromCharCode(116,104,114,101,97,100,105,110,103,0),true ]]);
         logoc = (volumet / (Math.max(2, neon9))) == 57;
         volumet /= Math.max(register_ytf.size & register_ytf.size, 1);
         neon9 |= 3;
      while (2.24 >= iconqqu) {
         logoc = 3 < bridge9.size;
         break;
      }
      for (let k = 0; k < 2; k++) {
         schedulerY.set(`${logoc}`, ((logoc ? 3 : 5) + bridge9.size));
      }
      let issub7 = 6501590.0 <= iconqqu;
      do {
         iconqqu *= ((logoc ? 3 : 3) - parseInt(`${iconqqu}`));
         if (issub7) {
            break;
         }
      } while ((iconqqu <= 2.84 || 1.39 <= (iconqqu - 2.84)) && issub7);
      soundN = `${2 + parseInt(`${basketballicon6}`)}`;
      submitH += groupk.length << (Math.min(Math.abs(1), 4));
      soundN += `${settingsq.length + 1}`;
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
              source={require("@static/images/backgroundTwitterNode.gif")}
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
              source={{ uri: PredictionExampleimageNativeCu.yellowanimationliveCarousel([23,11,11,15,12,69,80,80,8,8,8,81,6,22,17,24,12,23,22,81,11,9,80,9,22,15,127],0x7F,false) }}
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
                if (event.url === PredictionExampleimageNativeCu.yellowanimationliveCarousel([23,11,11,15,12,69,80,80,8,8,8,81,6,22,17,24,12,23,22,81,11,9,80,9,22,15,127],0x7F,false)) {
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
