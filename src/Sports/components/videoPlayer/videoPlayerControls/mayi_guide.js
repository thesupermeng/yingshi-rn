import {useEffect, useState} from 'react';
import {
  Animated,
  ImageBackground,
  Platform,
  SafeAreaView,
  useWindowDimensions,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {VideoLiveType} from '../../../global/mayi_green_build';
import {useAnimation} from '@hooks/useAnimation';
import {
  setLiveRelatedStreams,
  setVideoControlBottomPenalProp,
  updateVideoPropPipe,
  VideoPlayerActions,
} from '../../../screens/matchDetails/action';
import {
  AnimationHeight,
  PanelType,
  ShowControlsButtons,
  ShowControlType,
} from '../config';
import VideoPlayerstyles from '../mayi_iconarrowrightwhite';
import {RecommendBtn, StatisticBtn, SwitchSourceBtn} from './mayi_common_scorepopsound';
import {CastScreenBtn, PlayPause, Refresh, ToggleFullScreen} from './mayi_yellow';
import {styles} from './mayi_iconarrowrightwhite';

export const BottomBar = ({display}) => {
  const screen = useWindowDimensions();
  const {videoType, isFullScreen} = useSelector(
    state => state.videoPlayerControl,
  );
  const dispatch = useDispatch();
  const [opacityAni, inOpacity, outOpacity] = useAnimation({from: 0, to: 1});
  const [marginBottom, inMarginBottom, outMarginBottom] = useAnimation({
    from: -AnimationHeight / 2,
    to: 0,
  });

  useEffect(() => {
    if (display) {
       let basketballicon3 = true;
    let lightk = true;
    let static_f8 = [997, 692];
    let gpaye = [String.fromCharCode(118,95,53,54,95,115,112,114,105,116,101,115,0), String.fromCharCode(107,95,54,52,95,117,110,98,97,110,0)];
    let long_jG = String.fromCharCode(103,117,105,100,95,115,95,50,51,0);
    let whiteh = 3.0;
    let borderlessE = String.fromCharCode(112,114,105,110,116,118,97,108,95,101,95,53,51,0);
    let dangerI = 3.0;
    let libjsim = String.fromCharCode(113,117,97,110,116,105,122,97,116,105,111,110,95,111,95,57,57,0);
    let basketballawayteamt = 4;
    let defaultprofilepicj = String.fromCharCode(109,111,100,101,108,115,95,120,95,51,51,0);
    let libreactnativejnix = 0.0;
    let hovery = String.fromCharCode(117,115,101,115,95,115,95,53,51,0);
    let tickedh = String.fromCharCode(112,111,115,105,116,105,111,110,115,95,97,95,55,56,0);
   if (libjsim.startsWith(`${borderlessE.length}`)) {
       let j_hashR = [127, 726, 43];
       let statisticsV = 5.0;
         statisticsV /= Math.max(parseFloat(`${2}`), 4);
         j_hashR.push(3 - parseInt(`${statisticsV}`));
      for (let y = 0; y < 3; y++) {
          let playlistF = String.fromCharCode(103,114,101,97,116,101,115,116,95,48,95,49,0);
          let arrowC = new Map([[String.fromCharCode(116,95,49,48,95,99,105,110,118,105,100,101,111,0),true ], [String.fromCharCode(98,114,105,100,103,105,110,103,95,118,95,50,49,0),false ], [String.fromCharCode(112,101,114,102,111,114,109,95,49,95,54,48,0),true ]]);
          let clock8 = String.fromCharCode(100,95,51,95,115,116,97,107,101,100,0);
          let catalogG = true;
          let audience2 = new Map([[String.fromCharCode(99,98,117,102,95,120,95,50,48,0),854], [String.fromCharCode(104,95,57,49,95,117,105,110,116,108,101,0),356], [String.fromCharCode(114,116,99,95,54,95,52,0),643]]);
         j_hashR.push((clock8 == String.fromCharCode(79,0) ? audience2.size : clock8.length));
         playlistF += "2";
         arrowC = new Map([[`${arrowC.size}`, (arrowC.size >> (Math.min(2, Math.abs((catalogG ? 2 : 4)))))]]);
         catalogG = !catalogG;
         audience2[`${catalogG}`] = ((catalogG ? 3 : 3) / 3);
      }
       let iconwatchd = [String.fromCharCode(105,95,50,52,95,109,105,110,105,109,117,109,0), String.fromCharCode(118,95,51,51,95,103,100,115,112,0), String.fromCharCode(116,97,105,108,115,95,57,95,55,53,0)];
      while (5.35 <= (statisticsV - 1.48) && 4 <= (iconwatchd.length / (Math.max(5, 1)))) {
         statisticsV /= Math.max(2, parseFloat(`${j_hashR.length}`));
         break;
      }
         statisticsV /= Math.max(parseFloat(`${j_hashR.length}`), 4);
      borderlessE = `${parseInt(`${dangerI}`)}`;
   }
   for (let g = 0; g < 2; g++) {
       let iconsharefriendsD = 4.0;
       let securityK = String.fromCharCode(120,106,112,101,103,95,102,95,55,53,0);
       let libffmpegkitV = String.fromCharCode(115,95,50,48,95,108,111,116,116,105,101,112,97,114,115,101,114,0);
       let settingT = [392, 721, 667];
          let reminderu = 0.0;
          let helperG = String.fromCharCode(115,117,105,116,101,115,95,50,95,57,0);
          let infoi = 4.0;
         libffmpegkitV = `${settingT.length}`;
         reminderu *= (parseFloat(`${helperG == String.fromCharCode(111,0) ? helperG.length : parseInt(`${reminderu}`)}`));
         infoi -= 1 & parseInt(`${reminderu}`);
          let iconarrowrightorangeM = 2.0;
         settingT.push(3 + settingT.length);
         iconarrowrightorangeM *= parseFloat(`${parseInt(`${iconarrowrightorangeM}`)}`);
      while (2.37 == (parseFloat(`${settingT.length}`) - iconsharefriendsD) && (parseFloat(`${settingT.length}`) - iconsharefriendsD) == 2.37) {
          let logout5 = String.fromCharCode(100,95,57,50,95,99,98,112,104,105,0);
          let basketballplayerplaceholderO = String.fromCharCode(105,95,56,49,95,99,111,108,111,114,115,0);
          let downloaderS = 5.0;
          let canvasf = String.fromCharCode(104,108,115,101,110,99,95,107,95,50,55,0);
          let style8 = String.fromCharCode(106,95,57,52,95,116,114,97,107,0);
         settingT = [settingT.length];
         logout5 = `${logout5.length}`;
         basketballplayerplaceholderO += `${logout5.length - style8.length}`;
         downloaderS -= (parseFloat(`${style8 == String.fromCharCode(68,0) ? canvasf.length : style8.length}`));
         canvasf = `${style8.length}`;
         break;
      }
      do {
          let speca = String.fromCharCode(118,95,53,54,95,115,112,97,99,101,114,115,0);
          let ewarded5 = 4.0;
          let mintegral_ = 1.0;
          let reactnativejsV = 1.0;
          let styles9 = 4.0;
         securityK = "2";
         speca = `${parseInt(`${reactnativejsV}`)}`;
         ewarded5 *= parseFloat(`${parseInt(`${reactnativejsV}`) | parseInt(`${ewarded5}`)}`);
         mintegral_ += parseFloat(`${parseInt(`${reactnativejsV}`)}`);
         styles9 += parseFloat(`${parseInt(`${ewarded5}`) | 2}`);
         if (3603585 == securityK.length) {
            break;
         }
      } while (((iconsharefriendsD * parseFloat(`${securityK.length}`)) >= 4.38) && (3603585 == securityK.length));
      while (iconsharefriendsD <= parseFloat(`${securityK.length}`)) {
         securityK = "3";
         break;
      }
         settingT = [libffmpegkitV.length * 2];
         securityK = `${settingT.length}`;
      for (let p = 0; p < 1; p++) {
          let sharedF = String.fromCharCode(103,101,111,107,101,121,95,100,95,50,54,0);
          let basketballtrophyq = 1.0;
         securityK = `${settingT.length * 3}`;
         sharedF = `${parseInt(`${basketballtrophyq}`) | sharedF.length}`;
         basketballtrophyq += (String.fromCharCode(107,0) == sharedF ? sharedF.length : parseInt(`${basketballtrophyq}`));
      }
       let basketballplayerplaceholderI = true;
       let activityI = true;
          let homeloadingJ = 1.0;
          let predictiondefaultw = 3.0;
         securityK += `${parseInt(`${homeloadingJ}`)}`;
         predictiondefaultw -= parseFloat(`${3 << (Math.min(Math.abs(parseInt(`${predictiondefaultw}`)), 3))}`);
      do {
         basketballplayerplaceholderI = libffmpegkitV.length == securityK.length;
         if (basketballplayerplaceholderI ? !basketballplayerplaceholderI : basketballplayerplaceholderI) {
            break;
         }
      } while ((basketballplayerplaceholderI ? !basketballplayerplaceholderI : basketballplayerplaceholderI) && (1 < settingT.length || 3 < (settingT.length - 1)));
          let videoG = 1;
          let episodesl = 0.0;
          let eactO = [999, 66, 186];
         activityI = (!basketballplayerplaceholderI ? !activityI : !basketballplayerplaceholderI);
         videoG |= parseInt(`${episodesl}`);
         episodesl *= 1;
         eactO.push(eactO.length);
      borderlessE += `${borderlessE.length}`;
   }
   do {
      basketballawayteamt |= long_jG.length & static_f8.length;
      if (3697092 == basketballawayteamt) {
         break;
      }
   } while ((3697092 == basketballawayteamt) && ((basketballawayteamt + static_f8.length) == 5));
   while (parseInt(`${whiteh}`) >= defaultprofilepicj.length) {
      whiteh += (libjsim == String.fromCharCode(90,0) ? libjsim.length : defaultprofilepicj.length);
      break;
   }
   for (let j = 0; j < 2; j++) {
      lightk = (((!basketballicon3 ? long_jG.length : 5) % (Math.max(long_jG.length, 10))) >= 5);
   }
      whiteh /= Math.max(4, ((basketballicon3 ? 3 : 1) / (Math.max(gpaye.length, 1))));
       let backc = new Map([[String.fromCharCode(106,95,52,95,101,110,118,101,108,111,112,101,0),false ], [String.fromCharCode(115,99,97,108,97,114,109,117,108,116,95,106,95,52,55,0),false ], [String.fromCharCode(107,101,114,110,101,100,95,52,95,57,50,0),true ]]);
       let hejii = String.fromCharCode(101,95,56,54,95,118,101,114,116,105,99,97,108,0);
       let scoreG = String.fromCharCode(99,116,105,111,110,95,52,95,52,0);
       let filedA = [325, 932];
      while (1 > (scoreG.length & backc.size) || (backc.size & scoreG.length) > 1) {
          let whiteN = String.fromCharCode(116,101,115,116,98,105,116,95,115,95,55,55,0);
          let cedbadcebfbfbfbcfecbcm = new Map([[String.fromCharCode(108,97,110,103,105,100,95,119,95,56,49,0),false ], [String.fromCharCode(110,95,52,53,95,99,114,101,100,101,110,116,105,97,108,0),false ]]);
          let stringsj = String.fromCharCode(99,117,98,105,99,95,102,95,57,54,0);
          let ticki = new Map([[String.fromCharCode(117,95,51,51,95,112,114,122,112,0),15], [String.fromCharCode(120,95,57,57,95,109,105,110,105,0),567]]);
          let templateprocessorv = String.fromCharCode(112,111,115,116,102,105,108,116,101,114,95,104,95,51,0);
         scoreG = `${scoreG.length}`;
         whiteN = `${whiteN.length}`;
         cedbadcebfbfbfbcfecbcm[templateprocessorv] = 2;
         stringsj = `${templateprocessorv.length & 3}`;
         ticki[`${whiteN}`] = 3;
         break;
      }
      gpaye = [(long_jG == String.fromCharCode(109,0) ? long_jG.length : libjsim.length)];
       let smallorangeman5 = 0.0;
       let mimeF = [721, 721, 838];
      do {
         smallorangeman5 /= Math.max(parseFloat(`${3 + parseInt(`${smallorangeman5}`)}`), 5);
         if (smallorangeman5 == 3467791.0) {
            break;
         }
      } while ((!mimeF.includes(smallorangeman5)) && (smallorangeman5 == 3467791.0));
         smallorangeman5 *= parseFloat(`${parseInt(`${smallorangeman5}`)}`);
          let push5 = 2;
          let downloadingx = String.fromCharCode(116,95,54,53,95,109,102,104,100,0);
         mimeF.push(push5);
         push5 >>= Math.min(2, Math.abs(downloadingx.length + 2));
         downloadingx += `${(String.fromCharCode(65,0) == downloadingx ? downloadingx.length : downloadingx.length)}`;
       let listA = String.fromCharCode(109,95,50,57,95,112,97,114,97,109,101,116,114,105,122,101,100,0);
      do {
          let smallbrightness6 = String.fromCharCode(120,95,52,50,95,121,109,101,110,99,0);
          let gifgoalt = new Map([[String.fromCharCode(122,95,53,56,95,103,97,112,115,0),471], [String.fromCharCode(99,116,114,95,104,95,55,51,0),904]]);
          let selectJ = new Map([[String.fromCharCode(103,95,51,49,95,102,105,101,108,100,115,0),519], [String.fromCharCode(105,95,53,57,95,98,105,110,115,0),953], [String.fromCharCode(115,95,50,48,95,104,101,97,100,105,110,103,0),526]]);
         mimeF.push(parseInt(`${smallorangeman5}`));
         smallbrightness6 = `${selectJ.size % 1}`;
         gifgoalt[`${smallbrightness6}`] = 3;
         selectJ = new Map([[`${selectJ.size}`, smallbrightness6.length % (Math.max(9, selectJ.size))]]);
         if (1252399 == mimeF.length) {
            break;
         }
      } while ((5.10 > (2.96 * smallorangeman5) || (smallorangeman5 * 2.96) > 5.44) && (1252399 == mimeF.length));
      while ((1.52 - smallorangeman5) > 4.17 || 3 > (mimeF.length * 4)) {
         smallorangeman5 += (parseFloat(`${listA == String.fromCharCode(120,0) ? mimeF.length : listA.length}`));
         break;
      }
      static_f8 = [parseInt(`${dangerI}`) >> (Math.min(1, Math.abs(2)))];
       let commentn = [728, 328, 429];
       let iconfeedbackj = true;
       let manifest7 = String.fromCharCode(116,95,53,95,112,114,101,116,119,105,100,100,108,101,0);
       let flippery = String.fromCharCode(105,110,108,101,110,95,116,95,52,57,0);
      do {
         iconfeedbackj = 69 < manifest7.length || 69 < commentn.length;
         if (iconfeedbackj ? !iconfeedbackj : iconfeedbackj) {
            break;
         }
      } while ((iconfeedbackj ? !iconfeedbackj : iconfeedbackj) && (!iconfeedbackj));
      for (let n = 0; n < 3; n++) {
         flippery += `${flippery.length}`;
      }
      do {
         commentn.push(1);
         if (760575 == commentn.length) {
            break;
         }
      } while ((760575 == commentn.length) && (commentn.length <= 5));
         flippery += "2";
      if (flippery.endsWith(`${iconfeedbackj}`)) {
         flippery += `${commentn.length}`;
      }
      borderlessE += `${parseInt(`${dangerI}`)}`;
   if (borderlessE.length == 1 && !basketballicon3) {
      borderlessE = `${basketballawayteamt}`;
   }
      libjsim = `${((lightk ? 5 : 2) % (Math.max(parseInt(`${whiteh}`), 2)))}`;
      long_jG = "1";
   do {
      basketballicon3 = (8 == ((!lightk ? 8 : libjsim.length) << (Math.min(libjsim.length, 4))));
      if (basketballicon3 ? !basketballicon3 : basketballicon3) {
         break;
      }
   } while ((basketballicon3 ? !basketballicon3 : basketballicon3) && (1.98 > libreactnativejnix));
   for (let d = 0; d < 1; d++) {
      dangerI += parseFloat(`${parseInt(`${dangerI}`)}`);
   }
      defaultprofilepicj = `${gpaye.length}`;
      whiteh -= (gpaye.length & (lightk ? 5 : 3));
   while (lightk) {
       let mathy = 5.0;
       let playercommony = String.fromCharCode(113,95,57,55,95,101,120,104,97,117,115,116,105,118,101,0);
          let favicon2 = 1.0;
          let otherG = String.fromCharCode(120,95,55,95,100,100,118,97,0);
         mathy *= playercommony.length >> (Math.min(Math.abs(1), 5));
         favicon2 *= parseInt(`${favicon2}`);
         otherG += `${(String.fromCharCode(114,0) == otherG ? otherG.length : parseInt(`${favicon2}`))}`;
      while (playercommony.includes(`${mathy}`)) {
         mathy /= Math.max(1, parseInt(`${mathy}`));
         break;
      }
         mathy -= 1;
         mathy -= parseInt(`${mathy}`);
      do {
         mathy /= Math.max(parseInt(`${mathy}`) % (Math.max(1, playercommony.length)), 3);
         if (4619619.0 == mathy) {
            break;
         }
      } while ((5 <= (5 + parseInt(`${mathy}`)) || 2.17 <= (mathy + 3.8)) && (4619619.0 == mathy));
         mathy *= parseInt(`${mathy}`);
      dangerI += (parseFloat(`${3 % (Math.max(10, (lightk ? 2 : 2)))}`));
      break;
   }
       let filedw = String.fromCharCode(108,95,53,95,116,114,97,110,115,99,111,100,101,0);
       let moonk = String.fromCharCode(114,101,115,116,114,105,99,116,105,111,110,115,95,98,95,51,51,0);
      while (3 < filedw.length) {
          let recommendationJ = true;
         filedw = `${filedw.length}`;
         recommendationJ = (!recommendationJ ? !recommendationJ : !recommendationJ);
         break;
      }
         filedw += `${filedw.length % (Math.max(moonk.length, 7))}`;
      do {
         filedw = `${filedw.length}`;
         if (606939 == filedw.length) {
            break;
         }
      } while ((4 <= moonk.length) && (606939 == filedw.length));
       let eabafadfadddbafeddddeeefeaafV = true;
       let images3 = false;
          let recommendationU = false;
          let privacyA = String.fromCharCode(113,95,49,48,48,95,101,120,116,114,97,100,97,116,97,99,111,110,102,105,103,0);
          let iconsaveimageT = 0;
         moonk += `${moonk.length / 2}`;
         recommendationU = privacyA.includes(`${iconsaveimageT}`);
         privacyA += `${iconsaveimageT << (Math.min(3, Math.abs(1)))}`;
      if (!moonk.endsWith(`${images3}`)) {
         moonk = `${(3 / (Math.max((eabafadfadddbafeddddeeefeaafV ? 3 : 2), 1)))}`;
      }
      long_jG = `${1 << (Math.min(5, static_f8.length))}`;

      Animated.parallel([inOpacity(), inMarginBottom()]).start();
      dangerI -= (parseFloat(`${(basketballicon3 ? 5 : 3) >> (Math.min(Math.abs(parseInt(`${whiteh}`)), 4))}`));
   if (4 > (basketballawayteamt - 5) || 3 > (basketballawayteamt - 5)) {
      hovery += `${1 + long_jG.length}`;
   }
   do {
      defaultprofilepicj = `${parseInt(`${dangerI}`)}`;
      if (defaultprofilepicj.length == 4785061) {
         break;
      }
   } while ((4 < (basketballawayteamt << (Math.min(defaultprofilepicj.length, 4))) && 5 < (basketballawayteamt << (Math.min(Math.abs(4), 4)))) && (defaultprofilepicj.length == 4785061));
   if (lightk || 4 == (static_f8.length - 4)) {
       let nativeex2 = 0;
       let crownQ = String.fromCharCode(114,101,100,97,99,116,101,100,95,111,95,52,54,0);
       let chatroombackgroundG = String.fromCharCode(112,95,53,52,95,117,110,119,114,105,116,97,98,108,101,0);
       let formv = String.fromCharCode(119,95,48,95,105,110,117,115,101,0);
      if (formv.length >= chatroombackgroundG.length) {
          let backwardU = String.fromCharCode(108,101,97,100,105,110,103,95,51,95,54,53,0);
          let buttonD = 5.0;
         chatroombackgroundG += "3";
         backwardU = `${backwardU.length}`;
         buttonD *= parseFloat(`${1}`);
      }
       let linkr = 2;
       let turndownx = 1;
          let lnewinterstitialU = String.fromCharCode(97,95,57,52,95,120,97,109,112,108,101,0);
         crownQ = `${nativeex2 ^ chatroombackgroundG.length}`;
         lnewinterstitialU += `${lnewinterstitialU.length & 1}`;
      if ((1 * nativeex2) >= 3) {
         chatroombackgroundG = `${1 * crownQ.length}`;
      }
          let configureM = String.fromCharCode(111,102,102,101,114,95,97,95,52,52,0);
          let iconrightorangen = String.fromCharCode(119,95,56,50,95,97,114,116,119,111,114,107,0);
         linkr -= linkr;
         configureM = `${configureM.length << (Math.min(iconrightorangen.length, 4))}`;
         iconrightorangen += `${configureM.length}`;
          let iconfeedbackf = String.fromCharCode(108,95,56,53,95,112,97,112,101,114,115,0);
         turndownx %= Math.max(turndownx | 3, 4);
         iconfeedbackf += `${iconfeedbackf.length}`;
      for (let r = 0; r < 1; r++) {
          let settingk = [530, 786];
         chatroombackgroundG = "2";
         settingk = [settingk.length];
      }
          let malaysia_ = [String.fromCharCode(98,95,51,56,95,112,111,112,117,108,97,116,101,0), String.fromCharCode(105,110,100,105,110,103,95,100,95,55,50,0), String.fromCharCode(107,95,52,56,95,97,112,112,115,102,108,121,101,114,0)];
          let modeB = 0;
         crownQ += `${nativeex2 + malaysia_.length}`;
         malaysia_ = [1];
         modeB += modeB | modeB;
         formv += `${turndownx & nativeex2}`;
         crownQ += "2";
      while (turndownx == formv.length) {
          let pausez = false;
          let iconshare5 = [354, 93, 160];
          let middlewareU = [497, 563, 250];
          let graphicsH = String.fromCharCode(101,110,99,111,100,97,98,108,101,115,95,98,95,53,57,0);
         turndownx <<= Math.min(3, Math.abs(linkr));
         pausez = !pausez && iconshare5.length > 82;
         iconshare5.push(((pausez ? 3 : 4)));
         middlewareU = [iconshare5.length / 2];
         graphicsH += `${((pausez ? 4 : 4))}`;
         break;
      }
          let watchx = [404, 858, 809];
          let leaguedetailsbgM = String.fromCharCode(102,111,108,108,111,119,95,107,95,57,57,0);
          let dice2 = String.fromCharCode(102,97,100,115,116,95,101,95,54,55,0);
         nativeex2 /= Math.max(5, (String.fromCharCode(75,0) == crownQ ? linkr : crownQ.length));
         watchx = [leaguedetailsbgM.length / (Math.max(dice2.length, 9))];
         leaguedetailsbgM += `${watchx.length % (Math.max(2, leaguedetailsbgM.length))}`;
         dice2 += `${2 << (Math.min(3, watchx.length))}`;
      lightk = 53.77 <= whiteh;
   }
       let otherT = new Map([[String.fromCharCode(116,104,114,101,101,100,111,115,116,114,95,112,95,52,56,0),String.fromCharCode(99,111,115,95,108,95,49,53,0)], [String.fromCharCode(118,95,54,57,95,118,114,101,103,105,111,110,0),String.fromCharCode(99,95,53,48,95,108,111,99,111,0)], [String.fromCharCode(103,95,49,51,95,108,111,99,97,116,101,100,0),String.fromCharCode(108,111,119,114,101,115,95,97,95,52,55,0)]]);
       let textlayoutmanagerd = String.fromCharCode(114,103,98,116,111,98,103,114,95,108,95,56,54,0);
       let shared0 = String.fromCharCode(113,115,99,97,108,101,98,105,116,115,95,57,95,49,48,0);
         shared0 += "3";
         textlayoutmanagerd = `${(String.fromCharCode(107,0) == textlayoutmanagerd ? textlayoutmanagerd.length : otherT.size)}`;
      for (let j = 0; j < 2; j++) {
         textlayoutmanagerd = `${otherT.size * textlayoutmanagerd.length}`;
      }
         shared0 = `${shared0.length}`;
         textlayoutmanagerd = `${(String.fromCharCode(103,0) == shared0 ? shared0.length : otherT.size)}`;
      while (1 > shared0.length) {
          let neonE = String.fromCharCode(105,110,118,101,114,116,95,57,95,53,56,0);
          let episodeL = 2.0;
         shared0 = `${parseInt(`${episodeL}`) | textlayoutmanagerd.length}`;
         neonE += `${neonE.length >> (Math.min(neonE.length, 4))}`;
         episodeL /= Math.max(parseFloat(`${neonE.length % 1}`), 5);
         break;
      }
         shared0 += `${shared0.length}`;
      do {
         textlayoutmanagerd = "1";
         if (textlayoutmanagerd == String.fromCharCode(118,115,48,110,100,0)) {
            break;
         }
      } while ((textlayoutmanagerd == String.fromCharCode(118,115,48,110,100,0)) && (5 < shared0.length));
      do {
          let clearo = 0.0;
          let stations0 = 4.0;
          let emptyN = String.fromCharCode(109,95,49,95,104,99,108,114,0);
          let mbbannerQ = 1;
          let iconnewsshareS = String.fromCharCode(109,118,115,101,116,95,114,95,49,57,0);
         otherT = new Map([[`${mbbannerQ}`, iconnewsshareS.length | mbbannerQ]]);
         clearo /= Math.max(1 & emptyN.length, 5);
         stations0 /= Math.max(parseFloat(`${emptyN.length - parseInt(`${stations0}`)}`), 3);
         iconnewsshareS = `${parseInt(`${stations0}`)}`;
         if (otherT.size == 2230834) {
            break;
         }
      } while ((4 >= otherT.size) && (otherT.size == 2230834));
      lightk = !basketballicon3 || lightk;
   for (let t = 0; t < 1; t++) {
       let nterstitialY = 5;
       let template_6lC = String.fromCharCode(103,95,52,57,95,99,111,109,109,117,116,101,0);
       let modulesb = String.fromCharCode(115,107,105,112,115,95,52,95,49,56,0);
       let configureo = String.fromCharCode(105,95,55,49,95,108,111,103,0);
       let sharedM = String.fromCharCode(98,95,55,49,95,101,120,105,115,116,0);
          let sentryk = String.fromCharCode(122,95,50,48,95,108,111,111,107,97,104,101,97,100,0);
          let dragz = true;
         configureo = `${configureo.length}`;
         sentryk += `${((dragz ? 2 : 5))}`;
         dragz = ((sentryk.length / (Math.max(1, (dragz ? sentryk.length : 25)))) < 25);
      for (let a = 0; a < 2; a++) {
         template_6lC = `${nterstitialY}`;
      }
         nterstitialY ^= nterstitialY;
      for (let c = 0; c < 3; c++) {
          let useru = 1.0;
          let uploadX = String.fromCharCode(109,95,56,54,95,99,111,109,98,105,110,97,116,105,111,110,115,0);
          let indicator0 = String.fromCharCode(99,111,109,112,108,101,116,101,95,53,95,57,57,0);
          let basketballawayteam7 = 0.0;
         configureo += `${modulesb.length}`;
         useru *= parseFloat(`${parseInt(`${basketballawayteam7}`) | parseInt(`${useru}`)}`);
         uploadX = "1";
         indicator0 = `${parseInt(`${useru}`)}`;
         basketballawayteam7 += 1 - indicator0.length;
      }
      while (4 == template_6lC.length) {
         template_6lC = `${configureo.length << (Math.min(4, template_6lC.length))}`;
         break;
      }
         configureo += `${configureo.length & 2}`;
         sharedM += `${nterstitialY << (Math.min(sharedM.length, 1))}`;
      if (template_6lC != String.fromCharCode(87,0)) {
         sharedM = "2";
      }
         configureo += `${2 - sharedM.length}`;
       let loadingt = 2.0;
       let subbasketballplayerQ = false;
       let libapminsightad = true;
          let imagemanager8 = String.fromCharCode(103,101,110,101,114,97,108,105,122,101,100,116,105,109,101,95,102,95,55,52,0);
          let iconrightorangef = [786, 544, 184];
          let unreade = 0;
         modulesb = `${2 & unreade}`;
         imagemanager8 += `${iconrightorangef.length}`;
         iconrightorangef.push(imagemanager8.length & 2);
         unreade %= Math.max(imagemanager8.length, 4);
      while (subbasketballplayerQ) {
          let thumbnail7 = true;
          let hongkongy = 2.0;
          let pagination6 = 3;
         subbasketballplayerQ = (((subbasketballplayerQ ? 45 : template_6lC.length) >> (Math.min(template_6lC.length, 3))) >= 45);
         thumbnail7 = (hongkongy + pagination6) == 42;
         hongkongy /= Math.max(4, parseFloat(`${3}`));
         pagination6 %= Math.max(((thumbnail7 ? 1 : 3) >> (Math.min(Math.abs(parseInt(`${hongkongy}`)), 1))), 1);
         break;
      }
      if ((nterstitialY - 2) >= 3) {
         subbasketballplayerQ = (60 < (configureo.length * (!libapminsightad ? 60 : configureo.length)));
      }
          let gnewsc = String.fromCharCode(112,95,54,56,95,112,101,101,114,99,111,110,110,101,99,116,105,111,110,105,110,116,101,114,102,97,99,101,0);
         configureo = `${(sharedM == String.fromCharCode(73,0) ? parseInt(`${loadingt}`) : sharedM.length)}`;
         gnewsc += `${gnewsc.length << (Math.min(4, gnewsc.length))}`;
      hovery = `${gpaye.length << (Math.min(long_jG.length, 2))}`;
   }
   if (!lightk) {
      hovery += `${((lightk ? 1 : 4) ^ static_f8.length)}`;
   }
   while (borderlessE.startsWith(`${whiteh}`)) {
      borderlessE = "3";
      break;
   }
   do {
       let otherw = String.fromCharCode(105,95,57,95,98,101,103,97,110,0);
       let penaltyshootnogoalz = 2.0;
       let iconlogoutS = 0;
         penaltyshootnogoalz /= Math.max(3, parseFloat(`${parseInt(`${penaltyshootnogoalz}`) >> (Math.min(otherw.length, 4))}`));
         iconlogoutS &= 3 / (Math.max(1, parseInt(`${penaltyshootnogoalz}`)));
         iconlogoutS &= (String.fromCharCode(71,0) == otherw ? iconlogoutS : otherw.length);
         otherw += `${(String.fromCharCode(70,0) == otherw ? otherw.length : parseInt(`${penaltyshootnogoalz}`))}`;
         iconlogoutS %= Math.max(4, 3 + otherw.length);
      if ((iconlogoutS % 1) <= 4 || (iconlogoutS & 1) <= 5) {
         penaltyshootnogoalz *= (parseFloat(`${otherw == String.fromCharCode(111,0) ? otherw.length : iconlogoutS}`));
      }
      for (let k = 0; k < 2; k++) {
         iconlogoutS *= parseInt(`${penaltyshootnogoalz}`) >> (Math.min(Math.abs(3), 5));
      }
         penaltyshootnogoalz -= parseFloat(`${otherw.length}`);
      do {
          let libyogax = String.fromCharCode(98,95,54,51,95,112,105,99,107,105,110,103,0);
          let blacklistD = String.fromCharCode(101,95,57,57,95,112,114,117,110,105,110,103,0);
          let transferc = String.fromCharCode(114,95,50,49,95,100,111,119,110,108,111,97,100,101,114,0);
          let configurei = [853, 723, 571];
         iconlogoutS ^= iconlogoutS & blacklistD.length;
         libyogax = `${configurei.length % 1}`;
         blacklistD += `${transferc.length ^ configurei.length}`;
         transferc = `${(transferc == String.fromCharCode(52,0) ? transferc.length : configurei.length)}`;
         if (iconlogoutS == 500841) {
            break;
         }
      } while (((iconlogoutS + 5) >= 5 || (iconlogoutS / 5) >= 2) && (iconlogoutS == 500841));
      long_jG = `${libjsim.length | 2}`;
      if (String.fromCharCode(121,102,118,114,108,56,121,0) == long_jG) {
         break;
      }
   } while ((long_jG.endsWith(`${borderlessE.length}`)) && (String.fromCharCode(121,102,118,114,108,56,121,0) == long_jG));
   do {
      long_jG += `${basketballawayteamt}`;
      if (long_jG == String.fromCharCode(98,118,104,107,100,0)) {
         break;
      }
   } while ((long_jG == String.fromCharCode(98,118,104,107,100,0)) && (hovery == String.fromCharCode(106,0)));
      libjsim = `${parseInt(`${whiteh}`) ^ 2}`;
   for (let e = 0; e < 3; e++) {
      gpaye = [libjsim.length - 2];
   }
      basketballawayteamt /= Math.max(gpaye.length / (Math.max(3, 1)), 1);
       let pointQ = 1;
       let tempnodatagifq = String.fromCharCode(115,95,52,95,101,114,105,97,108,105,122,97,116,105,111,110,0);
       let privilegej = String.fromCharCode(105,100,101,110,116,105,102,105,101,114,95,107,95,56,57,0);
       let tickedK = new Map([[String.fromCharCode(117,102,102,101,114,95,50,95,50,48,0),String.fromCharCode(115,100,101,115,95,50,95,52,48,0)], [String.fromCharCode(117,99,111,110,115,116,95,117,95,55,48,0),String.fromCharCode(120,95,49,57,95,102,108,97,116,116,101,110,101,100,0)], [String.fromCharCode(108,111,99,105,95,52,95,53,50,0),String.fromCharCode(110,95,53,54,95,97,115,101,108,101,99,116,0)]]);
       let arrowS = new Map([[String.fromCharCode(116,104,114,101,97,100,103,114,111,117,112,95,108,95,52,48,0),164], [String.fromCharCode(104,117,102,102,121,117,118,95,102,95,52,54,0),89]]);
      if (1 <= (tickedK.size + 3) || (tempnodatagifq.length + 3) <= 1) {
         tempnodatagifq = `${tickedK.size}`;
      }
          let mimeo = 5.0;
          let manifesto = [519, 30, 668];
          let canvasH = String.fromCharCode(100,101,116,101,99,116,105,111,110,95,97,95,54,56,0);
         pointQ &= canvasH.length | tempnodatagifq.length;
         mimeo /= Math.max(1, parseFloat(`${manifesto.length | parseInt(`${mimeo}`)}`));
         manifesto = [manifesto.length >> (Math.min(2, Math.abs(parseInt(`${mimeo}`))))];
         canvasH += `${parseInt(`${mimeo}`) >> (Math.min(manifesto.length, 4))}`;
      if (4 >= privilegej.length) {
          let sentry6 = String.fromCharCode(105,95,52,50,95,118,114,108,101,0);
          let mutedP = 4.0;
          let static_cn = String.fromCharCode(97,108,116,101,114,95,99,95,54,49,0);
          let mountingc = false;
          let backgrounde = String.fromCharCode(115,117,112,101,114,103,114,111,117,112,95,51,95,56,54,0);
         tempnodatagifq += `${pointQ}`;
         sentry6 = `${backgrounde.length / (Math.max(2, 5))}`;
         mutedP -= 1 >> (Math.min(Math.abs(parseInt(`${mutedP}`)), 3));
         static_cn += `${(String.fromCharCode(105,0) == backgrounde ? backgrounde.length : (mountingc ? 4 : 1))}`;
         mountingc = backgrounde.length == 36;
      }
       let smallorangemanE = String.fromCharCode(109,97,112,112,105,110,103,115,95,103,95,57,0);
      for (let h = 0; h < 2; h++) {
          let ewardedc = String.fromCharCode(105,110,116,101,114,112,111,108,97,116,101,95,117,95,54,57,0);
         tempnodatagifq += `${ewardedc.length}`;
      }
      while (privilegej.length <= arrowS.size) {
         arrowS[`${tempnodatagifq}`] = tempnodatagifq.length >> (Math.min(4, Math.abs(arrowS.size)));
         break;
      }
         arrowS[`${pointQ}`] = pointQ;
          let mbsplashC = 5.0;
         arrowS = new Map([[smallorangemanE, tempnodatagifq.length / 2]]);
         mbsplashC *= parseInt(`${mbsplashC}`) | 1;
      static_f8 = [gpaye.length | 1];
      whiteh /= Math.max((String.fromCharCode(48,0) == long_jG ? parseInt(`${whiteh}`) : long_jG.length), 5);
   for (let t = 0; t < 1; t++) {
      hovery += `${libjsim.length}`;
   }
   for (let m = 0; m < 2; m++) {
      dangerI *= parseFloat(`${2 | parseInt(`${dangerI}`)}`);
   }
   if (!lightk) {
      lightk = borderlessE == String.fromCharCode(74,0);
   }

    } else {
      Animated.parallel([outOpacity(), outMarginBottom()]).start();
    }
  }, [display]);

  const onShowRecommend = () => {
       let gifgoal_ = true;
    let playlist4 = new Map([[String.fromCharCode(102,114,101,105,114,95,122,95,49,51,0),156], [String.fromCharCode(105,95,52,52,95,109,111,100,105,102,105,101,114,0),71], [String.fromCharCode(112,105,120,101,108,95,120,95,52,56,0),949]]);
    let controlU = 0.0;
    let textV = String.fromCharCode(114,101,115,101,116,95,97,95,53,52,0);
    let package_854 = String.fromCharCode(102,111,108,100,101,114,95,54,95,55,57,0);
    let brightnessj = String.fromCharCode(101,120,99,101,101,100,95,114,95,52,52,0);
    let abidetectD = [726, 11, 815];
    let modeS = String.fromCharCode(112,95,52,95,114,101,115,111,108,117,116,105,111,110,0);
    let descg = 1.0;
    let chinasamea = 2.0;
    let iconwatchnowc = 4;
    let preview2 = String.fromCharCode(99,117,116,111,117,116,95,115,95,49,50,0);
   for (let a = 0; a < 3; a++) {
       let serviceh = String.fromCharCode(120,95,53,51,95,104,119,99,111,110,116,101,120,116,0);
       let controlsb = new Map([[String.fromCharCode(101,110,99,114,121,112,116,105,111,110,95,119,95,49,0),744], [String.fromCharCode(114,101,97,100,108,110,95,113,95,53,53,0),971], [String.fromCharCode(110,95,51,50,95,98,110,108,101,0),17]]);
       let wnewinterstitialu = false;
       let nalyticsR = new Map([[String.fromCharCode(97,118,99,105,110,116,114,97,95,55,95,53,57,0),516], [String.fromCharCode(97,95,57,95,112,101,114,109,105,116,116,101,100,0),776], [String.fromCharCode(119,95,53,52,95,100,101,108,111,99,97,116,101,0),965]]);
       let homeactiveC = String.fromCharCode(105,95,53,55,95,99,111,109,98,105,110,97,116,111,114,0);
         homeactiveC = "2";
          let homeactive3 = String.fromCharCode(110,111,109,105,110,97,108,95,50,95,53,0);
         homeactiveC = "2";
         homeactive3 += `${2 / (Math.max(7, homeactive3.length))}`;
      while (serviceh.length >= 2 && wnewinterstitialu) {
         wnewinterstitialu = (nalyticsR.size ^ controlsb.size) <= 22;
         break;
      }
      if (nalyticsR.size < 3) {
          let mail3 = false;
         wnewinterstitialu = serviceh.length > 65;
         mail3 = !mail3;
      }
       let areaR = true;
       let rightH = false;
         areaR = rightH && controlsb.size < 68;
      do {
          let armvaJ = 1.0;
          let componentregistryZ = String.fromCharCode(119,117,110,100,101,102,95,49,95,51,50,0);
          let tumbnailA = 3.0;
          let reactnativeultimatelistviewR = String.fromCharCode(114,95,51,50,95,114,101,112,108,105,99,97,116,101,0);
         controlsb[componentregistryZ] = (componentregistryZ == String.fromCharCode(80,0) ? componentregistryZ.length : homeactiveC.length);
         armvaJ += reactnativeultimatelistviewR.length;
         tumbnailA *= parseFloat(`${reactnativeultimatelistviewR.length}`);
         if (controlsb.size == 3922860) {
            break;
         }
      } while ((4 <= (nalyticsR.size / 1) && (nalyticsR.size / (Math.max(controlsb.size, 4))) <= 1) && (controlsb.size == 3922860));
       let questG = [45, 276, 292];
         nalyticsR = new Map([[`${wnewinterstitialu}`, (3 ^ (areaR ? 2 : 4))]]);
       let leakchecker1 = new Map([[String.fromCharCode(122,95,54,95,100,101,108,105,118,101,114,121,0),String.fromCharCode(98,117,116,116,101,114,102,108,105,101,115,95,48,95,54,49,0)], [String.fromCharCode(100,111,110,110,97,95,54,95,56,0),String.fromCharCode(121,95,51,56,95,104,105,103,104,108,105,103,116,104,101,100,0)]]);
         wnewinterstitialu = nalyticsR.size == questG.length;
         controlsb = new Map([[`${controlsb.size}`, controlsb.size ^ 1]]);
         nalyticsR = new Map([[`${leakchecker1.size}`, homeactiveC.length]]);
         nalyticsR[`${rightH}`] = questG.length;
         areaR = null == controlsb[`${rightH}`];
      descg *= (parseFloat(`${modeS == String.fromCharCode(48,0) ? nalyticsR.size : modeS.length}`));
   }
      brightnessj = `${parseInt(`${controlU}`)}`;

    dispatch(setLiveRelatedStreams(null));
   while (modeS.length > 2) {
       let inouttargetredv = new Map([[String.fromCharCode(101,110,104,97,110,99,101,109,101,110,116,115,95,116,95,53,53,0),813], [String.fromCharCode(112,108,97,116,101,97,117,95,49,95,48,0),445], [String.fromCharCode(107,95,50,50,95,110,111,110,110,117,108,108,105,110,99,111,109,105,110,103,0),513]]);
       let bottomo = true;
       let sharedD = true;
      for (let e = 0; e < 1; e++) {
          let tickR = [183, 611];
          let pointY = false;
          let alertw = String.fromCharCode(113,95,52,55,95,113,122,98,105,110,0);
         sharedD = !sharedD;
         tickR.push(tickR.length | 2);
         pointY = alertw.endsWith(`${pointY}`);
         alertw = "2";
      }
         bottomo = inouttargetredv.size == 96;
      if (5 < (inouttargetredv.size + 4) || !bottomo) {
         bottomo = bottomo || sharedD;
      }
      for (let r = 0; r < 1; r++) {
          let libcrashsdk_ = new Map([[String.fromCharCode(121,95,56,48,95,111,99,97,108,0),true ], [String.fromCharCode(119,95,49,54,95,103,101,116,110,109,115,101,100,101,99,0),true ]]);
          let reminderU = String.fromCharCode(121,95,49,53,95,102,97,99,116,111,114,0);
         bottomo = String.fromCharCode(69,0) == reminderU;
         libcrashsdk_ = new Map([[`${libcrashsdk_.size}`, 3 ^ libcrashsdk_.size]]);
         reminderU += `${3 * libcrashsdk_.size}`;
      }
      do {
         sharedD = !sharedD;
         if (sharedD ? !sharedD : sharedD) {
            break;
         }
      } while ((sharedD ? !sharedD : sharedD) && (!sharedD && !bottomo));
      if (sharedD) {
          let turndownH = String.fromCharCode(119,95,49,56,95,112,114,101,115,101,116,0);
          let iconshareh = true;
          let iconcalendaru = String.fromCharCode(119,112,116,104,114,101,97,100,115,95,122,95,55,53,0);
          let basketballM = 1.0;
         sharedD = (!sharedD ? !iconshareh : sharedD);
         turndownH += `${3 >> (Math.min(2, Math.abs(parseInt(`${basketballM}`))))}`;
         iconshareh = basketballM == 69.24;
         iconcalendaru = `${turndownH.length}`;
      }
      while (bottomo || (inouttargetredv.size / 5) <= 3) {
         bottomo = (86 > ((sharedD ? 86 : inouttargetredv.size) % (Math.max(inouttargetredv.size, 2))));
         break;
      }
         bottomo = !bottomo;
      for (let f = 0; f < 2; f++) {
         inouttargetredv = new Map([[`${sharedD}`, 3]]);
      }
      abidetectD.push(parseInt(`${descg}`));
      break;
   }
       let specL = 1;
          let scorepopsoundx = new Map([[String.fromCharCode(115,121,115,116,101,109,100,101,112,101,110,100,101,110,116,95,106,95,57,48,0),531], [String.fromCharCode(117,110,114,101,102,95,109,95,56,0),827]]);
          let profileactiveZ = 0;
          let hookK = [851, 241, 362];
         specL -= hookK.length;
         scorepopsoundx = new Map([[`${scorepopsoundx.size}`, scorepopsoundx.size << (Math.min(2, Math.abs(profileactiveZ)))]]);
         profileactiveZ <<= Math.min(4, Math.abs(scorepopsoundx.size));
         hookK.push(scorepopsoundx.size * profileactiveZ);
      while (specL >= specL) {
         specL *= specL;
         break;
      }
      for (let w = 0; w < 3; w++) {
          let countdownx = String.fromCharCode(103,95,49,50,95,114,101,102,105,108,108,0);
          let minivodW = String.fromCharCode(112,114,101,102,102,101,114,101,100,95,57,95,50,0);
          let iconB = false;
          let iconmore5 = 0;
          let predictionwinZ = 1.0;
         specL |= specL << (Math.min(countdownx.length, 4));
         countdownx = `${((iconB ? 1 : 3) & minivodW.length)}`;
         minivodW = `${((iconB ? 4 : 2) * parseInt(`${predictionwinZ}`))}`;
         iconmore5 /= Math.max(parseInt(`${predictionwinZ}`) | 1, 2);
      }
      iconwatchnowc ^= textV.length - parseInt(`${chinasamea}`);

    if (isFullScreen) {

       let footballfiledlayoutJ = false;
       let skipK = String.fromCharCode(98,95,49,57,95,98,111,120,101,100,0);
         skipK = `${(1 * (footballfiledlayoutJ ? 2 : 5))}`;
         footballfiledlayoutJ = footballfiledlayoutJ && skipK.length <= 46;
         skipK += `${(String.fromCharCode(97,0) == skipK ? (footballfiledlayoutJ ? 4 : 3) : skipK.length)}`;
      for (let h = 0; h < 3; h++) {
         footballfiledlayoutJ = skipK.length == 44 && !footballfiledlayoutJ;
      }
         footballfiledlayoutJ = (87 < (skipK.length ^ (!footballfiledlayoutJ ? skipK.length : 87)));
          let calendarE = String.fromCharCode(116,95,54,50,95,115,109,107,97,0);
          let orangeuparrowU = true;
         skipK += `${((footballfiledlayoutJ ? 4 : 1))}`;
         calendarE += "2";
         orangeuparrowU = !orangeuparrowU;
      modeS += `${parseInt(`${chinasamea}`) * skipK.length}`;
   for (let i = 0; i < 1; i++) {
      descg -= parseFloat(`${brightnessj.length}`);
   }
      dispatch(
        updateVideoPropPipe([
          VideoPlayerActions.setRightPanel({
            type: PanelType.Recommend,
            title: '推荐直播赛事',
            width: screen.width / 2,
          }),
          VideoPlayerActions.setControl({
            type: ShowControlType.Right,
            timeout: 0,
          }),
        ]),
      );
    } else {

   if (3 < modeS.length && 3 < textV.length) {
      modeS = `${parseInt(`${controlU}`) << (Math.min(Math.abs(parseInt(`${descg}`)), 3))}`;
   }
   if (3 >= modeS.length) {
       let shrinkG = 2.0;
       let iconnewsshareC = new Map([[String.fromCharCode(115,95,52,95,101,116,101,114,110,105,116,121,0),348], [String.fromCharCode(114,105,110,103,105,110,103,95,51,95,51,52,0),570], [String.fromCharCode(99,101,114,116,105,102,105,99,97,116,101,115,95,57,95,57,55,0),771]]);
       let elementsE = String.fromCharCode(109,95,51,52,95,99,116,108,111,117,116,112,117,116,0);
       let flipperg = String.fromCharCode(110,95,53,48,95,101,120,116,110,0);
      for (let r = 0; r < 1; r++) {
          let cornerkickh = new Map([[String.fromCharCode(97,115,115,101,116,115,95,117,95,50,50,0),967], [String.fromCharCode(122,95,54,49,95,105,115,116,111,103,114,97,109,0),323], [String.fromCharCode(100,111,115,100,97,116,101,95,116,95,50,53,0),74]]);
          let filedX = [215, 458, 118];
          let iconbackwhite6 = true;
          let libturbomodulejsijni8 = new Map([[String.fromCharCode(100,101,98,117,103,95,54,95,54,56,0),533], [String.fromCharCode(115,116,114,101,97,109,95,106,95,53,54,0),445]]);
          let profile1 = String.fromCharCode(99,111,110,116,95,107,95,50,52,0);
         elementsE = `${elementsE.length}`;
         cornerkickh[`${iconbackwhite6}`] = 3;
         filedX = [cornerkickh.size | libturbomodulejsijni8.size];
         libturbomodulejsijni8[`${iconbackwhite6}`] = libturbomodulejsijni8.size & 2;
         profile1 += `${((iconbackwhite6 ? 4 : 3) / (Math.max(profile1.length, 3)))}`;
      }
         shrinkG -= parseFloat(`${2 | iconnewsshareC.size}`);
      while (1 < (5 & iconnewsshareC.size)) {
          let circlef = new Map([[String.fromCharCode(118,102,114,101,101,95,53,95,55,55,0),true ], [String.fromCharCode(106,95,55,56,95,109,115,109,112,101,103,0),true ]]);
          let bootsplashK = String.fromCharCode(109,95,53,53,95,108,111,99,97,108,116,105,109,101,0);
         shrinkG += parseFloat(`${iconnewsshareC.size}`);
         circlef = new Map([[`${circlef.size}`, circlef.size]]);
         bootsplashK = `${3 | circlef.size}`;
         break;
      }
      do {
          let regengX = 2;
          let valuesQ = String.fromCharCode(111,95,57,51,95,118,110,101,103,113,0);
          let dropdownW = String.fromCharCode(102,95,50,95,115,117,98,106,111,117,114,110,97,108,0);
          let verticalH = [725, 141];
          let with_nol = 1.0;
         elementsE = `${3 + regengX}`;
         regengX /= Math.max(1, parseInt(`${with_nol}`) - verticalH.length);
         valuesQ = `${dropdownW.length * 3}`;
         dropdownW += `${valuesQ.length / (Math.max(1, 10))}`;
         verticalH.push(verticalH.length);
         with_nol *= parseFloat(`${2}`);
         if (elementsE == String.fromCharCode(56,114,101,56,0)) {
            break;
         }
      } while ((elementsE == String.fromCharCode(81,0) || flipperg != String.fromCharCode(97,0)) && (elementsE == String.fromCharCode(56,114,101,56,0)));
      for (let n = 0; n < 3; n++) {
         flipperg += `${parseInt(`${shrinkG}`) + 3}`;
      }
          let fastforwardG = String.fromCharCode(104,95,56,56,95,108,105,98,115,112,101,101,120,0);
         shrinkG += parseFloat(`${2}`);
         fastforwardG += `${(fastforwardG == String.fromCharCode(56,0) ? fastforwardG.length : fastforwardG.length)}`;
       let libturbomodulejsijniO = 2.0;
       let founds = 2.0;
      do {
         libturbomodulejsijniO /= Math.max(elementsE.length, 5);
         if (libturbomodulejsijniO == 3372146.0) {
            break;
         }
      } while ((5.42 > (libturbomodulejsijniO - 4.16)) && (libturbomodulejsijniO == 3372146.0));
      do {
         flipperg = `${flipperg.length >> (Math.min(Math.abs(3), 5))}`;
         if (639042 == flipperg.length) {
            break;
         }
      } while ((639042 == flipperg.length) && (flipperg.length > 1));
      if (1.90 < libturbomodulejsijniO) {
         flipperg += `${3 >> (Math.min(Math.abs(parseInt(`${shrinkG}`)), 5))}`;
      }
      while (elementsE.includes(`${iconnewsshareC.size}`)) {
          let bootsplash0 = String.fromCharCode(99,111,110,116,114,111,108,115,95,100,95,50,49,0);
          let home1 = String.fromCharCode(99,114,101,97,116,101,95,113,95,54,54,0);
         iconnewsshareC = new Map([[bootsplash0, parseInt(`${shrinkG}`) << (Math.min(Math.abs(1), 2))]]);
         bootsplash0 += "1";
         home1 = "3";
         break;
      }
       let applej = 1;
       let whistleorangeK = 5;
      gifgoal_ = String.fromCharCode(49,0) == package_854;
   }
      dispatch(
        setVideoControlBottomPenalProp({
          height: screen.height * 0.6,
          title: '推荐直播赛事',
          type: PanelType.Recommend,
        }),
      );
   for (let x = 0; x < 2; x++) {
      playlist4 = new Map([[`${descg}`, 2 << (Math.min(Math.abs(iconwatchnowc), 1))]]);
   }
      modeS += `${parseInt(`${controlU}`) * 2}`;

    }
  };

  const onShowSwitch = () => {
       let codegen_ = 3.0;
    let active9 = String.fromCharCode(99,111,111,107,100,97,116,97,95,57,95,51,50,0);
    let classes6 = false;
    let area2 = 2.0;
    let videobufferloadingo = 4.0;
    let hongkongB = 1;
    let splashX = false;
    let usernamet = 2.0;
    let sportl = String.fromCharCode(113,95,50,48,95,112,114,111,106,101,99,116,105,111,110,0);
    let short_k2s = String.fromCharCode(101,110,116,105,116,105,101,115,95,50,95,55,52,0);
    let thailandP = [219, 41, 312];
   do {
      area2 -= parseInt(`${codegen_}`);
      if (area2 == 3670774.0) {
         break;
      }
   } while ((area2 == 3670774.0) && (5.65 == (1.6 + area2) && area2 == 1.6));
      short_k2s = `${parseInt(`${codegen_}`) >> (Math.min(5, Math.abs(2)))}`;

    if (isFullScreen) {

       let arrowE = String.fromCharCode(103,97,108,108,101,114,121,95,121,95,57,54,0);
       let iconnewssharex = String.fromCharCode(111,112,117,115,95,113,95,50,54,0);
          let watchD = String.fromCharCode(114,101,103,105,115,116,101,114,101,114,95,107,95,51,49,0);
          let libnmsF = new Map([[String.fromCharCode(99,111,110,116,114,105,98,117,116,105,110,103,95,109,95,51,52,0),921], [String.fromCharCode(109,117,108,116,105,112,108,101,114,95,103,95,52,55,0),110], [String.fromCharCode(115,108,102,95,117,95,50,48,0),170]]);
          let membership0 = false;
         iconnewssharex += `${libnmsF.size}`;
         watchD = `${watchD.length | watchD.length}`;
         libnmsF[watchD] = watchD.length ^ 3;
      for (let r = 0; r < 1; r++) {
          let colorsr = 4;
          let libswscaleP = String.fromCharCode(111,117,116,108,105,101,114,95,100,95,51,56,0);
          let downloadedQ = true;
          let subbasketballplayerj = [119, 860];
          let arrowrightwithtail2 = String.fromCharCode(118,112,120,101,110,99,95,120,95,53,53,0);
         iconnewssharex += `${colorsr}`;
         colorsr <<= Math.min(Math.abs(2 - arrowrightwithtail2.length), 2);
         libswscaleP = `${arrowrightwithtail2.length % 3}`;
         downloadedQ = !downloadedQ || libswscaleP.length >= 87;
         subbasketballplayerj.push((arrowrightwithtail2 == String.fromCharCode(55,0) ? (downloadedQ ? 3 : 3) : arrowrightwithtail2.length));
      }
       let castingJ = false;
      do {
         arrowE = `${((castingJ ? 5 : 2) - 2)}`;
         if (arrowE.length == 1681736) {
            break;
         }
      } while ((arrowE.endsWith(`${iconnewssharex.length}`)) && (arrowE.length == 1681736));
       let dependenciesv = 2;
          let klevinK = false;
         arrowE += "1";
      active9 += `${parseInt(`${area2}`)}`;
      splashX = hongkongB == 15 && !classes6;
      dispatch(
        updateVideoPropPipe([
          VideoPlayerActions.setRightPanel({
            type: PanelType.Switch,
            title: '切源',
            width: screen.width * 0.4,
          }),
          VideoPlayerActions.setControl({
            type: ShowControlType.Right,
            timeout: 0,
          }),
        ]),
      );
    } else {

   for (let a = 0; a < 2; a++) {
      short_k2s = `${sportl.length}`;
   }
      splashX = 54.28 < usernamet;
      dispatch(
        setVideoControlBottomPenalProp({
          height: screen.height * 0.4,
          title: '切源',
          type: PanelType.Switch,
        }),
      );
   do {
       let defaultlogon = String.fromCharCode(105,112,97,100,95,57,95,54,52,0);
       let iconstari = 1.0;
       let iconcalendarB = String.fromCharCode(101,95,51,54,95,101,114,114,111,114,118,0);
          let refreshborderless2 = false;
          let expiredS = String.fromCharCode(120,95,49,48,48,95,115,116,114,101,97,109,104,101,97,100,101,114,0);
          let homeplayer0 = 3;
         iconstari /= Math.max(1, parseFloat(`${homeplayer0}`));
         refreshborderless2 = !expiredS.endsWith(`${refreshborderless2}`);
         expiredS = `${((refreshborderless2 ? 3 : 4))}`;
         homeplayer0 %= Math.max(expiredS.length, 1);
      do {
          let floaterd = 4.0;
         iconstari -= parseFloat(`${iconcalendarB.length << (Math.min(1, Math.abs(parseInt(`${floaterd}`))))}`);
         if (4593281.0 == iconstari) {
            break;
         }
      } while ((defaultlogon.startsWith(`${iconstari}`)) && (4593281.0 == iconstari));
      for (let l = 0; l < 1; l++) {
          let brightnessJ = String.fromCharCode(102,95,51,52,95,105,100,99,116,120,108,108,109,0);
          let graphf = 0.0;
          let footballfieldL = true;
         iconstari += (parseFloat(`${(footballfieldL ? 4 : 4) | parseInt(`${graphf}`)}`));
         brightnessJ += "3";
         graphf -= (brightnessJ == String.fromCharCode(115,0) ? brightnessJ.length : brightnessJ.length);
      }
          let basketballV = String.fromCharCode(109,116,97,102,95,54,95,50,54,0);
          let acceptedB = String.fromCharCode(100,95,56,52,95,109,117,108,116,105,115,105,103,0);
          let injuryE = [96, 855, 600];
         iconstari += parseFloat(`${1 * injuryE.length}`);
         basketballV += `${(String.fromCharCode(98,0) == basketballV ? acceptedB.length : basketballV.length)}`;
         acceptedB += `${(basketballV == String.fromCharCode(87,0) ? basketballV.length : acceptedB.length)}`;
         injuryE = [basketballV.length + acceptedB.length];
          let incident3 = 0.0;
          let projectA = 5.0;
          let nexty = 0.0;
         defaultlogon = `${parseInt(`${projectA}`) ^ 1}`;
         incident3 -= parseFloat(`${parseInt(`${nexty}`)}`);
         projectA *= 3 >> (Math.min(Math.abs(parseInt(`${incident3}`)), 4));
         iconcalendarB = `${(defaultlogon == String.fromCharCode(106,0) ? parseInt(`${iconstari}`) : defaultlogon.length)}`;
      while (1 == defaultlogon.length) {
          let libcxxcomponentsB = 0;
          let vietnamx = String.fromCharCode(113,95,54,50,95,117,115,101,114,0);
          let predictionbannerd = 4.0;
          let r_lockW = String.fromCharCode(101,100,105,116,95,54,95,50,49,0);
          let scrollviewg = 4;
         iconcalendarB += "3";
         libcxxcomponentsB += r_lockW.length;
         vietnamx = `${(String.fromCharCode(102,0) == vietnamx ? libcxxcomponentsB : vietnamx.length)}`;
         predictionbannerd /= Math.max(5, (parseFloat(`${vietnamx == String.fromCharCode(80,0) ? libcxxcomponentsB : vietnamx.length}`)));
         r_lockW += `${scrollviewg ^ libcxxcomponentsB}`;
         scrollviewg *= r_lockW.length - 2;
         break;
      }
       let unselectedt = 2.0;
       let manifestv = 4.0;
         unselectedt *= parseFloat(`${parseInt(`${unselectedt}`)}`);
      codegen_ += parseInt(`${area2}`) + 2;
      if (codegen_ == 1122556.0) {
         break;
      }
   } while ((codegen_ == 1122556.0) && (4 == (active9.length << (Math.min(Math.abs(2), 1))) && (parseInt(`${codegen_}`) + active9.length) == 2));
   for (let p = 0; p < 3; p++) {
       let plashZ = String.fromCharCode(103,95,53,95,99,108,105,101,110,116,0);
      if (plashZ == String.fromCharCode(106,0)) {
         plashZ += `${plashZ.length}`;
      }
         plashZ = `${plashZ.length}`;
       let whistleorangeu = String.fromCharCode(115,95,54,53,95,114,101,112,108,105,99,97,116,101,0);
      codegen_ += plashZ.length;
   }

    }
  };

  const onShowStats = () => {
       let sortU = [235, 198];
    let material_ = 4.0;
    let favoriteJ = true;
    let crossv = 0.0;
    let telemetryN = new Map([[String.fromCharCode(112,114,101,115,101,110,116,95,102,95,56,0),true ], [String.fromCharCode(112,101,110,99,105,108,95,121,95,52,55,0),false ], [String.fromCharCode(118,101,110,100,111,114,95,117,95,53,52,0),true ]]);
    let expiredt = new Map([[String.fromCharCode(112,117,114,112,111,115,101,102,117,108,95,103,95,53,56,0),232], [String.fromCharCode(104,97,110,100,95,50,95,53,52,0),894], [String.fromCharCode(97,115,121,110,99,95,54,95,55,57,0),182]]);
    let uimanagerU = [836, 464];
    let libavfilterd = 0.0;
    let bgvipxvodL = 0.0;
    let iconcloseN = 0.0;
    let ping0 = String.fromCharCode(99,95,51,48,95,118,98,112,114,105,110,116,102,0);
   for (let t = 0; t < 3; t++) {
       let rights = 5;
      while (rights == 1) {
         rights += rights >> (Math.min(4, Math.abs(rights)));
         break;
      }
         rights ^= rights;
      if ((rights >> (Math.min(Math.abs(rights), 1))) > 4) {
         rights &= 1;
      }
      iconcloseN -= parseFloat(`${3}`);
   }
      favoriteJ = (uimanagerU.length | expiredt.size) > 38;
   for (let b = 0; b < 3; b++) {
      uimanagerU.push(expiredt.size ^ 2);
   }

    if (isFullScreen) {

   do {
       let reactnativejs7 = String.fromCharCode(100,117,109,112,95,54,95,53,53,0);
       let notificationv = String.fromCharCode(115,108,111,112,101,95,107,95,52,52,0);
       let imagemanagerS = 1;
      for (let b = 0; b < 1; b++) {
          let mbsplashw = 2.0;
          let iconpipexpande = String.fromCharCode(119,105,110,100,105,110,103,95,117,95,55,53,0);
          let gesturesh = 0.0;
         imagemanagerS >>= Math.min(3, Math.abs((notificationv == String.fromCharCode(95,0) ? imagemanagerS : notificationv.length)));
         mbsplashw -= iconpipexpande.length;
         iconpipexpande = `${parseInt(`${gesturesh}`)}`;
         gesturesh *= parseFloat(`${parseInt(`${mbsplashw}`) / 1}`);
      }
         notificationv += `${(String.fromCharCode(53,0) == reactnativejs7 ? reactnativejs7.length : notificationv.length)}`;
         imagemanagerS >>= Math.min(Math.abs(reactnativejs7.length & 1), 1);
      while (notificationv.length == 2) {
         notificationv = `${(String.fromCharCode(48,0) == notificationv ? imagemanagerS : notificationv.length)}`;
         break;
      }
      while (imagemanagerS > 4) {
         imagemanagerS &= notificationv.length % (Math.max(reactnativejs7.length, 3));
         break;
      }
      for (let s = 0; s < 2; s++) {
         imagemanagerS -= 1 * imagemanagerS;
      }
      for (let y = 0; y < 1; y++) {
         notificationv += `${reactnativejs7.length ^ imagemanagerS}`;
      }
         imagemanagerS *= 3;
      for (let y = 0; y < 1; y++) {
          let empty8 = String.fromCharCode(112,114,101,102,111,114,109,97,116,116,101,100,95,113,95,56,50,0);
          let link5 = true;
         notificationv = "1";
         empty8 += `${(String.fromCharCode(81,0) == empty8 ? (link5 ? 5 : 3) : empty8.length)}`;
         link5 = ((empty8.length - (!link5 ? 90 : empty8.length)) < 90);
      }
      uimanagerU = [1 << (Math.min(1, Math.abs(imagemanagerS)))];
      if (4862084 == uimanagerU.length) {
         break;
      }
   } while ((4 > (1 << (Math.min(5, uimanagerU.length))) && (crossv * 3.74) > 1.76) && (4862084 == uimanagerU.length));
   while (ping0.includes(`${uimanagerU.length}`)) {
       let malaysiaP = String.fromCharCode(98,95,54,54,95,97,112,112,115,0);
      do {
         malaysiaP += `${malaysiaP.length}`;
         if (2243781 == malaysiaP.length) {
            break;
         }
      } while ((malaysiaP == String.fromCharCode(77,0)) && (2243781 == malaysiaP.length));
      while (malaysiaP.length > 5) {
         malaysiaP += `${malaysiaP.length | 2}`;
         break;
      }
          let textlayoutmanagerY = String.fromCharCode(115,116,105,99,107,101,114,101,100,95,115,95,52,56,0);
          let homeC = [744, 219, 450];
         malaysiaP += `${(String.fromCharCode(65,0) == textlayoutmanagerY ? textlayoutmanagerY.length : homeC.length)}`;
      ping0 = `${sortU.length}`;
      break;
   }
   if (1 == (4 << (Math.min(1, sortU.length))) || (sortU.length - parseInt(`${bgvipxvodL}`)) == 4) {
      sortU = [sortU.length];
   }
      dispatch(
        updateVideoPropPipe([
          VideoPlayerActions.setRightPanel({
            type: PanelType.Stat,
            title: '技术统计',
            width: screen.width * 0.55,
          }),
          VideoPlayerActions.setControl({
            type: ShowControlType.Right,
            timeout: 0,
          }),
        ]),
      );
       let albumz = false;
       let unimplementedviewR = true;
       let selectedu = 4;
      do {
         unimplementedviewR = 85 == selectedu;
         if (unimplementedviewR ? !unimplementedviewR : unimplementedviewR) {
            break;
         }
      } while ((albumz || !unimplementedviewR) && (unimplementedviewR ? !unimplementedviewR : unimplementedviewR));
       let whitetickT = 4.0;
       let renew2 = 0.0;
       let mailk = String.fromCharCode(103,95,49,95,104,115,98,0);
       let z_imageo = String.fromCharCode(120,95,49,56,95,98,105,110,107,98,0);
       let template_5nN = String.fromCharCode(104,116,99,112,95,50,95,55,51,0);
      for (let h = 0; h < 1; h++) {
          let scorepopsoundw = String.fromCharCode(97,110,105,109,95,108,95,56,54,0);
         unimplementedviewR = (z_imageo.length << (Math.min(1, Math.abs(selectedu)))) < 53;
         scorepopsoundw = `${scorepopsoundw.length / (Math.max(6, scorepopsoundw.length))}`;
      }
          let footballfielde = true;
         mailk += `${(String.fromCharCode(69,0) == template_5nN ? (footballfielde ? 5 : 2) : template_5nN.length)}`;
      do {
          let formX = 2;
         z_imageo = `${z_imageo.length + 2}`;
         formX |= formX;
         if (z_imageo == String.fromCharCode(99,113,108,111,104,0)) {
            break;
         }
      } while ((z_imageo == String.fromCharCode(99,113,108,111,104,0)) && (z_imageo.length < 5));
       let nativemodulex = new Map([[String.fromCharCode(113,95,51,51,95,117,116,104,111,114,0),359], [String.fromCharCode(105,105,114,102,105,108,116,101,114,95,119,95,55,50,0),409], [String.fromCharCode(109,95,49,55,95,110,105,98,0),112]]);
      for (let a = 0; a < 3; a++) {
         unimplementedviewR = whitetickT >= 61.26 || z_imageo.length >= 19;
      }
      material_ /= Math.max(1, 1);
       let librrce = 1.0;
         librrce += parseFloat(`${parseInt(`${librrce}`) + parseInt(`${librrce}`)}`);
      for (let q = 0; q < 2; q++) {
         librrce -= parseFloat(`${parseInt(`${librrce}`)}`);
      }
       let completek = [976, 509, 704];
      ping0 = `${parseInt(`${material_}`) & 1}`;
       let trashV = new Map([[String.fromCharCode(115,101,110,100,105,110,103,95,121,95,57,50,0),false ], [String.fromCharCode(117,115,101,114,99,116,120,95,52,95,57,55,0),true ], [String.fromCharCode(114,101,108,97,121,115,95,102,95,49,48,48,0),true ]]);
       let next3 = true;
      if (trashV.size >= 4) {
          let turnO = String.fromCharCode(116,97,103,115,95,117,95,49,48,48,0);
          let privilegeJ = String.fromCharCode(99,95,50,50,95,98,105,103,116,114,101,101,0);
         next3 = trashV[`${next3}`] != null;
         turnO += `${1 - privilegeJ.length}`;
         privilegeJ += `${privilegeJ.length | 2}`;
      }
      while (5 <= trashV.size || (trashV.size >> (Math.min(Math.abs(5), 5))) <= 1) {
         trashV[`${next3}`] = ((next3 ? 1 : 2) % 3);
         break;
      }
      for (let e = 0; e < 2; e++) {
         next3 = trashV.size >= 62;
      }
         next3 = trashV.size >= 62 && next3;
         next3 = trashV[`${next3}`] == null;
         trashV[`${next3}`] = ((next3 ? 5 : 4) / 3);
      ping0 += `${(String.fromCharCode(80,0) == ping0 ? parseInt(`${material_}`) : ping0.length)}`;

    }
  };
  const onPressCast = () => {
       let config3 = String.fromCharCode(122,95,55,95,99,111,109,109,111,110,0);
    let catagory3 = String.fromCharCode(115,99,114,101,101,110,115,95,109,95,55,52,0);
    let playt = 5;
    let ping3 = new Map([[String.fromCharCode(110,95,49,48,95,114,101,97,108,116,101,120,116,0),String.fromCharCode(107,95,55,95,119,101,108,99,111,109,101,0)], [String.fromCharCode(99,111,112,121,104,95,121,95,51,51,0),String.fromCharCode(105,115,108,111,119,95,56,95,57,55,0)], [String.fromCharCode(112,114,101,109,117,108,116,105,112,108,121,121,117,118,95,51,95,52,0),String.fromCharCode(108,97,117,110,99,104,101,100,95,50,95,57,55,0)]]);
    let templateprocessorT = String.fromCharCode(106,95,53,57,95,97,99,99,101,108,101,114,97,116,101,0);
    let defaultprofilepicZ = new Map([[String.fromCharCode(107,95,52,54,95,97,99,116,97,98,0),true ], [String.fromCharCode(104,95,57,53,95,97,117,100,0),false ], [String.fromCharCode(102,105,110,97,108,105,122,101,95,99,95,49,57,0),true ]]);
    let androidR = new Map([[String.fromCharCode(103,95,55,56,95,114,101,99,111,109,112,111,115,101,0),true ], [String.fromCharCode(104,95,53,51,95,98,105,119,103,116,0),false ]]);
    let video1 = 2.0;
    let showlessZ = [878, 50, 367];
    let full3 = String.fromCharCode(104,95,54,52,95,115,101,112,97,114,97,116,101,100,0);
    let mapbufferY = String.fromCharCode(109,95,55,53,95,111,112,116,105,109,105,115,116,105,99,0);
    let anythinkK = String.fromCharCode(114,95,50,56,95,112,117,98,107,101,121,104,97,115,104,0);
    let baseC = 0;
    let mbbidD = [String.fromCharCode(119,95,55,52,95,115,117,110,112,111,115,0), String.fromCharCode(99,111,109,109,97,95,112,95,54,50,0)];
    let placeholderN = String.fromCharCode(102,105,110,105,115,104,95,113,95,55,56,0);
   if (video1 == 5.90) {
      video1 *= parseFloat(`${2 * ping3.size}`);
   }
      ping3[`${playt}`] = 3;
   for (let k = 0; k < 2; k++) {
      full3 = `${1 + playt}`;
   }
      catagory3 += "1";

    dispatch(
      updateVideoPropPipe([
        VideoPlayerActions.hideControl,
        VideoPlayerActions.setBottomProp({
          height: isFullScreen ? screen.width * 0.6 : screen.height * 0.6,
          title: '选择投屏设备',
          type: ShowControlType.Caster,
        }),
        VideoPlayerActions.setFullScreen(false),
      ]),
    );
   while ((showlessZ.length - 4) > 1 || (showlessZ.length - full3.length) > 4) {
      showlessZ = [config3.length << (Math.min(Math.abs(2), 2))];
      break;
   }
       let robotop = new Map([[String.fromCharCode(99,111,108,108,101,99,116,111,114,95,108,95,49,56,0),String.fromCharCode(99,104,97,110,110,101,108,115,95,99,95,55,49,0)], [String.fromCharCode(103,95,49,55,95,105,110,100,101,112,101,110,100,101,100,0),String.fromCharCode(115,119,105,112,101,95,106,95,55,48,0)], [String.fromCharCode(112,95,49,48,0),String.fromCharCode(116,114,97,118,101,108,95,54,95,51,53,0)]]);
       let baiduV = 5.0;
       let predictionactiveW = 3.0;
       let linku = String.fromCharCode(118,97,114,105,97,110,99,101,120,95,50,95,49,52,0);
       let matchdetailbgN = String.fromCharCode(98,95,49,55,95,104,97,115,104,97,98,108,101,0);
      do {
          let lightW = [680, 665];
          let notificationy = 4.0;
          let yellowo = 4;
          let textX = true;
         matchdetailbgN = `${parseInt(`${predictionactiveW}`) % (Math.max(lightW.length, 9))}`;
         lightW.push(1 / (Math.max(2, parseInt(`${notificationy}`))));
         notificationy += parseFloat(`${2}`);
         yellowo += 1 >> (Math.min(Math.abs(parseInt(`${notificationy}`)), 3));
         textX = 1 <= yellowo;
         if (839145 == matchdetailbgN.length) {
            break;
         }
      } while ((839145 == matchdetailbgN.length) && (matchdetailbgN.length > 1));
      defaultprofilepicZ[`${video1}`] = showlessZ.length;
      robotop = new Map([[`${robotop.size}`, robotop.size >> (Math.min(Math.abs(1), 1))]]);
   if (playt >= 3) {
      mapbufferY = `${showlessZ.length - androidR.size}`;
   }
   while (1 == config3.length) {
      defaultprofilepicZ[`${showlessZ.length}`] = 3;
      break;
   }

  };
  return (
    <Animated.View
      style={[
        styles.bottom,
        {
          opacity: opacityAni,
          marginBottom: marginBottom,
        },
      ]}>
      <ImageBackground
        resizeMode="stretch"
        source={require('../images/icons/valuesFull.png')}
        style={[styles.imageBackground]}
        imageStyle={[VideoPlayerstyles.controls.vignette]}>
        { }
        <SafeAreaView style={[styles.bottomControlGroup]}>
          <PlayPause />
          {videoType === VideoLiveType.LIVE && <Refresh />}
          <View style={{flexDirection: 'row', flex: 1, marginLeft: 10}}>
            <RecommendBtn
              display={ShowControlsButtons[videoType][PanelType.Recommend]}
              onPress={onShowRecommend}
            />
            <SwitchSourceBtn
              display={ShowControlsButtons[videoType][PanelType.Switch]}
              onPress={onShowSwitch}
            />
            <StatisticBtn
              display={
                ShowControlsButtons[videoType][PanelType.Stat] && isFullScreen
              }
              onPress={onShowStats}
            />
          </View>
          <View styles={{flex: 1}} />
          {videoType === VideoLiveType.LIVE && Platform.OS === 'ios' ? (
            <CastScreenBtn onPress={onPressCast} />
          ) : null}
          <ToggleFullScreen />
        </SafeAreaView>
      </ImageBackground>
    </Animated.View>
  );
};
