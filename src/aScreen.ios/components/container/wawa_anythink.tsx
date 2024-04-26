

class DownarrowCollectionDownGiflive {
    static predictionbuttonIncident = (contents: [number], key: number, hasEmoji: boolean) => {
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
import { useFocusEffect, useNavigation, useTheme } from "@react-navigation/native";
import React, { useCallback, useState } from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import FastImage from "react-native-fast-image";
import { wawaSellProfileinactive } from "@type/wawa_gradlew";
import Logo from '@static/images/matchSmall.svg';
import { useAppDispatch } from "@hooks/wawa_root";
import { playVod } from "@redux/actions/wawa_indicator";
import { VodCommentBox } from "../vodComment";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface wawaAwayShow {
  vod: wawaSellProfileinactive;
  width: number;
  imgRatio: number;
  isSlide: boolean;
}

export const YingPingContainer = ({ vod, width, imgRatio, isSlide }: wawaAwayShow) => {
  const { colors, textVariants, spacing } = useTheme();
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  const [comments, setComments] = useState<any[]>([]);
  const [localComments, setLocalComments] = useState<any[]>([]);
  const pTagRegex = /(<p>|<\/p>)/g;

  const handleOnPress = () => {
       let controlm = 4;
    let awayl: Map<any, any> = new Map([[String.fromCharCode(103,95,53,57,95,99,97,114,116,0),473], [String.fromCharCode(106,95,57,56,95,98,101,104,105,110,100,0),706], [String.fromCharCode(111,95,53,57,95,105,110,105,116,97,108,105,122,101,0),231]]);
    let profileactive_ = 2.0;
    let statsQ = String.fromCharCode(105,95,54,54,95,117,101,117,101,0);
    let eighteenF = String.fromCharCode(114,95,50,50,95,103,117,97,114,97,110,116,101,101,115,0);
    let orangeK = 4.0;
    let smallsoundM = true;
    let yellowtoredG: Array<any> = [125, 509];
    let tempnodatagif_ = String.fromCharCode(115,95,52,50,95,116,101,97,114,100,111,119,110,0);
    let stationsg = 3.0;
      eighteenF = `${3 >> (Math.min(Math.abs(controlm), 2))}`;
   while (3 < statsQ.length) {
      eighteenF = `${eighteenF.length & parseInt(`${profileactive_}`)}`;
      break;
   }
   while (controlm < statsQ.length) {
       let fast_: Array<any> = [980, 371, 523];
       let yellowtored_ = String.fromCharCode(99,95,51,48,95,118,97,114,109,97,115,107,0);
       let telegramx: Array<any> = [12, 518];
       let hooksx = String.fromCharCode(112,114,101,115,101,116,95,56,95,49,49,0);
         fast_.push(2 << (Math.min(4, telegramx.length)));
          let smallorangemanq = false;
          let mbsplasha = String.fromCharCode(103,114,111,117,112,101,100,95,107,95,53,49,0);
          let r_titled = String.fromCharCode(102,101,101,100,98,97,99,107,95,106,95,55,57,0);
         yellowtored_ += `${telegramx.length}`;
         smallorangemanq = mbsplasha.length < 30;
         mbsplasha += `${r_titled.length + mbsplasha.length}`;
         r_titled += `${r_titled.length >> (Math.min(mbsplasha.length, 2))}`;
      if (telegramx.length < 1) {
         fast_ = [1 & fast_.length];
      }
         fast_ = [telegramx.length << (Math.min(yellowtored_.length, 3))];
      for (let s = 0; s < 3; s++) {
         hooksx += `${3 | telegramx.length}`;
      }
      while (telegramx.length <= 2) {
          let h_centerx = 1.0;
          let roomJ = false;
          let vnewsshares = 4.0;
          let pinit_5ux = String.fromCharCode(98,117,102,101,114,95,122,95,54,52,0);
         yellowtored_ += `${((roomJ ? 1 : 5))}`;
         h_centerx += parseInt(`${vnewsshares}`);
         roomJ = (pinit_5ux.length + parseInt(`${h_centerx}`)) <= 83;
         vnewsshares += parseFloat(`${parseInt(`${h_centerx}`)}`);
         pinit_5ux += `${pinit_5ux.length}`;
         break;
      }
      if (1 <= (fast_.length ^ yellowtored_.length) || (1 ^ yellowtored_.length) <= 4) {
         yellowtored_ = `${fast_.length % (Math.max(yellowtored_.length, 9))}`;
      }
       let iconpipexpandb: Array<any> = [710, 111];
         telegramx = [fast_.length];
      while (hooksx.length > 1) {
          let iconbellr = false;
          let baidue: Array<any> = [445, 112, 256];
          let otherQ = 1.0;
         hooksx += `${iconpipexpandb.length / 1}`;
         iconbellr = otherQ >= 21.49;
         baidue.push(baidue.length);
         otherQ *= 3 ^ parseInt(`${otherQ}`);
         break;
      }
      if ((telegramx.length + yellowtored_.length) <= 3) {
         yellowtored_ = `${yellowtored_.length | 2}`;
      }
         iconpipexpandb.push(fast_.length >> (Math.min(3, telegramx.length)));
      statsQ += `${yellowtored_.length}`;
      break;
   }
   if (!tempnodatagif_.startsWith(`${controlm}`)) {
       let stylesC = String.fromCharCode(105,95,57,50,95,115,99,101,110,101,99,117,116,0);
       let feedbackT = String.fromCharCode(111,95,53,95,99,97,108,99,108,117,108,97,116,101,0);
      if (stylesC.endsWith(`${feedbackT.length}`)) {
          let imagenetworkerr0 = String.fromCharCode(119,97,107,101,95,120,95,56,51,0);
          let rewindb = 5.0;
          let internetp = String.fromCharCode(97,95,52,48,95,102,111,108,108,111,119,101,114,115,0);
         feedbackT += `${internetp.length}`;
         imagenetworkerr0 = `${imagenetworkerr0.length}`;
         rewindb -= parseFloat(`${parseInt(`${rewindb}`)}`);
         internetp = `${3 - imagenetworkerr0.length}`;
      }
         stylesC += `${stylesC.length}`;
      let spinnerf = stylesC.length <= 8687454;
      do {
         stylesC = `${stylesC.length}`;
         if (spinnerf) {
            break;
         }
      } while ((stylesC.includes(feedbackT)) && spinnerf);
       let rootg = true;
       let canvasG = false;
         stylesC += `${feedbackT.length >> (Math.min(Math.abs(2), 1))}`;
      for (let v = 0; v < 1; v++) {
         feedbackT += `${stylesC.length}`;
      }
      tempnodatagif_ = `${yellowtoredG.length}`;
   }
   while (awayl.get(`${controlm}`) != null) {
      controlm <<= Math.min(Math.abs(controlm), 5);
      break;
   }
   if ((orangeK + eighteenF.length) > 5.16 || 3 > (eighteenF.length >> (Math.min(Math.abs(4), 3)))) {
      eighteenF += `${eighteenF.length}`;
   }
       let iconviewergifn = String.fromCharCode(121,95,57,95,118,111,108,117,109,101,0);
       let libflipperp = false;
         libflipperp = !libflipperp;
       let containerH: Array<any> = [565, 177];
       let expiredB: Array<any> = [884, 61];
      for (let u = 0; u < 3; u++) {
          let bellh: Array<any> = [239, 551, 259];
         containerH = [iconviewergifn.length];
         bellh.push(bellh.length);
      }
         containerH.push(expiredB.length | 2);
      let mode9 = String.fromCharCode(104,122,52,112,105,53,112,117,120,0) == iconviewergifn;
      do {
         iconviewergifn = `${iconviewergifn.length}`;
         if (mode9) {
            break;
         }
      } while (mode9 && (!iconviewergifn.startsWith(`${expiredB.length}`)));
      for (let n = 0; n < 3; n++) {
          let bdxadsdke = 2.0;
          let actionse = String.fromCharCode(100,95,49,52,95,108,117,116,121,117,118,0);
          let foundY = String.fromCharCode(110,101,97,114,101,114,95,115,95,55,49,0);
          let z_player1: Map<any, any> = new Map([[String.fromCharCode(116,101,120,116,117,114,101,100,115,112,95,120,95,53,55,0),String.fromCharCode(97,114,102,113,95,107,95,49,51,0)], [String.fromCharCode(102,95,52,52,95,110,111,116,105,102,105,101,100,0),String.fromCharCode(113,95,51,95,116,111,107,101,110,105,122,101,114,0)]]);
          let homeiconC = 1.0;
         libflipperp = foundY == iconviewergifn;
         bdxadsdke -= parseFloat(`${z_player1.size}`);
         actionse += `${actionse.length << (Math.min(Math.abs(2), 1))}`;
         foundY = "3";
         z_player1 = new Map([[`${z_player1.size}`, z_player1.size * 2]]);
         homeiconC *= z_player1.size * 2;
      }
      yellowtoredG = [iconviewergifn.length + 2];
   while (Array.from(awayl.values()).includes(profileactive_)) {
      profileactive_ *= 3;
      break;
   }
       let whitebellw = String.fromCharCode(106,95,51,95,102,111,108,108,111,119,115,0);
      let bottom_ = 8429018 <= whitebellw.length;
      do {
          let znewsV = false;
          let neon3 = 3.0;
          let mbsplashl = 2.0;
          let danger7: Array<any> = [556, 508, 803];
          let iconarrowrightwhiteR = String.fromCharCode(109,95,53,50,95,112,117,108,108,117,112,0);
         whitebellw = "3";
         znewsV = 72.47 == neon3;
         neon3 /= Math.max(parseFloat(`${iconarrowrightwhiteR.length << (Math.min(Math.abs(1), 3))}`), 5);
         mbsplashl -= (parseFloat(`${(znewsV ? 3 : 2) | parseInt(`${mbsplashl}`)}`));
         danger7 = [(String.fromCharCode(105,0) == iconarrowrightwhiteR ? danger7.length : iconarrowrightwhiteR.length)];
         if (bottom_) {
            break;
         }
      } while ((5 >= whitebellw.length && whitebellw == String.fromCharCode(51,0)) && bottom_);
      if (whitebellw.endsWith(`${whitebellw.length}`)) {
         whitebellw = `${whitebellw.length}`;
      }
      for (let y = 0; y < 3; y++) {
         whitebellw = `${whitebellw.length}`;
      }
      profileactive_ /= Math.max(3, controlm | 3);

    dispatch(playVod(vod));

   while (!tempnodatagif_.startsWith(`${controlm}`)) {
      controlm *= parseInt(`${orangeK}`) << (Math.min(3, Math.abs(1)));
      break;
   }
      tempnodatagif_ = "1";
       let fullO: Array<any> = [String.fromCharCode(115,112,108,105,116,116,105,110,103,95,52,95,56,55,0), String.fromCharCode(106,95,56,49,95,112,108,97,110,97,114,0), String.fromCharCode(97,100,100,98,108,107,95,57,95,55,56,0)];
       let foregrounds = 3;
       let singaporeK = String.fromCharCode(122,95,49,48,48,95,115,117,112,101,114,103,114,111,117,112,0);
      for (let m = 0; m < 3; m++) {
         singaporeK = `${fullO.length}`;
      }
         foregrounds += (singaporeK == String.fromCharCode(100,0) ? fullO.length : singaporeK.length);
      for (let r = 0; r < 1; r++) {
         singaporeK = `${3 | foregrounds}`;
      }
         fullO = [singaporeK.length];
          let e_countj: Array<any> = [107, 957];
         foregrounds >>= Math.min(e_countj.length, 2);
       let sellmathbackgroundu = String.fromCharCode(102,95,51,56,95,118,100,114,97,119,97,98,108,101,0);
      for (let g = 0; g < 1; g++) {
          let sortz = 0;
          let sharedB: Map<any, any> = new Map([[String.fromCharCode(121,95,56,57,95,115,105,110,107,115,0),42], [String.fromCharCode(97,115,115,101,114,116,105,111,110,95,55,95,49,49,0),193]]);
         foregrounds %= Math.max(2, foregrounds / (Math.max(2, 9)));
         sortz -= 2;
         sharedB = new Map([[`${sharedB.size}`, sortz >> (Math.min(Math.abs(sharedB.size), 3))]]);
      }
      let assetsT = 6075972 <= foregrounds;
      do {
         foregrounds &= (sellmathbackgroundu == String.fromCharCode(49,0) ? fullO.length : sellmathbackgroundu.length);
         if (assetsT) {
            break;
         }
      } while (assetsT && ((foregrounds << (Math.min(Math.abs(3), 5))) == 2));
       let homeiconW = 2.0;
       let libfabricjniF = 0.0;
      yellowtoredG.push(3 * foregrounds);
   let heartt = String.fromCharCode(55,52,49,110,110,97,116,106,95,110,0) == statsQ;
   do {
      statsQ += `${yellowtoredG.length - 1}`;
      if (heartt) {
         break;
      }
   } while (heartt && (4 > (statsQ.length | awayl.size)));
       let k_locks = 2.0;
         k_locks /= Math.max(2, parseInt(`${k_locks}`) | parseInt(`${k_locks}`));
      for (let p = 0; p < 2; p++) {
         k_locks /= Math.max(5, parseInt(`${k_locks}`));
      }
      while (k_locks > 3.64) {
          let libreactnativeblob4 = String.fromCharCode(97,116,101,120,105,116,95,55,95,50,48,0);
          let productP: Array<any> = [725, 310];
          let datah = 1;
          let whitesmalltickD = 2.0;
         k_locks -= parseInt(`${k_locks}`);
         libreactnativeblob4 = "2";
         productP = [productP.length];
         datah &= 3;
         whitesmalltickD += (parseFloat(`${String.fromCharCode(111,0) == libreactnativeblob4 ? datah : libreactnativeblob4.length}`));
         break;
      }
      smallsoundM = (parseInt(`${profileactive_}`) - awayl.size) <= 74;
   let recommendationO = 5750279 >= yellowtoredG.length;
   do {
       let libcrashsdk3 = String.fromCharCode(110,99,111,110,102,95,56,95,53,55,0);
       let libcrashsdkg = String.fromCharCode(117,95,50,50,95,99,97,108,99,117,108,97,116,105,110,103,0);
       let friendsj = String.fromCharCode(99,95,57,53,95,116,104,105,99,107,0);
      for (let f = 0; f < 2; f++) {
          let other9 = 4;
          let t_hashl = 2.0;
         libcrashsdk3 += `${parseInt(`${t_hashl}`) - 3}`;
         other9 >>= Math.min(4, Math.abs(other9));
         t_hashl -= parseFloat(`${other9}`);
      }
      let componentregistry0 = friendsj.length <= 8526376;
      do {
         friendsj = `${libcrashsdkg.length}`;
         if (componentregistry0) {
            break;
         }
      } while ((libcrashsdk3.length == 1) && componentregistry0);
      if (libcrashsdk3 == String.fromCharCode(115,0)) {
          let libjsijniprofilerY: Map<any, any> = new Map([[String.fromCharCode(117,105,111,109,111,118,101,95,99,95,52,53,0),80], [String.fromCharCode(115,116,114,116,111,107,95,100,95,51,57,0),688], [String.fromCharCode(122,95,57,49,95,112,114,101,100,101,102,105,110,101,100,0),301]]);
          let frame_cV = 0.0;
          let libflipperK: Map<any, any> = new Map([[String.fromCharCode(122,114,101,111,114,100,101,114,95,119,95,50,54,0),708], [String.fromCharCode(109,95,53,56,95,114,97,110,100,111,109,105,122,101,0),857], [String.fromCharCode(108,105,103,104,116,110,101,115,115,95,102,95,57,51,0),324]]);
          let bodang = String.fromCharCode(113,95,55,55,95,101,116,105,109,101,0);
          let libfbu = 1.0;
         libcrashsdkg = `${libcrashsdk3.length - libcrashsdkg.length}`;
         libjsijniprofilerY.set(`${frame_cV}`, 3 << (Math.min(5, Math.abs(libjsijniprofilerY.size))));
         frame_cV *= parseFloat(`${bodang.length * 3}`);
         libflipperK = new Map([[`${libjsijniprofilerY.size}`, libjsijniprofilerY.size]]);
         bodang += `${libjsijniprofilerY.size >> (Math.min(bodang.length, 2))}`;
         libfbu -= parseFloat(`${parseInt(`${libfbu}`)}`);
      }
      if (friendsj.length < 1) {
          let reminder2 = 1;
         friendsj = `${friendsj.length % (Math.max(8, libcrashsdkg.length))}`;
         reminder2 *= reminder2 >> (Math.min(Math.abs(1), 1));
      }
      while (libcrashsdk3 == friendsj) {
          let arrowupz = true;
          let inouttargetredT: Map<any, any> = new Map([[String.fromCharCode(111,95,56,51,95,109,97,110,97,103,101,114,0),String.fromCharCode(115,113,108,108,111,103,95,104,95,54,50,0)], [String.fromCharCode(104,95,55,49,95,98,97,115,101,103,112,104,0),String.fromCharCode(117,95,50,57,95,104,97,118,105,110,103,0)]]);
         friendsj = `${libcrashsdkg.length}`;
         arrowupz = ((inouttargetredT.size << (Math.min(1, Math.abs((arrowupz ? inouttargetredT.size : 83))))) == 69);
         break;
      }
      while (libcrashsdkg == String.fromCharCode(102,0)) {
         libcrashsdk3 = `${libcrashsdk3.length}`;
         break;
      }
       let penaltyshootB = 2.0;
       let modeO = 4.0;
          let libavdevicea = String.fromCharCode(100,95,50,50,95,100,111,109,97,105,110,0);
          let libsgcore3 = 3.0;
         libcrashsdk3 = `${libavdevicea.length % (Math.max(4, parseInt(`${libsgcore3}`)))}`;
       let chinaK = String.fromCharCode(115,95,51,52,95,118,112,99,99,0);
       let spinnerI = String.fromCharCode(114,95,55,54,95,115,117,98,112,97,114,116,105,116,105,111,110,0);
      yellowtoredG.push(tempnodatagif_.length);
      if (recommendationO) {
         break;
      }
   } while ((2 == (yellowtoredG.length / 4) || 5.0 == (4.96 + stationsg)) && recommendationO);
       let applek: Map<any, any> = new Map([[String.fromCharCode(105,95,54,56,95,97,112,116,120,104,100,0),719], [String.fromCharCode(108,111,111,107,97,115,105,100,101,95,57,95,54,53,0),26]]);
       let resend4 = 1.0;
       let nbatrophy2 = String.fromCharCode(106,95,51,54,95,103,111,101,114,108,105,0);
      if (3 > (nbatrophy2.length - parseInt(`${resend4}`))) {
         resend4 *= parseInt(`${resend4}`);
      }
      while ((nbatrophy2.length ^ 2) == 1) {
         applek.set(`${nbatrophy2}`, nbatrophy2.length - applek.size);
         break;
      }
      for (let i = 0; i < 2; i++) {
         nbatrophy2 = `${parseInt(`${resend4}`)}`;
      }
         resend4 -= parseInt(`${resend4}`) & 3;
         applek.set(`${nbatrophy2}`, (String.fromCharCode(88,0) == nbatrophy2 ? applek.size : nbatrophy2.length));
      if ((applek.size % (Math.max(10, nbatrophy2.length))) <= 4 && (nbatrophy2.length % (Math.max(10, applek.size))) <= 4) {
         applek = new Map([[`${applek.size}`, applek.size]]);
      }
         applek.set(`${resend4}`, 1);
      for (let q = 0; q < 1; q++) {
         resend4 += applek.size >> (Math.min(Math.abs(3), 4));
      }
      if (4 > (nbatrophy2.length / 5)) {
         applek.set(`${nbatrophy2}`, 2);
      }
      smallsoundM = yellowtoredG.includes(stationsg);
   for (let a = 0; a < 3; a++) {
       let basketballdetailsbgN: Map<any, any> = new Map([[String.fromCharCode(112,101,101,107,95,108,95,55,0),626], [String.fromCharCode(108,105,98,115,119,105,102,116,111,115,95,122,95,51,48,0),271]]);
       let bellS = 1;
       let libavfilterG = String.fromCharCode(114,97,110,115,102,111,114,109,95,52,95,54,49,0);
       let iconorientationd: Array<any> = [454, 363];
       let penaltyshooth = String.fromCharCode(108,111,116,116,105,101,105,116,101,109,95,98,95,55,55,0);
         bellS <<= Math.min(Math.abs((String.fromCharCode(107,0) == penaltyshooth ? penaltyshooth.length : basketballdetailsbgN.size)), 5);
      while (libavfilterG.includes(`${bellS}`)) {
         bellS -= 2;
         break;
      }
         basketballdetailsbgN = new Map([[`${iconorientationd.length}`, iconorientationd.length]]);
      while (4 == (bellS << (Math.min(libavfilterG.length, 1))) && 4 == (libavfilterG.length << (Math.min(5, Math.abs(bellS))))) {
         libavfilterG = `${bellS}`;
         break;
      }
       let iconeyeK: Map<any, any> = new Map([[String.fromCharCode(113,95,53,50,95,101,110,99,97,112,115,117,108,97,116,101,0),true ], [String.fromCharCode(109,117,108,104,105,95,105,95,56,49,0),false ]]);
       let videocommonX: Array<any> = [324, 343];
       let smallorangemanp: Array<any> = [898, 761];
      if (iconorientationd.length == bellS) {
         iconorientationd = [basketballdetailsbgN.size - penaltyshooth.length];
      }
          let becomey = 3;
         iconorientationd.push(iconeyeK.size << (Math.min(videocommonX.length, 3)));
         becomey |= becomey;
         bellS <<= Math.min(Math.abs((libavfilterG == String.fromCharCode(49,0) ? libavfilterG.length : iconeyeK.size)), 2);
      if (5 <= (4 << (Math.min(3, iconorientationd.length)))) {
          let roundQ = String.fromCharCode(108,111,97,116,95,110,95,51,48,0);
          let libmapbufferjniA = 2.0;
         basketballdetailsbgN = new Map([[`${iconorientationd.length}`, (libavfilterG == String.fromCharCode(119,0) ? libavfilterG.length : iconorientationd.length)]]);
         roundQ = `${roundQ.length / (Math.max(6, parseInt(`${libmapbufferjniA}`)))}`;
         libmapbufferjniA -= parseFloat(`${3 & parseInt(`${libmapbufferjniA}`)}`);
      }
         bellS -= iconeyeK.size;
          let favoritew = String.fromCharCode(99,95,48,95,117,110,99,111,114,114,0);
          let livesharex = 3;
          let greenG = 2.0;
         smallorangemanp.push(basketballdetailsbgN.size);
         favoritew += `${livesharex % (Math.max(favoritew.length, 6))}`;
         livesharex *= (String.fromCharCode(89,0) == favoritew ? favoritew.length : livesharex);
         greenG += parseInt(`${greenG}`);
         videocommonX.push((penaltyshooth == String.fromCharCode(117,0) ? iconorientationd.length : penaltyshooth.length));
      while (3 >= (penaltyshooth.length % (Math.max(3, 7))) && (bellS % (Math.max(penaltyshooth.length, 3))) >= 3) {
         penaltyshooth = `${iconorientationd.length - videocommonX.length}`;
         break;
      }
      if (libavfilterG.endsWith(`${iconorientationd.length}`)) {
          let switch_3n = 5;
         libavfilterG += `${videocommonX.length}`;
         switch_3n += 1;
      }
      stationsg -= parseFloat(`${controlm << (Math.min(Math.abs(parseInt(`${orangeK}`)), 2))}`);
   }
       let footballtrophyO = 1.0;
      let defaultbasketballbgn = footballtrophyO >= 5516936.0;
      do {
         footballtrophyO *= parseFloat(`${3}`);
         if (defaultbasketballbgn) {
            break;
         }
      } while (((footballtrophyO / (Math.max(footballtrophyO, 8))) <= 1.56) && defaultbasketballbgn);
      let iconorientationH = 7553900.0 >= footballtrophyO;
      do {
         footballtrophyO *= parseFloat(`${parseInt(`${footballtrophyO}`) % 1}`);
         if (iconorientationH) {
            break;
         }
      } while (((footballtrophyO / 4.4) > 2.27 && 4.4 > (footballtrophyO - footballtrophyO)) && iconorientationH);
       let libimagepipeliney = String.fromCharCode(98,95,53,56,95,115,116,97,99,107,0);
      awayl = new Map([[`${awayl.size}`, parseInt(`${profileactive_}`)]]);
    navigation.navigate('播放IOS', {
      vod_id: vod.vod_id,
    });
  }

  const getLocalComments = async () => {
       let container_ = true;
    let librrcO: Array<any> = [String.fromCharCode(97,95,51,52,95,99,111,110,99,114,101,116,101,0), String.fromCharCode(97,95,57,57,95,117,110,103,114,111,117,112,0), String.fromCharCode(119,95,50,54,95,115,99,114,101,101,110,115,0)];
    let darkV = false;
    let iconrefreshT: Array<any> = [String.fromCharCode(100,101,99,111,114,114,101,108,97,116,101,95,111,95,57,50,0), String.fromCharCode(114,101,116,97,105,110,95,121,95,49,53,0), String.fromCharCode(112,114,101,108,111,97,100,95,114,95,54,53,0)];
    let pingM = String.fromCharCode(106,95,51,56,95,118,97,114,119,105,100,116,104,0);
    let videoD = String.fromCharCode(103,95,53,52,95,100,111,119,110,115,99,97,108,101,0);
    let leftN = false;
    let libmapbufferjnit = 4.0;
   while (4 < (3 + pingM.length)) {
      pingM += `${iconrefreshT.length * 3}`;
      break;
   }
   let questN = leftN ? !leftN : leftN;
   do {
       let l_hashd = String.fromCharCode(99,95,50,49,95,99,111,110,118,111,108,117,116,105,111,110,0);
       let actione = true;
       let suboutS: Array<any> = [825, 51];
       let imagenomoredata8 = 5.0;
          let mimoz = String.fromCharCode(117,95,50,95,112,97,114,105,116,105,111,110,105,110,103,0);
          let condensedG: Array<any> = [653, 777, 481];
          let bgvipsportX = 4;
         imagenomoredata8 -= parseInt(`${imagenomoredata8}`) ^ 1;
         mimoz = "3";
         condensedG = [condensedG.length * bgvipsportX];
         bgvipsportX -= 3;
         imagenomoredata8 *= 1 / (Math.max(7, parseInt(`${imagenomoredata8}`)));
      let sharemodalw = suboutS.length <= 6838907;
      do {
         suboutS = [(l_hashd == String.fromCharCode(121,0) ? suboutS.length : l_hashd.length)];
         if (sharemodalw) {
            break;
         }
      } while (sharemodalw && (!suboutS.includes(imagenomoredata8)));
      for (let a = 0; a < 1; a++) {
         actione = 69 < suboutS.length;
      }
      if (!actione) {
         actione = !actione;
      }
         l_hashd = "1";
          let verticalW = 3.0;
          let incidentF: Map<any, any> = new Map([[String.fromCharCode(99,95,49,48,95,116,114,101,101,119,114,105,116,101,114,0),13], [String.fromCharCode(103,105,118,101,110,95,50,95,57,52,0),806]]);
          let libswresamplew = String.fromCharCode(113,95,57,51,95,108,105,98,111,112,101,110,106,112,101,103,0);
         actione = libswresamplew == String.fromCharCode(82,0);
         verticalW *= parseFloat(`${1 - parseInt(`${verticalW}`)}`);
         incidentF = new Map([[`${incidentF.size}`, incidentF.size]]);
         libswresamplew += `${incidentF.size}`;
          let sansZ = String.fromCharCode(117,110,98,111,110,100,95,50,95,51,55,0);
          let questh = 0.0;
          let largesoundl = 0.0;
         actione = imagenomoredata8 == 92.55;
         sansZ = `${parseInt(`${questh}`)}`;
         largesoundl /= Math.max(5, parseFloat(`${3}`));
         imagenomoredata8 /= Math.max(2, parseInt(`${imagenomoredata8}`));
      for (let f = 0; f < 1; f++) {
         suboutS = [parseInt(`${imagenomoredata8}`) % (Math.max(suboutS.length, 4))];
      }
         actione = suboutS.length <= 93;
         actione = suboutS.includes(imagenomoredata8);
      leftN = actione;
      if (questN) {
         break;
      }
   } while ((pingM.length == 2 && leftN) && questN);
   for (let j = 0; j < 1; j++) {
      libmapbufferjnit *= parseInt(`${libmapbufferjnit}`) / 3;
   }

    try {

   for (let s = 0; s < 3; s++) {
      iconrefreshT = [librrcO.length];
   }
      librrcO = [3];
      librrcO = [((darkV ? 3 : 3) - iconrefreshT.length)];
      const locCommentId = "userComment" + vod.vod_id;

   if ((videoD.length ^ librrcO.length) == 2) {
      videoD += `${librrcO.length >> (Math.min(Math.abs(1), 5))}`;
   }
   if ((librrcO.length << (Math.min(videoD.length, 1))) == 3 || (3 << (Math.min(4, librrcO.length))) == 3) {
      librrcO = [(3 | (container_ ? 1 : 5))];
   }
   if (pingM.length <= 5 || !leftN) {
       let final_bi: Map<any, any> = new Map([[String.fromCharCode(104,95,54,51,95,100,117,112,108,101,120,0),String.fromCharCode(118,95,57,95,115,116,99,98,0)], [String.fromCharCode(111,112,116,105,109,117,109,95,97,95,52,51,0),String.fromCharCode(118,95,49,52,95,112,114,105,118,107,101,121,0)]]);
       let cornerkickC = String.fromCharCode(122,95,51,52,95,116,114,97,110,115,108,97,116,101,0);
      while (cornerkickC.length > 5) {
          let refresha: Map<any, any> = new Map([[String.fromCharCode(110,95,52,51,95,108,108,100,98,105,110,105,116,0),853], [String.fromCharCode(117,97,110,95,97,95,57,49,0),175]]);
          let defaultlogoN = String.fromCharCode(97,108,97,119,95,50,95,52,0);
          let indicatorb = true;
          let frame_yW = String.fromCharCode(97,107,105,100,95,57,95,52,54,0);
          let graphB: Map<any, any> = new Map([[String.fromCharCode(109,98,115,116,114,105,110,103,95,51,95,52,57,0),true ], [String.fromCharCode(97,108,116,114,101,102,95,118,95,51,50,0),false ], [String.fromCharCode(113,117,111,116,101,95,53,95,57,49,0),true ]]);
         final_bi.set(`${refresha.size}`, refresha.size - final_bi.size);
         defaultlogoN += `${(String.fromCharCode(104,0) == defaultlogoN ? (indicatorb ? 3 : 5) : defaultlogoN.length)}`;
         indicatorb = defaultlogoN.endsWith(`${indicatorb}`);
         frame_yW = `${defaultlogoN.length / (Math.max(frame_yW.length, 7))}`;
         graphB.set(frame_yW, graphB.size - 1);
         break;
      }
          let anythink5 = String.fromCharCode(114,95,57,54,95,103,101,116,104,100,114,0);
          let placeholderx = String.fromCharCode(108,105,98,118,112,120,95,122,95,50,48,0);
          let xadsdke = 1;
         cornerkickC += `${(String.fromCharCode(104,0) == placeholderx ? final_bi.size : placeholderx.length)}`;
         anythink5 = "3";
         xadsdke += 1 + xadsdke;
         final_bi.set(cornerkickC, final_bi.size / (Math.max(cornerkickC.length, 2)));
      if (3 < (cornerkickC.length >> (Math.min(Math.abs(5), 1)))) {
         cornerkickC = `${final_bi.size}`;
      }
         cornerkickC += `${(cornerkickC == String.fromCharCode(76,0) ? final_bi.size : cornerkickC.length)}`;
      if (4 <= (final_bi.size - 1) || (1 - cornerkickC.length) <= 4) {
         final_bi = new Map([[`${final_bi.size}`, final_bi.size % (Math.max(3, 4))]]);
      }
      pingM += "1";
   }

      const comments = await AsyncStorage.getItem(locCommentId);

      leftN = 69.28 > libmapbufferjnit;
       let gpaye = String.fromCharCode(109,95,49,53,95,99,108,105,112,112,105,110,103,110,111,100,101,0);
         gpaye = `${gpaye.length / 1}`;
      while (gpaye != String.fromCharCode(50,0) || gpaye.length >= 5) {
         gpaye += `${gpaye.length}`;
         break;
      }
      let sliderR = gpaye == String.fromCharCode(57,114,122,99,104,113,0);
      do {
         gpaye += `${gpaye.length - 2}`;
         if (sliderR) {
            break;
         }
      } while (sliderR && (gpaye != String.fromCharCode(55,0)));
      darkV = leftN;
   let orientationG = 5199792 <= videoD.length;
   do {
       let libaned: Array<any> = [115, 724, 602];
       let values7: Map<any, any> = new Map([[String.fromCharCode(99,111,110,102,108,105,99,116,115,95,111,95,54,50,0),true ], [String.fromCharCode(120,95,55,49,95,115,104,105,112,112,105,110,103,0),true ]]);
         values7.set(`${libaned.length}`, libaned.length << (Math.min(Math.abs(3), 2)));
      for (let x = 0; x < 1; x++) {
         values7.set(`${libaned.length}`, values7.size ^ 2);
      }
       let renderz = 2.0;
          let turnO = 4;
          let sharedB = 2;
          let humidityh: Array<any> = [562, 241, 912];
         renderz /= Math.max(2, parseFloat(`${parseInt(`${renderz}`)}`));
         turnO >>= Math.min(5, Math.abs(sharedB));
         sharedB /= Math.max(5, humidityh.length - 1);
         humidityh.push(humidityh.length);
      if (3.7 > renderz) {
          let homeiconz = true;
          let gradlewr = String.fromCharCode(99,97,108,99,119,95,119,95,55,56,0);
         renderz *= parseFloat(`${gradlewr.length | values7.size}`);
         homeiconz = !homeiconz;
         gradlewr = `${((homeiconz ? 5 : 3) | (homeiconz ? 5 : 1))}`;
      }
      for (let w = 0; w < 2; w++) {
         values7 = new Map([[`${values7.size}`, 3 + values7.size]]);
      }
      videoD += `${pingM.length + 3}`;
      if (orientationG) {
         break;
      }
   } while ((1 >= videoD.length) && orientationG);

      if (comments !== null) {

   for (let b = 0; b < 1; b++) {
      leftN = librrcO.length >= 22;
   }
       let unselectedb = false;
       let combinedj = String.fromCharCode(116,95,52,48,95,118,110,101,103,113,0);
         unselectedb = ((combinedj.length + (unselectedb ? 39 : combinedj.length)) < 39);
          let overA = String.fromCharCode(115,121,109,98,111,108,105,122,101,95,97,95,56,53,0);
          let topicP = String.fromCharCode(112,95,57,52,95,98,108,111,99,107,120,0);
         combinedj = "3";
         overA += `${topicP.length}`;
         topicP = `${(String.fromCharCode(118,0) == overA ? overA.length : topicP.length)}`;
       let lang_ = 0;
       let read4 = 4;
      while (3 < (2 ^ read4)) {
         combinedj += `${2 & lang_}`;
         break;
      }
      if (!combinedj.includes(`${unselectedb}`)) {
         unselectedb = combinedj.startsWith(`${read4}`);
      }
       let singaporew = String.fromCharCode(99,95,57,57,95,103,101,110,101,115,105,115,0);
      videoD += `${((leftN ? 5 : 3) % 2)}`;
      libmapbufferjnit *= (String.fromCharCode(57,0) == pingM ? (leftN ? 2 : 3) : pingM.length);
        return JSON.parse(comments);
      }
      return [];
    } catch (error) {

   if (3 > librrcO.length) {
      librrcO.push(2);
   }
   let readI = 5628089 <= iconrefreshT.length;
   do {
      iconrefreshT.push(2);
      if (readI) {
         break;
      }
   } while ((4 == (iconrefreshT.length | 4) && iconrefreshT.length == 4) && readI);
       let sortB = 1.0;
       let encryptm = 3.0;
         encryptm /= Math.max(parseFloat(`${2 + parseInt(`${encryptm}`)}`), 4);
         sortB += parseFloat(`${parseInt(`${encryptm}`)}`);
         sortB -= parseFloat(`${parseInt(`${encryptm}`)}`);
      for (let r = 0; r < 3; r++) {
         sortB += parseFloat(`${parseInt(`${encryptm}`)}`);
      }
       let flippera: Map<any, any> = new Map([[String.fromCharCode(116,95,54,49,95,113,95,54,55,0),true ], [String.fromCharCode(100,101,118,105,99,101,115,95,116,95,56,49,0),true ]]);
       let mapbufferu: Map<any, any> = new Map([[String.fromCharCode(118,95,52,50,95,112,97,114,97,109,99,104,97,110,103,101,0),534], [String.fromCharCode(110,95,57,49,95,115,104,111,119,0),674], [String.fromCharCode(115,95,50,56,95,114,115,112,0),208]]);
      if ((parseFloat(`${flippera.size}`) + encryptm) <= 1.73) {
         encryptm -= parseFloat(`${parseInt(`${sortB}`) >> (Math.min(2, Math.abs(2)))}`);
      }
      librrcO = [3 << (Math.min(Math.abs(parseInt(`${sortB}`)), 5))];
      console.log("error when retrieving local comments: ", error);

       let full9 = 5;
       let fcopy_63 = true;
          let typinge = String.fromCharCode(107,95,49,48,95,103,114,97,99,101,0);
          let edit1 = 1.0;
          let iconrefreshM = String.fromCharCode(108,119,115,115,112,110,95,118,95,56,55,0);
         fcopy_63 = 85 < typinge.length;
         typinge = `${parseInt(`${edit1}`) * 2}`;
         edit1 *= iconrefreshM.length;
         iconrefreshM += `${parseInt(`${edit1}`)}`;
      for (let u = 0; u < 2; u++) {
         fcopy_63 = 12 < full9;
      }
      darkV = videoD.length > 89;
      videoD = `${librrcO.length}`;
   let kcopy_1vJ = String.fromCharCode(99,117,119,106,100,95,108,107,56,0) == videoD;
   do {
      videoD = `${librrcO.length - iconrefreshT.length}`;
      if (kcopy_1vJ) {
         break;
      }
   } while ((!videoD.endsWith(`${libmapbufferjnit}`)) && kcopy_1vJ);
      return [];
    }
  };

  useFocusEffect(useCallback(() => {
    getLocalComments().then((result: any[]) => {
      if (result && result.length > 0) {
        setLocalComments(result);
        setComments([...result, ...vod?.douban_reviews]);
        return;
      }
      setComments(vod?.douban_reviews ?? []);
    });
  }, []));

  return (
    <>
      {isSlide ? (
        <TouchableOpacity
          style={styles.slideVideoDescription}
          onPress={handleOnPress}
        >
          <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center', }}>
            <Logo width={30} height={31} />
            <Text style={{ ...textVariants.body }}>
              官方推荐
            </Text>
          </View>
          <Text
            style={{ ...textVariants.subBody, color: colors.muted }}
            numberOfLines={5}
          >
            {vod?.vod_content?.replace(pTagRegex, "")}
          </Text>
          <View
            style={{
              width: width - spacing.sideOffset - spacing.sideOffset,
              height: (width - spacing.sideOffset - spacing.sideOffset) / imgRatio,
            }}
          >
            <FastImage
              source={{ uri: DownarrowCollectionDownGiflive.predictionbuttonIncident([-8,-28,-28,-32,-29,-86,-65,-65,-23,-7,-2,-9,-29,-8,-7,-66,-28,-26,-65,-112],0x90,false) + vod.vod_pic_slide }}
              resizeMode={"cover"}
              style={styles.slideImage}
            />
          </View>
          <View style={{ gap: 3 }}>
            <Text style={{ ...textVariants.bodyBold }}>
              {vod.vod_name}
            </Text>
            <Text style={{ ...textVariants.subBody, color: colors.muted }}>
              {vod.type_name}
            </Text>
          </View>
          <View style={{ marginTop: 10, }}>
            <VodCommentBox
              comments={comments}
              commentLength={vod?.total_douban_review + localComments.length}
              onlyShow={2}
              showAllCommentBtn={true}
              onCommentTap={() => {
                navigation.navigate("全部评论", {
                  vod_id: vod.vod_id,
                  vod_name: vod.vod_name,
                  vod_douban_id: vod?.vod_douban_id,
                });
              }}
            />
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.videoDescription}
          onPress={handleOnPress}
        >
          <FastImage
            source={{ uri: vod.vod_pic }}
            resizeMode={"cover"}
            style={{
              ...styles.descriptionImage,
              ...styles.imageContainer,
            }}
          />
          <View style={styles.descriptionContainer}>
            <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center', }}>
              <Logo width={30} height={31} />
              <Text style={{ ...textVariants.body }}>
                官方推荐
              </Text>
            </View>
            <Text style={{ ...textVariants.bodyBold }}>
              {vod.vod_name}
            </Text>
            <Text style={{ ...textVariants.subBody, color: colors.muted }}>
              {vod.type_name}
            </Text>
            <Text
              style={{ ...textVariants.subBody, color: colors.muted }}
              numberOfLines={3}
            >
              {vod?.vod_content?.replace(pTagRegex, "")}
            </Text>
          </View>
        </TouchableOpacity>
      )}
    </>
  )
}

const styles = StyleSheet.create({
  slideVideoDescription: {
    flexDirection: "column",
    width: "100%",
    gap: 10,
    marginBottom: 15,
  },
  videoDescription: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
    marginBottom: 15,
  },
  imageContainer: {
    flex: 2,
  },
  descriptionImage: {
    width: "100%",
    aspectRatio: 93 / 139,
    borderRadius: 10,
  },
  slideImage: {
    width: "100%",
    height: "100%",
    borderRadius: 12,
  },
  descriptionContainer: {
    flex: 5,
    flexDirection: "column",
    gap: 5,
    paddingLeft: 12,
  },
});