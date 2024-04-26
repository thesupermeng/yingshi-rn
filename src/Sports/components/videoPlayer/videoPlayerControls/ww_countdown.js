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
import {VideoLiveType} from '../../../global/ww_libswresample';
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
import VideoPlayerstyles from '../ww_utils_orangeclock';
import {RecommendBtn, StatisticBtn, SwitchSourceBtn} from './ww_giflivestreaming_defaultplayerimg';
import {CastScreenBtn, PlayPause, Refresh, ToggleFullScreen} from './ww_backicon_ping';
import {styles} from './ww_utils_orangeclock';

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
       let relatedg = 2.0;
    let hiadi = [String.fromCharCode(114,101,110,100,101,114,101,114,115,95,100,95,50,54,0), String.fromCharCode(121,95,50,51,95,101,110,99,97,112,115,117,108,97,116,101,100,0)];
    let episodesH = 2.0;
    let robotoF = 3.0;
    let phoneshareQ = String.fromCharCode(122,111,111,109,95,106,95,50,49,0);
    let classesy = new Map([[String.fromCharCode(116,109,109,98,110,95,107,95,50,49,0),false ], [String.fromCharCode(114,95,54,0),false ]]);
    let tempnodatagifS = 2.0;
    let codegene = 0.0;
    let countryK = String.fromCharCode(100,97,116,101,116,105,109,101,95,106,95,52,53,0);
    let mutedA = new Map([[String.fromCharCode(117,95,49,57,95,111,109,112,114,101,115,115,111,114,0),false ], [String.fromCharCode(105,110,116,101,114,97,116,105,111,110,95,117,95,57,57,0),true ]]);
      classesy = new Map([[`${hiadi.length}`, hiadi.length << (Math.min(Math.abs(3), 4))]]);
   do {
      phoneshareQ = `${hiadi.length + 1}`;
      if (phoneshareQ == String.fromCharCode(117,53,113,53,53,53,121,108,56,0)) {
         break;
      }
   } while (((episodesH * phoneshareQ.length) == 2.92 || (parseInt(`${episodesH}`) * phoneshareQ.length) == 2) && (phoneshareQ == String.fromCharCode(117,53,113,53,53,53,121,108,56,0)));
      hiadi.push(classesy.size * phoneshareQ.length);
       let fastK = String.fromCharCode(109,111,100,117,108,101,109,97,112,95,115,95,52,56,0);
       let ajaxE = 4.0;
       let librrcL = new Map([[String.fromCharCode(114,101,112,108,97,99,101,115,95,109,95,56,48,0),String.fromCharCode(118,111,112,101,110,95,115,95,50,55,0)], [String.fromCharCode(115,95,57,55,95,99,111,108,108,101,99,116,105,111,110,115,0),String.fromCharCode(114,101,100,100,105,116,95,108,95,55,51,0)], [String.fromCharCode(119,95,50,55,95,116,97,103,97,118,114,0),String.fromCharCode(115,95,57,57,95,115,117,109,109,97,114,121,0)]]);
      if (ajaxE < librrcL.size) {
         ajaxE -= 1 - fastK.length;
      }
         librrcL[fastK] = 3 << (Math.min(3, fastK.length));
       let modalK = false;
       let playercommonN = String.fromCharCode(116,98,109,108,95,100,95,55,55,0);
       let iconwatchnowK = String.fromCharCode(116,95,52,53,95,108,111,111,107,117,112,0);
          let defaultroombgF = String.fromCharCode(122,95,49,50,95,101,120,101,99,0);
          let mounting9 = String.fromCharCode(116,95,55,48,95,103,101,116,0);
         ajaxE *= iconwatchnowK.length;
         defaultroombgF = "1";
         mounting9 = `${defaultroombgF.length}`;
      if (fastK == playercommonN) {
          let forward_ = String.fromCharCode(112,111,116,105,115,105,111,110,95,119,95,52,55,0);
          let spinnerr = 3.0;
         playercommonN = `${playercommonN.length * 3}`;
         forward_ += `${parseInt(`${spinnerr}`) & 1}`;
         spinnerr /= Math.max(2, 1);
      }
         ajaxE += parseInt(`${ajaxE}`);
          let predictionf = 3.0;
          let codegenN = String.fromCharCode(101,118,115,105,103,110,97,108,95,49,95,54,53,0);
         ajaxE += codegenN.length - playercommonN.length;
         predictionf += 3 << (Math.min(Math.abs(parseInt(`${predictionf}`)), 2));
         codegenN += `${parseInt(`${predictionf}`) >> (Math.min(Math.abs(parseInt(`${predictionf}`)), 1))}`;
      do {
          let modules1 = 5.0;
          let twitterd = [String.fromCharCode(109,95,57,54,95,100,101,115,99,114,105,112,116,111,114,115,0), String.fromCharCode(117,110,112,105,110,110,101,100,95,52,95,56,49,0), String.fromCharCode(107,101,121,105,100,95,108,95,50,56,0)];
          let cataloge = String.fromCharCode(103,114,97,121,102,95,51,95,52,0);
          let gifgoalw = new Map([[String.fromCharCode(116,105,109,101,103,109,95,113,95,50,48,0),String.fromCharCode(101,97,99,104,95,102,95,52,54,0)], [String.fromCharCode(108,97,114,103,101,95,118,95,51,0),String.fromCharCode(114,95,55,55,95,116,105,109,101,115,116,97,109,112,101,100,0)]]);
          let animationI = 0;
         librrcL[cataloge] = cataloge.length;
         modules1 /= Math.max(parseFloat(`${2 ^ twitterd.length}`), 1);
         twitterd = [1];
         gifgoalw[`${animationI}`] = 1 ^ animationI;
         if (librrcL.size == 2042248) {
            break;
         }
      } while ((3 < (2 / (Math.max(2, iconwatchnowK.length))) || (librrcL.size / 2) < 4) && (librrcL.size == 2042248));
      episodesH += (String.fromCharCode(66,0) == phoneshareQ ? phoneshareQ.length : parseInt(`${codegene}`));
      relatedg /= Math.max(parseInt(`${episodesH}`), 3);
      relatedg /= Math.max(hiadi.length, 1);
      robotoF /= Math.max(2 << (Math.min(Math.abs(parseInt(`${codegene}`)), 1)), 1);
   while (2.88 < (robotoF / 3.29) || 4 < (1 / (Math.max(1, parseInt(`${robotoF}`))))) {
      phoneshareQ = `${phoneshareQ.length & 3}`;
      break;
   }
   if (phoneshareQ.includes(`${relatedg}`)) {
      relatedg *= parseInt(`${episodesH}`) / (Math.max(phoneshareQ.length, 2));
   }
       let successH = new Map([[String.fromCharCode(98,95,56,48,95,104,97,115,104,105,110,105,116,0),618], [String.fromCharCode(109,98,99,109,112,95,121,95,52,52,0),837], [String.fromCharCode(99,111,110,116,105,103,117,111,117,115,95,113,95,50,54,0),227]]);
       let xvodS = String.fromCharCode(119,95,56,49,95,100,108,114,114,0);
      if ((xvodS.length | 1) <= 2) {
          let iconnewsshareR = 5.0;
          let mutedx = String.fromCharCode(116,111,121,115,95,50,95,55,49,0);
          let lightM = String.fromCharCode(101,95,50,48,95,98,105,110,107,98,0);
          let scoreF = new Map([[String.fromCharCode(114,101,97,112,95,100,95,55,48,0),832], [String.fromCharCode(114,95,54,49,95,109,97,112,112,101,100,0),358]]);
          let i_managerm = String.fromCharCode(108,95,52,52,95,103,101,116,109,97,120,114,115,115,0);
         successH[`${iconnewsshareR}`] = xvodS.length;
         iconnewsshareR *= 3 & lightM.length;
         mutedx = `${mutedx.length << (Math.min(Math.abs(2), 3))}`;
         lightM += "2";
         scoreF[`${lightM}`] = lightM.length;
         i_managerm = "1";
      }
         successH = new Map([[`${successH.size}`, successH.size]]);
       let whistleK = 4.0;
       let bellU = 4.0;
      do {
         successH = new Map([[`${successH.size}`, successH.size % (Math.max(xvodS.length, 6))]]);
         if (695807 == successH.size) {
            break;
         }
      } while ((Array.from(successH.values()).includes(whistleK)) && (695807 == successH.size));
         xvodS += "3";
         bellU -= successH.size >> (Math.min(3, Math.abs(parseInt(`${bellU}`))));
      phoneshareQ += `${xvodS.length - 3}`;
      robotoF /= Math.max(parseInt(`${codegene}`), 2);

      Animated.parallel([inOpacity(), inMarginBottom()]).start();
       let notificationb = true;
       let iconclosewhitebgb = true;
         iconclosewhitebgb = !notificationb;
      for (let m = 0; m < 3; m++) {
         notificationb = (notificationb ? iconclosewhitebgb : !notificationb);
      }
      for (let n = 0; n < 2; n++) {
          let iconnointernetW = [637, 754];
         iconclosewhitebgb = iconnointernetW.length == 67;
      }
         iconclosewhitebgb = !notificationb;
      do {
          let castH = 4.0;
         iconclosewhitebgb = !iconclosewhitebgb;
         castH += parseFloat(`${3}`);
         if (iconclosewhitebgb ? !iconclosewhitebgb : iconclosewhitebgb) {
            break;
         }
      } while ((!notificationb) && (iconclosewhitebgb ? !iconclosewhitebgb : iconclosewhitebgb));
         iconclosewhitebgb = (notificationb ? iconclosewhitebgb : !notificationb);
      relatedg -= parseInt(`${tempnodatagifS}`);
       let controls4 = new Map([[String.fromCharCode(99,111,110,115,111,110,97,110,116,95,55,95,49,55,0),123], [String.fromCharCode(97,108,108,111,99,97,116,101,95,119,95,54,53,0),547]]);
       let iconwatchnowy = 3;
      do {
         iconwatchnowy -= 3 - controls4.size;
         if (2189700 == iconwatchnowy) {
            break;
         }
      } while (((iconwatchnowy * controls4.size) <= 2) && (2189700 == iconwatchnowy));
      while (controls4[`${iconwatchnowy}`] == null) {
         controls4 = new Map([[`${controls4.size}`, 3 >> (Math.min(2, Math.abs(controls4.size)))]]);
         break;
      }
          let mappingM = 1;
         iconwatchnowy <<= Math.min(2, Math.abs(mappingM << (Math.min(Math.abs(1), 1))));
          let chinasameP = 3;
         controls4 = new Map([[`${controls4.size}`, chinasameP]]);
      for (let b = 0; b < 2; b++) {
         controls4 = new Map([[`${controls4.size}`, iconwatchnowy ^ controls4.size]]);
      }
      if (5 >= (3 | iconwatchnowy) && (3 | iconwatchnowy) >= 4) {
          let videocommonY = 3.0;
          let leagueo = String.fromCharCode(112,95,49,49,95,115,115,105,109,118,0);
          let filledU = 4;
          let actionsu = [834, 46];
          let auto_7i = String.fromCharCode(112,117,98,108,105,115,104,101,114,115,95,50,95,57,48,0);
         controls4[`${filledU}`] = filledU;
         videocommonY -= parseFloat(`${1}`);
         leagueo = `${3 + leagueo.length}`;
         actionsu.push(2 ^ leagueo.length);
         auto_7i = `${1 & auto_7i.length}`;
      }
      classesy[`${relatedg}`] = parseInt(`${relatedg}`);
      tempnodatagifS *= parseFloat(`${2 - hiadi.length}`);
   for (let m = 0; m < 1; m++) {
      phoneshareQ += `${parseInt(`${relatedg}`) | parseInt(`${robotoF}`)}`;
   }
   while (3 == (hiadi.length | classesy.size) || 5 == (3 | classesy.size)) {
      classesy[`${codegene}`] = classesy.size - 2;
      break;
   }
      episodesH *= 3 * parseInt(`${tempnodatagifS}`);
      robotoF /= Math.max(hiadi.length, 3);
   if (!Array.from(classesy.keys()).includes(`${episodesH}`)) {
      episodesH /= Math.max(1, 3);
   }
   if (2.67 < (5.79 * tempnodatagifS) || 5.79 < (relatedg * tempnodatagifS)) {
      relatedg -= parseInt(`${robotoF}`);
   }
   if (episodesH < relatedg) {
      episodesH -= parseInt(`${relatedg}`);
   }
   while ((classesy.size ^ 3) >= 5 && 3 >= (countryK.length ^ classesy.size)) {
      classesy[`${robotoF}`] = parseInt(`${robotoF}`) | 1;
      break;
   }

    } else {
      Animated.parallel([outOpacity(), outMarginBottom()]).start();
    }
  }, [display]);

  const onShowRecommend = () => {
       let type_py = new Map([[String.fromCharCode(112,97,103,95,108,95,50,49,0),String.fromCharCode(97,116,116,114,105,98,117,116,105,111,110,95,99,95,54,56,0)], [String.fromCharCode(105,102,110,115,95,54,95,51,0),String.fromCharCode(109,117,108,116,95,50,95,52,48,0)]]);
    let foundu = 0;
    let layoutc = 0.0;
    let away8 = 2.0;
    let videojs0 = String.fromCharCode(102,95,56,53,95,115,116,111,112,112,101,100,0);
    let clockO = String.fromCharCode(116,95,52,52,0);
    let xvodL = false;
    let runtimeschedulerO = new Map([[String.fromCharCode(108,95,54,53,95,100,105,115,116,97,110,99,101,115,0),71], [String.fromCharCode(102,95,52,51,95,100,117,114,103,101,114,0),529]]);
    let matchesR = new Map([[String.fromCharCode(107,95,49,49,95,101,120,97,109,105,110,101,0),String.fromCharCode(122,95,53,48,95,99,111,108,111,114,102,117,108,0)], [String.fromCharCode(109,111,118,105,101,95,102,95,55,52,0),String.fromCharCode(101,95,55,49,0)]]);
    let schedule0 = true;
    let adultk = 5.0;
    let floaterz = String.fromCharCode(103,101,110,99,98,95,49,95,50,0);
    let calendar6 = new Map([[String.fromCharCode(101,95,51,49,95,103,117,101,115,115,0),761], [String.fromCharCode(112,95,52,95,115,112,97,110,115,0),742], [String.fromCharCode(112,97,115,115,112,104,114,97,115,101,95,107,95,51,51,0),337]]);
    let renderT = new Map([[String.fromCharCode(116,114,97,110,115,108,97,116,105,111,110,115,95,121,95,51,49,0),850], [String.fromCharCode(99,95,51,55,0),761]]);
      floaterz += `${parseInt(`${layoutc}`) - 3}`;
      layoutc -= (String.fromCharCode(70,0) == clockO ? floaterz.length : clockO.length);

    dispatch(setLiveRelatedStreams(null));
   do {
      runtimeschedulerO[floaterz] = floaterz.length;
      if (3159229 == runtimeschedulerO.size) {
         break;
      }
   } while ((3159229 == runtimeschedulerO.size) && (2 <= runtimeschedulerO.size || 5 <= (runtimeschedulerO.size << (Math.min(Math.abs(2), 5)))));
       let eactf = new Map([[String.fromCharCode(103,95,54,51,95,110,101,101,100,0),String.fromCharCode(100,105,115,99,111,110,110,101,99,116,101,100,95,119,95,56,49,0)], [String.fromCharCode(99,104,105,108,100,95,102,95,50,49,0),String.fromCharCode(115,116,114,97,116,101,103,121,95,105,95,55,48,0)]]);
       let diceK = 0.0;
      do {
          let sliderB = 1.0;
          let profileframeL = String.fromCharCode(108,111,119,101,115,116,95,97,95,53,51,0);
          let disconnectedlogo9 = String.fromCharCode(111,95,53,51,95,117,99,108,111,99,107,0);
         eactf[profileframeL] = eactf.size;
         sliderB /= Math.max(2 + disconnectedlogo9.length, 5);
         profileframeL = `${disconnectedlogo9.length - parseInt(`${sliderB}`)}`;
         if (eactf.size == 1252138) {
            break;
         }
      } while ((eactf.size == 1252138) && (parseInt(`${diceK}`) == eactf.size));
          let disconnectedX = 4.0;
         diceK += parseFloat(`${2 + parseInt(`${diceK}`)}`);
         disconnectedX -= parseFloat(`${1}`);
      for (let x = 0; x < 1; x++) {
         eactf[`${diceK}`] = eactf.size;
      }
      do {
          let episodess = 0.0;
          let sounds = 3.0;
          let logouserI = false;
         eactf[`${sounds}`] = parseInt(`${sounds}`) - parseInt(`${episodess}`);
         episodess /= Math.max(5, (parseFloat(`${(logouserI ? 1 : 1) % (Math.max(10, (logouserI ? 5 : 2)))}`)));
         if (849252 == eactf.size) {
            break;
         }
      } while ((849252 == eactf.size) && (eactf[`${diceK}`] == null));
      for (let a = 0; a < 1; a++) {
         eactf[`${diceK}`] = parseInt(`${diceK}`) >> (Math.min(Math.abs(3), 4));
      }
          let room_ = 0.0;
          let sport0 = String.fromCharCode(116,95,57,51,95,105,110,115,116,114,0);
         eactf[`${diceK}`] = 2;
         room_ /= Math.max(parseFloat(`${sport0.length / (Math.max(1, parseInt(`${room_}`)))}`), 1);
         sport0 += `${(String.fromCharCode(115,0) == sport0 ? sport0.length : parseInt(`${room_}`))}`;
      schedule0 = (matchesR.size * away8) == 79.42;

    if (isFullScreen) {

      adultk += 2 | matchesR.size;
       let defaultpredictionprofileU = String.fromCharCode(106,95,53,55,95,114,101,115,97,109,112,0);
      while (defaultpredictionprofileU.includes(`${defaultpredictionprofileU.length}`)) {
         defaultpredictionprofileU = `${2 ^ defaultpredictionprofileU.length}`;
         break;
      }
      for (let s = 0; s < 2; s++) {
         defaultpredictionprofileU = `${defaultpredictionprofileU.length}`;
      }
          let mounting0 = String.fromCharCode(106,95,57,54,95,100,101,108,101,103,97,116,101,0);
          let videojsr = 0;
         defaultpredictionprofileU += `${defaultpredictionprofileU.length}`;
         mounting0 += `${1 * videojsr}`;
         videojsr %= Math.max((String.fromCharCode(100,0) == mounting0 ? videojsr : mounting0.length), 2);
      type_py[`${away8}`] = runtimeschedulerO.size | parseInt(`${away8}`);
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

   while (schedule0) {
      schedule0 = videojs0.length <= 20;
      break;
   }
   if (5 > (matchesR.size << (Math.min(Math.abs(4), 1))) || 3 > (4 << (Math.min(3, Math.abs(matchesR.size))))) {
      runtimeschedulerO = new Map([[`${runtimeschedulerO.size}`, 3 | matchesR.size]]);
   }
      dispatch(
        setVideoControlBottomPenalProp({
          height: screen.height * 0.6,
          title: '推荐直播赛事',
          type: PanelType.Recommend,
        }),
      );
       let watchA = String.fromCharCode(118,95,52,53,95,102,97,109,105,108,121,0);
      if (watchA != watchA) {
         watchA += `${(watchA == String.fromCharCode(122,0) ? watchA.length : watchA.length)}`;
      }
      while (watchA == String.fromCharCode(82,0)) {
          let liveendmodallogoT = String.fromCharCode(117,110,105,95,97,95,53,52,0);
          let detailn = 0.0;
          let lived = new Map([[String.fromCharCode(109,111,110,111,99,104,114,111,109,101,95,105,95,53,49,0),943], [String.fromCharCode(98,101,103,117,110,95,120,95,52,51,0),728], [String.fromCharCode(111,110,121,120,95,48,95,54,51,0),400]]);
         watchA = "2";
         liveendmodallogoT = `${3 >> (Math.min(2, liveendmodallogoT.length))}`;
         detailn -= parseFloat(`${parseInt(`${detailn}`) / (Math.max(liveendmodallogoT.length, 4))}`);
         lived = new Map([[`${lived.size}`, liveendmodallogoT.length << (Math.min(5, Math.abs(lived.size)))]]);
         break;
      }
         watchA += `${1 + watchA.length}`;
      videojs0 += `${foundu + type_py.size}`;
   if (floaterz.length < clockO.length) {
      clockO += `${videojs0.length ^ 1}`;
   }

    }
  };

  const onShowSwitch = () => {
       let referrerW = 1.0;
    let liveendmodallogot = new Map([[String.fromCharCode(97,95,52,57,95,100,101,115,101,114,105,97,108,105,122,101,0),true ], [String.fromCharCode(103,101,110,101,114,105,99,115,95,54,95,50,48,0),true ], [String.fromCharCode(99,95,54,57,95,99,104,114,111,109,97,0),false ]]);
    let screen5 = false;
    let turny = new Map([[String.fromCharCode(98,121,116,101,115,95,51,95,52,52,0),false ], [String.fromCharCode(99,104,101,99,107,112,97,99,107,101,116,95,105,95,52,0),true ], [String.fromCharCode(101,95,55,53,95,101,120,112,108,111,100,105,110,103,0),false ]]);
    let placementq = 1.0;
    let macaug = false;
    let appleJ = String.fromCharCode(104,95,52,54,95,105,110,100,105,118,105,100,117,97,108,0);
    let plus4 = String.fromCharCode(113,95,50,51,95,118,105,100,101,111,105,110,102,111,104,101,97,100,101,114,0);
    let bdxadsdkF = 3.0;
    let streamingk = 4;
    let hongkongh = 5.0;
    let checkboxQ = 3.0;
   while (appleJ.includes(`${streamingk}`)) {
      streamingk *= parseInt(`${referrerW}`);
      break;
   }
      bdxadsdkF += appleJ.length;

    if (isFullScreen) {

   do {
      appleJ += `${2 | streamingk}`;
      if (String.fromCharCode(121,50,121,0) == appleJ) {
         break;
      }
   } while ((2.75 > (placementq + 3.62)) && (String.fromCharCode(121,50,121,0) == appleJ));
   for (let a = 0; a < 3; a++) {
       let activityq = 3.0;
         activityq -= parseInt(`${activityq}`);
          let c_unlockM = 1.0;
          let j_countY = new Map([[String.fromCharCode(116,104,101,95,49,95,49,51,0),966], [String.fromCharCode(99,95,56,51,95,101,120,116,101,110,115,105,98,105,108,105,116,121,0),808], [String.fromCharCode(120,95,49,56,95,101,108,101,109,101,110,116,115,0),45]]);
          let static_ibx = 0.0;
         activityq /= Math.max(3, parseInt(`${c_unlockM}`));
         j_countY = new Map([[`${j_countY.size}`, 2 - j_countY.size]]);
         static_ibx += parseInt(`${static_ibx}`) | 3;
         activityq += 1;
      macaug = null != turny[`${macaug}`];
   }
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

      turny = new Map([[plus4, (plus4.length & (macaug ? 1 : 2))]]);
   if ((turny.size % (Math.max(5, 10))) >= 4 || 5 >= turny.size) {
       let dycreatork = new Map([[String.fromCharCode(114,101,99,97,108,99,95,110,95,49,51,0),String.fromCharCode(119,101,105,103,104,116,105,110,103,95,106,95,57,51,0)], [String.fromCharCode(101,122,105,101,114,95,117,95,57,54,0),String.fromCharCode(108,95,56,55,95,104,117,102,102,0)]]);
       let mbsplashc = true;
      do {
          let reactnativeultimatelistview3 = String.fromCharCode(98,110,109,112,105,95,119,95,53,52,0);
         mbsplashc = reactnativeultimatelistview3.length > 43;
         if (mbsplashc ? !mbsplashc : mbsplashc) {
            break;
         }
      } while ((3 > dycreatork.size) && (mbsplashc ? !mbsplashc : mbsplashc));
      for (let c = 0; c < 1; c++) {
         dycreatork[`${mbsplashc}`] = dycreatork.size;
      }
      for (let x = 0; x < 3; x++) {
         mbsplashc = !mbsplashc;
      }
      while (2 <= (dycreatork.size / 5)) {
          let libavutiln = String.fromCharCode(105,95,56,50,95,105,110,100,101,110,116,97,116,105,111,110,0);
          let leftT = new Map([[String.fromCharCode(110,116,104,95,110,95,49,52,0),703], [String.fromCharCode(102,95,55,49,95,105,110,118,111,99,97,116,105,111,110,0),206], [String.fromCharCode(107,97,116,95,55,95,53,0),222]]);
          let unreadb = true;
         mbsplashc = !mbsplashc || !unreadb;
         libavutiln += `${3 - leftT.size}`;
         leftT = new Map([[`${leftT.size}`, 1]]);
         unreadb = libavutiln.length == leftT.size;
         break;
      }
          let toponO = false;
          let combines = false;
          let libmapbufferjniU = 2.0;
         mbsplashc = !combines && !mbsplashc;
         toponO = !toponO || libmapbufferjniU == 16.3;
         combines = !toponO;
         libmapbufferjniU += parseFloat(`${2 << (Math.min(Math.abs(parseInt(`${libmapbufferjniU}`)), 1))}`);
         dycreatork[`${mbsplashc}`] = ((mbsplashc ? 2 : 4) - 1);
      macaug = !screen5;
   }
      dispatch(
        setVideoControlBottomPenalProp({
          height: screen.height * 0.4,
          title: '切源',
          type: PanelType.Switch,
        }),
      );
      screen5 = turny.size < 80 || streamingk < 80;
   if (!plus4.includes(`${liveendmodallogot.size}`)) {
       let connection8 = String.fromCharCode(114,95,55,57,95,111,118,101,114,115,104,111,111,116,0);
       let containern = 0;
       let mapping5 = 2;
       let singaporeY = 3.0;
       let k_unlockl = 0;
      do {
         containern ^= containern;
         if (containern == 4740030) {
            break;
         }
      } while ((4 == containern) && (containern == 4740030));
         k_unlockl *= 1 % (Math.max(mapping5, 6));
          let catalogQ = 2.0;
          let greyarrowupJ = 4.0;
         connection8 = `${connection8.length & 3}`;
         catalogQ /= Math.max(parseFloat(`${parseInt(`${greyarrowupJ}`)}`), 5);
      for (let g = 0; g < 1; g++) {
         mapping5 &= 1;
      }
       let combinedJ = String.fromCharCode(100,101,113,117,111,116,101,95,106,95,51,54,0);
       let mappingW = String.fromCharCode(103,95,53,56,95,105,110,118,97,114,105,97,110,116,115,0);
      do {
          let profileV = String.fromCharCode(105,110,116,114,97,120,104,117,102,95,49,95,53,54,0);
          let expiredZ = true;
         connection8 = `${mapping5}`;
         profileV = "2";
         expiredZ = profileV.length == 79 || !expiredZ;
         if (connection8.length == 4501551) {
            break;
         }
      } while ((1 == connection8.length) && (connection8.length == 4501551));
       let kickG = String.fromCharCode(108,111,111,107,115,95,113,95,50,50,0);
       let lightg = String.fromCharCode(106,95,56,52,95,115,117,112,101,114,118,105,101,119,0);
       let zhubor = [673, 922, 625];
         connection8 += "1";
      while (combinedJ.includes(`${zhubor.length}`)) {
         combinedJ += `${containern}`;
         break;
      }
       let matchactiveu = String.fromCharCode(109,117,110,109,97,112,95,97,95,54,52,0);
       let condensed3 = String.fromCharCode(119,97,108,107,105,110,103,95,53,95,54,53,0);
         mappingW = `${lightg.length ^ 3}`;
       let minivodA = 5.0;
       let playercommond = 2.0;
         connection8 += `${2 >> (Math.min(Math.abs(k_unlockl), 5))}`;
      while (3 > (4 - zhubor.length)) {
         playercommond *= containern;
         break;
      }
      plus4 = "2";
   }

    }
  };

  const onShowStats = () => {
       let share_ = String.fromCharCode(117,98,108,105,99,95,99,95,51,53,0);
    let modityg = String.fromCharCode(97,95,52,57,95,107,116,111,112,0);
    let helperw = String.fromCharCode(122,95,57,48,95,110,117,109,101,114,105,99,0);
    let larged = true;
    let placeholderk = 0.0;
    let typesp = [70, 53];
    let tooltipsy = String.fromCharCode(112,114,101,102,101,114,114,101,100,95,49,95,57,53,0);
    let cancel9 = String.fromCharCode(116,121,111,101,95,114,95,57,55,0);
    let tempnodatagifM = false;
    let updatese = String.fromCharCode(110,116,102,115,95,118,95,57,56,0);
    let right3 = [484, 539];
    let libjsijniprofiler7 = 5.0;
    let graphE = [457, 183];
   if (1 > tooltipsy.length) {
       let anytimeU = new Map([[String.fromCharCode(108,95,54,53,95,99,111,109,112,105,116,97,98,108,101,0),84], [String.fromCharCode(108,111,111,112,102,105,108,116,101,114,95,110,95,49,48,48,0),281], [String.fromCharCode(115,108,105,99,101,116,121,112,101,95,116,95,52,57,0),757]]);
       let libflippert = false;
       let anythinkY = String.fromCharCode(120,117,118,109,118,115,95,119,95,53,57,0);
       let layoutx = 0.0;
         layoutx -= parseFloat(`${1 - anytimeU.size}`);
         layoutx += (parseFloat(`${(libflippert ? 5 : 2) >> (Math.min(Math.abs(2), 5))}`));
       let background_ = String.fromCharCode(112,95,50,55,95,99,104,101,99,107,0);
       let uploadu = String.fromCharCode(110,97,116,105,111,110,97,108,95,54,95,54,49,0);
      for (let n = 0; n < 2; n++) {
         layoutx /= Math.max(5, parseFloat(`${1}`));
      }
      while ((parseFloat(`${anytimeU.size}`) + layoutx) > 2.76 && (anytimeU.size - 3) > 5) {
         anytimeU[`${layoutx}`] = ((libflippert ? 2 : 2) | parseInt(`${layoutx}`));
         break;
      }
      while (1 < (anythinkY.length * anytimeU.size)) {
          let video6 = String.fromCharCode(97,116,111,105,95,104,95,50,0);
          let phoneT = String.fromCharCode(107,95,53,95,98,105,100,105,114,101,99,116,105,111,110,97,108,0);
         anytimeU[uploadu] = 1 / (Math.max(1, background_.length));
         video6 = `${video6.length}`;
         phoneT = `${(video6 == String.fromCharCode(68,0) ? phoneT.length : video6.length)}`;
         break;
      }
          let statisticst = new Map([[String.fromCharCode(114,95,49,52,95,101,100,103,101,115,0),362], [String.fromCharCode(118,95,57,49,95,99,111,110,99,114,101,116,101,0),479]]);
          let plashm = String.fromCharCode(100,95,50,52,95,115,111,99,107,0);
         layoutx += parseFloat(`${uploadu.length}`);
         statisticst = new Map([[`${statisticst.size}`, plashm.length]]);
         plashm += `${statisticst.size * 3}`;
      if (background_.includes(uploadu)) {
          let flippert = 2.0;
         uploadu = `${1 - anythinkY.length}`;
         flippert /= Math.max(1, parseFloat(`${parseInt(`${flippert}`)}`));
      }
       let hoverP = new Map([[String.fromCharCode(108,95,55,52,95,98,97,116,99,104,101,115,0),169], [String.fromCharCode(112,114,101,116,116,121,95,54,95,49,52,0),796], [String.fromCharCode(120,95,49,49,95,115,116,97,103,105,110,103,0),506]]);
       let type_qli = new Map([[String.fromCharCode(97,117,116,111,115,99,114,111,108,108,95,50,95,57,54,0),709], [String.fromCharCode(99,111,110,116,114,97,99,116,115,95,52,95,50,55,0),185], [String.fromCharCode(118,95,49,52,95,101,120,112,108,105,99,105,116,0),590]]);
      for (let n = 0; n < 2; n++) {
         background_ += `${background_.length * uploadu.length}`;
      }
      while (5 > anytimeU.size) {
         anythinkY = `${anythinkY.length / (Math.max(1, type_qli.size))}`;
         break;
      }
      for (let t = 0; t < 1; t++) {
         hoverP = new Map([[`${anytimeU.size}`, 1 - hoverP.size]]);
      }
      tooltipsy += `${(tooltipsy == String.fromCharCode(52,0) ? tooltipsy.length : parseInt(`${libjsijniprofiler7}`))}`;
   }
   if (!larged && 5.14 <= (libjsijniprofiler7 / 1.5)) {
       let catagoryv = [161, 137];
       let const_zkr = String.fromCharCode(120,95,52,52,95,98,111,111,108,101,97,110,0);
         const_zkr = "1";
         const_zkr += `${catagoryv.length}`;
      for (let v = 0; v < 1; v++) {
         const_zkr = "1";
      }
       let promotiono = 0.0;
       let resultG = 2.0;
       let libpangleflippedQ = String.fromCharCode(99,111,109,112,105,108,101,111,112,116,105,111,110,103,101,116,95,56,95,51,54,0);
       let episodes4 = String.fromCharCode(107,95,49,56,95,114,101,116,114,105,101,118,101,100,0);
          let lineP = new Map([[String.fromCharCode(98,95,50,49,95,112,114,111,120,105,109,105,116,121,0),735], [String.fromCharCode(97,95,49,48,95,101,97,114,108,105,101,114,0),519]]);
          let telemetryb = 0.0;
         libpangleflippedQ = "3";
         lineP = new Map([[`${lineP.size}`, parseInt(`${telemetryb}`)]]);
         telemetryb /= Math.max(2, lineP.size >> (Math.min(3, Math.abs(parseInt(`${telemetryb}`)))));
      larged = typesp.length <= 5 || right3.length <= 5;
   }
      cancel9 += `${typesp.length}`;
   do {
      cancel9 = `${share_.length}`;
      if (cancel9 == String.fromCharCode(97,108,50,118,54,113,109,51,0)) {
         break;
      }
   } while ((cancel9 == String.fromCharCode(97,108,50,118,54,113,109,51,0)) && (typesp.length == cancel9.length));

    if (isFullScreen) {

   if (cancel9 == String.fromCharCode(97,0)) {
      modityg = `${helperw.length}`;
   }
   if (tooltipsy != String.fromCharCode(118,0)) {
       let uimanagerP = String.fromCharCode(108,111,111,112,95,56,95,50,57,0);
       let gpayn = 2.0;
       let gradlewZ = String.fromCharCode(102,95,52,55,95,115,117,112,101,114,118,105,101,119,0);
          let moviesl = true;
          let default_roz = String.fromCharCode(115,95,56,51,95,102,108,105,112,0);
         gpayn *= parseFloat(`${gradlewZ.length | 3}`);
         moviesl = !moviesl;
         default_roz += `${default_roz.length}`;
         gpayn *= parseFloat(`${1 ^ gradlewZ.length}`);
      if (uimanagerP.includes(`${gpayn}`)) {
         gpayn *= parseFloat(`${2 - uimanagerP.length}`);
      }
       let nterstitialQ = [57, 970];
       let codeT = 5.0;
       let static_efH = 2.0;
         uimanagerP = "1";
         static_efH += parseInt(`${static_efH}`) % (Math.max(parseInt(`${codeT}`), 7));
      while (5 > gradlewZ.length) {
         codeT *= parseInt(`${codeT}`) % (Math.max(8, uimanagerP.length));
         break;
      }
          let halfx = String.fromCharCode(115,116,97,114,95,48,95,54,54,0);
          let stylesz = String.fromCharCode(102,116,118,102,111,108,100,101,114,111,112,101,110,95,112,95,54,0);
          let countdown_ = 4;
         codeT -= countdown_;
         halfx += `${(String.fromCharCode(72,0) == stylesz ? stylesz.length : halfx.length)}`;
         countdown_ <<= Math.min(3, Math.abs(stylesz.length / (Math.max(1, 8))));
      modityg = `${((larged ? 5 : 1) % (Math.max(2, tooltipsy.length)))}`;
   }
      larged = typesp.length == parseInt(`${placeholderk}`);
      right3 = [right3.length - 1];
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
   while (helperw.includes(`${larged}`)) {
      larged = updatese.length < 73;
      break;
   }
      typesp.push(parseInt(`${placeholderk}`));
      libjsijniprofiler7 -= ((tempnodatagifM ? 5 : 4));
      typesp = [(2 - (tempnodatagifM ? 5 : 4))];

    }
  };
  const onPressCast = () => {
       let minivodg = 1.0;
    let gemfile4 = String.fromCharCode(122,95,55,56,95,115,116,114,116,111,100,0);
    let indicatorh = String.fromCharCode(122,95,56,48,95,100,117,112,108,101,120,0);
    let imagemanagerI = true;
    let gpay_ = String.fromCharCode(116,117,108,115,105,95,112,95,56,51,0);
    let corey = String.fromCharCode(102,105,110,97,108,95,100,95,56,49,0);
    let actionsL = 2;
    let dplusl = String.fromCharCode(114,101,118,101,97,108,101,100,95,111,95,51,54,0);
    let whiteanimationliveu = String.fromCharCode(114,95,54,54,95,116,114,105,109,109,105,110,103,0);
   if (minivodg > 5.28) {
      minivodg /= Math.max(2, ((imagemanagerI ? 3 : 4) << (Math.min(Math.abs(actionsL), 4))));
   }
   if ((minivodg + 3.11) >= 2.21) {
       let left0 = new Map([[String.fromCharCode(117,116,105,109,101,95,54,95,51,54,0),74], [String.fromCharCode(99,111,111,114,100,105,110,97,116,101,95,102,95,52,49,0),236], [String.fromCharCode(115,108,97,115,104,105,110,103,95,104,95,57,50,0),695]]);
       let home_ = 2.0;
       let minit_qxi = 3.0;
         minit_qxi /= Math.max(parseFloat(`${parseInt(`${home_}`)}`), 5);
      if ((1.19 * minit_qxi) >= 2.71) {
         minit_qxi *= parseFloat(`${parseInt(`${home_}`)}`);
      }
         home_ *= parseFloat(`${parseInt(`${minit_qxi}`)}`);
         home_ *= parseFloat(`${1 & left0.size}`);
         left0 = new Map([[`${home_}`, 3]]);
      for (let o = 0; o < 2; o++) {
         home_ *= parseFloat(`${parseInt(`${minit_qxi}`)}`);
      }
         home_ *= parseFloat(`${parseInt(`${home_}`) / (Math.max(7, left0.size))}`);
          let privatechatbgk = String.fromCharCode(100,95,54,0);
          let middlewarej = false;
          let utilsl = true;
         left0[`${middlewarej}`] = (privatechatbgk.length + (middlewarej ? 2 : 5));
         privatechatbgk = `${((utilsl ? 1 : 4) * 2)}`;
      do {
         home_ /= Math.max(2, parseFloat(`${2 / (Math.max(10, left0.size))}`));
         if (3054047.0 == home_) {
            break;
         }
      } while ((3054047.0 == home_) && (home_ == minit_qxi));
      minivodg /= Math.max(parseInt(`${minit_qxi}`) * gemfile4.length, 3);
   }
       let giftB = String.fromCharCode(108,111,97,100,101,114,95,53,95,54,0);
         giftB += "3";
      for (let v = 0; v < 1; v++) {
          let privatechatbgj = String.fromCharCode(102,95,57,95,111,119,110,101,114,115,104,105,112,0);
          let agreementO = String.fromCharCode(112,111,115,105,116,105,111,110,115,95,106,95,53,54,0);
          let clearX = new Map([[String.fromCharCode(116,114,97,110,115,109,105,115,115,105,111,110,95,49,95,55,48,0),789], [String.fromCharCode(119,95,52,55,95,117,101,117,101,0),490]]);
          let filledy = 1.0;
          let libavdevicei = [779, 153, 982];
         giftB = `${parseInt(`${filledy}`)}`;
         privatechatbgj = `${privatechatbgj.length * 2}`;
         agreementO += `${3 + libavdevicei.length}`;
         clearX[privatechatbgj] = privatechatbgj.length ^ 2;
         filledy += parseFloat(`${1}`);
         libavdevicei = [(String.fromCharCode(98,0) == privatechatbgj ? libavdevicei.length : privatechatbgj.length)];
      }
         giftB += `${giftB.length >> (Math.min(giftB.length, 3))}`;
      indicatorh = `${giftB.length}`;

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
   do {
      imagemanagerI = minivodg <= 58.0;
      if (imagemanagerI ? !imagemanagerI : imagemanagerI) {
         break;
      }
   } while ((imagemanagerI ? !imagemanagerI : imagemanagerI) && (2 > indicatorh.length));
   for (let x = 0; x < 2; x++) {
       let chinaS = [20, 322];
       let minimizeO = String.fromCharCode(117,95,49,54,95,98,117,99,107,101,116,97,108,108,111,99,0);
       let dacccfaabfbcbadeebddcabacdffdb5 = 2;
       let logol = [String.fromCharCode(100,95,52,57,95,112,97,116,104,0), String.fromCharCode(107,95,52,52,0), String.fromCharCode(122,95,52,50,95,100,101,97,108,108,111,99,97,116,101,0)];
          let footballfield4 = new Map([[String.fromCharCode(114,95,50,57,95,116,101,114,109,105,110,97,116,101,0),String.fromCharCode(102,105,110,100,110,101,116,95,112,95,54,52,0)], [String.fromCharCode(114,101,99,111,110,115,116,114,117,99,116,105,111,110,95,51,95,56,50,0),String.fromCharCode(119,95,51,56,95,115,117,110,115,101,116,0)]]);
         dacccfaabfbcbadeebddcabacdffdb5 += logol.length << (Math.min(Math.abs(1), 2));
         footballfield4[`${footballfield4.size}`] = footballfield4.size;
      for (let s = 0; s < 1; s++) {
         dacccfaabfbcbadeebddcabacdffdb5 %= Math.max(minimizeO.length, 2);
      }
       let libfollyz = false;
      for (let h = 0; h < 1; h++) {
         dacccfaabfbcbadeebddcabacdffdb5 *= 2 * dacccfaabfbcbadeebddcabacdffdb5;
      }
      if (4 > minimizeO.length && libfollyz) {
         libfollyz = minimizeO.length >= 20;
      }
       let guideo = String.fromCharCode(115,95,54,55,95,116,101,120,116,109,111,118,115,117,98,0);
      if ((4 - minimizeO.length) == 1 || (4 - minimizeO.length) == 1) {
         minimizeO = "3";
      }
      while ((logol.length & guideo.length) == 1) {
         logol = [1];
         break;
      }
         libfollyz = 1 == logol.length;
          let blackG = false;
          let iconrefreshG = true;
         minimizeO = "3";
         blackG = !blackG;
         iconrefreshG = !blackG;
         dacccfaabfbcbadeebddcabacdffdb5 ^= logol.length;
         minimizeO += `${minimizeO.length + 2}`;
      minivodg /= Math.max(dacccfaabfbcbadeebddcabacdffdb5 % (Math.max(minimizeO.length, 4)), 5);
      chinaS = [chinaS.length];
   }
   for (let a = 0; a < 1; a++) {
       let castingq = [775, 891];
       let libruntimeexecutorQ = 2;
       let iconplayL = false;
       let sinaX = String.fromCharCode(105,95,57,95,109,109,120,101,120,116,0);
      for (let v = 0; v < 1; v++) {
          let sansi = false;
         libruntimeexecutorQ /= Math.max(2, castingq.length << (Math.min(Math.abs(1), 3)));
         sansi = !sansi;
      }
      while (libruntimeexecutorQ < sinaX.length) {
         libruntimeexecutorQ |= libruntimeexecutorQ;
         break;
      }
          let yellowredcardA = true;
          let turnP = [324, 11, 247];
          let whitetickE = String.fromCharCode(117,117,105,100,95,99,95,54,53,0);
         castingq.push(sinaX.length * whitetickE.length);
         yellowredcardA = (92 > (turnP.length - (yellowredcardA ? turnP.length : 92)));
         whitetickE = "1";
       let profileY = String.fromCharCode(115,104,117,116,116,101,114,95,103,95,50,57,0);
      do {
         libruntimeexecutorQ += 1 >> (Math.min(4, castingq.length));
         if (3011484 == libruntimeexecutorQ) {
            break;
         }
      } while ((3011484 == libruntimeexecutorQ) && (2 == libruntimeexecutorQ));
         iconplayL = !iconplayL;
      do {
          let become2 = [523, 771, 163];
          let phoneA = 3.0;
         sinaX = `${parseInt(`${phoneA}`)}`;
         become2.push(3);
         phoneA += parseFloat(`${become2.length}`);
         if (sinaX == String.fromCharCode(98,100,95,52,105,0)) {
            break;
         }
      } while ((sinaX == String.fromCharCode(98,100,95,52,105,0)) && (sinaX.length > 1 && !iconplayL));
      for (let e = 0; e < 1; e++) {
          let yellowvideoliveS = true;
          let animations1 = 5.0;
          let pushY = String.fromCharCode(108,105,98,115,104,105,110,101,95,104,95,54,52,0);
          let lessC = 0.0;
          let iconplay7 = [719, 465];
         libruntimeexecutorQ &= 2 & parseInt(`${animations1}`);
         yellowvideoliveS = (lessC / (Math.max(parseFloat(`${pushY.length}`), 8))) > 33.78;
         animations1 /= Math.max(2, parseFloat(`${pushY.length}`));
         lessC += parseFloat(`${3 & iconplay7.length}`);
         iconplay7 = [parseInt(`${lessC}`) ^ 3];
      }
         sinaX = `${libruntimeexecutorQ}`;
      if (sinaX.length == 3 || !iconplayL) {
         sinaX += `${libruntimeexecutorQ}`;
      }
         libruntimeexecutorQ /= Math.max(3, 2);
         sinaX += `${(String.fromCharCode(97,0) == profileY ? profileY.length : castingq.length)}`;
      dplusl = `${dplusl.length >> (Math.min(Math.abs(1), 1))}`;
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
        source={require('../images/icons/leagueLogouser.png')}
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
