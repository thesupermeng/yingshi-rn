import React, { useCallback, useEffect, useState, memo } from 'react';
import { StyleSheet, View, Text, RefreshControl, FlatList } from 'react-native';
import { useQueryClient } from '@tanstack/react-query';
import ScreenContainer from '../../components/container/yys_matches';
import MainHeader from '../../components/header/yys_config_penaltygoal_header';
import { useFocusEffect, useTheme } from '@react-navigation/native';
import { useInfiniteQuery } from '@tanstack/react-query';
import { yysBellreminder, yysArrowup } from '@type';
import VodPlaylist from '../../components/playlist/yys_watchnowbg_interstitial';
import { BottomTabScreenProps, useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { API_DOMAIN } from '@utility';
import FastImage from "../../components/common/yys_alert_backwhite"
import { useIsFocused } from '@react-navigation/native';
import NoConnection from './../../components/common/yys_librrc_zhengpian';
import NetInfo, { NetInfoState } from '@react-native-community/netinfo';
import { yysDownloadingCombined } from '@redux';
import { yysIconclosewhiteBaiduads } from '@redux';
import { useAppSelector } from '@hooks';
import yys_giftbutton_footballtrophy from '../../../../Umeng/yys_giftbutton_footballtrophy';
import { yysSkip } from '@api';

type yysInternetAirbnbstarselected = {
  item: yysArrowup;
  index: number;
};

function Playlist({ navigation }: BottomTabScreenProps<any>) {
  
  const { textVariants, colors, spacing } = useTheme();
  const LIMIT_PER_PAGE = 10;
  // const [results, setResults] = useState<Array<yysArrowup>>([])
  const [totalPage, setTotalPage] = useState(0);

  const isFocused = useIsFocused();
  const [isOffline, setIsOffline] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const settingsReducer: yysDownloadingCombined = useAppSelector(
    ({ settingsReducer }: yysIconclosewhiteBaiduads) => settingsReducer
  );

  
  useFocusEffect(useCallback(() => {
    yys_giftbutton_footballtrophy.playlistViewsAnalytics();
  }, []));
  

  
  const handleTabPress = () => {
       let roomG: Array<any> = [513, 660, 944];
    let e_titlet = String.fromCharCode(100,111,119,110,103,114,97,100,101,0);
    let liveshareG = 1.0;
    let navigationP: Map<any, any> = new Map([[String.fromCharCode(100,101,115,116,0),998], [String.fromCharCode(114,101,115,117,108,116,105,110,103,0),232], [String.fromCharCode(108,111,103,100,98,0),0]]);
    let combinedh: Array<any> = [996, 796, 770];
    let orientationD = false;
    let refreshborderlessj: Map<any, any> = new Map([[String.fromCharCode(99,97,114,114,105,97,103,101,0),true ], [String.fromCharCode(101,108,101,109,101,110,116,119,105,115,101,0),true ]]);
    let static_cl = String.fromCharCode(108,97,116,101,110,99,121,0);
    let scorepopsoundG: Map<any, any> = new Map([[String.fromCharCode(115,95,52,53,95,111,118,101,114,102,108,111,119,0),864], [String.fromCharCode(105,115,109,101,109,115,101,116,0),207]]);
   let embedt = combinedh.length >= 6710477;
   do {
      combinedh = [3];
      if (embedt) {
         break;
      }
   } while ((1 < (3 * combinedh.length) && (combinedh.length * parseInt(`${liveshareG}`)) < 3) && embedt);
      refreshborderlessj = new Map([[`${roomG.length}`, combinedh.length]]);
      navigationP.set(`${orientationD}`, roomG.length);
   while (!orientationD && (refreshborderlessj.size + 3) <= 5) {
      refreshborderlessj.set(`${roomG.length}`, roomG.length);
      break;
   }
   if (4 > (refreshborderlessj.size - 5)) {
      orientationD = 69 >= navigationP.size;
   }
   for (let s = 0; s < 3; s++) {
      liveshareG *= e_titlet.length;
   }
   if (!e_titlet.includes(`${roomG.length}`)) {
      e_titlet = `${2 * e_titlet.length}`;
   }
      combinedh.push(1 << (Math.min(2, Math.abs(refreshborderlessj.size))));
      e_titlet = `${static_cl.length}`;
   for (let h = 0; h < 1; h++) {
       let whitebellE = String.fromCharCode(114,101,101,110,116,114,97,110,116,0);
       let watchv = String.fromCharCode(97,99,104,101,0);
          let colorsQ: Array<any> = [337, 562, 825];
          let hoverK: Map<any, any> = new Map([[String.fromCharCode(101,120,101,99,117,116,105,110,103,0),418], [String.fromCharCode(115,111,108,118,101,100,0),564]]);
         whitebellE = `${watchv.length}`;
         colorsQ = [hoverK.size];
         hoverK = new Map([[`${hoverK.size}`, hoverK.size]]);
      while (whitebellE.includes(`${watchv.length}`)) {
          let dropdown8 = String.fromCharCode(116,114,97,110,115,102,111,114,109,97,98,108,101,0);
          let mbbid9 = true;
         whitebellE = `${((mbbid9 ? 2 : 2))}`;
         dropdown8 = `${1 | dropdown8.length}`;
         mbbid9 = dropdown8.length <= 4 || dropdown8 == String.fromCharCode(114,0);
         break;
      }
          let privatechatbgU = String.fromCharCode(97,110,110,101,120,0);
         watchv = `${privatechatbgU.length}`;
          let moviesn = 2.0;
          let iconmore1 = String.fromCharCode(99,112,120,0);
         whitebellE += `${watchv.length * 2}`;
         moviesn *= parseFloat(`${iconmore1.length / (Math.max(10, parseInt(`${moviesn}`)))}`);
         iconmore1 += `${parseInt(`${moviesn}`) % (Math.max(3, 8))}`;
       let encryptorJ = false;
      while (!watchv.endsWith(`${encryptorJ}`)) {
          let area_: Map<any, any> = new Map([[String.fromCharCode(99,111,109,112,101,110,115,97,116,105,111,110,0),String.fromCharCode(117,110,105,116,116,101,115,116,0)], [String.fromCharCode(108,105,98,111,112,101,110,104,0),String.fromCharCode(112,117,115,104,98,97,99,107,0)]]);
          let floateri: Map<any, any> = new Map([[String.fromCharCode(103,110,117,116,108,115,0),29], [String.fromCharCode(99,112,117,105,110,102,111,0),186], [String.fromCharCode(99,114,121,112,116,0),29]]);
         encryptorJ = whitebellE == String.fromCharCode(98,0);
         area_ = new Map([[`${area_.size}`, floateri.size]]);
         floateri.set(`${area_.size}`, 1 | area_.size);
         break;
      }
      static_cl += `${whitebellE.length}`;
   }

    if (isFocused) {

       let mbridgeA = 0.0;
       let chatP: Array<any> = [723, 539, 351];
       let login2: Map<any, any> = new Map([[String.fromCharCode(114,101,115,111,108,118,101,100,0),261], [String.fromCharCode(100,97,112,112,0),917], [String.fromCharCode(97,99,116,117,97,108,0),358]]);
      let imagenomoredataH = chatP.length <= 7388518;
      do {
         chatP = [chatP.length % (Math.max(2, 6))];
         if (imagenomoredataH) {
            break;
         }
      } while ((5 >= (login2.size ^ chatP.length) || 4 >= (chatP.length ^ 5)) && imagenomoredataH);
      while (!Array.from(login2.keys()).includes(`${chatP.length}`)) {
         login2 = new Map([[`${login2.size}`, 2]]);
         break;
      }
          let theme6 = 2.0;
         mbridgeA -= parseInt(`${theme6}`) >> (Math.min(Math.abs(1), 4));
      while (4 >= (3 + login2.size) || (login2.size + 3) >= 3) {
         chatP = [parseInt(`${mbridgeA}`) ^ 1];
         break;
      }
       let baiduj = 2;
      while (2.41 <= (1.73 * mbridgeA) && 1.82 <= (mbridgeA * 1.73)) {
         chatP.push(login2.size);
         break;
      }
      let rewind4 = login2.size >= 8512418;
      do {
         login2.set(`${mbridgeA}`, parseInt(`${mbridgeA}`) / 3);
         if (rewind4) {
            break;
         }
      } while (rewind4 && (login2.size <= 1));
         mbridgeA -= parseInt(`${mbridgeA}`) & 2;
      for (let v = 0; v < 3; v++) {
          let assetsv = 0.0;
          let fieldX = 0;
          let defaultteamR = false;
         mbridgeA -= 1 + login2.size;
         assetsv -= 2 << (Math.min(Math.abs(fieldX), 5));
         fieldX /= Math.max(3, fieldX);
         defaultteamR = assetsv <= 37.58 || defaultteamR;
      }
      combinedh.push(static_cl.length);
   while ((4.1 + liveshareG) <= 4.54 || 4 <= (1 + parseInt(`${liveshareG}`))) {
       let bodan2 = String.fromCharCode(111,110,118,101,114,115,97,116,105,111,110,0);
          let gpayv = String.fromCharCode(98,97,99,107,103,114,111,117,110,100,105,110,103,0);
          let iconrefreshb: Map<any, any> = new Map([[String.fromCharCode(99,97,112,97,98,105,108,105,116,105,101,115,0),513], [String.fromCharCode(117,110,97,118,97,105,108,97,98,101,0),949], [String.fromCharCode(100,101,99,111,117,112,108,101,0),856]]);
         bodan2 = `${bodan2.length >> (Math.min(1, Math.abs(iconrefreshb.size)))}`;
         gpayv += `${gpayv.length ^ 2}`;
         iconrefreshb.set(gpayv, (gpayv == String.fromCharCode(112,0) ? gpayv.length : gpayv.length));
         bodan2 = `${bodan2.length ^ 2}`;
       let gradlewv: Array<any> = [113, 599, 962];
       let downloadingc: Array<any> = [564, 94, 393];
      liveshareG /= Math.max(5, e_titlet.length & 2);
      break;
   }
   if (parseInt(`${liveshareG}`) >= e_titlet.length) {
      liveshareG *= parseInt(`${liveshareG}`);
   }
      navigationP.set(`${liveshareG}`, parseInt(`${liveshareG}`) % 1);
   while ((5.31 * liveshareG) > 3.83 && 2.54 > (5.31 * liveshareG)) {
       let gradle6: Array<any> = [373, 436, 802];
       let toponR = String.fromCharCode(112,114,101,116,99,104,95,110,95,51,57,0);
      for (let j = 0; j < 3; j++) {
         gradle6 = [toponR.length % 1];
      }
      while (gradle6.length < toponR.length) {
         toponR += "1";
         break;
      }
          let animationQ = String.fromCharCode(117,110,114,101,108,105,97,98,108,101,0);
          let animationC = false;
         toponR = `${gradle6.length}`;
         animationQ = `${((animationC ? 2 : 3) << (Math.min(animationQ.length, 4)))}`;
         animationC = animationQ.length == 72;
      while ((gradle6.length | toponR.length) <= 2 && 2 <= (toponR.length | 2)) {
          let libavcodecy = String.fromCharCode(100,105,115,116,114,105,98,117,116,105,111,110,115,0);
         toponR = "3";
         libavcodecy += `${(String.fromCharCode(51,0) == libavcodecy ? libavcodecy.length : libavcodecy.length)}`;
         break;
      }
      while (toponR.includes(`${gradle6.length}`)) {
         toponR = `${(toponR == String.fromCharCode(102,0) ? toponR.length : gradle6.length)}`;
         break;
      }
         toponR += `${(toponR == String.fromCharCode(51,0) ? gradle6.length : toponR.length)}`;
      navigationP.set(`${liveshareG}`, 1);
      break;
   }
       let update_8vg = 2.0;
         update_8vg /= Math.max(parseInt(`${update_8vg}`) % (Math.max(parseInt(`${update_8vg}`), 1)), 4);
      if (5.93 <= update_8vg) {
         update_8vg *= parseInt(`${update_8vg}`) + 1;
      }
      while ((update_8vg - update_8vg) >= 2.6 || (update_8vg * 2.6) >= 3.0) {
         update_8vg += parseInt(`${update_8vg}`) / 3;
         break;
      }
      liveshareG *= static_cl.length / 2;
   while ((e_titlet.length / (Math.max(9, roomG.length))) > 5) {
       let disconnectedlogor = 1.0;
       let weiboF = 2;
       let libavformat7 = String.fromCharCode(97,118,105,97,108,97,98,108,101,0);
       let users = String.fromCharCode(97,108,105,103,110,109,101,110,116,0);
         weiboF >>= Math.min(4, Math.abs(2));
         libavformat7 += `${libavformat7.length - 1}`;
          let appsb = 0.0;
         weiboF += 3;
         appsb /= Math.max(parseInt(`${appsb}`) & 3, 1);
      let streamingX = String.fromCharCode(114,57,106,113,49,105,56,101,106,111,0) == libavformat7;
      do {
          let humidityr: Map<any, any> = new Map([[String.fromCharCode(105,100,99,116,114,111,119,0),String.fromCharCode(117,110,115,99,97,108,101,100,0)], [String.fromCharCode(114,101,103,101,116,0),String.fromCharCode(113,109,98,108,0)], [String.fromCharCode(100,101,118,112,111,108,108,0),String.fromCharCode(115,112,108,105,116,116,101,114,0)]]);
          let episodesl = String.fromCharCode(99,108,97,112,0);
         libavformat7 += `${(String.fromCharCode(83,0) == episodesl ? episodesl.length : humidityr.size)}`;
         if (streamingX) {
            break;
         }
      } while ((libavformat7 != String.fromCharCode(110,0) && users != String.fromCharCode(82,0)) && streamingX);
         disconnectedlogor *= 1 - users.length;
          let eighteenE = 5.0;
          let libavcodecN = String.fromCharCode(97,112,112,115,0);
         libavformat7 += `${libavformat7.length}`;
         eighteenE -= libavcodecN.length;
         libavcodecN = "3";
      let becomeU = 9305904 <= weiboF;
      do {
         weiboF >>= Math.min(4, Math.abs(users.length + libavformat7.length));
         if (becomeU) {
            break;
         }
      } while (((users.length << (Math.min(5, Math.abs(weiboF)))) < 4 || 4 < (users.length << (Math.min(2, Math.abs(weiboF))))) && becomeU);
      for (let q = 0; q < 3; q++) {
          let condenseda = String.fromCharCode(98,105,116,114,97,116,101,115,0);
         weiboF += condenseda.length;
      }
         libavformat7 = `${weiboF}`;
      for (let h = 0; h < 1; h++) {
         weiboF /= Math.max(weiboF & users.length, 5);
      }
      for (let e = 0; e < 1; e++) {
          let sound2 = String.fromCharCode(119,101,108,115,101,110,99,100,101,109,111,0);
          let vignetteD = 3;
          let team8 = String.fromCharCode(102,111,114,116,104,0);
         libavformat7 = `${parseInt(`${disconnectedlogor}`) >> (Math.min(Math.abs(1), 2))}`;
         sound2 += `${vignetteD >> (Math.min(Math.abs(1), 3))}`;
         vignetteD <<= Math.min(Math.abs(1 - sound2.length), 1);
         team8 += `${team8.length}`;
      }
          let hongkong9 = String.fromCharCode(119,101,98,109,105,100,115,0);
          let controlB = 2.0;
          let iconarrowrightwhiteJ: Map<any, any> = new Map([[String.fromCharCode(116,114,105,110,103,0),false ], [String.fromCharCode(112,111,115,116,114,101,113,117,101,115,116,0),false ], [String.fromCharCode(111,98,106,101,99,116,0),true ]]);
         libavformat7 = `${weiboF - 2}`;
         hongkong9 = `${iconarrowrightwhiteJ.size}`;
         controlB *= parseFloat(`${1}`);
         iconarrowrightwhiteJ.set(`${controlB}`, 1);
      roomG = [roomG.length];
      break;
   }
      combinedh = [roomG.length];
   if ((refreshborderlessj.size | navigationP.size) < 5 && (5 | navigationP.size) < 5) {
      refreshborderlessj.set(`${liveshareG}`, parseInt(`${liveshareG}`));
   }
   while (1 >= (5 - combinedh.length) || orientationD) {
      combinedh = [3];
      break;
   }
      handleRefresh();
    }
  };

  const checkConnection = useCallback(async () => {
       let redirectR = 0.0;
    let liveshareZ = false;
    let exampleimagen = String.fromCharCode(119,105,115,101,0);
    let target3: Map<any, any> = new Map([[String.fromCharCode(104,97,110,100,115,104,97,107,101,0),268], [String.fromCharCode(115,116,114,101,115,115,0),497]]);
    let becomes = 4.0;
    let stylesb = String.fromCharCode(100,101,97,108,108,111,99,97,116,105,111,110,0);
    let eventa = 5;
    let untickG = String.fromCharCode(104,99,104,114,111,109,97,0);
    let foregrounds = String.fromCharCode(121,117,108,101,0);
    let gesture2 = 3.0;
    let penaltyshootnogoalR: Array<any> = [223, 650];
    let humidityB: Map<any, any> = new Map([[String.fromCharCode(115,108,111,119,101,115,116,0),true ], [String.fromCharCode(98,105,103,110,117,109,0),true ]]);
    let reactnativeratingsY = 1.0;
      exampleimagen = `${(String.fromCharCode(71,0) == untickG ? parseInt(`${becomes}`) : untickG.length)}`;
      stylesb += `${eventa}`;
      foregrounds = `${parseInt(`${redirectR}`) % 1}`;
       let iconwechatN: Array<any> = [684, 862];
       let langkeyv = String.fromCharCode(112,97,103,101,105,110,0);
         iconwechatN = [langkeyv.length + 1];
         langkeyv = `${3 << (Math.min(3, iconwechatN.length))}`;
      if (4 >= (iconwechatN.length * langkeyv.length) && 4 >= (iconwechatN.length * langkeyv.length)) {
         iconwechatN = [iconwechatN.length];
      }
          let searchbarM = false;
         iconwechatN.push(langkeyv.length);
      if ((5 + langkeyv.length) == 4 || (iconwechatN.length + 5) == 1) {
          let imagewatchliveR = 4.0;
          let bggradient6 = String.fromCharCode(109,101,109,111,114,121,115,116,114,101,97,109,0);
          let blackN = String.fromCharCode(118,112,111,105,110,116,0);
          let iconarrowrightwhited = true;
          let mbsplashv = 0.0;
         langkeyv = "3";
         imagewatchliveR -= parseFloat(`${parseInt(`${mbsplashv}`) >> (Math.min(bggradient6.length, 3))}`);
         bggradient6 += `${bggradient6.length}`;
         blackN += "3";
         iconarrowrightwhited = imagewatchliveR <= parseFloat(`${bggradient6.length}`);
         mbsplashv /= Math.max(1, 2);
      }
       let moviesB = String.fromCharCode(99,111,114,114,101,99,116,105,111,110,0);
      eventa += 3;
      becomes *= parseFloat(`${untickG.length + exampleimagen.length}`);
      exampleimagen = "1";
   let left8 = 9861694 <= stylesb.length;
   do {
       let livenodatabgimgR = true;
       let iconbellU: Array<any> = [635, 581, 228];
       let rocketD: Array<any> = [971, 708];
          let sendz = String.fromCharCode(109,97,116,101,114,105,97,108,0);
          let pageZ = 2.0;
         iconbellU.push(((livenodatabgimgR ? 3 : 3) % (Math.max(9, sendz.length))));
         sendz += `${2 % (Math.max(parseInt(`${pageZ}`), 1))}`;
         pageZ *= parseFloat(`${parseInt(`${pageZ}`) / 3}`);
          let reminder_ = String.fromCharCode(100,111,116,115,0);
         rocketD = [reminder_.length];
         iconbellU.push(((livenodatabgimgR ? 4 : 2) | rocketD.length));
       let internetb = 4.0;
      for (let r = 0; r < 3; r++) {
          let defaultteam4 = String.fromCharCode(98,117,116,116,101,114,0);
          let imagenomoredatap = String.fromCharCode(112,97,116,104,109,116,117,0);
         livenodatabgimgR = 37.53 == internetb;
         defaultteam4 += `${defaultteam4.length + 3}`;
         imagenomoredatap = `${(String.fromCharCode(110,0) == defaultteam4 ? imagenomoredatap.length : defaultteam4.length)}`;
      }
      for (let u = 0; u < 3; u++) {
          let giftm = false;
          let scorea = 1;
          let unselected4 = String.fromCharCode(112,111,108,121,115,116,97,114,0);
          let gestureY: Array<any> = [339, 227];
          let mbbidn = 1;
         livenodatabgimgR = scorea < 57;
         giftm = !giftm;
         scorea |= (1 >> (Math.min(4, Math.abs((giftm ? 3 : 1)))));
         unselected4 = `${(1 + (giftm ? 1 : 4))}`;
         gestureY = [3];
         mbbidn <<= Math.min(Math.abs((unselected4 == String.fromCharCode(86,0) ? unselected4.length : (giftm ? 4 : 3))), 2);
      }
      if ((2.20 + internetb) >= 3.85) {
          let ajax9: Array<any> = [String.fromCharCode(104,97,97,114,0), String.fromCharCode(109,115,110,119,99,0), String.fromCharCode(98,111,111,116,115,116,114,97,112,0)];
          let iconarrowrightD: Array<any> = [String.fromCharCode(108,115,112,102,108,112,99,0), String.fromCharCode(97,103,103,114,101,103,97,116,101,0), String.fromCharCode(113,95,51,54,95,110,97,110,0)];
          let ready = 4.0;
         livenodatabgimgR = internetb < 46.41;
         ajax9.push(ajax9.length);
         iconarrowrightD.push(1 >> (Math.min(2, iconarrowrightD.length)));
         ready += iconarrowrightD.length | 2;
      }
      while (iconbellU.includes(rocketD.length)) {
         rocketD = [1 * rocketD.length];
         break;
      }
         livenodatabgimgR = (iconbellU.length * rocketD.length) < 13;
      stylesb = `${(rocketD.length - (liveshareZ ? 4 : 3))}`;
      if (left8) {
         break;
      }
   } while ((target3.size < 3) && left8);

    const state = await NetInfo.fetch();

       let countdownT: Array<any> = [643, 907, 556];
      while ((countdownT.length | countdownT.length) == 3 || (3 | countdownT.length) == 3) {
         countdownT = [countdownT.length];
         break;
      }
      for (let o = 0; o < 3; o++) {
         countdownT.push(countdownT.length / (Math.max(countdownT.length, 6)));
      }
         countdownT = [countdownT.length];
      stylesb += "3";
   while (Array.from(target3.values()).includes(becomes)) {
      becomes /= Math.max(4, parseFloat(`${1 & foregrounds.length}`));
      break;
   }
   while ((2 | exampleimagen.length) <= 3 || (exampleimagen.length | 2) <= 5) {
      target3 = new Map([[`${gesture2}`, eventa]]);
      break;
   }
       let profileframe2: Map<any, any> = new Map([[String.fromCharCode(111,112,116,105,111,110,0),String.fromCharCode(100,105,102,102,101,114,0)], [String.fromCharCode(100,109,97,99,0),String.fromCharCode(115,97,108,116,101,100,95,104,95,57,51,0)], [String.fromCharCode(114,101,97,99,116,105,111,110,0),String.fromCharCode(100,114,97,119,105,110,103,0)]]);
       let gpayD = 3.0;
       let libffmpegkitD = 4.0;
       let tramini2 = 4.0;
       let a_countH = true;
      for (let i = 0; i < 2; i++) {
         a_countH = 55.21 <= tramini2 && 55.21 <= libffmpegkitD;
      }
      while (profileframe2.size >= 1) {
          let mathA = 2.0;
          let tramini8 = String.fromCharCode(113,117,111,116,101,115,0);
          let giflivestreamingS = 0;
          let libfileR: Map<any, any> = new Map([[String.fromCharCode(112,114,101,118,111,117,115,0),554], [String.fromCharCode(99,105,114,99,108,101,115,0),447], [String.fromCharCode(99,114,111,115,115,102,97,100,105,110,103,0),69]]);
          let sheetb: Map<any, any> = new Map([[String.fromCharCode(112,101,114,99,101,110,116,97,103,101,0),40], [String.fromCharCode(116,114,97,110,115,97,99,116,105,111,110,115,0),265], [String.fromCharCode(106,95,53,57,95,115,101,113,0),521]]);
         a_countH = (profileframe2.size & giflivestreamingS) == 43;
         mathA *= tramini8.length;
         tramini8 = `${parseInt(`${mathA}`)}`;
         giflivestreamingS -= sheetb.size;
         libfileR = new Map([[`${libfileR.size}`, libfileR.size << (Math.min(Math.abs(2), 1))]]);
         sheetb.set(`${tramini8}`, sheetb.size ^ 1);
         break;
      }
         gpayD -= parseFloat(`${3}`);
      for (let q = 0; q < 3; q++) {
         tramini2 += 2;
      }
      becomes -= parseFloat(`${foregrounds.length}`);
   while (stylesb == foregrounds) {
      foregrounds += `${(String.fromCharCode(86,0) == untickG ? (liveshareZ ? 5 : 5) : untickG.length)}`;
      break;
   }
       let inactives = 0.0;
       let scorepopsoundp = 0;
       let hooksF = 1;
      if (4 == scorepopsoundp) {
         scorepopsoundp %= Math.max(1, parseInt(`${inactives}`) | 3);
      }
      if ((scorepopsoundp & 3) < 2) {
          let mbbanneru = 0;
         scorepopsoundp *= 1 % (Math.max(2, scorepopsoundp));
         mbbanneru <<= Math.min(4, Math.abs(mbbanneru % (Math.max(mbbanneru, 10))));
      }
      untickG = `${penaltyshootnogoalR.length}`;
      untickG += `${foregrounds.length}`;
    const offline = !(state.isConnected && state.isInternetReachable);

   while (2 < (target3.size / 1) || (becomes + 1.100) < 2.12) {
       let giftbutton7: Map<any, any> = new Map([[String.fromCharCode(97,99,111,109,112,114,101,115,115,111,114,0),String.fromCharCode(116,95,53,54,95,116,101,120,116,115,0)], [String.fromCharCode(116,121,112,0),String.fromCharCode(117,110,105,113,117,101,0)], [String.fromCharCode(116,111,107,101,110,100,0),String.fromCharCode(101,99,109,117,108,116,0)]]);
       let fillk = false;
       let basketballtrophyz = 3.0;
       let searchbarm = String.fromCharCode(108,103,111,114,97,110,100,0);
       let iconnointernetx = 1.0;
       let default_83: Map<any, any> = new Map([[String.fromCharCode(117,110,114,101,103,105,115,116,101,114,101,100,0),28], [String.fromCharCode(104,115,99,97,108,101,114,0),987], [String.fromCharCode(121,97,108,101,0),681]]);
       let dice2: Map<any, any> = new Map([[String.fromCharCode(97,97,99,112,115,121,0),930], [String.fromCharCode(118,115,105,110,107,0),471], [String.fromCharCode(115,97,108,116,0),617]]);
          let zoom4 = String.fromCharCode(97,110,111,110,121,109,111,117,115,0);
          let modityQ = String.fromCharCode(111,108,100,101,115,116,0);
         giftbutton7 = new Map([[`${giftbutton7.size}`, (2 | (fillk ? 4 : 4))]]);
         zoom4 += "3";
         modityQ += `${modityQ.length}`;
         searchbarm += `${parseInt(`${basketballtrophyz}`) ^ giftbutton7.size}`;
      for (let s = 0; s < 3; s++) {
         searchbarm = `${(parseInt(`${iconnointernetx}`) << (Math.min(1, Math.abs((fillk ? 4 : 3)))))}`;
      }
      let libfile8 = 6513681 >= giftbutton7.size;
      do {
         giftbutton7 = new Map([[`${iconnointernetx}`, 3]]);
         if (libfile8) {
            break;
         }
      } while (libfile8 && (!searchbarm.includes(`${giftbutton7.size}`)));
          let libruntimeexecutorn: Array<any> = [974, 133];
          let refresh9 = true;
          let awayt = 3.0;
         fillk = awayt >= 84.35;
         libruntimeexecutorn.push(libruntimeexecutorn.length);
         refresh9 = libruntimeexecutorn.length > 60;
         awayt -= libruntimeexecutorn.length;
       let auto_dK = 4.0;
      while (!fillk) {
          let activityo = String.fromCharCode(109,97,114,107,0);
          let anytimec: Array<any> = [822, 926];
          let nterstitiala = String.fromCharCode(114,97,110,103,101,0);
          let airbnbstari = 3.0;
         iconnointernetx /= Math.max(parseFloat(`${default_83.size}`), 5);
         activityo = `${2 << (Math.min(4, anytimec.length))}`;
         anytimec.push((nterstitiala == String.fromCharCode(78,0) ? anytimec.length : nterstitiala.length));
         airbnbstari -= 2 + nterstitiala.length;
         break;
      }
         fillk = dice2.size > 43 && default_83.size > 43;
       let rightD = false;
       let iconnointernetxN = true;
         basketballtrophyz += parseInt(`${basketballtrophyz}`) + searchbarm.length;
         rightD = dice2.size < 28;
         iconnointernetx += parseFloat(`${giftbutton7.size >> (Math.min(Math.abs(3), 5))}`);
      for (let n = 0; n < 3; n++) {
         dice2.set(searchbarm, (String.fromCharCode(79,0) == searchbarm ? searchbarm.length : default_83.size));
      }
         rightD = null == default_83.get(`${iconnointernetxN}`);
      becomes += (parseFloat(`${untickG == String.fromCharCode(102,0) ? untickG.length : giftbutton7.size}`));
      break;
   }
   while (3 <= (3 + eventa) && (3 + eventa) <= 2) {
      eventa -= (String.fromCharCode(106,0) == foregrounds ? foregrounds.length : parseInt(`${becomes}`));
      break;
   }
      target3 = new Map([[untickG, 3 | eventa]]);
   if (!Array.from(target3.values()).includes(gesture2)) {
      target3 = new Map([[`${humidityB.size}`, humidityB.size]]);
   }
       let matchQ = String.fromCharCode(104,113,112,101,108,0);
       let abidetectK = String.fromCharCode(110,95,55,50,95,119,105,114,101,108,101,115,115,0);
      for (let v = 0; v < 3; v++) {
         abidetectK += "1";
      }
          let iconschedulex = 5.0;
          let dragc = false;
          let penalty6: Map<any, any> = new Map([[String.fromCharCode(115,113,117,101,101,122,101,0),149], [String.fromCharCode(116,103,101,116,0),561]]);
         matchQ = "2";
         iconschedulex -= parseFloat(`${parseInt(`${iconschedulex}`) | 1}`);
         dragc = iconschedulex < 9.71;
         penalty6.set(`${iconschedulex}`, 3 ^ parseInt(`${iconschedulex}`));
         abidetectK = `${abidetectK.length - 3}`;
       let pressureu: Array<any> = [119, 293];
      for (let f = 0; f < 1; f++) {
          let shirtE: Map<any, any> = new Map([[String.fromCharCode(115,116,101,112,115,0),false ], [String.fromCharCode(97,114,98,105,116,101,114,0),false ]]);
         pressureu.push(shirtE.size / (Math.max(pressureu.length, 4)));
      }
          let fnewsshareZ: Map<any, any> = new Map([[String.fromCharCode(99,111,110,115,117,109,101,100,0),425], [String.fromCharCode(112,115,102,105,108,101,0),982], [String.fromCharCode(115,101,108,101,99,116,111,112,0),914]]);
          let gemfileJ: Map<any, any> = new Map([[String.fromCharCode(105,110,108,105,110,101,0),315], [String.fromCharCode(111,110,110,101,99,116,105,111,110,0),241]]);
         abidetectK += `${2 + fnewsshareZ.size}`;
         fnewsshareZ.set(`${gemfileJ.size}`, 1);
         gemfileJ.set(`${gemfileJ.size}`, 2 >> (Math.min(4, Math.abs(gemfileJ.size))));
      humidityB = new Map([[`${gesture2}`, ((liveshareZ ? 4 : 4) * parseInt(`${gesture2}`))]]);
       let injury4 = String.fromCharCode(112,115,100,115,112,0);
       let line8: Map<any, any> = new Map([[String.fromCharCode(100,99,97,101,110,99,0),String.fromCharCode(105,110,102,101,114,101,100,0)], [String.fromCharCode(114,101,99,111,110,0),String.fromCharCode(114,101,102,105,110,101,109,101,110,116,0)]]);
      if (!injury4.endsWith(`${line8.size}`)) {
         line8.set(injury4, 1);
      }
      for (let r = 0; r < 2; r++) {
          let privatechatbg6 = String.fromCharCode(105,110,118,101,114,118,97,108,0);
          let footballf = 5.0;
          let screen5: Array<any> = [String.fromCharCode(108,97,103,97,114,105,116,104,114,97,99,0), String.fromCharCode(105,110,116,101,114,97,116,105,111,110,0), String.fromCharCode(115,117,98,99,101,108,0)];
          let profileactiveC: Array<any> = [String.fromCharCode(99,99,105,116,116,0), String.fromCharCode(112,97,115,116,101,100,0), String.fromCharCode(98,108,111,99,107,100,99,0)];
         injury4 = `${screen5.length}`;
         privatechatbg6 = `${profileactiveC.length & 2}`;
         footballf -= (parseFloat(`${String.fromCharCode(65,0) == privatechatbg6 ? profileactiveC.length : privatechatbg6.length}`));
         screen5 = [parseInt(`${footballf}`) | privatechatbg6.length];
      }
      if (1 > (5 - injury4.length) && (injury4.length - 5) > 5) {
         line8.set(injury4, line8.size ^ 2);
      }
         line8 = new Map([[`${line8.size}`, 1 / (Math.max(5, line8.size))]]);
         line8.set(`${injury4}`, injury4.length);
         injury4 = "3";
      liveshareZ = parseFloat(`${exampleimagen.length}`) == gesture2;
   let tooltipsR = becomes >= 8362092.0;
   do {
      becomes -= parseFloat(`${parseInt(`${gesture2}`)}`);
      if (tooltipsR) {
         break;
      }
   } while ((2.97 > (1.15 + becomes) && 2.53 > (1.15 + becomes)) && tooltipsR);
    setIsOffline(offline);

       let libruntimeexecutorV = true;
       let mountingf = true;
          let inouttargetred9 = String.fromCharCode(115,117,98,115,116,114,0);
          let eventF: Map<any, any> = new Map([[String.fromCharCode(114,97,119,101,110,99,0),false ], [String.fromCharCode(99,111,108,111,110,115,0),true ], [String.fromCharCode(99,97,99,104,101,0),true ]]);
          let dragQ: Map<any, any> = new Map([[String.fromCharCode(109,101,108,116,0),988], [String.fromCharCode(116,101,116,114,97,104,101,100,114,97,108,0),550]]);
         mountingf = !inouttargetred9.startsWith(`${mountingf}`);
         inouttargetred9 += `${1 * eventF.size}`;
         eventF = new Map([[`${dragQ.size}`, 3 + eventF.size]]);
         dragQ.set(`${dragQ.size}`, dragQ.size & eventF.size);
         mountingf = libruntimeexecutorV;
          let plashL: Array<any> = [335, 179];
          let redgoalU = String.fromCharCode(118,111,105,112,0);
          let dependenciesG = String.fromCharCode(118,95,53,48,95,115,103,105,114,108,101,0);
         libruntimeexecutorV = redgoalU.length > plashL.length;
         plashL.push(dependenciesG.length + 3);
         redgoalU += `${(String.fromCharCode(116,0) == dependenciesG ? dependenciesG.length : dependenciesG.length)}`;
      while (!mountingf && !libruntimeexecutorV) {
         libruntimeexecutorV = mountingf;
         break;
      }
          let iconsetting5 = String.fromCharCode(97,108,97,119,0);
         mountingf = libruntimeexecutorV;
         iconsetting5 = `${iconsetting5.length}`;
      if (mountingf) {
         mountingf = !libruntimeexecutorV;
      }
      gesture2 *= parseFloat(`${eventa}`);
   for (let j = 0; j < 2; j++) {
      humidityB = new Map([[`${humidityB.size}`, 3 - target3.size]]);
   }
      penaltyshootnogoalR.push(parseInt(`${redirectR}`) - humidityB.size);
   if ((foregrounds.length - penaltyshootnogoalR.length) > 2 && 5 > (penaltyshootnogoalR.length - 2)) {
      penaltyshootnogoalR.push(((liveshareZ ? 3 : 1) % (Math.max(9, eventa))));
   }
   let ccdfbdabcabbbedb9 = foregrounds.length <= 5484565;
   do {
       let brightnessP = String.fromCharCode(97,110,116,105,97,108,105,97,115,0);
       let mapbufferJ = String.fromCharCode(115,112,101,99,105,102,105,101,114,0);
       let nativeG = String.fromCharCode(101,115,116,97,98,108,105,115,104,0);
       let long_nl = 2.0;
      for (let n = 0; n < 2; n++) {
         mapbufferJ += "1";
      }
          let fieldZ: Map<any, any> = new Map([[String.fromCharCode(115,121,110,116,104,101,115,105,122,101,114,0),610], [String.fromCharCode(115,117,98,99,111,110,116,101,110,116,115,0),261], [String.fromCharCode(115,104,111,117,108,100,0),38]]);
          let largesoundB = 0;
          let activen = 1.0;
         nativeG = `${largesoundB << (Math.min(Math.abs(parseInt(`${long_nl}`)), 2))}`;
         fieldZ = new Map([[`${fieldZ.size}`, fieldZ.size]]);
         largesoundB -= 1;
         activen /= Math.max(4, parseFloat(`${parseInt(`${activen}`) - fieldZ.size}`));
      for (let v = 0; v < 2; v++) {
          let favicony: Array<any> = [String.fromCharCode(114,101,119,114,105,116,101,114,0), String.fromCharCode(108,111,99,97,108,101,115,0), String.fromCharCode(114,101,102,108,101,99,116,0)];
         mapbufferJ = `${parseInt(`${long_nl}`)}`;
         favicony = [favicony.length & favicony.length];
      }
         mapbufferJ = `${2 - brightnessP.length}`;
         mapbufferJ += `${brightnessP.length}`;
         long_nl += parseFloat(`${parseInt(`${long_nl}`) + 2}`);
       let iconqqI = String.fromCharCode(118,100,112,97,117,0);
       let gestureK = String.fromCharCode(114,102,116,102,115,117,98,0);
      for (let h = 0; h < 2; h++) {
          let arrowselectdownS = true;
          let editY = String.fromCharCode(112,114,101,118,105,101,119,115,0);
          let arrowselectdownb: Map<any, any> = new Map([[String.fromCharCode(109,98,116,114,101,101,0),true ], [String.fromCharCode(101,120,105,115,116,115,0),false ], [String.fromCharCode(110,111,116,104,101,108,100,0),true ]]);
         iconqqI += "1";
         arrowselectdownS = 27 < arrowselectdownb.size && editY.length < 27;
         editY += `${((arrowselectdownS ? 4 : 3) & arrowselectdownb.size)}`;
      }
      let register_sJ = 6365813 <= iconqqI.length;
      do {
         iconqqI = `${(String.fromCharCode(86,0) == iconqqI ? parseInt(`${long_nl}`) : iconqqI.length)}`;
         if (register_sJ) {
            break;
         }
      } while ((iconqqI.length > nativeG.length) && register_sJ);
       let sansn = String.fromCharCode(98,105,110,100,101,114,0);
       let storen = String.fromCharCode(99,117,116,111,117,116,0);
         sansn += "2";
          let winda = 3.0;
          let inouttargetredo = String.fromCharCode(99,117,114,0);
         storen = `${(nativeG == String.fromCharCode(87,0) ? sansn.length : nativeG.length)}`;
         winda += parseFloat(`${1 >> (Math.min(4, inouttargetredo.length))}`);
         inouttargetredo = "1";
      foregrounds = `${2 % (Math.max(4, stylesb.length))}`;
      if (ccdfbdabcabbbedb9) {
         break;
      }
   } while (ccdfbdabcabbbedb9 && (4.72 > (becomes * 4.95) && 2 > (foregrounds.length + 5)));
       let libyogax = 5.0;
       let middleK: Map<any, any> = new Map([[String.fromCharCode(99,114,111,115,115,98,97,114,0),838], [String.fromCharCode(115,116,114,101,116,99,104,97,98,108,101,0),55]]);
          let whatsappO = String.fromCharCode(101,109,112,105,114,105,99,97,108,108,121,0);
         libyogax += parseInt(`${libyogax}`);
         whatsappO += `${whatsappO.length | whatsappO.length}`;
          let homea = 4.0;
          let langkeyt = String.fromCharCode(105,110,116,101,114,97,99,116,105,118,101,108,121,0);
         middleK.set(langkeyt, 2 | parseInt(`${libyogax}`));
         homea -= parseInt(`${homea}`) % (Math.max(parseInt(`${homea}`), 7));
         langkeyt = `${2 << (Math.min(Math.abs(parseInt(`${homea}`)), 2))}`;
         middleK.set(`${libyogax}`, middleK.size);
      for (let i = 0; i < 3; i++) {
         libyogax -= 3;
      }
         libyogax *= 2 << (Math.min(4, Math.abs(parseInt(`${libyogax}`))));
       let paths = String.fromCharCode(108,111,103,105,99,97,108,95,98,95,56,0);
       let plashU = String.fromCharCode(109,117,108,116,105,100,101,115,99,114,105,112,116,111,114,0);
      redirectR /= Math.max(2, parseInt(`${redirectR}`));
   let libruntimeexecutorj = liveshareZ ? !liveshareZ : liveshareZ;
   do {
      liveshareZ = penaltyshootnogoalR.length == 18;
      if (libruntimeexecutorj) {
         break;
      }
   } while (libruntimeexecutorj && (exampleimagen.endsWith(`${liveshareZ}`)));
    if (!offline) {

   for (let k = 0; k < 3; k++) {
      stylesb = `${exampleimagen.length >> (Math.min(Math.abs(1), 1))}`;
   }
       let defaultlogou = 4;
      let distl = 7614649 >= defaultlogou;
      do {
         defaultlogou <<= Math.min(Math.abs(defaultlogou << (Math.min(5, Math.abs(defaultlogou)))), 3);
         if (distl) {
            break;
         }
      } while (distl && ((4 + defaultlogou) > 5));
      while ((defaultlogou / (Math.max(5, defaultlogou))) <= 4 || 3 <= (4 / (Math.max(4, defaultlogou)))) {
          let libruntimeexecutoru = String.fromCharCode(115,105,110,113,98,0);
          let suggestionH = String.fromCharCode(115,95,54,55,95,105,110,100,101,110,116,0);
          let usernameT = String.fromCharCode(100,105,115,99,111,118,101,114,101,100,0);
         defaultlogou <<= Math.min(4, Math.abs(libruntimeexecutoru.length << (Math.min(suggestionH.length, 2))));
         libruntimeexecutoru += `${usernameT.length & 2}`;
         suggestionH += `${usernameT.length | usernameT.length}`;
         break;
      }
         defaultlogou &= defaultlogou;
      eventa %= Math.max(3, 3);
      reactnativeratingsY += stylesb.length & 2;
       let liblogger4 = String.fromCharCode(104,111,110,101,121,0);
       let referrer_ = true;
         liblogger4 += `${liblogger4.length}`;
      if (referrer_ || 1 == liblogger4.length) {
          let stationH = String.fromCharCode(112,101,114,109,101,97,116,101,0);
          let pathe: Array<any> = [714, 145, 456];
          let macau8 = String.fromCharCode(102,108,97,116,116,101,110,101,100,0);
          let emojiO = String.fromCharCode(110,101,120,116,104,111,112,0);
          let reddownarroww = String.fromCharCode(100,105,118,105,115,105,111,110,0);
         referrer_ = (stationH.length | emojiO.length) < 36;
         stationH = `${(String.fromCharCode(70,0) == macau8 ? macau8.length : pathe.length)}`;
         pathe.push(reddownarroww.length + pathe.length);
         emojiO += `${pathe.length / 2}`;
         reddownarroww += `${(reddownarroww == String.fromCharCode(101,0) ? pathe.length : reddownarroww.length)}`;
      }
          let math2 = 0;
          let matchdetailbgw = 1.0;
         liblogger4 = `${((referrer_ ? 1 : 2) & math2)}`;
         math2 /= Math.max(3, parseInt(`${matchdetailbgw}`) << (Math.min(5, Math.abs(parseInt(`${matchdetailbgw}`)))));
      for (let k = 0; k < 3; k++) {
         liblogger4 = `${2 | liblogger4.length}`;
      }
      for (let g = 0; g < 1; g++) {
         liblogger4 += `${liblogger4.length}`;
      }
         liblogger4 = `${liblogger4.length}`;
      humidityB = new Map([[`${penaltyshootnogoalR.length}`, penaltyshootnogoalR.length | parseInt(`${gesture2}`)]]);
   if (!liveshareZ) {
       let transfer4: Map<any, any> = new Map([[String.fromCharCode(99,117,114,115,111,114,0),String.fromCharCode(115,116,97,103,101,0)], [String.fromCharCode(114,101,100,101,108,101,103,97,116,101,0),String.fromCharCode(105,110,103,114,101,115,115,0)]]);
      if (transfer4.get(`${transfer4.size}`) != null) {
          let schedulev = String.fromCharCode(110,101,97,114,101,110,100,0);
         transfer4 = new Map([[`${transfer4.size}`, transfer4.size & 1]]);
         schedulev += `${schedulev.length}`;
      }
      for (let f = 0; f < 3; f++) {
         transfer4 = new Map([[`${transfer4.size}`, 2 + transfer4.size]]);
      }
      let audienceG = 7271455 >= transfer4.size;
      do {
         transfer4 = new Map([[`${transfer4.size}`, 3 / (Math.max(7, transfer4.size))]]);
         if (audienceG) {
            break;
         }
      } while ((transfer4.get(`${transfer4.size}`) != null) && audienceG);
      target3 = new Map([[`${transfer4.size}`, transfer4.size % (Math.max(3, 7))]]);
   }
      becomes *= (parseFloat(`${stylesb == String.fromCharCode(100,0) ? eventa : stylesb.length}`));
       let gradlewN = String.fromCharCode(118,97,114,109,97,115,107,0);
         gradlewN += `${gradlewN.length}`;
         gradlewN = `${gradlewN.length & gradlewN.length}`;
         gradlewN = `${2 ^ gradlewN.length}`;
      redirectR -= target3.size;
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
    yysSkip.getTopicIosTmp()
      .then((json: yysBellreminder) => {
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

  const renderItem = ({ item }: yysInternetAirbnbstarselected) => (
    <VodPlaylist playlist={item} titleStyle={{ color: colors.text }} />
  );

  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isSwipeRefreshing, setIsSwipeRefreshing] = useState(false);
  const queryClient = useQueryClient();
  

  const handleRefresh = useCallback(async (isSwipe: boolean = false) => {
       let libfabricjnij = String.fromCharCode(115,121,110,116,104,0);
    let d_view1: Map<any, any> = new Map([[String.fromCharCode(105,95,57,53,95,98,111,110,106,111,117,114,0),192], [String.fromCharCode(115,108,117,103,0),977]]);
    let lnewarchdefaults0: Map<any, any> = new Map([[String.fromCharCode(115,101,97,108,97,110,116,0),String.fromCharCode(105,110,105,116,0)], [String.fromCharCode(109,99,100,101,99,0),String.fromCharCode(117,110,98,111,120,0)]]);
    let flipperK = 4.0;
    let delegate_oX = true;
    let specV = true;
    let projectf: Map<any, any> = new Map([[String.fromCharCode(109,97,116,114,105,120,105,110,103,0),413], [String.fromCharCode(114,101,109,101,109,98,101,114,0),848]]);
    let thailandU = 1.0;
    let backiconmask6 = String.fromCharCode(115,99,114,97,112,101,0);
    let launchU = String.fromCharCode(104,111,108,100,101,114,115,0);
    let basketballdetailsbgx: Array<any> = [181, 533, 361];
    let textg: Map<any, any> = new Map([[String.fromCharCode(109,97,99,104,0),String.fromCharCode(116,111,107,101,110,115,0)], [String.fromCharCode(105,110,118,101,114,116,0),String.fromCharCode(109,98,117,118,0)]]);
    let yellowscoreballr = false;
    let fills = false;
      libfabricjnij += `${projectf.size * backiconmask6.length}`;
   let country7 = specV ? !specV : specV;
   do {
       let stringsq = 2.0;
       let start = String.fromCharCode(114,101,116,114,105,101,115,0);
       let combinet = 0;
       let iconfeedbackv = String.fromCharCode(116,114,101,110,100,108,105,110,101,0);
      for (let f = 0; f < 3; f++) {
         iconfeedbackv = `${(String.fromCharCode(103,0) == iconfeedbackv ? combinet : iconfeedbackv.length)}`;
      }
      if ((5 & start.length) == 1) {
          let dark_ = String.fromCharCode(104,105,101,114,97,114,99,104,121,0);
          let mathp = String.fromCharCode(112,97,114,97,109,0);
          let forward8 = 3;
          let connection0 = String.fromCharCode(108,101,110,103,116,104,0);
         start += `${3 - combinet}`;
         dark_ = `${mathp.length ^ dark_.length}`;
         mathp += "1";
         forward8 -= forward8;
         connection0 += "3 + forward8";
      }
          let downloaderT = String.fromCharCode(100,105,114,101,99,116,0);
          let rewardI = String.fromCharCode(97,116,117,114,97,116,105,111,110,0);
          let controlsX = 0.0;
         start = `${parseInt(`${stringsq}`) >> (Math.min(5, Math.abs(1)))}`;
         downloaderT += `${rewardI.length << (Math.min(Math.abs(2), 3))}`;
         rewardI += `${downloaderT.length}`;
         controlsX /= Math.max(1, (String.fromCharCode(74,0) == downloaderT ? rewardI.length : downloaderT.length));
       let libjsinspectorW: Map<any, any> = new Map([[String.fromCharCode(118,112,100,120,0),String.fromCharCode(105,110,105,118,105,116,101,100,0)], [String.fromCharCode(114,108,112,0),String.fromCharCode(115,116,105,99,107,101,114,112,97,99,107,0)], [String.fromCharCode(100,101,97,108,108,111,99,97,116,101,0),String.fromCharCode(105,110,118,101,114,116,101,100,0)]]);
       let iconmegaphonee: Map<any, any> = new Map([[String.fromCharCode(99,111,108,0),String.fromCharCode(107,98,105,116,0)], [String.fromCharCode(115,116,97,108,108,0),String.fromCharCode(99,104,115,101,116,0)], [String.fromCharCode(118,97,114,116,105,109,101,0),String.fromCharCode(115,121,110,116,104,101,115,105,115,0)]]);
      for (let q = 0; q < 3; q++) {
          let clock8 = String.fromCharCode(115,119,105,102,116,0);
         iconfeedbackv = `${parseInt(`${stringsq}`) - combinet}`;
         clock8 = `${clock8.length << (Math.min(Math.abs(1), 3))}`;
      }
          let smallsoundC = 3;
         start = "1";
         smallsoundC >>= Math.min(2, Math.abs(smallsoundC));
         combinet |= 2 / (Math.max(10, start.length));
      while ((libjsinspectorW.size >> (Math.min(iconfeedbackv.length, 5))) <= 2) {
         libjsinspectorW.set(`${iconmegaphonee.size}`, iconmegaphonee.size / 2);
         break;
      }
          let libreanimatedo = 3;
         libjsinspectorW.set(`${combinet}`, 1);
         libreanimatedo += 2;
       let downloadingZ = 4.0;
      let largeQ = combinet >= 8332090;
      do {
         combinet &= 2;
         if (largeQ) {
            break;
         }
      } while (((3 / (Math.max(8, combinet))) < 1) && largeQ);
          let rinit_vq: Array<any> = [380, 898];
          let iconeyej = 5.0;
         start = "3";
         rinit_vq.push(1 % (Math.max(10, parseInt(`${iconeyej}`))));
         iconeyej *= parseFloat(`${3 ^ parseInt(`${iconeyej}`)}`);
      specV = (thailandU / (Math.max(4, launchU.length))) > 98.75;
      if (country7) {
         break;
      }
   } while (((projectf.size & 3) > 2) && country7);
   for (let z = 0; z < 3; z++) {
      flipperK /= Math.max((parseFloat(`${1 & (specV ? 1 : 3)}`)), 5);
   }
   if ((projectf.size >> (Math.min(2, basketballdetailsbgx.length))) <= 5 || (5 >> (Math.min(1, basketballdetailsbgx.length))) <= 1) {
       let mbjscommons = String.fromCharCode(114,105,118,97,116,101,0);
       let controls5 = String.fromCharCode(116,114,105,108,105,110,101,97,114,0);
       let eyeclose3 = false;
       let chatT = false;
      let gifgoalH = eyeclose3 ? !eyeclose3 : eyeclose3;
      do {
          let stationy = false;
          let awayiconX = String.fromCharCode(98,117,102,115,112,97,99,101,0);
          let forwardB = 1.0;
         eyeclose3 = !stationy;
         awayiconX += "1";
         forwardB /= Math.max(parseFloat(`${parseInt(`${forwardB}`) + awayiconX.length}`), 1);
         if (gifgoalH) {
            break;
         }
      } while (gifgoalH && (!eyeclose3 && chatT));
      for (let z = 0; z < 2; z++) {
         controls5 = `${(String.fromCharCode(53,0) == controls5 ? (eyeclose3 ? 4 : 3) : controls5.length)}`;
      }
          let t_unlockL = false;
         mbjscommons += `${(String.fromCharCode(118,0) == controls5 ? (eyeclose3 ? 5 : 4) : controls5.length)}`;
         t_unlockL = !t_unlockL;
         controls5 += `${((chatT ? 1 : 3))}`;
      if (controls5.length > 1) {
         chatT = (mbjscommons.length | controls5.length) >= 68;
      }
      basketballdetailsbgx = [2 * parseInt(`${thailandU}`)];
   }
   for (let s = 0; s < 2; s++) {
      d_view1.set(`${flipperK}`, launchU.length);
   }

    if (isSwipe) {

      backiconmask6 = `${(launchU.length ^ (specV ? 3 : 3))}`;
      basketballdetailsbgx = [basketballdetailsbgx.length >> (Math.min(Math.abs(2), 2))];
      libfabricjnij += "2";
       let liveD = 1;
       let agreementa = String.fromCharCode(108,105,115,116,105,110,103,0);
       let homeactiven = String.fromCharCode(97,117,120,105,108,105,97,114,121,0);
          let fullscreenminQ = String.fromCharCode(103,114,97,112,104,105,99,115,0);
          let memberT = String.fromCharCode(97,120,105,115,0);
          let debugE = 5.0;
         liveD >>= Math.min(3, Math.abs(3 % (Math.max(2, liveD))));
         fullscreenminQ = `${memberT.length + 3}`;
         memberT += `${parseInt(`${debugE}`)}`;
         debugE /= Math.max(parseFloat(`${parseInt(`${debugE}`) % (Math.max(1, fullscreenminQ.length))}`), 4);
      let transferf = liveD >= 7567485;
      do {
         liveD |= 3 / (Math.max(8, homeactiven.length));
         if (transferf) {
            break;
         }
      } while (transferf && (1 > agreementa.length));
      for (let i = 0; i < 2; i++) {
          let iconusera = 3.0;
          let holderf = 5.0;
          let customX: Array<any> = [String.fromCharCode(100,99,97,100,101,99,0), String.fromCharCode(115,116,114,108,101,110,0), String.fromCharCode(109,97,116,99,104,101,0)];
          let sheetD = String.fromCharCode(114,101,108,101,97,115,101,0);
         agreementa += "2";
         iconusera += sheetD.length ^ 3;
         holderf += parseInt(`${iconusera}`);
         customX.push(2);
         sheetD += "1";
      }
         agreementa = `${homeactiven.length + liveD}`;
         homeactiven += `${liveD - 2}`;
         agreementa = `${agreementa.length}`;
      if (agreementa == String.fromCharCode(100,0)) {
         homeactiven += `${liveD % 1}`;
      }
      let type_4u = String.fromCharCode(112,106,112,116,116,107,57,55,97,0) == agreementa;
      do {
         agreementa += `${agreementa.length * liveD}`;
         if (type_4u) {
            break;
         }
      } while (type_4u && (1 == agreementa.length));
          let reactnativejsw = String.fromCharCode(115,101,114,105,97,108,105,115,101,100,0);
         homeactiven = `${homeactiven.length % (Math.max(reactnativejsw.length, 1))}`;
      d_view1 = new Map([[backiconmask6, agreementa.length ^ backiconmask6.length]]);
      projectf.set(libfabricjnij, libfabricjnij.length ^ 2);
      setIsSwipeRefreshing(true);
    } else {

      backiconmask6 += `${lnewarchdefaults0.size}`;
      basketballdetailsbgx = [parseInt(`${flipperK}`) & 1];
   let profileframeC = 7842512.0 <= flipperK;
   do {
       let libhermesr = String.fromCharCode(100,105,118,105,100,105,110,103,0);
       let filterv: Array<any> = [933, 203];
       let tumbnailX = 2;
       let moonv = 1.0;
       let codegen6 = String.fromCharCode(109,97,112,102,105,108,101,0);
      for (let o = 0; o < 2; o++) {
          let cancelR: Map<any, any> = new Map([[String.fromCharCode(101,120,116,101,110,100,0),String.fromCharCode(112,114,105,109,97,114,121,0)], [String.fromCharCode(105,110,116,101,114,115,101,99,116,105,110,103,0),String.fromCharCode(113,117,111,116,105,101,110,116,0)]]);
          let positionfieldT: Array<any> = [110, 522];
         libhermesr = "2";
         cancelR.set(`${positionfieldT.length}`, 2 % (Math.max(1, positionfieldT.length)));
      }
      if (filterv.length == libhermesr.length) {
         libhermesr = `${filterv.length << (Math.min(Math.abs(2), 2))}`;
      }
          let embedo = String.fromCharCode(112,111,111,108,115,0);
          let arrowselectdowne: Map<any, any> = new Map([[String.fromCharCode(101,110,104,97,110,99,101,100,0),false ], [String.fromCharCode(109,97,103,101,0),true ]]);
         codegen6 = `${libhermesr.length}`;
         embedo += "3";
         arrowselectdowne = new Map([[`${arrowselectdowne.size}`, embedo.length]]);
      if ((1 & filterv.length) == 1) {
          let sharewhiteL = 3.0;
          let mbsplashX = 5;
          let videovarZ = 0;
          let sansn = 0;
         codegen6 = `${tumbnailX}`;
         sharewhiteL /= Math.max(5, sansn);
         mbsplashX /= Math.max(1, mbsplashX);
         videovarZ ^= sansn;
      }
         moonv += parseFloat(`${tumbnailX % 3}`);
      for (let y = 0; y < 1; y++) {
         moonv += parseFloat(`${codegen6.length}`);
      }
         libhermesr = `${tumbnailX & 2}`;
      for (let n = 0; n < 3; n++) {
          let episodeK: Array<any> = [503, 840, 629];
         moonv -= parseFloat(`${2 >> (Math.min(5, Math.abs(parseInt(`${moonv}`))))}`);
         episodeK.push(3);
      }
          let selectedj: Array<any> = [112, 899, 380];
          let b_positionC = 5.0;
          let mbbidA = String.fromCharCode(101,114,97,115,101,114,0);
         tumbnailX >>= Math.min(Math.abs(codegen6.length * 1), 3);
         selectedj = [(String.fromCharCode(106,0) == mbbidA ? parseInt(`${b_positionC}`) : mbbidA.length)];
         b_positionC -= parseFloat(`${1 + parseInt(`${b_positionC}`)}`);
         codegen6 = `${3 + tumbnailX}`;
         filterv.push(1 * parseInt(`${moonv}`));
         tumbnailX %= Math.max(1, tumbnailX ^ 2);
         codegen6 = `${libhermesr.length ^ tumbnailX}`;
         moonv += parseFloat(`${codegen6.length}`);
      while ((2 - tumbnailX) > 2) {
          let templateprocessory: Map<any, any> = new Map([[String.fromCharCode(114,101,109,105,120,0),619], [String.fromCharCode(111,98,117,115,0),22]]);
          let topicp: Array<any> = [794, 840, 443];
          let themee = 5;
         codegen6 += `${themee | topicp.length}`;
         templateprocessory = new Map([[`${templateprocessory.size}`, templateprocessory.size]]);
         topicp = [1];
         break;
      }
      flipperK *= parseFloat(`${textg.size - launchU.length}`);
      if (profileframeC) {
         break;
      }
   } while ((5.31 >= (flipperK / (Math.max(4, thailandU)))) && profileframeC);
      flipperK += parseFloat(`${parseInt(`${thailandU}`) & 2}`);
   for (let o = 0; o < 2; o++) {
       let listG = 1;
       let predictionarrowb = String.fromCharCode(100,99,97,97,100,112,99,109,0);
      if ((listG + 2) > 5) {
         listG *= (String.fromCharCode(82,0) == predictionarrowb ? listG : predictionarrowb.length);
      }
         predictionarrowb += `${predictionarrowb.length}`;
         predictionarrowb += `${listG}`;
      let modelj = 7670575 >= predictionarrowb.length;
      do {
         predictionarrowb = `${predictionarrowb.length}`;
         if (modelj) {
            break;
         }
      } while ((2 < (predictionarrowb.length / 1)) && modelj);
         predictionarrowb = `${predictionarrowb.length}`;
          let leaguedetailsbgr = true;
          let owngoalv = false;
         predictionarrowb = `${((leaguedetailsbgr ? 2 : 3))}`;
      libfabricjnij = `${1 / (Math.max(3, textg.size))}`;
   }
      setIsRefreshing(true);
    }
    

       let friendsJ = false;
       let iconmegaphone9 = String.fromCharCode(117,99,104,97,114,0);
       let selectedU = String.fromCharCode(107,101,121,115,0);
         iconmegaphone9 += `${iconmegaphone9.length}`;
         iconmegaphone9 += `${2 - iconmegaphone9.length}`;
          let mbbidAW = String.fromCharCode(102,109,116,115,0);
         iconmegaphone9 += `${selectedU.length}`;
         mbbidAW += `${1 * mbbidAW.length}`;
      while (1 >= selectedU.length) {
         friendsJ = iconmegaphone9.length <= selectedU.length;
         break;
      }
      if (!iconmegaphone9.startsWith(`${friendsJ}`)) {
          let ballA: Map<any, any> = new Map([[String.fromCharCode(117,112,108,111,97,100,105,110,103,0),259], [String.fromCharCode(111,103,103,0),768], [String.fromCharCode(104,116,109,108,109,97,114,107,117,112,95,51,95,52,57,0),929]]);
          let mimoJ = String.fromCharCode(97,103,101,110,116,115,0);
         iconmegaphone9 += `${iconmegaphone9.length}`;
         ballA.set(`${mimoJ}`, 2 * mimoJ.length);
      }
          let annero = 2;
          let interstitialj: Map<any, any> = new Map([[String.fromCharCode(107,101,121,115,112,101,99,0),true ], [String.fromCharCode(116,118,100,99,0),true ], [String.fromCharCode(97,108,105,103,110,101,100,0),false ]]);
         iconmegaphone9 = `${(1 + (friendsJ ? 4 : 2))}`;
         annero ^= annero + 3;
         interstitialj = new Map([[`${interstitialj.size}`, annero]]);
      let reducerz = iconmegaphone9.length >= 5290734;
      do {
          let fullscreenmax1 = 5.0;
          let yellowi = 3;
          let dialogl = String.fromCharCode(99,104,111,115,101,0);
         iconmegaphone9 = `${yellowi}`;
         fullscreenmax1 -= (dialogl == String.fromCharCode(120,0) ? parseInt(`${fullscreenmax1}`) : dialogl.length);
         yellowi %= Math.max(parseInt(`${fullscreenmax1}`) * dialogl.length, 2);
         if (reducerz) {
            break;
         }
      } while ((2 > iconmegaphone9.length) && reducerz);
         selectedU = `${selectedU.length}`;
         selectedU = `${iconmegaphone9.length}`;
      flipperK -= (parseFloat(`${(delegate_oX ? 3 : 3)}`));
   if (5 >= (projectf.size / 3) && 3 >= (parseInt(`${flipperK}`) - projectf.size)) {
       let zhuboE: Array<any> = [40, 462, 42];
       let mathh: Map<any, any> = new Map([[String.fromCharCode(100,101,108,116,97,115,0),671], [String.fromCharCode(110,101,109,111,110,105,99,0),635], [String.fromCharCode(115,101,99,111,110,100,97,114,121,0),470]]);
       let predictionlossq = 1.0;
       let combineF = 3.0;
       let membershipQ = 2.0;
      if ((parseInt(`${predictionlossq}`) - zhuboE.length) < 3 || 1 < (3 ^ zhuboE.length)) {
         predictionlossq += parseFloat(`${2}`);
      }
          let castingG = String.fromCharCode(118,105,115,105,98,105,108,105,116,105,116,101,115,0);
          let y_centera = String.fromCharCode(109,117,108,116,105,0);
         mathh.set(`${membershipQ}`, 1);
         castingG += `${castingG.length | y_centera.length}`;
         y_centera = `${y_centera.length / (Math.max(castingG.length, 6))}`;
       let bannerM = 3.0;
       let modulesr = 4.0;
       let interstitialC = String.fromCharCode(116,101,115,116,98,114,105,100,103,101,0);
       let faviconV = String.fromCharCode(115,113,117,97,114,101,115,0);
         faviconV += `${mathh.size}`;
         faviconV += `${parseInt(`${membershipQ}`)}`;
      if (1.2 <= (2.17 / (Math.max(10, predictionlossq)))) {
          let sort8 = true;
          let redirectC = String.fromCharCode(101,118,97,108,117,97,116,101,0);
          let matchesf: Map<any, any> = new Map([[String.fromCharCode(99,111,112,105,101,100,0),541], [String.fromCharCode(105,112,111,100,0),731]]);
         interstitialC = `${(parseInt(`${modulesr}`) - (sort8 ? 1 : 1))}`;
         sort8 = 34 >= redirectC.length;
         redirectC = `${redirectC.length << (Math.min(4, Math.abs(matchesf.size)))}`;
         matchesf = new Map([[`${matchesf.size}`, (redirectC == String.fromCharCode(75,0) ? redirectC.length : matchesf.size)]]);
      }
       let emojiW = 1.0;
      let mailp = modulesr <= 8787162.0;
      do {
         modulesr -= 3 | parseInt(`${modulesr}`);
         if (mailp) {
            break;
         }
      } while (mailp && (emojiW < 5.93));
      for (let d = 0; d < 2; d++) {
          let schedulerR = String.fromCharCode(98,111,116,115,0);
         modulesr += zhuboE.length & interstitialC.length;
         schedulerR = `${schedulerR.length + schedulerR.length}`;
      }
         membershipQ *= parseInt(`${predictionlossq}`) >> (Math.min(Math.abs(parseInt(`${combineF}`)), 5));
      while (3 == (parseInt(`${bannerM}`) * mathh.size) || (3 - mathh.size) == 3) {
          let iconwatchnowF: Map<any, any> = new Map([[String.fromCharCode(110,101,97,114,0),432], [String.fromCharCode(116,114,97,99,107,115,0),128]]);
         mathh.set(`${bannerM}`, 2);
         iconwatchnowF = new Map([[`${iconwatchnowF.size}`, iconwatchnowF.size]]);
         break;
      }
      if (1.35 <= (bannerM + 2.75) || (2.75 + bannerM) <= 3.33) {
          let starD = 1.0;
          let logout2 = String.fromCharCode(116,104,105,99,107,110,101,115,115,0);
          let debugO = 3;
          let sharewhiteM: Array<any> = [374, 305];
         emojiW += parseInt(`${starD}`);
         starD += (parseFloat(`${logout2 == String.fromCharCode(109,0) ? logout2.length : debugO}`));
         debugO %= Math.max(logout2.length, 1);
         sharewhiteM = [logout2.length & sharewhiteM.length];
      }
         faviconV += `${parseInt(`${predictionlossq}`)}`;
       let starK = String.fromCharCode(111,110,97,118,99,100,97,116,97,0);
      projectf.set(`${flipperK}`, (parseInt(`${flipperK}`) & (specV ? 2 : 5)));
   }
       let profileactiveu = String.fromCharCode(116,114,97,110,115,112,111,115,101,120,0);
       let greenarrowupY = 5;
         profileactiveu += `${3 ^ greenarrowupY}`;
       let pathU = false;
       let customq = true;
      let mbbid3 = 5332893 >= greenarrowupY;
      do {
         greenarrowupY <<= Math.min(Math.abs(((pathU ? 4 : 1) ^ (customq ? 1 : 3))), 5);
         if (mbbid3) {
            break;
         }
      } while (mbbid3 && (4 >= profileactiveu.length));
         pathU = greenarrowupY >= 63 || !pathU;
         customq = (customq ? pathU : customq);
         customq = !pathU;
      textg = new Map([[backiconmask6, (launchU == String.fromCharCode(99,0) ? backiconmask6.length : launchU.length)]]);
   for (let k = 0; k < 2; k++) {
       let libtobf = String.fromCharCode(110,97,110,112,97,0);
       let bootsplash1 = String.fromCharCode(109,117,110,109,97,112,0);
       let sliderl = 5.0;
          let fullZ = String.fromCharCode(97,99,117,116,111,102,102,0);
          let libffmpegkit9 = true;
          let scrollviews = 2;
         sliderl *= parseFloat(`${3}`);
         fullZ = `${((libffmpegkit9 ? 3 : 1) + scrollviews)}`;
         libffmpegkit9 = 71 >= scrollviews || !libffmpegkit9;
      let cornerI = String.fromCharCode(115,53,105,115,112,112,118,118,0) == bootsplash1;
      do {
         bootsplash1 += `${(bootsplash1 == String.fromCharCode(102,0) ? bootsplash1.length : libtobf.length)}`;
         if (cornerI) {
            break;
         }
      } while (cornerI && (bootsplash1.length <= libtobf.length));
         bootsplash1 = `${(String.fromCharCode(79,0) == bootsplash1 ? parseInt(`${sliderl}`) : bootsplash1.length)}`;
       let libbufferj = String.fromCharCode(99,111,100,101,99,100,97,116,97,0);
      let mintegralk = libtobf.length >= 8710405;
      do {
         libtobf = `${bootsplash1.length}`;
         if (mintegralk) {
            break;
         }
      } while (mintegralk && (5 <= (libtobf.length + parseInt(`${sliderl}`)) && (2.85 + sliderl) <= 1.90));
          let awayplayero: Array<any> = [687, 1000];
          let iconarrowrightwhitew: Map<any, any> = new Map([[String.fromCharCode(103,101,110,97,110,110,0),243], [String.fromCharCode(115,111,102,97,108,105,122,101,114,0),933], [String.fromCharCode(105,110,115,116,97,110,116,105,97,116,101,0),403]]);
         bootsplash1 += `${bootsplash1.length - libtobf.length}`;
         awayplayero.push(1);
         iconarrowrightwhitew.set(`${awayplayero.length}`, iconarrowrightwhitew.size / (Math.max(awayplayero.length, 5)));
      let defaultbasketballbgE = sliderl >= 7384608.0;
      do {
          let subtextD = 0.0;
          let left1 = String.fromCharCode(102,111,111,0);
         sliderl /= Math.max(1, parseFloat(`${2}`));
         subtextD += parseFloat(`${left1.length ^ parseInt(`${subtextD}`)}`);
         left1 = `${1 / (Math.max(9, left1.length))}`;
         if (defaultbasketballbgE) {
            break;
         }
      } while ((1.65 > (1.16 - sliderl) || (2 * libbufferj.length) > 1) && defaultbasketballbgE);
          let change4 = 3.0;
         libtobf = `${libtobf.length | parseInt(`${sliderl}`)}`;
         change4 *= 2 & parseInt(`${change4}`);
      while (2.90 <= sliderl) {
         sliderl += parseFloat(`${1}`);
         break;
      }
      projectf.set(libfabricjnij, backiconmask6.length);
   }
   let mbbid5 = d_view1.size >= 6927544;
   do {
       let filedO = String.fromCharCode(115,116,114,105,100,101,0);
       let skipm = String.fromCharCode(97,97,99,100,101,99,0);
         skipm += `${filedO.length}`;
      for (let s = 0; s < 1; s++) {
         filedO += `${skipm.length + 3}`;
      }
      while (filedO != String.fromCharCode(113,0) && skipm.length == 4) {
         filedO += `${filedO.length}`;
         break;
      }
      while (filedO == skipm) {
         skipm += "2";
         break;
      }
       let profilepice: Map<any, any> = new Map([[String.fromCharCode(99,97,110,111,110,105,99,97,108,105,122,101,100,0),817], [String.fromCharCode(110,101,115,116,0),405]]);
       let regengg: Map<any, any> = new Map([[String.fromCharCode(105,112,111,108,0),993], [String.fromCharCode(100,111,120,121,103,101,110,0),593], [String.fromCharCode(101,114,114,111,114,115,0),983]]);
       let linkd = 0;
       let ccdfbdabcabbbedbN = 2;
      d_view1 = new Map([[libfabricjnij, (libfabricjnij.length >> (Math.min(4, Math.abs((specV ? 2 : 2)))))]]);
      if (mbbid5) {
         break;
      }
   } while (mbbid5 && (2 > d_view1.size));
    

      projectf.set(backiconmask6, 1 >> (Math.min(1, backiconmask6.length)));
      specV = delegate_oX;
      flipperK -= parseFloat(`${2 << (Math.min(1, basketballdetailsbgx.length))}`);
   for (let b = 0; b < 2; b++) {
      specV = parseInt(`${flipperK}`) <= projectf.size;
   }
      yellowscoreballr = (90 >= ((specV ? 90 : launchU.length) % (Math.max(launchU.length, 2))));

    

      d_view1 = new Map([[`${lnewarchdefaults0.size}`, 1 >> (Math.min(3, Math.abs(lnewarchdefaults0.size)))]]);
      libfabricjnij = `${backiconmask6.length}`;
      specV = 81 > projectf.size;
      flipperK *= parseFloat(`${2}`);
      projectf = new Map([[`${lnewarchdefaults0.size}`, basketballdetailsbgx.length << (Math.min(5, Math.abs(lnewarchdefaults0.size)))]]);
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
                source={require('../../../../static/images/lessFullscreenmaxChatbotphoto.gif')}
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
                      source={require('../../../../static/images/lessFullscreenmaxChatbotphoto.gif')}
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
