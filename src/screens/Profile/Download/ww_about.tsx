import { RootStackScreenProps } from "@type/ww_tempnodatagif_description";
import ScreenContainer from "../../../components/container/ww_collection";
import { FlatList, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import TitleWithBackButtonHeader from "../../../components/header/ww_react_predictionwin_header";
import React, { useCallback, useEffect, useState } from "react";
import DownloadEpisodeDetailCard from "../../../components/download/ww_player_connection";
import { DVGGrayTeamdetailsbg, wwAndroid } from "@type/ww_skip";
import { useAppDispatch, useAppSelector } from "@hooks/ww_catagory_neon";
import { wwEighteenShirt } from "@redux/ww_small";
import MoreArrow from '@static/images/libcxxcomponentsPrivilege.svg'
import DownloadYellowMiniIcon from '@static/images/gemfileRender.svg'
import DownloadPauseYellowMiniIcon from '@static/images/traminiFull.svg'
import { wwControl } from "@type/ww_dycreator_result";
import CheckBoxSelected from "@static/images/androidSigmob.svg";
import CheckBoxUnselected from "@static/images/twitterNbatrophy.svg";
import ConfirmationModal from "../../../components/modal/ww_upgrade";
import { Button } from "@rneui/themed";
import { manualKillVideoDownloadThunk, pauseVideoDownloadThunk, removeVideoFromDownloadThunk, removeVodFromDownloadThunk, restartVideoDownloadThunk, resumeVideoToDownloadThunk } from "@redux/actions/ww_benefit_filled";
import { addVodToHistory, playVod } from "@redux/actions/ww_floater";
import { debounce, throttle } from "lodash";
import FastImage from '../../../components/common/ww_result'
import NetInfo from "@react-native-community/netinfo";
import { IS_OTHER_SKIN } from "@utility/ww_icon";

const LoadingGif = require('@static/images/runtimeschedulerPromotion.gif')

const DownloadDetails = ({ navigation, route }: RootStackScreenProps<"下载详情">) => {
  const { colors, textVariants, icons, spacing } = useTheme();
  const [isEditing, setIsEditing] = useState(false);
  const { vodId } = route.params
  const [removeHistory, setRemoveHistory] = useState<wwAndroid[]>([]);
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

  const download = useAppSelector(({ downloadVideoReducer }: wwEighteenShirt) => downloadVideoReducer.downloads.find(dl => dl.vod.vod_id === vodId))
  const state = useAppSelector(({ downloadVideoReducer }: wwEighteenShirt) => downloadVideoReducer)

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

  const toggleHistory = (episode: wwAndroid) => {
    const filtered = removeHistory.filter((x) => !(x.vodUrlNid === episode.vodUrlNid && x.vodSourceId === episode.vodSourceId));
    if (filtered.length === removeHistory.length) {
      setRemoveHistory([episode, ...removeHistory]);
    } else {
      setRemoveHistory(filtered);
    }
  }

  const toggleOverlay = useCallback(() => {
       let buffera = 3.0;
    let phoneP = String.fromCharCode(108,95,54,53,95,109,101,109,122,101,114,111,0);
    let iconpipexpandn = 4.0;
    let g_unlockj = 3.0;
    let recommendation7: Array<any> = [347, 118, 518];
    let taiwan9 = 5;
    let iconsettingf = String.fromCharCode(117,98,108,105,99,95,105,95,56,54,0);
    let eventsplash6 = 3.0;
    let sendl = String.fromCharCode(109,95,51,54,95,112,117,116,98,121,116,101,0);
    let binddatas4 = String.fromCharCode(112,95,53,57,95,117,110,104,105,103,104,108,105,103,104,116,0);
    let description_1dN = String.fromCharCode(120,95,54,50,95,107,101,109,112,102,0);
    let loginsuccessx = String.fromCharCode(98,95,54,49,95,100,114,111,112,0);
    let connectionJ: Array<any> = [30, 162];
    let sentrym = 3;
   while (!binddatas4.startsWith(`${iconpipexpandn}`)) {
      binddatas4 += `${binddatas4.length}`;
      break;
   }
   if (2.36 >= iconpipexpandn) {
       let modulea = 0.0;
         modulea -= parseInt(`${modulea}`) % 2;
         modulea -= 1 * parseInt(`${modulea}`);
         modulea /= Math.max(parseInt(`${modulea}`) & parseInt(`${modulea}`), 2);
      iconpipexpandn *= parseFloat(`${3 | sendl.length}`);
   }
      sendl += "1";
   let championt = g_unlockj >= 7082512.0;
   do {
      g_unlockj += 1;
      if (championt) {
         break;
      }
   } while (championt && (iconpipexpandn < g_unlockj));
      recommendation7.push((String.fromCharCode(68,0) == phoneP ? phoneP.length : parseInt(`${buffera}`)));
       let source7 = false;
       let currente = String.fromCharCode(115,121,115,114,97,110,100,95,118,95,51,0);
       let gdtadvo = String.fromCharCode(100,105,115,116,114,97,99,116,105,111,110,95,105,95,49,0);
          let frame_6M: Map<any, any> = new Map([[String.fromCharCode(114,117,110,108,111,111,112,95,101,95,53,55,0),609], [String.fromCharCode(105,110,116,101,114,115,101,99,116,105,110,103,95,112,95,54,57,0),220]]);
         source7 = gdtadvo.length >= 41;
         frame_6M.set(`${frame_6M.size}`, 3);
         currente = `${gdtadvo.length & 3}`;
         source7 = !source7;
          let giflivestreamingo = String.fromCharCode(112,114,101,115,101,110,116,101,114,95,104,95,50,56,0);
          let toponc = String.fromCharCode(119,95,54,48,95,102,105,114,101,100,0);
         source7 = 79 < currente.length;
         giflivestreamingo = `${giflivestreamingo.length}`;
         toponc = `${(String.fromCharCode(66,0) == toponc ? giflivestreamingo.length : toponc.length)}`;
      if (gdtadvo.includes(`${source7}`)) {
         source7 = currente.length == gdtadvo.length;
      }
      if (!source7 || gdtadvo.length >= 2) {
         gdtadvo = `${currente.length}`;
      }
      if (currente.length > 4 || source7) {
         currente = `${gdtadvo.length | 3}`;
      }
         gdtadvo = `${(currente.length % (Math.max(3, (source7 ? 5 : 2))))}`;
          let borderlesst = String.fromCharCode(101,109,115,99,114,105,112,116,101,110,95,55,95,54,51,0);
          let main_lO = 4.0;
         currente = "3";
         borderlesst = `${parseInt(`${main_lO}`)}`;
         main_lO *= parseInt(`${main_lO}`);
      buffera *= parseInt(`${g_unlockj}`);
      loginsuccessx = "1";
   while (iconsettingf == phoneP) {
      phoneP += `${iconsettingf.length + description_1dN.length}`;
      break;
   }
       let analytic9: Map<any, any> = new Map([[String.fromCharCode(108,101,102,116,95,98,95,52,54,0),875], [String.fromCharCode(122,95,52,51,95,115,95,48,0),530], [String.fromCharCode(122,95,57,55,95,107,102,109,111,100,101,115,0),876]]);
      if ((analytic9.size >> (Math.min(Math.abs(4), 2))) > 2) {
         analytic9.set(`${analytic9.size}`, analytic9.size | analytic9.size);
      }
       let largej = 2.0;
       let with_3rS = 5.0;
      let modulesS = 5322540.0 >= with_3rS;
      do {
          let invitep = 5.0;
          let borderless9 = String.fromCharCode(115,95,48,95,109,105,99,114,111,100,118,100,0);
          let diceg = String.fromCharCode(122,95,56,55,95,115,101,110,100,97,108,108,0);
         with_3rS -= (parseFloat(`${diceg == String.fromCharCode(75,0) ? diceg.length : analytic9.size}`));
         invitep -= parseInt(`${invitep}`) << (Math.min(borderless9.length, 4));
         borderless9 += `${2 >> (Math.min(4, borderless9.length))}`;
         if (modulesS) {
            break;
         }
      } while (modulesS && (analytic9.size >= parseInt(`${with_3rS}`)));
      taiwan9 &= binddatas4.length;
   for (let r = 0; r < 1; r++) {
      iconsettingf += `${recommendation7.length}`;
   }
   if ((g_unlockj + 3.0) == 3.5 && (buffera + 3.0) == 3.16) {
       let zhengpianK: Array<any> = [997, 591, 379];
       let helperj: Array<any> = [26, 446, 77];
       let libsgcoreV: Array<any> = [836, 419];
      if (4 > (libsgcoreV.length + zhengpianK.length) || 4 > (libsgcoreV.length + zhengpianK.length)) {
         zhengpianK = [zhengpianK.length * libsgcoreV.length];
      }
         helperj = [helperj.length];
         libsgcoreV = [1 - zhengpianK.length];
         zhengpianK.push(zhengpianK.length);
      if ((3 + helperj.length) > 1 && 3 > (zhengpianK.length + helperj.length)) {
         helperj.push(2);
      }
      let plus3 = 9074444 <= helperj.length;
      do {
          let combineT = true;
          let launcher9 = 2;
         helperj = [helperj.length / (Math.max(3, 9))];
         combineT = !combineT;
         launcher9 /= Math.max(4, 1);
         if (plus3) {
            break;
         }
      } while (plus3 && ((1 & helperj.length) < 1 || (zhengpianK.length & helperj.length) < 1));
         zhengpianK.push(helperj.length);
      while (3 > (helperj.length % (Math.max(5, zhengpianK.length)))) {
          let logind: Array<any> = [String.fromCharCode(108,97,103,97,114,105,116,104,114,97,99,95,57,95,56,0), String.fromCharCode(103,95,53,52,95,99,111,109,98,105,110,97,116,105,111,110,115,0), String.fromCharCode(97,95,49,48,95,115,117,109,109,97,114,105,101,115,0)];
          let rankr = 1.0;
          let shielddonej: Array<any> = [323, 329];
          let goalO = 2.0;
          let fileq = String.fromCharCode(99,108,97,110,103,95,121,95,51,50,0);
         helperj.push(parseInt(`${goalO}`) * fileq.length);
         logind = [logind.length - 3];
         rankr -= parseFloat(`${1 + parseInt(`${rankr}`)}`);
         shielddonej = [parseInt(`${rankr}`) % 1];
         goalO /= Math.max(logind.length % 3, 5);
         fileq = `${2 / (Math.max(8, parseInt(`${rankr}`)))}`;
         break;
      }
      for (let r = 0; r < 1; r++) {
          let libzeus1: Map<any, any> = new Map([[String.fromCharCode(118,95,50,49,95,102,97,115,116,116,101,115,116,0),String.fromCharCode(112,114,111,106,101,99,116,95,108,95,55,0)], [String.fromCharCode(99,95,52,56,95,101,108,101,118,97,116,101,0),String.fromCharCode(110,95,57,50,95,114,101,110,100,101,114,101,114,0)], [String.fromCharCode(108,97,116,95,113,95,52,49,0),String.fromCharCode(109,97,120,114,101,97,100,101,114,115,95,49,95,49,48,0)]]);
          let iconscheduleU: Map<any, any> = new Map([[String.fromCharCode(107,95,49,50,95,102,108,105,112,112,101,100,0),911], [String.fromCharCode(102,95,51,51,95,115,116,117,110,0),620], [String.fromCharCode(99,101,110,116,101,114,105,110,103,95,55,95,56,0),683]]);
          let appsJ = 1.0;
          let smallP = false;
          let binddatasF = false;
         libsgcoreV.push(libsgcoreV.length);
         libzeus1 = new Map([[`${libzeus1.size}`, 2]]);
         iconscheduleU = new Map([[`${appsJ}`, (parseInt(`${appsJ}`) ^ (smallP ? 4 : 2))]]);
         binddatasF = (binddatasF ? !smallP : binddatasF);
      }
      g_unlockj *= taiwan9 | 1;
   }
      iconpipexpandn -= (parseFloat(`${phoneP == String.fromCharCode(72,0) ? parseInt(`${eventsplash6}`) : phoneP.length}`));
   let interstitialZ = 9507972.0 <= eventsplash6;
   do {
      eventsplash6 -= iconsettingf.length / (Math.max(10, description_1dN.length));
      if (interstitialZ) {
         break;
      }
   } while (((eventsplash6 / 1.91) > 1.18) && interstitialZ);
   for (let i = 0; i < 2; i++) {
      binddatas4 += "3";
   }
   let internetd = sendl.length <= 5670564;
   do {
      sendl = `${parseInt(`${g_unlockj}`) ^ binddatas4.length}`;
      if (internetd) {
         break;
      }
   } while (internetd && (3 <= (parseInt(`${buffera}`) - sendl.length) && 3 <= (3 ^ sendl.length)));
   for (let e = 0; e < 3; e++) {
       let iconscheduleR = String.fromCharCode(106,95,55,50,95,101,100,105,116,105,110,103,0);
       let darkA = String.fromCharCode(120,95,49,54,95,111,112,97,113,117,101,0);
       let halffieldimageH = String.fromCharCode(98,105,116,101,120,97,99,116,110,101,115,115,95,107,95,57,0);
       let pangleU = false;
      let whatsappQ = pangleU ? !pangleU : pangleU;
      do {
         pangleU = ((halffieldimageH.length - (pangleU ? halffieldimageH.length : 97)) <= 97);
         if (whatsappQ) {
            break;
         }
      } while ((darkA.length == 1) && whatsappQ);
          let footballfieldP = String.fromCharCode(112,114,101,100,105,99,116,105,111,110,95,100,95,57,55,0);
         pangleU = (darkA.length | halffieldimageH.length) >= 50;
         footballfieldP = `${footballfieldP.length}`;
      for (let w = 0; w < 3; w++) {
          let libane3 = String.fromCharCode(114,101,102,108,101,99,116,105,111,110,95,51,95,49,53,0);
          let libglog2 = String.fromCharCode(98,97,115,101,100,95,104,95,53,51,0);
          let flipperF = String.fromCharCode(115,119,105,116,99,104,105,110,103,95,119,95,54,50,0);
          let league5: Array<any> = [951, 111, 612];
         pangleU = (flipperF.length >> (Math.min(3, league5.length))) <= 51;
         libane3 = `${libglog2.length & libane3.length}`;
         libglog2 = `${libane3.length}`;
         flipperF = `${(libglog2 == String.fromCharCode(78,0) ? libane3.length : libglog2.length)}`;
         league5 = [2 % (Math.max(2, libglog2.length))];
      }
         pangleU = halffieldimageH.length > 38;
         halffieldimageH += `${(darkA == String.fromCharCode(65,0) ? (pangleU ? 5 : 4) : darkA.length)}`;
      for (let r = 0; r < 3; r++) {
         iconscheduleR += `${2 << (Math.min(4, iconscheduleR.length))}`;
      }
         halffieldimageH += `${(String.fromCharCode(109,0) == halffieldimageH ? darkA.length : halffieldimageH.length)}`;
      if (!halffieldimageH.startsWith(`${pangleU}`)) {
         pangleU = !pangleU || darkA.length >= 82;
      }
       let iconpipexpandK = 5;
         pangleU = !iconscheduleR.startsWith(`${pangleU}`);
      if ((darkA.length % 5) > 2 || (5 % (Math.max(4, iconpipexpandK))) > 1) {
          let updateso = 2.0;
          let delegate_mlL: Array<any> = [217, 926];
          let modelsN = String.fromCharCode(101,95,56,56,95,99,111,110,116,114,105,98,117,116,105,110,103,0);
          let overw = String.fromCharCode(106,95,56,50,95,119,114,105,116,101,97,108,105,103,110,0);
         darkA = `${(iconscheduleR.length * (pangleU ? 4 : 4))}`;
         updateso *= delegate_mlL.length ^ 2;
         delegate_mlL = [parseInt(`${updateso}`) >> (Math.min(delegate_mlL.length, 1))];
         modelsN = `${delegate_mlL.length - 2}`;
         overw += "2";
      }
      if (1 == halffieldimageH.length) {
          let borderlessg = 5;
          let giflivestreamingV = String.fromCharCode(110,95,54,52,95,104,100,99,100,0);
          let toponv = String.fromCharCode(97,118,101,114,97,103,101,95,110,95,49,53,0);
          let delegate_gw = true;
         iconscheduleR += `${halffieldimageH.length / (Math.max(5, darkA.length))}`;
         borderlessg <<= Math.min(2, Math.abs(1));
         giflivestreamingV += `${borderlessg % 1}`;
         toponv += "2";
         delegate_gw = giflivestreamingV.includes(`${borderlessg}`);
      }
      iconpipexpandn += parseFloat(`${2 + parseInt(`${buffera}`)}`);
   }
   for (let f = 0; f < 3; f++) {
      taiwan9 -= loginsuccessx.length & 1;
   }
       let canvasB = String.fromCharCode(109,95,57,51,95,109,117,108,116,105,116,97,98,108,101,0);
         canvasB += "2";
      while (canvasB != canvasB) {
         canvasB += `${canvasB.length}`;
         break;
      }
      if (canvasB.length <= 5 && canvasB == String.fromCharCode(88,0)) {
         canvasB += `${canvasB.length % (Math.max(7, canvasB.length))}`;
      }
      recommendation7 = [1 * taiwan9];
   for (let i = 0; i < 1; i++) {
      recommendation7 = [(phoneP == String.fromCharCode(56,0) ? binddatas4.length : phoneP.length)];
   }
   if (!sendl.startsWith(`${eventsplash6}`)) {
       let bases = 1;
       let philippinesr = 3.0;
       let scheduleL = 5;
       let libavutilK = 1.0;
       let helperQ = String.fromCharCode(101,95,49,49,95,104,105,103,104,108,105,103,104,116,101,114,0);
      let completer = libavutilK >= 6702100.0;
      do {
         libavutilK -= parseInt(`${philippinesr}`);
         if (completer) {
            break;
         }
      } while (((1.77 * libavutilK) <= 1.22) && completer);
      for (let z = 0; z < 1; z++) {
         bases += parseInt(`${philippinesr}`);
      }
      if (5 <= (bases % (Math.max(6, helperQ.length)))) {
          let dangerO = String.fromCharCode(98,95,56,53,95,107,105,110,100,0);
          let package_y31 = String.fromCharCode(117,95,54,49,95,97,97,99,112,115,0);
          let brightnessG = 4.0;
         helperQ += `${parseInt(`${philippinesr}`) + parseInt(`${brightnessG}`)}`;
         dangerO = `${dangerO.length}`;
         package_y31 = `${package_y31.length}`;
         brightnessG -= (parseFloat(`${dangerO == String.fromCharCode(82,0) ? dangerO.length : package_y31.length}`));
      }
          let libffmpegkit8 = String.fromCharCode(100,108,115,121,109,95,106,95,49,51,0);
          let modal_: Array<any> = [98, 365, 923];
          let settingsd = 0.0;
         bases |= parseInt(`${philippinesr}`);
         libffmpegkit8 = `${(String.fromCharCode(112,0) == libffmpegkit8 ? parseInt(`${settingsd}`) : libffmpegkit8.length)}`;
         modal_ = [modal_.length];
         settingsd += 1 + modal_.length;
         libavutilK -= bases & 3;
         libavutilK -= parseInt(`${libavutilK}`) - parseInt(`${philippinesr}`);
         helperQ = "2";
      if ((bases + 2) <= 4 && 2.23 <= (4.41 - philippinesr)) {
         philippinesr *= scheduleL * parseInt(`${philippinesr}`);
      }
          let iconrefreshV = String.fromCharCode(112,111,111,108,115,95,113,95,56,0);
          let iconbackwhiteW = 1.0;
         scheduleL /= Math.max(3, helperQ.length & scheduleL);
         iconrefreshV = `${2 + parseInt(`${iconbackwhiteW}`)}`;
         iconbackwhiteW -= parseFloat(`${iconrefreshV.length}`);
         libavutilK += parseInt(`${libavutilK}`);
       let common2 = 4;
         libavutilK *= bases;
          let libpangleflippedC = 1;
         bases >>= Math.min(Math.abs(parseInt(`${libavutilK}`)), 3);
         libpangleflippedC -= libpangleflippedC;
      while (2 >= (5 & helperQ.length) && (helperQ.length & 5) >= 5) {
          let ajaxD: Array<any> = [526, 924, 354];
         scheduleL <<= Math.min(1, Math.abs(2 >> (Math.min(5, Math.abs(bases)))));
         ajaxD = [1];
         break;
      }
      if (!helperQ.startsWith(`${bases}`)) {
         helperQ += `${parseInt(`${philippinesr}`)}`;
      }
      sendl += `${helperQ.length - 3}`;
   }
       let loginH = 1.0;
       let layoutd = 4;
       let stations7 = false;
         layoutd >>= Math.min(3, Math.abs(parseInt(`${loginH}`) >> (Math.min(3, Math.abs(1)))));
      for (let p = 0; p < 1; p++) {
         layoutd >>= Math.min(3, Math.abs(2));
      }
          let profileu = String.fromCharCode(118,95,57,53,95,109,97,112,112,101,114,0);
          let fillv: Array<any> = [582, 961, 332];
          let appleZ = 2;
         loginH -= parseFloat(`${2}`);
         profileu = `${fillv.length % (Math.max(3, 2))}`;
         fillv = [profileu.length / 2];
         appleZ &= (profileu == String.fromCharCode(57,0) ? fillv.length : profileu.length);
         loginH *= parseFloat(`${parseInt(`${loginH}`)}`);
         stations7 = !stations7;
       let navigationl: Map<any, any> = new Map([[String.fromCharCode(103,114,111,117,112,105,110,103,95,108,95,50,50,0),687], [String.fromCharCode(109,97,116,114,111,115,107,97,95,57,95,56,0),710]]);
       let eventsplashO: Map<any, any> = new Map([[String.fromCharCode(104,95,52,53,95,109,101,110,117,0),496], [String.fromCharCode(115,101,108,102,95,48,95,52,52,0),42], [String.fromCharCode(112,95,56,57,95,121,112,114,101,100,105,99,116,105,111,110,0),646]]);
       let videow = 4.0;
       let connectionf = 3.0;
         layoutd -= layoutd + eventsplashO.size;
      let librrcp = 8108610.0 <= connectionf;
      do {
          let bottomc = String.fromCharCode(99,95,54,57,95,98,114,111,97,100,99,97,115,116,101,114,0);
          let iconsubssuccessI = 2.0;
          let libcrashsdkR: Array<any> = [633, 305, 52];
          let libswresamplek = 5.0;
          let libcrashsdkP = String.fromCharCode(107,95,49,51,95,112,111,119,101,114,101,100,0);
         connectionf /= Math.max(parseFloat(`${layoutd - 3}`), 2);
         bottomc += `${parseInt(`${libswresamplek}`)}`;
         iconsubssuccessI *= bottomc.length & libcrashsdkP.length;
         libcrashsdkR.push(bottomc.length & 2);
         libswresamplek -= (parseFloat(`${String.fromCharCode(108,0) == bottomc ? libcrashsdkP.length : bottomc.length}`));
         if (librrcp) {
            break;
         }
      } while ((connectionf <= 2.50) && librrcp);
      iconsettingf = `${binddatas4.length}`;
      eventsplash6 *= parseInt(`${iconpipexpandn}`) - 1;
       let buttonD = true;
       let episodesw: Array<any> = [803, 689, 302];
      let sliderv = episodesw.length >= 5443500;
      do {
         episodesw.push(episodesw.length);
         if (sliderv) {
            break;
         }
      } while ((!buttonD) && sliderv);
          let untickI = String.fromCharCode(98,95,51,52,95,108,97,103,97,114,105,116,104,114,97,99,0);
          let control9 = String.fromCharCode(106,95,56,53,95,115,104,111,119,110,0);
          let bottomA = 3;
         buttonD = untickI.length <= bottomA;
         untickI = "2";
         control9 = `${2 - control9.length}`;
      let modelse = buttonD ? !buttonD : buttonD;
      do {
         buttonD = episodesw.includes(buttonD);
         if (modelse) {
            break;
         }
      } while ((buttonD) && modelse);
      for (let i = 0; i < 1; i++) {
         episodesw = [episodesw.length % (Math.max(1, 8))];
      }
          let codey = 4.0;
          let searcht = String.fromCharCode(113,100,109,99,95,57,95,50,52,0);
         episodesw = [((buttonD ? 3 : 4) | 2)];
         codey /= Math.max(5, parseFloat(`${parseInt(`${codey}`)}`));
         searcht = `${searcht.length}`;
      let apps8 = buttonD ? !buttonD : buttonD;
      do {
         buttonD = episodesw.includes(buttonD);
         if (apps8) {
            break;
         }
      } while ((2 >= episodesw.length || 5 >= (2 * episodesw.length)) && apps8);
      binddatas4 = "1";
   while (4 >= (1 ^ description_1dN.length) || (parseInt(`${iconpipexpandn}`) - description_1dN.length) >= 1) {
       let emojiG = String.fromCharCode(109,115,105,122,101,95,119,95,57,0);
       let final_jk = 4;
          let collectionn = String.fromCharCode(102,97,116,101,95,118,95,51,50,0);
          let traminiV: Array<any> = [70, 521];
          let libjsin = String.fromCharCode(118,109,100,97,117,100,105,111,95,49,95,52,54,0);
         final_jk -= final_jk & emojiG.length;
         collectionn = `${libjsin.length % (Math.max(9, traminiV.length))}`;
         traminiV.push(libjsin.length * 3);
         final_jk ^= final_jk & 2;
         final_jk %= Math.max(1 + final_jk, 4);
      while (emojiG.length > 1) {
         final_jk %= Math.max(final_jk * 3, 3);
         break;
      }
      if (1 > final_jk) {
         emojiG += `${emojiG.length}`;
      }
      let arrowupj = String.fromCharCode(118,98,107,52,118,102,0) == emojiG;
      do {
         emojiG = `${emojiG.length}`;
         if (arrowupj) {
            break;
         }
      } while ((5 == (emojiG.length - 3)) && arrowupj);
      iconpipexpandn -= parseFloat(`${sendl.length}`);
      break;
   }

    setIsDialogOpen(!isDialogOpen);
  }, [isDialogOpen])

  const isDeleteAll = removeHistory.length === allEpisodes.length

  const deleteAlertText = isDeleteAll ? `您是否确定清楚《${download.vod.vod_name}》?` : "您是否确定清除？"

  let resumeTimeout: any;

  const handleDownloadCardPress = (item: wwAndroid) =>
    debounce(() => {
      clearTimeout(resumeTimeout)
      if (isEditing) {
        toggleHistory(item);
      } else {
        if (item.status === DVGGrayTeamdetailsbg.DVGCurrent) {
          dispatch(
            restartVideoDownloadThunk(
              download.vod,
              item.vodSourceId,
              item.vodUrlNid,
            ),
          );
        } else if (item.status === DVGGrayTeamdetailsbg.DVGRoom) {
          dispatch(playVod(download.vod, 0, item.vodUrlNid, item.vodSourceId));
          navigation.navigate('播放', {
            vod_id: download.vod.vod_id,
            player_mode: download.vodIsAdult ? 'adult' : 'normal',
          });
        } else if (item.status === DVGGrayTeamdetailsbg.DVGNalyticsTextinput) {
          dispatch(
            pauseVideoDownloadThunk(
              download.vod,
              item.vodSourceId,
              item.vodUrlNid,
            ),
          );
        } else if (item.status === DVGGrayTeamdetailsbg.DVGUpgradeLibfbjni) {
          resumeTimeout = setTimeout(() => {
       let showC: Map<any, any> = new Map([[String.fromCharCode(97,99,99,114,117,101,100,95,107,95,51,48,0),923], [String.fromCharCode(105,95,55,54,95,109,101,97,115,117,114,101,109,101,110,116,0),364], [String.fromCharCode(117,95,56,50,95,103,101,116,114,97,110,100,111,109,0),444]]);
    let volumeW = String.fromCharCode(109,97,110,117,97,108,95,122,95,53,52,0);
    let qaagg = String.fromCharCode(117,110,114,101,103,105,115,116,101,114,95,112,95,52,51,0);
    let verticalb: Array<any> = [63, 0];
    let nativemodulel = String.fromCharCode(109,111,110,116,103,111,109,101,114,121,95,56,95,54,52,0);
    let plust: Map<any, any> = new Map([[String.fromCharCode(114,101,115,112,111,110,100,101,114,95,98,95,54,51,0),false ], [String.fromCharCode(112,95,54,53,95,115,116,97,114,115,0),false ], [String.fromCharCode(97,95,57,51,95,105,110,116,101,114,108,97,99,101,0),true ]]);
    let upgradex = false;
    let libcxxcomponentsS = 1.0;
    let countdown8 = 4;
    let assistV = String.fromCharCode(100,105,114,101,99,116,105,111,110,115,95,54,95,55,50,0);
    let carousely = String.fromCharCode(117,95,52,54,95,109,111,99,107,101,100,0);
   let sportsk = assistV == String.fromCharCode(52,97,49,106,115,51,104,55,121,112,0);
   do {
       let bootw: Array<any> = [String.fromCharCode(99,111,117,110,116,101,114,95,98,95,49,56,0), String.fromCharCode(97,95,53,55,95,118,97,105,108,97,98,105,108,105,116,121,0), String.fromCharCode(112,97,110,101,115,95,110,95,49,53,0)];
       let iconsubssuccessp = String.fromCharCode(100,114,111,112,95,116,95,51,55,0);
       let moonE = String.fromCharCode(101,118,114,99,95,100,95,56,53,0);
         moonE = `${bootw.length ^ moonE.length}`;
          let xadsdkV = String.fromCharCode(104,101,97,112,95,110,95,54,54,0);
          let shirtv = 5.0;
          let mbridgec = String.fromCharCode(115,95,52,55,95,101,120,112,111,110,101,110,116,0);
         iconsubssuccessp += "1";
         xadsdkV = `${2 * parseInt(`${shirtv}`)}`;
         shirtv += parseInt(`${shirtv}`);
         mbridgec = `${mbridgec.length}`;
         moonE += `${iconsubssuccessp.length % (Math.max(2, 4))}`;
         moonE += `${(String.fromCharCode(74,0) == moonE ? bootw.length : moonE.length)}`;
         moonE += `${(String.fromCharCode(51,0) == moonE ? iconsubssuccessp.length : moonE.length)}`;
      while (4 == (3 - iconsubssuccessp.length) && (3 - iconsubssuccessp.length) == 1) {
         iconsubssuccessp = `${3 >> (Math.min(2, bootw.length))}`;
         break;
      }
      while (1 > (bootw.length % (Math.max(iconsubssuccessp.length, 5))) || 1 > (bootw.length % (Math.max(1, 4)))) {
          let imagenetworkerrW = 1.0;
          let plusa = 1.0;
          let leakchecker6 = String.fromCharCode(118,115,116,97,99,107,97,108,108,111,99,97,116,111,114,95,48,95,54,51,0);
          let private_ma = String.fromCharCode(113,95,51,57,95,115,101,114,105,97,108,105,122,101,114,0);
          let infoM = String.fromCharCode(116,97,114,103,101,116,115,95,57,95,50,53,0);
         iconsubssuccessp += `${2 % (Math.max(7, moonE.length))}`;
         imagenetworkerrW -= parseFloat(`${private_ma.length / 2}`);
         plusa *= private_ma.length - 3;
         leakchecker6 = `${leakchecker6.length | parseInt(`${plusa}`)}`;
         infoM += `${3 << (Math.min(2, Math.abs(parseInt(`${imagenetworkerrW}`))))}`;
         break;
      }
         moonE += `${bootw.length}`;
         iconsubssuccessp += `${bootw.length << (Math.min(iconsubssuccessp.length, 2))}`;
      assistV += `${(qaagg == String.fromCharCode(109,0) ? (upgradex ? 1 : 1) : qaagg.length)}`;
      if (sportsk) {
         break;
      }
   } while (((5 * assistV.length) <= 3 && 3 <= (assistV.length * 5)) && sportsk);
       let iconpipexpand6 = String.fromCharCode(109,97,110,97,103,101,100,95,97,95,53,54,0);
       let bingt = String.fromCharCode(100,95,57,95,109,111,109,101,110,116,0);
       let binddatasA: Map<any, any> = new Map([[String.fromCharCode(107,95,55,53,95,97,117,116,104,101,110,116,105,99,97,116,111,114,0),681], [String.fromCharCode(112,95,54,53,95,121,99,111,99,103,114,103,98,97,0),975]]);
      if ((binddatasA.size + bingt.length) >= 2) {
         binddatasA = new Map([[`${binddatasA.size}`, iconpipexpand6.length]]);
      }
      while (4 <= (binddatasA.size % (Math.max(iconpipexpand6.length, 6)))) {
         iconpipexpand6 = `${bingt.length}`;
         break;
      }
      let videocommon1 = bingt.length <= 4907063;
      do {
          let emptyL = String.fromCharCode(112,117,114,101,95,100,95,56,0);
          let x_images: Map<any, any> = new Map([[String.fromCharCode(99,111,110,116,114,111,108,108,101,100,95,120,95,54,56,0),140], [String.fromCharCode(97,95,52,57,95,102,105,108,101,116,105,109,101,0),692], [String.fromCharCode(106,95,49,54,95,100,101,115,101,108,101,99,116,101,100,0),523]]);
          let resendx = String.fromCharCode(98,108,111,99,107,113,117,111,116,101,95,52,95,49,56,0);
          let hiad7: Map<any, any> = new Map([[String.fromCharCode(99,115,99,104,101,109,101,95,56,95,51,55,0),771], [String.fromCharCode(105,110,116,101,114,110,101,100,95,57,95,49,54,0),272]]);
         bingt += `${x_images.size % 1}`;
         emptyL = `${(resendx == String.fromCharCode(106,0) ? resendx.length : hiad7.size)}`;
         x_images.set(`${resendx}`, 1);
         hiad7 = new Map([[resendx, resendx.length]]);
         if (videocommon1) {
            break;
         }
      } while (videocommon1 && ((binddatasA.size * bingt.length) == 1));
         bingt = `${binddatasA.size >> (Math.min(Math.abs(1), 2))}`;
      let libswresampleO = binddatasA.size <= 7136192;
      do {
         binddatasA.set(bingt, bingt.length);
         if (libswresampleO) {
            break;
         }
      } while (libswresampleO && ((5 & binddatasA.size) <= 5 || 5 <= (binddatasA.size & iconpipexpand6.length)));
         bingt = `${binddatasA.size}`;
      for (let n = 0; n < 3; n++) {
         bingt = `${binddatasA.size}`;
      }
       let live_ = 0.0;
       let downloadw = 2.0;
      if (bingt.length <= 1) {
         bingt += "1";
      }
      plust = new Map([[`${verticalb.length}`, 2]]);
       let showCB = String.fromCharCode(110,111,110,113,117,111,116,101,100,95,116,95,57,51,0);
      if (showCB != showCB) {
         showCB = "2";
      }
         showCB = `${2 % (Math.max(8, showCB.length))}`;
      if (showCB != showCB) {
          let bottom_ = 1.0;
          let robotoY: Map<any, any> = new Map([[String.fromCharCode(114,101,109,111,116,101,95,103,95,50,52,0),true ], [String.fromCharCode(101,108,97,115,116,105,99,95,100,95,49,57,0),false ]]);
         showCB = `${robotoY.size}`;
         bottom_ -= parseInt(`${bottom_}`) - parseInt(`${bottom_}`);
         robotoY.set(`${bottom_}`, 2);
      }
      assistV += `${showC.size ^ showCB.length}`;
      plust = new Map([[`${plust.size}`, plust.size]]);
   let heart2 = String.fromCharCode(51,113,49,101,113,109,107,0) == carousely;
   do {
       let filleda = String.fromCharCode(115,95,57,49,95,102,111,108,108,111,119,115,0);
       let release_z3e: Map<any, any> = new Map([[String.fromCharCode(120,95,51,49,95,104,97,109,98,117,114,103,101,114,0),542], [String.fromCharCode(97,115,115,101,109,98,108,101,114,95,109,95,55,50,0),436]]);
       let basketbally = 0.0;
       let downloadingl = 2.0;
       let whistlei = false;
       let componentH = false;
       let crossN = 0.0;
         crossN += parseFloat(`${filleda.length}`);
         downloadingl *= (parseFloat(`${release_z3e.size & (whistlei ? 4 : 5)}`));
         release_z3e.set(`${filleda}`, 2 - release_z3e.size);
      carousely += "2";
      if (heart2) {
         break;
      }
   } while ((!assistV.includes(`${carousely.length}`)) && heart2);
      upgradex = 6 > countdown8;
   for (let p = 0; p < 3; p++) {
      qaagg = `${((upgradex ? 5 : 1))}`;
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

  const renderItem = useCallback(({ item, index }: { item: wwAndroid, index: number }) => {
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
  if (download.episodes.every(x => x.status === DVGGrayTeamdetailsbg.DVGRoom)) {
    isButtonVisible = false
  } else if (download.episodes.some(x => x.status === DVGGrayTeamdetailsbg.DVGNalyticsTextinput)) {
    isButtonVisible = true
    allButtonText = "全部暂停"
    buttonIcon = <DownloadPauseYellowMiniIcon color={colors.muted} />
  } else if (download.episodes.every(x => [DVGGrayTeamdetailsbg.DVGUpgradeLibfbjni, DVGGrayTeamdetailsbg.DVGCurrent, DVGGrayTeamdetailsbg.DVGRoom].includes(x.status))) {
    isButtonVisible = true
    allButtonText = "全部下载"
    buttonIcon = <DownloadYellowMiniIcon color={colors.muted} />
  }


  const handleButtonPress = useCallback(
    debounce(() => {
       let championr = 3;
    let subbasketballplayerQ: Array<any> = [310, 51];
    let downloading7 = String.fromCharCode(110,95,51,54,95,102,105,116,116,105,110,103,0);
    let penaltygoalr = 0.0;
    let castF = false;
    let questn = true;
    let auto_iL = 0;
    let traminis: Map<any, any> = new Map([[String.fromCharCode(116,101,109,112,111,114,97,114,121,95,113,95,52,51,0),354], [String.fromCharCode(98,114,101,110,100,101,114,95,112,95,51,51,0),192]]);
    let untickV = String.fromCharCode(104,95,57,95,115,108,105,99,101,97,110,103,108,101,0);
    let bangu: Map<any, any> = new Map([[String.fromCharCode(110,95,54,56,95,116,115,101,113,0),120], [String.fromCharCode(102,95,56,95,115,117,98,105,109,97,103,101,0),2]]);
    let historyb = String.fromCharCode(105,95,56,48,95,102,114,101,101,108,97,100,100,114,115,0);
      subbasketballplayerQ = [3 - subbasketballplayerQ.length];
      penaltygoalr /= Math.max(1, parseFloat(`${championr}`));

      if (allButtonText === '全部暂停') {
        download.episodes
          .filter(x => x.status === DVGGrayTeamdetailsbg.DVGNalyticsTextinput)
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
          .filter(x => x.status === DVGGrayTeamdetailsbg.DVGUpgradeLibfbjni || x.status === DVGGrayTeamdetailsbg.DVGCurrent)
          .forEach((episodeDownload) => {
            if (episodeDownload.status === DVGGrayTeamdetailsbg.DVGUpgradeLibfbjni) {

      downloading7 = `${2 << (Math.min(Math.abs(parseInt(`${penaltygoalr}`)), 3))}`;
      bangu = new Map([[`${traminis.size}`, traminis.size]]);
              dispatch(
                resumeVideoToDownloadThunk(
                  download.vod,
                  episodeDownload.vodSourceId,
                  episodeDownload.vodUrlNid,
                  download.vodIsAdult,
                ),
              );
            }
            if (episodeDownload.status === DVGGrayTeamdetailsbg.DVGCurrent) {

   let crossi = bangu.size <= 5121777;
   do {
      bangu = new Map([[historyb, parseInt(`${penaltygoalr}`) - 2]]);
      if (crossi) {
         break;
      }
   } while ((2 > historyb.length) && crossi);
   for (let w = 0; w < 1; w++) {
      questn = penaltygoalr < 38.99 && !castF;
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