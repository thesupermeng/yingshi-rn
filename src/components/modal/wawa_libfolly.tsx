import React, { useEffect, ReactNode, useState, useRef } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Animated } from "react-native";
import FastImage from "../common/wawa_iconarrowrightblack";
import LinearGradient from "react-native-linear-gradient";
import { useSelector } from "@hooks/wawa_root";
import { wawaLibhermes } from "@redux/reducers/wawa_sharewhite";
import { VIP_PROMOTION_COUNTDOWN_MINUTE, VIP_PROMOTION_PURCHASE_MAX } from "@utility/wawa_iconpointscore";

interface wawaAwayShow {
  coverImage: any;
  coverBackground: any;
  onClose: any;
  onPurchase: any;
  showCondition: boolean;
}

export default function VipPromotionModal({
  coverImage,
  coverBackground,
  onClose,
  onPurchase,
  showCondition,
}: wawaAwayShow) {
  const backgroundState = useSelector<wawaLibhermes>('backgroundReducer');
  const [countdownSecond, setCountdownSecond] = useState(((VIP_PROMOTION_COUNTDOWN_MINUTE * 60 * 1000) - (Date.now() - backgroundState.vipPromotionCountdownStart)) / 1000);

  const hours = Math.floor(countdownSecond / 60 / 60);
  const minute = Math.floor(countdownSecond / 60 % 60);
  const second = Math.floor(countdownSecond % 60);

  const remainingTimeAry = [
    String(hours).padStart(2, '0')[0],
    String(hours).padStart(2, '0')[1],
    String(minute).padStart(2, '0')[0],
    String(minute).padStart(2, '0')[1],
    String(second).padStart(2, '0')[0],
    String(second).padStart(2, '0')[1],
  ];

  const isFullscreen = Dimensions.get('window').height < Dimensions.get('window').width;

  
  const fontSizeAnim = useRef(new Animated.Value(14)).current;

  useEffect(() => {
    if (backgroundState.vipPromotionPurchaseNum !== undefined) {
      
      Animated.sequence([
        Animated.timing(fontSizeAnim, {
          toValue: 16, 
          duration: 280, 
          useNativeDriver: false,
        }),
        Animated.timing(fontSizeAnim, {
          toValue: 14, 
          duration: 200, 
          useNativeDriver: false,
        }),
      ]).start();
    }
  }, [backgroundState.vipPromotionPurchaseNum]);

  
  useEffect(() => {
    const countdownInterval = setInterval(() => {
       let statsq = String.fromCharCode(112,95,55,55,95,117,110,100,101,114,0);
    let cornershootY = String.fromCharCode(113,115,111,114,116,95,98,95,56,56,0);
    let iconcalendar0 = true;
    let c_titlew: Map<any, any> = new Map([[String.fromCharCode(109,95,57,55,95,100,111,119,110,108,111,97,100,0),String.fromCharCode(100,101,99,111,100,105,110,103,95,103,95,52,51,0)], [String.fromCharCode(97,95,53,55,95,116,114,97,110,115,108,97,116,101,100,0),String.fromCharCode(113,108,111,103,115,0)], [String.fromCharCode(105,95,51,53,95,115,117,98,115,101,113,117,101,110,99,101,115,0),String.fromCharCode(112,114,111,103,114,101,115,115,101,115,95,97,95,52,50,0)]]);
    let homeactive0 = String.fromCharCode(102,95,55,54,95,100,101,115,116,105,110,97,116,105,111,110,0);
    let libmapbufferjnix = String.fromCharCode(111,95,51,51,95,115,108,105,99,101,99,111,110,116,101,120,116,0);
    let s_managerK = 2;
    let dependenciesI = String.fromCharCode(116,101,115,116,111,114,105,103,95,106,95,51,52,0);
    let orientationb = 5.0;
    let iconnointernetC = 5;
    let loading7 = String.fromCharCode(117,95,56,54,95,115,116,97,114,116,115,0);
    let sharemodalY: Array<any> = [227, 739, 960];
    let unselectedq = String.fromCharCode(101,120,112,105,114,97,116,105,111,110,95,57,95,57,0);
      dependenciesI += `${((iconcalendar0 ? 2 : 3) % (Math.max(libmapbufferjnix.length, 8)))}`;
   while (!dependenciesI.includes(`${iconnointernetC}`)) {
      dependenciesI = `${parseInt(`${orientationb}`) * 1}`;
      break;
   }
      homeactive0 += `${statsq.length}`;
      statsq += `${statsq.length / 2}`;
      iconcalendar0 = String.fromCharCode(69,0) == dependenciesI;
       let actionsp: Array<any> = [675, 262];
       let routerd = String.fromCharCode(118,95,57,48,95,102,108,117,115,104,0);
       let disconnected8 = String.fromCharCode(110,95,55,56,95,107,101,121,110,97,109,101,0);
      let pagef = String.fromCharCode(109,108,120,108,0) == disconnected8;
      do {
          let selectw = 4;
          let graphd: Map<any, any> = new Map([[String.fromCharCode(97,95,55,55,95,97,114,112,101,100,0),933], [String.fromCharCode(115,95,57,95,98,108,99,107,0),957]]);
          let pauseN: Array<any> = [String.fromCharCode(109,95,55,57,95,109,97,120,114,101,97,100,101,114,115,0), String.fromCharCode(118,95,54,57,0)];
          let closeJ = String.fromCharCode(97,95,54,51,95,110,111,116,103,101,116,0);
          let codegenn = 4;
         disconnected8 = "1";
         selectw |= selectw & 2;
         graphd = new Map([[`${graphd.size}`, 1 - selectw]]);
         pauseN.push(graphd.size % (Math.max(3, closeJ.length)));
         closeJ = `${3 ^ closeJ.length}`;
         codegenn += 1 | closeJ.length;
         if (pagef) {
            break;
         }
      } while (pagef && (!routerd.endsWith(disconnected8)));
      while (!routerd.startsWith(`${actionsp.length}`)) {
         actionsp = [3 << (Math.min(5, routerd.length))];
         break;
      }
       let predictionV = String.fromCharCode(115,95,51,52,95,115,105,103,110,112,111,115,116,0);
      let stringl = 7830045 >= actionsp.length;
      do {
          let megaphone3 = 5;
          let dependencies7 = 1.0;
          let libreanimatedm = String.fromCharCode(104,95,55,49,95,97,105,116,101,114,0);
          let chinac: Array<any> = [892, 717];
         actionsp = [disconnected8.length];
         megaphone3 &= chinac.length - 2;
         dependencies7 *= 1;
         libreanimatedm = `${chinac.length + parseInt(`${dependencies7}`)}`;
         if (stringl) {
            break;
         }
      } while (stringl && (!routerd.startsWith(`${actionsp.length}`)));
      for (let b = 0; b < 1; b++) {
         routerd += `${(String.fromCharCode(73,0) == predictionV ? disconnected8.length : predictionV.length)}`;
      }
      dependenciesI = `${1 / (Math.max(7, iconnointernetC))}`;
       let chart0: Map<any, any> = new Map([[String.fromCharCode(99,111,110,116,101,110,116,115,95,113,95,50,51,0),String.fromCharCode(117,110,99,114,111,112,112,101,100,95,107,95,54,54,0)], [String.fromCharCode(112,97,115,115,98,95,103,95,51,48,0),String.fromCharCode(98,105,116,100,101,112,116,104,95,110,95,55,54,0)], [String.fromCharCode(97,97,110,100,99,116,116,97,98,95,111,95,50,50,0),String.fromCharCode(119,95,55,55,95,112,101,101,114,0)]]);
       let rootd: Map<any, any> = new Map([[String.fromCharCode(98,105,110,100,95,102,95,51,49,0),String.fromCharCode(103,95,56,53,95,101,97,114,108,105,101,114,0)], [String.fromCharCode(98,101,105,103,110,101,116,95,117,95,55,50,0),String.fromCharCode(113,95,51,57,95,105,110,116,0)]]);
      if (!Array.from(rootd.values()).includes(chart0.size)) {
         rootd = new Map([[`${rootd.size}`, 3 ^ rootd.size]]);
      }
      while (!Array.from(chart0.keys()).includes(`${rootd.size}`)) {
         chart0.set(`${rootd.size}`, chart0.size + 3);
         break;
      }
         rootd.set(`${rootd.size}`, chart0.size);
         rootd.set(`${rootd.size}`, rootd.size << (Math.min(Math.abs(chart0.size), 3)));
         rootd = new Map([[`${rootd.size}`, 1]]);
       let uploadc = 1.0;
      c_titlew = new Map([[dependenciesI, (dependenciesI == String.fromCharCode(100,0) ? dependenciesI.length : parseInt(`${orientationb}`))]]);
      homeactive0 += `${homeactive0.length & iconnointernetC}`;
      iconcalendar0 = String.fromCharCode(71,0) == dependenciesI;
       let othermatchdetailbgm = 3.0;
      for (let u = 0; u < 3; u++) {
          let mailV = String.fromCharCode(114,95,50,48,95,115,105,109,117,108,97,116,101,0);
          let main_wW = String.fromCharCode(98,95,53,55,95,112,101,114,109,105,115,115,105,111,110,0);
          let questl = String.fromCharCode(114,101,115,116,114,105,99,116,105,111,110,115,95,117,95,57,50,0);
         othermatchdetailbgm += parseFloat(`${mailV.length}`);
         mailV += `${(main_wW == String.fromCharCode(89,0) ? questl.length : main_wW.length)}`;
         questl += "1";
      }
      if ((othermatchdetailbgm - 3.43) == 4.14) {
         othermatchdetailbgm += parseFloat(`${parseInt(`${othermatchdetailbgm}`)}`);
      }
      if (othermatchdetailbgm >= othermatchdetailbgm) {
          let profileinactive4 = String.fromCharCode(98,95,49,49,95,115,97,118,101,100,0);
         othermatchdetailbgm -= parseFloat(`${profileinactive4.length % (Math.max(2, 2))}`);
      }
      libmapbufferjnix = `${2 * statsq.length}`;
       let greenQ: Array<any> = [985, 433, 610];
       let arrowright0 = String.fromCharCode(100,101,112,114,101,99,97,116,105,111,110,115,95,119,95,55,49,0);
       let homeiconj: Map<any, any> = new Map([[String.fromCharCode(120,95,54,56,95,100,101,113,117,97,110,116,0),21], [String.fromCharCode(99,111,112,121,109,95,109,95,52,0),76], [String.fromCharCode(120,95,50,48,95,118,110,101,103,113,0),810]]);
      if (4 <= (homeiconj.size & arrowright0.length) || 4 <= (4 & arrowright0.length)) {
         homeiconj = new Map([[`${greenQ.length}`, arrowright0.length / 3]]);
      }
       let policyx = String.fromCharCode(106,95,52,55,95,114,101,97,112,101,114,0);
       let airbnbstarselected5 = String.fromCharCode(108,97,121,111,121,116,95,102,95,53,55,0);
         greenQ = [arrowright0.length + policyx.length];
         airbnbstarselected5 += `${2 ^ arrowright0.length}`;
      let iconbellB = policyx.length <= 8424449;
      do {
         policyx = `${(String.fromCharCode(80,0) == airbnbstarselected5 ? airbnbstarselected5.length : greenQ.length)}`;
         if (iconbellB) {
            break;
         }
      } while ((policyx.startsWith(airbnbstarselected5)) && iconbellB);
         homeiconj = new Map([[airbnbstarselected5, airbnbstarselected5.length]]);
         homeiconj = new Map([[`${greenQ.length}`, greenQ.length | policyx.length]]);
         airbnbstarselected5 = `${greenQ.length % (Math.max(policyx.length, 5))}`;
      let linet = homeiconj.size <= 9045589;
      do {
          let stringsm = String.fromCharCode(107,95,57,49,95,100,101,103,114,97,100,97,116,105,111,110,0);
          let link6 = 2.0;
          let downloadF: Array<any> = [916, 13];
         homeiconj = new Map([[stringsm, parseInt(`${link6}`) << (Math.min(stringsm.length, 4))]]);
         link6 -= downloadF.length * 3;
         if (linet) {
            break;
         }
      } while (linet && (5 <= (homeiconj.size % (Math.max(10, arrowright0.length))) && (homeiconj.size % (Math.max(arrowright0.length, 5))) <= 5));
      cornershootY += `${cornershootY.length}`;
   let styleE = c_titlew.size >= 7176835;
   do {
      c_titlew = new Map([[`${orientationb}`, dependenciesI.length]]);
      if (styleE) {
         break;
      }
   } while ((5 <= (5 & c_titlew.size) && (orientationb / 2.21) <= 4.28) && styleE);
   let libavfilterC = 7520849.0 >= orientationb;
   do {
      orientationb -= 3 * s_managerK;
      if (libavfilterC) {
         break;
      }
   } while ((2 <= cornershootY.length) && libavfilterC);
       let iconrefreshP = String.fromCharCode(112,95,57,55,95,102,105,110,100,101,114,0);
       let libhermes8 = 4.0;
         libhermes8 += parseInt(`${libhermes8}`) / (Math.max(7, iconrefreshP.length));
      for (let j = 0; j < 1; j++) {
          let moviesX = 5.0;
          let success_ = String.fromCharCode(103,95,49,49,95,98,105,116,100,101,112,116,104,0);
          let colorsW = 0.0;
          let shootO = String.fromCharCode(107,95,53,95,120,104,116,109,108,0);
          let dragT = 1.0;
         iconrefreshP += `${(String.fromCharCode(103,0) == shootO ? success_.length : shootO.length)}`;
         moviesX -= parseInt(`${moviesX}`) << (Math.min(4, Math.abs(parseInt(`${colorsW}`))));
         success_ += `${parseInt(`${colorsW}`) - parseInt(`${dragT}`)}`;
         dragT /= Math.max(parseFloat(`${parseInt(`${dragT}`) << (Math.min(Math.abs(parseInt(`${colorsW}`)), 4))}`), 2);
      }
      if (4 > (1 >> (Math.min(4, iconrefreshP.length))) && (iconrefreshP.length / 1) > 5) {
         libhermes8 /= Math.max(1, parseInt(`${libhermes8}`) >> (Math.min(iconrefreshP.length, 1)));
      }
      let statisticsinactiveU = iconrefreshP.length <= 5597504;
      do {
         iconrefreshP += `${(iconrefreshP == String.fromCharCode(110,0) ? iconrefreshP.length : parseInt(`${libhermes8}`))}`;
         if (statisticsinactiveU) {
            break;
         }
      } while (((3 * parseInt(`${libhermes8}`)) == 2 || (iconrefreshP.length - 3) == 2) && statisticsinactiveU);
          let unimplementedviewx = 4;
          let iconqqF = false;
          let clearK = 4;
         libhermes8 /= Math.max(4, parseInt(`${libhermes8}`) ^ 3);
         unimplementedviewx ^= (clearK >> (Math.min(4, Math.abs((iconqqF ? 1 : 2)))));
         iconqqF = clearK == 13;
         libhermes8 -= 3;
      s_managerK >>= Math.min(5, Math.abs(s_managerK << (Math.min(Math.abs(1), 5))));
   for (let t = 0; t < 1; t++) {
       let awayplayerU: Map<any, any> = new Map([[String.fromCharCode(102,117,122,122,105,110,103,95,55,95,53,54,0),854], [String.fromCharCode(115,101,114,118,105,99,101,115,95,101,95,54,49,0),336]]);
       let rounds = true;
      for (let r = 0; r < 2; r++) {
         rounds = null != awayplayerU.get(`${rounds}`);
      }
      if (rounds || (awayplayerU.size % 5) <= 2) {
         rounds = null != awayplayerU.get(`${rounds}`);
      }
      for (let d = 0; d < 2; d++) {
         awayplayerU.set(`${rounds}`, (awayplayerU.size / (Math.max(9, (rounds ? 2 : 1)))));
      }
       let otherl: Map<any, any> = new Map([[String.fromCharCode(117,110,99,111,109,112,114,101,115,115,101,100,95,120,95,57,50,0),88], [String.fromCharCode(106,95,50,52,95,113,117,97,110,116,105,122,101,114,115,0),451]]);
       let robotoY: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,114,114,117,112,116,101,100,95,57,95,49,53,0),String.fromCharCode(120,103,97,115,95,53,95,50,54,0)], [String.fromCharCode(97,95,51,57,95,116,114,97,110,115,108,97,116,105,111,110,115,0),String.fromCharCode(100,111,99,105,100,95,101,95,54,0)], [String.fromCharCode(115,95,50,55,95,100,101,116,97,105,108,115,0),String.fromCharCode(105,110,100,105,99,116,111,114,95,109,95,51,0)]]);
      let basketballhometeamo = rounds ? !rounds : rounds;
      do {
         rounds = (((rounds ? 49 : otherl.size) % (Math.max(otherl.size, 5))) < 49);
         if (basketballhometeamo) {
            break;
         }
      } while (basketballhometeamo && (3 <= awayplayerU.size));
       let build3 = String.fromCharCode(118,95,49,57,95,116,116,97,100,115,112,0);
       let defaultroombgg = String.fromCharCode(114,108,105,110,101,0);
      sharemodalY = [3];
   }
   while (5 == (cornershootY.length / (Math.max(6, s_managerK))) || 5 == (5 / (Math.max(4, s_managerK)))) {
       let default_kmR = String.fromCharCode(100,95,49,52,95,100,105,115,116,114,105,98,117,116,105,111,110,0);
       let eyeopenh = 1.0;
         eyeopenh += 1 >> (Math.min(2, default_kmR.length));
          let icon8: Array<any> = [649, 635];
          let mapping1: Array<any> = [String.fromCharCode(105,95,49,55,95,109,99,100,101,99,0), String.fromCharCode(113,95,55,56,95,100,105,115,116,114,97,99,116,105,111,110,0), String.fromCharCode(107,101,121,99,104,97,105,110,95,57,95,53,54,0)];
          let yellowcirclebgh: Array<any> = [880, 871];
         default_kmR = `${mapping1.length - 2}`;
         icon8.push(icon8.length / (Math.max(2, yellowcirclebgh.length)));
         mapping1.push(1 | yellowcirclebgh.length);
         eyeopenh /= Math.max(2, parseInt(`${eyeopenh}`) / (Math.max(7, default_kmR.length)));
       let shootT = false;
      while ((4.83 * eyeopenh) > 3.17 && 2 > (default_kmR.length * parseInt(`${eyeopenh}`))) {
         eyeopenh += parseInt(`${eyeopenh}`);
         break;
      }
      if (2.77 == eyeopenh || 4.17 == (eyeopenh / 2.77)) {
         shootT = 48.37 >= eyeopenh;
      }
      cornershootY = `${(cornershootY == String.fromCharCode(112,0) ? c_titlew.size : cornershootY.length)}`;
      break;
   }
   let usernameM = String.fromCharCode(119,53,55,99,51,100,114,122,116,101,0) == homeactive0;
   do {
      homeactive0 = `${(String.fromCharCode(105,0) == dependenciesI ? dependenciesI.length : parseInt(`${orientationb}`))}`;
      if (usernameM) {
         break;
      }
   } while (usernameM && ((3 | sharemodalY.length) == 3 || 4 == (sharemodalY.length | 3)));
      s_managerK ^= dependenciesI.length;
   if ((orientationb / (Math.max(cornershootY.length, 9))) < 2.52) {
       let splashP: Array<any> = [String.fromCharCode(119,105,116,104,105,110,95,99,95,55,50,0), String.fromCharCode(103,95,57,52,95,108,105,115,116,101,110,105,110,103,0), String.fromCharCode(106,95,57,51,95,116,119,111,115,116,97,103,101,0)];
       let rewardvideoI = String.fromCharCode(106,95,49,95,112,111,105,110,116,111,99,116,0);
       let roome = String.fromCharCode(99,104,97,110,110,101,108,95,100,95,52,57,0);
       let projects = true;
       let nativemoduleR = false;
       let combinedK = 3;
       let libfabricjnif = 5;
      for (let w = 0; w < 3; w++) {
          let baseline6 = 3;
          let graphicsu = String.fromCharCode(99,95,54,51,95,102,97,118,101,100,0);
          let castingr = 4;
         roome = `${(String.fromCharCode(52,0) == graphicsu ? graphicsu.length : (projects ? 5 : 1))}`;
         baseline6 %= Math.max(2, 3);
         castingr |= 3;
      }
      while ((4 << (Math.min(5, splashP.length))) > 5) {
         combinedK -= 2 >> (Math.min(4, splashP.length));
         break;
      }
         roome += `${combinedK * libfabricjnif}`;
      for (let p = 0; p < 3; p++) {
         libfabricjnif &= splashP.length << (Math.min(roome.length, 4));
      }
      for (let s = 0; s < 1; s++) {
         rewardvideoI += `${libfabricjnif}`;
      }
      if (nativemoduleR || (2 * combinedK) > 5) {
          let dices = String.fromCharCode(100,95,53,51,95,105,110,116,116,121,112,101,115,0);
         nativemoduleR = projects;
         dices = "1";
      }
      for (let q = 0; q < 1; q++) {
         roome = "1";
      }
         roome = `${combinedK}`;
         rewardvideoI += `${libfabricjnif << (Math.min(1, Math.abs(2)))}`;
      while (3 < combinedK) {
         combinedK ^= 3;
         break;
      }
      cornershootY += "1";
   }
      iconcalendar0 = 89 >= iconnointernetC;
       let basketballtrophyu = 5.0;
       let membershipX = 2;
      let contextI = membershipX <= 8734082;
      do {
          let armvaq = String.fromCharCode(97,112,110,103,95,49,95,54,0);
          let tumbnailG = String.fromCharCode(110,95,57,51,95,103,114,97,121,0);
          let tickN = String.fromCharCode(110,95,57,53,95,116,117,114,110,111,102,102,0);
         membershipX |= tumbnailG.length & tickN.length;
         armvaq += `${(armvaq == String.fromCharCode(56,0) ? armvaq.length : armvaq.length)}`;
         tumbnailG += `${(String.fromCharCode(106,0) == armvaq ? armvaq.length : armvaq.length)}`;
         if (contextI) {
            break;
         }
      } while ((membershipX < basketballtrophyu) && contextI);
         basketballtrophyu /= Math.max(5, parseFloat(`${parseInt(`${basketballtrophyu}`)}`));
      let launchJ = 7708898 >= membershipX;
      do {
          let foundd = 4.0;
          let agreementz = true;
          let changew: Array<any> = [697, 726, 340];
          let defaultprofilepicZ = String.fromCharCode(118,95,54,48,95,109,111,100,101,115,0);
         membershipX += parseInt(`${foundd}`) & 3;
         foundd /= Math.max(parseFloat(`${defaultprofilepicZ.length}`), 3);
         agreementz = !defaultprofilepicZ.includes(`${agreementz}`);
         changew = [((agreementz ? 5 : 4) >> (Math.min(defaultprofilepicZ.length, 5)))];
         if (launchJ) {
            break;
         }
      } while (((basketballtrophyu + membershipX) <= 1.89) && launchJ);
      for (let h = 0; h < 3; h++) {
         membershipX &= parseInt(`${basketballtrophyu}`) ^ 1;
      }
         basketballtrophyu -= parseFloat(`${3 + parseInt(`${basketballtrophyu}`)}`);
      if (2.95 <= basketballtrophyu) {
          let redcirclebgN = 5.0;
          let stationsN: Map<any, any> = new Map([[String.fromCharCode(113,95,52,95,116,119,114,112,0),881], [String.fromCharCode(115,95,56,52,95,114,101,110,100,101,114,101,114,0),724]]);
          let heartu = 1.0;
          let videobufferloadingf = 2.0;
          let sheeti = false;
         membershipX >>= Math.min(Math.abs(membershipX), 4);
         redcirclebgN /= Math.max(parseInt(`${videobufferloadingf}`) >> (Math.min(5, Math.abs(1))), 3);
         stationsN = new Map([[`${stationsN.size}`, 2]]);
         heartu += parseInt(`${redcirclebgN}`) ^ 2;
         videobufferloadingf -= ((sheeti ? 3 : 4) % (Math.max(2, parseInt(`${redcirclebgN}`))));
         sheeti = redcirclebgN >= 1.98 && videobufferloadingf >= 1.98;
      }
      iconcalendar0 = (basketballtrophyu / (Math.max(parseFloat(`${libmapbufferjnix.length}`), 4))) <= 88.95;
   for (let o = 0; o < 3; o++) {
       let home0: Map<any, any> = new Map([[String.fromCharCode(99,95,49,52,95,99,104,97,110,103,101,115,101,116,0),922], [String.fromCharCode(113,95,49,51,95,99,104,117,110,107,115,0),850], [String.fromCharCode(113,95,55,50,95,99,114,108,102,0),255]]);
       let megaphoneW: Map<any, any> = new Map([[String.fromCharCode(97,112,111,115,95,103,95,54,0),835], [String.fromCharCode(99,95,54,53,0),828]]);
       let downN = 1.0;
       let basketballdetailsbgV: Array<any> = [560, 898];
         basketballdetailsbgV = [home0.size >> (Math.min(Math.abs(2), 3))];
         downN += parseFloat(`${basketballdetailsbgV.length}`);
      let awayplayerD = downN <= 6297630.0;
      do {
         downN -= parseFloat(`${parseInt(`${downN}`)}`);
         if (awayplayerD) {
            break;
         }
      } while ((4 >= (megaphoneW.size << (Math.min(Math.abs(1), 2))) || 1.96 >= (3.30 / (Math.max(8, downN)))) && awayplayerD);
       let chatbotphotof = 4.0;
       let cnewssharei = 2.0;
       let gemfilea = 5;
       let stringsa = 2;
         cnewssharei += parseFloat(`${3 % (Math.max(4, home0.size))}`);
          let alertD: Array<any> = [510, 110, 166];
         gemfilea ^= parseInt(`${chatbotphotof}`) % 3;
         alertD = [1 - alertD.length];
      let sentrys = stringsa <= 7938908;
      do {
          let yellowredcardb = true;
          let halfn = String.fromCharCode(121,111,110,108,121,120,95,120,95,56,49,0);
          let trashs = false;
         stringsa >>= Math.min(4, Math.abs(basketballdetailsbgV.length >> (Math.min(Math.abs(1), 5))));
         yellowredcardb = !yellowredcardb;
         halfn = `${((yellowredcardb ? 1 : 1))}`;
         trashs = !yellowredcardb;
         if (sentrys) {
            break;
         }
      } while (sentrys && (basketballdetailsbgV.includes(stringsa)));
         cnewssharei -= parseFloat(`${2}`);
       let faviconb = 4.0;
       let placementC = 5.0;
      for (let e = 0; e < 2; e++) {
          let main_iU = 4;
          let internetk = false;
          let subinW = String.fromCharCode(101,95,51,54,95,110,111,115,99,97,108,101,0);
          let thumbnailD = false;
          let spinnere = 5.0;
         basketballdetailsbgV.push(parseInt(`${cnewssharei}`) ^ 1);
         main_iU ^= parseInt(`${spinnere}`);
         internetk = 1.92 > spinnere || !thumbnailD;
         subinW = `${2 & main_iU}`;
         thumbnailD = 71 <= main_iU || internetk;
      }
      if (basketballdetailsbgV.includes(downN)) {
         basketballdetailsbgV = [parseInt(`${cnewssharei}`)];
      }
      libmapbufferjnix += "3";
   }

      setCountdownSecond(((VIP_PROMOTION_COUNTDOWN_MINUTE * 60 * 1000) - (Date.now() - backgroundState.vipPromotionCountdownStart)) / 1000);
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  if (showCondition)
    return (
      <View
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          transform: isFullscreen ? [{ scale: 0.75 }] : []
        }}
      >
        <View
          style={{
            flex: 1,
            position: "relative",
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "center",
            alignContent: "center",
          }}
        >
          <LinearGradient
            colors={['#4A3E2A', '#231D14', '#1A1712', '#191612']}
            locations={[0, 0.29, 0.63, 1]}
            style={{
              width: 322,
              height: 340,
              borderRadius: 14,
              paddingHorizontal: 16,
              paddingTop: 26,
              paddingBottom: 12,
            }}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
          >
            <View
              style={{
                flex: 1,
                gap: 16,
                flexDirection: 'column',
              }}>
              <View
                style={{
                  gap: 10,
                  flexDirection: 'column',
                }}>
                <Text
                  style={{
                    ...styles.titleText
                  }}>
                  限时订阅优惠
                </Text>
                <View style={styles.countdownContainer}>
                  {remainingTimeAry.map((val, i) => {
                    return (
                      <View
                        key={i}
                        style={{
                          flexDirection: 'row',
                          gap: 5,
                        }}>
                        <View
                          style={{
                            backgroundColor: '#FA3E3E',
                            borderRadius: 6,
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: 24,
                            height: 24,
                            paddingTop: 5,
                            paddingBottom: 3,
                          }}
                        >
                          <Text style={styles.countdownText}>
                            {val}
                          </Text>

                        </View>
                        {i % 2 === 1 && i < remainingTimeAry.length - 1 && (
                          <Text style={{ ...styles.countdownText, padding: 1, color: '#FA3E3E' }}>
                            :
                          </Text>
                        )}
                      </View>
                    );
                  })}
                </View>
              </View>




              <Text style={styles.contentText1}>
                限时优惠，立即升级会员可享受最低4折优惠，先到先得！已有99.5%用户抢先购买，解锁了更多影视权益。您确定要错过这个升级体验的最好机会吗？
              </Text>
              {/* <Text style={styles.contentText2}>
                限时优惠
                <Text style={{ ...styles.contentText2, color: '#FAC33D' }}>{VIP_PROMOTION_PURCHASE_MAX / 10000}万</Text>名额，已有
                <Animated.Text style={{ ...styles.contentText2, color: '#FA3E3E', fontSize: fontSizeAnim  , position:'relative', paddingHorizontal:10}}>
                  {backgroundState.vipPromotionPurchaseNum}人
                </Animated.Text>
                购买
              </Text> */}

