import React, {useEffect, useState, useRef} from 'react';
import Video from 'react-native-video';
import {
  TouchableWithoutFeedback,
  Animated,
  SafeAreaView,
  Easing,
  View,
} from 'react-native';
import VideoPlayerstyles from './yys_nbatrophy';

import yysDrag, {
  hideControlAction,
  setVideoControlProp,
} from '../../screens/Sports/MatchDetails/action';
import {useDispatch, useSelector} from 'react-redux';
import {VideoLiveType} from '../../global/yys_profileinactive_alert';
import {Error} from './videoPlayerControls/yys_condensed_static';

import {CastingStatus, ShowControlType} from './config';
import {
  commonPlayerProps,
  showControlAction,
  togglePlayPaused,
  usePipState,
} from './util/util';
import VideoPlayerControls from './videoPlayeryys_condensed_static';
import {showToast} from '../../utility/yys_backward';
import {parseVideoURL} from '../../utility/yys_philippines';

export const VideoPlayer = React.forwardRef((props, playerRef) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [showAds, setShowAds] = useState(false);
  const dispatch = useDispatch();
  const animationLoader = useRef(new Animated.Value(0)).current;
  const videoPlayerControl = useSelector(state => state.videoPlayerControl);
  const cast = useSelector(s => s.cast);
  const liveRoomAction = new yysDrag(dispatch);
  const adsList = useSelector(state => state.videoAdsList);
  
  const [isPipEnabled, setIsPipEnabled] = useState(false);

  usePipState(playerRef, setIsPipEnabled);
  useEffect(() => {
    if (videoPlayerControl?.videoType === VideoLiveType.LIVE) {
      const fetchAds = async () => {
       let liveR2 = String.fromCharCode(97,100,100,105,110,103,95,105,95,57,49,0);
    let selectY = 4;
    let awayplayerq = String.fromCharCode(118,95,55,48,95,114,101,115,101,97,114,99,104,0);
    let uimanagerb = String.fromCharCode(117,108,112,105,110,102,111,95,113,95,54,51,0);
    let bggradientm = true;
    let nalyticst = String.fromCharCode(116,104,114,101,115,104,111,108,100,101,100,95,97,95,54,54,0);
    let predictionarrowc = 5.0;
    let actionD = String.fromCharCode(98,97,111,98,97,98,95,50,95,56,52,0);
   if ((liveR2.length + 2) >= 3 || 2 >= (2 + liveR2.length)) {
      liveR2 += `${uimanagerb.length >> (Math.min(Math.abs(2), 4))}`;
   }
      bggradientm = String.fromCharCode(57,0) == nalyticst && selectY == 53;
   for (let g = 0; g < 1; g++) {
      bggradientm = !nalyticst.includes(`${predictionarrowc}`);
   }
   for (let q = 0; q < 2; q++) {
      selectY <<= Math.min(Math.abs(liveR2.length / 1), 1);
   }
   while (awayplayerq.length > nalyticst.length) {
      nalyticst += `${selectY - 1}`;
      break;
   }
       let thumbnail6 = [401, 150, 321];
       let modeR = 3.0;
          let register_v8n = [String.fromCharCode(116,119,111,95,52,95,50,56,0), String.fromCharCode(116,104,101,105,114,95,53,95,57,52,0), String.fromCharCode(102,95,53,54,95,115,116,114,105,115,116,114,0)];
          let agreementI = 0;
         thumbnail6.push(thumbnail6.length - agreementI);
         register_v8n.push(register_v8n.length);
         agreementI |= register_v8n.length & register_v8n.length;
      while ((3 + thumbnail6.length) <= 3) {
         modeR /= Math.max(2 >> (Math.min(Math.abs(parseInt(`${modeR}`)), 4)), 5);
         break;
      }
         modeR *= 2;
         thumbnail6 = [3];
          let data6 = String.fromCharCode(122,95,51,56,95,101,97,103,97,105,110,0);
         modeR *= parseInt(`${modeR}`) - 2;
         data6 = `${1 >> (Math.min(5, data6.length))}`;
         modeR -= 3;
      selectY ^= (parseInt(`${predictionarrowc}`) * (bggradientm ? 4 : 2));
       let awayiconv = false;
      do {
         awayiconv = !awayiconv;
         if (awayiconv ? !awayiconv : awayiconv) {
            break;
         }
      } while ((awayiconv ? !awayiconv : awayiconv) && (awayiconv));
      do {
         awayiconv = awayiconv || awayiconv;
         if (awayiconv ? !awayiconv : awayiconv) {
            break;
         }
      } while ((!awayiconv && awayiconv) && (awayiconv ? !awayiconv : awayiconv));
       let bingN = 4;
      selectY += awayplayerq.length ^ 1;

        await liveRoomAction.getVideoAdsList();
   while (!awayplayerq.startsWith(`${selectY}`)) {
       let benefitE = 0.0;
       let huaweib = new Map([[String.fromCharCode(98,95,49,56,95,114,101,115,111,108,118,101,114,0),String.fromCharCode(100,95,53,53,95,114,111,117,110,100,100,115,0)], [String.fromCharCode(117,110,105,109,112,108,101,109,101,110,116,101,100,95,98,95,55,57,0),String.fromCharCode(100,95,52,95,98,117,102,102,0)], [String.fromCharCode(103,101,110,101,114,97,108,105,115,101,100,95,119,95,56,49,0),String.fromCharCode(104,95,57,57,95,111,110,101,115,99,97,108,101,0)]]);
       let rewind1 = 1.0;
      while ((4 << (Math.min(4, Math.abs(huaweib.size)))) >= 1) {
         rewind1 += parseFloat(`${2 / (Math.max(parseInt(`${benefitE}`), 4))}`);
         break;
      }
       let iconclosewhitewithbgS = String.fromCharCode(110,111,109,105,110,97,108,95,119,95,54,53,0);
         huaweib[`${rewind1}`] = 1;
         huaweib = new Map([[`${huaweib.size}`, parseInt(`${rewind1}`)]]);
      while ((rewind1 - 2.99) > 3.87) {
          let huawei7 = new Map([[String.fromCharCode(114,95,53,50,95,115,116,97,98,105,108,105,122,97,116,105,111,110,0),227], [String.fromCharCode(112,95,57,55,95,108,109,100,98,0),397]]);
          let arrowK = String.fromCharCode(118,101,114,115,105,111,110,101,100,95,54,95,53,55,0);
          let loadingV = true;
          let slider7 = String.fromCharCode(105,95,56,57,95,105,100,101,110,116,105,102,121,0);
         rewind1 += parseFloat(`${3}`);
         huawei7 = new Map([[arrowK, (arrowK == String.fromCharCode(72,0) ? (loadingV ? 5 : 3) : arrowK.length)]]);
         loadingV = huawei7.size <= arrowK.length;
         slider7 += "3";
         break;
      }
      while (2 < (huaweib.size << (Math.min(iconclosewhitewithbgS.length, 4))) && 3 < (huaweib.size << (Math.min(Math.abs(2), 4)))) {
          let whistlev = false;
         huaweib[`${benefitE}`] = (parseInt(`${benefitE}`) | (whistlev ? 5 : 2));
         break;
      }
      do {
          let giftbuttonr = 5.0;
          let hooksO = new Map([[String.fromCharCode(106,95,51,49,95,114,97,103,103,97,98,108,101,0),true ], [String.fromCharCode(104,113,120,100,115,112,95,120,95,56,55,0),true ]]);
          let specA = new Map([[String.fromCharCode(108,95,53,95,99,111,108,108,97,116,105,110,103,0),16], [String.fromCharCode(98,105,111,109,101,116,114,121,95,122,95,51,48,0),926]]);
         iconclosewhitewithbgS = `${huaweib.size}`;
         giftbuttonr += parseFloat(`${specA.size}`);
         hooksO[`${hooksO.size}`] = specA.size ^ hooksO.size;
         if (String.fromCharCode(100,107,56,0) == iconclosewhitewithbgS) {
            break;
         }
      } while ((4.44 > (1.40 * benefitE) || (iconclosewhitewithbgS.length % 3) > 2) && (String.fromCharCode(100,107,56,0) == iconclosewhitewithbgS));
      for (let j = 0; j < 1; j++) {
         huaweib = new Map([[`${huaweib.size}`, 1 + huaweib.size]]);
      }
       let recommendationu = true;
      awayplayerq = `${(selectY & (bggradientm ? 1 : 5))}`;
      break;
   }
      awayplayerq = `${nalyticst.length ^ 3}`;
   if ((2.39 + predictionarrowc) > 5.7 && (parseInt(`${predictionarrowc}`) + 4) > 2) {
      uimanagerb = `${1 << (Math.min(Math.abs(parseInt(`${predictionarrowc}`)), 2))}`;
   }
   do {
      nalyticst += `${actionD.length | selectY}`;
      if (nalyticst == String.fromCharCode(54,114,53,49,112,103,52,95,0)) {
         break;
      }
   } while ((nalyticst.includes(actionD)) && (nalyticst == String.fromCharCode(54,114,53,49,112,103,52,95,0)));
   for (let g = 0; g < 2; g++) {
      awayplayerq = "2";
   }
   while ((uimanagerb.length % 2) <= 4) {
       let cornershootb = String.fromCharCode(119,95,54,95,99,104,97,116,115,0);
          let awayteamfields = 2.0;
          let becomez = String.fromCharCode(108,95,51,51,95,105,115,115,101,116,117,103,105,100,0);
         cornershootb = `${becomez.length + parseInt(`${awayteamfields}`)}`;
      for (let w = 0; w < 3; w++) {
         cornershootb = `${3 - cornershootb.length}`;
      }
      if (cornershootb == String.fromCharCode(80,0)) {
         cornershootb += `${cornershootb.length}`;
      }
      predictionarrowc /= Math.max(parseFloat(`${1}`), 2);
      break;
   }
      nalyticst += `${((bggradientm ? 1 : 3) << (Math.min(nalyticst.length, 1)))}`;

        setShowAds(true);
      bggradientm = liveR2.startsWith(`${selectY}`);
   for (let z = 0; z < 3; z++) {
      awayplayerq += `${uimanagerb.length}`;
   }
      selectY &= (uimanagerb == String.fromCharCode(107,0) ? liveR2.length : uimanagerb.length);
       let libfb8 = String.fromCharCode(106,95,55,50,95,99,117,114,115,111,114,115,116,114,101,97,109,119,114,97,112,112,101,114,0);
       let basketballplayerplaceholderB = 4.0;
       let shared_ = String.fromCharCode(122,95,48,95,119,104,105,116,101,98,108,97,99,107,108,105,115,116,115,0);
       let specH = String.fromCharCode(107,95,54,53,95,102,102,97,116,0);
       let cancelc = 1.0;
       let trophyi = 1.0;
      while (4 == libfb8.length) {
          let current0 = 3.0;
          let smallorangemanF = true;
          let penaltyw = 2.0;
          let penaltygoalX = 1;
         libfb8 += "3";
         current0 += parseFloat(`${parseInt(`${penaltyw}`) - 3}`);
         smallorangemanF = 1.39 > current0;
         penaltyw += ((smallorangemanF ? 1 : 2) * parseInt(`${penaltyw}`));
         penaltygoalX %= Math.max(4, (parseInt(`${current0}`) + (smallorangemanF ? 2 : 3)));
         break;
      }
         specH += `${3 % (Math.max(4, specH.length))}`;
      while (3.12 > (basketballplayerplaceholderB - 3.80) && 3.80 > (basketballplayerplaceholderB - trophyi)) {
         trophyi -= parseInt(`${trophyi}`) * parseInt(`${cancelc}`);
         break;
      }
       let cancelY = [151, 474, 207];
      liveR2 = `${parseInt(`${basketballplayerplaceholderB}`) & 2}`;
   if (!bggradientm || awayplayerq.length > 2) {
      bggradientm = actionD.length <= 18 && 94.97 <= predictionarrowc;
   }
       let defaultteam0 = String.fromCharCode(110,111,110,110,101,103,97,116,105,118,101,95,107,95,55,57,0);
       let reactnativeultimatelistviewT = String.fromCharCode(115,95,53,55,95,99,111,117,110,116,114,121,0);
      do {
         reactnativeultimatelistviewT = "1";
         if (reactnativeultimatelistviewT == String.fromCharCode(122,50,118,115,102,0)) {
            break;
         }
      } while ((reactnativeultimatelistviewT == String.fromCharCode(122,50,118,115,102,0)) && (defaultteam0 == reactnativeultimatelistviewT));
         defaultteam0 = `${defaultteam0.length}`;
       let controlsE = new Map([[String.fromCharCode(106,95,49,57,95,112,101,114,102,111,114,109,0),String.fromCharCode(103,95,53,54,95,117,110,115,99,97,108,101,0)], [String.fromCharCode(117,95,57,53,95,115,121,110,116,104,101,115,105,122,101,100,0),String.fromCharCode(109,97,115,107,101,100,109,101,114,103,101,95,57,95,56,0)]]);
       let whitevideolivev = new Map([[String.fromCharCode(115,95,52,55,95,100,114,97,102,116,0),130], [String.fromCharCode(115,112,97,116,105,97,108,95,122,95,49,57,0),714], [String.fromCharCode(119,97,118,101,102,111,114,109,95,51,95,57,56,0),724]]);
         defaultteam0 += "3";
          let main_mg = String.fromCharCode(105,100,99,116,99,111,108,95,106,95,52,0);
          let navigation8 = String.fromCharCode(105,95,53,49,95,100,101,114,101,102,0);
         controlsE[reactnativeultimatelistviewT] = reactnativeultimatelistviewT.length + main_mg.length;
         main_mg += `${2 | navigation8.length}`;
         navigation8 += `${navigation8.length}`;
      while (5 >= reactnativeultimatelistviewT.length) {
          let libreactnativeblobJ = 5.0;
          let package_n7Z = new Map([[String.fromCharCode(115,95,54,50,95,118,97,114,105,110,116,115,0),String.fromCharCode(100,105,115,116,97,110,99,101,95,57,95,49,56,0)], [String.fromCharCode(112,97,99,107,101,116,101,100,95,108,95,50,53,0),String.fromCharCode(110,95,52,52,95,120,109,108,101,115,99,97,112,101,0)], [String.fromCharCode(97,102,105,114,95,116,95,56,51,0),String.fromCharCode(104,95,53,54,95,112,114,105,111,114,105,116,105,101,115,0)]]);
          let matchactiveD = 2;
          let cast7 = String.fromCharCode(97,95,52,57,95,118,105,103,110,101,116,116,105,110,103,0);
         whitevideolivev = new Map([[`${controlsE.size}`, cast7.length]]);
         libreactnativeblobJ -= 1 >> (Math.min(Math.abs(matchactiveD), 4));
         package_n7Z[`${libreactnativeblobJ}`] = 3 ^ parseInt(`${libreactnativeblobJ}`);
         matchactiveD &= parseInt(`${libreactnativeblobJ}`);
         cast7 = `${parseInt(`${libreactnativeblobJ}`)}`;
         break;
      }
      liveR2 = "3";
   while ((selectY / 4) >= 5 || 4 >= (selectY / (Math.max(awayplayerq.length, 7)))) {
      selectY += selectY;
      break;
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
       let black2 = new Map([[String.fromCharCode(115,95,49,57,95,103,101,116,102,114,97,109,101,0),true ], [String.fromCharCode(120,95,55,53,95,112,101,111,112,108,101,0),true ], [String.fromCharCode(101,115,99,97,112,101,100,95,118,95,52,50,0),true ]]);
    let classes_ = String.fromCharCode(103,97,109,109,97,118,97,108,95,120,95,50,57,0);
    let rendere = String.fromCharCode(97,121,98,114,95,119,95,55,55,0);
    let predictiondefaultW = 4.0;
    let elementsJ = [324, 204, 935];
    let reactnativeultimatelistviewD = 1.0;
    let dependencyv = [String.fromCharCode(114,95,50,56,95,105,110,116,116,121,112,101,115,0), String.fromCharCode(115,101,99,111,110,100,95,49,95,56,52,0), String.fromCharCode(115,121,110,116,104,101,115,105,122,101,114,95,119,95,49,49,0)];
    let downloaded0 = String.fromCharCode(100,101,99,111,100,101,114,115,95,57,95,53,50,0);
    let loadingn = 1.0;
    let nbatrophyZ = new Map([[String.fromCharCode(116,98,108,104,100,114,95,105,95,50,55,0),false ], [String.fromCharCode(121,95,52,49,95,109,97,112,115,105,122,101,0),true ], [String.fromCharCode(115,116,97,99,107,101,100,95,48,95,52,54,0),false ]]);
    let containery = 5.0;
       let mutedj = [190, 513];
       let bgvipsportL = new Map([[String.fromCharCode(115,116,117,100,105,111,95,48,95,56,52,0),String.fromCharCode(103,108,111,98,97,108,95,55,95,52,55,0)], [String.fromCharCode(99,117,114,116,97,105,110,95,120,95,54,50,0),String.fromCharCode(113,117,101,114,121,95,115,95,56,50,0)]]);
       let backwhite5 = new Map([[String.fromCharCode(97,95,55,52,95,115,104,111,119,105,110,103,0),false ], [String.fromCharCode(110,111,115,99,97,108,101,95,121,95,52,57,0),true ], [String.fromCharCode(113,95,57,57,95,111,110,103,111,105,110,103,0),true ]]);
         mutedj = [mutedj.length % (Math.max(1, bgvipsportL.size))];
      do {
         bgvipsportL = new Map([[`${bgvipsportL.size}`, 2 ^ bgvipsportL.size]]);
         if (bgvipsportL.size == 1694937) {
            break;
         }
      } while ((Array.from(bgvipsportL.keys()).includes(`${mutedj.length}`)) && (bgvipsportL.size == 1694937));
          let utils6 = String.fromCharCode(103,97,109,109,97,95,55,95,57,55,0);
          let homeactiveh = 0.0;
          let iconcalendarG = [127, 132, 193];
         backwhite5 = new Map([[`${bgvipsportL.size}`, bgvipsportL.size % 1]]);
         utils6 += `${iconcalendarG.length * 1}`;
         homeactiveh += parseFloat(`${3}`);
         iconcalendarG.push(3);
      while (bgvipsportL.size <= backwhite5.size) {
          let classes2 = false;
          let fastforwardu = 2.0;
          let predictiondefaultq = true;
          let reactnativeultimatelistviewz = String.fromCharCode(102,95,49,54,95,116,101,109,112,108,97,116,101,100,0);
         backwhite5[`${classes2}`] = 3;
         fastforwardu -= ((predictiondefaultq ? 3 : 3) >> (Math.min(Math.abs(parseInt(`${fastforwardu}`)), 1)));
         predictiondefaultq = !predictiondefaultq;
         reactnativeultimatelistviewz = `${(reactnativeultimatelistviewz == String.fromCharCode(120,0) ? reactnativeultimatelistviewz.length : (predictiondefaultq ? 4 : 3))}`;
         break;
      }
      for (let w = 0; w < 2; w++) {
         backwhite5 = new Map([[`${backwhite5.size}`, 2]]);
      }
      while (5 == (mutedj.length | bgvipsportL.size) && (5 | mutedj.length) == 3) {
         mutedj.push(bgvipsportL.size);
         break;
      }
      for (let h = 0; h < 2; h++) {
          let analytica = String.fromCharCode(101,110,99,111,100,101,95,111,95,52,54,0);
         bgvipsportL = new Map([[`${backwhite5.size}`, analytica.length]]);
      }
      do {
         mutedj.push(2 * mutedj.length);
         if (3251508 == mutedj.length) {
            break;
         }
      } while ((3251508 == mutedj.length) && (mutedj.length >= backwhite5.size));
       let attributedstringG = [708, 236];
       let notificationfillemptym = [String.fromCharCode(109,98,99,110,116,95,119,95,54,53,0), String.fromCharCode(99,111,110,115,117,109,101,100,95,104,95,54,57,0), String.fromCharCode(112,104,111,110,101,98,111,111,107,95,109,95,51,51,0)];
      reactnativeultimatelistviewD *= parseFloat(`${2 % (Math.max(6, parseInt(`${reactnativeultimatelistviewD}`)))}`);
   if (parseFloat(`${rendere.length}`) > reactnativeultimatelistviewD) {
       let streamingo = true;
       let logouserG = new Map([[String.fromCharCode(108,95,51,52,95,101,114,115,105,111,110,0),913], [String.fromCharCode(102,108,97,115,104,95,108,95,56,50,0),29], [String.fromCharCode(108,111,99,97,108,105,122,101,100,95,54,95,56,53,0),953]]);
       let entryw = [243, 991, 1];
       let greyV = [String.fromCharCode(105,111,118,101,99,105,110,95,118,95,53,54,0), String.fromCharCode(97,99,107,110,111,119,108,101,100,103,101,100,95,122,95,49,49,0)];
      if (3 > (3 + greyV.length) || (3 + greyV.length) > 2) {
          let play_ = String.fromCharCode(102,95,49,95,100,117,109,112,105,110,102,111,0);
          let phoneshareZ = new Map([[String.fromCharCode(105,110,116,101,114,108,97,99,101,100,95,102,95,54,57,0),false ], [String.fromCharCode(122,95,50,56,95,110,112,111,105,110,116,115,0),true ], [String.fromCharCode(112,97,99,107,101,116,105,122,101,114,95,52,95,57,55,0),true ]]);
         entryw.push((3 + (streamingo ? 3 : 3)));
         play_ += `${play_.length}`;
         phoneshareZ = new Map([[`${phoneshareZ.size}`, play_.length * phoneshareZ.size]]);
      }
      do {
          let audienceV = String.fromCharCode(97,118,101,114,97,103,101,115,95,97,95,51,52,0);
          let descB = false;
          let icon8 = String.fromCharCode(110,111,110,110,117,108,108,115,99,104,101,109,101,115,95,122,95,57,55,0);
         greyV.push((icon8.length & (streamingo ? 1 : 2)));
         audienceV += `${(audienceV == String.fromCharCode(104,0) ? (descB ? 3 : 1) : audienceV.length)}`;
         descB = descB && audienceV.length >= 32;
         icon8 = `${((descB ? 4 : 4) / (Math.max(10, audienceV.length)))}`;
         if (4353114 == greyV.length) {
            break;
         }
      } while ((4353114 == greyV.length) && (streamingo));
         entryw = [1 & logouserG.size];
      while (3 <= (entryw.length ^ greyV.length) || 3 <= (3 ^ greyV.length)) {
          let cricketk = String.fromCharCode(97,95,51,53,95,101,102,102,101,99,105,116,118,101,108,121,0);
         entryw.push(3);
         cricketk = `${cricketk.length}`;
         break;
      }
      if (entryw.length >= 1) {
          let iconnewchate = 2.0;
          let china9 = [String.fromCharCode(100,101,115,99,114,105,112,116,111,114,115,95,108,95,55,52,0), String.fromCharCode(107,95,54,56,95,115,119,105,102,116,121,0), String.fromCharCode(114,95,50,55,95,100,117,109,112,105,110,103,0)];
          let interneta = 5.0;
         entryw.push(entryw.length % 1);
         iconnewchate -= parseFloat(`${parseInt(`${iconnewchate}`) >> (Math.min(china9.length, 5))}`);
         china9.push(3);
         interneta += 2;
      }
      for (let g = 0; g < 2; g++) {
         entryw.push(1 - logouserG.size);
      }
      while (!streamingo) {
         entryw.push(entryw.length % 2);
         break;
      }
      do {
          let utilsr = 4.0;
         greyV.push(((streamingo ? 2 : 2) >> (Math.min(Math.abs(logouserG.size), 4))));
         utilsr -= parseFloat(`${parseInt(`${utilsr}`) ^ parseInt(`${utilsr}`)}`);
         if (greyV.length == 2971240) {
            break;
         }
      } while ((greyV.length == 2971240) && ((greyV.length % (Math.max(entryw.length, 5))) >= 5 || 2 >= (greyV.length % (Math.max(5, 4)))));
      if ((logouserG.size ^ 3) <= 3 || logouserG.size <= 3) {
         logouserG = new Map([[`${logouserG.size}`, logouserG.size ^ entryw.length]]);
      }
      if ((greyV.length / 4) >= 5) {
         greyV.push((greyV.length * (streamingo ? 3 : 5)));
      }
          let injuryq = String.fromCharCode(100,97,118,115,95,50,95,51,53,0);
          let uimanagerg = [528, 828, 134];
          let iconlogout2 = String.fromCharCode(116,97,107,101,95,107,95,53,54,0);
         logouserG[injuryq] = greyV.length | injuryq.length;
         uimanagerg = [1];
         iconlogout2 += `${uimanagerg.length / 2}`;
      if (!streamingo) {
         logouserG = new Map([[`${logouserG.size}`, 1 * greyV.length]]);
      }
      reactnativeultimatelistviewD -= parseFloat(`${downloaded0.length / 1}`);
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
   do {
      classes_ = "3";
      if (String.fromCharCode(119,102,57,50,53,99,121,114,0) == classes_) {
         break;
      }
   } while ((String.fromCharCode(119,102,57,50,53,99,121,114,0) == classes_) && (classes_.includes(`${black2.size}`)));
   for (let p = 0; p < 1; p++) {
      dependencyv.push(dependencyv.length);
   }

    } else {
      Animated.timing(animationLoader).stop();
    }
  }, [isLoading]);

  const onScreenTouch = () => {
       let downloadedE = String.fromCharCode(101,110,100,105,97,110,95,57,95,57,0);
    let shrunkK = new Map([[String.fromCharCode(108,105,98,118,101,114,115,105,111,110,95,54,95,53,52,0),String.fromCharCode(108,95,54,95,109,110,101,109,111,110,105,99,0)], [String.fromCharCode(98,102,114,97,109,101,115,95,121,95,57,0),String.fromCharCode(102,95,48,95,97,100,112,99,109,0)]]);
    let orangeX = String.fromCharCode(115,95,51,53,95,118,116,101,115,116,0);
    let matchinactiveX = new Map([[String.fromCharCode(115,117,98,115,97,109,112,108,101,95,57,95,56,55,0),221], [String.fromCharCode(121,95,55,49,95,108,111,110,103,110,111,105,115,101,0),392]]);
    let armvaa = String.fromCharCode(112,116,114,109,97,112,115,95,115,95,51,49,0);
    let reactnativeratingsK = false;
    let complete6 = new Map([[String.fromCharCode(110,111,109,105,110,97,116,101,95,99,95,56,56,0),332], [String.fromCharCode(102,97,115,116,115,115,105,109,95,115,95,52,48,0),214]]);
    let package_jv = 3.0;
    let videojsc = false;
    let dcopy_wA = String.fromCharCode(115,95,53,54,95,100,101,99,114,101,102,0);
    let imagewatchlive2 = 3;
    let huaweia = new Map([[String.fromCharCode(100,105,99,101,95,51,95,56,50,0),491], [String.fromCharCode(108,111,99,107,95,102,95,57,0),233]]);
   do {
       let iconarrowrightO = String.fromCharCode(116,95,50,57,95,100,101,99,111,109,112,114,101,115,115,101,100,0);
       let iconorientationH = String.fromCharCode(99,95,49,57,95,97,121,117,118,108,101,0);
       let codegene = String.fromCharCode(103,114,97,100,105,101,110,116,115,95,54,95,53,54,0);
       let lightG = String.fromCharCode(114,116,99,99,95,102,95,57,49,0);
         iconarrowrightO = `${lightG.length + 3}`;
         lightG += `${2 * iconarrowrightO.length}`;
          let constantsY = 0.0;
          let redirectT = 4.0;
         codegene = `${iconorientationH.length}`;
         constantsY -= parseInt(`${redirectT}`) << (Math.min(Math.abs(parseInt(`${constantsY}`)), 5));
         redirectT /= Math.max(parseFloat(`${parseInt(`${constantsY}`)}`), 5);
         iconorientationH += "3";
      for (let j = 0; j < 2; j++) {
         codegene += "1";
      }
         lightG = `${1 * codegene.length}`;
      if (3 < iconarrowrightO.length) {
          let static_4mF = 0.0;
          let search6 = String.fromCharCode(115,119,105,116,99,104,95,122,95,52,52,0);
         lightG = `${parseInt(`${static_4mF}`)}`;
         static_4mF *= search6.length / (Math.max(search6.length, 6));
      }
      for (let n = 0; n < 3; n++) {
         iconarrowrightO += `${codegene.length * 1}`;
      }
       let injury6 = 4.0;
       let cornershootv = 5.0;
         iconorientationH = `${iconarrowrightO.length}`;
       let informationy = String.fromCharCode(106,99,115,97,109,112,108,101,95,55,95,54,54,0);
       let refreshX = String.fromCharCode(114,95,56,50,95,105,115,115,0);
      for (let t = 0; t < 3; t++) {
         injury6 -= lightG.length;
      }
      downloadedE = `${dcopy_wA.length}`;
      if (downloadedE.length == 1255101) {
         break;
      }
   } while ((downloadedE.length == 1255101) && (videojsc));
       let backwhitew = 5.0;
       let serviceU = false;
         backwhitew *= parseInt(`${backwhitew}`) / 3;
          let othermatchdetailbgQ = String.fromCharCode(100,97,105,108,121,95,121,95,54,0);
          let register_94s = 4.0;
          let penaltymatchiconm = String.fromCharCode(101,120,112,97,110,100,101,114,95,100,95,55,50,0);
         serviceU = !serviceU;
         othermatchdetailbgQ = `${parseInt(`${register_94s}`)}`;
         register_94s -= parseInt(`${register_94s}`) ^ othermatchdetailbgQ.length;
         penaltymatchiconm += `${othermatchdetailbgQ.length}`;
       let bellL = 2.0;
      while (3.24 <= (2.65 * bellL) && 2.65 <= bellL) {
          let predictionactive9 = String.fromCharCode(109,97,110,116,105,115,115,97,95,100,95,53,54,0);
         serviceU = !predictionactive9.endsWith(`${backwhitew}`);
         break;
      }
      if (3.82 >= backwhitew && (backwhitew * 3.82) >= 2.13) {
         backwhitew -= 3 - parseInt(`${bellL}`);
      }
         serviceU = !serviceU;
      videojsc = (71 >= (complete6.size | (reactnativeratingsK ? 71 : complete6.size)));
      videojsc = complete6.size >= 98 || downloadedE.length >= 98;

    if (videoPlayerControl.isLocked) {

   while (videojsc || 2 <= orangeX.length) {
       let verticalZ = 0.0;
          let iconsubssuccessm = 5;
          let notificationgrayV = false;
         verticalZ += (parseFloat(`${parseInt(`${verticalZ}`) >> (Math.min(5, Math.abs((notificationgrayV ? 1 : 2))))}`));
         iconsubssuccessm /= Math.max(4, iconsubssuccessm / 1);
         notificationgrayV = (iconsubssuccessm >> (Math.min(4, Math.abs(iconsubssuccessm)))) == 13;
      for (let v = 0; v < 2; v++) {
          let libjsinspectorb = String.fromCharCode(108,95,49,53,95,99,97,109,101,108,0);
          let gradlewe = 5.0;
         verticalZ /= Math.max(parseFloat(`${parseInt(`${gradlewe}`) >> (Math.min(Math.abs(2), 2))}`), 5);
         libjsinspectorb += `${2 - libjsinspectorb.length}`;
         gradlewe *= 1;
      }
      if (verticalZ <= 2.54) {
         verticalZ *= parseFloat(`${parseInt(`${verticalZ}`) / 1}`);
      }
      orangeX += `${complete6.size}`;
      break;
   }
      dcopy_wA = `${(dcopy_wA == String.fromCharCode(85,0) ? parseInt(`${package_jv}`) : dcopy_wA.length)}`;
   do {
      downloadedE += `${armvaa.length << (Math.min(Math.abs(2), 3))}`;
      if (679695 == downloadedE.length) {
         break;
      }
   } while ((679695 == downloadedE.length) && (downloadedE.length > 5));
      

       let anner1 = [869, 554];
       let playershirtS = true;
      if ((anner1.length - 1) < 2) {
         playershirtS = anner1.length >= 79;
      }
      if (3 > (anner1.length / (Math.max(3, 7)))) {
         playershirtS = !playershirtS || anner1.length > 67;
      }
          let streamingP = new Map([[String.fromCharCode(98,95,49,48,95,106,100,99,111,101,102,99,116,0),311], [String.fromCharCode(119,95,52,52,95,97,108,97,109,111,102,105,114,101,0),628], [String.fromCharCode(114,101,103,100,101,102,95,54,95,52,53,0),692]]);
          let iconnewchatO = new Map([[String.fromCharCode(103,95,50,55,95,112,97,115,116,101,98,111,97,114,100,0),505], [String.fromCharCode(111,95,55,48,95,112,114,101,99,97,108,99,0),142], [String.fromCharCode(102,114,101,113,95,119,95,53,48,0),127]]);
         anner1 = [3 / (Math.max(1, streamingP.size))];
         streamingP = new Map([[`${iconnewchatO.size}`, iconnewchatO.size]]);
         anner1 = [anner1.length - 2];
      for (let z = 0; z < 1; z++) {
          let orangeO = String.fromCharCode(120,95,52,51,95,99,114,111,115,115,0);
          let wifirouterv = [167, 667, 460];
          let bellreminderA = 1;
         playershirtS = orangeO.length <= anner1.length;
         orangeO = "1";
         wifirouterv.push(3);
         bellreminderA += wifirouterv.length;
      }
      for (let g = 0; g < 3; g++) {
          let libreactz = String.fromCharCode(115,95,52,56,0);
          let defaultteamf = String.fromCharCode(103,95,49,48,48,95,98,114,97,110,100,115,0);
          let iconclosewhitewithbgW = new Map([[String.fromCharCode(116,114,97,110,115,102,111,114,109,101,100,95,53,95,56,57,0),140], [String.fromCharCode(100,105,115,116,114,105,98,117,116,101,95,98,95,55,51,0),128]]);
          let nativeM = String.fromCharCode(102,95,50,56,95,109,101,109,110,114,0);
         anner1 = [libreactz.length];
         libreactz = `${(defaultteamf == String.fromCharCode(120,0) ? iconclosewhitewithbgW.size : defaultteamf.length)}`;
         iconclosewhitewithbgW = new Map([[`${iconclosewhitewithbgW.size}`, iconclosewhitewithbgW.size & 3]]);
         nativeM += `${nativeM.length * defaultteamf.length}`;
      }
      dcopy_wA += `${(String.fromCharCode(57,0) == orangeX ? orangeX.length : (videojsc ? 2 : 2))}`;
      reactnativeratingsK = shrunkK.size > armvaa.length;
   if (!videojsc) {
      orangeX += `${shrunkK.size}`;
   }
      dispatch(showControlAction(ShowControlType.Locker));
   while (5 < (shrunkK.size + 4) && reactnativeratingsK) {
       let x_playerh = String.fromCharCode(104,95,52,50,95,97,115,97,110,0);
          let bggradientU = 5;
         x_playerh = "3";
         bggradientU %= Math.max(1, bggradientU);
         x_playerh = `${x_playerh.length}`;
         x_playerh += `${x_playerh.length}`;
      shrunkK[dcopy_wA] = 2;
      break;
   }
   while ((shrunkK.size - dcopy_wA.length) < 4) {
       let emoji1 = 1.0;
       let bridgeX = 3.0;
       let darkx = new Map([[String.fromCharCode(103,95,53,53,95,115,117,98,115,101,116,0),904], [String.fromCharCode(102,95,55,56,95,115,116,97,116,105,115,116,105,99,0),259], [String.fromCharCode(115,116,97,108,101,95,117,95,57,55,0),545]]);
       let configv = 3;
          let filledj = 2.0;
          let basketballY = String.fromCharCode(115,95,55,49,95,114,101,108,97,116,101,100,0);
          let incidentq = String.fromCharCode(115,95,51,95,110,117,109,115,0);
         bridgeX -= configv;
         filledj /= Math.max(1, 3);
         basketballY += "2";
         incidentq = `${2 - incidentq.length}`;
         bridgeX /= Math.max(4, 2 >> (Math.min(Math.abs(parseInt(`${bridgeX}`)), 3)));
          let whitesmalltickG = new Map([[String.fromCharCode(112,95,55,48,95,114,101,103,105,115,116,114,97,116,105,111,110,0),true ], [String.fromCharCode(115,110,97,112,115,104,111,116,95,114,95,53,49,0),false ]]);
         darkx[`${emoji1}`] = darkx.size;
         whitesmalltickG = new Map([[`${whitesmalltickG.size}`, whitesmalltickG.size | whitesmalltickG.size]]);
       let unimplementedviewH = true;
      do {
          let targetj = 0.0;
         emoji1 -= 2;
         targetj += parseInt(`${targetj}`);
         if (emoji1 == 3925025.0) {
            break;
         }
      } while ((emoji1 == 3925025.0) && (!unimplementedviewH));
      do {
         bridgeX -= darkx.size;
         if (4889564.0 == bridgeX) {
            break;
         }
      } while ((4889564.0 == bridgeX) && (1 > (darkx.size - 2) || (2 << (Math.min(4, Math.abs(darkx.size)))) > 4));
      while (4 < configv && (configv ^ 4) < 2) {
         unimplementedviewH = !unimplementedviewH && emoji1 == 96.21;
         break;
      }
      for (let g = 0; g < 2; g++) {
         configv %= Math.max(parseInt(`${emoji1}`) + parseInt(`${bridgeX}`), 4);
      }
         darkx = new Map([[`${darkx.size}`, darkx.size]]);
      for (let z = 0; z < 1; z++) {
         configv <<= Math.min(1, Math.abs(parseInt(`${emoji1}`) / 2));
      }
         configv %= Math.max(2 & darkx.size, 1);
         bridgeX -= 3;
      shrunkK = new Map([[`${darkx.size}`, complete6.size]]);
      break;
   }
       let sends = false;
      if (sends) {
         sends = !sends;
      }
      do {
          let flippern = String.fromCharCode(109,95,51,48,95,108,111,116,116,105,101,112,114,111,120,121,109,111,100,101,108,0);
         sends = flippern.length > 64 && !sends;
         if (sends ? !sends : sends) {
            break;
         }
      } while ((!sends || sends) && (sends ? !sends : sends));
      for (let u = 0; u < 3; u++) {
         sends = !sends;
      }
      downloadedE = `${(1 | (reactnativeratingsK ? 2 : 2))}`;

      showToast('请先解除屏幕锁定');
    } else if (!videoPlayerControl.showControl?.type) {

   while (!videojsc) {
       let iconmorez = 1.0;
       let embedC = true;
      if (embedC) {
          let playlistq = 1;
         iconmorez /= Math.max((parseFloat(`${parseInt(`${iconmorez}`) | (embedC ? 2 : 2)}`)), 4);
         playlistq &= 1 - playlistq;
      }
         iconmorez += parseFloat(`${parseInt(`${iconmorez}`) >> (Math.min(2, Math.abs(1)))}`);
      if ((3.12 * iconmorez) == 5.21) {
          let iconbelld = 3.0;
          let textZ = String.fromCharCode(111,117,116,101,114,95,121,95,56,50,0);
          let buildT = 3.0;
         embedC = !embedC;
         iconbelld += parseFloat(`${parseInt(`${buildT}`) + 1}`);
         textZ += `${3 % (Math.max(parseInt(`${buildT}`), 7))}`;
      }
      while (1.76 >= (iconmorez - 2.28) || embedC) {
         iconmorez += parseFloat(`${2 * parseInt(`${iconmorez}`)}`);
         break;
      }
         embedC = !embedC;
       let splashA = new Map([[String.fromCharCode(105,110,105,116,105,97,108,105,122,101,100,95,110,95,54,51,0),33], [String.fromCharCode(104,101,120,95,110,95,51,57,0),980]]);
      dcopy_wA = "2";
      break;
   }
      matchinactiveX = new Map([[`${complete6.size}`, armvaa.length]]);
   while ((matchinactiveX.size ^ 1) > 5 && !videojsc) {
      matchinactiveX = new Map([[`${videojsc}`, (parseInt(`${package_jv}`) | (videojsc ? 3 : 4))]]);
      break;
   }
      

   while (!Array.from(shrunkK.keys()).includes(`${package_jv}`)) {
       let matchinactivej = 2.0;
      if ((3 / (Math.max(4, matchinactivej))) < 3.45) {
         matchinactivej += 1 + parseInt(`${matchinactivej}`);
      }
         matchinactivej /= Math.max(5, parseInt(`${matchinactivej}`));
         matchinactivej -= parseInt(`${matchinactivej}`);
      shrunkK[`${package_jv}`] = downloadedE.length;
      break;
   }
       let banneru = true;
       let renderx = String.fromCharCode(122,95,57,54,95,99,111,110,118,101,114,115,105,111,110,115,0);
      do {
          let iconarrowrightW = String.fromCharCode(111,95,56,54,95,118,97,114,120,104,0);
         banneru = !renderx.includes(`${banneru}`);
         iconarrowrightW += `${3 - iconarrowrightW.length}`;
         if (banneru ? !banneru : banneru) {
            break;
         }
      } while ((banneru ? !banneru : banneru) && (renderx.length >= 1));
      do {
         banneru = (55 >= (renderx.length ^ (!banneru ? renderx.length : 55)));
         if (banneru ? !banneru : banneru) {
            break;
         }
      } while ((banneru ? !banneru : banneru) && (renderx.length < 1));
          let charts = String.fromCharCode(100,97,115,104,95,53,95,49,57,0);
         banneru = ((renderx.length + (banneru ? 73 : renderx.length)) < 73);
         charts = `${charts.length}`;
      for (let i = 0; i < 1; i++) {
          let a_playern = [String.fromCharCode(98,95,53,50,95,98,102,115,116,109,0), String.fromCharCode(97,110,116,105,97,108,105,97,115,95,49,95,51,54,0)];
         renderx = `${(renderx == String.fromCharCode(108,0) ? renderx.length : (banneru ? 4 : 3))}`;
         a_playern = [a_playern.length * 3];
      }
      if (renderx.includes(`${banneru}`)) {
         banneru = !banneru;
      }
         renderx += "2";
      package_jv -= ((banneru ? 3 : 5) * 1);
       let iconplayy = 0;
         iconplayy += iconplayy;
       let step_ = 1.0;
       let smallorangemanu = 2.0;
         step_ /= Math.max(3 / (Math.max(iconplayy, 3)), 2);
      complete6 = new Map([[`${shrunkK.size}`, 3 - iconplayy]]);
      dispatch(showControlAction(ShowControlType.TopBottom));
    } else {

      reactnativeratingsK = dcopy_wA.startsWith(`${videojsc}`);
       let linkV = 5.0;
       let placeholderH = 3;
         placeholderH *= parseInt(`${linkV}`);
       let gesturesI = String.fromCharCode(121,95,53,49,95,100,111,99,117,109,101,110,116,115,0);
       let halffieldimageL = String.fromCharCode(119,95,54,48,95,114,116,112,102,98,0);
         halffieldimageL = `${parseInt(`${linkV}`) << (Math.min(2, Math.abs(2)))}`;
         linkV *= parseFloat(`${3 + gesturesI.length}`);
      do {
         halffieldimageL = `${halffieldimageL.length}`;
         if (1983332 == halffieldimageL.length) {
            break;
         }
      } while ((1983332 == halffieldimageL.length) && (gesturesI.length > 1));
         placeholderH >>= Math.min(1, Math.abs(1 % (Math.max(6, halffieldimageL.length))));
      matchinactiveX = new Map([[downloadedE, armvaa.length << (Math.min(Math.abs(2), 1))]]);
   if (3 < complete6.size) {
      package_jv /= Math.max(dcopy_wA.length, 1);
   }
      

   if (videojsc) {
      videojsc = dcopy_wA.length == matchinactiveX.size;
   }
   do {
      orangeX += `${1 % (Math.max(7, downloadedE.length))}`;
      if (orangeX == String.fromCharCode(110,102,102,112,105,54,102,0)) {
         break;
      }
   } while ((orangeX == String.fromCharCode(110,102,102,112,105,54,102,0)) && (4 == orangeX.length || downloadedE == String.fromCharCode(66,0)));
   while (armvaa.length <= 5) {
      matchinactiveX = new Map([[dcopy_wA, dcopy_wA.length]]);
      break;
   }
      dispatch(hideControlAction());
      shrunkK[`${package_jv}`] = 2;
      shrunkK[`${videojsc}`] = imagewatchlive2 ^ 2;
   do {
      downloadedE += `${orangeX.length * 1}`;
      if (downloadedE.length == 2254673) {
         break;
      }
   } while ((downloadedE.length == 2254673) && (1 > (imagewatchlive2 & 3) || 3 > (imagewatchlive2 & downloadedE.length)));

    }
  };
  const onLoadStart = () => {
       let networkI = String.fromCharCode(114,111,117,116,101,115,95,118,95,50,52,0);
    let umengM = 3.0;
    let rewindF = new Map([[String.fromCharCode(115,95,51,48,95,116,119,105,116,116,101,114,0),false ], [String.fromCharCode(122,95,57,56,95,116,101,114,109,105,110,97,116,111,114,0),false ], [String.fromCharCode(109,111,110,116,104,95,102,95,51,54,0),false ]]);
    let rewindN = [String.fromCharCode(99,97,108,108,115,95,119,95,53,51,0), String.fromCharCode(102,95,53,52,95,102,111,117,114,120,109,0)];
    let gpayF = new Map([[String.fromCharCode(100,120,116,97,95,116,95,51,50,0),207], [String.fromCharCode(102,95,52,54,95,115,116,114,105,114,101,112,108,97,99,101,0),720], [String.fromCharCode(98,95,56,52,95,99,102,116,121,112,101,114,101,102,0),115]]);
    let nativeexW = true;
    let attributedstringI = String.fromCharCode(109,97,120,100,98,115,95,113,95,55,48,0);
    let dropdownO = String.fromCharCode(103,95,49,95,99,104,97,110,103,101,0);
    let templateprocessorp = true;
    let baseliner = 2.0;
    let images9 = true;
    let bridgew = [373, 711];
    let googleS = String.fromCharCode(116,95,55,57,95,116,104,97,119,101,100,0);
    let areas = String.fromCharCode(112,114,101,115,101,114,118,101,95,104,95,57,52,0);
    let downt = [819, 303];
    let executorD = 2.0;
    let lnewinterstitiald = String.fromCharCode(100,95,54,95,114,101,97,100,98,105,116,115,0);
      networkI = `${gpayF.size}`;
   while (parseInt(`${umengM}`) <= attributedstringI.length) {
       let main_ci = new Map([[String.fromCharCode(99,114,121,115,116,97,108,104,100,95,109,95,51,51,0),false ], [String.fromCharCode(99,104,97,110,110,101,108,115,95,105,95,51,49,0),true ]]);
       let flagJ = String.fromCharCode(107,95,57,56,95,102,117,110,103,105,98,108,101,0);
       let nativeexX = 3;
       let invitef = 5;
       let iconviewergifa = false;
       let transferz = 5.0;
       let searchbarq = String.fromCharCode(100,95,56,50,95,100,114,97,103,0);
       let filledj = String.fromCharCode(99,97,108,105,110,103,95,54,95,49,54,0);
       let configP = String.fromCharCode(100,95,53,54,95,102,117,110,99,0);
          let exampleimagev = 0.0;
          let fullscreenminZ = 1.0;
          let dialogo = new Map([[String.fromCharCode(103,95,48,95,119,101,98,115,111,99,107,101,116,0),322], [String.fromCharCode(100,95,56,48,95,99,114,97,115,104,0),613]]);
         configP += `${invitef | 3}`;
         exampleimagev -= 3 << (Math.min(Math.abs(parseInt(`${exampleimagev}`)), 1));
         fullscreenminZ /= Math.max(parseFloat(`${dialogo.size}`), 2);
         dialogo = new Map([[`${dialogo.size}`, 1]]);
      do {
          let successh = String.fromCharCode(108,111,97,100,101,100,95,114,95,50,56,0);
          let yellowredcardK = 4;
          let switch_f64 = String.fromCharCode(103,101,116,115,103,110,99,116,120,110,111,95,111,95,51,56,0);
          let hejiV = new Map([[String.fromCharCode(120,118,97,103,95,103,95,55,50,0),true ], [String.fromCharCode(105,110,116,101,114,114,117,112,116,101,100,95,111,95,54,54,0),true ], [String.fromCharCode(110,95,50,56,95,115,119,105,122,122,108,101,0),true ]]);
         main_ci = new Map([[filledj, 1]]);
         successh = `${switch_f64.length}`;
         yellowredcardK -= successh.length / (Math.max(1, 7));
         switch_f64 = `${yellowredcardK}`;
         hejiV[switch_f64] = (switch_f64 == String.fromCharCode(102,0) ? hejiV.size : switch_f64.length);
         if (main_ci.size == 3397490) {
            break;
         }
      } while (((3 ^ main_ci.size) > 3 || !iconviewergifa) && (main_ci.size == 3397490));
      if ((2.54 - transferz) < 1.43 && 2.54 < (flagJ.length - transferz)) {
         flagJ += `${invitef}`;
      }
      for (let i = 0; i < 1; i++) {
          let airbnbstarH = true;
          let ball3 = String.fromCharCode(116,95,54,51,95,99,115,114,105,100,0);
          let rncoreB = String.fromCharCode(107,95,52,57,95,112,114,105,110,116,118,97,108,0);
         iconviewergifa = (nativeexX >> (Math.min(ball3.length, 2))) == 90;
         airbnbstarH = (37 == ((!airbnbstarH ? 37 : rncoreB.length) << (Math.min(rncoreB.length, 1))));
         ball3 = `${rncoreB.length + 1}`;
      }
       let iconsharefriendsU = [690, 379];
       let values9 = false;
         nativeexX <<= Math.min(Math.abs(nativeexX), 5);
      while ((iconsharefriendsU.length / 1) <= 2 && 1 <= iconsharefriendsU.length) {
         iconsharefriendsU = [nativeexX | 3];
         break;
      }
      for (let e = 0; e < 2; e++) {
         flagJ = `${iconsharefriendsU.length >> (Math.min(Math.abs(3), 3))}`;
      }
      while ((2 - invitef) <= 1 || 2 <= (invitef - filledj.length)) {
         invitef &= parseInt(`${transferz}`) << (Math.min(Math.abs(main_ci.size), 2));
         break;
      }
         iconviewergifa = (parseInt(`${transferz}`) / (Math.max(configP.length, 3))) >= 20;
         main_ci = new Map([[`${invitef}`, invitef]]);
      umengM *= parseFloat(`${2 ^ parseInt(`${baseliner}`)}`);
      break;
   }
      rewindF = new Map([[`${rewindF.size}`, dropdownO.length]]);
      networkI = "1";
   for (let w = 0; w < 2; w++) {
       let renderu = 1.0;
       let bgvipxvodi = String.fromCharCode(98,95,54,51,0);
       let encryptT = false;
       let airbnbstarq = 4;
         airbnbstarq += (3 * (encryptT ? 4 : 5));
         airbnbstarq <<= Math.min(4, bgvipxvodi.length);
       let shirt6 = 2;
      for (let j = 0; j < 3; j++) {
         encryptT = String.fromCharCode(121,0) == bgvipxvodi;
      }
       let redscoreballL = String.fromCharCode(103,110,111,115,105,115,95,48,95,52,48,0);
         encryptT = !encryptT || airbnbstarq == 7;
      do {
          let libtobT = String.fromCharCode(109,95,55,51,95,115,116,109,116,0);
          let whitesmalltickE = String.fromCharCode(109,95,52,57,95,112,114,111,102,105,108,101,115,0);
          let heji6 = String.fromCharCode(111,95,54,53,95,115,101,116,99,116,120,0);
          let productQ = String.fromCharCode(98,97,116,99,104,95,109,95,53,57,0);
         airbnbstarq ^= 2;
         libtobT += `${productQ.length | 2}`;
         whitesmalltickE += `${libtobT.length / 3}`;
         heji6 = `${productQ.length}`;
         if (airbnbstarq == 3855272) {
            break;
         }
      } while ((encryptT) && (airbnbstarq == 3855272));
         redscoreballL = "1";
       let pagination0 = true;
      for (let c = 0; c < 1; c++) {
         encryptT = (parseInt(`${renderu}`) / (Math.max(3, bgvipxvodi.length))) == 51;
      }
      if (!encryptT || pagination0) {
         pagination0 = 92 < shirt6 && redscoreballL == String.fromCharCode(108,0);
      }
      for (let l = 0; l < 2; l++) {
          let benefitB = String.fromCharCode(103,97,109,117,116,95,97,95,57,49,0);
          let selectedo = new Map([[String.fromCharCode(121,95,56,50,95,108,122,111,120,0),221], [String.fromCharCode(113,105,97,110,95,56,95,49,49,0),880], [String.fromCharCode(117,108,111,110,103,95,111,95,52,50,0),904]]);
          let lessg = 5;
          let googleM = 2;
          let accepted5 = String.fromCharCode(99,111,110,118,101,114,116,101,100,95,98,95,56,48,0);
         shirt6 += lessg;
         benefitB += `${selectedo.size % 2}`;
         selectedo = new Map([[accepted5, accepted5.length]]);
         googleM <<= Math.min(3, benefitB.length);
      }
      rewindF[`${encryptT}`] = (1 ^ (encryptT ? 4 : 5));
   }

    

   do {
      networkI += `${gpayF.size | 2}`;
      if (networkI == String.fromCharCode(50,117,120,111,100,0)) {
         break;
      }
   } while ((networkI == String.fromCharCode(50,117,120,111,100,0)) && ((networkI.length | 4) > 1));
      rewindN.push((String.fromCharCode(68,0) == attributedstringI ? gpayF.size : attributedstringI.length));
   for (let f = 0; f < 2; f++) {
       let shootnogoaly = new Map([[String.fromCharCode(109,105,103,114,97,116,105,111,110,95,53,95,50,51,0),127], [String.fromCharCode(115,95,51,55,95,115,111,108,118,101,114,0),633], [String.fromCharCode(118,95,56,49,95,115,111,117,110,0),96]]);
      if (!Array.from(shootnogoaly.keys()).includes(`${shootnogoaly.size}`)) {
          let subin8 = true;
          let paginationw = 3;
          let nativeexP = String.fromCharCode(117,110,99,111,110,102,105,114,109,101,100,95,100,95,49,53,0);
          let resultv = true;
         shootnogoaly = new Map([[`${shootnogoaly.size}`, 1 >> (Math.min(1, Math.abs(shootnogoaly.size)))]]);
         subin8 = paginationw >= 9;
         paginationw -= ((resultv ? 3 : 3));
         nativeexP += `${nativeexP.length}`;
      }
       let smallsoundn = [149, 220];
         shootnogoaly = new Map([[`${shootnogoaly.size}`, 2 & smallsoundn.length]]);
      attributedstringI = `${((nativeexW ? 2 : 4) << (Math.min(Math.abs(gpayF.size), 3)))}`;
   }
   do {
      baseliner += 3 + parseInt(`${baseliner}`);
      if (4500313.0 == baseliner) {
         break;
      }
   } while ((templateprocessorp) && (4500313.0 == baseliner));
      networkI = "3";
    

   do {
       let iconarrowleftK = false;
       let tailm = String.fromCharCode(114,95,56,53,95,112,117,98,108,105,115,104,101,114,115,0);
          let informatione = String.fromCharCode(111,102,102,115,95,106,95,49,49,0);
         iconarrowleftK = tailm.startsWith(`${iconarrowleftK}`);
         informatione = "1";
          let footballfieldY = String.fromCharCode(106,95,57,54,95,112,111,119,0);
          let actionsO = 3.0;
          let typingloading2 = 0.0;
         iconarrowleftK = 45.9 >= typingloading2;
         footballfieldY = `${parseInt(`${actionsO}`) - footballfieldY.length}`;
         actionsO += parseInt(`${actionsO}`) * footballfieldY.length;
         typingloading2 *= 1 >> (Math.min(1, Math.abs(parseInt(`${actionsO}`))));
      while (tailm.length <= 1 && iconarrowleftK) {
         tailm = `${(String.fromCharCode(108,0) == tailm ? tailm.length : (iconarrowleftK ? 2 : 2))}`;
         break;
      }
       let half1 = 2.0;
         half1 += (parseFloat(`${parseInt(`${half1}`) - (iconarrowleftK ? 4 : 3)}`));
       let confirmationW = new Map([[String.fromCharCode(102,111,114,119,97,114,100,115,95,121,95,53,49,0),true ], [String.fromCharCode(101,120,99,101,101,100,105,110,103,95,102,95,51,0),true ], [String.fromCharCode(114,101,115,112,111,110,100,101,114,95,54,95,49,53,0),true ]]);
       let bodans = new Map([[String.fromCharCode(109,95,53,54,95,97,110,97,108,121,115,105,115,0),String.fromCharCode(113,95,52,57,95,109,97,116,104,101,115,0)], [String.fromCharCode(104,95,54,50,95,101,110,97,98,108,101,100,0),String.fromCharCode(116,119,105,116,99,104,95,114,95,54,49,0)], [String.fromCharCode(97,95,56,55,95,115,110,97,112,115,104,111,116,116,101,114,0),String.fromCharCode(109,117,108,104,105,95,101,95,52,53,0)]]);
      dropdownO += `${rewindN.length / 1}`;
      if (dropdownO == String.fromCharCode(48,113,101,57,104,0)) {
         break;
      }
   } while ((dropdownO == String.fromCharCode(48,113,101,57,104,0)) && ((dropdownO.length + 3) == 4));
   while ((parseInt(`${baseliner}`) - 3) < 2 && (3 + dropdownO.length) < 2) {
      baseliner /= Math.max(5, rewindN.length);
      break;
   }
      umengM += parseFloat(`${1 << (Math.min(5, Math.abs(parseInt(`${umengM}`))))}`);
   if (networkI.startsWith(`${rewindF.size}`)) {
      networkI += `${rewindN.length << (Math.min(attributedstringI.length, 5))}`;
   }
   for (let d = 0; d < 1; d++) {
       let baiduadsq = true;
       let iconpipexpandr = String.fromCharCode(111,95,54,49,95,114,101,97,99,104,0);
       let basketballhometeamk = [94, 177];
       let userA = String.fromCharCode(102,95,53,54,95,111,110,115,101,116,0);
       let reactj = false;
          let sellmathbackgroundn = String.fromCharCode(99,95,55,55,95,103,114,111,117,112,105,110,103,0);
          let liveE = 4.0;
         basketballhometeamk = [basketballhometeamk.length];
         sellmathbackgroundn = `${sellmathbackgroundn.length}`;
         liveE /= Math.max(3, parseFloat(`${3 - sellmathbackgroundn.length}`));
      if (reactj) {
         reactj = !reactj && baiduadsq;
      }
      if (basketballhometeamk.length < 5 || 2 < (5 << (Math.min(5, basketballhometeamk.length)))) {
          let subout5 = 3.0;
          let zhengpianZ = false;
          let iconpipshrinkT = new Map([[String.fromCharCode(116,95,49,50,95,97,108,105,103,110,0),String.fromCharCode(114,101,118,101,97,108,95,110,95,54,48,0)], [String.fromCharCode(99,111,97,108,101,115,99,101,95,52,95,57,55,0),String.fromCharCode(105,95,51,56,95,104,97,100,111,119,115,0)]]);
          let scrollviewq = 1.0;
         basketballhometeamk.push(3 | parseInt(`${subout5}`));
         subout5 /= Math.max(1, ((zhengpianZ ? 1 : 4) + 3));
         zhengpianZ = null != iconpipshrinkT[`${scrollviewq}`];
         iconpipshrinkT = new Map([[`${iconpipshrinkT.size}`, iconpipshrinkT.size]]);
         scrollviewq += ((zhengpianZ ? 4 : 4) % (Math.max(8, parseInt(`${scrollviewq}`))));
      }
      do {
         basketballhometeamk = [2];
         if (3032893 == basketballhometeamk.length) {
            break;
         }
      } while ((3032893 == basketballhometeamk.length) && (1 < (iconpipexpandr.length | basketballhometeamk.length) || (basketballhometeamk.length | iconpipexpandr.length) < 1));
      while (iconpipexpandr.includes(`${baiduadsq}`)) {
          let matchdetailbgI = 3;
          let arrowupu = [23, 754, 828];
          let iconclosewhitebgP = String.fromCharCode(113,117,97,110,116,105,116,121,95,118,95,49,54,0);
          let reactnativeratingsX = new Map([[String.fromCharCode(116,119,105,100,100,108,101,95,98,95,57,52,0),String.fromCharCode(102,95,57,48,95,114,101,99,101,105,118,101,100,0)], [String.fromCharCode(102,111,114,101,103,114,111,117,110,100,95,99,95,56,50,0),String.fromCharCode(99,95,57,55,95,100,101,102,97,117,108,116,0)]]);
         iconpipexpandr = `${((reactj ? 2 : 4))}`;
         matchdetailbgI ^= 1 >> (Math.min(4, Math.abs(matchdetailbgI)));
         arrowupu = [arrowupu.length];
         iconclosewhitebgP += `${arrowupu.length}`;
         reactnativeratingsX = new Map([[`${reactnativeratingsX.size}`, reactnativeratingsX.size]]);
         break;
      }
         iconpipexpandr = `${(iconpipexpandr == String.fromCharCode(100,0) ? (baiduadsq ? 4 : 3) : iconpipexpandr.length)}`;
      if (baiduadsq) {
          let vietnam8 = 1;
          let infoi = 4;
         iconpipexpandr += `${vietnam8 / 2}`;
         vietnam8 &= 2;
         infoi -= infoi % (Math.max(infoi, 2));
      }
      if (!iconpipexpandr.endsWith(`${baiduadsq}`)) {
         baiduadsq = 86 < basketballhometeamk.length;
      }
      do {
         basketballhometeamk.push(basketballhometeamk.length);
         if (1575954 == basketballhometeamk.length) {
            break;
         }
      } while ((baiduadsq) && (1575954 == basketballhometeamk.length));
      if ((basketballhometeamk.length & 5) <= 2) {
         basketballhometeamk.push(userA.length % 1);
      }
         reactj = basketballhometeamk.length == 83;
         userA += `${basketballhometeamk.length & userA.length}`;
      if (!baiduadsq && !reactj) {
         baiduadsq = iconpipexpandr == String.fromCharCode(81,0);
      }
      do {
         basketballhometeamk = [((baiduadsq ? 4 : 5) | userA.length)];
         if (1103702 == basketballhometeamk.length) {
            break;
         }
      } while (((userA.length | basketballhometeamk.length) < 1 && (userA.length | 1) < 1) && (1103702 == basketballhometeamk.length));
      if ((basketballhometeamk.length >> (Math.min(Math.abs(2), 3))) == 5) {
          let iconarrowleftW = 5.0;
          let agreementD = new Map([[String.fromCharCode(110,95,52,95,105,110,116,101,103,101,114,115,0),313], [String.fromCharCode(114,95,53,53,95,102,108,111,97,116,115,0),13]]);
          let right8 = String.fromCharCode(110,95,49,56,95,111,102,102,115,0);
         iconpipexpandr = `${agreementD.size + 3}`;
         iconarrowleftW += 2 ^ right8.length;
         agreementD[`${iconarrowleftW}`] = parseInt(`${iconarrowleftW}`);
         right8 += `${right8.length & parseInt(`${iconarrowleftW}`)}`;
      }
      bridgew.push((iconpipexpandr.length ^ (nativeexW ? 2 : 2)));
   }
    setIsLoading(true);
      bridgew.push(networkI.length);
   do {
       let colorsl = 2.0;
       let thumbnail1 = String.fromCharCode(110,111,116,101,95,120,95,49,53,0);
       let typingloadingM = [513, 487, 370];
       let penaltyq = String.fromCharCode(114,101,99,111,110,115,116,114,117,99,116,105,111,110,95,99,95,52,51,0);
         typingloadingM = [parseInt(`${colorsl}`)];
          let libtob7 = [210, 460, 545];
          let private_z7s = [701, 412, 550];
         typingloadingM = [parseInt(`${colorsl}`) ^ 2];
         libtob7 = [3];
         private_z7s.push(private_z7s.length << (Math.min(libtob7.length, 1)));
          let basketballtrophyG = String.fromCharCode(112,95,57,53,95,103,105,102,115,0);
          let template_x6 = 4.0;
         typingloadingM.push(3);
         basketballtrophyG += `${basketballtrophyG.length | parseInt(`${template_x6}`)}`;
         template_x6 -= (parseFloat(`${basketballtrophyG == String.fromCharCode(120,0) ? parseInt(`${template_x6}`) : basketballtrophyG.length}`));
       let assistl = String.fromCharCode(108,95,55,57,95,117,110,102,101,116,99,104,0);
      if (penaltyq.length == 4) {
         penaltyq += `${2 << (Math.min(4, assistl.length))}`;
      }
      do {
          let register_rW = [564, 67];
          let iconmegaphoneo = new Map([[String.fromCharCode(115,95,56,95,108,105,98,115,109,98,99,0),String.fromCharCode(101,95,55,95,108,105,98,111,112,101,110,106,112,101,103,0)], [String.fromCharCode(115,99,114,117,98,98,105,110,103,95,57,95,54,56,0),String.fromCharCode(120,95,57,55,95,98,108,111,99,107,115,99,97,110,0)], [String.fromCharCode(102,95,52,50,95,105,110,100,105,99,116,111,114,0),String.fromCharCode(105,95,55,56,95,100,110,111,119,0)]]);
          let yellowredcardO = 1;
          let container9 = 0.0;
         colorsl -= parseFloat(`${yellowredcardO}`);
         register_rW = [2 << (Math.min(2, Math.abs(parseInt(`${container9}`))))];
         iconmegaphoneo[`${register_rW.length}`] = register_rW.length - 2;
         yellowredcardO >>= Math.min(2, Math.abs(iconmegaphoneo.size + parseInt(`${container9}`)));
         if (colorsl == 3896779.0) {
            break;
         }
      } while ((colorsl == 3896779.0) && (3.52 > (4.31 * colorsl)));
          let reactc = 5;
         assistl += `${(String.fromCharCode(105,0) == thumbnail1 ? thumbnail1.length : penaltyq.length)}`;
         reactc <<= Math.min(4, Math.abs(reactc & 2));
          let linkr = String.fromCharCode(99,95,50,56,95,101,120,116,101,110,100,101,101,0);
          let bgvipsportF = new Map([[String.fromCharCode(109,111,100,112,108,117,103,95,101,95,49,51,0),511], [String.fromCharCode(99,95,49,57,95,115,101,103,109,101,110,116,101,100,0),889]]);
         colorsl -= parseFloat(`${1}`);
         linkr = `${bgvipsportF.size}`;
         bgvipsportF[`${linkr}`] = linkr.length & bgvipsportF.size;
         thumbnail1 += `${2 | typingloadingM.length}`;
         typingloadingM.push(thumbnail1.length);
          let membershipD = true;
          let redscoreball0 = new Map([[String.fromCharCode(102,97,105,108,115,95,122,95,51,52,0),true ], [String.fromCharCode(122,95,50,51,95,110,111,116,105,102,105,99,97,116,105,111,110,0),true ]]);
          let halfw = 4;
         assistl += `${parseInt(`${colorsl}`)}`;
         membershipD = halfw < 15;
         redscoreball0 = new Map([[`${halfw}`, ((membershipD ? 3 : 5) * halfw)]]);
      while (assistl != penaltyq) {
         penaltyq = `${(String.fromCharCode(67,0) == assistl ? parseInt(`${colorsl}`) : assistl.length)}`;
         break;
      }
      rewindN.push(thumbnail1.length);
      if (rewindN.length == 840642) {
         break;
      }
   } while ((rewindN.length == 840642) && (4 < (rewindN.length % (Math.max(googleS.length, 1))) || (rewindN.length % (Math.max(googleS.length, 3))) < 4));
   for (let l = 0; l < 3; l++) {
      rewindF = new Map([[`${baseliner}`, parseInt(`${baseliner}`) << (Math.min(4, Math.abs(3)))]]);
   }
   while ((dropdownO.length - 3) < 1) {
      rewindF[networkI] = (networkI == String.fromCharCode(82,0) ? gpayF.size : networkI.length);
      break;
   }
   for (let r = 0; r < 2; r++) {
      networkI = `${networkI.length}`;
   }

    if (typeof props.onLoadStart === 'function') {

       let mimoD = true;
       let iconrightoranget = String.fromCharCode(110,117,109,98,101,114,115,95,109,95,56,53,0);
      while (!iconrightoranget.includes(`${mimoD}`)) {
         mimoD = !iconrightoranget.includes(`${mimoD}`);
         break;
      }
      if (4 > iconrightoranget.length || !mimoD) {
         mimoD = iconrightoranget.endsWith(`${mimoD}`);
      }
         mimoD = (((!mimoD ? iconrightoranget.length : 6) / (Math.max(iconrightoranget.length, 5))) == 6);
      while (4 > iconrightoranget.length && mimoD) {
         iconrightoranget = `${(String.fromCharCode(54,0) == iconrightoranget ? (mimoD ? 2 : 3) : iconrightoranget.length)}`;
         break;
      }
      if (iconrightoranget.length <= 4) {
          let champion4 = false;
          let animationsl = false;
          let analyticsT = String.fromCharCode(101,95,49,51,95,99,111,110,100,117,99,116,111,114,0);
          let favoriteF = false;
         iconrightoranget = `${analyticsT.length}`;
         champion4 = animationsl;
         analyticsT += `${(1 % (Math.max(8, (champion4 ? 2 : 3))))}`;
         favoriteF = !champion4 && favoriteF;
      }
         iconrightoranget = `${1 >> (Math.min(5, iconrightoranget.length))}`;
      nativeexW = gpayF.size > 89;
       let eyeopenx = [String.fromCharCode(120,95,49,55,95,98,99,100,117,105,110,116,0), String.fromCharCode(105,110,116,101,103,101,114,115,95,105,95,54,49,0), String.fromCharCode(114,100,106,112,103,99,111,109,95,50,95,55,55,0)];
       let logins = 2.0;
       let penaltyshootnogoal4 = [String.fromCharCode(107,95,57,54,95,112,97,114,97,109,115,116,114,105,110,103,0), String.fromCharCode(119,95,51,49,95,105,110,115,116,97,108,108,0)];
      if (eyeopenx.length == parseInt(`${logins}`)) {
          let downloadP = [148, 39];
          let gemfile3 = 1;
          let typings = String.fromCharCode(111,95,53,49,95,99,108,97,115,104,0);
          let confirmationT = String.fromCharCode(98,108,117,114,97,121,95,117,95,53,55,0);
          let update_bnv = 0.0;
         logins *= parseInt(`${logins}`);
         downloadP = [(String.fromCharCode(114,0) == typings ? confirmationT.length : typings.length)];
         gemfile3 >>= Math.min(Math.abs(2), 5);
         confirmationT = `${downloadP.length}`;
         update_bnv -= 2;
      }
         logins += parseInt(`${logins}`) / (Math.max(penaltyshootnogoal4.length, 5));
       let settingb = 4.0;
         settingb -= parseFloat(`${1}`);
         logins -= penaltyshootnogoal4.length;
       let informationS = String.fromCharCode(115,121,115,116,101,109,95,109,95,52,53,0);
       let sans6 = String.fromCharCode(113,95,57,57,95,110,111,105,110,100,101,120,0);
      do {
         logins *= 2;
         if (logins == 710632.0) {
            break;
         }
      } while ((1 >= (parseInt(`${logins}`) + eyeopenx.length)) && (logins == 710632.0));
         settingb /= Math.max(2, parseFloat(`${1}`));
      for (let p = 0; p < 1; p++) {
          let launchH = String.fromCharCode(109,102,114,97,95,55,95,49,56,0);
          let editD = false;
          let iconsubssuccesse = String.fromCharCode(102,111,114,98,105,100,100,101,110,95,48,95,55,0);
          let tooltipsL = 1.0;
         settingb -= parseFloat(`${informationS.length * 2}`);
         launchH = "2";
         editD = launchH == iconsubssuccesse;
         iconsubssuccesse += `${launchH.length}`;
         tooltipsL /= Math.max(parseInt(`${tooltipsL}`) | 1, 3);
      }
      baseliner += 3;
   for (let a = 0; a < 2; a++) {
      umengM += (parseFloat(`${(templateprocessorp ? 3 : 3)}`));
   }
      baseliner *= 2;
   if (1 > (networkI.length + parseInt(`${umengM}`))) {
       let foregroundy = String.fromCharCode(98,95,57,52,95,97,99,104,101,0);
       let layoutt = false;
       let play5 = true;
       let chartd = 3.0;
       let libbufferx = String.fromCharCode(118,95,53,53,95,115,105,110,101,115,0);
          let privatechatbg8 = String.fromCharCode(114,102,102,116,102,95,97,95,56,51,0);
          let sheet4 = 4.0;
         libbufferx = `${((layoutt ? 5 : 2) >> (Math.min(foregroundy.length, 4)))}`;
         privatechatbg8 += "1";
         sheet4 += parseInt(`${sheet4}`) & 2;
      do {
          let sideK = String.fromCharCode(114,101,112,108,97,121,101,114,95,97,95,57,56,0);
          let confirmation9 = false;
         foregroundy = `${foregroundy.length - sideK.length}`;
         sideK += `${((confirmation9 ? 3 : 3))}`;
         if (foregroundy == String.fromCharCode(56,116,119,107,53,52,52,100,0)) {
            break;
         }
      } while ((3 >= foregroundy.length) && (foregroundy == String.fromCharCode(56,116,119,107,53,52,52,100,0)));
         libbufferx = `${1 * parseInt(`${chartd}`)}`;
         libbufferx += `${3 ^ libbufferx.length}`;
         libbufferx += `${2 - parseInt(`${chartd}`)}`;
      while (libbufferx.length <= foregroundy.length) {
         libbufferx += "3";
         break;
      }
         libbufferx += `${foregroundy.length}`;
      umengM += parseFloat(`${3 & gpayF.size}`);
   }
      props.onLoadStart(...arguments);
   do {
      images9 = !images9;
      if (images9 ? !images9 : images9) {
         break;
      }
   } while ((images9 ? !images9 : images9) && (5.94 < (5.34 + baseliner) && 5.34 < baseliner));
       let index_ = [112, 877, 800];
       let megaphonee = 3.0;
      if (3 >= index_.length) {
         index_.push(parseInt(`${megaphonee}`));
      }
      do {
          let yellowvideoliveX = new Map([[String.fromCharCode(100,101,99,114,101,109,101,110,116,95,49,95,57,49,0),227], [String.fromCharCode(111,95,51,49,95,101,113,117,97,108,115,0),852], [String.fromCharCode(97,100,100,105,110,103,95,57,95,56,56,0),705]]);
         index_.push(1);
         yellowvideoliveX[`${yellowvideoliveX.size}`] = 1;
         if (349393 == index_.length) {
            break;
         }
      } while ((4 <= (index_.length % 5)) && (349393 == index_.length));
      while (index_.includes(megaphonee)) {
         index_ = [parseInt(`${megaphonee}`) / 1];
         break;
      }
          let stationsD = 5.0;
          let shootP = 1;
         megaphonee -= parseFloat(`${2 - parseInt(`${stationsD}`)}`);
         stationsD *= parseFloat(`${shootP}`);
       let homes = String.fromCharCode(114,95,56,48,95,99,104,101,99,107,109,97,114,107,115,0);
          let iconwatchnowH = false;
         index_ = [parseInt(`${megaphonee}`)];
         iconwatchnowH = iconwatchnowH && iconwatchnowH;
      templateprocessorp = (54 <= ((images9 ? attributedstringI.length : 54) - attributedstringI.length));
      templateprocessorp = 22.20 < baseliner;
      nativeexW = executorD >= 20.94;
      areas = `${rewindF.size}`;

    }
  };
  const onLoad = () => {
       let libfollyI = 2;
    let shootj = String.fromCharCode(105,95,51,57,95,102,105,108,109,0);
    let streamingW = false;
    let privilegeh = [11, 958];
    let libruntimeexecutorV = new Map([[String.fromCharCode(118,105,100,101,111,100,115,112,95,53,95,50,57,0),String.fromCharCode(112,114,111,116,111,99,111,108,115,95,111,95,52,54,0)], [String.fromCharCode(109,95,57,95,116,116,97,101,110,99,0),String.fromCharCode(97,114,103,98,105,95,101,95,51,53,0)], [String.fromCharCode(120,95,54,54,95,117,110,105,120,0),String.fromCharCode(120,95,57,49,95,113,117,97,110,116,0)]]);
    let libmapbufferjniw = 2.0;
    let iconcalendarV = String.fromCharCode(113,95,57,51,95,117,112,100,97,116,101,114,0);
    let desck = new Map([[String.fromCharCode(101,118,97,108,117,97,116,101,100,95,105,95,52,0),false ], [String.fromCharCode(112,111,114,116,97,108,95,54,95,54,53,0),false ], [String.fromCharCode(104,95,55,50,95,109,105,120,105,110,0),false ]]);
    let launcherH = String.fromCharCode(121,95,51,55,95,109,105,110,109,97,120,0);
    let defaultfootballbg9 = String.fromCharCode(98,95,53,48,95,100,101,112,101,110,100,0);
      libfollyI |= 1;
      libmapbufferjniw += parseFloat(`${2}`);
       let libreactO = 3;
       let sansc = false;
      while (5 < (libreactO / 4)) {
         sansc = !sansc;
         break;
      }
         libreactO >>= Math.min(5, Math.abs(1 / (Math.max(4, libreactO))));
          let iconpointscoreh = String.fromCharCode(99,100,120,108,95,122,95,54,48,0);
          let reactnavigationM = [306, 191, 421];
          let emoji1 = true;
         sansc = reactnavigationM.length < iconpointscoreh.length;
         iconpointscoreh += `${((emoji1 ? 1 : 3))}`;
         reactnavigationM.push(((emoji1 ? 5 : 1) - (emoji1 ? 1 : 1)));
         libreactO -= ((sansc ? 2 : 2) << (Math.min(Math.abs(libreactO), 3)));
         libreactO += ((sansc ? 1 : 4) << (Math.min(Math.abs(libreactO), 5)));
      for (let w = 0; w < 3; w++) {
         sansc = sansc && 49 >= libreactO;
      }
      libmapbufferjniw *= parseFloat(`${privilegeh.length}`);
   do {
       let store4 = 1.0;
         store4 /= Math.max(3, parseFloat(`${parseInt(`${store4}`)}`));
       let mail8 = String.fromCharCode(99,95,49,51,95,108,101,114,112,0);
       let teamh = String.fromCharCode(116,111,116,97,108,95,108,95,57,56,0);
       let positionfield6 = new Map([[String.fromCharCode(110,111,116,105,99,101,95,108,95,49,53,0),false ], [String.fromCharCode(102,95,54,50,95,114,97,103,103,97,98,108,101,0),true ], [String.fromCharCode(114,97,110,103,101,115,95,49,95,55,53,0),false ]]);
      libruntimeexecutorV = new Map([[`${libruntimeexecutorV.size}`, libruntimeexecutorV.size - 1]]);
      if (203318 == libruntimeexecutorV.size) {
         break;
      }
   } while ((1 > (desck.size & 5) || (desck.size & libruntimeexecutorV.size) > 5) && (203318 == libruntimeexecutorV.size));

    

      libruntimeexecutorV = new Map([[`${libruntimeexecutorV.size}`, libruntimeexecutorV.size % 1]]);
   for (let y = 0; y < 2; y++) {
      libmapbufferjniw /= Math.max(5, (parseFloat(`${(streamingW ? 3 : 5) & parseInt(`${libmapbufferjniw}`)}`)));
   }
   if ((desck.size | libfollyI) > 5 || 3 > (5 | libfollyI)) {
      desck[`${streamingW}`] = 1;
   }
   while (libruntimeexecutorV.size <= 4 && (4 & libruntimeexecutorV.size) <= 1) {
       let yellowZ = 0.0;
       let q_titlen = 5.0;
      do {
          let penaltygoalk = 4;
          let down5 = [401, 864, 37];
          let searchc = 3.0;
         yellowZ -= parseFloat(`${1}`);
         penaltygoalk -= 2 - down5.length;
         down5 = [1];
         searchc *= parseFloat(`${penaltygoalk / (Math.max(8, parseInt(`${searchc}`)))}`);
         if (yellowZ == 703692.0) {
            break;
         }
      } while ((yellowZ == 703692.0) && (4.94 < (q_titlen * yellowZ)));
      do {
          let iconwatchQ = String.fromCharCode(108,111,103,103,105,110,103,95,117,95,54,48,0);
          let relatede = 0.0;
         q_titlen += parseFloat(`${parseInt(`${q_titlen}`) >> (Math.min(iconwatchQ.length, 1))}`);
         iconwatchQ += "2";
         relatede /= Math.max(4, parseInt(`${relatede}`) << (Math.min(4, Math.abs(3))));
         if (940491.0 == q_titlen) {
            break;
         }
      } while ((2.72 <= (q_titlen - yellowZ) || (q_titlen - 2.72) <= 1.57) && (940491.0 == q_titlen));
         yellowZ *= parseFloat(`${1}`);
         yellowZ -= parseFloat(`${parseInt(`${yellowZ}`) >> (Math.min(5, Math.abs(3)))}`);
      while ((yellowZ + 3.44) < 3.26 && 3.44 < (q_titlen + yellowZ)) {
          let eventf = new Map([[String.fromCharCode(98,117,102,95,51,95,53,0),202], [String.fromCharCode(115,105,103,110,97,108,115,95,50,95,53,56,0),631]]);
         q_titlen += parseFloat(`${2}`);
         eventf[`${eventf.size}`] = 1;
         break;
      }
          let infoj = false;
          let loadingO = String.fromCharCode(101,95,50,95,108,105,98,116,103,118,111,105,112,0);
          let yellowscoreballi = false;
         yellowZ += (parseFloat(`${1 * (yellowscoreballi ? 3 : 4)}`));
         infoj = infoj && loadingO.length >= 56;
         loadingO = `${((infoj ? 1 : 1))}`;
         yellowscoreballi = loadingO.length < 64 && infoj;
      libruntimeexecutorV[`${shootj}`] = (String.fromCharCode(50,0) == shootj ? libruntimeexecutorV.size : shootj.length);
      break;
   }
    setIsLoading(false);
   do {
       let iconsubssuccessW = String.fromCharCode(112,117,115,104,105,110,103,95,107,95,50,52,0);
       let helperK = String.fromCharCode(98,95,51,57,95,112,115,110,114,0);
         helperK += `${(helperK == String.fromCharCode(110,0) ? iconsubssuccessW.length : helperK.length)}`;
       let actionR = new Map([[String.fromCharCode(107,109,115,103,114,97,98,95,117,95,56,48,0),832], [String.fromCharCode(114,95,55,50,95,114,101,108,111,103,105,110,0),666]]);
       let basketballtrophyy = new Map([[String.fromCharCode(100,95,49,52,95,99,108,101,97,114,118,105,100,101,111,100,97,116,97,0),true ], [String.fromCharCode(110,95,49,51,95,115,110,100,105,111,0),false ], [String.fromCharCode(100,117,114,97,116,105,111,110,95,98,95,52,51,0),false ]]);
         basketballtrophyy = new Map([[`${basketballtrophyy.size}`, 1]]);
      for (let k = 0; k < 1; k++) {
          let feedbackt = true;
          let backwhited = 4.0;
         helperK = `${(String.fromCharCode(74,0) == helperK ? helperK.length : iconsubssuccessW.length)}`;
         feedbackt = !feedbackt || backwhited <= 44.62;
         backwhited /= Math.max(5, (parseInt(`${backwhited}`) * (feedbackt ? 2 : 5)));
      }
       let formN = true;
       let mbnative1 = String.fromCharCode(105,95,56,53,95,97,114,114,97,121,115,0);
      libruntimeexecutorV = new Map([[`${privilegeh.length}`, privilegeh.length / (Math.max(helperK.length, 2))]]);
      if (libruntimeexecutorV.size == 718974) {
         break;
      }
   } while ((iconcalendarV.length >= 4) && (libruntimeexecutorV.size == 718974));
   if (!streamingW) {
      streamingW = desck.size < 50 || streamingW;
   }
   do {
      desck[`${streamingW}`] = ((streamingW ? 3 : 2) % 2);
      if (4253310 == desck.size) {
         break;
      }
   } while ((4253310 == desck.size) && (desck.size > iconcalendarV.length));
   for (let k = 0; k < 2; k++) {
      libmapbufferjniw *= parseFloat(`${2 & iconcalendarV.length}`);
   }

    setIsError(false);
      libmapbufferjniw *= parseFloat(`${2 * desck.size}`);
   do {
       let footballfiledlayoutA = 0.0;
       let mimew = [48, 512, 38];
       let areaT = new Map([[String.fromCharCode(109,97,120,105,109,105,122,101,100,95,55,95,54,53,0),553], [String.fromCharCode(116,104,114,101,97,100,95,48,95,50,54,0),148], [String.fromCharCode(109,105,120,101,114,95,98,95,55,56,0),205]]);
       let mbbannerU = true;
       let gnewsshareN = [96, 698, 283];
         footballfiledlayoutA -= ((mbbannerU ? 3 : 5) ^ gnewsshareN.length);
      if (gnewsshareN.includes(mimew.length)) {
         mimew.push(mimew.length);
      }
       let tumbnail4 = String.fromCharCode(119,105,116,104,100,114,97,119,95,56,95,56,50,0);
         gnewsshareN = [2 + mimew.length];
       let hookz = true;
       let libjsijniprofilert = false;
          let largebrightnessT = 0.0;
          let profileactive0 = 3.0;
         mbbannerU = largebrightnessT == footballfiledlayoutA;
         largebrightnessT /= Math.max(4, parseFloat(`${parseInt(`${profileactive0}`) * 2}`));
         profileactive0 *= parseFloat(`${1 | parseInt(`${profileactive0}`)}`);
         mbbannerU = parseInt(`${footballfiledlayoutA}`) == mimew.length;
      for (let f = 0; f < 2; f++) {
          let binddatasU = true;
          let statsT = 5;
         mimew = [1];
         binddatasU = !binddatasU;
         statsT -= 3 - statsT;
      }
         mimew.push(areaT.size);
         mbbannerU = !mbbannerU || mimew.length < 42;
      while ((gnewsshareN.length >> (Math.min(Math.abs(4), 1))) <= 2 || (gnewsshareN.length >> (Math.min(Math.abs(areaT.size), 5))) <= 4) {
         gnewsshareN = [(3 & (mbbannerU ? 1 : 2))];
         break;
      }
      if (!libjsijniprofilert) {
         libjsijniprofilert = (gnewsshareN.length >> (Math.min(tumbnail4.length, 5))) == 15;
      }
      for (let a = 0; a < 2; a++) {
         gnewsshareN.push(areaT.size);
      }
         mbbannerU = hookz && libjsijniprofilert;
      do {
         mimew = [mimew.length];
         if (mimew.length == 1277148) {
            break;
         }
      } while ((3 < (mimew.length & 5) && libjsijniprofilert) && (mimew.length == 1277148));
      privilegeh = [2];
      if (privilegeh.length == 310675) {
         break;
      }
   } while ((privilegeh.length == 310675) && ((3 + privilegeh.length) == 5 || 3 == (privilegeh.length + libfollyI)));
   while (!streamingW) {
      shootj = `${shootj.length}`;
      break;
   }
   do {
      libfollyI >>= Math.min(parseInt(`${Math.abs(((streamingW ? 3 : 1) << (Math.min(Math.abs(libruntimeexecutorV.size), 3))))}`), 3);
      if (libfollyI == 228943) {
         break;
      }
   } while ((2 < (libfollyI - 5) || 1 < (libfollyI - 5)) && (libfollyI == 228943));

    if (typeof props.onLoad === 'function') {

      shootj = `${2 ^ privilegeh.length}`;
      launcherH += `${libruntimeexecutorV.size}`;
   while (libruntimeexecutorV[`${libfollyI}`] == null) {
      libfollyI *= 1 - libruntimeexecutorV.size;
      break;
   }
   while (3 == (privilegeh.length ^ 5) || 2 == (5 ^ privilegeh.length)) {
      iconcalendarV += `${libfollyI}`;
      break;
   }
      props.onLoad(...arguments);
      launcherH = "1";
   do {
      libmapbufferjniw /= Math.max(5, parseFloat(`${iconcalendarV.length}`));
      if (3455387.0 == libmapbufferjniw) {
         break;
      }
   } while ((3455387.0 == libmapbufferjniw) && (privilegeh.includes(libmapbufferjniw)));
   for (let y = 0; y < 1; y++) {
       let elementsN = 1.0;
       let orangedownarrowP = String.fromCharCode(100,101,118,112,111,108,108,95,117,95,51,0);
      for (let h = 0; h < 3; h++) {
         orangedownarrowP += `${parseInt(`${elementsN}`)}`;
      }
       let rulesd = String.fromCharCode(119,95,50,55,95,111,118,101,114,108,97,121,0);
       let yellowV = String.fromCharCode(119,95,52,51,95,114,101,106,101,99,116,101,100,0);
         elementsN /= Math.max(parseInt(`${elementsN}`), 4);
         rulesd += "1";
      do {
         orangedownarrowP = `${rulesd.length}`;
         if (4158321 == orangedownarrowP.length) {
            break;
         }
      } while ((rulesd == String.fromCharCode(70,0)) && (4158321 == orangedownarrowP.length));
       let progress4 = String.fromCharCode(112,95,54,49,95,99,109,111,118,101,0);
      libfollyI &= launcherH.length;
   }
      libfollyI -= 1 & launcherH.length;

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
       let iconnointernetp = String.fromCharCode(112,95,54,55,95,108,101,97,118,105,110,103,0);
    let feedback9 = 5;
    let smallorangemanE = 5.0;
    let hometeamfieldy = String.fromCharCode(110,101,97,114,115,101,116,95,122,95,57,51,0);
    let kickx = 4.0;
    let runtimeschedulerp = 0.0;
    let matchinactiveD = 4;
    let profileframeI = String.fromCharCode(99,95,52,53,95,101,110,99,108,111,115,105,110,103,0);
    let whitebellC = 2;
    let twittery = String.fromCharCode(97,95,50,49,95,104,100,99,100,0);
    let defaultpredictionprofileW = 2.0;
    let scoreB = 1.0;
   if (5 == (4 / (Math.max(7, matchinactiveD))) && (whitebellC / 4) == 3) {
      matchinactiveD &= 2 << (Math.min(5, Math.abs(parseInt(`${runtimeschedulerp}`))));
   }
      matchinactiveD += matchinactiveD;

    if (!isLoading) {

       let yellowR = [624, 487, 784];
       let recommendation4 = String.fromCharCode(118,95,57,56,95,100,101,112,108,111,121,0);
         yellowR = [2];
          let reddownarrowQ = String.fromCharCode(97,118,103,120,95,122,95,56,48,0);
         yellowR.push((reddownarrowQ == String.fromCharCode(98,0) ? recommendation4.length : reddownarrowQ.length));
         yellowR = [(String.fromCharCode(70,0) == recommendation4 ? yellowR.length : recommendation4.length)];
       let sourceT = 4;
       let orangeuparrow2 = 1;
       let graphicsM = 1;
          let android6 = 2.0;
         sourceT %= Math.max(graphicsM, 2);
         android6 -= parseInt(`${android6}`);
      kickx /= Math.max(4, parseFloat(`${matchinactiveD}`));
   while (2 < (1 - matchinactiveD)) {
      feedback9 *= whitebellC + feedback9;
      break;
   }
      return null;
   while (1 == feedback9) {
       let fullscreenmax8 = String.fromCharCode(109,111,100,101,114,110,95,53,95,51,50,0);
       let mapbufferS = 1.0;
       let fullscreenminh = String.fromCharCode(117,95,56,51,95,115,112,97,119,110,97,98,108,101,0);
       let mbbannerg = new Map([[String.fromCharCode(105,110,116,108,95,101,95,53,57,0),String.fromCharCode(112,104,121,115,95,99,95,49,55,0)], [String.fromCharCode(103,95,56,51,95,107,97,110,110,97,0),String.fromCharCode(99,111,117,110,116,101,100,95,112,95,54,53,0)]]);
      while (2.36 <= (mapbufferS + 1.2)) {
          let libturbomodulejsijniO = 2.0;
          let schedulerW = 0;
          let fast2 = String.fromCharCode(99,95,52,55,95,115,119,97,112,112,101,100,0);
         fullscreenminh += `${fullscreenmax8.length}`;
         libturbomodulejsijniO += (parseFloat(`${fast2 == String.fromCharCode(104,0) ? schedulerW : fast2.length}`));
         schedulerW ^= schedulerW + 3;
         break;
      }
      if (5 > fullscreenminh.length) {
         fullscreenminh += `${mbbannerg.size + fullscreenminh.length}`;
      }
          let iconwatchy = String.fromCharCode(102,111,114,98,105,100,100,101,110,95,114,95,53,57,0);
          let awayteamfield_ = String.fromCharCode(100,116,100,102,95,121,95,56,52,0);
         mbbannerg = new Map([[iconwatchy, 2 << (Math.min(1, iconwatchy.length))]]);
         awayteamfield_ = `${2 - awayteamfield_.length}`;
         fullscreenmax8 = `${mbbannerg.size}`;
      if (fullscreenmax8.includes(fullscreenminh)) {
         fullscreenminh = "1";
      }
      do {
          let rewardY = new Map([[String.fromCharCode(112,117,114,112,108,101,95,114,95,54,51,0),String.fromCharCode(108,95,54,56,95,117,110,109,105,120,0)], [String.fromCharCode(107,112,115,95,57,95,52,56,0),String.fromCharCode(118,95,49,53,95,109,97,114,107,117,112,0)]]);
         fullscreenminh = "1";
         rewardY = new Map([[`${rewardY.size}`, rewardY.size]]);
         if (String.fromCharCode(50,119,110,50,110,98,110,0) == fullscreenminh) {
            break;
         }
      } while ((String.fromCharCode(50,119,110,50,110,98,110,0) == fullscreenminh) && (mbbannerg.size <= fullscreenminh.length));
      if (4 == (mbbannerg.size + 1) && (fullscreenminh.length + 1) == 5) {
         fullscreenminh += `${fullscreenminh.length / (Math.max(2, parseInt(`${mapbufferS}`)))}`;
      }
      if (5 > mbbannerg.size) {
         mbbannerg[fullscreenminh] = (fullscreenminh == String.fromCharCode(49,0) ? mbbannerg.size : fullscreenminh.length);
      }
         mbbannerg = new Map([[`${mapbufferS}`, fullscreenmax8.length]]);
      while (fullscreenmax8.endsWith(fullscreenminh)) {
         fullscreenminh = `${(String.fromCharCode(73,0) == fullscreenmax8 ? fullscreenmax8.length : mbbannerg.size)}`;
         break;
      }
         mbbannerg = new Map([[`${mbbannerg.size}`, (fullscreenminh == String.fromCharCode(109,0) ? mbbannerg.size : fullscreenminh.length)]]);
         mbbannerg[`${mapbufferS}`] = mbbannerg.size;
      feedback9 |= mbbannerg.size;
      break;
   }
   for (let z = 0; z < 2; z++) {
       let switch_wM = 5.0;
       let refreshborderless8 = 0.0;
       let hoverg = new Map([[String.fromCharCode(111,118,112,97,103,101,95,108,95,56,53,0),416], [String.fromCharCode(114,101,99,111,110,110,101,99,116,105,110,103,95,111,95,49,52,0),45]]);
       let iconI = 0.0;
         switch_wM *= parseInt(`${refreshborderless8}`);
      do {
          let androidD = String.fromCharCode(119,95,56,56,95,101,110,100,105,110,103,0);
          let mbnativeadvancedy = false;
          let iconclosewhitem = String.fromCharCode(114,101,100,101,109,112,116,105,111,110,95,52,95,54,51,0);
          let gestureC = String.fromCharCode(99,95,53,53,95,110,101,97,114,101,114,0);
          let googleF = 0.0;
         refreshborderless8 /= Math.max(5, parseInt(`${refreshborderless8}`));
         androidD = `${(1 << (Math.min(1, Math.abs((mbnativeadvancedy ? 1 : 2)))))}`;
         mbnativeadvancedy = androidD.length <= 27 || mbnativeadvancedy;
         iconclosewhitem += `${1 & parseInt(`${googleF}`)}`;
         gestureC = "3";
         googleF += parseInt(`${googleF}`) & androidD.length;
         if (62544.0 == refreshborderless8) {
            break;
         }
      } while ((2.0 <= (refreshborderless8 + 2.67)) && (62544.0 == refreshborderless8));
          let flagG = 5;
         switch_wM += hoverg.size - 2;
         flagG &= flagG;
         refreshborderless8 /= Math.max(parseInt(`${iconI}`), 3);
         hoverg = new Map([[`${iconI}`, parseInt(`${switch_wM}`) - parseInt(`${iconI}`)]]);
      if (3.79 == (iconI * switch_wM)) {
         switch_wM -= hoverg.size;
      }
      for (let b = 0; b < 3; b++) {
          let heartS = new Map([[String.fromCharCode(119,95,50,55,95,118,99,111,100,101,99,0),true ], [String.fromCharCode(97,117,116,104,101,110,116,105,99,97,116,105,111,110,95,109,95,55,56,0),true ], [String.fromCharCode(115,117,98,115,101,113,117,101,110,99,101,95,121,95,53,53,0),true ]]);
          let subbasketballplayerX = String.fromCharCode(101,95,51,49,95,100,101,112,0);
          let liveshareD = String.fromCharCode(112,114,101,115,101,116,115,95,51,95,49,55,0);
          let predictionlossX = 2;
          let cross2 = 2.0;
         refreshborderless8 -= hoverg.size << (Math.min(5, Math.abs(heartS.size)));
         heartS = new Map([[`${predictionlossX}`, 1 & liveshareD.length]]);
         subbasketballplayerX = `${subbasketballplayerX.length}`;
         liveshareD = `${predictionlossX}`;
         cross2 /= Math.max(3, (parseFloat(`${String.fromCharCode(87,0) == subbasketballplayerX ? predictionlossX : subbasketballplayerX.length}`)));
      }
          let imagenetworkerrW = false;
          let iconarrowrightS = [122, 523, 16];
         refreshborderless8 /= Math.max((parseInt(`${iconI}`) * (imagenetworkerrW ? 2 : 2)), 2);
         imagenetworkerrW = iconarrowrightS.length == iconarrowrightS.length;
       let topony = 4.0;
      if (3 < (hoverg.size / (Math.max(5, 8))) && 5 < (5 ^ hoverg.size)) {
         iconI *= parseFloat(`${2 | hoverg.size}`);
      }
      if (1.50 < (topony + 3)) {
          let popupZ = new Map([[String.fromCharCode(101,95,57,95,119,101,120,112,97,110,100,0),134], [String.fromCharCode(105,95,50,52,95,99,111,110,116,97,105,110,0),402]]);
          let profilepicV = 0.0;
          let umengO = 2;
          let awayplayerF = String.fromCharCode(98,95,56,49,95,110,111,110,110,117,108,108,101,110,99,114,121,112,116,105,111,110,0);
         refreshborderless8 += (String.fromCharCode(84,0) == awayplayerF ? umengO : awayplayerF.length);
         popupZ[`${profilepicV}`] = parseInt(`${profilepicV}`) % (Math.max(popupZ.size, 9));
         umengO *= popupZ.size;
      }
       let layouti = 2.0;
       let quest9 = 0.0;
      runtimeschedulerp -= (parseFloat(`${String.fromCharCode(87,0) == hometeamfieldy ? hometeamfieldy.length : parseInt(`${smallorangemanE}`)}`));
   }

    }
    return (
      <View style={VideoPlayerstyles.loader.container}>
        <Animated.Image
          source={require('./images/icons/bggradientVideojs.png')}
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
   while (feedback9 >= whitebellC) {
      feedback9 |= profileframeI.length;
      break;
   }
   if ((matchinactiveD | 5) < 5) {
      whitebellC ^= parseInt(`${kickx}`) ^ hometeamfieldy.length;
   }

  };

  const onEnd = () => {
       let infok = String.fromCharCode(97,95,51,0);
    let hongkongq = String.fromCharCode(101,95,52,51,95,99,111,108,111,114,101,100,0);
    let iconsettingu = 1.0;
    let arrowrightwithtailP = 2.0;
    let containerS = String.fromCharCode(114,101,113,117,101,115,116,95,105,95,53,48,0);
    let manifestG = String.fromCharCode(103,95,55,49,95,100,105,115,99,114,101,116,101,0);
    let minimizej = 0;
    let sinaS = String.fromCharCode(101,95,55,49,95,101,120,112,108,105,99,105,116,101,108,121,0);
    let helperB = false;
    let inouttargetredZ = String.fromCharCode(114,95,55,50,95,104,101,97,100,101,114,0);
    let taiwanZ = new Map([[String.fromCharCode(109,95,49,52,95,114,101,118,111,107,105,110,103,0),String.fromCharCode(121,95,52,54,95,112,97,99,107,97,103,101,100,0)], [String.fromCharCode(107,95,54,50,95,109,121,113,114,0),String.fromCharCode(108,95,54,48,95,111,100,101,114,110,0)]]);
    let redscoreballP = 3.0;
      manifestG = "3";
       let predictionactive5 = [598, 782, 519];
       let libreactF = String.fromCharCode(115,111,108,105,100,99,111,108,111,114,95,106,95,55,0);
      for (let a = 0; a < 3; a++) {
          let usernameG = [873, 412, 323];
          let spinnerD = String.fromCharCode(100,101,102,97,117,108,116,95,51,95,51,52,0);
          let settingD = new Map([[String.fromCharCode(99,111,110,116,114,97,105,110,101,100,95,97,95,49,52,0),537], [String.fromCharCode(111,95,53,53,95,107,101,121,119,111,114,100,0),627], [String.fromCharCode(110,95,49,95,113,117,97,110,116,105,122,97,116,105,111,110,0),816]]);
         predictionactive5 = [usernameG.length];
         usernameG = [1];
         spinnerD = `${(spinnerD == String.fromCharCode(53,0) ? settingD.size : spinnerD.length)}`;
         settingD = new Map([[`${settingD.size}`, 3 / (Math.max(7, settingD.size))]]);
      }
       let anner1 = 0.0;
      while ((2 & predictionactive5.length) <= 2) {
         libreactF = `${3 * libreactF.length}`;
         break;
      }
      for (let e = 0; e < 1; e++) {
          let indexG = [79, 915];
          let default_8zt = [627, 839, 12];
          let phoneu = String.fromCharCode(100,111,119,110,108,111,97,100,95,103,95,52,51,0);
          let disconnectedc = 3.0;
          let moonA = String.fromCharCode(114,95,52,48,95,114,101,116,97,105,110,101,100,0);
         predictionactive5.push(parseInt(`${anner1}`));
         indexG = [phoneu.length * moonA.length];
         default_8zt = [phoneu.length & 2];
         disconnectedc += parseFloat(`${indexG.length ^ 3}`);
         moonA += `${3 | phoneu.length}`;
      }
      do {
         libreactF += `${libreactF.length}`;
         if (libreactF == String.fromCharCode(51,119,95,56,103,118,99,107,105,53,0)) {
            break;
         }
      } while ((!libreactF.includes(`${anner1}`)) && (libreactF == String.fromCharCode(51,119,95,56,103,118,99,107,105,53,0)));
      do {
         predictionactive5 = [parseInt(`${anner1}`) ^ 3];
         if (predictionactive5.length == 4663486) {
            break;
         }
      } while ((predictionactive5.length == 4663486) && (predictionactive5.length >= 3));
      minimizej <<= Math.min(containerS.length, 2);
      arrowrightwithtailP += parseFloat(`${parseInt(`${iconsettingu}`)}`);
   for (let u = 0; u < 2; u++) {
      sinaS += `${2 + infok.length}`;
   }
      arrowrightwithtailP /= Math.max(parseFloat(`${1}`), 2);
   if (3 < minimizej) {
       let libsentryl = 1;
       let mintegralc = 0;
       let emojim = String.fromCharCode(100,115,112,117,116,105,108,95,108,95,56,52,0);
       let libnms9 = 3.0;
      for (let r = 0; r < 1; r++) {
          let sharewhiter = 3.0;
         mintegralc <<= Math.min(Math.abs(mintegralc % (Math.max(1, 6))), 2);
         sharewhiter += parseInt(`${sharewhiter}`);
      }
         libsentryl &= mintegralc;
      do {
         mintegralc += libsentryl;
         if (mintegralc == 1775080) {
            break;
         }
      } while (((mintegralc / 2) == 5 && 2 == (libsentryl / (Math.max(2, 8)))) && (mintegralc == 1775080));
      if (libsentryl < 1) {
         mintegralc *= emojim.length;
      }
      if (libnms9 >= 2.26) {
         libsentryl *= 3;
      }
         emojim += "3";
         libnms9 /= Math.max(mintegralc, 1);
         mintegralc <<= Math.min(Math.abs(libsentryl * 1), 4);
         mintegralc -= 3 & mintegralc;
      while ((emojim.length + 1) <= 4 || 4 <= (emojim.length / (Math.max(1, 10)))) {
         emojim += `${parseInt(`${libnms9}`)}`;
         break;
      }
      do {
          let phonem = 1;
         libsentryl /= Math.max(emojim.length * 3, 2);
         phonem |= phonem;
         if (libsentryl == 1642808) {
            break;
         }
      } while (((mintegralc / 4) > 3) && (libsentryl == 1642808));
          let qaagd = String.fromCharCode(102,111,110,116,95,112,95,55,57,0);
         mintegralc |= emojim.length;
         qaagd += `${qaagd.length}`;
      hongkongq += `${parseInt(`${iconsettingu}`)}`;
   }

    console.log('onend');
   do {
      arrowrightwithtailP -= parseFloat(`${parseInt(`${arrowrightwithtailP}`)}`);
      if (2321184.0 == arrowrightwithtailP) {
         break;
      }
   } while ((2321184.0 == arrowrightwithtailP) && (iconsettingu >= 1.99));
      arrowrightwithtailP *= parseFloat(`${1 ^ parseInt(`${arrowrightwithtailP}`)}`);
       let entryT = String.fromCharCode(110,95,55,49,95,102,111,99,117,115,0);
       let light7 = [970, 683, 58];
       let greyarrowupW = String.fromCharCode(105,110,116,102,105,95,106,95,54,56,0);
         light7.push((greyarrowupW == String.fromCharCode(89,0) ? greyarrowupW.length : light7.length));
          let gpayY = 0.0;
          let iconbellactiveG = new Map([[String.fromCharCode(114,115,116,110,95,121,95,50,0),false ], [String.fromCharCode(100,95,51,50,95,100,111,109,97,105,110,115,0),true ]]);
          let footballtrophyz = 0;
         light7.push(parseInt(`${gpayY}`));
         gpayY += parseFloat(`${2 * iconbellactiveG.size}`);
         iconbellactiveG[`${footballtrophyz}`] = 1 & footballtrophyz;
      do {
         entryT = `${greyarrowupW.length & 2}`;
         if (1115790 == entryT.length) {
            break;
         }
      } while ((1115790 == entryT.length) && ((3 + entryT.length) >= 3));
      do {
         entryT = `${2 % (Math.max(9, greyarrowupW.length))}`;
         if (entryT == String.fromCharCode(120,116,52,0)) {
            break;
         }
      } while ((entryT == String.fromCharCode(120,116,52,0)) && (5 == (entryT.length * 1)));
       let placeholderZ = new Map([[String.fromCharCode(113,95,53,48,95,116,104,105,99,107,110,101,115,115,0),String.fromCharCode(102,95,49,57,95,115,116,114,105,99,109,112,0)], [String.fromCharCode(97,95,50,48,0),String.fromCharCode(117,95,50,52,95,118,114,101,112,0)], [String.fromCharCode(98,95,54,52,95,117,116,99,116,105,109,101,0),String.fromCharCode(105,110,99,111,110,115,105,115,116,101,110,99,121,95,105,95,55,49,0)]]);
         entryT = `${entryT.length ^ light7.length}`;
      for (let u = 0; u < 3; u++) {
          let subtextg = String.fromCharCode(113,95,56,51,95,112,114,101,100,105,99,97,116,101,0);
          let awayplayerE = 4.0;
          let whitebellN = 0.0;
          let owngoaln = false;
         greyarrowupW += `${(String.fromCharCode(71,0) == subtextg ? light7.length : subtextg.length)}`;
         awayplayerE /= Math.max(parseInt(`${whitebellN}`) >> (Math.min(Math.abs(parseInt(`${awayplayerE}`)), 5)), 5);
         whitebellN /= Math.max((parseFloat(`${parseInt(`${whitebellN}`) + (owngoaln ? 1 : 2)}`)), 2);
         owngoaln = awayplayerE == 12.91;
      }
      while (light7.length < entryT.length) {
         light7.push(entryT.length);
         break;
      }
         light7.push(placeholderZ.size + light7.length);
      iconsettingu += parseFloat(`${light7.length}`);
       let bangR = 2;
       let singaporeq = [54, 969, 790];
       let catagoryU = 0.0;
          let iconH = true;
          let iconarrowrightblackG = 4.0;
          let kickv = String.fromCharCode(117,95,49,55,95,116,119,105,110,118,113,0);
         bangR <<= Math.min(Math.abs(parseInt(`${catagoryU}`) - singaporeq.length), 4);
         iconH = 58 < kickv.length;
         iconarrowrightblackG /= Math.max(4, 2);
         kickv += `${kickv.length}`;
         singaporeq = [singaporeq.length & 2];
      while (!singaporeq.includes(catagoryU)) {
         singaporeq.push(parseInt(`${catagoryU}`));
         break;
      }
       let foundA = new Map([[String.fromCharCode(118,95,52,57,95,99,121,117,118,0),377], [String.fromCharCode(102,105,110,100,95,104,95,50,55,0),185]]);
       let termsN = new Map([[String.fromCharCode(112,109,107,95,99,95,54,55,0),false ], [String.fromCharCode(115,95,56,50,95,102,105,110,100,0),false ], [String.fromCharCode(113,95,57,55,95,117,110,100,101,114,101,115,116,105,109,97,116,101,100,0),false ]]);
      while (!Array.from(termsN.values()).includes(foundA.size)) {
          let plashJ = 3.0;
          let fullscreenmaxh = new Map([[String.fromCharCode(112,95,49,95,114,101,115,101,110,116,97,116,105,111,110,0),false ], [String.fromCharCode(113,95,56,52,95,119,114,105,116,101,0),false ], [String.fromCharCode(97,100,111,98,101,95,99,95,56,52,0),false ]]);
          let condensedM = String.fromCharCode(106,95,57,50,95,99,97,112,0);
          let iconcalendarE = 3.0;
          let greenarrowupB = 3;
         termsN = new Map([[`${foundA.size}`, foundA.size | parseInt(`${catagoryU}`)]]);
         plashJ *= parseFloat(`${3 >> (Math.min(5, Math.abs(fullscreenmaxh.size)))}`);
         fullscreenmaxh[`${greenarrowupB}`] = parseInt(`${plashJ}`) >> (Math.min(2, Math.abs(2)));
         condensedM = `${parseInt(`${plashJ}`)}`;
         iconcalendarE *= 2 ^ condensedM.length;
         greenarrowupB -= 2;
         break;
      }
          let bottoms = false;
         foundA = new Map([[`${foundA.size}`, foundA.size ^ termsN.size]]);
         bottoms = !bottoms;
         termsN = new Map([[`${singaporeq.length}`, 2]]);
         termsN[`${catagoryU}`] = singaporeq.length - 1;
      while ((2 * bangR) <= 4) {
          let libturbomodulejsijniz = 4;
         singaporeq = [bangR];
         libturbomodulejsijniz <<= Math.min(1, Math.abs(libturbomodulejsijniz % 1));
         break;
      }
      minimizej |= infok.length % 2;
      arrowrightwithtailP -= parseFloat(`${infok.length / 3}`);
      infok += `${2 * sinaS.length}`;

    setIsLoading(false);
   if (sinaS.length <= 5) {
      containerS += `${parseInt(`${arrowrightwithtailP}`)}`;
   }
      iconsettingu += parseFloat(`${hongkongq.length << (Math.min(Math.abs(3), 3))}`);
   while (manifestG == String.fromCharCode(115,0) && hongkongq != String.fromCharCode(118,0)) {
       let flipperM = true;
       let viewsb = 2.0;
       let profileactiver = String.fromCharCode(111,95,50,57,95,119,114,105,116,101,99,111,112,121,0);
       let release_2r5 = String.fromCharCode(103,95,49,56,95,116,101,114,109,0);
         viewsb /= Math.max(3, 2);
         profileactiver += `${profileactiver.length * release_2r5.length}`;
          let fulla = [String.fromCharCode(105,100,115,95,120,95,55,49,0), String.fromCharCode(112,95,52,56,95,116,111,110,101,115,0)];
          let recommendationd = 4.0;
          let chinaW = String.fromCharCode(116,95,52,49,95,110,105,100,108,110,0);
         profileactiver = "3";
         fulla = [parseInt(`${recommendationd}`) >> (Math.min(3, Math.abs(1)))];
         recommendationd /= Math.max(parseFloat(`${fulla.length}`), 4);
         chinaW = `${fulla.length}`;
      for (let c = 0; c < 2; c++) {
          let dycreatorq = 0.0;
         release_2r5 = `${release_2r5.length << (Math.min(3, Math.abs(parseInt(`${dycreatorq}`))))}`;
      }
       let componentregistryH = String.fromCharCode(109,95,52,53,95,115,116,97,116,105,111,110,97,114,105,116,121,0);
      if (flipperM) {
          let sortP = true;
          let short_ap6 = new Map([[String.fromCharCode(107,95,49,57,0),String.fromCharCode(97,95,57,52,95,112,97,97,100,0)], [String.fromCharCode(114,101,102,101,114,101,110,99,101,115,95,99,95,57,54,0),String.fromCharCode(100,105,103,101,115,116,95,103,95,53,57,0)], [String.fromCharCode(103,95,54,54,95,103,101,110,101,114,97,108,105,115,101,100,0),String.fromCharCode(119,111,114,115,116,95,115,95,49,55,0)]]);
          let icon3 = 4.0;
          let awayn = 0.0;
         componentregistryH = `${(release_2r5 == String.fromCharCode(90,0) ? release_2r5.length : parseInt(`${viewsb}`))}`;
         sortP = ((short_ap6.size * (sortP ? 57 : short_ap6.size)) == 57);
         icon3 /= Math.max(((sortP ? 1 : 5) << (Math.min(Math.abs(parseInt(`${awayn}`)), 3))), 1);
         awayn /= Math.max(2 * short_ap6.size, 3);
      }
         componentregistryH = `${((flipperM ? 4 : 3) ^ 2)}`;
         profileactiver = `${((flipperM ? 5 : 3) | 1)}`;
         componentregistryH += `${2 << (Math.min(2, release_2r5.length))}`;
          let photoY = String.fromCharCode(104,95,51,50,95,112,97,114,116,115,0);
         release_2r5 += `${2 - parseInt(`${viewsb}`)}`;
         photoY = `${photoY.length}`;
       let eyeopenV = 3.0;
       let iconN = 3.0;
         flipperM = (viewsb / (Math.max(iconN, 7))) >= 6.76;
      hongkongq += `${3 * parseInt(`${viewsb}`)}`;
      break;
   }
       let defaultprofilepicy = 3.0;
       let emptyq = String.fromCharCode(102,105,108,101,110,97,109,101,95,50,95,57,55,0);
      for (let a = 0; a < 1; a++) {
         emptyq += `${parseInt(`${defaultprofilepicy}`)}`;
      }
      for (let c = 0; c < 3; c++) {
          let predictionlossg = String.fromCharCode(112,97,114,101,110,116,95,117,95,57,57,0);
          let yellowscoreball6 = 0.0;
          let distN = [977, 231];
          let iconpipexpandi = 1;
         defaultprofilepicy *= parseFloat(`${iconpipexpandi}`);
         predictionlossg += `${parseInt(`${yellowscoreball6}`) / (Math.max(5, distN.length))}`;
         yellowscoreball6 /= Math.max(2, parseFloat(`${distN.length}`));
         iconpipexpandi |= predictionlossg.length & distN.length;
      }
      if (1 < (emptyq.length + 1)) {
         defaultprofilepicy -= parseFloat(`${emptyq.length | parseInt(`${defaultprofilepicy}`)}`);
      }
      while (2 <= (1 + parseInt(`${defaultprofilepicy}`)) && (parseInt(`${defaultprofilepicy}`) + emptyq.length) <= 1) {
          let othermatchdetailbgp = String.fromCharCode(98,101,108,111,110,103,95,119,95,52,48,0);
          let renderP = String.fromCharCode(122,95,49,95,119,97,110,116,115,0);
          let sentryA = true;
         defaultprofilepicy *= parseFloat(`${othermatchdetailbgp.length}`);
         othermatchdetailbgp += `${renderP.length}`;
         renderP += "1";
         break;
      }
          let successb = String.fromCharCode(116,101,115,101,100,103,101,95,100,95,57,48,0);
          let defaultfootballbgS = 5.0;
         emptyq += `${emptyq.length}`;
         successb = `${successb.length - 2}`;
         defaultfootballbgS -= parseFloat(`${successb.length >> (Math.min(Math.abs(3), 5))}`);
         defaultprofilepicy -= parseFloat(`${emptyq.length + 2}`);
      sinaS = `${parseInt(`${arrowrightwithtailP}`)}`;
   while (containerS.length >= infok.length) {
      infok = `${1 >> (Math.min(3, Math.abs(parseInt(`${arrowrightwithtailP}`))))}`;
      break;
   }
      sinaS = `${2 >> (Math.min(3, containerS.length))}`;

    props.onLiveEnd?.();
       let castR = String.fromCharCode(112,95,56,56,95,98,111,111,116,104,0);
       let qnewarchdefaultsB = String.fromCharCode(122,95,53,54,95,115,108,102,0);
          let yellowanimationlive4 = true;
          let serviceV = new Map([[String.fromCharCode(99,111,109,112,105,108,101,114,95,53,95,51,55,0),141], [String.fromCharCode(99,111,110,118,95,104,95,54,52,0),505]]);
          let context_ = String.fromCharCode(106,95,49,55,95,112,114,101,108,111,97,100,105,110,103,0);
         qnewarchdefaultsB += `${(castR == String.fromCharCode(105,0) ? context_.length : castR.length)}`;
         yellowanimationlive4 = (51 > ((yellowanimationlive4 ? 51 : serviceV.size) % (Math.max(serviceV.size, 9))));
         context_ += `${serviceV.size}`;
      if (castR == qnewarchdefaultsB) {
         qnewarchdefaultsB += `${qnewarchdefaultsB.length}`;
      }
      containerS += `${minimizej << (Math.min(sinaS.length, 2))}`;
   while ((1.66 - arrowrightwithtailP) <= 3.7 || 2 <= (manifestG.length * 2)) {
      arrowrightwithtailP += parseFloat(`${3 >> (Math.min(Math.abs(parseInt(`${iconsettingu}`)), 3))}`);
      break;
   }
   for (let g = 0; g < 3; g++) {
      hongkongq += `${containerS.length | infok.length}`;
   }
   do {
      sinaS = `${((helperB ? 2 : 2))}`;
      if (String.fromCharCode(118,122,104,50,57,119,0) == sinaS) {
         break;
      }
   } while ((String.fromCharCode(118,122,104,50,57,119,0) == sinaS) && ((4 + minimizej) > 2));
   if (2 <= (minimizej + infok.length)) {
       let activityZ = 1;
       let assetsU = 0.0;
         assetsU += parseFloat(`${activityZ}`);
         assetsU /= Math.max(parseFloat(`${activityZ}`), 4);
      while ((assetsU / (Math.max(5.80, 3))) <= 4.32 && 4 <= (activityZ / (Math.max(10, parseInt(`${assetsU}`))))) {
         assetsU -= parseFloat(`${activityZ * parseInt(`${assetsU}`)}`);
         break;
      }
         assetsU += parseFloat(`${3 - activityZ}`);
      for (let w = 0; w < 3; w++) {
         assetsU -= parseFloat(`${activityZ % (Math.max(8, parseInt(`${assetsU}`)))}`);
      }
          let downloadingr = String.fromCharCode(110,99,114,121,112,116,105,111,110,95,51,95,54,55,0);
          let predictionbannersharede = 5.0;
         assetsU -= parseFloat(`${3 % (Math.max(6, parseInt(`${assetsU}`)))}`);
         downloadingr += `${parseInt(`${predictionbannersharede}`)}`;
         predictionbannersharede += parseFloat(`${parseInt(`${predictionbannersharede}`) * downloadingr.length}`);
      minimizej /= Math.max(((helperB ? 5 : 3) & minimizej), 4);
   }
      containerS += `${infok.length >> (Math.min(Math.abs(3), 2))}`;

  };

  const onError = () => {
       let yellowanimationlivek = true;
    let iconcalendarP = String.fromCharCode(111,98,109,99,95,55,95,50,51,0);
    let xvodE = true;
    let regeng7 = 3;
    let private_lK = 5;
    let tcopy_bx = new Map([[String.fromCharCode(115,113,108,105,116,101,114,101,98,97,115,101,114,95,48,95,50,49,0),false ], [String.fromCharCode(117,95,56,95,115,116,114,104,97,115,104,0),true ], [String.fromCharCode(117,110,114,111,108,108,101,100,95,50,95,57,48,0),false ]]);
    let containerl = String.fromCharCode(116,117,110,110,101,108,95,55,95,49,50,0);
    let taiwanl = String.fromCharCode(119,95,49,50,95,118,111,114,98,105,115,0);
    let penaltyshootm = new Map([[String.fromCharCode(109,95,54,49,95,114,117,110,110,105,110,103,0),String.fromCharCode(101,109,105,116,95,117,95,50,52,0)], [String.fromCharCode(100,95,51,53,95,97,108,116,101,114,110,97,116,105,118,101,0),String.fromCharCode(104,95,54,49,95,115,116,114,117,99,116,0)]]);
    let libturbomodulejsijnix = String.fromCharCode(101,95,54,52,95,101,110,117,109,0);
    let cornershootl = 3.0;
    let mbjscommonk = String.fromCharCode(98,95,51,55,95,100,97,105,108,121,0);
    let armvaS = String.fromCharCode(97,95,49,54,95,105,110,115,101,114,116,115,0);
    let mintegral7 = true;
   while (!Array.from(tcopy_bx.values()).includes(regeng7)) {
      regeng7 += libturbomodulejsijnix.length;
      break;
   }
       let eighteens = [String.fromCharCode(111,112,116,103,114,111,117,112,95,102,95,50,51,0), String.fromCharCode(110,111,110,99,101,95,122,95,53,48,0), String.fromCharCode(102,108,111,111,114,115,95,117,95,55,53,0)];
       let sourceb = 3;
       let statisticsm = String.fromCharCode(115,95,51,52,95,112,97,99,105,110,103,0);
          let catalog9 = [String.fromCharCode(112,95,55,56,95,115,117,110,114,105,115,101,115,101,116,0), String.fromCharCode(117,95,54,53,95,118,97,105,108,97,98,105,108,105,116,121,0)];
         sourceb += catalog9.length & 2;
         eighteens = [3];
         sourceb |= sourceb;
         eighteens = [eighteens.length & 2];
          let unimplementedview8 = 0.0;
         eighteens = [eighteens.length ^ sourceb];
         unimplementedview8 -= parseFloat(`${3}`);
          let episodeI = String.fromCharCode(99,108,105,112,112,105,110,103,110,111,100,101,95,57,95,49,51,0);
          let vignetteb = new Map([[String.fromCharCode(116,98,117,102,95,51,95,52,0),632], [String.fromCharCode(97,116,116,97,99,104,101,100,95,110,95,49,49,0),995], [String.fromCharCode(99,111,100,101,98,111,111,107,115,95,114,95,52,55,0),238]]);
          let with_d75 = 3.0;
         sourceb >>= Math.min(1, Math.abs(eighteens.length + vignetteb.size));
         episodeI += `${1 / (Math.max(2, episodeI.length))}`;
         vignetteb[episodeI] = episodeI.length;
         with_d75 -= parseInt(`${with_d75}`);
      while (statisticsm.startsWith(`${eighteens.length}`)) {
         eighteens = [1 - sourceb];
         break;
      }
          let entryH = true;
         sourceb |= statisticsm.length - 1;
       let reactnativeratings4 = String.fromCharCode(117,110,99,108,105,112,112,101,100,95,103,95,55,48,0);
      iconcalendarP = `${penaltyshootm.size}`;
      regeng7 *= taiwanl.length;
   while (3 <= (containerl.length - 1)) {
      private_lK ^= 1;
      break;
   }
       let code4 = [557, 709, 559];
          let pathJ = String.fromCharCode(109,97,107,101,114,112,109,95,107,95,55,57,0);
          let suggestionP = String.fromCharCode(112,114,111,112,101,114,116,105,101,115,95,108,95,54,53,0);
         code4 = [pathJ.length >> (Math.min(Math.abs(3), 4))];
         pathJ += `${suggestionP.length + 2}`;
         suggestionP = `${suggestionP.length << (Math.min(Math.abs(1), 5))}`;
      while (1 == (code4.length + 3) || (code4.length + code4.length) == 3) {
         code4 = [code4.length];
         break;
      }
      do {
         code4.push(1 ^ code4.length);
         if (code4.length == 4363391) {
            break;
         }
      } while ((1 < (code4.length / (Math.max(4, code4.length)))) && (code4.length == 4363391));
      yellowanimationlivek = libturbomodulejsijnix == containerl;
       let basketballmatchdetailbgd = [118, 781, 607];
       let mapbufferO = String.fromCharCode(109,95,51,51,95,100,101,102,108,97,116,101,0);
       let iconsharefriendsx = false;
      for (let j = 0; j < 3; j++) {
         basketballmatchdetailbgd.push(((iconsharefriendsx ? 1 : 1) + 2));
      }
       let awayteamfieldb = true;
       let yellowH = false;
         iconsharefriendsx = (63 == ((awayteamfieldb ? mapbufferO.length : 63) << (Math.min(mapbufferO.length, 1))));
       let containerJ = String.fromCharCode(118,95,54,53,95,111,98,118,105,111,117,115,108,121,0);
       let mbbidQ = String.fromCharCode(100,111,103,115,95,52,95,56,54,0);
       let basketball8 = new Map([[String.fromCharCode(113,95,49,48,48,95,105,110,108,105,103,104,116,0),String.fromCharCode(112,97,114,97,109,101,116,101,114,95,111,95,55,49,0)], [String.fromCharCode(117,100,105,111,95,114,95,57,48,0),String.fromCharCode(107,95,49,49,95,100,111,109,101,115,116,105,99,0)], [String.fromCharCode(104,112,101,108,95,51,95,52,57,0),String.fromCharCode(112,101,97,99,104,95,108,95,55,56,0)]]);
          let yellowtored7 = 4.0;
          let searchx = new Map([[String.fromCharCode(100,101,99,101,108,101,114,97,116,101,100,95,112,95,54,53,0),863], [String.fromCharCode(100,95,49,48,95,97,109,111,117,110,116,0),458]]);
         mbbidQ = `${mapbufferO.length}`;
         yellowtored7 *= parseFloat(`${parseInt(`${yellowtored7}`) / (Math.max(1, searchx.size))}`);
         searchx[`${yellowtored7}`] = 3 << (Math.min(1, Math.abs(parseInt(`${yellowtored7}`))));
       let brightnessZ = 0.0;
         yellowH = basketball8.size < 6;
         basketball8 = new Map([[`${basketballmatchdetailbgd.length}`, basketballmatchdetailbgd.length * mapbufferO.length]]);
      taiwanl = `${iconcalendarP.length + tcopy_bx.size}`;
   if (containerl.includes(`${xvodE}`)) {
      xvodE = 91 == iconcalendarP.length;
   }

    setIsError(true);
       let activeY = [172, 715, 73];
       let leaguedetailsbgP = 0;
      do {
         activeY.push(1 / (Math.max(4, leaguedetailsbgP)));
         if (3830660 == activeY.length) {
            break;
         }
      } while ((3830660 == activeY.length) && (!activeY.includes(leaguedetailsbgP)));
      for (let x = 0; x < 1; x++) {
         leaguedetailsbgP %= Math.max(leaguedetailsbgP & activeY.length, 5);
      }
         activeY.push(activeY.length);
         leaguedetailsbgP <<= Math.min(Math.abs(3), 3);
          let accepted8 = 1;
          let analyticsw = String.fromCharCode(116,95,49,50,95,111,100,109,108,0);
         leaguedetailsbgP += 1;
         accepted8 >>= Math.min(4, Math.abs(analyticsw.length | 3));
         analyticsw = "2";
         activeY = [leaguedetailsbgP / (Math.max(activeY.length, 10))];
      taiwanl += `${penaltyshootm.size / (Math.max(taiwanl.length, 4))}`;
      iconcalendarP = `${((xvodE ? 5 : 1) * regeng7)}`;
      libturbomodulejsijnix += `${taiwanl.length}`;
   do {
      iconcalendarP += `${tcopy_bx.size * 3}`;
      if (iconcalendarP.length == 140345) {
         break;
      }
   } while ((iconcalendarP.length == 140345) && (taiwanl != iconcalendarP));
   while (yellowanimationlivek) {
      iconcalendarP += `${2 >> (Math.min(4, Math.abs(regeng7)))}`;
      break;
   }
   do {
      iconcalendarP += `${(iconcalendarP == String.fromCharCode(52,0) ? iconcalendarP.length : (yellowanimationlivek ? 1 : 3))}`;
      if (iconcalendarP == String.fromCharCode(98,108,108,107,53,116,116,52,54,118,0)) {
         break;
      }
   } while ((libturbomodulejsijnix == String.fromCharCode(112,0)) && (iconcalendarP == String.fromCharCode(98,108,108,107,53,116,116,52,54,118,0)));
      tcopy_bx[`${private_lK}`] = (private_lK << (Math.min(4, Math.abs((yellowanimationlivek ? 1 : 5)))));

    setIsLoading(false);
      tcopy_bx[taiwanl] = taiwanl.length;
      tcopy_bx = new Map([[`${tcopy_bx.size}`, tcopy_bx.size + 3]]);
      iconcalendarP += `${regeng7 % (Math.max(3, 1))}`;
   for (let i = 0; i < 3; i++) {
      regeng7 *= private_lK >> (Math.min(5, Math.abs(1)));
   }
   do {
       let whiteanimationliveg = 3.0;
       let loginn = false;
       let typingloadingd = 2.0;
         whiteanimationliveg /= Math.max(5, parseFloat(`${2 * parseInt(`${whiteanimationliveg}`)}`));
      for (let v = 0; v < 3; v++) {
          let armva4 = String.fromCharCode(100,101,97,100,108,105,110,101,95,102,95,56,51,0);
          let loadingR = 0.0;
          let informationj = String.fromCharCode(122,95,54,49,95,99,97,99,104,105,110,103,0);
         loginn = typingloadingd == 62.65;
         armva4 += `${1 + informationj.length}`;
         loadingR -= informationj.length << (Math.min(2, Math.abs(parseInt(`${loadingR}`))));
      }
      while (1.88 == whiteanimationliveg) {
         typingloadingd /= Math.max(2, (parseFloat(`${(loginn ? 1 : 3) % (Math.max(parseInt(`${typingloadingd}`), 6))}`)));
         break;
      }
          let executor0 = [String.fromCharCode(114,95,57,50,95,119,111,114,107,0), String.fromCharCode(116,112,101,108,95,120,95,54,50,0), String.fromCharCode(105,95,51,51,95,112,114,111,103,114,97,109,115,0)];
          let disconnectedlogoY = 2;
          let theme1 = String.fromCharCode(98,105,110,100,95,102,95,52,52,0);
         typingloadingd += parseFloat(`${parseInt(`${whiteanimationliveg}`) + 2}`);
         executor0.push(executor0.length);
         disconnectedlogoY >>= Math.min(2, Math.abs(disconnectedlogoY % (Math.max(executor0.length, 1))));
         theme1 = `${(theme1 == String.fromCharCode(95,0) ? executor0.length : theme1.length)}`;
      do {
         whiteanimationliveg -= parseFloat(`${3 % (Math.max(3, parseInt(`${typingloadingd}`)))}`);
         if (whiteanimationliveg == 1327099.0) {
            break;
         }
      } while ((3.50 <= whiteanimationliveg) && (whiteanimationliveg == 1327099.0));
      tcopy_bx = new Map([[iconcalendarP, iconcalendarP.length ^ 1]]);
      if (tcopy_bx.size == 1849846) {
         break;
      }
   } while (((tcopy_bx.size - 5) == 5) && (tcopy_bx.size == 1849846));
      xvodE = libturbomodulejsijnix.length < tcopy_bx.size;
   do {
      containerl += `${penaltyshootm.size}`;
      if (String.fromCharCode(115,49,57,106,114,101,111,0) == containerl) {
         break;
      }
   } while ((!containerl.startsWith(taiwanl)) && (String.fromCharCode(115,49,57,106,114,101,111,0) == containerl));

    props.onLiveEnd?.();
       let mbnativeX = 4;
         mbnativeX |= mbnativeX % 1;
      if ((mbnativeX / (Math.max(4, mbnativeX))) >= 1) {
          let actionsp = String.fromCharCode(112,95,49,50,95,98,117,103,115,0);
          let mbsplashX = 1.0;
         mbnativeX -= actionsp.length % 1;
         actionsp += "2";
         mbsplashX /= Math.max(5, parseFloat(`${2 >> (Math.min(Math.abs(parseInt(`${mbsplashX}`)), 2))}`));
      }
         mbnativeX >>= Math.min(Math.abs(mbnativeX >> (Math.min(Math.abs(2), 4))), 3);
      containerl = `${(iconcalendarP == String.fromCharCode(78,0) ? taiwanl.length : iconcalendarP.length)}`;
      penaltyshootm[containerl] = (containerl == String.fromCharCode(99,0) ? containerl.length : penaltyshootm.size);
   while ((containerl.length * 2) >= 2) {
      private_lK >>= Math.min(iconcalendarP.length, 4);
      break;
   }
   for (let v = 0; v < 3; v++) {
      xvodE = iconcalendarP.includes(`${private_lK}`);
   }
      yellowanimationlivek = (tcopy_bx.size >> (Math.min(1, Math.abs(private_lK)))) < 78;
      taiwanl += "2";
   for (let j = 0; j < 1; j++) {
       let carouselu = String.fromCharCode(111,118,101,114,115,104,111,111,116,95,109,95,51,52,0);
       let servicek = new Map([[String.fromCharCode(116,95,52,54,95,112,97,116,104,109,116,117,0),515], [String.fromCharCode(110,95,56,50,95,116,114,105,0),899], [String.fromCharCode(111,112,117,115,101,110,99,95,116,95,49,55,0),859]]);
       let analytics2 = 4.0;
       let cancelw = 2.0;
      if (servicek[`${cancelw}`] != null) {
         servicek[`${carouselu}`] = servicek.size;
      }
      do {
          let iconclosewhitebgN = true;
          let sentryu = 4.0;
          let sheetf = String.fromCharCode(100,101,114,105,118,101,100,95,102,95,54,0);
          let cancelx = String.fromCharCode(117,95,57,52,95,114,111,117,110,100,110,101,115,115,0);
          let transferM = new Map([[String.fromCharCode(119,95,57,49,95,112,97,114,116,105,116,105,111,110,105,110,103,0),930], [String.fromCharCode(100,101,112,111,115,105,116,95,110,95,53,54,0),789], [String.fromCharCode(115,97,109,112,108,101,95,57,95,50,55,0),475]]);
         carouselu += `${sheetf.length}`;
         iconclosewhitebgN = transferM.size < 57;
         sentryu -= parseFloat(`${cancelx.length}`);
         sheetf = `${(parseInt(`${sentryu}`) ^ (iconclosewhitebgN ? 5 : 4))}`;
         cancelx = `${((iconclosewhitebgN ? 3 : 1) / (Math.max(transferM.size, 7)))}`;
         if (4773901 == carouselu.length) {
            break;
         }
      } while ((4773901 == carouselu.length) && (servicek.size <= carouselu.length));
      for (let m = 0; m < 3; m++) {
         analytics2 /= Math.max(1, parseInt(`${cancelw}`));
      }
      for (let w = 0; w < 1; w++) {
          let detailsc = true;
          let champion6 = String.fromCharCode(117,95,56,57,95,105,110,116,101,114,97,99,116,105,118,101,0);
         analytics2 += (String.fromCharCode(108,0) == carouselu ? carouselu.length : servicek.size);
         detailsc = !champion6.endsWith(`${detailsc}`);
         champion6 = `${((detailsc ? 1 : 2) | 3)}`;
      }
      do {
         carouselu = `${parseInt(`${analytics2}`)}`;
         if (String.fromCharCode(97,119,103,97,49,122,51,116,104,0) == carouselu) {
            break;
         }
      } while ((5 <= (1 - carouselu.length) && (1 ^ carouselu.length) <= 3) && (String.fromCharCode(97,119,103,97,49,122,51,116,104,0) == carouselu));
       let linkc = String.fromCharCode(112,97,116,116,101,114,110,115,95,120,95,53,48,0);
       let moduleso = String.fromCharCode(106,95,56,52,95,112,105,99,116,117,114,101,0);
      if (cancelw <= 1.51) {
         carouselu += `${servicek.size}`;
      }
      do {
         cancelw += carouselu.length | 1;
         if (cancelw == 1263637.0) {
            break;
         }
      } while ((cancelw == 1263637.0) && ((5 | moduleso.length) == 5));
      for (let u = 0; u < 1; u++) {
         linkc += `${(String.fromCharCode(53,0) == linkc ? parseInt(`${cancelw}`) : linkc.length)}`;
      }
          let reactnativeratingsC = new Map([[String.fromCharCode(97,117,100,105,111,95,56,95,56,51,0),946], [String.fromCharCode(100,97,117,100,95,52,95,51,50,0),738], [String.fromCharCode(107,95,50,54,95,116,114,97,100,101,0),725]]);
         analytics2 -= linkc.length / (Math.max(5, carouselu.length));
         reactnativeratingsC = new Map([[`${reactnativeratingsC.size}`, 3]]);
       let libreanimatedl = 3.0;
       let defaultteamI = 5.0;
         servicek = new Map([[moduleso, moduleso.length - linkc.length]]);
      private_lK &= servicek.size;
   }

  };

  const onFullscreenPlayerDidDismiss = () => {
       let iconstar1 = String.fromCharCode(110,111,116,101,115,95,107,95,49,0);
    let libfolly_ = 3;
    let videocommonT = true;
    let vietnamm = 3.0;
    let refreshu = 5.0;
    let applicationp = String.fromCharCode(115,101,113,117,101,110,99,101,114,95,115,95,53,0);
    let sentrya = 1.0;
    let refreshj = String.fromCharCode(97,110,99,104,111,114,115,95,117,95,53,56,0);
    let libreactnativejniq = String.fromCharCode(114,95,50,49,95,104,105,103,104,108,105,103,104,116,0);
    let yellowvideoliveD = [737, 328];
    let guidef = 4;
    let streamingC = 5;
    let libavutily = new Map([[String.fromCharCode(120,99,111,114,114,95,119,95,49,55,0),369], [String.fromCharCode(110,95,52,48,95,116,104,114,111,119,0),516], [String.fromCharCode(99,95,50,53,95,114,117,98,98,101,114,0),507]]);
    let champione = [700, 143];
    let canvasP = 4.0;
    let anythinki = String.fromCharCode(112,95,52,57,95,112,114,111,99,101,115,115,0);
   do {
       let basketballawayteamS = String.fromCharCode(103,95,52,54,95,116,114,116,97,98,108,101,0);
       let klevin1 = [360, 326];
       let benefitp = String.fromCharCode(120,95,52,48,95,105,102,111,114,119,97,114,100,0);
       let dragclosek = [String.fromCharCode(105,110,99,111,110,115,105,115,116,101,110,99,121,95,120,95,56,56,0), String.fromCharCode(104,95,49,55,95,97,112,112,118,101,121,111,114,0)];
          let buttonh = String.fromCharCode(99,95,54,51,95,97,115,121,110,99,100,105,115,112,108,97,121,107,105,116,0);
          let actionsU = String.fromCharCode(98,95,52,0);
          let scheduleJ = new Map([[String.fromCharCode(107,95,51,49,95,100,105,102,102,105,110,103,0),55], [String.fromCharCode(109,101,100,105,97,95,100,95,49,53,0),44]]);
         dragclosek.push(scheduleJ.size % 2);
         buttonh += `${buttonh.length * actionsU.length}`;
         actionsU += `${(actionsU == String.fromCharCode(55,0) ? actionsU.length : buttonh.length)}`;
         scheduleJ = new Map([[buttonh, buttonh.length]]);
         dragclosek = [klevin1.length - dragclosek.length];
      while (4 < (klevin1.length / (Math.max(benefitp.length, 8))) && 4 < (klevin1.length / (Math.max(benefitp.length, 4)))) {
         benefitp = `${benefitp.length}`;
         break;
      }
          let chatroombackgroundT = String.fromCharCode(122,95,50,56,95,100,97,116,97,108,0);
          let nodea = new Map([[String.fromCharCode(115,105,103,110,97,116,117,114,101,95,113,95,53,0),39], [String.fromCharCode(109,101,100,105,97,110,95,55,95,54,49,0),545]]);
         benefitp = "1";
         chatroombackgroundT = `${nodea.size}`;
         nodea = new Map([[`${nodea.size}`, nodea.size]]);
      do {
         klevin1 = [klevin1.length ^ 1];
         if (2471236 == klevin1.length) {
            break;
         }
      } while ((2471236 == klevin1.length) && (5 >= (klevin1.length | 2) && 2 >= (benefitp.length | klevin1.length)));
          let playlistb = 3.0;
         basketballawayteamS = "2";
         playlistb *= parseFloat(`${parseInt(`${playlistb}`) * 2}`);
      do {
          let disconnectedlogoM = String.fromCharCode(112,95,50,57,95,101,100,105,116,105,110,103,0);
          let icopy_iw = false;
          let executorg = 3.0;
         klevin1 = [basketballawayteamS.length << (Math.min(Math.abs(1), 3))];
         disconnectedlogoM += `${(2 >> (Math.min(4, Math.abs((icopy_iw ? 5 : 1)))))}`;
         icopy_iw = !icopy_iw;
         executorg += ((icopy_iw ? 3 : 1) % (Math.max(7, disconnectedlogoM.length)));
         if (1168533 == klevin1.length) {
            break;
         }
      } while ((1 == klevin1.length) && (1168533 == klevin1.length));
         benefitp = `${klevin1.length - 1}`;
      for (let t = 0; t < 1; t++) {
         dragclosek.push((String.fromCharCode(67,0) == basketballawayteamS ? basketballawayteamS.length : dragclosek.length));
      }
         klevin1.push(1 - basketballawayteamS.length);
      for (let g = 0; g < 3; g++) {
         benefitp = `${(basketballawayteamS == String.fromCharCode(103,0) ? basketballawayteamS.length : klevin1.length)}`;
      }
         basketballawayteamS = `${basketballawayteamS.length / (Math.max(1, 2))}`;
      libreactnativejniq += `${guidef | 3}`;
      if (libreactnativejniq.length == 1849939) {
         break;
      }
   } while ((2 > libreactnativejniq.length) && (libreactnativejniq.length == 1849939));
      yellowvideoliveD.push(libfolly_ + parseInt(`${sentrya}`));
       let animationL = false;
       let overr = String.fromCharCode(97,97,99,116,97,98,95,110,95,54,50,0);
       let cornershoots = new Map([[String.fromCharCode(115,101,114,105,97,108,105,122,101,114,95,54,95,51,51,0),892], [String.fromCharCode(98,95,56,54,95,113,115,118,100,101,99,0),733], [String.fromCharCode(111,95,53,57,95,118,98,114,117,115,104,0),966]]);
       let gesturep = new Map([[String.fromCharCode(97,95,49,48,95,109,111,115,97,105,99,0),487], [String.fromCharCode(115,117,98,115,101,113,117,101,110,116,95,121,95,54,49,0),141]]);
         overr += "2";
      while (2 > gesturep.size) {
         animationL = !animationL;
         break;
      }
      for (let o = 0; o < 3; o++) {
         cornershoots = new Map([[`${cornershoots.size}`, 3 & overr.length]]);
      }
       let predictionlosst = 1.0;
      do {
         overr += `${gesturep.size}`;
         if (overr.length == 4296530) {
            break;
         }
      } while ((5 > (parseInt(`${predictionlosst}`) / (Math.max(overr.length, 6))) || (5 | overr.length) > 5) && (overr.length == 4296530));
      yellowvideoliveD = [1];
   if (guidef >= 3) {
      guidef -= iconstar1.length >> (Math.min(Math.abs(3), 3));
   }
   for (let m = 0; m < 2; m++) {
       let activeh = String.fromCharCode(100,95,53,53,95,109,105,110,109,97,120,0);
         activeh += `${activeh.length >> (Math.min(activeh.length, 1))}`;
      while (activeh.length <= activeh.length) {
          let controls1 = 4.0;
          let profilepicm = String.fromCharCode(110,95,50,49,95,105,100,97,116,97,0);
          let libswscaleM = [166, 79, 42];
          let k_viewu = new Map([[String.fromCharCode(119,95,55,49,95,100,97,109,112,0),662], [String.fromCharCode(104,95,51,50,95,115,100,101,115,0),986], [String.fromCharCode(115,99,97,110,95,101,95,56,0),649]]);
          let nativemodulej = true;
         activeh += `${((nativemodulej ? 1 : 5) / 3)}`;
         controls1 -= parseFloat(`${profilepicm.length}`);
         profilepicm = `${parseInt(`${controls1}`)}`;
         libswscaleM = [parseInt(`${controls1}`) * profilepicm.length];
         k_viewu[profilepicm] = 1;
         nativemodulej = 59 >= k_viewu.size;
         break;
      }
          let philippinesz = String.fromCharCode(102,95,53,52,95,100,101,99,111,100,105,110,103,0);
          let pressureI = [962, 699, 820];
         activeh = `${1 | pressureI.length}`;
         philippinesz += `${philippinesz.length}`;
         pressureI = [3];
      libavutily[libreactnativejniq] = 1 + libreactnativejniq.length;
   }
   if (parseInt(`${sentrya}`) > applicationp.length) {
      sentrya += guidef % 3;
   }
   if (yellowvideoliveD.length == streamingC) {
      yellowvideoliveD = [2];
   }
       let orangetickl = new Map([[String.fromCharCode(117,110,105,116,121,95,120,95,52,56,0),String.fromCharCode(105,95,56,51,95,114,105,98,98,111,110,0)], [String.fromCharCode(108,95,50,95,114,103,98,116,101,115,116,0),String.fromCharCode(112,114,111,100,117,99,116,102,95,50,95,49,52,0)]]);
       let videojs4 = new Map([[String.fromCharCode(116,104,101,114,101,95,120,95,50,0),959], [String.fromCharCode(115,117,98,116,105,116,108,101,95,115,95,48,0),498]]);
      for (let p = 0; p < 1; p++) {
         videojs4 = new Map([[`${videojs4.size}`, videojs4.size << (Math.min(1, Math.abs(orangetickl.size)))]]);
      }
      if (5 == (orangetickl.size + 2)) {
         orangetickl = new Map([[`${orangetickl.size}`, orangetickl.size]]);
      }
      applicationp = `${libreactnativejniq.length + refreshj.length}`;
   do {
      vietnamm += parseFloat(`${streamingC}`);
      if (vietnamm == 2089595.0) {
         break;
      }
   } while (((vietnamm * 3.6) >= 3.16) && (vietnamm == 2089595.0));
      streamingC += libavutily.size;
   for (let l = 0; l < 2; l++) {
      guidef |= libreactnativejniq.length;
   }
      iconstar1 += "3";
      yellowvideoliveD = [libavutily.size + applicationp.length];
       let modules8 = String.fromCharCode(101,95,52,54,95,111,110,116,101,120,116,0);
      while (modules8 != String.fromCharCode(53,0) && modules8.length > 5) {
          let libavfilterk = String.fromCharCode(115,112,101,99,105,97,108,95,114,95,50,50,0);
          let tickb = [939, 216];
          let exampleimagel = String.fromCharCode(118,95,49,51,95,106,107,101,110,99,0);
          let rootx = 5;
          let half7 = 0.0;
         modules8 += `${modules8.length}`;
         libavfilterk = `${1 % (Math.max(1, tickb.length))}`;
         tickb.push(2 >> (Math.min(4, exampleimagel.length)));
         exampleimagel = `${(String.fromCharCode(50,0) == libavfilterk ? rootx : libavfilterk.length)}`;
         rootx >>= Math.min(1, Math.abs(libavfilterk.length | tickb.length));
         half7 += exampleimagel.length;
         break;
      }
      while (modules8.length == 2 || modules8.length == 2) {
         modules8 = `${modules8.length / (Math.max(1, modules8.length))}`;
         break;
      }
      while (modules8 == modules8) {
         modules8 = "3";
         break;
      }
      libfolly_ &= 1;
   while (!applicationp.includes(`${libfolly_}`)) {
       let models7 = String.fromCharCode(116,95,49,54,95,104,100,101,99,0);
       let placeholdern = String.fromCharCode(109,105,108,108,105,115,101,99,111,110,100,115,95,116,95,51,48,0);
       let selected4 = String.fromCharCode(121,95,50,56,95,115,101,113,117,101,110,99,101,114,0);
       let backgroundq = String.fromCharCode(100,101,108,101,103,97,116,111,114,95,120,95,53,48,0);
         placeholdern = `${selected4.length - 2}`;
          let overlaye = new Map([[String.fromCharCode(99,95,52,49,95,112,114,111,109,112,116,0),false ], [String.fromCharCode(98,95,55,54,95,112,111,110,103,0),true ]]);
         placeholdern = `${placeholdern.length - backgroundq.length}`;
         overlaye[`${overlaye.size}`] = 3 & overlaye.size;
         placeholdern += `${selected4.length | placeholdern.length}`;
      for (let l = 0; l < 1; l++) {
         selected4 += `${selected4.length - 3}`;
      }
      while (!placeholdern.startsWith(models7)) {
          let room_ = [643, 306, 751];
          let phone1 = new Map([[String.fromCharCode(99,111,108,108,101,99,116,111,114,95,99,95,53,52,0),931], [String.fromCharCode(118,95,53,51,0),208], [String.fromCharCode(115,95,53,95,98,97,99,107,105,110,103,0),639]]);
          let productP = 5;
         models7 = `${phone1.size % 2}`;
         room_ = [2 << (Math.min(Math.abs(productP), 1))];
         phone1[`${productP}`] = productP >> (Math.min(3, Math.abs(2)));
         break;
      }
      if (placeholdern == String.fromCharCode(50,0)) {
         models7 = `${placeholdern.length << (Math.min(models7.length, 3))}`;
      }
         selected4 = `${(backgroundq == String.fromCharCode(106,0) ? placeholdern.length : backgroundq.length)}`;
         placeholdern = `${selected4.length / 3}`;
       let vignetter = 4;
          let containerG = new Map([[String.fromCharCode(107,95,50,51,95,116,114,105,101,0),String.fromCharCode(122,95,56,53,95,102,105,110,100,97,115,115,111,99,0)], [String.fromCharCode(109,105,103,114,97,116,105,110,103,95,104,95,51,50,0),String.fromCharCode(100,101,115,101,114,105,97,108,105,122,101,100,95,122,95,57,0)]]);
          let backwards = false;
          let goalb = new Map([[String.fromCharCode(117,116,102,116,111,95,108,95,53,52,0),true ], [String.fromCharCode(115,99,97,110,110,101,114,95,108,95,51,53,0),false ]]);
         selected4 += `${goalb.size % (Math.max(2, 1))}`;
         containerG = new Map([[`${containerG.size}`, containerG.size]]);
         backwards = 64 > containerG.size;
      while (5 >= vignetter) {
         vignetter /= Math.max(selected4.length, 5);
         break;
      }
          let klevin4 = String.fromCharCode(105,95,49,51,95,109,117,116,101,0);
          let interstitialX = String.fromCharCode(115,95,50,53,95,115,111,98,101,108,0);
          let imagewatchliveM = String.fromCharCode(102,108,97,99,101,110,99,95,117,95,55,56,0);
         placeholdern = `${vignetter - 3}`;
         klevin4 = `${(String.fromCharCode(98,0) == interstitialX ? imagewatchliveM.length : interstitialX.length)}`;
         imagewatchliveM += `${imagewatchliveM.length}`;
      libfolly_ |= parseInt(`${sentrya}`);
      break;
   }
      libreactnativejniq += `${libavutily.size / (Math.max(9, parseInt(`${refreshu}`)))}`;
   while ((libavutily.size | refreshj.length) < 1) {
       let zhengpianZ = 5.0;
       let gifgoalbgJ = String.fromCharCode(119,101,98,102,105,108,101,95,121,95,57,55,0);
       let stylesK = [873, 22];
       let subbasketballplayerw = 3;
      do {
         stylesK.push(parseInt(`${zhengpianZ}`));
         if (stylesK.length == 3790574) {
            break;
         }
      } while ((stylesK.length == 3790574) && (1 == stylesK.length));
         zhengpianZ -= parseInt(`${zhengpianZ}`) | 3;
      do {
          let yellowB = String.fromCharCode(99,95,57,55,95,102,97,99,116,111,114,0);
          let graphF = String.fromCharCode(101,95,56,95,116,104,114,101,101,100,111,115,116,114,0);
         zhengpianZ += (String.fromCharCode(84,0) == yellowB ? yellowB.length : stylesK.length);
         graphF += `${graphF.length}`;
         if (zhengpianZ == 4366405.0) {
            break;
         }
      } while (((5.11 * zhengpianZ) == 4.12) && (zhengpianZ == 4366405.0));
      do {
         stylesK = [parseInt(`${zhengpianZ}`)];
         if (stylesK.length == 3410647) {
            break;
         }
      } while ((stylesK.length == 3410647) && (2 < stylesK.length));
      while (4 > stylesK.length) {
         stylesK = [2];
         break;
      }
       let foundY = String.fromCharCode(101,95,50,50,95,117,118,109,118,0);
       let rightL = String.fromCharCode(98,95,56,53,95,111,118,101,114,105,100,100,101,110,0);
         gifgoalbgJ = `${gifgoalbgJ.length * foundY.length}`;
       let cornerkickJ = String.fromCharCode(112,114,101,97,109,98,108,101,95,119,95,52,55,0);
       let launcher8 = String.fromCharCode(109,111,100,101,114,110,95,109,95,55,51,0);
          let sellmathbackgroundf = new Map([[String.fromCharCode(117,95,51,48,95,102,111,117,114,99,99,115,0),285], [String.fromCharCode(100,95,50,53,95,105,102,97,115,116,0),463], [String.fromCharCode(102,95,56,55,95,105,110,116,101,103,101,114,115,0),394]]);
         foundY = `${gifgoalbgJ.length - stylesK.length}`;
         sellmathbackgroundf[`${sellmathbackgroundf.size}`] = sellmathbackgroundf.size;
      while (4 >= cornerkickJ.length) {
         launcher8 += `${1 | subbasketballplayerw}`;
         break;
      }
         launcher8 += `${foundY.length}`;
         gifgoalbgJ = "3";
      refreshj += `${iconstar1.length / 2}`;
      break;
   }
   if ((2.64 * vietnamm) > 4.88 && 2.64 > (vietnamm * refreshu)) {
      vietnamm -= parseFloat(`${3 & guidef}`);
   }
      applicationp = `${libavutily.size << (Math.min(5, Math.abs(parseInt(`${vietnamm}`))))}`;

    dispatch(togglePlayPaused());
      streamingC /= Math.max(2, 1);
   if (1 >= libfolly_) {
      streamingC ^= applicationp.length;
   }
      refreshj += "3";
      refreshu += parseFloat(`${parseInt(`${vietnamm}`)}`);
   if (yellowvideoliveD.length > applicationp.length) {
      applicationp += `${parseInt(`${sentrya}`)}`;
   }
      libfolly_ %= Math.max(2 + libfolly_, 3);
      guidef |= 1;
   while ((yellowvideoliveD.length + 2) > 4) {
      yellowvideoliveD = [guidef - yellowvideoliveD.length];
      break;
   }
   while ((refreshu * 5) > 4.85) {
      sentrya -= libreactnativejniq.length << (Math.min(iconstar1.length, 1));
      break;
   }
      iconstar1 = `${libfolly_}`;
       let code3 = true;
       let loadingspinnerm = String.fromCharCode(99,104,101,99,107,95,53,95,52,49,0);
       let release_fG = 3.0;
         loadingspinnerm = `${((code3 ? 4 : 1) << (Math.min(loadingspinnerm.length, 5)))}`;
      do {
         release_fG /= Math.max(((code3 ? 4 : 3) + parseInt(`${release_fG}`)), 4);
         if (791247.0 == release_fG) {
            break;
         }
      } while ((code3) && (791247.0 == release_fG));
         loadingspinnerm += `${((code3 ? 2 : 4) % 1)}`;
      if (!loadingspinnerm.startsWith(`${release_fG}`)) {
         release_fG /= Math.max(5, loadingspinnerm.length);
      }
      do {
         loadingspinnerm += `${(String.fromCharCode(101,0) == loadingspinnerm ? parseInt(`${release_fG}`) : loadingspinnerm.length)}`;
         if (loadingspinnerm.length == 1530058) {
            break;
         }
      } while ((loadingspinnerm.length == 1530058) && (loadingspinnerm.endsWith(`${release_fG}`)));
      while (!loadingspinnerm.includes(`${code3}`)) {
         code3 = (release_fG - loadingspinnerm.length) >= 73.35;
         break;
      }
          let backward7 = 0.0;
          let notificationgrayF = true;
         code3 = 5.55 < backward7;
         backward7 /= Math.max((3 | (notificationgrayF ? 1 : 5)), 2);
      while (code3) {
          let downloadr = String.fromCharCode(120,112,117,98,95,117,95,55,56,0);
          let libswscaleX = true;
          let largesoundF = [115, 61, 901];
          let themeF = String.fromCharCode(100,95,49,52,95,115,97,118,101,109,101,100,105,97,0);
          let logoutm = String.fromCharCode(112,114,111,116,111,98,117,102,95,118,95,51,53,0);
         release_fG *= (themeF == String.fromCharCode(52,0) ? largesoundF.length : themeF.length);
         downloadr = `${((libswscaleX ? 5 : 4) >> (Math.min(Math.abs(1), 2)))}`;
         libswscaleX = downloadr.length <= 86 && libswscaleX;
         largesoundF.push(((libswscaleX ? 4 : 4) - logoutm.length));
         logoutm += `${(logoutm.length | (libswscaleX ? 3 : 1))}`;
         break;
      }
      while (!code3) {
          let icondefaultthumbnail_ = 5;
          let awayteamfieldR = new Map([[String.fromCharCode(114,101,108,117,95,119,95,50,52,0),348], [String.fromCharCode(111,95,49,52,95,109,105,103,114,97,116,101,0),152], [String.fromCharCode(106,112,101,103,108,115,95,114,95,57,56,0),0]]);
          let mbbannera = String.fromCharCode(116,97,103,103,101,100,95,50,95,53,48,0);
          let reactnativeratingsu = 5;
          let long_98 = 0.0;
         release_fG *= 3;
         icondefaultthumbnail_ ^= awayteamfieldR.size << (Math.min(Math.abs(1), 4));
         awayteamfieldR[mbbannera] = 2 * mbbannera.length;
         reactnativeratingsu |= 3 * icondefaultthumbnail_;
         long_98 *= (parseFloat(`${String.fromCharCode(85,0) == mbbannera ? reactnativeratingsu : mbbannera.length}`));
         break;
      }
      yellowvideoliveD = [yellowvideoliveD.length % (Math.max(3, 1))];
       let emojip = [933, 403];
      do {
         emojip.push(2);
         if (265597 == emojip.length) {
            break;
         }
      } while ((!emojip.includes(emojip.length)) && (265597 == emojip.length));
      if (!emojip.includes(emojip.length)) {
          let views0 = String.fromCharCode(105,110,115,116,97,110,116,95,114,95,52,53,0);
          let statisticsinactivet = 3;
         emojip.push(statisticsinactivet);
         views0 = "2";
         statisticsinactivet /= Math.max(2, 3);
      }
         emojip.push(emojip.length);
      streamingC %= Math.max(3, parseInt(`${vietnamm}`) / (Math.max(libreactnativejniq.length, 1)));
      guidef += yellowvideoliveD.length;
   if (2 > (5 >> (Math.min(5, Math.abs(streamingC)))) && !videocommonT) {
       let gradleD = String.fromCharCode(108,97,112,108,97,99,101,95,57,95,55,52,0);
      while (gradleD != gradleD) {
         gradleD += `${gradleD.length / 1}`;
         break;
      }
         gradleD = `${gradleD.length}`;
          let logoN = 0.0;
         gradleD = `${gradleD.length}`;
         logoN *= 1;
      videocommonT = 87.84 == refreshu || videocommonT;
   }
   do {
      vietnamm /= Math.max(2, parseFloat(`${2 & yellowvideoliveD.length}`));
      if (2261667.0 == vietnamm) {
         break;
      }
   } while ((2261667.0 == vietnamm) && (2.26 >= (4.60 - vietnamm) && 4.60 >= vietnamm));
   do {
      applicationp += `${streamingC}`;
      if (1089131 == applicationp.length) {
         break;
      }
   } while ((1089131 == applicationp.length) && (champione.length == 3));
   do {
      vietnamm += parseFloat(`${2}`);
      if (3907400.0 == vietnamm) {
         break;
      }
   } while ((3907400.0 == vietnamm) && (vietnamm == 2.15));
   for (let z = 0; z < 3; z++) {
      refreshj = `${champione.length}`;
   }
      champione.push(libavutily.size * applicationp.length);

  };

  const onRetry = () => {
       let plus5 = 5.0;
    let matchdetailbgd = String.fromCharCode(105,110,118,111,107,101,114,95,107,95,51,57,0);
    let airbnbstar2 = String.fromCharCode(109,95,56,49,95,100,111,109,97,105,110,115,0);
    let showv = 5;
    let light0 = String.fromCharCode(103,95,52,55,95,115,117,112,101,114,118,105,101,119,0);
    let libfbA = 0.0;
    let gift0 = new Map([[String.fromCharCode(99,97,114,116,101,115,105,97,110,95,118,95,53,48,0),229], [String.fromCharCode(117,95,55,56,95,114,101,115,111,108,118,101,114,0),528]]);
    let pressurew = String.fromCharCode(111,95,49,95,102,105,101,108,100,109,97,116,99,104,0);
    let arrowups = [125, 662, 214];
    let qaagN = String.fromCharCode(122,95,51,54,95,120,95,53,54,0);
    let episodev = new Map([[String.fromCharCode(99,111,110,118,95,120,95,53,52,0),String.fromCharCode(114,101,113,117,105,114,101,109,101,110,116,115,95,97,95,54,52,0)], [String.fromCharCode(111,95,52,55,95,114,101,103,114,101,115,115,0),String.fromCharCode(113,95,54,55,95,102,108,105,112,0)]]);
    let gifgoal7 = String.fromCharCode(115,107,105,112,112,101,100,95,99,95,56,55,0);
    let humidityC = new Map([[String.fromCharCode(120,95,52,56,95,105,110,101,116,0),328], [String.fromCharCode(106,95,50,49,95,105,110,118,0),764], [String.fromCharCode(115,116,117,102,102,110,100,95,100,95,50,54,0),505]]);
    let foregroundg = String.fromCharCode(113,95,54,53,95,118,102,108,97,103,0);
       let cornerD = String.fromCharCode(99,95,51,49,95,97,108,115,111,0);
         cornerD += `${cornerD.length}`;
          let selectedm = [515, 630, 531];
          let leaguedetailsbg_ = true;
         cornerD += `${((leaguedetailsbg_ ? 1 : 4) & 1)}`;
         selectedm.push(2);
         leaguedetailsbg_ = selectedm.length >= selectedm.length;
       let fullc = new Map([[String.fromCharCode(103,95,57,55,95,104,105,103,104,108,105,103,116,104,101,100,0),780], [String.fromCharCode(103,95,57,49,95,115,101,116,102,100,0),628], [String.fromCharCode(122,95,55,53,95,114,117,108,101,115,0),770]]);
       let videobufferloadings = new Map([[String.fromCharCode(109,95,52,49,95,116,114,101,101,115,0),String.fromCharCode(106,95,56,56,95,118,112,99,99,0)], [String.fromCharCode(102,117,122,122,105,110,103,95,120,95,53,52,0),String.fromCharCode(105,110,116,114,111,100,117,99,116,105,111,110,95,111,95,50,55,0)]]);
      plus5 -= parseFloat(`${light0.length}`);
   for (let b = 0; b < 1; b++) {
       let sellc = new Map([[String.fromCharCode(114,95,55,57,95,97,115,115,111,99,105,97,116,101,0),113], [String.fromCharCode(101,120,101,99,117,116,101,100,95,51,95,55,52,0),254]]);
       let holder7 = new Map([[String.fromCharCode(97,115,115,111,99,105,97,116,101,95,99,95,51,50,0),617], [String.fromCharCode(114,95,50,52,95,104,113,112,101,108,0),907]]);
       let leakcheckere = new Map([[String.fromCharCode(122,95,54,48,95,114,101,99,116,97,110,103,117,108,97,114,0),true ], [String.fromCharCode(122,95,49,56,95,106,97,105,108,98,114,101,97,107,0),true ], [String.fromCharCode(107,95,57,48,95,97,99,99,101,108,101,114,97,116,101,100,0),false ]]);
         leakcheckere[`${holder7.size}`] = 2;
          let subbasketballplayern = [String.fromCharCode(117,95,57,57,95,115,121,115,105,110,102,111,0), String.fromCharCode(120,95,56,52,95,98,101,115,116,0), String.fromCharCode(113,95,49,53,95,99,105,114,99,117,108,97,116,105,110,103,0)];
          let libfilen = 0;
          let loginsuccessy = 3;
         sellc[`${subbasketballplayern.length}`] = leakcheckere.size;
         subbasketballplayern = [loginsuccessy % (Math.max(6, libfilen))];
         libfilen %= Math.max(loginsuccessy ^ libfilen, 4);
          let armva6 = String.fromCharCode(110,95,53,56,95,115,121,110,116,104,101,115,105,122,101,100,0);
          let disconnectedd = String.fromCharCode(107,95,54,53,95,115,112,114,105,116,101,0);
          let materialE = String.fromCharCode(114,101,100,100,105,116,95,112,95,57,0);
         leakcheckere = new Map([[`${holder7.size}`, sellc.size ^ holder7.size]]);
         armva6 += "2";
         disconnectedd = `${disconnectedd.length}`;
         materialE = `${materialE.length >> (Math.min(5, armva6.length))}`;
       let yingX = String.fromCharCode(100,95,50,48,95,105,109,101,110,115,105,111,110,0);
         sellc[yingX] = leakcheckere.size - 3;
         leakcheckere = new Map([[`${leakcheckere.size}`, 2]]);
       let emojiheart3 = 4.0;
       let leaguedetailsbgD = 3.0;
      do {
         yingX = `${parseInt(`${emojiheart3}`)}`;
         if (yingX == String.fromCharCode(48,114,111,111,98,107,0)) {
            break;
         }
      } while ((yingX == String.fromCharCode(48,114,111,111,98,107,0)) && ((holder7.size - yingX.length) <= 3));
      for (let l = 0; l < 2; l++) {
          let show8 = String.fromCharCode(108,97,98,101,108,110,115,95,97,95,54,49,0);
          let benefitp = new Map([[String.fromCharCode(115,101,116,105,95,115,95,56,49,0),239], [String.fromCharCode(119,95,57,49,95,115,116,114,101,110,103,116,104,115,0),815]]);
          let settingE = 0;
          let mathZ = [252, 731];
          let rewardJ = String.fromCharCode(108,95,55,53,95,115,101,114,105,97,108,105,122,97,116,105,111,110,0);
         leakcheckere[`${emojiheart3}`] = parseInt(`${emojiheart3}`) >> (Math.min(Math.abs(1), 3));
         show8 = "3";
         benefitp[`${rewardJ}`] = rewardJ.length;
         settingE <<= Math.min(2, Math.abs((String.fromCharCode(66,0) == show8 ? benefitp.size : show8.length)));
         mathZ.push(show8.length & 1);
      }
      gifgoal7 = `${(String.fromCharCode(121,0) == matchdetailbgd ? airbnbstar2.length : matchdetailbgd.length)}`;
   }
   for (let c = 0; c < 1; c++) {
       let libfollyw = String.fromCharCode(104,114,116,102,95,48,95,57,56,0);
       let customm = false;
       let loginsuccessB = String.fromCharCode(100,101,108,101,116,105,111,110,95,98,95,54,52,0);
       let long_vtQ = [784, 313, 692];
       let scorek = String.fromCharCode(105,95,49,48,95,97,108,119,97,121,115,0);
      do {
         loginsuccessB += `${scorek.length / 1}`;
         if (loginsuccessB == String.fromCharCode(51,97,56,97,0)) {
            break;
         }
      } while ((loginsuccessB == String.fromCharCode(51,97,56,97,0)) && (loginsuccessB.length > libfollyw.length));
         long_vtQ = [long_vtQ.length * scorek.length];
      if (long_vtQ.length <= 1) {
         long_vtQ = [1 ^ loginsuccessB.length];
      }
          let penaltygoala = [86, 46, 259];
          let vertical2 = 4;
          let awayteamfieldU = 2.0;
         loginsuccessB = `${vertical2 | 1}`;
         penaltygoala = [parseInt(`${awayteamfieldU}`) % (Math.max(8, penaltygoala.length))];
         vertical2 ^= penaltygoala.length & 3;
         awayteamfieldU *= parseInt(`${awayteamfieldU}`) / (Math.max(7, penaltygoala.length));
       let iconorientationX = String.fromCharCode(109,101,109,111,114,121,98,117,102,102,101,114,95,55,95,50,53,0);
      while (3 > (scorek.length - long_vtQ.length)) {
          let subsC = 1.0;
          let connectionO = String.fromCharCode(104,95,56,50,95,101,120,101,99,117,116,105,111,110,0);
         scorek = `${(iconorientationX == String.fromCharCode(111,0) ? iconorientationX.length : parseInt(`${subsC}`))}`;
         subsC -= connectionO.length + connectionO.length;
         break;
      }
          let bgvipxvodC = String.fromCharCode(122,95,56,95,99,111,110,115,105,115,116,101,110,99,121,0);
          let single1 = String.fromCharCode(116,95,53,53,95,103,101,110,99,98,0);
          let eyeopenC = true;
         loginsuccessB += "2";
         bgvipxvodC = `${2 & single1.length}`;
         single1 += `${bgvipxvodC.length}`;
         eyeopenC = (single1.length | bgvipxvodC.length) <= 50;
         scorek = `${iconorientationX.length & 1}`;
      while (libfollyw.endsWith(`${long_vtQ.length}`)) {
          let cornerg = [544, 739];
         long_vtQ.push(scorek.length);
         cornerg = [cornerg.length];
         break;
      }
      while (customm) {
          let manifesty = false;
         customm = (((manifesty ? 85 : long_vtQ.length) % (Math.max(long_vtQ.length, 7))) <= 85);
         break;
      }
      do {
          let androidl = [String.fromCharCode(109,101,114,103,105,110,103,95,107,95,56,53,0), String.fromCharCode(110,95,52,95,105,110,99,111,109,112,108,101,116,101,0)];
          let homeactiveC = new Map([[String.fromCharCode(120,95,55,50,95,115,116,97,116,117,115,0),781], [String.fromCharCode(102,95,49,48,95,99,111,110,99,97,116,0),193], [String.fromCharCode(101,95,53,50,95,116,121,112,101,0),710]]);
          let regengB = true;
          let placeholderi = new Map([[String.fromCharCode(99,111,110,102,105,114,109,97,116,105,111,110,95,98,95,51,50,0),171], [String.fromCharCode(97,115,115,101,114,116,105,111,110,95,108,95,54,55,0),656]]);
          let upgrade2 = [649, 1000, 979];
         scorek += `${1 << (Math.min(4, long_vtQ.length))}`;
         androidl = [androidl.length - placeholderi.size];
         homeactiveC = new Map([[`${homeactiveC.size}`, androidl.length]]);
         regengB = 81 < homeactiveC.size;
         placeholderi[`${upgrade2.length}`] = upgrade2.length >> (Math.min(Math.abs(2), 4));
         if (String.fromCharCode(98,57,103,55,104,0) == scorek) {
            break;
         }
      } while ((!scorek.startsWith(`${libfollyw.length}`)) && (String.fromCharCode(98,57,103,55,104,0) == scorek));
          let reducerA = 1.0;
          let statsnomoredataY = String.fromCharCode(105,95,51,57,95,98,97,115,101,117,114,108,0);
         customm = customm || iconorientationX.length == 88;
         reducerA -= parseFloat(`${statsnomoredataY.length - parseInt(`${reducerA}`)}`);
         statsnomoredataY = "2";
         customm = (libfollyw.length & scorek.length) >= 89;
      for (let z = 0; z < 3; z++) {
          let formw = String.fromCharCode(114,95,49,51,95,119,115,97,117,100,0);
          let bella = 4;
         libfollyw = `${formw.length % (Math.max(2, 3))}`;
         formw += "1";
         bella -= 2;
      }
      do {
         customm = (long_vtQ.length + libfollyw.length) >= 6;
         if (customm ? !customm : customm) {
            break;
         }
      } while ((customm) && (customm ? !customm : customm));
      gift0 = new Map([[pressurew, 1 & pressurew.length]]);
   }
      qaagN += `${parseInt(`${plus5}`) * qaagN.length}`;
       let executorT = 1;
       let live_ = 3.0;
      for (let z = 0; z < 1; z++) {
         live_ -= 3 << (Math.min(Math.abs(executorT), 4));
      }
         executorT %= Math.max(executorT << (Math.min(1, Math.abs(1))), 2);
       let interneti = 2.0;
         live_ /= Math.max(2, parseInt(`${live_}`));
         live_ += parseInt(`${interneti}`);
      do {
         executorT >>= Math.min(4, Math.abs(parseInt(`${interneti}`) ^ parseInt(`${live_}`)));
         if (executorT == 2660630) {
            break;
         }
      } while ((executorT == 2660630) && (3 == executorT));
      matchdetailbgd += `${parseInt(`${live_}`)}`;
   do {
       let inactiveo = [960, 365];
       let dataQ = String.fromCharCode(114,95,52,53,95,109,112,101,103,118,105,100,101,111,100,97,116,97,0);
       let foundC = true;
       let floaterq = 2.0;
       let libruntimeexecutori = 5;
         libruntimeexecutori %= Math.max(inactiveo.length, 5);
      do {
         floaterq += parseFloat(`${parseInt(`${floaterq}`) * 2}`);
         if (floaterq == 4269789.0) {
            break;
         }
      } while (((libruntimeexecutori | 1) >= 5) && (floaterq == 4269789.0));
          let umengk = String.fromCharCode(103,95,51,54,95,116,114,117,115,116,101,100,0);
         dataQ += `${parseInt(`${floaterq}`) / 1}`;
         umengk += `${umengk.length ^ 3}`;
          let targetD = 3.0;
         foundC = libruntimeexecutori <= 44;
         targetD /= Math.max(4, parseInt(`${targetD}`));
      for (let j = 0; j < 1; j++) {
         foundC = 6.7 == floaterq;
      }
         foundC = !foundC;
      do {
         dataQ += `${libruntimeexecutori >> (Math.min(2, Math.abs(1)))}`;
         if (String.fromCharCode(99,107,119,112,108,109,0) == dataQ) {
            break;
         }
      } while ((String.fromCharCode(99,107,119,112,108,109,0) == dataQ) && (!dataQ.startsWith(`${floaterq}`)));
      for (let k = 0; k < 1; k++) {
         foundC = !foundC && dataQ.length > 97;
      }
         dataQ += "2";
          let bingq = String.fromCharCode(97,95,49,48,95,116,114,117,115,116,0);
          let homeloadingg = new Map([[String.fromCharCode(108,95,48,95,115,112,100,105,102,0),String.fromCharCode(120,95,57,56,95,109,97,100,101,98,121,0)], [String.fromCharCode(105,95,57,48,95,119,119,119,0),String.fromCharCode(97,95,56,56,95,99,111,97,114,115,101,99,97,110,100,105,100,97,116,101,0)], [String.fromCharCode(105,95,52,56,95,116,105,101,114,0),String.fromCharCode(115,95,49,48,0)]]);
         floaterq /= Math.max(parseFloat(`${inactiveo.length}`), 4);
         bingq += `${homeloadingg.size}`;
         homeloadingg[`${bingq}`] = homeloadingg.size ^ 1;
          let chatbotphotot = String.fromCharCode(99,97,108,99,119,95,51,95,49,52,0);
          let listS = true;
         floaterq *= parseFloat(`${chatbotphotot.length * 1}`);
         chatbotphotot = `${(2 % (Math.max((listS ? 1 : 2), 8)))}`;
      plus5 *= parseFloat(`${light0.length ^ 3}`);
      if (plus5 == 2899239.0) {
         break;
      }
   } while ((plus5 == 2899239.0) && (pressurew.length > 3));
       let sortr = String.fromCharCode(118,95,50,50,95,98,105,116,118,101,99,115,0);
         sortr += "1";
      if (sortr.length <= 1) {
         sortr += `${sortr.length / (Math.max(1, 10))}`;
      }
      for (let g = 0; g < 1; g++) {
          let largebrightness3 = String.fromCharCode(99,95,49,49,95,104,109,97,99,105,100,0);
          let statisticsactiveA = String.fromCharCode(97,108,101,114,116,115,95,110,95,52,53,0);
          let catagoryk = String.fromCharCode(105,110,115,101,116,95,49,95,57,56,0);
         sortr = `${largebrightness3.length >> (Math.min(Math.abs(1), 2))}`;
         largebrightness3 = "1";
         statisticsactiveA += `${catagoryk.length}`;
         catagoryk += "3";
      }
      arrowups.push(airbnbstar2.length | 2);
       let modity8 = String.fromCharCode(116,114,105,101,95,57,95,53,48,0);
      do {
         modity8 += `${modity8.length / (Math.max(modity8.length, 4))}`;
         if (modity8 == String.fromCharCode(54,120,57,108,105,51,105,113,55,0)) {
            break;
         }
      } while ((!modity8.includes(`${modity8.length}`)) && (modity8 == String.fromCharCode(54,120,57,108,105,51,105,113,55,0)));
         modity8 = `${modity8.length >> (Math.min(Math.abs(1), 3))}`;
      do {
         modity8 += `${(String.fromCharCode(105,0) == modity8 ? modity8.length : modity8.length)}`;
         if (1949461 == modity8.length) {
            break;
         }
      } while ((1949461 == modity8.length) && (modity8.length == modity8.length));
      matchdetailbgd += `${matchdetailbgd.length * airbnbstar2.length}`;
   if (1 <= airbnbstar2.length) {
      airbnbstar2 = `${matchdetailbgd.length}`;
   }
       let binddatasR = 4;
       let foregrounda = true;
       let informationt = 0.0;
          let assets1 = [886, 603];
          let iconplayi = String.fromCharCode(110,111,110,114,100,95,102,95,52,48,0);
         foregrounda = !foregrounda;
         assets1.push(iconplayi.length);
         iconplayi += `${iconplayi.length}`;
       let areap = new Map([[String.fromCharCode(115,117,98,115,116,114,95,119,95,50,49,0),314], [String.fromCharCode(107,101,121,98,111,97,114,100,95,55,95,54,48,0),797], [String.fromCharCode(99,95,51,52,95,97,118,112,114,111,103,114,97,109,0),548]]);
         areap = new Map([[`${informationt}`, binddatasR]]);
      do {
         areap = new Map([[`${areap.size}`, areap.size ^ 3]]);
         if (1857208 == areap.size) {
            break;
         }
      } while ((areap[`${informationt}`] == null) && (1857208 == areap.size));
      for (let a = 0; a < 2; a++) {
          let catagoryt = String.fromCharCode(105,95,52,54,95,109,118,112,114,111,98,115,0);
         informationt /= Math.max(1, (parseFloat(`${catagoryt == String.fromCharCode(111,0) ? (foregrounda ? 3 : 4) : catagoryt.length}`)));
      }
      if (Array.from(areap.values()).includes(binddatasR)) {
         binddatasR -= binddatasR / (Math.max(parseInt(`${informationt}`), 2));
      }
      while (areap[`${informationt}`] != null) {
          let carousely = new Map([[String.fromCharCode(115,97,109,112,108,101,99,112,121,95,51,95,51,48,0),String.fromCharCode(115,116,114,107,95,113,95,52,49,0)], [String.fromCharCode(114,105,115,101,95,112,95,54,51,0),String.fromCharCode(107,95,55,55,95,98,97,116,99,104,101,100,0)]]);
          let containerG = false;
          let defaultroombg3 = 0;
          let humidityA = String.fromCharCode(106,95,50,56,95,115,117,98,109,111,100,117,108,101,0);
          let logoutL = true;
         informationt += parseFloat(`${parseInt(`${informationt}`) / 2}`);
         carousely = new Map([[humidityA, (String.fromCharCode(115,0) == humidityA ? humidityA.length : (logoutL ? 5 : 3))]]);
         containerG = humidityA.length > 66;
         defaultroombg3 -= ((containerG ? 5 : 4) << (Math.min(Math.abs(carousely.size), 2)));
         logoutL = humidityA.length == 2;
         break;
      }
      do {
         areap[`${foregrounda}`] = 3 ^ areap.size;
         if (areap.size == 1393254) {
            break;
         }
      } while (((4 ^ areap.size) > 1 || foregrounda) && (areap.size == 1393254));
      do {
         areap[`${foregrounda}`] = 3 | binddatasR;
         if (areap.size == 2145951) {
            break;
         }
      } while ((5 < (areap.size % (Math.max(4, 5))) && 4.18 < (informationt + 1.99)) && (areap.size == 2145951));
      qaagN += `${gifgoal7.length}`;
   do {
      episodev = new Map([[`${episodev.size}`, episodev.size]]);
      if (episodev.size == 4117090) {
         break;
      }
   } while (((episodev.size % (Math.max(8, matchdetailbgd.length))) >= 4 && (matchdetailbgd.length % (Math.max(4, 7))) >= 2) && (episodev.size == 4117090));

    playerRef.current?.seek?.(0);
      episodev[`${gift0.size}`] = gift0.size;
   for (let s = 0; s < 2; s++) {
      libfbA += parseFloat(`${parseInt(`${plus5}`) & arrowups.length}`);
   }
   do {
      light0 = `${1 * parseInt(`${plus5}`)}`;
      if (light0 == String.fromCharCode(118,117,102,51,49,103,50,107,114,0)) {
         break;
      }
   } while ((arrowups.length >= 1) && (light0 == String.fromCharCode(118,117,102,51,49,103,50,107,114,0)));
       let tramini_ = new Map([[String.fromCharCode(102,114,97,99,116,105,111,110,97,108,95,49,95,53,51,0),false ], [String.fromCharCode(116,114,97,110,95,51,95,50,57,0),false ], [String.fromCharCode(115,104,111,119,105,110,103,95,53,95,51,48,0),true ]]);
          let chatbotphotoV = String.fromCharCode(111,95,54,95,105,110,100,105,99,101,115,0);
         tramini_ = new Map([[`${tramini_.size}`, 2]]);
         chatbotphotoV += `${3 * chatbotphotoV.length}`;
      for (let w = 0; w < 3; w++) {
         tramini_ = new Map([[`${tramini_.size}`, tramini_.size % 3]]);
      }
         tramini_ = new Map([[`${tramini_.size}`, tramini_.size]]);
      arrowups = [matchdetailbgd.length];
   for (let n = 0; n < 1; n++) {
      qaagN += `${light0.length}`;
   }
   do {
       let cnewsshared = String.fromCharCode(115,116,97,114,116,95,56,95,50,49,0);
       let icondownimg9 = false;
          let dangerN = 4;
         icondownimg9 = !icondownimg9 && cnewsshared.length >= 39;
         dangerN += 3;
      for (let k = 0; k < 1; k++) {
          let default__C = 0.0;
         cnewsshared += `${((icondownimg9 ? 3 : 3))}`;
         default__C /= Math.max(parseFloat(`${parseInt(`${default__C}`)}`), 2);
      }
      do {
         cnewsshared = `${((icondownimg9 ? 2 : 4))}`;
         if (4875332 == cnewsshared.length) {
            break;
         }
      } while ((icondownimg9) && (4875332 == cnewsshared.length));
       let watchnowbg1 = String.fromCharCode(97,108,108,111,99,122,95,115,95,51,55,0);
       let projectD = 3;
       let matchactiveO = 5;
      for (let u = 0; u < 1; u++) {
         watchnowbg1 = "2";
      }
      gift0[pressurew] = episodev.size;
      if (gift0.size == 3681401) {
         break;
      }
   } while ((gift0.size == 3681401) && (3 >= (gift0.size * 5) && 3 >= (5 * gift0.size)));
   for (let x = 0; x < 1; x++) {
       let favoriteO = String.fromCharCode(122,95,56,53,95,116,105,99,107,105,110,103,0);
       let lightr = String.fromCharCode(108,111,116,116,105,101,109,111,100,101,108,95,115,95,56,50,0);
       let showi = 0;
         favoriteO = `${lightr.length}`;
         lightr += `${3 - showi}`;
          let bellreminderF = String.fromCharCode(98,101,104,97,118,105,111,117,114,95,107,95,57,52,0);
         lightr += `${lightr.length % (Math.max(5, showi))}`;
         bellreminderF += `${bellreminderF.length}`;
         showi &= 2;
          let mapbufferz = [8, 356, 559];
          let fieldK = String.fromCharCode(98,111,111,107,109,97,114,107,95,101,95,54,0);
          let volumeU = [928, 465, 879];
         favoriteO += "1";
         mapbufferz = [fieldK.length];
         fieldK += "3";
         volumeU.push(volumeU.length);
          let indexe = String.fromCharCode(105,119,104,116,120,95,120,95,55,51,0);
          let libcrashsdkk = String.fromCharCode(106,95,54,50,95,115,116,114,111,107,101,114,0);
         lightr = "3";
         indexe += `${(indexe == String.fromCharCode(53,0) ? libcrashsdkk.length : indexe.length)}`;
         libcrashsdkk = `${2 * indexe.length}`;
         lightr = "1";
         showi += (lightr == String.fromCharCode(101,0) ? lightr.length : showi);
         lightr += "2";
      pressurew = "2";
   }
       let assetsL = false;
       let minivod2 = 5;
       let leagueo = String.fromCharCode(106,95,54,53,95,100,111,99,107,101,114,0);
         minivod2 -= minivod2;
       let paused = 2;
       let matchesx = 1;
         paused /= Math.max(((assetsL ? 3 : 2) % (Math.max(paused, 4))), 5);
          let vietnami = [String.fromCharCode(103,108,111,98,97,108,95,106,95,54,57,0), String.fromCharCode(122,95,51,50,95,99,108,97,115,115,0)];
          let crossq = String.fromCharCode(112,101,114,99,101,110,116,105,108,101,95,108,95,57,0);
         minivod2 |= matchesx;
         vietnami.push((String.fromCharCode(75,0) == crossq ? vietnami.length : crossq.length));
      while (paused >= 5) {
         leagueo = `${((assetsL ? 1 : 3) >> (Math.min(Math.abs(paused), 1)))}`;
         break;
      }
       let switch_viZ = true;
         paused %= Math.max(3, ((switch_viZ ? 3 : 2)));
          let homeloadingQ = String.fromCharCode(99,97,112,95,111,95,49,51,0);
          let downarrowB = 0.0;
         matchesx >>= Math.min(Math.abs(((switch_viZ ? 1 : 3))), 4);
         homeloadingQ += `${homeloadingQ.length}`;
         downarrowB += parseInt(`${downarrowB}`);
         switch_viZ = matchesx > minivod2;
      airbnbstar2 = `${episodev.size}`;
   if (2 <= airbnbstar2.length) {
      gifgoal7 = `${airbnbstar2.length * 3}`;
   }
   for (let x = 0; x < 2; x++) {
      libfbA += parseFloat(`${parseInt(`${libfbA}`) + showv}`);
   }
   do {
       let formY = String.fromCharCode(107,101,121,115,112,101,99,95,117,95,54,50,0);
       let episoder = String.fromCharCode(105,99,111,110,115,95,53,95,52,55,0);
       let reducerN = 5;
       let airbnbstar7 = new Map([[String.fromCharCode(114,101,97,112,95,55,95,57,49,0),false ], [String.fromCharCode(106,117,103,103,108,101,95,107,95,51,57,0),true ]]);
         episoder = `${reducerN}`;
         reducerN -= airbnbstar7.size;
       let playr = 4.0;
       let arrowselectdownc = 1.0;
         reducerN += parseInt(`${arrowselectdownc}`);
         episoder = "2";
         airbnbstar7[formY] = formY.length >> (Math.min(2, episoder.length));
      while ((reducerN - arrowselectdownc) > 1.72) {
         reducerN *= episoder.length;
         break;
      }
      if ((arrowselectdownc / (Math.max(7, parseFloat(`${formY.length}`)))) < 5.67 || 2 < (parseInt(`${arrowselectdownc}`) / (Math.max(formY.length, 1)))) {
          let fastforwardd = String.fromCharCode(102,95,52,56,95,108,105,109,105,116,0);
          let contexto = 0.0;
          let materialO = 2.0;
          let delegate_rwq = new Map([[String.fromCharCode(97,116,114,95,57,95,55,0),379], [String.fromCharCode(118,101,108,97,112,115,101,100,116,105,109,101,114,95,48,95,51,52,0),918], [String.fromCharCode(121,95,56,52,95,116,114,97,110,115,99,101,105,118,101,114,0),938]]);
          let holder4 = 0.0;
         arrowselectdownc -= parseFloat(`${2 % (Math.max(7, airbnbstar7.size))}`);
         fastforwardd = `${parseInt(`${holder4}`)}`;
         contexto *= parseFloat(`${parseInt(`${materialO}`) | 1}`);
         materialO += 1;
         delegate_rwq = new Map([[`${holder4}`, parseInt(`${holder4}`)]]);
      }
      if (4 <= (formY.length << (Math.min(Math.abs(5), 3))) || 1 <= (5 << (Math.min(2, formY.length)))) {
          let dangerd = String.fromCharCode(103,95,54,53,95,110,111,116,105,102,105,101,115,0);
          let private_wW = true;
          let smallG = String.fromCharCode(115,95,57,48,95,112,97,99,107,115,0);
          let libjsinspectorH = [106, 308, 916];
         formY = `${episoder.length}`;
         dangerd += `${dangerd.length >> (Math.min(4, libjsinspectorH.length))}`;
         private_wW = !private_wW;
         smallG = `${libjsinspectorH.length}`;
      }
         reducerN -= formY.length;
         reducerN += reducerN % 2;
          let greyarrowupg = 4;
         playr /= Math.max(parseFloat(`${formY.length}`), 2);
         greyarrowupg ^= 2;
      light0 += `${(qaagN == String.fromCharCode(74,0) ? qaagN.length : matchdetailbgd.length)}`;
      if (3882628 == light0.length) {
         break;
      }
   } while ((pressurew != String.fromCharCode(50,0)) && (3882628 == light0.length));

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
