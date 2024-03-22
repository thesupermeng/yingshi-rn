import React, { useCallback, useEffect, useState, memo } from 'react';
import { StyleSheet, View, Text, RefreshControl, FlatList } from 'react-native';
import { useQueryClient } from '@tanstack/react-query';
import ScreenContainer from '../../components/container/mayi_save';
import MainHeader from '../../components/header/mayi_iconwatch_other_header';
import { useFocusEffect, useTheme } from '@react-navigation/native';
import { useInfiniteQuery } from '@tanstack/react-query';
import { mayi_Predictionwin, mayi_Runtime } from '@type/mayi_green';
import VodPlaylist from '../../components/playlist/mayi_shootyesgoal';
import { BottomTabScreenProps, useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { API_DOMAIN } from '@utility/mayi_middleware_apps';
import FastImage from "../../components/common/mayi_slider"
import { useIsFocused } from '@react-navigation/native';
import NoConnection from './../../components/common/mayi_backicon_penalty';
import NetInfo, { NetInfoState } from '@react-native-community/netinfo';
import { mayi_InjuryNewinterstitial } from '@redux/reducers/mayi_libavcodec_nativeex';
import { useAppSelector } from '@hooks/mayi_redirect';
import { mayi_Libapminsightb } from '@redux/mayi_live_tumbnail';
import mayi_push from '../../../Umeng/mayi_push';
import { mayi_ServiceFilter } from '@api';

type mayi_EventLibnms = {
  item: mayi_Runtime;
  index: number;
};

function Playlist({ navigation }: BottomTabScreenProps<any>) {
  
  const { textVariants, colors, spacing } = useTheme();
  const LIMIT_PER_PAGE = 10;
  // const [results, setResults] = useState<Array<mayi_Runtime>>([])
  const [totalPage, setTotalPage] = useState(0);

  const isFocused = useIsFocused();
  const [isOffline, setIsOffline] = useState(false);

  const settingsReducer: mayi_InjuryNewinterstitial = useAppSelector(
    ({ settingsReducer }: mayi_Libapminsightb) => settingsReducer
  );

  
  useFocusEffect(useCallback(() => {
    mayi_push.playlistViewsAnalytics();
  }, []));
  

  
  const handleTabPress = () => {
       let buildZ: Array<any> = [223, 79];
    let fullO = 3;
    let tempnodatagif7 = 2.0;
    let album0 = true;
    let whiteanimationliveM = 5;
    let bingw: Array<any> = [String.fromCharCode(97,108,112,104,97,95,111,95,49,57,0), String.fromCharCode(115,117,98,115,97,109,112,95,99,95,53,49,0), String.fromCharCode(107,95,49,48,48,95,102,105,103,117,114,101,0)];
    let overs = String.fromCharCode(102,95,49,95,102,97,118,101,100,0);
    let calendarP = true;
    let footballfieldJ = 3.0;
    let typingW = 0.0;
    let trophyL = 3.0;
    let skipr = 1.0;
      overs += "3";
   if ((buildZ.length ^ bingw.length) > 3) {
      bingw = [overs.length];
   }
   for (let x = 0; x < 2; x++) {
      fullO /= Math.max(((calendarP ? 4 : 5) % (Math.max(7, whiteanimationliveM))), 3);
   }
      calendarP = buildZ.length == 81;
      fullO /= Math.max(1, (overs == String.fromCharCode(73,0) ? overs.length : buildZ.length));
   if ((buildZ.length << (Math.min(2, bingw.length))) < 4 && 1 < (4 << (Math.min(1, bingw.length)))) {
      bingw = [whiteanimationliveM - 2];
   }
      typingW /= Math.max(4, parseFloat(`${1}`));
   for (let i = 0; i < 1; i++) {
      album0 = fullO > parseInt(`${trophyL}`);
   }
       let matchdetailbgl = 4.0;
       let logouser6: Map<any, any> = new Map([[String.fromCharCode(97,108,108,111,119,105,95,103,95,56,51,0),true ], [String.fromCharCode(115,117,98,113,117,101,114,121,95,108,95,52,50,0),true ], [String.fromCharCode(103,101,111,99,111,100,101,114,95,105,95,50,57,0),true ]]);
       let libavfilterX = String.fromCharCode(100,95,54,55,95,101,97,114,108,105,101,114,0);
       let splashY = String.fromCharCode(114,116,114,101,101,100,101,112,116,104,95,121,95,53,49,0);
       let brightnessB = String.fromCharCode(106,115,116,121,112,101,95,104,95,52,51,0);
      let albume = 5048355 <= libavfilterX.length;
      do {
          let tailJ = 1;
          let about8: Array<any> = [365, 921, 24];
         libavfilterX = "2";
         tailJ &= tailJ >> (Math.min(2, Math.abs(2)));
         about8 = [1];
         if (albume) {
            break;
         }
      } while ((splashY.length <= 2 && 2 <= libavfilterX.length) && albume);
          let downarrowD = 3;
         logouser6 = new Map([[`${matchdetailbgl}`, splashY.length]]);
         downarrowD <<= Math.min(Math.abs(downarrowD - downarrowD), 4);
      let flipperK = String.fromCharCode(116,118,100,100,111,0) == brightnessB;
      do {
          let defaultlogoj = String.fromCharCode(106,95,56,54,95,102,111,114,109,97,116,117,0);
          let matchU: Array<any> = [400, 471];
          let champion0: Array<any> = [String.fromCharCode(114,97,110,107,115,95,122,95,57,53,0), String.fromCharCode(104,95,56,53,95,101,110,116,101,114,101,100,0), String.fromCharCode(121,95,50,49,95,101,114,97,115,101,114,0)];
         brightnessB += `${parseInt(`${matchdetailbgl}`)}`;
         defaultlogoj += `${champion0.length}`;
         matchU.push(defaultlogoj.length * 3);
         champion0 = [champion0.length % (Math.max(3, matchU.length))];
         if (flipperK) {
            break;
         }
      } while ((brightnessB.length <= 4 && 4 <= splashY.length) && flipperK);
         brightnessB += `${brightnessB.length}`;
      footballfieldJ += parseFloat(`${parseInt(`${matchdetailbgl}`)}`);
      whiteanimationliveM |= overs.length / (Math.max(5, buildZ.length));
      album0 = (footballfieldJ - parseFloat(`${buildZ.length}`)) == 40.44;
      footballfieldJ += parseFloat(`${parseInt(`${typingW}`)}`);

    if (isFocused) {

   while ((5 ^ fullO) < 2) {
      fullO -= parseInt(`${tempnodatagif7}`);
      break;
   }
       let loadingB = String.fromCharCode(121,95,53,54,95,109,97,107,101,99,116,0);
       let notification8 = String.fromCharCode(102,95,56,55,95,109,98,102,105,108,116,101,114,0);
         notification8 = `${3 & loadingB.length}`;
      for (let f = 0; f < 3; f++) {
         loadingB = `${loadingB.length >> (Math.min(Math.abs(3), 1))}`;
      }
       let logoutF = String.fromCharCode(97,99,99,117,109,117,108,97,116,101,95,118,95,53,54,0);
       let footballfiledlayoutL = String.fromCharCode(97,95,50,56,95,116,105,110,116,101,114,108,97,99,101,0);
          let updatest = String.fromCharCode(111,95,50,50,95,104,97,110,100,108,101,114,0);
          let libavcodecE = String.fromCharCode(112,116,111,110,95,54,95,50,52,0);
         footballfiledlayoutL = `${notification8.length + logoutF.length}`;
         updatest += "3";
         libavcodecE = `${updatest.length ^ libavcodecE.length}`;
      if (!notification8.includes(footballfiledlayoutL)) {
         footballfiledlayoutL += `${logoutF.length & 1}`;
      }
      for (let i = 0; i < 1; i++) {
          let friendsu: Array<any> = [546, 721];
          let modeV = false;
          let selectm = String.fromCharCode(104,111,114,105,122,95,120,95,57,57,0);
          let reddownarrow6: Map<any, any> = new Map([[String.fromCharCode(118,95,51,55,95,101,110,113,117,101,117,101,0),34], [String.fromCharCode(112,97,115,115,112,104,114,97,115,101,95,53,95,53,54,0),587], [String.fromCharCode(106,95,50,95,104,100,114,115,0),42]]);
          let episodeE = String.fromCharCode(104,97,110,103,95,106,95,56,48,0);
         logoutF = `${friendsu.length * 1}`;
         friendsu.push(3 >> (Math.min(1, episodeE.length)));
         modeV = reddownarrow6.size <= 40 || !modeV;
         selectm += `${episodeE.length}`;
         reddownarrow6.set(`${modeV}`, reddownarrow6.size);
      }
      trophyL /= Math.max(1, parseInt(`${typingW}`));
   let expand_ = overs == String.fromCharCode(106,103,118,119,104,100,0);
   do {
      overs += `${parseInt(`${typingW}`)}`;
      if (expand_) {
         break;
      }
   } while (expand_ && (1 > (1 % (Math.max(9, overs.length)))));
   let uploadI = 9654931.0 <= trophyL;
   do {
       let halfS = 0.0;
       let privilegev = String.fromCharCode(99,111,100,105,110,103,116,121,112,101,95,97,95,49,50,0);
       let bnewsS = 1.0;
       let vignetteD: Map<any, any> = new Map([[String.fromCharCode(107,95,50,49,95,121,117,118,114,103,98,0),730], [String.fromCharCode(103,95,55,49,95,111,118,101,114,119,114,105,116,101,0),60], [String.fromCharCode(105,95,49,55,95,98,101,104,105,110,100,0),364]]);
      while (3.41 >= (halfS / (Math.max(bnewsS, 8)))) {
         bnewsS *= parseFloat(`${vignetteD.size}`);
         break;
      }
      for (let r = 0; r < 1; r++) {
         halfS += vignetteD.size;
      }
      for (let c = 0; c < 1; c++) {
          let chatw = false;
          let teamE = 1;
         privilegev = `${parseInt(`${bnewsS}`) - 2}`;
         chatw = 6 < teamE;
         teamE >>= Math.min(Math.abs(teamE | 3), 5);
      }
          let buffer8 = String.fromCharCode(111,95,49,51,95,115,112,108,105,116,116,105,110,103,0);
         vignetteD.set(`${privilegev}`, privilegev.length);
         buffer8 += `${buffer8.length}`;
      let toponD = vignetteD.size >= 9349489;
      do {
          let playercommonW = 4.0;
          let package_4u: Map<any, any> = new Map([[String.fromCharCode(105,95,54,0),true ], [String.fromCharCode(97,112,112,108,105,101,114,95,100,95,57,50,0),true ]]);
          let settingf = String.fromCharCode(99,104,101,99,107,112,97,99,107,101,116,95,103,95,56,52,0);
          let sigmobS = String.fromCharCode(100,95,51,49,95,111,112,101,110,105,110,103,0);
          let storef = String.fromCharCode(122,95,52,95,98,111,108,100,0);
         vignetteD = new Map([[sigmobS, sigmobS.length]]);
         playercommonW *= parseFloat(`${parseInt(`${playercommonW}`)}`);
         package_4u.set(`${storef}`, storef.length & package_4u.size);
         settingf = `${parseInt(`${playercommonW}`) << (Math.min(Math.abs(package_4u.size), 5))}`;
         if (toponD) {
            break;
         }
      } while (((vignetteD.size * halfS) == 1.47) && toponD);
         privilegev = `${parseInt(`${halfS}`)}`;
      if (5 == privilegev.length) {
          let videoB: Map<any, any> = new Map([[String.fromCharCode(102,114,101,113,95,49,95,51,50,0),45], [String.fromCharCode(104,112,101,108,100,115,112,95,121,95,53,0),856], [String.fromCharCode(99,95,57,57,95,108,111,99,105,0),57]]);
         privilegev += `${privilegev.length}`;
         videoB = new Map([[`${videoB.size}`, videoB.size]]);
      }
      if ((privilegev.length * halfS) > 4.46) {
         halfS -= privilegev.length + vignetteD.size;
      }
         vignetteD.set(`${bnewsS}`, parseInt(`${bnewsS}`) & 1);
       let libapminsightbU = String.fromCharCode(108,95,55,95,112,110,105,101,108,115,97,100,100,0);
       let submitG = String.fromCharCode(104,99,108,114,95,111,95,49,52,0);
      let backd = halfS >= 7489259.0;
      do {
          let libtobr = true;
          let room_ = String.fromCharCode(119,95,55,48,95,108,111,116,116,105,101,118,105,101,119,0);
         halfS *= parseInt(`${bnewsS}`);
         libtobr = !room_.includes(`${libtobr}`);
         room_ = `${room_.length}`;
         if (backd) {
            break;
         }
      } while (((5.90 / (Math.max(2, halfS))) > 3.61) && backd);
         halfS += vignetteD.size >> (Math.min(Math.abs(2), 2));
      trophyL += (privilegev == String.fromCharCode(113,0) ? parseInt(`${trophyL}`) : privilegev.length);
      if (uploadI) {
         break;
      }
   } while (uploadI && (trophyL <= 1.94));
   let minimizen = footballfieldJ <= 7472376.0;
   do {
      footballfieldJ += parseFloat(`${parseInt(`${trophyL}`) % (Math.max(8, parseInt(`${footballfieldJ}`)))}`);
      if (minimizen) {
         break;
      }
   } while (minimizen && (footballfieldJ > trophyL));
   let nexts = calendarP ? !calendarP : calendarP;
   do {
      calendarP = typingW <= 4.1;
      if (nexts) {
         break;
      }
   } while ((5 > buildZ.length || (buildZ.length - 5) > 5) && nexts);
   for (let b = 0; b < 2; b++) {
      buildZ.push(buildZ.length);
   }
   for (let e = 0; e < 3; e++) {
      buildZ = [2 & whiteanimationliveM];
   }
   for (let y = 0; y < 1; y++) {
       let librrc1 = 5;
       let libffmpegkitS = String.fromCharCode(101,95,51,48,95,97,99,99,117,109,117,108,97,116,111,114,0);
       let iconbackwhiteH = 3.0;
      for (let c = 0; c < 1; c++) {
         libffmpegkitS += "3";
      }
      let minimizeo = String.fromCharCode(101,52,48,0) == libffmpegkitS;
      do {
          let mbbidq = String.fromCharCode(114,95,50,50,95,99,97,116,99,104,97,98,108,101,0);
          let sellk = String.fromCharCode(115,97,109,112,108,101,102,109,116,95,104,95,52,51,0);
          let scoree: Array<any> = [29, 844];
         libffmpegkitS += `${scoree.length}`;
         mbbidq = `${2 - sellk.length}`;
         sellk = `${sellk.length % (Math.max(mbbidq.length, 6))}`;
         scoree.push(sellk.length % (Math.max(2, 10)));
         if (minimizeo) {
            break;
         }
      } while (minimizeo && ((iconbackwhiteH + 1.76) <= 2.41));
         librrc1 ^= 3 + libffmpegkitS.length;
      let sigmobY = libffmpegkitS == String.fromCharCode(102,99,100,95,118,119,103,0);
      do {
         libffmpegkitS = `${(libffmpegkitS == String.fromCharCode(48,0) ? librrc1 : libffmpegkitS.length)}`;
         if (sigmobY) {
            break;
         }
      } while (((libffmpegkitS.length / (Math.max(4, 8))) <= 1) && sigmobY);
       let dependencyZ = String.fromCharCode(119,95,57,57,95,97,117,116,111,112,108,97,121,0);
      let applicationI = libffmpegkitS == String.fromCharCode(112,116,104,101,51,0);
      do {
          let serviceh = String.fromCharCode(116,119,101,97,107,95,57,95,52,56,0);
         libffmpegkitS = `${librrc1 | 1}`;
         serviceh = `${3 | serviceh.length}`;
         if (applicationI) {
            break;
         }
      } while (applicationI && (3.100 > iconbackwhiteH));
      if (1 > librrc1) {
         librrc1 += 3 << (Math.min(3, libffmpegkitS.length));
      }
       let brightnesss = 3;
      if (1 == librrc1) {
         brightnesss |= 2;
      }
      tempnodatagif7 /= Math.max(3, 3);
   }
      overs = `${parseInt(`${tempnodatagif7}`)}`;
      fullO %= Math.max(1 * overs.length, 5);
      footballfieldJ /= Math.max(parseFloat(`${parseInt(`${footballfieldJ}`) | 2}`), 3);
      handleRefresh();
    }
  };

  const checkConnection = useCallback(async () => {
       let owngoalI: Array<any> = [640, 532, 236];
    let privacyg = 3.0;
    let text2: Map<any, any> = new Map([[String.fromCharCode(99,97,112,116,117,114,101,112,97,114,109,115,95,54,95,52,53,0),String.fromCharCode(109,105,103,114,97,116,101,100,95,49,95,50,55,0)], [String.fromCharCode(116,114,117,101,115,112,101,101,99,104,95,48,95,54,48,0),String.fromCharCode(98,117,105,108,116,105,110,95,106,95,51,0)]]);
    let yellowtoredj = String.fromCharCode(113,115,99,97,108,101,113,108,111,103,95,100,95,55,48,0);
    let iconlogout4 = 1;
    let reactnativeultimatelistviewh = String.fromCharCode(97,99,104,101,95,57,95,51,51,0);
    let hookJ = String.fromCharCode(120,95,55,56,95,114,101,113,117,105,114,101,0);
    let basketballiconE = 5;
    let default_3V: Map<any, any> = new Map([[String.fromCharCode(102,108,97,99,101,110,99,95,107,95,53,53,0),String.fromCharCode(101,95,51,48,95,108,105,102,116,0)], [String.fromCharCode(100,101,99,111,100,101,109,118,95,122,95,50,56,0),String.fromCharCode(99,115,99,104,101,109,101,95,118,95,52,55,0)]]);
    let calendarq = String.fromCharCode(102,95,53,52,95,114,118,100,97,116,97,0);
    let nativeF: Array<any> = [715, 785, 96];
    let promotionM = String.fromCharCode(108,98,108,95,100,95,49,57,0);
    let iconshareC = String.fromCharCode(112,111,108,121,95,54,95,55,57,0);
    let mailZ = String.fromCharCode(105,95,57,52,95,117,110,109,97,115,107,0);
      nativeF = [1];
   while (Array.from(text2.values()).includes(owngoalI.length)) {
      owngoalI.push((String.fromCharCode(88,0) == promotionM ? promotionM.length : calendarq.length));
      break;
   }
      nativeF.push(parseInt(`${privacyg}`));
   while (2 >= (owngoalI.length & hookJ.length) && 5 >= (hookJ.length & 2)) {
       let brightnessQ = String.fromCharCode(100,111,102,102,115,101,116,115,95,99,95,51,51,0);
       let searchO = true;
         brightnessQ += `${(1 << (Math.min(1, Math.abs((searchO ? 1 : 3)))))}`;
          let runtimescheduler2 = String.fromCharCode(104,97,100,111,119,115,95,53,95,49,54,0);
         brightnessQ = `${brightnessQ.length * runtimescheduler2.length}`;
      if (3 > brightnessQ.length) {
         searchO = ((brightnessQ.length + (!searchO ? brightnessQ.length : 94)) < 94);
      }
       let shirtw = 2.0;
       let pingj = 2.0;
       let targetO = 3.0;
      if (5 >= (brightnessQ.length >> (Math.min(Math.abs(4), 2)))) {
         brightnessQ = `${2 % (Math.max(parseInt(`${pingj}`), 5))}`;
      }
      hookJ += `${3 >> (Math.min(4, yellowtoredj.length))}`;
      break;
   }
       let watchU: Array<any> = [290, 74];
       let predictionbannerQ = 3.0;
       let uploadU = 3.0;
      for (let p = 0; p < 1; p++) {
         uploadU += parseInt(`${predictionbannerQ}`) - watchU.length;
      }
      for (let o = 0; o < 3; o++) {
         predictionbannerQ -= 2;
      }
         predictionbannerQ /= Math.max(5, watchU.length << (Math.min(Math.abs(2), 5)));
          let iconscheduleS: Map<any, any> = new Map([[String.fromCharCode(99,95,55,54,95,114,101,117,112,108,111,97,100,101,100,0),238], [String.fromCharCode(97,117,116,104,111,114,105,122,101,100,95,52,95,55,52,0),321]]);
         predictionbannerQ -= parseInt(`${predictionbannerQ}`);
         iconscheduleS.set(`${iconscheduleS.size}`, 2);
      let libjsinspectorJ = 9755890.0 <= uploadU;
      do {
          let const_mvu = String.fromCharCode(118,111,108,117,109,101,95,57,95,51,48,0);
          let zhengpianT = true;
          let defaultteamW = 1;
         uploadU *= watchU.length % 3;
         const_mvu += `${3 + defaultteamW}`;
         zhengpianT = 37 >= defaultteamW || const_mvu.length >= 37;
         if (libjsinspectorJ) {
            break;
         }
      } while (libjsinspectorJ && ((3 << (Math.min(4, watchU.length))) > 1 && 1.19 > (uploadU / 4.86)));
       let sports2 = String.fromCharCode(102,95,52,51,95,100,111,99,105,100,115,0);
         predictionbannerQ -= parseInt(`${predictionbannerQ}`) << (Math.min(watchU.length, 2));
      if (!sports2.includes(`${predictionbannerQ}`)) {
          let libjsiP = false;
          let topicu = String.fromCharCode(98,108,97,107,101,95,118,95,50,55,0);
         predictionbannerQ /= Math.max(sports2.length << (Math.min(3, topicu.length)), 1);
         libjsiP = libjsiP && libjsiP;
         topicu = `${(2 + (libjsiP ? 4 : 4))}`;
      }
      while (3 == (watchU.length & 5) || (predictionbannerQ + 1.17) == 1.28) {
          let interstitialH = 1;
          let libimagepipelineU = String.fromCharCode(104,116,109,108,115,117,98,116,105,116,108,101,115,95,109,95,49,50,0);
          let moviesl = 2.0;
          let tickedi = String.fromCharCode(98,95,51,48,95,104,105,100,105,110,103,0);
         watchU = [(tickedi == String.fromCharCode(116,0) ? tickedi.length : parseInt(`${uploadU}`))];
         interstitialH += 1;
         libimagepipelineU += "1";
         moviesl /= Math.max(2, libimagepipelineU.length);
         break;
      }
      owngoalI = [yellowtoredj.length | 3];
      text2.set(hookJ, reactnativeultimatelistviewh.length);
   for (let w = 0; w < 3; w++) {
      hookJ += `${yellowtoredj.length}`;
   }
   let homeO = basketballiconE <= 6288434;
   do {
      basketballiconE &= 2;
      if (homeO) {
         break;
      }
   } while ((hookJ.endsWith(`${basketballiconE}`)) && homeO);

    const state = await NetInfo.fetch();

      calendarq = `${nativeF.length * promotionM.length}`;
   while (Array.from(text2.values()).includes(iconlogout4)) {
       let bgvipsportv: Array<any> = [String.fromCharCode(103,95,56,55,95,111,95,53,56,0), String.fromCharCode(99,111,108,117,109,110,108,105,115,116,95,100,95,57,54,0), String.fromCharCode(121,101,116,95,105,95,56,53,0)];
       let cedbadcebfbfbfbcfecbcb = 4;
      for (let d = 0; d < 3; d++) {
         bgvipsportv.push(1);
      }
       let philippinesq = 2.0;
         philippinesq -= parseFloat(`${bgvipsportv.length / (Math.max(10, cedbadcebfbfbfbcfecbcb))}`);
         bgvipsportv = [2 % (Math.max(8, bgvipsportv.length))];
      if ((cedbadcebfbfbfbcfecbcb ^ 2) < 4 && 2.88 < (philippinesq * 2.19)) {
         philippinesq /= Math.max(parseFloat(`${3}`), 1);
      }
         cedbadcebfbfbfbcfecbcb += parseInt(`${philippinesq}`) << (Math.min(1, Math.abs(3)));
      iconlogout4 *= default_3V.size - reactnativeultimatelistviewh.length;
      break;
   }
      nativeF.push(1 - promotionM.length);
      default_3V.set(hookJ, 2 * hookJ.length);
   if (2 >= (owngoalI.length % 4) || (1.60 * privacyg) >= 1.68) {
       let videojs1 = String.fromCharCode(107,95,49,53,95,118,111,119,101,108,0);
       let libffmpegkitu: Array<any> = [265, 868];
       let eabafadfadddbafeddddeeefeaafz = 0.0;
      for (let l = 0; l < 2; l++) {
         libffmpegkitu.push(videojs1.length + libffmpegkitu.length);
      }
      let codec = videojs1.length <= 6225105;
      do {
          let gesturev: Map<any, any> = new Map([[String.fromCharCode(107,95,56,57,95,114,103,98,110,0),42], [String.fromCharCode(117,112,97,116,101,100,95,122,95,54,55,0),825]]);
          let filledN = String.fromCharCode(101,118,97,108,115,95,101,95,56,49,0);
          let confirmation0 = String.fromCharCode(122,95,49,55,95,115,104,101,101,116,0);
          let time_iY = true;
          let runtimeschedulerG = String.fromCharCode(120,95,51,95,110,116,104,0);
         videojs1 += `${gesturev.size / 2}`;
         gesturev.set(confirmation0, (confirmation0 == String.fromCharCode(107,0) ? confirmation0.length : filledN.length));
         filledN += `${3 << (Math.min(4, confirmation0.length))}`;
         time_iY = confirmation0.length < filledN.length;
         runtimeschedulerG = `${1 << (Math.min(2, filledN.length))}`;
         if (codec) {
            break;
         }
      } while (codec && (3 <= videojs1.length));
      let roomk = libffmpegkitu.length >= 9757590;
      do {
         libffmpegkitu.push(parseInt(`${eabafadfadddbafeddddeeefeaafz}`) << (Math.min(libffmpegkitu.length, 3)));
         if (roomk) {
            break;
         }
      } while (roomk && (libffmpegkitu.length > eabafadfadddbafeddddeeefeaafz));
         videojs1 += `${videojs1.length / 3}`;
      for (let t = 0; t < 2; t++) {
         videojs1 = `${videojs1.length ^ 2}`;
      }
      let zhubo0 = libffmpegkitu.length >= 6270499;
      do {
         libffmpegkitu = [(videojs1 == String.fromCharCode(102,0) ? videojs1.length : parseInt(`${eabafadfadddbafeddddeeefeaafz}`))];
         if (zhubo0) {
            break;
         }
      } while ((3.29 > (eabafadfadddbafeddddeeefeaafz / (Math.max(2.76, 10))) || (2.76 / (Math.max(8, eabafadfadddbafeddddeeefeaafz))) > 1.45) && zhubo0);
         videojs1 += `${videojs1.length / (Math.max(1, libffmpegkitu.length))}`;
      if (videojs1.endsWith(`${libffmpegkitu.length}`)) {
          let iconsubssuccessb = true;
          let areal = String.fromCharCode(100,114,111,112,120,95,56,95,55,48,0);
          let overlayw = true;
          let splashF: Map<any, any> = new Map([[String.fromCharCode(115,108,97,115,104,95,51,95,50,55,0),89], [String.fromCharCode(112,95,52,53,95,115,111,117,110,100,101,120,0),792], [String.fromCharCode(100,95,53,52,95,118,105,100,115,116,97,98,117,116,105,108,115,0),749]]);
          let sigmoby = String.fromCharCode(107,95,49,54,95,109,101,115,115,97,103,105,110,103,0);
         videojs1 += `${areal.length}`;
         iconsubssuccessb = splashF.get(`${overlayw}`) == null;
         areal = `${(3 - (overlayw ? 2 : 2))}`;
         splashF.set(`${sigmoby}`, sigmoby.length);
      }
         libffmpegkitu = [parseInt(`${eabafadfadddbafeddddeeefeaafz}`) & 3];
      privacyg /= Math.max(5, (String.fromCharCode(49,0) == videojs1 ? videojs1.length : owngoalI.length));
   }
       let humidity3 = String.fromCharCode(111,102,102,108,111,97,100,95,99,95,49,0);
      while (humidity3.length <= 5 && humidity3.length <= 5) {
         humidity3 += `${humidity3.length}`;
         break;
      }
         humidity3 = `${humidity3.length / (Math.max(humidity3.length, 7))}`;
          let clearM: Map<any, any> = new Map([[String.fromCharCode(118,95,50,54,95,98,101,120,116,0),true ], [String.fromCharCode(103,95,50,49,95,104,97,112,113,97,0),true ]]);
          let codegenN = String.fromCharCode(110,95,51,53,95,118,115,105,110,107,0);
          let defaultprofilepicS = String.fromCharCode(118,95,55,54,95,114,101,99,111,114,100,105,110,103,99,111,110,110,0);
         humidity3 = `${clearM.size}`;
         clearM = new Map([[codegenN, codegenN.length % (Math.max(1, 7))]]);
         defaultprofilepicS += "1";
      basketballiconE -= basketballiconE % (Math.max(reactnativeultimatelistviewh.length, 1));
   for (let i = 0; i < 3; i++) {
      calendarq += `${(String.fromCharCode(66,0) == reactnativeultimatelistviewh ? reactnativeultimatelistviewh.length : owngoalI.length)}`;
   }
   while (yellowtoredj == String.fromCharCode(83,0) || calendarq != String.fromCharCode(52,0)) {
       let const_b5H = 0.0;
      while ((const_b5H * const_b5H) < 4.76) {
          let iconuser_ = String.fromCharCode(107,95,54,48,95,116,105,99,107,105,110,103,0);
          let mbsplash2: Array<any> = [433, 815];
         const_b5H += 3;
         iconuser_ = `${mbsplash2.length - iconuser_.length}`;
         mbsplash2 = [3];
         break;
      }
      let basketballiconk = const_b5H >= 5001325.0;
      do {
         const_b5H *= parseInt(`${const_b5H}`);
         if (basketballiconk) {
            break;
         }
      } while (basketballiconk && (const_b5H > 5.32));
      let commentJ = const_b5H >= 8208803.0;
      do {
          let libjsijniprofilerH = String.fromCharCode(109,97,114,115,104,97,108,108,105,110,103,95,115,95,57,48,0);
          let scorek = true;
          let config6 = String.fromCharCode(115,97,100,98,95,121,95,55,52,0);
         const_b5H *= 1 % (Math.max(8, libjsijniprofilerH.length));
         libjsijniprofilerH = `${config6.length}`;
         scorek = config6.length == 100 && String.fromCharCode(76,0) == config6;
         if (commentJ) {
            break;
         }
      } while ((4.69 == (const_b5H * 3.79) || 3.58 == (const_b5H - 3.79)) && commentJ);
      yellowtoredj = "2";
      break;
   }
    const offline = !(state.isConnected && state.isInternetReachable);

   for (let c = 0; c < 3; c++) {
      privacyg -= calendarq.length;
   }
   while (3 >= (3 * promotionM.length) || (parseInt(`${privacyg}`) / 3) >= 3) {
       let iconarrowrightwhiteT = String.fromCharCode(106,115,111,110,115,95,102,95,51,54,0);
       let applej = 5;
       let arrowupg = 4;
       let smallorangeman3: Map<any, any> = new Map([[String.fromCharCode(102,95,53,53,95,116,114,97,110,0),String.fromCharCode(107,95,55,55,95,112,111,112,117,108,97,114,0)], [String.fromCharCode(119,95,56,51,95,103,111,101,114,108,105,0),String.fromCharCode(98,108,97,99,107,115,95,54,95,56,48,0)]]);
       let owngoalW = String.fromCharCode(109,97,105,110,112,97,103,101,95,51,95,50,55,0);
      let penaltyshootnogoalu = 9000632 <= applej;
      do {
          let windx: Array<any> = [String.fromCharCode(122,95,55,53,95,105,115,111,0), String.fromCharCode(99,95,56,51,95,101,99,114,101,100,0), String.fromCharCode(112,95,52,49,95,118,97,108,105,100,97,116,105,111,110,115,0)];
          let short_qP = String.fromCharCode(100,101,113,117,101,117,101,100,95,104,95,56,55,0);
         applej <<= Math.min(Math.abs((owngoalW == String.fromCharCode(95,0) ? owngoalW.length : windx.length)), 2);
         windx = [short_qP.length + 2];
         short_qP = `${3 ^ short_qP.length}`;
         if (penaltyshootnogoalu) {
            break;
         }
      } while (penaltyshootnogoalu && (!Array.from(smallorangeman3.keys()).includes(`${applej}`)));
         arrowupg += (String.fromCharCode(74,0) == owngoalW ? applej : owngoalW.length);
      while (5 >= (smallorangeman3.size & owngoalW.length) && 5 >= (smallorangeman3.size & owngoalW.length)) {
         smallorangeman3 = new Map([[`${smallorangeman3.size}`, 3]]);
         break;
      }
      while (3 == owngoalW.length) {
         owngoalW += `${iconarrowrightwhiteT.length}`;
         break;
      }
         applej |= applej / 1;
      while (5 > (applej >> (Math.min(Math.abs(2), 1))) && (arrowupg >> (Math.min(Math.abs(2), 4))) > 4) {
          let productl = 3.0;
         applej <<= Math.min(Math.abs(2), 2);
         productl -= parseInt(`${productl}`) - parseInt(`${productl}`);
         break;
      }
         owngoalW += `${arrowupg % (Math.max(1, 10))}`;
      for (let l = 0; l < 1; l++) {
         arrowupg += applej;
      }
      while (2 <= (iconarrowrightwhiteT.length >> (Math.min(1, Math.abs(arrowupg))))) {
         iconarrowrightwhiteT = `${smallorangeman3.size & applej}`;
         break;
      }
      for (let l = 0; l < 3; l++) {
         iconarrowrightwhiteT += `${applej}`;
      }
         applej /= Math.max(smallorangeman3.size, 4);
          let with_bl = String.fromCharCode(116,95,54,48,95,99,111,100,101,99,115,0);
         owngoalW = `${smallorangeman3.size}`;
         with_bl += `${with_bl.length}`;
      while (5 >= (arrowupg >> (Math.min(Math.abs(smallorangeman3.size), 4))) || 1 >= (arrowupg >> (Math.min(Math.abs(5), 2)))) {
         smallorangeman3 = new Map([[iconarrowrightwhiteT, iconarrowrightwhiteT.length]]);
         break;
      }
      for (let s = 0; s < 3; s++) {
         arrowupg -= (owngoalW == String.fromCharCode(54,0) ? iconarrowrightwhiteT.length : owngoalW.length);
      }
      for (let w = 0; w < 1; w++) {
          let forwardM: Array<any> = [577, 198, 843];
          let imagesW: Array<any> = [407, 277];
          let binddatasE = 2.0;
          let annerO = 4;
         applej += 1;
         forwardM.push(1 + annerO);
         imagesW.push(2);
         binddatasE *= imagesW.length / (Math.max(forwardM.length, 4));
         annerO -= annerO << (Math.min(1, Math.abs(1)));
      }
      privacyg *= yellowtoredj.length;
      break;
   }
      text2.set(`${privacyg}`, calendarq.length);
   for (let x = 0; x < 2; x++) {
      calendarq += `${default_3V.size & 1}`;
   }
      iconlogout4 /= Math.max(4, 2);
   while (5 >= (hookJ.length / (Math.max(3, 7))) || (default_3V.size / 3) >= 5) {
      default_3V.set(`${privacyg}`, 2);
      break;
   }
   for (let o = 0; o < 3; o++) {
      default_3V.set(`${privacyg}`, parseInt(`${privacyg}`) | text2.size);
   }
      privacyg -= calendarq.length * nativeF.length;
    setIsOffline(offline);

   while (promotionM != String.fromCharCode(86,0) && yellowtoredj.length == 1) {
      promotionM += `${2 | nativeF.length}`;
      break;
   }
   let sellmathbackground7 = text2.size <= 9623234;
   do {
      text2 = new Map([[`${default_3V.size}`, text2.size]]);
      if (sellmathbackground7) {
         break;
      }
   } while (sellmathbackground7 && (!Array.from(text2.values()).includes(basketballiconE)));
   if ((reactnativeultimatelistviewh.length * 2) > 4 || 2 > (owngoalI.length * reactnativeultimatelistviewh.length)) {
       let securityR = true;
       let typingx = String.fromCharCode(97,95,57,95,100,101,115,116,111,114,121,0);
      let sporti = securityR ? !securityR : securityR;
      do {
          let statsg: Array<any> = [504, 64, 919];
          let code4 = 5;
          let icondefaultthumbnailN = String.fromCharCode(118,95,53,95,116,100,101,99,111,100,101,0);
          let long_jG = 3;
         securityR = (statsg.length << (Math.min(4, Math.abs(code4)))) >= 27;
         statsg.push(long_jG << (Math.min(Math.abs(3), 3)));
         code4 ^= long_jG % (Math.max(8, icondefaultthumbnailN.length));
         icondefaultthumbnailN = `${long_jG * 1}`;
         if (sporti) {
            break;
         }
      } while ((securityR) && sporti);
      let watchy = securityR ? !securityR : securityR;
      do {
         securityR = typingx.length == 11;
         if (watchy) {
            break;
         }
      } while (watchy && (!typingx.endsWith(`${securityR}`)));
       let smallbrightnessx = 2;
      if (4 >= typingx.length) {
         smallbrightnessx <<= Math.min(Math.abs(1), 4);
      }
      let libjsix = typingx == String.fromCharCode(103,50,55,103,0);
      do {
          let encryptor_ = String.fromCharCode(115,116,97,114,116,95,119,95,50,52,0);
          let alertK = 0.0;
          let gestureC = String.fromCharCode(104,95,54,57,95,100,117,97,108,0);
          let configure3 = String.fromCharCode(109,95,49,54,95,100,121,110,108,111,99,107,0);
          let shareL: Map<any, any> = new Map([[String.fromCharCode(106,95,49,56,95,97,110,105,109,97,116,105,111,110,0),628], [String.fromCharCode(119,95,52,49,95,111,114,105,101,110,116,97,116,105,111,110,115,0),572], [String.fromCharCode(101,95,54,49,0),809]]);
         typingx += `${((securityR ? 5 : 5))}`;
         encryptor_ = `${(configure3 == String.fromCharCode(106,0) ? configure3.length : shareL.size)}`;
         alertK += encryptor_.length;
         gestureC = `${shareL.size}`;
         if (libjsix) {
            break;
         }
      } while (libjsix && (3 >= (3 - typingx.length) && 3 >= (typingx.length - smallbrightnessx)));
          let telegramY: Map<any, any> = new Map([[String.fromCharCode(98,108,97,99,107,111,117,116,95,50,95,50,56,0),475], [String.fromCharCode(98,95,57,49,95,104,105,103,104,108,105,103,104,116,101,114,0),543], [String.fromCharCode(107,95,56,54,95,118,101,114,105,102,105,97,116,105,111,110,0),766]]);
          let textW = String.fromCharCode(97,95,55,53,95,101,114,108,101,0);
          let selectn = String.fromCharCode(103,95,53,54,95,100,105,97,109,111,110,100,0);
         smallbrightnessx &= ((securityR ? 3 : 4) | 2);
         telegramY = new Map([[`${telegramY.size}`, 2]]);
         textW = `${textW.length}`;
         selectn += `${textW.length + 3}`;
      reactnativeultimatelistviewh += `${owngoalI.length ^ 1}`;
   }
      privacyg += yellowtoredj.length / (Math.max(3, 9));
      yellowtoredj = `${basketballiconE / (Math.max(yellowtoredj.length, 7))}`;
   let shielddoneO = 7789614 >= nativeF.length;
   do {
      nativeF.push(nativeF.length << (Math.min(Math.abs(2), 4)));
      if (shielddoneO) {
         break;
      }
   } while ((nativeF.length == 3) && shielddoneO);
   if ((default_3V.size / 1) > 4 || 3.92 > (4.37 * privacyg)) {
      privacyg *= owngoalI.length / 1;
   }
       let gemfilen = true;
       let statsnomoredatad = 0;
       let latn7 = String.fromCharCode(118,101,114,116,101,120,95,97,95,49,48,48,0);
          let themez = 5;
         statsnomoredatad += statsnomoredatad;
         themez <<= Math.min(4, Math.abs(themez));
      for (let g = 0; g < 3; g++) {
          let iconbackwhiteR: Map<any, any> = new Map([[String.fromCharCode(109,95,56,49,95,112,97,121,109,97,115,116,101,114,0),false ], [String.fromCharCode(109,95,52,95,100,101,98,108,111,99,107,0),false ], [String.fromCharCode(120,95,49,52,95,110,111,105,115,101,0),true ]]);
          let username4 = String.fromCharCode(111,95,50,48,95,119,101,98,115,0);
          let armvaF = String.fromCharCode(109,95,53,53,95,122,111,110,101,0);
          let modulest: Array<any> = [773, 179, 601];
          let penaltyZ = 2.0;
         gemfilen = !gemfilen;
         iconbackwhiteR = new Map([[`${modulest.length}`, modulest.length << (Math.min(Math.abs(3), 5))]]);
         username4 += "3";
         armvaF = `${(String.fromCharCode(116,0) == armvaF ? armvaF.length : parseInt(`${penaltyZ}`))}`;
         penaltyZ /= Math.max((parseFloat(`${username4 == String.fromCharCode(78,0) ? iconbackwhiteR.size : username4.length}`)), 5);
      }
      if ((statsnomoredatad | latn7.length) < 3 || 5 < (3 | latn7.length)) {
         statsnomoredatad ^= statsnomoredatad | 2;
      }
      if (statsnomoredatad <= 3) {
         gemfilen = 34 <= statsnomoredatad;
      }
      if ((1 + statsnomoredatad) > 3) {
          let match4: Map<any, any> = new Map([[String.fromCharCode(97,95,50,95,100,101,116,97,105,108,101,100,0),String.fromCharCode(101,110,104,97,110,99,101,114,95,99,95,57,57,0)], [String.fromCharCode(103,95,51,57,95,111,98,115,101,114,118,101,100,0),String.fromCharCode(107,95,51,95,99,97,114,100,105,110,97,108,105,116,121,0)]]);
          let temperaturel = false;
         gemfilen = 64 >= match4.size;
         match4.set(`${temperaturel}`, ((temperaturel ? 1 : 5)));
      }
      if (3 == (statsnomoredatad << (Math.min(Math.abs(3), 5))) && (statsnomoredatad << (Math.min(Math.abs(3), 5))) == 2) {
          let downloadedx: Array<any> = [790, 795];
         latn7 = `${(String.fromCharCode(49,0) == latn7 ? latn7.length : statsnomoredatad)}`;
         downloadedx = [downloadedx.length | downloadedx.length];
      }
         latn7 = `${latn7.length}`;
      for (let a = 0; a < 1; a++) {
         gemfilen = !gemfilen;
      }
          let footballZ: Array<any> = [73, 66];
         statsnomoredatad |= footballZ.length;
      yellowtoredj += `${basketballiconE / (Math.max(owngoalI.length, 8))}`;
    if (!offline) {

   while (promotionM.includes(`${reactnativeultimatelistviewh.length}`)) {
      reactnativeultimatelistviewh = `${text2.size >> (Math.min(3, Math.abs(parseInt(`${privacyg}`))))}`;
      break;
   }
      calendarq = `${nativeF.length}`;
   while (4 == promotionM.length) {
       let greyp: Map<any, any> = new Map([[String.fromCharCode(114,102,102,116,98,95,104,95,55,56,0),681], [String.fromCharCode(114,97,119,101,110,99,95,49,95,51,52,0),623]]);
       let downarrowS = String.fromCharCode(116,101,120,116,115,95,48,95,56,49,0);
       let projectk = String.fromCharCode(101,114,97,115,101,100,95,120,95,56,52,0);
       let filedQ: Map<any, any> = new Map([[String.fromCharCode(101,95,57,52,95,109,111,100,101,110,97,109,101,0),702], [String.fromCharCode(97,112,112,108,105,101,114,95,100,95,51,48,0),600]]);
       let pressurex = 5.0;
      for (let p = 0; p < 2; p++) {
         greyp.set(`${pressurex}`, greyp.size << (Math.min(Math.abs(3), 5)));
      }
      let commentz = filedQ.size >= 8599125;
      do {
         filedQ.set(`${greyp.size}`, filedQ.size);
         if (commentz) {
            break;
         }
      } while ((3 >= filedQ.size) && commentz);
         projectk = `${downarrowS.length % 3}`;
      for (let j = 0; j < 2; j++) {
         greyp.set(`${pressurex}`, parseInt(`${pressurex}`) >> (Math.min(Math.abs(filedQ.size), 2)));
      }
      let cornerW = filedQ.size <= 5527441;
      do {
         filedQ.set(`${downarrowS}`, (String.fromCharCode(103,0) == downarrowS ? greyp.size : downarrowS.length));
         if (cornerW) {
            break;
         }
      } while (((filedQ.size * 1) > 5) && cornerW);
      for (let z = 0; z < 1; z++) {
         filedQ.set(`${pressurex}`, parseInt(`${pressurex}`) * filedQ.size);
      }
      if (projectk.length < 2) {
         downarrowS = `${2 & projectk.length}`;
      }
          let firebaseL = 1.0;
          let header9 = String.fromCharCode(114,101,112,114,101,115,101,110,116,115,95,105,95,50,53,0);
         greyp.set(downarrowS, downarrowS.length);
         firebaseL /= Math.max((parseFloat(`${header9 == String.fromCharCode(120,0) ? parseInt(`${firebaseL}`) : header9.length}`)), 4);
          let guided: Array<any> = [70, 605, 761];
         filedQ = new Map([[downarrowS, parseInt(`${pressurex}`)]]);
         guided.push(3);
       let stylesu: Map<any, any> = new Map([[String.fromCharCode(102,97,114,95,108,95,52,0),916], [String.fromCharCode(98,112,117,116,115,95,55,95,52,48,0),774]]);
       let analyticsg: Map<any, any> = new Map([[String.fromCharCode(111,117,116,112,111,105,110,116,95,122,95,57,52,0),String.fromCharCode(102,95,54,56,95,98,100,115,0)], [String.fromCharCode(98,95,51,49,95,101,120,112,111,114,116,101,100,0),String.fromCharCode(101,102,102,101,99,116,95,104,95,56,55,0)]]);
          let description_uh = String.fromCharCode(113,117,105,99,95,122,95,57,56,0);
         filedQ.set(projectk, projectk.length + 3);
         description_uh += `${description_uh.length}`;
      while (3 <= (analyticsg.size - 4)) {
          let latnF = String.fromCharCode(99,111,110,118,101,114,115,105,111,110,95,120,95,51,53,0);
         analyticsg = new Map([[`${greyp.size}`, (String.fromCharCode(49,0) == downarrowS ? downarrowS.length : greyp.size)]]);
         latnF = `${3 | latnF.length}`;
         break;
      }
          let mapping1 = 5;
         downarrowS += `${1 & parseInt(`${pressurex}`)}`;
         mapping1 /= Math.max(mapping1 / (Math.max(mapping1, 3)), 2);
      let roomL = greyp.size <= 6770603;
      do {
          let matchdetailbg3 = String.fromCharCode(100,114,97,119,101,114,95,118,95,49,48,48,0);
          let orangeuparrow2 = String.fromCharCode(114,95,50,53,95,109,105,100,116,111,110,101,115,0);
         greyp = new Map([[`${analyticsg.size}`, matchdetailbg3.length]]);
         matchdetailbg3 += `${orangeuparrow2.length}`;
         orangeuparrow2 += `${orangeuparrow2.length}`;
         if (roomL) {
            break;
         }
      } while (roomL && (3 > (1 - greyp.size) && (1 - stylesu.size) > 1));
         pressurex *= parseFloat(`${parseInt(`${pressurex}`) / (Math.max(4, analyticsg.size))}`);
      reactnativeultimatelistviewh = "3";
      break;
   }
       let episodesc = String.fromCharCode(99,97,99,104,101,115,95,116,95,53,53,0);
      let gift6 = episodesc == String.fromCharCode(113,100,49,54,54,56,118,54,0);
      do {
          let megaphoney: Map<any, any> = new Map([[String.fromCharCode(100,97,116,97,98,108,111,99,107,95,108,95,53,56,0),599], [String.fromCharCode(99,104,101,99,107,109,97,114,107,115,95,112,95,53,57,0),528], [String.fromCharCode(98,97,107,101,100,95,118,95,56,56,0),810]]);
          let subbasketballplayerg = String.fromCharCode(118,105,100,101,111,116,111,111,108,98,111,120,95,121,95,55,48,0);
          let stylesQ = 1.0;
         episodesc += `${episodesc.length}`;
         megaphoney = new Map([[`${megaphoney.size}`, megaphoney.size / (Math.max(2, 6))]]);
         subbasketballplayerg = `${(String.fromCharCode(48,0) == subbasketballplayerg ? parseInt(`${stylesQ}`) : subbasketballplayerg.length)}`;
         stylesQ += parseInt(`${stylesQ}`);
         if (gift6) {
            break;
         }
      } while (gift6 && (episodesc.length == episodesc.length));
      let bottomY = episodesc == String.fromCharCode(49,98,112,53,116,115,113,57,106,0);
      do {
          let vertical9: Array<any> = [String.fromCharCode(122,95,50,52,95,110,117,109,101,114,111,0), String.fromCharCode(105,95,52,51,0)];
          let middlewaref: Array<any> = [874, 457, 295];
          let countryE = 0;
          let basketballtrophyd = String.fromCharCode(114,101,112,95,119,95,50,56,0);
         episodesc += "2";
         vertical9.push(middlewaref.length);
         middlewaref.push((String.fromCharCode(75,0) == basketballtrophyd ? vertical9.length : basketballtrophyd.length));
         countryE += vertical9.length;
         if (bottomY) {
            break;
         }
      } while (bottomY && (episodesc != episodesc));
          let yellowscoreballQ = 5.0;
          let exampleimageD = String.fromCharCode(99,111,100,101,98,111,111,107,115,95,55,95,53,54,0);
          let styler = true;
         episodesc += `${(String.fromCharCode(89,0) == exampleimageD ? exampleimageD.length : parseInt(`${yellowscoreballQ}`))}`;
         yellowscoreballQ += ((styler ? 2 : 3));
      privacyg -= nativeF.length >> (Math.min(promotionM.length, 4));
   for (let x = 0; x < 3; x++) {
      reactnativeultimatelistviewh = `${(String.fromCharCode(87,0) == promotionM ? yellowtoredj.length : promotionM.length)}`;
   }
      iconshareC += `${3 + hookJ.length}`;
       let smallbrightnessN = false;
       let taiwan1: Map<any, any> = new Map([[String.fromCharCode(114,103,98,114,103,98,95,103,95,57,48,0),false ], [String.fromCharCode(114,95,56,55,95,112,97,115,115,119,111,114,100,0),true ], [String.fromCharCode(118,97,114,105,97,110,116,115,95,116,95,53,0),true ]]);
       let successI = 5;
       let internet5: Map<any, any> = new Map([[String.fromCharCode(109,95,52,95,119,114,105,116,105,110,103,0),778], [String.fromCharCode(99,100,97,116,101,95,109,95,54,55,0),989]]);
         smallbrightnessN = !smallbrightnessN;
          let iconorientationy = 4.0;
         smallbrightnessN = internet5.size >= successI;
         iconorientationy /= Math.max(1, 2);
      let libfbjnih = 7973053 >= taiwan1.size;
      do {
         taiwan1.set(`${smallbrightnessN}`, (2 - (smallbrightnessN ? 5 : 2)));
         if (libfbjnih) {
            break;
         }
      } while ((5 == (successI % 1)) && libfbjnih);
         internet5.set(`${successI}`, successI);
      for (let j = 0; j < 2; j++) {
         smallbrightnessN = (internet5.size % (Math.max(taiwan1.size, 3))) > 14;
      }
          let libfb7 = String.fromCharCode(114,95,56,50,95,112,114,101,102,101,114,101,110,99,101,0);
         taiwan1.set(`${successI}`, successI);
         libfb7 = "3";
          let bodanG = String.fromCharCode(115,105,109,112,108,101,115,105,103,110,97,108,95,103,95,57,50,0);
          let manifestk: Array<any> = [875, 210];
          let kickJ = String.fromCharCode(117,95,53,50,95,98,111,117,110,100,97,114,105,101,115,0);
         internet5 = new Map([[`${taiwan1.size}`, taiwan1.size & bodanG.length]]);
         bodanG = `${1 * kickJ.length}`;
         manifestk = [manifestk.length];
         kickJ += `${(kickJ == String.fromCharCode(114,0) ? manifestk.length : kickJ.length)}`;
       let downloady = String.fromCharCode(97,109,112,108,105,102,121,95,113,95,56,55,0);
      text2 = new Map([[`${taiwan1.size}`, calendarq.length | 1]]);
      basketballiconE += 3 ^ parseInt(`${privacyg}`);
      handleRefresh();
    }
  }, []);

  useEffect(() => {
    setIsOffline(settingsReducer.isOffline);
  }, []);

  useFocusEffect(useCallback(() => {
    if (!settingsReducer.isOffline && settingsReducer.isOffline !== isOffline) {
      setIsOffline(settingsReducer.isOffline);
      handleRefresh();
    } else if (settingsReducer.isOffline) {
      return () => {
        setIsOffline(settingsReducer.isOffline);
      }
    }
  }, [settingsReducer.isOffline]));

  
  useEffect(() => {
    const unsubscribe = navigation.addListener('tabPress', handleTabPress);

    
    return () => unsubscribe();
  }, [isFocused]);

  const fetchPlaylist = useCallback((page: number) =>
    mayi_ServiceFilter.getTopic(page)
      .then((json: mayi_Predictionwin) => {
        setTotalPage(Number(json.TotalPageCount));
        return Object.values(json.List);
      }), []);

  const {
    data: playlists,
    isSuccess,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isFetching,
  } = useInfiniteQuery(
    ['vodPlaylist'],
    ({ pageParam = 1 }) => fetchPlaylist(pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        if (lastPage === null) {
          return undefined;
        }
        const nextPage = allPages.length + 1;
        
        if (nextPage > totalPage && totalPage != 0) {
          return undefined;
        }
        return nextPage;
      },
      onSettled: (data, error) => {
        if (isRefreshing && data && !error) {
          setIsRefreshing(false);
        }

        if (isSwipeRefreshing && data && !error) {
          setIsSwipeRefreshing(false);
        }
      },
      
      
      
      
      
    },
  );

  const renderItem = useCallback(({ item }: mayi_EventLibnms) => (
    <VodPlaylist playlist={item} titleStyle={{ color: colors.text }} />
  ), []);

  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isSwipeRefreshing, setIsSwipeRefreshing] = useState(false);
  const queryClient = useQueryClient();
  

  const handleRefresh = useCallback(async (isSwipe: boolean = false) => {
       let leftd = String.fromCharCode(99,111,108,108,95,120,95,56,57,0);
    let rnewsJ = String.fromCharCode(110,105,103,104,116,115,104,111,116,95,109,95,54,56,0);
    let custom1: Array<any> = [915, 839, 979];
    let footballfieldi = String.fromCharCode(112,108,97,110,97,114,120,95,56,95,51,53,0);
    let stationE = String.fromCharCode(99,116,114,108,95,49,95,56,52,0);
    let statisticsinactive7 = String.fromCharCode(105,95,54,54,95,112,114,111,98,97,98,108,101,0);
    let owngoale = 4;
    let linei: Array<any> = [34, 361];
    let volume1 = true;
    let patht = 4;
    let sinaN = String.fromCharCode(115,112,101,108,108,95,118,95,50,48,0);
    let mbbidL: Map<any, any> = new Map([[String.fromCharCode(109,105,115,109,97,116,99,104,101,115,95,50,95,57,48,0),String.fromCharCode(101,120,112,97,110,100,95,116,95,55,54,0)], [String.fromCharCode(122,95,49,53,95,99,108,101,97,114,105,0),String.fromCharCode(115,105,103,110,105,102,105,99,97,110,99,101,95,103,95,55,50,0)], [String.fromCharCode(117,95,52,56,95,100,101,112,101,110,100,101,110,99,105,101,115,0),String.fromCharCode(97,95,53,48,95,112,117,98,107,101,121,0)]]);
    let libmapbufferjni1 = false;
    let libjsijniprofiler5: Array<any> = [391, 240];
   for (let z = 0; z < 1; z++) {
      volume1 = linei.length > statisticsinactive7.length;
   }
      linei.push(custom1.length);
   while (statisticsinactive7 == stationE) {
      stationE += `${rnewsJ.length}`;
      break;
   }
   if (footballfieldi.length > patht) {
       let liveO = false;
       let soundJ = String.fromCharCode(119,97,116,101,114,109,97,114,107,115,95,57,95,56,56,0);
          let time_a6E = String.fromCharCode(116,95,50,50,0);
         soundJ = "1";
         time_a6E = `${1 - time_a6E.length}`;
       let trophyv = String.fromCharCode(100,95,55,49,95,105,115,114,101,97,100,111,110,108,121,0);
         liveO = trophyv.length == 60;
      if (trophyv.length >= 5 && soundJ == String.fromCharCode(102,0)) {
          let chinaP = 2.0;
          let qaagT = String.fromCharCode(115,95,56,48,95,112,105,120,102,109,116,0);
          let uploadv = true;
          let statisticsu = 3.0;
         soundJ = `${((liveO ? 2 : 2) - 3)}`;
         chinaP *= (parseFloat(`${(uploadv ? 2 : 5) + parseInt(`${statisticsu}`)}`));
         qaagT += `${parseInt(`${chinaP}`) ^ qaagT.length}`;
         uploadv = !uploadv || statisticsu > 4.13;
      }
         soundJ = `${2 ^ trophyv.length}`;
      if (trophyv == String.fromCharCode(79,0) && soundJ.length <= 1) {
         soundJ = `${((liveO ? 2 : 1) << (Math.min(Math.abs(3), 4)))}`;
      }
      patht -= ((volume1 ? 4 : 1) | 3);
   }

    if (isSwipe) {

      stationE = "3";
      rnewsJ = "2";
       let libreactnativejnik = String.fromCharCode(101,120,99,101,101,100,101,100,95,107,95,53,52,0);
       let stations0: Map<any, any> = new Map([[String.fromCharCode(100,101,109,111,95,114,95,51,54,0),true ], [String.fromCharCode(99,95,57,53,95,105,110,118,97,108,105,100,97,116,105,111,110,0),false ], [String.fromCharCode(116,95,49,55,95,115,116,97,114,0),false ]]);
         libreactnativejnik += `${libreactnativejnik.length ^ 2}`;
      if ((5 * stations0.size) >= 5 || (stations0.size * libreactnativejnik.length) >= 5) {
         stations0 = new Map([[`${stations0.size}`, 3]]);
      }
      while (!libreactnativejnik.includes(`${stations0.size}`)) {
         libreactnativejnik = `${stations0.size}`;
         break;
      }
      while (libreactnativejnik.length == stations0.size) {
         libreactnativejnik = `${libreactnativejnik.length - 1}`;
         break;
      }
       let langc = String.fromCharCode(100,95,55,56,95,97,118,115,115,0);
         stations0 = new Map([[libreactnativejnik, langc.length]]);
      statisticsinactive7 += `${patht}`;
   while ((linei.length ^ statisticsinactive7.length) < 3) {
      statisticsinactive7 += `${owngoale ^ 3}`;
      break;
   }
      setIsSwipeRefreshing(true);
    } else {

   let orangeuparrowb = custom1.length >= 7747152;
   do {
      custom1.push((String.fromCharCode(67,0) == sinaN ? (volume1 ? 2 : 2) : sinaN.length));
      if (orangeuparrowb) {
         break;
      }
   } while (orangeuparrowb && (2 >= (1 >> (Math.min(3, custom1.length))) && 1 >= (linei.length >> (Math.min(2, custom1.length)))));
   let downloadC = statisticsinactive7 == String.fromCharCode(106,111,48,97,0);
   do {
      statisticsinactive7 = `${((volume1 ? 1 : 2) ^ linei.length)}`;
      if (downloadC) {
         break;
      }
   } while (downloadC && (1 == (statisticsinactive7.length & 4) && (linei.length & statisticsinactive7.length) == 4));
      rnewsJ += `${((volume1 ? 5 : 2) + 2)}`;
      linei.push((1 & (volume1 ? 4 : 3)));
      setIsRefreshing(true);
    }
    

   while (stationE.endsWith(`${sinaN.length}`)) {
      stationE += `${leftd.length << (Math.min(Math.abs(1), 1))}`;
      break;
   }
       let mbsplash_ = 5.0;
      while ((mbsplash_ / (Math.max(9, mbsplash_))) > 4.86 && 3.47 > (4.86 / (Math.max(7, mbsplash_)))) {
         mbsplash_ += parseInt(`${mbsplash_}`) % 1;
         break;
      }
      for (let h = 0; h < 1; h++) {
         mbsplash_ += 1 >> (Math.min(Math.abs(parseInt(`${mbsplash_}`)), 3));
      }
          let malaysiad = String.fromCharCode(116,104,101,114,101,117,109,95,57,95,56,51,0);
         mbsplash_ /= Math.max(4, parseInt(`${mbsplash_}`));
         malaysiad = `${malaysiad.length}`;
      leftd += "2";
      patht += leftd.length;
   let graphicsf = 5134636 <= patht;
   do {
      patht += statisticsinactive7.length;
      if (graphicsf) {
         break;
      }
   } while ((2 >= (stationE.length << (Math.min(Math.abs(4), 3))) && (stationE.length << (Math.min(5, Math.abs(patht)))) >= 4) && graphicsf);
    

      patht /= Math.max(((volume1 ? 2 : 2)), 4);
   let airbnbstarM = String.fromCharCode(109,119,119,95,102,100,0) == footballfieldi;
   do {
      footballfieldi += `${linei.length}`;
      if (airbnbstarM) {
         break;
      }
   } while (airbnbstarM && (3 > (footballfieldi.length << (Math.min(1, Math.abs(owngoale)))) && (owngoale << (Math.min(footballfieldi.length, 5))) > 3));
       let privatechatbgX = String.fromCharCode(121,95,57,95,117,116,117,114,101,0);
       let matchdetailbgD = 1.0;
       let issubh = 0;
          let elementsj = String.fromCharCode(109,95,49,57,95,99,111,108,115,107,105,112,0);
         matchdetailbgD += parseInt(`${matchdetailbgD}`);
         elementsj = `${elementsj.length}`;
      while (5 <= (privatechatbgX.length | issubh) && 1 <= (issubh | 5)) {
         privatechatbgX = `${privatechatbgX.length % 2}`;
         break;
      }
       let short_uE = 0;
         matchdetailbgD *= issubh % 3;
      for (let b = 0; b < 2; b++) {
         matchdetailbgD += parseInt(`${matchdetailbgD}`) << (Math.min(5, Math.abs(1)));
      }
       let userN: Map<any, any> = new Map([[String.fromCharCode(101,120,112,105,114,101,115,95,50,95,49,49,0),138], [String.fromCharCode(103,95,52,57,95,117,110,105,102,111,114,109,0),128], [String.fromCharCode(99,111,110,118,101,114,116,101,100,95,121,95,52,56,0),18]]);
         userN = new Map([[`${userN.size}`, privatechatbgX.length]]);
         privatechatbgX += `${privatechatbgX.length}`;
      for (let o = 0; o < 3; o++) {
         privatechatbgX += `${userN.size}`;
      }
      custom1 = [3 * statisticsinactive7.length];
   if ((linei.length + 3) >= 1 && 3 >= (linei.length + 3)) {
       let mathe = 3;
       let userW = String.fromCharCode(106,95,54,49,95,109,97,103,110,105,102,105,101,114,0);
       let release_exv: Map<any, any> = new Map([[String.fromCharCode(107,105,116,95,107,95,53,50,0),String.fromCharCode(97,116,116,114,105,98,117,116,101,100,95,115,95,55,52,0)], [String.fromCharCode(97,95,53,54,95,111,110,97,118,99,100,97,116,97,0),String.fromCharCode(112,101,101,114,99,111,110,110,101,99,116,105,111,110,95,116,95,53,55,0)]]);
       let zoomI = String.fromCharCode(99,111,109,98,105,110,97,116,111,114,95,102,95,50,0);
         zoomI += `${(String.fromCharCode(51,0) == userW ? mathe : userW.length)}`;
         userW = `${(String.fromCharCode(111,0) == userW ? userW.length : zoomI.length)}`;
          let promotionQ = String.fromCharCode(102,111,114,109,97,116,115,95,97,95,53,56,0);
         userW += `${zoomI.length}`;
         promotionQ += `${promotionQ.length - promotionQ.length}`;
          let playlistc = String.fromCharCode(98,114,97,99,107,101,116,115,95,49,95,55,57,0);
         release_exv.set(userW, 1 & userW.length);
         playlistc += `${playlistc.length}`;
         release_exv = new Map([[`${mathe}`, 2 % (Math.max(1, zoomI.length))]]);
      while (3 < mathe) {
         zoomI = `${release_exv.size}`;
         break;
      }
          let transferV = 3.0;
          let tooltipsq = 3.0;
         mathe <<= Math.min(Math.abs(parseInt(`${transferV}`)), 4);
         tooltipsq *= parseInt(`${tooltipsq}`) / 3;
      for (let y = 0; y < 2; y++) {
         userW = `${1 >> (Math.min(5, Math.abs(mathe)))}`;
      }
      while (4 > (3 ^ zoomI.length) || (zoomI.length ^ release_exv.size) > 3) {
          let yellowtoredC: Map<any, any> = new Map([[String.fromCharCode(97,108,105,103,110,95,113,95,56,57,0),String.fromCharCode(116,120,105,100,95,109,95,49,49,0)], [String.fromCharCode(122,95,52,53,95,119,97,118,101,108,101,116,0),String.fromCharCode(119,95,51,48,95,99,97,108,99,119,0)], [String.fromCharCode(112,114,111,109,111,116,105,110,103,95,55,95,54,56,0),String.fromCharCode(104,95,54,53,95,115,101,101,107,104,101,97,100,0)]]);
          let current3 = true;
          let disconnecteda = false;
          let filter5 = 3.0;
         release_exv = new Map([[`${current3}`, ((disconnecteda ? 1 : 1) - (current3 ? 1 : 1))]]);
         yellowtoredC.set(`${filter5}`, parseInt(`${filter5}`) * 3);
         disconnecteda = yellowtoredC.size <= 27;
         break;
      }
      for (let l = 0; l < 1; l++) {
         userW = `${userW.length}`;
      }
          let connectiong = 4.0;
          let gradlewt = String.fromCharCode(102,114,97,109,101,95,116,95,53,57,0);
         userW += `${zoomI.length}`;
         connectiong += parseFloat(`${1 | gradlewt.length}`);
         gradlewt = `${parseInt(`${connectiong}`) ^ gradlewt.length}`;
      if (zoomI.includes(userW)) {
         userW += `${(String.fromCharCode(100,0) == userW ? mathe : userW.length)}`;
      }
      linei.push(((volume1 ? 3 : 1)));
   }

    

   for (let h = 0; h < 1; h++) {
      rnewsJ = `${patht >> (Math.min(statisticsinactive7.length, 1))}`;
   }
       let about1 = String.fromCharCode(112,105,120,108,101,116,95,102,95,55,57,0);
         about1 += `${about1.length % (Math.max(2, about1.length))}`;
         about1 += `${3 << (Math.min(5, about1.length))}`;
         about1 = "3";
      patht /= Math.max(footballfieldi.length & patht, 1);
   for (let z = 0; z < 2; z++) {
      patht <<= Math.min(1, Math.abs(footballfieldi.length + 1));
   }
   if ((linei.length << (Math.min(rnewsJ.length, 2))) >= 4) {
      rnewsJ = `${mbbidL.size}`;
   }
    await queryClient.resetQueries(['vodPlaylist']); 

    
  }, []);

  
  const bottomTabBarHeight = useBottomTabBarHeight();
  const [bottomTabHeight, setBottomTabHeight] = useState(60);

  return (
    <>
      <ScreenContainer containerStyle={{ paddingLeft: 0, paddingRight: 0 }}>
        <MainHeader
          headerStyle={{
            marginBottom: spacing.m,
            paddingLeft: spacing.sideOffset,
            paddingRight: spacing.sideOffset,
          }}
          logo={
            <Text
              style={{
                ...textVariants.bigHeader,
                color: colors.text,
                fontSize: 22,
              }}>
              播单
            </Text>
          }
          navigator={navigation}
        />
        {isRefreshing && !isOffline && (
          <View
            style={{
              ...styles.loading,
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {
              <FastImage
                style={{ height: 80, width: 80 }}
                source={require('@static/images/robotoNetwork.gif')}
                resizeMode={"contain"}
              />
            }
          </View>
        )}
        {!isOffline && (
          <>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={playlists?.pages.flat()}
              onEndReached={() => {
                if (hasNextPage) {
                  fetchNextPage();
                }
              }}
              removeClippedSubviews={true}
              onEndReachedThreshold={0.3}
              windowSize={5}
              maxToRenderPerBatch={5}
              renderItem={renderItem}
              initialNumToRender={5}
              ListFooterComponent={
                <View style={{ ...styles.loading, marginBottom: spacing.xl }}>
                  {hasNextPage && (
                    <FastImage
                      style={{ height: 80, width: 80 }}
                      source={require('@static/images/robotoNetwork.gif')}
                      resizeMode={"contain"}
                    />
                  )}
                  {!(isFetchingNextPage || isFetching) && !hasNextPage && (
                    <Text style={{ ...textVariants.body, color: colors.muted }}>
                      没有更多了
                    </Text>
                  )}
                </View>
              }
              refreshControl={
                <RefreshControl
                  refreshing={isSwipeRefreshing}
                  onRefresh={() => handleRefresh(true)}
                  tintColor="#FAC33D" 
                />
              }
            />
          </>
        )}
      </ScreenContainer>
      {isOffline && <NoConnection onClickRetry={checkConnection} />}
    </>
  );
};

export default memo(Playlist);

const styles = StyleSheet.create({
  header: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  loading: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
  },
});
