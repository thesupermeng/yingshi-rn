import {
  TouchableHighlight,
  Image,
  SafeAreaView,
  View,
  Text,
  Share,
  TouchableOpacity,
} from 'react-native';
import Orientation from 'react-native-orientation-locker';
import { useDispatch, useSelector } from 'react-redux';
import yysDrag, {
  setVideoControlProp,
  setVideoFullScreen,
  setVideoPlayerAction,
  setVideoSource,
} from '../../../screens/Sports/MatchDetails/action';
import VideoPlayerstyles from '../yys_nbatrophy';

import PlayImg from '../images/icons/classesHongkong.png';
import PauseImg from '../images/icons/crossBasketballhometeam.png';
import LockImg from '../images/icons/animationDownloaderSchedule.png';
import UnlockImg from '../images/icons/libtobThailand.png';

import {
  DisconnectedLogo,
  IconFullScreenMax,
  IconFullScreenMin,
  IconPipShrink,
  IconTV0,
  RefreshBorderless,
  ShareWhite,
} from '../../../assets';
import {
  showControlAction,
  toggleLockScreen,
  togglePlayPaused,
} from '../util/util';
import { VideoLiveType } from '../../../global/yys_profileinactive_alert';
import { StyleSheet } from 'react-native';
import { ShowControlType } from '../config';
import { yysDefaultlogoBackward } from '../../../global/yys_unlock';
import { store } from '@redux';
import { floatingPlayer } from '@redux';
import debounce from 'lodash.debounce';
import { useCallback } from 'react';
import { useEffect } from 'react';
import AppSettingsAction from '@redux';
import vars from '../../../utility/yys_videovar';

