import React, { useCallback, useEffect, useState, memo } from 'react';
import { StyleSheet, View, Text, RefreshControl, FlatList } from 'react-native';
import { useQueryClient } from '@tanstack/react-query';
import ScreenContainer from '../../components/container/ww_collection';
import MainHeader from '../../components/header/ww_schedule_header';
import { useFocusEffect, useTheme } from '@react-navigation/native';
import { useInfiniteQuery } from '@tanstack/react-query';
import { wwScrollview, wwFirebase } from '@type/ww_dycreator_result';
import VodPlaylist from '../../components/playlist/ww_package';
import { BottomTabScreenProps, useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { API_DOMAIN } from '@utility/ww_icon';
import FastImage from "../../components/common/ww_result"
import { useIsFocused } from '@react-navigation/native';
import NoConnection from './../../components/common/ww_downarrow';
import NetInfo, { NetInfoState } from '@react-native-community/netinfo';
import { wwShielddoneAlbum } from '@redux/reducers/ww_detail_mbsplash';
import { wwEighteenShirt } from '@redux/ww_small';
import { useAppSelector } from '@hooks/ww_catagory_neon';
import ww_runtime from '../../../../Umeng/ww_runtime';
import { wwGrayNewarchdefaults } from '@api';

type wwCasting = {
  item: wwFirebase;
  index: number;
};

function Playlist({ navigation }: BottomTabScreenProps<any>) {
  
  const { textVariants, colors, spacing } = useTheme();
  const LIMIT_PER_PAGE = 10;
  // const [results, setResults] = useState<Array<wwFirebase>>([])
  const [totalPage, setTotalPage] = useState(0);

  const isFocused = useIsFocused();
  const [isOffline, setIsOffline] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const settingsReducer: wwShielddoneAlbum = useAppSelector(
    ({ settingsReducer }: wwEighteenShirt) => settingsReducer
  );

  
  useFocusEffect(useCallback(() => {
    ww_runtime.playlistViewsAnalytics();
  }, []));
  

  
  const handleTabPress = () => {
       let libjsinspectorO = 2.0;
    let placeholderg: Array<any> = [String.fromCharCode(117,95,51,48,95,116,114,97,100,101,0), String.fromCharCode(118,95,53,48,95,112,105,99,107,0)];
    let heartA: Map<any, any> = new Map([[String.fromCharCode(109,95,56,55,95,101,108,101,109,101,110,116,119,105,115,101,0),624], [String.fromCharCode(100,105,97,108,111,103,117,101,95,114,95,49,50,0),230]]);
    let usernamej = String.fromCharCode(103,95,49,95,115,118,97,114,105,110,116,0);
    let signinupN = 1.0;
    let layoutf = String.fromCharCode(116,95,56,52,95,117,116,99,0);
    let iconshare0 = String.fromCharCode(113,117,101,115,116,105,111,110,95,101,95,57,51,0);
    let downloaderf = 3.0;
    let classest = 3;
    let dycreatorp = true;
    let mbnativeadvancedo = 3.0;
    let dialogf: Array<any> = [String.fromCharCode(111,117,112,117,116,95,101,95,53,52,0), String.fromCharCode(104,95,53,51,95,99,111,108,108,101,99,116,105,111,110,0)];
    let langkey8 = String.fromCharCode(122,95,57,55,95,100,105,114,101,99,116,108,121,0);
      mbnativeadvancedo *= (placeholderg.length >> (Math.min(2, Math.abs((dycreatorp ? 1 : 1)))));
   for (let r = 0; r < 2; r++) {
       let cornerd: Map<any, any> = new Map([[String.fromCharCode(117,117,105,100,95,119,95,55,0),766], [String.fromCharCode(103,119,103,116,95,113,95,49,0),508]]);
       let detailsJ: Array<any> = [String.fromCharCode(109,98,97,102,102,95,101,95,49,56,0), String.fromCharCode(117,110,100,101,114,95,107,95,55,57,0), String.fromCharCode(97,112,97,114,97,109,115,95,98,95,52,52,0)];
      let gestureso = 9296282 >= cornerd.size;
      do {
         cornerd = new Map([[`${cornerd.size}`, cornerd.size << (Math.min(detailsJ.length, 3))]]);
         if (gestureso) {
            break;
         }
      } while ((detailsJ.length == 4) && gestureso);
         detailsJ.push(detailsJ.length);
         cornerd.set(`${detailsJ.length}`, detailsJ.length);
      let linew = 8913906 >= cornerd.size;
      do {
         cornerd = new Map([[`${cornerd.size}`, cornerd.size]]);
         if (linew) {
            break;
         }
      } while ((5 == (cornerd.size >> (Math.min(4, detailsJ.length)))) && linew);
          let u_positionA: Map<any, any> = new Map([[String.fromCharCode(112,114,101,100,105,99,116,111,114,115,95,119,95,53,56,0),876], [String.fromCharCode(115,117,98,112,97,116,104,95,116,95,53,53,0),895]]);
         detailsJ = [u_positionA.size];
      while (detailsJ.length == cornerd.size) {
         detailsJ.push(2);
         break;
      }
      downloaderf *= parseFloat(`${cornerd.size}`);
   }
      downloaderf += parseFloat(`${1 << (Math.min(2, Math.abs(parseInt(`${mbnativeadvancedo}`))))}`);
       let schedulerf = String.fromCharCode(116,119,101,97,107,115,95,120,95,51,56,0);
       let predictionw = 3.0;
       let gifgoalC = String.fromCharCode(108,95,55,56,95,98,105,110,0);
         gifgoalC = `${1 * parseInt(`${predictionw}`)}`;
          let lightH = 3;
          let iconsaveimage_ = 2;
          let playL = String.fromCharCode(99,111,110,102,108,105,99,116,115,95,54,95,56,51,0);
         gifgoalC += `${parseInt(`${predictionw}`)}`;
         lightH -= 1;
         iconsaveimage_ *= iconsaveimage_;
         playL = `${iconsaveimage_}`;
      for (let h = 0; h < 1; h++) {
         gifgoalC = `${parseInt(`${predictionw}`)}`;
      }
      if (3.48 > (predictionw / (Math.max(gifgoalC.length, 10)))) {
         predictionw += 2;
      }
       let downloadedV: Array<any> = [548, 755, 814];
          let bdxadsdkT = 4;
         schedulerf += `${downloadedV.length << (Math.min(schedulerf.length, 2))}`;
         bdxadsdkT /= Math.max(bdxadsdkT, 2);
         gifgoalC = `${3 << (Math.min(2, downloadedV.length))}`;
      for (let m = 0; m < 3; m++) {
         predictionw /= Math.max(schedulerf.length, 3);
      }
       let changen: Array<any> = [666, 42, 682];
      iconshare0 += `${2 / (Math.max(3, parseInt(`${predictionw}`)))}`;
      layoutf = `${((dycreatorp ? 5 : 3) / (Math.max(parseInt(`${downloaderf}`), 10)))}`;
   let rewardE = String.fromCharCode(122,114,104,111,107,48,108,102,0) == iconshare0;
   do {
       let flyera: Map<any, any> = new Map([[String.fromCharCode(100,101,99,101,108,101,114,97,116,105,111,110,95,50,95,50,54,0),true ], [String.fromCharCode(112,114,111,98,105,110,103,95,100,95,56,0),false ]]);
       let screenc = 4;
       let libturbomodulejsijniK = String.fromCharCode(121,95,49,56,95,112,105,120,101,108,115,0);
       let runtimeX = String.fromCharCode(100,95,53,50,95,116,117,110,110,101,108,101,100,0);
       let bdxadsdkb: Array<any> = [863, 291, 267];
       let sansS = 2.0;
          let statisticsa = String.fromCharCode(99,104,97,110,110,101,108,115,95,110,95,51,54,0);
         runtimeX += `${flyera.size}`;
         statisticsa += `${statisticsa.length % (Math.max(2, statisticsa.length))}`;
       let auto_lye = 1;
       let vipsportd = 3;
      for (let l = 0; l < 1; l++) {
         vipsportd <<= Math.min(3, Math.abs(bdxadsdkb.length << (Math.min(3, Math.abs(parseInt(`${sansS}`))))));
      }
      while (4.11 >= sansS) {
          let nalyticsf = 5.0;
          let weatherE: Map<any, any> = new Map([[String.fromCharCode(104,95,51,49,95,101,108,101,109,115,0),698], [String.fromCharCode(117,110,112,114,101,109,117,108,116,105,112,108,121,121,117,118,95,106,95,55,56,0),266]]);
          let privilegek = String.fromCharCode(117,95,56,54,0);
          let infoW = String.fromCharCode(97,95,53,48,95,111,118,112,97,103,101,0);
          let hiadk = String.fromCharCode(121,95,49,48,95,97,117,100,105,111,0);
         bdxadsdkb = [screenc & 2];
         nalyticsf *= parseFloat(`${weatherE.size}`);
         weatherE = new Map([[`${nalyticsf}`, privilegek.length]]);
         privilegek += `${weatherE.size}`;
         infoW += `${3 | infoW.length}`;
         hiadk = `${2 * weatherE.size}`;
         break;
      }
         libturbomodulejsijniK += `${3 & parseInt(`${sansS}`)}`;
      while (3 >= bdxadsdkb.length) {
          let typesv: Array<any> = [987, 669];
          let injury_ = String.fromCharCode(99,111,110,102,105,103,117,114,97,116,105,111,110,95,100,95,55,56,0);
          let activityL: Array<any> = [52, 198, 37];
         vipsportd -= flyera.size << (Math.min(Math.abs(3), 1));
         typesv = [1 >> (Math.min(4, injury_.length))];
         injury_ = "1";
         activityL.push(activityL.length << (Math.min(Math.abs(2), 5)));
         break;
      }
         bdxadsdkb.push(3);
       let phoneshareW = false;
      let logouser8 = phoneshareW ? !phoneshareW : phoneshareW;
      do {
          let libloggerB = 4;
          let baiduR = 1;
          let tickG = 5;
          let submitX = String.fromCharCode(110,101,97,114,101,115,116,95,100,95,55,51,0);
          let yellowvideolive_ = String.fromCharCode(104,95,53,48,95,109,101,109,115,104,105,112,0);
         phoneshareW = baiduR < runtimeX.length;
         libloggerB %= Math.max(4, (submitX == String.fromCharCode(100,0) ? yellowvideolive_.length : submitX.length));
         baiduR *= (String.fromCharCode(77,0) == yellowvideolive_ ? submitX.length : yellowvideolive_.length);
         tickG >>= Math.min(Math.abs(libloggerB), 1);
         if (logouser8) {
            break;
         }
      } while ((!phoneshareW && (screenc - 1) == 4) && logouser8);
      while (4 >= runtimeX.length) {
          let referrerU = 0;
          let episodeL = false;
          let reviewg: Map<any, any> = new Map([[String.fromCharCode(104,95,54,95,117,110,112,105,110,110,101,100,0),888], [String.fromCharCode(101,95,51,54,95,112,114,101,100,105,99,116,105,111,110,0),150], [String.fromCharCode(104,95,55,52,95,112,114,111,109,112,101,103,0),900]]);
         runtimeX = "2";
         referrerU |= (referrerU ^ (episodeL ? 3 : 3));
         episodeL = reviewg.size == 98 && !episodeL;
         reviewg.set(`${referrerU}`, referrerU << (Math.min(Math.abs(1), 2)));
         break;
      }
         flyera.set(runtimeX, runtimeX.length);
      for (let p = 0; p < 2; p++) {
         auto_lye |= bdxadsdkb.length;
      }
      for (let b = 0; b < 3; b++) {
         flyera = new Map([[runtimeX, 3 * vipsportd]]);
      }
         phoneshareW = phoneshareW || 35 > vipsportd;
      iconshare0 += `${1 * classest}`;
      if (rewardE) {
         break;
      }
   } while (rewardE && (!iconshare0.includes(`${classest}`)));
   if (iconshare0.length == 3) {
      iconshare0 = `${1 * iconshare0.length}`;
   }
      libjsinspectorO -= usernamej.length * 1;
      signinupN -= (usernamej == String.fromCharCode(75,0) ? usernamej.length : placeholderg.length);
   if (heartA.size == usernamej.length) {
      usernamej += `${classest}`;
   }
       let gifgoalbgj = String.fromCharCode(103,95,56,53,95,114,101,117,115,97,98,108,101,0);
       let minimizeT = String.fromCharCode(115,116,101,108,108,97,114,95,49,95,52,49,0);
       let right6 = String.fromCharCode(100,111,110,101,95,102,95,54,49,0);
      if (right6 == String.fromCharCode(98,0)) {
         minimizeT = `${right6.length}`;
      }
      let libreactperfloggerjni0 = minimizeT == String.fromCharCode(112,102,56,112,95,103,114,122,55,0);
      do {
         minimizeT += `${right6.length - gifgoalbgj.length}`;
         if (libreactperfloggerjni0) {
            break;
         }
      } while (libreactperfloggerjni0 && (5 < minimizeT.length));
         minimizeT += `${right6.length ^ 3}`;
         gifgoalbgj += `${minimizeT.length / 2}`;
      for (let y = 0; y < 3; y++) {
          let schedulerG: Array<any> = [87, 289, 792];
          let iconsaveimageZ = true;
          let redirect8 = 1.0;
          let currentU = true;
          let banner3 = 1.0;
         gifgoalbgj += `${(gifgoalbgj == String.fromCharCode(118,0) ? gifgoalbgj.length : (iconsaveimageZ ? 4 : 4))}`;
         schedulerG.push(2 * schedulerG.length);
         iconsaveimageZ = !currentU;
         redirect8 += parseFloat(`${3 >> (Math.min(Math.abs(parseInt(`${banner3}`)), 2))}`);
         banner3 /= Math.max(parseFloat(`${1}`), 2);
      }
      let teamdetailsbgo = String.fromCharCode(119,53,101,100,112,103,53,56,112,0) == right6;
      do {
         right6 = "1";
         if (teamdetailsbgo) {
            break;
         }
      } while ((gifgoalbgj != String.fromCharCode(114,0)) && teamdetailsbgo);
      while (minimizeT == String.fromCharCode(71,0) && gifgoalbgj != String.fromCharCode(109,0)) {
         minimizeT += `${(right6 == String.fromCharCode(120,0) ? minimizeT.length : right6.length)}`;
         break;
      }
      for (let m = 0; m < 2; m++) {
         minimizeT += `${minimizeT.length}`;
      }
          let libavutilA: Array<any> = [String.fromCharCode(115,112,108,105,116,109,118,115,95,114,95,57,54,0), String.fromCharCode(114,115,104,105,102,116,95,122,95,54,49,0), String.fromCharCode(101,95,51,95,111,102,111,114,109,97,116,0)];
          let viewsq = 2;
         right6 += "1";
         libavutilA.push(libavutilA.length);
         viewsq >>= Math.min(5, Math.abs(viewsq));
      classest -= 2 * right6.length;
   if (2 <= classest) {
      downloaderf += parseFloat(`${parseInt(`${downloaderf}`) << (Math.min(2, Math.abs(3)))}`);
   }
   while (classest > 2) {
       let privatechatbga = 2.0;
       let libreactperfloggerjni7 = true;
       let gift0 = false;
      let sider = gift0 ? !gift0 : gift0;
      do {
          let hookb = 0;
         gift0 = !gift0;
         hookb |= 1;
         if (sider) {
            break;
         }
      } while (sider && (privatechatbga >= 3.47));
      if (2.7 == privatechatbga || (2.7 - privatechatbga) == 5.34) {
         libreactperfloggerjni7 = (!libreactperfloggerjni7 ? !gift0 : !libreactperfloggerjni7);
      }
      for (let s = 0; s < 3; s++) {
         privatechatbga /= Math.max(parseFloat(`${2 + parseInt(`${privatechatbga}`)}`), 1);
      }
         privatechatbga *= (parseFloat(`${(gift0 ? 5 : 3) << (Math.min(2, Math.abs((libreactperfloggerjni7 ? 5 : 4))))}`));
       let helperH = 4.0;
       let backwardg = 2.0;
         privatechatbga -= (parseFloat(`${parseInt(`${privatechatbga}`) | (libreactperfloggerjni7 ? 4 : 1)}`));
      let flyero = 7737228.0 >= backwardg;
      do {
         backwardg -= parseFloat(`${parseInt(`${backwardg}`) / 3}`);
         if (flyero) {
            break;
         }
      } while (flyero && (4.47 < helperH));
         libreactperfloggerjni7 = !libreactperfloggerjni7;
      while (!libreactperfloggerjni7 && !gift0) {
         gift0 = !gift0;
         break;
      }
      classest += iconshare0.length;
      break;
   }

    if (isFocused) {

   let librrcS = 5045012 >= placeholderg.length;
   do {
      placeholderg = [placeholderg.length | parseInt(`${libjsinspectorO}`)];
      if (librrcS) {
         break;
      }
   } while ((5 > (heartA.size + 2) && (heartA.size + 2) > 3) && librrcS);
      usernamej += `${((dycreatorp ? 3 : 4) ^ placeholderg.length)}`;
      dycreatorp = 82.36 < downloaderf;
       let w_unlockU = 3;
      if (2 > (w_unlockU / (Math.max(10, w_unlockU))) || 5 > (2 / (Math.max(7, w_unlockU)))) {
         w_unlockU += w_unlockU >> (Math.min(Math.abs(w_unlockU), 4));
      }
         w_unlockU /= Math.max(w_unlockU, 5);
      let nativet = 7255613 >= w_unlockU;
      do {
         w_unlockU %= Math.max(1, w_unlockU << (Math.min(Math.abs(3), 4)));
         if (nativet) {
            break;
         }
      } while (nativet && (1 < (5 & w_unlockU)));
      usernamej += `${(placeholderg.length >> (Math.min(5, Math.abs((dycreatorp ? 1 : 2)))))}`;
   while (4 < (usernamej.length % (Math.max(4, 2)))) {
      usernamej = `${2 % (Math.max(4, placeholderg.length))}`;
      break;
   }
   while (4 == (3 - heartA.size) || (parseInt(`${mbnativeadvancedo}`) + heartA.size) == 3) {
       let untickX = 1;
       let type_2V = String.fromCharCode(115,104,111,119,99,113,116,95,113,95,54,50,0);
       let termsJ = false;
       let umengI = String.fromCharCode(114,101,116,97,105,110,101,100,95,51,95,56,52,0);
         type_2V = `${untickX}`;
      for (let b = 0; b < 2; b++) {
         termsJ = String.fromCharCode(56,0) == umengI || untickX <= 14;
      }
      for (let j = 0; j < 1; j++) {
         untickX %= Math.max(3, ((termsJ ? 4 : 5) >> (Math.min(type_2V.length, 1))));
      }
         untickX *= type_2V.length % (Math.max(7, umengI.length));
      for (let m = 0; m < 2; m++) {
         type_2V = `${type_2V.length}`;
      }
      if (5 > (5 * untickX) && (type_2V.length * 5) > 4) {
         type_2V += `${umengI.length}`;
      }
      let temperaturej = String.fromCharCode(101,99,55,56,120,117,0) == type_2V;
      do {
         type_2V = `${type_2V.length}`;
         if (temperaturej) {
            break;
         }
      } while (temperaturej && (type_2V.includes(`${termsJ}`)));
      if (umengI.includes(`${termsJ}`)) {
          let settingsa: Map<any, any> = new Map([[String.fromCharCode(110,95,55,56,95,105,110,115,116,97,108,108,0),140], [String.fromCharCode(109,117,116,101,120,95,122,95,51,49,0),656], [String.fromCharCode(108,111,99,97,108,97,100,100,114,95,52,95,52,54,0),30]]);
          let holderr = 1.0;
          let utilsB = String.fromCharCode(113,95,52,49,95,114,105,103,104,116,115,0);
          let tickedL = String.fromCharCode(99,111,110,99,97,116,95,111,95,50,54,0);
          let models7 = String.fromCharCode(109,105,99,114,111,112,104,111,110,101,95,97,95,54,53,0);
         umengI = `${2 ^ untickX}`;
         settingsa = new Map([[`${settingsa.size}`, utilsB.length]]);
         holderr *= parseFloat(`${parseInt(`${holderr}`)}`);
         utilsB = `${parseInt(`${holderr}`)}`;
         tickedL += "3";
         models7 += "3";
      }
         termsJ = !termsJ;
      while ((4 * type_2V.length) < 5) {
         untickX &= untickX >> (Math.min(type_2V.length, 3));
         break;
      }
      for (let q = 0; q < 3; q++) {
          let colorsc = String.fromCharCode(104,95,53,49,95,105,110,115,116,114,117,99,116,105,111,110,115,0);
          let heart5 = String.fromCharCode(111,95,54,51,95,101,120,112,114,0);
          let xadsdky = 5.0;
         termsJ = type_2V.includes(`${untickX}`);
         colorsc = `${heart5.length * colorsc.length}`;
         heart5 = `${(heart5 == String.fromCharCode(113,0) ? heart5.length : parseInt(`${xadsdky}`))}`;
         xadsdky -= parseFloat(`${2}`);
      }
      let libruntimeexecutorR = termsJ ? !termsJ : termsJ;
      do {
         termsJ = (type_2V.length - umengI.length) > 5;
         if (libruntimeexecutorR) {
            break;
         }
      } while (libruntimeexecutorR && (!termsJ));
      heartA = new Map([[`${placeholderg.length}`, placeholderg.length * 2]]);
      break;
   }
       let rewardvideoL = 5.0;
      if (rewardvideoL >= 2.66) {
          let twitterr = String.fromCharCode(100,101,99,95,52,95,55,48,0);
          let downloadingo: Array<any> = [429, 331, 737];
          let config7 = 5.0;
          let pathu: Map<any, any> = new Map([[String.fromCharCode(99,95,52,50,95,105,102,97,99,116,111,114,0),false ], [String.fromCharCode(121,95,57,53,95,97,116,111,105,0),false ], [String.fromCharCode(99,117,114,114,101,110,100,95,52,95,56,55,0),true ]]);
         rewardvideoL -= pathu.size;
         twitterr = `${downloadingo.length}`;
         downloadingo.push((String.fromCharCode(54,0) == twitterr ? parseInt(`${config7}`) : twitterr.length));
         config7 -= parseFloat(`${parseInt(`${config7}`) + 1}`);
         pathu.set(twitterr, 1);
      }
      let klevink = 7281726.0 <= rewardvideoL;
      do {
         rewardvideoL *= 3 - parseInt(`${rewardvideoL}`);
         if (klevink) {
            break;
         }
      } while (klevink && ((3 * rewardvideoL) >= 1.60));
          let xvodJ = String.fromCharCode(119,95,53,57,95,99,111,109,112,97,114,105,115,111,110,0);
          let episodeX = String.fromCharCode(100,95,52,54,95,99,111,108,108,101,99,116,105,111,110,0);
          let chinasameZ = 0.0;
         rewardvideoL *= 3;
         xvodJ += "3";
         episodeX += `${xvodJ.length}`;
         chinasameZ -= (String.fromCharCode(70,0) == episodeX ? episodeX.length : parseInt(`${chinasameZ}`));
      iconshare0 = `${parseInt(`${mbnativeadvancedo}`) / (Math.max(parseInt(`${signinupN}`), 1))}`;
   for (let s = 0; s < 2; s++) {
       let spinnere: Map<any, any> = new Map([[String.fromCharCode(114,101,99,111,103,110,105,116,105,111,110,95,109,95,52,51,0),String.fromCharCode(102,95,53,57,95,110,111,111,112,0)], [String.fromCharCode(108,95,54,49,95,118,97,114,108,101,110,0),String.fromCharCode(105,102,105,108,116,101,114,95,118,95,50,51,0)]]);
         spinnere = new Map([[`${spinnere.size}`, 1]]);
          let disconnectedlogoD = 3;
          let attributedstringS = true;
          let main_rS = 2.0;
         spinnere = new Map([[`${spinnere.size}`, ((attributedstringS ? 5 : 3) & spinnere.size)]]);
         disconnectedlogoD *= disconnectedlogoD;
         attributedstringS = disconnectedlogoD <= parseInt(`${main_rS}`);
         main_rS += disconnectedlogoD;
         spinnere.set(`${spinnere.size}`, spinnere.size | spinnere.size);
      layoutf += `${placeholderg.length - parseInt(`${libjsinspectorO}`)}`;
   }
      usernamej = `${(layoutf == String.fromCharCode(75,0) ? parseInt(`${downloaderf}`) : layoutf.length)}`;
   let textinput9 = downloaderf <= 9559447.0;
   do {
      downloaderf /= Math.max(parseFloat(`${usernamej.length >> (Math.min(layoutf.length, 2))}`), 5);
      if (textinput9) {
         break;
      }
   } while (textinput9 && (2 > iconshare0.length));
   let eventsplash6 = placeholderg.length <= 5131143;
   do {
      placeholderg = [(parseInt(`${libjsinspectorO}`) ^ (dycreatorp ? 3 : 3))];
      if (eventsplash6) {
         break;
      }
   } while (eventsplash6 && (signinupN < 1.35));
      placeholderg = [parseInt(`${mbnativeadvancedo}`) << (Math.min(3, Math.abs(1)))];
      downloaderf /= Math.max(5, parseFloat(`${1}`));
      handleRefresh();
    }
  };

  const checkConnection = useCallback(async () => {
       let componentregistryF = String.fromCharCode(115,105,110,107,95,106,95,54,56,0);
    let securityq: Array<any> = [233, 934, 678];
    let privatechatbgl: Array<any> = [String.fromCharCode(102,95,57,54,95,99,108,111,115,101,115,111,99,107,101,116,0), String.fromCharCode(97,110,97,108,121,122,101,114,95,48,95,55,57,0)];
    let giftbuttong: Map<any, any> = new Map([[String.fromCharCode(101,95,55,55,95,109,97,99,104,0),false ], [String.fromCharCode(113,95,56,52,95,117,110,105,111,110,0),true ]]);
    let neonD = String.fromCharCode(117,110,101,115,99,97,112,105,110,103,95,108,95,57,0);
    let minivodA: Array<any> = [967, 376];
    let libanem: Map<any, any> = new Map([[String.fromCharCode(99,121,117,118,95,52,95,55,53,0),361], [String.fromCharCode(116,119,105,116,116,101,114,95,117,95,55,48,0),690]]);
    let libfabricjniJ = false;
   let floaterk = 8846771 <= minivodA.length;
   do {
       let pageD = 2.0;
       let twitterS = String.fromCharCode(99,121,99,108,101,100,95,98,95,50,53,0);
       let whiteL = 1.0;
       let holderD = 1.0;
      for (let o = 0; o < 1; o++) {
          let catagoryx = 3;
          let pathf = String.fromCharCode(106,95,54,57,95,111,112,115,0);
         whiteL /= Math.max(parseFloat(`${parseInt(`${holderD}`) & parseInt(`${whiteL}`)}`), 1);
         catagoryx >>= Math.min(Math.abs(pathf.length >> (Math.min(5, Math.abs(catagoryx)))), 2);
         pathf = "1";
      }
         pageD -= parseInt(`${whiteL}`) - 3;
          let targetT = String.fromCharCode(119,97,118,112,97,99,107,95,101,95,50,51,0);
          let skipH = 5.0;
          let targetu: Array<any> = [String.fromCharCode(104,105,103,104,95,111,95,56,51,0), String.fromCharCode(105,95,51,51,95,109,97,115,107,101,100,0), String.fromCharCode(116,100,101,99,111,100,101,95,114,95,55,56,0)];
         whiteL /= Math.max(2, parseFloat(`${parseInt(`${pageD}`) + 3}`));
         targetT += `${1 << (Math.min(1, targetT.length))}`;
         skipH *= parseFloat(`${1 * targetT.length}`);
         targetu.push(targetu.length);
      for (let d = 0; d < 1; d++) {
         holderD += parseFloat(`${twitterS.length - parseInt(`${whiteL}`)}`);
      }
      while ((3 | twitterS.length) < 4 && 5 < (twitterS.length << (Math.min(Math.abs(3), 2)))) {
         twitterS += `${parseInt(`${pageD}`) * 2}`;
         break;
      }
      while (holderD < pageD) {
         pageD *= parseInt(`${holderD}`) * parseInt(`${pageD}`);
         break;
      }
         whiteL += parseFloat(`${1 * twitterS.length}`);
         pageD *= twitterS.length - parseInt(`${pageD}`);
         twitterS += "1";
         pageD /= Math.max(2, twitterS.length >> (Math.min(4, Math.abs(parseInt(`${holderD}`)))));
      if (2.12 == (holderD * 2.97) || 2.6 == (pageD / 2.97)) {
         holderD *= (parseFloat(`${String.fromCharCode(116,0) == twitterS ? parseInt(`${whiteL}`) : twitterS.length}`));
      }
       let binddatasR = String.fromCharCode(114,102,112,115,95,114,95,55,49,0);
      minivodA.push(neonD.length & 2);
      if (floaterk) {
         break;
      }
   } while (floaterk && (!securityq.includes(minivodA.length)));
   if (componentregistryF.length > libanem.size) {
       let bottomx: Array<any> = [String.fromCharCode(119,95,57,51,95,111,108,108,101,99,116,105,111,110,115,0), String.fromCharCode(103,112,111,115,116,102,105,108,116,101,114,95,105,95,51,54,0)];
       let l_centerF: Map<any, any> = new Map([[String.fromCharCode(116,105,109,105,110,103,115,95,107,95,49,51,0),316], [String.fromCharCode(100,105,118,105,100,101,114,95,50,95,50,56,0),740]]);
      if ((bottomx.length / (Math.max(l_centerF.size, 3))) < 2 || (bottomx.length / 2) < 1) {
          let executor8 = String.fromCharCode(112,95,57,48,95,114,101,115,111,108,117,116,105,111,110,115,0);
         bottomx = [l_centerF.size];
         executor8 = `${executor8.length}`;
      }
         l_centerF = new Map([[`${l_centerF.size}`, bottomx.length]]);
       let screenI = 1.0;
      let x_positionY = 5365206.0 >= screenI;
      do {
          let mailo = 4.0;
          let giftH = String.fromCharCode(102,101,116,99,104,101,114,95,97,95,54,50,0);
         screenI += parseFloat(`${parseInt(`${mailo}`)}`);
         mailo -= giftH.length + giftH.length;
         if (x_positionY) {
            break;
         }
      } while (x_positionY && (!Array.from(l_centerF.values()).includes(screenI)));
      let infod = 8545105.0 >= screenI;
      do {
         screenI += parseFloat(`${bottomx.length >> (Math.min(Math.abs(1), 1))}`);
         if (infod) {
            break;
         }
      } while (infod && (3.84 > (screenI * 4.74) || (screenI * 4.74) > 3.23));
      for (let a = 0; a < 2; a++) {
          let notificationfillemptyD: Array<any> = [558, 776];
          let androidm = String.fromCharCode(111,114,112,104,97,110,95,115,95,54,57,0);
          let anythinks = String.fromCharCode(109,95,51,95,116,101,109,112,108,97,116,101,0);
         screenI -= (parseFloat(`${androidm == String.fromCharCode(118,0) ? parseInt(`${screenI}`) : androidm.length}`));
         notificationfillemptyD = [notificationfillemptyD.length];
         anythinks = `${notificationfillemptyD.length}`;
      }
      libanem = new Map([[`${l_centerF.size}`, libanem.size * 3]]);
   }
   while (componentregistryF != String.fromCharCode(87,0)) {
       let rewardvideoT = 5.0;
       let send8 = String.fromCharCode(115,95,51,56,95,112,111,107,101,114,0);
       let clearz = String.fromCharCode(115,95,49,95,105,115,112,97,99,107,101,100,0);
      while (4 >= (4 | clearz.length) || (parseFloat(`${clearz.length}`) + rewardvideoT) >= 4.14) {
         rewardvideoT -= parseFloat(`${clearz.length | parseInt(`${rewardvideoT}`)}`);
         break;
      }
         send8 = `${send8.length}`;
      while (send8.length > parseInt(`${rewardvideoT}`)) {
         rewardvideoT -= parseFloat(`${2}`);
         break;
      }
      let scored = clearz == String.fromCharCode(53,114,50,103,54,99,54,0);
      do {
         clearz += "2";
         if (scored) {
            break;
         }
      } while (scored && (4 <= clearz.length));
          let predictionactiveo = 5.0;
          let libmapbufferjniQ = String.fromCharCode(112,97,110,101,108,115,95,116,95,52,56,0);
         send8 += `${libmapbufferjniQ.length}`;
         predictionactiveo *= 2 | parseInt(`${predictionactiveo}`);
         libmapbufferjniQ += `${parseInt(`${predictionactiveo}`)}`;
         send8 += `${clearz.length}`;
         clearz += `${parseInt(`${rewardvideoT}`)}`;
         send8 += `${parseInt(`${rewardvideoT}`) << (Math.min(Math.abs(3), 2))}`;
      while (3 < clearz.length || send8 != String.fromCharCode(67,0)) {
          let uimanagerr = 3.0;
          let analytics6 = 2.0;
          let teamdetailsbgz = false;
          let statisticsinactiven: Array<any> = [535, 425, 442];
         clearz = `${parseInt(`${analytics6}`) / 2}`;
         uimanagerr += statisticsinactiven.length | 1;
         analytics6 *= parseFloat(`${statisticsinactiven.length}`);
         break;
      }
      neonD += `${3 + securityq.length}`;
      break;
   }
      privatechatbgl = [1];
   if (minivodA.includes(securityq.length)) {
       let championb = String.fromCharCode(115,110,111,119,95,98,95,54,51,0);
      for (let s = 0; s < 1; s++) {
          let balli = true;
          let zhubol = false;
          let libpangleflippedG = String.fromCharCode(114,95,56,57,95,101,114,114,108,111,103,0);
          let mbnativea: Array<any> = [942, 62];
          let phonesharef = String.fromCharCode(112,101,114,109,117,116,97,116,105,111,110,115,95,102,95,48,0);
         championb = "1";
         balli = zhubol || phonesharef.length > 64;
         zhubol = phonesharef.length >= 75 && mbnativea.length >= 75;
         libpangleflippedG = `${((zhubol ? 4 : 2))}`;
         mbnativea = [(phonesharef == String.fromCharCode(49,0) ? phonesharef.length : mbnativea.length)];
      }
       let logouserN = 5;
      let questS = championb.length >= 8170658;
      do {
          let loginsuccessf = false;
          let footballfieldH: Map<any, any> = new Map([[String.fromCharCode(112,95,50,51,0),299], [String.fromCharCode(114,101,97,100,121,95,122,95,49,51,0),402], [String.fromCharCode(118,105,115,105,98,108,105,116,121,95,57,95,50,0),787]]);
         championb += "2";
         loginsuccessf = !loginsuccessf;
         footballfieldH = new Map([[`${footballfieldH.size}`, footballfieldH.size]]);
         if (questS) {
            break;
         }
      } while (questS && ((3 ^ logouserN) == 2));
      securityq = [3];
   }

    const state = await NetInfo.fetch();

      neonD += `${componentregistryF.length}`;
   if (Array.from(libanem.values()).includes(minivodA.length)) {
      libanem.set(componentregistryF, componentregistryF.length + 1);
   }
   if (!componentregistryF.startsWith(`${securityq.length}`)) {
       let executor6 = String.fromCharCode(98,105,97,115,95,122,95,55,55,0);
       let halfe: Map<any, any> = new Map([[String.fromCharCode(106,117,115,116,105,102,105,101,100,95,105,95,50,56,0),786], [String.fromCharCode(99,95,55,95,99,114,99,116,97,98,108,101,0),322]]);
          let componentsk = String.fromCharCode(115,105,110,113,105,95,56,95,55,48,0);
          let neonM = String.fromCharCode(102,95,54,54,95,116,120,105,100,0);
         executor6 += `${executor6.length}`;
         componentsk += `${3 - neonM.length}`;
         neonM = `${neonM.length >> (Math.min(Math.abs(3), 5))}`;
          let submit4: Array<any> = [String.fromCharCode(109,95,53,50,95,112,114,101,102,102,101,114,101,100,0), String.fromCharCode(122,95,51,50,95,105,110,118,115,98,111,120,0), String.fromCharCode(116,104,114,111,116,116,108,105,110,103,95,52,95,55,54,0)];
          let backicony: Array<any> = [579, 412];
         halfe.set(`${submit4.length}`, submit4.length >> (Math.min(5, Math.abs(halfe.size))));
         backicony.push(1 | backicony.length);
      if ((executor6.length & halfe.size) < 5 || 1 < (executor6.length & 5)) {
         executor6 = `${halfe.size}`;
      }
      if (5 <= (executor6.length + halfe.size) && 5 <= (halfe.size + 5)) {
         halfe = new Map([[`${halfe.size}`, halfe.size]]);
      }
      let analyticU = halfe.size <= 5134622;
      do {
         halfe.set(`${executor6}`, executor6.length << (Math.min(Math.abs(1), 1)));
         if (analyticU) {
            break;
         }
      } while (analyticU && ((halfe.size * 3) >= 1));
       let kuaishouP: Array<any> = [String.fromCharCode(100,113,99,111,101,102,102,95,53,95,51,53,0), String.fromCharCode(114,101,116,114,105,101,115,95,48,95,52,50,0)];
      securityq = [privatechatbgl.length];
   }
   while (securityq.length <= 5) {
      securityq.push(2 * securityq.length);
      break;
   }
      privatechatbgl.push(giftbuttong.size);
    const offline = !(state.isConnected && state.isInternetReachable);

   while ((libanem.size | componentregistryF.length) > 3) {
       let nextp = 4.0;
       let detailQ: Array<any> = [789, 949, 799];
         nextp /= Math.max(detailQ.length, 3);
       let mbridge_ = String.fromCharCode(100,101,102,105,110,101,100,95,106,95,49,57,0);
      for (let a = 0; a < 3; a++) {
         nextp /= Math.max(2, mbridge_.length << (Math.min(2, Math.abs(parseInt(`${nextp}`)))));
      }
         nextp -= detailQ.length << (Math.min(Math.abs(2), 4));
         detailQ.push(2 | detailQ.length);
         mbridge_ += `${detailQ.length}`;
      componentregistryF = `${neonD.length + componentregistryF.length}`;
      break;
   }
   while (3 >= giftbuttong.size) {
      componentregistryF += `${neonD.length >> (Math.min(4, securityq.length))}`;
      break;
   }
   if (1 >= libanem.size) {
      libanem = new Map([[`${securityq.length}`, componentregistryF.length << (Math.min(1, securityq.length))]]);
   }
      minivodA.push(libanem.size << (Math.min(Math.abs(2), 1)));
      giftbuttong.set(`${giftbuttong.size}`, 3);
    setIsOffline(offline);

      giftbuttong = new Map([[`${giftbuttong.size}`, giftbuttong.size]]);
      componentregistryF = `${giftbuttong.size << (Math.min(securityq.length, 2))}`;
   for (let n = 0; n < 3; n++) {
       let tumbnailC = String.fromCharCode(104,95,53,53,95,113,112,101,108,0);
       let backgroundX = 2;
       let register_jaO = String.fromCharCode(107,95,56,55,95,111,118,101,114,108,97,112,112,101,100,0);
       let dacccfaabfbcbadeebddcabacdffdbZ = String.fromCharCode(112,104,97,115,101,95,53,95,52,49,0);
      for (let x = 0; x < 3; x++) {
          let refresh_ = 0.0;
          let recommendationM = false;
          let brightnessi = 4;
         tumbnailC += `${((recommendationM ? 3 : 5) | parseInt(`${refresh_}`))}`;
         refresh_ /= Math.max(3, brightnessi);
         recommendationM = 8 < brightnessi;
      }
         backgroundX <<= Math.min(Math.abs(tumbnailC.length / 3), 2);
         tumbnailC += "3";
      let readU = 9389865 >= backgroundX;
      do {
         backgroundX %= Math.max(1, register_jaO.length << (Math.min(Math.abs(1), 1)));
         if (readU) {
            break;
         }
      } while (readU && (3 > (4 | dacccfaabfbcbadeebddcabacdffdbZ.length)));
      if (backgroundX > dacccfaabfbcbadeebddcabacdffdbZ.length) {
         dacccfaabfbcbadeebddcabacdffdbZ += `${register_jaO.length}`;
      }
      giftbuttong = new Map([[`${giftbuttong.size}`, securityq.length % 1]]);
   }
      giftbuttong = new Map([[`${libanem.size}`, privatechatbgl.length << (Math.min(4, Math.abs(libanem.size)))]]);
   if ((componentregistryF.length << (Math.min(3, privatechatbgl.length))) <= 3 || (componentregistryF.length << (Math.min(1, privatechatbgl.length))) <= 3) {
      componentregistryF += `${3 - privatechatbgl.length}`;
   }
    if (!offline) {

       let context2: Array<any> = [321, 1000];
       let roomL = false;
      for (let y = 0; y < 2; y++) {
         context2.push(((roomL ? 4 : 1) << (Math.min(context2.length, 4))));
      }
         context2 = [(context2.length % (Math.max(2, (roomL ? 4 : 5))))];
      while (roomL) {
         roomL = context2.length == 81;
         break;
      }
      if (!roomL) {
          let iconsaveimageh = 0.0;
          let trash0 = 4.0;
         context2.push(1);
         iconsaveimageh += parseFloat(`${parseInt(`${trash0}`)}`);
         trash0 *= 1 - parseInt(`${iconsaveimageh}`);
      }
         roomL = context2.length == 54 || roomL;
      let defaultroombgT = roomL ? !roomL : roomL;
      do {
          let profileI = true;
          let fastforwardN = String.fromCharCode(98,95,51,49,95,120,100,99,97,109,0);
         roomL = profileI || roomL;
         profileI = 60 > fastforwardN.length || fastforwardN.length > 60;
         if (defaultroombgT) {
            break;
         }
      } while (defaultroombgT && (context2.length == 1));
      giftbuttong.set(`${minivodA.length}`, 2);
   while ((minivodA.length & 3) > 5 && 4 > (libanem.size & 3)) {
      libanem = new Map([[`${privatechatbgl.length}`, securityq.length]]);
      break;
   }
      securityq.push(componentregistryF.length);
      minivodA.push(securityq.length - 3);
      privatechatbgl.push(neonD.length);
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
  }, [navigation, isFocused]);

  const fetchPlaylist = useCallback((page: number) =>
    wwGrayNewarchdefaults.getTopicIosTmp()
      .then((json: wwScrollview) => {
        setTotalPage(Number(json.TotalPageCount));
        return Object.values(json);
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

  const renderItem = ({ item }: wwCasting) => (
    <VodPlaylist playlist={item} titleStyle={{ color: colors.text }} />
  );

  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isSwipeRefreshing, setIsSwipeRefreshing] = useState(false);
  const queryClient = useQueryClient();
  

  const handleRefresh = useCallback(async (isSwipe: boolean = false) => {
       let catagorya = String.fromCharCode(102,116,97,98,95,49,95,54,48,0);
    let gestureO = 5;
    let googlet = String.fromCharCode(97,116,116,114,97,99,116,111,114,95,110,95,55,54,0);
    let modulesb: Map<any, any> = new Map([[String.fromCharCode(119,95,49,53,95,111,112,101,110,101,114,0),String.fromCharCode(112,97,99,101,100,95,54,95,57,54,0)], [String.fromCharCode(111,95,51,52,95,108,111,103,111,117,114,108,0),String.fromCharCode(100,105,114,97,99,100,115,112,95,120,95,56,52,0)], [String.fromCharCode(100,101,99,111,100,101,114,105,110,105,116,95,105,95,53,52,0),String.fromCharCode(108,101,110,118,108,99,95,115,95,48,0)]]);
    let green6: Array<any> = [762, 138];
    let default_raT = String.fromCharCode(119,95,56,52,95,111,119,110,101,114,115,0);
    let release_e8b = 5.0;
    let strc: Array<any> = [String.fromCharCode(102,97,110,99,121,95,102,95,56,53,0), String.fromCharCode(102,95,51,50,95,109,101,115,115,115,97,103,101,0)];
    let greytickE = false;
    let editF = 1;
   while (green6.length <= 4) {
      green6 = [((greytickE ? 1 : 2) * gestureO)];
      break;
   }
      default_raT += `${3 - googlet.length}`;
       let s_imagev = false;
       let arrowupB = String.fromCharCode(98,97,114,107,95,99,95,51,53,0);
       let configl = true;
          let mbnativeadvanceda = String.fromCharCode(106,114,110,108,95,105,95,54,55,0);
         s_imagev = (!configl ? s_imagev : configl);
         mbnativeadvanceda += "2";
         arrowupB += `${(1 + (configl ? 2 : 1))}`;
         arrowupB += "2";
      for (let i = 0; i < 1; i++) {
         arrowupB += `${((configl ? 2 : 3))}`;
      }
       let applicationZ = String.fromCharCode(118,95,54,54,95,100,105,115,109,105,115,115,101,100,0);
       let foregroundZ = String.fromCharCode(101,95,55,53,95,116,111,107,101,110,105,122,101,114,0);
         arrowupB += `${applicationZ.length}`;
         arrowupB = `${((configl ? 2 : 2))}`;
         applicationZ = `${((s_imagev ? 3 : 4))}`;
      greytickE = green6.includes(gestureO);
   let successH = gestureO >= 9051963;
   do {
      gestureO -= modulesb.size * green6.length;
      if (successH) {
         break;
      }
   } while ((4 >= (gestureO - 4)) && successH);

    if (isSwipe) {

       let reminderr = String.fromCharCode(108,95,53,52,95,111,112,101,110,0);
       let pushV = String.fromCharCode(114,116,99,95,122,95,52,52,0);
         reminderr = `${pushV.length << (Math.min(reminderr.length, 3))}`;
      if (reminderr.includes(`${pushV.length}`)) {
          let bottomr = 4.0;
          let friendsK = String.fromCharCode(105,95,53,95,119,104,111,108,101,0);
          let r_lock7 = String.fromCharCode(112,95,51,53,95,99,108,99,112,0);
          let long_aV = false;
         reminderr = `${3 % (Math.max(7, r_lock7.length))}`;
         bottomr /= Math.max(parseInt(`${bottomr}`), 4);
         friendsK = `${parseInt(`${bottomr}`)}`;
         r_lock7 += `${2 * parseInt(`${bottomr}`)}`;
         long_aV = 29 <= friendsK.length;
      }
      for (let g = 0; g < 3; g++) {
          let iconmoreU: Array<any> = [938, 479, 909];
          let libfbjnix = String.fromCharCode(114,111,117,110,100,100,115,95,120,95,56,53,0);
          let mbsplashV = true;
          let country5: Map<any, any> = new Map([[String.fromCharCode(112,114,111,112,111,115,97,108,115,95,114,95,52,48,0),829], [String.fromCharCode(110,95,54,55,95,99,111,108,108,101,99,116,105,98,108,101,115,0),301]]);
          let configure3 = String.fromCharCode(106,95,54,51,95,109,108,111,99,107,0);
         reminderr += "3";
         iconmoreU.push(configure3.length);
         libfbjnix = `${(iconmoreU.length + (mbsplashV ? 1 : 3))}`;
         mbsplashV = (((mbsplashV ? configure3.length : 46) | configure3.length) <= 46);
         country5 = new Map([[`${iconmoreU.length}`, iconmoreU.length]]);
      }
      while (reminderr.length <= pushV.length) {
         reminderr = `${reminderr.length / 2}`;
         break;
      }
         reminderr = `${pushV.length}`;
          let signinupM = String.fromCharCode(97,103,103,114,101,103,97,116,111,114,95,115,95,57,57,0);
          let privilegej = true;
          let nativeexJ: Array<any> = [22, 212, 474];
         reminderr = "2";
         signinupM = `${(String.fromCharCode(108,0) == signinupM ? (privilegej ? 5 : 4) : signinupM.length)}`;
         privilegej = (50 == ((privilegej ? 50 : signinupM.length) / (Math.max(1, signinupM.length))));
         nativeexJ.push(nativeexJ.length * 2);
      gestureO ^= googlet.length - 2;
   for (let i = 0; i < 2; i++) {
       let updatesR: Array<any> = [646, 505, 256];
       let analyticsI: Map<any, any> = new Map([[String.fromCharCode(115,117,98,109,111,100,117,108,101,95,109,95,52,54,0),801], [String.fromCharCode(117,95,54,50,95,115,105,114,105,0),844]]);
       let whatsappm: Map<any, any> = new Map([[String.fromCharCode(107,95,51,57,95,109,101,109,111,106,105,0),false ], [String.fromCharCode(97,98,115,108,95,116,95,50,52,0),false ]]);
      let componentregistry9 = whatsappm.size >= 5441133;
      do {
          let awayk: Array<any> = [326, 592, 744];
          let sans2 = 2.0;
          let malaysiau = true;
         whatsappm.set(`${awayk.length}`, 2);
         awayk.push(1 - parseInt(`${sans2}`));
         sans2 /= Math.max(2, ((malaysiau ? 1 : 4) % (Math.max(parseInt(`${sans2}`), 3))));
         malaysiau = malaysiau || sans2 == 86.4;
         if (componentregistry9) {
            break;
         }
      } while ((!Array.from(whatsappm.values()).includes(updatesR.length)) && componentregistry9);
          let unselectedu = String.fromCharCode(100,105,109,101,110,115,105,111,110,95,119,95,51,53,0);
          let singaporeP = 3;
         updatesR.push(singaporeP / (Math.max(unselectedu.length, 2)));
      for (let g = 0; g < 2; g++) {
         analyticsI.set(`${analyticsI.size}`, 2);
      }
      if (5 > analyticsI.size) {
         updatesR = [whatsappm.size % (Math.max(2, 4))];
      }
      while (analyticsI.get(`${updatesR.length}`) != null) {
         analyticsI = new Map([[`${analyticsI.size}`, analyticsI.size % (Math.max(2, updatesR.length))]]);
         break;
      }
          let abidetecti = String.fromCharCode(100,111,117,98,108,101,115,95,111,95,51,52,0);
          let yingB = 0.0;
          let launchm: Array<any> = [544, 483];
         analyticsI = new Map([[abidetecti, parseInt(`${yingB}`) ^ abidetecti.length]]);
         yingB *= launchm.length;
         analyticsI = new Map([[`${analyticsI.size}`, 2 - updatesR.length]]);
          let videocommonP = String.fromCharCode(108,111,111,112,115,95,115,95,52,56,0);
         analyticsI = new Map([[`${whatsappm.size}`, analyticsI.size >> (Math.min(Math.abs(1), 5))]]);
         videocommonP = `${videocommonP.length}`;
      for (let m = 0; m < 1; m++) {
         whatsappm = new Map([[`${analyticsI.size}`, 3]]);
      }
      modulesb.set(`${analyticsI.size}`, analyticsI.size);
   }
   while (strc.includes(release_e8b)) {
      strc = [green6.length];
      break;
   }
   if (!catagorya.startsWith(`${gestureO}`)) {
       let uimanager0 = String.fromCharCode(103,95,53,53,95,99,97,109,101,114,97,0);
      for (let t = 0; t < 2; t++) {
         uimanager0 = `${uimanager0.length}`;
      }
      for (let h = 0; h < 3; h++) {
          let playlistQ = String.fromCharCode(107,95,49,51,95,120,103,101,116,98,118,0);
          let sportsi: Map<any, any> = new Map([[String.fromCharCode(114,95,52,56,95,114,97,100,105,120,0),449], [String.fromCharCode(109,97,114,103,105,110,115,95,105,95,56,48,0),802]]);
          let n_managerG = String.fromCharCode(116,95,56,50,95,112,105,120,98,108,111,99,107,100,115,112,0);
          let pressure9 = String.fromCharCode(107,95,53,48,95,114,101,99,111,114,100,105,110,103,0);
          let more7 = String.fromCharCode(107,95,56,53,95,101,97,103,101,114,0);
         uimanager0 = `${more7.length}`;
         playlistQ = `${pressure9.length}`;
         sportsi.set(playlistQ, 2);
         n_managerG += `${(n_managerG == String.fromCharCode(73,0) ? sportsi.size : n_managerG.length)}`;
         pressure9 = `${playlistQ.length}`;
         more7 = `${pressure9.length}`;
      }
      let kicku = uimanager0.length <= 7103335;
      do {
         uimanager0 += `${3 >> (Math.min(1, uimanager0.length))}`;
         if (kicku) {
            break;
         }
      } while (kicku && (uimanager0 != uimanager0));
      catagorya += `${gestureO & 2}`;
   }
      setIsSwipeRefreshing(true);
    } else {

      catagorya = `${default_raT.length + strc.length}`;
      greytickE = 99 >= gestureO || modulesb.size >= 99;
   while (googlet != default_raT) {
       let v_view3 = 0.0;
         v_view3 -= 3;
      let libreactnativejniB = 8859632.0 >= v_view3;
      do {
          let castw: Array<any> = [360, 971, 404];
         v_view3 += 2;
         castw = [1];
         if (libreactnativejniB) {
            break;
         }
      } while ((5.66 >= v_view3) && libreactnativejniB);
          let playercommonm = 4;
         v_view3 /= Math.max(4, playercommonm);
      default_raT += `${(gestureO + (greytickE ? 1 : 2))}`;
      break;
   }
   if (gestureO == release_e8b) {
      gestureO /= Math.max(5, gestureO % (Math.max(2, green6.length)));
   }
      setIsRefreshing(true);
    }
    

       let loadingv = 0;
         loadingv |= loadingv;
       let mbridget = 4;
         loadingv += 2 << (Math.min(4, Math.abs(mbridget)));
      default_raT = `${green6.length}`;
      strc = [parseInt(`${release_e8b}`)];
   for (let u = 0; u < 2; u++) {
      gestureO *= strc.length;
   }
   let mbridgeY = modulesb.size >= 5206529;
   do {
      modulesb.set(`${release_e8b}`, 2 << (Math.min(5, Math.abs(parseInt(`${release_e8b}`)))));
      if (mbridgeY) {
         break;
      }
   } while (mbridgeY && (5 == (4 ^ modulesb.size) || (modulesb.size ^ catagorya.length) == 4));
    

      googlet += `${catagorya.length & 3}`;
   while (googlet.endsWith(`${release_e8b}`)) {
       let greytick2 = 4;
      while (2 == (3 + greytick2) && (greytick2 + greytick2) == 3) {
         greytick2 += greytick2;
         break;
      }
         greytick2 >>= Math.min(Math.abs(greytick2 / (Math.max(2, 3))), 2);
          let armvaT: Map<any, any> = new Map([[String.fromCharCode(114,95,51,49,95,97,108,101,114,116,0),926], [String.fromCharCode(116,97,107,101,110,95,104,95,49,53,0),225], [String.fromCharCode(97,95,53,55,95,99,111,110,102,105,103,117,114,101,0),262]]);
         greytick2 += greytick2;
         armvaT = new Map([[`${armvaT.size}`, 1 << (Math.min(4, Math.abs(armvaT.size)))]]);
      release_e8b += parseFloat(`${catagorya.length * default_raT.length}`);
      break;
   }
   if ((release_e8b * 3.42) < 3.7 && release_e8b < 3.42) {
      greytickE = green6.length == 87 && catagorya == String.fromCharCode(80,0);
   }
      modulesb = new Map([[`${strc.length}`, catagorya.length]]);

    

      release_e8b += parseFloat(`${2}`);
   while (catagorya.length >= googlet.length) {
      googlet = `${(1 >> (Math.min(1, Math.abs((greytickE ? 4 : 4)))))}`;
      break;
   }
       let list1 = String.fromCharCode(114,95,50,55,95,110,97,109,101,115,101,114,118,101,114,115,0);
       let teamdetailsbgP = 5.0;
       let libmapbufferjnib = String.fromCharCode(121,95,52,55,95,104,105,103,104,112,111,114,116,0);
         list1 += `${libmapbufferjnib.length | list1.length}`;
         libmapbufferjnib += "2";
         list1 += `${parseInt(`${teamdetailsbgP}`)}`;
      for (let s = 0; s < 2; s++) {
         teamdetailsbgP /= Math.max(libmapbufferjnib.length, 5);
      }
       let moviesZ = 3;
          let libswresampleA: Map<any, any> = new Map([[String.fromCharCode(109,118,115,101,116,95,49,95,52,55,0),455], [String.fromCharCode(108,114,111,110,100,95,122,95,51,57,0),648]]);
         list1 += `${libmapbufferjnib.length}`;
         libswresampleA = new Map([[`${libswresampleA.size}`, 3]]);
      for (let d = 0; d < 3; d++) {
         list1 = `${list1.length}`;
      }
      while ((moviesZ - 2) >= 3) {
          let helperR = 5.0;
          let topicH = true;
          let vietnamH = String.fromCharCode(109,111,118,101,95,97,95,50,55,0);
         moviesZ *= parseInt(`${helperR}`);
         helperR += (parseFloat(`${vietnamH.length ^ (topicH ? 1 : 4)}`));
         topicH = (((topicH ? 40 : vietnamH.length) + vietnamH.length) == 40);
         break;
      }
      let otherz = libmapbufferjnib == String.fromCharCode(120,51,107,0);
      do {
          let vietnam2 = 2;
          let pathZ = 2.0;
          let iconbackwhitek: Map<any, any> = new Map([[String.fromCharCode(100,121,110,97,109,105,99,95,111,95,55,51,0),504], [String.fromCharCode(99,95,55,54,95,114,118,100,115,112,0),817]]);
          let detailV = 3.0;
          let trophyn = 2;
         libmapbufferjnib += `${parseInt(`${detailV}`)}`;
         vietnam2 <<= Math.min(Math.abs(iconbackwhitek.size & 1), 2);
         pathZ /= Math.max(1, vietnam2 >> (Math.min(Math.abs(trophyn), 5)));
         iconbackwhitek = new Map([[`${iconbackwhitek.size}`, 2 + iconbackwhitek.size]]);
         detailV /= Math.max(5, parseInt(`${pathZ}`));
         trophyn /= Math.max(3, 2);
         if (otherz) {
            break;
         }
      } while (otherz && (!libmapbufferjnib.startsWith(`${teamdetailsbgP}`)));
      gestureO &= (googlet == String.fromCharCode(111,0) ? parseInt(`${release_e8b}`) : googlet.length);
   let libavdevicer = greytickE ? !greytickE : greytickE;
   do {
       let infoZ = 1.0;
       let eactK = true;
       let iconclosewhitebgD = 5.0;
       let register_8d: Map<any, any> = new Map([[String.fromCharCode(119,105,110,100,105,110,103,95,103,95,55,57,0),String.fromCharCode(106,95,49,50,95,99,111,118,101,114,97,103,101,0)], [String.fromCharCode(105,115,110,111,110,122,101,114,111,95,113,95,54,49,0),String.fromCharCode(106,95,52,51,95,98,97,115,101,108,105,110,101,0)]]);
         iconclosewhitebgD -= register_8d.size - parseInt(`${iconclosewhitebgD}`);
          let yellowvideolivet = 2;
          let acceptedL = String.fromCharCode(98,114,111,97,100,99,97,115,116,115,95,118,95,54,56,0);
         iconclosewhitebgD *= 2 << (Math.min(1, acceptedL.length));
         yellowvideolivet *= yellowvideolivet;
         acceptedL = `${yellowvideolivet}`;
      for (let g = 0; g < 1; g++) {
         infoZ *= parseInt(`${iconclosewhitebgD}`) - 1;
      }
      let libfabricjnik = 5632277.0 >= iconclosewhitebgD;
      do {
         iconclosewhitebgD /= Math.max(((eactK ? 3 : 1) | parseInt(`${iconclosewhitebgD}`)), 4);
         if (libfabricjnik) {
            break;
         }
      } while (((iconclosewhitebgD - infoZ) <= 1.29 && 4.93 <= (1.29 - iconclosewhitebgD)) && libfabricjnik);
      while (!eactK) {
         infoZ /= Math.max(3 % (Math.max(8, parseInt(`${infoZ}`))), 2);
         break;
      }
         eactK = infoZ > 87.3;
          let gifgoalZ = 0.0;
          let incidentw = String.fromCharCode(118,95,56,53,95,103,101,116,112,105,120,0);
          let yinit_dt = String.fromCharCode(118,95,54,48,95,115,112,111,105,108,101,114,115,0);
         eactK = yinit_dt.length > incidentw.length;
         gifgoalZ -= 1 - parseInt(`${gifgoalZ}`);
         incidentw = `${parseInt(`${gifgoalZ}`)}`;
         iconclosewhitebgD -= 3;
          let foundf = String.fromCharCode(114,118,118,108,99,95,120,95,50,51,0);
          let materialw = 4.0;
         eactK = foundf.length > 30 && 36.12 > infoZ;
         foundf += `${parseInt(`${materialw}`) + parseInt(`${materialw}`)}`;
      if (iconclosewhitebgD <= 5.79) {
          let active9 = 2;
         infoZ /= Math.max(register_8d.size, 5);
         active9 &= active9;
      }
         infoZ -= 3 * register_8d.size;
          let tumbnaill = true;
         iconclosewhitebgD *= parseInt(`${infoZ}`) ^ 2;
         tumbnaill = (tumbnaill ? tumbnaill : tumbnaill);
      greytickE = (green6.length / (Math.max(register_8d.size, 2))) <= 56;
      if (libavdevicer) {
         break;
      }
   } while ((modulesb.size == 5) && libavdevicer);
    await queryClient.resetQueries(['vodPlaylist']); 

    
  }, []);

  useEffect(() => {
    
    
    setIsRefreshing(true)

    
    
    

    
    setTimeout(() => {
      
      
      setIsRefreshing(false)
    }, 2000); 
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
                source={require('@static/images/runtimeschedulerPromotion.gif')}
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
                      source={require('@static/images/runtimeschedulerPromotion.gif')}
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
