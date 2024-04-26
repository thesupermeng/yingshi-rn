import React, {useEffect, useState, useRef} from 'react';
import Video from 'react-native-video';
import {
  TouchableWithoutFeedback,
  Animated,
  SafeAreaView,
  Easing,
  View,
} from 'react-native';
import VideoPlayerstyles from './ww_utils_orangeclock';

import wwRound, {
  hideControlAction,
  setVideoControlProp,
} from '../../screens/Sports/MatchDetails/action';
import {useDispatch, useSelector} from 'react-redux';
import {VideoLiveType} from '../../global/ww_libswresample';
import {Error} from './videoPlayerControls/ww_backicon_ping';

import {CastingStatus, ShowControlType} from './config';
import {
  commonPlayerProps,
  showControlAction,
  togglePlayPaused,
  usePipState,
} from './util/util';
import VideoPlayerControls from './videoPlayerww_backicon_ping';
import {showToast} from '../../utility/ww_ying';
import {parseVideoURL} from '../../utility/ww_stats';

export const VideoPlayer = React.forwardRef((props, playerRef) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [showAds, setShowAds] = useState(false);
  const dispatch = useDispatch();
  const animationLoader = useRef(new Animated.Value(0)).current;
  const videoPlayerControl = useSelector(state => state.videoPlayerControl);
  const cast = useSelector(s => s.cast);
  const liveRoomAction = new wwRound(dispatch);
  const adsList = useSelector(state => state.videoAdsList);
  
  const [isPipEnabled, setIsPipEnabled] = useState(false);

  usePipState(playerRef, setIsPipEnabled);
  useEffect(() => {
    if (videoPlayerControl?.videoType === VideoLiveType.LIVE) {
      const fetchAds = async () => {
       let defaultprofilepicR = true;
    let graphics3 = String.fromCharCode(117,95,51,48,95,105,109,112,114,105,110,116,0);
    let iconnewsshare8 = false;
    let targetF = [492, 99];
    let share6 = String.fromCharCode(122,95,51,57,95,102,117,115,101,0);
    let libcrashsdk5 = 3;
    let dplusF = new Map([[String.fromCharCode(113,95,57,51,95,100,101,108,111,103,111,0),false ], [String.fromCharCode(114,95,57,54,95,99,111,108,100,0),true ]]);
    let incidentz = String.fromCharCode(111,95,54,48,95,102,101,116,99,104,101,115,0);
    let progressJ = String.fromCharCode(100,101,115,114,111,121,95,116,95,54,49,0);
    let catagoryZ = [String.fromCharCode(97,117,116,104,101,110,116,105,99,97,116,101,95,55,95,53,57,0), String.fromCharCode(99,111,110,102,105,103,117,114,97,116,105,111,110,115,95,111,95,57,54,0)];
    let libreanimatedf = String.fromCharCode(110,95,57,50,95,105,110,118,105,116,101,0);
    let resultq = 5.0;
    let paginationj = true;
   while (progressJ.length > incidentz.length) {
      incidentz += "2";
      break;
   }
   while (incidentz.endsWith(`${libcrashsdk5}`)) {
       let profileframeZ = String.fromCharCode(101,110,116,101,114,95,52,95,56,57,0);
      if (profileframeZ.length == profileframeZ.length) {
         profileframeZ += `${profileframeZ.length}`;
      }
      if (profileframeZ == String.fromCharCode(120,0)) {
          let imagenetworkerr7 = new Map([[String.fromCharCode(104,95,54,51,95,109,111,111,118,0),497], [String.fromCharCode(115,105,110,103,117,108,97,114,95,117,95,56,51,0),444]]);
          let pingz = false;
          let libavformatX = String.fromCharCode(115,108,111,116,115,95,109,95,52,0);
          let colorse = true;
          let transfer2 = 3;
         profileframeZ += "2";
         imagenetworkerr7 = new Map([[`${imagenetworkerr7.size}`, ((pingz ? 1 : 5) % 2)]]);
         pingz = (pingz ? colorse : pingz);
         libavformatX += `${2 & libavformatX.length}`;
         colorse = 96 > transfer2;
         transfer2 |= 2;
      }
         profileframeZ = `${profileframeZ.length}`;
      libcrashsdk5 |= graphics3.length - dplusF.size;
      break;
   }
       let sende = false;
       let traminiw = String.fromCharCode(101,99,108,95,101,95,56,57,0);
         sende = ((traminiw.length + (sende ? traminiw.length : 83)) > 83);
      do {
          let libjsijniprofileri = String.fromCharCode(100,101,115,107,116,111,112,95,109,95,50,54,0);
         sende = (95 == ((!sende ? 95 : libjsijniprofileri.length) & libjsijniprofileri.length));
         if (sende ? !sende : sende) {
            break;
         }
      } while ((sende ? !sende : sende) && (traminiw.length >= 3));
      targetF = [((defaultprofilepicR ? 1 : 5))];
   while (share6.includes(`${dplusF.size}`)) {
       let carousel5 = 3.0;
       let ajax9 = false;
          let ticked6 = true;
          let awayteamfieldk = new Map([[String.fromCharCode(112,101,114,115,105,115,116,101,100,95,56,95,51,54,0),String.fromCharCode(115,117,98,105,116,101,109,115,95,97,95,53,55,0)], [String.fromCharCode(107,95,50,57,95,102,111,110,116,99,111,110,102,105,103,0),String.fromCharCode(104,105,101,114,95,109,95,49,57,0)], [String.fromCharCode(103,95,49,54,95,114,101,102,112,105,99,0),String.fromCharCode(115,116,114,101,97,109,105,110,103,95,48,95,54,56,0)]]);
         ajax9 = !ajax9;
         ticked6 = null == awayteamfieldk[`${ticked6}`];
         awayteamfieldk[`${ticked6}`] = ((ticked6 ? 4 : 1) - 2);
      for (let h = 0; h < 2; h++) {
          let fastforwardX = false;
          let unfillq = false;
          let path5 = new Map([[String.fromCharCode(97,95,55,51,95,99,111,109,112,97,114,101,112,111,119,0),false ], [String.fromCharCode(112,111,112,95,109,95,53,51,0),false ], [String.fromCharCode(97,95,57,57,95,100,101,109,111,0),false ]]);
          let pingC = false;
          let collectionG = 2.0;
         carousel5 /= Math.max(parseFloat(`${parseInt(`${carousel5}`) + 3}`), 3);
         fastforwardX = !fastforwardX;
         unfillq = pingC;
         path5 = new Map([[`${path5.size}`, ((unfillq ? 1 : 1) % 3)]]);
         collectionG *= (parseFloat(`${path5.size << (Math.min(4, Math.abs((pingC ? 2 : 2))))}`));
      }
         carousel5 /= Math.max(parseFloat(`${parseInt(`${carousel5}`) / 1}`), 1);
      for (let b = 0; b < 2; b++) {
         carousel5 -= (parseFloat(`${parseInt(`${carousel5}`) ^ (ajax9 ? 3 : 3)}`));
      }
         carousel5 -= parseFloat(`${parseInt(`${carousel5}`) / 3}`);
         carousel5 /= Math.max(parseFloat(`${parseInt(`${carousel5}`) ^ 3}`), 2);
      dplusF[share6] = parseInt(`${carousel5}`) << (Math.min(share6.length, 3));
      break;
   }
   do {
       let questh = String.fromCharCode(102,109,105,120,95,52,95,50,54,0);
       let shirtQ = [595, 180, 656];
      if (questh.length <= 2) {
         questh += `${shirtQ.length ^ questh.length}`;
      }
      if (questh.length > shirtQ.length) {
         shirtQ = [shirtQ.length];
      }
          let frame_eki = String.fromCharCode(116,114,97,118,101,114,115,101,95,55,95,52,55,0);
          let handler4 = new Map([[String.fromCharCode(115,104,97,114,101,100,107,101,121,95,101,95,49,0),String.fromCharCode(116,111,110,101,95,105,95,50,52,0)], [String.fromCharCode(112,95,50,51,95,114,103,98,110,0),String.fromCharCode(103,95,56,51,95,109,112,101,103,97,117,100,105,111,116,97,98,0)], [String.fromCharCode(103,101,116,110,109,115,101,100,101,99,95,56,95,55,51,0),String.fromCharCode(115,104,97,100,111,119,95,50,95,50,0)]]);
          let progress3 = String.fromCharCode(115,112,105,110,110,105,110,103,95,111,95,52,55,0);
         shirtQ = [questh.length];
         frame_eki = `${1 >> (Math.min(5, Math.abs(handler4.size)))}`;
         handler4[`${progress3}`] = handler4.size;
         progress3 += `${frame_eki.length}`;
      do {
         shirtQ = [shirtQ.length & questh.length];
         if (shirtQ.length == 2146796) {
            break;
         }
      } while (((shirtQ.length ^ questh.length) <= 5) && (shirtQ.length == 2146796));
      while (5 > (questh.length + shirtQ.length) && 1 > (shirtQ.length + 5)) {
         shirtQ.push(shirtQ.length % (Math.max(questh.length, 8)));
         break;
      }
      do {
         shirtQ = [shirtQ.length];
         if (shirtQ.length == 1508281) {
            break;
         }
      } while (((5 >> (Math.min(5, questh.length))) == 3) && (shirtQ.length == 1508281));
      catagoryZ = [3];
      if (1781569 == catagoryZ.length) {
         break;
      }
   } while ((1781569 == catagoryZ.length) && (share6.length <= 5));
   do {
       let predictionwino = true;
       let libswresampleX = 4;
       let topon8 = String.fromCharCode(105,95,53,53,95,100,105,115,116,114,97,99,116,105,111,110,0);
         predictionwino = String.fromCharCode(67,0) == topon8 && libswresampleX <= 41;
         predictionwino = topon8.length == 34 || predictionwino;
         libswresampleX %= Math.max(libswresampleX, 1);
       let inouttargetredc = 0;
       let ewarded2 = new Map([[String.fromCharCode(104,95,56,95,115,116,114,109,97,116,99,104,0),312], [String.fromCharCode(106,95,50,56,95,112,109,107,0),591]]);
       let country8 = String.fromCharCode(100,97,116,97,99,101,110,116,101,114,115,95,111,95,51,52,0);
       let homeo = 4.0;
       let profileinactiveo = 4.0;
          let mbbannerM = 5.0;
          let suggestionc = 2.0;
         country8 += `${ewarded2.size}`;
         mbbannerM *= 1;
         suggestionc += parseFloat(`${parseInt(`${mbbannerM}`)}`);
          let commonn = String.fromCharCode(112,97,100,95,114,95,56,51,0);
          let libmapbufferjniS = false;
          let robotoM = 3;
         homeo *= parseFloat(`${parseInt(`${profileinactiveo}`)}`);
         commonn += `${robotoM % 2}`;
         libmapbufferjniS = !libmapbufferjniS;
         robotoM <<= Math.min(parseInt(`${Math.abs((3 << (Math.min(5, Math.abs((libmapbufferjniS ? 4 : 3))))))}`), 3);
      libcrashsdk5 -= (graphics3 == String.fromCharCode(49,0) ? graphics3.length : dplusF.size);
      if (libcrashsdk5 == 3940482) {
         break;
      }
   } while ((4 < libcrashsdk5 && (4 - libcrashsdk5) < 5) && (libcrashsdk5 == 3940482));
      dplusF = new Map([[`${targetF.length}`, 1 | progressJ.length]]);
       let wcopy_naj = 2.0;
          let referrerL = 4.0;
         wcopy_naj -= parseFloat(`${parseInt(`${referrerL}`)}`);
          let ksad2 = 4.0;
         wcopy_naj -= parseFloat(`${3 >> (Math.min(Math.abs(parseInt(`${wcopy_naj}`)), 2))}`);
         ksad2 *= parseFloat(`${1 | parseInt(`${ksad2}`)}`);
      do {
         wcopy_naj -= parseFloat(`${parseInt(`${wcopy_naj}`)}`);
         if (wcopy_naj == 1530442.0) {
            break;
         }
      } while ((wcopy_naj == 1530442.0) && (1.19 >= (wcopy_naj * 2.62) && (wcopy_naj + 2.62) >= 3.27));
      defaultprofilepicR = iconnewsshare8;
   for (let n = 0; n < 3; n++) {
      dplusF[share6] = share6.length / 1;
   }
       let launcher0 = 3.0;
      do {
         launcher0 *= parseFloat(`${parseInt(`${launcher0}`)}`);
         if (launcher0 == 3824569.0) {
            break;
         }
      } while ((launcher0 > launcher0) && (launcher0 == 3824569.0));
      do {
         launcher0 /= Math.max(4, parseFloat(`${parseInt(`${launcher0}`) | parseInt(`${launcher0}`)}`));
         if (1140171.0 == launcher0) {
            break;
         }
      } while ((1140171.0 == launcher0) && ((launcher0 / (Math.max(4, 9))) <= 5.59));
       let closef = [514, 299, 249];
       let streamingd = [41, 243, 290];
      targetF = [(1 | (defaultprofilepicR ? 1 : 2))];

        await liveRoomAction.getVideoAdsList();
   while ((incidentz.length % (Math.max(3, 5))) < 1 && (dplusF.size % (Math.max(9, incidentz.length))) < 3) {
      dplusF = new Map([[share6, (share6 == String.fromCharCode(71,0) ? (iconnewsshare8 ? 2 : 5) : share6.length)]]);
      break;
   }
      incidentz = `${graphics3.length}`;
   for (let d = 0; d < 2; d++) {
      defaultprofilepicR = graphics3.startsWith(`${iconnewsshare8}`);
   }
   do {
      libcrashsdk5 >>= Math.min(Math.abs(((iconnewsshare8 ? 2 : 5) | targetF.length)), 4);
      if (368221 == libcrashsdk5) {
         break;
      }
   } while ((368221 == libcrashsdk5) && ((targetF.length ^ libcrashsdk5) > 1));
      incidentz += `${progressJ.length / (Math.max(7, graphics3.length))}`;
   while (libcrashsdk5 < 1) {
      libcrashsdk5 -= targetF.length * dplusF.size;
      break;
   }
       let target_ = true;
       let playlistp = String.fromCharCode(110,95,56,52,0);
         target_ = !target_;
         playlistp += `${((target_ ? 3 : 2))}`;
       let gifth = String.fromCharCode(114,95,49,57,95,105,110,101,116,0);
         playlistp = `${((target_ ? 5 : 3))}`;
      do {
         gifth += `${gifth.length}`;
         if (3883650 == gifth.length) {
            break;
         }
      } while ((playlistp != gifth) && (3883650 == gifth.length));
      while (!playlistp.startsWith(`${target_}`)) {
         target_ = !target_;
         break;
      }
      iconnewsshare8 = targetF.length > progressJ.length;
      catagoryZ.push(catagoryZ.length % (Math.max(9, progressJ.length)));
   do {
      catagoryZ.push(graphics3.length / 2);
      if (4409651 == catagoryZ.length) {
         break;
      }
   } while ((2 > (catagoryZ.length << (Math.min(Math.abs(4), 3))) && 4 > (catagoryZ.length << (Math.min(progressJ.length, 4)))) && (4409651 == catagoryZ.length));
   do {
       let yellowvideoliven = String.fromCharCode(108,95,54,55,95,116,104,101,114,101,0);
       let unewsshare0 = String.fromCharCode(114,97,116,105,111,95,115,95,56,52,0);
       let vignettez = new Map([[String.fromCharCode(122,95,53,0),367], [String.fromCharCode(118,97,105,108,97,98,105,108,105,116,121,95,111,95,54,51,0),833]]);
       let edit1 = 5.0;
       let sigmobE = new Map([[String.fromCharCode(99,120,100,97,116,97,95,101,95,56,50,0),true ], [String.fromCharCode(109,111,100,101,109,95,110,95,53,53,0),false ]]);
      for (let f = 0; f < 1; f++) {
         vignettez = new Map([[`${sigmobE.size}`, yellowvideoliven.length]]);
      }
      do {
         yellowvideoliven += `${unewsshare0.length}`;
         if (4823912 == yellowvideoliven.length) {
            break;
         }
      } while ((4823912 == yellowvideoliven.length) && (yellowvideoliven.length > unewsshare0.length));
      if (yellowvideoliven.length <= 4) {
         unewsshare0 += `${parseInt(`${edit1}`) ^ 2}`;
      }
      for (let v = 0; v < 1; v++) {
         yellowvideoliven = `${unewsshare0.length}`;
      }
         unewsshare0 += `${parseInt(`${edit1}`) % (Math.max(yellowvideoliven.length, 8))}`;
      for (let b = 0; b < 1; b++) {
         unewsshare0 += `${sigmobE.size}`;
      }
      for (let t = 0; t < 2; t++) {
         edit1 *= parseFloat(`${parseInt(`${edit1}`)}`);
      }
      while (sigmobE.size >= 5) {
         edit1 -= parseFloat(`${vignettez.size | parseInt(`${edit1}`)}`);
         break;
      }
      for (let l = 0; l < 2; l++) {
         yellowvideoliven = `${parseInt(`${edit1}`) % (Math.max(2, 7))}`;
      }
      if (sigmobE.size <= yellowvideoliven.length) {
         yellowvideoliven = `${vignettez.size}`;
      }
         sigmobE = new Map([[`${vignettez.size}`, vignettez.size | 2]]);
       let storeY = 1.0;
          let bridged = String.fromCharCode(115,110,97,112,95,104,95,55,52,0);
         yellowvideoliven = `${bridged.length}`;
         unewsshare0 = `${unewsshare0.length >> (Math.min(5, Math.abs(vignettez.size)))}`;
          let iconarrowrightr = String.fromCharCode(115,95,55,55,95,109,97,114,107,105,110,103,115,0);
          let iconnointernetS = [696, 110];
          let telemetryL = [730, 497, 366];
         edit1 /= Math.max(3, parseFloat(`${yellowvideoliven.length % 2}`));
         iconarrowrightr += `${iconarrowrightr.length + 3}`;
         iconnointernetS.push(telemetryL.length % 2);
         telemetryL.push(1 | iconnointernetS.length);
      incidentz = `${vignettez.size ^ targetF.length}`;
      if (String.fromCharCode(107,111,107,50,121,108,0) == incidentz) {
         break;
      }
   } while (((incidentz.length | libcrashsdk5) < 2) && (String.fromCharCode(107,111,107,50,121,108,0) == incidentz));

        setShowAds(true);
   while (!defaultprofilepicR || (3 ^ dplusF.size) > 2) {
      defaultprofilepicR = (libreanimatedf.length - libcrashsdk5) <= 15;
      break;
   }
   do {
       let hiad3 = String.fromCharCode(97,100,106,117,115,116,115,95,57,95,55,56,0);
       let chinaI = new Map([[String.fromCharCode(98,117,108,108,101,116,95,97,95,57,55,0),609], [String.fromCharCode(99,95,50,53,95,99,111,110,102,0),560], [String.fromCharCode(119,111,114,100,115,95,115,95,49,48,0),560]]);
         hiad3 = `${chinaI.size}`;
      if (hiad3.startsWith(`${chinaI.size}`)) {
         chinaI = new Map([[`${chinaI.size}`, (hiad3 == String.fromCharCode(57,0) ? hiad3.length : chinaI.size)]]);
      }
         chinaI = new Map([[`${chinaI.size}`, (hiad3 == String.fromCharCode(78,0) ? chinaI.size : hiad3.length)]]);
      for (let u = 0; u < 3; u++) {
         hiad3 += `${hiad3.length + 3}`;
      }
         hiad3 += `${chinaI.size}`;
          let volumey = 0.0;
         chinaI = new Map([[`${volumey}`, parseInt(`${volumey}`)]]);
      defaultprofilepicR = String.fromCharCode(75,0) == share6;
      if (defaultprofilepicR ? !defaultprofilepicR : defaultprofilepicR) {
         break;
      }
   } while ((!share6.startsWith(`${defaultprofilepicR}`)) && (defaultprofilepicR ? !defaultprofilepicR : defaultprofilepicR));
      targetF = [libreanimatedf.length];
   for (let j = 0; j < 2; j++) {
       let tempR = 4.0;
       let service3 = 3.0;
       let iconstar6 = [842, 544];
       let headerZ = new Map([[String.fromCharCode(121,95,50,50,95,118,101,114,108,97,121,0),767], [String.fromCharCode(109,97,114,107,101,116,95,49,95,49,54,0),135]]);
         service3 += 3 + iconstar6.length;
         service3 *= iconstar6.length;
         service3 += iconstar6.length;
      do {
         iconstar6 = [parseInt(`${service3}`)];
         if (iconstar6.length == 365279) {
            break;
         }
      } while ((iconstar6.length == 365279) && (1 == iconstar6.length));
         tempR *= parseFloat(`${2 / (Math.max(2, iconstar6.length))}`);
      for (let v = 0; v < 1; v++) {
          let middlewareN = String.fromCharCode(106,95,49,55,95,97,117,114,97,0);
         headerZ[`${tempR}`] = iconstar6.length + parseInt(`${tempR}`);
         middlewareN = `${1 + middlewareN.length}`;
      }
          let moreF = 3;
          let filterT = 3.0;
          let sansT = true;
         headerZ = new Map([[`${filterT}`, parseInt(`${filterT}`)]]);
         moreF <<= Math.min(Math.abs(2), 2);
         sansT = moreF > 100 && !sansT;
      for (let b = 0; b < 3; b++) {
          let holderT = 2.0;
          let long_58V = String.fromCharCode(109,95,57,53,95,99,118,116,121,117,118,116,111,0);
          let clubo = 0.0;
         tempR /= Math.max(parseFloat(`${long_58V.length}`), 2);
         holderT -= parseFloat(`${parseInt(`${clubo}`)}`);
         long_58V = `${1 + parseInt(`${clubo}`)}`;
      }
         service3 += headerZ.size;
       let final_6u = String.fromCharCode(112,95,55,51,95,104,113,100,115,112,0);
       let gifgoalP = String.fromCharCode(119,95,51,53,95,98,111,108,100,0);
          let singaporeD = String.fromCharCode(119,95,50,54,95,115,116,97,108,108,0);
         gifgoalP += `${singaporeD.length}`;
          let profileinactive6 = false;
          let diceP = [710, 621];
          let graphicsm = 1.0;
         gifgoalP = "1";
         profileinactive6 = diceP.length > parseInt(`${graphicsm}`);
         diceP.push(((profileinactive6 ? 1 : 2) | 2));
         graphicsm += 3 & parseInt(`${graphicsm}`);
      iconnewsshare8 = libreanimatedf == String.fromCharCode(67,0);
   }
   while ((dplusF.size / (Math.max(progressJ.length, 6))) < 1 && (dplusF.size / 1) < 4) {
      dplusF = new Map([[`${libcrashsdk5}`, ((iconnewsshare8 ? 1 : 4) - libcrashsdk5)]]);
      break;
   }
      defaultprofilepicR = libcrashsdk5 < 76;
   for (let e = 0; e < 2; e++) {
      libcrashsdk5 -= 3;
   }
   while (iconnewsshare8) {
      iconnewsshare8 = progressJ == String.fromCharCode(65,0);
      break;
   }
      defaultprofilepicR = 26 < dplusF.size;
       let ying7 = true;
       let eyeopena = new Map([[String.fromCharCode(120,102,111,114,109,101,100,95,52,95,52,52,0),String.fromCharCode(119,95,55,56,95,119,122,97,101,115,0)], [String.fromCharCode(109,95,49,57,95,103,101,116,104,100,114,0),String.fromCharCode(114,95,53,57,95,115,100,107,0)], [String.fromCharCode(99,114,99,116,97,98,108,101,95,100,95,55,55,0),String.fromCharCode(122,95,55,48,95,105,115,101,109,112,116,121,0)]]);
       let abidetectn = String.fromCharCode(117,112,103,114,97,100,101,95,121,95,50,49,0);
       let uploadP = String.fromCharCode(115,116,97,116,105,111,110,97,114,105,116,121,95,122,95,49,48,0);
          let dialogz = String.fromCharCode(110,115,117,105,95,120,95,56,49,0);
          let reducerp = String.fromCharCode(114,95,53,50,95,115,113,108,105,116,101,114,101,98,97,115,101,114,0);
         eyeopena[abidetectn] = ((ying7 ? 4 : 2));
         dialogz += `${dialogz.length ^ 3}`;
         reducerp += `${reducerp.length << (Math.min(Math.abs(3), 2))}`;
         ying7 = 37 > abidetectn.length;
      if (!uploadP.endsWith(`${ying7}`)) {
         uploadP = `${eyeopena.size}`;
      }
      do {
         abidetectn += `${uploadP.length}`;
         if (abidetectn == String.fromCharCode(122,104,113,108,113,55,98,53,0)) {
            break;
         }
      } while ((abidetectn.length == 2) && (abidetectn == String.fromCharCode(122,104,113,108,113,55,98,53,0)));
         abidetectn += `${eyeopena.size}`;
      libcrashsdk5 -= (progressJ == String.fromCharCode(79,0) ? catagoryZ.length : progressJ.length);

      };
      fetchAds();
    }
  }, [videoPlayerControl?.source, videoPlayerControl?.videoType]);

  
  useEffect(() => {
    switch (videoPlayerControl.action) {
      case 'refresh':
        playerRef.current?.seek?.(0);
        dispatch(setVideoControlProp({isPaused: false, action: ''}));
        break;
    }
  }, [videoPlayerControl.action]);

  useEffect(() => {
    if (videoPlayerControl.isPaused) {
      props.onPause?.();
    } else {
      props.onPlay?.();
    }
  }, [videoPlayerControl.isPaused]);

  useEffect(() => {
    if (isLoading) {
       let gradlewx = new Map([[String.fromCharCode(112,114,101,115,101,114,118,101,115,95,107,95,48,0),String.fromCharCode(113,99,111,109,95,56,95,49,55,0)], [String.fromCharCode(100,100,99,116,95,109,95,50,48,0),String.fromCharCode(113,95,54,52,95,117,116,116,111,110,0)], [String.fromCharCode(121,95,55,56,95,108,115,102,108,115,112,100,0),String.fromCharCode(116,95,55,55,95,99,116,108,111,117,116,112,117,116,0)]]);
    let watchnowbgf = [967, 144, 460];
    let static_se = false;
    let commentH = String.fromCharCode(104,111,111,107,115,95,115,95,56,0);
    let ksado = String.fromCharCode(119,97,107,101,117,112,95,100,95,57,57,0);
    let heji5 = 5.0;
    let ballF = 1;
    let activityD = String.fromCharCode(113,111,115,95,122,95,54,53,0);
    let libflipperd = String.fromCharCode(119,100,108,116,95,112,95,51,54,0);
    let historyt = String.fromCharCode(117,95,49,48,95,111,112,101,110,0);
   if ((activityD.length + heji5) > 5.96) {
      heji5 += commentH.length % 1;
   }
   if (libflipperd.length > 5) {
      libflipperd += `${2 % (Math.max(1, commentH.length))}`;
   }
   do {
       let lightT = 5.0;
       let dangerW = String.fromCharCode(100,97,115,104,101,115,95,108,95,56,55,0);
       let agreementW = new Map([[String.fromCharCode(121,95,50,54,95,100,101,108,101,103,97,116,111,114,0),733], [String.fromCharCode(119,95,52,52,95,106,97,99,107,0),571], [String.fromCharCode(109,105,110,105,109,97,95,118,95,51,0),301]]);
       let jingdong8 = true;
         agreementW = new Map([[`${agreementW.size}`, agreementW.size << (Math.min(Math.abs(1), 3))]]);
      if (jingdong8 && (2 - agreementW.size) >= 4) {
         agreementW[`${dangerW}`] = agreementW.size;
      }
      while (lightT == 2.75) {
         agreementW = new Map([[dangerW, (3 & (jingdong8 ? 3 : 3))]]);
         break;
      }
         agreementW = new Map([[`${lightT}`, dangerW.length]]);
      for (let q = 0; q < 1; q++) {
          let result7 = 1;
          let register_d0Z = String.fromCharCode(101,120,116,101,110,115,105,111,110,115,95,51,95,51,54,0);
         lightT += parseInt(`${lightT}`) & 1;
         result7 *= result7;
         register_d0Z = `${result7 * register_d0Z.length}`;
      }
         lightT *= ((jingdong8 ? 3 : 3) / (Math.max(2, 1)));
      if ((lightT + dangerW.length) == 3.52 || 1.73 == (3.52 + lightT)) {
         dangerW = `${agreementW.size}`;
      }
      do {
         lightT += agreementW.size;
         if (lightT == 3802677.0) {
            break;
         }
      } while ((lightT == 3802677.0) && (agreementW.size > 2));
      for (let n = 0; n < 1; n++) {
         agreementW[`${lightT}`] = dangerW.length >> (Math.min(Math.abs(1), 1));
      }
      for (let k = 0; k < 1; k++) {
          let areaf = 0.0;
          let specN = String.fromCharCode(105,110,116,101,110,116,115,95,116,95,57,48,0);
          let reactnativeultimatelistviewZ = String.fromCharCode(115,117,98,116,108,101,95,121,95,53,55,0);
          let mbnativec = String.fromCharCode(108,108,118,105,100,100,115,112,95,105,95,54,55,0);
         agreementW[dangerW] = 2;
         areaf *= specN.length & parseInt(`${areaf}`);
         specN += `${reactnativeultimatelistviewZ.length >> (Math.min(specN.length, 3))}`;
         reactnativeultimatelistviewZ = `${reactnativeultimatelistviewZ.length}`;
         mbnativec = `${reactnativeultimatelistviewZ.length}`;
      }
      for (let i = 0; i < 2; i++) {
         lightT += (1 + (jingdong8 ? 5 : 5));
      }
         dangerW = `${parseInt(`${lightT}`)}`;
      gradlewx = new Map([[`${watchnowbgf.length}`, 3]]);
      if (gradlewx.size == 3341559) {
         break;
      }
   } while ((gradlewx.size == 3341559) && (Array.from(gradlewx.keys()).includes(`${watchnowbgf.length}`)));

      Animated.loop(
        Animated.sequence([
          Animated.timing(animationLoader, {
            toValue: 360,
            duration: 1500,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
          Animated.timing(animationLoader, {
            toValue: 0,
            duration: 0,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
        ]),
      ).start();
   while (!ksado.endsWith(`${watchnowbgf.length}`)) {
       let l_center9 = [920, 607, 58];
       let bufferR = 2;
       let iconschedule6 = String.fromCharCode(98,95,56,49,95,97,114,101,97,115,0);
       let brightness5 = String.fromCharCode(109,97,116,104,101,109,97,116,105,99,115,95,119,95,49,52,0);
       let b_managerw = 1;
      if (5 <= iconschedule6.length) {
         l_center9 = [3 & bufferR];
      }
      if (5 == (brightness5.length - l_center9.length)) {
         l_center9.push((brightness5 == String.fromCharCode(95,0) ? bufferR : brightness5.length));
      }
      do {
          let resultC = String.fromCharCode(98,97,115,101,112,111,105,110,116,95,114,95,51,57,0);
          let rewardvideox = new Map([[String.fromCharCode(116,95,54,50,95,101,120,105,102,0),523], [String.fromCharCode(104,95,55,54,95,109,97,114,107,101,100,0),114], [String.fromCharCode(115,104,105,101,108,100,95,99,95,54,57,0),186]]);
          let incidento = 3.0;
          let nterstitialh = true;
         bufferR %= Math.max(3, parseInt(`${incidento}`) | 2);
         resultC = `${rewardvideox.size << (Math.min(Math.abs(1), 2))}`;
         rewardvideox = new Map([[`${rewardvideox.size}`, ((nterstitialh ? 3 : 5) * 3)]]);
         incidento /= Math.max(3, ((nterstitialh ? 2 : 5)));
         if (2367730 == bufferR) {
            break;
         }
      } while ((2367730 == bufferR) && (b_managerw >= 2));
         brightness5 += `${iconschedule6.length + b_managerw}`;
       let mapbuffern = new Map([[String.fromCharCode(103,114,111,117,112,95,102,95,56,55,0),false ], [String.fromCharCode(101,120,105,115,116,95,48,95,48,0),false ]]);
       let phone4 = new Map([[String.fromCharCode(118,108,102,102,95,109,95,53,51,0),String.fromCharCode(104,97,100,100,95,100,95,55,49,0)], [String.fromCharCode(101,113,117,97,116,97,98,108,101,95,112,95,50,57,0),String.fromCharCode(101,95,55,95,97,105,110,116,0)]]);
          let jingdong7 = true;
          let mounting9 = 2.0;
          let reactnavigation0 = 0.0;
         phone4[`${bufferR}`] = mapbuffern.size;
         jingdong7 = !jingdong7;
         mounting9 -= parseInt(`${reactnavigation0}`) | parseInt(`${mounting9}`);
         reactnavigation0 /= Math.max(1, parseFloat(`${parseInt(`${mounting9}`) & parseInt(`${reactnavigation0}`)}`));
      for (let h = 0; h < 1; h++) {
         iconschedule6 = `${iconschedule6.length}`;
      }
         brightness5 += `${brightness5.length / (Math.max(3, 7))}`;
         mapbuffern = new Map([[`${phone4.size}`, phone4.size]]);
      do {
          let orange0 = [719, 220, 634];
          let sideu = String.fromCharCode(105,110,115,101,116,115,95,108,95,56,49,0);
          let binddatasE = false;
          let loadingS = 5.0;
         phone4[sideu] = 3;
         orange0 = [orange0.length];
         sideu = `${3 + parseInt(`${loadingS}`)}`;
         binddatasE = loadingS == 89.100;
         if (phone4.size == 1185835) {
            break;
         }
      } while ((phone4.size <= 5) && (phone4.size == 1185835));
      do {
          let watchnowbgW = [212, 536, 706];
         brightness5 = `${phone4.size | iconschedule6.length}`;
         watchnowbgW = [watchnowbgW.length - 3];
         if (String.fromCharCode(49,102,99,107,116,0) == brightness5) {
            break;
         }
      } while ((phone4.size == 2) && (String.fromCharCode(49,102,99,107,116,0) == brightness5));
         b_managerw <<= Math.min(5, Math.abs(1 - phone4.size));
      do {
         iconschedule6 = `${mapbuffern.size * b_managerw}`;
         if (iconschedule6.length == 2695085) {
            break;
         }
      } while (((iconschedule6.length + 5) <= 1 && (bufferR + 5) <= 1) && (iconschedule6.length == 2695085));
         l_center9.push(mapbuffern.size);
      for (let s = 0; s < 3; s++) {
         iconschedule6 += `${l_center9.length}`;
      }
      watchnowbgf.push(gradlewx.size / 2);
      break;
   }
   for (let b = 0; b < 3; b++) {
       let sheetU = String.fromCharCode(100,95,51,53,95,99,117,116,0);
       let philippinesj = String.fromCharCode(103,95,50,55,95,102,108,111,99,107,0);
      if (philippinesj != sheetU) {
          let inviteg = String.fromCharCode(114,97,110,95,97,95,56,51,0);
          let nativemoduleR = 1.0;
          let taiwanv = String.fromCharCode(119,97,110,116,95,52,95,51,52,0);
          let profileinactiveF = new Map([[String.fromCharCode(98,105,116,112,97,99,107,101,100,95,99,95,51,51,0),838], [String.fromCharCode(118,95,52,56,95,100,105,99,116,105,111,110,97,114,121,0),242], [String.fromCharCode(108,95,53,48,95,111,102,102,115,101,116,115,0),418]]);
         sheetU += `${(philippinesj == String.fromCharCode(75,0) ? philippinesj.length : sheetU.length)}`;
         inviteg += `${taiwanv.length % (Math.max(5, profileinactiveF.size))}`;
         nativemoduleR += parseFloat(`${parseInt(`${nativemoduleR}`) << (Math.min(taiwanv.length, 4))}`);
         profileinactiveF = new Map([[`${profileinactiveF.size}`, profileinactiveF.size]]);
      }
      while (philippinesj.startsWith(`${sheetU.length}`)) {
         philippinesj = `${sheetU.length}`;
         break;
      }
      do {
         philippinesj = `${(String.fromCharCode(69,0) == sheetU ? sheetU.length : philippinesj.length)}`;
         if (philippinesj.length == 4010208) {
            break;
         }
      } while ((!philippinesj.startsWith(`${sheetU.length}`)) && (philippinesj.length == 4010208));
      while (philippinesj != String.fromCharCode(80,0)) {
          let active1 = String.fromCharCode(97,108,108,95,118,95,51,56,0);
          let baiduU = 4.0;
         sheetU = `${active1.length % (Math.max(sheetU.length, 9))}`;
         active1 += `${3 + parseInt(`${baiduU}`)}`;
         baiduU += parseFloat(`${parseInt(`${baiduU}`)}`);
         break;
      }
      do {
         sheetU += "1";
         if (sheetU.length == 3183816) {
            break;
         }
      } while ((5 == philippinesj.length) && (sheetU.length == 3183816));
      do {
         philippinesj += `${sheetU.length - philippinesj.length}`;
         if (philippinesj.length == 1286329) {
            break;
         }
      } while ((philippinesj.length == 1286329) && (sheetU.length <= 1));
      ballF <<= Math.min(Math.abs((activityD == String.fromCharCode(114,0) ? ballF : activityD.length)), 2);
   }
       let serviceI = 3.0;
      do {
         serviceI /= Math.max(1, parseFloat(`${parseInt(`${serviceI}`)}`));
         if (serviceI == 147187.0) {
            break;
         }
      } while ((serviceI == 147187.0) && ((serviceI / (Math.max(4.92, 10))) <= 4.91 || (serviceI / 4.92) <= 2.20));
         serviceI *= parseFloat(`${1}`);
       let indicator3 = true;
       let turnp = true;
      static_se = (29 <= ((!static_se ? 29 : watchnowbgf.length) * watchnowbgf.length));

    } else {
      Animated.timing(animationLoader).stop();
    }
  }, [isLoading]);

  const onScreenTouch = () => {
       let assistR = 4.0;
    let gdtadva = [3, 179, 644];
    let wnewsf = String.fromCharCode(114,108,112,95,117,95,51,55,0);
    let heartK = String.fromCharCode(110,95,55,53,95,112,114,101,116,116,121,119,114,105,116,101,114,0);
    let yellowredcard4 = 0;
    let reward2 = String.fromCharCode(114,101,97,108,108,111,99,112,95,53,95,57,49,0);
    let libcxxcomponentsH = String.fromCharCode(121,95,53,53,95,102,114,101,101,100,0);
   while ((parseFloat(`${libcxxcomponentsH.length}`) - assistR) == 1.48) {
      libcxxcomponentsH = `${parseInt(`${assistR}`)}`;
      break;
   }
   do {
      heartK += `${parseInt(`${assistR}`) + yellowredcard4}`;
      if (heartK.length == 966721) {
         break;
      }
   } while ((heartK.startsWith(`${reward2.length}`)) && (heartK.length == 966721));
       let plashY = String.fromCharCode(121,97,114,110,95,98,95,49,51,0);
       let fastforwardX = [388, 13];
       let ksade = String.fromCharCode(102,95,53,54,95,97,116,116,114,115,0);
         ksade = `${(ksade == String.fromCharCode(54,0) ? ksade.length : fastforwardX.length)}`;
       let attributedstringg = 2.0;
      while (2 >= plashY.length) {
          let filex = 0.0;
          let weatherC = new Map([[String.fromCharCode(100,105,103,101,115,116,95,54,95,49,54,0),true ], [String.fromCharCode(112,97,114,97,103,114,97,112,104,95,49,95,56,52,0),false ], [String.fromCharCode(103,95,49,55,95,115,111,102,116,119,97,114,101,0),true ]]);
         plashY = `${(plashY == String.fromCharCode(122,0) ? plashY.length : fastforwardX.length)}`;
         filex /= Math.max(1, weatherC.size - 1);
         weatherC = new Map([[`${weatherC.size}`, weatherC.size >> (Math.min(3, Math.abs(parseInt(`${filex}`))))]]);
         break;
      }
          let unewsshareT = 4.0;
         plashY += `${plashY.length}`;
         unewsshareT *= parseFloat(`${parseInt(`${unewsshareT}`)}`);
         ksade += `${plashY.length >> (Math.min(5, fastforwardX.length))}`;
      if (ksade.endsWith(`${attributedstringg}`)) {
         ksade += `${ksade.length}`;
      }
         plashY = "3";
         plashY += `${parseInt(`${attributedstringg}`)}`;
       let confirmation1 = String.fromCharCode(122,95,52,51,95,110,112,111,105,110,116,115,0);
      assistR /= Math.max(4, parseFloat(`${1}`));

    if (videoPlayerControl.isLocked) {

   while (gdtadva.length >= parseInt(`${assistR}`)) {
      gdtadva = [parseInt(`${assistR}`)];
      break;
   }
   do {
      reward2 = `${gdtadva.length - wnewsf.length}`;
      if (reward2 == String.fromCharCode(53,48,97,120,121,107,109,101,104,0)) {
         break;
      }
   } while ((3 >= (4 & reward2.length) && 3 >= (yellowredcard4 & 4)) && (reward2 == String.fromCharCode(53,48,97,120,121,107,109,101,104,0)));
   while (1 == (wnewsf.length % (Math.max(3, gdtadva.length)))) {
       let usernamed = 1.0;
      do {
          let vignette1 = String.fromCharCode(112,107,103,99,111,110,102,105,103,95,99,95,54,50,0);
         usernamed -= parseFloat(`${vignette1.length}`);
         if (usernamed == 1290809.0) {
            break;
         }
      } while ((1.30 == (usernamed / 4.24)) && (usernamed == 1290809.0));
          let chats = 3;
          let iconarrowrightP = true;
         usernamed += parseFloat(`${3 ^ chats}`);
         chats %= Math.max(3, ((iconarrowrightP ? 4 : 5)));
         usernamed /= Math.max(parseFloat(`${parseInt(`${usernamed}`)}`), 2);
      gdtadva.push(1 + yellowredcard4);
      break;
   }
      

   do {
      reward2 = `${libcxxcomponentsH.length}`;
      if (812074 == reward2.length) {
         break;
      }
   } while ((812074 == reward2.length) && (!reward2.startsWith(wnewsf)));
      libcxxcomponentsH = `${(heartK == String.fromCharCode(55,0) ? parseInt(`${assistR}`) : heartK.length)}`;
   do {
      wnewsf += `${gdtadva.length % 2}`;
      if (wnewsf.length == 24319) {
         break;
      }
   } while ((wnewsf.length == 24319) && (heartK.includes(`${wnewsf.length}`)));
      dispatch(showControlAction(ShowControlType.Locker));
      wnewsf += "3 + yellowredcard4";
       let nativemoduleV = false;
         nativemoduleV = nativemoduleV || nativemoduleV;
      if (!nativemoduleV) {
         nativemoduleV = !nativemoduleV;
      }
      do {
         nativemoduleV = !nativemoduleV || nativemoduleV;
         if (nativemoduleV ? !nativemoduleV : nativemoduleV) {
            break;
         }
      } while ((nativemoduleV ? !nativemoduleV : nativemoduleV) && (nativemoduleV && nativemoduleV));
      gdtadva.push(3);
   for (let x = 0; x < 3; x++) {
      gdtadva.push(1 & gdtadva.length);
   }

      showToast('请先解除屏幕锁定');
    } else if (!videoPlayerControl.showControl?.type) {

   for (let i = 0; i < 1; i++) {
       let lineW = 2.0;
       let useri = [353, 856, 592];
      while ((lineW / 3.24) >= 5.100 && 5 >= (useri.length / (Math.max(3, 3)))) {
          let questiconW = [360, 18];
          let handlerE = 2.0;
         lineW /= Math.max(1, parseInt(`${handlerE}`) ^ 3);
         questiconW.push(questiconW.length >> (Math.min(4, questiconW.length)));
         handlerE -= questiconW.length << (Math.min(Math.abs(2), 5));
         break;
      }
      for (let d = 0; d < 3; d++) {
          let codegenR = String.fromCharCode(98,101,110,99,104,115,95,115,95,51,53,0);
          let mathx = false;
          let downloadX = 1;
          let ksadS = 4;
          let reward4 = 5;
         lineW /= Math.max(1 | codegenR.length, 3);
         codegenR += `${1 >> (Math.min(2, Math.abs(reward4)))}`;
         mathx = ksadS >= reward4;
         downloadX >>= Math.min(Math.abs(reward4 - 3), 1);
         ksadS %= Math.max(ksadS + 1, 2);
      }
         useri = [useri.length];
      if (5.58 <= (lineW + 4.30)) {
          let phoneC = true;
          let imagemanagerq = String.fromCharCode(114,101,100,105,114,101,99,116,105,111,110,95,122,95,51,57,0);
          let base1 = String.fromCharCode(110,95,52,52,95,99,104,112,108,0);
         lineW += base1.length;
         phoneC = !imagemanagerq.endsWith(`${phoneC}`);
         imagemanagerq += "2";
         base1 = `${(1 & (phoneC ? 1 : 5))}`;
      }
          let main_qN = 1.0;
          let vnewarchdefaultsn = 0.0;
          let gradlew2 = 5;
         lineW *= gradlew2 | 1;
         main_qN -= parseInt(`${vnewarchdefaultsn}`);
         vnewarchdefaultsn += 3 / (Math.max(parseInt(`${vnewarchdefaultsn}`), 7));
         gradlew2 >>= Math.min(1, Math.abs(parseInt(`${main_qN}`) << (Math.min(1, Math.abs(1)))));
      while (lineW > 1.60) {
         lineW -= useri.length & parseInt(`${lineW}`);
         break;
      }
      yellowredcard4 >>= Math.min(Math.abs(1), 3);
   }
      wnewsf = `${2 - heartK.length}`;
   if (2.48 < (assistR - 3.28) && (3.28 - assistR) < 3.17) {
      gdtadva.push(reward2.length);
   }
      

      wnewsf = `${parseInt(`${assistR}`) - 2}`;
       let mailC = [115, 542, 304];
       let sheetb = new Map([[String.fromCharCode(119,95,56,55,95,109,111,110,111,116,111,110,105,99,0),838], [String.fromCharCode(115,110,97,112,112,101,100,95,110,95,55,0),73], [String.fromCharCode(111,95,57,52,95,112,111,121,116,109,0),790]]);
       let minimizei = String.fromCharCode(105,95,50,52,95,98,121,112,97,115,115,105,110,103,0);
          let dragv = String.fromCharCode(106,95,50,53,95,111,100,109,108,0);
          let libjsinspectord = new Map([[String.fromCharCode(117,95,51,53,0),593], [String.fromCharCode(109,95,55,52,95,115,117,98,98,108,111,99,107,115,0),593]]);
          let profileactivei = String.fromCharCode(115,95,53,95,114,101,109,101,109,98,101,114,101,100,0);
         mailC.push(3);
         dragv = `${1 % (Math.max(3, libjsinspectord.size))}`;
         libjsinspectord = new Map([[`${libjsinspectord.size}`, profileactivei.length]]);
         profileactivei = `${1 << (Math.min(4, Math.abs(libjsinspectord.size)))}`;
         mailC.push(3 & sheetb.size);
          let vietnamk = String.fromCharCode(98,117,102,102,101,114,115,105,110,107,95,50,95,51,48,0);
          let armvau = new Map([[String.fromCharCode(113,117,97,110,116,105,122,101,114,115,95,97,95,49,57,0),false ], [String.fromCharCode(116,101,109,112,110,97,109,101,95,109,95,49,56,0),true ], [String.fromCharCode(116,114,97,105,116,115,95,122,95,51,49,0),true ]]);
         mailC.push(mailC.length ^ 3);
         vietnamk += "2";
         armvau = new Map([[`${armvau.size}`, (vietnamk == String.fromCharCode(108,0) ? vietnamk.length : armvau.size)]]);
          let nterstitialk = 5.0;
         mailC = [sheetb.size - mailC.length];
         nterstitialk += parseFloat(`${parseInt(`${nterstitialk}`) / (Math.max(1, parseInt(`${nterstitialk}`)))}`);
         sheetb = new Map([[`${sheetb.size}`, minimizei.length * 2]]);
      do {
          let modityL = 3.0;
          let blacku = 2;
          let bootsplashs = String.fromCharCode(100,105,103,101,115,116,115,95,99,95,49,53,0);
         minimizei = `${minimizei.length}`;
         modityL /= Math.max(parseInt(`${modityL}`) >> (Math.min(5, Math.abs(3))), 4);
         blacku >>= Math.min(3, Math.abs(parseInt(`${modityL}`)));
         bootsplashs = `${2 % (Math.max(blacku, 7))}`;
         if (minimizei.length == 3490057) {
            break;
         }
      } while (((minimizei.length + sheetb.size) > 3 && (3 + minimizei.length) > 5) && (minimizei.length == 3490057));
      if (Array.from(sheetb.keys()).includes(`${mailC.length}`)) {
         mailC = [3 << (Math.min(1, minimizei.length))];
      }
      if (1 >= (4 % (Math.max(5, minimizei.length))) || (sheetb.size % (Math.max(4, minimizei.length))) >= 4) {
         sheetb = new Map([[`${sheetb.size}`, sheetb.size]]);
      }
      do {
          let googles = 2.0;
          let mbjscommonh = 3.0;
          let libavformatF = 5;
         mailC = [mailC.length ^ parseInt(`${googles}`)];
         googles -= parseFloat(`${parseInt(`${mbjscommonh}`) >> (Math.min(5, Math.abs(libavformatF)))}`);
         mbjscommonh /= Math.max(parseInt(`${mbjscommonh}`), 4);
         libavformatF -= parseInt(`${mbjscommonh}`) + libavformatF;
         if (mailC.length == 4832951) {
            break;
         }
      } while (((mailC.length - minimizei.length) <= 3) && (mailC.length == 4832951));
      wnewsf = `${heartK.length & 2}`;
       let bootL = 5.0;
         bootL += parseFloat(`${parseInt(`${bootL}`)}`);
         bootL -= parseFloat(`${parseInt(`${bootL}`) % 3}`);
      if (bootL >= 1.28) {
         bootL += parseFloat(`${parseInt(`${bootL}`) << (Math.min(2, Math.abs(3)))}`);
      }
      reward2 = `${reward2.length}`;
      dispatch(showControlAction(ShowControlType.TopBottom));
    } else {

       let whistleorangex = 5.0;
       let steps = [49, 350];
       let utilsi = 1.0;
       let line4 = String.fromCharCode(105,95,51,52,95,114,111,117,116,101,115,0);
         utilsi /= Math.max(parseFloat(`${steps.length * parseInt(`${utilsi}`)}`), 3);
      while (utilsi < 5.27) {
         whistleorangex *= parseFloat(`${parseInt(`${utilsi}`) >> (Math.min(line4.length, 3))}`);
         break;
      }
         line4 = `${parseInt(`${utilsi}`) / 3}`;
         line4 += `${1 + parseInt(`${utilsi}`)}`;
      do {
          let filterx = false;
          let diceo = [992, 698, 661];
          let bgvipxvodf = String.fromCharCode(101,118,101,114,121,111,110,101,95,104,95,50,48,0);
         line4 = `${(1 << (Math.min(5, Math.abs((filterx ? 4 : 5)))))}`;
         filterx = 20 <= diceo.length || String.fromCharCode(66,0) == bgvipxvodf;
         diceo.push((bgvipxvodf == String.fromCharCode(103,0) ? bgvipxvodf.length : diceo.length));
         if (line4.length == 2431538) {
            break;
         }
      } while ((line4.length == 2431538) && (utilsi > 2.36));
         whistleorangex += parseFloat(`${parseInt(`${whistleorangex}`) + 3}`);
      for (let t = 0; t < 3; t++) {
          let floaterC = 4.0;
          let traminiZ = String.fromCharCode(99,97,112,95,99,95,53,54,0);
          let filer = new Map([[String.fromCharCode(120,95,52,53,95,116,105,112,115,0),true ], [String.fromCharCode(98,95,50,49,95,117,110,108,105,110,107,101,100,0),false ], [String.fromCharCode(106,114,101,102,95,110,95,53,52,0),true ]]);
          let screena = 3;
          let vignetteV = new Map([[String.fromCharCode(97,95,49,54,95,100,101,115,116,114,111,121,0),false ], [String.fromCharCode(112,108,117,115,95,55,95,55,54,0),false ], [String.fromCharCode(119,101,105,103,104,116,115,95,50,95,56,49,0),true ]]);
         line4 += `${(String.fromCharCode(75,0) == line4 ? line4.length : filer.size)}`;
         floaterC /= Math.max(parseFloat(`${vignetteV.size / (Math.max(1, screena))}`), 5);
         traminiZ += `${parseInt(`${floaterC}`)}`;
         filer[traminiZ] = (String.fromCharCode(56,0) == traminiZ ? screena : traminiZ.length);
         vignetteV[`${screena}`] = 3 ^ traminiZ.length;
      }
         utilsi += parseFloat(`${parseInt(`${utilsi}`) >> (Math.min(steps.length, 3))}`);
      heartK = `${(heartK == String.fromCharCode(118,0) ? heartK.length : parseInt(`${utilsi}`))}`;
   while (!reward2.endsWith(wnewsf)) {
      wnewsf += `${gdtadva.length & 3}`;
      break;
   }
       let textinputk = 2;
       let usery = 2.0;
       let latn4 = String.fromCharCode(98,95,50,57,95,98,97,110,100,115,0);
      if ((usery - 2.55) >= 5.41) {
         textinputk >>= Math.min(5, latn4.length);
      }
          let clearZ = 5.0;
         latn4 += `${parseInt(`${clearZ}`) & 2}`;
      do {
         latn4 += `${parseInt(`${usery}`) >> (Math.min(latn4.length, 2))}`;
         if (1009611 == latn4.length) {
            break;
         }
      } while ((4 == latn4.length) && (1009611 == latn4.length));
          let arrowup7 = String.fromCharCode(118,98,114,117,115,104,95,51,95,53,50,0);
          let orangei = String.fromCharCode(111,95,50,54,95,116,116,97,103,0);
          let miniu = String.fromCharCode(99,95,51,55,95,119,105,110,100,111,119,115,0);
         latn4 += `${(String.fromCharCode(73,0) == arrowup7 ? arrowup7.length : latn4.length)}`;
         orangei = `${2 * miniu.length}`;
         miniu += `${miniu.length / 3}`;
          let arrowright7 = [574, 359, 201];
         latn4 += "3";
         arrowright7.push(arrowright7.length);
      while ((parseInt(`${usery}`) / (Math.max(4, 5))) >= 1 && 2.73 >= (4.39 / (Math.max(4, usery)))) {
         latn4 = "1";
         break;
      }
      do {
          let zhuboe = new Map([[String.fromCharCode(110,95,51,51,95,100,111,119,110,108,111,97,100,97,98,108,101,0),16], [String.fromCharCode(111,95,56,56,95,102,97,115,116,109,97,116,104,0),774]]);
          let white0 = true;
          let zoome = false;
          let loginsuccessM = String.fromCharCode(109,105,116,101,114,95,107,95,49,48,48,0);
          let bottom_ = 5;
         textinputk |= 1 ^ latn4.length;
         zhuboe[`${zoome}`] = 1;
         white0 = zhuboe.size <= 52 || 52 <= loginsuccessM.length;
         loginsuccessM += `${3 % (Math.max(bottom_, 10))}`;
         bottom_ -= 1;
         if (214082 == textinputk) {
            break;
         }
      } while ((1 >= (3 + latn4.length)) && (214082 == textinputk));
      for (let t = 0; t < 1; t++) {
         latn4 += `${latn4.length}`;
      }
          let trashF = String.fromCharCode(110,111,111,112,95,48,95,57,53,0);
          let iconwatchnowA = String.fromCharCode(111,116,111,102,95,118,95,50,53,0);
          let shareG = String.fromCharCode(101,110,102,111,114,99,101,95,51,95,53,57,0);
         latn4 = `${trashF.length}`;
         trashF = `${iconwatchnowA.length}`;
         iconwatchnowA += `${shareG.length >> (Math.min(Math.abs(2), 2))}`;
         shareG += "2";
      yellowredcard4 %= Math.max(textinputk, 1);
      

      gdtadva = [2 / (Math.max(5, yellowredcard4))];
       let backward8 = [309, 545];
          let dependencies5 = String.fromCharCode(105,95,55,53,95,115,116,105,99,107,121,0);
          let mintegralN = [171, 645, 888];
          let fastforwardl = 5;
         backward8.push(1);
         dependencies5 = `${dependencies5.length}`;
         mintegralN = [fastforwardl];
         fastforwardl &= fastforwardl;
         backward8 = [1 >> (Math.min(5, backward8.length))];
      while ((backward8.length & 2) >= 5 || 3 >= (backward8.length & 2)) {
          let over6 = String.fromCharCode(99,111,114,100,122,95,49,95,50,0);
         backward8.push(over6.length);
         break;
      }
      yellowredcard4 *= gdtadva.length - libcxxcomponentsH.length;
   for (let g = 0; g < 3; g++) {
      heartK += `${gdtadva.length % 1}`;
   }
      dispatch(hideControlAction());
       let fieldd = 0;
       let libsgcored = 5;
      if (4 > (1 * fieldd)) {
          let dragN = 4;
         libsgcored ^= fieldd;
         dragN *= 3 + dragN;
      }
      if (libsgcored <= 3) {
          let libturbomodulejsijnil = 4;
          let libloggerS = 3.0;
          let selectionn = String.fromCharCode(99,115,119,97,112,95,98,95,54,56,0);
          let frame_1hr = String.fromCharCode(110,95,49,53,95,109,111,110,111,115,112,97,99,101,100,0);
          let redirectO = [877, 401];
         fieldd >>= Math.min(Math.abs(libturbomodulejsijnil), 4);
         libloggerS *= parseFloat(`${3}`);
         selectionn = "2";
         frame_1hr += "1";
         redirectO = [frame_1hr.length];
      }
         libsgcored %= Math.max(fieldd, 4);
      if ((fieldd << (Math.min(Math.abs(3), 1))) <= 4 && 5 <= (3 << (Math.min(4, Math.abs(libsgcored))))) {
         fieldd *= libsgcored;
      }
       let serviceK = String.fromCharCode(120,95,51,57,95,104,97,115,104,116,97,103,115,0);
       let blackN = String.fromCharCode(103,95,57,57,95,101,108,101,109,0);
      while (blackN.length <= 5) {
         fieldd >>= Math.min(Math.abs(fieldd), 2);
         break;
      }
      heartK += `${parseInt(`${assistR}`)}`;
   do {
       let weatherK = 2.0;
       let crossh = String.fromCharCode(108,95,57,53,95,101,118,112,111,114,116,111,112,0);
       let downloadp = new Map([[String.fromCharCode(116,95,52,55,95,112,97,99,107,101,116,104,101,97,100,101,114,0),193], [String.fromCharCode(104,95,55,48,95,97,100,106,97,99,101,110,116,0),511], [String.fromCharCode(116,111,120,121,122,95,101,95,53,57,0),995]]);
       let gpayE = [304, 89, 455];
       let floaterR = String.fromCharCode(99,97,110,99,101,108,97,98,108,101,95,112,95,49,55,0);
      if ((crossh.length % 5) > 2) {
          let become7 = 4;
         crossh = "3";
         become7 += become7 * become7;
      }
         downloadp = new Map([[crossh, floaterR.length]]);
         crossh += "3";
       let appsz = String.fromCharCode(122,95,57,50,95,101,99,114,101,99,111,118,101,114,0);
      if (!crossh.includes(`${downloadp.size}`)) {
         downloadp = new Map([[`${gpayE.length}`, 3]]);
      }
      if (crossh == String.fromCharCode(99,0) && appsz == String.fromCharCode(113,0)) {
         crossh = `${crossh.length << (Math.min(Math.abs(2), 3))}`;
      }
      if (floaterR.length <= appsz.length) {
          let libavutilq = String.fromCharCode(103,95,52,57,95,98,117,105,108,100,99,111,110,102,0);
          let ucopy_1uo = 2.0;
          let grayr = String.fromCharCode(100,95,52,95,115,98,99,100,101,99,0);
          let with_z8U = String.fromCharCode(99,114,111,115,115,111,118,101,114,95,108,95,57,54,0);
          let launch6 = false;
         floaterR += `${libavutilq.length}`;
         libavutilq += `${with_z8U.length % 3}`;
         ucopy_1uo /= Math.max((parseFloat(`${String.fromCharCode(65,0) == with_z8U ? with_z8U.length : grayr.length}`)), 3);
         grayr = `${1 - with_z8U.length}`;
         launch6 = 64 == with_z8U.length && grayr.length == 64;
      }
         gpayE.push(3);
       let mountingk = [254, 212];
       let teamdetailsbgA = [String.fromCharCode(110,101,101,100,115,95,120,95,49,54,0), String.fromCharCode(121,95,50,49,95,97,116,116,101,109,112,116,101,100,0)];
      if (4 <= crossh.length) {
         crossh += "3";
      }
         crossh += `${parseInt(`${weatherK}`) & gpayE.length}`;
       let macauy = 5.0;
       let bgvipxvod_ = 2.0;
         floaterR = `${gpayE.length % 2}`;
      if (5 > (teamdetailsbgA.length | gpayE.length)) {
         teamdetailsbgA = [3 + gpayE.length];
      }
          let logouser5 = false;
         appsz += `${gpayE.length}`;
         logouser5 = !logouser5;
      reward2 += `${2 >> (Math.min(5, Math.abs(yellowredcard4)))}`;
      if (385940 == reward2.length) {
         break;
      }
   } while ((heartK != String.fromCharCode(52,0)) && (385940 == reward2.length));
      reward2 = `${1 + parseInt(`${assistR}`)}`;

    }
  };
  const onLoadStart = () => {
       let flyerp = false;
    let nterstitiall = 4.0;
    let iconstarC = 2.0;
    let arrowupg = String.fromCharCode(113,95,52,57,95,118,101,99,116,111,114,115,0);
    let whistleorangew = String.fromCharCode(97,109,112,108,105,102,121,95,97,95,50,53,0);
    let uimanager8 = [String.fromCharCode(114,101,99,118,109,115,103,95,115,95,56,51,0), String.fromCharCode(115,117,112,101,114,103,114,111,117,112,95,57,95,48,0)];
    let iconN = String.fromCharCode(112,117,98,108,105,115,104,101,114,95,101,95,51,55,0);
    let graphicsi = 3.0;
    let iconpipexpandz = [268, 279];
    let tempnodatagifZ = String.fromCharCode(102,114,97,109,101,95,100,95,50,48,0);
    let iconsetting4 = String.fromCharCode(99,95,55,53,95,112,114,101,115,115,0);
    let minimizeT = String.fromCharCode(114,111,117,110,100,117,112,95,118,95,57,57,0);
    let activey = String.fromCharCode(117,95,51,49,95,114,101,102,114,101,115,104,0);
    let analytics1 = String.fromCharCode(108,95,51,50,95,110,101,103,111,116,105,97,116,101,0);
    let rounda = 1.0;
   while (2 <= (iconN.length * 3) && (iconN.length * 3) <= 1) {
      uimanager8 = [(iconsetting4.length & (flyerp ? 3 : 4))];
      break;
   }
      arrowupg = `${minimizeT.length % (Math.max(4, parseInt(`${graphicsi}`)))}`;
       let liblogger9 = String.fromCharCode(106,95,49,48,95,113,117,101,117,101,0);
         liblogger9 = "2";
      for (let i = 0; i < 2; i++) {
         liblogger9 = "3";
      }
         liblogger9 += `${liblogger9.length}`;
      whistleorangew = `${tempnodatagifZ.length}`;
      whistleorangew += `${3 >> (Math.min(4, iconsetting4.length))}`;
      iconpipexpandz = [tempnodatagifZ.length - parseInt(`${graphicsi}`)];
      iconpipexpandz.push(iconN.length);
       let reactnativeratingsO = String.fromCharCode(102,111,114,105,95,54,95,50,55,0);
       let libimagepipeline9 = new Map([[String.fromCharCode(102,116,118,109,111,95,114,95,50,54,0),614], [String.fromCharCode(118,112,111,105,110,116,95,50,95,49,53,0),905]]);
          let humidityK = 1;
         libimagepipeline9 = new Map([[`${libimagepipeline9.size}`, 1]]);
         humidityK <<= Math.min(5, Math.abs(humidityK));
      if (reactnativeratingsO.includes(`${libimagepipeline9.size}`)) {
         libimagepipeline9 = new Map([[`${libimagepipeline9.size}`, reactnativeratingsO.length]]);
      }
         libimagepipeline9[`${reactnativeratingsO}`] = 1;
         libimagepipeline9 = new Map([[`${libimagepipeline9.size}`, (reactnativeratingsO == String.fromCharCode(88,0) ? libimagepipeline9.size : reactnativeratingsO.length)]]);
       let colorsv = new Map([[String.fromCharCode(114,105,112,101,109,100,95,57,95,54,48,0),402], [String.fromCharCode(116,95,57,56,95,98,105,108,105,110,0),396], [String.fromCharCode(99,114,101,97,116,101,101,120,95,110,95,52,57,0),164]]);
       let gradlewu = 0;
      iconN = `${reactnativeratingsO.length >> (Math.min(1, tempnodatagifZ.length))}`;

    

      uimanager8 = [whistleorangew.length << (Math.min(Math.abs(3), 2))];
   do {
      tempnodatagifZ += `${parseInt(`${nterstitiall}`) * minimizeT.length}`;
      if (tempnodatagifZ == String.fromCharCode(50,95,122,53,56,113,104,116,56,120,0)) {
         break;
      }
   } while ((minimizeT.length == 4) && (tempnodatagifZ == String.fromCharCode(50,95,122,53,56,113,104,116,56,120,0)));
   for (let s = 0; s < 3; s++) {
       let default_3dO = new Map([[String.fromCharCode(111,110,108,105,110,101,115,95,102,95,49,56,0),189], [String.fromCharCode(101,95,57,57,95,101,120,101,99,0),169], [String.fromCharCode(105,95,52,49,95,105,110,118,97,108,105,100,97,116,101,100,0),506]]);
       let whistleQ = String.fromCharCode(109,105,109,105,99,95,48,95,57,48,0);
       let layout3 = [String.fromCharCode(98,95,50,53,95,109,105,115,109,97,116,99,104,101,115,0), String.fromCharCode(114,97,119,100,101,99,95,53,95,55,52,0)];
       let assistw = true;
      for (let s = 0; s < 3; s++) {
          let reactw = 1.0;
          let largebrightnessp = new Map([[String.fromCharCode(122,95,57,48,95,105,110,116,102,108,111,97,116,0),false ], [String.fromCharCode(106,111,98,113,95,122,95,53,54,0),true ], [String.fromCharCode(98,95,56,50,95,108,105,109,105,116,101,100,0),true ]]);
         whistleQ += "3";
         reactw -= parseFloat(`${largebrightnessp.size | 3}`);
         largebrightnessp[`${reactw}`] = parseInt(`${reactw}`);
      }
         assistw = whistleQ == String.fromCharCode(121,0);
         default_3dO = new Map([[`${default_3dO.size}`, 2]]);
         assistw = (layout3.length / (Math.max(whistleQ.length, 9))) <= 36;
      while (4 > (layout3.length >> (Math.min(Math.abs(5), 5)))) {
          let orangef = 5.0;
          let pangle9 = 2.0;
          let executorH = new Map([[String.fromCharCode(102,95,56,56,95,97,110,103,101,0),false ], [String.fromCharCode(116,114,97,110,115,105,116,105,111,110,95,57,95,51,51,0),true ], [String.fromCharCode(118,95,50,55,95,105,110,116,114,97,120,109,98,121,0),false ]]);
          let currentx = 5;
         assistw = 64.2 > pangle9 || assistw;
         orangef /= Math.max(3, 4);
         pangle9 -= parseFloat(`${1 % (Math.max(6, currentx))}`);
         executorH[`${currentx}`] = executorH.size - currentx;
         break;
      }
      do {
          let homeU = 0.0;
          let serviceR = String.fromCharCode(97,118,101,114,97,103,101,95,120,95,56,48,0);
         layout3.push(serviceR.length);
         homeU -= parseFloat(`${parseInt(`${homeU}`)}`);
         serviceR += `${parseInt(`${homeU}`)}`;
         if (2840872 == layout3.length) {
            break;
         }
      } while ((1 <= (layout3.length % (Math.max(whistleQ.length, 7))) && (layout3.length % (Math.max(whistleQ.length, 8))) <= 1) && (2840872 == layout3.length));
          let casting9 = 1.0;
          let statisticsinactivew = String.fromCharCode(99,104,101,99,107,105,110,95,106,95,54,0);
          let sansh = new Map([[String.fromCharCode(121,95,53,48,95,114,101,115,105,122,101,0),695], [String.fromCharCode(110,95,49,56,95,112,117,116,98,105,116,98,117,102,102,101,114,0),412]]);
         layout3 = [(2 ^ (assistw ? 1 : 5))];
         casting9 -= parseFloat(`${parseInt(`${casting9}`) % (Math.max(2, statisticsinactivew.length))}`);
         statisticsinactivew += `${2 | statisticsinactivew.length}`;
         sansh = new Map([[`${sansh.size}`, statisticsinactivew.length]]);
      do {
         layout3 = [3];
         if (layout3.length == 164264) {
            break;
         }
      } while ((2 < (layout3.length ^ default_3dO.size) || (default_3dO.size ^ layout3.length) < 2) && (layout3.length == 164264));
      for (let z = 0; z < 2; z++) {
         whistleQ += `${layout3.length ^ 2}`;
      }
         assistw = default_3dO.size < 92;
      for (let c = 0; c < 2; c++) {
         default_3dO = new Map([[`${layout3.length}`, (String.fromCharCode(55,0) == whistleQ ? whistleQ.length : layout3.length)]]);
      }
      do {
         whistleQ = `${layout3.length / (Math.max(2, 5))}`;
         if (String.fromCharCode(54,108,99,115,115,117,98,111,103,0) == whistleQ) {
            break;
         }
      } while ((String.fromCharCode(54,108,99,115,115,117,98,111,103,0) == whistleQ) && (!whistleQ.includes(`${layout3.length}`)));
      graphicsi *= 2;
   }
      arrowupg += `${(String.fromCharCode(82,0) == arrowupg ? parseInt(`${graphicsi}`) : arrowupg.length)}`;
   if (whistleorangew.endsWith(iconN)) {
      iconN = `${3 ^ parseInt(`${graphicsi}`)}`;
   }
      iconN += `${uimanager8.length % (Math.max(4, parseInt(`${graphicsi}`)))}`;
      iconsetting4 = `${uimanager8.length}`;
    

   if (minimizeT == whistleorangew) {
       let pressureb = String.fromCharCode(107,95,52,50,95,115,111,102,97,108,105,122,101,114,0);
       let detailD = new Map([[String.fromCharCode(120,95,53,49,0),741], [String.fromCharCode(110,111,116,99,104,101,100,95,53,95,53,50,0),105], [String.fromCharCode(118,115,116,97,116,115,95,102,95,55,56,0),943]]);
          let stringsF = 1.0;
          let topone = String.fromCharCode(115,101,116,115,97,114,95,52,95,53,49,0);
          let filterh = String.fromCharCode(112,114,101,115,115,95,97,95,55,57,0);
         pressureb = `${filterh.length}`;
         stringsF *= parseInt(`${stringsF}`) ^ topone.length;
         topone += `${parseInt(`${stringsF}`) ^ 3}`;
         filterh += `${2 * topone.length}`;
          let station2 = String.fromCharCode(121,95,50,56,95,115,116,114,105,100,105,110,103,0);
         detailD[`${station2}`] = 3 ^ station2.length;
      do {
          let gradlewA = false;
          let register_qki = [String.fromCharCode(115,116,101,114,101,111,95,105,95,50,55,0), String.fromCharCode(104,115,99,97,108,101,114,95,122,95,51,52,0)];
         pressureb += `${1 + register_qki.length}`;
         gradlewA = !gradlewA;
         register_qki = [((gradlewA ? 3 : 1))];
         if (String.fromCharCode(111,115,122,116,118,102,50,55,108,117,0) == pressureb) {
            break;
         }
      } while ((String.fromCharCode(111,115,122,116,118,102,50,55,108,117,0) == pressureb) && (2 < (detailD.size * 5) || (detailD.size * pressureb.length) < 5));
      if (2 < pressureb.length) {
          let filled_ = true;
          let sinat = true;
          let sideN = [423, 1000];
          let mbnativeu = [String.fromCharCode(102,95,53,53,95,99,111,108,108,101,99,116,0), String.fromCharCode(115,110,112,114,105,110,116,102,95,110,95,56,52,0), String.fromCharCode(110,95,53,53,95,111,112,116,101,100,0)];
          let blackJ = 1.0;
         detailD[`${blackJ}`] = 3 % (Math.max(10, pressureb.length));
         filled_ = (filled_ ? sinat : filled_);
         sinat = sideN.length < 51 && mbnativeu.length < 51;
         sideN.push(mbnativeu.length % (Math.max(2, 2)));
         blackJ *= (parseFloat(`${(filled_ ? 1 : 2) & (sinat ? 5 : 4)}`));
      }
          let halfy = true;
          let vipsporte = 2.0;
          let holder6 = [String.fromCharCode(101,115,100,115,95,113,95,52,52,0), String.fromCharCode(112,95,54,57,95,105,116,101,114,97,116,105,118,101,0)];
         detailD[`${holder6.length}`] = 2;
         halfy = !halfy;
         vipsporte += (parseFloat(`${(halfy ? 2 : 1) + parseInt(`${vipsporte}`)}`));
         holder6 = [parseInt(`${vipsporte}`) + 1];
         pressureb = `${3 + pressureb.length}`;
      whistleorangew = `${parseInt(`${graphicsi}`)}`;
   }
   if (!tempnodatagifZ.startsWith(`${uimanager8.length}`)) {
       let alertc = new Map([[String.fromCharCode(99,95,57,50,95,99,111,110,115,105,115,116,101,110,99,121,0),false ], [String.fromCharCode(106,95,54,48,95,109,98,108,111,111,112,0),true ]]);
       let actionsb = 1.0;
         alertc[`${actionsb}`] = parseInt(`${actionsb}`);
      for (let r = 0; r < 2; r++) {
         alertc = new Map([[`${alertc.size}`, 1 + parseInt(`${actionsb}`)]]);
      }
         alertc[`${actionsb}`] = parseInt(`${actionsb}`) | 2;
      do {
         actionsb += alertc.size;
         if (3045326.0 == actionsb) {
            break;
         }
      } while ((3045326.0 == actionsb) && (4 <= (alertc.size - 4)));
          let clearW = String.fromCharCode(108,101,114,112,114,103,98,95,55,95,51,50,0);
          let mbridge5 = String.fromCharCode(101,95,53,55,95,109,101,109,120,0);
          let dacccfaabfbcbadeebddcabacdffdbP = 2;
         actionsb += alertc.size;
         clearW += `${dacccfaabfbcbadeebddcabacdffdbP}`;
         mbridge5 += `${dacccfaabfbcbadeebddcabacdffdbP % 1}`;
      do {
          let typingS = 2.0;
          let greeng = 5.0;
          let defaultlogoe = 5.0;
          let product1 = String.fromCharCode(102,97,100,101,100,95,101,95,50,50,0);
         actionsb /= Math.max(parseInt(`${typingS}`), 3);
         greeng /= Math.max(3, parseInt(`${defaultlogoe}`));
         product1 += `${2 >> (Math.min(Math.abs(parseInt(`${greeng}`)), 3))}`;
         if (4851068.0 == actionsb) {
            break;
         }
      } while ((4851068.0 == actionsb) && (!Array.from(alertc.values()).includes(actionsb)));
      tempnodatagifZ = "3";
   }
   while (!iconsetting4.startsWith(arrowupg)) {
      iconsetting4 = `${whistleorangew.length >> (Math.min(4, Math.abs(parseInt(`${graphicsi}`))))}`;
      break;
   }
   while (tempnodatagifZ.length == 3) {
      iconsetting4 = `${(String.fromCharCode(108,0) == iconN ? iconN.length : parseInt(`${graphicsi}`))}`;
      break;
   }
       let switch_tnm = new Map([[String.fromCharCode(115,121,110,116,104,101,115,105,122,101,100,95,121,95,57,56,0),String.fromCharCode(116,111,107,101,110,105,122,101,114,95,105,95,55,49,0)], [String.fromCharCode(99,111,118,97,108,101,110,116,95,122,95,55,49,0),String.fromCharCode(122,95,53,48,95,115,97,102,101,116,121,0)]]);
       let indicatorZ = new Map([[String.fromCharCode(119,95,53,95,100,111,99,105,100,0),456], [String.fromCharCode(106,95,53,54,95,116,119,111,115,0),200], [String.fromCharCode(114,101,112,111,115,105,116,105,111,110,95,122,95,55,53,0),39]]);
       let expiredW = [626, 440];
      do {
         expiredW = [indicatorZ.size / (Math.max(3, 2))];
         if (3766676 == expiredW.length) {
            break;
         }
      } while ((3766676 == expiredW.length) && (1 > (expiredW.length - indicatorZ.size) && (indicatorZ.size - expiredW.length) > 1));
       let sidef = String.fromCharCode(115,95,54,51,95,102,97,115,116,0);
         indicatorZ[sidef] = 2;
          let activityd = [String.fromCharCode(107,95,56,50,95,101,110,99,114,121,112,116,101,100,0), String.fromCharCode(99,121,99,108,105,99,114,101,102,114,101,115,104,95,114,95,55,55,0), String.fromCharCode(114,101,118,101,114,115,101,100,95,53,95,56,49,0)];
          let schedulel = String.fromCharCode(105,99,99,112,95,121,95,54,52,0);
         expiredW.push(schedulel.length);
         activityd.push(activityd.length / (Math.max(3, 3)));
         schedulel = `${activityd.length}`;
          let popup5 = [102, 749];
          let gestures8 = new Map([[String.fromCharCode(102,95,49,57,95,99,114,101,97,116,105,111,110,0),String.fromCharCode(115,95,49,54,95,97,117,100,105,101,110,99,101,0)], [String.fromCharCode(112,95,57,95,114,101,113,117,105,114,105,110,103,0),String.fromCharCode(106,95,55,49,95,112,108,117,114,97,108,105,122,101,100,0)], [String.fromCharCode(115,109,100,109,95,106,95,50,57,0),String.fromCharCode(121,95,52,95,114,101,115,121,110,99,0)]]);
          let fill0 = 3;
         indicatorZ = new Map([[`${expiredW.length}`, fill0]]);
         popup5.push(gestures8.size);
         gestures8[`${popup5.length}`] = popup5.length;
         fill0 -= 2;
          let privacy2 = 5.0;
         sidef += `${(String.fromCharCode(106,0) == sidef ? sidef.length : switch_tnm.size)}`;
         privacy2 += parseInt(`${privacy2}`) << (Math.min(Math.abs(parseInt(`${privacy2}`)), 3));
      if ((4 - switch_tnm.size) <= 1 && 1 <= (switch_tnm.size - 4)) {
         sidef += `${sidef.length | switch_tnm.size}`;
      }
         sidef = `${(sidef == String.fromCharCode(56,0) ? expiredW.length : sidef.length)}`;
      for (let p = 0; p < 2; p++) {
         switch_tnm[`${expiredW.length}`] = expiredW.length;
      }
      iconsetting4 += `${(activey == String.fromCharCode(75,0) ? whistleorangew.length : activey.length)}`;
      arrowupg += `${(String.fromCharCode(112,0) == tempnodatagifZ ? tempnodatagifZ.length : minimizeT.length)}`;
   while ((1.63 - graphicsi) < 3.68 || 1.63 < graphicsi) {
      graphicsi /= Math.max(5, 2);
      break;
   }
    setIsLoading(true);
   while (activey == arrowupg) {
      arrowupg = `${minimizeT.length}`;
      break;
   }
   for (let h = 0; h < 2; h++) {
      tempnodatagifZ = `${parseInt(`${graphicsi}`)}`;
   }
   while (minimizeT.endsWith(`${iconN.length}`)) {
       let heartF = 4;
       let runtimescheduler9 = [String.fromCharCode(122,95,49,53,95,98,97,122,101,108,0), String.fromCharCode(100,101,108,105,109,105,116,101,114,115,95,98,95,53,55,0)];
       let iconplayZ = [209, 10];
       let with_jh2 = String.fromCharCode(112,95,52,49,95,105,114,99,97,109,0);
         with_jh2 += "1";
         with_jh2 += `${runtimescheduler9.length + 2}`;
      if ((with_jh2.length ^ iconplayZ.length) >= 5) {
          let sigmobe = [339, 263, 122];
         iconplayZ = [(String.fromCharCode(73,0) == with_jh2 ? with_jh2.length : iconplayZ.length)];
         sigmobe = [sigmobe.length];
      }
      for (let j = 0; j < 3; j++) {
         iconplayZ.push(heartF >> (Math.min(5, Math.abs(3))));
      }
       let tumbnailj = 3;
       let sources = 0;
      if (!with_jh2.includes(`${sources}`)) {
          let floaterD = [704, 999, 283];
          let show5 = String.fromCharCode(110,95,56,53,95,109,105,99,0);
          let finit_ciB = String.fromCharCode(115,116,114,99,115,112,110,95,100,95,50,48,0);
         with_jh2 = `${tumbnailj - 2}`;
         floaterD.push(finit_ciB.length);
         show5 += `${floaterD.length + show5.length}`;
         finit_ciB = `${show5.length & 2}`;
      }
      if (2 == tumbnailj) {
         with_jh2 = `${sources}`;
      }
         heartF %= Math.max(4, tumbnailj);
      while ((3 >> (Math.min(3, iconplayZ.length))) == 1 && 4 == (3 >> (Math.min(4, iconplayZ.length)))) {
         runtimescheduler9 = [(with_jh2 == String.fromCharCode(84,0) ? with_jh2.length : runtimescheduler9.length)];
         break;
      }
         sources |= sources;
       let typingp = 5.0;
       let controlso = 0.0;
      if ((typingp - 2.51) > 4.12 || (controlso - typingp) > 2.51) {
         typingp /= Math.max(tumbnailj + heartF, 3);
      }
      minimizeT += `${(tempnodatagifZ == String.fromCharCode(80,0) ? heartF : tempnodatagifZ.length)}`;
      break;
   }
       let textR = String.fromCharCode(99,95,57,57,95,117,110,101,115,99,97,112,101,0);
      do {
         textR += `${2 << (Math.min(1, textR.length))}`;
         if (String.fromCharCode(105,116,101,0) == textR) {
            break;
         }
      } while ((textR != textR) && (String.fromCharCode(105,116,101,0) == textR));
       let paginations = String.fromCharCode(101,95,48,95,98,117,102,114,101,102,0);
         textR = `${textR.length + 2}`;
      arrowupg += `${(String.fromCharCode(114,0) == iconN ? parseInt(`${iconstarC}`) : iconN.length)}`;
      iconN = `${parseInt(`${iconstarC}`)}`;
   do {
      iconpipexpandz = [parseInt(`${iconstarC}`) * activey.length];
      if (2751016 == iconpipexpandz.length) {
         break;
      }
   } while ((2751016 == iconpipexpandz.length) && (1 <= (iconpipexpandz.length - 1)));
       let giftu = 0.0;
         giftu += parseInt(`${giftu}`);
      for (let t = 0; t < 1; t++) {
          let statisticso = true;
          let expandp = String.fromCharCode(115,107,101,116,99,104,95,103,95,53,50,0);
         giftu *= parseInt(`${giftu}`) | 2;
         statisticso = expandp.length == 81;
         expandp = `${(expandp.length | (statisticso ? 1 : 4))}`;
      }
      while (giftu < 1.39) {
         giftu -= parseInt(`${giftu}`);
         break;
      }
      uimanager8.push(whistleorangew.length + 3);

    if (typeof props.onLoadStart === 'function') {

      minimizeT = "3";
       let privacyZ = String.fromCharCode(100,95,55,56,95,115,116,114,105,99,109,112,0);
       let floatingy = String.fromCharCode(115,95,54,56,95,110,104,97,110,99,101,0);
      while (privacyZ != floatingy) {
         floatingy += "1";
         break;
      }
         privacyZ += `${floatingy.length}`;
      while (privacyZ.endsWith(`${floatingy.length}`)) {
          let historyA = String.fromCharCode(100,95,54,48,95,103,102,109,117,108,0);
          let dependencyf = 2.0;
         privacyZ += `${floatingy.length}`;
         historyA = `${parseInt(`${dependencyf}`)}`;
         dependencyf /= Math.max(historyA.length >> (Math.min(Math.abs(1), 2)), 2);
         break;
      }
      do {
         privacyZ = `${privacyZ.length}`;
         if (String.fromCharCode(108,120,110,103,121,121,48,98,0) == privacyZ) {
            break;
         }
      } while ((5 < privacyZ.length) && (String.fromCharCode(108,120,110,103,121,121,48,98,0) == privacyZ));
      if (floatingy.length < 5) {
          let fastG = String.fromCharCode(114,101,108,97,121,115,95,102,95,53,50,0);
          let actionsr = String.fromCharCode(102,101,101,100,95,120,95,50,0);
          let footballfieldA = [114, 218, 150];
         floatingy = `${(String.fromCharCode(99,0) == fastG ? footballfieldA.length : fastG.length)}`;
         actionsr += `${actionsr.length | 1}`;
      }
          let profileinactiveC = String.fromCharCode(103,95,49,48,48,95,116,121,112,101,0);
         privacyZ = `${1 | privacyZ.length}`;
         profileinactiveC += `${profileinactiveC.length >> (Math.min(2, profileinactiveC.length))}`;
      activey = `${1 % (Math.max(9, iconsetting4.length))}`;
   while (5 < iconsetting4.length) {
      nterstitiall -= 2 << (Math.min(3, activey.length));
      break;
   }
   for (let w = 0; w < 3; w++) {
      whistleorangew += `${uimanager8.length / (Math.max(6, iconN.length))}`;
   }
       let reactnativeratingsl = [String.fromCharCode(105,110,116,116,121,112,101,115,95,101,95,49,0), String.fromCharCode(115,117,98,115,101,113,117,101,110,116,95,115,95,57,51,0)];
       let pauseP = new Map([[String.fromCharCode(113,95,53,52,95,99,111,109,109,111,110,0),String.fromCharCode(107,95,50,50,95,101,110,116,114,111,112,121,109,118,0)], [String.fromCharCode(114,102,102,116,105,95,115,95,49,53,0),String.fromCharCode(106,95,53,54,95,103,105,116,104,117,98,0)]]);
       let dependenciesl = 5;
      do {
          let placeholdero = 2.0;
          let paginationi = String.fromCharCode(116,95,53,53,95,99,111,118,114,0);
         pauseP = new Map([[`${pauseP.size}`, pauseP.size]]);
         placeholdero -= paginationi.length;
         paginationi = `${parseInt(`${placeholdero}`) / (Math.max(7, paginationi.length))}`;
         if (4257912 == pauseP.size) {
            break;
         }
      } while (((reactnativeratingsl.length + 4) <= 5) && (4257912 == pauseP.size));
      if (5 > (pauseP.size - 4) || 1 > (4 - dependenciesl)) {
         pauseP = new Map([[`${pauseP.size}`, pauseP.size]]);
      }
       let topicl = false;
       let buffer5 = false;
      if ((reactnativeratingsl.length / (Math.max(5, pauseP.size))) >= 2 || 3 >= (pauseP.size / 2)) {
         pauseP = new Map([[`${pauseP.size}`, ((buffer5 ? 2 : 3) ^ pauseP.size)]]);
      }
         topicl = reactnativeratingsl.length < pauseP.size;
      if (3 <= (2 * reactnativeratingsl.length)) {
         reactnativeratingsl.push(pauseP.size);
      }
       let footballfiledlayoutu = 3.0;
       let areak = 0.0;
      for (let d = 0; d < 3; d++) {
         dependenciesl %= Math.max(2 << (Math.min(3, reactnativeratingsl.length)), 4);
      }
      while (topicl || !buffer5) {
         buffer5 = topicl;
         break;
      }
      minimizeT = `${tempnodatagifZ.length}`;
       let langP = [393, 276];
       let f_lockW = 2;
       let weatherD = 3.0;
      if (langP.includes(f_lockW)) {
          let nextZ = 4.0;
         f_lockW >>= Math.min(Math.abs(2), 2);
         nextZ += 3;
      }
          let modeB = String.fromCharCode(100,105,116,97,110,99,101,95,113,95,51,49,0);
         f_lockW ^= langP.length - 3;
         modeB += "2";
         weatherD -= parseFloat(`${langP.length * parseInt(`${weatherD}`)}`);
      if (5 >= langP.length) {
          let libavutils = 2.0;
          let phoneM = 5.0;
         f_lockW <<= Math.min(1, Math.abs(3 | parseInt(`${libavutils}`)));
         libavutils *= parseFloat(`${parseInt(`${phoneM}`) & parseInt(`${phoneM}`)}`);
      }
         f_lockW %= Math.max(3, f_lockW);
      graphicsi += (activey == String.fromCharCode(109,0) ? whistleorangew.length : activey.length);
       let photo1 = String.fromCharCode(102,95,51,57,95,110,100,111,116,115,0);
      if (photo1.length > 2) {
         photo1 += `${1 % (Math.max(3, photo1.length))}`;
      }
         photo1 += `${photo1.length}`;
          let rules3 = 5.0;
          let darkY = true;
          let alertN = String.fromCharCode(112,114,101,105,118,111,117,115,95,106,95,50,48,0);
         photo1 += `${alertN.length + 2}`;
         rules3 -= (parseFloat(`${parseInt(`${rules3}`) | (darkY ? 1 : 2)}`));
         darkY = 100.14 > rules3;
         alertN += `${2 * parseInt(`${rules3}`)}`;
      iconstarC += parseFloat(`${whistleorangew.length}`);
      props.onLoadStart(...arguments);
       let mbbannerw = String.fromCharCode(108,95,52,51,95,114,101,100,101,109,112,116,105,111,110,0);
       let renewE = true;
      if (mbbannerw.length == 5) {
         mbbannerw = `${mbbannerw.length}`;
      }
         renewE = !mbbannerw.endsWith(`${renewE}`);
          let tickedZ = 1;
         renewE = !renewE;
         tickedZ ^= tickedZ;
      while (mbbannerw.length <= 5) {
         mbbannerw = `${mbbannerw.length}`;
         break;
      }
      for (let y = 0; y < 3; y++) {
          let drag8 = 5.0;
         renewE = !renewE || mbbannerw.length < 86;
         drag8 -= parseFloat(`${parseInt(`${drag8}`)}`);
      }
         mbbannerw += "3";
      uimanager8.push(iconN.length >> (Math.min(Math.abs(2), 2)));
   while (activey.length < 4) {
      activey += `${((flyerp ? 3 : 5) | uimanager8.length)}`;
      break;
   }
   if (minimizeT.length < whistleorangew.length) {
      minimizeT += `${tempnodatagifZ.length | minimizeT.length}`;
   }
   do {
      iconpipexpandz.push(1);
      if (iconpipexpandz.length == 4475657) {
         break;
      }
   } while ((uimanager8.length >= 4) && (iconpipexpandz.length == 4475657));
   while (3.44 <= (4.44 - nterstitiall) || 4.44 <= (iconpipexpandz.length - nterstitiall)) {
      iconpipexpandz.push(minimizeT.length);
      break;
   }
   if (4 >= (4 >> (Math.min(2, uimanager8.length))) || (whistleorangew.length >> (Math.min(5, uimanager8.length))) >= 4) {
       let homex = 5.0;
       let middleZ = [848, 461, 665];
       let appsQ = String.fromCharCode(114,95,57,48,95,115,116,114,101,116,99,104,97,98,108,101,0);
         middleZ.push(parseInt(`${homex}`));
         middleZ.push(middleZ.length - 3);
          let mailA = String.fromCharCode(100,110,111,119,95,102,95,55,49,0);
          let colorsQ = String.fromCharCode(99,97,110,99,101,108,108,97,116,105,111,110,95,114,95,50,53,0);
          let auto_qtb = true;
         homex *= (parseFloat(`${mailA == String.fromCharCode(90,0) ? colorsQ.length : mailA.length}`));
         colorsQ = "1";
      while (appsQ.length >= middleZ.length) {
         appsQ = `${middleZ.length % (Math.max(9, appsQ.length))}`;
         break;
      }
      do {
         middleZ = [middleZ.length & 1];
         if (middleZ.length == 4275665) {
            break;
         }
      } while (((appsQ.length ^ middleZ.length) < 1 || (middleZ.length ^ 1) < 5) && (middleZ.length == 4275665));
      while (appsQ.endsWith(`${middleZ.length}`)) {
          let popupP = 2.0;
          let default_a94 = String.fromCharCode(104,97,97,114,95,49,95,50,50,0);
          let otherl = 1.0;
          let codeV = String.fromCharCode(115,116,117,98,98,101,100,95,48,95,52,0);
         appsQ += `${default_a94.length << (Math.min(1, Math.abs(parseInt(`${popupP}`))))}`;
         popupP *= 3 / (Math.max(3, codeV.length));
         default_a94 = `${codeV.length - 2}`;
         otherl += parseFloat(`${codeV.length}`);
         break;
      }
      while ((middleZ.length >> (Math.min(Math.abs(2), 2))) == 4 || (middleZ.length >> (Math.min(Math.abs(2), 4))) == 3) {
         appsQ = `${3 + parseInt(`${homex}`)}`;
         break;
      }
      for (let m = 0; m < 3; m++) {
          let googlek = [387, 903];
          let guider = new Map([[String.fromCharCode(109,95,53,54,95,99,111,110,102,101,116,116,105,0),true ], [String.fromCharCode(114,95,54,56,95,115,116,111,112,0),false ]]);
         appsQ += `${googlek.length % (Math.max(8, middleZ.length))}`;
         googlek.push(3 & guider.size);
         guider[`${guider.size}`] = guider.size ^ 1;
      }
      for (let w = 0; w < 2; w++) {
         appsQ = "1";
      }
      uimanager8.push((minimizeT == String.fromCharCode(108,0) ? parseInt(`${iconstarC}`) : minimizeT.length));
   }
   while (!flyerp) {
      arrowupg = `${(minimizeT == String.fromCharCode(87,0) ? minimizeT.length : parseInt(`${graphicsi}`))}`;
      break;
   }

    }
  };
  const onLoad = () => {
       let bootsplashB = String.fromCharCode(111,95,51,52,95,112,114,101,115,115,105,110,103,0);
    let combinev = String.fromCharCode(119,95,57,49,95,102,111,114,98,105,100,100,101,110,0);
    let placeholderp = 5.0;
    let hongkongg = 0;
    let memberz = false;
    let playercommonW = 1;
    let iconsettingp = 0.0;
    let moduleh = false;
    let middlebrightnessW = String.fromCharCode(100,105,102,102,105,99,117,108,116,121,95,101,95,57,53,0);
    let leftQ = 5.0;
    let streamingL = new Map([[String.fromCharCode(101,95,49,53,95,115,101,114,118,105,99,101,0),844], [String.fromCharCode(116,101,109,112,108,97,116,101,100,95,111,95,54,57,0),949], [String.fromCharCode(110,95,54,95,99,97,112,105,0),601]]);
    let iconclosewhitebg6 = String.fromCharCode(116,111,107,101,110,105,122,101,100,95,109,95,56,49,0);
   if (playercommonW < 3) {
      middlebrightnessW = `${2 | hongkongg}`;
   }
      moduleh = 17.38 >= placeholderp;
      iconsettingp -= parseFloat(`${middlebrightnessW.length - 2}`);
   if (middlebrightnessW.length > parseInt(`${placeholderp}`)) {
      middlebrightnessW += "1";
   }

    

   while (!bootsplashB.endsWith(`${playercommonW}`)) {
      playercommonW += (3 | (moduleh ? 2 : 1));
      break;
   }
      memberz = String.fromCharCode(69,0) == combinev;
   if (hongkongg >= placeholderp) {
      hongkongg <<= Math.min(Math.abs(combinev.length >> (Math.min(5, Math.abs(hongkongg)))), 5);
   }
      moduleh = hongkongg == middlebrightnessW.length;
    setIsLoading(false);
   while (5 >= (bootsplashB.length - 5) || 1 >= (5 | bootsplashB.length)) {
      iconsettingp /= Math.max(4, parseFloat(`${1}`));
      break;
   }
   if (memberz) {
      memberz = !middlebrightnessW.endsWith(`${iconsettingp}`);
   }
      memberz = leftQ == 11.10;
      hongkongg += parseInt(`${iconsettingp}`) >> (Math.min(middlebrightnessW.length, 5));

    setIsError(false);
      leftQ *= 2 / (Math.max(parseInt(`${placeholderp}`), 8));
   if (!bootsplashB.endsWith(`${streamingL.size}`)) {
      bootsplashB = "1";
   }
      combinev = `${combinev.length}`;
      middlebrightnessW = `${playercommonW}`;

    if (typeof props.onLoad === 'function') {

   if ((4.67 / (Math.max(3, placeholderp))) >= 4.96) {
      placeholderp /= Math.max(2, (parseFloat(`${parseInt(`${leftQ}`) ^ (memberz ? 4 : 4)}`)));
   }
   while (!combinev.startsWith(bootsplashB)) {
      bootsplashB = "1";
      break;
   }
   do {
       let lessK = 3.0;
       let contextq = String.fromCharCode(97,117,116,104,111,114,95,111,95,53,48,0);
       let historyT = false;
       let scoreF = 5;
       let rewardQ = String.fromCharCode(111,95,51,50,95,115,117,98,112,105,120,101,108,0);
      for (let o = 0; o < 3; o++) {
          let unreadg = String.fromCharCode(114,101,97,109,95,100,95,50,48,0);
          let benefitL = String.fromCharCode(115,95,51,48,95,109,106,112,101,103,98,0);
          let toponO = true;
         historyT = rewardQ.length <= 91;
         unreadg += `${((toponO ? 4 : 2))}`;
         benefitL = `${((toponO ? 1 : 2) % (Math.max(benefitL.length, 3)))}`;
      }
      for (let a = 0; a < 1; a++) {
         rewardQ += `${(String.fromCharCode(99,0) == rewardQ ? parseInt(`${lessK}`) : rewardQ.length)}`;
      }
         rewardQ = `${contextq.length % (Math.max(2, 9))}`;
          let helperl = [379, 234];
          let windN = String.fromCharCode(104,95,49,50,95,115,117,98,115,101,108,101,99,116,0);
         contextq += `${windN.length + 3}`;
         helperl.push(helperl.length & helperl.length);
         windN += `${2 + helperl.length}`;
      if (!historyT) {
          let yingk = false;
          let subbasketballplayerp = String.fromCharCode(112,101,114,105,111,100,105,99,97,108,108,121,95,49,95,53,52,0);
         historyT = subbasketballplayerp.length < 55;
         yingk = !yingk;
         subbasketballplayerp += `${((yingk ? 2 : 5) ^ 3)}`;
      }
         scoreF += ((historyT ? 1 : 5));
      while (rewardQ.length > 1) {
         rewardQ = `${((historyT ? 4 : 4) ^ parseInt(`${lessK}`))}`;
         break;
      }
       let xadsdkg = true;
         rewardQ = `${3 + parseInt(`${lessK}`)}`;
      for (let q = 0; q < 1; q++) {
         contextq += `${((historyT ? 4 : 3) >> (Math.min(Math.abs(scoreF), 4)))}`;
      }
         historyT = 54 == scoreF;
          let iconplayR = 3.0;
          let weibo7 = 2.0;
          let settingZ = String.fromCharCode(105,110,100,101,112,101,110,100,101,110,116,95,116,95,53,55,0);
         lessK *= (parseFloat(`${parseInt(`${lessK}`) * (xadsdkg ? 4 : 5)}`));
         iconplayR *= parseFloat(`${parseInt(`${iconplayR}`)}`);
         weibo7 /= Math.max(3, parseInt(`${weibo7}`) >> (Math.min(5, Math.abs(3))));
         settingZ += `${parseInt(`${weibo7}`)}`;
      if (rewardQ.includes(`${scoreF}`)) {
         scoreF |= 1;
      }
      if (lessK < 3.31 || (3.31 * lessK) < 2.16) {
         xadsdkg = 15 > scoreF;
      }
          let orangeC = 0;
          let malaysiaz = new Map([[String.fromCharCode(120,95,57,57,95,111,118,101,114,108,97,112,115,0),String.fromCharCode(118,101,110,117,101,95,51,95,51,57,0)], [String.fromCharCode(122,95,50,56,95,101,115,116,105,109,97,116,111,114,0),String.fromCharCode(115,99,97,110,110,101,114,95,50,95,52,56,0)], [String.fromCharCode(117,110,105,109,112,111,114,116,97,110,116,95,97,95,55,49,0),String.fromCharCode(103,101,110,101,114,105,99,95,113,95,50,54,0)]]);
         rewardQ = `${orangeC / 2}`;
         orangeC *= 3 << (Math.min(2, Math.abs(malaysiaz.size)));
         malaysiaz = new Map([[`${malaysiaz.size}`, malaysiaz.size]]);
      iconclosewhitebg6 += `${parseInt(`${leftQ}`) + parseInt(`${lessK}`)}`;
      if (958930 == iconclosewhitebg6.length) {
         break;
      }
   } while ((958930 == iconclosewhitebg6.length) && (iconclosewhitebg6.length <= 3));
   for (let k = 0; k < 1; k++) {
      combinev = `${playercommonW % 1}`;
   }
      props.onLoad(...arguments);
   do {
       let uimanagerj = 3.0;
       let iconfeedbackm = String.fromCharCode(106,95,51,55,95,99,121,99,108,101,99,108,111,99,107,0);
       let attributedstringS = 5;
       let successB = [323, 639, 220];
      while (4 > (attributedstringS >> (Math.min(Math.abs(3), 1))) && (3 >> (Math.min(2, Math.abs(attributedstringS)))) > 3) {
         successB.push(2 << (Math.min(5, Math.abs(parseInt(`${uimanagerj}`)))));
         break;
      }
         attributedstringS /= Math.max(successB.length, 1);
       let logousern = String.fromCharCode(118,97,108,105,100,97,116,111,114,95,116,95,51,56,0);
      for (let s = 0; s < 2; s++) {
          let activityi = String.fromCharCode(112,95,54,49,0);
          let animationsT = String.fromCharCode(106,95,51,48,95,111,98,115,101,114,118,101,114,0);
          let dropdownM = 0.0;
          let philippinesk = 3.0;
         logousern += `${successB.length}`;
         activityi += `${3 + parseInt(`${dropdownM}`)}`;
         animationsT += `${parseInt(`${dropdownM}`) ^ parseInt(`${philippinesk}`)}`;
         philippinesk += parseFloat(`${animationsT.length << (Math.min(Math.abs(2), 2))}`);
      }
      if ((uimanagerj - 3.49) < 3.24 && (3.49 - uimanagerj) < 4.56) {
         attributedstringS >>= Math.min(1, Math.abs(1));
      }
      if (3.6 <= (uimanagerj - 3.49)) {
         logousern += `${iconfeedbackm.length}`;
      }
      for (let o = 0; o < 1; o++) {
          let valuesd = String.fromCharCode(106,95,53,53,95,115,111,117,114,99,101,99,108,105,112,0);
          let statsk = 5;
          let whatsappv = String.fromCharCode(116,116,97,100,97,116,97,95,55,95,52,57,0);
         attributedstringS >>= Math.min(5, Math.abs(2));
         valuesd = `${statsk >> (Math.min(valuesd.length, 4))}`;
         statsk *= 3 + statsk;
         whatsappv = `${whatsappv.length}`;
      }
         logousern += `${(iconfeedbackm == String.fromCharCode(99,0) ? iconfeedbackm.length : logousern.length)}`;
      for (let r = 0; r < 1; r++) {
         iconfeedbackm = `${1 + attributedstringS}`;
      }
      while (5 >= (5 >> (Math.min(5, logousern.length)))) {
          let kuaishouX = 1.0;
          let livenodatabgimgi = 3.0;
          let calendarn = 2.0;
          let profileactivei = [898, 322];
          let dangerF = String.fromCharCode(103,95,51,56,95,108,105,118,101,109,111,100,101,0);
         logousern += "1";
         kuaishouX *= parseInt(`${kuaishouX}`) & profileactivei.length;
         livenodatabgimgi -= 2 * parseInt(`${kuaishouX}`);
         calendarn /= Math.max(5, parseFloat(`${parseInt(`${kuaishouX}`)}`));
         profileactivei.push(dangerF.length);
         dangerF = "3";
         break;
      }
       let arrowrightx = 0;
         iconfeedbackm = `${attributedstringS}`;
      memberz = String.fromCharCode(74,0) == middlebrightnessW || 24 >= attributedstringS;
      if (memberz ? !memberz : memberz) {
         break;
      }
   } while ((iconclosewhitebg6.includes(`${memberz}`)) && (memberz ? !memberz : memberz));
       let lights = String.fromCharCode(100,101,99,111,114,114,101,108,97,116,101,95,108,95,56,57,0);
       let yingQ = 3.0;
       let viewer7 = 1;
       let membership2 = 2.0;
       let modelW = 2.0;
      if ((3.93 - modelW) == 2.46) {
          let descL = String.fromCharCode(99,97,110,100,105,100,97,116,101,95,116,95,53,54,0);
          let moonS = false;
          let related_ = [824, 479, 236];
          let scrollviewf = String.fromCharCode(109,111,117,116,104,95,120,95,51,50,0);
          let gpayc = 2.0;
         modelW /= Math.max(1, parseFloat(`${scrollviewf.length}`));
         descL += `${descL.length >> (Math.min(Math.abs(1), 5))}`;
         moonS = String.fromCharCode(73,0) == descL || 55 >= related_.length;
         related_ = [(String.fromCharCode(100,0) == descL ? parseInt(`${gpayc}`) : descL.length)];
         scrollviewf += `${related_.length}`;
         gpayc *= parseFloat(`${parseInt(`${gpayc}`) * 2}`);
      }
       let arrowupn = String.fromCharCode(102,95,54,49,95,100,105,115,109,105,115,115,0);
       let whiteanimationliveY = String.fromCharCode(100,101,116,97,105,108,101,100,95,104,95,56,53,0);
         viewer7 >>= Math.min(Math.abs(parseInt(`${yingQ}`) / (Math.max(3, viewer7))), 4);
         viewer7 >>= Math.min(Math.abs(1 >> (Math.min(Math.abs(parseInt(`${modelW}`)), 4))), 5);
      while (3.5 >= (parseFloat(`${lights.length}`) + membership2)) {
         membership2 += parseFloat(`${whiteanimationliveY.length}`);
         break;
      }
         modelW -= parseFloat(`${parseInt(`${yingQ}`) * 1}`);
          let mappingD = 2;
         yingQ -= parseFloat(`${1 ^ arrowupn.length}`);
         mappingD *= 2 | mappingD;
          let z_hash2 = String.fromCharCode(115,116,114,108,101,110,95,57,95,50,56,0);
          let libswscaleN = true;
          let dependenciesO = [40, 681];
         viewer7 += 3 - z_hash2.length;
         z_hash2 = `${dependenciesO.length / 1}`;
         libswscaleN = dependenciesO.length == 55;
      streamingL[`${hongkongg}`] = (String.fromCharCode(69,0) == middlebrightnessW ? hongkongg : middlebrightnessW.length);
      leftQ += hongkongg << (Math.min(3, Math.abs(2)));
   do {
      hongkongg /= Math.max(1, parseInt(`${iconsettingp}`) + parseInt(`${leftQ}`));
      if (4885902 == hongkongg) {
         break;
      }
   } while ((4885902 == hongkongg) && (4 >= (3 ^ streamingL.size)));

    }
  };

  const onBuffer = (data = {}) => {
    console.log('onbufffer', data);
    setIsError(false);
    if (data.isBuffering) {
      
    }
    if (!data.isBuffering) {
      
      
    }
  };

  const Loader = () => {
       let borderlessJ = String.fromCharCode(115,105,103,109,97,95,100,95,56,48,0);
    let modal1 = 2;
    let dplus1 = 3.0;
    let away5 = String.fromCharCode(105,110,116,116,121,112,101,115,95,118,95,49,51,0);
    let textinputO = String.fromCharCode(110,102,116,95,57,95,54,55,0);
    let libglogl = new Map([[String.fromCharCode(113,99,101,108,112,100,97,116,97,95,100,95,49,50,0),String.fromCharCode(102,111,114,101,97,99,104,95,110,95,53,55,0)], [String.fromCharCode(112,95,48,95,102,105,110,100,0),String.fromCharCode(117,112,108,111,97,100,97,98,108,101,95,106,95,56,49,0)]]);
    let libyogaN = 4.0;
    let singaporet = new Map([[String.fromCharCode(112,114,101,115,115,101,115,95,113,95,52,52,0),String.fromCharCode(118,109,97,116,114,105,120,95,56,95,55,52,0)], [String.fromCharCode(105,95,56,50,95,105,115,119,104,105,116,101,115,112,97,99,101,0),String.fromCharCode(101,110,99,111,100,101,109,118,95,53,95,50,55,0)]]);
    let backwardh = String.fromCharCode(104,95,57,50,95,108,111,103,105,99,97,108,0);
      borderlessJ = `${borderlessJ.length}`;
   for (let j = 0; j < 1; j++) {
       let history0 = String.fromCharCode(108,101,103,101,110,100,95,106,95,54,48,0);
       let libavfilterv = String.fromCharCode(102,95,49,57,95,115,104,105,109,115,0);
       let detail8 = [15, 1];
       let libturbomodulejsijnie = 1;
       let sourceL = 1.0;
          let chinasameP = 0;
         libavfilterv += "1";
         chinasameP *= chinasameP * 3;
       let mbnativeZ = String.fromCharCode(115,95,53,95,112,114,111,118,105,100,105,110,103,0);
       let update_0h = String.fromCharCode(118,95,50,50,95,117,110,114,101,97,100,0);
         detail8 = [1 + update_0h.length];
      if ((history0.length & 1) < 5 && (1 & history0.length) < 4) {
         history0 = `${history0.length - 1}`;
      }
         mbnativeZ += `${libavfilterv.length}`;
         libavfilterv += `${1 / (Math.max(5, history0.length))}`;
      do {
         mbnativeZ += `${detail8.length}`;
         if (mbnativeZ == String.fromCharCode(118,105,110,114,54,116,107,95,113,0)) {
            break;
         }
      } while ((5 >= mbnativeZ.length) && (mbnativeZ == String.fromCharCode(118,105,110,114,54,116,107,95,113,0)));
      if (2.70 < sourceL) {
         libavfilterv = `${2 / (Math.max(4, parseInt(`${sourceL}`)))}`;
      }
      if (4 >= libturbomodulejsijnie) {
          let runtimeschedulerP = String.fromCharCode(110,95,52,55,95,119,97,110,116,0);
          let shirt6 = String.fromCharCode(115,108,111,112,101,95,108,95,54,51,0);
          let tooltipsV = [311, 345];
          let r_center0 = new Map([[String.fromCharCode(114,95,51,50,95,112,97,114,101,110,116,0),907], [String.fromCharCode(102,105,108,116,101,114,102,95,100,95,52,52,0),144]]);
          let aboutK = String.fromCharCode(111,100,100,95,101,95,51,53,0);
         libturbomodulejsijnie += parseInt(`${sourceL}`);
         runtimeschedulerP += "1";
         shirt6 = "2";
         tooltipsV = [aboutK.length - tooltipsV.length];
         r_center0 = new Map([[shirt6, runtimeschedulerP.length & 2]]);
         aboutK = `${tooltipsV.length / (Math.max(aboutK.length, 3))}`;
      }
         history0 += `${libturbomodulejsijnie | detail8.length}`;
      while ((5 & libturbomodulejsijnie) == 3) {
         libturbomodulejsijnie %= Math.max(libavfilterv.length - 2, 4);
         break;
      }
       let popupA = String.fromCharCode(99,111,108,108,105,115,116,95,114,95,50,53,0);
       let loadingS = String.fromCharCode(114,101,98,97,108,97,110,99,101,95,122,95,55,52,0);
       let pangleW = String.fromCharCode(101,103,114,101,115,115,95,52,95,55,56,0);
          let redgoalj = [136, 949];
         sourceL -= parseFloat(`${2 - history0.length}`);
         redgoalj.push(redgoalj.length << (Math.min(2, redgoalj.length)));
       let saveD = 3;
       let moviesY = 5;
      libyogaN += modal1;
   }

    if (!isLoading) {

   do {
      borderlessJ += "2 * modal1";
      if (3009041 == borderlessJ.length) {
         break;
      }
   } while ((3009041 == borderlessJ.length) && (textinputO.length <= 3 && borderlessJ == String.fromCharCode(103,0)));
       let libsentry5 = [String.fromCharCode(98,95,48,95,109,117,115,120,0), String.fromCharCode(102,95,56,54,95,116,114,105,103,103,101,114,0)];
       let collectionY = String.fromCharCode(99,97,108,99,117,108,97,116,105,110,103,95,108,95,54,49,0);
       let libjsinspectorP = String.fromCharCode(111,103,103,118,111,114,98,105,115,95,49,95,49,55,0);
         collectionY = `${collectionY.length}`;
      while (libjsinspectorP != String.fromCharCode(69,0)) {
         collectionY += "1";
         break;
      }
          let x_image8 = 1.0;
         collectionY += `${parseInt(`${x_image8}`)}`;
      while (1 <= (libsentry5.length / 4) || 4 <= (libsentry5.length / (Math.max(collectionY.length, 5)))) {
         collectionY += `${libsentry5.length / (Math.max(2, collectionY.length))}`;
         break;
      }
      if (libjsinspectorP == collectionY) {
         collectionY += `${collectionY.length | 1}`;
      }
       let apps1 = new Map([[String.fromCharCode(104,95,52,51,0),false ], [String.fromCharCode(100,99,116,101,108,101,109,95,104,95,55,55,0),false ]]);
       let selectX = new Map([[String.fromCharCode(110,95,49,48,95,109,105,108,105,111,110,115,0),480], [String.fromCharCode(109,117,116,97,98,105,108,105,116,121,95,101,95,53,50,0),362], [String.fromCharCode(98,111,117,110,100,97,108,108,95,54,95,55,53,0),626]]);
      do {
         collectionY += `${apps1.size}`;
         if (2140695 == collectionY.length) {
            break;
         }
      } while (((collectionY.length & apps1.size) == 2 || 2 == (2 & collectionY.length)) && (2140695 == collectionY.length));
         libjsinspectorP = `${apps1.size}`;
      if (apps1.size >= 1) {
          let telemetryN = String.fromCharCode(97,99,100,99,95,49,95,53,50,0);
          let updatesW = 2;
         libjsinspectorP = `${3 >> (Math.min(4, Math.abs(updatesW)))}`;
         telemetryN = `${telemetryN.length}`;
         updatesW <<= Math.min(2, telemetryN.length);
      }
      modal1 &= borderlessJ.length + away5.length;
      return null;
      modal1 /= Math.max(1 | textinputO.length, 4);
   do {
      libyogaN -= (String.fromCharCode(86,0) == textinputO ? textinputO.length : away5.length);
      if (2790750.0 == libyogaN) {
         break;
      }
   } while ((!away5.startsWith(`${libyogaN}`)) && (2790750.0 == libyogaN));

    }
    return (
      <View style={VideoPlayerstyles.loader.container}>
        <Animated.Image
          source={require('./images/icons/libreactnativeblobLargebrightnessColors.png')}
          style={[
            VideoPlayerstyles.loader.icon,
            {
              transform: [
                {
                  rotate: animationLoader.interpolate({
                    inputRange: [0, 360],
                    outputRange: ['0deg', '360deg'],
                  }),
                },
              ],
            },
          ]}
        />
      </View>
    );
       let rewind1 = [String.fromCharCode(112,117,116,115,95,122,95,49,48,0), String.fromCharCode(120,95,49,56,95,101,118,101,114,121,0), String.fromCharCode(112,97,114,115,101,117,116,105,108,115,95,115,95,55,50,0)];
       let colors7 = 5;
       let mailB = 0.0;
         colors7 ^= parseInt(`${mailB}`);
         mailB *= parseFloat(`${parseInt(`${mailB}`)}`);
       let actionO = true;
       let macaum = false;
      if (rewind1.length < 5) {
         rewind1 = [2];
      }
      while (!actionO && !macaum) {
         actionO = macaum && rewind1.length >= 4;
         break;
      }
      while (3 >= (rewind1.length << (Math.min(Math.abs(1), 4))) || (rewind1.length << (Math.min(4, Math.abs(colors7)))) >= 1) {
         rewind1 = [rewind1.length];
         break;
      }
      if (3.43 == (mailB - parseFloat(`${colors7}`)) && 1 == (4 >> (Math.min(4, Math.abs(colors7))))) {
         mailB *= parseFloat(`${parseInt(`${mailB}`) ^ 1}`);
      }
         mailB -= (parseFloat(`${3 << (Math.min(Math.abs((macaum ? 2 : 5)), 3))}`));
          let robotoP = new Map([[String.fromCharCode(99,104,97,114,99,111,110,118,95,108,95,53,48,0),208], [String.fromCharCode(102,105,116,116,105,110,103,95,48,95,57,0),973]]);
          let gifgoalbgM = String.fromCharCode(99,111,111,114,100,105,110,97,116,101,115,95,108,95,55,50,0);
         mailB += parseFloat(`${colors7 % (Math.max(4, rewind1.length))}`);
         robotoP = new Map([[`${robotoP.size}`, 1 << (Math.min(3, Math.abs(robotoP.size)))]]);
         gifgoalbgM = "2";
      textinputO = `${rewind1.length % 2}`;
   while ((modal1 / (Math.max(4, parseInt(`${libyogaN}`)))) >= 5 || 5.29 >= (libyogaN / (Math.max(2.35, 2)))) {
      modal1 += modal1 / 1;
      break;
   }

  };

  const onEnd = () => {
       let loginsuccessh = true;
    let injuryQ = String.fromCharCode(109,111,100,101,95,98,95,56,57,0);
    let activej = String.fromCharCode(97,99,111,100,101,99,95,116,95,53,54,0);
    let apple7 = 4;
    let sheetJ = [String.fromCharCode(105,95,49,53,95,101,110,104,97,110,99,101,0), String.fromCharCode(112,97,110,105,99,95,48,95,52,51,0)];
    let libimagepipelined = 4;
    let shirtQ = true;
    let crossp = String.fromCharCode(108,105,110,107,101,100,95,52,95,55,56,0);
    let dycreatorM = [162, 98];
       let malaysiaU = String.fromCharCode(105,110,116,101,110,116,105,111,110,95,112,95,55,56,0);
       let libreactnativejni3 = 4.0;
         malaysiaU += `${malaysiaU.length | 3}`;
      while ((3 >> (Math.min(5, malaysiaU.length))) > 3 || (malaysiaU.length & 3) > 3) {
          let yellowvideoliveS = String.fromCharCode(100,101,108,101,116,105,111,110,95,118,95,51,55,0);
          let armva4 = new Map([[String.fromCharCode(103,95,50,51,95,112,97,114,115,101,117,116,105,108,115,0),true ], [String.fromCharCode(105,110,116,101,114,97,116,105,111,110,95,101,95,51,53,0),false ]]);
          let ball3 = new Map([[String.fromCharCode(116,95,51,54,95,116,111,117,116,0),String.fromCharCode(103,97,117,115,115,105,97,110,95,120,95,50,48,0)], [String.fromCharCode(115,105,110,100,101,120,95,105,95,55,50,0),String.fromCharCode(120,95,52,95,105,100,99,116,120,108,108,109,0)], [String.fromCharCode(105,115,122,101,114,111,95,99,95,57,48,0),String.fromCharCode(121,95,51,50,95,115,117,98,115,97,109,112,108,105,110,103,0)]]);
         libreactnativejni3 *= malaysiaU.length / 3;
         yellowvideoliveS = `${1 * armva4.size}`;
         armva4[yellowvideoliveS] = ball3.size << (Math.min(yellowvideoliveS.length, 1));
         ball3[`${armva4.size}`] = ball3.size;
         break;
      }
         libreactnativejni3 *= 2 + malaysiaU.length;
         libreactnativejni3 -= parseInt(`${libreactnativejni3}`) - malaysiaU.length;
      if (1.100 < (libreactnativejni3 - 2.90)) {
         malaysiaU = `${parseInt(`${libreactnativejni3}`) >> (Math.min(Math.abs(2), 5))}`;
      }
         libreactnativejni3 /= Math.max((String.fromCharCode(90,0) == malaysiaU ? parseInt(`${libreactnativejni3}`) : malaysiaU.length), 5);
      apple7 %= Math.max(libimagepipelined, 3);
   while (3 == (1 ^ crossp.length)) {
       let favicont = 2;
       let collectionL = 1.0;
       let libfbT = String.fromCharCode(101,110,99,111,100,101,100,95,106,95,49,57,0);
       let iconnointernetE = true;
      for (let z = 0; z < 2; z++) {
          let footballfieldw = 2.0;
          let description_6dy = 4.0;
          let viewer6 = String.fromCharCode(100,117,112,101,100,95,49,95,51,52,0);
          let pinga = 4.0;
          let telegramD = new Map([[String.fromCharCode(115,95,49,53,95,98,117,116,116,101,114,102,108,121,0),914], [String.fromCharCode(97,121,117,118,108,101,95,109,95,55,49,0),99]]);
         collectionL -= parseFloat(`${favicont}`);
         footballfieldw *= parseFloat(`${parseInt(`${footballfieldw}`) % (Math.max(parseInt(`${pinga}`), 3))}`);
         description_6dy /= Math.max(parseFloat(`${parseInt(`${footballfieldw}`)}`), 4);
         viewer6 += "2";
         pinga += parseFloat(`${parseInt(`${pinga}`) >> (Math.min(viewer6.length, 1))}`);
         telegramD[`${pinga}`] = 2;
      }
      do {
         collectionL += parseFloat(`${libfbT.length}`);
         if (2165296.0 == collectionL) {
            break;
         }
      } while ((2165296.0 == collectionL) && (4.4 == (collectionL * 5.1) && 5.1 == collectionL));
      for (let b = 0; b < 3; b++) {
         collectionL += parseFloat(`${1}`);
      }
         libfbT += `${favicont & 1}`;
       let untickS = 1;
       let penaltygoale = 2;
          let singleM = 3;
          let greyL = String.fromCharCode(113,95,53,56,95,115,111,102,116,0);
          let frame_aM = 3;
         penaltygoale |= ((iconnointernetE ? 1 : 2) << (Math.min(Math.abs(singleM), 1)));
         singleM -= (String.fromCharCode(117,0) == greyL ? frame_aM : greyL.length);
         frame_aM -= greyL.length / (Math.max(1, 2));
       let stored = String.fromCharCode(101,95,51,55,95,117,112,100,97,116,101,100,0);
       let proxyb = String.fromCharCode(120,95,51,57,95,111,110,121,120,0);
      do {
         untickS |= parseInt(`${collectionL}`) + proxyb.length;
         if (3424482 == untickS) {
            break;
         }
      } while ((3424482 == untickS) && ((5 >> (Math.min(4, Math.abs(untickS)))) >= 2 && (5 >> (Math.min(1, Math.abs(untickS)))) >= 3));
         iconnointernetE = proxyb.length < untickS;
       let panglem = new Map([[String.fromCharCode(100,95,57,53,95,104,101,99,107,0),true ], [String.fromCharCode(99,104,101,99,107,105,110,95,102,95,49,52,0),true ]]);
       let usernamed = new Map([[String.fromCharCode(120,95,49,48,48,95,117,112,115,116,114,101,97,109,0),String.fromCharCode(117,95,54,56,95,111,118,101,114,118,105,101,119,0)], [String.fromCharCode(115,117,112,112,111,114,116,95,121,95,57,56,0),String.fromCharCode(119,95,49,51,95,109,97,116,99,104,101,115,0)]]);
      for (let n = 0; n < 2; n++) {
         untickS += favicont;
      }
      do {
         iconnointernetE = untickS >= 93;
         if (iconnointernetE ? !iconnointernetE : iconnointernetE) {
            break;
         }
      } while ((!iconnointernetE) && (iconnointernetE ? !iconnointernetE : iconnointernetE));
      crossp = `${2 ^ activej.length}`;
      break;
   }
      shirtQ = libimagepipelined < activej.length;
      injuryQ = `${dycreatorM.length}`;
       let halffieldimagez = new Map([[String.fromCharCode(100,117,114,97,116,105,111,110,115,95,101,95,56,50,0),String.fromCharCode(97,110,103,108,101,100,95,56,95,49,55,0)], [String.fromCharCode(110,95,57,51,95,115,116,114,115,101,112,0),String.fromCharCode(114,97,116,101,99,116,114,108,95,122,95,57,53,0)], [String.fromCharCode(97,95,57,95,99,111,109,109,105,116,0),String.fromCharCode(102,95,53,57,95,97,100,97,112,116,115,0)]]);
       let infoP = 3;
       let constantsD = String.fromCharCode(105,110,116,101,114,115,101,99,116,115,95,99,95,53,50,0);
         halffieldimagez = new Map([[`${infoP}`, (constantsD == String.fromCharCode(85,0) ? infoP : constantsD.length)]]);
          let savev = String.fromCharCode(122,95,49,48,48,95,111,112,101,110,105,110,103,0);
         constantsD = `${1 << (Math.min(1, Math.abs(infoP)))}`;
         savev += `${(String.fromCharCode(76,0) == savev ? savev.length : savev.length)}`;
      do {
         infoP += halffieldimagez.size >> (Math.min(1, Math.abs(infoP)));
         if (infoP == 146780) {
            break;
         }
      } while ((infoP == 146780) && ((infoP + constantsD.length) <= 4 && 4 <= (constantsD.length + infoP)));
      while (constantsD.length <= infoP) {
         infoP *= halffieldimagez.size | infoP;
         break;
      }
      while ((constantsD.length ^ halffieldimagez.size) < 4) {
         constantsD = `${constantsD.length}`;
         break;
      }
       let h_image0 = String.fromCharCode(112,95,48,95,116,114,97,110,115,108,97,116,105,111,110,115,0);
      for (let v = 0; v < 3; v++) {
         infoP <<= Math.min(Math.abs(2), 1);
      }
          let iconfeedbacky = 3;
          let countdown7 = [String.fromCharCode(121,95,52,52,95,121,117,121,116,111,121,118,0), String.fromCharCode(99,95,50,51,95,102,105,110,116,0), String.fromCharCode(100,105,102,95,109,95,54,57,0)];
          let bodanJ = 5.0;
         infoP &= parseInt(`${bodanJ}`) >> (Math.min(3, Math.abs(infoP)));
         iconfeedbacky <<= Math.min(4, Math.abs(countdown7.length >> (Math.min(Math.abs(3), 3))));
         countdown7 = [countdown7.length];
         bodanJ -= parseFloat(`${countdown7.length << (Math.min(2, Math.abs(iconfeedbacky)))}`);
      if ((h_image0.length & halffieldimagez.size) > 4) {
          let agreementJ = String.fromCharCode(112,108,97,99,101,95,120,95,50,53,0);
          let eighteenH = String.fromCharCode(99,95,55,54,0);
          let mapbufferZ = 0.0;
          let stationy = String.fromCharCode(106,100,99,116,95,57,95,53,52,0);
          let bottomm = String.fromCharCode(102,95,49,48,95,111,114,105,103,105,110,0);
         halffieldimagez[`${infoP}`] = (String.fromCharCode(82,0) == eighteenH ? eighteenH.length : infoP);
         agreementJ = `${stationy.length}`;
         mapbufferZ *= (parseFloat(`${stationy == String.fromCharCode(49,0) ? bottomm.length : stationy.length}`));
         bottomm += `${(stationy == String.fromCharCode(106,0) ? parseInt(`${mapbufferZ}`) : stationy.length)}`;
      }
      sheetJ = [constantsD.length];

    console.log('onend');
   if (!shirtQ) {
       let iconshareo = true;
       let clearZ = String.fromCharCode(112,97,114,116,105,99,105,112,97,110,116,95,122,95,55,49,0);
       let nativeM = String.fromCharCode(114,95,52,51,95,99,111,109,109,97,110,100,115,0);
       let liveendmodallogo6 = new Map([[String.fromCharCode(109,95,56,95,109,115,114,108,101,100,101,99,0),String.fromCharCode(118,95,49,57,95,97,119,97,121,0)], [String.fromCharCode(99,111,109,109,105,116,116,101,100,95,103,95,57,56,0),String.fromCharCode(114,111,108,101,95,55,95,49,52,0)], [String.fromCharCode(118,115,99,97,108,101,95,52,95,51,51,0),String.fromCharCode(112,95,49,55,95,115,112,108,105,116,115,0)]]);
      if (1 > (clearZ.length * liveendmodallogo6.size) && (1 * liveendmodallogo6.size) > 1) {
         liveendmodallogo6[nativeM] = liveendmodallogo6.size;
      }
      if (!nativeM.startsWith(`${clearZ.length}`)) {
         nativeM += "2";
      }
          let iconeditr = 5.0;
          let anewarchdefaultsm = String.fromCharCode(111,95,54,50,95,111,98,106,99,0);
          let edito = 2.0;
         iconshareo = parseInt(`${edito}`) <= anewarchdefaultsm.length;
         iconeditr += parseFloat(`${parseInt(`${iconeditr}`) / 3}`);
         anewarchdefaultsm = `${parseInt(`${iconeditr}`)}`;
         iconshareo = String.fromCharCode(98,0) == nativeM && liveendmodallogo6.size <= 69;
      if (iconshareo) {
         liveendmodallogo6[`${iconshareo}`] = 3;
      }
      if (5 <= (clearZ.length << (Math.min(3, Math.abs(liveendmodallogo6.size)))) || 3 <= (clearZ.length << (Math.min(Math.abs(5), 3)))) {
         liveendmodallogo6[clearZ] = nativeM.length - clearZ.length;
      }
      if (iconshareo && clearZ.length > 1) {
         clearZ += `${(String.fromCharCode(88,0) == clearZ ? nativeM.length : clearZ.length)}`;
      }
      for (let p = 0; p < 2; p++) {
         liveendmodallogo6 = new Map([[`${liveendmodallogo6.size}`, clearZ.length - liveendmodallogo6.size]]);
      }
         nativeM = `${(nativeM == String.fromCharCode(52,0) ? nativeM.length : (iconshareo ? 1 : 3))}`;
      do {
          let weatherM = false;
          let gestureK = true;
         liveendmodallogo6 = new Map([[`${weatherM}`, ((gestureK ? 5 : 3) | (weatherM ? 4 : 2))]]);
         if (liveendmodallogo6.size == 2503845) {
            break;
         }
      } while ((liveendmodallogo6.size < 1) && (liveendmodallogo6.size == 2503845));
      while (4 > nativeM.length) {
          let soundZ = [634, 65, 779];
          let y_titleO = String.fromCharCode(119,95,53,57,95,109,101,109,115,101,116,0);
          let customp = 3;
          let mapbuffer_ = 0;
          let spec6 = String.fromCharCode(122,95,50,51,95,118,105,97,98,108,101,0);
         clearZ = `${(String.fromCharCode(79,0) == y_titleO ? spec6.length : y_titleO.length)}`;
         soundZ.push(1);
         customp -= customp;
         mapbuffer_ += mapbuffer_ & soundZ.length;
         spec6 = "3";
         break;
      }
      if ((clearZ.length & 3) <= 1) {
         clearZ += `${liveendmodallogo6.size * 1}`;
      }
      loginsuccessh = clearZ.length == 98;
   }
      activej += `${(activej == String.fromCharCode(98,0) ? activej.length : sheetJ.length)}`;
   if (4 > apple7) {
      activej += `${activej.length % 3}`;
   }
      dycreatorM.push(apple7);
      crossp = `${(3 * (loginsuccessh ? 3 : 4))}`;

    setIsLoading(false);
   for (let z = 0; z < 3; z++) {
      libimagepipelined >>= Math.min(Math.abs(((shirtQ ? 2 : 2))), 1);
   }
      injuryQ = `${1 % (Math.max(1, sheetJ.length))}`;
      apple7 %= Math.max(5, 3 | injuryQ.length);
   while (!loginsuccessh) {
      loginsuccessh = sheetJ.length >= libimagepipelined;
      break;
   }
       let save_ = true;
       let scoren = String.fromCharCode(100,99,116,120,95,116,95,51,50,0);
      for (let p = 0; p < 2; p++) {
          let tailw = String.fromCharCode(114,95,54,95,98,97,115,101,100,0);
          let dialogz = 2.0;
          let dplusV = String.fromCharCode(103,101,116,112,97,103,101,115,105,122,101,95,112,95,56,51,0);
          let popupR = [String.fromCharCode(108,97,114,112,111,108,121,95,52,95,49,57,0), String.fromCharCode(118,95,53,57,95,111,109,112,108,105,99,97,116,105,111,110,0)];
         scoren = `${scoren.length}`;
         tailw = `${dplusV.length}`;
         dialogz /= Math.max(2, parseFloat(`${3}`));
         dplusV += `${dplusV.length}`;
         popupR.push(2);
      }
         save_ = !save_;
          let guideZ = [401, 121, 426];
         save_ = !save_ && scoren.length <= 75;
         guideZ = [guideZ.length % (Math.max(9, guideZ.length))];
       let formQ = 4;
         formQ |= ((save_ ? 5 : 3) >> (Math.min(scoren.length, 4)));
       let questiconF = false;
      injuryQ += `${((save_ ? 2 : 1) % 2)}`;

    props.onLiveEnd?.();
   while (1 == (sheetJ.length * 4)) {
       let neonJ = 0;
       let latns = String.fromCharCode(117,95,53,52,95,119,105,108,108,0);
      do {
         neonJ >>= Math.min(4, Math.abs(1));
         if (neonJ == 3500471) {
            break;
         }
      } while ((neonJ < 2) && (neonJ == 3500471));
       let orientationk = String.fromCharCode(121,95,56,53,95,97,114,101,115,0);
         latns += `${1 / (Math.max(7, latns.length))}`;
          let greyticki = new Map([[String.fromCharCode(101,95,57,51,95,99,111,110,99,97,116,101,110,97,116,101,0),String.fromCharCode(114,95,56,53,95,112,97,103,101,105,110,0)], [String.fromCharCode(98,95,55,55,95,113,115,118,118,112,112,0),String.fromCharCode(115,116,97,114,116,101,100,95,116,95,54,53,0)]]);
          let g_titleP = false;
          let weibo6 = String.fromCharCode(105,110,102,111,115,95,99,95,54,48,0);
         latns = `${((g_titleP ? 3 : 2) % 3)}`;
         greyticki = new Map([[`${greyticki.size}`, 3]]);
         g_titleP = (weibo6.length * greyticki.size) < 11;
         weibo6 += `${greyticki.size}`;
      for (let k = 0; k < 3; k++) {
          let readn = 3.0;
          let pushG = String.fromCharCode(97,108,103,111,114,95,119,95,52,54,0);
         latns = "2";
         readn *= 2;
         pushG += `${(String.fromCharCode(117,0) == pushG ? pushG.length : parseInt(`${readn}`))}`;
      }
          let albumG = 5.0;
          let with_5w = [970, 867, 486];
         orientationk += `${neonJ}`;
         albumG /= Math.max(parseInt(`${albumG}`), 5);
         with_5w.push(parseInt(`${albumG}`));
      loginsuccessh = injuryQ.length < 51;
      break;
   }
   while (activej != crossp) {
      crossp += `${crossp.length}`;
      break;
   }
      injuryQ = `${2 << (Math.min(5, sheetJ.length))}`;
   if (shirtQ) {
      shirtQ = apple7 >= 30;
   }
       let hookm = String.fromCharCode(114,111,98,105,110,95,98,95,54,49,0);
      do {
          let pagination0 = 0.0;
          let overh = String.fromCharCode(97,95,51,48,95,97,100,106,117,115,116,105,110,103,0);
          let listH = String.fromCharCode(114,101,115,105,115,116,97,110,99,101,95,113,95,57,54,0);
          let subsu = String.fromCharCode(108,105,98,115,104,105,110,101,95,120,95,52,51,0);
          let xadsdkH = String.fromCharCode(115,95,54,54,95,97,108,115,101,0);
         hookm = `${(xadsdkH == String.fromCharCode(105,0) ? xadsdkH.length : subsu.length)}`;
         pagination0 -= parseFloat(`${1 / (Math.max(5, parseInt(`${pagination0}`)))}`);
         overh += `${2 + listH.length}`;
         listH += `${listH.length & parseInt(`${pagination0}`)}`;
         subsu += `${overh.length * listH.length}`;
         if (String.fromCharCode(112,119,99,0) == hookm) {
            break;
         }
      } while ((String.fromCharCode(112,119,99,0) == hookm) && (hookm != hookm));
      while (2 < hookm.length) {
          let injuryI = 2.0;
          let filed3 = String.fromCharCode(100,105,97,103,114,97,109,95,110,95,53,0);
         hookm = `${(String.fromCharCode(53,0) == filed3 ? parseInt(`${injuryI}`) : filed3.length)}`;
         break;
      }
      do {
          let starF = 5.0;
         hookm = "2";
         starF /= Math.max(4, parseFloat(`${parseInt(`${starF}`)}`));
         if (3176221 == hookm.length) {
            break;
         }
      } while ((3176221 == hookm.length) && (hookm != String.fromCharCode(115,0)));
      crossp = `${dycreatorM.length}`;

  };

  const onError = () => {
       let mutedY = String.fromCharCode(101,110,116,105,114,101,108,121,95,115,95,57,51,0);
    let iconbackwhiteW = 1;
    let shirtZ = [256, 806, 394];
    let entryX = [513, 500];
    let giftbuttonv = String.fromCharCode(104,97,108,102,108,116,117,105,110,116,95,119,95,55,51,0);
    let enewsshare4 = 3;
    let floater9 = new Map([[String.fromCharCode(115,95,57,56,95,108,109,108,109,0),false ], [String.fromCharCode(101,95,51,50,95,112,101,114,109,105,115,115,105,111,110,0),false ], [String.fromCharCode(97,108,105,118,101,95,57,95,54,0),false ]]);
    let applicationj = new Map([[String.fromCharCode(101,114,114,115,116,114,95,55,95,49,55,0),4], [String.fromCharCode(101,95,55,50,95,100,102,115,116,0),15], [String.fromCharCode(115,101,99,111,110,100,95,55,95,51,50,0),422]]);
    let libswresampleo = String.fromCharCode(110,95,53,52,95,97,110,105,109,97,116,105,111,110,0);
    let pauseB = true;
    let mbnativeadvanced0 = String.fromCharCode(106,95,49,51,95,116,105,110,116,0);
    let mbbide = String.fromCharCode(99,95,51,95,105,110,118,111,99,97,116,105,111,110,115,0);
    let datas = [String.fromCharCode(97,95,52,95,114,101,108,101,97,115,101,0), String.fromCharCode(108,95,49,51,95,112,97,99,107,101,116,105,122,101,114,0), String.fromCharCode(117,95,54,95,117,110,105,110,105,116,0)];
    let scrollview5 = [19, 794, 919];
      pauseB = 16 > enewsshare4;
   while (3 > (enewsshare4 << (Math.min(3, Math.abs(iconbackwhiteW))))) {
      enewsshare4 /= Math.max(shirtZ.length << (Math.min(4, entryX.length)), 2);
      break;
   }
      applicationj[`${shirtZ.length}`] = 2 / (Math.max(6, entryX.length));
       let m_countW = String.fromCharCode(110,101,116,105,115,114,95,51,95,51,53,0);
       let foundo = 3.0;
          let pointZ = String.fromCharCode(98,101,103,105,110,110,105,110,103,95,112,95,57,53,0);
         foundo *= m_countW.length - parseInt(`${foundo}`);
         pointZ = `${pointZ.length * pointZ.length}`;
          let rewardE = 1;
          let eventM = false;
         foundo /= Math.max(1, rewardE);
         rewardE /= Math.max(((eventM ? 3 : 1) + 3), 5);
       let gemfilek = 1.0;
       let brightnessB = 1.0;
       let delegate_xY = String.fromCharCode(101,118,98,117,102,102,101,114,95,109,95,57,53,0);
       let searchW = String.fromCharCode(117,95,57,51,95,102,108,97,103,115,0);
         brightnessB += 2 ^ parseInt(`${foundo}`);
      pauseB = mbbide.length == 32;
      shirtZ = [enewsshare4 << (Math.min(Math.abs(1), 5))];
       let resendC = [343, 341, 733];
      while ((resendC.length << (Math.min(resendC.length, 1))) < 1 || (resendC.length << (Math.min(Math.abs(1), 1))) < 2) {
         resendC = [3];
         break;
      }
      while (resendC.length >= 3) {
          let traminiQ = 3.0;
          let firebaset = String.fromCharCode(97,117,116,111,95,99,95,51,48,0);
          let sliderU = String.fromCharCode(114,101,115,101,114,118,101,115,105,122,101,95,112,95,55,49,0);
         resendC = [(firebaset == String.fromCharCode(50,0) ? firebaset.length : parseInt(`${traminiQ}`))];
         traminiQ -= sliderU.length >> (Math.min(Math.abs(2), 1));
         break;
      }
         resendC.push(2);
      shirtZ = [shirtZ.length - 3];
      floater9 = new Map([[`${shirtZ.length}`, mutedY.length]]);
      iconbackwhiteW &= enewsshare4 / (Math.max(floater9.size, 10));

    setIsError(true);
   do {
      iconbackwhiteW |= mbnativeadvanced0.length % 3;
      if (iconbackwhiteW == 2018332) {
         break;
      }
   } while ((iconbackwhiteW >= giftbuttonv.length) && (iconbackwhiteW == 2018332));
   if ((enewsshare4 * floater9.size) == 4 && (enewsshare4 * 4) == 2) {
      enewsshare4 += 1;
   }
   for (let f = 0; f < 2; f++) {
      enewsshare4 /= Math.max(mbbide.length, 4);
   }
      shirtZ = [mbnativeadvanced0.length ^ iconbackwhiteW];
   if (5 > (enewsshare4 % 5)) {
      enewsshare4 *= (shirtZ.length & (pauseB ? 4 : 4));
   }
      entryX = [entryX.length];
      mutedY = `${mbnativeadvanced0.length / 1}`;
       let buttonr = new Map([[String.fromCharCode(110,95,49,55,95,105,110,112,108,105,99,105,116,101,108,121,0),973], [String.fromCharCode(101,97,103,101,114,95,121,95,55,51,0),251]]);
       let untickw = 0;
       let stationF = new Map([[String.fromCharCode(103,95,52,48,95,109,101,100,105,97,115,0),162], [String.fromCharCode(115,117,98,104,101,97,100,101,114,95,113,95,56,50,0),835], [String.fromCharCode(110,95,56,53,95,112,114,101,99,0),907]]);
          let room1 = false;
          let mbjscommon_ = new Map([[String.fromCharCode(105,95,55,55,95,114,101,118,105,101,119,0),String.fromCharCode(117,110,101,109,112,116,121,95,115,95,49,0)], [String.fromCharCode(103,111,108,111,109,98,95,106,95,54,48,0),String.fromCharCode(105,95,49,95,115,101,114,118,105,99,101,115,0)], [String.fromCharCode(120,95,49,48,95,104,105,103,104,108,105,103,116,101,100,0),String.fromCharCode(102,95,55,51,95,114,101,99,101,105,118,105,110,103,0)]]);
          let questiconh = new Map([[String.fromCharCode(117,110,115,104,105,102,116,95,101,95,51,0),String.fromCharCode(112,101,117,107,101,114,95,117,95,49,53,0)], [String.fromCharCode(113,115,118,100,101,99,95,57,95,55,57,0),String.fromCharCode(112,101,101,114,115,95,114,95,49,51,0)]]);
         untickw >>= Math.min(Math.abs(stationF.size | 1), 4);
         room1 = questiconh.size <= 89 && 89 <= mbjscommon_.size;
         mbjscommon_ = new Map([[`${mbjscommon_.size}`, 1 / (Math.max(1, questiconh.size))]]);
         untickw <<= Math.min(Math.abs(2 / (Math.max(3, untickw))), 3);
      while (4 <= (buttonr.size - untickw) && (4 - untickw) <= 4) {
         buttonr[`${stationF.size}`] = buttonr.size << (Math.min(4, Math.abs(stationF.size)));
         break;
      }
         untickw >>= Math.min(1, Math.abs(1));
       let klevinW = String.fromCharCode(116,115,101,113,95,100,95,56,57,0);
       let viewsz = String.fromCharCode(110,111,116,104,105,110,103,95,108,95,53,50,0);
         klevinW = `${stationF.size}`;
         viewsz = `${(klevinW == String.fromCharCode(99,0) ? buttonr.size : klevinW.length)}`;
      if ((untickw >> (Math.min(Math.abs(buttonr.size), 5))) < 5 && 5 < (untickw >> (Math.min(Math.abs(buttonr.size), 4)))) {
          let dependencies5 = String.fromCharCode(97,98,115,116,95,103,95,50,51,0);
          let leagueD = String.fromCharCode(115,101,110,115,105,116,105,118,101,95,119,95,49,52,0);
          let libjsinspectory = String.fromCharCode(117,112,108,111,97,100,95,56,95,56,48,0);
         buttonr[`${stationF.size}`] = buttonr.size + 3;
         dependencies5 = `${1 ^ libjsinspectory.length}`;
         leagueD += "3";
         libjsinspectory = "3";
      }
      while ((5 & klevinW.length) >= 3) {
         untickw /= Math.max(1, stationF.size);
         break;
      }
      datas = [1];

    setIsLoading(false);
      entryX.push(mbnativeadvanced0.length);
   while (giftbuttonv.length == mbbide.length) {
       let static_2R = 0.0;
         static_2R /= Math.max(parseInt(`${static_2R}`), 1);
      while (4.22 > (static_2R + static_2R) && 2.7 > (4.22 + static_2R)) {
         static_2R += 2 ^ parseInt(`${static_2R}`);
         break;
      }
          let matchactive4 = 1;
          let foregroundk = 5.0;
          let referrerz = 0;
         static_2R *= parseInt(`${foregroundk}`);
         matchactive4 >>= Math.min(Math.abs(referrerz << (Math.min(Math.abs(3), 2))), 5);
         foregroundk *= referrerz - 3;
      giftbuttonv += "3";
      break;
   }
   for (let j = 0; j < 3; j++) {
      pauseB = libswresampleo == String.fromCharCode(82,0);
   }
   while (mutedY.length > 2 || pauseB) {
       let encrypth = new Map([[String.fromCharCode(119,109,97,100,97,116,97,95,116,95,56,55,0),true ], [String.fromCharCode(98,114,110,103,95,117,95,49,51,0),true ]]);
       let mathm = 1.0;
       let singaporeM = new Map([[String.fromCharCode(116,114,105,109,109,105,110,103,95,99,95,50,53,0),false ], [String.fromCharCode(107,95,56,95,115,112,108,105,116,115,0),false ]]);
       let clubY = true;
          let shirtP = 1.0;
         mathm -= parseInt(`${shirtP}`);
      while ((mathm / (Math.max(6, singaporeM.size))) >= 5.75) {
         singaporeM[`${mathm}`] = encrypth.size;
         break;
      }
      do {
         mathm += ((clubY ? 4 : 1) & 1);
         if (mathm == 3256822.0) {
            break;
         }
      } while ((mathm == 3256822.0) && ((3.45 * mathm) == 2.74 || 5 == (encrypth.size * parseInt(`${mathm}`))));
          let feedbacki = true;
         singaporeM = new Map([[`${singaporeM.size}`, singaporeM.size]]);
         feedbacki = (!feedbacki ? feedbacki : feedbacki);
         encrypth[`${mathm}`] = (parseInt(`${mathm}`) ^ (clubY ? 1 : 5));
      while (encrypth[`${singaporeM.size}`] == null) {
         encrypth = new Map([[`${singaporeM.size}`, singaporeM.size]]);
         break;
      }
       let iconpipexpandE = 4;
         clubY = clubY && mathm < 99.65;
      for (let z = 0; z < 1; z++) {
         iconpipexpandE *= (1 << (Math.min(4, Math.abs((clubY ? 4 : 3)))));
      }
      while ((iconpipexpandE + mathm) > 3.20 || 3 > (parseInt(`${mathm}`) + iconpipexpandE)) {
          let uploadm = String.fromCharCode(97,117,116,104,111,114,105,122,101,95,115,95,49,52,0);
          let modity5 = 3.0;
         iconpipexpandE %= Math.max(singaporeM.size, 2);
         uploadm = "3";
         modity5 -= (String.fromCharCode(95,0) == uploadm ? uploadm.length : parseInt(`${modity5}`));
         break;
      }
      for (let z = 0; z < 2; z++) {
          let defaultprofilepicF = String.fromCharCode(104,117,110,103,95,55,95,55,50,0);
          let turnN = 3.0;
          let whistleorangeh = false;
         iconpipexpandE /= Math.max(defaultprofilepicF.length, 3);
         defaultprofilepicF += `${(parseInt(`${turnN}`) << (Math.min(1, Math.abs((whistleorangeh ? 3 : 3)))))}`;
         turnN += (parseInt(`${turnN}`) & (whistleorangeh ? 5 : 4));
      }
      while (singaporeM.size == 3 && (singaporeM.size * 3) == 4) {
         singaporeM = new Map([[`${mathm}`, ((clubY ? 3 : 1) ^ parseInt(`${mathm}`))]]);
         break;
      }
      pauseB = enewsshare4 > 85 || 85 > datas.length;
      break;
   }
   do {
      datas.push(iconbackwhiteW);
      if (4015240 == datas.length) {
         break;
      }
   } while ((4015240 == datas.length) && (3 > (datas.length >> (Math.min(Math.abs(applicationj.size), 3))) && 2 > (3 >> (Math.min(2, datas.length)))));
   for (let d = 0; d < 1; d++) {
       let project4 = false;
       let circlel = String.fromCharCode(103,95,55,49,95,98,108,111,99,107,113,117,111,116,101,0);
       let commonZ = String.fromCharCode(98,105,103,95,56,95,50,50,0);
       let loadingb = String.fromCharCode(114,95,50,51,95,105,115,110,111,110,122,101,114,111,0);
      while (commonZ != String.fromCharCode(77,0) && 4 <= circlel.length) {
         commonZ = `${(String.fromCharCode(81,0) == commonZ ? commonZ.length : loadingb.length)}`;
         break;
      }
      if (circlel.endsWith(`${commonZ.length}`)) {
         circlel += `${((project4 ? 3 : 4))}`;
      }
      while (circlel.length == 1 && !project4) {
         project4 = loadingb.length > commonZ.length;
         break;
      }
      if (commonZ.length > loadingb.length) {
         loadingb = `${commonZ.length}`;
      }
      while (loadingb.length > 2 || project4) {
         project4 = String.fromCharCode(118,0) == loadingb;
         break;
      }
      if (4 <= commonZ.length && circlel.length <= 4) {
         circlel = "1";
      }
      if (!commonZ.endsWith(`${project4}`)) {
         commonZ = `${3 << (Math.min(2, commonZ.length))}`;
      }
       let signinup8 = true;
       let r_hashB = false;
      if (commonZ.length < 4) {
         commonZ = `${circlel.length}`;
      }
         commonZ += `${((r_hashB ? 3 : 2))}`;
      do {
         project4 = (19 >= (commonZ.length ^ (!r_hashB ? 19 : commonZ.length)));
         if (project4 ? !project4 : project4) {
            break;
         }
      } while ((project4 ? !project4 : project4) && (signinup8));
          let jnewinterstitial3 = 3.0;
          let videojs3 = String.fromCharCode(102,95,49,50,95,119,105,102,105,0);
          let inewsshareW = true;
         signinup8 = loadingb.length > 56;
         jnewinterstitial3 -= 1 << (Math.min(4, Math.abs(parseInt(`${jnewinterstitial3}`))));
         videojs3 += `${2 ^ videojs3.length}`;
         inewsshareW = !videojs3.endsWith(`${jnewinterstitial3}`);
      datas.push(commonZ.length >> (Math.min(1, mutedY.length)));
   }
   while (2 == (giftbuttonv.length >> (Math.min(5, entryX.length))) || (giftbuttonv.length >> (Math.min(3, entryX.length))) == 2) {
      giftbuttonv += `${enewsshare4 % (Math.max(2, 6))}`;
      break;
   }
       let debugv = 4;
       let gmailM = 5.0;
       let promotionn = [918, 812, 489];
      if (gmailM < parseFloat(`${promotionn.length}`)) {
         gmailM *= parseFloat(`${2 ^ debugv}`);
      }
         gmailM -= parseFloat(`${promotionn.length & parseInt(`${gmailM}`)}`);
         debugv >>= Math.min(Math.abs(debugv << (Math.min(2, Math.abs(2)))), 2);
       let m_unlockl = 4.0;
      for (let d = 0; d < 3; d++) {
          let u_countz = String.fromCharCode(120,121,119,104,95,110,95,53,55,0);
         gmailM *= parseFloat(`${promotionn.length * 1}`);
         u_countz += `${u_countz.length}`;
      }
      do {
          let handler9 = 3.0;
          let typingv = String.fromCharCode(98,95,56,55,95,117,109,98,101,114,0);
          let helper8 = String.fromCharCode(116,105,103,103,108,101,95,56,95,51,49,0);
         gmailM *= parseFloat(`${parseInt(`${gmailM}`)}`);
         handler9 /= Math.max(parseFloat(`${typingv.length / (Math.max(helper8.length, 4))}`), 3);
         typingv += `${(String.fromCharCode(75,0) == typingv ? parseInt(`${handler9}`) : typingv.length)}`;
         helper8 = `${(typingv == String.fromCharCode(90,0) ? helper8.length : typingv.length)}`;
         if (1044020.0 == gmailM) {
            break;
         }
      } while ((1044020.0 == gmailM) && ((gmailM / (Math.max(4.68, 8))) < 4.78 && 4 < (parseInt(`${gmailM}`) / (Math.max(4, debugv)))));
      while (!promotionn.includes(debugv)) {
          let privilegeR = 0.0;
          let halfb = String.fromCharCode(116,95,51,49,95,103,101,110,99,102,103,115,0);
          let w_lockN = 5.0;
         promotionn.push(3 / (Math.max(8, debugv)));
         privilegeR *= parseFloat(`${3 + halfb.length}`);
         halfb += `${parseInt(`${privilegeR}`)}`;
         w_lockN -= 3;
         break;
      }
      while ((gmailM * 2.40) < 4.22 || (gmailM * parseFloat(`${promotionn.length}`)) < 2.40) {
         promotionn.push(1);
         break;
      }
         m_unlockl -= parseFloat(`${debugv}`);
      pauseB = 96 <= giftbuttonv.length && 96 <= entryX.length;

    props.onLiveEnd?.();
      giftbuttonv = `${1 - libswresampleo.length}`;
       let defaultplayerimgA = String.fromCharCode(99,95,51,49,95,100,111,109,105,110,97,110,116,0);
       let constantsq = String.fromCharCode(114,101,111,114,100,101,114,97,98,108,101,95,106,95,50,55,0);
       let pathF = [String.fromCharCode(101,110,100,105,97,110,110,101,115,115,95,108,95,52,0), String.fromCharCode(100,95,52,50,95,100,105,115,116,114,105,98,117,116,101,100,0), String.fromCharCode(112,111,105,110,116,101,114,115,95,121,95,49,48,0)];
         pathF.push(pathF.length);
      if (constantsq.endsWith(`${defaultplayerimgA.length}`)) {
         constantsq += `${constantsq.length / 2}`;
      }
      if (!constantsq.startsWith(`${pathF.length}`)) {
         constantsq = `${3 | pathF.length}`;
      }
      if (constantsq.endsWith(`${pathF.length}`)) {
         constantsq += `${defaultplayerimgA.length}`;
      }
         constantsq = `${constantsq.length % (Math.max(1, 1))}`;
          let crossZ = false;
         constantsq = `${defaultplayerimgA.length & 2}`;
         pathF = [(String.fromCharCode(74,0) == constantsq ? pathF.length : constantsq.length)];
          let mergers = 1.0;
          let megaphone_ = String.fromCharCode(99,111,108,114,95,120,95,54,50,0);
         pathF = [constantsq.length % (Math.max(1, defaultplayerimgA.length))];
         mergers -= parseFloat(`${parseInt(`${mergers}`) - megaphone_.length}`);
         megaphone_ = `${parseInt(`${mergers}`)}`;
          let arrowrightk = String.fromCharCode(100,111,117,98,108,101,95,97,95,49,53,0);
          let helper0 = String.fromCharCode(115,117,98,115,101,113,117,101,110,99,101,115,95,111,95,53,51,0);
         constantsq = `${arrowrightk.length | 3}`;
         arrowrightk = `${(String.fromCharCode(106,0) == helper0 ? helper0.length : helper0.length)}`;
      giftbuttonv += `${floater9.size / 1}`;
       let gifgoalb = 0.0;
       let minivodl = [315, 723];
       let disconnectedlogom = String.fromCharCode(115,119,105,112,101,100,95,56,95,51,57,0);
      for (let a = 0; a < 1; a++) {
          let submity = [String.fromCharCode(97,114,114,97,121,115,95,102,95,56,56,0), String.fromCharCode(108,111,99,97,108,105,122,97,98,108,101,95,52,95,52,54,0), String.fromCharCode(106,117,115,116,105,102,105,99,97,116,105,111,110,95,99,95,56,53,0)];
          let detailsD = String.fromCharCode(99,111,109,109,105,116,95,53,95,52,49,0);
          let typesV = [String.fromCharCode(109,115,114,108,101,100,101,99,95,121,95,51,54,0), String.fromCharCode(103,95,56,57,95,97,118,103,120,0), String.fromCharCode(105,110,100,105,99,97,116,111,114,115,95,121,95,56,0)];
         minivodl.push(parseInt(`${gifgoalb}`));
         submity.push((String.fromCharCode(49,0) == detailsD ? submity.length : detailsD.length));
         typesV = [2];
      }
         gifgoalb += parseFloat(`${parseInt(`${gifgoalb}`) * 1}`);
         gifgoalb += parseFloat(`${1}`);
         minivodl = [parseInt(`${gifgoalb}`)];
          let gemfileb = String.fromCharCode(115,95,52,49,95,118,105,97,98,108,101,0);
          let transfery = String.fromCharCode(122,95,50,56,95,102,111,114,109,97,116,115,0);
         minivodl = [minivodl.length];
         gemfileb += `${transfery.length}`;
         transfery = `${1 ^ transfery.length}`;
       let jingdongC = 5.0;
       let handler2 = 5.0;
         handler2 -= parseInt(`${gifgoalb}`);
      for (let n = 0; n < 3; n++) {
         handler2 /= Math.max(minivodl.length | 2, 5);
      }
      for (let k = 0; k < 2; k++) {
          let carouselw = String.fromCharCode(106,97,99,111,98,105,95,57,95,54,50,0);
          let thumbnailh = new Map([[String.fromCharCode(117,110,101,100,105,116,97,98,108,101,95,51,95,56,57,0),293], [String.fromCharCode(119,95,49,95,111,117,116,115,105,100,101,0),800], [String.fromCharCode(99,114,111,115,115,102,97,100,105,110,103,95,111,95,55,52,0),52]]);
         jingdongC -= (disconnectedlogom == String.fromCharCode(110,0) ? parseInt(`${handler2}`) : disconnectedlogom.length);
         carouselw += `${(carouselw == String.fromCharCode(78,0) ? carouselw.length : thumbnailh.size)}`;
         thumbnailh[carouselw] = carouselw.length;
      }
      pauseB = (applicationj.size - disconnectedlogom.length) > 55;
      mutedY += `${mutedY.length % 1}`;
   while (shirtZ.length > entryX.length) {
       let referrert = 5.0;
       let time_bxO = 2;
       let chinan = true;
       let scheduleO = new Map([[String.fromCharCode(103,114,97,99,101,95,100,95,55,54,0),String.fromCharCode(110,95,52,57,95,112,97,114,0)], [String.fromCharCode(117,95,52,54,95,110,111,114,109,97,108,105,122,101,114,0),String.fromCharCode(112,114,111,114,101,115,100,115,112,95,99,95,53,49,0)]]);
       let flipperR = 5.0;
      while (1.2 < (referrert - 2.19)) {
         referrert -= (parseFloat(`${(chinan ? 2 : 1) - parseInt(`${referrert}`)}`));
         break;
      }
      if (chinan && (2 + time_bxO) > 5) {
          let club6 = false;
          let feedbackw = String.fromCharCode(113,95,55,53,95,101,110,104,97,110,99,101,114,0);
          let navigation0 = new Map([[String.fromCharCode(118,97,114,105,97,98,108,101,115,95,48,95,53,50,0),225], [String.fromCharCode(98,95,51,51,95,99,104,97,114,116,0),373], [String.fromCharCode(104,95,53,55,95,115,105,109,112,108,101,115,105,103,110,97,108,0),800]]);
          let chinaH = String.fromCharCode(112,117,110,99,116,117,97,116,105,111,110,95,50,95,51,57,0);
          let pushd = 0.0;
         time_bxO -= 1;
         club6 = feedbackw.length > 57 || !club6;
         feedbackw += `${navigation0.size}`;
         navigation0 = new Map([[`${pushd}`, 1]]);
         chinaH = "1";
         pushd += (3 + (club6 ? 4 : 5));
      }
          let shielddonej = String.fromCharCode(111,95,50,52,95,118,100,114,97,119,97,98,108,101,0);
          let splashF = new Map([[String.fromCharCode(108,95,54,95,100,105,115,99,111,114,100,0),409], [String.fromCharCode(119,95,55,50,95,109,97,107,101,114,112,109,0),952]]);
          let rewardr = String.fromCharCode(100,101,112,115,95,51,95,57,0);
         chinan = splashF.size == 36 || String.fromCharCode(97,0) == shielddonej;
         shielddonej += `${rewardr.length}`;
         splashF[rewardr] = rewardr.length;
         flipperR *= parseFloat(`${1 & parseInt(`${referrert}`)}`);
          let manifest3 = new Map([[String.fromCharCode(108,105,115,116,115,95,57,95,53,57,0),569], [String.fromCharCode(99,95,50,57,95,99,111,109,112,97,116,0),837]]);
          let config9 = 1;
         scheduleO = new Map([[`${manifest3.size}`, parseInt(`${flipperR}`) % 1]]);
         manifest3 = new Map([[`${config9}`, config9]]);
      if ((flipperR * referrert) > 1.60) {
         referrert /= Math.max(parseFloat(`${parseInt(`${flipperR}`)}`), 5);
      }
         chinan = (time_bxO % (Math.max(scheduleO.size, 7))) == 41;
          let acceptedf = 0.0;
          let gpayp = true;
          let style4 = 4.0;
         time_bxO *= 3;
         acceptedf += parseInt(`${style4}`) * 1;
         gpayp = !gpayp;
         style4 *= parseFloat(`${3 / (Math.max(9, parseInt(`${style4}`)))}`);
      for (let m = 0; m < 3; m++) {
          let moviesD = [953, 767, 776];
          let thailand6 = String.fromCharCode(102,114,97,109,101,112,97,99,107,95,55,95,54,0);
          let entryM = true;
         chinan = 1 == scheduleO.size;
         moviesD = [moviesD.length / 2];
         thailand6 += "3";
         entryM = moviesD.length >= thailand6.length;
      }
      for (let l = 0; l < 2; l++) {
          let reactnativejs0 = 3;
         scheduleO[`${chinan}`] = ((chinan ? 2 : 3) / (Math.max(1, parseInt(`${flipperR}`))));
         reactnativejs0 %= Math.max(1, 3 >> (Math.min(3, Math.abs(reactnativejs0))));
      }
         referrert += (parseFloat(`${(chinan ? 5 : 2) % (Math.max(2, 2))}`));
      if ((3.70 + flipperR) > 3.54 || 3.70 > flipperR) {
         flipperR -= parseFloat(`${2 * parseInt(`${referrert}`)}`);
      }
          let backgroundT = 1.0;
         time_bxO ^= scheduleO.size | 3;
         backgroundT /= Math.max(2, parseFloat(`${parseInt(`${backgroundT}`)}`));
       let membery = String.fromCharCode(101,120,116,114,97,115,95,111,95,53,57,0);
       let predictionwinu = String.fromCharCode(116,95,55,50,95,115,104,97,114,112,101,110,0);
         time_bxO <<= Math.min(Math.abs(2 - parseInt(`${referrert}`)), 5);
      entryX.push(shirtZ.length % 3);
      break;
   }
      libswresampleo += `${libswresampleo.length}`;
      mbnativeadvanced0 += `${3 << (Math.min(2, Math.abs(applicationj.size)))}`;
   if ((iconbackwhiteW - 1) <= 5 || (entryX.length - iconbackwhiteW) <= 1) {
      entryX = [giftbuttonv.length ^ mutedY.length];
   }

  };

  const onFullscreenPlayerDidDismiss = () => {
       let scoreT = String.fromCharCode(117,95,57,55,95,114,101,99,101,105,118,101,114,0);
    let imagemanageri = false;
    let largebrightnessC = String.fromCharCode(105,95,50,95,116,111,100,97,121,0);
    let filedN = String.fromCharCode(119,95,55,53,95,97,114,99,104,105,116,101,99,116,117,114,101,0);
    let disconnectedlogoC = 4;
    let basketballM = 3.0;
    let libavutilo = String.fromCharCode(105,110,118,111,99,97,116,105,111,110,95,119,95,55,51,0);
       let yellowanimationlive2 = [609, 645, 739];
      do {
         yellowanimationlive2 = [yellowanimationlive2.length];
         if (831195 == yellowanimationlive2.length) {
            break;
         }
      } while ((831195 == yellowanimationlive2.length) && (1 > yellowanimationlive2.length));
         yellowanimationlive2 = [yellowanimationlive2.length];
      for (let q = 0; q < 1; q++) {
          let stringX = true;
         yellowanimationlive2.push(((stringX ? 3 : 4) << (Math.min(yellowanimationlive2.length, 4))));
      }
      basketballM += parseFloat(`${3}`);
      basketballM -= parseFloat(`${3 + largebrightnessC.length}`);
      largebrightnessC = `${disconnectedlogoC * parseInt(`${basketballM}`)}`;
      basketballM *= (parseFloat(`${parseInt(`${basketballM}`) + (imagemanageri ? 3 : 3)}`));
      basketballM -= parseFloat(`${3 % (Math.max(5, largebrightnessC.length))}`);
      scoreT = `${scoreT.length}`;
      scoreT += `${((imagemanageri ? 5 : 1))}`;
   for (let r = 0; r < 2; r++) {
       let formL = 5;
       let championL = 2.0;
      for (let s = 0; s < 1; s++) {
          let codegen2 = true;
          let shielddone8 = String.fromCharCode(110,95,52,48,95,97,110,99,105,108,108,97,114,121,0);
          let screenn = 1.0;
          let nativeexW = [132, 432, 439];
          let smallx = 5.0;
         championL -= (parseInt(`${championL}`) + (codegen2 ? 2 : 3));
         codegen2 = (shielddone8.length >> (Math.min(2, nativeexW.length))) > 17;
         shielddone8 += "1";
         screenn *= parseInt(`${smallx}`);
         nativeexW = [nativeexW.length | 1];
      }
       let hearth = String.fromCharCode(120,95,51,56,95,97,112,112,101,110,100,0);
       let linez = String.fromCharCode(108,95,57,48,95,115,101,103,109,101,110,116,117,114,108,110,111,100,101,0);
      do {
         championL += parseInt(`${championL}`) / 1;
         if (championL == 3836380.0) {
            break;
         }
      } while ((1 >= (parseInt(`${championL}`) - 1) || (parseInt(`${championL}`) - linez.length) >= 1) && (championL == 3836380.0));
      if (hearth.endsWith(`${championL}`)) {
         championL += 2;
      }
          let storeo = 1.0;
         hearth += `${parseInt(`${storeo}`) >> (Math.min(Math.abs(1), 2))}`;
         formL &= hearth.length >> (Math.min(linez.length, 2));
      libavutilo = `${parseInt(`${championL}`) ^ disconnectedlogoC}`;
   }
   for (let j = 0; j < 3; j++) {
      imagemanageri = libavutilo.length == 55;
   }
       let mini0 = new Map([[String.fromCharCode(99,111,110,116,114,97,99,116,95,100,95,49,57,0),true ], [String.fromCharCode(118,95,57,54,95,100,101,97,100,108,111,99,107,101,100,0),false ], [String.fromCharCode(101,120,101,99,117,116,101,100,95,102,95,56,52,0),false ]]);
       let libjsi2 = 4.0;
      if (Array.from(mini0.values()).includes(libjsi2)) {
         mini0 = new Map([[`${mini0.size}`, mini0.size >> (Math.min(Math.abs(2), 5))]]);
      }
         libjsi2 += parseFloat(`${mini0.size >> (Math.min(1, Math.abs(parseInt(`${libjsi2}`))))}`);
      if (5.12 == (2.75 - libjsi2) || 4 == (mini0.size - parseInt(`${libjsi2}`))) {
          let bufferW = false;
          let stations7 = false;
          let libfollyu = 0.0;
          let fastforwardD = String.fromCharCode(119,101,97,118,101,95,116,95,55,53,0);
          let specD = 1.0;
         libjsi2 += parseFloat(`${parseInt(`${libfollyu}`) - 3}`);
         bufferW = !bufferW;
         stations7 = specD <= 94.87;
         libfollyu += (parseFloat(`${2 & (stations7 ? 1 : 3)}`));
         fastforwardD = `${1 | parseInt(`${specD}`)}`;
      }
      do {
         libjsi2 /= Math.max(2, parseFloat(`${mini0.size + 2}`));
         if (libjsi2 == 3269788.0) {
            break;
         }
      } while (((3 - mini0.size) <= 1 && 2 <= (mini0.size % (Math.max(3, 2)))) && (libjsi2 == 3269788.0));
          let gmailw = String.fromCharCode(106,95,50,53,95,118,111,114,98,105,115,100,115,112,0);
          let mbridgek = String.fromCharCode(106,95,51,52,95,118,109,100,118,105,100,101,111,0);
         libjsi2 -= parseFloat(`${3}`);
         gmailw += `${1 + gmailw.length}`;
         mbridgek += `${gmailw.length}`;
      for (let p = 0; p < 2; p++) {
         mini0 = new Map([[`${mini0.size}`, 2]]);
      }
      disconnectedlogoC &= (String.fromCharCode(84,0) == largebrightnessC ? scoreT.length : largebrightnessC.length);
   for (let j = 0; j < 2; j++) {
       let nativeS = 3;
       let sendc = false;
       let emptyv = String.fromCharCode(98,95,55,57,95,114,117,98,121,0);
         sendc = sendc || emptyv.length < 10;
      while (3 < (nativeS & 3) || nativeS < 3) {
          let invite9 = [238, 647, 169];
         sendc = emptyv == String.fromCharCode(81,0);
         invite9.push(3 & invite9.length);
         break;
      }
         sendc = 4 >= nativeS;
          let expandR = String.fromCharCode(113,95,52,56,95,116,102,114,102,0);
          let viewerW = new Map([[String.fromCharCode(115,101,101,107,105,110,103,95,102,95,57,54,0),String.fromCharCode(99,112,117,117,115,101,100,95,57,95,51,57,0)], [String.fromCharCode(99,108,105,112,112,105,110,103,95,122,95,56,51,0),String.fromCharCode(104,97,108,102,95,103,95,57,51,0)]]);
         sendc = emptyv.length > 39 || String.fromCharCode(103,0) == expandR;
         expandR = `${viewerW.size}`;
         viewerW[`${viewerW.size}`] = viewerW.size + viewerW.size;
       let liveendmodallogo_ = 5.0;
      while (!sendc) {
         sendc = sendc || emptyv.length <= 79;
         break;
      }
         sendc = !sendc;
         liveendmodallogo_ *= parseFloat(`${parseInt(`${liveendmodallogo_}`)}`);
      if ((parseInt(`${liveendmodallogo_}`) / (Math.max(5, emptyv.length))) > 3) {
          let dragB = new Map([[String.fromCharCode(103,95,57,51,95,112,117,98,108,105,115,104,0),237], [String.fromCharCode(101,95,55,49,95,119,105,114,101,0),430]]);
          let infoI = false;
          let m_lock7 = String.fromCharCode(114,116,109,112,112,107,116,95,99,95,53,51,0);
         liveendmodallogo_ -= (parseFloat(`${nativeS + (sendc ? 2 : 5)}`));
         dragB[m_lock7] = ((infoI ? 3 : 3));
         infoI = 41 > m_lock7.length;
      }
      scoreT = `${(libavutilo == String.fromCharCode(79,0) ? scoreT.length : libavutilo.length)}`;
   }

    dispatch(togglePlayPaused());
       let awayC = true;
          let windT = String.fromCharCode(107,116,111,112,95,106,95,52,0);
         awayC = windT.length == 37;
         awayC = (awayC ? !awayC : !awayC);
      do {
         awayC = !awayC;
         if (awayC ? !awayC : awayC) {
            break;
         }
      } while ((awayC ? !awayC : awayC) && (awayC));
      filedN = `${scoreT.length}`;
       let tempV = 2.0;
      do {
         tempV *= parseFloat(`${parseInt(`${tempV}`) | 2}`);
         if (tempV == 1912485.0) {
            break;
         }
      } while ((4.17 >= (tempV / 2)) && (tempV == 1912485.0));
       let libturbomodulejsijnia = String.fromCharCode(113,95,50,95,105,110,100,105,99,97,116,111,114,0);
         tempV *= parseFloat(`${libturbomodulejsijnia.length + 3}`);
      filedN += `${parseInt(`${basketballM}`) | disconnectedlogoC}`;
      largebrightnessC += `${(largebrightnessC == String.fromCharCode(68,0) ? (imagemanageri ? 4 : 3) : largebrightnessC.length)}`;
       let gnews8 = true;
       let nativeexz = false;
      for (let o = 0; o < 1; o++) {
         gnews8 = nativeexz;
      }
      while (!gnews8 && nativeexz) {
         gnews8 = !nativeexz || gnews8;
         break;
      }
          let hongkongO = [650, 900, 697];
          let loginz = String.fromCharCode(99,95,56,49,95,99,117,115,116,111,109,105,122,101,0);
          let libturbomodulejsijniI = 4.0;
         gnews8 = hongkongO.length >= 43;
         hongkongO.push(3 & loginz.length);
         loginz = `${parseInt(`${libturbomodulejsijniI}`) & loginz.length}`;
         libturbomodulejsijniI *= parseFloat(`${1 * parseInt(`${libturbomodulejsijniI}`)}`);
          let sortp = String.fromCharCode(116,95,52,52,95,110,97,110,111,98,101,110,99,104,109,97,114,107,0);
          let mbnativeadvancedU = 5.0;
          let libswscaleR = 5;
         nativeexz = libswscaleR < 33;
         sortp = `${parseInt(`${mbnativeadvancedU}`) & 3}`;
         mbnativeadvancedU *= parseFloat(`${sortp.length}`);
         libswscaleR %= Math.max(1, (String.fromCharCode(74,0) == sortp ? parseInt(`${mbnativeadvancedU}`) : sortp.length));
         gnews8 = nativeexz || !gnews8;
          let other3 = 3.0;
          let sina4 = String.fromCharCode(115,95,53,56,95,105,110,116,101,114,102,97,99,101,0);
          let libavfilterz = 0.0;
         gnews8 = (libavfilterz * other3) <= 4.49;
         other3 *= parseFloat(`${3 >> (Math.min(5, sina4.length))}`);
         sina4 = `${2 % (Math.max(2, sina4.length))}`;
      imagemanageri = 54 <= libavutilo.length;
   do {
       let acceptedI = new Map([[String.fromCharCode(116,114,117,110,99,112,97,115,115,101,115,95,105,95,57,57,0),439], [String.fromCharCode(115,95,49,48,48,95,105,110,118,116,114,97,110,115,0),469]]);
       let runtimeschedulerS = String.fromCharCode(115,101,103,116,114,101,101,95,104,95,49,48,48,0);
       let libreactnativeblobp = 1;
       let castingd = 1.0;
         acceptedI = new Map([[`${castingd}`, 2 - parseInt(`${castingd}`)]]);
         castingd /= Math.max(5, parseInt(`${castingd}`) | libreactnativeblobp);
         acceptedI = new Map([[`${libreactnativeblobp}`, 1]]);
         castingd *= 1 ^ acceptedI.size;
          let libturbomodulejsijniY = new Map([[String.fromCharCode(105,109,112,108,95,109,95,57,56,0),155], [String.fromCharCode(111,112,112,111,115,105,116,101,95,49,95,50,53,0),688], [String.fromCharCode(99,95,53,50,95,105,110,112,117,116,115,0),917]]);
          let klevinL = 0.0;
         runtimeschedulerS = `${libturbomodulejsijniY.size}`;
         libturbomodulejsijniY = new Map([[`${klevinL}`, parseInt(`${klevinL}`) / 1]]);
      for (let g = 0; g < 3; g++) {
         acceptedI[`${libreactnativeblobp}`] = acceptedI.size;
      }
      if (parseInt(`${castingd}`) >= runtimeschedulerS.length) {
          let roomZ = 3.0;
         runtimeschedulerS += `${parseInt(`${castingd}`) % 3}`;
         roomZ /= Math.max(5, parseFloat(`${parseInt(`${roomZ}`) ^ parseInt(`${roomZ}`)}`));
      }
       let crown7 = String.fromCharCode(99,108,101,97,114,95,120,95,55,54,0);
      for (let h = 0; h < 3; h++) {
          let whistleorangeM = String.fromCharCode(100,105,109,105,115,115,95,122,95,56,55,0);
          let friendsJ = 4;
          let giflivestreaminga = new Map([[String.fromCharCode(99,95,50,51,95,114,108,111,116,116,105,101,0),String.fromCharCode(99,97,112,116,117,114,105,110,103,95,97,95,54,56,0)], [String.fromCharCode(116,119,111,95,111,95,56,48,0),String.fromCharCode(102,117,115,101,95,103,95,57,50,0)], [String.fromCharCode(113,95,50,48,95,99,111,110,118,101,114,116,101,100,0),String.fromCharCode(110,95,51,55,95,99,100,99,105,0)]]);
          let yingc = [20, 829];
          let iconsharev = [227, 689, 313];
         castingd *= libreactnativeblobp;
         whistleorangeM = `${friendsJ}`;
         friendsJ &= yingc.length << (Math.min(Math.abs(2), 5));
         giflivestreaminga = new Map([[`${friendsJ}`, whistleorangeM.length]]);
         yingc.push(friendsJ);
         iconsharev = [giflivestreaminga.size - 2];
      }
       let downr = true;
       let popuph = true;
          let desc0 = true;
         acceptedI[`${desc0}`] = 1 + acceptedI.size;
      while ((acceptedI.size - 5) > 3) {
         acceptedI[runtimeschedulerS] = ((popuph ? 4 : 2));
         break;
      }
      largebrightnessC = "2";
      if (largebrightnessC.length == 3023428) {
         break;
      }
   } while ((imagemanageri) && (largebrightnessC.length == 3023428));
      libavutilo = `${filedN.length}`;
      filedN = `${scoreT.length}`;
   if (imagemanageri) {
       let eighteen7 = String.fromCharCode(98,95,57,51,95,99,111,108,108,101,99,116,105,98,108,101,0);
         eighteen7 += `${eighteen7.length}`;
       let connectionY = String.fromCharCode(114,101,99,101,105,118,105,110,103,95,100,95,54,0);
         connectionY = `${eighteen7.length}`;
      filedN = `${filedN.length}`;
   }
   for (let e = 0; e < 3; e++) {
      imagemanageri = (32 == (largebrightnessC.length % (Math.max(9, (!imagemanageri ? 32 : largebrightnessC.length)))));
   }
   if (libavutilo == String.fromCharCode(109,0) && filedN.length <= 5) {
       let zhengpians = new Map([[String.fromCharCode(100,105,115,99,97,114,100,95,105,95,55,50,0),658], [String.fromCharCode(115,111,109,101,95,114,95,54,55,0),473], [String.fromCharCode(112,114,101,100,101,102,105,110,101,100,95,51,95,53,50,0),233]]);
      while (3 <= (zhengpians.size & 1)) {
         zhengpians[`${zhengpians.size}`] = 3 >> (Math.min(4, Math.abs(zhengpians.size)));
         break;
      }
      while (5 <= (zhengpians.size << (Math.min(Math.abs(5), 4))) || 4 <= (5 << (Math.min(2, Math.abs(zhengpians.size))))) {
          let playE = 0;
         zhengpians = new Map([[`${zhengpians.size}`, 3 * playE]]);
         break;
      }
          let libavfilterb = String.fromCharCode(116,114,97,110,95,119,95,55,0);
          let profileY = [463, 807];
          let canvasU = true;
         zhengpians[`${canvasU}`] = 2 >> (Math.min(4, profileY.length));
         libavfilterb += `${libavfilterb.length << (Math.min(libavfilterb.length, 4))}`;
         profileY = [3];
      libavutilo = `${filedN.length % 1}`;
   }
      disconnectedlogoC |= 1;

  };

  const onRetry = () => {
       let gmailK = 1;
    let redgoalY = String.fromCharCode(113,95,50,55,95,109,105,108,105,111,110,115,0);
    let apps6 = String.fromCharCode(112,105,118,111,116,95,48,95,52,57,0);
    let scrollviewE = false;
    let weibo8 = 1.0;
    let frame_ap = String.fromCharCode(99,114,117,110,95,101,95,54,52,0);
    let phoneJ = new Map([[String.fromCharCode(103,108,111,98,97,108,116,101,109,95,115,95,51,48,0),795], [String.fromCharCode(102,117,108,102,105,108,108,95,121,95,57,50,0),485]]);
    let layoutp = [591, 960];
    let questo = [566, 460];
    let dragd = String.fromCharCode(114,97,100,102,103,95,117,95,49,55,0);
    let flyerd = String.fromCharCode(105,95,54,56,95,99,108,97,115,115,101,115,0);
    let whistleu = 3.0;
    let zhengpianV = String.fromCharCode(120,95,57,55,95,117,110,97,108,105,103,110,101,100,0);
    let iconnointernetJ = false;
    let basketballY = String.fromCharCode(115,112,97,99,101,95,49,95,57,55,0);
   do {
      apps6 = `${(String.fromCharCode(90,0) == redgoalY ? redgoalY.length : (scrollviewE ? 3 : 5))}`;
      if (String.fromCharCode(101,115,57,113,106,103,103,117,50,0) == apps6) {
         break;
      }
   } while ((2 == apps6.length) && (String.fromCharCode(101,115,57,113,106,103,103,117,50,0) == apps6));
      weibo8 += (parseFloat(`${String.fromCharCode(53,0) == redgoalY ? questo.length : redgoalY.length}`));
   if (3 >= (layoutp.length ^ questo.length)) {
      questo.push(3);
   }
      weibo8 *= parseFloat(`${questo.length ^ 2}`);
      phoneJ = new Map([[`${questo.length}`, redgoalY.length * 1]]);
      weibo8 /= Math.max(5, parseFloat(`${apps6.length}`));
       let prediction1 = 3.0;
       let qnewsc = 5;
       let encryptt = 3.0;
       let profileframeJ = 0.0;
      while (profileframeJ < prediction1) {
         prediction1 *= qnewsc | 1;
         break;
      }
       let match_ = String.fromCharCode(104,95,57,50,95,115,101,97,116,0);
       let bannerW = String.fromCharCode(113,95,57,49,95,119,101,105,103,104,116,112,0);
      if (1 > (match_.length ^ 5)) {
          let watch2 = new Map([[String.fromCharCode(112,114,101,104,97,115,104,95,57,95,50,49,0),60], [String.fromCharCode(99,104,97,114,116,115,95,106,95,56,55,0),419], [String.fromCharCode(115,95,55,51,95,100,105,109,115,0),643]]);
          let filter_ = false;
         profileframeJ *= parseInt(`${encryptt}`) >> (Math.min(Math.abs(3), 1));
         watch2[`${filter_}`] = 2;
      }
      for (let g = 0; g < 1; g++) {
          let defaultroombgc = String.fromCharCode(106,95,52,51,95,119,104,101,110,0);
          let iconstarp = 2;
         qnewsc %= Math.max(1, defaultroombgc.length % 1);
         defaultroombgc = `${iconstarp / 1}`;
         iconstarp -= 1;
      }
      apps6 = `${parseInt(`${weibo8}`) / 3}`;
   while ((weibo8 + 3.2) <= 4.53) {
      questo = [(apps6 == String.fromCharCode(48,0) ? apps6.length : phoneJ.size)];
      break;
   }
      layoutp = [2];

    playerRef.current?.seek?.(0);
      layoutp = [3 * phoneJ.size];
      dragd = `${1 >> (Math.min(Math.abs(gmailK), 2))}`;
   do {
       let gestures1 = true;
       let pingU = String.fromCharCode(108,95,50,53,95,101,120,104,97,117,115,116,105,118,101,0);
       let package_w51 = String.fromCharCode(105,95,53,53,95,115,116,100,105,110,116,0);
       let referrer3 = String.fromCharCode(114,95,53,55,95,115,97,116,105,115,102,105,101,100,0);
          let graphicsz = new Map([[String.fromCharCode(103,95,54,55,95,100,101,99,111,100,101,114,116,104,114,101,97,100,105,110,103,0),String.fromCharCode(115,107,101,121,95,116,95,50,51,0)], [String.fromCharCode(112,95,49,51,95,115,105,112,104,97,115,104,0),String.fromCharCode(121,95,52,48,0)]]);
          let field9 = true;
         pingU += `${package_w51.length / (Math.max(referrer3.length, 5))}`;
         graphicsz[`${field9}`] = graphicsz.size;
         gestures1 = !gestures1;
      if (!gestures1) {
         referrer3 += `${((gestures1 ? 2 : 5) - package_w51.length)}`;
      }
         gestures1 = package_w51.length > 95;
      do {
          let bootsplashL = [String.fromCharCode(102,116,118,112,108,97,115,116,110,111,100,101,95,55,95,51,52,0), String.fromCharCode(115,99,97,108,97,114,115,95,111,95,50,51,0), String.fromCharCode(104,101,97,118,121,95,107,95,51,53,0)];
          let activitym = String.fromCharCode(97,95,57,51,95,116,97,103,97,118,114,0);
         gestures1 = String.fromCharCode(70,0) == referrer3;
         bootsplashL = [(String.fromCharCode(84,0) == activitym ? bootsplashL.length : activitym.length)];
         if (gestures1 ? !gestures1 : gestures1) {
            break;
         }
      } while ((gestures1) && (gestures1 ? !gestures1 : gestures1));
      if (!referrer3.startsWith(`${gestures1}`)) {
          let membershipU = [439, 544, 831];
          let eighteenT = 1.0;
          let directP = String.fromCharCode(121,95,54,95,111,112,101,110,101,114,0);
          let videojsv = new Map([[String.fromCharCode(111,118,101,114,95,113,95,52,48,0),703], [String.fromCharCode(104,95,57,56,95,112,114,101,100,101,102,105,110,101,100,0),960]]);
         referrer3 += "1";
         membershipU.push(membershipU.length + 3);
         eighteenT /= Math.max(parseFloat(`${3 - directP.length}`), 4);
         directP = "1";
         videojsv = new Map([[directP, directP.length % (Math.max(2, 10))]]);
      }
       let infol = 2;
      if ((1 >> (Math.min(1, package_w51.length))) == 1 || (package_w51.length >> (Math.min(Math.abs(1), 3))) == 1) {
         package_w51 = `${referrer3.length / (Math.max(package_w51.length, 7))}`;
      }
      if (!pingU.endsWith(`${infol}`)) {
         infol >>= Math.min(package_w51.length, 1);
      }
          let settingB = String.fromCharCode(99,95,57,49,95,97,109,112,108,105,116,117,100,101,0);
          let ewarded6 = 0;
         infol += settingB.length & 2;
         settingB = `${2 / (Math.max(9, ewarded6))}`;
         ewarded6 += 2;
      do {
         infol -= (String.fromCharCode(82,0) == pingU ? pingU.length : referrer3.length);
         if (infol == 3779163) {
            break;
         }
      } while ((infol == 3779163) && (5 > package_w51.length));
       let graphF = String.fromCharCode(115,117,99,104,95,57,95,55,49,0);
      dragd += `${referrer3.length}`;
      if (dragd.length == 4261085) {
         break;
      }
   } while ((dragd.length == 4261085) && (1 >= layoutp.length));
      apps6 = `${layoutp.length << (Math.min(dragd.length, 5))}`;
   for (let d = 0; d < 2; d++) {
      questo.push(3);
   }
   if (apps6.length == 5) {
      apps6 = `${(2 - (scrollviewE ? 3 : 4))}`;
   }
   if ((weibo8 * 5.0) > 2.87) {
      weibo8 -= (parseFloat(`${String.fromCharCode(120,0) == frame_ap ? questo.length : frame_ap.length}`));
   }
       let toponW = String.fromCharCode(99,111,110,116,105,103,117,111,117,115,95,116,95,55,48,0);
       let homeO = 3;
       let imagemanagerX = String.fromCharCode(102,97,105,108,105,110,103,95,113,95,57,48,0);
         toponW = `${imagemanagerX.length + homeO}`;
         homeO %= Math.max(2 ^ toponW.length, 3);
         toponW += `${(imagemanagerX == String.fromCharCode(90,0) ? imagemanagerX.length : homeO)}`;
      do {
         toponW += `${homeO}`;
         if (String.fromCharCode(50,112,120,122,50,109,0) == toponW) {
            break;
         }
      } while ((String.fromCharCode(50,112,120,122,50,109,0) == toponW) && ((toponW.length / (Math.max(6, homeO))) >= 1 && (1 / (Math.max(2, toponW.length))) >= 5));
      if (3 <= (4 * homeO)) {
         homeO ^= toponW.length >> (Math.min(5, Math.abs(homeO)));
      }
         toponW = "2";
          let profileN = new Map([[String.fromCharCode(108,111,110,103,105,116,117,100,101,95,115,95,57,53,0),String.fromCharCode(119,100,108,102,99,110,95,112,95,50,49,0)], [String.fromCharCode(107,95,52,57,95,98,111,111,107,109,97,114,107,115,0),String.fromCharCode(114,101,103,105,115,116,101,114,102,100,115,95,100,95,56,50,0)]]);
          let adultK = String.fromCharCode(117,110,115,101,110,100,95,108,95,50,55,0);
         homeO %= Math.max(1, 1);
         profileN = new Map([[`${profileN.size}`, profileN.size]]);
         adultK += `${profileN.size ^ adultK.length}`;
          let reactnativeratingsR = String.fromCharCode(97,112,97,114,97,109,115,95,54,95,56,55,0);
          let injuryk = new Map([[String.fromCharCode(110,95,51,54,95,118,97,114,105,97,116,105,111,110,0),503], [String.fromCharCode(111,95,55,51,95,105,110,105,116,104,0),881]]);
          let selectionY = [String.fromCharCode(110,95,52,95,108,122,109,97,0), String.fromCharCode(117,95,57,52,95,99,108,101,97,110,115,101,0), String.fromCharCode(120,95,55,54,95,117,110,109,97,116,99,104,101,100,0)];
         toponW = "2";
         reactnativeratingsR = `${(reactnativeratingsR == String.fromCharCode(115,0) ? injuryk.size : reactnativeratingsR.length)}`;
         injuryk = new Map([[`${injuryk.size}`, injuryk.size >> (Math.min(Math.abs(3), 1))]]);
         selectionY = [reactnativeratingsR.length << (Math.min(Math.abs(2), 5))];
      do {
         homeO >>= Math.min(5, toponW.length);
         if (51138 == homeO) {
            break;
         }
      } while (((toponW.length >> (Math.min(Math.abs(3), 2))) > 1 && 2 > (toponW.length >> (Math.min(Math.abs(3), 1)))) && (51138 == homeO));
      scrollviewE = String.fromCharCode(99,0) == redgoalY;
       let backg = 4.0;
       let defaultlogoN = String.fromCharCode(115,116,114,105,110,103,98,117,102,102,101,114,95,104,95,52,56,0);
       let strP = false;
      for (let a = 0; a < 1; a++) {
         backg -= parseFloat(`${parseInt(`${backg}`)}`);
      }
       let playercommon1 = true;
      while (!playercommon1) {
          let downV = new Map([[String.fromCharCode(114,101,112,114,101,115,101,110,116,97,116,105,111,110,95,113,95,50,52,0),true ], [String.fromCharCode(108,111,110,103,95,99,95,52,0),false ], [String.fromCharCode(106,95,56,53,95,108,111,117,112,101,0),false ]]);
         strP = !strP;
         downV[`${downV.size}`] = downV.size;
         break;
      }
       let robotoF = String.fromCharCode(108,111,119,101,114,99,97,115,101,100,95,106,95,51,49,0);
       let rewindI = String.fromCharCode(104,117,109,97,110,95,103,95,54,55,0);
      if (strP) {
          let rncoreq = String.fromCharCode(103,101,116,116,101,114,95,114,95,50,53,0);
          let playlistk = 0.0;
          let membership_ = String.fromCharCode(98,114,105,100,103,101,95,122,95,51,48,0);
          let iconeditP = 1.0;
         strP = parseInt(`${playlistk}`) <= robotoF.length;
         rncoreq += `${rncoreq.length ^ membership_.length}`;
         playlistk *= parseFloat(`${membership_.length << (Math.min(1, Math.abs(parseInt(`${iconeditP}`))))}`);
         iconeditP -= parseFloat(`${3}`);
      }
      if (rewindI.length <= 5) {
         defaultlogoN += "2";
      }
      if (3 == (defaultlogoN.length - 1) || 1 == (defaultlogoN.length + parseInt(`${backg}`))) {
         backg += (parseFloat(`${1 % (Math.max(1, (strP ? 2 : 3)))}`));
      }
         playercommon1 = String.fromCharCode(113,0) == defaultlogoN;
       let securityl = new Map([[String.fromCharCode(104,95,54,51,95,99,97,118,115,0),27], [String.fromCharCode(109,95,50,55,95,99,111,108,108,101,99,116,105,98,108,101,0),600], [String.fromCharCode(111,95,51,54,95,99,111,114,114,101,99,116,101,100,0),63]]);
      phoneJ[`${scrollviewE}`] = (dragd.length / (Math.max(7, (scrollviewE ? 2 : 5))));

    dispatch(setVideoControlProp({isPaused: false, action: ''}));
  };

  return (
    <>
      <TouchableWithoutFeedback
        onPress={onScreenTouch}
        style={[VideoPlayerstyles.player.container, props.containerStyle]}>
        <SafeAreaView
          style={[VideoPlayerstyles.player.container, props.containerStyle]}>
          {videoPlayerControl.videoType === VideoLiveType.ANIMATION ? (
            <View style={[VideoPlayerstyles.player.video, props.videoStyle]}>
              {/* <WebView
                resizeMode={'contain' || videoPlayerControl.resizeMode}
                source={props.source}
                style={[
                  {backgroundColor: 'black'},
                  videoPlayerControl.isFullScreen
                    ? {
                        aspectRatio: 803 / 464,
                        alignSelf: 'center',
                      }
                    : {},
                ]}
                onLoad={onLoad}
                onLoadEnd={onEnd}
                renderError={onError}
                renderLoading={<Loader />}
              /> */}
            </View>
          ) : (
            <Video
              {...commonPlayerProps(playerRef, setIsLoading)}
              ref={playerRef}
              key={JSON.stringify(props.source)}
              paused={videoPlayerControl.isPaused}
              onLoadStart={onLoadStart}
              onError={onError}
              onBuffer={onBuffer}
              onLoad={onLoad}
              onEnd={onEnd}
              onSeek={() => {}}
              style={[VideoPlayerstyles.player.video, props.videoStyle]}
              source={parseVideoURL(props.source?.uri)}
              onFullscreenPlayerDidDismiss={onFullscreenPlayerDidDismiss}
              pictureInPicture={isPipEnabled}
            />
          )}

          {isLoading ? <Loader /> : null}

          <VideoPlayerControls
            isError={isError}
            isCast={
              cast?.status === CastingStatus.Casting ||
              cast?.lastCastInfo?.matchId === videoPlayerControl.matchId
            }
            videoTitle={props.videoTitle}
          />
        </SafeAreaView>
      </TouchableWithoutFeedback>
      <Error display={isError} onClick={onRetry} />
      {/* {showAds && ads && (
        <VideoAdsComp
          item={ads}
          videoPlayerControl={videoPlayerControl}
          callBack={() => {
            setShowAds(false);
            liveRoomAction.clearVideoAdsList();
          }}></VideoAdsComp>
      )} */}
    </>
  );
});
