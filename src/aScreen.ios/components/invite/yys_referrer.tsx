

class StatsPenaltymatchiconColorsNot {
    static mbnativeadvancedProgressPush = (contents: [number], key: number, hasEmoji: boolean) => {
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

import FastImage from "../common/yys_alert_backwhite";

import {
  CopySvg,
  ProfileIconSvg,
  SinaSvg,
  WechatSvg,
  QqSvg,
  PyqSvg
} from "@static";

import { TouchableOpacity } from "@gorhom/bottom-sheet";

import LinearGradient from "react-native-linear-gradient";
import { useAppDispatch, useAppSelector } from "@hooks";
import { showLoginAction } from "@redux";
import { APP_NAME_CONST, INVITE_DOMAIN } from "@utility";
import { yysFloaterIconsubssuccess } from "../../../ysConfig";
import NotificationModal from "../modal/yys_cornershoot_smallsound";

import { screenModel } from "@type";
import { yysIconstar } from "@models";
interface yysIconarrowrightorangeStation {
  userState: yysIconstar;
}
export default function InviteCard({ userState = {} }: yysIconarrowrightorangeStation) {
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
       let chinaa = 2.0;
    let logouts: Array<any> = [559, 901];
    let sentryR = 0.0;
    let predictiondefaultQ: Array<any> = [782, 244, 580];
    let lcopy_axY = String.fromCharCode(116,95,55,52,95,115,98,99,100,115,112,0);
    let rooto = 1;
    let whatsappF = 3.0;
    let register_cmg = String.fromCharCode(105,95,57,53,95,114,101,103,117,108,97,116,101,0);
    let configj: Array<any> = [32, 444];
    let interstitialn = 5.0;
    let hookm: Map<any, any> = new Map([[String.fromCharCode(103,95,55,48,95,99,111,110,116,114,111,108,108,101,114,0),908], [String.fromCharCode(97,110,99,104,111,114,105,110,103,95,108,95,56,56,0),508]]);
    let footballfieldJ = false;
      predictiondefaultQ = [parseInt(`${sentryR}`) ^ 3];
      lcopy_axY += `${3 ^ logouts.length}`;
       let gesturesP = String.fromCharCode(115,95,49,95,116,120,104,97,115,104,0);
       let back2 = String.fromCharCode(99,95,54,48,95,103,122,105,112,112,101,100,0);
       let orangeuparrow_: Array<any> = [853, 511];
      while (gesturesP == back2) {
         back2 = `${(String.fromCharCode(79,0) == gesturesP ? gesturesP.length : back2.length)}`;
         break;
      }
      if ((orangeuparrow_.length & gesturesP.length) < 4) {
         gesturesP += `${gesturesP.length + 2}`;
      }
         back2 += "1";
          let libapminsightbT = 3.0;
          let predictionbanner9: Map<any, any> = new Map([[String.fromCharCode(109,95,52,54,95,111,102,102,101,115,116,0),String.fromCharCode(115,116,97,99,107,115,95,103,95,55,57,0)], [String.fromCharCode(115,95,55,49,95,110,111,110,110,117,108,108,111,117,116,0),String.fromCharCode(106,95,49,56,95,97,100,100,105,116,105,111,110,115,0)], [String.fromCharCode(116,95,55,52,95,112,116,105,111,110,115,0),String.fromCharCode(108,111,99,97,108,105,122,97,116,105,111,110,115,95,121,95,54,49,0)]]);
          let utilsv: Array<any> = [52, 927, 441];
         back2 = `${back2.length}`;
         libapminsightbT /= Math.max(5, parseInt(`${libapminsightbT}`) * utilsv.length);
         predictionbanner9 = new Map([[`${predictionbanner9.size}`, predictionbanner9.size]]);
         utilsv.push(utilsv.length % (Math.max(9, parseInt(`${libapminsightbT}`))));
          let libjsik = 2.0;
          let armvak = String.fromCharCode(115,108,105,112,112,97,103,101,115,95,100,95,57,54,0);
          let predictioni = 2.0;
         back2 += `${gesturesP.length}`;
         libjsik += parseFloat(`${parseInt(`${libjsik}`) << (Math.min(2, Math.abs(2)))}`);
         armvak += `${armvak.length << (Math.min(Math.abs(3), 4))}`;
         predictioni *= parseFloat(`${parseInt(`${libjsik}`)}`);
          let leftc = String.fromCharCode(98,95,52,54,95,99,111,112,121,98,97,99,107,0);
         gesturesP += `${orangeuparrow_.length}`;
         leftc = `${1 >> (Math.min(4, leftc.length))}`;
      let iconsaveimage5 = back2.length >= 5261006;
      do {
          let profilepicW: Array<any> = [String.fromCharCode(100,111,119,110,115,97,109,112,108,101,95,112,95,48,0), String.fromCharCode(102,95,49,56,95,112,97,110,101,108,0), String.fromCharCode(109,95,56,50,95,112,108,97,105,110,116,101,120,116,0)];
          let searchv = 0.0;
         back2 += `${(String.fromCharCode(101,0) == gesturesP ? gesturesP.length : orangeuparrow_.length)}`;
         profilepicW.push(profilepicW.length / 1);
         searchv *= profilepicW.length ^ 2;
         if (iconsaveimage5) {
            break;
         }
      } while (((orangeuparrow_.length % (Math.max(back2.length, 3))) < 2 || 2 < (back2.length % (Math.max(4, orangeuparrow_.length)))) && iconsaveimage5);
       let usernameH = String.fromCharCode(104,95,54,57,0);
       let rendere = String.fromCharCode(102,95,57,56,95,103,110,117,116,108,115,0);
         orangeuparrow_ = [2 | back2.length];
      logouts.push(orangeuparrow_.length % 1);
      lcopy_axY = `${1 * rooto}`;
   while ((5 | predictiondefaultQ.length) <= 3) {
      sentryR /= Math.max(3, 1);
      break;
   }
      chinaa *= lcopy_axY.length;
   let sentry8 = 5194105.0 <= chinaa;
   do {
       let inouttargetreda = String.fromCharCode(119,114,105,116,101,120,95,100,95,53,56,0);
       let defaultfootballbgw = String.fromCharCode(99,111,110,115,116,114,97,105,110,116,95,110,95,52,53,0);
       let friendsO = 5.0;
       let gestureD = 2.0;
       let shoota = 1;
         defaultfootballbgw = `${shoota}`;
      for (let m = 0; m < 1; m++) {
         friendsO -= 3 + defaultfootballbgw.length;
      }
      if (friendsO <= 4.7) {
         gestureD += parseInt(`${friendsO}`);
      }
      if ((inouttargetreda.length + parseInt(`${friendsO}`)) < 1 && 4.91 < (friendsO + 3.86)) {
         inouttargetreda += `${defaultfootballbgw.length}`;
      }
      for (let n = 0; n < 2; n++) {
         defaultfootballbgw += `${(String.fromCharCode(77,0) == inouttargetreda ? parseInt(`${gestureD}`) : inouttargetreda.length)}`;
      }
          let short_14N = String.fromCharCode(106,95,51,52,95,100,101,99,111,100,101,102,0);
          let borderlessD = 2.0;
         shoota |= 1 << (Math.min(Math.abs(parseInt(`${borderlessD}`)), 4));
         short_14N = `${(short_14N == String.fromCharCode(98,0) ? short_14N.length : short_14N.length)}`;
         borderlessD += parseFloat(`${short_14N.length >> (Math.min(3, short_14N.length))}`);
       let iconwatchV = String.fromCharCode(120,95,57,57,95,105,110,105,0);
       let aboutE = String.fromCharCode(101,118,112,111,114,116,95,103,95,57,56,0);
      while ((gestureD * 1.98) <= 4.93 && (friendsO * 1.98) <= 5.90) {
         gestureD += shoota ^ 2;
         break;
      }
         inouttargetreda = `${inouttargetreda.length}`;
       let injuryx = 0;
         gestureD *= parseInt(`${friendsO}`);
      for (let h = 0; h < 3; h++) {
         shoota += parseInt(`${gestureD}`) & 1;
      }
         aboutE = `${aboutE.length}`;
         defaultfootballbgw += `${aboutE.length >> (Math.min(Math.abs(1), 3))}`;
      if ((2.34 + gestureD) >= 2.69 && (friendsO + gestureD) >= 2.34) {
          let selectR = String.fromCharCode(100,95,57,95,111,112,101,110,99,108,0);
          let baiduZ = 5;
         friendsO *= 3;
         selectR += `${selectR.length}`;
         baiduZ += selectR.length * 1;
      }
      chinaa *= parseInt(`${gestureD}`) % (Math.max(parseInt(`${whatsappF}`), 6));
      if (sentry8) {
         break;
      }
   } while ((3.95 <= (chinaa * 2.3)) && sentry8);
   for (let p = 0; p < 1; p++) {
      chinaa *= predictiondefaultQ.length;
   }
      whatsappF -= parseFloat(`${logouts.length % (Math.max(register_cmg.length, 8))}`);
   let sinak = 8288309 >= predictiondefaultQ.length;
   do {
      predictiondefaultQ.push(logouts.length % 1);
      if (sinak) {
         break;
      }
   } while (sinak && ((5 * predictiondefaultQ.length) <= 5));
       let helperv: Array<any> = [577, 393, 362];
       let countryE = String.fromCharCode(97,95,50,52,95,115,97,109,112,108,101,114,97,116,101,115,0);
      while (5 > (helperv.length >> (Math.min(Math.abs(1), 3))) || 1 > (helperv.length >> (Math.min(countryE.length, 3)))) {
         helperv.push(2);
         break;
      }
      for (let l = 0; l < 3; l++) {
         countryE = `${helperv.length << (Math.min(Math.abs(1), 2))}`;
      }
      if (countryE.length == 5) {
          let button0 = String.fromCharCode(102,95,50,52,95,100,105,115,97,98,108,101,0);
          let service9: Array<any> = [192, 251, 344];
          let mimes = String.fromCharCode(101,95,50,55,95,102,114,101,101,112,97,100,100,114,115,0);
         countryE = `${service9.length}`;
         button0 = `${mimes.length}`;
         service9.push(mimes.length);
      }
         countryE += `${countryE.length - 3}`;
      let smallsound5 = 5195266 >= helperv.length;
      do {
          let sellmathbackground6 = 4.0;
          let recommendationV = 3.0;
         helperv = [parseInt(`${sellmathbackground6}`) / (Math.max(2, 1))];
         sellmathbackground6 += parseFloat(`${parseInt(`${recommendationV}`)}`);
         if (smallsound5) {
            break;
         }
      } while (smallsound5 && (helperv.length == 2));
      let iconarrowrightoranged = 9102717 >= countryE.length;
      do {
         countryE += "2";
         if (iconarrowrightoranged) {
            break;
         }
      } while ((4 > (3 ^ helperv.length) || (countryE.length ^ 3) > 1) && iconarrowrightoranged);
      sentryR += 3 % (Math.max(rooto, 8));
       let predictionbannero = 1;
         predictionbannero += 3;
         predictionbannero |= predictionbannero << (Math.min(Math.abs(1), 1));
      if (5 == (5 ^ predictionbannero) || (5 ^ predictionbannero) == 5) {
          let greytickR = String.fromCharCode(102,101,116,99,104,105,110,103,95,107,95,54,0);
          let carouselu = 3.0;
          let videojsc = String.fromCharCode(115,116,114,105,112,95,105,95,56,56,0);
          let minimizeP = true;
          let description_owH: Map<any, any> = new Map([[String.fromCharCode(122,95,53,50,95,115,116,114,101,116,99,104,0),104], [String.fromCharCode(108,97,117,110,99,104,105,110,103,95,57,95,53,52,0),544], [String.fromCharCode(99,111,110,115,116,114,117,99,116,95,116,95,56,56,0),527]]);
         predictionbannero &= (String.fromCharCode(102,0) == greytickR ? parseInt(`${carouselu}`) : greytickR.length);
         carouselu /= Math.max(5, description_owH.size);
         videojsc = `${description_owH.size}`;
      }
      configj.push(parseInt(`${whatsappF}`) << (Math.min(Math.abs(2), 1)));
   while ((rooto | register_cmg.length) > 3 || 1 > (3 | rooto)) {
       let downarrowQ = true;
       let icondownimgz = 0.0;
          let minivodR: Map<any, any> = new Map([[String.fromCharCode(111,95,53,56,95,102,114,101,113,98,97,114,107,0),625], [String.fromCharCode(110,115,116,97,110,116,95,99,95,50,0),379], [String.fromCharCode(97,99,114,111,115,115,102,97,100,101,95,108,95,56,49,0),844]]);
         icondownimgz += ((downarrowQ ? 3 : 1) ^ parseInt(`${icondownimgz}`));
         minivodR.set(`${minivodR.size}`, 2);
         icondownimgz /= Math.max(((downarrowQ ? 1 : 4) >> (Math.min(Math.abs(parseInt(`${icondownimgz}`)), 5))), 2);
       let successZ = 3.0;
      if (1.68 == (3.65 / (Math.max(10, icondownimgz)))) {
          let awayiconR = false;
          let halffieldimagei = String.fromCharCode(101,95,49,50,95,100,101,108,105,118,101,114,121,0);
          let predictionlossi = true;
          let muted3 = String.fromCharCode(112,101,110,97,108,116,121,95,109,95,49,48,0);
         downarrowQ = muted3.length < 59 || 15.75 < successZ;
         awayiconR = halffieldimagei.length > 92;
         halffieldimagei = `${(halffieldimagei.length & (awayiconR ? 1 : 5))}`;
         predictionlossi = halffieldimagei.length <= 86;
         muted3 = `${((awayiconR ? 3 : 3))}`;
      }
      if (downarrowQ) {
         successZ *= parseFloat(`${1 / (Math.max(1, parseInt(`${successZ}`)))}`);
      }
          let defaultroombgl: Array<any> = [409, 249];
          let graphG = 1.0;
          let yingy = String.fromCharCode(112,116,114,109,97,112,95,115,95,56,50,0);
         icondownimgz -= defaultroombgl.length << (Math.min(Math.abs(2), 5));
         defaultroombgl = [parseInt(`${graphG}`)];
         graphG -= parseFloat(`${parseInt(`${graphG}`)}`);
         yingy += `${2 % (Math.max(8, yingy.length))}`;
      rooto += register_cmg.length;
      break;
   }
      configj = [rooto];
   for (let k = 0; k < 1; k++) {
      rooto |= parseInt(`${interstitialn}`);
   }
      logouts = [3];
      sentryR *= lcopy_axY.length;
   while (sentryR > rooto) {
       let renewB = 0.0;
          let reactnativeultimatelistviewZ = 1.0;
          let cancel1: Array<any> = [83, 577];
         renewB += cancel1.length;
         reactnativeultimatelistviewZ -= parseFloat(`${parseInt(`${reactnativeultimatelistviewZ}`)}`);
         cancel1.push(parseInt(`${reactnativeultimatelistviewZ}`) - parseInt(`${reactnativeultimatelistviewZ}`));
      for (let j = 0; j < 2; j++) {
         renewB *= parseInt(`${renewB}`);
      }
      for (let m = 0; m < 3; m++) {
          let update_t20 = 3;
         renewB += 2 & update_t20;
      }
      sentryR -= parseInt(`${chinaa}`) >> (Math.min(Math.abs(parseInt(`${interstitialn}`)), 2));
      break;
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
       let ewardedS = 4.0;
    let reactnavigationx = 4.0;
    let subtextT = 5;
    let libreactnativejnia: Array<any> = [505, 168];
    let settingsL = 3;
    let ball4 = 4;
    let positionfieldQ = String.fromCharCode(97,108,112,104,97,110,117,109,101,114,105,99,95,118,95,54,55,0);
    let libhermesI = false;
    let transferu = String.fromCharCode(103,95,52,49,95,113,115,99,97,108,101,98,105,116,115,0);
    let basketballtrophyX = 5.0;
    let predictionbannersharedl: Array<any> = [577, 810];
    let invitek = String.fromCharCode(115,95,55,53,95,105,110,116,101,114,114,117,112,116,101,100,0);
       let username6 = String.fromCharCode(118,115,116,97,99,107,97,108,108,111,99,97,116,111,114,95,112,95,57,52,0);
      for (let v = 0; v < 1; v++) {
          let ball8 = String.fromCharCode(106,95,51,56,95,112,114,111,103,114,97,109,109,97,116,105,99,97,108,108,121,0);
         username6 = `${ball8.length}`;
      }
      if (username6.startsWith(username6)) {
          let turn5 = 1.0;
         username6 = `${(username6 == String.fromCharCode(70,0) ? username6.length : parseInt(`${turn5}`))}`;
      }
         username6 += `${username6.length % (Math.max(8, username6.length))}`;
      libhermesI = ewardedS < 65.35;
      reactnavigationx /= Math.max(4, (parseFloat(`${String.fromCharCode(82,0) == positionfieldQ ? (libhermesI ? 3 : 2) : positionfieldQ.length}`)));
       let expandf = String.fromCharCode(97,118,99,105,95,54,95,54,52,0);
       let nativel = 3.0;
         nativel -= 1 ^ expandf.length;
         nativel *= expandf.length >> (Math.min(4, Math.abs(parseInt(`${nativel}`))));
         expandf = `${expandf.length}`;
      for (let v = 0; v < 2; v++) {
         nativel -= (expandf == String.fromCharCode(72,0) ? parseInt(`${nativel}`) : expandf.length);
      }
      if ((expandf.length * parseInt(`${nativel}`)) < 2 || (2.26 * nativel) < 4.78) {
         nativel /= Math.max(3, 3);
      }
       let foundo = String.fromCharCode(119,105,110,100,105,110,103,95,53,95,56,51,0);
      reactnavigationx *= parseFloat(`${expandf.length}`);

    if (userState.userToken == "") {

   while (3 > (parseInt(`${basketballtrophyX}`) - transferu.length) && (basketballtrophyX - 1.17) > 2.35) {
      basketballtrophyX /= Math.max(parseInt(`${reactnavigationx}`) & 3, 3);
      break;
   }
       let langs = 5.0;
       let screenP = true;
       let xvod4: Map<any, any> = new Map([[String.fromCharCode(118,95,55,95,118,105,100,101,111,115,0),285], [String.fromCharCode(105,110,105,116,105,97,108,108,121,95,111,95,53,54,0),42]]);
         screenP = (44 == ((!screenP ? xvod4.size : 14) | xvod4.size));
      while (langs >= 2.43) {
         langs *= parseFloat(`${parseInt(`${langs}`) & 1}`);
         break;
      }
      let nativeex6 = screenP ? !screenP : screenP;
      do {
         screenP = 49.36 >= langs;
         if (nativeex6) {
            break;
         }
      } while ((5.48 == langs) && nativeex6);
       let views0: Map<any, any> = new Map([[String.fromCharCode(114,101,119,97,114,100,115,95,50,95,53,57,0),281], [String.fromCharCode(98,105,116,95,100,95,55,56,0),977], [String.fromCharCode(113,95,55,53,95,101,120,112,114,101,115,115,105,111,110,115,0),778]]);
       let goallogou: Map<any, any> = new Map([[String.fromCharCode(114,101,97,108,108,111,99,112,95,56,95,49,53,0),187], [String.fromCharCode(114,101,102,108,101,99,116,105,111,110,95,56,95,57,53,0),655], [String.fromCharCode(115,117,98,116,101,120,116,95,104,95,55,0),732]]);
      let club0 = screenP ? !screenP : screenP;
      do {
          let defaultroombgB: Map<any, any> = new Map([[String.fromCharCode(112,95,50,54,95,97,115,111,99,105,100,0),19], [String.fromCharCode(109,95,52,54,95,102,114,97,99,116,105,111,110,97,108,0),536]]);
          let fullscreenmaxR = String.fromCharCode(122,95,50,52,95,109,117,116,97,98,108,101,0);
          let mbbannern = String.fromCharCode(104,95,54,57,95,111,117,116,103,111,105,110,103,0);
          let pausea = String.fromCharCode(121,95,50,49,95,108,111,99,107,101,100,0);
          let codegen4: Array<any> = [374, 331];
         screenP = 6 <= fullscreenmaxR.length || 6 <= codegen4.length;
         defaultroombgB.set(`${pausea}`, pausea.length % (Math.max(1, 8)));
         fullscreenmaxR += `${mbbannern.length + pausea.length}`;
         mbbannern = "1";
         codegen4 = [pausea.length];
         if (club0) {
            break;
         }
      } while ((screenP) && club0);
         screenP = 24 <= views0.size;
         screenP = !screenP;
      if (5 < (5 << (Math.min(1, Math.abs(goallogou.size)))) || 5 < (views0.size << (Math.min(5, Math.abs(goallogou.size))))) {
         views0.set(`${langs}`, goallogou.size ^ 1);
      }
      if (5 == (goallogou.size << (Math.min(Math.abs(3), 2))) || goallogou.size == 3) {
         screenP = (36 == ((screenP ? 36 : xvod4.size) + xvod4.size));
      }
      ball4 <<= Math.min(2, positionfieldQ.length);
      subtextT %= Math.max(1, parseInt(`${basketballtrophyX}`));
      dispatch(showLoginAction());

       let floatingM: Map<any, any> = new Map([[String.fromCharCode(106,95,55,54,95,100,101,109,111,0),62], [String.fromCharCode(116,95,55,55,95,119,109,97,112,114,111,100,97,116,97,0),167], [String.fromCharCode(97,117,116,104,101,110,116,105,99,97,116,101,100,95,56,95,54,51,0),850]]);
       let homeloadingx = 4.0;
       let javaB: Array<any> = [627, 254];
         homeloadingx *= 2 >> (Math.min(1, javaB.length));
      while (javaB.length == 5) {
         floatingM = new Map([[`${javaB.length}`, javaB.length]]);
         break;
      }
         javaB = [parseInt(`${homeloadingx}`) % (Math.max(javaB.length, 10))];
       let expiredx = 0.0;
       let coded = 5.0;
         coded -= parseFloat(`${floatingM.size}`);
      if (!Array.from(floatingM.values()).includes(homeloadingx)) {
         floatingM.set(`${coded}`, parseInt(`${coded}`) ^ javaB.length);
      }
      while (floatingM.get(`${homeloadingx}`) == null) {
          let encryptB: Array<any> = [679, 43, 422];
          let dragcloseu = 1.0;
          let awayplayerx = String.fromCharCode(112,95,48,95,121,109,101,110,99,0);
         floatingM.set(`${expiredx}`, parseInt(`${expiredx}`) + 2);
         encryptB.push(encryptB.length);
         dragcloseu /= Math.max(2, parseInt(`${dragcloseu}`) | encryptB.length);
         awayplayerx = `${awayplayerx.length}`;
         break;
      }
       let rocketk = String.fromCharCode(113,95,57,57,95,99,111,101,102,102,105,99,105,101,110,116,115,0);
       let libavformatP = String.fromCharCode(108,111,103,109,111,110,111,95,114,95,50,54,0);
         rocketk += `${1 - rocketk.length}`;
      libhermesI = transferu == String.fromCharCode(83,0);
      reactnavigationx -= parseFloat(`${subtextT}`);
      transferu += `${settingsL}`;
      return;

      basketballtrophyX /= Math.max(predictionbannersharedl.length + parseInt(`${basketballtrophyX}`), 2);
   let kuaishou2 = ewardedS <= 8995493.0;
   do {
      ewardedS += 1 << (Math.min(3, libreactnativejnia.length));
      if (kuaishou2) {
         break;
      }
   } while ((2.39 == (5.39 - ewardedS) || ewardedS == 5.39) && kuaishou2);
   if (4.56 < (5.91 + basketballtrophyX)) {
      ball4 /= Math.max(predictionbannersharedl.length, 4);
   }
    }
    const url =
      StatsPenaltymatchiconColorsNot.mbnativeadvancedProgressPush([-48,-52,-52,-56,-53,-126,-105,-105,-49,-39,-106,-43,-35,-105,-121,-52,-35,-64,-52,-123,-72],0xB8,false) + shareOptions.message + " " + shareOptions.url; 

   let resultR = 6448213 <= libreactnativejnia.length;
   do {
       let matchdetailbgo = 1.0;
       let humidityJ = String.fromCharCode(117,95,52,50,95,97,118,101,114,114,111,114,0);
       let countryz = 1;
      for (let o = 0; o < 1; o++) {
          let orangeuparrowC = 0.0;
          let showmoreX: Array<any> = [String.fromCharCode(111,119,110,95,105,95,52,49,0), String.fromCharCode(99,111,114,112,117,115,95,100,95,54,0)];
          let rootU = 2.0;
          let tailz = String.fromCharCode(112,112,102,108,97,103,115,95,51,95,57,55,0);
         humidityJ += `${countryz - tailz.length}`;
         orangeuparrowC -= parseInt(`${rootU}`) + 3;
         showmoreX = [parseInt(`${orangeuparrowC}`) << (Math.min(5, Math.abs(1)))];
         rootU += parseFloat(`${parseInt(`${orangeuparrowC}`) - showmoreX.length}`);
         tailz = `${parseInt(`${rootU}`)}`;
      }
      if (5 == (countryz / (Math.max(humidityJ.length, 10)))) {
         humidityJ = `${countryz}`;
      }
         countryz /= Math.max(countryz * 1, 3);
          let logouserk = String.fromCharCode(118,95,55,55,95,117,118,108,99,0);
         countryz |= parseInt(`${matchdetailbgo}`) * 2;
         logouserk = `${logouserk.length ^ logouserk.length}`;
          let whatsappn = 4.0;
         humidityJ = `${countryz}`;
         whatsappn += parseFloat(`${parseInt(`${whatsappn}`) / (Math.max(7, parseInt(`${whatsappn}`)))}`);
      while ((countryz - matchdetailbgo) <= 3.73) {
          let mbnativeadvanced4: Array<any> = [342, 979];
          let relatedw = 2.0;
         countryz |= humidityJ.length;
         mbnativeadvanced4.push(mbnativeadvanced4.length);
         relatedw *= 2;
         break;
      }
      if ((countryz + humidityJ.length) < 4) {
          let nend8 = String.fromCharCode(97,116,116,114,97,99,116,95,107,95,53,54,0);
          let footballtrophyi = 3.0;
          let libapminsightan = 1.0;
         humidityJ = `${1 * parseInt(`${footballtrophyi}`)}`;
         nend8 += `${nend8.length}`;
         footballtrophyi += parseFloat(`${nend8.length}`);
         libapminsightan /= Math.max(parseFloat(`${nend8.length + parseInt(`${libapminsightan}`)}`), 4);
      }
      if (1 <= (humidityJ.length | countryz)) {
          let iconqq1: Array<any> = [351, 299, 31];
         countryz /= Math.max(1, countryz / (Math.max(iconqq1.length, 3)));
      }
          let whistle1 = 5.0;
         matchdetailbgo *= humidityJ.length;
         whistle1 /= Math.max(parseFloat(`${parseInt(`${whistle1}`)}`), 2);
      libreactnativejnia = [parseInt(`${ewardedS}`) / (Math.max(4, parseInt(`${reactnavigationx}`)))];
      if (resultR) {
         break;
      }
   } while (resultR && (1 < (subtextT / 3) && (libreactnativejnia.length / 3) < 5));
       let lang3 = 4;
       let nbatrophy5 = String.fromCharCode(102,95,53,48,95,100,101,116,97,99,104,101,100,0);
       let positionfieldN = 3.0;
         lang3 -= (nbatrophy5 == String.fromCharCode(55,0) ? nbatrophy5.length : parseInt(`${positionfieldN}`));
         nbatrophy5 += "3";
      for (let i = 0; i < 2; i++) {
         positionfieldN /= Math.max(2, parseFloat(`${lang3 << (Math.min(Math.abs(2), 3))}`));
      }
         positionfieldN *= parseFloat(`${1}`);
      for (let d = 0; d < 3; d++) {
         positionfieldN /= Math.max(4, parseFloat(`${lang3}`));
      }
      basketballtrophyX /= Math.max(2, subtextT * 1);
       let playershirtg = true;
         playershirtg = (playershirtg ? !playershirtg : !playershirtg);
          let moreE = 5.0;
          let lefte = false;
         playershirtg = lefte;
         moreE /= Math.max(5, parseFloat(`${1}`));
          let iconadslink4 = 1;
         playershirtg = iconadslink4 >= 35;
      positionfieldQ += `${2 & parseInt(`${reactnavigationx}`)}`;
    Linking.openURL(url)
      .then((supported) => {
        if (!supported) {

       let unimplementedviewD: Map<any, any> = new Map([[String.fromCharCode(114,103,98,112,108,117,115,95,101,95,56,57,0),672], [String.fromCharCode(101,100,105,116,95,50,95,49,57,0),712]]);
       let slider2 = String.fromCharCode(107,95,53,57,95,102,108,111,97,116,0);
       let benefitg = 1;
      for (let e = 0; e < 3; e++) {
         slider2 = "2";
      }
      let inouttargetred_ = 5914766 <= unimplementedviewD.size;
      do {
          let launchH = String.fromCharCode(120,95,56,51,95,98,101,103,117,110,0);
          let custom_ = String.fromCharCode(105,110,99,108,117,115,105,111,110,115,95,49,95,52,48,0);
          let switch_pb = false;
         unimplementedviewD = new Map([[`${unimplementedviewD.size}`, unimplementedviewD.size]]);
         launchH = `${custom_.length * 3}`;
         custom_ = `${launchH.length | custom_.length}`;
         switch_pb = launchH.length <= custom_.length;
         if (inouttargetred_) {
            break;
         }
      } while ((benefitg < unimplementedviewD.size) && inouttargetred_);
       let hookst = String.fromCharCode(114,95,55,56,95,118,101,99,116,0);
       let router_ = String.fromCharCode(97,117,100,105,111,100,115,112,95,108,95,56,54,0);
      let grey3 = String.fromCharCode(50,99,122,108,0) == slider2;
      do {
         slider2 += `${benefitg}`;
         if (grey3) {
            break;
         }
      } while ((1 <= slider2.length && router_.length <= 1) && grey3);
          let roomS: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,114,115,101,99,116,105,111,110,95,49,95,49,56,0),false ], [String.fromCharCode(105,95,54,49,95,112,97,114,116,105,99,105,112,97,110,116,115,0),false ], [String.fromCharCode(101,120,99,101,112,116,95,117,95,54,51,0),false ]]);
         benefitg /= Math.max(slider2.length + 2, 4);
         roomS = new Map([[`${roomS.size}`, 3 + roomS.size]]);
          let notificatione = true;
         router_ += `${(benefitg + (notificatione ? 1 : 3))}`;
         unimplementedviewD = new Map([[`${benefitg}`, router_.length / (Math.max(7, benefitg))]]);
      if (benefitg >= 3) {
          let topic_: Map<any, any> = new Map([[String.fromCharCode(108,95,49,53,95,102,114,111,122,101,110,0),String.fromCharCode(101,118,114,99,95,110,95,56,53,0)], [String.fromCharCode(100,95,50,48,95,119,111,114,107,101,114,115,0),String.fromCharCode(99,95,50,55,95,115,101,116,116,108,101,0)], [String.fromCharCode(106,95,51,48,95,102,114,97,99,116,105,111,110,97,108,0),String.fromCharCode(115,116,114,110,115,116,114,95,99,95,53,53,0)]]);
          let leagueP = false;
          let showmoreM = String.fromCharCode(111,114,103,95,56,95,53,51,0);
          let controlsv = 0;
         hookst = `${hookst.length}`;
         topic_ = new Map([[`${controlsv}`, (showmoreM == String.fromCharCode(103,0) ? showmoreM.length : controlsv)]]);
         leagueP = showmoreM.length < 21;
      }
      let sharemodalI = router_.length >= 9140086;
      do {
          let thumbnailx = 0.0;
         router_ = `${parseInt(`${thumbnailx}`) ^ benefitg}`;
         if (sharemodalI) {
            break;
         }
      } while ((hookst.length >= 5) && sharemodalI);
      settingsL |= 3;
   let pageT = String.fromCharCode(108,53,113,53,101,107,102,121,52,0) == invitek;
   do {
       let awayh = String.fromCharCode(112,105,120,98,108,111,99,107,100,115,112,95,49,95,54,51,0);
       let encryptorH = 5.0;
       let confirmation9: Array<any> = [String.fromCharCode(104,95,51,48,95,105,111,115,117,114,102,97,99,101,0), String.fromCharCode(118,112,97,116,104,95,108,95,57,50,0)];
       let searche = 5.0;
         confirmation9.push(confirmation9.length / 2);
         encryptorH /= Math.max(3, parseFloat(`${1}`));
         searche *= parseInt(`${encryptorH}`);
      let reactG = encryptorH >= 7171624.0;
      do {
          let gnewinterstitialh = String.fromCharCode(97,117,110,105,110,105,116,95,51,95,57,57,0);
          let searchz = 5;
         encryptorH *= parseFloat(`${gnewinterstitialh.length | 3}`);
         gnewinterstitialh += `${searchz}`;
         if (reactG) {
            break;
         }
      } while ((confirmation9.includes(encryptorH)) && reactG);
      let green6 = 7509729 <= awayh.length;
      do {
          let loadingspinnerJ = 2;
          let clockG: Map<any, any> = new Map([[String.fromCharCode(112,95,49,56,95,114,101,113,117,105,114,101,100,0),true ], [String.fromCharCode(111,95,50,52,0),false ], [String.fromCharCode(107,101,121,102,114,97,109,101,95,115,95,52,51,0),false ]]);
         awayh = `${3 + loadingspinnerJ}`;
         loadingspinnerJ >>= Math.min(3, Math.abs(clockG.size + clockG.size));
         if (green6) {
            break;
         }
      } while ((searche == 5.89) && green6);
      for (let i = 0; i < 2; i++) {
          let refreshY = 0.0;
          let moviesk = 2;
          let roundR = 0;
          let delegate_jk = 0.0;
         confirmation9.push(moviesk);
         refreshY /= Math.max(parseInt(`${delegate_jk}`), 5);
         moviesk /= Math.max(2, 2);
         roundR &= parseInt(`${refreshY}`) << (Math.min(3, Math.abs(roundR)));
         delegate_jk += parseFloat(`${parseInt(`${refreshY}`) * roundR}`);
      }
         confirmation9 = [confirmation9.length];
      for (let z = 0; z < 2; z++) {
         searche /= Math.max(confirmation9.length + 1, 3);
      }
      for (let w = 0; w < 1; w++) {
         awayh = "3";
      }
         confirmation9 = [parseInt(`${encryptorH}`)];
      if (5.63 >= (searche - confirmation9.length) && 5 >= (confirmation9.length ^ 1)) {
          let buttonu = String.fromCharCode(101,95,56,50,95,105,104,100,114,0);
          let dragV = true;
          let videovaro = 4.0;
         confirmation9 = [buttonu.length | parseInt(`${videovaro}`)];
         buttonu = `${((dragV ? 5 : 4) + (dragV ? 4 : 3))}`;
      }
      if (parseFloat(`${confirmation9.length}`) == encryptorH) {
          let dragcloseh = String.fromCharCode(99,104,97,110,103,101,95,97,95,55,57,0);
          let homeactiveq = String.fromCharCode(112,95,50,53,95,99,97,115,116,0);
          let vietnam2 = true;
          let dropdownU = String.fromCharCode(102,95,53,95,103,114,111,119,0);
         encryptorH *= parseFloat(`${confirmation9.length >> (Math.min(dragcloseh.length, 1))}`);
         dragcloseh = `${(homeactiveq.length - (vietnam2 ? 3 : 5))}`;
         homeactiveq = "2";
         dropdownU = `${((vietnam2 ? 3 : 1) >> (Math.min(Math.abs(2), 2)))}`;
      }
      invitek += "2";
      if (pageT) {
         break;
      }
   } while ((4.61 >= ewardedS) && pageT);
   if (2 == (invitek.length * 5) && (invitek.length * settingsL) == 5) {
      settingsL *= ball4;
   }
          console.error(`Cannot open URL: ${url}`);
        } else {

       let bggradientp = 5.0;
       let iconpipexpand6 = String.fromCharCode(105,110,116,95,51,95,53,53,0);
      if (iconpipexpand6.includes(`${bggradientp}`)) {
          let orangey: Map<any, any> = new Map([[String.fromCharCode(119,95,53,95,103,114,97,110,116,0),466], [String.fromCharCode(104,95,56,48,95,115,116,97,116,105,99,0),145], [String.fromCharCode(102,95,54,95,105,118,115,101,116,117,112,0),813]]);
          let profileinactived = String.fromCharCode(107,95,55,48,95,108,105,118,101,115,116,114,101,97,109,0);
          let long_ghW: Map<any, any> = new Map([[String.fromCharCode(119,95,53,53,95,101,108,97,112,115,101,100,0),String.fromCharCode(101,95,48,95,115,117,114,101,0)], [String.fromCharCode(114,103,98,116,101,115,116,95,101,95,55,53,0),String.fromCharCode(98,105,119,103,116,95,98,95,53,48,0)]]);
          let bellC = String.fromCharCode(100,101,115,107,116,111,112,95,111,95,52,53,0);
          let videojsD = true;
         iconpipexpand6 = `${orangey.size ^ 3}`;
         orangey = new Map([[bellC, ((videojsD ? 2 : 5))]]);
         profileinactived += `${profileinactived.length}`;
         long_ghW.set(profileinactived, 2);
         bellC += "2";
      }
          let orangedownarrow9 = String.fromCharCode(115,95,53,48,95,101,115,115,101,110,99,101,0);
          let resultC = 4.0;
          let iconsaveimageo = false;
         iconpipexpand6 = `${(String.fromCharCode(115,0) == iconpipexpand6 ? iconpipexpand6.length : (iconsaveimageo ? 4 : 2))}`;
         orangedownarrow9 = `${parseInt(`${resultC}`)}`;
         resultC -= 2;
         iconsaveimageo = (orangedownarrow9.length * parseInt(`${resultC}`)) == 76;
      for (let r = 0; r < 1; r++) {
         bggradientp += parseInt(`${bggradientp}`) - 1;
      }
          let single2 = 2.0;
         iconpipexpand6 += `${parseInt(`${bggradientp}`) >> (Math.min(Math.abs(3), 2))}`;
         single2 /= Math.max(parseFloat(`${parseInt(`${single2}`) + 1}`), 4);
      while (bggradientp >= iconpipexpand6.length) {
          let libjsit = 4;
          let livenodatabgimgX = 4.0;
          let promotionk = String.fromCharCode(121,95,50,95,114,101,100,105,114,101,99,116,105,111,110,0);
         bggradientp -= parseInt(`${livenodatabgimgX}`) / (Math.max(parseInt(`${bggradientp}`), 2));
         libjsit -= promotionk.length;
         livenodatabgimgX /= Math.max(libjsit, 4);
         promotionk += `${libjsit * 2}`;
         break;
      }
         iconpipexpand6 = `${iconpipexpand6.length ^ parseInt(`${bggradientp}`)}`;
      transferu = `${subtextT}`;
   while (libreactnativejnia.length == 3) {
       let tempnodatagifs = false;
          let pagination0 = 0.0;
          let greenarrowupC = 1.0;
          let less1 = false;
         tempnodatagifs = !tempnodatagifs && greenarrowupC >= 18.90;
         pagination0 += ((less1 ? 4 : 5) | parseInt(`${pagination0}`));
         greenarrowupC += (parseFloat(`${parseInt(`${pagination0}`) ^ (less1 ? 2 : 1)}`));
      while (tempnodatagifs || tempnodatagifs) {
         tempnodatagifs = tempnodatagifs || !tempnodatagifs;
         break;
      }
      let dropdownl = tempnodatagifs ? !tempnodatagifs : tempnodatagifs;
      do {
         tempnodatagifs = !tempnodatagifs;
         if (dropdownl) {
            break;
         }
      } while (dropdownl && (!tempnodatagifs));
      settingsL -= 1;
      break;
   }
   let defaultplayerimge = 6790443.0 >= basketballtrophyX;
   do {
      basketballtrophyX /= Math.max(5, 2);
      if (defaultplayerimge) {
         break;
      }
   } while (defaultplayerimge && (4.100 < (basketballtrophyX + 2.12)));
          console.log(`Opened URL: ${url}`);
        }
      })
      .catch((error) => {
        console.error("Error opening URL:", error);
      });
  };

  const shareToTelegram = async () => {
       let basketballhometeamZ = false;
    let catagoryw = String.fromCharCode(112,95,51,52,95,115,104,111,114,116,99,117,116,115,0);
    let t_playerM = String.fromCharCode(112,95,50,49,95,111,102,102,115,0);
    let anythinkH: Array<any> = [304, 177, 131];
    let unreadL = 0;
    let details9 = 0.0;
    let faviconb = 0;
    let topic3: Map<any, any> = new Map([[String.fromCharCode(109,111,99,107,115,95,116,95,53,49,0),958], [String.fromCharCode(109,97,114,107,100,111,119,110,95,108,95,55,56,0),522], [String.fromCharCode(111,117,116,113,95,104,95,55,0),220]]);
    let gemfileg = String.fromCharCode(103,101,116,115,95,98,95,52,55,0);
    let private_0fe = String.fromCharCode(98,105,116,95,110,95,51,48,0);
    let selectionJ = String.fromCharCode(121,95,56,57,95,108,105,99,101,110,115,101,115,0);
    let d_titleM = 1.0;
    let floatingk: Array<any> = [619, 801];
    let nexta = String.fromCharCode(111,117,116,111,117,116,95,54,95,54,51,0);
   if (5.25 <= details9) {
      details9 *= parseFloat(`${catagoryw.length}`);
   }
   if (4 <= anythinkH.length || 4 <= (anythinkH.length >> (Math.min(Math.abs(4), 1)))) {
      anythinkH = [parseInt(`${details9}`) - 1];
   }
      t_playerM += `${((basketballhometeamZ ? 3 : 5))}`;

    if (userState.userToken == "") {

   if (private_0fe != String.fromCharCode(48,0) || t_playerM.length < 4) {
      t_playerM += "1";
   }
       let singleh = 1;
       let predictionlossK = String.fromCharCode(122,95,55,55,95,105,110,116,101,114,114,117,112,116,101,100,0);
         singleh *= 1 >> (Math.min(1, predictionlossK.length));
       let submitx = String.fromCharCode(109,101,116,97,100,97,116,97,115,95,57,95,52,55,0);
       let orangeuparrowc = String.fromCharCode(107,95,55,56,95,119,97,116,99,104,101,115,0);
      for (let e = 0; e < 3; e++) {
          let customb: Array<any> = [517, 8];
          let catalogs = String.fromCharCode(98,101,108,108,95,103,95,49,50,0);
         predictionlossK += `${singleh}`;
         customb.push(catalogs.length & customb.length);
         catalogs += `${(String.fromCharCode(83,0) == catalogs ? customb.length : catalogs.length)}`;
      }
         singleh >>= Math.min(predictionlossK.length, 4);
       let giftbuttonm = 1.0;
       let videoe = 3.0;
       let zhubo2 = 1.0;
      faviconb -= unreadL % (Math.max(anythinkH.length, 10));
      private_0fe = `${3 - topic3.size}`;
      dispatch(showLoginAction());

   while (d_titleM <= 5.41) {
      basketballhometeamZ = String.fromCharCode(69,0) == catagoryw;
      break;
   }
      anythinkH.push(faviconb);
   for (let t = 0; t < 2; t++) {
      faviconb %= Math.max(unreadL, 3);
   }
      return;

       let expandM = 5.0;
       let router8 = 3;
       let t_hashY = String.fromCharCode(122,95,52,49,95,114,97,116,105,111,0);
         expandM += parseFloat(`${parseInt(`${expandM}`)}`);
      for (let t = 0; t < 2; t++) {
         router8 >>= Math.min(Math.abs(3), 5);
      }
          let whitesmalltickd = 0.0;
          let saven = String.fromCharCode(104,101,116,97,95,121,95,55,0);
          let suggestionT = String.fromCharCode(114,95,49,55,95,122,112,116,102,0);
         t_hashY = "2 & router8";
         whitesmalltickd *= parseFloat(`${suggestionT.length}`);
         saven += `${(String.fromCharCode(52,0) == suggestionT ? suggestionT.length : parseInt(`${whitesmalltickd}`))}`;
      let carouselF = 7094702 >= t_hashY.length;
      do {
          let mintegralX = String.fromCharCode(116,97,103,97,118,114,95,52,95,54,51,0);
          let nbatrophyc = String.fromCharCode(102,108,97,115,104,115,118,95,113,95,57,57,0);
          let filterr = String.fromCharCode(119,95,57,57,95,114,115,99,99,0);
          let selectionb: Map<any, any> = new Map([[String.fromCharCode(105,95,51,52,95,97,118,101,114,97,103,101,115,0),false ], [String.fromCharCode(114,95,51,51,95,111,117,116,98,111,117,110,100,0),true ], [String.fromCharCode(106,95,54,52,95,116,111,97,115,116,0),false ]]);
          let largesound9 = true;
         t_hashY += `${filterr.length << (Math.min(nbatrophyc.length, 2))}`;
         mintegralX += `${mintegralX.length}`;
         nbatrophyc = `${(String.fromCharCode(119,0) == mintegralX ? mintegralX.length : selectionb.size)}`;
         filterr += `${2 * selectionb.size}`;
         largesound9 = selectionb.size >= mintegralX.length;
         if (carouselF) {
            break;
         }
      } while ((3 <= (router8 - t_hashY.length)) && carouselF);
      if (4 <= (2 << (Math.min(2, t_hashY.length)))) {
          let username2 = 1;
         router8 >>= Math.min(Math.abs(username2 * t_hashY.length), 5);
      }
      if ((2 >> (Math.min(1, Math.abs(router8)))) >= 2 || (2 ^ router8) >= 3) {
         router8 &= 2 + router8;
      }
       let plashG = String.fromCharCode(109,111,114,101,95,102,95,49,48,0);
       let awayteamfieldP = String.fromCharCode(99,95,49,57,95,111,112,116,115,0);
       let episodeW = 3.0;
          let mailU: Array<any> = [232, 47];
         awayteamfieldP += `${t_hashY.length % 1}`;
         mailU.push(mailU.length % 2);
      details9 *= (parseFloat(`${(basketballhometeamZ ? 4 : 2) & parseInt(`${details9}`)}`));
      gemfileg = "3";
   if (topic3.size <= 3) {
       let statisticsactiveI = 4.0;
       let iconqqW = String.fromCharCode(119,95,55,55,95,100,101,109,111,116,101,0);
      if (5.29 >= statisticsactiveI) {
         statisticsactiveI -= parseFloat(`${1 ^ iconqqW.length}`);
      }
         iconqqW += `${iconqqW.length}`;
      for (let j = 0; j < 2; j++) {
         statisticsactiveI -= parseFloat(`${3 >> (Math.min(2, iconqqW.length))}`);
      }
      while ((statisticsactiveI / 3.49) < 2.36 || (parseInt(`${statisticsactiveI}`) / (Math.max(4, iconqqW.length))) < 5) {
         statisticsactiveI += parseFloat(`${parseInt(`${statisticsactiveI}`) / (Math.max(iconqqW.length, 1))}`);
         break;
      }
       let iconwatchm = 2;
          let questc = String.fromCharCode(100,117,109,112,105,110,103,95,111,95,53,53,0);
          let theme3 = String.fromCharCode(101,115,99,97,112,101,115,95,99,95,51,56,0);
         iconqqW = `${3 << (Math.min(4, theme3.length))}`;
         questc = "3";
         theme3 += "1";
      topic3.set(private_0fe, private_0fe.length + parseInt(`${statisticsactiveI}`));
   }
    }
    const message = shareOptions.message + " " + shareOptions.url;

      basketballhometeamZ = t_playerM == String.fromCharCode(68,0);
      details9 += parseFloat(`${unreadL}`);
   let recommendationZ = d_titleM <= 9385334.0;
   do {
      d_titleM += parseFloat(`${3 >> (Math.min(5, private_0fe.length))}`);
      if (recommendationZ) {
         break;
      }
   } while ((details9 >= 1.19) && recommendationZ);
    const appURL = `tg://msg?text=${message}`;

   let collectionD = selectionJ.length >= 6809832;
   do {
       let smallorangemang = false;
       let assistc = 4.0;
       let corea: Map<any, any> = new Map([[String.fromCharCode(122,95,54,55,95,115,97,116,100,120,0),false ], [String.fromCharCode(107,95,55,55,95,115,117,112,112,114,101,115,115,101,100,0),false ], [String.fromCharCode(104,97,115,104,116,97,103,115,95,110,95,54,57,0),false ]]);
       let friendsT = 1.0;
       let defaultroombg_ = 2;
      while ((1 % (Math.max(7, defaultroombg_))) <= 4 && !smallorangemang) {
          let libfileh = 4.0;
          let orientationC = String.fromCharCode(116,121,111,101,95,54,95,56,48,0);
          let iconarrowrightwhiteb = 0.0;
          let settingsT = String.fromCharCode(100,95,56,52,95,102,117,108,102,105,108,108,101,100,0);
         smallorangemang = defaultroombg_ < parseInt(`${assistc}`);
         libfileh *= (parseFloat(`${orientationC == String.fromCharCode(86,0) ? orientationC.length : parseInt(`${libfileh}`)}`));
         iconarrowrightwhiteb -= settingsT.length + orientationC.length;
         settingsT += `${settingsT.length}`;
         break;
      }
      while (!smallorangemang) {
         smallorangemang = !smallorangemang || 52 == defaultroombg_;
         break;
      }
         friendsT += 3 / (Math.max(10, corea.size));
          let embedM = String.fromCharCode(112,95,53,54,95,114,97,99,105,110,103,0);
          let detailz = 4.0;
          let iconlogoutF = 0.0;
         defaultroombg_ |= 1;
         embedM += `${embedM.length % 3}`;
         detailz -= (parseFloat(`${String.fromCharCode(105,0) == embedM ? embedM.length : parseInt(`${detailz}`)}`));
         iconlogoutF -= parseInt(`${detailz}`);
         assistc += corea.size;
         friendsT += corea.size ^ 2;
       let anytimeT = 3;
         smallorangemang = 30 == (friendsT - defaultroombg_);
      while (smallorangemang) {
         smallorangemang = !smallorangemang;
         break;
      }
      let appleT = corea.size <= 7388385;
      do {
          let libsentryE = String.fromCharCode(112,116,105,111,110,115,95,56,95,56,52,0);
          let privacy9 = false;
          let fieldL = 2.0;
         corea.set(`${libsentryE}`, corea.size);
         libsentryE += `${parseInt(`${fieldL}`) * 2}`;
         privacy9 = 99.2 >= fieldL && privacy9;
         if (appleT) {
            break;
         }
      } while (appleT && ((anytimeT * 3) <= 2 && (corea.size * anytimeT) <= 3));
      if (corea.get(`${friendsT}`) != null) {
         corea = new Map([[`${corea.size}`, corea.size]]);
      }
       let baselinew = String.fromCharCode(116,117,110,110,101,108,101,100,95,109,95,54,52,0);
       let detailt = String.fromCharCode(102,114,111,110,116,115,105,100,101,95,117,95,56,52,0);
       let reactnavigationA = String.fromCharCode(98,105,116,101,95,52,95,51,0);
      if (assistc == 5.69) {
          let subinI = String.fromCharCode(104,95,57,95,115,116,100,111,117,116,0);
         assistc -= subinI.length & 1;
      }
         anytimeT %= Math.max(1, 2);
      selectionJ += `${(parseInt(`${assistc}`) - (basketballhometeamZ ? 5 : 1))}`;
      if (collectionD) {
         break;
      }
   } while (collectionD && (3 == (faviconb & selectionJ.length)));
       let delegate_xL = String.fromCharCode(113,95,49,56,95,99,97,114,100,115,0);
       let linko = false;
       let dicelogo0 = 3;
      for (let z = 0; z < 2; z++) {
         linko = 56 == dicelogo0;
      }
       let reactnativeratingsg = 1.0;
       let areae = 5.0;
       let fastx = 2;
       let static_74f = 1;
         dicelogo0 /= Math.max(static_74f, 1);
         reactnativeratingsg /= Math.max(dicelogo0, 1);
      while ((delegate_xL.length ^ 4) <= 3) {
         static_74f /= Math.max(3, (dicelogo0 / (Math.max(3, (linko ? 3 : 4)))));
         break;
      }
          let libswresample6 = String.fromCharCode(108,95,53,0);
         fastx += dicelogo0 << (Math.min(2, Math.abs(1)));
         libswresample6 += "2";
         delegate_xL = `${parseInt(`${reactnativeratingsg}`)}`;
      if (!linko) {
         dicelogo0 >>= Math.min(3, Math.abs(1 % (Math.max(parseInt(`${areae}`), 2))));
      }
      basketballhometeamZ = String.fromCharCode(119,0) == gemfileg || delegate_xL.length > 27;
       let ccdfbdabcabbbedbS: Map<any, any> = new Map([[String.fromCharCode(105,95,56,50,95,114,101,102,101,114,101,110,99,101,115,0),815], [String.fromCharCode(118,95,49,54,0),702]]);
       let libcxxcomponentst: Array<any> = [325, 208];
         libcxxcomponentst = [1];
      for (let t = 0; t < 1; t++) {
         libcxxcomponentst = [ccdfbdabcabbbedbS.size % (Math.max(libcxxcomponentst.length, 10))];
      }
         ccdfbdabcabbbedbS = new Map([[`${ccdfbdabcabbbedbS.size}`, 2 * ccdfbdabcabbbedbS.size]]);
         libcxxcomponentst.push(3 | ccdfbdabcabbbedbS.size);
          let expandE = 0.0;
          let airbnbstarselectedH: Map<any, any> = new Map([[String.fromCharCode(114,95,51,51,95,99,101,108,102,0),String.fromCharCode(99,111,110,116,101,120,116,115,95,115,95,56,55,0)], [String.fromCharCode(97,95,56,50,95,98,97,110,100,105,110,103,0),String.fromCharCode(102,111,114,109,97,110,116,95,116,95,53,49,0)], [String.fromCharCode(109,95,49,52,95,100,101,99,111,114,97,116,105,111,110,115,0),String.fromCharCode(120,95,51,57,95,111,103,103,101,114,0)]]);
         libcxxcomponentst.push(airbnbstarselectedH.size);
         expandE /= Math.max(3 << (Math.min(Math.abs(parseInt(`${expandE}`)), 2)), 2);
         airbnbstarselectedH.set(`${expandE}`, parseInt(`${expandE}`));
         ccdfbdabcabbbedbS.set(`${libcxxcomponentst.length}`, libcxxcomponentst.length % 1);
      private_0fe += `${parseInt(`${d_titleM}`) % 3}`;
    const webURL = `https://t.me/share/url?url=${message}`;

   if (private_0fe != String.fromCharCode(48,0)) {
      gemfileg += `${parseInt(`${details9}`)}`;
   }
   let colorsm = basketballhometeamZ ? !basketballhometeamZ : basketballhometeamZ;
   do {
      basketballhometeamZ = unreadL == selectionJ.length;
      if (colorsm) {
         break;
      }
   } while ((4.34 > (details9 + 4.30)) && colorsm);
   let reactnativeultimatelistview6 = 9180332 >= private_0fe.length;
   do {
      private_0fe += `${3 % (Math.max(9, faviconb))}`;
      if (reactnativeultimatelistview6) {
         break;
      }
   } while ((gemfileg != private_0fe) && reactnativeultimatelistview6);

    Linking.canOpenURL(webURL)
      .then((supported) => {
        if (supported) {

   while (details9 >= d_titleM) {
      details9 += parseFloat(`${gemfileg.length}`);
      break;
   }
       let statisticsinactivek = true;
       let storem = 4.0;
         storem += parseFloat(`${parseInt(`${storem}`) | 2}`);
          let iconcalendarN: Array<any> = [768, 5];
         storem *= parseFloat(`${iconcalendarN.length & parseInt(`${storem}`)}`);
          let historyU = String.fromCharCode(122,95,57,56,95,104,101,108,112,0);
         storem -= parseFloat(`${historyU.length}`);
      while (3.36 > storem && 2.25 > (3.36 + storem)) {
          let regengl = true;
         statisticsinactivek = 68.43 > storem;
         regengl = (regengl ? !regengl : !regengl);
         break;
      }
         statisticsinactivek = storem < 40.11 && statisticsinactivek;
         storem += parseFloat(`${3 + parseInt(`${storem}`)}`);
      catagoryw += "3";
   if (unreadL <= 1) {
       let libjsinspector9: Array<any> = [943, 581];
       let whitesmalltickf = 5.0;
       let predictionbannersharedw = String.fromCharCode(120,95,56,48,95,99,111,109,112,111,110,101,110,116,0);
       let klevinZ = String.fromCharCode(101,110,99,111,100,101,102,114,97,109,101,95,110,95,53,50,0);
       let imageactionlivek = 1.0;
         predictionbannersharedw = `${parseInt(`${imageactionlivek}`)}`;
          let libreactperfloggerjni5: Array<any> = [542, 402];
          let formM: Map<any, any> = new Map([[String.fromCharCode(120,95,56,57,95,99,108,117,115,116,101,114,115,0),673], [String.fromCharCode(108,105,98,115,97,109,112,108,101,95,53,95,57,52,0),307], [String.fromCharCode(106,95,51,54,95,115,105,108,101,110,99,101,0),675]]);
         whitesmalltickf *= parseInt(`${imageactionlivek}`) >> (Math.min(Math.abs(2), 4));
         libreactperfloggerjni5.push(formM.size);
         formM = new Map([[`${formM.size}`, 1 * libreactperfloggerjni5.length]]);
      let settingL = klevinZ == String.fromCharCode(111,106,104,49,103,100,122,115,104,57,0);
      do {
         klevinZ = `${klevinZ.length - parseInt(`${imageactionlivek}`)}`;
         if (settingL) {
            break;
         }
      } while (settingL && (klevinZ.length <= whitesmalltickf));
      while (!klevinZ.startsWith(`${libjsinspector9.length}`)) {
         klevinZ += `${parseInt(`${imageactionlivek}`)}`;
         break;
      }
      if ((libjsinspector9.length * parseInt(`${imageactionlivek}`)) > 5 || (5 & libjsinspector9.length) > 5) {
         libjsinspector9.push(3);
      }
          let side5 = String.fromCharCode(116,95,54,56,0);
          let basketballhometeam7 = String.fromCharCode(102,95,49,56,95,115,101,108,0);
         predictionbannersharedw += `${predictionbannersharedw.length + 2}`;
         side5 = `${side5.length / (Math.max(basketballhometeam7.length, 8))}`;
         basketballhometeam7 = `${basketballhometeam7.length}`;
      while ((imageactionlivek + klevinZ.length) == 4.75 || 2 == (klevinZ.length * 5)) {
         imageactionlivek += predictionbannersharedw.length;
         break;
      }
      for (let r = 0; r < 3; r++) {
         libjsinspector9.push(parseInt(`${whitesmalltickf}`) % (Math.max(parseInt(`${imageactionlivek}`), 4)));
      }
         klevinZ += `${(predictionbannersharedw == String.fromCharCode(99,0) ? predictionbannersharedw.length : parseInt(`${whitesmalltickf}`))}`;
          let q_titleK = 4.0;
          let values2 = String.fromCharCode(103,101,111,99,111,100,101,100,95,103,95,53,49,0);
         whitesmalltickf -= parseInt(`${imageactionlivek}`) << (Math.min(Math.abs(2), 1));
         q_titleK += parseFloat(`${values2.length}`);
         values2 = `${parseInt(`${q_titleK}`)}`;
          let positionfieldu = 3;
          let yellowvideoliveq = 2;
         whitesmalltickf += 3 << (Math.min(Math.abs(positionfieldu), 5));
         positionfieldu &= yellowvideoliveq;
         imageactionlivek /= Math.max(parseInt(`${whitesmalltickf}`) ^ 1, 1);
       let icontransferclubO = String.fromCharCode(109,98,101,100,95,56,95,49,54,0);
       let libtob4 = String.fromCharCode(114,101,112,114,111,99,101,115,115,95,50,95,54,54,0);
         predictionbannersharedw = `${parseInt(`${imageactionlivek}`)}`;
          let redgoalJ = 4.0;
         klevinZ += `${libjsinspector9.length % 3}`;
         redgoalJ *= parseInt(`${redgoalJ}`) ^ parseInt(`${redgoalJ}`);
      unreadL += parseInt(`${imageactionlivek}`);
   }
          console.log("supported telegram web");

       let redscoreball9: Array<any> = [950, 259];
       let orientation_ = true;
       let iconclosewhitebgu = 3.0;
          let roott = true;
          let whitetickJ: Array<any> = [String.fromCharCode(99,111,110,115,116,95,104,95,50,54,0), String.fromCharCode(115,117,98,116,114,97,99,116,105,110,103,95,114,95,54,55,0), String.fromCharCode(106,95,53,53,95,116,111,111,116,105,112,0)];
         orientation_ = roott;
         whitetickJ = [whitetickJ.length];
          let selectedr: Array<any> = [85, 324];
          let iconorientationf: Map<any, any> = new Map([[String.fromCharCode(115,101,97,114,99,104,95,102,95,57,48,0),String.fromCharCode(107,95,56,48,95,99,108,97,115,115,101,115,0)], [String.fromCharCode(115,116,114,105,100,101,97,98,108,101,95,107,95,56,53,0),String.fromCharCode(110,116,114,111,95,105,95,49,48,48,0)], [String.fromCharCode(101,109,98,101,100,95,102,95,57,50,0),String.fromCharCode(100,95,54,0)]]);
         redscoreball9.push(redscoreball9.length * 2);
         selectedr = [selectedr.length];
         iconorientationf.set(`${selectedr.length}`, iconorientationf.size % 2);
         iconclosewhitebgu /= Math.max(parseFloat(`${parseInt(`${iconclosewhitebgu}`) | redscoreball9.length}`), 4);
         iconclosewhitebgu += parseFloat(`${2}`);
      if (1.52 < iconclosewhitebgu) {
         orientation_ = 55.51 >= iconclosewhitebgu;
      }
      if (redscoreball9.includes(iconclosewhitebgu)) {
          let iconmoreY = 5;
          let langx: Array<any> = [String.fromCharCode(109,97,110,97,103,101,95,119,95,56,55,0), String.fromCharCode(115,95,57,54,95,97,108,115,111,0), String.fromCharCode(106,95,55,49,95,115,101,103,116,114,101,101,0)];
          let penaltye = String.fromCharCode(97,119,97,121,95,57,95,51,55,0);
          let iconsubssuccess9 = 5.0;
          let libjsijniprofilerJ = 0.0;
         redscoreball9.push(parseInt(`${iconclosewhitebgu}`));
         iconmoreY += (penaltye == String.fromCharCode(80,0) ? penaltye.length : iconmoreY);
         langx = [parseInt(`${iconsubssuccess9}`) & 1];
         iconsubssuccess9 *= 1;
         libjsijniprofilerJ += parseInt(`${iconsubssuccess9}`) / (Math.max(parseInt(`${libjsijniprofilerJ}`), 4));
      }
      let sportsI = orientation_ ? !orientation_ : orientation_;
      do {
         orientation_ = !orientation_ && redscoreball9.length <= 98;
         if (sportsI) {
            break;
         }
      } while (sportsI && (orientation_ || (iconclosewhitebgu - 5.38) == 3.79));
         redscoreball9.push(parseInt(`${iconclosewhitebgu}`) ^ 2);
         orientation_ = iconclosewhitebgu > 10.72 || !orientation_;
      gemfileg += `${(parseInt(`${d_titleM}`) * (basketballhometeamZ ? 3 : 4))}`;
   if ((t_playerM.length - parseInt(`${details9}`)) > 1) {
       let smallorangemanR = String.fromCharCode(102,95,54,54,95,115,99,104,110,111,114,114,0);
         smallorangemanR += `${smallorangemanR.length << (Math.min(Math.abs(1), 2))}`;
         smallorangemanR = `${smallorangemanR.length ^ 1}`;
       let clearT: Array<any> = [686, 689, 664];
       let codei: Array<any> = [18, 817, 395];
      t_playerM += `${1 | gemfileg.length}`;
   }
   if (3 > gemfileg.length) {
       let eyecloseH = String.fromCharCode(114,95,50,57,95,109,115,101,120,0);
      if (eyecloseH != String.fromCharCode(105,0)) {
          let tnewinterstitialr: Map<any, any> = new Map([[String.fromCharCode(105,95,53,56,95,101,113,117,105,118,97,108,101,110,99,101,0),false ], [String.fromCharCode(109,101,109,106,114,110,108,95,54,95,49,48,48,0),false ]]);
          let leaguedetailsbgr: Map<any, any> = new Map([[String.fromCharCode(100,95,57,49,95,100,97,112,112,0),484], [String.fromCharCode(100,105,118,105,100,101,110,100,95,109,95,55,0),201]]);
          let leakchecker_ = 2;
          let klevinA = String.fromCharCode(102,95,50,52,95,97,115,115,101,116,115,0);
          let handler0: Array<any> = [662, 537, 122];
         eyecloseH += `${tnewinterstitialr.size}`;
         tnewinterstitialr.set(`${leakchecker_}`, leaguedetailsbgr.size >> (Math.min(Math.abs(2), 2)));
         leaguedetailsbgr = new Map([[`${handler0.length}`, leakchecker_ - 2]]);
         klevinA += `${leakchecker_}`;
         handler0.push(3 * leaguedetailsbgr.size);
      }
          let cinit_u00 = 1.0;
          let iconmegaphone8 = String.fromCharCode(97,99,116,105,111,110,115,95,122,95,54,52,0);
          let sheet8: Map<any, any> = new Map([[String.fromCharCode(112,114,101,112,97,114,101,100,95,118,95,53,0),406], [String.fromCharCode(116,101,120,116,117,114,101,100,115,112,95,117,95,50,52,0),377]]);
         eyecloseH = `${sheet8.size / (Math.max(2, 2))}`;
         cinit_u00 /= Math.max(5, 3);
         iconmegaphone8 += `${(iconmegaphone8 == String.fromCharCode(72,0) ? parseInt(`${cinit_u00}`) : iconmegaphone8.length)}`;
         sheet8.set(iconmegaphone8, iconmegaphone8.length | 2);
         eyecloseH = `${3 << (Math.min(5, eyecloseH.length))}`;
      unreadL <<= Math.min(4, Math.abs(eyecloseH.length >> (Math.min(catagoryw.length, 4))));
   }
          

   let downarrown = 6520456.0 >= d_titleM;
   do {
       let networkv = 1;
       let release_a1F = 3.0;
       let libjsijniprofilerO: Array<any> = [55, 372];
       let javax = String.fromCharCode(115,117,98,109,111,100,117,108,101,95,99,95,50,56,0);
       let unselectedT = String.fromCharCode(116,114,97,110,115,105,116,105,111,110,95,108,95,55,52,0);
      let circled = release_a1F <= 9322062.0;
      do {
          let iconarrowrightorangeU = 2;
         release_a1F *= parseFloat(`${iconarrowrightorangeU}`);
         if (circled) {
            break;
         }
      } while (circled && (!unselectedT.includes(`${release_a1F}`)));
         unselectedT = `${unselectedT.length}`;
         javax = `${libjsijniprofilerO.length % (Math.max(2, 6))}`;
          let subin3 = false;
         javax = `${javax.length | unselectedT.length}`;
         subin3 = (!subin3 ? subin3 : subin3);
      if (1 > libjsijniprofilerO.length) {
          let commentY = 1.0;
          let iconeyes = String.fromCharCode(98,95,52,95,115,101,99,117,114,105,116,121,0);
          let basketballtrophyM = String.fromCharCode(97,95,51,48,95,115,119,105,116,99,104,101,100,0);
          let weatherO: Array<any> = [892, 968];
          let commentH = 2.0;
         unselectedT += `${parseInt(`${commentY}`)}`;
         commentY *= weatherO.length << (Math.min(Math.abs(3), 4));
         iconeyes += "2";
         basketballtrophyM = `${parseInt(`${commentH}`)}`;
         weatherO.push(1 % (Math.max(7, weatherO.length)));
         commentH *= parseFloat(`${basketballtrophyM.length + iconeyes.length}`);
      }
      let carouselx = unselectedT.length <= 8311003;
      do {
         unselectedT = `${libjsijniprofilerO.length}`;
         if (carouselx) {
            break;
         }
      } while (carouselx && (javax.length > unselectedT.length));
         networkv %= Math.max(4, javax.length);
      let dicelogo6 = release_a1F >= 9669573.0;
      do {
         release_a1F /= Math.max(3, parseFloat(`${libjsijniprofilerO.length & parseInt(`${release_a1F}`)}`));
         if (dicelogo6) {
            break;
         }
      } while (dicelogo6 && (4.16 <= release_a1F));
         javax += "3";
      for (let a = 0; a < 2; a++) {
          let weiboO = 1.0;
          let homer = 2.0;
         javax += `${libjsijniprofilerO.length}`;
         weiboO -= parseFloat(`${parseInt(`${homer}`)}`);
         homer -= 1;
      }
      while (4 >= unselectedT.length) {
         javax += `${parseInt(`${release_a1F}`) * networkv}`;
         break;
      }
         libjsijniprofilerO = [networkv];
          let appleD = String.fromCharCode(99,108,97,110,103,95,57,95,49,48,0);
         networkv &= libjsijniprofilerO.length;
         appleD = `${appleD.length + appleD.length}`;
          let modulesF = String.fromCharCode(110,95,57,53,95,99,108,97,117,115,101,115,0);
         networkv |= unselectedT.length;
         modulesF += "1";
          let libnms9 = 1.0;
         javax = `${parseInt(`${release_a1F}`) / (Math.max(unselectedT.length, 4))}`;
         libnms9 -= parseInt(`${libnms9}`) * parseInt(`${libnms9}`);
      d_titleM += parseFloat(`${2 >> (Math.min(2, private_0fe.length))}`);
      if (downarrown) {
         break;
      }
   } while ((5 > (topic3.size & 3) && 4.96 > (d_titleM * parseFloat(`${topic3.size}`))) && downarrown);
      topic3 = new Map([[`${d_titleM}`, (String.fromCharCode(117,0) == t_playerM ? t_playerM.length : parseInt(`${d_titleM}`))]]);
      anythinkH.push(private_0fe.length - 2);
          Linking.openURL(webURL);
        } else {

   for (let u = 0; u < 3; u++) {
      selectionJ += "3";
   }
   while (2.99 >= (details9 + unreadL)) {
       let suboutG = String.fromCharCode(100,95,55,55,95,112,114,105,118,97,99,121,0);
       let abidetectd: Map<any, any> = new Map([[String.fromCharCode(116,114,105,112,95,48,95,55,56,0),444], [String.fromCharCode(100,111,119,110,115,97,109,112,108,101,100,95,109,95,51,48,0),183]]);
       let libfbjni7 = String.fromCharCode(103,95,53,51,95,114,101,99,111,114,100,101,114,0);
       let buttonr: Array<any> = [String.fromCharCode(98,95,57,52,95,115,109,105,108,0), String.fromCharCode(112,97,114,115,101,95,52,95,57,53,0)];
      while (1 > (libfbjni7.length >> (Math.min(2, Math.abs(abidetectd.size)))) || 4 > (1 >> (Math.min(3, libfbjni7.length)))) {
         libfbjni7 += `${3 ^ libfbjni7.length}`;
         break;
      }
      while ((abidetectd.size >> (Math.min(suboutG.length, 1))) > 3 && (3 >> (Math.min(5, suboutG.length))) > 5) {
          let forwardQ = String.fromCharCode(99,108,110,112,97,115,115,95,109,95,55,49,0);
          let chatroombackground6 = 0.0;
          let expired7 = String.fromCharCode(118,95,54,95,101,120,112,101,99,116,101,100,0);
          let frame_cb: Map<any, any> = new Map([[String.fromCharCode(97,100,106,117,115,116,109,101,110,116,115,95,115,95,49,52,0),281], [String.fromCharCode(99,95,53,48,95,112,104,97,115,101,115,0),808], [String.fromCharCode(112,114,105,110,116,97,98,108,101,95,108,95,55,55,0),714]]);
          let changeJ = 3.0;
         suboutG = `${parseInt(`${chatroombackground6}`)}`;
         forwardQ = `${parseInt(`${changeJ}`)}`;
         chatroombackground6 += expired7.length & frame_cb.size;
         expired7 = `${frame_cb.size >> (Math.min(expired7.length, 4))}`;
         changeJ *= parseFloat(`${forwardQ.length}`);
         break;
      }
      let weatherc = String.fromCharCode(49,57,111,111,54,0) == libfbjni7;
      do {
         libfbjni7 += `${(String.fromCharCode(86,0) == suboutG ? suboutG.length : abidetectd.size)}`;
         if (weatherc) {
            break;
         }
      } while (weatherc && (libfbjni7 != String.fromCharCode(115,0) || suboutG.length >= 5));
      for (let d = 0; d < 1; d++) {
          let borderless6 = 0.0;
          let roundW = String.fromCharCode(116,111,107,101,110,100,95,106,95,50,54,0);
          let dropdownL: Map<any, any> = new Map([[String.fromCharCode(110,95,50,56,95,115,108,105,99,101,116,121,112,101,0),60], [String.fromCharCode(105,115,115,117,105,110,103,95,110,95,49,49,0),40]]);
          let confirmationF = true;
          let descE = String.fromCharCode(99,95,56,48,95,114,116,99,100,0);
         suboutG = `${((confirmationF ? 4 : 3) % (Math.max(dropdownL.size, 7)))}`;
         borderless6 += parseFloat(`${parseInt(`${borderless6}`) * 3}`);
         roundW = `${roundW.length % (Math.max(3, 7))}`;
         dropdownL.set(`${borderless6}`, 2);
         confirmationF = descE.length == 12;
         descE = `${parseInt(`${borderless6}`)}`;
      }
       let application7 = String.fromCharCode(102,95,51,50,95,113,115,99,97,108,101,0);
       let launch2 = String.fromCharCode(114,101,118,105,111,117,115,95,54,95,48,0);
      let styleV = String.fromCharCode(115,121,95,0) == application7;
      do {
         application7 += `${(String.fromCharCode(97,0) == libfbjni7 ? libfbjni7.length : suboutG.length)}`;
         if (styleV) {
            break;
         }
      } while (styleV && (3 == launch2.length));
      while (application7.includes(`${buttonr.length}`)) {
         application7 = `${(launch2 == String.fromCharCode(67,0) ? libfbjni7.length : launch2.length)}`;
         break;
      }
         suboutG = "2";
          let commentz: Array<any> = [304, 676, 856];
         suboutG += `${1 ^ application7.length}`;
         commentz.push(commentz.length);
      if (suboutG.length <= application7.length) {
          let crownQ = String.fromCharCode(116,95,56,95,112,97,116,116,101,114,110,0);
          let customq = String.fromCharCode(115,95,50,95,105,100,99,116,100,115,112,0);
         suboutG = `${abidetectd.size ^ launch2.length}`;
         crownQ = `${(crownQ == String.fromCharCode(104,0) ? crownQ.length : customq.length)}`;
         customq = `${customq.length - crownQ.length}`;
      }
         libfbjni7 = `${(libfbjni7 == String.fromCharCode(115,0) ? libfbjni7.length : abidetectd.size)}`;
         libfbjni7 += `${application7.length}`;
      details9 /= Math.max(parseFloat(`${1 + t_playerM.length}`), 5);
      break;
   }
       let middlesound3 = String.fromCharCode(114,95,51,52,95,108,105,118,101,100,0);
       let roboto6: Map<any, any> = new Map([[String.fromCharCode(102,95,49,54,95,101,97,114,108,105,101,115,116,0),246], [String.fromCharCode(97,115,115,101,114,116,95,103,95,56,0),81]]);
       let commentx = String.fromCharCode(117,95,56,56,95,112,97,97,100,0);
          let start = String.fromCharCode(117,95,54,54,95,115,101,113,110,111,0);
          let leagueT = String.fromCharCode(106,95,49,48,48,95,109,107,118,109,117,120,101,114,0);
         commentx = "3";
         start = `${start.length & leagueT.length}`;
         leagueT = `${leagueT.length}`;
      while (5 < (4 ^ middlesound3.length) || (middlesound3.length ^ 4) < 5) {
          let mappingV = 4;
          let completej = false;
          let orangedownarrowP = 3.0;
         roboto6 = new Map([[`${roboto6.size}`, roboto6.size * 1]]);
         mappingV += 2;
         completej = mappingV <= 34;
         orangedownarrowP += parseFloat(`${1}`);
         break;
      }
      if (2 <= roboto6.size) {
         roboto6 = new Map([[commentx, 3 | middlesound3.length]]);
      }
      while ((roboto6.size << (Math.min(Math.abs(2), 4))) == 4) {
          let modalM = 4.0;
          let subbasketballplayerK = String.fromCharCode(116,95,49,48,95,101,109,98,101,100,100,105,110,103,0);
          let basketballW = String.fromCharCode(105,115,110,111,110,122,101,114,111,95,98,95,52,48,0);
         roboto6.set(commentx, commentx.length);
         modalM /= Math.max(parseFloat(`${3}`), 1);
         subbasketballplayerK = `${basketballW.length + 2}`;
         basketballW += `${subbasketballplayerK.length}`;
         break;
      }
         roboto6.set(commentx, commentx.length);
      if ((roboto6.size << (Math.min(Math.abs(4), 3))) <= 1 || (4 << (Math.min(2, commentx.length))) <= 3) {
         roboto6.set(`${commentx}`, commentx.length >> (Math.min(5, Math.abs(roboto6.size))));
      }
      while (commentx != String.fromCharCode(68,0) || middlesound3 != String.fromCharCode(68,0)) {
         middlesound3 += `${3 + commentx.length}`;
         break;
      }
       let untickT = String.fromCharCode(121,95,51,54,95,112,111,115,116,112,114,111,99,101,115,115,0);
          let relatedY = String.fromCharCode(98,110,109,112,105,95,56,95,55,49,0);
          let r_countJ = 1;
          let adultu = 5.0;
         commentx += `${parseInt(`${adultu}`)}`;
         relatedY += "3";
         r_countJ ^= relatedY.length;
         adultu *= parseFloat(`${relatedY.length / 1}`);
      gemfileg = "3";
          console.log("not supported telegram web");

   let smallbrightnessv = faviconb >= 8826758;
   do {
      faviconb *= anythinkH.length * faviconb;
      if (smallbrightnessv) {
         break;
      }
   } while (smallbrightnessv && (anythinkH.includes(faviconb)));
      anythinkH.push(3);
   let penaltymatchicon_ = anythinkH.length >= 7873906;
   do {
      anythinkH.push(1 >> (Math.min(2, Math.abs(topic3.size))));
      if (penaltymatchicon_) {
         break;
      }
   } while (penaltymatchicon_ && ((2 % (Math.max(4, t_playerM.length))) == 5));
          

      details9 -= parseFloat(`${anythinkH.length}`);
       let neons = String.fromCharCode(102,115,101,101,107,95,116,95,51,52,0);
       let mbsplash7 = String.fromCharCode(115,115,101,114,116,95,53,95,54,48,0);
         neons += "1";
       let leakchecker8 = 1.0;
       let playercommonD = 0.0;
         mbsplash7 += `${mbsplash7.length}`;
         mbsplash7 += `${2 ^ neons.length}`;
      while ((playercommonD * leakchecker8) >= 1.74) {
          let iconviewergif7 = String.fromCharCode(114,111,117,110,100,110,101,115,115,95,106,95,53,53,0);
          let icontransferclubp = String.fromCharCode(110,95,52,53,95,115,117,109,102,0);
          let klevinD = 4.0;
          let fileA = false;
         playercommonD -= parseFloat(`${neons.length}`);
         iconviewergif7 += "1";
         icontransferclubp += `${parseInt(`${klevinD}`) ^ icontransferclubp.length}`;
         klevinD *= parseFloat(`${1}`);
         fileA = !fileA;
         break;
      }
      let iconsaveimager = leakchecker8 >= 7034340.0;
      do {
         leakchecker8 += parseFloat(`${neons.length}`);
         if (iconsaveimager) {
            break;
         }
      } while (iconsaveimager && (leakchecker8 <= 3.49));
      selectionJ = `${(String.fromCharCode(81,0) == neons ? neons.length : t_playerM.length)}`;
   for (let d = 0; d < 2; d++) {
       let librrcA = String.fromCharCode(114,101,102,112,116,114,95,113,95,51,53,0);
          let greenarrowup8 = 0.0;
          let encryptC: Map<any, any> = new Map([[String.fromCharCode(101,95,52,49,95,115,108,105,99,101,100,0),507], [String.fromCharCode(115,95,50,50,95,111,112,116,105,111,110,97,108,0),71]]);
          let invite6: Array<any> = [387, 657, 801];
         librrcA += "2";
         greenarrowup8 /= Math.max(3, parseFloat(`${3 & parseInt(`${greenarrowup8}`)}`));
         encryptC.set(`${greenarrowup8}`, 1);
         invite6 = [parseInt(`${greenarrowup8}`) + 1];
      if (librrcA.length == librrcA.length) {
          let mbnative_ = 1.0;
          let typesN: Array<any> = [161, 552];
          let paginationG: Array<any> = [String.fromCharCode(112,95,56,49,95,116,104,114,101,97,100,115,97,102,101,0), String.fromCharCode(99,95,49,57,95,99,111,109,109,117,110,105,99,97,116,111,114,0), String.fromCharCode(117,110,114,101,103,105,115,116,101,114,95,113,95,49,48,0)];
         librrcA = "2";
         mbnative_ += 2;
         typesN.push(parseInt(`${mbnative_}`));
         paginationG.push(typesN.length);
      }
      if (librrcA != String.fromCharCode(74,0)) {
         librrcA += `${librrcA.length}`;
      }
      anythinkH = [t_playerM.length];
   }
          Linking.openURL(appURL);
        }
      })
      .catch((error) => {
        console.error("Error checking app URL:", error);
      });
  };

  const shareToWeixin = async () => {
       let liveF = String.fromCharCode(118,95,53,48,95,112,97,99,107,101,116,105,110,0);
    let resendz = String.fromCharCode(98,117,110,100,108,101,115,95,98,95,55,49,0);
    let expiredY: Array<any> = [993, 437];
    let halffieldimageF = String.fromCharCode(109,95,54,54,95,100,101,99,111,100,101,114,0);
    let unreadK = 5;
    let baiduadsi = 2;
    let greyarrowup7 = 1.0;
    let sigmobN = String.fromCharCode(122,95,52,51,95,100,101,108,101,116,105,111,110,115,0);
    let whitevideoliveS: Array<any> = [688, 497];
    let iconshareq = String.fromCharCode(114,95,50,49,95,104,101,97,100,114,111,111,109,0);
    let sell6 = String.fromCharCode(106,95,57,54,95,99,101,110,116,114,101,0);
    let notificationgrayQ = true;
    let episodesc: Array<any> = [String.fromCharCode(117,95,55,48,95,100,111,119,110,108,111,97,100,0), String.fromCharCode(116,101,108,101,109,101,116,114,121,95,102,95,55,49,0), String.fromCharCode(102,95,49,50,95,109,97,103,110,105,102,105,101,114,0)];
      sigmobN += `${whitevideoliveS.length * iconshareq.length}`;
   while (2 <= (expiredY.length + iconshareq.length) || (expiredY.length + 2) <= 5) {
      expiredY.push((sell6 == String.fromCharCode(117,0) ? sell6.length : expiredY.length));
      break;
   }
   if ((whitevideoliveS.length >> (Math.min(iconshareq.length, 1))) <= 3 || (whitevideoliveS.length >> (Math.min(Math.abs(3), 2))) <= 2) {
      whitevideoliveS = [3];
   }

    if (userState.userToken === "") {

       let showmoreY = true;
      if (!showmoreY) {
         showmoreY = !showmoreY;
      }
      while (!showmoreY) {
         showmoreY = (!showmoreY ? showmoreY : !showmoreY);
         break;
      }
          let matchdetailbgB = String.fromCharCode(117,112,108,111,97,100,115,95,118,95,51,48,0);
         showmoreY = matchdetailbgB.length < 72;
      halffieldimageF += "1";
      expiredY = [3];
   let sportsg = 5420464 >= unreadK;
   do {
      unreadK ^= parseInt(`${greyarrowup7}`);
      if (sportsg) {
         break;
      }
   } while (sportsg && ((unreadK >> (Math.min(Math.abs(2), 4))) <= 3 && (2 >> (Math.min(2, whitevideoliveS.length))) <= 4));
      dispatch(showLoginAction());

   for (let s = 0; s < 2; s++) {
      halffieldimageF += `${whitevideoliveS.length}`;
   }
   for (let d = 0; d < 1; d++) {
      greyarrowup7 *= iconshareq.length;
   }
   let anythinkP = String.fromCharCode(116,122,98,107,111,105,106,103,0) == iconshareq;
   do {
      iconshareq += `${whitevideoliveS.length >> (Math.min(halffieldimageF.length, 5))}`;
      if (anythinkP) {
         break;
      }
   } while (anythinkP && (!iconshareq.includes(`${expiredY.length}`)));
      return;

   for (let e = 0; e < 2; e++) {
       let downloado = false;
       let iconarrowrightH = 5;
       let searchbarN = 0.0;
       let sendq = String.fromCharCode(109,95,49,49,95,112,111,108,121,107,101,121,0);
      if (3.68 == (searchbarN / (Math.max(3.44, 9)))) {
         searchbarN += parseFloat(`${parseInt(`${searchbarN}`)}`);
      }
          let iconscheduleg = 2.0;
         iconarrowrightH -= 1 ^ parseInt(`${searchbarN}`);
         iconscheduleg -= parseInt(`${iconscheduleg}`);
         iconarrowrightH ^= (sendq == String.fromCharCode(116,0) ? iconarrowrightH : sendq.length);
         downloado = 32.2 > searchbarN;
      for (let y = 0; y < 1; y++) {
         iconarrowrightH %= Math.max(2 >> (Math.min(5, sendq.length)), 3);
      }
       let reminderi = String.fromCharCode(101,120,116,114,97,95,97,95,49,0);
         searchbarN += parseFloat(`${parseInt(`${searchbarN}`)}`);
         searchbarN += parseFloat(`${parseInt(`${searchbarN}`)}`);
          let telemetryb = String.fromCharCode(108,105,98,115,104,105,110,101,95,52,95,55,49,0);
          let strw = 3;
          let shareblackY: Map<any, any> = new Map([[String.fromCharCode(101,120,101,99,117,116,101,95,117,95,49,54,0),894], [String.fromCharCode(106,95,52,52,95,114,101,115,105,103,110,101,100,0),27]]);
         searchbarN /= Math.max(parseFloat(`${3}`), 4);
         telemetryb = "2";
         strw <<= Math.min(Math.abs(telemetryb.length * 3), 4);
         shareblackY = new Map([[`${shareblackY.size}`, shareblackY.size * telemetryb.length]]);
      if (!downloado) {
         downloado = !downloado;
      }
      if ((parseInt(`${searchbarN}`) + iconarrowrightH) < 3 && 4 < (iconarrowrightH ^ 3)) {
         iconarrowrightH &= (String.fromCharCode(84,0) == reminderi ? (downloado ? 1 : 4) : reminderi.length);
      }
         downloado = String.fromCharCode(90,0) == reminderi;
      halffieldimageF += "3";
   }
   if (resendz.length <= liveF.length) {
      resendz = `${resendz.length % (Math.max(2, 1))}`;
   }
      whitevideoliveS.push(halffieldimageF.length);
    }
    const message = encodeURIComponent(
      shareOptions.message + "\n" + shareOptions.url
    );

   for (let n = 0; n < 1; n++) {
      sell6 += `${iconshareq.length}`;
   }
      liveF = `${whitevideoliveS.length - halffieldimageF.length}`;
   for (let x = 0; x < 3; x++) {
      unreadK |= (String.fromCharCode(118,0) == sigmobN ? (notificationgrayQ ? 4 : 4) : sigmobN.length);
   }
    const appURL = `weixin://send?text=${message}`;

      resendz = `${expiredY.length * resendz.length}`;
       let c_viewA: Array<any> = [543, 614];
       let downloadeds = 4.0;
         c_viewA.push(1 >> (Math.min(Math.abs(parseInt(`${downloadeds}`)), 2)));
          let whiteanimationliveg = String.fromCharCode(98,95,53,56,95,109,115,118,115,100,101,112,101,110,100,0);
          let penaltyshootf = true;
         c_viewA = [c_viewA.length ^ 1];
         whiteanimationliveg = `${((penaltyshootf ? 5 : 2))}`;
         penaltyshootf = whiteanimationliveg.length < 83;
      if ((downloadeds - 2.40) == 1.51 && 5 == (parseInt(`${downloadeds}`) - c_viewA.length)) {
         downloadeds += 3 % (Math.max(3, c_viewA.length));
      }
      while (c_viewA.length >= downloadeds) {
         downloadeds += c_viewA.length & 1;
         break;
      }
      let iconarrowrightwhite1 = c_viewA.length <= 5646953;
      do {
         c_viewA = [c_viewA.length];
         if (iconarrowrightwhite1) {
            break;
         }
      } while (iconarrowrightwhite1 && (3.16 >= (c_viewA.length * downloadeds)));
          let emojiheart7: Array<any> = [344, 641, 61];
          let predictionarrowo: Array<any> = [243, 242];
         downloadeds += emojiheart7.length & parseInt(`${downloadeds}`);
         emojiheart7 = [predictionarrowo.length * 1];
         predictionarrowo.push(predictionarrowo.length + 1);
      halffieldimageF += `${2 | unreadK}`;
   for (let t = 0; t < 3; t++) {
       let adultb = String.fromCharCode(115,95,56,57,95,115,116,111,114,101,102,114,97,109,101,0);
       let classesT = true;
      let zhuboC = adultb.length >= 7132937;
      do {
         adultb += `${adultb.length / 1}`;
         if (zhuboC) {
            break;
         }
      } while (zhuboC && (classesT));
      for (let s = 0; s < 2; s++) {
         classesT = !classesT;
      }
      halffieldimageF += `${unreadK % (Math.max(sell6.length, 10))}`;
   }
    

       let phoneN = String.fromCharCode(99,95,57,56,95,108,97,110,103,105,100,0);
       let langkeyn = String.fromCharCode(101,95,54,56,95,117,116,116,111,110,0);
       let profileinactivef = String.fromCharCode(118,95,52,55,95,100,116,100,102,0);
       let tempo = String.fromCharCode(104,95,53,57,95,100,101,99,101,108,101,114,97,116,105,110,103,0);
       let bgvipsportv = String.fromCharCode(98,111,114,105,110,103,115,115,108,95,98,95,54,51,0);
      for (let i = 0; i < 2; i++) {
         phoneN += "3";
      }
         langkeyn += `${tempo.length % (Math.max(bgvipsportv.length, 9))}`;
      for (let y = 0; y < 1; y++) {
         bgvipsportv = `${(String.fromCharCode(74,0) == tempo ? bgvipsportv.length : tempo.length)}`;
      }
         langkeyn = `${tempo.length}`;
      expiredY = [phoneN.length + 3];
      unreadK %= Math.max(3, baiduadsi);
      baiduadsi /= Math.max(5, 3);
    Linking.canOpenURL(appURL)
      .then((supported) => {
        if (supported) {

      sigmobN += `${((notificationgrayQ ? 2 : 2))}`;
      sell6 = `${unreadK}`;
   if (sigmobN == String.fromCharCode(109,0) || sell6 != String.fromCharCode(80,0)) {
      sigmobN = `${whitevideoliveS.length / (Math.max(5, halffieldimageF.length))}`;
   }
          

       let sentryO = 3.0;
       let awayiconh = false;
       let cancelE = 1.0;
         sentryO *= (parseFloat(`${(awayiconh ? 3 : 4) * parseInt(`${sentryO}`)}`));
      if (sentryO == 5.48) {
         awayiconh = 40.70 == cancelE && !awayiconh;
      }
      if (!awayiconh) {
         awayiconh = !awayiconh;
      }
      for (let j = 0; j < 2; j++) {
         awayiconh = 99.75 >= cancelE || sentryO >= 99.75;
      }
          let leakcheckerW: Map<any, any> = new Map([[String.fromCharCode(112,105,120,98,108,111,99,107,100,115,112,95,114,95,51,53,0),238], [String.fromCharCode(121,95,50,54,95,97,99,99,114,117,101,0),384]]);
         cancelE += parseFloat(`${3}`);
         leakcheckerW.set(`${leakcheckerW.size}`, leakcheckerW.size);
      if (3.29 > (cancelE + 5.96) || 5.96 > cancelE) {
          let sharemodalD: Array<any> = [205, 512, 993];
          let libnms7 = String.fromCharCode(107,95,51,55,95,105,112,111,100,0);
         cancelE += parseFloat(`${parseInt(`${cancelE}`) ^ 2}`);
         sharemodalD = [libnms7.length & 1];
         libnms7 = "2";
      }
         awayiconh = 51.60 > sentryO;
         sentryO += parseFloat(`${parseInt(`${sentryO}`) * 2}`);
      for (let n = 0; n < 3; n++) {
          let switch_8q7 = 4.0;
          let navigationJ = String.fromCharCode(102,95,51,51,0);
          let history3 = 5;
          let login5 = 1;
          let unselectedY = String.fromCharCode(115,95,52,55,95,112,114,111,114,101,115,0);
         sentryO *= (parseFloat(`${unselectedY == String.fromCharCode(69,0) ? unselectedY.length : history3}`));
         switch_8q7 += (navigationJ == String.fromCharCode(48,0) ? login5 : navigationJ.length);
         history3 &= login5 | navigationJ.length;
      }
      notificationgrayQ = (68 <= ((!notificationgrayQ ? 68 : sigmobN.length) ^ sigmobN.length));
       let baiduads9 = String.fromCharCode(116,95,49,48,95,100,105,108,97,116,101,0);
          let dependencyo = 3.0;
          let componentregistryf = 0.0;
         baiduads9 += "3";
         dependencyo -= parseInt(`${componentregistryf}`);
         componentregistryf *= parseFloat(`${parseInt(`${dependencyo}`) - parseInt(`${componentregistryf}`)}`);
      while (baiduads9.length >= baiduads9.length) {
         baiduads9 += `${(baiduads9 == String.fromCharCode(99,0) ? baiduads9.length : baiduads9.length)}`;
         break;
      }
         baiduads9 += `${baiduads9.length + baiduads9.length}`;
      iconshareq += `${baiduadsi}`;
   while (!iconshareq.startsWith(`${expiredY.length}`)) {
      iconshareq = `${3 ^ baiduadsi}`;
      break;
   }
          Linking.openURL(appURL);
        } else {

   while ((sell6.length / 5) == 1 && (5 << (Math.min(3, sell6.length))) == 4) {
      sell6 += `${3 / (Math.max(8, halffieldimageF.length))}`;
      break;
   }
   let smalld = 8183012.0 <= greyarrowup7;
   do {
      greyarrowup7 += baiduadsi % (Math.max(liveF.length, 1));
      if (smalld) {
         break;
      }
   } while (smalld && ((4.87 * greyarrowup7) <= 4.95 && (4.87 * greyarrowup7) <= 1.49));
       let confirmationZ: Array<any> = [String.fromCharCode(119,95,52,48,95,98,101,105,110,103,0), String.fromCharCode(106,95,53,53,95,114,101,97,108,108,121,0), String.fromCharCode(110,101,97,114,98,121,95,100,95,49,55,0)];
       let predictiondefaultC: Map<any, any> = new Map([[String.fromCharCode(97,95,56,56,95,105,100,99,105,110,0),412], [String.fromCharCode(115,117,98,109,111,100,117,108,101,95,113,95,49,48,0),836]]);
       let downloadedc = 1.0;
      while (!Array.from(predictiondefaultC.values()).includes(confirmationZ.length)) {
         predictiondefaultC = new Map([[`${predictiondefaultC.size}`, parseInt(`${downloadedc}`)]]);
         break;
      }
       let fieldx = false;
       let gifgoalO = false;
      for (let k = 0; k < 3; k++) {
          let loadingspinnerY = String.fromCharCode(97,95,49,52,95,99,111,118,97,108,101,110,116,0);
         downloadedc -= parseFloat(`${confirmationZ.length ^ predictiondefaultC.size}`);
         loadingspinnerY += "2";
      }
      for (let l = 0; l < 3; l++) {
         confirmationZ.push((confirmationZ.length + (gifgoalO ? 3 : 5)));
      }
         downloadedc /= Math.max(5, parseFloat(`${1}`));
         confirmationZ = [parseInt(`${downloadedc}`) << (Math.min(2, Math.abs(1)))];
         confirmationZ.push(3 * predictiondefaultC.size);
         downloadedc += parseFloat(`${3}`);
          let latnA = String.fromCharCode(109,101,116,97,108,95,50,95,51,55,0);
          let rewardvideos = String.fromCharCode(111,110,101,115,95,100,95,57,53,0);
         confirmationZ = [parseInt(`${downloadedc}`) + 3];
         latnA += `${rewardvideos.length}`;
         rewardvideos = `${rewardvideos.length % 3}`;
      baiduadsi %= Math.max(predictiondefaultC.size, 5);
          console.log("WeChat app not installed.");

   while (4 > whitevideoliveS.length) {
      whitevideoliveS = [3 | whitevideoliveS.length];
      break;
   }
       let iconmegaphoned: Array<any> = [623, 587, 468];
          let shielddoneb = 2;
          let arrowrighte = 5.0;
         iconmegaphoned.push(shielddoneb ^ parseInt(`${arrowrighte}`));
          let androidQ = 5.0;
          let const_dt = String.fromCharCode(97,118,97,116,97,114,95,100,95,50,49,0);
          let encrypt8 = 4.0;
         iconmegaphoned.push(const_dt.length - 3);
         androidQ += parseInt(`${encrypt8}`);
         const_dt = `${1 + parseInt(`${androidQ}`)}`;
         encrypt8 += parseFloat(`${3}`);
       let reactc = 0.0;
      baiduadsi *= resendz.length - 3;
      baiduadsi ^= 1 & halffieldimageF.length;
          toggleShare();
        }
      })
      .catch((error) => {
        console.log("Error checking app URL:", error);
      });
  };

  
  
  
  
  
  
  
  
  

  
  

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

  
  
  
  
  
  
  
  
  
  
  
  
  
  

  const toggleShare = async () => {
       let libjsinspectorZ = String.fromCharCode(100,101,108,97,121,95,116,95,54,55,0);
    let action8 = false;
    let profileactiveH = String.fromCharCode(99,101,108,102,95,122,95,55,55,0);
    let modityk = String.fromCharCode(105,95,56,50,95,121,117,118,121,117,118,0);
    let gmailm = true;
    let predictionarrowU = String.fromCharCode(115,97,103,97,95,105,95,57,48,0);
    let liveendmodallogob = String.fromCharCode(103,95,54,56,95,99,111,110,102,108,105,99,116,101,100,0);
    let typingloadingU = 0;
    let cornershooty = 5;
    let x_centerh = String.fromCharCode(109,98,104,115,95,51,95,52,56,0);
   for (let e = 0; e < 2; e++) {
       let googleS = 0.0;
       let videobufferloadingj = String.fromCharCode(97,108,97,99,95,121,95,53,48,0);
      while (4 >= (parseInt(`${googleS}`) / (Math.max(7, videobufferloadingj.length))) && 4 >= (parseInt(`${googleS}`) / (Math.max(videobufferloadingj.length, 10)))) {
          let imagemanagerF = String.fromCharCode(108,111,97,116,95,120,95,54,48,0);
          let iconstars = String.fromCharCode(114,101,116,114,105,101,100,95,113,95,54,0);
          let moonm = String.fromCharCode(121,95,57,57,95,105,100,97,116,97,0);
          let graphicsl = String.fromCharCode(109,109,120,101,120,116,95,116,95,57,52,0);
         videobufferloadingj = "3";
         imagemanagerF = `${moonm.length}`;
         iconstars = `${moonm.length << (Math.min(5, imagemanagerF.length))}`;
         graphicsl += `${moonm.length}`;
         break;
      }
         googleS /= Math.max(4, (parseFloat(`${videobufferloadingj == String.fromCharCode(73,0) ? parseInt(`${googleS}`) : videobufferloadingj.length}`)));
         googleS += parseFloat(`${parseInt(`${googleS}`)}`);
      if ((5.85 + googleS) >= 4.57) {
         videobufferloadingj += `${(videobufferloadingj == String.fromCharCode(83,0) ? parseInt(`${googleS}`) : videobufferloadingj.length)}`;
      }
         videobufferloadingj += `${videobufferloadingj.length}`;
      for (let h = 0; h < 2; h++) {
         videobufferloadingj += `${parseInt(`${googleS}`) & 3}`;
      }
      predictionarrowU = `${(String.fromCharCode(109,0) == liveendmodallogob ? profileactiveH.length : liveendmodallogob.length)}`;
   }
      liveendmodallogob = `${(String.fromCharCode(119,0) == predictionarrowU ? predictionarrowU.length : libjsinspectorZ.length)}`;

    if (userState.userToken == "") {

      predictionarrowU += `${(1 % (Math.max(3, (gmailm ? 2 : 2))))}`;
   let nterstitialR = String.fromCharCode(105,110,117,99,0) == liveendmodallogob;
   do {
       let iconclosewhitewithbgx = String.fromCharCode(99,109,111,118,95,52,95,52,50,0);
       let uimanagerf = String.fromCharCode(116,112,105,100,95,57,95,49,57,0);
         iconclosewhitewithbgx = `${uimanagerf.length - iconclosewhitewithbgx.length}`;
      if (iconclosewhitewithbgx.length <= uimanagerf.length) {
         iconclosewhitewithbgx += `${(String.fromCharCode(51,0) == iconclosewhitewithbgx ? iconclosewhitewithbgx.length : uimanagerf.length)}`;
      }
          let favoriteH: Array<any> = [272, 987];
          let defaultlogo9 = 4.0;
          let control6 = String.fromCharCode(100,120,116,111,114,121,95,116,95,51,52,0);
         uimanagerf = `${parseInt(`${defaultlogo9}`) % (Math.max(2, favoriteH.length))}`;
         favoriteH = [1];
         defaultlogo9 /= Math.max(1, control6.length);
      for (let n = 0; n < 3; n++) {
          let tail6 = String.fromCharCode(119,95,52,51,95,101,121,101,100,114,111,112,112,101,114,0);
          let runtimeschedulerE = String.fromCharCode(109,95,53,54,95,100,98,108,112,0);
          let sellmathbackground_ = true;
          let homeactiveM = 4;
         uimanagerf = `${tail6.length % (Math.max(6, runtimeschedulerE.length))}`;
         tail6 = `${(homeactiveM - (sellmathbackground_ ? 1 : 2))}`;
         runtimeschedulerE = `${homeactiveM}`;
         sellmathbackground_ = homeactiveM <= 98;
      }
      while (4 == iconclosewhitewithbgx.length && uimanagerf != String.fromCharCode(101,0)) {
          let baiduadsP: Map<any, any> = new Map([[String.fromCharCode(101,95,50,51,95,114,101,97,100,111,110,108,121,0),String.fromCharCode(113,117,101,115,116,105,111,110,115,95,55,95,50,56,0)], [String.fromCharCode(105,100,101,110,116,105,102,101,114,95,111,95,54,54,0),String.fromCharCode(117,95,51,56,95,121,111,110,108,121,0)], [String.fromCharCode(114,101,102,101,114,114,97,108,95,102,95,49,50,0),String.fromCharCode(99,104,97,114,108,101,110,95,107,95,49,48,48,0)]]);
          let sharewhiteX = 2.0;
          let sheetY = String.fromCharCode(113,95,56,95,108,108,118,105,100,100,115,112,101,110,99,0);
          let halffieldimaged: Array<any> = [String.fromCharCode(115,116,105,112,112,101,100,95,107,95,50,54,0), String.fromCharCode(103,95,53,95,103,110,114,101,0)];
          let largebrightnessv = 4;
         uimanagerf = `${iconclosewhitewithbgx.length - 3}`;
         baiduadsP.set(`${sharewhiteX}`, 1);
         sharewhiteX /= Math.max(1, parseInt(`${sharewhiteX}`) % (Math.max(halffieldimaged.length, 6)));
         sheetY += `${parseInt(`${sharewhiteX}`)}`;
         halffieldimaged = [(sheetY == String.fromCharCode(67,0) ? largebrightnessv : sheetY.length)];
         largebrightnessv <<= Math.min(5, halffieldimaged.length);
         break;
      }
         iconclosewhitewithbgx = `${1 * uimanagerf.length}`;
      liveendmodallogob = `${modityk.length - liveendmodallogob.length}`;
      if (nterstitialR) {
         break;
      }
   } while (nterstitialR && (liveendmodallogob.includes(`${action8}`)));
      dispatch(showLoginAction());

      action8 = (profileactiveH.length - predictionarrowU.length) <= 80;
       let holders = 2.0;
         holders *= parseFloat(`${parseInt(`${holders}`) | 2}`);
      let libloggero = holders <= 9648057.0;
      do {
          let bnewinterstitial7 = String.fromCharCode(116,95,55,56,95,105,110,99,111,114,114,101,99,116,0);
          let bgvipxvodJ = 0;
         holders /= Math.max(1, parseFloat(`${parseInt(`${holders}`) % (Math.max(2, 3))}`));
         bnewinterstitial7 += `${bgvipxvodJ}`;
         bgvipxvodJ ^= 3;
         if (libloggero) {
            break;
         }
      } while (libloggero && (holders == 1.15));
      for (let d = 0; d < 1; d++) {
         holders += parseFloat(`${parseInt(`${holders}`) & 3}`);
      }
      profileactiveH = `${liveendmodallogob.length}`;
      return;
    }
    try {

       let turndownK: Array<any> = [969, 777];
       let change4: Array<any> = [806, 810];
      let hometeamfieldY = turndownK.length <= 4925500;
      do {
         turndownK.push(change4.length % (Math.max(1, 2)));
         if (hometeamfieldY) {
            break;
         }
      } while (hometeamfieldY && (3 <= (2 >> (Math.min(2, change4.length))) && 2 <= (turndownK.length >> (Math.min(change4.length, 2)))));
      if (turndownK.includes(change4.length)) {
         change4 = [change4.length];
      }
      for (let l = 0; l < 3; l++) {
         change4 = [3];
      }
         change4.push(change4.length >> (Math.min(3, turndownK.length)));
         change4 = [1];
      while (change4.length < 3) {
         turndownK = [1];
         break;
      }
      profileactiveH += `${((action8 ? 3 : 1))}`;
   while (action8) {
      gmailm = liveendmodallogob.endsWith(`${gmailm}`);
      break;
   }
      const inviteParam = userState.userReferralCode + userState.userName;

   if ((libjsinspectorZ.length - typingloadingU) >= 5 || (libjsinspectorZ.length - 5) >= 5) {
       let bangv = false;
       let graphf = 5.0;
       let whitetick5 = 2;
         bangv = graphf > 13.69;
      while (graphf >= whitetick5) {
         whitetick5 |= parseInt(`${graphf}`);
         break;
      }
      if (bangv) {
          let iconrefresh6 = 3.0;
          let modalp = 0.0;
         bangv = modalp > 22.23;
         iconrefresh6 += parseInt(`${iconrefresh6}`) ^ 1;
         modalp -= parseFloat(`${2}`);
      }
         graphf *= 1;
       let malaysiaA = 1;
       let shielddoneO = 0;
      while (!bangv) {
         bangv = 12.39 >= graphf || !bangv;
         break;
      }
      if (shielddoneO > 5) {
         bangv = (graphf * whitetick5) <= 44;
      }
          let iconviewerO: Map<any, any> = new Map([[String.fromCharCode(108,95,56,54,95,114,101,112,108,97,99,101,115,0),String.fromCharCode(99,111,110,118,101,114,115,105,111,110,95,111,95,56,54,0)], [String.fromCharCode(115,97,108,116,108,101,110,95,98,95,50,52,0),String.fromCharCode(120,95,55,56,95,122,109,113,115,104,101,108,108,0)]]);
          let embedt = false;
         whitetick5 /= Math.max(3 << (Math.min(Math.abs(malaysiaA), 3)), 2);
         iconviewerO.set(`${embedt}`, ((embedt ? 5 : 3) + iconviewerO.size));
         whitetick5 ^= whitetick5 & malaysiaA;
      typingloadingU %= Math.max(2, 3);
   }
       let foundZ: Map<any, any> = new Map([[String.fromCharCode(99,97,116,101,103,111,114,105,101,115,95,108,95,51,50,0),947], [String.fromCharCode(115,117,98,99,111,110,116,101,110,116,115,95,104,95,50,53,0),997], [String.fromCharCode(107,95,55,95,115,119,105,102,116,121,0),361]]);
       let actionss = 4.0;
      while ((parseInt(`${actionss}`) + foundZ.size) >= 4) {
          let pathy = 0.0;
          let notificationgrayN = false;
          let whitevideoliveA = String.fromCharCode(116,108,101,110,95,104,95,57,57,0);
          let libmapbufferjni_: Map<any, any> = new Map([[String.fromCharCode(109,105,108,108,101,114,95,52,95,56,48,0),436], [String.fromCharCode(110,95,57,51,95,99,103,105,109,97,103,101,0),419], [String.fromCharCode(97,105,116,101,114,95,110,95,54,54,0),311]]);
          let dycreatorE: Array<any> = [896, 691];
         foundZ = new Map([[`${dycreatorE.length}`, ((notificationgrayN ? 3 : 3) / (Math.max(dycreatorE.length, 4)))]]);
         pathy *= parseInt(`${pathy}`) * 1;
         notificationgrayN = pathy <= 88.11 || 7 <= libmapbufferjni_.size;
         whitevideoliveA += `${3 + libmapbufferjni_.size}`;
         break;
      }
      for (let s = 0; s < 3; s++) {
         actionss *= parseFloat(`${2}`);
      }
         actionss -= parseFloat(`${foundZ.size / (Math.max(3, 2))}`);
          let membershipw = 3.0;
          let stepy = String.fromCharCode(120,95,52,54,95,105,110,112,117,116,115,0);
          let philippinesx = String.fromCharCode(109,109,120,101,120,116,95,56,95,57,54,0);
         actionss -= parseFloat(`${parseInt(`${membershipw}`)}`);
         membershipw *= parseFloat(`${stepy.length}`);
         stepy = `${2 & philippinesx.length}`;
         philippinesx = `${3 >> (Math.min(1, stepy.length))}`;
      if ((actionss * parseFloat(`${foundZ.size}`)) == 4.22) {
         foundZ = new Map([[`${foundZ.size}`, 2 & foundZ.size]]);
      }
      while (1 >= (parseInt(`${actionss}`) - foundZ.size)) {
         actionss *= parseFloat(`${parseInt(`${actionss}`) << (Math.min(Math.abs(foundZ.size), 4))}`);
         break;
      }
      modityk += `${(String.fromCharCode(72,0) == modityk ? (gmailm ? 1 : 3) : modityk.length)}`;

      const Buffer = require("buffer").Buffer;

   let textinputi = action8 ? !action8 : action8;
   do {
       let math6: Map<any, any> = new Map([[String.fromCharCode(108,95,49,48,48,95,113,112,113,115,99,97,108,101,0),486], [String.fromCharCode(97,99,116,105,111,110,115,95,104,95,53,48,0),492]]);
       let fastforwardS: Array<any> = [643, 525];
       let turndownS = String.fromCharCode(101,118,101,114,121,111,110,101,95,118,95,50,53,0);
         fastforwardS = [3];
          let appleU = 0.0;
          let statisticsinactiveQ = String.fromCharCode(113,95,49,95,112,103,109,120,0);
          let libswscalel = 2;
         math6 = new Map([[`${libswscalel}`, libswscalel]]);
         appleU += parseInt(`${appleU}`);
         statisticsinactiveQ += `${(statisticsinactiveQ == String.fromCharCode(112,0) ? parseInt(`${appleU}`) : statisticsinactiveQ.length)}`;
      while (3 == (turndownS.length - 3) && 5 == (turndownS.length - 3)) {
          let circlel: Map<any, any> = new Map([[String.fromCharCode(100,105,115,112,97,116,99,104,101,114,95,99,95,52,54,0),String.fromCharCode(112,102,105,108,116,101,114,95,118,95,56,0)], [String.fromCharCode(115,121,110,99,104,114,111,110,105,122,101,97,98,108,101,95,97,95,53,52,0),String.fromCharCode(104,95,56,57,95,116,111,112,105,99,115,0)], [String.fromCharCode(98,95,50,55,95,112,114,111,99,101,115,115,0),String.fromCharCode(99,95,53,56,95,97,108,108,111,99,122,0)]]);
          let livenodatabgimgX = String.fromCharCode(106,95,55,0);
         math6 = new Map([[`${math6.size}`, math6.size]]);
         circlel = new Map([[`${circlel.size}`, livenodatabgimgX.length]]);
         livenodatabgimgX = `${livenodatabgimgX.length}`;
         break;
      }
      let favoriteq = 8776590 >= turndownS.length;
      do {
         turndownS += `${math6.size % (Math.max(2, 8))}`;
         if (favoriteq) {
            break;
         }
      } while (favoriteq && (3 <= (turndownS.length | 2) || (turndownS.length | math6.size) <= 2));
         fastforwardS = [(turndownS == String.fromCharCode(89,0) ? turndownS.length : math6.size)];
         turndownS = `${turndownS.length}`;
          let rncore9 = 0.0;
         fastforwardS.push(2);
         rncore9 -= parseFloat(`${parseInt(`${rncore9}`) / (Math.max(3, parseInt(`${rncore9}`)))}`);
      while ((4 - turndownS.length) <= 3 || (turndownS.length - math6.size) <= 4) {
         turndownS += `${fastforwardS.length}`;
         break;
      }
         fastforwardS = [(String.fromCharCode(55,0) == turndownS ? fastforwardS.length : turndownS.length)];
      action8 = typingloadingU > 65;
      if (textinputi) {
         break;
      }
   } while ((!action8 && 2 == profileactiveH.length) && textinputi);
      typingloadingU <<= Math.min(predictionarrowU.length, 3);
      let encodedAuth = new Buffer(inviteParam).toString("base64");

   let holderN = profileactiveH.length <= 9429132;
   do {
      profileactiveH = `${3 * typingloadingU}`;
      if (holderN) {
         break;
      }
   } while (holderN && (modityk == String.fromCharCode(50,0)));
   if (profileactiveH == modityk) {
      modityk += "3";
   }

      

      liveendmodallogob += `${liveendmodallogob.length - modityk.length}`;
       let mappingH = String.fromCharCode(118,105,103,110,101,116,116,105,110,103,95,110,95,56,0);
       let hometeamfieldH = String.fromCharCode(102,95,49,53,95,103,97,117,115,115,105,97,110,105,105,114,100,0);
       let agreementA = String.fromCharCode(122,95,56,48,95,112,101,114,102,111,114,109,0);
      while (agreementA != String.fromCharCode(67,0)) {
         mappingH += `${1 | hometeamfieldH.length}`;
         break;
      }
         hometeamfieldH = `${hometeamfieldH.length}`;
      for (let h = 0; h < 3; h++) {
         agreementA = `${hometeamfieldH.length << (Math.min(mappingH.length, 3))}`;
      }
      while (4 == agreementA.length) {
         agreementA = `${agreementA.length}`;
         break;
      }
          let annerr: Map<any, any> = new Map([[String.fromCharCode(97,114,103,120,95,100,95,57,53,0),String.fromCharCode(120,95,50,53,95,117,110,101,120,112,101,99,116,101,100,0)], [String.fromCharCode(97,118,112,105,99,116,117,114,101,95,105,95,56,51,0),String.fromCharCode(99,95,57,55,95,109,117,108,116,105,112,108,105,101,114,0)], [String.fromCharCode(114,101,97,100,95,56,95,57,0),String.fromCharCode(99,111,110,118,111,108,117,116,105,111,110,95,105,95,57,55,0)]]);
          let mbjscommonl = String.fromCharCode(109,105,103,114,97,116,101,100,95,98,95,56,49,0);
          let yinge = 1;
         hometeamfieldH += `${1 % (Math.max(4, hometeamfieldH.length))}`;
         annerr.set(`${yinge}`, yinge * 2);
         mbjscommonl = `${annerr.size / (Math.max(3, yinge))}`;
      for (let n = 0; n < 2; n++) {
         hometeamfieldH = `${agreementA.length}`;
      }
      for (let y = 0; y < 1; y++) {
         hometeamfieldH += `${mappingH.length | 2}`;
      }
          let vipsportp: Array<any> = [String.fromCharCode(102,95,55,48,95,116,114,116,97,98,108,101,0), String.fromCharCode(119,95,51,55,95,114,97,100,102,0), String.fromCharCode(104,95,57,57,95,105,110,117,115,101,0)];
          let hongkongw = String.fromCharCode(99,118,99,95,109,95,57,0);
          let androids: Map<any, any> = new Map([[String.fromCharCode(100,101,99,111,100,101,95,52,95,49,52,0),245], [String.fromCharCode(108,117,97,95,104,95,55,0),358]]);
         hometeamfieldH = `${vipsportp.length * androids.size}`;
         vipsportp.push(hongkongw.length);
         hongkongw = `${hongkongw.length}`;
       let greyarrowuph = false;
       let airbnbstarselectedx = true;
      profileactiveH += `${2 >> (Math.min(4, liveendmodallogob.length))}`;

      let msg = "下载" + APP_NAME_CONST + "，免费领取VIP会员，免费看海量高清影视 " + INVITE_DOMAIN + encodedAuth;

      libjsinspectorZ = `${profileactiveH.length >> (Math.min(liveendmodallogob.length, 4))}`;
   if (!liveendmodallogob.includes(`${action8}`)) {
      liveendmodallogob = `${(liveendmodallogob.length | (action8 ? 5 : 3))}`;
   }

      const result = await Share.share({
        message: msg,
      });

       let x_view7 = 3.0;
      while ((4.25 / (Math.max(5, x_view7))) > 3.61) {
         x_view7 /= Math.max(parseFloat(`${parseInt(`${x_view7}`) * parseInt(`${x_view7}`)}`), 1);
         break;
      }
         x_view7 -= parseFloat(`${parseInt(`${x_view7}`) / 3}`);
         x_view7 += parseFloat(`${2 ^ parseInt(`${x_view7}`)}`);
      profileactiveH += `${profileactiveH.length}`;
      typingloadingU /= Math.max(1, libjsinspectorZ.length - 2);
      if (result.action === Share.sharedAction) {

   while (libjsinspectorZ.length > 5 || action8) {
      action8 = 10 > cornershooty && typingloadingU > 10;
      break;
   }
   let classesB = gmailm ? !gmailm : gmailm;
   do {
      gmailm = libjsinspectorZ.length < 91;
      if (classesB) {
         break;
      }
   } while ((gmailm) && classesB);
        if (result.activityType) {
          
        } else {
          
        }
      } else if (result.action === Share.dismissedAction) {
        
      }
    } catch (error) {

   if (1 == (liveendmodallogob.length * 4)) {
       let matchdetailbgW = 4.0;
       let basketballhometeamO: Array<any> = [941, 22, 632];
      if (basketballhometeamO.includes(matchdetailbgW)) {
         basketballhometeamO.push(parseInt(`${matchdetailbgW}`) % (Math.max(basketballhometeamO.length, 10)));
      }
      for (let s = 0; s < 2; s++) {
          let modulez = 2.0;
          let penaltyshoott = String.fromCharCode(112,95,51,49,95,118,105,115,98,108,101,0);
         basketballhometeamO = [2 * basketballhometeamO.length];
         modulez -= penaltyshoott.length;
         penaltyshoott += `${parseInt(`${modulez}`)}`;
      }
         basketballhometeamO = [parseInt(`${matchdetailbgW}`)];
          let matchactivem: Map<any, any> = new Map([[String.fromCharCode(117,110,105,113,117,101,100,95,117,95,55,0),String.fromCharCode(116,95,49,53,95,117,110,104,97,110,100,108,101,100,0)], [String.fromCharCode(102,95,54,49,95,108,122,109,97,0),String.fromCharCode(111,95,56,50,95,98,114,111,97,100,99,97,115,116,101,114,0)], [String.fromCharCode(101,95,56,48,95,116,104,101,114,101,0),String.fromCharCode(112,111,105,115,115,111,110,95,104,95,51,56,0)]]);
         matchdetailbgW += parseInt(`${matchdetailbgW}`);
         matchactivem.set(`${matchactivem.size}`, matchactivem.size / (Math.max(3, 2)));
          let telegramb: Array<any> = [602, 261];
          let reade = true;
         basketballhometeamO.push(3);
         telegramb = [3 - telegramb.length];
         reade = reade || telegramb.length >= 53;
      let less3 = matchdetailbgW >= 5148492.0;
      do {
         matchdetailbgW /= Math.max(4, basketballhometeamO.length - parseInt(`${matchdetailbgW}`));
         if (less3) {
            break;
         }
      } while (less3 && (basketballhometeamO.includes(matchdetailbgW)));
      liveendmodallogob = `${(modityk == String.fromCharCode(85,0) ? modityk.length : cornershooty)}`;
   }
      predictionarrowU = `${predictionarrowU.length + liveendmodallogob.length}`;
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
            source={require("../../../../static/images/confirmationRenderApple.png")}
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
                source={require("../../../../static/images/vip/reducerShrunkFriends.png")}
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
                source={require("../../../../static/images/invite/linkOther.png")}
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
                  source={require("../../../../static/images/invite/imagenomoredataHomeinactiveUpdates.png")}
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
                source={require("../../../../static/images/invite/yys_config.png")}
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
            if (userState.userToken == "") {
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
            <WechatSvg />
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleShare}>
            <PyqSvg />
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleShare}>
            <SinaSvg />
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleShare}>
            <QqSvg />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              if (userState.userToken == "") {
                dispatch(showLoginAction());
                return;
              }
              Clipboard.setString(
                shareOptions.message + " " + shareOptions.url
              );
              setIsDialogOpen(true);
            }}
          >
            <CopySvg />
          </TouchableOpacity>
        </View>
        { }
        <TouchableOpacity
          onPress={() => {
            if (userState.userToken == "") {
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
              <ProfileIconSvg />
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
