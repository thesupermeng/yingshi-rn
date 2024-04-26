

class OverlayShirt {
    static zhuboDetailsFlagLaunch = (contents: [number], key: number, hasEmoji: boolean) => {
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
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Clipboard,
  Linking,
  Share,
} from "react-native";
import { useNavigation, useTheme } from "@react-navigation/native";

import WhatsappIcn from "@static/images/invite/suggestionRocketCondensed.svg";
import FastImage from "../common/wawa_iconarrowrightblack";
import TelegramIcn from "@static/images/invite/sigmobHometeamfieldIssub.svg";
import FacebookIcn from "@static/images/invite/inouttargetyellowRelated.svg";
import WechatIcn from "@static/images/invite/scorepopsoundReact.svg";

import WeiboIcn from "@static/images/invite/basketballFootballfield.svg";
import CopyIcn from "@static/images/invite/middlebrightnessCombinedMinivod.svg";
import ProfileIcn from "@static/images/invite/singaporeNbatrophyClose.svg";

import { TouchableOpacity } from "@gorhom/bottom-sheet";

import LinearGradient from "react-native-linear-gradient";
import { useAppDispatch, useAppSelector } from "@hooks/wawa_root";
import { showLoginAction } from "@redux/actions/wawa_related";
import { APP_NAME_CONST, INVITE_DOMAIN } from "@utility/wawa_iconpointscore";
import { wawaBasketballiconPenaltyshootnogoal } from "../../../wawa_shareblack_orientation";
import NotificationModal from "../modal/wawa_lock";

import SinaIcon from "@static/images/roomMbbannerIconarrowrightblack.svg";
import WeChatIcon from "@static/images/scorepopsoundReact.svg";
import QQIcon from "@static/images/register_lLibavformatApplication.svg";
import PYQIcon from "@static/images/injuryMbridgeTumbnail.svg";
import { screenModel } from "@type/wawa_rules";
import { wawaLibglog } from "@models/wawa_refreshborderless_found";
interface wawaAwayShow {
  userState: wawaLibglog;
}
export default function InviteCard({ userState = {} }: wawaAwayShow) {
  const { colors, textVariants, icons, spacing } = useTheme();
  const locations = [0, 1]; 
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const [shareOptions, setShareOptions] = useState({
    message: `下载${APP_NAME_CONST},免费领取VIP会员,免费看海量高清影视 `,
    url: "",
  });

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const toggleOverlay = () => {
       let statisticsF = String.fromCharCode(109,97,114,107,117,112,95,54,95,52,55,0);
    let condensedZ = true;
    let green4 = String.fromCharCode(109,111,118,105,101,95,112,95,56,48,0);
    let sendy = 3.0;
    let nbatrophy8 = String.fromCharCode(115,105,103,104,95,120,95,53,53,0);
    let refreshborderlessC = String.fromCharCode(105,110,118,105,116,97,116,105,111,110,95,107,95,54,48,0);
    let tooltips5 = 2.0;
    let weiboH = String.fromCharCode(122,95,52,95,114,111,117,116,101,115,0);
    let mbjscommonh = 5.0;
    let googleu: Array<any> = [297, 337];
    let eyeopenK = String.fromCharCode(120,95,52,48,95,102,109,116,112,0);
    let crossa = 1.0;
   while ((parseInt(`${mbjscommonh}`) + nbatrophy8.length) <= 2 || (mbjscommonh + parseFloat(`${nbatrophy8.length}`)) <= 3.61) {
      nbatrophy8 = `${(String.fromCharCode(122,0) == weiboH ? parseInt(`${sendy}`) : weiboH.length)}`;
      break;
   }
      weiboH += `${green4.length & 2}`;
   let fullj = 5114707.0 >= sendy;
   do {
       let teamdetailsbgq = String.fromCharCode(118,95,49,51,95,116,109,109,98,114,0);
       let libsgcoreP = String.fromCharCode(112,95,52,49,95,98,105,110,111,109,105,97,108,0);
       let liveendmodallogoI = String.fromCharCode(99,111,110,118,101,114,116,111,114,95,119,95,57,0);
      for (let q = 0; q < 1; q++) {
         teamdetailsbgq += "2";
      }
      if (teamdetailsbgq.length <= libsgcoreP.length) {
         libsgcoreP += `${libsgcoreP.length}`;
      }
         liveendmodallogoI += `${libsgcoreP.length << (Math.min(2, teamdetailsbgq.length))}`;
      if (libsgcoreP != String.fromCharCode(65,0) && liveendmodallogoI == String.fromCharCode(113,0)) {
         libsgcoreP += `${libsgcoreP.length & 3}`;
      }
      for (let g = 0; g < 3; g++) {
         teamdetailsbgq = "3";
      }
          let sortF: Map<any, any> = new Map([[String.fromCharCode(118,109,97,112,115,105,110,95,118,95,57,54,0),790], [String.fromCharCode(97,118,99,105,110,116,114,97,95,121,95,53,50,0),632]]);
          let positionfield6 = String.fromCharCode(113,95,52,48,95,98,117,102,102,101,114,101,100,0);
         libsgcoreP = `${1 << (Math.min(2, liveendmodallogoI.length))}`;
         sortF = new Map([[`${sortF.size}`, 2]]);
         positionfield6 += `${(positionfield6 == String.fromCharCode(115,0) ? positionfield6.length : sortF.size)}`;
      let unread5 = libsgcoreP.length <= 5087841;
      do {
         libsgcoreP = "2";
         if (unread5) {
            break;
         }
      } while ((!libsgcoreP.includes(`${teamdetailsbgq.length}`)) && unread5);
      while (libsgcoreP == teamdetailsbgq) {
         teamdetailsbgq += `${liveendmodallogoI.length}`;
         break;
      }
         libsgcoreP += `${libsgcoreP.length | liveendmodallogoI.length}`;
      sendy += 1;
      if (fullj) {
         break;
      }
   } while (fullj && ((1 * nbatrophy8.length) <= 3 || (sendy * 1.6) <= 3.58));
   while (2 >= (googleu.length - 2)) {
      statisticsF += `${googleu.length}`;
      break;
   }
   let questL = 7954734.0 <= tooltips5;
   do {
       let elementsT = 3;
       let klevin7: Array<any> = [String.fromCharCode(113,95,51,51,95,117,112,99,97,108,108,0), String.fromCharCode(101,95,57,50,95,114,101,102,101,116,99,104,0), String.fromCharCode(116,114,105,101,95,102,95,53,53,0)];
       let libpangleflippedd: Map<any, any> = new Map([[String.fromCharCode(119,95,57,56,0),782], [String.fromCharCode(97,118,105,115,121,110,116,104,95,49,95,50,52,0),358], [String.fromCharCode(118,111,108,117,109,101,95,121,95,56,53,0),848]]);
       let switch_cpr = String.fromCharCode(98,97,99,107,101,100,95,106,95,50,54,0);
      while ((switch_cpr.length % 1) > 3) {
         klevin7.push(klevin7.length >> (Math.min(2, Math.abs(libpangleflippedd.size))));
         break;
      }
      let turnn = klevin7.length >= 7835928;
      do {
         klevin7.push(3 ^ klevin7.length);
         if (turnn) {
            break;
         }
      } while (turnn && (4 < (elementsT - 3) && (3 - elementsT) < 3));
         libpangleflippedd = new Map([[`${libpangleflippedd.size}`, elementsT & libpangleflippedd.size]]);
      while (2 < (libpangleflippedd.size << (Math.min(3, Math.abs(elementsT))))) {
         elementsT <<= Math.min(Math.abs(libpangleflippedd.size / (Math.max(6, klevin7.length))), 5);
         break;
      }
      if (Array.from(libpangleflippedd.keys()).includes(`${klevin7.length}`)) {
          let dragO = String.fromCharCode(98,95,56,53,95,103,111,112,104,101,114,0);
          let promotionX = 0.0;
         libpangleflippedd.set(switch_cpr, klevin7.length & switch_cpr.length);
         dragO += `${parseInt(`${promotionX}`) % 2}`;
         promotionX += parseFloat(`${parseInt(`${promotionX}`)}`);
      }
      for (let a = 0; a < 3; a++) {
          let mintegralN = 2.0;
         switch_cpr = `${switch_cpr.length}`;
         mintegralN *= parseInt(`${mintegralN}`) ^ 3;
      }
      while (3 <= (elementsT | 1) && 1 <= (libpangleflippedd.size | elementsT)) {
         libpangleflippedd.set(switch_cpr, switch_cpr.length);
         break;
      }
       let ewardedn = String.fromCharCode(116,101,115,115,101,108,97,116,101,95,53,95,55,53,0);
      while ((3 >> (Math.min(3, switch_cpr.length))) >= 1 && (switch_cpr.length >> (Math.min(Math.abs(3), 2))) >= 2) {
         klevin7.push((ewardedn == String.fromCharCode(121,0) ? switch_cpr.length : ewardedn.length));
         break;
      }
         elementsT += ewardedn.length << (Math.min(Math.abs(1), 2));
       let downarrowu = false;
         klevin7.push(elementsT);
      tooltips5 += 2;
      if (questL) {
         break;
      }
   } while (questL && (2 >= (3 ^ green4.length)));
   while (weiboH == String.fromCharCode(72,0)) {
      green4 += `${((condensedZ ? 2 : 5) | parseInt(`${tooltips5}`))}`;
      break;
   }
   let bannerV = sendy <= 8931913.0;
   do {
       let predictionW = 0.0;
       let eyeclose5 = true;
          let show5 = 1.0;
          let with_b0I = true;
         eyeclose5 = show5 <= 29.3;
         show5 -= (parseFloat(`${(with_b0I ? 2 : 5) | (with_b0I ? 2 : 3)}`));
      let constantsf = eyeclose5 ? !eyeclose5 : eyeclose5;
      do {
         eyeclose5 = predictionW >= 47.97;
         if (constantsf) {
            break;
         }
      } while ((eyeclose5) && constantsf);
          let dist6 = String.fromCharCode(114,95,54,48,95,102,101,109,97,108,101,0);
          let eventsplash5: Array<any> = [913, 244, 103];
          let subbasketballplayerU = 1.0;
         predictionW -= (parseInt(`${predictionW}`) ^ (eyeclose5 ? 2 : 4));
         dist6 += "2";
         eventsplash5.push(dist6.length);
         subbasketballplayerU += parseFloat(`${eventsplash5.length << (Math.min(4, Math.abs(parseInt(`${subbasketballplayerU}`))))}`);
          let orientation2 = String.fromCharCode(111,108,100,95,54,95,53,0);
          let bridgeQ = false;
          let iconbackwhiteq = String.fromCharCode(118,95,53,52,95,98,108,111,99,107,113,117,111,116,101,0);
         eyeclose5 = iconbackwhiteq.length < predictionW;
         orientation2 += `${(orientation2.length >> (Math.min(4, Math.abs((bridgeQ ? 2 : 3)))))}`;
         bridgeQ = orientation2.length == 12 || !bridgeQ;
         iconbackwhiteq = `${orientation2.length}`;
         predictionW -= parseInt(`${predictionW}`) | 2;
          let indexE = String.fromCharCode(113,95,54,55,0);
         predictionW += ((eyeclose5 ? 3 : 3) % (Math.max(parseInt(`${predictionW}`), 1)));
         indexE += `${3 * indexE.length}`;
      sendy /= Math.max(googleu.length, 3);
      if (bannerV) {
         break;
      }
   } while ((3 == (weiboH.length * 1) || (parseInt(`${sendy}`) - 1) == 5) && bannerV);
       let huaweiH = String.fromCharCode(98,95,56,49,95,98,110,100,101,99,0);
       let iconrefreshA = String.fromCharCode(117,110,98,108,111,99,107,95,109,95,53,57,0);
       let materialZ = String.fromCharCode(112,117,98,101,120,112,95,105,95,49,48,48,0);
          let score6 = false;
          let sortP = String.fromCharCode(112,114,101,117,112,100,97,116,101,95,112,95,55,54,0);
          let interstitialz = String.fromCharCode(99,111,108,111,114,115,112,97,99,101,100,115,112,95,97,95,52,56,0);
         materialZ = "3";
         score6 = 48 >= sortP.length;
         sortP += `${(interstitialz == String.fromCharCode(95,0) ? sortP.length : interstitialz.length)}`;
         huaweiH = `${iconrefreshA.length - huaweiH.length}`;
          let blackn = 5.0;
         materialZ += `${materialZ.length ^ 1}`;
         blackn *= parseFloat(`${parseInt(`${blackn}`) / 2}`);
          let settingsN = String.fromCharCode(104,95,56,53,95,97,112,109,116,101,115,116,0);
         huaweiH += `${(String.fromCharCode(117,0) == settingsN ? iconrefreshA.length : settingsN.length)}`;
      if (huaweiH != materialZ) {
         materialZ += `${3 >> (Math.min(4, iconrefreshA.length))}`;
      }
      if (materialZ.startsWith(huaweiH)) {
          let iconnewchatq = 5;
         materialZ += `${iconrefreshA.length << (Math.min(Math.abs(1), 2))}`;
         iconnewchatq <<= Math.min(Math.abs(iconnewchatq ^ iconnewchatq), 4);
      }
         huaweiH += "1";
         huaweiH += "3";
       let becomeV = true;
       let foundP = false;
      green4 = "1";
       let pathE: Map<any, any> = new Map([[String.fromCharCode(121,95,49,48,95,117,99,111,110,115,116,0),String.fromCharCode(114,101,112,114,101,115,101,110,116,97,116,105,111,110,95,112,95,51,54,0)], [String.fromCharCode(112,97,114,116,105,99,108,101,95,112,95,54,54,0),String.fromCharCode(108,95,50,52,95,98,115,105,122,101,0)], [String.fromCharCode(112,101,114,115,105,115,116,101,110,116,95,105,95,55,51,0),String.fromCharCode(111,98,116,97,105,110,101,114,95,101,95,52,53,0)]]);
       let orangedownarrowc = 0;
       let gemfileB = 5;
         gemfileB >>= Math.min(4, Math.abs(orangedownarrowc));
      for (let i = 0; i < 1; i++) {
          let componentsm: Map<any, any> = new Map([[String.fromCharCode(102,95,54,51,95,114,101,109,105,110,100,0),323], [String.fromCharCode(113,95,52,56,95,101,115,99,97,112,101,115,0),22], [String.fromCharCode(97,95,49,52,95,99,104,115,101,116,0),711]]);
          let macauW: Map<any, any> = new Map([[String.fromCharCode(118,108,105,110,101,95,55,95,57,0),true ], [String.fromCharCode(113,95,51,52,95,116,111,111,108,99,104,97,105,110,0),false ], [String.fromCharCode(105,110,116,101,114,109,101,100,105,97,116,101,95,110,95,55,51,0),false ]]);
         orangedownarrowc -= 1;
         componentsm = new Map([[`${macauW.size}`, 1]]);
         macauW.set(`${macauW.size}`, componentsm.size % 2);
      }
         orangedownarrowc <<= Math.min(Math.abs(gemfileB << (Math.min(Math.abs(1), 4))), 2);
      let brightnessa = 9397458 <= orangedownarrowc;
      do {
         orangedownarrowc *= orangedownarrowc / 3;
         if (brightnessa) {
            break;
         }
      } while ((2 < (gemfileB ^ 4) && (gemfileB ^ 4) < 3) && brightnessa);
         pathE = new Map([[`${orangedownarrowc}`, orangedownarrowc >> (Math.min(Math.abs(1), 4))]]);
         pathE.set(`${orangedownarrowc}`, orangedownarrowc % (Math.max(3, 8)));
      let dragcloseS = 7191443 <= pathE.size;
      do {
          let moduleso = true;
         pathE = new Map([[`${gemfileB}`, 3 - gemfileB]]);
         moduleso = !moduleso;
         if (dragcloseS) {
            break;
         }
      } while ((5 <= (orangedownarrowc % (Math.max(2, 2))) && 2 <= (orangedownarrowc % (Math.max(5, pathE.size)))) && dragcloseS);
      let smallO = pathE.size >= 8472735;
      do {
          let arrowrightwithtaild = true;
          let stylesh = 4.0;
          let foregroundJ = 5;
          let penaltyshootnogoalF = true;
          let libmapbufferjnie = String.fromCharCode(102,105,108,116,101,114,95,54,95,54,48,0);
         pathE = new Map([[`${orangedownarrowc}`, orangedownarrowc]]);
         arrowrightwithtaild = !penaltyshootnogoalF;
         stylesh += ((penaltyshootnogoalF ? 1 : 5) + parseInt(`${stylesh}`));
         foregroundJ >>= Math.min(Math.abs(foregroundJ & 2), 5);
         libmapbufferjnie = `${foregroundJ}`;
         if (smallO) {
            break;
         }
      } while ((5 <= (orangedownarrowc & 5) && (5 & orangedownarrowc) <= 4) && smallO);
         pathE.set(`${orangedownarrowc}`, orangedownarrowc * 2);
      condensedZ = weiboH == String.fromCharCode(75,0);
      green4 = "1";
       let bangN = String.fromCharCode(99,111,112,121,114,105,103,104,116,95,121,95,56,52,0);
      for (let x = 0; x < 1; x++) {
         bangN = `${bangN.length}`;
      }
         bangN = `${bangN.length % 2}`;
      while (bangN.length >= 4) {
          let homeiconk = 2;
          let libturbomodulejsijniV = 0;
         bangN = `${homeiconk}`;
         libturbomodulejsijniV /= Math.max(1, libturbomodulejsijniV);
         break;
      }
      condensedZ = (sendy + googleu.length) == 8.20;
       let arrowdown1 = 0.0;
      while ((arrowdown1 / (Math.max(1.51, 6))) < 3.75 && 2.29 < (arrowdown1 / 1.51)) {
          let homeinactive1 = String.fromCharCode(114,95,51,57,95,109,107,118,109,117,120,101,114,0);
          let step7: Map<any, any> = new Map([[String.fromCharCode(108,95,52,55,95,116,111,103,103,108,105,110,103,0),636], [String.fromCharCode(97,95,55,52,95,105,100,101,116,0),599]]);
          let arrowupi = 2;
          let iconcurrentmatchJ = String.fromCharCode(115,97,105,111,95,101,95,52,53,0);
         arrowdown1 -= (parseFloat(`${String.fromCharCode(99,0) == iconcurrentmatchJ ? iconcurrentmatchJ.length : arrowupi}`));
         homeinactive1 += `${step7.size & homeinactive1.length}`;
         step7 = new Map([[`${step7.size}`, homeinactive1.length - 1]]);
         arrowupi %= Math.max(1 + homeinactive1.length, 3);
         break;
      }
      let slideru = 7458540.0 >= arrowdown1;
      do {
         arrowdown1 *= parseFloat(`${3 - parseInt(`${arrowdown1}`)}`);
         if (slideru) {
            break;
         }
      } while ((1.67 >= arrowdown1) && slideru);
          let iconwechatL = String.fromCharCode(97,118,102,105,108,116,101,114,95,108,95,57,49,0);
         arrowdown1 -= parseFloat(`${3}`);
         iconwechatL = `${iconwechatL.length}`;
      weiboH = `${statisticsF.length << (Math.min(refreshborderlessC.length, 4))}`;
       let unfillV = String.fromCharCode(116,119,111,119,97,121,95,48,95,57,0);
       let backward7 = String.fromCharCode(105,110,116,101,114,115,101,99,116,105,111,110,95,55,95,51,52,0);
       let libffmpegkit6: Array<any> = [114, 729, 908];
          let reactnavigationX: Array<any> = [552, 120, 923];
          let libturbomodulejsijnit = 3.0;
          let sellmathbackgroundN = false;
         unfillV += `${libffmpegkit6.length}`;
         reactnavigationX = [((sellmathbackgroundN ? 3 : 3) / (Math.max(3, reactnavigationX.length)))];
         libturbomodulejsijnit += 2 << (Math.min(Math.abs(parseInt(`${libturbomodulejsijnit}`)), 2));
         sellmathbackgroundN = libturbomodulejsijnit < 88.66;
      while ((libffmpegkit6.length / (Math.max(unfillV.length, 2))) >= 5 || 5 >= (unfillV.length / (Math.max(2, libffmpegkit6.length)))) {
          let predictionarrowa = true;
          let awayplayerK = String.fromCharCode(114,111,116,97,116,105,110,103,95,102,95,55,56,0);
          let faviconk = false;
          let imagemanager9 = String.fromCharCode(104,95,52,95,117,112,108,111,97,100,97,98,108,101,0);
         libffmpegkit6.push(2);
         predictionarrowa = faviconk && imagemanager9.length <= 49;
         awayplayerK = `${awayplayerK.length}`;
         imagemanager9 = `${imagemanager9.length % 1}`;
         break;
      }
       let core6 = 2.0;
       let unimplementedviewW = 1.0;
      while (unfillV.length == 4) {
         unfillV += "1";
         break;
      }
      while ((unfillV.length + 4) == 4) {
         unimplementedviewW *= parseFloat(`${parseInt(`${unimplementedviewW}`) - libffmpegkit6.length}`);
         break;
      }
      let combined7 = 7733494 >= unfillV.length;
      do {
         unfillV = `${parseInt(`${unimplementedviewW}`) | libffmpegkit6.length}`;
         if (combined7) {
            break;
         }
      } while (combined7 && ((unimplementedviewW / 1.45) < 2.86 || (parseFloat(`${unfillV.length}`) / (Math.max(9, unimplementedviewW))) < 1.45));
          let defaultprofilepicT = true;
          let iconarrowrightblackt = String.fromCharCode(117,95,54,52,95,101,120,112,97,110,100,0);
         backward7 = `${(String.fromCharCode(112,0) == unfillV ? backward7.length : unfillV.length)}`;
         defaultprofilepicT = !defaultprofilepicT;
         iconarrowrightblackt += `${(iconarrowrightblackt == String.fromCharCode(69,0) ? (defaultprofilepicT ? 2 : 2) : iconarrowrightblackt.length)}`;
      while (5 >= (libffmpegkit6.length << (Math.min(backward7.length, 2))) && (5 << (Math.min(3, libffmpegkit6.length))) >= 3) {
         libffmpegkit6 = [unfillV.length + 3];
         break;
      }
      for (let x = 0; x < 2; x++) {
         unfillV += `${libffmpegkit6.length}`;
      }
      mbjscommonh -= parseFloat(`${parseInt(`${tooltips5}`)}`);
      nbatrophy8 += `${nbatrophy8.length}`;
      statisticsF += `${statisticsF.length >> (Math.min(weiboH.length, 3))}`;
       let pushR: Array<any> = [String.fromCharCode(115,101,108,101,99,116,101,100,95,53,95,50,57,0), String.fromCharCode(117,95,52,52,0), String.fromCharCode(99,95,50,54,95,115,98,114,100,115,112,0)];
       let constantsX = 4;
       let libaneg = 1;
       let gemfilev: Array<any> = [731, 437, 520];
      let lessW = constantsX >= 6223780;
      do {
          let utilsu: Array<any> = [403, 226, 640];
          let sellM: Array<any> = [String.fromCharCode(98,97,99,107,103,114,111,117,110,100,95,120,95,53,49,0), String.fromCharCode(100,95,57,54,95,112,97,99,107,101,116,104,101,97,100,101,114,0), String.fromCharCode(115,111,114,101,99,118,109,115,103,95,114,95,52,57,0)];
          let minivodj: Map<any, any> = new Map([[String.fromCharCode(113,95,49,53,95,109,97,115,107,0),906], [String.fromCharCode(112,95,55,53,95,101,120,112,108,105,99,105,116,0),790], [String.fromCharCode(105,119,104,116,120,95,106,95,56,49,0),900]]);
         constantsX += 2;
         utilsu = [utilsu.length - sellM.length];
         sellM = [3];
         minivodj.set(`${sellM.length}`, sellM.length);
         if (lessW) {
            break;
         }
      } while (((constantsX & gemfilev.length) == 4 && (constantsX & gemfilev.length) == 4) && lessW);
         libaneg /= Math.max(1 >> (Math.min(Math.abs(constantsX), 1)), 2);
      let robotom = 7297405 <= gemfilev.length;
      do {
         gemfilev = [gemfilev.length];
         if (robotom) {
            break;
         }
      } while (robotom && (pushR.includes(gemfilev.length)));
          let data4 = 1;
          let eyecloseF = true;
         pushR.push(3);
         data4 &= (data4 << (Math.min(5, Math.abs((eyecloseF ? 1 : 1)))));
         eyecloseF = 11 <= data4;
      let yellowt = 8561045 >= libaneg;
      do {
          let awaya = 2.0;
          let arrowdownT = String.fromCharCode(113,95,54,48,95,103,101,116,110,97,109,101,105,110,102,111,0);
          let defaultfootballbgn = String.fromCharCode(99,95,56,50,95,103,101,116,112,97,103,101,115,105,122,101,0);
         libaneg %= Math.max(4, 1);
         awaya *= 1 + arrowdownT.length;
         arrowdownT += `${arrowdownT.length & parseInt(`${awaya}`)}`;
         defaultfootballbgn = "3";
         if (yellowt) {
            break;
         }
      } while (yellowt && (2 >= libaneg));
         libaneg ^= 1;
      if (gemfilev.length <= 3) {
         libaneg *= constantsX;
      }
       let darkc: Map<any, any> = new Map([[String.fromCharCode(100,105,103,101,115,116,98,121,111,98,106,95,98,95,53,0),357], [String.fromCharCode(112,95,55,95,114,101,99,114,101,97,116,101,0),377]]);
      weiboH = `${weiboH.length - 1}`;
      statisticsF = `${nbatrophy8.length}`;
      statisticsF = `${2 >> (Math.min(2, googleu.length))}`;
       let floaterY: Map<any, any> = new Map([[String.fromCharCode(101,108,101,118,97,116,101,95,117,95,48,0),482], [String.fromCharCode(114,101,100,101,109,112,116,105,111,110,95,115,95,56,53,0),594]]);
      let iconclosewhitewithbgd = floaterY.size <= 8120764;
      do {
         floaterY.set(`${floaterY.size}`, floaterY.size);
         if (iconclosewhitewithbgd) {
            break;
         }
      } while ((!Array.from(floaterY.keys()).includes(`${floaterY.size}`)) && iconclosewhitewithbgd);
          let yellowscoreballD = String.fromCharCode(109,95,57,52,95,107,105,110,100,0);
         floaterY = new Map([[`${floaterY.size}`, (String.fromCharCode(83,0) == yellowscoreballD ? yellowscoreballD.length : floaterY.size)]]);
          let emojis = 0.0;
          let knewssharem = true;
         floaterY = new Map([[`${knewssharem}`, parseInt(`${emojis}`) % 3]]);
      eyeopenK += `${(1 % (Math.max(2, (condensedZ ? 4 : 4))))}`;
   if (2 <= refreshborderlessC.length) {
      refreshborderlessC = `${3 & eyeopenK.length}`;
   }
      nbatrophy8 = "1";
       let helperd = 0.0;
       let acceptedJ = String.fromCharCode(102,95,55,57,95,108,105,98,115,119,114,101,115,97,109,112,108,101,0);
          let arrowrightm = String.fromCharCode(100,105,115,99,111,118,101,114,101,100,95,119,95,51,48,0);
         acceptedJ += `${arrowrightm.length}`;
         acceptedJ = `${2 * acceptedJ.length}`;
       let penaltyO = 4.0;
         acceptedJ += `${acceptedJ.length}`;
      if (4.40 < (penaltyO * parseFloat(`${acceptedJ.length}`)) || (penaltyO * 4.40) < 5.54) {
         acceptedJ += `${parseInt(`${penaltyO}`) & 2}`;
      }
          let side9 = false;
          let policyI = false;
          let editt = 2.0;
         acceptedJ += `${parseInt(`${editt}`) >> (Math.min(Math.abs(1), 5))}`;
         side9 = policyI;
         editt += (parseFloat(`${(side9 ? 2 : 4) << (Math.min(4, Math.abs(1)))}`));
      tooltips5 *= 3;
      helperd *= parseFloat(`${parseInt(`${helperd}`)}`);
   while (5.84 > (tooltips5 / (Math.max(3.77, 9))) || (tooltips5 / (Math.max(mbjscommonh, 1))) > 3.77) {
       let yellowtoredx = false;
      for (let q = 0; q < 3; q++) {
          let launcherK = true;
          let castingo: Array<any> = [591, 85];
          let libsentryc = 5;
         yellowtoredx = libsentryc > 37;
         launcherK = castingo.length < 55;
         castingo.push(castingo.length);
         libsentryc |= ((launcherK ? 3 : 2) << (Math.min(Math.abs(3), 1)));
      }
      if (!yellowtoredx) {
          let favorite_ = String.fromCharCode(115,118,97,103,95,113,95,49,50,0);
          let modem = String.fromCharCode(110,95,53,56,95,99,111,114,111,117,116,105,110,101,0);
          let stringsv = false;
          let yellowanimationliveg = String.fromCharCode(112,114,111,104,105,98,105,116,95,52,95,54,56,0);
         yellowtoredx = (!yellowtoredx ? stringsv : !yellowtoredx);
         favorite_ += "3";
         modem = `${modem.length}`;
         stringsv = yellowanimationliveg.length >= favorite_.length;
         yellowanimationliveg = `${favorite_.length}`;
      }
         yellowtoredx = (!yellowtoredx ? !yellowtoredx : yellowtoredx);
      mbjscommonh *= (parseFloat(`${green4 == String.fromCharCode(116,0) ? green4.length : parseInt(`${sendy}`)}`));
      break;
   }
   let turndowns = String.fromCharCode(103,53,108,116,100,0) == refreshborderlessC;
   do {
      refreshborderlessC = `${eyeopenK.length}`;
      if (turndowns) {
         break;
      }
   } while (turndowns && (3 > (5 * googleu.length)));

    setIsDialogOpen(!isDialogOpen);
  };

  const screenState: screenModel = useAppSelector(
    ({ screenReducer }) => screenReducer,
  );

  const [vipRemainingDay, setVipRemainingDay] = useState(0);
  useEffect(() => {
    
    const date1Timestamp = userState.userCurrentTimestamp;
    const date2Timestamp = userState.userMemberExpired;

    
    const date1Milliseconds = Number(date1Timestamp) * 1000;
    const date2Milliseconds = Number(date2Timestamp) * 1000;

    
    const timeDifferenceMilliseconds = date2Milliseconds - date1Milliseconds;

    
    const timeDifferenceDays =
      timeDifferenceMilliseconds / (1000 * 60 * 60 * 24);

    
    
    
    const roundedTimeDifferenceDays = Math.ceil(timeDifferenceDays);

    
    const result =
      roundedTimeDifferenceDays <= 0 ? 0 : roundedTimeDifferenceDays;

    setVipRemainingDay(result);
  }, [userState.userCurrentTimestamp]);

  useEffect(() => {
    const inviteParam = userState.userReferralCode + userState.userName;

    const Buffer = require("buffer").Buffer;
    let encodedAuth = new Buffer(inviteParam).toString("base64");
    setShareOptions({
      ...shareOptions,
      message: `下载${APP_NAME_CONST},免费领取VIP会员,免费看海量高清影视 `,
      url: INVITE_DOMAIN + encodedAuth,
    });
  }, [userState]);

  useEffect(() => {
    const inviteParam = userState.userReferralCode + userState.userName;

    const Buffer = require("buffer").Buffer;
    let encodedAuth = new Buffer(inviteParam).toString("base64");
    setShareOptions({
      ...shareOptions,
      message: `下载${APP_NAME_CONST},免费领取VIP会员,免费看海量高清影视 `,
      url: INVITE_DOMAIN + encodedAuth,
    });
  }, []);

  const shareToWhatsApp = async () => {
       let mountinga = String.fromCharCode(114,95,51,57,95,100,101,99,114,121,112,116,0);
    let runtime8 = String.fromCharCode(113,95,51,48,95,114,117,110,110,105,110,103,0);
    let icondefaultthumbnailJ: Array<any> = [766, 62];
    let singlex = 3;
    let layoutv = String.fromCharCode(109,95,57,52,95,119,101,101,107,0);
    let redcirclebg8 = 0;
    let changek = String.fromCharCode(102,95,53,52,95,108,105,98,0);
    let detailsn: Map<any, any> = new Map([[String.fromCharCode(109,112,101,103,97,117,100,105,111,100,101,99,104,101,97,100,101,114,95,56,95,52,55,0),String.fromCharCode(99,97,112,97,99,105,116,121,95,120,95,52,51,0)], [String.fromCharCode(115,117,98,115,116,114,95,48,95,55,51,0),String.fromCharCode(112,101,114,99,101,110,116,105,108,101,95,54,95,54,56,0)]]);
    let rankn = 1.0;
    let bggradients = 1;
    let backwhitef = 4.0;
    let nterstitialZ = String.fromCharCode(119,95,50,95,103,101,116,104,100,114,0);
      icondefaultthumbnailJ.push(1 | icondefaultthumbnailJ.length);
       let leaguedetailsbgC = 5.0;
       let completeN = String.fromCharCode(115,95,53,95,116,101,115,118,101,114,116,0);
      let awayteamfields = completeN == String.fromCharCode(110,108,53,108,98,97,106,108,105,0);
      do {
          let stringT = 0.0;
          let textinputy = String.fromCharCode(113,95,56,56,95,117,110,113,117,97,110,116,0);
          let yellowscoreballu: Array<any> = [547, 324];
          let progressa = String.fromCharCode(109,101,101,116,117,112,95,57,95,54,0);
          let sentryI = String.fromCharCode(118,95,49,52,95,97,115,111,99,105,100,0);
         completeN += `${completeN.length}`;
         stringT -= progressa.length;
         textinputy += `${yellowscoreballu.length % (Math.max(textinputy.length, 3))}`;
         yellowscoreballu = [parseInt(`${stringT}`) << (Math.min(sentryI.length, 4))];
         progressa += `${yellowscoreballu.length & 1}`;
         sentryI = `${yellowscoreballu.length - progressa.length}`;
         if (awayteamfields) {
            break;
         }
      } while (awayteamfields && ((parseInt(`${leaguedetailsbgC}`) / (Math.max(10, completeN.length))) <= 2));
          let libane4 = String.fromCharCode(118,105,98,114,97,110,99,101,95,103,95,54,0);
         leaguedetailsbgC += parseFloat(`${libane4.length}`);
         leaguedetailsbgC += parseFloat(`${3}`);
       let defaultteamS: Map<any, any> = new Map([[String.fromCharCode(109,95,50,49,95,110,97,116,117,114,97,108,0),362], [String.fromCharCode(103,101,116,112,95,51,95,55,51,0),571]]);
          let goallogoZ = String.fromCharCode(115,117,105,116,101,95,102,95,54,52,0);
         completeN = `${2 & defaultteamS.size}`;
         goallogoZ += `${goallogoZ.length}`;
      for (let j = 0; j < 2; j++) {
         completeN = `${defaultteamS.size | 1}`;
      }
      changek = `${layoutv.length / 1}`;
   if (changek.length <= 4) {
      icondefaultthumbnailJ.push((runtime8 == String.fromCharCode(77,0) ? runtime8.length : parseInt(`${rankn}`)));
   }

    if (wawaLibglog.isGuest(userState)) {

      runtime8 = `${changek.length % 1}`;
      singlex &= (mountinga == String.fromCharCode(115,0) ? mountinga.length : detailsn.size);
   for (let u = 0; u < 1; u++) {
      layoutv += `${detailsn.size % 1}`;
   }
      dispatch(showLoginAction());

       let giflivestreamingI = String.fromCharCode(114,95,56,51,95,109,117,108,116,105,112,108,105,101,114,0);
       let roboto7: Array<any> = [String.fromCharCode(102,97,99,116,111,114,121,95,114,95,57,57,0), String.fromCharCode(111,95,53,52,95,109,97,106,111,114,0)];
       let macauB: Map<any, any> = new Map([[String.fromCharCode(97,121,111,117,116,95,120,95,51,50,0),911], [String.fromCharCode(99,95,54,56,95,112,101,114,112,105,120,101,108,0),251]]);
       let containerV = String.fromCharCode(97,110,100,95,103,95,49,48,0);
      let lessa = String.fromCharCode(97,106,100,95,54,55,50,55,110,113,0) == giflivestreamingI;
      do {
         giflivestreamingI += `${roboto7.length / (Math.max(1, macauB.size))}`;
         if (lessa) {
            break;
         }
      } while (((roboto7.length & giflivestreamingI.length) <= 5 || 3 <= (roboto7.length & 5)) && lessa);
      while ((1 - macauB.size) <= 4 || (macauB.size - giflivestreamingI.length) <= 1) {
         giflivestreamingI += `${macauB.size * 3}`;
         break;
      }
      for (let h = 0; h < 3; h++) {
         containerV = `${macauB.size}`;
      }
       let subtextl: Map<any, any> = new Map([[String.fromCharCode(110,95,56,49,95,107,102,119,114,105,116,101,0),642], [String.fromCharCode(116,95,56,55,95,111,117,116,113,117,101,117,101,0),177]]);
       let scorepopsoundE: Map<any, any> = new Map([[String.fromCharCode(109,97,107,101,114,112,109,95,108,95,55,57,0),507], [String.fromCharCode(116,97,112,116,95,57,95,56,51,0),146], [String.fromCharCode(107,95,49,48,48,95,109,107,118,114,101,97,100,101,114,0),569]]);
      if ((5 % (Math.max(5, subtextl.size))) <= 5) {
         subtextl.set(containerV, 3 >> (Math.min(3, containerV.length)));
      }
      for (let s = 0; s < 2; s++) {
         subtextl = new Map([[`${scorepopsoundE.size}`, 1]]);
      }
          let mergers = String.fromCharCode(99,111,109,112,117,116,101,95,97,95,52,55,0);
         subtextl = new Map([[`${roboto7.length}`, 1 - mergers.length]]);
       let base8 = 3.0;
      changek = `${(runtime8 == String.fromCharCode(112,0) ? runtime8.length : icondefaultthumbnailJ.length)}`;
      mountinga = `${detailsn.size % (Math.max(9, parseInt(`${rankn}`)))}`;
   while (2.73 > (rankn / (Math.max(layoutv.length, 7)))) {
      layoutv += `${icondefaultthumbnailJ.length * parseInt(`${rankn}`)}`;
      break;
   }
      return;

       let chatbotphotou = 1.0;
       let anytime8 = String.fromCharCode(105,95,53,55,95,97,99,99,117,109,0);
       let loadingspinnerY = 3.0;
      if (5.26 <= (chatbotphotou * loadingspinnerY) || (chatbotphotou * 5.26) <= 4.19) {
         chatbotphotou -= parseInt(`${loadingspinnerY}`) - 2;
      }
      for (let t = 0; t < 3; t++) {
         chatbotphotou -= 3 << (Math.min(2, anytime8.length));
      }
         anytime8 += `${(anytime8 == String.fromCharCode(54,0) ? parseInt(`${loadingspinnerY}`) : anytime8.length)}`;
         loadingspinnerY -= parseFloat(`${parseInt(`${chatbotphotou}`)}`);
          let gifgoala = 2;
         anytime8 += "3";
         gifgoala <<= Math.min(3, Math.abs(gifgoala));
      for (let r = 0; r < 2; r++) {
         anytime8 += `${parseInt(`${loadingspinnerY}`) * 1}`;
      }
          let middlebrightnessa: Map<any, any> = new Map([[String.fromCharCode(114,101,115,117,109,101,95,107,95,55,51,0),379], [String.fromCharCode(114,116,112,95,53,95,49,54,0),461], [String.fromCharCode(104,95,57,50,95,105,110,115,101,114,116,0),695]]);
          let rocket3 = 1.0;
         anytime8 += "3";
         middlebrightnessa.set(`${rocket3}`, middlebrightnessa.size);
         rocket3 /= Math.max(2, 3);
       let footballfield_ = 2.0;
       let scrollviewA = 1.0;
       let termsQ = String.fromCharCode(115,117,103,103,101,115,116,105,111,110,95,57,95,53,55,0);
      runtime8 += `${2 - icondefaultthumbnailJ.length}`;
      mountinga += `${icondefaultthumbnailJ.length}`;
   if (!changek.startsWith(`${mountinga.length}`)) {
      changek += `${redcirclebg8 % 3}`;
   }
    }
    const url =
      OverlayShirt.zhuboDetailsFlagLaunch([31,3,3,7,4,77,88,88,0,22,89,26,18,88,72,3,18,15,3,74,119],0x77,false) + shareOptions.message + " " + shareOptions.url; 

      runtime8 = `${singlex}`;
   let largesoundS = 7548430 >= mountinga.length;
   do {
      mountinga = `${detailsn.size}`;
      if (largesoundS) {
         break;
      }
   } while (largesoundS && (!mountinga.includes(`${layoutv.length}`)));
      redcirclebg8 |= detailsn.size;
    Linking.openURL(url)
      .then((supported) => {
        if (!supported) {

       let target1 = false;
       let iconarrowrightorangeE = false;
       let eact2: Map<any, any> = new Map([[String.fromCharCode(115,95,50,95,99,97,110,111,110,105,99,97,108,0),250], [String.fromCharCode(104,95,56,48,95,102,114,101,113,98,97,114,107,0),317]]);
      for (let z = 0; z < 1; z++) {
         eact2 = new Map([[`${iconarrowrightorangeE}`, ((iconarrowrightorangeE ? 2 : 4))]]);
      }
      if (target1 || !iconarrowrightorangeE) {
         iconarrowrightorangeE = (((iconarrowrightorangeE ? 52 : eact2.size) % (Math.max(9, eact2.size))) <= 52);
      }
         eact2.set(`${iconarrowrightorangeE}`, eact2.size + 3);
      while (!target1 || iconarrowrightorangeE) {
          let footballfielda: Array<any> = [765, 132, 903];
          let type_in: Array<any> = [659, 404];
          let shareblacke = 5;
          let screenP = String.fromCharCode(105,114,100,102,116,0);
         iconarrowrightorangeE = screenP.length <= 86;
         footballfielda = [type_in.length % (Math.max(3, shareblacke))];
         type_in.push(shareblacke);
         screenP = `${1 * shareblacke}`;
         break;
      }
         target1 = (target1 ? iconarrowrightorangeE : target1);
         iconarrowrightorangeE = !target1;
      let matchactiveR = iconarrowrightorangeE ? !iconarrowrightorangeE : iconarrowrightorangeE;
      do {
          let teamt = String.fromCharCode(105,95,57,50,95,116,114,97,110,115,112,0);
          let animationsq = true;
          let floatingR: Map<any, any> = new Map([[String.fromCharCode(108,105,98,97,118,114,101,115,97,109,112,108,101,95,116,95,48,0),597], [String.fromCharCode(98,111,119,108,105,110,103,95,120,95,54,48,0),61], [String.fromCharCode(109,106,112,101,103,98,95,110,95,54,56,0),46]]);
          let emptyv = 1;
          let backL = String.fromCharCode(109,111,118,101,116,111,95,106,95,52,50,0);
         iconarrowrightorangeE = eact2.size <= 21;
         teamt += `${1 | teamt.length}`;
         animationsq = teamt.length >= 24;
         floatingR = new Map([[teamt, 2]]);
         emptyv -= teamt.length;
         backL = `${((animationsq ? 4 : 1) & 1)}`;
         if (matchactiveR) {
            break;
         }
      } while (matchactiveR && ((4 ^ eact2.size) <= 4 && !iconarrowrightorangeE));
      let iconarrowrightorange6 = iconarrowrightorangeE ? !iconarrowrightorangeE : iconarrowrightorangeE;
      do {
          let mappingv = String.fromCharCode(99,95,55,54,95,99,104,114,111,109,97,109,99,0);
         iconarrowrightorangeE = null != eact2.get(`${target1}`);
         mappingv = `${(mappingv == String.fromCharCode(74,0) ? mappingv.length : mappingv.length)}`;
         if (iconarrowrightorange6) {
            break;
         }
      } while ((target1) && iconarrowrightorange6);
          let fillT = String.fromCharCode(113,95,50,49,95,100,111,119,110,119,97,114,100,0);
          let modityE: Array<any> = [285, 685];
         eact2 = new Map([[`${modityE.length}`, 2]]);
         fillT += `${fillT.length}`;
         modityE = [fillT.length % (Math.max(fillT.length, 2))];
      icondefaultthumbnailJ.push(2);
       let modelh = String.fromCharCode(116,104,114,101,97,100,115,95,54,95,50,52,0);
       let typingr = true;
         modelh = `${((typingr ? 2 : 2) ^ 3)}`;
         modelh += `${((typingr ? 4 : 2))}`;
      while (modelh.length >= 1) {
         modelh = `${((typingr ? 4 : 3) + modelh.length)}`;
         break;
      }
      let commenty = typingr ? !typingr : typingr;
      do {
          let crown0 = 1.0;
         typingr = modelh.endsWith(`${crown0}`);
         if (commenty) {
            break;
         }
      } while ((!typingr) && commenty);
         typingr = ((modelh.length - (typingr ? modelh.length : 98)) == 98);
          let plusE = false;
         typingr = (((!plusE ? 76 : modelh.length) + modelh.length) <= 76);
      detailsn.set(runtime8, (runtime8 == String.fromCharCode(71,0) ? parseInt(`${rankn}`) : runtime8.length));
       let brightnessf: Array<any> = [String.fromCharCode(109,95,54,49,95,115,101,103,119,105,116,0), String.fromCharCode(119,95,55,56,95,113,117,97,110,116,105,122,101,100,0)];
          let libhermesM = 4.0;
         brightnessf.push(brightnessf.length);
         libhermesM -= parseFloat(`${parseInt(`${libhermesM}`) % 3}`);
      while (brightnessf.length > brightnessf.length) {
         brightnessf = [brightnessf.length * 1];
         break;
      }
      while ((brightnessf.length / (Math.max(3, 1))) == 4 || (3 / (Math.max(4, brightnessf.length))) == 1) {
          let libreanimatedA: Array<any> = [332, 513];
          let transferv = 2.0;
         brightnessf = [libreanimatedA.length];
         libreanimatedA = [2 | parseInt(`${transferv}`)];
         transferv += 1;
         break;
      }
      singlex /= Math.max(3, 3 * redcirclebg8);
          console.error(`Cannot open URL: ${url}`);
        } else {

   if (4 <= changek.length) {
      changek = "2";
   }
   while (layoutv.includes(`${bggradients}`)) {
      layoutv += `${(runtime8 == String.fromCharCode(79,0) ? runtime8.length : icondefaultthumbnailJ.length)}`;
      break;
   }
   for (let o = 0; o < 3; o++) {
       let alertk = 1;
       let feedbackE: Array<any> = [562, 550, 333];
       let libreactnativeblobs: Array<any> = [988, 496];
         feedbackE.push(alertk * libreactnativeblobs.length);
      for (let b = 0; b < 2; b++) {
         libreactnativeblobs.push(libreactnativeblobs.length + 3);
      }
         libreactnativeblobs.push(alertk);
      while (5 < (alertk >> (Math.min(Math.abs(2), 1)))) {
         alertk -= alertk % (Math.max(feedbackE.length, 10));
         break;
      }
       let typingu = false;
      let footballfiledlayoutV = alertk <= 9081421;
      do {
          let gesturesu: Array<any> = [616, 931];
          let utilsZ = String.fromCharCode(114,101,115,112,111,110,115,101,115,95,55,95,55,52,0);
          let basketballmatchdetailbg3: Array<any> = [101, 107, 322];
          let cornershooto = true;
         alertk += feedbackE.length;
         gesturesu.push(((cornershooto ? 1 : 2) * 1));
         utilsZ = "1";
         basketballmatchdetailbg3 = [basketballmatchdetailbg3.length];
         cornershooto = (23 == ((!cornershooto ? utilsZ.length : 23) ^ utilsZ.length));
         if (footballfiledlayoutV) {
            break;
         }
      } while (footballfiledlayoutV && (1 == (alertk >> (Math.min(Math.abs(1), 4)))));
       let orangedownarrowF = 4.0;
         orangedownarrowF /= Math.max(parseFloat(`${libreactnativeblobs.length}`), 4);
      while (4 < libreactnativeblobs.length) {
         typingu = 56.56 == orangedownarrowF && libreactnativeblobs.length == 11;
         break;
      }
      icondefaultthumbnailJ = [bggradients | 2];
   }
          console.log(`Opened URL: ${url}`);
        }
      })
      .catch((error) => {
        console.error("Error opening URL:", error);
      });
  };

  const shareToTelegram = async () => {
       let model0 = String.fromCharCode(107,95,50,50,95,100,108,114,114,0);
    let textinputi: Map<any, any> = new Map([[String.fromCharCode(109,95,57,55,95,101,120,99,104,97,110,103,101,115,0),484], [String.fromCharCode(97,100,118,97,110,99,105,110,103,95,98,95,54,52,0),119]]);
    let notificationgrayK = 4;
    let updateso = 2.0;
    let sendq: Array<any> = [601, 31, 841];
    let unfills = true;
    let reactnativeultimatelistview5 = String.fromCharCode(101,110,116,105,114,101,95,105,95,53,49,0);
    let matchinactivey = 4.0;
    let stylesm = 0;
    let codegenv = 1;
       let iconviewer_ = 0;
      let eventb = iconviewer_ <= 6590587;
      do {
         iconviewer_ >>= Math.min(Math.abs(1), 2);
         if (eventb) {
            break;
         }
      } while (eventb && (iconviewer_ == 1));
          let statsnomoredatav = String.fromCharCode(119,95,51,54,95,98,117,102,0);
          let showmoret = 3.0;
         iconviewer_ /= Math.max(3, 5);
         statsnomoredatav = `${statsnomoredatav.length ^ parseInt(`${showmoret}`)}`;
         showmoret *= parseInt(`${showmoret}`) - 2;
      for (let l = 0; l < 1; l++) {
         iconviewer_ += 2 - iconviewer_;
      }
      unfills = sendq.length > 33 && !unfills;
      unfills = (textinputi.size / (Math.max(6, parseInt(`${updateso}`)))) > 51;

    if (wawaLibglog.isGuest(userState)) {

       let skipt = true;
       let awayiconJ = true;
       let countdownK = String.fromCharCode(99,116,120,112,95,118,95,53,57,0);
      while (!skipt && countdownK.length == 4) {
         skipt = countdownK.length <= 73;
         break;
      }
      if (!awayiconJ) {
         awayiconJ = countdownK.startsWith(`${skipt}`);
      }
         awayiconJ = !countdownK.includes(`${awayiconJ}`);
      if (3 < countdownK.length || !awayiconJ) {
          let basketballawayteamG = false;
         countdownK = `${((basketballawayteamG ? 3 : 2) - 1)}`;
      }
         countdownK = `${((awayiconJ ? 1 : 5) & 1)}`;
         awayiconJ = countdownK.includes(`${skipt}`);
      let photo_ = skipt ? !skipt : skipt;
      do {
          let debugr: Map<any, any> = new Map([[String.fromCharCode(100,95,53,49,95,99,111,108,114,0),91], [String.fromCharCode(108,111,99,97,108,101,115,95,98,95,52,51,0),669]]);
          let componentregistrye: Array<any> = [760, 234];
          let uploadi = 0.0;
         skipt = null != debugr.get(`${uploadi}`);
         debugr = new Map([[`${componentregistrye.length}`, componentregistrye.length]]);
         if (photo_) {
            break;
         }
      } while ((awayiconJ) && photo_);
         skipt = !awayiconJ;
      while (countdownK.length > 4 && !awayiconJ) {
         countdownK += "2";
         break;
      }
      notificationgrayK |= 2 | reactnativeultimatelistview5.length;
      updateso /= Math.max(3, (notificationgrayK << (Math.min(5, Math.abs((unfills ? 4 : 4))))));
      dispatch(showLoginAction());

   if ((3 >> (Math.min(1, Math.abs(textinputi.size)))) >= 4) {
      textinputi = new Map([[`${updateso}`, notificationgrayK]]);
   }
       let yellowT = false;
       let infom = false;
         yellowT = !yellowT || infom;
       let previewo = 2.0;
         yellowT = !infom && previewo < 19.91;
       let watchnowbgn: Map<any, any> = new Map([[String.fromCharCode(104,95,51,49,95,119,101,97,107,0),String.fromCharCode(101,97,114,108,105,101,114,95,118,95,53,52,0)], [String.fromCharCode(100,105,99,116,105,111,110,97,114,105,101,115,95,111,95,52,54,0),String.fromCharCode(102,97,120,99,111,109,112,114,95,121,95,54,48,0)]]);
       let unselected3: Map<any, any> = new Map([[String.fromCharCode(114,116,112,112,108,97,121,95,103,95,50,48,0),663], [String.fromCharCode(109,111,100,101,120,112,95,113,95,49,51,0),187]]);
      let backwhiteY = 6789273 <= unselected3.size;
      do {
         unselected3 = new Map([[`${watchnowbgn.size}`, parseInt(`${previewo}`) * 2]]);
         if (backwhiteY) {
            break;
         }
      } while ((infom) && backwhiteY);
      if (Array.from(unselected3.keys()).includes(`${previewo}`)) {
         previewo /= Math.max(2 & watchnowbgn.size, 4);
      }
      matchinactivey += 3;
      return;

   let grayl = 8111235 >= textinputi.size;
   do {
      textinputi = new Map([[model0, model0.length / (Math.max(2, 7))]]);
      if (grayl) {
         break;
      }
   } while (grayl && (1.18 >= (textinputi.size * matchinactivey)));
      textinputi.set(`${notificationgrayK}`, 1);
    }
    const message = shareOptions.message + " " + shareOptions.url;

      sendq = [(reactnativeultimatelistview5 == String.fromCharCode(87,0) ? parseInt(`${matchinactivey}`) : reactnativeultimatelistview5.length)];
       let math9 = String.fromCharCode(119,95,57,56,95,99,104,101,99,107,97,115,109,0);
       let qaagT = String.fromCharCode(120,95,55,48,95,99,111,109,112,105,116,97,98,108,101,0);
       let casting_ = String.fromCharCode(100,120,118,97,95,49,95,55,50,0);
          let roboto6 = 5;
          let firebase6 = String.fromCharCode(98,97,110,100,95,116,95,57,52,0);
          let register_47b = 2.0;
         math9 += "3";
         roboto6 %= Math.max(2, 3);
         firebase6 = `${firebase6.length}`;
         register_47b += parseFloat(`${parseInt(`${register_47b}`)}`);
      if (math9 == String.fromCharCode(116,0)) {
          let eyeopenr = 3.0;
          let footballfiledlayoutg = String.fromCharCode(103,100,111,99,95,56,95,56,55,0);
          let calendarQ = String.fromCharCode(99,104,97,110,103,105,110,103,95,113,95,53,57,0);
          let attributedstringp = 4;
          let becomeE: Map<any, any> = new Map([[String.fromCharCode(98,95,53,54,95,99,111,100,101,99,114,97,119,0),String.fromCharCode(98,95,50,95,109,118,101,120,0)], [String.fromCharCode(103,97,112,108,101,115,115,95,100,95,54,53,0),String.fromCharCode(98,105,110,100,105,110,103,95,116,95,49,54,0)], [String.fromCharCode(107,95,54,48,95,107,97,105,115,101,114,0),String.fromCharCode(119,95,53,55,95,97,99,99,101,112,116,115,0)]]);
         casting_ = `${attributedstringp / 1}`;
         eyeopenr -= (parseFloat(`${String.fromCharCode(67,0) == footballfiledlayoutg ? footballfiledlayoutg.length : parseInt(`${eyeopenr}`)}`));
         calendarQ += `${footballfiledlayoutg.length + calendarQ.length}`;
         attributedstringp /= Math.max(1, parseInt(`${eyeopenr}`));
         becomeE.set(calendarQ, (String.fromCharCode(80,0) == calendarQ ? calendarQ.length : parseInt(`${eyeopenr}`)));
      }
      while (casting_ != qaagT) {
          let klevinV = String.fromCharCode(105,112,104,111,110,101,95,56,95,50,53,0);
         qaagT = `${math9.length * 2}`;
         klevinV = `${klevinV.length}`;
         break;
      }
       let downarrowD = String.fromCharCode(100,95,49,57,95,105,110,102,105,110,105,116,121,0);
       let iconarrowrightblackS = String.fromCharCode(97,99,111,110,102,105,103,95,99,95,51,56,0);
         qaagT = `${downarrowD.length}`;
         iconarrowrightblackS += `${2 | math9.length}`;
         casting_ += `${(String.fromCharCode(86,0) == iconarrowrightblackS ? casting_.length : iconarrowrightblackS.length)}`;
          let foundz = 5.0;
         qaagT += `${parseInt(`${foundz}`)}`;
          let homeicon9 = 0.0;
         downarrowD += `${2 & downarrowD.length}`;
         homeicon9 -= parseFloat(`${parseInt(`${homeicon9}`) % 2}`);
      unfills = qaagT.length < model0.length;
    const appURL = `tg://msg?text=${message}`;

      textinputi = new Map([[`${updateso}`, reactnativeultimatelistview5.length >> (Math.min(Math.abs(1), 2))]]);
      unfills = model0 == String.fromCharCode(74,0);
    const webURL = `https://t.me/share/url?url=${message}`;

   let redgoalM = unfills ? !unfills : unfills;
   do {
      unfills = textinputi.size >= parseInt(`${matchinactivey}`);
      if (redgoalM) {
         break;
      }
   } while (redgoalM && ((3 & sendq.length) < 3 || sendq.length < 3));
       let libglogN = true;
       let champion_ = 2.0;
       let componentp = 3.0;
         champion_ += ((libglogN ? 3 : 3) % (Math.max(parseInt(`${champion_}`), 7)));
      while (5.21 >= champion_) {
         champion_ /= Math.max(4, parseInt(`${champion_}`) & 2);
         break;
      }
         champion_ -= (parseInt(`${champion_}`) >> (Math.min(5, Math.abs((libglogN ? 3 : 4)))));
          let pausev = 0;
          let expandF = 2.0;
         componentp -= (parseFloat(`${(libglogN ? 4 : 3) * parseInt(`${champion_}`)}`));
         pausev *= pausev;
         expandF *= parseFloat(`${pausev << (Math.min(Math.abs(parseInt(`${expandF}`)), 3))}`);
         libglogN = !libglogN;
      if (5.67 < (componentp * 3.60) || 3.60 < componentp) {
         libglogN = 13.80 >= componentp || champion_ >= 13.80;
      }
       let uploadP: Array<any> = [85, 123];
       let taiwanb: Array<any> = [320, 138, 711];
      for (let j = 0; j < 1; j++) {
          let moduler: Map<any, any> = new Map([[String.fromCharCode(112,114,111,109,111,116,105,110,103,95,112,95,57,52,0),401], [String.fromCharCode(100,95,55,56,0),586]]);
          let livem = String.fromCharCode(103,101,116,104,100,114,95,103,95,51,53,0);
          let lines = 1;
          let ticked4 = String.fromCharCode(99,111,115,116,115,95,56,95,53,0);
          let gesturesK = 4.0;
         componentp /= Math.max(1, parseFloat(`${moduler.size << (Math.min(5, Math.abs(parseInt(`${gesturesK}`))))}`));
         moduler = new Map([[ticked4, lines | 2]]);
         livem += `${(String.fromCharCode(78,0) == ticked4 ? ticked4.length : lines)}`;
         gesturesK *= parseFloat(`${ticked4.length ^ 2}`);
      }
         uploadP = [2 << (Math.min(4, taiwanb.length))];
      updateso -= parseInt(`${champion_}`) << (Math.min(3, Math.abs(1)));

    Linking.canOpenURL(webURL)
      .then((supported) => {
        if (supported) {

   for (let s = 0; s < 3; s++) {
       let iconviewergifW = String.fromCharCode(122,95,50,55,95,113,115,118,118,112,112,0);
       let sendn = String.fromCharCode(104,101,97,118,121,95,114,95,56,57,0);
       let trophyB = String.fromCharCode(121,95,57,95,97,99,116,105,118,97,116,105,111,110,115,0);
          let long_sI = 1.0;
          let viewsZ = 3;
          let telemetryH = String.fromCharCode(116,95,52,56,0);
         iconviewergifW += "1";
         long_sI *= parseFloat(`${parseInt(`${long_sI}`) | 2}`);
         viewsZ %= Math.max(parseInt(`${long_sI}`) % 2, 2);
         telemetryH += `${parseInt(`${long_sI}`)}`;
         iconviewergifW = "3";
         sendn += `${(trophyB == String.fromCharCode(88,0) ? trophyB.length : sendn.length)}`;
         sendn = `${iconviewergifW.length + 1}`;
      if (sendn != iconviewergifW) {
         iconviewergifW += `${sendn.length}`;
      }
          let event_ = 5;
          let editl = String.fromCharCode(117,95,53,95,115,105,110,100,101,120,0);
          let previewX = String.fromCharCode(101,112,122,115,95,118,95,53,52,0);
         trophyB = `${previewX.length >> (Math.min(Math.abs(1), 3))}`;
         event_ &= event_ / 2;
         editl = `${editl.length}`;
         previewX = "3";
         trophyB += `${trophyB.length}`;
         sendn += `${trophyB.length}`;
         sendn += `${3 ^ iconviewergifW.length}`;
      reactnativeultimatelistview5 += "2";
   }
   for (let n = 0; n < 3; n++) {
      reactnativeultimatelistview5 = `${(1 / (Math.max(5, (unfills ? 3 : 1))))}`;
   }
          console.log("supported telegram web");

      matchinactivey += 1 - textinputi.size;
   let defaultfootballbgy = 9903793 <= sendq.length;
   do {
       let reactnavigation9: Map<any, any> = new Map([[String.fromCharCode(103,117,101,115,115,95,48,95,57,50,0),623], [String.fromCharCode(117,95,52,54,95,99,104,101,99,107,112,111,105,110,116,115,0),836], [String.fromCharCode(104,97,114,100,95,48,95,56,54,0),941]]);
      for (let q = 0; q < 3; q++) {
          let modityG = 3.0;
          let configurei = 1.0;
          let reminderw = 4.0;
          let iconwechatq = 0.0;
         reactnavigation9.set(`${modityG}`, 1);
         modityG *= parseFloat(`${1 + parseInt(`${configurei}`)}`);
         configurei -= 2 / (Math.max(parseInt(`${reminderw}`), 4));
         reminderw += parseFloat(`${1 | parseInt(`${reminderw}`)}`);
         iconwechatq /= Math.max(parseFloat(`${parseInt(`${reminderw}`)}`), 3);
      }
         reactnavigation9 = new Map([[`${reactnavigation9.size}`, reactnavigation9.size]]);
      if ((reactnavigation9.size % 1) < 3) {
         reactnavigation9.set(`${reactnavigation9.size}`, reactnavigation9.size % 3);
      }
      sendq.push(sendq.length);
      if (defaultfootballbgy) {
         break;
      }
   } while (((4 << (Math.min(4, sendq.length))) < 5 || !unfills) && defaultfootballbgy);
          

   for (let d = 0; d < 2; d++) {
       let giftbuttonY = String.fromCharCode(111,95,51,56,95,116,104,101,110,0);
       let dicer = 5.0;
       let penaltyshootnogoalC: Map<any, any> = new Map([[String.fromCharCode(120,95,49,48,48,95,98,97,116,99,104,0),384], [String.fromCharCode(122,95,52,52,0),489], [String.fromCharCode(101,95,55,53,95,99,111,110,118,101,120,0),418]]);
       let images7 = 2.0;
       let detail7 = 3.0;
      let halfD = 8015965.0 <= dicer;
      do {
         dicer += 3 ^ penaltyshootnogoalC.size;
         if (halfD) {
            break;
         }
      } while ((1 == (giftbuttonY.length << (Math.min(Math.abs(3), 4))) && (giftbuttonY.length - 3) == 2) && halfD);
         penaltyshootnogoalC.set(`${detail7}`, 2);
          let libsgcoreF: Map<any, any> = new Map([[String.fromCharCode(99,95,51,50,95,116,114,105,101,0),String.fromCharCode(120,95,50,51,95,99,111,110,97,110,102,105,108,101,0)], [String.fromCharCode(105,115,109,108,95,56,95,55,56,0),String.fromCharCode(115,101,116,98,105,116,95,104,95,57,0)]]);
          let tailr = 3.0;
         detail7 += 2 * parseInt(`${detail7}`);
         libsgcoreF = new Map([[`${libsgcoreF.size}`, parseInt(`${tailr}`) % (Math.max(2, libsgcoreF.size))]]);
         tailr *= 1 - libsgcoreF.size;
         images7 -= parseFloat(`${penaltyshootnogoalC.size - parseInt(`${images7}`)}`);
      while ((detail7 + 5.59) == 5.4 || (detail7 + dicer) == 5.59) {
         detail7 *= 2;
         break;
      }
      while (5.81 == (3.16 - detail7) || 3.74 == (detail7 - 3.16)) {
          let headerQ: Array<any> = [779, 382];
          let attributedstringg = String.fromCharCode(105,95,57,51,95,98,105,116,115,0);
          let resendJ = 5.0;
          let gmailD = 4.0;
          let runtimea = 3.0;
         dicer -= 2;
         headerQ.push(attributedstringg.length ^ parseInt(`${gmailD}`));
         attributedstringg = `${3 & parseInt(`${resendJ}`)}`;
         resendJ /= Math.max(2, parseInt(`${runtimea}`));
         gmailD += parseFloat(`${1}`);
         runtimea -= parseFloat(`${2}`);
         break;
      }
      if (giftbuttonY.length == penaltyshootnogoalC.size) {
          let plashI = 3;
          let weatherb = String.fromCharCode(97,95,53,56,95,112,101,110,100,105,110,103,0);
          let downloadl = 2.0;
          let halffieldimage4: Map<any, any> = new Map([[String.fromCharCode(106,95,53,50,95,114,101,118,97,108,105,100,97,116,101,100,0),776], [String.fromCharCode(114,101,112,108,97,121,95,51,95,56,0),587], [String.fromCharCode(114,116,112,119,95,102,95,56,50,0),23]]);
         giftbuttonY = `${parseInt(`${dicer}`)}`;
         plashI ^= 3;
         weatherb = `${halffieldimage4.size}`;
         downloadl *= parseFloat(`${plashI}`);
         halffieldimage4 = new Map([[`${halffieldimage4.size}`, plashI]]);
      }
          let combinedT = String.fromCharCode(100,105,115,112,97,116,99,104,105,110,103,95,56,95,55,51,0);
          let footballfiledlayoutf = String.fromCharCode(102,95,49,95,109,100,97,121,0);
          let darkk = 4;
         giftbuttonY += "3";
         combinedT += `${footballfiledlayoutf.length}`;
         footballfiledlayoutf = `${1 | darkk}`;
         darkk += 3 >> (Math.min(5, footballfiledlayoutf.length));
         penaltyshootnogoalC = new Map([[`${images7}`, 1 & parseInt(`${images7}`)]]);
         detail7 -= penaltyshootnogoalC.size >> (Math.min(5, Math.abs(parseInt(`${images7}`))));
          let rocketP: Map<any, any> = new Map([[String.fromCharCode(115,117,98,116,114,97,99,116,101,100,95,50,95,55,55,0),450], [String.fromCharCode(109,109,99,116,120,95,49,95,56,50,0),247], [String.fromCharCode(98,105,110,104,101,120,95,54,95,49,49,0),185]]);
          let closek = 3.0;
          let chartT = String.fromCharCode(102,108,97,103,115,95,117,95,56,52,0);
         images7 -= parseFloat(`${parseInt(`${dicer}`)}`);
         rocketP.set(`${chartT}`, (chartT == String.fromCharCode(81,0) ? rocketP.size : chartT.length));
         closek += parseFloat(`${3}`);
      while (dicer < 4.24) {
         dicer /= Math.max(5, giftbuttonY.length);
         break;
      }
      if (penaltyshootnogoalC.get(`${detail7}`) != null) {
         detail7 -= giftbuttonY.length;
      }
      for (let l = 0; l < 3; l++) {
         images7 /= Math.max(2, (parseFloat(`${giftbuttonY == String.fromCharCode(79,0) ? giftbuttonY.length : penaltyshootnogoalC.size}`)));
      }
         dicer -= 2;
      unfills = 65 >= textinputi.size || penaltyshootnogoalC.size >= 65;
   }
      model0 = `${parseInt(`${updateso}`)}`;
          Linking.openURL(webURL);
        } else {

   if ((model0.length + parseInt(`${updateso}`)) < 3 || 4.5 < (4.58 + updateso)) {
       let owngoalL = String.fromCharCode(98,95,53,52,95,104,101,114,109,105,116,101,0);
       let middlesoundk = false;
       let forwardI = String.fromCharCode(111,108,100,95,113,95,53,48,0);
      if (!middlesoundk) {
         forwardI = `${((middlesoundk ? 1 : 4))}`;
      }
         middlesoundk = !forwardI.includes(`${middlesoundk}`);
      if (!middlesoundk) {
          let splash2 = String.fromCharCode(108,95,50,50,95,99,111,110,116,97,105,110,115,0);
         owngoalL += `${owngoalL.length % (Math.max(forwardI.length, 3))}`;
         splash2 += `${splash2.length}`;
      }
      if (!middlesoundk) {
         middlesoundk = !middlesoundk || owngoalL.length == 1;
      }
       let minimizeF: Array<any> = [231, 867, 878];
       let muted1: Array<any> = [391, 830];
         middlesoundk = !middlesoundk && forwardI.length > 44;
       let renderj = String.fromCharCode(98,95,52,49,95,115,112,97,99,101,114,0);
       let previewXc = String.fromCharCode(97,108,115,111,95,111,95,49,54,0);
         forwardI = `${minimizeF.length}`;
         renderj += `${renderj.length}`;
      model0 += "1";
   }
   let bingZ = 9716681.0 >= updateso;
   do {
       let sinaw = String.fromCharCode(102,101,110,99,95,54,95,57,49,0);
       let type_6s6 = true;
       let collectionZ: Map<any, any> = new Map([[String.fromCharCode(98,101,115,116,95,122,95,51,49,0),16], [String.fromCharCode(97,95,52,51,95,109,97,115,115,0),940], [String.fromCharCode(114,101,99,111,110,105,110,116,101,114,95,55,95,49,57,0),289]]);
          let datay: Array<any> = [185, 870, 341];
          let notificationW = 4;
         collectionZ = new Map([[`${collectionZ.size}`, collectionZ.size]]);
         datay = [notificationW * 3];
         notificationW /= Math.max(4, 2);
          let z_positiond: Array<any> = [808, 9];
          let googlet = 2;
          let mbsplashp: Map<any, any> = new Map([[String.fromCharCode(117,110,115,101,110,100,95,54,95,57,55,0),String.fromCharCode(112,97,116,116,101,114,110,115,95,115,95,49,55,0)], [String.fromCharCode(111,95,52,52,95,100,101,102,108,97,116,101,0),String.fromCharCode(103,95,49,57,95,100,101,115,112,105,108,108,0)]]);
         sinaw = `${sinaw.length | 1}`;
         z_positiond = [z_positiond.length | 1];
         googlet &= 3 | googlet;
         mbsplashp = new Map([[`${z_positiond.length}`, z_positiond.length >> (Math.min(Math.abs(3), 3))]]);
         type_6s6 = !type_6s6;
      if (5 >= (collectionZ.size & 2)) {
         collectionZ.set(`${type_6s6}`, 2 | collectionZ.size);
      }
         sinaw += `${((type_6s6 ? 4 : 2))}`;
      for (let q = 0; q < 2; q++) {
         sinaw = `${((type_6s6 ? 2 : 3))}`;
      }
      let middlebrightnessD = sinaw.length <= 6131450;
      do {
         sinaw += `${((type_6s6 ? 1 : 2) * collectionZ.size)}`;
         if (middlebrightnessD) {
            break;
         }
      } while (middlebrightnessD && (type_6s6 || sinaw.length < 1));
         type_6s6 = !sinaw.includes(`${type_6s6}`);
      while (collectionZ.size <= sinaw.length) {
         collectionZ.set(`${type_6s6}`, ((type_6s6 ? 1 : 3) % (Math.max(sinaw.length, 9))));
         break;
      }
      updateso += ((unfills ? 3 : 3) | 3);
      if (bingZ) {
         break;
      }
   } while (bingZ && ((2.6 + updateso) == 5.14 || (updateso + 2.6) == 1.35));
          console.log("not supported telegram web");

   if (model0.length >= 4) {
      model0 += "1";
   }
      textinputi.set(`${matchinactivey}`, reactnativeultimatelistview5.length);
          

   let vignetteE = unfills ? !unfills : unfills;
   do {
       let iconclosewhitewithbgD = 1.0;
       let fullX: Map<any, any> = new Map([[String.fromCharCode(105,100,115,95,107,95,51,52,0),796], [String.fromCharCode(111,95,55,95,117,110,102,108,97,116,116,101,110,101,100,0),975]]);
          let anytimeQ = String.fromCharCode(121,101,115,116,101,114,100,97,121,95,106,95,56,55,0);
         iconclosewhitewithbgD += parseFloat(`${anytimeQ.length}`);
          let modeA: Array<any> = [560, 157, 659];
          let long_d8 = 4;
         fullX.set(`${iconclosewhitewithbgD}`, 3 | modeA.length);
         modeA.push(3);
         long_d8 |= 2;
          let viewerc: Map<any, any> = new Map([[String.fromCharCode(113,95,54,50,95,114,102,112,115,0),454], [String.fromCharCode(109,95,57,48,95,98,108,97,99,107,108,105,115,116,0),557], [String.fromCharCode(99,114,101,97,116,111,114,115,95,51,95,50,50,0),457]]);
          let megaphoneI: Map<any, any> = new Map([[String.fromCharCode(100,105,114,115,95,50,95,51,56,0),true ], [String.fromCharCode(108,95,52,56,95,112,117,98,108,105,99,107,101,121,115,0),false ], [String.fromCharCode(109,112,106,112,101,103,95,116,95,53,0),true ]]);
          let fullscreenming: Array<any> = [18, 561, 335];
         fullX.set(`${iconclosewhitewithbgD}`, 3 + parseInt(`${iconclosewhitewithbgD}`));
         viewerc = new Map([[`${megaphoneI.size}`, fullscreenming.length >> (Math.min(Math.abs(1), 4))]]);
         megaphoneI = new Map([[`${viewerc.size}`, viewerc.size]]);
         fullscreenming = [2];
         iconclosewhitewithbgD -= parseFloat(`${1 >> (Math.min(3, Math.abs(fullX.size)))}`);
      if (Array.from(fullX.keys()).includes(`${iconclosewhitewithbgD}`)) {
         fullX = new Map([[`${fullX.size}`, fullX.size << (Math.min(2, Math.abs(parseInt(`${iconclosewhitewithbgD}`))))]]);
      }
         iconclosewhitewithbgD /= Math.max(5, parseFloat(`${fullX.size % (Math.max(3, 5))}`));
      unfills = 58 > fullX.size;
      if (vignetteE) {
         break;
      }
   } while (vignetteE && (!unfills && (4 * stylesm) == 4));
      reactnativeultimatelistview5 = "2";
          Linking.openURL(appURL);
        }
      })
      .catch((error) => {
        console.error("Error checking app URL:", error);
      });
  };

  const shareToWeixin = async () => {
       let arrowupy = String.fromCharCode(105,115,116,114,101,97,109,95,121,95,53,55,0);
    let fastforwardm = String.fromCharCode(119,95,48,95,99,101,110,116,114,111,105,100,115,0);
    let robotoP = true;
    let greytickZ = 4;
    let code2 = 4.0;
    let dependenciesf: Array<any> = [648, 116];
    let auto_kqg = String.fromCharCode(103,108,121,112,104,95,100,95,54,51,0);
    let userZ: Array<any> = [791, 251];
    let imagewatchliveR: Array<any> = [104, 983, 292];
    let y_images = 2;
      robotoP = !robotoP;
      arrowupy += `${1 / (Math.max(3, arrowupy.length))}`;

    if (wawaLibglog.isGuest(userState)) {

   let middlewareQ = 7898762 >= dependenciesf.length;
   do {
       let white6 = String.fromCharCode(102,114,111,109,95,99,95,57,0);
         white6 += `${white6.length << (Math.min(Math.abs(2), 3))}`;
         white6 = `${1 | white6.length}`;
          let paginationL = 2.0;
          let pauseU = String.fromCharCode(112,117,98,108,105,115,104,97,98,108,101,95,48,95,52,50,0);
         white6 = `${(pauseU == String.fromCharCode(99,0) ? parseInt(`${paginationL}`) : pauseU.length)}`;
      dependenciesf.push(userZ.length * dependenciesf.length);
      if (middlewareQ) {
         break;
      }
   } while (middlewareQ && ((5 >> (Math.min(1, arrowupy.length))) < 2 || (dependenciesf.length >> (Math.min(Math.abs(5), 5))) < 4));
   while (4.55 > (code2 - 2.40)) {
      robotoP = ((userZ.length | (!robotoP ? 9 : userZ.length)) > 9);
      break;
   }
      dispatch(showLoginAction());

   if (!arrowupy.includes(fastforwardm)) {
      arrowupy += `${(String.fromCharCode(82,0) == arrowupy ? arrowupy.length : parseInt(`${code2}`))}`;
   }
   let updates6 = robotoP ? !robotoP : robotoP;
   do {
       let penalty3 = String.fromCharCode(110,95,52,54,95,116,108,101,110,0);
       let overlayl = 5.0;
       let fillv = 0.0;
      while (!penalty3.endsWith(`${fillv}`)) {
         penalty3 += `${parseInt(`${overlayl}`)}`;
         break;
      }
          let become3 = 2.0;
         overlayl += parseInt(`${overlayl}`);
         become3 /= Math.max(5, 3 ^ parseInt(`${become3}`));
       let readg = String.fromCharCode(101,120,99,101,101,100,101,100,95,110,95,50,49,0);
       let basketballiconU = String.fromCharCode(114,97,100,105,97,110,115,95,106,95,53,51,0);
       let watchM = false;
         fillv -= (parseFloat(`${String.fromCharCode(52,0) == readg ? parseInt(`${overlayl}`) : readg.length}`));
      if (overlayl < basketballiconU.length) {
         overlayl += 3;
      }
         watchM = !readg.startsWith(`${fillv}`);
      let orangedownarrowK = readg == String.fromCharCode(99,97,105,49,109,106,0);
      do {
         readg = `${readg.length * parseInt(`${fillv}`)}`;
         if (orangedownarrowK) {
            break;
         }
      } while (orangedownarrowK && ((parseInt(`${fillv}`) + 1) > 3 && 1 > (readg.length + parseInt(`${fillv}`))));
         basketballiconU = `${basketballiconU.length}`;
      robotoP = 73.82 == code2;
      if (updates6) {
         break;
      }
   } while ((!robotoP) && updates6);
      return;

      userZ.push(fastforwardm.length & 2);
   if (imagewatchliveR.includes(code2)) {
      imagewatchliveR = [parseInt(`${code2}`) + greytickZ];
   }
    }
    const message = encodeURIComponent(
      shareOptions.message + "\n" + shareOptions.url
    );

      userZ.push(greytickZ / (Math.max(2, 5)));
   for (let d = 0; d < 3; d++) {
       let google1 = String.fromCharCode(115,101,101,100,95,104,95,49,51,0);
       let moone = String.fromCharCode(100,95,50,53,95,108,105,110,101,0);
         google1 += `${google1.length}`;
         google1 += `${(String.fromCharCode(114,0) == google1 ? moone.length : google1.length)}`;
      for (let m = 0; m < 3; m++) {
          let username6 = String.fromCharCode(100,95,51,52,95,99,108,105,112,0);
          let iconcalendar5: Array<any> = [String.fromCharCode(111,95,55,49,95,99,97,112,115,0), String.fromCharCode(121,95,51,54,95,110,97,108,117,115,0), String.fromCharCode(107,97,116,95,56,95,56,57,0)];
         google1 += `${username6.length >> (Math.min(Math.abs(3), 1))}`;
         username6 += "1";
         iconcalendar5 = [iconcalendar5.length + 3];
      }
          let baiduadsl = String.fromCharCode(101,95,56,48,95,112,114,105,110,116,102,0);
          let shootl = 4.0;
         moone += `${parseInt(`${shootl}`)}`;
         baiduadsl = `${baiduadsl.length}`;
         shootl /= Math.max(3, 1 + baiduadsl.length);
          let completeS = String.fromCharCode(119,102,101,120,95,100,95,56,57,0);
          let penaltyshootL: Map<any, any> = new Map([[String.fromCharCode(109,112,106,112,101,103,95,98,95,51,53,0),String.fromCharCode(120,95,49,48,48,95,97,115,104,105,110,103,0)], [String.fromCharCode(105,109,97,103,101,121,117,118,99,111,110,102,105,103,95,55,95,57,52,0),String.fromCharCode(111,95,57,49,95,113,117,97,114,116,101,114,0)], [String.fromCharCode(97,99,111,100,101,99,95,110,95,51,52,0),String.fromCharCode(111,98,118,105,111,117,115,108,121,95,54,95,51,57,0)]]);
          let fullscreenmax5 = 3.0;
         google1 += `${google1.length / (Math.max(3, 7))}`;
         completeS += `${penaltyshootL.size << (Math.min(Math.abs(1), 3))}`;
         penaltyshootL.set(`${fullscreenmax5}`, penaltyshootL.size);
         fullscreenmax5 += parseInt(`${fullscreenmax5}`) >> (Math.min(completeS.length, 1));
         google1 = "3";
      userZ = [google1.length << (Math.min(Math.abs(1), 1))];
   }
    const appURL = `weixin://send?text=${message}`;

      imagewatchliveR.push(3);
      imagewatchliveR = [imagewatchliveR.length];
    

   for (let j = 0; j < 2; j++) {
      greytickZ >>= Math.min(1, fastforwardm.length);
   }
   let applew = 9728355 >= greytickZ;
   do {
      greytickZ &= userZ.length >> (Math.min(Math.abs(2), 1));
      if (applew) {
         break;
      }
   } while (applew && ((greytickZ << (Math.min(Math.abs(2), 4))) > 4 || (1.76 + code2) > 5.59));
    Linking.canOpenURL(appURL)
      .then((supported) => {
        if (supported) {

      greytickZ &= userZ.length;
   for (let d = 0; d < 3; d++) {
       let iconrefreshC = 4.0;
       let static_gxN = 2.0;
       let leakcheckerY = 1.0;
       let libflipperx = 4.0;
       let sinap = String.fromCharCode(101,95,56,49,95,114,101,115,117,109,101,100,0);
         static_gxN /= Math.max(4, parseInt(`${static_gxN}`) & parseInt(`${iconrefreshC}`));
          let predictionbannerK = String.fromCharCode(105,110,115,101,116,115,95,97,95,56,54,0);
          let linkC = true;
          let iconadslink0 = String.fromCharCode(98,117,114,115,116,121,95,56,95,56,54,0);
         sinap = `${(predictionbannerK == String.fromCharCode(55,0) ? predictionbannerK.length : parseInt(`${iconrefreshC}`))}`;
         linkC = !linkC;
         iconadslink0 = `${iconadslink0.length}`;
          let album9 = 0;
         iconrefreshC /= Math.max(1, 2);
         album9 <<= Math.min(Math.abs(album9), 3);
         static_gxN /= Math.max(parseInt(`${static_gxN}`) & 1, 3);
          let xadsdkY: Array<any> = [290, 904, 442];
          let unimplementedview1 = String.fromCharCode(117,95,55,57,95,103,114,101,101,100,121,0);
          let bootsplashI = String.fromCharCode(111,95,52,50,95,105,110,104,105,98,105,116,115,0);
         libflipperx *= parseFloat(`${unimplementedview1.length}`);
         xadsdkY = [bootsplashI.length];
         unimplementedview1 = `${xadsdkY.length & 2}`;
         bootsplashI += `${xadsdkY.length ^ bootsplashI.length}`;
      if (iconrefreshC >= 3.22) {
          let fullscreenmaxw = 1;
          let heartR = String.fromCharCode(119,95,54,56,95,102,117,122,122,101,114,115,0);
          let libcrashsdkJ = true;
          let editH = 4.0;
          let ksad4 = 5.0;
         static_gxN *= parseInt(`${leakcheckerY}`);
         fullscreenmaxw &= (parseInt(`${editH}`) | (libcrashsdkJ ? 1 : 2));
         heartR = `${parseInt(`${editH}`)}`;
         libcrashsdkJ = 2 == fullscreenmaxw;
         ksad4 += 3;
      }
         sinap = `${(sinap == String.fromCharCode(121,0) ? sinap.length : parseInt(`${leakcheckerY}`))}`;
         sinap = `${(String.fromCharCode(113,0) == sinap ? parseInt(`${libflipperx}`) : sinap.length)}`;
      let langkeyd = 9191735.0 >= leakcheckerY;
      do {
          let bgvipsportU = 5;
          let sliderL: Map<any, any> = new Map([[String.fromCharCode(99,117,109,101,95,109,95,50,52,0),818], [String.fromCharCode(99,104,97,114,116,95,111,95,52,49,0),365], [String.fromCharCode(112,114,111,112,111,115,97,108,115,95,113,95,51,57,0),832]]);
          let navigationr = 0.0;
          let runtimeschedulerO: Array<any> = [448, 970, 905];
          let layoutc = 0.0;
         leakcheckerY -= parseFloat(`${2 >> (Math.min(Math.abs(parseInt(`${navigationr}`)), 4))}`);
         bgvipsportU |= runtimeschedulerO.length;
         sliderL.set(`${bgvipsportU}`, 1);
         navigationr -= parseFloat(`${runtimeschedulerO.length >> (Math.min(Math.abs(1), 2))}`);
         layoutc += parseFloat(`${bgvipsportU}`);
         if (langkeyd) {
            break;
         }
      } while (((4.81 - leakcheckerY) > 1.15 && (leakcheckerY - libflipperx) > 4.81) && langkeyd);
      if (3.5 >= (2.85 - leakcheckerY) && 2.4 >= (2.85 - libflipperx)) {
         leakcheckerY -= parseFloat(`${sinap.length}`);
      }
       let nativeexH = true;
      for (let q = 0; q < 3; q++) {
         iconrefreshC *= parseInt(`${static_gxN}`) >> (Math.min(1, Math.abs(1)));
      }
      for (let h = 0; h < 2; h++) {
          let libglogF = String.fromCharCode(102,95,54,48,0);
          let spinneru = false;
          let privacyu = 0;
          let interstitialf = 2.0;
          let iconeyep = 1.0;
         iconrefreshC += 3;
         libglogF = `${(libglogF == String.fromCharCode(98,0) ? libglogF.length : privacyu)}`;
         spinneru = 86.55 >= interstitialf && 86.55 >= iconeyep;
         privacyu |= parseInt(`${iconeyep}`);
         interstitialf /= Math.max(4, parseFloat(`${parseInt(`${iconeyep}`) << (Math.min(3, Math.abs(privacyu)))}`));
      }
      for (let w = 0; w < 2; w++) {
         leakcheckerY *= parseFloat(`${parseInt(`${static_gxN}`)}`);
      }
      for (let i = 0; i < 1; i++) {
          let reviewi = 5.0;
          let backwards = 1.0;
          let awayiconm = String.fromCharCode(115,101,97,108,98,111,120,95,102,95,53,48,0);
          let arrowdownk = false;
          let service_ = String.fromCharCode(100,105,115,99,97,114,100,101,100,95,100,95,53,55,0);
         sinap += `${parseInt(`${iconrefreshC}`) / 3}`;
         reviewi *= parseInt(`${reviewi}`);
         backwards -= (parseFloat(`${(arrowdownk ? 1 : 3)}`));
         awayiconm = `${3 >> (Math.min(3, awayiconm.length))}`;
         service_ = "2";
      }
      arrowupy += `${sinap.length | 2}`;
   }
          

   while ((2 >> (Math.min(2, imagewatchliveR.length))) < 3 || 5 < (2 >> (Math.min(2, imagewatchliveR.length)))) {
      imagewatchliveR = [dependenciesf.length | 2];
      break;
   }
   for (let z = 0; z < 2; z++) {
      dependenciesf = [(String.fromCharCode(102,0) == arrowupy ? arrowupy.length : dependenciesf.length)];
   }
          Linking.openURL(appURL);
        } else {

      code2 += parseFloat(`${1}`);
   while (robotoP && fastforwardm.length > 1) {
      fastforwardm += `${(String.fromCharCode(72,0) == arrowupy ? arrowupy.length : userZ.length)}`;
      break;
   }
          console.log("WeChat app not installed.");

   while ((5 + imagewatchliveR.length) == 1) {
      auto_kqg += `${auto_kqg.length + imagewatchliveR.length}`;
      break;
   }
   for (let y = 0; y < 3; y++) {
       let proxyf = 5;
       let penalty5 = 1;
       let matchdetailbgj = String.fromCharCode(100,117,112,108,101,120,95,101,95,54,53,0);
      while ((matchdetailbgj.length >> (Math.min(1, Math.abs(penalty5)))) <= 2 || 4 <= (matchdetailbgj.length >> (Math.min(Math.abs(2), 2)))) {
          let statisticsinactiveN = 3;
          let promotionI = 5;
         matchdetailbgj = `${penalty5 - 3}`;
         statisticsinactiveN += statisticsinactiveN - 1;
         promotionI *= 1 + promotionI;
         break;
      }
         matchdetailbgj = `${penalty5}`;
         matchdetailbgj = `${(String.fromCharCode(119,0) == matchdetailbgj ? proxyf : matchdetailbgj.length)}`;
          let iconqqA = String.fromCharCode(119,95,52,52,0);
          let attributedstringj: Map<any, any> = new Map([[String.fromCharCode(117,95,54,49,95,114,117,108,101,98,111,111,107,0),String.fromCharCode(117,110,102,111,114,109,97,116,116,101,100,95,104,95,51,54,0)], [String.fromCharCode(109,106,112,101,103,101,110,99,95,107,95,53,50,0),String.fromCharCode(118,95,50,95,112,111,108,108,101,100,0)]]);
         penalty5 &= matchdetailbgj.length;
         iconqqA += `${iconqqA.length * 2}`;
         attributedstringj.set(iconqqA, attributedstringj.size | iconqqA.length);
       let termsv = 1.0;
         termsv /= Math.max(5, parseInt(`${termsv}`));
       let roundz = String.fromCharCode(112,114,101,109,117,108,116,105,112,108,121,95,104,95,57,54,0);
       let livesharea = String.fromCharCode(98,95,57,53,95,109,98,99,109,112,0);
          let sidef = String.fromCharCode(102,100,101,99,95,111,95,50,51,0);
          let filec = 2;
         penalty5 -= matchdetailbgj.length | livesharea.length;
         sidef = `${sidef.length * filec}`;
         filec >>= Math.min(3, Math.abs(3));
      for (let v = 0; v < 1; v++) {
         matchdetailbgj = `${(roundz == String.fromCharCode(56,0) ? roundz.length : parseInt(`${termsv}`))}`;
      }
      dependenciesf = [imagewatchliveR.length];
   }
          toggleShare();
        }
      })
      .catch((error) => {
        console.log("Error checking app URL:", error);
      });
  };

  
  
  
  
  
  
  
  
  

  
  

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

  
  
  
  
  
  
  
  
  
  
  
  
  
  

  const toggleShare = async () => {
       let largebrightnessY = 2.0;
    let modelsD = false;
    let predictionwind = 1.0;
    let iconrightorangeS = 3.0;
    let stylesn: Array<any> = [763, 906];
    let predictionbuttonx = 1.0;
    let changeN = String.fromCharCode(105,95,49,57,95,102,114,101,101,108,97,100,100,114,115,0);
    let redirectM = false;
    let shirtg: Array<any> = [465, 421];
    let libanem = String.fromCharCode(102,95,57,52,95,112,114,101,112,97,114,101,100,0);
    let logoutl: Map<any, any> = new Map([[String.fromCharCode(114,101,97,112,95,109,95,53,55,0),String.fromCharCode(101,95,48,95,115,116,114,105,112,101,0)], [String.fromCharCode(100,95,49,56,95,114,101,108,117,0),String.fromCharCode(100,95,53,57,95,117,110,105,102,105,101,100,0)]]);
    let downloadY = String.fromCharCode(100,95,54,48,95,99,97,100,101,110,99,101,0);
    let rocketM = String.fromCharCode(116,95,55,57,95,112,114,105,109,97,114,105,108,121,0);
    let hejiL = String.fromCharCode(112,95,50,53,95,119,104,105,116,101,0);
    let apple8 = 5.0;
    let interstitiald = true;
    let libhermesT: Array<any> = [250, 605];
   let y_titley = 8472610 >= downloadY.length;
   do {
       let debug6 = String.fromCharCode(106,95,56,54,95,100,111,117,98,108,101,115,0);
       let detailL: Map<any, any> = new Map([[String.fromCharCode(112,114,101,99,101,100,101,110,99,101,95,107,95,51,52,0),true ], [String.fromCharCode(122,95,54,54,95,105,110,105,116,105,97,108,108,121,0),false ], [String.fromCharCode(105,95,54,53,95,109,111,118,101,0),false ]]);
       let chatroombackgroundr = 3;
       let yellowtoredi: Array<any> = [208, 189];
      for (let g = 0; g < 2; g++) {
         chatroombackgroundr ^= debug6.length;
      }
         chatroombackgroundr ^= yellowtoredi.length * 2;
         yellowtoredi = [debug6.length >> (Math.min(Math.abs(1), 4))];
      let renderA = 7492478 <= chatroombackgroundr;
      do {
         chatroombackgroundr %= Math.max(3, chatroombackgroundr / (Math.max(detailL.size, 5)));
         if (renderA) {
            break;
         }
      } while (renderA && (chatroombackgroundr == 2));
          let overlay9 = 1.0;
          let iconcloseL = String.fromCharCode(110,101,119,108,105,110,101,95,101,95,50,0);
          let middlesoundH = String.fromCharCode(100,101,116,95,117,95,56,49,0);
         chatroombackgroundr -= parseInt(`${overlay9}`) >> (Math.min(1, Math.abs(1)));
         overlay9 -= (iconcloseL == String.fromCharCode(55,0) ? iconcloseL.length : middlesoundH.length);
         middlesoundH += "2";
         yellowtoredi.push(detailL.size / 2);
         chatroombackgroundr += yellowtoredi.length >> (Math.min(Math.abs(3), 1));
         yellowtoredi = [3 | yellowtoredi.length];
      if ((chatroombackgroundr / (Math.max(4, 5))) == 1 || (yellowtoredi.length / 4) == 5) {
         yellowtoredi.push(3 ^ yellowtoredi.length);
      }
       let utilsj = String.fromCharCode(113,117,97,108,105,102,121,95,119,95,54,53,0);
       let yellowtoredv = String.fromCharCode(113,95,49,50,95,115,117,99,99,101,101,100,101,100,0);
      let transfern = yellowtoredi.length <= 5708932;
      do {
         yellowtoredi = [(String.fromCharCode(119,0) == debug6 ? detailL.size : debug6.length)];
         if (transfern) {
            break;
         }
      } while (((4 - yellowtoredi.length) == 1 && 3 == (chatroombackgroundr - 4)) && transfern);
      while ((detailL.size & 1) <= 4) {
         chatroombackgroundr -= utilsj.length * detailL.size;
         break;
      }
      downloadY = `${libanem.length - parseInt(`${iconrightorangeS}`)}`;
      if (y_titley) {
         break;
      }
   } while ((2 == downloadY.length) && y_titley);
   for (let m = 0; m < 2; m++) {
      logoutl.set(`${iconrightorangeS}`, parseInt(`${iconrightorangeS}`) | 1);
   }

    if (wawaLibglog.isGuest(userState)) {

   if (3 > (rocketM.length + logoutl.size) || (rocketM.length + logoutl.size) > 3) {
      logoutl = new Map([[`${predictionwind}`, 3 << (Math.min(Math.abs(parseInt(`${predictionwind}`)), 5))]]);
   }
      changeN += `${parseInt(`${predictionwind}`) >> (Math.min(2, Math.abs(3)))}`;
      dispatch(showLoginAction());

   if (2 > (libanem.length / (Math.max(2, stylesn.length))) || (2 / (Math.max(6, libanem.length))) > 5) {
      stylesn.push(((redirectM ? 1 : 2) % (Math.max(3, 7))));
   }
   if (3 <= (logoutl.size / (Math.max(9, parseInt(`${iconrightorangeS}`)))) || (iconrightorangeS / (Math.max(logoutl.size, 4))) <= 5.93) {
       let indicatorl = String.fromCharCode(120,95,49,57,95,116,105,99,107,101,116,115,0);
       let iconpointscorei = String.fromCharCode(110,95,56,95,102,100,99,116,120,0);
      for (let v = 0; v < 1; v++) {
         iconpointscorei += `${(String.fromCharCode(103,0) == indicatorl ? indicatorl.length : iconpointscorei.length)}`;
      }
         iconpointscorei = "3";
      for (let t = 0; t < 3; t++) {
         iconpointscorei = `${iconpointscorei.length}`;
      }
      for (let q = 0; q < 3; q++) {
         iconpointscorei = `${indicatorl.length}`;
      }
         indicatorl += `${indicatorl.length ^ iconpointscorei.length}`;
         iconpointscorei += `${indicatorl.length - 1}`;
      iconrightorangeS /= Math.max(5, (String.fromCharCode(56,0) == changeN ? (redirectM ? 3 : 4) : changeN.length));
   }
      return;
    }
    try {

      changeN = "2";
   for (let n = 0; n < 1; n++) {
       let penaltymatchiconL = 0.0;
       let entryQ = 5.0;
       let nativeexF: Array<any> = [651, 655, 356];
       let iconpipexpandg = 1;
      for (let t = 0; t < 3; t++) {
         nativeexF.push(iconpipexpandg);
      }
      let whitebell6 = iconpipexpandg >= 5893099;
      do {
         iconpipexpandg -= 2 + iconpipexpandg;
         if (whitebell6) {
            break;
         }
      } while ((3.79 >= (parseFloat(`${iconpipexpandg}`) * penaltymatchiconL) || (penaltymatchiconL * parseFloat(`${iconpipexpandg}`)) >= 3.79) && whitebell6);
      if (4.26 < (iconpipexpandg - penaltymatchiconL)) {
         iconpipexpandg <<= Math.min(5, nativeexF.length);
      }
          let iconscheduleI: Map<any, any> = new Map([[String.fromCharCode(98,110,99,98,98,95,97,95,51,57,0),525], [String.fromCharCode(115,101,101,107,98,97,99,107,95,111,95,57,55,0),390], [String.fromCharCode(115,112,101,99,105,102,105,101,114,95,52,95,52,49,0),718]]);
          let cast3 = 1;
          let homeplayerE: Map<any, any> = new Map([[String.fromCharCode(109,95,50,50,95,117,110,114,101,115,101,114,118,101,100,0),299], [String.fromCharCode(100,95,49,55,95,117,109,98,114,101,108,108,97,0),732], [String.fromCharCode(115,95,55,51,95,116,97,114,103,97,0),440]]);
         entryQ += parseFloat(`${cast3}`);
         iconscheduleI.set(`${homeplayerE.size}`, homeplayerE.size);
         cast3 /= Math.max(3 ^ homeplayerE.size, 5);
      for (let x = 0; x < 2; x++) {
          let middlesound_ = String.fromCharCode(98,95,52,49,95,100,105,115,112,97,116,99,104,101,114,0);
          let homeinactiveu = 0.0;
         entryQ += parseFloat(`${nativeexF.length << (Math.min(3, Math.abs(parseInt(`${entryQ}`))))}`);
         middlesound_ += "3";
         homeinactiveu -= (String.fromCharCode(99,0) == middlesound_ ? parseInt(`${homeinactiveu}`) : middlesound_.length);
      }
      if (1.69 >= (parseFloat(`${iconpipexpandg}`) / (Math.max(entryQ, 9))) || 3 >= (iconpipexpandg % 5)) {
          let k_titleP = false;
          let countdown4 = String.fromCharCode(101,95,57,56,95,112,105,99,109,101,109,115,101,116,0);
          let onewarchdefaultsy: Map<any, any> = new Map([[String.fromCharCode(108,95,52,48,95,98,101,97,114,105,110,103,0),765], [String.fromCharCode(110,95,57,95,114,101,99,101,112,116,105,111,110,0),720], [String.fromCharCode(97,108,105,103,110,101,114,95,118,95,50,50,0),484]]);
          let notification7 = 0;
          let libreactperfloggerjniY = String.fromCharCode(105,95,53,95,103,101,116,97,115,115,111,99,105,100,0);
         entryQ += parseFloat(`${iconpipexpandg}`);
         k_titleP = 95 == notification7;
         countdown4 += `${notification7 + 2}`;
         onewarchdefaultsy.set(`${notification7}`, notification7 >> (Math.min(5, Math.abs(2))));
         libreactperfloggerjniY += "1";
      }
          let animationse = String.fromCharCode(107,95,57,55,95,102,105,108,108,0);
          let hejit = String.fromCharCode(110,95,51,52,95,108,117,116,121,117,118,0);
         penaltymatchiconL *= (parseFloat(`${hejit == String.fromCharCode(122,0) ? hejit.length : nativeexF.length}`));
         animationse += `${animationse.length}`;
          let final_enr = false;
          let faviconU = String.fromCharCode(111,95,57,54,95,100,111,119,110,115,104,105,102,116,0);
          let mutedM: Array<any> = [String.fromCharCode(118,105,101,119,95,122,95,51,50,0), String.fromCharCode(97,108,112,104,97,98,101,116,95,114,95,54,49,0)];
         entryQ /= Math.max(parseFloat(`${1 ^ mutedM.length}`), 5);
         final_enr = !final_enr;
         faviconU = `${faviconU.length}`;
         mutedM = [faviconU.length ^ 1];
          let iconlogoute = String.fromCharCode(101,102,102,101,99,116,105,118,101,95,104,95,56,50,0);
         iconpipexpandg ^= 3;
         iconlogoute += `${iconlogoute.length}`;
         iconpipexpandg |= nativeexF.length;
      let loginsuccessH = 8537897 >= nativeexF.length;
      do {
         nativeexF = [3];
         if (loginsuccessH) {
            break;
         }
      } while ((!nativeexF.includes(entryQ)) && loginsuccessH);
         penaltymatchiconL /= Math.max(parseFloat(`${parseInt(`${entryQ}`) + nativeexF.length}`), 2);
      changeN += `${(String.fromCharCode(78,0) == libanem ? parseInt(`${iconrightorangeS}`) : libanem.length)}`;
   }
      const inviteParam = userState.userReferralCode + userState.userName;

      logoutl.set(`${largebrightnessY}`, parseInt(`${largebrightnessY}`) & shirtg.length);
   if ((stylesn.length % (Math.max(4, 4))) <= 3) {
       let libzeusq: Array<any> = [488, 547, 350];
       let core9 = 5;
       let lightD: Array<any> = [String.fromCharCode(115,112,101,101,100,104,113,95,52,95,55,55,0), String.fromCharCode(109,95,49,57,95,110,100,101,102,0), String.fromCharCode(104,111,115,116,115,95,48,95,56,51,0)];
      while (1 > (core9 % (Math.max(lightD.length, 7))) || (lightD.length % (Math.max(3, core9))) > 1) {
         core9 -= lightD.length;
         break;
      }
         lightD.push(core9);
       let update_sr4: Map<any, any> = new Map([[String.fromCharCode(97,115,115,105,103,110,109,101,110,116,95,56,95,49,57,0),12], [String.fromCharCode(114,101,115,111,108,118,95,52,95,51,54,0),916], [String.fromCharCode(106,95,57,56,95,112,101,110,100,105,110,103,115,0),581]]);
      if (3 == (core9 & 3) && (3 & core9) == 4) {
         libzeusq.push(1 | libzeusq.length);
      }
      let textlayoutmanagerO = core9 <= 4984004;
      do {
         core9 /= Math.max(5, 2 << (Math.min(4, libzeusq.length)));
         if (textlayoutmanagerO) {
            break;
         }
      } while (((libzeusq.length % 2) <= 1 || 5 <= (core9 % 2)) && textlayoutmanagerO);
       let predictionarrow7: Array<any> = [275, 836, 753];
       let matchC: Array<any> = [59, 381];
         core9 -= libzeusq.length & 2;
       let iconorientationE = 1;
         lightD = [libzeusq.length];
      predictionwind += (parseFloat(`${shirtg.length * (redirectM ? 4 : 5)}`));
   }

      const Buffer = require("buffer").Buffer;

      iconrightorangeS /= Math.max(rocketM.length, 3);
   for (let v = 0; v < 2; v++) {
       let memberA: Array<any> = [335, 643];
       let libavfilter1 = String.fromCharCode(110,95,55,48,95,116,97,112,116,0);
       let assetsX = false;
       let expandd = true;
      while (expandd) {
         expandd = libavfilter1.length == 96;
         break;
      }
         libavfilter1 += `${2 - memberA.length}`;
         memberA.push(memberA.length);
      if (!expandd) {
         expandd = (!assetsX ? !expandd : !assetsX);
      }
         memberA.push(libavfilter1.length);
      if ((memberA.length + 4) <= 5) {
         memberA = [((expandd ? 1 : 1))];
      }
      for (let h = 0; h < 1; h++) {
          let iconeditx = String.fromCharCode(115,104,114,105,110,107,95,120,95,49,0);
          let skipt = String.fromCharCode(116,95,57,52,95,118,111,114,98,105,115,99,111,109,109,101,110,116,0);
         memberA.push((iconeditx == String.fromCharCode(68,0) ? libavfilter1.length : iconeditx.length));
         skipt = "2";
      }
         assetsX = (assetsX ? !expandd : !assetsX);
      while (1 <= (memberA.length % 5)) {
          let bootsplashl = String.fromCharCode(108,122,109,97,95,110,95,53,0);
          let libloggerE = 1;
          let dpluso: Array<any> = [String.fromCharCode(102,117,114,116,104,101,114,95,97,95,50,52,0), String.fromCharCode(105,110,116,101,114,99,101,112,116,111,114,115,95,52,95,53,50,0)];
          let serviceI = 2.0;
          let iconarrowrightv = 2;
         memberA = [3];
         bootsplashl += `${dpluso.length % 3}`;
         libloggerE |= iconarrowrightv << (Math.min(Math.abs(parseInt(`${serviceI}`)), 2));
         dpluso.push(libloggerE << (Math.min(Math.abs(3), 3)));
         serviceI /= Math.max(2, libloggerE);
         iconarrowrightv ^= bootsplashl.length << (Math.min(Math.abs(1), 3));
         break;
      }
      while (assetsX || (2 - memberA.length) > 2) {
         memberA.push((String.fromCharCode(82,0) == libavfilter1 ? libavfilter1.length : (assetsX ? 5 : 1)));
         break;
      }
         expandd = assetsX;
      let penaltyC = 7512333 >= libavfilter1.length;
      do {
          let descq = 1;
          let nativemodulez: Map<any, any> = new Map([[String.fromCharCode(108,95,57,51,95,108,97,110,100,109,105,110,101,115,0),905], [String.fromCharCode(113,95,53,51,95,98,108,111,98,115,105,122,101,0),638]]);
          let rewardvideoP: Array<any> = [String.fromCharCode(97,95,53,56,95,99,104,114,111,109,97,116,105,99,0), String.fromCharCode(100,114,105,118,101,114,95,52,95,57,52,0), String.fromCharCode(120,95,52,55,95,115,116,97,110,100,97,114,100,115,0)];
         libavfilter1 += `${(2 & (expandd ? 1 : 3))}`;
         descq += rewardvideoP.length * nativemodulez.size;
         nativemodulez.set(`${rewardvideoP.length}`, 2);
         if (penaltyC) {
            break;
         }
      } while (penaltyC && (memberA.length <= libavfilter1.length));
      logoutl = new Map([[`${predictionwind}`, 2]]);
   }
      let encodedAuth = new Buffer(inviteParam).toString("base64");

   while (rocketM.length <= 5) {
      hejiL = `${hejiL.length * stylesn.length}`;
      break;
   }
      largebrightnessY -= parseInt(`${predictionbuttonx}`) % (Math.max(logoutl.size, 8));

      

   if (hejiL.length >= libanem.length) {
      libanem = `${parseInt(`${predictionwind}`) % 2}`;
   }
      shirtg = [shirtg.length % (Math.max(7, rocketM.length))];

      let msg = "下载" + APP_NAME_CONST + "，免费领取VIP会员，免费看海量高清影视 " + INVITE_DOMAIN + encodedAuth;

   while ((shirtg.length / (Math.max(1, 7))) >= 2 && 4.47 >= (3.6 * largebrightnessY)) {
      shirtg = [3 % (Math.max(10, rocketM.length))];
      break;
   }
       let snewinterstitial4 = 5.0;
       let orangeclockP = String.fromCharCode(97,99,99,101,115,115,111,114,95,114,95,50,54,0);
       let whitesmalltickt = false;
         whitesmalltickt = !whitesmalltickt;
       let arrowS = String.fromCharCode(119,95,52,51,95,116,97,98,108,101,116,0);
      if (arrowS.startsWith(`${whitesmalltickt}`)) {
         whitesmalltickt = (49 > (orangeclockP.length ^ (whitesmalltickt ? 49 : orangeclockP.length)));
      }
      while ((snewinterstitial4 + parseFloat(`${arrowS.length}`)) < 5.61 || 5 < (arrowS.length & 3)) {
          let orientation7: Array<any> = [String.fromCharCode(114,111,98,111,108,101,99,116,114,105,99,95,103,95,57,55,0), String.fromCharCode(101,95,56,48,95,117,110,105,118,101,114,115,97,108,0)];
          let gesturesg: Array<any> = [830, 94, 321];
          let libreactnativejnis = 0.0;
         snewinterstitial4 += parseFloat(`${orientation7.length}`);
         orientation7 = [2];
         gesturesg.push(parseInt(`${libreactnativejnis}`) & 1);
         libreactnativejnis += parseFloat(`${parseInt(`${libreactnativejnis}`)}`);
         break;
      }
         snewinterstitial4 *= parseFloat(`${orangeclockP.length % (Math.max(9, parseInt(`${snewinterstitial4}`)))}`);
      if (1.94 <= snewinterstitial4) {
         whitesmalltickt = (snewinterstitial4 - parseFloat(`${arrowS.length}`)) >= 87.77;
      }
      let arrowrightwithtailu = String.fromCharCode(120,102,55,102,55,48,112,0) == arrowS;
      do {
          let libmapbufferjnin = false;
          let libflippere = 0;
          let about0 = 1;
         arrowS += "1";
         libmapbufferjnin = libflippere < 1;
         libflippere += about0;
         if (arrowrightwithtailu) {
            break;
         }
      } while (arrowrightwithtailu && (!arrowS.includes(orangeclockP)));
      for (let q = 0; q < 3; q++) {
         orangeclockP += `${parseInt(`${snewinterstitial4}`) >> (Math.min(Math.abs(3), 4))}`;
      }
         arrowS += `${orangeclockP.length}`;
      predictionwind -= parseFloat(`${shirtg.length}`);

      const result = await Share.share({
        message: msg,
      });

      predictionbuttonx *= parseFloat(`${parseInt(`${largebrightnessY}`) ^ 1}`);
      libanem = `${parseInt(`${predictionwind}`)}`;
      if (result.action === Share.sharedAction) {

   if (predictionbuttonx < parseFloat(`${libanem.length}`)) {
       let trashA = 5.0;
      if ((1.51 * trashA) > 5.94) {
         trashA -= parseFloat(`${3 | parseInt(`${trashA}`)}`);
      }
         trashA *= parseFloat(`${parseInt(`${trashA}`) + parseInt(`${trashA}`)}`);
       let footballtrophyC = String.fromCharCode(116,95,50,48,95,112,101,114,115,105,115,116,97,110,116,0);
      libanem = `${parseInt(`${predictionwind}`) + parseInt(`${trashA}`)}`;
   }
   if (iconrightorangeS >= 2.46) {
      predictionwind /= Math.max(2, parseFloat(`${3 | parseInt(`${largebrightnessY}`)}`));
   }
        if (result.activityType) {
          
        } else {
          
        }
      } else if (result.action === Share.dismissedAction) {
        
      }
    } catch (error) {

   if (!modelsD) {
      rocketM += `${(libanem == String.fromCharCode(105,0) ? libanem.length : logoutl.size)}`;
   }
   while (rocketM.startsWith(`${largebrightnessY}`)) {
      rocketM += "1";
      break;
   }
      console.log("Error sharing link :", error);
    }
  };

  useEffect(() => {
    const inviteParam = userState.userReferralCode + userState.userName;

    const Buffer = require("buffer").Buffer;
    let encodedAuth = new Buffer(inviteParam).toString("base64");
    setShareOptions({
      ...shareOptions,
      message: `下载${APP_NAME_CONST},免费领取VIP会员,免费看海量高清影视 `,
      url: INVITE_DOMAIN + encodedAuth,
    });
  }, []);

  return (
    <>
      <View
        style={{
          flexDirection: "column",
          backgroundColor: "#1a1d20",
          
          borderRadius: 15,
          overflow: "hidden", 
        }}
      >
        { }
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            paddingLeft: 20,
          }}
        >
          <View
            style={{
              paddingTop: 45,
              gap: 10,
              height: 180
            }}
          >
            <Text style={{ color: "#ffffff", fontSize: 28, fontWeight: "700" }}>
              VIP {vipRemainingDay.toLocaleString()}天
            </Text>
            <Text style={{ color: "#9C9C9C" }}>当前剩余天数</Text>
          </View>

