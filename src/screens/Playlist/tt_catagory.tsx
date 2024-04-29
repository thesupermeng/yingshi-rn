import React, { useCallback, useEffect, useState, memo } from 'react';
import { StyleSheet, View, Text, RefreshControl, FlatList } from 'react-native';
import { useQueryClient } from '@tanstack/react-query';
import ScreenContainer from '../../components/container/tt_backward';
import MainHeader from '../../components/header/tt_inactive_strings_header';
import { useFocusEffect, useTheme } from '@react-navigation/native';
import { useInfiniteQuery } from '@tanstack/react-query';
import { ttProject, ttSport } from '@type/tt_line_borderless';
import VodPlaylist from '../../components/playlist/tt_button';
import { BottomTabScreenProps, useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { API_DOMAIN } from '@utility/tt_trophy_cross';
import FastImage from "../../components/common/tt_connection"
import { useIsFocused } from '@react-navigation/native';
import NoConnection from './../../components/common/tt_fast';
import NetInfo, { NetInfoState } from '@react-native-community/netinfo';
import { ttBaiduNewinterstitial } from '@redux/reducers/tt_center';
import { useAppSelector } from '@hooks/tt_spec_download';
import { ttOrange } from '@redux/tt_updates_bottom';
import tt_humidity_guide from '../../../Umeng/tt_humidity_guide';
import { ttMbbannerMore } from '@api';

type ttBing = {
  item: ttSport;
  index: number;
};

function Playlist({ navigation }: BottomTabScreenProps<any>) {
  
  const { textVariants, colors, spacing } = useTheme();
  const LIMIT_PER_PAGE = 10;
  // const [results, setResults] = useState<Array<ttSport>>([])
  const [totalPage, setTotalPage] = useState(0);

  const isFocused = useIsFocused();
  const [isOffline, setIsOffline] = useState(false);

  const settingsReducer: ttBaiduNewinterstitial = useAppSelector(
    ({ settingsReducer }: ttOrange) => settingsReducer
  );

  
  useFocusEffect(useCallback(() => {
    tt_humidity_guide.playlistViewsAnalytics();
  }, []));
  

  
  const handleTabPress = () => {
       let anneri = 5;
    let zhuboJ = 2;
    let away6: Array<any> = [307, 440, 503];
    let telegrams = String.fromCharCode(98,117,99,107,101,116,95,97,95,52,48,0);
    let teamx = true;
    let circlej = 1;
    let photoc = 1;
    let floaterx = String.fromCharCode(119,95,54,48,95,117,110,98,108,111,99,107,0);
    let appsX: Array<any> = [128, 709, 171];
    let recommendationg = 1;
    let black1 = 5;
    let x_titleJ = String.fromCharCode(105,109,112,111,114,116,101,100,95,119,95,49,50,0);
      zhuboJ += 2 - appsX.length;
   while (floaterx.length >= appsX.length) {
      floaterx += `${away6.length}`;
      break;
   }
   for (let y = 0; y < 2; y++) {
      telegrams = `${circlej + 3}`;
   }
       let trophyo = String.fromCharCode(119,95,53,55,95,117,110,109,97,112,102,105,108,101,0);
       let chinasameH = String.fromCharCode(109,95,57,49,95,99,102,116,98,115,117,98,0);
          let calendar7 = 1.0;
         trophyo += `${chinasameH.length % (Math.max(3, trophyo.length))}`;
         calendar7 *= 2 / (Math.max(10, parseInt(`${calendar7}`)));
      let heartz = trophyo == String.fromCharCode(116,101,56,98,0);
      do {
         trophyo += `${(String.fromCharCode(74,0) == trophyo ? trophyo.length : chinasameH.length)}`;
         if (heartz) {
            break;
         }
      } while (heartz && (5 >= chinasameH.length));
          let episodes5 = true;
          let updatesT = String.fromCharCode(120,95,56,53,95,115,109,111,111,116,104,0);
         trophyo = `${(updatesT == String.fromCharCode(57,0) ? updatesT.length : (episodes5 ? 2 : 4))}`;
          let iconb = false;
          let ajaxw = 4.0;
         chinasameH = `${1 | chinasameH.length}`;
         iconb = (ajaxw / (Math.max(6, ajaxw))) > 18.19;
      for (let y = 0; y < 1; y++) {
         chinasameH = `${trophyo.length & chinasameH.length}`;
      }
      for (let w = 0; w < 2; w++) {
         chinasameH = `${trophyo.length % 3}`;
      }
      zhuboJ -= recommendationg;
   if (3 <= photoc) {
      photoc -= circlej ^ 3;
   }
      teamx = (((!teamx ? 89 : floaterx.length) << (Math.min(floaterx.length, 3))) <= 89);
   for (let j = 0; j < 1; j++) {
      circlej /= Math.max(3, 2);
   }
      appsX = [1];
      teamx = recommendationg >= away6.length;
      circlej >>= Math.min(5, Math.abs(2));

    if (isFocused) {

   if (!telegrams.includes(`${anneri}`)) {
      telegrams += "3";
   }
   for (let s = 0; s < 2; s++) {
      recommendationg >>= Math.min(1, Math.abs(3));
   }
   for (let d = 0; d < 2; d++) {
      telegrams = `${black1}`;
   }
   for (let m = 0; m < 1; m++) {
       let selectionl = String.fromCharCode(122,95,51,52,95,100,111,109,101,115,116,105,99,0);
       let sheetd = String.fromCharCode(99,97,108,108,105,115,116,111,95,116,95,54,53,0);
       let minimize6 = 0.0;
         minimize6 *= sheetd.length ^ parseInt(`${minimize6}`);
         minimize6 += 3 & selectionl.length;
      while (selectionl == String.fromCharCode(110,0)) {
          let thumbnailB = 4;
          let sentryi: Array<any> = [727, 154];
          let private_sr = 5.0;
          let selectp = 1;
         sheetd = `${parseInt(`${minimize6}`)}`;
         thumbnailB <<= Math.min(sentryi.length, 3);
         sentryi.push(thumbnailB);
         private_sr += thumbnailB;
         selectp &= 2;
         break;
      }
         sheetd = `${3 >> (Math.min(3, sheetd.length))}`;
       let championZ: Map<any, any> = new Map([[String.fromCharCode(106,95,50,49,95,115,116,111,119,0),false ], [String.fromCharCode(105,95,57,95,116,101,120,116,109,111,118,115,117,98,0),true ], [String.fromCharCode(109,106,112,101,103,106,112,101,103,95,98,95,55,49,0),false ]]);
       let favicono: Map<any, any> = new Map([[String.fromCharCode(102,95,54,54,95,115,111,99,114,101,97,116,101,0),72], [String.fromCharCode(113,95,52,53,95,116,104,114,101,97,100,110,97,109,101,0),426], [String.fromCharCode(113,95,56,95,105,110,116,101,114,108,97,99,101,0),77]]);
         championZ = new Map([[sheetd, sheetd.length]]);
       let updatesV = String.fromCharCode(116,95,54,56,95,100,105,97,103,110,111,115,116,105,99,115,0);
       let ping6 = String.fromCharCode(120,95,49,95,99,117,100,97,117,112,108,111,97,100,0);
       let filled5 = 4;
          let infoG = false;
          let bingf = String.fromCharCode(99,97,109,112,97,105,103,110,95,115,95,56,54,0);
         championZ = new Map([[`${minimize6}`, sheetd.length + 1]]);
         infoG = !bingf.includes(`${infoG}`);
         bingf += `${bingf.length / (Math.max(2, 4))}`;
      photoc |= 2 * parseInt(`${minimize6}`);
   }
   for (let y = 0; y < 3; y++) {
      teamx = recommendationg == 3;
   }
       let o_titleJ = String.fromCharCode(120,95,54,52,95,117,115,101,114,115,0);
       let minimize2: Array<any> = [87, 291, 450];
       let downloaderO = String.fromCharCode(115,116,97,99,107,95,48,95,56,53,0);
      let holderC = 7765134 <= minimize2.length;
      do {
         minimize2 = [(downloaderO == String.fromCharCode(76,0) ? minimize2.length : downloaderO.length)];
         if (holderC) {
            break;
         }
      } while (((downloaderO.length - 3) == 4) && holderC);
       let episodeH = 0.0;
       let trophy5 = 0.0;
       let catagoryB = 0.0;
         downloaderO = `${downloaderO.length}`;
         episodeH -= 1;
      while (trophy5 >= 3.57) {
          let bootsplashk = String.fromCharCode(110,95,57,54,95,114,97,103,103,97,98,108,101,0);
          let sharedw = false;
          let utilsf = false;
         trophy5 *= (parseFloat(`${(utilsf ? 4 : 3) & minimize2.length}`));
         bootsplashk = `${bootsplashk.length % 2}`;
         sharedw = bootsplashk.length >= 87;
         utilsf = bootsplashk.endsWith(`${sharedw}`);
         break;
      }
      if (minimize2.length <= parseInt(`${episodeH}`)) {
          let match_ = String.fromCharCode(113,95,49,51,95,112,97,114,97,109,115,0);
          let scoreS: Map<any, any> = new Map([[String.fromCharCode(97,108,108,121,117,118,95,103,95,49,54,0),12], [String.fromCharCode(102,95,53,57,95,102,97,99,116,111,114,97,98,108,101,0),2], [String.fromCharCode(109,105,100,95,122,95,50,51,0),525]]);
          let activeN = 2.0;
          let configureP = false;
         episodeH += parseInt(`${trophy5}`) / (Math.max(o_titleJ.length, 7));
         match_ = `${parseInt(`${activeN}`)}`;
         scoreS = new Map([[match_, match_.length - parseInt(`${activeN}`)]]);
         configureP = activeN < 11.55;
      }
      if ((downloaderO.length / (Math.max(10, episodeH))) > 3.30 && 1 > (downloaderO.length / 1)) {
         downloaderO += `${3 - parseInt(`${episodeH}`)}`;
      }
      while (2 > (o_titleJ.length >> (Math.min(5, minimize2.length))) || (minimize2.length >> (Math.min(Math.abs(2), 2))) > 5) {
          let bridgeM = 3;
          let incidentb: Array<any> = [448, 50];
         o_titleJ += "2";
         bridgeM |= bridgeM + incidentb.length;
         incidentb = [incidentb.length];
         break;
      }
      black1 &= circlej;
   for (let l = 0; l < 2; l++) {
      photoc *= zhuboJ;
   }
   if (2 == telegrams.length) {
      telegrams += `${zhuboJ << (Math.min(5, Math.abs(1)))}`;
   }
   for (let b = 0; b < 1; b++) {
      circlej += 2 | zhuboJ;
   }
       let navigationv = 0.0;
       let buffer4 = String.fromCharCode(108,97,110,103,95,109,95,57,52,0);
       let mbsplashO = String.fromCharCode(112,95,49,52,95,99,101,110,116,101,114,0);
         navigationv += (mbsplashO == String.fromCharCode(52,0) ? buffer4.length : mbsplashO.length);
      for (let y = 0; y < 2; y++) {
         mbsplashO = `${(String.fromCharCode(81,0) == buffer4 ? buffer4.length : mbsplashO.length)}`;
      }
         mbsplashO = `${mbsplashO.length}`;
      let whites = buffer4 == String.fromCharCode(112,52,95,106,114,115,104,119,0);
      do {
         buffer4 += `${buffer4.length}`;
         if (whites) {
            break;
         }
      } while (whites && (navigationv > 5.46));
      if (mbsplashO == String.fromCharCode(120,0) && buffer4 == String.fromCharCode(54,0)) {
          let middlewareV: Array<any> = [985, 359, 303];
         mbsplashO = `${parseInt(`${navigationv}`) & mbsplashO.length}`;
         middlewareV.push(middlewareV.length << (Math.min(middlewareV.length, 3)));
      }
      if (mbsplashO.includes(`${navigationv}`)) {
         navigationv += mbsplashO.length ^ 3;
      }
         navigationv += 2;
      if (buffer4.length < 4) {
          let blackL = 3;
          let zoom7 = true;
          let twitter9: Array<any> = [String.fromCharCode(100,111,116,95,108,95,52,50,0), String.fromCharCode(114,101,116,114,105,101,115,95,50,95,54,54,0), String.fromCharCode(122,95,56,49,95,105,110,99,114,101,97,115,101,0)];
          let logout7 = String.fromCharCode(115,116,97,108,101,95,115,95,50,54,0);
         mbsplashO += `${buffer4.length | 3}`;
         blackL &= (logout7.length >> (Math.min(3, Math.abs((zoom7 ? 1 : 3)))));
         zoom7 = 79 < blackL;
         twitter9.push(twitter9.length % 2);
         logout7 += `${logout7.length & 2}`;
      }
       let regengu = String.fromCharCode(110,95,50,49,95,102,108,111,97,116,105,110,103,0);
       let combinedS = String.fromCharCode(102,95,57,56,95,114,107,109,112,112,0);
      circlej |= (mbsplashO == String.fromCharCode(110,0) ? telegrams.length : mbsplashO.length);
      handleRefresh();
    }
  };

  const checkConnection = useCallback(async () => {
       let whistlez: Map<any, any> = new Map([[String.fromCharCode(98,95,50,51,95,112,111,115,105,116,105,111,110,0),382], [String.fromCharCode(115,95,49,53,95,99,97,114,116,101,115,105,97,110,0),90]]);
    let ewardedt = 4;
    let stringsC = 3.0;
    let abouts = String.fromCharCode(100,101,99,111,100,101,114,116,104,114,101,97,100,105,110,103,95,98,95,50,51,0);
    let sharedJ: Map<any, any> = new Map([[String.fromCharCode(102,95,49,57,95,116,115,97,110,0),571], [String.fromCharCode(105,95,57,57,95,97,108,108,111,119,97,110,99,101,0),472]]);
    let streamingr: Array<any> = [String.fromCharCode(121,95,57,56,95,109,112,101,103,118,105,100,101,111,100,115,112,0), String.fromCharCode(109,111,100,105,102,105,101,100,95,118,95,54,50,0)];
    let phonel = String.fromCharCode(98,95,50,52,95,115,101,110,100,0);
    let sentryx = String.fromCharCode(97,95,53,56,95,97,116,99,104,101,114,0);
    let stationn = String.fromCharCode(97,95,52,57,95,108,111,103,103,101,114,0);
    let linkl: Array<any> = [40, 30, 946];
    let securitya = String.fromCharCode(101,99,107,101,121,95,111,95,54,57,0);
    let regeng1 = true;
    let videocommon6 = String.fromCharCode(118,95,50,51,95,117,112,103,114,97,100,101,100,0);
      phonel += `${(String.fromCharCode(70,0) == stationn ? stationn.length : ewardedt)}`;
   let orangeu = stringsC <= 7171880.0;
   do {
      stringsC -= parseFloat(`${abouts.length >> (Math.min(Math.abs(1), 1))}`);
      if (orangeu) {
         break;
      }
   } while (((phonel.length ^ 3) < 1) && orangeu);
   if (3 <= (ewardedt & 2) && (ewardedt & linkl.length) <= 2) {
      ewardedt |= 2 << (Math.min(5, Math.abs(whistlez.size)));
   }
   while ((linkl.length | 2) <= 1 && 2 <= (streamingr.length | linkl.length)) {
      streamingr.push(whistlez.size - ewardedt);
      break;
   }
   if (2 > sentryx.length) {
       let mbjscommont = String.fromCharCode(99,114,111,112,112,101,100,95,48,95,50,54,0);
          let moviesE = 3.0;
         mbjscommont += `${mbjscommont.length | 1}`;
         moviesE += parseInt(`${moviesE}`) << (Math.min(2, Math.abs(parseInt(`${moviesE}`))));
          let targetG = String.fromCharCode(121,95,50,53,95,99,111,109,112,111,115,101,114,0);
         mbjscommont += `${targetG.length / (Math.max(mbjscommont.length, 6))}`;
         mbjscommont = `${mbjscommont.length * mbjscommont.length}`;
      stringsC -= parseFloat(`${ewardedt ^ mbjscommont.length}`);
   }
      streamingr = [((regeng1 ? 4 : 3))];
   while (stationn != abouts) {
      abouts += `${stationn.length}`;
      break;
   }

    const state = await NetInfo.fetch();

   if ((sentryx.length >> (Math.min(2, Math.abs(ewardedt)))) <= 4 && (4 >> (Math.min(3, sentryx.length))) <= 2) {
      ewardedt += streamingr.length / 1;
   }
   let stationE = 8394088 >= phonel.length;
   do {
      phonel += `${2 + stationn.length}`;
      if (stationE) {
         break;
      }
   } while (stationE && (1 <= (4 | ewardedt)));
      linkl.push(phonel.length - abouts.length);
       let previewV = 3.0;
         previewV /= Math.max(3, parseInt(`${previewV}`) ^ parseInt(`${previewV}`));
       let manifestN: Array<any> = [161, 38];
       let arrowK: Array<any> = [788, 918];
         manifestN = [2];
      ewardedt -= sharedJ.size;
      abouts = "2";
   while ((sentryx.length / (Math.max(3, 1))) > 3 || 3 > (streamingr.length / (Math.max(sentryx.length, 9)))) {
      streamingr.push(sentryx.length | abouts.length);
      break;
   }
   if (stationn.length >= phonel.length) {
      phonel = `${ewardedt}`;
   }
    const offline = !(state.isConnected && state.isInternetReachable);

       let settingY = 5;
      for (let p = 0; p < 2; p++) {
         settingY ^= 3 | settingY;
      }
         settingY -= 3 << (Math.min(3, Math.abs(settingY)));
      if (4 <= (5 & settingY)) {
          let ballj: Map<any, any> = new Map([[String.fromCharCode(117,95,49,57,95,112,101,114,109,105,115,115,105,111,110,0),338], [String.fromCharCode(114,103,98,97,98,101,95,50,95,51,54,0),971]]);
         settingY |= 2;
         ballj = new Map([[`${ballj.size}`, ballj.size % (Math.max(ballj.size, 8))]]);
      }
      securitya += `${((regeng1 ? 4 : 5) % (Math.max(8, abouts.length)))}`;
       let tail0 = 4.0;
       let rightE = 4.0;
          let tick6: Array<any> = [924, 327];
          let maili: Array<any> = [956, 885, 670];
         tail0 -= parseFloat(`${tick6.length}`);
         tick6.push(2 / (Math.max(10, maili.length)));
         maili = [maili.length];
      let analyticy = 5804651.0 <= tail0;
      do {
          let taiwan0 = true;
          let showH: Map<any, any> = new Map([[String.fromCharCode(104,100,101,99,95,111,95,49,49,0),String.fromCharCode(117,112,108,111,97,100,95,114,95,55,50,0)], [String.fromCharCode(105,95,56,56,95,104,101,97,100,105,110,103,0),String.fromCharCode(104,95,51,49,95,114,101,99,111,110,115,116,114,117,99,116,0)], [String.fromCharCode(105,108,98,99,100,97,116,97,95,112,95,51,55,0),String.fromCharCode(99,111,100,105,110,103,116,121,112,101,95,114,95,52,49,0)]]);
          let description_hq6 = String.fromCharCode(101,110,115,117,114,101,95,106,95,49,49,0);
          let reactN = String.fromCharCode(103,101,110,101,114,97,116,101,95,106,95,56,49,0);
          let sina1 = false;
         tail0 += parseFloat(`${2}`);
         taiwan0 = !sina1 && showH.size >= 46;
         showH = new Map([[reactN, description_hq6.length]]);
         description_hq6 += `${((sina1 ? 2 : 5))}`;
         reactN = `${showH.size}`;
         if (analyticy) {
            break;
         }
      } while ((4.99 <= (rightE * tail0) || (tail0 * rightE) <= 4.99) && analyticy);
      for (let i = 0; i < 1; i++) {
         tail0 -= parseFloat(`${parseInt(`${rightE}`) ^ 1}`);
      }
         tail0 *= parseFloat(`${parseInt(`${rightE}`) | 3}`);
      let borderless0 = 6315573.0 <= rightE;
      do {
          let weiboM = true;
          let controlh = String.fromCharCode(99,102,102,116,102,95,122,95,52,57,0);
          let unreadu = String.fromCharCode(121,95,55,57,95,97,100,100,0);
         rightE -= (parseFloat(`${controlh == String.fromCharCode(52,0) ? controlh.length : (weiboM ? 2 : 5)}`));
         weiboM = unreadu == String.fromCharCode(49,0);
         if (borderless0) {
            break;
         }
      } while ((2.47 == (rightE + 2.56) || (2.56 + tail0) == 2.64) && borderless0);
      for (let p = 0; p < 3; p++) {
         rightE += parseFloat(`${3 ^ parseInt(`${tail0}`)}`);
      }
      ewardedt ^= streamingr.length / 1;
   if (4 <= (5 << (Math.min(3, Math.abs(ewardedt)))) && 5 <= (ewardedt << (Math.min(sentryx.length, 2)))) {
      ewardedt &= ewardedt - 1;
   }
      whistlez = new Map([[`${streamingr.length}`, 1]]);
      ewardedt &= stationn.length;
   for (let u = 0; u < 3; u++) {
       let screent = String.fromCharCode(114,101,106,101,99,116,105,111,110,95,122,95,52,55,0);
       let lessF = String.fromCharCode(104,97,110,100,101,114,95,109,95,55,49,0);
       let with_b68: Array<any> = [293, 876, 535];
      let miniQ = screent.length <= 7841351;
      do {
          let hongkongJ = String.fromCharCode(99,111,110,102,105,103,117,114,101,95,50,95,54,51,0);
          let huaweiH = 0.0;
         screent += `${3 >> (Math.min(4, with_b68.length))}`;
         hongkongJ += `${3 ^ hongkongJ.length}`;
         huaweiH -= hongkongJ.length;
         if (miniQ) {
            break;
         }
      } while ((screent.includes(`${with_b68.length}`)) && miniQ);
       let downloaderb: Array<any> = [String.fromCharCode(100,101,99,111,100,101,95,111,95,52,52,0), String.fromCharCode(117,116,105,108,105,116,105,101,115,95,111,95,54,52,0), String.fromCharCode(104,111,108,101,115,95,98,95,52,52,0)];
       let playc: Array<any> = [String.fromCharCode(97,115,101,108,101,99,116,95,97,95,55,54,0), String.fromCharCode(121,95,55,50,95,105,115,110,111,110,122,101,114,111,0), String.fromCharCode(122,95,57,49,95,112,114,101,115,101,116,115,0)];
      for (let w = 0; w < 3; w++) {
          let station4: Array<any> = [580, 316, 908];
          let models5 = String.fromCharCode(105,95,52,57,95,114,101,115,117,109,101,0);
          let darkV = String.fromCharCode(119,95,50,57,95,114,101,117,112,108,111,97,100,101,100,0);
          let referrerv = String.fromCharCode(122,95,51,50,95,99,108,101,97,110,101,100,0);
          let nterstitial4 = 2;
         downloaderb = [2];
         station4.push((String.fromCharCode(75,0) == referrerv ? referrerv.length : models5.length));
         models5 += `${station4.length}`;
         darkV = `${referrerv.length}`;
         nterstitial4 /= Math.max(1, 3 >> (Math.min(3, Math.abs(nterstitial4))));
      }
         screent = `${2 + playc.length}`;
          let expiredv = String.fromCharCode(105,115,116,114,101,97,109,95,107,95,51,55,0);
          let launcheri: Array<any> = [305, 47];
         downloaderb.push(expiredv.length % (Math.max(3, 9)));
         expiredv += "1";
         launcheri = [1];
          let gestures9 = 0.0;
          let chinasameJ = String.fromCharCode(99,97,116,101,103,111,114,105,101,115,95,56,95,51,51,0);
         downloaderb = [2];
         gestures9 += chinasameJ.length / 2;
         chinasameJ += `${parseInt(`${gestures9}`)}`;
      while (!lessF.endsWith(`${downloaderb.length}`)) {
          let showC = 5.0;
          let downe: Array<any> = [67, 398, 484];
         lessF += `${playc.length}`;
         showC /= Math.max(2, parseInt(`${showC}`) + 3);
         downe = [parseInt(`${showC}`)];
         break;
      }
      for (let a = 0; a < 1; a++) {
         screent += `${lessF.length - 1}`;
      }
       let redirectT = String.fromCharCode(113,95,53,55,95,114,101,115,101,97,114,99,104,0);
      phonel += "3";
   }
       let clubq: Map<any, any> = new Map([[String.fromCharCode(115,101,101,100,101,100,95,113,95,52,57,0),true ], [String.fromCharCode(107,101,121,101,100,95,104,95,57,52,0),true ], [String.fromCharCode(97,95,50,95,108,111,97,116,0),false ]]);
       let ewardedS: Array<any> = [String.fromCharCode(115,117,110,118,101,114,95,105,95,54,57,0), String.fromCharCode(102,95,49,49,95,115,101,116,0)];
       let benefitR = String.fromCharCode(119,95,54,51,95,100,97,114,107,101,110,105,110,103,0);
       let topicq = 2;
         benefitR = `${(String.fromCharCode(109,0) == benefitR ? benefitR.length : topicq)}`;
       let nexty = String.fromCharCode(116,114,117,101,104,100,95,99,95,57,57,0);
       let sliderE = String.fromCharCode(102,97,100,115,116,95,54,95,52,48,0);
         topicq <<= Math.min(Math.abs(2), 3);
      for (let h = 0; h < 3; h++) {
         clubq.set(sliderE, 2 | sliderE.length);
      }
         ewardedS.push(nexty.length);
         benefitR += `${(String.fromCharCode(112,0) == benefitR ? nexty.length : benefitR.length)}`;
          let mbnativeadvancedg = String.fromCharCode(119,95,54,56,95,104,105,103,104,108,105,103,104,116,105,110,103,0);
          let viewsc = String.fromCharCode(115,101,114,118,105,99,101,115,95,119,95,54,0);
          let leftM = 3.0;
         topicq *= benefitR.length + 3;
         mbnativeadvancedg = `${(viewsc == String.fromCharCode(85,0) ? viewsc.length : parseInt(`${leftM}`))}`;
         leftM -= parseInt(`${leftM}`);
      if (1 <= sliderE.length) {
         ewardedS = [3];
      }
      securitya += `${(parseInt(`${stringsC}`) | (regeng1 ? 4 : 4))}`;
    setIsOffline(offline);

   for (let w = 0; w < 1; w++) {
      linkl = [(phonel == String.fromCharCode(85,0) ? phonel.length : linkl.length)];
   }
      regeng1 = (sharedJ.size * abouts.length) >= 6;
   for (let a = 0; a < 1; a++) {
       let screend = false;
       let hook0 = true;
       let linkT = 0;
       let textL = String.fromCharCode(108,95,50,52,95,112,111,115,108,105,115,116,0);
       let renewk = 1.0;
      if (linkT > 3) {
         textL = "1";
      }
      while (screend) {
          let readE = String.fromCharCode(97,114,98,105,116,114,117,109,95,111,95,51,52,0);
          let stationsm = String.fromCharCode(121,95,53,51,95,104,97,110,110,105,110,103,0);
         hook0 = (readE.length * linkT) >= 10;
         readE += `${stationsm.length}`;
         stationsm = `${stationsm.length}`;
         break;
      }
       let step6 = String.fromCharCode(115,105,103,110,97,108,105,110,103,95,105,95,52,49,0);
         hook0 = screend && linkT >= 30;
         step6 = `${3 ^ parseInt(`${renewk}`)}`;
      let balll = screend ? !screend : screend;
      do {
         screend = (parseInt(`${renewk}`) / (Math.max(textL.length, 6))) < 80;
         if (balll) {
            break;
         }
      } while ((!textL.includes(`${screend}`)) && balll);
      if (1.29 >= (linkT * renewk)) {
         renewk -= (parseFloat(`${textL.length << (Math.min(3, Math.abs((hook0 ? 3 : 1))))}`));
      }
      while ((textL.length % 1) <= 5) {
         linkT &= ((screend ? 3 : 5));
         break;
      }
      let mbnativeadvanced6 = screend ? !screend : screend;
      do {
          let gemfileX: Map<any, any> = new Map([[String.fromCharCode(104,95,50,95,104,105,103,104,108,105,103,104,116,101,100,0),96], [String.fromCharCode(116,114,101,120,95,114,95,53,50,0),417]]);
          let delegate_03i = String.fromCharCode(99,95,55,49,95,118,100,115,111,0);
          let comment3 = String.fromCharCode(109,105,99,114,111,112,104,111,110,101,95,98,95,49,55,0);
          let expandL = false;
         screend = expandL;
         gemfileX = new Map([[`${gemfileX.size}`, delegate_03i.length]]);
         delegate_03i += "3";
         comment3 = `${delegate_03i.length - comment3.length}`;
         if (mbnativeadvanced6) {
            break;
         }
      } while ((linkT > 3) && mbnativeadvanced6);
          let reminderK = 0;
          let routeri: Map<any, any> = new Map([[String.fromCharCode(109,105,103,114,97,116,101,100,95,108,95,53,57,0),false ], [String.fromCharCode(117,110,114,101,103,105,115,116,101,114,101,100,95,106,95,52,50,0),false ], [String.fromCharCode(112,95,54,52,95,110,111,116,105,102,105,101,100,0),true ]]);
         renewk += parseFloat(`${3}`);
         reminderK ^= routeri.size >> (Math.min(Math.abs(1), 2));
         routeri.set(`${reminderK}`, 2);
         step6 = `${linkT}`;
       let fillb = String.fromCharCode(100,95,56,54,95,99,104,117,110,107,0);
       let station_ = String.fromCharCode(113,95,57,48,95,111,100,97,116,97,0);
          let infox: Map<any, any> = new Map([[String.fromCharCode(103,101,116,112,116,114,95,121,95,52,55,0),969], [String.fromCharCode(107,95,55,53,95,101,110,99,111,100,105,110,103,98,0),843], [String.fromCharCode(104,95,49,57,95,100,105,97,109,101,116,101,114,0),626]]);
         renewk *= parseFloat(`${1 % (Math.max(4, linkT))}`);
         infox = new Map([[`${infox.size}`, 2]]);
          let debugy: Map<any, any> = new Map([[String.fromCharCode(116,95,49,51,95,112,111,114,116,101,114,0),537], [String.fromCharCode(103,95,50,53,95,115,105,110,99,0),1000], [String.fromCharCode(114,101,102,112,105,99,95,120,95,54,0),697]]);
          let firebaseF = String.fromCharCode(115,95,53,52,95,105,116,101,114,97,116,101,0);
          let telegramh = String.fromCharCode(107,95,54,57,95,115,111,98,101,108,0);
         hook0 = telegramh == textL;
         debugy = new Map([[`${debugy.size}`, debugy.size]]);
         firebaseF += `${firebaseF.length | debugy.size}`;
         telegramh = "2";
         hook0 = 35 >= linkT || step6.length >= 35;
      abouts += "3";
   }
   for (let q = 0; q < 3; q++) {
      phonel += `${parseInt(`${stringsC}`) - 1}`;
   }
      sharedJ = new Map([[`${whistlez.size}`, sharedJ.size % (Math.max(3, 1))]]);
      stationn += `${1 + stationn.length}`;
   if (regeng1 && 4 == (ewardedt | 1)) {
      regeng1 = null != whistlez.get(`${ewardedt}`);
   }
    if (!offline) {

       let refreshp = 0.0;
       let sell3 = 1.0;
      for (let i = 0; i < 3; i++) {
          let settings7 = true;
          let stylesD = 5;
          let mimoE = 2.0;
         sell3 /= Math.max(parseFloat(`${2 + parseInt(`${refreshp}`)}`), 3);
         settings7 = settings7 || stylesD > 32;
         stylesD >>= Math.min(5, Math.abs(stylesD));
         mimoE /= Math.max(stylesD, 5);
      }
      if (3.61 > (sell3 - refreshp) && 5.23 > (sell3 - 3.61)) {
         refreshp /= Math.max(3 / (Math.max(10, parseInt(`${sell3}`))), 1);
      }
      while ((sell3 + 4.99) == 1.14) {
         sell3 -= parseFloat(`${2 * parseInt(`${sell3}`)}`);
         break;
      }
      let episodesy = 8139777.0 >= sell3;
      do {
         sell3 /= Math.max(3, parseFloat(`${3 * parseInt(`${refreshp}`)}`));
         if (episodesy) {
            break;
         }
      } while ((3.28 < (sell3 + 5.77)) && episodesy);
         refreshp += parseInt(`${sell3}`);
         refreshp *= parseInt(`${refreshp}`) % 2;
      securitya = `${((regeng1 ? 3 : 4))}`;
      sentryx += `${sentryx.length}`;
   while (4 <= (5 ^ streamingr.length)) {
      streamingr = [((regeng1 ? 4 : 4))];
      break;
   }
       let xvodF = String.fromCharCode(102,95,56,57,95,99,111,109,109,97,110,100,0);
       let logout5 = 2.0;
       let confirmation5 = String.fromCharCode(116,114,97,99,107,105,110,103,95,110,95,54,51,0);
          let sinak = String.fromCharCode(102,95,56,49,95,99,104,97,114,116,0);
         confirmation5 = `${(String.fromCharCode(83,0) == confirmation5 ? confirmation5.length : parseInt(`${logout5}`))}`;
         sinak += `${(String.fromCharCode(53,0) == sinak ? sinak.length : sinak.length)}`;
          let fastG = 4;
         confirmation5 = `${fastG}`;
         logout5 /= Math.max(parseFloat(`${confirmation5.length ^ parseInt(`${logout5}`)}`), 3);
      let homeo = logout5 >= 8698054.0;
      do {
          let indicatorY: Array<any> = [747, 57];
         logout5 *= parseFloat(`${xvodF.length}`);
         indicatorY = [indicatorY.length << (Math.min(Math.abs(1), 3))];
         if (homeo) {
            break;
         }
      } while (((xvodF.length << (Math.min(Math.abs(5), 5))) > 5 || 2.12 > (logout5 / (Math.max(3.59, 8)))) && homeo);
      while (parseFloat(`${xvodF.length}`) > logout5) {
          let paused = String.fromCharCode(116,115,97,110,95,119,95,53,49,0);
          let adultQ = String.fromCharCode(116,95,51,55,95,109,121,115,101,108,102,0);
          let flyerW = String.fromCharCode(99,111,110,116,97,105,110,115,95,97,95,56,50,0);
         logout5 -= (parseFloat(`${String.fromCharCode(83,0) == confirmation5 ? confirmation5.length : adultQ.length}`));
         paused = `${(String.fromCharCode(83,0) == flyerW ? flyerW.length : paused.length)}`;
         adultQ += `${flyerW.length / (Math.max(2, 10))}`;
         break;
      }
       let modelC: Map<any, any> = new Map([[String.fromCharCode(104,95,50,48,95,97,100,118,97,110,99,101,0),213], [String.fromCharCode(115,95,51,56,95,115,113,108,105,116,101,0),628], [String.fromCharCode(108,101,114,112,95,110,95,50,49,0),298]]);
       let download8: Map<any, any> = new Map([[String.fromCharCode(115,108,111,119,101,115,116,95,98,95,49,55,0),String.fromCharCode(114,95,49,95,114,116,112,112,108,97,121,0)], [String.fromCharCode(105,95,49,57,95,120,102,97,99,101,0),String.fromCharCode(110,95,52,57,95,99,104,101,99,107,112,111,105,110,116,0)], [String.fromCharCode(118,95,55,54,95,97,112,112,114,101,99,97,116,105,111,110,0),String.fromCharCode(100,95,57,52,95,114,102,112,115,0)]]);
      if (parseFloat(`${xvodF.length}`) <= logout5) {
         logout5 *= parseFloat(`${3}`);
      }
         download8.set(`${logout5}`, parseInt(`${logout5}`) + 2);
          let shirtN = 5;
          let mbnativeP = 4.0;
         confirmation5 = `${shirtN | 2}`;
         shirtN %= Math.max(parseInt(`${mbnativeP}`) ^ parseInt(`${mbnativeP}`), 4);
      abouts = `${whistlez.size}`;
      sharedJ = new Map([[`${linkl.length}`, linkl.length]]);
   let stringsk = linkl.length >= 5734612;
   do {
       let mbsplashx = 4.0;
       let completet = String.fromCharCode(116,95,49,48,48,95,119,105,116,104,111,117,116,0);
       let helperq = 5.0;
       let combinedm = String.fromCharCode(104,95,57,95,112,111,115,116,101,110,99,111,100,101,0);
         mbsplashx += 1 << (Math.min(4, combinedm.length));
      for (let v = 0; v < 2; v++) {
          let lightu = 3.0;
         mbsplashx += 1 * parseInt(`${lightu}`);
      }
      if (4.91 <= (4.82 - helperq)) {
         helperq *= 3;
      }
      let hejiJ = mbsplashx <= 8780856.0;
      do {
          let analyticsV = 4.0;
          let whistlem: Map<any, any> = new Map([[String.fromCharCode(122,95,56,49,95,119,97,108,107,101,114,0),true ], [String.fromCharCode(99,97,108,99,95,99,95,56,0),true ], [String.fromCharCode(115,95,50,52,95,97,109,98,105,101,110,116,0),true ]]);
          let injuryj: Array<any> = [406, 46, 800];
          let teamo = 0.0;
         mbsplashx /= Math.max(parseInt(`${mbsplashx}`) + parseInt(`${teamo}`), 2);
         analyticsV -= parseFloat(`${whistlem.size}`);
         whistlem.set(`${injuryj.length}`, 2);
         injuryj = [1 ^ whistlem.size];
         teamo += parseInt(`${analyticsV}`) | whistlem.size;
         if (hejiJ) {
            break;
         }
      } while (hejiJ && (1.100 < (2.75 - mbsplashx)));
      for (let l = 0; l < 3; l++) {
         completet += `${parseInt(`${helperq}`)}`;
      }
         helperq += completet.length;
          let crownf: Map<any, any> = new Map([[String.fromCharCode(120,99,98,103,114,97,98,95,98,95,56,52,0),713], [String.fromCharCode(120,95,52,53,95,99,111,112,121,116,101,115,116,0),229]]);
          let indicatorC = 4;
          let clockG = String.fromCharCode(100,101,102,105,110,105,116,105,111,110,115,95,53,95,52,54,0);
         combinedm += `${indicatorC + 2}`;
         crownf.set(clockG, crownf.size % (Math.max(8, clockG.length)));
         indicatorC *= clockG.length;
         completet += `${(String.fromCharCode(103,0) == completet ? parseInt(`${mbsplashx}`) : completet.length)}`;
      while (1 == combinedm.length) {
          let views8 = 3.0;
         helperq += (combinedm == String.fromCharCode(54,0) ? combinedm.length : parseInt(`${helperq}`));
         views8 -= parseFloat(`${2}`);
         break;
      }
      let str5 = helperq <= 6871862.0;
      do {
          let layoutM = 0.0;
         helperq -= parseInt(`${mbsplashx}`) - 1;
         layoutM -= parseInt(`${layoutM}`) / 1;
         if (str5) {
            break;
         }
      } while (((combinedm.length + helperq) <= 2.37 || (combinedm.length + helperq) <= 2.37) && str5);
       let lightH: Map<any, any> = new Map([[String.fromCharCode(115,104,111,114,116,101,114,95,111,95,51,52,0),true ], [String.fromCharCode(108,95,54,53,95,117,110,105,120,0),false ], [String.fromCharCode(102,97,100,101,111,117,116,95,48,95,55,55,0),true ]]);
       let zhubo6: Map<any, any> = new Map([[String.fromCharCode(99,101,108,102,95,53,95,51,57,0),187], [String.fromCharCode(99,111,114,101,115,95,114,95,56,51,0),791]]);
      let read0 = completet.length >= 6480165;
      do {
          let questK: Array<any> = [791, 794, 16];
          let small0 = String.fromCharCode(99,108,111,99,107,119,105,115,101,95,100,95,49,57,0);
         completet += "1";
         questK.push(2 + small0.length);
         small0 += `${1 - questK.length}`;
         if (read0) {
            break;
         }
      } while (((1.95 - helperq) == 4.23 && (completet.length - 5) == 1) && read0);
      linkl = [1];
      if (stringsk) {
         break;
      }
   } while ((3 >= (4 >> (Math.min(3, streamingr.length)))) && stringsk);
      sharedJ = new Map([[`${whistlez.size}`, whistlez.size | securitya.length]]);
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
    ttMbbannerMore.getTopic(page)
      .then((json: ttProject) => {
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

  const renderItem = useCallback(({ item }: ttBing) => (
    <VodPlaylist playlist={item} titleStyle={{ color: colors.text }} />
  ), []);

  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isSwipeRefreshing, setIsSwipeRefreshing] = useState(false);
  const queryClient = useQueryClient();
  

  const handleRefresh = useCallback(async (isSwipe: boolean = false) => {
       let v_unlocke = String.fromCharCode(106,95,51,51,95,116,114,97,110,115,102,111,114,109,97,116,105,111,110,0);
    let router6 = 3.0;
    let invite3 = String.fromCharCode(104,115,116,114,105,110,103,95,54,95,55,51,0);
    let langa = String.fromCharCode(118,112,105,116,120,102,109,95,107,95,54,56,0);
    let clockq: Map<any, any> = new Map([[String.fromCharCode(105,95,52,49,95,116,114,97,110,115,108,97,116,101,100,0),420], [String.fromCharCode(121,95,52,52,95,115,111,117,114,99,101,0),159], [String.fromCharCode(108,105,98,115,114,116,95,116,95,56,48,0),345]]);
    let material3: Array<any> = [754, 941];
    let icon0: Array<any> = [49, 666];
    let commonc = String.fromCharCode(117,115,101,114,115,112,97,99,101,95,48,95,56,55,0);
    let long_7_ = true;
    let vignettee: Map<any, any> = new Map([[String.fromCharCode(98,111,100,121,95,121,95,55,50,0),String.fromCharCode(108,105,115,116,105,110,103,115,95,111,95,51,50,0)], [String.fromCharCode(109,111,100,101,108,95,114,95,55,53,0),String.fromCharCode(111,112,116,105,111,110,95,112,95,54,55,0)]]);
    let tooltips2: Array<any> = [770, 763, 437];
    let injuryE = String.fromCharCode(115,97,118,101,100,95,53,95,51,54,0);
    let b_unlocki = 2;
    let agreemente = String.fromCharCode(112,114,101,115,101,110,116,105,110,103,95,108,95,54,0);
    let mimo1 = 4.0;
      material3.push(3);
       let constantsg: Map<any, any> = new Map([[String.fromCharCode(100,111,117,103,108,97,115,95,112,95,50,57,0),117], [String.fromCharCode(116,114,97,99,107,95,99,95,51,0),117]]);
       let dycreatorZ = 2;
         constantsg = new Map([[`${constantsg.size}`, dycreatorZ]]);
         dycreatorZ += 3;
         constantsg.set(`${dycreatorZ}`, dycreatorZ);
       let formF = 0.0;
       let sharedm = 2.0;
      while (formF == 4.79) {
         constantsg = new Map([[`${sharedm}`, dycreatorZ / 2]]);
         break;
      }
       let largeO: Array<any> = [String.fromCharCode(99,111,108,111,114,109,97,112,95,116,95,49,48,48,0), String.fromCharCode(104,95,57,55,95,102,114,97,109,101,115,105,122,101,0)];
       let modityi: Array<any> = [903, 321];
      invite3 = "1";
       let chart1 = 0;
          let filed_ = String.fromCharCode(112,114,111,112,111,115,101,100,95,108,95,51,53,0);
         chart1 -= filed_.length;
      if (4 >= (chart1 ^ 5) && (chart1 ^ 5) >= 4) {
          let thumbnaill = 2;
         chart1 ^= chart1 / 1;
         thumbnaill <<= Math.min(1, Math.abs(thumbnaill << (Math.min(Math.abs(thumbnaill), 3))));
      }
          let episodese = true;
          let chartS = 4;
          let thailand9: Map<any, any> = new Map([[String.fromCharCode(117,95,49,50,95,112,114,111,106,101,99,116,105,111,110,0),887], [String.fromCharCode(112,105,120,101,108,117,116,105,108,115,95,50,95,53,51,0),430], [String.fromCharCode(118,99,100,115,112,95,56,95,54,50,0),732]]);
         chart1 <<= Math.min(Math.abs(chart1), 4);
         episodese = chartS < 13 || !episodese;
         chartS %= Math.max(4, 1);
         thailand9.set(`${chartS}`, 3 | thailand9.size);
      vignettee.set(langa, 2);
      vignettee.set(`${long_7_}`, (vignettee.size / (Math.max(1, (long_7_ ? 5 : 4)))));

    if (isSwipe) {

      clockq = new Map([[`${material3.length}`, tooltips2.length - 1]]);
   while ((3 / (Math.max(6, vignettee.size))) >= 5 || (3 / (Math.max(1, vignettee.size))) >= 5) {
      vignettee.set(commonc, icon0.length);
      break;
   }
   if (long_7_) {
       let singlev = 2.0;
       let hookw = 0;
      for (let s = 0; s < 1; s++) {
          let libcrashsdk1 = 0.0;
          let assist4 = String.fromCharCode(112,95,53,57,95,111,112,112,111,114,116,117,110,105,115,116,105,99,97,108,108,121,0);
          let refresh1: Array<any> = [477, 385];
         singlev += parseFloat(`${3}`);
         libcrashsdk1 /= Math.max(parseFloat(`${refresh1.length}`), 1);
         assist4 += `${refresh1.length}`;
      }
       let related1 = 4.0;
       let filterr = 3.0;
      while (2 <= (parseInt(`${related1}`) * hookw) || 4.100 <= (related1 * 2.8)) {
          let inviten = String.fromCharCode(106,95,49,95,105,116,97,108,105,97,110,0);
          let signinuph = true;
         related1 -= parseFloat(`${1}`);
         inviten = `${inviten.length}`;
         signinuph = (inviten.length | inviten.length) <= 79;
         break;
      }
         filterr /= Math.max(parseFloat(`${parseInt(`${related1}`)}`), 2);
      let bodanq = 8180845 <= hookw;
      do {
         hookw >>= Math.min(Math.abs(1 << (Math.min(Math.abs(parseInt(`${related1}`)), 4))), 3);
         if (bodanq) {
            break;
         }
      } while (((hookw - 5) <= 4) && bodanq);
          let renewe = String.fromCharCode(109,111,100,101,109,118,99,111,115,116,95,49,95,57,0);
          let verticalN = String.fromCharCode(120,95,57,49,95,97,100,100,0);
          let store4 = String.fromCharCode(112,108,117,103,103,101,100,95,112,95,54,56,0);
         related1 *= (parseFloat(`${verticalN == String.fromCharCode(116,0) ? store4.length : verticalN.length}`));
         renewe += "3";
      vignettee.set(`${tooltips2.length}`, tooltips2.length * 1);
   }
      commonc = `${material3.length + vignettee.size}`;
      setIsSwipeRefreshing(true);
    } else {

   let middlewareH = 7139943 <= icon0.length;
   do {
      icon0 = [3];
      if (middlewareH) {
         break;
      }
   } while ((1 <= (icon0.length | 3) && 3 <= (icon0.length | commonc.length)) && middlewareH);
   for (let k = 0; k < 1; k++) {
      icon0.push(vignettee.size);
   }
   for (let y = 0; y < 3; y++) {
      langa += `${(langa == String.fromCharCode(68,0) ? tooltips2.length : langa.length)}`;
   }
      tooltips2 = [2 & tooltips2.length];
      setIsRefreshing(true);
    }
    

       let playt = String.fromCharCode(112,95,53,54,95,115,116,97,110,100,97,114,100,105,122,101,0);
       let policyM = String.fromCharCode(122,95,50,54,95,99,108,111,115,105,110,103,0);
       let history7 = 1;
       let moonb = 0;
         moonb += 2 - playt.length;
      langa += `${tooltips2.length}`;
   for (let p = 0; p < 2; p++) {
      invite3 = "3";
   }
   let predictionK = langa == String.fromCharCode(103,106,107,112,115,100,0);
   do {
      langa += "3";
      if (predictionK) {
         break;
      }
   } while (predictionK && (1 > langa.length));
      langa = `${tooltips2.length + 3}`;
    

   let edit2 = clockq.size >= 5948325;
   do {
      clockq.set(commonc, 2);
      if (edit2) {
         break;
      }
   } while (edit2 && (4 <= clockq.size));
   while (!injuryE.startsWith(`${long_7_}`)) {
      long_7_ = String.fromCharCode(116,0) == langa;
      break;
   }
      injuryE = `${v_unlocke.length | langa.length}`;
       let sell9 = String.fromCharCode(112,95,54,57,95,111,110,101,119,97,121,0);
       let eactR = 4.0;
       let chinasame0 = String.fromCharCode(115,95,50,57,95,112,105,99,116,111,114,0);
         eactR -= parseFloat(`${parseInt(`${eactR}`) % 1}`);
         chinasame0 = `${parseInt(`${eactR}`)}`;
      while (sell9 != String.fromCharCode(69,0) || chinasame0.length <= 1) {
         chinasame0 = `${parseInt(`${eactR}`)}`;
         break;
      }
          let borderlesso: Array<any> = [412, 511, 810];
         chinasame0 += `${chinasame0.length}`;
         borderlesso.push(borderlesso.length << (Math.min(Math.abs(2), 3)));
         chinasame0 += `${chinasame0.length}`;
      if (!chinasame0.includes(`${eactR}`)) {
          let pangleM = String.fromCharCode(108,105,98,118,112,120,95,102,95,51,48,0);
          let helper5 = String.fromCharCode(111,112,117,115,116,97,98,95,105,95,56,57,0);
          let linec = 0.0;
          let sheetD = String.fromCharCode(99,101,108,116,95,105,95,54,53,0);
          let crossv = 1;
         eactR -= parseFloat(`${parseInt(`${linec}`)}`);
         pangleM += `${crossv & pangleM.length}`;
         helper5 += `${3 & crossv}`;
         linec += (parseFloat(`${String.fromCharCode(78,0) == helper5 ? helper5.length : pangleM.length}`));
         sheetD += `${crossv << (Math.min(pangleM.length, 2))}`;
      }
         chinasame0 += `${parseInt(`${eactR}`)}`;
         eactR -= parseFloat(`${1}`);
         eactR += parseFloat(`${chinasame0.length - 1}`);
      invite3 = "1";

    

   let short_31 = 9889902 <= tooltips2.length;
   do {
      tooltips2.push(vignettee.size);
      if (short_31) {
         break;
      }
   } while (short_31 && (commonc.endsWith(`${tooltips2.length}`)));
      tooltips2 = [injuryE.length / (Math.max(2, parseInt(`${router6}`)))];
       let telegramz = String.fromCharCode(116,111,97,115,116,115,95,114,95,53,56,0);
         telegramz = `${(telegramz == String.fromCharCode(109,0) ? telegramz.length : telegramz.length)}`;
         telegramz = `${(String.fromCharCode(101,0) == telegramz ? telegramz.length : telegramz.length)}`;
      for (let n = 0; n < 3; n++) {
          let previews = String.fromCharCode(105,95,52,52,95,105,112,113,102,0);
          let package_cG = 2.0;
          let episodew: Array<any> = [696, 969, 746];
          let successr = 1;
          let dycreators = 2.0;
         telegramz += `${telegramz.length >> (Math.min(Math.abs(1), 1))}`;
         previews += `${parseInt(`${package_cG}`) >> (Math.min(Math.abs(3), 4))}`;
         package_cG -= previews.length << (Math.min(5, episodew.length));
         episodew.push(2 << (Math.min(Math.abs(parseInt(`${package_cG}`)), 1)));
         successr %= Math.max(4, parseInt(`${package_cG}`) & episodew.length);
         dycreators *= parseFloat(`${episodew.length >> (Math.min(Math.abs(2), 5))}`);
      }
      clockq.set(invite3, icon0.length >> (Math.min(Math.abs(2), 1)));
   if (4 == (4 | clockq.size) || 3 == (4 | clockq.size)) {
      commonc = `${vignettee.size}`;
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
                source={require('@static/images/toponTerms.gif')}
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
                      source={require('@static/images/toponTerms.gif')}
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
