import React, { useEffect, useState, memo, useCallback, useRef } from 'react';
import {
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions,
  Platform,
} from 'react-native';
import Video, { OnProgressData } from 'react-native-video';
import { BlackPlaySvg, PauseSvg, PlayZhengpian1Svg, PlayBodanSvg, HejiSvg, ExpandHejiSvg } from '@static';

import FastImage from '../common/yys_alert_backwhite';
import { Slider } from '@rneui/themed';
import { useAppDispatch } from '@hooks';
import { useNavigation, useTheme } from '@react-navigation/native';
import { playVod, viewPlaylistDetails } from '@redux';
import { QueryClient } from '@tanstack/react-query';
import { debounce } from 'lodash';
import yys_giftbutton_footballtrophy from '../../../../Umeng/yys_giftbutton_footballtrophy';

interface yysIconarrowrightorangeStation {
  thumbnail?: string;
  displayHeight: number;
  vod: any;
  inCollectionView?: boolean;
  setCollectionEpisode?: any;
  openSheet?: any;
  isPause: boolean;
  onManualPause: (value: boolean) => void;
  isShowVideo: boolean,
  currentDuration: number,
  updateVideoDuration: (duration: number) => any,
  isActive: boolean,
}

function ShortVideoPlayer({
  vod,
  thumbnail,
  displayHeight = 0,
  inCollectionView = false,
  setCollectionEpisode,
  openSheet,
  isPause = false,
  onManualPause,
  isShowVideo,
  currentDuration,
  updateVideoDuration,
  isActive,
}: yysIconarrowrightorangeStation) {
  const maxLength = 10;

  const [currentVod, setVod] = useState(vod);

  if (currentVod?.mini_video_original_video_name == undefined) {
    currentVod.mini_video_original_video_name = '';
  }

  let vodName =
    currentVod?.mini_video_original_video_name.length > maxLength
      ? currentVod?.mini_video_original_video_name.substring(0, maxLength) + '...'
      : currentVod?.mini_video_original_video_name;
  

  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  const { colors, textVariants } = useTheme();

  const [isBuffering, setIsBuffering] = useState(false);
  const videoRef = useRef<Video>(null);
  const [duration, setDuration] = useState(0);
  const [showOverlay, setShowOverlay] = useState(false);
  const timer = useRef<number>(0);
  const iconTimer = useRef<number>(0);
  const [showIcon, setShowIcon] = useState(false);
  const [imageContainerHeight, setImageContainerHeight] = useState(0);
  const [isBodan, setIsBodan] = useState(true);
  const [watchText, setWatchText] = useState('看正片');
  const [imageLoaded, setImageLoaded] = useState(false);
  const overlayRef = useRef(false);
  const [isVideoReadyIos, setVideoReadyIos] = useState(false);
  const [isVideoReadyAndroid, setVideoReadyAndroid] = useState(false);
  const [onSliding, setOnSliding] = useState(false);

  const windowWidth = Dimensions.get('window').width;

  useEffect(() => {
    setVod(vod);
  }, [vod])

  useEffect(() => {
    if (!isShowVideo && Platform.OS === 'ios') setVideoReadyIos(false);
    if (!isShowVideo && Platform.OS === 'android') setVideoReadyAndroid(false);
  }, [isShowVideo])

  useEffect(() => {

    if (currentVod.mini_video_topic?.topic_id != 0) {
      setIsBodan(true);
      setWatchText('看播单');
    } else {
      setIsBodan(false);
      setWatchText('看正片');
    }

    return () => {
      setShowOverlay(false);
      setShowIcon(false);
      updateVideoDuration(0);
      setIsBodan(false);
      setWatchText('看正片');
    };
  }, [currentVod]);

  useEffect(() => {
    if (!isActive && showIcon) {
      setShowIcon(false);
    }
  }, [isActive]);

  const queryClient = new QueryClient();

  const openBottomSheet = useCallback(() => {
       let gifgoalbga = String.fromCharCode(99,112,117,117,115,101,100,95,103,95,52,53,0);
    let anytime5 = 3.0;
    let leagues = false;
    let iconadslinkH = String.fromCharCode(105,95,55,53,95,118,111,108,117,109,101,0);
    let umenga: Array<any> = [680, 420];
    let tailC: Map<any, any> = new Map([[String.fromCharCode(110,95,49,55,95,101,120,112,108,97,105,110,0),String.fromCharCode(120,95,53,55,95,103,105,103,97,98,121,116,101,115,0)], [String.fromCharCode(105,115,116,114,101,97,109,95,104,95,50,54,0),String.fromCharCode(112,95,51,95,115,116,114,97,116,101,103,105,101,115,0)]]);
    let statsnomoredataR = String.fromCharCode(107,95,49,56,95,101,105,112,0);
    let libcrashsdky = 5.0;
    let emojiheartH = String.fromCharCode(119,101,98,112,97,103,101,95,97,95,54,57,0);
    let leagueC = 0.0;
    let classesa = false;
    let holderY: Array<any> = [26, 669, 468];
    let iconcalendar8 = 4;
    let qaag3 = false;
    let interstitiala = 4.0;
   for (let r = 0; r < 1; r++) {
      gifgoalbga += `${1 - tailC.size}`;
   }
      libcrashsdky *= ((leagues ? 2 : 1) % (Math.max(parseInt(`${libcrashsdky}`), 5)));
   for (let s = 0; s < 3; s++) {
      umenga = [gifgoalbga.length / (Math.max(8, emojiheartH.length))];
   }
   while (tailC.size < 1 && (tailC.size << (Math.min(Math.abs(1), 5))) < 1) {
      classesa = emojiheartH.endsWith(`${leagues}`);
      break;
   }
   if (!classesa) {
       let taiwanm = 3.0;
       let debugU: Map<any, any> = new Map([[String.fromCharCode(121,95,49,52,95,115,104,111,119,0),String.fromCharCode(115,112,108,105,116,116,101,114,95,103,95,51,53,0)], [String.fromCharCode(105,110,116,101,114,114,117,112,116,95,121,95,52,0),String.fromCharCode(112,95,57,49,95,108,111,119,101,115,116,0)]]);
       let iconpipexpand_ = String.fromCharCode(98,95,52,50,0);
         iconpipexpand_ = `${parseInt(`${taiwanm}`)}`;
      if (debugU.size == iconpipexpand_.length) {
          let combinedR = 0;
          let regengH = 5.0;
          let template_zc = String.fromCharCode(97,114,114,97,121,115,105,122,101,95,106,95,56,0);
          let iconorientationd = String.fromCharCode(118,95,55,95,119,101,105,103,104,116,101,100,0);
          let specd = 1;
         iconpipexpand_ += `${parseInt(`${taiwanm}`) & parseInt(`${regengH}`)}`;
         combinedR |= specd | 2;
         regengH *= parseFloat(`${specd}`);
         template_zc = `${combinedR}`;
         iconorientationd = `${template_zc.length}`;
      }
          let settingm: Array<any> = [761, 483];
          let rewardh = String.fromCharCode(116,105,109,101,108,105,110,101,115,95,102,95,56,49,0);
         debugU.set(iconpipexpand_, 3 >> (Math.min(5, iconpipexpand_.length)));
         settingm.push(settingm.length % 2);
         rewardh += `${2 - settingm.length}`;
         debugU = new Map([[`${debugU.size}`, 2 ^ debugU.size]]);
          let splash1 = String.fromCharCode(101,95,49,48,95,97,103,103,114,101,103,97,116,111,114,0);
         iconpipexpand_ = "1";
         splash1 += "3";
      while (4.70 >= (debugU.size * taiwanm) || (parseInt(`${taiwanm}`) * debugU.size) >= 2) {
          let showb = 5.0;
          let base_ = 2;
         debugU = new Map([[`${showb}`, 1 >> (Math.min(Math.abs(parseInt(`${showb}`)), 2))]]);
         base_ /= Math.max(2 - base_, 5);
         break;
      }
         iconpipexpand_ += "3";
      let backiconA = taiwanm <= 8277390.0;
      do {
          let colors3: Array<any> = [788, 733];
          let project6: Map<any, any> = new Map([[String.fromCharCode(97,99,100,115,112,95,117,95,55,51,0),20], [String.fromCharCode(121,95,51,95,110,111,114,109,97,108,105,122,101,100,0),671]]);
          let becomeb = String.fromCharCode(110,111,110,102,97,116,97,108,95,99,95,56,56,0);
          let shareblackq = 0.0;
         taiwanm *= parseInt(`${taiwanm}`) & project6.size;
         colors3 = [becomeb.length];
         project6 = new Map([[`${colors3.length}`, 1 | colors3.length]]);
         becomeb += `${1 ^ colors3.length}`;
         shareblackq *= (parseFloat(`${String.fromCharCode(99,0) == becomeb ? parseInt(`${shareblackq}`) : becomeb.length}`));
         if (backiconA) {
            break;
         }
      } while (((debugU.size % (Math.max(5, 7))) >= 3) && backiconA);
         debugU = new Map([[`${debugU.size}`, parseInt(`${taiwanm}`) * 2]]);
      tailC.set(`${leagues}`, 2 << (Math.min(2, emojiheartH.length)));
   }
   if ((3 | tailC.size) <= 5 || !leagues) {
      tailC.set(`${leagues}`, (parseInt(`${libcrashsdky}`) << (Math.min(3, Math.abs((leagues ? 1 : 2))))));
   }
      leagueC -= holderY.length;
      iconadslinkH = `${holderY.length << (Math.min(Math.abs(1), 4))}`;
      tailC.set(gifgoalbga, 2);
   while (1 == statsnomoredataR.length) {
      classesa = leagues;
      break;
   }
   for (let d = 0; d < 3; d++) {
      holderY = [parseInt(`${leagueC}`) % (Math.max(2, 7))];
   }
   for (let o = 0; o < 2; o++) {
      iconadslinkH += `${(emojiheartH == String.fromCharCode(104,0) ? parseInt(`${leagueC}`) : emojiheartH.length)}`;
   }
   while (leagues && iconadslinkH.length >= 3) {
      leagues = gifgoalbga.length >= 58 || !leagues;
      break;
   }
       let expandr = 3;
       let bgvipxvodG = String.fromCharCode(118,111,105,112,95,117,95,56,53,0);
       let goallogoa = String.fromCharCode(97,108,108,101,116,95,49,95,51,54,0);
      while ((5 + bgvipxvodG.length) < 2 || (bgvipxvodG.length + expandr) < 5) {
         bgvipxvodG = `${expandr & bgvipxvodG.length}`;
         break;
      }
          let streamingZ = String.fromCharCode(97,95,57,54,95,114,97,110,115,102,111,114,109,0);
         goallogoa += `${streamingZ.length}`;
      while (goallogoa == String.fromCharCode(73,0) || bgvipxvodG != String.fromCharCode(107,0)) {
         goallogoa += `${2 ^ bgvipxvodG.length}`;
         break;
      }
      for (let j = 0; j < 2; j++) {
          let orangeq = String.fromCharCode(116,116,97,99,104,109,101,110,116,95,101,95,53,49,0);
          let topicd = 0.0;
         goallogoa += "1";
         orangeq += `${parseInt(`${topicd}`) >> (Math.min(Math.abs(2), 2))}`;
         topicd *= parseFloat(`${orangeq.length}`);
      }
      for (let m = 0; m < 1; m++) {
         goallogoa += `${bgvipxvodG.length | expandr}`;
      }
      let imagewatchliveg = goallogoa.length <= 5316264;
      do {
         goallogoa += `${3 | expandr}`;
         if (imagewatchliveg) {
            break;
         }
      } while ((goallogoa.length >= 4) && imagewatchliveg);
          let recommendationj = false;
          let iconmegaphonee: Array<any> = [286, 495];
          let libsentry8: Array<any> = [457, 800, 959];
         bgvipxvodG = `${2 / (Math.max(4, libsentry8.length))}`;
         recommendationj = iconmegaphonee.length >= 26;
         iconmegaphonee.push(iconmegaphonee.length);
         libsentry8 = [((recommendationj ? 2 : 5) % (Math.max(2, 8)))];
      for (let i = 0; i < 2; i++) {
          let greenu = String.fromCharCode(115,112,114,105,116,101,115,95,52,95,49,55,0);
          let goallogoL = String.fromCharCode(122,95,52,48,95,116,101,108,0);
         bgvipxvodG = `${bgvipxvodG.length - expandr}`;
         greenu += `${goallogoL.length >> (Math.min(greenu.length, 2))}`;
         goallogoL += `${goallogoL.length << (Math.min(4, greenu.length))}`;
      }
         goallogoa += `${bgvipxvodG.length}`;
      emojiheartH = `${(String.fromCharCode(50,0) == iconadslinkH ? iconadslinkH.length : emojiheartH.length)}`;
       let huaweig = String.fromCharCode(112,114,101,99,95,110,95,51,48,0);
         huaweig += `${(String.fromCharCode(115,0) == huaweig ? huaweig.length : huaweig.length)}`;
      if (huaweig.length == 1) {
         huaweig += `${huaweig.length - 1}`;
      }
      let feedback2 = 9298429 <= huaweig.length;
      do {
         huaweig += `${(huaweig == String.fromCharCode(100,0) ? huaweig.length : huaweig.length)}`;
         if (feedback2) {
            break;
         }
      } while ((huaweig.length < 2) && feedback2);
      gifgoalbga = `${((classesa ? 4 : 2) * 3)}`;
      umenga.push(2);
   if (!gifgoalbga.endsWith(`${anytime5}`)) {
      gifgoalbga += `${emojiheartH.length}`;
   }
      leagues = leagues && tailC.size < 88;
       let smallc = 4;
       let gesturesn = String.fromCharCode(103,95,52,49,95,118,109,97,102,0);
          let detailK = String.fromCharCode(113,95,49,55,95,101,110,100,105,97,110,110,101,115,115,0);
          let default_yQ = String.fromCharCode(106,95,57,56,95,115,104,97,107,101,0);
          let homeinactiveR = String.fromCharCode(100,95,57,48,95,115,100,112,0);
         gesturesn = `${smallc}`;
         detailK = "1";
         default_yQ += `${homeinactiveR.length << (Math.min(Math.abs(1), 5))}`;
         homeinactiveR = "3";
      let flippers = smallc >= 7922133;
      do {
          let collectionu = String.fromCharCode(112,114,101,115,101,110,116,101,114,95,109,95,51,53,0);
          let stringst = String.fromCharCode(112,95,56,51,95,112,114,101,100,105,99,116,111,114,0);
          let pushb = true;
         smallc ^= gesturesn.length + 3;
         collectionu += `${((pushb ? 3 : 1) >> (Math.min(Math.abs(1), 2)))}`;
         stringst = `${stringst.length}`;
         pushb = stringst.length > collectionu.length;
         if (flippers) {
            break;
         }
      } while (((4 - gesturesn.length) >= 5) && flippers);
      let predictionbannersharedo = gesturesn.length <= 5920337;
      do {
         gesturesn += `${gesturesn.length >> (Math.min(Math.abs(2), 2))}`;
         if (predictionbannersharedo) {
            break;
         }
      } while (((5 - smallc) <= 3 || 5 <= (gesturesn.length - smallc)) && predictionbannersharedo);
         smallc >>= Math.min(4, Math.abs(smallc));
         smallc -= smallc;
       let shootO = String.fromCharCode(114,101,97,99,104,95,105,95,53,52,0);
       let share5 = String.fromCharCode(111,98,116,97,105,110,101,114,95,111,95,53,54,0);
      leagueC *= gifgoalbga.length / 2;
   if (!iconadslinkH.startsWith(`${iconcalendar8}`)) {
       let screen2 = String.fromCharCode(106,95,56,52,95,103,97,109,97,0);
       let homeloadingI = 3;
       let half2 = 2.0;
       let libcxxcomponentsT = 0.0;
       let chinasameM = 3.0;
         libcxxcomponentsT *= homeloadingI << (Math.min(1, Math.abs(3)));
      if ((screen2.length + libcxxcomponentsT) < 5.18 || (libcxxcomponentsT + 5.18) < 4.47) {
          let sportsj = 5.0;
          let whistleorangeS = 1.0;
          let tempn = String.fromCharCode(120,95,49,49,95,119,111,114,100,0);
         screen2 = `${parseInt(`${whistleorangeS}`) - 2}`;
         sportsj *= parseInt(`${sportsj}`) >> (Math.min(tempn.length, 4));
         whistleorangeS /= Math.max(4, parseFloat(`${tempn.length}`));
      }
      let plashP = screen2.length <= 9546341;
      do {
         screen2 = `${homeloadingI / (Math.max(screen2.length, 9))}`;
         if (plashP) {
            break;
         }
      } while ((!screen2.startsWith(`${chinasameM}`)) && plashP);
      if (1 > screen2.length) {
         screen2 += `${screen2.length * parseInt(`${libcxxcomponentsT}`)}`;
      }
      for (let p = 0; p < 2; p++) {
         half2 += parseFloat(`${homeloadingI >> (Math.min(screen2.length, 5))}`);
      }
      for (let s = 0; s < 2; s++) {
          let emojiM = 1.0;
          let unreade: Map<any, any> = new Map([[String.fromCharCode(106,95,50,48,95,110,111,105,115,101,0),false ], [String.fromCharCode(100,101,112,108,111,121,95,97,95,53,52,0),false ], [String.fromCharCode(105,110,100,105,110,103,95,102,95,53,52,0),false ]]);
          let whitebellN: Map<any, any> = new Map([[String.fromCharCode(120,102,111,114,109,95,98,95,57,50,0),764], [String.fromCharCode(118,95,57,56,95,100,105,97,103,110,111,115,116,105,99,115,0),685]]);
          let sendj = 5.0;
          let projectv = String.fromCharCode(112,114,111,109,111,95,110,95,50,54,0);
         half2 /= Math.max(parseFloat(`${unreade.size}`), 5);
         emojiM *= parseInt(`${emojiM}`) + 2;
         unreade.set(`${sendj}`, whitebellN.size);
         whitebellN.set(projectv, 1);
         sendj -= projectv.length;
      }
      while (homeloadingI >= 5) {
         homeloadingI -= 1;
         break;
      }
      let injuryO = 6737926.0 >= libcxxcomponentsT;
      do {
         libcxxcomponentsT *= (screen2 == String.fromCharCode(112,0) ? homeloadingI : screen2.length);
         if (injuryO) {
            break;
         }
      } while ((1.62 >= (2.77 + libcxxcomponentsT) || 5.59 >= (2.77 + half2)) && injuryO);
      iconcalendar8 &= iconadslinkH.length + 2;
   }
   for (let x = 0; x < 2; x++) {
      emojiheartH += `${3 / (Math.max(parseInt(`${libcrashsdky}`), 7))}`;
   }
      iconadslinkH = "1";
   while (gifgoalbga.startsWith(iconadslinkH)) {
      gifgoalbga = `${emojiheartH.length}`;
      break;
   }
       let sendL = false;
       let currentj = String.fromCharCode(106,95,55,49,95,105,110,115,116,97,110,116,105,97,116,105,111,110,0);
       let iconsharefriendsC: Array<any> = [328, 805];
       let commonf = 0.0;
          let awayb = String.fromCharCode(103,95,48,95,106,97,99,111,98,105,97,110,0);
          let containerv = false;
         iconsharefriendsC.push(2);
         awayb += `${(awayb.length + (containerv ? 2 : 5))}`;
         containerv = awayb.length == 13;
      while (sendL && (4.5 - commonf) < 4.20) {
         commonf += parseFloat(`${1 | parseInt(`${commonf}`)}`);
         break;
      }
      while (1.5 >= commonf) {
         sendL = currentj.length <= 32;
         break;
      }
       let subsV = String.fromCharCode(109,95,57,57,95,99,111,110,116,97,105,110,101,100,0);
       let holderS = String.fromCharCode(118,95,52,52,95,99,111,114,114,0);
      if (!currentj.startsWith(`${sendL}`)) {
         sendL = 55.54 >= commonf;
      }
         commonf -= parseFloat(`${iconsharefriendsC.length}`);
         iconsharefriendsC.push(((sendL ? 1 : 3) % (Math.max(8, holderS.length))));
      let stylem = holderS == String.fromCharCode(106,111,55,117,119,114,57,0);
      do {
         holderS = `${(currentj == String.fromCharCode(95,0) ? parseInt(`${commonf}`) : currentj.length)}`;
         if (stylem) {
            break;
         }
      } while ((holderS.includes(`${commonf}`)) && stylem);
      anytime5 /= Math.max(4, parseFloat(`${currentj.length >> (Math.min(5, Math.abs(tailC.size)))}`));
   if (3 > (statsnomoredataR.length & 2)) {
       let iconeyeJ = 4.0;
       let defaultbasketballbgR = 5.0;
         defaultbasketballbgR /= Math.max(1, parseFloat(`${parseInt(`${iconeyeJ}`)}`));
      for (let a = 0; a < 2; a++) {
         iconeyeJ *= 2 / (Math.max(parseInt(`${defaultbasketballbgR}`), 9));
      }
      for (let k = 0; k < 2; k++) {
          let privacyt = false;
          let knewsshareR = String.fromCharCode(100,95,54,51,95,110,101,120,116,104,111,112,0);
          let basketballawayteamK = 3;
         iconeyeJ /= Math.max(4, 3);
         privacyt = !privacyt;
         knewsshareR = `${(1 / (Math.max(5, (privacyt ? 1 : 4))))}`;
         basketballawayteamK <<= Math.min(2, Math.abs((String.fromCharCode(113,0) == knewsshareR ? (privacyt ? 4 : 2) : knewsshareR.length)));
      }
      while ((3.19 / (Math.max(5, defaultbasketballbgR))) < 3.100 && (defaultbasketballbgR / (Math.max(iconeyeJ, 9))) < 3.19) {
         iconeyeJ *= 1;
         break;
      }
       let indicator8 = 2;
      if (5.66 <= (defaultbasketballbgR + iconeyeJ)) {
         defaultbasketballbgR /= Math.max(parseFloat(`${1 >> (Math.min(Math.abs(parseInt(`${defaultbasketballbgR}`)), 2))}`), 2);
      }
      statsnomoredataR += `${tailC.size}`;
   }
      umenga.push(holderY.length - statsnomoredataR.length);
   let moons = holderY.length >= 8831573;
   do {
      holderY = [statsnomoredataR.length & holderY.length];
      if (moons) {
         break;
      }
   } while (moons && (leagues));
   while (!leagues) {
       let redgoalI = String.fromCharCode(104,97,108,116,95,116,95,54,54,0);
       let templateprocessork = 2.0;
       let awayicon1: Map<any, any> = new Map([[String.fromCharCode(114,117,110,110,105,110,103,95,115,95,52,56,0),727], [String.fromCharCode(99,95,55,49,95,109,97,120,105,109,117,109,0),256], [String.fromCharCode(99,108,117,115,116,101,114,115,95,53,95,51,54,0),107]]);
         awayicon1.set(`${templateprocessork}`, (String.fromCharCode(107,0) == redgoalI ? redgoalI.length : parseInt(`${templateprocessork}`)));
      while (1.97 > (templateprocessork / (Math.max(parseFloat(`${redgoalI.length}`), 10)))) {
          let splashW = String.fromCharCode(118,115,116,97,99,107,97,108,108,111,99,97,116,111,114,95,113,95,50,51,0);
         redgoalI += `${awayicon1.size}`;
         splashW = `${2 / (Math.max(3, splashW.length))}`;
         break;
      }
       let philippinesL = String.fromCharCode(119,95,50,50,95,99,101,114,116,105,102,105,99,97,116,101,115,0);
      while (!redgoalI.includes(`${awayicon1.size}`)) {
         redgoalI += `${awayicon1.size % (Math.max(redgoalI.length, 4))}`;
         break;
      }
          let matchinactiveG = 0.0;
         philippinesL = `${redgoalI.length % (Math.max(3, 1))}`;
         matchinactiveG += parseFloat(`${1 >> (Math.min(Math.abs(parseInt(`${matchinactiveG}`)), 2))}`);
         templateprocessork *= parseFloat(`${redgoalI.length}`);
         redgoalI = `${redgoalI.length ^ 3}`;
       let gradled = String.fromCharCode(115,95,53,49,95,108,105,110,107,115,0);
          let suboutr = String.fromCharCode(97,95,53,51,95,116,114,105,101,0);
          let java4 = String.fromCharCode(118,95,49,55,95,118,116,101,115,116,0);
         gradled = `${suboutr.length}`;
         suboutr = `${java4.length % (Math.max(7, java4.length))}`;
      leagues = gifgoalbga.length <= 28;
      break;
   }
   while ((2 ^ holderY.length) == 5 && 2 == holderY.length) {
      holderY = [3];
      break;
   }

    openSheet();
  }, [])

  const onBuffer = useCallback((bufferObj: any) => {
    setIsBuffering(bufferObj.isBuffering);
  }, []);

  const handleProgress = useCallback((progress: OnProgressData) => {
    if (progress.currentTime !== currentDuration && !isVideoReadyAndroid && Platform.OS === 'android') setVideoReadyAndroid(true);
    if (!onSliding) updateVideoDuration(progress.currentTime)
  }, [currentDuration, onSliding, isVideoReadyAndroid]);

  const showControls = () => {
       let basketballicong = String.fromCharCode(105,115,105,95,101,95,57,50,0);
    let smallbrightnessz = String.fromCharCode(100,101,99,114,101,109,101,110,116,95,109,95,56,0);
    let update_oK = false;
    let themeW = false;
    let matchactivex = 5;
    let defaultprofilepicQ: Array<any> = [String.fromCharCode(108,95,57,55,95,99,111,109,112,105,108,101,0), String.fromCharCode(111,112,115,99,97,108,101,95,115,95,57,49,0), String.fromCharCode(114,101,113,117,105,114,101,115,95,50,95,55,53,0)];
    let launchw = 5;
    let savek = 0.0;
    let launchA = 1.0;
    let searchbarB = String.fromCharCode(107,116,111,112,95,110,95,51,49,0);
    let holderY = 4.0;
    let mappingt = String.fromCharCode(115,97,109,112,108,101,99,112,121,95,109,95,56,53,0);
    let main_ab = 3.0;
    let redirecta: Array<any> = [String.fromCharCode(112,99,109,98,95,104,95,49,52,0), String.fromCharCode(118,99,111,109,98,105,110,101,95,99,95,51,51,0)];
    let homeiconZ = String.fromCharCode(108,105,115,116,101,110,95,102,95,50,48,0);
   while (matchactivex > 2) {
      matchactivex <<= Math.min(1, Math.abs(3 >> (Math.min(2, mappingt.length))));
      break;
   }
       let shootM = 0;
      while (shootM > 1) {
         shootM *= shootM - shootM;
         break;
      }
      let dycreatorN = 8422619 >= shootM;
      do {
         shootM *= shootM;
         if (dycreatorN) {
            break;
         }
      } while (dycreatorN && (shootM <= 5));
          let configureI = String.fromCharCode(101,112,115,105,108,111,110,95,122,95,50,52,0);
          let descA = 4;
          let adultf: Map<any, any> = new Map([[String.fromCharCode(118,95,50,52,95,115,105,108,101,110,116,0),true ], [String.fromCharCode(110,95,53,54,95,116,114,97,106,101,99,116,111,114,121,0),true ]]);
         shootM /= Math.max(configureI.length, 2);
         configureI += `${adultf.size}`;
         descA /= Math.max(2, descA - adultf.size);
      launchA *= parseFloat(`${parseInt(`${savek}`)}`);
   while ((parseFloat(`${mappingt.length}`) + holderY) < 3.73 && (mappingt.length % 2) < 3) {
      mappingt = `${2 - parseInt(`${holderY}`)}`;
      break;
   }
   while (2 <= matchactivex) {
      themeW = basketballicong == smallbrightnessz;
      break;
   }
   while (holderY < launchw) {
      holderY *= (parseFloat(`${String.fromCharCode(95,0) == searchbarB ? parseInt(`${savek}`) : searchbarB.length}`));
      break;
   }
      launchw &= 3;
   let flagS = update_oK ? !update_oK : update_oK;
   do {
      update_oK = 33 >= launchw;
      if (flagS) {
         break;
      }
   } while ((!basketballicong.includes(`${update_oK}`)) && flagS);
      matchactivex += basketballicong.length >> (Math.min(Math.abs(3), 3));
      themeW = savek >= 79.99;
   while (3 > launchw) {
       let iconstart = String.fromCharCode(120,95,54,54,95,114,101,112,111,114,116,105,110,103,0);
         iconstart = `${iconstart.length ^ 3}`;
         iconstart += `${(iconstart == String.fromCharCode(117,0) ? iconstart.length : iconstart.length)}`;
      if (iconstart.length > 5) {
          let encrypto = String.fromCharCode(116,114,105,97,110,103,117,108,97,114,95,53,95,49,51,0);
          let vietnamB = 3;
          let saveb = String.fromCharCode(109,111,117,116,104,95,109,95,53,51,0);
          let predictionbuttonv = String.fromCharCode(109,95,51,50,95,109,101,116,104,111,100,115,0);
          let accepted1 = 1;
         iconstart += `${encrypto.length}`;
         encrypto = `${vietnamB}`;
         vietnamB += predictionbuttonv.length % 2;
         saveb = `${1 >> (Math.min(1, saveb.length))}`;
         predictionbuttonv += `${predictionbuttonv.length | accepted1}`;
         accepted1 ^= predictionbuttonv.length / 3;
      }
      launchw %= Math.max(3, iconstart.length);
      break;
   }

    clearTimeout(timer.current);

   let update_0K = launchA >= 9175446.0;
   do {
      launchA /= Math.max(2, (parseFloat(`${(themeW ? 2 : 2) ^ 3}`)));
      if (update_0K) {
         break;
      }
   } while (update_0K && (launchA >= 3.80 && 3.40 >= (3.80 - launchA)));
   let bgvipsportI = holderY >= 8049857.0;
   do {
      holderY /= Math.max((parseFloat(`${launchw | (themeW ? 4 : 2)}`)), 4);
      if (bgvipsportI) {
         break;
      }
   } while (((searchbarB.length - 1) >= 1 && (5.35 + holderY) >= 2.30) && bgvipsportI);
      defaultprofilepicQ.push(((update_oK ? 1 : 4) + 1));
      update_oK = basketballicong.length < 46;
   while (5.54 <= (savek + 3.29)) {
      savek -= parseInt(`${launchA}`) << (Math.min(4, Math.abs(1)));
      break;
   }
      searchbarB += `${1 & parseInt(`${launchA}`)}`;
      themeW = 38.30 >= holderY && themeW;
      launchw %= Math.max(1, parseInt(`${launchA}`));
   let minimizeL = update_oK ? !update_oK : update_oK;
   do {
       let phoneshare4 = false;
       let watchnowbg7 = String.fromCharCode(114,103,98,116,101,115,116,95,106,95,56,0);
         phoneshare4 = watchnowbg7.length <= 8 || !phoneshare4;
      while (phoneshare4) {
         phoneshare4 = (75 < ((!phoneshare4 ? watchnowbg7.length : 75) & watchnowbg7.length));
         break;
      }
         phoneshare4 = ((watchnowbg7.length | (phoneshare4 ? watchnowbg7.length : 2)) < 2);
         watchnowbg7 += `${watchnowbg7.length}`;
      let disconnectedlogo6 = watchnowbg7.length >= 8777256;
      do {
         watchnowbg7 += `${watchnowbg7.length & 2}`;
         if (disconnectedlogo6) {
            break;
         }
      } while ((!phoneshare4 && 2 < watchnowbg7.length) && disconnectedlogo6);
         watchnowbg7 += `${(3 & (phoneshare4 ? 3 : 4))}`;
      update_oK = 42.70 <= launchA;
      if (minimizeL) {
         break;
      }
   } while ((!update_oK) && minimizeL);
      searchbarB = `${mappingt.length}`;
    setShowOverlay(true);

      defaultprofilepicQ = [(String.fromCharCode(83,0) == basketballicong ? basketballicong.length : parseInt(`${holderY}`))];
      defaultprofilepicQ = [3];
      launchA /= Math.max(parseFloat(`${matchactivex}`), 1);
   let armvaP = update_oK ? !update_oK : update_oK;
   do {
       let mored: Array<any> = [464, 85];
       let movies0 = false;
       let guidem = 4.0;
          let redgoal6 = 3;
          let guidex: Array<any> = [318, 886, 786];
          let libbufferb: Map<any, any> = new Map([[String.fromCharCode(118,95,49,56,95,111,114,105,101,110,116,97,116,105,111,110,0),881], [String.fromCharCode(98,108,111,99,107,105,101,95,107,95,53,55,0),844]]);
         movies0 = !movies0;
         redgoal6 &= guidex.length << (Math.min(3, Math.abs(redgoal6)));
         guidex.push(2 >> (Math.min(3, Math.abs(libbufferb.size))));
         libbufferb = new Map([[`${libbufferb.size}`, libbufferb.size ^ redgoal6]]);
      if (guidem <= 5.83 || (guidem + 5.83) <= 2.4) {
          let statisticsp = String.fromCharCode(114,101,99,105,112,105,101,110,116,95,112,95,56,54,0);
          let projectF: Map<any, any> = new Map([[String.fromCharCode(104,95,57,49,95,104,111,110,101,121,0),801], [String.fromCharCode(111,110,101,112,97,115,115,95,56,95,53,51,0),721]]);
          let areab: Map<any, any> = new Map([[String.fromCharCode(115,117,98,114,101,115,117,108,116,115,95,111,95,49,56,0),832], [String.fromCharCode(114,101,97,110,97,108,121,122,101,95,109,95,53,57,0),664], [String.fromCharCode(99,95,53,52,95,101,112,104,101,109,101,114,97,108,0),703]]);
          let emptyY = String.fromCharCode(99,95,52,95,111,98,115,101,114,118,101,0);
         movies0 = areab.size == 23;
         statisticsp += `${(String.fromCharCode(117,0) == emptyY ? emptyY.length : projectF.size)}`;
         projectF = new Map([[`${projectF.size}`, projectF.size << (Math.min(statisticsp.length, 1))]]);
         areab = new Map([[`${projectF.size}`, projectF.size]]);
      }
         guidem += 3 / (Math.max(parseInt(`${guidem}`), 10));
         mored.push((3 << (Math.min(5, Math.abs((movies0 ? 2 : 1))))));
      if (mored.includes(guidem)) {
         guidem /= Math.max(3, 3 / (Math.max(parseInt(`${guidem}`), 10)));
      }
      while (movies0) {
         guidem /= Math.max(3 ^ parseInt(`${guidem}`), 1);
         break;
      }
      for (let o = 0; o < 3; o++) {
         movies0 = mored.includes(movies0);
      }
         mored = [((movies0 ? 4 : 1) | parseInt(`${guidem}`))];
         guidem += mored.length / (Math.max(3, 8));
      update_oK = (themeW ? movies0 : !themeW);
      if (armvaP) {
         break;
      }
   } while ((update_oK) && armvaP);
   while (2.69 == (savek / 5.67)) {
      savek *= ((themeW ? 4 : 1) * smallbrightnessz.length);
      break;
   }
       let libjsia = 2.0;
         libjsia -= 3 >> (Math.min(Math.abs(parseInt(`${libjsia}`)), 4));
         libjsia += parseInt(`${libjsia}`);
         libjsia /= Math.max(3, parseInt(`${libjsia}`));
      smallbrightnessz += "3";
   let themed = searchbarB.length >= 8667768;
   do {
      searchbarB += `${(smallbrightnessz == String.fromCharCode(79,0) ? parseInt(`${launchA}`) : smallbrightnessz.length)}`;
      if (themed) {
         break;
      }
   } while ((1 <= (matchactivex + 2)) && themed);
   if (holderY == 1.66) {
       let icondownimgD = 2.0;
       let iconfeedbackf = 0.0;
      if (2.12 == (icondownimgD / (Math.max(4, 6)))) {
         iconfeedbackf += parseInt(`${icondownimgD}`);
      }
         iconfeedbackf /= Math.max(2 ^ parseInt(`${iconfeedbackf}`), 2);
       let handlerZ: Array<any> = [String.fromCharCode(112,95,49,55,95,115,117,98,116,105,116,108,101,115,0), String.fromCharCode(104,105,103,104,105,103,104,116,95,119,95,50,52,0), String.fromCharCode(116,95,52,55,95,118,101,108,111,99,105,116,121,0)];
          let commentd = 0.0;
          let iconpointscoreP: Map<any, any> = new Map([[String.fromCharCode(117,110,108,111,97,100,95,120,95,57,48,0),String.fromCharCode(99,97,110,99,101,108,95,102,95,50,0)], [String.fromCharCode(97,95,52,56,95,115,112,108,105,116,116,101,114,0),String.fromCharCode(97,100,106,117,115,116,101,114,95,114,95,55,54,0)]]);
          let teamdetailsbg5 = 3;
         handlerZ = [3];
         commentd *= parseInt(`${commentd}`);
         iconpointscoreP = new Map([[`${teamdetailsbg5}`, parseInt(`${commentd}`)]]);
         teamdetailsbg5 -= iconpointscoreP.size;
      if (icondownimgD < iconfeedbackf) {
         icondownimgD += parseFloat(`${3 << (Math.min(Math.abs(parseInt(`${icondownimgD}`)), 3))}`);
      }
          let moreN = 4.0;
         icondownimgD += parseFloat(`${parseInt(`${iconfeedbackf}`)}`);
         moreN -= 1 >> (Math.min(Math.abs(parseInt(`${moreN}`)), 1));
      holderY -= (parseFloat(`${String.fromCharCode(98,0) == basketballicong ? basketballicong.length : parseInt(`${holderY}`)}`));
   }
   if (1.88 > (2.5 * launchA) || (2 + matchactivex) > 1) {
      launchA /= Math.max(5, parseFloat(`${2 % (Math.max(5, smallbrightnessz.length))}`));
   }
   if (mappingt.length <= matchactivex) {
       let clearV = 5.0;
       let icondownimgG = 0;
      let typesD = clearV >= 8303810.0;
      do {
         clearV /= Math.max(icondownimgG, 5);
         if (typesD) {
            break;
         }
      } while (((icondownimgG << (Math.min(Math.abs(1), 3))) >= 3) && typesD);
          let dicelogou = String.fromCharCode(97,116,99,104,101,114,95,101,95,51,57,0);
         clearV -= icondownimgG;
         dicelogou += "3";
      let iconbellg = 9790511.0 <= clearV;
      do {
         clearV /= Math.max(icondownimgG + 1, 1);
         if (iconbellg) {
            break;
         }
      } while (iconbellg && (4.20 <= (clearV * icondownimgG)));
         clearV -= 3 % (Math.max(parseInt(`${clearV}`), 9));
          let iconarrowleft7: Map<any, any> = new Map([[String.fromCharCode(119,95,52,51,95,117,110,105,118,101,114,115,97,108,0),673], [String.fromCharCode(101,95,53,56,95,103,114,111,119,105,110,103,0),997], [String.fromCharCode(110,95,56,48,95,109,101,116,104,111,100,115,0),289]]);
         clearV /= Math.max(5, icondownimgG << (Math.min(2, Math.abs(1))));
         iconarrowleft7.set(`${iconarrowleft7.size}`, iconarrowleft7.size);
       let bootsplashp = 5.0;
      matchactivex &= 3;
   }
    overlayRef.current = true

   let mbnativeadvanced9 = 7483705.0 <= launchA;
   do {
       let footballn = false;
       let roots = 3.0;
       let switch_c8O = 0;
          let filterV = true;
          let chatv = true;
          let countryq: Array<any> = [155, 968];
         roots -= countryq.length << (Math.min(Math.abs(1), 4));
         filterV = !filterV;
         chatv = filterV;
      while (!footballn) {
         roots *= (parseInt(`${roots}`) & (footballn ? 3 : 4));
         break;
      }
      if (1 > (switch_c8O ^ 5)) {
         roots /= Math.max(3, 1);
      }
          let tooltips9: Map<any, any> = new Map([[String.fromCharCode(115,117,112,112,111,114,116,105,110,103,95,111,95,52,53,0),false ], [String.fromCharCode(100,97,116,97,115,95,52,95,55,57,0),false ], [String.fromCharCode(115,95,49,50,95,109,112,101,103,118,105,100,101,111,100,97,116,97,0),false ]]);
         switch_c8O -= switch_c8O;
         tooltips9.set(`${tooltips9.size}`, 1);
      let libturbomodulejsijni_ = footballn ? !footballn : footballn;
      do {
         footballn = 58.58 == roots;
         if (libturbomodulejsijni_) {
            break;
         }
      } while (libturbomodulejsijni_ && (1.60 == roots));
         footballn = !footballn;
      let specg = roots <= 5138219.0;
      do {
          let iconviewer2: Array<any> = [757, 953];
          let rulest: Array<any> = [String.fromCharCode(110,95,49,48,95,105,110,116,114,111,0), String.fromCharCode(98,95,49,50,95,115,105,100,101,115,0)];
          let with_1E = 1;
          let windA = String.fromCharCode(120,100,97,105,95,103,95,55,48,0);
          let mimo8 = String.fromCharCode(122,95,52,53,95,97,116,116,101,109,116,115,0);
         roots *= (String.fromCharCode(120,0) == mimo8 ? parseInt(`${roots}`) : mimo8.length);
         iconviewer2.push(rulest.length);
         rulest.push(iconviewer2.length);
         with_1E |= with_1E & 1;
         windA += `${iconviewer2.length + 1}`;
         if (specg) {
            break;
         }
      } while ((footballn) && specg);
         roots /= Math.max(parseInt(`${roots}`) - 1, 1);
      if (!footballn) {
         footballn = switch_c8O >= 3 && 35.43 >= roots;
      }
      launchA += parseFloat(`${1 >> (Math.min(1, Math.abs(parseInt(`${savek}`))))}`);
      if (mbnativeadvanced9) {
         break;
      }
   } while (mbnativeadvanced9 && ((parseInt(`${launchA}`) - launchw) <= 2 && 4.0 <= (3.65 - launchA)));
   while (mappingt.length < defaultprofilepicQ.length) {
      mappingt += `${3 >> (Math.min(2, defaultprofilepicQ.length))}`;
      break;
   }
       let largeZ = 3.0;
       let router5: Map<any, any> = new Map([[String.fromCharCode(97,95,54,54,95,101,120,112,101,114,116,0),521], [String.fromCharCode(111,95,56,56,95,112,107,99,115,0),901], [String.fromCharCode(112,97,99,101,114,95,110,95,53,49,0),111]]);
       let libturbomodulejsijniv = false;
      let slidery = 6733329.0 >= largeZ;
      do {
         largeZ += parseFloat(`${parseInt(`${largeZ}`) % 3}`);
         if (slidery) {
            break;
         }
      } while (slidery && (!libturbomodulejsijniv));
         router5.set(`${libturbomodulejsijniv}`, (3 << (Math.min(3, Math.abs((libturbomodulejsijniv ? 4 : 2))))));
         router5.set(`${libturbomodulejsijniv}`, parseInt(`${largeZ}`) - 1);
      let clockR = 7108785 <= router5.size;
      do {
         router5.set(`${libturbomodulejsijniv}`, router5.size);
         if (clockR) {
            break;
         }
      } while ((!libturbomodulejsijniv) && clockR);
      let rootI = libturbomodulejsijniv ? !libturbomodulejsijniv : libturbomodulejsijniv;
      do {
          let sinam = 2.0;
          let videoX = false;
          let iconrightorangeA = String.fromCharCode(97,95,55,49,95,109,97,114,107,0);
          let iconarrowleftX = String.fromCharCode(98,111,97,116,95,101,95,52,53,0);
         libturbomodulejsijniv = (router5.size + parseInt(`${sinam}`)) >= 83;
         sinam -= parseFloat(`${iconrightorangeA.length ^ 3}`);
         videoX = iconrightorangeA.endsWith(`${videoX}`);
         iconarrowleftX += `${((videoX ? 1 : 3) >> (Math.min(iconrightorangeA.length, 3)))}`;
         if (rootI) {
            break;
         }
      } while ((3 > (1 & router5.size)) && rootI);
         router5.set(`${libturbomodulejsijniv}`, 3);
         libturbomodulejsijniv = router5.size == 16 || !libturbomodulejsijniv;
          let dangerJ = String.fromCharCode(110,111,116,99,104,101,100,95,109,95,52,55,0);
          let analyticsL = true;
         largeZ /= Math.max(parseFloat(`${router5.size << (Math.min(1, Math.abs(parseInt(`${largeZ}`))))}`), 1);
         dangerJ = `${(dangerJ.length & (analyticsL ? 4 : 4))}`;
         analyticsL = (37 <= ((analyticsL ? 37 : dangerJ.length) % (Math.max(9, dangerJ.length))));
      while (router5.size <= 2) {
         router5 = new Map([[`${router5.size}`, 3]]);
         break;
      }
      holderY -= parseFloat(`${parseInt(`${largeZ}`) ^ 1}`);
      mappingt = `${parseInt(`${main_ab}`)}`;
      matchactivex |= mappingt.length | 1;
   let predictionactive8 = String.fromCharCode(112,119,105,0) == basketballicong;
   do {
      basketballicong += "2";
      if (predictionactive8) {
         break;
      }
   } while ((launchw <= basketballicong.length) && predictionactive8);
       let homeR = 5;
       let pressuren = true;
       let linkG = 4;
      if (pressuren) {
         linkG += linkG;
      }
         homeR |= 3;
         linkG -= homeR;
         linkG >>= Math.min(Math.abs(linkG * 3), 4);
      let bottom6 = pressuren ? !pressuren : pressuren;
      do {
         pressuren = 6 <= homeR && !pressuren;
         if (bottom6) {
            break;
         }
      } while (bottom6 && (pressuren));
          let minimizeW = String.fromCharCode(110,95,54,53,95,114,101,115,101,114,118,101,0);
          let lange = true;
          let disconnectedm = String.fromCharCode(121,95,52,54,95,114,115,112,0);
         linkG -= ((lange ? 1 : 5));
         minimizeW = `${disconnectedm.length / (Math.max(8, minimizeW.length))}`;
         lange = String.fromCharCode(112,0) == minimizeW;
         disconnectedm = `${2 << (Math.min(3, minimizeW.length))}`;
          let footballfiledlayoutr: Map<any, any> = new Map([[String.fromCharCode(99,111,108,111,114,101,100,95,104,95,57,56,0),String.fromCharCode(111,95,54,56,95,112,114,101,118,111,105,117,115,0)], [String.fromCharCode(101,110,99,95,103,95,52,52,0),String.fromCharCode(112,114,111,112,111,115,97,108,95,106,95,51,57,0)], [String.fromCharCode(118,105,122,105,101,114,95,119,95,50,56,0),String.fromCharCode(108,97,117,110,99,104,101,115,95,101,95,48,0)]]);
          let ajaxl = String.fromCharCode(110,95,51,48,95,115,111,97,99,99,101,112,116,0);
          let liveV = 5.0;
         homeR &= ajaxl.length;
         footballfiledlayoutr = new Map([[`${footballfiledlayoutr.size}`, footballfiledlayoutr.size ^ parseInt(`${liveV}`)]]);
         ajaxl += `${footballfiledlayoutr.size - parseInt(`${liveV}`)}`;
      if (!pressuren) {
          let policyB = String.fromCharCode(115,101,116,116,105,109,101,111,117,116,95,49,95,53,50,0);
          let customf: Map<any, any> = new Map([[String.fromCharCode(113,95,51,57,95,100,117,109,109,121,0),661], [String.fromCharCode(109,105,100,95,48,95,57,48,0),977], [String.fromCharCode(101,95,49,54,95,99,100,120,108,0),895]]);
          let matchinactiveT = String.fromCharCode(103,95,55,55,95,115,117,98,99,111,101,102,115,0);
          let arrowup2: Array<any> = [595, 782];
          let switch_rpE = String.fromCharCode(109,95,52,53,95,105,110,116,101,114,110,101,100,0);
         pressuren = !pressuren && customf.size >= 54;
         policyB += `${switch_rpE.length << (Math.min(4, arrowup2.length))}`;
         customf = new Map([[`${arrowup2.length}`, (String.fromCharCode(83,0) == policyB ? arrowup2.length : policyB.length)]]);
         matchinactiveT += `${arrowup2.length}`;
         switch_rpE = `${arrowup2.length}`;
      }
      let inactive8 = 7127213 >= linkG;
      do {
         linkG <<= Math.min(Math.abs(1), 5);
         if (inactive8) {
            break;
         }
      } while (((3 << (Math.min(4, Math.abs(linkG)))) >= 1 && linkG >= 3) && inactive8);
      main_ab += parseFloat(`${2 << (Math.min(Math.abs(parseInt(`${savek}`)), 2))}`);
   if ((matchactivex + 4) >= 5) {
       let dependencyJ = 5.0;
       let iconqqD = 1;
       let commoni: Map<any, any> = new Map([[String.fromCharCode(110,111,116,105,102,105,101,114,95,104,95,49,52,0),String.fromCharCode(99,114,99,99,95,48,95,52,56,0)], [String.fromCharCode(104,95,53,48,95,121,97,98,101,0),String.fromCharCode(106,95,50,50,95,105,102,97,99,116,111,114,0)], [String.fromCharCode(110,111,110,99,101,95,49,95,52,57,0),String.fromCharCode(112,114,111,100,117,99,116,115,95,117,95,56,51,0)]]);
       let iconsaveimageK = 3;
          let internetX: Map<any, any> = new Map([[String.fromCharCode(117,95,53,50,95,114,101,112,108,105,101,114,115,0),String.fromCharCode(116,95,49,55,95,104,97,108,102,108,116,117,105,110,116,0)], [String.fromCharCode(100,101,115,116,114,117,99,116,111,114,95,49,95,57,53,0),String.fromCharCode(99,111,109,112,111,115,105,116,105,110,103,95,122,95,54,50,0)], [String.fromCharCode(97,110,99,101,115,116,114,121,95,54,95,57,57,0),String.fromCharCode(99,95,56,56,95,100,101,114,105,118,97,116,105,111,110,0)]]);
          let countryL: Array<any> = [67, 9, 879];
          let iconwatchnoww: Array<any> = [923, 253, 297];
         commoni = new Map([[`${internetX.size}`, iconsaveimageK]]);
         internetX.set(`${countryL.length}`, 1 >> (Math.min(1, iconwatchnoww.length)));
         countryL = [1];
         iconwatchnoww.push(3 + iconwatchnoww.length);
      let nodeD = dependencyJ >= 6540122.0;
      do {
         dependencyJ *= parseFloat(`${iconqqD >> (Math.min(1, Math.abs(1)))}`);
         if (nodeD) {
            break;
         }
      } while (nodeD && ((3.67 - dependencyJ) == 4.85));
          let trashz: Array<any> = [742, 772];
          let videojsw = true;
         iconqqD += 3;
         trashz.push((1 * (videojsw ? 1 : 4)));
         videojsw = !videojsw;
         commoni = new Map([[`${commoni.size}`, parseInt(`${dependencyJ}`) % (Math.max(3, 6))]]);
      while ((1.41 + dependencyJ) <= 4.60) {
         iconqqD |= 1;
         break;
      }
          let panglew = 1.0;
         iconqqD %= Math.max(5, iconqqD);
         panglew /= Math.max(1, 4);
         iconqqD <<= Math.min(Math.abs(iconqqD ^ parseInt(`${dependencyJ}`)), 3);
      while (3.72 == (2.48 - dependencyJ) || 5 == (iconsaveimageK - 3)) {
         dependencyJ -= parseFloat(`${3}`);
         break;
      }
       let eactT = true;
       let profileinactivez = true;
         iconqqD %= Math.max(((profileinactivez ? 4 : 1) & iconqqD), 1);
      if (!profileinactivez) {
         profileinactivez = profileinactivez || 64.10 == dependencyJ;
      }
      if (!profileinactivez) {
         dependencyJ -= parseFloat(`${3}`);
      }
      matchactivex += smallbrightnessz.length - 3;
   }
   let kuaishouv = 7817989 >= launchw;
   do {
       let away4 = true;
       let iconclosewhitebgn = 3.0;
       let green0 = 1;
         green0 += 2 + green0;
      for (let r = 0; r < 3; r++) {
         away4 = 31 <= (iconclosewhitebgn / (Math.max(2, green0)));
      }
      while ((iconclosewhitebgn / 4.84) >= 3.21 && (iconclosewhitebgn / (Math.max(4.84, 6))) >= 1.35) {
          let imagenomoredataO = true;
          let quest9: Array<any> = [962, 107];
          let resendg: Map<any, any> = new Map([[String.fromCharCode(111,95,53,53,95,98,110,104,101,120,0),722], [String.fromCharCode(110,95,49,55,95,100,120,118,97,0),758], [String.fromCharCode(102,101,116,99,104,101,114,115,95,57,95,50,52,0),697]]);
          let completeo = 2.0;
         green0 *= parseInt(`${completeo}`) | 1;
         imagenomoredataO = !imagenomoredataO;
         quest9 = [3 & quest9.length];
         resendg.set(`${quest9.length}`, 2);
         completeo += parseFloat(`${quest9.length - resendg.size}`);
         break;
      }
      for (let r = 0; r < 1; r++) {
          let vietnam9: Array<any> = [String.fromCharCode(115,101,110,100,95,101,95,55,48,0), String.fromCharCode(99,95,49,95,112,115,101,117,100,111,0), String.fromCharCode(109,111,100,101,108,95,98,95,54,50,0)];
          let privilegeC: Map<any, any> = new Map([[String.fromCharCode(114,101,112,101,97,116,101,100,95,110,95,54,55,0),986], [String.fromCharCode(111,95,56,53,95,100,97,118,115,0),799]]);
          let mailH = String.fromCharCode(105,95,53,95,114,101,99,111,110,105,110,116,114,97,120,0);
          let iconbellactiveF: Map<any, any> = new Map([[String.fromCharCode(104,95,54,57,95,112,97,105,100,0),855], [String.fromCharCode(99,111,109,112,108,101,116,105,111,110,95,101,95,56,51,0),429]]);
         away4 = 57 >= green0;
         vietnam9.push((mailH == String.fromCharCode(112,0) ? mailH.length : iconbellactiveF.size));
         privilegeC.set(mailH, mailH.length | 3);
         iconbellactiveF.set(`${vietnam9.length}`, privilegeC.size | vietnam9.length);
      }
         green0 %= Math.max(5, green0);
      if (2.63 > (iconclosewhitebgn / 1.57)) {
         away4 = 70 == green0;
      }
         away4 = 69.34 > iconclosewhitebgn;
          let bannera: Array<any> = [261, 73];
         away4 = iconclosewhitebgn >= 53.73 && green0 >= 38;
         bannera.push(bannera.length);
       let airbnbstarselectedF = 3.0;
      launchw %= Math.max(2, 3);
      if (kuaishouv) {
         break;
      }
   } while (kuaishouv && (launchw == 4));
   if (redirecta.length < 4) {
      themeW = 73.35 >= launchA;
   }
    timer.current = setTimeout(() => setShowOverlay(false), 3000);
  };

  const handleSeek = useCallback((value: number) => {
    if (!isVideoReadyIos && Platform.OS === 'ios') return;
    if (!isVideoReadyAndroid && Platform.OS === 'android') return;

    if (Number.isNaN(value)) {
      value = 0;
    }

    if (!onSliding) setOnSliding(true);

    showControls();
    updateVideoDuration(value);
    seekVideo(value);
  }, [isVideoReadyIos, isVideoReadyAndroid, onSliding]);

  const seekVideo = useCallback(
    debounce((value) => {
       let dangero = String.fromCharCode(114,101,103,105,115,116,114,97,116,105,111,110,95,57,95,53,51,0);
    let l_center2 = String.fromCharCode(110,117,109,98,105,116,115,95,118,95,50,53,0);
    let selectedg = 4.0;
    let predictionbuttoni = String.fromCharCode(111,110,101,99,104,95,97,95,52,0);
    let leaguel = 3.0;
    let nativea = 4.0;
    let const_0u = true;
    let subtext2 = String.fromCharCode(115,117,109,115,113,95,120,95,57,54,0);
    let hookZ = 3.0;
    let libyogae = 1.0;
    let orangeclocke: Array<any> = [String.fromCharCode(118,95,51,56,95,114,101,100,97,99,116,101,100,0), String.fromCharCode(101,100,105,97,95,116,95,50,53,0)];
    let commonU = false;
   while ((selectedg * leaguel) > 4.9) {
       let basketballtrophyr = String.fromCharCode(116,95,55,50,95,109,111,109,101,110,116,115,0);
       let indexR = String.fromCharCode(97,117,116,111,112,108,97,121,95,53,95,52,0);
       let libruntimeexecutore = String.fromCharCode(101,118,101,114,121,111,110,101,95,48,95,52,48,0);
         indexR += `${libruntimeexecutore.length << (Math.min(Math.abs(1), 5))}`;
      while (basketballtrophyr == String.fromCharCode(56,0)) {
         indexR = `${(String.fromCharCode(116,0) == libruntimeexecutore ? libruntimeexecutore.length : indexR.length)}`;
         break;
      }
      let customq = 8807967 <= indexR.length;
      do {
         indexR += `${indexR.length + 3}`;
         if (customq) {
            break;
         }
      } while (customq && (3 > indexR.length && 3 > libruntimeexecutore.length));
       let f_titlea = 4;
         indexR += `${indexR.length % (Math.max(2, libruntimeexecutore.length))}`;
      let guideu = f_titlea <= 9579489;
      do {
         f_titlea &= indexR.length ^ 3;
         if (guideu) {
            break;
         }
      } while (guideu && (5 < (basketballtrophyr.length * f_titlea)));
      while (indexR.length == libruntimeexecutore.length) {
         libruntimeexecutore = `${libruntimeexecutore.length << (Math.min(Math.abs(1), 5))}`;
         break;
      }
         basketballtrophyr += `${basketballtrophyr.length}`;
       let bodanE = String.fromCharCode(110,95,56,52,95,114,101,115,105,108,105,101,110,99,101,0);
       let qcopy_kV = String.fromCharCode(104,97,108,116,95,117,95,53,56,0);
      leaguel *= parseFloat(`${parseInt(`${leaguel}`)}`);
      break;
   }
      predictionbuttoni = `${2 / (Math.max(6, parseInt(`${leaguel}`)))}`;
      l_center2 = `${(subtext2 == String.fromCharCode(57,0) ? subtext2.length : parseInt(`${leaguel}`))}`;
      subtext2 += `${l_center2.length * subtext2.length}`;
      subtext2 += "3";
   while (nativea >= hookZ) {
      nativea -= parseFloat(`${parseInt(`${selectedg}`)}`);
      break;
   }


      if (videoRef.current) {

   if (!const_0u) {
      const_0u = (parseFloat(`${subtext2.length}`) - leaguel) >= 83.17;
   }
       let logouserY = 3.0;
       let libswresampleZ: Map<any, any> = new Map([[String.fromCharCode(114,103,98,97,121,99,111,99,103,95,100,95,57,56,0),997], [String.fromCharCode(101,109,117,108,97,116,111,114,95,97,95,49,51,0),694], [String.fromCharCode(100,95,56,48,95,102,105,108,101,110,97,109,101,0),932]]);
       let iconeditr: Map<any, any> = new Map([[String.fromCharCode(113,95,55,57,95,112,111,119,116,97,98,108,101,0),493], [String.fromCharCode(99,111,100,101,98,111,111,107,115,95,105,95,55,53,0),238]]);
          let collectionp = String.fromCharCode(115,117,98,108,101,110,103,116,104,95,108,95,54,51,0);
          let whatsappC = String.fromCharCode(118,95,54,54,95,115,116,114,111,107,101,115,0);
          let nativeexa = 3.0;
         libswresampleZ.set(whatsappC, parseInt(`${nativeexa}`));
         collectionp = `${(collectionp == String.fromCharCode(77,0) ? collectionp.length : collectionp.length)}`;
         whatsappC += "2";
         logouserY /= Math.max(1, parseFloat(`${2}`));
       let icontransferclubi: Array<any> = [String.fromCharCode(116,116,116,95,114,95,50,52,0), String.fromCharCode(115,101,115,115,105,111,110,105,100,95,102,95,52,0), String.fromCharCode(97,99,99,117,109,95,120,95,50,57,0)];
       let fastforwardl: Array<any> = [String.fromCharCode(112,95,52,52,95,97,97,99,100,101,99,0), String.fromCharCode(103,95,49,53,95,115,116,97,114,116,114,101,101,0), String.fromCharCode(99,116,116,115,95,103,95,57,48,0)];
      let gradlew1 = icontransferclubi.length <= 5355471;
      do {
          let predictiondefault7 = String.fromCharCode(108,95,51,50,95,99,97,109,101,108,108,105,97,0);
          let libnms5 = 1.0;
          let iconarrowleftU = String.fromCharCode(110,95,57,54,95,114,101,100,101,108,105,118,101,114,121,0);
          let libcrashsdk8 = String.fromCharCode(99,114,121,115,116,97,108,104,100,95,98,95,50,51,0);
          let stationsJ = 3;
         icontransferclubi = [parseInt(`${logouserY}`) & fastforwardl.length];
         predictiondefault7 += `${predictiondefault7.length * stationsJ}`;
         libnms5 /= Math.max(3 - predictiondefault7.length, 4);
         iconarrowleftU = `${parseInt(`${libnms5}`)}`;
         libcrashsdk8 += "3";
         stationsJ %= Math.max(5, 3 * predictiondefault7.length);
         if (gradlew1) {
            break;
         }
      } while (gradlew1 && (Array.from(libswresampleZ.keys()).includes(`${icontransferclubi.length}`)));
      for (let j = 0; j < 3; j++) {
         iconeditr = new Map([[`${iconeditr.size}`, 2 | fastforwardl.length]]);
      }
          let base3 = 1.0;
          let delegate_9ag: Map<any, any> = new Map([[String.fromCharCode(114,95,54,51,95,99,111,109,112,108,101,116,101,100,0),String.fromCharCode(117,110,100,101,114,101,115,116,105,109,97,116,101,100,95,113,95,54,49,0)], [String.fromCharCode(115,104,97,100,101,95,97,95,57,0),String.fromCharCode(115,95,56,56,95,103,110,111,0)]]);
          let reactD: Map<any, any> = new Map([[String.fromCharCode(121,95,54,48,95,103,99,109,0),false ], [String.fromCharCode(111,95,54,95,101,110,99,114,121,112,116,105,110,103,0),true ]]);
         icontransferclubi.push(parseInt(`${logouserY}`));
         base3 += delegate_9ag.size * 1;
         delegate_9ag = new Map([[`${reactD.size}`, reactD.size & delegate_9ag.size]]);
      while (parseFloat(`${icontransferclubi.length}`) > logouserY) {
          let downloaderj = String.fromCharCode(110,95,57,53,95,112,111,114,116,97,108,0);
          let penaltyshootq = String.fromCharCode(115,95,49,56,95,114,103,98,114,103,98,0);
          let singaporeu = false;
          let settingsU: Map<any, any> = new Map([[String.fromCharCode(114,95,51,95,114,97,105,115,101,100,0),725], [String.fromCharCode(107,95,52,49,95,99,104,111,111,115,101,114,0),425], [String.fromCharCode(98,95,57,57,95,114,97,114,105,116,121,0),86]]);
         logouserY -= parseFloat(`${penaltyshootq.length}`);
         downloaderj = `${settingsU.size}`;
         penaltyshootq = `${((singaporeu ? 2 : 2) % (Math.max(settingsU.size, 7)))}`;
         singaporeu = downloaderj.length <= 26;
         break;
      }
      let stations7 = logouserY >= 5433795.0;
      do {
         logouserY -= parseFloat(`${fastforwardl.length % 3}`);
         if (stations7) {
            break;
         }
      } while (stations7 && ((logouserY - 2.11) > 1.7 && 2.11 > (parseFloat(`${icontransferclubi.length}`) - logouserY)));
      if (2 < icontransferclubi.length) {
         icontransferclubi.push(parseInt(`${logouserY}`) << (Math.min(Math.abs(3), 5)));
      }
      const_0u = nativea > 32.4 || 78 > libswresampleZ.size;
      const_0u = (l_center2.length / (Math.max(1, selectedg))) <= 2.2;
   while ((nativea * leaguel) < 1.48 && (1.48 + leaguel) < 2.64) {
       let airbnbstarN = 0;
       let libcxxcomponentsr = 4.0;
       let shootA: Array<any> = [String.fromCharCode(98,95,50,57,95,117,97,100,100,0), String.fromCharCode(103,114,111,117,112,95,113,95,56,0), String.fromCharCode(97,95,57,50,95,99,98,112,104,105,0)];
       let streaming0 = String.fromCharCode(98,101,104,97,118,105,111,114,115,95,107,95,56,57,0);
         streaming0 += `${parseInt(`${libcxxcomponentsr}`) * 1}`;
         libcxxcomponentsr /= Math.max(parseFloat(`${airbnbstarN / 2}`), 5);
      while (4 <= (2 - shootA.length) || (2 - streaming0.length) <= 1) {
         shootA.push(3 / (Math.max(airbnbstarN, 9)));
         break;
      }
          let dragcloseg = String.fromCharCode(114,101,115,111,108,118,101,100,95,120,95,51,50,0);
         streaming0 = `${(streaming0 == String.fromCharCode(70,0) ? streaming0.length : airbnbstarN)}`;
         dragcloseg = `${dragcloseg.length ^ 3}`;
          let profileframeQ = String.fromCharCode(110,111,110,110,117,108,108,115,99,104,101,109,101,115,95,99,95,50,49,0);
         libcxxcomponentsr *= parseFloat(`${parseInt(`${libcxxcomponentsr}`) | 1}`);
         profileframeQ += `${profileframeQ.length / 2}`;
      let javaN = streaming0.length <= 8126730;
      do {
          let robotoK = String.fromCharCode(112,114,101,118,118,101,99,95,98,95,57,54,0);
          let wnewarchdefaultsT = String.fromCharCode(97,95,54,51,95,106,109,101,109,115,121,115,0);
          let footballfieldw: Array<any> = [677, 118, 461];
          let whitesmalltickA: Map<any, any> = new Map([[String.fromCharCode(104,95,57,55,95,117,110,107,110,111,119,110,0),String.fromCharCode(105,110,116,101,114,97,99,116,111,114,95,108,95,53,55,0)], [String.fromCharCode(116,101,120,116,97,116,116,114,95,119,95,53,56,0),String.fromCharCode(121,95,51,57,95,117,112,115,104,105,102,116,101,100,0)], [String.fromCharCode(117,110,115,116,111,112,112,97,98,108,101,95,52,95,54,49,0),String.fromCharCode(104,95,50,52,95,99,111,110,102,108,105,99,116,0)]]);
          let modeQ = 0.0;
         streaming0 += `${streaming0.length * 3}`;
         robotoK += `${wnewarchdefaultsT.length}`;
         wnewarchdefaultsT += `${(String.fromCharCode(84,0) == robotoK ? parseInt(`${modeQ}`) : robotoK.length)}`;
         footballfieldw.push(wnewarchdefaultsT.length);
         whitesmalltickA.set(`${modeQ}`, robotoK.length / 3);
         if (javaN) {
            break;
         }
      } while (javaN && (parseFloat(`${streaming0.length}`) <= libcxxcomponentsr));
      for (let q = 0; q < 2; q++) {
          let circle8 = String.fromCharCode(97,112,105,99,95,52,95,55,51,0);
          let othermatchdetailbgG: Array<any> = [624, 482, 723];
          let default_89M = String.fromCharCode(110,111,109,105,110,97,116,101,95,48,95,56,55,0);
         airbnbstarN /= Math.max(2 / (Math.max(1, default_89M.length)), 5);
         circle8 += `${circle8.length}`;
         othermatchdetailbgG = [circle8.length];
         default_89M = `${circle8.length / (Math.max(2, othermatchdetailbgG.length))}`;
      }
          let relatede = 4.0;
         libcxxcomponentsr /= Math.max(1, parseFloat(`${airbnbstarN}`));
         relatede *= parseInt(`${relatede}`) * 3;
      if (5.100 == (2.51 + libcxxcomponentsr)) {
          let gestures5 = String.fromCharCode(97,98,117,115,101,95,108,95,49,0);
          let release_s5p = 5;
          let classesa = 5.0;
         libcxxcomponentsr += parseFloat(`${streaming0.length}`);
         gestures5 = "2";
         release_s5p >>= Math.min(Math.abs(1 >> (Math.min(Math.abs(parseInt(`${classesa}`)), 3))), 2);
         classesa -= gestures5.length;
      }
      let libreactnativejnic = airbnbstarN <= 7929217;
      do {
         airbnbstarN -= 3 + parseInt(`${libcxxcomponentsr}`);
         if (libreactnativejnic) {
            break;
         }
      } while ((libcxxcomponentsr < 4.22) && libreactnativejnic);
      for (let l = 0; l < 1; l++) {
         airbnbstarN -= 2 / (Math.max(3, parseInt(`${libcxxcomponentsr}`)));
      }
      if (2 >= (airbnbstarN * shootA.length)) {
         airbnbstarN %= Math.max(2, 2 << (Math.min(1, shootA.length)));
      }
      leaguel /= Math.max(4, parseFloat(`${1 ^ parseInt(`${nativea}`)}`));
      break;
   }
       let crownL = 2.0;
       let imagemanagerZ: Map<any, any> = new Map([[String.fromCharCode(98,111,120,98,108,117,114,95,99,95,57,56,0),586], [String.fromCharCode(114,101,102,105,110,105,110,103,95,120,95,49,56,0),195], [String.fromCharCode(100,105,102,102,95,98,95,55,56,0),403]]);
       let gemfileM: Map<any, any> = new Map([[String.fromCharCode(117,95,54,56,95,102,105,108,108,0),true ], [String.fromCharCode(105,103,110,111,114,101,95,56,95,51,55,0),false ], [String.fromCharCode(116,114,117,115,116,95,113,95,50,49,0),false ]]);
      while ((crownL / (Math.max(5.59, 5))) <= 4.78 && (crownL / 5.59) <= 2.57) {
         crownL += parseFloat(`${parseInt(`${crownL}`)}`);
         break;
      }
          let elements6 = String.fromCharCode(114,101,109,97,105,110,95,55,95,50,56,0);
          let libhermesR = String.fromCharCode(99,97,99,104,101,115,105,122,101,95,49,95,50,56,0);
          let nativemodulel: Map<any, any> = new Map([[String.fromCharCode(107,95,56,51,95,99,97,110,116,111,112,101,110,0),false ], [String.fromCharCode(118,95,48,95,100,114,111,112,112,101,114,0),false ], [String.fromCharCode(106,95,52,56,95,100,117,112,101,100,0),false ]]);
         gemfileM.set(libhermesR, (libhermesR == String.fromCharCode(105,0) ? libhermesR.length : nativemodulel.size));
         elements6 += `${elements6.length}`;
         imagemanagerZ = new Map([[`${gemfileM.size}`, 2 & gemfileM.size]]);
       let libsentryf = 3.0;
         imagemanagerZ.set(`${libsentryf}`, 1);
         imagemanagerZ = new Map([[`${libsentryf}`, 2]]);
      while (!Array.from(imagemanagerZ.values()).includes(crownL)) {
         imagemanagerZ.set(`${crownL}`, parseInt(`${libsentryf}`) / 3);
         break;
      }
       let homeloading8 = 2.0;
          let iconstarx = String.fromCharCode(101,95,56,50,95,98,105,108,97,116,101,114,97,108,0);
          let viewer3 = String.fromCharCode(112,95,56,56,95,97,112,116,120,0);
         crownL -= parseFloat(`${parseInt(`${homeloading8}`) + parseInt(`${crownL}`)}`);
         iconstarx = `${viewer3.length}`;
         viewer3 += `${iconstarx.length}`;
      l_center2 += `${parseInt(`${selectedg}`)}`;
   if (dangero.length > 3 || l_center2 == String.fromCharCode(98,0)) {
      l_center2 += "3";
   }
        videoRef.current.seek(value);

       let delegate_j2T = 3;
       let watchnowbg0: Map<any, any> = new Map([[String.fromCharCode(100,101,97,100,105,110,101,95,118,95,55,0),false ], [String.fromCharCode(120,95,50,56,95,100,105,115,115,99,111,110,110,101,99,116,0),true ], [String.fromCharCode(112,95,57,57,95,119,105,100,103,101,116,0),false ]]);
      if ((watchnowbg0.size >> (Math.min(Math.abs(1), 4))) <= 5) {
          let libreactnativejniA = String.fromCharCode(115,121,109,108,105,110,107,95,107,95,50,50,0);
          let targetS: Array<any> = [172, 376, 179];
         watchnowbg0.set(`${delegate_j2T}`, watchnowbg0.size);
         libreactnativejniA = `${libreactnativejniA.length << (Math.min(Math.abs(1), 1))}`;
         targetS.push(1 & libreactnativejniA.length);
      }
          let footballj = String.fromCharCode(97,95,55,95,115,105,116,101,109,97,112,0);
          let updatesv = String.fromCharCode(117,110,109,117,116,101,95,57,95,52,55,0);
          let assistw = 4.0;
         watchnowbg0.set(updatesv, (String.fromCharCode(88,0) == updatesv ? updatesv.length : footballj.length));
         footballj = `${parseInt(`${assistw}`) & parseInt(`${assistw}`)}`;
      subtext2 = `${2 >> (Math.min(Math.abs(parseInt(`${leaguel}`)), 3))}`;
      l_center2 = `${parseInt(`${nativea}`)}`;
       let pressureM = 1.0;
       let favorites = String.fromCharCode(100,105,115,97,98,108,101,95,98,95,53,0);
       let untickS = 2.0;
          let footballtrophyV = String.fromCharCode(97,118,99,99,95,112,95,57,48,0);
          let bottoms = 2.0;
          let anytimeR: Array<any> = [592, 298, 204];
         favorites += "2";
         footballtrophyV = `${anytimeR.length}`;
         bottoms += parseFloat(`${3 | parseInt(`${bottoms}`)}`);
         anytimeR.push(3 & parseInt(`${bottoms}`));
         untickS *= parseFloat(`${favorites.length + parseInt(`${pressureM}`)}`);
         untickS += parseFloat(`${1 - parseInt(`${pressureM}`)}`);
      if (1.18 <= (pressureM * 4)) {
         untickS += parseFloat(`${parseInt(`${pressureM}`) >> (Math.min(4, Math.abs(2)))}`);
      }
         favorites += `${favorites.length}`;
      l_center2 += `${parseInt(`${selectedg}`) & 2}`;
   if (l_center2.length < 3) {
      l_center2 = `${parseInt(`${leaguel}`) % (Math.max(predictionbuttoni.length, 4))}`;
   }
      dangero = `${(parseInt(`${selectedg}`) + (const_0u ? 2 : 3))}`;
   for (let h = 0; h < 3; h++) {
      selectedg /= Math.max(5, parseInt(`${libyogae}`) % (Math.max(parseInt(`${hookZ}`), 2)));
   }
        setOnSliding(false);
      }
    }, 1000),
    [videoRef.current]
  );

  const handlePlayPause = () => {
       let w_viewB = 3.0;
    let stepR = 4.0;
    let recommendationu = 4;
    let defaultroombg9 = String.fromCharCode(122,95,53,51,95,112,97,108,108,101,116,101,0);
    let securityK = true;
    let catagoryD = 1.0;
    let imageactionlive0 = String.fromCharCode(98,103,114,97,95,103,95,49,49,0);
    let sourceV = 0.0;
    let whistle8 = String.fromCharCode(117,110,108,111,97,100,95,104,95,56,55,0);
    let libruntimeexecutor9 = true;
    let membershipD = 4.0;
    let libfabricjniH = String.fromCharCode(109,117,108,116,105,112,108,105,101,100,95,120,95,53,55,0);
      defaultroombg9 += `${parseInt(`${sourceV}`)}`;
   for (let m = 0; m < 1; m++) {
       let appsb = String.fromCharCode(105,110,115,116,97,108,108,95,53,95,51,48,0);
       let trashE = String.fromCharCode(99,95,49,50,95,114,105,99,104,0);
       let profileinactiveX = true;
      if (2 == trashE.length) {
          let iconsaveimageb = String.fromCharCode(97,108,105,103,110,95,122,95,52,53,0);
          let bingk = String.fromCharCode(115,95,54,51,95,118,97,108,105,100,105,116,121,0);
          let libmapbufferjni_ = 5;
         trashE = "3";
         iconsaveimageb += `${iconsaveimageb.length}`;
         bingk = "1";
         libmapbufferjni_ &= bingk.length;
      }
          let sheet5 = String.fromCharCode(106,95,52,56,95,108,111,111,112,98,97,99,107,0);
          let imagenomoredataU = String.fromCharCode(114,95,52,95,109,101,103,97,103,114,111,117,112,0);
         profileinactiveX = 41 < imagenomoredataU.length;
         sheet5 += `${(sheet5 == String.fromCharCode(90,0) ? sheet5.length : sheet5.length)}`;
         imagenomoredataU = `${sheet5.length}`;
         trashE += `${appsb.length}`;
      while (!trashE.includes(`${profileinactiveX}`)) {
          let showmoreJ = 2;
          let searchV = String.fromCharCode(100,101,101,112,101,114,95,114,95,50,57,0);
         trashE += `${showmoreJ}`;
         showmoreJ /= Math.max(searchV.length >> (Math.min(searchV.length, 2)), 3);
         break;
      }
      if (4 >= appsb.length) {
         trashE += `${trashE.length}`;
      }
         trashE += `${(trashE == String.fromCharCode(55,0) ? (profileinactiveX ? 5 : 3) : trashE.length)}`;
      if (appsb.length > 2) {
         appsb += `${appsb.length - 2}`;
      }
      while (trashE.length >= appsb.length) {
         trashE = "3";
         break;
      }
       let defaultlogo_: Array<any> = [618, 642, 841];
       let watchnowbge: Array<any> = [727, 754, 721];
      securityK = stepR <= 16.69;
   }
   if (securityK) {
       let penaltyshootG = false;
       let whitevideolive_ = 5;
          let iconnewsshareO = 1;
          let strings3 = false;
         penaltyshootG = !penaltyshootG;
         iconnewsshareO -= 3 ^ iconnewsshareO;
         strings3 = strings3 || iconnewsshareO >= 93;
         whitevideolive_ &= whitevideolive_;
         whitevideolive_ *= whitevideolive_;
       let basketballmatchdetailbgN: Array<any> = [954, 114];
       let collectiong: Array<any> = [445, 544, 870];
      for (let q = 0; q < 2; q++) {
          let mountingj: Array<any> = [396, 286];
          let iconrefreshl = String.fromCharCode(110,95,54,56,95,101,120,112,101,114,116,0);
          let networkL = false;
          let fullscreenmaxQ = String.fromCharCode(101,95,55,52,95,115,98,97,100,0);
         penaltyshootG = mountingj.length > 72 || !networkL;
         mountingj.push(fullscreenmaxQ.length);
         iconrefreshl += `${iconrefreshl.length ^ fullscreenmaxQ.length}`;
         networkL = iconrefreshl.length > fullscreenmaxQ.length;
      }
      if (3 == basketballmatchdetailbgN.length || 3 == (basketballmatchdetailbgN.length & 3)) {
          let tickedh = String.fromCharCode(115,98,108,111,103,95,118,95,50,55,0);
          let promotion6 = true;
          let lightK = 4.0;
          let statisticsO = 2;
          let searchbark = String.fromCharCode(98,117,116,116,101,114,95,119,95,50,49,0);
         basketballmatchdetailbgN = [collectiong.length];
         tickedh += "3";
         promotion6 = lightK >= 31.45;
         lightK -= parseFloat(`${searchbark.length}`);
         statisticsO &= ((promotion6 ? 3 : 5) / (Math.max(parseInt(`${lightK}`), 3)));
         searchbark = `${tickedh.length ^ 1}`;
      }
      catagoryD -= (parseInt(`${catagoryD}`) + (penaltyshootG ? 5 : 1));
   }
      securityK = w_viewB == 10.11;
       let textV = true;
       let screenP = false;
       let sourceq: Map<any, any> = new Map([[String.fromCharCode(105,95,57,50,95,102,114,101,101,109,0),String.fromCharCode(114,95,50,48,95,109,97,106,0)], [String.fromCharCode(100,105,115,116,114,97,99,116,105,111,110,95,104,95,52,50,0),String.fromCharCode(115,117,99,99,101,115,115,111,114,95,98,95,56,0)], [String.fromCharCode(109,101,97,110,95,113,95,49,49,0),String.fromCharCode(115,105,110,107,95,119,95,56,48,0)]]);
          let giflivestreaming1 = 4.0;
          let nativemoduleZ: Map<any, any> = new Map([[String.fromCharCode(114,111,98,117,115,116,95,98,95,57,57,0),String.fromCharCode(121,95,48,95,102,114,101,113,117,101,110,116,0)], [String.fromCharCode(122,95,57,48,95,113,119,111,114,100,0),String.fromCharCode(105,110,116,114,97,120,95,51,95,53,52,0)]]);
          let dnewinterstitialS = 4.0;
         screenP = giflivestreaming1 <= 80.30;
         giflivestreaming1 += parseFloat(`${nativemoduleZ.size & parseInt(`${dnewinterstitialS}`)}`);
         nativemoduleZ = new Map([[`${nativemoduleZ.size}`, nativemoduleZ.size + parseInt(`${dnewinterstitialS}`)]]);
         screenP = (screenP ? !textV : screenP);
      if (1 < (5 & sourceq.size) && 5 < sourceq.size) {
          let statisticsB: Array<any> = [277, 886];
          let libavutilz: Map<any, any> = new Map([[String.fromCharCode(99,95,57,52,95,107,101,121,112,97,116,104,0),649], [String.fromCharCode(108,95,51,48,95,112,114,111,99,101,115,115,0),800], [String.fromCharCode(117,95,52,95,115,117,98,116,121,112,101,0),886]]);
          let themeN: Map<any, any> = new Map([[String.fromCharCode(120,95,49,56,95,108,101,114,112,102,0),837], [String.fromCharCode(110,98,105,111,95,119,95,49,55,0),440]]);
         sourceq.set(`${sourceq.size}`, sourceq.size | themeN.size);
         statisticsB.push(2);
         libavutilz.set(`${statisticsB.length}`, 3);
         themeN = new Map([[`${libavutilz.size}`, statisticsB.length + 1]]);
      }
      if (!screenP) {
         screenP = !textV && screenP;
      }
          let whitesmalltickw = 4.0;
          let componentregistryH = false;
          let reducer2 = 1.0;
         sourceq = new Map([[`${textV}`, (1 / (Math.max((componentregistryH ? 1 : 5), 7)))]]);
         whitesmalltickw /= Math.max(2, parseFloat(`${parseInt(`${reducer2}`)}`));
         componentregistryH = 52.51 < reducer2 || whitesmalltickw < 52.51;
       let subsq = 3;
       let templateprocessorx = 0;
          let libglogw: Map<any, any> = new Map([[String.fromCharCode(112,95,50,54,95,116,114,101,108,108,105,115,0),false ], [String.fromCharCode(101,120,101,99,95,109,95,54,51,0),true ], [String.fromCharCode(110,101,99,101,115,115,97,114,121,95,97,95,57,49,0),false ]]);
         screenP = !textV;
         libglogw = new Map([[`${libglogw.size}`, libglogw.size >> (Math.min(Math.abs(1), 1))]]);
         screenP = 84 <= subsq || templateprocessorx <= 84;
         subsq *= 2 & sourceq.size;
      recommendationu <<= Math.min(3, Math.abs(parseInt(`${stepR}`) ^ recommendationu));

    clearTimeout(iconTimer.current);

      w_viewB /= Math.max(5, parseInt(`${w_viewB}`) >> (Math.min(2, Math.abs(parseInt(`${stepR}`)))));
       let photoW = 5.0;
       let turna = String.fromCharCode(121,95,56,56,95,119,111,114,107,108,111,97,100,0);
       let areaJ = 4.0;
      while (4.30 > (5.89 / (Math.max(6, areaJ)))) {
         areaJ -= parseFloat(`${2}`);
         break;
      }
         photoW -= (turna == String.fromCharCode(70,0) ? turna.length : parseInt(`${areaJ}`));
         turna = "1";
      for (let g = 0; g < 3; g++) {
          let redirectD = String.fromCharCode(114,95,49,56,95,118,101,114,105,102,121,0);
          let schedule0 = 2.0;
          let fieldC = 5.0;
         photoW *= parseInt(`${schedule0}`);
         redirectD = `${parseInt(`${fieldC}`)}`;
         fieldC *= parseFloat(`${parseInt(`${fieldC}`)}`);
      }
          let championA: Array<any> = [688, 776];
          let vignette_ = 0.0;
         turna = "1";
         championA = [championA.length];
         vignette_ += parseFloat(`${championA.length + parseInt(`${vignette_}`)}`);
      while (photoW <= 1.13) {
          let bell7 = String.fromCharCode(114,101,99,111,110,95,100,95,56,0);
          let scoreP = true;
          let matchinactivee = String.fromCharCode(113,95,54,56,95,117,112,115,101,114,116,0);
         turna += `${(matchinactivee.length | (scoreP ? 3 : 5))}`;
         bell7 = `${2 - bell7.length}`;
         scoreP = bell7 == bell7;
         break;
      }
      for (let m = 0; m < 1; m++) {
          let libruntimeexecutory = 0;
          let redcirclebgg = String.fromCharCode(116,105,99,107,101,114,95,49,95,49,0);
          let handler1 = 2.0;
          let libfabricjnif = String.fromCharCode(112,114,101,115,101,116,95,106,95,55,48,0);
          let eyeopenJ = 5;
         photoW /= Math.max(2 & eyeopenJ, 4);
         libruntimeexecutory <<= Math.min(Math.abs(3), 2);
         redcirclebgg = `${redcirclebgg.length}`;
         handler1 += (parseFloat(`${libfabricjnif == String.fromCharCode(82,0) ? libfabricjnif.length : parseInt(`${handler1}`)}`));
         eyeopenJ += libfabricjnif.length;
      }
         photoW /= Math.max(parseInt(`${areaJ}`), 3);
       let statsnomoredataj = 5;
       let signinupM = 4;
      catagoryD -= parseInt(`${w_viewB}`);
      w_viewB *= parseInt(`${catagoryD}`) & parseInt(`${w_viewB}`);
       let kuaishou6 = String.fromCharCode(103,95,57,48,95,104,111,117,114,0);
       let awayplayero = String.fromCharCode(106,95,49,52,95,100,101,101,112,108,105,110,107,0);
          let bggradient5 = String.fromCharCode(115,105,112,104,97,115,104,95,115,95,49,57,0);
         awayplayero = `${kuaishou6.length}`;
         bggradient5 += `${2 - bggradient5.length}`;
      let downloaded6 = awayplayero.length <= 6227592;
      do {
         awayplayero = "1";
         if (downloaded6) {
            break;
         }
      } while (downloaded6 && (kuaishou6.length >= awayplayero.length));
         kuaishou6 += "2";
         kuaishou6 += `${(kuaishou6 == String.fromCharCode(83,0) ? kuaishou6.length : awayplayero.length)}`;
      if (!kuaishou6.includes(`${awayplayero.length}`)) {
         awayplayero += `${kuaishou6.length}`;
      }
         kuaishou6 = `${awayplayero.length - 3}`;
      imageactionlive0 += `${parseInt(`${catagoryD}`) | parseInt(`${stepR}`)}`;
      securityK = 89.8 > (stepR * sourceV);
    setShowIcon(true);

   if (stepR == 3.91) {
      stepR *= ((securityK ? 2 : 2) * parseInt(`${stepR}`));
   }
   while ((catagoryD * 2.89) < 5.32) {
       let libapminsightaF = true;
       let regengm = String.fromCharCode(115,101,103,119,105,116,95,118,95,51,54,0);
       let utilse = 0;
       let private_7j: Array<any> = [215, 19];
         libapminsightaF = (4 < ((!libapminsightaF ? 4 : private_7j.length) + private_7j.length));
      if ((4 - utilse) <= 5) {
          let dialogT = String.fromCharCode(122,95,51,55,95,105,110,118,101,114,118,97,108,0);
          let belll: Map<any, any> = new Map([[String.fromCharCode(102,97,105,108,95,102,95,53,0),String.fromCharCode(120,95,57,56,95,109,115,114,108,101,100,101,99,0)], [String.fromCharCode(113,95,50,54,95,110,111,116,103,101,116,0),String.fromCharCode(120,95,52,50,95,100,101,115,116,111,114,121,0)], [String.fromCharCode(114,95,54,95,115,117,98,98,97,110,100,0),String.fromCharCode(115,95,57,56,95,101,115,101,110,100,0)]]);
          let appsY = 3;
          let selectedi = 1.0;
         utilse *= private_7j.length;
         dialogT = `${2 | parseInt(`${selectedi}`)}`;
         belll.set(`${appsY}`, belll.size + 1);
         appsY += appsY;
         selectedi -= appsY * 1;
      }
         private_7j.push(utilse);
      if (!libapminsightaF) {
         regengm += `${private_7j.length}`;
      }
      let footballtrophyv = libapminsightaF ? !libapminsightaF : libapminsightaF;
      do {
         libapminsightaF = regengm.length < 52;
         if (footballtrophyv) {
            break;
         }
      } while (footballtrophyv && (libapminsightaF));
       let fastforward9 = String.fromCharCode(102,108,111,111,114,95,102,95,55,54,0);
       let halfA = 1.0;
      while (1.58 <= (halfA * 2.64) && (halfA * 2.64) <= 2.65) {
         fastforward9 += `${parseInt(`${halfA}`)}`;
         break;
      }
      if ((halfA + parseFloat(`${regengm.length}`)) <= 4.20 || (4.20 + halfA) <= 3.56) {
         regengm = `${fastforward9.length}`;
      }
      for (let c = 0; c < 1; c++) {
         libapminsightaF = !fastforward9.endsWith(`${libapminsightaF}`);
      }
       let greyQ = String.fromCharCode(108,95,57,48,95,112,117,108,108,117,112,0);
       let settingB = String.fromCharCode(98,117,102,102,101,114,101,118,101,110,116,95,108,95,56,53,0);
          let imagesV = 5.0;
          let bnewarchdefaultsx = false;
         fastforward9 = "2";
         imagesV -= (parseInt(`${imagesV}`) * (bnewarchdefaultsx ? 4 : 5));
         bnewarchdefaultsx = imagesV <= 94.83 && !bnewarchdefaultsx;
      catagoryD /= Math.max(parseInt(`${w_viewB}`) ^ 1, 2);
      break;
   }
   for (let z = 0; z < 3; z++) {
      whistle8 += `${(parseInt(`${catagoryD}`) ^ (libruntimeexecutor9 ? 1 : 4))}`;
   }
       let bangW: Array<any> = [694, 228, 351];
       let classesk = 4.0;
       let playlistm = String.fromCharCode(119,95,54,52,95,112,97,114,107,0);
         bangW.push(bangW.length >> (Math.min(Math.abs(2), 2)));
      let expiredP = 8885920.0 >= classesk;
      do {
          let mathB = 2.0;
         classesk /= Math.max(parseInt(`${classesk}`), 1);
         mathB /= Math.max(4, parseFloat(`${parseInt(`${mathB}`) + parseInt(`${mathB}`)}`));
         if (expiredP) {
            break;
         }
      } while (expiredP && (playlistm.length > classesk));
          let iconbackwhite9 = String.fromCharCode(97,121,98,114,95,120,95,51,51,0);
         bangW = [3];
         iconbackwhite9 = `${iconbackwhite9.length >> (Math.min(Math.abs(1), 1))}`;
          let brightnessn = 5.0;
          let awayl = 4.0;
         bangW = [parseInt(`${brightnessn}`) + 1];
         brightnessn /= Math.max(parseFloat(`${parseInt(`${awayl}`) | parseInt(`${awayl}`)}`), 2);
      for (let r = 0; r < 3; r++) {
          let eventJ = String.fromCharCode(120,95,52,57,95,101,105,103,104,116,115,118,120,0);
          let description_iP = 1.0;
          let iconstarC = 1.0;
          let upgradeM = false;
         bangW = [(eventJ == String.fromCharCode(71,0) ? eventJ.length : bangW.length)];
         description_iP += parseFloat(`${parseInt(`${iconstarC}`)}`);
         upgradeM = description_iP == 73.27 && 73.27 == iconstarC;
      }
      let foregroundW = bangW.length <= 8726448;
      do {
         bangW.push(2);
         if (foregroundW) {
            break;
         }
      } while (((classesk - bangW.length) == 5.31) && foregroundW);
      for (let z = 0; z < 2; z++) {
         classesk += bangW.length;
      }
       let predictionbannersharedv = String.fromCharCode(118,95,51,52,95,98,97,116,99,104,101,115,0);
      let pause3 = classesk >= 7890139.0;
      do {
         classesk += bangW.length;
         if (pause3) {
            break;
         }
      } while ((playlistm.endsWith(`${classesk}`)) && pause3);
      imageactionlive0 = `${(whistle8 == String.fromCharCode(84,0) ? whistle8.length : bangW.length)}`;
       let form7 = 0.0;
      while ((form7 / (Math.max(form7, 7))) < 2.86 || 5.89 < (form7 / 2.86)) {
         form7 -= parseFloat(`${parseInt(`${form7}`) * 2}`);
         break;
      }
         form7 += parseFloat(`${parseInt(`${form7}`)}`);
          let winit_oo = String.fromCharCode(110,95,55,56,95,116,111,109,98,117,102,0);
          let libjsijniprofilerm: Array<any> = [760, 292];
         form7 += parseFloat(`${libjsijniprofilerm.length - 1}`);
         winit_oo = `${winit_oo.length + 3}`;
         libjsijniprofilerm.push(3);
      securityK = whistle8.length == 35;
    if (isPause) {

   for (let j = 0; j < 3; j++) {
       let pangleD = 4.0;
       let interstitialA = true;
       let libyoga_ = String.fromCharCode(115,95,53,54,95,102,111,114,101,105,103,110,0);
         interstitialA = 11.50 >= pangleD;
      for (let i = 0; i < 2; i++) {
         interstitialA = (((interstitialA ? 83 : libyoga_.length) >> (Math.min(libyoga_.length, 1))) == 83);
      }
      for (let w = 0; w < 1; w++) {
         interstitialA = !interstitialA;
      }
      while ((3.45 + pangleD) == 2.46) {
         interstitialA = (pangleD * parseFloat(`${libyoga_.length}`)) > 92.35;
         break;
      }
         libyoga_ += `${(libyoga_ == String.fromCharCode(87,0) ? libyoga_.length : (interstitialA ? 4 : 5))}`;
      let agreement0 = pangleD <= 6962399.0;
      do {
         pangleD /= Math.max(5, parseFloat(`${2 - parseInt(`${pangleD}`)}`));
         if (agreement0) {
            break;
         }
      } while ((2.89 < (2.50 - pangleD)) && agreement0);
      let profileinactiveZ = String.fromCharCode(119,114,53,120,108,53,0) == libyoga_;
      do {
         libyoga_ = `${(parseInt(`${pangleD}`) ^ (interstitialA ? 1 : 5))}`;
         if (profileinactiveZ) {
            break;
         }
      } while (profileinactiveZ && (1 >= (libyoga_.length / (Math.max(4, 2))) || (3.73 - pangleD) >= 3.93));
         interstitialA = !interstitialA;
      let iconrightorangeT = libyoga_ == String.fromCharCode(101,107,106,53,48,107,95,57,109,56,0);
      do {
         libyoga_ += `${(libyoga_ == String.fromCharCode(114,0) ? libyoga_.length : (interstitialA ? 5 : 4))}`;
         if (iconrightorangeT) {
            break;
         }
      } while ((2 >= libyoga_.length) && iconrightorangeT);
      securityK = imageactionlive0.endsWith(`${libruntimeexecutor9}`);
   }
   for (let b = 0; b < 1; b++) {
      catagoryD += (String.fromCharCode(87,0) == defaultroombg9 ? parseInt(`${catagoryD}`) : defaultroombg9.length);
   }
   for (let p = 0; p < 1; p++) {
       let grapho: Array<any> = [83, 959];
       let o_positionF: Map<any, any> = new Map([[String.fromCharCode(99,111,110,116,114,105,98,117,116,105,110,103,95,50,95,57,48,0),526], [String.fromCharCode(98,95,53,53,95,105,103,110,111,114,101,100,0),846], [String.fromCharCode(101,95,57,0),216]]);
      for (let g = 0; g < 1; g++) {
         grapho.push(grapho.length);
      }
          let latnh = String.fromCharCode(116,109,109,98,114,95,103,95,49,0);
          let footballfieldX: Map<any, any> = new Map([[String.fromCharCode(114,95,51,53,95,112,104,114,97,115,101,115,0),474], [String.fromCharCode(101,97,114,108,121,95,116,95,53,57,0),468], [String.fromCharCode(111,95,54,52,95,108,97,117,110,99,104,0),506]]);
         o_positionF.set(`${latnh}`, (String.fromCharCode(48,0) == latnh ? o_positionF.size : latnh.length));
         footballfieldX.set(`${footballfieldX.size}`, footballfieldX.size);
      let chatroombackground0 = o_positionF.size >= 9713250;
      do {
          let hongkong1 = 3.0;
          let iconbackwhiteH = String.fromCharCode(112,95,53,48,95,119,105,116,110,101,115,115,0);
          let arrowR = 1.0;
         o_positionF = new Map([[`${o_positionF.size}`, o_positionF.size]]);
         hongkong1 += (String.fromCharCode(83,0) == iconbackwhiteH ? parseInt(`${arrowR}`) : iconbackwhiteH.length);
         arrowR /= Math.max(1, parseFloat(`${iconbackwhiteH.length ^ 2}`));
         if (chatroombackground0) {
            break;
         }
      } while (((grapho.length / 1) <= 4 || 2 <= (o_positionF.size / 1)) && chatroombackground0);
         o_positionF = new Map([[`${o_positionF.size}`, grapho.length << (Math.min(Math.abs(1), 3))]]);
      while ((o_positionF.size << (Math.min(3, grapho.length))) < 5 && (o_positionF.size << (Math.min(5, grapho.length))) < 5) {
         grapho.push(o_positionF.size);
         break;
      }
      let sharewhiteV = 7569728 <= grapho.length;
      do {
         grapho.push(o_positionF.size + grapho.length);
         if (sharewhiteV) {
            break;
         }
      } while ((5 <= (grapho.length + o_positionF.size) || (grapho.length + o_positionF.size) <= 5) && sharewhiteV);
      sourceV -= parseFloat(`${parseInt(`${w_viewB}`) | 2}`);
   }
      catagoryD /= Math.max(parseInt(`${sourceV}`), 2);
       let homeloadingq = 4.0;
         homeloadingq /= Math.max(parseFloat(`${1}`), 2);
       let crossD = String.fromCharCode(99,104,105,108,100,114,101,110,95,49,95,53,54,0);
       let libloggerw = String.fromCharCode(97,112,105,115,95,115,95,55,51,0);
       let guideJ = String.fromCharCode(105,110,116,101,114,105,111,114,95,101,95,53,51,0);
      sourceV -= parseFloat(`${recommendationu}`);
      iconTimer.current = setTimeout(() => setShowIcon(false), 1000);
    }
    onManualPause(isPause);
  };

  const handleLoadStart = () => {
       let iconadslinkI = 0;
    let gmailr = String.fromCharCode(97,95,52,49,95,100,101,115,116,114,117,99,116,0);
    let render7: Map<any, any> = new Map([[String.fromCharCode(117,105,110,116,108,101,95,103,95,51,55,0),true ], [String.fromCharCode(110,95,55,51,95,101,120,112,97,110,100,101,114,0),false ]]);
    let eyecloseZ: Map<any, any> = new Map([[String.fromCharCode(103,95,50,52,95,115,117,98,109,105,116,0),872], [String.fromCharCode(99,111,110,118,101,120,95,119,95,53,54,0),907]]);
    let libfolly9 = String.fromCharCode(116,95,51,51,95,119,114,105,116,101,114,0);
    let sheetA = String.fromCharCode(101,97,99,115,95,105,95,56,0);
    let sportx = 0.0;
    let libapminsightbr: Array<any> = [699, 169];
   let bellreminderb = render7.size >= 6078448;
   do {
      render7 = new Map([[libfolly9, sheetA.length | libfolly9.length]]);
      if (bellreminderb) {
         break;
      }
   } while ((5 >= render7.size) && bellreminderb);
      libfolly9 = `${parseInt(`${sportx}`)}`;
   if (3 <= iconadslinkI) {
       let turndownx = 3.0;
       let libruntimeexecutorQ = 0;
      let awayB = libruntimeexecutorQ >= 8321948;
      do {
         libruntimeexecutorQ += libruntimeexecutorQ ^ parseInt(`${turndownx}`);
         if (awayB) {
            break;
         }
      } while (awayB && (4.40 > (turndownx * libruntimeexecutorQ)));
         turndownx += 2 + parseInt(`${turndownx}`);
      while ((turndownx / (Math.max(3.12, 8))) == 3.76) {
          let vipsports = 5.0;
          let dycreatord = 3;
          let iconqqw = String.fromCharCode(108,105,98,110,100,105,95,106,95,52,54,0);
         libruntimeexecutorQ ^= libruntimeexecutorQ | parseInt(`${vipsports}`);
         vipsports /= Math.max(parseFloat(`${dycreatord ^ 3}`), 1);
         dycreatord *= 3;
         iconqqw = `${dycreatord}`;
         break;
      }
      if (1.48 > (libruntimeexecutorQ / (Math.max(turndownx, 2)))) {
         libruntimeexecutorQ += parseInt(`${turndownx}`) >> (Math.min(5, Math.abs(libruntimeexecutorQ)));
      }
         turndownx += 2;
      for (let j = 0; j < 3; j++) {
         libruntimeexecutorQ ^= libruntimeexecutorQ * parseInt(`${turndownx}`);
      }
      iconadslinkI |= 1;
   }
       let indexL = 5;
      if (1 == (indexL ^ 1) || (1 ^ indexL) == 4) {
         indexL *= indexL - 1;
      }
      while (1 <= (5 | indexL) || 4 <= (5 | indexL)) {
          let frame_bG = 2.0;
         indexL |= parseInt(`${frame_bG}`) - indexL;
         break;
      }
      let orange2 = indexL >= 9784354;
      do {
         indexL ^= indexL * 3;
         if (orange2) {
            break;
         }
      } while (orange2 && (indexL < 3));
      sportx += 2;
   for (let q = 0; q < 1; q++) {
       let animationE: Array<any> = [982, 801];
       let activityI = String.fromCharCode(101,110,100,112,111,105,110,116,115,95,99,95,51,50,0);
       let main_nk = String.fromCharCode(110,95,56,95,117,110,98,111,110,100,101,100,0);
       let basketball8 = 1.0;
      for (let p = 0; p < 3; p++) {
         animationE = [activityI.length];
      }
      while (main_nk.length >= activityI.length) {
          let airbnbstarselectedU: Array<any> = [166, 786];
          let type_euM = String.fromCharCode(99,97,112,116,117,114,101,95,105,95,52,52,0);
          let yellowtored7 = false;
          let homeloadingE = String.fromCharCode(115,115,105,109,95,116,95,52,52,0);
         activityI += `${(activityI == String.fromCharCode(115,0) ? activityI.length : parseInt(`${basketball8}`))}`;
         airbnbstarselectedU = [homeloadingE.length ^ type_euM.length];
         type_euM = `${3 & homeloadingE.length}`;
         yellowtored7 = type_euM.length >= 59;
         break;
      }
         basketball8 /= Math.max(3, parseFloat(`${3}`));
      let javae = String.fromCharCode(109,52,101,107,0) == main_nk;
      do {
         main_nk = "3";
         if (javae) {
            break;
         }
      } while ((5.82 <= (basketball8 / (Math.max(2, parseFloat(`${main_nk.length}`)))) || (3 | main_nk.length) <= 1) && javae);
         basketball8 *= (parseFloat(`${String.fromCharCode(54,0) == activityI ? activityI.length : animationE.length}`));
          let forwardK = 2;
          let libglogv = String.fromCharCode(112,98,107,100,102,95,55,95,53,56,0);
          let eactp: Map<any, any> = new Map([[String.fromCharCode(115,95,52,57,95,112,99,109,119,98,0),String.fromCharCode(103,95,56,52,95,105,110,112,117,116,0)], [String.fromCharCode(114,101,108,117,95,100,95,53,51,0),String.fromCharCode(103,95,48,95,97,112,111,115,0)]]);
         activityI += `${main_nk.length & eactp.size}`;
         forwardK *= forwardK;
         libglogv += `${(String.fromCharCode(51,0) == libglogv ? libglogv.length : forwardK)}`;
         eactp = new Map([[`${forwardK}`, libglogv.length]]);
         activityI = `${main_nk.length % 1}`;
      while (2.26 > (basketball8 / (Math.max(3.20, 8)))) {
          let tempnodatagifp = 0.0;
          let textA = String.fromCharCode(104,105,110,116,95,106,95,57,53,0);
         animationE = [2];
         tempnodatagifp += parseInt(`${tempnodatagifp}`) + textA.length;
         textA = `${parseInt(`${tempnodatagifp}`)}`;
         break;
      }
       let latnu = 1.0;
       let fullscreenminK = 2.0;
       let libcrashsdk1 = String.fromCharCode(115,101,108,101,99,116,105,110,103,95,107,95,50,0);
       let libapminsightag = String.fromCharCode(104,95,55,49,95,102,101,97,116,117,114,101,115,0);
         activityI = `${1 & parseInt(`${latnu}`)}`;
       let libglogW = 4.0;
      sheetA += `${render7.size}`;
   }
   while (3.53 <= (sportx / 4.35) && (sportx / 4.35) <= 3.86) {
       let placeholderr: Array<any> = [String.fromCharCode(100,95,52,49,95,105,110,115,116,97,110,99,101,0), String.fromCharCode(102,105,118,101,95,52,95,50,48,0)];
       let halffieldimageg = String.fromCharCode(112,95,51,54,95,118,105,100,101,111,99,111,100,101,99,0);
       let nalyticsB = 2.0;
      if (5 == (halffieldimageg.length * 2)) {
         placeholderr.push(halffieldimageg.length);
      }
          let mutedX = String.fromCharCode(103,95,55,50,95,102,115,101,101,107,0);
          let transferA = true;
         placeholderr.push((String.fromCharCode(85,0) == mutedX ? halffieldimageg.length : mutedX.length));
         transferA = (!transferA ? transferA : !transferA);
          let updatesX = 4.0;
          let settingsG = 1.0;
         halffieldimageg = "2";
         updatesX *= parseInt(`${settingsG}`) & 1;
         settingsG *= parseFloat(`${2 ^ parseInt(`${updatesX}`)}`);
       let dplus4 = String.fromCharCode(116,111,111,108,116,105,112,95,115,95,50,53,0);
       let favoriter = String.fromCharCode(116,95,53,49,95,115,101,103,116,114,101,101,0);
         placeholderr.push((String.fromCharCode(57,0) == dplus4 ? dplus4.length : placeholderr.length));
       let nalyticsr = 2;
      while ((halffieldimageg.length * parseInt(`${nalyticsB}`)) == 3 && 4 == (halffieldimageg.length * 3)) {
          let downloadD = false;
          let containero = String.fromCharCode(120,95,56,54,95,114,101,99,111,118,101,114,121,0);
          let nendg = 0.0;
          let watchL = 1;
          let applicationU = String.fromCharCode(100,97,112,112,95,106,95,52,55,0);
         nalyticsB /= Math.max(halffieldimageg.length, 2);
         downloadD = applicationU == String.fromCharCode(81,0);
         containero = `${1 * containero.length}`;
         nendg *= containero.length & 2;
         watchL ^= ((downloadD ? 2 : 1));
         applicationU += `${containero.length * applicationU.length}`;
         break;
      }
      let commonU = dplus4.length >= 5389776;
      do {
          let scorepopsoundQ = true;
         dplus4 += `${parseInt(`${nalyticsB}`)}`;
         scorepopsoundQ = !scorepopsoundQ;
         if (commonU) {
            break;
         }
      } while ((dplus4.length >= 4) && commonU);
       let weiboc = String.fromCharCode(98,95,52,48,95,97,100,100,114,101,115,115,101,115,0);
       let libfabricjnih = String.fromCharCode(112,95,55,53,95,104,100,99,100,0);
      sheetA = "2";
      break;
   }
      gmailr += "3";
   while ((sportx / 2.56) < 1.42) {
      sportx *= render7.size + libfolly9.length;
      break;
   }
      sportx += parseInt(`${sportx}`);

    if (videoRef.current) {

   while (gmailr.length == 1) {
       let kickV = 5.0;
       let userq = 5.0;
       let predictionactivef = 3.0;
         userq /= Math.max(2, parseFloat(`${parseInt(`${predictionactivef}`) & parseInt(`${userq}`)}`));
         userq *= parseFloat(`${1 + parseInt(`${userq}`)}`);
       let middlesound3 = 3.0;
         predictionactivef += parseFloat(`${3 - parseInt(`${userq}`)}`);
          let cornershoot2: Map<any, any> = new Map([[String.fromCharCode(114,101,106,111,105,110,95,115,95,55,56,0),String.fromCharCode(99,95,49,48,95,115,121,115,99,116,108,0)], [String.fromCharCode(117,112,99,97,108,108,95,120,95,48,0),String.fromCharCode(106,95,51,48,95,105,110,105,116,0)], [String.fromCharCode(113,95,52,48,95,109,117,108,116,105,112,108,101,114,115,0),String.fromCharCode(97,100,100,105,95,57,95,49,48,0)]]);
         middlesound3 *= parseInt(`${predictionactivef}`);
         cornershoot2.set(`${cornershoot2.size}`, cornershoot2.size >> (Math.min(Math.abs(cornershoot2.size), 5)));
      for (let e = 0; e < 3; e++) {
         predictionactivef -= parseFloat(`${3}`);
      }
      if (predictionactivef >= userq) {
          let mappingU: Array<any> = [583, 515, 461];
         userq -= parseFloat(`${parseInt(`${kickV}`) & 3}`);
         mappingU = [2];
      }
         userq += parseFloat(`${parseInt(`${kickV}`)}`);
         predictionactivef += parseFloat(`${2}`);
      libfolly9 = `${(String.fromCharCode(77,0) == libfolly9 ? eyecloseZ.size : libfolly9.length)}`;
      break;
   }
   for (let q = 0; q < 3; q++) {
       let libavutilL: Map<any, any> = new Map([[String.fromCharCode(104,95,53,54,95,101,108,115,100,101,99,0),false ], [String.fromCharCode(99,108,111,115,117,114,101,95,114,95,51,0),true ], [String.fromCharCode(117,95,57,49,95,115,111,102,116,119,97,114,101,0),true ]]);
       let backiconmaskS = 2.0;
      for (let p = 0; p < 1; p++) {
         libavutilL = new Map([[`${libavutilL.size}`, libavutilL.size ^ parseInt(`${backiconmaskS}`)]]);
      }
      for (let p = 0; p < 1; p++) {
         libavutilL = new Map([[`${libavutilL.size}`, parseInt(`${backiconmaskS}`)]]);
      }
      if (libavutilL.get(`${backiconmaskS}`) == null) {
          let foundZ: Array<any> = [String.fromCharCode(117,95,52,53,95,114,97,100,105,120,0), String.fromCharCode(103,95,50,54,95,99,97,110,99,101,108,108,105,110,103,0)];
          let basketballawayteamJ = 4;
          let penaltymatchicon7 = true;
          let shrinkd: Array<any> = [String.fromCharCode(113,95,51,51,95,105,112,97,100,100,0), String.fromCharCode(118,95,51,50,95,118,105,100,101,111,105,110,102,111,104,101,97,100,101,114,0), String.fromCharCode(103,101,111,95,118,95,50,52,0)];
         libavutilL = new Map([[`${foundZ.length}`, basketballawayteamJ % (Math.max(foundZ.length, 7))]]);
         basketballawayteamJ |= ((penaltymatchicon7 ? 4 : 4) & 2);
         penaltymatchicon7 = shrinkd.length >= 29;
         shrinkd = [(shrinkd.length & (penaltymatchicon7 ? 1 : 1))];
      }
      if ((3 << (Math.min(2, Math.abs(libavutilL.size)))) >= 4 && (libavutilL.size / (Math.max(3, 8))) >= 4) {
         backiconmaskS *= parseFloat(`${1 >> (Math.min(2, Math.abs(parseInt(`${backiconmaskS}`))))}`);
      }
         backiconmaskS /= Math.max(parseFloat(`${parseInt(`${backiconmaskS}`) | 2}`), 1);
         backiconmaskS *= parseFloat(`${parseInt(`${backiconmaskS}`)}`);
      iconadslinkI |= 2 & sheetA.length;
   }
   let yellowredcardG = libfolly9 == String.fromCharCode(57,118,48,101,99,112,50,119,0);
   do {
      libfolly9 = `${(String.fromCharCode(98,0) == gmailr ? gmailr.length : render7.size)}`;
      if (yellowredcardG) {
         break;
      }
   } while (yellowredcardG && (sheetA != String.fromCharCode(90,0) || 1 == libfolly9.length));
      render7 = new Map([[`${sportx}`, gmailr.length >> (Math.min(Math.abs(2), 2))]]);
   let iconarrowrightwhitec = gmailr == String.fromCharCode(104,106,102,114,95,0);
   do {
      gmailr = `${sheetA.length}`;
      if (iconarrowrightwhitec) {
         break;
      }
   } while (iconarrowrightwhitec && ((5 | render7.size) <= 3 && (5 | render7.size) <= 5));
      sheetA += `${3 | eyecloseZ.size}`;
       let componentsl = String.fromCharCode(110,95,57,48,95,97,110,99,101,115,116,114,121,0);
       let nodeg: Map<any, any> = new Map([[String.fromCharCode(120,95,56,54,95,112,108,97,99,101,109,101,110,116,0),92], [String.fromCharCode(113,95,56,55,95,112,108,116,101,0),15], [String.fromCharCode(110,101,105,103,104,98,111,117,114,95,97,95,52,57,0),339]]);
       let default_h_ = String.fromCharCode(97,99,99,95,48,95,55,51,0);
      while (5 <= nodeg.size) {
         componentsl += `${default_h_.length - nodeg.size}`;
         break;
      }
         componentsl = `${(String.fromCharCode(99,0) == componentsl ? componentsl.length : default_h_.length)}`;
          let whiteS = String.fromCharCode(102,95,55,53,95,98,101,104,105,110,100,0);
         nodeg = new Map([[`${nodeg.size}`, nodeg.size]]);
         whiteS = "1";
      let skipr = String.fromCharCode(115,121,112,105,97,0) == default_h_;
      do {
          let promotion1 = String.fromCharCode(115,95,53,51,95,120,109,117,108,116,105,112,108,101,0);
          let bnews0 = String.fromCharCode(112,111,105,110,116,101,114,115,95,114,95,51,50,0);
         default_h_ += `${nodeg.size % (Math.max(componentsl.length, 4))}`;
         promotion1 = `${bnews0.length}`;
         bnews0 += `${(String.fromCharCode(53,0) == promotion1 ? bnews0.length : promotion1.length)}`;
         if (skipr) {
            break;
         }
      } while ((componentsl == default_h_) && skipr);
      while (!componentsl.includes(`${nodeg.size}`)) {
         nodeg.set(componentsl, 1);
         break;
      }
          let turnZ = 5.0;
          let videoa = 1.0;
          let predictionactiveZ: Map<any, any> = new Map([[String.fromCharCode(106,100,115,97,109,112,108,101,95,103,95,52,52,0),false ], [String.fromCharCode(104,101,118,99,100,115,112,95,118,95,54,56,0),false ]]);
         componentsl += `${parseInt(`${turnZ}`)}`;
         turnZ /= Math.max(4, parseFloat(`${2}`));
         videoa += predictionactiveZ.size;
         predictionactiveZ = new Map([[`${predictionactiveZ.size}`, predictionactiveZ.size >> (Math.min(Math.abs(3), 3))]]);
          let darkM: Array<any> = [522, 387, 488];
         componentsl = `${(componentsl == String.fromCharCode(117,0) ? darkM.length : componentsl.length)}`;
       let klevinH = 0.0;
          let classesn = true;
          let constantsj: Array<any> = [977, 609];
          let drag4 = 1;
         klevinH /= Math.max(1, nodeg.size * 3);
         classesn = drag4 > 66;
         constantsj.push(constantsj.length);
         drag4 %= Math.max(((classesn ? 2 : 3) - 2), 4);
      libapminsightbr = [1];
   while (libfolly9.length < parseInt(`${sportx}`)) {
      libfolly9 += "3";
      break;
   }
      libapminsightbr.push(1 ^ libfolly9.length);
      videoRef.current.seek(currentDuration);
    }
  };

  const handleLoad = (meta: any) => {
    setDuration(meta.duration);
  };

  const redirectVod = () => {
       let catagoryr = String.fromCharCode(105,95,56,50,95,98,105,110,111,109,105,97,108,0);
    let popupS = 1.0;
    let caste = false;
    let iconqqB: Array<any> = [String.fromCharCode(100,95,57,51,95,105,112,108,99,111,110,118,107,101,114,110,101,108,0), String.fromCharCode(108,95,55,52,95,112,110,105,101,108,115,97,100,100,0), String.fromCharCode(112,114,101,102,97,99,101,95,50,95,53,55,0)];
    let analyticsh = true;
    let championA: Map<any, any> = new Map([[String.fromCharCode(117,95,49,52,0),String.fromCharCode(111,95,56,57,95,119,97,108,115,104,120,0)], [String.fromCharCode(120,95,56,56,95,104,101,108,112,0),String.fromCharCode(120,95,50,49,0)]]);
    let arrowc = String.fromCharCode(98,95,49,54,95,103,114,101,121,115,0);
    let attributedstring5 = String.fromCharCode(97,118,115,117,98,116,105,116,108,101,95,97,95,52,57,0);
    let successH: Map<any, any> = new Map([[String.fromCharCode(112,95,55,49,95,115,101,101,100,0),false ], [String.fromCharCode(106,95,49,55,95,99,108,101,97,114,98,105,116,0),false ], [String.fromCharCode(118,98,101,122,105,101,114,95,56,95,50,57,0),false ]]);
    let textinputm = 0;
    let libapminsightbA = String.fromCharCode(114,95,55,55,95,119,114,105,116,101,99,98,0);
   while (arrowc.length == 2) {
      caste = !caste;
      break;
   }
   for (let g = 0; g < 1; g++) {
      popupS += arrowc.length;
   }

    if (isBodan) {

      analyticsh = 87.1 == popupS;
      arrowc = `${parseInt(`${popupS}`)}`;
      dispatch(viewPlaylistDetails(currentVod.mini_video_topic));

   while (attributedstring5.endsWith(`${iconqqB.length}`)) {
       let connectionN: Map<any, any> = new Map([[String.fromCharCode(110,95,54,49,95,121,111,110,108,121,0),548], [String.fromCharCode(117,95,54,56,95,98,105,110,107,100,115,112,0),214]]);
       let t_unlockD = String.fromCharCode(102,95,55,57,95,97,114,114,97,121,0);
       let traminiT = 1.0;
       let untickP = String.fromCharCode(115,97,100,98,95,106,95,51,50,0);
       let usernamey = 3;
      while (2 == (5 << (Math.min(3, untickP.length)))) {
         usernamey += 2 | usernamey;
         break;
      }
      while (3 < (3 % (Math.max(3, connectionN.size))) || 1.24 < (5.12 / (Math.max(10, traminiT)))) {
         connectionN = new Map([[`${connectionN.size}`, untickP.length + 1]]);
         break;
      }
         untickP += "1";
      if (1 == (untickP.length | usernamey)) {
         untickP = `${parseInt(`${traminiT}`)}`;
      }
       let rewindb = false;
      if (!rewindb) {
         rewindb = (t_unlockD.length | untickP.length) == 24;
      }
         usernamey += (String.fromCharCode(103,0) == t_unlockD ? t_unlockD.length : parseInt(`${traminiT}`));
      let collectionm = 7951378.0 <= traminiT;
      do {
         traminiT /= Math.max(2, untickP.length + connectionN.size);
         if (collectionm) {
            break;
         }
      } while (collectionm && (rewindb));
      let subst = 6219882 <= usernamey;
      do {
         usernamey &= t_unlockD.length;
         if (subst) {
            break;
         }
      } while (((3 * usernamey) <= 5) && subst);
         rewindb = untickP.length > connectionN.size;
         connectionN = new Map([[`${usernamey}`, 2 + usernamey]]);
      if (5 >= untickP.length) {
         untickP += `${connectionN.size << (Math.min(Math.abs(3), 1))}`;
      }
      while ((traminiT / (Math.max(1, t_unlockD.length))) >= 3.7) {
         t_unlockD += `${untickP.length}`;
         break;
      }
          let statisticsactive9 = 0.0;
          let feedback7 = String.fromCharCode(109,95,52,50,95,118,105,101,119,101,114,0);
          let profileinactiveb = String.fromCharCode(116,105,99,107,115,95,50,95,57,51,0);
         traminiT += usernamey;
         statisticsactive9 += parseFloat(`${feedback7.length * 3}`);
         feedback7 += `${parseInt(`${statisticsactive9}`) + 1}`;
         profileinactiveb = `${profileinactiveb.length / 2}`;
      if ((usernamey - parseInt(`${traminiT}`)) >= 3 && (usernamey - parseInt(`${traminiT}`)) >= 3) {
          let controlA = String.fromCharCode(115,95,50,52,95,108,105,98,109,0);
          let statsnomoredataw = String.fromCharCode(117,95,49,95,117,105,100,0);
          let penaltygoal4 = true;
         usernamey -= statsnomoredataw.length;
         controlA = `${(controlA == String.fromCharCode(118,0) ? (penaltygoal4 ? 3 : 2) : controlA.length)}`;
         statsnomoredataw += `${((penaltygoal4 ? 4 : 4) & 3)}`;
      }
      attributedstring5 = `${usernamey}`;
      break;
   }
      championA.set(catagoryr, catagoryr.length);
      navigation.navigate('PlaylistDetail', {
        topic_id: currentVod.mini_video_topic.topic_id,
      });

   let navigationR = 9254804 >= championA.size;
   do {
      championA = new Map([[`${championA.size}`, (championA.size | (caste ? 3 : 5))]]);
      if (navigationR) {
         break;
      }
   } while (navigationR && ((championA.size - 1) > 3 || 1 > championA.size));
   if (catagoryr != attributedstring5) {
      attributedstring5 += `${catagoryr.length / (Math.max(2, 3))}`;
   }

      

      caste = 8 > championA.size;
   for (let v = 0; v < 1; v++) {
       let mutedl = 0;
       let renewx = 5.0;
       let whitel = String.fromCharCode(101,112,101,108,95,109,95,55,49,0);
      let singleN = whitel.length <= 6549893;
      do {
         whitel = "2";
         if (singleN) {
            break;
         }
      } while ((2 > (whitel.length ^ 3) && 5 > (whitel.length ^ 3)) && singleN);
      while (whitel.length >= 4) {
          let iconarrowrightwhiteQ = String.fromCharCode(108,95,55,95,104,101,118,99,0);
          let kinit_cgu = 1.0;
          let inviteS = false;
          let iconsubssuccessn = String.fromCharCode(101,100,105,116,101,100,95,52,95,53,56,0);
          let defaultlogo6 = String.fromCharCode(102,95,52,95,101,110,103,108,105,115,104,0);
         whitel += "3";
         iconarrowrightwhiteQ = `${defaultlogo6.length}`;
         kinit_cgu /= Math.max(1, iconsubssuccessn.length);
         inviteS = String.fromCharCode(53,0) == iconarrowrightwhiteQ;
         iconsubssuccessn += `${parseInt(`${kinit_cgu}`) % (Math.max(5, defaultlogo6.length))}`;
         break;
      }
         mutedl %= Math.max(1, parseInt(`${renewx}`) * 2);
      if (3 >= (whitel.length << (Math.min(Math.abs(2), 2))) && (whitel.length << (Math.min(Math.abs(2), 2))) >= 5) {
          let mode6 = String.fromCharCode(98,95,54,49,95,114,118,100,97,116,97,0);
          let nativemodulee = 5;
         renewx += parseFloat(`${mutedl % (Math.max(parseInt(`${renewx}`), 7))}`);
         mode6 = `${nativemodulee << (Math.min(mode6.length, 3))}`;
         nativemodulee /= Math.max(1, mode6.length);
      }
      for (let y = 0; y < 2; y++) {
         mutedl *= 2 - mutedl;
      }
      while (1 <= (mutedl % 1)) {
         mutedl %= Math.max(5, mutedl);
         break;
      }
      for (let m = 0; m < 2; m++) {
         whitel = "1";
      }
      let defaultbasketballbgo = mutedl >= 6970658;
      do {
          let buildM = 1.0;
         mutedl >>= Math.min(5, Math.abs((String.fromCharCode(85,0) == whitel ? whitel.length : parseInt(`${renewx}`))));
         buildM *= parseFloat(`${parseInt(`${buildM}`)}`);
         if (defaultbasketballbgo) {
            break;
         }
      } while (defaultbasketballbgo && ((renewx - 5.81) >= 3.74));
      while ((parseInt(`${renewx}`) / (Math.max(whitel.length, 5))) == 2) {
         renewx /= Math.max(4, (parseFloat(`${String.fromCharCode(83,0) == whitel ? whitel.length : parseInt(`${renewx}`)}`)));
         break;
      }
      attributedstring5 += `${parseInt(`${popupS}`) | 1}`;
   }
      yys_giftbutton_footballtrophy.watchAnytimePlaylistClicksAnalytics();
      
    } else {

   while (caste) {
       let listx = true;
       let dicelogo2 = String.fromCharCode(100,105,97,108,111,103,117,101,115,95,49,95,55,56,0);
       let vipsporty: Map<any, any> = new Map([[String.fromCharCode(97,95,55,53,95,112,111,115,116,101,114,115,0),717], [String.fromCharCode(113,117,111,116,105,101,110,116,95,106,95,54,49,0),385]]);
         vipsporty.set(`${listx}`, (dicelogo2 == String.fromCharCode(105,0) ? (listx ? 3 : 4) : dicelogo2.length));
         dicelogo2 += `${vipsporty.size / (Math.max(dicelogo2.length, 3))}`;
      let scorepopsound3 = listx ? !listx : listx;
      do {
         listx = (2 == ((!listx ? dicelogo2.length : 2) & dicelogo2.length));
         if (scorepopsound3) {
            break;
         }
      } while ((3 > (vipsporty.size + 4) && 4 > vipsporty.size) && scorepopsound3);
         listx = dicelogo2.length > 34;
         listx = vipsporty.size == 33;
      for (let u = 0; u < 3; u++) {
          let embed1 = String.fromCharCode(107,100,102,95,111,95,51,56,0);
          let forwardo = String.fromCharCode(101,95,53,52,95,115,117,98,115,121,115,116,101,109,0);
          let libturbomodulejsijni7 = String.fromCharCode(116,105,108,101,104,100,114,95,113,95,57,51,0);
          let notificationfillempty2 = 2;
         vipsporty.set(`${listx}`, ((listx ? 5 : 1) % (Math.max(6, libturbomodulejsijni7.length))));
         embed1 = "1";
         forwardo += `${embed1.length * notificationfillempty2}`;
         libturbomodulejsijni7 += `${forwardo.length}`;
         notificationfillempty2 |= notificationfillempty2 - 2;
      }
       let bellx = String.fromCharCode(115,101,116,105,95,114,95,52,0);
       let leftr = String.fromCharCode(105,95,54,49,95,97,98,108,0);
         leftr += `${bellx.length << (Math.min(Math.abs(1), 5))}`;
         listx = leftr.length < 43 && !listx;
      popupS *= (arrowc == String.fromCharCode(114,0) ? attributedstring5.length : arrowc.length);
      break;
   }
   for (let i = 0; i < 2; i++) {
      caste = 12 <= attributedstring5.length;
   }
      dispatch(playVod(currentVod.mini_video_vod));

      attributedstring5 = `${iconqqB.length}`;
   while ((parseInt(`${popupS}`) + arrowc.length) >= 2) {
      popupS -= catagoryr.length;
      break;
   }
      navigation.navigate('播放IOS', {
        vod_id: currentVod.vod?.vod_id,
      });

   let matchesY = arrowc == String.fromCharCode(101,49,100,0);
   do {
       let iconrightorangeL: Map<any, any> = new Map([[String.fromCharCode(109,95,48,95,100,101,102,115,0),428], [String.fromCharCode(109,95,50,52,95,104,111,110,101,0),598]]);
          let matchesP: Array<any> = [301, 738];
         iconrightorangeL.set(`${matchesP.length}`, matchesP.length);
      if (Array.from(iconrightorangeL.keys()).includes(`${iconrightorangeL.size}`)) {
         iconrightorangeL = new Map([[`${iconrightorangeL.size}`, 3]]);
      }
      if (3 < (5 | iconrightorangeL.size) || 4 < (iconrightorangeL.size | 5)) {
          let apple2: Map<any, any> = new Map([[String.fromCharCode(113,95,51,51,95,106,97,99,111,115,117,98,0),true ], [String.fromCharCode(110,95,51,50,95,114,105,103,104,116,0),false ], [String.fromCharCode(97,112,116,120,104,100,95,55,95,56,53,0),true ]]);
          let configureO = 5;
         iconrightorangeL = new Map([[`${iconrightorangeL.size}`, apple2.size + 3]]);
         apple2 = new Map([[`${configureO}`, 2 >> (Math.min(4, Math.abs(configureO)))]]);
      }
      arrowc = `${attributedstring5.length}`;
      if (matchesY) {
         break;
      }
   } while (matchesY && (arrowc.length < 3 || analyticsh));
   while (2 > (catagoryr.length << (Math.min(Math.abs(4), 2))) || (4 << (Math.min(2, iconqqB.length))) > 5) {
       let clubx = 4;
         clubx += clubx;
      let p_centerI = 6332577 <= clubx;
      do {
         clubx &= clubx;
         if (p_centerI) {
            break;
         }
      } while (p_centerI && (5 <= clubx));
          let updatesU = 4.0;
         clubx &= 2;
         updatesU += parseFloat(`${parseInt(`${updatesU}`)}`);
      catagoryr = `${(String.fromCharCode(109,0) == attributedstring5 ? iconqqB.length : attributedstring5.length)}`;
      break;
   }

      

       let philippinesb: Map<any, any> = new Map([[String.fromCharCode(100,101,108,105,109,105,116,101,114,95,120,95,49,48,0),632], [String.fromCharCode(115,117,98,109,105,116,95,119,95,57,49,0),273], [String.fromCharCode(116,95,56,53,95,112,97,114,115,101,0),687]]);
          let libglogU = String.fromCharCode(116,97,98,108,101,103,101,110,95,116,95,54,49,0);
          let dialogy = String.fromCharCode(105,95,55,53,95,100,111,119,110,115,97,109,112,108,101,0);
          let roundR = String.fromCharCode(103,95,54,53,95,115,105,100,101,100,97,116,97,0);
         philippinesb.set(libglogU, libglogU.length ^ 2);
         dialogy = `${roundR.length & 1}`;
         roundR += `${roundR.length | dialogy.length}`;
       let disconnectedK = String.fromCharCode(109,97,108,108,111,99,95,117,95,49,54,0);
       let componentn = String.fromCharCode(103,95,56,95,119,114,105,116,101,97,98,108,101,0);
         componentn = `${philippinesb.size}`;
      iconqqB = [arrowc.length];
   for (let r = 0; r < 1; r++) {
      analyticsh = catagoryr.length == popupS;
   }
      yys_giftbutton_footballtrophy.watchAnytimeVideoClicksAnalytics();
      
    }
  };

  const handleViewLayout = (event: any) => {
    const { height } = event.nativeEvent.layout;
    setImageContainerHeight(height);
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        showControls();
        if (overlayRef.current) {
          handlePlayPause();
        }
      }}>
      <View>
        <View style={[styles.container, { height: displayHeight }]}>
          {(isBuffering || (Platform.OS === 'ios' ? !isVideoReadyIos : !isVideoReadyAndroid)) && isShowVideo && (
            <View style={styles.buffering}>
              <FastImage
                source={require('../../../../static/images/constantsMimePhone.gif')}
                style={{ width: 100, height: 100, }}
                resizeMode="contain"
                useFastImage={true}
              />
            </View>
          )}
          {(Platform.OS === 'ios' ? !isVideoReadyIos : !isVideoReadyAndroid) && thumbnail &&
            <FastImage
              source={{ uri: thumbnail }}
              style={styles.video}
              resizeMode="contain"
              useFastImage={true}
            />
          }
          {isShowVideo &&
            <Video
              ref={videoRef}
              resizeMode="contain"
              
              source={{
                uri: currentVod.mini_video_origin_video_url,
                headers: {
                  'User-Agent':
                    'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
                },
              }}
              onReadyForDisplay={() => setVideoReadyIos(true)}
              onBuffer={onBuffer}
              repeat={true}
              style={{
                ...styles.video,
                opacity: (Platform.OS === 'ios' ? isVideoReadyIos : isVideoReadyAndroid) ? 1 : 0,
              }}
              
              
              paused={isPause || onSliding || (Platform.OS === 'ios' && !isVideoReadyIos)}
              onLoad={handleLoad}
              onLoadStart={handleLoadStart}
              onProgress={handleProgress}
              progressUpdateInterval={400}
            />
          }
          <View
            style={{
              position: 'absolute',
              left: (Dimensions.get('window').width - 80) / 2,
              top: (Dimensions.get('window').height - 130) / 2,
              zIndex: 999,
            }}>
            {showIcon && (isPause ? <BlackPlaySvg /> : <PauseSvg />)}
          </View>
          <View
            style={{
              position: 'absolute',
              left: 0,
              bottom: 0,
              width: '100%',
              justifyContent: 'flex-end'
            }}>
            <View style={{ paddingHorizontal: 20 }}>
              {currentVod != undefined &&
                currentVod.mini_video_original_img_url != null &&
                currentVod.mini_video_original_img_url != '' && (
                  <View style={{ flexWrap: 'wrap' }}>
                    {/* <View style={{ flex: 10, flexDirection: 'column', justifyContent: 'flex-end', marginRight: 35 }}> */}
                    <View
                      style={{
                        padding: 8,
                        height: 75,
                        flexDirection: 'row',
                        borderRadius: 8,
                        backgroundColor: 'rgba(106, 106, 106, 0.25)',
                      }}>
                      {!isBodan &&
                        <View
                          style={{
                            width: 45,
                            flexDirection: 'column',
                            justifyContent: 'flex-end',
                          }}
                          onLayout={handleViewLayout}>
                          <TouchableOpacity style={{ flex: 1, position: 'relative' }} onPress={redirectVod}>
                            <FastImage
                              style={{ flex: 1, borderRadius: 6 }}
                              source={{
                                uri: currentVod.mini_video_original_img_url,
                                priority: "high",
                              }}
                            />
                          </TouchableOpacity>
                        </View>
                      }
                      {isBodan &&
                        <View
                          style={{
                            width: 45,
                            flexDirection: 'column',
                            justifyContent: 'flex-end',
                            marginRight: 6
                          }}
                          onLayout={handleViewLayout}>
                          <TouchableOpacity style={{ flex: 1, position: 'relative' }} onPress={redirectVod}>
                            <FastImage
                              style={{ flex: 1, borderRadius: 6, position: 'absolute', width: '100%', height: '100%', zIndex: 3 }}
                              source={{
                                uri: currentVod.mini_video_original_img_url,
                                priority: "high",
                              }}
                              onProgress={(e) => {
                                setImageLoaded(false)
                              }}
                              onLoad={(e) => {
                                setImageLoaded(true)
                              }}
                            />
                            {imageLoaded && isBodan &&
                              <View>
                                <FastImage
                                  style={{ flex: 1, borderRadius: 6, position: 'absolute', width: '100%', height: imageContainerHeight - 6, zIndex: 2, top: 5.8 }}
                                  source={require('../../../../static/images/backwhiteTerms.jpeg')}
                                />
                                <FastImage
                                  style={{ flex: 1, borderRadius: 6, position: 'absolute', width: '100%', height: imageContainerHeight - 12, top: 11.8 }}
                                  source={require('../../../../static/images/scoreNbatrophyTemplateprocessor.jpg')}
                                />
                              </View>
                            }
                          </TouchableOpacity>
                        </View>
                      }
                      <View
                        style={{
                          flexDirection: 'column',
                          alignContent: 'center',
                          marginLeft: 10,
                          marginRight: 5,
                        }}>
                        <TouchableOpacity onPress={redirectVod}>
                          <View
                            style={{
                              flexDirection: 'column',
                              justifyContent: 'space-between',
                              height: '100%',
                              paddingVertical: 5,
                            }}>
                            <View
                              style={{
                                justifyContent: 'flex-start',
                                flexDirection: 'row',
                              }}>
                              <View>
                                <Text
                                  numberOfLines={1}
                                  ellipsizeMode="tail"
                                  style={{
                                    ...textVariants.bodyBold,
                                    color: colors.text,
                                    fontSize: 15,
                                  }}>
                                  {vodName}
                                </Text>
                              </View>
                            </View>
                            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                              <View style={{ flexWrap: 'wrap' }}>
                                {isBodan ?
                                  <PlayBodanSvg width={20} height={20} />
                                  :
                                  <PlayZhengpian1Svg width={20} height={20} />
                                }
                              </View>
                              <View
                                style={{
                                  paddingLeft: 6,
                                  justifyContent: 'center',
                                }}>
                                <Text
                                  style={{
                                    ...textVariants.subBody,
                                    color: colors.text,
                                    fontSize: 14,
                                  }}>
                                  {watchText}
                                </Text>
                              </View>
                            </View>
                          </View>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                )}
              <View style={{ marginTop: 10, flexDirection: 'row' }}>
                {/* <View style={{ flex: 10, flexDirection: 'column', justifyContent: 'flex-end', marginRight: 35 }}> */}
                <View
                  style={{
                    flex: 10,
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                  }}>
                  <TouchableOpacity>
                    <Text style={{ ...textVariants.small, color: colors.text, paddingBottom: 20 }}>
                      {currentVod.mini_video_title}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            {currentVod.is_collection?.toLowerCase() == "y" &&
              <View style={{ backgroundColor: '#171717', paddingBottom: 18, paddingTop: 12, paddingLeft: 20, paddingRight: 20 }}>
                <TouchableOpacity style={{ flex: 1 }} onPress={() => {
                  openBottomSheet();
                }}>
                  <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                      <HejiSvg height={24} width={24} />
                      <Text style={{ paddingLeft: 6, alignSelf: 'center', fontSize: 14, color: colors.text, fontWeight: '700' }}>{currentVod.mini_video_collection_title}</Text>
                    </View>
                    <View style={{}}>
                      <ExpandHejiSvg height={24} width={24} />
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            }
          </View>
          <Slider
            style={styles.slider}
            maximumValue={duration}
            minimumValue={0}
            disabled={!showOverlay}
            thumbTouchSize={{ width: 10, height: 10 }}
            allowTouchTrack={!isBuffering}
            thumbStyle={{
              height: showOverlay ? 8 : 1,
              width: showOverlay ? 8 : 1,
            }}
            value={currentDuration}
            onValueChange={handleSeek}
            onSlidingComplete={handleSeek}
            minimumTrackTintColor={'#ffffff80'}
            maximumTrackTintColor={'#ffffff24'}
            thumbTintColor={'#FFFFFF'}
            trackStyle={{ height: 2, opacity: 1 }}
          />
          {
            duration > 0 && showOverlay && currentDuration >= 0 &&
            (
              duration < 3600
                ? <Text style={{
                  position: 'absolute',
                  bottom: 12,
                  backgroundColor: '#000',
                  borderRadius: 4,
                  paddingVertical: 6,
                  paddingHorizontal: 10,
                  left: Math.min(Math.max(0, (currentDuration / duration) * windowWidth - 44), windowWidth - 76)
                }}>
                  <Text style={textVariants.small}>{new Date(currentDuration * 1000).toISOString().substring(14, 19)}</Text>
                  <Text style={{ ...textVariants.small, color: colors.muted }}>{` / ${new Date(duration * 1000).toISOString().substring(14, 19)}`}</Text>
                </Text>
                : <Text style={{
                  position: 'absolute',
                  bottom: 20,
                  left: Math.min(Math.max(0, (currentDuration / duration) * windowWidth - 34), windowWidth - 76)
                }}>
                  <Text style={textVariants.small}>{new Date(currentDuration * 1000).toISOString().substring(11, 19)}</Text>
                  <Text style={{ ...textVariants.small, color: colors.muted }}>{` / ${new Date(duration * 1000).toISOString().substring(11, 19)}`}</Text>
                </Text>
            )
          }
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
export default memo(ShortVideoPlayer);

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  video: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  bottomSection: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 8,
    paddingBottom: 16,
  },
  bottomLeftSection: {
    flex: 4,
  },
  bottomRightSection: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  channelName: {
    color: 'white',
    fontWeight: 'bold',
  },
  caption: {
    color: 'white',
    marginVertical: 8,
  },
  musicNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  musicNameIcon: {
    width: 12,
    height: 12,
    marginRight: 8,
  },
  musicName: {
    color: 'white',
  },
  musicDisc: {
    width: 40,
    height: 40,
  },
  verticalBar: {
    position: 'absolute',
    right: 8,
    bottom: 72,
  },
  verticalBarItem: {
    marginBottom: 24,
    alignItems: 'center',
  },
  verticalBarIcon: {
    width: 32,
    height: 32,
  },
  verticalBarText: {
    color: 'white',
    marginTop: 4,
  },
  avatarContainer: {
    marginBottom: 48,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  followButton: {
    position: 'absolute',
    bottom: -8,
  },
  followIcon: {
    width: 21,
    height: 21,
  },
  floatingMusicNote: {
    position: 'absolute',
    right: 40,
    bottom: 16,
    width: 16,
    height: 16,
    tintColor: 'white',
  },
  buffering: {
    paddingHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 3,
    color: 'yellow',
    position: 'absolute',
    top: '40%',
    left: '36%',
    zIndex: 999,
  },
  slider: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    height: 9,
  }
});