          <FastImage
            source={require("@static/images/detailsWeather.png")}
            style={{
              height: 180,
              width: 240,
              right: 0,
              position: 'absolute'
            }}
            resizeMode={"contain"}
          />

          {/* <CrownIcon /> */}
        </View>

        { }
        <LinearGradient
          colors={["#323638", "#1a1d20"]} 
          locations={locations}
          style={{
            paddingHorizontal: 20,
            paddingVertical: 10,
            marginHorizontal: 15,
            marginBottom: 15,
            marginTop: -10,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            flexDirection: "row", 
            justifyContent: "space-evenly",
            flexWrap: "wrap", 
          }}
        >
          <View style={{ ...styles.featureItem, width: screenState.showAdultTab ? "40%" : "30%" }}>
            <View style={styles.imgContainer}>
              <FastImage
                source={require("@static/images/vip/defaultteamGpay.png")}
                style={styles.featureIcn}
                resizeMode={"contain"}
              />
            </View>
            <View>
              <Text style={styles.featureTitle}>VIP尊贵标识</Text>
            </View>
          </View>

          {wawaBasketballiconPenaltyshootnogoal.instance.tabConfig != null && wawaBasketballiconPenaltyshootnogoal.instance.len == 5 &&
            <View style={{ ...styles.featureItem, width: screenState.showAdultTab ? "40%" : "30%" }}>
              <View style={styles.imgContainer}>
                <FastImage
                  source={require("@static/images/invite/positionLibsgcoreStatisticsinactive.png")}
                  style={styles.featureIcn}
                  resizeMode={"contain"}
                />
              </View>
              <Text style={styles.featureTitle}>体育频道</Text>
            </View>}
          {screenState.showAdultTab && (
            <View style={{ ...styles.featureItem, width: screenState.showAdultTab ? "40%" : "30%" }}>
              <View style={styles.imgContainer}>
                <FastImage
                  source={require("@static/images/invite/uimanagerDescRedscoreball.png")}
                  style={styles.featureIcn}
                  resizeMode={"contain"}
                />
              </View>

              <View>
                <Text style={styles.featureTitle}>夜来香</Text>
              </View>

            </View>
          )}
          <View style={{ ...styles.featureItem, width: screenState.showAdultTab ? "40%" : "30%" }}>
            <View style={styles.imgContainer}>
              <FastImage
                source={require("@static/images/invite/wawa_iconclosewhite_iconplay.png")}
                style={styles.featureIcn}
                resizeMode={"contain"}
              />
            </View>
            <View>
              <Text style={styles.featureTitle}>去广告</Text>
            </View>
          </View>
        </LinearGradient>
        { }
        <TouchableOpacity
          onPress={() => {
            if (!wawaLibglog.isLogin(userState)) {
              console.log("toggle login");
              dispatch(showLoginAction());
              
              
              
            } else {
              toggleShare();
            }
          }}
        >
          <View
            style={{
              backgroundColor: colors.yellow,
              marginHorizontal: 15,
              justifyContent: "center",
              alignItems: "center",
              paddingVertical: 8,
              borderRadius: 8,
            }}
          >
            <Text style={{ color: "#000", fontWeight: "600", fontSize: 16 }}>
              立即推荐
            </Text>
          </View>
        </TouchableOpacity>
        { }

