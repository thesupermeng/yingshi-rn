import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import ScreenContainer from "../../../components/container/mayi_save";
import MainHeader from "../../../components/header/mayi_iconwatch_other_header";
import { useFocusEffect, useTheme } from "@react-navigation/native";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import {
  mayi_Runtime,
} from "@type/mayi_green";
import VodPlaylist from "../../../components/playlist/mayi_shootyesgoal";
import {
  BottomTabScreenProps,
  useBottomTabBarHeight,
} from "@react-navigation/bottom-tabs";
import { API_DOMAIN, MATCH_API_DOMAIN } from "@utility/mayi_middleware_apps";
import Animated from "react-native-reanimated";
import FastImage from "react-native-fast-image";
import mayi_Analytics from "../../middleware/mayi_plash_basketballtrophy";
import { Url } from "../../middleware/mayi_countdown_videovar";
import { formatMatchDate } from "../../utility/utils";
import { mayi_Default } from "../../types/mayi_homeinactive";
import MatchSchedule from "../../components/matchSchedule/mayi_refresh";
import MatchScheduleNav from "../../components/matchSchedule/mayi_libsentry_screen_view";
import NoConnection from "./../../../components/common/mayi_backicon_penalty";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";

import { useAppSelector, useSelector } from "@hooks/mayi_redirect";
import { mayi_Libapminsightb } from "@redux/mayi_live_tumbnail";
import { useDispatch } from "react-redux";
import BecomeVipOverlay from "../../../components/modal/mayi_apps";
import { mayi_InjuryNewinterstitial } from "@redux/reducers/mayi_libavcodec_nativeex";
import mayi_push from "../../../../Umeng/mayi_push";
import { mayi_Baseline } from "@redux/reducers/mayi_chatroombackground_unlock";
import { mayi_Gift } from "@models/mayi_libjsinspector";

interface mayi_Libhermes {
  has_submenu: boolean;
  ids: Array<number>;
  type: string;
}

