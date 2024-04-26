import { RootStackScreenProps } from "@type/wawa_iconnewchat";
import ScreenContainer from "../../../components/container/wawa_nterstitial_iconpipexpand";
import { FlatList, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import TitleWithBackButtonHeader from "../../../components/header/wawa_matchinactive_header";
import React, { useCallback, useEffect, useState } from "react";
import DownloadEpisodeDetailCard from "../../../components/download/wawa_static";
import { KVCarouselSort, wawaGemfileFinal } from "@type/wawa_emojiheart_alert";
import { useAppDispatch, useAppSelector } from "@hooks/wawa_root";
import { wawaIconsubssuccess } from "@redux/wawa_bgvipsport_spinner";
import MoreArrow from '@static/images/combinePredictionbuttonSelect.svg'
import DownloadYellowMiniIcon from '@static/images/reactnativeratingsShirt.svg'
import DownloadPauseYellowMiniIcon from '@static/images/newinterstitialIcon.svg'
import { wawaSellProfileinactive } from "@type/wawa_gradlew";
import CheckBoxSelected from "@static/images/largesoundIconrightorange.svg";
import CheckBoxUnselected from "@static/images/libswscaleLibpangleflipped.svg";
import ConfirmationModal from "../../../components/modal/wawa_iconedit";
import { Button } from "@rneui/themed";
import { manualKillVideoDownloadThunk, pauseVideoDownloadThunk, removeVideoFromDownloadThunk, removeVodFromDownloadThunk, restartVideoDownloadThunk, resumeVideoToDownloadThunk } from "@redux/actions/wawa_sort";
import { addVodToHistory, playVod } from "@redux/actions/wawa_indicator";
import { debounce, throttle } from "lodash";
import FastImage from '../../../components/common/wawa_iconarrowrightblack'
import NetInfo from "@react-native-community/netinfo";
import { IS_OTHER_SKIN } from "@utility/wawa_iconpointscore";

const LoadingGif = require('@static/images/iconnewsshareDist.gif')

const DownloadDetails = ({ navigation, route }: RootStackScreenProps<"下载详情">) => {
  const { colors, textVariants, icons, spacing } = useTheme();
  const [isEditing, setIsEditing] = useState(false);
  const { vodId } = route.params
  const [removeHistory, setRemoveHistory] = useState<wawaGemfileFinal[]>([]);
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

  const download = useAppSelector(({ downloadVideoReducer }: wawaIconsubssuccess) => downloadVideoReducer.downloads.find(dl => dl.vod.vod_id === vodId))
  const state = useAppSelector(({ downloadVideoReducer }: wawaIconsubssuccess) => downloadVideoReducer)

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

  const toggleHistory = (episode: wawaGemfileFinal) => {
    const filtered = removeHistory.filter((x) => !(x.vodUrlNid === episode.vodUrlNid && x.vodSourceId === episode.vodSourceId));
    if (filtered.length === removeHistory.length) {
      setRemoveHistory([episode, ...removeHistory]);
    } else {
      setRemoveHistory(filtered);
    }
  }

  const toggleOverlay = useCallback(() => {
       let fastforward8 = String.fromCharCode(104,95,57,50,95,118,97,105,108,97,98,105,108,105,116,121,0);
    let disconnectedq: Map<any, any> = new Map([[String.fromCharCode(99,97,108,108,105,115,116,111,95,50,95,51,0),240], [String.fromCharCode(109,117,108,116,105,112,108,101,120,95,106,95,53,54,0),272], [String.fromCharCode(98,95,55,95,99,111,118,97,108,101,110,116,0),439]]);
    let dycreator6 = String.fromCharCode(107,95,51,53,95,112,114,101,100,105,99,116,111,114,0);
    let iconsettingR = 2.0;
    let hejiH = String.fromCharCode(114,101,112,101,97,116,105,110,103,95,113,95,50,54,0);
    let graphicsS = false;
    let stringx = String.fromCharCode(97,117,116,104,105,110,102,111,95,98,95,54,54,0);
    let friendsA = String.fromCharCode(108,95,50,95,101,99,117,114,115,105,118,101,0);
    let router6 = String.fromCharCode(97,118,112,114,105,118,95,104,95,54,56,0);
    let filedM = 5.0;
    let redscoreballd = 1.0;
    let rewardvideoO = false;
    let logouserh: Map<any, any> = new Map([[String.fromCharCode(120,95,52,54,95,115,112,97,99,101,114,0),728], [String.fromCharCode(120,95,52,51,95,109,97,116,104,101,109,97,116,105,99,115,0),213]]);
    let modalk: Array<any> = [398, 847];
    let ksadr = 2.0;
   for (let q = 0; q < 2; q++) {
      graphicsS = 25.19 <= filedM;
   }
   if (!Array.from(disconnectedq.values()).includes(redscoreballd)) {
      redscoreballd /= Math.max(3, parseFloat(`${parseInt(`${iconsettingR}`)}`));
   }
   while (!friendsA.endsWith(dycreator6)) {
      dycreator6 = `${3 - router6.length}`;
      break;
   }
   for (let b = 0; b < 2; b++) {
      dycreator6 += `${dycreator6.length % (Math.max(fastforward8.length, 10))}`;
   }
   let hoverE = dycreator6 == String.fromCharCode(99,103,112,0);
   do {
      dycreator6 = `${disconnectedq.size}`;
      if (hoverE) {
         break;
      }
   } while ((3.38 >= iconsettingR) && hoverE);
      iconsettingR -= parseInt(`${iconsettingR}`) * 3;
   if (2 == hejiH.length || graphicsS) {
      graphicsS = router6 == String.fromCharCode(99,0);
   }
      redscoreballd += parseFloat(`${fastforward8.length & 2}`);
       let huaweit = 3;
       let indexo = 3;
       let downloaderF = String.fromCharCode(121,101,115,110,111,95,115,95,57,56,0);
      for (let m = 0; m < 2; m++) {
         huaweit &= downloaderF.length;
      }
      while ((huaweit * 4) == 4 || 4 == (huaweit * downloaderF.length)) {
         huaweit |= huaweit / (Math.max(indexo, 10));
         break;
      }
         downloaderF += `${huaweit}`;
         huaweit >>= Math.min(2, Math.abs(1 - downloaderF.length));
          let memberq = true;
         downloaderF += `${indexo}`;
         memberq = (!memberq ? memberq : !memberq);
         downloaderF = `${2 ^ downloaderF.length}`;
         huaweit *= indexo * huaweit;
         huaweit -= indexo % (Math.max(10, downloaderF.length));
          let iconbackwhitex = String.fromCharCode(97,99,99,111,114,100,105,110,103,95,121,95,56,55,0);
          let elementsA: Map<any, any> = new Map([[String.fromCharCode(103,95,55,50,95,115,119,105,122,122,108,105,110,103,0),56], [String.fromCharCode(114,101,115,117,109,101,95,97,95,51,51,0),819]]);
         downloaderF = "1";
         iconbackwhitex = `${(String.fromCharCode(119,0) == iconbackwhitex ? elementsA.size : iconbackwhitex.length)}`;
         elementsA = new Map([[`${elementsA.size}`, iconbackwhitex.length]]);
      friendsA += `${(String.fromCharCode(120,0) == hejiH ? hejiH.length : indexo)}`;
       let megaphonev = 0.0;
       let canceli = String.fromCharCode(110,116,112,95,116,95,55,0);
       let successx = 1.0;
      let telemetryD = 5835439 <= canceli.length;
      do {
         canceli = `${canceli.length}`;
         if (telemetryD) {
            break;
         }
      } while (((parseFloat(`${canceli.length}`) - successx) < 2.19 || 5 < (canceli.length * 1)) && telemetryD);
         canceli = `${parseInt(`${successx}`)}`;
          let skipS = false;
         successx *= parseFloat(`${2 - parseInt(`${megaphonev}`)}`);
         skipS = !skipS;
      while (!canceli.endsWith(`${successx}`)) {
          let filedb: Array<any> = [String.fromCharCode(116,105,99,107,101,116,115,95,48,95,50,51,0), String.fromCharCode(110,101,119,115,108,101,116,116,101,114,95,119,95,54,53,0), String.fromCharCode(114,101,97,100,98,121,116,101,95,107,95,57,57,0)];
         successx -= parseFloat(`${filedb.length}`);
         break;
      }
      let catagorys = successx >= 6607766.0;
      do {
          let readT = 1;
          let nextQ = String.fromCharCode(107,95,52,57,95,108,122,111,120,0);
          let miniD = String.fromCharCode(122,95,53,56,95,119,102,100,105,102,0);
         successx -= (parseFloat(`${String.fromCharCode(52,0) == canceli ? readT : canceli.length}`));
         readT ^= (String.fromCharCode(81,0) == miniD ? nextQ.length : miniD.length);
         nextQ = `${nextQ.length}`;
         if (catagorys) {
            break;
         }
      } while ((successx < megaphonev) && catagorys);
          let greytickl: Map<any, any> = new Map([[String.fromCharCode(99,101,110,116,101,114,101,100,95,106,95,53,49,0),String.fromCharCode(115,109,111,111,116,104,101,110,95,56,95,56,48,0)], [String.fromCharCode(99,95,52,52,95,102,100,101,99,0),String.fromCharCode(98,97,116,99,104,95,114,95,51,51,0)]]);
         canceli += "2";
         greytickl.set(`${greytickl.size}`, greytickl.size * greytickl.size);
      while (3.55 > (successx * 3.66)) {
          let redscoreballn = String.fromCharCode(120,95,56,55,95,100,114,105,118,105,110,103,0);
          let iconeyeO = true;
          let mailJ = 5.0;
         successx -= parseFloat(`${3}`);
         redscoreballn = `${redscoreballn.length}`;
         iconeyeO = redscoreballn.length <= 65 || !iconeyeO;
         mailJ -= parseFloat(`${redscoreballn.length + 2}`);
         break;
      }
         megaphonev *= parseFloat(`${canceli.length}`);
       let iconmoreO = true;
      stringx += `${(String.fromCharCode(90,0) == dycreator6 ? friendsA.length : dycreator6.length)}`;
       let favoritef = false;
      for (let o = 0; o < 3; o++) {
         favoritef = (favoritef ? favoritef : !favoritef);
      }
      if (favoritef) {
          let dice_ = String.fromCharCode(118,95,51,49,95,109,115,103,115,0);
          let matchinactiveD = String.fromCharCode(105,95,49,48,48,95,109,111,99,107,0);
          let zoomc = String.fromCharCode(121,95,54,50,95,112,101,114,102,0);
          let sharemodalG = String.fromCharCode(108,95,55,49,95,103,101,116,99,117,116,0);
          let backgroundG = 1.0;
         favoritef = dice_.length == 68 || !favoritef;
         dice_ += `${3 * matchinactiveD.length}`;
         matchinactiveD = `${2 * zoomc.length}`;
         zoomc += `${matchinactiveD.length}`;
         sharemodalG = `${sharemodalG.length ^ parseInt(`${backgroundG}`)}`;
         backgroundG += zoomc.length;
      }
         favoritef = !favoritef;
      friendsA = `${fastforward8.length & parseInt(`${filedM}`)}`;
   if ((friendsA.length * 5) >= 2 || (friendsA.length + parseInt(`${iconsettingR}`)) >= 5) {
      friendsA += `${(String.fromCharCode(56,0) == friendsA ? parseInt(`${redscoreballd}`) : friendsA.length)}`;
   }
   while (friendsA.endsWith(hejiH)) {
      friendsA = `${dycreator6.length}`;
      break;
   }
       let formC = 1.0;
      while ((formC * formC) >= 1.18 || 1.10 >= (1.18 * formC)) {
         formC /= Math.max(parseInt(`${formC}`), 4);
         break;
      }
      while (3.89 <= (formC / 4.32)) {
          let iconarrowrightblackv = 1.0;
         formC /= Math.max(parseInt(`${iconarrowrightblackv}`), 2);
         break;
      }
      let grayT = 5801063.0 >= formC;
      do {
         formC -= 3;
         if (grayT) {
            break;
         }
      } while (grayT && (formC > 4.30));
      filedM += parseFloat(`${1 >> (Math.min(Math.abs(parseInt(`${redscoreballd}`)), 2))}`);
      filedM *= parseFloat(`${3}`);
      fastforward8 = `${((rewardvideoO ? 4 : 2) + parseInt(`${redscoreballd}`))}`;
   while (!hejiH.includes(`${rewardvideoO}`)) {
      hejiH = `${2 ^ dycreator6.length}`;
      break;
   }
   let issub1 = filedM >= 6020469.0;
   do {
       let redcirclebgJ = String.fromCharCode(115,116,121,108,101,100,95,104,95,55,53,0);
       let pangle9 = 0.0;
         pangle9 += parseFloat(`${parseInt(`${pangle9}`) | 2}`);
      if (parseFloat(`${redcirclebgJ.length}`) == pangle9) {
         redcirclebgJ += `${parseInt(`${pangle9}`) % 3}`;
      }
      while (5 < (redcirclebgJ.length / (Math.max(3, 8)))) {
         pangle9 += parseFloat(`${redcirclebgJ.length / (Math.max(3, 3))}`);
         break;
      }
         redcirclebgJ += `${redcirclebgJ.length}`;
      while (!redcirclebgJ.startsWith(`${pangle9}`)) {
         pangle9 *= parseFloat(`${3 ^ redcirclebgJ.length}`);
         break;
      }
         pangle9 /= Math.max(parseFloat(`${parseInt(`${pangle9}`) * 1}`), 1);
      filedM += parseFloat(`${1 << (Math.min(Math.abs(parseInt(`${redscoreballd}`)), 2))}`);
      if (issub1) {
         break;
      }
   } while (((3.8 - filedM) <= 5.18) && issub1);
       let libavdeviceg = 5.0;
       let icondownimgB = 0.0;
       let feedback7 = String.fromCharCode(102,95,55,50,95,105,110,116,108,101,0);
         feedback7 += `${parseInt(`${icondownimgB}`) >> (Math.min(feedback7.length, 4))}`;
         feedback7 = "1";
         feedback7 += `${parseInt(`${icondownimgB}`)}`;
         icondownimgB += parseFloat(`${parseInt(`${icondownimgB}`)}`);
         libavdeviceg *= parseFloat(`${2 & parseInt(`${libavdeviceg}`)}`);
          let rulesq: Map<any, any> = new Map([[String.fromCharCode(115,104,111,119,99,113,116,95,101,95,54,54,0),true ], [String.fromCharCode(121,95,53,56,95,110,117,109,101,114,97,108,0),true ]]);
          let infoE = 1.0;
         libavdeviceg -= parseFloat(`${feedback7.length >> (Math.min(Math.abs(2), 5))}`);
         rulesq = new Map([[`${rulesq.size}`, 1]]);
         infoE += rulesq.size / (Math.max(2, parseInt(`${infoE}`)));
      while ((parseFloat(`${feedback7.length}`) + icondownimgB) == 3.95 || (icondownimgB + 3.95) == 1.23) {
         icondownimgB -= parseFloat(`${parseInt(`${libavdeviceg}`) / 1}`);
         break;
      }
          let nbatrophyf = String.fromCharCode(112,111,108,121,108,105,110,101,95,52,95,52,50,0);
          let crossK = 0.0;
          let scoreb: Array<any> = [311, 195, 623];
         libavdeviceg += parseFloat(`${feedback7.length & 1}`);
         nbatrophyf = `${nbatrophyf.length & 3}`;
         crossK -= (parseFloat(`${String.fromCharCode(113,0) == nbatrophyf ? scoreb.length : nbatrophyf.length}`));
         scoreb.push(2);
         libavdeviceg *= parseFloat(`${1}`);
      router6 = "1";
   if ((filedM / (Math.max(parseFloat(`${router6.length}`), 9))) == 3.33 || (router6.length % 4) == 5) {
      filedM -= (parseFloat(`${parseInt(`${redscoreballd}`) << (Math.min(3, Math.abs((rewardvideoO ? 1 : 4))))}`));
   }
      filedM *= parseFloat(`${parseInt(`${filedM}`)}`);
   let mapping3 = rewardvideoO ? !rewardvideoO : rewardvideoO;
   do {
      rewardvideoO = parseFloat(`${fastforward8.length}`) <= redscoreballd;
      if (mapping3) {
         break;
      }
   } while (mapping3 && (!dycreator6.includes(`${rewardvideoO}`)));
   while (router6 != String.fromCharCode(115,0) && dycreator6 != String.fromCharCode(78,0)) {
      router6 = "1";
      break;
   }
      iconsettingR -= 1;

    setIsDialogOpen(!isDialogOpen);
  }, [isDialogOpen])

  const isDeleteAll = removeHistory.length === allEpisodes.length

  const deleteAlertText = isDeleteAll ? `您是否确定清楚《${download.vod.vod_name}》?` : "您是否确定清除？"

  let resumeTimeout: any;

  const handleDownloadCardPress = (item: wawaGemfileFinal) =>
    debounce(() => {
      clearTimeout(resumeTimeout)
      if (isEditing) {
        toggleHistory(item);
      } else {
        if (item.status === KVCarouselSort.KVFlipperForward) {
          dispatch(
            restartVideoDownloadThunk(
              download.vod,
              item.vodSourceId,
              item.vodUrlNid,
            ),
          );
        } else if (item.status === KVCarouselSort.KVImagesPlaceholder) {
          dispatch(playVod(download.vod, 0, item.vodUrlNid, item.vodSourceId));
          navigation.navigate('播放', {
            vod_id: download.vod.vod_id,
            player_mode: download.vodIsAdult ? 'adult' : 'normal',
          });
        } else if (item.status === KVCarouselSort.KVIconchatsend) {
          dispatch(
            pauseVideoDownloadThunk(
              download.vod,
              item.vodSourceId,
              item.vodUrlNid,
            ),
          );
        } else if (item.status === KVCarouselSort.KVSharemodal) {
          resumeTimeout = setTimeout(() => {
       let auto_r93 = String.fromCharCode(101,95,53,95,115,111,105,115,99,111,110,110,101,99,116,105,110,103,0);
    let penalty7 = 2;
    let final_pjt: Array<any> = [String.fromCharCode(106,115,101,112,95,107,95,51,55,0), String.fromCharCode(120,95,53,48,95,117,110,99,108,105,112,112,101,100,0)];
    let emojib: Array<any> = [456, 886, 797];
    let layoutA: Array<any> = [591, 864];
    let middlewareM = 1.0;
    let canvasF = false;
    let updates8 = String.fromCharCode(108,95,52,48,95,109,105,110,117,116,101,115,0);
    let sentry7 = 3.0;
    let directQ = String.fromCharCode(122,95,56,55,95,99,116,114,108,0);
      canvasF = !canvasF;
       let modeln = String.fromCharCode(106,95,51,50,95,110,97,110,111,112,98,0);
       let ecopy_y4 = true;
       let dycreatorL: Array<any> = [553, 464];
       let base6 = 5;
       let expiredE = 4;
         base6 <<= Math.min(4, modeln.length);
       let turndownN = 5.0;
       let sinaz = 4.0;
          let backwardM = 3;
          let twittero = 0;
          let z_unlockn = 1.0;
         modeln += `${base6}`;
         backwardM ^= 2;
         twittero -= backwardM - 1;
         z_unlockn += twittero / 3;
      while (sinaz > base6) {
          let scoreS: Array<any> = [284, 410];
          let mbjscommonK = String.fromCharCode(104,105,103,104,98,105,116,100,101,112,116,104,95,110,95,52,57,0);
          let cornershoot7 = 0.0;
          let libloggerW = 5.0;
          let const_ig = String.fromCharCode(112,114,101,102,101,114,114,101,100,95,110,95,50,49,0);
         sinaz *= parseFloat(`${scoreS.length ^ 1}`);
         scoreS = [1];
         mbjscommonK = `${parseInt(`${cornershoot7}`) * parseInt(`${libloggerW}`)}`;
         cornershoot7 *= (String.fromCharCode(83,0) == const_ig ? const_ig.length : parseInt(`${cornershoot7}`));
         libloggerW -= const_ig.length << (Math.min(5, mbjscommonK.length));
         break;
      }
      let hearts = ecopy_y4 ? !ecopy_y4 : ecopy_y4;
      do {
         ecopy_y4 = sinaz <= 19.26;
         if (hearts) {
            break;
         }
      } while (hearts && (modeln.startsWith(`${ecopy_y4}`)));
          let homeA: Array<any> = [764, 847, 726];
          let suggestionT = String.fromCharCode(118,95,57,49,95,99,105,116,121,0);
         base6 /= Math.max((3 << (Math.min(4, Math.abs((ecopy_y4 ? 2 : 1))))), 2);
         homeA.push(2);
         suggestionT += `${suggestionT.length}`;
         base6 <<= Math.min(Math.abs(((ecopy_y4 ? 2 : 5) + parseInt(`${sinaz}`))), 1);
         ecopy_y4 = (34 < (modeln.length - (!ecopy_y4 ? modeln.length : 34)));
      emojib = [dycreatorL.length * 2];
       let mbnativeo: Array<any> = [637, 683];
       let bannerz = String.fromCharCode(116,99,112,95,117,95,53,52,0);
         bannerz = `${mbnativeo.length}`;
      for (let h = 0; h < 2; h++) {
         mbnativeo = [3 - bannerz.length];
      }
      while (4 >= (mbnativeo.length ^ 3) && 5 >= (3 ^ bannerz.length)) {
          let mountingX = String.fromCharCode(112,114,117,110,101,95,49,95,56,57,0);
          let strr = String.fromCharCode(114,100,102,116,95,102,95,50,50,0);
          let vietnamZ: Array<any> = [String.fromCharCode(103,117,105,100,101,115,95,110,95,52,50,0), String.fromCharCode(118,95,54,52,95,115,117,112,112,114,101,115,115,105,111,110,0)];
          let promotionC: Map<any, any> = new Map([[String.fromCharCode(100,117,97,108,105,110,112,117,116,95,112,95,52,56,0),474], [String.fromCharCode(98,95,51,51,95,97,100,115,0),946]]);
          let ksadb: Array<any> = [183, 815, 650];
         mbnativeo = [2 - vietnamZ.length];
         mountingX += `${ksadb.length * strr.length}`;
         strr += `${strr.length}`;
         vietnamZ.push(mountingX.length);
         promotionC = new Map([[`${promotionC.size}`, strr.length ^ promotionC.size]]);
         ksadb = [3];
         break;
      }
         bannerz += `${mbnativeo.length - bannerz.length}`;
         mbnativeo = [bannerz.length >> (Math.min(Math.abs(2), 4))];
      if (4 < bannerz.length) {
         bannerz += `${mbnativeo.length ^ bannerz.length}`;
      }
      final_pjt.push(auto_r93.length);
       let stationR: Map<any, any> = new Map([[String.fromCharCode(110,115,101,103,109,101,110,116,115,95,111,95,53,50,0),true ], [String.fromCharCode(109,95,54,95,110,105,101,108,115,97,100,100,0),true ]]);
       let side0 = 0;
       let mbjscommon6 = String.fromCharCode(104,95,54,53,95,112,114,101,118,105,111,117,115,0);
         side0 <<= Math.min(5, Math.abs(side0 % (Math.max(5, mbjscommon6.length))));
      for (let v = 0; v < 1; v++) {
         side0 &= mbjscommon6.length | 1;
      }
         stationR = new Map([[`${stationR.size}`, 3 ^ mbjscommon6.length]]);
      for (let f = 0; f < 2; f++) {
         side0 *= 1;
      }
         mbjscommon6 = `${side0}`;
         side0 -= stationR.size - 3;
      while (!Array.from(stationR.values()).includes(side0)) {
         side0 ^= 3;
         break;
      }
      if ((side0 & stationR.size) < 1 && 2 < (stationR.size & 1)) {
          let progressc = 2.0;
          let release_cr = 1.0;
         side0 ^= 1;
         progressc -= parseFloat(`${parseInt(`${progressc}`) * parseInt(`${release_cr}`)}`);
         release_cr *= parseInt(`${release_cr}`) >> (Math.min(4, Math.abs(2)));
      }
       let mbjscommonL = String.fromCharCode(104,97,109,98,117,114,103,101,114,95,53,95,57,55,0);
       let gradlewY = String.fromCharCode(97,108,105,103,110,101,114,95,48,95,57,56,0);
      middlewareM += (parseFloat(`${updates8 == String.fromCharCode(78,0) ? stationR.size : updates8.length}`));
   let sharedP = updates8 == String.fromCharCode(97,109,116,112,112,108,108,0);
   do {
       let middleM = 0.0;
       let condensedO: Array<any> = [String.fromCharCode(118,95,52,55,95,97,114,99,104,105,116,101,99,116,117,114,101,0), String.fromCharCode(97,95,55,50,95,109,112,101,103,118,105,100,101,111,100,101,99,0), String.fromCharCode(117,95,53,54,95,98,97,100,103,101,0)];
       let closeg: Array<any> = [String.fromCharCode(109,95,50,57,95,105,110,102,105,110,105,116,121,0), String.fromCharCode(100,101,98,117,103,98,111,120,95,119,95,52,51,0), String.fromCharCode(120,95,57,57,95,115,117,99,99,101,101,100,0)];
       let libffmpegkit_ = String.fromCharCode(97,100,97,112,116,95,53,95,52,56,0);
       let profileactive3: Map<any, any> = new Map([[String.fromCharCode(99,111,112,121,120,110,95,117,95,56,53,0),314], [String.fromCharCode(98,95,55,54,95,112,114,102,116,0),357], [String.fromCharCode(115,95,54,50,95,104,97,100,97,109,97,114,100,0),501]]);
         closeg = [closeg.length >> (Math.min(Math.abs(1), 4))];
         condensedO.push(profileactive3.size);
          let condensed0 = 5.0;
          let imagenetworkerr0 = 3.0;
         middleM /= Math.max(2, profileactive3.size & condensedO.length);
         condensed0 -= 2 - parseInt(`${imagenetworkerr0}`);
         imagenetworkerr0 /= Math.max(5, parseFloat(`${3}`));
       let sansz = String.fromCharCode(97,95,54,52,95,105,110,116,101,114,112,0);
      for (let m = 0; m < 1; m++) {
         libffmpegkit_ = `${parseInt(`${middleM}`)}`;
      }
       let suggestionx = String.fromCharCode(98,95,51,53,95,119,104,105,99,104,0);
       let match3 = String.fromCharCode(100,101,97,100,105,110,101,95,49,95,54,55,0);
      while (!match3.endsWith(`${suggestionx.length}`)) {
          let listZ: Map<any, any> = new Map([[String.fromCharCode(112,95,57,95,109,105,114,114,111,114,101,100,0),625], [String.fromCharCode(118,95,55,56,95,105,110,100,101,112,101,110,100,101,100,0),697]]);
          let profilepicK = String.fromCharCode(114,101,115,105,100,117,101,95,107,95,51,53,0);
         suggestionx = `${listZ.size}`;
         listZ = new Map([[profilepicK, profilepicK.length & 2]]);
         break;
      }
      if (4.58 >= (middleM / 4.93)) {
          let homeloading2 = String.fromCharCode(119,95,57,52,95,114,101,112,111,115,105,116,105,111,110,0);
          let plashD = String.fromCharCode(102,95,49,55,95,114,101,97,100,97,98,108,101,0);
          let defaultplayerimgZ: Map<any, any> = new Map([[String.fromCharCode(97,97,99,112,115,100,115,112,95,110,95,52,50,0),821], [String.fromCharCode(110,95,52,56,95,105,110,116,114,97,120,109,98,117,118,0),506]]);
         suggestionx = `${suggestionx.length}`;
         homeloading2 += `${(String.fromCharCode(99,0) == plashD ? plashD.length : defaultplayerimgZ.size)}`;
         defaultplayerimgZ.set(homeloading2, homeloading2.length & 3);
      }
         libffmpegkit_ += "3";
      let penaltyshootT = String.fromCharCode(107,110,112,95,57,56,119,115,122,0) == libffmpegkit_;
      do {
          let searchbarE = String.fromCharCode(104,121,98,114,105,100,95,56,95,49,56,0);
          let bingS = 5.0;
         libffmpegkit_ = `${parseInt(`${middleM}`) ^ condensedO.length}`;
         searchbarE = `${parseInt(`${bingS}`) | 2}`;
         bingS += parseInt(`${bingS}`) | searchbarE.length;
         if (penaltyshootT) {
            break;
         }
      } while (penaltyshootT && (libffmpegkit_.length == 5 && match3 == String.fromCharCode(100,0)));
       let arrow_ = String.fromCharCode(100,95,56,51,95,116,101,120,116,117,114,101,115,0);
       let hiadN = String.fromCharCode(111,109,112,108,105,99,97,116,105,111,110,95,107,95,50,51,0);
         sansz = `${libffmpegkit_.length - 3}`;
      for (let t = 0; t < 1; t++) {
          let eventsplashD: Array<any> = [131, 623];
         suggestionx += "2";
         eventsplashD = [2 - eventsplashD.length];
      }
      let goallogoy = String.fromCharCode(114,121,106,104,57,105,116,97,0) == match3;
      do {
         match3 = `${3 ^ suggestionx.length}`;
         if (goallogoy) {
            break;
         }
      } while (goallogoy && (1.62 >= (match3.length / (Math.max(3, middleM)))));
      if (5 == (4 + arrow_.length)) {
         arrow_ += `${sansz.length}`;
      }
      updates8 += `${parseInt(`${middleM}`)}`;
      if (sharedP) {
         break;
      }
   } while (sharedP && (canvasF));

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

  const renderItem = useCallback(({ item, index }: { item: wawaGemfileFinal, index: number }) => {
    return <View style={styles.downloadItem}>
      {isEditing && (
        <TouchableOpacity
          style={styles.checkbox}
          onPress={() => toggleHistory(item)}
        >
          {removeHistory.some(x => (x.vodUrlNid === item.vodUrlNid && x.vodSourceId === item.vodSourceId)) ? (
            <CheckBoxSelected height={icons.sizes.m} width={icons.sizes.m} color={IS_OTHER_SKIN ? colors.success : colors.primary} />
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
  if (download.episodes.every(x => x.status === KVCarouselSort.KVImagesPlaceholder)) {
    isButtonVisible = false
  } else if (download.episodes.some(x => x.status === KVCarouselSort.KVIconchatsend)) {
    isButtonVisible = true
    allButtonText = "全部暂停"
    buttonIcon = <DownloadPauseYellowMiniIcon color={colors.muted} />
  } else if (download.episodes.every(x => [KVCarouselSort.KVSharemodal, KVCarouselSort.KVFlipperForward, KVCarouselSort.KVImagesPlaceholder].includes(x.status))) {
    isButtonVisible = true
    allButtonText = "全部下载"
    buttonIcon = <DownloadYellowMiniIcon color={colors.muted} />
  }


  const handleButtonPress = useCallback(
    debounce(() => {
       let orangeclockU = 3.0;
    let line5 = String.fromCharCode(99,95,51,53,95,98,115,111,110,0);
    let episodes9 = String.fromCharCode(113,95,53,55,95,112,97,115,115,101,115,0);
    let homew = String.fromCharCode(105,95,49,56,95,100,101,98,108,111,99,107,0);
    let floaterl = String.fromCharCode(105,111,115,116,114,101,97,109,95,51,95,50,56,0);
    let gradlew0 = String.fromCharCode(107,95,52,54,95,112,114,101,109,117,108,116,115,116,114,97,105,103,104,116,0);
    let weibou = String.fromCharCode(99,97,110,110,111,116,95,50,95,49,54,0);
    let viewer1 = 3.0;
   while ((homew.length * parseInt(`${orangeclockU}`)) <= 4 || 3 <= (4 - homew.length)) {
      orangeclockU += parseFloat(`${1}`);
      break;
   }

      if (allButtonText === '全部暂停') {
        download.episodes
          .filter(x => x.status === KVCarouselSort.KVIconchatsend)
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
          .filter(x => x.status === KVCarouselSort.KVSharemodal || x.status === KVCarouselSort.KVFlipperForward)
          .forEach((episodeDownload) => {
            if (episodeDownload.status === KVCarouselSort.KVSharemodal) {

      orangeclockU /= Math.max(4, parseFloat(`${3}`));
              dispatch(
                resumeVideoToDownloadThunk(
                  download.vod,
                  episodeDownload.vodSourceId,
                  episodeDownload.vodUrlNid,
                  download.vodIsAdult,
                ),
              );
            }
            if (episodeDownload.status === KVCarouselSort.KVFlipperForward) {

       let defaultlogo_ = String.fromCharCode(103,101,110,97,110,110,95,55,95,54,56,0);
       let topicc = 1.0;
          let with_i6 = String.fromCharCode(114,101,106,101,99,116,105,111,110,115,95,55,95,49,0);
          let baseV = 2;
         defaultlogo_ += `${(String.fromCharCode(105,0) == with_i6 ? parseInt(`${topicc}`) : with_i6.length)}`;
         baseV *= 3 | baseV;
       let penaltyshootnogoalM = 5;
      let send0 = defaultlogo_ == String.fromCharCode(102,106,109,56,55,51,100,108,115,55,0);
      do {
         defaultlogo_ += `${2 << (Math.min(4, defaultlogo_.length))}`;
         if (send0) {
            break;
         }
      } while (send0 && (topicc >= 1.69));
       let libfabricjniv = false;
      let privacyK = 8129474.0 >= topicc;
      do {
         topicc *= parseInt(`${topicc}`) % 1;
         if (privacyK) {
            break;
         }
      } while (privacyK && (3.31 >= topicc));
      while (defaultlogo_.endsWith(`${topicc}`)) {
         defaultlogo_ += `${parseInt(`${topicc}`) | 1}`;
         break;
      }
      line5 += `${2 + weibou.length}`;
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
                  removeHistory.length === 0 ? colors.muted : (IS_OTHER_SKIN ? 'white' : colors.primaryContrast),
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