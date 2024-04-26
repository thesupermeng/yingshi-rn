import React, { memo, useState, useRef, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  FlatList,
  Dimensions,
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import styles from './ww_utils_orangeclock';
import { TouchableOpacity } from 'react-native';
import { formatMatchDate } from '../../utility/utils';
import { wwEighteenShirt } from '@redux/ww_small';
import { wwInfo } from '../../types/ww_dice';
import { Url } from '../../middleware/ww_phone_langkey';
import { useInfiniteQuery } from '@tanstack/react-query';
import wwShirtPhilippines from '../../middleware/ww_klevin';
import MatchSchedule from './ww_libavformat';
import FastImage from '../../../components/common/ww_result';
import { TOPON_BANNER_HEIGHT } from '@utility/ww_icon';

interface wwIndexDice {
  matchTypeID: number;
  status?: number;
  setShowBecomeVIPOverlay: any;
  bgDark?:boolean
}

type wwSpinnerInouttargetred = {
  date: string | undefined;
  data: wwInfo | undefined;
};

type ww_dialog_club = {
  headers: number[];
  data: wwSpinnerInouttargetred[];
};

const MatchScheduleList = ({
  matchTypeID,
  status = -1,
  setShowBecomeVIPOverlay,
  bgDark = false
}: wwIndexDice) => {
  const { colors, textVariants, spacing } = useTheme();
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  const latestListDate = useRef<Date | undefined>();
  let flatlistRef = useRef();

  const [isFetchNext, setFetchNext] = useState(false);
  const [showLoading, setShowLoading] = useState(false);

  const [matches, setMatches] = useState<ww_dialog_club>({
    headers: [],
    data: [],
  });

  const getUrl = () => {
       let logoutS: Array<any> = [688, 516, 528];
    let libavdevicez = 4.0;
    let pauseD: Array<any> = [66, 977];
    let rewindu = 5.0;
    let inactivey = false;
    let whistlek = String.fromCharCode(105,110,116,101,114,108,97,99,101,95,115,95,49,54,0);
    let acceptedI = 4.0;
    let libfabricjniW: Map<any, any> = new Map([[String.fromCharCode(114,95,50,49,95,99,111,100,101,98,111,111,107,115,0),457], [String.fromCharCode(118,95,49,57,95,104,105,110,116,115,0),38]]);
    let iconnewsshareJ = String.fromCharCode(108,95,49,54,95,97,116,116,105,98,117,116,101,0);
    let acceptedn = true;
      inactivey = logoutS.length >= 29 && acceptedI >= 53.67;
   for (let b = 0; b < 3; b++) {
      libfabricjniW.set(`${rewindu}`, parseInt(`${rewindu}`));
   }

    let url = '';

      inactivey = whistlek.length < libfabricjniW.size;
       let tempnodatagifD = false;
       let webview9 = 2.0;
      for (let a = 0; a < 3; a++) {
         tempnodatagifD = 92.78 <= webview9;
      }
          let static_4X = 2.0;
         webview9 += parseFloat(`${1 | parseInt(`${static_4X}`)}`);
      if (webview9 < 1.64 && (webview9 * 1.64) < 2.56) {
         webview9 *= parseFloat(`${parseInt(`${webview9}`) - 3}`);
      }
         webview9 -= (parseFloat(`${(tempnodatagifD ? 1 : 5) ^ parseInt(`${webview9}`)}`));
         tempnodatagifD = !tempnodatagifD;
       let filledx = 4.0;
       let libsgcorej = 3.0;
      whistlek += `${logoutS.length % 3}`;
    if (matchTypeID !== -1) {
      url += `?sports_type=${matchTypeID}`;
    }
    if (url === '') {
      url = '?';
    }
    if (status !== -1) {
      url += `&status=${status}`;
    } else {
      url += `&is_live=${true}`;
    }
    

   for (let p = 0; p < 2; p++) {
      libavdevicez += logoutS.length >> (Math.min(Math.abs(3), 1));
   }
       let ewardedA = String.fromCharCode(111,112,117,115,95,48,95,56,51,0);
       let photo1 = 3;
       let profileframef = 2.0;
         photo1 |= parseInt(`${profileframef}`) % 3;
         photo1 -= parseInt(`${profileframef}`);
          let defaultlogoj: Map<any, any> = new Map([[String.fromCharCode(121,95,56,52,95,120,99,104,97,99,104,97,0),302], [String.fromCharCode(105,95,51,51,95,109,97,116,120,0),335]]);
          let shareY = String.fromCharCode(115,112,97,99,101,114,115,95,100,95,56,49,0);
          let sinab = 1.0;
         photo1 <<= Math.min(3, Math.abs((String.fromCharCode(87,0) == shareY ? shareY.length : photo1)));
         defaultlogoj = new Map([[`${defaultlogoj.size}`, 2]]);
         sinab /= Math.max(4, parseFloat(`${parseInt(`${sinab}`) >> (Math.min(Math.abs(defaultlogoj.size), 3))}`));
      while (profileframef < photo1) {
         photo1 >>= Math.min(Math.abs(ewardedA.length << (Math.min(5, Math.abs(photo1)))), 1);
         break;
      }
      while (2.10 == profileframef) {
         photo1 += 2 ^ ewardedA.length;
         break;
      }
      while (profileframef >= photo1) {
          let becomeR: Array<any> = [388, 701];
          let gdtadvn = 5.0;
          let transferd = 5.0;
          let x_unlockQ: Map<any, any> = new Map([[String.fromCharCode(120,98,105,110,95,101,95,54,50,0),33], [String.fromCharCode(115,104,105,109,109,101,114,105,110,103,95,51,95,54,57,0),444]]);
          let subbasketballplayerN: Array<any> = [827, 886, 888];
         photo1 &= photo1 >> (Math.min(Math.abs(x_unlockQ.size), 3));
         becomeR = [subbasketballplayerN.length >> (Math.min(Math.abs(3), 3))];
         gdtadvn /= Math.max(parseInt(`${gdtadvn}`), 1);
         transferd += becomeR.length;
         x_unlockQ = new Map([[`${subbasketballplayerN.length}`, subbasketballplayerN.length]]);
         break;
      }
       let redgoalu = 1;
       let iconshare3 = 3;
       let delegate_oi = 0;
       let expandY = String.fromCharCode(117,95,53,95,99,111,118,101,114,0);
      whistlek += `${(whistlek == String.fromCharCode(86,0) ? whistlek.length : libfabricjniW.size)}`;
    

      pauseD = [logoutS.length << (Math.min(Math.abs(2), 5))];
   while (iconnewsshareJ == String.fromCharCode(86,0) || whistlek.length <= 1) {
       let huaweil = String.fromCharCode(122,95,55,53,95,112,97,99,107,115,0);
      if (huaweil == String.fromCharCode(99,0)) {
         huaweil = "3";
      }
      let b_unlockC = String.fromCharCode(117,103,106,0) == huaweil;
      do {
         huaweil += `${huaweil.length}`;
         if (b_unlockC) {
            break;
         }
      } while ((!huaweil.startsWith(`${huaweil.length}`)) && b_unlockC);
         huaweil = `${huaweil.length << (Math.min(huaweil.length, 2))}`;
      whistlek += `${whistlek.length >> (Math.min(Math.abs(3), 4))}`;
      break;
   }
    

   while (iconnewsshareJ.length >= whistlek.length) {
      whistlek = `${1 + iconnewsshareJ.length}`;
      break;
   }
      rewindu -= parseFloat(`${libfabricjniW.size % 1}`);
    

   while (3.22 == (libavdevicez / (Math.max(logoutS.length, 5))) && (logoutS.length % 2) == 4) {
       let sharei = String.fromCharCode(101,118,97,108,117,97,116,101,100,95,49,95,55,52,0);
      while (sharei.length <= 1) {
         sharei += `${sharei.length}`;
         break;
      }
      if (!sharei.includes(sharei)) {
          let roundo: Array<any> = [String.fromCharCode(113,100,101,108,116,97,95,113,95,52,0), String.fromCharCode(121,95,51,50,95,102,105,110,100,97,115,111,99,0), String.fromCharCode(99,111,108,111,114,115,95,97,95,50,57,0)];
          let buffer0 = String.fromCharCode(108,97,121,101,114,115,95,118,95,50,56,0);
          let gradlej = 0.0;
          let sharedy = false;
         sharei = `${parseInt(`${gradlej}`)}`;
         roundo.push((String.fromCharCode(90,0) == buffer0 ? roundo.length : buffer0.length));
         gradlej -= (parseFloat(`${1 / (Math.max(3, (sharedy ? 1 : 4)))}`));
         sharedy = (38 < (buffer0.length % (Math.max(2, (!sharedy ? 38 : buffer0.length)))));
      }
      if (sharei.startsWith(`${sharei.length}`)) {
          let sendC = String.fromCharCode(119,95,51,53,95,97,108,108,111,99,97,116,111,114,0);
         sharei += `${sendC.length}`;
      }
      logoutS = [3 << (Math.min(Math.abs(parseInt(`${libavdevicez}`)), 3))];
      break;
   }
   for (let u = 0; u < 1; u++) {
       let whitetickW = 4;
       let helper_ = 1.0;
       let templateprocessorX = String.fromCharCode(120,98,105,110,95,103,95,49,57,0);
       let pingT = 4.0;
       let static_s9 = true;
         helper_ *= 2;
          let livenodatabgimgP = true;
         templateprocessorX = `${whitetickW + 1}`;
         livenodatabgimgP = (livenodatabgimgP ? !livenodatabgimgP : !livenodatabgimgP);
         pingT += ((static_s9 ? 4 : 2) % (Math.max(parseInt(`${pingT}`), 9)));
         static_s9 = (65 == ((!static_s9 ? templateprocessorX.length : 65) & templateprocessorX.length));
      while (5.99 == pingT) {
         templateprocessorX += `${2 & templateprocessorX.length}`;
         break;
      }
       let bingo = String.fromCharCode(106,95,51,51,95,108,111,103,102,117,110,99,0);
      if (4 > whitetickW) {
         whitetickW += whitetickW << (Math.min(Math.abs(1), 5));
      }
      if (static_s9 && 3 >= bingo.length) {
         bingo += "1";
      }
          let sigmobl = false;
          let defaultlogoT = 1.0;
         static_s9 = sigmobl;
         defaultlogoT *= parseInt(`${defaultlogoT}`);
         static_s9 = (bingo.length + helper_) >= 5.57;
         templateprocessorX += `${whitetickW}`;
         static_s9 = helper_ > 33.0 || !static_s9;
      for (let w = 0; w < 3; w++) {
         helper_ /= Math.max(3, ((static_s9 ? 5 : 4) ^ parseInt(`${pingT}`)));
      }
         static_s9 = !static_s9 || pingT > 42.91;
      let xvodA = templateprocessorX == String.fromCharCode(117,97,99,111,97,102,0);
      do {
         templateprocessorX += "3";
         if (xvodA) {
            break;
         }
      } while ((5 <= (templateprocessorX.length | 5) && 5 <= (templateprocessorX.length | whitetickW)) && xvodA);
      inactivey = libfabricjniW.size <= 93 && helper_ <= 99.76;
   }
    

   let sansc = 6798672 >= pauseD.length;
   do {
       let iconrefreshK = 0.0;
       let weatherf: Map<any, any> = new Map([[String.fromCharCode(117,95,53,52,95,105,110,118,111,108,118,101,100,0),true ], [String.fromCharCode(114,101,99,116,105,102,121,95,103,95,53,0),true ]]);
         weatherf.set(`${iconrefreshK}`, parseInt(`${iconrefreshK}`));
       let dpluso = 0;
       let volumeA = 1.0;
      while (5 == (5 + weatherf.size) && (iconrefreshK - 2.20) == 1.31) {
          let styleD = true;
          let matchactiveg = String.fromCharCode(101,95,55,51,95,111,98,118,105,111,117,115,108,121,0);
         iconrefreshK -= parseFloat(`${1 & parseInt(`${iconrefreshK}`)}`);
         styleD = !styleD;
         matchactiveg += `${(matchactiveg == String.fromCharCode(97,0) ? (styleD ? 5 : 3) : matchactiveg.length)}`;
         break;
      }
       let codeG = String.fromCharCode(97,95,54,49,95,119,97,118,101,108,101,116,0);
       let line1 = String.fromCharCode(114,101,99,101,110,116,95,50,95,57,0);
       let show8 = 3;
       let privilegeb = 0;
      pauseD = [iconnewsshareJ.length ^ whistlek.length];
      if (sansc) {
         break;
      }
   } while (sansc && (Array.from(libfabricjniW.values()).includes(pauseD.length)));
      logoutS.push(1 * logoutS.length);
    

      whistlek += `${iconnewsshareJ.length}`;
      acceptedI += (parseFloat(`${(inactivey ? 5 : 5) % (Math.max(1, 9))}`));
    

   if ((5 | whistlek.length) >= 5 && (5 << (Math.min(4, whistlek.length))) >= 2) {
       let stylesO = 3.0;
       let sharedG = 2.0;
       let heartQ = String.fromCharCode(114,101,112,108,97,99,105,110,103,95,51,95,49,52,0);
       let switch_xlT = 3;
       let shareS = String.fromCharCode(99,95,54,48,95,116,111,112,105,99,0);
      let gestures8 = stylesO <= 6099128.0;
      do {
         stylesO /= Math.max(2, shareS.length);
         if (gestures8) {
            break;
         }
      } while ((2.69 == (sharedG + stylesO) || (sharedG + stylesO) == 2.69) && gestures8);
         heartQ = `${shareS.length}`;
      for (let x = 0; x < 1; x++) {
          let abidetectg = 0;
          let predictioni: Map<any, any> = new Map([[String.fromCharCode(122,95,52,52,95,97,98,115,120,0),616], [String.fromCharCode(120,95,51,51,95,98,101,110,99,104,0),302]]);
         sharedG *= 2 | parseInt(`${sharedG}`);
         abidetectg -= abidetectg;
         predictioni = new Map([[`${predictioni.size}`, abidetectg]]);
      }
      for (let b = 0; b < 3; b++) {
         shareS = "2";
      }
          let libfollyF = String.fromCharCode(120,95,57,95,110,97,109,101,115,112,97,99,101,0);
          let vipsport5 = String.fromCharCode(104,111,108,100,101,114,95,120,95,56,56,0);
          let mapbufferm = false;
         shareS += `${libfollyF.length ^ vipsport5.length}`;
         libfollyF = `${((mapbufferm ? 4 : 3))}`;
         vipsport5 = `${(3 ^ (mapbufferm ? 5 : 5))}`;
         shareS += `${parseInt(`${stylesO}`)}`;
          let shrinkJ = 4.0;
          let viewerw = String.fromCharCode(110,95,49,48,95,108,105,98,0);
         stylesO *= viewerw.length;
         shrinkJ += parseFloat(`${1 & parseInt(`${shrinkJ}`)}`);
         viewerw += `${parseInt(`${shrinkJ}`)}`;
       let football6 = String.fromCharCode(99,117,116,101,115,116,95,100,95,53,56,0);
       let iconeditj = String.fromCharCode(116,114,97,110,115,105,116,105,111,110,101,100,95,50,95,57,51,0);
      for (let g = 0; g < 1; g++) {
         switch_xlT += switch_xlT;
      }
         shareS += "2";
         football6 += "1";
          let lighte = true;
          let bing1 = 2;
          let playlistG: Map<any, any> = new Map([[String.fromCharCode(112,105,99,109,101,109,115,101,116,95,51,95,51,55,0),String.fromCharCode(102,95,49,54,95,103,114,111,117,112,105,110,103,0)], [String.fromCharCode(115,111,117,114,99,101,105,100,95,116,95,56,49,0),String.fromCharCode(116,114,97,105,116,115,95,98,95,57,51,0)], [String.fromCharCode(115,105,108,101,110,99,101,95,56,95,50,0),String.fromCharCode(114,95,56,48,95,117,110,104,105,103,104,108,105,103,104,116,0)]]);
         football6 += `${bing1 / (Math.max(9, switch_xlT))}`;
         lighte = playlistG.size <= 35;
         bing1 /= Math.max(1, 1);
         playlistG = new Map([[`${playlistG.size}`, ((lighte ? 2 : 2) << (Math.min(Math.abs(playlistG.size), 5)))]]);
      let ksadS = 6509607 >= switch_xlT;
      do {
         switch_xlT <<= Math.min(4, Math.abs(3 * shareS.length));
         if (ksadS) {
            break;
         }
      } while ((1 == (switch_xlT + heartQ.length) && (1 + switch_xlT) == 3) && ksadS);
          let textlayoutmanagerY: Array<any> = [741, 31, 922];
          let arrowrightW = 2.0;
         football6 += `${heartQ.length ^ parseInt(`${sharedG}`)}`;
         textlayoutmanagerY.push(2 | parseInt(`${arrowrightW}`));
         arrowrightW /= Math.max(textlayoutmanagerY.length & parseInt(`${arrowrightW}`), 2);
      for (let e = 0; e < 3; e++) {
          let phoneL = String.fromCharCode(105,110,116,101,110,116,95,51,95,56,53,0);
          let description_c3: Map<any, any> = new Map([[String.fromCharCode(112,101,114,105,111,100,95,51,95,57,56,0),String.fromCharCode(117,95,56,56,95,110,111,116,105,102,105,101,114,0)], [String.fromCharCode(122,95,53,54,95,118,101,114,116,105,99,97,108,108,121,0),String.fromCharCode(115,113,108,105,116,101,101,120,116,95,106,95,54,56,0)]]);
          let updatesZ = 1.0;
         football6 = `${phoneL.length | 3}`;
         phoneL += `${parseInt(`${updatesZ}`) * description_c3.size}`;
         description_c3 = new Map([[`${description_c3.size}`, 1]]);
         updatesZ += parseInt(`${updatesZ}`) % (Math.max(description_c3.size, 5));
      }
      libavdevicez += shareS.length >> (Math.min(2, Math.abs(parseInt(`${sharedG}`))));
   }
   while (whistlek.length > 5) {
      libfabricjniW.set(`${rewindu}`, pauseD.length);
      break;
   }
    return Url.matches11 + url;
  };

  const url = getUrl(); 

  const fetchData = useCallback(async () => {
       let typings = String.fromCharCode(101,95,55,50,95,111,112,116,105,109,97,108,0);
    let libswresamplea = 1.0;
    let iconbackwhiteq: Map<any, any> = new Map([[String.fromCharCode(118,97,97,99,97,108,99,117,108,97,116,105,111,110,95,55,95,55,48,0),734], [String.fromCharCode(99,111,109,112,108,101,109,101,110,116,95,114,95,57,56,0),93], [String.fromCharCode(101,95,54,48,95,99,114,105,116,105,99,97,108,115,101,99,116,105,111,110,0),264]]);
    let complete8 = 5.0;
    let baseq = 5;
    let appleY = String.fromCharCode(103,97,109,101,95,118,95,54,50,0);
    let notificationW = String.fromCharCode(97,95,57,51,95,99,111,110,102,101,116,116,105,0);
    let championE = String.fromCharCode(116,95,49,49,95,116,101,109,112,110,97,109,101,0);
    let with_rz = String.fromCharCode(109,97,112,112,97,98,108,101,95,120,95,55,56,0);
    let bridge3 = 0;
      complete8 += parseFloat(`${typings.length * iconbackwhiteq.size}`);

    const data = (await wwShirtPhilippines.call(url, {}, 'GET')).data

   let iconuserA = 9324500.0 >= complete8;
   do {
      complete8 += parseFloat(`${1 >> (Math.min(Math.abs(baseq), 3))}`);
      if (iconuserA) {
         break;
      }
   } while (iconuserA && (complete8 <= libswresamplea));
    

       let default_pup = String.fromCharCode(114,101,113,117,101,115,116,97,98,108,101,95,117,95,51,54,0);
       let libjsinspectorS = 1.0;
       let whiteK = 3;
          let themeM: Map<any, any> = new Map([[String.fromCharCode(114,101,112,111,114,116,101,114,95,53,95,55,54,0),595], [String.fromCharCode(100,95,55,95,101,120,110,111,100,101,0),708], [String.fromCharCode(109,97,116,114,105,120,102,95,104,95,56,48,0),177]]);
         libjsinspectorS /= Math.max(2, parseFloat(`${3 + default_pup.length}`));
         themeM.set(`${themeM.size}`, themeM.size);
       let whatsappb = String.fromCharCode(116,97,112,102,105,108,116,101,114,95,122,95,49,52,0);
       let langkeyW = String.fromCharCode(100,99,116,115,117,98,95,48,95,50,57,0);
      if (3.32 >= libjsinspectorS) {
         libjsinspectorS += parseFloat(`${3}`);
      }
          let yellowredcardq = 2;
         default_pup += "3";
         yellowredcardq += yellowredcardq / 1;
       let u_imageO = 4.0;
      for (let n = 0; n < 2; n++) {
         libjsinspectorS += parseFloat(`${whiteK}`);
      }
         u_imageO *= parseFloat(`${2}`);
       let countryU: Array<any> = [749, 427, 175];
      if (5 < (3 >> (Math.min(2, langkeyW.length))) && (3 >> (Math.min(1, langkeyW.length))) < 3) {
         countryU = [parseInt(`${u_imageO}`)];
      }
      typings = `${default_pup.length >> (Math.min(appleY.length, 5))}`;
    if (data !== undefined) {

   if ((parseInt(`${complete8}`) / (Math.max(championE.length, 10))) <= 3) {
       let details5 = 3;
       let awayteamfields = 2;
       let shootc = String.fromCharCode(119,95,53,53,95,102,114,97,109,101,105,110,102,111,0);
       let detailso = String.fromCharCode(110,95,57,57,95,112,117,108,115,101,0);
       let expiredc = String.fromCharCode(99,114,108,102,95,104,95,50,56,0);
       let actionv = String.fromCharCode(114,95,57,53,95,112,97,99,107,101,116,104,101,97,100,101,114,0);
       let assistN = 5.0;
      if (expiredc.length < shootc.length) {
          let analyticV = 0;
          let linkj = 0;
          let pauseq: Map<any, any> = new Map([[String.fromCharCode(103,95,50,52,95,109,97,107,101,99,116,0),false ], [String.fromCharCode(109,97,115,107,113,95,112,95,48,0),false ]]);
         expiredc += `${expiredc.length - linkj}`;
         analyticV -= pauseq.size;
         linkj *= 1 & analyticV;
         pauseq.set(`${analyticV}`, pauseq.size);
      }
          let singaporeF: Map<any, any> = new Map([[String.fromCharCode(118,95,50,54,95,116,105,109,101,108,105,110,101,115,0),501], [String.fromCharCode(98,97,100,95,121,95,54,0),63], [String.fromCharCode(101,110,101,114,103,121,95,121,95,52,51,0),223]]);
          let baselineZ = String.fromCharCode(113,95,57,55,95,98,114,105,100,103,101,97,98,108,101,0);
         actionv += `${parseInt(`${assistN}`)}`;
         singaporeF = new Map([[`${singaporeF.size}`, singaporeF.size]]);
         baselineZ += `${baselineZ.length + singaporeF.size}`;
         detailso = `${shootc.length}`;
       let score9 = 3.0;
       let condensedM = 5.0;
          let taiwanD = String.fromCharCode(118,95,49,55,95,111,112,115,99,97,108,101,0);
         detailso = `${3 << (Math.min(4, detailso.length))}`;
         taiwanD += `${taiwanD.length}`;
          let libglogC = 3.0;
         detailso = `${shootc.length}`;
         libglogC *= parseFloat(`${2 - parseInt(`${libglogC}`)}`);
       let schedulerZ: Map<any, any> = new Map([[String.fromCharCode(115,95,54,55,95,110,111,105,115,101,115,0),682], [String.fromCharCode(115,101,99,116,105,111,110,115,95,54,95,57,57,0),898], [String.fromCharCode(111,112,116,97,98,108,101,95,108,95,56,52,0),587]]);
         details5 *= 3;
       let libffmpegkitd = String.fromCharCode(112,114,105,109,105,116,105,118,101,95,51,95,57,57,0);
       let zhengpianw = String.fromCharCode(102,105,108,116,95,51,95,56,52,0);
          let baiduZ = true;
          let countdownq: Map<any, any> = new Map([[String.fromCharCode(100,114,97,103,103,105,110,103,95,110,95,51,48,0),54], [String.fromCharCode(102,95,55,57,95,112,114,105,111,0),913]]);
         assistN += ((baiduZ ? 4 : 2) % (Math.max(parseInt(`${score9}`), 4)));
         baiduZ = 58 < countdownq.size && countdownq.size < 58;
      complete8 *= (parseFloat(`${shootc == String.fromCharCode(114,0) ? baseq : shootc.length}`));
      awayteamfields *= awayteamfields;
   }
      const dates = Object.keys(data);

   if (4 < (championE.length / 1)) {
      complete8 += parseFloat(`${with_rz.length}`);
   }
      let lst: wwSpinnerInouttargetred[] = isFetchNext ? matches.data : [];
      let headers = isFetchNext ? matches.headers : [];
      let count = lst.length;

      libswresamplea /= Math.max(iconbackwhiteq.size, 5);
      if (latestListDate.current === undefined) {

   if ((parseFloat(`${notificationW.length}`) - complete8) >= 5.49) {
       let material_ = String.fromCharCode(103,117,101,115,115,101,100,95,113,95,52,57,0);
       let unfill2: Map<any, any> = new Map([[String.fromCharCode(103,108,98,108,95,116,95,52,57,0),22], [String.fromCharCode(99,111,114,114,95,112,95,52,57,0),643], [String.fromCharCode(100,121,97,100,105,99,95,52,95,49,55,0),847]]);
      for (let u = 0; u < 2; u++) {
          let expandb = true;
          let predictionU = 2.0;
          let emptyu = String.fromCharCode(102,95,56,55,95,97,117,116,104,107,101,121,0);
          let dacccfaabfbcbadeebddcabacdffdbv = 1.0;
         unfill2 = new Map([[`${unfill2.size}`, unfill2.size * 1]]);
         expandb = emptyu.length < 96;
         predictionU *= parseInt(`${predictionU}`) - 3;
         emptyu = `${((expandb ? 2 : 3) * parseInt(`${dacccfaabfbcbadeebddcabacdffdbv}`))}`;
         dacccfaabfbcbadeebddcabacdffdbv -= ((expandb ? 1 : 1));
      }
         unfill2.set(material_, unfill2.size * material_.length);
      while ((material_.length ^ 1) < 3) {
          let helperG = true;
          let tempnodatagift = String.fromCharCode(97,95,52,50,95,116,105,109,101,119,97,105,116,0);
          let less8 = true;
         material_ = `${material_.length}`;
         helperG = !tempnodatagift.endsWith(`${helperG}`);
         tempnodatagift += `${tempnodatagift.length}`;
         less8 = !helperG;
         break;
      }
         unfill2 = new Map([[`${unfill2.size}`, unfill2.size / (Math.max(2, 3))]]);
         material_ = `${1 % (Math.max(1, material_.length))}`;
      if (unfill2.size < 2) {
         unfill2.set(material_, material_.length / (Math.max(3, 5)));
      }
      complete8 -= parseFloat(`${1 * baseq}`);
   }
        latestListDate.current = new Date(dates[dates.length - 1]);
      }
      if (status <= 2) {

   while (4 < (1 >> (Math.min(2, with_rz.length))) && 4 < (1 >> (Math.min(1, with_rz.length)))) {
      baseq >>= Math.min(Math.abs((notificationW == String.fromCharCode(90,0) ? notificationW.length : championE.length)), 3);
      break;
   }
        latestListDate.current = new Date(
          latestListDate.current.getTime() + 86400000,
        );
      } else {

       let libjsinspectorg = String.fromCharCode(100,108,114,114,95,52,95,50,50,0);
      while (4 <= libjsinspectorg.length) {
          let yellowvideoliveo = true;
          let lineh = 1;
          let defaultlogol = String.fromCharCode(117,95,52,53,95,115,116,101,112,112,101,100,0);
         libjsinspectorg += `${3 >> (Math.min(1, libjsinspectorg.length))}`;
         yellowvideoliveo = yellowvideoliveo || defaultlogol.length <= 13;
         lineh ^= lineh;
         defaultlogol = `${((yellowvideoliveo ? 4 : 1))}`;
         break;
      }
       let handlerN = 1.0;
         libjsinspectorg = `${libjsinspectorg.length}`;
      complete8 /= Math.max(parseFloat(`${parseInt(`${libswresamplea}`)}`), 5);
        latestListDate.current = new Date(
          latestListDate.current.getTime() - 86400000,
        );
      }
      for (const date of dates) {

   while (5 > (appleY.length & 4)) {
      appleY = `${notificationW.length}`;
      break;
   }
        const dateDate = new Date(date)

   if (4 > (5 & with_rz.length) && (3.72 * libswresamplea) > 3.95) {
      with_rz = `${championE.length}`;
   }
        const now = new Date()

      typings += `${championE.length}`;
        const sevenDaysBefore = new Date(now.valueOf() - 7 * 24 * 60 * 60 * 1000)

   if (appleY.startsWith(`${libswresamplea}`)) {
      appleY += "3";
   }
        const sevenDaysAfter = new Date(now.valueOf() + 7 * 24 * 60 * 60 * 1000)

   if (3 == iconbackwhiteq.size) {
      baseq /= Math.max(parseInt(`${libswresamplea}`) ^ 1, 5);
   }

        if (dateDate < sevenDaysBefore || dateDate > sevenDaysAfter) continue

        lst.push({ date: formatMatchDate(date), data: undefined });
        headers.push(count);

       let selectedS = String.fromCharCode(113,117,111,116,97,95,101,95,54,51,0);
       let yinga = 5.0;
          let sheetj: Map<any, any> = new Map([[String.fromCharCode(115,95,49,55,95,118,105,101,119,0),547], [String.fromCharCode(118,95,49,51,95,112,105,120,108,101,116,0),439]]);
          let upload9 = String.fromCharCode(101,95,49,55,95,97,115,112,101,99,116,115,0);
          let qaagu = 2;
         selectedS = `${qaagu & 3}`;
         sheetj.set(upload9, 1);
         upload9 += `${1 | upload9.length}`;
         qaagu <<= Math.min(Math.abs(1), 2);
      if ((selectedS.length & 1) == 5 && (selectedS.length - parseInt(`${yinga}`)) == 1) {
         selectedS += "1";
      }
      for (let m = 0; m < 1; m++) {
         selectedS = `${parseInt(`${yinga}`) ^ selectedS.length}`;
      }
         selectedS = `${selectedS.length}`;
         yinga += (String.fromCharCode(101,0) == selectedS ? parseInt(`${yinga}`) : selectedS.length);
         yinga += 3 * parseInt(`${yinga}`);
      with_rz += `${2 % (Math.max(8, iconbackwhiteq.size))}`;
        count += 1;
        data[date].forEach((element: wwInfo) => {
          lst.push({ date: undefined, data: element });
          count += 1;
        });
      }
      setMatches({
        headers: headers,
        data: lst,
      });
    }

  }, [])

  useEffect(() => {
    fetchData().then()
  }, [])

  const Content = useCallback(({
    item,
    index,
  }: {
    item: { date: string | undefined; data: wwInfo | undefined };
    index: number;
  }) => {
    return (
      <View style={{ width: width }}>
        {item?.date !== undefined ? (
          <View
            style={{
              backgroundColor: bgDark ? '#0c0c0c' : colors.card2,
              padding: spacing.xs,
              paddingLeft: spacing.sideOffset,
            }}>
            <Text style={textVariants.header}>{item?.date}</Text>
          </View>
        ) : (
          item?.data !== undefined && (
            <>
      
            <MatchSchedule
          bgDark={true}
              setShowBecomeVIPOverlay={setShowBecomeVIPOverlay}
              key={index}
              matchSche={item?.data}
            />
            </>
          )
        )}
      </View>
    );
  }, []);

  const handleRefresh = () => {
       let libfabricjniR = String.fromCharCode(115,95,50,57,95,116,97,115,107,115,0);
    let modalP = 1.0;
    let reducer5: Array<any> = [93, 712, 548];
    let headerF = 4;
    let googleK = 3;
    let release_5j = false;
    let downarrowZ = 2;
    let gemfile7: Array<any> = [987, 492];
    let benefitP = 1.0;
    let agreementZ = false;
    let cornerkickN = String.fromCharCode(111,95,56,57,95,115,105,110,113,98,0);
    let type_foW = String.fromCharCode(118,95,52,50,95,115,119,114,101,115,97,109,112,108,101,114,101,115,0);
    let d_counto = String.fromCharCode(107,95,54,52,95,108,105,98,97,118,114,101,115,97,109,112,108,101,0);
    let shirtE = String.fromCharCode(109,107,100,105,114,95,100,95,53,48,0);
    let benefite = String.fromCharCode(98,103,109,99,95,115,95,52,54,0);
      libfabricjniR = `${cornerkickN.length}`;
      release_5j = 45.64 >= benefitP || !agreementZ;
   let awayteamfieldR = 9591901 >= headerF;
   do {
      headerF &= 1;
      if (awayteamfieldR) {
         break;
      }
   } while (awayteamfieldR && (2 < headerF));
   while (type_foW.length == 3 && libfabricjniR != String.fromCharCode(90,0)) {
       let previewU = 1.0;
       let downN: Array<any> = [504, 498, 986];
       let manifestq = String.fromCharCode(114,101,102,117,110,100,95,101,95,49,55,0);
       let window_tu = String.fromCharCode(121,95,52,55,95,111,117,116,98,111,120,0);
       let reactnativejso = String.fromCharCode(97,99,99,117,114,97,99,121,95,112,95,55,55,0);
         reactnativejso += `${3 % (Math.max(6, downN.length))}`;
      if (previewU < 5.75) {
         previewU *= 2;
      }
      let interstitialH = 8215959.0 >= previewU;
      do {
         previewU /= Math.max(manifestq.length << (Math.min(window_tu.length, 1)), 2);
         if (interstitialH) {
            break;
         }
      } while (interstitialH && (5.60 == previewU));
      for (let v = 0; v < 3; v++) {
          let championB = String.fromCharCode(114,95,54,49,95,97,118,101,114,97,103,101,115,0);
          let n_titlei: Map<any, any> = new Map([[String.fromCharCode(108,101,97,121,95,118,95,53,53,0),106], [String.fromCharCode(118,95,50,51,95,116,97,112,0),763], [String.fromCharCode(112,111,112,117,112,115,95,107,95,53,57,0),421]]);
         manifestq = `${(String.fromCharCode(54,0) == window_tu ? downN.length : window_tu.length)}`;
         championB += `${championB.length + n_titlei.size}`;
         n_titlei.set(`${championB}`, championB.length / (Math.max(8, n_titlei.size)));
      }
       let baidub = 3.0;
      let weatherp = 9426629 >= downN.length;
      do {
          let profileframe9 = String.fromCharCode(117,110,115,116,111,112,112,97,98,108,101,95,52,95,57,51,0);
          let commonc = String.fromCharCode(98,105,110,100,105,110,103,115,95,121,95,55,48,0);
          let middlebrightnessu: Map<any, any> = new Map([[String.fromCharCode(115,101,103,95,101,95,50,57,0),635], [String.fromCharCode(99,117,114,114,101,110,100,95,105,95,57,55,0),239], [String.fromCharCode(117,112,100,97,116,101,100,95,110,95,56,55,0),677]]);
          let pathC = String.fromCharCode(102,114,101,101,102,111,114,109,95,104,95,55,54,0);
          let previewv = 2;
         downN.push(2);
         profileframe9 += `${commonc.length}`;
         commonc += `${pathC.length >> (Math.min(Math.abs(3), 4))}`;
         middlebrightnessu.set(`${commonc}`, 3);
         pathC = `${3 & previewv}`;
         previewv &= 1 + profileframe9.length;
         if (weatherp) {
            break;
         }
      } while (weatherp && ((downN.length | manifestq.length) == 1 || (1 | downN.length) == 5));
          let macaug: Array<any> = [736, 826];
         window_tu += `${downN.length >> (Math.min(Math.abs(2), 4))}`;
         macaug = [macaug.length ^ 2];
      if (2.34 < (5.38 - previewU) && 5.38 < (window_tu.length - previewU)) {
         previewU /= Math.max(1, 5);
      }
         manifestq += `${(window_tu == String.fromCharCode(89,0) ? window_tu.length : downN.length)}`;
         manifestq = `${manifestq.length}`;
          let m_imagea = true;
          let libglogg = String.fromCharCode(105,115,101,120,112,108,97,105,110,95,117,95,50,48,0);
          let topicC = String.fromCharCode(99,111,115,105,103,110,97,116,111,114,105,101,115,95,115,95,55,56,0);
         downN.push(((m_imagea ? 4 : 3) >> (Math.min(Math.abs(3), 3))));
         m_imagea = String.fromCharCode(106,0) == libglogg;
         libglogg = `${topicC.length + libglogg.length}`;
         topicC = `${1 * topicC.length}`;
      let encryptA = reactnativejso.length >= 8528105;
      do {
         reactnativejso += `${(String.fromCharCode(77,0) == manifestq ? window_tu.length : manifestq.length)}`;
         if (encryptA) {
            break;
         }
      } while (encryptA && (window_tu == String.fromCharCode(67,0) && reactnativejso != String.fromCharCode(73,0)));
      for (let j = 0; j < 2; j++) {
         reactnativejso += `${1 ^ downN.length}`;
      }
      for (let d = 0; d < 3; d++) {
         downN.push(parseInt(`${baidub}`) << (Math.min(downN.length, 2)));
      }
      while (4.37 < baidub) {
          let yellowredcardX: Array<any> = [378, 387, 706];
         downN.push(3);
         yellowredcardX = [1];
         break;
      }
      libfabricjniR += `${headerF}`;
      break;
   }
      agreementZ = headerF >= parseInt(`${benefitP}`);
   for (let f = 0; f < 3; f++) {
      benefitP += parseFloat(`${2}`);
   }
       let armva1 = String.fromCharCode(98,95,57,48,95,99,111,108,108,101,99,116,111,114,0);
       let actionZ = 4.0;
       let libaneA = String.fromCharCode(103,110,117,116,108,115,95,54,95,56,56,0);
          let foundZ = true;
          let teamdetailsbgL = false;
          let fastforwardc = String.fromCharCode(120,95,50,51,95,115,99,104,101,100,0);
         actionZ /= Math.max(parseFloat(`${parseInt(`${actionZ}`) >> (Math.min(armva1.length, 1))}`), 5);
         foundZ = !teamdetailsbgL;
         teamdetailsbgL = (((!teamdetailsbgL ? fastforwardc.length : 6) / (Math.max(fastforwardc.length, 1))) > 6);
      let libruntimeexecutor8 = armva1 == String.fromCharCode(55,121,102,48,109,118,53,107,56,0);
      do {
         armva1 = `${armva1.length << (Math.min(1, libaneA.length))}`;
         if (libruntimeexecutor8) {
            break;
         }
      } while ((!libaneA.startsWith(`${armva1.length}`)) && libruntimeexecutor8);
         armva1 = `${3 - armva1.length}`;
         actionZ -= parseFloat(`${libaneA.length}`);
         armva1 += `${armva1.length ^ 2}`;
      let sharemodalx = actionZ >= 6737212.0;
      do {
          let chatl = String.fromCharCode(100,121,110,97,109,105,99,115,95,97,95,49,48,0);
          let mimoi = 1.0;
         actionZ /= Math.max(5, parseFloat(`${1}`));
         chatl = `${chatl.length << (Math.min(5, Math.abs(parseInt(`${mimoi}`))))}`;
         mimoi *= parseFloat(`${3}`);
         if (sharemodalx) {
            break;
         }
      } while (((2.13 / (Math.max(10, actionZ))) <= 3.74 || 2 <= (libaneA.length * 1)) && sharemodalx);
         libaneA += `${(libaneA == String.fromCharCode(117,0) ? armva1.length : libaneA.length)}`;
          let weibo0 = String.fromCharCode(102,116,118,118,101,114,116,108,105,110,101,95,49,95,55,54,0);
         libaneA = `${(libaneA == String.fromCharCode(78,0) ? libaneA.length : parseInt(`${actionZ}`))}`;
         weibo0 = `${weibo0.length}`;
      if (!libaneA.includes(`${actionZ}`)) {
         libaneA = `${(armva1 == String.fromCharCode(112,0) ? parseInt(`${actionZ}`) : armva1.length)}`;
      }
      type_foW = `${headerF & googleK}`;
      benefitP -= parseFloat(`${parseInt(`${benefitP}`) % 3}`);
   if (!libfabricjniR.includes(`${agreementZ}`)) {
      agreementZ = type_foW.length == parseInt(`${benefitP}`);
   }

    setShowLoading(true)
    flatlistRef?.current?.scrollToOffset({animated:false, offset:0})
    setTimeout(() => {

   for (let w = 0; w < 1; w++) {
      googleK &= parseInt(`${modalP}`) >> (Math.min(1, Math.abs(3)));
   }
   if (!agreementZ) {
       let regengX: Map<any, any> = new Map([[String.fromCharCode(111,117,116,102,105,108,101,115,95,54,95,56,52,0),263], [String.fromCharCode(98,105,103,116,114,101,101,95,109,95,52,54,0),111], [String.fromCharCode(112,114,105,109,101,114,95,118,95,54,56,0),256]]);
       let cancel3 = String.fromCharCode(114,101,100,118,95,98,95,54,50,0);
       let executori = String.fromCharCode(109,115,114,108,101,100,101,99,95,110,95,57,52,0);
       let long_fG = String.fromCharCode(102,101,116,99,104,101,114,95,101,95,50,50,0);
       let loadingc = String.fromCharCode(101,95,53,95,97,112,112,108,105,101,100,0);
         loadingc = `${(long_fG == String.fromCharCode(120,0) ? loadingc.length : long_fG.length)}`;
       let firebaseP = 3;
       let select_ = 5.0;
      while (executori != String.fromCharCode(81,0)) {
         cancel3 += `${cancel3.length * parseInt(`${select_}`)}`;
         break;
      }
         cancel3 = "1";
      while ((regengX.size / (Math.max(2, cancel3.length))) > 2 && 2 > (regengX.size / (Math.max(cancel3.length, 10)))) {
          let private_tO = String.fromCharCode(115,101,116,116,108,105,110,103,95,105,95,49,51,0);
          let reviews = String.fromCharCode(114,101,110,101,119,97,98,108,101,95,100,95,53,48,0);
          let runtimeschedulerA: Array<any> = [951, 780, 551];
         cancel3 = `${runtimeschedulerA.length >> (Math.min(Math.abs(1), 1))}`;
         private_tO += `${reviews.length}`;
         reviews = `${private_tO.length}`;
         runtimeschedulerA = [3];
         break;
      }
      for (let w = 0; w < 2; w++) {
          let malaysiad = 5;
          let stationsI = String.fromCharCode(108,111,97,115,95,119,95,56,57,0);
          let bootsplashQ = 3.0;
         firebaseP %= Math.max(1 >> (Math.min(2, cancel3.length)), 1);
         malaysiad -= malaysiad * 2;
         stationsI += `${stationsI.length}`;
         bootsplashQ *= parseFloat(`${2}`);
      }
      if (executori.startsWith(`${firebaseP}`)) {
         executori = "1";
      }
          let buildT: Array<any> = [String.fromCharCode(113,95,51,57,95,117,110,101,115,99,97,112,101,0), String.fromCharCode(100,95,51,48,95,97,119,97,105,116,105,110,103,0), String.fromCharCode(114,116,112,101,110,99,95,107,95,55,51,0)];
         select_ *= parseFloat(`${parseInt(`${select_}`) * firebaseP}`);
         buildT.push(buildT.length - 1);
         regengX = new Map([[`${select_}`, cancel3.length ^ 3]]);
      for (let b = 0; b < 1; b++) {
         loadingc += `${cancel3.length * regengX.size}`;
      }
         select_ -= parseFloat(`${long_fG.length << (Math.min(1, executori.length))}`);
      if (5.91 <= (5.94 / (Math.max(5, select_))) && (select_ / (Math.max(5.94, 2))) <= 3.62) {
         select_ *= parseFloat(`${2 - cancel3.length}`);
      }
         long_fG += `${(String.fromCharCode(95,0) == cancel3 ? cancel3.length : executori.length)}`;
         long_fG = `${regengX.size % (Math.max(long_fG.length, 1))}`;
      googleK <<= Math.min(5, Math.abs(2));
   }
   while (!agreementZ || (4.38 / (Math.max(3, benefitP))) > 1.88) {
      benefitP -= parseFloat(`${gemfile7.length}`);
      break;
   }
      downarrowZ &= googleK << (Math.min(1, Math.abs(1)));
       let activea = String.fromCharCode(111,95,51,53,95,105,110,116,101,114,102,114,97,109,101,0);
       let showc = 2.0;
       let libjsiZ = 2.0;
          let hooksx = 1;
          let iconstarn: Array<any> = [861, 803];
         activea = `${hooksx}`;
         hooksx >>= Math.min(Math.abs(1 - iconstarn.length), 2);
         iconstarn = [iconstarn.length];
          let firebasem = 0.0;
          let mbsplash2 = 4.0;
          let greyarrowupC = String.fromCharCode(116,95,55,48,95,102,105,110,100,101,112,0);
         showc /= Math.max(3 & parseInt(`${firebasem}`), 4);
         firebasem -= (greyarrowupC == String.fromCharCode(95,0) ? greyarrowupC.length : parseInt(`${mbsplash2}`));
         mbsplash2 += parseInt(`${mbsplash2}`) << (Math.min(greyarrowupC.length, 1));
         showc /= Math.max(parseInt(`${showc}`), 5);
      for (let a = 0; a < 1; a++) {
         showc += parseInt(`${libjsiZ}`) >> (Math.min(Math.abs(1), 4));
      }
          let dataL = String.fromCharCode(119,95,53,48,95,98,111,111,108,101,97,110,0);
          let executor8 = 2.0;
          let uimanagerV: Array<any> = [515, 634, 879];
         showc *= uimanagerV.length % (Math.max(10, parseInt(`${executor8}`)));
         dataL = `${dataL.length}`;
         executor8 += dataL.length;
         showc *= (String.fromCharCode(56,0) == activea ? parseInt(`${showc}`) : activea.length);
         activea = `${parseInt(`${showc}`) ^ 1}`;
          let webviewU = 3;
          let libsentryP = true;
         activea += `${parseInt(`${showc}`)}`;
         webviewU *= ((libsentryP ? 4 : 2) + webviewU);
         libsentryP = libsentryP && webviewU <= 84;
      while (3.51 >= (1.69 - libjsiZ) || (libjsiZ - showc) >= 1.69) {
          let filedu = String.fromCharCode(107,95,54,55,95,97,110,116,105,99,111,108,108,97,112,115,101,0);
          let schedulerF = 2.0;
         showc -= 3 - parseInt(`${showc}`);
         filedu = `${parseInt(`${schedulerF}`) >> (Math.min(Math.abs(3), 3))}`;
         schedulerF += (filedu == String.fromCharCode(112,0) ? filedu.length : parseInt(`${schedulerF}`));
         break;
      }
      release_5j = (googleK << (Math.min(reducer5.length, 4))) == 15;
   for (let s = 0; s < 2; s++) {
       let castingY = true;
       let eventsplasht = String.fromCharCode(98,105,116,95,115,95,49,48,0);
       let stylesq = 2;
      while (1 < eventsplasht.length) {
         eventsplasht = `${eventsplasht.length}`;
         break;
      }
       let const_wz = 5;
          let backiconp = String.fromCharCode(111,103,103,112,97,99,107,95,49,95,53,55,0);
         castingY = eventsplasht.length > 32;
         backiconp += `${backiconp.length}`;
      while (4 > (2 << (Math.min(2, Math.abs(const_wz)))) || castingY) {
         const_wz ^= const_wz ^ 1;
         break;
      }
          let clearq: Map<any, any> = new Map([[String.fromCharCode(106,95,54,51,95,115,116,114,114,101,115,101,116,0),629], [String.fromCharCode(104,121,112,111,116,104,101,115,101,115,95,57,95,55,52,0),487]]);
          let libsentryD = 2;
         const_wz += 2;
         clearq.set(`${libsentryD}`, 2);
         libsentryD /= Math.max(4, clearq.size);
         stylesq &= const_wz;
         const_wz <<= Math.min(4, Math.abs(((castingY ? 3 : 4))));
       let update_uD = 2;
      for (let a = 0; a < 3; a++) {
         castingY = update_uD < const_wz;
      }
      headerF /= Math.max(((agreementZ ? 5 : 4) % (Math.max(eventsplasht.length, 4))), 3);
   }
       let unimplementedviewi = String.fromCharCode(114,101,115,112,101,99,116,105,110,103,95,117,95,56,51,0);
       let videoQ = 3.0;
       let hiadd = String.fromCharCode(115,95,54,48,95,101,99,114,101,116,0);
         videoQ += parseFloat(`${parseInt(`${videoQ}`) + 1}`);
      let changeT = String.fromCharCode(54,122,97,100,111,55,49,118,115,111,0) == hiadd;
      do {
          let guideX: Array<any> = [938, 275];
          let weibos = String.fromCharCode(103,95,49,50,95,114,101,115,0);
          let overu = 1;
          let enewsx = true;
         hiadd = `${2 / (Math.max(8, parseInt(`${videoQ}`)))}`;
         guideX = [guideX.length | 2];
         weibos = `${weibos.length}`;
         overu /= Math.max(5, ((enewsx ? 5 : 5)));
         enewsx = 42 < overu && String.fromCharCode(102,0) == weibos;
         if (changeT) {
            break;
         }
      } while ((3 > (hiadd.length * 4) && 1 > (4 & hiadd.length)) && changeT);
      if (!hiadd.endsWith(`${videoQ}`)) {
          let unimplementedviewU = String.fromCharCode(100,97,116,101,116,105,109,101,95,99,95,52,56,0);
         videoQ += parseFloat(`${unimplementedviewi.length}`);
         unimplementedviewU += `${2 - unimplementedviewU.length}`;
      }
          let libruntimeexecutorU = 5;
         hiadd = "3";
         libruntimeexecutorU >>= Math.min(3, Math.abs(libruntimeexecutorU << (Math.min(Math.abs(libruntimeexecutorU), 1))));
          let fasty = String.fromCharCode(100,95,50,95,103,114,97,112,104,113,108,0);
         unimplementedviewi += `${unimplementedviewi.length}`;
         fasty = `${3 | fasty.length}`;
      if (1.17 > (4.45 * videoQ) && 4.45 > (parseFloat(`${unimplementedviewi.length}`) * videoQ)) {
         videoQ -= parseFloat(`${hiadd.length - 3}`);
      }
      while (parseFloat(`${unimplementedviewi.length}`) >= videoQ) {
          let verticalk = String.fromCharCode(114,97,105,116,95,105,95,55,51,0);
          let notificationW = String.fromCharCode(110,95,57,56,95,98,117,102,102,0);
         videoQ /= Math.max(4, parseFloat(`${1 ^ notificationW.length}`));
         verticalk = `${verticalk.length - 3}`;
         notificationW += "3";
         break;
      }
          let componentregistrya = String.fromCharCode(122,95,57,95,115,117,112,112,111,114,116,115,0);
         videoQ += parseFloat(`${1 * parseInt(`${videoQ}`)}`);
         componentregistrya += `${componentregistrya.length}`;
      for (let c = 0; c < 3; c++) {
         videoQ /= Math.max(parseFloat(`${1}`), 1);
      }
      agreementZ = cornerkickN.length < type_foW.length;
      reducer5.push(gemfile7.length);
      downarrowZ -= 2;
      setShowLoading(false)
    }, 1000)
  }

  return (
    <View style={{ flex: 1 }}>
      {matches?.data !== undefined && matches.data.length > 0 ? (
        <FlatList
          ref={flatlistRef}
          data={matches.data}
          windowSize={3}
          maxToRenderPerBatch={10}
          initialNumToRender={10}
          renderItem={Content}
          
          
          
          
          
          
          onEndReachedThreshold={0.9}
          stickyHeaderIndices={matches.headers}
          ListFooterComponent={<View style={{paddingTop: TOPON_BANNER_HEIGHT + 20}}/>}
        />
      ) : (
        <View style={{ height: height }}>
          <View style={styles.buffering} />
        </View>
      )}

      {showLoading && <View style={{
        position: 'absolute', 
        backgroundColor: colors.background, 
        zIndex: 1, 
        width: '100%', 
        height: '100%', 
        justifyContent: 'center', 
        alignItems: 'center', 
      }}>
        <FastImage
          source={require('@static/images/runtimeschedulerPromotion.gif')}
          style={{ width: 100, height: 100 }}
          resizeMode="contain"
        />
      </View>}

      <TouchableOpacity
        style={styles.refresh}
        onPress={() => {
          fetchData();
          handleRefresh(); 
        }}>
        <FastImage
          source={require('../../assets/images/graphPrivilegePackage_76.png')}
          style={{ width: 35, height: 35 }}
          resizeMode={"contain"}
        />
      </TouchableOpacity>
    </View>
  );
};
export default memo(MatchScheduleList);
