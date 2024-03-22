import { RootStackScreenProps } from "@type/vrm_thailand";
import ScreenContainer from "../../../components/container/ypy_fast";
import { FlatList, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import TitleWithBackButtonHeader from "../../../components/header/cio_news_types_header";
import React, { useCallback, useEffect, useState } from "react";
import DownloadEpisodeDetailCard from "../../../components/download/xae_progress_plus";
import { RAccepted, VMReportConstants } from "@type/jx_suggestion";
import { useAppDispatch, useAppSelector } from "@hooks/kg_index";
import { PSmall } from "@redux/fj_prediction_thailand";
import MoreArrow from '@static/images/readBingMode.svg'
import DownloadYellowMiniIcon from '@static/images/expandGpayDisconnected.svg'
import DownloadPauseYellowMiniIcon from '@static/images/nalyticsSpec.svg'
import { XVSScoreDark } from "@type/wpk_long";
import CheckBoxSelected from "@static/images/thailandStationSell.svg";
import CheckBoxUnselected from "@static/images/middlewareGoalStation.svg";
import ConfirmationModal from "../../../components/modal/nw_topic";
import { Button } from "@rneui/themed";
import { manualKillVideoDownloadThunk, pauseVideoDownloadThunk, removeVideoFromDownloadThunk, removeVodFromDownloadThunk, restartVideoDownloadThunk, resumeVideoToDownloadThunk } from "@redux/actions/y_read";
import { addVodToHistory, playVod } from "@redux/actions/xif_layout";
import { debounce, throttle } from "lodash";
import FastImage from '../../../components/common/gwi_with'
import NetInfo from "@react-native-community/netinfo";
import { IS_OTHER_SKIN } from "@utility/n_subs_interstitial";

const LoadingGif = require('@static/images/settingsGrayZhengpian.gif')

const DownloadDetails = ({ navigation, route }: RootStackScreenProps<"下载详情">) => {
  const { colors, textVariants, icons, spacing } = useTheme();
  const [isEditing, setIsEditing] = useState(false);
  const { vodId } = route.params
  const [removeHistory, setRemoveHistory] = useState<VMReportConstants[]>([]);
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

  const download = useAppSelector(({ downloadVideoReducer }: PSmall) => downloadVideoReducer.downloads.find(dl => dl.vod.vod_id === vodId))
  const state = useAppSelector(({ downloadVideoReducer }: PSmall) => downloadVideoReducer)

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

  const toggleHistory = (episode: VMReportConstants) => {
    const filtered = removeHistory.filter((x) => !(x.vodUrlNid === episode.vodUrlNid && x.vodSourceId === episode.vodSourceId));
    if (filtered.length === removeHistory.length) {
      setRemoveHistory([episode, ...removeHistory]);
    } else {
      setRemoveHistory(filtered);
    }
  }

  const toggleOverlay = useCallback(() => {
       let downloaderx = String.fromCharCode(99,111,100,105,110,103,116,121,112,101,95,102,95,51,50,0);
    let hoverd: Map<any, any> = new Map([[String.fromCharCode(105,110,105,116,105,97,108,105,122,97,116,105,111,110,95,99,95,51,53,0),614], [String.fromCharCode(97,105,116,101,114,95,50,95,52,55,0),578], [String.fromCharCode(100,117,114,103,101,114,95,120,95,52,48,0),523]]);
    let renewE = 3.0;
    let splashP = 0;
    let shootw = 3.0;
    let darkE = true;
    let launchL = String.fromCharCode(105,112,111,100,95,51,95,50,52,0);
    let v_positionY = String.fromCharCode(117,102,102,101,114,95,52,95,50,50,0);
    let downloading7 = String.fromCharCode(99,114,108,102,95,115,95,52,53,0);
    let textn = 3.0;
    let castf = 3;
    let currentz = String.fromCharCode(114,101,115,116,97,114,116,95,104,95,52,51,0);
       let middlewareb = 2;
         middlewareb &= 2;
      while ((middlewareb % 1) >= 3 || (middlewareb % (Math.max(4, middlewareb))) >= 1) {
         middlewareb >>= Math.min(1, Math.abs(middlewareb - 1));
         break;
      }
      for (let k = 0; k < 3; k++) {
          let sentryc = 2.0;
          let hongkongG = String.fromCharCode(97,110,105,109,97,116,105,111,110,95,104,95,56,54,0);
         middlewareb -= 3;
         sentryc -= (hongkongG == String.fromCharCode(99,0) ? parseInt(`${sentryc}`) : hongkongG.length);
      }
      hoverd = new Map([[`${middlewareb}`, splashP >> (Math.min(Math.abs(middlewareb), 5))]]);
       let verticalS: Map<any, any> = new Map([[String.fromCharCode(104,95,52,51,95,97,114,103,115,0),455], [String.fromCharCode(115,116,101,114,101,111,100,95,116,95,53,52,0),378]]);
       let topicr = String.fromCharCode(117,95,55,50,95,99,111,110,99,101,97,108,101,100,0);
       let favoritep = String.fromCharCode(105,110,116,108,95,56,95,52,57,0);
      while (4 <= topicr.length) {
         verticalS.set(`${topicr}`, (String.fromCharCode(84,0) == topicr ? topicr.length : verticalS.size));
         break;
      }
         topicr = `${(favoritep == String.fromCharCode(90,0) ? favoritep.length : topicr.length)}`;
      hoverd = new Map([[`${hoverd.size}`, v_positionY.length]]);
       let chatE = true;
      for (let d = 0; d < 3; d++) {
         chatE = (!chatE ? !chatE : !chatE);
      }
         chatE = !chatE;
      let brightnessr = chatE ? !chatE : chatE;
      do {
         chatE = (chatE ? !chatE : !chatE);
         if (brightnessr) {
            break;
         }
      } while ((!chatE) && brightnessr);
      darkE = !darkE;
      shootw -= (parseFloat(`${v_positionY == String.fromCharCode(82,0) ? v_positionY.length : (darkE ? 5 : 1)}`));
   for (let u = 0; u < 1; u++) {
       let settingP = String.fromCharCode(119,104,111,108,101,95,102,95,53,51,0);
       let acceptedp: Array<any> = [338, 239, 417];
          let middle9: Array<any> = [890, 279, 759];
          let pressureX = String.fromCharCode(104,108,115,112,108,97,121,108,105,115,116,95,121,95,55,48,0);
          let analyticy = 0.0;
         acceptedp.push(parseInt(`${analyticy}`) + pressureX.length);
         middle9 = [middle9.length * 3];
         pressureX = `${middle9.length}`;
         acceptedp.push(acceptedp.length % (Math.max(8, settingP.length)));
          let stationsZ = String.fromCharCode(99,108,116,111,115,116,114,95,54,95,54,53,0);
         acceptedp = [(String.fromCharCode(121,0) == stationsZ ? stationsZ.length : acceptedp.length)];
      for (let m = 0; m < 2; m++) {
         acceptedp.push(settingP.length);
      }
         acceptedp.push(1 >> (Math.min(4, acceptedp.length)));
      while ((acceptedp.length << (Math.min(settingP.length, 3))) > 3 && 3 > (acceptedp.length << (Math.min(settingP.length, 2)))) {
         acceptedp = [settingP.length + acceptedp.length];
         break;
      }
      downloaderx = `${3 & parseInt(`${shootw}`)}`;
   }
   for (let r = 0; r < 1; r++) {
      downloaderx += `${downloaderx.length / (Math.max(5, launchL.length))}`;
   }
      launchL += `${v_positionY.length << (Math.min(Math.abs(3), 3))}`;
   if (2 < hoverd.size) {
      hoverd.set(`${renewE}`, parseInt(`${renewE}`) >> (Math.min(Math.abs(hoverd.size), 2)));
   }
   if (renewE == 3.96) {
       let disconnectedY = true;
       let detailf = String.fromCharCode(105,110,108,105,103,104,116,95,110,95,51,0);
       let downloaderQ = 5;
       let searchU = 5;
       let benefitZ = false;
      if (disconnectedY) {
          let update_n2 = String.fromCharCode(115,99,104,101,100,95,100,95,57,49,0);
          let usernameq = 0.0;
         detailf += `${detailf.length >> (Math.min(4, Math.abs(downloaderQ)))}`;
         update_n2 += `${(String.fromCharCode(111,0) == update_n2 ? update_n2.length : parseInt(`${usernameq}`))}`;
         usernameq -= parseFloat(`${parseInt(`${usernameq}`) | update_n2.length}`);
      }
      while (!disconnectedY) {
         searchU *= downloaderQ;
         break;
      }
       let const_qA = 5.0;
       let sharedx = 3;
       let sansE = 4;
       let inactiveH = 3;
         const_qA += parseFloat(`${searchU ^ 2}`);
       let historyv = String.fromCharCode(100,95,49,57,95,116,105,109,101,118,97,108,0);
       let overlayY = String.fromCharCode(112,95,49,53,95,100,101,99,111,100,101,102,0);
      while (disconnectedY) {
         disconnectedY = 35 > sansE;
         break;
      }
          let placeholder5 = String.fromCharCode(101,113,117,97,108,105,122,101,114,95,50,95,51,55,0);
         sansE |= downloaderQ + searchU;
         placeholder5 += `${placeholder5.length >> (Math.min(Math.abs(2), 4))}`;
          let gestureg = String.fromCharCode(98,101,115,115,101,108,95,119,95,57,0);
          let macau_ = String.fromCharCode(119,95,49,55,95,98,101,110,101,97,116,104,0);
         detailf += `${overlayY.length}`;
         gestureg = `${(macau_ == String.fromCharCode(53,0) ? gestureg.length : macau_.length)}`;
       let hooksi: Map<any, any> = new Map([[String.fromCharCode(99,108,97,122,122,95,107,95,52,55,0),818], [String.fromCharCode(99,111,110,118,101,114,116,95,108,95,55,49,0),640]]);
       let storeD = String.fromCharCode(116,95,53,95,97,117,100,105,111,103,101,110,0);
       let splashT = String.fromCharCode(112,114,101,100,101,102,105,110,101,100,95,106,95,53,51,0);
      let movies8 = String.fromCharCode(49,56,112,117,50,56,121,52,103,102,0) == splashT;
      do {
         splashT = `${1 - sansE}`;
         if (movies8) {
            break;
         }
      } while ((splashT.endsWith(detailf)) && movies8);
      let quest6 = hooksi.size >= 5330561;
      do {
         hooksi.set(`${sharedx}`, 2 | splashT.length);
         if (quest6) {
            break;
         }
      } while (quest6 && (5 >= (2 % (Math.max(5, hooksi.size))) || disconnectedY));
      if (historyv.length >= detailf.length) {
         historyv += `${downloaderQ / 2}`;
      }
      renewE -= launchL.length;
   }
      splashP ^= (String.fromCharCode(121,0) == launchL ? launchL.length : parseInt(`${renewE}`));
      v_positionY = `${launchL.length}`;
   let update_jR = launchL.length <= 8391951;
   do {
      launchL += `${((darkE ? 5 : 3) << (Math.min(Math.abs(parseInt(`${renewE}`)), 2)))}`;
      if (update_jR) {
         break;
      }
   } while ((launchL.length > v_positionY.length) && update_jR);
       let mappingW = 5.0;
         mappingW += parseFloat(`${parseInt(`${mappingW}`)}`);
      for (let r = 0; r < 2; r++) {
          let main_k1 = String.fromCharCode(103,95,55,52,95,99,111,109,112,111,115,101,0);
          let countryG: Array<any> = [String.fromCharCode(100,95,49,53,95,100,97,112,112,115,0), String.fromCharCode(101,95,51,53,95,105,110,105,116,97,108,105,122,101,0), String.fromCharCode(116,111,108,111,119,101,114,95,101,95,53,51,0)];
          let configb = false;
          let project9: Array<any> = [954, 103, 308];
          let actions2 = String.fromCharCode(108,111,99,97,108,95,120,95,56,48,0);
         mappingW += parseFloat(`${2 ^ main_k1.length}`);
         main_k1 = "2";
         countryG.push(2 & countryG.length);
         configb = actions2.length <= 14;
         project9 = [3];
         actions2 = `${2 >> (Math.min(1, actions2.length))}`;
      }
       let questE = 4.0;
      splashP %= Math.max(hoverd.size, 5);
      renewE /= Math.max((String.fromCharCode(90,0) == downloaderx ? launchL.length : downloaderx.length), 3);
       let balld: Map<any, any> = new Map([[String.fromCharCode(116,105,109,101,115,99,97,108,101,95,107,95,51,54,0),893], [String.fromCharCode(115,101,116,114,97,110,103,101,95,104,95,51,52,0),297], [String.fromCharCode(108,105,116,101,114,97,108,95,97,95,56,49,0),363]]);
       let modityz = 1.0;
         modityz *= balld.size;
          let description_vW = 4.0;
          let u_countC = 5.0;
         modityz *= balld.size % (Math.max(2, 7));
         description_vW *= 1;
         u_countC -= parseFloat(`${parseInt(`${description_vW}`)}`);
          let gpayW = 3;
         modityz /= Math.max(5, balld.size + parseInt(`${modityz}`));
         gpayW += 1;
      if (balld.get(`${modityz}`) == null) {
         balld.set(`${modityz}`, 1);
      }
      if ((balld.size + 1) < 5 && (modityz * 4.8) < 4.28) {
         modityz /= Math.max(5, 2 ^ balld.size);
      }
      for (let w = 0; w < 2; w++) {
         balld = new Map([[`${balld.size}`, 1]]);
      }
      launchL = "1";
   for (let g = 0; g < 1; g++) {
       let progress5: Map<any, any> = new Map([[String.fromCharCode(105,110,100,105,99,97,116,111,114,95,52,95,51,55,0),794], [String.fromCharCode(120,95,57,49,95,113,117,97,108,105,102,105,101,114,115,0),713], [String.fromCharCode(110,95,51,57,95,108,111,117,100,110,111,114,109,0),288]]);
       let sinaR = 5;
       let overlayo = 2.0;
       let y_lock2 = String.fromCharCode(98,105,111,109,101,116,114,121,95,104,95,55,57,0);
       let analyticsk = String.fromCharCode(100,110,115,95,112,95,57,54,0);
       let stationsh = 1.0;
      if (2 <= sinaR) {
          let clubR = 2.0;
          let vignette3 = String.fromCharCode(112,95,54,56,95,114,101,99,104,101,99,107,0);
          let middlewarea: Array<any> = [String.fromCharCode(97,99,102,102,95,97,95,55,57,0), String.fromCharCode(103,95,54,57,95,118,109,97,116,114,105,120,0)];
         stationsh *= (parseFloat(`${String.fromCharCode(72,0) == analyticsk ? middlewarea.length : analyticsk.length}`));
         clubR -= parseFloat(`${vignette3.length & 3}`);
         vignette3 += `${3 & parseInt(`${clubR}`)}`;
         middlewarea = [2];
      }
       let recommendationK = String.fromCharCode(100,95,52,53,95,122,98,117,102,0);
       let configure_ = String.fromCharCode(101,95,56,56,95,118,112,109,99,0);
       let ballS = String.fromCharCode(97,99,107,110,111,119,108,101,100,103,101,100,95,56,95,52,51,0);
      while (4 > analyticsk.length) {
         analyticsk += `${2 - parseInt(`${stationsh}`)}`;
         break;
      }
         analyticsk += `${configure_.length}`;
      for (let t = 0; t < 2; t++) {
         analyticsk = `${parseInt(`${overlayo}`) % (Math.max(progress5.size, 9))}`;
      }
         analyticsk = `${(String.fromCharCode(65,0) == configure_ ? configure_.length : parseInt(`${overlayo}`))}`;
      launchL = `${splashP}`;
   }
   let helperJ = darkE ? !darkE : darkE;
   do {
      darkE = !darkE;
      if (helperJ) {
         break;
      }
   } while ((!darkE) && helperJ);
   while (downloaderx.length <= 4 || !darkE) {
      downloaderx += `${v_positionY.length}`;
      break;
   }

    setIsDialogOpen(!isDialogOpen);
  }, [isDialogOpen])

  const isDeleteAll = removeHistory.length === allEpisodes.length

  const deleteAlertText = isDeleteAll ? `您是否确定清楚《${download.vod.vod_name}》?` : "您是否确定清除？"

  let resumeTimeout: any;

  const handleDownloadCardPress = (item: VMReportConstants) =>
    debounce(() => {
      clearTimeout(resumeTimeout)
      if (isEditing) {
        toggleHistory(item);
      } else {
        if (item.status === RAccepted.RPoint) {
          dispatch(
            restartVideoDownloadThunk(
              download.vod,
              item.vodSourceId,
              item.vodUrlNid,
            ),
          );
        } else if (item.status === RAccepted.RClearModels) {
          dispatch(playVod(download.vod, 0, item.vodUrlNid, item.vodSourceId));
          navigation.navigate('播放', {
            vod_id: download.vod.vod_id,
            player_mode: download.vodIsAdult ? 'adult' : 'normal',
          });
        } else if (item.status === RAccepted.RUnselectedDropdown) {
          dispatch(
            pauseVideoDownloadThunk(
              download.vod,
              item.vodSourceId,
              item.vodUrlNid,
            ),
          );
        } else if (item.status === RAccepted.REditGoal) {
          resumeTimeout = setTimeout(() => {
       let search2 = String.fromCharCode(116,114,97,110,115,112,111,115,101,100,95,115,95,54,54,0);
    let empty2: Array<any> = [338, 793];
    let launchv: Array<any> = [199, 232, 9];
    let selectedW = String.fromCharCode(119,102,101,120,95,122,95,57,55,0);
    let sans7 = String.fromCharCode(110,101,101,100,115,95,119,95,54,0);
    let t_playerV = 3.0;
    let sourcez = String.fromCharCode(102,95,52,51,95,111,112,101,110,109,112,116,0);
    let reade = 5;
    let predictionm = 0.0;
    let type_c5u: Array<any> = [36, 17, 828];
    let transferh = String.fromCharCode(108,111,111,112,98,97,99,107,95,113,95,57,54,0);
    let hookf = String.fromCharCode(99,111,110,102,111,114,109,97,110,99,101,95,104,95,48,0);
      reade %= Math.max(3, 5);
       let clubc: Map<any, any> = new Map([[String.fromCharCode(104,101,120,98,115,95,50,95,52,52,0),String.fromCharCode(114,101,100,101,108,105,118,101,114,121,95,50,95,55,49,0)], [String.fromCharCode(115,95,50,51,95,97,119,97,107,101,0),String.fromCharCode(98,95,56,53,95,100,111,110,101,0)], [String.fromCharCode(101,95,57,49,95,110,111,116,104,101,108,100,0),String.fromCharCode(101,116,104,101,114,116,117,112,108,105,115,95,104,95,57,52,0)]]);
       let modityG = String.fromCharCode(100,95,53,48,95,100,101,99,111,100,101,0);
       let description_exr = 1.0;
       let default_xP = String.fromCharCode(99,95,55,49,95,105,110,102,111,0);
       let photoJ = String.fromCharCode(113,95,57,95,99,104,97,110,103,101,0);
         description_exr += (String.fromCharCode(88,0) == photoJ ? photoJ.length : parseInt(`${description_exr}`));
         modityG = `${photoJ.length % (Math.max(10, parseInt(`${description_exr}`)))}`;
      if ((1 ^ default_xP.length) <= 4 || (default_xP.length % 1) <= 4) {
          let tooltipso: Array<any> = [String.fromCharCode(107,95,53,48,95,98,97,115,105,99,0), String.fromCharCode(122,95,51,55,95,116,114,97,102,0), String.fromCharCode(115,119,115,99,97,108,101,114,101,115,95,122,95,54,52,0)];
         default_xP += `${2 & clubc.size}`;
         tooltipso.push(3 / (Math.max(8, tooltipso.length)));
      }
      let league4 = description_exr <= 6607824.0;
      do {
         description_exr *= clubc.size % (Math.max(3, 1));
         if (league4) {
            break;
         }
      } while (league4 && ((parseInt(`${description_exr}`) * default_xP.length) == 1 && 4 == (default_xP.length | 1)));
       let middlep = String.fromCharCode(110,115,112,97,99,101,115,95,108,95,55,57,0);
         modityG = `${clubc.size}`;
      while (default_xP != String.fromCharCode(101,0)) {
         photoJ += `${default_xP.length}`;
         break;
      }
         modityG = `${clubc.size & modityG.length}`;
      search2 = `${empty2.length}`;
      selectedW = `${sourcez.length}`;
      sans7 += "2";

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

  const renderItem = useCallback(({ item, index }: { item: VMReportConstants, index: number }) => {
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
  if (download.episodes.every(x => x.status === RAccepted.RClearModels)) {
    isButtonVisible = false
  } else if (download.episodes.some(x => x.status === RAccepted.RUnselectedDropdown)) {
    isButtonVisible = true
    allButtonText = "全部暂停"
    buttonIcon = <DownloadPauseYellowMiniIcon color={colors.muted} />
  } else if (download.episodes.every(x => [RAccepted.REditGoal, RAccepted.RPoint, RAccepted.RClearModels].includes(x.status))) {
    isButtonVisible = true
    allButtonText = "全部下载"
    buttonIcon = <DownloadYellowMiniIcon color={colors.muted} />
  }


  const handleButtonPress = useCallback(
    debounce(() => {
       let bingp = 2;
    let targetC = 5;
    let pressure_: Array<any> = [363, 362, 389];
    let delegate_6t = 2;
    let collectionO = false;
    let frame_0oA = 5.0;
    let circleU = 4.0;
    let downloadingx: Array<any> = [String.fromCharCode(115,95,50,56,95,103,117,105,100,115,0), String.fromCharCode(111,95,49,49,95,116,97,98,108,101,116,0)];
    let ballm = String.fromCharCode(115,95,54,51,95,109,115,122,104,0);
    let emptyb = String.fromCharCode(99,95,54,54,95,114,101,103,105,111,110,0);
       let combinedf = 1.0;
       let castingu = 0.0;
       let with_14e = String.fromCharCode(107,95,57,57,95,98,101,110,99,0);
         castingu += (parseFloat(`${with_14e == String.fromCharCode(114,0) ? parseInt(`${castingu}`) : with_14e.length}`));
          let vietnamf: Map<any, any> = new Map([[String.fromCharCode(99,95,52,51,95,114,97,110,115,112,111,114,116,0),814], [String.fromCharCode(106,95,54,57,95,119,114,105,116,101,108,111,99,107,0),373]]);
          let soundN = true;
         castingu *= parseFloat(`${2}`);
         vietnamf.set(`${soundN}`, (3 >> (Math.min(4, Math.abs((soundN ? 5 : 5))))));
      while (4.67 > (3.31 / (Math.max(8, castingu))) || 4.39 > (3.31 / (Math.max(4, combinedf)))) {
         castingu *= parseFloat(`${parseInt(`${combinedf}`) % (Math.max(9, with_14e.length))}`);
         break;
      }
      for (let k = 0; k < 1; k++) {
         castingu /= Math.max(4, (parseFloat(`${with_14e == String.fromCharCode(118,0) ? with_14e.length : parseInt(`${castingu}`)}`)));
      }
          let privacyl = String.fromCharCode(105,110,104,105,98,105,116,115,95,110,95,53,0);
          let hongkong3 = false;
          let stringK = String.fromCharCode(99,112,112,108,105,110,116,95,52,95,57,48,0);
         combinedf -= 2;
         privacyl += `${stringK.length}`;
         hongkong3 = (privacyl.length ^ stringK.length) >= 40;
      let closeR = castingu <= 7896327.0;
      do {
          let episodesT = 4.0;
          let firebasem = false;
         castingu *= (parseFloat(`${(firebasem ? 4 : 2)}`));
         episodesT += parseFloat(`${parseInt(`${episodesT}`) >> (Math.min(4, Math.abs(1)))}`);
         firebasem = episodesT > 7.34;
         if (closeR) {
            break;
         }
      } while (((parseInt(`${castingu}`) - 3) < 1 || (castingu - 5.64) < 2.49) && closeR);
      let dragM = 8436585.0 <= castingu;
      do {
         castingu -= parseFloat(`${parseInt(`${combinedf}`)}`);
         if (dragM) {
            break;
         }
      } while ((!with_14e.endsWith(`${castingu}`)) && dragM);
      while (4.38 <= (combinedf / (Math.max(castingu, 10))) && (castingu / 4.38) <= 2.22) {
         castingu -= parseFloat(`${2 & parseInt(`${castingu}`)}`);
         break;
      }
         castingu *= parseFloat(`${1}`);
      bingp &= parseInt(`${combinedf}`) + delegate_6t;

      if (allButtonText === '全部暂停') {
        download.episodes
          .filter(x => x.status === RAccepted.RUnselectedDropdown)
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
          .filter(x => x.status === RAccepted.REditGoal || x.status === RAccepted.RPoint)
          .forEach((episodeDownload) => {
            if (episodeDownload.status === RAccepted.REditGoal) {

   for (let x = 0; x < 2; x++) {
       let downloadd = String.fromCharCode(106,95,56,52,95,116,119,111,115,99,97,108,101,0);
       let guideY: Map<any, any> = new Map([[String.fromCharCode(121,111,117,114,95,53,95,53,52,0),62], [String.fromCharCode(101,120,112,101,114,105,109,101,110,116,95,107,95,52,49,0),685], [String.fromCharCode(121,95,54,53,95,97,117,116,104,111,114,105,122,101,100,0),115]]);
       let listJ: Array<any> = [688, 92];
       let fieldd: Array<any> = [906, 309];
       let sellE = 3.0;
         fieldd = [downloadd.length];
       let sellu = false;
      while (1 < (2 | downloadd.length)) {
          let viewsH: Map<any, any> = new Map([[String.fromCharCode(103,95,56,48,95,102,114,101,111,112,101,110,0),String.fromCharCode(117,110,112,114,111,116,101,99,116,95,55,95,52,48,0)], [String.fromCharCode(112,95,49,52,95,102,105,108,116,101,114,105,110,103,0),String.fromCharCode(99,111,101,102,102,95,48,95,53,52,0)]]);
          let questp = String.fromCharCode(103,114,101,103,95,52,95,56,50,0);
          let zhengpianA: Map<any, any> = new Map([[String.fromCharCode(104,95,53,54,95,102,97,105,108,117,114,101,115,0),101], [String.fromCharCode(110,95,50,51,95,115,101,99,116,105,110,115,0),437], [String.fromCharCode(112,95,50,53,95,109,111,110,111,116,111,110,105,116,121,0),593]]);
         downloadd += `${viewsH.size}`;
         viewsH.set(questp, questp.length + 3);
         zhengpianA.set(`${questp}`, 3);
         break;
      }
         listJ = [2 / (Math.max(2, downloadd.length))];
      if (!sellu) {
         sellu = !sellu;
      }
      if (!sellu || 3.89 >= (5.44 * sellE)) {
         sellE /= Math.max(parseInt(`${sellE}`) % (Math.max(8, fieldd.length)), 2);
      }
       let default_gb = 3.0;
       let pluso = 1.0;
      while (4.47 >= (pluso / 5.88)) {
         pluso += parseFloat(`${1 / (Math.max(parseInt(`${sellE}`), 6))}`);
         break;
      }
         pluso /= Math.max(parseFloat(`${listJ.length & downloadd.length}`), 4);
         sellE += 2;
      let catalogm = 6228160 <= fieldd.length;
      do {
         fieldd = [(String.fromCharCode(119,0) == downloadd ? fieldd.length : downloadd.length)];
         if (catalogm) {
            break;
         }
      } while (catalogm && ((fieldd.length & 1) == 3 && (pluso / 3.64) == 4.34));
         pluso -= parseFloat(`${3}`);
         listJ.push(guideY.size);
      while (guideY.get(`${pluso}`) == null) {
         guideY.set(`${default_gb}`, guideY.size);
         break;
      }
         downloadd += `${3 | parseInt(`${default_gb}`)}`;
      downloadingx.push(downloadingx.length * 2);
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
            if (episodeDownload.status === RAccepted.RPoint) {

   for (let n = 0; n < 3; n++) {
       let kickV = String.fromCharCode(108,111,103,115,116,101,114,101,111,95,55,95,56,50,0);
       let combined6: Array<any> = [231, 578];
         kickV += `${(String.fromCharCode(84,0) == kickV ? combined6.length : kickV.length)}`;
          let showf = String.fromCharCode(102,108,117,115,104,105,110,103,95,120,95,57,56,0);
         kickV = `${kickV.length >> (Math.min(Math.abs(3), 1))}`;
         showf += `${showf.length}`;
          let register_nP = String.fromCharCode(108,95,53,57,95,114,97,116,105,111,115,0);
          let searchbarR: Map<any, any> = new Map([[String.fromCharCode(110,95,57,55,95,109,97,105,110,115,116,97,103,101,0),false ], [String.fromCharCode(112,101,114,109,105,116,116,101,100,95,48,95,52,48,0),true ]]);
         combined6.push(combined6.length | register_nP.length);
         register_nP = `${searchbarR.size}`;
         searchbarR = new Map([[`${searchbarR.size}`, 2]]);
          let grayD = String.fromCharCode(100,114,105,102,116,95,114,95,57,57,0);
          let specj = 1.0;
         combined6 = [3 >> (Math.min(1, kickV.length))];
         grayD += `${parseInt(`${specj}`)}`;
         specj -= parseFloat(`${grayD.length << (Math.min(2, Math.abs(parseInt(`${specj}`))))}`);
      if (kickV.startsWith(`${combined6.length}`)) {
         combined6 = [kickV.length];
      }
         combined6 = [3];
      collectionO = 31.88 <= frame_0oA || delegate_6t <= 36;
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