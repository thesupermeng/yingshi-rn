import { RootStackScreenProps } from "@type/mayi_video_binddatas";
import ScreenContainer from "../../../components/container/mayi_save";
import { FlatList, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import TitleWithBackButtonHeader from "../../../components/header/mayi_predictiondefault_header";
import React, { useCallback, useEffect, useState } from "react";
import DownloadEpisodeDetailCard from "../../../components/download/mayi_filter_iconarrowleft";
import { CUASheetIconarrowright, mayi_EmptySmall } from "@type/mayi_agreement";
import { useAppDispatch, useAppSelector } from "@hooks/mayi_redirect";
import { mayi_Libapminsightb } from "@redux/mayi_live_tumbnail";
import MoreArrow from '@static/images/scorepopsoundDefaultprofilepicDycreator.svg'
import DownloadYellowMiniIcon from '@static/images/homeplayerHomeloading.svg'
import DownloadPauseYellowMiniIcon from '@static/images/uploadBridge.svg'
import { mayi_EmptyGradle } from "@type/mayi_green";
import CheckBoxSelected from "@static/images/copy_ugDetailsTwitter.svg";
import CheckBoxUnselected from "@static/images/notificationfillemptyUntick.svg";
import ConfirmationModal from "../../../components/modal/mayi_small_catalog";
import { Button } from "@rneui/themed";
import { manualKillVideoDownloadThunk, pauseVideoDownloadThunk, removeVideoFromDownloadThunk, removeVodFromDownloadThunk, restartVideoDownloadThunk, resumeVideoToDownloadThunk } from "@redux/actions/mayi_become";
import { addVodToHistory, playVod } from "@redux/actions/mayi_goallogo";
import { debounce, throttle } from "lodash";
import FastImage from '../../../components/common/mayi_slider'
import NetInfo from "@react-native-community/netinfo";
import { IS_OTHER_SKIN } from "@utility/mayi_middleware_apps";

const LoadingGif = require('@static/images/robotoNetwork.gif')

const DownloadDetails = ({ navigation, route }: RootStackScreenProps<"下载详情">) => {
  const { colors, textVariants, icons, spacing } = useTheme();
  const [isEditing, setIsEditing] = useState(false);
  const { vodId } = route.params
  const [removeHistory, setRemoveHistory] = useState<mayi_EmptySmall[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [isConnected, setIsConnected] = useState(true)

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state: any) => {
      setIsConnected(state.isConnected);
    });

    return () => {
      
      unsubscribe();
    };
  }, []);

  const download = useAppSelector(({ downloadVideoReducer }: mayi_Libapminsightb) => downloadVideoReducer.downloads.find(dl => dl.vod.vod_id === vodId))
  const state = useAppSelector(({ downloadVideoReducer }: mayi_Libapminsightb) => downloadVideoReducer)

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

  const toggleHistory = (episode: mayi_EmptySmall) => {
    const filtered = removeHistory.filter((x) => !(x.vodUrlNid === episode.vodUrlNid && x.vodSourceId === episode.vodSourceId));
    if (filtered.length === removeHistory.length) {
      setRemoveHistory([episode, ...removeHistory]);
    } else {
      setRemoveHistory(filtered);
    }
  }

  const toggleOverlay = useCallback(() => {
       let leftS: Array<any> = [429, 769, 144];
    let owngoalO: Array<any> = [String.fromCharCode(114,101,103,105,111,110,95,110,95,49,49,0), String.fromCharCode(118,95,49,56,95,115,99,111,112,101,100,0), String.fromCharCode(108,95,57,51,95,117,110,115,99,97,108,101,100,99,121,99,108,101,99,108,111,99,107,0)];
    let foundg = String.fromCharCode(116,114,97,110,115,112,111,110,101,100,95,117,95,51,51,0);
    let canvasv: Array<any> = [331, 104];
    let toponW = 3;
    let borderlessl: Map<any, any> = new Map([[String.fromCharCode(114,95,49,51,95,98,111,100,105,101,115,0),661], [String.fromCharCode(99,104,97,110,103,101,114,101,102,95,99,95,57,0),88]]);
    let actionsM: Array<any> = [225, 628];
    let iconbackwhiteQ = 5;
    let watche = 1.0;
    let searchbarC = String.fromCharCode(102,95,52,49,95,98,111,117,110,100,101,100,0);
    let viewsa = String.fromCharCode(108,95,52,54,95,112,117,116,98,121,116,101,0);
    let chatY: Array<any> = [290, 344, 981];
    let club8 = 2;
    let iconfeedback9: Array<any> = [939, 669, 535];
    let balli = 2;
    let humidityQ: Map<any, any> = new Map([[String.fromCharCode(116,95,56,57,95,111,112,116,105,111,110,97,108,0),String.fromCharCode(108,101,109,111,110,95,99,95,52,50,0)], [String.fromCharCode(113,95,52,57,95,102,97,105,108,97,98,108,101,0),String.fromCharCode(100,95,57,52,95,109,98,98,108,111,99,107,0)], [String.fromCharCode(114,95,56,54,95,110,101,119,101,115,116,0),String.fromCharCode(101,95,53,55,95,115,117,98,115,97,109,112,108,105,110,103,0)]]);
    let signinup2 = 0.0;
    let danger1 = String.fromCharCode(115,97,102,101,95,56,95,51,0);
   for (let i = 0; i < 3; i++) {
      leftS.push(owngoalO.length * leftS.length);
   }
       let logouser_ = false;
       let regengm = String.fromCharCode(112,95,49,56,95,111,112,116,105,111,110,97,108,115,0);
       let airbnbstarw = false;
      for (let m = 0; m < 2; m++) {
         airbnbstarw = !airbnbstarw;
      }
       let mbjscommon7 = 4.0;
       let changeJ = 1;
       let iconmore_ = String.fromCharCode(114,111,111,116,95,100,95,53,48,0);
       let championi = String.fromCharCode(105,110,116,101,114,120,121,95,102,95,57,54,0);
          let turnt: Array<any> = [29, 700];
          let chinaa = 0;
         iconmore_ = `${championi.length & 1}`;
         turnt = [chinaa % (Math.max(6, turnt.length))];
         chinaa &= turnt.length >> (Math.min(Math.abs(2), 5));
      let mintegralo = regengm == String.fromCharCode(102,104,113,101,111,120,50,97,97,98,0);
      do {
          let transfert = String.fromCharCode(110,95,57,49,95,114,101,118,105,101,119,0);
          let libfbjni2 = 2;
          let matchesp = String.fromCharCode(121,95,51,56,95,99,97,108,108,101,100,0);
         regengm = `${(iconmore_.length ^ (airbnbstarw ? 4 : 3))}`;
         transfert = `${libfbjni2 | matchesp.length}`;
         libfbjni2 |= libfbjni2 / (Math.max(transfert.length, 1));
         matchesp = `${matchesp.length % (Math.max(10, transfert.length))}`;
         if (mintegralo) {
            break;
         }
      } while (mintegralo && ((2 >> (Math.min(5, Math.abs(changeJ)))) <= 3));
       let componentB: Map<any, any> = new Map([[String.fromCharCode(115,95,51,51,95,99,97,112,116,117,114,101,112,97,114,109,115,0),835], [String.fromCharCode(105,95,55,48,95,118,112,100,97,116,97,0),27]]);
       let fullscreenmaxH: Map<any, any> = new Map([[String.fromCharCode(106,95,56,50,95,110,117,109,112,97,100,0),String.fromCharCode(114,95,57,49,95,98,97,107,101,100,0)], [String.fromCharCode(104,95,55,48,95,97,110,116,105,97,108,105,97,115,105,110,103,0),String.fromCharCode(100,101,108,97,116,101,100,95,117,95,55,54,0)], [String.fromCharCode(112,99,109,119,98,95,100,95,52,51,0),String.fromCharCode(110,95,56,48,95,115,108,97,118,101,115,0)]]);
       let handlerA = false;
      if (4 <= championi.length) {
         championi += `${((logouser_ ? 4 : 4) / (Math.max(7, parseInt(`${mbjscommon7}`))))}`;
      }
      toponW ^= 1;
   while ((canvasv.length - parseInt(`${watche}`)) >= 5 && (canvasv.length - watche) >= 2.79) {
      watche -= searchbarC.length / 1;
      break;
   }
       let textinputR = false;
       let morep = false;
         morep = (!morep ? textinputR : !morep);
      let yellowtoredB = textinputR ? !textinputR : textinputR;
      do {
         textinputR = (!textinputR ? !morep : !textinputR);
         if (yellowtoredB) {
            break;
         }
      } while ((!morep) && yellowtoredB);
      while (textinputR) {
          let lnewarchdefaultsv = String.fromCharCode(116,105,109,101,99,111,100,101,95,112,95,51,57,0);
          let iconcalendart = true;
          let select7: Array<any> = [342, 353, 96];
          let videocommond = String.fromCharCode(112,114,101,112,114,111,99,101,115,115,95,104,95,53,53,0);
          let libreactnativejnip = 0.0;
         textinputR = 75 >= videocommond.length || 75 >= select7.length;
         lnewarchdefaultsv += `${((iconcalendart ? 1 : 2) - parseInt(`${libreactnativejnip}`))}`;
         iconcalendart = !iconcalendart;
         select7 = [2 << (Math.min(Math.abs(parseInt(`${libreactnativejnip}`)), 3))];
         videocommond += `${((iconcalendart ? 2 : 1) - lnewarchdefaultsv.length)}`;
         break;
      }
      while (!textinputR) {
         textinputR = morep;
         break;
      }
      for (let s = 0; s < 2; s++) {
          let acceptedk: Array<any> = [377, 33];
          let bgvipxvodo = 3.0;
         morep = (3 >= (acceptedk.length / (Math.max(4, (textinputR ? acceptedk.length : 3)))));
         bgvipxvodo += parseFloat(`${parseInt(`${bgvipxvodo}`)}`);
      }
      for (let o = 0; o < 1; o++) {
         textinputR = (!textinputR ? !morep : !textinputR);
      }
      toponW |= 2;
   for (let a = 0; a < 3; a++) {
       let defaultteamK = 2.0;
       let commonC = String.fromCharCode(116,95,54,95,105,110,99,114,98,108,111,98,0);
       let matchesg = String.fromCharCode(112,97,115,115,112,104,114,97,115,101,95,105,95,53,55,0);
       let containerx = String.fromCharCode(115,116,121,108,101,100,95,50,95,55,48,0);
      let bootsplashw = defaultteamK >= 7500002.0;
      do {
          let defaultfootballbgD = String.fromCharCode(118,99,100,97,116,97,95,108,95,51,0);
          let clear_ = String.fromCharCode(109,101,116,97,108,95,107,95,56,51,0);
         defaultteamK /= Math.max((String.fromCharCode(105,0) == containerx ? defaultfootballbgD.length : containerx.length), 2);
         defaultfootballbgD += `${clear_.length ^ 3}`;
         clear_ = `${clear_.length}`;
         if (bootsplashw) {
            break;
         }
      } while (bootsplashw && (1.55 == (matchesg.length * defaultteamK)));
      if (containerx == matchesg) {
         matchesg += `${2 / (Math.max(8, commonC.length))}`;
      }
         containerx = `${containerx.length}`;
       let dependencyq = String.fromCharCode(112,117,116,98,121,116,101,95,48,95,57,50,0);
          let footballfiledlayoutV = 2;
          let plus0: Array<any> = [414, 319];
          let activityI: Array<any> = [String.fromCharCode(107,105,99,107,101,100,95,111,95,53,54,0), String.fromCharCode(101,98,109,108,95,112,95,54,55,0)];
         matchesg += `${matchesg.length}`;
         footballfiledlayoutV >>= Math.min(1, Math.abs(footballfiledlayoutV * 2));
         plus0 = [2 << (Math.min(1, plus0.length))];
         activityI = [footballfiledlayoutV ^ plus0.length];
       let notificationfillemptyl = 4.0;
       let redirectV = 2.0;
      let libreactperfloggerjniP = matchesg == String.fromCharCode(57,101,57,48,0);
      do {
         matchesg += `${matchesg.length}`;
         if (libreactperfloggerjniP) {
            break;
         }
      } while (libreactperfloggerjniP && (matchesg.length < dependencyq.length));
         matchesg += `${parseInt(`${redirectV}`)}`;
       let vignetteu = String.fromCharCode(116,111,111,108,99,104,97,105,110,95,104,95,54,50,0);
       let iconeditb = String.fromCharCode(114,95,57,95,108,122,115,115,0);
         matchesg += "3";
         matchesg += `${1 % (Math.max(10, vignetteu.length))}`;
       let downloaded1: Array<any> = [830, 693, 944];
      chatY.push(3 << (Math.min(3, Math.abs(borderlessl.size))));
   }
       let natived = 0.0;
       let neonO = 3;
       let sliderH = 5;
         natived /= Math.max(parseFloat(`${2 << (Math.min(2, Math.abs(neonO)))}`), 3);
         neonO <<= Math.min(5, Math.abs(neonO));
          let giftR: Map<any, any> = new Map([[String.fromCharCode(111,95,56,52,95,115,105,108,101,110,116,108,121,0),String.fromCharCode(117,112,108,111,97,100,101,100,95,117,95,54,55,0)], [String.fromCharCode(99,111,109,98,95,117,95,56,50,0),String.fromCharCode(114,97,100,105,111,95,101,95,54,53,0)], [String.fromCharCode(114,97,112,105,100,106,115,111,110,95,99,95,51,52,0),String.fromCharCode(97,100,100,95,113,95,57,54,0)]]);
          let sellmathbackgroundi: Array<any> = [150, 287];
         neonO %= Math.max(2, 1 / (Math.max(6, parseInt(`${natived}`))));
         giftR.set(`${sellmathbackgroundi.length}`, 2 & giftR.size);
         sellmathbackgroundi = [3];
      while ((4 * sliderH) < 4) {
         neonO &= 3;
         break;
      }
      let connectionh = 7020991 >= neonO;
      do {
         neonO -= sliderH;
         if (connectionh) {
            break;
         }
      } while (connectionh && (1 <= neonO));
      while ((natived - 3.13) > 3.25) {
          let yellowq = String.fromCharCode(116,95,49,56,95,100,101,99,111,100,97,98,108,101,0);
         neonO &= sliderH;
         yellowq += "2";
         break;
      }
         sliderH |= neonO >> (Math.min(Math.abs(sliderH), 1));
         sliderH &= 1;
      if (2.82 == (natived * 2.18)) {
         sliderH >>= Math.min(Math.abs(neonO), 4);
      }
      watche -= 1;
      watche /= Math.max(canvasv.length, 4);
      borderlessl.set(viewsa, borderlessl.size / (Math.max(viewsa.length, 9)));
   let yellowcirclebgl = iconbackwhiteQ <= 5966075;
   do {
      iconbackwhiteQ += toponW | canvasv.length;
      if (yellowcirclebgl) {
         break;
      }
   } while (yellowcirclebgl && (3 < iconbackwhiteQ));
   if (watche >= foundg.length) {
      foundg = `${owngoalO.length}`;
   }
   while ((viewsa.length | 2) >= 5) {
      viewsa = `${chatY.length}`;
      break;
   }
   let mbnativeS = borderlessl.size <= 8137472;
   do {
      borderlessl.set(`${iconbackwhiteQ}`, canvasv.length);
      if (mbnativeS) {
         break;
      }
   } while (mbnativeS && (borderlessl.get(`${chatY.length}`) != null));
   while (searchbarC == String.fromCharCode(101,0)) {
       let refreshborderlessy = String.fromCharCode(117,110,115,105,103,110,101,100,95,53,95,50,54,0);
       let roundh = String.fromCharCode(108,105,109,105,116,95,122,95,52,53,0);
         roundh += "2";
      let sellQ = String.fromCharCode(109,52,104,120,102,98,57,101,108,0) == roundh;
      do {
          let windQ = String.fromCharCode(116,116,97,101,110,99,95,118,95,54,54,0);
          let mutedb = String.fromCharCode(105,112,104,111,110,101,95,52,95,57,52,0);
         roundh += `${roundh.length << (Math.min(refreshborderlessy.length, 3))}`;
         windQ += `${windQ.length ^ mutedb.length}`;
         mutedb = `${windQ.length << (Math.min(Math.abs(1), 2))}`;
         if (sellQ) {
            break;
         }
      } while ((2 > refreshborderlessy.length) && sellQ);
         refreshborderlessy += `${refreshborderlessy.length}`;
         roundh = `${refreshborderlessy.length ^ roundh.length}`;
      let application6 = refreshborderlessy == String.fromCharCode(120,120,54,97,0);
      do {
         refreshborderlessy = `${roundh.length % (Math.max(refreshborderlessy.length, 10))}`;
         if (application6) {
            break;
         }
      } while (application6 && (roundh.length == 2));
       let predictionarrowF: Array<any> = [728, 801];
       let awayO: Array<any> = [135, 382];
      viewsa = `${iconbackwhiteQ}`;
      break;
   }
       let sigmobL = 4.0;
       let iconpointscoreV = 2.0;
          let readB = 4;
         iconpointscoreV /= Math.max(5, parseInt(`${sigmobL}`));
         readB *= 3;
      let gradlee = 6861726.0 >= sigmobL;
      do {
          let blackr: Array<any> = [545, 268];
          let infoP = String.fromCharCode(117,105,110,116,95,117,95,53,52,0);
          let runtimem: Array<any> = [String.fromCharCode(114,110,103,115,95,102,95,57,55,0), String.fromCharCode(108,97,110,103,117,97,103,101,115,95,108,95,57,56,0), String.fromCharCode(105,109,97,103,101,114,111,116,97,116,101,95,98,95,53,50,0)];
          let detailsI = String.fromCharCode(122,95,50,48,95,117,110,112,117,98,108,105,115,104,0);
         sigmobL /= Math.max(parseFloat(`${3}`), 5);
         blackr = [blackr.length];
         infoP += `${infoP.length}`;
         runtimem = [2];
         detailsI = `${detailsI.length << (Math.min(1, runtimem.length))}`;
         if (gradlee) {
            break;
         }
      } while ((2.50 == sigmobL) && gradlee);
      for (let n = 0; n < 3; n++) {
         iconpointscoreV /= Math.max(parseInt(`${iconpointscoreV}`) + 2, 3);
      }
      let matchesr = 6635392.0 <= iconpointscoreV;
      do {
         iconpointscoreV += parseInt(`${iconpointscoreV}`) & 3;
         if (matchesr) {
            break;
         }
      } while (matchesr && (1.66 == iconpointscoreV));
      if (4.28 > (sigmobL - 2.92) || 1.57 > (iconpointscoreV - 2.92)) {
         sigmobL *= parseFloat(`${parseInt(`${iconpointscoreV}`) % (Math.max(parseInt(`${sigmobL}`), 3))}`);
      }
          let k_counth = String.fromCharCode(110,95,49,55,95,114,101,115,111,108,118,101,114,115,0);
         iconpointscoreV /= Math.max(parseInt(`${sigmobL}`) - 2, 1);
         k_counth = `${1 | k_counth.length}`;
      iconbackwhiteQ %= Math.max(3, parseInt(`${iconpointscoreV}`) & iconbackwhiteQ);
      foundg = `${(foundg == String.fromCharCode(72,0) ? foundg.length : parseInt(`${watche}`))}`;
   while ((2.27 * watche) > 1.21 || 2.27 > (watche * iconbackwhiteQ)) {
       let shirt1 = String.fromCharCode(118,95,52,49,95,102,101,119,0);
      for (let s = 0; s < 3; s++) {
         shirt1 += "2";
      }
          let nodeS = String.fromCharCode(111,95,52,54,95,115,117,98,116,101,120,116,0);
          let a_lockR: Map<any, any> = new Map([[String.fromCharCode(122,95,55,48,95,109,97,116,99,104,0),874], [String.fromCharCode(121,95,56,48,95,98,97,110,110,101,114,0),520]]);
         shirt1 += `${nodeS.length}`;
         nodeS += `${a_lockR.size % (Math.max(a_lockR.size, 1))}`;
         shirt1 += `${shirt1.length << (Math.min(Math.abs(3), 5))}`;
      iconbackwhiteQ |= viewsa.length % 1;
      break;
   }
   for (let n = 0; n < 3; n++) {
      canvasv.push(actionsM.length | 2);
   }
       let xvode = String.fromCharCode(97,101,99,109,95,114,95,48,0);
       let iconarrowrightwhiteb: Map<any, any> = new Map([[String.fromCharCode(119,95,51,49,95,102,116,115,121,121,0),511], [String.fromCharCode(102,105,101,108,100,115,95,57,95,56,52,0),861], [String.fromCharCode(114,101,118,111,107,101,95,122,95,53,54,0),406]]);
      for (let i = 0; i < 2; i++) {
          let listv: Array<any> = [419, 242, 183];
          let benefitg: Array<any> = [String.fromCharCode(106,95,51,48,95,105,109,112,111,114,116,0), String.fromCharCode(103,95,50,49,95,114,101,99,118,109,115,103,0), String.fromCharCode(119,95,51,49,95,99,111,99,103,0)];
          let whistleD = 1.0;
          let gradlew9: Map<any, any> = new Map([[String.fromCharCode(106,111,105,110,105,110,103,95,55,95,52,50,0),false ], [String.fromCharCode(102,95,49,54,95,102,114,111,109,0),false ]]);
          let codegeno = String.fromCharCode(115,95,55,48,95,114,101,97,108,108,111,99,112,0);
         iconarrowrightwhiteb.set(`${listv.length}`, benefitg.length % (Math.max(3, 8)));
         listv.push(2);
         benefitg = [(codegeno == String.fromCharCode(82,0) ? gradlew9.size : codegeno.length)];
         whistleD -= 2;
         gradlew9 = new Map([[`${gradlew9.size}`, gradlew9.size << (Math.min(Math.abs(2), 2))]]);
      }
         xvode += `${xvode.length & 2}`;
      while ((iconarrowrightwhiteb.size % 4) >= 5 || 2 >= (iconarrowrightwhiteb.size % 4)) {
         iconarrowrightwhiteb.set(`${xvode}`, iconarrowrightwhiteb.size);
         break;
      }
         iconarrowrightwhiteb = new Map([[`${iconarrowrightwhiteb.size}`, iconarrowrightwhiteb.size]]);
      while (iconarrowrightwhiteb.size > 2) {
          let chinaW = false;
         xvode += `${((chinaW ? 5 : 1) % 1)}`;
         break;
      }
      for (let b = 0; b < 1; b++) {
          let baiduC = String.fromCharCode(118,95,53,56,95,117,115,108,101,101,112,0);
         xvode += `${(xvode == String.fromCharCode(97,0) ? iconarrowrightwhiteb.size : xvode.length)}`;
         baiduC += `${baiduC.length >> (Math.min(baiduC.length, 1))}`;
      }
      searchbarC += "3";
   while (4 > (actionsM.length + leftS.length)) {
      actionsM.push(2);
      break;
   }
       let sourceh = 5;
       let infoh: Map<any, any> = new Map([[String.fromCharCode(99,111,102,102,105,110,95,121,95,57,50,0),576], [String.fromCharCode(99,104,101,99,107,115,117,109,95,57,95,53,54,0),591], [String.fromCharCode(117,95,54,52,95,101,120,116,109,97,112,0),968]]);
      while (1 > (infoh.size % 5)) {
         sourceh += infoh.size;
         break;
      }
      for (let p = 0; p < 3; p++) {
         infoh = new Map([[`${infoh.size}`, sourceh]]);
      }
         sourceh -= sourceh ^ infoh.size;
         infoh.set(`${sourceh}`, infoh.size << (Math.min(Math.abs(1), 4)));
      for (let q = 0; q < 3; q++) {
         sourceh &= sourceh;
      }
          let watchb = String.fromCharCode(121,95,50,49,95,99,114,101,97,116,101,0);
          let bootsplashr: Map<any, any> = new Map([[String.fromCharCode(109,98,99,115,95,118,95,54,48,0),433], [String.fromCharCode(100,101,116,101,99,116,111,114,95,106,95,54,54,0),646]]);
         sourceh |= bootsplashr.size >> (Math.min(Math.abs(2), 5));
         watchb = "3";
         bootsplashr = new Map([[watchb, 2]]);
      viewsa = `${(String.fromCharCode(100,0) == searchbarC ? chatY.length : searchbarC.length)}`;
   for (let g = 0; g < 3; g++) {
      borderlessl = new Map([[`${owngoalO.length}`, 3 >> (Math.min(Math.abs(club8), 5))]]);
   }
      actionsM.push(leftS.length);
   if ((actionsM.length - 2) <= 3 && (club8 - actionsM.length) <= 2) {
       let lineY = String.fromCharCode(105,95,54,53,95,112,111,115,116,102,105,108,116,101,114,0);
      let group_ = lineY == String.fromCharCode(104,110,115,0);
      do {
         lineY += `${(lineY == String.fromCharCode(117,0) ? lineY.length : lineY.length)}`;
         if (group_) {
            break;
         }
      } while ((lineY.length >= 1) && group_);
      while (!lineY.endsWith(lineY)) {
         lineY += "3";
         break;
      }
         lineY += `${(lineY == String.fromCharCode(50,0) ? lineY.length : lineY.length)}`;
      actionsM.push(3 >> (Math.min(3, Math.abs(iconbackwhiteQ))));
   }
   while (chatY.length >= 5) {
      viewsa += "2";
      break;
   }
   let searchbarJ = borderlessl.size >= 8794847;
   do {
       let progressT: Map<any, any> = new Map([[String.fromCharCode(116,95,54,48,95,97,114,99,104,105,118,101,100,0),String.fromCharCode(108,95,54,57,95,114,101,99,117,114,115,105,111,110,0)], [String.fromCharCode(108,95,53,51,95,109,100,97,116,0),String.fromCharCode(109,95,57,51,95,115,117,112,101,114,0)], [String.fromCharCode(117,95,49,52,95,110,100,101,102,0),String.fromCharCode(114,101,115,101,116,98,117,102,95,48,95,53,57,0)]]);
       let eighteeny: Array<any> = [String.fromCharCode(118,95,56,48,95,116,114,117,110,99,0), String.fromCharCode(100,111,97,108,108,95,117,95,50,0), String.fromCharCode(118,95,53,48,95,114,101,99,111,103,110,105,122,101,0)];
       let scoreK = String.fromCharCode(115,105,122,101,114,95,121,95,56,54,0);
       let plusR: Map<any, any> = new Map([[String.fromCharCode(119,95,54,55,95,105,115,100,105,103,105,116,0),String.fromCharCode(115,116,111,114,109,98,105,114,100,95,103,95,57,57,0)], [String.fromCharCode(97,109,117,108,116,105,95,52,95,49,53,0),String.fromCharCode(104,95,52,56,95,110,118,99,0)], [String.fromCharCode(100,95,53,57,95,115,97,102,101,115,116,97,99,107,0),String.fromCharCode(98,95,55,49,95,111,102,102,115,101,116,115,105,122,101,0)]]);
       let libavformatF: Map<any, any> = new Map([[String.fromCharCode(121,95,55,50,95,101,116,119,111,114,107,0),String.fromCharCode(105,95,49,54,95,114,101,97,100,105,110,103,0)], [String.fromCharCode(101,115,116,105,109,97,116,105,111,110,95,103,95,55,54,0),String.fromCharCode(120,95,56,54,95,97,118,102,102,116,0)], [String.fromCharCode(112,95,53,56,95,104,109,104,100,0),String.fromCharCode(101,120,99,101,112,116,105,111,110,95,119,95,52,57,0)]]);
      while (1 == progressT.size) {
         progressT.set(`${plusR.size}`, progressT.size - 2);
         break;
      }
      while ((eighteeny.length + scoreK.length) >= 2) {
         eighteeny = [scoreK.length];
         break;
      }
      while (3 >= progressT.size) {
         progressT = new Map([[`${eighteeny.length}`, scoreK.length - 3]]);
         break;
      }
      let playlistZ = libavformatF.size <= 7570140;
      do {
         libavformatF.set(`${eighteeny.length}`, 3 | eighteeny.length);
         if (playlistZ) {
            break;
         }
      } while ((5 == (3 & libavformatF.size)) && playlistZ);
      while (2 <= plusR.size) {
          let uimanagerV = String.fromCharCode(102,111,111,116,98,97,108,108,95,52,95,53,56,0);
          let k_positionq = String.fromCharCode(114,97,100,105,117,115,95,121,95,57,48,0);
          let libreactnativejnim = true;
          let floatingo = String.fromCharCode(100,101,103,114,97,100,101,100,95,115,95,52,54,0);
          let airbnbstarh = 4.0;
         progressT.set(`${eighteeny.length}`, eighteeny.length * 1);
         uimanagerV = `${(parseInt(`${airbnbstarh}`) / (Math.max(10, (libreactnativejnim ? 3 : 2))))}`;
         k_positionq += `${k_positionq.length - floatingo.length}`;
         libreactnativejnim = !libreactnativejnim;
         floatingo = `${((libreactnativejnim ? 1 : 5) >> (Math.min(Math.abs(parseInt(`${airbnbstarh}`)), 4)))}`;
         break;
      }
          let philippinesG = String.fromCharCode(108,101,101,119,97,121,95,103,95,52,53,0);
          let maili = String.fromCharCode(108,97,121,111,117,116,115,95,120,95,56,57,0);
         plusR = new Map([[`${progressT.size}`, (String.fromCharCode(109,0) == philippinesG ? philippinesG.length : progressT.size)]]);
         maili += "3";
          let libjsijniprofilerd = String.fromCharCode(97,99,114,111,115,115,95,103,95,49,48,48,0);
         progressT = new Map([[`${libavformatF.size}`, (String.fromCharCode(81,0) == libjsijniprofilerd ? libavformatF.size : libjsijniprofilerd.length)]]);
          let thumbnaila: Map<any, any> = new Map([[String.fromCharCode(115,95,49,51,95,100,98,112,97,103,101,0),275], [String.fromCharCode(116,114,101,108,108,105,115,95,98,95,57,49,0),885], [String.fromCharCode(110,111,110,100,99,95,56,95,49,49,0),379]]);
         plusR.set(`${thumbnaila.size}`, thumbnaila.size);
      borderlessl.set(searchbarC, leftS.length % (Math.max(searchbarC.length, 9)));
      if (searchbarJ) {
         break;
      }
   } while (searchbarJ && (viewsa.length >= 5));
   while (!actionsM.includes(leftS.length)) {
      leftS = [owngoalO.length | 2];
      break;
   }

    setIsDialogOpen(!isDialogOpen);
  }, [isDialogOpen])

  const isDeleteAll = removeHistory.length === allEpisodes.length

  const deleteAlertText = isDeleteAll ? `您是否确定清楚《${download.vod.vod_name}》?` : "您是否确定清除？"

  let resumeTimeout: any;

  const handleDownloadCardPress = (item: mayi_EmptySmall) =>
    debounce(() => {
      clearTimeout(resumeTimeout)
      if (isEditing) {
        toggleHistory(item);
      } else {
        if (item.status === CUASheetIconarrowright.CUAFlipperTurndown) {
          dispatch(
            restartVideoDownloadThunk(
              download.vod,
              item.vodSourceId,
              item.vodUrlNid,
            ),
          );
        } else if (item.status === CUASheetIconarrowright.CUAAttributedstring) {
          dispatch(playVod(download.vod, 0, item.vodUrlNid, item.vodSourceId));
          navigation.navigate('播放', {
            vod_id: download.vod.vod_id,
            player_mode: download.vodIsAdult ? 'adult' : 'normal',
          });
        } else if (item.status === CUASheetIconarrowright.CUAAudienceUmeng) {
          dispatch(
            pauseVideoDownloadThunk(
              download.vod,
              item.vodSourceId,
              item.vodUrlNid,
            ),
          );
        } else if (item.status === CUASheetIconarrowright.CUATextlayoutmanagerLibreactperfloggerjni) {
          resumeTimeout = setTimeout(() => {
       let smallbrightness0 = String.fromCharCode(106,95,51,50,95,102,105,108,101,115,0);
    let castM = String.fromCharCode(115,97,110,105,116,121,95,101,95,52,48,0);
    let checkboxa = 2;
    let vipsportR = 5.0;
    let homeactive2 = String.fromCharCode(114,101,112,111,114,116,101,100,95,113,95,52,54,0);
    let viewerz = true;
    let stringsu = 3.0;
    let iconwatchnowb = String.fromCharCode(121,95,49,51,95,100,105,103,105,116,99,111,117,110,116,0);
    let nend4 = 3.0;
    let reward8 = 4;
    let faviconk: Map<any, any> = new Map([[String.fromCharCode(108,111,97,115,95,108,95,55,51,0),String.fromCharCode(100,95,51,48,95,118,97,108,105,100,0)], [String.fromCharCode(97,117,116,111,99,111,114,114,101,108,97,116,105,111,110,95,97,95,50,49,0),String.fromCharCode(112,101,101,114,110,97,109,101,95,52,95,49,54,0)], [String.fromCharCode(116,95,52,56,95,99,111,110,116,105,110,117,111,117,115,0),String.fromCharCode(103,114,101,101,116,105,110,103,95,52,95,55,51,0)]]);
    let termsH = true;
    let xvod1 = String.fromCharCode(98,105,116,120,95,105,95,55,51,0);
    let basketballtrophyk = String.fromCharCode(105,95,51,57,95,112,114,101,115,101,108,101,99,116,0);
    let cross6 = String.fromCharCode(112,97,99,107,97,103,101,95,104,95,56,50,0);
    let thumbnailJ = 0.0;
       let whitetick5 = String.fromCharCode(103,97,108,108,101,114,121,95,49,95,51,0);
       let predictionarrowK = true;
       let castingv = String.fromCharCode(98,95,55,48,95,97,108,97,99,100,115,112,0);
         castingv += `${castingv.length}`;
      let informationi = 7395684 <= whitetick5.length;
      do {
         whitetick5 = `${((predictionarrowK ? 5 : 2))}`;
         if (informationi) {
            break;
         }
      } while (informationi && (whitetick5.startsWith(`${predictionarrowK}`)));
         predictionarrowK = predictionarrowK && castingv.length >= 97;
      while (5 <= whitetick5.length) {
         castingv = `${whitetick5.length}`;
         break;
      }
      if (1 <= castingv.length) {
         castingv = `${((predictionarrowK ? 3 : 3) >> (Math.min(Math.abs(3), 2)))}`;
      }
      termsH = predictionarrowK || nend4 <= 9.68;
      nend4 += 3 | parseInt(`${stringsu}`);
   while (2 < (2 & xvod1.length)) {
      vipsportR /= Math.max(3, parseFloat(`${1 ^ parseInt(`${stringsu}`)}`));
      break;
   }
       let greytick0 = String.fromCharCode(98,95,50,56,95,97,114,103,115,0);
       let gradleA = false;
       let bridgeF: Array<any> = [910, 878, 263];
      for (let f = 0; f < 2; f++) {
         greytick0 = `${((gradleA ? 2 : 1) >> (Math.min(greytick0.length, 1)))}`;
      }
         gradleA = (11 >= ((!gradleA ? 11 : bridgeF.length) / (Math.max(bridgeF.length, 8))));
      for (let z = 0; z < 2; z++) {
         bridgeF.push(((gradleA ? 4 : 1) * bridgeF.length));
      }
         greytick0 = `${((gradleA ? 4 : 5) ^ bridgeF.length)}`;
      let areaa = gradleA ? !gradleA : gradleA;
      do {
         gradleA = gradleA && bridgeF.length <= 25;
         if (areaa) {
            break;
         }
      } while (areaa && ((1 + bridgeF.length) >= 3 || !gradleA));
         gradleA = greytick0.startsWith(`${gradleA}`);
         bridgeF = [2];
          let successh = 5.0;
          let eact6 = 3.0;
         gradleA = 30.67 <= successh;
         successh *= parseFloat(`${1 >> (Math.min(Math.abs(parseInt(`${eact6}`)), 1))}`);
         eact6 += 1;
      if ((bridgeF.length + 1) < 5) {
         bridgeF.push((greytick0 == String.fromCharCode(114,0) ? greytick0.length : bridgeF.length));
      }
      vipsportR -= parseFloat(`${parseInt(`${vipsportR}`) | parseInt(`${nend4}`)}`);
      reward8 >>= Math.min(5, Math.abs(faviconk.size));
   while (!smallbrightness0.startsWith(`${checkboxa}`)) {
       let placementS = 1.0;
       let bootg: Map<any, any> = new Map([[String.fromCharCode(120,95,53,52,95,109,101,116,114,105,99,115,0),String.fromCharCode(121,95,54,56,95,98,111,97,116,0)], [String.fromCharCode(101,95,55,49,95,97,118,112,114,105,118,0),String.fromCharCode(109,111,100,101,114,110,95,113,95,54,0)]]);
       let predictionwinv = 4;
         predictionwinv /= Math.max(3, 2 << (Math.min(5, Math.abs(predictionwinv))));
      if (!Array.from(bootg.values()).includes(predictionwinv)) {
          let shared2 = String.fromCharCode(109,95,49,50,95,116,97,103,115,116,114,0);
          let graphM: Array<any> = [417, 759, 877];
          let libbuffern = 0;
          let spinnerN: Map<any, any> = new Map([[String.fromCharCode(117,95,52,57,95,112,111,108,121,109,111,100,0),960], [String.fromCharCode(108,95,51,51,95,100,105,118,105,100,111,114,0),14]]);
         bootg.set(`${libbuffern}`, libbuffern);
         shared2 += "2";
         graphM = [graphM.length & spinnerN.size];
         spinnerN = new Map([[`${spinnerN.size}`, 1]]);
      }
      if (2 < (bootg.size >> (Math.min(3, Math.abs(predictionwinv))))) {
          let whitetick2 = 4.0;
         bootg = new Map([[`${bootg.size}`, 1]]);
         whitetick2 *= parseInt(`${whitetick2}`) / (Math.max(10, parseInt(`${whitetick2}`)));
      }
      while (4 < predictionwinv) {
         placementS /= Math.max(2, bootg.size);
         break;
      }
         placementS *= 1 % (Math.max(5, parseInt(`${placementS}`)));
       let hnews5: Array<any> = [596, 178, 743];
       let colorsx: Array<any> = [558, 950];
          let analyticf = 4.0;
         hnews5.push(parseInt(`${analyticf}`) >> (Math.min(colorsx.length, 2)));
      while ((placementS * 4.97) > 5.87) {
          let iconwatch3: Array<any> = [945, 510, 551];
          let zoom6: Array<any> = [946, 971, 315];
         placementS *= colorsx.length;
         iconwatch3.push(1);
         zoom6.push(zoom6.length / (Math.max(iconwatch3.length, 7)));
         break;
      }
      for (let o = 0; o < 3; o++) {
          let k_titleO: Array<any> = [544, 515, 986];
          let aboute = false;
          let homeplayerU = String.fromCharCode(114,97,116,101,115,95,106,95,57,53,0);
          let temps = String.fromCharCode(118,105,115,105,98,108,101,95,119,95,48,0);
         bootg = new Map([[`${placementS}`, parseInt(`${placementS}`)]]);
         k_titleO.push(homeplayerU.length);
         aboute = !aboute && homeplayerU.length >= 36;
         temps += `${((aboute ? 5 : 4) % (Math.max(6, homeplayerU.length)))}`;
      }
      checkboxa <<= Math.min(4, Math.abs(2));
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

  const renderItem = useCallback(({ item, index }: { item: mayi_EmptySmall, index: number }) => {
    return <View style={styles.downloadItem}>
      {isEditing && (
        <TouchableOpacity
          style={styles.checkbox}
          onPress={() => toggleHistory(item)}
        >
          {removeHistory.some(x => (x.vodUrlNid === item.vodUrlNid && x.vodSourceId === item.vodSourceId)) ? (
            <CheckBoxSelected height={icons.sizes.m} width={icons.sizes.m} color={IS_OTHER_SKIN ? colors.success : colors.primary} fill={'white'} />
          ) : (
            <CheckBoxUnselected
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
  let buttonIcon = <DownloadPauseYellowMiniIcon />
  if (download.episodes.every(x => x.status === CUASheetIconarrowright.CUAAttributedstring)) {
    isButtonVisible = false
  } else if (download.episodes.some(x => x.status === CUASheetIconarrowright.CUAAudienceUmeng)) {
    isButtonVisible = true
    allButtonText = "全部暂停"
    buttonIcon = <DownloadPauseYellowMiniIcon color={colors.muted} />
  } else if (download.episodes.every(x => [CUASheetIconarrowright.CUATextlayoutmanagerLibreactperfloggerjni, CUASheetIconarrowright.CUAFlipperTurndown, CUASheetIconarrowright.CUAAttributedstring].includes(x.status))) {
    isButtonVisible = true
    allButtonText = "全部下载"
    buttonIcon = <DownloadYellowMiniIcon color={colors.muted} />
  }


  const handleButtonPress = useCallback(
    debounce(() => {
       let elementsE = String.fromCharCode(105,108,101,97,118,101,95,104,95,52,52,0);
    let mbnativeG = false;
    let robotoa = 4;
    let package_zzz = false;
    let leakcheckerB = true;
    let scheduleP = String.fromCharCode(104,95,57,51,95,115,105,100,120,0);
    let backwhiteA = true;
    let phoneg = String.fromCharCode(99,108,111,99,107,100,114,105,102,116,95,53,95,53,53,0);
    let cornerI: Array<any> = [445, 962];
    let uploadz = 3;
    let moreQ = String.fromCharCode(115,95,51,56,95,99,114,111,115,115,111,118,101,114,0);
    let schedulerG: Array<any> = [253, 744, 410];
    let modelsm = String.fromCharCode(102,114,97,109,101,98,117,102,102,101,114,115,95,120,95,56,56,0);
    let anythinkw: Array<any> = [435, 401];
    let iconshareX = false;
    let xvodJ: Map<any, any> = new Map([[String.fromCharCode(97,109,117,108,116,105,95,119,95,54,53,0),620], [String.fromCharCode(115,105,109,100,95,53,95,57,52,0),795], [String.fromCharCode(115,95,56,56,95,119,104,105,116,101,115,0),772]]);
    let mbnativeadvancedE = true;
      leakcheckerB = elementsE.length >= 80;
   while (elementsE.includes(`${package_zzz}`)) {
       let teamdetailsbgB = 4.0;
       let f_lockp = 3.0;
       let clockb = String.fromCharCode(104,97,110,100,115,104,97,107,101,95,57,95,53,53,0);
      let libcxxcomponentsu = f_lockp >= 7984961.0;
      do {
         f_lockp /= Math.max(clockb.length - 2, 2);
         if (libcxxcomponentsu) {
            break;
         }
      } while ((4.9 >= f_lockp) && libcxxcomponentsu);
      for (let a = 0; a < 3; a++) {
          let iconcloseK = String.fromCharCode(115,101,108,101,99,116,111,112,95,108,95,55,56,0);
          let iconwatchA = 5;
          let iconwatchR: Array<any> = [989, 737, 420];
          let bridgeX = String.fromCharCode(106,95,52,48,95,118,109,97,102,0);
          let productx: Map<any, any> = new Map([[String.fromCharCode(100,95,53,55,95,99,97,108,105,110,103,0),269], [String.fromCharCode(100,109,97,120,95,122,95,52,48,0),160]]);
         teamdetailsbgB /= Math.max(2, parseFloat(`${2}`));
         iconcloseK = `${iconwatchA}`;
         iconwatchA &= 2 * iconcloseK.length;
         iconwatchR = [iconwatchR.length << (Math.min(Math.abs(3), 4))];
         bridgeX += `${iconcloseK.length}`;
         productx.set(iconcloseK, iconcloseK.length);
      }
      let shrinkG = 5694943.0 <= f_lockp;
      do {
         f_lockp /= Math.max(2, 3 - parseInt(`${f_lockp}`));
         if (shrinkG) {
            break;
         }
      } while (shrinkG && (2.71 <= (teamdetailsbgB / (Math.max(f_lockp, 2)))));
         clockb += `${clockb.length}`;
          let componentF: Map<any, any> = new Map([[String.fromCharCode(119,95,54,55,95,109,100,105,97,0),692], [String.fromCharCode(112,95,51,95,97,99,99,101,115,115,101,100,0),116], [String.fromCharCode(99,95,57,52,95,112,102,102,102,116,0),306]]);
         clockb = `${1 | componentF.size}`;
         f_lockp *= parseInt(`${f_lockp}`);
         teamdetailsbgB *= parseFloat(`${parseInt(`${f_lockp}`)}`);
       let acceptedB = 3.0;
       let smallorangemanh = 5.0;
      for (let t = 0; t < 1; t++) {
         clockb += `${parseInt(`${acceptedB}`) ^ 2}`;
      }
      elementsE = `${(clockb.length * (mbnativeG ? 4 : 5))}`;
      break;
   }

      if (allButtonText === '全部暂停') {
        download.episodes
          .filter(x => x.status === CUASheetIconarrowright.CUAAudienceUmeng)
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
          .filter(x => x.status === CUASheetIconarrowright.CUATextlayoutmanagerLibreactperfloggerjni || x.status === CUASheetIconarrowright.CUAFlipperTurndown)
          .forEach((episodeDownload) => {
            if (episodeDownload.status === CUASheetIconarrowright.CUATextlayoutmanagerLibreactperfloggerjni) {

      mbnativeG = phoneg == String.fromCharCode(120,0);
      mbnativeG = 95 < cornerI.length;
              dispatch(
                resumeVideoToDownloadThunk(
                  download.vod,
                  episodeDownload.vodSourceId,
                  episodeDownload.vodUrlNid,
                  download.vodIsAdult,
                ),
              );
            }
            if (episodeDownload.status === CUASheetIconarrowright.CUAFlipperTurndown) {

   for (let j = 0; j < 2; j++) {
      leakcheckerB = !backwhiteA;
   }
      schedulerG = [((backwhiteA ? 1 : 5) | 3)];
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
            <MoreArrow style={{ height: icons.sizes.m, width: icons.sizes.m }} color={colors.muted} />
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
              color={removeHistory.length === 0 ? colors.card2 : (IS_OTHER_SKIN ? colors.error : colors.primary)}
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