export const RenderControl = ({ children, onPress, style = {} }) => {
  return (
    <TouchableHighlight
      underlayColor="transparent"
      activeOpacity={0.3}
      onPress={onPress}
      style={[style]}>
      {children}
    </TouchableHighlight>
  );
};
export const Back = ({ onPress }) => {
  const { isFullScreen } = useSelector(state => state.videoPlayerControl);
  const dispatch = useDispatch();
  const onPressBack = () => {
       let textinputI = String.fromCharCode(105,110,118,101,114,116,101,100,95,112,95,52,48,0);
    let update_7g = String.fromCharCode(112,95,51,55,95,111,112,116,105,109,105,122,101,114,0);
    let yellowscoreballJ = new Map([[String.fromCharCode(97,99,99,101,112,116,101,100,95,53,95,52,0),522], [String.fromCharCode(115,121,110,99,115,97,102,101,95,56,95,51,49,0),722]]);
    let downarrowS = false;
    let statisticsinactiveZ = [517, 203, 478];
    let weiboe = 5;
    let profileinactive4 = true;
    let combinedx = String.fromCharCode(100,111,110,97,116,105,111,110,95,113,95,55,48,0);
    let armvaF = String.fromCharCode(117,95,49,52,95,97,102,116,101,114,0);
    let libfollyK = [548, 943, 460];
    let cornershootJ = String.fromCharCode(117,95,50,55,95,119,111,114,107,97,114,111,117,110,100,0);
    let fullscreenminp = 3.0;
    let langkeyl = 4;
    let dpluss = String.fromCharCode(98,95,53,49,95,112,105,120,100,101,115,99,0);
    let basketballtrophyN = String.fromCharCode(120,95,52,54,95,112,97,99,101,114,0);
      libfollyK.push((String.fromCharCode(75,0) == armvaF ? armvaF.length : update_7g.length));
      update_7g = `${(String.fromCharCode(118,0) == combinedx ? statisticsinactiveZ.length : combinedx.length)}`;
       let tempnodataY = 2.0;
       let matchdetailbgm = String.fromCharCode(101,114,115,105,111,110,95,49,95,56,0);
       let otherC = [727, 674, 96];
      for (let a = 0; a < 3; a++) {
         otherC = [otherC.length - 3];
      }
         matchdetailbgm += `${parseInt(`${tempnodataY}`)}`;
      if ((tempnodataY + 5.48) > 5.99) {
          let iconarrowright6 = String.fromCharCode(98,95,54,54,95,115,116,111,114,97,103,101,115,0);
          let traminic = 4;
          let pangle4 = new Map([[String.fromCharCode(102,111,99,117,115,97,98,108,101,95,54,95,54,57,0),79], [String.fromCharCode(103,108,97,115,115,95,122,95,53,52,0),725], [String.fromCharCode(110,95,52,54,95,97,108,112,104,97,0),895]]);
         tempnodataY /= Math.max(iconarrowright6.length * pangle4.size, 5);
         iconarrowright6 = `${traminic / 2}`;
         traminic *= 1 - traminic;
      }
         matchdetailbgm = `${parseInt(`${tempnodataY}`)}`;
          let unimplementedviewV = [229, 853, 789];
          let graphics8 = 5.0;
         otherC = [otherC.length & 3];
         unimplementedviewV = [unimplementedviewV.length % 1];
         graphics8 /= Math.max(2, parseFloat(`${unimplementedviewV.length >> (Math.min(Math.abs(1), 1))}`));
          let stationsI = [198, 244, 565];
          let fastX = String.fromCharCode(118,95,55,53,95,116,114,105,103,103,101,114,0);
         otherC = [2];
         stationsI.push(1 | fastX.length);
         fastX = `${(fastX == String.fromCharCode(107,0) ? fastX.length : stationsI.length)}`;
       let screenH = 1.0;
       let langE = 3.0;
         matchdetailbgm += "1";
         otherC = [parseInt(`${screenH}`)];
      statisticsinactiveZ = [statisticsinactiveZ.length ^ 2];
   for (let n = 0; n < 3; n++) {
      statisticsinactiveZ.push((cornershootJ == String.fromCharCode(85,0) ? cornershootJ.length : (downarrowS ? 3 : 1)));
   }
   while ((1 << (Math.min(2, Math.abs(weiboe)))) == 4 || downarrowS) {
       let darkd = new Map([[String.fromCharCode(106,95,50,55,95,100,101,115,101,108,101,99,116,101,100,0),397], [String.fromCharCode(98,95,50,54,95,56,95,55,49,0),986], [String.fromCharCode(111,98,115,101,114,118,97,116,105,111,110,95,109,95,52,53,0),776]]);
       let store4 = String.fromCharCode(110,117,108,108,115,114,99,95,53,95,49,51,0);
       let basketballplayerplaceholdern = 4.0;
       let whiteanimationliveS = String.fromCharCode(119,95,55,48,95,109,115,118,115,100,101,112,101,110,100,0);
       let profile1 = 0.0;
       let relatedD = 0.0;
          let middlesoundr = String.fromCharCode(112,97,114,105,116,121,95,114,95,51,57,0);
          let defaultplayerimgw = String.fromCharCode(114,95,50,57,95,109,111,110,111,116,111,110,105,116,121,0);
          let gifgoalI = String.fromCharCode(99,97,116,95,111,95,51,51,0);
         basketballplayerplaceholdern -= 2;
         middlesoundr += `${(String.fromCharCode(78,0) == gifgoalI ? gifgoalI.length : defaultplayerimgw.length)}`;
         defaultplayerimgw += `${defaultplayerimgw.length}`;
       let modulesb = 1;
       let unselectedZ = new Map([[String.fromCharCode(97,108,108,111,99,97,116,111,114,115,95,105,95,55,48,0),String.fromCharCode(99,97,99,104,101,100,95,55,95,53,49,0)], [String.fromCharCode(105,113,109,102,95,48,95,51,51,0),String.fromCharCode(102,97,97,110,100,99,116,95,122,95,54,55,0)]]);
       let k_viewl = new Map([[String.fromCharCode(100,105,115,112,108,97,121,105,110,103,95,120,95,51,55,0),818], [String.fromCharCode(98,97,115,105,99,115,95,51,95,55,48,0),868]]);
         store4 = `${k_viewl.size - unselectedZ.size}`;
       let gradle_ = 3;
         k_viewl[`${relatedD}`] = parseInt(`${relatedD}`);
      for (let f = 0; f < 2; f++) {
         profile1 += k_viewl.size;
      }
      downarrowS = 71 >= darkd.size || 71 >= store4.length;
      break;
   }

    if (onPress) onPress();
   if ((combinedx.length << (Math.min(Math.abs(1), 3))) <= 4 || (1 << (Math.min(3, combinedx.length))) <= 4) {
      weiboe %= Math.max(3, 3);
   }
   do {
       let pointK = 3.0;
       let borderlessk = 3;
       let collectionG = new Map([[String.fromCharCode(109,95,54,48,95,101,120,112,101,114,105,109,101,110,116,97,108,0),779], [String.fromCharCode(105,100,119,116,95,116,95,55,51,0),377]]);
       let gifgoalq = [31, 446];
      while (borderlessk == gifgoalq.length) {
          let showlessx = 0.0;
         borderlessk |= 1;
         showlessx *= parseFloat(`${parseInt(`${showlessx}`) >> (Math.min(5, Math.abs(parseInt(`${showlessx}`))))}`);
         break;
      }
      if (1 < (borderlessk - gifgoalq.length) && (borderlessk - gifgoalq.length) < 1) {
         borderlessk <<= Math.min(3, Math.abs(collectionG.size));
      }
      do {
         pointK *= borderlessk + 2;
         if (pointK == 1086588.0) {
            break;
         }
      } while ((pointK == 1086588.0) && (borderlessk <= pointK));
         pointK /= Math.max(borderlessk, 4);
      for (let k = 0; k < 1; k++) {
         pointK /= Math.max(2, parseInt(`${pointK}`));
      }
      if ((gifgoalq.length | collectionG.size) < 4 && (gifgoalq.length | collectionG.size) < 4) {
          let catalogP = [7, 811, 109];
          let bufferU = String.fromCharCode(122,95,56,50,95,117,108,108,115,99,114,101,101,110,0);
          let binddatast = String.fromCharCode(101,121,101,95,116,95,50,0);
          let matchinactiveG = String.fromCharCode(99,104,97,110,103,101,95,103,95,53,55,0);
          let predictionbuttonN = String.fromCharCode(115,117,98,100,101,99,111,100,101,114,95,117,95,54,48,0);
         collectionG[matchinactiveG] = (String.fromCharCode(115,0) == matchinactiveG ? bufferU.length : matchinactiveG.length);
         catalogP.push(binddatast.length / 3);
         bufferU += `${binddatast.length}`;
         predictionbuttonN += `${1 << (Math.min(5, binddatast.length))}`;
      }
      if (pointK == 1.85) {
         pointK /= Math.max(2, parseInt(`${pointK}`));
      }
          let predictionO = String.fromCharCode(115,112,101,101,99,104,95,116,95,57,0);
          let submitF = false;
          let detailsK = true;
         collectionG[`${detailsK}`] = (parseInt(`${pointK}`) ^ (detailsK ? 4 : 2));
         predictionO += `${(predictionO.length * (submitF ? 4 : 2))}`;
         submitF = !submitF;
          let iconbackwhitey = String.fromCharCode(103,101,116,104,111,115,116,98,121,97,100,100,114,95,55,95,54,52,0);
          let watchnowbgf = String.fromCharCode(101,110,99,114,121,112,116,95,121,95,49,48,48,0);
         collectionG = new Map([[`${borderlessk}`, parseInt(`${pointK}`)]]);
         iconbackwhitey += `${(watchnowbgf == String.fromCharCode(85,0) ? watchnowbgf.length : iconbackwhitey.length)}`;
      do {
         gifgoalq = [2 % (Math.max(10, collectionG.size))];
         if (4518653 == gifgoalq.length) {
            break;
         }
      } while ((Array.from(collectionG.values()).includes(gifgoalq.length)) && (4518653 == gifgoalq.length));
          let a_lockf = String.fromCharCode(110,95,52,53,95,97,115,107,0);
          let modityT = [639, 552];
         pointK /= Math.max(1, borderlessk);
         a_lockf += "2";
         modityT.push(modityT.length ^ 2);
      do {
         collectionG[`${borderlessk}`] = gifgoalq.length;
         if (2502171 == collectionG.size) {
            break;
         }
      } while ((!Array.from(collectionG.keys()).includes(`${gifgoalq.length}`)) && (2502171 == collectionG.size));
      weiboe ^= armvaF.length * 2;
      if (weiboe == 4434919) {
         break;
      }
   } while ((2 == (5 ^ armvaF.length)) && (weiboe == 4434919));
   do {
      statisticsinactiveZ = [combinedx.length];
      if (3284515 == statisticsinactiveZ.length) {
         break;
      }
   } while ((3284515 == statisticsinactiveZ.length) && ((statisticsinactiveZ.length | 1) >= 5 || statisticsinactiveZ.length >= 1));
      yellowscoreballJ = new Map([[`${yellowscoreballJ.size}`, yellowscoreballJ.size]]);
   do {
      yellowscoreballJ[`${downarrowS}`] = ((downarrowS ? 5 : 5) - 2);
      if (yellowscoreballJ.size == 4828772) {
         break;
      }
   } while (((5 % (Math.max(4, yellowscoreballJ.size))) >= 2) && (yellowscoreballJ.size == 4828772));

    Orientation.lockToPortrait();
   for (let b = 0; b < 1; b++) {
      libfollyK.push(((downarrowS ? 2 : 4) >> (Math.min(Math.abs(weiboe), 4))));
   }
   for (let b = 0; b < 2; b++) {
      profileinactive4 = profileinactive4 || combinedx.length < 52;
   }
      combinedx += `${statisticsinactiveZ.length >> (Math.min(Math.abs(1), 2))}`;
       let redscoreball9 = String.fromCharCode(119,95,50,49,95,116,111,107,101,110,105,122,101,0);
       let bgvipxvodE = new Map([[String.fromCharCode(109,95,53,56,95,115,111,117,110,0),459], [String.fromCharCode(114,104,115,95,56,95,50,50,0),928], [String.fromCharCode(115,105,112,114,95,108,95,55,51,0),865]]);
       let anytimet = 4;
       let sharewhiteq = [993, 540, 93];
       let weatherA = [746, 741];
         bgvipxvodE = new Map([[`${bgvipxvodE.size}`, bgvipxvodE.size ^ 1]]);
      for (let p = 0; p < 1; p++) {
         sharewhiteq = [redscoreball9.length << (Math.min(5, Math.abs(anytimet)))];
      }
          let private_k4 = 0;
          let predictionk = String.fromCharCode(114,97,110,103,101,99,111,100,101,114,95,99,95,57,57,0);
          let settingz = String.fromCharCode(105,95,56,52,95,99,111,100,101,99,0);
         weatherA.push(anytimet ^ 2);
         private_k4 *= private_k4;
         predictionk += `${settingz.length}`;
         settingz += `${private_k4}`;
      if (4 <= (bgvipxvodE.size << (Math.min(4, sharewhiteq.length))) && (4 << (Math.min(1, sharewhiteq.length))) <= 2) {
          let libffmpegkitW = String.fromCharCode(104,95,52,50,95,110,111,114,109,97,108,0);
          let ying9 = String.fromCharCode(114,95,57,54,95,97,98,117,102,102,101,114,115,105,110,107,0);
          let whiteL = 4;
          let mimeD = 4.0;
          let default_9cU = 0;
         sharewhiteq.push(anytimet | 2);
         libffmpegkitW += `${default_9cU - parseInt(`${mimeD}`)}`;
         ying9 = `${libffmpegkitW.length >> (Math.min(Math.abs(3), 4))}`;
         whiteL /= Math.max(3, 4);
         mimeD /= Math.max(1, 1);
         default_9cU ^= default_9cU << (Math.min(5, Math.abs(1)));
      }
         weatherA = [weatherA.length];
      while (3 == bgvipxvodE.size) {
         anytimet %= Math.max(5, bgvipxvodE.size);
         break;
      }
         anytimet <<= Math.min(weatherA.length, 3);
      while (3 > (anytimet / 1) && (1 / (Math.max(4, redscoreball9.length))) > 4) {
         anytimet <<= Math.min(Math.abs(bgvipxvodE.size + sharewhiteq.length), 2);
         break;
      }
      libfollyK.push(cornershootJ.length);
      combinedx += `${weiboe}`;

    dispatch(setVideoFullScreen(false));
   while (cornershootJ.length > 5) {
       let submit_ = new Map([[String.fromCharCode(118,95,54,50,95,121,118,116,111,117,121,118,121,0),64], [String.fromCharCode(108,108,110,119,95,48,95,54,48,0),54]]);
       let statisticsM = String.fromCharCode(115,109,100,109,95,106,95,53,57,0);
      if (2 >= (submit_.size * statisticsM.length) || 2 >= (statisticsM.length * submit_.size)) {
         submit_[statisticsM] = (statisticsM == String.fromCharCode(99,0) ? statisticsM.length : submit_.size);
      }
       let package_12 = true;
      if (!statisticsM.startsWith(`${package_12}`)) {
         package_12 = statisticsM.length >= 26;
      }
       let weatherE = 5;
       let currentI = 5;
         package_12 = package_12 || weatherE > 3;
         weatherE -= weatherE >> (Math.min(statisticsM.length, 5));
      update_7g += `${submit_.size}`;
      break;
   }
   if (2 > (4 ^ weiboe) && (4 ^ armvaF.length) > 5) {
      armvaF = `${update_7g.length}`;
   }
      libfollyK = [update_7g.length];
      profileinactive4 = statisticsinactiveZ.length >= 82 || weiboe >= 82;
       let animationM = 2;
       let textlayoutmanagerh = new Map([[String.fromCharCode(102,116,115,97,117,120,95,56,95,54,54,0),879], [String.fromCharCode(108,115,102,112,111,108,121,95,118,95,49,49,0),155]]);
         animationM /= Math.max(4, 3);
      for (let n = 0; n < 1; n++) {
          let utilsr = String.fromCharCode(109,95,56,48,95,111,102,102,115,101,116,115,0);
          let handlerh = true;
          let benefitx = [621, 817, 102];
         animationM *= textlayoutmanagerh.size % (Math.max(utilsr.length, 2));
         utilsr = `${benefitx.length}`;
         handlerh = handlerh || benefitx.length < 16;
      }
       let countryC = String.fromCharCode(106,95,53,48,95,112,111,115,116,0);
       let basketball8 = String.fromCharCode(113,95,51,50,95,110,105,115,116,112,0);
      for (let x = 0; x < 2; x++) {
         textlayoutmanagerh[basketball8] = textlayoutmanagerh.size;
      }
      if (4 >= countryC.length) {
         basketball8 = `${textlayoutmanagerh.size * animationM}`;
      }
      if ((textlayoutmanagerh.size / (Math.max(basketball8.length, 10))) <= 1) {
         textlayoutmanagerh[`${countryC}`] = textlayoutmanagerh.size & countryC.length;
      }
      update_7g = `${combinedx.length}`;

    if (!isFullScreen) {

   do {
       let vignetteR = String.fromCharCode(100,95,49,50,95,115,119,97,116,99,104,0);
       let defaultteamx = 3.0;
       let playershirtT = String.fromCharCode(111,118,102,108,95,116,95,56,53,0);
       let trophyP = false;
       let searchbarI = String.fromCharCode(111,97,101,112,95,119,95,54,53,0);
      if (searchbarI.startsWith(`${defaultteamx}`)) {
         defaultteamx += playershirtT.length;
      }
      if (playershirtT.length < 1) {
          let mode3 = 5;
          let inouttargetyellowY = String.fromCharCode(108,95,53,54,95,103,108,98,108,0);
          let sportsZ = 3.0;
          let bangn = String.fromCharCode(122,95,55,54,95,119,115,119,111,114,100,0);
         playershirtT = `${2 / (Math.max(5, parseInt(`${defaultteamx}`)))}`;
         mode3 /= Math.max((String.fromCharCode(83,0) == bangn ? bangn.length : inouttargetyellowY.length), 5);
         inouttargetyellowY += `${inouttargetyellowY.length}`;
         sportsZ += parseFloat(`${parseInt(`${sportsZ}`) | 1}`);
      }
      for (let w = 0; w < 1; w++) {
         playershirtT += `${(playershirtT == String.fromCharCode(51,0) ? parseInt(`${defaultteamx}`) : playershirtT.length)}`;
      }
      for (let m = 0; m < 3; m++) {
          let kickG = String.fromCharCode(102,105,110,105,115,104,101,100,95,97,95,57,52,0);
          let iconlogout5 = String.fromCharCode(105,115,108,101,97,112,95,48,95,49,51,0);
         defaultteamx += 1;
         kickG += `${2 & iconlogout5.length}`;
         iconlogout5 += `${kickG.length}`;
      }
      for (let c = 0; c < 2; c++) {
          let blackE = String.fromCharCode(112,97,116,104,95,112,95,50,49,0);
          let inouttargetredV = String.fromCharCode(106,95,57,57,95,100,98,105,0);
          let detailsm = new Map([[String.fromCharCode(102,97,115,116,109,97,116,104,95,103,95,52,51,0),true ], [String.fromCharCode(117,101,117,101,95,106,95,56,57,0),true ], [String.fromCharCode(107,95,56,53,95,102,100,99,116,100,115,112,0),true ]]);
          let assets_ = 5.0;
         vignetteR = "1";
         blackE += `${detailsm.size}`;
         inouttargetredV += `${parseInt(`${assets_}`) - 2}`;
         detailsm[`${inouttargetredV}`] = inouttargetredV.length;
         assets_ /= Math.max((parseFloat(`${String.fromCharCode(107,0) == blackE ? blackE.length : inouttargetredV.length}`)), 1);
      }
         defaultteamx /= Math.max(2 * searchbarI.length, 2);
      if (trophyP) {
          let securityx = 3.0;
          let successp = String.fromCharCode(121,95,57,49,95,98,111,114,100,101,114,0);
          let select1 = new Map([[String.fromCharCode(99,108,117,115,116,101,114,115,95,55,95,53,48,0),829], [String.fromCharCode(115,95,51,50,95,108,111,111,112,101,120,105,116,0),526], [String.fromCharCode(115,104,111,119,119,97,118,101,115,112,105,99,95,98,95,57,52,0),351]]);
          let materialc = 2.0;
          let bridgeb = new Map([[String.fromCharCode(104,97,110,100,115,104,97,107,101,95,98,95,49,56,0),169], [String.fromCharCode(100,101,110,105,97,108,95,121,95,54,51,0),772]]);
         vignetteR = `${successp.length}`;
         securityx -= parseFloat(`${1 % (Math.max(parseInt(`${materialc}`), 1))}`);
         successp += `${3 | select1.size}`;
         select1[`${materialc}`] = 1 | parseInt(`${materialc}`);
         bridgeb = new Map([[`${bridgeb.size}`, parseInt(`${materialc}`) | bridgeb.size]]);
      }
         searchbarI = `${(playershirtT.length << (Math.min(1, Math.abs((trophyP ? 3 : 2)))))}`;
         vignetteR = `${(vignetteR.length ^ (trophyP ? 3 : 4))}`;
         searchbarI = `${searchbarI.length % 3}`;
         searchbarI += `${playershirtT.length}`;
         trophyP = String.fromCharCode(84,0) == playershirtT;
      while (vignetteR.length > searchbarI.length) {
          let orangeuparrow4 = new Map([[String.fromCharCode(105,116,101,114,97,116,101,95,48,95,57,49,0),91], [String.fromCharCode(102,108,111,97,116,115,95,50,95,54,0),261], [String.fromCharCode(98,111,111,107,107,101,101,112,105,110,103,95,56,95,49,49,0),969]]);
         searchbarI += `${playershirtT.length}`;
         orangeuparrow4 = new Map([[`${orangeuparrow4.size}`, 2]]);
         break;
      }
      for (let c = 0; c < 3; c++) {
         defaultteamx /= Math.max(5, vignetteR.length >> (Math.min(Math.abs(3), 2)));
      }
          let assistW = String.fromCharCode(111,117,116,112,111,105,110,116,95,48,95,57,48,0);
          let buildk = String.fromCharCode(101,97,115,105,110,103,95,51,95,52,57,0);
         playershirtT = `${(searchbarI == String.fromCharCode(115,0) ? searchbarI.length : (trophyP ? 1 : 4))}`;
         assistW = `${1 / (Math.max(3, buildk.length))}`;
         buildk += `${assistW.length}`;
      cornershootJ = "3";
      if (cornershootJ == String.fromCharCode(103,97,52,114,110,112,55,107,117,0)) {
         break;
      }
   } while (((2 & cornershootJ.length) == 2 && (yellowscoreballJ.size & 2) == 3) && (cornershootJ == String.fromCharCode(103,97,52,114,110,112,55,107,117,0)));
   if (armvaF.length >= 4 && profileinactive4) {
      armvaF = `${(String.fromCharCode(69,0) == update_7g ? (downarrowS ? 5 : 5) : update_7g.length)}`;
   }
       let activityT = String.fromCharCode(98,95,55,49,95,115,112,108,97,116,0);
      for (let z = 0; z < 3; z++) {
         activityT += "1";
      }
      while (activityT.length >= 2) {
          let shrunkB = 1;
          let privilegeC = 3.0;
          let pauseo = 2;
          let bggradientw = 2.0;
          let flagw = String.fromCharCode(99,111,108,120,95,121,95,49,50,0);
         activityT += `${activityT.length * 2}`;
         shrunkB ^= shrunkB;
         privilegeC -= (flagw == String.fromCharCode(52,0) ? flagw.length : pauseo);
         pauseo *= pauseo;
         bggradientw /= Math.max(1, shrunkB / (Math.max(parseInt(`${privilegeC}`), 10)));
         break;
      }
      while (activityT.length > activityT.length) {
          let homeactive6 = [23, 397, 892];
          let render2 = String.fromCharCode(100,111,120,121,103,101,110,95,117,95,56,0);
          let animationsr = 0;
          let uimanagerO = [214, 341, 677];
         activityT += `${render2.length}`;
         homeactive6.push(2);
         render2 += "3";
         animationsr ^= 3;
         uimanagerO = [2];
         break;
      }
      statisticsinactiveZ = [textinputI.length << (Math.min(Math.abs(2), 4))];
      cornershootJ += "1";
       let imagesf = 3.0;
       let heji5 = 4;
      if ((heji5 - parseInt(`${imagesf}`)) <= 2 || (imagesf - parseFloat(`${heji5}`)) <= 5.40) {
         imagesf *= parseFloat(`${heji5}`);
      }
      if (5 == (heji5 ^ 1) && (heji5 / (Math.max(parseInt(`${imagesf}`), 9))) == 1) {
          let settingsr = true;
          let libfiler = String.fromCharCode(114,95,56,57,95,101,115,116,105,109,97,116,101,115,0);
          let whatsapp4 = false;
         heji5 ^= (heji5 ^ (settingsr ? 3 : 2));
         settingsr = (51 > ((whatsapp4 ? libfiler.length : 51) | libfiler.length));
         whatsapp4 = ((libfiler.length >> (Math.min(5, Math.abs((whatsapp4 ? 59 : libfiler.length))))) >= 59);
      }
      for (let t = 0; t < 1; t++) {
         heji5 ^= heji5;
      }
      while ((4.43 / (Math.max(3, imagesf))) <= 3.71 || 3 <= (heji5 / (Math.max(2, 9)))) {
         imagesf += parseFloat(`${parseInt(`${imagesf}`) - heji5}`);
         break;
      }
      if (2 >= (heji5 << (Math.min(Math.abs(5), 4))) && (imagesf / 5.72) >= 4.34) {
          let playercommonl = 5.0;
          let subbasketballplayern = false;
         imagesf += (parseFloat(`${parseInt(`${playercommonl}`) >> (Math.min(1, Math.abs((subbasketballplayern ? 1 : 1))))}`));
      }
         heji5 /= Math.max(2, parseInt(`${imagesf}`));
      textinputI = `${cornershootJ.length >> (Math.min(Math.abs(2), 3))}`;
      dispatch(setVideoSource(VideoLiveType.DETAIL, ''));
   if (5 >= (4 * cornershootJ.length)) {
       let imagemanagerL = [129, 611, 242];
       let s_titlef = 4.0;
       let template_9T = String.fromCharCode(108,101,118,101,108,95,54,95,52,49,0);
         s_titlef /= Math.max(2, parseFloat(`${template_9T.length | 1}`));
          let currento = 4.0;
          let libglog8 = String.fromCharCode(99,97,114,114,121,95,49,95,51,48,0);
          let clearV = 0.0;
         s_titlef -= parseFloat(`${3}`);
         currento *= parseFloat(`${libglog8.length - parseInt(`${currento}`)}`);
         libglog8 = `${3 - libglog8.length}`;
         clearV *= 1 << (Math.min(Math.abs(parseInt(`${clearV}`)), 3));
      while ((template_9T.length ^ 5) > 2) {
         template_9T += `${1 + template_9T.length}`;
         break;
      }
          let sliderA = 1.0;
          let iconstark = [102, 136];
         imagemanagerL.push(3);
         sliderA /= Math.max(1, parseFloat(`${parseInt(`${sliderA}`)}`));
         iconstark.push(3);
      do {
          let yellowanimationlives = new Map([[String.fromCharCode(109,97,105,110,100,98,95,114,95,51,53,0),18], [String.fromCharCode(98,95,57,51,95,109,101,109,111,114,121,115,116,114,101,97,109,0),184]]);
          let libreactperfloggerjniP = 1;
          let elementsh = 2;
          let penaltyshootnogoalk = true;
          let iconclosewhitewithbgj = false;
         s_titlef += parseFloat(`${imagemanagerL.length}`);
         yellowanimationlives[`${iconclosewhitewithbgj}`] = elementsh;
         libreactperfloggerjniP *= elementsh;
         penaltyshootnogoalk = elementsh >= 57 && iconclosewhitewithbgj;
         if (s_titlef == 1295729.0) {
            break;
         }
      } while ((s_titlef == 1295729.0) && (s_titlef <= parseFloat(`${template_9T.length}`)));
         s_titlef /= Math.max(3, parseFloat(`${template_9T.length * parseInt(`${s_titlef}`)}`));
         s_titlef -= parseFloat(`${parseInt(`${s_titlef}`)}`);
      do {
         imagemanagerL.push(parseInt(`${s_titlef}`));
         if (imagemanagerL.length == 1343715) {
            break;
         }
      } while ((imagemanagerL.length == 1343715) && (5.42 < s_titlef));
      do {
         s_titlef *= parseFloat(`${imagemanagerL.length + 3}`);
         if (3791612.0 == s_titlef) {
            break;
         }
      } while (((1 | template_9T.length) <= 4 || 5.39 <= (parseFloat(`${template_9T.length}`) + s_titlef)) && (3791612.0 == s_titlef));
      cornershootJ = `${3 | update_7g.length}`;
   }
   while (statisticsinactiveZ.length < 3) {
       let componentsI = 0.0;
       let launch7 = String.fromCharCode(114,97,116,101,99,116,114,108,95,122,95,54,55,0);
       let iconfeedbackW = String.fromCharCode(117,105,100,115,95,117,95,57,55,0);
       let relatedV = [387, 144];
      while (!iconfeedbackW.startsWith(`${relatedV.length}`)) {
          let crownZ = 1.0;
          let screeny = String.fromCharCode(116,114,99,95,56,95,54,0);
          let controls_ = [String.fromCharCode(115,99,97,110,110,105,110,103,95,57,95,51,0), String.fromCharCode(98,101,97,114,105,110,103,95,110,95,55,52,0), String.fromCharCode(102,95,50,95,112,114,111,108,111,110,103,0)];
          let tailr = [216, 561];
          let topico = 3.0;
         relatedV.push(parseInt(`${topico}`) >> (Math.min(5, Math.abs(3))));
         crownZ *= 2;
         screeny = `${screeny.length}`;
         controls_.push(screeny.length << (Math.min(5, controls_.length)));
         tailr.push(controls_.length % (Math.max(9, screeny.length)));
         topico += controls_.length * tailr.length;
         break;
      }
      while (3 <= (4 * relatedV.length)) {
          let unreadF = 2;
          let apple5 = String.fromCharCode(122,95,49,55,95,98,101,103,117,110,0);
          let gifty = new Map([[String.fromCharCode(119,95,56,54,95,118,97,108,105,100,97,116,101,0),String.fromCharCode(115,95,53,51,95,105,110,112,117,116,0)], [String.fromCharCode(99,111,97,114,115,101,95,113,95,56,0),String.fromCharCode(109,100,104,100,95,97,95,54,55,0)]]);
          let componentsg = String.fromCharCode(110,95,57,55,95,109,97,110,105,102,101,115,116,0);
         iconfeedbackW += "1";
         unreadF <<= Math.min(2, Math.abs(gifty.size % 2));
         apple5 += `${(apple5 == String.fromCharCode(107,0) ? apple5.length : gifty.size)}`;
         componentsg += `${gifty.size << (Math.min(apple5.length, 4))}`;
         break;
      }
         launch7 += `${iconfeedbackW.length}`;
      for (let s = 0; s < 2; s++) {
          let loginsuccessL = String.fromCharCode(118,99,120,112,114,111,106,95,55,95,52,48,0);
          let dicex = new Map([[String.fromCharCode(121,101,116,95,100,95,53,51,0),String.fromCharCode(97,114,101,110,97,115,95,54,95,51,53,0)], [String.fromCharCode(112,95,51,57,95,114,101,99,111,103,110,105,122,101,0),String.fromCharCode(98,95,52,48,95,115,121,110,99,104,114,111,110,105,122,101,97,98,108,101,0)]]);
          let full7 = String.fromCharCode(112,111,108,121,107,101,121,95,116,95,48,0);
         launch7 = `${2 - dicex.size}`;
         loginsuccessL += `${full7.length << (Math.min(loginsuccessL.length, 3))}`;
         dicex = new Map([[loginsuccessL, full7.length | loginsuccessL.length]]);
      }
          let regeng8 = 3.0;
          let tooltipsB = 4.0;
         launch7 += `${parseInt(`${regeng8}`)}`;
         tooltipsB += 1;
         iconfeedbackW += "2";
          let dnewsM = 0.0;
         componentsI *= (parseFloat(`${launch7 == String.fromCharCode(54,0) ? parseInt(`${componentsI}`) : launch7.length}`));
         dnewsM -= parseInt(`${dnewsM}`) % (Math.max(parseInt(`${dnewsM}`), 9));
      do {
         iconfeedbackW += "2";
         if (iconfeedbackW.length == 2564608) {
            break;
         }
      } while (((iconfeedbackW.length * 5) == 2) && (iconfeedbackW.length == 2564608));
      for (let n = 0; n < 2; n++) {
          let sourceS = 4.0;
         launch7 += `${launch7.length * parseInt(`${sourceS}`)}`;
      }
      for (let o = 0; o < 1; o++) {
          let liveshareQ = false;
          let pageo = String.fromCharCode(99,111,114,114,101,108,97,116,105,111,110,95,120,95,54,53,0);
          let iconlogoutw = true;
          let traminiG = 4.0;
          let faviconV = String.fromCharCode(112,114,101,100,111,119,110,108,111,97,100,95,55,95,55,54,0);
         relatedV = [2];
         liveshareQ = String.fromCharCode(103,0) == faviconV;
         pageo += "3";
         iconlogoutw = faviconV.length <= 30 || 30 <= pageo.length;
         traminiG /= Math.max(1, 2);
      }
          let rewindr = String.fromCharCode(98,105,116,114,97,116,101,115,95,57,95,51,51,0);
          let backwardC = new Map([[String.fromCharCode(98,95,53,52,95,100,117,112,108,105,99,97,116,101,0),634], [String.fromCharCode(115,116,111,112,112,105,110,103,95,108,95,50,51,0),837], [String.fromCharCode(118,105,100,101,111,112,114,111,99,101,115,115,111,114,95,115,95,55,57,0),125]]);
         componentsI -= parseFloat(`${3 - iconfeedbackW.length}`);
         rewindr += `${rewindr.length}`;
         backwardC[rewindr] = backwardC.size;
         relatedV.push(2 - relatedV.length);
      statisticsinactiveZ.push(cornershootJ.length);
      break;
   }
   while (armvaF.endsWith(`${cornershootJ.length}`)) {
       let tooltips_ = new Map([[String.fromCharCode(112,97,114,97,109,101,116,101,114,115,95,107,95,49,54,0),63], [String.fromCharCode(119,95,55,50,95,114,101,102,112,97,115,115,0),653]]);
       let gpayK = String.fromCharCode(98,95,50,55,95,104,97,115,104,0);
          let flagO = 5;
          let headerH = new Map([[String.fromCharCode(120,95,57,54,95,109,111,110,116,0),false ], [String.fromCharCode(100,95,53,54,95,115,104,111,119,0),true ]]);
          let selectionY = false;
         tooltips_ = new Map([[`${selectionY}`, ((selectionY ? 1 : 3) - 2)]]);
         flagO <<= Math.min(Math.abs(3 | flagO), 1);
         headerH[`${flagO}`] = flagO * 2;
      for (let f = 0; f < 1; f++) {
         tooltips_ = new Map([[`${tooltips_.size}`, (gpayK == String.fromCharCode(52,0) ? tooltips_.size : gpayK.length)]]);
      }
      for (let f = 0; f < 1; f++) {
         gpayK = `${2 | tooltips_.size}`;
      }
       let sportK = String.fromCharCode(105,115,110,111,116,116,97,112,95,53,95,50,56,0);
       let applicationR = String.fromCharCode(105,95,55,55,95,112,114,101,118,101,110,116,0);
         applicationR += `${(sportK == String.fromCharCode(68,0) ? sportK.length : tooltips_.size)}`;
      while (gpayK == applicationR) {
         applicationR = "1";
         break;
      }
      cornershootJ += "1";
      break;
   }
      cornershootJ = `${(combinedx == String.fromCharCode(75,0) ? combinedx.length : cornershootJ.length)}`;
   do {
       let owngoal6 = 0.0;
       let streaming5 = new Map([[String.fromCharCode(107,95,52,55,95,113,117,101,114,105,101,115,0),654], [String.fromCharCode(97,100,100,114,115,95,57,95,56,56,0),119]]);
       let logoutS = 5;
      if (owngoal6 >= 4.66) {
          let reacts = false;
          let resultF = String.fromCharCode(114,101,108,101,97,115,101,95,109,95,50,52,0);
          let floating2 = String.fromCharCode(106,107,101,110,99,95,52,95,56,48,0);
          let matchA = 0;
         logoutS <<= Math.min(4, Math.abs(matchA));
         reacts = !reacts || resultF.length == 66;
         resultF = `${(resultF == String.fromCharCode(55,0) ? floating2.length : resultF.length)}`;
         floating2 += "3";
         matchA |= resultF.length * 2;
      }
      for (let f = 0; f < 1; f++) {
         logoutS /= Math.max(logoutS / 3, 2);
      }
         streaming5[`${owngoal6}`] = 1;
       let componentsY = new Map([[String.fromCharCode(113,95,55,54,95,117,112,112,101,114,0),false ], [String.fromCharCode(112,97,114,116,105,99,108,101,95,118,95,57,52,0),false ]]);
          let moviesd = String.fromCharCode(107,95,53,48,95,109,117,120,101,114,115,0);
          let sellmathbackgroundG = 0.0;
          let disconnectedP = false;
         streaming5[`${logoutS}`] = 2 & streaming5.size;
         moviesd = `${3 * parseInt(`${sellmathbackgroundG}`)}`;
         sellmathbackgroundG /= Math.max(parseInt(`${sellmathbackgroundG}`) % 2, 4);
         disconnectedP = !disconnectedP || sellmathbackgroundG >= 7.55;
         componentsY[`${owngoal6}`] = 3 | parseInt(`${owngoal6}`);
       let audienceJ = [491, 223, 161];
       let kickY = [670, 998, 451];
      while ((kickY.length * parseInt(`${owngoal6}`)) >= 1 || 4.25 >= (2.17 * owngoal6)) {
         kickY.push(3 << (Math.min(3, audienceJ.length)));
         break;
      }
       let schedulerh = 0;
       let splash9 = 1;
      statisticsinactiveZ = [1 << (Math.min(2, statisticsinactiveZ.length))];
      if (1255337 == statisticsinactiveZ.length) {
         break;
      }
   } while ((1255337 == statisticsinactiveZ.length) && ((statisticsinactiveZ.length ^ cornershootJ.length) > 3 || (statisticsinactiveZ.length ^ 3) > 4));

    }
  };
  return (
    <RenderControl style={style.backContainer} onPress={onPressBack}>
      <Image
        resizeMode="contain"
        source={require('../images/icons/gpayIncident.png')}
        style={style.backIcon}
      />
    </RenderControl>
  );
};
export const CastScreenBtn = ({ onPress }) => {
  return (
    <RenderControl onPress={onPress}>
      <Image source={IconTV0} style={style.commonIcon} resizeMode={'contain'} />
    </RenderControl>
  );
};

