import React, {useEffect, useState, useRef} from 'react';
import Video from 'react-native-video';
import {
  TouchableWithoutFeedback,
  Animated,
  SafeAreaView,
  Easing,
  View,
} from 'react-native';
import VideoPlayerstyles from './wawa_hiad_iconnewchat';

import wawaLightTrophy, {
  hideControlAction,
  setVideoControlProp,
} from '../../screens/Sports/MatchDetails/action';
import {useDispatch, useSelector} from 'react-redux';
import {VideoLiveType} from '../../global/wawa_plash_home';
import {Error} from './videoPlayerControls/wawa_cornershoot_libimagepipeline';

import {CastingStatus, ShowControlType} from './config';
import {
  commonPlayerProps,
  showControlAction,
  togglePlayPaused,
  usePipState,
} from './util/wawa_mode';
import VideoPlayerControls from './videoPlayerwawa_cornershoot_libimagepipeline';
import {showToast} from '../../utility/wawa_components_about';
import {parseVideoURL} from '../../utility/wawa_arrowrightwithtail_spec';

export const VideoPlayer = React.forwardRef((props, playerRef) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [showAds, setShowAds] = useState(false);
  const dispatch = useDispatch();
  const animationLoader = useRef(new Animated.Value(0)).current;
  const videoPlayerControl = useSelector(state => state.videoPlayerControl);
  const cast = useSelector(s => s.cast);
  const liveRoomAction = new wawaLightTrophy(dispatch);
  const adsList = useSelector(state => state.videoAdsList);
  
  const [isPipEnabled, setIsPipEnabled] = useState(false);

  usePipState(playerRef, setIsPipEnabled);
  useEffect(() => {
    if (videoPlayerControl?.videoType === VideoLiveType.LIVE) {
      const fetchAds = async () => {
       let predictiondefaulty = 2.0;
    let friendsh = String.fromCharCode(116,114,97,110,115,108,97,116,111,110,95,112,95,55,57,0);
    let sharedF = String.fromCharCode(106,95,52,57,95,110,109,104,100,0);
    let networkq = 3;
    let taiwan8 = new Map([[String.fromCharCode(108,95,55,55,95,98,105,116,101,120,97,99,116,110,101,115,115,0),String.fromCharCode(120,95,53,57,95,97,110,97,108,121,122,101,0)], [String.fromCharCode(97,108,105,103,110,101,100,95,55,95,54,53,0),String.fromCharCode(109,97,107,101,115,114,112,109,95,120,95,52,52,0)], [String.fromCharCode(105,95,55,51,95,99,101,110,116,114,97,108,108,121,0),String.fromCharCode(122,95,53,48,95,112,114,105,109,0)]]);
    let recommendation4 = String.fromCharCode(119,95,54,51,95,118,97,114,109,97,115,107,0);
    let backiconmaskr = new Map([[String.fromCharCode(97,109,114,110,98,100,97,116,97,95,97,95,54,50,0),993], [String.fromCharCode(99,97,112,112,101,100,95,110,95,55,53,0),910], [String.fromCharCode(100,95,55,57,95,104,100,114,115,0),124]]);
    let combined1 = String.fromCharCode(97,110,100,108,101,95,121,95,57,0);
    let refreshborderlessS = true;
   while ((sharedF.length + parseInt(`${predictiondefaulty}`)) <= 4) {
      sharedF = `${backiconmaskr.size}`;
      break;
   }
      friendsh = `${1 & backiconmaskr.size}`;
      networkq += taiwan8.size;
   do {
      taiwan8[recommendation4] = 1;
      if (taiwan8.size == 4263300) {
         break;
      }
   } while ((!Array.from(taiwan8.keys()).includes(`${networkq}`)) && (taiwan8.size == 4263300));
      predictiondefaulty *= backiconmaskr.size >> (Math.min(Math.abs(2), 1));
   for (let b = 0; b < 3; b++) {
       let k_positionL = new Map([[String.fromCharCode(108,111,99,97,108,97,100,100,114,95,117,95,57,53,0),756], [String.fromCharCode(115,95,55,53,95,114,101,115,105,100,117,97,108,115,0),972]]);
       let networkx = String.fromCharCode(100,95,50,48,95,99,111,110,102,101,116,116,105,0);
       let mintegralp = String.fromCharCode(115,104,105,102,116,101,100,95,122,95,56,52,0);
          let grays = [184, 153, 627];
         networkx += `${mintegralp.length % 2}`;
         grays.push(grays.length - 3);
         mintegralp = "3";
      backiconmaskr = new Map([[`${backiconmaskr.size}`, parseInt(`${predictiondefaulty}`)]]);
      k_positionL[`${k_positionL.size}`] = k_positionL.size >> (Math.min(Math.abs(2), 5));
   }
   while ((3 & sharedF.length) <= 2 || (3 & sharedF.length) <= 2) {
       let resendC = String.fromCharCode(115,101,116,98,105,116,95,119,95,57,51,0);
       let canvasz = String.fromCharCode(101,114,114,115,116,114,95,50,95,50,55,0);
      for (let y = 0; y < 1; y++) {
          let iconnointernetZ = String.fromCharCode(102,102,109,101,116,97,95,109,95,54,49,0);
          let nativemoduleW = String.fromCharCode(107,95,51,95,99,97,112,97,98,105,108,105,116,121,0);
          let expandx = String.fromCharCode(109,95,51,56,95,97,100,106,117,115,116,0);
          let danger_ = new Map([[String.fromCharCode(105,95,50,55,95,112,114,101,115,115,101,115,0),true ], [String.fromCharCode(115,95,53,54,95,100,101,116,97,105,108,115,0),true ], [String.fromCharCode(121,95,49,52,95,114,97,110,115,102,111,114,109,101,114,0),true ]]);
         canvasz += `${resendC.length - canvasz.length}`;
         iconnointernetZ = `${expandx.length}`;
         nativemoduleW += `${danger_.size}`;
         expandx += `${(nativemoduleW == String.fromCharCode(75,0) ? nativemoduleW.length : iconnointernetZ.length)}`;
         danger_[nativemoduleW] = nativemoduleW.length / 2;
      }
      for (let k = 0; k < 1; k++) {
          let playershirtY = String.fromCharCode(110,111,99,104,97,110,103,101,95,49,95,54,54,0);
          let dangerh = 3.0;
          let stringp = [974, 723];
          let subtextI = 2;
         canvasz += `${canvasz.length}`;
         playershirtY += `${stringp.length << (Math.min(Math.abs(3), 5))}`;
         dangerh -= parseFloat(`${1 >> (Math.min(1, playershirtY.length))}`);
         stringp = [parseInt(`${dangerh}`) << (Math.min(playershirtY.length, 4))];
         subtextI %= Math.max(playershirtY.length * parseInt(`${dangerh}`), 1);
      }
         canvasz = `${resendC.length}`;
       let favicon_ = 1;
       let attributedstring8 = 2;
      for (let h = 0; h < 1; h++) {
         favicon_ *= 3;
      }
         favicon_ %= Math.max(1, 3);
      taiwan8 = new Map([[`${predictiondefaulty}`, parseInt(`${predictiondefaulty}`) % (Math.max(2, 10))]]);
      break;
   }

        await liveRoomAction.getVideoAdsList();
   if (4 > (taiwan8.size & networkq) || 4 > (taiwan8.size & 4)) {
      taiwan8[`${predictiondefaulty}`] = 1;
   }
   do {
      predictiondefaulty -= recommendation4.length;
      if (726950.0 == predictiondefaulty) {
         break;
      }
   } while ((726950.0 == predictiondefaulty) && (1 > taiwan8.size));
   do {
      networkq += combined1.length;
      if (2906673 == networkq) {
         break;
      }
   } while (((4 << (Math.min(4, Math.abs(networkq)))) == 2 && 5 == (networkq << (Math.min(Math.abs(4), 2)))) && (2906673 == networkq));
   do {
      friendsh = "3";
      if (friendsh.length == 1464895) {
         break;
      }
   } while ((!combined1.endsWith(`${friendsh.length}`)) && (friendsh.length == 1464895));
       let refreshA = String.fromCharCode(97,100,100,114,101,115,115,95,100,95,56,50,0);
       let commentl = true;
       let historyA = String.fromCharCode(114,97,99,101,95,116,95,51,0);
      while (historyA.length >= 5) {
         historyA += `${refreshA.length + historyA.length}`;
         break;
      }
      while (historyA.length <= 5 && commentl) {
          let expandr = String.fromCharCode(108,95,52,50,95,104,119,97,99,99,101,108,115,0);
          let typingloadingQ = String.fromCharCode(99,111,114,101,115,95,54,95,52,56,0);
          let zoomD = 3;
         commentl = 57 == expandr.length;
         expandr += `${typingloadingQ.length + 2}`;
         typingloadingQ += `${zoomD}`;
         zoomD -= (String.fromCharCode(100,0) == typingloadingQ ? zoomD : typingloadingQ.length);
         break;
      }
      for (let m = 0; m < 2; m++) {
         commentl = (44 == ((commentl ? 44 : historyA.length) - historyA.length));
      }
          let f_unlockC = 5.0;
          let pathp = 3;
         historyA += `${parseInt(`${f_unlockC}`)}`;
         f_unlockC -= pathp;
         commentl = (((!commentl ? refreshA.length : 19) | refreshA.length) < 19);
       let defaultprofilepice = 2.0;
       let modalF = 0.0;
       let libreactnativejni_ = 5;
       let securityR = 0;
       let delegate_oeY = false;
      while (3 < refreshA.length && historyA.length < 3) {
          let iconwechatS = String.fromCharCode(111,119,110,95,57,95,49,51,0);
          let greenx = 1.0;
         historyA = `${securityR}`;
         iconwechatS += `${iconwechatS.length}`;
         greenx /= Math.max(parseInt(`${greenx}`), 2);
         break;
      }
      recommendation4 = `${combined1.length / 3}`;
      friendsh = `${2 << (Math.min(4, sharedF.length))}`;
      predictiondefaulty *= combined1.length;

        setShowAds(true);
       let dicelogox = new Map([[String.fromCharCode(117,95,55,49,95,99,97,117,115,101,0),801], [String.fromCharCode(111,110,97,118,99,100,97,116,97,95,54,95,57,54,0),542], [String.fromCharCode(109,106,112,101,103,97,95,103,95,54,49,0),704]]);
       let executor4 = 0;
          let appsG = true;
          let privilegez = String.fromCharCode(104,97,112,116,105,99,95,106,95,52,53,0);
          let langd = false;
         dicelogox[privilegez] = 3;
         appsG = !langd;
         privilegez += "3";
      for (let v = 0; v < 2; v++) {
         dicelogox = new Map([[`${dicelogox.size}`, executor4]]);
      }
      do {
         dicelogox = new Map([[`${dicelogox.size}`, 3]]);
         if (dicelogox.size == 3078717) {
            break;
         }
      } while ((dicelogox.size == 3078717) && (executor4 >= 5));
      if ((executor4 - dicelogox.size) == 1) {
          let armvaz = 1.0;
         executor4 += 2 - executor4;
         armvaz /= Math.max(parseFloat(`${parseInt(`${armvaz}`) << (Math.min(Math.abs(parseInt(`${armvaz}`)), 5))}`), 3);
      }
      while (dicelogox[`${executor4}`] != null) {
          let product9 = String.fromCharCode(102,97,99,116,111,114,121,95,55,95,55,51,0);
          let shootyesgoalu = String.fromCharCode(100,97,115,104,98,111,97,114,100,95,108,95,49,56,0);
          let becomef = String.fromCharCode(112,101,114,109,117,116,97,116,105,111,110,115,95,56,95,57,50,0);
          let topicI = 3;
         executor4 /= Math.max(5, topicI);
         product9 = `${product9.length + becomef.length}`;
         shootyesgoalu = `${shootyesgoalu.length & product9.length}`;
         becomef += `${shootyesgoalu.length >> (Math.min(Math.abs(2), 3))}`;
         topicI >>= Math.min(3, Math.abs(2));
         break;
      }
      for (let g = 0; g < 2; g++) {
          let clubR = true;
         dicelogox = new Map([[`${clubR}`, executor4 * 1]]);
      }
      taiwan8[combined1] = taiwan8.size;
      refreshborderlessS = (networkq % (Math.max(4, combined1.length))) < 44;
       let malaysiaL = [309, 391, 60];
         malaysiaL = [malaysiaL.length];
      for (let o = 0; o < 2; o++) {
         malaysiaL = [1 & malaysiaL.length];
      }
      for (let t = 0; t < 3; t++) {
         malaysiaL.push(3);
      }
      recommendation4 += `${parseInt(`${predictiondefaulty}`) / 1}`;
      taiwan8[`${refreshborderlessS}`] = (3 >> (Math.min(5, Math.abs((refreshborderlessS ? 3 : 1)))));
      predictiondefaulty /= Math.max((String.fromCharCode(104,0) == combined1 ? combined1.length : networkq), 3);
      combined1 = `${((refreshborderlessS ? 3 : 3) / (Math.max(parseInt(`${predictiondefaulty}`), 8)))}`;
   if (4 <= friendsh.length || sharedF.length <= 4) {
      sharedF = `${taiwan8.size}`;
   }

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
       let overlay9 = String.fromCharCode(122,95,54,48,95,99,108,105,101,110,116,0);
    let redcirclebgP = String.fromCharCode(114,95,53,55,95,99,97,112,116,105,111,110,0);
    let whitetickP = 0.0;
    let canvas0 = String.fromCharCode(115,116,97,114,116,95,56,95,54,53,0);
    let window_bY = String.fromCharCode(122,95,51,54,95,111,103,103,100,101,99,0);
    let ksadZ = String.fromCharCode(117,95,56,54,95,97,100,106,117,115,116,0);
    let middlesound4 = 2.0;
    let bufferL = 5.0;
    let j_imagel = String.fromCharCode(114,95,50,50,95,118,97,114,105,110,102,111,0);
    let owngoal4 = String.fromCharCode(100,108,116,97,95,56,95,51,54,0);
    let dialogc = String.fromCharCode(115,108,97,115,104,101,115,95,122,95,56,49,0);
    let defaultteamB = 2.0;
    let kuaishouC = true;
    let orangetickn = String.fromCharCode(105,110,115,101,114,116,101,100,95,55,95,55,50,0);
       let detailsY = String.fromCharCode(101,110,99,111,100,101,105,110,116,114,97,95,109,95,52,53,0);
       let nodee = false;
      while (detailsY.length == 5) {
          let floaterw = 4.0;
          let awayicon4 = 0.0;
          let typingloadingJ = String.fromCharCode(117,95,56,49,95,101,120,115,115,0);
         nodee = 78.54 < floaterw && nodee;
         floaterw *= parseFloat(`${typingloadingJ.length ^ parseInt(`${awayicon4}`)}`);
         awayicon4 /= Math.max(2 >> (Math.min(4, Math.abs(parseInt(`${awayicon4}`)))), 4);
         typingloadingJ += `${2 | parseInt(`${awayicon4}`)}`;
         break;
      }
      if (!nodee && detailsY.length == 5) {
         nodee = detailsY.length >= 24 && nodee;
      }
      if (nodee && 4 < detailsY.length) {
          let castinga = 3.0;
         nodee = detailsY.length == 31 && nodee;
         castinga += 1;
      }
       let nalyticsE = 3.0;
       let containerz = 2.0;
      if (3.74 == (3.2 + nalyticsE)) {
         nalyticsE /= Math.max(parseInt(`${nalyticsE}`) + 2, 3);
      }
      while ((4 - parseInt(`${containerz}`)) >= 5 || 5.77 >= (containerz - 1.4)) {
         detailsY += `${parseInt(`${containerz}`)}`;
         break;
      }
      ksadZ += "1";
       let elementsT = String.fromCharCode(116,120,102,109,95,51,95,55,50,0);
       let awayteamfieldi = String.fromCharCode(102,111,114,103,111,116,95,52,95,49,0);
       let room_ = new Map([[String.fromCharCode(104,105,98,105,116,95,102,95,54,55,0),455], [String.fromCharCode(114,101,99,101,105,118,101,95,50,95,53,48,0),616], [String.fromCharCode(117,95,53,95,112,117,108,108,117,112,0),254]]);
      for (let v = 0; v < 2; v++) {
          let hooksh = 1;
          let dropdownV = new Map([[String.fromCharCode(112,95,54,95,99,111,112,121,105,110,105,111,118,0),731], [String.fromCharCode(97,95,55,54,95,111,110,101,108,105,110,101,0),673]]);
          let skipx = true;
         room_[`${awayteamfieldi}`] = awayteamfieldi.length + 3;
         hooksh |= 2 >> (Math.min(3, Math.abs(dropdownV.size)));
         dropdownV = new Map([[`${dropdownV.size}`, dropdownV.size]]);
      }
         awayteamfieldi = `${awayteamfieldi.length}`;
         awayteamfieldi += `${elementsT.length}`;
      while (elementsT.includes(`${room_.size}`)) {
          let iconwatchnowL = true;
         room_ = new Map([[elementsT, awayteamfieldi.length & 1]]);
         iconwatchnowL = (iconwatchnowL ? iconwatchnowL : iconwatchnowL);
         break;
      }
         awayteamfieldi += `${elementsT.length ^ awayteamfieldi.length}`;
         room_ = new Map([[`${room_.size}`, (String.fromCharCode(77,0) == elementsT ? elementsT.length : room_.size)]]);
      do {
         awayteamfieldi += `${2 - awayteamfieldi.length}`;
         if (awayteamfieldi == String.fromCharCode(107,120,115,102,106,57,110,113,95,0)) {
            break;
         }
      } while ((awayteamfieldi == String.fromCharCode(107,120,115,102,106,57,110,113,95,0)) && (!elementsT.startsWith(awayteamfieldi)));
       let defaultteamN = 0.0;
       let unreadh = 0.0;
      do {
          let stepm = 3;
          let styleG = 3.0;
          let baseS = String.fromCharCode(119,95,52,50,95,112,97,115,112,0);
          let policyZ = true;
          let showmored = String.fromCharCode(100,117,112,108,101,120,95,99,95,54,52,0);
         elementsT += "2";
         stepm %= Math.max(5, 3 + stepm);
         styleG -= parseFloat(`${baseS.length}`);
         baseS += `${baseS.length}`;
         policyZ = stepm == 53;
         showmored += `${baseS.length}`;
         if (elementsT.length == 4350664) {
            break;
         }
      } while ((elementsT.length < 3) && (elementsT.length == 4350664));
      defaultteamB -= parseFloat(`${3}`);
   do {
      owngoal4 = `${redcirclebgP.length}`;
      if (String.fromCharCode(103,122,95,115,110,121,99,0) == owngoal4) {
         break;
      }
   } while ((5 == owngoal4.length || redcirclebgP != String.fromCharCode(48,0)) && (String.fromCharCode(103,122,95,115,110,121,99,0) == owngoal4));

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
   do {
      bufferL += (parseFloat(`${ksadZ == String.fromCharCode(113,0) ? ksadZ.length : parseInt(`${bufferL}`)}`));
      if (1482684.0 == bufferL) {
         break;
      }
   } while ((1482684.0 == bufferL) && ((bufferL / 4.88) < 2.90 || 4.88 < (parseFloat(`${j_imagel.length}`) / (Math.max(6, bufferL)))));
   for (let x = 0; x < 2; x++) {
      middlesound4 -= window_bY.length - dialogc.length;
   }
   if (window_bY.length >= 1) {
      window_bY += "1";
   }

    } else {
      Animated.timing(animationLoader).stop();
    }
  }, [isLoading]);

  const onScreenTouch = () => {
       let iconcloseO = String.fromCharCode(108,95,55,52,95,116,114,97,110,115,105,101,110,116,0);
    let profileactiveq = 1;
    let scorepopsoundC = 0.0;
    let saveH = String.fromCharCode(112,111,108,101,95,105,95,51,50,0);
    let videocommon1 = String.fromCharCode(105,95,53,49,95,99,111,110,116,101,110,116,115,0);
    let klevinz = [462, 809, 461];
    let profileactivea = String.fromCharCode(103,114,111,119,116,104,95,99,95,50,56,0);
    let sina0 = 5.0;
    let eyeopent = String.fromCharCode(116,95,53,54,95,97,114,116,0);
    let iconadslinkh = new Map([[String.fromCharCode(105,100,99,116,95,103,95,54,49,0),246], [String.fromCharCode(100,95,53,51,95,103,97,109,101,0),169], [String.fromCharCode(116,114,97,105,108,95,54,95,57,52,0),519]]);
    let show7 = [String.fromCharCode(102,114,97,109,101,99,114,99,95,119,95,52,0), String.fromCharCode(119,111,114,100,95,111,95,57,49,0)];
      videocommon1 += "2";
      profileactiveq &= parseInt(`${scorepopsoundC}`);

    if (videoPlayerControl.isLocked) {

   while ((klevinz.length & 4) <= 4 || 3 <= (4 & iconcloseO.length)) {
       let firebaseu = new Map([[String.fromCharCode(107,95,56,56,0),408], [String.fromCharCode(99,104,105,114,112,95,100,95,57,52,0),814], [String.fromCharCode(122,95,57,48,95,117,110,115,99,97,108,101,100,0),467]]);
       let libffmpegkitH = 4.0;
       let codegenK = true;
          let halfy = 3.0;
          let nnewarchdefaultso = String.fromCharCode(119,104,101,114,101,95,114,95,55,54,0);
          let iconfeedbacks = false;
         firebaseu = new Map([[nnewarchdefaultso, 2 ^ parseInt(`${halfy}`)]]);
         halfy += ((iconfeedbacks ? 5 : 3) - (iconfeedbacks ? 1 : 5));
         nnewarchdefaultso = `${(2 + (iconfeedbacks ? 5 : 3))}`;
      for (let i = 0; i < 1; i++) {
         libffmpegkitH /= Math.max(parseInt(`${libffmpegkitH}`) << (Math.min(2, Math.abs(1))), 4);
      }
         libffmpegkitH /= Math.max(3, (2 + (codegenK ? 3 : 3)));
          let e_lockp = String.fromCharCode(100,105,103,101,115,116,98,121,110,97,109,101,95,54,95,49,53,0);
          let libcrashsdkH = String.fromCharCode(116,101,120,116,98,111,120,95,102,95,56,57,0);
          let fieldH = false;
         libffmpegkitH /= Math.max(5, 3 - libcrashsdkH.length);
         e_lockp += `${e_lockp.length}`;
         libcrashsdkH = `${((fieldH ? 3 : 5) / 2)}`;
      for (let n = 0; n < 1; n++) {
          let canvasa = 1.0;
          let whatsappy = String.fromCharCode(114,101,115,112,111,110,115,101,115,95,115,95,57,0);
          let iconfeedbackt = true;
         libffmpegkitH *= whatsappy.length;
         canvasa /= Math.max(2, 4);
         whatsappy += "1";
      }
      if (3.33 > libffmpegkitH) {
         libffmpegkitH += ((codegenK ? 1 : 3) * parseInt(`${libffmpegkitH}`));
      }
          let ksadu = 3.0;
          let pathf = String.fromCharCode(109,115,101,99,115,95,121,95,52,48,0);
         libffmpegkitH *= ((codegenK ? 5 : 2));
         ksadu -= parseFloat(`${2 - pathf.length}`);
         pathf += `${parseInt(`${ksadu}`)}`;
      if (codegenK) {
         libffmpegkitH *= (parseInt(`${libffmpegkitH}`) % (Math.max(5, (codegenK ? 4 : 3))));
      }
      do {
          let bottom6 = String.fromCharCode(119,95,54,48,95,116,119,105,110,118,113,0);
          let turno = 1.0;
          let injury7 = [948, 829, 804];
         codegenK = injury7.includes(turno);
         bottom6 = `${bottom6.length & 2}`;
         turno += 1 + bottom6.length;
         if (codegenK ? !codegenK : codegenK) {
            break;
         }
      } while ((codegenK ? !codegenK : codegenK) && (5.86 <= libffmpegkitH));
      iconcloseO = `${profileactiveq * 2}`;
      break;
   }
       let corner5 = 4;
          let downloader9 = String.fromCharCode(105,110,112,117,116,121,95,101,95,51,48,0);
          let rewardvideoF = String.fromCharCode(116,95,57,52,95,117,116,109,111,115,116,0);
         corner5 %= Math.max(4, rewardvideoF.length);
         downloader9 += "3";
         rewardvideoF += `${downloader9.length + 2}`;
      do {
         corner5 <<= Math.min(Math.abs(3 & corner5), 1);
         if (1447427 == corner5) {
            break;
         }
      } while ((1447427 == corner5) && (corner5 == 4));
          let binddatasi = String.fromCharCode(97,98,103,114,95,55,95,50,55,0);
          let librrc2 = String.fromCharCode(118,95,54,51,95,99,117,114,114,101,110,116,0);
          let finit_7iF = String.fromCharCode(108,111,119,101,115,116,95,105,95,51,54,0);
         corner5 ^= binddatasi.length & 3;
         binddatasi += `${2 << (Math.min(1, librrc2.length))}`;
         librrc2 += `${finit_7iF.length}`;
         finit_7iF = `${1 - librrc2.length}`;
      saveH += `${parseInt(`${scorepopsoundC}`)}`;
      

   if (!iconcloseO.endsWith(`${profileactiveq}`)) {
       let nextf = String.fromCharCode(117,108,116,105,95,97,95,55,57,0);
       let predictionbannerP = String.fromCharCode(100,97,121,115,95,48,95,55,48,0);
       let libmapbufferjni2 = String.fromCharCode(118,95,50,54,95,110,97,116,117,114,97,108,0);
       let hongkongp = 3.0;
       let subbasketballplayer_ = String.fromCharCode(115,95,57,55,95,100,118,98,116,120,116,0);
         libmapbufferjni2 = `${subbasketballplayer_.length}`;
          let reactnativejsL = [String.fromCharCode(117,95,54,49,95,103,114,111,117,112,101,100,0), String.fromCharCode(110,95,55,57,95,109,99,111,109,112,0)];
          let basketballtrophy4 = [304, 591, 533];
         nextf = "1";
         reactnativejsL = [basketballtrophy4.length];
         basketballtrophy4.push(3 + reactnativejsL.length);
         libmapbufferjni2 += "3";
      for (let b = 0; b < 1; b++) {
         nextf = `${predictionbannerP.length % (Math.max(1, 10))}`;
      }
          let q_hashG = new Map([[String.fromCharCode(102,95,53,53,95,103,114,97,98,98,101,114,0),860], [String.fromCharCode(112,114,111,99,101,115,115,111,114,115,95,48,95,55,53,0),67], [String.fromCharCode(121,95,56,51,95,118,97,99,97,110,116,0),165]]);
          let commentM = 4;
         nextf = `${3 - parseInt(`${hongkongp}`)}`;
         q_hashG = new Map([[`${q_hashG.size}`, commentM]]);
         commentM >>= Math.min(Math.abs(q_hashG.size << (Math.min(Math.abs(3), 4))), 2);
      if ((hongkongp + predictionbannerP.length) >= 5.29 && 3 >= (3 + predictionbannerP.length)) {
         hongkongp *= 3 & nextf.length;
      }
         predictionbannerP = `${predictionbannerP.length}`;
         hongkongp += subbasketballplayer_.length;
         hongkongp *= 2;
          let libcxxcomponentsT = 2.0;
          let libfabricjnir = String.fromCharCode(110,95,54,56,95,109,105,110,105,109,105,122,101,0);
          let traminih = String.fromCharCode(110,105,100,108,110,95,109,95,53,56,0);
         predictionbannerP = `${subbasketballplayer_.length * 2}`;
         libcxxcomponentsT *= traminih.length;
         libfabricjnir = `${parseInt(`${libcxxcomponentsT}`)}`;
         traminih += "3";
       let klevin2 = new Map([[String.fromCharCode(119,97,108,107,101,114,95,100,95,53,50,0),String.fromCharCode(111,110,116,97,99,116,115,95,53,95,54,55,0)], [String.fromCharCode(99,111,110,116,105,110,117,101,115,95,122,95,51,54,0),String.fromCharCode(103,101,116,99,95,122,95,55,55,0)]]);
       let tick7 = new Map([[String.fromCharCode(115,95,57,95,115,121,110,99,104,114,111,110,105,122,101,0),731], [String.fromCharCode(122,95,54,52,95,108,111,116,116,105,101,118,105,101,119,0),769]]);
          let configi = 1.0;
         subbasketballplayer_ += `${parseInt(`${hongkongp}`)}`;
         configi += parseFloat(`${parseInt(`${configi}`) / 3}`);
      while (!nextf.includes(`${klevin2.size}`)) {
         nextf += `${klevin2.size / (Math.max(2, 7))}`;
         break;
      }
      for (let c = 0; c < 2; c++) {
         libmapbufferjni2 += `${(String.fromCharCode(109,0) == subbasketballplayer_ ? subbasketballplayer_.length : parseInt(`${hongkongp}`))}`;
      }
      if (libmapbufferjni2.includes(`${nextf.length}`)) {
         libmapbufferjni2 += `${subbasketballplayer_.length}`;
      }
      profileactiveq ^= (String.fromCharCode(101,0) == libmapbufferjni2 ? parseInt(`${hongkongp}`) : libmapbufferjni2.length);
   }
   if ((profileactivea.length * 3) > 2 || (profileactivea.length * 3) > 1) {
       let datal = String.fromCharCode(109,95,57,50,95,111,112,115,0);
       let iconbella = new Map([[String.fromCharCode(112,111,115,116,112,111,110,101,100,95,48,95,50,48,0),705], [String.fromCharCode(117,95,57,55,95,115,117,98,109,101,115,115,97,103,101,0),313]]);
       let mapbufferk = new Map([[String.fromCharCode(100,95,51,54,95,112,114,105,118,0),false ], [String.fromCharCode(105,95,50,49,95,100,101,97,100,0),true ]]);
       let orangedownarrowv = 2.0;
       let loginsuccessg = 4.0;
         mapbufferk = new Map([[`${orangedownarrowv}`, 1 * datal.length]]);
          let awayteamfield4 = 1.0;
         loginsuccessg *= parseInt(`${loginsuccessg}`);
         awayteamfield4 *= parseFloat(`${1}`);
      if ((3 * datal.length) < 2 || (5.94 * loginsuccessg) < 3.64) {
         loginsuccessg += parseInt(`${orangedownarrowv}`) + mapbufferk.size;
      }
      do {
          let main_t7 = false;
          let internet3 = 0.0;
          let valuesY = String.fromCharCode(105,110,102,111,95,111,95,57,0);
          let refreshj = new Map([[String.fromCharCode(99,117,108,115,104,105,102,116,95,110,95,52,55,0),962], [String.fromCharCode(107,101,121,119,111,114,100,115,95,116,95,56,49,0),77]]);
         iconbella = new Map([[`${refreshj.size}`, refreshj.size * 2]]);
         main_t7 = 79.89 <= internet3 && !main_t7;
         internet3 -= parseFloat(`${valuesY.length}`);
         valuesY = `${((main_t7 ? 5 : 2) - parseInt(`${internet3}`))}`;
         if (iconbella.size == 2511117) {
            break;
         }
      } while (((orangedownarrowv + iconbella.size) >= 5.38 && (iconbella.size / 3) >= 1) && (iconbella.size == 2511117));
         datal = `${(datal == String.fromCharCode(116,0) ? iconbella.size : datal.length)}`;
      while ((loginsuccessg - datal.length) == 4.97) {
          let iconrightorangeS = String.fromCharCode(121,95,55,54,95,99,111,109,112,97,116,105,98,105,108,105,116,121,0);
          let animationss = false;
          let backwardj = String.fromCharCode(112,114,97,103,109,97,95,106,95,49,51,0);
          let policyO = String.fromCharCode(109,97,112,95,110,95,49,53,0);
          let placementI = 4.0;
         datal = `${parseInt(`${placementI}`)}`;
         iconrightorangeS = `${((animationss ? 2 : 4) % (Math.max(backwardj.length, 8)))}`;
         animationss = !animationss || policyO.length == 20;
         backwardj += `${policyO.length}`;
         placementI -= 2;
         break;
      }
      if ((2 >> (Math.min(3, Math.abs(mapbufferk.size)))) >= 5 || 2 >= (mapbufferk.size | 2)) {
          let privatechatbg7 = false;
         mapbufferk[`${privatechatbg7}`] = parseInt(`${loginsuccessg}`) ^ 1;
      }
          let homeactivew = String.fromCharCode(121,95,49,48,95,112,105,99,116,121,112,101,0);
          let libloggery = String.fromCharCode(103,95,54,95,109,97,121,0);
         orangedownarrowv += datal.length % (Math.max(3, 1));
         homeactivew = `${homeactivew.length}`;
         libloggery += `${(String.fromCharCode(67,0) == libloggery ? libloggery.length : homeactivew.length)}`;
      profileactivea = `${mapbufferk.size - 3}`;
   }
      dispatch(showControlAction(ShowControlType.Locker));
   for (let y = 0; y < 2; y++) {
      scorepopsoundC /= Math.max(2, videocommon1.length);
   }
       let predictionactivem = [275, 347];
       let sortS = String.fromCharCode(99,97,112,112,101,100,95,121,95,50,54,0);
       let matchinactiveZ = 1.0;
       let connectionP = String.fromCharCode(101,95,53,52,95,107,97,110,110,97,0);
       let phoneshareU = String.fromCharCode(99,111,102,102,105,110,95,118,95,55,57,0);
       let iconnewssharev = String.fromCharCode(97,99,102,105,108,116,101,114,95,113,95,49,49,0);
       let temperatureu = String.fromCharCode(114,95,55,57,95,114,101,116,114,97,110,115,109,105,116,115,0);
          let dialog7 = 0.0;
          let kick_ = 4.0;
          let baseF = new Map([[String.fromCharCode(102,114,97,109,101,105,110,102,111,95,118,95,56,48,0),864], [String.fromCharCode(106,95,52,57,95,97,107,105,100,0),16]]);
         matchinactiveZ /= Math.max(baseF.size, 5);
         dialog7 -= parseInt(`${kick_}`);
         baseF[`${dialog7}`] = parseInt(`${kick_}`) & parseInt(`${dialog7}`);
         temperatureu = "1";
          let viewerr = String.fromCharCode(111,95,55,56,95,116,111,111,108,116,105,112,115,0);
         sortS = `${iconnewssharev.length}`;
         viewerr = "2";
      do {
         predictionactivem.push(2 << (Math.min(1, Math.abs(parseInt(`${matchinactiveZ}`)))));
         if (predictionactivem.length == 4870405) {
            break;
         }
      } while ((3 <= (sortS.length + predictionactivem.length) || (3 + predictionactivem.length) <= 4) && (predictionactivem.length == 4870405));
      do {
          let iconnointernetO = [String.fromCharCode(100,95,55,51,95,110,117,109,101,114,97,108,115,0), String.fromCharCode(99,95,48,95,110,111,116,105,102,105,99,97,116,111,110,115,0)];
          let backwardr = String.fromCharCode(112,117,98,108,105,99,107,101,121,115,95,110,95,57,57,0);
          let appleZ = 0.0;
          let const_8nR = String.fromCharCode(108,95,56,57,95,114,101,112,101,97,116,101,100,108,121,0);
          let sheetI = String.fromCharCode(110,95,54,49,95,110,101,117,116,114,97,108,0);
         predictionactivem.push((String.fromCharCode(116,0) == sheetI ? predictionactivem.length : sheetI.length));
         iconnointernetO.push(iconnointernetO.length);
         backwardr = "1";
         appleZ *= (backwardr == String.fromCharCode(95,0) ? iconnointernetO.length : backwardr.length);
         const_8nR += `${const_8nR.length}`;
         if (1453158 == predictionactivem.length) {
            break;
         }
      } while ((1453158 == predictionactivem.length) && ((predictionactivem.length % 3) < 2));
      for (let o = 0; o < 2; o++) {
          let xvodp = String.fromCharCode(98,117,116,116,101,114,95,105,95,51,57,0);
          let loginsuccesss = String.fromCharCode(117,95,53,56,95,115,119,97,112,0);
          let runtimeschedulerr = 4;
          let iinit_9n1 = 1;
         iconnewssharev += `${iconnewssharev.length >> (Math.min(Math.abs(3), 1))}`;
         xvodp = "3";
         loginsuccesss = `${xvodp.length / 1}`;
         runtimeschedulerr &= 1 - loginsuccesss.length;
         iinit_9n1 += runtimeschedulerr;
      }
      do {
         sortS = `${temperatureu.length << (Math.min(1, sortS.length))}`;
         if (2099406 == sortS.length) {
            break;
         }
      } while ((2099406 == sortS.length) && (!temperatureu.includes(`${sortS.length}`)));
      iconcloseO += `${profileactivea.length}`;

      showToast('请先解除屏幕锁定');
    } else if (!videoPlayerControl.showControl?.type) {

   while (profileactiveq > 4) {
       let loadingspinnerF = String.fromCharCode(112,114,101,100,101,99,101,115,115,111,114,95,57,95,49,54,0);
      do {
          let predictionbannershared5 = String.fromCharCode(105,95,56,49,95,111,110,118,101,114,115,97,116,105,111,110,0);
          let episodeB = 1.0;
          let rootD = 1.0;
         loadingspinnerF = `${parseInt(`${episodeB}`)}`;
         predictionbannershared5 += `${predictionbannershared5.length % 2}`;
         episodeB *= parseFloat(`${parseInt(`${rootD}`) ^ 3}`);
         rootD /= Math.max((parseFloat(`${String.fromCharCode(111,0) == predictionbannershared5 ? predictionbannershared5.length : parseInt(`${rootD}`)}`)), 3);
         if (3975746 == loadingspinnerF.length) {
            break;
         }
      } while ((3975746 == loadingspinnerF.length) && (loadingspinnerF.endsWith(`${loadingspinnerF.length}`)));
      if (loadingspinnerF.length <= 3) {
         loadingspinnerF = `${(String.fromCharCode(106,0) == loadingspinnerF ? loadingspinnerF.length : loadingspinnerF.length)}`;
      }
      while (loadingspinnerF != String.fromCharCode(121,0)) {
         loadingspinnerF += `${loadingspinnerF.length + loadingspinnerF.length}`;
         break;
      }
      scorepopsoundC /= Math.max(4, (iconcloseO == String.fromCharCode(98,0) ? profileactiveq : iconcloseO.length));
      break;
   }
   do {
      profileactivea += `${profileactivea.length}`;
      if (String.fromCharCode(56,119,109,114,98,48,121,0) == profileactivea) {
         break;
      }
   } while ((1 > videocommon1.length) && (String.fromCharCode(56,119,109,114,98,48,121,0) == profileactivea));
      

       let libfbl = String.fromCharCode(109,111,118,101,95,117,95,57,48,0);
       let xvodI = [586, 243, 542];
         xvodI = [libfbl.length];
      do {
         libfbl += `${libfbl.length | 1}`;
         if (String.fromCharCode(109,121,111,53,50,54,110,49,112,111,0) == libfbl) {
            break;
         }
      } while ((String.fromCharCode(109,121,111,53,50,54,110,49,112,111,0) == libfbl) && ((3 >> (Math.min(2, xvodI.length))) >= 4 || (3 >> (Math.min(2, libfbl.length))) >= 1));
         libfbl = `${xvodI.length >> (Math.min(libfbl.length, 5))}`;
         xvodI.push((libfbl == String.fromCharCode(89,0) ? libfbl.length : xvodI.length));
      do {
          let fcdaebecbcbafcdfceaaeccfeacdbl = 5.0;
          let teamH = new Map([[String.fromCharCode(109,95,54,57,95,99,105,114,99,117,108,97,114,0),String.fromCharCode(111,95,49,56,95,116,114,101,97,116,0)], [String.fromCharCode(102,116,118,110,115,95,117,95,52,0),String.fromCharCode(118,95,50,49,95,109,117,110,108,111,99,107,0)], [String.fromCharCode(97,112,112,114,111,118,101,100,95,53,95,52,49,0),String.fromCharCode(112,95,53,50,95,116,121,112,101,115,0)]]);
          let loginsuccess3 = String.fromCharCode(112,95,57,95,100,101,99,111,100,101,102,0);
         libfbl = `${(loginsuccess3 == String.fromCharCode(106,0) ? libfbl.length : loginsuccess3.length)}`;
         fcdaebecbcbafcdfceaaeccfeacdbl += parseFloat(`${1}`);
         teamH = new Map([[`${teamH.size}`, teamH.size]]);
         if (libfbl.length == 1128298) {
            break;
         }
      } while ((libfbl.length > xvodI.length) && (libfbl.length == 1128298));
         libfbl += `${libfbl.length}`;
      profileactivea = `${(saveH == String.fromCharCode(85,0) ? xvodI.length : saveH.length)}`;
   do {
      profileactiveq += (String.fromCharCode(107,0) == videocommon1 ? parseInt(`${scorepopsoundC}`) : videocommon1.length);
      if (4471917 == profileactiveq) {
         break;
      }
   } while (((saveH.length | 5) < 3) && (4471917 == profileactiveq));
      dispatch(showControlAction(ShowControlType.TopBottom));
    } else {

   if ((klevinz.length * profileactivea.length) <= 2 || 3 <= (2 * profileactivea.length)) {
      klevinz = [1 + videocommon1.length];
   }
       let package_ou = [926, 37];
      while ((2 & package_ou.length) < 1 && (package_ou.length & package_ou.length) < 2) {
         package_ou.push(package_ou.length >> (Math.min(Math.abs(3), 5)));
         break;
      }
         package_ou.push(package_ou.length);
          let starm = String.fromCharCode(112,95,55,54,95,100,101,113,117,97,110,116,0);
         package_ou = [starm.length >> (Math.min(Math.abs(3), 3))];
      videocommon1 = `${(saveH == String.fromCharCode(104,0) ? profileactiveq : saveH.length)}`;
      

      profileactiveq /= Math.max(klevinz.length & 2, 1);
   for (let l = 0; l < 3; l++) {
      videocommon1 = `${videocommon1.length << (Math.min(3, saveH.length))}`;
   }
      dispatch(hideControlAction());
   for (let k = 0; k < 1; k++) {
      videocommon1 = `${parseInt(`${sina0}`)}`;
   }
   if (eyeopent != videocommon1) {
      videocommon1 = `${saveH.length ^ klevinz.length}`;
   }

    }
  };
  const onLoadStart = () => {
       let changeC = String.fromCharCode(114,101,112,111,114,116,115,95,48,95,49,55,0);
    let firebase4 = 1.0;
    let pingf = String.fromCharCode(115,95,55,51,95,105,100,101,110,116,105,102,101,114,0);
    let matchdetailbgc = String.fromCharCode(117,95,55,48,95,115,117,98,115,116,114,105,110,103,115,0);
    let suggestion8 = 0.0;
    let shoot7 = 1.0;
    let hometeamfieldW = 3.0;
    let favorite1 = String.fromCharCode(116,95,51,54,95,115,101,108,101,99,116,101,100,0);
    let countryW = [555, 272];
    let register_ijT = new Map([[String.fromCharCode(116,114,105,97,108,95,98,95,53,49,0),468], [String.fromCharCode(100,101,99,101,108,101,114,97,116,105,110,103,95,104,95,54,57,0),476], [String.fromCharCode(97,114,101,97,95,108,95,49,57,0),500]]);
    let runtimeu = [227, 978, 883];
       let delegate_lq = 4.0;
         delegate_lq *= 3 >> (Math.min(Math.abs(parseInt(`${delegate_lq}`)), 2));
         delegate_lq /= Math.max(4, parseInt(`${delegate_lq}`));
       let clockx = false;
      suggestion8 *= 3;
   do {
      favorite1 += `${parseInt(`${firebase4}`) % 1}`;
      if (String.fromCharCode(50,115,48,115,0) == favorite1) {
         break;
      }
   } while ((String.fromCharCode(50,115,48,115,0) == favorite1) && ((favorite1.length / (Math.max(5, parseInt(`${hometeamfieldW}`)))) == 5 || 1.17 == (hometeamfieldW / (Math.max(3.2, 6)))));
   while (changeC != String.fromCharCode(116,0)) {
      favorite1 += `${changeC.length}`;
      break;
   }
   for (let h = 0; h < 1; h++) {
       let libreactnativejniH = String.fromCharCode(110,101,111,110,116,101,115,116,95,100,95,55,48,0);
       let basketballmatchdetailbgB = false;
       let streaming5 = 2;
       let forwardX = 5;
       let footballc = 4;
      while (basketballmatchdetailbgB) {
          let gdtadv0 = 3.0;
          let bangg = String.fromCharCode(117,95,57,95,110,98,105,111,0);
          let dragclose3 = 1;
          let iconfeedbackT = [647, 171];
         forwardX += 1;
         gdtadv0 /= Math.max(parseFloat(`${parseInt(`${gdtadv0}`)}`), 1);
         bangg = `${parseInt(`${gdtadv0}`)}`;
         dragclose3 *= parseInt(`${gdtadv0}`) + bangg.length;
         iconfeedbackT = [dragclose3];
         break;
      }
      if (3 < (1 << (Math.min(4, Math.abs(forwardX))))) {
         basketballmatchdetailbgB = 12 >= footballc;
      }
      while (!basketballmatchdetailbgB) {
          let screenI = String.fromCharCode(116,117,114,98,117,108,101,110,99,101,95,117,95,53,57,0);
          let bdxadsdkX = new Map([[String.fromCharCode(111,112,101,110,95,53,95,53,48,0),true ], [String.fromCharCode(121,95,50,57,95,110,97,108,115,0),true ], [String.fromCharCode(120,95,53,57,95,97,100,100,109,111,100,0),false ]]);
          let iconsharef = new Map([[String.fromCharCode(112,111,119,95,57,95,55,53,0),false ], [String.fromCharCode(109,95,51,53,95,105,110,116,116,121,112,101,115,0),false ], [String.fromCharCode(98,95,55,49,95,109,98,99,109,112,0),true ]]);
          let shootnogoalg = String.fromCharCode(99,97,108,99,117,108,97,116,105,110,103,95,117,95,51,56,0);
          let flyerR = 4.0;
         streaming5 %= Math.max(3, 1);
         screenI = `${parseInt(`${flyerR}`) % (Math.max(shootnogoalg.length, 7))}`;
         bdxadsdkX = new Map([[shootnogoalg, 3]]);
         iconsharef = new Map([[`${iconsharef.size}`, iconsharef.size]]);
         flyerR += 2;
         break;
      }
      for (let s = 0; s < 1; s++) {
          let defaultteamn = String.fromCharCode(97,99,99,101,108,101,114,97,116,101,95,120,95,51,57,0);
          let leftR = String.fromCharCode(100,105,109,101,110,115,105,111,110,95,105,95,53,52,0);
          let tooltipsm = 5;
          let libtanN = String.fromCharCode(109,97,112,112,101,114,95,105,95,52,0);
          let xadsdkH = String.fromCharCode(119,114,97,112,112,101,100,95,111,95,55,0);
         libreactnativejniH = `${leftR.length << (Math.min(Math.abs(1), 1))}`;
         defaultteamn += `${(xadsdkH == String.fromCharCode(56,0) ? tooltipsm : xadsdkH.length)}`;
         leftR = `${xadsdkH.length}`;
         tooltipsm |= libtanN.length;
         libtanN = `${xadsdkH.length - defaultteamn.length}`;
      }
       let a_positiond = String.fromCharCode(111,95,56,49,95,104,111,114,105,122,111,110,116,97,108,0);
       let dropdownE = String.fromCharCode(99,111,102,102,105,110,95,112,95,55,51,0);
      for (let y = 0; y < 2; y++) {
         basketballmatchdetailbgB = !basketballmatchdetailbgB;
      }
      do {
         streaming5 -= 3;
         if (4380677 == streaming5) {
            break;
         }
      } while (((2 + streaming5) < 3 && 2 < (libreactnativejniH.length + 2)) && (4380677 == streaming5));
      for (let t = 0; t < 2; t++) {
         basketballmatchdetailbgB = 51 >= libreactnativejniH.length || 51 >= dropdownE.length;
      }
      for (let h = 0; h < 2; h++) {
         footballc ^= 2 & streaming5;
      }
         a_positiond = `${forwardX ^ 2}`;
         forwardX *= 1 >> (Math.min(4, Math.abs(footballc)));
      do {
          let iconnewssharep = new Map([[String.fromCharCode(97,98,108,95,57,95,55,54,0),String.fromCharCode(99,111,110,110,101,99,116,95,117,95,57,0)], [String.fromCharCode(102,97,117,108,116,95,108,95,52,0),String.fromCharCode(115,108,102,95,120,95,57,0)]]);
         forwardX *= footballc;
         iconnewssharep[`${iconnewssharep.size}`] = iconnewssharep.size - 3;
         if (forwardX == 1526010) {
            break;
         }
      } while ((forwardX == 1526010) && (a_positiond.length <= 4));
      if (3 >= (libreactnativejniH.length << (Math.min(Math.abs(2), 2))) || (libreactnativejniH.length << (Math.min(Math.abs(2), 3))) >= 5) {
          let gesture4 = String.fromCharCode(108,97,117,110,99,104,95,52,95,56,57,0);
          let executorz = false;
         libreactnativejniH += `${1 & libreactnativejniH.length}`;
         gesture4 = `${((executorz ? 3 : 2))}`;
         executorz = gesture4.length > 48 || executorz;
      }
         forwardX /= Math.max(5, 2);
      while (!libreactnativejniH.startsWith(`${basketballmatchdetailbgB}`)) {
          let typingloadingl = 4.0;
          let specz = 2;
          let iconrefresha = true;
          let condensedn = String.fromCharCode(115,117,98,115,101,108,101,99,116,95,117,95,54,53,0);
          let xvod7 = new Map([[String.fromCharCode(119,95,51,50,95,115,117,98,116,114,97,99,116,105,110,103,0),false ], [String.fromCharCode(104,105,101,114,95,51,95,50,50,0),false ], [String.fromCharCode(112,114,101,102,101,116,99,104,101,114,95,115,95,52,57,0),false ]]);
         basketballmatchdetailbgB = 51 > footballc || 51 > dropdownE.length;
         typingloadingl += 1;
         specz += xvod7.size;
         iconrefresha = !iconrefresha;
         condensedn = `${parseInt(`${typingloadingl}`) ^ 1}`;
         xvod7[`${iconrefresha}`] = specz;
         break;
      }
      matchdetailbgc += `${streaming5}`;
   }
   do {
       let tooltipsk = String.fromCharCode(109,108,115,100,95,54,95,55,48,0);
       let soundc = 1;
       let kuaishouc = new Map([[String.fromCharCode(100,95,56,50,95,101,99,104,111,0),false ], [String.fromCharCode(106,95,51,95,97,98,111,118,101,0),true ]]);
         soundc %= Math.max(soundc % (Math.max(4, kuaishouc.size)), 5);
      if (tooltipsk.includes(`${kuaishouc.size}`)) {
         kuaishouc[`${tooltipsk}`] = 1 >> (Math.min(5, Math.abs(kuaishouc.size)));
      }
          let casting9 = 3.0;
          let stylesF = 2.0;
          let containerD = true;
         soundc /= Math.max(3, kuaishouc.size % 1);
         casting9 -= 1 + parseInt(`${stylesF}`);
         stylesF *= 2 << (Math.min(Math.abs(parseInt(`${stylesF}`)), 3));
         containerD = 3.56 == casting9;
          let libfolly1 = 0.0;
          let applicationd = false;
          let yellowtoredZ = 0.0;
         soundc ^= 2;
         libfolly1 += (parseFloat(`${(applicationd ? 5 : 4) & parseInt(`${libfolly1}`)}`));
         applicationd = libfolly1 >= 1.9;
         yellowtoredZ -= ((applicationd ? 5 : 1) >> (Math.min(Math.abs(parseInt(`${libfolly1}`)), 3)));
      for (let l = 0; l < 2; l++) {
         tooltipsk = `${kuaishouc.size}`;
      }
      if ((tooltipsk.length | soundc) == 2 || 5 == (tooltipsk.length | 2)) {
          let with_5K = true;
          let filed = String.fromCharCode(112,107,99,115,95,112,95,54,50,0);
          let r_titlef = 2;
         tooltipsk += `${r_titlef}`;
         with_5K = !with_5K;
         filed = "3";
         r_titlef /= Math.max(1, 3);
      }
          let rewindg = String.fromCharCode(105,110,116,101,114,114,117,112,116,105,111,110,95,53,95,53,0);
          let topic1 = String.fromCharCode(98,117,109,112,95,52,95,52,56,0);
         soundc ^= soundc;
         rewindg = `${1 / (Math.max(8, rewindg.length))}`;
         topic1 = `${topic1.length - rewindg.length}`;
         tooltipsk += `${tooltipsk.length / (Math.max(3, 5))}`;
          let inouttargetredo = 1.0;
          let q_locke = [81, 738, 349];
         soundc |= kuaishouc.size;
         inouttargetredo /= Math.max(1 * parseInt(`${inouttargetredo}`), 2);
         q_locke = [parseInt(`${inouttargetredo}`) * 2];
      matchdetailbgc += `${soundc}`;
      if (matchdetailbgc == String.fromCharCode(95,119,48,104,115,0)) {
         break;
      }
   } while ((pingf == matchdetailbgc) && (matchdetailbgc == String.fromCharCode(95,119,48,104,115,0)));

    

      pingf += `${changeC.length % (Math.max(9, favorite1.length))}`;
       let contextS = 3;
       let emojir = 0;
       let roundF = String.fromCharCode(99,114,111,112,95,108,95,51,50,0);
      if (contextS == emojir) {
          let libglog0 = String.fromCharCode(115,97,116,95,106,95,53,55,0);
          let configureE = String.fromCharCode(100,98,108,113,117,111,116,101,95,109,95,49,53,0);
          let blackd = new Map([[String.fromCharCode(111,95,57,56,95,115,115,108,0),String.fromCharCode(121,95,50,55,95,115,105,110,101,0)], [String.fromCharCode(106,101,114,114,111,114,95,122,95,51,57,0),String.fromCharCode(99,95,53,52,95,108,105,99,101,110,115,101,115,0)], [String.fromCharCode(99,97,99,104,101,115,105,122,101,95,49,95,56,54,0),String.fromCharCode(104,95,57,51,95,100,101,118,101,108,111,112,109,101,110,116,0)]]);
          let iconnewchatw = String.fromCharCode(112,95,50,53,95,102,111,114,101,104,101,97,100,0);
         emojir -= contextS;
         libglog0 = `${blackd.size}`;
         configureE += `${(String.fromCharCode(100,0) == configureE ? blackd.size : configureE.length)}`;
         iconnewchatw = `${configureE.length * libglog0.length}`;
      }
          let libflippert = 3;
          let interstitialB = new Map([[String.fromCharCode(116,119,111,108,111,111,112,95,119,95,52,0),583], [String.fromCharCode(106,95,52,53,95,98,105,116,118,101,99,115,0),803]]);
         roundF = "2";
         libflippert += libflippert >> (Math.min(Math.abs(1), 4));
         interstitialB[`${libflippert}`] = 1 % (Math.max(9, interstitialB.size));
      for (let d = 0; d < 2; d++) {
         roundF = `${emojir - 2}`;
      }
         roundF += `${contextS}`;
      do {
         contextS ^= 1;
         if (2610193 == contextS) {
            break;
         }
      } while ((roundF.length < 2) && (2610193 == contextS));
      if (roundF.length >= emojir) {
         emojir -= contextS * 2;
      }
      while (roundF.includes(`${emojir}`)) {
         roundF = `${roundF.length}`;
         break;
      }
      for (let x = 0; x < 1; x++) {
         emojir ^= contextS;
      }
      for (let s = 0; s < 2; s++) {
         roundF += `${emojir}`;
      }
      suggestion8 -= 3;
      pingf += `${matchdetailbgc.length - 1}`;
   if ((hometeamfieldW / (Math.max(1.14, 6))) >= 5.80) {
      hometeamfieldW -= parseFloat(`${favorite1.length}`);
   }
   if ((parseInt(`${firebase4}`) + pingf.length) >= 1 && (pingf.length + parseInt(`${firebase4}`)) >= 1) {
      pingf += `${parseInt(`${suggestion8}`) / 3}`;
   }
    

   for (let e = 0; e < 1; e++) {
       let basketballmatchdetailbgE = 5;
       let commonn = [9, 918, 276];
          let whistleorangef = new Map([[String.fromCharCode(117,95,53,57,95,97,105,110,116,105,110,103,0),true ], [String.fromCharCode(97,103,97,105,110,95,120,95,56,54,0),false ], [String.fromCharCode(115,117,103,103,101,115,116,105,111,110,115,95,54,95,57,49,0),false ]]);
          let kuaishoud = 2.0;
          let hiadM = false;
         basketballmatchdetailbgE >>= Math.min(1, Math.abs(whistleorangef.size));
         whistleorangef = new Map([[`${kuaishoud}`, 3 - parseInt(`${kuaishoud}`)]]);
         hiadM = kuaishoud >= 3.58;
          let hiadA = 1.0;
         commonn = [basketballmatchdetailbgE];
         hiadA *= parseFloat(`${parseInt(`${hiadA}`) ^ 1}`);
         basketballmatchdetailbgE /= Math.max(4, basketballmatchdetailbgE);
      if (basketballmatchdetailbgE > commonn.length) {
         basketballmatchdetailbgE &= 2 ^ commonn.length;
      }
         basketballmatchdetailbgE |= 1 | basketballmatchdetailbgE;
         basketballmatchdetailbgE >>= Math.min(2, commonn.length);
      shoot7 += parseFloat(`${parseInt(`${firebase4}`)}`);
   }
       let icontransferclubL = String.fromCharCode(121,95,50,49,95,117,110,116,114,117,115,116,101,100,0);
      do {
         icontransferclubL = `${icontransferclubL.length - icontransferclubL.length}`;
         if (String.fromCharCode(95,54,101,0) == icontransferclubL) {
            break;
         }
      } while ((icontransferclubL.length <= 3 || icontransferclubL != String.fromCharCode(119,0)) && (String.fromCharCode(95,54,101,0) == icontransferclubL));
      do {
         icontransferclubL = `${icontransferclubL.length}`;
         if (icontransferclubL == String.fromCharCode(100,54,117,0)) {
            break;
         }
      } while ((5 >= icontransferclubL.length) && (icontransferclubL == String.fromCharCode(100,54,117,0)));
      while (icontransferclubL.endsWith(`${icontransferclubL.length}`)) {
         icontransferclubL += `${icontransferclubL.length * 2}`;
         break;
      }
      firebase4 /= Math.max(4, parseFloat(`${countryW.length}`));
   do {
      firebase4 /= Math.max(4, (parseFloat(`${pingf == String.fromCharCode(53,0) ? parseInt(`${firebase4}`) : pingf.length}`)));
      if (3896826.0 == firebase4) {
         break;
      }
   } while ((4.64 >= (firebase4 - parseFloat(`${pingf.length}`))) && (3896826.0 == firebase4));
      favorite1 = `${countryW.length}`;
   for (let s = 0; s < 2; s++) {
       let flipperM = 1.0;
      while (2.69 >= (flipperM / (Math.max(5.88, 5))) || 4.7 >= (flipperM / (Math.max(5.88, 9)))) {
         flipperM *= parseFloat(`${1}`);
         break;
      }
       let c_hashy = 1.0;
      for (let c = 0; c < 1; c++) {
          let libreactf = 5;
          let yellowc = new Map([[String.fromCharCode(105,95,56,55,95,107,101,121,115,116,114,101,97,109,0),483], [String.fromCharCode(112,95,56,57,95,112,97,99,101,114,0),971]]);
         flipperM += parseFloat(`${parseInt(`${flipperM}`)}`);
         libreactf *= yellowc.size;
         yellowc = new Map([[`${yellowc.size}`, yellowc.size >> (Math.min(2, Math.abs(libreactf)))]]);
      }
      firebase4 /= Math.max(4, parseFloat(`${3 ^ parseInt(`${shoot7}`)}`));
   }
    setIsLoading(true);
   while (3.39 >= (parseFloat(`${favorite1.length}`) / (Math.max(7, hometeamfieldW))) && 2 >= (parseInt(`${hometeamfieldW}`) / (Math.max(favorite1.length, 9)))) {
       let iconviewerf = 1;
       let defaultplayerimg3 = String.fromCharCode(116,111,109,99,114,121,112,116,95,97,95,55,50,0);
      for (let m = 0; m < 1; m++) {
         defaultplayerimg3 += `${defaultplayerimg3.length | iconviewerf}`;
      }
      if (4 >= defaultplayerimg3.length) {
         defaultplayerimg3 = "2";
      }
      if (5 <= (iconviewerf + defaultplayerimg3.length) && (iconviewerf + defaultplayerimg3.length) <= 5) {
         iconviewerf &= defaultplayerimg3.length;
      }
      for (let k = 0; k < 3; k++) {
          let yellowvideolivec = String.fromCharCode(108,115,104,105,102,116,95,54,95,56,54,0);
          let favoriteX = new Map([[String.fromCharCode(100,95,52,52,95,114,101,99,105,112,105,101,110,116,0),937], [String.fromCharCode(108,95,53,56,95,105,110,105,116,104,0),290], [String.fromCharCode(107,95,54,95,97,118,103,115,97,100,0),747]]);
          let reactnativeultimatelistviewD = false;
          let desci = String.fromCharCode(107,95,51,49,95,97,97,99,100,101,99,0);
         iconviewerf ^= (yellowvideolivec.length >> (Math.min(4, Math.abs((reactnativeultimatelistviewD ? 4 : 1)))));
         yellowvideolivec += `${favoriteX.size & desci.length}`;
         favoriteX = new Map([[`${favoriteX.size}`, (String.fromCharCode(97,0) == desci ? desci.length : favoriteX.size)]]);
         reactnativeultimatelistviewD = favoriteX.size <= 78;
      }
      while ((iconviewerf ^ 4) > 3 || 4 > (iconviewerf ^ defaultplayerimg3.length)) {
         iconviewerf ^= iconviewerf;
         break;
      }
      for (let j = 0; j < 2; j++) {
          let gdtadvr = 3.0;
         iconviewerf |= iconviewerf;
         gdtadvr -= parseFloat(`${1}`);
      }
      favorite1 += `${parseInt(`${hometeamfieldW}`)}`;
      break;
   }
      matchdetailbgc += `${1 & changeC.length}`;
   while (4 > (pingf.length | 4) && (4 - pingf.length) > 2) {
      shoot7 /= Math.max(1, parseFloat(`${2}`));
      break;
   }
   if (4 > changeC.length) {
      changeC = `${countryW.length}`;
   }
      firebase4 *= (parseFloat(`${changeC == String.fromCharCode(48,0) ? changeC.length : register_ijT.size}`));

    if (typeof props.onLoadStart === 'function') {

       let viewerZ = String.fromCharCode(115,112,97,119,110,97,98,108,101,95,57,95,49,56,0);
      while (3 > viewerZ.length) {
          let basketballmatchdetailbgz = 2.0;
          let yellowvideoliveW = 5.0;
          let questiconB = String.fromCharCode(104,101,97,100,115,101,116,95,107,95,49,50,0);
          let fillj = [991, 730, 801];
          let themeO = true;
         viewerZ += `${2 >> (Math.min(5, viewerZ.length))}`;
         basketballmatchdetailbgz += parseInt(`${yellowvideoliveW}`) & questiconB.length;
         yellowvideoliveW /= Math.max(1 - parseInt(`${basketballmatchdetailbgz}`), 5);
         questiconB += `${3 - questiconB.length}`;
         fillj = [3 ^ parseInt(`${basketballmatchdetailbgz}`)];
         themeO = fillj.includes(yellowvideoliveW);
         break;
      }
      do {
         viewerZ += `${viewerZ.length >> (Math.min(Math.abs(2), 1))}`;
         if (viewerZ.length == 3715052) {
            break;
         }
      } while ((viewerZ.length == 3715052) && (viewerZ != viewerZ));
      do {
          let baselinei = String.fromCharCode(117,115,97,98,108,101,95,99,95,56,55,0);
          let backiconmaskp = new Map([[String.fromCharCode(114,101,112,114,101,115,101,110,116,97,116,105,118,101,95,122,95,53,0),String.fromCharCode(113,95,56,55,95,115,101,116,116,105,109,101,111,117,116,0)], [String.fromCharCode(121,111,103,97,95,120,95,49,56,0),String.fromCharCode(97,95,57,54,95,118,112,109,99,0)]]);
          let yingg = String.fromCharCode(119,95,49,51,95,120,111,102,102,115,101,116,0);
          let predictionactiveM = false;
          let qnewsg = 3;
         viewerZ = `${yingg.length / 3}`;
         baselinei += `${qnewsg}`;
         backiconmaskp = new Map([[`${predictionactiveM}`, 1]]);
         yingg += `${((predictionactiveM ? 2 : 2) / (Math.max(backiconmaskp.size, 3)))}`;
         qnewsg *= 1;
         if (889039 == viewerZ.length) {
            break;
         }
      } while ((viewerZ.endsWith(`${viewerZ.length}`)) && (889039 == viewerZ.length));
      favorite1 += `${runtimeu.length}`;
      shoot7 /= Math.max(parseFloat(`${pingf.length}`), 5);
      hometeamfieldW *= parseFloat(`${matchdetailbgc.length}`);
   for (let z = 0; z < 3; z++) {
       let homeactivem = new Map([[String.fromCharCode(115,98,119,97,105,116,95,104,95,55,53,0),true ], [String.fromCharCode(102,108,97,99,100,115,112,95,57,95,54,49,0),true ]]);
       let libfabricjniw = [639, 818, 289];
       let referrerF = String.fromCharCode(119,101,108,108,95,108,95,57,50,0);
      while (1 < (libfabricjniw.length * referrerF.length) && (referrerF.length * 1) < 3) {
         libfabricjniw.push(referrerF.length ^ homeactivem.size);
         break;
      }
      while (homeactivem[`${libfabricjniw.length}`] != null) {
         libfabricjniw.push(referrerF.length);
         break;
      }
      if (referrerF.length == 3) {
          let filter9 = String.fromCharCode(108,95,50,51,95,114,111,117,110,100,101,100,110,101,115,115,0);
          let register_znR = String.fromCharCode(98,95,50,95,115,117,98,112,97,99,107,101,116,115,0);
         libfabricjniw = [register_znR.length];
         filter9 = `${filter9.length / 2}`;
         register_znR += `${filter9.length}`;
      }
         libfabricjniw = [libfabricjniw.length];
      do {
         libfabricjniw = [referrerF.length << (Math.min(4, libfabricjniw.length))];
         if (305719 == libfabricjniw.length) {
            break;
         }
      } while (((libfabricjniw.length - homeactivem.size) == 1 || (homeactivem.size - 1) == 1) && (305719 == libfabricjniw.length));
         referrerF = `${homeactivem.size}`;
      for (let c = 0; c < 3; c++) {
         libfabricjniw = [1];
      }
      for (let u = 0; u < 2; u++) {
          let userW = 0;
          let h_animation0 = String.fromCharCode(98,110,98,105,110,95,107,95,55,53,0);
          let privacy6 = String.fromCharCode(116,114,117,101,115,112,101,101,99,104,95,115,95,56,54,0);
         homeactivem[`${referrerF}`] = homeactivem.size;
         userW -= (privacy6 == String.fromCharCode(97,0) ? h_animation0.length : privacy6.length);
         h_animation0 += `${privacy6.length >> (Math.min(Math.abs(1), 3))}`;
      }
         homeactivem = new Map([[`${homeactivem.size}`, homeactivem.size << (Math.min(libfabricjniw.length, 3))]]);
      favorite1 += `${referrerF.length + 2}`;
   }
      matchdetailbgc = `${parseInt(`${shoot7}`)}`;
      props.onLoadStart(...arguments);
       let carousel9 = 5;
       let predictionbannerY = 5.0;
       let templateprocessorV = String.fromCharCode(117,95,54,57,95,99,98,117,102,0);
          let action4 = String.fromCharCode(99,114,111,115,115,112,111,115,116,95,54,95,56,54,0);
         predictionbannerY -= parseFloat(`${action4.length % (Math.max(1, carousel9))}`);
         templateprocessorV += "2";
         templateprocessorV = `${carousel9 % 2}`;
         predictionbannerY -= (parseFloat(`${String.fromCharCode(89,0) == templateprocessorV ? parseInt(`${predictionbannerY}`) : templateprocessorV.length}`));
          let gifgoal3 = String.fromCharCode(108,101,118,105,110,115,111,110,95,109,95,57,53,0);
          let settingr = String.fromCharCode(116,114,97,110,115,102,111,114,109,101,100,95,121,95,50,48,0);
          let liveshareC = true;
         templateprocessorV = `${gifgoal3.length}`;
         gifgoal3 = "1";
         settingr += `${settingr.length}`;
         predictionbannerY /= Math.max(4, parseFloat(`${parseInt(`${predictionbannerY}`)}`));
      for (let v = 0; v < 3; v++) {
          let types2 = String.fromCharCode(107,95,53,95,115,105,109,112,108,101,116,105,109,101,111,117,116,0);
          let switch_fT = 3.0;
          let fullscreenming = [String.fromCharCode(116,95,51,51,95,115,105,103,116,101,114,109,0), String.fromCharCode(105,112,113,102,95,110,95,56,54,0)];
          let rootm = 3;
          let iconrefreshi = 0.0;
         predictionbannerY /= Math.max(parseFloat(`${1 << (Math.min(4, Math.abs(carousel9)))}`), 3);
         types2 = `${types2.length % (Math.max(2, rootm))}`;
         switch_fT += parseFloat(`${parseInt(`${iconrefreshi}`)}`);
         fullscreenming = [rootm];
         iconrefreshi /= Math.max(parseFloat(`${parseInt(`${iconrefreshi}`) - 1}`), 2);
      }
      if (!templateprocessorV.endsWith(`${predictionbannerY}`)) {
         predictionbannerY /= Math.max(parseFloat(`${templateprocessorV.length}`), 4);
      }
      for (let g = 0; g < 2; g++) {
         carousel9 |= 3 - carousel9;
      }
      firebase4 += parseFloat(`${matchdetailbgc.length}`);
      favorite1 += "3";
   do {
      runtimeu.push(matchdetailbgc.length);
      if (4657563 == runtimeu.length) {
         break;
      }
   } while ((4657563 == runtimeu.length) && (2 < (runtimeu.length | 3)));
   for (let g = 0; g < 2; g++) {
       let statisticsinactive8 = [919, 747, 39];
       let countryl = String.fromCharCode(100,95,54,53,95,101,110,99,111,100,101,100,102,114,97,109,101,0);
      while ((countryl.length / 3) >= 5) {
          let lefty = 0;
         countryl = `${statisticsinactive8.length}`;
         lefty ^= lefty;
         break;
      }
         countryl = `${2 ^ countryl.length}`;
      if (!countryl.includes(`${statisticsinactive8.length}`)) {
         countryl = `${statisticsinactive8.length}`;
      }
         statisticsinactive8 = [countryl.length + statisticsinactive8.length];
         statisticsinactive8.push((String.fromCharCode(79,0) == countryl ? statisticsinactive8.length : countryl.length));
       let libjsir = String.fromCharCode(118,95,57,52,95,97,100,106,117,115,116,101,100,0);
       let libjsif = String.fromCharCode(109,97,99,114,111,115,95,103,95,57,55,0);
      changeC += `${(pingf == String.fromCharCode(88,0) ? statisticsinactive8.length : pingf.length)}`;
   }
   for (let f = 0; f < 1; f++) {
       let zhubo4 = 0.0;
       let librrce = String.fromCharCode(114,97,116,101,95,99,95,51,54,0);
      if (zhubo4 > 2.31) {
         zhubo4 -= parseFloat(`${2}`);
      }
          let componentregistryQ = false;
          let graphV = 0.0;
         zhubo4 *= parseFloat(`${librrce.length}`);
         componentregistryQ = 12.18 >= graphV;
         graphV -= parseInt(`${graphV}`) >> (Math.min(1, Math.abs(parseInt(`${graphV}`))));
         librrce += `${1 ^ parseInt(`${zhubo4}`)}`;
         zhubo4 /= Math.max(4, (parseFloat(`${String.fromCharCode(87,0) == librrce ? parseInt(`${zhubo4}`) : librrce.length}`)));
         librrce = `${parseInt(`${zhubo4}`) % (Math.max(librrce.length, 10))}`;
         zhubo4 += (parseFloat(`${librrce == String.fromCharCode(53,0) ? librrce.length : parseInt(`${zhubo4}`)}`));
      register_ijT[`${zhubo4}`] = 2;
   }

    }
  };
  const onLoad = () => {
       let reducerA = String.fromCharCode(101,95,55,54,95,108,117,116,114,103,98,0);
    let homeactiveA = String.fromCharCode(97,95,49,54,95,104,101,97,100,101,114,115,0);
    let topon1 = [String.fromCharCode(97,95,57,56,95,105,110,116,101,114,97,99,116,111,114,0), String.fromCharCode(102,99,109,117,108,95,109,95,53,56,0), String.fromCharCode(110,95,51,95,100,98,111,111,108,104,117,102,102,0)];
    let entry5 = String.fromCharCode(114,95,52,54,95,98,111,114,100,101,114,101,100,0);
    let iconarrowrightorange9 = true;
    let ying3 = 0.0;
    let splashp = String.fromCharCode(114,101,103,105,115,116,101,114,102,100,115,95,111,95,57,48,0);
    let large4 = 0;
    let backiconmaskF = String.fromCharCode(111,95,52,55,95,102,105,108,116,101,114,98,97,110,107,0);
    let optionsH = String.fromCharCode(109,105,108,105,111,110,115,95,108,95,52,49,0);
    let mbsplash1 = String.fromCharCode(98,117,116,116,111,110,95,106,95,53,0);
    let telegramZ = [31, 84, 107];
    let logoE = new Map([[String.fromCharCode(108,95,55,56,95,108,105,98,106,112,101,103,116,117,114,98,111,0),605], [String.fromCharCode(101,95,56,52,95,109,105,110,105,109,97,0),929], [String.fromCharCode(118,95,53,52,95,109,117,108,116,105,112,108,121,0),935]]);
    let otherv = true;
    let mbnativeb = 1;
       let trophyS = String.fromCharCode(119,95,55,53,95,117,108,112,102,101,99,0);
      for (let g = 0; g < 1; g++) {
         trophyS += `${trophyS.length}`;
      }
         trophyS += `${(String.fromCharCode(108,0) == trophyS ? trophyS.length : trophyS.length)}`;
         trophyS = `${trophyS.length}`;
      ying3 += homeactiveA.length / 1;
       let videojst = 2;
      while ((videojst % (Math.max(videojst, 5))) < 3) {
         videojst *= 2 / (Math.max(1, videojst));
         break;
      }
         videojst <<= Math.min(Math.abs(1 | videojst), 5);
      while (3 > (1 + videojst) || 1 > (videojst + videojst)) {
         videojst *= videojst;
         break;
      }
      reducerA += `${2 * parseInt(`${ying3}`)}`;
   for (let e = 0; e < 1; e++) {
       let weatherO = 3.0;
       let guidem = String.fromCharCode(98,105,108,105,110,95,113,95,53,57,0);
       let nativeex7 = true;
         guidem += `${(3 % (Math.max(4, (nativeex7 ? 2 : 5))))}`;
      for (let u = 0; u < 1; u++) {
          let libyoga4 = 3.0;
          let benefit8 = new Map([[String.fromCharCode(99,95,56,48,95,114,111,117,116,101,114,0),367], [String.fromCharCode(116,95,53,95,99,100,97,116,97,0),933]]);
          let iconclosewhitewithbgK = 2.0;
         weatherO *= 1;
         libyoga4 *= 3;
         benefit8[`${iconclosewhitewithbgK}`] = 2 | parseInt(`${iconclosewhitewithbgK}`);
      }
      do {
          let descy = 5.0;
          let pause5 = 0.0;
          let libfabricjni4 = String.fromCharCode(112,97,114,116,105,99,105,112,97,116,105,111,110,95,115,95,50,50,0);
          let othermatchdetailbgi = String.fromCharCode(100,95,50,48,95,114,101,99,104,117,110,107,0);
         nativeex7 = 10.69 <= descy || 10.69 <= weatherO;
         descy -= parseFloat(`${1 + othermatchdetailbgi.length}`);
         pause5 -= (parseFloat(`${String.fromCharCode(105,0) == libfabricjni4 ? libfabricjni4.length : parseInt(`${pause5}`)}`));
         othermatchdetailbgi += `${(othermatchdetailbgi == String.fromCharCode(66,0) ? othermatchdetailbgi.length : libfabricjni4.length)}`;
         if (nativeex7 ? !nativeex7 : nativeex7) {
            break;
         }
      } while ((nativeex7 ? !nativeex7 : nativeex7) && (!nativeex7));
       let iconcurrentmatchR = 5;
       let icontransferclubV = 2;
      while (1.77 < (icontransferclubV / (Math.max(8, weatherO))) && 4 < (icontransferclubV / 5)) {
         weatherO -= 1;
         break;
      }
      while (weatherO <= 2.91) {
          let leftK = 4.0;
          let internetJ = true;
          let iconplayR = false;
          let runtimeI = true;
         iconcurrentmatchR += ((internetJ ? 4 : 4) / (Math.max((nativeex7 ? 2 : 4), 1)));
         leftK += ((runtimeI ? 5 : 4) & 3);
         internetJ = (!iconplayR ? runtimeI : iconplayR);
         break;
      }
      do {
         nativeex7 = guidem.length <= iconcurrentmatchR;
         if (nativeex7 ? !nativeex7 : nativeex7) {
            break;
         }
      } while ((iconcurrentmatchR == 4) && (nativeex7 ? !nativeex7 : nativeex7));
          let delegate_7q = false;
          let iconbackwhiteT = String.fromCharCode(99,95,49,55,95,112,114,101,97,109,98,117,108,97,0);
          let servicep = 3;
         weatherO += ((nativeex7 ? 2 : 1) ^ (delegate_7q ? 4 : 3));
         delegate_7q = iconbackwhiteT.endsWith(`${servicep}`);
         iconbackwhiteT += `${iconbackwhiteT.length}`;
         servicep >>= Math.min(5, Math.abs(1 << (Math.min(1, Math.abs(servicep)))));
      while (guidem.length <= 5) {
         guidem += "2";
         break;
      }
      topon1 = [topon1.length / (Math.max(homeactiveA.length, 3))];
   }
       let rank6 = String.fromCharCode(116,117,114,110,95,117,95,50,56,0);
      if (rank6.startsWith(rank6)) {
         rank6 += `${(rank6 == String.fromCharCode(70,0) ? rank6.length : rank6.length)}`;
      }
      for (let o = 0; o < 1; o++) {
         rank6 += "2";
      }
      if (rank6 != rank6) {
          let vertical7 = String.fromCharCode(117,95,57,50,95,97,115,99,111,110,102,0);
          let icondownimga = String.fromCharCode(116,95,55,49,95,102,105,100,99,116,0);
         rank6 += "3";
         vertical7 = `${icondownimga.length >> (Math.min(4, vertical7.length))}`;
         icondownimga = `${vertical7.length}`;
      }
      optionsH += `${optionsH.length}`;
   if (4 <= (5 | splashp.length) && (4.82 - ying3) <= 3.35) {
      splashp += `${(reducerA.length << (Math.min(4, Math.abs((iconarrowrightorange9 ? 3 : 3)))))}`;
   }

    

   if (5 > (splashp.length % (Math.max(8, telegramZ.length)))) {
      telegramZ.push(entry5.length + parseInt(`${ying3}`));
   }
      topon1 = [(String.fromCharCode(51,0) == backiconmaskF ? mbsplash1.length : backiconmaskF.length)];
   for (let k = 0; k < 2; k++) {
      large4 /= Math.max(2, 3);
   }
   for (let z = 0; z < 3; z++) {
      splashp += `${(String.fromCharCode(77,0) == backiconmaskF ? backiconmaskF.length : parseInt(`${ying3}`))}`;
   }
   for (let v = 0; v < 3; v++) {
       let goallogo5 = 2;
      for (let q = 0; q < 2; q++) {
         goallogo5 *= goallogo5 ^ goallogo5;
      }
       let middlebrightnessL = new Map([[String.fromCharCode(120,95,49,51,95,98,97,116,99,104,0),200], [String.fromCharCode(105,95,49,49,95,97,97,99,101,110,99,0),444], [String.fromCharCode(115,95,52,57,95,101,110,116,114,111,112,121,109,118,0),11]]);
      if (Array.from(middlebrightnessL.values()).includes(goallogo5)) {
         middlebrightnessL = new Map([[`${middlebrightnessL.size}`, 2 | middlebrightnessL.size]]);
      }
      topon1.push(3 | backiconmaskF.length);
   }
    setIsLoading(false);
   do {
       let iconviewer5 = 0;
      for (let r = 0; r < 2; r++) {
         iconviewer5 -= iconviewer5;
      }
          let networkT = String.fromCharCode(115,105,103,110,105,102,105,99,97,110,116,95,118,95,48,0);
          let default_v7U = new Map([[String.fromCharCode(99,104,111,105,99,101,115,95,55,95,53,48,0),725], [String.fromCharCode(110,111,110,110,117,108,108,115,101,114,105,97,108,105,122,97,116,105,111,110,95,121,95,50,55,0),232], [String.fromCharCode(98,105,100,105,114,101,99,116,105,111,110,97,108,95,100,95,54,57,0),457]]);
          let iconpipshrink1 = 2.0;
         iconviewer5 >>= Math.min(2, Math.abs((networkT == String.fromCharCode(110,0) ? default_v7U.size : networkT.length)));
         default_v7U[`${iconpipshrink1}`] = parseInt(`${iconpipshrink1}`);
      while (2 == (iconviewer5 ^ 1)) {
         iconviewer5 -= iconviewer5 - iconviewer5;
         break;
      }
      topon1.push(iconviewer5);
      if (3834478 == topon1.length) {
         break;
      }
   } while ((3834478 == topon1.length) && (homeactiveA.length < 3));
       let predictionlossA = true;
      if (!predictionlossA) {
         predictionlossA = !predictionlossA;
      }
      do {
         predictionlossA = (predictionlossA ? predictionlossA : predictionlossA);
         if (predictionlossA ? !predictionlossA : predictionlossA) {
            break;
         }
      } while ((predictionlossA ? !predictionlossA : predictionlossA) && (predictionlossA));
         predictionlossA = predictionlossA && predictionlossA;
      large4 += reducerA.length;
   while (1 <= (large4 + 2)) {
       let clubX = true;
       let changeM = 1.0;
       let predictionbanner4 = 3;
       let backiconG = 5.0;
       let libhermesK = String.fromCharCode(105,118,97,114,95,106,95,50,48,0);
         backiconG *= 3 - parseInt(`${backiconG}`);
         backiconG /= Math.max((parseInt(`${changeM}`) ^ (clubX ? 3 : 1)), 5);
         backiconG *= 2 << (Math.min(2, libhermesK.length));
       let gradleS = String.fromCharCode(99,95,55,55,95,103,114,111,117,112,99,97,108,108,0);
       let fastforward6 = String.fromCharCode(115,117,112,112,108,101,109,101,110,116,97,114,121,95,52,95,51,49,0);
         predictionbanner4 &= fastforward6.length | 3;
      while (1 <= (predictionbanner4 % (Math.max(4, 1))) && !clubX) {
          let iconnewssharel = 1.0;
          let iconuser3 = 4.0;
          let orangeuparrowk = String.fromCharCode(115,113,108,105,116,101,99,104,97,110,103,101,115,101,116,95,111,95,55,53,0);
          let profileframe2 = String.fromCharCode(115,101,114,118,105,99,101,115,95,55,95,52,49,0);
         predictionbanner4 >>= Math.min(2, Math.abs(fastforward6.length >> (Math.min(5, Math.abs(parseInt(`${backiconG}`))))));
         iconnewssharel /= Math.max(parseInt(`${iconuser3}`) / 3, 4);
         iconuser3 /= Math.max(2, 1 >> (Math.min(5, profileframe2.length)));
         orangeuparrowk = `${parseInt(`${iconuser3}`)}`;
         profileframe2 += `${parseInt(`${iconuser3}`)}`;
         break;
      }
       let smallbrightnessh = String.fromCharCode(116,105,110,116,101,114,108,97,99,101,95,104,95,49,56,0);
      for (let r = 0; r < 1; r++) {
          let penaltyK = 5.0;
          let libcxxcomponentsI = String.fromCharCode(122,95,55,53,95,99,117,109,101,0);
         clubX = 50 >= predictionbanner4 && String.fromCharCode(66,0) == libcxxcomponentsI;
         penaltyK -= parseInt(`${penaltyK}`) & 3;
         libcxxcomponentsI = "2";
      }
      if (gradleS.length <= 4) {
         smallbrightnessh = `${1 / (Math.max(4, parseInt(`${backiconG}`)))}`;
      }
       let mimou = 0.0;
          let miniV = 3.0;
          let default_6y = String.fromCharCode(116,111,111,108,98,97,114,95,106,95,50,55,0);
          let sharedN = [212, 251];
         libhermesK += `${fastforward6.length >> (Math.min(Math.abs(3), 3))}`;
         miniV /= Math.max(parseFloat(`${default_6y.length}`), 4);
         default_6y = `${(String.fromCharCode(122,0) == default_6y ? default_6y.length : parseInt(`${miniV}`))}`;
         sharedN.push((String.fromCharCode(87,0) == default_6y ? parseInt(`${miniV}`) : default_6y.length));
      do {
         backiconG -= gradleS.length << (Math.min(Math.abs(1), 3));
         if (4212248.0 == backiconG) {
            break;
         }
      } while ((4212248.0 == backiconG) && (libhermesK.length >= 1));
         mimou -= (parseFloat(`${(clubX ? 1 : 5) | parseInt(`${backiconG}`)}`));
      for (let x = 0; x < 1; x++) {
          let sell8 = String.fromCharCode(104,105,115,116,111,114,121,95,102,95,57,51,0);
          let filer = String.fromCharCode(100,95,54,52,95,97,110,116,105,99,111,108,108,97,112,115,101,0);
          let cornerkickJ = true;
          let mbjscommonZ = new Map([[String.fromCharCode(122,95,53,49,95,116,111,110,101,115,0),String.fromCharCode(104,95,54,49,95,101,100,116,115,0)], [String.fromCharCode(120,95,57,50,95,97,108,108,111,99,97,116,111,114,0),String.fromCharCode(108,100,105,115,116,95,113,95,51,53,0)]]);
         fastforward6 = `${1 * libhermesK.length}`;
         sell8 = `${sell8.length}`;
         filer = `${1 << (Math.min(5, filer.length))}`;
         cornerkickJ = sell8.length < 23;
         mbjscommonZ[sell8] = (String.fromCharCode(111,0) == sell8 ? sell8.length : filer.length);
      }
      for (let t = 0; t < 3; t++) {
         smallbrightnessh += `${predictionbanner4 / (Math.max(1, 1))}`;
      }
      large4 %= Math.max(3, telegramZ.length * mbsplash1.length);
      break;
   }
      reducerA = `${(reducerA == String.fromCharCode(107,0) ? parseInt(`${ying3}`) : reducerA.length)}`;
       let strings0 = String.fromCharCode(117,95,57,51,95,112,115,100,115,112,0);
       let whitebell2 = String.fromCharCode(109,95,54,51,95,98,105,110,107,97,117,100,105,111,0);
       let runtimeg = [548, 161];
         whitebell2 += `${1 << (Math.min(2, runtimeg.length))}`;
         runtimeg.push((String.fromCharCode(109,0) == whitebell2 ? runtimeg.length : whitebell2.length));
         whitebell2 += `${2 % (Math.max(5, strings0.length))}`;
         strings0 += `${runtimeg.length ^ whitebell2.length}`;
          let klevind = String.fromCharCode(100,108,105,115,116,95,99,95,57,50,0);
          let yellowtored7 = String.fromCharCode(109,99,111,114,101,95,55,95,56,53,0);
         strings0 += `${(String.fromCharCode(121,0) == whitebell2 ? whitebell2.length : klevind.length)}`;
         klevind = "1";
         yellowtored7 = `${yellowtored7.length % (Math.max(yellowtored7.length, 8))}`;
          let hometeamfieldL = String.fromCharCode(113,95,54,95,115,116,114,102,117,110,99,0);
          let configR = String.fromCharCode(104,95,49,48,95,115,117,112,101,114,110,111,100,101,115,0);
          let iconqq8 = new Map([[String.fromCharCode(116,117,112,108,101,115,95,56,95,54,54,0),754], [String.fromCharCode(110,101,105,103,104,98,111,114,105,110,103,95,102,95,52,51,0),409]]);
         whitebell2 = `${whitebell2.length * runtimeg.length}`;
         hometeamfieldL += `${iconqq8.size}`;
         configR += `${configR.length / 3}`;
         iconqq8 = new Map([[`${iconqq8.size}`, configR.length | 1]]);
      do {
          let muted1 = new Map([[String.fromCharCode(117,95,49,55,95,99,111,114,114,101,99,116,105,110,103,0),false ], [String.fromCharCode(112,117,116,110,117,109,112,97,115,115,101,115,95,100,95,55,50,0),true ], [String.fromCharCode(100,101,116,97,105,108,115,95,54,95,53,51,0),false ]]);
          let cornerG = String.fromCharCode(105,95,52,95,110,111,100,101,108,97,121,0);
          let iconmegaphonee = new Map([[String.fromCharCode(99,111,110,110,101,99,116,105,111,110,115,95,119,95,51,52,0),833], [String.fromCharCode(97,108,97,110,103,117,97,103,101,95,113,95,53,48,0),973], [String.fromCharCode(111,110,116,114,111,108,95,111,95,57,53,0),838]]);
          let iconadslinkP = new Map([[String.fromCharCode(112,114,101,101,110,99,111,100,101,95,99,95,50,48,0),false ], [String.fromCharCode(119,95,56,56,95,109,112,101,103,100,97,116,97,0),true ], [String.fromCharCode(114,101,109,111,118,101,95,50,95,53,54,0),false ]]);
          let final_1gR = 4.0;
         strings0 = `${3 * iconadslinkP.size}`;
         muted1 = new Map([[`${iconmegaphonee.size}`, 1 | parseInt(`${final_1gR}`)]]);
         cornerG += `${cornerG.length << (Math.min(3, Math.abs(muted1.size)))}`;
         iconmegaphonee[`${cornerG}`] = cornerG.length & iconmegaphonee.size;
         iconadslinkP[`${final_1gR}`] = muted1.size;
         if (strings0 == String.fromCharCode(99,106,57,53,54,105,100,103,101,97,0)) {
            break;
         }
      } while ((strings0.endsWith(`${whitebell2.length}`)) && (strings0 == String.fromCharCode(99,106,57,53,54,105,100,103,101,97,0)));
      while (strings0.length > whitebell2.length) {
          let reactnativejss = [294, 878];
          let iconscheduleF = 2.0;
          let iconqqG = String.fromCharCode(115,105,110,101,115,95,122,95,52,52,0);
          let selected8 = [966, 563];
         strings0 = `${runtimeg.length | iconqqG.length}`;
         reactnativejss.push(parseInt(`${iconscheduleF}`));
         iconscheduleF *= reactnativejss.length;
         iconqqG += `${2 / (Math.max(9, parseInt(`${iconscheduleF}`)))}`;
         selected8.push(3 ^ reactnativejss.length);
         break;
      }
          let buildV = String.fromCharCode(116,101,110,115,105,111,110,95,106,95,50,48,0);
          let matches9 = String.fromCharCode(97,95,51,49,95,112,117,114,101,0);
         whitebell2 += "1";
         buildV = `${matches9.length >> (Math.min(Math.abs(2), 3))}`;
         matches9 = `${matches9.length}`;
      optionsH += `${3 ^ telegramZ.length}`;

    setIsError(false);
      mbsplash1 += `${(entry5 == String.fromCharCode(109,0) ? entry5.length : topon1.length)}`;
   for (let y = 0; y < 3; y++) {
      mbsplash1 = `${entry5.length | 1}`;
   }
       let bridge8 = new Map([[String.fromCharCode(103,97,109,117,116,95,112,95,54,51,0),false ], [String.fromCharCode(105,95,52,51,95,97,108,115,97,115,121,109,98,111,108,116,97,98,108,101,0),true ]]);
      while (bridge8.size == 5) {
          let rncoreP = String.fromCharCode(112,117,115,104,98,97,99,107,95,112,95,56,57,0);
         bridge8 = new Map([[`${bridge8.size}`, bridge8.size]]);
         rncoreP += `${rncoreP.length << (Math.min(rncoreP.length, 5))}`;
         break;
      }
      for (let i = 0; i < 2; i++) {
         bridge8[`${bridge8.size}`] = bridge8.size;
      }
          let projectL = String.fromCharCode(109,111,110,107,101,121,95,51,95,52,57,0);
         bridge8[projectL] = projectL.length;
      reducerA = `${parseInt(`${ying3}`)}`;
   do {
      optionsH = `${1 + parseInt(`${ying3}`)}`;
      if (optionsH.length == 2558465) {
         break;
      }
   } while ((homeactiveA.length <= 3) && (optionsH.length == 2558465));
   for (let x = 0; x < 1; x++) {
      reducerA += `${homeactiveA.length}`;
   }

    if (typeof props.onLoad === 'function') {

      mbsplash1 = "3";
       let twitterL = String.fromCharCode(101,95,52,51,95,114,111,117,110,100,101,100,110,101,115,115,0);
      while (twitterL.startsWith(twitterL)) {
          let iconpipshrinkB = String.fromCharCode(111,95,52,95,97,105,110,116,0);
         twitterL += `${iconpipshrinkB.length & twitterL.length}`;
         break;
      }
         twitterL += `${3 + twitterL.length}`;
         twitterL = `${twitterL.length + 3}`;
      entry5 = `${(twitterL == String.fromCharCode(97,0) ? twitterL.length : homeactiveA.length)}`;
   do {
       let iconscheduleJ = [String.fromCharCode(97,95,53,49,95,110,109,118,106,111,105,110,116,115,97,100,99,111,115,116,0), String.fromCharCode(111,95,51,56,95,108,111,103,0), String.fromCharCode(97,115,121,109,95,106,95,51,0)];
          let modules_ = String.fromCharCode(105,110,116,101,114,110,95,114,95,49,50,0);
          let iconcloseN = 5.0;
         iconscheduleJ = [iconscheduleJ.length << (Math.min(Math.abs(3), 5))];
         modules_ += "2";
         iconcloseN += parseFloat(`${1 % (Math.max(3, modules_.length))}`);
      if (3 == (1 / (Math.max(8, iconscheduleJ.length)))) {
         iconscheduleJ.push(iconscheduleJ.length * iconscheduleJ.length);
      }
         iconscheduleJ.push(1 & iconscheduleJ.length);
      mbsplash1 = `${topon1.length / 2}`;
      if (47812 == mbsplash1.length) {
         break;
      }
   } while ((mbsplash1.startsWith(homeactiveA)) && (47812 == mbsplash1.length));
   do {
      homeactiveA = `${reducerA.length}`;
      if (1347502 == homeactiveA.length) {
         break;
      }
   } while ((1347502 == homeactiveA.length) && (5 <= (homeactiveA.length & 3) && 1 <= (homeactiveA.length / (Math.max(3, 5)))));
   while (3 == (reducerA.length + large4)) {
      reducerA += `${topon1.length & entry5.length}`;
      break;
   }
      props.onLoad(...arguments);
      homeactiveA = `${logoE.size / (Math.max(9, telegramZ.length))}`;
   if (homeactiveA == entry5) {
      entry5 = `${large4}`;
   }
      entry5 = "1";
       let hometeamfieldQ = [String.fromCharCode(122,95,51,50,95,103,101,116,115,116,114,0), String.fromCharCode(109,97,107,101,95,55,95,55,48,0)];
       let acopy_nI = String.fromCharCode(118,97,108,105,100,97,116,97,98,108,101,95,116,95,52,54,0);
       let mutedc = String.fromCharCode(97,95,57,54,95,97,100,100,114,0);
      while (4 == acopy_nI.length || 4 == mutedc.length) {
         mutedc += "1";
         break;
      }
         acopy_nI = `${mutedc.length / (Math.max(1, 6))}`;
         acopy_nI += `${acopy_nI.length}`;
         acopy_nI = `${(mutedc == String.fromCharCode(81,0) ? acopy_nI.length : mutedc.length)}`;
         acopy_nI = `${2 << (Math.min(4, mutedc.length))}`;
         acopy_nI += `${mutedc.length}`;
          let live6 = String.fromCharCode(102,108,111,97,116,115,104,111,114,116,95,97,95,50,54,0);
          let fullscreenmax4 = 2;
         mutedc += `${mutedc.length + 2}`;
         live6 = `${fullscreenmax4 * live6.length}`;
         fullscreenmax4 >>= Math.min(4, Math.abs(3));
       let buffer6 = 2.0;
          let expiredA = String.fromCharCode(109,95,53,57,95,110,97,109,101,115,112,97,99,101,115,0);
         acopy_nI = `${hometeamfieldQ.length}`;
         expiredA += `${3 % (Math.max(5, expiredA.length))}`;
      backiconmaskF = "3";
      otherv = topon1.length >= 97;

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
       let iconpipshrinkl = 4.0;
    let roott = new Map([[String.fromCharCode(115,116,114,105,99,116,95,97,95,57,0),885], [String.fromCharCode(97,105,110,116,105,110,103,95,116,95,55,54,0),752]]);
    let basketballmatchdetailbgu = new Map([[String.fromCharCode(99,117,114,108,121,95,115,95,53,55,0),false ], [String.fromCharCode(117,110,100,101,114,115,99,111,114,101,95,108,95,57,54,0),false ], [String.fromCharCode(105,110,116,101,114,115,112,101,114,115,101,95,98,95,50,56,0),false ]]);
    let middlep = 4.0;
    let storeD = new Map([[String.fromCharCode(99,111,110,116,114,97,105,110,116,115,95,117,95,51,52,0),String.fromCharCode(115,116,114,111,107,101,95,106,95,53,50,0)], [String.fromCharCode(112,95,56,49,95,101,110,116,114,121,0),String.fromCharCode(105,95,49,52,95,97,114,101,116,104,101,114,101,0)]]);
    let gpayu = [317, 859, 86];
    let eventG = 1.0;
    let weiboa = 3.0;
    let tempnodatau = 3.0;
    let redcirclebgh = new Map([[String.fromCharCode(114,95,56,48,95,117,110,102,114,101,101,122,101,0),888], [String.fromCharCode(98,95,49,48,95,98,105,112,114,101,100,0),345]]);
    let shareblackc = 0.0;
    let countryT = 3.0;
    let infoQ = String.fromCharCode(97,110,115,119,101,114,95,104,95,57,56,0);
    let p_hasht = String.fromCharCode(115,111,108,118,101,100,95,103,95,54,51,0);
   for (let e = 0; e < 2; e++) {
       let zhuboH = new Map([[String.fromCharCode(100,101,101,112,108,105,110,107,95,121,95,52,49,0),String.fromCharCode(117,110,109,111,118,101,100,95,101,95,52,56,0)], [String.fromCharCode(109,95,51,95,115,119,105,102,116,121,0),String.fromCharCode(110,95,57,50,95,118,97,114,105,97,110,99,101,115,0)], [String.fromCharCode(103,117,97,114,97,110,116,101,101,95,116,95,57,51,0),String.fromCharCode(104,100,110,111,100,101,95,51,95,57,0)]]);
       let dicelogoo = String.fromCharCode(107,95,56,54,95,115,101,103,109,101,110,116,0);
      while (4 > zhuboH.size) {
         zhuboH[`${dicelogoo}`] = dicelogoo.length;
         break;
      }
      for (let t = 0; t < 3; t++) {
         dicelogoo = `${dicelogoo.length * zhuboH.size}`;
      }
         dicelogoo = `${dicelogoo.length}`;
         dicelogoo = "2";
      do {
         zhuboH[`${dicelogoo}`] = dicelogoo.length << (Math.min(3, Math.abs(zhuboH.size)));
         if (zhuboH.size == 4636118) {
            break;
         }
      } while ((zhuboH.size == 4636118) && (dicelogoo.startsWith(`${zhuboH.size}`)));
          let debugy = 1.0;
          let appss = 2;
         dicelogoo = `${zhuboH.size << (Math.min(dicelogoo.length, 1))}`;
         debugy /= Math.max(4, parseFloat(`${appss >> (Math.min(3, Math.abs(1)))}`));
         appss %= Math.max(4, 2);
      shareblackc += parseFloat(`${parseInt(`${middlep}`) / 2}`);
   }
      middlep -= parseInt(`${countryT}`) + 2;
      storeD[`${tempnodatau}`] = redcirclebgh.size;

    if (!isLoading) {

      tempnodatau += roott.size - basketballmatchdetailbgu.size;
      eventG *= parseFloat(`${parseInt(`${eventG}`)}`);
   while ((4 - weiboa) < 4.34) {
      eventG += parseFloat(`${2 | parseInt(`${tempnodatau}`)}`);
      break;
   }
      return null;
       let circlev = 4.0;
       let smallorangemanJ = 3.0;
       let penaltyshootnogoal4 = String.fromCharCode(106,95,52,95,97,110,99,104,111,114,115,0);
       let condensedD = [String.fromCharCode(102,95,50,49,95,110,116,102,115,0), String.fromCharCode(100,105,115,109,105,115,115,95,102,95,56,57,0), String.fromCharCode(111,95,52,50,95,106,115,116,121,112,101,0)];
       let modelsA = [String.fromCharCode(108,95,50,49,95,112,114,111,99,101,100,117,114,101,115,0), String.fromCharCode(106,95,52,95,114,101,118,101,114,116,0), String.fromCharCode(97,99,99,114,117,101,100,95,57,95,57,53,0)];
          let zhengpiang = 5.0;
          let cnewarchdefaultsO = new Map([[String.fromCharCode(105,95,53,49,95,115,116,97,116,105,115,116,105,99,115,0),false ], [String.fromCharCode(109,111,100,117,108,101,115,95,97,95,50,51,0),false ], [String.fromCharCode(108,105,103,104,116,101,110,105,110,103,95,99,95,56,56,0),false ]]);
          let push_ = String.fromCharCode(114,97,98,105,110,95,122,95,55,50,0);
         penaltyshootnogoal4 = `${penaltyshootnogoal4.length}`;
         zhengpiang *= cnewarchdefaultsO.size;
         cnewarchdefaultsO = new Map([[push_, parseInt(`${zhengpiang}`)]]);
         push_ = `${3 ^ push_.length}`;
       let eventsplashJ = String.fromCharCode(116,114,105,97,110,103,117,108,97,114,95,57,95,49,51,0);
       let mailN = String.fromCharCode(115,105,110,101,95,116,95,49,56,0);
      if (circlev >= smallorangemanJ) {
          let tickedo = 3.0;
          let friendsX = [462, 480];
          let root0 = 0.0;
          let trashK = new Map([[String.fromCharCode(99,104,97,110,95,101,95,55,54,0),true ], [String.fromCharCode(116,114,117,110,99,97,116,105,111,110,95,105,95,52,0),true ], [String.fromCharCode(98,95,55,55,95,99,97,99,104,101,100,0),false ]]);
          let countdownA = new Map([[String.fromCharCode(105,95,50,52,95,99,114,111,119,100,105,110,0),String.fromCharCode(110,98,105,111,95,120,95,50,0)], [String.fromCharCode(114,95,55,52,95,99,97,105,112,0),String.fromCharCode(98,117,102,102,101,114,101,118,101,110,116,95,117,95,54,51,0)], [String.fromCharCode(116,111,111,108,99,104,97,105,110,95,48,95,52,49,0),String.fromCharCode(121,95,54,51,95,115,105,103,110,97,116,117,114,101,0)]]);
         smallorangemanJ /= Math.max(3, friendsX.length * parseInt(`${tickedo}`));
         tickedo *= countdownA.size & parseInt(`${root0}`);
         friendsX = [parseInt(`${root0}`)];
         trashK = new Map([[`${trashK.size}`, parseInt(`${root0}`) / (Math.max(3, 5))]]);
         countdownA = new Map([[`${countdownA.size}`, parseInt(`${root0}`)]]);
      }
      if (penaltyshootnogoal4.length > eventsplashJ.length) {
         eventsplashJ += `${penaltyshootnogoal4.length % 2}`;
      }
      while (3 <= (parseInt(`${circlev}`) * mailN.length)) {
         mailN += `${2 % (Math.max(6, modelsA.length))}`;
         break;
      }
      while (!eventsplashJ.startsWith(`${circlev}`)) {
         circlev /= Math.max(parseFloat(`${2}`), 3);
         break;
      }
          let showD = 5.0;
          let debug2 = new Map([[String.fromCharCode(102,95,50,48,95,112,97,114,116,105,99,105,112,97,116,105,110,103,0),425], [String.fromCharCode(119,95,48,95,101,110,99,114,121,112,116,105,110,103,0),111]]);
          let agreementm = 3;
         penaltyshootnogoal4 += `${parseInt(`${showD}`) ^ 2}`;
         showD += debug2.size;
         debug2[`${agreementm}`] = agreementm;
      do {
         eventsplashJ += "2";
         if (eventsplashJ == String.fromCharCode(54,121,51,50,103,55,0)) {
            break;
         }
      } while ((eventsplashJ == String.fromCharCode(54,121,51,50,103,55,0)) && (eventsplashJ.length >= 4));
      iconpipshrinkl *= parseFloat(`${1 ^ storeD.size}`);
   for (let e = 0; e < 2; e++) {
      weiboa *= parseFloat(`${parseInt(`${eventG}`) & 1}`);
   }
   if (2 < (basketballmatchdetailbgu.size / 2) || 3 < (2 - basketballmatchdetailbgu.size)) {
      basketballmatchdetailbgu[`${countryT}`] = 3 | parseInt(`${countryT}`);
   }

    }
    return (
      <View style={VideoPlayerstyles.loader.container}>
        <Animated.Image
          source={require('./images/icons/jingdongCross.png')}
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
   if (5.45 == shareblackc) {
       let combinedp = 0;
       let profileframee = [387, 455];
       let assetso = [436, 696];
      if (4 >= (4 << (Math.min(3, Math.abs(combinedp))))) {
         profileframee = [profileframee.length ^ 2];
      }
         combinedp >>= Math.min(5, Math.abs(1 - profileframee.length));
          let smallorangemanC = 0;
          let whitebell7 = String.fromCharCode(104,95,56,57,95,115,115,114,99,115,0);
         assetso = [combinedp];
         smallorangemanC *= 1;
         whitebell7 = `${smallorangemanC << (Math.min(Math.abs(1), 2))}`;
      if (3 == (profileframee.length * 3) || (assetso.length * profileframee.length) == 3) {
         profileframee.push(combinedp >> (Math.min(profileframee.length, 2)));
      }
         combinedp += 1 | assetso.length;
         combinedp /= Math.max(2, 1 / (Math.max(4, assetso.length)));
       let referrerI = new Map([[String.fromCharCode(98,95,52,49,95,117,110,99,114,111,112,112,101,100,0),265], [String.fromCharCode(105,110,118,111,107,101,114,95,98,95,49,55,0),961]]);
       let stepO = String.fromCharCode(109,117,114,109,117,114,95,51,95,52,56,0);
       let historyP = String.fromCharCode(104,95,56,53,95,102,111,117,114,99,99,0);
          let nativemoduleX = new Map([[String.fromCharCode(119,104,97,116,115,95,119,95,55,50,0),false ], [String.fromCharCode(118,95,52,51,0),false ]]);
          let libsentryI = 2.0;
         assetso = [parseInt(`${libsentryI}`)];
         nativemoduleX = new Map([[`${nativemoduleX.size}`, nativemoduleX.size]]);
         libsentryI *= parseFloat(`${nativemoduleX.size % 2}`);
      shareblackc -= parseFloat(`${parseInt(`${countryT}`) + 2}`);
   }
   if (!Array.from(roott.values()).includes(middlep)) {
      roott = new Map([[`${tempnodatau}`, parseInt(`${middlep}`) << (Math.min(4, Math.abs(2)))]]);
   }
      storeD = new Map([[`${gpayu.length}`, parseInt(`${iconpipshrinkl}`) >> (Math.min(1, Math.abs(2)))]]);

  };

  const onEnd = () => {
       let fastZ = String.fromCharCode(99,95,55,48,95,100,101,108,115,117,112,101,114,0);
    let emojiR = String.fromCharCode(122,95,52,56,95,107,105,99,107,101,100,0);
    let predictiondefaultm = String.fromCharCode(97,95,53,53,95,99,111,109,112,108,101,109,101,110,116,105,110,103,0);
    let whitebellD = String.fromCharCode(105,110,116,101,114,112,95,113,95,52,52,0);
    let predictionloss8 = String.fromCharCode(104,105,103,104,112,111,114,116,95,109,95,52,48,0);
    let reactnavigations = 1.0;
    let sheetk = 5.0;
    let iconplay6 = String.fromCharCode(98,97,114,114,101,116,116,95,103,95,53,57,0);
      fastZ = "3";
      whitebellD = `${parseInt(`${reactnavigations}`)}`;
      whitebellD = `${parseInt(`${sheetk}`) - 1}`;
       let largesoundR = [85, 955];
      while (4 <= (largesoundR.length & 5) && (largesoundR.length & largesoundR.length) <= 5) {
         largesoundR.push(largesoundR.length * largesoundR.length);
         break;
      }
      if (5 <= (2 ^ largesoundR.length) && 2 <= (2 ^ largesoundR.length)) {
          let over1 = 1.0;
          let inouttargetyellowY = true;
         largesoundR = [parseInt(`${over1}`)];
         over1 /= Math.max(((inouttargetyellowY ? 2 : 2)), 5);
      }
      for (let k = 0; k < 2; k++) {
          let iconarrowrightu = [String.fromCharCode(99,111,110,99,97,116,101,110,97,116,105,111,110,95,110,95,57,0), String.fromCharCode(104,105,103,104,108,105,103,104,116,97,98,108,101,95,103,95,50,53,0), String.fromCharCode(115,95,53,52,95,105,111,115,116,114,101,97,109,0)];
          let subinO = String.fromCharCode(109,97,120,95,99,95,56,0);
          let areaG = 3.0;
          let othermatchdetailbg8 = 5;
         largesoundR = [largesoundR.length];
         iconarrowrightu = [2 >> (Math.min(5, iconarrowrightu.length))];
         subinO = `${parseInt(`${areaG}`) ^ othermatchdetailbg8}`;
         areaG += parseFloat(`${parseInt(`${areaG}`) / 1}`);
         othermatchdetailbg8 |= 3 | othermatchdetailbg8;
      }
      reactnavigations /= Math.max(3, parseFloat(`${fastZ.length - emojiR.length}`));
   do {
      emojiR += `${fastZ.length}`;
      if (String.fromCharCode(102,114,48,53,0) == emojiR) {
         break;
      }
   } while ((1 >= fastZ.length) && (String.fromCharCode(102,114,48,53,0) == emojiR));

    console.log('onend');
   do {
      predictiondefaultm = `${3 >> (Math.min(3, fastZ.length))}`;
      if (predictiondefaultm.length == 186340) {
         break;
      }
   } while ((predictiondefaultm.endsWith(`${whitebellD.length}`)) && (predictiondefaultm.length == 186340));
      predictiondefaultm += `${predictiondefaultm.length}`;
      emojiR = `${parseInt(`${reactnavigations}`) % (Math.max(predictiondefaultm.length, 2))}`;
       let floaterq = String.fromCharCode(118,116,97,115,107,113,117,101,117,101,95,49,95,49,50,0);
         floaterq += `${floaterq.length}`;
      while (floaterq == String.fromCharCode(114,0)) {
         floaterq += `${1 | floaterq.length}`;
         break;
      }
      if (!floaterq.endsWith(`${floaterq.length}`)) {
          let incident9 = String.fromCharCode(110,97,116,117,114,97,108,95,55,95,51,49,0);
          let stringR = new Map([[String.fromCharCode(115,101,97,114,99,104,97,98,108,101,95,105,95,50,57,0),String.fromCharCode(116,97,112,101,115,95,53,95,56,49,0)], [String.fromCharCode(100,99,97,100,101,99,95,102,95,51,50,0),String.fromCharCode(118,105,100,101,111,115,116,114,101,97,109,95,121,95,55,54,0)], [String.fromCharCode(100,101,108,97,121,95,116,95,57,54,0),String.fromCharCode(101,99,111,109,112,114,101,115,115,111,114,95,56,95,56,57,0)]]);
          let rewardvideoX = new Map([[String.fromCharCode(115,97,102,101,115,116,97,99,107,95,122,95,53,55,0),true ], [String.fromCharCode(121,95,51,51,95,109,97,116,105,99,0),false ], [String.fromCharCode(113,95,55,56,95,117,110,119,114,97,112,0),false ]]);
          let episodel = new Map([[String.fromCharCode(116,105,102,102,95,97,95,56,53,0),468], [String.fromCharCode(97,100,100,105,116,105,111,110,97,108,108,121,95,120,95,56,52,0),999]]);
         floaterq = `${rewardvideoX.size - 2}`;
         incident9 = `${episodel.size}`;
         stringR = new Map([[`${stringR.size}`, incident9.length]]);
         rewardvideoX[`${incident9}`] = (String.fromCharCode(120,0) == incident9 ? stringR.size : incident9.length);
         episodel[incident9] = incident9.length;
      }
      emojiR += `${floaterq.length >> (Math.min(Math.abs(1), 3))}`;
      fastZ += `${2 - fastZ.length}`;

    setIsLoading(false);
       let j_playerj = [60, 880];
      while ((j_playerj.length + j_playerj.length) < 5 && 1 < (j_playerj.length + 5)) {
         j_playerj = [j_playerj.length];
         break;
      }
          let libzeusc = 5;
          let arrowrightwithtailW = new Map([[String.fromCharCode(112,95,52,54,95,110,109,118,106,111,105,110,116,115,97,100,99,111,115,116,0),744], [String.fromCharCode(111,115,116,114,105,110,103,115,116,114,101,97,109,95,53,95,56,0),901]]);
          let regeng1 = [String.fromCharCode(102,95,49,52,95,117,112,116,105,109,101,0), String.fromCharCode(120,99,108,105,95,120,95,49,52,0), String.fromCharCode(119,105,107,105,95,52,95,56,55,0)];
         j_playerj.push(arrowrightwithtailW.size);
         libzeusc <<= Math.min(4, Math.abs(2));
         arrowrightwithtailW = new Map([[`${regeng1.length}`, libzeusc]]);
         regeng1.push(regeng1.length);
      if ((1 / (Math.max(7, j_playerj.length))) < 4 || (j_playerj.length / 1) < 3) {
         j_playerj = [j_playerj.length / (Math.max(1, 6))];
      }
      reactnavigations *= parseFloat(`${whitebellD.length | 1}`);
       let static_zX = false;
       let iconcalendarY = true;
          let distm = 2.0;
          let phone6 = String.fromCharCode(109,95,52,56,95,109,97,120,100,98,115,0);
         iconcalendarY = !iconcalendarY;
         distm *= parseFloat(`${2}`);
         phone6 += `${parseInt(`${distm}`)}`;
      do {
          let questV = [919, 386];
          let librrcY = [968, 196, 678];
         static_zX = questV.includes(librrcY[0]);
         if (static_zX ? !static_zX : static_zX) {
            break;
         }
      } while ((!static_zX) && (static_zX ? !static_zX : static_zX));
         static_zX = !iconcalendarY;
          let iconwatchT = 4.0;
         iconcalendarY = static_zX;
         iconwatchT -= parseFloat(`${3}`);
       let iconadslinkG = [17, 725, 838];
       let basketballplayerplaceholderJ = [String.fromCharCode(105,110,115,116,97,110,116,105,97,116,101,95,107,95,55,49,0), String.fromCharCode(102,95,51,55,0), String.fromCharCode(106,95,52,95,101,109,109,115,0)];
      do {
          let username4 = [938, 11];
          let casting0 = 1.0;
          let line8 = String.fromCharCode(101,95,51,52,95,102,97,114,101,110,100,0);
          let componentW = true;
         basketballplayerplaceholderJ.push(((componentW ? 5 : 2) | line8.length));
         username4.push(1);
         casting0 -= 3 * username4.length;
         line8 = `${username4.length << (Math.min(5, Math.abs(parseInt(`${casting0}`))))}`;
         componentW = username4.includes(casting0);
         if (2373126 == basketballplayerplaceholderJ.length) {
            break;
         }
      } while ((static_zX) && (2373126 == basketballplayerplaceholderJ.length));
      fastZ = `${((static_zX ? 5 : 4) * parseInt(`${reactnavigations}`))}`;
   for (let v = 0; v < 2; v++) {
       let shootyesgoal4 = String.fromCharCode(104,109,97,99,108,105,115,116,95,53,95,55,55,0);
       let controlsE = 2.0;
       let basketball5 = String.fromCharCode(120,95,49,48,95,101,108,101,109,101,110,116,119,105,115,101,0);
       let penaltyshootv = 2.0;
       let libswresampleW = 0.0;
      do {
         basketball5 += "3";
         if (2454795 == basketball5.length) {
            break;
         }
      } while ((3.98 == (penaltyshootv - 4.93) && (4.93 - penaltyshootv) == 5.36) && (2454795 == basketball5.length));
         controlsE /= Math.max(5, parseFloat(`${parseInt(`${controlsE}`)}`));
       let minivodC = new Map([[String.fromCharCode(114,105,110,103,105,110,103,95,116,95,55,56,0),91], [String.fromCharCode(99,104,105,108,100,95,118,95,50,56,0),667], [String.fromCharCode(117,95,56,51,95,114,101,116,114,97,110,115,109,105,116,0),400]]);
       let iconarrowlefta = new Map([[String.fromCharCode(118,95,56,56,95,98,111,119,108,105,110,103,0),String.fromCharCode(109,95,56,51,95,118,112,100,97,116,97,0)], [String.fromCharCode(119,95,56,49,95,103,102,109,117,108,0),String.fromCharCode(115,119,102,104,97,115,104,95,103,95,57,51,0)], [String.fromCharCode(116,102,120,100,95,53,95,53,57,0),String.fromCharCode(103,95,54,49,95,98,108,111,99,107,100,0)]]);
          let downarrow4 = 1.0;
          let penaltyshootnogoal5 = 5.0;
         libswresampleW /= Math.max(3, parseFloat(`${3}`));
         downarrow4 *= parseInt(`${penaltyshootnogoal5}`);
         penaltyshootnogoal5 -= parseFloat(`${parseInt(`${penaltyshootnogoal5}`) + 1}`);
         libswresampleW /= Math.max(parseFloat(`${parseInt(`${libswresampleW}`) >> (Math.min(3, Math.abs(parseInt(`${penaltyshootv}`))))}`), 3);
          let shielddonev = new Map([[String.fromCharCode(103,114,97,110,117,108,97,114,95,55,95,55,53,0),false ], [String.fromCharCode(97,99,107,110,111,119,108,101,100,103,101,95,104,95,57,48,0),false ], [String.fromCharCode(99,95,51,53,95,112,101,97,99,104,0),true ]]);
          let eactu = String.fromCharCode(108,97,116,116,105,99,101,95,119,95,51,51,0);
         libswresampleW *= parseFloat(`${basketball5.length}`);
         shielddonev = new Map([[`${shielddonev.size}`, shielddonev.size]]);
         eactu = `${shielddonev.size - eactu.length}`;
      if (libswresampleW == parseFloat(`${minivodC.size}`)) {
          let dacccfaabfbcbadeebddcabacdffdbW = [String.fromCharCode(104,95,49,95,114,116,99,119,101,98,0), String.fromCharCode(99,117,115,116,111,109,95,117,95,51,51,0)];
          let favoriteb = 4.0;
          let verticalX = [398, 868, 89];
          let scorepopsoundA = 0.0;
         minivodC[`${dacccfaabfbcbadeebddcabacdffdbW.length}`] = iconarrowlefta.size;
         dacccfaabfbcbadeebddcabacdffdbW.push(2);
         favoriteb -= parseInt(`${favoriteb}`) % (Math.max(parseInt(`${scorepopsoundA}`), 5));
         verticalX = [1];
         scorepopsoundA /= Math.max(parseFloat(`${verticalX.length % 3}`), 2);
      }
      do {
         libswresampleW -= parseFloat(`${parseInt(`${penaltyshootv}`)}`);
         if (libswresampleW == 232916.0) {
            break;
         }
      } while ((libswresampleW == 232916.0) && ((5.57 + libswresampleW) < 2.76 || (parseInt(`${libswresampleW}`) + minivodC.size) < 1));
      for (let g = 0; g < 3; g++) {
         iconarrowlefta = new Map([[shootyesgoal4, (shootyesgoal4 == String.fromCharCode(52,0) ? parseInt(`${controlsE}`) : shootyesgoal4.length)]]);
      }
       let iconlogout8 = String.fromCharCode(109,95,50,56,95,115,104,117,116,100,111,119,110,97,99,107,0);
       let homeplayerV = String.fromCharCode(106,95,52,51,95,100,99,116,115,117,98,0);
      while ((libswresampleW * penaltyshootv) > 5.85 && 1.7 > (5.85 * penaltyshootv)) {
         penaltyshootv *= 3 * shootyesgoal4.length;
         break;
      }
      while (iconlogout8.length < 2) {
          let iconbellf = [505, 515];
          let faviconi = 5.0;
          let airbnbstarN = true;
          let downloadingl = new Map([[String.fromCharCode(109,95,53,54,95,112,114,111,99,99,101,115,115,0),162], [String.fromCharCode(102,95,49,48,95,109,117,120,101,114,115,0),649]]);
          let bannerj = String.fromCharCode(108,111,116,115,95,100,95,51,52,0);
         minivodC[`${downloadingl.size}`] = iconarrowlefta.size * 3;
         iconbellf = [1 + bannerj.length];
         faviconi /= Math.max(5, ((airbnbstarN ? 1 : 3)));
         airbnbstarN = iconbellf.includes(faviconi);
         downloadingl[bannerj] = bannerj.length;
         break;
      }
      do {
         penaltyshootv -= iconlogout8.length;
         if (penaltyshootv == 3122948.0) {
            break;
         }
      } while (((penaltyshootv / (Math.max(2.57, 8))) >= 3.93) && (penaltyshootv == 3122948.0));
         homeplayerV += `${1 << (Math.min(3, shootyesgoal4.length))}`;
         minivodC[`${penaltyshootv}`] = parseInt(`${libswresampleW}`);
      sheetk -= parseInt(`${sheetk}`) | shootyesgoal4.length;
   }
      fastZ = "1";
      predictionloss8 += `${predictionloss8.length}`;

    props.onLiveEnd?.();
      predictiondefaultm += `${(String.fromCharCode(102,0) == emojiR ? predictiondefaultm.length : emojiR.length)}`;
      predictionloss8 += `${3 * predictiondefaultm.length}`;
   do {
      emojiR += "2";
      if (emojiR == String.fromCharCode(115,106,112,95,120,109,102,49,49,48,0)) {
         break;
      }
   } while ((emojiR == String.fromCharCode(107,0) || 1 > whitebellD.length) && (emojiR == String.fromCharCode(115,106,112,95,120,109,102,49,49,48,0)));
       let twitterX = String.fromCharCode(115,107,105,112,112,101,100,95,55,95,50,54,0);
       let package_3C = new Map([[String.fromCharCode(98,95,51,56,95,115,117,98,112,105,120,101,108,0),false ], [String.fromCharCode(112,101,114,105,111,100,105,99,95,107,95,53,53,0),false ]]);
       let videovarp = new Map([[String.fromCharCode(115,108,105,99,101,100,95,100,95,48,0),354], [String.fromCharCode(114,101,110,100,101,114,95,104,95,49,51,0),837]]);
         videovarp[`${twitterX}`] = package_3C.size / 1;
      while (package_3C[`${videovarp.size}`] != null) {
         package_3C[`${twitterX}`] = twitterX.length % (Math.max(3, 2));
         break;
      }
         package_3C = new Map([[`${videovarp.size}`, videovarp.size - 2]]);
      for (let v = 0; v < 3; v++) {
         package_3C = new Map([[`${package_3C.size}`, videovarp.size]]);
      }
      if (!twitterX.startsWith(`${package_3C.size}`)) {
         package_3C[`${twitterX}`] = (twitterX == String.fromCharCode(54,0) ? twitterX.length : package_3C.size);
      }
          let countdownk = String.fromCharCode(100,95,52,50,95,119,101,105,0);
         package_3C = new Map([[`${package_3C.size}`, twitterX.length]]);
         countdownk = `${countdownk.length % (Math.max(countdownk.length, 8))}`;
       let sportsf = String.fromCharCode(107,95,51,54,95,102,116,118,108,105,110,107,0);
       let textlayoutmanagerl = String.fromCharCode(99,105,112,104,101,114,98,121,110,97,109,101,95,116,95,55,57,0);
      if ((3 & videovarp.size) == 4 && (3 & videovarp.size) == 2) {
         videovarp[`${videovarp.size}`] = 1 - package_3C.size;
      }
      for (let q = 0; q < 3; q++) {
         sportsf = `${package_3C.size - 3}`;
      }
      whitebellD = `${emojiR.length}`;
   while ((4 + emojiR.length) >= 4) {
      reactnavigations -= parseFloat(`${2}`);
      break;
   }

  };

  const onError = () => {
       let iconnewchat4 = 5.0;
    let libfollyY = 1.0;
    let largesound0 = 0.0;
    let largesoundu = String.fromCharCode(101,112,108,121,95,116,95,48,0);
    let smallbrightnessb = false;
    let regeng1 = 0.0;
    let become2 = new Map([[String.fromCharCode(115,95,50,50,95,100,111,119,110,115,116,114,101,97,109,0),String.fromCharCode(112,97,110,111,114,97,109,97,95,57,95,52,55,0)], [String.fromCharCode(117,110,112,114,101,109,117,108,116,105,112,108,121,111,102,102,115,101,116,95,100,95,52,57,0),String.fromCharCode(99,114,101,97,116,105,111,110,95,57,95,49,57,0)]]);
    let shootnogoalh = [62, 861];
    let megaphonez = [750, 895, 128];
    let philippinesV = 2;
    let u_unlockc = 0;
    let basketballg = 2;
      regeng1 *= largesoundu.length;
   if (1 >= shootnogoalh.length) {
      smallbrightnessb = become2.size >= 23;
   }
   for (let i = 0; i < 1; i++) {
       let componentk = String.fromCharCode(111,95,53,57,95,115,121,110,116,97,120,0);
       let middlewareu = String.fromCharCode(111,95,50,54,95,98,111,114,105,110,103,115,115,108,0);
       let bggradientw = [703, 481];
         middlewareu += `${componentk.length}`;
       let redgoalK = String.fromCharCode(116,115,114,95,56,95,57,54,0);
       let whitebell9 = String.fromCharCode(119,97,116,99,104,101,114,95,115,95,51,50,0);
          let n_positionU = String.fromCharCode(108,110,110,105,100,95,98,95,51,53,0);
         whitebell9 = `${componentk.length}`;
         n_positionU += `${n_positionU.length >> (Math.min(Math.abs(1), 1))}`;
         componentk += `${redgoalK.length >> (Math.min(Math.abs(2), 5))}`;
       let middleI = 1.0;
       let confirmationz = 4.0;
          let vietnamF = String.fromCharCode(97,95,50,50,95,107,105,99,107,0);
          let telemetryn = [643, 291, 793];
         confirmationz -= telemetryn.length << (Math.min(Math.abs(3), 4));
         vietnamF += `${(String.fromCharCode(71,0) == vietnamF ? vietnamF.length : vietnamF.length)}`;
         telemetryn = [vietnamF.length];
      do {
         componentk += `${2 % (Math.max(10, whitebell9.length))}`;
         if (3515406 == componentk.length) {
            break;
         }
      } while (((3 - componentk.length) <= 1) && (3515406 == componentk.length));
      do {
         redgoalK = `${bggradientw.length / (Math.max(redgoalK.length, 3))}`;
         if (redgoalK.length == 4563051) {
            break;
         }
      } while ((4 > (redgoalK.length >> (Math.min(Math.abs(2), 1)))) && (redgoalK.length == 4563051));
      do {
         whitebell9 += `${middlewareu.length}`;
         if (whitebell9 == String.fromCharCode(122,103,56,0)) {
            break;
         }
      } while ((whitebell9 == String.fromCharCode(122,103,56,0)) && (redgoalK != whitebell9));
      regeng1 -= 2 % (Math.max(9, componentk.length));
   }
      largesound0 /= Math.max(4, shootnogoalh.length - parseInt(`${largesound0}`));
      iconnewchat4 /= Math.max(parseFloat(`${megaphonez.length}`), 5);
   while (4.96 == (largesound0 / (Math.max(1, libfollyY))) || 4.96 == (largesound0 / (Math.max(libfollyY, 3)))) {
      libfollyY *= parseFloat(`${parseInt(`${largesound0}`)}`);
      break;
   }

    setIsError(true);
   if (1.14 <= (4.90 - largesound0) || 1 <= (parseInt(`${largesound0}`) - largesoundu.length)) {
      largesound0 *= largesoundu.length << (Math.min(4, Math.abs(parseInt(`${largesound0}`))));
   }
   for (let c = 0; c < 2; c++) {
      iconnewchat4 -= parseFloat(`${largesoundu.length}`);
   }
       let macauO = String.fromCharCode(101,120,115,115,95,54,95,55,0);
       let holderm = String.fromCharCode(115,116,101,114,101,111,95,104,95,52,52,0);
       let handlerl = String.fromCharCode(122,95,56,57,95,99,104,101,99,107,115,0);
       let auto_f6 = String.fromCharCode(112,95,52,95,115,99,114,101,101,110,112,114,101,115,115,111,0);
      while (1 <= holderm.length) {
         holderm += `${handlerl.length >> (Math.min(Math.abs(1), 5))}`;
         break;
      }
      for (let g = 0; g < 1; g++) {
         auto_f6 += `${handlerl.length ^ 3}`;
      }
       let mapbufferz = 3.0;
       let infoY = 1.0;
       let videobufferloading9 = new Map([[String.fromCharCode(114,101,113,117,101,115,116,95,48,95,52,0),599], [String.fromCharCode(101,95,51,56,95,109,101,100,105,97,115,0),326], [String.fromCharCode(116,114,117,101,115,112,101,101,99,104,95,110,95,49,53,0),559]]);
       let handlerh = new Map([[String.fromCharCode(104,97,112,116,105,99,95,112,95,50,48,0),564], [String.fromCharCode(97,114,99,104,105,118,101,95,111,95,56,49,0),449]]);
         handlerl = `${handlerl.length - auto_f6.length}`;
      if (3 > (handlerh.size & macauO.length) || 4 > (3 & macauO.length)) {
         handlerh[auto_f6] = auto_f6.length;
      }
      for (let e = 0; e < 3; e++) {
         handlerl = `${2 & videobufferloading9.size}`;
      }
      while ((infoY * 1.76) == 3.55 || 4.48 == (infoY * 1.76)) {
          let dragcloseO = 2.0;
          let founde = [629, 408];
          let l_player2 = new Map([[String.fromCharCode(102,114,101,101,100,111,109,95,116,95,54,57,0),String.fromCharCode(105,95,51,48,95,114,97,110,107,105,110,103,115,0)], [String.fromCharCode(120,95,51,48,95,117,110,112,105,110,110,101,100,0),String.fromCharCode(100,95,55,95,112,111,108,105,99,121,0)], [String.fromCharCode(115,95,57,95,114,101,99,111,118,101,114,97,98,108,101,0),String.fromCharCode(106,111,98,113,95,107,95,50,0)]]);
         infoY -= parseFloat(`${parseInt(`${dragcloseO}`) | holderm.length}`);
         dragcloseO += parseFloat(`${l_player2.size * founde.length}`);
         founde.push(founde.length);
         l_player2[`${founde.length}`] = founde.length ^ l_player2.size;
         break;
      }
      largesound0 /= Math.max(2, 2);
      smallbrightnessb = 7.25 >= libfollyY;
       let tempnodataP = String.fromCharCode(110,95,50,49,95,97,99,111,110,102,105,103,0);
       let mappingG = String.fromCharCode(112,97,116,104,110,97,109,101,95,101,95,54,49,0);
         tempnodataP = `${mappingG.length}`;
         mappingG = `${mappingG.length}`;
       let debugi = [262, 252, 706];
         tempnodataP += "3";
       let neonY = String.fromCharCode(115,101,110,100,109,115,103,95,116,95,54,50,0);
      if (tempnodataP != mappingG) {
         mappingG = `${tempnodataP.length}`;
      }
      shootnogoalh = [become2.size | megaphonez.length];
       let bangC = 4.0;
      for (let w = 0; w < 1; w++) {
         bangC -= parseFloat(`${parseInt(`${bangC}`) + parseInt(`${bangC}`)}`);
      }
         bangC *= parseFloat(`${parseInt(`${bangC}`)}`);
      do {
          let renewc = String.fromCharCode(117,95,50,51,95,114,105,110,100,101,120,0);
          let arrowdownZ = 1.0;
          let expiredm = String.fromCharCode(114,101,100,101,108,105,118,101,114,121,95,111,95,56,49,0);
         bangC *= parseFloat(`${renewc.length + 2}`);
         renewc += "2";
         arrowdownZ /= Math.max(1, (expiredm == String.fromCharCode(116,0) ? parseInt(`${arrowdownZ}`) : expiredm.length));
         if (bangC == 1912303.0) {
            break;
         }
      } while ((bangC == 1912303.0) && ((bangC - bangC) > 1.7));
      regeng1 *= 1;

    setIsLoading(false);
       let modulei = 1.0;
       let ksadq = String.fromCharCode(112,95,53,95,99,101,110,99,0);
       let orangeclocka = [137, 611, 89];
         orangeclocka = [ksadq.length * orangeclocka.length];
      if (ksadq.includes(`${orangeclocka.length}`)) {
         orangeclocka = [parseInt(`${modulei}`)];
      }
          let foreground8 = 4;
         modulei += (String.fromCharCode(53,0) == ksadq ? ksadq.length : foreground8);
       let update_ck = String.fromCharCode(120,95,55,55,95,105,115,108,101,97,112,0);
       let buildy = String.fromCharCode(101,110,99,104,95,102,95,54,51,0);
      while (5 > (ksadq.length - parseInt(`${modulei}`))) {
         ksadq += `${ksadq.length >> (Math.min(1, orangeclocka.length))}`;
         break;
      }
      do {
         modulei *= 3;
         if (933049.0 == modulei) {
            break;
         }
      } while ((update_ck.startsWith(`${modulei}`)) && (933049.0 == modulei));
      for (let w = 0; w < 2; w++) {
          let saveA = String.fromCharCode(102,95,51,95,97,102,102,105,110,105,116,105,101,115,0);
          let libcrashsdkb = 2.0;
          let imagemanagerK = [278, 683, 721];
         modulei -= imagemanagerK.length;
         saveA = `${parseInt(`${libcrashsdkb}`)}`;
         libcrashsdkb -= (parseFloat(`${String.fromCharCode(68,0) == saveA ? parseInt(`${libcrashsdkb}`) : saveA.length}`));
         imagemanagerK = [parseInt(`${libcrashsdkb}`)];
      }
         update_ck += `${(ksadq == String.fromCharCode(52,0) ? orangeclocka.length : ksadq.length)}`;
      if (buildy.endsWith(`${modulei}`)) {
          let componentsP = 1.0;
          let smallsoundW = String.fromCharCode(117,95,53,50,95,100,101,108,115,117,112,101,114,0);
          let storeq = true;
         modulei *= (String.fromCharCode(103,0) == update_ck ? parseInt(`${componentsP}`) : update_ck.length);
         componentsP /= Math.max(parseFloat(`${1}`), 2);
         smallsoundW += `${smallsoundW.length}`;
      }
      largesound0 /= Math.max(1 ^ ksadq.length, 5);
      smallbrightnessb = 42 > philippinesV;
   do {
       let navigationR = [String.fromCharCode(104,95,49,95,99,104,114,111,109,105,110,97,110,99,101,0), String.fromCharCode(118,95,54,50,95,108,105,110,109,97,116,104,0)];
       let invite2 = String.fromCharCode(118,120,119,111,114,107,115,95,52,95,55,54,0);
       let appleB = [String.fromCharCode(100,98,115,105,122,101,95,49,95,55,52,0), String.fromCharCode(113,95,56,48,95,114,101,115,111,117,114,99,101,115,0)];
          let fullscreenmaxW = new Map([[String.fromCharCode(97,99,99,101,112,116,95,104,95,49,0),897], [String.fromCharCode(98,95,52,54,95,105,110,116,101,114,97,116,105,111,110,0),403], [String.fromCharCode(119,95,54,52,95,112,97,115,115,102,0),404]]);
         appleB.push(2);
         fullscreenmaxW = new Map([[`${fullscreenmaxW.size}`, fullscreenmaxW.size]]);
      do {
         navigationR = [1];
         if (navigationR.length == 1411012) {
            break;
         }
      } while ((appleB.length > navigationR.length) && (navigationR.length == 1411012));
         invite2 += `${1 * invite2.length}`;
       let latn2 = 2;
       let cornerkickP = 3;
      while (cornerkickP >= 3) {
         invite2 = `${latn2}`;
         break;
      }
         cornerkickP -= 3;
         invite2 += `${appleB.length}`;
          let pointT = 3;
          let iconarrowrightwhite7 = new Map([[String.fromCharCode(108,105,98,115,112,101,101,120,95,107,95,56,49,0),true ], [String.fromCharCode(97,95,49,54,95,105,110,115,105,100,101,0),true ]]);
         invite2 += "1";
         pointT <<= Math.min(2, Math.abs(iconarrowrightwhite7.size));
         iconarrowrightwhite7[`${pointT}`] = iconarrowrightwhite7.size >> (Math.min(3, Math.abs(pointT)));
       let k_centerK = true;
       let emojiheart0 = false;
      regeng1 /= Math.max(3, 5);
      if (20552.0 == regeng1) {
         break;
      }
   } while ((!smallbrightnessb || 3.0 > (1.70 + regeng1)) && (20552.0 == regeng1));
      libfollyY += parseFloat(`${2}`);
      largesoundu += `${parseInt(`${iconnewchat4}`) - 2}`;
      philippinesV <<= Math.min(megaphonez.length, 3);

    props.onLiveEnd?.();
   for (let g = 0; g < 3; g++) {
      regeng1 += parseInt(`${regeng1}`) & 2;
   }
   while ((megaphonez.length | 3) < 5 && (3 | largesoundu.length) < 1) {
      megaphonez.push(1);
      break;
   }
   for (let n = 0; n < 2; n++) {
      largesound0 /= Math.max(3 / (Math.max(7, parseInt(`${iconnewchat4}`))), 2);
   }
      regeng1 *= parseInt(`${libfollyY}`) ^ megaphonez.length;
   while (5.99 > (libfollyY + 1.99) || (iconnewchat4 + libfollyY) > 1.99) {
      iconnewchat4 /= Math.max(parseFloat(`${philippinesV}`), 5);
      break;
   }
      philippinesV %= Math.max((String.fromCharCode(85,0) == largesoundu ? largesoundu.length : parseInt(`${largesound0}`)), 2);

  };

  const onFullscreenPlayerDidDismiss = () => {
       let verticalG = [480, 580];
    let thumbnail_ = String.fromCharCode(105,95,55,50,95,99,111,101,102,102,0);
    let recommendationk = true;
    let awayteamfields = 4;
    let subin7 = 3;
    let settingJ = 1;
    let ballF = true;
    let activityB = 0.0;
    let grayn = 3.0;
    let giflivestreamingX = 4.0;
    let basketballtrophy0 = 3;
    let iconorientation0 = String.fromCharCode(100,117,112,115,111,114,116,95,101,95,49,0);
    let libmapbufferjniX = String.fromCharCode(109,101,110,116,105,111,110,115,95,106,95,57,53,0);
    let whatsappr = false;
      verticalG = [parseInt(`${giflivestreamingX}`) & 3];
      activityB *= 3 - parseInt(`${activityB}`);
   if (thumbnail_ == iconorientation0) {
      iconorientation0 = `${((ballF ? 1 : 5) ^ subin7)}`;
   }
       let final_kbg = String.fromCharCode(114,95,57,54,95,102,116,114,117,110,99,97,116,101,0);
      for (let h = 0; h < 1; h++) {
         final_kbg = "2";
      }
      while (final_kbg.length > 5) {
         final_kbg = `${(String.fromCharCode(89,0) == final_kbg ? final_kbg.length : final_kbg.length)}`;
         break;
      }
         final_kbg += `${(final_kbg == String.fromCharCode(85,0) ? final_kbg.length : final_kbg.length)}`;
      thumbnail_ += "3";
       let fieldi = 2.0;
       let telegramf = 1;
       let sigmobP = 1;
       let anythinkK = [444, 890, 290];
       let navigationh = [748, 728];
      do {
         anythinkK = [3];
         if (3829552 == anythinkK.length) {
            break;
         }
      } while ((3829552 == anythinkK.length) && ((anythinkK.length & 2) == 4));
          let nodeT = [String.fromCharCode(109,95,56,53,95,112,102,105,108,116,101,114,0), String.fromCharCode(102,108,97,115,104,95,108,95,50,56,0), String.fromCharCode(112,97,115,115,105,118,101,95,107,95,56,0)];
         anythinkK.push(navigationh.length);
         nodeT.push(nodeT.length >> (Math.min(Math.abs(3), 4)));
         telegramf ^= 3;
      while ((navigationh.length / (Math.max(6, anythinkK.length))) >= 3) {
          let moonQ = 3.0;
          let iconorientationV = 1.0;
          let emojiheartR = 1.0;
          let fullM = String.fromCharCode(118,109,104,100,95,52,95,50,56,0);
         anythinkK = [2];
         moonQ -= fullM.length & 1;
         iconorientationV -= parseFloat(`${parseInt(`${moonQ}`) >> (Math.min(1, Math.abs(2)))}`);
         emojiheartR /= Math.max(parseInt(`${moonQ}`), 2);
         fullM = `${parseInt(`${iconorientationV}`)}`;
         break;
      }
      if ((sigmobP / (Math.max(fieldi, 10))) < 1.74) {
          let regengJ = String.fromCharCode(116,104,97,110,95,101,95,52,57,0);
          let subbasketballplayerU = 5.0;
          let iconwatchnow8 = 3.0;
          let homep = 4.0;
         sigmobP *= 1 + parseInt(`${subbasketballplayerU}`);
         regengJ += `${parseInt(`${iconwatchnow8}`) + 3}`;
         subbasketballplayerU *= 2;
         iconwatchnow8 += (String.fromCharCode(118,0) == regengJ ? parseInt(`${iconwatchnow8}`) : regengJ.length);
         homep /= Math.max(3, parseFloat(`${regengJ.length}`));
      }
         anythinkK.push(parseInt(`${fieldi}`));
          let nodev = true;
         navigationh.push(parseInt(`${fieldi}`));
         nodev = !nodev && !nodev;
      if (!navigationh.includes(telegramf)) {
         navigationh = [1 * navigationh.length];
      }
      awayteamfields ^= 3 | basketballtrophy0;
       let binddatasL = String.fromCharCode(101,111,109,101,116,114,121,95,113,95,50,55,0);
       let zinit_vS = String.fromCharCode(114,101,115,116,95,103,95,52,49,0);
      if (binddatasL != String.fromCharCode(71,0)) {
         zinit_vS = `${zinit_vS.length}`;
      }
      do {
         binddatasL = `${(binddatasL == String.fromCharCode(114,0) ? binddatasL.length : zinit_vS.length)}`;
         if (binddatasL == String.fromCharCode(50,113,114,112,48,111,114,110,103,0)) {
            break;
         }
      } while ((zinit_vS.length < binddatasL.length) && (binddatasL == String.fromCharCode(50,113,114,112,48,111,114,110,103,0)));
      while (zinit_vS.length >= binddatasL.length) {
         zinit_vS += `${binddatasL.length}`;
         break;
      }
      while (binddatasL.length >= 3) {
         zinit_vS += "1";
         break;
      }
       let navigationo = 5.0;
       let pageO = 5.0;
      for (let i = 0; i < 3; i++) {
         zinit_vS = "3";
      }
      recommendationk = verticalG.includes(awayteamfields);
   if (4 > (5 - settingJ)) {
      activityB *= subin7 >> (Math.min(Math.abs(settingJ), 4));
   }
      iconorientation0 += `${settingJ}`;
       let moduleh = String.fromCharCode(103,97,116,104,101,114,95,51,95,52,0);
       let backgroundF = 5;
       let showlessi = 3.0;
       let viewsi = String.fromCharCode(112,114,101,95,117,95,49,55,0);
      for (let j = 0; j < 2; j++) {
          let eactm = new Map([[String.fromCharCode(120,118,105,100,95,51,95,53,48,0),true ], [String.fromCharCode(114,101,97,99,104,101,100,95,110,95,53,55,0),true ], [String.fromCharCode(120,105,112,104,108,97,99,105,110,103,95,111,95,53,48,0),true ]]);
          let anythinkS = String.fromCharCode(97,95,49,49,95,110,111,110,110,101,103,97,116,105,118,101,0);
         showlessi += eactm.size - 1;
         eactm = new Map([[anythinkS, (String.fromCharCode(52,0) == anythinkS ? anythinkS.length : anythinkS.length)]]);
      }
         moduleh += `${moduleh.length % 3}`;
         showlessi /= Math.max(2, viewsi.length);
         backgroundF ^= (moduleh == String.fromCharCode(70,0) ? backgroundF : moduleh.length);
      if (!moduleh.includes(`${viewsi.length}`)) {
         moduleh = `${2 * moduleh.length}`;
      }
         viewsi = `${backgroundF % (Math.max(parseInt(`${showlessi}`), 2))}`;
         showlessi *= (String.fromCharCode(120,0) == moduleh ? backgroundF : moduleh.length);
       let carouselx = String.fromCharCode(105,95,51,54,95,101,105,103,104,116,0);
       let tickL = String.fromCharCode(121,95,54,56,95,111,112,116,105,109,105,122,101,114,0);
      iconorientation0 += "3";
   while ((1.89 * giflivestreamingX) <= 4.67 || (giflivestreamingX - 1.89) <= 3.2) {
      giflivestreamingX += 1 - subin7;
      break;
   }
       let hooksk = 1;
       let typeso = false;
          let statisticsC = [704, 90, 752];
         typeso = !typeso;
         statisticsC = [statisticsC.length >> (Math.min(Math.abs(1), 5))];
         hooksk &= ((typeso ? 5 : 5) >> (Math.min(Math.abs(hooksk), 3)));
          let fullscreenmin4 = 4.0;
          let time_uE = true;
         typeso = fullscreenmin4 < 28.98;
         fullscreenmin4 *= 1;
         hooksk *= 2;
         typeso = !typeso;
         hooksk >>= Math.min(5, Math.abs(3));
      recommendationk = 88 >= thumbnail_.length || 88 >= basketballtrophy0;
      awayteamfields /= Math.max(4, (settingJ + (ballF ? 2 : 4)));
       let recommendationZ = String.fromCharCode(106,95,52,95,101,118,115,105,103,110,97,108,0);
       let penaltymatchicond = new Map([[String.fromCharCode(112,114,111,116,111,95,106,95,56,57,0),941], [String.fromCharCode(108,95,50,50,95,105,110,116,114,97,120,109,98,121,0),5]]);
       let othermatchdetailbgb = 0;
         recommendationZ = `${penaltymatchicond.size}`;
         recommendationZ += "1";
      if ((penaltymatchicond.size * recommendationZ.length) > 1 && 1 > (recommendationZ.length * penaltymatchicond.size)) {
         recommendationZ = `${penaltymatchicond.size - 3}`;
      }
       let utilsy = 3;
          let savee = 3.0;
          let interstitialw = false;
         utilsy |= utilsy;
         savee -= parseFloat(`${parseInt(`${savee}`) << (Math.min(1, Math.abs(1)))}`);
         interstitialw = 79.55 < savee;
      if (utilsy == 2) {
         utilsy <<= Math.min(3, Math.abs(othermatchdetailbgb));
      }
       let hometeamfieldr = String.fromCharCode(107,101,121,98,117,102,95,113,95,51,54,0);
       let minia = String.fromCharCode(117,95,56,50,95,105,115,109,108,0);
          let green8 = [734, 744];
          let selectF = 2.0;
         othermatchdetailbgb *= 1;
         green8 = [green8.length << (Math.min(5, Math.abs(parseInt(`${selectF}`))))];
         selectF /= Math.max(2, parseFloat(`${parseInt(`${selectF}`)}`));
      while (3 == (penaltymatchicond.size << (Math.min(Math.abs(2), 1)))) {
         minia += `${hometeamfieldr.length}`;
         break;
      }
      subin7 %= Math.max((penaltymatchicond.size * (ballF ? 2 : 2)), 4);
      awayteamfields -= 3 << (Math.min(3, Math.abs(awayteamfields)));
      activityB *= settingJ / (Math.max(parseInt(`${giflivestreamingX}`), 5));
   while (2 == (awayteamfields * 2) || 2 == (2 * awayteamfields)) {
      awayteamfields |= 1 - subin7;
      break;
   }
   while ((verticalG.length ^ 3) >= 1 && (3.85 + activityB) >= 5.95) {
       let exampleimagew = new Map([[String.fromCharCode(118,95,51,52,95,115,117,114,102,97,99,101,0),107], [String.fromCharCode(117,95,54,51,95,112,114,101,116,101,110,100,0),765], [String.fromCharCode(114,101,100,117,110,100,97,110,116,95,54,95,49,57,0),814]]);
       let whitesmalltickN = 0;
       let description_kcX = String.fromCharCode(115,95,53,57,95,112,97,99,107,101,116,101,100,0);
      do {
         whitesmalltickN <<= Math.min(Math.abs(exampleimagew.size), 5);
         if (3476903 == whitesmalltickN) {
            break;
         }
      } while ((3476903 == whitesmalltickN) && (Array.from(exampleimagew.keys()).includes(`${whitesmalltickN}`)));
       let sinaB = 0.0;
       let defaultpredictionprofilew = 1.0;
          let libturbomodulejsijnih = [518, 591, 129];
          let shirtK = 1.0;
          let reviewJ = String.fromCharCode(112,95,50,51,95,113,99,111,109,0);
         whitesmalltickN *= parseInt(`${shirtK}`);
         libturbomodulejsijnih.push(2 % (Math.max(8, reviewJ.length)));
         shirtK -= (parseFloat(`${reviewJ == String.fromCharCode(106,0) ? reviewJ.length : libturbomodulejsijnih.length}`));
      for (let s = 0; s < 1; s++) {
         exampleimagew = new Map([[description_kcX, description_kcX.length / (Math.max(2, parseInt(`${sinaB}`)))]]);
      }
       let video8 = String.fromCharCode(101,120,116,114,97,95,98,95,49,52,0);
         defaultpredictionprofilew *= parseFloat(`${whitesmalltickN / 1}`);
      for (let e = 0; e < 2; e++) {
          let searchG = 1.0;
          let membershiph = 4.0;
         sinaB -= (parseFloat(`${video8 == String.fromCharCode(110,0) ? video8.length : parseInt(`${searchG}`)}`));
         searchG /= Math.max(parseFloat(`${2 >> (Math.min(Math.abs(parseInt(`${membershiph}`)), 3))}`), 5);
         membershiph *= parseFloat(`${2 << (Math.min(Math.abs(parseInt(`${membershiph}`)), 5))}`);
      }
         whitesmalltickN &= 1;
          let basketballiconJ = new Map([[String.fromCharCode(115,117,98,118,97,108,117,101,95,49,95,56,50,0),765], [String.fromCharCode(104,95,56,54,95,112,111,108,108,0),795]]);
         video8 += "1";
         basketballiconJ = new Map([[`${basketballiconJ.size}`, basketballiconJ.size]]);
      activityB -= 3 % (Math.max(4, parseInt(`${giflivestreamingX}`)));
      break;
   }
   if (thumbnail_.includes(`${basketballtrophy0}`)) {
      thumbnail_ = "1";
   }

    dispatch(togglePlayPaused());
      thumbnail_ = `${((ballF ? 2 : 3))}`;
      ballF = 65 <= settingJ;
   if (awayteamfields == verticalG.length) {
      awayteamfields &= (libmapbufferjniX == String.fromCharCode(75,0) ? parseInt(`${grayn}`) : libmapbufferjniX.length);
   }
   do {
      grayn /= Math.max(4, subin7 ^ parseInt(`${activityB}`));
      if (2061742.0 == grayn) {
         break;
      }
   } while ((activityB > grayn) && (2061742.0 == grayn));
   if (recommendationk) {
       let predictionarrowp = String.fromCharCode(102,95,56,49,95,109,97,115,107,105,110,103,0);
       let usert = new Map([[String.fromCharCode(115,112,101,99,115,95,107,95,57,0),String.fromCharCode(104,95,55,56,95,114,101,108,101,97,115,101,100,0)], [String.fromCharCode(111,99,99,117,114,114,101,110,99,101,115,95,98,95,55,51,0),String.fromCharCode(97,95,55,54,95,97,115,121,110,99,100,105,115,112,108,97,121,107,105,116,0)]]);
       let yellowcirclebgR = new Map([[String.fromCharCode(99,117,116,111,102,102,95,115,95,53,52,0),897], [String.fromCharCode(102,95,57,54,95,99,111,101,102,0),24]]);
       let previewQ = String.fromCharCode(114,95,54,52,95,97,117,100,105,116,105,110,103,0);
       let libjsiy = String.fromCharCode(112,95,52,55,95,109,111,100,101,0);
      if (predictionarrowp == libjsiy) {
         libjsiy += `${1 + yellowcirclebgR.size}`;
      }
         usert = new Map([[`${yellowcirclebgR.size}`, (previewQ == String.fromCharCode(88,0) ? yellowcirclebgR.size : previewQ.length)]]);
         predictionarrowp += `${previewQ.length}`;
      while (usert.size > 2) {
         usert = new Map([[`${yellowcirclebgR.size}`, 3 & yellowcirclebgR.size]]);
         break;
      }
      for (let v = 0; v < 1; v++) {
         libjsiy = `${(String.fromCharCode(65,0) == libjsiy ? usert.size : libjsiy.length)}`;
      }
      if (libjsiy.length < 2) {
         libjsiy = `${usert.size - predictionarrowp.length}`;
      }
         libjsiy = `${libjsiy.length | 2}`;
         libjsiy += `${yellowcirclebgR.size % (Math.max(3, 4))}`;
      recommendationk = awayteamfields >= 62;
   }
   while (recommendationk && 1 == (2 % (Math.max(5, basketballtrophy0)))) {
       let terms2 = [String.fromCharCode(100,105,118,105,100,101,114,95,52,95,55,56,0), String.fromCharCode(97,95,53,57,95,99,111,110,102,111,114,109,115,0)];
       let c_image1 = String.fromCharCode(122,95,56,52,95,97,112,112,114,111,120,105,109,97,116,101,0);
       let sellmathbackgroundj = new Map([[String.fromCharCode(101,110,118,101,108,111,112,101,95,53,95,50,49,0),true ], [String.fromCharCode(118,95,57,49,95,116,101,115,116,114,101,115,117,108,116,0),true ], [String.fromCharCode(102,115,105,122,101,95,116,95,55,55,0),false ]]);
      do {
          let livenodatabgimgb = false;
          let webviewn = String.fromCharCode(99,104,111,115,101,95,113,95,49,49,0);
          let greenZ = 0.0;
         c_image1 += `${3 & webviewn.length}`;
         livenodatabgimgb = 31.79 < greenZ && !livenodatabgimgb;
         webviewn = `${((livenodatabgimgb ? 4 : 2) % (Math.max(parseInt(`${greenZ}`), 2)))}`;
         if (4230523 == c_image1.length) {
            break;
         }
      } while ((4230523 == c_image1.length) && ((c_image1.length >> (Math.min(Math.abs(5), 1))) > 1 || 4 > (5 >> (Math.min(4, terms2.length)))));
         c_image1 += `${sellmathbackgroundj.size}`;
      while ((terms2.length << (Math.min(Math.abs(2), 1))) == 5 || 2 == (terms2.length << (Math.min(c_image1.length, 1)))) {
         terms2 = [c_image1.length];
         break;
      }
         c_image1 += `${c_image1.length}`;
      do {
          let indexc = String.fromCharCode(104,95,57,48,95,101,120,99,108,117,100,105,110,103,0);
         c_image1 = `${terms2.length}`;
         indexc = `${indexc.length - indexc.length}`;
         if (4720986 == c_image1.length) {
            break;
         }
      } while ((4720986 == c_image1.length) && (terms2.length > c_image1.length));
         sellmathbackgroundj[c_image1] = c_image1.length / (Math.max(2, 10));
      do {
          let infoP = String.fromCharCode(100,97,105,95,56,95,53,56,0);
          let controlse = String.fromCharCode(97,108,112,104,97,101,120,116,114,97,99,116,95,113,95,55,49,0);
          let subinD = [314, 781, 581];
         c_image1 += `${1 & subinD.length}`;
         infoP = `${infoP.length}`;
         controlse = `${infoP.length}`;
         subinD = [controlse.length % (Math.max(2, 4))];
         if (2386206 == c_image1.length) {
            break;
         }
      } while ((2386206 == c_image1.length) && (sellmathbackgroundj.size <= 5));
         c_image1 = `${terms2.length}`;
         terms2 = [sellmathbackgroundj.size & 3];
      recommendationk = 65 == c_image1.length;
      break;
   }
      ballF = verticalG.length < 93 && recommendationk;
   do {
       let zhengpiand = String.fromCharCode(99,111,108,108,101,99,116,105,98,108,101,95,113,95,53,54,0);
       let alertd = new Map([[String.fromCharCode(105,95,50,53,95,109,117,108,116,105,112,108,101,114,0),String.fromCharCode(111,99,97,108,95,109,95,56,50,0)], [String.fromCharCode(111,95,52,57,95,100,101,99,111,109,112,114,101,115,115,111,114,0),String.fromCharCode(119,95,55,53,95,99,111,110,99,114,101,116,101,0)], [String.fromCharCode(115,101,116,95,51,95,50,51,0),String.fromCharCode(100,121,110,97,114,114,97,121,95,51,95,53,50,0)]]);
       let navigationp = String.fromCharCode(119,95,49,48,95,97,119,97,114,101,0);
       let videocommons = String.fromCharCode(98,117,105,108,100,101,114,95,48,95,55,57,0);
       let starQ = 4.0;
          let sellV = String.fromCharCode(98,95,53,55,95,103,117,105,100,0);
          let fasth = String.fromCharCode(100,97,115,104,98,111,97,114,100,95,52,95,56,56,0);
         videocommons = `${videocommons.length ^ sellV.length}`;
         sellV += `${(String.fromCharCode(55,0) == fasth ? fasth.length : fasth.length)}`;
          let bdxadsdkf = new Map([[String.fromCharCode(116,101,109,112,110,97,109,101,95,53,95,51,52,0),String.fromCharCode(97,95,49,52,95,119,105,100,116,104,115,0)], [String.fromCharCode(115,116,117,102,102,105,110,103,95,104,95,51,49,0),String.fromCharCode(99,111,108,108,97,116,105,110,103,95,103,95,51,57,0)]]);
         alertd[`${starQ}`] = bdxadsdkf.size & 1;
          let hookskC = 4;
         alertd[`${starQ}`] = 1 + parseInt(`${starQ}`);
         hookskC /= Math.max(hookskC, 5);
      for (let a = 0; a < 3; a++) {
          let yingU = String.fromCharCode(102,95,55,57,95,98,114,101,97,107,115,0);
          let owngoal1 = String.fromCharCode(118,95,54,52,95,115,112,111,105,108,101,114,115,0);
          let middlesoundf = 0.0;
          let megaphoneL = String.fromCharCode(110,111,110,110,117,108,108,105,110,99,111,109,105,110,103,95,53,95,50,53,0);
         starQ *= parseInt(`${middlesoundf}`);
         yingU += `${(megaphoneL == String.fromCharCode(90,0) ? owngoal1.length : megaphoneL.length)}`;
         owngoal1 = `${owngoal1.length << (Math.min(Math.abs(1), 3))}`;
         middlesoundf *= yingU.length;
      }
       let verticalZ = new Map([[String.fromCharCode(103,110,111,95,48,95,50,53,0),799], [String.fromCharCode(99,95,54,53,95,102,114,97,110,100,111,109,0),295], [String.fromCharCode(99,97,112,97,98,105,108,105,116,121,95,109,95,57,0),688]]);
      if (4 < navigationp.length) {
          let combinedV = 5.0;
          let iconfeedbackR = false;
         navigationp += `${parseInt(`${combinedV}`) % 3}`;
         combinedV *= parseFloat(`${3}`);
      }
      if (4 == (verticalZ.size * 1) || 3 == (verticalZ.size / (Math.max(1, 3)))) {
          let sheetP = 4.0;
          let iconclosek = new Map([[String.fromCharCode(99,104,101,99,107,109,97,114,107,95,48,95,52,48,0),944], [String.fromCharCode(109,117,116,97,116,101,95,52,95,49,57,0),492]]);
          let football2 = 4.0;
         starQ *= videocommons.length;
         sheetP *= parseFloat(`${parseInt(`${football2}`)}`);
         iconclosek = new Map([[`${iconclosek.size}`, iconclosek.size]]);
         football2 *= iconclosek.size - parseInt(`${sheetP}`);
      }
         navigationp += `${(navigationp == String.fromCharCode(121,0) ? navigationp.length : verticalZ.size)}`;
          let gpayg = 5.0;
          let subinA = String.fromCharCode(112,95,49,57,0);
          let servicek = 1.0;
         zhengpiand = `${navigationp.length}`;
         gpayg -= parseFloat(`${2 << (Math.min(4, Math.abs(parseInt(`${servicek}`))))}`);
         subinA = `${parseInt(`${gpayg}`)}`;
         servicek += parseFloat(`${parseInt(`${gpayg}`)}`);
      for (let j = 0; j < 1; j++) {
          let libreanimatedt = false;
          let long_a_ = 2;
          let faviconU = 5.0;
          let selectedO = 4.0;
         videocommons = `${(alertd.size | (libreanimatedt ? 1 : 4))}`;
         libreanimatedt = 50.55 == (faviconU / (Math.max(7, selectedO)));
         long_a_ |= 3 % (Math.max(5, parseInt(`${faviconU}`)));
         selectedO *= parseFloat(`${long_a_ >> (Math.min(Math.abs(parseInt(`${selectedO}`)), 5))}`);
      }
          let coreu = 2.0;
          let predictionwine = 5;
         alertd[`${zhengpiand}`] = (String.fromCharCode(74,0) == zhengpiand ? verticalZ.size : zhengpiand.length);
         coreu += parseFloat(`${predictionwine}`);
         predictionwine |= predictionwine;
          let iconfeedback5 = 2;
          let foregroundL = String.fromCharCode(110,95,49,53,95,105,116,101,114,97,116,111,114,0);
          let penaltymatchiconl = String.fromCharCode(98,101,108,108,95,103,95,52,48,0);
         navigationp += `${navigationp.length % (Math.max(2, 1))}`;
         iconfeedback5 -= foregroundL.length;
         foregroundL = `${(penaltymatchiconl == String.fromCharCode(104,0) ? penaltymatchiconl.length : foregroundL.length)}`;
       let libflipper1 = 3.0;
       let iconcurrentmatchb = 5.0;
      do {
         verticalZ = new Map([[zhengpiand, zhengpiand.length * navigationp.length]]);
         if (863446 == verticalZ.size) {
            break;
         }
      } while ((863446 == verticalZ.size) && (2 < (2 >> (Math.min(2, navigationp.length))) && 2 < (navigationp.length >> (Math.min(Math.abs(2), 1)))));
       let unselectedW = String.fromCharCode(97,112,111,108,108,111,95,112,95,55,49,0);
       let debugr = String.fromCharCode(109,95,53,54,95,97,117,114,97,0);
      giflivestreamingX *= parseInt(`${grayn}`) - awayteamfields;
      if (giflivestreamingX == 2994232.0) {
         break;
      }
   } while (((giflivestreamingX + grayn) > 3.19) && (giflivestreamingX == 2994232.0));
   while (5 == (libmapbufferjniX.length * 3)) {
      grayn -= basketballtrophy0 - 2;
      break;
   }
   while (libmapbufferjniX.length >= 3) {
      awayteamfields /= Math.max(2, 1);
      break;
   }
      libmapbufferjniX = `${settingJ}`;
       let rooms = String.fromCharCode(102,111,114,101,109,97,110,95,117,95,51,54,0);
       let linkp = false;
       let statisticsinactiveH = 5.0;
         linkp = statisticsinactiveH >= 32.69;
         linkp = parseInt(`${statisticsinactiveH}`) <= rooms.length;
      while (rooms.length > 5) {
          let qaagD = 5.0;
         statisticsinactiveH /= Math.max(2, (parseFloat(`${parseInt(`${statisticsinactiveH}`) & (linkp ? 1 : 5)}`)));
         qaagD /= Math.max(parseInt(`${qaagD}`) / (Math.max(parseInt(`${qaagD}`), 9)), 2);
         break;
      }
         rooms += "1";
       let championn = String.fromCharCode(105,95,52,50,0);
       let thumbnaili = String.fromCharCode(107,95,54,53,95,114,101,97,112,0);
      for (let b = 0; b < 1; b++) {
          let c_positionP = String.fromCharCode(104,111,108,100,115,95,111,95,55,50,0);
          let uploadN = String.fromCharCode(115,117,98,108,101,110,103,116,104,95,50,95,54,54,0);
          let loginY = String.fromCharCode(117,109,98,114,101,108,108,97,95,114,95,55,50,0);
         thumbnaili += `${championn.length % (Math.max(thumbnaili.length, 7))}`;
         c_positionP = `${loginY.length}`;
         uploadN += `${loginY.length % 1}`;
      }
      do {
         statisticsinactiveH *= parseFloat(`${rooms.length}`);
         if (65208.0 == statisticsinactiveH) {
            break;
         }
      } while ((65208.0 == statisticsinactiveH) && (!linkp));
         linkp = championn.length <= 8;
      if (statisticsinactiveH < parseFloat(`${thumbnaili.length}`)) {
         statisticsinactiveH -= (parseFloat(`${2 & (linkp ? 3 : 1)}`));
      }
      giflivestreamingX /= Math.max(awayteamfields, 3);
      grayn *= iconorientation0.length;
   do {
       let matchdetailbg0 = 0.0;
       let iconnotificationnewq = String.fromCharCode(117,110,105,102,105,101,100,95,115,95,49,49,0);
       let whitebellx = [676, 271];
       let mbbannerJ = [419, 214];
       let fill9 = String.fromCharCode(101,95,50,57,95,115,108,111,112,0);
         fill9 = "3";
      for (let h = 0; h < 1; h++) {
         fill9 += `${3 << (Math.min(4, Math.abs(parseInt(`${matchdetailbg0}`))))}`;
      }
         mbbannerJ.push(parseInt(`${matchdetailbg0}`) / (Math.max(8, fill9.length)));
      while (3 > (5 * mbbannerJ.length) || (5 * mbbannerJ.length) > 2) {
          let mappingF = String.fromCharCode(121,95,51,49,95,100,110,115,110,97,109,101,0);
          let libzeusL = String.fromCharCode(111,102,102,115,99,114,101,101,110,95,102,95,52,51,0);
         mbbannerJ = [1];
         mappingF = `${mappingF.length}`;
         libzeusL += `${mappingF.length}`;
         break;
      }
          let backiconmaska = String.fromCharCode(109,97,107,101,116,97,114,98,97,108,108,95,49,95,52,51,0);
         fill9 += `${iconnotificationnewq.length << (Math.min(Math.abs(1), 3))}`;
         backiconmaska = "1";
         whitebellx.push(parseInt(`${matchdetailbg0}`));
          let teamdetailsbgD = String.fromCharCode(102,97,114,101,110,100,95,56,95,57,49,0);
         iconnotificationnewq = "3";
         teamdetailsbgD = `${teamdetailsbgD.length}`;
       let viewerp = String.fromCharCode(117,95,56,52,0);
          let skipC = false;
         mbbannerJ = [1 + viewerp.length];
         skipC = !skipC;
      do {
          let profileG = String.fromCharCode(121,95,54,49,95,97,98,115,120,0);
          let switch_mpv = String.fromCharCode(103,105,103,97,98,121,116,101,95,111,95,57,56,0);
          let watchf = 4.0;
          let long_un = String.fromCharCode(104,101,114,101,95,115,95,56,48,0);
         iconnotificationnewq = `${long_un.length}`;
         profileG += `${profileG.length >> (Math.min(Math.abs(3), 3))}`;
         switch_mpv = `${parseInt(`${watchf}`)}`;
         watchf *= (parseFloat(`${String.fromCharCode(72,0) == profileG ? profileG.length : parseInt(`${watchf}`)}`));
         long_un += `${profileG.length}`;
         if (2006817 == iconnotificationnewq.length) {
            break;
         }
      } while ((2006817 == iconnotificationnewq.length) && (iconnotificationnewq.length > 3));
      if (viewerp != String.fromCharCode(102,0) || fill9.length <= 5) {
         viewerp += `${parseInt(`${matchdetailbg0}`)}`;
      }
      if ((3.85 + matchdetailbg0) >= 3.47) {
         fill9 = `${parseInt(`${matchdetailbg0}`) % (Math.max(mbbannerJ.length, 8))}`;
      }
         whitebellx.push(2);
         matchdetailbg0 /= Math.max(parseFloat(`${whitebellx.length ^ 3}`), 1);
      for (let u = 0; u < 2; u++) {
         whitebellx = [fill9.length];
      }
      verticalG.push((awayteamfields >> (Math.min(4, Math.abs((recommendationk ? 2 : 3))))));
      if (3952990 == verticalG.length) {
         break;
      }
   } while ((verticalG.length < 2) && (3952990 == verticalG.length));
   if (!libmapbufferjniX.includes(`${subin7}`)) {
      libmapbufferjniX = `${(parseInt(`${activityB}`) - (ballF ? 3 : 2))}`;
   }
      settingJ %= Math.max(4, libmapbufferjniX.length | basketballtrophy0);
      verticalG.push(1);
   while ((subin7 * 4) >= 5) {
       let stringt = 4.0;
       let sentryp = 5.0;
       let kuaishoum = String.fromCharCode(100,95,56,95,105,100,101,110,116,105,102,105,101,114,0);
       let floaterq = 1.0;
      for (let a = 0; a < 2; a++) {
         kuaishoum = `${parseInt(`${floaterq}`)}`;
      }
          let launchi = String.fromCharCode(107,101,121,101,100,95,108,95,53,55,0);
          let giflivestreaminga = String.fromCharCode(110,101,97,114,101,115,116,95,50,95,56,54,0);
         kuaishoum = `${parseInt(`${stringt}`)}`;
         launchi = `${(giflivestreaminga == String.fromCharCode(78,0) ? launchi.length : giflivestreaminga.length)}`;
      if (5.40 > (5.53 - floaterq) && 1.73 > (5.53 - stringt)) {
         stringt /= Math.max(parseFloat(`${parseInt(`${sentryp}`) + parseInt(`${floaterq}`)}`), 2);
      }
       let scorepopsoundb = [279, 38, 553];
      for (let t = 0; t < 2; t++) {
         floaterq += 1 * parseInt(`${floaterq}`);
      }
      while (3 < kuaishoum.length) {
         kuaishoum += "1";
         break;
      }
      while (floaterq < scorepopsoundb.length) {
          let chatbotphotoW = new Map([[String.fromCharCode(98,95,50,55,95,98,101,105,110,103,0),String.fromCharCode(113,95,57,95,99,111,110,115,116,116,105,109,101,0)], [String.fromCharCode(98,114,105,100,103,101,100,95,115,95,56,57,0),String.fromCharCode(109,98,101,100,103,101,95,115,95,53,55,0)]]);
          let basketballawayteam3 = 5.0;
          let fcdaebecbcbafcdfceaaeccfeacdbR = new Map([[String.fromCharCode(100,95,50,48,95,112,101,114,109,117,116,97,116,105,111,110,0),false ], [String.fromCharCode(101,95,52,49,95,105,110,115,116,114,117,99,116,105,111,110,0),true ], [String.fromCharCode(103,101,116,102,114,97,109,101,95,101,95,49,53,0),true ]]);
          let auto_6aA = String.fromCharCode(102,105,110,97,108,105,115,101,114,95,106,95,57,57,0);
          let storeX = 4.0;
         floaterq *= parseInt(`${floaterq}`) + parseInt(`${stringt}`);
         chatbotphotoW = new Map([[`${fcdaebecbcbafcdfceaaeccfeacdbR.size}`, fcdaebecbcbafcdfceaaeccfeacdbR.size | 2]]);
         basketballawayteam3 -= chatbotphotoW.size | 3;
         auto_6aA = `${parseInt(`${basketballawayteam3}`) << (Math.min(Math.abs(3), 3))}`;
         storeX *= parseFloat(`${auto_6aA.length * 3}`);
         break;
      }
          let internet1 = String.fromCharCode(108,95,55,50,95,112,101,114,115,105,115,116,101,100,0);
         scorepopsoundb.push(parseInt(`${sentryp}`) & scorepopsoundb.length);
         internet1 = `${1 << (Math.min(1, internet1.length))}`;
          let orangetick0 = 4.0;
          let templateprocessors = [914, 312, 833];
         kuaishoum += `${scorepopsoundb.length & 1}`;
         orangetick0 += parseFloat(`${templateprocessors.length}`);
         templateprocessors = [parseInt(`${orangetick0}`) & templateprocessors.length];
      while ((4.13 - stringt) == 4.84) {
          let favicone = String.fromCharCode(106,95,53,53,95,99,117,116,0);
          let final_cN = new Map([[String.fromCharCode(122,95,57,51,95,114,101,97,100,0),false ], [String.fromCharCode(118,105,122,105,101,114,95,107,95,56,0),false ]]);
         stringt /= Math.max(parseFloat(`${3}`), 3);
         favicone += `${favicone.length}`;
         final_cN[`${favicone}`] = 1 ^ final_cN.size;
         break;
      }
      for (let o = 0; o < 3; o++) {
         sentryp += parseFloat(`${kuaishoum.length & parseInt(`${sentryp}`)}`);
      }
      if ((kuaishoum.length << (Math.min(Math.abs(1), 2))) < 1 || 5 < (1 * parseInt(`${stringt}`))) {
         stringt += (parseFloat(`${String.fromCharCode(119,0) == kuaishoum ? parseInt(`${stringt}`) : kuaishoum.length}`));
      }
      subin7 += iconorientation0.length + basketballtrophy0;
      break;
   }

  };

  const onRetry = () => {
       let resend1 = [137, 96];
    let eventv = [24, 712];
    let pointS = 5;
    let firebaseu = true;
    let smallbrightnessJ = String.fromCharCode(112,110,105,101,108,115,95,101,95,50,56,0);
    let predictionwini = 0.0;
    let views3 = [197, 275];
    let libavdeviceR = 4.0;
    let sigmobG = String.fromCharCode(112,95,53,50,95,112,97,114,97,103,114,97,112,104,0);
   do {
      libavdeviceR /= Math.max(4, ((firebaseu ? 5 : 1) % (Math.max(7, parseInt(`${predictionwini}`)))));
      if (libavdeviceR == 1498314.0) {
         break;
      }
   } while ((3.14 >= (libavdeviceR * 5.97)) && (libavdeviceR == 1498314.0));
   if (3 == (pointS & 4)) {
       let iconwechaty = String.fromCharCode(97,114,109,116,104,95,57,95,51,49,0);
         iconwechaty = `${iconwechaty.length}`;
         iconwechaty = `${iconwechaty.length - iconwechaty.length}`;
      for (let g = 0; g < 3; g++) {
         iconwechaty = "3";
      }
      pointS <<= Math.min(1, Math.abs(resend1.length & pointS));
   }
   for (let c = 0; c < 2; c++) {
      libavdeviceR += ((firebaseu ? 5 : 2) % (Math.max(5, parseInt(`${predictionwini}`))));
   }
   for (let z = 0; z < 3; z++) {
      sigmobG += `${smallbrightnessJ.length ^ eventv.length}`;
   }
      smallbrightnessJ += `${parseInt(`${libavdeviceR}`)}`;
      firebaseu = (sigmobG.length << (Math.min(2, views3.length))) >= 83;
   while (pointS > 1 || 1 > (pointS << (Math.min(Math.abs(1), 3)))) {
      pointS /= Math.max((sigmobG == String.fromCharCode(118,0) ? sigmobG.length : resend1.length), 4);
      break;
   }
      libavdeviceR -= (sigmobG == String.fromCharCode(117,0) ? parseInt(`${libavdeviceR}`) : sigmobG.length);
       let userr = 5.0;
       let entry2 = String.fromCharCode(100,105,115,116,114,105,98,117,116,101,95,54,95,50,50,0);
       let videojs6 = 4.0;
         entry2 += `${parseInt(`${userr}`)}`;
         entry2 += `${3 & parseInt(`${videojs6}`)}`;
         entry2 = `${entry2.length}`;
         entry2 += `${parseInt(`${videojs6}`) / 1}`;
      while ((videojs6 / (Math.max(5.56, 3))) <= 1.84 || (videojs6 / (Math.max(parseFloat(`${entry2.length}`), 10))) <= 5.56) {
         entry2 += `${parseInt(`${userr}`) / 1}`;
         break;
      }
      for (let l = 0; l < 3; l++) {
         userr -= parseFloat(`${parseInt(`${videojs6}`)}`);
      }
       let icondefaultthumbnailw = false;
      for (let p = 0; p < 2; p++) {
          let bannerX = 2.0;
          let shirtP = String.fromCharCode(99,97,115,101,115,95,111,95,55,51,0);
         entry2 += "1";
         bannerX -= shirtP.length << (Math.min(2, Math.abs(parseInt(`${bannerX}`))));
         shirtP += `${shirtP.length | parseInt(`${bannerX}`)}`;
      }
      while (videojs6 > 3.87) {
         videojs6 += parseFloat(`${parseInt(`${userr}`)}`);
         break;
      }
      libavdeviceR += 3 ^ parseInt(`${libavdeviceR}`);

    playerRef.current?.seek?.(0);
       let defaultlogoK = new Map([[String.fromCharCode(107,95,48,95,97,116,114,97,99,116,97,98,0),4], [String.fromCharCode(97,116,116,97,99,104,95,120,95,52,49,0),468]]);
       let serviceW = String.fromCharCode(111,95,56,57,95,102,97,118,105,99,111,110,0);
       let subtext3 = 5.0;
      do {
         serviceW = `${parseInt(`${subtext3}`) * 3}`;
         if (String.fromCharCode(113,100,117,53,103,0) == serviceW) {
            break;
         }
      } while ((String.fromCharCode(113,100,117,53,103,0) == serviceW) && (5.34 < (subtext3 - parseFloat(`${serviceW.length}`)) || 2.89 < (5.34 - subtext3)));
         defaultlogoK[`${subtext3}`] = defaultlogoK.size >> (Math.min(3, Math.abs(parseInt(`${subtext3}`))));
         serviceW += `${parseInt(`${subtext3}`)}`;
      if (1.53 > subtext3) {
         subtext3 -= parseFloat(`${defaultlogoK.size & serviceW.length}`);
      }
      for (let j = 0; j < 3; j++) {
          let main_gM = String.fromCharCode(110,95,57,49,95,97,112,97,99,107,101,116,0);
          let xvodM = 4;
         subtext3 -= parseFloat(`${parseInt(`${subtext3}`)}`);
         main_gM = `${xvodM}`;
         xvodM |= xvodM | main_gM.length;
      }
         serviceW += `${(serviceW == String.fromCharCode(109,0) ? parseInt(`${subtext3}`) : serviceW.length)}`;
         serviceW = `${parseInt(`${subtext3}`) / (Math.max(3, serviceW.length))}`;
      do {
          let suggestiona = String.fromCharCode(100,95,51,55,95,105,110,116,101,114,97,99,116,105,118,101,108,121,0);
          let debugN = 5;
          let configd = 3.0;
         serviceW = `${parseInt(`${subtext3}`)}`;
         suggestiona = `${debugN}`;
         debugN *= 2;
         configd /= Math.max(1, parseFloat(`${3 & debugN}`));
         if (3612400 == serviceW.length) {
            break;
         }
      } while ((3612400 == serviceW.length) && (1 == (5 ^ serviceW.length) && (parseInt(`${subtext3}`) / (Math.max(serviceW.length, 4))) == 5));
       let iconnointernetJ = 2.0;
       let subbasketballplayert = 5.0;
      firebaseu = 16.37 >= libavdeviceR;
   while (4 > (resend1.length << (Math.min(Math.abs(4), 4)))) {
       let complete7 = String.fromCharCode(103,105,103,97,103,114,111,117,112,95,50,95,56,50,0);
      for (let k = 0; k < 3; k++) {
         complete7 += `${complete7.length >> (Math.min(Math.abs(3), 4))}`;
      }
         complete7 = `${complete7.length / 2}`;
          let backwhiteR = new Map([[String.fromCharCode(117,115,105,110,103,95,102,95,54,57,0),String.fromCharCode(114,97,100,98,95,114,95,56,51,0)], [String.fromCharCode(114,97,99,101,95,121,95,50,56,0),String.fromCharCode(101,95,50,49,95,112,108,97,110,101,0)]]);
          let with_3j = String.fromCharCode(97,95,56,52,95,109,101,100,105,97,115,0);
          let analyticsa = 5;
         complete7 = `${with_3j.length}`;
         backwhiteR[`${analyticsa}`] = backwhiteR.size ^ 2;
         with_3j += `${3 % (Math.max(2, backwhiteR.size))}`;
         analyticsa += backwhiteR.size % 2;
      eventv.push(2);
      break;
   }
   do {
       let awayplayerL = String.fromCharCode(97,95,57,48,95,114,101,117,112,108,111,97,100,101,100,0);
         awayplayerL = `${awayplayerL.length / 1}`;
      for (let w = 0; w < 2; w++) {
         awayplayerL = `${awayplayerL.length}`;
      }
         awayplayerL = `${awayplayerL.length}`;
      smallbrightnessJ = `${eventv.length % 3}`;
      if (smallbrightnessJ == String.fromCharCode(55,51,53,52,0)) {
         break;
      }
   } while ((smallbrightnessJ == String.fromCharCode(55,51,53,52,0)) && (3 <= (pointS % 4)));
      views3 = [(String.fromCharCode(83,0) == sigmobG ? sigmobG.length : parseInt(`${predictionwini}`))];
   for (let t = 0; t < 3; t++) {
       let floatingf = new Map([[String.fromCharCode(110,117,109,112,97,100,95,112,95,49,54,0),true ], [String.fromCharCode(117,110,97,118,97,105,108,97,98,101,95,48,95,54,48,0),false ], [String.fromCharCode(110,95,55,57,95,112,101,114,99,101,110,116,97,103,101,0),true ]]);
         floatingf[`${floatingf.size}`] = 1;
         floatingf[`${floatingf.size}`] = 2 | floatingf.size;
      do {
         floatingf = new Map([[`${floatingf.size}`, 1 + floatingf.size]]);
         if (floatingf.size == 2578173) {
            break;
         }
      } while ((5 < (floatingf.size * floatingf.size)) && (floatingf.size == 2578173));
      predictionwini += eventv.length / 1;
   }
   do {
       let profileframe_ = new Map([[String.fromCharCode(98,101,99,97,117,115,101,95,106,95,53,53,0),102], [String.fromCharCode(122,95,50,52,95,115,117,102,102,105,120,0),670]]);
       let tempnodatae = String.fromCharCode(101,107,121,95,54,95,49,56,0);
       let googleN = String.fromCharCode(117,95,53,48,95,114,101,115,105,108,105,101,110,99,101,0);
       let stringsY = [94, 510, 255];
      while ((stringsY.length % (Math.max(4, googleN.length))) < 1 || 3 < (googleN.length % 1)) {
         googleN = `${googleN.length}`;
         break;
      }
         profileframe_[`${tempnodatae}`] = tempnodatae.length;
      if (1 < (5 + profileframe_.size)) {
         stringsY.push(profileframe_.size + 1);
      }
      do {
          let rootu = 4.0;
          let buttonX = true;
         profileframe_ = new Map([[`${rootu}`, 3]]);
         rootu /= Math.max(2, ((buttonX ? 1 : 4) | (buttonX ? 3 : 5)));
         if (2239317 == profileframe_.size) {
            break;
         }
      } while (((3 >> (Math.min(3, Math.abs(profileframe_.size)))) >= 5 || 3 >= (3 >> (Math.min(1, tempnodatae.length)))) && (2239317 == profileframe_.size));
      do {
          let relateds = String.fromCharCode(118,95,54,52,95,110,101,108,108,121,109,111,115,101,114,0);
          let weibo7 = 5.0;
          let matchdetailbgb = new Map([[String.fromCharCode(99,97,116,95,54,95,56,0),27], [String.fromCharCode(109,109,97,112,95,120,95,52,54,0),509]]);
          let basketballmatchdetailbgO = String.fromCharCode(112,114,101,118,105,101,119,112,112,95,101,95,50,48,0);
         tempnodatae = `${matchdetailbgb.size >> (Math.min(Math.abs(3), 5))}`;
         relateds = `${(String.fromCharCode(102,0) == relateds ? relateds.length : basketballmatchdetailbgO.length)}`;
         weibo7 *= basketballmatchdetailbgO.length;
         matchdetailbgb[basketballmatchdetailbgO] = relateds.length ^ basketballmatchdetailbgO.length;
         if (tempnodatae == String.fromCharCode(102,57,56,0)) {
            break;
         }
      } while ((tempnodatae == String.fromCharCode(102,57,56,0)) && (1 == (tempnodatae.length * profileframe_.size) || 1 == (tempnodatae.length * profileframe_.size)));
      do {
          let viewer7 = false;
          let videocommonv = [36, 348, 816];
         stringsY.push(3);
         viewer7 = (videocommonv.length ^ videocommonv.length) >= 96;
         if (977156 == stringsY.length) {
            break;
         }
      } while ((977156 == stringsY.length) && (2 > tempnodatae.length));
         googleN += `${googleN.length}`;
       let refreshJ = String.fromCharCode(118,95,54,95,104,100,110,111,100,101,0);
       let imageactionliveI = String.fromCharCode(115,95,56,49,95,115,121,109,111,100,100,0);
          let downloadn = false;
          let large9 = String.fromCharCode(113,95,53,55,95,108,97,115,116,0);
         imageactionliveI = "1";
         downloadn = large9.length >= 21;
         large9 = `${large9.length << (Math.min(large9.length, 1))}`;
      while (1 == (1 + profileframe_.size) || 3 == (1 + refreshJ.length)) {
          let complete4 = 4.0;
          let crossT = [703, 312];
          let showlessJ = String.fromCharCode(102,112,109,98,95,119,95,57,56,0);
          let turndown6 = new Map([[String.fromCharCode(108,95,55,54,95,115,116,111,112,101,100,0),true ], [String.fromCharCode(114,101,102,101,114,114,101,114,95,50,95,52,55,0),false ], [String.fromCharCode(114,101,103,105,115,116,101,114,102,100,115,95,98,95,54,54,0),true ]]);
         profileframe_ = new Map([[`${stringsY.length}`, imageactionliveI.length / (Math.max(8, stringsY.length))]]);
         complete4 *= 2 << (Math.min(5, showlessJ.length));
         crossT.push(2 / (Math.max(9, crossT.length)));
         showlessJ = `${showlessJ.length * crossT.length}`;
         turndown6[showlessJ] = showlessJ.length ^ 3;
         break;
      }
       let predictionlossu = 1;
      if ((stringsY.length - 1) <= 4) {
         stringsY = [(String.fromCharCode(87,0) == imageactionliveI ? profileframe_.size : imageactionliveI.length)];
      }
      eventv.push(tempnodatae.length);
      if (1455941 == eventv.length) {
         break;
      }
   } while ((!resend1.includes(eventv.length)) && (1455941 == eventv.length));
   if (smallbrightnessJ.length == predictionwini) {
      smallbrightnessJ += `${resend1.length * 1}`;
   }
   while (sigmobG.length < 3) {
      sigmobG += `${(String.fromCharCode(122,0) == sigmobG ? parseInt(`${libavdeviceR}`) : sigmobG.length)}`;
      break;
   }
       let suggestion2 = true;
      do {
         suggestion2 = suggestion2 || suggestion2;
         if (suggestion2 ? !suggestion2 : suggestion2) {
            break;
         }
      } while ((suggestion2 ? !suggestion2 : suggestion2) && (suggestion2));
         suggestion2 = !suggestion2;
         suggestion2 = !suggestion2 || suggestion2;
      pointS /= Math.max(3 + sigmobG.length, 3);

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
