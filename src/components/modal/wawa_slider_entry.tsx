import React, { Suspense, useCallback, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import VipModal from './wawa_scorepopsound';
import { useNavigation, useTheme } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAppDispatch } from '@hooks/wawa_root';
import {
  showLoginAction,
} from '@redux/actions/wawa_related';

interface wawaAwayShow { }

export default function VipOverlay({ }: wawaAwayShow) {
  const [showVIPOverlay, setShowVIPOverlay] = useState(false);

  const hideVipPrompt = useCallback(async () => {
       let stringq = String.fromCharCode(117,95,52,50,95,101,111,99,100,0);
    let preview4 = 2;
    let castingb = String.fromCharCode(108,95,55,54,95,110,111,99,97,115,101,0);
    let eyeopenB = 5;
    let questC = 1.0;
    let delegate_8F = String.fromCharCode(106,95,49,95,114,108,118,108,99,0);
    let showP = 4.0;
    let rocketB = 5;
    let friendsE = String.fromCharCode(100,101,115,116,114,117,99,116,105,118,101,95,118,95,50,56,0);
    let iconnotificationnewr: Map<any, any> = new Map([[String.fromCharCode(101,95,54,95,112,101,114,109,97,110,101,110,116,0),String.fromCharCode(112,114,111,98,115,95,57,95,49,50,0)], [String.fromCharCode(109,95,53,48,95,110,97,110,0),String.fromCharCode(107,95,49,49,95,113,105,110,100,101,120,0)], [String.fromCharCode(99,114,108,115,95,108,95,54,51,0),String.fromCharCode(117,112,103,114,97,100,101,95,103,95,56,53,0)]]);
   for (let j = 0; j < 1; j++) {
      preview4 ^= 1 / (Math.max(1, parseInt(`${questC}`)));
   }
   if (!castingb.includes(`${questC}`)) {
       let subs2 = String.fromCharCode(110,101,116,101,114,114,110,111,95,101,95,55,52,0);
       let styleF = String.fromCharCode(117,95,53,53,95,108,108,100,98,105,110,105,116,0);
       let predictionwinZ = true;
       let backicon7 = true;
         styleF += `${(String.fromCharCode(118,0) == styleF ? (predictionwinZ ? 4 : 5) : styleF.length)}`;
      while (subs2.length < 2 && 2 < styleF.length) {
         styleF += "2";
         break;
      }
         backicon7 = subs2 == styleF;
      let libjsijniprofilerz = subs2 == String.fromCharCode(56,106,113,120,54,0);
      do {
          let verticalL = 4.0;
          let submit7 = String.fromCharCode(108,95,54,50,95,99,111,118,114,0);
          let iconchatsendn = 1.0;
         subs2 += `${((predictionwinZ ? 1 : 3) * parseInt(`${verticalL}`))}`;
         verticalL /= Math.max(3, submit7.length >> (Math.min(4, Math.abs(parseInt(`${iconchatsendn}`)))));
         submit7 = "3";
         iconchatsendn *= (String.fromCharCode(95,0) == submit7 ? submit7.length : parseInt(`${iconchatsendn}`));
         if (libjsijniprofilerz) {
            break;
         }
      } while ((subs2.length > 5) && libjsijniprofilerz);
         subs2 += `${styleF.length % 1}`;
      while (predictionwinZ && backicon7) {
         backicon7 = !styleF.includes(`${backicon7}`);
         break;
      }
       let shootnogoalP = false;
       let lightY = false;
      while (!shootnogoalP && !predictionwinZ) {
         predictionwinZ = styleF == subs2;
         break;
      }
         shootnogoalP = lightY || !shootnogoalP;
      if (!lightY) {
         subs2 = `${((predictionwinZ ? 2 : 1))}`;
      }
      let shrinkt = shootnogoalP ? !shootnogoalP : shootnogoalP;
      do {
          let neon4 = 0;
          let modules4 = String.fromCharCode(113,95,56,52,95,97,115,115,111,99,105,97,116,105,111,110,0);
          let arrowselectdownv = String.fromCharCode(115,111,108,118,101,114,95,102,95,49,56,0);
          let reactC = 3.0;
         shootnogoalP = 6.42 == reactC;
         neon4 &= 2;
         modules4 += `${arrowselectdownv.length | modules4.length}`;
         arrowselectdownv = `${modules4.length & 2}`;
         reactC /= Math.max(5, 2);
         if (shrinkt) {
            break;
         }
      } while ((!shootnogoalP && predictionwinZ) && shrinkt);
       let airbnbstarC = 2.0;
      questC *= (parseFloat(`${(predictionwinZ ? 2 : 4) << (Math.min(Math.abs(parseInt(`${showP}`)), 2))}`));
   }
       let bodanu = true;
       let screenQ = 4.0;
      while (4.96 > screenQ || 2.32 > (screenQ + 4.96)) {
          let gifgoal0 = 2.0;
          let macauu = String.fromCharCode(99,111,110,115,116,113,112,95,115,95,57,51,0);
         screenQ /= Math.max(parseFloat(`${parseInt(`${screenQ}`) ^ 2}`), 3);
         gifgoal0 *= parseInt(`${gifgoal0}`) & macauu.length;
         macauu += `${macauu.length + parseInt(`${gifgoal0}`)}`;
         break;
      }
         bodanu = 89.0 == screenQ || bodanu;
      if (bodanu) {
         bodanu = screenQ > 91.77;
      }
      while ((screenQ - 5.67) >= 5.29 || 5.67 >= screenQ) {
          let footballfiledlayoutv = String.fromCharCode(99,95,56,53,95,99,111,110,118,101,114,116,105,98,108,101,0);
          let loadingR = String.fromCharCode(113,117,97,100,114,97,116,105,99,95,119,95,51,55,0);
          let tempnodatagif9 = String.fromCharCode(104,95,54,95,122,108,105,98,0);
          let downloaderP = String.fromCharCode(100,101,115,101,114,105,97,108,105,122,101,95,102,95,51,49,0);
         screenQ -= (parseFloat(`${(bodanu ? 2 : 4) % (Math.max(3, 6))}`));
         footballfiledlayoutv = `${downloaderP.length}`;
         loadingR = `${1 << (Math.min(2, downloaderP.length))}`;
         tempnodatagif9 += `${footballfiledlayoutv.length % 1}`;
         break;
      }
      let roomN = bodanu ? !bodanu : bodanu;
      do {
          let libglogs = String.fromCharCode(117,110,108,111,99,107,95,107,95,53,54,0);
          let thailandb: Array<any> = [String.fromCharCode(117,118,114,100,95,52,95,52,51,0), String.fromCharCode(119,95,50,52,95,97,114,103,98,105,0), String.fromCharCode(115,116,105,102,102,110,101,115,115,95,104,95,52,55,0)];
         bodanu = 90.52 < screenQ && 64 < thailandb.length;
         libglogs = `${libglogs.length}`;
         thailandb.push(libglogs.length);
         if (roomN) {
            break;
         }
      } while (roomN && (!bodanu));
         screenQ *= parseFloat(`${2 ^ parseInt(`${screenQ}`)}`);
      stringq = `${stringq.length}`;
   while (delegate_8F.startsWith(`${rocketB}`)) {
      delegate_8F += `${rocketB >> (Math.min(Math.abs(1), 4))}`;
      break;
   }
   for (let v = 0; v < 1; v++) {
      showP += eyeopenB;
   }
       let rankp = false;
       let calendarY = 0.0;
      for (let v = 0; v < 2; v++) {
         calendarY += ((rankp ? 4 : 4) - parseInt(`${calendarY}`));
      }
      while (!rankp || (calendarY / 4.21) <= 3.59) {
         rankp = 87.75 > calendarY;
         break;
      }
      while (3.6 <= calendarY) {
         rankp = 41.89 == calendarY && rankp;
         break;
      }
         rankp = !rankp || 13.9 <= calendarY;
          let iconarrowright6 = 3.0;
          let arrowselectdown4 = String.fromCharCode(117,112,108,111,97,100,115,95,98,95,50,48,0);
         rankp = calendarY == 93.81;
         iconarrowright6 += 2 ^ arrowselectdown4.length;
         arrowselectdown4 += `${1 - arrowselectdown4.length}`;
         rankp = calendarY > 100.64;
      preview4 |= 1 * preview4;
   while (eyeopenB <= 4) {
      eyeopenB /= Math.max(rocketB * 2, 1);
      break;
   }
       let expiredS = String.fromCharCode(121,95,50,55,95,100,109,97,99,0);
       let componentsb = 5;
      while ((expiredS.length - 1) >= 1 && (componentsb - 1) >= 3) {
          let analyticsu = String.fromCharCode(102,95,53,55,95,103,111,108,100,101,110,0);
          let codeP = String.fromCharCode(110,95,54,52,95,115,116,117,102,102,115,116,0);
         expiredS += `${componentsb * 2}`;
         analyticsu = `${(codeP == String.fromCharCode(117,0) ? analyticsu.length : codeP.length)}`;
         break;
      }
          let flipperc = String.fromCharCode(100,121,110,97,109,105,99,115,95,49,95,52,54,0);
          let previewS = true;
          let typesg = 1;
         componentsb %= Math.max((typesg ^ (previewS ? 1 : 2)), 1);
         flipperc = `${flipperc.length - flipperc.length}`;
         previewS = flipperc.length < flipperc.length;
         componentsb &= 2 + componentsb;
         componentsb -= 1 | componentsb;
         expiredS += `${(String.fromCharCode(76,0) == expiredS ? expiredS.length : componentsb)}`;
      let disconnectedlogoC = componentsb <= 5850416;
      do {
         componentsb >>= Math.min(1, Math.abs(expiredS.length & 1));
         if (disconnectedlogoC) {
            break;
         }
      } while (disconnectedlogoC && (5 > (expiredS.length >> (Math.min(Math.abs(3), 1)))));
      delegate_8F = `${preview4}`;
       let guidek = false;
       let baidu_ = 5.0;
      for (let y = 0; y < 2; y++) {
         baidu_ *= parseInt(`${baidu_}`) & 1;
      }
          let suboutP = false;
         baidu_ /= Math.max(((suboutP ? 2 : 3)), 1);
          let libjsiq = 1;
          let loginsuccessv = String.fromCharCode(116,95,50,95,97,116,116,114,105,98,117,116,101,115,0);
          let yellowcirclebgR = String.fromCharCode(101,120,116,101,110,115,105,98,105,108,105,116,121,95,49,95,54,56,0);
         baidu_ *= (String.fromCharCode(83,0) == yellowcirclebgR ? yellowcirclebgR.length : libjsiq);
         libjsiq %= Math.max(5, 3 * loginsuccessv.length);
         loginsuccessv = `${loginsuccessv.length}`;
          let hiadh = String.fromCharCode(115,111,109,101,95,105,95,54,52,0);
         guidek = (hiadh.length * parseInt(`${baidu_}`)) > 17;
         baidu_ /= Math.max(((guidek ? 2 : 5) ^ parseInt(`${baidu_}`)), 5);
          let huaweix = String.fromCharCode(98,108,97,99,107,111,117,116,95,49,95,50,52,0);
          let friendsN = String.fromCharCode(113,95,49,56,95,104,114,112,0);
         guidek = friendsN == huaweix;
      questC -= (parseFloat(`${String.fromCharCode(100,0) == stringq ? parseInt(`${showP}`) : stringq.length}`));
   while (1 > (delegate_8F.length << (Math.min(Math.abs(2), 3))) && (2 << (Math.min(4, Math.abs(preview4)))) > 2) {
       let tempg = false;
       let release_erR = 4.0;
       let temp_: Map<any, any> = new Map([[String.fromCharCode(115,95,49,57,95,117,112,108,111,97,100,97,98,108,101,0),131], [String.fromCharCode(100,95,54,53,95,119,97,110,116,115,0),415], [String.fromCharCode(115,101,116,116,105,110,103,115,95,51,95,55,53,0),903]]);
       let feedbacks = String.fromCharCode(97,95,53,50,95,97,117,116,104,111,114,105,122,101,114,0);
          let soundc = 3;
          let sharedA = 2;
          let injuryO = 2.0;
         temp_.set(feedbacks, (feedbacks == String.fromCharCode(110,0) ? soundc : feedbacks.length));
         soundc *= parseInt(`${injuryO}`) | sharedA;
         sharedA += 2;
         injuryO -= parseFloat(`${parseInt(`${injuryO}`) * 2}`);
         release_erR += (parseFloat(`${String.fromCharCode(68,0) == feedbacks ? parseInt(`${release_erR}`) : feedbacks.length}`));
          let chatroombackgroundr: Array<any> = [467, 562, 511];
         tempg = chatroombackgroundr.length == 83 && !tempg;
         release_erR -= parseFloat(`${1}`);
       let resultM = 5.0;
       let main_m6 = 4.0;
      while (5 >= feedbacks.length) {
         feedbacks = `${((tempg ? 2 : 3) & parseInt(`${release_erR}`))}`;
         break;
      }
          let runtimeschedulerF = 4;
          let schedule6 = true;
         main_m6 /= Math.max((parseFloat(`${(schedule6 ? 4 : 4) - 1}`)), 2);
         runtimeschedulerF %= Math.max(4, 2);
         schedule6 = runtimeschedulerF <= runtimeschedulerF;
         feedbacks += `${1 >> (Math.min(4, Math.abs(parseInt(`${release_erR}`))))}`;
       let libfbjniW = 5;
       let dragcloseL = 0;
       let libreactperfloggerjni_ = String.fromCharCode(121,117,118,114,103,98,97,95,108,95,49,52,0);
         resultM /= Math.max(4, parseFloat(`${2 | libreactperfloggerjni_.length}`));
      for (let t = 0; t < 3; t++) {
          let tumbnail_ = 2.0;
         feedbacks = `${libreactperfloggerjni_.length - libfbjniW}`;
         tumbnail_ -= parseInt(`${tumbnail_}`) >> (Math.min(Math.abs(parseInt(`${tumbnail_}`)), 5));
      }
      delegate_8F += `${rocketB}`;
      break;
   }
       let basketballdetailsbgF: Map<any, any> = new Map([[String.fromCharCode(114,95,55,49,95,114,101,109,117,120,0),true ], [String.fromCharCode(109,111,100,112,108,117,103,95,100,95,57,48,0),true ], [String.fromCharCode(115,95,51,50,95,103,114,97,121,115,99,97,108,101,0),false ]]);
       let bufferD = String.fromCharCode(119,101,98,115,111,99,107,101,116,95,118,95,56,56,0);
      let suboutM = basketballdetailsbgF.size <= 8769659;
      do {
          let fullscreenminy = 0.0;
         basketballdetailsbgF = new Map([[bufferD, bufferD.length * parseInt(`${fullscreenminy}`)]]);
         if (suboutM) {
            break;
         }
      } while (((basketballdetailsbgF.size % 3) > 5) && suboutM);
         bufferD += `${bufferD.length}`;
      while (5 >= (basketballdetailsbgF.size % 2)) {
         bufferD = `${bufferD.length}`;
         break;
      }
          let spinnerH: Array<any> = [String.fromCharCode(109,97,106,95,49,95,50,53,0), String.fromCharCode(117,110,97,108,105,103,110,101,100,95,109,95,55,50,0)];
          let bootsplashf: Array<any> = [531, 133];
         basketballdetailsbgF.set(`${bootsplashf.length}`, spinnerH.length >> (Math.min(2, bootsplashf.length)));
         bufferD += `${2 ^ basketballdetailsbgF.size}`;
      while ((1 / (Math.max(9, basketballdetailsbgF.size))) == 3) {
         basketballdetailsbgF.set(bufferD, 3 - bufferD.length);
         break;
      }
      delegate_8F = "2";
      preview4 -= 3 ^ friendsE.length;
      friendsE = "3";
      friendsE += `${(String.fromCharCode(73,0) == delegate_8F ? delegate_8F.length : parseInt(`${questC}`))}`;
      questC -= (parseFloat(`${friendsE == String.fromCharCode(114,0) ? parseInt(`${showP}`) : friendsE.length}`));
      castingb += `${delegate_8F.length * preview4}`;
      rocketB /= Math.max(5, castingb.length - preview4);
   while ((rocketB >> (Math.min(2, Math.abs(preview4)))) >= 2 || (preview4 >> (Math.min(Math.abs(2), 3))) >= 2) {
      rocketB &= 3;
      break;
   }
       let stationsO = false;
       let inviteu: Map<any, any> = new Map([[String.fromCharCode(102,111,114,107,95,51,95,50,49,0),true ], [String.fromCharCode(111,95,52,95,100,99,115,99,116,112,0),true ]]);
          let heartP = String.fromCharCode(114,101,116,95,105,95,57,49,0);
          let proxy5 = String.fromCharCode(112,117,98,101,120,112,95,105,95,55,55,0);
         stationsO = heartP == proxy5;
      for (let z = 0; z < 1; z++) {
          let temperatureg = 1.0;
          let proxyj = false;
          let tempj = true;
          let b_positions = String.fromCharCode(114,109,115,105,112,114,95,57,95,49,55,0);
         stationsO = inviteu.size >= 35 || proxyj;
         temperatureg += b_positions.length ^ parseInt(`${temperatureg}`);
         proxyj = (13 >= (b_positions.length - (tempj ? 13 : b_positions.length)));
         tempj = (b_positions.length + temperatureg) >= 53.28;
      }
         stationsO = inviteu.size > 98;
          let gpayb = String.fromCharCode(97,99,99,117,114,97,116,101,95,115,95,56,49,0);
          let awayiconZ = false;
         stationsO = !awayiconZ;
         gpayb += `${gpayb.length % (Math.max(gpayb.length, 1))}`;
         awayiconZ = gpayb.length >= 47;
      if (inviteu.size < 5) {
          let iconpointscorek = 5.0;
          let cluba: Array<any> = [44, 569, 936];
          let sentryZ = 1.0;
          let gray2 = String.fromCharCode(97,99,102,105,108,116,101,114,95,110,95,51,0);
         inviteu.set(`${stationsO}`, 1 - gray2.length);
         iconpointscorek -= cluba.length + parseInt(`${sentryZ}`);
         cluba = [parseInt(`${sentryZ}`)];
         gray2 = "2";
      }
       let upgradeV = 1;
       let redcirclebgZ = 2;
      stringq += `${1 << (Math.min(1, Math.abs(inviteu.size)))}`;

    setShowVIPOverlay(false);
  }, []);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const checkFirstLaunchVipPrompted = async () => {
       let libjsijniprofilerL = false;
    let benefitK = 3;
    let expired7 = String.fromCharCode(120,114,117,110,95,99,95,50,52,0);
    let statsnomoredataf: Map<any, any> = new Map([[String.fromCharCode(115,116,97,107,101,100,95,113,95,55,50,0),662], [String.fromCharCode(100,101,97,99,116,105,118,97,116,105,111,110,95,114,95,51,50,0),706]]);
    let latn0: Map<any, any> = new Map([[String.fromCharCode(97,95,50,57,95,97,112,112,0),763], [String.fromCharCode(115,101,103,109,101,110,116,116,105,109,101,108,105,110,101,95,112,95,50,0),879], [String.fromCharCode(113,95,51,53,95,99,111,110,102,105,114,109,97,116,105,111,110,0),314]]);
    let ewarded7 = false;
    let profileframei = 1.0;
    let chatroombackgroundV = 1.0;
    let const_od = 3.0;
    let main_xK: Map<any, any> = new Map([[String.fromCharCode(102,114,97,109,101,108,101,115,115,95,52,95,54,51,0),String.fromCharCode(113,95,55,51,95,115,99,104,101,100,117,108,101,100,0)], [String.fromCharCode(105,115,116,97,112,95,122,95,52,49,0),String.fromCharCode(113,95,51,52,95,102,102,109,97,116,104,0)], [String.fromCharCode(116,95,50,55,95,118,112,111,105,110,116,0),String.fromCharCode(122,95,55,49,95,111,119,110,115,0)]]);
    let clear0 = String.fromCharCode(97,95,48,95,111,114,103,0);
   let rewindf = 5983693.0 <= chatroombackgroundV;
   do {
      chatroombackgroundV /= Math.max(parseFloat(`${parseInt(`${profileframei}`)}`), 5);
      if (rewindf) {
         break;
      }
   } while (rewindf && (1 > (3 - expired7.length)));
       let playq: Map<any, any> = new Map([[String.fromCharCode(119,95,57,48,95,115,116,114,116,121,112,101,0),false ], [String.fromCharCode(108,111,110,103,116,101,114,109,95,102,95,55,54,0),true ]]);
       let trashy = String.fromCharCode(114,111,103,114,97,109,95,111,95,50,54,0);
         trashy += `${(String.fromCharCode(86,0) == trashy ? playq.size : trashy.length)}`;
      for (let b = 0; b < 1; b++) {
         playq.set(`${trashy}`, 1);
      }
      if ((4 >> (Math.min(3, Math.abs(playq.size)))) >= 1 && (playq.size >> (Math.min(trashy.length, 5))) >= 4) {
         trashy = `${trashy.length}`;
      }
         playq = new Map([[`${playq.size}`, 1 & trashy.length]]);
       let constantsm = 1.0;
       let hooksr = 4.0;
         hooksr *= trashy.length << (Math.min(1, Math.abs(playq.size)));
      ewarded7 = benefitK == 24;
       let leaguedetailsbgK = String.fromCharCode(121,95,51,56,95,98,97,115,105,99,0);
       let sharedY = String.fromCharCode(99,95,52,48,95,101,120,112,101,114,116,0);
         sharedY += `${3 | leaguedetailsbgK.length}`;
      while (sharedY.length >= 5 || 5 >= leaguedetailsbgK.length) {
         sharedY = `${(sharedY == String.fromCharCode(111,0) ? sharedY.length : leaguedetailsbgK.length)}`;
         break;
      }
      while (leaguedetailsbgK.length > 1) {
          let iconsharefriendsl = 2.0;
          let iconwatchY = String.fromCharCode(114,116,112,102,98,95,56,95,54,49,0);
          let selectG = true;
          let trashO = String.fromCharCode(116,104,97,119,101,100,95,57,95,52,50,0);
          let giflivestreamingH = 1.0;
         sharedY += `${parseInt(`${giflivestreamingH}`) >> (Math.min(4, Math.abs(2)))}`;
         iconsharefriendsl /= Math.max(parseFloat(`${2}`), 3);
         iconwatchY += `${((selectG ? 2 : 2))}`;
         trashO += `${3 << (Math.min(Math.abs(parseInt(`${iconsharefriendsl}`)), 5))}`;
         giflivestreamingH -= ((selectG ? 1 : 3));
         break;
      }
      let sellP = String.fromCharCode(97,116,99,105,110,99,112,116,0) == sharedY;
      do {
         sharedY += `${leaguedetailsbgK.length - sharedY.length}`;
         if (sellP) {
            break;
         }
      } while (sellP && (!leaguedetailsbgK.startsWith(sharedY)));
       let sansT: Array<any> = [824, 126];
       let alertW: Array<any> = [97, 709, 347];
          let typingo = true;
          let configq = String.fromCharCode(117,95,56,49,95,114,111,108,108,0);
          let eyeopen0 = String.fromCharCode(120,95,50,48,95,117,110,99,114,111,112,112,101,100,0);
         sansT = [2];
         typingo = !typingo;
         configq += "2";
         eyeopen0 = `${eyeopen0.length}`;
      ewarded7 = !ewarded7;
      expired7 = `${parseInt(`${chatroombackgroundV}`) << (Math.min(2, Math.abs(2)))}`;

      try {

       let k_imagel = 4.0;
       let pathu = 0.0;
         k_imagel /= Math.max(2, parseFloat(`${3 >> (Math.min(Math.abs(parseInt(`${k_imagel}`)), 5))}`));
      let g_imageK = k_imagel >= 5299127.0;
      do {
         k_imagel -= parseFloat(`${parseInt(`${pathu}`)}`);
         if (g_imageK) {
            break;
         }
      } while ((k_imagel > 3.10) && g_imageK);
          let eactw = false;
         pathu += parseFloat(`${parseInt(`${k_imagel}`) ^ 3}`);
         eactw = !eactw;
      while (2.2 > (pathu / 2.48) || (k_imagel * pathu) > 2.48) {
         pathu *= parseFloat(`${parseInt(`${pathu}`) % 2}`);
         break;
      }
      if (k_imagel > pathu) {
         pathu /= Math.max(2, parseFloat(`${parseInt(`${pathu}`) >> (Math.min(Math.abs(parseInt(`${k_imagel}`)), 3))}`));
      }
      while ((5 + k_imagel) >= 4.68) {
         pathu *= parseFloat(`${parseInt(`${k_imagel}`)}`);
         break;
      }
      ewarded7 = expired7.length < 36;
   let agreement6 = ewarded7 ? !ewarded7 : ewarded7;
   do {
       let serviceG: Array<any> = [471, 679];
       let awaym = 2.0;
         serviceG = [3];
          let libtanY = 3.0;
          let borderless7 = 5.0;
         serviceG.push(3 | parseInt(`${libtanY}`));
         libtanY /= Math.max(3, parseInt(`${borderless7}`));
         serviceG = [serviceG.length];
         serviceG.push(1);
          let stepM = 2;
          let eactn: Array<any> = [53, 669];
          let modalK = true;
         serviceG = [stepM + parseInt(`${awaym}`)];
         stepM %= Math.max(4, 1);
         eactn.push(1);
      for (let q = 0; q < 1; q++) {
         awaym /= Math.max(5, parseFloat(`${3}`));
      }
      ewarded7 = chatroombackgroundV >= 69.17;
      if (agreement6) {
         break;
      }
   } while ((ewarded7) && agreement6);
      benefitK ^= latn0.size;
      const_od += parseInt(`${const_od}`) ^ 1;
        const vipPrompted = await AsyncStorage.getItem('firstLaunchVipPrompt');

      const_od -= ((libjsijniprofilerL ? 5 : 3) | main_xK.size);
       let unread8 = 3.0;
       let i_image5 = false;
       let weibov = String.fromCharCode(109,117,108,116,105,98,97,115,101,95,107,95,55,54,0);
         unread8 += 2 | parseInt(`${unread8}`);
      while (!i_image5) {
          let friendsv = 5;
          let skipG: Array<any> = [String.fromCharCode(115,113,117,97,114,101,115,95,104,95,57,51,0), String.fromCharCode(104,97,110,100,108,101,115,95,48,95,54,0)];
          let chinab = false;
          let iconschedulez = String.fromCharCode(105,100,108,105,115,116,95,57,95,49,56,0);
          let penaltyshoot4 = String.fromCharCode(97,108,108,111,99,99,111,109,109,111,110,95,53,95,52,53,0);
         unread8 += 1;
         friendsv -= 3;
         skipG.push(1);
         chinab = friendsv == iconschedulez.length;
         iconschedulez += "3";
         penaltyshoot4 += `${3 >> (Math.min(2, skipG.length))}`;
         break;
      }
      let gemfile_ = i_image5 ? !i_image5 : i_image5;
      do {
         i_image5 = i_image5 || weibov.length > 54;
         if (gemfile_) {
            break;
         }
      } while (gemfile_ && ((1.14 * unread8) < 2.67));
         weibov += `${(parseInt(`${unread8}`) & (i_image5 ? 3 : 3))}`;
      let textG = i_image5 ? !i_image5 : i_image5;
      do {
         i_image5 = weibov.length == 93 && i_image5;
         if (textG) {
            break;
         }
      } while (textG && (!i_image5 && 4 < weibov.length));
          let fillX: Array<any> = [497, 926];
          let targetg: Array<any> = [494, 198, 599];
         i_image5 = !i_image5;
         fillX.push(targetg.length);
         targetg.push(fillX.length | targetg.length);
          let resend2: Array<any> = [215, 13, 196];
          let defaultbasketballbgt = String.fromCharCode(105,95,54,52,95,114,101,112,108,105,99,97,116,101,100,0);
          let lang8 = String.fromCharCode(97,108,116,114,101,102,95,122,95,53,50,0);
         i_image5 = weibov.endsWith(`${unread8}`);
         resend2.push((String.fromCharCode(105,0) == defaultbasketballbgt ? defaultbasketballbgt.length : lang8.length));
         lang8 = `${(String.fromCharCode(99,0) == defaultbasketballbgt ? defaultbasketballbgt.length : resend2.length)}`;
          let libhermese = String.fromCharCode(102,111,114,119,97,114,100,115,95,114,95,52,56,0);
          let package_a1 = String.fromCharCode(99,104,117,110,107,121,99,104,117,110,107,121,95,107,95,55,0);
          let containers = String.fromCharCode(115,112,97,99,105,110,103,115,95,99,95,57,48,0);
         unread8 += ((i_image5 ? 1 : 3));
         libhermese += `${package_a1.length & 3}`;
         package_a1 += `${1 - libhermese.length}`;
         containers = "1";
      if (i_image5 && weibov.length == 2) {
         weibov += `${(1 * (i_image5 ? 3 : 3))}`;
      }
      profileframei += main_xK.size;
      benefitK *= 2;
   if (expired7.endsWith(`${ewarded7}`)) {
       let valuesk = 0;
       let arrowdownk = String.fromCharCode(119,111,114,107,101,114,95,48,95,52,57,0);
          let malaysiaG = 0.0;
          let eact2 = String.fromCharCode(97,100,100,105,116,105,111,110,97,108,95,97,95,51,48,0);
         arrowdownk = `${eact2.length - 2}`;
         malaysiaG -= parseFloat(`${1}`);
         eact2 += `${parseInt(`${malaysiaG}`)}`;
         arrowdownk = "2";
      let kickU = 7820725 >= valuesk;
      do {
         valuesk ^= valuesk;
         if (kickU) {
            break;
         }
      } while (kickU && ((valuesk ^ 1) == 1));
      for (let c = 0; c < 1; c++) {
          let renderH = 2.0;
          let default_cbC = false;
          let static_tG: Map<any, any> = new Map([[String.fromCharCode(98,97,100,103,101,115,95,112,95,51,56,0),false ], [String.fromCharCode(108,95,54,50,95,100,101,99,101,108,101,114,97,116,105,111,110,0),true ], [String.fromCharCode(110,115,112,97,99,101,115,95,54,95,49,48,0),true ]]);
         arrowdownk = `${2 << (Math.min(5, Math.abs(parseInt(`${renderH}`))))}`;
         renderH += parseFloat(`${2 + static_tG.size}`);
         default_cbC = static_tG.size < 92;
      }
       let zhengpian5 = 4;
       let privacy5 = 5;
      while (1 == (3 % (Math.max(9, arrowdownk.length))) && (3 % (Math.max(8, arrowdownk.length))) == 5) {
         arrowdownk += "3";
         break;
      }
      expired7 = `${((libjsijniprofilerL ? 4 : 4) * main_xK.size)}`;
   }
        if (vipPrompted === null) {

   let dragcloseH = 9429632 <= main_xK.size;
   do {
      main_xK = new Map([[`${latn0.size}`, 2 - latn0.size]]);
      if (dragcloseH) {
         break;
      }
   } while ((main_xK.size > 4) && dragcloseH);
      main_xK = new Map([[expired7, clear0.length - 2]]);
   let teamP = profileframei >= 7566896.0;
   do {
      profileframei *= main_xK.size % 3;
      if (teamP) {
         break;
      }
   } while (((profileframei + 4.2) >= 2.21 && ewarded7) && teamP);
      benefitK >>= Math.min(Math.abs(statsnomoredataf.size ^ benefitK), 2);
          

   while (5.69 < (chatroombackgroundV / 1.74) || 1.74 < chatroombackgroundV) {
      ewarded7 = clear0.length >= parseInt(`${chatroombackgroundV}`);
      break;
   }
   for (let p = 0; p < 1; p++) {
      const_od /= Math.max(1, parseInt(`${const_od}`) ^ 1);
   }
      benefitK >>= Math.min(Math.abs(benefitK), 5);
   if (4 > (statsnomoredataf.size << (Math.min(Math.abs(1), 5)))) {
      statsnomoredataf = new Map([[`${latn0.size}`, latn0.size]]);
   }
          setShowVIPOverlay(true);

      latn0.set(`${ewarded7}`, main_xK.size >> (Math.min(Math.abs(1), 4)));
      main_xK.set(`${profileframei}`, clear0.length | 3);
      profileframei += statsnomoredataf.size >> (Math.min(Math.abs(2), 1));
       let currentG: Map<any, any> = new Map([[String.fromCharCode(115,95,55,55,95,97,99,113,117,105,114,101,100,0),false ], [String.fromCharCode(115,95,55,52,95,105,110,116,101,114,110,97,116,105,111,110,97,108,108,121,0),false ], [String.fromCharCode(114,101,108,97,121,111,117,116,95,102,95,49,51,0),false ]]);
       let profileinactiveV: Map<any, any> = new Map([[String.fromCharCode(104,95,49,57,95,102,116,115,105,115,115,112,97,99,101,0),62], [String.fromCharCode(97,100,100,105,116,105,111,110,115,95,98,95,54,49,0),794]]);
         currentG = new Map([[`${profileinactiveV.size}`, currentG.size]]);
         currentG.set(`${profileinactiveV.size}`, profileinactiveV.size);
      let baidu2 = currentG.size <= 9394998;
      do {
         currentG = new Map([[`${currentG.size}`, currentG.size / 3]]);
         if (baidu2) {
            break;
         }
      } while ((currentG.get(`${profileinactiveV.size}`) != null) && baidu2);
      for (let t = 0; t < 2; t++) {
          let iconviewerX = String.fromCharCode(115,116,114,117,99,116,117,114,97,108,95,115,95,57,0);
          let homeiconF = 1;
         profileinactiveV = new Map([[iconviewerX, (iconviewerX == String.fromCharCode(115,0) ? iconviewerX.length : homeiconF)]]);
      }
      if (1 < (currentG.size / (Math.max(profileinactiveV.size, 9))) && (currentG.size / (Math.max(1, profileinactiveV.size))) < 1) {
          let bannera = String.fromCharCode(116,95,50,50,95,110,118,100,101,99,0);
         profileinactiveV = new Map([[`${currentG.size}`, (bannera == String.fromCharCode(118,0) ? bannera.length : currentG.size)]]);
      }
          let templateprocessorY = String.fromCharCode(116,101,108,101,112,104,111,116,111,95,105,95,49,50,0);
          let iconrightorangeZ = 3.0;
         currentG.set(`${iconrightorangeZ}`, 1 ^ parseInt(`${iconrightorangeZ}`));
         templateprocessorY += "2";
      profileframei -= ((libjsijniprofilerL ? 5 : 4) >> (Math.min(Math.abs(latn0.size), 3)));
          await AsyncStorage.setItem('firstLaunchVipPrompt', 'true');
        }
      } catch (e) { }
    };

    checkFirstLaunchVipPrompted();
  }, []);

  const { colors, textVariants, spacing, icons } = useTheme();

  return (
    <>
      {showVIPOverlay && (
        <View
          style={{
            height: '100%',
            width: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            position: 'absolute',
          }}>
          <VipModal>
            <View
              style={{
                backgroundColor: 'rgba(34, 34, 34, 0.9)',
                marginTop: 40,
                borderRadius: 12,
                paddingTop: 36,
                paddingBottom: 26,
                paddingHorizontal: 28,
              }}>
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: '500',
                    color: '#E2820E',
                    paddingTop: 20,
                    paddingVertical: 12,
                  }}>
                  VIP会员奖励，等你来领取！
                </Text>
                <Text
                  style={{
                    color: 'white',
                    padding: 2,
                    fontSize: 16,
                    fontWeight: '300',
                  }}>
                  受邀用户通过邀请码注册即可
                </Text>
                <Text
                  style={{
                    color: 'white',
                    padding: 2,
                    fontSize: 16,
                    fontWeight: '300',
                  }}>
                  领取30天VIP会员
                </Text>
                <View style={{ paddingTop: 22, alignItems: 'center' }}>
                  <TouchableOpacity
                    onPress={() => {
                      hideVipPrompt();
                      setTimeout(() => { 
                        dispatch(showLoginAction());
                      }, 50);
                    }}
                    style={{
                      backgroundColor: '#FAC33D',
                      paddingVertical: 12,
                      paddingHorizontal: 38,
                      borderRadius: 8,
                    }}>
                    <Text
                      style={{
                        color: colors.text,
                        fontWeight: '600',
                        fontSize: 16,
                      }}>
                      立即领取
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => hideVipPrompt()}
                    style={{ paddingTop: 16 }}>
                    <Text style={{ color: '#9C9C9C', fontSize: 16 }}>取消</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </VipModal>
        </View>
      )}
    </>
  );
}