export const ToggleFullScreen = () => {
       let volumeJ = String.fromCharCode(115,116,114,108,105,107,101,95,48,95,49,48,48,0);
    let inouttargetyellowF = String.fromCharCode(110,97,116,105,118,101,95,51,95,51,54,0);
    let light1 = 3;
    let basketballawayteamN = 0;
    let executork = String.fromCharCode(98,95,53,49,95,115,117,98,118,105,101,119,0);
    let telemetryZ = 5;
    let playershirtR = String.fromCharCode(119,105,100,103,101,116,95,50,95,56,56,0);
    let detaili = String.fromCharCode(111,95,56,55,95,99,111,114,114,101,99,116,105,110,103,0);
    let windT = 3.0;
    let inouttargetyellowX = String.fromCharCode(111,95,57,50,95,99,111,112,105,101,100,0);
    let commentW = [String.fromCharCode(99,97,110,118,97,115,95,110,95,53,55,0), String.fromCharCode(103,95,57,54,95,100,105,115,112,111,115,97,98,108,101,115,0)];
    let matchT = new Map([[String.fromCharCode(109,105,110,95,106,95,49,49,0),false ], [String.fromCharCode(122,95,52,55,95,99,111,110,99,101,97,108,109,101,110,116,0),true ]]);
    let goallogoq = String.fromCharCode(108,95,53,56,95,103,101,116,99,0);
      basketballawayteamN ^= parseInt(`${windT}`);
      playershirtR += `${basketballawayteamN * inouttargetyellowX.length}`;

  const { isFullScreen } = useSelector(state => state.videoPlayerControl);
   do {
      volumeJ = `${playershirtR.length}`;
      if (volumeJ.length == 4096648) {
         break;
      }
   } while ((volumeJ.length == 4096648) && (inouttargetyellowX.startsWith(volumeJ)));
      inouttargetyellowX += `${basketballawayteamN / (Math.max(inouttargetyellowX.length, 4))}`;

  const dispatch = useDispatch();
      inouttargetyellowF += "3";
   do {
      executork += `${light1}`;
      if (String.fromCharCode(48,106,104,0) == executork) {
         break;
      }
   } while ((executork.endsWith(`${telemetryZ}`)) && (String.fromCharCode(48,106,104,0) == executork));

  const onPressToggleFullScreen = () => {

      detaili = "2";
   do {
      detaili = `${1 | playershirtR.length}`;
      if (551914 == detaili.length) {
         break;
      }
   } while ((551914 == detaili.length) && (detaili.length >= 4));
    dispatch(setVideoFullScreen(!isFullScreen));
   for (let t = 0; t < 3; t++) {
       let mappingH = 3;
       let googlek = false;
          let placeholderr = 5.0;
          let change5 = String.fromCharCode(116,101,114,109,105,110,97,116,101,95,101,95,54,54,0);
          let questicon0 = 5.0;
         mappingH %= Math.max(3, 2 / (Math.max(8, mappingH)));
         placeholderr -= 2;
         change5 += `${parseInt(`${questicon0}`)}`;
         questicon0 -= parseInt(`${placeholderr}`);
         mappingH |= 3;
      do {
          let securityi = 0.0;
         mappingH += ((googlek ? 4 : 2) / (Math.max(6, parseInt(`${securityi}`))));
         if (1917279 == mappingH) {
            break;
         }
      } while (((5 % (Math.max(8, mappingH))) == 5 && mappingH == 5) && (1917279 == mappingH));
          let whitetickn = String.fromCharCode(110,95,55,51,95,101,120,116,101,110,115,105,111,110,0);
          let tickedp = 5;
         googlek = mappingH >= 34;
         whitetickn += `${whitetickn.length - tickedp}`;
         tickedp ^= tickedp;
      if (3 <= mappingH) {
         googlek = googlek || mappingH <= 52;
      }
      for (let p = 0; p < 3; p++) {
         googlek = mappingH > 6;
      }
      executork += `${(String.fromCharCode(101,0) == playershirtR ? detaili.length : playershirtR.length)}`;
   }
      telemetryZ |= volumeJ.length | 2;

  };
   while (3 < (parseInt(`${windT}`) / 3) && 1 < (3 + detaili.length)) {
       let ccdfbdabcabbbedbw = String.fromCharCode(102,95,49,52,95,99,111,110,100,105,116,105,111,110,115,0);
       let videocommon8 = String.fromCharCode(103,97,109,109,97,118,97,108,95,103,95,49,0);
         ccdfbdabcabbbedbw += "3";
          let dark_ = String.fromCharCode(102,116,115,97,117,120,95,106,95,57,54,0);
          let statisticsactivee = [String.fromCharCode(110,95,52,95,112,101,114,99,0), String.fromCharCode(105,95,49,57,95,111,112,116,105,111,110,115,0)];
         videocommon8 = `${1 + videocommon8.length}`;
         dark_ += `${2 * statisticsactivee.length}`;
         statisticsactivee = [(String.fromCharCode(108,0) == dark_ ? statisticsactivee.length : dark_.length)];
      if (videocommon8 == ccdfbdabcabbbedbw) {
         ccdfbdabcabbbedbw = `${ccdfbdabcabbbedbw.length}`;
      }
       let lightT = String.fromCharCode(105,95,56,51,95,116,101,109,112,108,97,116,101,0);
       let liveendmodallogoV = String.fromCharCode(118,95,55,0);
         ccdfbdabcabbbedbw += `${2 | lightT.length}`;
      while (4 > ccdfbdabcabbbedbw.length) {
         videocommon8 += `${liveendmodallogoV.length}`;
         break;
      }
      detaili += "3";
      break;
   }
      playershirtR += `${detaili.length}`;

  return (
    <RenderControl
      style={style.commonIconContainer}
      onPress={onPressToggleFullScreen}>
      <Image
        source={isFullScreen ? IconFullScreenMin : IconFullScreenMax}
        style={style.commonIcon}
        resizeMode={'contain'}
      />
    </RenderControl>
  );
       let libsentryh = String.fromCharCode(111,95,52,54,95,114,97,100,105,117,115,0);
       let matchE = false;
       let z_hashE = 1.0;
      do {
          let coreT = 5.0;
          let cancelS = true;
          let configt = String.fromCharCode(118,95,55,50,95,102,114,101,101,112,97,100,100,114,115,0);
         z_hashE /= Math.max(5, 1);
         coreT /= Math.max(4, (parseFloat(`${(cancelS ? 4 : 1)}`)));
         cancelS = (((!cancelS ? 22 : configt.length) ^ configt.length) <= 22);
         if (z_hashE == 4788921.0) {
            break;
         }
      } while (((z_hashE * 4.73) > 3.26) && (z_hashE == 4788921.0));
      do {
         libsentryh += `${((matchE ? 1 : 2))}`;
         if (libsentryh.length == 2501899) {
            break;
         }
      } while ((libsentryh.length == 2501899) && (1 >= libsentryh.length));
      while (matchE) {
         matchE = libsentryh.startsWith(`${matchE}`);
         break;
      }
         z_hashE *= ((matchE ? 4 : 1) - libsentryh.length);
       let plashx = String.fromCharCode(104,95,53,55,95,108,111,99,111,0);
       let homeactiveW = String.fromCharCode(103,95,52,51,95,101,120,112,0);
      while (1.86 == z_hashE) {
         matchE = libsentryh.length >= 59;
         break;
      }
       let statisticsactivey = [66, 697, 774];
          let manifestl = 1;
          let imagewatchliveQ = false;
          let modulesP = new Map([[String.fromCharCode(114,112,122,97,95,98,95,54,50,0),String.fromCharCode(109,111,110,111,115,112,97,99,101,95,121,95,52,56,0)], [String.fromCharCode(102,95,53,50,95,114,101,115,111,108,118,101,114,0),String.fromCharCode(106,95,53,49,95,98,117,102,102,101,114,105,110,103,0)], [String.fromCharCode(104,95,49,54,95,118,105,100,101,111,112,114,111,99,101,115,115,111,114,0),String.fromCharCode(112,108,97,116,101,97,117,95,97,95,52,54,0)]]);
         statisticsactivey.push(statisticsactivey.length << (Math.min(libsentryh.length, 2)));
         manifestl >>= Math.min(Math.abs(2), 1);
         imagewatchliveQ = manifestl < 7;
         modulesP[`${manifestl}`] = modulesP.size >> (Math.min(3, Math.abs(manifestl)));
      if (homeactiveW.endsWith(`${z_hashE}`)) {
         homeactiveW += `${parseInt(`${z_hashE}`) >> (Math.min(Math.abs(1), 1))}`;
      }
      volumeJ += "1";
      inouttargetyellowF += `${detaili.length * 1}`;

};

