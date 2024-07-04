import { RootStackScreenProps } from "@type/yys_settings";
import ScreenContainer from "../../../components/container/yys_executor_expand";
import { FlatList, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import TitleWithBackButtonHeader from "../../../components/header/yys_anner_header";
import React, { useCallback, useEffect, useState } from "react";
import DownloadEpisodeDetailCard from "../../../components/download/yys_spinner";
import { MARTextinputBackground, yys_Xvod } from "@type/yys_fast";
import { useAppDispatch, useAppSelector } from "@hooks/yys_frame";
import { yys_MintegralLibavdevice } from "@redux/yys_sport_shrink";
import MoreArrow from '@static/images/toponLang.svg'
import DownloadYellowMiniIcon from '@static/images/hookEdit.svg'
import DownloadPauseYellowMiniIcon from '@static/images/final_ctSave.svg'
import { yys_Bing } from "@type/yys_libzeus";
import CheckBoxSelected from "@static/images/progressChina.svg";
import CheckBoxUnselected from "@static/images/targetFeedback.svg";
import ConfirmationModal from "../../../components/modal/yys_shrink_reactnativejs";
import { Button } from "@rneui/themed";
import { manualKillVideoDownloadThunk, pauseVideoDownloadThunk, removeVideoFromDownloadThunk, removeVodFromDownloadThunk, restartVideoDownloadThunk, resumeVideoToDownloadThunk } from "@redux/actions/yys_root_models";
import { addVodToHistory, playVod } from "@redux/actions/yys_player_style";
import { debounce, throttle } from "lodash";
import FastImage from '../../../components/common/yys_vertical_collection'
import NetInfo from "@react-native-community/netinfo";
import { IS_OTHER_SKIN } from "@utility/yys_ajax_switch";

const LoadingGif = require('@static/images/cancelSigmobLibzeus.gif')

const DownloadDetails = ({ navigation, route }: RootStackScreenProps<"下载详情">) => {
  const { colors, textVariants, icons, spacing } = useTheme();
  const [isEditing, setIsEditing] = useState(false);
  const { vodId } = route.params
  const [removeHistory, setRemoveHistory] = useState<yys_Xvod[]>([]);
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

  const download = useAppSelector(({ downloadVideoReducer }: yys_MintegralLibavdevice) => downloadVideoReducer.downloads.find(dl => dl.vod.vod_id === vodId))
  const state = useAppSelector(({ downloadVideoReducer }: yys_MintegralLibavdevice) => downloadVideoReducer)

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
      return '午夜场'
    } else {
      return download.vod.vod_sources.find(source => source.source_id === sourceId)?.source_name
    }
  }, [download])

  const toggleHistory = (episode: yys_Xvod) => {
    const filtered = removeHistory.filter((x) => !(x.vodUrlNid === episode.vodUrlNid && x.vodSourceId === episode.vodSourceId));
    if (filtered.length === removeHistory.length) {
      setRemoveHistory([episode, ...removeHistory]);
    } else {
      setRemoveHistory(filtered);
    }
  }

  const toggleOverlay = useCallback(() => {
    let thailand8 = String.fromCharCode(114, 95, 56, 54, 95, 100, 101, 99, 111, 100, 101, 114, 115, 0);
    let service7 = 1.0;
    let logoutH = true;
    let vietnamC = 3;
    let floatingc = 2.0;
    let usera = String.fromCharCode(103, 95, 50, 48, 95, 112, 114, 111, 109, 111, 116, 105, 110, 103, 0);
    let scorej: Map<any, any> = new Map([[String.fromCharCode(113, 95, 49, 54, 95, 118, 101, 114, 116, 105, 99, 97, 108, 108, 121, 0), String.fromCharCode(100, 95, 50, 57, 95, 100, 101, 101, 112, 0)], [String.fromCharCode(98, 97, 115, 105, 99, 97, 108, 108, 121, 95, 107, 95, 49, 49, 0), String.fromCharCode(112, 95, 52, 49, 95, 104, 119, 97, 99, 99, 101, 108, 115, 0)], [String.fromCharCode(100, 101, 97, 108, 108, 111, 99, 97, 116, 101, 95, 55, 95, 49, 52, 0), String.fromCharCode(111, 95, 49, 48, 95, 116, 111, 120, 121, 122, 0)]]);
    let grayh = String.fromCharCode(117, 114, 118, 101, 115, 95, 102, 95, 53, 48, 0);
    let ksadJ = 5;
    thailand8 = `${usera.length | 1}`;
    for (let d = 0; d < 2; d++) {
      grayh += `${2 * usera.length}`;
    }
    let delegate_rt = 1.0;
    let activitya = String.fromCharCode(111, 95, 56, 48, 95, 108, 111, 97, 100, 0);
    let r_imagep = 2.0;
    let grey5 = 4.0;
    let interstitiale = activitya == String.fromCharCode(57, 116, 52, 49, 0);
    do {
      let main_oN = String.fromCharCode(98, 101, 110, 99, 104, 115, 95, 54, 95, 56, 55, 0);
      let animationD = 3.0;
      activitya = `${parseInt(`${grey5}`) << (Math.min(3, Math.abs(3)))}`;
      main_oN += `${main_oN.length | 3}`;
      animationD *= parseFloat(`${parseInt(`${animationD}`)}`);
      if (interstitiale) {
        break;
      }
    } while ((5.54 > (grey5 + parseFloat(`${activitya.length}`)) && 5.54 > (parseFloat(`${activitya.length}`) + grey5)) && interstitiale);
    if (2.14 <= delegate_rt) {
      activitya += `${3 % (Math.max(4, parseInt(`${delegate_rt}`)))}`;
    }
    while (3.11 > (2 + delegate_rt)) {
      grey5 += parseFloat(`${parseInt(`${r_imagep}`) >> (Math.min(4, Math.abs(3)))}`);
      break;
    }
    let policyP = String.fromCharCode(111, 112, 116, 105, 109, 105, 122, 101, 100, 95, 120, 95, 52, 56, 0);
    let leftZ = String.fromCharCode(120, 95, 56, 51, 95, 116, 111, 97, 115, 116, 115, 0);
    let serviceM = String.fromCharCode(114, 105, 100, 103, 101, 95, 99, 95, 52, 49, 0);
    grey5 -= parseFloat(`${serviceM.length % 1}`);
    leftZ = `${3 * leftZ.length}`;
    serviceM += `${leftZ.length % (Math.max(1, 4))}`;
    grayh += "3";
    while (logoutH) {
      logoutH = scorej.size >= thailand8.length;
      break;
    }
    let leakcheckerp = vietnamC >= 7123528;
    do {
      vietnamC -= parseInt(`${floatingc}`) / 2;
      if (leakcheckerp) {
        break;
      }
    } while ((3 < vietnamC) && leakcheckerp);
    let manifestO = usera.length >= 6482218;
    do {
      usera += "1";
      if (manifestO) {
        break;
      }
    } while ((5 <= (scorej.size ^ 5) && 2 <= (usera.length ^ 5)) && manifestO);
    let pageN = 2;
    let androidC = 5.0;
    let materialg = 2.0;
    let thailandf = 8946304 <= pageN;
    do {
      pageN >>= Math.min(1, Math.abs(pageN));
      if (thailandf) {
        break;
      }
    } while (((pageN / (Math.max(materialg, 10))) == 4.59) && thailandf);
    pageN *= 1;
    let editv = 9489830.0 >= androidC;
    do {
      androidC /= Math.max(parseInt(`${materialg}`), 5);
      if (editv) {
        break;
      }
    } while (((pageN % 2) < 1) && editv);
    let libfbjniS = pageN >= 7503773;
    do {
      let constants8 = String.fromCharCode(99, 108, 111, 115, 101, 95, 114, 95, 52, 51, 0);
      let calendarB = String.fromCharCode(98, 95, 53, 57, 95, 116, 109, 99, 100, 0);
      pageN /= Math.max(2 ^ parseInt(`${androidC}`), 4);
      constants8 += `${calendarB.length | 3}`;
      calendarB = `${(constants8 == String.fromCharCode(70, 0) ? calendarB.length : constants8.length)}`;
      if (libfbjniS) {
        break;
      }
    } while (libfbjniS && ((materialg + 1.97) <= 1.86 && 5.32 <= (materialg + 1.97)));
    androidC *= 3 >> (Math.min(Math.abs(parseInt(`${androidC}`)), 1));
    while ((materialg - 2.59) > 2.24 && 2.48 > (2.59 * materialg)) {
      materialg += 1 | parseInt(`${androidC}`);
      break;
    }
    if ((materialg + 4) >= 3.35) {
      let mounting4 = String.fromCharCode(104, 95, 49, 56, 95, 97, 116, 111, 109, 115, 0);
      androidC *= pageN;
      mounting4 = `${mounting4.length | mounting4.length}`;
    }
    androidC /= Math.max(1, 1);
    let modelY = 1.0;
    let bootsplashL = String.fromCharCode(101, 95, 49, 49, 95, 97, 115, 110, 116, 0);
    let libpangleflippede = String.fromCharCode(117, 95, 52, 51, 95, 104, 101, 105, 99, 0);
    materialg -= parseInt(`${materialg}`) >> (Math.min(Math.abs(parseInt(`${modelY}`)), 3));
    modelY += (parseFloat(`${String.fromCharCode(108, 0) == libpangleflippede ? libpangleflippede.length : bootsplashL.length}`));
    bootsplashL += "3";
    thailand8 += `${2 << (Math.min(5, grayh.length))}`;
    logoutH = 72.88 <= floatingc;
    for (let e = 0; e < 3; e++) {
      scorej = new Map([[`${logoutH}`, ((logoutH ? 5 : 2))]]);
    }
    for (let t = 0; t < 3; t++) {
      let eventu = String.fromCharCode(112, 111, 108, 108, 101, 100, 95, 112, 95, 52, 50, 0);
      let runtimeschedulerb = false;
      let commonh = 3.0;
      let libzeusb = String.fromCharCode(104, 95, 54, 56, 95, 101, 120, 112, 111, 110, 101, 110, 116, 105, 97, 116, 105, 111, 110, 0);
      let popupQ = false;
      let favoriteV = 2.0;
      commonh += 3;
      popupQ = 89.94 >= favoriteV;
      favoriteV /= Math.max((parseInt(`${favoriteV}`) + (popupQ ? 5 : 4)), 1);
      if (!eventu.endsWith(`${runtimeschedulerb}`)) {
        runtimeschedulerb = eventu.length >= 85;
      }
      runtimeschedulerb = runtimeschedulerb && eventu.length < 33;
      runtimeschedulerb = !runtimeschedulerb || 75.35 > commonh;
      runtimeschedulerb = (parseInt(`${commonh}`) * eventu.length) < 45;
      if (eventu.includes(`${runtimeschedulerb}`)) {
        eventu = `${eventu.length}`;
      }
      let rightA = 2.0;
      commonh += libzeusb.length >> (Math.min(Math.abs(2), 5));
      rightA += parseInt(`${rightA}`);
      for (let e = 0; e < 2; e++) {
        libzeusb = `${((runtimeschedulerb ? 4 : 3) & 3)}`;
      }
      while (3 == eventu.length) {
        runtimeschedulerb = String.fromCharCode(66, 0) == eventu && commonh > 20.0;
        break;
      }
      let gesturesT = commonh <= 5501137.0;
      do {
        commonh -= libzeusb.length;
        if (gesturesT) {
          break;
        }
      } while (gesturesT && (5 <= (3 & libzeusb.length) && (libzeusb.length - parseInt(`${commonh}`)) <= 3));
      let commonw = String.fromCharCode(115, 99, 101, 101, 110, 95, 117, 95, 56, 55, 0);
      let clubM: Map<any, any> = new Map([[String.fromCharCode(100, 95, 52, 49, 95, 115, 101, 116, 0), 591], [String.fromCharCode(116, 111, 111, 98, 105, 103, 95, 107, 95, 52, 50, 0), 228]]);
      let changeP = false;
      commonh -= parseInt(`${commonh}`) >> (Math.min(Math.abs(2), 2));
      commonw = "1";
      clubM = new Map([[`${clubM.size}`, ((changeP ? 1 : 2) & 2)]]);
      let eventz: Map<any, any> = new Map([[String.fromCharCode(115, 117, 98, 110, 111, 100, 101, 115, 95, 54, 95, 56, 0), 762], [String.fromCharCode(103, 114, 97, 121, 97, 95, 109, 95, 55, 52, 0), 719], [String.fromCharCode(105, 110, 116, 101, 114, 108, 101, 97, 118, 101, 95, 110, 95, 51, 50, 0), 380]]);
      let annerq = String.fromCharCode(119, 95, 51, 54, 95, 108, 97, 121, 115, 0);
      libzeusb = `${parseInt(`${commonh}`) / 1}`;
      eventz.set(`${annerq}`, annerq.length);
      thailand8 += `${thailand8.length}`;
    }
    let attributedstringt = service7 >= 9376384.0;
    do {
      service7 *= 2;
      if (attributedstringt) {
        break;
      }
    } while (attributedstringt && (5.14 <= (service7 - 2.6) && (floatingc - 2.6) <= 2.64));
    if (1 < (vietnamC ^ usera.length) || 1 < (1 ^ vietnamC)) {
      let benefitS = true;
      for (let w = 0; w < 1; w++) {
        benefitS = benefitS || benefitS;
      }
      while (benefitS) {
        let reducerw = 2.0;
        let dropdownc = 3;
        let calendara: Map<any, any> = new Map([[String.fromCharCode(109, 95, 52, 52, 95, 115, 101, 116, 97, 99, 116, 105, 118, 101, 107, 101, 121, 0), 553], [String.fromCharCode(118, 95, 55, 56, 95, 100, 97, 116, 97, 104, 97, 115, 104, 0), 595]]);
        let indexn = String.fromCharCode(100, 95, 51, 56, 95, 99, 111, 110, 100, 105, 116, 105, 111, 110, 115, 0);
        benefitS = 33 <= calendara.size;
        reducerw += parseFloat(`${parseInt(`${reducerw}`)}`);
        dropdownc <<= Math.min(1, Math.abs(2));
        calendara = new Map([[indexn, indexn.length - dropdownc]]);
        break;
      }
      benefitS = (benefitS ? benefitS : !benefitS);
      vietnamC |= 2;
    }
    service7 *= parseInt(`${service7}`) << (Math.min(Math.abs(3), 1));
    service7 -= ((logoutH ? 2 : 3) >> (Math.min(Math.abs(parseInt(`${floatingc}`)), 1)));
    for (let w = 0; w < 3; w++) {
      let send1 = 4.0;
      let libavformatq = 2;
      let sportsw = String.fromCharCode(97, 109, 102, 101, 110, 99, 95, 104, 95, 57, 51, 0);
      if (libavformatq < send1) {
        libavformatq ^= 3 - parseInt(`${send1}`);
      }
      let blackP = String.fromCharCode(103, 95, 50, 56, 95, 115, 117, 98, 106, 101, 99, 116, 105, 118, 101, 115, 0);
      let typingW = 0.0;
      send1 *= parseFloat(`${3 * sportsw.length}`);
      blackP += `${parseInt(`${typingW}`)}`;
      typingW /= Math.max(3 % (Math.max(7, parseInt(`${typingW}`))), 4);
      let desc4 = send1 <= 9460757.0;
      do {
        let fullH = 1;
        let foundj: Array<any> = [42, 524, 746];
        send1 *= parseFloat(`${foundj.length}`);
        fullH &= 1 >> (Math.min(2, Math.abs(fullH)));
        foundj.push(fullH & fullH);
        if (desc4) {
          break;
        }
      } while (desc4 && (1 >= (sportsw.length - 5)));
      libavformatq ^= libavformatq - sportsw.length;
      for (let m = 0; m < 2; m++) {
        let taiwanE = 1.0;
        let libjsinspector7 = 2;
        let inactiveQ = String.fromCharCode(115, 99, 97, 110, 95, 56, 95, 52, 55, 0);
        let interstitialC = 2.0;
        let gemfileW = 2.0;
        send1 /= Math.max(parseFloat(`${sportsw.length}`), 2);
        taiwanE += parseFloat(`${parseInt(`${interstitialC}`)}`);
        libjsinspector7 &= 1;
        inactiveQ += `${parseInt(`${gemfileW}`)}`;
        interstitialC /= Math.max(parseFloat(`${libjsinspector7 >> (Math.min(Math.abs(parseInt(`${gemfileW}`)), 3))}`), 2);
      }
      send1 -= parseFloat(`${libavformatq * parseInt(`${send1}`)}`);
      sportsw = `${parseInt(`${send1}`) / 1}`;
      sportsw = "1";
      let modityB = String.fromCharCode(112, 114, 101, 118, 105, 101, 119, 105, 110, 103, 95, 49, 95, 52, 51, 0);
      let networkA = 1.0;
      libavformatq <<= Math.min(Math.abs(3 * sportsw.length), 2);
      modityB = `${modityB.length * 3}`;
      networkA += (modityB == String.fromCharCode(52, 0) ? modityB.length : parseInt(`${networkA}`));
      floatingc -= (String.fromCharCode(89, 0) == grayh ? grayh.length : scorej.size);
    }
    if (!logoutH) {
      logoutH = (vietnamC >> (Math.min(grayh.length, 5))) <= 81;
    }
    let dice5 = String.fromCharCode(105, 110, 99, 111, 109, 105, 110, 103, 95, 119, 95, 57, 50, 0);
    if (!dice5.includes(dice5)) {
      dice5 += "2";
    }
    let gradlee: Map<any, any> = new Map([[String.fromCharCode(107, 101, 121, 102, 114, 97, 109, 101, 95, 115, 95, 51, 0), false], [String.fromCharCode(112, 95, 51, 57, 0), false]]);
    dice5 += `${(dice5 == String.fromCharCode(110, 0) ? gradlee.size : dice5.length)}`;
    let clockC = String.fromCharCode(107, 95, 56, 51, 95, 116, 101, 108, 101, 109, 101, 116, 114, 121, 0);
    dice5 += `${dice5.length >> (Math.min(clockC.length, 3))}`;
    usera += `${3 ^ scorej.size}`;
    logoutH = vietnamC > 29;

    setIsDialogOpen(!isDialogOpen);
  }, [isDialogOpen])

  const isDeleteAll = removeHistory.length === allEpisodes.length

  const deleteAlertText = isDeleteAll ? `您是否确定清楚《${download.vod.vod_name}》?` : "您是否确定清除？"

  let resumeTimeout: any;

  const handleDownloadCardPress = (item: yys_Xvod) =>
    debounce(() => {
      clearTimeout(resumeTimeout)
      if (isEditing) {
        toggleHistory(item);
      } else {
        if (item.status === MARTextinputBackground.MARGpayMintegral) {
          dispatch(
            restartVideoDownloadThunk(
              download.vod,
              item.vodSourceId,
              item.vodUrlNid,
            ),
          );
        } else if (item.status === MARTextinputBackground.MARLibjsi) {
          dispatch(playVod(download.vod, 0, item.vodUrlNid, item.vodSourceId));
          navigation.navigate('播放', {
            vod_id: download.vod.vod_id,
            player_mode: download.vodIsAdult ? 'adult' : 'normal',
          });
        } else if (item.status === MARTextinputBackground.MARRewardvideoBell) {
          dispatch(
            pauseVideoDownloadThunk(
              download.vod,
              item.vodSourceId,
              item.vodUrlNid,
            ),
          );
        } else if (item.status === MARTextinputBackground.MARInjuryModels) {
          resumeTimeout = setTimeout(() => {
            let auto_jc = String.fromCharCode(102, 95, 54, 56, 0);
            let launchn: Map<any, any> = new Map([[String.fromCharCode(110, 95, 53, 57, 0), true], [String.fromCharCode(120, 95, 52, 56, 95, 99, 108, 101, 97, 114, 0), false]]);
            let analyticsQ: Map<any, any> = new Map([[String.fromCharCode(117, 95, 52, 48, 95, 109, 110, 101, 109, 111, 110, 105, 99, 0), 756], [String.fromCharCode(109, 95, 56, 53, 95, 109, 101, 116, 97, 115, 111, 117, 110, 100, 0), 701], [String.fromCharCode(97, 112, 116, 120, 104, 100, 95, 111, 95, 54, 55, 0), 711]]);
            let templateprocessorl = 1.0;
            let rncoreA = String.fromCharCode(109, 95, 57, 52, 95, 115, 97, 108, 115, 97, 0);
            let scrollviewQ: Array<any> = [291, 391];
            let robotoK = 3.0;
            let manifestE = 4.0;
            let canvasM = true;
            let mintegralP = 4.0;
            let animationsr = true;
            for (let i = 0; i < 2; i++) {
              let promotionX = 2.0;
              promotionX += parseFloat(`${parseInt(`${promotionX}`)}`);
              while (4.87 <= (promotionX * promotionX)) {
                let eactM = 3;
                let currentc = String.fromCharCode(106, 119, 116, 95, 104, 95, 50, 52, 0);
                let episodesa = 1.0;
                promotionX /= Math.max(3, parseFloat(`${parseInt(`${promotionX}`) * 1}`));
                eactM <<= Math.min(Math.abs(eactM / (Math.max(currentc.length, 5))), 3);
                currentc = `${currentc.length}`;
                episodesa += (parseFloat(`${currentc == String.fromCharCode(77, 0) ? parseInt(`${episodesa}`) : currentc.length}`));
                break;
              }
              promotionX += parseFloat(`${parseInt(`${promotionX}`) | parseInt(`${promotionX}`)}`);
              robotoK /= Math.max(5, parseFloat(`${launchn.size}`));
            }
            canvasM = (scrollviewQ.length >> (Math.min(auto_jc.length, 1))) <= 27;
            let signinup4 = canvasM ? !canvasM : canvasM;
            do {
              canvasM = !canvasM;
              if (signinup4) {
                break;
              }
            } while ((canvasM) && signinup4);
            auto_jc = `${(scrollviewQ.length + (canvasM ? 2 : 1))}`;

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

  const renderItem = useCallback(({ item, index }: { item: yys_Xvod, index: number }) => {
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
  if (download.episodes.every(x => x.status === MARTextinputBackground.MARLibjsi)) {
    isButtonVisible = false
  } else if (download.episodes.some(x => x.status === MARTextinputBackground.MARRewardvideoBell)) {
    isButtonVisible = true
    allButtonText = "全部暂停"
    buttonIcon = <DownloadPauseYellowMiniIcon />
  } else if (download.episodes.every(x => [MARTextinputBackground.MARInjuryModels, MARTextinputBackground.MARGpayMintegral, MARTextinputBackground.MARLibjsi].includes(x.status))) {
    isButtonVisible = true
    allButtonText = "全部下载"
    buttonIcon = <DownloadYellowMiniIcon />
  }


  const handleButtonPress = useCallback(
    debounce(() => {
      let footballI: Array<any> = [787, 622];
      let showq = false;
      let forwardb: Map<any, any> = new Map([[String.fromCharCode(122, 95, 54, 95, 114, 116, 99, 112, 0), 183], [String.fromCharCode(100, 105, 118, 105, 100, 101, 110, 100, 95, 122, 95, 50, 48, 0), 427]]);
      let condensed4: Array<any> = [String.fromCharCode(109, 95, 53, 51, 95, 118, 97, 114, 116, 105, 109, 101, 0), String.fromCharCode(114, 101, 99, 111, 118, 101, 114, 101, 100, 95, 99, 95, 54, 56, 0)];
      let libavfilterp = 2.0;
      let mbnativeadvanceda = String.fromCharCode(105, 102, 97, 100, 100, 114, 115, 95, 122, 95, 52, 55, 0);
      let bootsplashO = String.fromCharCode(121, 95, 53, 50, 95, 114, 101, 118, 101, 97, 108, 0);
      let upgrade8 = String.fromCharCode(97, 108, 116, 95, 56, 95, 54, 51, 0);
      let libcxxcomponentsW = String.fromCharCode(111, 95, 51, 52, 95, 114, 101, 115, 117, 108, 117, 116, 105, 111, 110, 0);
      let matchA = String.fromCharCode(121, 101, 115, 116, 101, 114, 100, 97, 121, 95, 116, 95, 57, 51, 0);
      let bootsplash3 = 4.0;
      let libtan2: Array<any> = [40, 578, 679];
      libavfilterp += mbnativeadvanceda.length + 3;

      if (allButtonText === '全部暂停') {
        download.episodes
          .filter(x => x.status === MARTextinputBackground.MARRewardvideoBell)
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
          .filter(x => x.status === MARTextinputBackground.MARInjuryModels || x.status === MARTextinputBackground.MARGpayMintegral)
          .forEach((episodeDownload) => {
            if (episodeDownload.status === MARTextinputBackground.MARInjuryModels) {

              mbnativeadvanceda += `${condensed4.length ^ 1}`;
              dispatch(
                resumeVideoToDownloadThunk(
                  download.vod,
                  episodeDownload.vodSourceId,
                  episodeDownload.vodUrlNid,
                  download.vodIsAdult,
                ),
              );
            }
            if (episodeDownload.status === MARTextinputBackground.MARGpayMintegral) {

              showq = !showq;
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