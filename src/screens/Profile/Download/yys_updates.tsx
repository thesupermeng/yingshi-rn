import { RootStackScreenProps } from "@type";
import ScreenContainer from "../../../components/container/yys_matches";
import { FlatList, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import TitleWithBackButtonHeader from "../../../components/header/yys_away_predictionloss_header";
import React, { useCallback, useEffect, useState } from "react";
import DownloadEpisodeDetailCard from "../../../components/download/yys_pangle";
import { IConfirmationLibffmpegkit, yysEdit } from "@type";
import { useAppDispatch, useAppSelector } from "@hooks";
import { yysIconclosewhiteBaiduads } from "@redux";
import { MoreArrowSvg, DownloadYellowMiniSvg, DownloadPauseYellowMiniSvg } from '@static';
import { yysPenaltyshoot } from "@type";
import { CheckboxSelectedSvg, CheckboxUnselectedSvg } from "@static";
import ConfirmationModal from "../../../components/modal/yys_twitter";
import { Button } from "@rneui/themed";
import { manualKillVideoDownloadThunk, pauseVideoDownloadThunk, removeVideoFromDownloadThunk, removeVodFromDownloadThunk, restartVideoDownloadThunk, resumeVideoToDownloadThunk } from "@redux";
import { addVodToHistory, playVod } from "@redux";
import { debounce, throttle } from "lodash";
import FastImage from '../../../components/common/yys_alert_backwhite'
import NetInfo from "@react-native-community/netinfo";

const LoadingGif = require('../../../../static/images/lessFullscreenmaxChatbotphoto.gif')

const DownloadDetails = ({ navigation, route }: RootStackScreenProps<"下载详情">) => {
  const { colors, textVariants, icons, spacing } = useTheme();
  const [isEditing, setIsEditing] = useState(false);
  const { vodId } = route.params
  const [removeHistory, setRemoveHistory] = useState<yysEdit[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [isConnected, setIsConnected] = useState(false)

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state: any) => {
      setIsConnected(state.isConnected);
    });

    return () => {
      
      unsubscribe();
    };
  }, []);

  const download = useAppSelector(({ downloadVideoReducer }: yysIconclosewhiteBaiduads) => downloadVideoReducer.downloads.find(dl => dl.vod.vod_id === vodId))
  const state = useAppSelector(({ downloadVideoReducer }: yysIconclosewhiteBaiduads) => downloadVideoReducer)

  if (!download) return <></>

  const allEpisodes = download.episodes

  const getEpisodeName = useCallback((sourceId: number, urlNid: number) => {
    if (download.vodIsAdult) {
      return download.vod.vod_play_list.urls
        .find(url => url.nid === urlNid)
        ?.name
    } else {
      return download.vod.vod_sources
        .find(source => source.source_id === sourceId)?.vod_play_list.urls
        .find(url => url.nid === urlNid)
        ?.name
    }
  }, [download])

  const getSourceName = useCallback((sourceId: number, vodIsAdult: boolean) => {
    if (vodIsAdult) {
      return '夜来香'
    } else {
      return download.vod.vod_sources.find(source => source.source_id === sourceId)?.source_name
    }
  }, [download])

  const toggleHistory = (episode: yysEdit) => {
    const filtered = removeHistory.filter((x) => !(x.vodUrlNid === episode.vodUrlNid && x.vodSourceId === episode.vodSourceId));
    if (filtered.length === removeHistory.length) {
      setRemoveHistory([episode, ...removeHistory]);
    } else {
      setRemoveHistory(filtered);
    }
  }

  const toggleOverlay = useCallback(() => {
       let contextd = String.fromCharCode(115,116,97,110,100,97,114,100,115,0);
    let unticko = String.fromCharCode(97,114,103,0);
    let turndownj = 1.0;
    let runtimeF: Map<any, any> = new Map([[String.fromCharCode(108,111,97,100,0),String.fromCharCode(100,105,115,97,112,112,101,97,114,97,110,99,101,0)], [String.fromCharCode(107,108,97,115,115,0),String.fromCharCode(109,111,110,116,104,115,0)]]);
    let applicationl: Array<any> = [776, 801];
    let nalyticsz = String.fromCharCode(104,97,109,98,117,114,103,101,114,0);
    let minip = 1.0;
    let liblogger6 = String.fromCharCode(109,115,109,112,101,103,100,97,116,97,0);
    let turnl = false;
    let yingC: Array<any> = [486, 808];
    let libjsinspectorQ = 4.0;
    let videojs0: Array<any> = [458, 197, 170];
    let sliderx = 0.0;
    let orangetick0 = 5.0;
    let closes: Map<any, any> = new Map([[String.fromCharCode(109,110,101,109,111,110,105,99,0),false ], [String.fromCharCode(114,101,99,111,118,101,114,121,0),true ]]);
    let googlez = 5;
    let searchZ = String.fromCharCode(113,117,97,110,116,105,108,101,0);
    let redirectB = String.fromCharCode(109,117,115,105,99,0);
   let libjsib = 9436610 >= runtimeF.size;
   do {
       let defaultbasketballbgn = 1.0;
       let crownQ = 0.0;
       let informationm: Array<any> = [793, 35, 121];
      let fullscreenmin9 = informationm.length <= 5132374;
      do {
          let yellowvideoliveJ = String.fromCharCode(115,100,101,115,0);
          let backg = false;
          let mbjscommonw = 3;
          let dropdowns = 1.0;
          let trash2 = String.fromCharCode(103,101,116,120,118,97,114,0);
         informationm = [(parseInt(`${crownQ}`) % (Math.max(1, (backg ? 2 : 1))))];
         yellowvideoliveJ += `${parseInt(`${dropdowns}`)}`;
         backg = (yellowvideoliveJ.length * parseInt(`${dropdowns}`)) <= 77;
         mbjscommonw *= 3 * trash2.length;
         trash2 = `${parseInt(`${dropdowns}`)}`;
         if (fullscreenmin9) {
            break;
         }
      } while ((informationm.includes(crownQ)) && fullscreenmin9);
      while (5.98 < (defaultbasketballbgn / 3.69) && (informationm.length / (Math.max(2, parseInt(`${defaultbasketballbgn}`)))) < 3) {
          let iconplay3: Array<any> = [5, 519, 153];
          let videobufferloadingz = String.fromCharCode(114,101,100,117,110,100,97,110,116,0);
         defaultbasketballbgn += parseInt(`${defaultbasketballbgn}`);
         iconplay3 = [videobufferloadingz.length];
         videobufferloadingz = "2";
         break;
      }
         crownQ -= informationm.length << (Math.min(Math.abs(1), 1));
      while (defaultbasketballbgn >= 3.100) {
          let hometeamfieldZ = String.fromCharCode(114,101,100,117,99,101,100,0);
          let changee = false;
          let textlayoutmanagerL = 0.0;
          let userz = String.fromCharCode(97,108,103,111,0);
          let homeinactiveD = 0;
         defaultbasketballbgn /= Math.max(((changee ? 2 : 2) * parseInt(`${crownQ}`)), 1);
         hometeamfieldZ = `${parseInt(`${textlayoutmanagerL}`) | 1}`;
         changee = (homeinactiveD % (Math.max(7, userz.length))) < 16;
         textlayoutmanagerL *= parseFloat(`${3}`);
         userz = `${hometeamfieldZ.length | parseInt(`${textlayoutmanagerL}`)}`;
         homeinactiveD *= (userz == String.fromCharCode(83,0) ? homeinactiveD : userz.length);
         break;
      }
          let kuaishouC = true;
          let applev = String.fromCharCode(108,111,103,109,111,110,111,0);
         informationm = [parseInt(`${crownQ}`)];
         kuaishouC = applev.startsWith(`${kuaishouC}`);
         applev = `${applev.length - 3}`;
         informationm.push(parseInt(`${defaultbasketballbgn}`) + 2);
         informationm.push(parseInt(`${crownQ}`) | informationm.length);
      while (5.15 > (5.22 * crownQ)) {
         crownQ /= Math.max(1, informationm.length >> (Math.min(1, Math.abs(parseInt(`${crownQ}`)))));
         break;
      }
          let libavformatV = 0.0;
          let defaultroombg0 = String.fromCharCode(118,97,97,112,105,0);
          let short_h0 = String.fromCharCode(114,97,109,112,117,112,0);
         crownQ -= informationm.length;
         libavformatV /= Math.max(parseFloat(`${short_h0.length & defaultroombg0.length}`), 1);
         defaultroombg0 += `${(String.fromCharCode(109,0) == short_h0 ? defaultroombg0.length : short_h0.length)}`;
      runtimeF = new Map([[contextd, liblogger6.length]]);
      if (libjsib) {
         break;
      }
   } while ((4 <= (applicationl.length + runtimeF.size) && (runtimeF.size + applicationl.length) <= 4) && libjsib);
   while ((4 * contextd.length) <= 2 && 4 <= (parseInt(`${libjsinspectorQ}`) / (Math.max(8, contextd.length)))) {
      libjsinspectorQ *= ((turnl ? 2 : 4));
      break;
   }
   if (contextd == String.fromCharCode(113,0) || unticko.length <= 1) {
       let k_countM = false;
       let libfbb = true;
       let libapminsightbW = 3;
       let roboto2 = 2.0;
       let logol = String.fromCharCode(112,114,111,118,105,100,105,110,103,0);
       let imagemanagerl: Array<any> = [653, 253, 330];
       let overg = 3.0;
       let predictiondefaulty = 2.0;
      let reactnativejsh = libfbb ? !libfbb : libfbb;
      do {
          let iconarrowrightc = String.fromCharCode(115,116,114,111,107,101,114,0);
          let penaltymatchiconi = 5;
          let tooltipse: Map<any, any> = new Map([[String.fromCharCode(114,101,112,0),950], [String.fromCharCode(119,121,99,104,101,112,114,111,111,102,0),724], [String.fromCharCode(112,105,99,116,117,114,101,115,0),609]]);
          let livesharer = String.fromCharCode(99,97,108,99,117,108,97,116,101,0);
         libfbb = k_countM;
         iconarrowrightc += `${livesharer.length ^ 2}`;
         penaltymatchiconi %= Math.max((livesharer == String.fromCharCode(77,0) ? tooltipse.size : livesharer.length), 1);
         tooltipse.set(livesharer, tooltipse.size);
         if (reactnativejsh) {
            break;
         }
      } while (reactnativejsh && (libapminsightbW < 3));
         libfbb = (k_countM ? libfbb : !k_countM);
          let airbnbstarselectedt = String.fromCharCode(116,114,97,118,101,108,0);
          let libavformatW = String.fromCharCode(110,97,108,115,0);
          let grayI: Array<any> = [681, 367];
         logol = `${libavformatW.length >> (Math.min(4, grayI.length))}`;
         airbnbstarselectedt = `${3 + airbnbstarselectedt.length}`;
         libavformatW = `${airbnbstarselectedt.length}`;
         libapminsightbW >>= Math.min(2, Math.abs(3 + logol.length));
         libapminsightbW ^= 3 | libapminsightbW;
         logol = `${parseInt(`${roboto2}`) << (Math.min(3, Math.abs(3)))}`;
          let backgroundD = 3.0;
          let megaphoneM: Array<any> = [815, 88];
         overg *= parseFloat(`${2 * imagemanagerl.length}`);
         backgroundD *= 1;
         megaphoneM = [megaphoneM.length];
      for (let r = 0; r < 3; r++) {
         k_countM = (parseInt(`${roboto2}`) / (Math.max(2, logol.length))) > 7;
      }
         logol = "1";
      if (k_countM) {
         libapminsightbW <<= Math.min(logol.length, 2);
      }
          let smallorangemang: Map<any, any> = new Map([[String.fromCharCode(119,114,105,116,105,110,103,0),305], [String.fromCharCode(116,114,105,101,0),340], [String.fromCharCode(100,101,108,97,121,0),63]]);
         libfbb = 84.26 <= overg;
         smallorangemang.set(`${smallorangemang.size}`, smallorangemang.size % (Math.max(7, smallorangemang.size)));
          let grayP = 1.0;
         imagemanagerl.push(logol.length << (Math.min(3, Math.abs(parseInt(`${predictiondefaulty}`)))));
         grayP += parseFloat(`${parseInt(`${grayP}`) / 1}`);
         libfbb = k_countM;
      contextd = "3";
   }
   for (let k = 0; k < 2; k++) {
       let libavdeviceZ = String.fromCharCode(102,105,108,116,101,114,102,0);
      if (libavdeviceZ == libavdeviceZ) {
         libavdeviceZ += `${libavdeviceZ.length >> (Math.min(Math.abs(3), 2))}`;
      }
          let reactnativeratingsp = String.fromCharCode(118,100,97,115,104,101,114,0);
          let iconclosewhitewithbgW = String.fromCharCode(101,105,112,0);
         libavdeviceZ = `${reactnativeratingsp.length + 3}`;
         reactnativeratingsp += `${iconclosewhitewithbgW.length + iconclosewhitewithbgW.length}`;
       let bootsplashb = 3.0;
       let completeF = 1.0;
      turnl = 65 == contextd.length;
   }
   if (1 < yingC.length) {
      yingC = [1];
   }
   for (let v = 0; v < 1; v++) {
      turndownj += 2;
   }
      liblogger6 += `${3 - unticko.length}`;
       let orangeuparrowd = String.fromCharCode(115,105,109,112,108,101,0);
         orangeuparrowd = `${orangeuparrowd.length}`;
          let short_3pB: Map<any, any> = new Map([[String.fromCharCode(108,106,112,101,103,0),String.fromCharCode(99,111,108,108,97,116,105,110,103,0)], [String.fromCharCode(117,110,115,101,114,105,97,108,105,122,101,0),String.fromCharCode(119,114,105,116,101,108,111,99,107,0)], [String.fromCharCode(115,116,114,108,0),String.fromCharCode(97,115,99,101,110,116,0)]]);
         orangeuparrowd = `${orangeuparrowd.length + 1}`;
         short_3pB = new Map([[`${short_3pB.size}`, 1]]);
      let chinasamed = String.fromCharCode(120,114,122,54,106,0) == orangeuparrowd;
      do {
         orangeuparrowd = `${orangeuparrowd.length}`;
         if (chinasamed) {
            break;
         }
      } while (chinasamed && (orangeuparrowd.length < 1 && orangeuparrowd == String.fromCharCode(74,0)));
      orangetick0 -= applicationl.length / 1;
      turnl = (unticko.length - videojs0.length) <= 30;
      unticko += `${3 | liblogger6.length}`;
   for (let t = 0; t < 3; t++) {
      contextd += `${parseInt(`${libjsinspectorQ}`)}`;
   }
   if (2 >= yingC.length) {
      nalyticsz = "1";
   }
      turndownj /= Math.max(4, 3);
       let gifgoalbgw: Array<any> = [332, 188, 28];
         gifgoalbgw = [gifgoalbgw.length];
      for (let a = 0; a < 3; a++) {
         gifgoalbgw = [3 * gifgoalbgw.length];
      }
          let options0 = String.fromCharCode(116,101,109,112,108,97,116,101,115,0);
          let download8 = String.fromCharCode(118,97,105,108,97,98,105,108,105,116,121,0);
          let yellowcirclebgx = String.fromCharCode(99,101,114,116,105,102,105,99,97,116,101,0);
         gifgoalbgw = [2 ^ options0.length];
         options0 += `${yellowcirclebgx.length}`;
         download8 = `${download8.length}`;
         yellowcirclebgx += `${download8.length * 1}`;
      orangetick0 -= 3;
      yingC.push(yingC.length & liblogger6.length);
   let sharedt = 6317715 <= nalyticsz.length;
   do {
      nalyticsz += `${2 >> (Math.min(1, Math.abs(runtimeF.size)))}`;
      if (sharedt) {
         break;
      }
   } while (sharedt && (nalyticsz.length >= videojs0.length));
   if (applicationl.length > runtimeF.size) {
      applicationl = [unticko.length ^ parseInt(`${sliderx}`)];
   }
      yingC = [yingC.length + contextd.length];
   let smallt = 6693003.0 <= libjsinspectorQ;
   do {
      libjsinspectorQ /= Math.max(1, contextd.length);
      if (smallt) {
         break;
      }
   } while (smallt && ((libjsinspectorQ * 4.0) == 3.79 && 5 == (videojs0.length / 4)));
   for (let z = 0; z < 1; z++) {
      sliderx *= parseInt(`${orangetick0}`) % (Math.max(4, parseInt(`${minip}`)));
   }
       let arrowA = String.fromCharCode(97,117,116,111,109,97,116,105,99,0);
       let verticalu = 0.0;
       let videoj = String.fromCharCode(100,101,97,108,108,111,99,0);
      let showmoreP = arrowA.length <= 9741139;
      do {
          let signinupw = String.fromCharCode(99,111,108,117,109,110,108,105,115,116,0);
         arrowA += `${videoj.length >> (Math.min(Math.abs(2), 3))}`;
         signinupw += `${signinupw.length >> (Math.min(2, signinupw.length))}`;
         if (showmoreP) {
            break;
         }
      } while (showmoreP && ((parseInt(`${verticalu}`) / (Math.max(arrowA.length, 5))) > 3));
       let rootS = 0;
       let episode1 = 4;
          let klevin8 = 1.0;
          let completeN = 2;
         verticalu /= Math.max(4, parseFloat(`${1}`));
         klevin8 /= Math.max(completeN, 1);
         completeN -= 3;
      let sourceH = rootS <= 8796901;
      do {
         rootS >>= Math.min(Math.abs(2 % (Math.max(1, episode1))), 4);
         if (sourceH) {
            break;
         }
      } while (sourceH && (rootS <= 3));
      while ((episode1 | rootS) >= 4) {
         rootS |= arrowA.length;
         break;
      }
       let awayteamfieldd = 1;
         videoj += "1 ^ episode1";
         arrowA = "3";
         verticalu -= parseFloat(`${1 - rootS}`);
      liblogger6 += `${1 | arrowA.length}`;
   for (let o = 0; o < 2; o++) {
       let refreshborderlessL: Array<any> = [String.fromCharCode(108,105,112,98,111,97,114,100,0), String.fromCharCode(115,101,97,114,99,104,105,110,103,0), String.fromCharCode(118,101,99,116,111,114,115,0)];
       let reactnavigationk = String.fromCharCode(116,97,115,107,115,0);
      let basketballdetailsbgG = refreshborderlessL.length >= 7292211;
      do {
         refreshborderlessL.push(reactnavigationk.length);
         if (basketballdetailsbgG) {
            break;
         }
      } while (basketballdetailsbgG && ((5 ^ reactnavigationk.length) > 5 || 5 > (5 ^ refreshborderlessL.length)));
         reactnavigationk = `${refreshborderlessL.length >> (Math.min(Math.abs(2), 5))}`;
      let iconsetting0 = reactnavigationk == String.fromCharCode(95,106,106,122,104,122,104,53,0);
      do {
         reactnavigationk = `${refreshborderlessL.length}`;
         if (iconsetting0) {
            break;
         }
      } while (((1 + reactnavigationk.length) == 1) && iconsetting0);
      for (let i = 0; i < 2; i++) {
         refreshborderlessL.push(reactnavigationk.length);
      }
         refreshborderlessL.push(refreshborderlessL.length);
          let gifgoalj: Map<any, any> = new Map([[String.fromCharCode(115,117,98,110,111,100,101,115,0),49], [String.fromCharCode(115,112,105,108,108,0),141], [String.fromCharCode(102,117,110,110,121,0),215]]);
          let lessW = String.fromCharCode(115,98,112,114,111,0);
          let sourcep: Array<any> = [836, 509];
         reactnavigationk = `${(String.fromCharCode(108,0) == lessW ? lessW.length : reactnavigationk.length)}`;
         gifgoalj.set(`${sourcep.length}`, gifgoalj.size % (Math.max(3, 1)));
         sourcep = [3 >> (Math.min(4, Math.abs(gifgoalj.size)))];
      libjsinspectorQ *= applicationl.length << (Math.min(Math.abs(2), 5));
   }
   if (4 == unticko.length) {
       let descp = String.fromCharCode(112,114,111,103,114,101,115,115,101,115,0);
       let libfbjniv = String.fromCharCode(102,114,101,111,112,101,110,0);
       let floaterX = true;
       let rightQ = String.fromCharCode(102,105,108,108,105,110,0);
       let topon4 = String.fromCharCode(105,110,102,105,110,105,116,121,0);
      let libjsijniprofilern = libfbjniv == String.fromCharCode(102,107,104,120,111,121,102,102,0);
      do {
          let dragcloseW: Map<any, any> = new Map([[String.fromCharCode(109,101,115,115,97,103,101,115,0),554], [String.fromCharCode(115,109,111,111,116,104,101,100,0),345], [String.fromCharCode(109,105,120,105,110,0),624]]);
          let eactg = false;
          let schedulerc = true;
          let sentryK = String.fromCharCode(105,100,108,101,0);
         libfbjniv += `${((schedulerc ? 1 : 2))}`;
         dragcloseW.set(`${eactg}`, ((eactg ? 3 : 3) % (Math.max(sentryK.length, 8))));
         schedulerc = (91 >= (sentryK.length | (eactg ? sentryK.length : 91)));
         if (libjsijniprofilern) {
            break;
         }
      } while (libjsijniprofilern && (libfbjniv.length <= 4));
          let umengD = true;
         descp = `${(3 - (umengD ? 5 : 3))}`;
       let android6 = String.fromCharCode(112,97,114,116,105,99,105,112,97,116,105,110,103,0);
       let elementsm = String.fromCharCode(114,101,100,97,99,116,0);
      if (android6 != String.fromCharCode(102,0) || 2 > libfbjniv.length) {
         libfbjniv = `${(elementsm == String.fromCharCode(77,0) ? elementsm.length : android6.length)}`;
      }
       let playershirtJ = String.fromCharCode(111,118,101,114,115,104,111,111,116,0);
       let detailsX = String.fromCharCode(114,103,98,116,101,115,116,0);
       let halffieldimage4 = String.fromCharCode(99,100,106,112,101,103,0);
      for (let a = 0; a < 2; a++) {
         libfbjniv += `${descp.length % (Math.max(3, halffieldimage4.length))}`;
      }
         floaterX = 96 > playershirtJ.length;
          let orangeclockQ = String.fromCharCode(100,109,105,120,0);
          let libtobk = String.fromCharCode(110,111,110,110,117,108,108,97,100,100,114,101,115,115,0);
          let tumbnailX: Array<any> = [8, 816, 303];
         topon4 = `${descp.length}`;
         orangeclockQ = "3";
         libtobk = `${libtobk.length}`;
         tumbnailX.push(libtobk.length >> (Math.min(1, tumbnailX.length)));
          let photo3: Array<any> = [String.fromCharCode(115,97,108,115,97,0), String.fromCharCode(109,97,102,113,0)];
          let defaultplayerimgq = 5;
          let componentsg = 1.0;
         rightQ = `${1 + detailsX.length}`;
         photo3 = [3 - photo3.length];
         defaultplayerimgq >>= Math.min(1, Math.abs(1 % (Math.max(5, defaultplayerimgq))));
         componentsg += parseInt(`${componentsg}`) | photo3.length;
      while (libfbjniv.length > topon4.length) {
         topon4 = `${((floaterX ? 2 : 1) / (Math.max(3, 7)))}`;
         break;
      }
      if (topon4.length == android6.length) {
         android6 += `${detailsX.length}`;
      }
      let nativee = 8207383 >= rightQ.length;
      do {
          let reactnativeratingsi = false;
          let v_titlee = String.fromCharCode(111,118,101,114,117,115,101,0);
          let gemfileB = true;
          let subsc = String.fromCharCode(114,101,103,0);
          let icondefaultthumbnailA = false;
         rightQ = `${1 * elementsm.length}`;
         reactnativeratingsi = (gemfileB ? reactnativeratingsi : gemfileB);
         v_titlee = `${(2 | (gemfileB ? 2 : 5))}`;
         subsc += `${v_titlee.length}`;
         icondefaultthumbnailA = subsc.length <= 19;
         if (nativee) {
            break;
         }
      } while ((!rightQ.startsWith(`${floaterX}`)) && nativee);
         rightQ = "1";
      if (3 == libfbjniv.length) {
          let defaultprofilepic0 = 1;
          let sportv: Map<any, any> = new Map([[String.fromCharCode(100,105,115,115,111,108,118,101,0),String.fromCharCode(108,111,119,101,115,116,0)], [String.fromCharCode(99,111,110,99,104,0),String.fromCharCode(115,116,114,108,105,107,101,0)]]);
         detailsX = "2";
         defaultprofilepic0 -= defaultprofilepic0 ^ 3;
         sportv.set(`${defaultprofilepic0}`, 2);
      }
      turnl = !turnl;
   }
      minip /= Math.max(2, 3);
   if (4.71 == sliderx) {
      turndownj += videojs0.length << (Math.min(yingC.length, 5));
   }
       let sportE = false;
       let entry6: Array<any> = [String.fromCharCode(119,101,97,118,101,0), String.fromCharCode(99,111,109,98,105,0), String.fromCharCode(98,108,111,99,107,115,105,122,101,0)];
       let chartz: Array<any> = [816, 356];
      for (let t = 0; t < 1; t++) {
          let vietnaml = 2.0;
          let private_9n = 0.0;
          let encrypt7: Array<any> = [937, 380, 641];
          let settingsv = 3.0;
          let imagewatchliveR = 1.0;
         chartz.push(((sportE ? 1 : 2) & parseInt(`${imagewatchliveR}`)));
         vietnaml /= Math.max(5, parseInt(`${settingsv}`));
         private_9n -= parseFloat(`${encrypt7.length}`);
         encrypt7.push(parseInt(`${vietnaml}`) % (Math.max(7, parseInt(`${private_9n}`))));
         imagewatchliveR *= parseFloat(`${parseInt(`${settingsv}`)}`);
      }
      if ((2 ^ chartz.length) == 2) {
         chartz = [entry6.length % 2];
      }
      unticko += `${2 & liblogger6.length}`;

    setIsDialogOpen(!isDialogOpen);
  }, [isDialogOpen])

  const isDeleteAll = removeHistory.length === allEpisodes.length

  const deleteAlertText = isDeleteAll ? `您是否确定清楚《${download.vod.vod_name}》?` : "您是否确定清除？"

  let resumeTimeout: any;

  const handleDownloadCardPress = (item: yysEdit) =>
    debounce(() => {
      clearTimeout(resumeTimeout)
      if (isEditing) {
        toggleHistory(item);
      } else {
        if (item.status === IConfirmationLibffmpegkit.IRightTerms) {
          dispatch(
            restartVideoDownloadThunk(
              download.vod,
              item.vodSourceId,
              item.vodUrlNid,
            ),
          );
        } else if (item.status === IConfirmationLibffmpegkit.IPointStar) {
          dispatch(playVod(download.vod, 0, item.vodUrlNid, item.vodSourceId));
          navigation.navigate('播放', {
            vod_id: download.vod.vod_id,
            player_mode: download.vodIsAdult ? 'adult' : 'normal',
          });
        } else if (item.status === IConfirmationLibffmpegkit.ICrown) {
          dispatch(
            pauseVideoDownloadThunk(
              download.vod,
              item.vodSourceId,
              item.vodUrlNid,
            ),
          );
        } else if (item.status === IConfirmationLibffmpegkit.IRedirectLibyoga) {
          resumeTimeout = setTimeout(() => {
       let smallorangemanr: Map<any, any> = new Map([[String.fromCharCode(97,97,99,101,110,99,100,115,112,0),65], [String.fromCharCode(97,100,115,0),13], [String.fromCharCode(105,110,116,101,103,101,114,105,102,121,0),707]]);
    let zhengpianA = 1.0;
    let iconviewerP = String.fromCharCode(110,101,119,108,105,110,101,0);
    let complete_: Array<any> = [167, 775];
    let skipH = 1;
    let greyQ = String.fromCharCode(108,105,98,119,101,98,112,101,110,99,0);
    let icontransferclubI = true;
    let completeV = String.fromCharCode(112,114,101,115,101,114,118,101,115,0);
    let predictionarrowM = 3;
    let wifirouterO = 2.0;
    let policys = String.fromCharCode(105,108,111,103,0);
    let controlsP = 5.0;
    let submitR = String.fromCharCode(100,111,99,108,105,115,116,115,0);
    let libcrashsdkz = 1;
      greyQ += `${parseInt(`${zhengpianA}`) ^ 2}`;
       let orangeuparrow8 = String.fromCharCode(117,115,114,115,99,116,112,0);
          let pressurea = 4;
          let dangerd = 1.0;
         orangeuparrow8 = `${pressurea}`;
         pressurea /= Math.max(3, 1);
         dangerd += 1;
          let libavformatB = 2.0;
          let homeactiveG = String.fromCharCode(116,121,112,101,100,0);
         orangeuparrow8 += "1";
         libavformatB -= parseFloat(`${parseInt(`${libavformatB}`)}`);
         homeactiveG += `${parseInt(`${libavformatB}`)}`;
       let hooksk = 0.0;
       let assista = 2.0;
      complete_.push(smallorangemanr.size + parseInt(`${wifirouterO}`));
   for (let z = 0; z < 2; z++) {
       let shrunkE = 2.0;
       let confirmationr = String.fromCharCode(107,98,100,119,105,110,0);
       let projecth = 0.0;
         shrunkE *= confirmationr.length;
      if (confirmationr.startsWith(`${projecth}`)) {
         projecth /= Math.max(parseInt(`${shrunkE}`) & 2, 1);
      }
          let androidF = String.fromCharCode(113,116,114,108,101,0);
         confirmationr += `${confirmationr.length % 3}`;
         androidF = `${androidF.length}`;
      if ((confirmationr.length | 2) < 4 || (2 & confirmationr.length) < 1) {
          let owngoalc: Array<any> = [803, 524];
          let libapminsightap: Array<any> = [String.fromCharCode(117,110,101,115,99,97,112,105,110,103,0), String.fromCharCode(110,99,111,109,105,110,103,0)];
          let awayteamfieldE = 4.0;
          let whiteanimationlived = true;
          let middlebrightnessy = String.fromCharCode(99,108,117,115,116,101,114,0);
         shrunkE *= 2 >> (Math.min(Math.abs(parseInt(`${shrunkE}`)), 1));
         owngoalc = [((whiteanimationlived ? 5 : 4))];
         libapminsightap.push((middlebrightnessy.length / (Math.max(1, (whiteanimationlived ? 4 : 3)))));
         awayteamfieldE *= 1;
         middlebrightnessy = `${libapminsightap.length % 1}`;
      }
      if ((5.80 + projecth) > 4.57 && 1 > (confirmationr.length % 3)) {
         projecth *= parseInt(`${shrunkE}`);
      }
      let winda = confirmationr.length >= 7966082;
      do {
         confirmationr += "3";
         if (winda) {
            break;
         }
      } while (((confirmationr.length - parseInt(`${shrunkE}`)) < 4) && winda);
      while (1 >= (parseInt(`${shrunkE}`) + confirmationr.length)) {
         shrunkE += 3;
         break;
      }
         shrunkE /= Math.max(3, 2 % (Math.max(4, parseInt(`${projecth}`))));
      while (1.16 == (1.4 + projecth) || 2 == (confirmationr.length + parseInt(`${projecth}`))) {
         projecth /= Math.max(5, parseInt(`${shrunkE}`));
         break;
      }
      skipH ^= confirmationr.length;
   }
       let issubR = 4.0;
       let headerQ = String.fromCharCode(110,101,119,116,101,107,0);
          let libavformatv = true;
         issubR /= Math.max((parseFloat(`${(libavformatv ? 2 : 1) ^ parseInt(`${issubR}`)}`)), 5);
         issubR += parseFloat(`${parseInt(`${issubR}`) | headerQ.length}`);
      for (let v = 0; v < 3; v++) {
          let appsL = String.fromCharCode(105,116,101,109,115,0);
          let libjsinspectorl = 5.0;
          let watchnowbgF = String.fromCharCode(108,105,98,107,118,97,122,97,97,114,0);
          let stringsd = String.fromCharCode(105,100,101,109,112,111,116,101,110,99,121,0);
          let fieldZ = 1.0;
         headerQ += `${(headerQ == String.fromCharCode(74,0) ? parseInt(`${fieldZ}`) : headerQ.length)}`;
         appsL = `${appsL.length % 3}`;
         libjsinspectorl += parseFloat(`${appsL.length + parseInt(`${libjsinspectorl}`)}`);
         watchnowbgF = "2";
         stringsd += `${stringsd.length}`;
         fieldZ /= Math.max(4, parseFloat(`${parseInt(`${libjsinspectorl}`) - stringsd.length}`));
      }
      let gnewsshare6 = String.fromCharCode(101,52,95,114,49,105,0) == headerQ;
      do {
         headerQ += `${headerQ.length}`;
         if (gnewsshare6) {
            break;
         }
      } while (gnewsshare6 && ((issubR - parseFloat(`${headerQ.length}`)) >= 5.40 || (headerQ.length - parseInt(`${issubR}`)) >= 1));
         issubR *= parseFloat(`${parseInt(`${issubR}`)}`);
      if (4 <= (2 * headerQ.length) || (parseFloat(`${headerQ.length}`) - issubR) <= 1.41) {
         issubR /= Math.max((parseFloat(`${headerQ == String.fromCharCode(71,0) ? parseInt(`${issubR}`) : headerQ.length}`)), 2);
      }
      zhengpianA /= Math.max(1, parseFloat(`${policys.length ^ 1}`));
   while (policys.startsWith(`${skipH}`)) {
      policys += `${smallorangemanr.size}`;
      break;
   }

            dispatch(
              resumeVideoToDownloadThunk(
                download.vod,
                item.vodSourceId,
                item.vodUrlNid,
                download.vodIsAdult,
              ),
            );
          }, 500);
        }
      }
    }, 200)

  const renderItem = useCallback(({ item, index }: { item: yysEdit, index: number }) => {
    return <View style={styles.downloadItem}>
      {isEditing && (
        <TouchableOpacity
          style={styles.checkbox}
          onPress={() => toggleHistory(item)}
        >
          {removeHistory.some(x => (x.vodUrlNid === item.vodUrlNid && x.vodSourceId === item.vodSourceId)) ? (
            <CheckboxSelectedSvg height={icons.sizes.m} width={icons.sizes.m} />
          ) : (
            <CheckboxUnselectedSvg
              height={icons.sizes.m}
              width={icons.sizes.m}
            />
          )}
        </TouchableOpacity>
      )
      }
      <DownloadEpisodeDetailCard
        title={`${getEpisodeName(item.vodSourceId, item.vodUrlNid)} - ${getSourceName(item.vodSourceId, download.vodIsAdult)}`}
        progressPercentage={+item.progress.percentage.toFixed(0)}
        status={item.status}
        activeOpacity={isEditing ? 1 : 0.2}
        onPress={handleDownloadCardPress(item)}
      />
    </View>

  }, [removeHistory, isEditing])


  const totalDownloadSize = download.episodes.reduce((prev, curr) => { return prev + curr.sizeInBytes }, 0) / 1024 / 1024

  let allButtonText = ''
  let isButtonVisible = false
  let buttonIcon = <DownloadPauseYellowMiniSvg />
  if (download.episodes.every(x => x.status === IConfirmationLibffmpegkit.IPointStar)) {
    isButtonVisible = false
  } else if (download.episodes.some(x => x.status === IConfirmationLibffmpegkit.ICrown)) {
    isButtonVisible = true
    allButtonText = "全部暂停"
    buttonIcon = <DownloadPauseYellowMiniSvg />
  } else if (download.episodes.every(x => [IConfirmationLibffmpegkit.IRedirectLibyoga, IConfirmationLibffmpegkit.IRightTerms, IConfirmationLibffmpegkit.IPointStar].includes(x.status))) {
    isButtonVisible = true
    allButtonText = "全部下载"
    buttonIcon = <DownloadYellowMiniSvg />
  }


  const handleButtonPress = useCallback(
    debounce(() => {
       let mintegrali: Map<any, any> = new Map([[String.fromCharCode(109,112,101,103,118,105,100,101,111,100,115,112,0),String.fromCharCode(105,100,101,110,116,105,102,101,114,0)], [String.fromCharCode(116,104,101,114,101,0),String.fromCharCode(114,101,99,116,0)], [String.fromCharCode(99,97,114,0),String.fromCharCode(112,114,101,101,110,99,111,100,101,0)]]);
    let pageM = String.fromCharCode(115,104,117,116,116,105,110,103,0);
    let whistleorangeB = 4;
    let subbasketballplayerC: Map<any, any> = new Map([[String.fromCharCode(115,101,99,111,110,100,115,0),String.fromCharCode(119,111,114,107,115,0)], [String.fromCharCode(99,104,101,99,107,101,114,0),String.fromCharCode(116,109,109,98,114,0)]]);
    let muted4 = 4;
    let transferE = true;
    let internetg: Map<any, any> = new Map([[String.fromCharCode(109,109,120,101,120,116,0),615], [String.fromCharCode(117,110,112,114,111,116,101,99,116,0),917], [String.fromCharCode(111,108,100,101,114,0),782]]);
    let cornerkicku = false;
    let sigmob_ = String.fromCharCode(105,110,116,101,114,99,101,112,116,111,114,0);
    let whiteu = String.fromCharCode(110,101,103,111,116,105,97,116,101,0);
   for (let m = 0; m < 1; m++) {
      internetg.set(`${cornerkicku}`, internetg.size);
   }

      if (allButtonText === '全部暂停') {
        download.episodes
          .filter(x => x.status === IConfirmationLibffmpegkit.ICrown)
          .forEach((episodeDownload) => {
            dispatch(
              pauseVideoDownloadThunk(
                download.vod,
                episodeDownload.vodSourceId,
                episodeDownload.vodUrlNid,
              ),
            );
          });
      } else if (allButtonText === '全部下载') {
        download.episodes
          .filter(x => x.status === IConfirmationLibffmpegkit.IRedirectLibyoga || x.status === IConfirmationLibffmpegkit.IRightTerms)
          .forEach((episodeDownload) => {
            if (episodeDownload.status === IConfirmationLibffmpegkit.IRedirectLibyoga) {

   if (cornerkicku) {
      whistleorangeB |= 2;
   }
              dispatch(
                resumeVideoToDownloadThunk(
                  download.vod,
                  episodeDownload.vodSourceId,
                  episodeDownload.vodUrlNid,
                  download.vodIsAdult,
                ),
              );
            }
            if (episodeDownload.status === IConfirmationLibffmpegkit.IRightTerms) {

   for (let n = 0; n < 3; n++) {
      cornerkicku = internetg.size > 31 && cornerkicku;
   }
              dispatch(
                restartVideoDownloadThunk(
                  download.vod,
                  episodeDownload.vodSourceId,
                  episodeDownload.vodUrlNid,
                )
              )
            }
          });
      } else {
      }
      setIsLoading(false)
    }, 200),
    [allButtonText, download],
  );


  useEffect(() => {
    if (!isConnected) { 
      if (!state.currentDownloading) return
      const targetCurrentDownloading = state.currentDownloading.shift()
      if (!targetCurrentDownloading) return

      dispatch(manualKillVideoDownloadThunk( 
        download?.vod,
        targetCurrentDownloading.vodSourceId,
        targetCurrentDownloading.vodUrlNid,
      ))
    }
  }, [isConnected])

  return (
    <ScreenContainer>
      <TitleWithBackButtonHeader
        title={download.vod.vod_name}
        right={
          <Pressable
            onPress={() => {
              setIsEditing(!isEditing);
            }}>
            <Text
              style={{
                ...textVariants.body,
                opacity:
                  download.episodes && download.episodes.length > 0 ? 100 : 0,
              }}>
              {isEditing ? '取消' : '编辑'}
            </Text>
          </Pressable>
        }
      />
      <View style={styles.contentContainer}>
        <View style={styles.moreControlsContainer}>
          <View style={styles.moreControlsLeftContainer}>
            <TouchableOpacity
              style={isButtonVisible ? styles.downloadControlButton : styles.downloadControlButtonHidden}
              onPress={() => {
                setIsLoading(true)
                handleButtonPress()
              }}
            >
              <Text style={{ color: colors.muted, fontSize: 13, }}>
                {allButtonText}
              </Text>
              {buttonIcon}
            </TouchableOpacity>
            <Text
              style={{
                color: colors.muted,
                fontWeight: '400',
                fontFamily: 'PingFang SC',
              }}>
              已用{totalDownloadSize.toFixed(0)}MB
            </Text>
          </View>
          <Pressable style={styles.downloadMoreButton}>
            <Text
              style={{
                color: colors.muted,
                fontWeight: '400',
                fontFamily: 'PingFang SC',
                lineHeight: icons.sizes.m
              }}
            >下载更多</Text>
            <MoreArrowSvg style={{ height: icons.sizes.m, width: icons.sizes.m }} color={colors.muted} />
          </Pressable>
        </View>
        <View style={{ flex: 1 }}>
          <FlatList
            data={download.episodes.sort(
              (a, b) =>
                a.vodUrlNid - b.vodUrlNid || a.vodSourceId - b.vodSourceId,
            )}
            renderItem={renderItem}
            keyExtractor={item => {
              return `${download.vod.vod_id}-${item.vodSourceId}-${item.vodUrlNid}`;
            }}
            showsVerticalScrollIndicator={false}
          />
          {isLoading && <View style={styles.loadingOverlayContainer}>
            <FastImage
              source={LoadingGif}
              style={{
                width: 150,
                height: 150,
              }}
            />
          </View>}
        </View>

        <ConfirmationModal
          onConfirm={() => {
            if (isDeleteAll) {
              
              dispatch(removeVodFromDownloadThunk(download.vod, 0, 0))
              navigation.goBack()
            } else {
              
              for (const item of removeHistory) {
                dispatch(removeVideoFromDownloadThunk(download.vod, item.vodSourceId, item.vodUrlNid))
              }
            }
            setIsEditing(false);
            setRemoveHistory([]);
            toggleOverlay();
          }}
          onCancel={toggleOverlay}
          isVisible={isDialogOpen}
          title="清除提示"
          subtitle={deleteAlertText}
        />
        {isEditing && (
          <View style={styles.deleteConfirmationModal}>
            <Button
              onPress={() => {
                if (
                  removeHistory.length === 0 ||
                  removeHistory.length !== allEpisodes.length
                ) {
                  setRemoveHistory(allEpisodes.map(episodes => episodes));
                } else {
                  setRemoveHistory([]);
                }
              }}
              containerStyle={styles.confirmationBtn}
              color={colors.card2}
              titleStyle={{ ...textVariants.body, color: colors.muted }}
            >
              {removeHistory.length === 0 ||
                removeHistory.length !== allEpisodes.length
                ? "全选"
                : "取消全选"}
            </Button>
            <Button
              onPress={() => {
                if (removeHistory.length > 0) {
                  toggleOverlay();
                }
              }}
              containerStyle={styles.confirmationBtn}
              color={removeHistory.length === 0 ? colors.card2 : colors.primary}
              titleStyle={{
                ...textVariants.body,
                color:
                  removeHistory.length === 0 ? colors.muted : colors.background,
              }}
            >
              删除
            </Button>
          </View>
        )}
      </View>
    </ScreenContainer>
  );

}

export default DownloadDetails;

const styles = StyleSheet.create({
  downloadMoreButton: {
    flexDirection: "row",
    alignItems: 'center',
    display: 'none'
  },
  moreControlsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 6
  },
  moreControlsLeftContainer: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center'
  },
  downloadControlButton: {
    borderRadius: 22,
    borderColor: '#9C9C9C',
    borderWidth: 1,
    borderStyle: 'solid',
    gap: 5,
    paddingHorizontal: 12,
    paddingVertical: 3,
    flexDirection: 'row',
    alignContent: 'center',
  },
  downloadControlButtonHidden: {
    display: "none"
  },
  checkbox: {
    padding: 5,
  },
  downloadItem: {
    flexDirection: "row",
    alignItems: 'center',
    gap: 14
  },
  confirmationBtn: {
    flex: 1,
    margin: 10,
    borderRadius: 10,
    marginTop: 8,
  },
  deleteConfirmationModal: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 8,
  },
  contentContainer: {
    flex: 1
  },
  loadingOverlayContainer: {
    flex: 1,
    backgroundColor: '#161616A0',
    width: '100%',
    height: '100%',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center'
  }
})