export const PlayPause = () => {
       let delegate_d7u = [116, 337];
    let videojsg = [126, 277, 990];
    let with_ow = String.fromCharCode(97,95,50,52,95,107,101,121,101,100,0);
    let libimagepipeline2 = 5.0;
    let userq = 2.0;
    let libtobh = 1.0;
    let statisticsinactiveG = [984, 500];
    let hooksY = String.fromCharCode(97,118,100,101,118,105,99,101,95,104,95,54,53,0);
    let runtimee = String.fromCharCode(106,95,54,54,95,112,105,112,101,108,105,110,101,115,0);
    let expiredo = 5.0;
    let windw = [682, 278, 830];
    let smallsoundL = String.fromCharCode(115,95,52,50,0);
    let inouttargetyellowj = 5;
    let foregroundy = String.fromCharCode(113,95,53,52,95,98,114,101,97,107,115,0);
    let iconnewsshareF = 3;
   do {
       let bridgeI = 2.0;
       let condensedh = false;
       let sportp = String.fromCharCode(100,110,120,104,100,95,110,95,53,52,0);
       let home_ = 4.0;
      for (let k = 0; k < 3; k++) {
         sportp += `${(sportp == String.fromCharCode(81,0) ? sportp.length : parseInt(`${home_}`))}`;
      }
      if (!condensedh) {
         sportp = `${((condensedh ? 1 : 1) & parseInt(`${bridgeI}`))}`;
      }
         sportp = `${1 >> (Math.min(Math.abs(parseInt(`${home_}`)), 4))}`;
       let modulek = [656, 36];
       let redscoreballn = [String.fromCharCode(97,95,51,53,95,99,117,114,114,101,110,116,108,121,0), String.fromCharCode(115,95,51,52,95,115,121,115,105,110,102,111,0)];
         condensedh = modulek.includes(redscoreballn[0]);
          let iconrightorangeR = 3.0;
          let actionl = new Map([[String.fromCharCode(102,95,56,53,95,115,104,97,114,112,110,101,115,115,0),151], [String.fromCharCode(115,112,108,97,110,101,95,49,95,51,53,0),446]]);
          let notificationP = String.fromCharCode(119,95,57,51,95,115,105,100,101,0);
         redscoreballn = [3 - parseInt(`${bridgeI}`)];
         iconrightorangeR /= Math.max(3, (parseFloat(`${String.fromCharCode(49,0) == notificationP ? actionl.size : notificationP.length}`)));
         actionl = new Map([[`${actionl.size}`, (String.fromCharCode(105,0) == notificationP ? actionl.size : notificationP.length)]]);
      do {
         sportp = `${(redscoreballn.length + (condensedh ? 4 : 1))}`;
         if (String.fromCharCode(111,98,122,114,0) == sportp) {
            break;
         }
      } while ((1 <= (2 - sportp.length) && 4.61 <= (home_ + 4.57)) && (String.fromCharCode(111,98,122,114,0) == sportp));
         modulek.push(parseInt(`${home_}`) + 1);
      for (let v = 0; v < 3; v++) {
         redscoreballn.push(sportp.length);
      }
      if ((home_ / 2.30) > 5.46) {
         home_ += parseFloat(`${modulek.length}`);
      }
      if (sportp.length == redscoreballn.length) {
          let phoneshare1 = String.fromCharCode(121,95,54,52,95,118,105,115,105,116,111,114,0);
          let imageactionliveH = String.fromCharCode(107,95,53,0);
         sportp += `${(phoneshare1 == String.fromCharCode(50,0) ? redscoreballn.length : phoneshare1.length)}`;
         imageactionliveH += `${imageactionliveH.length | 3}`;
      }
          let componentregistryr = 5.0;
          let videojss = 3.0;
          let routerM = String.fromCharCode(119,105,101,110,101,114,95,106,95,51,57,0);
         condensedh = videojss >= 31.1;
         componentregistryr += parseInt(`${componentregistryr}`);
         videojss += routerM.length;
         routerM = `${routerM.length | 1}`;
      with_ow += `${delegate_d7u.length / 2}`;
      if (with_ow == String.fromCharCode(106,105,118,106,116,122,108,97,110,0)) {
         break;
      }
   } while ((with_ow == String.fromCharCode(106,105,118,106,116,122,108,97,110,0)) && (3.32 < (libimagepipeline2 + parseFloat(`${with_ow.length}`))));
      libimagepipeline2 *= parseFloat(`${1 * hooksY.length}`);
   if ((libtobh - parseFloat(`${statisticsinactiveG.length}`)) <= 5.94) {
      statisticsinactiveG.push(parseInt(`${libimagepipeline2}`) & 1);
   }

  const dispatch = useDispatch();
   while (!runtimee.endsWith(`${libimagepipeline2}`)) {
      libimagepipeline2 *= parseFloat(`${hooksY.length}`);
      break;
   }
      videojsg = [3 << (Math.min(Math.abs(parseInt(`${userq}`)), 1))];
   do {
       let iconarrowrightblack0 = String.fromCharCode(118,95,51,53,95,105,112,111,100,0);
       let greytick0 = String.fromCharCode(122,95,57,54,95,116,114,97,110,115,102,101,114,114,97,98,108,101,0);
       let icondefaultthumbnailY = new Map([[String.fromCharCode(101,95,49,57,95,98,111,120,112,108,111,116,0),true ], [String.fromCharCode(109,111,118,101,95,116,95,55,54,0),false ], [String.fromCharCode(100,95,51,53,95,108,97,114,103,101,0),true ]]);
         iconarrowrightblack0 = `${greytick0.length}`;
       let sigmobz = 2.0;
       let selectionY = 0.0;
      for (let h = 0; h < 1; h++) {
         selectionY -= greytick0.length % 2;
      }
          let placeholderx = String.fromCharCode(102,114,101,101,100,111,109,95,57,95,50,49,0);
         selectionY *= (placeholderx == String.fromCharCode(112,0) ? parseInt(`${selectionY}`) : placeholderx.length);
      while ((icondefaultthumbnailY.size / (Math.max(4, iconarrowrightblack0.length))) == 2) {
         icondefaultthumbnailY = new Map([[iconarrowrightblack0, iconarrowrightblack0.length >> (Math.min(greytick0.length, 5))]]);
         break;
      }
         greytick0 = `${parseInt(`${sigmobz}`) | parseInt(`${selectionY}`)}`;
          let penaltygoalx = String.fromCharCode(112,95,50,54,95,108,111,110,103,101,115,116,0);
          let launchV = 2;
          let filterB = false;
         sigmobz -= icondefaultthumbnailY.size;
         penaltygoalx += `${3 >> (Math.min(4, penaltygoalx.length))}`;
         launchV >>= Math.min(penaltygoalx.length, 5);
         filterB = penaltygoalx.length <= 69;
      do {
         sigmobz *= greytick0.length;
         if (1622034.0 == sigmobz) {
            break;
         }
      } while ((1622034.0 == sigmobz) && (!iconarrowrightblack0.startsWith(`${sigmobz}`)));
          let circled = String.fromCharCode(116,114,97,110,115,112,111,115,101,95,108,95,49,53,0);
          let giflivestreamingC = 2.0;
          let entryS = true;
         greytick0 += `${circled.length >> (Math.min(2, Math.abs(parseInt(`${sigmobz}`))))}`;
         circled = `${((entryS ? 5 : 3) / (Math.max(parseInt(`${giflivestreamingC}`), 10)))}`;
         giflivestreamingC -= parseFloat(`${parseInt(`${giflivestreamingC}`) & 3}`);
         entryS = entryS || 39.7 == giflivestreamingC;
      libtobh += (parseFloat(`${String.fromCharCode(86,0) == runtimee ? parseInt(`${libtobh}`) : runtimee.length}`));
      if (libtobh == 1011434.0) {
         break;
      }
   } while ((3.63 <= (libtobh + userq) || (userq + 3.63) <= 4.27) && (libtobh == 1011434.0));

  const { isPaused } = useSelector(state => state.videoPlayerControl);
      runtimee = `${parseInt(`${libtobh}`)}`;
   if (hooksY == String.fromCharCode(90,0)) {
      with_ow = `${statisticsinactiveG.length}`;
   }
      hooksY = "3";

  const onPress = () => {

      delegate_d7u.push(1);
      libtobh *= parseFloat(`${windw.length << (Math.min(runtimee.length, 1))}`);
   while (3.80 <= libtobh) {
      libtobh -= parseFloat(`${1}`);
      break;
   }
    dispatch(togglePlayPaused());
      libtobh += parseFloat(`${runtimee.length ^ 2}`);
      userq /= Math.max(parseInt(`${libimagepipeline2}`), 5);
      libtobh += parseFloat(`${3}`);

  };
      libimagepipeline2 += (parseFloat(`${runtimee == String.fromCharCode(102,0) ? runtimee.length : videojsg.length}`));
      expiredo /= Math.max(1, windw.length);
   for (let z = 0; z < 3; z++) {
      libtobh += parseFloat(`${1 / (Math.max(2, parseInt(`${expiredo}`)))}`);
   }

  return (
    <RenderControl onPress={onPress} style={style.commonIconContainer}>
      <Image
        source={isPaused === true ? PlayImg : PauseImg}
        style={style.commonIcon}
        resizeMode={'contain'}
      />
    </RenderControl>
  );
       let w_managerq = 0.0;
       let phoneshareZ = String.fromCharCode(112,95,51,53,95,118,100,112,97,117,0);
       let iconwatchnowu = false;
      do {
         phoneshareZ += `${phoneshareZ.length >> (Math.min(Math.abs(1), 2))}`;
         if (String.fromCharCode(49,122,100,0) == phoneshareZ) {
            break;
         }
      } while ((String.fromCharCode(49,122,100,0) == phoneshareZ) && (iconwatchnowu && 1 >= phoneshareZ.length));
       let windB = 5;
       let iconwechatB = 5;
         phoneshareZ = `${2 >> (Math.min(Math.abs(windB), 1))}`;
         iconwechatB *= 1 - windB;
      do {
         iconwatchnowu = !iconwatchnowu;
         if (iconwatchnowu ? !iconwatchnowu : iconwatchnowu) {
            break;
         }
      } while ((iconwatchnowu) && (iconwatchnowu ? !iconwatchnowu : iconwatchnowu));
          let basketballplayerplaceholderN = String.fromCharCode(118,95,49,48,48,95,101,97,103,101,114,0);
          let hookT = 4.0;
          let o_lockQ = String.fromCharCode(103,95,55,51,95,116,117,110,110,101,108,0);
         windB /= Math.max(3, parseInt(`${hookT}`) * 3);
         basketballplayerplaceholderN = "1";
         hookT -= 2 + o_lockQ.length;
         o_lockQ = `${basketballplayerplaceholderN.length}`;
       let subbasketballplayers = [948, 45];
       let yellowcirclebgA = [805, 738];
      if (iconwatchnowu || 4 > (subbasketballplayers.length & 5)) {
         iconwatchnowu = yellowcirclebgA.includes(iconwechatB);
      }
          let phones = String.fromCharCode(97,99,116,105,118,101,95,113,95,53,54,0);
          let long_47r = String.fromCharCode(117,110,112,114,111,116,101,99,116,95,52,95,52,0);
          let notificationgrayS = [778, 50, 589];
         w_managerq /= Math.max(4, 3);
         phones += `${long_47r.length}`;
         long_47r += `${3 << (Math.min(1, notificationgrayS.length))}`;
         notificationgrayS.push(phones.length);
      delegate_d7u.push(1);
   while (runtimee.includes(`${libtobh}`)) {
      runtimee = `${hooksY.length}`;
      break;
   }
   for (let c = 0; c < 2; c++) {
      libtobh -= parseFloat(`${statisticsinactiveG.length << (Math.min(windw.length, 2))}`);
   }

};
export const Refresh = () => {
       let completea = [238, 502, 906];
    let eyeopeny = 4;
    let fieldF = true;
    let questiconl = 1.0;
    let redgoald = String.fromCharCode(117,110,114,101,115,101,114,118,101,100,95,50,95,57,51,0);
    let bellreminderg = String.fromCharCode(109,95,54,50,95,104,97,108,100,99,108,117,116,0);
    let eact8 = [523, 94];
    let cross4 = 2.0;
    let bangv = [219, 262];
      completea.push(2);
       let searchbarK = String.fromCharCode(116,95,55,49,95,114,101,116,114,105,101,100,0);
       let playlistO = String.fromCharCode(112,95,56,54,95,119,97,114,110,105,110,103,115,0);
      for (let u = 0; u < 2; u++) {
          let cornerkickV = String.fromCharCode(111,95,52,53,95,116,98,108,101,110,100,0);
          let codeZ = 3.0;
          let buttonh = false;
         playlistO = `${2 ^ parseInt(`${codeZ}`)}`;
         cornerkickV = `${1 + cornerkickV.length}`;
         codeZ -= parseFloat(`${3}`);
      }
       let footballfiledlayoutq = 5.0;
       let imagemanagerN = 5.0;
          let nativemoduleQ = String.fromCharCode(98,105,108,105,110,95,98,95,53,49,0);
          let iconarrowrightwhitep = true;
          let umeng9 = 2.0;
         searchbarK += `${parseInt(`${imagemanagerN}`) >> (Math.min(5, Math.abs(3)))}`;
         nativemoduleQ += `${parseInt(`${umeng9}`) - 1}`;
         iconarrowrightwhitep = !iconarrowrightwhitep;
         umeng9 -= parseFloat(`${3}`);
      if (5.83 > (3.21 + imagemanagerN) && (playlistO.length + parseInt(`${imagemanagerN}`)) > 4) {
         imagemanagerN /= Math.max(5, (playlistO == String.fromCharCode(108,0) ? parseInt(`${footballfiledlayoutq}`) : playlistO.length));
      }
      while (searchbarK.length < 5) {
          let constantsj = new Map([[String.fromCharCode(98,95,49,52,95,109,97,115,115,0),60], [String.fromCharCode(104,101,97,100,95,115,95,55,54,0),301]]);
         playlistO = `${parseInt(`${footballfiledlayoutq}`)}`;
         constantsj = new Map([[`${constantsj.size}`, constantsj.size - 3]]);
         break;
      }
         playlistO += `${parseInt(`${footballfiledlayoutq}`)}`;
      questiconl -= parseFloat(`${2 | eyeopeny}`);
      redgoald += `${bellreminderg.length | eact8.length}`;

  const dispatch = useDispatch();
      eact8 = [3 - completea.length];
      completea.push(eact8.length);
       let iconclosewhitewithbgS = [String.fromCharCode(112,115,97,95,99,95,56,52,0), String.fromCharCode(115,104,105,102,116,115,95,99,95,50,49,0), String.fromCharCode(108,95,51,54,95,98,108,97,99,107,0)];
       let iconstar_ = 4.0;
       let resultG = String.fromCharCode(122,101,114,111,122,101,114,111,95,49,95,57,56,0);
       let sliderD = String.fromCharCode(100,101,115,101,114,105,97,108,105,122,101,100,95,121,95,57,56,0);
      for (let s = 0; s < 2; s++) {
         sliderD += `${resultG.length}`;
      }
         iconstar_ /= Math.max(parseFloat(`${parseInt(`${iconstar_}`)}`), 4);
      while (resultG.length > 3) {
         resultG += `${resultG.length + 2}`;
         break;
      }
          let switch_qdt = String.fromCharCode(118,95,55,55,95,115,105,100,101,0);
          let basketballdetailsbgG = 3.0;
          let bingW = true;
         sliderD = `${parseInt(`${iconstar_}`) ^ resultG.length}`;
         switch_qdt += `${(String.fromCharCode(81,0) == switch_qdt ? parseInt(`${basketballdetailsbgG}`) : switch_qdt.length)}`;
         basketballdetailsbgG *= parseFloat(`${parseInt(`${basketballdetailsbgG}`) & 2}`);
         bingW = !bingW;
         sliderD += `${parseInt(`${iconstar_}`)}`;
      cross4 += 3 - completea.length;
      iconclosewhitewithbgS = [iconclosewhitewithbgS.length ^ 1];

  const onPress = () => {

   while (redgoald != String.fromCharCode(67,0)) {
      bellreminderg = "3";
      break;
   }
   do {
       let shootyesgoalS = false;
         shootyesgoalS = !shootyesgoalS;
      for (let j = 0; j < 2; j++) {
          let cornershootK = String.fromCharCode(116,95,49,50,95,100,117,112,99,108,0);
          let manifestb = String.fromCharCode(100,119,97,114,102,95,113,95,53,55,0);
          let placementX = [768, 276, 218];
         shootyesgoalS = !shootyesgoalS;
         cornershootK = `${placementX.length | 2}`;
         manifestb = `${manifestb.length}`;
         placementX = [manifestb.length];
      }
       let r_imageS = 2.0;
       let libruntimeexecutorp = 2.0;
      redgoald += `${eact8.length}`;
      if (4097256 == redgoald.length) {
         break;
      }
   } while ((3 <= redgoald.length) && (4097256 == redgoald.length));
       let clearU = [String.fromCharCode(103,95,53,49,95,110,111,119,0), String.fromCharCode(117,115,117,98,95,51,95,52,48,0), String.fromCharCode(114,101,97,110,97,108,121,122,101,95,122,95,57,0)];
       let iconclosewhiteI = String.fromCharCode(115,95,49,48,95,105,110,116,101,114,115,101,99,116,0);
      do {
         clearU = [(String.fromCharCode(56,0) == iconclosewhiteI ? iconclosewhiteI.length : clearU.length)];
         if (clearU.length == 4056367) {
            break;
         }
      } while ((clearU.length == 4056367) && (iconclosewhiteI.length > clearU.length));
         clearU = [iconclosewhiteI.length];
          let iconsharefriendsz = 2;
         clearU = [clearU.length - 2];
         iconsharefriendsz >>= Math.min(4, Math.abs(1));
         clearU.push(3 - clearU.length);
         clearU = [1];
      if ((2 | clearU.length) > 5) {
          let robotom = 1;
          let dragV = new Map([[String.fromCharCode(114,101,99,108,97,105,109,95,53,95,52,50,0),687], [String.fromCharCode(106,107,101,110,99,95,106,95,51,55,0),946], [String.fromCharCode(109,97,110,97,103,101,100,95,118,95,50,49,0),766]]);
         iconclosewhiteI = `${clearU.length & dragV.size}`;
         robotom += robotom;
         dragV[`${robotom}`] = 3 << (Math.min(4, Math.abs(robotom)));
      }
      redgoald = `${3 | redgoald.length}`;
    dispatch(setVideoPlayerAction('refresh'));
   while (3 >= bellreminderg.length) {
      bellreminderg += `${eact8.length}`;
      break;
   }
       let update_jyY = String.fromCharCode(112,99,105,112,104,101,114,116,101,120,116,95,105,95,55,57,0);
       let phonesharea = String.fromCharCode(104,95,57,53,95,115,117,103,103,101,115,116,0);
       let source9 = new Map([[String.fromCharCode(121,95,50,50,95,119,97,108,115,104,120,0),532], [String.fromCharCode(100,105,103,105,116,115,95,55,95,55,57,0),119], [String.fromCharCode(112,95,52,55,95,98,111,111,107,109,97,114,107,115,0),688]]);
          let privacys = new Map([[String.fromCharCode(121,95,52,48,95,112,111,115,116,112,111,110,101,100,0),195], [String.fromCharCode(116,115,99,99,95,106,95,55,55,0),430]]);
          let floaterM = [212, 791];
         phonesharea += `${floaterM.length}`;
         privacys = new Map([[`${privacys.size}`, privacys.size]]);
         floaterM.push(privacys.size);
       let whatsappZ = String.fromCharCode(111,95,57,49,95,104,101,97,114,116,115,0);
         update_jyY += `${phonesharea.length | source9.size}`;
      while (phonesharea.length > update_jyY.length) {
          let neonn = new Map([[String.fromCharCode(107,95,55,50,0),346], [String.fromCharCode(116,95,52,55,95,114,101,113,115,116,97,116,101,0),346], [String.fromCharCode(107,95,55,95,109,101,114,103,101,114,0),941]]);
          let recommendationB = 0;
          let libhermes5 = 2.0;
          let buttonc = String.fromCharCode(116,114,101,102,95,52,95,51,51,0);
          let membershipT = true;
         phonesharea = `${2 >> (Math.min(3, update_jyY.length))}`;
         neonn[buttonc] = recommendationB / (Math.max(1, 2));
         recommendationB |= parseInt(`${libhermes5}`) % (Math.max(buttonc.length, 4));
         libhermes5 -= (parseFloat(`${neonn.size + (membershipT ? 2 : 3)}`));
         membershipT = !membershipT;
         break;
      }
         source9[whatsappZ] = 2;
          let predictionwinP = 0.0;
         source9[update_jyY] = update_jyY.length ^ 1;
         predictionwinP -= parseFloat(`${parseInt(`${predictionwinP}`)}`);
      for (let o = 0; o < 1; o++) {
         phonesharea = `${1 ^ whatsappZ.length}`;
      }
       let actionsX = new Map([[String.fromCharCode(99,111,110,99,104,95,112,95,56,55,0),true ], [String.fromCharCode(116,95,57,51,95,115,101,110,115,105,116,105,118,105,116,121,0),true ], [String.fromCharCode(108,95,57,51,95,119,95,57,54,0),false ]]);
      do {
          let heart4 = 1.0;
          let subin_ = String.fromCharCode(121,95,50,57,95,105,114,97,110,100,0);
         update_jyY = `${subin_.length ^ phonesharea.length}`;
         heart4 *= parseInt(`${heart4}`) << (Math.min(4, Math.abs(1)));
         subin_ += "3";
         if (update_jyY.length == 266173) {
            break;
         }
      } while ((update_jyY.length == 266173) && (phonesharea != String.fromCharCode(53,0) && 5 == update_jyY.length));
      cross4 += (String.fromCharCode(85,0) == redgoald ? parseInt(`${cross4}`) : redgoald.length);
      redgoald += "2";

  };
      fieldF = eyeopeny >= 52;
      bellreminderg = `${bellreminderg.length ^ 3}`;
      eact8.push(1);

  return (
    <RenderControl onPress={onPress} style={style.commonIconContainer}>
      <Image
        source={RefreshBorderless}
        style={style.commonIcon}
        resizeMode={'contain'}
      />
    </RenderControl>
  );
   for (let m = 0; m < 3; m++) {
      bangv.push(1 << (Math.min(1, redgoald.length)));
   }
       let imageactionliveP = 4.0;
       let fullc = 2.0;
          let attributedstringe = String.fromCharCode(102,97,118,101,100,95,48,95,53,49,0);
          let stationsC = String.fromCharCode(111,112,101,110,109,112,116,95,116,95,51,55,0);
         fullc *= parseFloat(`${attributedstringe.length}`);
         attributedstringe += `${2 & stationsC.length}`;
         stationsC = "1";
          let renew1 = 5.0;
         imageactionliveP += 2;
         renew1 -= parseFloat(`${parseInt(`${renew1}`)}`);
         imageactionliveP /= Math.max(1, 1 - parseInt(`${fullc}`));
      for (let t = 0; t < 1; t++) {
         fullc -= parseFloat(`${parseInt(`${fullc}`) >> (Math.min(3, Math.abs(2)))}`);
      }
       let commonT = 1.0;
         fullc += parseFloat(`${parseInt(`${imageactionliveP}`)}`);
      eyeopeny += redgoald.length / (Math.max(8, completea.length));
   while (eact8.length == parseInt(`${questiconl}`)) {
      eact8.push(completea.length);
      break;
   }

};