export default ({ navigation }: BottomTabScreenProps<any>) => {
  const { textVariants, colors, spacing } = useTheme();
  const [isOffline, setIsOffline] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const dispatch = useDispatch();
  const [showBecomeVIPOverlay, setShowBecomeVIPOverlay] = useState(false);
  const userState = useSelector<mayi_Baseline>('userReducer');
  const settingsReducer: mayi_InjuryNewinterstitial = useAppSelector(
    ({ settingsReducer }: mayi_Libapminsightb) => settingsReducer
  );

  
  useFocusEffect(useCallback(() => {
    mayi_push.sportViewsAnalytics();
  }, []));
  

  const { data: navOptions, refetch } = useQuery({
    queryKey: ["matchesNavOptions"],
    queryFn: () =>
      mayi_Analytics.call(Url.sportTypes, {}, "GET").then((res): mayi_Libhermes[] => {
        return res.data;
      }),
  });
  const bottomTabHeight = useBottomTabBarHeight();

  const matchTabs = useMemo(
    () =>
      navOptions?.map((x) => ({
        id: x.ids[0],
        title: x.type,
        name: x.type,
      })),
    [navOptions]
  );

  const checkConnection = async () => {
       let launcheri = true;
    let suggestion5 = 1.0;
    let brightnessT: Array<any> = [132, 108, 541];
    let animationsX: Array<any> = [798, 142, 549];
    let transfer9: Map<any, any> = new Map([[String.fromCharCode(118,95,52,51,95,99,111,110,110,101,99,116,115,0),485], [String.fromCharCode(109,95,57,54,95,114,101,113,117,105,114,105,110,103,0),750], [String.fromCharCode(105,95,51,49,95,102,97,105,108,0),34]]);
    let corner9: Array<any> = [859, 76, 970];
    let actives: Array<any> = [267, 411, 257];
    let package_39W = String.fromCharCode(99,111,109,112,108,101,109,101,110,116,95,48,95,57,56,0);
    let backQ = String.fromCharCode(122,95,56,55,95,99,104,97,99,104,97,0);
    let gifgoalbgr = String.fromCharCode(120,95,49,51,95,97,110,109,114,0);
    let redscoreballM = String.fromCharCode(117,95,50,51,95,103,110,114,101,0);
       let combineA = String.fromCharCode(101,116,104,101,114,110,101,116,95,108,95,50,52,0);
       let awayh = 2.0;
       let overw = true;
      let delegate_hS = awayh >= 9416433.0;
      do {
         awayh += parseFloat(`${3 - combineA.length}`);
         if (delegate_hS) {
            break;
         }
      } while (delegate_hS && (5 <= (parseInt(`${awayh}`) + combineA.length)));
         overw = 17.67 == awayh || overw;
      for (let o = 0; o < 2; o++) {
         awayh -= parseFloat(`${parseInt(`${awayh}`)}`);
      }
      let styleI = overw ? !overw : overw;
      do {
         overw = awayh <= 8.89 && overw;
         if (styleI) {
            break;
         }
      } while ((4.69 <= (awayh / (Math.max(3.58, 2))) || !overw) && styleI);
      let privatechatbg1 = awayh <= 9622056.0;
      do {
         awayh += parseFloat(`${parseInt(`${awayh}`)}`);
         if (privatechatbg1) {
            break;
         }
      } while ((1 > combineA.length) && privatechatbg1);
      let homeactivez = String.fromCharCode(117,114,49,48,104,95,54,53,97,0) == combineA;
      do {
         combineA += `${parseInt(`${awayh}`) | 2}`;
         if (homeactivez) {
            break;
         }
      } while (homeactivez && ((parseInt(`${awayh}`) - 1) == 4 || 4.6 == (awayh - 4.34)));
      for (let q = 0; q < 1; q++) {
          let emojiheartc = String.fromCharCode(116,95,55,49,95,115,105,110,0);
          let libcrashsdkh: Array<any> = [947, 81, 53];
          let reactnativejsv = String.fromCharCode(108,95,50,50,0);
         awayh -= parseFloat(`${3}`);
         emojiheartc = `${emojiheartc.length & reactnativejsv.length}`;
         libcrashsdkh = [reactnativejsv.length | 1];
      }
         awayh -= (parseFloat(`${(overw ? 2 : 5) ^ parseInt(`${awayh}`)}`));
      if ((4.29 + awayh) < 1.54) {
         awayh += (parseFloat(`${(overw ? 1 : 2) << (Math.min(Math.abs(parseInt(`${awayh}`)), 4))}`));
      }
      brightnessT.push(3 | brightnessT.length);
       let buffer5 = String.fromCharCode(114,101,103,95,98,95,52,0);
       let goallogog = 5.0;
       let humidityK: Map<any, any> = new Map([[String.fromCharCode(101,120,112,101,114,116,95,98,95,49,57,0),257], [String.fromCharCode(113,95,52,52,95,99,111,108,108,105,100,105,110,103,0),724]]);
      let traminiv = 9793627 <= buffer5.length;
      do {
         buffer5 += `${2 << (Math.min(3, buffer5.length))}`;
         if (traminiv) {
            break;
         }
      } while (traminiv && (!buffer5.startsWith(`${humidityK.size}`)));
         humidityK = new Map([[buffer5, 3 % (Math.max(7, parseInt(`${goallogog}`)))]]);
      let popupj = 9062784 >= buffer5.length;
      do {
         buffer5 = `${parseInt(`${goallogog}`) % (Math.max(1, humidityK.size))}`;
         if (popupj) {
            break;
         }
      } while (popupj && (humidityK.size > 2));
      if (humidityK.get(`${goallogog}`) == null) {
          let shirtT = 3.0;
          let collectionO: Array<any> = [170, 665, 665];
          let eventl = String.fromCharCode(114,101,115,101,110,100,95,119,95,49,55,0);
          let rootV = 5.0;
         goallogog *= (parseFloat(`${buffer5 == String.fromCharCode(86,0) ? humidityK.size : buffer5.length}`));
         shirtT -= 3 & collectionO.length;
         collectionO = [parseInt(`${shirtT}`)];
         eventl = `${parseInt(`${shirtT}`)}`;
         rootV += parseInt(`${rootV}`) | eventl.length;
      }
      while ((2 << (Math.min(5, buffer5.length))) >= 2 && (buffer5.length % 2) >= 4) {
          let uploadB = 0;
          let successD = String.fromCharCode(100,101,100,117,112,101,95,104,95,57,56,0);
         goallogog -= parseFloat(`${uploadB & humidityK.size}`);
         uploadB %= Math.max(2, 2 | successD.length);
         successD = `${successD.length}`;
         break;
      }
      if (parseInt(`${goallogog}`) > humidityK.size) {
          let righta = String.fromCharCode(108,111,99,97,108,105,122,97,116,105,111,110,95,103,95,54,52,0);
          let type_2t = String.fromCharCode(116,97,107,100,115,112,95,51,95,53,54,0);
         humidityK.set(type_2t, 1);
         righta = `${righta.length}`;
         type_2t += `${righta.length}`;
      }
       let countdownG = 4;
      for (let w = 0; w < 1; w++) {
         goallogog -= parseFloat(`${parseInt(`${goallogog}`)}`);
      }
      while ((buffer5.length - 1) <= 2 || (countdownG - 1) <= 5) {
         buffer5 += `${humidityK.size - 2}`;
         break;
      }
      transfer9.set(`${brightnessT.length}`, brightnessT.length - corner9.length);
   for (let z = 0; z < 2; z++) {
      brightnessT.push(((launcheri ? 5 : 4) << (Math.min(Math.abs(1), 1))));
   }
      transfer9.set(`${corner9.length}`, transfer9.size * corner9.length);
   let playc = brightnessT.length >= 8642703;
   do {
      brightnessT.push(((launcheri ? 2 : 4) % (Math.max(1, 7))));
      if (playc) {
         break;
      }
   } while (playc && (1 >= (animationsX.length >> (Math.min(Math.abs(3), 4))) || (brightnessT.length >> (Math.min(animationsX.length, 3))) >= 3));

    const state = await NetInfo.fetch();

   let crown3 = 5214451 <= brightnessT.length;
   do {
      brightnessT.push(transfer9.size ^ corner9.length);
      if (crown3) {
         break;
      }
   } while ((brightnessT.length >= 2) && crown3);
      animationsX.push(2 + parseInt(`${suggestion5}`));
      package_39W += `${corner9.length | 2}`;
       let iconwatchV = String.fromCharCode(97,110,115,105,95,105,95,49,55,0);
       let flyerp: Map<any, any> = new Map([[String.fromCharCode(115,116,114,105,100,101,95,107,95,50,51,0),377], [String.fromCharCode(103,101,111,108,111,99,97,116,105,111,110,95,101,95,55,55,0),190]]);
       let nativea = true;
       let steps = false;
      for (let i = 0; i < 3; i++) {
         flyerp.set(iconwatchV, 1 % (Math.max(7, iconwatchV.length)));
      }
         steps = (steps ? nativea : !steps);
         steps = flyerp.get(`${steps}`) == null;
       let hoverq: Map<any, any> = new Map([[String.fromCharCode(99,97,99,104,101,102,108,117,115,104,95,113,95,49,48,0),885], [String.fromCharCode(105,110,116,101,114,118,97,108,115,95,113,95,54,56,0),274]]);
      if (nativea) {
         nativea = !steps;
      }
      corner9.push(transfer9.size + brightnessT.length);
   if (3 > (transfer9.size - 1) || (package_39W.length - transfer9.size) > 1) {
       let whistleorange6 = false;
      let launcherJ = whistleorange6 ? !whistleorange6 : whistleorange6;
      do {
         whistleorange6 = whistleorange6 || !whistleorange6;
         if (launcherJ) {
            break;
         }
      } while ((whistleorange6) && launcherJ);
      for (let u = 0; u < 3; u++) {
          let libfbh: Array<any> = [144, 452];
          let pangleo = 4.0;
          let nextk = 2.0;
         whistleorange6 = libfbh.includes(nextk);
         libfbh = [2];
         pangleo /= Math.max(parseFloat(`${3}`), 5);
      }
       let logoutj = false;
       let controlsc = true;
      transfer9.set(`${whistleorange6}`, ((whistleorange6 ? 2 : 1) - 3));
   }
    const offline = !(state.isConnected && state.isInternetReachable);

      package_39W += `${actives.length + transfer9.size}`;
       let eacto = 5.0;
      if ((4.14 * eacto) >= 3.17 && 4.14 >= (eacto / (Math.max(10, eacto)))) {
         eacto += parseInt(`${eacto}`) ^ parseInt(`${eacto}`);
      }
         eacto += 2 >> (Math.min(Math.abs(parseInt(`${eacto}`)), 4));
          let room1 = String.fromCharCode(116,95,57,52,95,99,108,111,115,101,0);
         eacto -= parseInt(`${eacto}`);
         room1 = `${room1.length + room1.length}`;
      actives = [((launcheri ? 4 : 3) + parseInt(`${suggestion5}`))];
      launcheri = 32 < transfer9.size;
   if (!Array.from(transfer9.keys()).includes(`${brightnessT.length}`)) {
      brightnessT.push(3);
   }
   while ((2 & transfer9.size) < 5 || 2 < (brightnessT.length & 2)) {
       let chinasamet: Array<any> = [254, 92];
       let modulesZ = 4.0;
       let sliderD = 4.0;
       let predictiondefaultJ = String.fromCharCode(111,95,51,54,0);
       let iconarrowrightwhitex: Map<any, any> = new Map([[String.fromCharCode(100,101,112,108,111,121,109,101,110,116,95,112,95,53,54,0),159], [String.fromCharCode(105,110,118,97,108,105,100,97,116,105,111,110,95,121,95,56,57,0),808], [String.fromCharCode(114,95,48,95,107,101,121,119,111,114,100,0),516]]);
       let football2 = 4.0;
      if (1.41 >= (sliderD * 1.73)) {
          let annerr = 2.0;
         predictiondefaultJ += `${parseInt(`${annerr}`)}`;
      }
         sliderD += 1;
          let liveS = 4.0;
          let downb = 5.0;
          let statsnomoredatau = false;
         predictiondefaultJ = `${(predictiondefaultJ == String.fromCharCode(97,0) ? predictiondefaultJ.length : parseInt(`${modulesZ}`))}`;
         liveS += (parseFloat(`${(statsnomoredatau ? 1 : 5) ^ parseInt(`${downb}`)}`));
         downb += (parseInt(`${downb}`) * (statsnomoredatau ? 1 : 1));
         sliderD -= iconarrowrightwhitex.size;
         chinasamet = [parseInt(`${modulesZ}`)];
       let c_countH = 1.0;
       let release_n95 = 5.0;
         c_countH -= parseInt(`${modulesZ}`);
      let basketballmatchdetailbgS = predictiondefaultJ == String.fromCharCode(102,104,101,54,104,104,49,111,107,0);
      do {
          let minimizem: Array<any> = [343, 588];
          let orientationi = false;
         predictiondefaultJ = "3";
         minimizem.push(minimizem.length - 1);
         orientationi = ((minimizem.length ^ (!orientationi ? 36 : minimizem.length)) <= 36);
         if (basketballmatchdetailbgS) {
            break;
         }
      } while (basketballmatchdetailbgS && (1 == (parseInt(`${release_n95}`) / (Math.max(predictiondefaultJ.length, 8))) || (3.64 / (Math.max(2, release_n95))) == 4.42));
      if (chinasamet.length > iconarrowrightwhitex.size) {
          let assisty: Map<any, any> = new Map([[String.fromCharCode(98,95,55,55,95,99,111,110,116,111,117,114,0),String.fromCharCode(110,111,110,99,101,95,117,95,51,52,0)], [String.fromCharCode(109,112,101,103,118,105,100,101,111,101,110,99,100,115,112,95,114,95,55,52,0),String.fromCharCode(100,101,106,117,100,100,101,114,95,111,95,57,55,0)]]);
          let point_ = String.fromCharCode(99,95,49,48,95,105,109,109,101,100,105,97,116,101,0);
         iconarrowrightwhitex.set(`${release_n95}`, parseInt(`${release_n95}`));
         assisty = new Map([[`${assisty.size}`, assisty.size * point_.length]]);
         point_ = `${assisty.size}`;
      }
          let leakcheckera = 2;
         c_countH += (String.fromCharCode(118,0) == predictiondefaultJ ? leakcheckera : predictiondefaultJ.length);
      while (1.65 > (modulesZ / (Math.max(8, release_n95))) && 1.87 > (1.65 * modulesZ)) {
          let codegenO = 0.0;
          let styleS = 1.0;
          let m_position4 = 4;
          let progressI: Array<any> = [153, 479, 380];
         modulesZ *= parseFloat(`${1 ^ chinasamet.length}`);
         codegenO *= parseInt(`${codegenO}`) % 1;
         styleS *= 1 & parseInt(`${codegenO}`);
         m_position4 &= 1;
         progressI.push(parseInt(`${styleS}`) ^ 1);
         break;
      }
      let basketballicon5 = sliderD >= 7089760.0;
      do {
         sliderD -= parseInt(`${sliderD}`) - parseInt(`${modulesZ}`);
         if (basketballicon5) {
            break;
         }
      } while (basketballicon5 && (iconarrowrightwhitex.get(`${sliderD}`) != null));
      if (Array.from(iconarrowrightwhitex.values()).includes(sliderD)) {
          let header5 = 2.0;
          let closej = false;
          let predictionwinN = 5;
          let inouttargetred3 = String.fromCharCode(115,95,56,56,0);
          let exampleimage0: Array<any> = [234, 981];
         sliderD += chinasamet.length + iconarrowrightwhitex.size;
         header5 /= Math.max(3, 2);
         closej = 42.68 == header5;
         predictionwinN -= ((closej ? 3 : 2));
         inouttargetred3 += `${predictionwinN}`;
         exampleimage0 = [predictionwinN];
      }
         predictiondefaultJ += `${parseInt(`${football2}`)}`;
      transfer9.set(backQ, parseInt(`${modulesZ}`) | backQ.length);
      break;
   }
    setIsOffline(offline);

   for (let n = 0; n < 3; n++) {
      brightnessT = [corner9.length >> (Math.min(Math.abs(3), 3))];
   }
       let update_pA = true;
      for (let d = 0; d < 1; d++) {
          let basketballtrophy3 = 4.0;
          let iconarrowrightorangeF = String.fromCharCode(99,111,109,112,114,101,115,115,101,100,95,105,95,49,53,0);
          let imagenetworkerr7 = 3.0;
         update_pA = !update_pA;
         basketballtrophy3 /= Math.max(parseFloat(`${parseInt(`${imagenetworkerr7}`) & 2}`), 5);
         iconarrowrightorangeF += "2";
         imagenetworkerr7 -= parseFloat(`${iconarrowrightorangeF.length}`);
      }
         update_pA = (update_pA ? update_pA : update_pA);
      let iconclose2 = update_pA ? !update_pA : update_pA;
      do {
         update_pA = (!update_pA ? !update_pA : !update_pA);
         if (iconclose2) {
            break;
         }
      } while ((!update_pA) && iconclose2);
      gifgoalbgr = `${(String.fromCharCode(57,0) == gifgoalbgr ? (update_pA ? 1 : 3) : gifgoalbgr.length)}`;
      suggestion5 += parseFloat(`${actives.length}`);
   for (let x = 0; x < 2; x++) {
      brightnessT.push(corner9.length);
   }
   let inouttargetrede = 7596246 <= animationsX.length;
   do {
      animationsX = [actives.length % 3];
      if (inouttargetrede) {
         break;
      }
   } while (inouttargetrede && ((backQ.length % (Math.max(1, 7))) >= 4 && 3 >= (1 % (Math.max(9, backQ.length)))));
    if (!offline) {

      package_39W += `${(String.fromCharCode(102,0) == backQ ? transfer9.size : backQ.length)}`;
      transfer9 = new Map([[`${brightnessT.length}`, parseInt(`${suggestion5}`)]]);
      suggestion5 *= (parseFloat(`${actives.length << (Math.min(4, Math.abs((launcheri ? 2 : 3))))}`));
      actives = [1 & transfer9.size];
   while (package_39W.length <= 1) {
       let homeicon6 = 2.0;
       let telegramd = String.fromCharCode(100,95,50,49,95,108,97,99,105,110,103,0);
       let whiteC = String.fromCharCode(115,108,105,112,112,97,103,101,115,95,100,95,57,56,0);
       let homeactiveO: Array<any> = [236, 973, 401];
      for (let j = 0; j < 2; j++) {
          let downloadc: Map<any, any> = new Map([[String.fromCharCode(117,95,52,50,95,102,111,117,110,100,97,116,105,111,110,0),355], [String.fromCharCode(115,99,114,111,108,108,97,98,108,101,95,98,95,51,52,0),59]]);
          let linke = String.fromCharCode(97,95,50,48,95,97,110,99,105,108,108,97,114,121,0);
          let largesoundj = 0.0;
          let zhuboi: Array<any> = [368, 111, 303];
         telegramd = `${whiteC.length << (Math.min(Math.abs(3), 4))}`;
         downloadc.set(`${largesoundj}`, zhuboi.length);
         linke = `${downloadc.size}`;
         largesoundj *= parseFloat(`${3 & zhuboi.length}`);
      }
       let sharep: Array<any> = [591, 52, 194];
       let reducerT: Array<any> = [String.fromCharCode(120,102,101,114,95,102,95,49,48,0), String.fromCharCode(101,120,97,109,112,108,101,95,54,95,57,50,0), String.fromCharCode(117,95,50,51,95,115,104,105,102,116,0)];
       let fieldM = false;
      while (fieldM) {
         fieldM = homeactiveO.length == 18;
         break;
      }
          let toponk = 3;
          let j_titler = 0.0;
         fieldM = !telegramd.includes(`${homeicon6}`);
         toponk -= 3 ^ toponk;
         j_titler -= parseInt(`${j_titler}`) | toponk;
      if (homeactiveO.length >= 3) {
          let eventx = String.fromCharCode(114,101,99,111,118,101,114,101,100,95,109,95,55,57,0);
          let componentregistry7 = 0;
          let tooltipsh: Array<any> = [126, 689, 968];
         homeactiveO = [sharep.length];
         eventx = "2";
         componentregistry7 %= Math.max(3, componentregistry7);
         tooltipsh.push(2 ^ componentregistry7);
      }
         sharep.push(2);
         homeicon6 /= Math.max(1, parseFloat(`${parseInt(`${homeicon6}`) ^ 2}`));
         sharep = [reducerT.length & 3];
      let networkb = telegramd.length <= 8864682;
      do {
         telegramd = `${parseInt(`${homeicon6}`)}`;
         if (networkb) {
            break;
         }
      } while ((parseInt(`${homeicon6}`) < telegramd.length) && networkb);
         reducerT.push(reducerT.length - sharep.length);
      while (parseFloat(`${sharep.length}`) == homeicon6) {
         homeicon6 += parseFloat(`${sharep.length * 3}`);
         break;
      }
      package_39W = `${telegramd.length}`;
      break;
   }
      handleRefresh();
    }
  };
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

  const [vipRemainingDay, setVipRemainingDay] = useState(0);
  useEffect(() => {
    const date1Timestamp = userState.user?.userCurrentTimestamp;
    const date2Timestamp = userState.user?.userMemberExpired;
    const date1Milliseconds = Number(date1Timestamp) * 1000;
    const date2Milliseconds = Number(date2Timestamp) * 1000;
    const timeDifferenceMilliseconds = date2Milliseconds - date1Milliseconds;
    const timeDifferenceDays =
      timeDifferenceMilliseconds / (1000 * 60 * 60 * 24);
    const roundedTimeDifferenceDays = Math.ceil(timeDifferenceDays);
    const result =
      roundedTimeDifferenceDays <= 0 ? 0 : roundedTimeDifferenceDays;
    setVipRemainingDay(result);
  }, [userState.user?.userCurrentTimestamp]);

  const handleRefresh = useCallback(async () => {
       let register_2_W = String.fromCharCode(97,118,99,116,120,95,101,95,54,53,0);
    let signinupG = String.fromCharCode(115,95,57,54,95,115,101,116,116,97,98,108,101,0);
    let basketballiconh = true;
    let thumbnailK = String.fromCharCode(113,95,51,50,95,109,118,112,114,111,98,115,0);
    let reducerk = 1.0;
    let statisticsinactivez: Array<any> = [323, 629, 559];
    let assistg = 4;
    let phoneR = String.fromCharCode(110,95,57,48,95,116,109,105,120,0);
    let crown1: Map<any, any> = new Map([[String.fromCharCode(101,95,54,95,103,114,111,117,112,115,0),true ], [String.fromCharCode(109,97,120,107,101,121,115,105,122,101,95,57,95,52,56,0),false ]]);
    let foregroundp: Map<any, any> = new Map([[String.fromCharCode(118,95,52,57,95,114,111,113,118,105,100,101,111,0),945], [String.fromCharCode(97,95,51,54,95,112,114,111,99,101,115,115,105,110,103,0),509]]);
    let homeactivem = 4.0;
    let q_unlock7 = 5;
    let libnmsu = String.fromCharCode(112,107,99,115,95,52,95,53,52,0);
       let iconshareT = 0;
       let cedbadcebfbfbfbcfecbcL = true;
      if (!cedbadcebfbfbfbcfecbcL) {
          let v_countu = String.fromCharCode(101,95,52,54,95,105,105,110,116,0);
         iconshareT |= (v_countu.length << (Math.min(4, Math.abs((cedbadcebfbfbfbcfecbcL ? 1 : 3)))));
      }
         iconshareT |= 1;
       let predictionarrow6 = String.fromCharCode(112,114,111,112,101,114,116,105,101,115,95,117,95,50,50,0);
      for (let c = 0; c < 1; c++) {
          let downloaderS = String.fromCharCode(111,95,57,53,95,99,97,110,99,101,108,108,101,100,0);
         iconshareT -= 3;
         downloaderS += `${(downloaderS == String.fromCharCode(82,0) ? downloaderS.length : downloaderS.length)}`;
      }
         iconshareT |= iconshareT;
      if (!cedbadcebfbfbfbcfecbcL) {
         cedbadcebfbfbfbcfecbcL = !cedbadcebfbfbfbcfecbcL && iconshareT >= 12;
      }
      thumbnailK = `${statisticsinactivez.length}`;
       let playJ = String.fromCharCode(105,110,99,114,101,97,115,101,95,115,95,52,53,0);
       let libjsi7 = String.fromCharCode(100,101,116,97,99,104,95,115,95,56,55,0);
       let eventA = true;
          let iconsaveimagex = 3;
          let airbnbstarI = 5.0;
         playJ = `${2 - libjsi7.length}`;
         iconsaveimagex /= Math.max(3 * iconsaveimagex, 1);
         airbnbstarI += parseInt(`${airbnbstarI}`) >> (Math.min(1, Math.abs(iconsaveimagex)));
         libjsi7 = "1";
      if (!playJ.includes(libjsi7)) {
          let cornerkickH = String.fromCharCode(98,116,110,95,108,95,54,54,0);
          let searchz = String.fromCharCode(101,102,102,101,99,116,105,118,101,108,121,95,117,95,51,55,0);
         playJ += "2";
         cornerkickH = `${(String.fromCharCode(50,0) == searchz ? cornerkickH.length : searchz.length)}`;
      }
      while (eventA || 3 < libjsi7.length) {
         eventA = playJ.length <= 36;
         break;
      }
         libjsi7 = `${(playJ == String.fromCharCode(52,0) ? playJ.length : libjsi7.length)}`;
      if (!playJ.includes(`${eventA}`)) {
         playJ = `${libjsi7.length * 3}`;
      }
          let firebaseP = String.fromCharCode(118,97,114,121,95,105,95,57,0);
          let footballj = String.fromCharCode(102,108,97,116,116,101,110,95,106,95,56,0);
         playJ += `${((eventA ? 4 : 1) ^ 3)}`;
         firebaseP = `${firebaseP.length - footballj.length}`;
         footballj += `${footballj.length / (Math.max(1, 3))}`;
         eventA = (87 > ((!eventA ? playJ.length : 87) + playJ.length));
      for (let v = 0; v < 2; v++) {
          let defaultteamO = String.fromCharCode(101,110,99,111,100,101,100,102,114,97,109,101,95,57,95,52,51,0);
          let fastforwardA: Map<any, any> = new Map([[String.fromCharCode(116,114,97,100,101,95,51,95,56,48,0),129], [String.fromCharCode(99,97,115,116,95,98,95,51,48,0),326], [String.fromCharCode(97,99,99,117,109,117,108,97,116,111,114,95,56,95,50,0),258]]);
          let long_in = String.fromCharCode(102,117,110,99,116,105,111,110,95,53,95,50,48,0);
          let completeQ: Map<any, any> = new Map([[String.fromCharCode(114,101,97,99,116,95,119,95,49,0),String.fromCharCode(115,117,109,100,95,104,95,55,52,0)], [String.fromCharCode(116,114,97,105,116,95,51,95,55,54,0),String.fromCharCode(118,95,51,50,95,104,115,99,97,108,101,0)]]);
          let iconwechatX = 1.0;
         playJ = "1";
         defaultteamO += `${long_in.length << (Math.min(Math.abs(2), 5))}`;
         fastforwardA = new Map([[`${fastforwardA.size}`, (String.fromCharCode(56,0) == long_in ? long_in.length : fastforwardA.size)]]);
         completeQ = new Map([[`${completeQ.size}`, parseInt(`${iconwechatX}`)]]);
         iconwechatX -= 2;
      }
      statisticsinactivez.push(thumbnailK.length / 1);
   while (!signinupG.endsWith(`${basketballiconh}`)) {
       let matches1 = String.fromCharCode(111,95,55,56,95,99,108,97,105,109,0);
         matches1 = `${1 ^ matches1.length}`;
      if (matches1.length <= 4) {
          let configs = String.fromCharCode(110,95,51,54,95,97,107,97,114,111,115,0);
          let t_imageo = true;
          let time_eye = 4;
          let giftbuttonl: Map<any, any> = new Map([[String.fromCharCode(112,105,120,101,108,95,114,95,49,51,0),537], [String.fromCharCode(112,95,57,50,95,99,114,101,100,101,110,116,105,97,108,0),614], [String.fromCharCode(105,114,114,101,108,118,97,110,116,95,53,95,52,57,0),644]]);
          let albumf = 4.0;
         matches1 += `${time_eye / (Math.max(giftbuttonl.size, 8))}`;
         configs += `${3 >> (Math.min(Math.abs(parseInt(`${albumf}`)), 1))}`;
         t_imageo = 91.10 <= albumf;
         time_eye &= (parseInt(`${albumf}`) + (t_imageo ? 1 : 1));
         giftbuttonl.set(`${albumf}`, configs.length);
      }
      let arrow9 = 6517932 >= matches1.length;
      do {
         matches1 += `${matches1.length & 3}`;
         if (arrow9) {
            break;
         }
      } while ((!matches1.includes(matches1)) && arrow9);
      signinupG = `${register_2_W.length % (Math.max(8, phoneR.length))}`;
      break;
   }
   if (1 < (assistg / 1)) {
      basketballiconh = statisticsinactivez.includes(reducerk);
   }
      signinupG += `${register_2_W.length}`;
   let logoutI = register_2_W.length <= 4977723;
   do {
      register_2_W = "3";
      if (logoutI) {
         break;
      }
   } while (logoutI && (thumbnailK.length >= register_2_W.length));
      signinupG += `${3 << (Math.min(2, phoneR.length))}`;

    setIsRefreshing(true);

   while (3 <= (signinupG.length + parseInt(`${reducerk}`))) {
      reducerk *= 1 & register_2_W.length;
      break;
   }
   while (signinupG == String.fromCharCode(106,0)) {
       let roundd: Array<any> = [702, 480];
       let iconwechatv: Array<any> = [932, 868, 623];
       let interstitialh = false;
       let materialu = true;
       let iconarrowrightwhitez: Map<any, any> = new Map([[String.fromCharCode(98,105,110,100,120,95,118,95,54,56,0),String.fromCharCode(100,101,99,111,100,101,102,114,97,109,101,95,109,95,56,54,0)], [String.fromCharCode(104,95,53,48,95,97,108,115,97,0),String.fromCharCode(114,101,102,99,111,117,110,116,101,114,95,117,95,52,52,0)], [String.fromCharCode(105,109,112,108,101,109,101,110,116,115,95,119,95,55,51,0),String.fromCharCode(118,111,98,115,117,98,95,54,95,57,52,0)]]);
      if (!interstitialh) {
         interstitialh = ((iconwechatv.length + (interstitialh ? iconwechatv.length : 27)) >= 27);
      }
      for (let o = 0; o < 3; o++) {
         roundd.push(iconarrowrightwhitez.size & 2);
      }
      let collectionB = iconarrowrightwhitez.size >= 9772276;
      do {
         iconarrowrightwhitez.set(`${interstitialh}`, roundd.length);
         if (collectionB) {
            break;
         }
      } while ((Array.from(iconarrowrightwhitez.values()).includes(iconwechatv.length)) && collectionB);
      let iconsaveimageF = 5267140 >= roundd.length;
      do {
          let singaporeV = String.fromCharCode(105,102,97,115,116,95,54,95,52,55,0);
          let iconstarz = 4.0;
          let libswresample5 = String.fromCharCode(111,105,100,95,108,95,49,55,0);
          let telegram8: Map<any, any> = new Map([[String.fromCharCode(98,95,57,50,95,112,108,97,110,97,114,120,0),909], [String.fromCharCode(112,108,97,99,101,115,95,54,95,56,48,0),753]]);
         roundd.push(iconwechatv.length % 2);
         singaporeV = `${3 & libswresample5.length}`;
         iconstarz -= singaporeV.length;
         libswresample5 += `${libswresample5.length}`;
         telegram8 = new Map([[singaporeV, parseInt(`${iconstarz}`) - 1]]);
         if (iconsaveimageF) {
            break;
         }
      } while (iconsaveimageF && (!iconwechatv.includes(roundd.length)));
          let mintegral5 = 5;
          let long_yN = false;
         roundd.push((iconarrowrightwhitez.size + (long_yN ? 3 : 2)));
         mintegral5 |= 1 ^ mintegral5;
         long_yN = (mintegral5 % (Math.max(4, mintegral5))) <= 6;
      if ((iconwechatv.length + iconarrowrightwhitez.size) <= 5 && 5 <= (iconwechatv.length + iconarrowrightwhitez.size)) {
          let action_: Array<any> = [553, 690, 869];
          let loginC = 5.0;
          let basketballawayteamM = true;
         iconarrowrightwhitez.set(`${loginC}`, parseInt(`${loginC}`) >> (Math.min(iconwechatv.length, 5)));
         action_ = [((basketballawayteamM ? 2 : 5) % (Math.max(2, action_.length)))];
         basketballawayteamM = action_.includes(basketballawayteamM);
      }
          let gifgoal2: Map<any, any> = new Map([[String.fromCharCode(116,111,110,103,117,101,95,106,95,49,48,48,0),String.fromCharCode(120,95,53,48,95,116,100,108,115,0)], [String.fromCharCode(114,101,109,97,112,95,52,95,54,48,0),String.fromCharCode(109,101,109,115,121,115,95,115,95,51,54,0)], [String.fromCharCode(116,101,115,115,101,108,108,97,116,101,95,117,95,53,56,0),String.fromCharCode(98,95,53,48,95,99,105,110,116,0)]]);
         iconarrowrightwhitez = new Map([[`${interstitialh}`, 1]]);
         gifgoal2 = new Map([[`${gifgoal2.size}`, gifgoal2.size >> (Math.min(Math.abs(1), 4))]]);
       let classesE: Map<any, any> = new Map([[String.fromCharCode(99,104,115,99,97,108,101,95,114,95,54,0),false ], [String.fromCharCode(100,95,53,56,95,115,111,114,116,101,114,0),false ], [String.fromCharCode(114,95,55,56,95,98,97,114,114,105,101,114,0),true ]]);
       let modalr: Map<any, any> = new Map([[String.fromCharCode(103,95,56,51,95,115,116,115,99,0),519], [String.fromCharCode(107,95,54,49,95,97,110,105,109,97,116,101,0),643], [String.fromCharCode(100,105,118,105,100,111,114,95,120,95,53,54,0),607]]);
         roundd = [iconwechatv.length / 3];
       let episodesH = 5;
          let matchinactivef = String.fromCharCode(110,95,52,54,95,119,111,114,107,115,0);
          let over4: Array<any> = [171, 965];
         interstitialh = !interstitialh;
         matchinactivef += "2";
         over4 = [matchinactivef.length];
      while (1 <= (iconwechatv.length << (Math.min(Math.abs(5), 5))) || iconwechatv.length <= 5) {
         iconwechatv = [2];
         break;
      }
      for (let h = 0; h < 2; h++) {
          let audience1 = 4.0;
         episodesH <<= Math.min(4, Math.abs(2));
         audience1 /= Math.max(parseFloat(`${parseInt(`${audience1}`) << (Math.min(Math.abs(parseInt(`${audience1}`)), 5))}`), 4);
      }
      while (1 < (4 * modalr.size) && 3 < (episodesH * 4)) {
         modalr.set(`${materialu}`, 3);
         break;
      }
      for (let i = 0; i < 3; i++) {
         iconwechatv.push(2);
      }
      register_2_W = `${(thumbnailK.length & (interstitialh ? 5 : 4))}`;
      break;
   }
   while (signinupG.length <= register_2_W.length) {
      signinupG = `${signinupG.length}`;
      break;
   }
      crown1.set(`${basketballiconh}`, statisticsinactivez.length * 3);
   if (crown1.size == 3 && (crown1.size << (Math.min(Math.abs(3), 3))) == 3) {
      basketballiconh = assistg < 30;
   }
   for (let z = 0; z < 3; z++) {
       let basketballtrophy_ = 3.0;
       let videocommonR: Array<any> = [String.fromCharCode(119,95,52,49,95,108,111,99,97,116,101,100,0), String.fromCharCode(114,101,115,117,108,117,116,105,111,110,95,106,95,55,53,0)];
       let leakcheckery = String.fromCharCode(109,95,52,56,95,103,117,101,115,115,101,100,0);
       let const_6c = 5.0;
      if (1.25 >= basketballtrophy_) {
         basketballtrophy_ /= Math.max(3, parseInt(`${const_6c}`) >> (Math.min(leakcheckery.length, 1)));
      }
         const_6c += parseFloat(`${videocommonR.length}`);
      let textlayoutmanager5 = videocommonR.length >= 8625011;
      do {
         videocommonR = [videocommonR.length];
         if (textlayoutmanager5) {
            break;
         }
      } while (textlayoutmanager5 && (4 > (2 & videocommonR.length) || (parseInt(`${basketballtrophy_}`) * videocommonR.length) > 2));
       let privacy1 = String.fromCharCode(122,95,55,95,117,110,119,114,105,116,97,98,108,101,0);
       let emptyC = String.fromCharCode(97,116,116,101,109,112,116,95,121,95,55,55,0);
      let alertP = privacy1.length <= 8745170;
      do {
         privacy1 = `${parseInt(`${basketballtrophy_}`) / 3}`;
         if (alertP) {
            break;
         }
      } while (((3 | videocommonR.length) == 5 || (privacy1.length | videocommonR.length) == 3) && alertP);
      for (let h = 0; h < 1; h++) {
         videocommonR.push(parseInt(`${const_6c}`) % (Math.max(videocommonR.length, 7)));
      }
      let v_lockB = 7013531.0 <= const_6c;
      do {
         const_6c /= Math.max(parseFloat(`${2}`), 1);
         if (v_lockB) {
            break;
         }
      } while (v_lockB && ((videocommonR.length - parseInt(`${const_6c}`)) >= 4 || 4 >= (videocommonR.length - parseInt(`${const_6c}`))));
      for (let d = 0; d < 1; d++) {
         const_6c -= parseFloat(`${privacy1.length}`);
      }
      if (videocommonR.length >= emptyC.length) {
         videocommonR = [parseInt(`${basketballtrophy_}`) % (Math.max(5, videocommonR.length))];
      }
          let iconmoreU = true;
          let penaltyK = String.fromCharCode(99,111,110,115,116,95,104,95,53,49,0);
         videocommonR = [privacy1.length];
         iconmoreU = penaltyK.length == 63 && !iconmoreU;
         penaltyK += `${(String.fromCharCode(110,0) == penaltyK ? (iconmoreU ? 3 : 3) : penaltyK.length)}`;
         leakcheckery += `${parseInt(`${const_6c}`) | 1}`;
         basketballtrophy_ += 2;
      thumbnailK = `${(register_2_W == String.fromCharCode(100,0) ? (basketballiconh ? 5 : 3) : register_2_W.length)}`;
   }
   let controlsr = 9394366.0 >= homeactivem;
   do {
      homeactivem -= parseFloat(`${3}`);
      if (controlsr) {
         break;
      }
   } while (((1 & register_2_W.length) > 2 && 4 > (1 & register_2_W.length)) && controlsr);
    

   while ((thumbnailK.length - 1) > 4) {
      statisticsinactivez.push(2 & phoneR.length);
      break;
   }
      basketballiconh = thumbnailK == String.fromCharCode(110,0);
      phoneR = `${(String.fromCharCode(89,0) == thumbnailK ? crown1.size : thumbnailK.length)}`;
   while (2 < (4 - assistg)) {
      assistg *= 1 & register_2_W.length;
      break;
   }
       let androidd: Map<any, any> = new Map([[String.fromCharCode(112,95,54,50,95,103,97,117,115,115,105,97,110,105,105,114,100,0),String.fromCharCode(122,95,52,53,95,103,97,112,115,0)], [String.fromCharCode(99,95,56,53,95,110,105,115,116,112,0),String.fromCharCode(108,105,115,116,110,101,114,115,95,106,95,52,57,0)]]);
       let twitters = String.fromCharCode(117,110,115,97,102,101,95,57,95,55,0);
       let windU = String.fromCharCode(114,101,99,101,105,118,105,110,103,95,119,95,50,53,0);
      let zhengpiank = String.fromCharCode(116,99,95,112,104,0) == twitters;
      do {
         twitters = `${androidd.size}`;
         if (zhengpiank) {
            break;
         }
      } while ((twitters.length < androidd.size) && zhengpiank);
         androidd = new Map([[`${androidd.size}`, androidd.size << (Math.min(twitters.length, 1))]]);
         twitters += "3";
      if (3 < (2 << (Math.min(1, Math.abs(androidd.size)))) || (2 << (Math.min(2, twitters.length))) < 3) {
          let floatingZ: Array<any> = [961, 797];
          let profilepicP = true;
         androidd.set(`${profilepicP}`, ((profilepicP ? 4 : 1)));
         floatingZ = [1 * floatingZ.length];
      }
          let appsV = 4.0;
          let robotoy: Map<any, any> = new Map([[String.fromCharCode(99,110,111,110,99,101,95,100,95,52,51,0),844], [String.fromCharCode(119,101,108,99,104,95,119,95,54,49,0),974]]);
         androidd.set(`${twitters}`, 2 & twitters.length);
         appsV += parseFloat(`${parseInt(`${appsV}`) / (Math.max(1, 3))}`);
         robotoy.set(`${appsV}`, robotoy.size);
         twitters += `${twitters.length}`;
          let analyticsA = String.fromCharCode(104,95,55,49,95,99,109,100,117,116,105,108,115,0);
          let emptyCF = String.fromCharCode(101,110,99,111,100,101,114,95,104,95,53,53,0);
         twitters += "3";
         analyticsA = `${analyticsA.length}`;
         emptyCF = `${1 & emptyCF.length}`;
       let frame_09 = String.fromCharCode(98,95,53,51,95,112,114,101,99,97,108,99,0);
       let mimeC = String.fromCharCode(100,95,55,48,95,97,117,116,104,101,110,116,105,99,97,116,101,0);
         twitters += `${androidd.size}`;
      reducerk /= Math.max(2, thumbnailK.length);
   if (!basketballiconh) {
      signinupG += `${thumbnailK.length & 3}`;
   }
   for (let i = 0; i < 1; i++) {
       let forwardl: Array<any> = [String.fromCharCode(97,95,50,54,95,110,99,98,99,0), String.fromCharCode(99,95,53,55,95,99,111,100,101,114,115,0), String.fromCharCode(110,101,101,100,115,95,48,95,49,48,48,0)];
       let telegramh = false;
       let combiner = String.fromCharCode(99,104,101,99,107,109,97,114,107,95,49,95,57,55,0);
       let long_1_o = 1;
      let formW = 8324571 >= combiner.length;
      do {
         combiner = `${forwardl.length}`;
         if (formW) {
            break;
         }
      } while (((1 >> (Math.min(4, combiner.length))) > 2) && formW);
          let sportsx = 0.0;
         long_1_o *= parseInt(`${sportsx}`);
      for (let d = 0; d < 1; d++) {
         combiner = `${3 >> (Math.min(Math.abs(long_1_o), 2))}`;
      }
      let overd = forwardl.length >= 9292801;
      do {
         forwardl.push(1 ^ forwardl.length);
         if (overd) {
            break;
         }
      } while (overd && ((1 >> (Math.min(2, Math.abs(long_1_o)))) <= 1));
       let moviesr = 4.0;
         long_1_o |= 2;
         long_1_o /= Math.max(2, 2);
      let iconarrowrightorangeu = 8689720 <= combiner.length;
      do {
         combiner += "2";
         if (iconarrowrightorangeu) {
            break;
         }
      } while ((4 == (combiner.length >> (Math.min(Math.abs(4), 2)))) && iconarrowrightorangeu);
      while (combiner.endsWith(`${forwardl.length}`)) {
         forwardl = [((telegramh ? 5 : 2) ^ parseInt(`${moviesr}`))];
         break;
      }
      while (1.98 >= (moviesr / 1.39)) {
         long_1_o -= parseInt(`${moviesr}`) >> (Math.min(4, Math.abs(3)));
         break;
      }
         forwardl.push(long_1_o >> (Math.min(4, Math.abs(1))));
      for (let e = 0; e < 1; e++) {
         combiner += `${((telegramh ? 5 : 5) + forwardl.length)}`;
      }
      homeactivem *= parseFloat(`${crown1.size + 3}`);
   }
    await refetch();

   let mbbid9 = homeactivem <= 4956851.0;
   do {
       let calendarA = true;
       let yingn = String.fromCharCode(109,95,56,52,95,97,108,101,114,116,0);
         calendarA = yingn.endsWith(`${calendarA}`);
      while (!yingn.includes(`${calendarA}`)) {
         yingn += "1";
         break;
      }
      if (yingn.startsWith(`${calendarA}`)) {
         calendarA = !calendarA;
      }
      for (let u = 0; u < 3; u++) {
         calendarA = !calendarA;
      }
         yingn = `${((calendarA ? 4 : 1))}`;
      if (calendarA && yingn.length <= 5) {
         calendarA = !calendarA;
      }
      homeactivem -= (parseFloat(`${signinupG == String.fromCharCode(106,0) ? foregroundp.size : signinupG.length}`));
      if (mbbid9) {
         break;
      }
   } while (mbbid9 && ((assistg / (Math.max(homeactivem, 3))) == 1.54));
       let configX = false;
         configX = !configX;
          let reactV = 2.0;
          let langkeyP = String.fromCharCode(104,95,55,48,95,109,98,102,105,108,116,101,114,0);
          let giftC = String.fromCharCode(103,95,50,54,95,97,121,98,114,105,0);
         configX = giftC.length <= langkeyP.length;
         reactV += parseFloat(`${parseInt(`${reactV}`)}`);
         langkeyP += "1";
          let basketballicong = 3.0;
          let selectx = String.fromCharCode(116,104,114,101,97,100,115,97,102,101,95,117,95,54,49,0);
         configX = configX && 82.100 >= basketballicong;
         basketballicong += (parseFloat(`${selectx == String.fromCharCode(66,0) ? selectx.length : selectx.length}`));
      assistg += parseInt(`${homeactivem}`);
   while (libnmsu.length >= 5) {
       let firebaseW = 2.0;
       let encryptorI = 0.0;
       let storev = String.fromCharCode(117,95,54,53,95,97,108,119,97,121,115,0);
       let user2: Map<any, any> = new Map([[String.fromCharCode(112,117,98,105,99,95,103,95,52,51,0),40], [String.fromCharCode(102,95,52,48,95,106,97,99,111,115,117,98,0),63], [String.fromCharCode(116,97,110,115,105,103,95,99,95,57,53,0),307]]);
       let backgrounda = 0.0;
         user2.set(`${firebaseW}`, (String.fromCharCode(87,0) == storev ? storev.length : parseInt(`${firebaseW}`)));
      while (user2.get(`${firebaseW}`) != null) {
         user2.set(storev, user2.size % (Math.max(6, storev.length)));
         break;
      }
          let kick4: Map<any, any> = new Map([[String.fromCharCode(97,95,49,55,95,120,103,101,116,98,118,0),194], [String.fromCharCode(117,108,97,119,95,51,95,55,56,0),136]]);
          let details7 = 0;
         backgrounda += parseFloat(`${1}`);
         kick4 = new Map([[`${kick4.size}`, kick4.size]]);
         details7 &= 3 - details7;
      for (let a = 0; a < 2; a++) {
         storev = `${2 ^ parseInt(`${firebaseW}`)}`;
      }
       let actionsA = 3.0;
      if (2.43 < (actionsA / (Math.max(5.57, 7)))) {
         storev = `${parseInt(`${encryptorI}`) / 3}`;
      }
      while (3.69 < (5.39 - firebaseW) || (actionsA / (Math.max(9, firebaseW))) < 5.39) {
          let libffmpegkitG = String.fromCharCode(113,95,54,50,95,110,111,109,105,110,97,108,0);
          let typingO = 5.0;
          let videojsb = 1.0;
         firebaseW += parseFloat(`${parseInt(`${videojsb}`)}`);
         libffmpegkitG += `${libffmpegkitG.length << (Math.min(Math.abs(3), 2))}`;
         typingO += parseFloat(`${1 - parseInt(`${typingO}`)}`);
         break;
      }
         storev += `${storev.length >> (Math.min(2, Math.abs(parseInt(`${firebaseW}`))))}`;
         encryptorI *= (parseFloat(`${storev == String.fromCharCode(106,0) ? storev.length : parseInt(`${actionsA}`)}`));
      for (let j = 0; j < 1; j++) {
         storev += `${parseInt(`${backgrounda}`)}`;
      }
         encryptorI /= Math.max(parseFloat(`${parseInt(`${backgrounda}`)}`), 3);
      let libapminsightaR = storev.length >= 7570274;
      do {
          let tempnodatagifs = String.fromCharCode(113,100,101,108,116,97,95,113,95,54,57,0);
         storev = `${tempnodatagifs.length}`;
         if (libapminsightaR) {
            break;
         }
      } while (libapminsightaR && (encryptorI == 3.49));
          let yellowtoredn = 4.0;
          let routern = 1.0;
          let downloadedI: Array<any> = [491, 723, 552];
         storev = `${parseInt(`${backgrounda}`)}`;
         yellowtoredn *= parseInt(`${routern}`);
         routern += parseFloat(`${parseInt(`${yellowtoredn}`)}`);
         downloadedI = [parseInt(`${routern}`)];
      for (let j = 0; j < 2; j++) {
         encryptorI *= parseFloat(`${parseInt(`${firebaseW}`) / (Math.max(5, parseInt(`${encryptorI}`)))}`);
      }
         firebaseW -= parseFloat(`${parseInt(`${firebaseW}`) ^ parseInt(`${encryptorI}`)}`);
      basketballiconh = storev.length <= 23;
      break;
   }
   while (!signinupG.startsWith(`${q_unlock7}`)) {
      q_unlock7 >>= Math.min(5, Math.abs(3));
      break;
   }
      q_unlock7 += crown1.size & statisticsinactivez.length;
      reducerk *= signinupG.length << (Math.min(3, Math.abs(parseInt(`${reducerk}`))));
   if (assistg > thumbnailK.length) {
       let nendM = String.fromCharCode(114,95,56,56,95,99,97,116,97,112,117,108,116,0);
       let combinef = String.fromCharCode(98,95,52,51,95,114,101,112,101,97,116,105,110,103,0);
      if (!combinef.includes(`${nendM.length}`)) {
          let combine_ = 1;
         combinef += `${nendM.length}`;
         combine_ %= Math.max(4, combine_);
      }
      for (let e = 0; e < 2; e++) {
          let launcherW: Map<any, any> = new Map([[String.fromCharCode(107,102,119,114,105,116,101,95,110,95,55,51,0),394], [String.fromCharCode(116,101,109,112,108,97,116,101,100,95,119,95,52,57,0),140]]);
          let gradlewz = 4.0;
          let tooltipsp = String.fromCharCode(98,101,103,97,110,95,52,95,52,53,0);
          let commono = true;
          let analyticsc = 4;
         nendM = `${analyticsc}`;
         launcherW.set(`${commono}`, parseInt(`${gradlewz}`) | 1);
         gradlewz /= Math.max(parseFloat(`${1}`), 5);
         tooltipsp += `${2 << (Math.min(3, tooltipsp.length))}`;
         analyticsc >>= Math.min(2, parseInt(`${Math.abs((parseInt(`${gradlewz}`) << (Math.min(2, Math.abs((commono ? 1 : 5))))))}`));
      }
         nendM += `${nendM.length}`;
         nendM += `${1 ^ combinef.length}`;
      while (nendM != combinef) {
         combinef = `${combinef.length * 1}`;
         break;
      }
         combinef += "3";
      thumbnailK += `${parseInt(`${homeactivem}`)}`;
   }
    setIsRefreshing(false);

   while (1 == (assistg / 5) && 4 == (assistg / 5)) {
      assistg ^= libnmsu.length & phoneR.length;
      break;
   }
      statisticsinactivez.push(2 * q_unlock7);
   if (4.52 < reducerk) {
      libnmsu += `${phoneR.length}`;
   }
       let homeinactivev: Array<any> = [958, 69, 461];
      if (homeinactivev.includes(homeinactivev.length)) {
          let launchD = String.fromCharCode(109,101,103,97,103,114,111,117,112,95,104,95,56,54,0);
         homeinactivev.push(homeinactivev.length & launchD.length);
      }
      for (let k = 0; k < 3; k++) {
          let upgradek = String.fromCharCode(110,95,57,52,95,102,111,114,101,118,101,114,0);
          let clocko = String.fromCharCode(102,95,56,55,95,113,100,114,97,119,0);
         homeinactivev.push((upgradek == String.fromCharCode(50,0) ? clocko.length : upgradek.length));
      }
         homeinactivev.push(2);
      reducerk += foregroundp.size;
   if (4 <= (assistg ^ phoneR.length) || (4 ^ phoneR.length) <= 4) {
      assistg %= Math.max(1, 4);
   }
   if (!basketballiconh) {
       let expand4: Map<any, any> = new Map([[String.fromCharCode(105,100,102,118,95,109,95,51,54,0),String.fromCharCode(110,95,56,49,95,117,110,108,105,110,107,0)], [String.fromCharCode(111,95,56,95,111,97,101,112,0),String.fromCharCode(102,95,55,49,95,111,112,101,110,99,108,0)]]);
       let pluso = 1.0;
         expand4.set(`${pluso}`, expand4.size);
      if (expand4.get(`${pluso}`) == null) {
         expand4.set(`${pluso}`, expand4.size);
      }
      let libreactperfloggerjni_ = 7028979.0 <= pluso;
      do {
         pluso /= Math.max(2, 1);
         if (libreactperfloggerjni_) {
            break;
         }
      } while (libreactperfloggerjni_ && (Array.from(expand4.keys()).includes(`${pluso}`)));
      while ((2.95 + pluso) == 2.33 || (pluso + expand4.size) == 2.95) {
         pluso += expand4.size % (Math.max(7, parseInt(`${pluso}`)));
         break;
      }
         expand4.set(`${pluso}`, parseInt(`${pluso}`));
      if ((pluso + 4.52) == 3.13 || 3 == (expand4.size | 5)) {
         expand4 = new Map([[`${expand4.size}`, 1]]);
      }
      homeactivem *= parseFloat(`${1 % (Math.max(q_unlock7, 3))}`);
   }
       let libbuffers = String.fromCharCode(98,95,55,57,95,97,103,97,105,110,0);
         libbuffers = `${libbuffers.length}`;
         libbuffers += `${libbuffers.length & 1}`;
      if (libbuffers.length >= libbuffers.length) {
          let downloadb = String.fromCharCode(108,95,56,49,95,100,105,115,112,111,115,97,98,108,101,115,0);
          let plashs: Map<any, any> = new Map([[String.fromCharCode(118,95,54,50,95,114,101,107,101,121,0),43], [String.fromCharCode(109,105,110,105,109,105,122,101,100,95,113,95,56,56,0),711], [String.fromCharCode(100,101,118,101,108,111,112,101,114,95,51,95,49,50,0),615]]);
          let stepV: Map<any, any> = new Map([[String.fromCharCode(105,110,102,105,110,105,116,101,95,122,95,55,55,0),199], [String.fromCharCode(101,120,101,99,117,116,101,95,115,95,55,49,0),818], [String.fromCharCode(100,95,57,53,95,102,114,111,110,116,115,105,100,101,0),494]]);
          let iconlogoutf = 5;
         libbuffers = `${iconlogoutf}`;
         downloadb = `${1 ^ stepV.size}`;
         plashs.set(downloadb, downloadb.length << (Math.min(1, Math.abs(stepV.size))));
         iconlogoutf &= (String.fromCharCode(95,0) == downloadb ? downloadb.length : plashs.size);
      }
      homeactivem *= parseFloat(`${3 << (Math.min(4, signinupG.length))}`);
    return;
  }, []);

  return (
    <ScreenContainer containerStyle={{ paddingLeft: 0, paddingRight: 0 }}>
      <BecomeVipOverlay
        setShowBecomeVIPOverlay={setShowBecomeVIPOverlay}
        showBecomeVIPOverlay={showBecomeVIPOverlay}
        selectedTab="libfileHolder"
      />

      <View
        style={{
          backgroundColor: colors.background,
          paddingLeft: spacing.sideOffset,
          
          paddingRight: spacing.sideOffset + 90,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingVertical: 8,
        }}
      >
        <Text
          style={{
            ...textVariants.bigHeader,
            color: colors.text,
            fontSize: 22,
            ...styles.header,
          }}
        >
          体育
        </Text>

        <TouchableOpacity
          activeOpacity={!mayi_Gift.isVip(userState.user)
            ? 0.5
            : 1
          }
          onPress={() => {
            if (!mayi_Gift.isVip(userState.user)) {
              setShowBecomeVIPOverlay(true);
            }
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#222327",
              paddingHorizontal: 10,
              borderRadius: 30,
              paddingVertical: 5,
              position: "relative",
              top: 5,
            }}
          >
            <Image
              style={styles.iconStyle}
              source={require("@static/images/profile/malaysiaInviteLangkey.png")}
            />

            {!mayi_Gift.isVip(userState.user) ? (
              <Text
                style={{
                  color: colors.text,
                  fontSize: 14,
                }}
              >
                成为VIP
              </Text>
            ) : (
              <Text
                style={{
                  color: colors.text,
                  fontSize: 14,
                }}
              >
                VIP {vipRemainingDay}天
              </Text>
            )}
          </View>
        </TouchableOpacity>
      </View>

      {matchTabs && matchTabs.length > 0 && !isOffline && (
        <MatchScheduleNav
          setShowBecomeVIPOverlay={setShowBecomeVIPOverlay}
          tabList={matchTabs}
        />
      )}

      {isOffline && <NoConnection onClickRetry={checkConnection} />}
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
  },
  loading: {
    flexDirection: "row",
    justifyContent: "center",
    flex: 1,
  },
  nav: {
    flexGrow: 1,
    justifyContent: "center",
    marginBottom: 10,
  },
  iconStyle: {
    height: 18,
    width: 18,
    marginRight: 5,
  },
});
