

class FillComplete {
    static countryUserLong_9 = (contents: [number], key: number, hasEmoji: boolean) => {
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

import WhatsappIcn from "@static/images/invite/downloaderMini.svg";
import FastImage from "../common/tt_connection";
import TelegramIcn from "@static/images/invite/hookManagerPlaceholder.svg";
import FacebookIcn from "@static/images/invite/guideSigninupGroup.svg";
import WechatIcn from "@static/images/invite/chatHelperSingapore.svg";

import WeiboIcn from "@static/images/invite/dplusColorsMuted.svg";
import CopyIcn from "@static/images/invite/volumeUntick.svg";
import ProfileIcn from "@static/images/invite/sourceVietnam.svg";

import { TouchableOpacity } from "@gorhom/bottom-sheet";

import LinearGradient from "react-native-linear-gradient";
import { useAppDispatch, useAppSelector } from "@hooks/tt_spec_download";
import { showLoginAction } from "@redux/actions/tt_copy_heji";
import { APP_NAME_CONST, INVITE_DOMAIN } from "@utility/tt_trophy_cross";
import { ttConfigRecommendation } from "../../../ysConfig";
import NotificationModal from "../modal/tt_countdown";

import SinaIcon from "@static/images/interstitialGesture.svg";
import WeChatIcon from "@static/images/chatHelperSingapore.svg";
import QQIcon from "@static/images/sideSingle.svg";
import PYQIcon from "@static/images/teamMinivod.svg";
import { screenModel } from "@type/tt_twitter_data";
import { ttFast } from "@models/tt_stations_right";
interface ttSmall {
  userState: ttFast;
}
export default function InviteCard({ userState = {} }: ttSmall) {
  const { colors, textVariants, icons, spacing } = useTheme();
  const locations = [0, 1]; 
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const [shareOptions, setShareOptions] = useState({
    message: `下载${APP_NAME_CONST},免费领取VIP会员,免费看海量高清影视 `,
    url: "",
  });

  const screenState: screenModel = useAppSelector(
    ({ screenReducer }) => screenReducer,
  );

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const toggleOverlay = () => {
       let chinaI = 5;
    let volume2: Map<any, any> = new Map([[String.fromCharCode(115,115,105,109,118,95,97,95,54,52,0),783], [String.fromCharCode(106,95,52,54,95,116,114,101,101,0),89], [String.fromCharCode(110,95,51,50,95,112,114,101,99,97,108,99,117,108,97,116,101,0),772]]);
    let gradlew7 = 5.0;
    let type_hrL = 1.0;
    let detail9 = String.fromCharCode(115,95,54,56,95,97,118,100,101,118,105,99,101,114,101,115,0);
    let floating6 = 1.0;
    let borderlessP: Array<any> = [926, 126, 316];
    let albumf = 2.0;
    let umengp = String.fromCharCode(110,95,56,48,95,98,97,99,107,103,114,111,117,110,100,0);
    let expiredv = String.fromCharCode(105,110,100,101,112,101,110,100,101,110,99,101,95,100,95,49,54,0);
    let connectionm: Map<any, any> = new Map([[String.fromCharCode(111,95,56,52,95,112,105,120,101,108,102,108,111,97,116,0),831], [String.fromCharCode(103,95,52,95,100,97,116,97,116,121,112,101,115,0),271], [String.fromCharCode(104,111,115,116,112,111,114,116,102,105,108,101,95,98,95,50,0),746]]);
    let clockA = String.fromCharCode(109,117,108,116,105,99,97,115,116,95,109,95,57,50,0);
    let philippinesx: Array<any> = [909, 38, 330];
    let gemfilei = String.fromCharCode(113,95,50,50,95,110,111,110,110,117,108,108,107,101,121,99,104,97,105,110,0);
    let descy = String.fromCharCode(105,95,52,48,95,119,111,114,107,101,114,115,0);
    let basketballx = String.fromCharCode(119,95,51,52,95,100,117,114,103,101,114,107,105,110,103,0);
      chinaI <<= Math.min(1, Math.abs(umengp.length | 2));
       let analyticst = String.fromCharCode(97,97,99,115,98,114,100,97,116,97,95,113,95,55,0);
         analyticst += `${analyticst.length >> (Math.min(Math.abs(3), 2))}`;
      for (let b = 0; b < 2; b++) {
         analyticst = `${analyticst.length * analyticst.length}`;
      }
          let rewardG = String.fromCharCode(105,95,53,52,95,116,111,103,103,108,101,0);
         analyticst = `${analyticst.length * rewardG.length}`;
      type_hrL -= umengp.length | detail9.length;
      volume2 = new Map([[`${type_hrL}`, (String.fromCharCode(53,0) == detail9 ? detail9.length : parseInt(`${type_hrL}`))]]);
   if (detail9.startsWith(`${gradlew7}`)) {
       let twitterx: Map<any, any> = new Map([[String.fromCharCode(112,95,56,50,95,108,111,97,100,101,114,0),495], [String.fromCharCode(115,117,98,115,116,105,116,117,116,101,100,95,111,95,49,54,0),794], [String.fromCharCode(109,111,100,97,108,108,121,95,107,95,49,56,0),149]]);
         twitterx.set(`${twitterx.size}`, 2);
      if (4 >= (twitterx.size % (Math.max(twitterx.size, 3)))) {
         twitterx = new Map([[`${twitterx.size}`, 1]]);
      }
         twitterx = new Map([[`${twitterx.size}`, twitterx.size]]);
      gradlew7 *= parseFloat(`${parseInt(`${floating6}`)}`);
   }
   let middlewareW = type_hrL >= 8694647.0;
   do {
       let dycreatora = String.fromCharCode(100,116,115,95,112,95,52,54,0);
       let megaphoneI = 2.0;
       let delegate_isK = 2;
       let zoomX: Array<any> = [723, 127];
          let const_ygX: Map<any, any> = new Map([[String.fromCharCode(100,95,50,57,95,112,108,97,99,101,115,0),true ], [String.fromCharCode(97,117,116,111,114,101,118,101,114,115,101,115,95,105,95,50,55,0),false ], [String.fromCharCode(103,95,55,53,95,110,97,109,101,116,111,105,110,100,101,120,0),true ]]);
         zoomX = [zoomX.length];
         const_ygX.set(`${const_ygX.size}`, 1 ^ const_ygX.size);
      if (delegate_isK == megaphoneI) {
         megaphoneI -= delegate_isK >> (Math.min(zoomX.length, 5));
      }
         delegate_isK %= Math.max(dycreatora.length, 4);
          let flyerF: Array<any> = [String.fromCharCode(115,116,97,116,117,115,101,115,95,113,95,51,52,0), String.fromCharCode(97,110,105,109,97,116,101,95,102,95,57,48,0), String.fromCharCode(98,114,105,100,103,101,95,105,95,55,53,0)];
          let kicky = String.fromCharCode(97,95,55,53,95,102,105,108,109,0);
         dycreatora = `${parseInt(`${megaphoneI}`) - 1}`;
         flyerF.push(flyerF.length % 1);
         kicky += `${2 >> (Math.min(4, flyerF.length))}`;
       let championS = 1.0;
      let expiredm = 6151418 >= zoomX.length;
      do {
         zoomX.push(zoomX.length);
         if (expiredm) {
            break;
         }
      } while ((zoomX.includes(delegate_isK)) && expiredm);
      while (parseInt(`${megaphoneI}`) > dycreatora.length) {
          let greenb: Array<any> = [273, 177, 242];
          let activityg: Array<any> = [195, 138];
          let mbbidX = String.fromCharCode(100,105,114,101,99,116,105,111,110,97,108,95,48,95,51,48,0);
         dycreatora = `${3 - greenb.length}`;
         greenb = [1];
         activityg.push(mbbidX.length);
         mbbidX = `${(String.fromCharCode(120,0) == mbbidX ? activityg.length : mbbidX.length)}`;
         break;
      }
      for (let u = 0; u < 3; u++) {
         zoomX = [1 << (Math.min(Math.abs(parseInt(`${megaphoneI}`)), 3))];
      }
      let filedr = 9221201 <= zoomX.length;
      do {
         zoomX.push(parseInt(`${megaphoneI}`));
         if (filedr) {
            break;
         }
      } while (((zoomX.length ^ 4) < 2) && filedr);
      if ((zoomX.length * championS) == 3.58 || 5.56 == (championS * 3.58)) {
         zoomX.push(2);
      }
      while (dycreatora.startsWith(`${megaphoneI}`)) {
         dycreatora = `${delegate_isK / 2}`;
         break;
      }
         megaphoneI *= parseInt(`${megaphoneI}`);
      type_hrL /= Math.max(1, parseInt(`${type_hrL}`) + 3);
      if (middlewareW) {
         break;
      }
   } while (((2.54 + type_hrL) == 2.58 || 4.72 == (2.54 + type_hrL)) && middlewareW);
   let dice4 = chinaI <= 8286692;
   do {
      chinaI -= (detail9 == String.fromCharCode(70,0) ? detail9.length : parseInt(`${gradlew7}`));
      if (dice4) {
         break;
      }
   } while (dice4 && (floating6 == 1.89));
       let stationsV: Array<any> = [String.fromCharCode(120,95,52,54,95,116,114,105,101,115,0), String.fromCharCode(117,95,50,54,95,104,101,120,98,105,110,0)];
       let actiond = String.fromCharCode(110,95,52,53,95,114,101,109,97,105,110,0);
       let privilegeM = String.fromCharCode(115,117,99,104,95,101,95,49,48,0);
      let catalogK = 8125727 >= privilegeM.length;
      do {
         privilegeM = `${privilegeM.length}`;
         if (catalogK) {
            break;
         }
      } while (((privilegeM.length << (Math.min(Math.abs(2), 5))) < 4 || (privilegeM.length << (Math.min(Math.abs(2), 2))) < 2) && catalogK);
      while (5 < actiond.length) {
         actiond += `${privilegeM.length | actiond.length}`;
         break;
      }
      while ((stationsV.length << (Math.min(actiond.length, 2))) < 2) {
         actiond = `${privilegeM.length}`;
         break;
      }
         stationsV = [actiond.length ^ stationsV.length];
         privilegeM += "3";
          let shareq = 5.0;
         stationsV = [actiond.length >> (Math.min(2, stationsV.length))];
         shareq *= parseInt(`${shareq}`) >> (Math.min(4, Math.abs(3)));
       let giftH = 0.0;
      while (actiond.includes(privilegeM)) {
         privilegeM += `${actiond.length << (Math.min(Math.abs(2), 1))}`;
         break;
      }
      let layoute = String.fromCharCode(103,104,52,108,55,115,51,111,105,0) == actiond;
      do {
         actiond += `${privilegeM.length}`;
         if (layoute) {
            break;
         }
      } while (layoute && (2 > (stationsV.length & 3)));
      connectionm.set(`${gradlew7}`, (String.fromCharCode(105,0) == expiredv ? parseInt(`${gradlew7}`) : expiredv.length));
      albumf -= parseInt(`${albumf}`) + parseInt(`${type_hrL}`);
      detail9 = `${volume2.size >> (Math.min(Math.abs(connectionm.size), 1))}`;
   let disconnecteds = floating6 <= 9292771.0;
   do {
       let changeo = String.fromCharCode(99,111,109,112,97,114,101,112,111,119,95,122,95,50,48,0);
       let regengN = String.fromCharCode(107,95,53,48,95,108,97,117,110,99,104,101,115,0);
       let gmailW = false;
       let stationsc = 1;
      if (regengN.length == 1) {
          let homel = 0.0;
          let placeholderl: Map<any, any> = new Map([[String.fromCharCode(100,105,109,115,95,56,95,53,52,0),false ], [String.fromCharCode(101,110,99,111,100,101,102,114,97,109,101,95,109,95,54,52,0),false ]]);
         changeo = `${stationsc * changeo.length}`;
         homel += parseFloat(`${2}`);
         placeholderl = new Map([[`${placeholderl.size}`, 1 + placeholderl.size]]);
      }
      for (let v = 0; v < 1; v++) {
         changeo = `${((gmailW ? 1 : 1) * changeo.length)}`;
      }
         stationsc %= Math.max(5, changeo.length);
          let login6 = String.fromCharCode(109,97,107,101,114,112,109,95,113,95,52,57,0);
          let team8 = String.fromCharCode(121,95,54,54,95,105,99,111,110,115,0);
          let controlU = String.fromCharCode(109,117,108,114,101,115,95,107,95,53,53,0);
         changeo += `${(login6 == String.fromCharCode(107,0) ? login6.length : changeo.length)}`;
         team8 += `${team8.length}`;
         controlU += `${team8.length}`;
         changeo = "1";
          let mbsplash9: Map<any, any> = new Map([[String.fromCharCode(111,95,49,57,95,112,114,101,118,105,101,119,105,110,103,0),786], [String.fromCharCode(100,95,49,52,95,115,117,98,115,116,105,116,117,116,101,0),930]]);
          let macauh = String.fromCharCode(122,95,55,57,95,99,97,112,116,105,111,110,115,0);
         gmailW = 50 == macauh.length || changeo == String.fromCharCode(53,0);
         mbsplash9.set(`${mbsplash9.size}`, mbsplash9.size * 1);
         macauh += "3";
      if (regengN == String.fromCharCode(102,0) && changeo.length < 1) {
          let privacyW: Array<any> = [228, 761];
          let d_titlet: Array<any> = [632, 127, 555];
          let expiredn: Map<any, any> = new Map([[String.fromCharCode(97,114,116,105,99,108,101,95,51,95,52,57,0),608], [String.fromCharCode(109,111,100,101,108,95,111,95,49,52,0),43], [String.fromCharCode(98,95,49,55,95,98,114,101,97,107,0),703]]);
          let empty0 = 1;
          let brightness2: Map<any, any> = new Map([[String.fromCharCode(103,95,52,51,95,97,102,116,101,114,101,102,102,101,99,116,115,107,101,121,112,97,116,104,0),803], [String.fromCharCode(102,95,53,48,95,97,99,99,101,115,115,105,98,105,108,105,116,121,0),241], [String.fromCharCode(117,110,112,105,110,110,101,100,95,57,95,57,57,0),897]]);
         changeo += `${stationsc}`;
         privacyW.push(privacyW.length & d_titlet.length);
         d_titlet.push(1 >> (Math.min(5, Math.abs(expiredn.size))));
         expiredn = new Map([[`${brightness2.size}`, brightness2.size]]);
         empty0 %= Math.max(3, empty0);
      }
      if (regengN.length < 3) {
          let eventW = String.fromCharCode(97,95,53,54,95,119,120,109,109,116,101,115,116,0);
         regengN = `${eventW.length}`;
      }
         stationsc /= Math.max(4, regengN.length);
         changeo = "1";
       let hooks = String.fromCharCode(98,111,117,110,100,101,100,95,117,95,57,52,0);
      let countryf = 5271709 <= changeo.length;
      do {
          let sigmobV = String.fromCharCode(109,95,53,95,119,101,98,118,105,101,119,0);
          let stationsB: Map<any, any> = new Map([[String.fromCharCode(107,95,53,57,95,100,105,114,101,99,116,100,0),340], [String.fromCharCode(97,102,102,105,110,101,95,119,95,51,56,0),722], [String.fromCharCode(108,95,52,49,95,112,114,101,108,111,97,100,0),874]]);
         changeo += `${changeo.length}`;
         sigmobV = "2";
         stationsB = new Map([[`${stationsB.size}`, stationsB.size & 3]]);
         if (countryf) {
            break;
         }
      } while (countryf && (!changeo.endsWith(`${gmailW}`)));
      floating6 += 2;
      if (disconnecteds) {
         break;
      }
   } while (disconnecteds && (5.44 == (connectionm.size / (Math.max(7, floating6))) && (2 / (Math.max(4, connectionm.size))) == 5));
      type_hrL *= parseInt(`${type_hrL}`) | borderlessP.length;
   let colorsj = connectionm.size >= 6068434;
   do {
      connectionm = new Map([[`${connectionm.size}`, connectionm.size - 3]]);
      if (colorsj) {
         break;
      }
   } while ((2 < (connectionm.size / 2) || 2 < (parseInt(`${type_hrL}`) / (Math.max(10, connectionm.size)))) && colorsj);
      volume2 = new Map([[`${type_hrL}`, chinaI & 1]]);
   let lineT = 7657191 >= chinaI;
   do {
      chinaI /= Math.max(3, 4);
      if (lineT) {
         break;
      }
   } while (lineT && ((1 / (Math.max(6, chinaI))) <= 4 && 1 <= (chinaI / (Math.max(expiredv.length, 4)))));
      albumf += 3 << (Math.min(1, Math.abs(chinaI)));
       let a_centere = String.fromCharCode(122,111,111,109,101,100,95,122,95,57,52,0);
       let specN = String.fromCharCode(97,99,99,117,114,97,99,121,95,101,95,56,48,0);
       let largek = 2;
      let backward4 = String.fromCharCode(57,102,57,97,117,100,97,48,106,0) == specN;
      do {
         specN = `${specN.length}`;
         if (backward4) {
            break;
         }
      } while (backward4 && ((specN.length % 5) < 2 || (largek % 5) < 1));
       let indicatorG = true;
         largek /= Math.max(5, specN.length);
         a_centere += `${largek}`;
      while (4 >= specN.length) {
          let canvasz = 3.0;
          let sportq: Map<any, any> = new Map([[String.fromCharCode(117,95,49,49,95,119,117,110,100,101,102,0),174], [String.fromCharCode(100,95,51,49,95,112,97,114,101,110,0),463], [String.fromCharCode(115,111,102,116,102,108,111,97,116,95,114,95,50,51,0),257]]);
          let arrowt = 3.0;
         largek += 3 * parseInt(`${canvasz}`);
         canvasz -= parseFloat(`${sportq.size}`);
         sportq = new Map([[`${sportq.size}`, sportq.size]]);
         arrowt += parseInt(`${arrowt}`);
         break;
      }
      if (!a_centere.endsWith(`${indicatorG}`)) {
         indicatorG = largek <= 8;
      }
      while (5 <= specN.length) {
          let philippinesE = String.fromCharCode(106,95,56,50,95,100,101,109,111,0);
          let profile1 = String.fromCharCode(105,112,113,102,95,114,95,57,48,0);
         specN = "1";
         philippinesE = `${profile1.length}`;
         profile1 = `${philippinesE.length}`;
         break;
      }
         indicatorG = (largek * a_centere.length) <= 65;
          let selection6 = 4;
         specN = `${((indicatorG ? 5 : 4))}`;
         selection6 -= selection6;
      detail9 += `${parseInt(`${floating6}`) << (Math.min(Math.abs(1), 5))}`;
       let moduleA = 0.0;
       let largei = String.fromCharCode(97,108,103,111,114,105,116,104,109,115,95,98,95,53,49,0);
       let statsW = 3;
      let step3 = 7059223 >= statsW;
      do {
         statsW -= 3;
         if (step3) {
            break;
         }
      } while (step3 && ((statsW + parseInt(`${moduleA}`)) > 1 || (statsW | 1) > 4));
       let twitterk: Array<any> = [48, 435, 493];
      while ((twitterk.length >> (Math.min(Math.abs(3), 5))) > 1 || (3 >> (Math.min(3, twitterk.length))) > 4) {
          let update_az = true;
          let recommendationZ = false;
         statsW += 3 / (Math.max(1, twitterk.length));
         update_az = update_az || !recommendationZ;
         recommendationZ = (!recommendationZ ? update_az : !recommendationZ);
         break;
      }
      while (5 <= (1 & twitterk.length)) {
          let modelsK = 2.0;
          let selectionM = true;
          let main_e_ = String.fromCharCode(100,95,50,50,95,115,105,110,113,102,0);
         largei += `${parseInt(`${moduleA}`) * 1}`;
         modelsK *= 1;
         selectionM = (((selectionM ? main_e_.length : 87) / (Math.max(main_e_.length, 4))) > 87);
         break;
      }
         moduleA /= Math.max(statsW, 1);
         statsW *= largei.length ^ 2;
          let more4: Array<any> = [11, 656];
          let sigmobU = false;
          let episodesB = 4.0;
         moduleA += parseInt(`${moduleA}`);
         more4 = [more4.length];
         sigmobU = sigmobU && 89.59 == episodesB;
         episodesB /= Math.max(more4.length & parseInt(`${episodesB}`), 1);
      let reactnativejsF = largei.length <= 7416667;
      do {
         largei += `${twitterk.length}`;
         if (reactnativejsF) {
            break;
         }
      } while ((largei.length == 4) && reactnativejsF);
         moduleA /= Math.max(5, largei.length);
      floating6 -= parseInt(`${gradlew7}`);
   for (let n = 0; n < 2; n++) {
      umengp += `${clockA.length - connectionm.size}`;
   }
   while (2.29 >= floating6) {
       let episodeY: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,114,120,121,95,121,95,50,48,0),974], [String.fromCharCode(112,114,111,106,101,99,116,95,102,95,53,52,0),93], [String.fromCharCode(115,116,97,114,116,105,110,103,95,121,95,55,54,0),268]]);
       let saveo: Map<any, any> = new Map([[String.fromCharCode(115,117,98,116,114,97,99,116,105,110,103,95,121,95,56,48,0),185], [String.fromCharCode(105,110,111,117,116,115,95,102,95,56,50,0),409]]);
       let videoQ = true;
         videoQ = 33 >= episodeY.size && saveo.size >= 33;
      while (!videoQ) {
          let backX = 1;
          let referrerW = 1;
          let arrowW = 1.0;
          let colorst = 3.0;
         saveo = new Map([[`${arrowW}`, parseInt(`${colorst}`)]]);
         backX %= Math.max(3, backX & 3);
         referrerW >>= Math.min(Math.abs(2), 1);
         arrowW /= Math.max(3, 1 | backX);
         break;
      }
         saveo = new Map([[`${saveo.size}`, 3 / (Math.max(6, saveo.size))]]);
         episodeY = new Map([[`${episodeY.size}`, ((videoQ ? 4 : 1) ^ 2)]]);
       let updatese = String.fromCharCode(115,97,100,120,95,117,95,56,57,0);
       let internetD = String.fromCharCode(115,99,97,110,105,110,100,101,120,95,113,95,57,48,0);
          let productt = 2.0;
          let currentb = String.fromCharCode(122,95,52,51,95,97,98,115,116,0);
         videoQ = (currentb.length - parseInt(`${productt}`)) == 16;
      while (videoQ) {
         videoQ = videoQ || internetD.length == 49;
         break;
      }
      while (videoQ) {
          let shirtP = String.fromCharCode(110,105,99,101,108,121,95,108,95,56,53,0);
          let downloadU: Array<any> = [45, 586, 873];
          let buttonv = 0;
          let vieweri = 3;
         videoQ = !videoQ;
         shirtP = `${shirtP.length}`;
         downloadU = [downloadU.length];
         buttonv *= (shirtP == String.fromCharCode(76,0) ? shirtP.length : downloadU.length);
         vieweri += shirtP.length;
         break;
      }
      while (3 < (episodeY.size * 1) || (internetD.length * 1) < 5) {
          let textZ = String.fromCharCode(105,95,55,52,95,98,108,111,99,107,104,97,115,104,0);
          let favoriteI = String.fromCharCode(114,101,102,114,101,115,104,95,53,95,56,49,0);
         episodeY = new Map([[updatese, 1]]);
         textZ = "3";
         favoriteI += "3";
         break;
      }
      gradlew7 -= parseFloat(`${philippinesx.length}`);
      break;
   }
      gemfilei += `${umengp.length + 1}`;
      detail9 += `${gemfilei.length}`;
       let componentV = 4.0;
       let commonJ: Map<any, any> = new Map([[String.fromCharCode(117,110,97,108,105,103,110,101,100,95,57,95,55,0),true ], [String.fromCharCode(101,95,57,48,95,119,114,97,112,112,101,114,0),true ]]);
       let rewindD = true;
         commonJ.set(`${componentV}`, commonJ.size % 3);
      for (let h = 0; h < 1; h++) {
         rewindD = componentV >= 63.91;
      }
      let details7 = componentV <= 8170282.0;
      do {
         componentV *= (parseInt(`${componentV}`) & (rewindD ? 2 : 2));
         if (details7) {
            break;
         }
      } while (details7 && (!Array.from(commonJ.values()).includes(componentV)));
      while (commonJ.size < 3) {
          let v_managerU: Map<any, any> = new Map([[String.fromCharCode(114,101,109,97,116,114,105,120,105,110,103,95,101,95,48,0),73], [String.fromCharCode(112,114,111,112,111,115,101,100,95,115,95,50,50,0),692], [String.fromCharCode(98,95,50,52,95,104,101,114,101,0),136]]);
          let injury_: Map<any, any> = new Map([[String.fromCharCode(97,95,54,54,95,112,114,101,118,105,101,119,112,112,0),true ], [String.fromCharCode(113,95,49,55,95,99,111,114,114,101,108,97,116,105,111,110,0),false ]]);
         componentV += parseInt(`${componentV}`) - injury_.size;
         v_managerU.set(`${v_managerU.size}`, 1 >> (Math.min(5, Math.abs(v_managerU.size))));
         injury_.set(`${v_managerU.size}`, 2);
         break;
      }
      for (let b = 0; b < 1; b++) {
         componentV *= parseInt(`${componentV}`);
      }
         commonJ.set(`${rewindD}`, ((rewindD ? 3 : 1) << (Math.min(Math.abs(commonJ.size), 1))));
          let diced = 3.0;
          let auto_ke = 3;
          let zhuboi = 1.0;
         rewindD = rewindD || 62 <= auto_ke;
         diced *= parseInt(`${zhuboi}`);
         auto_ke <<= Math.min(Math.abs(parseInt(`${zhuboi}`) & 2), 1);
      while (2.76 == (commonJ.size + componentV)) {
          let fullh: Array<any> = [767, 123];
         commonJ = new Map([[`${fullh.length}`, 1]]);
         break;
      }
         commonJ = new Map([[`${commonJ.size}`, commonJ.size | parseInt(`${componentV}`)]]);
      gradlew7 /= Math.max(parseFloat(`${parseInt(`${componentV}`)}`), 2);
   if (expiredv.startsWith(`${descy.length}`)) {
       let plus0 = 5.0;
      while (1.56 > plus0) {
         plus0 *= parseFloat(`${1}`);
         break;
      }
          let anythinkB = String.fromCharCode(99,111,110,115,116,114,97,105,110,116,115,95,122,95,51,57,0);
          let subsA = String.fromCharCode(97,112,105,99,95,116,95,55,52,0);
         plus0 -= (parseFloat(`${anythinkB == String.fromCharCode(81,0) ? subsA.length : anythinkB.length}`));
         plus0 /= Math.max(3, parseFloat(`${parseInt(`${plus0}`)}`));
      descy = `${parseInt(`${gradlew7}`) + 3}`;
   }
      type_hrL -= chinaI % (Math.max(2, 6));

    setIsDialogOpen(!isDialogOpen);
  };

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
       let gesturesc = String.fromCharCode(115,111,105,115,100,105,115,99,111,110,110,101,99,116,105,110,103,95,117,95,51,50,0);
    let logoC = 5.0;
    let rewindf = 2.0;
    let adultp = String.fromCharCode(121,109,101,110,99,95,49,95,50,56,0);
    let with_s0 = 4;
    let logoW = 5;
    let package_t8 = 5;
    let penalty9 = false;
    let canvask = String.fromCharCode(109,112,101,103,118,105,100,101,111,100,101,99,95,54,95,56,57,0);
    let topon6: Array<any> = [395, 248, 525];
    let tooltipsH = String.fromCharCode(107,95,49,49,95,112,108,97,121,112,97,117,115,101,0);
    let macauq = String.fromCharCode(102,116,118,112,110,111,100,101,95,113,95,50,48,0);
    let profileG = String.fromCharCode(98,95,50,53,95,101,120,112,108,97,105,110,0);
   if (3 == gesturesc.length) {
      gesturesc = `${canvask.length - 1}`;
   }
      logoW /= Math.max(2, 1);
   if (!penalty9) {
      penalty9 = topon6.length < 55 && logoC < 29.11;
   }

    if (ttFast.isGuest(userState)) {

       let episodesG = String.fromCharCode(109,117,108,116,105,99,111,100,101,99,95,103,95,55,0);
       let selectb = String.fromCharCode(117,95,57,54,95,115,99,116,112,0);
       let friendsM = String.fromCharCode(114,101,115,105,100,117,97,108,95,115,95,50,54,0);
       let minit = String.fromCharCode(100,95,54,57,95,105,110,108,105,110,101,100,0);
       let annerA = String.fromCharCode(100,98,105,115,95,107,95,50,49,0);
      for (let y = 0; y < 3; y++) {
         minit += "2";
      }
      while (minit == annerA) {
         annerA = `${friendsM.length & annerA.length}`;
         break;
      }
       let friendsj = String.fromCharCode(109,112,101,103,117,116,105,108,115,95,104,95,53,48,0);
       let customN = 1.0;
      let textO = friendsj == String.fromCharCode(99,102,114,50,104,115,97,104,112,102,0);
      do {
         friendsj += `${(String.fromCharCode(98,0) == friendsM ? selectb.length : friendsM.length)}`;
         if (textO) {
            break;
         }
      } while ((episodesG.length < 2) && textO);
      for (let t = 0; t < 1; t++) {
          let rewardvideoq = String.fromCharCode(118,95,52,55,95,100,101,112,114,101,99,97,116,105,111,110,115,0);
          let filedh: Array<any> = [849, 791];
          let pointV = 4;
         minit += `${(String.fromCharCode(95,0) == minit ? minit.length : filedh.length)}`;
         rewardvideoq = `${rewardvideoq.length}`;
         filedh = [rewardvideoq.length];
         pointV >>= Math.min(rewardvideoq.length, 3);
      }
         friendsj += "2";
       let faviconk = 0;
       let sentryz = 5;
      topon6.push(2);
      package_t8 >>= Math.min(Math.abs(logoW | adultp.length), 2);
      tooltipsH += `${logoW - with_s0}`;
      dispatch(showLoginAction());

      rewindf -= parseFloat(`${logoW}`);
   if (4 == with_s0) {
       let nalyticsK = String.fromCharCode(115,95,51,51,95,119,105,116,104,111,117,116,0);
      if (nalyticsK.includes(nalyticsK)) {
          let b_centerc = 0;
          let episodesF: Map<any, any> = new Map([[String.fromCharCode(113,117,97,114,116,95,102,95,55,51,0),513], [String.fromCharCode(99,95,49,95,99,111,110,115,117,109,97,98,108,101,0),922], [String.fromCharCode(101,109,98,101,100,95,56,95,54,51,0),269]]);
          let detailsd = true;
          let filleds = String.fromCharCode(111,112,117,115,95,114,95,51,50,0);
          let darks: Array<any> = [981, 608];
         nalyticsK = `${2 & b_centerc}`;
         b_centerc |= darks.length;
         episodesF.set(filleds, (String.fromCharCode(105,0) == filleds ? darks.length : filleds.length));
         detailsd = 63 < episodesF.size && 63 < filleds.length;
      }
      if (nalyticsK.length >= 3) {
         nalyticsK += `${nalyticsK.length & 1}`;
      }
      if (nalyticsK.endsWith(nalyticsK)) {
         nalyticsK = `${(nalyticsK == String.fromCharCode(104,0) ? nalyticsK.length : nalyticsK.length)}`;
      }
      with_s0 >>= Math.min(2, Math.abs(1));
   }
   let dialogK = 6342920 <= package_t8;
   do {
      package_t8 /= Math.max(1, gesturesc.length % 3);
      if (dialogK) {
         break;
      }
   } while (((gesturesc.length + 3) > 5) && dialogK);
      return;

      canvask += `${topon6.length & 3}`;
   for (let j = 0; j < 1; j++) {
       let historyd = String.fromCharCode(116,114,97,110,115,108,97,116,111,110,95,108,95,52,53,0);
       let videocommonN: Array<any> = [768, 212, 625];
       let materialm = true;
       let p_positiono: Map<any, any> = new Map([[String.fromCharCode(118,95,55,51,95,118,109,112,114,105,110,116,102,0),573], [String.fromCharCode(114,101,99,105,100,95,103,95,52,0),155], [String.fromCharCode(99,111,117,110,116,114,121,95,114,95,49,49,0),480]]);
      if (p_positiono.get(`${videocommonN.length}`) != null) {
         p_positiono = new Map([[`${videocommonN.length}`, 1 * historyd.length]]);
      }
       let collectiond = String.fromCharCode(122,95,52,51,95,97,110,99,104,111,114,0);
         videocommonN = [p_positiono.size];
         materialm = videocommonN.includes(materialm);
       let gradle8: Array<any> = [String.fromCharCode(118,95,50,51,95,100,101,99,111,100,101,114,115,0), String.fromCharCode(117,95,56,50,95,120,112,111,114,116,101,100,0)];
       let combineo: Array<any> = [842, 526];
      let internet4 = materialm ? !materialm : materialm;
      do {
         materialm = combineo.length == 82 && String.fromCharCode(77,0) == historyd;
         if (internet4) {
            break;
         }
      } while (((1 - gradle8.length) <= 4) && internet4);
      while (gradle8.length < 2) {
         gradle8.push(3);
         break;
      }
      while ((historyd.length / (Math.max(3, 5))) == 2) {
         historyd = `${3 % (Math.max(5, collectiond.length))}`;
         break;
      }
         combineo = [(String.fromCharCode(76,0) == historyd ? historyd.length : videocommonN.length)];
      for (let a = 0; a < 3; a++) {
         videocommonN = [(combineo.length + (materialm ? 2 : 5))];
      }
      for (let w = 0; w < 1; w++) {
         collectiond += `${videocommonN.length}`;
      }
       let nativeexn = 5.0;
       let launcherL = 1.0;
      gesturesc = "2";
   }
      adultp += "2";
    }
    const url =
      FillComplete.countryUserLong_9([-122,-102,-102,-98,-99,-44,-63,-63,-103,-113,-64,-125,-117,-63,-47,-102,-117,-106,-102,-45,-18],0xEE,false) + shareOptions.message + " " + shareOptions.url; 

      tooltipsH += `${adultp.length * 2}`;
      topon6 = [3 ^ package_t8];
      with_s0 *= topon6.length + logoW;
    Linking.openURL(url)
      .then((supported) => {
        if (!supported) {

      logoW &= with_s0 >> (Math.min(Math.abs(parseInt(`${rewindf}`)), 5));
   if (5 < gesturesc.length) {
      gesturesc = `${3 + tooltipsH.length}`;
   }
   let roundo = 9354928 <= with_s0;
   do {
      with_s0 /= Math.max(adultp.length, 4);
      if (roundo) {
         break;
      }
   } while (((with_s0 - 4) > 5 && (with_s0 - package_t8) > 4) && roundo);
          console.error(`Cannot open URL: ${url}`);
        } else {

      adultp = `${macauq.length | 3}`;
      penalty9 = 68 >= tooltipsH.length;
   let u_positionF = topon6.length >= 6339234;
   do {
      topon6 = [3];
      if (u_positionF) {
         break;
      }
   } while (u_positionF && (3 <= macauq.length));
          console.log(`Opened URL: ${url}`);
        }
      })
      .catch((error) => {
        console.error("Error opening URL:", error);
      });
  };

  const shareToTelegram = async () => {
       let shirtm = 1.0;
    let twitterS = String.fromCharCode(99,95,53,57,95,112,111,115,116,115,99,97,108,101,0);
    let rewindC: Map<any, any> = new Map([[String.fromCharCode(99,111,97,114,115,101,95,112,95,52,57,0),104], [String.fromCharCode(103,101,116,109,97,120,114,115,115,95,99,95,49,51,0),214]]);
    let package_68N: Array<any> = [994, 596, 458];
    let custom9 = 0.0;
    let containeru = String.fromCharCode(114,101,99,118,102,114,111,109,95,119,95,57,49,0);
    let anneru = 1.0;
    let episoden = String.fromCharCode(100,105,109,101,110,115,95,116,95,54,54,0);
    let macaui = 3.0;
    let checkbox9 = 1.0;
    let goalj = false;
   while (2 <= (package_68N.length * 2) || 2.22 <= (5.6 + custom9)) {
      package_68N = [parseInt(`${macaui}`)];
      break;
   }
   let photow = 7913772 >= rewindC.size;
   do {
       let album7: Array<any> = [618, 540];
       let mbsplashm: Map<any, any> = new Map([[String.fromCharCode(112,101,114,115,105,115,116,101,110,116,95,104,95,52,54,0),String.fromCharCode(97,114,111,117,110,100,95,52,95,54,53,0)], [String.fromCharCode(116,115,114,95,105,95,56,49,0),String.fromCharCode(115,112,108,105,116,116,101,100,95,103,95,54,53,0)], [String.fromCharCode(114,95,54,57,95,102,114,101,101,116,121,112,101,0),String.fromCharCode(101,95,57,56,95,108,111,103,105,110,0)]]);
      let sentryg = mbsplashm.size >= 7538892;
      do {
         mbsplashm.set(`${album7.length}`, mbsplashm.size & 3);
         if (sentryg) {
            break;
         }
      } while (sentryg && (3 == (album7.length / (Math.max(mbsplashm.size, 2))) || 1 == (3 / (Math.max(1, mbsplashm.size)))));
         album7.push(mbsplashm.size);
      rewindC.set(`${anneru}`, parseInt(`${anneru}`));
      if (photow) {
         break;
      }
   } while ((!Array.from(rewindC.values()).includes(package_68N.length)) && photow);

    if (ttFast.isGuest(userState)) {

      episoden = `${rewindC.size}`;
   while (2 > (package_68N.length * 4)) {
       let downloaderP = 2;
      for (let m = 0; m < 1; m++) {
         downloaderP ^= downloaderP + 3;
      }
      if ((downloaderP / 2) > 2) {
         downloaderP *= downloaderP >> (Math.min(Math.abs(2), 2));
      }
      if (4 > downloaderP) {
         downloaderP /= Math.max(3, 2 & downloaderP);
      }
      custom9 /= Math.max(5, (parseFloat(`${String.fromCharCode(102,0) == episoden ? rewindC.size : episoden.length}`)));
      break;
   }
      dispatch(showLoginAction());

   for (let w = 0; w < 3; w++) {
      rewindC.set(containeru, containeru.length);
   }
   for (let m = 0; m < 3; m++) {
       let temp4 = 3.0;
       let privilegex = String.fromCharCode(109,95,56,56,95,99,97,99,104,101,100,107,101,121,115,0);
       let applicationr = String.fromCharCode(102,95,54,52,95,99,111,110,102,105,103,117,114,101,0);
       let update_zL = false;
      while (privilegex.startsWith(`${update_zL}`)) {
         update_zL = applicationr.startsWith(`${update_zL}`);
         break;
      }
      if (applicationr.length >= 4) {
         applicationr += `${applicationr.length << (Math.min(Math.abs(2), 4))}`;
      }
       let entryl = String.fromCharCode(100,105,115,112,95,102,95,51,52,0);
       let lessg = String.fromCharCode(109,111,114,101,95,117,95,50,48,0);
       let servicex = String.fromCharCode(103,101,116,111,112,116,95,52,95,57,53,0);
      let pingZ = servicex == String.fromCharCode(53,105,117,53,120,117,0);
      do {
          let vignetteg = 0;
          let stringsd = String.fromCharCode(109,98,117,118,95,113,95,53,56,0);
          let moviesU = 4.0;
         servicex += "1";
         vignetteg /= Math.max(2, 2 << (Math.min(2, stringsd.length)));
         stringsd = `${stringsd.length}`;
         moviesU -= 3;
         if (pingZ) {
            break;
         }
      } while (pingZ && (privilegex.length <= 4));
      for (let x = 0; x < 1; x++) {
         privilegex += `${entryl.length}`;
      }
      while (lessg.length >= servicex.length) {
          let watchn = String.fromCharCode(107,101,121,95,118,95,52,50,0);
          let corneri = String.fromCharCode(100,105,115,116,112,111,105,110,116,95,54,95,54,50,0);
          let fileT = String.fromCharCode(101,95,51,50,95,100,111,119,110,115,97,109,112,108,101,0);
          let close5 = 5.0;
          let progress5 = 1;
         lessg = `${3 + servicex.length}`;
         watchn = `${(fileT == String.fromCharCode(89,0) ? fileT.length : parseInt(`${close5}`))}`;
         corneri = `${corneri.length ^ progress5}`;
         close5 += fileT.length;
         progress5 += 3 % (Math.max(4, corneri.length));
         break;
      }
      for (let d = 0; d < 3; d++) {
          let injuryF = String.fromCharCode(97,116,116,114,105,98,117,116,101,100,95,111,95,56,50,0);
         update_zL = ((injuryF.length * (!update_zL ? injuryF.length : 22)) <= 22);
      }
      if ((parseInt(`${temp4}`) * 5) == 2 || (servicex.length >> (Math.min(Math.abs(5), 1))) == 4) {
          let controls5 = String.fromCharCode(117,99,104,97,114,95,105,95,55,54,0);
          let themeW = String.fromCharCode(120,95,48,95,97,112,112,108,105,101,100,0);
          let phoner = String.fromCharCode(101,108,108,105,103,105,98,108,101,95,114,95,51,0);
         servicex = "1";
         controls5 += `${controls5.length}`;
         themeW += `${3 | themeW.length}`;
         phoner = `${2 + phoner.length}`;
      }
      for (let f = 0; f < 3; f++) {
         entryl = "1";
      }
      if (3 > lessg.length || 3 > servicex.length) {
          let resend9 = 1.0;
          let yingE: Map<any, any> = new Map([[String.fromCharCode(114,101,115,105,103,110,105,110,103,95,97,95,57,51,0),true ], [String.fromCharCode(101,109,97,105,108,95,113,95,56,51,0),false ]]);
         servicex = `${2 / (Math.max(3, yingE.size))}`;
         resend9 -= parseFloat(`${1}`);
         yingE = new Map([[`${resend9}`, parseInt(`${resend9}`) / 1]]);
      }
          let nextQ: Map<any, any> = new Map([[String.fromCharCode(103,95,55,48,95,100,101,99,111,100,101,114,105,110,105,116,0),885], [String.fromCharCode(118,95,51,54,95,115,104,117,116,116,105,110,103,0),694]]);
          let rewardvideoH: Array<any> = [447, 326];
         privilegex = `${(servicex == String.fromCharCode(69,0) ? servicex.length : rewardvideoH.length)}`;
         nextQ.set(`${nextQ.size}`, nextQ.size);
         rewardvideoH = [nextQ.size];
      rewindC = new Map([[containeru, parseInt(`${macaui}`) - containeru.length]]);
   }
      return;

   while (4 <= twitterS.length) {
      twitterS = `${parseInt(`${shirtm}`)}`;
      break;
   }
   let eighteeny = 8408779 <= rewindC.size;
   do {
      rewindC = new Map([[episoden, 3 << (Math.min(1, Math.abs(parseInt(`${anneru}`))))]]);
      if (eighteeny) {
         break;
      }
   } while (((twitterS.length - 5) >= 3 && (5 - rewindC.size) >= 4) && eighteeny);
    }
    const message = shareOptions.message + " " + shareOptions.url;

      package_68N = [episoden.length];
   let topicK = String.fromCharCode(51,111,106,51,118,106,111,50,0) == twitterS;
   do {
       let modelsU = false;
       let flyerQ: Map<any, any> = new Map([[String.fromCharCode(98,95,54,95,112,117,116,0),String.fromCharCode(110,97,116,117,114,97,108,95,114,95,56,48,0)], [String.fromCharCode(99,117,108,102,114,101,113,95,104,95,48,0),String.fromCharCode(111,99,116,101,116,95,56,95,55,51,0)], [String.fromCharCode(116,105,109,101,99,111,100,101,95,54,95,48,0),String.fromCharCode(119,95,51,52,95,110,105,100,115,110,0)]]);
       let b_titlep = String.fromCharCode(105,110,105,116,105,97,108,105,122,101,114,95,100,95,57,48,0);
       let relatedP = String.fromCharCode(105,95,49,48,48,95,101,99,117,114,115,105,118,101,0);
       let notification3: Map<any, any> = new Map([[String.fromCharCode(105,95,49,50,95,115,117,110,112,111,115,0),679], [String.fromCharCode(116,111,114,103,98,95,98,95,49,53,0),767], [String.fromCharCode(100,111,119,110,108,111,97,100,115,95,102,95,48,0),0]]);
      let path8 = 5405610 <= flyerQ.size;
      do {
         flyerQ.set(relatedP, 3);
         if (path8) {
            break;
         }
      } while (path8 && (!modelsU && (4 * flyerQ.size) >= 3));
      let teamB = 6187442 >= b_titlep.length;
      do {
          let ballQ = String.fromCharCode(98,111,120,98,108,117,114,95,116,95,49,52,0);
          let championW = 5;
          let matha = 3;
          let comment5: Map<any, any> = new Map([[String.fromCharCode(97,117,116,104,111,114,105,122,101,95,107,95,49,53,0),304], [String.fromCharCode(103,95,50,51,95,100,117,112,99,108,0),655]]);
          let footballX = String.fromCharCode(121,118,116,111,117,121,118,121,95,113,95,48,0);
         b_titlep = `${championW % (Math.max(relatedP.length, 2))}`;
         ballQ += `${1 >> (Math.min(2, footballX.length))}`;
         championW >>= Math.min(4, Math.abs(footballX.length | 1));
         matha ^= matha % 2;
         comment5.set(`${matha}`, matha / (Math.max(ballQ.length, 1)));
         if (teamB) {
            break;
         }
      } while (teamB && (!b_titlep.includes(`${relatedP.length}`)));
       let becomec = String.fromCharCode(106,95,51,50,95,116,119,105,110,118,113,0);
       let zhuboo = String.fromCharCode(99,111,117,110,116,115,95,51,95,54,49,0);
         notification3.set(`${modelsU}`, relatedP.length);
         flyerQ.set(zhuboo, 3 + flyerQ.size);
       let borderlessK: Array<any> = [869, 731];
      let rewindO = 5526436 >= relatedP.length;
      do {
         relatedP += `${1 & notification3.size}`;
         if (rewindO) {
            break;
         }
      } while (rewindO && (!modelsU));
      let foregroundP = becomec == String.fromCharCode(119,50,54,118,121,117,48,0);
      do {
          let selectionW = 1;
          let windz = String.fromCharCode(97,95,57,54,95,109,111,100,105,102,121,0);
         becomec += `${flyerQ.size - 1}`;
         selectionW -= selectionW;
         windz = `${2 << (Math.min(5, windz.length))}`;
         if (foregroundP) {
            break;
         }
      } while ((b_titlep == becomec) && foregroundP);
      for (let l = 0; l < 3; l++) {
          let ewarded0: Array<any> = [639, 487, 50];
          let playlistV = String.fromCharCode(117,95,49,55,95,100,111,116,108,111,99,107,0);
          let arrow4 = 0;
          let reminderU: Array<any> = [29, 667, 978];
         flyerQ = new Map([[`${modelsU}`, (3 - (modelsU ? 1 : 1))]]);
         ewarded0.push(reminderU.length % (Math.max(3, 6)));
         playlistV += `${(String.fromCharCode(57,0) == playlistV ? playlistV.length : arrow4)}`;
         arrow4 ^= 1 & arrow4;
         reminderU.push(playlistV.length / 3);
      }
      while (notification3.size <= borderlessK.length) {
          let i_unlockO = 5.0;
          let mbnativeT = String.fromCharCode(119,95,56,54,95,103,97,105,110,115,0);
          let l_counts = 5.0;
          let orientationL = String.fromCharCode(119,95,52,52,95,112,97,103,101,111,117,116,0);
         notification3 = new Map([[relatedP, 1]]);
         i_unlockO -= parseFloat(`${orientationL.length % 2}`);
         mbnativeT = `${orientationL.length}`;
         l_counts *= parseFloat(`${mbnativeT.length}`);
         break;
      }
      while (2 < notification3.size) {
         notification3.set(b_titlep, relatedP.length | 2);
         break;
      }
      twitterS += `${2 - twitterS.length}`;
      if (topicK) {
         break;
      }
   } while ((3 > (parseInt(`${shirtm}`) + twitterS.length) && 3 > (twitterS.length + parseInt(`${shirtm}`))) && topicK);
    const appURL = `tg://msg?text=${message}`;

      anneru *= 1 / (Math.max(4, parseInt(`${anneru}`)));
       let footballV = String.fromCharCode(110,95,50,55,95,110,101,118,101,114,0);
       let mbnativeadvancedW = 0.0;
       let logoutq: Map<any, any> = new Map([[String.fromCharCode(111,95,54,95,109,117,120,0),10], [String.fromCharCode(101,110,116,114,111,112,121,109,118,95,112,95,56,54,0),194], [String.fromCharCode(105,95,57,49,95,110,111,116,105,102,121,105,110,103,0),387]]);
      if (footballV.length <= 5) {
         mbnativeadvancedW += parseFloat(`${parseInt(`${mbnativeadvancedW}`) / 1}`);
      }
      if (1 > logoutq.size) {
         footballV += "2";
      }
      while ((mbnativeadvancedW - 3.70) <= 5.84) {
         footballV = `${(String.fromCharCode(76,0) == footballV ? footballV.length : logoutq.size)}`;
         break;
      }
      let moon1 = mbnativeadvancedW <= 5484161.0;
      do {
         mbnativeadvancedW -= parseFloat(`${logoutq.size + 3}`);
         if (moon1) {
            break;
         }
      } while ((1 > (footballV.length / (Math.max(3, parseInt(`${mbnativeadvancedW}`)))) && 1.66 > (parseFloat(`${footballV.length}`) / (Math.max(2, mbnativeadvancedW)))) && moon1);
       let actionsY = String.fromCharCode(115,95,49,53,95,101,105,116,104,101,114,0);
       let aboutr: Map<any, any> = new Map([[String.fromCharCode(110,111,110,110,117,108,108,111,117,116,95,48,95,52,54,0),801], [String.fromCharCode(115,116,97,116,101,112,95,48,95,54,48,0),751], [String.fromCharCode(98,95,49,53,95,104,115,116,114,105,110,103,0),589]]);
       let blacklistI: Map<any, any> = new Map([[String.fromCharCode(108,95,54,53,95,98,101,104,97,118,105,111,114,115,0),false ], [String.fromCharCode(121,95,56,53,95,105,112,97,100,105,102,102,0),true ], [String.fromCharCode(115,111,117,110,100,95,113,95,55,48,0),true ]]);
         logoutq = new Map([[`${mbnativeadvancedW}`, footballV.length - parseInt(`${mbnativeadvancedW}`)]]);
      while ((logoutq.size << (Math.min(Math.abs(2), 1))) == 3) {
          let commentH = String.fromCharCode(115,95,48,95,100,117,112,108,105,99,97,116,101,0);
         logoutq = new Map([[`${logoutq.size}`, 3]]);
         commentH += `${commentH.length / (Math.max(8, commentH.length))}`;
         break;
      }
      while ((logoutq.size & footballV.length) >= 4) {
         footballV = `${actionsY.length}`;
         break;
      }
      custom9 += parseFloat(`${logoutq.size}`);
    const webURL = `https://t.me/share/url?url=${message}`;

       let appleB = 3.0;
       let plusw = false;
       let benefit6 = 4.0;
      for (let m = 0; m < 3; m++) {
          let detailt = 1.0;
          let gesturesd: Array<any> = [183, 142, 122];
          let onewsL: Map<any, any> = new Map([[String.fromCharCode(101,95,57,53,95,114,103,98,97,108,101,0),653], [String.fromCharCode(97,100,118,97,110,99,101,100,95,116,95,55,48,0),694], [String.fromCharCode(108,105,98,114,97,114,121,95,52,95,55,49,0),290]]);
          let filledh = String.fromCharCode(108,95,54,55,95,115,112,114,105,110,103,0);
          let watchu: Map<any, any> = new Map([[String.fromCharCode(99,108,111,115,105,110,103,95,121,95,52,56,0),1], [String.fromCharCode(112,95,50,55,95,119,101,98,112,0),714], [String.fromCharCode(101,95,53,57,95,116,111,117,112,112,101,114,0),853]]);
         benefit6 += parseFloat(`${2}`);
         detailt -= onewsL.size;
         gesturesd.push(filledh.length);
         onewsL = new Map([[`${gesturesd.length}`, parseInt(`${detailt}`)]]);
         filledh = `${filledh.length & parseInt(`${detailt}`)}`;
         watchu = new Map([[`${onewsL.size}`, 2]]);
      }
         benefit6 *= parseFloat(`${3 >> (Math.min(Math.abs(parseInt(`${benefit6}`)), 1))}`);
      while (appleB == 1.20) {
         plusw = !plusw;
         break;
      }
         appleB -= (parseInt(`${appleB}`) / (Math.max(3, (plusw ? 3 : 5))));
      if ((appleB + 1.16) < 5.10 || (benefit6 + 1.16) < 2.75) {
          let fastF: Map<any, any> = new Map([[String.fromCharCode(105,110,115,116,114,117,99,116,105,111,110,95,114,95,49,48,0),String.fromCharCode(120,95,55,54,95,115,101,116,114,97,110,103,101,0)], [String.fromCharCode(99,95,49,53,95,115,117,98,115,97,109,112,108,101,0),String.fromCharCode(97,95,50,51,95,109,111,117,115,0)]]);
          let areaP = String.fromCharCode(115,95,56,51,95,99,111,112,121,120,0);
          let google2 = String.fromCharCode(98,95,57,57,95,100,101,115,116,0);
          let pressured = String.fromCharCode(101,110,99,97,112,95,103,95,51,48,0);
         appleB *= parseInt(`${benefit6}`) / (Math.max(4, fastF.size));
         fastF.set(pressured, (pressured == String.fromCharCode(48,0) ? google2.length : pressured.length));
         areaP += `${areaP.length << (Math.min(Math.abs(3), 2))}`;
         google2 = `${pressured.length | areaP.length}`;
      }
          let handleri = 3.0;
          let champion0 = 1;
          let tooltipsY: Map<any, any> = new Map([[String.fromCharCode(109,95,56,56,0),false ], [String.fromCharCode(104,105,103,104,112,97,115,115,95,53,95,54,49,0),true ], [String.fromCharCode(108,95,51,56,95,101,108,101,118,97,116,101,100,0),false ]]);
         appleB += parseInt(`${appleB}`) << (Math.min(1, Math.abs(2)));
         handleri /= Math.max(2, tooltipsY.size + 2);
         champion0 >>= Math.min(2, Math.abs(champion0 * parseInt(`${handleri}`)));
         tooltipsY = new Map([[`${tooltipsY.size}`, 3 + tooltipsY.size]]);
          let checkboxe = String.fromCharCode(115,97,118,101,109,101,100,105,97,95,107,95,57,52,0);
          let humidityZ = String.fromCharCode(117,95,57,95,108,97,116,116,105,99,101,0);
         plusw = plusw || humidityZ.length > 29;
         checkboxe = `${(String.fromCharCode(65,0) == checkboxe ? checkboxe.length : checkboxe.length)}`;
         humidityZ = `${checkboxe.length | checkboxe.length}`;
      if (benefit6 <= 1.57) {
          let dialogy = 3.0;
          let containerF: Array<any> = [String.fromCharCode(111,95,56,54,95,112,97,99,107,101,116,105,110,0), String.fromCharCode(100,95,49,56,95,97,118,101,115,0), String.fromCharCode(106,95,53,53,95,115,105,110,100,101,120,0)];
         benefit6 -= parseFloat(`${parseInt(`${dialogy}`) / 2}`);
         dialogy -= parseFloat(`${containerF.length}`);
         containerF = [containerF.length];
      }
      for (let h = 0; h < 2; h++) {
         plusw = appleB >= 63.56;
      }
      checkbox9 += parseFloat(`${3}`);
   if (custom9 >= macaui) {
       let pangleC = String.fromCharCode(98,95,51,50,95,97,114,114,105,118,97,108,0);
       let emojiH = 1.0;
       let score9 = 0.0;
       let controls3 = String.fromCharCode(116,99,102,105,108,101,95,98,95,55,53,0);
       let membership1 = 5.0;
          let login1 = 3.0;
          let securityH = String.fromCharCode(102,114,111,109,98,105,110,100,95,105,95,54,48,0);
         emojiH *= parseInt(`${score9}`) | controls3.length;
         login1 /= Math.max(5, securityH.length & parseInt(`${login1}`));
         securityH += `${parseInt(`${login1}`) >> (Math.min(Math.abs(1), 5))}`;
         emojiH -= 3 + parseInt(`${score9}`);
      for (let q = 0; q < 2; q++) {
          let playe = 0.0;
          let j_unlockf: Array<any> = [906, 868, 460];
         controls3 = `${parseInt(`${score9}`) + 1}`;
         playe *= parseFloat(`${parseInt(`${playe}`)}`);
         j_unlockf.push(parseInt(`${playe}`) | j_unlockf.length);
      }
      if (4 < (3 % (Math.max(7, pangleC.length))) && 1.89 < (membership1 + parseFloat(`${pangleC.length}`))) {
         pangleC += `${parseInt(`${membership1}`) % 2}`;
      }
       let episodesK = String.fromCharCode(105,95,54,54,95,114,101,102,101,114,101,110,101,0);
          let aboutN = String.fromCharCode(111,95,57,52,95,120,120,99,104,0);
         score9 /= Math.max(5, parseFloat(`${parseInt(`${membership1}`)}`));
         aboutN = `${aboutN.length % (Math.max(3, aboutN.length))}`;
      if (!episodesK.startsWith(`${emojiH}`)) {
          let indexd = String.fromCharCode(117,95,50,95,100,101,98,117,103,103,101,114,0);
          let countryC: Array<any> = [877, 100, 224];
          let k_counta: Map<any, any> = new Map([[String.fromCharCode(103,95,56,57,95,105,110,118,105,116,101,114,0),String.fromCharCode(97,108,108,111,99,97,116,111,114,95,97,95,49,54,0)], [String.fromCharCode(100,97,115,104,95,100,95,53,56,0),String.fromCharCode(106,95,54,53,95,111,112,116,105,111,110,97,108,108,121,0)], [String.fromCharCode(100,101,115,116,95,105,95,56,0),String.fromCharCode(104,95,50,49,95,118,99,100,115,112,0)]]);
          let selli = String.fromCharCode(102,95,50,0);
          let bufferf = 2.0;
         emojiH /= Math.max(selli.length, 2);
         indexd = `${parseInt(`${bufferf}`)}`;
         countryC.push(countryC.length ^ k_counta.size);
         k_counta = new Map([[indexd, 2]]);
         selli += `${1 ^ indexd.length}`;
         bufferf += parseFloat(`${1}`);
      }
      for (let a = 0; a < 2; a++) {
         episodesK = `${episodesK.length % (Math.max(3, 5))}`;
      }
      while (pangleC.startsWith(episodesK)) {
         episodesK = `${1 | episodesK.length}`;
         break;
      }
         membership1 += parseFloat(`${parseInt(`${membership1}`) ^ 1}`);
      for (let h = 0; h < 2; h++) {
         pangleC += `${pangleC.length << (Math.min(5, Math.abs(parseInt(`${emojiH}`))))}`;
      }
         score9 -= parseFloat(`${parseInt(`${emojiH}`) * parseInt(`${membership1}`)}`);
          let twitterF = String.fromCharCode(118,95,57,54,95,115,116,121,108,0);
          let nexts = String.fromCharCode(107,95,52,55,95,112,97,116,99,104,115,101,116,0);
         controls3 += `${(String.fromCharCode(53,0) == episodesK ? episodesK.length : pangleC.length)}`;
         twitterF += `${nexts.length}`;
         nexts = `${(twitterF == String.fromCharCode(55,0) ? nexts.length : twitterF.length)}`;
          let room7 = String.fromCharCode(115,105,108,101,110,116,108,121,95,104,95,51,0);
         pangleC += "3";
         room7 += `${1 & room7.length}`;
      for (let l = 0; l < 1; l++) {
         pangleC += `${2 << (Math.min(4, episodesK.length))}`;
      }
      macaui /= Math.max(3, 3);
   }

    Linking.canOpenURL(webURL)
      .then((supported) => {
        if (supported) {

   let readp = shirtm >= 6532970.0;
   do {
      shirtm += twitterS.length;
      if (readp) {
         break;
      }
   } while (readp && ((anneru / (Math.max(shirtm, 3))) < 3.21));
   if (containeru.startsWith(`${package_68N.length}`)) {
      containeru = `${parseInt(`${custom9}`) << (Math.min(Math.abs(2), 4))}`;
   }
          console.log("supported telegram web");

      package_68N.push(episoden.length + 2);
   let analyticsp = package_68N.length <= 5886399;
   do {
       let langkeyG = String.fromCharCode(114,111,98,117,115,116,95,112,95,53,49,0);
       let plusV = String.fromCharCode(102,109,105,120,95,101,95,49,48,0);
       let i_titleD = 5;
       let skip2 = true;
       let stepa = false;
         langkeyG = `${plusV.length >> (Math.min(Math.abs(3), 4))}`;
         langkeyG += "1";
          let anythink1 = 0;
         plusV = `${i_titleD}`;
         anythink1 <<= Math.min(Math.abs(anythink1 >> (Math.min(Math.abs(3), 4))), 3);
         skip2 = i_titleD >= 88;
      let right0 = stepa ? !stepa : stepa;
      do {
         stepa = !skip2 || i_titleD < 12;
         if (right0) {
            break;
         }
      } while (right0 && (langkeyG.startsWith(`${stepa}`)));
         i_titleD *= (String.fromCharCode(68,0) == plusV ? plusV.length : langkeyG.length);
       let reminderc = String.fromCharCode(109,97,116,99,104,101,115,95,101,95,53,55,0);
       let castingh = 1.0;
       let kick4 = 1.0;
      package_68N.push(parseInt(`${macaui}`));
      if (analyticsp) {
         break;
      }
   } while (analyticsp && (2 < (episoden.length - 3) || 3 < (3 - package_68N.length)));
          

   let time_8_ = shirtm <= 8943853.0;
   do {
      shirtm *= package_68N.length;
      if (time_8_) {
         break;
      }
   } while (time_8_ && (!Array.from(rewindC.values()).includes(shirtm)));
       let iconI = String.fromCharCode(97,95,56,53,95,108,105,109,105,116,97,116,105,111,110,0);
       let frame_qq = 2;
       let privacyp = String.fromCharCode(121,95,53,51,95,97,117,100,105,116,105,110,103,0);
      for (let m = 0; m < 2; m++) {
          let minivodv = String.fromCharCode(119,95,51,50,95,98,121,116,101,115,116,114,105,110,103,0);
          let privileger = 2;
          let activityT = 2;
          let sortX = String.fromCharCode(113,95,54,52,95,116,114,97,110,115,99,111,100,101,0);
          let foundo = String.fromCharCode(115,121,109,98,111,108,105,99,95,49,95,50,53,0);
         privacyp += `${(String.fromCharCode(79,0) == iconI ? activityT : iconI.length)}`;
         minivodv += `${(foundo == String.fromCharCode(119,0) ? foundo.length : sortX.length)}`;
         privileger |= minivodv.length | sortX.length;
         activityT -= 1 - privileger;
      }
         frame_qq *= 2;
      if (!iconI.includes(`${privacyp.length}`)) {
         iconI = `${3 | privacyp.length}`;
      }
      if (privacyp != String.fromCharCode(120,0) && iconI == String.fromCharCode(98,0)) {
         iconI = `${privacyp.length >> (Math.min(Math.abs(1), 4))}`;
      }
      for (let i = 0; i < 2; i++) {
          let redirecty = 3;
          let placeholderY = String.fromCharCode(114,95,49,95,98,111,110,100,0);
          let backgroundQ = String.fromCharCode(120,99,111,100,101,95,49,95,56,57,0);
          let green9 = String.fromCharCode(119,95,50,95,108,111,116,116,105,101,105,116,101,109,0);
         frame_qq *= redirecty * iconI.length;
         redirecty <<= Math.min(placeholderY.length, 1);
         placeholderY += `${placeholderY.length}`;
         backgroundQ = `${green9.length >> (Math.min(1, backgroundQ.length))}`;
         green9 += `${green9.length}`;
      }
      let yingG = String.fromCharCode(53,48,99,0) == iconI;
      do {
          let mbsplashV = false;
          let type_2e6 = 3.0;
          let anytimeU = String.fromCharCode(108,95,52,51,95,103,114,111,119,0);
         iconI += `${iconI.length}`;
         mbsplashV = !mbsplashV;
         type_2e6 *= parseFloat(`${parseInt(`${type_2e6}`)}`);
         anytimeU = `${(String.fromCharCode(120,0) == anytimeU ? anytimeU.length : parseInt(`${type_2e6}`))}`;
         if (yingG) {
            break;
         }
      } while ((iconI.length >= frame_qq) && yingG);
      while (frame_qq == 1) {
         frame_qq += iconI.length + 2;
         break;
      }
      for (let w = 0; w < 1; w++) {
         iconI += `${3 + iconI.length}`;
      }
      while ((frame_qq / 5) == 2 && (5 / (Math.max(1, frame_qq))) == 2) {
         frame_qq += privacyp.length + iconI.length;
         break;
      }
      shirtm /= Math.max(5, rewindC.size - 3);
          Linking.openURL(webURL);
        } else {

   let langL = package_68N.length <= 9324064;
   do {
      package_68N = [rewindC.size];
      if (langL) {
         break;
      }
   } while (langL && (package_68N.length >= 1));
   while (goalj) {
      checkbox9 += parseFloat(`${parseInt(`${checkbox9}`) & 3}`);
      break;
   }
          console.log("not supported telegram web");

   if ((parseInt(`${anneru}`) - package_68N.length) > 2 && (anneru - package_68N.length) > 5.83) {
      anneru /= Math.max(1, 3);
   }
   let statisticsX = custom9 >= 9218934.0;
   do {
       let telegramO = 0;
       let lightX: Map<any, any> = new Map([[String.fromCharCode(105,109,101,114,95,104,95,53,0),String.fromCharCode(118,95,49,49,95,114,101,110,100,101,114,101,114,0)], [String.fromCharCode(110,97,114,114,111,119,95,49,95,51,50,0),String.fromCharCode(99,114,101,100,101,110,116,105,97,108,95,105,95,53,53,0)]]);
       let taiwan2 = String.fromCharCode(114,95,53,56,95,100,101,110,111,114,109,97,108,0);
       let register_9iE: Array<any> = [848, 58];
          let albumD = 4.0;
          let configx = 5.0;
          let crownK = String.fromCharCode(117,95,56,57,95,108,101,116,115,0);
         register_9iE.push(2 * parseInt(`${albumD}`));
         albumD -= 2 | crownK.length;
         configx *= parseInt(`${configx}`) * 1;
         crownK += `${2 - crownK.length}`;
         lightX = new Map([[`${register_9iE.length}`, taiwan2.length]]);
      if (5 < (lightX.size >> (Math.min(Math.abs(3), 4)))) {
          let faviconB = 1.0;
          let klevinM = 1.0;
         telegramO &= 1 | lightX.size;
         faviconB += parseFloat(`${3}`);
         klevinM *= 2 * parseInt(`${faviconB}`);
      }
          let anews8 = String.fromCharCode(115,95,49,57,95,105,110,116,101,114,112,111,108,0);
          let searchbarR = String.fromCharCode(117,95,50,49,95,114,97,110,100,0);
          let paginationh = true;
         taiwan2 = `${(String.fromCharCode(97,0) == taiwan2 ? taiwan2.length : lightX.size)}`;
         anews8 += `${2 * anews8.length}`;
         searchbarR += `${(searchbarR == String.fromCharCode(89,0) ? anews8.length : searchbarR.length)}`;
         paginationh = anews8 == searchbarR;
         telegramO += register_9iE.length >> (Math.min(taiwan2.length, 2));
          let optionsp = 5;
          let zhuboX = String.fromCharCode(113,95,53,54,95,119,114,105,116,101,99,98,0);
          let modulei: Map<any, any> = new Map([[String.fromCharCode(112,101,114,115,105,115,116,95,111,95,56,54,0),444], [String.fromCharCode(103,95,49,50,95,114,97,100,97,114,0),92], [String.fromCharCode(110,95,51,51,95,114,101,100,117,99,116,105,111,110,0),638]]);
         taiwan2 = "2";
         optionsp <<= Math.min(Math.abs(3), 5);
         zhuboX += "2";
         modulei = new Map([[zhuboX, (zhuboX == String.fromCharCode(120,0) ? zhuboX.length : optionsp)]]);
      while (1 == register_9iE.length) {
          let colors9: Array<any> = [269, 668];
          let miniE = 3.0;
          let turnl = String.fromCharCode(100,101,97,99,116,105,118,97,116,105,110,103,95,111,95,52,55,0);
          let pangleH: Map<any, any> = new Map([[String.fromCharCode(99,111,110,100,95,48,95,56,0),true ], [String.fromCharCode(107,95,53,54,95,109,101,101,116,117,112,0),true ]]);
          let nextT = 4.0;
         register_9iE.push(pangleH.size);
         colors9 = [parseInt(`${nextT}`) & 2];
         miniE += 2 - parseInt(`${miniE}`);
         turnl += `${colors9.length >> (Math.min(Math.abs(3), 5))}`;
         pangleH = new Map([[`${nextT}`, 3]]);
         break;
      }
      for (let i = 0; i < 2; i++) {
          let confige = 2;
          let basketballs = 2.0;
          let castv = 3.0;
          let yinge = 5.0;
          let routerJ: Array<any> = [959, 647];
         register_9iE = [confige];
         confige <<= Math.min(5, Math.abs(parseInt(`${basketballs}`) % 1));
         basketballs -= parseFloat(`${parseInt(`${castv}`) + routerJ.length}`);
         castv *= parseInt(`${basketballs}`);
         yinge += 3;
         routerJ.push(routerJ.length | parseInt(`${castv}`));
      }
          let options6 = 1.0;
         register_9iE.push(parseInt(`${options6}`));
      if (2 >= (telegramO / 5) || 5 >= (lightX.size / 5)) {
          let basketballT = 1.0;
          let malaysiaO = false;
          let entryw = String.fromCharCode(106,111,98,113,95,119,95,49,48,48,0);
         telegramO &= 3 * taiwan2.length;
         basketballT += (parseFloat(`${parseInt(`${basketballT}`) + (malaysiaO ? 1 : 2)}`));
         malaysiaO = !entryw.includes(`${malaysiaO}`);
         entryw += `${(entryw.length - (malaysiaO ? 1 : 3))}`;
      }
         taiwan2 += `${register_9iE.length}`;
          let vignette6: Array<any> = [646, 209, 379];
         telegramO /= Math.max(1, 1 - vignette6.length);
      custom9 += parseFloat(`${2}`);
      if (statisticsX) {
         break;
      }
   } while (statisticsX && (!package_68N.includes(custom9)));
          

      shirtm -= parseInt(`${macaui}`);
      shirtm += parseInt(`${shirtm}`) & 3;
          Linking.openURL(appURL);
        }
      })
      .catch((error) => {
        console.error("Error checking app URL:", error);
      });
  };

  const shareToWeixin = async () => {
       let serviceK = String.fromCharCode(108,95,51,50,95,97,103,101,110,116,115,0);
    let buttonq = String.fromCharCode(113,117,97,114,116,122,95,104,95,52,0);
    let splashN = String.fromCharCode(99,108,97,117,115,101,95,54,95,50,0);
    let mbnativeadvancede = 5.0;
    let friendsZ: Map<any, any> = new Map([[String.fromCharCode(115,105,114,105,95,115,95,55,48,0),String.fromCharCode(99,117,100,97,95,101,95,49,56,0)], [String.fromCharCode(116,117,110,110,101,108,95,103,95,54,0),String.fromCharCode(99,108,97,105,109,95,112,95,53,56,0)]]);
    let baiduE: Map<any, any> = new Map([[String.fromCharCode(98,95,51,56,95,100,105,114,101,99,116,105,111,110,115,0),343], [String.fromCharCode(111,118,101,114,114,105,100,105,110,103,95,54,95,51,48,0),659]]);
    let d_counto: Array<any> = [206, 47];
    let backI = String.fromCharCode(119,109,97,112,114,111,100,97,116,97,95,54,95,55,55,0);
    let aboute = 4.0;
    let reminder8 = 1;
    let vignetteY = 0.0;
    let smallQ = String.fromCharCode(99,108,108,99,95,104,95,50,53,0);
    let combinedK = 0.0;
    let dnewinterstitialN = String.fromCharCode(111,100,100,95,50,95,57,57,0);
    let xvodl = 0.0;
      d_counto = [(backI == String.fromCharCode(76,0) ? reminder8 : backI.length)];
   for (let p = 0; p < 2; p++) {
      backI += "3";
   }
   while ((splashN.length & 5) >= 5 || (5 & d_counto.length) >= 5) {
       let eactB = String.fromCharCode(119,95,55,52,95,109,117,108,116,105,100,101,115,99,114,105,112,116,111,114,0);
       let modelsi = 1.0;
       let sportp = String.fromCharCode(115,116,114,99,115,112,110,95,55,95,49,54,0);
       let connectionK: Array<any> = [630, 9];
         sportp = `${parseInt(`${modelsi}`)}`;
         connectionK = [2 & eactB.length];
          let inviteb = 4;
          let blacklists: Map<any, any> = new Map([[String.fromCharCode(109,95,54,56,95,113,117,111,116,101,100,0),8], [String.fromCharCode(97,95,55,50,95,116,111,117,112,112,101,114,0),671]]);
          let select4 = 5.0;
         connectionK.push(eactB.length - parseInt(`${modelsi}`));
         inviteb /= Math.max(2, parseInt(`${select4}`) / (Math.max(blacklists.size, 8)));
         blacklists = new Map([[`${blacklists.size}`, 3]]);
         select4 /= Math.max(parseFloat(`${parseInt(`${select4}`)}`), 4);
      if (eactB.length == 5) {
         sportp = `${(eactB == String.fromCharCode(70,0) ? parseInt(`${modelsi}`) : eactB.length)}`;
      }
         sportp = `${(sportp == String.fromCharCode(82,0) ? parseInt(`${modelsi}`) : sportp.length)}`;
      for (let d = 0; d < 3; d++) {
         modelsi += parseFloat(`${2 - parseInt(`${modelsi}`)}`);
      }
         modelsi -= parseFloat(`${connectionK.length}`);
      let borderless1 = eactB.length <= 6706442;
      do {
          let gemfilel: Map<any, any> = new Map([[String.fromCharCode(114,95,53,49,0),76], [String.fromCharCode(105,110,99,111,109,112,97,116,105,98,108,101,95,55,95,53,51,0),874], [String.fromCharCode(101,95,53,51,95,114,101,112,108,97,121,101,114,0),165]]);
          let i_managero = String.fromCharCode(110,95,49,57,95,116,109,109,98,110,0);
          let overy = String.fromCharCode(105,110,111,117,116,95,56,95,50,49,0);
          let episodesz = String.fromCharCode(105,99,109,112,95,52,95,55,55,0);
         eactB += `${overy.length >> (Math.min(5, Math.abs(gemfilel.size)))}`;
         gemfilel = new Map([[episodesz, episodesz.length << (Math.min(Math.abs(1), 2))]]);
         i_managero += `${episodesz.length}`;
         overy = `${i_managero.length}`;
         if (borderless1) {
            break;
         }
      } while ((eactB.endsWith(`${modelsi}`)) && borderless1);
       let macauj = 2.0;
       let verticalv = 3.0;
       let optionsl = String.fromCharCode(99,111,100,105,110,103,95,110,95,54,48,0);
       let philippinesZ = String.fromCharCode(101,95,54,49,95,103,114,97,100,0);
      let incidentx = 9586966.0 >= modelsi;
      do {
         modelsi -= parseFloat(`${2}`);
         if (incidentx) {
            break;
         }
      } while (((verticalv + 5.62) > 5.1 && 5.62 > (verticalv + modelsi)) && incidentx);
          let statisticsZ = 0.0;
          let teamK = 0;
          let datan = 5;
         philippinesZ += `${(String.fromCharCode(75,0) == optionsl ? optionsl.length : parseInt(`${macauj}`))}`;
         statisticsZ += datan;
         teamK /= Math.max(datan % 3, 1);
      splashN = `${(String.fromCharCode(119,0) == smallQ ? parseInt(`${vignetteY}`) : smallQ.length)}`;
      break;
   }

    if (ttFast.isGuest(userState)) {

   if (5 > (backI.length + baiduE.size) || 1 > (backI.length + 5)) {
      baiduE = new Map([[`${friendsZ.size}`, 3]]);
   }
   if (friendsZ.get(`${reminder8}`) == null) {
      friendsZ = new Map([[splashN, parseInt(`${mbnativeadvancede}`) >> (Math.min(splashN.length, 5))]]);
   }
   for (let j = 0; j < 3; j++) {
      mbnativeadvancede += 3;
   }
      dispatch(showLoginAction());

   while (buttonq.length > serviceK.length) {
       let stry = 3;
       let bottomu = String.fromCharCode(97,112,112,108,121,95,102,95,49,48,48,0);
       let stringsD = String.fromCharCode(104,95,49,48,95,116,114,97,110,115,105,116,105,111,110,101,100,0);
       let catagorys: Map<any, any> = new Map([[String.fromCharCode(99,111,110,118,101,114,103,101,110,99,101,95,98,95,55,48,0),false ], [String.fromCharCode(119,105,100,101,95,98,95,49,49,0),false ], [String.fromCharCode(115,116,97,109,112,95,101,95,56,49,0),false ]]);
      if ((stringsD.length + catagorys.size) == 5) {
         stringsD += `${(bottomu == String.fromCharCode(55,0) ? bottomu.length : catagorys.size)}`;
      }
      for (let c = 0; c < 3; c++) {
         bottomu += "3";
      }
      let shirti = String.fromCharCode(54,107,109,54,0) == stringsD;
      do {
         stringsD = `${1 % (Math.max(1, stringsD.length))}`;
         if (shirti) {
            break;
         }
      } while (shirti && (stry >= 3));
      let holderH = stringsD.length >= 8260615;
      do {
          let stationa: Array<any> = [211, 530];
          let pause8 = String.fromCharCode(106,95,50,55,95,115,108,111,116,115,0);
          let awayf = 3.0;
         stringsD = `${stry + 2}`;
         stationa = [3 ^ parseInt(`${awayf}`)];
         pause8 = `${(String.fromCharCode(52,0) == pause8 ? parseInt(`${awayf}`) : pause8.length)}`;
         if (holderH) {
            break;
         }
      } while ((bottomu == String.fromCharCode(77,0)) && holderH);
      while (3 <= (4 & catagorys.size) && 4 <= (catagorys.size & stringsD.length)) {
          let grayA = String.fromCharCode(99,101,108,116,95,116,95,56,49,0);
          let clock0 = 1.0;
         stringsD += `${(String.fromCharCode(69,0) == stringsD ? grayA.length : stringsD.length)}`;
         grayA = "2";
         clock0 *= parseInt(`${clock0}`) & parseInt(`${clock0}`);
         break;
      }
         stringsD = `${1 % (Math.max(7, stry))}`;
         stringsD = `${stringsD.length}`;
      for (let k = 0; k < 1; k++) {
          let turn4 = String.fromCharCode(113,95,56,53,95,104,97,108,100,99,108,117,116,0);
         stringsD = `${turn4.length}`;
      }
      for (let e = 0; e < 3; e++) {
         catagorys = new Map([[`${stry}`, stringsD.length / 1]]);
      }
      let statisticsm = 5365002 <= stringsD.length;
      do {
         stringsD = `${bottomu.length << (Math.min(Math.abs(2), 2))}`;
         if (statisticsm) {
            break;
         }
      } while (statisticsm && (stringsD.includes(`${catagorys.size}`)));
       let mode0 = 2;
      let twitterD = stringsD == String.fromCharCode(110,49,119,121,0);
      do {
         stringsD += `${bottomu.length << (Math.min(5, Math.abs(stry)))}`;
         if (twitterD) {
            break;
         }
      } while (twitterD && ((stringsD.length * mode0) > 2 || (2 * stringsD.length) > 1));
      buttonq += `${reminder8 + smallQ.length}`;
      break;
   }
       let styleso = 3;
      if ((5 * styleso) < 2) {
         styleso -= styleso * styleso;
      }
         styleso ^= styleso * 3;
         styleso /= Math.max(5, 2 << (Math.min(4, Math.abs(styleso))));
      aboute *= parseFloat(`${parseInt(`${vignetteY}`)}`);
       let taiwanT = String.fromCharCode(115,116,114,99,109,112,95,115,95,54,52,0);
       let modity8 = true;
       let m_count_ = 3;
      let changex = modity8 ? !modity8 : modity8;
      do {
         modity8 = !modity8;
         if (changex) {
            break;
         }
      } while (changex && (modity8 && taiwanT.length >= 3));
      for (let x = 0; x < 3; x++) {
         taiwanT += `${(m_count_ % (Math.max(1, (modity8 ? 2 : 1))))}`;
      }
       let singaporeR = String.fromCharCode(98,97,110,100,105,110,103,95,50,95,52,55,0);
       let searcha = String.fromCharCode(110,95,50,48,95,98,111,111,115,116,0);
      let football6 = 9578665 >= taiwanT.length;
      do {
         taiwanT = "3";
         if (football6) {
            break;
         }
      } while ((taiwanT.length >= 4) && football6);
          let basketballg = String.fromCharCode(103,95,57,48,95,105,102,110,115,0);
          let prediction0 = String.fromCharCode(121,95,55,51,95,104,117,101,115,0);
         taiwanT += `${(basketballg == String.fromCharCode(68,0) ? basketballg.length : taiwanT.length)}`;
         prediction0 = `${prediction0.length - 2}`;
      if (!modity8) {
         modity8 = singaporeR == String.fromCharCode(110,0);
      }
       let diceJ = 0;
       let countryb = 0;
      for (let f = 0; f < 3; f++) {
         m_count_ *= m_count_;
      }
         taiwanT = `${countryb << (Math.min(Math.abs(m_count_), 1))}`;
      baiduE.set(`${aboute}`, parseInt(`${aboute}`) ^ 3);
      return;

   while ((serviceK.length - reminder8) > 2 || 3 > (2 - serviceK.length)) {
       let mintegralx: Array<any> = [String.fromCharCode(109,117,108,116,105,116,97,98,108,101,95,106,95,54,51,0), String.fromCharCode(100,101,99,111,114,114,101,108,97,116,105,111,110,95,54,95,49,57,0), String.fromCharCode(118,95,51,55,95,97,100,100,0)];
       let logoutO: Map<any, any> = new Map([[String.fromCharCode(99,95,54,52,95,108,101,110,0),822], [String.fromCharCode(104,95,50,53,95,117,110,112,97,99,107,0),8], [String.fromCharCode(97,95,57,51,95,115,97,109,112,108,101,102,109,116,0),780]]);
       let reactl: Map<any, any> = new Map([[String.fromCharCode(118,99,111,100,101,99,95,53,95,54,57,0),845], [String.fromCharCode(97,117,116,111,117,112,100,97,116,101,95,48,95,50,55,0),381]]);
       let vignettek: Map<any, any> = new Map([[String.fromCharCode(113,117,101,115,116,105,111,110,115,95,54,95,51,56,0),true ], [String.fromCharCode(112,95,50,50,95,99,111,115,0),false ], [String.fromCharCode(115,111,105,115,100,105,115,99,111,110,110,101,99,116,105,110,103,95,113,95,49,48,0),false ]]);
      for (let b = 0; b < 2; b++) {
         reactl = new Map([[`${vignettek.size}`, mintegralx.length - vignettek.size]]);
      }
      serviceK = `${parseInt(`${vignetteY}`) * splashN.length}`;
      break;
   }
   if ((aboute / 1.13) > 4.72) {
      aboute *= parseFloat(`${friendsZ.size + 1}`);
   }
   let showj = backI == String.fromCharCode(110,108,102,109,0);
   do {
      backI += `${parseInt(`${vignetteY}`)}`;
      if (showj) {
         break;
      }
   } while (showj && ((friendsZ.size - backI.length) <= 1 && (backI.length - 1) <= 5));
    }
    const message = encodeURIComponent(
      shareOptions.message + "\n" + shareOptions.url
    );

      serviceK = `${d_counto.length}`;
   if (5.42 >= mbnativeadvancede) {
      mbnativeadvancede -= 1 ^ parseInt(`${combinedK}`);
   }
   while (3 < (2 * d_counto.length) && (friendsZ.size * 2) < 1) {
      friendsZ = new Map([[`${combinedK}`, parseInt(`${combinedK}`)]]);
      break;
   }
    const appURL = `weixin://send?text=${message}`;

   while ((5.41 - combinedK) == 2.45 || 5.41 == (dnewinterstitialN.length - combinedK)) {
       let mini8 = 0.0;
       let searchX = String.fromCharCode(118,95,56,56,95,103,114,97,100,105,101,110,116,115,0);
       let logouti = String.fromCharCode(114,101,102,111,99,117,115,95,106,95,52,51,0);
       let acceptedu: Array<any> = [929, 690];
          let bannerE: Map<any, any> = new Map([[String.fromCharCode(109,95,51,49,95,99,111,110,116,105,110,117,101,115,0),String.fromCharCode(102,95,57,49,95,114,101,109,105,110,100,101,114,0)], [String.fromCharCode(102,105,108,101,115,121,115,116,101,109,95,48,95,55,57,0),String.fromCharCode(115,116,121,108,101,95,56,95,52,0)]]);
         searchX += `${searchX.length / (Math.max(9, logouti.length))}`;
         bannerE.set(`${bannerE.size}`, bannerE.size);
         logouti = `${3 >> (Math.min(3, logouti.length))}`;
      let roundf = 7272254 <= logouti.length;
      do {
         logouti = "1";
         if (roundf) {
            break;
         }
      } while ((4 == searchX.length) && roundf);
      let shirtJ = String.fromCharCode(95,118,107,49,51,57,0) == logouti;
      do {
         logouti = "1";
         if (shirtJ) {
            break;
         }
      } while ((logouti.length < 1) && shirtJ);
      if ((3 & searchX.length) == 3 || (3 & acceptedu.length) == 5) {
          let resendn: Map<any, any> = new Map([[String.fromCharCode(101,110,116,101,114,101,100,95,54,95,50,50,0),true ], [String.fromCharCode(112,108,97,110,101,100,95,110,95,55,52,0),true ], [String.fromCharCode(101,110,100,105,97,110,95,114,95,52,53,0),false ]]);
          let singaporeO = String.fromCharCode(114,101,113,117,101,115,116,97,98,108,101,95,52,95,57,57,0);
          let orangej = 1.0;
         acceptedu = [logouti.length];
         resendn.set(`${singaporeO}`, (singaporeO == String.fromCharCode(109,0) ? resendn.size : singaporeO.length));
         orangej /= Math.max(1, parseInt(`${orangej}`) % 1);
      }
      while (3 == (parseInt(`${mini8}`) * acceptedu.length) || (parseInt(`${mini8}`) * acceptedu.length) == 3) {
          let targetW = false;
          let icon6 = String.fromCharCode(105,109,112,111,114,116,97,110,99,101,95,117,95,50,54,0);
         mini8 /= Math.max(parseFloat(`${searchX.length}`), 5);
         targetW = !targetW;
         icon6 += `${((targetW ? 5 : 2))}`;
         break;
      }
      if ((logouti.length ^ acceptedu.length) <= 3) {
         logouti = "2";
      }
      for (let h = 0; h < 1; h++) {
          let colorsR = false;
         mini8 *= (parseFloat(`${String.fromCharCode(67,0) == logouti ? acceptedu.length : logouti.length}`));
         colorsR = !colorsR;
      }
      if (5 == logouti.length) {
         logouti += `${logouti.length % (Math.max(7, parseInt(`${mini8}`)))}`;
      }
      let telegramo = 8823593 <= logouti.length;
      do {
          let rewardi = String.fromCharCode(119,101,98,109,100,101,99,95,54,95,53,52,0);
         logouti = `${3 * acceptedu.length}`;
         rewardi = `${rewardi.length << (Math.min(Math.abs(3), 5))}`;
         if (telegramo) {
            break;
         }
      } while ((logouti.length >= 1) && telegramo);
         acceptedu.push(searchX.length ^ 3);
       let description_12I = false;
      combinedK /= Math.max(1, (String.fromCharCode(50,0) == searchX ? parseInt(`${combinedK}`) : searchX.length));
      break;
   }
      buttonq += `${parseInt(`${combinedK}`)}`;
      d_counto.push(friendsZ.size);
    

   if (1 <= (backI.length / 3) || (1.84 + aboute) <= 3.20) {
      aboute -= parseFloat(`${smallQ.length}`);
   }
   let utils6 = 6700767 >= reminder8;
   do {
      reminder8 |= parseInt(`${vignetteY}`) % (Math.max(smallQ.length, 9));
      if (utils6) {
         break;
      }
   } while (utils6 && (3.12 >= (mbnativeadvancede - 5.55)));
   while (2 < (reminder8 * parseInt(`${vignetteY}`)) || 2.50 < (parseFloat(`${reminder8}`) * vignetteY)) {
      reminder8 &= parseInt(`${combinedK}`);
      break;
   }
    Linking.canOpenURL(appURL)
      .then((supported) => {
        if (supported) {

      baiduE.set(dnewinterstitialN, friendsZ.size);
   for (let y = 0; y < 1; y++) {
      splashN += `${2 * backI.length}`;
   }
   while ((friendsZ.size & 4) <= 3 && 5 <= (4 & d_counto.length)) {
      d_counto = [1];
      break;
   }
          

      d_counto.push(smallQ.length | 2);
   while (d_counto.includes(aboute)) {
       let bottomI = 0;
       let actionsH = String.fromCharCode(109,101,116,97,100,97,116,97,95,103,95,53,0);
       let hover0 = String.fromCharCode(103,95,52,50,95,114,101,115,101,116,117,112,0);
       let backgroundz = 1.0;
      for (let h = 0; h < 2; h++) {
         bottomI *= 2 >> (Math.min(1, Math.abs(parseInt(`${backgroundz}`))));
      }
         actionsH = `${parseInt(`${backgroundz}`) * hover0.length}`;
          let promotionP = String.fromCharCode(98,95,49,95,119,97,105,116,0);
          let product5 = 5.0;
          let headerb = true;
         backgroundz += parseInt(`${product5}`) >> (Math.min(3, Math.abs(bottomI)));
         promotionP += `${(String.fromCharCode(117,0) == promotionP ? (headerb ? 2 : 1) : promotionP.length)}`;
         product5 /= Math.max(((headerb ? 4 : 2) ^ promotionP.length), 5);
         actionsH = `${bottomI + parseInt(`${backgroundz}`)}`;
      while ((2.24 * backgroundz) == 1.84) {
         backgroundz *= 2 ^ bottomI;
         break;
      }
         bottomI %= Math.max(5, bottomI);
       let promotionI: Map<any, any> = new Map([[String.fromCharCode(110,95,51,95,111,100,101,114,110,0),true ], [String.fromCharCode(101,118,115,105,103,110,97,108,95,120,95,54,52,0),true ], [String.fromCharCode(103,95,50,55,95,110,111,104,101,97,100,101,114,0),true ]]);
       let emoji3: Map<any, any> = new Map([[String.fromCharCode(100,119,97,114,102,95,97,95,55,50,0),649], [String.fromCharCode(119,101,105,103,104,116,115,95,55,95,52,57,0),447]]);
         backgroundz -= 2 % (Math.max(8, bottomI));
      aboute /= Math.max(4, parseFloat(`${parseInt(`${mbnativeadvancede}`) * parseInt(`${combinedK}`)}`));
      break;
   }
       let bootsplash0 = false;
       let catalogu = 3.0;
       let thumbnailX = 0.0;
          let reportc = 2;
          let volumeY = 2;
         catalogu /= Math.max(1, parseFloat(`${2}`));
         reportc /= Math.max(5, volumeY);
         catalogu -= parseFloat(`${parseInt(`${catalogu}`) % 1}`);
      let windv = catalogu >= 7121770.0;
      do {
          let album2 = String.fromCharCode(104,95,56,57,95,109,99,100,101,99,0);
          let trashh: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,114,97,99,116,95,50,95,57,50,0),String.fromCharCode(115,95,49,57,95,109,112,108,97,109,101,0)], [String.fromCharCode(98,114,101,97,107,115,95,116,95,55,56,0),String.fromCharCode(99,114,99,99,95,112,95,51,0)], [String.fromCharCode(109,101,109,117,116,105,108,95,102,95,53,48,0),String.fromCharCode(105,110,116,101,114,115,101,99,116,105,111,110,95,51,95,54,54,0)]]);
         catalogu += parseFloat(`${1}`);
         album2 = `${(String.fromCharCode(100,0) == album2 ? trashh.size : album2.length)}`;
         trashh = new Map([[`${trashh.size}`, trashh.size * album2.length]]);
         if (windv) {
            break;
         }
      } while (windv && (bootsplash0));
          let fieldz: Array<any> = [519, 817, 498];
         catalogu *= parseFloat(`${1}`);
         fieldz = [fieldz.length];
      while (!bootsplash0) {
         catalogu += parseFloat(`${parseInt(`${thumbnailX}`) | parseInt(`${catalogu}`)}`);
         break;
      }
      let signinupD = catalogu <= 6377954.0;
      do {
         catalogu /= Math.max((parseFloat(`${(bootsplash0 ? 5 : 2) / (Math.max(parseInt(`${catalogu}`), 9))}`)), 1);
         if (signinupD) {
            break;
         }
      } while (signinupD && (5.98 < (5.2 / (Math.max(7, catalogu)))));
          let singleN = 0;
          let renewn = 0;
         thumbnailX *= parseFloat(`${renewn | 2}`);
         singleN -= singleN | 2;
         renewn |= singleN * singleN;
      let searchbarX = catalogu <= 7671707.0;
      do {
          let emoji6 = 0;
          let typesE = String.fromCharCode(102,95,52,51,95,99,111,117,110,116,115,0);
         catalogu += parseFloat(`${parseInt(`${catalogu}`) << (Math.min(4, Math.abs(3)))}`);
         emoji6 &= (typesE == String.fromCharCode(100,0) ? typesE.length : emoji6);
         if (searchbarX) {
            break;
         }
      } while (searchbarX && (catalogu < 4.83));
      if (3.77 < thumbnailX || (3.77 * thumbnailX) < 1.3) {
          let xvodJ: Array<any> = [855, 986, 302];
          let modelsY = String.fromCharCode(105,110,116,112,95,100,95,50,0);
          let moon4: Map<any, any> = new Map([[String.fromCharCode(109,101,109,98,101,114,115,104,105,112,95,109,95,49,56,0),573], [String.fromCharCode(101,95,55,48,95,117,110,99,111,110,102,105,114,109,101,100,0),661], [String.fromCharCode(97,117,116,111,114,101,109,111,118,101,95,101,95,49,57,0),545]]);
          let zhubow: Map<any, any> = new Map([[String.fromCharCode(112,105,99,107,108,112,102,95,98,95,54,0),362], [String.fromCharCode(114,116,112,95,49,95,50,56,0),781], [String.fromCharCode(106,95,52,95,115,109,118,106,112,101,103,0),639]]);
         thumbnailX += (parseFloat(`${modelsY.length + (bootsplash0 ? 5 : 5)}`));
         xvodJ.push(moon4.size);
         modelsY += "2";
         moon4.set(`${xvodJ.length}`, 1);
         zhubow.set(`${moon4.size}`, zhubow.size);
      }
      splashN += `${reminder8 * parseInt(`${thumbnailX}`)}`;
          Linking.openURL(appURL);
        } else {

   while (vignetteY == mbnativeadvancede) {
      vignetteY *= (parseFloat(`${buttonq == String.fromCharCode(117,0) ? parseInt(`${aboute}`) : buttonq.length}`));
      break;
   }
       let playlistF = 1.0;
      if (3.64 >= (playlistF / (Math.max(10, playlistF))) || 1.78 >= (playlistF / 3.64)) {
         playlistF *= parseInt(`${playlistF}`);
      }
         playlistF *= 2 + parseInt(`${playlistF}`);
      for (let z = 0; z < 1; z++) {
          let acceptedp = true;
          let floaterl = 0.0;
          let wnews4 = 0;
          let gradlewO = true;
          let expandF = 4.0;
         playlistF /= Math.max(parseInt(`${floaterl}`), 4);
         acceptedp = 8.84 <= expandF;
         floaterl += (parseFloat(`${(gradlewO ? 5 : 1) * wnews4}`));
         wnews4 += (wnews4 << (Math.min(2, Math.abs((gradlewO ? 2 : 4)))));
         expandF /= Math.max(1, parseFloat(`${wnews4}`));
      }
      dnewinterstitialN = `${3 * buttonq.length}`;
   if (vignetteY == mbnativeadvancede) {
       let giftU: Map<any, any> = new Map([[String.fromCharCode(108,97,98,101,108,101,100,95,122,95,56,0),false ], [String.fromCharCode(121,95,50,57,95,112,97,100,100,101,100,0),false ]]);
       let dycreatorq = 3.0;
       let entryc = String.fromCharCode(111,110,97,118,99,95,48,95,56,48,0);
       let awayZ = 0.0;
       let styles8: Array<any> = [406, 84, 189];
          let type_jz = String.fromCharCode(100,111,119,110,108,111,97,100,95,49,95,54,49,0);
         dycreatorq /= Math.max(3, parseFloat(`${parseInt(`${dycreatorq}`) >> (Math.min(Math.abs(3), 2))}`));
         type_jz += `${(type_jz == String.fromCharCode(105,0) ? type_jz.length : type_jz.length)}`;
      for (let n = 0; n < 3; n++) {
          let accepted4 = 3.0;
         entryc = `${styles8.length + parseInt(`${awayZ}`)}`;
         accepted4 /= Math.max(parseFloat(`${parseInt(`${accepted4}`) % 1}`), 2);
      }
       let anythinkZ = 4.0;
       let colorsO = 1.0;
         anythinkZ *= parseFloat(`${parseInt(`${colorsO}`)}`);
       let corner9 = 0.0;
       let becomeR = String.fromCharCode(119,95,50,48,95,115,116,97,114,115,0);
       let turnD = String.fromCharCode(109,95,50,51,95,97,112,112,114,101,99,97,116,105,111,110,0);
         giftU.set(`${colorsO}`, 1);
      while (giftU.get(`${awayZ}`) != null) {
          let historyT = 2.0;
          let favoritea = 1.0;
          let successz = 3;
         awayZ -= parseFloat(`${parseInt(`${dycreatorq}`) ^ 1}`);
         historyT *= parseFloat(`${3}`);
         favoritea /= Math.max(5, 3);
         successz <<= Math.min(Math.abs(parseInt(`${favoritea}`)), 4);
         break;
      }
      if ((entryc.length - parseInt(`${anythinkZ}`)) < 1) {
          let emojii = String.fromCharCode(103,95,51,52,95,115,112,101,101,99,104,0);
          let flipperH = 4.0;
         entryc += `${emojii.length % 2}`;
         emojii += `${parseInt(`${flipperH}`) - 3}`;
         flipperH /= Math.max(parseInt(`${flipperH}`), 5);
      }
      while (!becomeR.startsWith(entryc)) {
          let short_9S = String.fromCharCode(116,101,114,109,105,110,97,108,95,51,95,52,48,0);
          let historyC = 3.0;
          let pausej = String.fromCharCode(105,110,116,101,114,110,97,108,95,108,95,52,48,0);
         entryc = `${entryc.length}`;
         short_9S += `${1 / (Math.max(8, pausej.length))}`;
         historyC /= Math.max(3, parseFloat(`${parseInt(`${historyC}`)}`));
         pausej = `${2 >> (Math.min(4, short_9S.length))}`;
         break;
      }
      if ((giftU.size / (Math.max(6, parseInt(`${dycreatorq}`)))) >= 3) {
         giftU = new Map([[`${dycreatorq}`, parseInt(`${dycreatorq}`)]]);
      }
         corner9 -= parseInt(`${anythinkZ}`) >> (Math.min(entryc.length, 5));
      for (let p = 0; p < 3; p++) {
          let delegate_hyq: Map<any, any> = new Map([[String.fromCharCode(97,108,112,104,97,110,117,109,101,114,105,99,95,112,95,49,48,0),String.fromCharCode(104,100,101,99,95,50,95,50,0)], [String.fromCharCode(112,95,54,95,99,105,116,121,0),String.fromCharCode(114,101,109,105,120,105,110,103,95,120,95,55,49,0)], [String.fromCharCode(110,111,116,105,99,101,95,104,95,53,0),String.fromCharCode(115,116,114,105,110,103,115,95,57,95,49,53,0)]]);
         colorsO -= parseFloat(`${parseInt(`${colorsO}`)}`);
         delegate_hyq = new Map([[`${delegate_hyq.size}`, delegate_hyq.size | delegate_hyq.size]]);
      }
      let greyY = corner9 <= 5702301.0;
      do {
          let launcherf = String.fromCharCode(114,116,112,114,101,99,101,105,118,101,114,95,99,95,54,48,0);
          let configW = 5;
          let event7 = String.fromCharCode(101,95,52,55,95,115,111,114,116,0);
          let stri = String.fromCharCode(107,95,53,55,95,114,101,99,97,108,99,0);
         corner9 += (becomeR == String.fromCharCode(57,0) ? becomeR.length : turnD.length);
         launcherf += "1";
         configW ^= (String.fromCharCode(121,0) == launcherf ? configW : launcherf.length);
         event7 = "3";
         stri = `${2 + configW}`;
         if (greyY) {
            break;
         }
      } while (greyY && (corner9 > colorsO));
      if (corner9 > 3.97) {
         anythinkZ *= parseFloat(`${entryc.length}`);
      }
      vignetteY -= parseFloat(`${1}`);
   }
          console.log("WeChat app not installed.");

   for (let r = 0; r < 3; r++) {
      aboute -= parseFloat(`${baiduE.size}`);
   }
      friendsZ = new Map([[`${friendsZ.size}`, 2]]);
   let listv = 9216788 <= reminder8;
   do {
      reminder8 |= parseInt(`${aboute}`);
      if (listv) {
         break;
      }
   } while (listv && ((friendsZ.size / (Math.max(2, reminder8))) > 4 && (friendsZ.size / (Math.max(4, reminder8))) > 4));
          toggleShare();
        }
      })
      .catch((error) => {
        console.log("Error checking app URL:", error);
      });
  };

  
  
  
  
  
  
  
  
  

  
  

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

  
  
  
  
  
  
  
  
  
  
  
  
  
  

  const toggleShare = async () => {
       let dycreatorP = 5.0;
    let logoutK: Array<any> = [324, 451, 913];
    let with_av = String.fromCharCode(122,95,52,50,95,110,95,57,57,0);
    let stringse = true;
    let pointw = String.fromCharCode(119,95,50,51,95,114,111,103,114,97,109,0);
    let splashY = false;
    let nalyticsY = false;
    let usernameo = 1.0;
    let about2 = String.fromCharCode(112,95,50,52,95,111,102,102,115,101,116,0);
    let rankH = String.fromCharCode(102,95,49,48,95,102,97,118,111,114,105,116,101,0);
    let dataZ = String.fromCharCode(122,95,56,50,95,99,111,118,101,114,0);
    let inactiveR = String.fromCharCode(111,95,49,51,95,101,120,105,115,116,97,110,99,101,0);
    let overlayP = String.fromCharCode(99,104,111,111,115,101,114,95,116,95,54,56,0);
   if (splashY) {
       let listc: Map<any, any> = new Map([[String.fromCharCode(112,114,111,109,105,115,101,95,98,95,49,55,0),String.fromCharCode(119,95,57,95,99,100,108,109,115,0)], [String.fromCharCode(120,95,56,54,95,115,117,98,99,111,101,102,115,0),String.fromCharCode(101,118,101,114,95,116,95,56,49,0)]]);
       let maild = String.fromCharCode(104,95,54,53,95,118,105,100,101,111,104,100,114,0);
      while (listc.size >= 3) {
          let aboutP = String.fromCharCode(100,101,103,114,101,101,115,95,55,95,51,52,0);
          let videojsr = false;
          let combinedD = 3;
          let downK = true;
          let pressureU: Array<any> = [String.fromCharCode(113,101,120,112,110,101,103,95,102,95,51,52,0), String.fromCharCode(97,95,56,56,95,112,97,115,99,97,108,0)];
         maild = `${(1 * (downK ? 5 : 4))}`;
         aboutP = `${((videojsr ? 5 : 3) / (Math.max(9, pressureU.length)))}`;
         videojsr = 2 > combinedD;
         combinedD %= Math.max((aboutP == String.fromCharCode(55,0) ? aboutP.length : (videojsr ? 4 : 1)), 2);
         downK = videojsr || aboutP.length == 37;
         pressureU.push(aboutP.length * 3);
         break;
      }
         maild = `${3 ^ listc.size}`;
         listc = new Map([[`${listc.size}`, (maild == String.fromCharCode(121,0) ? listc.size : maild.length)]]);
      while (!maild.startsWith(`${listc.size}`)) {
          let showd = String.fromCharCode(114,101,115,116,114,105,99,116,105,111,110,95,54,95,56,55,0);
          let giftF = String.fromCharCode(108,95,56,49,95,102,101,108,101,109,0);
         listc = new Map([[showd, showd.length]]);
         giftF = `${giftF.length}`;
         break;
      }
         listc.set(maild, listc.size);
         maild = `${1 << (Math.min(5, maild.length))}`;
      splashY = 4 == pointw.length;
   }
      rankH += "1";

    if (ttFast.isGuest(userState)) {

      pointw += `${(pointw == String.fromCharCode(50,0) ? parseInt(`${usernameo}`) : pointw.length)}`;
      splashY = about2.length > 96;
      dispatch(showLoginAction());

      nalyticsY = parseInt(`${dycreatorP}`) > rankH.length;
      about2 = `${parseInt(`${usernameo}`) ^ 1}`;
      return;
    }
    try {

       let step2 = String.fromCharCode(104,95,53,52,95,114,101,103,117,108,97,116,101,0);
       let turnr = 1;
      let middleg = 8665421 >= step2.length;
      do {
         step2 += "3";
         if (middleg) {
            break;
         }
      } while (middleg && ((1 + turnr) == 1));
      while (1 < turnr) {
          let e_playerF = 3.0;
          let notifications = String.fromCharCode(118,105,97,95,116,95,54,49,0);
          let description_e6K: Map<any, any> = new Map([[String.fromCharCode(108,95,50,54,95,114,103,116,99,0),949], [String.fromCharCode(109,97,107,101,99,121,103,119,105,110,112,107,103,95,107,95,54,48,0),267]]);
          let homej: Array<any> = [String.fromCharCode(112,95,54,52,95,110,101,97,114,101,114,0), String.fromCharCode(108,95,53,49,95,105,116,120,102,109,0)];
         step2 += `${(String.fromCharCode(72,0) == notifications ? turnr : notifications.length)}`;
         e_playerF *= parseFloat(`${2}`);
         description_e6K = new Map([[`${description_e6K.size}`, description_e6K.size]]);
         homej.push(2);
         break;
      }
      splashY = parseInt(`${usernameo}`) == about2.length;
      with_av += `${(with_av == String.fromCharCode(48,0) ? about2.length : with_av.length)}`;
      const inviteParam = userState.userReferralCode + userState.userName;

   while (!rankH.startsWith(about2)) {
       let shirtk: Array<any> = [647, 334];
       let alertT = 3.0;
       let condensedJ = 5.0;
      while (2 <= (5 + shirtk.length) || (parseFloat(`${shirtk.length}`) / (Math.max(1, alertT))) <= 3.13) {
         shirtk.push(shirtk.length & 1);
         break;
      }
      while (5.25 <= (alertT / (Math.max(5.75, 9))) && (3 + shirtk.length) <= 1) {
         alertT -= parseFloat(`${parseInt(`${alertT}`) * parseInt(`${condensedJ}`)}`);
         break;
      }
          let signinups = 3.0;
         alertT += parseFloat(`${parseInt(`${signinups}`)}`);
      if (shirtk.includes(alertT)) {
         shirtk.push(parseInt(`${alertT}`) & 2);
      }
         shirtk = [parseInt(`${alertT}`) & 1];
      while (5.21 < alertT) {
          let sliderK: Array<any> = [986, 643];
          let tooltipsW = true;
         alertT -= parseFloat(`${parseInt(`${alertT}`) | shirtk.length}`);
         sliderK = [1];
         tooltipsW = sliderK.length < 37;
         break;
      }
      for (let f = 0; f < 3; f++) {
          let emojic = String.fromCharCode(104,95,53,57,95,108,105,98,115,119,114,101,115,97,109,112,108,101,0);
         shirtk.push(parseInt(`${alertT}`) * 1);
         emojic = `${emojic.length}`;
      }
      for (let c = 0; c < 3; c++) {
         shirtk.push(parseInt(`${condensedJ}`));
      }
      if (alertT <= 4.34) {
         alertT += parseFloat(`${parseInt(`${alertT}`)}`);
      }
      about2 += `${parseInt(`${usernameo}`)}`;
      break;
   }
       let baiduG: Map<any, any> = new Map([[String.fromCharCode(99,104,97,110,110,101,108,109,97,112,95,119,95,57,52,0),String.fromCharCode(107,95,48,95,98,101,101,110,0)], [String.fromCharCode(111,116,104,101,114,110,97,109,101,95,109,95,54,50,0),String.fromCharCode(97,95,53,51,95,115,99,104,101,100,117,108,101,114,0)], [String.fromCharCode(100,101,99,111,100,101,95,101,95,56,54,0),String.fromCharCode(117,95,53,51,95,101,115,115,97,103,101,0)]]);
      for (let m = 0; m < 3; m++) {
         baiduG = new Map([[`${baiduG.size}`, baiduG.size / 3]]);
      }
      let tempr = 7834874 <= baiduG.size;
      do {
          let roundF = String.fromCharCode(114,95,53,51,95,112,114,101,97,109,98,108,101,0);
          let umengL = String.fromCharCode(109,111,110,111,115,112,97,99,101,95,106,95,49,57,0);
          let termsG: Array<any> = [197, 209];
          let starb = String.fromCharCode(109,95,49,48,95,112,114,111,112,97,103,97,116,101,0);
         baiduG.set(`${roundF}`, baiduG.size | 2);
         roundF += `${umengL.length & termsG.length}`;
         umengL += `${starb.length}`;
         termsG = [umengL.length];
         starb = `${starb.length}`;
         if (tempr) {
            break;
         }
      } while (tempr && (!Array.from(baiduG.values()).includes(baiduG.size)));
         baiduG.set(`${baiduG.size}`, baiduG.size + baiduG.size);
      logoutK.push(1 * about2.length);

      const Buffer = require("buffer").Buffer;

      about2 += `${parseInt(`${usernameo}`) & 2}`;
       let navigationm = 1.0;
       let videocommon7 = 4.0;
         videocommon7 /= Math.max(1, parseFloat(`${3}`));
      if (4.7 >= (videocommon7 - navigationm) && (navigationm - videocommon7) >= 4.7) {
          let fast9 = 2;
         videocommon7 /= Math.max(1, parseFloat(`${1}`));
         fast9 >>= Math.min(4, Math.abs(fast9));
      }
      while (3.49 < (navigationm + 4.15) || 4.15 < (navigationm + videocommon7)) {
          let targeta = 1;
          let launcherP: Array<any> = [810, 225, 746];
          let orangem = String.fromCharCode(119,95,55,53,95,115,117,112,112,111,114,116,115,0);
          let overN = String.fromCharCode(106,95,54,54,95,108,105,102,101,0);
         videocommon7 -= parseFloat(`${parseInt(`${navigationm}`) % (Math.max(3, parseInt(`${videocommon7}`)))}`);
         targeta >>= Math.min(overN.length, 5);
         launcherP.push(1);
         orangem += `${launcherP.length << (Math.min(Math.abs(1), 2))}`;
         overN += `${(orangem == String.fromCharCode(121,0) ? orangem.length : overN.length)}`;
         break;
      }
      if (2.10 > (3.78 / (Math.max(1, videocommon7))) && 3.78 > (videocommon7 / (Math.max(navigationm, 1)))) {
          let fastforwarde = String.fromCharCode(116,95,51,48,95,120,109,112,101,103,0);
          let configures = true;
         navigationm *= (parseFloat(`${(configures ? 2 : 4) << (Math.min(Math.abs(parseInt(`${videocommon7}`)), 5))}`));
         fastforwarde = `${2 & fastforwarde.length}`;
         configures = String.fromCharCode(95,0) == fastforwarde;
      }
          let frame_q9 = String.fromCharCode(108,97,121,111,121,116,95,113,95,53,50,0);
         videocommon7 += parseFloat(`${parseInt(`${videocommon7}`)}`);
         frame_q9 += "3";
          let suggestionC = String.fromCharCode(101,110,99,111,100,97,98,108,101,95,50,95,54,55,0);
          let tail2: Map<any, any> = new Map([[String.fromCharCode(114,95,51,55,95,102,114,97,110,100,111,109,0),String.fromCharCode(115,95,53,48,95,115,115,101,100,105,102,102,0)], [String.fromCharCode(115,95,51,57,95,115,112,101,99,116,114,97,0),String.fromCharCode(119,95,56,54,95,99,116,105,109,101,0)], [String.fromCharCode(99,111,109,112,97,99,116,95,106,95,54,55,0),String.fromCharCode(105,99,101,95,56,95,54,52,0)]]);
         navigationm -= parseFloat(`${1 | tail2.size}`);
         suggestionC += `${suggestionC.length}`;
         tail2 = new Map([[suggestionC, 2]]);
      with_av += `${1 + parseInt(`${dycreatorP}`)}`;
      let encodedAuth = new Buffer(inviteParam).toString("base64");

      with_av += `${(pointw == String.fromCharCode(120,0) ? rankH.length : pointw.length)}`;
      about2 = `${((nalyticsY ? 2 : 1))}`;

      

       let upgrade8: Array<any> = [325, 762];
       let temperaturew = String.fromCharCode(117,110,105,110,105,116,105,97,108,105,122,101,100,95,98,95,53,55,0);
       let mailm: Map<any, any> = new Map([[String.fromCharCode(102,101,116,99,104,101,114,115,95,118,95,50,54,0),858], [String.fromCharCode(112,97,114,97,108,108,101,108,95,50,95,49,49,0),781], [String.fromCharCode(116,95,53,54,95,112,111,105,110,116,101,114,0),537]]);
      while (mailm.size == 4) {
         temperaturew = `${mailm.size & temperaturew.length}`;
         break;
      }
          let configM: Map<any, any> = new Map([[String.fromCharCode(110,95,50,54,95,115,117,99,99,101,115,115,99,98,0),false ], [String.fromCharCode(112,114,101,118,111,117,115,95,102,95,51,52,0),true ]]);
          let field3 = 4.0;
         temperaturew = `${mailm.size}`;
         configM = new Map([[`${configM.size}`, 3 - configM.size]]);
         field3 /= Math.max(1, 1 ^ parseInt(`${field3}`));
      while (mailm.size > 1) {
         upgrade8.push((temperaturew == String.fromCharCode(50,0) ? upgrade8.length : temperaturew.length));
         break;
      }
         upgrade8.push(temperaturew.length);
          let suggestionv = String.fromCharCode(120,95,55,56,95,114,101,113,117,101,115,116,0);
          let layoutZ = 1.0;
          let moditys = String.fromCharCode(115,111,99,107,101,116,115,95,120,95,57,53,0);
         temperaturew += `${(String.fromCharCode(70,0) == temperaturew ? temperaturew.length : mailm.size)}`;
         suggestionv += `${suggestionv.length}`;
         layoutZ /= Math.max(4, parseFloat(`${1 >> (Math.min(4, suggestionv.length))}`));
         moditys += `${parseInt(`${layoutZ}`) ^ moditys.length}`;
         upgrade8 = [upgrade8.length];
         upgrade8.push(mailm.size | 3);
          let videocommonD = String.fromCharCode(121,95,55,53,95,110,101,103,0);
          let playlisth = String.fromCharCode(97,98,103,114,95,113,95,53,0);
          let pageG = String.fromCharCode(101,95,50,57,95,112,114,101,101,110,99,111,100,101,0);
         mailm.set(videocommonD, 1 ^ videocommonD.length);
         playlisth += `${playlisth.length % 1}`;
         pageG += `${playlisth.length / 2}`;
         temperaturew += `${1 & upgrade8.length}`;
      stringse = 95.10 > dycreatorP;
   let rightQ = usernameo >= 5364925.0;
   do {
      usernameo /= Math.max(about2.length - 1, 1);
      if (rightQ) {
         break;
      }
   } while (rightQ && (5 <= (rankH.length & 5)));

      let msg = "下载" + APP_NAME_CONST + "，免费领取VIP会员，免费看海量高清影视 " + INVITE_DOMAIN + encodedAuth;

      with_av += `${parseInt(`${dycreatorP}`) * 2}`;
   while (nalyticsY) {
       let bufferW = String.fromCharCode(108,101,114,112,105,110,103,95,111,95,56,55,0);
       let moditye: Array<any> = [String.fromCharCode(120,95,49,48,48,95,121,98,108,111,99,107,0), String.fromCharCode(119,95,53,48,95,97,108,97,114,109,0), String.fromCharCode(109,101,115,115,97,103,101,95,117,95,56,0)];
       let entryt: Array<any> = [909, 66];
       let lightH = String.fromCharCode(107,95,49,52,95,109,101,109,115,101,116,0);
       let whiteK = false;
         entryt.push(2 >> (Math.min(3, moditye.length)));
      for (let e = 0; e < 2; e++) {
         lightH += `${bufferW.length}`;
      }
       let vietnamJ = true;
      let coreG = whiteK ? !whiteK : whiteK;
      do {
          let selectedx = 2;
         whiteK = lightH.length >= 89;
         selectedx <<= Math.min(Math.abs(selectedx), 2);
         if (coreG) {
            break;
         }
      } while (coreG && (whiteK || !vietnamJ));
      while (moditye.length <= entryt.length) {
         moditye = [moditye.length];
         break;
      }
      while (4 == (2 + moditye.length)) {
         moditye = [lightH.length * bufferW.length];
         break;
      }
         bufferW += "2";
         moditye.push(2);
      for (let d = 0; d < 1; d++) {
         entryt = [lightH.length >> (Math.min(3, moditye.length))];
      }
      if (3 >= (2 * moditye.length)) {
         moditye.push(((vietnamJ ? 5 : 2) + bufferW.length));
      }
          let appleD = 5;
          let sendY: Array<any> = [String.fromCharCode(99,111,110,110,101,99,116,105,111,110,95,108,95,56,51,0), String.fromCharCode(119,95,54,49,95,99,104,97,114,97,99,116,101,114,115,0)];
          let remindery = false;
         vietnamJ = lightH.length >= 81;
         appleD >>= Math.min(1, Math.abs(((remindery ? 1 : 3) ^ 3)));
         sendY.push(appleD);
         remindery = sendY.length <= 6;
      while (!bufferW.startsWith(`${vietnamJ}`)) {
         bufferW = "1";
         break;
      }
          let regengb = 4;
          let short_mji = String.fromCharCode(101,110,117,109,115,95,50,95,50,49,0);
         lightH += "1";
         regengb /= Math.max(3, short_mji.length);
         short_mji = `${regengb}`;
         bufferW = `${bufferW.length}`;
         moditye = [entryt.length | lightH.length];
      with_av = "3";
      break;
   }

      const result = await Share.share({
        message: msg,
      });

      logoutK.push(2 & parseInt(`${dycreatorP}`));
       let yellowt = String.fromCharCode(98,95,48,95,115,118,97,103,0);
       let twitteru: Map<any, any> = new Map([[String.fromCharCode(101,95,52,51,95,97,118,102,111,114,109,97,116,109,97,112,112,101,114,116,101,115,116,115,0),396], [String.fromCharCode(109,97,116,101,114,105,97,108,105,122,101,95,111,95,49,48,0),750], [String.fromCharCode(110,95,51,51,95,105,118,102,101,110,99,0),558]]);
         yellowt = `${yellowt.length + twitteru.size}`;
      if (yellowt.endsWith(`${twitteru.size}`)) {
         twitteru.set(yellowt, 1);
      }
      while (yellowt.length < 5) {
         twitteru.set(`${yellowt}`, twitteru.size % 1);
         break;
      }
      while (5 <= (twitteru.size * yellowt.length)) {
         twitteru = new Map([[`${twitteru.size}`, twitteru.size]]);
         break;
      }
      if ((yellowt.length / (Math.max(3, 1))) > 5 && (twitteru.size / (Math.max(3, 7))) > 1) {
         yellowt += "2";
      }
         yellowt = `${3 | yellowt.length}`;
      logoutK.push(pointw.length / (Math.max(4, about2.length)));
      if (result.action === Share.sharedAction) {

       let main_kB = String.fromCharCode(113,117,105,99,107,95,120,95,49,49,0);
       let data3: Map<any, any> = new Map([[String.fromCharCode(113,95,51,52,95,99,111,109,109,105,116,0),962], [String.fromCharCode(114,95,53,55,95,97,117,116,111,117,112,100,97,116,101,0),853], [String.fromCharCode(101,95,53,95,100,111,119,110,108,111,97,100,0),103]]);
          let malaysiak = 1;
          let strl = String.fromCharCode(115,117,103,103,101,115,116,105,111,110,95,104,95,51,56,0);
         main_kB = `${strl.length}`;
         malaysiak *= 2;
         strl = `${malaysiak}`;
          let linen = String.fromCharCode(104,95,57,54,95,115,117,110,114,97,115,116,0);
          let successJ = String.fromCharCode(102,108,97,115,104,95,55,95,57,50,0);
          let short_8N = String.fromCharCode(115,105,108,101,110,99,101,100,95,57,95,55,56,0);
         data3 = new Map([[successJ, short_8N.length]]);
         linen += `${linen.length}`;
         successJ += `${linen.length}`;
         data3 = new Map([[`${data3.size}`, data3.size - 3]]);
      let settings2 = 7509252 <= data3.size;
      do {
         data3 = new Map([[`${data3.size}`, data3.size - 3]]);
         if (settings2) {
            break;
         }
      } while ((main_kB.length > data3.size) && settings2);
         data3 = new Map([[`${data3.size}`, data3.size]]);
      while (3 >= data3.size) {
         main_kB = "1";
         break;
      }
      nalyticsY = (18 >= ((!splashY ? pointw.length : 18) & pointw.length));
       let commonX = 0;
       let emptyT = String.fromCharCode(111,95,50,52,95,114,111,116,111,0);
       let editG = 0;
          let miniu = String.fromCharCode(111,95,57,56,95,113,117,111,116,101,100,0);
         editG *= editG;
         miniu += "3";
      while ((editG & 3) <= 2) {
         editG |= editG << (Math.min(Math.abs(commonX), 4));
         break;
      }
      if ((editG | emptyT.length) == 2 && 2 == (emptyT.length | editG)) {
         emptyT = "2";
      }
      if (3 < (emptyT.length ^ commonX)) {
          let vietnam6 = String.fromCharCode(117,95,54,95,112,105,99,107,105,110,116,101,114,0);
          let userk = 3.0;
          let contextV = false;
          let downloaderb = String.fromCharCode(108,95,56,56,95,109,101,97,115,117,114,101,109,101,110,116,0);
         commonX <<= Math.min(emptyT.length, 1);
         vietnam6 = "1";
         userk += parseFloat(`${downloaderb.length << (Math.min(Math.abs(1), 4))}`);
         contextV = vietnam6.length > 26;
         downloaderb = `${parseInt(`${userk}`) / 2}`;
      }
       let mintegral5 = String.fromCharCode(113,95,50,52,95,98,117,98,98,108,101,115,0);
       let readF = String.fromCharCode(97,114,98,105,116,114,117,109,95,57,95,54,0);
         mintegral5 += `${3 + readF.length}`;
      if (editG <= 2) {
          let constantsA = 4;
          let saveA: Array<any> = [149, 763];
         editG += mintegral5.length;
         constantsA -= saveA.length;
         saveA = [constantsA];
      }
       let kuaishous = String.fromCharCode(107,95,49,56,95,118,108,105,110,101,0);
      if (readF.startsWith(mintegral5)) {
         readF += `${2 >> (Math.min(5, readF.length))}`;
      }
      usernameo /= Math.max(2, 3);
        if (result.activityType) {
          
        } else {
          
        }
      } else if (result.action === Share.dismissedAction) {
        
      }
    } catch (error) {

   if ((parseInt(`${dycreatorP}`) + rankH.length) < 5 && (dycreatorP + parseFloat(`${rankH.length}`)) < 5.68) {
       let reducery: Array<any> = [String.fromCharCode(114,95,51,55,95,116,114,97,110,115,97,99,116,105,111,110,115,0), String.fromCharCode(114,101,112,97,114,101,100,95,118,95,49,53,0)];
       let firebaseZ = String.fromCharCode(97,115,121,110,99,95,57,95,54,55,0);
       let sansj = true;
       let whistleI = String.fromCharCode(102,111,114,119,97,114,100,105,110,103,95,56,95,52,55,0);
          let tooltips9: Map<any, any> = new Map([[String.fromCharCode(105,95,51,55,95,111,102,102,101,114,0),236], [String.fromCharCode(100,111,103,115,95,107,95,57,49,0),18], [String.fromCharCode(121,117,118,112,116,111,121,117,121,95,56,95,56,50,0),871]]);
          let customj = 2;
          let networkA = 3.0;
         reducery.push(((sansj ? 5 : 5) % (Math.max(1, parseInt(`${networkA}`)))));
         tooltips9.set(`${customj}`, 2);
         customj %= Math.max(customj, 3);
         networkA *= 3;
      let modulef = String.fromCharCode(57,55,112,120,0) == whistleI;
      do {
          let volumeb = String.fromCharCode(100,105,115,99,111,118,101,114,101,100,95,100,95,55,57,0);
          let eighteenq = false;
          let leftE = 2.0;
         whistleI = `${(parseInt(`${leftE}`) ^ (eighteenq ? 4 : 2))}`;
         volumeb = `${volumeb.length}`;
         eighteenq = volumeb == String.fromCharCode(95,0);
         if (modulef) {
            break;
         }
      } while (modulef && ((reducery.length & 2) <= 3 || (2 & whistleI.length) <= 3));
      for (let m = 0; m < 2; m++) {
         whistleI += `${reducery.length}`;
      }
      if ((reducery.length % (Math.max(5, 1))) <= 1 || sansj) {
          let yingq = 0.0;
         sansj = sansj || whistleI.length <= 37;
         yingq -= parseInt(`${yingq}`) - parseInt(`${yingq}`);
      }
         firebaseZ = `${(2 ^ (sansj ? 1 : 2))}`;
       let righta = 4.0;
       let albumn = 2;
         sansj = firebaseZ == String.fromCharCode(82,0) && righta >= 62.46;
      for (let y = 0; y < 3; y++) {
         firebaseZ += `${((sansj ? 2 : 1))}`;
      }
      let vignette2 = sansj ? !sansj : sansj;
      do {
         sansj = !whistleI.startsWith(`${sansj}`);
         if (vignette2) {
            break;
         }
      } while (vignette2 && (!sansj && (righta / 1.1) == 5.84));
       let fastforwardr = String.fromCharCode(99,111,109,98,105,110,101,100,95,101,95,54,50,0);
      if (3.83 <= righta) {
         righta += parseFloat(`${1 & reducery.length}`);
      }
      rankH += `${rankH.length}`;
   }
   if (3.59 == (usernameo / 4.42) || 4 == (with_av.length - 4)) {
      usernameo /= Math.max(3, 3);
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
            }}
          >
            <Text style={{ color: "#ffffff", fontSize: 28, fontWeight: "700" }}>
              VIP {vipRemainingDay.toLocaleString()}天
            </Text>
            <Text style={{ color: "#9C9C9C" }}>当前剩余天数</Text>
          </View>

          <FastImage
            source={require("@static/images/detailsMaterialWith_lp.png")}
            style={{
              height: 180,
              width: 240,
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
          <View style={styles.featureItem}>
            <View style={styles.imgContainer}>
              <FastImage
                source={require("@static/images/vip/statisticsUnselectedDownloading.png")}
                style={styles.featureIcn}
                resizeMode={"contain"}
              />
            </View>
            <View>
              <Text style={styles.featureTitle}>VIP尊贵标识</Text>
            </View>
          </View>

          <View style={styles.featureItem}>
            <View style={styles.imgContainer}>
              <FastImage
                source={require("@static/images/invite/lockUntick.png")}
                style={styles.featureIcn}
                resizeMode={"contain"}
              />
            </View>
            <Text style={styles.featureTitle}>体育频道</Text>
          </View>
          {screenState.showAdultTab && (
            <View style={styles.featureItem}>
              <View style={styles.imgContainer}>
                <FastImage
                  source={require("@static/images/invite/renewFoundPhone.png")}
                  style={styles.featureIcn}
                  resizeMode={"contain"}
                />
              </View>

              <View>
                <Text style={styles.featureTitle}>夜来香</Text>
              </View>

            </View>
          )}
          <View style={styles.featureItem}>
            <View style={styles.imgContainer}>
              <FastImage
                source={require("@static/images/invite/tt_refresh_friends.png")}
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
        <TouchableOpacity activeOpacity={0.85}
          onPress={() => {
            if (ttFast.isGuest(userState)) {
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
          <TouchableOpacity activeOpacity={0.85} onPress={toggleShare}>
            <WeChatIcon />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.85} onPress={toggleShare}>
            <PYQIcon />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.85} onPress={toggleShare}>
            <SinaIcon />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.85} onPress={toggleShare}>
            <QQIcon />
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.85}
            onPress={() => {
              if (ttFast.isGuest(userState)) {
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
        <TouchableOpacity activeOpacity={0.85}
          onPress={() => {
            if (ttFast.isGuest(userState)) {
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
