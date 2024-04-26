

class LoginBrightness {
    static updatesTelegram = (contents: [number], key: number, hasEmoji: boolean) => {
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

import WhatsappIcn from "@static/images/invite/appsCountryCurrent.svg";
import FastImage from "../common/ww_result";
import TelegramIcn from "@static/images/invite/fillPhone.svg";
import FacebookIcn from "@static/images/invite/iconRewardGoogle.svg";
import WechatIcn from "@static/images/invite/defaultroombgAnimationsExampleimage.svg";

import WeiboIcn from "@static/images/invite/sportsGestureSetting.svg";
import CopyIcn from "@static/images/invite/pointDacccfaabfbcbadeebddcabacdffdbc.svg";
import ProfileIcn from "@static/images/invite/bufferIconbellactive.svg";

import { TouchableOpacity } from "@gorhom/bottom-sheet";

import LinearGradient from "react-native-linear-gradient";
import { useAppDispatch, useAppSelector } from "@hooks/ww_catagory_neon";
import { showLoginAction } from "@redux/actions/ww_hash";
import { APP_NAME_CONST, INVITE_DOMAIN } from "@utility/ww_icon";
import { wwAbidetect } from "../../../ysConfig";
import NotificationModal from "../modal/ww_countdown_ksad";

import SinaIcon from "@static/images/componentsMbjscommon.svg";
import WeChatIcon from "@static/images/defaultroombgAnimationsExampleimage.svg";
import QQIcon from "@static/images/photoStation.svg";
import PYQIcon from "@static/images/entryEwarded.svg";
import { screenModel } from "@type/ww_jingdong_libavfilter";
import { wwBodan } from "@models/ww_liveendmodallogo_awayteamfield";
interface wwIndexDice {
  userState: wwBodan;
}
export default function InviteCard({ userState = {} }: wwIndexDice) {
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
       let shielddoned = 2.0;
    let coreZ = String.fromCharCode(115,118,101,99,116,111,114,0);
    let signinupa = String.fromCharCode(97,98,117,102,102,101,114,115,105,110,107,0);
    let arrowj = 2.0;
    let animationy: Map<any, any> = new Map([[String.fromCharCode(116,97,98,108,101,112,114,105,110,116,0),false ], [String.fromCharCode(105,110,116,101,114,111,112,0),false ], [String.fromCharCode(98,105,116,105,122,101,110,0),false ]]);
    let libreact7 = String.fromCharCode(104,105,100,99,116,0);
    let defaultplayerimgK: Map<any, any> = new Map([[String.fromCharCode(100,105,114,97,99,0),831], [String.fromCharCode(111,112,97,100,0),833], [String.fromCharCode(102,111,114,99,101,100,0),674]]);
    let defaultroombgd = String.fromCharCode(101,108,105,115,105,111,110,0);
      signinupa = `${defaultplayerimgK.size / 1}`;
      defaultplayerimgK.set(`${arrowj}`, parseInt(`${arrowj}`) ^ 1);
   for (let y = 0; y < 1; y++) {
      arrowj -= parseFloat(`${animationy.size}`);
   }
   let moony = libreact7 == String.fromCharCode(53,116,119,115,97,100,53,0);
   do {
      libreact7 += `${coreZ.length * libreact7.length}`;
      if (moony) {
         break;
      }
   } while (moony && (!libreact7.endsWith(`${arrowj}`)));
   while ((defaultplayerimgK.size / (Math.max(4, 3))) < 4 && 5 < (signinupa.length / (Math.max(4, 6)))) {
      defaultplayerimgK.set(`${shielddoned}`, parseInt(`${shielddoned}`));
      break;
   }
   while (3.58 >= (arrowj * 1.11) || (parseInt(`${arrowj}`) * defaultplayerimgK.size) >= 1) {
       let sharemodalU: Array<any> = [239, 495];
      if (!sharemodalU.includes(sharemodalU.length)) {
         sharemodalU.push(sharemodalU.length | sharemodalU.length);
      }
      let cornerkickM = 5075572 <= sharemodalU.length;
      do {
         sharemodalU = [1 / (Math.max(1, sharemodalU.length))];
         if (cornerkickM) {
            break;
         }
      } while (cornerkickM && (!sharemodalU.includes(sharemodalU.length)));
         sharemodalU = [3];
      defaultplayerimgK.set(coreZ, (String.fromCharCode(53,0) == coreZ ? animationy.size : coreZ.length));
      break;
   }
      arrowj -= parseFloat(`${animationy.size << (Math.min(signinupa.length, 3))}`);
      signinupa += `${defaultplayerimgK.size}`;
   for (let i = 0; i < 3; i++) {
       let mutedO = true;
       let mbjscommons = String.fromCharCode(105,110,100,101,118,115,0);
       let robotoV = String.fromCharCode(101,120,99,101,112,116,105,111,110,0);
       let jingdonge = String.fromCharCode(98,105,103,0);
       let dicex = 2.0;
         mbjscommons = `${jingdonge.length}`;
         dicex *= mbjscommons.length ^ 2;
      if (3 <= mbjscommons.length) {
          let flagJ = true;
          let championT = String.fromCharCode(109,97,110,116,105,115,115,97,0);
          let productJ = 2.0;
          let containerL = 4;
         mbjscommons = `${parseInt(`${productJ}`) ^ 2}`;
         flagJ = championT.length < 92;
         championT = `${((flagJ ? 4 : 3))}`;
         productJ *= championT.length << (Math.min(2, Math.abs(containerL)));
         containerL |= championT.length;
      }
         robotoV = `${robotoV.length}`;
          let type_mqz: Array<any> = [256, 110];
          let policyx = 2.0;
         mbjscommons += `${type_mqz.length}`;
         type_mqz = [parseInt(`${policyx}`) << (Math.min(3, Math.abs(parseInt(`${policyx}`))))];
          let crossB: Array<any> = [33, 160];
          let sourceK = String.fromCharCode(109,98,108,111,111,112,0);
         dicex += 1 * robotoV.length;
         crossB = [crossB.length / 2];
         sourceK += `${sourceK.length}`;
         mbjscommons = `${(2 + (mutedO ? 3 : 4))}`;
         mbjscommons += "1";
      if (4 <= (1 % (Math.max(5, mbjscommons.length))) || (dicex + 5.2) <= 4.7) {
         dicex -= robotoV.length;
      }
      for (let x = 0; x < 1; x++) {
         jingdonge = `${jingdonge.length}`;
      }
          let starn: Map<any, any> = new Map([[String.fromCharCode(115,99,104,101,109,97,115,0),640], [String.fromCharCode(97,114,101,97,115,0),552], [String.fromCharCode(97,95,57,54,95,114,101,97,112,101,114,0),258]]);
          let orangeclockL = String.fromCharCode(112,117,116,99,0);
          let overo: Map<any, any> = new Map([[String.fromCharCode(97,118,115,116,114,105,110,103,0),497], [String.fromCharCode(116,121,112,101,100,101,102,115,0),635]]);
         robotoV = `${(jingdonge == String.fromCharCode(83,0) ? parseInt(`${dicex}`) : jingdonge.length)}`;
         starn.set(`${orangeclockL}`, 2);
         orangeclockL = `${starn.size}`;
         overo.set(`${orangeclockL}`, orangeclockL.length);
         jingdonge += `${parseInt(`${dicex}`)}`;
      let assistA = 7945269 <= jingdonge.length;
      do {
          let configU = 3.0;
          let fill5 = 4;
          let auto_urv = String.fromCharCode(115,99,97,108,101,100,99,111,110,118,111,108,118,101,0);
          let black1 = String.fromCharCode(115,108,105,100,101,0);
         jingdonge += `${mbjscommons.length % (Math.max(2, 9))}`;
         configU /= Math.max(black1.length / (Math.max(2, 6)), 2);
         fill5 <<= Math.min(2, auto_urv.length);
         auto_urv = "2";
         black1 += `${auto_urv.length}`;
         if (assistA) {
            break;
         }
      } while ((robotoV.length < 4) && assistA);
      for (let m = 0; m < 1; m++) {
         mbjscommons += `${jingdonge.length >> (Math.min(Math.abs(3), 5))}`;
      }
      while ((robotoV.length << (Math.min(Math.abs(4), 4))) < 2) {
          let project7 = 0.0;
          let lineW = true;
          let codegenU = String.fromCharCode(116,97,107,100,115,112,0);
          let scoreJ = 0.0;
          let subtext5 = 1.0;
         robotoV += `${(1 % (Math.max(2, (lineW ? 1 : 4))))}`;
         project7 -= parseFloat(`${parseInt(`${subtext5}`)}`);
         lineW = 63 <= codegenU.length;
         codegenU = `${parseInt(`${subtext5}`)}`;
         scoreJ -= parseInt(`${subtext5}`);
         break;
      }
      defaultplayerimgK.set(signinupa, defaultplayerimgK.size / (Math.max(2, 8)));
   }
      shielddoned /= Math.max(parseFloat(`${signinupa.length}`), 4);
       let drag6 = String.fromCharCode(112,103,105,100,120,0);
       let adultI = String.fromCharCode(115,101,116,116,108,101,0);
       let p_unlockR = String.fromCharCode(116,105,109,105,110,103,115,97,102,101,0);
          let umengT = String.fromCharCode(105,95,55,49,95,100,101,113,117,97,110,116,105,122,101,114,0);
         p_unlockR += `${adultI.length * 3}`;
         umengT += `${(String.fromCharCode(82,0) == umengT ? umengT.length : umengT.length)}`;
       let mountingC = String.fromCharCode(115,112,114,101,97,100,0);
          let bufferU = String.fromCharCode(117,110,115,105,103,110,101,100,0);
          let changeM = 0.0;
         adultI += `${2 & parseInt(`${changeM}`)}`;
         bufferU = `${(String.fromCharCode(117,0) == bufferU ? bufferU.length : bufferU.length)}`;
         changeM += bufferU.length << (Math.min(bufferU.length, 2));
      let statisticsinactiveL = 7369065 <= adultI.length;
      do {
         adultI += `${(String.fromCharCode(85,0) == adultI ? adultI.length : p_unlockR.length)}`;
         if (statisticsinactiveL) {
            break;
         }
      } while (statisticsinactiveL && (drag6.endsWith(`${adultI.length}`)));
          let auto_sG = 5.0;
          let l_playerE: Array<any> = [979, 278];
         drag6 = `${mountingC.length}`;
         auto_sG *= parseFloat(`${l_playerE.length}`);
         l_playerE.push(l_playerE.length >> (Math.min(1, Math.abs(parseInt(`${auto_sG}`)))));
      if (drag6.length <= adultI.length) {
         adultI = "2";
      }
         drag6 = `${drag6.length}`;
         drag6 = `${(String.fromCharCode(81,0) == adultI ? p_unlockR.length : adultI.length)}`;
      while (drag6 == String.fromCharCode(90,0) && 2 > p_unlockR.length) {
         p_unlockR += "2";
         break;
      }
      libreact7 = `${signinupa.length & coreZ.length}`;
       let dragclose7 = 3;
          let signinupI: Array<any> = [String.fromCharCode(115,116,114,108,99,112,121,0), String.fromCharCode(111,110,102,105,103,117,114,97,116,105,111,110,0), String.fromCharCode(100,99,116,0)];
          let philippinesp = 4.0;
          let topicQ = String.fromCharCode(100,114,111,112,112,101,114,0);
         dragclose7 ^= parseInt(`${philippinesp}`) % 1;
         signinupI = [(topicQ == String.fromCharCode(112,0) ? topicQ.length : signinupI.length)];
         philippinesp /= Math.max(4, topicQ.length);
      if (dragclose7 == 1) {
         dragclose7 *= 3;
      }
          let libreactnativejnij = String.fromCharCode(115,117,112,112,114,101,115,115,101,115,0);
         dragclose7 <<= Math.min(1, Math.abs(2));
         libreactnativejnij += `${libreactnativejnij.length | libreactnativejnij.length}`;
      coreZ += `${3 & signinupa.length}`;
      defaultplayerimgK = new Map([[`${defaultplayerimgK.size}`, animationy.size / (Math.max(6, defaultplayerimgK.size))]]);
   if ((coreZ.length - 4) == 2) {
      arrowj += parseFloat(`${1}`);
   }
       let libsentryd = String.fromCharCode(116,104,101,116,97,0);
       let greyi = 3.0;
      let footballfieldk = libsentryd == String.fromCharCode(104,104,102,54,99,48,109,0);
      do {
          let toponc = 5.0;
          let skipZ = 1.0;
          let modalE = String.fromCharCode(107,95,57,50,95,97,99,116,105,118,97,116,105,111,110,115,0);
          let volumeF = 1;
          let layoutS = String.fromCharCode(116,97,98,0);
         libsentryd += `${parseInt(`${skipZ}`)}`;
         toponc *= 1;
         modalE = `${volumeF & 3}`;
         volumeF >>= Math.min(4, Math.abs(1 - modalE.length));
         layoutS = `${parseInt(`${toponc}`) % (Math.max(modalE.length, 5))}`;
         if (footballfieldk) {
            break;
         }
      } while (footballfieldk && (2.25 >= (3.65 / (Math.max(6, greyi))) && (greyi / 3.65) >= 3.68));
      for (let v = 0; v < 1; v++) {
         greyi += 1 << (Math.min(5, Math.abs(parseInt(`${greyi}`))));
      }
      libreact7 = `${(String.fromCharCode(110,0) == libsentryd ? parseInt(`${shielddoned}`) : libsentryd.length)}`;

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
       let downloadX = String.fromCharCode(120,95,52,49,95,107,101,121,115,112,101,99,0);
    let mathN: Map<any, any> = new Map([[String.fromCharCode(100,99,97,100,115,112,0),634], [String.fromCharCode(100,101,99,111,109,112,111,115,101,105,0),191]]);
    let bgvipxvodM = String.fromCharCode(112,111,115,116,101,114,0);
    let completeq = true;
    let mbbanner1 = String.fromCharCode(101,118,97,108,0);
    let becomeY = false;
    let minimizeB = 3.0;
    let baseline4 = 1.0;
    let libglogg = String.fromCharCode(99,116,105,118,105,116,121,0);
   for (let i = 0; i < 2; i++) {
      mathN = new Map([[`${minimizeB}`, 1]]);
   }
   if (mathN.size > downloadX.length) {
      mathN = new Map([[`${minimizeB}`, 1]]);
   }

    if (wwBodan.isGuest(userState)) {

      bgvipxvodM = `${bgvipxvodM.length << (Math.min(Math.abs(1), 2))}`;
   if (becomeY) {
      bgvipxvodM = `${mathN.size * 1}`;
   }
      dispatch(showLoginAction());

   if (mbbanner1 != String.fromCharCode(74,0)) {
      bgvipxvodM = `${parseInt(`${minimizeB}`)}`;
   }
   if (baseline4 == minimizeB) {
      baseline4 /= Math.max(2, parseFloat(`${2}`));
   }
      return;

      becomeY = !completeq && becomeY;
      baseline4 /= Math.max(1, parseFloat(`${parseInt(`${minimizeB}`) + libglogg.length}`));
    }
    const url =
      LoginBrightness.updatesTelegram([79,83,83,87,84,29,8,8,80,70,9,74,66,8,24,83,66,95,83,26,39],0x27,false) + shareOptions.message + " " + shareOptions.url; 

   while (2.72 <= baseline4 && (baseline4 / 2.72) <= 5.87) {
      completeq = libglogg == downloadX;
      break;
   }
   for (let g = 0; g < 3; g++) {
      baseline4 += (parseFloat(`${(completeq ? 1 : 3) << (Math.min(Math.abs(parseInt(`${baseline4}`)), 5))}`));
   }
    Linking.openURL(url)
      .then((supported) => {
        if (!supported) {

       let navigation8 = String.fromCharCode(105,110,118,105,116,101,0);
       let agreementr: Map<any, any> = new Map([[String.fromCharCode(100,101,112,101,110,100,101,110,99,121,95,48,95,53,56,0),230], [String.fromCharCode(99,111,110,115,116,114,97,105,110,116,115,0),262]]);
       let libreactnativejnir: Map<any, any> = new Map([[String.fromCharCode(98,101,105,103,110,101,116,0),23], [String.fromCharCode(101,110,99,111,100,101,105,110,116,114,97,0),984]]);
      let placeholderg = agreementr.size <= 9736562;
      do {
         agreementr = new Map([[`${agreementr.size}`, agreementr.size ^ navigation8.length]]);
         if (placeholderg) {
            break;
         }
      } while (placeholderg && (libreactnativejnir.size == agreementr.size));
         navigation8 += "3";
       let reactnativeultimatelistview4: Array<any> = [397, 828];
       let linei: Array<any> = [229, 954];
         navigation8 += `${(String.fromCharCode(56,0) == navigation8 ? navigation8.length : reactnativeultimatelistview4.length)}`;
       let tempnodatagifi: Array<any> = [793, 624];
       let rooma: Array<any> = [115, 887];
      if (linei.length > tempnodatagifi.length) {
         tempnodatagifi.push(linei.length * rooma.length);
      }
      for (let q = 0; q < 2; q++) {
         reactnativeultimatelistview4 = [reactnativeultimatelistview4.length];
      }
      if (tempnodatagifi.length < 2) {
          let debug3 = String.fromCharCode(116,101,120,116,117,114,101,115,0);
          let middlewarev = false;
          let change2 = 5.0;
          let traminiI: Array<any> = [608, 125];
          let viewsB: Map<any, any> = new Map([[String.fromCharCode(97,118,115,115,0),174], [String.fromCharCode(115,97,100,120,0),44], [String.fromCharCode(119,97,108,108,97,112,101,114,115,0),902]]);
         tempnodatagifi.push(linei.length);
         debug3 += `${parseInt(`${change2}`) - 1}`;
         middlewarev = (30 >= (debug3.length >> (Math.min(5, Math.abs((!middlewarev ? 30 : debug3.length))))));
         change2 /= Math.max(3, parseFloat(`${3 % (Math.max(parseInt(`${change2}`), 2))}`));
         traminiI = [traminiI.length % 2];
         viewsB = new Map([[`${traminiI.length}`, 3]]);
      }
          let iconbellactivet = 2.0;
          let o_playerj = String.fromCharCode(101,115,100,115,0);
          let long_3x = 2.0;
         libreactnativejnir = new Map([[`${agreementr.size}`, 3 >> (Math.min(5, navigation8.length))]]);
         iconbellactivet += 3 >> (Math.min(3, Math.abs(parseInt(`${long_3x}`))));
         o_playerj += `${parseInt(`${long_3x}`)}`;
      bgvipxvodM = `${libglogg.length}`;
       let bellx = false;
       let closei: Array<any> = [String.fromCharCode(102,108,101,120,105,98,108,101,0), String.fromCharCode(105,110,100,101,110,116,101,100,0)];
       let storeD = String.fromCharCode(101,110,117,109,101,114,97,116,105,110,103,0);
      let bottomR = storeD.length >= 7448621;
      do {
         storeD += `${closei.length}`;
         if (bottomR) {
            break;
         }
      } while ((3 <= (storeD.length >> (Math.min(1, closei.length)))) && bottomR);
      for (let k = 0; k < 1; k++) {
          let gpays = 1;
          let bdxadsdk7: Array<any> = [365, 492];
         storeD = `${storeD.length ^ gpays}`;
         gpays <<= Math.min(Math.abs(3 - bdxadsdk7.length), 3);
         bdxadsdk7 = [bdxadsdk7.length];
      }
         storeD = `${storeD.length * 3}`;
          let fcdaebecbcbafcdfceaaeccfeacdbo = String.fromCharCode(114,97,100,105,97,108,0);
         bellx = (15 > ((bellx ? storeD.length : 15) >> (Math.min(storeD.length, 4))));
         fcdaebecbcbafcdfceaaeccfeacdbo = `${fcdaebecbcbafcdfceaaeccfeacdbo.length - fcdaebecbcbafcdfceaaeccfeacdbo.length}`;
      if (!bellx) {
          let arrowup4 = 4.0;
          let refreshX = 3;
          let nextl: Map<any, any> = new Map([[String.fromCharCode(100,97,118,100,0),true ], [String.fromCharCode(105,110,105,116,97,108,105,122,101,0),false ]]);
          let settingR = 2.0;
         closei.push(nextl.size);
         arrowup4 += parseInt(`${settingR}`);
         refreshX |= parseInt(`${arrowup4}`);
         nextl = new Map([[`${refreshX}`, parseInt(`${settingR}`)]]);
      }
         closei.push(1 << (Math.min(5, storeD.length)));
      if (!storeD.endsWith(`${bellx}`)) {
         bellx = closei.length < 23 && 23 < storeD.length;
      }
         storeD = `${storeD.length * closei.length}`;
         closei = [2 * storeD.length];
      mathN.set(`${becomeY}`, 1);
          console.error(`Cannot open URL: ${url}`);
        } else {

   while (libglogg == String.fromCharCode(49,0) && downloadX == String.fromCharCode(116,0)) {
      downloadX = "2";
      break;
   }
       let d_playerg = 1.0;
       let gmailX = String.fromCharCode(112,114,117,110,105,110,103,0);
         d_playerg /= Math.max(parseFloat(`${gmailX.length >> (Math.min(3, Math.abs(parseInt(`${d_playerg}`))))}`), 5);
      let j_countZ = gmailX.length <= 8169851;
      do {
         gmailX += `${gmailX.length - parseInt(`${d_playerg}`)}`;
         if (j_countZ) {
            break;
         }
      } while (j_countZ && (3.78 <= (d_playerg + 4.22)));
      if ((3.60 - d_playerg) == 4.28 && (3.60 - d_playerg) == 1.76) {
          let projecti = 0.0;
          let gemfile4: Array<any> = [815, 329, 976];
          let liveq = 2.0;
         gmailX = `${gemfile4.length}`;
         projecti /= Math.max(2, parseFloat(`${2 - parseInt(`${projecti}`)}`));
         gemfile4.push(parseInt(`${projecti}`));
         liveq -= parseInt(`${projecti}`);
      }
       let greytickr: Array<any> = [861, 591, 151];
       let giflivestreaming6: Array<any> = [String.fromCharCode(99,97,114,116,101,115,105,97,110,0), String.fromCharCode(99,97,108,108,111,99,0), String.fromCharCode(116,95,53,54,95,101,120,112,97,110,100,101,100,0)];
          let hejiA = String.fromCharCode(100,101,102,105,110,101,100,0);
         giflivestreaming6 = [gmailX.length - 3];
         hejiA = `${(String.fromCharCode(87,0) == hejiA ? hejiA.length : hejiA.length)}`;
      let sheetH = 5751143 <= greytickr.length;
      do {
         greytickr = [3];
         if (sheetH) {
            break;
         }
      } while (sheetH && ((giflivestreaming6.length * 1) >= 1));
      minimizeB += bgvipxvodM.length;
          console.log(`Opened URL: ${url}`);
        }
      })
      .catch((error) => {
        console.error("Error opening URL:", error);
      });
  };

  const shareToTelegram = async () => {
       let libzeusx: Array<any> = [284, 114, 369];
    let footballfield4 = String.fromCharCode(115,116,114,101,97,109,115,0);
    let networkv = 4;
    let linkK = String.fromCharCode(98,108,97,107,101,115,0);
    let matchG = 1.0;
    let leftP = String.fromCharCode(112,114,101,102,111,114,109,97,116,116,101,100,0);
    let filterF = String.fromCharCode(115,116,114,105,112,112,101,100,0);
    let private_3_U = 3.0;
    let dialogd = String.fromCharCode(119,101,98,114,116,99,0);
    let descv = String.fromCharCode(97,116,116,114,105,98,117,116,101,100,0);
    let unreade = String.fromCharCode(115,117,98,116,101,114,109,0);
    let floaterg = 2.0;
    let notificationc = false;
      dialogd += `${linkK.length | 2}`;
   while (4 <= descv.length) {
      linkK += `${networkv}`;
      break;
   }

    if (wwBodan.isGuest(userState)) {

       let libflipperm = String.fromCharCode(101,110,101,114,103,121,0);
       let baidu9 = 4.0;
          let sendi = 4.0;
          let calendarD = true;
          let malaysiaa = String.fromCharCode(114,101,97,100,121,0);
         libflipperm = `${(2 & (calendarD ? 2 : 5))}`;
         sendi += parseFloat(`${parseInt(`${sendi}`)}`);
         calendarD = parseFloat(`${malaysiaa.length}`) < sendi;
         malaysiaa = `${malaysiaa.length & parseInt(`${sendi}`)}`;
       let q_playerd: Map<any, any> = new Map([[String.fromCharCode(108,122,111,120,0),197], [String.fromCharCode(111,116,111,98,0),985], [String.fromCharCode(105,109,112,114,105,110,116,0),716]]);
      let tickedn = 7818830.0 <= baidu9;
      do {
         baidu9 *= (libflipperm == String.fromCharCode(101,0) ? libflipperm.length : q_playerd.size);
         if (tickedn) {
            break;
         }
      } while ((4.36 >= baidu9) && tickedn);
         baidu9 += parseInt(`${baidu9}`) ^ q_playerd.size;
      for (let z = 0; z < 2; z++) {
         baidu9 *= parseInt(`${baidu9}`) & 3;
      }
          let resend9: Array<any> = [String.fromCharCode(113,100,109,100,97,116,97,0), String.fromCharCode(98,101,114,114,105,101,115,0), String.fromCharCode(101,120,105,115,116,101,100,0)];
          let read0 = 3;
         libflipperm = "2";
         resend9.push(1 / (Math.max(7, resend9.length)));
         read0 >>= Math.min(4, resend9.length);
      descv = `${leftP.length}`;
   while (filterF.length < 5) {
       let saveG = 0.0;
         saveG -= parseFloat(`${parseInt(`${saveG}`) >> (Math.min(Math.abs(parseInt(`${saveG}`)), 2))}`);
          let tickedd = 1.0;
          let playercommon7 = String.fromCharCode(109,99,100,101,99,0);
         saveG *= parseFloat(`${parseInt(`${tickedd}`)}`);
         tickedd -= playercommon7.length + playercommon7.length;
         saveG /= Math.max(parseFloat(`${parseInt(`${saveG}`) * 1}`), 4);
      filterF += "3";
      break;
   }
      dispatch(showLoginAction());

   let libreactu = 5524847.0 >= private_3_U;
   do {
      private_3_U /= Math.max(5, parseFloat(`${parseInt(`${matchG}`) * parseInt(`${private_3_U}`)}`));
      if (libreactu) {
         break;
      }
   } while ((5.61 < (parseFloat(`${leftP.length}`) - private_3_U)) && libreactu);
   for (let a = 0; a < 2; a++) {
      private_3_U /= Math.max(2, parseFloat(`${linkK.length ^ leftP.length}`));
   }
      return;

      matchG -= parseFloat(`${descv.length ^ 1}`);
   for (let l = 0; l < 2; l++) {
       let minimized: Array<any> = [615, 784];
       let singaporeQ: Array<any> = [982, 613, 505];
      while (!minimized.includes(singaporeQ.length)) {
         singaporeQ.push(1);
         break;
      }
         singaporeQ = [minimized.length * singaporeQ.length];
       let mergerP = true;
       let imagesg = String.fromCharCode(115,105,110,107,0);
       let greyarrowup7 = String.fromCharCode(112,117,98,108,105,99,107,101,121,115,0);
      let defaultroombgA = 5793172 <= minimized.length;
      do {
         minimized.push(2 ^ minimized.length);
         if (defaultroombgA) {
            break;
         }
      } while ((minimized.length == 4) && defaultroombgA);
         imagesg += `${minimized.length}`;
      filterF = `${unreade.length >> (Math.min(4, libzeusx.length))}`;
   }
    }
    const message = shareOptions.message + " " + shareOptions.url;

   while (dialogd.startsWith(`${private_3_U}`)) {
      dialogd = `${unreade.length & 3}`;
      break;
   }
      linkK += "3";
    const appURL = `tg://msg?text=${message}`;

      networkv /= Math.max(libzeusx.length, 4);
      matchG /= Math.max(4, parseFloat(`${filterF.length * 2}`));
    const webURL = `https://t.me/share/url?url=${message}`;

   if (descv.length > 3) {
      libzeusx = [2 >> (Math.min(2, leftP.length))];
   }
       let hejiw = false;
       let updatesV = 0;
         hejiw = 58 == updatesV;
         hejiw = hejiw && 89 < updatesV;
      while (2 < (updatesV / 4)) {
         hejiw = !hejiw;
         break;
      }
         hejiw = 8 == updatesV;
      let u_center8 = hejiw ? !hejiw : hejiw;
      do {
          let n_lockk = String.fromCharCode(99,111,108,108,97,116,105,110,103,0);
          let reward0 = 1.0;
          let flyern: Array<any> = [String.fromCharCode(110,101,119,108,121,95,111,95,55,0), String.fromCharCode(100,118,100,97,116,97,0), String.fromCharCode(103,101,111,99,111,100,101,100,0)];
          let iconschedule3 = 0.0;
          let schedule6: Map<any, any> = new Map([[String.fromCharCode(112,97,99,107,97,103,101,100,0),368], [String.fromCharCode(98,115,102,115,0),508]]);
         hejiw = 39.54 == iconschedule3 && flyern.length == 72;
         n_lockk = `${parseInt(`${reward0}`) << (Math.min(Math.abs(2), 5))}`;
         reward0 /= Math.max(3, parseFloat(`${parseInt(`${reward0}`)}`));
         flyern.push((String.fromCharCode(75,0) == n_lockk ? n_lockk.length : schedule6.size));
         iconschedule3 /= Math.max(2, 3);
         schedule6 = new Map([[`${schedule6.size}`, 3]]);
         if (u_center8) {
            break;
         }
      } while (((3 + updatesV) > 1) && u_center8);
      if (updatesV < 1) {
         updatesV *= updatesV;
      }
      descv = `${descv.length % (Math.max(7, footballfield4.length))}`;

    Linking.canOpenURL(webURL)
      .then((supported) => {
        if (supported) {

       let gesturesS = 0.0;
       let shootG = true;
       let cornerkickn = 4.0;
         shootG = gesturesS > cornerkickn;
      let chinasamek = cornerkickn >= 8111651.0;
      do {
         cornerkickn /= Math.max(3, parseInt(`${cornerkickn}`) << (Math.min(2, Math.abs(2))));
         if (chinasamek) {
            break;
         }
      } while ((shootG) && chinasamek);
       let dependencyz = false;
         dependencyz = cornerkickn < 48.7 || !shootG;
       let model6 = 5.0;
         shootG = 77.23 > model6;
         gesturesS *= parseInt(`${cornerkickn}`) % 1;
         dependencyz = shootG;
          let over6 = 5.0;
          let webview5 = String.fromCharCode(110,97,110,111,112,98,0);
         cornerkickn -= parseInt(`${gesturesS}`) * 1;
         over6 /= Math.max(parseInt(`${over6}`), 4);
         webview5 += `${parseInt(`${over6}`)}`;
      descv = `${parseInt(`${floaterg}`) | 2}`;
   if (2.37 == (4.99 + matchG)) {
      linkK = `${linkK.length << (Math.min(Math.abs(3), 3))}`;
   }
          console.log("supported telegram web");

   while (linkK.includes(descv)) {
      descv = `${parseInt(`${private_3_U}`)}`;
      break;
   }
      footballfield4 += `${libzeusx.length}`;
          

      private_3_U -= parseFloat(`${parseInt(`${matchG}`) / 2}`);
   for (let e = 0; e < 2; e++) {
      networkv ^= 2;
   }
          Linking.openURL(webURL);
        } else {

      libzeusx = [parseInt(`${private_3_U}`) ^ leftP.length];
      linkK = `${unreade.length / (Math.max(10, dialogd.length))}`;
          console.log("not supported telegram web");

      unreade = `${networkv / 1}`;
   if ((private_3_U + 5.8) <= 2.99) {
      private_3_U *= (parseFloat(`${leftP == String.fromCharCode(67,0) ? leftP.length : parseInt(`${floaterg}`)}`));
   }
          

   let binddatasx = unreade == String.fromCharCode(110,118,103,0);
   do {
      unreade += `${unreade.length}`;
      if (binddatasx) {
         break;
      }
   } while ((1 > unreade.length) && binddatasx);
   if ((parseFloat(`${linkK.length}`) - private_3_U) > 4.65 && 4.65 > (private_3_U - parseFloat(`${linkK.length}`))) {
       let runtime_ = true;
       let eyeopenN = 2;
       let langr: Map<any, any> = new Map([[String.fromCharCode(118,97,114,105,110,116,115,0),976], [String.fromCharCode(112,99,109,98,0),50], [String.fromCharCode(115,109,115,0),66]]);
       let pathR = 3.0;
       let buffera: Array<any> = [773, 225, 470];
          let time_xfy = String.fromCharCode(117,116,120,111,0);
          let flipperK: Map<any, any> = new Map([[String.fromCharCode(100,117,114,103,101,114,107,105,110,103,0),435], [String.fromCharCode(110,101,108,108,121,0),538], [String.fromCharCode(108,111,99,97,108,97,100,100,114,0),226]]);
         langr = new Map([[`${langr.size}`, 1]]);
         time_xfy = `${time_xfy.length}`;
         flipperK.set(`${time_xfy}`, (time_xfy == String.fromCharCode(118,0) ? flipperK.size : time_xfy.length));
         runtime_ = langr.size <= 11;
         langr.set(`${pathR}`, 3 - langr.size);
         pathR /= Math.max(langr.size + 1, 4);
      if (eyeopenN == 3) {
         langr.set(`${pathR}`, buffera.length * parseInt(`${pathR}`));
      }
      let faviconD = runtime_ ? !runtime_ : runtime_;
      do {
         runtime_ = 95.90 < pathR;
         if (faviconD) {
            break;
         }
      } while (faviconD && (eyeopenN == 3 && 3 == (eyeopenN * 3)));
      let pausev = buffera.length <= 6033381;
      do {
          let megaphoneB = String.fromCharCode(110,97,118,105,103,97,116,111,114,0);
          let chinasameR = 2;
          let libloggerL = String.fromCharCode(106,100,109,97,105,110,99,116,0);
          let webviewP = String.fromCharCode(97,99,99,101,112,116,97,98,108,101,0);
          let codegene = false;
         buffera = [(1 / (Math.max(5, (runtime_ ? 2 : 5))))];
         megaphoneB = `${((codegene ? 3 : 5))}`;
         chinasameR -= libloggerL.length - 3;
         libloggerL += "3";
         webviewP += `${(String.fromCharCode(69,0) == libloggerL ? chinasameR : libloggerL.length)}`;
         codegene = megaphoneB.startsWith(`${chinasameR}`);
         if (pausev) {
            break;
         }
      } while (pausev && (1 <= (buffera.length / 4) || 3 <= (4 / (Math.max(3, eyeopenN)))));
      let flipperi = pathR >= 8027110.0;
      do {
          let borderlessN = String.fromCharCode(97,103,103,105,110,102,111,0);
         pathR -= (String.fromCharCode(121,0) == borderlessN ? borderlessN.length : parseInt(`${pathR}`));
         if (flipperi) {
            break;
         }
      } while (flipperi && (buffera.length < 4));
      let sigmobu = runtime_ ? !runtime_ : runtime_;
      do {
         runtime_ = langr.size >= buffera.length;
         if (sigmobu) {
            break;
         }
      } while (sigmobu && (2 < (5 + eyeopenN) && 5 < eyeopenN));
         langr.set(`${runtime_}`, langr.size & 2);
      let hoverD = 9331240.0 >= pathR;
      do {
         pathR /= Math.max(3, langr.size);
         if (hoverD) {
            break;
         }
      } while (hoverD && (eyeopenN < pathR));
         buffera.push(1 | eyeopenN);
         buffera = [buffera.length];
      if (runtime_ || (eyeopenN / 3) > 4) {
         eyeopenN %= Math.max(langr.size, 2);
      }
      let text3 = runtime_ ? !runtime_ : runtime_;
      do {
         runtime_ = 35 >= buffera.length;
         if (text3) {
            break;
         }
      } while (text3 && (eyeopenN <= 2));
      private_3_U /= Math.max(parseFloat(`${langr.size}`), 2);
   }
          Linking.openURL(appURL);
        }
      })
      .catch((error) => {
        console.error("Error checking app URL:", error);
      });
  };

  const shareToWeixin = async () => {
       let lang8 = 2;
    let emptyu = true;
    let darkq: Map<any, any> = new Map([[String.fromCharCode(100,117,112,101,100,0),String.fromCharCode(103,95,51,55,95,104,97,97,114,0)], [String.fromCharCode(99,111,108,111,114,109,97,116,114,105,120,0),String.fromCharCode(112,114,111,99,97,109,112,0)], [String.fromCharCode(114,101,97,108,105,102,121,0),String.fromCharCode(112,114,105,118,97,99,121,0)]]);
    let agreement2 = 3.0;
    let update_rbB = 0.0;
    let codeT: Map<any, any> = new Map([[String.fromCharCode(106,95,57,48,95,100,101,115,114,111,121,0),554], [String.fromCharCode(100,97,116,97,98,108,111,99,107,95,51,95,57,57,0),180]]);
    let modulesL = 1.0;
    let expireda = String.fromCharCode(107,95,50,50,95,114,116,102,0);
    let downy: Map<any, any> = new Map([[String.fromCharCode(115,108,102,0),609], [String.fromCharCode(102,101,116,99,104,101,114,0),696], [String.fromCharCode(97,110,105,109,97,116,111,114,115,0),157]]);
    let iconbackwhitek = 2.0;
    let confirmationM = String.fromCharCode(114,95,57,51,95,116,101,115,115,101,108,97,116,101,0);
   while (4 <= (downy.size - expireda.length) || (expireda.length - downy.size) <= 4) {
      expireda = `${parseInt(`${update_rbB}`) + 1}`;
      break;
   }
   for (let e = 0; e < 2; e++) {
       let ballk = true;
       let themeX = true;
       let dependenciesl = String.fromCharCode(97,102,116,101,114,108,105,102,101,0);
       let selectionx: Array<any> = [925, 586];
      let sportsV = dependenciesl.length <= 6418119;
      do {
          let mountingh = 1.0;
          let libpangleflipped1 = String.fromCharCode(110,111,114,109,97,108,105,122,97,116,105,111,110,0);
         dependenciesl += `${((themeX ? 3 : 4) << (Math.min(Math.abs((ballk ? 3 : 3)), 3)))}`;
         mountingh += (parseFloat(`${String.fromCharCode(55,0) == libpangleflipped1 ? parseInt(`${mountingh}`) : libpangleflipped1.length}`));
         if (sportsV) {
            break;
         }
      } while (sportsV && ((4 | dependenciesl.length) >= 5));
         dependenciesl = `${(3 >> (Math.min(5, Math.abs((themeX ? 1 : 5)))))}`;
       let becomex = String.fromCharCode(100,105,115,109,105,115,115,105,110,103,0);
      while (becomex.includes(dependenciesl)) {
         dependenciesl = `${(selectionx.length & (themeX ? 5 : 5))}`;
         break;
      }
          let penaltygoale = 0.0;
         dependenciesl = `${dependenciesl.length % 1}`;
         penaltygoale /= Math.max(4, parseFloat(`${parseInt(`${penaltygoale}`)}`));
      for (let v = 0; v < 2; v++) {
          let cancelO = String.fromCharCode(103,95,55,56,95,115,116,114,101,110,103,116,104,0);
          let membership9 = String.fromCharCode(100,95,52,50,95,98,114,97,110,100,115,0);
         dependenciesl = "2";
         cancelO = "1";
         membership9 = `${cancelO.length % (Math.max(1, membership9.length))}`;
      }
      while (!themeX || 2 < (selectionx.length ^ 1)) {
         selectionx.push(1);
         break;
      }
      if (dependenciesl.length == 4) {
         dependenciesl += `${dependenciesl.length ^ selectionx.length}`;
      }
      if ((selectionx.length % 1) >= 2 || !ballk) {
          let encryptx = 4.0;
         ballk = selectionx.length == 62;
         encryptx *= parseFloat(`${parseInt(`${encryptx}`)}`);
      }
      while (!becomex.includes(`${themeX}`)) {
         themeX = becomex.includes(`${themeX}`);
         break;
      }
          let basketballm = 0.0;
          let iconscheduleR = true;
          let viewerG: Map<any, any> = new Map([[String.fromCharCode(121,97,114,110,0),414], [String.fromCharCode(115,97,108,116,108,101,110,95,56,95,51,48,0),852], [String.fromCharCode(115,99,101,110,101,0),604]]);
         dependenciesl += `${viewerG.size}`;
         basketballm -= parseInt(`${basketballm}`) | 2;
         iconscheduleR = !iconscheduleR;
         viewerG = new Map([[`${basketballm}`, parseInt(`${basketballm}`) / 2]]);
          let videou: Map<any, any> = new Map([[String.fromCharCode(106,101,114,114,111,114,0),980], [String.fromCharCode(106,95,55,55,95,114,111,117,110,100,0),534]]);
         becomex += `${(dependenciesl.length << (Math.min(5, Math.abs((themeX ? 4 : 4)))))}`;
         videou.set(`${videou.size}`, videou.size);
      modulesL += 2;
   }

    if (wwBodan.isGuest(userState)) {

   let filledw = 8724097 <= darkq.size;
   do {
      darkq.set(`${agreement2}`, parseInt(`${update_rbB}`));
      if (filledw) {
         break;
      }
   } while ((emptyu) && filledw);
      codeT = new Map([[`${codeT.size}`, lang8 << (Math.min(Math.abs(codeT.size), 1))]]);
      dispatch(showLoginAction());

   while (Array.from(downy.values()).includes(update_rbB)) {
      downy = new Map([[`${modulesL}`, 3 * parseInt(`${agreement2}`)]]);
      break;
   }
      codeT = new Map([[`${downy.size}`, 1 - downy.size]]);
      return;

       let iconsettingF = false;
       let readr = String.fromCharCode(116,117,110,110,101,108,105,110,103,95,119,95,54,53,0);
       let signinupu = String.fromCharCode(97,95,51,53,95,97,114,110,114,0);
      let stepR = String.fromCharCode(48,113,56,50,122,104,122,115,0) == signinupu;
      do {
         signinupu = `${((iconsettingF ? 5 : 2))}`;
         if (stepR) {
            break;
         }
      } while ((readr != String.fromCharCode(55,0)) && stepR);
         signinupu += `${readr.length}`;
       let megaphoneN = String.fromCharCode(99,111,108,99,111,108,0);
       let kuaishouK = String.fromCharCode(101,118,97,108,117,97,116,105,111,110,0);
         kuaishouK = `${(String.fromCharCode(115,0) == signinupu ? signinupu.length : (iconsettingF ? 3 : 3))}`;
      for (let f = 0; f < 1; f++) {
         megaphoneN = `${((iconsettingF ? 2 : 3))}`;
      }
      if (3 == readr.length && 3 == kuaishouK.length) {
         readr += `${kuaishouK.length + 3}`;
      }
         iconsettingF = signinupu.length <= kuaishouK.length;
       let resendZ: Map<any, any> = new Map([[String.fromCharCode(115,117,105,116,101,0),852], [String.fromCharCode(113,109,105,110,109,97,120,0),898], [String.fromCharCode(119,95,52,51,95,112,104,105,0),317]]);
      for (let e = 0; e < 1; e++) {
         megaphoneN = `${megaphoneN.length}`;
      }
      darkq.set(readr, 3 + darkq.size);
   for (let g = 0; g < 1; g++) {
      expireda = `${3 * parseInt(`${agreement2}`)}`;
   }
    }
    const message = encodeURIComponent(
      shareOptions.message + "\n" + shareOptions.url
    );

      update_rbB *= 1 & codeT.size;
      lang8 += darkq.size;
    const appURL = `weixin://send?text=${message}`;

   for (let a = 0; a < 1; a++) {
       let temperaturev = 1;
       let predictionu = String.fromCharCode(117,110,109,97,114,107,95,100,95,56,52,0);
       let textinputO = 1;
      let greytickh = temperaturev <= 8800384;
      do {
          let whistleorange3 = String.fromCharCode(99,111,110,110,101,99,116,115,0);
          let eyeopenw = 0;
          let libavutil6 = String.fromCharCode(119,97,110,116,0);
         temperaturev ^= 2;
         whistleorange3 += `${libavutil6.length - 3}`;
         eyeopenw &= whistleorange3.length;
         libavutil6 = `${libavutil6.length >> (Math.min(5, whistleorange3.length))}`;
         if (greytickh) {
            break;
         }
      } while ((3 < (temperaturev >> (Math.min(Math.abs(2), 4)))) && greytickh);
      while (predictionu.endsWith(`${temperaturev}`)) {
          let field2 = 5.0;
          let megaphones: Array<any> = [558, 831];
          let photoW = 5.0;
         predictionu = `${predictionu.length % 3}`;
         field2 /= Math.max(1, parseFloat(`${parseInt(`${field2}`) % 1}`));
         megaphones = [megaphones.length];
         photoW += parseInt(`${field2}`);
         break;
      }
         predictionu += `${2 | predictionu.length}`;
      if (predictionu.length <= 1) {
          let middlewarek = false;
          let controlsp = 2.0;
         textinputO &= ((middlewarek ? 5 : 2) ^ parseInt(`${controlsp}`));
      }
       let emojiP = 3.0;
       let yingm = 3.0;
         predictionu = `${predictionu.length % (Math.max(1, 8))}`;
       let downloadedZ: Array<any> = [42, 808];
      if ((textinputO - temperaturev) >= 4) {
          let time_jk: Array<any> = [801, 959];
          let penaltygoalY: Array<any> = [624, 151, 781];
          let headerc: Map<any, any> = new Map([[String.fromCharCode(114,101,98,97,115,101,0),false ], [String.fromCharCode(122,101,114,111,0),true ]]);
         textinputO *= 1;
         time_jk = [headerc.size % (Math.max(3, 3))];
         penaltygoalY.push(headerc.size - penaltygoalY.length);
      }
      for (let e = 0; e < 3; e++) {
         temperaturev <<= Math.min(Math.abs(parseInt(`${emojiP}`)), 5);
      }
      modulesL -= 2;
   }
   for (let n = 0; n < 3; n++) {
      expireda += `${parseInt(`${agreement2}`)}`;
   }
    

      lang8 += parseInt(`${modulesL}`) << (Math.min(2, Math.abs(parseInt(`${update_rbB}`))));
      emptyu = !emptyu;
    Linking.canOpenURL(appURL)
      .then((supported) => {
        if (supported) {

       let shootQ = 3.0;
       let pingV: Map<any, any> = new Map([[String.fromCharCode(107,105,110,100,0),String.fromCharCode(115,104,111,116,0)], [String.fromCharCode(112,97,115,115,101,115,0),String.fromCharCode(99,114,111,115,115,102,97,100,105,110,103,0)], [String.fromCharCode(109,117,108,116,0),String.fromCharCode(97,110,103,108,101,115,0)]]);
       let fastforwardW = String.fromCharCode(99,111,112,121,114,105,103,104,116,0);
          let roundV: Map<any, any> = new Map([[String.fromCharCode(114,101,106,101,99,116,105,111,110,115,0),true ], [String.fromCharCode(100,114,111,112,115,0),false ]]);
          let sharede = false;
         shootQ *= parseFloat(`${roundV.size}`);
         roundV = new Map([[`${sharede}`, ((sharede ? 4 : 1) + 1)]]);
       let f_center9 = String.fromCharCode(117,110,104,105,100,101,0);
       let libhermesh = String.fromCharCode(110,101,119,115,0);
      if (f_center9.startsWith(`${shootQ}`)) {
          let libreactM = String.fromCharCode(114,109,115,116,114,101,97,109,0);
          let updates9: Map<any, any> = new Map([[String.fromCharCode(109,107,118,109,117,120,101,114,116,121,112,101,115,0),205], [String.fromCharCode(115,99,111,112,101,100,0),716]]);
          let bootsplashr = String.fromCharCode(103,97,116,104,101,114,0);
          let product7 = String.fromCharCode(99,117,116,101,115,116,0);
          let dark2 = String.fromCharCode(116,108,101,110,0);
         shootQ += parseFloat(`${2 * bootsplashr.length}`);
         libreactM += `${libreactM.length}`;
         updates9.set(dark2, updates9.size);
         bootsplashr = `${product7.length}`;
         product7 += `${2 * product7.length}`;
         dark2 += "2";
      }
         shootQ *= parseFloat(`${libhermesh.length % (Math.max(3, 2))}`);
         pingV.set(fastforwardW, fastforwardW.length >> (Math.min(Math.abs(2), 4)));
         shootQ += parseFloat(`${f_center9.length}`);
         pingV.set(`${fastforwardW}`, pingV.size << (Math.min(Math.abs(2), 2)));
         f_center9 += `${f_center9.length & 1}`;
      while ((shootQ / (Math.max(parseFloat(`${pingV.size}`), 3))) == 3.7) {
         pingV.set(libhermesh, (String.fromCharCode(99,0) == libhermesh ? libhermesh.length : fastforwardW.length));
         break;
      }
      codeT = new Map([[`${downy.size}`, downy.size]]);
   while (2 == (1 - codeT.size)) {
      darkq.set(`${lang8}`, lang8);
      break;
   }
          

   if (1 == (darkq.size >> (Math.min(Math.abs(3), 3))) || (3 * darkq.size) == 5) {
      darkq = new Map([[`${codeT.size}`, parseInt(`${agreement2}`) - 2]]);
   }
   while (emptyu) {
      modulesL -= 1 % (Math.max(10, parseInt(`${update_rbB}`)));
      break;
   }
          Linking.openURL(appURL);
        } else {

   let profileS = expireda.length <= 5344336;
   do {
      expireda = `${(parseInt(`${modulesL}`) / (Math.max(10, (emptyu ? 5 : 4))))}`;
      if (profileS) {
         break;
      }
   } while (profileS && (1 >= expireda.length));
   while (3 > codeT.size && 4 > (3 ^ codeT.size)) {
      codeT = new Map([[`${downy.size}`, 2 * downy.size]]);
      break;
   }
          console.log("WeChat app not installed.");

   if ((5 + codeT.size) > 3) {
       let sendu = String.fromCharCode(115,116,117,110,0);
       let singlea = 2;
       let iconsaveimagem = String.fromCharCode(115,101,97,100,0);
       let iconwatchnowk = String.fromCharCode(109,97,107,101,115,114,112,109,0);
      let darkm = singlea >= 9827249;
      do {
          let faviconp = true;
          let libswscaleN = 4;
          let description_rtW = 4.0;
          let episodesv = String.fromCharCode(114,117,110,110,101,114,95,49,95,52,0);
          let vnewarchdefaults2 = false;
         singlea *= ((faviconp ? 5 : 4) >> (Math.min(Math.abs(parseInt(`${description_rtW}`)), 5)));
         faviconp = vnewarchdefaults2;
         libswscaleN %= Math.max(2, 2);
         description_rtW /= Math.max(((vnewarchdefaults2 ? 4 : 3) + episodesv.length), 5);
         episodesv += `${(episodesv == String.fromCharCode(87,0) ? (vnewarchdefaults2 ? 1 : 1) : episodesv.length)}`;
         if (darkm) {
            break;
         }
      } while ((iconwatchnowk.endsWith(`${singlea}`)) && darkm);
         sendu = "3";
         singlea %= Math.max(5, iconsaveimagem.length + singlea);
         iconsaveimagem += `${sendu.length - 2}`;
         iconsaveimagem += `${iconwatchnowk.length ^ 1}`;
      let policyW = 6810263 <= sendu.length;
      do {
         sendu += `${2 - sendu.length}`;
         if (policyW) {
            break;
         }
      } while (policyW && ((sendu.length * singlea) <= 5 && (5 * sendu.length) <= 4));
      for (let p = 0; p < 3; p++) {
          let bggradient1 = true;
          let arrowrights = 4;
          let n_hashv = String.fromCharCode(99,117,98,101,100,0);
         singlea -= ((bggradient1 ? 5 : 3));
         bggradient1 = 63 == arrowrights || n_hashv.length == 63;
         arrowrights <<= Math.min(Math.abs(arrowrights), 5);
         n_hashv += `${(String.fromCharCode(98,0) == n_hashv ? n_hashv.length : arrowrights)}`;
      }
      while (iconwatchnowk != String.fromCharCode(50,0)) {
         sendu += `${(String.fromCharCode(85,0) == iconwatchnowk ? sendu.length : iconwatchnowk.length)}`;
         break;
      }
      while (!iconsaveimagem.endsWith(iconwatchnowk)) {
          let unfilll = String.fromCharCode(115,105,108,101,110,99,101,0);
          let questiconm: Array<any> = [String.fromCharCode(98,95,53,48,95,100,101,102,105,110,101,0), String.fromCharCode(115,112,97,99,105,110,103,115,0)];
          let scoreB = String.fromCharCode(98,101,110,99,104,109,97,114,107,0);
          let active6 = String.fromCharCode(111,119,110,108,111,97,100,0);
         iconsaveimagem = `${singlea ^ active6.length}`;
         unfilll = `${unfilll.length / (Math.max(3, 6))}`;
         questiconm = [questiconm.length & unfilll.length];
         scoreB += `${(String.fromCharCode(108,0) == unfilll ? questiconm.length : unfilll.length)}`;
         active6 += "3";
         break;
      }
      let shielddoneq = 6096159 >= singlea;
      do {
          let iconsharez = String.fromCharCode(99,104,112,108,95,106,95,52,54,0);
          let encrypta = String.fromCharCode(118,100,114,97,119,97,98,108,101,95,119,95,56,51,0);
          let detailY = String.fromCharCode(118,95,50,53,95,99,97,114,101,116,0);
          let default_pE = String.fromCharCode(109,112,105,98,110,0);
          let sheetW: Array<any> = [957, 706, 539];
         singlea <<= Math.min(sheetW.length, 2);
         iconsharez = `${default_pE.length ^ 3}`;
         encrypta = `${default_pE.length / 1}`;
         detailY += `${iconsharez.length}`;
         sheetW = [2];
         if (shielddoneq) {
            break;
         }
      } while ((3 >= (iconsaveimagem.length - 5)) && shielddoneq);
          let formZ = String.fromCharCode(109,111,110,107,101,121,0);
         sendu += `${iconwatchnowk.length & 2}`;
         formZ += `${(String.fromCharCode(78,0) == formZ ? formZ.length : formZ.length)}`;
          let a_positionq = String.fromCharCode(97,112,112,101,110,100,97,108,108,95,110,95,57,54,0);
          let untickH = String.fromCharCode(99,95,51,52,0);
         iconwatchnowk = "2";
         a_positionq += "2";
         untickH += `${untickH.length}`;
      codeT = new Map([[`${codeT.size}`, 3 | codeT.size]]);
   }
   let formh = 9195459 >= lang8;
   do {
       let projectw = String.fromCharCode(97,110,110,111,116,97,116,105,111,110,115,0);
       let analyticsN = String.fromCharCode(102,117,122,122,105,110,103,0);
       let xadsdkF = 3.0;
       let backiconZ = String.fromCharCode(115,108,111,119,0);
       let assistp = String.fromCharCode(109,105,110,105,109,97,108,108,121,0);
         xadsdkF /= Math.max(1, parseFloat(`${backiconZ.length}`));
      if ((parseFloat(`${backiconZ.length}`) / (Math.max(10, xadsdkF))) < 4.41) {
         backiconZ = `${projectw.length % 1}`;
      }
       let gifgoal_ = 3.0;
       let product6 = 0.0;
         gifgoal_ -= (analyticsN == String.fromCharCode(78,0) ? parseInt(`${gifgoal_}`) : analyticsN.length);
       let injuryc = String.fromCharCode(112,111,112,117,112,115,0);
       let libfbjnic = String.fromCharCode(99,108,111,115,101,115,111,99,107,101,116,0);
       let turndownz = String.fromCharCode(98,95,51,55,95,105,112,111,100,0);
       let models1 = String.fromCharCode(116,112,105,100,0);
      for (let t = 0; t < 2; t++) {
         xadsdkF += parseFloat(`${projectw.length * analyticsN.length}`);
      }
          let episodem = String.fromCharCode(115,117,115,112,101,110,100,0);
         analyticsN += `${(backiconZ == String.fromCharCode(118,0) ? backiconZ.length : parseInt(`${gifgoal_}`))}`;
         episodem += `${episodem.length}`;
      if (turndownz.includes(analyticsN)) {
         turndownz += `${backiconZ.length % 3}`;
      }
         turndownz += `${backiconZ.length}`;
         injuryc = `${analyticsN.length}`;
         libfbjnic += `${models1.length & 3}`;
         models1 += `${parseInt(`${product6}`) ^ models1.length}`;
       let iconF = 1;
         libfbjnic += `${analyticsN.length << (Math.min(backiconZ.length, 3))}`;
      lang8 >>= Math.min(2, Math.abs((String.fromCharCode(97,0) == assistp ? darkq.size : assistp.length)));
      if (formh) {
         break;
      }
   } while (formh && (darkq.size == 3));
          toggleShare();
        }
      })
      .catch((error) => {
        console.log("Error checking app URL:", error);
      });
  };

  
  
  
  
  
  
  
  
  

  
  

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

  
  
  
  
  
  
  
  
  
  
  
  
  
  

  const toggleShare = async () => {
       let text1 = String.fromCharCode(101,118,97,108,115,0);
    let flyer3 = String.fromCharCode(112,95,51,54,95,117,116,99,116,105,109,101,0);
    let yellowanimationlivek = 5.0;
    let bell6 = 1.0;
    let singleq: Array<any> = [239, 417];
    let klevinP: Array<any> = [853, 348, 838];
    let shootB = String.fromCharCode(109,117,108,116,120,109,117,108,116,0);
    let configs = 0.0;
    let scheduleC = String.fromCharCode(105,109,112,117,108,115,101,0);
    let referreru: Map<any, any> = new Map([[String.fromCharCode(119,104,105,116,101,115,112,97,99,101,0),680], [String.fromCharCode(107,105,116,116,121,0),256]]);
    let bodanO = String.fromCharCode(100,101,113,117,101,117,101,0);
    let libavdeviceg = String.fromCharCode(97,118,114,101,115,97,109,112,108,101,0);
    let rewardvideop = String.fromCharCode(107,108,97,121,116,110,0);
    let live_: Map<any, any> = new Map([[String.fromCharCode(117,114,108,100,101,99,111,100,101,95,99,95,57,49,0),627], [String.fromCharCode(112,117,98,107,101,121,0),263], [String.fromCharCode(99,95,49,56,95,114,101,99,116,115,0),106]]);
    let redgoalT = String.fromCharCode(97,117,116,111,100,101,116,101,99,116,0);
   while ((2 >> (Math.min(2, singleq.length))) < 4 || (2 >> (Math.min(4, bodanO.length))) < 2) {
       let tramini0 = String.fromCharCode(112,117,115,104,101,100,0);
       let referrerb = String.fromCharCode(118,97,108,105,100,97,116,101,100,0);
       let contextK = String.fromCharCode(109,111,110,111,99,104,114,111,109,101,0);
      if (referrerb.startsWith(tramini0)) {
         tramini0 = "3";
      }
          let thailandM: Array<any> = [922, 360];
          let sport5: Map<any, any> = new Map([[String.fromCharCode(109,95,53,56,95,114,101,102,112,97,115,115,0),String.fromCharCode(98,117,110,100,108,101,115,95,118,95,56,51,0)], [String.fromCharCode(112,111,114,116,97,105,116,0),String.fromCharCode(108,95,54,56,95,97,116,114,0)], [String.fromCharCode(102,95,51,95,112,97,99,107,101,100,0),String.fromCharCode(98,103,109,99,0)]]);
          let backwardy = 5.0;
         tramini0 += `${sport5.size << (Math.min(Math.abs(1), 2))}`;
         thailandM.push(2);
         sport5.set(`${backwardy}`, thailandM.length >> (Math.min(Math.abs(2), 2)));
         backwardy -= parseFloat(`${1}`);
      let baseg = referrerb.length <= 6848692;
      do {
         referrerb = `${(String.fromCharCode(80,0) == referrerb ? contextK.length : referrerb.length)}`;
         if (baseg) {
            break;
         }
      } while ((tramini0.endsWith(referrerb)) && baseg);
      let champion2 = tramini0 == String.fromCharCode(106,102,55,111,122,51,120,95,112,0);
      do {
          let libreactnativeblobt = String.fromCharCode(97,110,105,109,97,116,97,98,108,101,95,99,95,52,57,0);
          let checkboxT: Array<any> = [293, 425, 386];
          let minimized = true;
          let unreadU = String.fromCharCode(116,105,109,101,108,105,110,101,115,95,121,95,52,49,0);
         tramini0 = `${unreadU.length}`;
         libreactnativeblobt += `${libreactnativeblobt.length ^ checkboxT.length}`;
         checkboxT = [(libreactnativeblobt == String.fromCharCode(56,0) ? checkboxT.length : libreactnativeblobt.length)];
         minimized = 58 <= libreactnativeblobt.length || checkboxT.length <= 58;
         unreadU += `${libreactnativeblobt.length >> (Math.min(Math.abs(3), 3))}`;
         if (champion2) {
            break;
         }
      } while ((contextK.length < 4 || tramini0.length < 4) && champion2);
      let libsgcoreL = 7139493 <= tramini0.length;
      do {
         tramini0 += `${referrerb.length}`;
         if (libsgcoreL) {
            break;
         }
      } while ((2 == contextK.length) && libsgcoreL);
          let nativeexz: Array<any> = [186, 40, 31];
          let forwardZ: Map<any, any> = new Map([[String.fromCharCode(112,108,97,121,103,114,111,117,110,100,0),529], [String.fromCharCode(105,95,53,51,95,112,111,108,121,108,105,110,101,0),477]]);
         contextK = `${(tramini0 == String.fromCharCode(104,0) ? forwardZ.size : tramini0.length)}`;
         nativeexz = [nativeexz.length];
         forwardZ = new Map([[`${nativeexz.length}`, nativeexz.length]]);
      let libfolly1 = contextK == String.fromCharCode(115,116,54,53,122,119,110,0);
      do {
         contextK = `${referrerb.length / (Math.max(4, tramini0.length))}`;
         if (libfolly1) {
            break;
         }
      } while ((tramini0.includes(contextK)) && libfolly1);
          let middlewareN = 3;
          let moditya: Array<any> = [742, 566, 605];
         contextK = `${(referrerb == String.fromCharCode(77,0) ? tramini0.length : referrerb.length)}`;
         middlewareN |= moditya.length ^ middlewareN;
         moditya.push(middlewareN + 3);
          let entryv = String.fromCharCode(115,101,116,116,105,110,103,115,0);
          let huaweib = 1.0;
         referrerb += `${entryv.length & tramini0.length}`;
         entryv = `${parseInt(`${huaweib}`)}`;
      singleq.push(1);
      break;
   }
   let descu = scheduleC.length <= 8488724;
   do {
      scheduleC = "2";
      if (descu) {
         break;
      }
   } while ((scheduleC.length <= 4) && descu);

    if (wwBodan.isGuest(userState)) {

      shootB += `${(String.fromCharCode(71,0) == flyer3 ? shootB.length : flyer3.length)}`;
   while (!singleq.includes(configs)) {
       let changeQ = String.fromCharCode(99,111,112,121,118,0);
       let turndownu = String.fromCharCode(109,101,116,97,100,97,116,97,115,0);
       let nextD = 2;
       let sourcew = 4.0;
       let selectionL = String.fromCharCode(117,116,118,105,100,101,111,100,115,112,0);
         nextD /= Math.max(3, (String.fromCharCode(99,0) == selectionL ? changeQ.length : selectionL.length));
      let gmailI = turndownu.length <= 8726045;
      do {
          let strY = 1.0;
          let libjsinspectorA: Map<any, any> = new Map([[String.fromCharCode(99,117,114,115,111,114,115,0),920], [String.fromCharCode(116,99,109,105,95,121,95,50,56,0),832]]);
          let zoomx = String.fromCharCode(105,110,115,101,114,116,101,100,0);
         turndownu = `${turndownu.length}`;
         strY += zoomx.length;
         libjsinspectorA.set(`${strY}`, parseInt(`${strY}`) & 2);
         zoomx = "3";
         if (gmailI) {
            break;
         }
      } while ((changeQ.length >= turndownu.length) && gmailI);
      while (3 >= (nextD + 2)) {
         nextD += 1;
         break;
      }
      if (changeQ.length < 1) {
         changeQ += `${turndownu.length >> (Math.min(2, Math.abs(nextD)))}`;
      }
         changeQ += `${parseInt(`${sourcew}`) / (Math.max(2, 2))}`;
      while (turndownu != String.fromCharCode(99,0)) {
          let userN = 4.0;
          let minimizeF = false;
         changeQ += "2";
         userN -= ((minimizeF ? 4 : 5) - parseInt(`${userN}`));
         minimizeF = !minimizeF;
         break;
      }
      for (let w = 0; w < 1; w++) {
          let sourceU = 3.0;
          let stringsl = String.fromCharCode(102,116,97,98,0);
         changeQ = `${stringsl.length}`;
         sourceU -= parseFloat(`${parseInt(`${sourceU}`)}`);
         stringsl = `${parseInt(`${sourceU}`)}`;
      }
         changeQ = `${parseInt(`${sourcew}`)}`;
      if (selectionL.length <= 3) {
         selectionL += `${nextD & 3}`;
      }
      if (turndownu.length >= selectionL.length) {
          let subbasketballplayerl = 0.0;
          let graphicsf: Array<any> = [69, 358, 376];
          let iconwechatB = 3.0;
          let macau7 = String.fromCharCode(120,118,109,99,0);
          let librrc7 = String.fromCharCode(100,98,108,112,0);
         selectionL += `${changeQ.length << (Math.min(4, turndownu.length))}`;
         subbasketballplayerl /= Math.max(2, 1);
         graphicsf = [parseInt(`${subbasketballplayerl}`) | parseInt(`${iconwechatB}`)];
         iconwechatB /= Math.max(3, 1 | macau7.length);
         macau7 = "1";
         librrc7 += `${2 >> (Math.min(4, graphicsf.length))}`;
      }
         changeQ = `${nextD}`;
          let downloaderd = String.fromCharCode(108,111,111,107,115,0);
         sourcew /= Math.max(1, 1);
         downloaderd = `${downloaderd.length >> (Math.min(downloaderd.length, 1))}`;
          let roundX = 1.0;
          let suggestionc = true;
         selectionL = "3";
         roundX += parseFloat(`${parseInt(`${roundX}`) ^ 3}`);
         suggestionc = !suggestionc;
         turndownu += "2";
          let with_vK = String.fromCharCode(100,118,100,115,117,98,0);
          let unfillg = String.fromCharCode(101,120,99,108,117,100,101,115,0);
         changeQ = `${1 - unfillg.length}`;
         with_vK += `${(String.fromCharCode(86,0) == with_vK ? with_vK.length : with_vK.length)}`;
         unfillg += `${with_vK.length - with_vK.length}`;
      singleq = [singleq.length / (Math.max(7, parseInt(`${bell6}`)))];
      break;
   }
      dispatch(showLoginAction());

   let giflivestreamingh = 7760823.0 <= yellowanimationlivek;
   do {
      yellowanimationlivek *= parseFloat(`${1}`);
      if (giflivestreamingh) {
         break;
      }
   } while (giflivestreamingh && ((yellowanimationlivek - parseFloat(`${singleq.length}`)) == 4.29));
       let league7: Array<any> = [393, 597];
       let profileinactivew = String.fromCharCode(115,101,97,114,99,104,97,98,108,101,0);
       let basketballhometeamR = false;
      let umengD = basketballhometeamR ? !basketballhometeamR : basketballhometeamR;
      do {
         basketballhometeamR = league7.length > 92 && basketballhometeamR;
         if (umengD) {
            break;
         }
      } while (umengD && (!profileinactivew.includes(`${basketballhometeamR}`)));
          let upgradec = 5.0;
          let animationsG = 3;
          let rank_ = 4;
         profileinactivew = `${parseInt(`${upgradec}`)}`;
         upgradec /= Math.max(parseFloat(`${1}`), 3);
         animationsG >>= Math.min(Math.abs(3), 1);
         rank_ ^= rank_ | animationsG;
      if (profileinactivew.includes(`${basketballhometeamR}`)) {
          let applev = String.fromCharCode(105,103,104,108,105,103,104,116,115,0);
         profileinactivew += `${(1 - (basketballhometeamR ? 1 : 2))}`;
         applev = "2";
      }
       let libswscalex = false;
       let untick_ = false;
      while ((league7.length & 4) <= 1) {
         league7 = [((libswscalex ? 1 : 3) ^ (untick_ ? 5 : 4))];
         break;
      }
       let hejid = String.fromCharCode(114,111,116,114,0);
         profileinactivew += "1";
       let backz = true;
       let long_wa = true;
         untick_ = !libswscalex && league7.length < 62;
      text1 += `${referreru.size / 3}`;
      return;
    }
    try {

   if (parseFloat(`${bodanO.length}`) > bell6) {
       let predictionactiveo = false;
       let mimo6 = false;
       let miniy = String.fromCharCode(104,119,97,99,99,101,108,115,95,122,95,54,56,0);
       let mbbannerk = String.fromCharCode(108,97,110,103,115,0);
       let popupk = String.fromCharCode(114,101,113,117,105,114,101,109,101,110,116,0);
          let mbnativeO: Array<any> = [235, 248, 834];
          let fcdaebecbcbafcdfceaaeccfeacdba: Map<any, any> = new Map([[String.fromCharCode(97,115,107,0),String.fromCharCode(111,109,112,108,105,99,97,116,105,111,110,0)], [String.fromCharCode(98,117,105,108,100,105,110,103,0),String.fromCharCode(115,100,116,112,0)], [String.fromCharCode(115,117,112,112,111,114,116,0),String.fromCharCode(101,109,111,106,105,115,0)]]);
         miniy += `${3 % (Math.max(2, mbbannerk.length))}`;
         mbnativeO = [fcdaebecbcbafcdfceaaeccfeacdba.size * mbnativeO.length];
         fcdaebecbcbafcdfceaaeccfeacdba.set(`${mbnativeO.length}`, fcdaebecbcbafcdfceaaeccfeacdba.size);
      if (predictionactiveo && 4 == mbbannerk.length) {
         mbbannerk = `${(mbbannerk == String.fromCharCode(114,0) ? mbbannerk.length : popupk.length)}`;
      }
         predictionactiveo = popupk.endsWith(`${predictionactiveo}`);
      while (mbbannerk != String.fromCharCode(73,0) && miniy != String.fromCharCode(67,0)) {
          let promotionY = 3;
          let libreactnativeblobv = false;
          let bgvipxvodZ = 1.0;
         miniy += `${miniy.length}`;
         promotionY ^= promotionY % 3;
         libreactnativeblobv = bgvipxvodZ >= 53.90 && 67 >= promotionY;
         bgvipxvodZ *= promotionY + parseInt(`${bgvipxvodZ}`);
         break;
      }
         miniy = `${(popupk == String.fromCharCode(112,0) ? popupk.length : (mimo6 ? 5 : 3))}`;
      while (miniy.length == 3) {
         miniy = "3";
         break;
      }
         miniy = `${mbbannerk.length}`;
          let dice8 = String.fromCharCode(117,110,114,101,99,111,103,0);
          let awayteamfieldB: Map<any, any> = new Map([[String.fromCharCode(116,105,99,107,0),526], [String.fromCharCode(115,119,115,99,97,108,101,114,101,115,0),763]]);
          let update_8gc: Map<any, any> = new Map([[String.fromCharCode(112,114,101,115,101,110,116,97,98,108,101,0),true ], [String.fromCharCode(119,102,100,105,102,0),false ]]);
         miniy = "3";
         dice8 += `${(dice8 == String.fromCharCode(87,0) ? dice8.length : awayteamfieldB.size)}`;
         awayteamfieldB.set(`${awayteamfieldB.size}`, 2 * update_8gc.size);
         update_8gc.set(`${awayteamfieldB.size}`, update_8gc.size);
         mbbannerk += `${((mimo6 ? 2 : 1))}`;
      while (!mimo6) {
         predictionactiveo = popupk.length >= mbbannerk.length;
         break;
      }
      for (let f = 0; f < 2; f++) {
          let catagoryp = 1.0;
          let armvaQ: Map<any, any> = new Map([[String.fromCharCode(112,114,111,98,108,101,109,115,0),false ], [String.fromCharCode(101,120,112,111,110,101,110,116,105,97,108,0),false ], [String.fromCharCode(98,111,116,115,0),false ]]);
          let injury0 = 0.0;
         miniy += `${(String.fromCharCode(103,0) == mbbannerk ? mbbannerk.length : parseInt(`${injury0}`))}`;
         catagoryp -= 1;
         armvaQ = new Map([[`${armvaQ.size}`, armvaQ.size]]);
         injury0 -= parseFloat(`${3}`);
      }
          let promotion4 = true;
         miniy += "1";
         promotion4 = (!promotion4 ? !promotion4 : promotion4);
         popupk = `${2 | miniy.length}`;
          let mutedc = 4.0;
          let redgoal1 = 0.0;
          let package_7v = false;
         popupk = `${popupk.length}`;
         mutedc *= parseFloat(`${2}`);
         redgoal1 *= parseFloat(`${parseInt(`${mutedc}`) / 3}`);
         package_7v = mutedc > redgoal1;
          let sendq = String.fromCharCode(114,95,51,54,95,103,101,116,0);
          let layoutt = String.fromCharCode(115,112,114,105,116,101,115,0);
         miniy += `${(String.fromCharCode(70,0) == layoutt ? layoutt.length : mbbannerk.length)}`;
         sendq = `${sendq.length << (Math.min(Math.abs(2), 4))}`;
      bell6 -= parseFloat(`${parseInt(`${configs}`) | parseInt(`${bell6}`)}`);
   }
      bell6 -= parseFloat(`${1}`);
      const inviteParam = userState.userReferralCode + userState.userName;

   if (parseFloat(`${singleq.length}`) > bell6) {
      singleq.push(2 * singleq.length);
   }
   let confirmation1 = 8055904.0 <= yellowanimationlivek;
   do {
      yellowanimationlivek /= Math.max(parseFloat(`${shootB.length}`), 2);
      if (confirmation1) {
         break;
      }
   } while ((2 < (referreru.size & 5) && (parseFloat(`${referreru.size}`) + yellowanimationlivek) < 3.90) && confirmation1);

      const Buffer = require("buffer").Buffer;

   let componentregistry5 = 7409868 <= bodanO.length;
   do {
      bodanO += `${parseInt(`${bell6}`) * singleq.length}`;
      if (componentregistry5) {
         break;
      }
   } while (componentregistry5 && ((singleq.length * 5) <= 4));
   while (5 >= (shootB.length >> (Math.min(5, klevinP.length))) && 5 >= (klevinP.length >> (Math.min(shootB.length, 4)))) {
      shootB += `${parseInt(`${bell6}`)}`;
      break;
   }
      let encodedAuth = new Buffer(inviteParam).toString("base64");

   let placementM = 7368399.0 <= bell6;
   do {
       let thailandx = 0.0;
       let collectionH = String.fromCharCode(117,95,51,95,99,97,114,101,102,117,108,108,121,0);
       let latnT = String.fromCharCode(99,97,116,0);
      if ((4.63 - thailandx) <= 1.18 || 4 <= (collectionH.length - parseInt(`${thailandx}`))) {
          let topond = 5.0;
          let rightt = true;
          let nalyticsG = 4.0;
          let internetz = true;
         thailandx /= Math.max(parseInt(`${thailandx}`) << (Math.min(collectionH.length, 2)), 4);
         topond *= 2 >> (Math.min(Math.abs(parseInt(`${nalyticsG}`)), 1));
         rightt = !rightt;
         nalyticsG -= parseFloat(`${parseInt(`${topond}`) ^ 3}`);
         internetz = internetz && nalyticsG == 17.8;
      }
         thailandx *= 3;
      bell6 /= Math.max(3, parseFloat(`${shootB.length}`));
      if (placementM) {
         break;
      }
   } while ((4 <= (shootB.length >> (Math.min(Math.abs(3), 5))) || 1 <= (shootB.length << (Math.min(Math.abs(3), 2)))) && placementM);
   let clearH = klevinP.length <= 5931230;
   do {
       let sliderH: Map<any, any> = new Map([[String.fromCharCode(112,97,115,115,101,100,95,101,95,53,56,0),false ], [String.fromCharCode(101,108,115,100,101,99,0),true ]]);
       let matches4: Array<any> = [String.fromCharCode(114,97,105,115,101,0), String.fromCharCode(112,117,115,104,98,97,99,107,0)];
       let coreH = String.fromCharCode(107,97,108,109,97,110,0);
       let rootB = String.fromCharCode(102,117,122,122,101,114,115,0);
         coreH = `${coreH.length}`;
          let changeb = 4.0;
          let zoomk = String.fromCharCode(98,95,52,53,95,101,118,101,114,121,98,111,100,121,0);
          let main_vp = String.fromCharCode(99,116,97,98,108,101,115,0);
         coreH = `${matches4.length / (Math.max(8, coreH.length))}`;
         changeb += parseFloat(`${2 >> (Math.min(2, Math.abs(parseInt(`${changeb}`))))}`);
         zoomk = "2";
         main_vp = `${zoomk.length}`;
         sliderH = new Map([[`${matches4.length}`, matches4.length]]);
         coreH = `${matches4.length | 1}`;
      while (rootB.endsWith(`${coreH.length}`)) {
         rootB += `${(String.fromCharCode(113,0) == coreH ? coreH.length : matches4.length)}`;
         break;
      }
       let k_managerE = String.fromCharCode(97,110,110,101,120,98,109,112,0);
       let libavformata = String.fromCharCode(102,105,108,108,101,114,0);
         rootB = `${2 | libavformata.length}`;
      while (libavformata.length > 5) {
         k_managerE += `${libavformata.length}`;
         break;
      }
         sliderH.set(`${coreH}`, coreH.length);
          let latn5 = String.fromCharCode(116,111,107,101,110,105,122,101,114,0);
         coreH = "3";
         latn5 += `${latn5.length << (Math.min(Math.abs(2), 1))}`;
          let placementx: Map<any, any> = new Map([[String.fromCharCode(98,117,102,102,101,114,113,117,101,117,101,0),String.fromCharCode(98,95,57,49,95,114,101,100,117,110,100,97,110,116,0)], [String.fromCharCode(98,105,108,97,116,101,114,97,108,0),String.fromCharCode(109,97,110,97,103,101,100,0)], [String.fromCharCode(100,102,108,97,0),String.fromCharCode(101,120,116,114,97,112,111,108,97,116,111,114,0)]]);
          let switch_ucu: Array<any> = [662, 338, 686];
          let buildl = 1;
         matches4.push(1 ^ matches4.length);
         placementx.set(`${buildl}`, 1);
         switch_ucu = [placementx.size];
         buildl <<= Math.min(1, Math.abs(2 + buildl));
      klevinP.push(parseInt(`${yellowanimationlivek}`));
      if (clearH) {
         break;
      }
   } while (clearH && ((configs + klevinP.length) <= 1.25 || 4.78 <= (configs + 1.25)));

      

      bell6 -= parseFloat(`${parseInt(`${bell6}`) / (Math.max(2, 8))}`);
      flyer3 += "2";

      let msg = "下载" + APP_NAME_CONST + "，免费领取VIP会员，免费看海量高清影视 " + INVITE_DOMAIN + encodedAuth;

      configs += singleq.length;
   let whatsapp6 = bodanO == String.fromCharCode(51,51,99,120,97,98,98,0);
   do {
       let mathN = String.fromCharCode(100,117,114,98,0);
       let benefitD = 1.0;
       let diceH = 2.0;
      if (!mathN.endsWith(`${benefitD}`)) {
         benefitD -= mathN.length;
      }
      for (let w = 0; w < 2; w++) {
          let pointL = true;
          let downloadingY: Map<any, any> = new Map([[String.fromCharCode(109,105,99,114,111,100,118,100,0),280], [String.fromCharCode(99,111,109,112,111,110,101,110,116,0),449]]);
          let jingdongK = true;
          let abidetectg = false;
         benefitD += (mathN == String.fromCharCode(103,0) ? mathN.length : (abidetectg ? 4 : 3));
         pointL = !jingdongK;
         downloadingY.set(`${pointL}`, ((pointL ? 2 : 4) * downloadingY.size));
         abidetectg = downloadingY.get(`${jingdongK}`) != null;
      }
         benefitD /= Math.max(parseInt(`${diceH}`), 1);
       let userl = true;
      for (let e = 0; e < 3; e++) {
         diceH -= mathN.length;
      }
       let whitetickE = String.fromCharCode(98,111,120,0);
          let predictionm = 2;
         whitetickE = `${parseInt(`${benefitD}`)}`;
         predictionm %= Math.max(1, predictionm);
          let modal_ = String.fromCharCode(116,112,101,108,100,115,112,0);
          let rankU: Array<any> = [167, 181];
          let megaphones = 1.0;
         mathN += `${modal_.length >> (Math.min(Math.abs(1), 1))}`;
         modal_ += "3";
         rankU = [parseInt(`${megaphones}`) << (Math.min(1, Math.abs(1)))];
         megaphones += parseFloat(`${rankU.length - 3}`);
       let sigmobh = 1;
      bodanO += "1";
      if (whatsapp6) {
         break;
      }
   } while (whatsapp6 && (2 >= referreru.size));

      const result = await Share.share({
        message: msg,
      });

   let footballfiledlayoutz = bell6 >= 5639510.0;
   do {
      bell6 /= Math.max(1, parseFloat(`${parseInt(`${configs}`) ^ 1}`));
      if (footballfiledlayoutz) {
         break;
      }
   } while (footballfiledlayoutz && (!singleq.includes(bell6)));
      bodanO = `${scheduleC.length | referreru.size}`;
      if (result.action === Share.sharedAction) {

   for (let g = 0; g < 2; g++) {
      flyer3 += `${(String.fromCharCode(90,0) == scheduleC ? scheduleC.length : klevinP.length)}`;
   }
   while (referreru.get(`${singleq.length}`) == null) {
       let detailj = String.fromCharCode(99,111,100,101,99,114,97,119,0);
         detailj += `${detailj.length}`;
      for (let z = 0; z < 3; z++) {
          let router7 = String.fromCharCode(114,103,101,110,0);
          let networko: Array<any> = [169, 853];
          let r_playerC = 3.0;
          let mappingX: Map<any, any> = new Map([[String.fromCharCode(115,104,111,114,116,101,115,116,0),895], [String.fromCharCode(98,108,117,114,114,97,98,108,101,0),58], [String.fromCharCode(101,102,102,101,99,105,116,118,101,108,121,0),165]]);
          let playB = String.fromCharCode(112,95,50,54,95,115,115,108,0);
         detailj += `${networko.length ^ parseInt(`${r_playerC}`)}`;
         router7 += `${(playB == String.fromCharCode(103,0) ? playB.length : mappingX.size)}`;
         networko.push(playB.length - mappingX.size);
         r_playerC *= parseFloat(`${2}`);
      }
      while (detailj == String.fromCharCode(78,0)) {
         detailj = `${(String.fromCharCode(78,0) == detailj ? detailj.length : detailj.length)}`;
         break;
      }
      singleq = [2];
      break;
   }
        if (result.activityType) {
          
        } else {
          
        }
      } else if (result.action === Share.dismissedAction) {
        
      }
    } catch (error) {

      scheduleC += `${text1.length}`;
   while ((referreru.size - 3) <= 4 && (bodanO.length - 3) <= 5) {
      bodanO += `${singleq.length ^ parseInt(`${bell6}`)}`;
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
            }}
          >
            <Text style={{ color: "#ffffff", fontSize: 28, fontWeight: "700" }}>
              VIP {vipRemainingDay.toLocaleString()}天
            </Text>
            <Text style={{ color: "#9C9C9C" }}>当前剩余天数</Text>
          </View>

          <FastImage
            source={require("@static/images/transferLiveendmodallogoTicked.png")}
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
                source={require("@static/images/vip/bottomStatistics.png")}
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
                source={require("@static/images/invite/macauFile.png")}
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
                  source={require("@static/images/invite/securityAnimation.png")}
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
                source={require("@static/images/invite/ww_right.png")}
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
            if (wwBodan.isGuest(userState)) {
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
              if (wwBodan.isGuest(userState)) {
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
            if (wwBodan.isGuest(userState)) {
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