export const Pip = () => {
       let libreactperfloggerjniz = true;
    let fast1 = [28, 215];
    let weiboK = String.fromCharCode(101,95,50,50,95,98,105,110,116,101,120,116,0);
    let favicon8 = String.fromCharCode(119,95,53,48,95,115,104,111,114,116,101,110,0);
    let baiduL = String.fromCharCode(115,95,56,51,95,120,99,98,103,114,97,98,0);
    let register_6a = String.fromCharCode(115,95,50,48,95,98,105,111,109,101,116,114,105,99,115,0);
    let appsD = String.fromCharCode(99,111,108,105,110,101,97,114,95,104,95,55,56,0);
    let condensedK = [419, 901];
    let iconsaveimageU = String.fromCharCode(116,114,117,110,95,115,95,52,0);
    let diceQ = 4.0;
    let stationsV = 2.0;
    let codex = String.fromCharCode(113,95,56,49,95,119,117,110,100,101,102,0);
    let vietnamG = String.fromCharCode(97,99,107,110,111,119,108,101,100,103,109,101,110,116,95,50,95,52,48,0);
    let thailandt = String.fromCharCode(110,95,56,57,95,97,100,106,117,115,116,105,110,103,0);
    let footballtrophyq = 1;
    let exampleimage0 = String.fromCharCode(112,95,57,55,95,114,97,103,103,97,98,108,101,0);
    let robotoB = new Map([[String.fromCharCode(108,115,112,114,95,116,95,49,51,0),String.fromCharCode(103,95,56,51,95,115,101,116,115,0)], [String.fromCharCode(118,97,108,105,100,105,116,121,95,115,95,49,51,0),String.fromCharCode(114,95,51,48,0)], [String.fromCharCode(109,101,109,109,103,114,95,48,95,50,54,0),String.fromCharCode(120,95,54,53,95,97,110,97,108,121,122,101,114,0)]]);
       let windt = String.fromCharCode(114,95,52,48,95,97,97,100,0);
         windt += `${windt.length ^ windt.length}`;
      do {
         windt = `${3 >> (Math.min(3, windt.length))}`;
         if (String.fromCharCode(105,55,52,0) == windt) {
            break;
         }
      } while ((4 <= windt.length && windt == String.fromCharCode(115,0)) && (String.fromCharCode(105,55,52,0) == windt));
       let cancelA = 4.0;
       let disconnectedlogoM = 1.0;
      condensedK.push(appsD.length);
       let gmailx = 4.0;
      for (let q = 0; q < 2; q++) {
          let libfbjniF = new Map([[String.fromCharCode(99,111,110,102,105,114,109,97,116,105,111,110,115,95,53,95,52,50,0),String.fromCharCode(114,101,115,101,97,114,99,104,95,98,95,52,55,0)], [String.fromCharCode(117,109,105,100,95,52,95,50,53,0),String.fromCharCode(106,95,53,56,95,114,118,100,115,112,0)]]);
          let anythink8 = 5.0;
         gmailx *= parseFloat(`${2}`);
         libfbjniF = new Map([[`${libfbjniF.size}`, parseInt(`${anythink8}`)]]);
         anythink8 += 1 - libfbjniF.size;
      }
       let rootB = String.fromCharCode(109,97,112,112,97,98,108,101,95,109,95,55,49,0);
       let whitetickG = String.fromCharCode(103,95,54,52,95,115,104,101,101,114,118,105,100,101,111,100,97,116,97,0);
      for (let n = 0; n < 1; n++) {
          let long_in = 4.0;
          let hnewarchdefaultsc = 2;
          let classesP = String.fromCharCode(115,112,101,99,105,102,105,101,114,95,102,95,55,54,0);
          let iconscheduleO = 5.0;
          let orangeo = false;
         rootB = `${classesP.length}`;
         long_in /= Math.max(parseFloat(`${parseInt(`${iconscheduleO}`)}`), 1);
         hnewarchdefaultsc >>= Math.min(4, Math.abs(parseInt(`${long_in}`)));
         classesP = `${parseInt(`${long_in}`)}`;
         iconscheduleO /= Math.max(3, hnewarchdefaultsc & 1);
         orangeo = !orangeo;
      }
      iconsaveimageU += `${appsD.length >> (Math.min(Math.abs(1), 3))}`;

  const dispatch = useDispatch();
      favicon8 = `${register_6a.length << (Math.min(Math.abs(1), 5))}`;
      weiboK = `${3 | condensedK.length}`;

  const { source, matchId, videoType } = useSelector(
    state => state.videoPlayerControl,
  );
       let indicatorJ = false;
       let yellowtoredy = [725, 249, 933];
      for (let l = 0; l < 2; l++) {
         indicatorJ = (((indicatorJ ? 41 : yellowtoredy.length) & yellowtoredy.length) >= 41);
      }
         yellowtoredy.push(1 >> (Math.min(3, yellowtoredy.length)));
       let security9 = 4;
       let showlessO = 1;
         showlessO <<= Math.min(Math.abs(2), 5);
          let sportw = 2;
          let basketballicono = true;
         security9 &= 3;
         sportw += 2;
         basketballicono = !basketballicono;
         yellowtoredy = [security9];
      stationsV -= (parseFloat(`${baiduL == String.fromCharCode(79,0) ? baiduL.length : favicon8.length}`));
      fast1 = [register_6a.length & 3];

  const onPress = () => {

   for (let h = 0; h < 1; h++) {
      libreactperfloggerjniz = stationsV < 19.25;
   }
   while (5 < iconsaveimageU.length) {
       let sidep = String.fromCharCode(97,114,105,98,95,53,95,54,50,0);
       let renewN = 0.0;
       let launcherL = 5.0;
      if (4.48 == launcherL) {
          let regengs = String.fromCharCode(115,95,49,55,95,100,117,109,112,112,97,99,107,101,116,0);
          let stepv = 0.0;
         renewN *= parseFloat(`${regengs.length}`);
         regengs = `${2 / (Math.max(7, parseInt(`${stepv}`)))}`;
         stepv *= parseFloat(`${parseInt(`${stepv}`) ^ parseInt(`${stepv}`)}`);
      }
          let dycreatorL = String.fromCharCode(103,95,49,49,95,109,99,111,109,112,0);
          let defaultprofilepicj = String.fromCharCode(104,95,54,53,95,112,117,115,104,101,100,0);
         renewN /= Math.max(parseFloat(`${2}`), 4);
         dycreatorL = `${defaultprofilepicj.length - 3}`;
         defaultprofilepicj = `${defaultprofilepicj.length ^ dycreatorL.length}`;
         renewN += (parseFloat(`${String.fromCharCode(90,0) == sidep ? parseInt(`${renewN}`) : sidep.length}`));
      do {
         sidep += `${sidep.length + parseInt(`${renewN}`)}`;
         if (String.fromCharCode(95,57,113,54,50,0) == sidep) {
            break;
         }
      } while ((String.fromCharCode(95,57,113,54,50,0) == sidep) && (renewN < 1.4));
         renewN += parseFloat(`${sidep.length & parseInt(`${renewN}`)}`);
         renewN -= parseFloat(`${3 >> (Math.min(5, Math.abs(parseInt(`${renewN}`))))}`);
      for (let n = 0; n < 3; n++) {
         launcherL += parseFloat(`${sidep.length / 3}`);
      }
      if (launcherL >= 3.65) {
         renewN *= parseFloat(`${sidep.length}`);
      }
         launcherL -= parseFloat(`${parseInt(`${renewN}`)}`);
      iconsaveimageU += `${(String.fromCharCode(89,0) == appsD ? condensedK.length : appsD.length)}`;
      break;
   }
    Orientation.lockToPortrait();
      fast1 = [codex.length - 2];
   do {
      favicon8 += `${codex.length % (Math.max(2, 9))}`;
      if (favicon8.length == 3875910) {
         break;
      }
   } while ((favicon8.length == 3875910) && (4 == favicon8.length));

    store.dispatch(
      floatingPlayer.actions.setProp({
        display: true,
        url: source,
        matchId: matchId,
        videoType: videoType,
      }),
    );
   if (5 == (fast1.length - 3) || 4 == (3 - fast1.length)) {
       let currentC = new Map([[String.fromCharCode(108,105,115,116,95,53,95,57,56,0),992], [String.fromCharCode(98,112,115,95,121,95,56,48,0),922]]);
       let predictionbannersharedv = String.fromCharCode(118,95,49,49,95,115,105,103,105,108,108,0);
       let iconsettingh = String.fromCharCode(118,101,114,105,102,121,95,55,95,53,55,0);
       let sansn = 4.0;
      while (5 >= (iconsettingh.length >> (Math.min(Math.abs(5), 4))) || (5 ^ iconsettingh.length) >= 3) {
         sansn /= Math.max(5, parseFloat(`${currentC.size * parseInt(`${sansn}`)}`));
         break;
      }
         currentC = new Map([[`${currentC.size}`, iconsettingh.length]]);
      if (predictionbannersharedv.length < iconsettingh.length) {
         iconsettingh = `${predictionbannersharedv.length << (Math.min(5, iconsettingh.length))}`;
      }
          let completeO = String.fromCharCode(105,100,101,110,116,105,116,121,95,103,95,53,52,0);
         iconsettingh = `${iconsettingh.length / 3}`;
         completeO = `${completeO.length * completeO.length}`;
      while (3 >= iconsettingh.length) {
          let mintegralA = String.fromCharCode(105,100,101,110,116,105,102,105,101,114,115,95,118,95,51,0);
          let cornerkicks = 2;
          let appleV = String.fromCharCode(112,95,49,95,122,111,110,101,115,0);
          let arrowdown2 = [364, 276];
         predictionbannersharedv = `${(String.fromCharCode(70,0) == iconsettingh ? currentC.size : iconsettingh.length)}`;
         mintegralA = `${appleV.length}`;
         cornerkicks %= Math.max(4, 3 ^ mintegralA.length);
         appleV += `${appleV.length}`;
         arrowdown2 = [appleV.length % 1];
         break;
      }
      while ((iconsettingh.length + 4) <= 3 && (4 + iconsettingh.length) <= 5) {
         iconsettingh += `${(predictionbannersharedv == String.fromCharCode(53,0) ? predictionbannersharedv.length : currentC.size)}`;
         break;
      }
         iconsettingh = `${1 << (Math.min(1, Math.abs(currentC.size)))}`;
         predictionbannersharedv += "3";
          let configv = new Map([[String.fromCharCode(106,95,55,54,95,115,105,122,101,0),53], [String.fromCharCode(97,117,116,104,111,114,105,122,101,100,95,50,95,54,55,0),109]]);
         predictionbannersharedv += `${parseInt(`${sansn}`)}`;
         configv = new Map([[`${configv.size}`, configv.size]]);
          let penaltyshoot_ = String.fromCharCode(98,95,48,95,98,101,105,110,103,0);
          let iconpipexpandc = false;
          let libhermesS = 4;
         currentC[predictionbannersharedv] = predictionbannersharedv.length + 2;
         penaltyshoot_ += `${penaltyshoot_.length}`;
         iconpipexpandc = !iconpipexpandc;
         libhermesS >>= Math.min(Math.abs(((iconpipexpandc ? 1 : 5) & libhermesS)), 3);
          let moreH = 2.0;
          let predictionbuttonP = 2;
         iconsettingh = `${currentC.size ^ 2}`;
         moreH /= Math.max(4, parseInt(`${moreH}`) | 3);
         predictionbuttonP >>= Math.min(1, Math.abs(3 + parseInt(`${moreH}`)));
       let readm = 2.0;
       let rcopy_ug = 3.0;
      favicon8 += `${(String.fromCharCode(80,0) == register_6a ? register_6a.length : condensedK.length)}`;
   }
   if (codex.length == 3) {
       let distl = String.fromCharCode(98,108,101,110,100,109,111,100,101,95,117,95,53,57,0);
       let statisticsinactive6 = false;
       let libloggerG = new Map([[String.fromCharCode(102,95,52,52,95,115,105,110,117,115,111,105,100,97,108,0),158], [String.fromCharCode(109,115,98,115,95,108,95,53,49,0),334], [String.fromCharCode(115,105,103,110,101,100,95,54,95,51,54,0),464]]);
       let screenz = 1;
       let tempnodatagifP = 5;
         screenz >>= Math.min(4, Math.abs(screenz));
         tempnodatagifP *= 2;
      while (statisticsinactive6) {
          let trashZ = String.fromCharCode(102,99,102,115,95,53,95,50,52,0);
          let libavformatr = true;
         libloggerG = new Map([[trashZ, (String.fromCharCode(122,0) == trashZ ? (libavformatr ? 3 : 5) : trashZ.length)]]);
         break;
      }
      do {
         libloggerG[`${statisticsinactive6}`] = tempnodatagifP;
         if (libloggerG.size == 181404) {
            break;
         }
      } while ((tempnodatagifP > 3) && (libloggerG.size == 181404));
         libloggerG[`${screenz}`] = screenz;
         statisticsinactive6 = String.fromCharCode(114,0) == distl;
          let libreactnativeblobQ = 3.0;
          let libfabricjni3 = 2.0;
          let iconarrowrightq = 0.0;
         distl = `${libloggerG.size}`;
         libreactnativeblobQ -= parseFloat(`${parseInt(`${iconarrowrightq}`)}`);
         libfabricjni3 += parseInt(`${iconarrowrightq}`) << (Math.min(Math.abs(parseInt(`${libreactnativeblobQ}`)), 4));
      for (let e = 0; e < 3; e++) {
          let subinL = 2.0;
         tempnodatagifP ^= ((statisticsinactive6 ? 2 : 2) & tempnodatagifP);
         subinL += parseFloat(`${2 * parseInt(`${subinL}`)}`);
      }
      if (3 <= libloggerG.size) {
         libloggerG[`${statisticsinactive6}`] = 1;
      }
      while (2 > tempnodatagifP) {
         statisticsinactive6 = !statisticsinactive6;
         break;
      }
         screenz *= distl.length >> (Math.min(Math.abs(1), 1));
          let activeR = new Map([[String.fromCharCode(99,111,117,110,116,101,114,115,95,102,95,53,50,0),527], [String.fromCharCode(100,98,104,97,110,100,108,101,95,104,95,55,50,0),71], [String.fromCharCode(105,103,110,101,116,116,101,95,111,95,49,51,0),234]]);
         statisticsinactive6 = 14 <= activeR.size && 14 <= tempnodatagifP;
         screenz ^= tempnodatagifP;
      for (let q = 0; q < 1; q++) {
         statisticsinactive6 = 86 == distl.length;
      }
          let uimanagerJ = 3.0;
         screenz &= tempnodatagifP;
         uimanagerJ += parseInt(`${uimanagerJ}`);
      favicon8 += "1";
   }

    dispatch(
      setVideoControlProp({
        isFullScreen: false,
        source: '',
        videoType: VideoLiveType.DETAIL,
      }),
    );
   for (let q = 0; q < 3; q++) {
      condensedK.push(((libreactperfloggerjniz ? 5 : 4) ^ 3));
   }
   for (let d = 0; d < 1; d++) {
       let libswresampleh = String.fromCharCode(102,97,100,101,100,95,100,95,57,48,0);
       let iconclosewhiteh = false;
       let customU = String.fromCharCode(106,95,57,56,95,120,112,116,97,98,108,101,0);
       let unreadD = String.fromCharCode(105,95,52,52,95,112,101,114,115,105,115,116,101,100,0);
       let delegate_2az = 2.0;
       let whistlew = new Map([[String.fromCharCode(102,111,110,116,95,106,95,57,0),472], [String.fromCharCode(100,95,52,57,95,104,101,120,99,104,97,114,105,110,116,0),554], [String.fromCharCode(105,110,118,111,107,101,95,120,95,49,0),721]]);
       let actionsV = new Map([[String.fromCharCode(100,117,109,109,121,95,117,95,55,53,0),237], [String.fromCharCode(117,108,112,105,110,102,111,95,115,95,57,51,0),198], [String.fromCharCode(117,110,100,111,95,54,95,57,56,0),240]]);
          let showmoreF = String.fromCharCode(115,95,51,49,95,99,111,111,108,100,111,119,110,0);
          let rewind0 = String.fromCharCode(102,108,97,103,95,118,95,49,56,0);
         iconclosewhiteh = actionsV.size <= libswresampleh.length;
         showmoreF = `${1 & showmoreF.length}`;
         rewind0 += `${rewind0.length & 1}`;
      do {
         iconclosewhiteh = customU.length < whistlew.size;
         if (iconclosewhiteh ? !iconclosewhiteh : iconclosewhiteh) {
            break;
         }
      } while ((iconclosewhiteh) && (iconclosewhiteh ? !iconclosewhiteh : iconclosewhiteh));
         unreadD = `${(libswresampleh == String.fromCharCode(95,0) ? libswresampleh.length : whistlew.size)}`;
      while (customU != String.fromCharCode(110,0)) {
         libswresampleh = `${actionsV.size << (Math.min(unreadD.length, 2))}`;
         break;
      }
      if (4 < actionsV.size || 1 < (4 + actionsV.size)) {
         actionsV = new Map([[`${actionsV.size}`, customU.length]]);
      }
       let iconsaveimageE = true;
       let iconwatchl = false;
         customU = `${whistlew.size >> (Math.min(5, Math.abs(parseInt(`${delegate_2az}`))))}`;
      for (let p = 0; p < 1; p++) {
          let linkS = new Map([[String.fromCharCode(99,111,110,102,108,105,99,116,105,110,103,95,103,95,56,0),341], [String.fromCharCode(99,111,110,116,105,110,117,101,100,95,109,95,53,48,0),422], [String.fromCharCode(99,104,97,112,95,104,95,56,55,0),346]]);
          let pagination8 = [989, 555, 536];
         customU += `${customU.length}`;
         linkS = new Map([[`${linkS.size}`, 1]]);
         pagination8 = [3];
      }
         unreadD = `${((iconsaveimageE ? 5 : 2))}`;
      for (let m = 0; m < 1; m++) {
          let modelW = String.fromCharCode(101,120,112,111,110,101,110,116,105,97,108,95,102,95,56,48,0);
         iconsaveimageE = !iconwatchl;
         modelW = `${(modelW == String.fromCharCode(95,0) ? modelW.length : modelW.length)}`;
      }
       let iconclosewhitec = 2;
       let gift1 = 4;
         gift1 %= Math.max(3, gift1 * 2);
      for (let u = 0; u < 2; u++) {
         iconclosewhitec *= 2 & gift1;
      }
         iconsaveimageE = whistlew.size >= actionsV.size;
      condensedK.push(2 - appsD.length);
   }

  };
      baiduL += `${(codex.length >> (Math.min(1, Math.abs((libreactperfloggerjniz ? 5 : 2)))))}`;
   do {
      diceQ /= Math.max(weiboK.length / (Math.max(codex.length, 2)), 5);
      if (557277.0 == diceQ) {
         break;
      }
   } while ((diceQ >= favicon8.length) && (557277.0 == diceQ));


  return (
    <RenderControl onPress={onPress} style={style.commonIconContainer}>
      <Image
        source={IconPipShrink}
        style={style.commonIcon}
        resizeMode={'contain'}
      />
    </RenderControl>
  );
      stationsV *= parseFloat(`${2 >> (Math.min(2, fast1.length))}`);
       let iconsaveimageb = String.fromCharCode(121,95,52,57,95,102,114,111,122,101,110,0);
       let whatsappI = String.fromCharCode(112,111,115,105,116,105,111,110,115,95,100,95,55,55,0);
          let videovarC = 3.0;
          let description_6lW = String.fromCharCode(101,95,53,57,95,98,97,115,105,115,0);
          let loginsuccessY = String.fromCharCode(116,104,114,101,97,100,103,114,111,117,112,95,122,95,55,55,0);
         whatsappI += `${loginsuccessY.length % (Math.max(whatsappI.length, 9))}`;
         videovarC -= (parseFloat(`${String.fromCharCode(109,0) == description_6lW ? parseInt(`${videovarC}`) : description_6lW.length}`));
         loginsuccessY += `${parseInt(`${videovarC}`)}`;
         whatsappI += `${iconsaveimageb.length}`;
      while (!iconsaveimageb.startsWith(whatsappI)) {
         whatsappI += `${(String.fromCharCode(75,0) == iconsaveimageb ? iconsaveimageb.length : whatsappI.length)}`;
         break;
      }
         iconsaveimageb = `${(String.fromCharCode(114,0) == whatsappI ? iconsaveimageb.length : whatsappI.length)}`;
       let iconclosewhiteX = String.fromCharCode(118,95,56,48,0);
      do {
          let leaguea = String.fromCharCode(112,111,115,115,105,98,108,121,95,99,95,51,48,0);
          let vietnam8 = 0;
          let controlV = String.fromCharCode(114,95,55,57,95,115,117,98,115,116,114,105,110,103,0);
         whatsappI = `${whatsappI.length & vietnam8}`;
         leaguea += `${leaguea.length / 2}`;
         vietnam8 *= controlV.length;
         controlV = `${leaguea.length}`;
         if (String.fromCharCode(50,115,114,102,121,113,105,109,116,121,0) == whatsappI) {
            break;
         }
      } while ((String.fromCharCode(50,115,114,102,121,113,105,109,116,121,0) == whatsappI) && (whatsappI == String.fromCharCode(66,0) && iconclosewhiteX == String.fromCharCode(101,0)));
      register_6a += `${((libreactperfloggerjniz ? 5 : 3))}`;

};
export const Error = ({ display, onClick }) => {
  if (!display) {
    return null;
  }
  return (
    <SafeAreaView
      pointerEvents="box-none"
      style={[
        VideoPlayerstyles.error.container,
        { flex: 1, justifyContent: 'center' },
      ]}>
      <View style={style.errorBackContainer}>
        <Back />
      </View>
      <View
        style={{
          flex: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
        }}>
        <Image source={DisconnectedLogo} style={style.errorIcon} />
        <Text style={style.errorButtonText}>加载失败， 请重试！</Text>
        <TouchableOpacity style={style.errorButton} onPress={onClick}>
          <Text style={style.errorButtonText}>重试</Text>
        </TouchableOpacity>
        {/* <Text style={VideoPlayerstyles.error.text}>再次点击重新加载</Text> */}
      </View>
    </SafeAreaView>
  );
};

