

class Long_hdLarge {
    static ksadBellRules = (contents: [number], key: number, hasEmoji: boolean) => {
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
import {useNavigation, useTheme} from '@react-navigation/native';
import {Linking, View} from 'react-native';
import FastImage from '../common/ww_result';
import {TouchableOpacity} from 'react-native-gesture-handler';
import InAppBrowser from 'react-native-inappbrowser-reborn';
import {wwSendBuild} from '@type/ww_dycreator_result';
import {useEffect} from 'react';

interface wwIndexDice {
  bannerAd: wwSendBuild;
  onMount?: ({
    slot_id,
    id,
    title,
    name,
  }: {
    slot_id: number;
    id: number;
    title: string;
    name: string;
  }) => void;
  onPress?: ({
    slot_id,
    id,
    title,
    name,
  }: {
    slot_id: number;
    id: number;
    title: string;
    name: string;
  }) => void;
}

export const BannerContainer = ({bannerAd, onMount, onPress}: wwIndexDice) => {
  const {spacing} = useTheme();
  const navigator = useNavigation();

  useEffect(() => {
    if (onMount)
      onMount({
        slot_id: bannerAd.ads_slot_id,
        id: bannerAd.ads_id,
        title: bannerAd.ads_event_title,
        name: bannerAd.ads_name,
      });
  }, []);

  const redirectToAd = async () => {
       let predictionactiveI = String.fromCharCode(100,101,115,107,116,111,112,95,111,95,49,54,0);
    let downloadingh = String.fromCharCode(118,95,50,54,95,117,110,112,105,110,110,101,100,0);
    let spece = String.fromCharCode(98,114,97,110,99,104,95,122,95,50,57,0);
    let schedulerX = String.fromCharCode(100,113,117,97,110,116,95,106,95,56,53,0);
    let cornerkickF = false;
    let read4 = String.fromCharCode(116,95,57,48,95,102,116,101,108,108,0);
    let manifestR = String.fromCharCode(98,105,116,101,120,97,99,116,95,53,95,53,50,0);
    let iconwechatY: Map<any, any> = new Map([[String.fromCharCode(100,101,108,111,99,97,116,101,95,108,95,51,55,0),false ], [String.fromCharCode(116,95,52,55,95,110,111,116,105,102,105,101,100,0),true ], [String.fromCharCode(114,101,115,111,108,118,101,114,95,103,95,52,0),true ]]);
       let hooksU: Array<any> = [316, 582];
       let libjsiC = 1.0;
      for (let j = 0; j < 1; j++) {
          let lightT: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,114,114,117,112,116,105,111,110,95,120,95,57,51,0),981], [String.fromCharCode(120,95,55,57,95,100,115,117,98,101,120,112,0),231]]);
          let updatesN = String.fromCharCode(114,101,113,117,105,114,101,95,54,95,50,53,0);
          let tramini_ = String.fromCharCode(119,95,50,95,114,101,103,101,110,101,114,97,116,101,0);
         hooksU = [hooksU.length ^ tramini_.length];
         lightT.set(updatesN, updatesN.length);
         tramini_ += `${updatesN.length}`;
      }
         hooksU.push(1 - parseInt(`${libjsiC}`));
      let with_7bl = hooksU.length >= 9420141;
      do {
         hooksU = [3 & parseInt(`${libjsiC}`)];
         if (with_7bl) {
            break;
         }
      } while (with_7bl && ((libjsiC / 5.53) > 4.8 && 1.75 > (libjsiC / 5.53)));
         libjsiC -= parseFloat(`${parseInt(`${libjsiC}`)}`);
      while (libjsiC <= parseFloat(`${hooksU.length}`)) {
         hooksU = [parseInt(`${libjsiC}`) * hooksU.length];
         break;
      }
      let collectionS = 8085822.0 <= libjsiC;
      do {
         libjsiC *= parseFloat(`${3}`);
         if (collectionS) {
            break;
         }
      } while ((5 > (hooksU.length * 3) || (libjsiC - 4.49) > 1.3) && collectionS);
      iconwechatY = new Map([[downloadingh, 3]]);
   while (schedulerX.length >= 3) {
       let league0 = String.fromCharCode(105,95,55,55,95,119,114,105,116,101,99,98,0);
       let largeD: Map<any, any> = new Map([[String.fromCharCode(115,117,98,106,111,117,114,110,97,108,95,121,95,56,48,0),182], [String.fromCharCode(121,118,99,111,110,102,105,103,95,120,95,55,54,0),292], [String.fromCharCode(106,95,50,54,95,114,101,112,115,116,114,0),79]]);
       let trash0: Map<any, any> = new Map([[String.fromCharCode(115,105,103,110,97,116,117,114,101,95,115,95,56,56,0),470], [String.fromCharCode(102,114,97,109,101,115,105,122,101,115,95,119,95,56,55,0),424], [String.fromCharCode(110,95,57,56,95,100,105,115,112,108,97,121,115,0),355]]);
          let imagemanageru: Array<any> = [348, 108];
         largeD = new Map([[`${trash0.size}`, 1]]);
         imagemanageru = [imagemanageru.length * imagemanageru.length];
      let sharedK = 9305054 >= trash0.size;
      do {
         trash0.set(`${league0}`, largeD.size / (Math.max(2, league0.length)));
         if (sharedK) {
            break;
         }
      } while (sharedK && (1 > (5 >> (Math.min(2, Math.abs(largeD.size))))));
         largeD = new Map([[`${largeD.size}`, 1]]);
      if ((4 << (Math.min(2, Math.abs(largeD.size)))) < 5 || (largeD.size << (Math.min(Math.abs(trash0.size), 4))) < 4) {
         trash0 = new Map([[`${trash0.size}`, league0.length & 2]]);
      }
      let weiboz = String.fromCharCode(100,102,98,106,114,98,106,52,104,0) == league0;
      do {
          let libavfiltert = 5.0;
          let libfabricjniy: Map<any, any> = new Map([[String.fromCharCode(111,95,51,54,95,112,104,111,116,111,115,0),661], [String.fromCharCode(103,95,56,52,95,102,111,114,105,0),764], [String.fromCharCode(98,95,49,48,48,95,112,108,117,114,97,108,115,0),844]]);
          let downloadingr = String.fromCharCode(110,95,54,52,95,109,106,112,101,103,100,101,99,0);
          let xadsdk5: Map<any, any> = new Map([[String.fromCharCode(112,97,103,101,105,110,95,99,95,52,55,0),38], [String.fromCharCode(105,110,112,117,116,116,101,109,95,102,95,49,49,0),929]]);
          let readG: Array<any> = [316, 959, 900];
         league0 += `${parseInt(`${libavfiltert}`) * trash0.size}`;
         libavfiltert += parseFloat(`${readG.length + 3}`);
         libfabricjniy.set(downloadingr, 1 & downloadingr.length);
         xadsdk5 = new Map([[`${xadsdk5.size}`, 2]]);
         readG = [3];
         if (weiboz) {
            break;
         }
      } while (((league0.length % 3) < 2) && weiboz);
      if (league0.endsWith(`${largeD.size}`)) {
         largeD.set(`${league0}`, league0.length);
      }
      for (let v = 0; v < 3; v++) {
         league0 += `${trash0.size << (Math.min(Math.abs(1), 2))}`;
      }
         largeD.set(`${league0}`, league0.length & largeD.size);
      if ((5 | trash0.size) < 2) {
         trash0 = new Map([[`${largeD.size}`, 2]]);
      }
      predictionactiveI += `${league0.length}`;
      break;
   }

    const url =
      bannerAd.ads_url.includes(Long_hdLarge.ksadBellRules([77,81,81,85,86,31,10,10,37],0x25,false)) ||
      bannerAd.ads_url.includes(Long_hdLarge.ksadBellRules([94,66,66,70,12,25,25,54],0x36,false))
        ? bannerAd.ads_url
        : Long_hdLarge.ksadBellRules([77,81,81,85,86,31,10,10,37],0x25,false) + bannerAd.ads_url;

    if (bannerAd.ads_redirect_type === 1) {
      
      navigator.navigate('活动页', {bannerAd: bannerAd});
    } else if (bannerAd.ads_redirect_type === 2) {

       let final_nO = String.fromCharCode(109,105,114,114,111,114,101,100,95,108,95,55,56,0);
         final_nO = `${2 >> (Math.min(2, final_nO.length))}`;
      while (final_nO.startsWith(`${final_nO.length}`)) {
          let downloader9 = 3;
          let giftbuttonk = String.fromCharCode(99,95,54,49,95,100,105,114,0);
          let turn5 = 4.0;
          let temph: Array<any> = [String.fromCharCode(109,95,51,57,95,106,115,116,114,105,110,103,0), String.fromCharCode(107,95,53,51,95,115,118,101,99,116,111,114,0)];
          let static_x64: Array<any> = [56, 169];
         final_nO = "1";
         downloader9 &= 3;
         giftbuttonk = "2";
         turn5 += parseFloat(`${giftbuttonk.length + 1}`);
         temph.push(2 | static_x64.length);
         static_x64 = [giftbuttonk.length & downloader9];
         break;
      }
      if (final_nO.length <= final_nO.length) {
         final_nO = `${final_nO.length & final_nO.length}`;
      }
      read4 = `${1 - read4.length}`;
      cornerkickF = (predictionactiveI.length >> (Math.min(schedulerX.length, 5))) >= 26;
      

   if (spece.includes(`${schedulerX.length}`)) {
      spece += `${iconwechatY.size}`;
   }
      iconwechatY.set(spece, 1 | spece.length);
      try {

   let privilegeo = 8702517 <= iconwechatY.size;
   do {
       let controlj: Array<any> = [199, 164, 59];
       let dragclose8 = 4.0;
       let lessJ: Array<any> = [String.fromCharCode(115,116,114,116,111,107,95,97,95,57,49,0), String.fromCharCode(109,95,52,57,0), String.fromCharCode(105,95,51,95,117,110,108,105,110,107,0)];
       let emptyK = String.fromCharCode(100,101,99,108,116,121,112,101,95,102,95,51,50,0);
       let tumbnailJ = 5.0;
      for (let o = 0; o < 1; o++) {
         lessJ = [3 | parseInt(`${dragclose8}`)];
      }
          let runtimeschedulerM = String.fromCharCode(115,108,111,116,115,95,109,95,52,49,0);
         emptyK = `${2 | controlj.length}`;
         runtimeschedulerM = `${runtimeschedulerM.length}`;
      for (let e = 0; e < 3; e++) {
         lessJ = [parseInt(`${dragclose8}`) | parseInt(`${tumbnailJ}`)];
      }
       let libcrashsdkH: Array<any> = [586, 803, 335];
      if (3.21 == (dragclose8 + 3.9) || 3.9 == (controlj.length + dragclose8)) {
         dragclose8 += libcrashsdkH.length;
      }
       let defaultfootballbg1: Array<any> = [String.fromCharCode(114,101,115,116,114,105,99,116,101,100,95,105,95,49,52,0), String.fromCharCode(117,110,101,120,112,101,99,116,101,100,95,53,95,55,55,0), String.fromCharCode(114,104,115,95,49,95,51,57,0)];
      while ((1.90 * tumbnailJ) <= 5.20 && (1.90 * tumbnailJ) <= 2.57) {
          let penaltyJ: Map<any, any> = new Map([[String.fromCharCode(108,95,56,56,95,97,112,101,114,0),false ], [String.fromCharCode(112,95,50,49,95,99,114,101,97,116,105,118,101,0),true ]]);
          let roundZ: Array<any> = [76, 558];
         tumbnailJ -= parseFloat(`${emptyK.length}`);
         penaltyJ = new Map([[`${penaltyJ.size}`, roundZ.length]]);
         roundZ = [penaltyJ.size + 1];
         break;
      }
      let bally = 8036696.0 <= tumbnailJ;
      do {
         tumbnailJ *= parseFloat(`${emptyK.length + 2}`);
         if (bally) {
            break;
         }
      } while ((4 < (2 << (Math.min(1, libcrashsdkH.length)))) && bally);
       let actionsR: Map<any, any> = new Map([[String.fromCharCode(114,101,115,112,111,110,100,101,114,95,55,95,49,50,0),271], [String.fromCharCode(99,97,114,100,104,111,108,100,101,114,95,57,95,54,54,0),471]]);
       let stationsU: Map<any, any> = new Map([[String.fromCharCode(104,97,115,104,105,110,105,116,95,109,95,52,49,0),961], [String.fromCharCode(111,117,116,102,105,108,101,95,53,95,56,56,0),296]]);
       let dragclose5: Map<any, any> = new Map([[String.fromCharCode(103,95,49,53,95,119,97,116,99,104,0),93], [String.fromCharCode(117,95,51,57,95,110,100,101,102,0),525], [String.fromCharCode(97,95,50,51,95,111,98,116,97,105,110,0),887]]);
       let confirmatione: Map<any, any> = new Map([[String.fromCharCode(102,111,114,109,97,116,116,101,114,115,95,116,95,50,54,0),578], [String.fromCharCode(118,95,49,48,48,95,99,111,101,102,102,105,99,105,101,110,116,115,0),685], [String.fromCharCode(114,95,57,56,95,115,99,116,101,0),254]]);
         tumbnailJ -= parseFloat(`${3 | stationsU.size}`);
         lessJ.push(lessJ.length / 1);
      while (!defaultfootballbg1.includes(dragclose8)) {
         dragclose8 += controlj.length % (Math.max(defaultfootballbg1.length, 9));
         break;
      }
      let circleM = stationsU.size <= 5087469;
      do {
         stationsU = new Map([[`${controlj.length}`, controlj.length * parseInt(`${tumbnailJ}`)]]);
         if (circleM) {
            break;
         }
      } while (circleM && (!Array.from(stationsU.keys()).includes(`${controlj.length}`)));
         defaultfootballbg1 = [controlj.length ^ actionsR.size];
      iconwechatY = new Map([[read4, ((cornerkickF ? 4 : 3))]]);
      if (privilegeo) {
         break;
      }
   } while (privilegeo && (5 < (2 ^ iconwechatY.size) || (iconwechatY.size ^ 2) < 5));
       let lessE: Array<any> = [String.fromCharCode(98,95,55,52,0), String.fromCharCode(101,95,52,55,95,109,101,116,104,111,100,115,0)];
       let hooksB = String.fromCharCode(102,95,53,52,95,108,111,99,97,108,105,122,97,116,105,111,110,115,0);
         hooksB += `${(String.fromCharCode(67,0) == hooksB ? lessE.length : hooksB.length)}`;
      if (3 > lessE.length) {
          let commentO: Map<any, any> = new Map([[String.fromCharCode(108,95,51,54,95,115,104,105,101,108,100,0),651], [String.fromCharCode(104,105,103,104,108,105,103,104,116,95,100,95,51,56,0),865], [String.fromCharCode(115,105,100,101,115,95,99,95,52,53,0),449]]);
         hooksB += `${hooksB.length}`;
         commentO.set(`${commentO.size}`, commentO.size | commentO.size);
      }
       let dplusG = 4.0;
       let googlej = 0.0;
      while (4.29 <= (dplusG + 2.39) && 2 <= (4 ^ lessE.length)) {
          let placementY = 3.0;
          let thumbnailY = false;
          let eventsplashp: Array<any> = [3, 670];
          let main_c3 = String.fromCharCode(100,95,55,50,95,99,114,111,115,115,0);
          let libjsijniprofilerC = String.fromCharCode(101,99,114,101,116,95,55,95,56,51,0);
         dplusG *= parseFloat(`${hooksB.length}`);
         placementY *= libjsijniprofilerC.length;
         thumbnailY = eventsplashp.includes(placementY);
         eventsplashp = [(String.fromCharCode(76,0) == libjsijniprofilerC ? eventsplashp.length : libjsijniprofilerC.length)];
         main_c3 += "1";
         break;
      }
      let tempnodatagifx = 8955702 <= hooksB.length;
      do {
         hooksB += `${parseInt(`${googlej}`)}`;
         if (tempnodatagifx) {
            break;
         }
      } while (((5 - hooksB.length) < 4 || 5 < (5 - hooksB.length)) && tempnodatagifx);
         hooksB += `${parseInt(`${dplusG}`) | 1}`;
      downloadingh += `${predictionactiveI.length}`;
        if (await InAppBrowser.isAvailable()) {

   let questiconB = 8218738 >= iconwechatY.size;
   do {
       let libreanimated8 = 0.0;
       let tooltipsq = 2.0;
       let footballx: Map<any, any> = new Map([[String.fromCharCode(108,105,102,101,95,55,95,53,53,0),String.fromCharCode(98,105,111,109,101,116,114,105,99,95,48,95,52,49,0)], [String.fromCharCode(117,110,102,101,116,99,104,95,102,95,54,52,0),String.fromCharCode(113,95,53,57,95,114,101,119,114,105,116,101,114,0)], [String.fromCharCode(115,99,111,112,101,95,116,95,57,54,0),String.fromCharCode(116,95,51,52,0)]]);
       let dialogS = 5.0;
       let chinasamem = String.fromCharCode(102,95,51,54,95,119,101,108,115,0);
          let redgoalo = 3.0;
          let skipD = String.fromCharCode(105,110,99,114,101,109,101,110,116,95,107,95,49,56,0);
         footballx = new Map([[`${footballx.size}`, chinasamem.length]]);
         redgoalo -= parseFloat(`${2}`);
         skipD = `${parseInt(`${redgoalo}`)}`;
         tooltipsq /= Math.max(parseFloat(`${parseInt(`${libreanimated8}`)}`), 5);
      if (4.36 >= (libreanimated8 * tooltipsq)) {
         libreanimated8 += (chinasamem == String.fromCharCode(103,0) ? chinasamem.length : parseInt(`${libreanimated8}`));
      }
          let reactnativeultimatelistviewd = 4.0;
         dialogS *= 3;
         reactnativeultimatelistviewd *= parseInt(`${reactnativeultimatelistviewd}`) << (Math.min(1, Math.abs(1)));
         footballx.set(`${tooltipsq}`, parseInt(`${libreanimated8}`) + 3);
      while (4.97 < (parseFloat(`${footballx.size}`) - tooltipsq)) {
          let selectt = 5.0;
          let graph4: Array<any> = [459, 31];
          let condensedn = 4.0;
         footballx.set(`${selectt}`, parseInt(`${selectt}`) ^ chinasamem.length);
         graph4.push(3);
         condensedn += graph4.length;
         break;
      }
          let clubs: Array<any> = [60, 977, 552];
         footballx.set(`${tooltipsq}`, parseInt(`${tooltipsq}`));
         clubs.push(clubs.length);
      let sendr = String.fromCharCode(55,98,57,105,121,95,100,114,0) == chinasamem;
      do {
         chinasamem += "3";
         if (sendr) {
            break;
         }
      } while (sendr && (dialogS <= chinasamem.length));
      for (let l = 0; l < 3; l++) {
          let vipsportf = 1;
          let libswscaleI = String.fromCharCode(107,95,55,57,95,103,111,108,111,109,98,0);
         footballx.set(libswscaleI, chinasamem.length | libswscaleI.length);
         vipsportf ^= 1;
      }
      for (let c = 0; c < 2; c++) {
         dialogS *= footballx.size - 3;
      }
         chinasamem += `${chinasamem.length >> (Math.min(Math.abs(1), 5))}`;
      if ((2.17 + dialogS) <= 4.1 || 2.96 <= (2.17 * dialogS)) {
         dialogS *= 3 & footballx.size;
      }
      if (tooltipsq > 4.69) {
          let p_hashW = true;
          let handlerm: Array<any> = [824, 23, 353];
          let libfbjnit = 1.0;
          let disconnectedN = false;
         tooltipsq += parseFloat(`${3 ^ parseInt(`${dialogS}`)}`);
         p_hashW = (32 >= ((!p_hashW ? 32 : handlerm.length) / (Math.max(handlerm.length, 3))));
         libfbjnit += parseInt(`${libfbjnit}`) >> (Math.min(3, Math.abs(3)));
         disconnectedN = p_hashW || handlerm.length < 52;
      }
      for (let b = 0; b < 1; b++) {
         footballx = new Map([[`${footballx.size}`, parseInt(`${tooltipsq}`)]]);
      }
      if (tooltipsq >= dialogS) {
          let sans1 = 5;
          let giflivestreamingr = false;
          let halfe = 5;
         tooltipsq /= Math.max(5, parseFloat(`${sans1 << (Math.min(4, Math.abs(1)))}`));
         sans1 -= ((giflivestreamingr ? 2 : 1) - halfe);
         giflivestreamingr = !giflivestreamingr;
         halfe /= Math.max(3 & halfe, 3);
      }
      iconwechatY = new Map([[`${libreanimated8}`, parseInt(`${libreanimated8}`)]]);
      if (questiconB) {
         break;
      }
   } while (questiconB && ((iconwechatY.size % (Math.max(6, predictionactiveI.length))) <= 2 && (predictionactiveI.length % (Math.max(2, 8))) <= 2));
      cornerkickF = iconwechatY.size < 86 && !cornerkickF;
          await InAppBrowser.open(url);
        } else {

   if (read4 != spece) {
       let grayo = String.fromCharCode(110,95,51,48,95,97,108,112,104,97,110,117,109,0);
       let libffmpegkitm = String.fromCharCode(99,111,110,110,101,99,116,120,95,101,95,53,0);
      while (grayo.length < libffmpegkitm.length) {
         libffmpegkitm = `${libffmpegkitm.length}`;
         break;
      }
      if (!libffmpegkitm.endsWith(grayo)) {
         libffmpegkitm += `${libffmpegkitm.length}`;
      }
      let package_fzj = libffmpegkitm.length >= 8310627;
      do {
          let views_ = String.fromCharCode(122,95,51,56,95,100,111,119,110,108,105,110,107,0);
          let pressureR = true;
          let footballfieldP = String.fromCharCode(122,95,53,51,95,103,101,116,115,0);
         libffmpegkitm += `${((pressureR ? 3 : 3) / (Math.max(1, views_.length)))}`;
         views_ = `${1 ^ footballfieldP.length}`;
         pressureR = footballfieldP.length > footballfieldP.length;
         if (package_fzj) {
            break;
         }
      } while ((3 >= grayo.length) && package_fzj);
       let libreactx = String.fromCharCode(105,109,112,111,115,116,101,114,95,112,95,54,50,0);
       let iconwatchnowt = String.fromCharCode(109,105,110,105,109,105,122,101,100,95,100,95,50,55,0);
         iconwatchnowt = `${2 * libffmpegkitm.length}`;
         libffmpegkitm = "1";
      spece = `${1 ^ schedulerX.length}`;
   }
   let login1 = iconwechatY.size <= 8055885;
   do {
      iconwechatY = new Map([[predictionactiveI, schedulerX.length * predictionactiveI.length]]);
      if (login1) {
         break;
      }
   } while (login1 && ((1 ^ spece.length) > 4 && (1 ^ iconwechatY.size) > 5));
          Linking.openURL(url);
        }
      } catch (e) {

      predictionactiveI = `${spece.length & 3}`;
   if (spece.length > 3) {
      cornerkickF = (predictionactiveI.length >> (Math.min(4, spece.length))) <= 34;
   }
        Linking.openURL(url);
      }
    } else {

   while (predictionactiveI.length > spece.length) {
      predictionactiveI = `${spece.length >> (Math.min(1, downloadingh.length))}`;
      break;
   }
      downloadingh += `${schedulerX.length | manifestR.length}`;
      

   let codeN = String.fromCharCode(103,116,113,117,112,117,0) == spece;
   do {
      spece += "1";
      if (codeN) {
         break;
      }
   } while ((schedulerX == spece) && codeN);
       let predictionbannersharedU: Array<any> = [126, 28, 573];
       let mbridgeu = 5.0;
       let iconmorez = String.fromCharCode(109,95,53,48,95,112,111,115,116,97,108,0);
       let yingm = 1.0;
       let expand0 = 1.0;
      for (let l = 0; l < 1; l++) {
          let backgroundQ = false;
          let stylez = 2.0;
          let star7 = 3;
         mbridgeu *= parseFloat(`${parseInt(`${yingm}`) ^ parseInt(`${expand0}`)}`);
         backgroundQ = !backgroundQ;
         stylez -= ((backgroundQ ? 2 : 5) & star7);
         star7 |= ((backgroundQ ? 2 : 3) % (Math.max(star7, 1)));
      }
      let final_ysl = yingm <= 6381643.0;
      do {
          let resulta = 2.0;
          let giftO = false;
          let dplusH = 5.0;
          let appsN = String.fromCharCode(109,95,51,48,95,105,108,98,99,100,97,116,97,0);
          let streamingJ = String.fromCharCode(98,95,55,53,95,109,101,116,97,100,97,116,97,0);
         yingm /= Math.max(parseInt(`${dplusH}`), 2);
         resulta *= (parseFloat(`${(giftO ? 1 : 2) % 2}`));
         giftO = !appsN.startsWith(`${resulta}`);
         dplusH /= Math.max((parseFloat(`${(giftO ? 3 : 2) + appsN.length}`)), 2);
         streamingJ += `${parseInt(`${resulta}`)}`;
         if (final_ysl) {
            break;
         }
      } while (final_ysl && (4.81 <= (1.31 + yingm)));
      while (predictionbannersharedU.length == iconmorez.length) {
         iconmorez += `${(String.fromCharCode(78,0) == iconmorez ? predictionbannersharedU.length : iconmorez.length)}`;
         break;
      }
      while ((2.70 - mbridgeu) > 3.89 || (yingm - mbridgeu) > 2.70) {
         yingm *= 3 ^ parseInt(`${yingm}`);
         break;
      }
      spece += `${((cornerkickF ? 4 : 3) % (Math.max(2, 7)))}`;
      Linking.openURL(url);
    }

    if (onPress)

   let taile = 7542714 >= schedulerX.length;
   do {
      schedulerX = `${schedulerX.length}`;
      if (taile) {
         break;
      }
   } while (taile && (spece.length <= 4));
   if (read4 == String.fromCharCode(102,0)) {
      spece = `${downloadingh.length * 1}`;
   }
      onPress({
        slot_id: bannerAd.ads_slot_id,
        id: bannerAd.ads_id,
        title: bannerAd.ads_event_title,
        name: bannerAd.ads_name,
      });
  };

  return (
    <TouchableOpacity
      style={{
        paddingVertical: 5,
      }}
      onPress={redirectToAd}>
      <FastImage
        source={{
          uri: bannerAd?.ads_pic,
        }}
        style={{width: '100%', aspectRatio: 64 / 10, borderRadius: 8}}
        resizeMode={'contain'}
        useFastImage={true}
      />
    </TouchableOpacity>
  );
};
