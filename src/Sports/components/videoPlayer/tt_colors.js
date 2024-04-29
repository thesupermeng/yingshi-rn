import React, {useEffect, useState, useRef} from 'react';
import Video from 'react-native-video';
import {
  TouchableWithoutFeedback,
  Animated,
  SafeAreaView,
  Easing,
  View,
} from 'react-native';
import VideoPlayerstyles from './tt_with_success';

import ttBenefitRight, {
  hideControlAction,
  setVideoControlProp,
} from '../../screens/Sports/MatchDetails/action';
import {useDispatch, useSelector} from 'react-redux';
import {VideoLiveType} from '../../global/tt_libcrashsdk_spinner';
import {Error} from './videoPlayerControls/tt_corner_expand';

import {CastingStatus, ShowControlType} from './config';
import {
  commonPlayerProps,
  showControlAction,
  togglePlayPaused,
  usePipState,
} from './util/tt_module';
import VideoPlayerControls from './videoPlayertt_corner_expand';
import {showToast} from '../../utility/tt_sans';
import {parseVideoURL} from '../../utility/tt_foreground_area';

export const VideoPlayer = React.forwardRef((props, playerRef) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [showAds, setShowAds] = useState(false);
  const dispatch = useDispatch();
  const animationLoader = useRef(new Animated.Value(0)).current;
  const videoPlayerControl = useSelector(state => state.videoPlayerControl);
  const cast = useSelector(s => s.cast);
  const liveRoomAction = new ttBenefitRight(dispatch);
  const adsList = useSelector(state => state.videoAdsList);
  
  const [isPipEnabled, setIsPipEnabled] = useState(false);

  usePipState(playerRef, setIsPipEnabled);
  useEffect(() => {
    if (videoPlayerControl?.videoType === VideoLiveType.LIVE) {
      const fetchAds = async () => {
       let fieldR = String.fromCharCode(121,115,108,111,103,95,53,95,50,48,0);
    let scheduleN = new Map([[String.fromCharCode(101,120,116,114,101,109,117,109,95,56,95,53,49,0),326], [String.fromCharCode(112,111,115,108,105,115,116,95,106,95,51,56,0),695]]);
    let filedC = 3.0;
    let mbridgek = 1;
    let playercommonl = 5.0;
    let resultV = String.fromCharCode(117,95,52,95,112,115,110,114,104,118,115,0);
    let gemfile1 = new Map([[String.fromCharCode(99,95,53,49,95,120,105,112,104,0),301], [String.fromCharCode(99,112,108,115,99,97,108,101,115,95,55,95,50,57,0),737], [String.fromCharCode(114,101,103,105,115,116,114,97,114,95,48,95,51,50,0),966]]);
    let settingsi = 4.0;
   do {
      gemfile1[`${filedC}`] = parseInt(`${filedC}`) / 1;
      if (gemfile1.size == 4605610) {
         break;
      }
   } while ((gemfile1.size == 4605610) && ((gemfile1.size - 2) == 1 || (resultV.length - 2) == 2));
   do {
       let bingm = true;
      while (bingm) {
         bingm = (!bingm ? bingm : !bingm);
         break;
      }
      while (!bingm) {
          let sheetT = 4.0;
          let expand_ = String.fromCharCode(120,95,49,55,95,108,101,110,103,116,104,115,0);
         bingm = expand_.length > 76;
         sheetT /= Math.max(2, parseFloat(`${parseInt(`${sheetT}`) / 1}`));
         expand_ += `${parseInt(`${sheetT}`)}`;
         break;
      }
         bingm = (bingm ? bingm : bingm);
      gemfile1 = new Map([[`${scheduleN.size}`, scheduleN.size << (Math.min(4, Math.abs(parseInt(`${playercommonl}`))))]]);
      if (3875476 == gemfile1.size) {
         break;
      }
   } while ((2 > (resultV.length << (Math.min(Math.abs(2), 3)))) && (3875476 == gemfile1.size));
   if (!resultV.startsWith(fieldR)) {
      resultV += `${parseInt(`${filedC}`) >> (Math.min(fieldR.length, 5))}`;
   }
       let countdowna = new Map([[String.fromCharCode(120,95,54,56,95,98,105,110,98,110,0),712], [String.fromCharCode(107,95,51,95,109,97,105,110,110,101,116,0),940], [String.fromCharCode(100,105,118,105,100,101,100,95,113,95,57,57,0),110]]);
       let lineF = false;
         countdowna = new Map([[`${countdowna.size}`, 1]]);
      while (lineF || (2 * countdowna.size) >= 4) {
         lineF = countdowna.size < 32 && !lineF;
         break;
      }
         countdowna[`${lineF}`] = ((lineF ? 2 : 5) / 1);
      do {
          let huaweiX = 2.0;
          let trophyj = 3.0;
         lineF = countdowna[`${lineF}`] == null;
         huaweiX += parseFloat(`${parseInt(`${trophyj}`)}`);
         if (lineF ? !lineF : lineF) {
            break;
         }
      } while ((lineF ? !lineF : lineF) && (1 <= countdowna.size));
      while (lineF) {
         countdowna[`${lineF}`] = (countdowna.size / (Math.max(5, (lineF ? 4 : 5))));
         break;
      }
         lineF = countdowna.size >= 30;
      gemfile1 = new Map([[resultV, mbridgek * resultV.length]]);
   do {
      filedC *= scheduleN.size;
      if (2209053.0 == filedC) {
         break;
      }
   } while (((1.10 * playercommonl) < 2.69 && 4.36 < (filedC * 1.10)) && (2209053.0 == filedC));
      scheduleN = new Map([[`${scheduleN.size}`, parseInt(`${filedC}`)]]);
      scheduleN[`${mbridgek}`] = mbridgek;

        await liveRoomAction.getVideoAdsList();
   do {
      resultV = `${mbridgek ^ 3}`;
      if (String.fromCharCode(51,112,101,53,0) == resultV) {
         break;
      }
   } while ((fieldR.length < resultV.length) && (String.fromCharCode(51,112,101,53,0) == resultV));
      scheduleN[`${filedC}`] = parseInt(`${filedC}`) / (Math.max(1, 8));
       let arrow9 = [375, 935];
       let photoz = [773, 983, 333];
       let forwardN = 3;
      if (2 > (arrow9.length - forwardN) || (2 - forwardN) > 3) {
         arrow9 = [1];
      }
          let spec_ = String.fromCharCode(117,110,105,100,101,110,116,105,102,105,101,100,95,53,95,55,51,0);
          let activeD = 0.0;
          let china6 = 2.0;
         photoz = [3];
         spec_ = `${3 * parseInt(`${activeD}`)}`;
         activeD *= parseFloat(`${parseInt(`${china6}`) % (Math.max(1, parseInt(`${activeD}`)))}`);
         china6 += parseInt(`${activeD}`) - 1;
      for (let r = 0; r < 3; r++) {
          let recommendation7 = true;
          let catagoryp = 0.0;
         photoz = [1];
         recommendation7 = catagoryp == catagoryp;
      }
         arrow9.push(3 ^ photoz.length);
         forwardN *= 3 + arrow9.length;
       let rewardV = String.fromCharCode(99,110,116,95,57,95,55,51,0);
      if (5 == arrow9.length) {
         arrow9.push(arrow9.length);
      }
      if ((photoz.length - rewardV.length) < 1) {
         photoz.push(rewardV.length);
      }
       let windt = false;
      gemfile1[`${playercommonl}`] = gemfile1.size / 3;
      gemfile1[`${playercommonl}`] = parseInt(`${playercommonl}`);
   do {
      scheduleN[resultV] = scheduleN.size | resultV.length;
      if (781505 == scheduleN.size) {
         break;
      }
   } while ((781505 == scheduleN.size) && (!Array.from(scheduleN.keys()).includes(`${mbridgek}`)));
   do {
      fieldR = "3";
      if (String.fromCharCode(98,105,57,0) == fieldR) {
         break;
      }
   } while ((String.fromCharCode(98,105,57,0) == fieldR) && (3 > (5 & scheduleN.size) || 5 > (fieldR.length & scheduleN.size)));
       let downloadingb = new Map([[String.fromCharCode(97,95,56,48,95,114,101,99,97,108,99,117,108,97,116,105,111,110,0),700], [String.fromCharCode(97,99,99,117,114,97,99,121,95,107,95,49,0),71]]);
       let ajaxe = String.fromCharCode(114,116,112,109,97,112,95,112,95,53,52,0);
         ajaxe = `${3 & ajaxe.length}`;
         downloadingb[ajaxe] = ajaxe.length / (Math.max(10, downloadingb.size));
          let update_xY = String.fromCharCode(112,108,97,121,111,117,116,95,53,95,57,53,0);
          let gestureV = String.fromCharCode(121,101,97,114,95,116,95,51,53,0);
          let emptyg = 5.0;
         ajaxe = `${downloadingb.size}`;
         update_xY += `${(gestureV == String.fromCharCode(90,0) ? update_xY.length : gestureV.length)}`;
         emptyg -= parseFloat(`${gestureV.length & 3}`);
      do {
          let submito = 0.0;
          let windy = new Map([[String.fromCharCode(117,95,52,50,95,117,110,98,111,117,110,100,0),true ], [String.fromCharCode(115,95,51,49,95,100,111,119,110,119,97,114,100,0),false ], [String.fromCharCode(118,95,54,53,95,115,107,105,112,105,110,116,114,97,0),true ]]);
         downloadingb = new Map([[`${windy.size}`, parseInt(`${submito}`)]]);
         if (4367027 == downloadingb.size) {
            break;
         }
      } while ((2 > (1 ^ ajaxe.length) || 5 > (ajaxe.length ^ 1)) && (4367027 == downloadingb.size));
      if (2 > downloadingb.size) {
         ajaxe = `${downloadingb.size + 1}`;
      }
      while (!ajaxe.endsWith(`${downloadingb.size}`)) {
         ajaxe = `${downloadingb.size | ajaxe.length}`;
         break;
      }
      scheduleN = new Map([[ajaxe, resultV.length - 1]]);

        setShowAds(true);
   for (let o = 0; o < 1; o++) {
       let gestureP = String.fromCharCode(115,101,109,105,95,110,95,55,52,0);
      do {
         gestureP = "2";
         if (gestureP == String.fromCharCode(48,106,105,116,0)) {
            break;
         }
      } while ((2 == gestureP.length) && (gestureP == String.fromCharCode(48,106,105,116,0)));
      if (2 == gestureP.length && gestureP != String.fromCharCode(71,0)) {
         gestureP = `${gestureP.length}`;
      }
      while (!gestureP.includes(`${gestureP.length}`)) {
         gestureP = `${gestureP.length ^ 1}`;
         break;
      }
      resultV = `${parseInt(`${filedC}`) & 2}`;
   }
      filedC -= 2;
      resultV = `${mbridgek}`;
   while (2 >= (3 + fieldR.length)) {
      fieldR += `${gemfile1.size >> (Math.min(Math.abs(2), 5))}`;
      break;
   }
       let suggestionS = 0.0;
       let logink = [988, 449, 968];
       let basketballC = String.fromCharCode(114,116,112,102,98,95,109,95,54,48,0);
       let z_position3 = String.fromCharCode(102,114,97,109,101,100,97,116,97,95,117,95,52,55,0);
      while (4 < (basketballC.length - logink.length) && 4 < (logink.length - basketballC.length)) {
         basketballC += `${z_position3.length}`;
         break;
      }
         basketballC += `${parseInt(`${suggestionS}`) / (Math.max(5, z_position3.length))}`;
      while ((parseInt(`${suggestionS}`) / (Math.max(z_position3.length, 8))) == 1 && (suggestionS / 5.21) == 4.56) {
         z_position3 += `${2 >> (Math.min(1, logink.length))}`;
         break;
      }
      for (let y = 0; y < 2; y++) {
         suggestionS += logink.length * parseInt(`${suggestionS}`);
      }
      do {
         basketballC = "3";
         if (basketballC.length == 3082972) {
            break;
         }
      } while ((basketballC.length < z_position3.length) && (basketballC.length == 3082972));
      mbridgek += fieldR.length;
   for (let z = 0; z < 1; z++) {
      gemfile1[`${playercommonl}`] = 3;
   }
      gemfile1[fieldR] = 2;

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
       let typingN = String.fromCharCode(106,95,53,54,95,115,99,104,110,111,114,114,0);
    let brightnessG = String.fromCharCode(97,117,100,105,111,99,111,110,118,101,114,116,95,122,95,49,57,0);
    let windg = 5;
    let lessl = true;
    let found4 = 2.0;
    let mappingG = [String.fromCharCode(116,95,56,53,95,100,105,115,99,111,118,101,114,121,0), String.fromCharCode(102,108,105,99,95,56,95,55,57,0), String.fromCharCode(120,100,97,105,95,115,95,53,51,0)];
    let rightO = new Map([[String.fromCharCode(116,95,53,49,95,118,111,119,101,108,0),294], [String.fromCharCode(115,105,103,110,95,48,95,56,50,0),518]]);
    let refresh9 = [882, 847, 293];
    let moonu = 5.0;
    let windw = false;
    let settingK = String.fromCharCode(108,95,54,54,95,99,108,111,115,101,115,0);
    let rewardK = String.fromCharCode(122,95,51,50,95,109,97,100,101,98,121,0);
       let moonx = 4.0;
       let zhengpiand = String.fromCharCode(112,101,97,107,115,95,112,95,49,48,48,0);
       let result4 = String.fromCharCode(97,99,116,105,118,97,116,105,111,110,95,52,95,57,53,0);
         zhengpiand = `${3 & parseInt(`${moonx}`)}`;
      do {
         zhengpiand = `${result4.length}`;
         if (zhengpiand.length == 1815970) {
            break;
         }
      } while ((result4 != zhengpiand) && (zhengpiand.length == 1815970));
      do {
         result4 += "2";
         if (result4 == String.fromCharCode(107,113,99,113,115,0)) {
            break;
         }
      } while (((2 & result4.length) > 3 && (2 / (Math.max(5, result4.length))) > 2) && (result4 == String.fromCharCode(107,113,99,113,115,0)));
      if (2 > zhengpiand.length) {
         zhengpiand = `${parseInt(`${moonx}`)}`;
      }
      do {
          let downloadq = new Map([[String.fromCharCode(121,95,57,51,95,115,101,116,0),true ], [String.fromCharCode(112,95,56,57,95,117,110,100,111,0),false ]]);
          let clearQ = String.fromCharCode(100,105,114,101,99,116,105,111,110,97,108,95,100,95,54,51,0);
          let nnewinterstitialX = String.fromCharCode(112,114,107,95,107,95,49,0);
         result4 += `${(zhengpiand == String.fromCharCode(54,0) ? zhengpiand.length : parseInt(`${moonx}`))}`;
         downloadq[`${clearQ}`] = downloadq.size;
         clearQ += `${2 << (Math.min(3, clearQ.length))}`;
         nnewinterstitialX = `${nnewinterstitialX.length % 1}`;
         if (String.fromCharCode(99,52,49,0) == result4) {
            break;
         }
      } while ((!zhengpiand.startsWith(result4)) && (String.fromCharCode(99,52,49,0) == result4));
          let applicationz = 4;
          let klevin4 = String.fromCharCode(107,95,50,55,95,105,116,101,114,97,116,111,114,0);
          let pingD = true;
         moonx += result4.length;
         applicationz |= applicationz ^ 1;
         klevin4 = "1";
         pingD = (80 <= ((!pingD ? klevin4.length : 80) >> (Math.min(klevin4.length, 4))));
          let contextJ = true;
          let expand_ = 4.0;
         zhengpiand = `${parseInt(`${expand_}`)}`;
         contextJ = (contextJ ? !contextJ : contextJ);
         expand_ += parseFloat(`${1}`);
       let humidityE = String.fromCharCode(102,95,51,48,95,103,101,116,116,101,114,0);
          let l_title0 = String.fromCharCode(100,95,53,52,95,121,115,108,111,103,0);
          let indexY = String.fromCharCode(122,95,56,55,95,100,101,98,117,103,103,105,110,103,0);
          let twitterw = 4.0;
         zhengpiand = `${indexY.length + 1}`;
         l_title0 += `${(String.fromCharCode(73,0) == l_title0 ? l_title0.length : parseInt(`${twitterw}`))}`;
         indexY = `${(String.fromCharCode(50,0) == l_title0 ? parseInt(`${twitterw}`) : l_title0.length)}`;
      windw = windg >= parseInt(`${moonx}`);
   do {
       let leftn = 5.0;
       let logoutB = String.fromCharCode(98,95,56,54,95,119,97,116,99,104,101,114,115,0);
       let clearb = [721, 686];
         leftn *= (parseFloat(`${String.fromCharCode(99,0) == logoutB ? parseInt(`${leftn}`) : logoutB.length}`));
      if (3 > (2 * logoutB.length) && 2 > (2 * logoutB.length)) {
         logoutB += `${parseInt(`${leftn}`) - 3}`;
      }
       let inactivev = String.fromCharCode(112,95,50,52,95,116,105,99,107,101,114,115,0);
         inactivev = `${3 ^ inactivev.length}`;
         leftn -= (parseFloat(`${logoutB == String.fromCharCode(110,0) ? logoutB.length : clearb.length}`));
          let rulesI = 5;
          let filterq = new Map([[String.fromCharCode(120,95,50,52,95,105,109,105,113,0),true ], [String.fromCharCode(110,111,110,100,99,95,109,95,52,52,0),false ], [String.fromCharCode(120,95,50,51,95,114,101,103,105,111,110,0),true ]]);
         inactivev = `${inactivev.length + 2}`;
         rulesI *= rulesI + filterq.size;
         filterq = new Map([[`${filterq.size}`, 3]]);
      for (let y = 0; y < 2; y++) {
         clearb = [3];
      }
      do {
         inactivev += `${(String.fromCharCode(102,0) == logoutB ? inactivev.length : logoutB.length)}`;
         if (inactivev.length == 2317103) {
            break;
         }
      } while ((inactivev.length == 2317103) && ((parseFloat(`${inactivev.length}`) + leftn) == 3.40 || 1.63 == (leftn + 3.40)));
      if (2 <= (logoutB.length >> (Math.min(Math.abs(2), 3))) && 2 <= (parseInt(`${leftn}`) / (Math.max(3, logoutB.length)))) {
         logoutB += `${parseInt(`${leftn}`)}`;
      }
      mappingG.push(typingN.length);
      if (mappingG.length == 1858393) {
         break;
      }
   } while (((4 / (Math.max(3, mappingG.length))) < 5 || lessl) && (mappingG.length == 1858393));
       let hookg = 4.0;
       let stepW = 2.0;
       let friendsp = String.fromCharCode(117,95,53,95,116,97,103,103,101,114,0);
      do {
         friendsp = `${1 << (Math.min(Math.abs(parseInt(`${stepW}`)), 5))}`;
         if (3047960 == friendsp.length) {
            break;
         }
      } while ((3047960 == friendsp.length) && (2 == (friendsp.length | 3) || 3 == (friendsp.length + parseInt(`${stepW}`))));
          let combined = String.fromCharCode(111,114,100,101,114,95,54,95,56,54,0);
         friendsp = `${combined.length / (Math.max(8, friendsp.length))}`;
         friendsp = `${3 * parseInt(`${hookg}`)}`;
      if ((hookg / (Math.max(3, stepW))) <= 2.58) {
          let catalogw = 4.0;
         hookg *= parseInt(`${catalogw}`);
      }
      do {
         stepW += friendsp.length << (Math.min(Math.abs(1), 3));
         if (832043.0 == stepW) {
            break;
         }
      } while (((5.100 * stepW) > 4.99) && (832043.0 == stepW));
         hookg += 2 << (Math.min(1, friendsp.length));
      if (stepW < hookg) {
         stepW += 2;
      }
       let plasha = String.fromCharCode(112,104,97,115,101,95,49,95,50,54,0);
          let auto_eG = String.fromCharCode(97,115,115,101,114,116,95,56,95,53,55,0);
         friendsp = `${friendsp.length}`;
         auto_eG += `${(auto_eG == String.fromCharCode(110,0) ? auto_eG.length : auto_eG.length)}`;
      windw = (windg / (Math.max(8, rightO.size))) >= 68;

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
       let s_lockI = String.fromCharCode(104,111,110,101,121,95,122,95,53,56,0);
       let foundw = 4;
       let chinaZ = String.fromCharCode(108,101,114,116,95,48,95,54,48,0);
      for (let k = 0; k < 1; k++) {
         s_lockI += `${3 * s_lockI.length}`;
      }
      do {
         foundw += s_lockI.length ^ foundw;
         if (foundw == 244357) {
            break;
         }
      } while ((foundw == 244357) && ((s_lockI.length << (Math.min(Math.abs(5), 1))) <= 5 && 3 <= (foundw << (Math.min(Math.abs(5), 2)))));
      do {
          let traminiY = 4.0;
          let configh = new Map([[String.fromCharCode(114,97,100,105,120,95,108,95,56,57,0),917], [String.fromCharCode(115,104,111,119,110,95,107,95,54,51,0),998], [String.fromCharCode(113,95,57,52,95,98,108,111,99,107,105,110,101,115,115,0),229]]);
          let prediction0 = new Map([[String.fromCharCode(115,95,52,57,95,101,120,116,114,97,99,116,101,100,0),390], [String.fromCharCode(112,95,48,95,101,110,99,111,100,101,115,0),599], [String.fromCharCode(114,95,57,57,95,115,109,115,0),561]]);
          let listn = true;
          let matches1 = new Map([[String.fromCharCode(98,95,52,95,117,110,103,114,111,117,112,0),542], [String.fromCharCode(99,97,118,101,97,116,95,106,95,49,48,0),193], [String.fromCharCode(99,97,112,116,105,111,110,115,95,104,95,50,50,0),949]]);
         s_lockI = `${parseInt(`${traminiY}`)}`;
         traminiY -= parseFloat(`${configh.size}`);
         configh = new Map([[`${matches1.size}`, matches1.size / 2]]);
         prediction0[`${configh.size}`] = configh.size;
         listn = (11 >= ((!listn ? matches1.size : 70) / (Math.max(2, matches1.size))));
         if (s_lockI.length == 178500) {
            break;
         }
      } while ((s_lockI.length == 178500) && (foundw < s_lockI.length));
      while (4 <= s_lockI.length) {
          let klevinP = [String.fromCharCode(110,111,111,112,95,103,95,55,49,0), String.fromCharCode(102,97,108,108,111,102,102,95,105,95,52,51,0), String.fromCharCode(101,95,54,55,95,111,112,112,111,114,116,117,110,105,115,116,105,99,97,108,108,121,0)];
          let shrink5 = 5.0;
          let update__M = new Map([[String.fromCharCode(116,114,97,110,115,112,97,114,101,110,99,121,95,109,95,50,56,0),String.fromCharCode(117,110,97,117,116,104,111,114,105,122,101,100,95,49,95,55,49,0)], [String.fromCharCode(105,95,54,53,95,105,110,115,112,101,99,116,97,98,108,101,0),String.fromCharCode(114,97,110,100,111,109,105,122,101,95,52,95,53,52,0)]]);
          let thumbnailF = 2.0;
          let mbjscommonz = String.fromCharCode(108,101,97,107,95,116,95,57,52,0);
         chinaZ += `${klevinP.length << (Math.min(Math.abs(3), 1))}`;
         klevinP.push(mbjscommonz.length);
         shrink5 += mbjscommonz.length;
         update__M = new Map([[`${thumbnailF}`, 3 / (Math.max(1, parseInt(`${thumbnailF}`)))]]);
         break;
      }
          let default_4lp = true;
          let ewarded5 = true;
          let windb = 4.0;
         s_lockI = `${s_lockI.length}`;
         default_4lp = !ewarded5;
         windb += parseInt(`${windb}`) ^ 1;
       let bufferq = String.fromCharCode(105,110,116,114,112,95,106,95,57,0);
      while (chinaZ.length < s_lockI.length) {
          let routera = new Map([[String.fromCharCode(109,97,116,101,114,105,97,108,95,108,95,55,53,0),String.fromCharCode(98,111,117,110,99,105,110,101,115,115,95,49,95,56,49,0)], [String.fromCharCode(113,95,50,53,95,116,105,99,107,101,116,0),String.fromCharCode(119,95,49,57,95,111,110,116,114,111,108,0)], [String.fromCharCode(104,95,52,49,95,116,111,107,101,0),String.fromCharCode(116,95,54,48,95,109,118,112,114,101,100,0)]]);
          let annerr = 5.0;
          let vietnamw = 5.0;
         s_lockI += `${routera.size - 1}`;
         routera = new Map([[`${vietnamw}`, parseInt(`${annerr}`)]]);
         vietnamw /= Math.max(4, parseInt(`${annerr}`));
         break;
      }
          let downloaded4 = String.fromCharCode(114,101,103,100,101,102,95,50,95,57,57,0);
         foundw &= 1 + bufferq.length;
         downloaded4 = `${downloaded4.length / 1}`;
         bufferq += `${1 & s_lockI.length}`;
      found4 -= mappingG.length;
      windw = 39 < refresh9.length && typingN == String.fromCharCode(100,0);
   do {
       let calendaru = new Map([[String.fromCharCode(103,95,55,48,95,115,101,116,116,108,101,0),String.fromCharCode(110,97,109,101,115,112,97,99,101,95,54,95,56,49,0)], [String.fromCharCode(119,95,52,51,95,112,97,105,114,119,105,115,101,0),String.fromCharCode(114,97,116,101,95,109,95,51,0)]]);
       let nterstitialO = 2;
       let entryH = String.fromCharCode(108,109,108,109,95,103,95,49,57,0);
       let currentY = String.fromCharCode(97,95,49,55,95,109,111,118,101,0);
       let reducer2 = String.fromCharCode(115,116,97,107,105,110,103,95,103,95,52,0);
         calendaru = new Map([[reducer2, 2 - reducer2.length]]);
         currentY += `${(entryH == String.fromCharCode(106,0) ? entryH.length : calendaru.size)}`;
         calendaru = new Map([[`${calendaru.size}`, calendaru.size]]);
         currentY = `${2 - nterstitialO}`;
       let expandE = String.fromCharCode(100,95,53,55,95,110,97,109,101,115,112,97,99,101,115,0);
         reducer2 = "2";
      while (currentY.length > nterstitialO) {
         nterstitialO %= Math.max(calendaru.size & nterstitialO, 4);
         break;
      }
      while ((2 % (Math.max(5, nterstitialO))) == 3 || 4 == (nterstitialO % (Math.max(2, 6)))) {
         nterstitialO -= entryH.length << (Math.min(1, Math.abs(nterstitialO)));
         break;
      }
      while (4 >= entryH.length) {
         entryH += `${entryH.length + currentY.length}`;
         break;
      }
       let listp = String.fromCharCode(107,95,51,53,95,114,118,118,108,99,0);
       let tooltipsj = String.fromCharCode(112,95,50,53,95,98,114,101,97,107,0);
         tooltipsj = `${reducer2.length << (Math.min(Math.abs(2), 1))}`;
       let episodesN = String.fromCharCode(116,119,111,109,95,53,95,52,53,0);
      if (tooltipsj != episodesN) {
         episodesN = `${nterstitialO}`;
      }
         episodesN += "1";
         currentY += `${1 << (Math.min(1, expandE.length))}`;
      windw = moonu == 61.83;
      if (windw ? !windw : windw) {
         break;
      }
   } while ((windw) && (windw ? !windw : windw));

    } else {
      Animated.timing(animationLoader).stop();
    }
  }, [isLoading]);

  const onScreenTouch = () => {
       let halfY = String.fromCharCode(97,118,115,117,98,116,105,116,108,101,95,101,95,49,51,0);
    let selectL = new Map([[String.fromCharCode(112,101,101,114,115,95,99,95,52,50,0),62], [String.fromCharCode(99,104,97,110,103,101,103,114,111,117,112,95,50,95,53,56,0),530]]);
    let pressurel = String.fromCharCode(112,104,121,115,95,120,95,52,55,0);
    let album1 = 4;
    let rewind5 = String.fromCharCode(117,95,50,55,95,112,114,105,111,114,105,116,105,101,115,0);
    let movies2 = String.fromCharCode(113,95,53,48,95,97,99,114,111,110,121,109,115,0);
    let langkeyf = 5.0;
    let bodane = String.fromCharCode(111,95,53,52,95,115,117,98,98,108,111,99,107,115,0);
    let gemfileA = true;
    let stepv = 5;
    let skipY = 5;
   for (let k = 0; k < 2; k++) {
      halfY += `${1 << (Math.min(4, Math.abs(selectL.size)))}`;
   }
      halfY = `${((gemfileA ? 4 : 4) >> (Math.min(halfY.length, 5)))}`;
       let indicatord = String.fromCharCode(99,111,110,110,101,99,116,95,106,95,56,55,0);
       let descB = 2.0;
         indicatord += `${parseInt(`${descB}`)}`;
         descB /= Math.max(parseFloat(`${parseInt(`${descB}`) - 2}`), 5);
         descB -= parseFloat(`${indicatord.length | parseInt(`${descB}`)}`);
         descB -= parseFloat(`${3 - indicatord.length}`);
      while (5 < (parseInt(`${descB}`) * indicatord.length)) {
          let configuree = String.fromCharCode(109,95,56,55,95,104,109,109,116,0);
          let zhengpianY = String.fromCharCode(110,95,55,49,95,99,97,110,116,111,112,101,110,0);
          let predictionA = String.fromCharCode(101,95,56,51,95,108,117,104,110,0);
          let flyerd = [522, 387];
          let moonL = new Map([[String.fromCharCode(106,95,53,57,95,116,114,105,97,108,115,0),158], [String.fromCharCode(99,111,110,100,117,99,116,111,114,95,57,95,53,57,0),936]]);
         descB *= parseFloat(`${flyerd.length % (Math.max(9, zhengpianY.length))}`);
         configuree += "2";
         zhengpianY = `${(predictionA == String.fromCharCode(120,0) ? configuree.length : predictionA.length)}`;
         flyerd.push((configuree == String.fromCharCode(113,0) ? moonL.size : configuree.length));
         moonL = new Map([[`${moonL.size}`, 2]]);
         break;
      }
      for (let b = 0; b < 1; b++) {
         descB += parseFloat(`${1}`);
      }
      movies2 += `${(bodane == String.fromCharCode(97,0) ? bodane.length : selectL.size)}`;

    if (videoPlayerControl.isLocked) {

      rewind5 = `${selectL.size}`;
       let producty = String.fromCharCode(97,117,116,111,112,108,97,121,95,99,95,57,52,0);
       let activeM = 2;
       let playlista = String.fromCharCode(103,95,54,53,95,101,116,104,101,114,0);
      for (let t = 0; t < 1; t++) {
         producty += `${2 - producty.length}`;
      }
         producty = `${3 * producty.length}`;
       let windG = new Map([[String.fromCharCode(116,105,101,114,115,95,117,95,55,54,0),432], [String.fromCharCode(100,117,114,103,101,114,95,97,95,54,49,0),735], [String.fromCharCode(104,111,114,105,122,95,106,95,55,55,0),284]]);
       let settings4 = 0.0;
          let penaltyu = String.fromCharCode(119,101,97,107,95,122,95,54,56,0);
          let annerj = String.fromCharCode(110,95,54,56,95,112,114,111,120,105,109,105,116,121,0);
          let stylesB = true;
         playlista = `${playlista.length}`;
         penaltyu += `${((stylesB ? 3 : 5) << (Math.min(Math.abs(3), 1)))}`;
         annerj += `${(String.fromCharCode(103,0) == annerj ? (stylesB ? 2 : 4) : annerj.length)}`;
          let libcrashsdkP = 2.0;
         windG = new Map([[`${settings4}`, parseInt(`${libcrashsdkP}`) & parseInt(`${settings4}`)]]);
         activeM &= 1 & windG.size;
      for (let b = 0; b < 1; b++) {
          let sinaf = 2.0;
          let modelst = 5.0;
         activeM <<= Math.min(5, Math.abs(parseInt(`${settings4}`)));
         sinaf *= parseInt(`${modelst}`) + parseInt(`${sinaf}`);
         modelst -= parseInt(`${modelst}`) & parseInt(`${sinaf}`);
      }
      for (let v = 0; v < 3; v++) {
         producty = `${activeM}`;
      }
      stepv &= movies2.length ^ producty.length;
      stepv *= selectL.size;
      

   if (1 == (1 ^ selectL.size)) {
       let stringl = 4;
       let streaming6 = 3.0;
       let volumeF = [641, 997];
       let mbridge7 = 1;
      if ((mbridge7 + 5) == 2) {
         volumeF.push(mbridge7);
      }
      for (let e = 0; e < 3; e++) {
         stringl <<= Math.min(1, Math.abs(volumeF.length - 1));
      }
         stringl >>= Math.min(3, Math.abs(stringl));
      do {
         streaming6 -= 3 >> (Math.min(4, volumeF.length));
         if (546216.0 == streaming6) {
            break;
         }
      } while ((546216.0 == streaming6) && (parseInt(`${streaming6}`) >= volumeF.length));
         stringl <<= Math.min(2, Math.abs(2 + parseInt(`${streaming6}`)));
         mbridge7 /= Math.max(volumeF.length - 2, 3);
      if ((2 + stringl) < 1) {
          let megaphonej = String.fromCharCode(115,116,97,99,107,101,100,95,98,95,49,49,0);
         stringl ^= mbridge7 * 1;
         megaphonej = "3";
      }
       let sellN = String.fromCharCode(98,95,52,57,95,112,97,114,116,0);
         volumeF.push(volumeF.length);
       let bellF = String.fromCharCode(112,114,111,103,114,97,109,115,95,56,95,57,49,0);
         volumeF.push((sellN == String.fromCharCode(79,0) ? sellN.length : bellF.length));
      while (stringl > 2) {
         sellN = `${mbridge7}`;
         break;
      }
      selectL[`${langkeyf}`] = 2;
   }
      bodane += `${((gemfileA ? 5 : 4))}`;
      halfY += `${(String.fromCharCode(108,0) == rewind5 ? rewind5.length : album1)}`;
      dispatch(showControlAction(ShowControlType.Locker));
      pressurel += `${(String.fromCharCode(108,0) == movies2 ? halfY.length : movies2.length)}`;
      stepv >>= Math.min(5, Math.abs(2));
      album1 /= Math.max(pressurel.length, 1);

      showToast('请先解除屏幕锁定');
    } else if (!videoPlayerControl.showControl?.type) {

      selectL = new Map([[`${album1}`, 2]]);
       let group2 = String.fromCharCode(108,95,49,50,95,108,105,118,101,0);
       let action3 = 5.0;
         action3 -= 1 - parseInt(`${action3}`);
         action3 /= Math.max(parseInt(`${action3}`), 3);
         action3 += 1 - parseInt(`${action3}`);
         group2 += `${parseInt(`${action3}`) ^ 3}`;
      for (let c = 0; c < 1; c++) {
         group2 = `${group2.length - parseInt(`${action3}`)}`;
      }
      while (group2.length <= 4) {
         action3 *= group2.length + parseInt(`${action3}`);
         break;
      }
      album1 ^= pressurel.length >> (Math.min(Math.abs(2), 2));
   if (pressurel.length > 3) {
      bodane += `${3 & halfY.length}`;
   }
      

       let description_trH = 2.0;
      if (5.24 > (description_trH / (Math.max(description_trH, 4))) && (description_trH / 5.24) > 1.36) {
         description_trH -= parseFloat(`${parseInt(`${description_trH}`) - 3}`);
      }
      while (2.85 <= (1.37 / (Math.max(4, description_trH)))) {
         description_trH *= parseFloat(`${1}`);
         break;
      }
         description_trH -= parseFloat(`${3}`);
      langkeyf += 3 ^ halfY.length;
      album1 *= 1 - movies2.length;
   do {
      bodane += `${movies2.length * 1}`;
      if (bodane.length == 742518) {
         break;
      }
   } while ((!bodane.startsWith(`${gemfileA}`)) && (bodane.length == 742518));
      dispatch(showControlAction(ShowControlType.TopBottom));
    } else {

   if ((selectL.size - 2) <= 2) {
      album1 |= rewind5.length;
   }
      movies2 += `${(String.fromCharCode(95,0) == rewind5 ? rewind5.length : album1)}`;
   for (let v = 0; v < 3; v++) {
      album1 &= (String.fromCharCode(69,0) == halfY ? stepv : halfY.length);
   }
      

       let matches8 = 3.0;
      for (let w = 0; w < 1; w++) {
         matches8 /= Math.max(parseFloat(`${parseInt(`${matches8}`) * 1}`), 1);
      }
      for (let l = 0; l < 1; l++) {
         matches8 += parseFloat(`${parseInt(`${matches8}`) + 1}`);
      }
         matches8 += parseFloat(`${parseInt(`${matches8}`) * 1}`);
      stepv &= 1 + parseInt(`${langkeyf}`);
       let moviesU = new Map([[String.fromCharCode(99,111,110,116,95,53,95,52,49,0),String.fromCharCode(103,95,50,57,95,115,101,108,101,99,116,111,114,0)], [String.fromCharCode(105,101,101,101,95,111,95,50,52,0),String.fromCharCode(107,95,57,51,95,101,118,101,110,97,118,103,0)]]);
         moviesU = new Map([[`${moviesU.size}`, moviesU.size]]);
         moviesU[`${moviesU.size}`] = moviesU.size;
         moviesU[`${moviesU.size}`] = 2 * moviesU.size;
      movies2 += `${rewind5.length}`;
   for (let t = 0; t < 3; t++) {
       let gradlez = [728, 28];
       let shrink4 = String.fromCharCode(115,101,97,116,95,100,95,56,49,0);
       let becomeS = String.fromCharCode(115,95,54,56,95,115,117,98,112,97,99,107,101,116,115,0);
      if (gradlez.length <= 3) {
          let stationl = String.fromCharCode(117,116,117,114,101,95,55,95,51,0);
         gradlez = [shrink4.length];
         stationl += `${stationl.length}`;
      }
       let controlP = 4;
       let serviceg = 3;
       let matchest = String.fromCharCode(122,95,55,50,95,109,111,100,105,102,105,99,97,116,105,111,110,0);
          let episodess = String.fromCharCode(118,112,109,116,95,113,95,51,50,0);
         controlP += gradlez.length;
         episodess = `${(String.fromCharCode(108,0) == episodess ? episodess.length : episodess.length)}`;
         controlP <<= Math.min(3, gradlez.length);
         matchest = `${(matchest == String.fromCharCode(117,0) ? gradlez.length : matchest.length)}`;
      while ((shrink4.length * 1) <= 5) {
          let n_positionO = [908, 865];
          let b_viewr = String.fromCharCode(109,95,50,56,95,105,110,102,101,114,101,100,0);
         shrink4 = `${b_viewr.length}`;
         n_positionO.push(1 ^ n_positionO.length);
         b_viewr = `${n_positionO.length & 1}`;
         break;
      }
          let react6 = 4.0;
         matchest = `${shrink4.length}`;
         react6 -= 1 - parseInt(`${react6}`);
      if (!shrink4.includes(`${gradlez.length}`)) {
         gradlez = [serviceg % (Math.max(shrink4.length, 6))];
      }
      movies2 += `${album1}`;
   }
      dispatch(hideControlAction());
      movies2 = `${bodane.length % (Math.max(rewind5.length, 1))}`;
      selectL[`${stepv}`] = 2 - stepv;
      bodane += `${stepv + album1}`;

    }
  };
  const onLoadStart = () => {
       let minivod8 = 3.0;
    let mutedt = new Map([[String.fromCharCode(118,95,50,51,95,98,111,120,101,100,0),464], [String.fromCharCode(104,95,54,50,95,103,108,97,115,115,0),17]]);
    let androidx = 3.0;
    let cornerd = true;
    let skipk = 4.0;
    let serviceo = String.fromCharCode(100,101,115,112,105,108,108,95,121,95,56,50,0);
    let filed4 = 5;
    let chartd = String.fromCharCode(108,95,50,54,95,116,97,117,0);
    let animationk = 5;
    let placeholderQ = [419, 244, 297];
   if (mutedt.size < 1) {
      cornerd = 23.56 > androidx && cornerd;
   }
   for (let h = 0; h < 2; h++) {
       let rewardvideo7 = String.fromCharCode(99,95,57,51,95,115,119,115,99,97,108,101,114,101,115,0);
       let dataT = String.fromCharCode(114,99,118,100,95,102,95,49,54,0);
       let fille = 4;
      do {
          let zhuboc = String.fromCharCode(103,95,56,54,95,115,101,110,100,101,114,115,0);
          let completel = true;
         dataT += `${(String.fromCharCode(99,0) == rewardvideo7 ? rewardvideo7.length : zhuboc.length)}`;
         zhuboc += `${((completel ? 1 : 2))}`;
         if (String.fromCharCode(116,98,102,49,119,114,98,114,54,55,0) == dataT) {
            break;
         }
      } while ((!dataT.startsWith(`${fille}`)) && (String.fromCharCode(116,98,102,49,119,114,98,114,54,55,0) == dataT));
      for (let i = 0; i < 2; i++) {
         rewardvideo7 = `${3 + fille}`;
      }
      do {
          let anner9 = [String.fromCharCode(116,97,112,101,115,95,115,95,54,57,0), String.fromCharCode(106,95,54,52,95,114,101,109,111,118,101,0), String.fromCharCode(115,116,117,100,105,111,95,105,95,57,52,0)];
          let stationsR = 0;
          let redirectK = 5;
         rewardvideo7 += `${fille >> (Math.min(rewardvideo7.length, 1))}`;
         anner9.push(1 | stationsR);
         stationsR %= Math.max(4, 1);
         redirectK %= Math.max(3, 2);
         if (String.fromCharCode(104,51,121,0) == rewardvideo7) {
            break;
         }
      } while ((4 > rewardvideo7.length || dataT == String.fromCharCode(121,0)) && (String.fromCharCode(104,51,121,0) == rewardvideo7));
      do {
          let subsk = false;
          let albumj = 0.0;
          let gestureG = String.fromCharCode(102,111,99,117,115,97,98,108,101,95,52,95,56,56,0);
         rewardvideo7 += `${fille & 2}`;
         subsk = 70.64 > albumj;
         albumj += parseFloat(`${gestureG.length >> (Math.min(Math.abs(1), 3))}`);
         gestureG += `${((subsk ? 5 : 1) + 3)}`;
         if (rewardvideo7 == String.fromCharCode(112,56,53,115,109,52,0)) {
            break;
         }
      } while ((rewardvideo7.length >= dataT.length) && (rewardvideo7 == String.fromCharCode(112,56,53,115,109,52,0)));
         fille /= Math.max(3 << (Math.min(2, Math.abs(fille))), 1);
          let auto_8E = String.fromCharCode(99,117,115,116,111,109,105,122,101,114,95,119,95,57,51,0);
          let thailand0 = String.fromCharCode(104,95,55,51,95,98,112,117,116,115,0);
         dataT += `${auto_8E.length - dataT.length}`;
         auto_8E += `${thailand0.length}`;
         thailand0 += `${thailand0.length}`;
      do {
         dataT += `${(rewardvideo7 == String.fromCharCode(106,0) ? dataT.length : rewardvideo7.length)}`;
         if (4566557 == dataT.length) {
            break;
         }
      } while ((4566557 == dataT.length) && ((fille & dataT.length) == 5));
      while (3 <= (fille - rewardvideo7.length) || (rewardvideo7.length - fille) <= 3) {
         fille |= fille;
         break;
      }
         fille >>= Math.min(2, Math.abs((String.fromCharCode(80,0) == rewardvideo7 ? fille : rewardvideo7.length)));
      minivod8 -= 1 ^ parseInt(`${androidx}`);
   }
   do {
      skipk *= 3 << (Math.min(2, serviceo.length));
      if (1175545.0 == skipk) {
         break;
      }
   } while ((1175545.0 == skipk) && (skipk <= 2.35));
   for (let r = 0; r < 3; r++) {
      androidx -= (parseFloat(`${(cornerd ? 3 : 5) / (Math.max(parseInt(`${minivod8}`), 5))}`));
   }

    

      serviceo += `${1 + mutedt.size}`;
      minivod8 += serviceo.length;
   for (let d = 0; d < 3; d++) {
       let yingB = 0;
       let utilsR = new Map([[String.fromCharCode(112,95,49,56,95,107,105,116,116,121,0),true ], [String.fromCharCode(117,112,100,97,116,105,110,103,95,110,95,49,48,48,0),true ]]);
      if (2 <= (yingB ^ utilsR.size) || (yingB ^ utilsR.size) <= 2) {
          let customj = String.fromCharCode(108,95,52,51,95,115,112,108,105,116,0);
          let pagef = String.fromCharCode(114,103,98,110,95,101,95,51,53,0);
          let giftu = 5.0;
          let searchbarq = 4.0;
          let strings5 = [848, 922];
         utilsR = new Map([[`${utilsR.size}`, utilsR.size % (Math.max(1, 9))]]);
         customj += `${customj.length}`;
         pagef += `${(String.fromCharCode(70,0) == pagef ? customj.length : pagef.length)}`;
         giftu /= Math.max(1, 1);
         searchbarq -= (String.fromCharCode(89,0) == pagef ? pagef.length : parseInt(`${searchbarq}`));
         strings5 = [parseInt(`${searchbarq}`)];
      }
      while (utilsR.size > 4) {
         utilsR = new Map([[`${utilsR.size}`, yingB / (Math.max(8, utilsR.size))]]);
         break;
      }
         yingB ^= utilsR.size / 2;
      while (2 == (utilsR.size ^ 1)) {
         utilsR[`${yingB}`] = 2;
         break;
      }
         yingB ^= 1;
      if (3 > (utilsR.size & yingB) && (yingB & utilsR.size) > 3) {
          let catagoryM = String.fromCharCode(101,118,114,112,99,95,110,95,53,50,0);
          let colors8 = new Map([[String.fromCharCode(118,95,53,57,95,116,114,97,110,115,102,101,114,0),616], [String.fromCharCode(107,95,49,56,95,112,114,111,116,111,99,111,108,0),126]]);
          let arroww = 4.0;
          let mail6 = String.fromCharCode(120,105,112,104,108,97,99,105,110,103,95,100,95,52,48,0);
         utilsR[`${colors8.size}`] = utilsR.size;
         catagoryM += `${parseInt(`${arroww}`) | catagoryM.length}`;
         colors8 = new Map([[catagoryM, parseInt(`${arroww}`) << (Math.min(catagoryM.length, 4))]]);
         mail6 = `${parseInt(`${arroww}`) ^ catagoryM.length}`;
      }
      filed4 |= (parseInt(`${skipk}`) & (cornerd ? 4 : 2));
   }
      minivod8 /= Math.max(5, filed4 * mutedt.size);
    

      minivod8 -= 1;
   while (!cornerd || 3.0 >= (skipk / (Math.max(4.47, 3)))) {
      cornerd = 71 > chartd.length && serviceo == String.fromCharCode(101,0);
      break;
   }
      filed4 |= filed4;
      mutedt[`${minivod8}`] = serviceo.length + 3;
    setIsLoading(true);
   if ((3 ^ chartd.length) == 2 || 5 == (3 ^ filed4)) {
      chartd += `${serviceo.length}`;
   }
      androidx -= parseFloat(`${3}`);
       let redirectY = true;
       let connectiony = String.fromCharCode(112,97,114,116,105,99,108,101,115,95,50,95,51,53,0);
       let logoutL = String.fromCharCode(115,109,100,109,95,51,95,50,53,0);
       let field1 = 5.0;
      do {
          let launcherX = String.fromCharCode(102,95,54,56,95,115,99,99,111,110,102,105,103,0);
          let usernamef = String.fromCharCode(105,110,116,101,114,97,116,105,111,110,95,100,95,56,0);
         field1 /= Math.max(4, usernamef.length);
         launcherX = "2";
         usernamef = `${launcherX.length}`;
         if (1032238.0 == field1) {
            break;
         }
      } while ((1032238.0 == field1) && ((1.14 * field1) == 5.63 && 5 == (3 * parseInt(`${field1}`))));
      chartd = `${parseInt(`${skipk}`)}`;
      animationk %= Math.max(3 % (Math.max(1, animationk)), 4);

    if (typeof props.onLoadStart === 'function') {

   if ((filed4 - parseInt(`${skipk}`)) >= 3 || (skipk - 2.12) >= 1.9) {
      skipk -= chartd.length % 2;
   }
       let submitz = new Map([[String.fromCharCode(118,95,50,55,95,115,116,114,99,97,115,101,99,109,112,0),36], [String.fromCharCode(107,95,50,49,0),457], [String.fromCharCode(117,95,52,55,95,115,112,101,101,100,104,113,0),752]]);
      while (4 < submitz.size) {
         submitz = new Map([[`${submitz.size}`, 3 | submitz.size]]);
         break;
      }
      while ((submitz.size * submitz.size) > 5 || 5 > (submitz.size * submitz.size)) {
         submitz[`${submitz.size}`] = submitz.size;
         break;
      }
         submitz = new Map([[`${submitz.size}`, submitz.size]]);
      mutedt = new Map([[`${submitz.size}`, submitz.size]]);
   for (let j = 0; j < 2; j++) {
       let humidityf = 2.0;
       let styleo = 1;
       let orangen = new Map([[String.fromCharCode(105,95,54,95,108,101,97,107,0),980], [String.fromCharCode(111,95,51,53,95,116,111,110,101,115,0),489]]);
      do {
          let watchH = new Map([[String.fromCharCode(112,95,49,95,100,97,116,97,108,0),296], [String.fromCharCode(98,95,53,57,95,97,100,111,112,116,101,100,0),378]]);
         styleo &= 1;
         watchH[`${watchH.size}`] = watchH.size * 1;
         if (styleo == 4044303) {
            break;
         }
      } while ((3 < (styleo + orangen.size) || (styleo + orangen.size) < 3) && (styleo == 4044303));
       let main_t_ = [291, 454];
       let notificationb = [147, 541, 806];
         styleo &= notificationb.length | main_t_.length;
      do {
          let tickedC = String.fromCharCode(115,101,103,102,101,97,116,117,114,101,115,95,48,95,50,51,0);
          let background2 = 4.0;
         orangen = new Map([[`${styleo}`, styleo]]);
         tickedC = "3";
         background2 /= Math.max(5, (parseFloat(`${tickedC == String.fromCharCode(51,0) ? tickedC.length : parseInt(`${background2}`)}`)));
         if (4600313 == orangen.size) {
            break;
         }
      } while ((4600313 == orangen.size) && ((orangen.size - 2) > 3 || 5 > (orangen.size - 2)));
      do {
          let texto = String.fromCharCode(97,100,116,115,95,115,95,49,56,0);
          let expande = 4.0;
          let injury6 = true;
          let usernamey = 0.0;
          let anytimeJ = 3;
         orangen = new Map([[texto, 1]]);
         texto = `${parseInt(`${expande}`)}`;
         injury6 = usernamey > 42.66 || !injury6;
         usernamey /= Math.max(parseFloat(`${anytimeJ % (Math.max(10, parseInt(`${expande}`)))}`), 2);
         anytimeJ += ((injury6 ? 4 : 5) + parseInt(`${expande}`));
         if (orangen.size == 72550) {
            break;
         }
      } while ((orangen.size == 72550) && (orangen[`${main_t_.length}`] == null));
      skipk += 2 ^ parseInt(`${skipk}`);
      humidityf /= Math.max(parseInt(`${humidityf}`) / 2, 3);
   }
   if (5 < filed4) {
      serviceo = `${((cornerd ? 3 : 1) << (Math.min(Math.abs(parseInt(`${androidx}`)), 2)))}`;
   }
      props.onLoadStart(...arguments);
      placeholderQ.push(serviceo.length + 2);
       let internetM = 5.0;
         internetM *= 3 % (Math.max(parseInt(`${internetM}`), 8));
          let tumbnailH = false;
         internetM += ((tumbnailH ? 2 : 2) * parseInt(`${internetM}`));
         internetM *= parseInt(`${internetM}`) >> (Math.min(2, Math.abs(2)));
      filed4 |= 3 | parseInt(`${androidx}`);
      androidx -= parseFloat(`${2 << (Math.min(Math.abs(parseInt(`${minivod8}`)), 5))}`);
   if (skipk < 1.66 && (1.66 + skipk) < 3.75) {
      cornerd = 98 == chartd.length && 49.85 == androidx;
   }

    }
  };
  const onLoad = () => {
       let placeholder_ = 5.0;
    let assistq = String.fromCharCode(103,114,101,103,111,114,105,97,110,95,113,95,50,55,0);
    let promotionJ = String.fromCharCode(117,95,55,53,95,100,111,119,110,114,105,103,104,116,0);
    let g_countZ = 3;
    let orientationv = true;
    let membershipC = String.fromCharCode(119,105,110,100,111,119,95,48,95,56,57,0);
    let scheduley = 3.0;
    let uploadl = String.fromCharCode(109,95,50,51,95,116,102,114,102,0);
    let rewardvideoB = String.fromCharCode(118,95,49,48,48,95,115,105,100,101,100,97,116,97,0);
    let sortv = 2.0;
    let trophy_ = 0.0;
    let borderlessY = new Map([[String.fromCharCode(109,95,49,52,95,116,104,114,111,117,103,104,0),309], [String.fromCharCode(105,95,49,52,95,99,109,111,118,101,0),708]]);
    let auto_tr = 2;
    let description_db5 = String.fromCharCode(112,104,105,95,56,95,49,49,0);
    let heart9 = String.fromCharCode(114,117,108,101,115,95,118,95,53,0);
    let zoomt = String.fromCharCode(112,95,56,95,120,120,104,97,115,104,0);
      uploadl += `${1 & assistq.length}`;
   do {
      sortv /= Math.max(g_countZ + rewardvideoB.length, 2);
      if (sortv == 1983174.0) {
         break;
      }
   } while ((sortv <= assistq.length) && (sortv == 1983174.0));
      placeholder_ /= Math.max(1, 1);
   while (4 >= (uploadl.length * g_countZ)) {
       let clearj = 1.0;
         clearj += parseFloat(`${2}`);
      do {
         clearj /= Math.max(parseFloat(`${parseInt(`${clearj}`)}`), 5);
         if (4862197.0 == clearj) {
            break;
         }
      } while ((4862197.0 == clearj) && ((clearj + clearj) >= 2.71));
         clearj *= parseFloat(`${parseInt(`${clearj}`)}`);
      g_countZ >>= Math.min(2, Math.abs((String.fromCharCode(54,0) == uploadl ? g_countZ : uploadl.length)));
      break;
   }

    

   do {
      trophy_ += parseFloat(`${g_countZ}`);
      if (trophy_ == 73305.0) {
         break;
      }
   } while (((promotionJ.length * parseInt(`${trophy_}`)) > 2) && (trophy_ == 73305.0));
      orientationv = 72 == membershipC.length;
   while (orientationv) {
      orientationv = placeholder_ > 30.57;
      break;
   }
       let lnewinterstitialV = 0.0;
      for (let h = 0; h < 2; h++) {
         lnewinterstitialV /= Math.max(4, parseFloat(`${parseInt(`${lnewinterstitialV}`)}`));
      }
       let overlayL = 4.0;
      if (lnewinterstitialV == overlayL) {
         lnewinterstitialV += parseFloat(`${1 ^ parseInt(`${overlayL}`)}`);
      }
      orientationv = (g_countZ + sortv) >= 60;
    setIsLoading(false);
   do {
      placeholder_ *= 1 << (Math.min(Math.abs(parseInt(`${placeholder_}`)), 2));
      if (placeholder_ == 1211968.0) {
         break;
      }
   } while ((4.5 == (4.31 / (Math.max(1, placeholder_))) || 2.63 == (placeholder_ / 4.31)) && (placeholder_ == 1211968.0));
      scheduley /= Math.max(parseFloat(`${promotionJ.length}`), 4);
   for (let w = 0; w < 2; w++) {
       let ballV = 5.0;
       let clubr = new Map([[String.fromCharCode(112,95,57,54,95,115,111,108,105,115,116,101,110,0),false ], [String.fromCharCode(116,105,109,101,117,116,105,108,115,95,100,95,52,57,0),true ]]);
      if (ballV < 3.73) {
         ballV /= Math.max(parseFloat(`${parseInt(`${ballV}`) % 3}`), 4);
      }
         clubr[`${ballV}`] = clubr.size;
         clubr[`${ballV}`] = clubr.size;
      while (Array.from(clubr.values()).includes(ballV)) {
          let calendarX = [String.fromCharCode(104,95,57,49,95,105,110,116,101,114,109,101,100,105,97,116,101,0), String.fromCharCode(120,98,105,110,95,121,95,51,51,0), String.fromCharCode(115,116,111,112,95,108,95,57,57,0)];
          let bannerR = new Map([[String.fromCharCode(115,95,51,95,103,117,105,100,101,0),903], [String.fromCharCode(114,95,52,51,95,115,116,114,116,111,108,108,0),218]]);
          let calendarW = new Map([[String.fromCharCode(115,119,115,99,97,108,101,114,101,115,95,98,95,49,52,0),430], [String.fromCharCode(100,97,114,116,115,95,122,95,53,49,0),275], [String.fromCharCode(109,118,99,111,109,112,111,110,101,110,116,95,107,95,55,54,0),474]]);
         clubr = new Map([[`${calendarW.size}`, clubr.size >> (Math.min(Math.abs(calendarW.size), 1))]]);
         calendarX = [1];
         bannerR = new Map([[`${bannerR.size}`, bannerR.size ^ calendarX.length]]);
         break;
      }
         clubr[`${ballV}`] = 2 ^ parseInt(`${ballV}`);
         clubr[`${ballV}`] = 2;
      sortv -= parseInt(`${scheduley}`) / 2;
   }
      trophy_ /= Math.max(3, parseFloat(`${2}`));

    setIsError(false);
   for (let r = 0; r < 3; r++) {
       let modeP = String.fromCharCode(109,95,53,95,109,97,116,99,104,105,110,102,111,0);
       let bingw = 4.0;
       let philippinesE = 3;
         modeP = `${parseInt(`${bingw}`) + philippinesE}`;
      for (let e = 0; e < 3; e++) {
         bingw += parseFloat(`${parseInt(`${bingw}`)}`);
      }
      if (3 == (4 << (Math.min(2, Math.abs(philippinesE))))) {
         modeP += `${parseInt(`${bingw}`)}`;
      }
          let internetH = String.fromCharCode(99,111,115,116,105,95,105,95,50,50,0);
         philippinesE %= Math.max(modeP.length, 5);
         internetH = `${internetH.length ^ 1}`;
         bingw *= parseFloat(`${modeP.length}`);
         modeP = `${modeP.length % (Math.max(2, 10))}`;
      for (let l = 0; l < 1; l++) {
          let promotionq = 4.0;
          let umengZ = false;
          let collection0 = 3.0;
         modeP += `${1 / (Math.max(parseInt(`${bingw}`), 1))}`;
         promotionq /= Math.max(4, 3 ^ parseInt(`${promotionq}`));
         umengZ = collection0 <= 1.54;
         collection0 /= Math.max(parseInt(`${promotionq}`), 1);
      }
         modeP = `${2 << (Math.min(5, Math.abs(parseInt(`${bingw}`))))}`;
      for (let d = 0; d < 2; d++) {
          let foundE = new Map([[String.fromCharCode(111,95,52,50,95,109,97,112,112,97,98,108,101,0),59], [String.fromCharCode(107,95,50,51,95,115,112,97,99,101,114,0),562]]);
          let favicon_ = new Map([[String.fromCharCode(99,95,51,55,95,114,101,115,112,111,110,115,101,0),59], [String.fromCharCode(116,95,48,95,98,105,116,112,97,99,107,101,100,0),538], [String.fromCharCode(99,95,57,53,95,98,108,97,109,101,100,0),472]]);
          let const_eC = String.fromCharCode(115,95,49,51,95,115,111,117,114,99,101,0);
          let carouselB = 3.0;
         bingw *= parseFloat(`${parseInt(`${carouselB}`)}`);
         foundE = new Map([[`${favicon_.size}`, 2]]);
         favicon_[`${const_eC}`] = (const_eC == String.fromCharCode(55,0) ? const_eC.length : favicon_.size);
         carouselB *= parseFloat(`${foundE.size}`);
      }
      rewardvideoB = `${((orientationv ? 2 : 5) | parseInt(`${trophy_}`))}`;
   }
   for (let v = 0; v < 2; v++) {
      g_countZ /= Math.max((uploadl == String.fromCharCode(101,0) ? uploadl.length : parseInt(`${placeholder_}`)), 3);
   }
   if (placeholder_ > auto_tr) {
      auto_tr -= assistq.length * parseInt(`${sortv}`);
   }
   for (let r = 0; r < 3; r++) {
      borderlessY = new Map([[`${sortv}`, (rewardvideoB == String.fromCharCode(48,0) ? rewardvideoB.length : parseInt(`${sortv}`))]]);
   }

    if (typeof props.onLoad === 'function') {

   while (borderlessY.size < 4) {
      borderlessY = new Map([[`${trophy_}`, 3]]);
      break;
   }
   if ((3 | g_countZ) <= 5) {
       let pause2 = 5.0;
       let editY = new Map([[String.fromCharCode(117,95,55,52,95,98,111,120,101,100,0),793], [String.fromCharCode(97,95,57,50,95,99,104,97,114,116,115,0),808], [String.fromCharCode(111,95,49,48,48,95,112,97,114,99,111,114,0),799]]);
       let single9 = 0.0;
          let arrowx = 2;
          let configure3 = [690, 266];
          let roundK = true;
         pause2 -= ((roundK ? 5 : 4) | configure3.length);
         arrowx *= 1;
         configure3 = [arrowx & arrowx];
      while (!Array.from(editY.keys()).includes(`${pause2}`)) {
         editY = new Map([[`${editY.size}`, parseInt(`${single9}`) >> (Math.min(Math.abs(editY.size), 2))]]);
         break;
      }
         editY[`${single9}`] = parseInt(`${single9}`);
       let detailsq = 5;
       let previewk = 0;
          let controls0 = String.fromCharCode(100,100,118,97,95,115,95,49,53,0);
          let utilsu = [825, 624];
         pause2 -= detailsq / 2;
         controls0 = `${controls0.length >> (Math.min(Math.abs(3), 5))}`;
         utilsu.push((String.fromCharCode(89,0) == controls0 ? controls0.length : utilsu.length));
         previewk ^= parseInt(`${pause2}`);
      for (let g = 0; g < 2; g++) {
         single9 /= Math.max(1, parseInt(`${pause2}`));
      }
       let tick4 = String.fromCharCode(115,95,53,52,95,102,105,103,104,116,101,114,115,0);
       let transferY = String.fromCharCode(116,111,111,108,116,105,112,115,95,108,95,52,57,0);
          let foregroundH = String.fromCharCode(102,117,110,99,116,105,111,110,115,95,56,95,57,49,0);
          let coreL = false;
          let typest = 4.0;
         tick4 = "1";
         foregroundH += `${(foregroundH.length / (Math.max(3, (coreL ? 1 : 4))))}`;
         coreL = !coreL;
         typest /= Math.max(5, (foregroundH.length - (coreL ? 5 : 1)));
      g_countZ /= Math.max((membershipC == String.fromCharCode(49,0) ? membershipC.length : assistq.length), 2);
   }
       let umengm = true;
       let downloaderQ = [156, 221];
      if (!umengm) {
         downloaderQ = [((umengm ? 2 : 5) | 1)];
      }
         umengm = downloaderQ.length >= 51;
       let frame_pL = [224, 355, 69];
         downloaderQ = [3];
         frame_pL.push(3 % (Math.max(8, downloaderQ.length)));
      if (1 < (frame_pL.length / (Math.max(downloaderQ.length, 6)))) {
          let matchesB = 4.0;
          let combineM = 2.0;
          let firebasej = String.fromCharCode(108,111,97,100,120,95,112,95,52,0);
          let tickedK = String.fromCharCode(120,95,55,51,95,103,111,101,114,108,105,0);
         frame_pL = [1 / (Math.max(8, tickedK.length))];
         matchesB *= parseInt(`${combineM}`) * firebasej.length;
         combineM *= (parseFloat(`${String.fromCharCode(99,0) == firebasej ? firebasej.length : parseInt(`${combineM}`)}`));
         tickedK = "1";
      }
      uploadl += "2";
   while (membershipC != String.fromCharCode(73,0)) {
      promotionJ += `${3 % (Math.max(3, rewardvideoB.length))}`;
      break;
   }
      props.onLoad(...arguments);
   do {
      scheduley *= parseFloat(`${2}`);
      if (scheduley == 2815254.0) {
         break;
      }
   } while (((uploadl.length + 3) < 4) && (scheduley == 2815254.0));
   for (let u = 0; u < 3; u++) {
       let pointD = 2.0;
         pointD += parseFloat(`${parseInt(`${pointD}`) - 3}`);
          let favoriteU = 4;
          let filterT = new Map([[String.fromCharCode(112,97,116,116,101,114,110,95,48,95,53,57,0),556], [String.fromCharCode(112,97,103,101,115,95,119,95,52,51,0),964], [String.fromCharCode(115,101,114,118,105,99,101,95,121,95,49,48,48,0),981]]);
         pointD *= parseFloat(`${3 * filterT.size}`);
         favoriteU %= Math.max(3 ^ favoriteU, 1);
         filterT = new Map([[`${favoriteU}`, favoriteU + 1]]);
      do {
         pointD /= Math.max(parseFloat(`${2}`), 1);
         if (4446987.0 == pointD) {
            break;
         }
      } while ((4446987.0 == pointD) && ((pointD / (Math.max(2.35, 9))) >= 5.22));
      trophy_ += parseFloat(`${1}`);
   }
       let update_yz = [974, 145, 401];
       let colorst = 1;
       let sell9 = 0;
      if ((3 - colorst) <= 5) {
         colorst &= 2 | update_yz.length;
      }
         colorst >>= Math.min(Math.abs(2), 5);
         colorst += 3;
      do {
         sell9 %= Math.max(3, 2);
         if (sell9 == 4333435) {
            break;
         }
      } while (((4 << (Math.min(1, Math.abs(colorst)))) >= 4) && (sell9 == 4333435));
      do {
          let zoomk = 0.0;
          let floaterb = 5;
          let lessG = new Map([[String.fromCharCode(100,95,52,53,95,109,97,120,105,109,105,122,101,100,0),true ], [String.fromCharCode(104,111,108,100,95,109,95,56,51,0),false ]]);
          let rightT = 0;
         sell9 >>= Math.min(Math.abs(2 | lessG.size), 1);
         zoomk += parseFloat(`${parseInt(`${zoomk}`)}`);
         floaterb /= Math.max(1, parseInt(`${zoomk}`) << (Math.min(5, Math.abs(floaterb))));
         lessG[`${rightT}`] = rightT;
         if (3147955 == sell9) {
            break;
         }
      } while ((3147955 == sell9) && (colorst >= 4));
      while (sell9 == 4) {
          let signinupV = new Map([[String.fromCharCode(112,95,52,50,95,100,105,115,97,112,112,101,97,114,105,110,103,0),true ], [String.fromCharCode(109,97,99,114,111,95,97,95,48,0),false ], [String.fromCharCode(115,95,50,53,95,114,101,118,105,101,119,0),true ]]);
          let pangleI = String.fromCharCode(119,95,56,54,95,116,97,110,103,101,110,116,0);
          let auto_6s = String.fromCharCode(105,109,101,114,95,102,95,51,57,0);
          let twitterI = 5;
         colorst /= Math.max(1 >> (Math.min(1, auto_6s.length)), 5);
         signinupV[`${twitterI}`] = 3 << (Math.min(3, Math.abs(twitterI)));
         pangleI += `${signinupV.size ^ 1}`;
         auto_6s += "1";
         break;
      }
      do {
         colorst -= update_yz.length / 2;
         if (1374368 == colorst) {
            break;
         }
      } while ((sell9 < colorst) && (1374368 == colorst));
         update_yz.push(sell9 ^ colorst);
      while (update_yz.includes(colorst)) {
          let disconnectedt = 1.0;
          let mini2 = 0;
          let robotow = String.fromCharCode(110,95,51,95,114,101,116,97,105,110,115,0);
          let floating0 = new Map([[String.fromCharCode(104,95,52,54,95,115,112,108,105,116,115,0),609], [String.fromCharCode(114,95,57,52,95,97,117,116,104,111,114,105,122,101,114,0),130], [String.fromCharCode(115,119,114,105,95,102,95,52,0),447]]);
         colorst *= mini2 & floating0.size;
         disconnectedt *= parseFloat(`${parseInt(`${disconnectedt}`) % (Math.max(3, 4))}`);
         mini2 >>= Math.min(Math.abs(3 - parseInt(`${disconnectedt}`)), 4);
         robotow += `${1 & parseInt(`${disconnectedt}`)}`;
         floating0 = new Map([[`${disconnectedt}`, robotow.length]]);
         break;
      }
      rewardvideoB += `${2 - parseInt(`${placeholder_}`)}`;
   if ((promotionJ.length ^ 5) > 2 || (parseInt(`${scheduley}`) - promotionJ.length) > 5) {
      scheduley *= parseFloat(`${borderlessY.size >> (Math.min(2, Math.abs(auto_tr)))}`);
   }

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
       let launchM = 4.0;
    let routerR = String.fromCharCode(118,108,111,103,95,109,95,53,52,0);
    let stepH = [712, 30, 711];
    let selectiont = String.fromCharCode(115,116,114,108,105,107,101,95,111,95,51,56,0);
    let assistY = 4.0;
    let whiteE = String.fromCharCode(101,108,98,103,95,102,95,56,0);
    let layouto = String.fromCharCode(116,95,55,56,95,100,111,119,110,115,97,109,112,108,101,0);
    let viewerT = new Map([[String.fromCharCode(117,95,52,48,95,99,108,97,115,104,101,100,0),38], [String.fromCharCode(112,95,54,56,95,111,112,101,110,115,115,108,0),565], [String.fromCharCode(100,95,57,57,95,99,98,115,110,105,100,0),615]]);
    let storez = 1.0;
    let roboto5 = 1.0;
    let mappingf = [571, 215, 376];
    let mini3 = 2;
    let referrerh = String.fromCharCode(108,95,52,57,95,114,101,110,101,119,0);
    let diceN = [545, 962, 202];
    let termsy = String.fromCharCode(116,105,109,101,114,95,52,95,49,53,0);
    let androidB = true;
      stepH.push(parseInt(`${launchM}`) % (Math.max(selectiont.length, 9)));
   if (3 <= layouto.length) {
      layouto = `${parseInt(`${storez}`)}`;
   }

    if (!isLoading) {

      selectiont += `${parseInt(`${assistY}`)}`;
      routerR = `${parseInt(`${assistY}`)}`;
      return null;
       let type_r4C = String.fromCharCode(112,105,110,99,104,95,112,95,53,52,0);
          let sendY = 1.0;
         type_r4C = "3";
         sendY *= parseInt(`${sendY}`);
      do {
          let mintegralA = new Map([[String.fromCharCode(97,109,114,119,98,100,101,99,95,105,95,51,57,0),125], [String.fromCharCode(114,101,99,111,103,110,105,122,101,100,95,104,95,55,55,0),943], [String.fromCharCode(120,97,115,109,95,116,95,55,48,0),571]]);
          let minimizeP = [434, 971, 242];
          let usernameK = 2;
         type_r4C += `${mintegralA.size - 1}`;
         mintegralA = new Map([[`${minimizeP.length}`, 3 | usernameK]]);
         minimizeP = [usernameK / (Math.max(minimizeP.length, 10))];
         if (String.fromCharCode(111,103,105,51,52,49,48,0) == type_r4C) {
            break;
         }
      } while ((String.fromCharCode(111,103,105,51,52,49,48,0) == type_r4C) && (type_r4C == type_r4C));
       let expiredZ = 5.0;
       let leagueO = 0.0;
      selectiont += `${parseInt(`${launchM}`) ^ 3}`;
      launchM += stepH.length;

    }
    return (
      <View style={VideoPlayerstyles.loader.container}>
        <Animated.Image
          source={require('./images/icons/searchStations.png')}
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
   for (let v = 0; v < 2; v++) {
       let control2 = 3.0;
       let sentryC = [608, 750];
       let mutedc = new Map([[String.fromCharCode(117,95,50,50,95,118,105,115,105,98,105,108,105,116,105,101,115,0),350], [String.fromCharCode(104,95,57,53,95,101,98,109,108,0),581], [String.fromCharCode(102,114,97,109,101,112,97,99,107,95,112,95,52,0),596]]);
          let description_7sZ = 4;
          let readI = [72, 879];
          let dialogz = new Map([[String.fromCharCode(98,95,54,49,95,115,105,103,110,105,102,105,99,97,110,100,0),796], [String.fromCharCode(100,111,102,102,115,101,116,115,95,122,95,55,56,0),783], [String.fromCharCode(119,102,100,105,102,95,120,95,51,54,0),626]]);
         sentryC.push(description_7sZ << (Math.min(Math.abs(dialogz.size), 1)));
         description_7sZ <<= Math.min(4, Math.abs(1 >> (Math.min(5, readI.length))));
         readI.push(3);
         sentryC = [sentryC.length];
      while (3 == (2 / (Math.max(9, mutedc.size))) && 5 == (sentryC.length / (Math.max(2, 9)))) {
          let googleA = 2.0;
          let catagory6 = 1;
          let customG = String.fromCharCode(109,106,112,101,103,106,112,101,103,95,111,95,49,53,0);
         sentryC = [1 / (Math.max(parseInt(`${googleA}`), 6))];
         googleA *= parseFloat(`${customG.length}`);
         catagory6 |= 2 - customG.length;
         break;
      }
         sentryC.push(mutedc.size);
      for (let l = 0; l < 2; l++) {
         sentryC = [sentryC.length];
      }
      if ((mutedc.size - 2) == 4) {
         sentryC = [2 & mutedc.size];
      }
       let paginationk = String.fromCharCode(108,105,109,105,116,101,100,95,49,95,56,56,0);
       let formk = String.fromCharCode(113,95,56,49,95,98,108,111,99,107,105,101,0);
      do {
          let faviconm = String.fromCharCode(104,95,54,51,95,117,112,115,104,105,102,116,0);
          let ticky = false;
          let theme3 = [347, 160, 11];
         mutedc = new Map([[formk, (paginationk == String.fromCharCode(111,0) ? formk.length : paginationk.length)]]);
         faviconm += `${faviconm.length}`;
         ticky = faviconm.length < 35;
         theme3.push((faviconm.length + (ticky ? 1 : 1)));
         if (4518223 == mutedc.size) {
            break;
         }
      } while ((4518223 == mutedc.size) && ((4 | mutedc.size) == 5));
      do {
         paginationk += `${parseInt(`${control2}`)}`;
         if (paginationk == String.fromCharCode(104,95,115,121,106,103,57,0)) {
            break;
         }
      } while ((paginationk == String.fromCharCode(104,95,115,121,106,103,57,0)) && ((parseInt(`${control2}`) * paginationk.length) < 1 && 1 < (paginationk.length * parseInt(`${control2}`))));
      layouto = `${selectiont.length}`;
   }
       let rankl = String.fromCharCode(97,99,99,117,114,97,116,101,95,112,95,54,54,0);
       let dataM = [128, 749];
       let castingm = String.fromCharCode(101,112,104,101,109,101,114,97,108,95,54,95,56,48,0);
         dataM = [castingm.length >> (Math.min(rankl.length, 2))];
      do {
         castingm += `${1 & castingm.length}`;
         if (354609 == castingm.length) {
            break;
         }
      } while ((354609 == castingm.length) && (castingm.endsWith(`${dataM.length}`)));
         rankl = `${rankl.length}`;
         rankl += `${castingm.length << (Math.min(1, rankl.length))}`;
      do {
          let specq = 1;
          let heartJ = String.fromCharCode(97,110,100,95,117,95,49,57,0);
          let anner5 = 2.0;
          let models4 = 4.0;
          let shootk = 2.0;
         dataM.push(specq - parseInt(`${models4}`));
         specq -= parseInt(`${anner5}`) << (Math.min(Math.abs(2), 3));
         heartJ = `${parseInt(`${shootk}`)}`;
         anner5 *= parseInt(`${shootk}`);
         models4 -= parseFloat(`${heartJ.length % 2}`);
         if (3831548 == dataM.length) {
            break;
         }
      } while ((3831548 == dataM.length) && ((dataM.length << (Math.min(rankl.length, 3))) >= 3 && 4 >= (3 << (Math.min(4, dataM.length)))));
         dataM.push(dataM.length % (Math.max(rankl.length, 4)));
      while ((rankl.length << (Math.min(5, dataM.length))) >= 3) {
         rankl += "3";
         break;
      }
      do {
          let tickv = [349, 390];
         dataM = [castingm.length * tickv.length];
         if (659191 == dataM.length) {
            break;
         }
      } while (((dataM.length ^ castingm.length) == 4) && (659191 == dataM.length));
       let backgroundO = [276, 476, 139];
       let progresso = [922, 568, 166];
      viewerT[whiteE] = rankl.length % 3;

  };

  const onEnd = () => {
       let rewardvideoG = [String.fromCharCode(99,111,112,121,118,95,99,95,57,49,0), String.fromCharCode(117,110,100,101,108,101,103,97,116,101,95,114,95,49,51,0), String.fromCharCode(111,95,54,49,95,112,111,115,116,105,110,103,0)];
    let feedbackf = 4.0;
    let matchC = String.fromCharCode(100,95,56,56,95,119,114,105,116,101,99,111,112,121,0);
    let actionsP = 1;
    let sportJ = 3.0;
    let launcherO = String.fromCharCode(105,95,51,50,95,114,101,108,102,117,110,99,0);
    let serviceh = 5.0;
    let placementl = 2.0;
    let thumbnailm = String.fromCharCode(110,95,55,49,95,109,97,105,108,99,104,105,109,112,0);
    let plusP = String.fromCharCode(118,95,56,50,95,112,114,111,100,117,99,116,102,0);
    let lessT = 3.0;
      matchC += `${(matchC == String.fromCharCode(79,0) ? matchC.length : parseInt(`${sportJ}`))}`;
      sportJ += parseInt(`${feedbackf}`);
   while (actionsP == launcherO.length) {
      launcherO = "2";
      break;
   }
      launcherO = "3";
      actionsP |= 1;
       let alertt = 5;
       let materialp = 2;
         alertt <<= Math.min(Math.abs(2 << (Math.min(1, Math.abs(alertt)))), 4);
       let animationd = String.fromCharCode(110,99,104,117,110,107,95,55,95,56,54,0);
       let mimoM = String.fromCharCode(110,95,51,48,95,117,110,102,105,108,116,101,114,101,100,0);
      if (materialp <= 1) {
         materialp *= 1 >> (Math.min(1, Math.abs(materialp)));
      }
      do {
         mimoM = `${materialp + alertt}`;
         if (mimoM == String.fromCharCode(56,99,109,103,121,98,112,48,108,0)) {
            break;
         }
      } while ((mimoM == String.fromCharCode(56,99,109,103,121,98,112,48,108,0)) && (mimoM.length < animationd.length));
      do {
         alertt >>= Math.min(2, mimoM.length);
         if (91076 == alertt) {
            break;
         }
      } while ((91076 == alertt) && (4 <= (2 - materialp) || (alertt - 2) <= 2));
         animationd += `${animationd.length % (Math.max(3, 7))}`;
      serviceh *= parseFloat(`${1 >> (Math.min(3, rewardvideoG.length))}`);

    console.log('onend');
   while (2.44 >= (5.2 - serviceh) && (rewardvideoG.length >> (Math.min(Math.abs(5), 4))) >= 5) {
      serviceh /= Math.max(parseFloat(`${actionsP << (Math.min(Math.abs(3), 1))}`), 1);
      break;
   }
       let away5 = String.fromCharCode(117,110,109,97,112,95,98,95,55,48,0);
       let corea = String.fromCharCode(97,95,53,50,95,100,105,115,109,105,115,115,101,100,0);
          let related6 = String.fromCharCode(100,105,97,108,111,103,115,95,57,95,50,48,0);
          let blackB = false;
         corea = `${(related6 == String.fromCharCode(101,0) ? related6.length : (blackB ? 3 : 2))}`;
      for (let a = 0; a < 3; a++) {
         corea = `${away5.length >> (Math.min(Math.abs(3), 5))}`;
      }
          let catalogo = String.fromCharCode(111,117,116,113,95,113,95,53,52,0);
          let commente = 2.0;
          let activeh = String.fromCharCode(109,95,56,50,95,99,111,118,101,114,101,100,0);
         corea = `${parseInt(`${commente}`)}`;
         catalogo += `${activeh.length}`;
         commente /= Math.max(parseFloat(`${activeh.length % (Math.max(3, 4))}`), 4);
         away5 += "3";
       let update_qU = new Map([[String.fromCharCode(102,102,116,112,97,99,107,95,52,95,50,52,0),56], [String.fromCharCode(106,95,51,51,95,100,101,108,101,116,101,0),232], [String.fromCharCode(110,97,110,111,112,98,95,55,95,53,50,0),562]]);
       let halfJ = new Map([[String.fromCharCode(109,111,100,105,102,121,95,108,95,53,57,0),756], [String.fromCharCode(103,114,97,112,104,105,99,95,54,95,50,55,0),58], [String.fromCharCode(118,105,109,97,103,101,108,111,97,100,101,114,95,116,95,55,52,0),159]]);
      while (5 < corea.length) {
         away5 += `${away5.length + update_qU.size}`;
         break;
      }
      rewardvideoG = [parseInt(`${placementl}`) & 3];
   while (feedbackf < 4.59) {
       let weiboz = String.fromCharCode(97,95,53,51,95,109,111,100,101,99,111,115,116,115,0);
       let login0 = String.fromCharCode(99,95,51,49,95,111,112,101,110,0);
      for (let d = 0; d < 3; d++) {
         weiboz = `${3 << (Math.min(5, login0.length))}`;
      }
         weiboz = `${(String.fromCharCode(106,0) == weiboz ? login0.length : weiboz.length)}`;
         weiboz += `${3 * weiboz.length}`;
      for (let p = 0; p < 1; p++) {
          let singleg = 4;
         login0 = "2";
         singleg %= Math.max(singleg, 3);
      }
      if (weiboz != String.fromCharCode(68,0)) {
         login0 = `${login0.length}`;
      }
       let screenT = 5.0;
      feedbackf -= thumbnailm.length;
      break;
   }
       let matches0 = String.fromCharCode(117,110,112,111,105,115,111,110,95,122,95,52,50,0);
       let playM = [174, 510];
      while (4 > (playM.length >> (Math.min(Math.abs(2), 4))) && (matches0.length >> (Math.min(Math.abs(2), 1))) > 1) {
         playM = [playM.length];
         break;
      }
      for (let c = 0; c < 3; c++) {
         playM = [playM.length];
      }
      while (2 >= (matches0.length & 2) && 3 >= (2 & matches0.length)) {
         playM.push(matches0.length);
         break;
      }
         matches0 = `${matches0.length}`;
      for (let s = 0; s < 3; s++) {
          let string_ = 2.0;
          let detailp = String.fromCharCode(99,95,49,50,95,112,103,110,111,0);
          let g_lockr = new Map([[String.fromCharCode(101,120,105,115,116,115,95,116,95,56,55,0),674], [String.fromCharCode(97,108,103,111,114,95,112,95,50,49,0),294]]);
          let arrowO = new Map([[String.fromCharCode(107,95,53,51,95,109,102,104,100,0),503], [String.fromCharCode(115,95,50,49,95,115,117,112,112,111,114,116,115,0),295], [String.fromCharCode(99,95,50,57,95,101,110,99,111,100,101,100,115,116,114,101,97,109,0),600]]);
         playM.push(detailp.length);
         string_ *= g_lockr.size - arrowO.size;
         detailp += `${parseInt(`${string_}`)}`;
         g_lockr[`${arrowO.size}`] = arrowO.size;
      }
         playM.push(matches0.length);
      thumbnailm = `${launcherO.length % 2}`;
   for (let v = 0; v < 1; v++) {
      rewardvideoG.push(matchC.length % 2);
   }
       let bottom8 = String.fromCharCode(113,95,53,56,95,105,109,112,0);
         bottom8 = `${bottom8.length}`;
      while (bottom8 != bottom8) {
          let fastforwardM = String.fromCharCode(121,95,49,54,95,116,115,114,0);
          let ewarded9 = [521, 561, 18];
          let inactivem = String.fromCharCode(105,95,49,51,95,115,101,116,117,112,100,0);
         bottom8 += "3";
         fastforwardM += `${1 | fastforwardM.length}`;
         ewarded9.push(ewarded9.length);
         inactivem = `${fastforwardM.length}`;
         break;
      }
         bottom8 = `${bottom8.length}`;
      sportJ /= Math.max(bottom8.length, 2);

    setIsLoading(false);
      serviceh /= Math.max(5, parseFloat(`${thumbnailm.length}`));
   for (let e = 0; e < 2; e++) {
      launcherO = "2";
   }
      serviceh *= parseFloat(`${3 * rewardvideoG.length}`);
   if (2.10 > (serviceh - parseFloat(`${thumbnailm.length}`))) {
      thumbnailm = `${rewardvideoG.length & 3}`;
   }
   while (3.75 <= (matchC.length * sportJ) || 3.75 <= (matchC.length * sportJ)) {
      matchC += `${plusP.length >> (Math.min(2, thumbnailm.length))}`;
      break;
   }
      thumbnailm = `${(String.fromCharCode(86,0) == plusP ? plusP.length : matchC.length)}`;

    props.onLiveEnd?.();
      actionsP *= 1;
       let targeti = false;
       let nexto = new Map([[String.fromCharCode(111,110,99,101,95,120,95,57,51,0),String.fromCharCode(99,95,49,52,95,116,114,117,110,99,97,116,101,0)], [String.fromCharCode(99,95,52,49,95,100,105,114,101,99,116,105,111,110,97,108,0),String.fromCharCode(120,95,54,54,95,98,108,97,99,107,115,0)]]);
      while (2 == nexto.size && 2 == (2 >> (Math.min(4, Math.abs(nexto.size))))) {
         targeti = nexto.size < 6 || !targeti;
         break;
      }
         targeti = nexto.size < 62;
         nexto = new Map([[`${nexto.size}`, 3]]);
      while (!targeti) {
          let splash5 = String.fromCharCode(99,97,115,101,100,95,105,95,56,53,0);
          let list5 = 1.0;
          let x_imageA = [662, 66, 59];
          let suggestionq = String.fromCharCode(109,115,105,122,101,95,104,95,50,54,0);
         targeti = 29.42 >= list5 || targeti;
         splash5 = `${2 >> (Math.min(2, x_imageA.length))}`;
         list5 *= 1 | x_imageA.length;
         suggestionq += `${suggestionq.length}`;
         break;
      }
          let turnN = String.fromCharCode(111,98,115,101,114,118,101,114,95,121,95,48,0);
          let checkboxN = new Map([[String.fromCharCode(99,108,97,115,104,101,100,95,109,95,49,48,0),563], [String.fromCharCode(108,95,53,54,95,104,105,101,114,97,114,99,104,121,0),917], [String.fromCharCode(100,111,116,116,101,100,95,115,95,51,53,0),301]]);
          let completeV = true;
         nexto = new Map([[`${nexto.size}`, nexto.size]]);
         turnN += `${(1 >> (Math.min(4, Math.abs((completeV ? 4 : 2)))))}`;
         checkboxN[`${completeV}`] = checkboxN.size;
          let short_qvS = [439, 823];
          let referrers = true;
          let greenM = false;
         nexto[`${targeti}`] = ((targeti ? 4 : 1) << (Math.min(Math.abs(3), 4)));
         short_qvS.push(((greenM ? 2 : 1)));
         referrers = short_qvS.length == 19;
         greenM = !referrers;
      plusP += `${matchC.length}`;
   while (serviceh <= parseFloat(`${rewardvideoG.length}`)) {
      rewardvideoG.push(thumbnailm.length);
      break;
   }
   if (2 < (5 % (Math.max(8, launcherO.length))) && 5 < (launcherO.length - parseInt(`${serviceh}`))) {
      serviceh += parseFloat(`${parseInt(`${sportJ}`)}`);
   }
   if (launcherO.endsWith(`${feedbackf}`)) {
      launcherO += `${parseInt(`${sportJ}`) + 3}`;
   }
   for (let e = 0; e < 3; e++) {
       let dialogW = 2.0;
       let roundz = false;
       let unselectedK = 1.0;
       let downloadedz = String.fromCharCode(115,95,51,54,95,99,111,110,115,101,110,116,0);
       let emojiw = String.fromCharCode(120,95,57,49,95,97,110,105,109,97,116,97,98,108,101,0);
          let completes = String.fromCharCode(103,95,56,53,95,102,112,115,0);
         roundz = emojiw.endsWith(`${dialogW}`);
         completes += `${completes.length << (Math.min(Math.abs(2), 4))}`;
         downloadedz = `${emojiw.length}`;
      for (let v = 0; v < 1; v++) {
          let i_managerP = String.fromCharCode(122,95,56,57,95,112,114,101,100,120,0);
          let acceptedG = true;
          let bootsplashK = 2.0;
          let recommendationE = 0.0;
          let statsp = 1.0;
         downloadedz = `${((roundz ? 2 : 5) - parseInt(`${unselectedK}`))}`;
         i_managerP = `${2 - parseInt(`${statsp}`)}`;
         acceptedG = 47.79 <= statsp || !acceptedG;
         bootsplashK *= i_managerP.length >> (Math.min(Math.abs(1), 5));
         recommendationE -= parseInt(`${recommendationE}`) ^ parseInt(`${statsp}`);
      }
         emojiw += `${downloadedz.length | 3}`;
         downloadedz += "1";
      do {
         emojiw += `${(String.fromCharCode(76,0) == downloadedz ? parseInt(`${dialogW}`) : downloadedz.length)}`;
         if (emojiw == String.fromCharCode(115,49,57,99,101,0)) {
            break;
         }
      } while (((dialogW / 2.55) >= 1.0) && (emojiw == String.fromCharCode(115,49,57,99,101,0)));
         emojiw = `${parseInt(`${unselectedK}`)}`;
      if (emojiw == downloadedz) {
         downloadedz += `${1 << (Math.min(4, Math.abs(parseInt(`${dialogW}`))))}`;
      }
      while ((emojiw.length ^ 2) > 4 && (2 * emojiw.length) > 1) {
         emojiw = `${(parseInt(`${unselectedK}`) & (roundz ? 3 : 1))}`;
         break;
      }
      if (emojiw.startsWith(`${roundz}`)) {
         roundz = 67.55 <= dialogW && !roundz;
      }
      while (!roundz) {
          let streaming3 = false;
         roundz = downloadedz.length < unselectedK;
         streaming3 = !streaming3 || !streaming3;
         break;
      }
      do {
          let overlayt = false;
          let linkn = String.fromCharCode(99,111,100,101,115,95,48,95,53,55,0);
          let gpayO = String.fromCharCode(97,95,50,0);
          let stylesW = String.fromCharCode(107,95,52,55,95,100,101,99,105,109,97,116,111,114,0);
          let mail2 = 2.0;
         unselectedK /= Math.max((String.fromCharCode(81,0) == gpayO ? (overlayt ? 1 : 1) : gpayO.length), 2);
         overlayt = !stylesW.startsWith(`${mail2}`);
         linkn += `${parseInt(`${mail2}`) + linkn.length}`;
         stylesW += `${parseInt(`${mail2}`) - 3}`;
         if (unselectedK == 3899250.0) {
            break;
         }
      } while ((4 >= (downloadedz.length - 1) || 4 >= (downloadedz.length >> (Math.min(Math.abs(1), 1)))) && (unselectedK == 3899250.0));
         unselectedK -= ((roundz ? 5 : 3) >> (Math.min(Math.abs(parseInt(`${dialogW}`)), 5)));
          let videocommonw = String.fromCharCode(112,103,109,121,117,118,95,51,95,51,54,0);
         downloadedz += `${emojiw.length}`;
         videocommonw = `${videocommonw.length ^ videocommonw.length}`;
         downloadedz += `${3 ^ parseInt(`${unselectedK}`)}`;
      plusP = `${downloadedz.length}`;
   }

  };

  const onError = () => {
       let bingz = String.fromCharCode(104,95,53,55,95,115,111,108,105,100,105,116,121,0);
    let leagueF = String.fromCharCode(101,95,54,52,95,114,105,110,103,116,111,110,101,115,0);
    let cnewinterstitialF = String.fromCharCode(112,95,50,49,95,99,114,111,112,112,105,110,103,0);
    let cornerb = String.fromCharCode(121,117,118,110,118,99,95,49,95,53,53,0);
    let mbbidm = false;
    let backwardM = String.fromCharCode(102,117,108,108,98,97,110,100,95,114,95,56,55,0);
    let mappingJ = new Map([[String.fromCharCode(112,114,111,114,101,115,100,97,116,97,95,103,95,51,50,0),false ], [String.fromCharCode(98,95,51,50,95,115,105,108,101,110,116,0),false ], [String.fromCharCode(109,112,101,103,116,115,95,114,95,51,54,0),true ]]);
    let backwardP = String.fromCharCode(99,95,50,95,109,97,99,114,111,0);
       let strings3 = new Map([[String.fromCharCode(98,97,114,101,95,104,95,54,54,0),true ], [String.fromCharCode(115,116,97,108,101,95,103,95,54,52,0),false ], [String.fromCharCode(114,101,100,118,95,116,95,57,0),true ]]);
       let foregroundK = String.fromCharCode(108,97,115,116,95,55,95,52,54,0);
      while (foregroundK.length <= strings3.size) {
         strings3 = new Map([[`${strings3.size}`, foregroundK.length % (Math.max(4, strings3.size))]]);
         break;
      }
      while (foregroundK.length == 3) {
         strings3[foregroundK] = strings3.size;
         break;
      }
          let activeQ = 2.0;
          let minimizec = 2.0;
         strings3[foregroundK] = parseInt(`${minimizec}`);
         activeQ += parseFloat(`${parseInt(`${activeQ}`) % (Math.max(parseInt(`${activeQ}`), 1))}`);
         minimizec -= parseInt(`${activeQ}`);
      while (2 < (strings3.size | 3) && (strings3.size | 3) < 1) {
         foregroundK += `${foregroundK.length % 3}`;
         break;
      }
         foregroundK = "3";
         strings3 = new Map([[`${strings3.size}`, foregroundK.length]]);
      leagueF += `${bingz.length}`;
      leagueF = `${(backwardM == String.fromCharCode(57,0) ? backwardM.length : backwardP.length)}`;
      backwardM = `${cnewinterstitialF.length % 1}`;
       let tailf = 1.0;
       let memberi = String.fromCharCode(99,95,56,48,95,115,119,105,112,101,100,0);
       let iconV = String.fromCharCode(115,95,54,50,95,101,120,116,101,110,115,105,98,108,101,0);
          let descp = String.fromCharCode(115,95,54,55,95,119,105,112,101,0);
          let actionc = 5.0;
         tailf += parseFloat(`${2}`);
         descp = `${parseInt(`${actionc}`) & 2}`;
         actionc -= parseInt(`${actionc}`) + descp.length;
         tailf /= Math.max(parseFloat(`${memberi.length + 1}`), 3);
         memberi = `${(iconV == String.fromCharCode(78,0) ? iconV.length : memberi.length)}`;
         tailf += (parseFloat(`${String.fromCharCode(53,0) == memberi ? parseInt(`${tailf}`) : memberi.length}`));
      if (!iconV.includes(`${tailf}`)) {
          let whistlej = String.fromCharCode(109,95,53,53,95,114,101,97,100,0);
          let score_ = 1.0;
          let inewinterstitialY = String.fromCharCode(98,95,57,48,95,112,111,115,115,105,98,108,101,0);
          let tramini6 = String.fromCharCode(102,111,114,109,97,110,116,95,118,95,51,53,0);
          let forward8 = new Map([[String.fromCharCode(112,114,101,112,114,111,99,101,115,115,95,55,95,49,49,0),String.fromCharCode(108,95,57,95,103,110,111,0)], [String.fromCharCode(112,95,56,52,95,101,118,101,110,108,121,0),String.fromCharCode(121,95,53,53,95,104,97,110,103,0)], [String.fromCharCode(108,95,50,48,95,99,111,112,121,97,100,100,0),String.fromCharCode(105,116,120,102,109,95,119,95,49,54,0)]]);
         tailf *= parseFloat(`${parseInt(`${score_}`) % (Math.max(4, memberi.length))}`);
         whistlej = `${inewinterstitialY.length}`;
         score_ += 2;
         inewinterstitialY = `${forward8.size}`;
         tramini6 = `${3 | forward8.size}`;
      }
      while ((parseInt(`${tailf}`) * memberi.length) <= 4 && (4.85 * tailf) <= 5.40) {
         memberi = `${memberi.length}`;
         break;
      }
         tailf /= Math.max(parseFloat(`${2}`), 1);
      do {
         memberi = "2";
         if (memberi == String.fromCharCode(50,118,118,95,97,112,0)) {
            break;
         }
      } while ((!iconV.includes(`${memberi.length}`)) && (memberi == String.fromCharCode(50,118,118,95,97,112,0)));
      while (!memberi.includes(`${iconV.length}`)) {
         iconV += `${parseInt(`${tailf}`) | memberi.length}`;
         break;
      }
      cornerb = `${3 << (Math.min(2, bingz.length))}`;
   while ((cnewinterstitialF.length * mappingJ.size) >= 5) {
      mappingJ = new Map([[`${mappingJ.size}`, 3]]);
      break;
   }
      mbbidm = mbbidm || backwardP.length > 4;

    setIsError(true);
      bingz = `${backwardP.length}`;
      mbbidm = (18 <= (bingz.length ^ (!mbbidm ? bingz.length : 18)));
   do {
       let clubA = String.fromCharCode(98,95,50,51,95,112,115,97,0);
       let searchbar2 = String.fromCharCode(100,95,57,95,115,99,97,108,97,114,112,114,111,100,117,99,116,0);
       let gmaile = true;
       let rankS = new Map([[String.fromCharCode(115,97,100,120,95,54,95,53,57,0),392], [String.fromCharCode(103,104,97,115,104,95,98,95,57,48,0),169], [String.fromCharCode(116,120,116,110,105,100,95,122,95,51,55,0),24]]);
      do {
         rankS = new Map([[`${gmaile}`, ((gmaile ? 4 : 3) % 3)]]);
         if (3474010 == rankS.size) {
            break;
         }
      } while ((2 > rankS.size) && (3474010 == rankS.size));
         clubA = `${(rankS.size | (gmaile ? 3 : 2))}`;
          let a_countJ = 3.0;
          let hongkongK = 1;
         gmaile = hongkongK <= 79;
         a_countJ -= parseFloat(`${parseInt(`${a_countJ}`) & 3}`);
         hongkongK %= Math.max(1 ^ parseInt(`${a_countJ}`), 2);
      if (clubA.startsWith(`${gmaile}`)) {
         clubA = "2";
      }
      for (let k = 0; k < 1; k++) {
          let indexr = [String.fromCharCode(114,95,50,55,95,117,110,102,108,97,116,116,101,110,101,100,0), String.fromCharCode(114,97,116,101,115,95,49,95,56,49,0)];
          let rewardvideoL = [690, 877, 958];
          let albumb = 1.0;
         rankS[`${albumb}`] = parseInt(`${albumb}`) / (Math.max(rewardvideoL.length, 10));
         indexr = [2];
         rewardvideoL.push(indexr.length % (Math.max(indexr.length, 1)));
      }
         searchbar2 = `${((gmaile ? 4 : 4) & 1)}`;
      if (clubA != searchbar2) {
          let eventG = [483, 120, 412];
          let commentG = new Map([[String.fromCharCode(117,95,52,50,95,119,97,114,110,105,110,103,115,0),true ], [String.fromCharCode(115,95,52,55,0),false ]]);
          let e_unlockQ = String.fromCharCode(117,109,105,100,95,103,95,55,57,0);
         searchbar2 += `${(clubA == String.fromCharCode(122,0) ? rankS.size : clubA.length)}`;
         eventG = [2 & eventG.length];
         commentG = new Map([[`${eventG.length}`, 1 | e_unlockQ.length]]);
         e_unlockQ += `${commentG.size / (Math.max(eventG.length, 8))}`;
      }
          let expiredB = [String.fromCharCode(110,95,55,50,0), String.fromCharCode(121,95,55,55,95,115,112,114,105,110,103,0), String.fromCharCode(108,111,97,116,95,104,95,53,53,0)];
          let fieldv = false;
         gmaile = 59 == rankS.size;
         expiredB.push(1);
         fieldv = expiredB.includes(fieldv);
         clubA = `${((gmaile ? 4 : 2) << (Math.min(searchbar2.length, 4)))}`;
         rankS = new Map([[`${gmaile}`, 3 | searchbar2.length]]);
       let reactY = true;
      do {
          let main_gs = new Map([[String.fromCharCode(103,101,111,95,52,95,49,51,0),String.fromCharCode(103,114,97,110,117,108,97,114,95,101,95,53,53,0)], [String.fromCharCode(102,95,52,49,95,114,101,99,111,118,101,114,0),String.fromCharCode(103,95,56,50,95,116,109,109,98,114,0)], [String.fromCharCode(112,117,110,99,116,117,97,116,105,111,110,95,101,95,50,51,0),String.fromCharCode(97,101,99,109,95,116,95,57,51,0)]]);
         clubA += `${(clubA == String.fromCharCode(114,0) ? clubA.length : rankS.size)}`;
         main_gs[`${main_gs.size}`] = 3;
         if (1594839 == clubA.length) {
            break;
         }
      } while ((1594839 == clubA.length) && (gmaile));
      cnewinterstitialF += `${backwardP.length}`;
      if (3700639 == cnewinterstitialF.length) {
         break;
      }
   } while ((leagueF == String.fromCharCode(73,0)) && (3700639 == cnewinterstitialF.length));
   for (let c = 0; c < 1; c++) {
      mbbidm = !mbbidm;
   }
      backwardM += `${(String.fromCharCode(90,0) == bingz ? bingz.length : cnewinterstitialF.length)}`;
      leagueF += "2";

    setIsLoading(false);
   if (!mbbidm || (mappingJ.size - 2) < 1) {
      mappingJ = new Map([[backwardM, 1]]);
   }
      backwardM = `${cnewinterstitialF.length % 1}`;
      cornerb += `${(cnewinterstitialF == String.fromCharCode(114,0) ? cnewinterstitialF.length : backwardP.length)}`;
       let tumbnail4 = new Map([[String.fromCharCode(99,99,105,112,95,105,95,49,48,48,0),false ], [String.fromCharCode(97,95,57,49,95,102,114,97,109,101,119,111,114,107,0),true ], [String.fromCharCode(103,95,57,52,95,98,105,111,109,101,116,114,121,0),false ]]);
       let filedB = String.fromCharCode(120,95,56,57,95,115,119,105,116,99,104,0);
      do {
          let topicw = String.fromCharCode(115,109,111,111,116,104,105,110,103,95,106,95,51,0);
         filedB += `${(String.fromCharCode(122,0) == filedB ? topicw.length : filedB.length)}`;
         if (filedB.length == 1902759) {
            break;
         }
      } while ((3 >= (tumbnail4.size % (Math.max(5, 6)))) && (filedB.length == 1902759));
          let condensedd = String.fromCharCode(114,103,98,97,108,101,95,107,95,50,55,0);
          let controlsa = new Map([[String.fromCharCode(115,112,101,110,100,101,114,95,97,95,55,48,0),26], [String.fromCharCode(114,101,109,97,112,95,97,95,55,52,0),531]]);
          let streamingu = String.fromCharCode(104,100,101,99,95,120,95,52,48,0);
         filedB = `${controlsa.size}`;
         condensedd += `${streamingu.length}`;
         controlsa[streamingu] = (String.fromCharCode(49,0) == streamingu ? streamingu.length : condensedd.length);
         tumbnail4[filedB] = tumbnail4.size >> (Math.min(Math.abs(1), 4));
      for (let j = 0; j < 3; j++) {
          let emojiq = String.fromCharCode(112,97,121,101,101,95,114,95,54,50,0);
          let orangel = String.fromCharCode(105,95,49,52,95,116,105,107,101,114,0);
          let previewQ = false;
          let close1 = new Map([[String.fromCharCode(107,95,54,54,95,97,116,116,114,97,99,116,105,110,103,0),true ], [String.fromCharCode(109,95,56,48,95,115,121,110,116,104,101,115,105,122,101,114,0),true ], [String.fromCharCode(104,97,108,100,99,108,117,116,115,114,99,95,101,95,50,56,0),false ]]);
          let statsd = true;
         filedB = `${filedB.length ^ orangel.length}`;
         emojiq += `${2 & close1.size}`;
         orangel += "3";
         previewQ = 49 <= emojiq.length;
         close1 = new Map([[`${close1.size}`, ((previewQ ? 4 : 4) - close1.size)]]);
      }
      do {
          let assistd = new Map([[String.fromCharCode(109,95,51,54,95,117,110,108,111,99,107,0),38], [String.fromCharCode(116,95,49,53,95,114,101,103,101,110,101,114,97,116,101,0),393]]);
          let with_yn = 1;
          let sportQ = String.fromCharCode(113,95,53,49,95,120,99,104,103,0);
          let link1 = String.fromCharCode(109,97,116,114,105,99,101,115,95,52,95,51,48,0);
         tumbnail4[filedB] = 2;
         assistd[link1] = 2;
         with_yn *= 3;
         sportQ += `${assistd.size}`;
         link1 = `${3 + sportQ.length}`;
         if (1032685 == tumbnail4.size) {
            break;
         }
      } while ((1032685 == tumbnail4.size) && (filedB.length < tumbnail4.size));
         filedB = "3";
      mappingJ = new Map([[cornerb, 1]]);
      cornerb += "3";
   do {
       let termsj = String.fromCharCode(97,115,111,108,117,116,101,95,106,95,50,51,0);
       let hnewsO = String.fromCharCode(103,95,55,49,95,99,111,112,121,105,110,105,111,118,0);
       let sportk = String.fromCharCode(110,101,105,103,104,98,111,117,114,95,102,95,53,52,0);
      for (let z = 0; z < 1; z++) {
         sportk = `${hnewsO.length}`;
      }
         sportk += `${sportk.length + hnewsO.length}`;
       let sellr = 5.0;
       let regeng8 = 0.0;
      if (5.70 >= (1.17 + sellr)) {
         hnewsO = `${parseInt(`${regeng8}`)}`;
      }
      do {
         sellr += parseFloat(`${parseInt(`${regeng8}`) >> (Math.min(Math.abs(3), 4))}`);
         if (sellr == 4139269.0) {
            break;
         }
      } while (((hnewsO.length | 2) >= 5) && (sellr == 4139269.0));
          let acceptedk = 3.0;
          let googleH = String.fromCharCode(112,114,101,99,105,115,105,111,110,95,49,95,56,57,0);
          let uploadM = new Map([[String.fromCharCode(116,105,109,101,95,105,95,49,50,0),496], [String.fromCharCode(97,108,108,114,103,98,95,48,95,57,48,0),892], [String.fromCharCode(104,95,56,55,95,97,115,115,112,111,114,116,0),259]]);
         sportk = `${3 % (Math.max(8, parseInt(`${acceptedk}`)))}`;
         acceptedk += (parseFloat(`${String.fromCharCode(101,0) == googleH ? uploadM.size : googleH.length}`));
         uploadM[`${googleH}`] = googleH.length << (Math.min(1, Math.abs(uploadM.size)));
         sportk = `${termsj.length | parseInt(`${sellr}`)}`;
          let t_managerB = 1.0;
          let bodanp = String.fromCharCode(113,95,54,48,95,114,101,118,105,101,119,115,0);
         termsj = `${parseInt(`${regeng8}`) * 3}`;
         t_managerB += (String.fromCharCode(116,0) == bodanp ? bodanp.length : parseInt(`${t_managerB}`));
      if (parseInt(`${sellr}`) == termsj.length) {
         termsj = `${3 + termsj.length}`;
      }
      cornerb = `${2 | sportk.length}`;
      if (cornerb == String.fromCharCode(54,100,107,50,108,56,108,107,104,0)) {
         break;
      }
   } while ((backwardM != String.fromCharCode(100,0)) && (cornerb == String.fromCharCode(54,100,107,50,108,56,108,107,104,0)));

    props.onLiveEnd?.();
       let submitj = String.fromCharCode(116,95,56,48,95,117,110,118,111,116,101,0);
       let type_dvo = String.fromCharCode(119,105,116,110,101,115,115,95,107,95,54,54,0);
       let catagoryU = String.fromCharCode(119,95,56,55,95,116,104,114,111,116,116,108,101,0);
         type_dvo = "3";
         type_dvo += "1";
      mappingJ[bingz] = bingz.length;
      submitj += `${submitj.length}`;
      mbbidm = mappingJ.size <= bingz.length;
   if (backwardM.length >= 2) {
      backwardM = "2";
   }
   while (cnewinterstitialF.includes(`${mbbidm}`)) {
       let settingsv = [893, 257];
       let clear9 = String.fromCharCode(116,98,117,102,95,115,95,49,57,0);
       let nterstitialt = 5.0;
       let basketballl = String.fromCharCode(115,95,56,54,95,109,101,97,115,117,114,101,115,0);
       let constantsV = String.fromCharCode(120,95,52,49,95,112,114,101,102,101,114,115,0);
         clear9 = "3";
       let green2 = [550, 915, 99];
      if (5 < (parseInt(`${nterstitialt}`) + green2.length) || (parseFloat(`${green2.length}`) + nterstitialt) < 2.37) {
          let storew = String.fromCharCode(97,117,100,105,111,100,115,112,95,118,95,56,48,0);
          let minivodT = 4;
          let borderlessA = [221, 372, 594];
         nterstitialt -= parseFloat(`${green2.length}`);
         storew = `${minivodT}`;
         minivodT *= 2;
         borderlessA.push(2 & borderlessA.length);
      }
          let default_ju2 = 0;
          let thumbnailF = false;
          let verticalS = String.fromCharCode(107,95,51,51,95,112,116,114,109,97,112,115,0);
         green2 = [constantsV.length % (Math.max(9, clear9.length))];
         default_ju2 ^= 3;
         thumbnailF = verticalS.endsWith(`${thumbnailF}`);
         verticalS += `${verticalS.length & default_ju2}`;
         basketballl = "1";
      while ((2 + green2.length) > 1) {
          let chinasameS = 0.0;
          let main_zP = String.fromCharCode(117,116,118,105,100,101,111,95,48,95,54,56,0);
          let hookd = 1.0;
          let upgradeq = String.fromCharCode(114,95,50,52,0);
         constantsV += `${3 ^ basketballl.length}`;
         chinasameS *= parseFloat(`${1}`);
         main_zP = `${parseInt(`${hookd}`) << (Math.min(5, Math.abs(parseInt(`${chinasameS}`))))}`;
         hookd -= parseFloat(`${main_zP.length % (Math.max(2, 3))}`);
         upgradeq = `${parseInt(`${chinasameS}`)}`;
         break;
      }
      if (nterstitialt >= parseFloat(`${settingsv.length}`)) {
          let blacklist5 = false;
          let annerO = true;
          let package_8N = true;
          let disconnectedY = String.fromCharCode(101,120,112,111,110,101,110,116,95,50,95,49,48,48,0);
          let completeU = 3.0;
         nterstitialt += parseFloat(`${2}`);
         blacklist5 = !blacklist5;
         annerO = (60 <= ((blacklist5 ? disconnectedY.length : 60) * disconnectedY.length));
         package_8N = 2.39 <= completeU && blacklist5;
         completeU /= Math.max(2, (parseFloat(`${(package_8N ? 1 : 2) ^ (blacklist5 ? 3 : 3)}`)));
      }
         nterstitialt /= Math.max(parseFloat(`${green2.length & settingsv.length}`), 4);
      while (3.24 <= nterstitialt) {
          let typingw = true;
          let typesN = 2.0;
          let memberp = [799, 661];
          let homez = 4;
          let checkboxi = String.fromCharCode(97,95,54,50,95,121,111,117,0);
         basketballl = `${memberp.length | basketballl.length}`;
         typingw = checkboxi.length < typesN;
         typesN += ((typingw ? 1 : 3) & parseInt(`${typesN}`));
         memberp = [3];
         homez <<= Math.min(Math.abs(3), 3);
         checkboxi += "1";
         break;
      }
       let viewsN = 4;
       let sentryz = 3;
      if (nterstitialt > parseFloat(`${settingsv.length}`)) {
          let zhuboc = 0.0;
          let championy = new Map([[String.fromCharCode(118,95,49,57,95,103,114,97,121,97,0),true ], [String.fromCharCode(120,95,57,48,95,115,104,101,101,116,0),false ], [String.fromCharCode(102,95,51,49,95,99,104,111,109,112,0),false ]]);
          let clubw = new Map([[String.fromCharCode(97,108,112,110,95,122,95,51,55,0),String.fromCharCode(98,95,52,95,118,101,114,105,102,105,99,97,116,105,111,110,0)], [String.fromCharCode(99,111,99,103,95,106,95,54,52,0),String.fromCharCode(97,117,116,104,111,114,105,122,101,100,95,116,95,51,50,0)], [String.fromCharCode(116,117,110,110,101,108,95,56,95,53,52,0),String.fromCharCode(117,110,109,97,116,99,104,101,100,95,110,95,49,48,0)]]);
          let routerp = String.fromCharCode(114,95,49,52,0);
         settingsv = [(String.fromCharCode(90,0) == clear9 ? clear9.length : parseInt(`${nterstitialt}`))];
         zhuboc /= Math.max(2, parseFloat(`${2}`));
         championy = new Map([[`${championy.size}`, parseInt(`${zhuboc}`) / 3]]);
         clubw = new Map([[`${clubw.size}`, clubw.size]]);
         routerp += `${parseInt(`${zhuboc}`) % 2}`;
      }
      for (let n = 0; n < 3; n++) {
         nterstitialt -= parseFloat(`${constantsV.length}`);
      }
      do {
          let g_images = 1.0;
          let progress_ = String.fromCharCode(115,105,116,101,109,97,112,95,119,95,52,56,0);
         green2.push((constantsV == String.fromCharCode(74,0) ? basketballl.length : constantsV.length));
         g_images += parseInt(`${g_images}`);
         progress_ += `${parseInt(`${g_images}`)}`;
         if (1788702 == green2.length) {
            break;
         }
      } while ((1788702 == green2.length) && (!settingsv.includes(green2.length)));
      do {
          let slidera = 3.0;
          let goal1 = 1.0;
          let policyM = true;
         sentryz |= 3;
         slidera -= (parseFloat(`${(policyM ? 4 : 3) | parseInt(`${goal1}`)}`));
         goal1 /= Math.max((parseFloat(`${parseInt(`${slidera}`) * (policyM ? 1 : 5)}`)), 2);
         if (sentryz == 996429) {
            break;
         }
      } while ((sentryz >= nterstitialt) && (sentryz == 996429));
      while (1 >= (2 * clear9.length)) {
         clear9 += `${constantsV.length}`;
         break;
      }
      mbbidm = mappingJ.size > 99;
      break;
   }
       let leftY = false;
       let control4 = 2.0;
       let reactnativejsP = 4.0;
      if (4.50 <= control4) {
         reactnativejsP -= parseFloat(`${2 | parseInt(`${control4}`)}`);
      }
      if ((2.41 + reactnativejsP) == 4.94 && !leftY) {
         reactnativejsP *= parseFloat(`${3 << (Math.min(Math.abs(parseInt(`${control4}`)), 2))}`);
      }
         leftY = !leftY;
         control4 *= parseInt(`${reactnativejsP}`) - parseInt(`${control4}`);
       let storel = true;
       let friendsM = true;
          let favoriteR = true;
          let productV = 1.0;
         leftY = (!favoriteR ? friendsM : favoriteR);
         productV /= Math.max(parseFloat(`${parseInt(`${productV}`) << (Math.min(Math.abs(parseInt(`${productV}`)), 5))}`), 4);
      if (!friendsM) {
         friendsM = (friendsM ? storel : friendsM);
      }
      if (storel || (5.14 + reactnativejsP) == 1.93) {
         storel = control4 == 27.37;
      }
         leftY = (!leftY ? friendsM : leftY);
      mappingJ[`${control4}`] = parseInt(`${control4}`);
      leagueF = `${(String.fromCharCode(100,0) == backwardM ? backwardM.length : mappingJ.size)}`;

  };

  const onFullscreenPlayerDidDismiss = () => {
       let backF = new Map([[String.fromCharCode(102,95,55,49,95,108,105,109,105,116,0),87], [String.fromCharCode(121,95,57,49,95,98,105,116,115,116,114,0),338], [String.fromCharCode(99,108,111,115,101,95,102,95,50,55,0),41]]);
    let paginationB = new Map([[String.fromCharCode(99,95,50,51,95,115,104,105,109,115,0),String.fromCharCode(112,111,112,111,118,101,114,95,106,95,51,52,0)], [String.fromCharCode(97,110,103,108,101,95,107,95,51,52,0),String.fromCharCode(114,95,55,49,95,99,111,100,101,99,99,116,108,0)], [String.fromCharCode(103,95,56,54,95,114,101,99,121,99,108,101,0),String.fromCharCode(109,105,110,105,109,97,108,95,109,95,51,57,0)]]);
    let logoW = true;
    let editX = 3.0;
    let crown3 = 2.0;
    let register_jtD = [String.fromCharCode(105,110,116,114,105,110,115,105,99,95,105,95,55,57,0), String.fromCharCode(117,95,51,48,95,101,113,117,97,108,115,0), String.fromCharCode(119,95,49,48,48,95,98,97,100,114,101,113,0)];
    let detailr = String.fromCharCode(100,101,112,97,114,116,109,101,110,116,95,97,95,51,55,0);
    let backw = 3;
    let changeX = 0.0;
    let gesturesf = String.fromCharCode(108,111,99,97,116,105,111,110,115,95,56,95,55,51,0);
    let modalm = [936, 663];
    let minivodP = String.fromCharCode(116,95,51,54,95,100,101,110,115,101,0);
   if ((2 - backF.size) < 5 && logoW) {
       let privilegeM = String.fromCharCode(115,117,98,99,101,108,95,107,95,57,48,0);
      while (privilegeM.endsWith(`${privilegeM.length}`)) {
         privilegeM += "3";
         break;
      }
      while (privilegeM.startsWith(`${privilegeM.length}`)) {
         privilegeM = "2";
         break;
      }
      for (let g = 0; g < 3; g++) {
          let huawei4 = new Map([[String.fromCharCode(114,101,99,111,109,98,105,110,101,95,98,95,52,54,0),73], [String.fromCharCode(120,95,55,50,95,116,111,111,108,0),828]]);
          let mappingO = 0.0;
          let filledD = true;
          let crownR = String.fromCharCode(119,95,50,95,107,105,110,100,115,0);
         privilegeM += `${parseInt(`${mappingO}`) ^ 2}`;
         huawei4[`${filledD}`] = crownR.length + 1;
         mappingO -= parseFloat(`${3 ^ huawei4.size}`);
         crownR = `${((filledD ? 5 : 4) / (Math.max(huawei4.size, 7)))}`;
      }
      backF[`${changeX}`] = parseInt(`${changeX}`) << (Math.min(register_jtD.length, 5));
   }
   while (paginationB[`${editX}`] == null) {
       let adultC = new Map([[String.fromCharCode(105,110,118,101,114,116,95,53,95,54,49,0),344], [String.fromCharCode(113,95,54,54,95,115,99,105,101,110,116,105,102,105,99,0),697]]);
       let carouselL = String.fromCharCode(108,95,53,50,95,109,112,101,103,118,105,100,101,111,100,97,116,97,0);
       let trophyJ = String.fromCharCode(99,111,108,111,110,115,95,111,95,54,57,0);
       let statsH = 0.0;
       let changeu = String.fromCharCode(112,108,117,114,97,108,105,122,97,116,105,111,110,95,56,95,57,49,0);
         statsH += parseFloat(`${parseInt(`${statsH}`) << (Math.min(Math.abs(adultC.size), 5))}`);
      do {
          let verticalp = String.fromCharCode(105,110,116,114,101,97,100,119,114,105,116,101,95,108,95,56,50,0);
          let shirtc = new Map([[String.fromCharCode(119,95,56,55,95,110,101,116,101,113,0),94], [String.fromCharCode(97,95,51,53,95,97,103,101,0),611], [String.fromCharCode(115,121,110,116,97,120,95,101,95,52,49,0),689]]);
          let corek = String.fromCharCode(105,95,49,54,95,114,101,118,105,111,117,115,0);
          let sell_ = 5.0;
          let tickeda = 2.0;
         adultC = new Map([[`${shirtc.size}`, shirtc.size + 1]]);
         verticalp = `${parseInt(`${tickeda}`)}`;
         corek = "1";
         sell_ -= parseFloat(`${2 << (Math.min(5, Math.abs(parseInt(`${sell_}`))))}`);
         if (adultC.size == 1817173) {
            break;
         }
      } while ((2 == adultC.size) && (adultC.size == 1817173));
      do {
         trophyJ = `${trophyJ.length * 3}`;
         if (String.fromCharCode(95,54,111,102,120,118,115,103,56,0) == trophyJ) {
            break;
         }
      } while ((String.fromCharCode(95,54,111,102,120,118,115,103,56,0) == trophyJ) && (trophyJ.includes(`${adultC.size}`)));
         adultC = new Map([[`${statsH}`, 2 ^ parseInt(`${statsH}`)]]);
      do {
         adultC[changeu] = (String.fromCharCode(65,0) == changeu ? changeu.length : parseInt(`${statsH}`));
         if (adultC.size == 4054285) {
            break;
         }
      } while (((trophyJ.length | 2) > 2) && (adultC.size == 4054285));
      for (let h = 0; h < 2; h++) {
         adultC = new Map([[`${adultC.size}`, changeu.length + adultC.size]]);
      }
      if (3 == (changeu.length * adultC.size) && (adultC.size * changeu.length) == 3) {
          let manifestX = [String.fromCharCode(103,114,97,110,116,95,122,95,50,57,0), String.fromCharCode(111,95,50,95,115,116,114,105,115,116,97,114,116,0), String.fromCharCode(113,95,49,57,95,99,108,111,115,101,99,98,0)];
          let mbbannerJ = 5.0;
          let show2 = String.fromCharCode(116,95,57,49,95,119,105,110,100,111,119,105,110,103,0);
          let annerA = String.fromCharCode(104,97,114,100,116,104,114,101,115,104,95,115,95,54,0);
         adultC = new Map([[`${adultC.size}`, annerA.length % 2]]);
         manifestX.push(parseInt(`${mbbannerJ}`) >> (Math.min(Math.abs(3), 1)));
         mbbannerJ /= Math.max(parseFloat(`${parseInt(`${mbbannerJ}`)}`), 4);
         show2 = `${show2.length}`;
         annerA = "3";
      }
      for (let m = 0; m < 2; m++) {
         changeu += "3";
      }
      for (let a = 0; a < 3; a++) {
          let backgroundp = [328, 152, 912];
          let groupZ = String.fromCharCode(97,95,51,52,95,115,116,115,115,0);
         statsH *= parseFloat(`${1}`);
         backgroundp = [groupZ.length - 1];
         groupZ += `${(groupZ == String.fromCharCode(100,0) ? backgroundp.length : groupZ.length)}`;
      }
      while (3.9 == (statsH / (Math.max(parseFloat(`${carouselL.length}`), 5))) || (statsH / 3.9) == 3.44) {
         statsH += parseFloat(`${changeu.length >> (Math.min(2, trophyJ.length))}`);
         break;
      }
         carouselL += `${adultC.size / (Math.max(carouselL.length, 2))}`;
       let episodesv = String.fromCharCode(109,95,54,57,95,99,104,97,114,109,97,112,0);
       let darkz = String.fromCharCode(115,95,55,51,95,109,98,109,111,100,101,0);
         episodesv = `${(changeu == String.fromCharCode(121,0) ? changeu.length : parseInt(`${statsH}`))}`;
      while (carouselL != trophyJ) {
         trophyJ = `${trophyJ.length}`;
         break;
      }
          let register__f = 5.0;
         episodesv = `${adultC.size}`;
         register__f -= 3;
      editX += paginationB.size;
      break;
   }
      backF[`${backw}`] = 2 | backF.size;
   do {
      logoW = !logoW;
      if (logoW ? !logoW : logoW) {
         break;
      }
   } while ((logoW ? !logoW : logoW) && (register_jtD.length >= 3 && (register_jtD.length * 3) >= 1));
       let page9 = String.fromCharCode(120,95,51,55,95,116,105,109,101,99,111,100,101,0);
       let reducert = 4;
      for (let o = 0; o < 2; o++) {
         page9 += `${reducert}`;
      }
         page9 = `${page9.length / 1}`;
      do {
          let flipperX = 5;
          let sliderm = 4.0;
          let benefitl = 4;
         page9 += `${3 + page9.length}`;
         flipperX -= parseInt(`${sliderm}`);
         sliderm *= parseFloat(`${3 + benefitl}`);
         benefitl -= parseInt(`${sliderm}`);
         if (page9 == String.fromCharCode(116,54,106,118,122,0)) {
            break;
         }
      } while ((page9 == String.fromCharCode(116,54,106,118,122,0)) && ((reducert / (Math.max(page9.length, 6))) <= 1 && (reducert / (Math.max(6, page9.length))) <= 1));
      do {
         reducert |= page9.length & 2;
         if (reducert == 4449754) {
            break;
         }
      } while (((1 >> (Math.min(4, Math.abs(reducert)))) < 3 && (page9.length >> (Math.min(2, Math.abs(reducert)))) < 1) && (reducert == 4449754));
       let gradlec = String.fromCharCode(97,95,53,49,95,112,107,103,99,111,110,102,105,103,0);
          let share7 = new Map([[String.fromCharCode(106,95,53,53,95,119,101,98,115,0),531], [String.fromCharCode(102,95,57,51,95,115,112,108,105,116,116,101,114,0),909]]);
          let expandl = [687, 136, 946];
          let windq = 0.0;
         reducert *= parseInt(`${windq}`) << (Math.min(Math.abs(2), 5));
         share7[`${expandl.length}`] = 3;
         expandl = [share7.size / (Math.max(expandl.length, 3))];
         windq *= 3 >> (Math.min(1, Math.abs(share7.size)));
      detailr += `${((logoW ? 4 : 2))}`;
   for (let y = 0; y < 1; y++) {
       let crossQ = String.fromCharCode(100,95,50,54,95,114,101,111,114,100,101,114,97,98,108,101,0);
       let settingsi = 3;
      while (crossQ.length == 4) {
          let rewind3 = String.fromCharCode(114,95,56,54,95,112,114,101,102,101,116,99,104,105,110,103,0);
          let empty7 = true;
          let filedF = String.fromCharCode(99,121,99,108,101,100,95,52,95,49,48,0);
          let unselectedy = [124, 267];
          let launcherr = String.fromCharCode(99,95,55,57,95,102,108,117,115,104,0);
         settingsi &= settingsi;
         rewind3 = "1";
         empty7 = !empty7;
         filedF += `${1 & filedF.length}`;
         unselectedy.push(3 << (Math.min(3, launcherr.length)));
         launcherr = `${launcherr.length}`;
         break;
      }
         crossQ = `${crossQ.length - 2}`;
      while (settingsi >= crossQ.length) {
         settingsi *= settingsi ^ 3;
         break;
      }
         crossQ += `${crossQ.length}`;
      for (let e = 0; e < 1; e++) {
          let dialogj = 1;
          let green0 = String.fromCharCode(113,117,97,100,114,97,116,105,99,95,105,95,49,54,0);
         crossQ += `${settingsi}`;
         dialogj *= 3;
         green0 += `${green0.length % (Math.max(6, dialogj))}`;
      }
      for (let e = 0; e < 2; e++) {
          let dropdownq = 0;
         crossQ = "3";
         dropdownq += dropdownq;
      }
      detailr += `${register_jtD.length}`;
   }
       let splashm = String.fromCharCode(107,95,55,53,95,105,100,101,110,116,0);
       let score1 = 0.0;
       let singleM = 1.0;
      while ((3.20 / (Math.max(1, singleM))) >= 4.87 || (3.20 / (Math.max(5, singleM))) >= 3.7) {
         score1 += 2 ^ parseInt(`${score1}`);
         break;
      }
         score1 /= Math.max(splashm.length, 3);
       let gmaily = 1;
      for (let s = 0; s < 3; s++) {
         singleM *= parseInt(`${score1}`);
      }
      if (3 <= (splashm.length % (Math.max(1, 6)))) {
         score1 += gmaily;
      }
         score1 -= parseInt(`${singleM}`);
      while (5.87 > (score1 - splashm.length)) {
         splashm = `${parseInt(`${singleM}`)}`;
         break;
      }
         splashm = `${1 * parseInt(`${singleM}`)}`;
      for (let q = 0; q < 1; q++) {
         score1 /= Math.max(2, 2 ^ splashm.length);
      }
      detailr = "2";
      changeX /= Math.max(5, 3);
      logoW = (register_jtD.length | backF.size) == 14;
      detailr = `${3 ^ register_jtD.length}`;
      detailr += "1";
   if (parseInt(`${changeX}`) == register_jtD.length) {
      register_jtD.push(1);
   }
      paginationB[`${changeX}`] = parseInt(`${changeX}`) << (Math.min(2, Math.abs(3)));
      backw &= 2 + gesturesf.length;
      gesturesf += `${backF.size}`;

    dispatch(togglePlayPaused());
   do {
      detailr += "3";
      if (94097 == detailr.length) {
         break;
      }
   } while ((gesturesf.startsWith(detailr)) && (94097 == detailr.length));
      gesturesf += `${backw + gesturesf.length}`;
   do {
      register_jtD.push(parseInt(`${crown3}`) - backw);
      if (3165541 == register_jtD.length) {
         break;
      }
   } while (((3 >> (Math.min(1, Math.abs(backF.size)))) == 2 && 5 == (3 >> (Math.min(1, register_jtD.length)))) && (3165541 == register_jtD.length));
      editX += parseInt(`${changeX}`);
       let description_wxA = false;
       let mappingz = 2.0;
       let downloaderC = String.fromCharCode(121,111,117,95,109,95,49,51,0);
      do {
         description_wxA = !description_wxA;
         if (description_wxA ? !description_wxA : description_wxA) {
            break;
         }
      } while ((description_wxA ? !description_wxA : description_wxA) && (mappingz <= 1.1));
         description_wxA = downloaderC.length <= 58 || description_wxA;
          let gifta = 5;
          let upgrade6 = 4;
         mappingz -= ((description_wxA ? 5 : 5) % (Math.max(parseInt(`${mappingz}`), 9)));
         gifta |= upgrade6 ^ 2;
         upgrade6 &= 1;
         description_wxA = !downloaderC.includes(`${description_wxA}`);
         mappingz += downloaderC.length + parseInt(`${mappingz}`);
      do {
          let bridgeA = new Map([[String.fromCharCode(120,99,104,97,99,104,97,95,112,95,51,50,0),871], [String.fromCharCode(106,95,53,53,95,97,110,116,105,99,111,108,108,97,112,115,101,0),31], [String.fromCharCode(102,95,57,53,95,108,111,116,116,105,101,107,101,121,112,97,116,104,0),681]]);
          let become5 = 1.0;
         description_wxA = (become5 / (Math.max(9, parseFloat(`${bridgeA.size}`)))) < 76.24;
         if (description_wxA ? !description_wxA : description_wxA) {
            break;
         }
      } while ((description_wxA ? !description_wxA : description_wxA) && (!description_wxA));
      while (mappingz <= 2.61) {
         mappingz *= ((description_wxA ? 5 : 2) & parseInt(`${mappingz}`));
         break;
      }
       let untickb = new Map([[String.fromCharCode(115,97,116,117,114,97,116,105,111,110,95,120,95,51,49,0),424], [String.fromCharCode(117,116,109,111,115,116,95,107,95,51,56,0),281], [String.fromCharCode(98,95,49,49,95,115,109,105,109,101,0),237]]);
      do {
          let submitI = String.fromCharCode(100,113,99,111,101,102,102,95,113,95,52,56,0);
          let confirmation6 = String.fromCharCode(119,114,105,116,101,111,117,116,95,120,95,51,51,0);
          let slidern = 3.0;
          let langf = 3;
         untickb[downloaderC] = 3;
         submitI = `${(submitI == String.fromCharCode(80,0) ? submitI.length : confirmation6.length)}`;
         confirmation6 = `${confirmation6.length}`;
         slidern += parseFloat(`${confirmation6.length / (Math.max(8, langf))}`);
         langf >>= Math.min(Math.abs(1 & submitI.length), 3);
         if (3887774 == untickb.size) {
            break;
         }
      } while ((3887774 == untickb.size) && (downloaderC.includes(`${untickb.size}`)));
      paginationB[gesturesf] = 3;
      changeX -= 3;
      editX -= ((logoW ? 4 : 3) & 3);
      backF = new Map([[`${logoW}`, detailr.length]]);
      backF[detailr] = 3 / (Math.max(3, detailr.length));
       let checkboxN = false;
       let calendarv = [699, 318];
      if ((calendarv.length | 4) >= 4) {
         checkboxN = calendarv.length == 57 || checkboxN;
      }
      while (1 < calendarv.length) {
         checkboxN = calendarv.length >= 28;
         break;
      }
         calendarv = [calendarv.length];
         checkboxN = (((!checkboxN ? calendarv.length : 88) - calendarv.length) < 88);
      if (checkboxN || 2 == (calendarv.length + 3)) {
         checkboxN = ((calendarv.length << (Math.min(3, Math.abs((!checkboxN ? 27 : calendarv.length))))) > 27);
      }
         calendarv.push(1);
      editX /= Math.max(3, 2);
       let notificationT = false;
       let ajaxJ = String.fromCharCode(97,99,99,95,54,95,52,51,0);
       let traminib = 3.0;
         traminib += ((notificationT ? 3 : 5) % (Math.max(ajaxJ.length, 5)));
         notificationT = ajaxJ.length <= 57;
      while (!ajaxJ.startsWith(`${traminib}`)) {
         ajaxJ += `${ajaxJ.length ^ 3}`;
         break;
      }
      if (ajaxJ.length <= 1 && !notificationT) {
         notificationT = parseInt(`${traminib}`) > ajaxJ.length;
      }
       let anythinkN = String.fromCharCode(97,114,116,105,99,108,101,95,112,95,54,55,0);
       let bufferY = String.fromCharCode(108,95,49,57,95,115,116,114,99,109,112,0);
      for (let u = 0; u < 2; u++) {
         notificationT = !notificationT;
      }
          let yellowo = String.fromCharCode(111,105,100,95,112,95,49,57,0);
          let suggestionQ = 0.0;
          let iconJ = false;
         ajaxJ += `${ajaxJ.length - 3}`;
         yellowo += `${yellowo.length}`;
         suggestionQ *= (parseFloat(`${parseInt(`${suggestionQ}`) - (iconJ ? 3 : 1)}`));
         iconJ = (99 < (yellowo.length >> (Math.min(3, Math.abs((iconJ ? 99 : yellowo.length))))));
          let e_imageF = new Map([[String.fromCharCode(112,95,50,95,97,108,116,101,114,110,97,116,105,111,110,0),String.fromCharCode(105,108,111,103,95,121,95,55,54,0)], [String.fromCharCode(110,105,98,95,122,95,53,0),String.fromCharCode(100,110,115,108,97,98,101,108,95,99,95,51,50,0)]]);
          let complete9 = new Map([[String.fromCharCode(101,110,103,105,110,101,115,95,111,95,55,0),String.fromCharCode(105,110,116,108,105,115,116,95,103,95,54,48,0)], [String.fromCharCode(109,111,118,101,110,99,99,101,110,99,95,57,95,54,51,0),String.fromCharCode(118,95,51,48,95,105,110,118,105,116,101,115,0)]]);
          let shirtg = new Map([[String.fromCharCode(110,95,52,54,95,102,105,108,116,101,114,117,118,0),String.fromCharCode(103,95,51,57,0)], [String.fromCharCode(105,95,56,95,101,116,104,101,114,115,99,97,110,0),String.fromCharCode(105,110,115,101,114,116,115,95,97,95,50,50,0)], [String.fromCharCode(101,95,56,48,95,112,111,114,116,114,97,105,116,0),String.fromCharCode(112,95,54,55,95,119,97,116,99,104,101,114,0)]]);
         ajaxJ = `${bufferY.length}`;
         e_imageF[`${complete9.size}`] = shirtg.size - 2;
         complete9[`${complete9.size}`] = e_imageF.size - 1;
         shirtg = new Map([[`${shirtg.size}`, shirtg.size - complete9.size]]);
       let debugW = 1;
      editX += gesturesf.length;
   if (1.24 <= (4.70 + crown3) && 1 <= (1 / (Math.max(5, backw)))) {
      crown3 -= gesturesf.length;
   }
      editX *= register_jtD.length % 3;
      changeX /= Math.max(3, 2);
   while (4 < (register_jtD.length / (Math.max(3, 3))) || 4 < (register_jtD.length % 3)) {
       let becomeE = new Map([[String.fromCharCode(117,95,57,95,112,111,115,116,102,105,120,0),String.fromCharCode(97,95,52,49,95,99,117,98,105,99,0)], [String.fromCharCode(119,95,54,51,95,105,110,105,116,115,109,111,116,105,111,110,0),String.fromCharCode(118,101,114,105,102,105,97,98,108,101,95,50,95,57,53,0)]]);
       let componentx = String.fromCharCode(112,103,105,100,120,95,120,95,53,55,0);
       let steps = String.fromCharCode(100,105,115,97,98,108,101,115,95,122,95,53,0);
       let umengo = String.fromCharCode(110,95,53,95,112,97,116,104,115,0);
       let skipI = new Map([[String.fromCharCode(109,97,115,107,113,95,119,95,57,48,0),254], [String.fromCharCode(112,114,101,108,111,97,100,95,116,95,49,48,0),105]]);
          let spinnerG = String.fromCharCode(104,97,108,102,102,108,111,97,116,95,106,95,49,48,0);
         componentx = "3";
         spinnerG = "3";
          let foregroundq = String.fromCharCode(116,95,48,95,99,111,114,114,101,108,97,116,105,111,110,0);
         steps += `${becomeE.size}`;
         foregroundq = "2";
       let tempf = String.fromCharCode(109,95,50,54,95,115,104,105,102,116,0);
         skipI = new Map([[`${becomeE.size}`, 2 - tempf.length]]);
         skipI = new Map([[umengo, 1]]);
          let nativeexK = 5;
          let regengK = 3;
         steps = `${1 | nativeexK}`;
         nativeexK &= 2 << (Math.min(2, Math.abs(regengK)));
         regengK >>= Math.min(Math.abs(1), 3);
          let dnewsw = new Map([[String.fromCharCode(120,109,117,108,95,108,95,56,57,0),129], [String.fromCharCode(116,114,101,108,108,105,115,95,54,95,55,52,0),641], [String.fromCharCode(115,98,119,97,105,116,95,120,95,52,55,0),941]]);
         umengo = `${componentx.length & 2}`;
         dnewsw[`${dnewsw.size}`] = dnewsw.size + dnewsw.size;
          let detail1 = [433, 403];
          let sigmobO = [775, 971];
         becomeE = new Map([[`${detail1.length}`, 3 % (Math.max(10, sigmobO.length))]]);
      if (umengo.length > skipI.size) {
         skipI[tempf] = 2;
      }
       let applicationO = String.fromCharCode(103,101,110,101,114,97,116,101,95,48,95,52,57,0);
       let favoriteW = String.fromCharCode(99,95,56,50,95,100,105,114,97,99,116,97,98,0);
          let minivodr = false;
         tempf += `${componentx.length - steps.length}`;
         minivodr = (minivodr ? minivodr : !minivodr);
          let vietnamj = String.fromCharCode(104,95,57,57,95,116,114,97,105,110,0);
          let sidey = new Map([[String.fromCharCode(115,112,105,110,108,111,99,107,95,101,95,51,0),true ], [String.fromCharCode(97,110,103,114,121,95,118,95,51,49,0),true ]]);
         skipI = new Map([[umengo, (String.fromCharCode(79,0) == steps ? umengo.length : steps.length)]]);
         vietnamj = `${(vietnamj == String.fromCharCode(71,0) ? sidey.size : vietnamj.length)}`;
         sidey[vietnamj] = vietnamj.length;
      do {
         componentx = `${2 & steps.length}`;
         if (componentx == String.fromCharCode(117,102,108,97,102,114,110,0)) {
            break;
         }
      } while ((componentx == String.fromCharCode(117,102,108,97,102,114,110,0)) && (steps == String.fromCharCode(52,0)));
         tempf = `${(String.fromCharCode(100,0) == umengo ? umengo.length : skipI.size)}`;
       let rewardvideo4 = [906, 115, 813];
       let watchr = [762, 255];
      register_jtD = [2];
      break;
   }

  };

  const onRetry = () => {
       let hongkong_ = new Map([[String.fromCharCode(108,95,57,53,95,104,97,114,100,101,110,101,100,0),String.fromCharCode(111,98,109,99,95,111,95,52,50,0)], [String.fromCharCode(119,95,57,52,95,112,114,105,118,0),String.fromCharCode(115,113,108,105,116,101,115,101,115,115,105,111,110,95,117,95,50,53,0)], [String.fromCharCode(114,95,53,57,95,99,111,110,110,105,110,112,117,116,0),String.fromCharCode(115,108,111,119,109,111,100,101,95,117,95,54,51,0)]]);
    let playercommon4 = 0.0;
    let xvodT = String.fromCharCode(104,95,50,54,95,103,114,97,112,104,105,99,0);
    let clockJ = new Map([[String.fromCharCode(100,95,54,95,100,117,114,98,0),true ], [String.fromCharCode(109,105,103,114,97,116,101,100,95,53,95,55,0),false ]]);
    let telegram2 = String.fromCharCode(98,114,101,97,100,95,122,95,49,50,0);
    let stylese = String.fromCharCode(118,95,56,52,95,114,101,99,97,108,99,117,108,97,116,105,111,110,0);
    let unreadf = String.fromCharCode(122,95,54,50,95,105,109,112,117,108,115,101,0);
    let downloaderu = new Map([[String.fromCharCode(115,117,98,115,101,103,109,101,110,116,95,106,95,52,50,0),String.fromCharCode(121,95,57,57,95,108,97,98,101,108,110,115,0)], [String.fromCharCode(106,95,52,54,95,97,108,108,111,119,105,0),String.fromCharCode(111,95,50,53,95,109,115,115,100,115,112,0)]]);
    let pauseP = true;
    let episodeU = 0.0;
    let countdown9 = 2.0;
    let inactive3 = 0.0;
    let edita = String.fromCharCode(100,95,55,51,95,115,101,112,105,97,0);
   for (let n = 0; n < 1; n++) {
      inactive3 += 3 & parseInt(`${playercommon4}`);
   }
      unreadf = "3";
   if (5 < downloaderu.size) {
       let hejiq = new Map([[String.fromCharCode(109,95,52,49,95,115,110,97,112,112,121,0),String.fromCharCode(109,117,108,104,105,95,122,95,50,0)], [String.fromCharCode(102,95,56,50,95,97,99,97,108,99,0),String.fromCharCode(118,105,100,101,111,116,111,111,108,98,111,120,95,105,95,51,54,0)], [String.fromCharCode(112,117,98,108,105,99,107,101,121,115,95,54,95,52,55,0),String.fromCharCode(107,95,51,55,95,110,97,109,101,100,0)]]);
       let humidityu = new Map([[String.fromCharCode(117,110,114,101,108,105,97,98,108,101,95,53,95,51,52,0),746], [String.fromCharCode(101,114,97,115,101,100,95,110,95,56,50,0),784], [String.fromCharCode(103,95,54,49,95,114,101,115,112,101,99,116,105,110,103,0),174]]);
       let h_title3 = true;
      for (let g = 0; g < 2; g++) {
         h_title3 = 63 >= humidityu.size;
      }
         humidityu[`${h_title3}`] = 3 ^ humidityu.size;
      for (let s = 0; s < 3; s++) {
          let currentX = String.fromCharCode(97,100,106,117,115,116,95,57,95,48,0);
          let statisticsk = new Map([[String.fromCharCode(108,97,100,100,101,114,115,116,101,112,95,111,95,49,51,0),903], [String.fromCharCode(112,95,54,52,95,115,116,100,0),550]]);
          let hoverp = String.fromCharCode(115,111,108,118,101,114,95,48,95,53,51,0);
         humidityu[hoverp] = (String.fromCharCode(51,0) == hoverp ? (h_title3 ? 5 : 5) : hoverp.length);
         currentX = `${statisticsk.size}`;
         statisticsk = new Map([[`${statisticsk.size}`, (String.fromCharCode(108,0) == currentX ? statisticsk.size : currentX.length)]]);
      }
      do {
         hejiq[`${h_title3}`] = (hejiq.size - (h_title3 ? 5 : 3));
         if (hejiq.size == 2661614) {
            break;
         }
      } while (((3 / (Math.max(5, hejiq.size))) >= 5 || (3 / (Math.max(9, hejiq.size))) >= 1) && (hejiq.size == 2661614));
         humidityu[`${h_title3}`] = hejiq.size;
       let sentrys = String.fromCharCode(103,95,55,52,95,98,111,120,98,108,117,114,0);
       let p_center4 = String.fromCharCode(115,116,116,115,95,56,95,57,57,0);
      while ((humidityu.size >> (Math.min(3, Math.abs(hejiq.size)))) > 4 || (4 >> (Math.min(3, Math.abs(hejiq.size)))) > 1) {
          let adultA = 1.0;
          let main_kZ = String.fromCharCode(99,109,111,118,95,104,95,56,51,0);
          let unselectedA = [String.fromCharCode(101,95,55,50,0), String.fromCharCode(100,97,117,98,101,99,104,105,101,115,95,116,95,56,54,0), String.fromCharCode(99,97,108,105,110,103,95,99,95,52,57,0)];
         humidityu[`${adultA}`] = 3 % (Math.max(7, unselectedA.length));
         adultA += main_kZ.length * 3;
         main_kZ = `${main_kZ.length % (Math.max(2, 10))}`;
         break;
      }
      while ((sentrys.length >> (Math.min(3, Math.abs(hejiq.size)))) >= 2 && 2 >= (sentrys.length >> (Math.min(1, Math.abs(hejiq.size))))) {
         sentrys += "3";
         break;
      }
         humidityu[`${hejiq.size}`] = 1 & hejiq.size;
      downloaderu = new Map([[`${episodeU}`, 2 + parseInt(`${episodeU}`)]]);
   }
   do {
       let langkeyG = String.fromCharCode(99,97,109,112,97,105,103,110,95,109,95,52,50,0);
       let backp = 1.0;
       let friendsM = 2.0;
       let sheetO = false;
       let reactnativejsd = 4;
      do {
         reactnativejsd >>= Math.min(Math.abs(parseInt(`${friendsM}`) - 2), 4);
         if (1589896 == reactnativejsd) {
            break;
         }
      } while ((1589896 == reactnativejsd) && (1.87 <= (5.81 - friendsM) || (friendsM - parseFloat(`${reactnativejsd}`)) <= 5.81));
         reactnativejsd -= reactnativejsd << (Math.min(Math.abs(3), 2));
         friendsM += parseFloat(`${langkeyG.length}`);
         reactnativejsd >>= Math.min(Math.abs(3 / (Math.max(5, parseInt(`${backp}`)))), 3);
      do {
          let clock9 = String.fromCharCode(115,95,54,52,95,109,118,104,100,0);
          let philippinesF = true;
         sheetO = parseInt(`${friendsM}`) == langkeyG.length;
         clock9 = `${((philippinesF ? 5 : 5) ^ clock9.length)}`;
         philippinesF = clock9.startsWith(`${philippinesF}`);
         if (sheetO ? !sheetO : sheetO) {
            break;
         }
      } while ((sheetO ? !sheetO : sheetO) && ((reactnativejsd << (Math.min(Math.abs(5), 2))) == 1 && reactnativejsd == 5));
      do {
          let zoomO = String.fromCharCode(114,102,99,116,95,110,95,53,55,0);
          let downloadW = new Map([[String.fromCharCode(101,95,49,50,95,98,97,107,101,0),true ], [String.fromCharCode(98,111,120,101,115,95,49,95,52,50,0),false ]]);
          let const_y1 = 5.0;
         reactnativejsd |= parseInt(`${const_y1}`);
         zoomO += `${zoomO.length << (Math.min(1, Math.abs(downloadW.size)))}`;
         downloadW = new Map([[`${downloadW.size}`, downloadW.size]]);
         const_y1 *= parseFloat(`${1 * downloadW.size}`);
         if (1008622 == reactnativejsd) {
            break;
         }
      } while ((1008622 == reactnativejsd) && (2.91 <= (reactnativejsd * backp)));
       let package_vg = [15, 312, 424];
          let colorsl = 0.0;
         langkeyG += `${package_vg.length & reactnativejsd}`;
         colorsl += parseInt(`${colorsl}`) << (Math.min(1, Math.abs(1)));
      while (langkeyG.endsWith(`${package_vg.length}`)) {
         langkeyG += `${((sheetO ? 5 : 5) / (Math.max(6, parseInt(`${backp}`))))}`;
         break;
      }
         sheetO = 37 > reactnativejsd;
      while (!langkeyG.includes(`${backp}`)) {
         backp += parseFloat(`${langkeyG.length | parseInt(`${backp}`)}`);
         break;
      }
      for (let h = 0; h < 3; h++) {
         reactnativejsd <<= Math.min(Math.abs(((sheetO ? 4 : 1) * parseInt(`${backp}`))), 1);
      }
      do {
          let untickw = String.fromCharCode(102,95,55,57,95,104,116,108,116,0);
          let hejiX = 2.0;
         langkeyG = `${3 >> (Math.min(Math.abs(parseInt(`${hejiX}`)), 4))}`;
         untickw += `${untickw.length % (Math.max(2, 4))}`;
         hejiX /= Math.max(2, 5);
         if (langkeyG.length == 1422099) {
            break;
         }
      } while ((4.36 == backp) && (langkeyG.length == 1422099));
      do {
         reactnativejsd += reactnativejsd + 3;
         if (1558825 == reactnativejsd) {
            break;
         }
      } while ((1 > (langkeyG.length + reactnativejsd) || (reactnativejsd + langkeyG.length) > 1) && (1558825 == reactnativejsd));
         reactnativejsd ^= parseInt(`${backp}`);
      pauseP = 79 == telegram2.length;
      if (pauseP ? !pauseP : pauseP) {
         break;
      }
   } while ((pauseP ? !pauseP : pauseP) && (telegram2.includes(`${pauseP}`)));
      stylese += `${parseInt(`${episodeU}`)}`;
   do {
      hongkong_[stylese] = 1 ^ parseInt(`${countdown9}`);
      if (hongkong_.size == 178814) {
         break;
      }
   } while ((hongkong_.size == 178814) && ((stylese.length + 1) == 2 || (1 + stylese.length) == 5));
      hongkong_[xvodT] = parseInt(`${inactive3}`);
   do {
      unreadf += "1";
      if (unreadf == String.fromCharCode(120,57,115,56,56,0)) {
         break;
      }
   } while (((unreadf.length >> (Math.min(Math.abs(5), 2))) < 4 && (unreadf.length % 5) < 5) && (unreadf == String.fromCharCode(120,57,115,56,56,0)));
      downloaderu = new Map([[telegram2, unreadf.length * 2]]);
   while (hongkong_.size == downloaderu.size) {
      hongkong_[xvodT] = xvodT.length % 3;
      break;
   }
   do {
       let controld = String.fromCharCode(106,95,50,51,95,117,108,116,114,97,119,105,100,101,0);
       let flyeru = 4.0;
       let referrerq = String.fromCharCode(105,95,53,56,95,104,101,97,100,115,0);
       let const_na = String.fromCharCode(114,95,57,57,95,100,121,110,98,117,102,0);
       let spinneri = 0;
      do {
         spinneri += (String.fromCharCode(111,0) == controld ? spinneri : controld.length);
         if (3858602 == spinneri) {
            break;
         }
      } while ((3858602 == spinneri) && (controld.includes(`${spinneri}`)));
      for (let x = 0; x < 3; x++) {
         controld = `${const_na.length / 1}`;
      }
      if (referrerq.length == 5) {
         referrerq = `${(const_na == String.fromCharCode(57,0) ? const_na.length : spinneri)}`;
      }
       let schedulep = [544, 497];
      if ((spinneri & 4) < 3) {
         spinneri += schedulep.length;
      }
         spinneri <<= Math.min(1, Math.abs(referrerq.length << (Math.min(4, const_na.length))));
       let infoq = false;
       let awayI = false;
          let nterstitialt = String.fromCharCode(122,101,114,111,115,95,99,95,54,57,0);
          let floaterx = String.fromCharCode(106,95,55,51,95,115,108,105,112,112,97,103,101,0);
         referrerq = `${spinneri - 3}`;
         nterstitialt = `${floaterx.length}`;
         floaterx = `${nterstitialt.length - 3}`;
      while (3 >= schedulep.length) {
         referrerq += `${referrerq.length * 3}`;
         break;
      }
      while ((spinneri % 2) == 2) {
         schedulep = [3 / (Math.max(1, parseInt(`${flyeru}`)))];
         break;
      }
      while (!controld.startsWith(`${infoq}`)) {
         controld += `${((awayI ? 3 : 5) / 3)}`;
         break;
      }
      while (referrerq != String.fromCharCode(106,0)) {
         const_na += "1";
         break;
      }
      for (let t = 0; t < 3; t++) {
          let smallo = String.fromCharCode(112,97,114,116,105,99,108,101,95,57,95,51,57,0);
          let singapore5 = 1.0;
         referrerq = `${referrerq.length | parseInt(`${flyeru}`)}`;
         smallo = `${parseInt(`${singapore5}`)}`;
         singapore5 /= Math.max(2, parseInt(`${singapore5}`) - smallo.length);
      }
      do {
         const_na += `${(const_na == String.fromCharCode(86,0) ? const_na.length : schedulep.length)}`;
         if (const_na == String.fromCharCode(118,55,95,51,48,103,101,54,106,0)) {
            break;
         }
      } while (((const_na.length >> (Math.min(2, Math.abs(spinneri)))) <= 1 || (const_na.length >> (Math.min(Math.abs(1), 2))) <= 2) && (const_na == String.fromCharCode(118,55,95,51,48,103,101,54,106,0)));
      while (referrerq.length >= spinneri) {
          let reportO = 0;
         spinneri += schedulep.length;
         reportO -= reportO;
         break;
      }
      unreadf += "2";
      if (String.fromCharCode(57,118,106,55,52,118,105,110,105,0) == unreadf) {
         break;
      }
   } while (((5 ^ unreadf.length) > 2 && 1.63 > (3.73 - countdown9)) && (String.fromCharCode(57,118,106,55,52,118,105,110,105,0) == unreadf));
      clockJ[`${playercommon4}`] = parseInt(`${playercommon4}`);

    playerRef.current?.seek?.(0);
      countdown9 -= clockJ.size;
       let reactnativejsj = [60, 594];
          let whatsappK = [String.fromCharCode(109,97,116,114,105,120,95,53,95,52,50,0), String.fromCharCode(108,95,57,95,108,105,110,101,0), String.fromCharCode(107,105,99,107,95,109,95,52,50,0)];
         reactnativejsj = [whatsappK.length << (Math.min(Math.abs(3), 5))];
       let mutedY = String.fromCharCode(100,108,114,114,95,56,95,52,52,0);
       let zoom6 = String.fromCharCode(108,95,50,54,0);
         mutedY += `${1 & reactnativejsj.length}`;
      inactive3 += stylese.length;
      xvodT += `${2 | parseInt(`${episodeU}`)}`;
   for (let z = 0; z < 2; z++) {
      stylese += `${hongkong_.size}`;
   }
   do {
       let long_dm = String.fromCharCode(104,99,104,114,111,109,97,95,110,95,56,55,0);
       let colorsH = new Map([[String.fromCharCode(114,95,51,50,95,115,112,108,105,116,109,118,115,0),true ], [String.fromCharCode(100,101,112,101,110,100,95,113,95,56,50,0),false ]]);
       let materiald = [497, 19];
         colorsH = new Map([[`${colorsH.size}`, colorsH.size]]);
       let contextK = String.fromCharCode(97,95,49,53,95,100,101,113,117,97,110,116,105,122,101,0);
          let stringJ = 1.0;
          let vietnamc = true;
          let statistics5 = 3.0;
         materiald.push((parseInt(`${stringJ}`) * (vietnamc ? 4 : 5)));
         stringJ *= parseFloat(`${parseInt(`${statistics5}`)}`);
         vietnamc = 32.8 == statistics5;
       let benefitk = String.fromCharCode(97,95,52,48,95,101,112,97,102,0);
         colorsH = new Map([[`${materiald.length}`, (contextK == String.fromCharCode(53,0) ? materiald.length : contextK.length)]]);
         contextK = `${materiald.length}`;
         colorsH = new Map([[`${materiald.length}`, long_dm.length | 1]]);
          let indexK = String.fromCharCode(116,95,52,56,95,116,109,99,100,0);
          let eventq = String.fromCharCode(101,95,50,53,95,114,101,102,101,114,101,110,99,101,0);
          let circleh = new Map([[String.fromCharCode(114,95,52,54,95,100,101,102,105,110,105,116,105,111,110,0),String.fromCharCode(99,95,53,95,113,117,97,110,116,105,108,101,0)], [String.fromCharCode(99,95,54,52,95,100,101,108,105,109,105,116,101,100,0),String.fromCharCode(109,95,54,95,100,101,112,101,110,100,0)], [String.fromCharCode(98,95,55,53,95,109,117,108,116,105,112,108,101,120,0),String.fromCharCode(102,111,117,114,99,99,115,95,57,95,50,54,0)]]);
         benefitk += `${long_dm.length}`;
         indexK = `${eventq.length << (Math.min(Math.abs(1), 3))}`;
         eventq += `${circleh.size * 1}`;
         circleh = new Map([[`${circleh.size}`, circleh.size + indexK.length]]);
          let logoV = String.fromCharCode(114,95,53,52,95,114,101,116,114,105,101,100,0);
         benefitk += `${logoV.length ^ contextK.length}`;
      xvodT += `${downloaderu.size}`;
      if (xvodT.length == 4550785) {
         break;
      }
   } while ((xvodT.length == 4550785) && (playercommon4 == 5.52));
   if (!unreadf.includes(`${clockJ.size}`)) {
      clockJ = new Map([[stylese, 2]]);
   }
   while (2.71 <= (episodeU / 5.13)) {
      episodeU -= parseFloat(`${stylese.length / 1}`);
      break;
   }
      hongkong_ = new Map([[`${hongkong_.size}`, (stylese == String.fromCharCode(115,0) ? stylese.length : hongkong_.size)]]);
       let gesturer = String.fromCharCode(108,95,53,48,95,116,101,108,101,109,101,116,114,121,0);
       let combine2 = String.fromCharCode(113,95,53,48,95,100,99,116,115,117,98,0);
      while (5 >= combine2.length) {
         gesturer = `${combine2.length}`;
         break;
      }
         gesturer += `${gesturer.length % 3}`;
      do {
          let baidul = String.fromCharCode(103,95,54,50,95,119,101,98,99,97,109,0);
          let downloaderU = String.fromCharCode(116,101,114,109,105,110,97,108,95,119,95,48,0);
          let vignettej = 0.0;
          let mimom = 4.0;
         combine2 = "2";
         baidul += `${3 | downloaderU.length}`;
         downloaderU = `${parseInt(`${vignettej}`)}`;
         mimom -= parseFloat(`${parseInt(`${vignettej}`) / (Math.max(parseInt(`${mimom}`), 7))}`);
         if (String.fromCharCode(49,108,112,100,99,121,103,111,0) == combine2) {
            break;
         }
      } while ((combine2.length == gesturer.length) && (String.fromCharCode(49,108,112,100,99,121,103,111,0) == combine2));
          let y_count6 = 0;
          let castt = 5.0;
          let dycreator5 = 1;
         combine2 = `${y_count6}`;
         y_count6 >>= Math.min(5, Math.abs(parseInt(`${castt}`) ^ 3));
         castt /= Math.max(2, 2);
         dycreator5 |= parseInt(`${castt}`);
      if (3 == combine2.length) {
          let stepc = 1.0;
          let downloadedR = String.fromCharCode(106,95,53,95,97,108,101,114,116,0);
          let bellN = String.fromCharCode(114,95,53,57,95,120,97,109,112,108,101,0);
          let typingC = 4.0;
         combine2 = `${bellN.length}`;
         stepc -= 2;
         downloadedR = "1";
         bellN += `${downloadedR.length % 3}`;
         typingC += 1 << (Math.min(1, Math.abs(parseInt(`${stepc}`))));
      }
          let xvodM = 4.0;
          let greyQ = [327, 695, 212];
         combine2 += `${(String.fromCharCode(51,0) == combine2 ? gesturer.length : combine2.length)}`;
         xvodM *= parseFloat(`${parseInt(`${xvodM}`) * greyQ.length}`);
         greyQ = [greyQ.length];
      xvodT += "1";
      playercommon4 *= parseFloat(`${1}`);
       let settings7 = 5.0;
       let matchH = false;
         matchH = !matchH;
       let sansy = 3.0;
       let utilsx = 4.0;
          let utils2 = 0.0;
          let pausec = 2.0;
          let untickF = [String.fromCharCode(100,95,51,53,95,97,108,115,111,0), String.fromCharCode(118,101,114,115,105,111,110,103,101,110,101,114,97,116,101,95,120,95,52,50,0)];
         sansy += (parseFloat(`${parseInt(`${settings7}`) - (matchH ? 5 : 3)}`));
         utils2 += parseInt(`${pausec}`) + 3;
         pausec *= parseFloat(`${untickF.length}`);
         untickF.push(parseInt(`${pausec}`));
       let mathz = String.fromCharCode(102,105,110,100,95,114,95,54,50,0);
      if ((1 * utilsx) < 2.56) {
         sansy += (parseFloat(`${parseInt(`${settings7}`) % (Math.max(10, (matchH ? 1 : 1)))}`));
      }
         mathz += `${((matchH ? 1 : 2) >> (Math.min(Math.abs(parseInt(`${sansy}`)), 1)))}`;
      inactive3 *= parseInt(`${countdown9}`);
      playercommon4 /= Math.max(parseFloat(`${telegram2.length * 3}`), 2);

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