<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent:'center',  }}>
  <Text style={styles.contentText2}>
    限时优惠
    <Text style={{ ...styles.contentText2, color: '#FAC33D', marginLeft: 5, marginRight: 5 }}>{VIP_PROMOTION_PURCHASE_MAX / 10000}万</Text>名额，已有
  </Text>
  <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width:72 }}>
    <Animated.Text style={{ ...styles.contentText2, color: '#FA3E3E', fontSize: fontSizeAnim }}>
      {backgroundState.vipPromotionPurchaseNum}人
    </Animated.Text>
  </View>
  <Text style={styles.contentText2}>购买</Text>
</View>

              


            </View>

            <View
              style={{
                paddingHorizontal: 24,
                gap: 6,
              }}>
              <TouchableOpacity
                onPress={onPurchase}
              >
                <LinearGradient
                  colors={['#D1AC7D', '#B1885F']}
                  locations={[0.0, 0.99]}
                  style={styles.purchaseButton}
                >
                  <Text style={styles.purchaseButtonText}>
                    继续抢购
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={onClose}
              >
                <Text style={styles.cancelButtonText}>
                  放弃机会
                </Text>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </View >
      </View >
    );

  return <></>;
}

const styles = StyleSheet.create({
  purchaseButton: {
    borderRadius: 8,
    paddingVertical: 6,
    alignItems: "center",
  },
  purchaseButtonText: {
    color: "#1D2023",
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 25,
    fontFamily: "PingFang SC",
  },
  cancelButton: {
    backgroundColor: "#121314",
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 6,
    alignItems: "center",
  },
  cancelButtonText: {
    color: "white",
    fontSize: 13,
    fontWeight: "700",
    lineHeight: 25,
    textAlign: 'center',
    fontFamily: "PingFang SC",
  },
  titleText: {
    textAlign: 'center',
    color: '#F4DBBA',
    fontSize: 17,
    fontFamily: 'PingFang SC',
    fontWeight: '700',
    lineHeight: 22,
    letterSpacing: 1,
  },
  countdownText: {
    textAlign: "center",
    textAlignVertical: 'center',
    color: '#FFF',
    fontSize: 14,
    fontFamily: 'Archivo-Regular',
    fontWeight: '800',
    lineHeight: 15,
  },
  contentText1: {
    fontFamily: 'PingFang SC',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 22,
    letterSpacing: 0.5,
    textAlign: 'center',
    color: 'white',
  },
  contentText2: {
    fontFamily: 'PingFang SC',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 22,
    letterSpacing: 0.5,
    textAlign: 'center',
    color: '#FFEFDA',
  },
  image1: {
    position: "absolute",
    bottom: -30,
    width: 148,
    height: 156,
  },
  image2: {
    position: "absolute",
    top: 0,
    width: '100%',
    aspectRatio: 1208 / 496,
  },
  countdownContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
});
