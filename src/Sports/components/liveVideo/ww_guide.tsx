import React, { useState, useEffect, useCallback, memo, useRef } from 'react';
import {
  Dimensions,
  Modal,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './ww_utils_orangeclock';
import { VideoLiveType } from '../../global/ww_libswresample';
import { wwInfo, wwControls } from '../../types/ww_dice';
import VodPlayer, { wwBinddatasHandler } from '../../../components/videoPlayer/ww_libreanimated';
import { lockAppOrientation } from '@redux/actions/ww_dialog';
import { wwEighteenShirt } from '@redux/ww_small';
import { wwShielddoneAlbum } from '@redux/reducers/ww_detail_mbsplash';
import { useAppDispatch, useAppSelector } from '@hooks/ww_catagory_neon';
import WebView from 'react-native-webview';
import BackIcon from '@static/images/catalogLiveendmodallogoDefaultpredictionprofile.svg';
import { useIsFocused, useTheme } from '@react-navigation/native';
import ww_runtime from '../../../../Umeng/ww_runtime';
import CountdownIndicator from '../../../components/button/ww_zhubo';

interface wwIndexDice {
  videoRef?: React.MutableRefObject<wwBinddatasHandler | null>;
  matchID?: number;
  streamID?: number;
  liveDataState?: wwInfo;
  onLiveEnd?: any;
  onLoad?: any;
  videoSource?: {
    type: number;
    url: any;
  };
  setVideoSource?: any;
  onGoBack: () => void;
  showCountdown: boolean;
  countdownTime?: number;
  onVipCountdownClick: () => void;
}

const LiveVideo = ({
  videoRef,
  matchID,
  liveDataState,
  onLiveEnd,
  onLoad,
  streamID,
  videoSource,
  setVideoSource,
  onGoBack,
  showCountdown = false,
  countdownTime = 0,
  onVipCountdownClick,
}: wwIndexDice) => {
  const { colors } = useTheme();

  const homeName = liveDataState?.home?.name;
  const awayName = liveDataState?.away?.name;
  const combinedName = `${homeName} vs ${awayName}`;

  const dispatch = useAppDispatch();

  const [isReadyPlay, setReadyPlay] = useState(false);
  const settingsReducer: wwShielddoneAlbum = useAppSelector(
    ({ settingsReducer }: wwEighteenShirt) => settingsReducer,
  );

  
  
  
  
  
  // } = useSelector(s => s.videoPlayerControl);

  
  const [streamData, setStreamData] = useState<wwControls | undefined>();
  const streamsData = liveDataState?.streams;
  const streamRoomID = streamData?.id;
  

  const onHandleBack = () => {
       let attributedstringK: Map<any, any> = new Map([[String.fromCharCode(104,101,118,99,100,101,99,95,48,95,49,48,0),929], [String.fromCharCode(98,95,51,51,0),112]]);
    let pathF: Map<any, any> = new Map([[String.fromCharCode(119,95,56,48,95,112,114,111,106,101,99,116,105,111,110,0),895], [String.fromCharCode(99,108,101,97,110,95,122,95,50,53,0),272]]);
    let vipsportx = String.fromCharCode(104,95,55,55,95,100,101,99,114,101,102,0);
    let iconwatchnowR = false;
    let with_s3: Map<any, any> = new Map([[String.fromCharCode(98,97,99,107,105,110,103,95,56,95,57,53,0),880], [String.fromCharCode(99,104,97,114,97,99,116,101,114,115,95,54,95,52,50,0),989], [String.fromCharCode(102,97,115,116,116,101,115,116,95,57,95,53,54,0),148]]);
    let hiadN = true;
    let qaagC: Map<any, any> = new Map([[String.fromCharCode(118,97,108,105,100,97,116,101,95,114,95,53,55,0),922], [String.fromCharCode(104,95,49,95,97,118,117,105,0),806]]);
    let benefitk = String.fromCharCode(99,114,101,100,101,110,116,105,97,108,95,99,95,53,49,0);
    let benefitq: Map<any, any> = new Map([[String.fromCharCode(120,95,52,56,95,99,97,114,100,97,110,111,0),757], [String.fromCharCode(118,110,101,103,113,95,111,95,53,49,0),207], [String.fromCharCode(97,108,108,121,117,118,95,120,95,50,57,0),22]]);
   let unimplementedviewZ = qaagC.size >= 7166256;
   do {
      qaagC.set(benefitk, ((hiadN ? 2 : 5)));
      if (unimplementedviewZ) {
         break;
      }
   } while ((!benefitk.endsWith(`${qaagC.size}`)) && unimplementedviewZ);
   while (iconwatchnowR) {
      pathF.set(vipsportx, 1);
      break;
   }
      qaagC.set(`${benefitk}`, qaagC.size & benefitk.length);
       let textm: Array<any> = [76, 758];
         textm.push(textm.length);
          let analyticsg = 3.0;
          let agreementX = String.fromCharCode(116,104,101,109,101,100,95,48,95,56,54,0);
         textm.push(agreementX.length - 3);
         analyticsg /= Math.max(4, parseFloat(`${parseInt(`${analyticsg}`) ^ parseInt(`${analyticsg}`)}`));
         agreementX = `${parseInt(`${analyticsg}`)}`;
         textm = [textm.length];
      attributedstringK.set(`${with_s3.size}`, with_s3.size / (Math.max(benefitq.size, 3)));
   while (5 == (vipsportx.length / (Math.max(8, benefitq.size))) || (5 / (Math.max(2, benefitq.size))) == 2) {
      benefitq = new Map([[`${qaagC.size}`, qaagC.size % 2]]);
      break;
   }
   while (!benefitk.includes(`${qaagC.size}`)) {
       let pagination1: Array<any> = [String.fromCharCode(119,95,57,52,95,99,111,100,101,98,111,111,107,0), String.fromCharCode(114,101,113,117,101,115,116,97,98,108,101,95,111,95,56,48,0), String.fromCharCode(118,111,114,98,105,115,100,115,112,95,50,95,54,51,0)];
       let sortF = 2.0;
       let baselineN: Array<any> = [476, 705];
       let defaultplayerimgy = 5.0;
       let mappingN = String.fromCharCode(116,120,116,110,105,100,95,56,95,54,52,0);
      if (baselineN.length == 2) {
         baselineN.push(baselineN.length);
      }
      let tickK = 9879699 >= pagination1.length;
      do {
          let sinaw = String.fromCharCode(119,95,57,53,95,104,112,105,99,0);
          let gpayF = 2.0;
         pagination1.push(2 + parseInt(`${sortF}`));
         sinaw += `${sinaw.length * 2}`;
         gpayF += 1;
         if (tickK) {
            break;
         }
      } while ((1 == pagination1.length) && tickK);
      let eventy = 5603444 <= baselineN.length;
      do {
          let searchbarL: Array<any> = [870, 997, 108];
          let gifgoalbg4 = String.fromCharCode(109,95,52,55,95,100,101,116,101,99,116,101,100,0);
          let dycreatorF: Map<any, any> = new Map([[String.fromCharCode(99,111,117,110,116,101,100,95,122,95,56,56,0),624], [String.fromCharCode(116,105,109,101,119,97,105,116,95,112,95,56,51,0),59]]);
          let dark9 = String.fromCharCode(103,95,57,57,95,115,101,116,108,101,99,116,101,100,0);
          let untickg = String.fromCharCode(109,97,107,101,100,112,107,103,95,49,95,51,49,0);
         baselineN = [2 + mappingN.length];
         searchbarL = [dycreatorF.size];
         gifgoalbg4 = `${(String.fromCharCode(75,0) == dark9 ? dark9.length : dycreatorF.size)}`;
         untickg += `${(String.fromCharCode(81,0) == gifgoalbg4 ? dycreatorF.size : gifgoalbg4.length)}`;
         if (eventy) {
            break;
         }
      } while (eventy && ((pagination1.length / (Math.max(6, baselineN.length))) > 4 && (baselineN.length / (Math.max(pagination1.length, 8))) > 4));
      while (5 >= mappingN.length) {
         pagination1.push(parseInt(`${sortF}`));
         break;
      }
      if (3 == (3 | baselineN.length)) {
         defaultplayerimgy /= Math.max(parseFloat(`${parseInt(`${sortF}`)}`), 4);
      }
          let libavformatx = false;
          let rncorej: Array<any> = [813, 519];
          let fcdaebecbcbafcdfceaaeccfeacdb0 = 4;
         defaultplayerimgy *= (parseFloat(`${fcdaebecbcbafcdfceaaeccfeacdb0 / (Math.max(1, (libavformatx ? 5 : 3)))}`));
         libavformatx = rncorej.length < rncorej.length;
       let colorsh: Map<any, any> = new Map([[String.fromCharCode(98,105,116,95,112,95,57,57,0),296], [String.fromCharCode(111,110,101,95,100,95,52,0),840], [String.fromCharCode(101,120,99,101,101,100,95,104,95,56,0),501]]);
       let webviews: Map<any, any> = new Map([[String.fromCharCode(104,95,55,56,95,100,111,99,108,105,115,116,0),String.fromCharCode(101,109,112,105,114,105,99,97,108,108,121,95,98,95,51,57,0)], [String.fromCharCode(105,110,108,105,110,107,95,102,95,50,56,0),String.fromCharCode(103,102,105,110,116,95,121,95,54,51,0)], [String.fromCharCode(100,95,50,50,0),String.fromCharCode(112,95,52,95,117,110,109,97,114,115,104,97,108,0)]]);
         pagination1 = [mappingN.length / (Math.max(4, parseInt(`${sortF}`)))];
         mappingN = "2";
         sortF += webviews.size;
      while ((webviews.size ^ colorsh.size) >= 2 || (webviews.size ^ colorsh.size) >= 2) {
         colorsh = new Map([[`${webviews.size}`, webviews.size]]);
         break;
      }
      let imagenetworkerru = 7446512.0 >= defaultplayerimgy;
      do {
         defaultplayerimgy += parseFloat(`${pagination1.length ^ parseInt(`${sortF}`)}`);
         if (imagenetworkerru) {
            break;
         }
      } while (imagenetworkerru && ((2 & baselineN.length) < 2));
      if (5.12 >= sortF) {
         sortF -= webviews.size >> (Math.min(Math.abs(1), 5));
      }
          let indexC = 4.0;
         baselineN.push(baselineN.length);
         indexC *= parseInt(`${indexC}`) - 3;
      while (webviews.get(`${defaultplayerimgy}`) == null) {
         defaultplayerimgy /= Math.max(parseFloat(`${colorsh.size}`), 2);
         break;
      }
      benefitk += "2";
      break;
   }
   while ((with_s3.size % (Math.max(benefitk.length, 3))) > 1 && 3 > (with_s3.size % (Math.max(1, 1)))) {
      with_s3.set(`${benefitk}`, benefitk.length & pathF.size);
      break;
   }
   let forwardM = benefitk == String.fromCharCode(104,97,120,113,107,117,49,97,0);
   do {
      benefitk = `${benefitq.size}`;
      if (forwardM) {
         break;
      }
   } while (forwardM && (1 < (benefitk.length % (Math.max(8, attributedstringK.size)))));

    if (
      settingsReducer.appOrientation === 'PORTRAIT' ||
      settingsReducer.appOrientation === 'PORTRAIT-UPSIDEDOWN'
    ) {

       let iconclosewhitebgD = 3;
      if (iconclosewhitebgD >= 4) {
         iconclosewhitebgD <<= Math.min(Math.abs(iconclosewhitebgD & iconclosewhitebgD), 4);
      }
      for (let s = 0; s < 3; s++) {
          let zoom_: Array<any> = [39, 106, 638];
          let adultt = String.fromCharCode(99,104,101,99,107,112,97,99,107,101,116,95,97,95,52,57,0);
          let penaltygoalL = String.fromCharCode(119,95,54,50,95,112,115,100,115,112,0);
         iconclosewhitebgD ^= iconclosewhitebgD;
         zoom_ = [zoom_.length];
         adultt += `${2 & penaltygoalL.length}`;
         penaltygoalL = `${penaltygoalL.length ^ 3}`;
      }
         iconclosewhitebgD <<= Math.min(4, Math.abs(iconclosewhitebgD | iconclosewhitebgD));
      iconwatchnowR = (attributedstringK.size / (Math.max(pathF.size, 9))) <= 61;
      pathF = new Map([[vipsportx, ((hiadN ? 1 : 1) >> (Math.min(Math.abs(2), 5)))]]);
   if (benefitk.endsWith(`${hiadN}`)) {
       let gdtadvQ = String.fromCharCode(122,95,51,54,95,112,97,99,107,101,116,115,0);
       let configureT = 5.0;
       let navigationI: Array<any> = [581, 816, 638];
       let halffieldimagev = String.fromCharCode(116,95,54,57,95,108,111,119,0);
       let weatherC = String.fromCharCode(112,114,101,117,112,108,111,97,100,95,121,95,53,57,0);
      if (!gdtadvQ.endsWith(`${configureT}`)) {
         configureT += parseFloat(`${gdtadvQ.length}`);
      }
         gdtadvQ = `${parseInt(`${configureT}`)}`;
      while ((parseInt(`${configureT}`) + weatherC.length) <= 2) {
         weatherC = `${halffieldimagev.length - weatherC.length}`;
         break;
      }
      let reactnavigationz = navigationI.length <= 5231359;
      do {
         navigationI = [gdtadvQ.length];
         if (reactnavigationz) {
            break;
         }
      } while ((3 > (5 * navigationI.length) && 5 > (halffieldimagev.length * 5)) && reactnavigationz);
         gdtadvQ += `${navigationI.length}`;
          let downloaderL = String.fromCharCode(107,95,54,51,95,117,110,122,116,101,108,108,0);
          let binddatasM = String.fromCharCode(103,95,52,54,95,112,114,105,110,116,0);
         configureT *= parseFloat(`${binddatasM.length}`);
         downloaderL += "3";
         binddatasM += `${(String.fromCharCode(117,0) == downloaderL ? downloaderL.length : downloaderL.length)}`;
         configureT += parseFloat(`${parseInt(`${configureT}`) & 3}`);
      let liveendmodallogoQ = navigationI.length >= 8488537;
      do {
         navigationI = [navigationI.length];
         if (liveendmodallogoQ) {
            break;
         }
      } while (liveendmodallogoQ && (1 > (navigationI.length ^ 3) || (weatherC.length ^ 3) > 4));
         halffieldimagev = `${halffieldimagev.length >> (Math.min(Math.abs(3), 4))}`;
          let emojiq = true;
          let filterb = String.fromCharCode(112,95,54,49,95,99,111,110,116,101,120,116,115,0);
          let down2 = true;
         navigationI = [1];
         emojiq = filterb.length <= 96;
         filterb += `${filterb.length}`;
         down2 = !emojiq;
         configureT -= parseFloat(`${weatherC.length / (Math.max(3, gdtadvQ.length))}`);
      while (halffieldimagev != gdtadvQ) {
         gdtadvQ = `${(gdtadvQ == String.fromCharCode(115,0) ? weatherC.length : gdtadvQ.length)}`;
         break;
      }
      if (2.66 > (configureT / 2.18)) {
         gdtadvQ = `${halffieldimagev.length / (Math.max(gdtadvQ.length, 6))}`;
      }
      for (let i = 0; i < 2; i++) {
         configureT += parseFloat(`${halffieldimagev.length % (Math.max(2, 5))}`);
      }
      let kuaishoug = String.fromCharCode(110,52,57,57,117,112,0) == gdtadvQ;
      do {
          let stylen = String.fromCharCode(99,97,112,105,95,106,95,53,0);
          let mountingN = String.fromCharCode(100,105,115,112,115,97,98,108,101,95,107,95,53,0);
          let libanef = 1.0;
          let dependenciesJ = true;
          let shootp = false;
         gdtadvQ = `${parseInt(`${configureT}`)}`;
         stylen = `${2 >> (Math.min(5, stylen.length))}`;
         mountingN += `${((shootp ? 4 : 2) | 1)}`;
         libanef /= Math.max(4, stylen.length);
         shootp = 2 < mountingN.length;
         if (kuaishoug) {
            break;
         }
      } while ((weatherC == gdtadvQ) && kuaishoug);
      hiadN = navigationI.length > 42;
   }
   for (let w = 0; w < 1; w++) {
      with_s3 = new Map([[vipsportx, (vipsportx.length - (iconwatchnowR ? 4 : 4))]]);
   }
       let fast7 = 5;
       let modulef = true;
       let fastforwardG = String.fromCharCode(109,105,114,114,111,114,95,48,95,55,52,0);
         modulef = fastforwardG.length < 81 || modulef;
          let textlayoutmanagerU = String.fromCharCode(111,95,56,56,95,108,111,97,100,101,100,0);
          let commonk = String.fromCharCode(108,97,115,116,110,111,100,101,95,56,95,55,50,0);
         modulef = fastforwardG.length <= 54;
         textlayoutmanagerU = `${commonk.length}`;
         commonk += `${textlayoutmanagerU.length}`;
          let cornerc = String.fromCharCode(108,95,50,55,95,102,108,116,117,105,110,116,0);
          let dependencyc = String.fromCharCode(111,95,50,52,95,114,101,119,114,105,116,101,0);
          let awayR: Array<any> = [497, 673, 496];
         fast7 *= cornerc.length & 2;
         cornerc += `${awayR.length}`;
         dependencyc = `${(dependencyc == String.fromCharCode(118,0) ? awayR.length : dependencyc.length)}`;
      if (fast7 >= 1) {
          let floating3 = 0.0;
         modulef = fastforwardG == String.fromCharCode(116,0);
         floating3 *= parseInt(`${floating3}`);
      }
       let textlayoutmanagerS = false;
         textlayoutmanagerS = modulef && fastforwardG.length == 87;
      while (fastforwardG.length <= 5) {
          let r_unlockh = 3.0;
          let guideZ = true;
         fastforwardG = `${parseInt(`${r_unlockh}`)}`;
         r_unlockh /= Math.max((parseFloat(`${(guideZ ? 3 : 4)}`)), 4);
         break;
      }
         fast7 *= fast7;
      while (fast7 > 2) {
          let orientationx = 5.0;
          let volumeI = 4.0;
         textlayoutmanagerS = orientationx < 6.50;
         orientationx /= Math.max(parseFloat(`${parseInt(`${volumeI}`)}`), 1);
         break;
      }
      hiadN = benefitk == String.fromCharCode(114,0);
   while (2 == (qaagC.size & 3)) {
       let configure9 = 5.0;
       let incident4: Map<any, any> = new Map([[String.fromCharCode(111,95,49,49,0),String.fromCharCode(116,121,112,101,99,111,100,101,95,121,95,50,55,0)], [String.fromCharCode(115,116,114,117,99,116,117,114,97,108,95,98,95,49,0),String.fromCharCode(115,95,49,95,108,97,118,117,0)]]);
       let leaguel: Array<any> = [694, 719];
          let nbatrophyd = 1.0;
          let playercommonI = String.fromCharCode(98,121,116,101,99,111,100,101,118,116,97,98,95,49,95,54,53,0);
          let plash_: Map<any, any> = new Map([[String.fromCharCode(115,95,54,54,95,115,111,117,110,100,115,0),true ], [String.fromCharCode(108,95,49,54,95,114,101,118,97,108,105,100,97,116,101,0),true ], [String.fromCharCode(115,97,102,97,114,121,95,49,95,55,48,0),true ]]);
         incident4.set(`${nbatrophyd}`, 2);
         nbatrophyd *= parseFloat(`${playercommonI.length ^ plash_.size}`);
         playercommonI = `${(String.fromCharCode(71,0) == playercommonI ? playercommonI.length : plash_.size)}`;
      let desc4 = 8531164 >= leaguel.length;
      do {
          let dycreatorv = String.fromCharCode(116,95,51,49,95,109,97,116,114,111,115,107,97,0);
          let stringsJ = String.fromCharCode(106,112,101,103,108,105,98,95,51,95,57,54,0);
         leaguel = [dycreatorv.length >> (Math.min(5, stringsJ.length))];
         if (desc4) {
            break;
         }
      } while (((leaguel.length - incident4.size) == 1) && desc4);
         incident4 = new Map([[`${incident4.size}`, leaguel.length]]);
      while (1 == (incident4.size ^ 2) || 4.47 == (configure9 - 1.75)) {
         incident4 = new Map([[`${leaguel.length}`, parseInt(`${configure9}`) * leaguel.length]]);
         break;
      }
      for (let f = 0; f < 2; f++) {
          let goals = String.fromCharCode(115,95,57,48,95,102,116,118,110,115,0);
          let defaultfootballbgc = String.fromCharCode(111,118,101,114,108,97,112,95,105,95,54,55,0);
          let unfillN = String.fromCharCode(110,97,110,111,112,98,95,109,95,51,48,0);
         configure9 *= incident4.size;
         goals += `${goals.length % (Math.max(defaultfootballbgc.length, 2))}`;
         defaultfootballbgc += `${(goals == String.fromCharCode(89,0) ? goals.length : unfillN.length)}`;
         unfillN = "3";
      }
      if ((incident4.size ^ 3) >= 4 && (incident4.size ^ 3) >= 1) {
         incident4 = new Map([[`${incident4.size}`, incident4.size]]);
      }
      for (let p = 0; p < 3; p++) {
          let rulesp = String.fromCharCode(118,95,55,52,95,100,105,97,108,111,103,0);
          let rewardvideon = 2;
          let launcherL: Map<any, any> = new Map([[String.fromCharCode(101,95,51,52,95,103,114,101,101,100,121,0),984], [String.fromCharCode(112,101,97,107,95,111,95,54,54,0),910]]);
          let greya = true;
         incident4 = new Map([[`${greya}`, ((greya ? 4 : 2) + 3)]]);
         rulesp += "3";
         rewardvideon /= Math.max(2, rulesp.length);
         launcherL.set(`${rulesp}`, 3);
      }
      while (4 <= (leaguel.length % 5) && 4 <= (5 / (Math.max(6, leaguel.length)))) {
         configure9 += 1 / (Math.max(10, leaguel.length));
         break;
      }
         incident4 = new Map([[`${incident4.size}`, leaguel.length]]);
      qaagC = new Map([[`${with_s3.size}`, 3 * benefitq.size]]);
      break;
   }
   while (4 > benefitk.length || iconwatchnowR) {
       let gpayN = String.fromCharCode(97,99,99,101,115,115,105,98,105,108,105,116,121,95,117,95,51,52,0);
       let blackG: Map<any, any> = new Map([[String.fromCharCode(114,95,53,51,95,112,111,119,116,97,98,108,101,0),145], [String.fromCharCode(110,101,105,103,104,98,111,117,114,115,95,99,95,52,48,0),743]]);
      let yellowanimationliveH = 5116237 <= gpayN.length;
      do {
          let eactf = String.fromCharCode(115,105,109,117,108,97,116,101,100,95,112,95,52,56,0);
         gpayN = `${eactf.length ^ 2}`;
         if (yellowanimationliveH) {
            break;
         }
      } while ((4 < gpayN.length) && yellowanimationliveH);
          let iconp = 4;
         gpayN = `${iconp % 3}`;
         gpayN += `${3 ^ blackG.size}`;
          let huaweik: Map<any, any> = new Map([[String.fromCharCode(120,121,122,116,97,98,108,101,115,95,120,95,57,54,0),String.fromCharCode(103,110,111,95,55,95,54,48,0)], [String.fromCharCode(107,95,57,55,95,115,117,109,100,105,102,102,0),String.fromCharCode(100,101,113,117,97,110,116,105,122,101,114,95,120,95,53,54,0)], [String.fromCharCode(115,99,114,117,98,98,101,114,95,97,95,52,57,0),String.fromCharCode(101,95,50,49,95,116,109,105,120,0)]]);
          let popupY = String.fromCharCode(102,101,109,97,108,101,95,107,95,57,55,0);
         gpayN = `${gpayN.length}`;
         huaweik.set(`${popupY}`, huaweik.size + 1);
         popupY += "3";
         blackG = new Map([[`${blackG.size}`, blackG.size * 1]]);
      while (4 == (blackG.size % (Math.max(4, 10))) || (gpayN.length % 4) == 5) {
         blackG.set(`${gpayN}`, 2 - gpayN.length);
         break;
      }
      iconwatchnowR = gpayN.length == 21;
      break;
   }
       let analyticE: Map<any, any> = new Map([[String.fromCharCode(108,95,57,48,95,107,101,114,110,101,100,0),698], [String.fromCharCode(107,95,53,56,95,109,111,116,99,111,109,112,0),948], [String.fromCharCode(98,95,56,52,95,116,120,105,100,0),271]]);
       let libglogm = String.fromCharCode(115,100,101,115,95,106,95,51,54,0);
       let bottomd = String.fromCharCode(109,105,110,117,116,101,115,95,54,95,56,57,0);
      while (4 == (bottomd.length - 4)) {
         bottomd = `${analyticE.size + 3}`;
         break;
      }
       let countryy = String.fromCharCode(110,111,110,110,117,108,108,97,100,100,114,101,115,115,95,112,95,56,56,0);
      with_s3 = new Map([[`${analyticE.size}`, pathF.size]]);
      setTimeout(() => setVideoSource(VideoLiveType.DETAIL, ''), 100);
    } else {

      qaagC = new Map([[`${qaagC.size}`, vipsportx.length >> (Math.min(2, Math.abs(qaagC.size)))]]);
   if (!benefitk.endsWith(`${pathF.size}`)) {
       let combineC = 2.0;
      while ((combineC / 4.30) <= 1.23 && 2.73 <= (4.30 * combineC)) {
         combineC *= parseInt(`${combineC}`) % 1;
         break;
      }
         combineC /= Math.max(1 ^ parseInt(`${combineC}`), 5);
      for (let e = 0; e < 3; e++) {
         combineC -= 1;
      }
      benefitk += `${(1 & (iconwatchnowR ? 4 : 1))}`;
   }
   let clubJ = qaagC.size >= 8118296;
   do {
      qaagC.set(`${benefitk}`, benefitk.length);
      if (clubJ) {
         break;
      }
   } while ((5 <= qaagC.size) && clubJ);
   for (let r = 0; r < 1; r++) {
      with_s3 = new Map([[`${attributedstringK.size}`, attributedstringK.size - 1]]);
   }
       let dependencyM = true;
       let baiduW = String.fromCharCode(116,95,53,49,95,97,108,108,114,103,98,0);
       let bridge8 = 2.0;
         bridge8 /= Math.max(2, parseInt(`${bridge8}`));
      while (2 <= baiduW.length || dependencyM) {
          let styleK = String.fromCharCode(120,95,49,48,48,95,99,104,97,110,103,105,110,103,0);
          let connectionl = 4;
         baiduW = `${baiduW.length}`;
         styleK += `${1 + styleK.length}`;
         connectionl ^= connectionl >> (Math.min(styleK.length, 4));
         break;
      }
         bridge8 /= Math.max(5, 1 / (Math.max(9, parseInt(`${bridge8}`))));
      while ((baiduW.length - 3) > 4 || 4 > (baiduW.length / 3)) {
         baiduW += `${((dependencyM ? 4 : 1) + parseInt(`${bridge8}`))}`;
         break;
      }
          let selectionN = 3.0;
          let templateprocessor7 = String.fromCharCode(107,95,51,53,95,101,110,116,114,105,101,115,0);
         bridge8 -= 1 % (Math.max(7, parseInt(`${selectionN}`)));
         selectionN -= templateprocessor7.length * 1;
         templateprocessor7 += "1";
      if (!dependencyM) {
         dependencyM = (parseInt(`${bridge8}`) - baiduW.length) < 6;
      }
      let y_imageG = 6704453 >= baiduW.length;
      do {
          let comments = String.fromCharCode(98,121,116,101,114,117,110,95,55,95,51,49,0);
          let loginsuccessJ = 3.0;
          let iconbellactivep = 1.0;
          let bingM: Array<any> = [144, 913, 762];
         baiduW = `${baiduW.length}`;
         comments = `${parseInt(`${loginsuccessJ}`) >> (Math.min(bingM.length, 4))}`;
         loginsuccessJ *= parseFloat(`${comments.length}`);
         iconbellactivep /= Math.max(1, parseFloat(`${parseInt(`${iconbellactivep}`) | 1}`));
         bingM.push(parseInt(`${iconbellactivep}`) % (Math.max(bingM.length, 3)));
         if (y_imageG) {
            break;
         }
      } while ((4 < (baiduW.length & 5) || (3.76 + bridge8) < 2.15) && y_imageG);
         dependencyM = !baiduW.startsWith(`${bridge8}`);
         bridge8 /= Math.max(4, parseInt(`${bridge8}`) + baiduW.length);
      qaagC.set(`${dependencyM}`, 3);
      pathF = new Map([[`${pathF.size}`, pathF.size]]);
      vipsportx += `${1 >> (Math.min(2, benefitk.length))}`;
      with_s3.set(`${benefitq.size}`, benefitq.size + qaagC.size);
      onGoBack();
    }
  };

  useEffect(() => {
    if (streamsData) {
      const streamsDataArrayData = streamsData?.map(index => {
        
        if (index?.streamer_id == streamID) {
          setStreamData(index);
        }

        return () => {
          streamsDataArrayData;
        };
      });
    }
  }, [streamsData]);

  
  
  
  
  
  
  
  
  

  
  
  
  
  
  
  

  
  
  
  
  
  

  
  
  
  
  
  
  
  
  
  
  
  

  
  
  
  
  
  
  
  

  const lockOrientation = (orientation: string) => {
    dispatch(lockAppOrientation(orientation));
  };

  
  const onReadyForDisplay = useCallback(() => {
       let dependenciesx = 2;
    let kuaishouZ = 2.0;
    let dacccfaabfbcbadeebddcabacdffdb_: Map<any, any> = new Map([[String.fromCharCode(101,95,52,52,0),true ], [String.fromCharCode(109,97,110,117,97,108,95,52,95,52,57,0),true ]]);
    let appss = 5.0;
    let analytic5 = 3.0;
    let typingf: Map<any, any> = new Map([[String.fromCharCode(99,111,112,121,114,105,103,104,116,95,57,95,57,54,0),249], [String.fromCharCode(106,95,50,55,95,97,100,109,105,110,0),277]]);
    let telegramz = 1.0;
    let bangh = String.fromCharCode(112,105,112,101,108,105,110,105,110,103,95,106,95,55,0);
    let pingD = String.fromCharCode(112,108,97,99,101,104,111,108,100,101,114,115,95,120,95,49,55,0);
    let middlebrightness4: Array<any> = [994, 515];
    let launchr = 4;
    let country2 = String.fromCharCode(97,114,116,105,102,97,99,116,95,109,95,56,57,0);
    let pressured = String.fromCharCode(100,95,54,53,95,101,118,98,117,102,102,101,114,0);
    let animationsC: Map<any, any> = new Map([[String.fromCharCode(122,95,52,48,95,115,117,98,108,97,121,111,117,116,0),524], [String.fromCharCode(122,95,57,54,95,115,107,105,112,112,97,98,108,101,0),823]]);
    let mbnative8: Map<any, any> = new Map([[String.fromCharCode(114,101,115,101,116,95,119,95,53,49,0),764], [String.fromCharCode(103,95,55,95,116,105,109,101,115,0),734]]);
       let reminderb = 1;
       let textinputm = String.fromCharCode(99,104,97,110,103,101,95,99,95,55,54,0);
       let logo9 = String.fromCharCode(114,95,51,56,95,97,114,116,0);
      for (let q = 0; q < 1; q++) {
          let predictionD: Map<any, any> = new Map([[String.fromCharCode(112,95,51,48,95,114,101,108,99,116,120,0),977], [String.fromCharCode(115,95,53,51,95,112,111,108,108,115,0),961]]);
          let backgroundw: Array<any> = [125, 846, 587];
          let constants7 = String.fromCharCode(117,110,102,108,97,116,116,101,110,101,100,95,118,95,55,55,0);
          let schedulerA = 5.0;
         reminderb *= backgroundw.length / (Math.max(5, reminderb));
         predictionD = new Map([[`${predictionD.size}`, predictionD.size]]);
         backgroundw.push((constants7 == String.fromCharCode(80,0) ? parseInt(`${schedulerA}`) : constants7.length));
         schedulerA /= Math.max(2, predictionD.size % 2);
      }
       let nterstitialv = 3.0;
         logo9 += `${parseInt(`${nterstitialv}`)}`;
      for (let t = 0; t < 1; t++) {
         logo9 += `${3 & textinputm.length}`;
      }
       let videovarK: Map<any, any> = new Map([[String.fromCharCode(117,95,51,53,95,109,118,112,114,101,100,0),423], [String.fromCharCode(110,115,115,101,95,119,95,55,48,0),286], [String.fromCharCode(112,95,52,95,114,101,109,98,0),112]]);
      for (let j = 0; j < 2; j++) {
          let buttonK = String.fromCharCode(117,95,53,53,95,115,116,111,112,112,101,100,0);
          let mail9 = String.fromCharCode(122,95,50,56,95,111,102,102,115,101,116,115,0);
         logo9 += `${reminderb}`;
         buttonK = `${buttonK.length}`;
         mail9 = "3";
      }
      if ((logo9.length - 3) > 2 || (reminderb - logo9.length) > 3) {
         logo9 += `${videovarK.size / 1}`;
      }
       let application8 = 0.0;
         videovarK = new Map([[logo9, (logo9 == String.fromCharCode(116,0) ? parseInt(`${application8}`) : logo9.length)]]);
      analytic5 += parseFloat(`${parseInt(`${kuaishouZ}`)}`);
   for (let r = 0; r < 2; r++) {
      kuaishouZ -= parseFloat(`${middlebrightness4.length}`);
   }
   for (let g = 0; g < 1; g++) {
      appss /= Math.max(2 & middlebrightness4.length, 3);
   }
   while ((typingf.size << (Math.min(bangh.length, 5))) == 3) {
      bangh += "3";
      break;
   }
      analytic5 /= Math.max(2, parseFloat(`${typingf.size}`));
       let username9 = 2.0;
       let sheetE = String.fromCharCode(101,95,57,57,95,109,111,100,101,0);
       let layoutD = String.fromCharCode(105,110,100,101,120,111,102,95,54,95,54,54,0);
       let videoA = 0.0;
       let listX = 0.0;
      let event3 = username9 >= 6117746.0;
      do {
         username9 /= Math.max(parseInt(`${username9}`) | layoutD.length, 3);
         if (event3) {
            break;
         }
      } while (event3 && (1.43 == username9));
      if ((sheetE.length + username9) <= 5.61 || (5.61 + username9) <= 4.75) {
         username9 -= layoutD.length + sheetE.length;
      }
       let plus8 = String.fromCharCode(105,110,105,116,105,97,108,105,115,101,95,48,95,53,0);
         listX /= Math.max(2, parseInt(`${username9}`) * 2);
         username9 += (plus8 == String.fromCharCode(116,0) ? plus8.length : parseInt(`${videoA}`));
      for (let z = 0; z < 2; z++) {
         username9 /= Math.max(3, 3 >> (Math.min(4, Math.abs(parseInt(`${username9}`)))));
      }
      while (2.65 <= (3.95 / (Math.max(2, username9))) || 5 <= (parseInt(`${username9}`) / (Math.max(sheetE.length, 7)))) {
          let reminderY = 4.0;
          let selectedx = 3;
          let textlayoutmanagerj = 4.0;
          let scheduler9 = String.fromCharCode(120,95,57,52,95,115,101,101,107,104,101,97,100,0);
          let tumbnailc: Array<any> = [594, 781, 825];
         sheetE += `${parseInt(`${textlayoutmanagerj}`) % (Math.max(sheetE.length, 8))}`;
         reminderY -= parseFloat(`${tumbnailc.length & 2}`);
         selectedx >>= Math.min(4, Math.abs(3 % (Math.max(9, selectedx))));
         textlayoutmanagerj /= Math.max(3, parseFloat(`${3 << (Math.min(Math.abs(parseInt(`${reminderY}`)), 4))}`));
         scheduler9 += "2";
         tumbnailc = [3];
         break;
      }
         videoA *= 2 % (Math.max(6, layoutD.length));
      pingD += `${typingf.size / (Math.max(2, 5))}`;

    if (!isReadyPlay && videoSource !== undefined) {

      typingf.set(`${dependenciesx}`, 2 + dependenciesx);
   if ((1.56 - appss) == 3.98 && 3.74 == (appss / 1.56)) {
      appss /= Math.max(3, 3);
   }
      dacccfaabfbcbadeebddcabacdffdb_.set(bangh, parseInt(`${kuaishouZ}`));
   if (3 < (2 * bangh.length) && (4.79 / (Math.max(7, appss))) < 3.62) {
       let downF = 1;
       let activeP = String.fromCharCode(100,109,97,99,95,49,95,55,54,0);
          let middlebrightnessg: Array<any> = [931, 73, 189];
          let defaultplayerimgw: Array<any> = [38, 919, 109];
          let yellowc = false;
         downF /= Math.max(4, downF);
         middlebrightnessg = [defaultplayerimgw.length];
         defaultplayerimgw.push(3);
         yellowc = !yellowc;
         downF += downF;
         downF += downF;
          let animationsu = String.fromCharCode(109,95,49,48,95,100,105,115,109,105,115,115,0);
         downF /= Math.max(2, 1);
         animationsu = `${animationsu.length + animationsu.length}`;
         activeP += `${downF}`;
         activeP = "2";
      bangh = `${activeP.length >> (Math.min(4, Math.abs(dependenciesx)))}`;
   }
   for (let z = 0; z < 3; z++) {
      dependenciesx -= middlebrightness4.length;
   }
      middlebrightness4 = [dependenciesx];
      setReadyPlay(true);

   for (let w = 0; w < 1; w++) {
      bangh = `${parseInt(`${kuaishouZ}`)}`;
   }
   let refresht = 7320669.0 >= appss;
   do {
      appss *= bangh.length;
      if (refresht) {
         break;
      }
   } while (refresht && ((dacccfaabfbcbadeebddcabacdffdb_.size % 4) < 4));
       let sportsv = 4;
       let notificationfillemptym = String.fromCharCode(115,117,98,110,111,100,101,95,55,95,51,49,0);
       let notificationZ = 1.0;
          let sport7 = String.fromCharCode(110,95,52,57,95,116,114,97,110,115,102,111,114,109,97,98,108,101,0);
          let dangerJ = false;
          let unimplementedviewX = String.fromCharCode(112,95,52,57,95,111,97,117,116,104,0);
         sportsv += unimplementedviewX.length;
         sport7 = "3";
         dangerJ = sport7.length == 17;
      let androidN = 7485080 >= sportsv;
      do {
         sportsv /= Math.max(sportsv | 2, 2);
         if (androidN) {
            break;
         }
      } while ((sportsv == 5) && androidN);
          let buffer6 = 3.0;
         sportsv ^= notificationfillemptym.length >> (Math.min(Math.abs(3), 2));
         buffer6 -= parseFloat(`${parseInt(`${buffer6}`)}`);
      while (5 > (sportsv >> (Math.min(Math.abs(2), 1))) || 2 > (sportsv >> (Math.min(notificationfillemptym.length, 1)))) {
          let resendq: Map<any, any> = new Map([[String.fromCharCode(115,95,49,54,95,97,110,105,109,97,108,115,0),762], [String.fromCharCode(103,95,52,50,95,101,109,112,105,114,105,99,97,108,108,121,0),67]]);
          let feedback_ = String.fromCharCode(111,95,56,53,95,99,111,110,99,97,116,101,110,97,116,101,0);
          let yellowvideolivec = String.fromCharCode(117,95,50,53,95,115,114,99,0);
         sportsv |= (feedback_ == String.fromCharCode(109,0) ? yellowvideolivec.length : feedback_.length);
         resendq = new Map([[`${resendq.size}`, resendq.size >> (Math.min(1, Math.abs(resendq.size)))]]);
         break;
      }
       let untick2 = String.fromCharCode(104,95,53,54,95,112,101,114,112,105,120,101,108,0);
      let activeN = notificationZ <= 7185178.0;
      do {
          let disconnected1 = String.fromCharCode(102,95,57,53,95,99,111,110,116,114,97,99,116,115,0);
          let usernameb = 2.0;
          let v_titlet: Map<any, any> = new Map([[String.fromCharCode(106,95,49,51,95,106,118,101,114,115,105,111,110,0),499], [String.fromCharCode(117,112,97,116,101,100,95,103,95,52,48,0),493]]);
         notificationZ += parseFloat(`${disconnected1.length}`);
         disconnected1 = `${v_titlet.size + parseInt(`${usernameb}`)}`;
         usernameb /= Math.max(parseInt(`${usernameb}`) & v_titlet.size, 1);
         if (activeN) {
            break;
         }
      } while (activeN && (parseInt(`${notificationZ}`) < notificationfillemptym.length));
      if (notificationZ < sportsv) {
         sportsv += 3;
      }
      let layoutg = 5591201 >= untick2.length;
      do {
         untick2 += "2";
         if (layoutg) {
            break;
         }
      } while (layoutg && (1 <= untick2.length));
      let usere = untick2.length <= 5194913;
      do {
         untick2 = `${untick2.length >> (Math.min(Math.abs(3), 3))}`;
         if (usere) {
            break;
         }
      } while (usere && ((parseInt(`${notificationZ}`) * untick2.length) >= 2));
      dacccfaabfbcbadeebddcabacdffdb_.set(pingD, pingD.length | middlebrightness4.length);
   while ((dacccfaabfbcbadeebddcabacdffdb_.size % (Math.max(5, 7))) == 1) {
       let hookj = String.fromCharCode(115,109,97,108,108,101,115,116,95,51,95,54,50,0);
      if (!hookj.includes(hookj)) {
         hookj = "1";
      }
         hookj += `${hookj.length}`;
          let shirtD = 0;
          let loadingl: Map<any, any> = new Map([[String.fromCharCode(122,95,56,53,95,117,110,105,116,0),String.fromCharCode(121,95,52,51,95,97,108,112,104,97,110,117,109,101,114,105,99,115,0)], [String.fromCharCode(98,97,99,107,103,114,111,117,110,100,115,95,104,95,49,55,0),String.fromCharCode(115,120,110,101,116,95,108,95,51,57,0)]]);
          let webviewT = 2.0;
         hookj = `${2 / (Math.max(10, parseInt(`${webviewT}`)))}`;
         shirtD -= shirtD * loadingl.size;
         loadingl = new Map([[`${loadingl.size}`, shirtD]]);
         webviewT /= Math.max(parseFloat(`${loadingl.size}`), 3);
      appss *= 2;
      break;
   }
       let telegramL = 1;
         telegramL ^= telegramL;
       let chatN = 3.0;
       let megaphoneS = 3.0;
      for (let i = 0; i < 1; i++) {
          let refreshm = 4.0;
          let statisticsi = 2;
          let shrinkf = 5;
          let ballY = 1.0;
         chatN -= parseFloat(`${3}`);
         refreshm += parseFloat(`${statisticsi}`);
         statisticsi <<= Math.min(1, Math.abs(parseInt(`${refreshm}`) >> (Math.min(4, Math.abs(1)))));
         shrinkf >>= Math.min(1, Math.abs(parseInt(`${ballY}`)));
      }
      bangh += `${bangh.length - dependenciesx}`;
      bangh = `${dependenciesx >> (Math.min(bangh.length, 5))}`;
      ww_runtime.sportDetailsPlaysTimesAnalytics(
        videoSource.type === VideoLiveType.LIVE ? 'live' : 'animation',
      );
    }
  }, [isReadyPlay, videoSource]);
  

  const isFocus = useIsFocused();

  return (
    <View style={styles.container}>
      {/* <View style={{height: isFullScreen ? '100%' : 'auto'}}> */}
      {/* <View style={styles.videoDiv}> */}
      {(videoSource !== undefined || streamData?.src) && (
        <>
          {videoSource?.url !== undefined &&
            (videoSource.type === VideoLiveType.LIVE ? (
              <>
                {isFocus
                  ? (
                    <VodPlayer
                      ref={videoRef}
                      onBack={onHandleBack}
                      vod_source={videoSource.url}
                      videoType="fullXvod"
                      vodTitle={combinedName}
                      appOrientation={settingsReducer.appOrientation}
                      devicesOrientation={settingsReducer.devicesOrientation}
                      lockOrientation={lockOrientation}
                      onReadyForDisplay={onReadyForDisplay}
                    />
                  )
                  : <View style={{
                    backgroundColor: 'black',
                    width: '100%',
                    aspectRatio: 16 / 9
                  }}
                  />
                }
                {showCountdown && (
                  <CountdownIndicator
                    timer={countdownTime}
                    onClickVip={() => {
                      onVipCountdownClick();
                    }}
                    vipButtonText="开通VIP畅享无限内容"
                    containerStyle={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                    }}
                  />
                )}
              </>
            ) : (
              <View
                style={{
                  width: '100%',
                  aspectRatio: 16 / 9,
                }}>
                <WebView resizeMode="contain" source={{ uri: videoSource.url }} />
                <TouchableOpacity
                  onPress={onHandleBack}
                  style={{ position: 'absolute', padding: 20 }}>
                  <BackIcon
                    style={{
                      color: colors.text,
                    }}></BackIcon>
                </TouchableOpacity>
              </View>
            ))}
        </>
      )}
      {/* </View> */}
    </View>
  );
};

export default memo(LiveVideo);
