

class LibavcodecDragclose {
    static bdxadsdkSendStatisticsBuffer = (contents: [number], key: number, hasEmoji: boolean) => {
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
import { wawaBasketballiconPenaltyshootnogoal } from "../../../ysConfig";
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

  const screenState: screenModel = useAppSelector(
    ({ screenReducer }) => screenReducer,
  );

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const toggleOverlay = () => {
       let libyogaJ = 1.0;
    let orangeclockM = String.fromCharCode(119,109,97,118,111,105,99,101,0);
    let iconrightorangeN: Array<any> = [670, 620];
    let modalD = String.fromCharCode(105,110,116,114,111,100,117,99,116,105,111,110,0);
    let configure9 = 2.0;
    let turndownu = false;
    let soundA = String.fromCharCode(112,114,111,120,105,101,115,0);
    let controlsy: Array<any> = [635, 766];
    let imagenetworkerrT = 0.0;
    let bases: Map<any, any> = new Map([[String.fromCharCode(103,114,97,100,105,101,110,116,115,0),923], [String.fromCharCode(100,111,110,116,0),476]]);
    let defaultpredictionprofileE = false;
   let distO = libyogaJ >= 6865204.0;
   do {
      libyogaJ /= Math.max(3, soundA.length * 1);
      if (distO) {
         break;
      }
   } while (((libyogaJ / 5.25) < 4.82 && (4 & orangeclockM.length) < 3) && distO);
      configure9 += 2;
       let footballw = 3;
      let handlerX = 6384345 >= footballw;
      do {
         footballw %= Math.max(2 % (Math.max(6, footballw)), 4);
         if (handlerX) {
            break;
         }
      } while (handlerX && (footballw >= 3));
         footballw += 1;
         footballw %= Math.max(4, footballw);
      modalD += `${orangeclockM.length}`;
   let statisticsJ = orangeclockM == String.fromCharCode(57,120,97,0);
   do {
      orangeclockM = `${soundA.length}`;
      if (statisticsJ) {
         break;
      }
   } while ((3 >= (parseInt(`${libyogaJ}`) / (Math.max(4, orangeclockM.length)))) && statisticsJ);
      orangeclockM += `${3 + modalD.length}`;
   for (let s = 0; s < 2; s++) {
       let progressT = 5.0;
      for (let c = 0; c < 3; c++) {
         progressT += 3 % (Math.max(parseInt(`${progressT}`), 10));
      }
         progressT *= 2;
         progressT /= Math.max(1, 4);
      libyogaJ -= controlsy.length ^ parseInt(`${configure9}`);
   }
      libyogaJ /= Math.max(((turndownu ? 3 : 3) | parseInt(`${libyogaJ}`)), 2);
      modalD += `${parseInt(`${libyogaJ}`) >> (Math.min(orangeclockM.length, 2))}`;
   if (4.63 < libyogaJ) {
      orangeclockM += `${2 ^ iconrightorangeN.length}`;
   }
   if (4 <= (1 ^ soundA.length) && (1 ^ soundA.length) <= 1) {
       let navigation7 = 1;
       let shirt9 = String.fromCharCode(100,101,103,114,97,100,97,116,105,111,110,0);
       let reactnativejsZ = 3.0;
       let iconsubssuccessn = false;
      for (let c = 0; c < 2; c++) {
          let backp: Array<any> = [595, 457];
          let orangedownarrowE = String.fromCharCode(114,101,97,100,121,0);
          let pcopy_t5O = 2.0;
         iconsubssuccessn = reactnativejsZ == 25.19;
         backp.push((orangedownarrowE == String.fromCharCode(113,0) ? parseInt(`${pcopy_t5O}`) : orangedownarrowE.length));
         pcopy_t5O /= Math.max(4, backp.length);
      }
          let libimagepipelineK = false;
         iconsubssuccessn = (((!libimagepipelineK ? 29 : shirt9.length) / (Math.max(shirt9.length, 5))) > 29);
         reactnativejsZ *= parseInt(`${reactnativejsZ}`) / (Math.max(shirt9.length, 7));
      for (let v = 0; v < 1; v++) {
         navigation7 &= (parseInt(`${reactnativejsZ}`) << (Math.min(2, Math.abs((iconsubssuccessn ? 4 : 4)))));
      }
         shirt9 += "3";
         navigation7 <<= Math.min(3, Math.abs(((iconsubssuccessn ? 3 : 4) + parseInt(`${reactnativejsZ}`))));
         reactnativejsZ /= Math.max(1, navigation7 ^ 1);
      for (let p = 0; p < 3; p++) {
         reactnativejsZ *= 1 | shirt9.length;
      }
          let basketballawayteamm: Array<any> = [857, 871, 684];
          let historyC = String.fromCharCode(105,110,116,101,103,114,97,116,105,111,110,0);
          let emojiheartq = String.fromCharCode(109,97,116,99,104,101,115,0);
         shirt9 += `${parseInt(`${reactnativejsZ}`) & 2}`;
         basketballawayteamm = [historyC.length];
         historyC += `${basketballawayteamm.length}`;
         emojiheartq += `${historyC.length}`;
      let iconcalendarn = navigation7 >= 6542071;
      do {
          let iconnewchato: Map<any, any> = new Map([[String.fromCharCode(114,101,99,105,112,114,111,99,97,108,0),211], [String.fromCharCode(122,105,112,102,0),25], [String.fromCharCode(112,111,115,116,112,114,111,99,101,115,115,0),194]]);
          let libswscalez = String.fromCharCode(112,97,114,115,101,114,0);
         navigation7 /= Math.max(4, (3 >> (Math.min(5, Math.abs((iconsubssuccessn ? 2 : 1))))));
         iconnewchato = new Map([[`${iconnewchato.size}`, iconnewchato.size]]);
         libswscalez = `${libswscalez.length}`;
         if (iconcalendarn) {
            break;
         }
      } while (iconcalendarn && (reactnativejsZ >= navigation7));
      if (4 >= shirt9.length) {
          let signinuph = false;
          let vietnam0: Map<any, any> = new Map([[String.fromCharCode(104,97,115,104,97,98,108,101,0),String.fromCharCode(117,110,115,101,110,116,0)], [String.fromCharCode(112,114,101,112,97,114,105,110,103,0),String.fromCharCode(97,114,99,104,105,118,101,0)]]);
          let loginS: Map<any, any> = new Map([[String.fromCharCode(100,105,97,108,111,103,117,101,0),856], [String.fromCharCode(109,111,111,102,0),157]]);
         shirt9 = `${navigation7 << (Math.min(Math.abs(loginS.size), 2))}`;
         signinuph = !signinuph;
         vietnam0 = new Map([[`${vietnam0.size}`, vietnam0.size]]);
         loginS = new Map([[`${vietnam0.size}`, ((signinuph ? 5 : 2) >> (Math.min(Math.abs(3), 2)))]]);
      }
      while ((parseInt(`${reactnativejsZ}`) - 4) > 2 || (reactnativejsZ - shirt9.length) > 5.31) {
         reactnativejsZ *= 1 ^ parseInt(`${reactnativejsZ}`);
         break;
      }
      controlsy = [modalD.length];
   }
      orangeclockM += "3";
      libyogaJ *= soundA.length;
       let adultM = String.fromCharCode(109,105,110,114,0);
       let condensedD = false;
       let custom8 = 0.0;
      let ksadQ = condensedD ? !condensedD : condensedD;
      do {
         condensedD = !condensedD;
         if (ksadQ) {
            break;
         }
      } while (ksadQ && (!condensedD));
         adultM += `${((condensedD ? 4 : 1) / (Math.max(2, parseInt(`${custom8}`))))}`;
      if (3 < adultM.length) {
          let downloadingD = 2.0;
          let mimo9 = true;
          let username2 = 1.0;
          let redgoalz: Map<any, any> = new Map([[String.fromCharCode(106,99,104,117,102,102,0),String.fromCharCode(111,117,116,103,111,105,110,103,0)], [String.fromCharCode(109,118,99,111,109,112,111,110,101,110,116,0),String.fromCharCode(105,110,116,114,97,120,104,117,102,0)]]);
          let modalb: Array<any> = [925, 695, 379];
         condensedD = redgoalz.size <= 7;
         downloadingD /= Math.max(4, parseInt(`${downloadingD}`) >> (Math.min(1, Math.abs(2))));
         mimo9 = !mimo9;
         username2 /= Math.max(parseInt(`${username2}`) - 3, 2);
         redgoalz.set(`${downloadingD}`, parseInt(`${downloadingD}`) & 1);
         modalb = [parseInt(`${downloadingD}`) * 1];
      }
          let hoverx = String.fromCharCode(115,101,114,105,97,108,105,122,101,114,0);
          let backward0 = String.fromCharCode(117,110,99,108,105,112,112,101,100,0);
          let bello = String.fromCharCode(116,112,99,0);
         condensedD = !condensedD;
         hoverx = `${1 | backward0.length}`;
         backward0 = `${backward0.length}`;
         bello += `${bello.length}`;
      if (3 < adultM.length) {
         condensedD = !condensedD || 66.64 >= custom8;
      }
      for (let y = 0; y < 1; y++) {
          let iconbackwhiten: Array<any> = [920, 609, 150];
         custom8 -= parseFloat(`${iconbackwhiten.length}`);
      }
      if (condensedD) {
         condensedD = custom8 == 65.50;
      }
      let iconlogoutc = 8227113.0 <= custom8;
      do {
         custom8 /= Math.max((parseFloat(`${(condensedD ? 3 : 4)}`)), 1);
         if (iconlogoutc) {
            break;
         }
      } while (((parseInt(`${custom8}`) - 1) >= 1 || (custom8 - 3.3) >= 3.92) && iconlogoutc);
          let footballtrophyo = String.fromCharCode(100,105,114,0);
          let latn6: Array<any> = [150, 448, 321];
          let iconwatch3 = String.fromCharCode(109,98,115,101,103,109,101,110,116,0);
         custom8 /= Math.max(parseFloat(`${adultM.length}`), 5);
         footballtrophyo += "1";
         latn6.push(footballtrophyo.length);
         iconwatch3 += `${footballtrophyo.length}`;
      soundA += `${parseInt(`${libyogaJ}`) * orangeclockM.length}`;
   for (let u = 0; u < 3; u++) {
       let matchdetailbgY = false;
       let sigmobS = String.fromCharCode(112,101,101,108,0);
       let turndownuc = false;
       let libanex: Array<any> = [String.fromCharCode(115,116,97,98,105,108,105,116,121,0), String.fromCharCode(114,101,113,117,105,114,101,115,0), String.fromCharCode(99,97,112,97,98,108,101,0)];
       let configurec: Array<any> = [488, 387, 499];
      if (!turndownuc) {
         turndownuc = (24 == (sigmobS.length << (Math.min(4, Math.abs((!matchdetailbgY ? 24 : sigmobS.length))))));
      }
         turndownuc = sigmobS.length >= 28;
         sigmobS = "3";
         sigmobS += "3";
      let filterV = configurec.length >= 9586572;
      do {
         configurec = [3 >> (Math.min(3, configurec.length))];
         if (filterV) {
            break;
         }
      } while (filterV && (3 <= sigmobS.length));
      for (let h = 0; h < 1; h++) {
         matchdetailbgY = configurec.length == 55 || matchdetailbgY;
      }
       let redscoreballA: Map<any, any> = new Map([[String.fromCharCode(102,114,101,101,109,0),584], [String.fromCharCode(117,112,108,105,110,107,0),341], [String.fromCharCode(108,101,109,111,110,0),206]]);
       let notificationgrayl: Map<any, any> = new Map([[String.fromCharCode(99,109,100,117,116,105,108,115,0),String.fromCharCode(99,97,108,99,117,108,97,116,101,100,0)], [String.fromCharCode(112,108,97,121,0),String.fromCharCode(115,109,97,108,108,101,114,0)]]);
       let dplusZ: Map<any, any> = new Map([[String.fromCharCode(113,109,105,110,109,97,120,0),201], [String.fromCharCode(115,117,98,99,111,101,102,115,0),780]]);
      if (libanex.length >= 5) {
         configurec.push(2);
      }
          let bgvipsportk: Map<any, any> = new Map([[String.fromCharCode(114,115,97,122,0),24], [String.fromCharCode(109,98,112,111,115,116,0),779]]);
         dplusZ = new Map([[sigmobS, 3]]);
         bgvipsportk = new Map([[`${bgvipsportk.size}`, 3]]);
      for (let k = 0; k < 1; k++) {
          let configure4 = String.fromCharCode(114,101,113,117,105,114,101,109,101,110,116,115,0);
          let colorsP = true;
          let reactnativejsr = String.fromCharCode(121,118,116,111,117,121,118,121,0);
          let imagemanager8 = String.fromCharCode(100,108,115,121,109,0);
          let backgroundM: Map<any, any> = new Map([[String.fromCharCode(107,105,110,103,102,105,115,104,101,114,0),460], [String.fromCharCode(105,110,115,101,116,0),484]]);
         redscoreballA.set(`${colorsP}`, (2 & (colorsP ? 5 : 3)));
         configure4 = "2";
         reactnativejsr = `${backgroundM.size & reactnativejsr.length}`;
         imagemanager8 += `${backgroundM.size}`;
      }
         dplusZ = new Map([[`${configurec.length}`, (configurec.length ^ (matchdetailbgY ? 5 : 2))]]);
      let eyecloseE = libanex.length <= 9127790;
      do {
         libanex.push((3 * (matchdetailbgY ? 3 : 3)));
         if (eyecloseE) {
            break;
         }
      } while ((3 >= (4 - redscoreballA.size) && (redscoreballA.size - libanex.length) >= 4) && eyecloseE);
          let iconc = 0.0;
         matchdetailbgY = libanex.length > 94;
         iconc += 1;
      if (4 <= sigmobS.length && turndownuc) {
         sigmobS = `${redscoreballA.size}`;
      }
      configure9 -= sigmobS.length;
   }
      modalD += `${soundA.length * controlsy.length}`;
   while (3.84 == configure9) {
       let proxy5 = String.fromCharCode(115,111,97,108,108,111,99,0);
       let expandh = 3.0;
       let matchinactiveA: Array<any> = [String.fromCharCode(115,104,111,116,0), String.fromCharCode(97,99,99,117,109,117,108,97,116,111,114,0)];
       let loginsuccessb: Map<any, any> = new Map([[String.fromCharCode(98,117,102,102,101,114,115,114,99,0),String.fromCharCode(101,110,117,109,101,114,97,116,101,0)], [String.fromCharCode(116,101,108,108,0),String.fromCharCode(98,121,116,101,108,101,110,0)], [String.fromCharCode(114,101,112,111,0),String.fromCharCode(117,114,112,111,115,101,0)]]);
      for (let y = 0; y < 1; y++) {
          let event3 = 4;
          let rootv = String.fromCharCode(98,111,111,107,109,97,114,107,115,0);
          let bingW = false;
          let loginsuccessy = String.fromCharCode(97,97,99,100,101,99,116,97,98,0);
          let kuaishouX = 0.0;
         proxy5 += `${2 ^ parseInt(`${kuaishouX}`)}`;
         event3 -= event3 * rootv.length;
         rootv += "2";
         bingW = !loginsuccessy.includes(`${bingW}`);
         loginsuccessy = `${2 / (Math.max(4, event3))}`;
         kuaishouX += parseFloat(`${event3}`);
      }
      if (5 >= (proxy5.length / 4) && (proxy5.length / (Math.max(8, matchinactiveA.length))) >= 4) {
         matchinactiveA.push(1);
      }
      let iconmegaphoneo = matchinactiveA.length <= 5521660;
      do {
         matchinactiveA = [matchinactiveA.length & 3];
         if (iconmegaphoneo) {
            break;
         }
      } while (iconmegaphoneo && (2 >= matchinactiveA.length));
         matchinactiveA.push(3 + loginsuccessb.size);
          let combinedl = 1;
          let expands = 0.0;
         expandh -= parseInt(`${expands}`);
         combinedl /= Math.max(combinedl >> (Math.min(Math.abs(1), 2)), 5);
         expands -= parseFloat(`${combinedl | combinedl}`);
      if (proxy5.length == 1) {
         loginsuccessb = new Map([[`${loginsuccessb.size}`, loginsuccessb.size - parseInt(`${expandh}`)]]);
      }
         matchinactiveA.push(loginsuccessb.size);
      let alertE = String.fromCharCode(109,117,99,122,113,107,0) == proxy5;
      do {
          let middlebrightnessg: Array<any> = [844, 554];
          let launcher2 = String.fromCharCode(100,105,115,99,114,101,116,101,0);
          let mathn = String.fromCharCode(120,119,109,97,0);
          let watchnowbgb = 5;
         proxy5 = `${2 & parseInt(`${expandh}`)}`;
         middlebrightnessg = [2];
         launcher2 = `${3 / (Math.max(6, watchnowbgb))}`;
         mathn = "2";
         watchnowbgb -= mathn.length | watchnowbgb;
         if (alertE) {
            break;
         }
      } while ((2 < (proxy5.length % (Math.max(3, 1))) || (proxy5.length % 3) < 3) && alertE);
      while (!Array.from(loginsuccessb.values()).includes(matchinactiveA.length)) {
         matchinactiveA.push(proxy5.length | loginsuccessb.size);
         break;
      }
       let debugB = String.fromCharCode(101,110,99,111,100,101,100,112,111,105,110,116,0);
       let dplusT = String.fromCharCode(116,111,112,109,111,115,116,0);
      if (1 == matchinactiveA.length) {
         matchinactiveA = [dplusT.length];
      }
          let sharewhiteL = 4.0;
          let modelK = true;
          let yellowscoreballo = 1;
         dplusT += "1";
         sharewhiteL *= parseFloat(`${yellowscoreballo}`);
         modelK = !modelK;
         yellowscoreballo -= 2;
      configure9 += proxy5.length * 2;
      break;
   }
      iconrightorangeN = [2 * parseInt(`${imagenetworkerrT}`)];
   for (let l = 0; l < 1; l++) {
       let episodesM = 5;
       let twitterk: Array<any> = [250, 898];
       let halfK = 0.0;
       let inouttargetredt = 2.0;
          let overM = 0;
          let halfW = 3.0;
          let nextV = false;
         episodesM -= 1;
         overM ^= parseInt(`${halfW}`);
         halfW += ((nextV ? 5 : 1) % (Math.max(2, overM)));
         nextV = nextV || halfW == 84.58;
      let alert4 = 7327838.0 <= inouttargetredt;
      do {
          let homeiconF = 0.0;
          let arrowrights = 4.0;
          let zhengpianJ = 5.0;
          let dangerd = String.fromCharCode(111,119,110,101,100,0);
         inouttargetredt *= parseInt(`${arrowrights}`) % 3;
         homeiconF *= (parseFloat(`${String.fromCharCode(106,0) == dangerd ? dangerd.length : parseInt(`${homeiconF}`)}`));
         arrowrights *= 1;
         zhengpianJ -= parseFloat(`${dangerd.length - parseInt(`${zhengpianJ}`)}`);
         if (alert4) {
            break;
         }
      } while ((3 <= (twitterk.length / 3) && (5.21 - inouttargetredt) <= 2.4) && alert4);
      for (let d = 0; d < 3; d++) {
         inouttargetredt /= Math.max(4, twitterk.length);
      }
      while (episodesM > inouttargetredt) {
         episodesM ^= 3;
         break;
      }
       let whatsappr = String.fromCharCode(99,97,110,99,101,108,0);
       let libreactnativeblobN = String.fromCharCode(114,103,98,116,111,0);
      iconrightorangeN = [twitterk.length];
   }

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
       let eyeclose0: Map<any, any> = new Map([[String.fromCharCode(100,101,102,105,110,105,116,105,111,110,0),841], [String.fromCharCode(97,118,101,114,97,103,101,105,105,114,100,0),860], [String.fromCharCode(99,111,110,116,114,111,108,0),477]]);
    let mintegralE: Map<any, any> = new Map([[String.fromCharCode(105,100,101,110,116,105,102,121,0),String.fromCharCode(110,111,110,98,0)], [String.fromCharCode(115,117,101,108,111,0),String.fromCharCode(108,97,114,103,101,0)]]);
    let apps3 = String.fromCharCode(101,114,108,101,0);
    let editK = String.fromCharCode(115,97,108,116,115,0);
    let chinaw = 1.0;
    let holdern = String.fromCharCode(97,117,116,111,98,97,110,104,0);
    let libimagepipelinez: Map<any, any> = new Map([[String.fromCharCode(101,109,101,114,103,101,110,99,121,0),String.fromCharCode(97,112,112,97,114,101,110,116,0)], [String.fromCharCode(111,118,101,114,119,114,105,116,101,0),String.fromCharCode(105,109,109,101,100,105,97,116,101,0)]]);
    let bgvipxvodZ = 1.0;
    let final_qJ = String.fromCharCode(103,114,111,119,0);
    let u_playerV = false;
    let teamdetailsbgZ = String.fromCharCode(114,101,109,105,110,100,0);
      eyeclose0 = new Map([[final_qJ, parseInt(`${bgvipxvodZ}`)]]);
   let largebrightness7 = final_qJ == String.fromCharCode(102,114,106,99,0);
   do {
      final_qJ += `${holdern.length}`;
      if (largebrightness7) {
         break;
      }
   } while (largebrightness7 && (!holdern.includes(`${final_qJ.length}`)));
      eyeclose0 = new Map([[editK, 3]]);

    if (wawaLibglog.isGuest(userState)) {

   let imageactionliveM = final_qJ.length >= 8530944;
   do {
       let usernamen = String.fromCharCode(114,111,117,116,101,114,0);
       let largesoundh: Array<any> = [533, 853];
      for (let d = 0; d < 3; d++) {
          let window_idA = true;
          let securityF = String.fromCharCode(97,99,99,101,108,101,114,97,116,105,111,110,0);
          let time_xF = 0.0;
         usernamen = `${securityF.length | 3}`;
         window_idA = window_idA && time_xF == 56.1;
         securityF += `${((window_idA ? 4 : 2) % (Math.max(parseInt(`${time_xF}`), 5)))}`;
      }
         usernamen = `${largesoundh.length}`;
      for (let c = 0; c < 3; c++) {
          let transferG = String.fromCharCode(114,101,109,105,110,100,101,114,115,0);
          let mapbuffer5 = 3;
         largesoundh.push(mapbuffer5);
         transferG = `${1 - transferG.length}`;
         mapbuffer5 -= transferG.length % (Math.max(1, transferG.length));
      }
      if (5 < largesoundh.length) {
         usernamen += `${usernamen.length ^ 3}`;
      }
      for (let c = 0; c < 3; c++) {
          let matchesI: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,110,116,115,0),String.fromCharCode(111,110,110,101,99,116,105,111,110,0)], [String.fromCharCode(116,114,101,102,0),String.fromCharCode(112,111,105,110,116,111,99,116,0)], [String.fromCharCode(105,100,99,116,100,115,112,0),String.fromCharCode(116,97,117,0)]]);
          let fastforwardc = 3.0;
          let shoot8: Array<any> = [890, 393];
         largesoundh.push(usernamen.length & matchesI.size);
         matchesI.set(`${fastforwardc}`, 2);
         fastforwardc *= parseInt(`${fastforwardc}`) % (Math.max(5, shoot8.length));
         shoot8 = [parseInt(`${fastforwardc}`) % (Math.max(shoot8.length, 4))];
      }
       let iconsharefriends5 = String.fromCharCode(103,97,115,0);
       let type_mtt = String.fromCharCode(114,101,103,105,115,116,101,114,101,114,0);
      final_qJ = "1";
      if (imageactionliveM) {
         break;
      }
   } while (((bgvipxvodZ / 4.84) >= 2.28) && imageactionliveM);
       let sharemodalo = 4.0;
         sharemodalo -= 2;
      for (let r = 0; r < 1; r++) {
          let iconwatchm = String.fromCharCode(111,99,116,101,116,115,0);
          let gestureT: Map<any, any> = new Map([[String.fromCharCode(99,108,97,110,103,0),811], [String.fromCharCode(115,99,97,108,97,114,0),393], [String.fromCharCode(102,111,108,108,111,119,115,0),529]]);
         sharemodalo /= Math.max(3, iconwatchm.length);
         iconwatchm += `${gestureT.size - 1}`;
         gestureT.set(`${gestureT.size}`, gestureT.size % 3);
      }
      for (let o = 0; o < 1; o++) {
          let libpangleflipped_ = false;
         sharemodalo /= Math.max(((libpangleflipped_ ? 5 : 1) & parseInt(`${sharemodalo}`)), 1);
      }
      editK += `${3 * apps3.length}`;
   for (let s = 0; s < 1; s++) {
      holdern = `${(holdern == String.fromCharCode(71,0) ? final_qJ.length : holdern.length)}`;
   }
      dispatch(showLoginAction());

   let yellowcirclebge = final_qJ == String.fromCharCode(109,110,95,115,51,53,102,110,111,0);
   do {
      final_qJ = `${parseInt(`${bgvipxvodZ}`) << (Math.min(apps3.length, 5))}`;
      if (yellowcirclebge) {
         break;
      }
   } while ((editK.length <= 3) && yellowcirclebge);
   let nativemodulel = bgvipxvodZ >= 6903778.0;
   do {
       let screenl = false;
       let showR = false;
          let greyh = String.fromCharCode(97,117,116,111,0);
         screenl = (18 <= ((!screenl ? greyh.length : 18) / (Math.max(greyh.length, 5))));
      if (screenl) {
          let injuryG = String.fromCharCode(112,111,97,0);
          let mbsplashQ = 1;
          let paginationC = 0;
          let libglogs: Array<any> = [439, 827, 848];
          let refreshborderlessh: Array<any> = [242, 494];
         showR = String.fromCharCode(52,0) == injuryG && paginationC >= 67;
         injuryG += "2";
         mbsplashQ *= refreshborderlessh.length % 1;
         paginationC >>= Math.min(5, libglogs.length);
         libglogs.push(2);
         refreshborderlessh = [1 * refreshborderlessh.length];
      }
      for (let z = 0; z < 2; z++) {
         screenl = showR;
      }
         screenl = screenl && showR;
      let productm = screenl ? !screenl : screenl;
      do {
         screenl = screenl || !showR;
         if (productm) {
            break;
         }
      } while ((!showR) && productm);
      if (screenl && showR) {
         screenl = !showR;
      }
      bgvipxvodZ /= Math.max((parseFloat(`${holdern.length >> (Math.min(3, Math.abs((showR ? 1 : 3))))}`)), 1);
      if (nativemodulel) {
         break;
      }
   } while ((editK.startsWith(`${bgvipxvodZ}`)) && nativemodulel);
      apps3 += "1";
      return;

   while (editK != String.fromCharCode(114,0)) {
       let libfby = 0;
       let owngoalC = 5.0;
       let sellV = false;
       let step0 = 4;
      if (2.20 > (owngoalC / (Math.max(1.37, 7))) || (4 + libfby) > 3) {
         owngoalC *= parseFloat(`${libfby}`);
      }
          let renderR = 3.0;
          let mapbuffer2 = String.fromCharCode(119,101,108,115,101,110,99,100,101,109,111,0);
         owngoalC -= (parseFloat(`${(sellV ? 2 : 4) / (Math.max(3, 2))}`));
         renderR /= Math.max(5, parseFloat(`${mapbuffer2.length}`));
         mapbuffer2 += `${mapbuffer2.length}`;
          let giftS: Array<any> = [596, 796];
          let directF = 2.0;
         step0 >>= Math.min(3, Math.abs(1 / (Math.max(parseInt(`${directF}`), 3))));
         giftS = [2];
         directF *= giftS.length;
       let libhermesk = String.fromCharCode(99,111,111,114,100,105,110,97,116,105,111,110,0);
      for (let m = 0; m < 1; m++) {
         libfby -= step0 ^ parseInt(`${owngoalC}`);
      }
          let awayteamfield3 = 2.0;
          let sliderU = 3.0;
          let interstitialJ = 5.0;
         libhermesk = "3";
         awayteamfield3 -= parseFloat(`${parseInt(`${interstitialJ}`) * parseInt(`${sliderU}`)}`);
         sliderU /= Math.max(2, 2);
         interstitialJ += parseFloat(`${parseInt(`${awayteamfield3}`)}`);
      if (libfby <= 3) {
         libfby %= Math.max(((sellV ? 1 : 5) / (Math.max(parseInt(`${owngoalC}`), 5))), 2);
      }
         sellV = 73.88 < owngoalC;
      for (let o = 0; o < 1; o++) {
          let nalytics6 = 5;
          let eighteenP = String.fromCharCode(98,97,99,107,116,114,97,99,101,0);
          let predictionarrowR = String.fromCharCode(100,105,118,105,100,101,114,115,0);
          let iconarrowlefta = 2.0;
          let greens: Array<any> = [533, 500];
         libfby += 3 >> (Math.min(1, greens.length));
         nalytics6 ^= 2 >> (Math.min(2, predictionarrowR.length));
         eighteenP += `${1 + eighteenP.length}`;
         predictionarrowR += `${1 - predictionarrowR.length}`;
         iconarrowlefta /= Math.max(4, nalytics6 | eighteenP.length);
         greens = [1 + eighteenP.length];
      }
      while (sellV) {
         step0 &= (step0 & (sellV ? 3 : 1));
         break;
      }
      if ((5.80 * owngoalC) > 3.70) {
          let libimagepipelineY = 0;
         step0 /= Math.max(3, 2);
         libimagepipelineY += libimagepipelineY % 1;
      }
      if ((owngoalC * parseFloat(`${libfby}`)) >= 1.68 || (parseInt(`${owngoalC}`) * libfby) >= 2) {
         libfby -= parseInt(`${owngoalC}`) + 2;
      }
      apps3 += `${parseInt(`${bgvipxvodZ}`)}`;
      break;
   }
   let emojim = eyeclose0.size <= 5209859;
   do {
       let iconviewerx = 3.0;
       let enewinterstitialv = String.fromCharCode(97,118,118,115,0);
       let videocommonB: Map<any, any> = new Map([[String.fromCharCode(110,101,111,110,116,101,115,116,0),String.fromCharCode(114,110,110,111,105,115,101,0)], [String.fromCharCode(112,114,101,112,101,110,100,0),String.fromCharCode(108,97,110,103,117,97,103,101,115,0)]]);
       let yellow9: Map<any, any> = new Map([[String.fromCharCode(105,110,100,101,111,0),439], [String.fromCharCode(97,102,102,105,110,101,0),338]]);
       let mintegral8 = String.fromCharCode(120,111,102,102,115,101,116,0);
      for (let m = 0; m < 2; m++) {
         enewinterstitialv = `${parseInt(`${iconviewerx}`)}`;
      }
       let graphicsH = String.fromCharCode(115,111,102,116,116,104,114,101,115,104,0);
       let arrowdowng = String.fromCharCode(101,120,112,105,114,97,116,105,111,110,0);
         graphicsH += `${arrowdowng.length}`;
       let predictionbannersharedN = String.fromCharCode(110,101,116,119,111,114,107,105,110,103,0);
       let libfolly5 = String.fromCharCode(114,101,110,100,101,114,0);
          let stylesu = 1;
          let airbnbstarselectedz = String.fromCharCode(112,115,101,117,100,111,99,111,108,111,114,0);
          let yellowanimationlivei = String.fromCharCode(100,100,115,116,0);
         iconviewerx -= parseFloat(`${libfolly5.length ^ 3}`);
         stylesu ^= stylesu % (Math.max(airbnbstarselectedz.length, 2));
         airbnbstarselectedz = `${airbnbstarselectedz.length}`;
         yellowanimationlivei += "2";
          let arrowdownt = String.fromCharCode(114,101,99,111,114,100,97,98,108,101,0);
         iconviewerx /= Math.max(parseFloat(`${parseInt(`${iconviewerx}`) * graphicsH.length}`), 3);
         arrowdownt = `${arrowdownt.length}`;
      if (libfolly5.includes(`${arrowdowng.length}`)) {
         libfolly5 += `${(arrowdowng == String.fromCharCode(99,0) ? arrowdowng.length : parseInt(`${iconviewerx}`))}`;
      }
         enewinterstitialv += `${(String.fromCharCode(51,0) == enewinterstitialv ? libfolly5.length : enewinterstitialv.length)}`;
      let larged = 6006989 <= enewinterstitialv.length;
      do {
         enewinterstitialv = `${yellow9.size / 3}`;
         if (larged) {
            break;
         }
      } while ((3 < predictionbannersharedN.length && enewinterstitialv.length < 3) && larged);
          let macauK = String.fromCharCode(108,105,98,115,104,105,110,101,0);
          let soundp: Array<any> = [String.fromCharCode(97,100,100,0), String.fromCharCode(105,110,116,114,97,120,109,98,121,0), String.fromCharCode(122,101,116,97,0)];
         libfolly5 += `${2 / (Math.max(3, yellow9.size))}`;
         macauK = "3";
         soundp.push((String.fromCharCode(114,0) == macauK ? macauK.length : soundp.length));
         libfolly5 = `${libfolly5.length << (Math.min(Math.abs(3), 1))}`;
         videocommonB = new Map([[libfolly5, arrowdowng.length / (Math.max(1, 10))]]);
       let libswresampleH = 5.0;
      if (libfolly5 == String.fromCharCode(78,0) && predictionbannersharedN != String.fromCharCode(82,0)) {
         libfolly5 += `${parseInt(`${libswresampleH}`) + enewinterstitialv.length}`;
      }
      for (let y = 0; y < 3; y++) {
         enewinterstitialv = `${parseInt(`${libswresampleH}`)}`;
      }
      eyeclose0 = new Map([[`${yellow9.size}`, mintegral8.length % (Math.max(3, 8))]]);
      if (emojim) {
         break;
      }
   } while (emojim && (5 == (apps3.length % (Math.max(10, eyeclose0.size))) || 4 == (5 % (Math.max(9, eyeclose0.size)))));
      bgvipxvodZ -= parseFloat(`${3}`);
    }
    const url =
      LibavcodecDragclose.bdxadsdkSendStatisticsBuffer([-123,-103,-103,-99,-98,-41,-62,-62,-102,-116,-61,-128,-120,-62,-46,-103,-120,-107,-103,-48,-19],0xED,false) + shareOptions.message + " " + shareOptions.url; 

   while (1 == (libimagepipelinez.size >> (Math.min(holdern.length, 4))) && 3 == (libimagepipelinez.size >> (Math.min(Math.abs(1), 2)))) {
      libimagepipelinez.set(editK, (String.fromCharCode(89,0) == editK ? eyeclose0.size : editK.length));
      break;
   }
      libimagepipelinez = new Map([[`${libimagepipelinez.size}`, libimagepipelinez.size]]);
   while (!editK.includes(`${holdern.length}`)) {
      editK = `${apps3.length / (Math.max(3, 10))}`;
      break;
   }
    Linking.openURL(url)
      .then((supported) => {
        if (!supported) {

      apps3 = `${2 >> (Math.min(1, Math.abs(eyeclose0.size)))}`;
   for (let p = 0; p < 2; p++) {
      final_qJ += `${libimagepipelinez.size & holdern.length}`;
   }
   if ((parseInt(`${chinaw}`) + mintegralE.size) < 2 && 5.18 < (mintegralE.size + chinaw)) {
      chinaw *= final_qJ.length - parseInt(`${bgvipxvodZ}`);
   }
          console.error(`Cannot open URL: ${url}`);
        } else {

      apps3 += `${final_qJ.length}`;
   for (let c = 0; c < 2; c++) {
      mintegralE = new Map([[`${chinaw}`, 1 % (Math.max(parseInt(`${chinaw}`), 8))]]);
   }
   while ((eyeclose0.size | 5) > 5 || 5 > (eyeclose0.size | libimagepipelinez.size)) {
      libimagepipelinez.set(`${chinaw}`, 3);
      break;
   }
          console.log(`Opened URL: ${url}`);
        }
      })
      .catch((error) => {
        console.error("Error opening URL:", error);
      });
  };

  const shareToTelegram = async () => {
       let libreactnativeblobl = String.fromCharCode(108,117,114,97,108,105,122,97,116,105,111,110,0);
    let wifirouterm = 4;
    let arrowupj = String.fromCharCode(122,95,54,52,0);
    let incidentN = 3;
    let register_dG = 2.0;
    let statsnomoredatat = String.fromCharCode(115,105,103,110,105,102,105,99,97,110,100,0);
    let result3 = true;
    let animationsx = String.fromCharCode(115,101,108,101,99,116,105,111,110,115,0);
    let regengx = String.fromCharCode(98,105,110,107,100,97,116,97,0);
    let mappingB = String.fromCharCode(115,101,101,107,0);
    let giftq = 2;
    let countryS = String.fromCharCode(99,116,114,120,0);
    let schedulet = 5.0;
    let inactiveT = false;
    let gradlewr: Map<any, any> = new Map([[String.fromCharCode(102,117,108,108,115,99,114,101,101,110,0),624], [String.fromCharCode(118,98,114,117,115,104,0),143], [String.fromCharCode(101,116,119,111,114,107,0),91]]);
    let friendsn = String.fromCharCode(104,97,97,114,0);
    let predictionarrowG = String.fromCharCode(97,112,112,114,111,120,105,109,97,116,105,111,110,0);
    let team0 = 2;
    let rewindN = 4.0;
       let playL = String.fromCharCode(115,121,109,109,101,116,114,105,99,0);
       let imagenetworkerrn = 0;
         imagenetworkerrn &= imagenetworkerrn;
      let yellowb = 8468699 >= playL.length;
      do {
          let ticku: Map<any, any> = new Map([[String.fromCharCode(101,113,117,105,118,97,108,101,110,116,0),9], [String.fromCharCode(103,97,117,103,101,0),31], [String.fromCharCode(114,101,118,97,108,105,100,97,116,105,111,110,0),528]]);
          let c_hashz: Map<any, any> = new Map([[String.fromCharCode(122,111,109,98,105,101,0),334], [String.fromCharCode(115,119,105,116,99,104,101,100,0),501], [String.fromCharCode(110,101,103,97,116,101,0),249]]);
          let activityt = String.fromCharCode(98,105,116,114,97,116,101,0);
          let paginationi = String.fromCharCode(103,105,102,0);
          let abidetect6 = 0.0;
         playL += `${c_hashz.size + 3}`;
         ticku = new Map([[paginationi, parseInt(`${abidetect6}`) - paginationi.length]]);
         c_hashz.set(paginationi, parseInt(`${abidetect6}`) & 1);
         activityt = `${activityt.length + paginationi.length}`;
         if (yellowb) {
            break;
         }
      } while (yellowb && ((playL.length ^ imagenetworkerrn) < 3));
       let progressM = String.fromCharCode(101,115,116,105,109,97,116,101,100,0);
       let fileC = String.fromCharCode(115,101,99,116,105,110,115,0);
      if (!progressM.endsWith(fileC)) {
          let filter6 = true;
         progressM = `${(String.fromCharCode(90,0) == progressM ? progressM.length : imagenetworkerrn)}`;
         filter6 = !filter6;
      }
      for (let m = 0; m < 1; m++) {
         progressM += "1";
      }
          let bodanh = false;
          let inactiveL = 3;
          let shootu = String.fromCharCode(104,113,112,101,108,0);
         playL = `${((bodanh ? 2 : 2) + playL.length)}`;
         bodanh = shootu.length < inactiveL;
         inactiveL += shootu.length;
      result3 = !result3;
   if (libreactnativeblobl.length >= 1) {
       let google8: Array<any> = [String.fromCharCode(112,114,111,112,97,103,97,116,105,111,110,0), String.fromCharCode(105,110,116,101,114,114,117,112,116,105,98,108,101,0)];
          let componentu = 4.0;
         google8.push(google8.length);
         componentu -= parseFloat(`${3 ^ parseInt(`${componentu}`)}`);
         google8 = [1 >> (Math.min(5, google8.length))];
      for (let a = 0; a < 2; a++) {
         google8.push(google8.length);
      }
      animationsx = `${giftq - countryS.length}`;
   }
      regengx += "3";

    if (wawaLibglog.isGuest(userState)) {

   if (arrowupj.length > 2) {
       let gesturef = String.fromCharCode(118,116,101,110,99,0);
       let scorepopsoundB = String.fromCharCode(99,111,100,97,98,108,101,0);
       let trashx = String.fromCharCode(97,97,114,99,104,0);
       let readE = 3.0;
      if (trashx.includes(`${scorepopsoundB.length}`)) {
         trashx = `${scorepopsoundB.length}`;
      }
         gesturef += `${parseInt(`${readE}`) * 3}`;
      if (gesturef != String.fromCharCode(116,0)) {
         trashx += `${gesturef.length << (Math.min(Math.abs(1), 3))}`;
      }
      let anner4 = scorepopsoundB.length <= 7687841;
      do {
         scorepopsoundB += `${scorepopsoundB.length}`;
         if (anner4) {
            break;
         }
      } while ((scorepopsoundB.length > trashx.length) && anner4);
         scorepopsoundB = `${(String.fromCharCode(114,0) == trashx ? scorepopsoundB.length : trashx.length)}`;
          let smallr: Array<any> = [856, 863, 388];
          let incidenty: Map<any, any> = new Map([[String.fromCharCode(115,117,115,112,101,110,100,101,100,0),609], [String.fromCharCode(102,97,120,99,111,109,112,114,0),888], [String.fromCharCode(116,104,97,119,0),241]]);
         gesturef += `${(String.fromCharCode(81,0) == gesturef ? scorepopsoundB.length : gesturef.length)}`;
         smallr = [incidenty.size / (Math.max(smallr.length, 8))];
         incidenty.set(`${smallr.length}`, incidenty.size);
         trashx += `${parseInt(`${readE}`)}`;
      let iconrefreshd = scorepopsoundB == String.fromCharCode(111,118,102,118,50,0);
      do {
         scorepopsoundB = `${(String.fromCharCode(97,0) == trashx ? parseInt(`${readE}`) : trashx.length)}`;
         if (iconrefreshd) {
            break;
         }
      } while (iconrefreshd && (gesturef == String.fromCharCode(107,0)));
      let halffieldimage8 = 5466531 >= trashx.length;
      do {
          let actionP = false;
          let auto_x0D = false;
          let buttonZ = String.fromCharCode(99,98,115,110,105,100,0);
          let roundM = String.fromCharCode(97,118,112,107,116,0);
         trashx = `${((auto_x0D ? 2 : 5))}`;
         actionP = String.fromCharCode(111,0) == roundM;
         auto_x0D = (43 < (roundM.length + (actionP ? roundM.length : 43)));
         buttonZ = `${((actionP ? 2 : 3))}`;
         if (halffieldimage8) {
            break;
         }
      } while (halffieldimage8 && (5 >= gesturef.length));
          let completeL = String.fromCharCode(100,101,109,117,120,101,114,0);
          let iconwatchnowK = 3.0;
         scorepopsoundB += "2";
         completeL = "1";
         iconwatchnowK /= Math.max((parseFloat(`${String.fromCharCode(73,0) == completeL ? completeL.length : parseInt(`${iconwatchnowK}`)}`)), 3);
      for (let w = 0; w < 3; w++) {
         readE -= scorepopsoundB.length;
      }
      while ((1 * scorepopsoundB.length) > 5 || (scorepopsoundB.length & 1) > 3) {
         readE += scorepopsoundB.length & 3;
         break;
      }
      wifirouterm += trashx.length;
   }
   while (arrowupj.includes(mappingB)) {
      mappingB = `${incidentN}`;
      break;
   }
   if (1 >= (wifirouterm * 4) && 1 >= (4 * wifirouterm)) {
       let textm: Array<any> = [851, 383, 814];
       let aboute: Map<any, any> = new Map([[String.fromCharCode(97,112,116,120,104,100,0),401], [String.fromCharCode(122,109,98,118,0),791]]);
       let bell4: Array<any> = [651, 884, 142];
      for (let m = 0; m < 1; m++) {
         bell4.push(1 >> (Math.min(3, bell4.length)));
      }
       let whitesmalltickM = String.fromCharCode(114,111,111,109,0);
      while (2 == (aboute.size % (Math.max(whitesmalltickM.length, 7)))) {
          let redgoal6 = String.fromCharCode(100,105,118,0);
          let configY = 4.0;
         aboute = new Map([[`${bell4.length}`, 2 << (Math.min(5, bell4.length))]]);
         redgoal6 += `${parseInt(`${configY}`)}`;
         configY /= Math.max(5, parseFloat(`${parseInt(`${configY}`) ^ 3}`));
         break;
      }
         whitesmalltickM += `${textm.length}`;
      while (whitesmalltickM.startsWith(`${bell4.length}`)) {
         bell4.push(aboute.size);
         break;
      }
         aboute = new Map([[`${aboute.size}`, bell4.length / 1]]);
      while ((5 ^ bell4.length) < 4 && (5 ^ whitesmalltickM.length) < 5) {
         bell4.push(aboute.size);
         break;
      }
       let defaultfootballbgT = false;
      let loginsuccessb = 9024769 >= textm.length;
      do {
         textm = [textm.length];
         if (loginsuccessb) {
            break;
         }
      } while ((textm.length >= aboute.size) && loginsuccessb);
      wifirouterm |= aboute.size;
   }
      dispatch(showLoginAction());

   let userM = result3 ? !result3 : result3;
   do {
      result3 = statsnomoredatat == String.fromCharCode(66,0);
      if (userM) {
         break;
      }
   } while (userM && (libreactnativeblobl.length >= 1 && result3));
      result3 = mappingB.length <= regengx.length;
       let awayplayerH = String.fromCharCode(100,117,112,115,111,114,116,0);
      if (!awayplayerH.endsWith(awayplayerH)) {
         awayplayerH = `${3 >> (Math.min(4, awayplayerH.length))}`;
      }
      while (3 <= awayplayerH.length) {
         awayplayerH += `${awayplayerH.length}`;
         break;
      }
      while (awayplayerH.length > awayplayerH.length) {
         awayplayerH += `${awayplayerH.length}`;
         break;
      }
      giftq %= Math.max(1, 2);
      return;

   for (let g = 0; g < 1; g++) {
      animationsx = `${countryS.length - 2}`;
   }
       let gemfile1 = String.fromCharCode(119,97,108,108,97,112,101,114,115,0);
       let nativeex6: Map<any, any> = new Map([[String.fromCharCode(100,101,102,97,117,108,116,99,111,101,102,99,111,117,110,116,115,0),String.fromCharCode(104,117,102,102,0)], [String.fromCharCode(116,111,114,101,100,0),String.fromCharCode(102,108,111,97,116,105,110,103,0)]]);
      let playercommonF = gemfile1 == String.fromCharCode(104,104,114,111,0);
      do {
         gemfile1 += `${gemfile1.length % (Math.max(1, 10))}`;
         if (playercommonF) {
            break;
         }
      } while (playercommonF && (4 >= (nativeex6.size % (Math.max(4, 8))) || (nativeex6.size % 4) >= 5));
         nativeex6 = new Map([[`${nativeex6.size}`, (String.fromCharCode(54,0) == gemfile1 ? gemfile1.length : nativeex6.size)]]);
         nativeex6 = new Map([[`${nativeex6.size}`, nativeex6.size - gemfile1.length]]);
         gemfile1 = `${(gemfile1 == String.fromCharCode(113,0) ? gemfile1.length : nativeex6.size)}`;
         gemfile1 += `${nativeex6.size}`;
          let circleb = String.fromCharCode(116,101,120,101,108,0);
         gemfile1 += `${(circleb == String.fromCharCode(57,0) ? nativeex6.size : circleb.length)}`;
      wifirouterm >>= Math.min(4, Math.abs(wifirouterm));
   for (let l = 0; l < 3; l++) {
       let gifgoalT = 1;
         gifgoalT |= gifgoalT;
         gifgoalT -= 3;
      for (let i = 0; i < 2; i++) {
         gifgoalT *= gifgoalT * gifgoalT;
      }
      wifirouterm |= gifgoalT;
   }
    }
    const message = shareOptions.message + " " + shareOptions.url;

   if (3 >= (regengx.length % 3) && 3 >= (regengx.length % (Math.max(5, wifirouterm)))) {
       let greye = String.fromCharCode(117,110,98,108,117,114,0);
       let mail3 = String.fromCharCode(97,117,116,104,105,110,102,111,0);
       let smallorangemana = String.fromCharCode(117,121,118,121,116,111,121,117,118,0);
       let j_lock5 = String.fromCharCode(114,101,115,104,117,102,102,108,101,0);
      if (smallorangemana == mail3) {
          let soundA = 4;
          let const_1lW = String.fromCharCode(100,105,115,115,111,108,118,101,0);
          let iconclosewhitewithbgh = 1;
          let a_titleo = String.fromCharCode(102,101,116,99,104,101,100,0);
          let iconsaveimage2: Map<any, any> = new Map([[String.fromCharCode(117,112,115,101,114,116,0),836], [String.fromCharCode(116,119,111,0),461]]);
         mail3 += `${iconsaveimage2.size}`;
         soundA >>= Math.min(2, Math.abs(3));
         const_1lW += `${a_titleo.length}`;
         iconclosewhitewithbgh &= a_titleo.length ^ 2;
         iconsaveimage2 = new Map([[`${iconclosewhitewithbgh}`, iconclosewhitewithbgh]]);
      }
         smallorangemana = `${smallorangemana.length / 1}`;
       let imagesN = true;
       let weibo3 = true;
      if (mail3.includes(`${weibo3}`)) {
         weibo3 = greye.length == 17;
      }
         j_lock5 = `${((weibo3 ? 3 : 2) - smallorangemana.length)}`;
      wifirouterm += mail3.length;
   }
       let mintegralN = false;
       let white_ = String.fromCharCode(118,97,108,105,100,0);
       let nbatrophyi = String.fromCharCode(97,116,111,109,105,99,111,112,115,0);
       let uploady = String.fromCharCode(110,111,118,101,99,0);
      while (white_.includes(`${uploady.length}`)) {
         uploady = "1";
         break;
      }
      if (white_ == String.fromCharCode(116,0)) {
         uploady = "2";
      }
       let predictionh = 4.0;
         mintegralN = mintegralN && uploady.length >= 6;
      let expiredk = uploady == String.fromCharCode(122,106,107,108,112,55,119,56,0);
      do {
         uploady += `${(nbatrophyi == String.fromCharCode(82,0) ? nbatrophyi.length : white_.length)}`;
         if (expiredk) {
            break;
         }
      } while ((2 < uploady.length) && expiredk);
      incidentN <<= Math.min(1, Math.abs(3 | libreactnativeblobl.length));
      animationsx = `${((result3 ? 1 : 5) << (Math.min(Math.abs(incidentN), 5)))}`;
    const appURL = `tg://msg?text=${message}`;

       let downH = String.fromCharCode(101,109,98,101,100,100,105,110,103,0);
       let const_bX: Map<any, any> = new Map([[String.fromCharCode(112,114,107,0),953], [String.fromCharCode(112,105,99,116,117,114,101,115,0),47], [String.fromCharCode(104,114,97,109,0),530]]);
       let eighteenx = 5.0;
      if (2.11 < (eighteenx * 4.68) || 4.68 < (parseFloat(`${downH.length}`) * eighteenx)) {
         downH = `${const_bX.size / (Math.max(1, 5))}`;
      }
      let subsn = downH.length >= 4981950;
      do {
         downH = `${parseInt(`${eighteenx}`) % (Math.max(2, 6))}`;
         if (subsn) {
            break;
         }
      } while (subsn && ((downH.length >> (Math.min(Math.abs(5), 4))) >= 2 && 2 >= (5 >> (Math.min(2, downH.length)))));
      let crossi = 7511168 <= const_bX.size;
      do {
          let kicky = String.fromCharCode(114,101,115,117,108,116,115,0);
          let turna = 5;
          let watchnowbgR = 0.0;
          let reactnavigationD = String.fromCharCode(102,114,101,101,100,117,109,112,98,117,102,102,101,114,0);
          let graphI: Map<any, any> = new Map([[String.fromCharCode(114,101,113,115,116,97,116,101,0),true ], [String.fromCharCode(113,112,113,115,99,97,108,101,0),false ], [String.fromCharCode(115,117,112,111,114,116,101,100,0),true ]]);
         const_bX = new Map([[downH, 1 + kicky.length]]);
         kicky += "2";
         turna >>= Math.min(Math.abs((String.fromCharCode(78,0) == reactnavigationD ? turna : reactnavigationD.length)), 5);
         watchnowbgR *= 1 >> (Math.min(4, Math.abs(turna)));
         graphI = new Map([[`${graphI.size}`, 2 - reactnavigationD.length]]);
         if (crossi) {
            break;
         }
      } while ((!Array.from(const_bX.keys()).includes(`${eighteenx}`)) && crossi);
       let smalll = 3.0;
         downH = `${const_bX.size}`;
      let libmapbufferjnie = 9786936.0 >= smalll;
      do {
         smalll += 3 & const_bX.size;
         if (libmapbufferjnie) {
            break;
         }
      } while ((3.78 <= (smalll * 1.43)) && libmapbufferjnie);
         downH += `${parseInt(`${eighteenx}`) % 1}`;
         downH += `${parseInt(`${eighteenx}`) / 3}`;
      let register_vfW = const_bX.size <= 6104060;
      do {
         const_bX.set(`${eighteenx}`, parseInt(`${smalll}`));
         if (register_vfW) {
            break;
         }
      } while ((1 > (downH.length - const_bX.size)) && register_vfW);
      register_dG *= wifirouterm;
   if (libreactnativeblobl.endsWith(`${giftq}`)) {
       let gdtadvF = 5.0;
       let goalp = 2.0;
       let mbridgeQ: Array<any> = [981, 720, 347];
       let found_ = String.fromCharCode(115,101,97,114,99,104,105,110,103,0);
       let nodek = 0;
          let downarrow7: Array<any> = [String.fromCharCode(114,101,99,111,110,102,105,103,0), String.fromCharCode(114,117,110,116,101,114,109,0)];
          let assetsh = 2.0;
          let sharewhites: Array<any> = [72, 636];
         nodek >>= Math.min(mbridgeQ.length, 4);
         downarrow7.push(downarrow7.length ^ 2);
         assetsh *= parseFloat(`${downarrow7.length / (Math.max(3, 9))}`);
         sharewhites = [parseInt(`${assetsh}`) >> (Math.min(downarrow7.length, 2))];
         mbridgeQ = [1 % (Math.max(9, nodek))];
       let iconcurrentmatchZ = String.fromCharCode(115,97,118,101,112,111,105,110,116,115,0);
         mbridgeQ.push(mbridgeQ.length / (Math.max(3, 9)));
          let desc5 = 3.0;
         goalp += parseFloat(`${mbridgeQ.length}`);
         desc5 -= parseFloat(`${3 << (Math.min(Math.abs(parseInt(`${desc5}`)), 4))}`);
      for (let b = 0; b < 2; b++) {
         mbridgeQ.push(1 & parseInt(`${gdtadvF}`));
      }
       let stored = 2;
      for (let h = 0; h < 1; h++) {
          let eyeopeno = 2;
          let predictionactiveu = String.fromCharCode(112,111,114,116,115,0);
          let middlewareV = 0.0;
         nodek %= Math.max(3, eyeopeno);
         eyeopeno %= Math.max(parseInt(`${middlewareV}`) >> (Math.min(Math.abs(1), 3)), 2);
         predictionactiveu += "2";
         middlewareV -= (parseFloat(`${String.fromCharCode(105,0) == predictionactiveu ? parseInt(`${middlewareV}`) : predictionactiveu.length}`));
      }
         gdtadvF *= nodek;
      if (1 < stored) {
         stored /= Math.max(parseInt(`${goalp}`) / 1, 5);
      }
      let settingq = iconcurrentmatchZ.length <= 9568103;
      do {
         iconcurrentmatchZ = `${mbridgeQ.length << (Math.min(found_.length, 4))}`;
         if (settingq) {
            break;
         }
      } while (settingq && (found_ != iconcurrentmatchZ));
      let sportU = gdtadvF >= 7312794.0;
      do {
         gdtadvF *= stored;
         if (sportU) {
            break;
         }
      } while (sportU && (4.27 == (goalp + gdtadvF)));
       let iconnotificationnews: Map<any, any> = new Map([[String.fromCharCode(114,101,115,112,111,110,100,115,0),794], [String.fromCharCode(99,107,115,117,109,0),583], [String.fromCharCode(109,101,114,103,101,97,98,108,101,0),804]]);
      let thumbnailo = nodek <= 7342128;
      do {
         nodek |= mbridgeQ.length - 1;
         if (thumbnailo) {
            break;
         }
      } while (thumbnailo && (2 > (nodek / (Math.max(4, 8))) || (4 / (Math.max(2, stored))) > 1));
      for (let i = 0; i < 2; i++) {
          let videovarV = 5.0;
          let chatroombackground6 = false;
          let positionfieldU = 0.0;
          let actione = String.fromCharCode(100,111,99,117,109,101,110,116,97,116,105,111,110,0);
          let clearZ: Map<any, any> = new Map([[String.fromCharCode(115,116,114,105,112,101,0),560], [String.fromCharCode(114,101,115,116,111,114,101,0),701]]);
         gdtadvF -= mbridgeQ.length;
         videovarV /= Math.max(clearZ.size, 1);
         chatroombackground6 = clearZ.get(`${positionfieldU}`) == null;
         positionfieldU += (parseFloat(`${(chatroombackground6 ? 2 : 4) ^ parseInt(`${videovarV}`)}`));
         actione = `${clearZ.size * parseInt(`${videovarV}`)}`;
      }
      libreactnativeblobl += `${regengx.length}`;
   }
   if (3 == giftq) {
       let fastforwardb = String.fromCharCode(99,111,118,101,114,97,103,101,0);
       let viewsn: Map<any, any> = new Map([[String.fromCharCode(108,111,103,105,115,116,105,99,0),499], [String.fromCharCode(121,118,99,111,110,102,105,103,0),400]]);
       let baseline6 = 2.0;
       let vietnamm = 5.0;
         baseline6 += parseFloat(`${viewsn.size % 1}`);
         viewsn = new Map([[`${viewsn.size}`, parseInt(`${vietnamm}`) >> (Math.min(Math.abs(1), 3))]]);
         viewsn = new Map([[`${viewsn.size}`, 3 * viewsn.size]]);
          let mergerO = String.fromCharCode(115,117,98,109,105,116,0);
         viewsn = new Map([[fastforwardb, 1]]);
         mergerO = `${3 << (Math.min(3, mergerO.length))}`;
         viewsn.set(`${vietnamm}`, viewsn.size);
      giftq ^= (String.fromCharCode(122,0) == countryS ? countryS.length : viewsn.size);
   }
    const webURL = `https://t.me/share/url?url=${message}`;

   while (wifirouterm > statsnomoredatat.length) {
      statsnomoredatat += `${(countryS == String.fromCharCode(78,0) ? giftq : countryS.length)}`;
      break;
   }
   let headeri = animationsx.length <= 9900490;
   do {
      animationsx = `${wifirouterm - animationsx.length}`;
      if (headeri) {
         break;
      }
   } while ((regengx.length == animationsx.length) && headeri);
   for (let y = 0; y < 2; y++) {
      libreactnativeblobl = `${3 * gradlewr.size}`;
   }

    Linking.canOpenURL(webURL)
      .then((supported) => {
        if (supported) {

      register_dG /= Math.max(2, 1 / (Math.max(5, parseInt(`${register_dG}`))));
      result3 = !inactiveT;
      giftq &= 3 + statsnomoredatat.length;
          console.log("supported telegram web");

      giftq |= 2;
   for (let t = 0; t < 2; t++) {
      countryS = `${((inactiveT ? 2 : 5) / (Math.max(arrowupj.length, 1)))}`;
   }
       let grayF = String.fromCharCode(109,111,100,101,110,97,109,101,0);
       let infow: Array<any> = [String.fromCharCode(99,97,108,99,0), String.fromCharCode(100,101,116,97,99,104,0), String.fromCharCode(100,114,97,102,116,115,0)];
       let libjsil = 1;
       let phones = String.fromCharCode(114,101,102,101,114,101,110,99,101,115,0);
       let textlayoutmanagerN = String.fromCharCode(115,112,111,105,108,101,114,0);
      for (let r = 0; r < 1; r++) {
         infow.push(textlayoutmanagerN.length);
      }
      for (let b = 0; b < 3; b++) {
         phones = `${(String.fromCharCode(90,0) == phones ? phones.length : grayF.length)}`;
      }
       let bangA = 5.0;
      for (let v = 0; v < 2; v++) {
          let defaultbasketballbg0 = false;
         libjsil &= grayF.length;
         defaultbasketballbg0 = !defaultbasketballbg0;
      }
       let reviewi = String.fromCharCode(116,97,103,0);
         textlayoutmanagerN = `${phones.length ^ 3}`;
      for (let z = 0; z < 1; z++) {
          let iconsubssuccessz = 5.0;
          let internet2 = String.fromCharCode(103,110,111,115,105,115,0);
          let mbnativep = 4;
          let defaultroombgb = 1.0;
         libjsil /= Math.max(3, 3 + reviewi.length);
         iconsubssuccessz /= Math.max((String.fromCharCode(117,0) == internet2 ? internet2.length : parseInt(`${iconsubssuccessz}`)), 5);
         mbnativep >>= Math.min(Math.abs(mbnativep), 2);
         defaultroombgb -= parseInt(`${iconsubssuccessz}`) + 2;
      }
      while (reviewi == String.fromCharCode(119,0)) {
         grayF = `${libjsil}`;
         break;
      }
      friendsn = `${parseInt(`${register_dG}`)}`;
          

   let matchactiveX = incidentN <= 6390972;
   do {
       let gemfilet = 1.0;
       let description_2Q = String.fromCharCode(102,108,97,115,104,105,110,103,0);
         description_2Q += `${(description_2Q == String.fromCharCode(122,0) ? description_2Q.length : parseInt(`${gemfilet}`))}`;
      for (let z = 0; z < 2; z++) {
         description_2Q += `${(description_2Q == String.fromCharCode(78,0) ? description_2Q.length : parseInt(`${gemfilet}`))}`;
      }
         description_2Q = `${description_2Q.length}`;
          let filledI = String.fromCharCode(100,105,115,97,112,112,101,97,114,101,100,0);
         gemfilet += 1;
         filledI += `${filledI.length & 2}`;
      if (description_2Q.length >= parseInt(`${gemfilet}`)) {
          let predictionbannerU = String.fromCharCode(117,110,112,114,101,109,117,108,116,105,112,108,121,0);
         description_2Q += `${description_2Q.length}`;
         predictionbannerU += `${predictionbannerU.length}`;
      }
       let telegramy = 2;
      incidentN &= parseInt(`${gemfilet}`);
      if (matchactiveX) {
         break;
      }
   } while (matchactiveX && ((incidentN / (Math.max(animationsx.length, 7))) < 5 && 5 < (5 / (Math.max(6, animationsx.length)))));
       let iconnotificationnewX = 5;
       let codeh = false;
      let gradlewj = iconnotificationnewX >= 6239194;
      do {
         iconnotificationnewX %= Math.max(iconnotificationnewX, 5);
         if (gradlewj) {
            break;
         }
      } while (gradlewj && (codeh && 3 > (iconnotificationnewX * 2)));
      while (iconnotificationnewX <= 4 && (iconnotificationnewX * 4) <= 4) {
          let zhengpianZ = String.fromCharCode(115,101,112,97,114,97,116,111,114,115,0);
          let specU = 4.0;
          let mbridgeh = 4.0;
         iconnotificationnewX <<= Math.min(1, Math.abs(1));
         zhengpianZ = `${parseInt(`${specU}`) | 3}`;
         specU -= parseInt(`${specU}`) % (Math.max(7, parseInt(`${mbridgeh}`)));
         mbridgeh += 2 << (Math.min(1, Math.abs(parseInt(`${specU}`))));
         break;
      }
         codeh = !codeh;
         codeh = iconnotificationnewX > 75;
          let userg = 0.0;
          let redscoreballI = 4.0;
          let iconsubssuccessq = 0;
         iconnotificationnewX ^= iconsubssuccessq;
         userg /= Math.max(5, parseFloat(`${parseInt(`${userg}`) + 2}`));
         redscoreballI += parseInt(`${userg}`);
         iconsubssuccessq += parseInt(`${userg}`) >> (Math.min(Math.abs(parseInt(`${redscoreballI}`)), 5));
      let interstitialO = iconnotificationnewX <= 6109263;
      do {
         iconnotificationnewX |= iconnotificationnewX;
         if (interstitialO) {
            break;
         }
      } while (interstitialO && ((2 + iconnotificationnewX) < 5 && codeh));
      register_dG += gradlewr.size - 3;
   let basketballplayerplaceholdery = result3 ? !result3 : result3;
   do {
      result3 = 69 == mappingB.length || 69 == giftq;
      if (basketballplayerplaceholdery) {
         break;
      }
   } while ((!result3) && basketballplayerplaceholdery);
          Linking.openURL(webURL);
        } else {

   while (!result3) {
      result3 = giftq <= 36;
      break;
   }
   for (let h = 0; h < 2; h++) {
      arrowupj = `${parseInt(`${schedulet}`) - 1}`;
   }
   for (let z = 0; z < 2; z++) {
      incidentN ^= 1 >> (Math.min(3, Math.abs(parseInt(`${schedulet}`))));
   }
          console.log("not supported telegram web");

   for (let u = 0; u < 1; u++) {
      regengx += `${regengx.length | 3}`;
   }
      inactiveT = (statsnomoredatat.length & regengx.length) <= 89;
       let detailsh = String.fromCharCode(109,97,103,110,105,102,105,101,114,0);
      let final_4c = 7920671 >= detailsh.length;
      do {
         detailsh += `${2 >> (Math.min(4, detailsh.length))}`;
         if (final_4c) {
            break;
         }
      } while ((detailsh.includes(`${detailsh.length}`)) && final_4c);
      if (!detailsh.includes(detailsh)) {
          let singles = String.fromCharCode(109,97,114,107,101,100,0);
          let ajaxH = 5.0;
          let libavformatp = String.fromCharCode(115,121,110,99,104,114,111,110,105,115,101,100,0);
          let penaltyshootnogoalK = String.fromCharCode(107,101,121,98,117,102,0);
         detailsh = `${detailsh.length}`;
         singles = "3";
         ajaxH += parseFloat(`${2 % (Math.max(9, singles.length))}`);
         libavformatp = `${singles.length * penaltyshootnogoalK.length}`;
         penaltyshootnogoalK += `${(String.fromCharCode(75,0) == singles ? singles.length : libavformatp.length)}`;
      }
         detailsh = `${detailsh.length - 3}`;
      regengx = `${detailsh.length << (Math.min(1, Math.abs(parseInt(`${schedulet}`))))}`;
          

      friendsn += `${gradlewr.size}`;
      giftq -= (arrowupj == String.fromCharCode(106,0) ? parseInt(`${schedulet}`) : arrowupj.length);
      regengx += `${(statsnomoredatat == String.fromCharCode(70,0) ? (inactiveT ? 4 : 5) : statsnomoredatat.length)}`;
          Linking.openURL(appURL);
        }
      })
      .catch((error) => {
        console.error("Error checking app URL:", error);
      });
  };

  const shareToWeixin = async () => {
       let basketballdetailsbg_ = String.fromCharCode(98,105,116,101,0);
    let readI = 3.0;
    let searchbarq = String.fromCharCode(114,97,119,100,101,99,0);
    let fast_ = 0;
    let positionfieldi = String.fromCharCode(100,100,114,97,110,103,101,0);
    let commentg = 0.0;
    let liveendmodallogoJ: Array<any> = [958, 125, 572];
    let hejiz: Array<any> = [387, 407];
    let dataA = 0.0;
    let appsp = String.fromCharCode(112,97,121,101,101,0);
    let icon1: Array<any> = [String.fromCharCode(104,101,97,100,112,104,111,110,101,115,0), String.fromCharCode(101,105,110,116,114,0), String.fromCharCode(102,98,100,101,118,0)];
    let typingloadingD: Array<any> = [String.fromCharCode(102,108,111,111,114,115,0), String.fromCharCode(114,101,102,105,110,101,109,101,110,116,0)];
    let fullz: Array<any> = [533, 108, 122];
      appsp += `${parseInt(`${dataA}`)}`;
   for (let e = 0; e < 2; e++) {
      commentg *= parseFloat(`${liveendmodallogoJ.length}`);
   }

    if (wawaLibglog.isGuest(userState)) {

   let libfolly3 = commentg <= 7497310.0;
   do {
      commentg -= parseFloat(`${fast_ / 3}`);
      if (libfolly3) {
         break;
      }
   } while ((2.43 <= (commentg - 4.25) || (hejiz.length & 5) <= 1) && libfolly3);
   if (5 > (hejiz.length & 4) || 3 > (4 & hejiz.length)) {
      hejiz.push(parseInt(`${readI}`));
   }
      dispatch(showLoginAction());

       let airbnbstaro = String.fromCharCode(116,99,102,105,108,101,0);
       let manifestA = 4;
       let nbatrophyS = String.fromCharCode(101,110,100,115,0);
      if (nbatrophyS.length >= airbnbstaro.length) {
         nbatrophyS = `${nbatrophyS.length}`;
      }
         nbatrophyS += `${(String.fromCharCode(86,0) == nbatrophyS ? manifestA : nbatrophyS.length)}`;
         manifestA >>= Math.min(Math.abs(manifestA ^ airbnbstaro.length), 4);
      for (let v = 0; v < 1; v++) {
          let setting8 = 3.0;
          let entryz: Array<any> = [256, 219];
          let sliderN = String.fromCharCode(108,101,103,101,110,100,0);
          let castingD = String.fromCharCode(98,105,116,108,105,110,101,99,104,117,110,107,121,0);
          let mbbannerK = String.fromCharCode(105,108,98,99,0);
         airbnbstaro += `${castingD.length}`;
         setting8 /= Math.max(parseFloat(`${sliderN.length << (Math.min(2, Math.abs(parseInt(`${setting8}`))))}`), 2);
         entryz.push(sliderN.length - 3);
         castingD += `${parseInt(`${setting8}`) / (Math.max(8, entryz.length))}`;
         mbbannerK += `${sliderN.length}`;
      }
      if (3 < (manifestA | nbatrophyS.length)) {
          let brightnessV = String.fromCharCode(109,107,118,114,101,97,100,101,114,0);
          let penaltymatchiconI = 4.0;
          let banner2 = 3;
         manifestA |= parseInt(`${penaltymatchiconI}`) - 2;
         brightnessV = "1";
         penaltymatchiconI *= parseFloat(`${2}`);
         banner2 /= Math.max(banner2 & brightnessV.length, 2);
      }
         manifestA <<= Math.min(nbatrophyS.length, 2);
          let applicationz = 0.0;
          let serviced = 3.0;
         nbatrophyS += `${(String.fromCharCode(48,0) == nbatrophyS ? nbatrophyS.length : manifestA)}`;
         applicationz += 3;
         serviced -= parseFloat(`${parseInt(`${applicationz}`)}`);
      let imageactionliveY = 5238870 >= nbatrophyS.length;
      do {
         nbatrophyS += "3";
         if (imageactionliveY) {
            break;
         }
      } while (imageactionliveY && ((manifestA * nbatrophyS.length) <= 3));
      if ((1 << (Math.min(4, Math.abs(manifestA)))) < 1 && (manifestA << (Math.min(airbnbstaro.length, 1))) < 1) {
         manifestA *= 1 ^ manifestA;
      }
      fast_ -= fast_;
   while (positionfieldi != String.fromCharCode(101,0) && basketballdetailsbg_ != String.fromCharCode(102,0)) {
      basketballdetailsbg_ = `${parseInt(`${readI}`)}`;
      break;
   }
      return;

      fast_ <<= Math.min(Math.abs(1), 5);
   for (let s = 0; s < 2; s++) {
      typingloadingD.push(liveendmodallogoJ.length + 1);
   }
    }
    const message = encodeURIComponent(
      shareOptions.message + "\n" + shareOptions.url
    );

   let robotoR = 5367971 >= fast_;
   do {
       let mbsplashS = String.fromCharCode(112,97,110,101,108,115,0);
       let tempnodatagifb = String.fromCharCode(100,101,97,108,108,111,99,97,116,101,0);
      for (let f = 0; f < 3; f++) {
         tempnodatagifb = `${tempnodatagifb.length}`;
      }
      if (tempnodatagifb != String.fromCharCode(68,0)) {
         mbsplashS += `${mbsplashS.length - tempnodatagifb.length}`;
      }
      let librrcn = 5027478 <= mbsplashS.length;
      do {
          let notificationL: Array<any> = [59, 574];
         mbsplashS = `${notificationL.length}`;
         if (librrcn) {
            break;
         }
      } while ((tempnodatagifb == mbsplashS) && librrcn);
         mbsplashS += "1";
      while (mbsplashS.length < tempnodatagifb.length) {
         tempnodatagifb += `${2 ^ mbsplashS.length}`;
         break;
      }
      for (let e = 0; e < 3; e++) {
         mbsplashS += `${tempnodatagifb.length}`;
      }
      fast_ ^= basketballdetailsbg_.length;
      if (robotoR) {
         break;
      }
   } while (robotoR && (2 == (fast_ * 1)));
       let statisticsn = 0;
       let ballL = String.fromCharCode(109,105,99,114,111,115,111,102,116,0);
       let annerN = String.fromCharCode(100,105,103,101,115,116,98,121,110,105,100,0);
         ballL += `${(String.fromCharCode(111,0) == ballL ? ballL.length : annerN.length)}`;
          let znewsshareZ = String.fromCharCode(117,115,114,99,0);
          let layouty = 1.0;
         statisticsn %= Math.max(2, 2);
         znewsshareZ = `${znewsshareZ.length}`;
         layouty /= Math.max(5, (parseFloat(`${znewsshareZ == String.fromCharCode(121,0) ? znewsshareZ.length : parseInt(`${layouty}`)}`)));
          let trophyT = false;
          let photoK = true;
         statisticsn >>= Math.min(2, Math.abs(statisticsn));
         trophyT = (trophyT ? !photoK : !trophyT);
         photoK = !trophyT;
         annerN = `${1 % (Math.max(4, statisticsn))}`;
          let mbnativey = true;
          let humidityS = 3.0;
          let halffieldimagey = String.fromCharCode(100,101,110,115,101,0);
         annerN = `${((mbnativey ? 3 : 5) + parseInt(`${humidityS}`))}`;
         mbnativey = halffieldimagey.length <= 62;
         humidityS += parseFloat(`${halffieldimagey.length / 1}`);
         ballL += `${ballL.length}`;
          let a_locku = String.fromCharCode(100,109,117,108,0);
          let android0 = 5.0;
         ballL = `${a_locku.length}`;
         a_locku = `${3 ^ parseInt(`${android0}`)}`;
         android0 *= parseFloat(`${parseInt(`${android0}`) ^ parseInt(`${android0}`)}`);
      while (annerN.length > ballL.length) {
         ballL += `${(annerN == String.fromCharCode(69,0) ? ballL.length : annerN.length)}`;
         break;
      }
       let iconfeedbackG: Array<any> = [String.fromCharCode(98,108,97,99,107,0), String.fromCharCode(101,103,119,105,116,0)];
      dataA += fast_;
    const appURL = `weixin://send?text=${message}`;

   let libjsic = searchbarq.length <= 5549405;
   do {
       let predictionbannersharedO: Map<any, any> = new Map([[String.fromCharCode(111,112,97,116,111,109,0),711], [String.fromCharCode(111,117,116,112,117,116,113,0),161], [String.fromCharCode(101,110,116,105,116,101,115,0),802]]);
       let cornerkickN = 2.0;
       let videojsA = 4.0;
       let eyeopens = String.fromCharCode(103,114,97,100,105,101,110,116,0);
         eyeopens = `${predictionbannersharedO.size ^ parseInt(`${videojsA}`)}`;
         videojsA /= Math.max(4, parseFloat(`${3}`));
      if (eyeopens.includes(`${cornerkickN}`)) {
         cornerkickN += parseInt(`${cornerkickN}`);
      }
       let penaltyshootnogoalF: Map<any, any> = new Map([[String.fromCharCode(99,100,108,109,115,0),String.fromCharCode(111,103,103,105,110,103,0)], [String.fromCharCode(119,105,100,101,115,99,114,101,101,110,0),String.fromCharCode(103,101,116,110,109,115,101,100,101,99,0)]]);
      for (let a = 0; a < 1; a++) {
          let tempnodataM = String.fromCharCode(117,110,109,97,114,115,104,97,108,0);
          let logo7 = String.fromCharCode(103,97,109,117,116,115,0);
          let sendG = 3.0;
         videojsA += parseFloat(`${1}`);
         tempnodataM += `${parseInt(`${sendG}`) / 2}`;
         logo7 += `${tempnodataM.length - 2}`;
         sendG += parseFloat(`${logo7.length}`);
      }
      for (let p = 0; p < 1; p++) {
         predictionbannersharedO = new Map([[`${predictionbannersharedO.size}`, parseInt(`${cornerkickN}`) >> (Math.min(Math.abs(2), 3))]]);
      }
      if ((predictionbannersharedO.size - eyeopens.length) > 1 || 1 > (eyeopens.length - predictionbannersharedO.size)) {
         eyeopens = `${predictionbannersharedO.size - 2}`;
      }
      for (let i = 0; i < 2; i++) {
          let animationsb = 0.0;
          let greenarrowupI = String.fromCharCode(111,99,107,105,110,103,0);
          let unselectedx: Map<any, any> = new Map([[String.fromCharCode(101,97,105,100,99,116,0),false ], [String.fromCharCode(114,101,115,97,109,112,0),true ], [String.fromCharCode(97,100,97,112,116,105,118,101,0),true ]]);
          let livesharey = 5;
          let eyeopenW: Map<any, any> = new Map([[String.fromCharCode(115,97,116,117,114,97,116,105,111,110,0),String.fromCharCode(118,97,114,109,97,115,107,0)], [String.fromCharCode(115,115,121,98,0),String.fromCharCode(116,117,108,115,105,0)]]);
         eyeopens += `${eyeopenW.size - parseInt(`${videojsA}`)}`;
         animationsb *= parseFloat(`${livesharey ^ greenarrowupI.length}`);
         greenarrowupI = `${(greenarrowupI == String.fromCharCode(102,0) ? livesharey : greenarrowupI.length)}`;
         unselectedx = new Map([[`${livesharey}`, livesharey]]);
         eyeopenW = new Map([[`${livesharey}`, 1 << (Math.min(Math.abs(parseInt(`${animationsb}`)), 3))]]);
      }
      for (let s = 0; s < 2; s++) {
         cornerkickN *= penaltyshootnogoalF.size;
      }
          let gifgoalf = false;
         videojsA /= Math.max(3, parseFloat(`${parseInt(`${cornerkickN}`) >> (Math.min(Math.abs(3), 2))}`));
         gifgoalf = (gifgoalf ? !gifgoalf : gifgoalf);
      for (let y = 0; y < 3; y++) {
         eyeopens = `${parseInt(`${cornerkickN}`)}`;
      }
      for (let a = 0; a < 3; a++) {
         predictionbannersharedO.set(eyeopens, eyeopens.length % 3);
      }
      searchbarq = `${basketballdetailsbg_.length}`;
      if (libjsic) {
         break;
      }
   } while ((4 >= (1 % (Math.max(4, searchbarq.length))) || (1 & searchbarq.length) >= 2) && libjsic);
   let bdxadsdkD = typingloadingD.length >= 8050293;
   do {
       let becomew = String.fromCharCode(104,101,120,105,110,116,0);
          let dropdownz: Map<any, any> = new Map([[String.fromCharCode(99,108,105,99,107,0),857], [String.fromCharCode(120,112,114,118,0),99], [String.fromCharCode(100,111,99,116,111,116,97,108,0),869]]);
         becomew += `${dropdownz.size}`;
         becomew += `${3 / (Math.max(5, becomew.length))}`;
         becomew = `${becomew.length % (Math.max(becomew.length, 3))}`;
      typingloadingD.push(parseInt(`${commentg}`) - basketballdetailsbg_.length);
      if (bdxadsdkD) {
         break;
      }
   } while (bdxadsdkD && (4 == (fast_ << (Math.min(typingloadingD.length, 2))) && 4 == (fast_ << (Math.min(typingloadingD.length, 5)))));
    

      positionfieldi = `${liveendmodallogoJ.length}`;
       let albumM = 1;
         albumM >>= Math.min(4, Math.abs(1 * albumM));
      while ((albumM ^ albumM) <= 1 && (albumM ^ 1) <= 2) {
          let sigmobZ = true;
          let awayicon1 = String.fromCharCode(109,111,118,101,0);
          let alert8: Map<any, any> = new Map([[String.fromCharCode(99,104,97,110,103,101,103,114,111,117,112,0),187], [String.fromCharCode(99,111,102,97,99,116,111,114,0),936], [String.fromCharCode(100,105,115,112,111,115,101,100,0),784]]);
          let disconnected0 = String.fromCharCode(115,97,116,0);
          let configp = String.fromCharCode(108,115,112,112,111,108,121,0);
         albumM *= disconnected0.length - awayicon1.length;
         sigmobZ = alert8.size > 80;
         awayicon1 += `${2 * alert8.size}`;
         disconnected0 = `${alert8.size % (Math.max(configp.length, 4))}`;
         configp += `${alert8.size >> (Math.min(Math.abs(3), 4))}`;
         break;
      }
       let downloadedp = String.fromCharCode(101,110,104,97,110,99,101,0);
      icon1.push(2);
    Linking.canOpenURL(appURL)
      .then((supported) => {
        if (supported) {

       let basketballT = 3.0;
       let libloggerp: Map<any, any> = new Map([[String.fromCharCode(116,119,111,102,105,115,104,0),308], [String.fromCharCode(102,111,114,99,101,0),623]]);
       let slidere = String.fromCharCode(99,118,105,100,0);
         basketballT /= Math.max(parseFloat(`${slidere.length | 3}`), 5);
         libloggerp.set(slidere, libloggerp.size - 2);
      for (let i = 0; i < 1; i++) {
         basketballT -= parseFloat(`${2 - libloggerp.size}`);
      }
      let f_managere = String.fromCharCode(50,116,55,110,115,101,121,0) == slidere;
      do {
         slidere += `${libloggerp.size}`;
         if (f_managere) {
            break;
         }
      } while (f_managere && ((1 >> (Math.min(5, slidere.length))) < 1 && (slidere.length ^ 1) < 2));
         slidere = `${1 * libloggerp.size}`;
      while (slidere.length < 3) {
         libloggerp.set(`${basketballT}`, libloggerp.size - parseInt(`${basketballT}`));
         break;
      }
      let imagesm = String.fromCharCode(110,105,97,97,102,0) == slidere;
      do {
         slidere += `${3 << (Math.min(5, Math.abs(libloggerp.size)))}`;
         if (imagesm) {
            break;
         }
      } while (imagesm && ((2 ^ slidere.length) == 2));
      if (Array.from(libloggerp.values()).includes(basketballT)) {
         libloggerp = new Map([[`${libloggerp.size}`, libloggerp.size * 3]]);
      }
      let libhermesw = libloggerp.size >= 6345904;
      do {
          let videojst = false;
          let matchinactiveX = 0.0;
          let codeq = 2;
         libloggerp = new Map([[`${libloggerp.size}`, (slidere == String.fromCharCode(117,0) ? slidere.length : libloggerp.size)]]);
         videojst = !videojst;
         matchinactiveX += parseFloat(`${parseInt(`${matchinactiveX}`)}`);
         codeq -= parseInt(`${matchinactiveX}`) << (Math.min(5, Math.abs(3)));
         if (libhermesw) {
            break;
         }
      } while (libhermesw && (3.35 > (basketballT + 5.96) || 5.96 > (parseFloat(`${libloggerp.size}`) + basketballT)));
      icon1.push(2);
      hejiz = [typingloadingD.length];
          

      icon1 = [fullz.length];
   while (4.27 >= (1.51 + commentg) && 2 >= (fast_ + parseInt(`${commentg}`))) {
      fast_ %= Math.max(4, 1);
      break;
   }
          Linking.openURL(appURL);
        } else {

       let completeY = String.fromCharCode(100,105,97,103,111,110,97,108,0);
       let singaporew = String.fromCharCode(99,116,108,111,117,116,112,117,116,0);
       let videocommonU: Array<any> = [333, 932];
      if (singaporew.length > completeY.length) {
         completeY += `${completeY.length}`;
      }
          let huawei3 = String.fromCharCode(116,105,108,108,0);
         singaporew += "3";
         huawei3 += "2";
      while (!completeY.startsWith(`${videocommonU.length}`)) {
         videocommonU = [videocommonU.length];
         break;
      }
         singaporew = "2";
      let reactnativeratingsY = String.fromCharCode(103,55,108,0) == completeY;
      do {
         completeY = `${(completeY == String.fromCharCode(102,0) ? completeY.length : videocommonU.length)}`;
         if (reactnativeratingsY) {
            break;
         }
      } while (reactnativeratingsY && ((5 << (Math.min(3, completeY.length))) > 3 && 1 > (5 << (Math.min(3, completeY.length)))));
         completeY += `${(String.fromCharCode(70,0) == singaporew ? videocommonU.length : singaporew.length)}`;
         singaporew += `${singaporew.length + videocommonU.length}`;
         singaporew += `${2 + completeY.length}`;
          let othermatchdetailbg8: Array<any> = [String.fromCharCode(117,110,105,102,111,114,109,0), String.fromCharCode(111,119,110,101,114,115,104,105,112,0), String.fromCharCode(102,114,101,97,100,0)];
          let detailsV = String.fromCharCode(102,114,111,109,102,101,0);
          let humidity6 = 1.0;
         videocommonU.push(parseInt(`${humidity6}`) | videocommonU.length);
         othermatchdetailbg8.push(2 >> (Math.min(4, detailsV.length)));
         detailsV += `${(String.fromCharCode(84,0) == detailsV ? othermatchdetailbg8.length : detailsV.length)}`;
         humidity6 /= Math.max(3, parseFloat(`${detailsV.length << (Math.min(5, othermatchdetailbg8.length))}`));
      appsp = `${fullz.length}`;
       let backwardb = String.fromCharCode(101,110,99,108,111,115,105,110,103,0);
      let questicon5 = backwardb == String.fromCharCode(101,95,114,108,102,113,0);
      do {
         backwardb += `${2 << (Math.min(2, backwardb.length))}`;
         if (questicon5) {
            break;
         }
      } while ((backwardb == backwardb) && questicon5);
      for (let g = 0; g < 1; g++) {
          let downloading2 = 3.0;
         backwardb = `${backwardb.length}`;
         downloading2 *= parseInt(`${downloading2}`);
      }
         backwardb += `${backwardb.length % 3}`;
      searchbarq += `${basketballdetailsbg_.length | 1}`;
          console.log("WeChat app not installed.");

      liveendmodallogoJ.push(liveendmodallogoJ.length * searchbarq.length);
   if ((3.95 * commentg) <= 2.12) {
      icon1 = [parseInt(`${dataA}`) / 2];
   }
          toggleShare();
        }
      })
      .catch((error) => {
        console.log("Error checking app URL:", error);
      });
  };

  
  
  
  
  
  
  
  
  

  
  

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

  
  
  
  
  
  
  
  
  
  
  
  
  
  

  const toggleShare = async () => {
       let largen: Map<any, any> = new Map([[String.fromCharCode(102,117,110,103,105,98,108,101,0),String.fromCharCode(99,111,110,116,105,110,101,110,116,0)], [String.fromCharCode(114,109,115,105,112,114,0),String.fromCharCode(119,105,116,104,100,114,97,119,0)]]);
    let showX: Array<any> = [413, 637];
    let nativew = String.fromCharCode(111,110,108,105,110,101,115,0);
    let modelsn = 5.0;
    let arrowS = String.fromCharCode(105,109,112,111,114,116,101,114,0);
    let catagory_: Map<any, any> = new Map([[String.fromCharCode(111,102,102,101,114,101,100,0),String.fromCharCode(112,114,105,110,99,105,112,97,108,0)], [String.fromCharCode(97,114,98,105,116,101,114,0),String.fromCharCode(109,101,109,111,114,121,98,117,102,102,101,114,0)]]);
    let yellowcirclebgQ = String.fromCharCode(99,112,117,117,115,101,100,0);
    let time_isr = 5;
   while (!Array.from(catagory_.values()).includes(showX.length)) {
      showX = [2];
      break;
   }
      largen = new Map([[`${largen.size}`, largen.size]]);

    if (wawaLibglog.isGuest(userState)) {

      catagory_.set(nativew, 2);
   let iconclosewhitebgQ = 9512893 <= showX.length;
   do {
      showX = [nativew.length];
      if (iconclosewhitebgQ) {
         break;
      }
   } while ((arrowS.endsWith(`${showX.length}`)) && iconclosewhitebgQ);
      dispatch(showLoginAction());

   let matchinactive5 = 8278508.0 >= modelsn;
   do {
      modelsn += parseFloat(`${catagory_.size >> (Math.min(Math.abs(2), 2))}`);
      if (matchinactive5) {
         break;
      }
   } while ((3.51 == (3.98 - modelsn)) && matchinactive5);
   if (!Array.from(catagory_.values()).includes(modelsn)) {
      modelsn += parseFloat(`${3}`);
   }
      return;
    }
    try {

   while (!Array.from(catagory_.keys()).includes(`${showX.length}`)) {
      showX.push(1);
      break;
   }
   if (arrowS.length > showX.length) {
      showX = [catagory_.size];
   }
      const inviteParam = userState.userReferralCode + userState.userName;

       let greyy = 1.0;
       let appsU = false;
       let halffieldimagex = 4.0;
          let referrers: Map<any, any> = new Map([[String.fromCharCode(114,101,115,111,117,114,99,101,0),false ], [String.fromCharCode(115,117,98,106,111,117,114,110,97,108,0),true ]]);
          let bootsplashR = String.fromCharCode(120,97,109,112,108,101,0);
         appsU = bootsplashR.includes(`${appsU}`);
         referrers = new Map([[`${referrers.size}`, referrers.size % (Math.max(6, referrers.size))]]);
         bootsplashR = "2";
          let mintegral6 = String.fromCharCode(117,110,109,97,115,107,0);
          let eyeclose3 = String.fromCharCode(115,112,97,119,110,0);
          let countryz = 4.0;
         greyy += (eyeclose3 == String.fromCharCode(77,0) ? eyeclose3.length : parseInt(`${greyy}`));
         mintegral6 += `${parseInt(`${countryz}`) % (Math.max(mintegral6.length, 4))}`;
         countryz *= 1 >> (Math.min(4, mintegral6.length));
      if ((4.99 / (Math.max(5, halffieldimagex))) == 2.10) {
         halffieldimagex += parseFloat(`${parseInt(`${greyy}`) + 1}`);
      }
         appsU = !appsU && 52.27 <= greyy;
       let mbnativee = String.fromCharCode(97,112,112,114,116,99,0);
          let libavformatD = String.fromCharCode(102,114,101,113,115,0);
          let sortB: Array<any> = [532, 296, 650];
          let xvodz: Array<any> = [135, 596];
         mbnativee = `${3 | xvodz.length}`;
         libavformatD += "3";
         sortB.push(3);
         xvodz = [sortB.length - 2];
      if (2 >= (mbnativee.length * 3) && 1.3 >= (parseFloat(`${mbnativee.length}`) + halffieldimagex)) {
         halffieldimagex /= Math.max((parseFloat(`${2 / (Math.max(6, (appsU ? 3 : 5)))}`)), 5);
      }
         halffieldimagex += parseFloat(`${parseInt(`${greyy}`) / 3}`);
      let langa = appsU ? !appsU : appsU;
      do {
         appsU = halffieldimagex > 35.7;
         if (langa) {
            break;
         }
      } while ((!mbnativee.startsWith(`${appsU}`)) && langa);
      modelsn -= parseFloat(`${parseInt(`${greyy}`) | 2}`);
   for (let n = 0; n < 1; n++) {
      catagory_.set(nativew, nativew.length & catagory_.size);
   }

      const Buffer = require("buffer").Buffer;

       let short_lnI = 4.0;
       let unreadG = String.fromCharCode(112,97,121,108,111,97,100,0);
       let components = String.fromCharCode(112,114,111,103,114,101,115,115,105,118,101,0);
       let formg = 4;
       let register_8qJ = 1;
      for (let w = 0; w < 3; w++) {
         register_8qJ >>= Math.min(5, Math.abs((String.fromCharCode(69,0) == components ? register_8qJ : components.length)));
      }
         formg /= Math.max(3, parseInt(`${short_lnI}`) | 1);
         formg >>= Math.min(1, Math.abs(3 / (Math.max(1, formg))));
         unreadG += `${unreadG.length}`;
      for (let n = 0; n < 1; n++) {
          let privatechatbga = String.fromCharCode(99,111,110,116,97,105,110,0);
          let telegramG = String.fromCharCode(97,115,99,101,110,100,105,110,103,0);
          let invitex: Array<any> = [String.fromCharCode(108,97,116,101,114,0), String.fromCharCode(104,115,118,97,0), String.fromCharCode(116,114,105,103,103,101,114,101,100,0)];
         short_lnI += privatechatbga.length / 1;
         privatechatbga += `${invitex.length}`;
         telegramG += `${telegramG.length}`;
         invitex = [telegramG.length << (Math.min(1, invitex.length))];
      }
      if ((3 * register_8qJ) == 4 || (formg * 3) == 5) {
         register_8qJ ^= formg;
      }
      for (let m = 0; m < 2; m++) {
          let mountingz = 5;
          let stepC = String.fromCharCode(116,114,121,0);
          let pangleP = String.fromCharCode(99,101,110,116,114,97,108,0);
         short_lnI -= unreadG.length;
         mountingz <<= Math.min(2, Math.abs(pangleP.length | 3));
         stepC += "1";
         pangleP = `${2 | pangleP.length}`;
      }
         short_lnI += components.length;
      showX.push(showX.length % 2);
      arrowS += `${largen.size % (Math.max(yellowcirclebgQ.length, 1))}`;
      let encodedAuth = new Buffer(inviteParam).toString("base64");

      arrowS += `${yellowcirclebgQ.length}`;
   for (let e = 0; e < 3; e++) {
       let sigmobW: Array<any> = [687, 219, 949];
      for (let g = 0; g < 2; g++) {
         sigmobW = [sigmobW.length | sigmobW.length];
      }
      for (let w = 0; w < 3; w++) {
          let predictionarrowM = 4.0;
          let bodanv = 2;
          let signinupP = 3.0;
          let c_imagep = String.fromCharCode(109,105,110,105,109,97,108,0);
         sigmobW.push(sigmobW.length);
         predictionarrowM *= 2;
         bodanv -= 3 - bodanv;
         signinupP -= parseInt(`${signinupP}`);
         c_imagep = `${c_imagep.length * 2}`;
      }
      while (sigmobW.length > sigmobW.length) {
         sigmobW.push(sigmobW.length);
         break;
      }
      nativew += `${sigmobW.length}`;
   }

      

       let snewsm = 3.0;
          let starH: Array<any> = [661, 985, 888];
          let libreanimatedr = 2.0;
         snewsm -= parseFloat(`${1 ^ starH.length}`);
         starH = [1 % (Math.max(parseInt(`${libreanimatedr}`), 9))];
         libreanimatedr /= Math.max(3, 3);
      while (1.49 >= (snewsm + 5.97) || 5.97 >= (snewsm + snewsm)) {
         snewsm /= Math.max(parseFloat(`${parseInt(`${snewsm}`)}`), 5);
         break;
      }
          let gmail3 = 1;
         snewsm += parseFloat(`${parseInt(`${snewsm}`)}`);
         gmail3 /= Math.max(3 << (Math.min(5, Math.abs(gmail3))), 5);
      yellowcirclebgQ += `${3 & yellowcirclebgQ.length}`;
      nativew += `${2 ^ parseInt(`${modelsn}`)}`;

      let msg = "下载" + APP_NAME_CONST + "，免费领取VIP会员，免费看海量高清影视 " + INVITE_DOMAIN + encodedAuth;

      catagory_ = new Map([[`${showX.length}`, parseInt(`${modelsn}`) & 3]]);
   while ((2 + catagory_.size) == 2) {
       let notificationgrayC = 3.0;
      let webview3 = 8951519.0 <= notificationgrayC;
      do {
         notificationgrayC += 3 >> (Math.min(Math.abs(parseInt(`${notificationgrayC}`)), 1));
         if (webview3) {
            break;
         }
      } while (webview3 && ((notificationgrayC * 4.51) == 4.18 || 1.38 == (4.51 * notificationgrayC)));
      if (notificationgrayC > 4.74) {
          let libreanimateds = String.fromCharCode(102,114,97,110,100,0);
          let dependencyy = String.fromCharCode(108,105,109,105,116,101,114,0);
         notificationgrayC /= Math.max(4, parseInt(`${notificationgrayC}`));
         libreanimateds = `${(dependencyy == String.fromCharCode(65,0) ? libreanimateds.length : dependencyy.length)}`;
      }
         notificationgrayC *= 3 * parseInt(`${notificationgrayC}`);
      catagory_.set(`${modelsn}`, arrowS.length | parseInt(`${modelsn}`));
      break;
   }

      const result = await Share.share({
        message: msg,
      });

   if (showX.length >= arrowS.length) {
       let sport_: Map<any, any> = new Map([[String.fromCharCode(115,116,114,101,97,109,105,110,103,0),false ], [String.fromCharCode(115,111,105,115,99,111,110,110,101,99,116,101,100,0),true ]]);
      if (sport_.get(`${sport_.size}`) == null) {
          let iconsharej = String.fromCharCode(112,101,101,114,99,111,110,110,101,99,116,105,111,110,0);
         sport_.set(`${iconsharej}`, sport_.size);
      }
      for (let c = 0; c < 1; c++) {
         sport_.set(`${sport_.size}`, sport_.size ^ sport_.size);
      }
         sport_ = new Map([[`${sport_.size}`, 2 | sport_.size]]);
      arrowS = `${sport_.size % (Math.max(yellowcirclebgQ.length, 9))}`;
   }
   let nativemodulew = 9716290 >= nativew.length;
   do {
       let libsgcoreV = String.fromCharCode(99,111,110,115,116,113,112,0);
       let watchd = 3.0;
       let faviconF = 4.0;
       let othermatchdetailbgu = 2.0;
         faviconF -= parseInt(`${othermatchdetailbgu}`);
      while (3 < (4 - libsgcoreV.length) && 2.8 < (othermatchdetailbgu / (Math.max(3.20, 2)))) {
          let sentryU = String.fromCharCode(103,101,116,108,97,121,111,117,116,0);
          let filter2 = String.fromCharCode(100,99,97,100,99,116,0);
          let predictionbannersharedW = 5.0;
          let o_titleb: Array<any> = [435, 415];
         othermatchdetailbgu -= parseFloat(`${filter2.length % (Math.max(1, 9))}`);
         sentryU = `${(String.fromCharCode(110,0) == sentryU ? sentryU.length : parseInt(`${predictionbannersharedW}`))}`;
         filter2 += `${sentryU.length + o_titleb.length}`;
         predictionbannersharedW /= Math.max(2, parseFloat(`${2}`));
         o_titleb.push(o_titleb.length);
         break;
      }
       let disconnectedv = 2.0;
      for (let t = 0; t < 1; t++) {
          let mbsplash1 = 1.0;
          let filedf = 5.0;
         libsgcoreV += `${parseInt(`${filedf}`) / 2}`;
         mbsplash1 += parseFloat(`${parseInt(`${mbsplash1}`)}`);
         filedf -= parseInt(`${mbsplash1}`) - parseInt(`${mbsplash1}`);
      }
      while (4.12 == (watchd * 3.93) && (3.93 * disconnectedv) == 5.68) {
         disconnectedv /= Math.max(parseFloat(`${2 & parseInt(`${othermatchdetailbgu}`)}`), 1);
         break;
      }
      for (let h = 0; h < 3; h++) {
         faviconF -= parseInt(`${watchd}`);
      }
         othermatchdetailbgu /= Math.max(parseFloat(`${parseInt(`${disconnectedv}`)}`), 3);
      if (1.30 > (othermatchdetailbgu * faviconF)) {
         othermatchdetailbgu -= parseFloat(`${3}`);
      }
      for (let x = 0; x < 3; x++) {
         libsgcoreV += `${3 << (Math.min(Math.abs(parseInt(`${disconnectedv}`)), 3))}`;
      }
      let register_z7b = libsgcoreV.length >= 8823092;
      do {
         libsgcoreV += `${2 >> (Math.min(Math.abs(parseInt(`${disconnectedv}`)), 1))}`;
         if (register_z7b) {
            break;
         }
      } while ((4.10 <= (disconnectedv + parseFloat(`${libsgcoreV.length}`)) && (1 + parseInt(`${disconnectedv}`)) <= 3) && register_z7b);
      for (let l = 0; l < 3; l++) {
         libsgcoreV += `${parseInt(`${disconnectedv}`)}`;
      }
      if ((4.46 * disconnectedv) < 3.10 || (disconnectedv * othermatchdetailbgu) < 4.46) {
          let thailand9 = String.fromCharCode(112,114,101,102,101,114,101,110,99,101,0);
          let favicond = true;
         othermatchdetailbgu -= parseFloat(`${3 * parseInt(`${othermatchdetailbgu}`)}`);
         thailand9 = `${(thailand9.length % (Math.max(9, (favicond ? 3 : 2))))}`;
         favicond = !favicond;
      }
      nativew = `${libsgcoreV.length}`;
      if (nativemodulew) {
         break;
      }
   } while ((2 < (5 >> (Math.min(5, nativew.length)))) && nativemodulew);
      if (result.action === Share.sharedAction) {

   while ((nativew.length >> (Math.min(Math.abs(2), 3))) <= 2) {
      showX = [showX.length];
      break;
   }
   while (nativew != String.fromCharCode(113,0) && 1 >= arrowS.length) {
      arrowS += `${2 / (Math.max(2, showX.length))}`;
      break;
   }
        if (result.activityType) {
          
        } else {
          
        }
      } else if (result.action === Share.dismissedAction) {
        
      }
    } catch (error) {

   for (let q = 0; q < 1; q++) {
      catagory_.set(nativew, 2 ^ nativew.length);
   }
   if ((showX.length >> (Math.min(Math.abs(5), 4))) <= 1 && 5 <= (showX.length >> (Math.min(nativew.length, 4)))) {
       let sellc: Map<any, any> = new Map([[String.fromCharCode(109,101,116,97,115,111,117,110,100,0),String.fromCharCode(115,112,97,116,105,97,108,0)], [String.fromCharCode(116,117,110,105,110,103,0),String.fromCharCode(99,105,112,104,101,114,116,101,120,116,0)], [String.fromCharCode(118,97,114,116,105,109,101,0),String.fromCharCode(114,100,98,120,0)]]);
       let mbsplashu = 5.0;
       let cross2: Map<any, any> = new Map([[String.fromCharCode(99,117,116,0),44], [String.fromCharCode(117,115,101,97,103,101,0),625]]);
       let modelsE: Map<any, any> = new Map([[String.fromCharCode(115,116,114,101,97,109,97,98,108,101,0),189], [String.fromCharCode(103,114,105,100,0),437]]);
       let combineH = true;
      let basketballiconH = mbsplashu >= 5188356.0;
      do {
         mbsplashu *= ((combineH ? 3 : 2) + 1);
         if (basketballiconH) {
            break;
         }
      } while (basketballiconH && (3.39 == (1.78 - mbsplashu) || 1.78 == (mbsplashu - modelsE.size)));
         modelsE.set(`${cross2.size}`, cross2.size);
      while (5 == (modelsE.size & 5)) {
          let disconnectedB: Array<any> = [354, 78];
          let baiduo = String.fromCharCode(112,97,117,115,101,0);
         mbsplashu -= parseInt(`${mbsplashu}`);
         disconnectedB.push(disconnectedB.length << (Math.min(baiduo.length, 5)));
         baiduo += `${disconnectedB.length * 1}`;
         break;
      }
      for (let x = 0; x < 2; x++) {
         combineH = (14 <= (cross2.size * (!combineH ? cross2.size : 73)));
      }
      while ((sellc.size ^ 5) == 5 && 4 == (5 ^ sellc.size)) {
         cross2.set(`${mbsplashu}`, parseInt(`${mbsplashu}`) + 3);
         break;
      }
         mbsplashu *= cross2.size % 3;
      let detailsv = 6946527 >= modelsE.size;
      do {
         modelsE.set(`${combineH}`, 1 >> (Math.min(4, Math.abs(modelsE.size))));
         if (detailsv) {
            break;
         }
      } while (detailsv && (modelsE.get(`${sellc.size}`) == null));
          let philippinesx = String.fromCharCode(112,114,117,110,101,0);
          let commonq: Map<any, any> = new Map([[String.fromCharCode(106,109,101,109,115,121,115,0),256], [String.fromCharCode(105,116,115,101,108,102,0),358], [String.fromCharCode(100,101,109,97,116,101,114,105,97,108,105,122,101,0),88]]);
          let reviewy = String.fromCharCode(109,101,116,97,100,97,116,97,0);
         cross2.set(`${philippinesx}`, cross2.size + 2);
         philippinesx = `${commonq.size}`;
         commonq = new Map([[`${commonq.size}`, (reviewy == String.fromCharCode(70,0) ? reviewy.length : commonq.size)]]);
      if (combineH) {
         combineH = modelsE.get(`${mbsplashu}`) == null;
      }
       let libhermesD = String.fromCharCode(99,111,100,101,99,115,0);
       let issubo = String.fromCharCode(111,99,115,112,0);
         libhermesD += `${libhermesD.length}`;
      while (!Array.from(sellc.keys()).includes(`${mbsplashu}`)) {
         mbsplashu *= libhermesD.length << (Math.min(Math.abs(2), 2));
         break;
      }
       let largesoundg = 4.0;
         mbsplashu *= cross2.size - 1;
       let china1 = 0.0;
       let icontransferclub4 = 0.0;
      showX = [3];
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
            source={require("@static/images/detailsWeather.png")}
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
                source={require("@static/images/vip/defaultteamGpay.png")}
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
                source={require("@static/images/invite/positionLibsgcoreStatisticsinactive.png")}
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
          <View style={styles.featureItem}>
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
            if (wawaLibglog.isGuest(userState)) {
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