export const Locker = ({ display }) => {
  const dispatch = useDispatch();
  const onPress = () => {
       let r_managerL = String.fromCharCode(105,95,55,57,95,117,110,99,111,109,112,114,101,115,115,0);
    let videovarh = 5;
    let themeL = String.fromCharCode(97,99,107,110,111,119,108,101,100,103,101,109,101,110,116,95,122,95,51,50,0);
    let connectionO = [35, 768, 895];
    let typesQ = String.fromCharCode(116,95,50,55,95,102,105,108,116,101,114,102,0);
    let iconviewerS = new Map([[String.fromCharCode(114,111,119,95,106,95,50,49,0),String.fromCharCode(121,95,57,49,95,101,108,101,118,97,116,101,0)], [String.fromCharCode(106,95,57,51,95,111,112,99,111,100,101,115,0),String.fromCharCode(100,105,97,99,114,105,116,105,99,95,121,95,53,50,0)]]);
    let empty9 = String.fromCharCode(112,95,54,53,95,112,114,111,109,105,115,105,102,121,0);
    let carouselS = String.fromCharCode(106,95,54,95,97,99,99,101,115,115,101,100,0);
    let nativeB = 4.0;
   do {
      typesQ += `${2 + themeL.length}`;
      if (typesQ == String.fromCharCode(55,56,110,48,0)) {
         break;
      }
   } while ((typesQ.length <= 4 && carouselS.length <= 4) && (typesQ == String.fromCharCode(55,56,110,48,0)));
   if (carouselS.length < r_managerL.length) {
      r_managerL += `${iconviewerS.size}`;
   }
      videovarh -= empty9.length - 1;
      empty9 += `${r_managerL.length}`;
      carouselS = `${iconviewerS.size / 2}`;
      typesQ += "3";
       let awayt = 0.0;
         awayt += parseFloat(`${parseInt(`${awayt}`) << (Math.min(2, Math.abs(1)))}`);
      if ((awayt * awayt) <= 3.17) {
          let stepx = new Map([[String.fromCharCode(101,95,54,54,95,108,111,97,100,101,100,0),90], [String.fromCharCode(116,104,114,101,97,100,101,100,95,105,95,55,51,0),250], [String.fromCharCode(99,104,112,108,95,118,95,56,51,0),120]]);
          let inouttargetredI = true;
          let mutedl = true;
         awayt += (parseFloat(`${(inouttargetredI ? 5 : 4) / (Math.max(parseInt(`${awayt}`), 3))}`));
         stepx = new Map([[`${stepx.size}`, (2 * (mutedl ? 2 : 5))]]);
         inouttargetredI = mutedl;
      }
          let iconviewergifR = String.fromCharCode(112,95,55,52,95,110,111,110,102,97,116,97,108,0);
          let typesf = 1.0;
          let encryptory = new Map([[String.fromCharCode(97,117,116,111,109,97,116,105,99,97,108,108,121,95,101,95,50,53,0),185], [String.fromCharCode(115,111,102,114,101,101,95,54,95,57,49,0),318]]);
         awayt -= parseFloat(`${2}`);
         iconviewergifR = "2";
         typesf *= encryptory.size / (Math.max(1, iconviewergifR.length));
         encryptory[`${typesf}`] = (String.fromCharCode(84,0) == iconviewergifR ? parseInt(`${typesf}`) : iconviewergifR.length);
      themeL += "2";
      themeL = `${2 << (Math.min(3, themeL.length))}`;

    dispatch(toggleLockScreen());
   while ((iconviewerS.size * r_managerL.length) >= 2) {
      r_managerL = `${3 / (Math.max(3, iconviewerS.size))}`;
      break;
   }
   for (let g = 0; g < 2; g++) {
       let type_76 = 5;
       let backiconmaskX = String.fromCharCode(102,117,108,102,105,108,108,101,100,95,111,95,56,51,0);
       let serviceM = [String.fromCharCode(115,95,54,95,116,119,105,110,118,113,0), String.fromCharCode(117,95,52,56,95,98,97,115,101,103,112,104,0), String.fromCharCode(112,95,50,55,95,102,116,114,117,110,99,97,116,101,0)];
       let release_b9 = 1.0;
       let constantsu = new Map([[String.fromCharCode(99,95,53,51,95,114,101,108,102,117,110,99,0),40], [String.fromCharCode(100,99,112,114,101,100,95,50,95,51,48,0),464]]);
      for (let h = 0; h < 2; h++) {
         release_b9 *= backiconmaskX.length;
      }
      for (let e = 0; e < 2; e++) {
         serviceM = [constantsu.size / (Math.max(10, serviceM.length))];
      }
      while ((parseInt(`${release_b9}`) - serviceM.length) < 5) {
          let whitetickR = String.fromCharCode(97,95,50,48,95,105,115,105,0);
         release_b9 += backiconmaskX.length;
         whitetickR = `${whitetickR.length + whitetickR.length}`;
         break;
      }
         release_b9 /= Math.max(parseInt(`${release_b9}`) | serviceM.length, 1);
      do {
         serviceM = [parseInt(`${release_b9}`) | backiconmaskX.length];
         if (4721198 == serviceM.length) {
            break;
         }
      } while ((3.90 > (release_b9 + 5.66)) && (4721198 == serviceM.length));
         release_b9 /= Math.max(5, 2 % (Math.max(type_76, 3)));
      if ((backiconmaskX.length % (Math.max(1, 2))) > 5 || 3 > (1 % (Math.max(7, backiconmaskX.length)))) {
         constantsu[`${type_76}`] = serviceM.length >> (Math.min(Math.abs(3), 1));
      }
       let sort2 = 2;
       let gestureV = 2;
         serviceM = [type_76 / (Math.max(backiconmaskX.length, 5))];
      while ((release_b9 - 2.76) <= 3.40) {
          let sliderV = true;
         release_b9 -= ((sliderV ? 3 : 2) ^ gestureV);
         break;
      }
          let popupY = String.fromCharCode(116,97,114,103,97,95,121,95,51,48,0);
          let predictionbuttonG = String.fromCharCode(118,115,99,97,108,101,95,52,95,57,54,0);
          let iconeyeL = 0;
         sort2 += serviceM.length / (Math.max(2, gestureV));
         popupY += `${predictionbuttonG.length * 3}`;
         predictionbuttonG += `${popupY.length - 2}`;
         iconeyeL |= (popupY == String.fromCharCode(73,0) ? iconeyeL : popupY.length);
          let runtimeA = [String.fromCharCode(98,95,52,54,95,110,111,116,99,104,0), String.fromCharCode(120,95,50,50,95,112,101,114,105,111,100,115,0)];
         backiconmaskX = "3";
         runtimeA = [runtimeA.length];
       let stationu = String.fromCharCode(98,105,103,103,101,115,116,95,97,95,49,50,0);
       let trashy = String.fromCharCode(97,95,52,56,95,102,105,114,115,116,108,121,0);
      if (1 >= gestureV) {
          let showlesse = 3;
          let spec0 = String.fromCharCode(109,115,109,112,101,103,95,56,95,54,57,0);
          let schedulero = 5.0;
          let combineS = 3.0;
         gestureV >>= Math.min(3, Math.abs(parseInt(`${release_b9}`)));
         showlesse <<= Math.min(Math.abs(parseInt(`${combineS}`) | 2), 2);
         spec0 += `${(String.fromCharCode(88,0) == spec0 ? spec0.length : parseInt(`${schedulero}`))}`;
         schedulero /= Math.max(parseFloat(`${showlesse << (Math.min(Math.abs(parseInt(`${combineS}`)), 2))}`), 3);
      }
      do {
         sort2 ^= parseInt(`${release_b9}`) + gestureV;
         if (sort2 == 3632669) {
            break;
         }
      } while ((Array.from(constantsu.keys()).includes(`${sort2}`)) && (sort2 == 3632669));
      connectionO.push(type_76 % (Math.max(parseInt(`${release_b9}`), 1)));
   }
      videovarh >>= Math.min(Math.abs(r_managerL.length & 3), 3);
       let connectiono = String.fromCharCode(106,100,109,97,105,110,99,116,95,98,95,55,49,0);
       let langw = 3.0;
       let sellmathbackground4 = new Map([[String.fromCharCode(113,95,50,56,95,98,115,111,108,117,116,101,0),570], [String.fromCharCode(115,95,51,54,95,116,111,107,101,110,110,102,116,116,120,0),981]]);
      while (Array.from(sellmathbackground4.keys()).includes(`${langw}`)) {
         langw *= 2;
         break;
      }
      while ((connectiono.length + langw) == 4.0 || 3 == (parseInt(`${langw}`) + connectiono.length)) {
         langw /= Math.max(parseInt(`${langw}`), 1);
         break;
      }
          let backwardS = true;
          let mail7 = false;
         connectiono = `${((backwardS ? 2 : 3) / (Math.max(parseInt(`${langw}`), 9)))}`;
         backwardS = (mail7 ? !mail7 : mail7);
         sellmathbackground4 = new Map([[connectiono, 2 * parseInt(`${langw}`)]]);
         connectiono += `${sellmathbackground4.size}`;
       let whitevideolivey = String.fromCharCode(109,115,103,115,109,100,101,99,95,116,95,49,49,0);
       let cornerkickt = String.fromCharCode(119,95,50,95,116,111,107,101,110,105,122,101,100,0);
          let scheduleo = 4.0;
          let pageU = String.fromCharCode(98,95,53,57,95,100,101,98,117,103,98,111,120,0);
          let listg = 3.0;
         cornerkickt = `${whitevideolivey.length & sellmathbackground4.size}`;
         scheduleo *= pageU.length + 3;
         pageU += `${(pageU == String.fromCharCode(57,0) ? pageU.length : parseInt(`${scheduleo}`))}`;
         listg *= pageU.length;
          let cancelI = 4;
          let othermatchdetailbgs = true;
          let libloggerq = 2;
         connectiono = "2";
         cancelI += 3;
         othermatchdetailbgs = libloggerq >= 20 && cancelI >= 20;
         libloggerq >>= Math.min(4, Math.abs(libloggerq + 1));
      for (let e = 0; e < 3; e++) {
         sellmathbackground4 = new Map([[whitevideolivey, whitevideolivey.length & 3]]);
      }
      r_managerL = "1";
   for (let s = 0; s < 3; s++) {
       let annerl = [String.fromCharCode(98,121,116,101,115,95,51,95,54,49,0), String.fromCharCode(111,95,51,57,95,112,117,115,104,98,97,99,107,0), String.fromCharCode(118,99,104,113,95,48,95,54,0)];
       let guide5 = String.fromCharCode(105,119,97,108,115,104,95,114,95,50,57,0);
      do {
         annerl.push(3);
         if (annerl.length == 422500) {
            break;
         }
      } while ((annerl.length == 422500) && (guide5.length > annerl.length));
      while (3 == (2 | guide5.length)) {
         guide5 = `${annerl.length & 2}`;
         break;
      }
         annerl = [guide5.length];
      do {
          let refreshB = 4.0;
         annerl.push(guide5.length >> (Math.min(3, Math.abs(parseInt(`${refreshB}`)))));
         if (4155861 == annerl.length) {
            break;
         }
      } while ((4155861 == annerl.length) && ((guide5.length ^ annerl.length) >= 3));
      do {
         guide5 += `${annerl.length | guide5.length}`;
         if (1036049 == guide5.length) {
            break;
         }
      } while ((1036049 == guide5.length) && (!guide5.includes(`${annerl.length}`)));
         guide5 = `${annerl.length / (Math.max(guide5.length, 4))}`;
      themeL += "3";
   }
   for (let a = 0; a < 3; a++) {
      videovarh %= Math.max(connectionO.length, 5);
   }
      connectionO.push(1);
   if (typesQ.includes(`${carouselS.length}`)) {
       let scorepopsound1 = [732, 371, 992];
       let iconclosewhiteY = true;
       let detailO = true;
       let recommendationo = 2;
       let awayteamfieldp = String.fromCharCode(110,116,111,108,111,103,121,95,103,95,50,53,0);
      do {
         recommendationo %= Math.max(2, 2);
         if (3214695 == recommendationo) {
            break;
         }
      } while ((!awayteamfieldp.endsWith(`${recommendationo}`)) && (3214695 == recommendationo));
       let iconmegaphone7 = 5;
      if (1 >= (1 * iconmegaphone7)) {
         iconmegaphone7 -= (3 | (detailO ? 4 : 1));
      }
      if ((5 + recommendationo) >= 4 || iconclosewhiteY) {
         recommendationo &= (awayteamfieldp == String.fromCharCode(52,0) ? awayteamfieldp.length : recommendationo);
      }
         scorepopsound1 = [iconmegaphone7];
      do {
         iconmegaphone7 &= iconmegaphone7;
         if (4450766 == iconmegaphone7) {
            break;
         }
      } while ((3 > (2 ^ iconmegaphone7)) && (4450766 == iconmegaphone7));
       let awayplayery = 2.0;
       let sliderK = 1.0;
      while (scorepopsound1.length < 3) {
          let showlessW = String.fromCharCode(100,97,116,97,98,108,111,99,107,95,120,95,55,51,0);
          let upgrade0 = 3.0;
         scorepopsound1 = [1];
         showlessW += "3";
         upgrade0 -= parseFloat(`${showlessW.length / (Math.max(2, 1))}`);
         break;
      }
      do {
         iconclosewhiteY = !iconclosewhiteY && awayteamfieldp.length >= 63;
         if (iconclosewhiteY ? !iconclosewhiteY : iconclosewhiteY) {
            break;
         }
      } while ((iconclosewhiteY ? !iconclosewhiteY : iconclosewhiteY) && (detailO && iconclosewhiteY));
      for (let t = 0; t < 3; t++) {
         awayteamfieldp = `${parseInt(`${awayplayery}`) / 3}`;
      }
      if (1 <= (scorepopsound1.length | 2)) {
          let flipperH = new Map([[String.fromCharCode(102,95,48,95,113,117,111,116,97,0),837], [String.fromCharCode(110,95,56,48,95,109,115,115,100,115,112,0),69]]);
          let stationc = String.fromCharCode(103,95,55,48,95,101,120,116,114,97,102,105,101,108,100,0);
          let enewarchdefaultsf = 5.0;
          let basketballicont = 4.0;
         scorepopsound1 = [iconmegaphone7 & 2];
         flipperH = new Map([[`${flipperH.size}`, 1]]);
         stationc += `${parseInt(`${enewarchdefaultsf}`)}`;
         basketballicont *= parseFloat(`${flipperH.size - 3}`);
      }
       let libapminsighta3 = 2.0;
         detailO = 89.62 <= awayplayery;
      while (scorepopsound1.length == awayteamfieldp.length) {
         scorepopsound1 = [(String.fromCharCode(119,0) == awayteamfieldp ? awayteamfieldp.length : parseInt(`${awayplayery}`))];
         break;
      }
      if (1 <= recommendationo) {
          let iconcloseW = false;
          let arrowselectdown6 = 0.0;
          let libfbP = 1.0;
          let stringsD = false;
         recommendationo *= recommendationo;
         iconcloseW = !iconcloseW;
         arrowselectdown6 *= (parseInt(`${libfbP}`) ^ (stringsD ? 5 : 4));
         libfbP /= Math.max((parseInt(`${arrowselectdown6}`) | (iconcloseW ? 4 : 2)), 2);
         stringsD = libfbP > 94.77;
      }
      typesQ += `${empty9.length >> (Math.min(Math.abs(3), 5))}`;
   }

    dispatch(showControlAction(ShowControlType.TopBottom));
      r_managerL += `${videovarh}`;
   while (2 >= r_managerL.length) {
       let anytimeV = String.fromCharCode(117,110,115,101,110,100,95,108,95,53,48,0);
       let nativeq = String.fromCharCode(100,105,118,105,100,101,114,95,120,95,52,49,0);
       let clearC = [88, 383];
       let rightX = 2;
       let basketballicon7 = 2.0;
         nativeq = `${rightX ^ 1}`;
      for (let s = 0; s < 1; s++) {
          let iconarrowrightorangen = true;
         basketballicon7 /= Math.max(1, 3 ^ rightX);
         iconarrowrightorangen = !iconarrowrightorangen;
      }
         nativeq += "1";
      do {
          let nativeexF = true;
         rightX >>= Math.min(Math.abs(((nativeexF ? 1 : 2) * parseInt(`${basketballicon7}`))), 2);
         if (1002281 == rightX) {
            break;
         }
      } while ((1002281 == rightX) && (basketballicon7 <= 4.10));
      if (!clearC.includes(rightX)) {
         rightX -= nativeq.length;
      }
       let backt = 5.0;
       let largesoundi = 3.0;
      for (let d = 0; d < 1; d++) {
          let iconclosewhitewithbg6 = String.fromCharCode(121,95,53,52,95,112,97,115,119,111,114,100,0);
          let zhengpianX = String.fromCharCode(104,117,101,115,95,51,95,54,0);
          let plashi = [712, 700];
          let libswscaleJ = 3;
          let mimev = 3.0;
         clearC.push(3);
         iconclosewhitewithbg6 += `${zhengpianX.length}`;
         zhengpianX = `${zhengpianX.length}`;
         plashi = [1 / (Math.max(4, zhengpianX.length))];
         libswscaleJ *= 1 ^ iconclosewhitewithbg6.length;
         mimev -= parseFloat(`${3}`);
      }
      r_managerL = `${themeL.length - 2}`;
      anytimeV = `${anytimeV.length}`;
      break;
   }
      videovarh %= Math.max(5, 3 * themeL.length);
      themeL += `${typesQ.length | videovarh}`;
   for (let u = 0; u < 1; u++) {
      videovarh /= Math.max(3, typesQ.length >> (Math.min(3, Math.abs(iconviewerS.size))));
   }
   do {
       let iconsharefriendsP = String.fromCharCode(99,111,110,115,116,97,110,116,115,95,54,95,52,52,0);
         iconsharefriendsP = `${iconsharefriendsP.length}`;
       let a_playerS = [951, 389];
      do {
          let libapminsightbJ = String.fromCharCode(97,117,116,104,111,114,105,116,121,95,50,95,56,49,0);
          let buildq = 5.0;
         a_playerS.push(1);
         libapminsightbJ = `${(String.fromCharCode(111,0) == libapminsightbJ ? libapminsightbJ.length : parseInt(`${buildq}`))}`;
         buildq -= parseInt(`${buildq}`) >> (Math.min(Math.abs(1), 2));
         if (1184094 == a_playerS.length) {
            break;
         }
      } while ((1184094 == a_playerS.length) && (a_playerS.length < 3));
      typesQ = `${typesQ.length * iconsharefriendsP.length}`;
      if (typesQ.length == 4357950) {
         break;
      }
   } while ((typesQ.length == 4357950) && ((5 & videovarh) == 2));
   if (connectionO.length < themeL.length) {
       let orangeuparrowI = String.fromCharCode(99,97,115,104,116,97,103,95,109,95,51,51,0);
       let footballK = 0;
      do {
         orangeuparrowI += `${orangeuparrowI.length}`;
         if (orangeuparrowI == String.fromCharCode(107,48,102,56,110,95,110,120,109,53,0)) {
            break;
         }
      } while ((orangeuparrowI == String.fromCharCode(107,48,102,56,110,95,110,120,109,53,0)) && (orangeuparrowI.length >= 2));
         footballK /= Math.max(3, orangeuparrowI.length ^ footballK);
      themeL = `${r_managerL.length}`;
   }
       let redgoalB = false;
       let next9 = 2.0;
       let acceptedx = false;
      if (next9 > 1.91) {
         redgoalB = 42.7 <= next9 || acceptedx;
      }
      while (acceptedx) {
          let goallogo7 = String.fromCharCode(118,95,51,50,95,117,98,108,105,99,0);
          let iconmegaphones = String.fromCharCode(110,95,55,95,116,97,100,100,0);
          let robotoX = String.fromCharCode(98,105,116,95,114,95,49,49,0);
         next9 += parseFloat(`${2 + parseInt(`${next9}`)}`);
         goallogo7 += "1";
         iconmegaphones += `${robotoX.length & iconmegaphones.length}`;
         robotoX = `${iconmegaphones.length | 3}`;
         break;
      }
      for (let h = 0; h < 1; h++) {
         next9 += (parseFloat(`${(acceptedx ? 2 : 2) & parseInt(`${next9}`)}`));
      }
      while (next9 == 2.60 && (2.60 + next9) == 5.80) {
         next9 /= Math.max(parseFloat(`${1 + parseInt(`${next9}`)}`), 3);
         break;
      }
      for (let h = 0; h < 2; h++) {
         next9 *= parseFloat(`${1 * parseInt(`${next9}`)}`);
      }
         redgoalB = !acceptedx;
      for (let l = 0; l < 2; l++) {
          let entryz = 2;
          let uimanagerX = false;
         redgoalB = !redgoalB;
         entryz *= 2;
         uimanagerX = !uimanagerX;
      }
      while (4.39 >= (1.16 * next9) && acceptedx) {
         next9 += parseFloat(`${parseInt(`${next9}`) * 2}`);
         break;
      }
      while (5.66 == (next9 / (Math.max(4.63, 7))) && acceptedx) {
         next9 /= Math.max(parseFloat(`${1 % (Math.max(3, parseInt(`${next9}`)))}`), 4);
         break;
      }
      iconviewerS[`${carouselS}`] = 2;

  };
  return display ? (
    <View style={style.lockerContainer}>
      <RenderControl onPress={onPress}>
        <Image
          source={LockImg}
          style={style.lockerIcon}
          resizeMode={'contain'}
        />
      </RenderControl>
    </View>
  ) : null;
};

