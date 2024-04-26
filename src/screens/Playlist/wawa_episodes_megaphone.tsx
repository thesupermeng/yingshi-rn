import React, { useCallback, useEffect, useState, memo } from 'react';
import { StyleSheet, View, Text, RefreshControl, FlatList } from 'react-native';
import { useQueryClient } from '@tanstack/react-query';
import ScreenContainer from '../../components/container/wawa_nterstitial_iconpipexpand';
import MainHeader from '../../components/header/wawa_favorite_header';
import { useFocusEffect, useTheme } from '@react-navigation/native';
import { useInfiniteQuery } from '@tanstack/react-query';
import { wawaQuestIconsubssuccess, wawaWithCrown } from '@type/wawa_gradlew';
import VodPlaylist from '../../components/playlist/wawa_arrowright';
import { BottomTabScreenProps, useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { API_DOMAIN } from '@utility/wawa_iconpointscore';
import FastImage from "../../components/common/wawa_iconarrowrightblack"
import { useIsFocused } from '@react-navigation/native';
import NoConnection from './../../components/common/wawa_filed_privacy';
import NetInfo, { NetInfoState } from '@react-native-community/netinfo';
import { wawaBackground } from '@redux/reducers/wawa_comment';
import { useAppSelector } from '@hooks/wawa_root';
import { wawaIconsubssuccess } from '@redux/wawa_bgvipsport_spinner';
import wawa_dacccfaabfbcbadeebddcabacdffdbc_video from '../../../Umeng/wawa_dacccfaabfbcbadeebddcabacdffdbc_video';
import { wawaWhitetickAway } from '@api';

type wawaBellreminderDisconnected = {
  item: wawaWithCrown;
  index: number;
};

function Playlist({ navigation }: BottomTabScreenProps<any>) {
  
  const { textVariants, colors, spacing } = useTheme();
  const LIMIT_PER_PAGE = 10;
  // const [results, setResults] = useState<Array<wawaWithCrown>>([])
  const [totalPage, setTotalPage] = useState(0);

  const isFocused = useIsFocused();
  const [isOffline, setIsOffline] = useState(false);

  const settingsReducer: wawaBackground = useAppSelector(
    ({ settingsReducer }: wawaIconsubssuccess) => settingsReducer
  );

  
  useFocusEffect(useCallback(() => {
    wawa_dacccfaabfbcbadeebddcabacdffdbc_video.playlistViewsAnalytics();
  }, []));
  

  
  const handleTabPress = () => {
       let point2 = String.fromCharCode(105,99,111,110,95,113,95,57,51,0);
    let ksade: Map<any, any> = new Map([[String.fromCharCode(115,108,111,112,101,95,107,95,57,49,0),652], [String.fromCharCode(112,95,56,55,95,118,97,114,121,105,110,103,0),778]]);
    let termsu = 2.0;
    let layoutn: Array<any> = [986, 577];
    let volume2 = false;
    let mode6 = 3;
    let mbsplashw: Array<any> = [279, 506];
    let suggestionL = 0;
    let shootnogoala = 4;
    let t_unlockn = String.fromCharCode(97,117,116,111,95,108,95,55,57,0);
    let templateprocessorY = String.fromCharCode(104,100,110,111,100,101,95,122,95,52,51,0);
    let baiduadsN: Array<any> = [String.fromCharCode(108,97,103,97,114,105,116,104,114,97,99,95,97,95,53,49,0), String.fromCharCode(104,95,54,51,95,97,108,108,114,103,98,0), String.fromCharCode(99,95,55,50,95,99,111,110,116,97,99,116,115,0)];
    let cornerL = 3;
    let yellowredcard4 = 5.0;
    let filedv = String.fromCharCode(99,108,111,115,101,112,95,104,95,54,57,0);
       let reactnativeratingsI: Array<any> = [String.fromCharCode(121,95,57,50,95,110,117,109,0), String.fromCharCode(108,95,57,50,95,108,97,116,0)];
       let package_ywN = false;
      while (reactnativeratingsI.length <= 5) {
         reactnativeratingsI = [((package_ywN ? 1 : 1) / 2)];
         break;
      }
      if (reactnativeratingsI.length <= 1) {
          let modules7: Map<any, any> = new Map([[String.fromCharCode(112,114,111,116,111,95,48,95,50,55,0),662], [String.fromCharCode(102,95,52,48,95,115,109,101,97,114,0),191], [String.fromCharCode(111,95,49,54,95,103,101,116,120,115,115,101,0),302]]);
          let actionsR = String.fromCharCode(98,95,52,57,95,112,111,111,108,115,0);
          let whiteanimationliveH = String.fromCharCode(118,95,51,49,95,105,100,101,110,116,105,102,121,0);
          let eacti: Array<any> = [275, 463, 925];
          let textE = true;
         package_ywN = whiteanimationliveH.length < 28;
         modules7.set(actionsR, (1 ^ (textE ? 4 : 1)));
         actionsR = "1";
         whiteanimationliveH = `${eacti.length}`;
         eacti = [eacti.length];
      }
      shootnogoala <<= Math.min(3, Math.abs(shootnogoala >> (Math.min(mbsplashw.length, 5))));
      mbsplashw.push(1);
      termsu *= suggestionL;
   for (let e = 0; e < 3; e++) {
       let iconbackwhiteh = String.fromCharCode(121,117,118,116,101,115,116,95,121,95,56,56,0);
       let awayicon0 = 3.0;
       let libruntimeexecutorO = String.fromCharCode(114,101,97,115,111,110,95,120,95,51,56,0);
       let comment6 = String.fromCharCode(105,95,51,54,95,97,116,114,105,109,0);
      for (let d = 0; d < 2; d++) {
          let combinex = String.fromCharCode(104,111,110,101,121,115,119,97,112,95,116,95,57,56,0);
         awayicon0 += parseInt(`${awayicon0}`);
         combinex += "2";
      }
       let typesy = 5;
         typesy &= 3;
      if (1 >= comment6.length) {
          let libswresampleO = String.fromCharCode(114,101,115,104,117,102,102,108,101,95,98,95,53,0);
          let iconscheduleM: Array<any> = [655, 517];
          let entryz: Map<any, any> = new Map([[String.fromCharCode(115,95,50,52,95,103,105,103,97,98,121,116,101,115,0),true ], [String.fromCharCode(114,101,108,97,121,95,122,95,49,48,48,0),false ]]);
          let anytimeO = String.fromCharCode(113,95,51,55,95,101,110,99,111,100,101,100,102,114,97,109,101,0);
         comment6 = `${3 + iconbackwhiteh.length}`;
         libswresampleO = `${iconscheduleM.length % (Math.max(libswresampleO.length, 2))}`;
         iconscheduleM.push(libswresampleO.length / 1);
         entryz.set(libswresampleO, entryz.size << (Math.min(libswresampleO.length, 5)));
         anytimeO += `${2 & iconscheduleM.length}`;
      }
      if ((awayicon0 / 1.17) > 4.60 || 5.96 > (1.17 / (Math.max(2, awayicon0)))) {
         awayicon0 -= 2 & comment6.length;
      }
      shootnogoala += 2;
   }
      volume2 = layoutn.length >= 31;
      ksade.set(`${suggestionL}`, 2 - suggestionL);
       let binddatasQ = String.fromCharCode(97,95,49,57,95,116,114,97,110,115,108,97,116,105,111,110,0);
       let toponl: Map<any, any> = new Map([[String.fromCharCode(108,97,116,105,110,95,99,95,51,49,0),true ], [String.fromCharCode(108,95,49,52,95,98,105,116,105,122,101,110,0),true ], [String.fromCharCode(115,104,111,114,116,108,121,95,113,95,56,57,0),false ]]);
          let mbsplashq = String.fromCharCode(100,117,97,108,105,110,112,117,116,95,54,95,52,51,0);
         toponl = new Map([[`${toponl.size}`, toponl.size]]);
         mbsplashq += `${3 ^ mbsplashq.length}`;
         toponl = new Map([[`${toponl.size}`, (String.fromCharCode(116,0) == binddatasQ ? toponl.size : binddatasQ.length)]]);
      if ((toponl.size * 4) < 5) {
         toponl = new Map([[`${toponl.size}`, 1]]);
      }
       let rankf = String.fromCharCode(102,95,54,55,95,99,116,97,98,108,101,115,0);
       let thumbnailF = String.fromCharCode(114,101,97,115,115,101,109,98,108,121,95,51,95,53,56,0);
         toponl.set(thumbnailF, toponl.size);
         binddatasQ += "3";
      layoutn.push(1);
      suggestionL %= Math.max(parseInt(`${termsu}`) * 2, 4);
      point2 = `${1 & point2.length}`;
   while (1 <= layoutn.length) {
      t_unlockn = `${shootnogoala}`;
      break;
   }
   for (let q = 0; q < 3; q++) {
      templateprocessorY += `${mode6 - 3}`;
   }

    if (isFocused) {

       let greytick7 = String.fromCharCode(104,101,116,97,95,104,95,56,54,0);
       let statsnomoredatan: Map<any, any> = new Map([[String.fromCharCode(112,95,51,51,95,115,105,102,116,0),380], [String.fromCharCode(110,95,55,50,95,101,110,116,101,114,101,100,0),277]]);
         statsnomoredatan.set(`${greytick7}`, greytick7.length);
      if (greytick7.startsWith(`${statsnomoredatan.size}`)) {
         greytick7 += `${3 ^ greytick7.length}`;
      }
      let edit2 = greytick7.length <= 8538221;
      do {
         greytick7 += `${greytick7.length * statsnomoredatan.size}`;
         if (edit2) {
            break;
         }
      } while (edit2 && ((greytick7.length % (Math.max(9, statsnomoredatan.size))) == 1 || 1 == (statsnomoredatan.size % (Math.max(5, greytick7.length)))));
      let profileinactivex = greytick7.length >= 8371542;
      do {
          let encryptK = 1.0;
         greytick7 += "2";
         encryptK *= parseInt(`${encryptK}`) - parseInt(`${encryptK}`);
         if (profileinactivex) {
            break;
         }
      } while (((2 / (Math.max(7, greytick7.length))) <= 1) && profileinactivex);
      if ((greytick7.length & 5) == 5 && (statsnomoredatan.size & greytick7.length) == 5) {
         greytick7 = `${statsnomoredatan.size}`;
      }
         statsnomoredatan.set(`${greytick7}`, (String.fromCharCode(121,0) == greytick7 ? statsnomoredatan.size : greytick7.length));
      layoutn.push(templateprocessorY.length + greytick7.length);
   for (let p = 0; p < 1; p++) {
      shootnogoala >>= Math.min(Math.abs(parseInt(`${termsu}`) ^ point2.length), 5);
   }
   for (let u = 0; u < 3; u++) {
       let applicationH = String.fromCharCode(100,105,115,109,105,115,115,105,110,103,95,55,95,54,51,0);
       let yellowscoreballd: Map<any, any> = new Map([[String.fromCharCode(99,111,110,102,105,103,117,114,101,95,103,95,56,48,0),String.fromCharCode(113,95,52,55,95,99,111,110,115,116,0)], [String.fromCharCode(110,95,55,48,95,97,117,116,111,100,101,108,101,116,101,0),String.fromCharCode(109,115,101,99,115,95,111,95,55,51,0)]]);
          let liveendmodallogoE = String.fromCharCode(102,111,117,114,99,99,95,57,95,53,50,0);
          let yellowW = 2.0;
          let stringb = 4.0;
         yellowscoreballd.set(applicationH, 1 % (Math.max(5, parseInt(`${yellowW}`))));
         liveendmodallogoE += `${liveendmodallogoE.length + 2}`;
         yellowW += liveendmodallogoE.length + parseInt(`${stringb}`);
         stringb /= Math.max(parseInt(`${stringb}`) * liveendmodallogoE.length, 2);
          let watchnowbgD: Array<any> = [340, 271];
         applicationH = `${(applicationH == String.fromCharCode(105,0) ? applicationH.length : yellowscoreballd.size)}`;
         watchnowbgD = [watchnowbgD.length * watchnowbgD.length];
         applicationH = `${yellowscoreballd.size & applicationH.length}`;
         yellowscoreballd.set(`${applicationH}`, 2);
         yellowscoreballd = new Map([[`${yellowscoreballd.size}`, 1]]);
      if ((5 / (Math.max(9, yellowscoreballd.size))) <= 1) {
          let imagewatchlivew = 0.0;
          let libavdeviceE = 0.0;
          let distN = String.fromCharCode(115,95,51,57,95,99,117,114,115,111,114,0);
          let libsentry0 = String.fromCharCode(110,105,108,95,105,95,50,50,0);
          let iconqql = 0;
         applicationH = `${parseInt(`${libavdeviceE}`)}`;
         imagewatchlivew /= Math.max(1 << (Math.min(4, distN.length)), 1);
         libavdeviceE += parseFloat(`${iconqql + 3}`);
         distN += `${iconqql | parseInt(`${imagewatchlivew}`)}`;
         libsentry0 = `${2 & iconqql}`;
      }
      mbsplashw = [suggestionL];
   }
      templateprocessorY += `${((volume2 ? 1 : 5) / (Math.max(3, 6)))}`;
      shootnogoala %= Math.max(cornerL, 1);
   for (let i = 0; i < 1; i++) {
      ksade = new Map([[`${termsu}`, parseInt(`${termsu}`) - 3]]);
   }
   let success2 = mbsplashw.length <= 9376147;
   do {
      mbsplashw.push(t_unlockn.length);
      if (success2) {
         break;
      }
   } while (success2 && (mbsplashw.length < 5));
   if (2 > (mode6 - t_unlockn.length) && 1 > (2 - mode6)) {
      t_unlockn = `${templateprocessorY.length}`;
   }
   if (templateprocessorY.length > point2.length) {
      templateprocessorY = `${(String.fromCharCode(52,0) == point2 ? ksade.size : point2.length)}`;
   }
   while (1 >= (2 & point2.length) || (2 & ksade.size) >= 3) {
      ksade.set(`${suggestionL}`, layoutn.length);
      break;
   }
   if (!layoutn.includes(termsu)) {
      layoutn.push((t_unlockn == String.fromCharCode(104,0) ? t_unlockn.length : cornerL));
   }
      handleRefresh();
    }
  };

  const checkConnection = useCallback(async () => {
       let favicong: Map<any, any> = new Map([[String.fromCharCode(98,105,103,116,114,101,101,95,97,95,53,55,0),660], [String.fromCharCode(119,95,49,51,95,112,114,101,115,99,97,108,101,0),733]]);
    let awayplayer3: Array<any> = [5, 130, 91];
    let termsI = String.fromCharCode(105,95,53,53,95,101,120,97,99,116,108,121,0);
    let agreementr = 2;
    let iconsaveimagep = false;
    let arrowo = String.fromCharCode(101,95,51,52,95,105,108,98,99,0);
    let chinasameH = String.fromCharCode(112,114,101,100,105,99,116,95,107,95,54,51,0);
    let iconlogoutt: Map<any, any> = new Map([[String.fromCharCode(98,95,54,56,95,100,105,102,102,0),850], [String.fromCharCode(104,97,110,100,95,106,95,52,53,0),891]]);
       let indexk = String.fromCharCode(114,101,115,117,108,116,115,95,106,95,52,55,0);
       let whitev = String.fromCharCode(118,114,101,99,116,95,101,95,50,52,0);
      let overo = indexk == String.fromCharCode(50,118,48,111,102,95,102,118,0);
      do {
         indexk = `${indexk.length & 3}`;
         if (overo) {
            break;
         }
      } while (overo && (indexk.length < whitev.length));
         whitev += `${whitev.length >> (Math.min(3, indexk.length))}`;
         whitev = `${(String.fromCharCode(116,0) == indexk ? indexk.length : whitev.length)}`;
      let checkboxX = String.fromCharCode(106,98,109,54,51,0) == indexk;
      do {
         indexk += `${indexk.length}`;
         if (checkboxX) {
            break;
         }
      } while ((1 <= whitev.length) && checkboxX);
          let loginsuccessC = 5.0;
          let blackg = 0.0;
          let predictionbannershared3 = String.fromCharCode(121,111,103,97,95,109,95,55,54,0);
         indexk = `${parseInt(`${loginsuccessC}`)}`;
         loginsuccessC += predictionbannershared3.length - parseInt(`${blackg}`);
         blackg *= (parseFloat(`${String.fromCharCode(50,0) == predictionbannershared3 ? predictionbannershared3.length : parseInt(`${blackg}`)}`));
      if (indexk.length >= whitev.length) {
         whitev += `${whitev.length}`;
      }
      favicong.set(chinasameH, chinasameH.length >> (Math.min(Math.abs(3), 3)));
   while (chinasameH != arrowo) {
       let backwardh = String.fromCharCode(108,95,51,51,95,97,112,112,114,111,120,105,109,97,116,105,111,110,0);
       let awayd = String.fromCharCode(104,97,100,100,95,122,95,56,0);
       let paginationB = true;
       let updatesD = 3.0;
      for (let a = 0; a < 3; a++) {
         awayd = `${backwardh.length << (Math.min(Math.abs(1), 2))}`;
      }
          let c_animations = String.fromCharCode(99,104,115,101,116,95,100,95,56,0);
         awayd = "1";
         c_animations = "2";
          let goallogo_ = String.fromCharCode(109,95,55,50,95,103,101,111,116,97,103,115,0);
         paginationB = (((!paginationB ? 13 : backwardh.length) % (Math.max(5, backwardh.length))) < 13);
         goallogo_ += `${(goallogo_ == String.fromCharCode(54,0) ? goallogo_.length : goallogo_.length)}`;
      let videovarS = 9860185 <= backwardh.length;
      do {
         backwardh = "1";
         if (videovarS) {
            break;
         }
      } while (videovarS && (4 == (5 + backwardh.length) || 1.4 == (parseFloat(`${backwardh.length}`) * updatesD)));
      while (2.40 < (updatesD + 4.39)) {
         updatesD += parseFloat(`${awayd.length >> (Math.min(Math.abs(3), 4))}`);
         break;
      }
          let ballB = String.fromCharCode(119,95,55,56,95,110,111,116,105,102,105,99,97,116,105,111,110,0);
          let episodesV = true;
          let indexP = 1.0;
         backwardh += "1";
         ballB = `${(ballB == String.fromCharCode(119,0) ? parseInt(`${indexP}`) : ballB.length)}`;
         episodesV = !episodesV && 28.73 == indexP;
          let spinnerI = true;
         awayd += "2";
         spinnerI = (!spinnerI ? !spinnerI : spinnerI);
      while (!backwardh.startsWith(`${updatesD}`)) {
         updatesD *= parseFloat(`${awayd.length}`);
         break;
      }
         paginationB = awayd.startsWith(`${paginationB}`);
          let iconcurrentmatchJ = true;
         awayd = `${3 - backwardh.length}`;
         iconcurrentmatchJ = !iconcurrentmatchJ;
      for (let h = 0; h < 3; h++) {
          let shrinkT = 2.0;
          let vignette8 = String.fromCharCode(121,95,52,52,95,112,114,111,116,111,99,111,108,115,0);
          let hooksX: Array<any> = [698, 374, 188];
          let successB = 3;
          let interstitialK: Map<any, any> = new Map([[String.fromCharCode(99,95,50,56,95,112,117,98,107,101,121,104,97,115,104,0),697], [String.fromCharCode(105,110,112,117,116,121,95,121,95,49,53,0),963]]);
         awayd = `${3 + hooksX.length}`;
         shrinkT += parseFloat(`${interstitialK.size}`);
         vignette8 += `${parseInt(`${shrinkT}`) | vignette8.length}`;
         hooksX = [successB + interstitialK.size];
         successB -= successB;
      }
      while (4 >= awayd.length) {
          let inactivez: Map<any, any> = new Map([[String.fromCharCode(102,111,114,101,109,97,110,95,111,95,52,50,0),299], [String.fromCharCode(114,101,99,101,105,118,101,95,111,95,57,52,0),991], [String.fromCharCode(122,95,50,57,95,97,110,103,117,108,97,114,0),915]]);
          let pagination8 = 3.0;
          let mathG = String.fromCharCode(108,95,53,57,95,111,112,101,114,97,116,105,111,110,0);
          let launch_ = 1.0;
          let vieweri = String.fromCharCode(114,101,97,100,105,110,95,54,95,57,53,0);
         awayd = `${vieweri.length}`;
         inactivez.set(`${pagination8}`, 1 / (Math.max(6, parseInt(`${pagination8}`))));
         mathG += `${(mathG == String.fromCharCode(55,0) ? parseInt(`${pagination8}`) : mathG.length)}`;
         launch_ *= inactivez.size >> (Math.min(Math.abs(1), 5));
         vieweri += "2";
         break;
      }
      arrowo += `${awayd.length / (Math.max(10, chinasameH.length))}`;
      break;
   }
      termsI = `${chinasameH.length}`;
      awayplayer3.push(3);
   while (awayplayer3.length < agreementr) {
       let sinaB = 4;
       let pingT = 5.0;
         sinaB >>= Math.min(Math.abs(parseInt(`${pingT}`) & 3), 1);
         pingT -= parseFloat(`${1 ^ sinaB}`);
          let time_3G = 2.0;
         sinaB &= sinaB ^ 1;
         time_3G /= Math.max(parseFloat(`${3}`), 1);
          let u_animationV = 5.0;
         sinaB *= sinaB;
         u_animationV += parseFloat(`${parseInt(`${u_animationV}`) * parseInt(`${u_animationV}`)}`);
          let fastforwardq = 5.0;
          let playlistA = 2.0;
          let playx: Array<any> = [697, 877, 681];
         sinaB &= parseInt(`${pingT}`);
         fastforwardq *= parseFloat(`${3 + parseInt(`${fastforwardq}`)}`);
         playlistA += parseFloat(`${playx.length}`);
         playx.push(playx.length);
      for (let p = 0; p < 2; p++) {
         sinaB -= sinaB;
      }
      agreementr ^= (arrowo == String.fromCharCode(115,0) ? favicong.size : arrowo.length);
      break;
   }

    const state = await NetInfo.fetch();

      chinasameH = `${agreementr * favicong.size}`;
      arrowo = `${awayplayer3.length}`;
      arrowo = `${awayplayer3.length}`;
   while (5 < arrowo.length && !iconsaveimagep) {
       let dicelogoj = String.fromCharCode(100,115,100,112,99,109,95,98,95,49,0);
       let redirectw = 0;
       let placementq = 3.0;
       let arrowr = String.fromCharCode(106,95,52,49,95,115,117,112,112,114,101,115,115,105,111,110,0);
       let configure9: Array<any> = [75, 282];
         redirectw -= dicelogoj.length;
         arrowr += `${redirectw}`;
         arrowr = `${arrowr.length % (Math.max(6, configure9.length))}`;
      let l_positionq = arrowr.length >= 9680842;
      do {
          let main_mp = String.fromCharCode(100,105,114,101,99,116,120,95,57,95,53,53,0);
          let iconadslink6 = String.fromCharCode(112,95,52,57,95,105,109,112,97,99,116,0);
          let halffieldimageY = String.fromCharCode(98,95,56,53,95,104,101,118,109,97,115,107,0);
         arrowr += `${parseInt(`${placementq}`)}`;
         main_mp = `${iconadslink6.length}`;
         iconadslink6 += `${halffieldimageY.length}`;
         halffieldimageY = `${main_mp.length - 2}`;
         if (l_positionq) {
            break;
         }
      } while (((arrowr.length | 5) >= 5 || 2 >= (redirectw | 5)) && l_positionq);
      for (let i = 0; i < 2; i++) {
         configure9.push(dicelogoj.length + redirectw);
      }
      for (let e = 0; e < 2; e++) {
          let dropdownL = 2.0;
          let chatroombackgroundU = 5.0;
         arrowr = `${redirectw >> (Math.min(Math.abs(parseInt(`${dropdownL}`)), 5))}`;
         dropdownL /= Math.max(1, parseInt(`${chatroombackgroundU}`));
      }
         redirectw &= configure9.length;
       let applicationf = true;
          let notificationfilledp: Array<any> = [261, 907, 345];
         configure9 = [3];
         notificationfilledp.push(notificationfilledp.length);
      let condensedt = redirectw >= 7855518;
      do {
         redirectw ^= (1 * (applicationf ? 1 : 1));
         if (condensedt) {
            break;
         }
      } while (condensedt && (redirectw == 4 && 1 == (4 ^ redirectw)));
      let yinit_hcS = arrowr == String.fromCharCode(112,97,104,49,54,102,97,50,55,114,0);
      do {
         arrowr += `${1 - parseInt(`${placementq}`)}`;
         if (yinit_hcS) {
            break;
         }
      } while (yinit_hcS && (redirectw == arrowr.length));
      for (let j = 0; j < 3; j++) {
         arrowr = `${arrowr.length}`;
      }
      while (!applicationf) {
          let filledv: Array<any> = [6, 246];
         arrowr += "1";
         filledv = [filledv.length >> (Math.min(filledv.length, 3))];
         break;
      }
          let zoomo = false;
         applicationf = configure9.length >= 24;
         zoomo = !zoomo;
      while (5 <= (redirectw - parseInt(`${placementq}`)) || (1.81 - placementq) <= 4.57) {
          let orangetickP = String.fromCharCode(111,95,54,50,95,118,97,97,112,105,0);
         redirectw >>= Math.min(Math.abs((String.fromCharCode(54,0) == arrowr ? arrowr.length : parseInt(`${placementq}`))), 5);
         orangetickP = `${orangetickP.length / 2}`;
         break;
      }
      iconsaveimagep = chinasameH.startsWith(`${redirectw}`);
      break;
   }
      favicong.set(`${agreementr}`, 3);
    const offline = !(state.isConnected && state.isInternetReachable);

   if (iconsaveimagep) {
      arrowo += "1";
   }
      agreementr >>= Math.min(Math.abs(awayplayer3.length / 3), 5);
   let runtimeschedulerM = arrowo.length <= 8647962;
   do {
       let darkW: Array<any> = [15, 833];
       let sigmobG: Map<any, any> = new Map([[String.fromCharCode(97,95,56,48,95,100,101,115,99,0),669], [String.fromCharCode(100,105,115,99,114,101,116,101,95,112,95,55,49,0),510]]);
       let libyogaY: Map<any, any> = new Map([[String.fromCharCode(98,97,115,101,117,114,108,95,122,95,57,54,0),false ], [String.fromCharCode(102,95,54,55,95,104,101,97,114,116,115,0),true ], [String.fromCharCode(104,95,55,57,95,109,105,120,105,110,0),true ]]);
         libyogaY.set(`${libyogaY.size}`, 3);
      if (libyogaY.size < darkW.length) {
          let arrowrightwithtailS = String.fromCharCode(100,95,54,57,95,115,112,101,99,116,114,97,108,0);
          let mountingA: Array<any> = [906, 159, 730];
          let nbatrophyP = String.fromCharCode(115,95,49,56,95,98,105,110,100,101,114,0);
          let homeplayer9 = true;
          let suboutY = String.fromCharCode(100,101,110,111,105,115,101,114,95,52,95,50,50,0);
         libyogaY = new Map([[suboutY, 3]]);
         arrowrightwithtailS += `${mountingA.length * arrowrightwithtailS.length}`;
         mountingA.push((String.fromCharCode(76,0) == arrowrightwithtailS ? mountingA.length : arrowrightwithtailS.length));
         nbatrophyP = `${3 << (Math.min(1, mountingA.length))}`;
         homeplayer9 = nbatrophyP.length > 76 || arrowrightwithtailS.length > 76;
         suboutY += "1";
      }
         sigmobG = new Map([[`${sigmobG.size}`, 2]]);
      let cancelI = darkW.length <= 6849032;
      do {
         darkW = [darkW.length];
         if (cancelI) {
            break;
         }
      } while (((libyogaY.size & 5) == 5) && cancelI);
       let loadingspinnerl = String.fromCharCode(116,104,101,110,95,101,95,54,51,0);
       let profilepic0 = String.fromCharCode(115,116,97,114,114,101,100,95,98,95,51,55,0);
      arrowo = "1";
      if (runtimeschedulerM) {
         break;
      }
   } while (runtimeschedulerM && ((arrowo.length * 2) < 1 || 2 < (arrowo.length * agreementr)));
   if (agreementr >= 5) {
      agreementr /= Math.max(1, (chinasameH == String.fromCharCode(52,0) ? chinasameH.length : agreementr));
   }
      awayplayer3.push(termsI.length + 3);
    setIsOffline(offline);

   let gemfileh = awayplayer3.length >= 7408318;
   do {
      awayplayer3.push(arrowo.length | agreementr);
      if (gemfileh) {
         break;
      }
   } while (gemfileh && (4 < (favicong.size + 4) && (favicong.size + awayplayer3.length) < 4));
       let aboutn = 5.0;
       let gmailO = true;
       let libreactnativejnik = false;
         gmailO = 80.35 > aboutn;
         gmailO = aboutn <= 80.14;
          let libtanE = String.fromCharCode(115,111,99,107,95,105,95,56,49,0);
         aboutn += parseFloat(`${3 >> (Math.min(Math.abs(parseInt(`${aboutn}`)), 5))}`);
         libtanE = `${libtanE.length >> (Math.min(1, libtanE.length))}`;
      let iconuseru = gmailO ? !gmailO : gmailO;
      do {
         gmailO = aboutn > 80.90;
         if (iconuseru) {
            break;
         }
      } while (iconuseru && (2.21 <= (aboutn / 4.10)));
      if (gmailO && libreactnativejnik) {
         libreactnativejnik = aboutn >= 68.62;
      }
       let fcdaebecbcbafcdfceaaeccfeacdbO = 4;
       let greenarrowupm = 2;
          let profilev = 2.0;
         fcdaebecbcbafcdfceaaeccfeacdbO ^= 1 >> (Math.min(Math.abs(parseInt(`${aboutn}`)), 5));
         profilev *= parseInt(`${profilev}`) | parseInt(`${profilev}`);
         fcdaebecbcbafcdfceaaeccfeacdbO ^= 2 << (Math.min(Math.abs(parseInt(`${aboutn}`)), 1));
         fcdaebecbcbafcdfceaaeccfeacdbO *= greenarrowupm;
      iconsaveimagep = libreactnativejnik;
       let trashK = 5;
         trashK /= Math.max(2, 3);
         trashK <<= Math.min(Math.abs(1 >> (Math.min(3, Math.abs(trashK)))), 4);
      for (let k = 0; k < 1; k++) {
          let baselineL = String.fromCharCode(105,102,97,100,100,114,115,95,101,95,49,57,0);
         trashK >>= Math.min(Math.abs(3), 1);
         baselineL += `${baselineL.length}`;
      }
      favicong = new Map([[`${awayplayer3.length}`, awayplayer3.length * 2]]);
   if (iconsaveimagep) {
       let readZ = 0.0;
       let refreshS = String.fromCharCode(112,95,52,50,95,117,110,115,111,108,118,101,100,0);
       let turnX = String.fromCharCode(109,97,116,99,104,101,114,95,100,95,53,54,0);
       let umengW = String.fromCharCode(117,95,57,55,95,112,97,114,116,105,97,108,0);
      if (refreshS.length == 4 || turnX.length == 4) {
         turnX += `${(String.fromCharCode(79,0) == refreshS ? parseInt(`${readZ}`) : refreshS.length)}`;
      }
      for (let p = 0; p < 1; p++) {
         umengW = `${parseInt(`${readZ}`) / 2}`;
      }
      while ((readZ + parseFloat(`${refreshS.length}`)) > 4.53 || 4.0 > (4.53 + readZ)) {
          let tempnodatagifj = String.fromCharCode(108,95,53,95,119,114,97,112,112,105,110,103,0);
          let dice2: Map<any, any> = new Map([[String.fromCharCode(110,105,115,116,112,95,49,95,56,0),225], [String.fromCharCode(103,101,116,116,101,114,95,52,95,56,49,0),671], [String.fromCharCode(105,109,109,101,100,105,97,116,101,108,121,95,48,95,55,0),731]]);
         readZ -= parseFloat(`${turnX.length - 1}`);
         tempnodatagifj += `${tempnodatagifj.length | 1}`;
         dice2.set(`${tempnodatagifj}`, 1 * dice2.size);
         break;
      }
         turnX = `${(String.fromCharCode(95,0) == umengW ? turnX.length : umengW.length)}`;
         readZ *= parseFloat(`${2}`);
         turnX = `${parseInt(`${readZ}`)}`;
         readZ -= (parseFloat(`${umengW == String.fromCharCode(120,0) ? umengW.length : parseInt(`${readZ}`)}`));
      if (5 > umengW.length) {
         umengW += `${turnX.length - 3}`;
      }
      if (refreshS.startsWith(turnX)) {
         refreshS += `${refreshS.length}`;
      }
         refreshS += `${(turnX == String.fromCharCode(84,0) ? turnX.length : refreshS.length)}`;
         refreshS += `${2 * umengW.length}`;
      for (let l = 0; l < 2; l++) {
          let fastforward8 = String.fromCharCode(117,110,107,110,111,119,110,95,119,95,51,0);
          let iconarrowrightu = String.fromCharCode(113,95,57,55,95,109,101,115,111,110,0);
          let gestures2 = false;
         umengW += `${iconarrowrightu.length | parseInt(`${readZ}`)}`;
         fastforward8 += "2";
         iconarrowrightu = "1";
      }
      iconsaveimagep = awayplayer3.length < 16 && umengW.length < 16;
   }
   if (arrowo != String.fromCharCode(120,0)) {
       let modelJ = String.fromCharCode(113,95,57,54,95,114,101,109,117,120,0);
       let imageactionliveV: Array<any> = [795, 595, 414];
       let goalR = String.fromCharCode(109,111,110,116,104,95,104,95,55,54,0);
       let tooltipsV = 2.0;
       let disconnectedj = 4.0;
      if ((imageactionliveV.length + 5) > 2 || (imageactionliveV.length + 5) > 2) {
         imageactionliveV = [goalR.length];
      }
         disconnectedj -= imageactionliveV.length;
          let kuaishou5 = false;
          let iconarrowleftr = String.fromCharCode(113,95,49,52,95,97,100,100,105,116,105,111,110,115,0);
          let largeU = String.fromCharCode(99,101,110,116,114,97,108,95,110,95,56,50,0);
         tooltipsV /= Math.max(3, parseFloat(`${imageactionliveV.length}`));
         kuaishou5 = largeU.length >= 44;
         iconarrowleftr += `${3 ^ largeU.length}`;
      for (let w = 0; w < 1; w++) {
          let team8 = String.fromCharCode(97,95,56,50,95,103,108,111,98,97,108,0);
          let const_mt: Map<any, any> = new Map([[String.fromCharCode(114,95,54,95,109,97,110,121,0),505], [String.fromCharCode(97,118,97,108,97,110,99,104,101,95,112,95,49,0),653], [String.fromCharCode(115,95,51,57,95,114,101,100,101,108,101,103,97,116,101,0),93]]);
          let splashn = 5.0;
          let streamingq = 4.0;
         imageactionliveV.push(parseInt(`${tooltipsV}`));
         team8 += `${const_mt.size}`;
         const_mt.set(`${splashn}`, 2);
         splashn -= 2 ^ parseInt(`${splashn}`);
         streamingq += parseInt(`${streamingq}`);
      }
         modelJ = `${3 | parseInt(`${tooltipsV}`)}`;
      for (let e = 0; e < 2; e++) {
         tooltipsV /= Math.max(parseFloat(`${parseInt(`${disconnectedj}`) | imageactionliveV.length}`), 5);
      }
          let popupe = String.fromCharCode(101,95,51,50,95,115,97,110,115,0);
         modelJ = `${modelJ.length}`;
         popupe = `${(String.fromCharCode(110,0) == popupe ? popupe.length : popupe.length)}`;
       let showlessr = String.fromCharCode(103,101,110,101,114,97,116,101,95,108,95,52,54,0);
       let iconnotificationnewh: Map<any, any> = new Map([[String.fromCharCode(100,105,115,112,108,97,121,95,108,95,52,53,0),864], [String.fromCharCode(97,110,105,109,95,109,95,55,51,0),690]]);
       let analyticsX: Map<any, any> = new Map([[String.fromCharCode(104,95,52,48,95,115,117,98,109,105,116,0),true ], [String.fromCharCode(109,101,110,116,105,111,110,95,51,95,53,50,0),false ]]);
      while (goalR != String.fromCharCode(121,0) || showlessr != String.fromCharCode(57,0)) {
         goalR = `${modelJ.length | parseInt(`${disconnectedj}`)}`;
         break;
      }
      let cornerT = 7408053 >= imageactionliveV.length;
      do {
         imageactionliveV.push(2);
         if (cornerT) {
            break;
         }
      } while ((5 > (goalR.length - 5) || (imageactionliveV.length - goalR.length) > 5) && cornerT);
         goalR = "3";
         showlessr += `${parseInt(`${tooltipsV}`)}`;
         modelJ += `${goalR.length & 1}`;
      if (1.66 == (disconnectedj + 3.41) || 3.92 == (3.41 + disconnectedj)) {
          let bottomZ = 0.0;
          let championx = 5.0;
          let fastforwardc = true;
          let values1 = String.fromCharCode(101,110,117,109,118,97,108,117,101,95,51,95,55,48,0);
          let const_hl5 = 3.0;
         disconnectedj += 3 ^ modelJ.length;
         bottomZ /= Math.max(5, (values1 == String.fromCharCode(81,0) ? values1.length : parseInt(`${championx}`)));
         championx /= Math.max(4, (parseInt(`${championx}`) >> (Math.min(5, Math.abs((fastforwardc ? 1 : 2))))));
         fastforwardc = !fastforwardc;
         const_hl5 -= parseFloat(`${values1.length & 2}`);
      }
      termsI = `${chinasameH.length << (Math.min(Math.abs(3), 4))}`;
   }
    if (!offline) {

       let switch_kqS = String.fromCharCode(112,114,101,101,109,112,104,95,102,95,51,52,0);
       let rocket3: Array<any> = [497, 570, 892];
       let contexta = true;
      if ((1 << (Math.min(1, rocket3.length))) == 2 && rocket3.length == 1) {
         contexta = (switch_kqS.length % (Math.max(4, rocket3.length))) > 1;
      }
         contexta = !contexta || rocket3.length < 23;
      let username2 = contexta ? !contexta : contexta;
      do {
         contexta = (switch_kqS.length + rocket3.length) >= 31;
         if (username2) {
            break;
         }
      } while ((contexta) && username2);
         switch_kqS += `${(rocket3.length << (Math.min(1, Math.abs((contexta ? 1 : 2)))))}`;
         contexta = rocket3.includes(contexta);
          let templateprocessorf = 1.0;
         switch_kqS = `${(parseInt(`${templateprocessorf}`) + (contexta ? 3 : 3))}`;
      let placeholder0 = contexta ? !contexta : contexta;
      do {
         contexta = (((!contexta ? 76 : switch_kqS.length) | switch_kqS.length) >= 76);
         if (placeholder0) {
            break;
         }
      } while (placeholder0 && (5 < (rocket3.length + 4) || !contexta));
      let catagoryl = 4948881 <= rocket3.length;
      do {
         rocket3 = [((contexta ? 2 : 5) >> (Math.min(Math.abs(1), 5)))];
         if (catagoryl) {
            break;
         }
      } while (catagoryl && (2 > (3 << (Math.min(4, rocket3.length))) || rocket3.length > 3));
      for (let h = 0; h < 2; h++) {
         rocket3 = [rocket3.length];
      }
      iconsaveimagep = 42 == termsI.length || 42 == rocket3.length;
       let feedback9 = 4.0;
       let imagemanageru: Map<any, any> = new Map([[String.fromCharCode(115,95,51,52,95,115,105,122,101,115,0),594], [String.fromCharCode(100,105,109,105,115,115,95,111,95,52,56,0),379]]);
      if (!Array.from(imagemanageru.keys()).includes(`${feedback9}`)) {
         feedback9 += 2 + imagemanageru.size;
      }
          let vipsportl: Array<any> = [706, 424];
          let g_unlocki = 4.0;
          let direct3 = String.fromCharCode(103,95,50,95,101,120,99,101,112,116,105,111,110,0);
         imagemanageru.set(`${feedback9}`, parseInt(`${feedback9}`) % 2);
         vipsportl = [parseInt(`${g_unlocki}`)];
         g_unlocki -= direct3.length;
         direct3 += `${direct3.length}`;
          let emojiN = String.fromCharCode(111,108,100,110,101,119,95,115,95,51,48,0);
         feedback9 *= 1;
         emojiN += `${emojiN.length}`;
      for (let e = 0; e < 1; e++) {
         feedback9 += imagemanageru.size - parseInt(`${feedback9}`);
      }
      if (4.5 > (5.99 + feedback9) && (5 >> (Math.min(2, Math.abs(imagemanageru.size)))) > 4) {
         imagemanageru.set(`${feedback9}`, parseInt(`${feedback9}`) >> (Math.min(Math.abs(imagemanageru.size), 2)));
      }
      if (Array.from(imagemanageru.keys()).includes(`${feedback9}`)) {
          let field3 = String.fromCharCode(118,95,51,95,109,105,110,109,97,120,0);
          let modity9 = String.fromCharCode(107,95,54,48,95,108,97,116,0);
          let iconcurrentmatchV = String.fromCharCode(107,95,54,57,95,98,97,100,103,101,0);
          let penaltyS = true;
         imagemanageru = new Map([[`${imagemanageru.size}`, (field3 == String.fromCharCode(101,0) ? imagemanageru.size : field3.length)]]);
         modity9 = `${iconcurrentmatchV.length + modity9.length}`;
         iconcurrentmatchV += `${modity9.length}`;
         penaltyS = !penaltyS;
      }
      awayplayer3.push(parseInt(`${feedback9}`) | 2);
      favicong.set(`${agreementr}`, 2);
   while (chinasameH.startsWith(termsI)) {
      termsI = `${termsI.length >> (Math.min(Math.abs(3), 2))}`;
      break;
   }
      agreementr ^= ((iconsaveimagep ? 3 : 3) + 1);
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
    wawaWhitetickAway.getTopic(page)
      .then((json: wawaQuestIconsubssuccess) => {
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

  const renderItem = useCallback(({ item }: wawaBellreminderDisconnected) => (
    <VodPlaylist playlist={item} titleStyle={{ color: colors.text }} />
  ), []);

  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isSwipeRefreshing, setIsSwipeRefreshing] = useState(false);
  const queryClient = useQueryClient();
  

  const handleRefresh = useCallback(async (isSwipe: boolean = false) => {
       let b_imagel = 1.0;
    let sentrys = String.fromCharCode(106,95,51,48,95,100,101,115,99,114,0);
    let pointZ = 4.0;
    let fieldK: Map<any, any> = new Map([[String.fromCharCode(120,95,52,95,115,121,109,98,111,108,0),320], [String.fromCharCode(118,95,51,95,114,111,113,118,105,100,101,111,0),398], [String.fromCharCode(119,95,54,56,95,100,105,115,112,108,97,99,101,0),306]]);
    let debug6 = 1;
    let overlayV = 1.0;
    let basketballplayerplaceholder0 = String.fromCharCode(115,117,114,101,95,119,95,53,55,0);
    let homeiconb: Array<any> = [422, 409];
      sentrys = `${parseInt(`${b_imagel}`)}`;
      overlayV /= Math.max(3, parseInt(`${overlayV}`));
       let videojsd = 3;
       let eactA = String.fromCharCode(97,117,100,105,101,110,99,101,95,51,95,56,56,0);
       let taiwanj = String.fromCharCode(118,95,49,48,95,108,101,116,116,101,114,0);
         eactA = "3";
       let componentregistryj = String.fromCharCode(118,95,54,53,95,113,112,101,108,0);
         eactA += `${taiwanj.length ^ 1}`;
      if (componentregistryj.startsWith(taiwanj)) {
         taiwanj += `${eactA.length + 1}`;
      }
      if (4 > (eactA.length / 3) || 2 > (eactA.length / 3)) {
         videojsd -= 2;
      }
       let configv: Array<any> = [String.fromCharCode(98,95,54,50,95,113,119,111,114,100,0), String.fromCharCode(109,95,56,55,95,99,117,114,118,101,0)];
       let lessP: Array<any> = [705, 234, 990];
      for (let f = 0; f < 1; f++) {
          let controlsT = String.fromCharCode(102,95,52,52,95,97,119,97,114,101,0);
          let bodanM: Array<any> = [144, 85, 800];
          let dependenciesp: Map<any, any> = new Map([[String.fromCharCode(104,95,49,51,95,102,114,101,101,122,101,0),355], [String.fromCharCode(117,110,119,114,105,116,97,98,108,101,95,119,95,51,0),19]]);
          let circleL = String.fromCharCode(122,95,57,52,95,105,110,115,101,114,116,105,111,110,115,0);
          let selectedc = 4.0;
         taiwanj = `${dependenciesp.size}`;
         controlsT = `${controlsT.length}`;
         bodanM.push(bodanM.length + 2);
         dependenciesp = new Map([[circleL, parseInt(`${selectedc}`) % (Math.max(1, 2))]]);
         circleL += `${bodanM.length}`;
         selectedc /= Math.max(parseFloat(`${2}`), 1);
      }
      while ((5 | configv.length) > 3 || (5 | lessP.length) > 4) {
          let smallR: Array<any> = [197, 641];
          let empty0 = String.fromCharCode(97,100,118,97,110,99,101,109,101,110,116,95,105,95,57,0);
          let assetsW: Map<any, any> = new Map([[String.fromCharCode(102,114,97,109,101,112,111,111,108,95,100,95,50,54,0),false ], [String.fromCharCode(112,95,54,48,95,115,116,111,114,101,102,114,97,109,101,0),false ], [String.fromCharCode(101,108,108,105,103,105,98,108,101,95,116,95,52,55,0),false ]]);
          let backiconmasku: Array<any> = [72, 692, 338];
         lessP = [assetsW.size >> (Math.min(componentregistryj.length, 5))];
         smallR.push((empty0 == String.fromCharCode(115,0) ? empty0.length : smallR.length));
         assetsW.set(empty0, backiconmasku.length * 2);
         backiconmasku = [empty0.length | 3];
         break;
      }
      while ((5 / (Math.max(9, componentregistryj.length))) < 5) {
         componentregistryj += `${taiwanj.length | lessP.length}`;
         break;
      }
      pointZ /= Math.max(5, 2);

    if (isSwipe) {

   for (let w = 0; w < 1; w++) {
      debug6 >>= Math.min(Math.abs(fieldK.size), 4);
   }
   for (let t = 0; t < 1; t++) {
      debug6 /= Math.max(4, parseInt(`${b_imagel}`));
   }
   let bdxadsdkf = 7434335.0 >= pointZ;
   do {
       let wifirouterb = String.fromCharCode(97,95,56,48,95,112,117,114,101,0);
          let stylesf = String.fromCharCode(121,95,53,52,95,105,116,108,101,0);
         wifirouterb += `${stylesf.length | 3}`;
      while (wifirouterb.includes(`${wifirouterb.length}`)) {
         wifirouterb += `${1 & wifirouterb.length}`;
         break;
      }
       let historyH = String.fromCharCode(115,119,114,101,115,97,109,112,108,101,95,56,95,51,52,0);
       let disconnectedE = String.fromCharCode(105,113,109,112,95,52,95,54,56,0);
      pointZ += parseInt(`${pointZ}`);
      if (bdxadsdkf) {
         break;
      }
   } while (bdxadsdkf && (4.35 == pointZ));
      setIsSwipeRefreshing(true);
    } else {

      sentrys = `${basketballplayerplaceholder0.length}`;
      pointZ += parseInt(`${b_imagel}`);
      overlayV *= parseInt(`${pointZ}`);
      setIsRefreshing(true);
    }
    

       let reactE = 1.0;
          let positionfieldj: Map<any, any> = new Map([[String.fromCharCode(109,95,49,95,100,101,99,111,100,101,102,0),true ], [String.fromCharCode(112,117,108,115,101,95,51,95,53,48,0),true ]]);
         reactE /= Math.max(2, positionfieldj.size * 2);
         reactE /= Math.max(parseInt(`${reactE}`) % 2, 4);
      let topic6 = 6223654.0 <= reactE;
      do {
         reactE /= Math.max(1 * parseInt(`${reactE}`), 4);
         if (topic6) {
            break;
         }
      } while ((5.20 < reactE) && topic6);
      pointZ -= 1;
   if (basketballplayerplaceholder0.length <= 3) {
       let libcxxcomponentsu = true;
       let topicX = String.fromCharCode(101,113,117,97,116,97,98,108,101,95,102,95,55,56,0);
       let halffieldimageM = String.fromCharCode(100,97,116,97,99,101,110,116,101,114,95,107,95,52,53,0);
       let tempa = 4.0;
       let gpayb = 3.0;
         tempa += parseInt(`${gpayb}`) + 2;
      for (let v = 0; v < 3; v++) {
          let homeloadingJ: Array<any> = [716, 800];
          let yellowvideoliveX: Map<any, any> = new Map([[String.fromCharCode(99,111,109,112,108,101,116,101,100,95,102,95,50,53,0),true ], [String.fromCharCode(118,105,97,95,52,95,52,48,0),true ], [String.fromCharCode(112,95,51,57,95,111,117,116,102,105,108,101,0),true ]]);
          let termsi = 1;
          let time_w2u = 1.0;
         tempa += (String.fromCharCode(122,0) == halffieldimageM ? halffieldimageM.length : termsi);
         homeloadingJ = [parseInt(`${time_w2u}`) % 3];
         yellowvideoliveX.set(`${homeloadingJ.length}`, 1);
         termsi -= parseInt(`${time_w2u}`) % (Math.max(homeloadingJ.length, 9));
      }
       let awayplayern = 1.0;
       let iconlogoutT = 1.0;
       let goali = 3.0;
          let lighta: Array<any> = [242, 848];
          let crownA = 4.0;
          let othermatchdetailbgo: Array<any> = [String.fromCharCode(110,95,54,48,95,116,101,97,114,100,111,119,110,0), String.fromCharCode(111,95,50,52,95,99,111,115,105,103,110,97,116,111,114,121,0), String.fromCharCode(97,95,49,51,95,110,97,116,105,118,101,0)];
         iconlogoutT *= parseFloat(`${parseInt(`${tempa}`) % 1}`);
         lighta = [parseInt(`${crownA}`)];
         crownA /= Math.max(1, parseFloat(`${3}`));
         othermatchdetailbgo.push(2);
      if ((parseInt(`${tempa}`) / (Math.max(topicX.length, 8))) == 1) {
          let directp = 1.0;
         topicX += `${parseInt(`${directp}`) >> (Math.min(3, Math.abs(3)))}`;
      }
      for (let m = 0; m < 3; m++) {
          let frame_q0e: Map<any, any> = new Map([[String.fromCharCode(116,99,102,105,108,101,95,110,95,50,56,0),true ], [String.fromCharCode(116,95,52,55,95,105,114,97,110,100,0),true ]]);
          let circleb = false;
          let nativemodulec: Array<any> = [832, 193, 652];
          let tempnodataS = String.fromCharCode(104,95,55,55,95,98,119,114,105,116,101,0);
          let libffmpegkitA = 3.0;
         gpayb /= Math.max(5, parseInt(`${goali}`));
         frame_q0e = new Map([[`${frame_q0e.size}`, 2 * frame_q0e.size]]);
         circleb = String.fromCharCode(110,0) == tempnodataS;
         nativemodulec.push(tempnodataS.length);
         libffmpegkitA += parseFloat(`${1}`);
      }
      for (let n = 0; n < 1; n++) {
         libcxxcomponentsu = halffieldimageM.length >= 51;
      }
      let collectionu = 7119092.0 <= gpayb;
      do {
         gpayb -= parseInt(`${goali}`) * parseInt(`${gpayb}`);
         if (collectionu) {
            break;
         }
      } while (((goali * gpayb) < 5.69 || (5.69 * goali) < 4.77) && collectionu);
         iconlogoutT *= parseFloat(`${parseInt(`${awayplayern}`) - 2}`);
      if ((tempa / (Math.max(gpayb, 6))) == 4.71 && (gpayb / (Math.max(1, tempa))) == 4.71) {
          let condensedX: Map<any, any> = new Map([[String.fromCharCode(115,99,104,101,100,95,116,95,50,0),851], [String.fromCharCode(118,95,49,55,95,112,97,105,114,0),731], [String.fromCharCode(110,95,57,48,95,105,110,118,105,116,101,100,0),39]]);
          let area1 = String.fromCharCode(116,95,54,95,97,109,112,108,105,116,117,100,101,0);
         gpayb -= (String.fromCharCode(65,0) == topicX ? topicX.length : halffieldimageM.length);
         condensedX = new Map([[`${condensedX.size}`, (area1 == String.fromCharCode(112,0) ? condensedX.size : area1.length)]]);
      }
         libcxxcomponentsu = 57.59 <= gpayb;
          let penaltygoalF = String.fromCharCode(105,116,120,102,109,95,104,95,53,48,0);
         topicX += `${(parseInt(`${awayplayern}`) - (libcxxcomponentsu ? 2 : 3))}`;
         penaltygoalF += "3";
      let streamingr = goali >= 8234171.0;
      do {
         goali /= Math.max(3, parseFloat(`${parseInt(`${tempa}`) | parseInt(`${awayplayern}`)}`));
         if (streamingr) {
            break;
         }
      } while (((goali * 2.42) >= 2.13) && streamingr);
      while (5.34 <= (gpayb * goali) || (5.34 * goali) <= 4.9) {
         goali *= parseFloat(`${1}`);
         break;
      }
      basketballplayerplaceholder0 = `${sentrys.length >> (Math.min(1, Math.abs(parseInt(`${tempa}`))))}`;
   }
      overlayV += fieldK.size - sentrys.length;
    

       let sigmob2 = String.fromCharCode(121,95,52,48,95,115,117,103,103,101,115,116,105,111,110,115,0);
         sigmob2 = `${3 + sigmob2.length}`;
      for (let m = 0; m < 2; m++) {
          let ksadT = String.fromCharCode(115,105,109,100,95,113,95,49,48,0);
         sigmob2 += `${sigmob2.length % (Math.max(ksadT.length, 2))}`;
      }
          let switch_s1W = true;
          let suggestion5 = 3;
         sigmob2 += "3";
         switch_s1W = suggestion5 > 21 || 21 > suggestion5;
      sentrys = `${basketballplayerplaceholder0.length}`;
   let libjsiO = 7812510 <= fieldK.size;
   do {
      fieldK = new Map([[`${debug6}`, 3 >> (Math.min(Math.abs(debug6), 2))]]);
      if (libjsiO) {
         break;
      }
   } while (libjsiO && ((fieldK.size * 2) > 5 || (fieldK.size * 2) > 4));
   if ((overlayV / 1.67) <= 1.96) {
      debug6 -= parseInt(`${b_imagel}`) % (Math.max(sentrys.length, 2));
   }

    

   let pointW = pointZ <= 9807124.0;
   do {
      pointZ /= Math.max(1, basketballplayerplaceholder0.length + parseInt(`${overlayV}`));
      if (pointW) {
         break;
      }
   } while (pointW && ((pointZ + 2.88) == 5.60));
   let redirectz = 9569376 >= sentrys.length;
   do {
      sentrys += `${debug6}`;
      if (redirectz) {
         break;
      }
   } while (redirectz && (2.60 >= (pointZ - sentrys.length)));
      overlayV += debug6;
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
                source={require('@static/images/iconnewsshareDist.gif')}
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
                      source={require('@static/images/iconnewsshareDist.gif')}
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