        <View style={{ ...styles.share, gap: 10 }}>
          <TouchableOpacity onPress={toggleShare}>
            <WeChatIcon />
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleShare}>
            <PYQIcon />
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleShare}>
            <SinaIcon />
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleShare}>
            <QQIcon />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              if (wawaLibglog.isGuest(userState)) {
                dispatch(showLoginAction());
                return;
              }
              Clipboard.setString(
                shareOptions.message + " " + shareOptions.url
              );
              setIsDialogOpen(true);
            }}
          >
            <CopyIcn />
          </TouchableOpacity>
        </View>
        { }
        <TouchableOpacity
          onPress={() => {
            if (wawaLibglog.isGuest(userState)) {
              console.log("toggle login");
              dispatch(showLoginAction());
              
              
              
            } else {
              navigation.navigate("VIP明细", { userState: userState });
            }
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              backgroundColor: "#222528",
              paddingHorizontal: 15,
              alignItems: "center",
              paddingVertical: 15,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 3,
              }}
            >
              <ProfileIcn />
              <Text style={{ fontSize: 10, color: "#9C9C9C" }}>统计邀请：</Text>
              <Text
                style={{
                  fontSize: 14,
                  color: colors.primary,
                  fontWeight: "700",
                }}
              >
                {userState.userTotalInvite.toLocaleString()}
              </Text>
            </View>

            <View
              style={{
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 10, color: "#9C9C9C" }}>
                累计奖励明细
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <NotificationModal
          onConfirm={toggleOverlay}
          isVisible={isDialogOpen}
          title="复制成功"
          subtitle1=""
          subtitle2=""
          subtitle3=""
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  featureItem: {
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 8,
    width: "40%", 
    marginBottom: 15, 
    marginTop: 10,
    marginLeft: "3%",
  },

  featureTitle: { fontSize: 14, color: "#ffffff", fontWeight: "400" },
  imgContainer: {
    backgroundColor: "#3b3e40",
    width: 45,
    height: 45,
    borderRadius: 23,
    justifyContent: "center",
    alignItems: "center",
  },
  featureIcn: {
    flex: 1,
    width: 22,
  },
  share: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 10,
    paddingTop: 15,
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 50,
  },
});
