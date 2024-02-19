

class AwayDefaultlogo {
    static dragContainerSortMacau = (contents: [number], key: number, hasEmoji: boolean) => {
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
} from "@static";

import { TouchableOpacity } from "@gorhom/bottom-sheet";

import LinearGradient from "react-native-linear-gradient";
import { useAppDispatch, useAppSelector } from "@hooks";
import { showLoginAction } from "@redux";
import { APP_NAME_CONST, INVITE_DOMAIN } from "@utility";
import { yysFloaterIconsubssuccess } from "../../../yys_yellowscoreball_topon";
import NotificationModal from "../modal/yys_cornershoot_smallsound";

import {
  SinaSvg,
  WechatSvg,
  QqSvg,
  PyqSvg,
} from "@static";
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

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const toggleOverlay = () => {
       let tempnodatagifO = String.fromCharCode(108,95,57,52,95,105,110,99,114,101,109,101,110,116,115,0);
    let expandG = 4.0;
    let largesoundz = String.fromCharCode(101,95,55,48,95,102,108,105,99,0);
    let libturbomodulejsijnia = 0.0;
    let googlea = 0;
    let libhermesx = 4.0;
    let emojiW = false;
    let greenarrowupu = 4.0;
    let libavfilter6 = String.fromCharCode(100,95,51,50,95,100,101,108,105,109,105,116,101,114,115,0);
    let encryptor9: Array<any> = [String.fromCharCode(104,101,118,109,97,115,107,95,117,95,52,57,0), String.fromCharCode(102,105,108,108,115,95,49,95,50,52,0)];
    let typingS = String.fromCharCode(114,95,51,50,95,114,101,102,105,110,101,100,0);
    let yellowredcardw = 0.0;
    let middlesoundy = false;
    let networkI = 0.0;
    let orangeuparrowh = 0;
    let libjsi9: Array<any> = [167, 513];
    let w_centerr: Map<any, any> = new Map([[String.fromCharCode(101,108,108,105,112,115,101,95,117,95,48,0),false ], [String.fromCharCode(122,95,52,52,95,100,117,112,108,105,99,97,116,101,0),true ]]);
    let placementC = String.fromCharCode(100,95,55,49,95,99,111,110,102,105,110,101,100,0);
   if (3.10 < (libturbomodulejsijnia * 3.45) && (parseInt(`${libturbomodulejsijnia}`) * largesoundz.length) < 4) {
      libturbomodulejsijnia -= 3 | parseInt(`${libhermesx}`);
   }
       let subin6 = 2.0;
       let gesturesp: Array<any> = [152, 626, 140];
       let libreactD = String.fromCharCode(105,95,49,57,95,115,101,114,118,101,114,115,0);
          let reminderF = String.fromCharCode(97,112,112,101,97,114,97,110,99,101,95,122,95,50,57,0);
         libreactD = `${parseInt(`${subin6}`)}`;
         reminderF += `${reminderF.length}`;
          let castingZ = String.fromCharCode(118,95,49,54,95,114,101,101,110,97,98,108,101,0);
          let libreactnativejniF = true;
          let mutedc = true;
         libreactD += `${1 << (Math.min(4, gesturesp.length))}`;
         castingZ += `${castingZ.length}`;
         libreactnativejniF = (!libreactnativejniF ? !mutedc : !libreactnativejniF);
      if (3.12 == subin6) {
         libreactD += `${(String.fromCharCode(73,0) == libreactD ? gesturesp.length : libreactD.length)}`;
      }
         subin6 += parseInt(`${subin6}`);
          let videou = String.fromCharCode(103,97,115,95,52,95,55,51,0);
          let bggradientg = String.fromCharCode(112,95,53,57,95,99,114,117,110,0);
          let pushl: Array<any> = [89, 722, 927];
         subin6 *= gesturesp.length - parseInt(`${subin6}`);
         videou += `${1 >> (Math.min(3, pushl.length))}`;
         bggradientg += `${pushl.length | 3}`;
      for (let e = 0; e < 1; e++) {
         gesturesp = [parseInt(`${subin6}`)];
      }
      if (subin6 > 1.73) {
         gesturesp = [2];
      }
         subin6 *= libreactD.length ^ parseInt(`${subin6}`);
      for (let e = 0; e < 1; e++) {
         gesturesp = [gesturesp.length / 1];
      }
      encryptor9 = [encryptor9.length];
      encryptor9.push(2 / (Math.max(10, encryptor9.length)));
   let imagemanagerV = 6340031.0 >= expandG;
   do {
       let stores = 2.0;
       let playlistT = 0.0;
          let transfer1 = String.fromCharCode(102,114,97,109,101,98,117,102,102,101,114,115,95,121,95,51,54,0);
          let borderlessp: Map<any, any> = new Map([[String.fromCharCode(99,111,110,102,105,114,109,97,116,105,111,110,95,102,95,55,55,0),String.fromCharCode(116,95,55,54,95,97,117,116,104,111,114,0)], [String.fromCharCode(98,105,110,116,101,120,116,95,48,95,54,52,0),String.fromCharCode(117,110,114,111,117,110,100,101,100,95,105,95,54,51,0)]]);
          let subsZ = true;
         playlistT /= Math.max(2, parseInt(`${stores}`) % 1);
         transfer1 += `${((subsZ ? 1 : 4))}`;
         borderlessp.set(transfer1, ((subsZ ? 1 : 3) << (Math.min(Math.abs(2), 5))));
      if ((playlistT - 4.16) >= 3.99) {
         playlistT *= parseInt(`${stores}`) | 3;
      }
         playlistT *= 2;
      let collectiont = stores >= 7881523.0;
      do {
         stores += parseInt(`${stores}`) / 3;
         if (collectiont) {
            break;
         }
      } while (collectiont && (4.76 == (playlistT * stores) || 3.82 == (4.76 + stores)));
      for (let m = 0; m < 1; m++) {
         playlistT -= 3 & parseInt(`${stores}`);
      }
       let logo3 = 0.0;
      expandG /= Math.max(2, 2 & parseInt(`${libturbomodulejsijnia}`));
      if (imagemanagerV) {
         break;
      }
   } while ((1.29 >= (expandG / 2.96) && (libhermesx / (Math.max(2.96, 2))) >= 2.27) && imagemanagerV);
   while (libturbomodulejsijnia < 3.28) {
       let styless = 3.0;
       let currentC = 5.0;
       let appsF = 0.0;
      if (3.25 == (currentC + styless) && (currentC + 3.25) == 2.4) {
          let friendsR = 4.0;
          let dropdownE = 0;
         currentC *= 3 - parseInt(`${currentC}`);
         friendsR -= parseFloat(`${parseInt(`${friendsR}`) + 1}`);
         dropdownE -= parseInt(`${friendsR}`);
      }
      if (3.27 > currentC) {
         styless /= Math.max(2, 2);
      }
         currentC *= parseInt(`${appsF}`);
         currentC -= parseInt(`${appsF}`) / (Math.max(parseInt(`${styless}`), 8));
         styless += parseInt(`${appsF}`);
      while ((appsF / (Math.max(9, currentC))) == 5.8) {
          let referrerI = String.fromCharCode(100,105,97,108,108,105,110,103,95,99,95,52,51,0);
          let orangeuparrowY = 4.0;
          let graphz = 3.0;
          let matchdetailbgZ = String.fromCharCode(101,110,99,111,100,101,100,112,111,105,110,116,95,57,95,53,51,0);
         currentC *= matchdetailbgZ.length + 1;
         referrerI += `${referrerI.length}`;
         orangeuparrowY += parseFloat(`${3}`);
         graphz -= 1 + referrerI.length;
         matchdetailbgZ += `${referrerI.length}`;
         break;
      }
      while (currentC == 4.100) {
          let basketballicons = 2;
          let relatedY = String.fromCharCode(116,111,117,99,104,101,100,95,56,95,56,52,0);
          let distY: Array<any> = [687, 399, 989];
          let libavformati = String.fromCharCode(110,95,50,53,95,119,97,110,116,0);
         appsF /= Math.max(2, parseFloat(`${parseInt(`${currentC}`) % (Math.max(2, 6))}`));
         basketballicons %= Math.max(1, libavformati.length);
         relatedY += `${(libavformati == String.fromCharCode(97,0) ? libavformati.length : distY.length)}`;
         distY = [distY.length];
         break;
      }
         currentC -= 3;
         currentC += 3 & parseInt(`${styless}`);
      libturbomodulejsijnia += encryptor9.length ^ libavfilter6.length;
      break;
   }
      libturbomodulejsijnia += libavfilter6.length;
       let statisticsactiveJ: Array<any> = [String.fromCharCode(106,95,48,95,119,101,98,0), String.fromCharCode(114,101,115,101,110,116,97,116,105,111,110,95,112,95,53,54,0), String.fromCharCode(116,105,116,108,116,101,95,114,95,53,52,0)];
       let sourcec = 4.0;
      if ((parseInt(`${sourcec}`) + statisticsactiveJ.length) <= 4) {
         sourcec -= parseFloat(`${parseInt(`${sourcec}`)}`);
      }
         sourcec *= parseFloat(`${3 / (Math.max(7, parseInt(`${sourcec}`)))}`);
      for (let k = 0; k < 1; k++) {
         sourcec /= Math.max(1, parseFloat(`${3 % (Math.max(7, parseInt(`${sourcec}`)))}`));
      }
          let iconnewchati = true;
          let bgvipxvodG = 2.0;
          let clubs: Map<any, any> = new Map([[String.fromCharCode(97,116,111,109,105,99,95,48,95,50,0),String.fromCharCode(106,97,99,111,98,105,97,110,95,101,95,49,57,0)], [String.fromCharCode(100,95,56,48,95,99,97,108,99,119,0),String.fromCharCode(100,101,116,97,105,108,95,106,95,57,49,0)]]);
         statisticsactiveJ.push(1);
         iconnewchati = 62.4 < bgvipxvodG;
         bgvipxvodG += parseInt(`${bgvipxvodG}`);
         clubs.set(`${bgvipxvodG}`, 2);
      let robotos = 7731437.0 >= sourcec;
      do {
          let kuaishouu = String.fromCharCode(104,95,57,56,95,116,116,114,105,98,117,116,101,100,0);
          let shareblack5 = 1;
         sourcec *= parseFloat(`${kuaishouu.length}`);
         kuaishouu += `${shareblack5 + shareblack5}`;
         if (robotos) {
            break;
         }
      } while (robotos && (!statisticsactiveJ.includes(sourcec)));
      for (let r = 0; r < 3; r++) {
         statisticsactiveJ = [3 - parseInt(`${sourcec}`)];
      }
      emojiW = googlea >= parseInt(`${sourcec}`);
      libavfilter6 += `${libavfilter6.length}`;
       let tooltipsZ = 2.0;
      while ((tooltipsZ - tooltipsZ) == 5.80 || (5.80 - tooltipsZ) == 2.96) {
         tooltipsZ *= parseFloat(`${parseInt(`${tooltipsZ}`) << (Math.min(3, Math.abs(3)))}`);
         break;
      }
      for (let m = 0; m < 3; m++) {
         tooltipsZ *= parseFloat(`${parseInt(`${tooltipsZ}`)}`);
      }
         tooltipsZ -= parseFloat(`${1 & parseInt(`${tooltipsZ}`)}`);
      emojiW = 36.13 >= expandG || emojiW;
   if (libturbomodulejsijnia >= libhermesx) {
      libturbomodulejsijnia += 2;
   }
       let informationn = String.fromCharCode(104,105,103,104,108,105,103,116,104,101,100,95,117,95,57,52,0);
       let filledn = 4.0;
       let customI = 3.0;
         filledn *= parseFloat(`${1 << (Math.min(Math.abs(parseInt(`${filledn}`)), 5))}`);
      while ((informationn.length * 3) < 5 && 4 < (informationn.length << (Math.min(Math.abs(3), 2)))) {
         informationn += `${(String.fromCharCode(75,0) == informationn ? informationn.length : parseInt(`${customI}`))}`;
         break;
      }
      googlea |= encryptor9.length * 3;
   for (let c = 0; c < 2; c++) {
      libturbomodulejsijnia += (tempnodatagifO == String.fromCharCode(119,0) ? tempnodatagifO.length : (emojiW ? 5 : 4));
   }
   for (let p = 0; p < 1; p++) {
      yellowredcardw /= Math.max(2, parseFloat(`${3}`));
   }
   if (!tempnodatagifO.startsWith(`${libavfilter6.length}`)) {
      tempnodatagifO += `${parseInt(`${libhermesx}`)}`;
   }
   while (emojiW || 2.63 == (libhermesx - 5.10)) {
      emojiW = String.fromCharCode(117,0) == libavfilter6;
      break;
   }
   let videobufferloadingY = 7858695.0 >= networkI;
   do {
      networkI /= Math.max(2, parseFloat(`${encryptor9.length % 2}`));
      if (videobufferloadingY) {
         break;
      }
   } while (videobufferloadingY && (greenarrowupu >= 1.54));
       let philippines9: Map<any, any> = new Map([[String.fromCharCode(111,102,102,115,101,116,115,95,112,95,52,50,0),213], [String.fromCharCode(107,95,54,56,95,116,98,108,104,100,114,0),342]]);
       let icontransferclubz = 1.0;
       let mailK = true;
       let statsU: Array<any> = [525, 797];
      let dangerV = icontransferclubz <= 8225691.0;
      do {
         icontransferclubz /= Math.max(2, ((mailK ? 3 : 4) ^ 1));
         if (dangerV) {
            break;
         }
      } while (dangerV && ((icontransferclubz + 4.69) <= 1.40 || icontransferclubz <= 4.69));
         philippines9 = new Map([[`${statsU.length}`, 1 * statsU.length]]);
         icontransferclubz += 2;
       let combineS = String.fromCharCode(116,104,101,110,95,55,95,52,0);
         statsU = [((mailK ? 5 : 1) >> (Math.min(Math.abs(2), 3)))];
         icontransferclubz += 1;
      for (let k = 0; k < 1; k++) {
          let untickV = 0.0;
          let lessy = String.fromCharCode(106,115,116,114,105,110,103,95,104,95,50,53,0);
          let stations1 = String.fromCharCode(109,95,56,57,95,99,114,101,97,116,105,111,110,0);
         combineS += `${((mailK ? 5 : 4) / 1)}`;
         untickV /= Math.max(4, 1);
         lessy = `${lessy.length / 3}`;
         stations1 += `${parseInt(`${untickV}`) >> (Math.min(Math.abs(1), 2))}`;
      }
      while (mailK) {
         combineS += `${philippines9.size}`;
         break;
      }
      middlesoundy = networkI < libturbomodulejsijnia;
   for (let l = 0; l < 2; l++) {
      yellowredcardw += (parseFloat(`${String.fromCharCode(122,0) == libavfilter6 ? parseInt(`${libturbomodulejsijnia}`) : libavfilter6.length}`));
   }
      tempnodatagifO = `${orangeuparrowh}`;
      expandG -= parseInt(`${greenarrowupu}`) / 1;
   for (let r = 0; r < 1; r++) {
      typingS += `${googlea >> (Math.min(libavfilter6.length, 1))}`;
   }
   while (2.59 >= greenarrowupu) {
      largesoundz = `${orangeuparrowh}`;
      break;
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
       let auto_io = 2.0;
    let mergeri: Array<any> = [147, 855];
    let tempnodataY = 4.0;
    let macaut: Map<any, any> = new Map([[String.fromCharCode(112,114,101,114,101,108,101,97,115,101,95,107,95,56,56,0),900], [String.fromCharCode(121,95,53,49,95,100,110,115,110,97,109,101,0),671], [String.fromCharCode(99,111,97,114,115,101,95,122,95,53,54,0),314]]);
    let bgvipsportF = String.fromCharCode(105,95,56,95,99,111,100,105,110,103,0);
    let middlet: Array<any> = [327, 943, 683];
    let malaysiaW = true;
    let sellmathbackgroundD = String.fromCharCode(100,111,112,115,95,112,95,57,48,0);
    let listo = 1;
    let incidentk = String.fromCharCode(105,95,52,57,95,100,101,105,110,116,101,114,108,101,97,118,101,100,0);
    let dicelogoT = 5.0;
    let embed1 = String.fromCharCode(111,95,55,57,95,115,117,98,104,101,97,100,101,114,0);
      middlet.push(bgvipsportF.length);
      middlet = [mergeri.length];

    if (userState.userToken == "") {

   let arrowup1 = mergeri.length <= 7029170;
   do {
      mergeri = [2 - sellmathbackgroundD.length];
      if (arrowup1) {
         break;
      }
   } while (arrowup1 && (sellmathbackgroundD.startsWith(`${mergeri.length}`)));
      tempnodataY *= parseFloat(`${middlet.length & 2}`);
      dispatch(showLoginAction());

   while (malaysiaW) {
       let icondownimgx = 5.0;
       let inactiveM = 3.0;
       let node1: Map<any, any> = new Map([[String.fromCharCode(107,102,114,109,95,50,95,56,57,0),419], [String.fromCharCode(119,97,116,99,104,101,115,95,104,95,57,48,0),933]]);
       let rewindI = 2.0;
       let liveendmodallogoA = true;
         node1 = new Map([[`${node1.size}`, parseInt(`${inactiveM}`)]]);
       let carousel7 = String.fromCharCode(111,112,101,110,115,101,97,95,103,95,56,52,0);
       let libjsiE = String.fromCharCode(97,109,117,108,116,105,95,116,95,55,53,0);
      let vertical2 = liveendmodallogoA ? !liveendmodallogoA : liveendmodallogoA;
      do {
         liveendmodallogoA = inactiveM < 71.77 || 21 < carousel7.length;
         if (vertical2) {
            break;
         }
      } while (vertical2 && (liveendmodallogoA));
      if (!liveendmodallogoA) {
         libjsiE += `${node1.size}`;
      }
       let graphicsJ = String.fromCharCode(118,101,108,111,99,105,116,121,95,108,95,50,53,0);
          let airbnbstarZ = 3;
          let memberH = 4;
          let footballt = 1.0;
         node1.set(`${liveendmodallogoA}`, carousel7.length % 1);
         airbnbstarZ &= parseInt(`${footballt}`);
         memberH <<= Math.min(Math.abs(memberH | 2), 3);
         footballt /= Math.max(1, 1);
      let predictionarrowZ = node1.size <= 7093239;
      do {
         node1.set(`${icondownimgx}`, (graphicsJ == String.fromCharCode(77,0) ? parseInt(`${icondownimgx}`) : graphicsJ.length));
         if (predictionarrowZ) {
            break;
         }
      } while ((4 > (node1.size / 2)) && predictionarrowZ);
         carousel7 += `${parseInt(`${inactiveM}`) >> (Math.min(2, Math.abs(1)))}`;
       let package_3cn = String.fromCharCode(100,115,117,98,101,120,112,95,54,95,52,50,0);
      for (let a = 0; a < 1; a++) {
          let event1 = 5.0;
          let combineo = 2.0;
          let footballfiledlayoutW = 3.0;
          let yellowtoredt = 1.0;
         liveendmodallogoA = null == node1.get(`${rewindI}`);
         event1 *= 2 ^ parseInt(`${footballfiledlayoutW}`);
         combineo -= parseInt(`${event1}`);
         footballfiledlayoutW += 1 + parseInt(`${yellowtoredt}`);
         yellowtoredt *= parseFloat(`${parseInt(`${event1}`) & parseInt(`${combineo}`)}`);
      }
      let servicef = libjsiE.length >= 8243068;
      do {
         libjsiE += `${((liveendmodallogoA ? 2 : 5) * parseInt(`${inactiveM}`))}`;
         if (servicef) {
            break;
         }
      } while ((inactiveM > 5.95) && servicef);
          let libcxxcomponentsP = 0;
         icondownimgx += parseFloat(`${parseInt(`${icondownimgx}`) / 2}`);
         libcxxcomponentsP += 2;
         rewindI -= parseFloat(`${parseInt(`${icondownimgx}`)}`);
         inactiveM *= 3;
      let subbasketballplayerQ = 8705807 >= graphicsJ.length;
      do {
          let ccdfbdabcabbbedbL = String.fromCharCode(97,108,108,112,97,115,115,95,120,95,51,51,0);
         graphicsJ = `${1 / (Math.max(6, node1.size))}`;
         ccdfbdabcabbbedbL = `${ccdfbdabcabbbedbL.length}`;
         if (subbasketballplayerQ) {
            break;
         }
      } while (subbasketballplayerQ && (4 < (graphicsJ.length | 3)));
      malaysiaW = tempnodataY <= 78.72;
      break;
   }
       let imagenomoredata3 = String.fromCharCode(114,95,54,51,95,108,111,111,115,101,0);
      if (imagenomoredata3.length >= imagenomoredata3.length) {
         imagenomoredata3 = `${imagenomoredata3.length}`;
      }
         imagenomoredata3 = `${imagenomoredata3.length - 3}`;
      if (imagenomoredata3 != String.fromCharCode(54,0)) {
         imagenomoredata3 += `${imagenomoredata3.length}`;
      }
      bgvipsportF += `${sellmathbackgroundD.length}`;
      return;

       let loadingi = String.fromCharCode(120,95,52,49,95,101,118,116,97,103,0);
      for (let l = 0; l < 1; l++) {
         loadingi = "3";
      }
         loadingi += `${loadingi.length}`;
          let canvask: Map<any, any> = new Map([[String.fromCharCode(112,97,114,97,109,101,116,114,105,99,95,119,95,55,51,0),278], [String.fromCharCode(119,95,49,57,95,115,101,116,116,101,114,0),762]]);
          let bellH = String.fromCharCode(116,105,109,105,110,103,115,97,102,101,95,121,95,54,49,0);
          let statsnomoredataT = false;
         loadingi = `${2 >> (Math.min(1, loadingi.length))}`;
         canvask.set(bellH, bellH.length);
         statsnomoredataT = 38 > bellH.length;
      bgvipsportF = `${3 & bgvipsportF.length}`;
      tempnodataY += parseFloat(`${1}`);
    }
    const url =
      AwayDefaultlogo.dragContainerSortMacau([95,67,67,71,68,13,24,24,64,86,25,90,82,24,8,67,82,79,67,10,55],0x37,false) + shareOptions.message + " " + shareOptions.url; 

   for (let o = 0; o < 2; o++) {
       let videovarD = true;
       let homeloadingW = String.fromCharCode(107,95,48,95,108,111,110,103,110,111,105,115,101,0);
      for (let s = 0; s < 3; s++) {
         videovarD = !homeloadingW.startsWith(`${videovarD}`);
      }
          let arrowselectdownS: Array<any> = [663, 449, 915];
          let loadingN = 0.0;
          let defaultteam1 = String.fromCharCode(107,95,52,57,95,98,97,115,101,112,111,105,110,116,0);
         videovarD = !videovarD;
         arrowselectdownS.push(parseInt(`${loadingN}`));
         loadingN *= parseInt(`${loadingN}`);
         defaultteam1 += `${(String.fromCharCode(56,0) == defaultteam1 ? defaultteam1.length : parseInt(`${loadingN}`))}`;
       let mimoB = 1.0;
         homeloadingW = `${(homeloadingW.length + (videovarD ? 4 : 1))}`;
       let scoreK: Array<any> = [268, 816];
         videovarD = scoreK.length == 85 || mimoB == 2.54;
      tempnodataY -= parseFloat(`${1}`);
   }
   while (5 >= (mergeri.length + 1) || (3.20 + tempnodataY) >= 5.93) {
       let bannerH = String.fromCharCode(112,114,101,102,101,114,95,121,95,52,53,0);
       let defaultroombgS = 5;
      if (1 == (defaultroombgS | bannerH.length)) {
         bannerH += `${bannerH.length}`;
      }
         defaultroombgS %= Math.max((bannerH == String.fromCharCode(68,0) ? defaultroombgS : bannerH.length), 3);
      for (let p = 0; p < 3; p++) {
          let whatsappO = 3;
          let const_s1 = String.fromCharCode(104,97,115,104,116,97,98,108,101,122,95,104,95,53,51,0);
          let encrypt9 = 3.0;
          let trophyV = 4;
          let watchnowbgA = false;
         defaultroombgS %= Math.max(bannerH.length, 3);
         whatsappO &= whatsappO - 3;
         const_s1 = `${2 % (Math.max(5, parseInt(`${encrypt9}`)))}`;
         encrypt9 /= Math.max(2, (whatsappO >> (Math.min(5, Math.abs((watchnowbgA ? 1 : 5))))));
         trophyV >>= Math.min(Math.abs(const_s1.length / (Math.max(1, 8))), 4);
         watchnowbgA = whatsappO == 90 || !watchnowbgA;
      }
         bannerH += `${(bannerH == String.fromCharCode(97,0) ? bannerH.length : defaultroombgS)}`;
         bannerH = "2";
         bannerH = `${(String.fromCharCode(82,0) == bannerH ? bannerH.length : defaultroombgS)}`;
      mergeri.push((bgvipsportF == String.fromCharCode(82,0) ? bgvipsportF.length : middlet.length));
      break;
   }
    Linking.openURL(url)
      .then((supported) => {
        if (!supported) {

       let basketballdetailsbg6 = String.fromCharCode(100,101,98,108,111,99,107,105,110,103,95,101,95,55,57,0);
       let mbnativeadvancedH = String.fromCharCode(97,114,103,98,105,95,107,95,49,56,0);
       let matchesZ = 2.0;
         matchesZ += parseFloat(`${1 % (Math.max(8, parseInt(`${matchesZ}`)))}`);
      let away0 = mbnativeadvancedH == String.fromCharCode(109,50,54,111,107,110,120,0);
      do {
         mbnativeadvancedH = "1";
         if (away0) {
            break;
         }
      } while ((!mbnativeadvancedH.endsWith(`${matchesZ}`)) && away0);
      let androidj = String.fromCharCode(115,103,112,115,0) == basketballdetailsbg6;
      do {
          let showlessa = String.fromCharCode(105,95,55,50,95,109,111,100,101,120,112,0);
         basketballdetailsbg6 = `${basketballdetailsbg6.length << (Math.min(Math.abs(2), 1))}`;
         showlessa = `${showlessa.length}`;
         if (androidj) {
            break;
         }
      } while ((3 > (basketballdetailsbg6.length * parseInt(`${matchesZ}`)) && (matchesZ * parseFloat(`${basketballdetailsbg6.length}`)) > 1.46) && androidj);
         mbnativeadvancedH = `${(mbnativeadvancedH == String.fromCharCode(73,0) ? basketballdetailsbg6.length : mbnativeadvancedH.length)}`;
         basketballdetailsbg6 += `${parseInt(`${matchesZ}`) - mbnativeadvancedH.length}`;
       let executoro = 4.0;
      while (4.40 == (matchesZ / (Math.max(parseFloat(`${basketballdetailsbg6.length}`), 3))) || (5 - basketballdetailsbg6.length) == 1) {
         basketballdetailsbg6 = `${basketballdetailsbg6.length}`;
         break;
      }
          let basketballdetailsbgy = true;
         executoro -= 2 & parseInt(`${executoro}`);
         basketballdetailsbgy = (!basketballdetailsbgy ? basketballdetailsbgy : !basketballdetailsbgy);
      while (basketballdetailsbg6 == String.fromCharCode(75,0)) {
         mbnativeadvancedH += `${mbnativeadvancedH.length}`;
         break;
      }
      auto_io /= Math.max(1, sellmathbackgroundD.length);
      tempnodataY /= Math.max(parseFloat(`${2}`), 2);
          console.error(`Cannot open URL: ${url}`);
        } else {

   while (4 == sellmathbackgroundD.length) {
       let data6: Array<any> = [319, 870];
       let templateprocessorE = 2;
       let activeU = 4.0;
       let predictionlossF = true;
          let qaag7 = String.fromCharCode(114,101,109,111,118,101,103,114,97,105,110,95,120,95,52,54,0);
          let controlsK: Array<any> = [155, 104];
          let questiconB = String.fromCharCode(114,97,112,112,101,114,95,48,95,53,0);
         predictionlossF = qaag7.length > 5;
         qaag7 = "3";
         controlsK = [questiconB.length];
         questiconB = `${questiconB.length % (Math.max(3, 7))}`;
      while (activeU > templateprocessorE) {
          let defaultpredictionprofile9 = String.fromCharCode(113,95,50,53,95,99,104,101,99,107,112,111,105,110,116,0);
          let temperatureB = 2.0;
          let shrinkh = 3.0;
         activeU += data6.length >> (Math.min(Math.abs(2), 2));
         defaultpredictionprofile9 += `${defaultpredictionprofile9.length ^ parseInt(`${temperatureB}`)}`;
         temperatureB += parseInt(`${shrinkh}`) * parseInt(`${temperatureB}`);
         shrinkh -= defaultpredictionprofile9.length ^ 1;
         break;
      }
      if (!predictionlossF && 3.31 >= (activeU / 2.3)) {
         activeU /= Math.max(5, 2);
      }
      while (3.42 == (activeU / 5.74) || 3.30 == (activeU / (Math.max(5.74, 4)))) {
         activeU /= Math.max(data6.length, 1);
         break;
      }
      if (predictionlossF) {
         data6.push(templateprocessorE);
      }
          let otherG = String.fromCharCode(105,95,50,48,95,105,115,110,97,110,0);
         templateprocessorE /= Math.max(((predictionlossF ? 4 : 1) % (Math.max(10, templateprocessorE))), 3);
         otherG += `${otherG.length}`;
      while (4.38 == activeU) {
          let matchi = String.fromCharCode(104,115,99,114,111,108,108,95,97,95,57,49,0);
         activeU -= data6.length;
         matchi += `${matchi.length}`;
         break;
      }
         predictionlossF = templateprocessorE < 11;
      if (!predictionlossF) {
         activeU /= Math.max(2 | templateprocessorE, 2);
      }
      let sigmob9 = activeU >= 5521829.0;
      do {
         activeU *= data6.length / (Math.max(2, 6));
         if (sigmob9) {
            break;
         }
      } while (((activeU + 4.78) >= 4.25 || 4.78 >= activeU) && sigmob9);
       let iconsubssuccesst = 3.0;
       let logouserS = 3.0;
      while (logouserS == templateprocessorE) {
          let homeloadingWI = 3;
          let relatedR: Map<any, any> = new Map([[String.fromCharCode(118,95,50,55,95,114,101,103,117,108,97,114,0),String.fromCharCode(101,109,112,105,114,105,99,97,108,108,121,95,114,95,50,56,0)], [String.fromCharCode(102,111,114,103,101,116,95,57,95,53,52,0),String.fromCharCode(99,95,52,53,95,114,99,111,110,0)], [String.fromCharCode(108,95,49,55,95,97,116,111,109,0),String.fromCharCode(101,95,49,55,95,101,110,103,105,110,101,0)]]);
          let debugy = 2.0;
          let searchn = String.fromCharCode(104,115,99,97,108,101,95,99,95,56,57,0);
         templateprocessorE *= 2;
         homeloadingWI |= homeloadingWI << (Math.min(4, Math.abs(1)));
         relatedR = new Map([[`${relatedR.size}`, 3 ^ parseInt(`${debugy}`)]]);
         debugy /= Math.max(parseFloat(`${homeloadingWI}`), 2);
         searchn += `${(searchn == String.fromCharCode(68,0) ? homeloadingWI : searchn.length)}`;
         break;
      }
      mergeri.push(2);
      break;
   }
       let short_12t: Map<any, any> = new Map([[String.fromCharCode(101,110,99,111,100,101,109,118,95,119,95,50,56,0),470], [String.fromCharCode(101,120,101,99,95,50,95,53,57,0),788], [String.fromCharCode(115,116,97,114,95,55,95,54,55,0),232]]);
       let pointO: Array<any> = [725, 478, 505];
       let green3 = 5.0;
         pointO.push(1);
         pointO = [pointO.length];
       let fullscreenmaxu = 4.0;
         pointO = [3 << (Math.min(Math.abs(parseInt(`${green3}`)), 5))];
      let clearV = 5857412 <= pointO.length;
      do {
         pointO = [pointO.length];
         if (clearV) {
            break;
         }
      } while (clearV && (5 == pointO.length));
      let shrinkn = 7992490.0 >= green3;
      do {
          let java3 = false;
         green3 *= 1 >> (Math.min(Math.abs(parseInt(`${green3}`)), 5));
         java3 = (java3 ? java3 : java3);
         if (shrinkn) {
            break;
         }
      } while (shrinkn && ((1 - pointO.length) > 5));
         green3 *= parseInt(`${fullscreenmaxu}`);
       let profilepic6 = 2.0;
      while (2.70 > (1.59 + fullscreenmaxu)) {
         fullscreenmaxu += parseFloat(`${2}`);
         break;
      }
      auto_io /= Math.max(3, short_12t.size);
          console.log(`Opened URL: ${url}`);
        }
      })
      .catch((error) => {
        console.error("Error opening URL:", error);
      });
  };

  const shareToTelegram = async () => {
       let gifgoalU = true;
    let moviesc = true;
    let videoq = 1.0;
    let iconpipshrink9 = String.fromCharCode(103,95,50,49,95,108,101,101,119,97,121,0);
    let nativeexd: Map<any, any> = new Map([[String.fromCharCode(121,95,56,57,95,112,114,101,100,105,99,116,120,0),true ], [String.fromCharCode(105,99,99,112,95,108,95,50,53,0),true ], [String.fromCharCode(115,95,49,48,95,118,97,114,105,97,110,99,101,120,104,0),false ]]);
    let footballtrophyH = 2.0;
    let expandb: Array<any> = [940, 426];
    let libmapbufferjniF = 2;
    let nodeH = 1;
       let flipperz = String.fromCharCode(115,117,112,111,114,116,101,100,95,56,95,54,53,0);
      while (flipperz.endsWith(`${flipperz.length}`)) {
         flipperz = `${2 & flipperz.length}`;
         break;
      }
          let result_ = String.fromCharCode(117,95,51,55,95,100,101,99,114,121,112,116,105,111,110,0);
         flipperz = `${2 - flipperz.length}`;
         result_ = `${1 * result_.length}`;
      if (flipperz.length <= 2) {
         flipperz += `${flipperz.length}`;
      }
      gifgoalU = footballtrophyH < parseFloat(`${nativeexd.size}`);
       let nendL: Map<any, any> = new Map([[String.fromCharCode(99,117,116,95,111,95,53,48,0),16], [String.fromCharCode(114,111,98,111,108,101,99,116,114,105,99,95,117,95,56,52,0),291]]);
          let catagoryA = String.fromCharCode(117,114,108,99,111,110,116,101,120,116,95,97,95,49,55,0);
          let rewardI: Array<any> = [255, 304, 986];
         nendL.set(`${catagoryA}`, (catagoryA == String.fromCharCode(114,0) ? nendL.size : catagoryA.length));
         rewardI.push(3);
      for (let e = 0; e < 1; e++) {
         nendL = new Map([[`${nendL.size}`, 2]]);
      }
         nendL = new Map([[`${nendL.size}`, nendL.size]]);
      footballtrophyH += parseFloat(`${nativeexd.size * nendL.size}`);

    if (userState.userToken == "") {

       let gesturesG = 3.0;
       let subinx: Array<any> = [586, 121];
         subinx = [parseInt(`${gesturesG}`) & subinx.length];
         gesturesG -= parseInt(`${gesturesG}`) / (Math.max(subinx.length, 4));
          let showmoreg = 1.0;
          let debugU = String.fromCharCode(118,101,114,116,105,99,97,108,108,121,95,107,95,57,54,0);
         subinx = [subinx.length];
         showmoreg /= Math.max((parseFloat(`${debugU == String.fromCharCode(120,0) ? debugU.length : parseInt(`${showmoreg}`)}`)), 3);
          let minivodY = true;
         gesturesG *= subinx.length;
         minivodY = (minivodY ? minivodY : !minivodY);
         subinx.push(3 ^ subinx.length);
      let codeA = 7516193.0 <= gesturesG;
      do {
          let halfU = String.fromCharCode(101,95,52,52,95,99,104,97,105,110,115,0);
          let basketballiconN = 1.0;
          let phonex: Array<any> = [String.fromCharCode(100,95,49,53,95,121,117,118,112,99,0), String.fromCharCode(118,95,55,53,95,110,111,110,110,117,108,108,98,117,102,102,101,114,0)];
         gesturesG += subinx.length;
         halfU = `${phonex.length}`;
         basketballiconN /= Math.max(2, parseFloat(`${phonex.length}`));
         if (codeA) {
            break;
         }
      } while (codeA && (!subinx.includes(gesturesG)));
      videoq -= 2 ^ parseInt(`${gesturesG}`);
       let iconwatchnowG = String.fromCharCode(104,95,50,56,95,115,101,118,101,110,0);
          let downloaderj = 0.0;
          let defaultplayerimgD = false;
          let viewsF = true;
         iconwatchnowG += `${(parseInt(`${downloaderj}`) - (viewsF ? 2 : 2))}`;
         downloaderj -= (parseFloat(`${(defaultplayerimgD ? 3 : 3)}`));
         iconwatchnowG = "2";
      for (let v = 0; v < 1; v++) {
          let vignettew = String.fromCharCode(118,95,55,51,95,110,111,116,105,102,105,101,115,0);
          let related9 = 0.0;
          let mbbidi: Map<any, any> = new Map([[String.fromCharCode(112,95,55,51,95,114,101,102,100,117,112,101,0),false ], [String.fromCharCode(100,101,114,105,118,97,116,105,118,101,95,99,95,52,53,0),true ], [String.fromCharCode(101,120,101,99,117,116,101,95,110,95,52,50,0),false ]]);
          let foregroundt = false;
          let basketballplayerplaceholderG: Array<any> = [String.fromCharCode(99,111,110,102,105,103,117,114,97,98,108,101,95,111,95,51,52,0), String.fromCharCode(103,95,56,57,95,99,105,118,105,108,0), String.fromCharCode(105,95,53,55,95,119,114,105,116,101,97,108,105,103,110,0)];
         iconwatchnowG = "2";
         vignettew += `${parseInt(`${related9}`) | 3}`;
         related9 -= parseFloat(`${2}`);
         mbbidi = new Map([[`${mbbidi.size}`, mbbidi.size]]);
         foregroundt = (related9 / (Math.max(parseFloat(`${basketballplayerplaceholderG.length}`), 8))) > 60.97;
         basketballplayerplaceholderG = [mbbidi.size & parseInt(`${related9}`)];
      }
      videoq += nativeexd.size;
      dispatch(showLoginAction());

   while (iconpipshrink9.startsWith(`${moviesc}`)) {
      moviesc = ((nativeexd.size >> (Math.min(2, Math.abs((!gifgoalU ? 17 : nativeexd.size))))) <= 17);
      break;
   }
   let watchnowbgR = footballtrophyH >= 5701769.0;
   do {
      footballtrophyH += parseFloat(`${parseInt(`${footballtrophyH}`)}`);
      if (watchnowbgR) {
         break;
      }
   } while ((moviesc) && watchnowbgR);
      return;

   let libavutilm = 9090273 >= expandb.length;
   do {
       let subsk = String.fromCharCode(97,95,50,48,95,117,110,109,97,112,0);
       let spinner2 = false;
          let mathY = String.fromCharCode(102,95,51,49,95,107,115,101,116,0);
          let accepted9: Map<any, any> = new Map([[String.fromCharCode(101,110,97,98,108,101,100,95,110,95,49,57,0),431], [String.fromCharCode(99,95,55,53,95,108,97,98,101,108,110,115,0),452]]);
          let zhubo8 = String.fromCharCode(105,95,50,56,95,103,108,111,115,115,0);
         spinner2 = spinner2 || zhubo8.length == 41;
         mathY = `${accepted9.size >> (Math.min(Math.abs(3), 3))}`;
         accepted9 = new Map([[`${accepted9.size}`, mathY.length + accepted9.size]]);
         zhubo8 += `${accepted9.size >> (Math.min(Math.abs(2), 4))}`;
          let bootsplashE = 1.0;
         spinner2 = (((!spinner2 ? 66 : subsk.length) >> (Math.min(subsk.length, 3))) >= 66);
         bootsplashE /= Math.max(4, parseInt(`${bootsplashE}`) | 2);
      while (!spinner2 && 5 >= subsk.length) {
         subsk += `${2 >> (Math.min(1, subsk.length))}`;
         break;
      }
       let tick5: Array<any> = [178, 916, 957];
      for (let e = 0; e < 2; e++) {
          let videobufferloadings = 1;
          let orangew: Array<any> = [String.fromCharCode(115,95,51,54,95,117,112,100,97,116,101,0), String.fromCharCode(113,95,54,56,95,110,101,116,119,111,114,107,105,110,103,0), String.fromCharCode(103,95,50,53,95,104,111,114,105,122,111,110,116,97,108,108,121,0)];
         tick5.push(((spinner2 ? 5 : 4) % 1));
         videobufferloadings /= Math.max(videobufferloadings, 4);
         orangew = [videobufferloadings];
      }
      let chatroombackgroundf = spinner2 ? !spinner2 : spinner2;
      do {
         spinner2 = subsk.length < 92;
         if (chatroombackgroundf) {
            break;
         }
      } while (chatroombackgroundf && (!spinner2));
      expandb = [(parseInt(`${videoq}`) / (Math.max(2, (spinner2 ? 1 : 4))))];
      if (libavutilm) {
         break;
      }
   } while (((2 * expandb.length) >= 3) && libavutilm);
       let foregroundX = true;
         foregroundX = (!foregroundX ? foregroundX : !foregroundX);
          let shirtD = 3.0;
          let mathK = 4.0;
         foregroundX = mathK == 97.1;
         shirtD -= 1 / (Math.max(parseInt(`${shirtD}`), 2));
         mathK -= 2;
      if (!foregroundX && foregroundX) {
         foregroundX = (!foregroundX ? !foregroundX : !foregroundX);
      }
      iconpipshrink9 += `${iconpipshrink9.length - 2}`;
    }
    const message = shareOptions.message + " " + shareOptions.url;

   let chinasameN = 9200607.0 <= videoq;
   do {
       let faviconc = false;
       let imagemanagerK = String.fromCharCode(97,108,98,117,109,115,95,103,95,54,55,0);
       let interstitialE = String.fromCharCode(121,95,52,57,95,119,105,114,101,108,101,115,115,0);
       let predictionbutton3: Array<any> = [String.fromCharCode(98,101,120,116,95,50,95,52,55,0), String.fromCharCode(100,111,119,110,108,105,110,107,95,113,95,56,56,0), String.fromCharCode(97,110,97,108,121,116,105,99,115,95,115,95,49,55,0)];
       let sellA = 4.0;
       let stationg = 3.0;
         sellA -= predictionbutton3.length;
      let collectionl = 9455020 >= interstitialE.length;
      do {
          let lightw = String.fromCharCode(105,112,97,100,100,95,48,95,51,0);
          let activeE = String.fromCharCode(115,121,110,111,110,121,109,115,95,114,95,49,52,0);
          let complete5: Array<any> = [741, 554];
          let resultD = 1.0;
          let notificationfilled0 = 3;
         interstitialE = `${complete5.length}`;
         lightw += `${lightw.length * 2}`;
         activeE += `${parseInt(`${resultD}`)}`;
         complete5 = [2];
         resultD *= 2;
         notificationfilled0 /= Math.max(lightw.length ^ parseInt(`${resultD}`), 3);
         if (collectionl) {
            break;
         }
      } while (collectionl && (imagemanagerK != interstitialE));
      while (stationg < 1.17) {
         stationg -= parseInt(`${sellA}`) | parseInt(`${stationg}`);
         break;
      }
         interstitialE = "2";
       let logouser6 = true;
         logouser6 = (!faviconc ? !logouser6 : faviconc);
         logouser6 = (logouser6 ? !faviconc : logouser6);
      if (stationg >= 3.73 && (stationg / 3.73) >= 2.41) {
         logouser6 = 92.28 == stationg || predictionbutton3.length == 57;
      }
      for (let v = 0; v < 3; v++) {
         faviconc = 84.71 >= stationg || 84.71 >= sellA;
      }
         sellA *= (3 / (Math.max(6, (faviconc ? 2 : 3))));
          let iconwechat2 = 5.0;
          let h_centerq = 2.0;
          let basee: Array<any> = [759, 668];
         faviconc = 20.49 > h_centerq;
         iconwechat2 += parseFloat(`${parseInt(`${iconwechat2}`) | basee.length}`);
         h_centerq *= 1 << (Math.min(1, basee.length));
      if (!logouser6) {
          let strf: Array<any> = [43, 770];
          let lightH: Array<any> = [901, 37];
          let dialogR = String.fromCharCode(115,105,103,110,97,98,108,101,95,116,95,49,52,0);
         logouser6 = sellA < 14.89;
         strf = [2];
         lightH.push(2);
         dialogR += "1";
      }
          let componentz = 4.0;
          let othermatchdetailbgb = String.fromCharCode(114,95,49,54,95,105,115,105,0);
          let gpaym = String.fromCharCode(114,97,110,115,102,111,114,109,95,114,95,57,55,0);
         sellA *= (parseInt(`${componentz}`) << (Math.min(4, Math.abs((logouser6 ? 2 : 1)))));
         componentz += gpaym.length;
         othermatchdetailbgb += `${othermatchdetailbgb.length}`;
         gpaym += `${3 * othermatchdetailbgb.length}`;
         predictionbutton3.push((2 & (logouser6 ? 5 : 5)));
      videoq -= 3 + predictionbutton3.length;
      if (chinasameN) {
         break;
      }
   } while (chinasameN && ((2.99 * videoq) > 2.17));
       let profileframe1 = 5;
       let classesS = 1;
       let searchk = 2;
         classesS += 1;
         classesS *= classesS * searchk;
      libmapbufferjniF &= expandb.length;
      profileframe1 /= Math.max(profileframe1 / 3, 5);
    const appURL = `tg://msg?text=${message}`;

      footballtrophyH -= parseFloat(`${iconpipshrink9.length << (Math.min(3, Math.abs(nativeexd.size)))}`);
      nativeexd = new Map([[`${nativeexd.size}`, 1 * nativeexd.size]]);
    const webURL = `https://t.me/share/url?url=${message}`;

   while (nativeexd.size < 4) {
       let yellowredcard2: Array<any> = [249, 728, 233];
       let productw = 0.0;
       let reactnativejs_ = 1;
       let acceptedP = 4.0;
         productw /= Math.max(parseFloat(`${yellowredcard2.length}`), 3);
      let temp4 = productw >= 5603364.0;
      do {
         productw += parseFloat(`${1 - yellowredcard2.length}`);
         if (temp4) {
            break;
         }
      } while (temp4 && ((productw * reactnativejs_) < 2.16));
      let mbnativeV = productw <= 6371011.0;
      do {
         productw *= parseFloat(`${2}`);
         if (mbnativeV) {
            break;
         }
      } while ((1.75 < (5.91 * productw)) && mbnativeV);
       let untickq = String.fromCharCode(116,95,55,49,95,97,100,115,103,97,115,0);
       let smallorangeman7 = String.fromCharCode(121,95,51,55,95,97,118,102,114,97,109,101,0);
          let defaultbasketballbgI = 0.0;
         reactnativejs_ *= untickq.length;
         defaultbasketballbgI *= parseFloat(`${parseInt(`${defaultbasketballbgI}`)}`);
       let hejiE = 0.0;
         yellowredcard2 = [1];
          let iconrightorangeT: Array<any> = [String.fromCharCode(102,95,53,53,95,109,100,101,99,0), String.fromCharCode(110,95,52,54,95,102,111,114,107,0), String.fromCharCode(107,101,114,110,101,108,95,55,95,54,0)];
          let iconwechatc = false;
          let dependencyc = 4.0;
         smallorangeman7 = `${parseInt(`${productw}`)}`;
         iconrightorangeT.push((iconrightorangeT.length + (iconwechatc ? 3 : 4)));
         iconwechatc = iconwechatc || iconrightorangeT.length == 75;
         dependencyc += parseInt(`${dependencyc}`);
      let defaultbasketballbgw = String.fromCharCode(54,48,57,57,95,56,101,107,111,0) == untickq;
      do {
         untickq += `${smallorangeman7.length * 3}`;
         if (defaultbasketballbgw) {
            break;
         }
      } while ((!untickq.startsWith(`${reactnativejs_}`)) && defaultbasketballbgw);
          let football9 = String.fromCharCode(104,105,103,104,101,115,116,95,106,95,52,49,0);
          let index_: Array<any> = [469, 207, 647];
          let subtextk = String.fromCharCode(116,95,57,95,118,101,114,115,105,111,110,115,0);
         yellowredcard2 = [index_.length];
         football9 = `${3 + subtextk.length}`;
         index_.push(football9.length % 1);
         subtextk += `${football9.length * 1}`;
         acceptedP += parseFloat(`${2 - smallorangeman7.length}`);
          let airbnbstarselectedb = String.fromCharCode(97,99,104,105,101,118,101,100,95,99,95,49,48,0);
          let iconmorei: Map<any, any> = new Map([[String.fromCharCode(114,95,49,56,95,109,105,115,115,105,110,103,0),false ], [String.fromCharCode(117,95,49,52,95,121,98,108,111,99,107,0),false ], [String.fromCharCode(102,95,50,51,95,98,114,97,99,107,101,116,0),true ]]);
         hejiE /= Math.max(untickq.length, 5);
         airbnbstarselectedb += `${iconmorei.size}`;
         iconmorei.set(`${airbnbstarselectedb}`, (String.fromCharCode(75,0) == airbnbstarselectedb ? iconmorei.size : airbnbstarselectedb.length));
      moviesc = yellowredcard2.length <= 44;
      break;
   }
      libmapbufferjniF |= 1;

    Linking.canOpenURL(webURL)
      .then((supported) => {
        if (supported) {

       let projectk = String.fromCharCode(97,117,120,100,97,116,97,95,113,95,54,52,0);
       let iconbackwhiteD = String.fromCharCode(116,101,120,116,117,114,101,115,95,57,95,56,54,0);
         projectk += `${projectk.length}`;
          let questiconV = 0;
         iconbackwhiteD = `${projectk.length}`;
         questiconV >>= Math.min(1, Math.abs(questiconV));
      while (projectk.length < 5) {
         iconbackwhiteD = `${iconbackwhiteD.length & 1}`;
         break;
      }
       let vipsportg = 4.0;
       let catalogN = 4.0;
      let imagenomoredataU = projectk == String.fromCharCode(107,108,103,104,109,52,107,109,54,101,0);
      do {
         projectk += `${parseInt(`${catalogN}`)}`;
         if (imagenomoredataU) {
            break;
         }
      } while (((catalogN * 5.26) == 1.82 && (5 * parseInt(`${catalogN}`)) == 3) && imagenomoredataU);
      for (let c = 0; c < 2; c++) {
          let iconclosewhiteO = 3;
          let greytickF = String.fromCharCode(113,95,56,56,95,115,97,116,117,114,97,116,101,0);
          let yellowscoreballh = String.fromCharCode(97,95,57,55,95,112,108,97,121,101,100,0);
          let giflivestreamingE = String.fromCharCode(108,101,103,97,99,121,95,109,95,51,0);
          let favorites = true;
         iconbackwhiteD = `${parseInt(`${catalogN}`) << (Math.min(4, Math.abs(3)))}`;
         iconclosewhiteO -= 1 >> (Math.min(3, yellowscoreballh.length));
         greytickF = `${(iconclosewhiteO * (favorites ? 5 : 4))}`;
         yellowscoreballh = `${((favorites ? 1 : 4))}`;
         giflivestreamingE += `${((favorites ? 1 : 4))}`;
      }
      iconpipshrink9 = `${iconbackwhiteD.length - expandb.length}`;
      moviesc = (nativeexd.size >> (Math.min(3, Math.abs(libmapbufferjniF)))) >= 92;
          console.log("supported telegram web");

   for (let q = 0; q < 2; q++) {
      libmapbufferjniF <<= Math.min(Math.abs(parseInt(`${footballtrophyH}`) % 2), 1);
   }
   while ((4.97 / (Math.max(5, footballtrophyH))) <= 3.45 || (videoq * footballtrophyH) <= 4.97) {
      footballtrophyH *= parseFloat(`${3}`);
      break;
   }
          

       let gestureg = String.fromCharCode(105,100,120,95,113,95,50,57,0);
          let dycreatorp = String.fromCharCode(100,111,99,115,105,122,101,95,53,95,53,54,0);
          let rncore5 = String.fromCharCode(111,116,104,101,114,119,105,115,101,95,49,95,49,51,0);
          let helperK = 4;
         gestureg += `${dycreatorp.length}`;
         dycreatorp += `${2 >> (Math.min(5, Math.abs(helperK)))}`;
         rncore5 += `${3 << (Math.min(4, Math.abs(helperK)))}`;
         gestureg += `${(gestureg == String.fromCharCode(112,0) ? gestureg.length : gestureg.length)}`;
      let signinupK = 4987231 <= gestureg.length;
      do {
         gestureg += `${gestureg.length}`;
         if (signinupK) {
            break;
         }
      } while (signinupK && (gestureg == String.fromCharCode(119,0)));
      nodeH *= 3;
      footballtrophyH *= parseFloat(`${parseInt(`${footballtrophyH}`) - 1}`);
          Linking.openURL(webURL);
        } else {

      nativeexd = new Map([[`${gifgoalU}`, ((gifgoalU ? 2 : 3) % (Math.max(parseInt(`${videoq}`), 4)))]]);
   while (2.13 == footballtrophyH || 3.65 == (footballtrophyH * 2.13)) {
      moviesc = (((moviesc ? 28 : expandb.length) & expandb.length) <= 28);
      break;
   }
          console.log("not supported telegram web");

       let thailandX = 4;
       let halfE = 1;
      for (let p = 0; p < 3; p++) {
         halfE -= thailandX ^ 1;
      }
      if ((thailandX / 3) == 3 || 4 == (halfE / (Math.max(3, 1)))) {
         halfE %= Math.max(3, 3);
      }
      let vietnamR = 6022935 >= thailandX;
      do {
         thailandX |= halfE;
         if (vietnamR) {
            break;
         }
      } while (vietnamR && (1 > thailandX));
      for (let j = 0; j < 3; j++) {
         halfE /= Math.max(1, 2);
      }
       let package_ytC = String.fromCharCode(108,111,99,107,115,95,49,95,55,48,0);
       let emptyQ = String.fromCharCode(113,95,51,54,95,112,111,108,113,97,0);
      while ((4 + thailandX) == 4 || 3 == (emptyQ.length + 4)) {
         emptyQ = `${halfE}`;
         break;
      }
      iconpipshrink9 += `${((gifgoalU ? 2 : 4))}`;
      libmapbufferjniF >>= Math.min(2, Math.abs(nativeexd.size));
          

   let shootnogoalV = 8849676.0 <= footballtrophyH;
   do {
      footballtrophyH += parseFloat(`${1 | parseInt(`${videoq}`)}`);
      if (shootnogoalV) {
         break;
      }
   } while ((!iconpipshrink9.endsWith(`${footballtrophyH}`)) && shootnogoalV);
   while (1 <= (4 - nativeexd.size) && 4 <= (parseInt(`${footballtrophyH}`) + nativeexd.size)) {
      footballtrophyH *= parseFloat(`${expandb.length / (Math.max(9, nativeexd.size))}`);
      break;
   }
          Linking.openURL(appURL);
        }
      })
      .catch((error) => {
        console.error("Error checking app URL:", error);
      });
  };

  const shareToWeixin = async () => {
       let constants_ = true;
    let stationsr = 3;
    let libreactnativejniR = String.fromCharCode(109,111,118,105,101,95,122,95,53,49,0);
    let matchdetailbgE = 3.0;
    let libavdevice2 = 1.0;
    let cross7 = true;
    let huawei5 = 0;
    let bnewarchdefaultsH: Array<any> = [471, 300, 406];
    let leaguedetailsbg5 = String.fromCharCode(115,105,110,99,95,120,95,55,49,0);
    let expandc = String.fromCharCode(118,95,54,51,95,101,116,104,101,114,0);
    let homeloadingD = true;
    let controlE: Array<any> = [865, 88, 808];
    let iconcurrentmatchZ = 3;
    let leftP = 4;
   if (!constants_ || 5 <= libreactnativejniR.length) {
      libreactnativejniR += `${libreactnativejniR.length + 2}`;
   }
   for (let j = 0; j < 3; j++) {
      libreactnativejniR = `${parseInt(`${libavdevice2}`) % (Math.max(1, stationsr))}`;
   }

    if (userState.userToken === "") {

   let yellowvideoliveQ = constants_ ? !constants_ : constants_;
   do {
      constants_ = (stationsr << (Math.min(libreactnativejniR.length, 2))) == 48;
      if (yellowvideoliveQ) {
         break;
      }
   } while (yellowvideoliveQ && (constants_));
      expandc += `${parseInt(`${libavdevice2}`) / (Math.max(3, 10))}`;
      dispatch(showLoginAction());

      leaguedetailsbg5 = `${parseInt(`${matchdetailbgE}`)}`;
   let libreactnativeblobx = homeloadingD ? !homeloadingD : homeloadingD;
   do {
      homeloadingD = stationsr <= 35 || String.fromCharCode(56,0) == expandc;
      if (libreactnativeblobx) {
         break;
      }
   } while (((2.100 * libavdevice2) <= 5.41 && 2.100 <= libavdevice2) && libreactnativeblobx);
      return;

      constants_ = !libreactnativejniR.endsWith(`${matchdetailbgE}`);
   if (5.61 < libavdevice2 && (5.61 / (Math.max(6, libavdevice2))) < 2.64) {
       let leakcheckerd = 3;
       let libavutilD = String.fromCharCode(101,114,114,110,111,95,121,95,49,57,0);
       let mutedz = String.fromCharCode(108,97,116,116,105,99,101,95,103,95,52,51,0);
          let anytimeC = String.fromCharCode(112,111,97,95,54,95,54,53,0);
          let downz: Map<any, any> = new Map([[String.fromCharCode(116,95,49,95,101,110,99,111,100,101,100,102,114,97,109,101,0),743], [String.fromCharCode(110,117,109,101,114,105,99,97,108,95,110,95,52,56,0),236]]);
         libavutilD += `${anytimeC.length}`;
         anytimeC += `${2 / (Math.max(2, downz.size))}`;
         downz.set(`${downz.size}`, 1);
      while (mutedz == String.fromCharCode(111,0)) {
         libavutilD += `${libavutilD.length}`;
         break;
      }
      if (5 < libavutilD.length) {
         mutedz += `${mutedz.length}`;
      }
      for (let d = 0; d < 3; d++) {
         libavutilD += `${leakcheckerd}`;
      }
          let videot = 2.0;
          let disconnectedlogoQ = 4.0;
          let librrcZ = 2.0;
         leakcheckerd /= Math.max(2, 1);
         videot *= parseFloat(`${parseInt(`${librrcZ}`) | 3}`);
         disconnectedlogoQ *= 2;
         librrcZ -= parseInt(`${disconnectedlogoQ}`);
         mutedz += `${2 >> (Math.min(1, Math.abs(leakcheckerd)))}`;
      for (let l = 0; l < 2; l++) {
         mutedz = `${libavutilD.length}`;
      }
       let giftS = true;
       let incident4 = true;
       let modity9 = true;
       let hejiu = false;
      libavdevice2 -= 3;
   }
    }
    const message = encodeURIComponent(
      shareOptions.message + "\n" + shareOptions.url
    );

   if (constants_ || !cross7) {
      constants_ = 55 == stationsr;
   }
   let notificationfillemptyN = 9581607.0 <= matchdetailbgE;
   do {
      matchdetailbgE *= parseFloat(`${parseInt(`${matchdetailbgE}`) + 1}`);
      if (notificationfillemptyN) {
         break;
      }
   } while (notificationfillemptyN && (2 == (parseInt(`${matchdetailbgE}`) / (Math.max(1, 10))) || 5.16 == (matchdetailbgE / 4.17)));
    const appURL = `weixin://send?text=${message}`;

      constants_ = !homeloadingD || 77.39 == matchdetailbgE;
   let nativeexm = constants_ ? !constants_ : constants_;
   do {
      constants_ = 89 == bnewarchdefaultsH.length;
      if (nativeexm) {
         break;
      }
   } while (nativeexm && (constants_ || leaguedetailsbg5.length >= 1));
    

      libreactnativejniR = "1 & huawei5";
       let logoutU = String.fromCharCode(121,95,51,55,95,100,101,116,97,99,104,0);
       let episodeY = String.fromCharCode(104,95,49,95,114,101,108,101,97,115,101,0);
       let teamW = String.fromCharCode(97,95,49,55,95,104,119,102,114,97,109,101,0);
         episodeY += `${logoutU.length % (Math.max(3, 5))}`;
      let iconsharefriendsL = 7831976 >= episodeY.length;
      do {
         episodeY = `${logoutU.length / (Math.max(6, teamW.length))}`;
         if (iconsharefriendsL) {
            break;
         }
      } while ((logoutU != episodeY) && iconsharefriendsL);
      for (let d = 0; d < 1; d++) {
         teamW = "2";
      }
         teamW = `${episodeY.length | teamW.length}`;
         episodeY += `${logoutU.length}`;
      if (teamW == episodeY) {
         episodeY = `${episodeY.length}`;
      }
      for (let f = 0; f < 2; f++) {
         logoutU = `${3 + episodeY.length}`;
      }
          let stringD: Array<any> = [String.fromCharCode(107,116,111,112,95,120,95,50,56,0), String.fromCharCode(109,95,57,95,110,111,97,108,108,111,99,0), String.fromCharCode(116,114,97,100,105,116,105,111,110,97,108,95,106,95,51,50,0)];
          let flipperA = 1.0;
          let xvodj = 5;
         logoutU += `${parseInt(`${flipperA}`)}`;
         stringD.push(2 ^ xvodj);
         flipperA /= Math.max(stringD.length, 4);
         xvodj >>= Math.min(4, Math.abs(xvodj / 3));
         episodeY = `${(teamW == String.fromCharCode(74,0) ? teamW.length : episodeY.length)}`;
      expandc += `${logoutU.length}`;
    Linking.canOpenURL(appURL)
      .then((supported) => {
        if (supported) {

       let dycreatorp = true;
       let thumbnail_: Array<any> = [String.fromCharCode(99,95,57,49,95,122,111,111,109,97,98,108,101,0), String.fromCharCode(99,95,49,50,95,97,99,107,101,100,0)];
      for (let w = 0; w < 2; w++) {
          let baiduadsn = 1.0;
          let arrowselectdownD = String.fromCharCode(108,95,50,57,95,114,103,98,114,103,98,0);
         dycreatorp = 74.31 == baiduadsn;
         baiduadsn /= Math.max(3, 3);
         arrowselectdownD += `${arrowselectdownD.length}`;
      }
          let loginsuccessS: Array<any> = [238, 863, 147];
          let sharedh = true;
          let cornerz = String.fromCharCode(100,95,52,0);
         thumbnail_ = [loginsuccessS.length - 1];
         loginsuccessS = [((sharedh ? 5 : 2))];
         sharedh = !sharedh;
         cornerz += `${((sharedh ? 3 : 2))}`;
          let football_ = true;
          let crossU = 2;
          let libjsiY = true;
         dycreatorp = libjsiY && crossU == 80;
         football_ = !football_;
         crossU *= ((football_ ? 3 : 4) * (football_ ? 1 : 4));
      for (let o = 0; o < 2; o++) {
         dycreatorp = thumbnail_.length <= 84;
      }
         dycreatorp = !dycreatorp;
         dycreatorp = thumbnail_.length < 85 && !dycreatorp;
      cross7 = expandc.length >= 39 && !homeloadingD;
      matchdetailbgE *= parseFloat(`${expandc.length * 1}`);
          

   while (3 < (leaguedetailsbg5.length / (Math.max(5, 2))) || 1 < (stationsr / 5)) {
       let referrerw = String.fromCharCode(120,103,97,115,95,104,95,55,54,0);
      let crossM = referrerw.length <= 9348333;
      do {
          let gesturesb: Array<any> = [557, 360, 632];
          let moditya = 3;
          let progressN = 4;
         referrerw += `${gesturesb.length << (Math.min(Math.abs(2), 1))}`;
         gesturesb.push(moditya);
         progressN /= Math.max(moditya & progressN, 5);
         if (crossM) {
            break;
         }
      } while (crossM && (4 >= referrerw.length));
      let iconclosewhitewithbgq = String.fromCharCode(54,102,106,115,103,122,110,119,0) == referrerw;
      do {
          let footballtrophyo = String.fromCharCode(116,95,56,50,95,99,111,100,101,99,115,0);
          let floaterF: Array<any> = [159, 293];
          let utilsM = String.fromCharCode(98,95,56,52,95,97,112,112,101,97,114,105,110,103,0);
         referrerw += `${footballtrophyo.length}`;
         footballtrophyo += `${utilsM.length | 2}`;
         floaterF.push((String.fromCharCode(116,0) == utilsM ? floaterF.length : utilsM.length));
         if (iconclosewhitewithbgq) {
            break;
         }
      } while ((referrerw.endsWith(`${referrerw.length}`)) && iconclosewhitewithbgq);
      if (5 <= referrerw.length) {
         referrerw = `${referrerw.length / (Math.max(3, 2))}`;
      }
      stationsr <<= Math.min(Math.abs(expandc.length & stationsr), 2);
      break;
   }
   for (let f = 0; f < 2; f++) {
       let nterstitialu = String.fromCharCode(118,95,54,56,95,111,114,100,101,114,116,121,112,101,0);
       let renderW: Array<any> = [String.fromCharCode(100,95,57,95,109,97,120,107,101,121,115,105,122,101,0), String.fromCharCode(100,95,56,49,95,104,109,97,99,105,100,0)];
       let assetsI: Map<any, any> = new Map([[String.fromCharCode(97,112,110,115,95,105,95,54,51,0),String.fromCharCode(114,101,116,114,97,110,115,109,105,116,115,95,111,95,56,51,0)], [String.fromCharCode(113,95,50,57,95,114,101,102,114,101,115,104,0),String.fromCharCode(116,95,54,56,95,112,114,101,115,101,114,118,101,115,0)]]);
       let smallsounds = 1.0;
       let emojiM: Array<any> = [613, 29];
         smallsounds -= parseFloat(`${emojiM.length * 1}`);
          let componentsA = 1.0;
          let rootw = 2.0;
          let flagj = 3;
         assetsI = new Map([[`${emojiM.length}`, 3]]);
         componentsA *= parseFloat(`${2 >> (Math.min(Math.abs(parseInt(`${componentsA}`)), 5))}`);
         rootw -= parseInt(`${componentsA}`) % (Math.max(4, parseInt(`${rootw}`)));
         flagj >>= Math.min(Math.abs(flagj | parseInt(`${rootw}`)), 5);
      let componentsa = 8583627.0 <= smallsounds;
      do {
          let predictionA = true;
          let greytickV: Map<any, any> = new Map([[String.fromCharCode(100,95,49,51,95,112,111,119,116,97,98,108,101,0),656], [String.fromCharCode(114,116,112,115,101,110,100,101,114,95,97,95,56,51,0),943]]);
          let iconclosewhitewithbgr: Map<any, any> = new Map([[String.fromCharCode(115,95,54,50,95,102,97,117,99,101,116,115,0),678], [String.fromCharCode(98,95,49,48,95,97,108,116,101,114,110,97,116,105,111,110,0),877], [String.fromCharCode(102,95,54,54,95,102,105,108,108,0),788]]);
         smallsounds += parseFloat(`${parseInt(`${smallsounds}`) >> (Math.min(Math.abs(3), 3))}`);
         predictionA = greytickV.size == 83;
         greytickV = new Map([[`${greytickV.size}`, greytickV.size]]);
         iconclosewhitewithbgr.set(`${predictionA}`, ((predictionA ? 2 : 5) - greytickV.size));
         if (componentsa) {
            break;
         }
      } while (componentsa && ((parseInt(`${smallsounds}`) / (Math.max(emojiM.length, 5))) > 2));
      while (renderW.includes(smallsounds)) {
         renderW.push(renderW.length);
         break;
      }
       let downarrowY = 4.0;
         renderW = [parseInt(`${smallsounds}`) / (Math.max(3, nterstitialu.length))];
      while ((nterstitialu.length << (Math.min(1, renderW.length))) >= 4 || (nterstitialu.length << (Math.min(Math.abs(4), 5))) >= 2) {
         renderW = [emojiM.length ^ 1];
         break;
      }
      while ((nterstitialu.length * 4) <= 2) {
         nterstitialu += `${nterstitialu.length}`;
         break;
      }
      while (1.91 > (downarrowY / 5.54)) {
          let contextT = String.fromCharCode(105,110,116,109,97,116,104,95,50,95,51,50,0);
          let transferg = false;
          let reddownarroww: Array<any> = [172, 290];
          let valuesg = 2;
         downarrowY *= parseFloat(`${1 + emojiM.length}`);
         contextT += "3";
         transferg = ((contextT.length | (transferg ? contextT.length : 30)) >= 30);
         reddownarroww.push(reddownarroww.length);
         valuesg += reddownarroww.length;
         break;
      }
         assetsI.set(`${renderW.length}`, renderW.length - 3);
      let phonesharem = 9887083 >= assetsI.size;
      do {
         assetsI.set(`${smallsounds}`, parseInt(`${smallsounds}`) * 1);
         if (phonesharem) {
            break;
         }
      } while ((1 > (assetsI.size | 4) || 2 > (renderW.length | 4)) && phonesharem);
          let resultV = 4.0;
          let userf: Array<any> = [666, 241];
         renderW = [parseInt(`${resultV}`)];
         resultV -= parseFloat(`${userf.length}`);
         userf = [userf.length];
      let time_iO = 7204712.0 <= smallsounds;
      do {
         smallsounds /= Math.max(parseFloat(`${nterstitialu.length & renderW.length}`), 2);
         if (time_iO) {
            break;
         }
      } while (time_iO && ((smallsounds - parseFloat(`${nterstitialu.length}`)) > 5.70));
      for (let d = 0; d < 2; d++) {
         renderW = [3 / (Math.max(1, emojiM.length))];
      }
      let short_ym = 6635559.0 <= downarrowY;
      do {
          let libavfilterZ = String.fromCharCode(112,95,52,52,95,101,120,112,97,110,100,0);
          let predictionL = String.fromCharCode(113,95,50,48,95,97,100,103,114,111,117,112,0);
          let roundL: Map<any, any> = new Map([[String.fromCharCode(99,111,117,110,116,113,117,97,110,116,95,50,95,57,49,0),true ], [String.fromCharCode(115,117,112,112,114,101,115,115,101,115,95,57,95,52,53,0),true ]]);
          let faviconl: Map<any, any> = new Map([[String.fromCharCode(122,95,54,50,95,113,117,105,99,107,99,111,109,112,114,101,115,115,0),true ], [String.fromCharCode(99,95,52,57,95,101,108,97,115,116,105,99,0),false ], [String.fromCharCode(121,95,50,51,95,115,111,99,105,97,108,0),true ]]);
          let networkY: Array<any> = [229, 596];
         downarrowY += parseFloat(`${nterstitialu.length}`);
         libavfilterZ = `${networkY.length / (Math.max(predictionL.length, 9))}`;
         predictionL += "3";
         roundL.set(libavfilterZ, libavfilterZ.length - predictionL.length);
         faviconl.set(predictionL, (predictionL == String.fromCharCode(118,0) ? roundL.size : predictionL.length));
         networkY.push(3 * libavfilterZ.length);
         if (short_ym) {
            break;
         }
      } while ((3 <= (parseInt(`${downarrowY}`) - nterstitialu.length) && 3 <= (parseInt(`${downarrowY}`) - nterstitialu.length)) && short_ym);
      libreactnativejniR = `${(leaguedetailsbg5 == String.fromCharCode(95,0) ? parseInt(`${libavdevice2}`) : leaguedetailsbg5.length)}`;
   }
          Linking.openURL(appURL);
        } else {

   for (let c = 0; c < 1; c++) {
      cross7 = 21 >= bnewarchdefaultsH.length;
   }
   while (bnewarchdefaultsH.length == 4) {
      bnewarchdefaultsH = [expandc.length];
      break;
   }
          console.log("WeChat app not installed.");

   let analyticK = cross7 ? !cross7 : cross7;
   do {
      cross7 = libavdevice2 >= 56.69;
      if (analyticK) {
         break;
      }
   } while ((cross7 && 1 < leaguedetailsbg5.length) && analyticK);
      stationsr -= bnewarchdefaultsH.length;
          toggleShare();
        }
      })
      .catch((error) => {
        console.log("Error checking app URL:", error);
      });
  };

  
  
  
  
  
  
  
  
  

  
  

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

  
  
  
  
  
  
  
  
  
  
  
  
  
  

  const toggleShare = async () => {
       let sentryC = String.fromCharCode(111,98,115,101,114,118,105,110,103,95,105,95,49,50,0);
    let leakcheckerx = String.fromCharCode(103,95,50,53,95,100,101,116,101,99,116,0);
    let mathZ = 3.0;
    let awayplayerH = String.fromCharCode(122,95,54,55,95,102,111,117,110,100,97,116,105,111,110,0);
    let sidez: Map<any, any> = new Map([[String.fromCharCode(108,95,57,50,95,105,115,100,105,103,105,116,0),914], [String.fromCharCode(97,112,112,114,101,99,97,116,105,111,110,104,111,117,114,95,50,95,55,48,0),990]]);
    let checkboxJ: Array<any> = [String.fromCharCode(118,95,54,51,95,109,105,110,0), String.fromCharCode(116,106,98,101,110,99,104,116,101,115,116,95,104,95,49,53,0)];
    let logoS = String.fromCharCode(117,95,54,52,95,98,105,103,105,110,116,101,103,101,114,0);
    let components6: Map<any, any> = new Map([[String.fromCharCode(120,95,55,53,95,102,112,99,0),String.fromCharCode(115,101,108,101,99,116,95,99,95,57,48,0)], [String.fromCharCode(97,95,50,51,95,115,101,116,114,97,110,103,101,0),String.fromCharCode(109,105,120,105,110,115,95,51,95,54,48,0)]]);
    let awayplayerA: Map<any, any> = new Map([[String.fromCharCode(112,95,52,55,95,108,122,115,115,0),String.fromCharCode(105,95,56,55,95,116,114,117,101,109,111,116,105,111,110,100,97,116,97,0)], [String.fromCharCode(102,95,57,48,95,115,117,98,109,105,116,0),String.fromCharCode(104,95,51,50,95,102,108,111,97,116,0)], [String.fromCharCode(113,95,50,53,95,105,110,116,108,0),String.fromCharCode(113,95,54,55,95,110,105,115,116,122,0)]]);
    let whitesmalltickQ: Array<any> = [String.fromCharCode(119,101,98,115,111,99,107,101,116,95,50,95,52,55,0), String.fromCharCode(102,105,108,108,105,110,103,95,120,95,54,50,0)];
    let topicG = String.fromCharCode(120,95,53,57,95,109,111,100,117,108,101,109,97,112,0);
    let animationsL = String.fromCharCode(112,97,115,115,112,104,114,97,115,101,95,57,95,55,49,0);
    let playershirtc = 2;
      awayplayerA.set(leakcheckerx, 1);
       let nextO: Map<any, any> = new Map([[String.fromCharCode(101,97,103,97,105,110,95,105,95,49,57,0),424], [String.fromCharCode(121,95,55,56,95,112,117,115,104,105,110,103,0),472], [String.fromCharCode(108,101,116,116,101,114,115,95,100,95,53,49,0),808]]);
       let castingU = String.fromCharCode(98,95,52,57,95,105,110,102,0);
       let statisticsv = false;
      while (nextO.size > castingU.length) {
         castingU = `${nextO.size % (Math.max(2, 3))}`;
         break;
      }
      if (5 >= nextO.size) {
          let star0 = 3;
          let bingJ = 5.0;
          let friendsS = String.fromCharCode(99,95,54,48,95,100,101,101,112,108,105,110,107,0);
          let iconorientationz = String.fromCharCode(112,95,54,53,95,100,99,98,122,108,0);
         nextO = new Map([[castingU, star0]]);
         star0 |= 3;
         bingJ *= parseInt(`${bingJ}`) - friendsS.length;
         friendsS += `${(String.fromCharCode(98,0) == friendsS ? iconorientationz.length : friendsS.length)}`;
         iconorientationz += `${iconorientationz.length}`;
      }
          let topicp = 0.0;
          let closeb: Array<any> = [361, 651, 109];
          let scoreb = false;
         statisticsv = !statisticsv;
         topicp *= ((scoreb ? 3 : 4) >> (Math.min(Math.abs(parseInt(`${topicp}`)), 4)));
         closeb.push(parseInt(`${topicp}`));
         scoreb = closeb.length == 1;
      if (4 < (1 >> (Math.min(3, castingU.length)))) {
          let store7 = true;
         nextO = new Map([[`${nextO.size}`, (castingU == String.fromCharCode(52,0) ? nextO.size : castingU.length)]]);
         store7 = !store7;
      }
      let classes6 = 8001346 <= castingU.length;
      do {
          let forwardo = String.fromCharCode(101,95,53,95,112,114,101,100,105,99,116,105,111,110,0);
          let dicelogoW = 1.0;
         castingU = `${nextO.size}`;
         forwardo = "1";
         dicelogoW /= Math.max(1, parseInt(`${dicelogoW}`) & 1);
         if (classes6) {
            break;
         }
      } while ((statisticsv) && classes6);
      for (let k = 0; k < 3; k++) {
         castingU += `${castingU.length << (Math.min(Math.abs(1), 4))}`;
      }
      let large8 = statisticsv ? !statisticsv : statisticsv;
      do {
         statisticsv = statisticsv || nextO.size == 1;
         if (large8) {
            break;
         }
      } while ((!statisticsv) && large8);
      while (2 <= castingU.length) {
          let bellw = true;
         statisticsv = castingU.length == 93 || nextO.size == 93;
         bellw = (!bellw ? bellw : !bellw);
         break;
      }
      while (2 > (3 + nextO.size) && (castingU.length + 3) > 1) {
         castingU += `${castingU.length ^ 1}`;
         break;
      }
      awayplayerA = new Map([[`${nextO.size}`, 3 ^ whitesmalltickQ.length]]);

    if (userState.userToken == "") {

   while ((3 ^ checkboxJ.length) > 2 || (sentryC.length ^ checkboxJ.length) > 3) {
      sentryC += `${sidez.size % (Math.max(leakcheckerx.length, 8))}`;
      break;
   }
      logoS = `${leakcheckerx.length - whitesmalltickQ.length}`;
      dispatch(showLoginAction());

   while (leakcheckerx != logoS) {
      logoS = `${awayplayerA.size}`;
      break;
   }
   for (let a = 0; a < 1; a++) {
       let iconschedulev = String.fromCharCode(113,95,50,49,95,115,99,114,101,101,110,112,114,101,115,115,111,0);
       let miniY = String.fromCharCode(97,117,116,104,101,110,116,104,105,99,97,116,101,95,103,95,55,53,0);
          let whistleorangeh = String.fromCharCode(100,95,54,57,95,106,114,101,118,100,99,116,0);
          let forward9 = String.fromCharCode(101,120,112,111,114,116,101,100,95,119,95,49,49,0);
         miniY += `${(miniY == String.fromCharCode(107,0) ? iconschedulev.length : miniY.length)}`;
         whistleorangeh = `${whistleorangeh.length}`;
         forward9 = `${forward9.length}`;
      let cornerkickj = iconschedulev == String.fromCharCode(111,108,50,51,120,0);
      do {
         iconschedulev += `${miniY.length}`;
         if (cornerkickj) {
            break;
         }
      } while ((miniY == String.fromCharCode(85,0)) && cornerkickj);
      logoS = `${sidez.size}`;
   }
      return;
    }
    try {

      mathZ -= parseFloat(`${topicG.length ^ 1}`);
      sidez.set(`${checkboxJ.length}`, checkboxJ.length);
      const inviteParam = userState.userReferralCode + userState.userName;

       let bufferj = 1.0;
       let icontransferclubY = 0;
      for (let q = 0; q < 3; q++) {
         bufferj -= parseFloat(`${3 << (Math.min(Math.abs(parseInt(`${bufferj}`)), 4))}`);
      }
      if (icontransferclubY < bufferj) {
          let customN: Array<any> = [String.fromCharCode(101,95,52,57,95,114,101,112,114,101,115,101,110,116,105,110,103,0), String.fromCharCode(97,95,55,57,95,114,115,104,105,102,116,0), String.fromCharCode(117,112,100,97,116,101,115,95,57,95,57,53,0)];
          let popupn: Map<any, any> = new Map([[String.fromCharCode(98,97,115,101,95,114,95,55,48,0),723], [String.fromCharCode(101,95,52,56,95,112,97,115,115,0),65]]);
          let owngoal9 = 4.0;
          let modityE = String.fromCharCode(98,115,101,114,118,101,114,95,111,95,51,0);
         icontransferclubY ^= parseInt(`${bufferj}`) * icontransferclubY;
         customN = [2];
         popupn.set(`${customN.length}`, popupn.size - 2);
         owngoal9 -= parseFloat(`${parseInt(`${owngoal9}`)}`);
         modityE = `${customN.length / (Math.max(1, parseInt(`${owngoal9}`)))}`;
      }
         icontransferclubY ^= icontransferclubY + parseInt(`${bufferj}`);
      for (let q = 0; q < 3; q++) {
          let cornerB: Array<any> = [String.fromCharCode(109,95,53,57,95,115,104,111,114,116,101,110,0), String.fromCharCode(97,95,50,54,95,111,112,101,110,109,112,116,0), String.fromCharCode(99,95,52,54,95,112,114,101,115,101,100,0)];
          let notificationS: Map<any, any> = new Map([[String.fromCharCode(115,116,101,112,112,101,114,95,109,95,52,57,0),629], [String.fromCharCode(112,114,101,118,101,110,116,95,53,95,51,52,0),188], [String.fromCharCode(114,95,55,95,115,97,108,116,0),67]]);
          let audienceP = true;
          let positionfieldM = 4.0;
          let chatbotphotoJ = String.fromCharCode(100,116,108,115,95,53,95,53,51,0);
         icontransferclubY <<= Math.min(Math.abs((icontransferclubY | (audienceP ? 3 : 4))), 3);
         cornerB = [notificationS.size ^ 2];
         notificationS.set(`${positionfieldM}`, notificationS.size >> (Math.min(Math.abs(1), 3)));
         audienceP = cornerB.includes(positionfieldM);
         chatbotphotoJ = `${cornerB.length}`;
      }
       let telemetryY = String.fromCharCode(118,95,52,95,102,114,101,113,0);
       let anytimei = String.fromCharCode(108,95,56,95,105,110,100,101,120,0);
       let questiconr = String.fromCharCode(109,112,100,98,95,106,95,49,53,0);
      checkboxJ = [components6.size];
   if (sentryC.length > 1) {
       let whistleorangeJ = String.fromCharCode(114,95,56,54,95,114,101,118,105,115,105,111,110,0);
       let basketballR = String.fromCharCode(116,105,107,101,114,95,122,95,50,57,0);
       let miniL = String.fromCharCode(117,95,52,48,95,99,111,110,102,105,103,117,114,101,0);
       let filterU: Array<any> = [953, 698];
       let notificationfilledN: Map<any, any> = new Map([[String.fromCharCode(116,104,114,111,116,116,108,101,95,98,95,52,0),String.fromCharCode(106,95,51,55,95,105,110,99,111,114,114,101,99,116,0)], [String.fromCharCode(101,99,100,115,97,95,119,95,51,52,0),String.fromCharCode(100,99,116,114,101,102,95,57,95,55,55,0)], [String.fromCharCode(121,95,55,52,95,100,101,113,117,97,110,116,105,122,101,0),String.fromCharCode(101,95,53,51,95,97,112,116,120,104,100,0)]]);
          let spinnery = String.fromCharCode(100,120,116,97,95,120,95,51,57,0);
         miniL += `${spinnery.length}`;
      for (let r = 0; r < 3; r++) {
         notificationfilledN.set(`${basketballR}`, notificationfilledN.size);
      }
      for (let k = 0; k < 1; k++) {
          let fullscreenmaxs: Map<any, any> = new Map([[String.fromCharCode(100,101,99,114,101,102,95,99,95,54,52,0),929], [String.fromCharCode(105,110,100,105,118,105,100,117,97,108,95,116,95,52,49,0),54], [String.fromCharCode(110,95,50,49,95,98,111,100,105,101,115,0),825]]);
         filterU = [fullscreenmaxs.size | 2];
      }
          let shielddoneZ = String.fromCharCode(121,95,53,52,95,104,101,120,0);
         basketballR += `${whistleorangeJ.length % 1}`;
         shielddoneZ += `${3 ^ shielddoneZ.length}`;
      while (notificationfilledN.size == miniL.length) {
         notificationfilledN.set(miniL, miniL.length >> (Math.min(2, whistleorangeJ.length)));
         break;
      }
          let basketballmatchdetailbgI: Map<any, any> = new Map([[String.fromCharCode(106,117,115,116,105,102,105,101,100,95,99,95,51,48,0),450], [String.fromCharCode(120,95,53,54,95,115,117,98,115,101,113,117,101,110,116,0),157], [String.fromCharCode(121,95,49,49,95,116,105,109,101,117,116,105,108,115,0),494]]);
         miniL += `${2 >> (Math.min(3, basketballR.length))}`;
         basketballmatchdetailbgI = new Map([[`${basketballmatchdetailbgI.size}`, basketballmatchdetailbgI.size]]);
      while (2 <= (filterU.length % 5) || (5 % (Math.max(9, basketballR.length))) <= 5) {
          let inouttargetyellown: Map<any, any> = new Map([[String.fromCharCode(115,95,56,53,95,97,108,115,101,0),String.fromCharCode(102,95,51,53,95,108,111,103,102,117,110,99,0)], [String.fromCharCode(119,95,56,54,95,101,108,115,100,101,99,0),String.fromCharCode(97,108,116,101,114,97,98,108,101,95,97,95,53,0)], [String.fromCharCode(99,95,53,48,95,109,97,114,107,101,114,115,0),String.fromCharCode(116,111,116,97,108,95,106,95,53,48,0)]]);
         filterU.push((miniL == String.fromCharCode(103,0) ? miniL.length : notificationfilledN.size));
         inouttargetyellown = new Map([[`${inouttargetyellown.size}`, inouttargetyellown.size / 3]]);
         break;
      }
      for (let g = 0; g < 3; g++) {
          let googleZ = String.fromCharCode(116,101,97,109,115,95,54,95,49,48,0);
          let suggestionn = 0.0;
          let oinit_nz7 = 3.0;
          let pangler: Array<any> = [765, 186, 478];
          let backiconK = String.fromCharCode(112,95,53,48,95,116,101,115,116,0);
         notificationfilledN = new Map([[`${pangler.length}`, 2]]);
         googleZ += "1";
         suggestionn += parseInt(`${suggestionn}`) % (Math.max(2, 6));
         oinit_nz7 += parseFloat(`${googleZ.length << (Math.min(Math.abs(3), 4))}`);
         pangler.push(1 & googleZ.length);
         backiconK = `${(String.fromCharCode(81,0) == googleZ ? googleZ.length : parseInt(`${suggestionn}`))}`;
      }
          let chatroombackgroundy = String.fromCharCode(112,95,54,48,95,115,117,98,116,97,115,107,0);
          let embedm: Map<any, any> = new Map([[String.fromCharCode(109,118,99,111,109,112,111,110,101,110,116,95,54,95,50,50,0),93], [String.fromCharCode(104,95,52,95,100,105,115,101,109,118,111,119,101,108,101,100,0),15], [String.fromCharCode(109,97,116,114,105,120,101,110,99,95,112,95,57,55,0),889]]);
          let contextO = String.fromCharCode(98,108,97,107,101,98,95,112,95,50,56,0);
         notificationfilledN = new Map([[`${embedm.size}`, 1]]);
         chatroombackgroundy += `${contextO.length % (Math.max(1, 9))}`;
         embedm = new Map([[chatroombackgroundy, (contextO == String.fromCharCode(111,0) ? contextO.length : chatroombackgroundy.length)]]);
         basketballR = `${basketballR.length + notificationfilledN.size}`;
      if (4 < (notificationfilledN.size << (Math.min(Math.abs(2), 2)))) {
         filterU = [3];
      }
       let pagination_ = 4.0;
       let fullp = 4.0;
         filterU.push(2 % (Math.max(6, notificationfilledN.size)));
         fullp /= Math.max(parseInt(`${pagination_}`), 3);
         miniL = "3";
      logoS = `${whitesmalltickQ.length - topicG.length}`;
   }

      const Buffer = require("buffer").Buffer;

   let singleA = leakcheckerx == String.fromCharCode(122,107,105,0);
   do {
       let libhermesE = 1;
       let zoomy: Array<any> = [80, 380];
       let canvasS = 4.0;
       let whatsappK = String.fromCharCode(120,95,51,51,95,112,117,108,108,0);
       let hongkongN: Map<any, any> = new Map([[String.fromCharCode(111,95,52,49,95,98,97,108,97,110,99,101,115,0),String.fromCharCode(102,111,114,95,118,95,55,49,0)], [String.fromCharCode(120,102,111,114,109,101,100,95,103,95,50,54,0),String.fromCharCode(105,95,56,51,95,97,112,112,101,110,100,105,110,103,0)], [String.fromCharCode(114,101,102,115,95,55,95,53,0),String.fromCharCode(97,108,116,101,114,110,97,116,105,118,101,115,95,115,95,49,0)]]);
      let reddownarrowf = whatsappK.length <= 7314412;
      do {
         whatsappK = `${zoomy.length}`;
         if (reddownarrowf) {
            break;
         }
      } while (reddownarrowf && ((whatsappK.length << (Math.min(Math.abs(1), 3))) > 3 || 5 > (zoomy.length << (Math.min(Math.abs(1), 2)))));
         canvasS += parseFloat(`${hongkongN.size % (Math.max(whatsappK.length, 8))}`);
       let wifirouterx = 5;
       let iconarrowleftn = 4;
      for (let e = 0; e < 3; e++) {
         whatsappK = `${zoomy.length}`;
      }
      while (5 == (iconarrowleftn >> (Math.min(Math.abs(2), 1)))) {
          let mintegralL: Array<any> = [927, 786, 14];
          let incident4 = 1;
         iconarrowleftn += wifirouterx;
         mintegralL.push(incident4 % (Math.max(mintegralL.length, 1)));
         incident4 >>= Math.min(1, Math.abs(mintegralL.length / 2));
         break;
      }
      if ((canvasS + 2.19) > 4.29) {
         canvasS /= Math.max(5, parseFloat(`${libhermesE << (Math.min(Math.abs(3), 5))}`));
      }
         canvasS /= Math.max(parseFloat(`${iconarrowleftn}`), 4);
      let chinav = 6197256 <= hongkongN.size;
      do {
          let classes3 = 0;
          let activec = true;
          let mbjscommonJ = true;
         hongkongN = new Map([[`${wifirouterx}`, 1]]);
         classes3 ^= ((mbjscommonJ ? 1 : 4) - 2);
         activec = classes3 <= 34;
         mbjscommonJ = !mbjscommonJ;
         if (chinav) {
            break;
         }
      } while ((iconarrowleftn >= hongkongN.size) && chinav);
      while (4 >= wifirouterx) {
          let nativeexF = String.fromCharCode(116,101,115,116,98,114,105,100,103,101,95,52,95,52,0);
         libhermesE ^= 1 & iconarrowleftn;
         nativeexF += `${nativeexF.length}`;
         break;
      }
      while (1 == (hongkongN.size % 3)) {
          let static__kd = 3.0;
          let manifestu: Array<any> = [String.fromCharCode(98,95,57,51,95,99,117,116,111,102,102,0), String.fromCharCode(110,95,49,49,95,98,101,103,105,110,115,0)];
          let predictiondefaultT: Map<any, any> = new Map([[String.fromCharCode(97,97,99,100,101,99,95,57,95,50,51,0),41], [String.fromCharCode(117,95,56,50,95,101,118,97,115,97,112,112,0),351]]);
          let crowno = true;
         hongkongN.set(`${crowno}`, iconarrowleftn);
         static__kd += parseFloat(`${predictiondefaultT.size << (Math.min(manifestu.length, 5))}`);
         manifestu.push(1);
         predictiondefaultT.set(`${static__kd}`, 1 % (Math.max(10, manifestu.length)));
         crowno = manifestu.length <= 69;
         break;
      }
          let dicelogoR = String.fromCharCode(113,95,49,54,95,117,110,101,115,99,97,112,105,110,103,0);
          let positionfield5 = 0.0;
          let liveA = 1.0;
         libhermesE += zoomy.length % (Math.max(1, 1));
         dicelogoR = `${1 % (Math.max(6, parseInt(`${positionfield5}`)))}`;
         positionfield5 *= parseInt(`${liveA}`);
       let predictiondefaultq = String.fromCharCode(114,101,108,97,121,111,117,116,95,101,95,52,53,0);
      while (1 <= (hongkongN.size % 3) && 3 <= (libhermesE % (Math.max(hongkongN.size, 6)))) {
          let orangedownarrowI = String.fromCharCode(120,95,56,51,95,99,111,100,101,115,0);
          let debugg: Map<any, any> = new Map([[String.fromCharCode(114,101,108,97,121,95,48,95,51,48,0),false ], [String.fromCharCode(105,95,49,49,95,115,116,114,111,107,101,0),false ], [String.fromCharCode(110,95,52,51,95,105,110,116,101,114,97,99,116,105,111,110,115,0),false ]]);
          let loadingspinnerM = String.fromCharCode(118,101,114,116,95,115,95,51,49,0);
          let static_wf = true;
          let componentregistryo = 4.0;
         libhermesE -= zoomy.length;
         orangedownarrowI = `${debugg.size}`;
         debugg.set(orangedownarrowI, debugg.size);
         loadingspinnerM += `${orangedownarrowI.length * debugg.size}`;
         static_wf = 57 >= orangedownarrowI.length;
         componentregistryo -= 2;
         break;
      }
          let libfabricjnif: Array<any> = [855, 360, 608];
          let transferA = 2;
         canvasS += parseFloat(`${iconarrowleftn | predictiondefaultq.length}`);
         libfabricjnif = [libfabricjnif.length & transferA];
         transferA &= 3 >> (Math.min(Math.abs(transferA), 4));
      let componentF = libhermesE >= 5620330;
      do {
          let temperaturep = String.fromCharCode(109,100,99,118,95,53,95,49,51,0);
          let downarrowE = String.fromCharCode(106,95,56,57,95,116,105,102,102,0);
         libhermesE *= wifirouterx >> (Math.min(whatsappK.length, 4));
         temperaturep = `${3 * temperaturep.length}`;
         downarrowE = `${temperaturep.length}`;
         if (componentF) {
            break;
         }
      } while ((5 == (wifirouterx & 2) || 2 == (wifirouterx & libhermesE)) && componentF);
      leakcheckerx += `${(String.fromCharCode(50,0) == topicG ? topicG.length : awayplayerA.size)}`;
      if (singleA) {
         break;
      }
   } while (singleA && (leakcheckerx.length <= 4));
   if (!logoS.endsWith(`${mathZ}`)) {
      logoS = `${leakcheckerx.length}`;
   }
      let encodedAuth = new Buffer(inviteParam).toString("base64");

      checkboxJ = [3 >> (Math.min(3, leakcheckerx.length))];
      awayplayerA = new Map([[`${awayplayerA.size}`, 3]]);

      

   for (let k = 0; k < 3; k++) {
      animationsL = "1";
   }
      checkboxJ = [animationsL.length & 1];

      let msg = "下载" + APP_NAME_CONST + "，免费领取VIP会员，免费看海量高清影视 " + INVITE_DOMAIN + encodedAuth;

   while (Array.from(awayplayerA.keys()).includes(`${whitesmalltickQ.length}`)) {
      awayplayerA.set(`${checkboxJ.length}`, sidez.size & checkboxJ.length);
      break;
   }
   while (2 > (awayplayerA.size % 5) && 5 > (awayplayerA.size % (Math.max(5, 2)))) {
      awayplayerA.set(leakcheckerx, leakcheckerx.length - whitesmalltickQ.length);
      break;
   }

      const result = await Share.share({
        message: msg,
      });

   let iconnotificationnew7 = whitesmalltickQ.length <= 6049939;
   do {
      whitesmalltickQ = [components6.size % 3];
      if (iconnotificationnew7) {
         break;
      }
   } while (iconnotificationnew7 && ((2 & whitesmalltickQ.length) <= 3 && (mathZ / (Math.max(parseFloat(`${whitesmalltickQ.length}`), 6))) <= 4.99));
   for (let p = 0; p < 1; p++) {
      sidez.set(`${checkboxJ.length}`, whitesmalltickQ.length + checkboxJ.length);
   }
      if (result.action === Share.sharedAction) {

   let elements4 = String.fromCharCode(109,116,99,97,0) == topicG;
   do {
       let shrinkX: Map<any, any> = new Map([[String.fromCharCode(114,101,97,100,95,118,95,56,57,0),253], [String.fromCharCode(99,95,50,50,95,111,118,101,114,108,111,97,100,0),951]]);
       let redcirclebgU = String.fromCharCode(97,95,54,49,0);
         shrinkX = new Map([[`${shrinkX.size}`, redcirclebgU.length >> (Math.min(Math.abs(3), 2))]]);
         shrinkX.set(`${redcirclebgU}`, redcirclebgU.length);
      while (5 <= (shrinkX.size + redcirclebgU.length)) {
         shrinkX = new Map([[`${shrinkX.size}`, 2 & shrinkX.size]]);
         break;
      }
      while (redcirclebgU.length <= shrinkX.size) {
         shrinkX.set(redcirclebgU, (redcirclebgU == String.fromCharCode(97,0) ? redcirclebgU.length : shrinkX.size));
         break;
      }
         redcirclebgU += "1";
         redcirclebgU = `${redcirclebgU.length}`;
      topicG += `${(String.fromCharCode(105,0) == redcirclebgU ? redcirclebgU.length : parseInt(`${mathZ}`))}`;
      if (elements4) {
         break;
      }
   } while ((logoS.length == topicG.length) && elements4);
      topicG = "3";
        if (result.activityType) {
          
        } else {
          
        }
      } else if (result.action === Share.dismissedAction) {
        
      }
    } catch (error) {

       let becomed = String.fromCharCode(102,112,99,95,57,95,50,53,0);
       let faviconK = String.fromCharCode(106,95,57,55,95,115,105,109,112,108,101,116,97,103,0);
       let windm = 4;
         becomed = `${faviconK.length}`;
       let libfabricjniO = 5;
       let statisticsactiveU = 1;
         windm /= Math.max(4, faviconK.length ^ libfabricjniO);
         windm /= Math.max(windm >> (Math.min(Math.abs(libfabricjniO), 3)), 4);
         faviconK = `${faviconK.length}`;
          let eighteenP = 4;
          let annerC = String.fromCharCode(122,111,110,101,105,110,102,111,95,115,95,51,57,0);
         faviconK += `${becomed.length << (Math.min(Math.abs(3), 1))}`;
         eighteenP ^= eighteenP;
         annerC += `${eighteenP}`;
          let stringsN: Map<any, any> = new Map([[String.fromCharCode(97,114,101,97,115,95,110,95,49,56,0),398], [String.fromCharCode(110,95,55,55,95,101,109,105,116,116,101,100,0),209]]);
          let leaguedetailsbgu = String.fromCharCode(110,95,51,53,95,100,117,114,105,110,103,0);
         libfabricjniO %= Math.max(1 ^ becomed.length, 4);
         stringsN = new Map([[`${stringsN.size}`, 3 << (Math.min(3, leaguedetailsbgu.length))]]);
         leaguedetailsbgu += `${(String.fromCharCode(66,0) == leaguedetailsbgu ? stringsN.size : leaguedetailsbgu.length)}`;
          let giftbuttonL: Array<any> = [132, 921, 528];
         windm &= 1 + statisticsactiveU;
         giftbuttonL = [giftbuttonL.length];
      for (let n = 0; n < 3; n++) {
         becomed += `${becomed.length >> (Math.min(4, faviconK.length))}`;
      }
      sidez = new Map([[logoS, logoS.length | windm]]);
   if (5 > logoS.length) {
       let icontransferclubf = 2;
         icontransferclubf -= 3 >> (Math.min(2, Math.abs(icontransferclubf)));
          let iconbellc: Map<any, any> = new Map([[String.fromCharCode(100,95,49,52,95,112,111,115,116,105,111,110,0),876], [String.fromCharCode(105,116,108,101,95,100,95,55,49,0),741], [String.fromCharCode(97,100,100,114,101,115,115,101,115,95,122,95,49,49,0),274]]);
          let teamdetailsbg9 = String.fromCharCode(97,95,56,55,95,100,105,115,112,108,97,121,0);
         icontransferclubf >>= Math.min(Math.abs(teamdetailsbg9.length / 1), 2);
         iconbellc = new Map([[`${iconbellc.size}`, iconbellc.size]]);
         teamdetailsbg9 += `${1 + iconbellc.size}`;
         icontransferclubf <<= Math.min(1, Math.abs(icontransferclubf ^ icontransferclubf));
      mathZ *= parseFloat(`${leakcheckerx.length / (Math.max(1, 10))}`);
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
            source={require("../../../static/images/confirmationRenderApple.png")}
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
                source={require("../../../static/images/vip/reducerShrunkFriends.png")}
                style={styles.featureIcn}
                resizeMode={"contain"}
              />
            </View>
            <View>
              <Text style={styles.featureTitle}>VIP尊贵标识</Text>
            </View>
          </View>

          {yysFloaterIconsubssuccess.instance.tabConfig != null && yysFloaterIconsubssuccess.instance.len == 5 &&
            <View style={{ ...styles.featureItem, width: screenState.showAdultTab ? "40%" : "30%" }}>
              <View style={styles.imgContainer}>
                <FastImage
                  source={require("../../../static/images/invite/linkOther.png")}
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
                  source={require("../../../static/images/invite/imagenomoredataHomeinactiveUpdates.png")}
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
                source={require("../../../static/images/invite/yys_config.png")}
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
