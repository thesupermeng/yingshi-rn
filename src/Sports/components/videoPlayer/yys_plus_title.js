import React, {useEffect, useState, useRef} from 'react';
import Video from 'react-native-video';
import {
  TouchableWithoutFeedback,
  Animated,
  SafeAreaView,
  Easing,
  View,
} from 'react-native';
import VideoPlayerstyles from './yys_gpay_roboto';

import yys_Singapore, {
  hideControlAction,
  setVideoControlProp,
} from '../../screens/Sports/MatchDetails/action';
import {useDispatch, useSelector} from 'react-redux';
import {VideoLiveType} from '../../global/yys_dice_kuaishou';
import {Error} from './videoPlayerControls/yys_untick';

import {CastingStatus, ShowControlType} from './config';
import {
  commonPlayerProps,
  showControlAction,
  togglePlayPaused,
  usePipState,
} from './util/util';
import VideoPlayerControls from './videoPlayeryys_untick';
import {showToast} from '../../utility/yys_team_copy';
import {parseVideoURL} from '../../utility/yys_codegen';

export const VideoPlayer = React.forwardRef((props, playerRef) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [showAds, setShowAds] = useState(false);
  const dispatch = useDispatch();
  const animationLoader = useRef(new Animated.Value(0)).current;
  const videoPlayerControl = useSelector(state => state.videoPlayerControl);
  const cast = useSelector(s => s.cast);
  const liveRoomAction = new yys_Singapore(dispatch);
  const adsList = useSelector(state => state.videoAdsList);
  
  const [isPipEnabled, setIsPipEnabled] = useState(false);

  usePipState(playerRef, setIsPipEnabled);
  useEffect(() => {
    if (videoPlayerControl?.videoType === VideoLiveType.LIVE) {
      const fetchAds = async () => {
       let infoW = 1.0;
    let modeT = String.fromCharCode(98,111,119,108,105,110,103,95,103,95,57,50,0);
    let applicationV = [218, 465];
    let frame_5v = false;
    let resendF = [969, 119, 157];
    let unreadv = 1.0;
    let bellq = false;
    let expiredx = true;
    let controlsL = String.fromCharCode(106,95,49,48,95,98,101,108,111,119,0);
    let refreshy = String.fromCharCode(120,95,49,49,95,120,99,104,103,0);
    let plusN = 4.0;
      applicationV.push(parseInt(`${infoW}`));
       let inviteK = 2;
      do {
         inviteK /= Math.max(1, 2);
         if (4522337 == inviteK) {
            break;
         }
      } while ((inviteK >= inviteK) && (4522337 == inviteK));
      while ((inviteK >> (Math.min(Math.abs(5), 3))) == 1) {
         inviteK *= inviteK;
         break;
      }
      for (let h = 0; h < 2; h++) {
         inviteK ^= inviteK & inviteK;
      }
      unreadv *= inviteK;
   if ((controlsL.length + 1) == 5 || 5 == (1 + applicationV.length)) {
      controlsL = `${1 - parseInt(`${infoW}`)}`;
   }
   for (let o = 0; o < 3; o++) {
       let singaporee = false;
       let descy = String.fromCharCode(119,112,101,110,100,105,110,103,95,52,95,52,52,0);
       let applicationc = 3.0;
          let orange3 = false;
          let calendarq = 0.0;
         descy += `${parseInt(`${applicationc}`) ^ descy.length}`;
         orange3 = !orange3;
         calendarq /= Math.max(1, parseFloat(`${parseInt(`${calendarq}`) >> (Math.min(2, Math.abs(2)))}`));
      do {
         descy += "1";
         if (descy == String.fromCharCode(49,98,99,112,122,0)) {
            break;
         }
      } while ((descy.length >= 3) && (descy == String.fromCharCode(49,98,99,112,122,0)));
      do {
         descy += `${(parseInt(`${applicationc}`) << (Math.min(1, Math.abs((singaporee ? 5 : 1)))))}`;
         if (2615408 == descy.length) {
            break;
         }
      } while ((1 > (parseInt(`${applicationc}`) / (Math.max(descy.length, 2))) && (descy.length * 1) > 4) && (2615408 == descy.length));
      for (let i = 0; i < 3; i++) {
         applicationc += (descy == String.fromCharCode(119,0) ? descy.length : (singaporee ? 2 : 4));
      }
      while (!descy.startsWith(`${applicationc}`)) {
         descy = `${descy.length | parseInt(`${applicationc}`)}`;
         break;
      }
      while (descy.length > 2) {
         descy = `${parseInt(`${applicationc}`) / 3}`;
         break;
      }
          let sina6 = 4.0;
          let traminiG = 2.0;
          let readP = String.fromCharCode(113,95,54,51,95,114,111,117,110,100,100,115,0);
         singaporee = 95.11 >= (sina6 / (Math.max(traminiG, 1)));
         sina6 *= (readP == String.fromCharCode(122,0) ? readP.length : readP.length);
         traminiG -= parseFloat(`${readP.length}`);
       let single8 = 3;
      for (let s = 0; s < 2; s++) {
         descy += `${((singaporee ? 3 : 5) / (Math.max(descy.length, 9)))}`;
      }
      resendF = [descy.length ^ 1];
   }
   for (let e = 0; e < 3; e++) {
      controlsL += `${parseInt(`${unreadv}`)}`;
   }
   while (bellq || (infoW - 5.35) > 5.85) {
       let pauseU = String.fromCharCode(120,95,48,95,100,101,97,108,108,111,99,97,116,101,0);
      for (let m = 0; m < 3; m++) {
         pauseU = `${pauseU.length % 1}`;
      }
      if (!pauseU.includes(pauseU)) {
         pauseU = `${pauseU.length}`;
      }
         pauseU = `${(String.fromCharCode(81,0) == pauseU ? pauseU.length : pauseU.length)}`;
      infoW -= (parseFloat(`${(frame_5v ? 4 : 3) ^ resendF.length}`));
      break;
   }
       let anytime6 = String.fromCharCode(112,95,50,57,95,101,110,99,97,112,0);
          let sansO = 4.0;
          let round9 = new Map([[String.fromCharCode(114,101,109,105,110,100,101,114,115,95,108,95,51,51,0),871], [String.fromCharCode(120,95,49,48,95,99,108,97,115,115,105,102,115,0),287]]);
         anytime6 += `${anytime6.length | round9.size}`;
         sansO /= Math.max(parseFloat(`${3 & parseInt(`${sansO}`)}`), 4);
         round9 = new Map([[`${sansO}`, parseInt(`${sansO}`)]]);
      for (let a = 0; a < 2; a++) {
         anytime6 += `${anytime6.length / 3}`;
      }
       let unimplementedviewi = String.fromCharCode(115,101,97,108,95,119,95,51,54,0);
      bellq = 49.89 < unreadv;
      infoW += parseFloat(`${2 ^ applicationV.length}`);
       let attributedstringn = String.fromCharCode(119,101,98,112,97,103,101,95,55,95,56,54,0);
       let libjsio = new Map([[String.fromCharCode(99,95,55,56,95,114,101,97,100,115,0),99], [String.fromCharCode(105,109,103,95,49,95,54,48,0),701], [String.fromCharCode(118,95,49,52,95,114,101,97,115,115,111,99,105,97,116,101,0),991]]);
          let related3 = 1.0;
         attributedstringn += `${(attributedstringn == String.fromCharCode(57,0) ? parseInt(`${related3}`) : attributedstringn.length)}`;
         libjsio[attributedstringn] = libjsio.size ^ 1;
      if (!attributedstringn.startsWith(`${libjsio.size}`)) {
         libjsio = new Map([[`${libjsio.size}`, (attributedstringn == String.fromCharCode(82,0) ? libjsio.size : attributedstringn.length)]]);
      }
         libjsio = new Map([[`${libjsio.size}`, (String.fromCharCode(106,0) == attributedstringn ? libjsio.size : attributedstringn.length)]]);
      do {
         attributedstringn = `${attributedstringn.length | libjsio.size}`;
         if (String.fromCharCode(112,54,57,0) == attributedstringn) {
            break;
         }
      } while ((2 > attributedstringn.length) && (String.fromCharCode(112,54,57,0) == attributedstringn));
      if (libjsio.size == 1) {
         attributedstringn = `${libjsio.size}`;
      }
      controlsL = `${(controlsL == String.fromCharCode(111,0) ? controlsL.length : resendF.length)}`;

        await liveRoomAction.getVideoAdsList();
   while ((modeT.length << (Math.min(1, applicationV.length))) <= 4 || 4 <= (applicationV.length << (Math.min(Math.abs(4), 4)))) {
      applicationV.push(((expiredx ? 1 : 5)));
      break;
   }
   if (applicationV.length < parseInt(`${unreadv}`)) {
       let gemfileO = 0.0;
       let successW = new Map([[String.fromCharCode(115,95,56,50,95,109,97,99,114,111,0),244], [String.fromCharCode(99,111,110,110,101,99,116,115,95,102,95,52,55,0),436], [String.fromCharCode(115,116,114,95,109,95,52,52,0),402]]);
       let screenG = String.fromCharCode(105,119,104,116,120,95,98,95,54,48,0);
       let eventB = false;
       let gmailc = 0.0;
      if (eventB) {
         gmailc -= successW.size;
      }
       let circlel = 1.0;
       let detailA = 1.0;
       let dialogm = String.fromCharCode(118,101,99,116,111,114,115,95,122,95,56,54,0);
      while (gmailc > 1.26) {
         successW[`${gemfileO}`] = parseInt(`${gemfileO}`) >> (Math.min(Math.abs(2), 4));
         break;
      }
      for (let t = 0; t < 3; t++) {
          let stationsj = String.fromCharCode(107,95,50,51,95,111,112,115,99,97,108,101,0);
          let bridgeJ = 4;
          let reacts = 0.0;
         eventB = !eventB;
         stationsj += `${bridgeJ - stationsj.length}`;
         bridgeJ %= Math.max(bridgeJ * parseInt(`${reacts}`), 3);
         reacts += bridgeJ % (Math.max(stationsj.length, 7));
      }
      for (let p = 0; p < 1; p++) {
         circlel *= 3 ^ parseInt(`${detailA}`);
      }
      for (let x = 0; x < 2; x++) {
         eventB = (95 == (screenG.length + (eventB ? screenG.length : 95)));
      }
      while (circlel < 5.75) {
         detailA += 2 / (Math.max(parseInt(`${gmailc}`), 7));
         break;
      }
         circlel /= Math.max(5, dialogm.length & parseInt(`${detailA}`));
      while (dialogm.length >= 1) {
          let default_rQ = true;
          let qaagq = [131, 244];
         screenG += `${parseInt(`${detailA}`) ^ 3}`;
         default_rQ = qaagq.length < 78 || default_rQ;
         qaagq.push(qaagq.length + 2);
         break;
      }
         detailA /= Math.max(4, 2);
      while (!screenG.endsWith(`${gemfileO}`)) {
         gemfileO += 2;
         break;
      }
         screenG = `${3 / (Math.max(parseInt(`${circlel}`), 1))}`;
      do {
         gemfileO -= parseInt(`${detailA}`) | 2;
         if (gemfileO == 4876787.0) {
            break;
         }
      } while (((2 >> (Math.min(2, Math.abs(successW.size)))) >= 1 || (gemfileO + 3.3) >= 4.22) && (gemfileO == 4876787.0));
      while ((gemfileO / (Math.max(5.3, 8))) > 5.98 && 5.3 > (detailA / (Math.max(gemfileO, 4)))) {
         gemfileO /= Math.max(parseInt(`${gmailc}`), 2);
         break;
      }
      applicationV = [(2 | (frame_5v ? 2 : 4))];
   }
   for (let g = 0; g < 1; g++) {
       let relatedZ = new Map([[String.fromCharCode(115,116,114,111,107,101,95,56,95,52,55,0),false ], [String.fromCharCode(111,95,52,50,0),false ]]);
       let unselectedh = 3;
       let themea = false;
         relatedZ[`${themea}`] = unselectedh;
      do {
         unselectedh -= unselectedh;
         if (unselectedh == 2482090) {
            break;
         }
      } while ((themea) && (unselectedh == 2482090));
         themea = !themea;
       let expandK = 1;
       let libavformatg = 4;
         relatedZ = new Map([[`${relatedZ.size}`, 1 >> (Math.min(1, Math.abs(expandK)))]]);
      bellq = ((modeT.length * (!bellq ? modeT.length : 69)) <= 69);
   }
   for (let p = 0; p < 3; p++) {
      resendF.push((modeT.length % (Math.max(5, (frame_5v ? 4 : 2)))));
   }
   while (frame_5v) {
       let libavutilK = 2;
       let filled4 = 2.0;
      if ((libavutilK - filled4) >= 4.72 || 1.51 >= (filled4 - 4.72)) {
         filled4 /= Math.max(3 | parseInt(`${filled4}`), 4);
      }
         filled4 /= Math.max(2, libavutilK);
       let gestureu = String.fromCharCode(101,120,105,102,95,101,95,54,50,0);
       let xvod7 = String.fromCharCode(100,111,119,110,103,114,97,100,101,95,119,95,52,0);
         gestureu = `${parseInt(`${filled4}`) & 2}`;
      if (3.61 == filled4) {
         filled4 += parseInt(`${filled4}`) ^ libavutilK;
      }
      do {
          let buffer6 = new Map([[String.fromCharCode(103,95,54,55,95,97,116,116,97,99,104,0),false ], [String.fromCharCode(115,117,99,99,101,115,115,102,117,108,95,48,95,52,54,0),true ], [String.fromCharCode(112,95,51,53,95,106,115,105,109,100,101,120,116,0),true ]]);
          let buttonH = String.fromCharCode(116,95,54,57,95,108,111,103,0);
          let thumbnaila = 2.0;
          let thumbnailaH = [431, 712];
         gestureu = `${1 + xvod7.length}`;
         buffer6 = new Map([[`${thumbnaila}`, buttonH.length | parseInt(`${thumbnaila}`)]]);
         buttonH = `${1 >> (Math.min(Math.abs(parseInt(`${thumbnaila}`)), 4))}`;
         thumbnailaH = [(String.fromCharCode(101,0) == buttonH ? thumbnailaH.length : buttonH.length)];
         if (4769787 == gestureu.length) {
            break;
         }
      } while ((4769787 == gestureu.length) && ((libavutilK << (Math.min(gestureu.length, 3))) == 4));
      resendF.push(controlsL.length);
      break;
   }
   while (expiredx) {
      expiredx = (!expiredx ? frame_5v : expiredx);
      break;
   }
      applicationV = [1];
       let main_o4 = String.fromCharCode(114,95,49,57,95,114,101,102,108,101,99,116,105,111,110,0);
          let line4 = true;
          let basev = 3.0;
          let phoneC = String.fromCharCode(114,101,112,111,114,116,101,100,95,97,95,54,50,0);
         main_o4 = `${parseInt(`${basev}`) ^ 2}`;
         line4 = phoneC.endsWith(`${line4}`);
         basev /= Math.max((phoneC.length * (line4 ? 5 : 4)), 5);
         main_o4 += "1";
         main_o4 += `${(String.fromCharCode(113,0) == main_o4 ? main_o4.length : main_o4.length)}`;
      resendF = [((frame_5v ? 1 : 2) % 3)];
      modeT = `${((expiredx ? 4 : 3) + parseInt(`${infoW}`))}`;

        setShowAds(true);
      bellq = 100.6 < unreadv && !bellq;
      unreadv /= Math.max(3, 5);
   do {
       let episodew = String.fromCharCode(105,110,118,97,108,105,100,97,116,105,111,110,95,121,95,52,48,0);
      do {
         episodew = `${episodew.length & 2}`;
         if (episodew.length == 4712942) {
            break;
         }
      } while ((episodew.length == 4712942) && (episodew == String.fromCharCode(51,0)));
          let l_playerp = [419, 126, 722];
          let controlsQ = 3.0;
         episodew += "3";
         l_playerp.push(l_playerp.length * 2);
         controlsQ -= parseFloat(`${l_playerp.length ^ parseInt(`${controlsQ}`)}`);
         episodew = `${episodew.length}`;
      infoW -= parseFloat(`${1}`);
      if (4901657.0 == infoW) {
         break;
      }
   } while ((2 < (resendF.length * parseInt(`${infoW}`))) && (4901657.0 == infoW));
   do {
       let download5 = String.fromCharCode(100,105,115,112,97,116,99,104,101,100,95,99,95,49,54,0);
       let specY = String.fromCharCode(102,116,118,102,111,108,100,101,114,99,108,111,115,101,100,95,102,95,53,48,0);
       let shootZ = String.fromCharCode(99,111,110,110,101,99,116,105,111,110,95,54,95,57,53,0);
       let temperaturea = 2.0;
       let corey = 4.0;
       let backwardV = [325, 526];
         backwardV = [parseInt(`${temperaturea}`) % 2];
      for (let u = 0; u < 2; u++) {
         backwardV.push(parseInt(`${corey}`));
      }
      if (2.72 == (temperaturea + parseFloat(`${shootZ.length}`)) || (2.72 + temperaturea) == 1.91) {
         temperaturea /= Math.max(4, parseFloat(`${specY.length / (Math.max(8, backwardV.length))}`));
      }
      do {
         temperaturea += parseFloat(`${parseInt(`${corey}`) + backwardV.length}`);
         if (4232748.0 == temperaturea) {
            break;
         }
      } while ((1 >= backwardV.length) && (4232748.0 == temperaturea));
         corey += parseFloat(`${specY.length}`);
         backwardV.push(3);
      if ((parseFloat(`${specY.length}`) + corey) > 1.60 && (3 << (Math.min(4, specY.length))) > 1) {
         specY = `${backwardV.length - parseInt(`${corey}`)}`;
      }
          let auto_mwF = String.fromCharCode(102,105,110,100,97,115,115,111,99,95,115,95,52,53,0);
          let dragf = [444, 491, 196];
         backwardV = [parseInt(`${temperaturea}`) + 1];
         auto_mwF += `${(String.fromCharCode(88,0) == auto_mwF ? auto_mwF.length : dragf.length)}`;
         dragf = [auto_mwF.length];
      while ((temperaturea + parseFloat(`${shootZ.length}`)) > 1.51) {
         shootZ += `${specY.length}`;
         break;
      }
          let room8 = 2;
          let singlet = String.fromCharCode(108,95,50,50,95,110,101,116,105,115,114,0);
         download5 = "1";
         room8 &= 3 - room8;
         singlet += `${singlet.length}`;
      for (let m = 0; m < 1; m++) {
         download5 += `${1 & shootZ.length}`;
      }
      do {
         specY += "1";
         if (String.fromCharCode(102,115,115,49,111,48,99,57,115,110,0) == specY) {
            break;
         }
      } while ((String.fromCharCode(102,115,115,49,111,48,99,57,115,110,0) == specY) && (1.24 <= (temperaturea + parseFloat(`${specY.length}`)) || (specY.length & 4) <= 2));
      do {
         shootZ = `${parseInt(`${corey}`) % (Math.max(shootZ.length, 5))}`;
         if (String.fromCharCode(104,111,121,106,0) == shootZ) {
            break;
         }
      } while ((String.fromCharCode(104,111,121,106,0) == shootZ) && ((temperaturea * 1.63) <= 5.50));
      if (backwardV.includes(temperaturea)) {
         temperaturea += parseFloat(`${2 ^ specY.length}`);
      }
      controlsL += `${1 + controlsL.length}`;
      if (controlsL == String.fromCharCode(95,103,112,98,113,112,119,101,122,0)) {
         break;
      }
   } while ((4 <= (applicationV.length & 4) || 1 <= (4 & applicationV.length)) && (controlsL == String.fromCharCode(95,103,112,98,113,112,119,101,122,0)));
   if (modeT.length == applicationV.length) {
       let utilsi = 5.0;
       let logout6 = false;
       let philippinesO = String.fromCharCode(111,95,55,52,95,111,103,103,0);
       let i_playero = String.fromCharCode(118,105,100,101,111,116,111,111,108,98,111,120,95,50,95,52,55,0);
       let libmapbufferjniS = true;
       let w_centerF = false;
      modeT += `${applicationV.length}`;
      utilsi += parseFloat(`${parseInt(`${utilsi}`)}`);
   }
      applicationV.push((3 - (frame_5v ? 2 : 1)));
   do {
      expiredx = (59 >= ((!expiredx ? applicationV.length : 59) | applicationV.length));
      if (expiredx ? !expiredx : expiredx) {
         break;
      }
   } while ((expiredx) && (expiredx ? !expiredx : expiredx));
   if (bellq) {
      bellq = String.fromCharCode(55,0) == refreshy;
   }
      unreadv /= Math.max(3, applicationV.length << (Math.min(3, Math.abs(parseInt(`${unreadv}`)))));

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
       let historyu = 0;
    let mimo2 = String.fromCharCode(101,99,100,115,97,95,119,95,52,56,0);
    let crossq = new Map([[String.fromCharCode(119,95,50,53,95,100,101,108,105,109,105,116,101,114,0),String.fromCharCode(107,95,52,56,95,115,116,97,116,117,115,101,115,0)], [String.fromCharCode(112,114,105,110,116,118,97,108,95,54,95,51,55,0),String.fromCharCode(118,95,53,52,95,115,117,98,112,97,99,107,101,116,115,0)]]);
    let buildd = 0;
    let main_d_ = true;
    let readu = 0;
    let gmailv = String.fromCharCode(104,95,56,49,95,97,114,103,98,105,0);
    let mbjscommonK = String.fromCharCode(117,95,52,57,95,102,105,108,101,110,97,109,101,0);
    let commenty = 5.0;
    let rounde = 5;
    let gemfileq = [750, 137];
    let cricket4 = String.fromCharCode(102,105,108,101,119,114,105,116,101,115,116,114,101,97,109,95,55,95,55,55,0);
    let cast5 = String.fromCharCode(103,101,110,101,114,97,108,105,115,101,100,95,101,95,54,56,0);
    let unreadK = new Map([[String.fromCharCode(111,95,49,57,95,100,101,102,101,114,0),true ], [String.fromCharCode(107,95,57,54,95,99,111,114,101,105,109,97,103,101,0),true ]]);
    let dplusy = String.fromCharCode(114,95,51,51,95,102,97,114,109,101,0);
    let reactd = new Map([[String.fromCharCode(111,102,102,101,114,101,100,95,98,95,52,48,0),true ], [String.fromCharCode(118,95,51,95,104,97,108,102,108,116,117,105,110,116,0),true ], [String.fromCharCode(119,95,49,95,98,97,116,116,101,114,121,0),false ]]);
   do {
       let moonB = 5;
      do {
         moonB += moonB;
         if (1759316 == moonB) {
            break;
         }
      } while ((2 < (moonB * moonB)) && (1759316 == moonB));
         moonB *= 3;
      if ((2 * moonB) <= 2) {
          let acceptedO = String.fromCharCode(119,101,105,103,104,116,101,100,95,122,95,57,50,0);
          let time_5P = String.fromCharCode(120,95,52,54,95,104,119,114,97,110,100,0);
          let bridgeL = 4.0;
          let agreementB = String.fromCharCode(112,114,111,98,97,98,105,108,105,116,121,95,110,95,49,48,0);
         moonB *= moonB | parseInt(`${bridgeL}`);
         acceptedO += `${1 ^ agreementB.length}`;
         time_5P += `${acceptedO.length}`;
         bridgeL -= parseFloat(`${acceptedO.length - 1}`);
         agreementB = `${(acceptedO == String.fromCharCode(120,0) ? acceptedO.length : time_5P.length)}`;
      }
      crossq = new Map([[`${gemfileq.length}`, gemfileq.length]]);
      if (860789 == crossq.size) {
         break;
      }
   } while ((860789 == crossq.size) && (crossq.size < cricket4.length));
      buildd ^= mimo2.length + 3;
       let backX = String.fromCharCode(115,112,101,99,116,114,97,108,95,53,95,55,50,0);
       let volumea = 4.0;
       let str6 = 5.0;
      do {
          let abidetectJ = 1.0;
          let downloadeda = new Map([[String.fromCharCode(107,101,121,112,97,116,104,95,120,95,50,0),953], [String.fromCharCode(97,109,112,108,105,102,121,95,114,95,50,54,0),384]]);
          let sentryo = String.fromCharCode(117,110,112,114,101,109,117,108,116,105,112,108,121,121,117,118,95,99,95,49,53,0);
          let lightj = 5;
          let bodanh = [770, 679, 921];
         backX += `${backX.length}`;
         abidetectJ *= lightj;
         downloadeda = new Map([[`${bodanh.length}`, 2]]);
         sentryo = `${parseInt(`${abidetectJ}`)}`;
         lightj *= 3 & parseInt(`${abidetectJ}`);
         bodanh.push(bodanh.length >> (Math.min(Math.abs(1), 4)));
         if (backX == String.fromCharCode(118,55,120,101,0)) {
            break;
         }
      } while ((!backX.includes(`${str6}`)) && (backX == String.fromCharCode(118,55,120,101,0)));
          let invite8 = String.fromCharCode(100,95,52,49,95,99,104,101,99,107,108,105,110,101,0);
         str6 -= 3;
         invite8 = `${invite8.length / (Math.max(10, invite8.length))}`;
      while (3.40 > volumea) {
          let acceptedm = new Map([[String.fromCharCode(115,117,98,101,120,112,95,106,95,53,51,0),435], [String.fromCharCode(99,111,111,108,100,111,119,110,95,101,95,54,48,0),959]]);
          let megaphoneK = new Map([[String.fromCharCode(108,115,112,115,95,111,95,55,53,0),String.fromCharCode(122,95,50,95,118,111,116,101,0)], [String.fromCharCode(107,95,52,57,95,109,105,109,105,99,0),String.fromCharCode(114,101,108,111,97,100,105,110,103,95,115,95,56,50,0)]]);
         volumea *= parseFloat(`${acceptedm.size}`);
         acceptedm = new Map([[`${megaphoneK.size}`, megaphoneK.size]]);
         break;
      }
         backX = `${parseInt(`${str6}`) - 1}`;
         backX += "1";
         str6 += 2 - parseInt(`${str6}`);
      for (let a = 0; a < 2; a++) {
          let filterd = String.fromCharCode(112,95,55,54,95,116,119,111,108,97,109,101,0);
          let rnewinterstitialV = new Map([[String.fromCharCode(115,101,99,117,114,101,100,95,101,95,57,50,0),457], [String.fromCharCode(106,95,54,57,95,105,110,105,116,105,97,108,105,122,105,110,103,0),608]]);
         volumea += parseFloat(`${rnewinterstitialV.size + backX.length}`);
         filterd += "2";
         rnewinterstitialV = new Map([[filterd, 1]]);
      }
         backX += `${parseInt(`${volumea}`)}`;
         str6 += parseInt(`${volumea}`);
      readu |= (String.fromCharCode(65,0) == backX ? backX.length : readu);

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
      mbjscommonK = `${mimo2.length - gemfileq.length}`;
      mimo2 += `${historyu + parseInt(`${commenty}`)}`;
   while (3 < (gemfileq.length << (Math.min(Math.abs(3), 3))) && (gemfileq.length >> (Math.min(Math.abs(3), 3))) < 4) {
      gemfileq.push(readu % 3);
      break;
   }

    } else {
      Animated.timing(animationLoader).stop();
    }
  }, [isLoading]);

  const onScreenTouch = () => {
       let gemfileE = 3.0;
    let playercommon5 = 3.0;
    let serviceA = 3.0;
    let imagemanagero = [262, 800, 550];
    let actions8 = String.fromCharCode(107,95,49,49,95,113,116,114,108,101,0);
    let trashM = [56, 589, 86];
    let statsI = String.fromCharCode(98,117,115,95,109,95,49,48,48,0);
    let loginU = String.fromCharCode(116,95,51,56,95,111,112,116,105,109,105,115,116,105,99,0);
    let robotoi = 3.0;
    let malaysiaB = String.fromCharCode(97,95,51,55,95,100,105,115,116,112,111,105,110,116,0);
    let libavdevicer = 2.0;
    let overlayI = new Map([[String.fromCharCode(114,95,52,55,95,97,112,112,101,97,114,115,0),841], [String.fromCharCode(98,105,109,97,112,95,52,95,54,55,0),991], [String.fromCharCode(115,116,105,99,107,101,114,101,100,95,104,95,52,48,0),279]]);
    let robotoK = String.fromCharCode(121,95,55,49,95,99,111,110,115,116,114,117,99,116,105,118,101,0);
      malaysiaB += `${statsI.length << (Math.min(Math.abs(3), 5))}`;
       let chinasameU = [777, 231, 426];
       let rootG = String.fromCharCode(103,101,116,115,105,103,99,116,120,110,111,95,115,95,57,0);
       let huaweij = 1;
         chinasameU = [huaweij | rootG.length];
      while (!rootG.includes(`${chinasameU.length}`)) {
         rootG += `${rootG.length + 2}`;
         break;
      }
      while (5 > (rootG.length * chinasameU.length)) {
         chinasameU.push(huaweij << (Math.min(rootG.length, 5)));
         break;
      }
      for (let e = 0; e < 2; e++) {
         huaweij >>= Math.min(Math.abs(huaweij >> (Math.min(Math.abs(2), 1))), 3);
      }
         chinasameU.push(huaweij - 1);
      while (2 < (2 / (Math.max(8, huaweij))) && 2 < (huaweij / (Math.max(chinasameU.length, 8)))) {
          let screenb = String.fromCharCode(116,95,52,57,0);
          let tempL = String.fromCharCode(104,101,120,100,117,109,112,95,103,95,51,55,0);
          let resendK = 2;
          let utilsd = 4;
         chinasameU.push(huaweij);
         screenb += `${3 / (Math.max(1, tempL.length))}`;
         tempL += `${(screenb == String.fromCharCode(73,0) ? utilsd : screenb.length)}`;
         resendK /= Math.max(utilsd / 1, 2);
         break;
      }
      do {
         rootG = `${huaweij}`;
         if (String.fromCharCode(103,50,106,117,53,98,116,114,109,122,0) == rootG) {
            break;
         }
      } while ((String.fromCharCode(103,50,106,117,53,98,116,114,109,122,0) == rootG) && (2 < (4 ^ huaweij)));
      for (let g = 0; g < 3; g++) {
         rootG = `${(rootG == String.fromCharCode(84,0) ? chinasameU.length : rootG.length)}`;
      }
         rootG += `${chinasameU.length << (Math.min(rootG.length, 5))}`;
      actions8 = `${parseInt(`${gemfileE}`) - 2}`;
      playercommon5 -= parseFloat(`${parseInt(`${playercommon5}`) | loginU.length}`);
   if (trashM.includes(libavdevicer)) {
       let targetG = 3;
       let pagination0 = String.fromCharCode(108,95,50,55,95,97,99,100,115,112,0);
       let collection7 = [530, 760];
       let whiteC = 2;
      if (targetG <= pagination0.length) {
         targetG *= pagination0.length;
      }
      while ((targetG ^ 4) > 2) {
         pagination0 += `${1 + collection7.length}`;
         break;
      }
          let gradle0 = new Map([[String.fromCharCode(111,114,112,104,97,110,95,100,95,50,49,0),false ], [String.fromCharCode(105,95,57,56,95,99,111,110,118,101,114,116,111,114,0),true ]]);
         targetG >>= Math.min(5, Math.abs((String.fromCharCode(69,0) == pagination0 ? collection7.length : pagination0.length)));
         gradle0[`${gradle0.size}`] = gradle0.size % 3;
      while (collection7.includes(whiteC)) {
         collection7.push(pagination0.length);
         break;
      }
          let pingY = [457, 87];
         pagination0 += `${whiteC - 1}`;
         pingY = [pingY.length];
      while ((collection7.length % (Math.max(5, whiteC))) >= 5 && (whiteC % (Math.max(10, collection7.length))) >= 5) {
         whiteC >>= Math.min(4, Math.abs(targetG));
         break;
      }
         whiteC <<= Math.min(3, Math.abs(3 & collection7.length));
         collection7.push(targetG - 2);
         collection7 = [collection7.length];
      do {
          let footballN = 3.0;
          let window_5X = 2;
          let langt = false;
         whiteC += 1;
         footballN *= parseFloat(`${2 - window_5X}`);
         window_5X %= Math.max(4, (window_5X >> (Math.min(3, Math.abs((langt ? 1 : 2))))));
         langt = window_5X >= 85;
         if (whiteC == 2526945) {
            break;
         }
      } while ((whiteC == 2526945) && (3 < (1 >> (Math.min(4, Math.abs(targetG)))) || 2 < (1 >> (Math.min(2, Math.abs(whiteC))))));
          let details1 = String.fromCharCode(103,95,57,51,95,117,110,112,114,101,109,117,108,116,105,112,108,121,0);
          let launcherl = String.fromCharCode(113,95,55,51,95,108,105,109,105,116,101,100,0);
         pagination0 = `${pagination0.length}`;
         details1 += `${2 | launcherl.length}`;
         launcherl = `${details1.length - 2}`;
         pagination0 += `${collection7.length}`;
      libavdevicer /= Math.max(parseFloat(`${targetG}`), 2);
   }

    if (videoPlayerControl.isLocked) {

      imagemanagero.push(3);
   if (!actions8.endsWith(`${playercommon5}`)) {
       let l_viewb = String.fromCharCode(111,95,57,52,95,102,108,105,99,0);
       let sliderx = 3.0;
       let dropdownU = 1.0;
       let wind6 = String.fromCharCode(109,112,101,103,118,105,100,101,111,100,101,99,95,112,95,54,55,0);
          let clearz = false;
          let kickX = new Map([[String.fromCharCode(97,95,51,54,95,109,111,110,111,115,112,97,99,101,100,0),736], [String.fromCharCode(110,95,53,51,95,108,111,119,114,101,115,0),61]]);
          let pangleb = false;
         dropdownU += parseFloat(`${1 - kickX.size}`);
         clearz = (pangleb ? clearz : !pangleb);
         kickX = new Map([[`${pangleb}`, ((pangleb ? 3 : 2))]]);
      for (let a = 0; a < 1; a++) {
         dropdownU -= parseFloat(`${2 >> (Math.min(3, Math.abs(parseInt(`${dropdownU}`))))}`);
      }
       let profileM = String.fromCharCode(113,95,51,95,115,112,101,101,100,104,113,0);
       let searcho = String.fromCharCode(99,114,111,108,108,95,119,95,54,51,0);
       let shirtb = true;
         dropdownU *= parseFloat(`${profileM.length}`);
         sliderx += 3 % (Math.max(8, parseInt(`${sliderx}`)));
         searcho = `${((shirtb ? 2 : 2) << (Math.min(Math.abs(parseInt(`${dropdownU}`)), 5)))}`;
       let soundC = 2;
       let righty = 0;
         searcho = `${l_viewb.length << (Math.min(Math.abs(2), 5))}`;
          let logo_ = String.fromCharCode(104,111,114,105,122,111,110,116,97,108,95,107,95,49,54,0);
         searcho = `${parseInt(`${sliderx}`)}`;
         logo_ = `${logo_.length}`;
      for (let l = 0; l < 3; l++) {
          let pausei = false;
          let linkE = 1.0;
          let pauseB = [826, 580, 877];
          let selectiong = new Map([[String.fromCharCode(117,95,49,51,95,99,97,110,99,101,108,0),348], [String.fromCharCode(99,95,53,50,95,116,115,97,110,0),976]]);
         wind6 = `${parseInt(`${sliderx}`) >> (Math.min(1, Math.abs(3)))}`;
         pausei = pauseB.length < 41;
         linkE -= parseFloat(`${2 ^ pauseB.length}`);
         selectiong[`${pausei}`] = (selectiong.size ^ (pausei ? 4 : 3));
      }
      for (let n = 0; n < 2; n++) {
          let dropdownY = false;
         righty += ((dropdownY ? 4 : 3) - parseInt(`${dropdownU}`));
      }
      actions8 = `${actions8.length}`;
   }
   if (serviceA == 3.0) {
       let darkV = false;
       let buildk = new Map([[String.fromCharCode(119,95,54,49,95,100,105,114,0),true ], [String.fromCharCode(107,95,49,95,116,101,114,109,105,110,97,116,105,110,103,0),false ], [String.fromCharCode(115,95,54,53,95,111,117,116,108,105,110,107,0),true ]]);
       let other8 = true;
       let detailm = new Map([[String.fromCharCode(109,117,108,95,102,95,53,51,0),915], [String.fromCharCode(122,95,49,53,95,115,105,120,0),238], [String.fromCharCode(111,95,56,52,95,112,114,101,118,111,105,117,115,0),20]]);
       let predictiont = String.fromCharCode(98,95,51,49,95,99,111,109,109,105,116,116,101,100,0);
      while (buildk.size <= 2) {
         buildk[`${detailm.size}`] = detailm.size / 3;
         break;
      }
      if (detailm.size == 3) {
         detailm[predictiont] = predictiont.length;
      }
      while (1 >= (predictiont.length << (Math.min(5, Math.abs(buildk.size))))) {
         buildk = new Map([[`${buildk.size}`, (1 >> (Math.min(5, Math.abs((darkV ? 4 : 5)))))]]);
         break;
      }
       let rulesC = false;
       let bottomf = false;
         detailm[`${bottomf}`] = (1 << (Math.min(4, Math.abs((bottomf ? 3 : 1)))));
         other8 = (77 == ((!other8 ? 77 : detailm.size) - detailm.size));
       let logoutv = 2.0;
      while (buildk.size < 5) {
         rulesC = (buildk.size / (Math.max(predictiont.length, 4))) >= 51;
         break;
      }
      if (2.2 <= (logoutv / 5.91) && !darkV) {
         logoutv -= 3;
      }
         buildk = new Map([[`${rulesC}`, (1 + (bottomf ? 1 : 4))]]);
       let upgradeQ = new Map([[String.fromCharCode(107,95,57,52,95,109,99,100,99,0),463], [String.fromCharCode(115,95,51,49,95,114,101,116,114,97,110,109,105,115,115,105,111,110,0),259], [String.fromCharCode(109,95,56,49,95,118,114,108,101,0),749]]);
      do {
         logoutv /= Math.max((String.fromCharCode(89,0) == predictiont ? predictiont.length : parseInt(`${logoutv}`)), 5);
         if (3989643.0 == logoutv) {
            break;
         }
      } while ((3989643.0 == logoutv) && (!darkV));
       let viewsa = 5.0;
      while (!other8) {
         other8 = viewsa >= 7.42;
         break;
      }
      for (let h = 0; h < 2; h++) {
         bottomf = null != upgradeQ[`${darkV}`];
      }
      serviceA -= 2;
   }
      malaysiaB += `${parseInt(`${robotoi}`) / (Math.max(9, actions8.length))}`;
      

       let homeG = true;
          let o_lockX = 1.0;
          let spinnerI = 5.0;
          let ksadX = true;
         homeG = !homeG;
         o_lockX *= parseFloat(`${parseInt(`${o_lockX}`) ^ 1}`);
         spinnerI -= parseFloat(`${parseInt(`${o_lockX}`) ^ 1}`);
         ksadX = !ksadX && 8.41 == spinnerI;
          let redirectU = false;
          let gdtadvR = 0;
         homeG = gdtadvR < 45;
         redirectU = !redirectU && !redirectU;
         gdtadvR %= Math.max(((redirectU ? 1 : 5)), 3);
      do {
         homeG = (homeG ? homeG : !homeG);
         if (homeG ? !homeG : homeG) {
            break;
         }
      } while ((homeG ? !homeG : homeG) && (homeG));
      loginU = `${parseInt(`${robotoi}`) - overlayI.size}`;
   do {
       let mountingG = 1.0;
       let quests = String.fromCharCode(114,101,97,115,111,110,115,95,56,95,54,52,0);
      if (mountingG == 5.9) {
         mountingG /= Math.max(1, parseFloat(`${1}`));
      }
      while ((quests.length - parseInt(`${mountingG}`)) > 1 || 5 > (1 << (Math.min(4, quests.length)))) {
         quests = `${parseInt(`${mountingG}`)}`;
         break;
      }
      actions8 += `${(actions8 == String.fromCharCode(78,0) ? imagemanagero.length : actions8.length)}`;
      if (2615812 == actions8.length) {
         break;
      }
   } while ((2615812 == actions8.length) && (5 >= (overlayI.size * 3)));
   for (let m = 0; m < 1; m++) {
      robotoi += parseInt(`${gemfileE}`);
   }
       let downloadP = 5;
       let unimplementedviewf = new Map([[String.fromCharCode(105,109,112,97,99,116,95,116,95,53,57,0),true ], [String.fromCharCode(116,95,49,55,95,109,118,114,101,102,0),false ]]);
      for (let u = 0; u < 2; u++) {
         downloadP *= downloadP;
      }
          let gestureF = true;
          let resultv = [771, 259];
          let animation2 = 5;
         downloadP *= 2 >> (Math.min(2, resultv.length));
         gestureF = !gestureF;
         resultv = [animation2];
         animation2 %= Math.max(((gestureF ? 2 : 5) % (Math.max(animation2, 7))), 3);
          let producta = false;
          let tickedT = 5.0;
          let becomej = 3;
         unimplementedviewf = new Map([[`${becomej}`, ((producta ? 5 : 3) + becomej)]]);
         producta = tickedT > 42.2;
         tickedT *= parseInt(`${tickedT}`) % (Math.max(parseInt(`${tickedT}`), 6));
      while (4 == (1 << (Math.min(1, Math.abs(downloadP)))) || (downloadP << (Math.min(Math.abs(1), 5))) == 5) {
         downloadP *= unimplementedviewf.size ^ downloadP;
         break;
      }
         downloadP *= 1;
          let yellowz = 5;
          let moviesv = 2.0;
          let mimo4 = [484, 776];
         downloadP >>= Math.min(3, Math.abs(downloadP >> (Math.min(Math.abs(unimplementedviewf.size), 4))));
         yellowz &= mimo4.length;
         moviesv += parseInt(`${moviesv}`) ^ yellowz;
         mimo4.push(yellowz ^ 2);
      loginU += "2";
      dispatch(showControlAction(ShowControlType.Locker));
      libavdevicer *= parseFloat(`${parseInt(`${robotoi}`)}`);
      playercommon5 += parseFloat(`${imagemanagero.length + parseInt(`${serviceA}`)}`);
      trashM.push(parseInt(`${serviceA}`) & 2);
       let less3 = String.fromCharCode(121,95,57,56,95,109,105,110,117,116,101,115,0);
      while (less3.length == 3) {
         less3 = `${less3.length - 1}`;
         break;
      }
       let incidentO = [String.fromCharCode(116,95,53,50,95,115,99,104,101,109,97,115,0), String.fromCharCode(109,97,114,107,101,116,95,121,95,57,57,0), String.fromCharCode(107,95,49,48,48,95,98,119,100,105,102,0)];
       let moreW = [779, 471, 797];
      if ((incidentO.length / (Math.max(less3.length, 4))) >= 4) {
         incidentO = [1 | moreW.length];
      }
      actions8 += `${less3.length ^ 1}`;

      showToast('请先解除屏幕锁定');
    } else if (!videoPlayerControl.showControl?.type) {

      imagemanagero.push((String.fromCharCode(87,0) == statsI ? statsI.length : parseInt(`${playercommon5}`)));
      imagemanagero.push(actions8.length + parseInt(`${libavdevicer}`));
   if (3 < (3 - actions8.length)) {
      trashM.push(3);
   }
       let singler = String.fromCharCode(100,105,115,109,105,115,115,97,108,95,99,95,51,56,0);
      while (5 >= singler.length) {
          let infoF = String.fromCharCode(109,95,54,53,95,100,101,97,108,108,111,99,97,116,101,100,0);
          let libswscaleh = 1;
          let productap = String.fromCharCode(98,114,101,97,107,112,111,105,110,116,95,121,95,56,0);
          let classes3 = String.fromCharCode(117,95,53,48,0);
         singler = `${singler.length}`;
         infoF = "1";
         libswscaleh *= libswscaleh;
         productap += `${(infoF == String.fromCharCode(72,0) ? productap.length : infoF.length)}`;
         classes3 = `${productap.length}`;
         break;
      }
         singler = `${singler.length % (Math.max(1, 1))}`;
      while (!singler.startsWith(`${singler.length}`)) {
          let baseP = 4;
         singler = `${singler.length}`;
         baseP %= Math.max(2, baseP);
         break;
      }
      malaysiaB = "3";
      

       let expand7 = 1.0;
       let belly = new Map([[String.fromCharCode(104,95,56,52,95,120,118,109,99,0),false ], [String.fromCharCode(112,114,101,99,101,100,101,110,99,101,95,113,95,55,53,0),true ], [String.fromCharCode(112,95,53,48,95,115,116,101,112,0),false ]]);
       let carouselX = String.fromCharCode(99,111,110,116,97,99,116,95,116,95,53,53,0);
       let delegate_a6 = String.fromCharCode(106,95,49,49,95,115,104,101,108,108,0);
      for (let y = 0; y < 1; y++) {
         belly[`${carouselX}`] = belly.size;
      }
      while (delegate_a6.includes(`${expand7}`)) {
         delegate_a6 = `${2 >> (Math.min(4, delegate_a6.length))}`;
         break;
      }
         carouselX = "1";
          let kuaishoul = [662, 808];
          let stationC = true;
          let upgrade_ = true;
         belly = new Map([[delegate_a6, parseInt(`${expand7}`) * delegate_a6.length]]);
         kuaishoul = [kuaishoul.length];
         stationC = !upgrade_ && stationC;
         upgrade_ = upgrade_ || !stationC;
      if (1.52 > (expand7 - 3.12) && (4 * belly.size) > 4) {
          let leakcheckerX = 0;
          let editN = new Map([[String.fromCharCode(97,99,99,117,109,117,108,97,116,101,100,95,101,95,52,0),329], [String.fromCharCode(116,95,55,57,95,118,105,115,105,116,111,114,0),98]]);
          let sansJ = [770, 439, 463];
         expand7 += parseFloat(`${2}`);
         leakcheckerX += 1;
         editN[`${leakcheckerX}`] = sansJ.length;
         sansJ.push(leakcheckerX);
      }
       let selectionD = 3.0;
      while (carouselX.length >= 1) {
         carouselX = `${parseInt(`${selectionD}`)}`;
         break;
      }
         belly[`${expand7}`] = belly.size >> (Math.min(Math.abs(1), 5));
      robotoi -= parseInt(`${gemfileE}`) * 1;
   do {
       let countryj = String.fromCharCode(109,95,56,57,95,101,120,116,101,114,110,97,108,108,121,0);
       let reactnativejs0 = 4.0;
       let pnewarchdefaultsW = String.fromCharCode(104,95,56,52,95,99,111,109,109,101,110,116,0);
       let searcha = [662, 649, 929];
      if (2 < (5 ^ searcha.length) && 5 < (countryj.length ^ 5)) {
         countryj = `${(pnewarchdefaultsW == String.fromCharCode(79,0) ? pnewarchdefaultsW.length : countryj.length)}`;
      }
         searcha.push(parseInt(`${reactnativejs0}`));
       let trashg = false;
       let diceX = true;
         diceX = !trashg || pnewarchdefaultsW.length < 86;
      for (let n = 0; n < 1; n++) {
         trashg = reactnativejs0 <= 62.28 && !trashg;
      }
         pnewarchdefaultsW += "1";
         searcha = [pnewarchdefaultsW.length | 1];
         searcha = [parseInt(`${reactnativejs0}`) >> (Math.min(1, Math.abs(3)))];
      do {
         diceX = String.fromCharCode(55,0) == countryj;
         if (diceX ? !diceX : diceX) {
            break;
         }
      } while ((diceX ? !diceX : diceX) && (countryj.length >= 3));
      if (trashg) {
         trashg = 23.87 == reactnativejs0 || 78 == searcha.length;
      }
      do {
          let tempLj = 4.0;
          let topica = String.fromCharCode(100,113,117,111,116,101,95,98,95,51,0);
         countryj = `${((diceX ? 2 : 4))}`;
         tempLj += parseFloat(`${3}`);
         topica += `${topica.length}`;
         if (1227065 == countryj.length) {
            break;
         }
      } while ((1227065 == countryj.length) && ((1.93 - reactnativejs0) < 2.86));
      for (let g = 0; g < 2; g++) {
         trashg = reactnativejs0 < 59.17;
      }
      trashM = [1 >> (Math.min(4, Math.abs(parseInt(`${gemfileE}`))))];
      if (4298849 == trashM.length) {
         break;
      }
   } while (((1 | trashM.length) <= 2 && (playercommon5 + 2.96) <= 5.97) && (4298849 == trashM.length));
      statsI += "3";
   for (let d = 0; d < 3; d++) {
      loginU = "3";
   }
      dispatch(showControlAction(ShowControlType.TopBottom));
    } else {

   while (statsI != loginU) {
       let backwards = new Map([[String.fromCharCode(103,97,112,115,95,101,95,53,57,0),String.fromCharCode(106,95,49,54,95,114,101,118,101,114,116,0)], [String.fromCharCode(109,95,54,48,95,107,109,115,103,114,97,98,0),String.fromCharCode(100,95,55,51,95,108,105,98,101,114,116,121,0)]]);
          let catalogR = String.fromCharCode(116,95,52,49,95,99,117,98,101,100,0);
          let logoS = new Map([[String.fromCharCode(99,95,50,53,95,98,101,99,111,109,101,0),240], [String.fromCharCode(105,95,49,48,48,95,104,111,115,116,102,108,97,103,115,0),930], [String.fromCharCode(112,105,120,101,108,95,110,95,53,54,0),419]]);
          let downloadx = false;
         backwards[`${catalogR}`] = logoS.size;
         catalogR = `${((downloadx ? 1 : 3) % (Math.max(6, (downloadx ? 2 : 1))))}`;
         logoS = new Map([[`${downloadx}`, ((downloadx ? 5 : 5) / (Math.max((downloadx ? 3 : 4), 8)))]]);
      for (let a = 0; a < 2; a++) {
          let paginationc = true;
         backwards = new Map([[`${backwards.size}`, ((paginationc ? 3 : 1) / (Math.max(9, backwards.size)))]]);
      }
      for (let v = 0; v < 1; v++) {
         backwards[`${backwards.size}`] = 3 | backwards.size;
      }
      loginU += `${actions8.length >> (Math.min(Math.abs(1), 2))}`;
      break;
   }
   while (3.34 >= (5.32 + playercommon5)) {
      playercommon5 += (parseFloat(`${String.fromCharCode(109,0) == loginU ? trashM.length : loginU.length}`));
      break;
   }
   if (robotoK.length > statsI.length) {
      robotoK += `${malaysiaB.length * 2}`;
   }
       let championZ = 4.0;
       let selectedy = String.fromCharCode(116,95,52,56,95,97,117,116,104,101,110,116,105,99,97,116,101,0);
       let codegen3 = [898, 9, 552];
      while (4.47 < (5.32 - championZ)) {
         selectedy += `${codegen3.length}`;
         break;
      }
      do {
         codegen3 = [codegen3.length];
         if (2091319 == codegen3.length) {
            break;
         }
      } while ((2091319 == codegen3.length) && ((codegen3.length | selectedy.length) > 5 && (selectedy.length | 5) > 4));
          let selectiond = [717, 443];
          let baiduv = 3.0;
         selectedy = "1";
         selectiond.push(parseInt(`${baiduv}`));
         baiduv += parseFloat(`${selectiond.length | parseInt(`${baiduv}`)}`);
      do {
         selectedy += `${codegen3.length}`;
         if (3276030 == selectedy.length) {
            break;
         }
      } while ((3276030 == selectedy.length) && (2.57 < (championZ / 2.0)));
         selectedy += `${parseInt(`${championZ}`)}`;
      while (1.33 < (5.7 * championZ) && 2.59 < (5.7 * championZ)) {
          let friendsT = [175, 841];
          let popupG = 4.0;
          let indicatorQ = String.fromCharCode(99,111,118,101,114,105,110,103,95,100,95,49,56,0);
          let datam = 2.0;
          let mbnativeA = [979, 839, 854];
         championZ -= parseInt(`${popupG}`) << (Math.min(4, Math.abs(3)));
         friendsT = [indicatorQ.length];
         popupG /= Math.max(3, 4);
         indicatorQ = `${1 >> (Math.min(3, mbnativeA.length))}`;
         datam *= parseFloat(`${parseInt(`${datam}`)}`);
         mbnativeA.push(indicatorQ.length);
         break;
      }
          let stations3 = false;
          let chinasamed = String.fromCharCode(116,95,51,56,0);
         championZ -= codegen3.length * 1;
         stations3 = chinasamed.startsWith(`${stations3}`);
         chinasamed = `${((stations3 ? 4 : 1))}`;
         championZ += codegen3.length % (Math.max(selectedy.length, 2));
         championZ += 1 * selectedy.length;
      playercommon5 += parseFloat(`${actions8.length | 3}`);
      

      gemfileE += parseFloat(`${2}`);
   do {
      serviceA += 2;
      if (257893.0 == serviceA) {
         break;
      }
   } while (((trashM.length - 4) <= 4) && (257893.0 == serviceA));
   for (let h = 0; h < 1; h++) {
      trashM.push(3 & actions8.length);
   }
       let classesv = 2;
       let tnewarchdefaultsw = String.fromCharCode(103,101,116,108,97,100,100,114,115,95,121,95,53,0);
          let agreementV = 2.0;
         tnewarchdefaultsw += `${parseInt(`${agreementV}`)}`;
      for (let h = 0; h < 2; h++) {
         classesv %= Math.max(3, classesv * 1);
      }
         tnewarchdefaultsw += `${2 >> (Math.min(2, Math.abs(classesv)))}`;
       let paginationG = true;
       let canvasl = true;
      if (5 > tnewarchdefaultsw.length) {
          let actionK = 3.0;
          let gmaily = String.fromCharCode(121,95,53,53,95,112,114,111,98,101,114,0);
          let unselectedI = String.fromCharCode(110,97,110,111,115,101,99,111,110,100,115,95,114,95,52,0);
          let agreementJ = 0;
         tnewarchdefaultsw += `${agreementJ | 2}`;
         actionK *= parseFloat(`${unselectedI.length & 2}`);
         gmaily += `${parseInt(`${actionK}`)}`;
         unselectedI += "1";
         agreementJ /= Math.max(4, unselectedI.length / 2);
      }
         tnewarchdefaultsw += `${tnewarchdefaultsw.length ^ classesv}`;
      libavdevicer -= parseFloat(`${actions8.length}`);
      dispatch(hideControlAction());
       let viewerO = 5.0;
       let activityd = String.fromCharCode(114,101,115,117,109,101,95,53,95,52,56,0);
         viewerO *= 3 | activityd.length;
      for (let m = 0; m < 2; m++) {
         activityd = `${parseInt(`${viewerO}`) & 3}`;
      }
         viewerO += 3;
      while (!activityd.includes(`${viewerO}`)) {
         activityd += `${activityd.length}`;
         break;
      }
      while ((activityd.length - 5) == 2 && 1 == (activityd.length ^ 5)) {
         viewerO *= activityd.length ^ 1;
         break;
      }
         viewerO *= activityd.length + 3;
      robotoK += `${1 % (Math.max(10, malaysiaB.length))}`;
   do {
       let commentn = [362, 415];
       let subsM = 0;
          let servicex = 1.0;
          let crownW = 5.0;
         subsM *= parseInt(`${crownW}`);
         servicex /= Math.max(2, parseFloat(`${parseInt(`${servicex}`) + 3}`));
      do {
         commentn = [commentn.length ^ subsM];
         if (1841510 == commentn.length) {
            break;
         }
      } while (((3 ^ subsM) >= 5 && 4 >= (3 ^ commentn.length)) && (1841510 == commentn.length));
      if ((subsM | 1) >= 2) {
         commentn.push(subsM << (Math.min(commentn.length, 5)));
      }
          let mergerq = String.fromCharCode(113,95,50,57,95,115,101,108,101,99,116,111,112,0);
          let unread8 = 4.0;
         subsM &= (mergerq == String.fromCharCode(83,0) ? mergerq.length : subsM);
         unread8 /= Math.max(1, parseFloat(`${1 % (Math.max(parseInt(`${unread8}`), 8))}`));
      do {
         commentn = [subsM ^ 3];
         if (commentn.length == 4751533) {
            break;
         }
      } while ((commentn.length == 4751533) && ((3 & commentn.length) == 4));
      for (let a = 0; a < 3; a++) {
         commentn.push(commentn.length);
      }
      libavdevicer /= Math.max((parseFloat(`${actions8 == String.fromCharCode(56,0) ? actions8.length : malaysiaB.length}`)), 5);
      if (1012436.0 == libavdevicer) {
         break;
      }
   } while ((3 >= malaysiaB.length) && (1012436.0 == libavdevicer));
   while (5 == loginU.length) {
      robotoK = `${parseInt(`${libavdevicer}`)}`;
      break;
   }
      libavdevicer /= Math.max(parseFloat(`${actions8.length ^ loginU.length}`), 5);

    }
  };
  const onLoadStart = () => {
       let awayf = 4;
    let placementO = new Map([[String.fromCharCode(112,111,108,105,99,101,95,105,95,52,48,0),812], [String.fromCharCode(100,111,103,95,56,95,49,56,0),134], [String.fromCharCode(112,95,57,50,95,103,101,116,116,101,114,0),447]]);
    let leakcheckero = String.fromCharCode(99,111,109,112,97,110,100,95,109,95,53,50,0);
    let m_unlockO = [String.fromCharCode(101,120,112,105,114,97,116,105,111,110,115,95,106,95,55,55,0), String.fromCharCode(104,95,51,55,95,108,97,114,112,111,108,121,0)];
    let fileS = new Map([[String.fromCharCode(121,95,56,53,95,99,114,111,115,115,112,111,115,116,0),597], [String.fromCharCode(117,115,97,103,101,95,98,95,56,48,0),401]]);
    let reactnativejsO = true;
    let modeV = [String.fromCharCode(99,111,111,114,100,105,110,97,116,105,111,110,95,114,95,51,51,0), String.fromCharCode(99,114,101,100,101,110,116,105,97,108,115,95,111,95,51,50,0), String.fromCharCode(116,105,109,101,102,105,108,116,101,114,95,120,95,56,53,0)];
    let yellowR = String.fromCharCode(121,117,118,112,95,111,95,57,55,0);
    let dplusb = String.fromCharCode(118,95,54,50,95,115,112,97,110,115,0);
      awayf += (leakcheckero == String.fromCharCode(98,0) ? leakcheckero.length : placementO.size);
      placementO[`${awayf}`] = 2;
   if (5 == (fileS.size | modeV.length) && 5 == (fileS.size | modeV.length)) {
      fileS = new Map([[`${placementO.size}`, leakcheckero.length - 1]]);
   }
   for (let s = 0; s < 1; s++) {
      fileS[`${modeV.length}`] = modeV.length >> (Math.min(2, Math.abs(placementO.size)));
   }

    

      m_unlockO = [((reactnativejsO ? 2 : 3) ^ fileS.size)];
   while (fileS.size > 5) {
      fileS[`${reactnativejsO}`] = ((reactnativejsO ? 5 : 2) & 3);
      break;
   }
   while (3 >= (leakcheckero.length >> (Math.min(Math.abs(4), 5))) && (4 >> (Math.min(3, Math.abs(fileS.size)))) >= 5) {
       let libreactnativejniY = String.fromCharCode(121,95,55,55,95,115,119,105,116,99,104,101,114,0);
       let libturbomodulejsijnia = [String.fromCharCode(122,95,57,54,95,112,117,114,112,111,115,101,0), String.fromCharCode(103,97,109,117,116,95,122,95,50,52,0)];
       let x_countS = new Map([[String.fromCharCode(111,102,102,101,114,95,98,95,49,48,0),57], [String.fromCharCode(98,95,54,56,95,116,111,109,98,117,102,0),53]]);
       let windL = String.fromCharCode(105,110,100,105,99,105,101,115,95,105,95,57,51,0);
         libreactnativejniY = `${2 | libturbomodulejsijnia.length}`;
      if (libreactnativejniY.length >= 5) {
         libturbomodulejsijnia.push(libturbomodulejsijnia.length / (Math.max(3, 7)));
      }
      do {
          let downn = String.fromCharCode(111,110,101,105,110,99,104,95,106,95,49,49,0);
          let foregroundV = 4;
          let math9 = 1.0;
         libreactnativejniY = `${libturbomodulejsijnia.length ^ windL.length}`;
         downn = `${downn.length}`;
         foregroundV /= Math.max(parseInt(`${math9}`), 1);
         math9 += parseInt(`${math9}`);
         if (4313261 == libreactnativejniY.length) {
            break;
         }
      } while ((4313261 == libreactnativejniY.length) && (!libreactnativejniY.includes(`${windL.length}`)));
          let modaly = String.fromCharCode(102,95,53,53,95,116,97,103,115,116,114,0);
         windL = `${windL.length % 3}`;
         modaly += `${modaly.length}`;
          let reminderJ = String.fromCharCode(114,95,52,54,95,97,100,109,105,110,0);
          let bufferK = true;
          let w_unlockA = new Map([[String.fromCharCode(102,95,52,52,95,105,110,112,111,115,0),906], [String.fromCharCode(119,101,108,115,100,101,99,100,101,109,111,95,112,95,54,54,0),965]]);
         libreactnativejniY = `${w_unlockA.size}`;
         reminderJ += `${((bufferK ? 5 : 1) + 3)}`;
         bufferK = !bufferK;
         w_unlockA = new Map([[reminderJ, (reminderJ == String.fromCharCode(84,0) ? (bufferK ? 5 : 3) : reminderJ.length)]]);
         x_countS[libreactnativejniY] = libreactnativejniY.length / (Math.max(3, windL.length));
      for (let g = 0; g < 1; g++) {
          let incidentx = String.fromCharCode(98,111,117,110,100,101,100,95,98,95,50,54,0);
          let cornerW = 5.0;
         libreactnativejniY += `${parseInt(`${cornerW}`)}`;
         incidentx += `${incidentx.length - 2}`;
         cornerW *= parseFloat(`${incidentx.length}`);
      }
         x_countS[libreactnativejniY] = (libreactnativejniY == String.fromCharCode(111,0) ? libreactnativejniY.length : x_countS.size);
         libreactnativejniY += `${1 | x_countS.size}`;
      for (let l = 0; l < 2; l++) {
         libturbomodulejsijnia = [1];
      }
          let whiteS = String.fromCharCode(116,95,56,53,95,105,112,108,105,109,97,103,101,0);
          let moono = [659, 297];
          let qaage = String.fromCharCode(101,95,56,50,95,109,105,110,113,0);
         libreactnativejniY += `${(String.fromCharCode(88,0) == qaage ? x_countS.size : qaage.length)}`;
         whiteS += `${(whiteS == String.fromCharCode(119,0) ? whiteS.length : moono.length)}`;
         moono = [moono.length + whiteS.length];
      do {
          let thailandO = String.fromCharCode(97,114,114,105,118,97,108,95,54,95,51,50,0);
          let mintegralY = true;
          let stringss = [468, 295, 208];
         windL += `${(libreactnativejniY == String.fromCharCode(113,0) ? libturbomodulejsijnia.length : libreactnativejniY.length)}`;
         thailandO = `${thailandO.length + stringss.length}`;
         mintegralY = stringss.length < 61 || mintegralY;
         if (windL.length == 4352750) {
            break;
         }
      } while (((2 ^ windL.length) <= 1 && 5 <= (2 ^ windL.length)) && (windL.length == 4352750));
      leakcheckero += `${modeV.length ^ windL.length}`;
      break;
   }
      placementO[`${modeV.length}`] = modeV.length;
    

      leakcheckero += `${yellowR.length + 2}`;
       let rncorez = String.fromCharCode(116,114,97,99,105,110,103,95,110,95,55,51,0);
       let holderw = 5.0;
         holderw /= Math.max(3, parseFloat(`${2}`));
         holderw /= Math.max(parseFloat(`${parseInt(`${holderw}`)}`), 1);
      while (rncorez.startsWith(`${holderw}`)) {
         holderw -= parseFloat(`${2}`);
         break;
      }
      for (let s = 0; s < 2; s++) {
          let nativeexi = false;
          let sentryi = 4.0;
          let entryF = [290, 191, 273];
          let binddatas4 = String.fromCharCode(119,95,52,52,95,110,111,109,105,110,97,108,0);
          let hooksr = false;
         holderw += parseFloat(`${binddatas4.length}`);
         nativeexi = entryF.length == 90 && nativeexi;
         sentryi -= 3 / (Math.max(6, parseInt(`${sentryi}`)));
         entryF = [2 + entryF.length];
         binddatas4 = `${2 % (Math.max(5, parseInt(`${sentryi}`)))}`;
         hooksr = !nativeexi;
      }
      for (let e = 0; e < 3; e++) {
         rncorez += `${rncorez.length * parseInt(`${holderw}`)}`;
      }
       let friendsl = String.fromCharCode(99,104,111,111,115,105,110,103,95,113,95,51,54,0);
      fileS = new Map([[`${fileS.size}`, 2 / (Math.max(1, m_unlockO.length))]]);
      yellowR = `${awayf ^ placementO.size}`;
   if (5 == (fileS.size >> (Math.min(Math.abs(1), 4))) || 5 == (fileS.size >> (Math.min(Math.abs(1), 5)))) {
      placementO[leakcheckero] = 3 + leakcheckero.length;
   }
    setIsLoading(true);
   while (5 >= (modeV.length + awayf) && (awayf + modeV.length) >= 5) {
      modeV = [(2 >> (Math.min(5, Math.abs((reactnativejsO ? 3 : 1)))))];
      break;
   }
   while ((5 * leakcheckero.length) <= 4 && 3 <= (5 * leakcheckero.length)) {
      leakcheckero += `${(yellowR == String.fromCharCode(113,0) ? yellowR.length : modeV.length)}`;
      break;
   }
      placementO = new Map([[`${fileS.size}`, m_unlockO.length >> (Math.min(Math.abs(1), 5))]]);
      modeV.push(modeV.length);

    if (typeof props.onLoadStart === 'function') {

      yellowR += `${awayf * placementO.size}`;
      modeV.push(1);
      fileS = new Map([[`${modeV.length}`, (modeV.length & (reactnativejsO ? 2 : 3))]]);
   if (!Array.from(placementO.keys()).includes(`${awayf}`)) {
      placementO[`${modeV.length}`] = placementO.size;
   }
      props.onLoadStart(...arguments);
   if (awayf == 4 && 1 == (awayf << (Math.min(Math.abs(4), 3)))) {
      awayf ^= 1;
   }
   while (!Array.from(fileS.values()).includes(awayf)) {
      awayf |= fileS.size;
      break;
   }
      placementO = new Map([[yellowR, 1 * yellowR.length]]);
       let libcxxcomponentsU = new Map([[String.fromCharCode(97,95,53,50,95,121,113,117,97,110,116,0),854], [String.fromCharCode(122,95,57,49,95,104,97,115,104,107,101,121,0),241]]);
       let description__tK = String.fromCharCode(97,108,105,103,110,109,101,110,116,95,102,95,53,57,0);
       let mergerh = false;
      if (!mergerh || 5 < description__tK.length) {
         description__tK = "3";
      }
      while (3 == (libcxxcomponentsU.size - description__tK.length) || (libcxxcomponentsU.size - 3) == 1) {
         description__tK += `${libcxxcomponentsU.size}`;
         break;
      }
          let telegram9 = String.fromCharCode(119,101,98,109,105,100,115,95,107,95,55,57,0);
         mergerh = libcxxcomponentsU.size > 55 && telegram9.length > 55;
         libcxxcomponentsU = new Map([[`${libcxxcomponentsU.size}`, description__tK.length | libcxxcomponentsU.size]]);
         libcxxcomponentsU = new Map([[`${libcxxcomponentsU.size}`, libcxxcomponentsU.size]]);
      while (!mergerh) {
          let constantsc = new Map([[String.fromCharCode(119,95,50,49,95,115,105,109,112,108,105,102,121,0),String.fromCharCode(117,95,51,95,99,111,108,117,109,115,0)], [String.fromCharCode(118,97,97,99,97,108,99,117,108,97,116,105,111,110,95,112,95,56,52,0),String.fromCharCode(116,114,105,101,115,95,102,95,57,52,0)], [String.fromCharCode(102,95,56,53,95,101,110,99,111,100,105,110,103,0),String.fromCharCode(97,110,110,101,120,98,95,111,95,56,55,0)]]);
          let livep = new Map([[String.fromCharCode(112,114,111,112,95,51,95,51,57,0),false ], [String.fromCharCode(102,116,118,98,108,97,110,107,95,48,95,51,49,0),true ]]);
          let nterstitial4 = 4;
          let libreactperfloggerjniZ = 3.0;
         description__tK += `${description__tK.length ^ nterstitial4}`;
         constantsc = new Map([[`${constantsc.size}`, livep.size - 2]]);
         livep = new Map([[`${livep.size}`, parseInt(`${libreactperfloggerjniZ}`)]]);
         nterstitial4 >>= Math.min(Math.abs(constantsc.size), 5);
         libreactperfloggerjniZ += parseFloat(`${3}`);
         break;
      }
         description__tK += `${1 - libcxxcomponentsU.size}`;
       let pagination9 = 0.0;
       let delegate_c2h = 1.0;
      while ((delegate_c2h - 3) == 4.2) {
         pagination9 *= description__tK.length;
         break;
      }
      placementO[`${placementO.size}`] = placementO.size;

    }
  };
  const onLoad = () => {
       let launcher2 = String.fromCharCode(104,114,97,109,95,57,95,57,51,0);
    let cross6 = new Map([[String.fromCharCode(117,117,105,100,112,114,111,102,95,120,95,50,55,0),true ], [String.fromCharCode(121,117,118,95,54,95,51,52,0),false ]]);
    let relatedx = String.fromCharCode(108,95,51,54,95,117,110,114,101,103,105,115,116,101,114,101,100,0);
    let pingx = false;
    let clockw = 0.0;
    let upgrade9 = true;
    let logoW = String.fromCharCode(100,101,112,114,101,99,105,97,116,101,100,104,95,116,95,55,51,0);
    let gdtadvR = [280, 662, 276];
    let libimagepipeliner = String.fromCharCode(101,95,49,48,48,95,117,112,108,111,97,100,0);
    let androidf = true;
    let plashC = [416, 987];
    let mbbannerP = 5.0;
    let related_ = String.fromCharCode(101,95,56,53,95,100,117,112,108,105,99,97,116,111,114,0);
    let brightnessJ = new Map([[String.fromCharCode(117,110,115,101,108,101,99,116,95,118,95,51,51,0),168], [String.fromCharCode(114,101,99,112,95,111,95,53,51,0),183]]);
       let eactx = new Map([[String.fromCharCode(100,95,49,95,100,111,109,105,110,97,110,116,0),845], [String.fromCharCode(115,101,109,105,95,110,95,49,0),489], [String.fromCharCode(112,97,117,115,101,95,109,95,51,51,0),960]]);
      while (eactx[`${eactx.size}`] != null) {
         eactx = new Map([[`${eactx.size}`, 2]]);
         break;
      }
         eactx = new Map([[`${eactx.size}`, 1]]);
      while ((eactx.size + 2) <= 1) {
         eactx[`${eactx.size}`] = eactx.size;
         break;
      }
      clockw *= parseFloat(`${1 ^ gdtadvR.length}`);
      mbbannerP -= parseFloat(`${libimagepipeliner.length >> (Math.min(Math.abs(2), 5))}`);
      upgrade9 = !libimagepipeliner.endsWith(`${mbbannerP}`);
      gdtadvR.push(libimagepipeliner.length / (Math.max(5, logoW.length)));
      logoW = `${relatedx.length + 3}`;
   if (relatedx.length <= 1) {
       let orientationP = String.fromCharCode(111,110,115,101,116,95,56,95,56,57,0);
          let roundD = 2.0;
         orientationP = `${orientationP.length - 3}`;
         roundD *= parseFloat(`${parseInt(`${roundD}`) % (Math.max(4, parseInt(`${roundD}`)))}`);
      if (orientationP.length >= 1) {
         orientationP = `${(String.fromCharCode(112,0) == orientationP ? orientationP.length : orientationP.length)}`;
      }
         orientationP = `${orientationP.length & orientationP.length}`;
      relatedx = "1";
   }

    

   while (!upgrade9) {
       let sendW = String.fromCharCode(116,105,109,101,115,99,97,108,101,95,109,95,48,0);
       let umengH = 3.0;
       let otherO = String.fromCharCode(104,95,53,54,95,118,108,98,117,102,0);
       let subs6 = String.fromCharCode(119,95,56,50,95,116,104,114,111,119,105,110,103,0);
       let starj = false;
         umengH -= parseInt(`${umengH}`);
      while (subs6 == String.fromCharCode(104,0) || sendW != String.fromCharCode(54,0)) {
          let shirty = 4;
         subs6 = "3";
         shirty += shirty - shirty;
         break;
      }
         otherO = `${parseInt(`${umengH}`) % (Math.max(2, 4))}`;
      do {
          let hcopy_j7g = new Map([[String.fromCharCode(118,97,108,117,101,95,99,95,49,50,0),String.fromCharCode(118,95,50,48,95,114,116,112,0)], [String.fromCharCode(106,95,49,49,95,97,99,116,105,111,110,0),String.fromCharCode(100,117,114,105,110,103,95,120,95,49,49,0)], [String.fromCharCode(101,95,52,50,95,115,116,105,102,102,110,101,115,115,0),String.fromCharCode(99,101,110,99,95,111,95,57,53,0)]]);
         otherO += `${((starj ? 2 : 1) / (Math.max(hcopy_j7g.size, 5)))}`;
         if (4798673 == otherO.length) {
            break;
         }
      } while ((4798673 == otherO.length) && (!subs6.startsWith(`${otherO.length}`)));
      for (let a = 0; a < 1; a++) {
          let helper0 = 4.0;
          let mini7 = String.fromCharCode(99,95,52,57,95,112,117,114,112,111,115,101,102,117,108,0);
         subs6 += `${mini7.length / (Math.max(6, parseInt(`${helper0}`)))}`;
      }
         otherO = `${((starj ? 4 : 4) & parseInt(`${umengH}`))}`;
       let hongkongE = 0.0;
       let logo5 = 3.0;
          let detailI = 3.0;
          let ajax3 = 4.0;
         umengH += 2;
         detailI *= parseFloat(`${parseInt(`${detailI}`) % (Math.max(parseInt(`${ajax3}`), 10))}`);
         ajax3 *= parseInt(`${detailI}`);
      while (3 < sendW.length) {
          let graya = String.fromCharCode(111,95,51,95,100,105,115,99,97,114,100,101,100,0);
         umengH -= parseInt(`${logo5}`);
         graya += `${graya.length | 1}`;
         break;
      }
      while (2.3 >= umengH) {
          let rulesp = new Map([[String.fromCharCode(112,95,50,50,95,112,108,97,121,101,114,0),254], [String.fromCharCode(97,95,55,53,95,114,103,98,105,0),608]]);
          let models8 = 2.0;
         otherO += `${otherO.length & subs6.length}`;
         rulesp[`${models8}`] = rulesp.size << (Math.min(Math.abs(1), 3));
         models8 += parseFloat(`${parseInt(`${models8}`) | 1}`);
         break;
      }
      do {
         umengH /= Math.max(sendW.length * parseInt(`${logo5}`), 5);
         if (104622.0 == umengH) {
            break;
         }
      } while ((3.62 < hongkongE) && (104622.0 == umengH));
      while (1 > (otherO.length % (Math.max(4, 6))) || (parseInt(`${logo5}`) / (Math.max(5, otherO.length))) > 4) {
         otherO = `${parseInt(`${logo5}`)}`;
         break;
      }
          let o_centerB = String.fromCharCode(105,110,116,114,97,120,109,98,117,118,95,108,95,56,51,0);
          let humidity8 = false;
          let handler2 = 1;
         sendW = `${sendW.length}`;
         o_centerB = `${o_centerB.length | handler2}`;
         humidity8 = !o_centerB.includes(`${humidity8}`);
         handler2 >>= Math.min(Math.abs(((humidity8 ? 1 : 5) + 2)), 2);
       let profile7 = String.fromCharCode(101,95,50,55,95,97,112,112,114,111,120,0);
       let textlayoutmanagerv = String.fromCharCode(104,101,97,100,115,101,116,95,111,95,55,49,0);
         starj = 24.85 == hongkongE && logo5 == 24.85;
      upgrade9 = cross6.size >= 60;
      break;
   }
   for (let j = 0; j < 2; j++) {
      related_ += `${cross6.size % (Math.max(7, gdtadvR.length))}`;
   }
   if ((4 + gdtadvR.length) <= 5 || 4 <= (4 + gdtadvR.length)) {
      gdtadvR.push(relatedx.length | 1);
   }
       let servicea = String.fromCharCode(115,95,57,51,95,116,114,120,116,0);
         servicea = `${servicea.length % (Math.max(servicea.length, 9))}`;
       let usernamel = new Map([[String.fromCharCode(104,95,56,50,95,101,120,116,114,97,102,105,101,108,100,0),326], [String.fromCharCode(120,95,51,57,95,115,117,99,99,101,101,100,101,100,0),518]]);
      while (1 >= usernamel.size) {
          let langkeym = true;
         usernamel = new Map([[`${usernamel.size}`, usernamel.size & 1]]);
         break;
      }
      clockw -= parseFloat(`${gdtadvR.length & related_.length}`);
      launcher2 += `${((androidf ? 1 : 1) * 2)}`;
   while (libimagepipeliner.length == launcher2.length) {
      libimagepipeliner += `${logoW.length ^ 1}`;
      break;
   }
    setIsLoading(false);
      brightnessJ[logoW] = ((upgrade9 ? 1 : 3) - logoW.length);
   while (related_ == String.fromCharCode(81,0)) {
      launcher2 = `${launcher2.length | 1}`;
      break;
   }
      logoW += `${3 >> (Math.min(Math.abs(parseInt(`${clockw}`)), 4))}`;
       let popupe = 3.0;
       let libsentryb = new Map([[String.fromCharCode(107,95,57,51,95,108,105,98,101,118,101,110,116,0),774], [String.fromCharCode(99,111,112,121,102,100,95,111,95,53,54,0),555]]);
      for (let i = 0; i < 1; i++) {
          let gpayN = new Map([[String.fromCharCode(114,95,49,50,95,114,101,115,111,117,114,99,101,0),true ], [String.fromCharCode(117,95,55,50,95,115,109,118,106,112,101,103,0),true ], [String.fromCharCode(118,95,53,49,95,101,100,103,101,0),false ]]);
         libsentryb[`${popupe}`] = 2;
         gpayN = new Map([[`${gpayN.size}`, gpayN.size ^ gpayN.size]]);
      }
      do {
          let backC = 4;
          let shootT = 3;
          let lightd = 0.0;
          let friendsn = [695, 70, 551];
         popupe -= parseFloat(`${shootT | parseInt(`${lightd}`)}`);
         backC *= friendsn.length;
         shootT &= 1;
         lightd *= parseFloat(`${backC << (Math.min(1, Math.abs(2)))}`);
         friendsn.push(friendsn.length);
         if (popupe == 2823483.0) {
            break;
         }
      } while ((popupe > parseFloat(`${libsentryb.size}`)) && (popupe == 2823483.0));
      while ((2.97 + popupe) < 3.46) {
         libsentryb = new Map([[`${libsentryb.size}`, libsentryb.size]]);
         break;
      }
          let popupg = String.fromCharCode(102,111,114,95,99,95,54,52,0);
          let typingA = new Map([[String.fromCharCode(114,101,112,108,121,95,106,95,50,54,0),898], [String.fromCharCode(115,97,110,105,116,105,122,101,114,95,51,95,49,53,0),536], [String.fromCharCode(97,95,53,57,95,97,108,108,112,97,115,115,0),319]]);
          let mappingf = String.fromCharCode(115,95,51,54,95,99,111,109,109,117,110,105,99,97,116,111,114,0);
         libsentryb = new Map([[`${libsentryb.size}`, parseInt(`${popupe}`)]]);
         popupg = `${(mappingf == String.fromCharCode(70,0) ? popupg.length : mappingf.length)}`;
         typingA = new Map([[mappingf, 2 << (Math.min(2, mappingf.length))]]);
      for (let d = 0; d < 3; d++) {
         libsentryb = new Map([[`${libsentryb.size}`, parseInt(`${popupe}`)]]);
      }
          let analytic5 = 0.0;
         libsentryb = new Map([[`${libsentryb.size}`, libsentryb.size]]);
         analytic5 += parseInt(`${analytic5}`);
      gdtadvR.push((logoW == String.fromCharCode(85,0) ? logoW.length : parseInt(`${popupe}`)));
       let manifestR = String.fromCharCode(111,95,55,56,95,112,114,101,97,109,98,117,108,97,0);
       let chartU = 2.0;
      if (manifestR.length > 5) {
          let routerC = false;
          let libswscaleU = String.fromCharCode(100,95,53,53,95,100,101,99,111,100,101,114,115,0);
          let description_nzt = 4.0;
         chartU /= Math.max(5, (parseFloat(`${(routerC ? 3 : 3) % (Math.max(libswscaleU.length, 7))}`)));
         routerC = description_nzt <= description_nzt;
         libswscaleU = "1";
      }
      for (let g = 0; g < 3; g++) {
         manifestR = `${1 & parseInt(`${chartU}`)}`;
      }
         chartU /= Math.max(parseFloat(`${2}`), 3);
      while (3.84 <= (chartU + parseFloat(`${manifestR.length}`)) && 2.61 <= (3.84 + chartU)) {
          let modity_ = 2.0;
          let tooltipsx = 5.0;
          let share4 = String.fromCharCode(97,95,51,49,95,115,117,98,116,121,112,101,0);
         manifestR = "3";
         modity_ *= 3 & parseInt(`${modity_}`);
         tooltipsx /= Math.max(5, (String.fromCharCode(87,0) == share4 ? share4.length : parseInt(`${modity_}`)));
         break;
      }
         chartU -= parseFloat(`${1}`);
         chartU /= Math.max(parseFloat(`${manifestR.length - parseInt(`${chartU}`)}`), 1);
      brightnessJ[`${pingx}`] = cross6.size;
   while (!pingx) {
      brightnessJ = new Map([[`${gdtadvR.length}`, gdtadvR.length]]);
      break;
   }

    setIsError(false);
      clockw /= Math.max(parseFloat(`${libimagepipeliner.length >> (Math.min(Math.abs(3), 2))}`), 5);
      libimagepipeliner = `${gdtadvR.length >> (Math.min(Math.abs(3), 4))}`;
   if (mbbannerP <= 4.32) {
      mbbannerP += parseFloat(`${libimagepipeliner.length & 1}`);
   }
   for (let s = 0; s < 2; s++) {
      logoW = `${parseInt(`${clockw}`) * 2}`;
   }
   do {
       let resend9 = 5.0;
      if (resend9 >= resend9) {
          let downc = 2;
          let entryq = new Map([[String.fromCharCode(109,111,118,101,112,97,103,101,95,97,95,56,54,0),false ], [String.fromCharCode(109,95,52,48,95,106,109,108,105,115,116,0),false ], [String.fromCharCode(102,95,52,49,95,100,99,112,114,101,100,0),true ]]);
         resend9 -= parseFloat(`${downc / (Math.max(entryq.size, 5))}`);
      }
         resend9 += parseFloat(`${1}`);
      do {
          let faviconO = new Map([[String.fromCharCode(109,101,116,101,114,95,118,95,49,52,0),752], [String.fromCharCode(115,95,51,53,95,112,97,115,115,0),938]]);
          let nativemodulen = 2.0;
          let telegramA = false;
         resend9 -= parseFloat(`${1}`);
         faviconO[`${telegramA}`] = (parseInt(`${nativemodulen}`) >> (Math.min(2, Math.abs((telegramA ? 1 : 2)))));
         nativemodulen -= parseFloat(`${parseInt(`${nativemodulen}`) / 1}`);
         if (3454763.0 == resend9) {
            break;
         }
      } while ((1.21 >= (resend9 * 2)) && (3454763.0 == resend9));
      plashC.push(((upgrade9 ? 4 : 5) >> (Math.min(logoW.length, 5))));
      if (plashC.length == 3929996) {
         break;
      }
   } while (((5 ^ plashC.length) >= 4 && 5 >= plashC.length) && (plashC.length == 3929996));
   if (libimagepipeliner.length >= 5) {
      libimagepipeliner = `${((androidf ? 4 : 4))}`;
   }

    if (typeof props.onLoad === 'function') {

      upgrade9 = (42 < (brightnessJ.size - (!androidf ? brightnessJ.size : 29)));
      pingx = related_.length > 56;
       let popupT = String.fromCharCode(114,95,52,57,95,100,98,108,113,117,111,116,101,0);
       let libjsiW = 0.0;
         popupT = `${parseInt(`${libjsiW}`)}`;
          let greyu = [909, 764, 253];
         popupT += `${parseInt(`${libjsiW}`)}`;
         greyu = [greyu.length - 3];
      while ((1.40 - libjsiW) < 3.65 && 5 < (popupT.length % 2)) {
          let classesu = String.fromCharCode(103,95,56,53,95,118,115,99,97,108,101,0);
         popupT += `${1 % (Math.max(8, classesu.length))}`;
         break;
      }
       let renewx = String.fromCharCode(107,101,121,102,114,97,109,101,115,95,54,95,52,48,0);
       let libavfilterV = [734, 945];
       let recommendationC = [String.fromCharCode(98,95,52,54,95,111,119,110,108,111,97,100,0), String.fromCharCode(100,95,51,52,95,97,116,116,105,98,117,116,101,0)];
         recommendationC = [renewx.length ^ 3];
      pingx = 61 <= relatedx.length;
   do {
      logoW += `${((pingx ? 3 : 1) % 1)}`;
      if (String.fromCharCode(53,53,116,0) == logoW) {
         break;
      }
   } while ((String.fromCharCode(53,53,116,0) == logoW) && ((logoW.length >> (Math.min(Math.abs(1), 3))) < 5));
   for (let u = 0; u < 3; u++) {
      plashC.push(brightnessJ.size);
   }
       let matchS = 4.0;
         matchS += parseFloat(`${parseInt(`${matchS}`) % (Math.max(parseInt(`${matchS}`), 8))}`);
      if (5.73 > (matchS + matchS) || 3.34 > (matchS + 5.73)) {
         matchS += parseFloat(`${parseInt(`${matchS}`) << (Math.min(2, Math.abs(parseInt(`${matchS}`))))}`);
      }
         matchS += parseFloat(`${parseInt(`${matchS}`)}`);
      logoW += `${((pingx ? 2 : 4) + parseInt(`${mbbannerP}`))}`;
      props.onLoad(...arguments);
   while (2.37 >= (mbbannerP - 3.83)) {
      mbbannerP /= Math.max(2, parseFloat(`${parseInt(`${clockw}`) ^ 1}`));
      break;
   }
   do {
       let ajaxf = new Map([[String.fromCharCode(98,101,104,105,110,100,95,120,95,50,52,0),String.fromCharCode(102,95,52,48,95,111,110,97,118,99,0)], [String.fromCharCode(99,95,53,52,95,97,100,100,102,0),String.fromCharCode(116,111,110,101,95,51,95,54,0)]]);
       let gmail0 = String.fromCharCode(97,115,111,108,117,116,101,95,120,95,51,49,0);
       let typesF = 2.0;
       let combinedX = false;
      while (5.30 < (2.55 + typesF)) {
          let termsq = String.fromCharCode(112,101,114,109,117,116,101,95,56,95,50,0);
          let selections = 0;
         typesF += parseFloat(`${termsq.length | parseInt(`${typesF}`)}`);
         termsq = `${selections}`;
         break;
      }
         gmail0 = `${parseInt(`${typesF}`) - 3}`;
      do {
         combinedX = 8 == gmail0.length;
         if (combinedX ? !combinedX : combinedX) {
            break;
         }
      } while ((combinedX ? !combinedX : combinedX) && (ajaxf.size >= 1 || 3 >= (ajaxf.size % (Math.max(1, 3)))));
      do {
         ajaxf[`${combinedX}`] = 2 % (Math.max(parseInt(`${typesF}`), 4));
         if (3621200 == ajaxf.size) {
            break;
         }
      } while ((gmail0.length <= ajaxf.size) && (3621200 == ajaxf.size));
      for (let y = 0; y < 2; y++) {
         ajaxf[`${gmail0}`] = gmail0.length;
      }
      for (let o = 0; o < 1; o++) {
         combinedX = 20.5 < typesF;
      }
          let sentrya = String.fromCharCode(110,95,55,95,115,111,99,111,110,110,101,99,116,0);
          let matchN = String.fromCharCode(109,105,112,115,95,114,95,53,57,0);
         ajaxf = new Map([[`${typesF}`, parseInt(`${typesF}`) & 3]]);
         sentrya += `${2 ^ matchN.length}`;
         matchN = "3";
      do {
          let placementL = String.fromCharCode(114,95,53,54,95,110,97,109,101,100,0);
          let usernameI = new Map([[String.fromCharCode(118,111,105,99,101,115,95,102,95,50,53,0),false ], [String.fromCharCode(98,95,55,54,95,112,108,97,110,97,114,120,0),true ]]);
          let foundw = String.fromCharCode(121,95,50,54,95,104,111,108,101,115,0);
          let auto_pT = String.fromCharCode(108,115,102,108,115,112,95,100,95,55,48,0);
          let country9 = true;
         typesF -= (parseFloat(`${String.fromCharCode(56,0) == gmail0 ? (combinedX ? 2 : 2) : gmail0.length}`));
         placementL = `${(placementL == String.fromCharCode(116,0) ? (country9 ? 1 : 4) : placementL.length)}`;
         usernameI = new Map([[`${country9}`, (foundw == String.fromCharCode(101,0) ? foundw.length : (country9 ? 5 : 4))]]);
         auto_pT = `${auto_pT.length ^ 3}`;
         if (typesF == 1142804.0) {
            break;
         }
      } while ((typesF == 1142804.0) && (5.89 >= (1.66 - typesF)));
          let roundb = 3.0;
         typesF *= parseFloat(`${1}`);
         roundb -= parseFloat(`${parseInt(`${roundb}`) >> (Math.min(1, Math.abs(3)))}`);
      do {
          let adult2 = 4.0;
         gmail0 += `${(parseInt(`${typesF}`) - (combinedX ? 5 : 4))}`;
         adult2 *= parseInt(`${adult2}`);
         if (String.fromCharCode(103,105,101,100,52,54,95,111,113,0) == gmail0) {
            break;
         }
      } while ((String.fromCharCode(103,105,101,100,52,54,95,111,113,0) == gmail0) && (gmail0.length < 2));
         gmail0 += `${gmail0.length}`;
       let loadings = 0.0;
      gdtadvR = [brightnessJ.size >> (Math.min(Math.abs(1), 3))];
      if (gdtadvR.length == 799712) {
         break;
      }
   } while ((gdtadvR.length == 799712) && (5 > (1 | gdtadvR.length) && (gdtadvR.length | plashC.length) > 1));
      androidf = String.fromCharCode(111,0) == relatedx;
   for (let c = 0; c < 3; c++) {
       let default_v7 = String.fromCharCode(102,101,116,99,104,95,101,95,55,52,0);
       let constantsZ = 4.0;
       let arrowQ = new Map([[String.fromCharCode(102,95,49,48,48,95,118,105,115,117,97,108,108,121,0),false ], [String.fromCharCode(110,111,116,105,102,105,101,100,95,51,95,57,0),false ]]);
       let leakcheckerD = new Map([[String.fromCharCode(99,111,111,114,100,105,110,97,116,111,114,115,95,102,95,55,55,0),196], [String.fromCharCode(120,95,55,52,95,115,108,111,112,0),1000]]);
      for (let z = 0; z < 1; z++) {
          let ticka = String.fromCharCode(103,95,53,95,99,111,110,110,101,99,116,105,111,110,0);
         default_v7 = `${parseInt(`${constantsZ}`) ^ arrowQ.size}`;
         ticka = `${ticka.length >> (Math.min(Math.abs(1), 1))}`;
      }
          let injuryo = 0.0;
          let mbnativeadvancedD = [754, 217, 60];
         leakcheckerD = new Map([[`${mbnativeadvancedD.length}`, mbnativeadvancedD.length]]);
         injuryo += parseFloat(`${parseInt(`${injuryo}`) * 3}`);
      do {
          let indicator0 = new Map([[String.fromCharCode(97,110,121,95,121,95,50,49,0),String.fromCharCode(112,95,49,56,95,115,114,99,0)], [String.fromCharCode(101,95,54,48,95,105,110,115,105,100,101,0),String.fromCharCode(118,111,116,101,95,109,95,55,48,0)]]);
          let headerc = String.fromCharCode(104,101,97,100,101,114,115,95,49,95,51,51,0);
         arrowQ = new Map([[`${arrowQ.size}`, arrowQ.size]]);
         indicator0[`${headerc}`] = 3 ^ headerc.length;
         if (arrowQ.size == 190119) {
            break;
         }
      } while ((arrowQ.size == 190119) && (arrowQ[`${leakcheckerD.size}`] == null));
         constantsZ /= Math.max(3, parseInt(`${constantsZ}`) % (Math.max(arrowQ.size, 2)));
       let codegenV = [575, 447];
       let savei = 1;
          let arrowL = 1;
          let mailR = 0.0;
          let shareS = new Map([[String.fromCharCode(100,98,105,95,120,95,56,55,0),String.fromCharCode(99,111,115,105,95,52,95,56,0)], [String.fromCharCode(97,108,119,97,121,115,95,106,95,55,50,0),String.fromCharCode(103,95,56,51,95,103,115,117,98,0)], [String.fromCharCode(112,114,101,97,109,98,108,101,95,116,95,53,57,0),String.fromCharCode(116,114,101,122,111,114,95,50,95,56,0)]]);
         default_v7 = "1";
         arrowL <<= Math.min(Math.abs(arrowL), 1);
         mailR /= Math.max(3, parseInt(`${mailR}`) << (Math.min(Math.abs(shareS.size), 2)));
         shareS = new Map([[`${shareS.size}`, parseInt(`${mailR}`) & 1]]);
         arrowQ = new Map([[`${savei}`, default_v7.length / 3]]);
         savei >>= Math.min(Math.abs(arrowQ.size), 1);
      for (let l = 0; l < 1; l++) {
         arrowQ = new Map([[`${leakcheckerD.size}`, savei]]);
      }
      for (let l = 0; l < 3; l++) {
         constantsZ += 1;
      }
      do {
         leakcheckerD = new Map([[`${leakcheckerD.size}`, leakcheckerD.size]]);
         if (2775344 == leakcheckerD.size) {
            break;
         }
      } while ((2775344 == leakcheckerD.size) && (default_v7.includes(`${leakcheckerD.size}`)));
      upgrade9 = relatedx == String.fromCharCode(99,0);
   }
      relatedx = `${logoW.length}`;
      related_ = `${plashC.length}`;

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
       let moreE = 5;
    let gradleD = String.fromCharCode(105,110,100,101,120,101,100,95,57,95,56,50,0);
    let schedulerl = String.fromCharCode(119,114,105,116,101,98,105,116,115,95,121,95,50,48,0);
    let libreanimatedb = 4.0;
    let buttonu = 1.0;
    let watchj = 5;
    let holderB = 4;
    let downloadingr = new Map([[String.fromCharCode(116,114,97,110,115,102,111,114,109,101,100,95,120,95,50,50,0),true ], [String.fromCharCode(106,95,57,51,95,115,121,110,99,115,97,102,101,0),false ], [String.fromCharCode(115,108,111,112,101,95,112,95,50,56,0),false ]]);
    let contextJ = 5.0;
    let videoP = 4.0;
    let typesA = 2.0;
    let submit8 = 5;
   while (libreanimatedb < buttonu) {
      buttonu -= parseFloat(`${watchj >> (Math.min(Math.abs(2), 2))}`);
      break;
   }
      holderB *= schedulerl.length;

    if (!isLoading) {

   for (let v = 0; v < 3; v++) {
       let flipperB = String.fromCharCode(107,105,115,115,95,107,95,51,57,0);
       let rewardvideoN = true;
       let libsentryp = new Map([[String.fromCharCode(112,95,52,48,95,101,108,108,105,112,116,105,99,97,108,0),751], [String.fromCharCode(118,115,105,110,107,95,54,95,56,49,0),126], [String.fromCharCode(99,95,57,55,95,97,100,100,105,0),255]]);
       let progressc = 5.0;
       let disconnectedc = 3;
      for (let y = 0; y < 3; y++) {
          let nativeY = false;
          let countdownn = new Map([[String.fromCharCode(121,95,51,52,95,105,110,105,116,105,97,116,101,100,0),true ], [String.fromCharCode(98,121,114,121,95,107,95,54,52,0),false ], [String.fromCharCode(115,95,56,50,95,101,120,116,114,97,112,111,108,97,116,101,0),true ]]);
          let transferl = true;
          let crossf = 4;
         progressc += parseFloat(`${2 - parseInt(`${progressc}`)}`);
         nativeY = transferl;
         countdownn = new Map([[`${transferl}`, 3]]);
         crossf <<= Math.min(Math.abs(((nativeY ? 1 : 3) | crossf)), 1);
      }
         progressc += parseFloat(`${flipperB.length}`);
       let sellw = 5.0;
      while (3 < (disconnectedc + 2) || disconnectedc < 2) {
         rewardvideoN = libsentryp.size < 84;
         break;
      }
       let morea = String.fromCharCode(98,95,51,53,95,101,120,112,105,114,101,100,0);
       let soundF = String.fromCharCode(119,95,57,50,95,118,112,120,100,101,99,0);
         rewardvideoN = flipperB.length <= soundF.length;
         flipperB = "2";
      do {
         libsentryp[flipperB] = (String.fromCharCode(72,0) == flipperB ? libsentryp.size : flipperB.length);
         if (1261590 == libsentryp.size) {
            break;
         }
      } while ((1261590 == libsentryp.size) && (morea.length > libsentryp.size));
      for (let n = 0; n < 2; n++) {
         libsentryp = new Map([[`${sellw}`, morea.length & parseInt(`${sellw}`)]]);
      }
         libsentryp[`${progressc}`] = parseInt(`${progressc}`);
         soundF += `${((rewardvideoN ? 4 : 5) | libsentryp.size)}`;
      for (let k = 0; k < 2; k++) {
         morea += "2";
      }
          let libreactnativejnig = 0;
          let middleS = 3.0;
          let foregroundt = String.fromCharCode(97,95,50,48,0);
         disconnectedc &= 3 | flipperB.length;
         libreactnativejnig ^= foregroundt.length ^ parseInt(`${middleS}`);
         middleS -= parseFloat(`${parseInt(`${middleS}`) * 3}`);
         foregroundt = `${parseInt(`${middleS}`)}`;
         soundF += `${disconnectedc}`;
         soundF += `${disconnectedc | 3}`;
      schedulerl += `${((rewardvideoN ? 2 : 3) + watchj)}`;
   }
      downloadingr[gradleD] = gradleD.length;
      return null;
      contextJ /= Math.max(parseFloat(`${3}`), 5);
      moreE >>= Math.min(Math.abs(watchj + 1), 5);

    }
    return (
      <View style={VideoPlayerstyles.loader.container}>
        <Animated.Image
          source={require('./images/icons/xadsdkUpdates.png')}
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
       let statistics3 = new Map([[String.fromCharCode(116,111,97,115,116,115,95,98,95,52,57,0),619], [String.fromCharCode(117,95,57,51,95,98,105,113,117,97,100,0),655], [String.fromCharCode(111,112,97,99,105,116,121,95,118,95,56,54,0),638]]);
       let tramini2 = String.fromCharCode(114,95,54,52,95,114,101,111,112,101,110,0);
       let signinupt = [549, 130, 945];
          let delegate_zd = 3.0;
          let telemetryu = 1.0;
         signinupt.push(statistics3.size % 3);
         delegate_zd -= parseInt(`${delegate_zd}`) % 1;
         telemetryu -= 1;
      do {
         statistics3 = new Map([[`${statistics3.size}`, 2]]);
         if (statistics3.size == 4868394) {
            break;
         }
      } while ((tramini2.length <= 3) && (statistics3.size == 4868394));
      if (2 >= (4 ^ statistics3.size)) {
          let upgradeW = 1;
          let neon7 = String.fromCharCode(114,100,98,120,95,54,95,53,50,0);
          let security9 = 0;
          let canvast = 0.0;
         tramini2 = `${2 + statistics3.size}`;
         upgradeW /= Math.max(security9, 1);
         neon7 += `${(String.fromCharCode(98,0) == neon7 ? security9 : neon7.length)}`;
         canvast += (neon7 == String.fromCharCode(111,0) ? security9 : neon7.length);
      }
         tramini2 = `${(tramini2 == String.fromCharCode(107,0) ? tramini2.length : statistics3.size)}`;
      for (let z = 0; z < 3; z++) {
          let dicer = String.fromCharCode(109,95,56,55,95,99,111,110,115,116,114,117,99,116,111,114,109,97,103,105,99,0);
          let i_titleE = 2.0;
          let malaysiag = String.fromCharCode(103,95,52,54,95,101,113,117,101,115,116,0);
          let commentp = true;
         signinupt.push(1);
         dicer = `${malaysiag.length}`;
         i_titleE *= parseInt(`${i_titleE}`) / 2;
         malaysiag += `${(String.fromCharCode(109,0) == dicer ? parseInt(`${i_titleE}`) : dicer.length)}`;
         commentp = dicer.length >= malaysiag.length;
      }
         statistics3[`${tramini2}`] = statistics3.size & 1;
      if (!tramini2.startsWith(`${statistics3.size}`)) {
         tramini2 = `${(String.fromCharCode(48,0) == tramini2 ? tramini2.length : statistics3.size)}`;
      }
      for (let l = 0; l < 1; l++) {
         tramini2 += `${tramini2.length + signinupt.length}`;
      }
      if (3 >= (signinupt.length * tramini2.length) || (3 * signinupt.length) >= 1) {
         tramini2 = `${statistics3.size % (Math.max(signinupt.length, 5))}`;
      }
      schedulerl += `${(schedulerl == String.fromCharCode(119,0) ? watchj : schedulerl.length)}`;
      gradleD = `${parseInt(`${videoP}`) << (Math.min(2, Math.abs(3)))}`;

  };

  const onEnd = () => {
       let topicx = 0;
    let langY = String.fromCharCode(115,111,100,101,97,108,108,111,99,95,48,95,48,0);
    let videoz = 5;
    let buildn = 2.0;
    let settingq = String.fromCharCode(117,95,53,56,95,99,102,102,116,102,0);
    let activity9 = 3.0;
    let dplusb = true;
    let gradleO = 5;
    let theme3 = true;
    let windT = 0.0;
    let singleJ = [458, 892, 921];
    let collectionS = String.fromCharCode(115,116,114,101,97,109,105,100,95,121,95,57,56,0);
   for (let d = 0; d < 3; d++) {
       let libimagepipeline1 = String.fromCharCode(112,95,56,95,97,117,116,111,112,108,97,121,0);
         libimagepipeline1 = `${libimagepipeline1.length + libimagepipeline1.length}`;
         libimagepipeline1 = `${libimagepipeline1.length * 1}`;
          let streamingE = 4.0;
          let detailsD = [42, 991];
          let libreactperfloggerjniM = new Map([[String.fromCharCode(102,105,114,115,116,108,105,110,101,95,108,95,49,49,0),String.fromCharCode(109,105,109,101,95,117,95,55,53,0)], [String.fromCharCode(116,95,53,54,95,98,101,101,110,0),String.fromCharCode(99,95,49,95,100,97,105,0)], [String.fromCharCode(114,116,114,101,101,95,101,95,51,55,0),String.fromCharCode(104,95,56,95,97,99,111,109,112,114,101,115,115,111,114,0)]]);
         libimagepipeline1 += `${libimagepipeline1.length}`;
         streamingE -= parseFloat(`${detailsD.length & libreactperfloggerjniM.size}`);
         detailsD.push(parseInt(`${streamingE}`) - 1);
         libreactperfloggerjniM[`${streamingE}`] = detailsD.length >> (Math.min(4, Math.abs(parseInt(`${streamingE}`))));
      dplusb = !dplusb && activity9 <= 55.65;
   }
      videoz /= Math.max(3 / (Math.max(4, parseInt(`${windT}`))), 3);
      settingq = `${videoz - 2}`;
   do {
      topicx >>= Math.min(3, Math.abs(parseInt(`${windT}`)));
      if (4265922 == topicx) {
         break;
      }
   } while ((1 == (topicx >> (Math.min(settingq.length, 3))) || 1 == (topicx >> (Math.min(settingq.length, 4)))) && (4265922 == topicx));
       let floatinge = 3.0;
       let search9 = String.fromCharCode(105,110,115,101,114,116,105,111,110,95,111,95,55,53,0);
          let unimplementedviewX = 1.0;
          let dplusd = String.fromCharCode(106,95,54,52,95,99,114,99,116,97,98,108,101,0);
          let e_titlev = String.fromCharCode(108,95,57,95,114,101,97,108,109,0);
         search9 = "1";
         unimplementedviewX += parseFloat(`${e_titlev.length}`);
         dplusd = `${3 << (Math.min(5, Math.abs(parseInt(`${unimplementedviewX}`))))}`;
         e_titlev += `${2 ^ dplusd.length}`;
       let libzeusP = String.fromCharCode(105,110,116,101,114,114,117,112,116,105,98,108,101,95,98,95,50,51,0);
      if ((4 + search9.length) >= 5) {
         search9 += "3";
      }
      if (libzeusP.length >= search9.length) {
          let filterY = String.fromCharCode(100,105,118,105,100,111,114,95,122,95,56,51,0);
         search9 += `${(String.fromCharCode(99,0) == filterY ? libzeusP.length : filterY.length)}`;
      }
         libzeusP = `${parseInt(`${floatinge}`) % (Math.max(libzeusP.length, 6))}`;
      do {
          let mbnativeJ = String.fromCharCode(100,105,102,102,115,95,56,95,49,56,0);
          let traminig = String.fromCharCode(99,111,110,99,114,101,116,101,95,119,95,49,50,0);
          let verticalx = 4;
         search9 = `${3 + parseInt(`${floatinge}`)}`;
         mbnativeJ += `${traminig.length}`;
         traminig += `${traminig.length}`;
         verticalx += traminig.length / 1;
         if (3167050 == search9.length) {
            break;
         }
      } while ((3167050 == search9.length) && (2 <= (search9.length % 4) && (2.38 + floatinge) <= 2.78));
      activity9 /= Math.max(settingq.length >> (Math.min(Math.abs(3), 2)), 2);
   if (4.39 == (4.77 / (Math.max(10, buildn))) && (buildn / (Math.max(windT, 8))) == 4.77) {
       let libpangleflippedD = String.fromCharCode(101,101,112,95,117,95,55,52,0);
       let pagew = [633, 452, 951];
       let libreactnativejniT = 4;
       let termsL = String.fromCharCode(98,97,99,107,98,114,111,117,110,100,95,57,95,54,56,0);
       let googleS = true;
       let redirect1 = [828, 801];
       let minivode = [String.fromCharCode(97,118,97,115,115,101,114,116,95,51,95,53,57,0), String.fromCharCode(115,101,110,100,95,106,95,49,0), String.fromCharCode(105,95,54,95,105,110,99,114,101,109,101,110,116,0)];
         libreactnativejniT <<= Math.min(1, Math.abs(2));
          let v_imageV = new Map([[String.fromCharCode(102,116,118,100,111,99,95,97,95,57,53,0),489], [String.fromCharCode(97,95,51,56,95,112,114,111,114,101,115,100,115,112,0),823]]);
         redirect1 = [termsL.length];
         v_imageV[`${v_imageV.size}`] = v_imageV.size + v_imageV.size;
      do {
          let graphY = new Map([[String.fromCharCode(117,112,103,114,97,100,101,95,118,95,57,0),false ], [String.fromCharCode(118,95,56,56,95,103,101,111,112,111,108,121,0),true ], [String.fromCharCode(105,95,50,57,95,115,116,97,99,107,116,114,97,99,101,0),true ]]);
          let shirtj = String.fromCharCode(116,101,120,116,109,111,118,115,117,98,95,50,95,57,57,0);
          let editZ = 4;
          let entryC = String.fromCharCode(119,95,55,51,95,118,111,116,101,0);
         pagew.push(termsL.length >> (Math.min(Math.abs(1), 4)));
         graphY[shirtj] = graphY.size | shirtj.length;
         editZ -= graphY.size;
         entryC = `${2 << (Math.min(5, Math.abs(editZ)))}`;
         if (pagew.length == 644859) {
            break;
         }
      } while ((pagew.length == 644859) && (1 <= pagew.length));
         libreactnativejniT /= Math.max(1, libpangleflippedD.length + redirect1.length);
      for (let c = 0; c < 1; c++) {
         libreactnativejniT <<= Math.min(5, Math.abs(1));
      }
      for (let q = 0; q < 2; q++) {
          let downloadingg = String.fromCharCode(109,95,50,55,95,99,111,110,102,105,103,117,114,101,0);
          let foregroundD = 4;
          let dicel = 2.0;
         termsL = `${parseInt(`${dicel}`) - 3}`;
         downloadingg += `${2 * foregroundD}`;
         foregroundD -= (String.fromCharCode(114,0) == downloadingg ? downloadingg.length : foregroundD);
         dicel += 3;
      }
          let mbbidg = String.fromCharCode(98,95,53,48,95,97,117,100,105,111,112,114,111,99,0);
          let mbbannerf = String.fromCharCode(112,95,51,57,95,98,105,100,105,114,0);
          let lightj = String.fromCharCode(107,95,55,51,95,99,111,109,112,108,101,116,101,0);
         libreactnativejniT /= Math.max(2, 3 * pagew.length);
         mbbidg += `${lightj.length >> (Math.min(3, mbbidg.length))}`;
         mbbannerf += `${mbbannerf.length}`;
         lightj += `${(lightj == String.fromCharCode(70,0) ? mbbannerf.length : lightj.length)}`;
      if (minivode.includes(libreactnativejniT)) {
         libreactnativejniT %= Math.max(minivode.length << (Math.min(2, pagew.length)), 5);
      }
      if (2 <= (5 + redirect1.length) || redirect1.length <= 5) {
          let helperT = new Map([[String.fromCharCode(111,95,55,49,95,102,105,114,101,98,97,115,101,0),String.fromCharCode(97,105,116,101,114,95,109,95,50,0)], [String.fromCharCode(104,101,120,98,115,95,103,95,56,57,0),String.fromCharCode(99,95,53,49,95,113,117,97,108,105,116,121,0)], [String.fromCharCode(99,111,110,102,105,103,117,114,97,116,105,111,110,95,97,95,52,50,0),String.fromCharCode(109,95,52,51,95,110,111,114,109,97,108,105,122,101,100,0)]]);
          let prediction0 = 5;
          let componentregistryJ = true;
         redirect1.push(3);
         helperT = new Map([[`${helperT.size}`, helperT.size + 2]]);
         prediction0 &= prediction0;
         componentregistryJ = !componentregistryJ;
      }
      while ((libreactnativejniT | libpangleflippedD.length) <= 5) {
          let bridgeR = 1.0;
          let collectionf = [576, 304];
          let whatsappY = String.fromCharCode(104,97,115,95,117,95,54,53,0);
         libreactnativejniT |= collectionf.length + 3;
         bridgeR /= Math.max(parseInt(`${bridgeR}`) / (Math.max(whatsappY.length, 5)), 1);
         collectionf = [3 >> (Math.min(1, whatsappY.length))];
         break;
      }
       let delegate_55o = 3.0;
       let greyX = 2.0;
      for (let w = 0; w < 2; w++) {
          let left1 = String.fromCharCode(100,95,57,50,95,104,101,120,98,121,116,101,0);
         greyX /= Math.max(2 | parseInt(`${greyX}`), 3);
         left1 = "2";
      }
      for (let d = 0; d < 2; d++) {
         minivode = [(termsL == String.fromCharCode(71,0) ? libpangleflippedD.length : termsL.length)];
      }
         minivode = [parseInt(`${delegate_55o}`) * minivode.length];
      windT *= parseFloat(`${2}`);
   }
   for (let r = 0; r < 3; r++) {
       let redirect3 = 2.0;
       let downloadingZ = String.fromCharCode(116,95,51,50,95,106,99,111,110,102,105,103,105,110,116,0);
       let rules2 = 2.0;
       let vietnam8 = String.fromCharCode(101,95,50,55,95,97,115,115,101,114,116,105,111,110,0);
          let adultw = String.fromCharCode(101,95,57,50,95,115,117,98,106,101,99,116,0);
          let umengK = [48, 489];
         vietnam8 += `${downloadingZ.length ^ parseInt(`${rules2}`)}`;
         adultw = `${adultw.length}`;
         umengK = [3];
      if (downloadingZ.length == parseInt(`${rules2}`)) {
         rules2 += parseFloat(`${2}`);
      }
          let membership4 = String.fromCharCode(119,95,49,53,95,110,111,116,104,105,110,103,0);
          let libavfilter2 = 0.0;
          let sportsL = true;
         rules2 -= parseFloat(`${membership4.length}`);
         membership4 = `${parseInt(`${libavfilter2}`)}`;
         redirect3 *= parseFloat(`${parseInt(`${rules2}`) / (Math.max(vietnam8.length, 3))}`);
      if (1 <= (downloadingZ.length + 5)) {
          let optionsi = String.fromCharCode(99,95,53,57,95,112,114,105,118,97,99,121,0);
          let schedule3 = String.fromCharCode(100,119,97,114,102,95,112,95,49,48,0);
          let s_positionF = 5.0;
         downloadingZ += `${downloadingZ.length >> (Math.min(4, optionsi.length))}`;
         optionsi = `${parseInt(`${s_positionF}`) * 1}`;
         schedule3 = `${parseInt(`${s_positionF}`)}`;
      }
          let successv = 3.0;
          let launchf = 3.0;
          let qaagL = 5.0;
         redirect3 += parseFloat(`${parseInt(`${successv}`)}`);
         launchf += parseFloat(`${parseInt(`${qaagL}`)}`);
      for (let j = 0; j < 3; j++) {
          let androidT = String.fromCharCode(101,95,53,52,95,116,119,105,100,100,108,101,0);
         rules2 /= Math.max(4, parseFloat(`${parseInt(`${rules2}`) - 3}`));
         androidT += `${androidT.length | androidT.length}`;
      }
          let canvasH = String.fromCharCode(109,95,57,49,95,108,111,97,100,101,114,0);
          let launcher_ = String.fromCharCode(109,95,56,55,95,104,116,99,112,0);
          let trashX = new Map([[String.fromCharCode(109,95,50,49,95,99,103,117,0),399], [String.fromCharCode(100,111,99,117,109,101,110,116,95,53,95,52,0),743], [String.fromCharCode(99,111,110,102,108,105,99,116,115,95,110,95,56,52,0),362]]);
         downloadingZ = `${trashX.size & parseInt(`${redirect3}`)}`;
         canvasH = `${3 & launcher_.length}`;
         launcher_ += `${(String.fromCharCode(78,0) == launcher_ ? canvasH.length : launcher_.length)}`;
         trashX[launcher_] = (launcher_ == String.fromCharCode(87,0) ? launcher_.length : canvasH.length);
          let turn0 = new Map([[String.fromCharCode(118,95,53,49,95,121,111,110,108,121,120,0),594], [String.fromCharCode(118,111,119,101,108,95,116,95,55,50,0),182], [String.fromCharCode(97,95,52,57,95,109,111,100,101,114,110,0),545]]);
         rules2 /= Math.max(parseFloat(`${vietnam8.length}`), 4);
         turn0[`${turn0.size}`] = turn0.size;
      if (3.70 < rules2) {
          let recommendationo = false;
         rules2 -= parseFloat(`${vietnam8.length}`);
         recommendationo = recommendationo && !recommendationo;
      }
       let typingV = 0.0;
      while (3 > (4 * downloadingZ.length) || (downloadingZ.length | 4) > 2) {
         rules2 -= (parseFloat(`${String.fromCharCode(107,0) == downloadingZ ? downloadingZ.length : parseInt(`${typingV}`)}`));
         break;
      }
      langY = `${topicx}`;
   }

    console.log('onend');
      buildn *= (parseInt(`${buildn}`) & (dplusb ? 5 : 2));
   do {
       let libcrashsdkV = String.fromCharCode(106,95,53,56,95,97,112,112,108,121,0);
       let gdtadvo = new Map([[String.fromCharCode(116,114,117,101,109,111,116,105,111,110,114,116,95,52,95,52,52,0),String.fromCharCode(116,104,97,116,95,49,95,49,54,0)], [String.fromCharCode(99,102,115,116,114,101,97,109,95,98,95,51,50,0),String.fromCharCode(101,97,99,101,110,99,95,107,95,52,55,0)]]);
       let modityy = 4;
         gdtadvo[libcrashsdkV] = modityy;
      while (4 > (libcrashsdkV.length ^ 1) && (gdtadvo.size ^ libcrashsdkV.length) > 1) {
          let referrerd = String.fromCharCode(100,101,99,111,100,97,98,108,101,95,52,95,55,49,0);
          let smallc = String.fromCharCode(117,95,57,55,95,112,114,105,110,116,0);
         gdtadvo = new Map([[`${gdtadvo.size}`, referrerd.length]]);
         referrerd += "1";
         smallc = "2";
         break;
      }
         gdtadvo = new Map([[`${gdtadvo.size}`, libcrashsdkV.length]]);
      for (let b = 0; b < 1; b++) {
          let short_mi = String.fromCharCode(111,98,115,101,114,118,101,100,95,104,95,54,0);
          let mbnativeadvanced9 = [207, 643];
          let libjsinspector8 = String.fromCharCode(122,95,57,49,95,99,111,118,101,114,97,103,101,0);
         gdtadvo[`${mbnativeadvanced9.length}`] = gdtadvo.size;
         short_mi += `${short_mi.length * 3}`;
         mbnativeadvanced9 = [libjsinspector8.length - 2];
         libjsinspector8 += `${(short_mi == String.fromCharCode(78,0) ? short_mi.length : libjsinspector8.length)}`;
      }
         libcrashsdkV = `${2 % (Math.max(7, gdtadvo.size))}`;
      for (let a = 0; a < 3; a++) {
          let mimoq = String.fromCharCode(115,116,97,116,101,115,95,113,95,55,50,0);
         libcrashsdkV += `${modityy}`;
         mimoq += "2";
      }
       let mintegralj = new Map([[String.fromCharCode(100,95,51,52,95,116,104,114,111,116,116,108,101,114,0),82], [String.fromCharCode(117,95,56,50,95,104,97,110,100,108,101,100,0),482]]);
       let thailandi = new Map([[String.fromCharCode(109,111,110,111,98,105,116,95,108,95,50,57,0),440], [String.fromCharCode(115,116,114,105,114,101,112,108,97,99,101,95,116,95,57,49,0),619]]);
      for (let w = 0; w < 1; w++) {
         gdtadvo[`${modityy}`] = modityy * gdtadvo.size;
      }
      if ((thailandi.size % (Math.max(libcrashsdkV.length, 7))) < 3 && (libcrashsdkV.length % (Math.max(5, thailandi.size))) < 3) {
         thailandi[`${mintegralj.size}`] = gdtadvo.size ^ mintegralj.size;
      }
      gradleO *= 2;
      if (gradleO == 468782) {
         break;
      }
   } while ((dplusb && 2 > (gradleO % 2)) && (gradleO == 468782));
      videoz /= Math.max(4, parseInt(`${activity9}`) << (Math.min(2, Math.abs(1))));
   while (!theme3) {
      gradleO >>= Math.min(Math.abs(parseInt(`${windT}`)), 1);
      break;
   }
   do {
      dplusb = theme3;
      if (dplusb ? !dplusb : dplusb) {
         break;
      }
   } while ((dplusb ? !dplusb : dplusb) && (dplusb));
   do {
      buildn *= 1 | topicx;
      if (buildn == 3350583.0) {
         break;
      }
   } while ((dplusb || 2.5 >= (buildn / 1.77)) && (buildn == 3350583.0));
   while (4 < (gradleO - 4) || 4 < (gradleO - settingq.length)) {
       let emojiy = String.fromCharCode(116,114,97,110,115,95,55,95,54,49,0);
       let scoreZ = false;
       let projectu = 1.0;
       let hooks8 = String.fromCharCode(108,95,50,56,95,106,111,121,102,117,108,0);
      if (emojiy.length == 1) {
          let final_qg = String.fromCharCode(105,95,49,95,110,111,110,115,101,99,117,114,101,0);
          let c_countA = [String.fromCharCode(100,95,54,50,95,115,119,97,112,112,101,100,0), String.fromCharCode(100,105,115,112,108,97,99,101,109,101,110,116,95,100,95,49,53,0), String.fromCharCode(106,115,111,110,114,112,99,95,57,95,52,56,0)];
          let valuesP = String.fromCharCode(97,110,116,105,99,111,108,108,97,112,115,101,95,53,95,55,0);
          let moviesh = String.fromCharCode(104,95,54,53,95,112,101,114,109,117,116,97,116,105,111,110,115,0);
         scoreZ = !scoreZ;
         final_qg = `${c_countA.length}`;
         c_countA = [(final_qg == String.fromCharCode(69,0) ? final_qg.length : valuesP.length)];
         valuesP += `${final_qg.length}`;
         moviesh = "1";
      }
      while (1 == hooks8.length) {
         hooks8 = "3";
         break;
      }
      if (!scoreZ) {
         scoreZ = projectu < 3.18;
      }
      while ((projectu / 1.24) >= 2.76 && 1.24 >= projectu) {
         projectu -= 2 << (Math.min(3, emojiy.length));
         break;
      }
       let mbsplashY = 1;
      while (hooks8.length < 2) {
         scoreZ = emojiy.length >= 56;
         break;
      }
      for (let l = 0; l < 1; l++) {
         emojiy += `${mbsplashY}`;
      }
       let inewarchdefaultse = true;
       let clockB = false;
      if (scoreZ) {
          let umengX = [856, 784, 486];
         mbsplashY ^= parseInt(`${projectu}`);
         umengX = [umengX.length];
      }
         clockB = emojiy.startsWith(`${clockB}`);
         scoreZ = (inewarchdefaultse ? !scoreZ : !inewarchdefaultse);
      while (!clockB) {
         inewarchdefaultse = emojiy.length <= 59;
         break;
      }
      settingq += `${2 / (Math.max(3, parseInt(`${buildn}`)))}`;
      break;
   }

    setIsLoading(false);
   if (4 >= (videoz & topicx)) {
       let libhermesc = String.fromCharCode(98,114,111,97,100,99,97,115,116,95,114,95,52,0);
       let sentryJ = String.fromCharCode(106,95,49,54,95,115,101,116,115,111,99,107,111,112,116,0);
          let gesture3 = String.fromCharCode(115,95,49,48,95,114,117,110,115,0);
          let latnE = true;
          let application3 = String.fromCharCode(109,95,49,48,48,95,99,111,110,116,105,110,117,101,0);
         sentryJ = "2";
         gesture3 += "3";
         latnE = application3 == String.fromCharCode(121,0) || 53 == gesture3.length;
         application3 += `${2 % (Math.max(9, gesture3.length))}`;
      if (libhermesc == String.fromCharCode(82,0) && sentryJ.length >= 5) {
         sentryJ += "1";
      }
      for (let n = 0; n < 2; n++) {
          let clockn = 2;
          let appsb = 3.0;
         libhermesc += `${sentryJ.length}`;
         clockn <<= Math.min(3, Math.abs(parseInt(`${appsb}`) ^ clockn));
         appsb += parseFloat(`${1 % (Math.max(1, parseInt(`${appsb}`)))}`);
      }
      if (sentryJ == libhermesc) {
          let popup1 = String.fromCharCode(116,105,109,105,110,103,115,97,102,101,95,122,95,51,54,0);
         libhermesc = `${(String.fromCharCode(84,0) == popup1 ? sentryJ.length : popup1.length)}`;
      }
         libhermesc = `${(libhermesc == String.fromCharCode(81,0) ? sentryJ.length : libhermesc.length)}`;
      for (let k = 0; k < 3; k++) {
         libhermesc = `${sentryJ.length}`;
      }
      topicx += libhermesc.length;
   }
   while (1 > (langY.length | topicx) && (topicx | langY.length) > 1) {
       let selected2 = [674, 523];
       let canvast = [805, 549];
       let greyC = String.fromCharCode(122,95,55,55,95,117,110,105,111,110,101,100,0);
       let popupl = String.fromCharCode(106,95,48,95,108,111,99,97,108,101,0);
      do {
         greyC += `${1 + canvast.length}`;
         if (greyC.length == 2739288) {
            break;
         }
      } while ((5 < (greyC.length << (Math.min(1, canvast.length))) || 4 < (canvast.length << (Math.min(Math.abs(5), 4)))) && (greyC.length == 2739288));
      for (let j = 0; j < 1; j++) {
         greyC += `${popupl.length & canvast.length}`;
      }
          let whistleF = String.fromCharCode(114,116,108,95,100,95,50,48,0);
         popupl += "2";
         whistleF += `${whistleF.length}`;
         canvast.push(2 % (Math.max(7, selected2.length)));
         selected2.push(3 / (Math.max(6, selected2.length)));
      while (!greyC.endsWith(`${popupl.length}`)) {
         greyC += `${popupl.length}`;
         break;
      }
      for (let b = 0; b < 3; b++) {
         canvast.push(3 / (Math.max(2, popupl.length)));
      }
      while ((selected2.length ^ 1) < 1) {
         canvast = [(greyC == String.fromCharCode(87,0) ? greyC.length : canvast.length)];
         break;
      }
       let weiboX = 3;
       let dycreatorL = 3;
      for (let f = 0; f < 3; f++) {
         canvast = [weiboX / (Math.max(7, popupl.length))];
      }
      if (3 <= greyC.length) {
          let nalyticsK = String.fromCharCode(118,95,54,51,95,103,111,100,101,112,115,0);
          let actionsg = [710, 741, 415];
         dycreatorL ^= dycreatorL ^ 3;
         nalyticsK = `${nalyticsK.length << (Math.min(Math.abs(1), 5))}`;
         actionsg = [actionsg.length];
      }
          let clockK = String.fromCharCode(115,112,97,109,95,116,95,52,0);
          let nterstitialA = 5;
         canvast = [1 | selected2.length];
         clockK = `${(clockK == String.fromCharCode(114,0) ? clockK.length : nterstitialA)}`;
         nterstitialA *= clockK.length;
      langY += "1";
      break;
   }
   while (buildn > 5.92) {
      dplusb = gradleO > langY.length;
      break;
   }
   while (theme3) {
       let selectx = String.fromCharCode(107,101,112,116,95,50,95,57,51,0);
       let xadsdkw = 2.0;
       let utilsy = new Map([[String.fromCharCode(112,95,55,56,95,97,103,97,116,101,0),751], [String.fromCharCode(104,97,97,114,95,103,95,51,53,0),277], [String.fromCharCode(122,95,53,50,95,105,110,116,101,114,97,99,116,105,110,103,0),166]]);
       let regengn = 1.0;
         selectx = `${selectx.length << (Math.min(Math.abs(1), 3))}`;
      if (xadsdkw >= regengn) {
         regengn += parseInt(`${xadsdkw}`) + parseInt(`${regengn}`);
      }
          let colorsS = String.fromCharCode(116,104,114,101,115,95,106,95,54,52,0);
         utilsy[colorsS] = utilsy.size;
         xadsdkw *= (parseFloat(`${selectx == String.fromCharCode(101,0) ? selectx.length : parseInt(`${xadsdkw}`)}`));
      if (2 == (utilsy.size / 2)) {
          let calendarZ = String.fromCharCode(99,109,97,115,107,95,101,95,57,51,0);
          let middleE = String.fromCharCode(119,101,108,108,95,108,95,56,55,0);
          let inewinterstitial3 = [43, 622, 1];
          let langkeym = 0;
         utilsy[selectx] = selectx.length;
         calendarZ += "2";
         middleE = "2";
         inewinterstitial3 = [2 * langkeym];
         langkeym /= Math.max(5, 3);
      }
          let pagez = 3;
         utilsy[`${regengn}`] = 1 + parseInt(`${regengn}`);
         pagez ^= pagez ^ pagez;
         selectx += `${parseInt(`${regengn}`) << (Math.min(Math.abs(3), 3))}`;
       let zoomb = false;
      do {
         utilsy[`${zoomb}`] = selectx.length;
         if (utilsy.size == 1559370) {
            break;
         }
      } while (((utilsy.size ^ 1) >= 4 || 2.68 >= (regengn - 3.69)) && (utilsy.size == 1559370));
         selectx += `${parseInt(`${regengn}`) & 2}`;
      for (let b = 0; b < 1; b++) {
          let grayg = 5.0;
          let shrink_ = [997, 405];
          let updatesu = 1.0;
         regengn -= (selectx == String.fromCharCode(76,0) ? parseInt(`${grayg}`) : selectx.length);
         grayg -= shrink_.length;
         shrink_.push(parseInt(`${updatesu}`));
         updatesu *= shrink_.length;
      }
       let redirectL = 0;
       let robotoJ = 1;
      dplusb = 49 >= utilsy.size;
      break;
   }
   if (5 < (topicx ^ 1) && theme3) {
      topicx /= Math.max(2, videoz);
   }
   if ((windT + 2.75) <= 2.27) {
      settingq = `${parseInt(`${activity9}`) * langY.length}`;
   }
      settingq = `${topicx}`;

    props.onLiveEnd?.();
      langY += `${((theme3 ? 1 : 5) << (Math.min(Math.abs(videoz), 2)))}`;
   for (let p = 0; p < 3; p++) {
       let guideB = new Map([[String.fromCharCode(115,99,114,101,101,110,115,95,51,95,55,49,0),148], [String.fromCharCode(113,117,101,114,121,95,116,95,57,49,0),497], [String.fromCharCode(119,95,56,49,95,114,116,114,101,101,110,111,100,101,0),35]]);
       let mbridgeS = new Map([[String.fromCharCode(108,111,97,100,95,107,95,52,52,0),164], [String.fromCharCode(97,118,102,114,97,109,101,95,100,95,51,50,0),674]]);
       let mountingC = new Map([[String.fromCharCode(116,119,111,112,111,105,110,116,95,102,95,53,48,0),517], [String.fromCharCode(117,112,100,97,116,101,114,95,113,95,55,57,0),537]]);
       let castw = [506, 368, 657];
         guideB = new Map([[`${mountingC.size}`, 1]]);
         castw.push(mbridgeS.size);
          let libavutile = String.fromCharCode(97,118,112,107,116,95,55,95,56,49,0);
         mbridgeS = new Map([[`${mountingC.size}`, castw.length]]);
         libavutile += `${1 << (Math.min(1, libavutile.length))}`;
      if ((mbridgeS.size * 3) > 5) {
          let sportM = String.fromCharCode(105,95,50,49,95,98,97,100,114,101,113,0);
         guideB = new Map([[`${guideB.size}`, guideB.size]]);
         sportM = `${sportM.length}`;
      }
      for (let r = 0; r < 1; r++) {
         guideB[`${mbridgeS.size}`] = 3 >> (Math.min(3, Math.abs(mbridgeS.size)));
      }
          let libjsiE = 5.0;
          let rewindT = String.fromCharCode(106,95,50,54,95,107,110,111,98,0);
          let attributedstringB = 0;
         mbridgeS = new Map([[`${castw.length}`, 3 ^ rewindT.length]]);
         libjsiE *= parseInt(`${libjsiE}`);
         rewindT = `${attributedstringB * 3}`;
         attributedstringB <<= Math.min(5, Math.abs(parseInt(`${libjsiE}`) << (Math.min(3, Math.abs(1)))));
       let values5 = 4.0;
       let settingsu = String.fromCharCode(112,117,116,115,116,114,95,111,95,50,53,0);
         settingsu += `${3 | settingsu.length}`;
      do {
         mbridgeS[`${castw.length}`] = 3;
         if (503431 == mbridgeS.size) {
            break;
         }
      } while ((503431 == mbridgeS.size) && (1 == mbridgeS.size));
       let kuaishou5 = String.fromCharCode(100,111,99,105,100,95,121,95,50,54,0);
       let qaag0 = String.fromCharCode(111,98,115,101,114,118,97,116,105,111,110,95,48,95,49,54,0);
         settingsu += `${guideB.size ^ 1}`;
      windT -= parseFloat(`${1 | settingq.length}`);
   }
      topicx /= Math.max(3, videoz);
   if (dplusb) {
       let morei = String.fromCharCode(99,111,110,116,105,110,117,101,115,95,48,95,55,53,0);
       let animationsu = 0;
       let goalm = 3.0;
       let q_position3 = false;
      for (let l = 0; l < 2; l++) {
         q_position3 = (morei.length | animationsu) >= 65;
      }
       let cornerd = true;
       let typesv = true;
      while (typesv) {
         q_position3 = !q_position3 && !cornerd;
         break;
      }
          let a_title0 = new Map([[String.fromCharCode(98,95,49,55,95,115,105,110,103,108,101,116,97,98,108,101,0),809], [String.fromCharCode(116,105,109,101,105,110,102,111,95,54,95,50,50,0),571], [String.fromCharCode(109,115,105,122,101,95,112,95,54,54,0),429]]);
          let moviesA = String.fromCharCode(101,110,97,98,108,101,100,95,105,95,57,50,0);
         animationsu <<= Math.min(3, Math.abs(2));
         a_title0[`${moviesA}`] = moviesA.length / (Math.max(3, 2));
       let launcher4 = 3.0;
       let loginQ = 3.0;
       let read2 = false;
       let tailT = true;
         q_position3 = (tailT ? !cornerd : tailT);
         goalm *= 3;
      do {
          let ballD = 5.0;
          let fillj = [String.fromCharCode(110,97,117,116,105,99,97,108,95,101,95,55,51,0), String.fromCharCode(121,95,56,95,109,111,110,103,111,0), String.fromCharCode(122,101,114,111,118,95,105,95,54,51,0)];
          let indexN = [411, 74, 858];
          let currentZ = 5.0;
          let completer = 3.0;
         typesv = completer == loginQ;
         ballD -= parseFloat(`${parseInt(`${currentZ}`)}`);
         fillj = [1 * indexN.length];
         indexN.push(parseInt(`${ballD}`) ^ indexN.length);
         currentZ /= Math.max(parseInt(`${currentZ}`), 2);
         completer *= fillj.length + 1;
         if (typesv ? !typesv : typesv) {
            break;
         }
      } while ((typesv ? !typesv : typesv) && (!typesv));
         typesv = !cornerd && !read2;
       let adultD = String.fromCharCode(115,95,51,52,95,114,101,97,99,104,101,100,0);
       let gradlewb = String.fromCharCode(120,95,56,50,95,115,101,115,115,105,111,110,0);
       let unreadS = String.fromCharCode(119,97,116,99,104,100,111,103,95,110,95,57,52,0);
      videoz %= Math.max(morei.length, 5);
   }
   do {
      dplusb = 9.15 <= windT;
      if (dplusb ? !dplusb : dplusb) {
         break;
      }
   } while ((dplusb ? !dplusb : dplusb) && (3 >= topicx));
   do {
      activity9 /= Math.max(1, (singleJ.length + (theme3 ? 2 : 3)));
      if (1340017.0 == activity9) {
         break;
      }
   } while ((1340017.0 == activity9) && ((activity9 * 1.47) == 4.36));
      videoz %= Math.max(parseInt(`${windT}`) & 3, 3);

  };

  const onError = () => {
       let leaguev = String.fromCharCode(108,95,49,53,95,105,110,116,102,105,0);
    let libhermesy = false;
    let productw = true;
    let reactX = true;
    let trophyt = 2.0;
    let googleR = true;
    let long_ad = String.fromCharCode(117,100,116,97,95,120,95,53,52,0);
    let whatsappI = String.fromCharCode(115,95,52,54,95,116,109,112,111,0);
    let gesturesz = new Map([[String.fromCharCode(97,99,116,105,118,97,116,105,111,110,95,99,95,51,53,0),109], [String.fromCharCode(114,95,51,53,95,100,105,115,107,0),372]]);
   do {
      reactX = googleR || trophyt >= 50.65;
      if (reactX ? !reactX : reactX) {
         break;
      }
   } while ((!libhermesy) && (reactX ? !reactX : reactX));
   if (3 > leaguev.length) {
       let auto_yC = String.fromCharCode(97,95,57,50,95,102,97,105,108,117,114,101,0);
      while (auto_yC != String.fromCharCode(106,0)) {
         auto_yC = `${3 & auto_yC.length}`;
         break;
      }
      do {
          let frame_blW = 3;
          let pauseZ = 2.0;
         auto_yC += `${frame_blW / (Math.max(2, auto_yC.length))}`;
         frame_blW /= Math.max(1, parseInt(`${pauseZ}`) - 1);
         pauseZ *= 2;
         if (auto_yC.length == 3995161) {
            break;
         }
      } while ((auto_yC.length == 3995161) && (auto_yC == String.fromCharCode(65,0) || auto_yC.length > 3));
      while (auto_yC.length == 3) {
         auto_yC = `${auto_yC.length + auto_yC.length}`;
         break;
      }
      leaguev += `${1 >> (Math.min(2, auto_yC.length))}`;
   }
       let pangleZ = 5.0;
       let contextI = [469, 614, 752];
       let whatsappc = String.fromCharCode(113,95,55,53,0);
      if ((parseFloat(`${contextI.length}`) / (Math.max(6, pangleZ))) >= 1.9 && 4.98 >= (pangleZ / 1.9)) {
          let benefitZ = false;
         contextI = [contextI.length >> (Math.min(4, Math.abs(parseInt(`${pangleZ}`))))];
         benefitZ = benefitZ && !benefitZ;
      }
      do {
          let confirmationf = new Map([[String.fromCharCode(120,109,108,95,107,95,57,52,0),false ], [String.fromCharCode(101,95,49,57,95,115,117,98,101,120,112,114,0),false ]]);
          let libsgcoreL = String.fromCharCode(112,101,114,112,101,110,100,105,99,117,108,97,114,95,103,95,53,49,0);
          let animationsE = 3.0;
          let area8 = 2.0;
         whatsappc += `${parseInt(`${area8}`)}`;
         confirmationf[`${libsgcoreL}`] = confirmationf.size | 2;
         libsgcoreL += `${parseInt(`${animationsE}`)}`;
         animationsE *= parseFloat(`${libsgcoreL.length << (Math.min(Math.abs(2), 2))}`);
         area8 -= parseInt(`${animationsE}`) % (Math.max(2, 1));
         if (whatsappc == String.fromCharCode(56,120,118,51,98,98,0)) {
            break;
         }
      } while ((2 > (whatsappc.length + parseInt(`${pangleZ}`))) && (whatsappc == String.fromCharCode(56,120,118,51,98,98,0)));
      do {
         whatsappc = `${parseInt(`${pangleZ}`)}`;
         if (2480356 == whatsappc.length) {
            break;
         }
      } while ((contextI.length > 1) && (2480356 == whatsappc.length));
       let cancelL = new Map([[String.fromCharCode(114,101,97,115,115,109,95,120,95,57,0),true ], [String.fromCharCode(112,107,99,114,121,112,116,95,48,95,55,49,0),true ], [String.fromCharCode(102,95,55,56,95,101,112,108,121,0),false ]]);
       let sort3 = new Map([[String.fromCharCode(100,118,100,115,117,98,95,100,95,56,57,0),142], [String.fromCharCode(115,95,49,95,102,108,97,99,101,110,99,0),77]]);
          let pageS = String.fromCharCode(120,95,55,57,95,112,101,114,109,97,110,101,110,116,0);
          let matchest = false;
         pangleZ -= (parseFloat(`${(matchest ? 2 : 3) * 1}`));
         pageS = `${pageS.length % (Math.max(6, pageS.length))}`;
         matchest = (pageS.length & pageS.length) < 99;
      while ((pangleZ / 4.81) < 4.76 && 3 < (parseInt(`${pangleZ}`) / (Math.max(contextI.length, 8)))) {
          let assistr = [String.fromCharCode(101,95,55,48,95,109,111,100,105,102,105,99,97,116,105,111,110,0), String.fromCharCode(111,95,55,55,95,105,110,116,101,103,114,97,116,101,100,0)];
          let annerH = 3;
          let klevinU = String.fromCharCode(115,115,114,99,115,95,48,95,53,55,0);
          let libavutilp = [524, 590];
          let modulek = String.fromCharCode(111,112,101,114,97,116,105,110,103,95,53,95,55,53,0);
         contextI.push((whatsappc == String.fromCharCode(81,0) ? cancelL.size : whatsappc.length));
         assistr.push((modulek == String.fromCharCode(81,0) ? annerH : modulek.length));
         annerH += assistr.length + 2;
         klevinU = `${klevinU.length}`;
         libavutilp.push((String.fromCharCode(50,0) == klevinU ? klevinU.length : annerH));
         break;
      }
         contextI = [1 | sort3.size];
         sort3 = new Map([[`${cancelL.size}`, cancelL.size >> (Math.min(1, Math.abs(sort3.size)))]]);
      for (let h = 0; h < 1; h++) {
          let bannerY = String.fromCharCode(113,95,52,54,95,112,114,101,99,111,109,112,0);
          let rootJ = [String.fromCharCode(117,110,122,105,112,95,103,95,50,56,0), String.fromCharCode(104,111,110,101,121,95,119,95,53,49,0)];
         pangleZ /= Math.max(1, parseFloat(`${sort3.size >> (Math.min(contextI.length, 2))}`));
         bannerY = `${(bannerY == String.fromCharCode(54,0) ? bannerY.length : rootJ.length)}`;
         rootJ.push((bannerY == String.fromCharCode(119,0) ? rootJ.length : bannerY.length));
      }
      libhermesy = !libhermesy;
   for (let q = 0; q < 3; q++) {
      leaguev = "1";
   }
      googleR = productw && trophyt >= 28.33;

    setIsError(true);
   while (!googleR) {
      googleR = leaguev.includes(`${reactX}`);
      break;
   }
   do {
      reactX = whatsappI.length <= 71;
      if (reactX ? !reactX : reactX) {
         break;
      }
   } while ((productw || reactX) && (reactX ? !reactX : reactX));
   while (long_ad.includes(`${trophyt}`)) {
       let anner7 = true;
       let watchD = String.fromCharCode(97,116,116,97,99,104,109,101,110,116,115,95,121,95,50,54,0);
         watchD += `${(String.fromCharCode(74,0) == watchD ? (anner7 ? 4 : 1) : watchD.length)}`;
       let layoutf = 4;
          let favicong = 4.0;
          let cross4 = String.fromCharCode(120,95,54,57,95,106,115,116,121,112,101,0);
          let singleg = 5.0;
         layoutf *= (1 - (anner7 ? 5 : 1));
         favicong *= parseFloat(`${cross4.length}`);
         cross4 += `${1 & parseInt(`${singleg}`)}`;
         singleg *= parseFloat(`${cross4.length % (Math.max(9, parseInt(`${favicong}`)))}`);
         anner7 = watchD == String.fromCharCode(70,0);
         layoutf |= watchD.length & 2;
          let bodanl = [26, 652, 592];
          let expandl = 3.0;
          let sansn = new Map([[String.fromCharCode(112,95,56,49,95,115,101,114,105,97,108,110,111,0),String.fromCharCode(112,104,97,115,101,115,95,103,95,53,0)], [String.fromCharCode(106,95,50,50,95,111,114,105,103,105,110,97,108,0),String.fromCharCode(114,105,110,103,95,56,95,55,55,0)], [String.fromCharCode(100,95,51,51,95,113,112,101,103,0),String.fromCharCode(115,116,111,112,112,105,110,103,95,55,95,53,57,0)]]);
         anner7 = 72 >= bodanl.length || 72 >= sansn.size;
         bodanl = [parseInt(`${expandl}`) - 2];
         expandl *= parseInt(`${expandl}`);
      trophyt += (parseFloat(`${1 * (anner7 ? 2 : 3)}`));
      break;
   }
      leaguev = `${whatsappI.length ^ 3}`;
       let orientationo = [543, 326];
      for (let o = 0; o < 2; o++) {
         orientationo = [orientationo.length ^ 2];
      }
      for (let p = 0; p < 3; p++) {
         orientationo.push(orientationo.length / 1);
      }
       let rewardvideom = [89, 908];
       let configL = [822, 412, 710];
      libhermesy = (66 >= (whatsappI.length * (!libhermesy ? 66 : whatsappI.length)));

    setIsLoading(false);
   do {
       let reducer0 = String.fromCharCode(107,101,121,119,111,114,100,115,95,98,95,50,50,0);
       let bridge7 = String.fromCharCode(97,95,49,57,95,118,111,116,101,115,0);
       let shrink6 = String.fromCharCode(111,95,54,49,95,115,111,99,97,110,116,114,99,118,109,111,114,101,0);
      if (5 >= shrink6.length) {
          let libavutile = 0.0;
         bridge7 += "2";
         libavutile *= parseFloat(`${parseInt(`${libavutile}`)}`);
      }
      while (bridge7.length >= reducer0.length) {
         bridge7 += `${shrink6.length + bridge7.length}`;
         break;
      }
      while (reducer0 != String.fromCharCode(89,0)) {
          let sportsm = 4;
         bridge7 += "1";
         sportsm %= Math.max(1, 1);
         break;
      }
       let typesa = 1;
      for (let i = 0; i < 3; i++) {
         shrink6 += `${typesa + bridge7.length}`;
      }
      if (3 <= shrink6.length && reducer0.length <= 3) {
         reducer0 += `${(String.fromCharCode(108,0) == reducer0 ? reducer0.length : bridge7.length)}`;
      }
      while ((shrink6.length ^ typesa) <= 5 && 1 <= (shrink6.length ^ 5)) {
          let relatedY = 4.0;
          let moduleb = 5.0;
          let libfbG = String.fromCharCode(105,115,111,112,101,110,113,117,111,116,101,95,113,95,55,49,0);
          let greyH = new Map([[String.fromCharCode(122,95,49,55,95,115,105,110,101,119,105,110,0),true ], [String.fromCharCode(97,95,51,50,95,108,101,97,115,116,0),true ], [String.fromCharCode(114,97,105,115,101,95,53,95,56,55,0),true ]]);
          let stringsZ = String.fromCharCode(112,95,57,54,95,97,112,112,114,111,120,105,109,97,116,111,114,0);
         shrink6 = `${greyH.size * typesa}`;
         relatedY /= Math.max(2, (libfbG == String.fromCharCode(50,0) ? parseInt(`${relatedY}`) : libfbG.length));
         moduleb -= parseInt(`${relatedY}`);
         greyH[`${moduleb}`] = 1;
         stringsZ += "1";
         break;
      }
          let commentr = true;
          let filteri = 0.0;
         reducer0 = `${shrink6.length}`;
         commentr = !commentr;
         filteri += ((commentr ? 3 : 5) + parseInt(`${filteri}`));
      for (let o = 0; o < 3; o++) {
         shrink6 += `${2 & shrink6.length}`;
      }
      googleR = !productw;
      if (googleR ? !googleR : googleR) {
         break;
      }
   } while ((!googleR || 5 >= leaguev.length) && (googleR ? !googleR : googleR));
       let brightnessg = 5.0;
          let favoriteb = 3.0;
          let floatingT = String.fromCharCode(105,110,103,101,110,105,101,110,116,95,104,95,52,0);
         brightnessg /= Math.max(parseInt(`${brightnessg}`) + 3, 1);
         favoriteb *= 1 - parseInt(`${favoriteb}`);
         floatingT += `${parseInt(`${favoriteb}`)}`;
      while (brightnessg == brightnessg) {
         brightnessg *= 1;
         break;
      }
         brightnessg /= Math.max(parseInt(`${brightnessg}`), 2);
      productw = whatsappI.length < 62 && !reactX;
   while (1 > whatsappI.length) {
       let q_imagei = String.fromCharCode(105,95,50,54,95,115,121,110,99,104,114,111,110,105,122,97,116,105,111,110,0);
      do {
         q_imagei = `${(String.fromCharCode(57,0) == q_imagei ? q_imagei.length : q_imagei.length)}`;
         if (1650538 == q_imagei.length) {
            break;
         }
      } while ((q_imagei.length <= 2) && (1650538 == q_imagei.length));
      do {
         q_imagei = `${(q_imagei == String.fromCharCode(116,0) ? q_imagei.length : q_imagei.length)}`;
         if (q_imagei == String.fromCharCode(97,105,95,109,119,97,0)) {
            break;
         }
      } while ((q_imagei == String.fromCharCode(113,0) || 3 <= q_imagei.length) && (q_imagei == String.fromCharCode(97,105,95,109,119,97,0)));
      while (q_imagei.endsWith(q_imagei)) {
          let filedd = String.fromCharCode(99,111,110,115,116,114,97,105,110,116,95,55,95,49,54,0);
          let lightU = new Map([[String.fromCharCode(111,95,56,49,95,109,101,116,97,98,111,100,121,0),405], [String.fromCharCode(100,95,57,53,95,115,116,114,115,101,112,0),477]]);
          let leakchecker_ = 1.0;
         q_imagei += `${lightU.size}`;
         filedd = "1";
         lightU[filedd] = 2 ^ parseInt(`${leakchecker_}`);
         leakchecker_ -= parseInt(`${leakchecker_}`) - filedd.length;
         break;
      }
      long_ad += "2";
      break;
   }
      leaguev += "3";
   for (let y = 0; y < 3; y++) {
       let models7 = new Map([[String.fromCharCode(105,110,116,102,108,111,97,116,95,107,95,56,0),592], [String.fromCharCode(105,95,52,54,95,105,109,109,117,116,97,98,108,101,0),573], [String.fromCharCode(99,97,108,99,117,108,97,116,105,111,110,95,51,95,52,55,0),24]]);
       let reminderA = 0;
          let baseW = String.fromCharCode(118,105,98,114,97,116,101,95,50,95,55,57,0);
         models7[baseW] = baseW.length << (Math.min(2, Math.abs(reminderA)));
      for (let g = 0; g < 2; g++) {
         reminderA &= models7.size;
      }
      if (!Array.from(models7.keys()).includes(`${reminderA}`)) {
          let splashy = 3.0;
          let indicatorw = 2;
          let traminii = new Map([[String.fromCharCode(111,95,55,56,95,110,105,101,108,115,97,100,100,0),String.fromCharCode(122,95,57,50,95,103,97,117,115,115,105,97,110,105,105,114,100,0)], [String.fromCharCode(115,117,98,99,99,95,54,95,56,56,0),String.fromCharCode(114,97,100,98,95,50,95,51,56,0)]]);
          let libavdeviceR = new Map([[String.fromCharCode(102,95,50,56,95,115,117,98,112,97,116,104,115,0),String.fromCharCode(109,95,55,56,95,121,113,117,97,110,116,0)], [String.fromCharCode(114,101,110,111,114,109,101,95,101,95,56,50,0),String.fromCharCode(97,95,52,55,95,103,114,97,110,116,0)]]);
         models7[`${splashy}`] = reminderA;
         splashy += parseFloat(`${libavdeviceR.size}`);
         indicatorw ^= 2 ^ traminii.size;
         traminii = new Map([[`${traminii.size}`, 2 / (Math.max(7, indicatorw))]]);
         libavdeviceR[`${indicatorw}`] = libavdeviceR.size | 2;
      }
      while (3 >= (reminderA % (Math.max(1, models7.size))) && 3 >= (reminderA % (Math.max(models7.size, 3)))) {
         models7 = new Map([[`${models7.size}`, models7.size]]);
         break;
      }
      if (models7.size > reminderA) {
         models7 = new Map([[`${models7.size}`, reminderA]]);
      }
         reminderA *= reminderA / 1;
      whatsappI = `${(long_ad == String.fromCharCode(110,0) ? (googleR ? 2 : 5) : long_ad.length)}`;
   }

    props.onLiveEnd?.();
      reactX = (!reactX ? !libhermesy : !reactX);
   while (2 < leaguev.length) {
      leaguev += `${whatsappI.length}`;
      break;
   }
      googleR = !googleR;
   if (reactX) {
       let filterf = String.fromCharCode(103,104,97,115,104,95,98,95,57,57,0);
       let annert = String.fromCharCode(115,117,98,116,97,115,107,95,108,95,51,57,0);
         filterf = `${(annert == String.fromCharCode(68,0) ? filterf.length : annert.length)}`;
          let eacte = 2.0;
          let umengb = 4.0;
         filterf += `${parseInt(`${eacte}`)}`;
         umengb += 3;
         annert = `${(filterf == String.fromCharCode(82,0) ? filterf.length : annert.length)}`;
          let analyticsC = [String.fromCharCode(97,95,50,50,95,109,97,110,117,97,108,108,121,0), String.fromCharCode(112,101,114,115,105,115,116,101,110,116,95,107,95,55,50,0)];
          let guidep = 1;
         filterf = `${(String.fromCharCode(56,0) == filterf ? filterf.length : guidep)}`;
         analyticsC.push(analyticsC.length % (Math.max(1, 10)));
         guidep *= analyticsC.length;
          let themem = 1.0;
          let grayl = String.fromCharCode(105,110,118,97,108,105,100,95,112,95,56,52,0);
          let containerz = 5.0;
         annert = `${annert.length - 3}`;
         themem += parseFloat(`${grayl.length}`);
         grayl = "1";
         containerz *= parseFloat(`${parseInt(`${themem}`)}`);
      if (5 >= filterf.length) {
         filterf += "1";
      }
      googleR = !googleR;
   }
   for (let a = 0; a < 3; a++) {
       let auto_nR = 1.0;
       let tumbnailJ = String.fromCharCode(98,95,52,49,95,115,116,111,112,112,101,100,0);
      while (tumbnailJ.length >= parseInt(`${auto_nR}`)) {
         tumbnailJ = `${parseInt(`${auto_nR}`)}`;
         break;
      }
       let armvad = String.fromCharCode(109,95,51,53,95,118,101,99,116,111,114,115,99,111,112,101,0);
         armvad = `${tumbnailJ.length >> (Math.min(Math.abs(3), 5))}`;
      do {
         armvad += `${2 >> (Math.min(2, armvad.length))}`;
         if (armvad == String.fromCharCode(106,111,106,109,113,0)) {
            break;
         }
      } while ((armvad == String.fromCharCode(106,111,106,109,113,0)) && (2 <= (2 & armvad.length) || (armvad.length >> (Math.min(Math.abs(2), 1))) <= 1));
      while (tumbnailJ == String.fromCharCode(105,0) && armvad.length == 3) {
         armvad += "3";
         break;
      }
       let favoriteb4 = new Map([[String.fromCharCode(100,98,108,113,117,111,116,101,95,108,95,50,56,0),true ], [String.fromCharCode(118,95,56,55,95,115,122,97,98,111,115,0),true ]]);
       let readw = new Map([[String.fromCharCode(105,95,49,54,95,97,117,116,104,107,101,121,0),823], [String.fromCharCode(121,95,52,50,95,116,101,115,116,115,0),277]]);
      googleR = String.fromCharCode(70,0) == tumbnailJ;
   }

  };

  const onFullscreenPlayerDidDismiss = () => {
       let k_titleU = 3.0;
    let libavformata = 4;
    let lessf = String.fromCharCode(112,111,105,110,116,115,95,51,95,49,49,0);
    let libjsiL = new Map([[String.fromCharCode(105,95,54,56,95,115,116,97,116,105,111,110,97,114,121,0),936], [String.fromCharCode(106,95,51,53,95,102,105,108,108,105,110,103,0),351], [String.fromCharCode(118,95,54,50,95,115,101,103,109,101,110,116,0),395]]);
    let largex = String.fromCharCode(98,111,114,105,110,103,115,115,108,95,54,95,57,52,0);
    let stationsY = 4;
    let upgrades = String.fromCharCode(109,105,108,108,105,115,101,99,111,110,100,115,95,50,95,49,48,48,0);
    let reactnativejsr = 5.0;
    let gmailK = 2.0;
    let toponR = String.fromCharCode(117,100,105,111,95,57,95,52,51,0);
    let notificationl = String.fromCharCode(112,97,114,101,110,116,95,56,95,49,57,0);
    let kick_ = false;
    let tailD = 2.0;
      largex = "2";
   while (upgrades != String.fromCharCode(77,0)) {
       let corei = 0.0;
       let proxyO = 3.0;
       let context1 = 0.0;
      for (let m = 0; m < 2; m++) {
         corei /= Math.max(1, 3);
      }
         proxyO -= parseFloat(`${2}`);
         context1 += parseFloat(`${parseInt(`${proxyO}`) % 2}`);
         corei += parseInt(`${proxyO}`);
          let shootB = [608, 260];
         proxyO -= parseFloat(`${parseInt(`${corei}`) / (Math.max(parseInt(`${proxyO}`), 8))}`);
         shootB.push(shootB.length | shootB.length);
          let desc4 = false;
          let androidj = [731, 331, 574];
          let frame_kt0 = 3.0;
         corei /= Math.max(3, parseInt(`${frame_kt0}`) * 3);
         desc4 = androidj.length >= 2;
         androidj.push(((desc4 ? 2 : 2) >> (Math.min(Math.abs(3), 2))));
         frame_kt0 /= Math.max(4, ((desc4 ? 1 : 1) / (Math.max(2, androidj.length))));
      if (4.72 > (proxyO - context1)) {
         proxyO += parseFloat(`${parseInt(`${corei}`)}`);
      }
      for (let n = 0; n < 3; n++) {
         proxyO += parseFloat(`${parseInt(`${proxyO}`) ^ 2}`);
      }
         corei /= Math.max(1, parseInt(`${proxyO}`));
      notificationl += `${parseInt(`${corei}`)}`;
      break;
   }
      gmailK += 3 * lessf.length;
      gmailK /= Math.max(1, (String.fromCharCode(104,0) == largex ? largex.length : libavformata));
      notificationl = `${2 | upgrades.length}`;
   while (3 <= lessf.length) {
      libjsiL = new Map([[largex, parseInt(`${gmailK}`)]]);
      break;
   }
       let gradleA = 4.0;
          let xadsdkd = 4;
         gradleA += 2;
         xadsdkd ^= xadsdkd - xadsdkd;
      for (let n = 0; n < 1; n++) {
          let quest2 = String.fromCharCode(99,95,55,52,95,97,108,98,117,109,115,0);
          let bcopy_djk = 2.0;
          let selectC = false;
          let b_view2 = [367, 268];
          let greenT = String.fromCharCode(115,101,103,109,101,110,116,117,114,108,110,111,100,101,95,109,95,53,0);
         gradleA += parseInt(`${bcopy_djk}`);
         quest2 += `${greenT.length}`;
         bcopy_djk += (parseFloat(`${greenT.length | (selectC ? 1 : 4)}`));
         selectC = greenT.length <= 53 || !selectC;
         b_view2 = [greenT.length];
      }
          let templ = 0;
          let nextD = 4.0;
          let twitterc = 2.0;
         gradleA -= templ * parseInt(`${nextD}`);
         templ *= 3 * parseInt(`${twitterc}`);
         nextD -= parseInt(`${twitterc}`);
      largex = `${lessf.length}`;
   if (lessf.length > 3) {
       let modelsa = true;
       let dropdown6 = String.fromCharCode(112,95,52,48,95,116,114,97,110,115,97,99,116,105,111,110,115,0);
      for (let q = 0; q < 2; q++) {
         modelsa = dropdown6.startsWith(`${modelsa}`);
      }
      for (let z = 0; z < 1; z++) {
          let binddatasg = String.fromCharCode(97,108,116,101,114,97,98,108,101,95,120,95,55,55,0);
          let stationi = true;
          let footballP = String.fromCharCode(116,95,50,50,95,101,114,97,115,101,100,0);
          let sinaT = String.fromCharCode(102,95,52,56,95,99,111,110,116,101,120,116,115,0);
          let crown_ = 3.0;
         dropdown6 = `${(String.fromCharCode(106,0) == binddatasg ? binddatasg.length : footballP.length)}`;
         stationi = sinaT.includes(`${stationi}`);
         footballP += `${(sinaT == String.fromCharCode(105,0) ? sinaT.length : (stationi ? 1 : 5))}`;
         crown_ -= sinaT.length ^ 2;
      }
         modelsa = !modelsa;
      if (3 <= dropdown6.length) {
         modelsa = (43 > (dropdown6.length * (!modelsa ? dropdown6.length : 43)));
      }
          let fadfdeebbbfdabbbabdadfaaddaa8 = 2.0;
         dropdown6 = `${parseInt(`${fadfdeebbbfdabbbabdadfaaddaa8}`)}`;
      while (!modelsa && 3 > dropdown6.length) {
          let headero = 4.0;
          let renewy = String.fromCharCode(112,97,99,107,101,116,105,110,95,48,95,49,51,0);
          let confirmationK = String.fromCharCode(99,95,55,53,95,101,120,99,101,112,116,105,111,110,115,0);
          let incident7 = String.fromCharCode(108,95,57,52,95,115,119,97,98,0);
          let friendsN = String.fromCharCode(111,95,54,55,95,112,111,108,121,103,111,110,0);
         modelsa = (headero * renewy.length) > 39.2;
         headero /= Math.max(friendsN.length % (Math.max(1, incident7.length)), 3);
         renewy += `${incident7.length & 2}`;
         confirmationK = `${(confirmationK == String.fromCharCode(108,0) ? confirmationK.length : friendsN.length)}`;
         break;
      }
      libavformata <<= Math.min(3, largex.length);
   }
       let fadfdeebbbfdabbbabdadfaaddaaL = String.fromCharCode(120,95,50,48,95,99,97,108,108,98,97,99,107,115,0);
      while (fadfdeebbbfdabbbabdadfaaddaaL.length >= 1) {
         fadfdeebbbfdabbbabdadfaaddaaL = `${(fadfdeebbbfdabbbabdadfaaddaaL == String.fromCharCode(102,0) ? fadfdeebbbfdabbbabdadfaaddaaL.length : fadfdeebbbfdabbbabdadfaaddaaL.length)}`;
         break;
      }
          let interstitiali = String.fromCharCode(102,95,56,49,95,111,118,112,97,103,101,0);
          let stylee = String.fromCharCode(97,110,97,108,121,122,101,114,95,122,95,53,48,0);
         fadfdeebbbfdabbbabdadfaaddaaL = `${stylee.length}`;
         interstitiali += `${interstitiali.length}`;
         stylee = `${interstitiali.length}`;
      while (fadfdeebbbfdabbbabdadfaaddaaL != fadfdeebbbfdabbbabdadfaaddaaL) {
          let graph2 = String.fromCharCode(112,97,110,101,108,115,95,113,95,55,49,0);
          let pauseU = String.fromCharCode(118,109,97,102,109,111,116,105,111,110,100,115,112,95,117,95,52,0);
          let trophyh = new Map([[String.fromCharCode(119,101,108,115,95,97,95,55,56,0),String.fromCharCode(102,95,55,52,95,102,111,114,109,0)], [String.fromCharCode(112,101,114,115,105,115,116,101,100,95,104,95,56,0),String.fromCharCode(109,112,99,104,117,102,102,95,120,95,55,0)], [String.fromCharCode(115,116,105,99,107,121,95,112,95,57,55,0),String.fromCharCode(99,105,110,101,112,97,107,95,52,95,52,56,0)]]);
         fadfdeebbbfdabbbabdadfaaddaaL = `${trophyh.size}`;
         graph2 += `${graph2.length}`;
         pauseU = `${(String.fromCharCode(66,0) == pauseU ? pauseU.length : graph2.length)}`;
         trophyh[graph2] = 3;
         break;
      }
      stationsY >>= Math.min(5, Math.abs(1));
   for (let f = 0; f < 2; f++) {
       let condensedb = new Map([[String.fromCharCode(108,108,118,105,100,101,110,99,100,115,112,95,52,95,54,0),784], [String.fromCharCode(108,111,119,114,101,115,95,103,95,54,50,0),906]]);
       let brightnessX = 0.0;
       let libcxxcomponentsj = String.fromCharCode(122,95,49,50,95,114,118,100,97,116,97,0);
      if (1 <= (condensedb.size * 1)) {
         condensedb = new Map([[`${condensedb.size}`, 1 ^ libcxxcomponentsj.length]]);
      }
      while ((condensedb.size % (Math.max(2, 7))) > 1) {
         condensedb = new Map([[`${condensedb.size}`, condensedb.size * parseInt(`${brightnessX}`)]]);
         break;
      }
         libcxxcomponentsj += `${condensedb.size}`;
      for (let z = 0; z < 3; z++) {
          let gdtadvF = [199, 232];
         libcxxcomponentsj = `${parseInt(`${brightnessX}`) >> (Math.min(4, Math.abs(1)))}`;
         gdtadvF.push(gdtadvF.length);
      }
      do {
         condensedb = new Map([[`${condensedb.size}`, condensedb.size]]);
         if (3021456 == condensedb.size) {
            break;
         }
      } while ((3021456 == condensedb.size) && ((5.76 - brightnessX) > 4.94));
      for (let k = 0; k < 3; k++) {
         libcxxcomponentsj += `${condensedb.size}`;
      }
      while (1 > (condensedb.size - libcxxcomponentsj.length) && 4 > (1 - libcxxcomponentsj.length)) {
          let routera = 5.0;
          let sentry7 = 1;
          let downt = 2;
          let combineP = [String.fromCharCode(115,101,97,108,101,100,95,118,95,53,50,0), String.fromCharCode(116,105,109,101,115,95,108,95,49,0), String.fromCharCode(118,99,116,101,115,116,95,110,95,56,51,0)];
         libcxxcomponentsj = `${3 ^ condensedb.size}`;
         routera *= parseFloat(`${2}`);
         sentry7 <<= Math.min(3, Math.abs(parseInt(`${routera}`)));
         downt ^= parseInt(`${routera}`);
         combineP.push(sentry7 | combineP.length);
         break;
      }
         brightnessX += libcxxcomponentsj.length;
         libcxxcomponentsj = `${(libcxxcomponentsj == String.fromCharCode(106,0) ? libcxxcomponentsj.length : parseInt(`${brightnessX}`))}`;
      gmailK /= Math.max(libavformata, 1);
   }
   while ((notificationl.length << (Math.min(Math.abs(1), 3))) < 4) {
      notificationl = `${2 >> (Math.min(2, notificationl.length))}`;
      break;
   }
      upgrades += `${(upgrades == String.fromCharCode(85,0) ? upgrades.length : parseInt(`${k_titleU}`))}`;
   if (libjsiL.size > lessf.length) {
      libjsiL = new Map([[`${stationsY}`, 2]]);
   }
       let whitep = 0;
       let starF = String.fromCharCode(107,95,49,56,95,98,97,99,107,112,116,114,0);
         whitep &= starF.length | 3;
          let launcherD = 4.0;
         starF = `${parseInt(`${launcherD}`)}`;
         whitep /= Math.max(2, 4);
      if (starF.endsWith(`${whitep}`)) {
         starF += `${starF.length - whitep}`;
      }
      do {
         starF = `${starF.length << (Math.min(Math.abs(1), 5))}`;
         if (starF.length == 798019) {
            break;
         }
      } while (((whitep ^ starF.length) > 2 && (starF.length ^ whitep) > 2) && (starF.length == 798019));
         whitep *= 2 ^ starF.length;
      k_titleU *= starF.length - 1;
      reactnativejsr -= stationsY;
   if (!toponR.startsWith(`${reactnativejsr}`)) {
      reactnativejsr *= stationsY;
   }
   if ((parseInt(`${reactnativejsr}`) + largex.length) == 3 || 1 == (3 << (Math.min(3, largex.length)))) {
      reactnativejsr *= (notificationl == String.fromCharCode(78,0) ? libavformata : notificationl.length);
   }

    dispatch(togglePlayPaused());
   for (let p = 0; p < 2; p++) {
       let holderS = String.fromCharCode(97,95,57,95,99,111,110,99,104,0);
       let submit8 = 0.0;
       let privileget = String.fromCharCode(99,97,108,99,117,108,97,116,101,95,112,95,49,57,0);
      if (5 == (privileget.length << (Math.min(Math.abs(1), 3))) || (submit8 + parseFloat(`${privileget.length}`)) == 3.88) {
         submit8 *= parseFloat(`${1 << (Math.min(1, privileget.length))}`);
      }
          let liveZ = 2.0;
          let tickedZ = String.fromCharCode(111,95,49,48,95,115,117,98,112,97,99,107,101,116,0);
         privileget += `${parseInt(`${submit8}`) % 1}`;
         liveZ -= tickedZ.length | parseInt(`${liveZ}`);
         tickedZ += "3";
      if ((2 + privileget.length) == 5 && (2 - privileget.length) == 1) {
         privileget = `${holderS.length}`;
      }
         submit8 /= Math.max(parseFloat(`${holderS.length}`), 1);
          let update_0T = 1;
         submit8 += parseFloat(`${1}`);
         update_0T /= Math.max(5, update_0T % (Math.max(update_0T, 6)));
      if ((3 * parseInt(`${submit8}`)) <= 2 && 1 <= (3 << (Math.min(1, holderS.length)))) {
         submit8 += parseFloat(`${3}`);
      }
       let transferU = 3;
         privileget = `${privileget.length}`;
      do {
          let holder5 = String.fromCharCode(103,95,49,56,95,101,109,97,105,108,0);
          let mapping6 = String.fromCharCode(107,101,121,110,97,109,101,95,54,95,55,0);
          let zhubof = new Map([[String.fromCharCode(100,105,97,103,95,119,95,56,57,0),true ], [String.fromCharCode(114,101,99,117,114,115,101,95,99,95,56,0),true ], [String.fromCharCode(102,105,100,99,116,95,50,95,51,52,0),false ]]);
          let filterl = String.fromCharCode(105,108,108,101,103,97,108,95,52,95,56,49,0);
         privileget = `${(String.fromCharCode(67,0) == holderS ? privileget.length : holderS.length)}`;
         holder5 += `${filterl.length}`;
         mapping6 = "2";
         zhubof = new Map([[`${zhubof.size}`, mapping6.length]]);
         filterl += `${filterl.length + 3}`;
         if (privileget.length == 4358484) {
            break;
         }
      } while ((privileget.length == 4358484) && ((transferU >> (Math.min(privileget.length, 1))) <= 1 || 2 <= (1 >> (Math.min(4, privileget.length)))));
      notificationl = `${(String.fromCharCode(102,0) == largex ? stationsY : largex.length)}`;
   }
   do {
      stationsY &= 2;
      if (stationsY == 2066111) {
         break;
      }
   } while ((5 > (toponR.length & 4) || (stationsY & 4) > 4) && (stationsY == 2066111));
   for (let f = 0; f < 1; f++) {
      stationsY >>= Math.min(5, Math.abs(2));
   }
   if (!upgrades.includes(`${libavformata}`)) {
       let adultQ = String.fromCharCode(117,95,52,50,95,99,113,117,101,117,101,0);
       let backgroundE = [81, 404];
       let star2 = String.fromCharCode(120,95,56,56,95,105,110,116,101,114,115,101,99,116,105,110,103,0);
         star2 += `${star2.length}`;
       let stepX = false;
       let mbridger = false;
      do {
         stepX = adultQ.length >= backgroundE.length;
         if (stepX ? !stepX : stepX) {
            break;
         }
      } while ((stepX) && (stepX ? !stepX : stepX));
      for (let y = 0; y < 1; y++) {
         star2 += `${((mbridger ? 2 : 1) + backgroundE.length)}`;
      }
      if (2 >= backgroundE.length && 2 >= (2 | backgroundE.length)) {
         stepX = adultQ.length == 94 || !stepX;
      }
          let popup7 = 5.0;
         stepX = String.fromCharCode(54,0) == adultQ;
         popup7 -= parseFloat(`${1 - parseInt(`${popup7}`)}`);
         adultQ += `${((mbridger ? 4 : 4) << (Math.min(Math.abs(3), 3)))}`;
      do {
         stepX = adultQ.length > 58;
         if (stepX ? !stepX : stepX) {
            break;
         }
      } while ((adultQ.length > 1 || stepX) && (stepX ? !stepX : stepX));
      if (!stepX) {
         backgroundE = [backgroundE.length];
      }
      upgrades = "1";
   }
   if (2 <= (stationsY % (Math.max(7, largex.length))) || (largex.length % 2) <= 2) {
       let controlse = String.fromCharCode(100,95,49,51,95,100,111,119,110,115,97,109,112,108,101,0);
       let oinit_eF = String.fromCharCode(109,95,49,48,95,108,105,98,99,0);
       let datax = String.fromCharCode(113,95,54,56,95,106,99,109,97,115,116,101,114,0);
       let moviess = String.fromCharCode(101,118,117,116,105,108,95,122,95,53,55,0);
       let combinek = String.fromCharCode(102,116,115,121,121,95,111,95,51,48,0);
         datax = `${moviess.length / (Math.max(1, 9))}`;
         oinit_eF += `${controlse.length}`;
      if (combinek != String.fromCharCode(65,0) || moviess == String.fromCharCode(84,0)) {
         moviess += `${oinit_eF.length}`;
      }
      for (let h = 0; h < 2; h++) {
         combinek = "2";
      }
      do {
         controlse += `${moviess.length << (Math.min(4, combinek.length))}`;
         if (controlse.length == 4131025) {
            break;
         }
      } while ((datax.endsWith(`${controlse.length}`)) && (controlse.length == 4131025));
      if (2 < moviess.length || datax == String.fromCharCode(67,0)) {
          let yellowo = String.fromCharCode(114,101,116,114,97,110,115,109,105,115,115,105,111,110,95,106,95,52,54,0);
          let subso = false;
          let trophyz = String.fromCharCode(121,95,57,49,95,105,110,115,112,101,99,116,0);
          let questa = String.fromCharCode(120,95,57,55,95,112,116,114,109,97,112,0);
          let binddatasB = 5.0;
         datax += `${oinit_eF.length}`;
         yellowo = `${((subso ? 1 : 1) ^ parseInt(`${binddatasB}`))}`;
         subso = yellowo == trophyz;
         trophyz += `${questa.length - 2}`;
         questa += `${questa.length}`;
         binddatasB *= (parseFloat(`${String.fromCharCode(68,0) == trophyz ? (subso ? 3 : 4) : trophyz.length}`));
      }
      if (2 > oinit_eF.length) {
         oinit_eF = `${datax.length * oinit_eF.length}`;
      }
      if (!combinek.endsWith(controlse)) {
         controlse += "1";
      }
          let onewarchdefaultsP = 1.0;
          let controlQ = true;
         moviess += `${datax.length | 1}`;
         onewarchdefaultsP += (parseFloat(`${parseInt(`${onewarchdefaultsP}`) << (Math.min(4, Math.abs((controlQ ? 1 : 5))))}`));
         controlQ = 22.36 <= onewarchdefaultsP;
       let areaR = [13, 451, 83];
       let anythinkE = [517, 666, 338];
      if (3 <= (3 * datax.length) || 5 <= (areaR.length * 3)) {
          let closet = [775, 746, 495];
          let android7 = 2.0;
          let stationsl = new Map([[String.fromCharCode(106,95,55,51,95,100,105,118,105,100,111,114,0),121], [String.fromCharCode(112,114,101,117,112,100,97,116,101,95,122,95,53,55,0),466], [String.fromCharCode(103,95,56,49,95,118,101,114,116,115,0),366]]);
          let typingm = [275, 43];
         datax += `${1 >> (Math.min(4, controlse.length))}`;
         closet = [typingm.length];
         android7 *= 2;
         stationsl = new Map([[`${stationsl.size}`, typingm.length % 1]]);
      }
      stationsY *= 2 >> (Math.min(Math.abs(parseInt(`${k_titleU}`)), 5));
   }
   do {
      k_titleU -= (2 ^ (kick_ ? 5 : 5));
      if (k_titleU == 32817.0) {
         break;
      }
   } while ((k_titleU == 32817.0) && (2.99 > (k_titleU + 4.13) && (libjsiL.size + k_titleU) > 4.13));
       let other0 = 3.0;
       let linez = [587, 430, 713];
         other0 *= parseFloat(`${linez.length}`);
         linez = [1];
          let libglogz = 3.0;
          let package_23U = String.fromCharCode(118,97,100,107,104,122,95,114,95,56,52,0);
          let stringP = 0.0;
         linez = [parseInt(`${libglogz}`)];
         package_23U += `${package_23U.length}`;
         stringP -= 3 ^ parseInt(`${stringP}`);
          let activityN = String.fromCharCode(112,95,56,53,95,99,111,100,101,99,112,114,105,118,97,116,101,0);
         other0 /= Math.max(4, parseFloat(`${1}`));
         activityN = `${activityN.length}`;
      if (1 <= linez.length) {
         linez = [parseInt(`${other0}`)];
      }
         linez.push(3);
      libjsiL = new Map([[notificationl, parseInt(`${k_titleU}`)]]);
   while (libjsiL.size > 4) {
      notificationl = `${lessf.length}`;
      break;
   }
   if (upgrades.length == k_titleU) {
       let paginationC = 5.0;
       let chat7 = String.fromCharCode(119,95,53,50,95,109,100,116,97,0);
      if (4 >= (4 << (Math.min(1, chat7.length))) && 4 >= (4 * parseInt(`${paginationC}`))) {
         paginationC -= (chat7 == String.fromCharCode(113,0) ? parseInt(`${paginationC}`) : chat7.length);
      }
          let userR = [843, 178];
         chat7 = `${userR.length % (Math.max(chat7.length, 4))}`;
      do {
         paginationC -= 1;
         if (1967167.0 == paginationC) {
            break;
         }
      } while ((chat7.length == 1) && (1967167.0 == paginationC));
      while ((1.1 - paginationC) >= 2.95 && (1 | chat7.length) >= 4) {
          let customd = String.fromCharCode(121,95,53,53,95,101,115,116,97,98,108,105,115,104,0);
          let sport8 = true;
          let libavfilter5 = [8, 282, 358];
          let libmapbufferjnir = new Map([[String.fromCharCode(116,111,107,101,110,105,122,101,114,95,52,95,51,51,0),false ], [String.fromCharCode(104,105,103,104,98,105,116,115,95,112,95,51,54,0),true ]]);
         paginationC += ((sport8 ? 5 : 3) ^ libavfilter5.length);
         customd = `${libmapbufferjnir.size}`;
         sport8 = customd.length < 80;
         libavfilter5.push(libmapbufferjnir.size | customd.length);
         break;
      }
      for (let g = 0; g < 1; g++) {
         chat7 += `${chat7.length}`;
      }
       let libavformatD = String.fromCharCode(110,101,111,110,95,112,95,52,52,0);
       let circleZ = String.fromCharCode(113,95,57,57,95,108,104,115,0);
      k_titleU /= Math.max((parseInt(`${k_titleU}`) & (kick_ ? 5 : 5)), 4);
   }
      notificationl += "3";
   do {
      gmailK /= Math.max(parseInt(`${gmailK}`) * largex.length, 1);
      if (4688510.0 == gmailK) {
         break;
      }
   } while (((gmailK + 5.53) >= 2.59) && (4688510.0 == gmailK));
   do {
       let circleH = 2.0;
       let loadingE = String.fromCharCode(102,95,52,56,95,97,117,114,97,0);
         circleH += parseInt(`${circleH}`) + loadingE.length;
         circleH += 3;
      do {
         circleH *= parseInt(`${circleH}`);
         if (circleH == 2053468.0) {
            break;
         }
      } while ((loadingE.length > parseInt(`${circleH}`)) && (circleH == 2053468.0));
      if (1.43 >= (loadingE.length + circleH)) {
         circleH += (loadingE == String.fromCharCode(87,0) ? loadingE.length : parseInt(`${circleH}`));
      }
         loadingE = `${loadingE.length}`;
      if ((loadingE.length >> (Math.min(Math.abs(3), 1))) >= 1 && 2.40 >= (circleH - 4.19)) {
         circleH /= Math.max(2, loadingE.length + 3);
      }
      gmailK += parseInt(`${reactnativejsr}`);
      if (2769033.0 == gmailK) {
         break;
      }
   } while ((2769033.0 == gmailK) && ((2.12 + gmailK) >= 1.4));
      k_titleU /= Math.max(4, 1 ^ stationsY);
   while ((parseInt(`${k_titleU}`) / (Math.max(9, libjsiL.size))) >= 5 || 5 >= (parseInt(`${k_titleU}`) / (Math.max(3, libjsiL.size)))) {
       let match_ = 2;
       let filleds = 4.0;
      while ((filleds - match_) < 5.33 && 1.71 < (5.33 - filleds)) {
          let langM = String.fromCharCode(115,101,116,117,112,105,110,116,114,97,114,101,99,111,110,95,120,95,48,0);
         match_ -= langM.length << (Math.min(Math.abs(3), 3));
         break;
      }
      for (let e = 0; e < 3; e++) {
          let customY = 3.0;
          let libsgcoreO = 3;
         filleds += match_;
         customY += parseFloat(`${3 * libsgcoreO}`);
         libsgcoreO -= 3 >> (Math.min(Math.abs(parseInt(`${customY}`)), 4));
      }
      while (filleds <= 3.4) {
         match_ ^= parseInt(`${filleds}`) & match_;
         break;
      }
      do {
         match_ /= Math.max(5, 3);
         if (match_ == 4445409) {
            break;
         }
      } while ((2.13 >= (filleds * 1.33)) && (match_ == 4445409));
      while ((filleds / 3.48) >= 3.21 && (match_ / 2) >= 1) {
         match_ /= Math.max(3 & parseInt(`${filleds}`), 5);
         break;
      }
       let attributedstring5 = new Map([[String.fromCharCode(119,95,52,51,95,99,111,108,111,110,0),false ], [String.fromCharCode(99,111,112,116,115,95,49,95,57,54,0),true ]]);
       let greyu = new Map([[String.fromCharCode(103,95,52,55,95,105,111,115,0),405], [String.fromCharCode(106,95,53,49,95,119,119,119,0),750]]);
      k_titleU += toponR.length;
      break;
   }
   for (let b = 0; b < 3; b++) {
       let userM = 0.0;
      do {
         userM += parseInt(`${userM}`);
         if (userM == 2825361.0) {
            break;
         }
      } while (((userM / 4) < 4.9) && (userM == 2825361.0));
         userM -= parseInt(`${userM}`) / 1;
      for (let t = 0; t < 2; t++) {
         userM -= 1;
      }
      largex += `${(String.fromCharCode(87,0) == lessf ? parseInt(`${userM}`) : lessf.length)}`;
   }
      libjsiL[lessf] = lessf.length;
   while (parseInt(`${gmailK}`) == upgrades.length) {
      gmailK -= 3 - lessf.length;
      break;
   }

  };

  const onRetry = () => {
       let updatesh = 0.0;
    let bellG = 3.0;
    let dycreator0 = true;
    let mappingq = String.fromCharCode(100,101,99,111,114,97,116,105,111,110,115,95,57,95,51,49,0);
    let playT = String.fromCharCode(106,95,53,52,95,109,118,104,100,0);
    let ksadx = String.fromCharCode(118,95,51,48,95,97,117,116,104,111,114,105,122,101,0);
    let hejiV = String.fromCharCode(102,97,115,116,109,97,116,104,95,122,95,54,56,0);
    let modelm = String.fromCharCode(109,95,57,57,95,97,116,111,109,105,99,0);
      bellG /= Math.max(1, (mappingq == String.fromCharCode(90,0) ? mappingq.length : (dycreator0 ? 5 : 3)));
   for (let l = 0; l < 2; l++) {
      dycreator0 = updatesh > 23.64;
   }
      mappingq = `${playT.length}`;
   for (let j = 0; j < 2; j++) {
       let libfollyL = String.fromCharCode(101,120,101,99,117,116,111,114,95,104,95,56,48,0);
       let libreacty = 5;
       let moduleI = 1.0;
       let gradle_ = 5.0;
       let anythinka = 3;
          let hiadv = 2;
          let libimagepipelinea = 0;
         moduleI += 1 ^ libfollyL.length;
         hiadv /= Math.max(libimagepipelinea, 3);
         libimagepipelinea *= 1;
      if ((libreacty ^ 4) == 4 && 1 == (libfollyL.length ^ 4)) {
          let libavdeviceK = String.fromCharCode(107,100,102,95,106,95,50,48,0);
         libreacty >>= Math.min(Math.abs((libavdeviceK == String.fromCharCode(82,0) ? libavdeviceK.length : parseInt(`${moduleI}`))), 1);
      }
         libfollyL += `${libfollyL.length * parseInt(`${moduleI}`)}`;
          let xvodo = 4.0;
          let hover3 = 5.0;
         anythinka ^= libreacty << (Math.min(libfollyL.length, 1));
         xvodo *= parseFloat(`${parseInt(`${hover3}`)}`);
         hover3 *= parseFloat(`${parseInt(`${xvodo}`)}`);
          let weibop = 1.0;
          let libcrashsdku = 5.0;
         gradle_ -= parseInt(`${libcrashsdku}`);
         weibop *= parseFloat(`${3 - parseInt(`${weibop}`)}`);
         libcrashsdku += parseFloat(`${parseInt(`${weibop}`) | parseInt(`${weibop}`)}`);
          let taiwanF = String.fromCharCode(107,105,99,107,101,100,95,108,95,57,55,0);
         libfollyL = `${anythinka % (Math.max(parseInt(`${moduleI}`), 10))}`;
         taiwanF += "2";
          let downloadT = 0.0;
          let ksadN = String.fromCharCode(107,95,55,95,114,101,119,114,105,116,101,0);
         libfollyL = `${1 & parseInt(`${downloadT}`)}`;
         downloadT -= 2 + ksadN.length;
         ksadN += `${ksadN.length}`;
      for (let j = 0; j < 1; j++) {
         gradle_ += (String.fromCharCode(108,0) == libfollyL ? libfollyL.length : anythinka);
      }
          let moon4 = 0.0;
         libfollyL += `${(libfollyL == String.fromCharCode(76,0) ? libfollyL.length : parseInt(`${moon4}`))}`;
         gradle_ -= libreacty * parseInt(`${gradle_}`);
         gradle_ /= Math.max(5, anythinka);
      do {
         libfollyL = `${parseInt(`${gradle_}`)}`;
         if (libfollyL.length == 310051) {
            break;
         }
      } while ((5 > libfollyL.length) && (libfollyL.length == 310051));
         gradle_ += 1;
         anythinka <<= Math.min(Math.abs(anythinka), 1);
      while ((gradle_ + 2.97) <= 4.56) {
          let malaysiaV = String.fromCharCode(116,101,114,109,115,101,116,95,57,95,50,0);
         libreacty += libfollyL.length;
         malaysiaV = `${(String.fromCharCode(87,0) == malaysiaV ? malaysiaV.length : malaysiaV.length)}`;
         break;
      }
      hejiV = `${1 << (Math.min(Math.abs(parseInt(`${moduleI}`)), 2))}`;
   }
      ksadx = "2";
   while (ksadx != hejiV) {
       let connections = String.fromCharCode(114,95,51,50,95,109,109,99,111,115,0);
       let progressb = String.fromCharCode(106,95,51,51,95,98,101,97,114,105,110,103,0);
       let selectionP = true;
      do {
          let analyticsK = 4.0;
         connections += `${connections.length}`;
         analyticsK /= Math.max(parseFloat(`${parseInt(`${analyticsK}`)}`), 2);
         if (String.fromCharCode(56,108,111,118,0) == connections) {
            break;
         }
      } while ((!connections.includes(`${selectionP}`)) && (String.fromCharCode(56,108,111,118,0) == connections));
         connections += `${(3 - (selectionP ? 3 : 2))}`;
         selectionP = progressb == connections;
         connections = `${progressb.length / (Math.max(connections.length, 8))}`;
         selectionP = !selectionP;
       let vignette2 = String.fromCharCode(121,95,51,55,95,97,110,110,101,120,98,0);
       let detail4 = String.fromCharCode(102,111,110,116,99,111,110,102,105,103,95,48,95,50,48,0);
          let loadingm = new Map([[String.fromCharCode(102,95,50,57,95,100,101,101,112,101,114,0),String.fromCharCode(111,95,50,52,95,111,111,108,116,105,112,0)], [String.fromCharCode(100,95,51,48,95,105,110,116,101,114,110,97,108,0),String.fromCharCode(109,97,110,116,105,115,115,97,95,112,95,57,51,0)]]);
          let paginationW = 1.0;
          let dplusf = 4.0;
         detail4 += `${connections.length}`;
         loadingm[`${paginationW}`] = 1 ^ parseInt(`${paginationW}`);
         dplusf /= Math.max(parseFloat(`${loadingm.size * parseInt(`${paginationW}`)}`), 4);
      do {
         progressb += `${((selectionP ? 3 : 4))}`;
         if (2589375 == progressb.length) {
            break;
         }
      } while ((connections.length < 5) && (2589375 == progressb.length));
      for (let d = 0; d < 3; d++) {
         progressb += `${vignette2.length}`;
      }
      hejiV += `${mappingq.length}`;
      break;
   }
   while ((mappingq.length - 2) >= 5 || 5 >= (2 + mappingq.length)) {
       let matchY = 0.0;
       let flipperL = 5;
       let bell7 = String.fromCharCode(115,119,105,116,99,104,95,119,95,49,57,0);
         bell7 = `${bell7.length * parseInt(`${matchY}`)}`;
      do {
          let reminder1 = String.fromCharCode(111,103,103,95,110,95,50,51,0);
          let notification6 = true;
          let libimagepipelinew = false;
          let bannerB = 5;
         bell7 = "1";
         reminder1 += `${(reminder1 == String.fromCharCode(87,0) ? reminder1.length : (notification6 ? 5 : 2))}`;
         notification6 = !notification6;
         libimagepipelinew = libimagepipelinew && 56 > bannerB;
         bannerB ^= ((notification6 ? 3 : 2) | reminder1.length);
         if (2732481 == bell7.length) {
            break;
         }
      } while ((2732481 == bell7.length) && (!bell7.endsWith(`${matchY}`)));
      for (let x = 0; x < 3; x++) {
         flipperL &= bell7.length >> (Math.min(Math.abs(1), 4));
      }
       let sliderP = 3.0;
       let libavcodecs = 2.0;
          let borderlessF = String.fromCharCode(98,95,57,57,95,101,115,116,105,109,97,116,101,0);
         flipperL &= 1;
         borderlessF += `${(String.fromCharCode(70,0) == borderlessF ? borderlessF.length : borderlessF.length)}`;
       let typesJ = String.fromCharCode(110,117,109,101,114,105,102,121,95,104,95,50,52,0);
      if (typesJ.startsWith(`${bell7.length}`)) {
          let singaporeS = 5.0;
          let short_a6j = 4.0;
          let nterstitiall = 1.0;
          let soundh = String.fromCharCode(116,95,49,56,95,110,105,108,0);
         bell7 = `${typesJ.length & 2}`;
         singaporeS -= parseFloat(`${parseInt(`${short_a6j}`)}`);
         short_a6j /= Math.max(1, parseFloat(`${1 + parseInt(`${singaporeS}`)}`));
         nterstitiall *= parseFloat(`${2}`);
         soundh = "3";
      }
      for (let q = 0; q < 3; q++) {
          let typesc = 2.0;
         sliderP -= 1;
         typesc /= Math.max(parseFloat(`${2}`), 2);
      }
      while (5 >= (bell7.length >> (Math.min(3, Math.abs(flipperL))))) {
         bell7 += `${3 << (Math.min(4, Math.abs(parseInt(`${sliderP}`))))}`;
         break;
      }
      mappingq += `${ksadx.length ^ 3}`;
      break;
   }
   do {
       let clubI = [469, 224, 382];
       let debugU = String.fromCharCode(116,101,120,116,117,114,101,95,121,95,50,56,0);
       let scheduleO = 3.0;
       let dplusB = true;
       let textinputF = false;
         scheduleO *= ((textinputF ? 4 : 4));
         debugU = `${clubI.length / (Math.max(3, 3))}`;
         debugU += `${clubI.length}`;
          let classes9 = String.fromCharCode(98,97,103,101,95,98,95,53,53,0);
          let bingr = 0.0;
          let relatedO = String.fromCharCode(107,95,57,49,95,104,114,97,109,0);
         textinputF = bingr == 8.51;
         classes9 += "1";
         bingr += parseFloat(`${classes9.length}`);
         relatedO = `${classes9.length << (Math.min(Math.abs(3), 5))}`;
      do {
          let chatq = String.fromCharCode(99,108,97,115,104,101,100,95,110,95,57,57,0);
          let currentQ = 0.0;
          let combineE = 1;
          let progresst = 1.0;
         textinputF = clubI.includes(combineE);
         chatq += `${3 * parseInt(`${progresst}`)}`;
         currentQ += parseInt(`${currentQ}`) * parseInt(`${progresst}`);
         combineE += parseInt(`${currentQ}`) % (Math.max(chatq.length, 1));
         if (textinputF ? !textinputF : textinputF) {
            break;
         }
      } while ((4 == debugU.length && textinputF) && (textinputF ? !textinputF : textinputF));
         scheduleO *= ((dplusB ? 4 : 1) / 1);
          let q_unlockZ = String.fromCharCode(110,95,57,57,95,114,100,106,112,103,99,111,109,0);
         textinputF = clubI.length > 93;
         q_unlockZ = `${q_unlockZ.length + q_unlockZ.length}`;
      while (!dplusB) {
         dplusB = clubI.includes(textinputF);
         break;
      }
      bellG += parseInt(`${scheduleO}`);
      if (2163220.0 == bellG) {
         break;
      }
   } while ((2163220.0 == bellG) && (5.41 < bellG));

    playerRef.current?.seek?.(0);
   do {
      updatesh /= Math.max(3, parseFloat(`${parseInt(`${updatesh}`)}`));
      if (3031072.0 == updatesh) {
         break;
      }
   } while ((5 == (parseInt(`${updatesh}`) * ksadx.length) || (ksadx.length * 5) == 1) && (3031072.0 == updatesh));
       let suggestionc = String.fromCharCode(115,117,98,112,97,114,116,95,119,95,54,49,0);
       let placeholderl = String.fromCharCode(104,95,57,56,0);
       let strn = String.fromCharCode(115,95,57,53,95,112,117,108,108,117,112,0);
      if (5 <= strn.length) {
         placeholderl = `${3 & strn.length}`;
      }
      if (!suggestionc.endsWith(`${strn.length}`)) {
          let clear8 = 2.0;
          let latnJ = 4.0;
          let langM = String.fromCharCode(98,119,100,105,102,95,105,95,55,54,0);
          let modelsO = 5.0;
         suggestionc += `${1 * parseInt(`${clear8}`)}`;
         clear8 /= Math.max(parseFloat(`${parseInt(`${latnJ}`) >> (Math.min(2, Math.abs(3)))}`), 2);
         latnJ += parseInt(`${modelsO}`) << (Math.min(Math.abs(1), 3));
         langM = "1";
         modelsO /= Math.max(5, parseFloat(`${parseInt(`${latnJ}`)}`));
      }
      do {
         suggestionc = `${suggestionc.length}`;
         if (suggestionc == String.fromCharCode(105,100,121,53,102,106,51,100,0)) {
            break;
         }
      } while ((suggestionc == String.fromCharCode(105,100,121,53,102,106,51,100,0)) && (placeholderl != suggestionc));
         placeholderl += `${3 ^ suggestionc.length}`;
          let bottomz = String.fromCharCode(116,95,56,55,95,99,105,110,118,105,100,101,111,0);
         placeholderl = `${placeholderl.length >> (Math.min(3, bottomz.length))}`;
      for (let l = 0; l < 2; l++) {
         placeholderl = `${suggestionc.length}`;
      }
         placeholderl += "2";
         suggestionc += `${strn.length}`;
          let giftr = 0;
          let rightr = String.fromCharCode(115,95,52,53,95,102,105,114,101,119,97,108,108,0);
          let componentregistryr = [228, 729];
         placeholderl = "1";
         giftr /= Math.max(3, 2 * rightr.length);
         rightr += `${rightr.length / (Math.max(6, giftr))}`;
         componentregistryr = [1];
      updatesh += parseFloat(`${strn.length}`);
       let attributedstringY = 3;
       let rewardH = String.fromCharCode(114,101,118,105,101,119,115,95,109,95,52,50,0);
      while (rewardH.length > attributedstringY) {
          let search0 = String.fromCharCode(108,97,112,108,97,99,101,95,116,95,51,56,0);
          let dropdownj = String.fromCharCode(115,105,110,100,101,120,95,108,95,54,55,0);
         attributedstringY %= Math.max(5, attributedstringY);
         search0 = `${search0.length ^ 1}`;
         dropdownj = "3";
         break;
      }
      while (2 > rewardH.length) {
          let upgradec = 4.0;
          let photob = String.fromCharCode(100,121,110,98,117,102,95,108,95,54,55,0);
          let foundY = [951, 808, 130];
         rewardH = `${(photob == String.fromCharCode(97,0) ? parseInt(`${upgradec}`) : photob.length)}`;
         upgradec /= Math.max(parseFloat(`${foundY.length - foundY.length}`), 3);
         break;
      }
      if (attributedstringY >= 5) {
         attributedstringY <<= Math.min(Math.abs(attributedstringY + rewardH.length), 3);
      }
         attributedstringY /= Math.max(4, rewardH.length);
         attributedstringY -= (String.fromCharCode(112,0) == rewardH ? attributedstringY : rewardH.length);
          let moviesm = 5.0;
          let frame_f2 = String.fromCharCode(122,95,53,55,95,103,101,116,99,0);
         rewardH = `${parseInt(`${moviesm}`) | 3}`;
         moviesm *= parseFloat(`${frame_f2.length}`);
         frame_f2 += `${frame_f2.length >> (Math.min(frame_f2.length, 2))}`;
      bellG -= 1;
       let homeW = new Map([[String.fromCharCode(99,108,97,117,115,101,95,57,95,56,55,0),String.fromCharCode(104,105,103,104,108,105,103,104,116,101,100,95,110,95,53,50,0)], [String.fromCharCode(117,95,57,56,95,112,114,111,112,0),String.fromCharCode(111,95,49,51,95,112,110,103,0)], [String.fromCharCode(119,95,52,57,95,97,108,116,0),String.fromCharCode(101,95,53,50,95,119,105,110,97,114,109,0)]]);
       let short_fT = 3.0;
       let lessW = String.fromCharCode(107,101,114,110,101,114,95,117,95,54,52,0);
       let linkq = 3;
       let tooltipsp = 1;
      if (homeW.size <= 5) {
         short_fT /= Math.max(3, linkq % 3);
      }
      for (let n = 0; n < 2; n++) {
         linkq += homeW.size - 1;
      }
      for (let u = 0; u < 1; u++) {
         short_fT /= Math.max(3, (lessW == String.fromCharCode(75,0) ? linkq : lessW.length));
      }
      if (1 <= lessW.length) {
         lessW = `${(String.fromCharCode(114,0) == lessW ? lessW.length : homeW.size)}`;
      }
      for (let w = 0; w < 1; w++) {
          let activitys = String.fromCharCode(108,111,103,111,117,116,95,113,95,51,56,0);
          let telemetry9 = new Map([[String.fromCharCode(119,95,50,50,95,97,117,116,111,114,101,118,101,114,115,101,115,0),true ], [String.fromCharCode(102,95,52,52,95,115,117,98,115,116,114,101,97,109,0),false ]]);
          let catagoryk = String.fromCharCode(109,98,99,110,116,95,122,95,55,56,0);
         tooltipsp *= lessW.length;
         activitys = "3";
         telemetry9[activitys] = activitys.length;
         catagoryk = `${telemetry9.size % (Math.max(activitys.length, 6))}`;
      }
         tooltipsp /= Math.max(1 >> (Math.min(1, Math.abs(homeW.size))), 4);
      do {
         short_fT -= 2 | homeW.size;
         if (803123.0 == short_fT) {
            break;
         }
      } while ((2 > (3 * homeW.size) && 2 > (homeW.size & 3)) && (803123.0 == short_fT));
         lessW += `${tooltipsp + 3}`;
      bellG *= ksadx.length % 1;
   while (ksadx == hejiV) {
      hejiV = `${((dycreator0 ? 1 : 4) % (Math.max(8, parseInt(`${updatesh}`))))}`;
      break;
   }
      bellG += 2;
       let refreshQ = String.fromCharCode(109,95,49,56,95,100,105,115,112,108,97,121,115,0);
         refreshQ = `${(refreshQ == String.fromCharCode(70,0) ? refreshQ.length : refreshQ.length)}`;
         refreshQ = `${refreshQ.length % 2}`;
         refreshQ += "1";
      bellG -= 1 >> (Math.min(5, playT.length));
      bellG *= mappingq.length;

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
