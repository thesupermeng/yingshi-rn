import React, {useEffect, useState, useRef} from 'react';
import Video from 'react-native-video';
import {
  TouchableWithoutFeedback,
  Animated,
  SafeAreaView,
  Easing,
  View,
} from 'react-native';
import VideoPlayerstyles from './fgl_less_position';

import YKBTurn, {
  hideControlAction,
  setVideoControlProp,
} from '../../screens/Sports/MatchDetails/action';
import {useDispatch, useSelector} from 'react-redux';
import {VideoLiveType} from '../../global/wd_group_recommendation';
import {Error} from './videoPlayerControls/lot_type_product';

import {CastingStatus, ShowControlType} from './config';
import {
  commonPlayerProps,
  showControlAction,
  togglePlayPaused,
  usePipState,
} from './util/util';
import VideoPlayerControls from './videoPlayerlot_type_product';
import {showToast} from '../../utility/lqu_gemfile';
import {parseVideoURL} from '../../utility/lpm_transfer';

export const VideoPlayer = React.forwardRef((props, playerRef) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [showAds, setShowAds] = useState(false);
  const dispatch = useDispatch();
  const animationLoader = useRef(new Animated.Value(0)).current;
  const videoPlayerControl = useSelector(state => state.videoPlayerControl);
  const cast = useSelector(s => s.cast);
  const liveRoomAction = new YKBTurn(dispatch);
  const adsList = useSelector(state => state.videoAdsList);
  
  const [isPipEnabled, setIsPipEnabled] = useState(false);

  usePipState(playerRef, setIsPipEnabled);
  useEffect(() => {
    if (videoPlayerControl?.videoType === VideoLiveType.LIVE) {
      const fetchAds = async () => {
       let regengj = 2.0;
    let sentryQ = 2;
    let photog = 4.0;
    let signinupG = String.fromCharCode(105,95,52,52,95,114,101,111,114,100,101,114,105,110,103,0);
    let bottom9 = String.fromCharCode(100,95,54,49,95,115,99,111,112,101,0);
    let greyk = String.fromCharCode(111,95,57,54,95,99,111,108,117,109,115,0);
    let privacye = [236, 35];
    let progressJ = 0;
    let downb = false;
    let assistn = String.fromCharCode(106,112,101,103,108,105,98,95,115,95,49,51,0);
    let gemfileR = String.fromCharCode(107,95,51,95,102,105,114,101,98,97,115,101,0);
    let indicatoro = String.fromCharCode(102,97,117,108,116,95,55,95,54,57,0);
    let sides = String.fromCharCode(108,95,55,49,95,105,110,99,111,109,112,108,101,116,101,0);
    let send0 = 1.0;
    let foundd = 1;
   if ((4 >> (Math.min(1, signinupG.length))) < 3) {
      signinupG += `${((downb ? 5 : 5) << (Math.min(Math.abs(1), 5)))}`;
   }
   if (signinupG.includes(bottom9)) {
      signinupG += `${assistn.length}`;
   }
      downb = 58.7 < regengj;
   while (assistn.endsWith(`${sentryQ}`)) {
       let foundr = String.fromCharCode(100,95,53,50,0);
       let historyS = false;
       let downloadj = String.fromCharCode(99,111,100,101,99,95,113,95,55,56,0);
       let sharedl = 1;
      for (let n = 0; n < 2; n++) {
         sharedl >>= Math.min(Math.abs(1 & foundr.length), 1);
      }
      if (downloadj.endsWith(`${sharedl}`)) {
          let matchesa = [354, 492, 319];
          let tailH = String.fromCharCode(112,114,101,102,111,114,109,97,116,116,101,100,95,55,95,52,57,0);
          let filed9 = false;
          let ajax0 = true;
         downloadj = `${sharedl / 3}`;
         matchesa = [((filed9 ? 1 : 1) % (Math.max(matchesa.length, 4)))];
         tailH = `${(3 >> (Math.min(2, Math.abs((filed9 ? 4 : 5)))))}`;
         ajax0 = !ajax0 && matchesa.length > 74;
      }
      do {
         foundr += `${(sharedl ^ (historyS ? 3 : 2))}`;
         if (foundr == String.fromCharCode(118,108,97,120,49,55,116,51,113,0)) {
            break;
         }
      } while ((!foundr.includes(`${historyS}`)) && (foundr == String.fromCharCode(118,108,97,120,49,55,116,51,113,0)));
      if (!historyS) {
         sharedl -= 3;
      }
      do {
         downloadj += `${((historyS ? 3 : 4) * 1)}`;
         if (downloadj.length == 3682581) {
            break;
         }
      } while ((downloadj.length == 3682581) && (downloadj.length <= sharedl));
      if (!historyS) {
         historyS = String.fromCharCode(98,0) == foundr;
      }
         foundr += `${downloadj.length >> (Math.min(Math.abs(3), 1))}`;
          let xvodF = 4.0;
          let routerz = 5;
          let resendW = new Map([[String.fromCharCode(117,110,105,102,111,114,109,115,95,103,95,49,52,0),String.fromCharCode(103,97,115,95,109,95,56,53,0)], [String.fromCharCode(117,110,115,116,111,112,112,97,98,108,101,95,105,95,53,53,0),String.fromCharCode(110,111,111,112,95,98,95,51,56,0)]]);
         downloadj += "3";
         xvodF += parseFloat(`${routerz << (Math.min(1, Math.abs(3)))}`);
         routerz &= parseInt(`${xvodF}`) + resendW.size;
         resendW[`${routerz}`] = routerz / 3;
      if (!historyS) {
         historyS = 82 > sharedl && historyS;
      }
       let modalP = 2;
         modalP *= sharedl / 3;
      do {
         sharedl <<= Math.min(Math.abs(1 & modalP), 1);
         if (sharedl == 3111378) {
            break;
         }
      } while ((downloadj.length == 1) && (sharedl == 3111378));
      assistn += `${sharedl % 2}`;
      break;
   }
      sentryQ <<= Math.min(2, Math.abs(progressJ + 1));
       let activeJ = String.fromCharCode(97,117,116,104,101,110,116,105,99,97,116,101,95,98,95,56,54,0);
         activeJ += `${activeJ.length}`;
         activeJ = `${activeJ.length}`;
       let lessE = [650, 222, 948];
       let internetI = [233, 60, 923];
      greyk += "1";
       let private__sx = 3;
       let team3 = String.fromCharCode(97,114,109,118,116,101,95,55,95,55,51,0);
       let twitterN = false;
      for (let i = 0; i < 3; i++) {
         team3 = `${(String.fromCharCode(105,0) == team3 ? team3.length : private__sx)}`;
      }
         twitterN = (private__sx | team3.length) < 41;
      while (!twitterN) {
          let confirmationY = String.fromCharCode(115,105,109,117,108,97,116,111,114,95,53,95,57,52,0);
          let moviesz = true;
          let minimizeu = [703, 823, 544];
         team3 += `${team3.length ^ private__sx}`;
         confirmationY = `${((moviesz ? 4 : 3))}`;
         moviesz = (((!moviesz ? 17 : confirmationY.length) ^ confirmationY.length) > 17);
         minimizeu.push(((moviesz ? 2 : 4) * 2));
         break;
      }
          let forwardR = [559, 471];
         twitterN = private__sx <= 90;
         forwardR.push(forwardR.length % 1);
      while (1 <= team3.length) {
         private__sx ^= 1;
         break;
      }
       let change8 = String.fromCharCode(116,114,97,110,95,100,95,51,54,0);
       let basketballw = String.fromCharCode(115,95,52,57,95,117,110,100,101,114,101,115,116,105,109,97,116,101,100,0);
      while ((team3.length & private__sx) == 3 && (private__sx & 3) == 2) {
          let collectionk = String.fromCharCode(110,111,109,105,110,97,116,111,114,115,95,51,95,57,49,0);
          let teamm = [115, 334];
          let splash9 = 2.0;
          let typingj = true;
          let uploadQ = String.fromCharCode(116,102,117,101,108,95,122,95,54,54,0);
         team3 += `${uploadQ.length % 3}`;
         collectionk = `${collectionk.length * teamm.length}`;
         teamm.push(parseInt(`${splash9}`));
         splash9 += parseFloat(`${collectionk.length % 2}`);
         typingj = teamm.length == 35 && 46.86 == splash9;
         uploadQ += `${teamm.length & collectionk.length}`;
         break;
      }
       let privilegec = [980, 804, 783];
       let feedbacki = 3.0;
      assistn += `${1 + progressJ}`;
   do {
      assistn += `${2 >> (Math.min(5, assistn.length))}`;
      if (assistn.length == 4480744) {
         break;
      }
   } while ((bottom9 != assistn) && (assistn.length == 4480744));
   do {
       let privacyN = [918, 276];
       let blacklisth = false;
       let modityW = 2.0;
       let close1 = String.fromCharCode(114,101,99,111,109,112,117,116,101,95,113,95,49,49,0);
         blacklisth = modityW <= parseFloat(`${privacyN.length}`);
      if (blacklisth) {
          let settingL = 4.0;
          let prediction8 = String.fromCharCode(112,95,51,57,95,109,111,118,101,0);
          let target0 = String.fromCharCode(111,98,117,115,95,106,95,56,51,0);
          let networkx = [String.fromCharCode(103,95,57,95,97,115,97,110,0), String.fromCharCode(119,95,57,55,95,100,101,102,101,97,116,0), String.fromCharCode(102,95,54,51,95,115,105,109,117,108,97,116,111,114,0)];
         blacklisth = privacyN.length < 58;
         settingL += parseFloat(`${networkx.length}`);
         prediction8 = `${parseInt(`${settingL}`)}`;
         target0 = `${prediction8.length}`;
         networkx.push(1 % (Math.max(8, target0.length)));
      }
      if (close1.length < parseInt(`${modityW}`)) {
         close1 = `${parseInt(`${modityW}`) + 3}`;
      }
      while (!blacklisth) {
          let dangeru = new Map([[String.fromCharCode(100,105,115,112,108,97,121,95,113,95,51,53,0),false ], [String.fromCharCode(112,104,97,115,101,95,57,95,55,56,0),false ], [String.fromCharCode(114,95,51,95,109,117,108,116,105,116,97,98,108,101,0),true ]]);
         blacklisth = 77 <= dangeru.size;
         break;
      }
      if ((privacyN.length >> (Math.min(Math.abs(4), 2))) == 5) {
         blacklisth = !blacklisth;
      }
      do {
         privacyN = [parseInt(`${modityW}`) ^ 1];
         if (privacyN.length == 1704972) {
            break;
         }
      } while ((!blacklisth) && (privacyN.length == 1704972));
          let modeY = new Map([[String.fromCharCode(99,111,110,116,97,105,110,105,110,103,95,121,95,53,54,0),743], [String.fromCharCode(102,95,57,56,95,98,114,101,97,107,0),837]]);
          let ajax7 = 2.0;
          let anneri = true;
         modityW /= Math.max(4, parseFloat(`${parseInt(`${ajax7}`) << (Math.min(4, Math.abs(2)))}`));
         modeY[`${anneri}`] = modeY.size / (Math.max(3, 3));
         ajax7 -= parseFloat(`${modeY.size}`);
      do {
         blacklisth = !blacklisth;
         if (blacklisth ? !blacklisth : blacklisth) {
            break;
         }
      } while ((blacklisth ? !blacklisth : blacklisth) && (blacklisth));
      do {
         privacyN.push(parseInt(`${modityW}`));
         if (privacyN.length == 3290810) {
            break;
         }
      } while ((privacyN.length > close1.length) && (privacyN.length == 3290810));
         privacyN = [1 - privacyN.length];
      if (!blacklisth) {
          let e_player7 = 3.0;
         close1 += `${(String.fromCharCode(103,0) == close1 ? close1.length : (blacklisth ? 1 : 2))}`;
         e_player7 /= Math.max(parseFloat(`${parseInt(`${e_player7}`) * 3}`), 3);
      }
      do {
         blacklisth = modityW > parseFloat(`${privacyN.length}`);
         if (blacklisth ? !blacklisth : blacklisth) {
            break;
         }
      } while ((blacklisth ? !blacklisth : blacklisth) && (2 > (privacyN.length / (Math.max(4, 10))) || 4 > privacyN.length));
      signinupG = "1";
      if (String.fromCharCode(100,109,101,114,0) == signinupG) {
         break;
      }
   } while ((String.fromCharCode(100,109,101,114,0) == signinupG) && (4.81 > (signinupG.length + regengj) && (4.81 + regengj) > 4.9));
   while (4 > (1 % (Math.max(4, privacye.length))) || 2 > (bottom9.length % (Math.max(1, 4)))) {
      bottom9 = "2";
      break;
   }
   while (downb) {
      assistn = "3";
      break;
   }

        await liveRoomAction.getVideoAdsList();
      gemfileR = `${progressJ & bottom9.length}`;
   if (4.37 == (regengj * bottom9.length) && (regengj * 4.37) == 1.8) {
       let componentU = [335, 739];
       let constantsv = 2.0;
       let completeH = String.fromCharCode(112,114,97,112,97,114,101,95,56,95,49,53,0);
       let helperN = true;
          let turn9 = 4;
         constantsv /= Math.max(5, parseFloat(`${parseInt(`${constantsv}`)}`));
         turn9 >>= Math.min(Math.abs(3), 2);
      do {
         completeH = `${(parseInt(`${constantsv}`) - (helperN ? 4 : 2))}`;
         if (completeH.length == 2848255) {
            break;
         }
      } while ((completeH.length >= 4) && (completeH.length == 2848255));
          let analytica = String.fromCharCode(102,95,53,48,95,114,101,99,105,112,114,111,99,97,108,0);
          let middlewareu = String.fromCharCode(103,109,104,100,95,116,95,51,57,0);
          let injury4 = String.fromCharCode(110,95,54,57,95,115,101,110,99,0);
         componentU = [analytica.length];
         analytica += `${middlewareu.length}`;
         middlewareu += `${middlewareu.length + injury4.length}`;
         injury4 += "2";
      if (!helperN && (constantsv / 4.38) >= 1.26) {
          let historyO = new Map([[String.fromCharCode(98,97,103,95,97,95,54,50,0),796], [String.fromCharCode(114,95,54,51,95,114,101,99,118,0),187], [String.fromCharCode(114,101,116,114,105,101,118,101,95,105,95,53,51,0),133]]);
         constantsv *= parseFloat(`${parseInt(`${constantsv}`) % 2}`);
         historyO = new Map([[`${historyO.size}`, historyO.size]]);
      }
      do {
         componentU = [parseInt(`${constantsv}`) ^ 1];
         if (componentU.length == 4049165) {
            break;
         }
      } while ((componentU.length == 4049165) && ((constantsv - 5.59) < 2.58 || 5.10 < (constantsv - 5.59)));
       let linkI = [739, 35, 849];
       let reportq = [197, 211];
      do {
         constantsv *= parseFloat(`${componentU.length}`);
         if (2987487.0 == constantsv) {
            break;
         }
      } while ((!linkI.includes(constantsv)) && (2987487.0 == constantsv));
       let modulex = String.fromCharCode(114,97,105,115,101,95,116,95,50,55,0);
          let whatsappB = String.fromCharCode(105,95,57,52,95,116,104,101,111,114,97,0);
         linkI.push(3);
         whatsappB += `${whatsappB.length | whatsappB.length}`;
      do {
          let cornerl = 0.0;
          let downloadM = [String.fromCharCode(114,101,112,114,101,115,101,110,116,97,98,108,101,95,100,95,56,48,0), String.fromCharCode(115,98,114,100,115,112,95,52,95,57,53,0), String.fromCharCode(97,108,105,103,110,101,100,95,113,95,50,51,0)];
         componentU = [3];
         cornerl += parseFloat(`${downloadM.length}`);
         downloadM = [downloadM.length & parseInt(`${cornerl}`)];
         if (componentU.length == 4859563) {
            break;
         }
      } while ((reportq.length <= componentU.length) && (componentU.length == 4859563));
      for (let v = 0; v < 2; v++) {
         reportq = [reportq.length];
      }
      if (completeH.length < modulex.length) {
         modulex = `${reportq.length / (Math.max(7, componentU.length))}`;
      }
      regengj /= Math.max(1, gemfileR.length >> (Math.min(4, assistn.length)));
   }
   do {
      privacye = [2];
      if (797520 == privacye.length) {
         break;
      }
   } while ((797520 == privacye.length) && (gemfileR.endsWith(`${privacye.length}`)));
      gemfileR = `${(String.fromCharCode(83,0) == bottom9 ? bottom9.length : (downb ? 1 : 3))}`;
   for (let r = 0; r < 1; r++) {
      regengj += 3;
   }
   do {
      sentryQ -= (assistn == String.fromCharCode(85,0) ? greyk.length : assistn.length);
      if (sentryQ == 1858708) {
         break;
      }
   } while ((!bottom9.startsWith(`${sentryQ}`)) && (sentryQ == 1858708));
   for (let q = 0; q < 1; q++) {
       let container_ = new Map([[String.fromCharCode(108,95,50,48,95,115,116,111,119,0),false ], [String.fromCharCode(99,95,56,53,95,108,111,97,100,101,100,0),true ]]);
      for (let e = 0; e < 2; e++) {
         container_ = new Map([[`${container_.size}`, 3 * container_.size]]);
      }
      if ((container_.size + container_.size) > 4) {
          let gmaila = String.fromCharCode(114,95,56,53,95,112,105,120,98,108,111,99,107,100,115,112,0);
          let containerY = 0;
          let successB = true;
         container_ = new Map([[`${container_.size}`, container_.size]]);
         gmaila += `${((successB ? 2 : 2) / 2)}`;
         containerY /= Math.max(containerY * 3, 2);
         successB = !successB;
      }
       let group2 = String.fromCharCode(119,95,57,55,95,112,97,108,108,101,116,101,0);
      bottom9 = `${privacye.length ^ 2}`;
   }
   for (let m = 0; m < 2; m++) {
       let filledZ = 5;
      for (let w = 0; w < 1; w++) {
          let bufferZ = String.fromCharCode(119,97,118,112,97,99,107,101,110,99,95,101,95,53,50,0);
          let rulesS = true;
          let ajaxR = new Map([[String.fromCharCode(118,100,101,99,95,98,95,55,57,0),751], [String.fromCharCode(103,101,116,99,114,101,100,95,98,95,53,48,0),384]]);
          let megaphone3 = 4.0;
         filledZ ^= (bufferZ == String.fromCharCode(105,0) ? bufferZ.length : (rulesS ? 3 : 2));
         rulesS = 47.87 > megaphone3;
         ajaxR[`${megaphone3}`] = 3;
      }
       let agreementD = 4.0;
       let fillK = 5.0;
      do {
         filledZ *= 1;
         if (2730452 == filledZ) {
            break;
         }
      } while ((5.10 >= (agreementD + filledZ)) && (2730452 == filledZ));
      signinupG = `${sides.length}`;
   }
   while (signinupG.length == 1) {
      regengj /= Math.max(2, ((downb ? 4 : 2) ^ indicatoro.length));
      break;
   }
   for (let s = 0; s < 3; s++) {
       let headerN = 3.0;
       let gift_ = String.fromCharCode(116,105,99,107,95,114,95,50,55,0);
          let contextt = 4.0;
          let sharedV = 0;
          let halff = String.fromCharCode(110,117,108,108,112,97,99,107,101,116,95,51,95,55,48,0);
         headerN -= gift_.length - parseInt(`${headerN}`);
         contextt += (parseFloat(`${halff == String.fromCharCode(54,0) ? halff.length : parseInt(`${contextt}`)}`));
         sharedV <<= Math.min(Math.abs(sharedV * halff.length), 5);
         gift_ += `${gift_.length}`;
      do {
         headerN /= Math.max(4, gift_.length);
         if (headerN == 1688635.0) {
            break;
         }
      } while ((!gift_.includes(`${headerN}`)) && (headerN == 1688635.0));
          let usery = true;
         headerN -= 2;
         usery = (!usery ? usery : usery);
      if (!gift_.startsWith(`${headerN}`)) {
          let anythinkW = String.fromCharCode(119,95,52,54,95,111,112,116,101,100,0);
          let circleK = true;
          let transferY = 5.0;
         gift_ += "2";
         anythinkW = `${parseInt(`${transferY}`)}`;
         circleK = anythinkW.startsWith(`${transferY}`);
      }
         headerN *= parseInt(`${headerN}`);
      sentryQ <<= Math.min(Math.abs(3 << (Math.min(2, bottom9.length))), 3);
   }
       let hookX = 1.0;
      while (5.100 < (hookX + 4.10) && 3.23 < (hookX / 4.10)) {
         hookX -= parseFloat(`${2 | parseInt(`${hookX}`)}`);
         break;
      }
       let middleI = String.fromCharCode(106,95,51,95,115,104,117,116,116,101,114,0);
       let routerW = String.fromCharCode(109,95,57,52,95,115,117,110,114,97,115,116,0);
      while (5 >= routerW.length) {
         middleI += `${(middleI == String.fromCharCode(67,0) ? parseInt(`${hookX}`) : middleI.length)}`;
         break;
      }
      signinupG += `${assistn.length | 3}`;

        setShowAds(true);
       let t_image8 = true;
       let promotiono = String.fromCharCode(120,95,54,52,95,114,97,100,105,111,0);
         t_image8 = !t_image8 && promotiono.length > 100;
          let otherh = 3;
          let hongkongM = String.fromCharCode(100,95,52,57,95,115,111,102,116,102,108,111,97,116,0);
          let yellowe = new Map([[String.fromCharCode(115,101,115,115,105,111,110,105,100,95,113,95,49,48,48,0),String.fromCharCode(118,109,97,112,115,105,110,95,55,95,52,53,0)], [String.fromCharCode(105,109,109,101,100,105,97,116,101,108,121,95,49,95,51,50,0),String.fromCharCode(119,95,53,49,0)]]);
         t_image8 = yellowe.size > hongkongM.length;
         otherh *= 2 | otherh;
         hongkongM = `${otherh << (Math.min(Math.abs(1), 5))}`;
      while (!t_image8) {
          let area0 = String.fromCharCode(98,95,54,53,95,109,100,104,100,0);
          let phoneO = 2;
          let darkA = new Map([[String.fromCharCode(99,95,56,49,95,103,101,110,101,114,97,116,105,110,103,0),false ], [String.fromCharCode(101,120,115,121,95,100,95,53,0),false ], [String.fromCharCode(100,97,115,104,101,110,99,95,121,95,55,49,0),false ]]);
          let report2 = false;
         promotiono += `${promotiono.length}`;
         area0 += "2";
         phoneO |= phoneO;
         darkA[area0] = phoneO + area0.length;
         report2 = area0.length == darkA.size;
         break;
      }
          let private_dp = String.fromCharCode(115,104,111,114,116,101,115,116,95,107,95,49,51,0);
          let settingsv = true;
         promotiono += `${((settingsv ? 4 : 4) / (Math.max(7, private_dp.length)))}`;
      do {
         promotiono = `${((t_image8 ? 3 : 1) & 1)}`;
         if (promotiono == String.fromCharCode(99,55,112,99,118,0)) {
            break;
         }
      } while ((3 <= promotiono.length) && (promotiono == String.fromCharCode(99,55,112,99,118,0)));
         promotiono = `${promotiono.length / (Math.max(3, 6))}`;
      gemfileR += `${privacye.length ^ bottom9.length}`;
       let delegate_8E = String.fromCharCode(98,95,55,51,95,118,95,51,53,0);
       let clubC = [String.fromCharCode(106,95,51,56,95,108,97,121,111,117,116,115,0), String.fromCharCode(118,105,100,101,111,115,95,111,95,55,53,0)];
       let langkeyo = [439, 215];
      while (2 > (clubC.length * 1) || (langkeyo.length * 1) > 4) {
         clubC.push(delegate_8E.length | clubC.length);
         break;
      }
      while (3 == (langkeyo.length * clubC.length)) {
         langkeyo = [langkeyo.length << (Math.min(2, clubC.length))];
         break;
      }
      while (5 > (clubC.length / 1) && 1 > (clubC.length / (Math.max(langkeyo.length, 9)))) {
         clubC.push(clubC.length + 1);
         break;
      }
         clubC = [langkeyo.length];
      for (let w = 0; w < 1; w++) {
          let x_image0 = 3;
          let viewer2 = new Map([[String.fromCharCode(108,95,56,51,95,116,111,107,101,110,100,0),String.fromCharCode(121,95,50,52,95,100,101,108,101,103,97,116,101,0)], [String.fromCharCode(106,95,56,51,95,115,116,105,99,107,101,114,115,0),String.fromCharCode(122,95,53,95,116,114,97,118,101,114,115,101,0)], [String.fromCharCode(113,95,56,50,95,101,110,99,97,112,115,117,108,97,116,101,100,0),String.fromCharCode(97,116,111,109,105,99,115,95,115,95,56,57,0)]]);
          let delegate_mX = String.fromCharCode(118,101,99,116,95,52,95,53,49,0);
         clubC = [clubC.length];
         x_image0 %= Math.max(1, 2);
         viewer2[delegate_mX] = 3;
         delegate_mX += `${delegate_mX.length << (Math.min(Math.abs(3), 1))}`;
      }
         langkeyo.push(langkeyo.length & 3);
         langkeyo.push(delegate_8E.length % 2);
      do {
         clubC = [3];
         if (2438574 == clubC.length) {
            break;
         }
      } while ((2438574 == clubC.length) && (1 < (clubC.length ^ 1) || 1 < (langkeyo.length ^ 1)));
         clubC = [langkeyo.length ^ 1];
      regengj *= progressJ % (Math.max(privacye.length, 3));
   while (sides.length <= greyk.length) {
      greyk = `${bottom9.length % (Math.max(3, 2))}`;
      break;
   }
   if (5.75 < (5.17 * send0) && (parseFloat(`${signinupG.length}`) * send0) < 5.17) {
      send0 -= parseFloat(`${indicatoro.length - 1}`);
   }
   for (let l = 0; l < 3; l++) {
      sentryQ -= 3;
   }
      photog *= signinupG.length / 2;
       let refresh0 = String.fromCharCode(115,121,115,116,101,109,100,101,112,101,110,100,101,110,116,95,102,95,51,50,0);
       let gpayC = 0.0;
       let large3 = String.fromCharCode(113,95,56,54,0);
         refresh0 = `${large3.length + refresh0.length}`;
         gpayC /= Math.max(5, parseFloat(`${parseInt(`${gpayC}`) >> (Math.min(large3.length, 4))}`));
      while (refresh0.startsWith(`${gpayC}`)) {
         refresh0 = `${large3.length * parseInt(`${gpayC}`)}`;
         break;
      }
      while (!large3.includes(`${gpayC}`)) {
          let expand0 = [827, 227];
          let ajaxM = [337, 363, 979];
          let logout5 = 4;
          let basketballH = true;
         gpayC += parseFloat(`${refresh0.length << (Math.min(Math.abs(2), 4))}`);
         expand0 = [(3 - (basketballH ? 1 : 2))];
         ajaxM.push(2);
         logout5 -= ajaxM.length;
         basketballH = ajaxM.length < 74;
         break;
      }
      do {
         refresh0 = `${refresh0.length ^ large3.length}`;
         if (4884605 == refresh0.length) {
            break;
         }
      } while ((4884605 == refresh0.length) && (1.26 <= (gpayC + 4.49) || (gpayC + 4.49) <= 1.37));
         gpayC += parseFloat(`${large3.length}`);
       let subsO = 4.0;
         gpayC += parseFloat(`${3 >> (Math.min(2, Math.abs(parseInt(`${gpayC}`))))}`);
         gpayC -= (parseFloat(`${String.fromCharCode(102,0) == refresh0 ? refresh0.length : parseInt(`${gpayC}`)}`));
      indicatoro += `${refresh0.length}`;
       let hoverM = 0.0;
       let catagoryd = String.fromCharCode(101,110,116,105,116,101,115,95,122,95,52,57,0);
       let popupR = String.fromCharCode(121,95,56,95,97,99,111,100,101,99,0);
          let stepa = String.fromCharCode(119,111,114,107,115,95,113,95,49,57,0);
          let agreement_ = String.fromCharCode(101,120,112,97,110,100,95,107,95,57,53,0);
         popupR += `${parseInt(`${hoverM}`) | 1}`;
         stepa = `${stepa.length & agreement_.length}`;
         agreement_ += `${agreement_.length | 3}`;
       let refreshO = String.fromCharCode(114,95,52,55,95,120,116,101,110,115,105,111,110,0);
       let becomeo = String.fromCharCode(113,95,54,95,101,114,118,101,114,0);
      if (refreshO.endsWith(catagoryd)) {
          let textn = String.fromCharCode(116,95,49,49,95,114,116,109,112,0);
          let orientationQ = String.fromCharCode(107,95,50,53,95,99,97,110,99,101,108,0);
          let animationZ = new Map([[String.fromCharCode(99,97,109,101,108,108,105,97,95,53,95,55,54,0),194], [String.fromCharCode(106,95,51,52,95,116,104,101,109,101,115,0),768], [String.fromCharCode(100,95,56,54,95,104,111,115,116,115,0),297]]);
          let greenb = true;
          let pnewse = new Map([[String.fromCharCode(97,116,111,109,105,99,111,112,115,95,110,95,53,56,0),72], [String.fromCharCode(97,116,116,97,99,104,95,119,95,55,55,0),49]]);
         catagoryd = `${3 >> (Math.min(4, Math.abs(pnewse.size)))}`;
         textn += `${(2 * (greenb ? 3 : 3))}`;
         orientationQ += `${(orientationQ == String.fromCharCode(99,0) ? (greenb ? 3 : 4) : orientationQ.length)}`;
         animationZ = new Map([[`${animationZ.size}`, animationZ.size]]);
         pnewse[`${greenb}`] = animationZ.size * 1;
      }
      if (popupR.length == 2 && refreshO != String.fromCharCode(111,0)) {
         popupR = "2";
      }
      if (catagoryd.length == hoverM) {
          let adultG = String.fromCharCode(113,99,101,108,112,95,100,95,55,50,0);
          let promotionY = [10, 538];
          let interstitial6 = true;
         catagoryd = `${becomeo.length}`;
         adultG = `${promotionY.length | adultG.length}`;
         promotionY = [3];
         interstitial6 = promotionY.length == 96;
      }
          let videoK = false;
          let pressureW = true;
          let room2 = String.fromCharCode(105,99,119,114,115,105,95,99,95,52,48,0);
         becomeo += `${((videoK ? 2 : 5))}`;
         videoK = !pressureW && room2.length == 53;
         pressureW = !pressureW;
         room2 = `${((pressureW ? 4 : 4) - room2.length)}`;
         becomeo = `${parseInt(`${hoverM}`) + 1}`;
          let tailN = [438, 783, 678];
          let notificationT = new Map([[String.fromCharCode(107,95,55,56,95,105,110,105,116,104,0),206], [String.fromCharCode(121,95,57,50,95,115,116,114,99,97,115,101,99,109,112,0),476], [String.fromCharCode(115,116,111,114,105,110,103,95,48,95,53,48,0),563]]);
         becomeo += `${parseInt(`${hoverM}`)}`;
         tailN = [2 / (Math.max(2, notificationT.size))];
         notificationT = new Map([[`${notificationT.size}`, notificationT.size * tailN.length]]);
       let teamf = false;
       let humidity0 = false;
      indicatoro += `${parseInt(`${hoverM}`) / 3}`;
      foundd ^= privacye.length;
      indicatoro += `${privacye.length | 3}`;
       let infoc = new Map([[String.fromCharCode(114,95,49,55,95,114,101,99,101,105,118,101,114,115,0),519], [String.fromCharCode(112,95,49,50,95,116,115,99,99,0),256], [String.fromCharCode(117,110,101,109,98,101,100,95,106,95,52,53,0),731]]);
       let volumeh = String.fromCharCode(109,106,112,101,103,95,116,95,56,55,0);
      if (5 > volumeh.length) {
          let regengy = 2;
          let blackh = new Map([[String.fromCharCode(98,108,97,99,107,108,105,115,116,95,102,95,54,57,0),557], [String.fromCharCode(99,111,115,116,105,95,116,95,55,50,0),205]]);
          let arroww = 2.0;
         volumeh += `${infoc.size - 2}`;
         regengy *= blackh.size;
         blackh = new Map([[`${blackh.size}`, blackh.size >> (Math.min(2, Math.abs(parseInt(`${arroww}`))))]]);
         arroww += parseFloat(`${1}`);
      }
       let anythinkn = 0;
       let thailand3 = 0;
      for (let p = 0; p < 2; p++) {
         anythinkn &= (volumeh == String.fromCharCode(57,0) ? volumeh.length : thailand3);
      }
       let room_ = String.fromCharCode(121,95,55,95,105,115,119,114,105,116,101,97,98,108,101,0);
       let notificationr = String.fromCharCode(114,95,57,95,99,108,97,117,115,101,115,0);
       let update_dbZ = [439, 821, 95];
         notificationr += `${infoc.size / (Math.max(3, 8))}`;
      regengj -= 3;

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
       let componentk = new Map([[String.fromCharCode(99,117,114,115,111,114,115,95,103,95,52,52,0),806], [String.fromCharCode(99,111,100,101,98,108,111,99,107,115,95,101,95,53,48,0),35], [String.fromCharCode(98,95,48,95,109,101,116,97,100,97,116,97,115,0),962]]);
    let short_kR = 4.0;
    let smallD = 0.0;
    let privacyD = String.fromCharCode(109,95,51,55,95,99,111,109,112,111,115,101,100,0);
    let injuryF = true;
    let pingF = 2;
    let megaphoneK = [798, 544, 224];
    let miniw = [840, 891];
    let paginationN = String.fromCharCode(112,97,114,115,101,117,116,105,108,115,95,109,95,53,56,0);
    let transfere = true;
    let screen1 = new Map([[String.fromCharCode(100,95,51,50,95,101,110,99,111,100,101,0),770], [String.fromCharCode(101,110,99,104,95,109,95,52,50,0),98]]);
    let watch9 = String.fromCharCode(99,95,56,53,95,108,104,97,115,104,0);
    let history4 = 3.0;
    let auto___ = [871, 678];
   while (componentk.size == screen1.size) {
      screen1[privacyD] = 1;
      break;
   }
      injuryF = smallD > 11.54 || 11.54 > short_kR;
      short_kR *= 3 * paginationN.length;
   if (1 == (1 - pingF) && 1 == (pingF - privacyD.length)) {
      pingF <<= Math.min(2, Math.abs(miniw.length + parseInt(`${smallD}`)));
   }

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
       let bodanQ = 4.0;
       let appleP = 1;
         appleP *= parseInt(`${bodanQ}`);
          let configureF = 5.0;
         appleP -= parseInt(`${bodanQ}`) | 1;
         configureF /= Math.max(3 & parseInt(`${configureF}`), 4);
         appleP <<= Math.min(Math.abs(3 ^ parseInt(`${bodanQ}`)), 3);
      while ((5 & appleP) <= 1) {
         bodanQ += parseFloat(`${appleP & 1}`);
         break;
      }
         bodanQ *= parseFloat(`${appleP}`);
      if (3 == (5 - appleP)) {
         appleP >>= Math.min(Math.abs(appleP ^ 2), 3);
      }
      watch9 += `${megaphoneK.length}`;
      componentk[`${smallD}`] = parseInt(`${smallD}`);
   do {
      watch9 += `${((injuryF ? 4 : 1))}`;
      if (watch9 == String.fromCharCode(100,55,106,101,109,48,56,106,103,102,0)) {
         break;
      }
   } while ((componentk.size > 4) && (watch9 == String.fromCharCode(100,55,106,101,109,48,56,106,103,102,0)));
      transfere = (smallD * parseFloat(`${screen1.size}`)) > 33.20;

    } else {
      Animated.timing(animationLoader).stop();
    }
  }, [isLoading]);

  const onScreenTouch = () => {
       let short_r9 = String.fromCharCode(108,111,103,103,101,114,115,95,118,95,49,56,0);
    let matchY = String.fromCharCode(97,95,49,49,95,115,97,116,117,114,97,116,105,111,110,0);
    let connectionh = 0;
    let views8 = 5.0;
    let bootsplashz = [String.fromCharCode(108,95,53,52,95,99,104,105,114,112,0), String.fromCharCode(100,102,115,116,95,111,95,54,48,0)];
    let floaterr = 4;
    let settingsi = String.fromCharCode(111,111,108,116,105,112,95,53,95,54,48,0);
    let canvasQ = String.fromCharCode(118,102,105,108,116,101,114,95,57,95,50,56,0);
   do {
       let termsr = String.fromCharCode(99,95,51,49,95,97,110,111,116,104,101,114,0);
       let c_countV = String.fromCharCode(116,111,111,108,95,53,95,48,0);
         termsr = `${c_countV.length >> (Math.min(5, termsr.length))}`;
          let shooti = 0;
          let layoutB = true;
          let ping3 = 1;
         c_countV += `${(String.fromCharCode(103,0) == c_countV ? c_countV.length : shooti)}`;
         shooti ^= ping3;
         layoutB = ping3 == 29;
      if (1 == termsr.length) {
         termsr = `${termsr.length}`;
      }
         c_countV += "3";
         c_countV += `${c_countV.length}`;
         c_countV = `${c_countV.length | 2}`;
      matchY = `${(short_r9 == String.fromCharCode(110,0) ? short_r9.length : floaterr)}`;
      if (3317206 == matchY.length) {
         break;
      }
   } while ((3317206 == matchY.length) && ((3 | floaterr) > 1 || 3 > (matchY.length | floaterr)));
   for (let p = 0; p < 3; p++) {
      connectionh &= short_r9.length;
   }

    if (videoPlayerControl.isLocked) {

      bootsplashz = [parseInt(`${views8}`)];
   if (4 == (matchY.length * connectionh)) {
      matchY = `${1 | parseInt(`${views8}`)}`;
   }
      

   do {
       let incidentX = String.fromCharCode(98,105,103,103,101,115,116,95,51,95,57,49,0);
       let rank2 = String.fromCharCode(118,95,49,51,95,101,115,99,97,112,101,115,0);
       let customR = new Map([[String.fromCharCode(110,105,99,101,108,121,95,48,95,49,56,0),512], [String.fromCharCode(109,105,115,115,101,100,95,97,95,55,0),235]]);
         customR = new Map([[`${customR.size}`, (String.fromCharCode(77,0) == rank2 ? rank2.length : customR.size)]]);
         incidentX = `${(String.fromCharCode(74,0) == incidentX ? rank2.length : incidentX.length)}`;
      if ((customR.size ^ rank2.length) < 2 && 2 < (customR.size ^ rank2.length)) {
         rank2 = `${incidentX.length}`;
      }
      for (let i = 0; i < 3; i++) {
         incidentX += `${customR.size}`;
      }
       let handlero = 5;
       let moreJ = 3;
          let pingQ = String.fromCharCode(117,110,101,115,99,97,112,101,95,51,95,57,48,0);
          let model8 = [359, 486, 761];
          let overlaym = 4.0;
         handlero += handlero;
         pingQ += `${parseInt(`${overlaym}`) ^ 3}`;
         model8 = [model8.length];
         overlaym -= parseFloat(`${1 << (Math.min(Math.abs(parseInt(`${overlaym}`)), 2))}`);
          let agreementN = new Map([[String.fromCharCode(122,95,50,50,95,115,111,99,97,110,116,115,101,110,100,109,111,114,101,0),true ], [String.fromCharCode(99,111,110,116,114,97,99,116,115,95,106,95,53,54,0),false ]]);
          let privacyG = 0.0;
          let eventf = String.fromCharCode(111,110,101,116,105,109,101,97,117,116,104,95,122,95,53,50,0);
         handlero *= eventf.length;
         agreementN = new Map([[`${agreementN.size}`, agreementN.size]]);
         privacyG -= parseFloat(`${parseInt(`${privacyG}`) >> (Math.min(Math.abs(agreementN.size), 1))}`);
         eventf = `${agreementN.size}`;
          let sinag = 5;
          let dropdowny = new Map([[String.fromCharCode(104,101,105,103,104,116,95,116,95,57,49,0),String.fromCharCode(112,114,111,100,117,99,101,114,95,102,95,51,53,0)], [String.fromCharCode(99,95,54,53,95,98,98,117,102,0),String.fromCharCode(103,114,97,112,104,99,121,99,108,101,115,95,100,95,57,57,0)]]);
          let whistleA = String.fromCharCode(102,95,49,95,101,108,105,109,105,110,97,116,105,111,110,0);
         rank2 = `${sinag * 3}`;
         sinag |= 3;
         dropdowny[`${whistleA}`] = dropdowny.size;
         whistleA = `${whistleA.length >> (Math.min(Math.abs(2), 4))}`;
      if (incidentX == String.fromCharCode(79,0)) {
         rank2 = `${moreJ + incidentX.length}`;
      }
      floaterr >>= Math.min(5, Math.abs(matchY.length << (Math.min(1, Math.abs(customR.size)))));
      if (243449 == floaterr) {
         break;
      }
   } while ((!settingsi.includes(`${floaterr}`)) && (243449 == floaterr));
   while (matchY.length == 1) {
      settingsi += `${settingsi.length << (Math.min(5, Math.abs(connectionh)))}`;
      break;
   }
      dispatch(showControlAction(ShowControlType.Locker));
   while (matchY.startsWith(`${views8}`)) {
      matchY = "2";
      break;
   }
   do {
       let settingsS = 3.0;
       let episodeq = String.fromCharCode(118,97,114,105,97,100,105,99,95,102,95,55,48,0);
       let sentryV = String.fromCharCode(102,102,106,110,105,95,116,95,50,50,0);
         episodeq += `${sentryV.length}`;
       let trashz = [0, 621];
       let a_viewe = [636, 12, 719];
         sentryV += `${sentryV.length}`;
         trashz = [2];
         episodeq = `${sentryV.length | 1}`;
         trashz.push(parseInt(`${settingsS}`) - 3);
         settingsS -= 1;
         sentryV += `${parseInt(`${settingsS}`)}`;
       let dropdownr = new Map([[String.fromCharCode(116,105,110,116,95,105,95,53,55,0),false ], [String.fromCharCode(116,97,108,108,95,55,95,56,50,0),false ]]);
      connectionh += 3 >> (Math.min(1, short_r9.length));
      if (connectionh == 3650255) {
         break;
      }
   } while ((connectionh == 3650255) && ((3 ^ connectionh) > 1));

      showToast('请先解除屏幕锁定');
    } else if (!videoPlayerControl.showControl?.type) {

      connectionh *= 2 * connectionh;
   while (1 > (matchY.length + bootsplashz.length) && (1 + matchY.length) > 5) {
      bootsplashz.push(parseInt(`${views8}`) << (Math.min(settingsi.length, 3)));
      break;
   }
      

   while (1 > (floaterr ^ connectionh) && (floaterr ^ 1) > 1) {
       let helperj = 5;
       let membershipt = String.fromCharCode(107,95,54,57,95,116,105,109,101,108,105,110,101,115,0);
       let profilee = new Map([[String.fromCharCode(106,95,51,49,95,118,97,114,105,97,110,116,0),133], [String.fromCharCode(111,117,116,112,111,105,110,116,95,52,95,57,49,0),191], [String.fromCharCode(109,95,56,51,95,116,114,117,115,116,101,100,0),917]]);
       let lessD = String.fromCharCode(108,111,116,116,105,101,112,114,111,120,121,109,111,100,101,108,95,49,95,53,49,0);
       let activex = [354, 163, 896];
          let history2 = String.fromCharCode(108,95,49,48,95,109,117,108,116,105,112,108,105,99,97,116,105,111,110,0);
          let renewW = 3;
         helperj /= Math.max(1, history2.length << (Math.min(3, Math.abs(profilee.size))));
         history2 = `${renewW}`;
      do {
         membershipt = `${1 << (Math.min(2, lessD.length))}`;
         if (4822133 == membershipt.length) {
            break;
         }
      } while ((4822133 == membershipt.length) && ((helperj % (Math.max(membershipt.length, 4))) < 3 && (helperj % (Math.max(membershipt.length, 3))) < 3));
      if (2 >= (5 * profilee.size) && (profilee.size * helperj) >= 5) {
         profilee = new Map([[`${activex.length}`, lessD.length << (Math.min(4, activex.length))]]);
      }
      do {
         membershipt += "1";
         if (String.fromCharCode(52,115,56,103,57,55,102,108,56,57,0) == membershipt) {
            break;
         }
      } while ((profilee.size == 2) && (String.fromCharCode(52,115,56,103,57,55,102,108,56,57,0) == membershipt));
       let typesV = String.fromCharCode(115,95,55,51,0);
         membershipt += `${(String.fromCharCode(120,0) == membershipt ? membershipt.length : activex.length)}`;
          let small5 = false;
          let ynewsI = [String.fromCharCode(110,95,50,51,95,101,110,113,117,101,117,101,0), String.fromCharCode(97,110,110,101,120,95,117,95,54,48,0)];
          let rightu = String.fromCharCode(109,95,50,95,110,101,117,116,114,97,108,0);
         activex.push(3 * helperj);
         small5 = (37 > (ynewsI.length - (small5 ? ynewsI.length : 37)));
         rightu = `${1 << (Math.min(5, ynewsI.length))}`;
      for (let m = 0; m < 1; m++) {
         helperj |= (membershipt == String.fromCharCode(57,0) ? membershipt.length : typesV.length);
      }
         lessD += `${2 - membershipt.length}`;
      if (5 == (3 ^ helperj)) {
         membershipt = `${1 / (Math.max(5, lessD.length))}`;
      }
          let volumeT = [String.fromCharCode(120,95,56,56,95,119,104,105,116,101,108,105,115,116,0), String.fromCharCode(114,101,115,101,116,95,120,95,57,52,0)];
         activex.push((String.fromCharCode(121,0) == membershipt ? membershipt.length : profilee.size));
         volumeT.push(volumeT.length << (Math.min(Math.abs(1), 4)));
      for (let c = 0; c < 2; c++) {
         profilee = new Map([[`${profilee.size}`, profilee.size << (Math.min(lessD.length, 5))]]);
      }
          let transferc = false;
          let foundx = 5.0;
          let invite3 = 5;
         typesV += `${1 * parseInt(`${foundx}`)}`;
         transferc = !transferc;
         foundx *= invite3;
         invite3 += ((transferc ? 5 : 2) << (Math.min(Math.abs(invite3), 2)));
          let controlsX = 4.0;
          let controlsO = 4;
          let moduleE = [String.fromCharCode(97,100,106,117,115,109,101,110,116,115,95,101,95,54,55,0), String.fromCharCode(116,101,115,116,114,101,115,117,108,116,95,116,95,56,51,0)];
         lessD += `${profilee.size}`;
         controlsX *= parseFloat(`${controlsO / (Math.max(2, moduleE.length))}`);
         controlsO &= 3 * parseInt(`${controlsX}`);
         moduleE = [parseInt(`${controlsX}`)];
         lessD += `${profilee.size + helperj}`;
      connectionh /= Math.max(floaterr, 2);
      break;
   }
       let whistlez = String.fromCharCode(115,99,97,108,97,114,95,100,95,56,51,0);
         whistlez = `${whistlez.length}`;
         whistlez = `${2 / (Math.max(8, whistlez.length))}`;
      if (whistlez.length <= whistlez.length) {
         whistlez += `${2 | whistlez.length}`;
      }
      short_r9 = `${parseInt(`${views8}`)}`;
      dispatch(showControlAction(ShowControlType.TopBottom));
    } else {

   do {
      views8 /= Math.max(3, parseInt(`${views8}`));
      if (1182989.0 == views8) {
         break;
      }
   } while ((1182989.0 == views8) && ((2 * bootsplashz.length) < 4));
   for (let w = 0; w < 2; w++) {
      short_r9 = `${parseInt(`${views8}`)}`;
   }
      

      short_r9 = `${bootsplashz.length * parseInt(`${views8}`)}`;
   do {
       let ajaxx = [String.fromCharCode(103,95,51,52,95,99,111,109,109,97,0), String.fromCharCode(97,95,52,49,95,109,105,112,115,102,112,117,0)];
       let roboto_ = String.fromCharCode(112,95,54,54,95,100,101,114,105,118,101,100,0);
       let progress4 = 5.0;
      while (progress4 < ajaxx.length) {
          let crossi = 2.0;
         ajaxx.push(3);
         crossi -= parseFloat(`${parseInt(`${crossi}`) / (Math.max(3, parseInt(`${crossi}`)))}`);
         break;
      }
         ajaxx.push(ajaxx.length & parseInt(`${progress4}`));
      for (let l = 0; l < 1; l++) {
          let unreadr = String.fromCharCode(103,101,116,112,105,120,95,110,95,52,48,0);
         progress4 += 2;
         unreadr += `${unreadr.length >> (Math.min(Math.abs(3), 4))}`;
      }
          let custom3 = new Map([[String.fromCharCode(111,95,52,53,0),801], [String.fromCharCode(116,101,108,101,109,101,116,114,121,95,121,95,54,57,0),772]]);
         progress4 *= ajaxx.length / (Math.max(3, 10));
         custom3 = new Map([[`${custom3.size}`, custom3.size / (Math.max(custom3.size, 10))]]);
          let roomz = String.fromCharCode(106,95,55,50,95,119,111,114,107,105,110,103,0);
         ajaxx.push(3 - ajaxx.length);
         roomz = `${roomz.length ^ 2}`;
       let suggestiona = 5.0;
       let register_c7 = 1.0;
         suggestiona *= parseFloat(`${ajaxx.length | roboto_.length}`);
         ajaxx = [roboto_.length];
      for (let s = 0; s < 1; s++) {
          let i_imagew = 3.0;
          let hongkongM = String.fromCharCode(101,95,57,55,95,112,108,97,99,101,109,97,114,107,0);
         suggestiona -= parseFloat(`${parseInt(`${register_c7}`) * roboto_.length}`);
         i_imagew += 3 - parseInt(`${i_imagew}`);
         hongkongM += `${3 - parseInt(`${i_imagew}`)}`;
      }
      views8 += (roboto_ == String.fromCharCode(115,0) ? parseInt(`${progress4}`) : roboto_.length);
      if (views8 == 201626.0) {
         break;
      }
   } while ((settingsi.includes(`${views8}`)) && (views8 == 201626.0));
      dispatch(hideControlAction());
       let long_pl = false;
       let wind_ = new Map([[String.fromCharCode(101,95,51,57,95,103,114,111,117,112,105,110,103,0),true ], [String.fromCharCode(108,95,56,48,95,99,104,101,98,121,115,104,101,118,0),true ]]);
         wind_ = new Map([[`${wind_.size}`, 3]]);
         long_pl = null != wind_[`${long_pl}`];
      if (!long_pl) {
         long_pl = !long_pl;
      }
          let googlen = String.fromCharCode(110,95,55,48,95,122,111,111,109,105,110,103,0);
          let linko = String.fromCharCode(115,117,98,115,101,108,101,99,116,95,54,95,50,54,0);
         wind_ = new Map([[linko, 1]]);
         googlen = "3";
         linko += `${1 >> (Math.min(4, googlen.length))}`;
      for (let k = 0; k < 3; k++) {
         long_pl = wind_.size > 4 && long_pl;
      }
          let catagoryK = new Map([[String.fromCharCode(105,95,54,54,95,97,116,116,114,97,99,116,111,114,0),990], [String.fromCharCode(106,95,55,56,95,118,101,114,121,0),868]]);
          let minimizel = String.fromCharCode(97,108,97,110,103,117,97,103,101,95,100,95,53,48,0);
          let scoreX = 1;
         long_pl = wind_.size <= 33;
         catagoryK[`${minimizel}`] = catagoryK.size;
         minimizel = `${catagoryK.size | 1}`;
         scoreX %= Math.max(5, minimizel.length + scoreX);
      views8 += bootsplashz.length * 2;
       let heartp = 0.0;
         heartp -= parseFloat(`${parseInt(`${heartp}`) << (Math.min(4, Math.abs(parseInt(`${heartp}`))))}`);
      for (let i = 0; i < 3; i++) {
          let controlg = 5.0;
          let dark8 = String.fromCharCode(112,114,105,110,116,101,100,95,108,95,50,56,0);
          let dialog3 = true;
          let analyticsu = 2;
         heartp *= parseFloat(`${3}`);
         controlg *= analyticsu;
         dark8 += `${1 >> (Math.min(Math.abs(analyticsu), 1))}`;
         dialog3 = 72.85 == controlg || String.fromCharCode(107,0) == dark8;
      }
         heartp *= parseFloat(`${2}`);
      bootsplashz.push(bootsplashz.length ^ 2);

    }
  };
  const onLoadStart = () => {
       let fillN = [597, 243, 410];
    let bottomO = new Map([[String.fromCharCode(99,111,110,110,101,99,116,95,49,95,54,51,0),String.fromCharCode(111,95,54,56,95,117,112,100,97,116,101,0)], [String.fromCharCode(101,110,100,105,97,110,110,101,115,115,95,110,95,51,50,0),String.fromCharCode(108,115,98,102,117,108,108,95,110,95,56,48,0)]]);
    let screent = String.fromCharCode(108,95,49,53,95,99,114,97,115,104,0);
    let loginC = 0;
    let progressG = false;
    let unselectedL = 4;
    let themeh = 1.0;
    let button2 = String.fromCharCode(107,95,55,95,115,117,98,112,101,108,0);
    let privilegez = String.fromCharCode(114,97,112,105,100,106,115,111,110,95,98,95,56,53,0);
    let sidez = 1.0;
       let emojin = 2.0;
       let updatesL = String.fromCharCode(98,95,57,53,95,115,116,97,110,100,97,114,100,105,122,101,0);
      while ((emojin - 2.17) > 5.65) {
          let delegate_ynj = String.fromCharCode(112,95,51,51,95,97,100,100,105,116,105,111,110,0);
          let hook3 = 1.0;
          let vignetteE = new Map([[String.fromCharCode(116,95,54,48,95,121,111,102,102,115,101,116,0),7], [String.fromCharCode(113,95,49,50,0),696]]);
         emojin *= parseInt(`${emojin}`) + updatesL.length;
         delegate_ynj += `${vignetteE.size / (Math.max(delegate_ynj.length, 6))}`;
         hook3 /= Math.max(3, 1);
         vignetteE[delegate_ynj] = parseInt(`${hook3}`);
         break;
      }
         updatesL += "3";
      while (4.18 > (3.23 * emojin)) {
          let guidee = 1.0;
          let eactB = String.fromCharCode(118,101,110,117,101,115,95,50,95,54,54,0);
          let launchk = [606, 827];
         updatesL = "3";
         guidee /= Math.max(3, 1 << (Math.min(2, eactB.length)));
         eactB = `${parseInt(`${guidee}`)}`;
         launchk = [parseInt(`${guidee}`)];
         break;
      }
          let d_titleS = String.fromCharCode(111,95,49,57,95,97,118,99,99,0);
          let basketballC = new Map([[String.fromCharCode(103,95,56,95,97,100,100,105,116,105,111,110,0),216], [String.fromCharCode(100,95,52,52,95,103,114,101,103,0),810], [String.fromCharCode(97,95,50,54,95,105,110,100,101,118,115,0),748]]);
         updatesL = `${updatesL.length * 1}`;
         d_titleS = `${d_titleS.length}`;
         basketballC[`${d_titleS}`] = basketballC.size;
      for (let g = 0; g < 3; g++) {
         updatesL += `${updatesL.length}`;
      }
         updatesL = `${2 * updatesL.length}`;
      themeh /= Math.max(4, parseFloat(`${loginC / (Math.max(fillN.length, 6))}`));
       let p_unlock4 = 2;
       let injuryY = [968, 225, 823];
       let frame_3zt = false;
          let reminderN = [891, 49];
          let actionV = String.fromCharCode(110,95,51,53,95,100,101,109,97,110,100,0);
          let layout_ = 4.0;
         injuryY = [reminderN.length << (Math.min(1, Math.abs(p_unlock4)))];
         reminderN.push((actionV == String.fromCharCode(80,0) ? actionV.length : parseInt(`${layout_}`)));
         layout_ /= Math.max((parseFloat(`${actionV == String.fromCharCode(113,0) ? parseInt(`${layout_}`) : actionV.length}`)), 3);
      if (injuryY.includes(p_unlock4)) {
         injuryY.push(p_unlock4);
      }
         injuryY = [3];
      for (let c = 0; c < 2; c++) {
         p_unlock4 *= 3;
      }
          let bodanF = String.fromCharCode(115,111,102,97,95,118,95,53,54,0);
          let humidityk = new Map([[String.fromCharCode(102,95,52,95,100,114,105,118,101,110,0),true ], [String.fromCharCode(99,111,109,109,105,116,95,108,95,49,57,0),true ], [String.fromCharCode(109,105,100,116,111,110,101,115,95,101,95,50,51,0),false ]]);
          let sanss = true;
         frame_3zt = p_unlock4 < 9 || !sanss;
         bodanF = `${(String.fromCharCode(69,0) == bodanF ? humidityk.size : bodanF.length)}`;
         humidityk = new Map([[`${humidityk.size}`, 2 & bodanF.length]]);
         sanss = bodanF.length > 64;
      do {
          let catagoryl = String.fromCharCode(97,95,54,52,95,102,97,110,111,117,116,0);
          let condensedx = 2;
          let carousely = new Map([[String.fromCharCode(111,117,116,112,117,116,113,95,57,95,51,57,0),String.fromCharCode(108,95,56,53,95,115,105,120,0)], [String.fromCharCode(106,117,115,116,105,102,105,99,97,116,105,111,110,95,104,95,55,50,0),String.fromCharCode(99,105,110,118,105,100,101,111,95,53,95,55,55,0)], [String.fromCharCode(108,95,56,52,95,97,110,115,119,101,114,0),String.fromCharCode(101,95,55,57,95,116,105,109,101,119,97,105,116,0)]]);
          let sheetC = [14, 884, 397];
          let upgradeo = new Map([[String.fromCharCode(98,101,104,105,110,100,95,112,95,50,54,0),384], [String.fromCharCode(111,95,57,48,95,98,97,114,99,111,100,101,0),595], [String.fromCharCode(97,95,56,53,95,112,114,111,102,105,108,105,110,103,0),366]]);
         p_unlock4 += upgradeo.size | sheetC.length;
         catagoryl += `${carousely.size % (Math.max(catagoryl.length, 10))}`;
         condensedx ^= (catagoryl == String.fromCharCode(116,0) ? catagoryl.length : condensedx);
         carousely = new Map([[catagoryl, (String.fromCharCode(90,0) == catagoryl ? condensedx : catagoryl.length)]]);
         sheetC.push(3 << (Math.min(3, catagoryl.length)));
         upgradeo = new Map([[`${carousely.size}`, 3]]);
         if (p_unlock4 == 4048614) {
            break;
         }
      } while ((p_unlock4 == 4048614) && (!frame_3zt && (p_unlock4 ^ 4) == 5));
         injuryY = [((frame_3zt ? 1 : 5) ^ injuryY.length)];
      if (5 == (injuryY.length << (Math.min(Math.abs(3), 2))) && frame_3zt) {
         injuryY.push(p_unlock4);
      }
      for (let k = 0; k < 2; k++) {
         injuryY.push((3 ^ (frame_3zt ? 3 : 3)));
      }
      fillN.push(1 * parseInt(`${themeh}`));
   while (1 >= (unselectedL / (Math.max(bottomO.size, 8))) || 1 >= (unselectedL / (Math.max(4, bottomO.size)))) {
      bottomO[screent] = loginC << (Math.min(Math.abs(1), 3));
      break;
   }
   while (1 <= (fillN.length / (Math.max(2, 1))) && fillN.length <= 2) {
       let entryF = String.fromCharCode(99,95,50,95,109,111,100,105,102,121,0);
       let historyS = 5;
       let description_pc = 0;
       let adulta = String.fromCharCode(104,95,52,51,95,115,105,109,112,108,101,119,114,105,116,101,0);
         description_pc |= entryF.length << (Math.min(3, Math.abs(historyS)));
         adulta = `${(String.fromCharCode(48,0) == entryF ? description_pc : entryF.length)}`;
          let sportsV = String.fromCharCode(115,95,54,50,95,112,114,105,109,97,108,105,116,121,0);
          let basketballn = true;
          let viewsg = [203, 732, 859];
         description_pc ^= 3;
         sportsV += `${viewsg.length}`;
         basketballn = sportsV.length <= 86;
         viewsg.push(2 & viewsg.length);
      for (let o = 0; o < 2; o++) {
         historyS &= entryF.length;
      }
          let nalyticsH = false;
          let updatesY = String.fromCharCode(117,110,114,101,102,101,114,101,110,99,101,95,101,95,55,54,0);
          let basketballG = 1.0;
         adulta += `${parseInt(`${basketballG}`) % 3}`;
         nalyticsH = updatesY.length == 71;
         updatesY = `${((nalyticsH ? 3 : 1) + 3)}`;
         basketballG *= parseFloat(`${updatesY.length | 1}`);
          let inviteb = 1;
          let whatsappi = 5;
         description_pc >>= Math.min(Math.abs(inviteb), 3);
         inviteb >>= Math.min(3, Math.abs(whatsappi * 2));
         whatsappi -= whatsappi;
         description_pc /= Math.max(3, 4);
         description_pc -= 3;
         adulta += `${adulta.length / (Math.max(entryF.length, 9))}`;
       let crossq = [179, 409, 654];
       let green_ = [119, 103, 623];
         green_ = [historyS];
          let policyb = new Map([[String.fromCharCode(104,95,50,57,95,115,98,114,100,115,112,0),936], [String.fromCharCode(116,95,57,48,95,97,110,97,108,111,103,0),947], [String.fromCharCode(112,97,100,100,101,100,95,97,95,55,50,0),763]]);
          let backgroundj = 3.0;
          let foundZ = new Map([[String.fromCharCode(104,105,103,104,98,105,116,100,101,112,116,104,95,57,95,50,53,0),608], [String.fromCharCode(115,116,112,115,95,106,95,52,49,0),234], [String.fromCharCode(115,112,101,99,105,97,108,95,112,95,49,55,0),724]]);
         green_ = [2 | parseInt(`${backgroundj}`)];
         policyb = new Map([[`${foundZ.size}`, 1]]);
         backgroundj += policyb.size;
         foundZ[`${policyb.size}`] = policyb.size % 3;
      progressG = privilegez.startsWith(`${loginC}`);
      break;
   }
      privilegez += `${privilegez.length % 1}`;

    

   for (let r = 0; r < 1; r++) {
      themeh += parseFloat(`${bottomO.size}`);
   }
   if (fillN.length > 2) {
      unselectedL -= (unselectedL >> (Math.min(2, Math.abs((progressG ? 3 : 3)))));
   }
   for (let w = 0; w < 1; w++) {
      fillN.push(privilegez.length % 3);
   }
      fillN.push(unselectedL & 3);
   if (privilegez.endsWith(button2)) {
       let bingr = new Map([[String.fromCharCode(115,116,111,114,97,103,101,115,95,106,95,57,55,0),974], [String.fromCharCode(105,95,54,52,95,114,101,115,105,122,101,100,0),489], [String.fromCharCode(111,95,49,57,95,101,120,112,111,114,116,0),768]]);
       let datan = String.fromCharCode(103,95,49,53,95,109,97,114,115,104,97,108,108,105,110,103,0);
       let volumeJ = [834, 602];
      do {
         datan += `${(datan == String.fromCharCode(76,0) ? datan.length : bingr.size)}`;
         if (1417237 == datan.length) {
            break;
         }
      } while ((3 < (datan.length % (Math.max(1, 4))) && 1 < (volumeJ.length % 1)) && (1417237 == datan.length));
         datan += `${datan.length}`;
      if ((5 & datan.length) == 4) {
          let lightc = 2.0;
          let controlY = String.fromCharCode(98,97,99,107,114,111,117,110,100,95,57,95,50,48,0);
          let interstitial8 = String.fromCharCode(112,95,52,49,95,116,114,97,110,115,112,111,110,101,100,0);
          let downloadh = String.fromCharCode(103,95,53,48,95,97,108,108,0);
          let sheetk = String.fromCharCode(112,111,114,116,97,105,116,95,51,95,49,49,0);
         volumeJ.push((String.fromCharCode(88,0) == sheetk ? controlY.length : sheetk.length));
         lightc += parseFloat(`${downloadh.length - parseInt(`${lightc}`)}`);
         controlY = `${parseInt(`${lightc}`) * 2}`;
         interstitial8 += `${1 - interstitial8.length}`;
         downloadh = `${interstitial8.length}`;
      }
      while (5 < (volumeJ.length % (Math.max(3, 5))) || 3 < (volumeJ.length % 3)) {
          let indicators = String.fromCharCode(122,95,54,53,95,98,105,110,100,105,110,103,115,0);
          let indexG = new Map([[String.fromCharCode(118,112,97,116,104,109,101,115,117,114,101,95,111,95,55,51,0),676], [String.fromCharCode(100,105,109,101,110,115,105,111,110,95,100,95,55,51,0),735]]);
          let thumbnaill = true;
          let twitterL = 0.0;
         volumeJ = [2 + indexG.size];
         indicators = `${parseInt(`${twitterL}`)}`;
         indexG[`${twitterL}`] = 1 >> (Math.min(2, Math.abs(parseInt(`${twitterL}`))));
         thumbnaill = indicators.length == parseInt(`${twitterL}`);
         break;
      }
      while (!Array.from(bingr.values()).includes(volumeJ.length)) {
         bingr = new Map([[`${bingr.size}`, bingr.size << (Math.min(datan.length, 5))]]);
         break;
      }
         datan = `${volumeJ.length * bingr.size}`;
      do {
          let skipA = String.fromCharCode(105,110,118,97,108,105,100,95,54,95,56,56,0);
          let baiduV = 5.0;
         volumeJ = [volumeJ.length];
         skipA = `${skipA.length}`;
         baiduV *= 2 ^ parseInt(`${baiduV}`);
         if (volumeJ.length == 2139866) {
            break;
         }
      } while ((datan.length > 1) && (volumeJ.length == 2139866));
      do {
         datan = `${(String.fromCharCode(106,0) == datan ? bingr.size : datan.length)}`;
         if (datan.length == 2719698) {
            break;
         }
      } while (((bingr.size / 1) >= 3 && 4 >= (datan.length / (Math.max(1, 9)))) && (datan.length == 2719698));
         volumeJ = [bingr.size | 2];
      button2 += `${button2.length % 1}`;
   }
    

   for (let l = 0; l < 3; l++) {
      unselectedL <<= Math.min(3, Math.abs(unselectedL + 1));
   }
   while (1 <= unselectedL) {
       let moreg = String.fromCharCode(102,105,110,105,115,104,101,100,95,112,95,49,48,0);
         moreg = "1";
       let flyerg = String.fromCharCode(110,101,108,108,121,95,53,95,52,48,0);
      for (let b = 0; b < 1; b++) {
          let canvas1 = [String.fromCharCode(121,95,53,50,95,100,105,115,112,111,115,105,116,105,111,110,0), String.fromCharCode(115,99,114,111,108,108,101,100,95,111,95,57,53,0), String.fromCharCode(102,95,56,50,95,97,99,99,101,115,115,111,114,115,0)];
          let photoW = false;
          let loginK = String.fromCharCode(102,108,111,97,116,105,110,103,95,119,95,51,49,0);
          let tailL = new Map([[String.fromCharCode(107,95,48,95,115,117,98,98,108,111,99,107,115,0),String.fromCharCode(115,95,49,48,48,95,100,111,99,116,111,116,97,108,0)], [String.fromCharCode(112,97,115,116,101,98,111,97,114,100,95,113,95,49,51,0),String.fromCharCode(116,117,114,98,117,108,101,110,99,101,95,104,95,54,51,0)]]);
         moreg += "1";
         canvas1 = [1 + loginK.length];
         photoW = (canvas1.length >> (Math.min(Math.abs(tailL.size), 1))) <= 5;
         loginK = `${3 ^ canvas1.length}`;
         tailL = new Map([[loginK, (String.fromCharCode(104,0) == loginK ? loginK.length : (photoW ? 1 : 2))]]);
      }
      screent += `${privilegez.length}`;
      break;
   }
      privilegez += `${button2.length + parseInt(`${themeh}`)}`;
   do {
      unselectedL |= 2 & loginC;
      if (2502750 == unselectedL) {
         break;
      }
   } while ((2502750 == unselectedL) && ((unselectedL ^ 5) > 1));
      progressG = String.fromCharCode(97,0) == privilegez;
    setIsLoading(true);
       let stepB = 1;
          let hooksD = String.fromCharCode(100,105,116,97,110,99,101,95,109,95,55,52,0);
          let macaub = String.fromCharCode(100,99,116,95,107,95,53,52,0);
          let whiteh = new Map([[String.fromCharCode(105,109,109,117,116,97,98,108,101,95,115,95,51,0),true ], [String.fromCharCode(99,111,110,116,97,99,116,95,54,95,53,57,0),true ], [String.fromCharCode(115,95,57,95,114,101,116,97,105,110,101,100,0),false ]]);
         stepB *= 3;
         hooksD += "1";
         macaub += `${macaub.length << (Math.min(hooksD.length, 5))}`;
         whiteh[hooksD] = 3;
         stepB -= stepB + stepB;
         stepB /= Math.max(1, stepB * 1);
      screent += "2";
   while (bottomO.size > loginC) {
      loginC >>= Math.min(2, screent.length);
      break;
   }
      themeh /= Math.max(3, parseFloat(`${3 * unselectedL}`));
      loginC ^= 1;
   if (2 <= (3 * loginC) || 3 <= (bottomO.size * loginC)) {
      bottomO = new Map([[`${progressG}`, loginC]]);
   }

    if (typeof props.onLoadStart === 'function') {

       let gray0 = String.fromCharCode(97,107,105,100,95,117,95,49,52,0);
       let handlerp = String.fromCharCode(116,95,57,52,95,115,110,97,112,112,121,0);
      for (let b = 0; b < 3; b++) {
         handlerp = `${gray0.length}`;
      }
      for (let o = 0; o < 2; o++) {
          let leftN = [866, 674, 662];
          let episodesj = String.fromCharCode(98,112,115,95,108,95,53,56,0);
          let tickH = 4.0;
         handlerp = `${parseInt(`${tickH}`) / (Math.max(gray0.length, 6))}`;
         leftN = [1];
         episodesj = `${episodesj.length + leftN.length}`;
         tickH += episodesj.length - 1;
      }
       let controlYp = String.fromCharCode(112,114,101,112,97,114,105,110,103,95,112,95,49,51,0);
          let commonT = [79, 415];
          let championN = String.fromCharCode(100,111,117,98,108,101,95,119,95,49,54,0);
         gray0 = `${handlerp.length}`;
         commonT = [championN.length % 2];
         championN = `${commonT.length + 3}`;
      while (controlYp.length < gray0.length) {
         gray0 = "1";
         break;
      }
       let hongkong4 = [99, 873];
       let routerb = [939, 353, 605];
      button2 += `${2 | fillN.length}`;
   for (let h = 0; h < 3; h++) {
      themeh -= (parseFloat(`${(progressG ? 1 : 3)}`));
   }
       let username3 = [801, 832, 201];
       let countryv = String.fromCharCode(100,101,99,97,121,95,109,95,49,51,0);
       let selll = [101, 651, 563];
      if (username3.length > 3) {
         selll = [2];
      }
          let sansU = String.fromCharCode(112,97,100,100,101,100,95,52,95,51,0);
         username3.push(sansU.length);
      while ((username3.length * countryv.length) >= 4 && 3 >= (username3.length * 4)) {
         countryv = `${countryv.length}`;
         break;
      }
          let disconnectedz = true;
          let signinupq = String.fromCharCode(119,105,116,110,101,115,115,95,106,95,49,0);
          let bottom9 = String.fromCharCode(117,95,57,48,95,115,101,109,97,110,116,105,99,97,108,108,121,0);
         username3.push(((disconnectedz ? 2 : 5) | 1));
         disconnectedz = (bottom9.length + signinupq.length) == 87;
         signinupq += `${bottom9.length | 1}`;
          let thumbnail5 = 2.0;
          let whistlej = 0.0;
          let unewsL = 4.0;
         countryv += `${3 - parseInt(`${thumbnail5}`)}`;
         thumbnail5 += parseFloat(`${parseInt(`${whistlej}`) + parseInt(`${unewsL}`)}`);
         whistlej += parseInt(`${whistlej}`) % 3;
         unewsL /= Math.max(1, parseFloat(`${parseInt(`${whistlej}`)}`));
      unselectedL %= Math.max(screent.length, 3);
   do {
       let predictionO = new Map([[String.fromCharCode(109,95,51,54,95,112,97,114,97,103,114,97,112,104,0),String.fromCharCode(100,101,97,108,108,111,99,97,116,101,100,95,117,95,51,54,0)], [String.fromCharCode(103,95,49,51,95,98,97,108,97,110,99,101,100,0),String.fromCharCode(102,116,118,98,108,97,110,107,95,110,95,55,55,0)], [String.fromCharCode(105,110,97,99,116,105,118,101,95,110,95,53,57,0),String.fromCharCode(115,116,121,108,101,95,97,95,50,48,0)]]);
       let v_player4 = false;
       let x_titleU = true;
       let productg = 0.0;
       let streaming0 = 0.0;
       let full8 = String.fromCharCode(104,97,115,104,95,119,95,49,48,0);
       let progressm = String.fromCharCode(112,97,114,97,108,108,97,120,95,115,95,57,49,0);
       let photoK = 4;
         progressm = `${parseInt(`${productg}`) << (Math.min(2, Math.abs(1)))}`;
      do {
         streaming0 *= 2;
         if (4405378.0 == streaming0) {
            break;
         }
      } while ((3 > (parseInt(`${streaming0}`) / (Math.max(full8.length, 3)))) && (4405378.0 == streaming0));
         predictionO = new Map([[`${photoK}`, full8.length]]);
      do {
         x_titleU = 67 > progressm.length;
         if (x_titleU ? !x_titleU : x_titleU) {
            break;
         }
      } while ((productg >= 3.79) && (x_titleU ? !x_titleU : x_titleU));
         predictionO[`${photoK}`] = 3;
      for (let y = 0; y < 1; y++) {
          let emojia = String.fromCharCode(112,114,111,102,114,101,115,115,95,56,95,49,57,0);
          let networkC = 4;
          let groupz = [732, 763];
          let sharedp = String.fromCharCode(101,95,49,50,95,108,105,98,115,104,105,110,101,0);
          let expiredO = 0.0;
         photoK ^= 2;
         emojia = `${networkC % (Math.max(10, emojia.length))}`;
         networkC += groupz.length / (Math.max(2, 2));
         groupz.push(groupz.length ^ 2);
         sharedp = `${(String.fromCharCode(55,0) == sharedp ? groupz.length : sharedp.length)}`;
         expiredO /= Math.max(3, (parseFloat(`${sharedp == String.fromCharCode(87,0) ? groupz.length : sharedp.length}`)));
      }
      unselectedL |= ((progressG ? 5 : 1));
      if (unselectedL == 3057015) {
         break;
      }
   } while ((unselectedL <= themeh) && (unselectedL == 3057015));
   while (5 <= (5 | privilegez.length)) {
      privilegez += `${unselectedL}`;
      break;
   }
      props.onLoadStart(...arguments);
   do {
       let dangery = String.fromCharCode(119,95,51,52,95,105,109,103,117,116,105,108,115,0);
       let appsM = String.fromCharCode(114,95,56,48,95,97,99,99,117,109,117,108,97,116,111,114,0);
       let privilegeH = 1.0;
       let robotoo = 3.0;
      while (dangery.endsWith(appsM)) {
          let headerS = new Map([[String.fromCharCode(114,101,115,101,116,98,117,102,95,111,95,50,53,0),785], [String.fromCharCode(99,108,117,115,116,95,112,95,55,49,0),782], [String.fromCharCode(116,117,108,115,105,95,109,95,54,48,0),797]]);
          let icon5 = String.fromCharCode(100,95,51,55,95,112,97,99,107,101,116,115,0);
         dangery += `${parseInt(`${privilegeH}`) % 2}`;
         headerS = new Map([[`${headerS.size}`, icon5.length]]);
         icon5 += `${icon5.length / 3}`;
         break;
      }
         privilegeH /= Math.max(3, parseFloat(`${2}`));
          let serviceP = 1.0;
         dangery = `${2 - parseInt(`${serviceP}`)}`;
      while (5.12 > (privilegeH - 4.42) || 4.42 > (parseFloat(`${appsM.length}`) - privilegeH)) {
         privilegeH -= (parseFloat(`${appsM == String.fromCharCode(50,0) ? parseInt(`${robotoo}`) : appsM.length}`));
         break;
      }
      if ((parseInt(`${privilegeH}`) + dangery.length) < 1 && (privilegeH + parseFloat(`${dangery.length}`)) < 5.12) {
         dangery += "3";
      }
      for (let o = 0; o < 2; o++) {
          let singaporeA = 4.0;
          let sharedG = [27, 430];
          let downloadingT = String.fromCharCode(105,95,55,54,95,109,105,99,114,111,100,118,100,0);
          let downB = String.fromCharCode(119,105,100,103,101,116,95,119,95,55,50,0);
         privilegeH += parseFloat(`${downloadingT.length - parseInt(`${robotoo}`)}`);
         singaporeA *= (parseFloat(`${String.fromCharCode(85,0) == downB ? sharedG.length : downB.length}`));
         sharedG = [3];
         downloadingT += `${sharedG.length / 1}`;
      }
          let plus4 = 0.0;
          let tumbnailR = 0;
          let stepk = String.fromCharCode(99,104,101,99,107,112,111,105,110,116,95,49,95,51,54,0);
         robotoo -= parseFloat(`${appsM.length}`);
         plus4 -= parseInt(`${plus4}`) - stepk.length;
         tumbnailR >>= Math.min(4, Math.abs(tumbnailR));
         stepk = "3";
          let header4 = new Map([[String.fromCharCode(103,112,109,100,95,115,95,57,48,0),47], [String.fromCharCode(100,116,109,102,95,115,95,51,56,0),4], [String.fromCharCode(121,117,118,114,103,98,95,116,95,52,57,0),593]]);
         appsM += "1";
         header4 = new Map([[`${header4.size}`, header4.size / 2]]);
      for (let j = 0; j < 1; j++) {
          let sinaJ = new Map([[String.fromCharCode(121,98,108,111,99,107,95,102,95,49,56,0),127], [String.fromCharCode(99,97,112,116,117,114,101,100,95,99,95,54,54,0),169], [String.fromCharCode(117,110,114,101,97,100,95,104,95,57,57,0),905]]);
          let dicee = String.fromCharCode(102,95,51,49,95,108,115,104,105,102,116,0);
          let matchesm = new Map([[String.fromCharCode(103,101,116,97,115,115,111,99,105,100,95,49,95,55,52,0),1], [String.fromCharCode(118,95,56,95,115,101,114,105,97,108,105,122,97,116,105,111,110,0),327]]);
          let hongkongR = [15, 6, 805];
          let logo3 = 2;
         privilegeH *= (parseFloat(`${appsM == String.fromCharCode(83,0) ? matchesm.size : appsM.length}`));
         sinaJ = new Map([[`${sinaJ.size}`, 2]]);
         dicee += `${hongkongR.length & logo3}`;
         matchesm[`${logo3}`] = hongkongR.length + 2;
      }
       let sportsA = 4;
       let awayA = 2;
         sportsA |= dangery.length - 1;
       let match6 = 1.0;
       let agreementG = 4.0;
      unselectedL >>= Math.min(2, Math.abs(unselectedL));
      if (354962 == unselectedL) {
         break;
      }
   } while (((unselectedL >> (Math.min(Math.abs(2), 2))) == 5 || (unselectedL >> (Math.min(Math.abs(2), 3))) == 2) && (354962 == unselectedL));
   while (!privilegez.includes(`${unselectedL}`)) {
       let tumbnails = String.fromCharCode(100,105,114,115,95,48,95,50,52,0);
      if (tumbnails.endsWith(`${tumbnails.length}`)) {
         tumbnails += "3";
      }
         tumbnails = `${tumbnails.length & 2}`;
         tumbnails = `${(tumbnails == String.fromCharCode(116,0) ? tumbnails.length : tumbnails.length)}`;
      privilegez += `${((progressG ? 3 : 1))}`;
      break;
   }
      fillN = [loginC];
   while ((button2.length / (Math.max(5, 7))) >= 3 || 3 >= (button2.length / 5)) {
      fillN = [(privilegez == String.fromCharCode(116,0) ? privilegez.length : unselectedL)];
      break;
   }
   if (1 < (fillN.length << (Math.min(button2.length, 3)))) {
      button2 = `${loginC}`;
   }

    }
  };
  const onLoad = () => {
       let screenE = [589, 468, 476];
    let annerz = new Map([[String.fromCharCode(102,95,49,54,95,99,111,108,111,114,109,97,112,0),String.fromCharCode(101,110,99,111,100,101,102,114,97,109,101,95,121,95,49,52,0)], [String.fromCharCode(114,101,97,100,95,111,95,55,52,0),String.fromCharCode(113,95,50,51,95,100,97,117,98,101,99,104,105,101,115,0)], [String.fromCharCode(112,111,115,116,105,111,110,95,105,95,49,51,0),String.fromCharCode(99,111,110,110,105,110,112,117,116,95,54,95,53,52,0)]]);
    let controlsd = 5;
    let moony = String.fromCharCode(112,108,97,121,103,114,111,117,110,100,95,98,95,56,49,0);
    let statsm = 3.0;
    let emoji_ = String.fromCharCode(97,114,99,104,105,118,101,114,95,49,95,53,53,0);
    let countryh = String.fromCharCode(107,95,52,56,95,112,114,111,109,111,0);
    let containerK = [681, 541, 246];
    let module8 = 0.0;
    let headeri = 2.0;
    let unselectedC = String.fromCharCode(102,95,54,49,95,97,100,105,100,0);
    let profileM = 4.0;
    let whistle7 = 2.0;
    let policyj = [953, 825];
      containerK = [countryh.length >> (Math.min(Math.abs(2), 5))];
   while (!countryh.includes(`${statsm}`)) {
      statsm *= parseFloat(`${countryh.length}`);
      break;
   }
   while (!containerK.includes(controlsd)) {
      controlsd |= (String.fromCharCode(119,0) == emoji_ ? emoji_.length : screenE.length);
      break;
   }
      controlsd >>= Math.min(4, Math.abs(1));
       let goalV = 0.0;
       let reducer0 = [654, 947];
         reducer0.push(2 - reducer0.length);
          let predictionl = true;
          let middlek = [753, 962, 962];
         goalV *= parseFloat(`${middlek.length & reducer0.length}`);
         predictionl = !predictionl && !predictionl;
         middlek.push(((predictionl ? 5 : 4)));
      if (reducer0.includes(goalV)) {
         goalV /= Math.max(5, parseFloat(`${reducer0.length ^ 2}`));
      }
      for (let a = 0; a < 1; a++) {
         goalV /= Math.max(parseFloat(`${reducer0.length}`), 1);
      }
      do {
          let lessP = String.fromCharCode(115,116,97,98,108,101,95,51,95,56,53,0);
          let buttonY = 1;
          let starT = String.fromCharCode(121,95,54,55,95,112,114,101,108,105,109,105,110,97,114,121,0);
          let clocke = 4;
         goalV *= parseFloat(`${3}`);
         lessP = `${2 & clocke}`;
         buttonY <<= Math.min(Math.abs(lessP.length & buttonY), 5);
         starT += `${buttonY}`;
         clocke ^= 1 % (Math.max(1, buttonY));
         if (4085554.0 == goalV) {
            break;
         }
      } while ((4085554.0 == goalV) && (reducer0.length < 1));
       let placementA = 2.0;
       let countdownY = 0.0;
      controlsd &= annerz.size / 1;

    

      statsm /= Math.max(5, parseFloat(`${parseInt(`${module8}`)}`));
   do {
      module8 /= Math.max(2, parseInt(`${module8}`) << (Math.min(containerK.length, 1)));
      if (3935772.0 == module8) {
         break;
      }
   } while (((screenE.length - module8) < 1.26) && (3935772.0 == module8));
      controlsd += countryh.length;
      emoji_ = `${emoji_.length + 3}`;
   while (2 <= (emoji_.length >> (Math.min(2, Math.abs(controlsd)))) && (2 >> (Math.min(3, emoji_.length))) <= 5) {
      emoji_ = "3";
      break;
   }
    setIsLoading(false);
   if (3.22 > statsm) {
       let containerY = true;
       let dialogB = 3.0;
       let langkeyn = String.fromCharCode(104,114,101,97,100,95,53,95,54,48,0);
      do {
         containerY = !containerY || langkeyn.length >= 23;
         if (containerY ? !containerY : containerY) {
            break;
         }
      } while ((1.58 >= (3.13 / (Math.max(8, dialogB))) && containerY) && (containerY ? !containerY : containerY));
      for (let v = 0; v < 1; v++) {
          let adultB = new Map([[String.fromCharCode(97,114,111,117,110,100,95,112,95,54,53,0),0], [String.fromCharCode(112,114,111,100,95,57,95,53,51,0),268]]);
          let loadingD = new Map([[String.fromCharCode(113,95,52,56,95,114,101,102,0),997], [String.fromCharCode(112,114,101,108,111,97,100,95,100,95,55,53,0),610]]);
         containerY = loadingD.size >= 28;
         adultB = new Map([[`${adultB.size}`, 1]]);
         loadingD = new Map([[`${adultB.size}`, adultB.size ^ 2]]);
      }
       let fillD = String.fromCharCode(116,95,57,55,95,109,102,104,100,0);
          let ballC = 2;
          let humidityG = [634, 615];
          let tailB = [214, 429, 563];
         fillD = `${langkeyn.length / (Math.max(6, fillD.length))}`;
         ballC <<= Math.min(Math.abs(ballC - humidityG.length), 3);
         humidityG = [tailB.length % 1];
         tailB.push(tailB.length << (Math.min(humidityG.length, 1)));
      do {
          let networkH = String.fromCharCode(117,95,50,95,118,99,111,119,112,116,114,0);
          let upgradea = true;
          let updatesL = 1;
          let playg = 3.0;
          let textu = 0.0;
         fillD += `${parseInt(`${playg}`) & 2}`;
         networkH = `${parseInt(`${textu}`)}`;
         upgradea = !networkH.endsWith(`${textu}`);
         updatesL |= 2 | networkH.length;
         playg += parseFloat(`${2}`);
         if (fillD.length == 1528164) {
            break;
         }
      } while (((3.60 / (Math.max(7, dialogB))) >= 2.82 && (parseInt(`${dialogB}`) / (Math.max(fillD.length, 4))) >= 5) && (fillD.length == 1528164));
       let championQ = 4.0;
      for (let z = 0; z < 3; z++) {
         langkeyn += `${parseInt(`${dialogB}`) % (Math.max(7, langkeyn.length))}`;
      }
      while (containerY) {
         championQ -= parseFloat(`${langkeyn.length - 2}`);
         break;
      }
      if (3.24 > (parseFloat(`${langkeyn.length}`) * dialogB) && 4 > (langkeyn.length / 3)) {
         langkeyn = `${langkeyn.length}`;
      }
      emoji_ = `${3 << (Math.min(5, langkeyn.length))}`;
   }
   for (let v = 0; v < 3; v++) {
       let hcopy_cM = new Map([[String.fromCharCode(115,116,117,102,102,110,100,95,100,95,49,55,0),554], [String.fromCharCode(114,101,108,102,117,110,99,95,98,95,49,57,0),493], [String.fromCharCode(105,109,112,117,108,115,101,95,119,95,49,0),53]]);
       let successg = String.fromCharCode(102,95,50,52,95,102,97,99,101,115,0);
       let const_vk = 0.0;
         const_vk -= parseFloat(`${hcopy_cM.size << (Math.min(successg.length, 1))}`);
         successg = `${hcopy_cM.size}`;
          let nalyticsI = 1.0;
         successg = `${parseInt(`${nalyticsI}`)}`;
          let downloaded6 = 2.0;
          let xvodx = String.fromCharCode(104,95,54,49,95,114,101,113,117,105,114,101,109,101,110,116,0);
         successg = `${xvodx.length * 3}`;
         downloaded6 /= Math.max(1, parseFloat(`${parseInt(`${downloaded6}`) ^ parseInt(`${downloaded6}`)}`));
         xvodx += `${parseInt(`${downloaded6}`)}`;
      if ((5.14 - const_vk) == 3.79 && (hcopy_cM.size - parseInt(`${const_vk}`)) == 4) {
         const_vk += parseFloat(`${3 >> (Math.min(4, Math.abs(parseInt(`${const_vk}`))))}`);
      }
      for (let u = 0; u < 1; u++) {
         const_vk /= Math.max(3, parseFloat(`${successg.length}`));
      }
         successg = `${successg.length & hcopy_cM.size}`;
      if (2 > (hcopy_cM.size - parseInt(`${const_vk}`))) {
         const_vk /= Math.max(2, parseFloat(`${2}`));
      }
      do {
         hcopy_cM = new Map([[successg, successg.length]]);
         if (87163 == hcopy_cM.size) {
            break;
         }
      } while ((1 > (hcopy_cM.size * successg.length)) && (87163 == hcopy_cM.size));
      moony = `${moony.length / (Math.max(countryh.length, 1))}`;
   }
   for (let x = 0; x < 1; x++) {
       let blacklist3 = String.fromCharCode(104,119,100,101,118,105,99,101,95,53,95,53,54,0);
          let storeE = String.fromCharCode(103,95,56,49,95,99,117,101,115,0);
          let tickedL = String.fromCharCode(114,101,116,114,105,101,100,95,54,95,49,57,0);
          let completeU = String.fromCharCode(114,95,57,52,95,114,101,99,118,109,115,103,0);
         blacklist3 += `${blacklist3.length * storeE.length}`;
         storeE += `${(String.fromCharCode(50,0) == tickedL ? completeU.length : tickedL.length)}`;
         completeU = `${3 & completeU.length}`;
      while (blacklist3 != String.fromCharCode(71,0) || blacklist3 != String.fromCharCode(104,0)) {
         blacklist3 += `${blacklist3.length % (Math.max(3, blacklist3.length))}`;
         break;
      }
      if (blacklist3 != blacklist3) {
          let expandN = new Map([[String.fromCharCode(121,95,49,51,95,115,117,98,98,97,110,100,0),true ], [String.fromCharCode(120,95,57,54,95,110,111,116,105,102,105,99,97,116,111,110,115,0),false ]]);
          let fastu = String.fromCharCode(105,110,102,108,105,103,104,116,95,104,95,55,51,0);
          let teami = String.fromCharCode(111,95,53,57,95,99,111,110,115,116,97,110,116,0);
          let screenI = 1.0;
          let vietnami = new Map([[String.fromCharCode(121,95,55,48,95,115,116,97,110,100,97,114,100,105,122,101,0),961], [String.fromCharCode(112,95,53,48,95,112,114,111,109,105,115,101,115,0),463], [String.fromCharCode(99,111,110,102,105,114,109,101,100,95,56,95,51,56,0),755]]);
         blacklist3 = `${parseInt(`${screenI}`) & 1}`;
         expandN = new Map([[`${vietnami.size}`, teami.length & vietnami.size]]);
         fastu += `${teami.length}`;
         screenI -= 1 + teami.length;
      }
      moony = `${annerz.size}`;
   }
       let targetU = [642, 743, 523];
       let smallu = String.fromCharCode(112,111,114,116,114,97,105,116,95,98,95,52,0);
       let xcopy_7k = String.fromCharCode(118,95,57,53,95,115,116,97,116,101,102,117,108,0);
         xcopy_7k += "2";
      if (4 > (smallu.length - 5)) {
         targetU.push((smallu == String.fromCharCode(99,0) ? targetU.length : smallu.length));
      }
         xcopy_7k = `${smallu.length >> (Math.min(5, targetU.length))}`;
      do {
         smallu += "2";
         if (smallu == String.fromCharCode(101,100,56,0)) {
            break;
         }
      } while (((smallu.length - targetU.length) < 1 && (smallu.length - targetU.length) < 1) && (smallu == String.fromCharCode(101,100,56,0)));
      do {
         smallu += "3";
         if (String.fromCharCode(108,48,54,0) == smallu) {
            break;
         }
      } while ((xcopy_7k.endsWith(smallu)) && (String.fromCharCode(108,48,54,0) == smallu));
      while (xcopy_7k == String.fromCharCode(87,0)) {
         smallu += `${targetU.length - xcopy_7k.length}`;
         break;
      }
          let borderlessl = String.fromCharCode(99,111,114,101,115,95,102,95,54,55,0);
          let router3 = String.fromCharCode(109,117,108,116,105,112,108,101,95,115,95,49,54,0);
          let navigationp = 0;
         targetU.push((router3 == String.fromCharCode(74,0) ? borderlessl.length : router3.length));
         borderlessl = "1";
      while (smallu.includes(`${targetU.length}`)) {
          let belll = [39, 102, 856];
          let network6 = String.fromCharCode(106,111,98,113,95,118,95,52,52,0);
          let feedback4 = [344, 652, 914];
         targetU.push(2 ^ targetU.length);
         belll.push(network6.length / 1);
         network6 = `${belll.length}`;
         feedback4 = [network6.length];
         break;
      }
      for (let p = 0; p < 2; p++) {
         smallu = `${xcopy_7k.length >> (Math.min(Math.abs(1), 2))}`;
      }
      containerK = [parseInt(`${headeri}`)];
   do {
      screenE.push(3);
      if (4673064 == screenE.length) {
         break;
      }
   } while ((4673064 == screenE.length) && (2 <= containerK.length));

    setIsError(false);
   do {
      containerK = [controlsd];
      if (1247555 == containerK.length) {
         break;
      }
   } while ((Array.from(annerz.values()).includes(containerK.length)) && (1247555 == containerK.length));
   do {
       let danger3 = 1;
          let streamingo = false;
          let reducerY = 1.0;
         danger3 -= danger3 | 1;
         streamingo = !streamingo;
         reducerY -= parseFloat(`${2 << (Math.min(Math.abs(parseInt(`${reducerY}`)), 1))}`);
      do {
         danger3 ^= danger3;
         if (danger3 == 2808823) {
            break;
         }
      } while ((danger3 == 2808823) && (2 <= (danger3 & danger3) && (danger3 & 2) <= 1));
         danger3 += danger3 ^ danger3;
      countryh = "1";
      if (2363957 == countryh.length) {
         break;
      }
   } while ((2363957 == countryh.length) && (3 <= (2 | annerz.size)));
      containerK.push(2);
      module8 /= Math.max(annerz.size, 2);
   while (1 < emoji_.length) {
      module8 -= 1;
      break;
   }

    if (typeof props.onLoad === 'function') {

      module8 -= annerz.size >> (Math.min(countryh.length, 4));
   do {
      headeri /= Math.max(1, 1);
      if (1699457.0 == headeri) {
         break;
      }
   } while ((1699457.0 == headeri) && (!moony.endsWith(`${headeri}`)));
      screenE.push(3);
   do {
      screenE.push(moony.length << (Math.min(Math.abs(3), 2)));
      if (3019186 == screenE.length) {
         break;
      }
   } while ((annerz[`${screenE.length}`] == null) && (3019186 == screenE.length));
   for (let v = 0; v < 3; v++) {
       let r_player4 = 2;
       let with_2nN = new Map([[String.fromCharCode(115,100,107,95,119,95,50,50,0),259], [String.fromCharCode(107,95,50,53,95,105,100,119,116,0),437]]);
       let clockk = String.fromCharCode(114,100,99,111,115,116,95,99,95,51,50,0);
       let teamD = false;
       let penaltyB = String.fromCharCode(117,95,56,55,95,115,105,122,101,114,0);
      do {
         with_2nN[penaltyB] = with_2nN.size;
         if (4481051 == with_2nN.size) {
            break;
         }
      } while ((4481051 == with_2nN.size) && (1 >= with_2nN.size || (1 + with_2nN.size) >= 3));
      do {
         teamD = (((teamD ? penaltyB.length : 20) >> (Math.min(penaltyB.length, 4))) >= 20);
         if (teamD ? !teamD : teamD) {
            break;
         }
      } while ((clockk.length < 4) && (teamD ? !teamD : teamD));
          let weibo9 = false;
         with_2nN = new Map([[penaltyB, 1 ^ penaltyB.length]]);
         weibo9 = (!weibo9 ? !weibo9 : !weibo9);
      for (let o = 0; o < 1; o++) {
         clockk += "1";
      }
       let upgradeJ = new Map([[String.fromCharCode(103,117,101,115,115,95,120,95,55,53,0),false ], [String.fromCharCode(115,101,114,105,97,108,105,122,101,95,103,95,56,54,0),true ], [String.fromCharCode(98,95,53,49,95,108,111,99,97,108,116,105,109,101,0),false ]]);
         penaltyB += `${((teamD ? 1 : 1) >> (Math.min(Math.abs(3), 2)))}`;
         clockk = `${1 << (Math.min(2, clockk.length))}`;
       let redirectp = [String.fromCharCode(120,95,54,50,95,119,105,114,101,0), String.fromCharCode(109,109,115,104,95,100,95,55,49,0), String.fromCharCode(122,95,49,52,95,105,100,101,110,116,105,102,105,101,114,115,0)];
       let downloadingq = [885, 509];
          let carouselo = [943, 730];
          let alert3 = String.fromCharCode(117,101,117,101,95,99,95,56,50,0);
         downloadingq.push(redirectp.length >> (Math.min(5, Math.abs(r_player4))));
         carouselo.push((alert3 == String.fromCharCode(70,0) ? alert3.length : carouselo.length));
      if (2 <= (r_player4 - 2) || (with_2nN.size - r_player4) <= 2) {
         with_2nN[`${r_player4}`] = downloadingq.length;
      }
       let native0 = String.fromCharCode(112,95,57,55,95,115,109,112,116,101,104,100,98,97,114,115,0);
       let checkboxa = String.fromCharCode(100,95,54,54,95,109,97,116,101,114,105,97,108,0);
         downloadingq = [1];
          let bufferA = String.fromCharCode(114,101,118,111,107,101,95,119,95,57,57,0);
          let recommendationZ = String.fromCharCode(100,101,112,116,104,95,113,95,51,54,0);
          let diceV = String.fromCharCode(98,101,108,111,119,95,98,95,49,0);
         native0 += "1";
         bufferA += `${diceV.length % 3}`;
         recommendationZ = "3";
         diceV += `${(recommendationZ == String.fromCharCode(117,0) ? diceV.length : recommendationZ.length)}`;
         penaltyB += `${(penaltyB == String.fromCharCode(81,0) ? upgradeJ.size : penaltyB.length)}`;
         checkboxa += "2";
      profileM += parseFloat(`${1}`);
   }
      props.onLoad(...arguments);
   for (let w = 0; w < 3; w++) {
       let hearts = 1.0;
       let sideW = 1.0;
       let playlistE = String.fromCharCode(115,95,53,53,95,98,121,116,101,115,116,114,101,97,109,0);
       let contextd = new Map([[String.fromCharCode(97,95,57,51,95,114,111,108,108,105,110,103,0),54], [String.fromCharCode(109,98,99,110,116,95,113,95,56,0),442], [String.fromCharCode(111,95,53,53,95,111,114,105,101,110,116,97,116,105,111,110,0),486]]);
         playlistE = `${parseInt(`${hearts}`) - 1}`;
         sideW *= parseFloat(`${parseInt(`${hearts}`)}`);
      for (let g = 0; g < 3; g++) {
          let footballk = String.fromCharCode(118,95,53,52,95,116,104,114,101,115,104,111,108,100,115,0);
         hearts *= parseFloat(`${footballk.length ^ contextd.size}`);
      }
      while (hearts > 5.4) {
         playlistE += `${parseInt(`${hearts}`) % 3}`;
         break;
      }
         sideW /= Math.max(4, parseFloat(`${parseInt(`${hearts}`)}`));
      if (contextd[`${hearts}`] == null) {
         hearts /= Math.max(2, parseFloat(`${2}`));
      }
      do {
          let ranks = String.fromCharCode(101,95,52,52,95,114,101,115,116,114,97,105,110,0);
          let down3 = 3.0;
          let sourcej = String.fromCharCode(110,95,50,56,95,103,101,116,110,97,109,101,105,110,102,111,0);
         sideW /= Math.max(parseFloat(`${contextd.size + parseInt(`${sideW}`)}`), 4);
         ranks = `${sourcej.length}`;
         down3 /= Math.max(sourcej.length << (Math.min(Math.abs(1), 1)), 1);
         if (2968035.0 == sideW) {
            break;
         }
      } while ((2968035.0 == sideW) && ((playlistE.length - 4) <= 2 || 1.45 <= (sideW - 3.50)));
      while (sideW < hearts) {
         hearts -= parseFloat(`${parseInt(`${hearts}`) / 3}`);
         break;
      }
          let progressA = [438, 520];
          let malaysiat = String.fromCharCode(109,98,108,111,99,107,95,48,95,54,56,0);
         hearts /= Math.max(parseFloat(`${1}`), 4);
         progressA.push((String.fromCharCode(101,0) == malaysiat ? malaysiat.length : progressA.length));
          let frame_pvP = new Map([[String.fromCharCode(117,110,104,105,100,101,95,99,95,56,50,0),false ], [String.fromCharCode(115,104,97,100,105,110,103,95,108,95,53,48,0),false ]]);
          let switch_4m = [330, 912, 541];
          let lessm = String.fromCharCode(115,95,54,51,95,112,97,114,115,101,100,0);
         contextd = new Map([[`${contextd.size}`, contextd.size % (Math.max(2, 6))]]);
         frame_pvP = new Map([[`${frame_pvP.size}`, switch_4m.length]]);
         switch_4m.push(2);
         lessm = `${switch_4m.length}`;
      do {
          let switch_fuV = 5;
         contextd[`${hearts}`] = 1 - contextd.size;
         switch_fuV |= switch_fuV;
         if (439522 == contextd.size) {
            break;
         }
      } while ((5 == (1 >> (Math.min(1, Math.abs(contextd.size)))) || 5 == (1 >> (Math.min(1, playlistE.length)))) && (439522 == contextd.size));
      while (Array.from(contextd.keys()).includes(`${sideW}`)) {
          let filterW = false;
         sideW *= parseFloat(`${contextd.size}`);
         filterW = (filterW ? !filterW : filterW);
         break;
      }
      unselectedC = `${playlistE.length % 1}`;
   }
   do {
      countryh = "1";
      if (4879627 == countryh.length) {
         break;
      }
   } while ((4879627 == countryh.length) && ((4 ^ countryh.length) == 2 || (countryh.length / 4) == 5));
   while (5.64 < statsm) {
      statsm -= parseFloat(`${parseInt(`${profileM}`)}`);
      break;
   }
      controlsd &= screenE.length;
   if (2 >= moony.length) {
      moony += `${annerz.size / 2}`;
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
       let analyticsk = 1.0;
    let favoriteN = String.fromCharCode(99,95,56,52,95,108,101,118,105,110,115,111,110,0);
    let mutedw = 4.0;
    let downloadedE = false;
    let bing8 = 0.0;
    let containerM = String.fromCharCode(117,112,118,112,95,120,95,53,56,0);
    let countdownZ = false;
    let langkey2 = 3.0;
    let sortn = new Map([[String.fromCharCode(111,112,116,105,109,117,109,95,115,95,55,51,0),794], [String.fromCharCode(119,95,53,50,95,115,116,114,110,105,99,109,112,0),548], [String.fromCharCode(120,95,54,95,109,111,118,101,0),941]]);
    let unreadU = String.fromCharCode(112,114,101,112,97,114,101,100,95,99,95,53,48,0);
    let nativeJ = 5.0;
    let sheetH = String.fromCharCode(102,117,110,110,121,95,114,95,55,57,0);
    let changeG = 1.0;
    let basketballO = String.fromCharCode(105,95,49,48,48,95,115,108,117,103,0);
   for (let x = 0; x < 2; x++) {
      bing8 *= parseFloat(`${parseInt(`${langkey2}`)}`);
   }
   do {
      containerM = `${containerM.length / (Math.max(1, 10))}`;
      if (containerM == String.fromCharCode(56,119,108,100,95,107,109,53,0)) {
         break;
      }
   } while ((2 == containerM.length || !countdownZ) && (containerM == String.fromCharCode(56,119,108,100,95,107,109,53,0)));

    if (!isLoading) {

   while (!unreadU.startsWith(`${countdownZ}`)) {
       let completer = 0.0;
       let basketballk = true;
      if ((3.35 * completer) == 2.33) {
         basketballk = completer < 27.71;
      }
       let pointI = String.fromCharCode(102,101,116,99,104,105,110,103,95,116,95,54,53,0);
       let typings = String.fromCharCode(101,95,54,48,95,119,104,111,108,101,0);
      for (let n = 0; n < 2; n++) {
         pointI = `${((basketballk ? 3 : 4) / (Math.max(parseInt(`${completer}`), 7)))}`;
      }
      if (typings.length >= pointI.length) {
          let lines = 0.0;
          let specP = 5;
          let infou = 2;
          let minin = false;
         pointI += `${specP | 2}`;
         lines *= 3;
         specP |= 1 << (Math.min(Math.abs(parseInt(`${lines}`)), 4));
         infou ^= infou << (Math.min(2, Math.abs(2)));
         minin = !minin && 90.38 <= lines;
      }
       let redirectQ = 1;
      do {
         redirectQ >>= Math.min(4, Math.abs(3 << (Math.min(Math.abs(parseInt(`${completer}`)), 2))));
         if (237007 == redirectQ) {
            break;
         }
      } while (((redirectQ * completer) <= 2.47) && (237007 == redirectQ));
      countdownZ = !downloadedE;
      break;
   }
      sortn[containerM] = containerM.length;
      return null;
      unreadU += `${parseInt(`${mutedw}`) - containerM.length}`;
   while (!unreadU.startsWith(`${mutedw}`)) {
      unreadU += `${parseInt(`${bing8}`) - 3}`;
      break;
   }

    }
    return (
      <View style={VideoPlayerstyles.loader.container}>
        <Animated.Image
          source={require('./images/icons/loginTickedCorner.png')}
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
       let flyerV = String.fromCharCode(99,97,115,116,115,95,105,95,49,53,0);
          let starY = new Map([[String.fromCharCode(114,95,49,49,95,100,101,113,117,101,117,101,0),String.fromCharCode(105,95,57,53,95,99,111,109,112,97,114,101,114,115,0)], [String.fromCharCode(111,95,57,48,95,97,108,103,115,0),String.fromCharCode(118,95,51,51,95,114,111,116,97,116,105,111,110,97,110,103,108,101,0)]]);
         flyerV = `${2 / (Math.max(9, flyerV.length))}`;
         starY = new Map([[`${starY.size}`, starY.size & starY.size]]);
         flyerV += `${1 | flyerV.length}`;
          let middleware4 = String.fromCharCode(118,111,119,101,108,95,108,95,54,52,0);
         flyerV = "2";
         middleware4 += `${middleware4.length / (Math.max(2, 7))}`;
      sortn[`${langkey2}`] = 1 << (Math.min(Math.abs(parseInt(`${langkey2}`)), 1));
   do {
       let casto = 2;
       let malaysiae = new Map([[String.fromCharCode(119,111,114,100,95,50,95,53,51,0),327], [String.fromCharCode(115,95,51,55,95,115,107,105,110,0),194], [String.fromCharCode(111,95,49,48,48,95,97,107,105,100,0),87]]);
       let leagueL = 2.0;
       let spinnerm = String.fromCharCode(98,95,56,57,95,100,114,111,112,120,0);
       let modityU = String.fromCharCode(102,95,54,53,95,109,105,110,105,109,117,109,0);
          let fieldw = [862, 389, 959];
          let temperaturek = [49, 342];
          let untickV = [102, 756, 454];
         spinnerm = `${temperaturek.length % (Math.max(2, 8))}`;
         fieldw = [untickV.length >> (Math.min(fieldw.length, 5))];
         temperaturek.push(2 | untickV.length);
          let handlers = [234, 710];
         casto *= 2 & spinnerm.length;
         handlers.push(3 & handlers.length);
      if (malaysiae[`${casto}`] != null) {
         malaysiae = new Map([[`${casto}`, casto / (Math.max(spinnerm.length, 3))]]);
      }
       let unselectedl = String.fromCharCode(99,111,100,97,98,108,101,95,105,95,50,53,0);
         malaysiae[`${casto}`] = casto / (Math.max(1, 1));
         modityU += `${parseInt(`${leagueL}`) % (Math.max(modityU.length, 4))}`;
       let borderlesso = [412, 651, 946];
       let albumM = [String.fromCharCode(112,114,105,110,116,95,121,95,56,51,0), String.fromCharCode(104,95,55,95,102,105,110,97,108,105,115,101,114,0), String.fromCharCode(103,95,50,52,95,119,101,108,115,101,110,99,0)];
       let switch_hQ = true;
       let banneru = false;
      do {
         spinnerm = `${albumM.length >> (Math.min(Math.abs(3), 1))}`;
         if (spinnerm == String.fromCharCode(115,57,122,0)) {
            break;
         }
      } while ((spinnerm == String.fromCharCode(115,57,122,0)) && (!spinnerm.endsWith(modityU)));
       let subs5 = String.fromCharCode(99,95,55,56,95,97,118,99,116,120,0);
         modityU = "1";
         casto *= borderlesso.length % 1;
          let gesturesQ = String.fromCharCode(104,95,51,52,95,101,114,97,115,117,114,101,0);
         casto -= malaysiae.size;
         gesturesQ += `${gesturesQ.length & gesturesQ.length}`;
      for (let f = 0; f < 1; f++) {
         malaysiae = new Map([[`${malaysiae.size}`, malaysiae.size]]);
      }
         spinnerm += `${borderlesso.length}`;
      bing8 *= parseFloat(`${3}`);
      if (4646408.0 == bing8) {
         break;
      }
   } while ((4646408.0 == bing8) && (1 < containerM.length));

  };

  const onEnd = () => {
       let actionsd = String.fromCharCode(118,95,56,48,95,107,105,110,100,115,0);
    let indexB = String.fromCharCode(114,95,57,95,99,108,101,97,114,118,105,100,101,111,100,97,116,97,0);
    let downloadingr = String.fromCharCode(116,111,111,108,99,104,97,105,110,95,57,95,50,49,0);
    let dangerP = 3.0;
    let langkeyz = String.fromCharCode(99,111,110,118,101,114,116,105,110,103,95,115,95,55,52,0);
    let phoneL = false;
    let emojiL = String.fromCharCode(118,101,114,105,102,105,101,100,95,49,95,49,52,0);
    let stepv = 0.0;
    let promotionD = String.fromCharCode(109,95,54,48,95,98,114,97,99,101,0);
    let routerC = new Map([[String.fromCharCode(117,95,54,54,95,108,109,108,109,0),728], [String.fromCharCode(112,95,54,57,95,99,103,105,109,97,103,101,0),286]]);
    let sentrya = String.fromCharCode(121,95,56,51,95,103,101,116,97,115,115,111,99,105,100,0);
    let main_ax = 3.0;
    let heji9 = true;
    let streamingR = new Map([[String.fromCharCode(114,101,102,114,101,115,104,95,48,95,56,51,0),967], [String.fromCharCode(122,95,55,53,95,99,111,110,118,101,114,115,105,111,110,0),368], [String.fromCharCode(109,95,52,57,95,97,112,112,114,101,99,97,116,105,111,110,0),791]]);
    let lightu = String.fromCharCode(115,101,116,100,97,114,95,120,95,50,49,0);
    let benefit8 = String.fromCharCode(97,95,55,49,95,117,109,102,97,118,114,0);
   do {
      actionsd += `${sentrya.length}`;
      if (actionsd == String.fromCharCode(102,55,117,0)) {
         break;
      }
   } while ((1 > (actionsd.length % (Math.max(4, 9))) || 2 > (actionsd.length % 4)) && (actionsd == String.fromCharCode(102,55,117,0)));
   while (!indexB.startsWith(`${langkeyz.length}`)) {
      langkeyz += `${parseInt(`${main_ax}`) + 2}`;
      break;
   }
   while (downloadingr.length < parseInt(`${dangerP}`)) {
       let aboutF = false;
       let dicee = true;
      for (let r = 0; r < 1; r++) {
         dicee = dicee || !aboutF;
      }
          let white0 = String.fromCharCode(100,95,53,49,95,101,120,112,97,110,115,105,111,110,0);
          let bodanl = 1.0;
          let rightd = String.fromCharCode(99,111,110,116,97,99,116,115,95,56,95,50,49,0);
         aboutF = !dicee && white0.length == 91;
         white0 = `${rightd.length >> (Math.min(4, Math.abs(parseInt(`${bodanl}`))))}`;
         bodanl *= 1;
         rightd += `${(rightd == String.fromCharCode(84,0) ? parseInt(`${bodanl}`) : rightd.length)}`;
      for (let i = 0; i < 2; i++) {
          let current1 = false;
          let edit2 = 2;
          let skip2 = true;
         aboutF = 15 >= edit2;
         current1 = skip2;
         edit2 &= ((skip2 ? 3 : 5) % (Math.max(5, (current1 ? 3 : 4))));
      }
      do {
          let context8 = String.fromCharCode(102,109,97,99,95,117,95,51,48,0);
         aboutF = context8.length > 78 || dicee;
         if (aboutF ? !aboutF : aboutF) {
            break;
         }
      } while ((aboutF ? !aboutF : aboutF) && (!aboutF));
      do {
         aboutF = dicee;
         if (aboutF ? !aboutF : aboutF) {
            break;
         }
      } while ((aboutF) && (aboutF ? !aboutF : aboutF));
      for (let g = 0; g < 3; g++) {
         dicee = !aboutF;
      }
      dangerP *= parseFloat(`${1}`);
      break;
   }
       let short_c0r = 5;
         short_c0r |= short_c0r;
      while ((short_c0r / (Math.max(1, 10))) > 3) {
         short_c0r <<= Math.min(Math.abs(short_c0r), 3);
         break;
      }
         short_c0r /= Math.max(1, short_c0r);
      promotionD += `${(parseInt(`${stepv}`) >> (Math.min(1, Math.abs((phoneL ? 5 : 5)))))}`;
   while (!emojiL.startsWith(`${indexB.length}`)) {
       let selectionD = 0;
       let indicatorm = [String.fromCharCode(109,97,110,105,112,117,108,97,116,101,95,114,95,56,51,0), String.fromCharCode(100,101,112,97,114,116,109,101,110,116,95,101,95,54,53,0)];
       let topicp = String.fromCharCode(112,95,50,53,95,99,121,99,108,101,115,0);
      if (2 >= (selectionD % (Math.max(indicatorm.length, 10))) || (selectionD % (Math.max(2, 6))) >= 4) {
          let combinedy = String.fromCharCode(105,110,115,116,97,108,108,97,116,105,111,110,95,120,95,49,55,0);
          let cornerF = String.fromCharCode(115,95,51,48,95,105,110,116,101,103,101,114,105,102,121,0);
          let condensed9 = String.fromCharCode(98,95,49,48,48,95,117,98,115,99,114,105,98,101,114,0);
         indicatorm = [selectionD + 2];
         combinedy = "1";
         cornerF = `${condensed9.length}`;
         condensed9 = `${2 / (Math.max(3, condensed9.length))}`;
      }
      do {
         selectionD <<= Math.min(Math.abs(selectionD), 4);
         if (selectionD == 4680325) {
            break;
         }
      } while ((5 >= (indicatorm.length ^ selectionD)) && (selectionD == 4680325));
      for (let w = 0; w < 3; w++) {
         indicatorm.push(3 + selectionD);
      }
         indicatorm.push(topicp.length);
      if (5 >= (indicatorm.length ^ topicp.length)) {
         indicatorm = [1 / (Math.max(4, selectionD))];
      }
      do {
         indicatorm = [2];
         if (indicatorm.length == 4452791) {
            break;
         }
      } while ((indicatorm.length == 4452791) && (3 > (indicatorm.length * 5)));
      for (let s = 0; s < 2; s++) {
          let tailm = [984, 656, 599];
          let shoot2 = String.fromCharCode(117,95,53,57,95,100,111,119,110,108,111,97,100,97,98,108,101,0);
          let friendsD = String.fromCharCode(99,111,111,108,100,111,119,110,115,95,104,95,52,0);
         topicp = `${shoot2.length / 2}`;
         tailm = [tailm.length - 2];
         shoot2 = `${tailm.length >> (Math.min(friendsD.length, 2))}`;
         friendsD += `${(friendsD == String.fromCharCode(90,0) ? tailm.length : friendsD.length)}`;
      }
      for (let i = 0; i < 3; i++) {
         topicp = `${indicatorm.length}`;
      }
         selectionD ^= selectionD | indicatorm.length;
      emojiL = `${1 + routerC.size}`;
      break;
   }
       let annerR = 2.0;
         annerR *= parseInt(`${annerR}`) - parseInt(`${annerR}`);
          let editl = String.fromCharCode(108,117,109,97,107,101,121,95,120,95,54,53,0);
          let settingsV = [484, 841];
         annerR *= parseInt(`${annerR}`) + 1;
         editl += `${1 >> (Math.min(5, settingsV.length))}`;
         settingsV = [editl.length >> (Math.min(3, settingsV.length))];
      if (3.26 >= (annerR + annerR)) {
          let t_lockG = String.fromCharCode(110,95,49,52,95,105,110,116,114,111,0);
          let targetT = true;
          let morep = 1;
          let fieldF = [440, 15];
          let taiwanf = new Map([[String.fromCharCode(110,116,115,99,95,120,95,49,51,0),String.fromCharCode(122,95,56,56,95,110,101,119,114,111,119,0)], [String.fromCharCode(114,95,50,49,95,102,101,111,102,0),String.fromCharCode(120,95,56,49,95,109,101,110,117,115,0)], [String.fromCharCode(112,114,101,118,111,105,117,115,95,105,95,51,50,0),String.fromCharCode(117,95,50,52,95,97,117,116,104,101,110,116,104,105,99,97,116,101,0)]]);
         annerR *= t_lockG.length % (Math.max(9, parseInt(`${annerR}`)));
         t_lockG = "2";
         targetT = (taiwanf.size - fieldF.length) >= 65;
         morep /= Math.max(3, 4);
         fieldF.push(2);
         taiwanf = new Map([[`${targetT}`, morep & 3]]);
      }
      main_ax += parseInt(`${annerR}`) ^ parseInt(`${dangerP}`);
   if ((main_ax - 3.62) >= 4.96 && (3.62 - main_ax) >= 4.61) {
      emojiL = `${sentrya.length | parseInt(`${main_ax}`)}`;
   }
   for (let h = 0; h < 2; h++) {
      main_ax -= routerC.size / (Math.max(promotionD.length, 7));
   }

    console.log('onend');
      promotionD = `${(langkeyz.length >> (Math.min(3, Math.abs((phoneL ? 4 : 2)))))}`;
      langkeyz = `${promotionD.length & emojiL.length}`;
   for (let f = 0; f < 2; f++) {
      langkeyz = `${langkeyz.length >> (Math.min(1, Math.abs(parseInt(`${stepv}`))))}`;
   }
   do {
      downloadingr = `${(emojiL == String.fromCharCode(70,0) ? emojiL.length : actionsd.length)}`;
      if (downloadingr.length == 4291068) {
         break;
      }
   } while ((!downloadingr.endsWith(`${actionsd.length}`)) && (downloadingr.length == 4291068));
   if (indexB.startsWith(downloadingr)) {
      downloadingr = `${langkeyz.length}`;
   }
   for (let j = 0; j < 2; j++) {
       let loginZ = 4.0;
      while (4.85 >= loginZ) {
          let dropdown2 = new Map([[String.fromCharCode(104,109,97,99,95,116,95,54,56,0),164], [String.fromCharCode(111,95,52,56,95,99,111,99,111,97,0),553]]);
          let drags = [408, 394, 664];
          let with_1kB = true;
         loginZ += parseFloat(`${parseInt(`${loginZ}`)}`);
         dropdown2 = new Map([[`${dropdown2.size}`, drags.length * dropdown2.size]]);
         drags = [((with_1kB ? 5 : 5) / (Math.max(drags.length, 7)))];
         with_1kB = !with_1kB;
         break;
      }
      while (4.38 > loginZ) {
          let fcopy_7_ = true;
          let weiboX = String.fromCharCode(110,95,55,51,95,115,109,105,108,101,0);
          let icong = 3;
         loginZ -= (parseFloat(`${(fcopy_7_ ? 3 : 1) & weiboX.length}`));
         fcopy_7_ = icong <= icong;
         weiboX = `${icong >> (Math.min(3, Math.abs(icong)))}`;
         break;
      }
      while ((2.84 / (Math.max(3, loginZ))) <= 3.5 && 2.84 <= (loginZ / (Math.max(10, loginZ)))) {
         loginZ += parseFloat(`${parseInt(`${loginZ}`) << (Math.min(3, Math.abs(2)))}`);
         break;
      }
      langkeyz += `${promotionD.length % 3}`;
   }
       let singaporeW = String.fromCharCode(112,95,49,55,95,117,110,115,112,101,99,105,102,105,101,100,0);
       let streamingb = [400, 663, 866];
       let switch_bD = String.fromCharCode(115,95,53,55,95,110,111,114,109,97,108,105,115,101,0);
         streamingb.push(2);
          let volume7 = 1.0;
         streamingb = [1];
         volume7 += parseFloat(`${parseInt(`${volume7}`)}`);
      while ((streamingb.length - 4) > 2 && 2 > (4 - switch_bD.length)) {
         streamingb.push(streamingb.length);
         break;
      }
          let shrinkw = String.fromCharCode(98,117,103,115,95,99,95,53,54,0);
         streamingb.push(singaporeW.length);
         shrinkw += `${shrinkw.length - shrinkw.length}`;
         streamingb.push(2);
      if (1 < (2 & switch_bD.length)) {
         switch_bD += "1";
      }
         singaporeW += `${1 ^ streamingb.length}`;
       let liveW = String.fromCharCode(109,115,109,112,101,103,100,97,116,97,95,116,95,54,56,0);
       let launchd = new Map([[String.fromCharCode(98,117,102,102,101,114,113,117,101,117,101,95,99,95,48,0),String.fromCharCode(102,108,111,97,116,105,110,103,95,54,95,51,56,0)], [String.fromCharCode(104,101,120,98,110,95,107,95,51,57,0),String.fromCharCode(121,95,50,55,95,108,101,114,116,0)], [String.fromCharCode(104,95,56,55,95,119,100,108,116,0),String.fromCharCode(117,95,49,57,95,101,120,99,108,0)]]);
      routerC = new Map([[sentrya, (String.fromCharCode(117,0) == switch_bD ? sentrya.length : switch_bD.length)]]);
      langkeyz += `${((phoneL ? 1 : 5) % (Math.max(promotionD.length, 6)))}`;

    setIsLoading(false);
   while (1 < actionsd.length) {
       let catalog4 = String.fromCharCode(117,95,50,50,95,99,111,109,112,108,105,99,97,116,105,111,110,0);
       let weibo6 = String.fromCharCode(108,95,51,55,95,104,101,120,0);
      while (catalog4.length > weibo6.length) {
         weibo6 += `${catalog4.length}`;
         break;
      }
      if (!catalog4.endsWith(`${weibo6.length}`)) {
         catalog4 += `${catalog4.length}`;
      }
         catalog4 = "3";
      for (let u = 0; u < 1; u++) {
         weibo6 = `${(catalog4 == String.fromCharCode(104,0) ? catalog4.length : weibo6.length)}`;
      }
         catalog4 = `${3 * catalog4.length}`;
      while (!weibo6.includes(`${catalog4.length}`)) {
         weibo6 = `${(weibo6 == String.fromCharCode(77,0) ? catalog4.length : weibo6.length)}`;
         break;
      }
      indexB = `${1 - parseInt(`${stepv}`)}`;
      break;
   }
   do {
      main_ax -= 1 | sentrya.length;
      if (3742738.0 == main_ax) {
         break;
      }
   } while ((4.17 < (main_ax - langkeyz.length)) && (3742738.0 == main_ax));
   while ((stepv / (Math.max(1.59, 5))) < 1.64 || 1.59 < stepv) {
       let emojib = String.fromCharCode(114,97,119,101,110,99,95,97,95,51,51,0);
       let trashV = [321, 114];
         trashV = [emojib.length];
      for (let r = 0; r < 1; r++) {
         trashV.push(emojib.length << (Math.min(4, trashV.length)));
      }
      do {
         trashV = [2 + emojib.length];
         if (trashV.length == 2983230) {
            break;
         }
      } while ((trashV.length == 2983230) && (2 < emojib.length));
         emojib += `${(String.fromCharCode(79,0) == emojib ? emojib.length : trashV.length)}`;
      do {
          let largep = new Map([[String.fromCharCode(108,111,97,100,115,95,100,95,54,54,0),String.fromCharCode(106,95,49,48,48,95,105,110,108,101,110,0)], [String.fromCharCode(113,117,105,99,107,99,111,109,112,114,101,115,115,95,106,95,55,52,0),String.fromCharCode(101,95,51,54,95,112,97,114,115,101,0)]]);
          let ccopy__l = String.fromCharCode(102,95,55,50,95,114,101,112,108,97,99,101,109,101,110,116,115,0);
          let placementw = true;
         trashV = [largep.size << (Math.min(Math.abs(3), 5))];
         largep[`${placementw}`] = (ccopy__l.length * (placementw ? 4 : 2));
         ccopy__l += `${(ccopy__l.length << (Math.min(2, Math.abs((placementw ? 2 : 4)))))}`;
         if (3180279 == trashV.length) {
            break;
         }
      } while ((3180279 == trashV.length) && (trashV.length == 1));
       let listF = [145, 403];
       let calendarL = [299, 358];
      phoneL = langkeyz.length > 55;
      break;
   }
   do {
       let bodana = 2.0;
      do {
         bodana /= Math.max(parseFloat(`${parseInt(`${bodana}`) ^ parseInt(`${bodana}`)}`), 2);
         if (3715462.0 == bodana) {
            break;
         }
      } while ((3715462.0 == bodana) && (bodana > bodana));
      do {
          let feedbackm = [651, 449];
          let minivodf = [202, 776];
         bodana -= parseFloat(`${1 - minivodf.length}`);
         feedbackm.push(feedbackm.length >> (Math.min(Math.abs(1), 1)));
         minivodf = [feedbackm.length - 1];
         if (bodana == 618699.0) {
            break;
         }
      } while (((4.77 + bodana) == 3.12) && (bodana == 618699.0));
         bodana /= Math.max(4, parseFloat(`${parseInt(`${bodana}`) >> (Math.min(2, Math.abs(parseInt(`${bodana}`))))}`));
      actionsd = `${parseInt(`${dangerP}`)}`;
      if (3114364 == actionsd.length) {
         break;
      }
   } while ((5 >= (actionsd.length & 2)) && (3114364 == actionsd.length));
      sentrya += `${((phoneL ? 4 : 3))}`;
   for (let w = 0; w < 1; w++) {
       let untickq = String.fromCharCode(105,95,55,57,95,97,100,100,107,101,121,0);
       let themeJ = 5.0;
       let topici = [182, 100];
       let handlerZ = String.fromCharCode(111,95,52,57,95,110,119,105,115,101,0);
       let pressured = String.fromCharCode(121,95,55,49,95,99,111,108,108,101,99,116,97,98,108,101,0);
       let foundf = String.fromCharCode(119,95,57,50,95,99,104,114,111,109,97,104,111,108,100,0);
       let targeto = 4.0;
       let floaterr = 1.0;
      if ((1.51 + themeJ) > 5.41) {
          let home8 = new Map([[String.fromCharCode(122,95,54,57,95,116,114,97,105,110,0),899], [String.fromCharCode(119,101,108,115,101,110,99,100,101,109,111,95,48,95,51,56,0),266]]);
          let eighteeny = 5;
         themeJ -= pressured.length;
         home8 = new Map([[`${home8.size}`, home8.size]]);
         eighteeny &= eighteeny;
      }
      do {
          let single6 = 1;
          let auto_1c = new Map([[String.fromCharCode(109,95,50,55,95,99,97,99,104,101,100,0),String.fromCharCode(106,95,51,95,100,105,115,112,97,116,99,104,0)], [String.fromCharCode(115,101,97,114,99,104,98,97,114,95,55,95,48,0),String.fromCharCode(112,97,114,105,116,121,95,108,95,57,51,0)]]);
          let step6 = String.fromCharCode(109,95,50,53,95,97,99,101,108,112,0);
         topici.push(parseInt(`${targeto}`));
         single6 ^= 3;
         auto_1c = new Map([[`${auto_1c.size}`, auto_1c.size / (Math.max(10, step6.length))]]);
         step6 += `${single6 ^ 1}`;
         if (topici.length == 1468263) {
            break;
         }
      } while ((3 < topici.length) && (topici.length == 1468263));
      do {
          let inactiveg = [481, 465, 936];
          let clockf = false;
          let appleL = String.fromCharCode(114,101,106,111,105,110,95,97,95,52,48,0);
          let scheduleG = 0.0;
          let username_ = new Map([[String.fromCharCode(118,105,101,119,95,111,95,55,48,0),false ], [String.fromCharCode(98,117,102,102,101,114,101,100,95,99,95,49,0),false ]]);
         untickq = "2";
         inactiveg.push(username_.size + 1);
         clockf = inactiveg.length > 89;
         appleL = `${inactiveg.length}`;
         scheduleG *= username_.size / (Math.max(appleL.length, 10));
         if (untickq.length == 3502743) {
            break;
         }
      } while ((!untickq.startsWith(`${foundf.length}`)) && (untickq.length == 3502743));
      while (2 <= (2 << (Math.min(1, untickq.length))) && (targeto / 5.61) <= 3.38) {
         targeto /= Math.max((parseFloat(`${foundf == String.fromCharCode(69,0) ? untickq.length : foundf.length}`)), 4);
         break;
      }
      if ((topici.length + parseInt(`${targeto}`)) == 4) {
         topici = [parseInt(`${targeto}`) - handlerZ.length];
      }
      do {
         themeJ /= Math.max(parseInt(`${floaterr}`) % (Math.max(pressured.length, 2)), 3);
         if (3497207.0 == themeJ) {
            break;
         }
      } while ((3497207.0 == themeJ) && (5.54 == (themeJ - targeto)));
      if (2 >= (4 * handlerZ.length)) {
         topici = [pressured.length];
      }
          let invitex = 0.0;
          let fastC = 4;
         floaterr += parseFloat(`${1 / (Math.max(8, fastC))}`);
         invitex += 2 & parseInt(`${invitex}`);
         fastC /= Math.max(5, 1 >> (Math.min(Math.abs(parseInt(`${invitex}`)), 3)));
      if (parseFloat(`${untickq.length}`) <= targeto) {
         targeto *= parseFloat(`${untickq.length}`);
      }
         topici.push(2);
      indexB = `${emojiL.length & 3}`;
   }
      routerC[langkeyz] = routerC.size * 1;
      promotionD += `${(2 | (phoneL ? 1 : 4))}`;

    props.onLiveEnd?.();
   if (!promotionD.endsWith(`${emojiL.length}`)) {
       let play_ = String.fromCharCode(104,95,52,54,95,114,101,99,111,118,101,114,101,100,0);
       let playi = 4;
       let brightnessS = 5;
       let send7 = 4.0;
       let dataL = new Map([[String.fromCharCode(99,117,116,111,117,116,95,56,95,50,50,0),331], [String.fromCharCode(115,99,97,110,110,105,110,103,95,98,95,57,54,0),332], [String.fromCharCode(114,95,57,95,112,111,115,116,99,111,100,101,0),156]]);
      if ((play_.length % (Math.max(1, 4))) < 5 && (play_.length % (Math.max(1, 10))) < 1) {
          let stringZ = String.fromCharCode(105,100,108,105,115,116,95,111,95,49,56,0);
          let policyT = 3;
          let popupr = String.fromCharCode(109,95,56,52,95,105,110,118,116,114,97,110,115,0);
         dataL = new Map([[`${dataL.size}`, dataL.size * 1]]);
         stringZ += `${policyT << (Math.min(Math.abs(3), 4))}`;
         policyT >>= Math.min(stringZ.length, 1);
         popupr = `${2 ^ popupr.length}`;
      }
      do {
          let promotiona = new Map([[String.fromCharCode(116,101,114,109,105,110,97,116,105,110,103,95,104,95,55,50,0),864], [String.fromCharCode(97,100,100,95,104,95,50,53,0),511]]);
         playi >>= Math.min(Math.abs(promotiona.size), 1);
         if (playi == 1430085) {
            break;
         }
      } while ((playi == 1430085) && ((brightnessS - 1) == 1));
       let page6 = 1.0;
      do {
         dataL = new Map([[`${dataL.size}`, playi / 2]]);
         if (511186 == dataL.size) {
            break;
         }
      } while ((3.43 <= (page6 / 4.23) && (4.23 / (Math.max(7, page6))) <= 5.0) && (511186 == dataL.size));
         brightnessS += parseInt(`${page6}`);
       let math8 = 2.0;
         send7 -= 1;
      for (let w = 0; w < 1; w++) {
          let tempr = String.fromCharCode(104,109,97,99,108,105,115,116,95,51,95,52,52,0);
          let googlew = String.fromCharCode(109,95,51,56,95,115,104,97,112,101,0);
          let quest0 = 1.0;
          let anytime6 = new Map([[String.fromCharCode(102,105,108,116,101,114,103,114,97,112,104,95,50,95,52,0),737], [String.fromCharCode(108,95,52,56,95,105,110,118,101,114,115,101,100,0),472]]);
          let resendD = 4;
         send7 += parseInt(`${quest0}`);
         tempr += `${tempr.length}`;
         googlew += "3";
         quest0 /= Math.max(2, parseFloat(`${googlew.length}`));
         anytime6[`${resendD}`] = anytime6.size | resendD;
      }
       let spec1 = false;
      while (3.2 > page6) {
         brightnessS &= play_.length;
         break;
      }
      do {
         send7 += parseInt(`${page6}`) ^ 3;
         if (1608446.0 == send7) {
            break;
         }
      } while (((send7 * 1.22) == 4.49) && (1608446.0 == send7));
      while (playi < dataL.size) {
         dataL[`${playi}`] = 2;
         break;
      }
         spec1 = 42 == brightnessS;
         page6 += parseFloat(`${parseInt(`${send7}`) * 1}`);
      do {
         spec1 = !play_.includes(`${math8}`);
         if (spec1 ? !spec1 : spec1) {
            break;
         }
      } while ((spec1 ? !spec1 : spec1) && (spec1));
      emojiL = `${(emojiL == String.fromCharCode(121,0) ? routerC.size : emojiL.length)}`;
   }
      dangerP += parseFloat(`${2 >> (Math.min(3, Math.abs(parseInt(`${main_ax}`))))}`);
   while (sentrya.endsWith(`${routerC.size}`)) {
      sentrya += `${parseInt(`${stepv}`) & routerC.size}`;
      break;
   }
      downloadingr = `${downloadingr.length / (Math.max(1, 1))}`;
   for (let k = 0; k < 3; k++) {
       let penaltyg = 3;
      for (let g = 0; g < 2; g++) {
         penaltyg += 2;
      }
      do {
          let save3 = [String.fromCharCode(113,95,56,48,95,118,97,114,105,97,110,116,115,0), String.fromCharCode(115,108,111,119,109,111,100,101,95,122,95,51,48,0)];
          let privacyo = 0.0;
         penaltyg /= Math.max(4, penaltyg);
         save3.push(save3.length);
         privacyo -= parseFloat(`${2 + parseInt(`${privacyo}`)}`);
         if (497230 == penaltyg) {
            break;
         }
      } while ((penaltyg >= 2) && (497230 == penaltyg));
          let animationB = String.fromCharCode(105,110,105,116,105,97,108,105,115,101,95,115,95,55,54,0);
          let diceP = String.fromCharCode(117,95,55,49,95,118,105,115,105,98,105,116,121,0);
         penaltyg /= Math.max(1 + penaltyg, 3);
         animationB += `${(String.fromCharCode(48,0) == animationB ? animationB.length : diceP.length)}`;
         diceP = `${(diceP == String.fromCharCode(66,0) ? diceP.length : animationB.length)}`;
      sentrya = "3";
   }
   do {
       let homea = String.fromCharCode(100,101,99,111,114,114,101,108,97,116,105,111,110,95,109,95,55,54,0);
       let infoY = 3;
       let logoj = true;
         infoY >>= Math.min(Math.abs(infoY - homea.length), 4);
       let modalv = String.fromCharCode(115,115,108,114,111,111,116,115,95,109,95,55,49,0);
      for (let y = 0; y < 3; y++) {
         infoY >>= Math.min(4, Math.abs((String.fromCharCode(115,0) == modalv ? (logoj ? 2 : 5) : modalv.length)));
      }
      for (let e = 0; e < 3; e++) {
         infoY /= Math.max(infoY & 3, 2);
      }
          let trophyV = [821, 182, 437];
          let f_viewl = true;
         modalv = `${((logoj ? 4 : 1))}`;
         trophyV = [3 >> (Math.min(3, trophyV.length))];
         f_viewl = trophyV.length < trophyV.length;
      for (let h = 0; h < 1; h++) {
         infoY %= Math.max((modalv == String.fromCharCode(98,0) ? infoY : modalv.length), 4);
      }
      if (1 > (3 + infoY) || (3 + homea.length) > 1) {
         homea = "2";
      }
      while (!homea.startsWith(`${modalv.length}`)) {
         modalv = `${infoY}`;
         break;
      }
      if (!homea.includes(`${infoY}`)) {
         infoY += 2;
      }
      stepv += 2;
      if (698146.0 == stepv) {
         break;
      }
   } while ((698146.0 == stepv) && (!emojiL.startsWith(`${stepv}`)));
      downloadingr += `${3 + langkeyz.length}`;
   for (let y = 0; y < 2; y++) {
       let back3 = 2.0;
       let zhengpiana = true;
       let robotoV = true;
       let ecopy_bg3 = 4.0;
       let verticali = 0;
         verticali &= parseInt(`${back3}`) >> (Math.min(4, Math.abs(verticali)));
       let xvod2 = 0;
       let megaphoneq = 1;
      do {
          let policye = [734, 335];
          let whiteE = String.fromCharCode(117,116,116,101,114,97,110,99,101,95,108,95,50,50,0);
          let reducerv = String.fromCharCode(119,95,49,48,48,95,102,117,110,99,115,0);
         zhengpiana = (((zhengpiana ? reducerv.length : 98) + reducerv.length) == 98);
         policye = [(whiteE == String.fromCharCode(76,0) ? whiteE.length : policye.length)];
         if (zhengpiana ? !zhengpiana : zhengpiana) {
            break;
         }
      } while ((!zhengpiana) && (zhengpiana ? !zhengpiana : zhengpiana));
          let shirtX = String.fromCharCode(111,95,52,53,95,105,110,116,101,110,116,115,0);
         verticali >>= Math.min(5, Math.abs(parseInt(`${ecopy_bg3}`)));
         shirtX = `${shirtX.length % (Math.max(2, 6))}`;
      for (let p = 0; p < 1; p++) {
         verticali += verticali;
      }
      for (let f = 0; f < 3; f++) {
         back3 /= Math.max((parseFloat(`${(zhengpiana ? 2 : 2) ^ (robotoV ? 5 : 3)}`)), 3);
      }
         robotoV = verticali == 92 && robotoV;
      while ((back3 - 1.79) < 2.53 || (verticali - parseInt(`${back3}`)) < 2) {
          let plusr = new Map([[String.fromCharCode(112,111,119,101,114,102,117,108,95,110,95,56,54,0),632], [String.fromCharCode(112,95,51,52,95,97,112,101,114,0),635]]);
          let footballM = new Map([[String.fromCharCode(113,117,97,110,116,105,122,97,116,105,111,110,95,107,95,50,55,0),true ], [String.fromCharCode(109,101,109,117,116,105,108,95,109,95,56,55,0),false ], [String.fromCharCode(99,116,97,98,108,101,115,95,122,95,56,52,0),true ]]);
          let middlewareR = 5;
          let sinaP = 1;
         verticali >>= Math.min(Math.abs(plusr.size), 5);
         plusr[`${middlewareR}`] = middlewareR;
         footballM = new Map([[`${sinaP}`, sinaP << (Math.min(Math.abs(3), 2))]]);
         break;
      }
         xvod2 /= Math.max(1, 3);
      if (1.68 >= (1.58 + back3) || back3 >= 1.58) {
          let internetW = String.fromCharCode(113,100,114,97,119,95,113,95,54,0);
          let circleH = 0.0;
          let blacklist8 = 2.0;
         back3 -= parseFloat(`${parseInt(`${blacklist8}`)}`);
         internetW = "1";
         circleH *= 2;
         blacklist8 /= Math.max(5, 1 | parseInt(`${circleH}`));
      }
      do {
         zhengpiana = 86.88 >= ecopy_bg3;
         if (zhengpiana ? !zhengpiana : zhengpiana) {
            break;
         }
      } while ((3 == megaphoneq) && (zhengpiana ? !zhengpiana : zhengpiana));
      if (back3 < megaphoneq) {
         megaphoneq += verticali;
      }
      for (let t = 0; t < 1; t++) {
          let tickedq = true;
          let canvasE = String.fromCharCode(99,104,97,110,103,101,104,95,111,95,57,53,0);
          let register_kP = String.fromCharCode(120,95,52,54,95,119,101,98,115,0);
         zhengpiana = (!tickedq ? !robotoV : tickedq);
         canvasE = `${canvasE.length}`;
         register_kP = `${(String.fromCharCode(97,0) == register_kP ? canvasE.length : register_kP.length)}`;
      }
      while (2 == (2 * megaphoneq) && (megaphoneq * xvod2) == 2) {
          let refreshR = String.fromCharCode(108,109,100,98,95,50,95,53,53,0);
          let j_lockg = false;
          let bootsplash4 = true;
          let collectionG = 2.0;
         xvod2 += 3;
         refreshR = `${((bootsplash4 ? 1 : 5) % 1)}`;
         j_lockg = !bootsplash4;
         collectionG -= (refreshR.length ^ (j_lockg ? 4 : 4));
         break;
      }
          let episodesd = String.fromCharCode(98,101,104,105,110,100,95,122,95,56,56,0);
          let emojiD = [String.fromCharCode(100,101,116,101,114,109,105,110,101,100,95,99,95,50,50,0), String.fromCharCode(121,117,118,112,99,95,119,95,49,55,0), String.fromCharCode(119,95,54,95,107,108,97,115,115,0)];
          let searchbare = String.fromCharCode(107,95,49,48,48,95,108,97,110,103,0);
         ecopy_bg3 *= searchbare.length;
         episodesd += `${3 << (Math.min(1, episodesd.length))}`;
         emojiD = [episodesd.length | emojiD.length];
         searchbare += "3";
      sentrya = `${indexB.length}`;
   }

  };

  const onError = () => {
       let switch_vnM = String.fromCharCode(115,95,49,50,95,101,110,116,114,121,0);
    let hookso = new Map([[String.fromCharCode(97,114,101,115,95,55,95,57,48,0),748], [String.fromCharCode(115,104,117,116,116,101,114,95,120,95,57,52,0),962], [String.fromCharCode(114,102,99,116,95,119,95,52,48,0),469]]);
    let linkz = String.fromCharCode(117,95,56,53,95,101,109,98,101,100,0);
    let awayD = String.fromCharCode(116,101,120,116,117,114,101,95,105,95,51,53,0);
    let private_41 = 1.0;
    let contextg = String.fromCharCode(111,95,49,53,95,99,111,110,116,114,111,108,115,0);
    let playlistk = String.fromCharCode(115,101,99,117,114,101,95,109,95,55,52,0);
    let time_90 = String.fromCharCode(120,95,51,53,95,116,97,108,107,0);
    let typinge = 2;
    let weibop = [156, 444];
    let hongkong5 = new Map([[String.fromCharCode(100,95,54,55,95,117,110,108,105,110,107,101,100,0),370], [String.fromCharCode(107,95,52,52,95,97,114,101,110,97,115,0),992]]);
   if (2 >= (typinge >> (Math.min(Math.abs(1), 1))) || 1 >= (typinge >> (Math.min(time_90.length, 1)))) {
       let whatsappj = 3;
       let delegate__7 = String.fromCharCode(112,97,103,101,115,95,118,95,54,48,0);
       let humidityD = false;
       let empty7 = String.fromCharCode(113,95,50,55,0);
         humidityD = delegate__7.length <= 48 || 48 <= whatsappj;
      if (empty7.endsWith(`${humidityD}`)) {
          let match2 = 2;
          let episodeF = 1.0;
          let referrerp = String.fromCharCode(120,95,50,55,95,114,101,115,104,97,112,101,0);
         empty7 = `${(3 + (humidityD ? 4 : 2))}`;
         match2 >>= Math.min(5, referrerp.length);
         episodeF += parseFloat(`${parseInt(`${episodeF}`) + 1}`);
         referrerp = `${parseInt(`${episodeF}`) << (Math.min(4, Math.abs(1)))}`;
      }
          let plusQ = String.fromCharCode(105,115,111,112,101,110,113,117,111,116,101,95,115,95,52,52,0);
          let yingt = String.fromCharCode(110,95,56,56,95,100,101,116,101,99,116,105,110,103,0);
          let ewardedw = 4.0;
         whatsappj &= (String.fromCharCode(101,0) == yingt ? whatsappj : yingt.length);
         plusQ += `${parseInt(`${ewardedw}`)}`;
         ewardedw *= parseInt(`${ewardedw}`) / 3;
         delegate__7 = "2";
      for (let u = 0; u < 2; u++) {
         whatsappj += delegate__7.length - 3;
      }
         delegate__7 += `${whatsappj + 1}`;
      while (5 >= empty7.length) {
         humidityD = delegate__7.startsWith(`${humidityD}`);
         break;
      }
       let textn = 0.0;
       let macaue = 4.0;
          let storeQ = String.fromCharCode(97,99,99,101,115,115,111,114,121,95,52,95,50,56,0);
          let statsw = String.fromCharCode(103,111,111,100,95,101,95,54,48,0);
          let basketballf = 0.0;
         whatsappj -= parseInt(`${basketballf}`) - 2;
         storeQ += `${1 ^ statsw.length}`;
         statsw = `${statsw.length}`;
         basketballf += (parseFloat(`${storeQ == String.fromCharCode(73,0) ? statsw.length : storeQ.length}`));
         humidityD = delegate__7.length < 23 || humidityD;
      for (let z = 0; z < 2; z++) {
          let agreementc = String.fromCharCode(116,95,50,51,95,100,101,99,114,101,97,115,101,0);
          let type_h3 = String.fromCharCode(99,98,108,107,95,104,95,52,48,0);
          let twittery = 2.0;
         textn *= parseInt(`${textn}`) * agreementc.length;
         agreementc = `${parseInt(`${twittery}`) - 2}`;
         type_h3 += `${type_h3.length}`;
         twittery /= Math.max(1, parseFloat(`${type_h3.length}`));
      }
         delegate__7 = `${delegate__7.length}`;
      typinge <<= Math.min(4, Math.abs(3));
   }
      playlistk += `${switch_vnM.length ^ 3}`;
      playlistk = `${1 << (Math.min(4, time_90.length))}`;
   do {
       let filed7 = String.fromCharCode(122,95,53,95,101,110,116,105,116,105,116,121,0);
         filed7 += `${filed7.length + filed7.length}`;
      do {
          let promotionN = String.fromCharCode(105,95,50,95,101,118,112,111,114,116,0);
          let combined6 = 0.0;
         filed7 = "3";
         promotionN += "3";
         combined6 /= Math.max(parseFloat(`${promotionN.length}`), 2);
         if (filed7 == String.fromCharCode(49,106,113,120,105,108,0)) {
            break;
         }
      } while ((filed7 == String.fromCharCode(49,106,113,120,105,108,0)) && (filed7 != String.fromCharCode(106,0)));
         filed7 = `${filed7.length / (Math.max(filed7.length, 9))}`;
      private_41 -= hookso.size;
      if (private_41 == 2095508.0) {
         break;
      }
   } while ((5 < (3 + hookso.size) || (hookso.size << (Math.min(Math.abs(3), 4))) < 3) && (private_41 == 2095508.0));
       let short_08p = String.fromCharCode(121,95,54,49,95,112,121,116,104,111,110,0);
      do {
         short_08p += `${short_08p.length}`;
         if (short_08p.length == 4127868) {
            break;
         }
      } while ((short_08p.includes(short_08p)) && (short_08p.length == 4127868));
          let current5 = [704, 994];
          let commonS = true;
          let redirectM = 3.0;
         short_08p += `${2 % (Math.max(10, parseInt(`${redirectM}`)))}`;
         current5.push(current5.length);
         commonS = (((!commonS ? 86 : current5.length) << (Math.min(current5.length, 3))) < 86);
         redirectM *= parseFloat(`${2 - current5.length}`);
      do {
         short_08p += `${short_08p.length}`;
         if (short_08p == String.fromCharCode(108,48,117,108,49,122,102,54,0)) {
            break;
         }
      } while ((short_08p == String.fromCharCode(108,48,117,108,49,122,102,54,0)) && (short_08p.length > 3 || short_08p.length > 3));
      typinge |= (linkz == String.fromCharCode(99,0) ? linkz.length : parseInt(`${private_41}`));
   if ((playlistk.length ^ 1) == 4) {
      hongkong5[time_90] = hookso.size + 2;
   }
      contextg = `${hongkong5.size}`;
   if (contextg.endsWith(`${switch_vnM.length}`)) {
       let readh = [74, 921];
          let reminderL = [620, 932, 998];
         readh.push(readh.length - 1);
         reminderL.push(reminderL.length / (Math.max(reminderL.length, 3)));
      do {
         readh = [readh.length];
         if (readh.length == 4169773) {
            break;
         }
      } while ((readh.length < 3) && (readh.length == 4169773));
      for (let e = 0; e < 2; e++) {
         readh = [readh.length & readh.length];
      }
      switch_vnM = `${weibop.length}`;
   }

    setIsError(true);
      switch_vnM = `${weibop.length}`;
       let networkt = true;
       let selectionq = 1.0;
       let downloadingC = String.fromCharCode(118,97,97,112,105,95,122,95,55,55,0);
          let changeg = 3.0;
         networkt = !networkt;
         changeg += parseInt(`${changeg}`) >> (Math.min(1, Math.abs(3)));
         networkt = selectionq <= 16.41 && networkt;
      for (let a = 0; a < 1; a++) {
         networkt = !networkt;
      }
         selectionq += downloadingC.length | 2;
      for (let f = 0; f < 2; f++) {
          let sentryf = String.fromCharCode(110,112,112,116,114,97,110,115,112,111,115,101,95,112,95,56,50,0);
         networkt = downloadingC.length > 60 || !networkt;
         sentryf = `${sentryf.length}`;
      }
      do {
         selectionq /= Math.max(parseInt(`${selectionq}`) | 3, 4);
         if (3346046.0 == selectionq) {
            break;
         }
      } while (((parseInt(`${selectionq}`) / (Math.max(downloadingC.length, 6))) > 2) && (3346046.0 == selectionq));
      for (let x = 0; x < 3; x++) {
          let description_y2 = 2.0;
         downloadingC += `${(downloadingC == String.fromCharCode(122,0) ? parseInt(`${description_y2}`) : downloadingC.length)}`;
      }
         networkt = selectionq >= 81.29;
         selectionq /= Math.max(5, 1 & parseInt(`${selectionq}`));
      switch_vnM += `${(switch_vnM == String.fromCharCode(66,0) ? playlistk.length : switch_vnM.length)}`;
      contextg = `${switch_vnM.length}`;
      playlistk += "2";
       let basketballY = String.fromCharCode(118,116,97,103,95,105,95,53,54,0);
       let auto_l7c = 3.0;
      if (3 > basketballY.length) {
         basketballY += `${basketballY.length & 1}`;
      }
      while (basketballY.endsWith(`${auto_l7c}`)) {
         auto_l7c -= parseFloat(`${parseInt(`${auto_l7c}`) << (Math.min(basketballY.length, 1))}`);
         break;
      }
      for (let n = 0; n < 3; n++) {
          let middlewareO = false;
          let statisticsk = new Map([[String.fromCharCode(115,101,99,116,105,111,110,115,95,55,95,57,54,0),360], [String.fromCharCode(99,111,114,101,115,95,119,95,50,56,0),716]]);
          let reducerJ = String.fromCharCode(113,95,50,53,95,101,108,108,105,112,115,101,0);
          let sinaH = String.fromCharCode(105,110,112,117,116,116,101,109,95,107,95,53,52,0);
          let type_hlE = 3;
         basketballY += `${statisticsk.size}`;
         middlewareO = (sinaH.length / (Math.max(reducerJ.length, 4))) < 70;
         statisticsk[sinaH] = 2 ^ reducerJ.length;
         type_hlE %= Math.max(type_hlE, 2);
      }
      for (let w = 0; w < 3; w++) {
         auto_l7c /= Math.max(1, parseFloat(`${parseInt(`${auto_l7c}`) / 1}`));
      }
      if (1 < basketballY.length) {
          let filter8 = 3.0;
          let zhengpiank = 3.0;
         auto_l7c *= parseFloat(`${parseInt(`${filter8}`)}`);
         zhengpiank -= parseInt(`${zhengpiank}`);
      }
      while ((1.62 / (Math.max(2, auto_l7c))) < 2.43) {
          let helperN = false;
          let ping_ = 0.0;
          let aboutR = 4;
         basketballY = `${3 >> (Math.min(Math.abs(aboutR), 4))}`;
         helperN = ping_ == 80.59 || !helperN;
         ping_ += 3 | parseInt(`${ping_}`);
         aboutR -= 3 << (Math.min(Math.abs(parseInt(`${ping_}`)), 1));
         break;
      }
      hongkong5 = new Map([[`${hookso.size}`, hookso.size ^ 3]]);
   for (let r = 0; r < 2; r++) {
      playlistk = `${hongkong5.size}`;
   }
   while (hookso[`${private_41}`] != null) {
      private_41 += contextg.length ^ 3;
      break;
   }
       let taiwan3 = [String.fromCharCode(103,95,54,55,95,111,115,109,111,115,0), String.fromCharCode(109,95,52,56,95,98,101,101,110,0)];
       let orange6 = [855, 790, 244];
         taiwan3.push(taiwan3.length * orange6.length);
         orange6.push(orange6.length);
      if ((orange6.length & 3) == 5) {
         taiwan3 = [1 * taiwan3.length];
      }
      while (2 >= (orange6.length + 5)) {
          let updatesq = [332, 894, 835];
         orange6 = [3 | taiwan3.length];
         updatesq = [updatesq.length | 2];
         break;
      }
      while (1 < (2 | taiwan3.length) || (taiwan3.length | orange6.length) < 2) {
         orange6.push(3);
         break;
      }
       let collectionI = false;
      contextg += `${playlistk.length + typinge}`;

    setIsLoading(false);
      hongkong5 = new Map([[`${hookso.size}`, contextg.length >> (Math.min(1, Math.abs(hookso.size)))]]);
      private_41 += typinge & 3;
   do {
       let listN = 3;
       let register_ivk = true;
       let friends9 = new Map([[String.fromCharCode(116,95,51,57,95,98,108,97,110,107,0),String.fromCharCode(97,114,109,108,105,110,107,95,120,95,49,50,0)], [String.fromCharCode(122,95,53,48,95,105,112,118,105,100,101,111,0),String.fromCharCode(101,112,105,115,111,100,101,95,118,95,54,57,0)], [String.fromCharCode(116,95,49,51,95,108,111,97,100,0),String.fromCharCode(104,95,50,95,101,110,118,101,108,111,112,101,100,0)]]);
       let alerto = 3.0;
       let privileged = String.fromCharCode(117,95,53,52,95,112,108,117,114,97,108,105,122,101,100,0);
         listN -= (String.fromCharCode(122,0) == privileged ? privileged.length : friends9.size);
      for (let d = 0; d < 2; d++) {
         alerto /= Math.max((privileged == String.fromCharCode(75,0) ? listN : privileged.length), 1);
      }
         alerto *= 1;
         listN ^= 3 - friends9.size;
      for (let w = 0; w < 1; w++) {
         privileged += `${privileged.length << (Math.min(Math.abs(2), 1))}`;
      }
       let types_ = String.fromCharCode(110,97,110,111,112,98,95,104,95,57,56,0);
       let feedback1 = false;
       let brightnessE = false;
         friends9 = new Map([[`${feedback1}`, ((feedback1 ? 3 : 4) - 1)]]);
      while (4 >= (listN % 5) || !register_ivk) {
         register_ivk = privileged.length == 20;
         break;
      }
       let checkboxb = 2.0;
       let selectionq1 = 1.0;
          let lang5 = false;
         selectionq1 /= Math.max(4, (parseInt(`${alerto}`) & (feedback1 ? 4 : 4)));
         lang5 = !lang5;
         listN ^= friends9.size;
      for (let q = 0; q < 1; q++) {
         friends9[`${feedback1}`] = 1 ^ types_.length;
      }
      while ((friends9.size - types_.length) <= 3 && 3 <= (friends9.size - types_.length)) {
         types_ += `${parseInt(`${alerto}`) ^ 2}`;
         break;
      }
       let upgrade6 = 0.0;
      awayD = `${(String.fromCharCode(109,0) == linkz ? linkz.length : weibop.length)}`;
      if (awayD.length == 2729010) {
         break;
      }
   } while ((awayD.length == 2729010) && (contextg.length >= 1));
      weibop.push(hookso.size);
      private_41 += 3 * awayD.length;
      playlistk += "1";
   do {
       let topicR = [String.fromCharCode(105,108,98,99,95,53,95,55,52,0), String.fromCharCode(104,95,57,54,95,114,97,100,102,0)];
       let bannerj = 1;
      for (let i = 0; i < 1; i++) {
         topicR.push(1 * bannerj);
      }
          let hnewsK = [72, 290, 422];
          let lang1 = new Map([[String.fromCharCode(119,95,52,55,95,115,112,101,99,105,97,108,0),false ], [String.fromCharCode(112,101,114,109,105,116,116,101,100,95,114,95,53,55,0),true ], [String.fromCharCode(112,95,50,95,101,109,111,106,105,115,0),true ]]);
          let register_eM = 3.0;
         topicR.push(bannerj);
         hnewsK.push(hnewsK.length);
         lang1[`${register_eM}`] = hnewsK.length;
         register_eM /= Math.max(parseFloat(`${lang1.size}`), 2);
      for (let j = 0; j < 2; j++) {
          let contextQ = 0;
         bannerj >>= Math.min(2, Math.abs(contextQ));
      }
      while (topicR.length > bannerj) {
         bannerj &= topicR.length;
         break;
      }
          let mode6 = String.fromCharCode(100,101,115,99,95,101,95,51,50,0);
         topicR = [bannerj * 3];
         mode6 = "3";
      do {
          let modal0 = 1.0;
         bannerj >>= Math.min(Math.abs(topicR.length << (Math.min(2, Math.abs(parseInt(`${modal0}`))))), 2);
         if (bannerj == 367018) {
            break;
         }
      } while ((bannerj == 367018) && (5 >= (bannerj >> (Math.min(Math.abs(4), 1))) && (4 >> (Math.min(1, Math.abs(bannerj)))) >= 2));
      hongkong5[`${typinge}`] = typinge * 3;
      if (4556246 == hongkong5.size) {
         break;
      }
   } while ((4556246 == hongkong5.size) && (Array.from(hongkong5.values()).includes(weibop.length)));
   if (time_90.includes(`${typinge}`)) {
      typinge /= Math.max(2, time_90.length % 2);
   }

    props.onLiveEnd?.();
      private_41 /= Math.max(3, awayD.length);
   do {
       let fastC = true;
       let internet0 = new Map([[String.fromCharCode(109,105,110,105,95,113,95,55,48,0),61], [String.fromCharCode(115,104,97,112,101,95,103,95,57,57,0),858], [String.fromCharCode(116,114,97,110,102,115,101,114,95,51,95,50,51,0),825]]);
       let stringX = String.fromCharCode(113,95,48,95,97,102,102,105,110,101,0);
          let heartf = 5.0;
         stringX += `${stringX.length}`;
         heartf -= 2 / (Math.max(9, parseInt(`${heartf}`)));
      for (let x = 0; x < 3; x++) {
         fastC = !fastC || internet0.size > 13;
      }
      while ((stringX.length / 1) > 1 && (stringX.length / (Math.max(5, internet0.size))) > 1) {
         internet0 = new Map([[`${internet0.size}`, 2]]);
         break;
      }
      if (2 < stringX.length && fastC) {
          let popupt = [433, 387, 30];
          let auto_ukY = 4.0;
         fastC = popupt.length == internet0.size;
         popupt = [parseInt(`${auto_ukY}`)];
      }
         stringX += "2";
      if ((internet0.size | stringX.length) > 5 && 5 > (5 | stringX.length)) {
         stringX += `${internet0.size}`;
      }
      if (stringX.endsWith(`${internet0.size}`)) {
         stringX += `${stringX.length / 2}`;
      }
         internet0[`${fastC}`] = ((fastC ? 1 : 1) << (Math.min(Math.abs(internet0.size), 2)));
      if (stringX.length < 3) {
         stringX = `${((fastC ? 4 : 4) * internet0.size)}`;
      }
      time_90 = `${weibop.length >> (Math.min(Math.abs(2), 1))}`;
      if (1259643 == time_90.length) {
         break;
      }
   } while ((time_90.length > 3) && (1259643 == time_90.length));
   if (switch_vnM != awayD) {
      awayD = "2";
   }
      contextg += `${switch_vnM.length / 3}`;
       let confirmationr = 2;
       let jnewsa = 0.0;
       let yellowd = 1.0;
         yellowd -= confirmationr >> (Math.min(Math.abs(parseInt(`${jnewsa}`)), 4));
      if (1.34 < (jnewsa - 3.16) && 5 < (confirmationr << (Math.min(Math.abs(4), 5)))) {
         jnewsa /= Math.max(1 - confirmationr, 5);
      }
      typinge &= weibop.length;
      playlistk = `${typinge}`;
       let pointR = String.fromCharCode(117,95,55,57,95,115,105,103,116,101,114,109,0);
       let backA = false;
       let middlej = String.fromCharCode(118,97,97,112,105,95,103,95,50,53,0);
         backA = pointR.includes(`${backA}`);
       let green9 = String.fromCharCode(110,95,57,53,95,103,101,110,101,114,97,108,0);
       let memberm = String.fromCharCode(116,95,50,56,95,98,121,112,97,115,115,105,110,103,0);
      for (let q = 0; q < 2; q++) {
          let filledR = true;
          let tooltips2 = new Map([[String.fromCharCode(107,115,101,116,95,119,95,57,51,0),47], [String.fromCharCode(112,97,103,101,110,117,109,98,101,114,95,102,95,52,50,0),323], [String.fromCharCode(106,95,53,50,95,97,99,99,101,115,115,105,110,103,0),871]]);
          let otherJ = String.fromCharCode(117,95,57,49,95,109,97,103,101,110,116,97,0);
          let clubL = String.fromCharCode(100,95,52,52,95,100,111,112,115,0);
         backA = (tooltips2.size % (Math.max(otherJ.length, 7))) < 13;
         filledR = !filledR || clubL.length < 59;
         tooltips2[clubL] = clubL.length;
         otherJ = `${1 | clubL.length}`;
      }
          let networky = 1.0;
          let typingx = String.fromCharCode(103,95,50,54,95,111,114,105,103,0);
          let refreshG = 4;
         middlej = `${((backA ? 1 : 3) ^ 1)}`;
         networky *= 3 & typingx.length;
         typingx = `${refreshG >> (Math.min(Math.abs(1), 2))}`;
         refreshG ^= typingx.length * 1;
      while (backA || middlej.length <= 3) {
         middlej = `${(String.fromCharCode(52,0) == memberm ? memberm.length : (backA ? 3 : 5))}`;
         break;
      }
      do {
         green9 = "2";
         if (green9 == String.fromCharCode(54,112,48,53,56,103,52,0)) {
            break;
         }
      } while ((green9.includes(memberm)) && (green9 == String.fromCharCode(54,112,48,53,56,103,52,0)));
      if (middlej != String.fromCharCode(115,0)) {
         memberm += "2";
      }
          let resend7 = 3.0;
         middlej += `${(memberm.length | (backA ? 1 : 3))}`;
         resend7 /= Math.max(parseFloat(`${parseInt(`${resend7}`)}`), 2);
      for (let k = 0; k < 1; k++) {
          let a_positionD = String.fromCharCode(106,95,52,55,95,97,118,105,103,97,116,105,111,110,0);
          let miniV = String.fromCharCode(115,97,116,117,114,97,116,105,111,110,95,110,95,49,54,0);
         green9 += `${(green9 == String.fromCharCode(90,0) ? middlej.length : green9.length)}`;
         a_positionD += `${a_positionD.length}`;
         miniV += `${(miniV == String.fromCharCode(102,0) ? miniV.length : a_positionD.length)}`;
      }
      linkz = `${linkz.length ^ 1}`;
      linkz = `${awayD.length}`;

  };

  const onFullscreenPlayerDidDismiss = () => {
       let g_centerJ = 4.0;
    let transfer3 = String.fromCharCode(114,95,51,95,114,101,115,117,108,117,116,105,111,110,0);
    let shirt0 = new Map([[String.fromCharCode(106,95,51,54,95,111,103,103,0),260], [String.fromCharCode(99,95,52,48,95,97,110,97,108,121,115,105,115,0),23]]);
    let sheetQ = new Map([[String.fromCharCode(108,95,57,50,95,114,101,110,111,114,109,101,0),String.fromCharCode(109,97,107,101,109,97,99,112,107,103,95,52,95,57,51,0)], [String.fromCharCode(99,95,49,50,95,100,100,99,116,0),String.fromCharCode(100,95,54,52,95,99,115,99,104,101,109,101,0)], [String.fromCharCode(120,97,115,109,95,98,95,50,56,0),String.fromCharCode(118,95,52,50,95,115,101,108,101,99,116,0)]]);
    let indicator8 = String.fromCharCode(103,114,111,119,105,110,103,95,102,95,55,52,0);
    let logo5 = new Map([[String.fromCharCode(115,97,102,97,114,121,95,107,95,54,54,0),false ], [String.fromCharCode(114,111,117,110,100,110,101,115,115,95,55,95,55,56,0),false ], [String.fromCharCode(121,95,56,54,95,105,110,115,105,100,101,0),false ]]);
    let chartn = String.fromCharCode(119,105,114,101,102,114,97,109,101,95,105,95,53,48,0);
    let page5 = [457, 263];
    let whistleA = [String.fromCharCode(113,95,49,48,48,95,112,114,111,103,114,101,115,115,105,118,101,0), String.fromCharCode(110,111,110,114,100,95,97,95,49,56,0)];
    let philippinesD = 4.0;
    let baidui = String.fromCharCode(103,95,53,57,95,102,108,97,115,104,105,110,103,0);
    let sourceN = 1.0;
    let analytic7 = new Map([[String.fromCharCode(112,111,115,116,112,114,111,99,101,115,115,95,109,95,52,48,0),819], [String.fromCharCode(116,95,50,50,95,114,103,116,99,0),273]]);
    let zhengpianp = 4.0;
    let appleA = 3.0;
    let langkeyc = String.fromCharCode(105,95,53,52,95,101,118,100,110,115,0);
    let tempu = String.fromCharCode(120,95,52,49,95,109,117,109,98,97,105,0);
      chartn = `${parseInt(`${g_centerJ}`) + 2}`;
   do {
       let signinup7 = true;
       let historyJ = 5.0;
       let eighteenR = String.fromCharCode(117,95,56,57,95,114,101,102,99,111,117,110,116,0);
          let assistZ = String.fromCharCode(100,95,50,95,98,108,99,107,0);
          let selectionf = 5.0;
          let register_0qR = String.fromCharCode(116,104,114,101,97,100,112,111,111,108,95,108,95,53,53,0);
         eighteenR = `${(String.fromCharCode(100,0) == eighteenR ? parseInt(`${selectionf}`) : eighteenR.length)}`;
         assistZ = `${assistZ.length & 3}`;
         selectionf += parseFloat(`${2}`);
         register_0qR += `${assistZ.length}`;
       let sportb = String.fromCharCode(110,99,111,109,105,110,103,95,56,95,49,56,0);
          let footballR = new Map([[String.fromCharCode(101,95,50,49,95,116,114,97,112,0),800], [String.fromCharCode(107,95,55,51,95,104,101,116,97,0),451], [String.fromCharCode(104,100,101,99,95,98,95,50,52,0),162]]);
         eighteenR += `${eighteenR.length % 1}`;
         footballR = new Map([[`${footballR.size}`, footballR.size | footballR.size]]);
      if (1 <= sportb.length) {
         eighteenR = `${eighteenR.length}`;
      }
         signinup7 = !signinup7;
          let update_tv = 3.0;
          let logoutt = 0.0;
          let event0 = String.fromCharCode(112,114,111,118,105,100,105,110,103,95,97,95,52,55,0);
         signinup7 = (event0.length * parseInt(`${logoutt}`)) > 81;
         update_tv /= Math.max(2, 1 / (Math.max(parseInt(`${update_tv}`), 2)));
         logoutt -= parseFloat(`${parseInt(`${update_tv}`)}`);
         historyJ /= Math.max(parseInt(`${historyJ}`) | 2, 2);
          let tumbnailS = String.fromCharCode(99,95,52,55,95,98,101,122,101,108,0);
          let fast7 = 3.0;
          let temperatureS = String.fromCharCode(114,95,54,52,95,117,116,102,0);
         eighteenR = `${sportb.length}`;
         tumbnailS = `${parseInt(`${fast7}`) ^ temperatureS.length}`;
         fast7 *= parseInt(`${fast7}`);
         temperatureS = `${temperatureS.length & 1}`;
       let matchesE = String.fromCharCode(115,119,114,101,115,97,109,112,108,101,95,110,95,53,48,0);
       let away2 = String.fromCharCode(106,107,101,110,99,95,102,95,52,56,0);
      whistleA = [logo5.size];
      if (whistleA.length == 441639) {
         break;
      }
   } while ((whistleA.length == 441639) && ((whistleA.length << (Math.min(Math.abs(shirt0.size), 4))) < 2 && 1 < (shirt0.size << (Math.min(Math.abs(2), 2)))));
   for (let t = 0; t < 1; t++) {
      sheetQ[baidui] = baidui.length + parseInt(`${philippinesD}`);
   }
   do {
      chartn = `${indicator8.length ^ parseInt(`${g_centerJ}`)}`;
      if (String.fromCharCode(119,105,103,53,104,49,100,111,95,0) == chartn) {
         break;
      }
   } while ((String.fromCharCode(119,105,103,53,104,49,100,111,95,0) == chartn) && (1.41 < (g_centerJ * chartn.length) || 1.41 < (chartn.length * g_centerJ)));
       let thailandk = false;
       let filedg = 4;
       let backward4 = true;
      for (let z = 0; z < 2; z++) {
          let clocka = String.fromCharCode(97,114,105,116,104,95,119,95,52,50,0);
          let stepD = 4.0;
          let styleJ = String.fromCharCode(108,111,103,103,101,114,115,95,53,95,52,49,0);
          let actionsl = 1.0;
         thailandk = thailandk && 98.76 > actionsl;
         clocka += `${3 | parseInt(`${stepD}`)}`;
         stepD -= parseFloat(`${styleJ.length ^ parseInt(`${stepD}`)}`);
         styleJ = `${3 * clocka.length}`;
         actionsl += (String.fromCharCode(101,0) == clocka ? parseInt(`${stepD}`) : clocka.length);
      }
      while (!thailandk) {
         filedg -= ((thailandk ? 2 : 3));
         break;
      }
      if (5 == (filedg >> (Math.min(Math.abs(4), 3)))) {
         backward4 = filedg >= 33 && thailandk;
      }
      while (backward4) {
         thailandk = 67 < filedg;
         break;
      }
      for (let a = 0; a < 1; a++) {
         backward4 = !backward4;
      }
      while (1 > (2 - filedg)) {
         filedg |= filedg;
         break;
      }
      while (2 < filedg) {
          let tickedL = [727, 48, 682];
          let actionw = 5.0;
         backward4 = filedg > 57;
         tickedL = [1];
         actionw -= tickedL.length >> (Math.min(2, Math.abs(parseInt(`${actionw}`))));
         break;
      }
       let change5 = String.fromCharCode(101,116,104,114,101,97,100,105,110,103,95,112,95,49,48,48,0);
      do {
         backward4 = !backward4;
         if (backward4 ? !backward4 : backward4) {
            break;
         }
      } while (((filedg * 1) < 1 && !backward4) && (backward4 ? !backward4 : backward4));
      chartn = `${parseInt(`${philippinesD}`)}`;
      indicator8 = `${sheetQ.size}`;
   while ((chartn.length - parseInt(`${sourceN}`)) < 1 && 2.80 < (3.7 - sourceN)) {
      chartn += `${chartn.length}`;
      break;
   }
      page5.push(2 * parseInt(`${g_centerJ}`));
   for (let f = 0; f < 1; f++) {
      sourceN /= Math.max(parseFloat(`${3 ^ parseInt(`${appleA}`)}`), 2);
   }
   while (3 < (parseInt(`${sourceN}`) / (Math.max(analytic7.size, 9))) && (analytic7.size | 3) < 4) {
      sourceN += parseFloat(`${3 % (Math.max(parseInt(`${zhengpianp}`), 9))}`);
      break;
   }
      baidui += `${1 >> (Math.min(Math.abs(parseInt(`${zhengpianp}`)), 5))}`;
      chartn = `${chartn.length}`;
      appleA /= Math.max(2, 1);
   do {
      baidui += `${parseInt(`${appleA}`)}`;
      if (baidui.length == 1876025) {
         break;
      }
   } while ((baidui.length == 1876025) && (3 == baidui.length || transfer3 == String.fromCharCode(112,0)));
      analytic7[`${appleA}`] = analytic7.size;
      philippinesD += parseInt(`${philippinesD}`);
      g_centerJ -= sheetQ.size / 2;
       let checkboxe = 4;
         checkboxe %= Math.max(checkboxe | 3, 5);
      for (let u = 0; u < 1; u++) {
          let dicem = 0;
          let zhengpianu = String.fromCharCode(101,108,101,118,97,116,101,95,99,95,49,51,0);
          let checkboxa = String.fromCharCode(101,120,112,111,114,116,101,100,95,102,95,55,49,0);
          let with_l98 = String.fromCharCode(113,115,111,114,116,95,49,95,54,50,0);
         checkboxe -= 2 / (Math.max(1, checkboxa.length));
         dicem %= Math.max(4, dicem);
         zhengpianu = `${zhengpianu.length / 1}`;
         checkboxa += `${dicem / 1}`;
         with_l98 = "1";
      }
         checkboxe /= Math.max(checkboxe, 4);
      sheetQ = new Map([[`${shirt0.size}`, parseInt(`${appleA}`)]]);

    dispatch(togglePlayPaused());
   if (1 >= (chartn.length >> (Math.min(3, Math.abs(logo5.size)))) && (1 >> (Math.min(4, Math.abs(logo5.size)))) >= 1) {
      chartn += `${3 & chartn.length}`;
   }
   while ((sourceN * 2.85) < 4.14 || 3.76 < (2.85 * sourceN)) {
       let eact8 = true;
       let blackq = 4.0;
       let rightB = [String.fromCharCode(115,116,115,99,95,107,95,57,48,0), String.fromCharCode(107,95,49,50,95,100,101,108,97,117,110,97,121,0)];
       let flyerP = String.fromCharCode(97,100,118,97,110,99,101,100,95,103,95,53,50,0);
          let delegate_rB = false;
         blackq -= (parseFloat(`${parseInt(`${blackq}`) * (eact8 ? 5 : 2)}`));
         delegate_rB = (delegate_rB ? delegate_rB : delegate_rB);
      if (rightB.includes(blackq)) {
         rightB = [(String.fromCharCode(66,0) == flyerP ? rightB.length : flyerP.length)];
      }
          let tailk = [875, 637, 351];
         rightB.push(3 - rightB.length);
         tailk.push(2);
          let configy = 0;
          let firebaseN = 2.0;
         rightB.push(3 ^ parseInt(`${blackq}`));
         configy /= Math.max(parseInt(`${firebaseN}`), 4);
         firebaseN -= parseFloat(`${1 >> (Math.min(Math.abs(configy), 4))}`);
         blackq *= parseFloat(`${3}`);
         blackq -= parseFloat(`${3}`);
      if (!eact8) {
         eact8 = 18.6 <= blackq;
      }
          let suggestionv = [14, 835];
         flyerP = `${(parseInt(`${blackq}`) & (eact8 ? 5 : 5))}`;
         suggestionv = [1];
      if (rightB.length > 3) {
         rightB.push(((eact8 ? 4 : 5) % (Math.max(rightB.length, 5))));
      }
       let humidityI = 2.0;
       let carouselW = 0.0;
         carouselW -= parseFloat(`${1}`);
      do {
         carouselW -= parseFloat(`${rightB.length & parseInt(`${humidityI}`)}`);
         if (carouselW == 686454.0) {
            break;
         }
      } while ((3.94 <= (carouselW - 3.8) && (humidityI - 3.8) <= 1.14) && (carouselW == 686454.0));
      sourceN += parseFloat(`${parseInt(`${sourceN}`) % (Math.max(parseInt(`${zhengpianp}`), 9))}`);
      break;
   }
   for (let u = 0; u < 1; u++) {
      sourceN += parseFloat(`${parseInt(`${sourceN}`)}`);
   }
   if ((shirt0.size >> (Math.min(Math.abs(analytic7.size), 3))) < 4) {
      analytic7[`${appleA}`] = 3;
   }
       let serviceG = String.fromCharCode(110,95,54,95,104,100,108,114,0);
       let topicZ = [985, 631];
         topicZ.push(1 << (Math.min(4, serviceG.length)));
         serviceG += `${topicZ.length + serviceG.length}`;
       let footballz = false;
       let untickD = new Map([[String.fromCharCode(118,95,53,48,95,115,101,110,100,97,108,108,0),786], [String.fromCharCode(97,114,116,105,115,116,95,109,95,53,48,0),727]]);
       let activea = new Map([[String.fromCharCode(102,114,101,101,112,97,100,100,114,115,95,118,95,53,54,0),39], [String.fromCharCode(115,95,52,52,95,99,111,109,109,97,0),556]]);
         footballz = activea.size < untickD.size;
      do {
         activea[serviceG] = serviceG.length % 3;
         if (activea.size == 895824) {
            break;
         }
      } while ((3 >= (activea.size % 5)) && (activea.size == 895824));
      baidui = `${analytic7.size}`;
      zhengpianp -= parseInt(`${sourceN}`) + 2;
   if (page5.length > appleA) {
      page5.push(1 << (Math.min(4, Math.abs(shirt0.size))));
   }
       let historyt = String.fromCharCode(109,97,116,116,101,100,95,52,95,49,53,0);
          let catagoryl = String.fromCharCode(102,95,55,52,95,118,105,118,111,0);
         historyt += `${historyt.length}`;
         catagoryl = `${2 + catagoryl.length}`;
         historyt = `${historyt.length}`;
         historyt = `${2 << (Math.min(3, historyt.length))}`;
      baidui = `${page5.length >> (Math.min(Math.abs(2), 4))}`;
   for (let f = 0; f < 2; f++) {
       let sort6 = String.fromCharCode(100,114,111,112,111,102,102,95,122,95,49,57,0);
       let downloaderm = String.fromCharCode(121,111,102,102,115,101,116,95,48,95,48,0);
          let page4 = String.fromCharCode(99,97,115,101,115,95,104,95,56,54,0);
         sort6 += `${page4.length << (Math.min(sort6.length, 1))}`;
         sort6 += "2";
       let detailv = 1;
      if (downloaderm.length == 4) {
         downloaderm += `${2 - downloaderm.length}`;
      }
         downloaderm = `${2 + downloaderm.length}`;
         sort6 = `${(sort6 == String.fromCharCode(52,0) ? detailv : sort6.length)}`;
      chartn = `${3 & parseInt(`${g_centerJ}`)}`;
   }
      philippinesD /= Math.max(chartn.length - page5.length, 1);
   while ((logo5.size ^ 4) == 5) {
      logo5[transfer3] = logo5.size ^ transfer3.length;
      break;
   }
      logo5 = new Map([[`${logo5.size}`, 1]]);
      whistleA.push(1);
       let selli = false;
       let popupS = String.fromCharCode(103,95,54,48,95,116,116,97,103,0);
       let nativeQ = 5.0;
      do {
         popupS += `${popupS.length}`;
         if (String.fromCharCode(54,116,98,105,0) == popupS) {
            break;
         }
      } while ((selli || 5 > popupS.length) && (String.fromCharCode(54,116,98,105,0) == popupS));
      if (popupS.length <= 3) {
         selli = nativeQ < popupS.length;
      }
      do {
         popupS += `${3 * parseInt(`${nativeQ}`)}`;
         if (popupS == String.fromCharCode(118,99,119,0)) {
            break;
         }
      } while ((popupS == String.fromCharCode(118,99,119,0)) && (popupS.length < parseInt(`${nativeQ}`)));
      for (let f = 0; f < 2; f++) {
          let robotoh = String.fromCharCode(110,95,56,50,95,100,105,118,105,100,111,114,0);
          let settingsH = 5.0;
          let promotionx = true;
         selli = popupS.length < 21;
         robotoh += `${3 | parseInt(`${settingsH}`)}`;
         settingsH *= parseFloat(`${1 % (Math.max(6, parseInt(`${settingsH}`)))}`);
         promotionx = String.fromCharCode(121,0) == robotoh;
      }
       let predictionH = false;
       let watchd = false;
      for (let m = 0; m < 2; m++) {
         selli = (!watchd ? predictionH : !watchd);
      }
      for (let t = 0; t < 3; t++) {
         popupS = `${(parseInt(`${nativeQ}`) << (Math.min(1, Math.abs((predictionH ? 3 : 3)))))}`;
      }
       let cornerY = String.fromCharCode(100,95,50,52,95,99,108,97,105,109,115,0);
         cornerY = `${((watchd ? 3 : 1) % (Math.max(6, cornerY.length)))}`;
      shirt0 = new Map([[baidui, baidui.length]]);
       let trashw = 3.0;
       let c_countD = [487, 957];
       let event2 = String.fromCharCode(98,95,50,50,95,119,101,98,109,100,101,99,0);
         c_countD.push(c_countD.length);
      if (4.58 == (trashw - 3.65)) {
         trashw /= Math.max(3, parseInt(`${trashw}`) / (Math.max(c_countD.length, 8)));
      }
       let albumu = true;
         albumu = c_countD.length >= 84;
         c_countD.push(((albumu ? 1 : 5) * 2));
         event2 = `${(parseInt(`${trashw}`) | (albumu ? 5 : 1))}`;
          let statsB = 1.0;
          let description_ic6 = String.fromCharCode(112,114,101,115,101,108,101,99,116,95,114,95,55,51,0);
          let moond = 2.0;
         trashw += 3;
         statsB += parseFloat(`${1 + description_ic6.length}`);
         description_ic6 = `${parseInt(`${moond}`)}`;
         moond *= description_ic6.length;
      do {
         trashw *= c_countD.length * parseInt(`${trashw}`);
         if (trashw == 1446556.0) {
            break;
         }
      } while ((4 > (c_countD.length + parseInt(`${trashw}`)) || (trashw + 4.21) > 1.71) && (trashw == 1446556.0));
      for (let s = 0; s < 1; s++) {
         c_countD = [(String.fromCharCode(75,0) == event2 ? event2.length : (albumu ? 5 : 3))];
      }
      analytic7 = new Map([[`${whistleA.length}`, 1]]);
       let sports = String.fromCharCode(108,101,97,115,101,95,52,95,56,52,0);
       let main_uW = 0.0;
       let sportss = [896, 376];
       let arrowm = false;
       let reduceri = true;
      while (5 <= (sports.length % (Math.max(3, 3))) && 5 <= (3 * sports.length)) {
         main_uW += (parseFloat(`${1 & (reduceri ? 3 : 4)}`));
         break;
      }
      for (let e = 0; e < 1; e++) {
          let halfm = 1;
          let stepG = 2;
         sportss = [((reduceri ? 4 : 2) & sportss.length)];
         halfm >>= Math.min(2, Math.abs(stepG));
         stepG /= Math.max(halfm, 2);
      }
         arrowm = reduceri && sportss.length == 33;
         main_uW += parseFloat(`${parseInt(`${main_uW}`)}`);
          let logout7 = 4.0;
         reduceri = 74.60 <= main_uW;
         logout7 /= Math.max(2, parseInt(`${logout7}`));
      do {
         arrowm = main_uW < 10.90 && arrowm;
         if (arrowm ? !arrowm : arrowm) {
            break;
         }
      } while ((arrowm ? !arrowm : arrowm) && (arrowm));
       let shrinkr = 2.0;
       let gemfilew = 3.0;
         shrinkr -= parseFloat(`${parseInt(`${gemfilew}`) ^ 1}`);
      baidui += `${sports.length}`;
      sheetQ = new Map([[`${philippinesD}`, parseInt(`${philippinesD}`) - parseInt(`${zhengpianp}`)]]);
      page5 = [tempu.length & 3];

  };

  const onRetry = () => {
       let adultL = [736, 396];
    let megaphoneg = 5.0;
    let private_cF = String.fromCharCode(117,95,55,50,95,104,105,103,104,98,105,116,100,101,112,116,104,0);
    let redirect2 = true;
    let short_uw = String.fromCharCode(100,101,108,105,118,101,114,95,122,95,53,56,0);
    let uploadM = String.fromCharCode(117,110,115,97,102,101,95,55,95,52,56,0);
    let storem = String.fromCharCode(109,97,107,101,116,97,114,98,97,108,108,95,121,95,56,50,0);
    let nextw = String.fromCharCode(104,95,52,48,95,116,104,114,101,97,100,115,0);
    let albumg = [570, 581, 57];
    let lightJ = String.fromCharCode(100,111,108,108,97,114,95,108,95,50,55,0);
    let backgroundG = [811, 301];
    let delegate_uU = String.fromCharCode(109,95,55,56,95,101,108,115,101,0);
   if (2 == short_uw.length) {
      short_uw += "2";
   }
       let auto_rd = String.fromCharCode(109,95,52,48,95,98,105,113,117,97,100,0);
      while (5 <= auto_rd.length || 5 <= auto_rd.length) {
         auto_rd = "3";
         break;
      }
         auto_rd = `${auto_rd.length & 1}`;
      while (2 > auto_rd.length && 2 > auto_rd.length) {
         auto_rd = `${auto_rd.length}`;
         break;
      }
      adultL.push(parseInt(`${megaphoneg}`));
      short_uw = `${uploadM.length}`;
   do {
       let combineT = String.fromCharCode(109,117,120,101,114,115,95,110,95,53,57,0);
       let catagoryb = String.fromCharCode(99,111,110,118,101,114,116,101,100,95,55,95,49,48,0);
       let expiredd = false;
         expiredd = catagoryb.length < 24;
         combineT += `${catagoryb.length - combineT.length}`;
          let eactY = String.fromCharCode(116,101,109,112,111,114,97,114,105,108,121,95,97,95,53,51,0);
          let modityt = 0.0;
          let privacy1 = [727, 613];
         catagoryb = "1";
         eactY = `${parseInt(`${modityt}`)}`;
         modityt *= 3;
         privacy1.push(parseInt(`${modityt}`) / 1);
         expiredd = !expiredd;
          let match5 = String.fromCharCode(106,95,56,53,95,116,115,120,0);
          let nterstitiali = [String.fromCharCode(98,95,52,54,95,100,105,102,102,105,110,103,0), String.fromCharCode(112,97,103,101,108,105,115,116,95,101,95,53,50,0)];
         combineT += `${(combineT == String.fromCharCode(70,0) ? combineT.length : (expiredd ? 3 : 3))}`;
         match5 = `${match5.length}`;
         nterstitiali.push(nterstitiali.length & match5.length);
      storem += `${backgroundG.length}`;
      if (470520 == storem.length) {
         break;
      }
   } while ((470520 == storem.length) && (storem.startsWith(`${redirect2}`)));
      nextw += `${uploadM.length / 1}`;
   do {
       let tickedr = String.fromCharCode(115,95,55,51,95,115,101,116,97,99,116,105,118,101,107,101,121,0);
       let guide_ = new Map([[String.fromCharCode(99,111,110,116,114,97,99,116,115,95,110,95,53,51,0),973], [String.fromCharCode(102,95,56,57,95,114,101,99,111,110,0),388], [String.fromCharCode(103,95,54,48,95,112,101,105,114,115,0),807]]);
       let sliderr = 1;
       let popupk = 3.0;
       let specL = [638, 165];
      if (popupk < sliderr) {
          let bellP = String.fromCharCode(102,95,52,53,95,114,101,115,105,103,110,105,110,103,0);
          let eactH = 5.0;
         popupk /= Math.max(4, parseFloat(`${bellP.length}`));
         bellP += `${parseInt(`${eactH}`) * 3}`;
         eactH -= parseInt(`${eactH}`) ^ parseInt(`${eactH}`);
      }
         specL = [guide_.size];
      do {
          let tickede = [165, 185];
          let graym = String.fromCharCode(98,95,49,53,95,100,111,119,110,115,97,109,112,108,105,110,103,0);
          let catalogV = 3.0;
          let launchF = false;
         sliderr ^= ((launchF ? 1 : 2) * 1);
         tickede.push(3 + tickede.length);
         graym = `${3 - parseInt(`${catalogV}`)}`;
         catalogV -= 1 | graym.length;
         launchF = (parseInt(`${catalogV}`) / (Math.max(graym.length, 4))) > 80;
         if (sliderr == 592405) {
            break;
         }
      } while ((sliderr == 592405) && ((specL.length / 5) > 4));
       let sheetg = 4.0;
          let large2 = String.fromCharCode(102,95,51,55,95,112,105,99,116,0);
          let linel = String.fromCharCode(111,95,52,95,106,111,98,113,0);
          let canvas_ = [44, 495];
         tickedr = `${large2.length >> (Math.min(Math.abs(2), 2))}`;
         large2 = `${(linel == String.fromCharCode(122,0) ? canvas_.length : linel.length)}`;
         canvas_.push(linel.length % (Math.max(2, 3)));
         tickedr = `${guide_.size & tickedr.length}`;
          let membershipd = String.fromCharCode(102,105,110,100,95,53,95,55,51,0);
          let transferq = 2.0;
         sheetg += guide_.size;
         membershipd = `${membershipd.length ^ 3}`;
         transferq /= Math.max(parseFloat(`${parseInt(`${transferq}`)}`), 1);
      for (let y = 0; y < 2; y++) {
          let infoO = 0.0;
          let friendsL = String.fromCharCode(98,95,53,51,95,102,101,119,0);
          let u_countZ = String.fromCharCode(118,95,49,51,95,112,105,116,99,104,0);
         tickedr = `${sliderr}`;
         infoO /= Math.max(2, (u_countZ == String.fromCharCode(70,0) ? friendsL.length : u_countZ.length));
         friendsL += `${parseInt(`${infoO}`) - friendsL.length}`;
      }
         guide_[`${popupk}`] = parseInt(`${popupk}`);
         guide_[`${sliderr}`] = tickedr.length & 2;
      if (tickedr.length > 3) {
         sliderr ^= guide_.size;
      }
      for (let o = 0; o < 2; o++) {
         popupk += parseFloat(`${tickedr.length | specL.length}`);
      }
      do {
         tickedr = `${sliderr}`;
         if (tickedr == String.fromCharCode(112,105,100,0)) {
            break;
         }
      } while ((tickedr == String.fromCharCode(112,105,100,0)) && (!tickedr.startsWith(`${specL.length}`)));
          let football5 = new Map([[String.fromCharCode(112,95,51,54,95,112,114,101,102,101,114,114,101,100,0),802], [String.fromCharCode(109,105,108,108,101,114,95,50,95,50,48,0),803]]);
          let orangeI = String.fromCharCode(101,110,100,101,100,95,119,95,51,50,0);
          let pressureI = true;
         specL = [3 & sliderr];
         football5 = new Map([[`${football5.size}`, 3]]);
         orangeI += `${(String.fromCharCode(107,0) == orangeI ? football5.size : orangeI.length)}`;
         pressureI = orangeI.length < 18;
          let disconnectedU = [204, 50, 778];
          let sendc = new Map([[String.fromCharCode(107,95,49,57,95,102,97,99,101,0),200], [String.fromCharCode(119,116,118,102,105,108,101,95,116,95,49,55,0),249]]);
          let layout8 = 3.0;
         guide_[`${layout8}`] = 2;
         disconnectedU.push(sendc.size);
         sendc = new Map([[`${sendc.size}`, disconnectedU.length >> (Math.min(Math.abs(1), 3))]]);
         layout8 *= disconnectedU.length;
      albumg = [2 * private_cF.length];
      if (4391575 == albumg.length) {
         break;
      }
   } while ((1 <= albumg.length) && (4391575 == albumg.length));
      short_uw += "1";
   do {
      private_cF += "3";
      if (String.fromCharCode(118,117,113,0) == private_cF) {
         break;
      }
   } while ((String.fromCharCode(118,117,113,0) == private_cF) && (private_cF.length > parseInt(`${megaphoneg}`)));
   for (let a = 0; a < 1; a++) {
      short_uw += `${adultL.length}`;
   }
   while (nextw.length < 5) {
      storem += `${storem.length * nextw.length}`;
      break;
   }
       let philippinesn = String.fromCharCode(107,95,56,54,95,120,118,109,99,0);
       let eighteenW = String.fromCharCode(100,105,115,97,112,112,101,97,114,97,110,99,101,95,54,95,56,53,0);
         philippinesn = `${eighteenW.length}`;
          let taiwanY = [195, 698];
          let langkeyK = false;
          let servicel = String.fromCharCode(101,120,112,111,110,101,110,116,105,97,116,105,111,110,95,101,95,52,51,0);
         eighteenW = `${((langkeyK ? 2 : 5))}`;
         taiwanY.push(servicel.length | taiwanY.length);
         langkeyK = servicel == String.fromCharCode(104,0);
      if (philippinesn.length == 3) {
          let layout9 = String.fromCharCode(110,105,99,101,95,105,95,50,49,0);
          let textq = 3.0;
          let screenc = 5.0;
          let bodanf = String.fromCharCode(114,101,115,105,100,117,101,95,106,95,55,50,0);
          let regengt = [930, 619];
         eighteenW = `${philippinesn.length}`;
         layout9 += `${regengt.length}`;
         textq *= parseFloat(`${regengt.length >> (Math.min(Math.abs(1), 2))}`);
         screenc += bodanf.length % (Math.max(10, parseInt(`${textq}`)));
         bodanf += `${bodanf.length}`;
      }
      if (eighteenW.startsWith(`${philippinesn.length}`)) {
          let interstitialr = 1.0;
          let const_1P = new Map([[String.fromCharCode(103,95,56,95,116,99,112,0),930], [String.fromCharCode(105,95,53,51,95,112,111,115,116,101,110,99,111,100,101,0),539], [String.fromCharCode(99,109,97,99,95,111,95,57,50,0),829]]);
         philippinesn = `${2 & const_1P.size}`;
         interstitialr -= parseInt(`${interstitialr}`) / 2;
         const_1P = new Map([[`${interstitialr}`, parseInt(`${interstitialr}`) - 2]]);
      }
      for (let m = 0; m < 2; m++) {
          let connectionK = 2.0;
         philippinesn += `${eighteenW.length}`;
         connectionK += parseInt(`${connectionK}`) | 3;
      }
         eighteenW = `${philippinesn.length}`;
      short_uw += `${nextw.length}`;

    playerRef.current?.seek?.(0);
   while ((adultL.length - 5) >= 5) {
      uploadM = "3";
      break;
   }
      lightJ += `${(3 << (Math.min(3, Math.abs((redirect2 ? 4 : 5)))))}`;
   while (lightJ.length == nextw.length) {
       let privilegeI = true;
       let calendarI = 5.0;
       let modalb = String.fromCharCode(118,95,56,53,95,114,97,100,105,97,110,115,0);
       let y_playerv = [115, 403, 472];
         modalb = `${y_playerv.length / (Math.max(1, parseInt(`${calendarI}`)))}`;
         privilegeI = modalb.length >= 49 && privilegeI;
         y_playerv.push(2);
      do {
         modalb = `${(modalb.length ^ (privilegeI ? 1 : 4))}`;
         if (modalb == String.fromCharCode(99,108,109,53,112,98,97,105,0)) {
            break;
         }
      } while ((!privilegeI) && (modalb == String.fromCharCode(99,108,109,53,112,98,97,105,0)));
      if ((calendarI * 3.74) == 4.67) {
         calendarI += (modalb == String.fromCharCode(74,0) ? modalb.length : (privilegeI ? 5 : 4));
      }
      while (!privilegeI) {
          let kcopy_pdz = String.fromCharCode(99,108,117,115,116,101,114,115,95,121,95,55,55,0);
          let arrowt = String.fromCharCode(98,105,111,109,101,116,114,121,95,122,95,55,52,0);
          let sport8 = 3.0;
          let z_countY = [167, 603, 9];
          let s_center4 = [String.fromCharCode(107,101,114,110,101,114,95,100,95,49,56,0), String.fromCharCode(99,95,50,54,95,100,97,115,104,101,115,0)];
         modalb += `${1 - arrowt.length}`;
         kcopy_pdz += `${s_center4.length}`;
         arrowt += `${z_countY.length ^ parseInt(`${sport8}`)}`;
         sport8 *= (String.fromCharCode(119,0) == kcopy_pdz ? s_center4.length : kcopy_pdz.length);
         z_countY = [z_countY.length];
         break;
      }
       let plusg = 1;
       let register_gs = 3;
      while (1 >= (modalb.length - plusg)) {
         modalb += `${3 % (Math.max(plusg, 4))}`;
         break;
      }
       let policyL = String.fromCharCode(110,111,101,120,112,95,116,95,56,56,0);
      while ((register_gs + plusg) >= 4) {
         register_gs *= policyL.length;
         break;
      }
         privilegeI = register_gs < 11;
         policyL += `${1 + plusg}`;
      nextw += `${(private_cF == String.fromCharCode(104,0) ? private_cF.length : lightJ.length)}`;
      break;
   }
   for (let r = 0; r < 3; r++) {
      nextw += `${3 >> (Math.min(3, albumg.length))}`;
   }
   do {
       let assistz = String.fromCharCode(116,95,55,54,95,118,100,101,98,117,103,0);
       let checkboxU = 3.0;
         checkboxU += parseFloat(`${parseInt(`${checkboxU}`)}`);
      while ((checkboxU / (Math.max(8, parseFloat(`${assistz.length}`)))) >= 3.32) {
         checkboxU /= Math.max(parseFloat(`${assistz.length}`), 5);
         break;
      }
         assistz = `${assistz.length >> (Math.min(Math.abs(2), 3))}`;
      if (!assistz.includes(`${checkboxU}`)) {
          let typingf = 0.0;
          let ballK = 4.0;
          let playlistB = true;
         assistz += `${3 - parseInt(`${typingf}`)}`;
         typingf -= 3 ^ parseInt(`${ballK}`);
         ballK /= Math.max(parseFloat(`${2 * parseInt(`${ballK}`)}`), 3);
         playlistB = ballK <= 98.67 || playlistB;
      }
      for (let y = 0; y < 3; y++) {
          let linef = 0.0;
          let edit6 = 4;
          let pager = true;
          let profilei = [486, 91, 1];
         checkboxU /= Math.max(3, (parseFloat(`${profilei.length - (pager ? 4 : 3)}`)));
         linef -= parseFloat(`${3 ^ edit6}`);
         edit6 %= Math.max(edit6, 1);
         pager = edit6 <= 58;
         profilei.push(1);
      }
          let sideL = 4;
          let filledM = true;
          let servicev = 1.0;
         checkboxU += parseFloat(`${sideL}`);
         sideL %= Math.max(3 | parseInt(`${servicev}`), 5);
         filledM = 96.49 == servicev;
      storem += `${albumg.length}`;
      if (storem == String.fromCharCode(105,121,98,53,53,0)) {
         break;
      }
   } while ((adultL.length >= 5) && (storem == String.fromCharCode(105,121,98,53,53,0)));
   while (4 > (storem.length << (Math.min(Math.abs(2), 2))) || 2 > (storem.length << (Math.min(4, backgroundG.length)))) {
       let rcopy_zt = 4.0;
         rcopy_zt /= Math.max(parseFloat(`${parseInt(`${rcopy_zt}`)}`), 1);
       let themeZ = new Map([[String.fromCharCode(110,95,54,57,95,109,98,117,118,0),String.fromCharCode(97,114,116,105,99,108,101,115,95,99,95,57,56,0)], [String.fromCharCode(102,95,53,95,120,121,122,116,97,98,108,101,115,0),String.fromCharCode(120,95,51,56,0)]]);
       let ticka = new Map([[String.fromCharCode(101,110,99,114,121,112,116,105,110,103,95,50,95,51,56,0),String.fromCharCode(102,105,114,101,100,95,116,95,49,54,0)], [String.fromCharCode(102,114,97,109,101,115,105,122,101,115,95,54,95,50,57,0),String.fromCharCode(98,95,53,48,95,98,111,116,104,0)], [String.fromCharCode(108,117,116,114,103,98,95,109,95,57,57,0),String.fromCharCode(110,101,97,114,101,115,116,95,99,95,55,0)]]);
          let q_lockG = new Map([[String.fromCharCode(100,101,99,105,115,105,111,110,95,103,95,57,49,0),752], [String.fromCharCode(101,95,57,57,95,98,114,111,97,100,99,97,115,116,105,110,103,0),291]]);
          let orangeB = 2.0;
         ticka = new Map([[`${ticka.size}`, ticka.size]]);
         q_lockG[`${orangeB}`] = q_lockG.size >> (Math.min(Math.abs(3), 5));
         orangeB += parseInt(`${orangeB}`) / (Math.max(1, q_lockG.size));
      storem = `${private_cF.length}`;
      break;
   }
   for (let k = 0; k < 3; k++) {
      backgroundG = [lightJ.length];
   }
      backgroundG.push(((redirect2 ? 3 : 3) / 1));
   do {
       let moviesI = new Map([[String.fromCharCode(104,95,54,95,119,97,114,110,0),false ], [String.fromCharCode(109,111,110,111,116,111,110,121,95,120,95,54,52,0),false ]]);
       let i_imageh = String.fromCharCode(120,95,53,52,95,99,111,112,121,102,100,0);
       let floater6 = [8, 678];
       let crossq = String.fromCharCode(98,105,110,95,99,95,53,52,0);
       let skipj = String.fromCharCode(104,95,53,55,95,102,116,118,118,101,114,116,108,105,110,101,0);
       let arrowB = String.fromCharCode(115,95,55,51,95,114,101,115,116,111,114,97,116,105,111,110,0);
      for (let p = 0; p < 1; p++) {
          let condensedm = 3.0;
          let completer = [330, 237, 201];
         floater6.push(crossq.length);
         condensedm *= parseFloat(`${parseInt(`${condensedm}`) + completer.length}`);
         completer.push(1 - parseInt(`${condensedm}`));
      }
         moviesI[arrowB] = 3;
          let stylev = [818, 146];
         i_imageh = `${arrowB.length}`;
         stylev = [stylev.length / (Math.max(stylev.length, 7))];
      for (let b = 0; b < 3; b++) {
         skipj = `${(i_imageh == String.fromCharCode(75,0) ? moviesI.size : i_imageh.length)}`;
      }
          let modityn = String.fromCharCode(113,95,51,57,95,112,101,114,115,105,115,116,101,110,99,101,0);
         i_imageh += `${(arrowB == String.fromCharCode(106,0) ? arrowB.length : floater6.length)}`;
         modityn = `${modityn.length / 3}`;
      while (i_imageh.length <= 2) {
          let topich = [String.fromCharCode(121,95,55,51,95,99,97,108,108,111,117,116,0), String.fromCharCode(97,95,55,0)];
          let detailsm = 1;
          let soundX = String.fromCharCode(106,95,54,49,95,102,101,116,99,104,0);
          let scheduleb = String.fromCharCode(102,114,101,101,112,95,122,95,56,48,0);
         moviesI[crossq] = floater6.length;
         topich.push(scheduleb.length);
         detailsm /= Math.max(1, 3 | topich.length);
         soundX += `${scheduleb.length}`;
         break;
      }
       let sortW = String.fromCharCode(98,103,114,97,95,112,95,55,52,0);
       let incidentX = String.fromCharCode(120,95,53,50,95,111,103,103,118,111,114,98,105,115,0);
      lightJ = `${storem.length & albumg.length}`;
      if (1310039 == lightJ.length) {
         break;
      }
   } while ((1310039 == lightJ.length) && (!redirect2));
      storem += `${short_uw.length}`;
   while (!short_uw.endsWith(`${backgroundG.length}`)) {
      backgroundG = [parseInt(`${megaphoneg}`)];
      break;
   }

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
