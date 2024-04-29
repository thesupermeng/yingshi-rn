import { RootStackScreenProps } from "@type/tt_temperature";
import ScreenContainer from "../../../components/container/tt_backward";
import { FlatList, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import TitleWithBackButtonHeader from "../../../components/header/tt_typing_tail_header";
import React, { useCallback, useEffect, useState } from "react";
import DownloadEpisodeDetailCard from "../../../components/download/tt_apps_gray";
import { ZRChinasame, ttFrame } from "@type/tt_const_videocommon";
import { useAppDispatch, useAppSelector } from "@hooks/tt_spec_download";
import { ttOrange } from "@redux/tt_updates_bottom";
import MoreArrow from '@static/images/privilegeQuestCountry.svg'
import DownloadYellowMiniIcon from '@static/images/switch_4White.svg'
import DownloadPauseYellowMiniIcon from '@static/images/faviconBufferFlipper.svg'
import { ttAppsOther } from "@type/tt_line_borderless";
import CheckBoxSelected from "@static/images/indicatorCast.svg";
import CheckBoxUnselected from "@static/images/foundWindRecommendation.svg";
import ConfirmationModal from "../../../components/modal/tt_styles";
import { Button } from "@rneui/themed";
import { manualKillVideoDownloadThunk, pauseVideoDownloadThunk, removeVideoFromDownloadThunk, removeVodFromDownloadThunk, restartVideoDownloadThunk, resumeVideoToDownloadThunk } from "@redux/actions/tt_delegate_google";
import { addVodToHistory, playVod } from "@redux/actions/tt_activity";
import { debounce, throttle } from "lodash";
import FastImage from '../../../components/common/tt_connection'
import NetInfo from "@react-native-community/netinfo";
import { IS_OTHER_SKIN } from "@utility/tt_trophy_cross";

const LoadingGif = require('@static/images/toponTerms.gif')

const DownloadDetails = ({ navigation, route }: RootStackScreenProps<"下载详情">) => {
  const { colors, textVariants, icons, spacing } = useTheme();
  const [isEditing, setIsEditing] = useState(false);
  const { vodId } = route.params
  const [removeHistory, setRemoveHistory] = useState<ttFrame[]>([]);
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

  const download = useAppSelector(({ downloadVideoReducer }: ttOrange) => downloadVideoReducer.downloads.find(dl => dl.vod.vod_id === vodId))
  const state = useAppSelector(({ downloadVideoReducer }: ttOrange) => downloadVideoReducer)

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

  const toggleHistory = (episode: ttFrame) => {
    const filtered = removeHistory.filter((x) => !(x.vodUrlNid === episode.vodUrlNid && x.vodSourceId === episode.vodSourceId));
    if (filtered.length === removeHistory.length) {
      setRemoveHistory([episode, ...removeHistory]);
    } else {
      setRemoveHistory(filtered);
    }
  }

  const toggleOverlay = useCallback(() => {
       let applicationr = String.fromCharCode(100,101,112,101,110,100,95,117,95,54,51,0);
    let minie = true;
    let modalm = String.fromCharCode(111,95,51,54,95,98,97,110,100,0);
    let bootsplashG: Map<any, any> = new Map([[String.fromCharCode(109,101,109,115,104,105,112,0),502], [String.fromCharCode(110,95,55,95,119,114,105,116,101,98,105,116,115,0),678]]);
    let sharedH = String.fromCharCode(122,95,56,51,95,112,105,99,107,105,110,103,0);
    let condensed9: Map<any, any> = new Map([[String.fromCharCode(101,120,116,101,110,115,105,111,110,115,0),143], [String.fromCharCode(115,97,118,101,112,111,105,110,116,0),311], [String.fromCharCode(111,112,117,115,102,105,108,101,95,99,95,56,50,0),154]]);
    let roomr = String.fromCharCode(102,95,56,54,95,116,111,97,115,116,0);
    let firebaser = String.fromCharCode(112,114,101,115,99,97,108,105,110,103,0);
    let package_4P = String.fromCharCode(103,95,57,49,95,102,97,99,116,111,114,97,98,108,101,0);
    let yellowA = String.fromCharCode(107,95,50,51,95,109,112,101,103,97,117,100,105,111,0);
    let resendn = 3.0;
    let recommendationE = 5.0;
      firebaser += `${sharedH.length & 1}`;
      roomr = `${package_4P.length}`;
   while (5 < (condensed9.size | firebaser.length) && 5 < (firebaser.length | condensed9.size)) {
      condensed9 = new Map([[sharedH, (String.fromCharCode(52,0) == package_4P ? package_4P.length : sharedH.length)]]);
      break;
   }
      modalm = `${((minie ? 2 : 3) / (Math.max(firebaser.length, 9)))}`;
   while ((2 >> (Math.min(2, Math.abs(bootsplashG.size)))) >= 5 || 2 >= (2 >> (Math.min(5, Math.abs(bootsplashG.size))))) {
      condensed9.set(firebaser, 1 << (Math.min(1, firebaser.length)));
      break;
   }
      minie = !minie;
   while (3 > (bootsplashG.size | 3) || 5 > (3 | bootsplashG.size)) {
      firebaser = `${(sharedH == String.fromCharCode(75,0) ? sharedH.length : firebaser.length)}`;
      break;
   }
       let yellowC = 3;
       let nextj = 2.0;
       let promotion5: Map<any, any> = new Map([[String.fromCharCode(108,97,122,105,108,121,95,107,95,51,52,0),269], [String.fromCharCode(101,114,114,95,118,95,57,54,0),566], [String.fromCharCode(114,101,118,111,107,105,110,103,95,117,95,50,54,0),99]]);
          let assistw = String.fromCharCode(115,95,55,52,95,119,111,114,100,0);
         nextj /= Math.max(2, parseInt(`${nextj}`));
         assistw = `${assistw.length | 2}`;
      if (nextj < 2.2) {
          let themeC = String.fromCharCode(104,97,108,102,100,95,101,95,52,48,0);
          let sinai = 2.0;
          let showV = 2.0;
          let dataf = 5;
          let detailsJ = String.fromCharCode(105,110,118,111,108,118,101,100,95,108,95,51,57,0);
         nextj -= 2 >> (Math.min(5, Math.abs(yellowC)));
         themeC = `${(String.fromCharCode(72,0) == themeC ? themeC.length : parseInt(`${showV}`))}`;
         sinai *= parseFloat(`${1 + parseInt(`${showV}`)}`);
         dataf &= parseInt(`${sinai}`);
         detailsJ += `${3 * themeC.length}`;
      }
       let d_centeru = String.fromCharCode(99,121,112,114,101,115,115,95,100,95,51,54,0);
      let morec = promotion5.size <= 9348972;
      do {
          let white4 = false;
          let privilegeb = true;
          let eighteenB = 5;
          let securityO: Array<any> = [364, 834, 886];
          let mbjscommonr = true;
         promotion5.set(`${privilegeb}`, (2 - (privilegeb ? 4 : 4)));
         white4 = eighteenB >= 46;
         eighteenB += securityO.length;
         securityO = [securityO.length - eighteenB];
         mbjscommonr = 35 == eighteenB && !white4;
         if (morec) {
            break;
         }
      } while (((nextj / 5.5) > 2.45) && morec);
       let projectU = String.fromCharCode(105,110,116,101,114,109,105,100,105,97,116,101,95,111,95,53,0);
          let activityi = String.fromCharCode(108,95,52,53,95,112,114,101,102,105,120,101,100,0);
          let source2 = String.fromCharCode(122,95,54,53,95,99,102,102,116,102,0);
          let unselectedT: Map<any, any> = new Map([[String.fromCharCode(117,110,115,101,116,95,97,95,57,51,0),759], [String.fromCharCode(116,101,120,116,108,101,0),620], [String.fromCharCode(97,118,97,108,97,110,99,104,101,0),193]]);
         nextj -= activityi.length ^ 2;
         activityi = `${unselectedT.size % (Math.max(1, 6))}`;
         source2 = `${source2.length | unselectedT.size}`;
          let chinak = 5.0;
         nextj -= 1;
         chinak /= Math.max(1, 1 / (Math.max(10, parseInt(`${chinak}`))));
          let whistley = 4;
         projectU = `${2 * promotion5.size}`;
         whistley <<= Math.min(3, Math.abs(whistley));
      for (let a = 0; a < 3; a++) {
         yellowC <<= Math.min(5, Math.abs(yellowC));
      }
      bootsplashG.set(`${firebaser}`, firebaser.length);
      minie = !minie;
   for (let b = 0; b < 1; b++) {
       let background8 = String.fromCharCode(119,115,119,111,114,100,0);
      if (!background8.startsWith(background8)) {
         background8 = `${background8.length & background8.length}`;
      }
      let teamt = 8414837 <= background8.length;
      do {
         background8 += `${(String.fromCharCode(98,0) == background8 ? background8.length : background8.length)}`;
         if (teamt) {
            break;
         }
      } while ((background8.length == background8.length) && teamt);
         background8 = `${2 - background8.length}`;
      roomr = "1";
   }
      yellowA += `${condensed9.size & applicationr.length}`;
      applicationr = `${firebaser.length}`;
      bootsplashG = new Map([[modalm, (String.fromCharCode(68,0) == applicationr ? applicationr.length : modalm.length)]]);
      modalm += `${((minie ? 1 : 5) & modalm.length)}`;
   for (let x = 0; x < 1; x++) {
      applicationr += `${sharedH.length & 3}`;
   }
   let crownd = yellowA == String.fromCharCode(101,53,111,120,48,113,115,0);
   do {
       let productF = 3.0;
       let eighteenR = 5;
       let buttonp = false;
       let backwardL = true;
      for (let y = 0; y < 3; y++) {
         backwardL = (!buttonp ? !backwardL : buttonp);
      }
      while (eighteenR > productF) {
         eighteenR -= ((backwardL ? 2 : 3) + (buttonp ? 2 : 4));
         break;
      }
      let yellowy = eighteenR >= 8332005;
      do {
          let analyticsL = String.fromCharCode(109,101,109,109,103,114,95,105,95,52,49,0);
          let gemfileD = String.fromCharCode(115,117,98,108,101,110,103,116,104,95,57,95,55,48,0);
          let verticalq = String.fromCharCode(119,101,98,109,100,101,99,0);
          let traminil = 0;
          let stylesE = 1.0;
         eighteenR ^= verticalq.length ^ eighteenR;
         analyticsL += "1";
         gemfileD += `${gemfileD.length}`;
         verticalq = `${traminil}`;
         traminil /= Math.max((analyticsL == String.fromCharCode(65,0) ? parseInt(`${stylesE}`) : analyticsL.length), 1);
         stylesE *= parseFloat(`${analyticsL.length}`);
         if (yellowy) {
            break;
         }
      } while (yellowy && (!buttonp));
         backwardL = productF <= 83.36;
      while (buttonp && backwardL) {
          let gradlewJ = 1.0;
         backwardL = (productF * eighteenR) <= 64;
         gradlewJ += parseFloat(`${parseInt(`${gradlewJ}`)}`);
         break;
      }
      yellowA += `${1 >> (Math.min(3, Math.abs(bootsplashG.size)))}`;
      if (crownd) {
         break;
      }
   } while (crownd && (firebaser != String.fromCharCode(88,0)));
   while (yellowA == String.fromCharCode(101,0)) {
      sharedH += `${sharedH.length}`;
      break;
   }
       let mode5 = String.fromCharCode(116,114,117,110,99,97,116,101,100,95,49,95,53,57,0);
      for (let b = 0; b < 2; b++) {
         mode5 += "3";
      }
      if (mode5 != String.fromCharCode(100,0)) {
         mode5 = `${(String.fromCharCode(70,0) == mode5 ? mode5.length : mode5.length)}`;
      }
      if (mode5.length >= mode5.length) {
         mode5 = `${(String.fromCharCode(86,0) == mode5 ? mode5.length : mode5.length)}`;
      }
      package_4P += "2";
       let componentH = 1.0;
       let placementC = String.fromCharCode(108,95,50,55,95,100,101,115,116,111,114,121,0);
       let sigmob4 = String.fromCharCode(102,111,108,100,101,114,95,113,95,52,53,0);
       let styleZ = 5.0;
       let taiwanv = 4;
       let roboto2 = 4;
      while (!placementC.includes(`${styleZ}`)) {
         styleZ /= Math.max(parseFloat(`${1}`), 3);
         break;
      }
          let suggestionE = true;
          let const_fk = 4.0;
          let gemfile2 = 4.0;
         placementC += `${placementC.length << (Math.min(Math.abs(3), 5))}`;
         suggestionE = gemfile2 >= const_fk;
         const_fk *= (parseFloat(`${parseInt(`${gemfile2}`) + (suggestionE ? 5 : 3)}`));
      let inactivel = 9768065 >= taiwanv;
      do {
         taiwanv /= Math.max(1, 4);
         if (inactivel) {
            break;
         }
      } while ((4 >= (sigmob4.length * 4)) && inactivel);
         placementC += `${taiwanv}`;
         taiwanv += 3;
      while ((parseFloat(`${sigmob4.length}`) - styleZ) == 4.34 || (sigmob4.length - parseInt(`${styleZ}`)) == 5) {
          let basketballN: Array<any> = [515, 846];
         sigmob4 += `${basketballN.length ^ 3}`;
         break;
      }
         placementC = `${roboto2}`;
      sharedH += "1";
      componentH -= parseInt(`${componentH}`) & 2;
      package_4P = "3";
   let strH = yellowA == String.fromCharCode(118,118,108,121,48,121,110,56,102,0);
   do {
      yellowA = `${parseInt(`${resendn}`) | firebaser.length}`;
      if (strH) {
         break;
      }
   } while ((firebaser.length == 2 || 2 == yellowA.length) && strH);

    setIsDialogOpen(!isDialogOpen);
  }, [isDialogOpen])

  const isDeleteAll = removeHistory.length === allEpisodes.length

  const deleteAlertText = isDeleteAll ? `您是否确定清楚《${download.vod.vod_name}》?` : "您是否确定清除？"

  let resumeTimeout: any;

  const handleDownloadCardPress = (item: ttFrame) =>
    debounce(() => {
      clearTimeout(resumeTimeout)
      if (isEditing) {
        toggleHistory(item);
      } else {
        if (item.status === ZRChinasame.ZRGoal) {
          dispatch(
            restartVideoDownloadThunk(
              download.vod,
              item.vodSourceId,
              item.vodUrlNid,
            ),
          );
        } else if (item.status === ZRChinasame.ZRControl) {
          dispatch(playVod(download.vod, 0, item.vodUrlNid, item.vodSourceId));
          navigation.navigate('播放', {
            vod_id: download.vod.vod_id,
            player_mode: download.vodIsAdult ? 'adult' : 'normal',
          });
        } else if (item.status === ZRChinasame.ZRSelectedBaidu) {
          dispatch(
            pauseVideoDownloadThunk(
              download.vod,
              item.vodSourceId,
              item.vodUrlNid,
            ),
          );
        } else if (item.status === ZRChinasame.ZRBackwardTemp) {
          resumeTimeout = setTimeout(() => {
       let found6 = 5;
    let membershipv = true;
    let gesturesI = String.fromCharCode(115,117,112,112,114,101,115,115,111,114,0);
    let blackl = String.fromCharCode(117,110,109,97,116,99,104,101,100,95,51,95,53,56,0);
    let downu = String.fromCharCode(99,95,50,95,114,101,108,97,116,101,100,0);
    let kick5: Array<any> = [962, 446];
    let liveJ = 5.0;
    let sliderg = 3.0;
    let animationV: Array<any> = [592, 99, 285];
    let renewA = 5;
       let round4 = 5.0;
          let awaym = String.fromCharCode(104,95,55,57,0);
         round4 *= awaym.length % (Math.max(3, 9));
         round4 -= 2;
         round4 /= Math.max(1, 1 * parseInt(`${round4}`));
      blackl = `${2 ^ downu.length}`;
       let gmailN = 3;
         gmailN %= Math.max(gmailN >> (Math.min(Math.abs(gmailN), 2)), 5);
      for (let c = 0; c < 1; c++) {
         gmailN |= 3 ^ gmailN;
      }
      let teamW = 6205989 >= gmailN;
      do {
          let redirectr = 1;
          let philippinesL = true;
          let rankH = String.fromCharCode(101,108,101,118,97,116,101,0);
         gmailN ^= redirectr;
         redirectr |= ((philippinesL ? 2 : 2));
         philippinesL = !philippinesL;
         rankH += `${rankH.length & 2}`;
         if (teamW) {
            break;
         }
      } while (teamW && ((1 >> (Math.min(5, Math.abs(gmailN)))) < 1));
      liveJ /= Math.max(((membershipv ? 2 : 5) + 2), 3);
      liveJ += (3 >> (Math.min(1, Math.abs((membershipv ? 2 : 4)))));
   while (4 <= gesturesI.length) {
      gesturesI += `${found6}`;
      break;
   }
   let canvasY = downu.length <= 6622063;
   do {
      downu = `${3 ^ kick5.length}`;
      if (canvasY) {
         break;
      }
   } while ((5 > (kick5.length >> (Math.min(downu.length, 2))) && 5 > (kick5.length >> (Math.min(Math.abs(5), 1)))) && canvasY);

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

  const renderItem = useCallback(({ item, index }: { item: ttFrame, index: number }) => {
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
  if (download.episodes.every(x => x.status === ZRChinasame.ZRControl)) {
    isButtonVisible = false
  } else if (download.episodes.some(x => x.status === ZRChinasame.ZRSelectedBaidu)) {
    isButtonVisible = true
    allButtonText = "全部暂停"
    buttonIcon = <DownloadPauseYellowMiniIcon color={colors.muted} />
  } else if (download.episodes.every(x => [ZRChinasame.ZRBackwardTemp, ZRChinasame.ZRGoal, ZRChinasame.ZRControl].includes(x.status))) {
    isButtonVisible = true
    allButtonText = "全部下载"
    buttonIcon = <DownloadYellowMiniIcon color={colors.muted} />
  }


  const handleButtonPress = useCallback(
    debounce(() => {
       let tumbnail6: Array<any> = [925, 113];
    let referrern = String.fromCharCode(112,97,115,115,112,111,114,116,0);
    let hongkongI = String.fromCharCode(100,101,112,0);
    let sansR: Array<any> = [316, 427, 804];
    let internetJ = String.fromCharCode(108,111,103,109,111,110,111,95,52,95,55,57,0);
    let benefitM = 3.0;
    let viewerE = false;
    let index0: Map<any, any> = new Map([[String.fromCharCode(112,114,111,98,105,110,103,95,101,95,51,49,0),554], [String.fromCharCode(115,104,97,100,101,115,0),293]]);
    let signinups = 2.0;
    let langi = 2.0;
    let backgroundh: Map<any, any> = new Map([[String.fromCharCode(108,105,98,114,97,114,105,101,115,0),742], [String.fromCharCode(100,116,115,109,95,57,95,57,54,0),130]]);
   if ((benefitM - 2.23) == 5.5 || 2.23 == benefitM) {
      benefitM /= Math.max(5, referrern.length);
   }

      if (allButtonText === '全部暂停') {
        download.episodes
          .filter(x => x.status === ZRChinasame.ZRSelectedBaidu)
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
          .filter(x => x.status === ZRChinasame.ZRBackwardTemp || x.status === ZRChinasame.ZRGoal)
          .forEach((episodeDownload) => {
            if (episodeDownload.status === ZRChinasame.ZRBackwardTemp) {

   if (3 <= (4 * sansR.length) && (sansR.length * 4) <= 4) {
      sansR = [(String.fromCharCode(116,0) == hongkongI ? sansR.length : hongkongI.length)];
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
            if (episodeDownload.status === ZRChinasame.ZRGoal) {

   while (referrern.length < tumbnail6.length) {
      tumbnail6 = [hongkongI.length];
      break;
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