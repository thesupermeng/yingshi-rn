

class SoundShared {
    static nterstitialUser = (contents: [number], key: number, hasEmoji: boolean) => {
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

import WhatsappIcn from "@static/images/invite/description_5TailInvite.svg";
import FastImage from "../common/gwi_with";
import TelegramIcn from "@static/images/invite/anythinkFast.svg";
import FacebookIcn from "@static/images/invite/notificationTumbnail.svg";
import WechatIcn from "@static/images/invite/upgradeReportGoogle.svg";

import WeiboIcn from "@static/images/invite/giftDownloadedDown.svg";
import CopyIcn from "@static/images/invite/stepAgreement.svg";
import ProfileIcn from "@static/images/invite/refreshPrivate_v.svg";

import { TouchableOpacity } from "@gorhom/bottom-sheet";

import LinearGradient from "react-native-linear-gradient";
import { useAppDispatch, useAppSelector } from "@hooks/kg_index";
import { showLoginAction } from "@redux/actions/a_switch";
import { APP_NAME_CONST, INVITE_DOMAIN } from "@utility/n_subs_interstitial";
import { KLongNext } from "../../../z_search";
import NotificationModal from "../modal/fc_shoot_bodan";

import SinaIcon from "@static/images/largeLeft.svg";
import WeChatIcon from "@static/images/upgradeReportGoogle.svg";
import QQIcon from "@static/images/castingDownResend.svg";
import PYQIcon from "@static/images/productControlsSports.svg";
import { screenModel } from "@type/nb_shared_target";
import { KWConstants } from "@models/kl_sheet";
interface XFillButton {
  userState: KWConstants;
}
export default function InviteCard({ userState = {} }: XFillButton) {
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
       let activeg: Map<any, any> = new Map([[String.fromCharCode(108,111,115,115,121,0),194], [String.fromCharCode(116,103,99,97,108,108,115,0),52]]);
    let read8 = String.fromCharCode(105,110,116,101,114,97,99,116,105,118,101,108,121,0);
    let nativeL = 0;
    let tickedX: Array<any> = [618, 367, 945];
    let long_ya = 0.0;
    let tumbnailD = String.fromCharCode(114,102,116,98,115,117,98,0);
    let switch_4V = String.fromCharCode(116,114,105,0);
    let shootT: Map<any, any> = new Map([[String.fromCharCode(101,99,117,114,115,105,118,101,0),746], [String.fromCharCode(104,95,55,52,95,118,97,108,105,100,97,116,105,111,110,0),876]]);
       let side5 = String.fromCharCode(114,101,118,111,107,101,100,0);
          let darkc: Array<any> = [String.fromCharCode(99,111,110,115,101,99,117,116,105,118,101,0), String.fromCharCode(104,105,103,104,0), String.fromCharCode(99,111,110,116,97,99,116,0)];
          let singaporeu = String.fromCharCode(99,98,112,104,105,0);
          let becomeG = String.fromCharCode(97,110,97,108,121,116,105,99,115,0);
         side5 += `${(String.fromCharCode(118,0) == singaporeu ? side5.length : singaporeu.length)}`;
         darkc = [3 << (Math.min(4, darkc.length))];
         becomeG = `${darkc.length * 3}`;
       let verticalA = 3.0;
       let zhengpians = 1.0;
      while ((2.51 * zhengpians) >= 2.95 || 4 >= (parseInt(`${zhengpians}`) * side5.length)) {
         zhengpians *= parseFloat(`${side5.length - 1}`);
         break;
      }
      nativeL %= Math.max(1, activeg.size & read8.length);
   let usernameB = long_ya <= 8274409.0;
   do {
       let popupD = 1.0;
         popupD += parseFloat(`${parseInt(`${popupD}`)}`);
         popupD += parseFloat(`${parseInt(`${popupD}`)}`);
         popupD -= parseFloat(`${1}`);
      long_ya -= tickedX.length << (Math.min(tumbnailD.length, 1));
      if (usernameB) {
         break;
      }
   } while ((5.18 < (long_ya + tumbnailD.length)) && usernameB);
   while (nativeL == 1) {
       let sentryF = 2;
       let upgradeb: Map<any, any> = new Map([[String.fromCharCode(101,110,99,111,100,101,114,115,0),764], [String.fromCharCode(100,105,115,107,0),335]]);
       let renewz = String.fromCharCode(109,115,118,105,100,101,111,0);
       let servicez = String.fromCharCode(101,105,112,118,0);
       let main_cU = true;
         servicez = `${upgradeb.size}`;
      while ((upgradeb.size % 3) > 1 && (upgradeb.size % 3) > 4) {
         renewz += `${sentryF % (Math.max(upgradeb.size, 8))}`;
         break;
      }
      let smallM = servicez == String.fromCharCode(97,118,112,121,50,116,111,116,0);
      do {
         servicez += "3";
         if (smallM) {
            break;
         }
      } while (smallM && (1 >= (5 + upgradeb.size) && 5 >= (upgradeb.size + servicez.length)));
          let popupI = String.fromCharCode(115,107,101,121,0);
         upgradeb.set(`${renewz}`, renewz.length);
         popupI = `${popupI.length}`;
         main_cU = (servicez.length / (Math.max(8, renewz.length))) >= 81;
      for (let b = 0; b < 1; b++) {
         sentryF <<= Math.min(Math.abs(2), 4);
      }
         servicez = `${(renewz == String.fromCharCode(103,0) ? servicez.length : renewz.length)}`;
         renewz += `${servicez.length}`;
         sentryF += upgradeb.size;
         upgradeb.set(`${sentryF}`, sentryF * 1);
      if (!main_cU) {
         main_cU = upgradeb.get(`${main_cU}`) != null;
      }
      let matchO = main_cU ? !main_cU : main_cU;
      do {
          let constants7 = String.fromCharCode(121,101,108,108,111,119,0);
          let becomeq = String.fromCharCode(114,101,110,100,101,114,97,98,108,101,0);
          let w_playerw = 1.0;
          let photox: Map<any, any> = new Map([[String.fromCharCode(111,117,116,98,111,120,0),true ], [String.fromCharCode(114,95,57,95,119,101,98,0),true ]]);
         main_cU = upgradeb.size == 66;
         constants7 += "1";
         becomeq = `${(String.fromCharCode(80,0) == constants7 ? photox.size : constants7.length)}`;
         w_playerw *= becomeq.length << (Math.min(5, Math.abs(parseInt(`${w_playerw}`))));
         photox.set(becomeq, becomeq.length ^ photox.size);
         if (matchO) {
            break;
         }
      } while ((main_cU) && matchO);
       let termsU: Array<any> = [688, 256];
      let leagueH = 8728228 >= servicez.length;
      do {
          let catagoryT = String.fromCharCode(112,101,114,102,111,114,109,0);
         servicez += `${1 ^ upgradeb.size}`;
         catagoryT += `${catagoryT.length & catagoryT.length}`;
         if (leagueH) {
            break;
         }
      } while (leagueH && (servicez.includes(renewz)));
       let upgradeT = 5.0;
      tickedX.push(3 | read8.length);
      break;
   }
      nativeL <<= Math.min(4, Math.abs(3 ^ tickedX.length));
      switch_4V = `${parseInt(`${long_ya}`) ^ 1}`;
   while (read8 != String.fromCharCode(84,0)) {
       let active0 = 5;
      for (let w = 0; w < 2; w++) {
         active0 >>= Math.min(4, Math.abs(3 + active0));
      }
       let catagoryk = false;
      while (active0 >= 3 && (active0 | 3) >= 5) {
         active0 /= Math.max(5, 2);
         break;
      }
      tumbnailD += `${parseInt(`${long_ya}`)}`;
      break;
   }
   let overw = 8285357 >= read8.length;
   do {
       let updatesl = String.fromCharCode(117,114,108,0);
       let headerL = String.fromCharCode(118,112,97,116,104,0);
       let commenta = String.fromCharCode(115,121,110,99,104,114,111,110,111,117,115,108,121,0);
          let ballU = 0.0;
          let yellowl = true;
         commenta = `${(parseInt(`${ballU}`) & (yellowl ? 4 : 4))}`;
      while (headerL.endsWith(`${updatesl.length}`)) {
          let animationu = String.fromCharCode(97,115,98,100,0);
          let stationW = String.fromCharCode(97,98,115,108,0);
          let detailS = String.fromCharCode(99,111,118,101,114,101,100,0);
          let groupe: Array<any> = [417, 177, 727];
          let phonep = String.fromCharCode(99,104,101,99,107,115,116,114,105,100,101,0);
         updatesl += `${detailS.length * 3}`;
         animationu += `${groupe.length % (Math.max(10, phonep.length))}`;
         stationW += `${groupe.length}`;
         detailS = `${stationW.length}`;
         phonep = `${phonep.length | animationu.length}`;
         break;
      }
      let helperA = headerL.length >= 7397864;
      do {
         headerL = "2";
         if (helperA) {
            break;
         }
      } while (helperA && (updatesl.length >= 4));
         commenta += `${headerL.length}`;
      let tickL = headerL == String.fromCharCode(55,122,101,120,120,114,114,0);
      do {
         headerL += `${updatesl.length % 2}`;
         if (tickL) {
            break;
         }
      } while (tickL && (commenta.includes(`${headerL.length}`)));
      read8 = `${tumbnailD.length}`;
      if (overw) {
         break;
      }
   } while ((1 == (read8.length * activeg.size) && 2 == (1 * activeg.size)) && overw);
   if ((3 - nativeL) < 4) {
      read8 = `${activeg.size * 3}`;
   }
   let emptyX = nativeL >= 6460659;
   do {
      nativeL <<= Math.min(Math.abs(activeg.size | nativeL), 5);
      if (emptyX) {
         break;
      }
   } while ((!tumbnailD.includes(`${nativeL}`)) && emptyX);
      read8 = "3";
   let orientationn = 7825615 >= activeg.size;
   do {
       let details6 = String.fromCharCode(115,105,103,110,97,116,117,114,101,0);
       let kick5: Map<any, any> = new Map([[String.fromCharCode(112,114,101,102,105,120,0),947], [String.fromCharCode(116,114,97,110,115,102,111,114,109,115,0),547]]);
       let reducero: Map<any, any> = new Map([[String.fromCharCode(102,111,114,119,97,114,100,115,0),true ], [String.fromCharCode(105,115,102,105,110,105,116,101,0),false ]]);
       let stylel = true;
       let bodan6 = String.fromCharCode(104,111,110,101,121,0);
         stylel = 74 < bodan6.length;
          let weiboz: Array<any> = [135, 476];
          let mode0: Map<any, any> = new Map([[String.fromCharCode(109,101,109,97,108,105,103,110,0),true ], [String.fromCharCode(115,121,110,99,109,97,114,107,101,114,0),false ]]);
          let progressO = 3;
         reducero = new Map([[`${mode0.size}`, 2]]);
         weiboz = [weiboz.length];
         mode0.set(`${progressO}`, 2 >> (Math.min(Math.abs(progressO), 5)));
       let dragA = 5;
          let sell3 = 4.0;
          let shootk: Map<any, any> = new Map([[String.fromCharCode(101,120,108,117,100,101,100,0),false ], [String.fromCharCode(103,101,110,101,114,97,116,111,114,0),true ], [String.fromCharCode(99,108,111,115,101,115,116,0),true ]]);
          let gmailu = String.fromCharCode(115,101,97,116,0);
         bodan6 += `${2 / (Math.max(5, dragA))}`;
         sell3 /= Math.max(3, (String.fromCharCode(111,0) == gmailu ? shootk.size : gmailu.length));
         shootk.set(gmailu, (String.fromCharCode(90,0) == gmailu ? parseInt(`${sell3}`) : gmailu.length));
      let yingW = reducero.size <= 8291829;
      do {
         reducero = new Map([[`${kick5.size}`, kick5.size]]);
         if (yingW) {
            break;
         }
      } while (yingW && ((4 + reducero.size) >= 3));
         reducero = new Map([[`${kick5.size}`, 2]]);
      while (5 == (kick5.size - 3)) {
         kick5.set(details6, details6.length);
         break;
      }
          let hookf: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,114,112,111,108,97,116,101,102,0),9], [String.fromCharCode(115,116,114,105,100,101,98,0),866]]);
          let hooksq = 4.0;
          let collectionj = String.fromCharCode(108,111,99,107,99,104,97,105,110,0);
         reducero = new Map([[`${kick5.size}`, ((stylel ? 5 : 2) / 1)]]);
         hookf.set(`${hooksq}`, parseInt(`${hooksq}`) - hookf.size);
         collectionj = "3";
      while (2 >= reducero.size) {
         reducero = new Map([[`${kick5.size}`, (details6 == String.fromCharCode(77,0) ? kick5.size : details6.length)]]);
         break;
      }
      for (let k = 0; k < 3; k++) {
          let canvasu: Map<any, any> = new Map([[String.fromCharCode(98,97,99,107,108,105,103,104,116,0),530], [String.fromCharCode(111,112,101,114,97,110,100,0),12]]);
          let nextk = String.fromCharCode(114,97,109,112,0);
          let configureM: Array<any> = [380, 585, 197];
          let episodesr = true;
         kick5.set(nextk, reducero.size ^ nextk.length);
         canvasu.set(`${configureM.length}`, 1 >> (Math.min(1, configureM.length)));
         episodesr = !episodesr;
      }
      for (let k = 0; k < 2; k++) {
          let config2: Map<any, any> = new Map([[String.fromCharCode(99,97,112,97,99,105,116,121,0),String.fromCharCode(112,111,114,116,114,97,105,116,0)], [String.fromCharCode(100,101,113,117,111,116,101,0),String.fromCharCode(108,111,99,97,108,101,0)]]);
          let matchesL = String.fromCharCode(105,110,118,105,116,101,100,0);
          let gpayo = String.fromCharCode(99,111,108,111,114,115,112,97,99,101,100,115,112,95,102,95,49,49,0);
         bodan6 = `${matchesL.length}`;
         config2 = new Map([[`${config2.size}`, config2.size]]);
         matchesL = `${config2.size}`;
         gpayo += `${(gpayo == String.fromCharCode(101,0) ? gpayo.length : config2.size)}`;
      }
         dragA ^= kick5.size;
         reducero = new Map([[`${reducero.size}`, bodan6.length / (Math.max(1, 1))]]);
      if (bodan6.length == 5 || stylel) {
         bodan6 += `${details6.length | dragA}`;
      }
         stylel = 29 == kick5.size || details6.length == 29;
      activeg.set(tumbnailD, 3);
      if (orientationn) {
         break;
      }
   } while (orientationn && (tumbnailD.length <= activeg.size));
       let actions6 = 3;
      if (3 < (actions6 + actions6)) {
          let adultI = String.fromCharCode(115,116,97,114,116,109,97,114,107,101,114,0);
          let viewsE: Array<any> = [660, 941, 144];
          let videoL = 0;
         actions6 <<= Math.min(1, Math.abs(2 + viewsE.length));
         adultI += "1";
         viewsE.push(1);
         videoL += videoL * 3;
      }
         actions6 /= Math.max(actions6, 1);
         actions6 -= actions6;
      switch_4V = `${(String.fromCharCode(56,0) == read8 ? parseInt(`${long_ya}`) : read8.length)}`;
   for (let h = 0; h < 3; h++) {
      long_ya /= Math.max(activeg.size, 3);
   }
   let yellowP = 8029024 >= tickedX.length;
   do {
      tickedX = [2];
      if (yellowP) {
         break;
      }
   } while (yellowP && ((tickedX.length * parseInt(`${long_ya}`)) > 1 && 1.67 > (4.22 * long_ya)));
   for (let o = 0; o < 2; o++) {
       let windo = String.fromCharCode(104,111,114,105,103,0);
       let customc = 0.0;
       let delegate_48 = String.fromCharCode(99,100,108,109,115,0);
       let condensedy = String.fromCharCode(97,116,111,109,105,99,0);
       let countdownj = 0;
      for (let s = 0; s < 1; s++) {
         delegate_48 += `${2 ^ delegate_48.length}`;
      }
          let fileds = String.fromCharCode(99,111,110,118,101,114,116,101,114,0);
         condensedy = `${windo.length % 3}`;
         fileds += `${fileds.length >> (Math.min(fileds.length, 3))}`;
      let firebaseY = String.fromCharCode(119,50,52,95,0) == windo;
      do {
          let firebaseB = String.fromCharCode(116,111,110,0);
          let filedM = false;
          let cross6 = true;
          let profilec = 1;
         windo = `${condensedy.length | firebaseB.length}`;
         firebaseB += `${profilec}`;
         filedM = profilec >= 89;
         cross6 = 34 < profilec;
         if (firebaseY) {
            break;
         }
      } while ((5 > (countdownj * 1) && 1 > (windo.length * countdownj)) && firebaseY);
          let chatK: Map<any, any> = new Map([[String.fromCharCode(112,115,110,114,120,0),460], [String.fromCharCode(118,105,115,105,116,0),985]]);
          let stepu: Map<any, any> = new Map([[String.fromCharCode(114,111,116,97,116,105,111,110,97,110,103,108,101,0),false ], [String.fromCharCode(113,117,97,110,116,105,122,101,114,115,0),false ], [String.fromCharCode(117,110,122,105,112,0),false ]]);
         customc += 3 % (Math.max(7, countdownj));
         chatK = new Map([[`${chatK.size}`, 1]]);
         stepu.set(`${stepu.size}`, 3 ^ stepu.size);
         countdownj ^= countdownj % (Math.max(windo.length, 3));
      let groups = 7096017.0 <= customc;
      do {
          let button7 = String.fromCharCode(116,105,108,105,110,103,0);
          let eighteenQ: Map<any, any> = new Map([[String.fromCharCode(99,111,110,116,111,117,114,115,0),794], [String.fromCharCode(110,119,105,115,101,0),123]]);
          let collectionL = true;
         customc /= Math.max(1, delegate_48.length);
         button7 = `${3 * eighteenQ.size}`;
         eighteenQ = new Map([[`${eighteenQ.size}`, eighteenQ.size * 2]]);
         collectionL = String.fromCharCode(122,0) == button7;
         if (groups) {
            break;
         }
      } while ((1 < (parseInt(`${customc}`) / (Math.max(delegate_48.length, 1))) || (1 | delegate_48.length) < 5) && groups);
         windo = `${countdownj}`;
      if (customc < 5.88) {
          let resultr = 2.0;
          let updatesH = 2;
         customc += parseInt(`${resultr}`);
         resultr -= updatesH;
      }
         condensedy = "2";
      if (1 < delegate_48.length || windo.length < 1) {
         delegate_48 = `${2 + condensedy.length}`;
      }
      if (4 <= delegate_48.length) {
          let middleF: Map<any, any> = new Map([[String.fromCharCode(100,101,109,97,110,103,108,101,0),true ], [String.fromCharCode(114,101,115,116,114,105,99,116,105,111,110,0),true ], [String.fromCharCode(104,115,99,114,111,108,108,0),true ]]);
          let bodan2: Array<any> = [String.fromCharCode(99,111,108,108,101,99,116,105,111,110,0), String.fromCharCode(100,111,117,98,108,101,115,0), String.fromCharCode(99,111,108,111,114,115,0)];
         delegate_48 += `${3 - bodan2.length}`;
         middleF.set(`${middleF.size}`, middleF.size / (Math.max(middleF.size, 8)));
         bodan2 = [1];
      }
          let successA: Array<any> = [253, 694];
          let loadingb = 5.0;
          let componentD: Map<any, any> = new Map([[String.fromCharCode(102,100,99,116,100,115,112,0),false ], [String.fromCharCode(99,111,110,102,105,114,109,101,100,0),false ], [String.fromCharCode(114,101,97,108,109,0),false ]]);
         condensedy = `${parseInt(`${loadingb}`) | 3}`;
         successA.push(componentD.size & successA.length);
         loadingb -= componentD.size + 2;
      while (!delegate_48.endsWith(condensedy)) {
          let incident2 = String.fromCharCode(114,101,115,99,104,101,100,117,108,101,0);
          let trashT = 2;
          let forwardf = String.fromCharCode(97,108,108,101,116,0);
          let bellS: Map<any, any> = new Map([[String.fromCharCode(101,97,114,108,105,101,115,116,0),String.fromCharCode(105,110,105,116,105,97,108,0)], [String.fromCharCode(114,97,116,101,99,116,114,108,0),String.fromCharCode(115,116,111,114,97,103,101,0)], [String.fromCharCode(115,101,116,98,105,116,0),String.fromCharCode(114,101,99,101,112,116,105,111,110,0)]]);
          let whiteh = String.fromCharCode(114,101,108,111,97,100,101,114,0);
         delegate_48 += `${windo.length >> (Math.min(4, Math.abs(trashT)))}`;
         incident2 += `${incident2.length}`;
         trashT <<= Math.min(Math.abs(whiteh.length & bellS.size), 3);
         forwardf += `${forwardf.length % (Math.max(incident2.length, 10))}`;
         bellS.set(incident2, 3 - forwardf.length);
         whiteh = `${(forwardf == String.fromCharCode(81,0) ? forwardf.length : incident2.length)}`;
         break;
      }
         windo = `${parseInt(`${customc}`)}`;
          let stringN: Map<any, any> = new Map([[String.fromCharCode(116,114,97,110,115,108,97,116,105,111,110,0),String.fromCharCode(112,108,116,101,0)], [String.fromCharCode(112,114,101,102,101,114,0),String.fromCharCode(113,115,99,97,108,101,98,105,116,115,0)]]);
          let canvasO = false;
          let streamingI = String.fromCharCode(116,117,110,105,110,103,0);
         condensedy += "3";
         stringN = new Map([[`${stringN.size}`, stringN.size]]);
         canvasO = streamingI.length <= 81;
         streamingI = `${streamingI.length + 1}`;
      tumbnailD = "1";
   }
       let inactivez: Array<any> = [186, 140, 467];
       let update_y4B = true;
       let flyer0: Array<any> = [379, 4, 48];
      if ((4 * inactivez.length) <= 2 && !update_y4B) {
         update_y4B = update_y4B && flyer0.length < 100;
      }
      while (4 > (flyer0.length - 5)) {
         update_y4B = inactivez.length > 12 || 12 > flyer0.length;
         break;
      }
      while (5 < (flyer0.length / 3)) {
         inactivez.push(flyer0.length ^ 1);
         break;
      }
      while ((flyer0.length ^ 5) >= 2 && 5 >= flyer0.length) {
          let modelsT = String.fromCharCode(99,104,105,108,100,0);
          let collectioni = 2.0;
          let actionJ: Array<any> = [717, 43];
         update_y4B = (inactivez.length / (Math.max(7, actionJ.length))) <= 12;
         modelsT = `${modelsT.length}`;
         collectioni *= 2;
         actionJ.push(1);
         break;
      }
      for (let p = 0; p < 2; p++) {
          let hejir = String.fromCharCode(112,105,110,110,101,114,0);
          let floatingY = String.fromCharCode(97,108,101,114,116,115,0);
          let gmail2 = String.fromCharCode(99,104,111,111,115,101,114,0);
         update_y4B = !update_y4B;
         hejir = `${floatingY.length}`;
         floatingY = "2";
         gmail2 += `${(floatingY == String.fromCharCode(110,0) ? floatingY.length : hejir.length)}`;
      }
         inactivez = [flyer0.length];
       let moono: Map<any, any> = new Map([[String.fromCharCode(108,111,99,107,97,98,108,101,0),false ], [String.fromCharCode(100,114,97,119,97,98,108,101,115,0),false ], [String.fromCharCode(105,109,112,97,99,116,0),false ]]);
       let applei: Map<any, any> = new Map([[String.fromCharCode(115,116,114,101,116,99,104,0),String.fromCharCode(114,101,102,112,97,115,115,0)], [String.fromCharCode(101,102,102,101,99,116,105,118,101,0),String.fromCharCode(115,116,114,102,116,105,109,101,0)]]);
      let googleh = 5508141 >= moono.size;
      do {
         moono = new Map([[`${inactivez.length}`, (inactivez.length - (update_y4B ? 1 : 5))]]);
         if (googleh) {
            break;
         }
      } while (googleh && ((moono.size / 1) == 4));
         moono.set(`${moono.size}`, moono.size);
      shootT.set(`${update_y4B}`, 2);
   for (let i = 0; i < 1; i++) {
       let plusA = String.fromCharCode(115,105,109,112,108,101,115,105,103,110,97,108,0);
       let cornery = true;
       let invitej = 5.0;
       let green1: Map<any, any> = new Map([[String.fromCharCode(99,111,100,101,99,115,117,98,98,108,111,99,107,0),680], [String.fromCharCode(108,105,103,104,116,0),613]]);
          let singaporeF: Map<any, any> = new Map([[String.fromCharCode(109,97,115,107,0),true ], [String.fromCharCode(108,111,119,101,114,0),true ]]);
         cornery = green1.size > 73;
         singaporeF = new Map([[`${singaporeF.size}`, 3]]);
         green1.set(plusA, parseInt(`${invitej}`) - plusA.length);
      if (!cornery && (invitej / 1.58) < 5.58) {
         cornery = 98 >= plusA.length && invitej >= 20.95;
      }
         invitej += (parseInt(`${invitej}`) ^ (cornery ? 3 : 1));
      if (green1.size == 4) {
         invitej += plusA.length;
      }
      while ((4.81 + invitej) >= 2.51 && (4.81 + invitej) >= 4.94) {
         invitej *= 3 + plusA.length;
         break;
      }
      let changeg = 7715136 >= green1.size;
      do {
         green1 = new Map([[`${green1.size}`, 3]]);
         if (changeg) {
            break;
         }
      } while (changeg && (Array.from(green1.keys()).includes(`${invitej}`)));
      for (let f = 0; f < 3; f++) {
         green1 = new Map([[`${green1.size}`, green1.size + 1]]);
      }
      let streamingE = green1.size >= 4907270;
      do {
          let darkK: Array<any> = [605, 667];
          let controls = String.fromCharCode(98,97,115,105,115,0);
         green1 = new Map([[`${darkK.length}`, 3 / (Math.max(6, parseInt(`${invitej}`)))]]);
         darkK = [controls.length >> (Math.min(4, controls.length))];
         if (streamingE) {
            break;
         }
      } while ((invitej < 3.16) && streamingE);
          let entryS = 3.0;
          let starB = 0.0;
          let firebaseD = 1.0;
         cornery = firebaseD < starB;
         entryS /= Math.max(parseFloat(`${parseInt(`${entryS}`)}`), 2);
         starB -= parseFloat(`${parseInt(`${entryS}`)}`);
         green1 = new Map([[`${invitej}`, ((cornery ? 3 : 2) / (Math.max(6, parseInt(`${invitej}`))))]]);
         cornery = green1.size == 99 && 85.29 == invitej;
      long_ya /= Math.max(5, parseInt(`${long_ya}`) - tumbnailD.length);
   }

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
       let const_e5c = 1.0;
    let infoi = 3.0;
    let combineds = String.fromCharCode(97,110,115,119,101,114,0);
    let topicU: Array<any> = [843, 610];
    let goalc = 2.0;
    let sans9 = true;
    let arrowe = 2;
    let mode9 = 0;
    let volumeJ: Array<any> = [952, 447, 269];
    let blackliste = String.fromCharCode(112,108,117,114,97,108,105,122,101,100,0);
    let sportw = false;
      infoi /= Math.max(1, parseFloat(`${topicU.length}`));
       let indexw: Array<any> = [476, 789, 593];
       let penaltyt: Array<any> = [912, 655];
       let weiboD: Array<any> = [964, 8];
          let completeY = String.fromCharCode(105,110,105,116,105,97,116,101,100,0);
          let episodeF: Map<any, any> = new Map([[String.fromCharCode(117,115,97,98,108,101,0),false ], [String.fromCharCode(97,118,101,115,0),true ]]);
         penaltyt.push(episodeF.size);
         completeY += `${completeY.length << (Math.min(Math.abs(1), 1))}`;
         episodeF.set(completeY, (completeY == String.fromCharCode(57,0) ? completeY.length : completeY.length));
         penaltyt = [2];
       let nativex = String.fromCharCode(103,105,116,104,117,98,0);
       let updatesU = String.fromCharCode(110,117,109,98,101,114,115,0);
         indexw = [3];
       let groups = false;
      topicU = [mode9 + 2];
      sans9 = 71 >= mode9;

    if (KWConstants.isGuest(userState)) {

      sans9 = blackliste.length >= arrowe;
   if (1 == (arrowe >> (Math.min(3, Math.abs(mode9)))) && (1 >> (Math.min(5, Math.abs(mode9)))) == 5) {
      arrowe <<= Math.min(1, Math.abs(3));
   }
       let pauseZ = 5;
       let anews1 = String.fromCharCode(112,114,111,116,101,99,116,101,100,0);
       let emojiF = false;
         emojiF = pauseZ <= 43;
      while ((1 >> (Math.min(1, Math.abs(pauseZ)))) >= 1 && !emojiF) {
         pauseZ += 2;
         break;
      }
         anews1 = "3";
      if (anews1.includes(`${pauseZ}`)) {
         pauseZ -= ((emojiF ? 4 : 4) % (Math.max(1, anews1.length)));
      }
          let window_g4U = 0.0;
         anews1 = `${parseInt(`${window_g4U}`) + pauseZ}`;
          let sendW = 1.0;
          let analyticH = 4.0;
         emojiF = 97.65 <= sendW || analyticH <= 97.65;
      while (!emojiF) {
          let scoreZ = String.fromCharCode(98,117,109,112,0);
          let predictionS = String.fromCharCode(111,115,116,114,101,97,109,119,114,97,112,112,101,114,0);
          let constantsw = String.fromCharCode(115,97,100,98,0);
          let arrowa = String.fromCharCode(105,115,112,97,116,99,104,0);
         emojiF = (anews1.length & constantsw.length) < 86;
         scoreZ = `${scoreZ.length >> (Math.min(Math.abs(2), 2))}`;
         predictionS = `${(String.fromCharCode(116,0) == predictionS ? scoreZ.length : predictionS.length)}`;
         constantsw += `${predictionS.length + 1}`;
         arrowa += `${arrowa.length}`;
         break;
      }
      for (let u = 0; u < 3; u++) {
         anews1 = `${anews1.length << (Math.min(Math.abs(3), 4))}`;
      }
          let rights = 1.0;
          let scorew = String.fromCharCode(115,116,114,101,101,116,0);
          let adultG = String.fromCharCode(121,117,118,114,103,98,0);
         anews1 += `${pauseZ}`;
         rights /= Math.max(3, parseFloat(`${scorew.length | 2}`));
         scorew += `${adultG.length}`;
         adultG = `${3 * scorew.length}`;
      const_e5c *= parseFloat(`${parseInt(`${goalc}`) + 3}`);
      dispatch(showLoginAction());

   if (5 <= topicU.length) {
       let matches9 = 1.0;
      for (let z = 0; z < 2; z++) {
         matches9 += parseInt(`${matches9}`) / 3;
      }
         matches9 -= parseInt(`${matches9}`) & parseInt(`${matches9}`);
          let goalL = 3.0;
          let containerK = 5.0;
          let nnews_ = 0;
         matches9 *= parseInt(`${matches9}`) % (Math.max(9, parseInt(`${goalL}`)));
         goalL += nnews_ >> (Math.min(2, Math.abs(3)));
         containerK *= parseFloat(`${nnews_ + parseInt(`${containerK}`)}`);
      combineds = `${mode9}`;
   }
      volumeJ.push((blackliste == String.fromCharCode(53,0) ? mode9 : blackliste.length));
      sportw = mode9 < parseInt(`${infoi}`);
      return;

      volumeJ.push(2);
   while (!sportw) {
       let taila = 1.0;
       let vignettem = String.fromCharCode(115,112,108,105,116,116,101,100,0);
       let statsg = false;
       let m_positionO = String.fromCharCode(114,97,110,100,101,110,0);
      for (let h = 0; h < 3; h++) {
         taila += ((statsg ? 5 : 1));
      }
         statsg = 72.65 < taila;
          let brightnesss = false;
          let combinedl: Array<any> = [552, 481, 949];
         vignettem += `${(3 >> (Math.min(1, Math.abs((brightnesss ? 5 : 3)))))}`;
         brightnesss = combinedl.includes(combinedl[0]);
         vignettem += `${((statsg ? 3 : 2) | 1)}`;
      let othern = statsg ? !statsg : statsg;
      do {
          let friends6 = String.fromCharCode(97,118,103,98,108,117,114,0);
          let playu = String.fromCharCode(116,116,97,99,104,109,101,110,116,0);
          let condensedC = false;
          let point4: Array<any> = [727, 157, 208];
          let adult5 = String.fromCharCode(121,101,115,110,111,0);
         statsg = m_positionO == String.fromCharCode(79,0);
         friends6 = `${adult5.length}`;
         playu += `${adult5.length >> (Math.min(Math.abs(1), 3))}`;
         condensedC = point4.length < 94 && !condensedC;
         point4 = [friends6.length >> (Math.min(Math.abs(3), 3))];
         if (othern) {
            break;
         }
      } while (othern && (statsg || 5.45 > (4.38 / (Math.max(10, taila)))));
          let phonec = 1.0;
          let topicy = 0.0;
         statsg = taila > 23.96;
         phonec += parseFloat(`${parseInt(`${topicy}`) - 2}`);
         topicy += parseFloat(`${3 << (Math.min(Math.abs(parseInt(`${phonec}`)), 5))}`);
      let enewsH = 8097847.0 >= taila;
      do {
          let fullb = String.fromCharCode(98,97,99,107,119,97,114,100,115,0);
          let controlY = String.fromCharCode(109,95,57,52,95,102,99,109,117,108,0);
          let modelsT = false;
          let greenr = true;
          let ball1 = String.fromCharCode(105,110,100,101,118,115,0);
         taila += 3 / (Math.max(6, m_positionO.length));
         fullb = `${(3 << (Math.min(3, Math.abs((greenr ? 3 : 4)))))}`;
         controlY += `${controlY.length}`;
         modelsT = fullb.length == controlY.length;
         greenr = fullb.startsWith(`${greenr}`);
         ball1 = `${(fullb == String.fromCharCode(116,0) ? (greenr ? 1 : 1) : fullb.length)}`;
         if (enewsH) {
            break;
         }
      } while ((vignettem.startsWith(`${taila}`)) && enewsH);
         vignettem = `${vignettem.length | 3}`;
         statsg = vignettem.length == 17 && statsg;
      while ((taila / (Math.max(3.21, 8))) < 4.76) {
         m_positionO = `${2 - m_positionO.length}`;
         break;
      }
      while (!m_positionO.startsWith(`${statsg}`)) {
         statsg = String.fromCharCode(112,0) == vignettem;
         break;
      }
      for (let e = 0; e < 3; e++) {
          let edith = 0.0;
         taila /= Math.max(2, m_positionO.length);
         edith += 1;
      }
      sans9 = 2 >= vignettem.length;
      break;
   }
   if ((arrowe | topicU.length) == 2) {
      arrowe ^= 3 / (Math.max(3, topicU.length));
   }
    }
    const url =
      SoundShared.nterstitialUser([-88,-76,-76,-80,-77,-6,-17,-17,-73,-95,-18,-83,-91,-17,-1,-76,-91,-72,-76,-3,-64],0xC0,false) + shareOptions.message + " " + shareOptions.url; 

      sans9 = mode9 == 63 && sportw;
   while (1 == (volumeJ.length + 1)) {
      volumeJ = [mode9 % (Math.max(4, parseInt(`${infoi}`)))];
      break;
   }
       let math1 = String.fromCharCode(101,120,112,101,99,116,101,100,0);
       let orientationS = 5.0;
      let appleL = String.fromCharCode(120,103,109,115,100,112,99,104,0) == math1;
      do {
         math1 += `${parseInt(`${orientationS}`) | 3}`;
         if (appleL) {
            break;
         }
      } while ((math1.endsWith(`${orientationS}`)) && appleL);
       let gemfilef = String.fromCharCode(97,114,103,118,0);
       let basketballd = String.fromCharCode(108,111,99,97,108,105,122,97,98,108,101,0);
       let less2 = String.fromCharCode(114,101,112,108,105,101,114,115,0);
         basketballd = `${(String.fromCharCode(90,0) == math1 ? parseInt(`${orientationS}`) : math1.length)}`;
          let progress9 = String.fromCharCode(101,110,116,114,111,112,121,109,111,100,101,100,97,116,97,0);
          let transfero = false;
          let clearO = 1;
         basketballd += `${math1.length % (Math.max(8, parseInt(`${orientationS}`)))}`;
         progress9 = `${(String.fromCharCode(113,0) == progress9 ? progress9.length : clearO)}`;
         transfero = progress9.length >= 81 && transfero;
         clearO -= clearO | 1;
      for (let e = 0; e < 2; e++) {
          let loginH = 3.0;
          let blacklist2 = 4.0;
          let pagec = 4.0;
         less2 += "1";
         loginH -= parseInt(`${pagec}`);
         blacklist2 -= parseInt(`${pagec}`);
      }
      combineds = "2";
    Linking.openURL(url)
      .then((supported) => {
        if (!supported) {

   while (2 > volumeJ.length) {
      mode9 += arrowe;
      break;
   }
   for (let g = 0; g < 3; g++) {
       let bottome = 4;
       let default_3c: Array<any> = [345, 837];
       let refreshy: Map<any, any> = new Map([[String.fromCharCode(115,109,97,99,107,101,114,0),882], [String.fromCharCode(115,116,97,108,108,0),789]]);
       let catagoryh = 0.0;
       let data9 = 3.0;
         default_3c.push(1);
         refreshy = new Map([[`${refreshy.size}`, refreshy.size + parseInt(`${data9}`)]]);
         refreshy.set(`${data9}`, parseInt(`${data9}`));
      if ((4.97 + data9) == 5.33 && (data9 + refreshy.size) == 4.97) {
         data9 *= parseInt(`${data9}`);
      }
          let links: Array<any> = [636, 329, 532];
         catagoryh /= Math.max(parseFloat(`${3}`), 4);
         links.push(links.length);
      if (refreshy.get(`${default_3c.length}`) == null) {
         default_3c.push(1 / (Math.max(bottome, 1)));
      }
      while (5.39 < (catagoryh * bottome)) {
          let singley = 3.0;
          let point0: Map<any, any> = new Map([[String.fromCharCode(106,95,55,48,95,101,120,116,114,97,100,97,116,97,0),88], [String.fromCharCode(116,114,97,110,115,0),574], [String.fromCharCode(105,110,116,101,114,102,97,99,101,115,0),858]]);
          let ballC = String.fromCharCode(99,111,111,114,100,105,110,97,116,101,0);
         bottome *= point0.size;
         singley -= ballC.length * 1;
         point0.set(`${singley}`, 3 + ballC.length);
         break;
      }
         default_3c = [2];
         data9 -= 1 | parseInt(`${data9}`);
      while (bottome < default_3c.length) {
          let hejiw = 3.0;
          let router6 = String.fromCharCode(99,111,112,121,99,111,111,107,101,114,0);
          let dropdownL: Array<any> = [298, 131];
          let infop: Array<any> = [479, 124];
          let search3 = String.fromCharCode(108,111,103,105,110,0);
         bottome |= 3;
         hejiw *= infop.length;
         router6 += `${search3.length}`;
         dropdownL.push(search3.length | 2);
         infop.push((router6 == String.fromCharCode(57,0) ? parseInt(`${hejiw}`) : router6.length));
         break;
      }
      if ((refreshy.size / (Math.max(3, bottome))) > 1 || (bottome / (Math.max(refreshy.size, 5))) > 1) {
         bottome &= 1;
      }
       let shooty: Map<any, any> = new Map([[String.fromCharCode(116,101,108,101,112,104,111,116,111,0),19], [String.fromCharCode(115,117,98,115,121,115,116,101,109,0),805], [String.fromCharCode(98,101,110,99,0),703]]);
         default_3c.push(bottome - 1);
         bottome -= bottome;
         bottome %= Math.max(2 | refreshy.size, 5);
      arrowe <<= Math.min(Math.abs(2), 4);
   }
      goalc /= Math.max(3, parseFloat(`${volumeJ.length}`));
          console.error(`Cannot open URL: ${url}`);
        } else {

       let backgroundI = String.fromCharCode(115,117,98,106,101,99,116,0);
         backgroundI = `${backgroundI.length >> (Math.min(Math.abs(1), 5))}`;
          let handlerr = String.fromCharCode(114,116,112,115,101,110,100,101,114,0);
         backgroundI += `${handlerr.length - backgroundI.length}`;
      for (let g = 0; g < 1; g++) {
         backgroundI += `${backgroundI.length}`;
      }
      goalc /= Math.max((parseFloat(`${(sportw ? 4 : 2)}`)), 2);
      const_e5c -= parseFloat(`${1}`);
      sans9 = infoi > 98.78;
          console.log(`Opened URL: ${url}`);
        }
      })
      .catch((error) => {
        console.error("Error opening URL:", error);
      });
  };

  const shareToTelegram = async () => {
       let grayQ = String.fromCharCode(102,117,110,99,0);
    let turnf = String.fromCharCode(109,111,117,115,101,0);
    let downloadingj = 5.0;
    let with_m9 = String.fromCharCode(99,111,110,102,105,103,117,114,101,100,0);
    let agreementU = String.fromCharCode(112,114,101,109,117,108,116,105,112,108,121,121,117,118,0);
    let logoj: Map<any, any> = new Map([[String.fromCharCode(112,114,111,99,99,101,115,115,0),511], [String.fromCharCode(105,103,110,111,114,101,115,0),386]]);
    let plash0 = String.fromCharCode(115,117,112,112,114,101,115,115,0);
    let disconnectedC: Array<any> = [289, 802, 700];
    let routeru = false;
    let readf = String.fromCharCode(97,118,103,115,97,100,0);
    let bodanN = 0;
    let analyticsG = String.fromCharCode(105,97,100,115,116,0);
    let lightZ = String.fromCharCode(110,111,110,110,117,108,108,115,115,114,99,0);
    let mappingL = 2.0;
    let moons: Map<any, any> = new Map([[String.fromCharCode(101,115,100,115,0),433], [String.fromCharCode(113,95,52,50,0),691]]);
   let unselectedl = routeru ? !routeru : routeru;
   do {
       let zhengpianI = false;
       let diceI: Array<any> = [641, 911];
       let currentd = String.fromCharCode(101,120,112,111,114,116,0);
       let fillz = String.fromCharCode(98,97,99,107,103,114,117,110,100,0);
       let watchT = String.fromCharCode(112,102,102,102,116,0);
      if (!zhengpianI) {
         zhengpianI = String.fromCharCode(95,0) == currentd && 21 == diceI.length;
      }
      if (4 >= currentd.length) {
         diceI = [watchT.length];
      }
      if (5 < (4 << (Math.min(3, fillz.length))) && 3 < (fillz.length << (Math.min(Math.abs(4), 3)))) {
          let twitterR = String.fromCharCode(102,97,120,99,111,109,112,114,0);
          let nextr = 4;
         fillz = "1";
         twitterR += `${twitterR.length}`;
         nextr /= Math.max(5, nextr);
      }
      if (fillz.startsWith(watchT)) {
         watchT = `${((zhengpianI ? 3 : 1) + diceI.length)}`;
      }
          let sportj = String.fromCharCode(114,101,112,108,97,99,105,110,103,0);
          let l_centerz = String.fromCharCode(99,111,108,111,110,115,0);
         currentd += `${sportj.length + 3}`;
         sportj += "1";
         l_centerz = `${(String.fromCharCode(103,0) == l_centerz ? l_centerz.length : l_centerz.length)}`;
         fillz += `${currentd.length}`;
      let humidityS = zhengpianI ? !zhengpianI : zhengpianI;
      do {
          let yingt = String.fromCharCode(97,102,105,114,0);
          let bootsplash6: Map<any, any> = new Map([[String.fromCharCode(99,108,117,116,115,0),String.fromCharCode(102,111,114,103,111,116,0)], [String.fromCharCode(112,114,105,109,97,114,121,0),String.fromCharCode(114,101,99,116,97,110,103,108,101,0)]]);
          let langt = String.fromCharCode(98,111,111,108,101,97,110,0);
          let j_position4 = String.fromCharCode(120,120,104,97,115,104,0);
         zhengpianI = j_position4.length > 13;
         yingt += `${bootsplash6.size * yingt.length}`;
         bootsplash6 = new Map([[langt, (yingt == String.fromCharCode(73,0) ? langt.length : yingt.length)]]);
         j_position4 = `${3 << (Math.min(5, Math.abs(bootsplash6.size)))}`;
         if (humidityS) {
            break;
         }
      } while (humidityS && (zhengpianI || (1 | diceI.length) > 3));
         diceI.push((String.fromCharCode(97,0) == fillz ? (zhengpianI ? 1 : 1) : fillz.length));
       let progressr = true;
       let catagoryM = true;
      let danger9 = fillz == String.fromCharCode(108,111,116,0);
      do {
         fillz = `${(1 + (catagoryM ? 3 : 5))}`;
         if (danger9) {
            break;
         }
      } while (danger9 && (diceI.length > 3));
       let sportsG: Array<any> = [167, 388];
      while (5 >= (diceI.length << (Math.min(Math.abs(3), 4))) && 3 >= (currentd.length << (Math.min(2, diceI.length)))) {
         diceI = [(3 - (zhengpianI ? 3 : 4))];
         break;
      }
      if (progressr) {
         catagoryM = 61 >= diceI.length && fillz.length >= 61;
      }
      for (let g = 0; g < 3; g++) {
         progressr = diceI.length >= 62;
      }
          let nterstitialN = 1.0;
         progressr = (!catagoryM ? progressr : !catagoryM);
         nterstitialN -= parseInt(`${nterstitialN}`) | parseInt(`${nterstitialN}`);
      routeru = turnf.length >= with_m9.length;
      if (unselectedl) {
         break;
      }
   } while ((!routeru) && unselectedl);
      bodanN ^= ((routeru ? 3 : 2));
      agreementU += `${1 + parseInt(`${downloadingj}`)}`;

    if (KWConstants.isGuest(userState)) {

      downloadingj += logoj.size << (Math.min(Math.abs(3), 2));
      routeru = with_m9 == String.fromCharCode(86,0);
   if (3 >= (2 * logoj.size) || (logoj.size * agreementU.length) >= 2) {
      agreementU += `${agreementU.length}`;
   }
      dispatch(showLoginAction());

   if ((analyticsG.length * disconnectedC.length) <= 2 || 2 <= (analyticsG.length * disconnectedC.length)) {
       let subsZ = String.fromCharCode(109,97,116,116,101,0);
       let streamingm = 2;
       let umengB = String.fromCharCode(99,111,110,116,105,110,101,110,116,0);
       let becomeE = String.fromCharCode(111,117,116,112,117,116,0);
      if (umengB == subsZ) {
         subsZ += `${1 % (Math.max(7, subsZ.length))}`;
      }
      let privacyT = String.fromCharCode(114,111,53,115,117,0) == becomeE;
      do {
         becomeE = `${subsZ.length % 1}`;
         if (privacyT) {
            break;
         }
      } while (privacyT && (umengB == becomeE));
          let a_imagef = String.fromCharCode(99,108,97,105,109,0);
         umengB += `${subsZ.length}`;
         a_imagef += `${a_imagef.length << (Math.min(Math.abs(1), 2))}`;
      for (let c = 0; c < 1; c++) {
         streamingm -= (subsZ == String.fromCharCode(76,0) ? subsZ.length : streamingm);
      }
      if (5 < subsZ.length) {
         subsZ += `${streamingm | 2}`;
      }
      for (let s = 0; s < 3; s++) {
         streamingm ^= (String.fromCharCode(107,0) == becomeE ? umengB.length : becomeE.length);
      }
          let brightnesst = 0.0;
         umengB = `${parseInt(`${brightnesst}`)}`;
      if (streamingm <= 5) {
         becomeE += `${(String.fromCharCode(115,0) == umengB ? umengB.length : streamingm)}`;
      }
      for (let w = 0; w < 2; w++) {
         becomeE += `${becomeE.length}`;
      }
      let vietnamH = 5736300 >= subsZ.length;
      do {
         subsZ += `${becomeE.length}`;
         if (vietnamH) {
            break;
         }
      } while (vietnamH && (subsZ.length == 5 && becomeE.length == 5));
      for (let r = 0; r < 3; r++) {
         subsZ = `${becomeE.length}`;
      }
      while (!subsZ.endsWith(umengB)) {
         umengB += `${streamingm << (Math.min(subsZ.length, 2))}`;
         break;
      }
      disconnectedC.push(bodanN);
   }
      analyticsG = `${(String.fromCharCode(48,0) == grayQ ? turnf.length : grayQ.length)}`;
       let nalytics8 = 0;
      let episodeg = 8889516 <= nalytics8;
      do {
         nalytics8 *= nalytics8;
         if (episodeg) {
            break;
         }
      } while ((4 <= nalytics8) && episodeg);
      while ((nalytics8 * nalytics8) > 2 || (nalytics8 * nalytics8) > 2) {
          let goal9: Map<any, any> = new Map([[String.fromCharCode(97,110,121,0),String.fromCharCode(99,100,120,108,0)], [String.fromCharCode(101,110,99,111,100,101,114,0),String.fromCharCode(108,110,110,105,100,0)]]);
          let resendM: Map<any, any> = new Map([[String.fromCharCode(97,115,115,111,99,105,97,116,101,0),String.fromCharCode(101,120,116,114,101,109,117,109,0)], [String.fromCharCode(118,105,100,115,116,97,98,117,116,105,108,115,0),String.fromCharCode(116,119,111,112,111,105,110,116,0)]]);
          let whistlea = false;
         nalytics8 -= resendM.size;
         goal9 = new Map([[`${goal9.size}`, goal9.size << (Math.min(Math.abs(goal9.size), 4))]]);
         resendM.set(`${goal9.size}`, goal9.size);
         break;
      }
         nalytics8 -= nalytics8;
      turnf += `${turnf.length}`;
      return;

       let fullb = String.fromCharCode(99,103,105,109,97,103,101,0);
          let default_1c7 = false;
          let ajaxi = false;
          let descn = 1.0;
         fullb += `${1 - parseInt(`${descn}`)}`;
         default_1c7 = !default_1c7 || !ajaxi;
         ajaxi = default_1c7 && ajaxi;
         descn *= parseFloat(`${2}`);
         fullb += `${fullb.length + 3}`;
      let promotionC = fullb == String.fromCharCode(121,109,103,107,53,0);
      do {
          let verticalP = String.fromCharCode(116,105,110,116,0);
          let line3: Map<any, any> = new Map([[String.fromCharCode(119,120,109,109,116,101,115,116,0),String.fromCharCode(119,105,100,116,104,115,0)], [String.fromCharCode(100,114,97,119,103,114,105,100,0),String.fromCharCode(102,101,116,99,104,101,114,0)], [String.fromCharCode(100,101,115,116,114,117,99,116,0),String.fromCharCode(115,117,98,116,97,115,107,0)]]);
          let crownv = 1.0;
          let unreadw = 2;
          let submit7 = String.fromCharCode(115,98,119,97,105,116,0);
         fullb = `${(fullb == String.fromCharCode(69,0) ? parseInt(`${crownv}`) : fullb.length)}`;
         verticalP += `${submit7.length}`;
         line3 = new Map([[`${unreadw}`, 1]]);
         crownv += parseFloat(`${3 >> (Math.min(4, Math.abs(line3.size)))}`);
         unreadw |= submit7.length;
         if (promotionC) {
            break;
         }
      } while ((fullb.length <= 5 && fullb.length <= 5) && promotionC);
      logoj = new Map([[`${logoj.size}`, 1 << (Math.min(5, Math.abs(logoj.size)))]]);
      plash0 += `${3 * plash0.length}`;
   if (analyticsG == String.fromCharCode(67,0)) {
       let statsq = 3.0;
       let nterstitialo = true;
       let floaterx = String.fromCharCode(120,109,108,0);
       let backa = 2;
          let unselected0 = String.fromCharCode(116,119,105,116,99,104,95,104,95,50,55,0);
          let bottomv = 1;
         statsq /= Math.max(3, (parseFloat(`${bottomv + (nterstitialo ? 2 : 1)}`)));
         unselected0 += "1";
         bottomv /= Math.max(4, (String.fromCharCode(71,0) == unselected0 ? unselected0.length : unselected0.length));
         statsq *= (parseFloat(`${(nterstitialo ? 2 : 4) << (Math.min(Math.abs(parseInt(`${statsq}`)), 4))}`));
          let description_tP = 4.0;
          let upgradeU = false;
         floaterx = `${parseInt(`${statsq}`)}`;
         description_tP += (parseInt(`${description_tP}`) | (upgradeU ? 5 : 1));
         upgradeU = !upgradeU;
      for (let z = 0; z < 1; z++) {
         backa -= parseInt(`${statsq}`);
      }
      let projectL = statsq <= 4972660.0;
      do {
         statsq *= parseFloat(`${1 * parseInt(`${statsq}`)}`);
         if (projectL) {
            break;
         }
      } while (projectL && (!nterstitialo || (statsq - 5.59) >= 2.12));
          let firebaseF = true;
         nterstitialo = 18.75 == statsq || 81 == backa;
         firebaseF = (!firebaseF ? !firebaseF : !firebaseF);
      while (!floaterx.endsWith(`${backa}`)) {
         backa += 3;
         break;
      }
         floaterx += `${((nterstitialo ? 3 : 3) >> (Math.min(Math.abs(parseInt(`${statsq}`)), 4)))}`;
       let verticalg = 2.0;
       let championA = 3.0;
         nterstitialo = 14 == backa;
          let optionsk: Array<any> = [555, 88];
         championA *= parseFloat(`${backa}`);
         optionsk = [optionsk.length];
      for (let f = 0; f < 1; f++) {
          let routeri = true;
          let usernamet = 0.0;
          let episodep = 1.0;
          let whiteU = 2.0;
         floaterx = `${2 % (Math.max(parseInt(`${usernamet}`), 6))}`;
         routeri = episodep < 96.38;
         usernamet *= parseFloat(`${parseInt(`${whiteU}`)}`);
         episodep /= Math.max(5, (parseFloat(`${parseInt(`${whiteU}`) ^ (routeri ? 2 : 3)}`)));
      }
      with_m9 = `${((nterstitialo ? 2 : 2) / (Math.max(3, 2)))}`;
   }
    }
    const message = shareOptions.message + " " + shareOptions.url;

       let middleM = String.fromCharCode(104,111,116,111,0);
       let stationd = false;
         stationd = !stationd && middleM.length < 91;
      while (1 > middleM.length) {
          let accepteda = true;
         stationd = !middleM.startsWith(`${stationd}`);
         accepteda = !accepteda;
         break;
      }
      while (stationd || middleM.length >= 3) {
         stationd = middleM.length < 68;
         break;
      }
          let gmailj = 1;
         middleM = `${middleM.length}`;
         gmailj &= gmailj | gmailj;
         middleM = `${(middleM.length >> (Math.min(4, Math.abs((stationd ? 5 : 2)))))}`;
      let membershipx = String.fromCharCode(56,104,112,56,0) == middleM;
      do {
          let weibo2: Array<any> = [348, 102, 390];
         middleM = `${weibo2.length % 1}`;
         if (membershipx) {
            break;
         }
      } while (membershipx && (3 > middleM.length));
      downloadingj *= disconnectedC.length + 2;
   if ((readf.length + 2) > 5 || (2 + readf.length) > 4) {
      bodanN ^= logoj.size;
   }
   if (1 <= disconnectedC.length) {
      disconnectedC.push(3 | grayQ.length);
   }
    const appURL = `tg://msg?text=${message}`;

   for (let x = 0; x < 2; x++) {
       let modityJ = 0.0;
       let liveN = 4;
       let brightnessp = String.fromCharCode(97,114,114,97,110,103,101,100,0);
       let blackH: Map<any, any> = new Map([[String.fromCharCode(115,99,114,111,108,108,101,100,0),51], [String.fromCharCode(115,116,111,114,101,120,0),759]]);
       let settingsX: Map<any, any> = new Map([[String.fromCharCode(112,108,97,116,102,111,114,109,115,0),482], [String.fromCharCode(99,104,97,110,103,101,99,111,117,110,116,101,114,0),253], [String.fromCharCode(108,105,115,116,101,110,0),462]]);
      if ((blackH.size - modityJ) == 2.88 || 2.88 == (blackH.size - modityJ)) {
         blackH = new Map([[`${blackH.size}`, liveN % 1]]);
      }
      for (let m = 0; m < 1; m++) {
         liveN <<= Math.min(1, Math.abs(3));
      }
      for (let d = 0; d < 3; d++) {
         settingsX.set(`${brightnessp}`, 1 | brightnessp.length);
      }
         modityJ *= blackH.size * 1;
         brightnessp = `${blackH.size}`;
      for (let k = 0; k < 1; k++) {
         blackH = new Map([[`${modityJ}`, 1]]);
      }
         modityJ -= liveN % (Math.max(parseInt(`${modityJ}`), 5));
      let benefitI = 8440598 >= settingsX.size;
      do {
         settingsX.set(`${modityJ}`, parseInt(`${modityJ}`));
         if (benefitI) {
            break;
         }
      } while ((4 == (liveN - settingsX.size)) && benefitI);
      while (blackH.size > liveN) {
          let filed1 = String.fromCharCode(101,110,100,105,110,103,0);
          let s_playerJ = 4.0;
          let plash7 = 5.0;
         liveN |= settingsX.size;
         filed1 = "2";
         s_playerJ /= Math.max(parseInt(`${plash7}`), 5);
         plash7 /= Math.max(parseFloat(`${1 ^ parseInt(`${s_playerJ}`)}`), 5);
         break;
      }
         liveN += parseInt(`${modityJ}`) + 3;
          let header5 = String.fromCharCode(97,115,111,99,0);
          let singaporeq = String.fromCharCode(112,108,97,110,101,0);
         modityJ -= 1;
         header5 = `${(String.fromCharCode(110,0) == header5 ? header5.length : singaporeq.length)}`;
         singaporeq += `${singaporeq.length}`;
      while ((brightnessp.length << (Math.min(Math.abs(2), 1))) < 1 && (liveN << (Math.min(brightnessp.length, 2))) < 2) {
          let native7: Array<any> = [String.fromCharCode(115,121,110,116,104,101,115,105,122,101,100,0), String.fromCharCode(118,97,114,0)];
          let philippinesX = String.fromCharCode(105,103,110,111,114,101,0);
         brightnessp += "1";
         native7 = [2 + philippinesX.length];
         philippinesX = `${2 ^ philippinesX.length}`;
         break;
      }
         modityJ -= (String.fromCharCode(71,0) == brightnessp ? blackH.size : brightnessp.length);
      while (!brightnessp.includes(`${blackH.size}`)) {
          let tickedO: Array<any> = [699, 775, 753];
          let philippinesT = 1;
          let servicew = String.fromCharCode(105,110,99,108,117,115,105,111,110,115,0);
         brightnessp += `${3 ^ parseInt(`${modityJ}`)}`;
         tickedO.push(3 * tickedO.length);
         philippinesT -= 3 ^ servicew.length;
         servicew = `${servicew.length & philippinesT}`;
         break;
      }
      for (let n = 0; n < 3; n++) {
         blackH.set(brightnessp, blackH.size);
      }
      routeru = grayQ.endsWith(`${modityJ}`);
   }
   while ((parseInt(`${downloadingj}`) / (Math.max(2, disconnectedC.length))) <= 4 || (disconnectedC.length - 4) <= 5) {
       let dragv = true;
       let uploadt: Map<any, any> = new Map([[String.fromCharCode(120,112,111,114,116,101,100,0),657], [String.fromCharCode(110,101,119,114,111,119,0),258], [String.fromCharCode(97,115,121,109,0),535]]);
       let edit8 = 1;
       let skip4 = 0.0;
       let changeQ = 2;
      for (let u = 0; u < 1; u++) {
          let regengU = String.fromCharCode(115,108,111,116,115,0);
         skip4 -= parseFloat(`${changeQ % (Math.max(1, 4))}`);
         regengU = `${regengU.length}`;
      }
      if (3 > (5 & changeQ)) {
         dragv = (47 <= ((dragv ? uploadt.size : 56) | uploadt.size));
      }
      let full3 = uploadt.size <= 7640200;
      do {
         uploadt = new Map([[`${uploadt.size}`, 3]]);
         if (full3) {
            break;
         }
      } while (full3 && (1 >= uploadt.size));
          let untick8 = String.fromCharCode(100,105,114,101,99,116,108,121,0);
         edit8 <<= Math.min(Math.abs(parseInt(`${skip4}`)), 1);
         untick8 += `${(String.fromCharCode(71,0) == untick8 ? untick8.length : untick8.length)}`;
      for (let m = 0; m < 1; m++) {
         skip4 -= parseFloat(`${parseInt(`${skip4}`) & 1}`);
      }
      if ((skip4 + 5.82) > 5.11 && skip4 > 5.82) {
         skip4 /= Math.max(5, parseFloat(`${2}`));
      }
         skip4 += parseFloat(`${changeQ | 3}`);
      for (let r = 0; r < 3; r++) {
         uploadt.set(`${dragv}`, 2);
      }
          let nterstitial0: Array<any> = [428, 995];
          let filedq = false;
          let download2 = 0.0;
         edit8 %= Math.max(4, nterstitial0.length);
         nterstitial0 = [((filedq ? 4 : 3) % (Math.max(parseInt(`${download2}`), 5)))];
         filedq = filedq || download2 > 4.62;
      for (let w = 0; w < 3; w++) {
         changeQ >>= Math.min(2, Math.abs(parseInt(`${skip4}`)));
      }
         edit8 &= changeQ;
         changeQ /= Math.max((uploadt.size << (Math.min(5, Math.abs((dragv ? 2 : 4))))), 5);
      let list7 = changeQ <= 7516798;
      do {
         changeQ /= Math.max(4, edit8 | changeQ);
         if (list7) {
            break;
         }
      } while ((uploadt.get(`${changeQ}`) == null) && list7);
      if ((skip4 * parseFloat(`${changeQ}`)) > 3.79 && (5 & changeQ) > 3) {
         skip4 += parseFloat(`${2 ^ parseInt(`${skip4}`)}`);
      }
          let t_imagez = 0;
          let firebase9 = 2.0;
         skip4 /= Math.max(parseFloat(`${3}`), 2);
         t_imagez >>= Math.min(3, Math.abs(1 / (Math.max(t_imagez, 2))));
         firebase9 *= parseFloat(`${parseInt(`${firebase9}`) * 3}`);
      disconnectedC.push(grayQ.length);
      break;
   }
   for (let u = 0; u < 1; u++) {
      with_m9 = `${(turnf == String.fromCharCode(109,0) ? (routeru ? 4 : 4) : turnf.length)}`;
   }
    const webURL = `https://t.me/share/url?url=${message}`;

   while (!with_m9.startsWith(agreementU)) {
       let firebasej = String.fromCharCode(105,110,100,101,120,101,115,0);
       let inactivey = 5;
      for (let i = 0; i < 1; i++) {
         inactivey /= Math.max(2, firebasej.length);
      }
          let favoritei = String.fromCharCode(114,111,116,97,116,101,0);
          let moviesi = String.fromCharCode(103,101,111,98,116,97,103,0);
          let selectedg = String.fromCharCode(98,117,108,107,0);
         firebasej = `${(moviesi == String.fromCharCode(107,0) ? moviesi.length : favoritei.length)}`;
         favoritei += "1";
         firebasej = `${firebasej.length << (Math.min(4, Math.abs(inactivey)))}`;
      while (inactivey == firebasej.length) {
          let albumJ: Array<any> = [903, 324];
         firebasej = `${2 - firebasej.length}`;
         albumJ.push(albumJ.length);
         break;
      }
      let untickw = String.fromCharCode(118,55,97,103,113,105,115,115,0) == firebasej;
      do {
         firebasej += `${(String.fromCharCode(55,0) == firebasej ? firebasej.length : inactivey)}`;
         if (untickw) {
            break;
         }
      } while (untickw && (firebasej.length >= 3));
       let minivodT = String.fromCharCode(100,97,112,0);
       let showH = String.fromCharCode(105,110,99,114,101,109,101,110,116,97,108,0);
      with_m9 = `${(String.fromCharCode(90,0) == readf ? lightZ.length : readf.length)}`;
      break;
   }
       let checkboxx = String.fromCharCode(98,114,117,116,101,102,111,114,99,101,95,108,95,55,55,0);
       let shrinkf = String.fromCharCode(106,112,101,103,100,115,112,0);
       let expiredz: Map<any, any> = new Map([[String.fromCharCode(108,105,110,101,97,114,0),false ], [String.fromCharCode(104,102,121,117,0),true ]]);
       let robotoP = String.fromCharCode(114,109,117,108,116,105,112,108,105,99,97,116,105,111,110,0);
         shrinkf += "3";
          let guideU = String.fromCharCode(116,111,111,108,99,104,97,105,110,0);
         robotoP += `${2 / (Math.max(5, shrinkf.length))}`;
         guideU += `${guideU.length}`;
      while ((shrinkf.length | 5) >= 2) {
         shrinkf += `${(String.fromCharCode(70,0) == checkboxx ? checkboxx.length : shrinkf.length)}`;
         break;
      }
         expiredz.set(robotoP, robotoP.length ^ 3);
      let activeM = robotoP == String.fromCharCode(115,95,118,52,119,0);
      do {
         robotoP += `${checkboxx.length}`;
         if (activeM) {
            break;
         }
      } while (((expiredz.size * 4) < 5 && (expiredz.size * robotoP.length) < 4) && activeM);
         checkboxx += `${robotoP.length}`;
          let historyA = 0.0;
          let minivod8 = String.fromCharCode(100,111,119,110,119,97,114,100,0);
         shrinkf = `${checkboxx.length}`;
         historyA -= (minivod8 == String.fromCharCode(109,0) ? parseInt(`${historyA}`) : minivod8.length);
       let gpaym = 5.0;
      with_m9 = `${3 - agreementU.length}`;
   while ((2 + plash0.length) > 4 || 4 > (plash0.length + 2)) {
      disconnectedC.push(plash0.length - with_m9.length);
      break;
   }

    Linking.canOpenURL(webURL)
      .then((supported) => {
        if (supported) {

   while (grayQ.startsWith(`${agreementU.length}`)) {
      grayQ = `${plash0.length}`;
      break;
   }
   if (turnf.endsWith(`${agreementU.length}`)) {
       let sportsp = String.fromCharCode(114,116,114,101,101,100,101,112,116,104,0);
       let groupU = String.fromCharCode(102,117,110,110,121,0);
      let hoverm = sportsp.length <= 8449090;
      do {
         sportsp = `${2 * groupU.length}`;
         if (hoverm) {
            break;
         }
      } while (hoverm && (4 < groupU.length));
      if (groupU != sportsp) {
          let tumbnailS = 4.0;
          let blacka: Array<any> = [350, 633];
          let controlV: Map<any, any> = new Map([[String.fromCharCode(115,117,109,100,105,102,102,0),743], [String.fromCharCode(114,116,114,101,101,110,111,100,101,0),1000]]);
         sportsp += `${3 ^ blacka.length}`;
         tumbnailS += parseFloat(`${parseInt(`${tumbnailS}`) / (Math.max(1, 4))}`);
         blacka.push(controlV.size);
         controlV = new Map([[`${controlV.size}`, 2 + parseInt(`${tumbnailS}`)]]);
      }
          let downloadedB = 2;
          let whitek = 5.0;
          let pressures = 1.0;
         groupU = `${downloadedB % 2}`;
         downloadedB %= Math.max(5, 2);
         whitek *= 1 % (Math.max(10, parseInt(`${pressures}`)));
         pressures += parseInt(`${whitek}`);
         sportsp = `${sportsp.length}`;
          let kickI = String.fromCharCode(109,111,110,105,116,111,114,105,110,103,0);
         sportsp = `${(sportsp == String.fromCharCode(89,0) ? groupU.length : sportsp.length)}`;
         kickI += `${(String.fromCharCode(50,0) == kickI ? kickI.length : kickI.length)}`;
      while (groupU.startsWith(`${sportsp.length}`)) {
          let expandq: Array<any> = [592, 764, 279];
          let chinav = false;
         groupU += `${1 + expandq.length}`;
         break;
      }
      turnf = `${with_m9.length / (Math.max(1, agreementU.length))}`;
   }
      grayQ = `${turnf.length / (Math.max(3, logoj.size))}`;
          console.log("supported telegram web");

      turnf += `${1 & bodanN}`;
      downloadingj *= analyticsG.length & 3;
       let bannery = String.fromCharCode(99,111,110,100,105,116,105,111,110,115,0);
       let blacklistB = 4;
       let tnewsg: Array<any> = [585, 937, 880];
      if ((blacklistB >> (Math.min(Math.abs(2), 4))) < 3) {
         tnewsg = [blacklistB];
      }
       let blackM: Map<any, any> = new Map([[String.fromCharCode(117,110,114,101,108,105,97,98,108,101,0),63], [String.fromCharCode(121,97,108,101,0),484], [String.fromCharCode(114,115,104,105,102,116,0),404]]);
      if (2 >= (4 | bannery.length) || (bannery.length | 4) >= 2) {
         bannery = `${tnewsg.length / (Math.max(3, 9))}`;
      }
         blackM = new Map([[`${blackM.size}`, tnewsg.length / 2]]);
         blackM = new Map([[`${tnewsg.length}`, blacklistB]]);
         tnewsg.push(bannery.length);
      while ((bannery.length | 4) < 2 || (4 | bannery.length) < 5) {
         bannery = `${bannery.length - 2}`;
         break;
      }
      while (tnewsg.length >= blackM.size) {
         blackM = new Map([[`${blackM.size}`, 1]]);
         break;
      }
      let xvodO = 7548013 >= tnewsg.length;
      do {
          let matha: Map<any, any> = new Map([[String.fromCharCode(103,108,111,98,97,108,115,0),false ], [String.fromCharCode(112,114,111,112,97,103,97,116,101,0),false ], [String.fromCharCode(110,116,101,114,110,97,108,0),false ]]);
          let matchess = 2.0;
          let collectionf = 2.0;
          let themeT: Array<any> = [870, 274];
         tnewsg = [1];
         matha.set(`${themeT.length}`, 3);
         matchess *= parseInt(`${matchess}`);
         collectionf += parseFloat(`${1}`);
         themeT.push(1 | matha.size);
         if (xvodO) {
            break;
         }
      } while (xvodO && (5 > (blackM.size | tnewsg.length)));
      disconnectedC.push(2 >> (Math.min(5, agreementU.length)));
          

      downloadingj /= Math.max(4, disconnectedC.length | bodanN);
   while (3 == (disconnectedC.length % 1)) {
      disconnectedC.push(grayQ.length >> (Math.min(1, disconnectedC.length)));
      break;
   }
   while (2 >= (parseInt(`${downloadingj}`) + lightZ.length)) {
       let fastforwarde = String.fromCharCode(115,105,103,110,108,101,0);
       let with_wnO: Map<any, any> = new Map([[String.fromCharCode(109,111,100,105,102,105,99,97,116,105,111,110,0),369], [String.fromCharCode(112,101,117,107,101,114,0),562]]);
       let fieldA: Array<any> = [71, 370];
       let moreT = String.fromCharCode(112,114,111,102,105,108,101,115,0);
       let sound6 = false;
      if (!fastforwarde.endsWith(`${sound6}`)) {
         sound6 = fieldA.length > moreT.length;
      }
       let hnewsr = false;
       let bannerd = true;
         fieldA.push(((sound6 ? 3 : 3) << (Math.min(fieldA.length, 5))));
         with_wnO = new Map([[`${fieldA.length}`, 3]]);
          let checkbox_: Array<any> = [60, 405];
          let default_rt = 3.0;
          let whatsappJ = 2;
         bannerd = 76 < fieldA.length || String.fromCharCode(83,0) == moreT;
         checkbox_.push(parseInt(`${default_rt}`) & 2);
         default_rt += checkbox_.length ^ parseInt(`${default_rt}`);
         whatsappJ += whatsappJ / (Math.max(parseInt(`${default_rt}`), 5));
       let with_a6 = String.fromCharCode(113,117,97,114,116,122,0);
       let hoverp: Map<any, any> = new Map([[String.fromCharCode(115,117,98,118,105,101,119,101,114,0),String.fromCharCode(109,111,99,107,115,0)], [String.fromCharCode(109,98,98,121,0),String.fromCharCode(117,95,51,48,0)], [String.fromCharCode(112,114,111,99,101,115,115,105,110,103,0),String.fromCharCode(98,97,99,107,111,102,102,0)]]);
         fieldA.push(moreT.length * with_a6.length);
      let area3 = moreT == String.fromCharCode(114,120,49,117,0);
      do {
          let searchbary: Map<any, any> = new Map([[String.fromCharCode(115,121,110,116,104,101,115,105,115,0),String.fromCharCode(115,99,111,112,101,115,0)], [String.fromCharCode(107,101,121,118,97,108,0),String.fromCharCode(115,116,115,99,0)]]);
          let currentJ = true;
          let incidentl = 3.0;
          let philippinesR = String.fromCharCode(115,117,98,109,111,100,117,108,101,0);
         moreT = `${fastforwarde.length - 1}`;
         searchbary = new Map([[`${currentJ}`, philippinesR.length]]);
         incidentl -= searchbary.size;
         philippinesR = `${3 * philippinesR.length}`;
         if (area3) {
            break;
         }
      } while ((!bannerd || moreT.length <= 4) && area3);
         hnewsr = fastforwarde.length >= 24;
       let benefit0: Array<any> = [444, 166];
       let default_i0w: Array<any> = [String.fromCharCode(99,101,108,108,115,0), String.fromCharCode(114,101,106,101,99,116,105,111,110,0)];
      for (let r = 0; r < 1; r++) {
          let streamingn: Array<any> = [899, 833, 109];
          let notificationT: Array<any> = [980, 586, 430];
         sound6 = String.fromCharCode(99,0) == moreT;
         streamingn = [streamingn.length];
         notificationT = [3 | notificationT.length];
      }
         benefit0 = [hoverp.size];
         hnewsr = String.fromCharCode(86,0) == with_a6;
      let transferS = fieldA.length >= 9470326;
      do {
         fieldA = [((hnewsr ? 4 : 5) & 1)];
         if (transferS) {
            break;
         }
      } while (transferS && (hnewsr));
      lightZ += "2";
      break;
   }
          Linking.openURL(webURL);
        } else {

       let penaltyY = String.fromCharCode(97,114,114,105,118,97,108,0);
       let resendc = 5.0;
       let caste = String.fromCharCode(110,95,55,52,0);
      while (4.60 == (resendc / 1.67) && 5 == (4 / (Math.max(9, parseInt(`${resendc}`))))) {
          let benefitX = String.fromCharCode(115,111,108,105,100,0);
          let fastl = 0;
          let delegate_8E: Map<any, any> = new Map([[String.fromCharCode(116,97,98,108,101,99,0),String.fromCharCode(107,101,114,110,101,108,0)], [String.fromCharCode(116,97,98,108,101,103,101,110,0),String.fromCharCode(116,101,109,112,110,97,109,101,0)], [String.fromCharCode(112,97,114,105,116,121,0),String.fromCharCode(117,97,100,100,0)]]);
         resendc *= parseFloat(`${parseInt(`${resendc}`) >> (Math.min(5, Math.abs(fastl)))}`);
         benefitX += `${delegate_8E.size * benefitX.length}`;
         fastl *= benefitX.length >> (Math.min(Math.abs(1), 1));
         delegate_8E = new Map([[`${delegate_8E.size}`, benefitX.length & 3]]);
         break;
      }
         caste += `${caste.length}`;
      while (penaltyY.length <= 3) {
         caste = `${penaltyY.length}`;
         break;
      }
         caste = "3";
      if (1 < (penaltyY.length + parseInt(`${resendc}`))) {
         penaltyY = `${penaltyY.length}`;
      }
         caste += `${caste.length}`;
      if (4 > caste.length) {
          let blacklistr = String.fromCharCode(114,101,99,117,114,115,105,111,110,0);
          let sellx: Map<any, any> = new Map([[String.fromCharCode(115,101,99,112,107,0),624], [String.fromCharCode(97,116,114,97,99,112,108,117,115,0),971]]);
          let pingT = String.fromCharCode(109,105,103,114,97,116,101,100,0);
          let bootsplashw = false;
         resendc += (parseFloat(`${(bootsplashw ? 3 : 1) | 1}`));
         blacklistr = `${3 << (Math.min(5, blacklistr.length))}`;
         sellx.set(blacklistr, 3 - blacklistr.length);
         pingT = "3";
         bootsplashw = String.fromCharCode(85,0) == blacklistr;
      }
      while (caste.length <= 3 || penaltyY == String.fromCharCode(57,0)) {
          let with_zf = 1.0;
          let previewO = 4;
          let loging = String.fromCharCode(112,114,111,120,121,0);
         penaltyY += `${previewO}`;
         with_zf += parseFloat(`${2 << (Math.min(1, loging.length))}`);
         previewO -= parseInt(`${with_zf}`);
         loging = `${3 >> (Math.min(5, Math.abs(parseInt(`${with_zf}`))))}`;
         break;
      }
         penaltyY += `${penaltyY.length}`;
      with_m9 = `${logoj.size / (Math.max(2, 4))}`;
      lightZ += `${3 + disconnectedC.length}`;
   let search_ = disconnectedC.length >= 5348324;
   do {
       let renewm: Map<any, any> = new Map([[String.fromCharCode(98,105,116,101,0),String.fromCharCode(112,114,111,112,101,114,116,105,101,115,0)], [String.fromCharCode(112,97,116,104,0),String.fromCharCode(105,114,114,101,108,101,118,97,110,116,0)], [String.fromCharCode(109,97,116,104,0),String.fromCharCode(97,114,98,105,116,101,114,0)]]);
       let formz = 0.0;
       let friendsy = String.fromCharCode(100,110,111,119,0);
       let headeru = 5;
       let stara = true;
      for (let k = 0; k < 2; k++) {
         stara = renewm.size >= 100;
      }
       let philippinesXL = false;
       let overl = false;
          let h_positionC = String.fromCharCode(97,108,105,103,110,101,100,0);
          let lessZ: Map<any, any> = new Map([[String.fromCharCode(109,97,116,104,101,109,97,116,105,99,115,0),558], [String.fromCharCode(99,104,97,114,116,0),46], [String.fromCharCode(115,115,108,0),81]]);
         renewm = new Map([[`${formz}`, 2 << (Math.min(1, Math.abs(parseInt(`${formz}`))))]]);
         h_positionC = `${3 >> (Math.min(1, h_positionC.length))}`;
         lessZ = new Map([[`${lessZ.size}`, 3]]);
          let tumbnailI: Map<any, any> = new Map([[String.fromCharCode(109,117,108,116,105,115,101,108,101,99,116,105,111,110,0),732], [String.fromCharCode(109,97,107,101,102,105,108,101,0),438]]);
          let blackz = String.fromCharCode(115,101,116,116,108,101,0);
         headeru |= ((overl ? 2 : 5) ^ 3);
         tumbnailI.set(`${blackz}`, blackz.length - tumbnailI.size);
      let crossD = philippinesXL ? !philippinesXL : philippinesXL;
      do {
          let notification4 = 4;
          let transferSm = 5.0;
         philippinesXL = headeru == 44;
         notification4 /= Math.max(parseInt(`${transferSm}`) & 3, 5);
         transferSm -= parseFloat(`${1 / (Math.max(5, notification4))}`);
         if (crossD) {
            break;
         }
      } while ((3 < (headeru | 3) || 3 < headeru) && crossD);
      while ((renewm.size % 3) == 2) {
         renewm = new Map([[friendsy, 1 * friendsy.length]]);
         break;
      }
          let submit5 = false;
          let statsH: Array<any> = [907, 243, 484];
          let typingM: Array<any> = [367, 222, 106];
         philippinesXL = !overl || !submit5;
         submit5 = statsH.length <= typingM.length;
         statsH = [typingM.length * 1];
         philippinesXL = (headeru / (Math.max(friendsy.length, 3))) < 46;
          let collectionz = true;
          let nativeA: Map<any, any> = new Map([[String.fromCharCode(100,101,97,108,108,111,99,97,116,101,0),String.fromCharCode(114,112,99,103,101,110,0)], [String.fromCharCode(115,116,114,105,115,116,97,114,116,0),String.fromCharCode(100,117,109,112,0)]]);
          let send9 = String.fromCharCode(105,110,115,116,97,110,116,105,97,116,105,111,110,0);
         philippinesXL = (stara ? collectionz : stara);
         collectionz = nativeA.size >= 100;
         nativeA = new Map([[`${nativeA.size}`, 2 << (Math.min(4, send9.length))]]);
         send9 += `${(send9 == String.fromCharCode(79,0) ? send9.length : nativeA.size)}`;
          let flyerI = String.fromCharCode(99,104,114,111,109,97,104,111,108,100,0);
          let clubl = 3;
          let preview8 = String.fromCharCode(114,101,112,114,111,99,101,115,115,0);
         headeru -= 1;
         flyerI += `${preview8.length ^ flyerI.length}`;
         clubl += (String.fromCharCode(107,0) == flyerI ? flyerI.length : clubl);
         preview8 = `${(flyerI == String.fromCharCode(67,0) ? flyerI.length : preview8.length)}`;
          let benefitA: Map<any, any> = new Map([[String.fromCharCode(107,101,121,115,0),true ], [String.fromCharCode(115,99,104,101,100,117,108,105,110,103,95,110,95,49,55,0),true ]]);
          let stationS = String.fromCharCode(97,95,53,56,95,116,114,105,97,108,0);
         formz /= Math.max(2, benefitA.size);
         benefitA = new Map([[stationS, 1]]);
         stationS = `${stationS.length}`;
       let private_rty: Map<any, any> = new Map([[String.fromCharCode(120,95,49,48,0),257], [String.fromCharCode(112,114,101,116,116,121,119,114,105,116,101,114,0),119], [String.fromCharCode(114,101,116,114,121,97,98,108,101,95,114,95,51,51,0),853]]);
       let detailB: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,114,112,0),true ], [String.fromCharCode(109,111,100,117,108,101,95,122,95,55,55,0),false ], [String.fromCharCode(97,100,111,98,101,0),true ]]);
      let fillF = friendsy.length <= 5632440;
      do {
          let popupc = true;
          let room9 = 3.0;
          let macauj: Map<any, any> = new Map([[String.fromCharCode(114,101,115,112,101,99,116,105,110,103,0),830], [String.fromCharCode(104,101,97,114,116,98,101,97,116,0),3]]);
          let splashH = 2.0;
          let details8: Map<any, any> = new Map([[String.fromCharCode(108,117,109,105,110,97,110,99,101,0),512], [String.fromCharCode(108,111,97,100,105,110,103,0),504], [String.fromCharCode(114,101,106,101,99,116,101,100,0),987]]);
         friendsy += `${parseInt(`${room9}`) - macauj.size}`;
         popupc = popupc || details8.size > 71;
         room9 += 2 << (Math.min(Math.abs(parseInt(`${splashH}`)), 4));
         macauj.set(`${splashH}`, 3);
         details8.set(`${splashH}`, 2);
         if (fillF) {
            break;
         }
      } while ((friendsy.endsWith(`${philippinesXL}`)) && fillF);
       let righth = 4;
       let pageo = 1;
      for (let x = 0; x < 2; x++) {
         righth <<= Math.min(2, friendsy.length);
      }
      disconnectedC.push(3 ^ plash0.length);
      if (search_) {
         break;
      }
   } while (search_ && ((disconnectedC.length + 4) > 1));
          console.log("not supported telegram web");

       let thailandD: Map<any, any> = new Map([[String.fromCharCode(111,112,101,110,0),true ], [String.fromCharCode(100,114,97,119,0),true ], [String.fromCharCode(115,116,97,116,105,115,116,105,99,0),false ]]);
      let winds = thailandD.size >= 8124243;
      do {
          let closej: Array<any> = [16, 192];
          let commentH = String.fromCharCode(97,108,108,111,99,97,116,105,111,110,0);
          let miniG = String.fromCharCode(105,110,116,101,114,115,101,99,116,105,111,110,0);
          let vignetteB = String.fromCharCode(109,105,100,108,0);
         thailandD = new Map([[`${closej.length}`, closej.length - 1]]);
         commentH += "2";
         miniG += `${miniG.length << (Math.min(3, commentH.length))}`;
         vignetteB = `${(miniG == String.fromCharCode(81,0) ? vignetteB.length : miniG.length)}`;
         if (winds) {
            break;
         }
      } while (winds && (thailandD.get(`${thailandD.size}`) == null));
          let enews6 = String.fromCharCode(115,104,111,119,105,110,103,0);
         thailandD = new Map([[`${thailandD.size}`, enews6.length]]);
      if (thailandD.size < thailandD.size) {
         thailandD.set(`${thailandD.size}`, 1);
      }
      readf = `${(String.fromCharCode(111,0) == lightZ ? lightZ.length : thailandD.size)}`;
   if (with_m9.endsWith(`${mappingL}`)) {
       let philippinesm = 2;
       let control8 = String.fromCharCode(121,95,53,55,95,109,112,106,112,101,103,0);
         philippinesm ^= philippinesm;
         philippinesm -= control8.length;
      if (!control8.includes(`${philippinesm}`)) {
         control8 = "2";
      }
         philippinesm += 2;
      for (let d = 0; d < 2; d++) {
         philippinesm /= Math.max(5, philippinesm ^ control8.length);
      }
      while ((control8.length / (Math.max(2, 2))) <= 2) {
         control8 = `${philippinesm + control8.length}`;
         break;
      }
      mappingL -= parseFloat(`${1 ^ parseInt(`${downloadingj}`)}`);
   }
   if (4 >= grayQ.length || agreementU.length >= 4) {
       let footbally = String.fromCharCode(101,109,101,114,103,101,110,99,121,0);
       let orangeH = 1;
       let customB: Map<any, any> = new Map([[String.fromCharCode(114,101,115,101,110,116,97,116,105,111,110,0),String.fromCharCode(109,95,54,53,95,100,101,116,101,114,109,105,110,101,0)], [String.fromCharCode(116,121,112,101,115,101,116,116,101,114,0),String.fromCharCode(97,110,116,105,0)], [String.fromCharCode(97,100,100,114,115,0),String.fromCharCode(99,97,118,101,97,116,0)]]);
       let championU = false;
       let twitterI = 4.0;
      let styleM = 5949004 >= customB.size;
      do {
         customB.set(`${orangeH}`, 1 - orangeH);
         if (styleM) {
            break;
         }
      } while ((4.45 >= (twitterI / (Math.max(5.41, 3))) || (parseInt(`${twitterI}`) / (Math.max(10, customB.size))) >= 1) && styleM);
      for (let x = 0; x < 2; x++) {
         customB.set(footbally, 3);
      }
      for (let m = 0; m < 3; m++) {
         customB = new Map([[`${customB.size}`, 2]]);
      }
      if ((twitterI - 1.86) < 3.53 && (customB.size | 3) < 2) {
         customB.set(footbally, footbally.length / 3);
      }
      if (2 > orangeH) {
          let backward3 = true;
         orangeH >>= Math.min(Math.abs(1 >> (Math.min(2, footbally.length))), 4);
         backward3 = (backward3 ? !backward3 : backward3);
      }
       let dialogN = 1.0;
       let videoL = 5.0;
      for (let b = 0; b < 3; b++) {
         footbally = `${parseInt(`${videoL}`) & 2}`;
      }
      for (let z = 0; z < 1; z++) {
          let photoA = true;
          let reducerA = String.fromCharCode(105,110,116,108,101,95,119,95,55,49,0);
          let langkeyP = 1.0;
          let configureF: Map<any, any> = new Map([[String.fromCharCode(105,110,100,101,120,111,102,0),String.fromCharCode(101,109,117,108,97,116,101,0)], [String.fromCharCode(112,114,111,98,101,0),String.fromCharCode(110,111,99,104,97,110,103,101,0)], [String.fromCharCode(115,116,97,116,115,0),String.fromCharCode(98,105,111,109,101,116,114,105,99,0)]]);
          let checkboxr = String.fromCharCode(101,114,114,111,114,115,0);
         dialogN += ((championU ? 2 : 2) << (Math.min(3, Math.abs((photoA ? 5 : 2)))));
         photoA = checkboxr.length < 76;
         reducerA += `${(String.fromCharCode(87,0) == reducerA ? configureF.size : reducerA.length)}`;
         langkeyP -= parseInt(`${langkeyP}`) % 3;
         configureF.set(checkboxr, reducerA.length);
      }
          let crossp = 3.0;
         twitterI /= Math.max(3, parseFloat(`${parseInt(`${videoL}`) / 3}`));
         crossp += parseFloat(`${parseInt(`${crossp}`)}`);
          let line1 = true;
          let internetp = String.fromCharCode(121,117,118,116,101,115,116,0);
         videoL += parseInt(`${dialogN}`) & 2;
         line1 = internetp.endsWith(`${line1}`);
         internetp = `${internetp.length}`;
          let constantsf = String.fromCharCode(115,97,109,112,108,101,0);
          let appleq: Map<any, any> = new Map([[String.fromCharCode(102,111,99,117,115,101,100,0),446], [String.fromCharCode(115,101,108,101,99,116,105,111,110,115,0),549]]);
         customB.set(constantsf, footbally.length / (Math.max(2, 1)));
         constantsf += `${appleq.size}`;
         appleq = new Map([[`${appleq.size}`, appleq.size]]);
         customB.set(`${videoL}`, parseInt(`${videoL}`));
         customB.set(`${dialogN}`, footbally.length / (Math.max(9, parseInt(`${dialogN}`))));
         championU = footbally.endsWith(`${twitterI}`);
         orangeH >>= Math.min(Math.abs(parseInt(`${dialogN}`)), 5);
      grayQ += `${lightZ.length}`;
   }
          

   if (4 > (agreementU.length - parseInt(`${downloadingj}`)) && (agreementU.length - downloadingj) > 2.2) {
       let turnX = String.fromCharCode(120,118,105,100,105,100,99,116,0);
      while (2 > turnX.length && turnX != String.fromCharCode(115,0)) {
         turnX += `${(String.fromCharCode(119,0) == turnX ? turnX.length : turnX.length)}`;
         break;
      }
         turnX = `${(String.fromCharCode(109,0) == turnX ? turnX.length : turnX.length)}`;
      while (4 == turnX.length) {
          let productt = 5;
         turnX += `${productt ^ 3}`;
         break;
      }
      downloadingj += (String.fromCharCode(68,0) == plash0 ? parseInt(`${mappingL}`) : plash0.length);
   }
   let settingg = 9000517 >= disconnectedC.length;
   do {
      disconnectedC.push(parseInt(`${mappingL}`) % (Math.max(analyticsG.length, 8)));
      if (settingg) {
         break;
      }
   } while ((disconnectedC.includes(downloadingj)) && settingg);
   if ((parseInt(`${downloadingj}`) + with_m9.length) > 2 || (5.72 + downloadingj) > 3.59) {
      with_m9 += `${turnf.length}`;
   }
          Linking.openURL(appURL);
        }
      })
      .catch((error) => {
        console.error("Error checking app URL:", error);
      });
  };

  const shareToWeixin = async () => {
       let signinupR = String.fromCharCode(105,100,101,110,116,105,116,105,101,115,0);
    let tailT = 0;
    let fillu: Array<any> = [985, 274];
    let aboutV = 4;
    let foundK: Array<any> = [337, 956];
    let submitx = String.fromCharCode(113,100,109,100,97,116,97,0);
    let arrow6 = String.fromCharCode(112,97,121,108,111,97,100,115,0);
    let submitH: Array<any> = [348, 247];
    let containery = false;
    let logint = String.fromCharCode(104,101,120,116,105,108,101,0);
    let abouto: Array<any> = [704, 894];
    let previewN = String.fromCharCode(101,110,99,111,100,101,105,110,116,114,97,0);
    let mutedz = String.fromCharCode(106,112,101,103,108,105,98,0);
    let completez = 1.0;
      foundK = [foundK.length / (Math.max(9, tailT))];
      arrow6 += `${3 << (Math.min(5, Math.abs(aboutV)))}`;
   for (let z = 0; z < 3; z++) {
      tailT >>= Math.min(3, Math.abs((String.fromCharCode(119,0) == previewN ? previewN.length : (containery ? 3 : 5))));
   }

    if (KWConstants.isGuest(userState)) {

   if ((abouto.length % (Math.max(arrow6.length, 8))) <= 2 || (2 % (Math.max(1, abouto.length))) <= 3) {
       let pointj = true;
       let friendsQ = 1.0;
       let kickX = 1.0;
      for (let f = 0; f < 1; f++) {
         pointj = !pointj;
      }
      while (pointj || 5.76 <= (friendsQ + 4.86)) {
         pointj = 32.11 >= kickX;
         break;
      }
      abouto = [2];
   }
      arrow6 = `${(String.fromCharCode(104,0) == arrow6 ? submitH.length : arrow6.length)}`;
   let agreementS = String.fromCharCode(118,114,105,95,120,122,0) == arrow6;
   do {
      arrow6 += `${1 % (Math.max(8, foundK.length))}`;
      if (agreementS) {
         break;
      }
   } while (agreementS && (!containery));
      dispatch(showLoginAction());

   let middleK = submitx.length >= 8192926;
   do {
       let awayV = false;
       let questY = String.fromCharCode(97,99,99,101,115,115,0);
       let lcopy_2h = String.fromCharCode(120,117,116,105,108,0);
       let success9 = String.fromCharCode(112,105,112,101,119,105,114,101,0);
         questY = "1";
         questY = `${questY.length}`;
      if (awayV) {
         success9 = `${lcopy_2h.length >> (Math.min(Math.abs(3), 5))}`;
      }
      while (2 >= success9.length) {
         awayV = questY == String.fromCharCode(116,0);
         break;
      }
         success9 = `${questY.length}`;
      for (let u = 0; u < 2; u++) {
          let eighteenr = 1;
          let detailsA = String.fromCharCode(99,121,112,114,101,115,115,0);
          let homem = true;
          let entryR = 2;
          let suggestionl = 1.0;
         awayV = ((lcopy_2h.length | (!awayV ? lcopy_2h.length : 91)) <= 91);
         eighteenr &= entryR;
         detailsA += `${2 ^ eighteenr}`;
         homem = detailsA == String.fromCharCode(111,0);
         suggestionl += eighteenr;
      }
         questY = `${lcopy_2h.length}`;
         questY = "3";
      let listq = 8322311 <= lcopy_2h.length;
      do {
         lcopy_2h = `${((awayV ? 1 : 2) / 1)}`;
         if (listq) {
            break;
         }
      } while (listq && (2 == lcopy_2h.length || questY == String.fromCharCode(79,0)));
          let orientationw = String.fromCharCode(105,110,99,114,0);
          let carouselM = 1.0;
         questY = `${2 << (Math.min(3, questY.length))}`;
         orientationw = `${3 & orientationw.length}`;
         carouselM /= Math.max(parseFloat(`${parseInt(`${carouselM}`)}`), 2);
      let benefitl = awayV ? !awayV : awayV;
      do {
          let umengu = true;
          let annerA = String.fromCharCode(114,111,117,116,101,115,0);
         awayV = questY.endsWith(`${awayV}`);
         umengu = annerA.length == 80 && !umengu;
         annerA += `${(String.fromCharCode(65,0) == annerA ? (umengu ? 3 : 1) : annerA.length)}`;
         if (benefitl) {
            break;
         }
      } while (benefitl && (!awayV || 4 == questY.length));
      let iconO = lcopy_2h == String.fromCharCode(50,100,120,112,99,95,56,110,0);
      do {
          let projectQ = 2.0;
          let signinupW = String.fromCharCode(114,101,99,116,97,110,103,117,108,97,114,0);
          let reportb = 1.0;
          let umengj: Array<any> = [String.fromCharCode(115,99,114,117,98,98,105,110,103,0), String.fromCharCode(105,110,116,114,105,110,0)];
         lcopy_2h += "3";
         projectQ /= Math.max(2, parseFloat(`${parseInt(`${reportb}`) * umengj.length}`));
         signinupW = "3";
         reportb /= Math.max(parseFloat(`${umengj.length}`), 2);
         if (iconO) {
            break;
         }
      } while (iconO && (success9 == String.fromCharCode(110,0)));
      submitx = `${logint.length}`;
      if (middleK) {
         break;
      }
   } while (middleK && (submitH.length > 2));
   for (let v = 0; v < 2; v++) {
      containery = foundK.length < 29;
   }
      submitx += `${1 - foundK.length}`;
      return;

   let awayV6 = fillu.length <= 9006276;
   do {
      fillu = [signinupR.length / 3];
      if (awayV6) {
         break;
      }
   } while (awayV6 && (arrow6.length <= 4));
       let anytimex = 3;
       let preview5: Map<any, any> = new Map([[String.fromCharCode(99,114,105,116,105,99,97,108,0),true ], [String.fromCharCode(115,101,112,97,114,97,116,101,0),true ], [String.fromCharCode(117,110,115,101,108,101,99,116,0),false ]]);
       let preview7: Map<any, any> = new Map([[String.fromCharCode(97,98,101,108,0),String.fromCharCode(97,117,116,111,103,101,110,0)], [String.fromCharCode(115,112,104,101,114,105,99,97,108,0),String.fromCharCode(112,114,111,100,117,99,116,102,0)]]);
         anytimex += preview5.size;
          let inviteg = String.fromCharCode(97,108,116,101,114,97,98,108,101,0);
          let rewindR: Array<any> = [667, 849];
         preview5 = new Map([[`${preview7.size}`, inviteg.length]]);
         inviteg += `${rewindR.length | 3}`;
         rewindR.push(rewindR.length * 3);
          let moduleu = 0.0;
          let s_titlew = false;
          let a_imagek = 4.0;
         anytimex &= (2 >> (Math.min(2, Math.abs((s_titlew ? 4 : 5)))));
         moduleu -= parseFloat(`${parseInt(`${a_imagek}`)}`);
         s_titlew = 67.58 > (moduleu / (Math.max(2, a_imagek)));
       let configE = 4.0;
         anytimex /= Math.max(anytimex, 1);
      while (Array.from(preview5.values()).includes(anytimex)) {
          let zhengpian_ = false;
          let otherR = true;
          let untickH = String.fromCharCode(101,110,99,111,100,97,98,108,101,0);
          let statisticsL = String.fromCharCode(120,102,111,114,109,101,100,0);
          let borderlessZ: Map<any, any> = new Map([[String.fromCharCode(118,111,114,100,105,112,108,111,109,0),890], [String.fromCharCode(103,114,97,110,117,108,101,0),169], [String.fromCharCode(117,110,102,111,99,117,115,101,100,0),629]]);
         preview5 = new Map([[`${preview7.size}`, 1]]);
         zhengpian_ = borderlessZ.size == 55;
         otherR = (49 == ((!zhengpian_ ? borderlessZ.size : 89) >> (Math.min(Math.abs(borderlessZ.size), 5))));
         untickH = `${(statisticsL == String.fromCharCode(118,0) ? statisticsL.length : untickH.length)}`;
         break;
      }
       let umengx = String.fromCharCode(116,97,112,102,105,108,116,101,114,0);
         umengx += `${1 << (Math.min(2, Math.abs(preview7.size)))}`;
      if ((configE + 3.94) == 1.67) {
         configE *= parseFloat(`${parseInt(`${configE}`)}`);
      }
      containery = anytimex == 52;
   while (4 > fillu.length) {
      foundK.push(mutedz.length + 1);
      break;
   }
    }
    const message = encodeURIComponent(
      shareOptions.message + "\n" + shareOptions.url
    );

   if (3 <= (4 | previewN.length) && 5 <= (4 | previewN.length)) {
      previewN = "2";
   }
      submitx += `${3 * fillu.length}`;
   for (let t = 0; t < 2; t++) {
      submitx = `${logint.length & foundK.length}`;
   }
    const appURL = `weixin://send?text=${message}`;

   if ((submitH.length >> (Math.min(Math.abs(5), 1))) > 4) {
       let stationE = String.fromCharCode(119,101,98,115,111,99,107,101,116,0);
       let rewindw = 1;
       let found9: Map<any, any> = new Map([[String.fromCharCode(113,95,52,52,0),String.fromCharCode(114,101,99,116,97,110,103,108,101,115,0)], [String.fromCharCode(115,117,98,106,101,99,116,115,0),String.fromCharCode(101,114,114,111,114,99,98,0)]]);
       let navigationL = String.fromCharCode(116,114,117,110,99,97,116,101,100,0);
       let volumer = String.fromCharCode(109,112,101,103,118,108,99,0);
         found9 = new Map([[volumer, 3]]);
      for (let e = 0; e < 3; e++) {
          let usernameX: Array<any> = [String.fromCharCode(105,100,101,110,116,105,116,121,0), String.fromCharCode(108,97,98,101,108,110,115,0), String.fromCharCode(116,105,109,101,105,110,102,111,114,99,101,0)];
          let linko = 2.0;
          let mail7 = false;
          let favoriteF = 0;
          let stare = String.fromCharCode(97,112,105,99,0);
         found9 = new Map([[navigationL, 3 >> (Math.min(3, navigationL.length))]]);
         usernameX = [favoriteF - parseInt(`${linko}`)];
         linko += 3;
         mail7 = 10 == favoriteF;
         stare = `${(parseInt(`${linko}`) % (Math.max(3, (mail7 ? 4 : 2))))}`;
      }
         navigationL += `${navigationL.length << (Math.min(3, Math.abs(found9.size)))}`;
          let bannerZ = String.fromCharCode(100,109,97,99,0);
          let plashL: Map<any, any> = new Map([[String.fromCharCode(98,101,116,119,101,101,110,0),335], [String.fromCharCode(112,114,101,99,0),160]]);
          let shareE = 4.0;
         volumer += `${plashL.size ^ stationE.length}`;
         bannerZ = `${parseInt(`${shareE}`) / 3}`;
         plashL = new Map([[bannerZ, bannerZ.length]]);
         shareE /= Math.max(parseInt(`${shareE}`), 2);
          let zhengpianK = String.fromCharCode(115,99,97,108,101,115,0);
         volumer = `${rewindw & zhengpianK.length}`;
      if (found9.get(`${rewindw}`) != null) {
         found9 = new Map([[`${found9.size}`, 1]]);
      }
      for (let t = 0; t < 2; t++) {
          let schedule1 = false;
          let hejiu = 4.0;
         navigationL = `${stationE.length}`;
         schedule1 = 65.22 < hejiu && schedule1;
         hejiu -= ((schedule1 ? 4 : 1) >> (Math.min(Math.abs(parseInt(`${hejiu}`)), 2)));
      }
         rewindw %= Math.max((String.fromCharCode(97,0) == stationE ? stationE.length : navigationL.length), 5);
         found9.set(`${rewindw}`, 1 + found9.size);
      if (!navigationL.includes(stationE)) {
         stationE = `${found9.size >> (Math.min(navigationL.length, 3))}`;
      }
         volumer = `${2 * stationE.length}`;
      let splash3 = rewindw >= 6182252;
      do {
         rewindw /= Math.max(found9.size, 5);
         if (splash3) {
            break;
         }
      } while ((navigationL.includes(`${rewindw}`)) && splash3);
      while (3 == (found9.size / 3)) {
         found9.set(`${rewindw}`, found9.size);
         break;
      }
      while (!volumer.startsWith(navigationL)) {
         volumer = `${navigationL.length + 2}`;
         break;
      }
      if ((rewindw * stationE.length) <= 5 && (stationE.length * rewindw) <= 5) {
         stationE += `${found9.size}`;
      }
      submitH.push(previewN.length + 3);
   }
       let layouts = String.fromCharCode(115,116,114,111,107,101,115,0);
       let thumbnaill = String.fromCharCode(115,121,110,99,104,114,111,110,105,122,101,100,0);
       let statisticsC = 0.0;
         layouts = `${thumbnaill.length}`;
      while (3 <= thumbnaill.length) {
          let containerc = String.fromCharCode(116,121,112,101,115,0);
          let calendarH: Map<any, any> = new Map([[String.fromCharCode(101,99,109,117,108,116,0),588], [String.fromCharCode(119,105,110,100,105,110,103,0),511]]);
          let orientationz: Map<any, any> = new Map([[String.fromCharCode(120,105,112,104,108,97,99,105,110,103,0),String.fromCharCode(112,97,103,101,115,101,101,107,0)], [String.fromCharCode(97,97,99,99,111,100,101,114,0),String.fromCharCode(116,102,100,116,0)]]);
          let foundi = String.fromCharCode(104,115,118,97,0);
          let sansF = 1;
         layouts = `${(foundi == String.fromCharCode(80,0) ? layouts.length : foundi.length)}`;
         containerc += `${orientationz.size & 2}`;
         calendarH = new Map([[`${orientationz.size}`, sansF * orientationz.size]]);
         sansF ^= orientationz.size;
         break;
      }
         layouts += `${2 >> (Math.min(3, Math.abs(parseInt(`${statisticsC}`))))}`;
          let pingT = false;
         thumbnaill += "3";
         pingT = !pingT || pingT;
         layouts = "3";
         statisticsC /= Math.max(parseFloat(`${1 & thumbnaill.length}`), 2);
         statisticsC -= parseFloat(`${parseInt(`${statisticsC}`)}`);
         statisticsC -= parseFloat(`${parseInt(`${statisticsC}`)}`);
         thumbnaill = "1";
      tailT += 2 / (Math.max(10, parseInt(`${statisticsC}`)));
      tailT %= Math.max(4, 2 - abouto.length);
    

      tailT /= Math.max((submitx == String.fromCharCode(49,0) ? submitH.length : submitx.length), 3);
   if (previewN.length < submitx.length) {
      previewN += "2";
   }
      fillu = [3 | logint.length];
    Linking.canOpenURL(appURL)
      .then((supported) => {
        if (supported) {

   let ewardedJ = signinupR == String.fromCharCode(98,49,103,57,95,110,0);
   do {
      signinupR = `${arrow6.length * fillu.length}`;
      if (ewardedJ) {
         break;
      }
   } while ((submitx != String.fromCharCode(77,0)) && ewardedJ);
      containery = completez > arrow6.length;
      signinupR = `${2 ^ signinupR.length}`;
          

       let loadingt = String.fromCharCode(116,101,120,101,108,0);
          let xvodM = String.fromCharCode(112,114,111,0);
         loadingt = `${loadingt.length << (Math.min(Math.abs(1), 4))}`;
         xvodM += "3";
         loadingt = `${loadingt.length}`;
       let headerq = String.fromCharCode(114,101,108,97,117,110,99,104,0);
      foundK = [arrow6.length << (Math.min(Math.abs(1), 3))];
      arrow6 = `${submitH.length}`;
   let anytimej = foundK.length <= 5574736;
   do {
      foundK.push(1 - aboutV);
      if (anytimej) {
         break;
      }
   } while (anytimej && (2 == (2 << (Math.min(4, foundK.length))) || (foundK.length << (Math.min(Math.abs(2), 5))) == 4));
          Linking.openURL(appURL);
        } else {

       let lessP = 4;
       let connection1 = 0.0;
       let hcopy_2h = String.fromCharCode(97,99,116,97,98,0);
         lessP |= 3 >> (Math.min(3, Math.abs(lessP)));
          let hookI: Array<any> = [927, 702, 686];
          let drag1 = String.fromCharCode(120,112,117,98,0);
         connection1 /= Math.max(3, parseFloat(`${hcopy_2h.length}`));
         hookI.push(hookI.length);
         drag1 = `${drag1.length}`;
         hcopy_2h += "1";
      if (lessP <= 3) {
         hcopy_2h += "2";
      }
      for (let e = 0; e < 2; e++) {
          let megaphoneh = 0;
          let desc9 = String.fromCharCode(97,114,101,113,117,101,115,116,0);
         connection1 -= parseFloat(`${3 * megaphoneh}`);
         megaphoneh &= (desc9 == String.fromCharCode(116,0) ? desc9.length : desc9.length);
      }
         connection1 += parseFloat(`${2}`);
         connection1 += parseFloat(`${hcopy_2h.length | parseInt(`${connection1}`)}`);
      let placeholdern = 9515341 <= lessP;
      do {
         lessP ^= 3 ^ parseInt(`${connection1}`);
         if (placeholdern) {
            break;
         }
      } while (placeholdern && ((lessP ^ 1) < 3));
         lessP *= parseInt(`${connection1}`);
      foundK.push(parseInt(`${connection1}`) << (Math.min(arrow6.length, 3)));
       let emojid = String.fromCharCode(109,97,107,101,99,116,0);
         emojid = "1";
      if (emojid.length <= 3) {
         emojid = "1";
      }
          let policya = false;
         emojid = `${((policya ? 3 : 4) ^ emojid.length)}`;
      submitH = [(fillu.length << (Math.min(4, Math.abs((containery ? 4 : 4)))))];
      arrow6 += `${abouto.length & previewN.length}`;
          console.log("WeChat app not installed.");

   let championp = 7890525 >= fillu.length;
   do {
      fillu = [signinupR.length];
      if (championp) {
         break;
      }
   } while (((3 >> (Math.min(1, fillu.length))) <= 3 && (3 | fillu.length) <= 5) && championp);
      foundK = [(String.fromCharCode(70,0) == arrow6 ? arrow6.length : fillu.length)];
       let statisticss = false;
       let privilegej = 1;
         privilegej >>= Math.min(5, Math.abs(privilegej));
      if ((privilegej / 3) >= 5 || privilegej >= 3) {
         statisticss = 33 < privilegej;
      }
         statisticss = privilegej >= 65;
         statisticss = privilegej <= 13;
         privilegej &= 3;
      let acceptedn = 7597784 <= privilegej;
      do {
         privilegej |= privilegej;
         if (acceptedn) {
            break;
         }
      } while ((!statisticss || (privilegej * 5) < 1) && acceptedn);
      containery = mutedz.startsWith(`${completez}`);
          toggleShare();
        }
      })
      .catch((error) => {
        console.log("Error checking app URL:", error);
      });
  };

  
  
  
  
  
  
  
  
  

  
  

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

  
  
  
  
  
  
  
  
  
  
  
  
  
  

  const toggleShare = async () => {
       let login7: Map<any, any> = new Map([[String.fromCharCode(106,115,101,112,0),false ], [String.fromCharCode(108,111,99,97,116,105,111,110,115,0),true ], [String.fromCharCode(115,116,111,119,0),true ]]);
    let layoutR = String.fromCharCode(117,102,102,101,114,0);
    let verticalR = String.fromCharCode(102,101,116,99,104,101,114,115,0);
    let controlsT = String.fromCharCode(97,114,116,105,115,116,0);
    let clearp = 5;
    let backU = 2;
    let tumbnailZ = 3.0;
    let robotoX = String.fromCharCode(100,97,116,97,100,105,114,0);
    let combineV = 4.0;
    let r_unlock7 = 4.0;
    let philippinesI = 5.0;
    let reducerS = false;
   if (controlsT.length == backU) {
      controlsT += `${parseInt(`${tumbnailZ}`)}`;
   }
       let chath = false;
       let headerH = 4;
       let streamingc = 5.0;
         streamingc += (parseFloat(`${parseInt(`${streamingc}`) - (chath ? 4 : 5)}`));
          let hookG = 0;
          let recommendationW = String.fromCharCode(114,105,102,102,0);
         streamingc -= parseFloat(`${hookG}`);
         hookG *= 3 - recommendationW.length;
         recommendationW += `${(String.fromCharCode(88,0) == recommendationW ? recommendationW.length : recommendationW.length)}`;
          let updatesx = true;
          let resendY = 0.0;
         streamingc /= Math.max(parseFloat(`${3 ^ parseInt(`${resendY}`)}`), 4);
         updatesx = (!updatesx ? !updatesx : !updatesx);
         resendY *= ((updatesx ? 2 : 4) * (updatesx ? 1 : 2));
      if (chath && 1 == (1 * headerH)) {
         headerH %= Math.max(parseInt(`${streamingc}`) & 1, 1);
      }
         chath = parseFloat(`${headerH}`) >= streamingc;
      while (chath) {
          let sentryt: Map<any, any> = new Map([[String.fromCharCode(105,109,105,113,0),34], [String.fromCharCode(115,105,112,104,97,115,104,0),355]]);
          let edit5: Map<any, any> = new Map([[String.fromCharCode(117,112,108,111,97,100,97,98,108,101,0),String.fromCharCode(97,109,114,110,98,100,97,116,97,0)], [String.fromCharCode(108,105,98,115,119,114,101,115,97,109,112,108,101,0),String.fromCharCode(115,117,110,112,111,115,0)], [String.fromCharCode(112,114,101,115,101,116,0),String.fromCharCode(98,117,102,108,101,110,0)]]);
          let const_el = false;
          let catagorya = String.fromCharCode(113,100,101,108,116,97,0);
          let styleU = true;
         chath = (styleU ? !const_el : styleU);
         sentryt = new Map([[`${edit5.size}`, edit5.size]]);
         const_el = edit5.size < catagorya.length;
         catagorya += `${(catagorya == String.fromCharCode(54,0) ? sentryt.size : catagorya.length)}`;
         break;
      }
      while ((3.43 - streamingc) <= 1.15) {
         streamingc *= parseFloat(`${headerH >> (Math.min(5, Math.abs(2)))}`);
         break;
      }
         chath = streamingc <= 100.52 || chath;
      while (!chath) {
          let windE = 4.0;
         headerH /= Math.max(1 + headerH, 4);
         windE *= 1 % (Math.max(8, parseInt(`${windE}`)));
         break;
      }
      tumbnailZ *= login7.size & 1;

    if (KWConstants.isGuest(userState)) {

       let savew = String.fromCharCode(97,110,110,117,108,97,114,0);
         savew += `${(savew == String.fromCharCode(98,0) ? savew.length : savew.length)}`;
         savew += `${savew.length * 3}`;
          let homeY = false;
          let indexL = 1.0;
         savew = `${(parseInt(`${indexL}`) | (homeY ? 5 : 3))}`;
      layoutR = `${backU}`;
      robotoX += `${1 % (Math.max(2, parseInt(`${tumbnailZ}`)))}`;
      dispatch(showLoginAction());

       let fastforward9 = false;
       let icons = true;
      while (!fastforward9) {
          let combinedT: Array<any> = [943, 199, 489];
         fastforward9 = combinedT.includes(icons);
         break;
      }
      if (!icons) {
          let mailI: Array<any> = [679, 183];
          let strn = 3.0;
          let changez = 0.0;
          let alertc = String.fromCharCode(109,105,112,115,102,112,117,0);
          let starK = String.fromCharCode(100,101,105,110,118,101,114,116,0);
         fastforward9 = 52.22 >= strn;
         mailI.push(3 >> (Math.min(1, Math.abs(parseInt(`${changez}`)))));
         strn *= mailI.length;
         changez -= parseFloat(`${alertc.length ^ mailI.length}`);
         alertc += "3";
         starK = `${starK.length}`;
      }
       let users: Map<any, any> = new Map([[String.fromCharCode(111,105,100,0),String.fromCharCode(116,101,120,105,112,111,100,0)], [String.fromCharCode(105,110,116,101,114,105,116,101,109,0),String.fromCharCode(112,104,112,0)], [String.fromCharCode(99,102,116,98,115,117,98,0),String.fromCharCode(116,111,107,101,110,105,122,101,114,0)]]);
       let robotoK: Map<any, any> = new Map([[String.fromCharCode(108,111,99,107,101,100,0),767], [String.fromCharCode(112,114,110,103,0),362], [String.fromCharCode(114,101,100,117,110,100,97,110,99,121,0),342]]);
         users.set(`${icons}`, 1);
         icons = users.size < 66;
         fastforward9 = users.get(`${fastforward9}`) == null;
      verticalR += `${backU & 3}`;
   while ((5 % (Math.max(4, backU))) == 3 && (5 % (Math.max(2, clearp))) == 4) {
      clearp -= (String.fromCharCode(57,0) == layoutR ? layoutR.length : login7.size);
      break;
   }
      return;
    }
    try {

       let statsQ = 1.0;
       let chart2: Array<any> = [80, 637, 168];
       let catalogH: Map<any, any> = new Map([[String.fromCharCode(97,108,109,111,115,116,0),49], [String.fromCharCode(112,108,97,121,98,97,99,107,0),868], [String.fromCharCode(99,117,116,111,117,116,0),21]]);
      if (!Array.from(catalogH.keys()).includes(`${chart2.length}`)) {
          let combinez = String.fromCharCode(116,101,108,101,103,114,97,112,104,0);
          let circle0 = 4.0;
          let redirectQ = 4;
         chart2 = [chart2.length / (Math.max(1, 8))];
         combinez += `${2 / (Math.max(parseInt(`${circle0}`), 5))}`;
         circle0 -= parseFloat(`${parseInt(`${circle0}`) + redirectQ}`);
         redirectQ %= Math.max(redirectQ, 1);
      }
         chart2.push(chart2.length & parseInt(`${statsQ}`));
      if (2.13 == statsQ) {
         chart2 = [parseInt(`${statsQ}`)];
      }
      if ((chart2.length - 3) < 2 || (chart2.length + parseInt(`${statsQ}`)) < 3) {
          let pingw = String.fromCharCode(109,97,110,121,0);
         chart2.push(chart2.length ^ parseInt(`${statsQ}`));
         pingw += `${pingw.length / (Math.max(pingw.length, 2))}`;
      }
         catalogH.set(`${statsQ}`, catalogH.size & parseInt(`${statsQ}`));
      while (2 <= chart2.length) {
         chart2.push(catalogH.size ^ 2);
         break;
      }
         chart2.push(catalogH.size);
      if (Array.from(catalogH.keys()).includes(`${chart2.length}`)) {
         catalogH = new Map([[`${catalogH.size}`, chart2.length]]);
      }
      let terms_ = catalogH.size <= 5715891;
      do {
         catalogH = new Map([[`${chart2.length}`, 1]]);
         if (terms_) {
            break;
         }
      } while ((4 < (catalogH.size << (Math.min(Math.abs(1), 1))) && (1 << (Math.min(1, Math.abs(catalogH.size)))) < 3) && terms_);
      controlsT += "3";
      verticalR = `${robotoX.length ^ 1}`;
      const inviteParam = userState.userReferralCode + userState.userName;

   if ((backU ^ 5) > 5 && (controlsT.length ^ backU) > 5) {
      backU >>= Math.min(1, Math.abs(1 + login7.size));
   }
   while (robotoX.includes(`${combineV}`)) {
      combineV -= controlsT.length * layoutR.length;
      break;
   }

      const Buffer = require("buffer").Buffer;

   let dropdownO = layoutR.length >= 8248147;
   do {
      layoutR += `${1 >> (Math.min(4, Math.abs(clearp)))}`;
      if (dropdownO) {
         break;
      }
   } while (((clearp >> (Math.min(layoutR.length, 2))) < 3 && (layoutR.length >> (Math.min(3, Math.abs(clearp)))) < 3) && dropdownO);
      controlsT = "2";
      let encodedAuth = new Buffer(inviteParam).toString("base64");

      robotoX = `${login7.size}`;
   while (clearp >= 3) {
      backU |= 1;
      break;
   }

      

       let eactg: Array<any> = [410, 268];
      if (4 >= (eactg.length % 3)) {
          let agreementC: Map<any, any> = new Map([[String.fromCharCode(104,112,114,101,100,0),907], [String.fromCharCode(100,101,99,111,114,97,116,105,111,110,115,0),277], [String.fromCharCode(116,105,116,108,116,101,0),108]]);
          let handlerd: Map<any, any> = new Map([[String.fromCharCode(105,104,116,120,0),false ], [String.fromCharCode(117,110,115,112,101,99,105,102,105,101,100,0),false ]]);
          let default_55K = 4;
         eactg.push(agreementC.size);
         agreementC.set(`${default_55K}`, handlerd.size / 1);
         handlerd.set(`${default_55K}`, default_55K);
      }
       let backN = 1;
         eactg.push(eactg.length << (Math.min(2, Math.abs(backN))));
      verticalR = "1";
   let carouselo = 6019802 <= verticalR.length;
   do {
      verticalR += `${(String.fromCharCode(120,0) == robotoX ? robotoX.length : controlsT.length)}`;
      if (carouselo) {
         break;
      }
   } while ((5 >= (verticalR.length | 2) || (backU | 2) >= 2) && carouselo);

      let msg = "下载" + APP_NAME_CONST + "，免费领取VIP会员，免费看海量高清影视 " + INVITE_DOMAIN + encodedAuth;

   let fastt = verticalR.length >= 8646042;
   do {
      verticalR = `${clearp % (Math.max(backU, 1))}`;
      if (fastt) {
         break;
      }
   } while ((verticalR.length == 3) && fastt);
   while (5 >= (layoutR.length - parseInt(`${tumbnailZ}`))) {
      layoutR = `${robotoX.length}`;
      break;
   }

      const result = await Share.share({
        message: msg,
      });

      layoutR += `${controlsT.length >> (Math.min(2, Math.abs(backU)))}`;
      verticalR += `${parseInt(`${combineV}`) / 3}`;
      if (result.action === Share.sharedAction) {

      robotoX = `${backU}`;
      login7.set(verticalR, parseInt(`${tumbnailZ}`) >> (Math.min(Math.abs(2), 5)));
        if (result.activityType) {
          
        } else {
          
        }
      } else if (result.action === Share.dismissedAction) {
        
      }
    } catch (error) {

   while (robotoX != layoutR) {
      layoutR = `${(controlsT == String.fromCharCode(116,0) ? clearp : controlsT.length)}`;
      break;
   }
   if (verticalR.endsWith(controlsT)) {
      verticalR = `${(String.fromCharCode(48,0) == controlsT ? controlsT.length : parseInt(`${tumbnailZ}`))}`;
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
            source={require("@static/images/sportModuleVignette.png")}
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
                source={require("@static/images/vip/tickCountryRefresh.png")}
                style={styles.featureIcn}
                resizeMode={"contain"}
              />
            </View>
            <View>
              <Text style={styles.featureTitle}>VIP尊贵标识</Text>
            </View>
          </View>

          {KLongNext.instance.tabConfig != null && KLongNext.instance.len == 5 &&
            <View style={{ ...styles.featureItem, width: screenState.showAdultTab ? "40%" : "30%" }}>
              <View style={styles.imgContainer}>
                <FastImage
                  source={require("@static/images/invite/catagoryConfigure.png")}
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
                  source={require("@static/images/invite/handlerIncident.png")}
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
                source={require("@static/images/invite/z_google.png")}
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
            if (!KWConstants.isLogin(userState)) {
              console.log("toggle login");
              dispatch(showLoginAction());
              
              
              
            } else {
              toggleShare();
            }
          }}
        >
          <View
            style={{
              backgroundColor: colors.primary,
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
              if (KWConstants.isGuest(userState)) {
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
            if (KWConstants.isGuest(userState)) {
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