export const Unlocker = () => {
       let reactnativejsO = 1;
    let iconarrowleft2 = String.fromCharCode(106,95,51,56,95,102,105,108,108,0);
    let dycreatori = 1;
    let iconediti = String.fromCharCode(97,110,97,108,121,122,105,110,103,95,112,95,56,51,0);
    let headerX = 2.0;
    let orangeuparrows = 0.0;
    let profileframet = String.fromCharCode(114,101,112,114,101,115,101,110,116,97,116,105,111,110,95,56,95,53,54,0);
      headerX /= Math.max(4, parseFloat(`${iconarrowleft2.length ^ 1}`));
      orangeuparrows /= Math.max(2, parseFloat(`${iconarrowleft2.length}`));

  const dispatch = useDispatch();
   if (3 > (reactnativejsO * 3) || 5 > (3 * dycreatori)) {
      reactnativejsO %= Math.max(2 << (Math.min(Math.abs(parseInt(`${orangeuparrows}`)), 5)), 2);
   }
      orangeuparrows += parseFloat(`${iconediti.length}`);

  const onPress = () => {

   for (let j = 0; j < 3; j++) {
      headerX /= Math.max(parseFloat(`${iconediti.length / 3}`), 1);
   }
       let playershirtf = String.fromCharCode(112,95,57,48,95,97,103,114,101,101,109,101,110,116,0);
       let dicei = String.fromCharCode(112,95,57,53,95,99,111,109,109,105,116,0);
      do {
         dicei = `${dicei.length}`;
         if (dicei.length == 4245170) {
            break;
         }
      } while ((dicei.length == 4245170) && (playershirtf.length >= dicei.length));
         dicei += `${(String.fromCharCode(51,0) == playershirtf ? playershirtf.length : dicei.length)}`;
         playershirtf += "2";
      if (playershirtf.length < 5) {
         playershirtf += `${dicei.length}`;
      }
      for (let y = 0; y < 2; y++) {
         playershirtf += `${playershirtf.length}`;
      }
         dicei += `${2 * playershirtf.length}`;
      reactnativejsO *= 3;
    dispatch(toggleLockScreen());
   while (iconarrowleft2.startsWith(`${headerX}`)) {
      headerX *= parseFloat(`${dycreatori % (Math.max(5, iconarrowleft2.length))}`);
      break;
   }
   if (5 < (reactnativejsO % (Math.max(dycreatori, 8)))) {
      dycreatori &= reactnativejsO;
   }

    dispatch(showControlAction(ShowControlType.Locker));
      iconarrowleft2 += `${profileframet.length + 3}`;
      headerX -= parseFloat(`${parseInt(`${orangeuparrows}`)}`);

  };
   if ((reactnativejsO & 1) > 3 || 5 > (1 & reactnativejsO)) {
      iconediti += `${parseInt(`${orangeuparrows}`) / (Math.max(iconarrowleft2.length, 3))}`;
   }
   while (2 <= (profileframet.length >> (Math.min(Math.abs(4), 5))) && 4 <= (profileframet.length >> (Math.min(5, Math.abs(reactnativejsO))))) {
      reactnativejsO /= Math.max(parseInt(`${orangeuparrows}`) >> (Math.min(profileframet.length, 4)), 1);
      break;
   }

  return (
    <RenderControl
      onPress={onPress}
      style={{
        flex: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        source={UnlockImg}
        style={[style.unlockerIcon]}
        resizeMode={'contain'}
      />
    </RenderControl>
  );
   if (2 >= iconediti.length) {
       let showmoreH = String.fromCharCode(105,110,100,97,116,97,95,99,95,53,0);
       let bannerk = [498, 300, 295];
       let libjsiK = new Map([[String.fromCharCode(109,95,53,53,95,104,105,103,104,108,105,103,104,116,101,100,0),847], [String.fromCharCode(100,105,118,105,100,105,110,103,95,109,95,56,53,0),345]]);
       let renderz = String.fromCharCode(117,95,50,52,95,99,108,109,117,108,0);
       let pushh = new Map([[String.fromCharCode(119,95,50,57,95,118,97,108,105,100,97,116,111,114,115,0),552], [String.fromCharCode(114,101,116,114,105,101,114,95,50,95,56,53,0),10], [String.fromCharCode(112,95,54,49,95,115,111,109,101,116,104,105,110,103,0),94]]);
         renderz += `${(renderz == String.fromCharCode(53,0) ? renderz.length : pushh.size)}`;
          let controlsQ = false;
          let topon5 = String.fromCharCode(122,95,56,57,95,102,114,97,112,115,0);
          let catagoryo = 5.0;
         pushh = new Map([[`${libjsiK.size}`, 2 ^ libjsiK.size]]);
         controlsQ = 20.6 >= catagoryo;
         topon5 += `${((controlsQ ? 2 : 2) & parseInt(`${catagoryo}`))}`;
      if (renderz.length <= bannerk.length) {
         renderz = `${showmoreH.length >> (Math.min(Math.abs(3), 1))}`;
      }
      while (4 <= (4 + showmoreH.length)) {
         libjsiK = new Map([[`${libjsiK.size}`, renderz.length / (Math.max(10, libjsiK.size))]]);
         break;
      }
      do {
         renderz += "3";
         if (renderz == String.fromCharCode(50,107,115,106,122,50,121,109,117,117,0)) {
            break;
         }
      } while ((renderz == String.fromCharCode(80,0) && showmoreH == String.fromCharCode(50,0)) && (renderz == String.fromCharCode(50,107,115,106,122,50,121,109,117,117,0)));
          let logouserY = String.fromCharCode(104,119,99,111,110,116,101,120,116,95,54,95,53,50,0);
          let attributedstringa = 2.0;
          let streamingH = String.fromCharCode(121,95,55,95,105,109,112,108,105,99,105,116,108,121,0);
         libjsiK = new Map([[`${pushh.size}`, pushh.size]]);
         logouserY += `${streamingH.length ^ 2}`;
         attributedstringa -= parseFloat(`${streamingH.length}`);
      for (let n = 0; n < 3; n++) {
          let modity5 = new Map([[String.fromCharCode(101,95,50,49,95,103,117,101,115,115,0),true ], [String.fromCharCode(114,101,99,111,103,110,105,122,101,114,95,99,95,57,55,0),true ]]);
          let privatechatbgq = false;
          let iconpointscorem = String.fromCharCode(108,111,103,95,116,95,51,53,0);
          let taiwanC = 5.0;
          let awayteamfieldF = String.fromCharCode(108,95,55,57,95,115,117,98,100,101,109,117,120,101,114,0);
         pushh[renderz] = renderz.length & 2;
         modity5[iconpointscorem] = awayteamfieldF.length;
         privatechatbgq = !privatechatbgq;
         iconpointscorem = `${(2 >> (Math.min(1, Math.abs((privatechatbgq ? 5 : 4)))))}`;
         taiwanC /= Math.max(3, ((privatechatbgq ? 1 : 5) + 2));
         awayteamfieldF += `${3 >> (Math.min(3, Math.abs(modity5.size)))}`;
      }
          let componentsk = [String.fromCharCode(119,95,51,48,95,105,115,105,0), String.fromCharCode(97,118,101,114,97,103,101,95,54,95,52,0), String.fromCharCode(98,95,55,56,95,97,110,99,105,108,108,97,114,121,0)];
          let exampleimagen = new Map([[String.fromCharCode(114,95,55,56,95,109,111,100,105,102,121,0),String.fromCharCode(99,95,49,56,95,99,104,97,114,109,97,112,0)], [String.fromCharCode(118,95,54,95,114,101,99,111,103,110,105,122,101,114,0),String.fromCharCode(105,95,53,51,95,120,112,116,97,98,108,101,0)]]);
         renderz += `${libjsiK.size | showmoreH.length}`;
         componentsk.push(componentsk.length);
         exampleimagen = new Map([[`${exampleimagen.size}`, componentsk.length]]);
         libjsiK = new Map([[`${bannerk.length}`, 1 - bannerk.length]]);
      for (let v = 0; v < 2; v++) {
         bannerk = [(String.fromCharCode(83,0) == showmoreH ? renderz.length : showmoreH.length)];
      }
         renderz += `${libjsiK.size ^ bannerk.length}`;
         libjsiK[`${showmoreH}`] = showmoreH.length | libjsiK.size;
         pushh[renderz] = 1;
      if (renderz.startsWith(showmoreH)) {
         showmoreH = `${1 + bannerk.length}`;
      }
      for (let x = 0; x < 2; x++) {
         renderz = `${bannerk.length + libjsiK.size}`;
      }
      iconediti += `${profileframet.length + showmoreH.length}`;
   }
   for (let d = 0; d < 1; d++) {
      orangeuparrows += parseFloat(`${parseInt(`${headerX}`)}`);
   }

};

export const ShareButton = () => {
       let volume4 = 1.0;
    let dragcloseC = 0;
    let starP = String.fromCharCode(114,97,100,98,103,95,98,95,52,57,0);
    let baselinex = 1.0;
    let with_04K = 0.0;
    let orangetickt = false;
    let informationK = String.fromCharCode(110,95,53,53,95,109,105,114,114,111,114,0);
    let singleu = new Map([[String.fromCharCode(100,95,53,52,95,111,110,101,112,97,115,115,0),280], [String.fromCharCode(99,111,112,121,100,97,116,97,95,102,95,52,54,0),799]]);
    let homeactive3 = String.fromCharCode(120,95,52,54,95,104,97,110,103,0);
    let container3 = 4.0;
    let giflivestreamingc = 2.0;
   do {
      starP = `${(parseInt(`${baselinex}`) ^ (orangetickt ? 5 : 5))}`;
      if (String.fromCharCode(55,95,52,103,105,109,108,121,0) == starP) {
         break;
      }
   } while ((2 > (starP.length >> (Math.min(Math.abs(3), 3))) && (starP.length + 3) > 1) && (String.fromCharCode(55,95,52,103,105,109,108,121,0) == starP));

  const dispatch = useDispatch();
       let yellowtoredz = new Map([[String.fromCharCode(109,97,116,99,104,101,95,120,95,55,48,0),387], [String.fromCharCode(109,117,108,116,105,108,105,110,101,95,55,95,55,53,0),193], [String.fromCharCode(113,95,49,57,95,118,116,97,115,107,113,117,101,117,101,0),63]]);
      while ((3 + yellowtoredz.size) > 4) {
         yellowtoredz[`${yellowtoredz.size}`] = yellowtoredz.size * 3;
         break;
      }
      for (let s = 0; s < 2; s++) {
          let sourceE = String.fromCharCode(117,110,105,95,113,95,53,50,0);
         yellowtoredz = new Map([[`${yellowtoredz.size}`, yellowtoredz.size]]);
         sourceE = `${sourceE.length ^ sourceE.length}`;
      }
      do {
         yellowtoredz = new Map([[`${yellowtoredz.size}`, yellowtoredz.size]]);
         if (2881427 == yellowtoredz.size) {
            break;
         }
      } while ((1 <= (yellowtoredz.size + 2) || 5 <= (yellowtoredz.size + 2)) && (2881427 == yellowtoredz.size));
      informationK = "2";

  const debouncedShare = useCallback(
    debounce((title, matchId) => shareStream(title, matchId), 500),
    [],
  );
      informationK = `${((orangetickt ? 1 : 2) - parseInt(`${volume4}`))}`;


  const matchId = useSelector(state => state.matchId);
   if (!orangetickt || starP.length == 2) {
      orangetickt = with_04K == 77.64 && baselinex == 77.64;
   }

  const liveRoomAction = new yysDrag(dispatch, matchId);
  // const shareLink = useSelector(state => state.shareLink);
   do {
      informationK = `${informationK.length}`;
      if (String.fromCharCode(55,57,106,117,118,0) == informationK) {
         break;
      }
   } while ((5 >= (informationK.length & 1)) && (String.fromCharCode(55,57,106,117,118,0) == informationK));

  const liveDataState = useSelector(state => state.liveRoom);
       let filedp = 1;
       let upgradek = String.fromCharCode(97,95,51,53,95,105,110,100,101,120,0);
      if ((upgradek.length * 3) >= 2 && (filedp * upgradek.length) >= 3) {
          let formj = 3;
          let giflivestreamingI = String.fromCharCode(103,95,56,57,95,98,101,104,97,118,105,111,117,114,0);
          let bellZ = String.fromCharCode(99,111,110,100,117,99,116,111,114,95,107,95,50,57,0);
          let iconviewergifY = String.fromCharCode(111,95,51,52,95,121,113,117,97,110,116,0);
         upgradek = `${giflivestreamingI.length % (Math.max(8, bellZ.length))}`;
         formj >>= Math.min(5, Math.abs(formj >> (Math.min(iconviewergifY.length, 5))));
         giflivestreamingI = `${(String.fromCharCode(89,0) == iconviewergifY ? iconviewergifY.length : formj)}`;
         bellZ += `${(iconviewergifY == String.fromCharCode(53,0) ? formj : iconviewergifY.length)}`;
      }
      for (let w = 0; w < 3; w++) {
         filedp -= filedp;
      }
         upgradek += `${3 << (Math.min(3, Math.abs(filedp)))}`;
         filedp *= upgradek.length;
      for (let b = 0; b < 3; b++) {
         filedp *= 3;
      }
      if ((filedp + 3) <= 2 || (upgradek.length + filedp) <= 3) {
          let whitebelle = true;
         upgradek = `${(String.fromCharCode(118,0) == upgradek ? (whitebelle ? 5 : 1) : upgradek.length)}`;
      }
      baselinex /= Math.max(2, 3 & parseInt(`${volume4}`));

  const competitionNameShort = liveDataState?.competition?.name_short;
      informationK = `${((orangetickt ? 1 : 4) / (Math.max(parseInt(`${with_04K}`), 6)))}`;

  const awayName = liveDataState?.away?.name;
   if (4 > (dragcloseC >> (Math.min(Math.abs(1), 4))) && (parseInt(`${volume4}`) / (Math.max(8, dragcloseC))) > 1) {
       let clocku = true;
      while (clocku) {
         clocku = (!clocku ? !clocku : !clocku);
         break;
      }
      if (!clocku) {
         clocku = !clocku;
      }
      while (clocku) {
          let package_s04 = [247, 91, 150];
          let time_wg7 = new Map([[String.fromCharCode(112,95,57,48,95,115,116,97,103,101,0),373], [String.fromCharCode(116,95,57,53,95,116,105,109,101,108,105,109,105,116,0),330]]);
          let libreactp = String.fromCharCode(112,95,56,52,95,112,97,112,101,114,115,0);
         clocku = time_wg7.size >= 34 || clocku;
         package_s04.push(libreactp.length);
         time_wg7[libreactp] = 1 | libreactp.length;
         break;
      }
      volume4 -= parseFloat(`${starP.length}`);
   }

  const homeName = liveDataState?.home?.name;
   while (dragcloseC >= starP.length) {
       let ajaxc = String.fromCharCode(109,95,52,52,95,121,117,118,109,112,101,103,0);
       let iconarrowrightorange0 = 2.0;
       let iconclosewhitebgj = [77, 154];
         iconclosewhitebgj = [1 - iconclosewhitebgj.length];
         ajaxc += `${3 - iconclosewhitebgj.length}`;
      for (let c = 0; c < 3; c++) {
         iconarrowrightorange0 -= iconclosewhitebgj.length * parseInt(`${iconarrowrightorange0}`);
      }
      for (let e = 0; e < 3; e++) {
         iconclosewhitebgj.push(2);
      }
         iconclosewhitebgj = [parseInt(`${iconarrowrightorange0}`) * ajaxc.length];
      for (let e = 0; e < 3; e++) {
         iconarrowrightorange0 -= parseInt(`${iconarrowrightorange0}`) | iconclosewhitebgj.length;
      }
         ajaxc += `${ajaxc.length}`;
      do {
          let shrinkh = 3;
          let orangeclockI = String.fromCharCode(106,95,49,51,95,116,114,101,101,0);
          let libreactnativeblob3 = 5;
         iconarrowrightorange0 *= parseInt(`${iconarrowrightorange0}`) << (Math.min(ajaxc.length, 2));
         shrinkh |= 2 ^ libreactnativeblob3;
         orangeclockI += `${shrinkh >> (Math.min(4, Math.abs(libreactnativeblob3)))}`;
         if (iconarrowrightorange0 == 3338444.0) {
            break;
         }
      } while ((iconarrowrightorange0 == 3338444.0) && (!iconclosewhitebgj.includes(iconarrowrightorange0)));
         ajaxc = "2";
      dragcloseC -= 3;
      break;
   }


  const title = `${competitionNameShort} | ${homeName} vs ${awayName}`;
       let wind5 = [479, 779, 626];
       let hearth = new Map([[String.fromCharCode(108,95,50,50,95,116,97,98,108,101,105,110,105,116,0),false ], [String.fromCharCode(99,111,114,110,101,114,95,104,95,49,55,0),false ]]);
       let anythinkG = String.fromCharCode(120,95,56,52,95,100,101,99,114,101,97,115,101,0);
         wind5 = [wind5.length];
          let libswresample5 = [String.fromCharCode(114,101,103,105,115,116,101,114,101,114,95,50,95,54,55,0), String.fromCharCode(114,95,52,57,95,102,114,97,103,109,101,110,116,0)];
         hearth = new Map([[`${hearth.size}`, hearth.size / 3]]);
         libswresample5 = [3 * libswresample5.length];
      do {
         hearth[anythinkG] = anythinkG.length;
         if (hearth.size == 4472512) {
            break;
         }
      } while ((Array.from(hearth.keys()).includes(`${wind5.length}`)) && (hearth.size == 4472512));
      for (let y = 0; y < 3; y++) {
         hearth[`${wind5.length}`] = 2 << (Math.min(2, Math.abs(hearth.size)));
      }
      for (let a = 0; a < 3; a++) {
         hearth = new Map([[`${wind5.length}`, wind5.length]]);
      }
      while (4 >= (anythinkG.length | wind5.length) && (wind5.length | 4) >= 1) {
         wind5 = [3 - hearth.size];
         break;
      }
         wind5 = [hearth.size * 2];
         hearth = new Map([[`${wind5.length}`, (anythinkG == String.fromCharCode(51,0) ? anythinkG.length : wind5.length)]]);
         wind5.push(wind5.length);
      orangetickt = !orangetickt;


  const shareStream = async (title, matchId) => {
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    //     }}>
    
    
    
    
    //     />
    //   </RenderControl>
    
  };

  export const style = StyleSheet.create({
    lockerContainer: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'transparent',
    },
    lockerIcon: {
      position: 'absolute',
      tintColor: 'white',
      top: 5,
      right: 14,
      width: 40,
      height: 40,
    },
    unlockerIcon: {
      width: 40,
      height: 40,
      tintColor: 'white',
    },
    commonIcon: {
      width: 35,
      height: 35,
      margin: 5,
    },
    commonIconContainer: {
      padding: 0,
    },
    backContainer: {
      flex: 0,
      display: 'flex',
      padding: 10,
    },
    backIcon: {
      width: 20,
      height: 20,
      margin: 5,
    },
    errorBackContainer: {
      position: 'absolute',
      top: 20,
      left: 20,
    },
    errorIcon: {
      flex: 0,
      width: 30,
      height: 30,
      marginVertical: 20,
    },
    errorButton: {
      borderWidth: 1,
      borderRadius: 15,
      borderColor: '#ffffff',
      marginVertical: 10,
      width: 40,
      height: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    errorButtonText: {
      backgroundColor: 'transparent',
      color: 'white',
      fontSize: 11,
    },
  });
