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
import ScreenContainer from "../../../components/container/yys_executor_expand";
import MainHeader from "../../../components/header/yys_classes_count_header";
import { useFocusEffect, useTheme } from "@react-navigation/native";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import {
  yys_BrightnessCopy,
} from "@type/yys_libzeus";
import VodPlaylist from "../../../components/playlist/yys_reminder_gift";
import {
  BottomTabScreenProps,
  useBottomTabBarHeight,
} from "@react-navigation/bottom-tabs";
import { API_DOMAIN, MATCH_API_DOMAIN } from "@utility/yys_ajax_switch";
import Animated from "react-native-reanimated";
import FastImage from "react-native-fast-image";
import yys_Matches from "../../middleware/yys_libjsi";
import { Url } from "../../middleware/yys_desc_resend";
import { formatMatchDate } from "../../utility/utils";
import { yys_List } from "../../types/yys_league_mounting";
import MatchSchedule from "../../components/matchSchedule/yys_text";
import MatchScheduleNav from "../../components/matchSchedule/yys_notification_view";
import NoConnection from "./../../../components/common/yys_armva_classes";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";

import { useAppSelector, useSelector } from "@hooks/yys_frame";
import { yys_MintegralLibavdevice } from "@redux/yys_sport_shrink";
import { useDispatch } from "react-redux";
import BecomeVipOverlay from "../../../components/modal/yys_next_drag";
import { yys_Videocommon } from "@redux/reducers/yys_libavdevice";
import yys_event_common from "../../../../Umeng/yys_event_common";
import { yys_HejiCricket } from "@redux/reducers/yys_privacy_round";
import { yys_RelatedTooltips } from "@models/yys_project_pagination";

interface yys_ControlsVolume {
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
  const userState = useSelector<yys_HejiCricket>('userReducer');
  const settingsReducer: yys_Videocommon = useAppSelector(
    ({ settingsReducer }: yys_MintegralLibavdevice) => settingsReducer
  );

  
  useFocusEffect(useCallback(() => {
    yys_event_common.sportViewsAnalytics();
  }, []));
  

  const { data: navOptions, refetch } = useQuery({
    queryKey: ["matchesNavOptions"],
    queryFn: () =>
      yys_Matches.call(Url.sportTypes, {}, "GET").then((res): yys_ControlsVolume[] => {
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
       let binddatasX = 2;
    let placeholderm: Map<any, any> = new Map([[String.fromCharCode(104,115,99,97,108,101,95,52,95,52,52,0),true ], [String.fromCharCode(98,105,116,118,101,99,116,111,114,95,117,95,50,57,0),true ]]);
    let scheduleQ: Map<any, any> = new Map([[String.fromCharCode(98,110,98,105,110,95,52,95,52,57,0),String.fromCharCode(109,97,105,110,110,101,116,115,95,116,95,55,55,0)], [String.fromCharCode(115,95,55,56,95,101,108,101,109,0),String.fromCharCode(110,95,49,48,0)], [String.fromCharCode(122,95,56,55,95,102,111,114,109,97,116,116,101,114,0),String.fromCharCode(100,101,108,111,103,111,95,106,95,49,56,0)]]);
    let relatedh = 2.0;
    let catagoryL = 0.0;
    let leakcheckeri = String.fromCharCode(99,95,54,48,95,97,114,116,105,115,116,0);
    let searchbart = String.fromCharCode(108,97,115,116,109,98,117,102,95,103,95,51,56,0);
    let libsgcorec: Array<any> = [157, 375];
    let favoritel = 0;
    let windZ = 0.0;
   while (!searchbart.endsWith(`${scheduleQ.size}`)) {
      searchbart += `${binddatasX}`;
      break;
   }
      placeholderm.set(`${relatedh}`, placeholderm.size);
   for (let x = 0; x < 2; x++) {
      leakcheckeri = `${(String.fromCharCode(101,0) == leakcheckeri ? parseInt(`${relatedh}`) : leakcheckeri.length)}`;
   }
       let rncoreJ = 2;
       let foregroundG: Map<any, any> = new Map([[String.fromCharCode(117,95,51,54,95,107,101,121,115,101,116,117,112,0),401], [String.fromCharCode(112,114,101,118,105,101,119,95,100,95,56,0),911], [String.fromCharCode(99,111,110,116,97,105,110,101,114,95,56,95,55,56,0),852]]);
       let sportsN = 0.0;
      while ((1.79 * sportsN) <= 4.11) {
         sportsN *= 1 >> (Math.min(2, Math.abs(parseInt(`${sportsN}`))));
         break;
      }
      let mail1 = 9468930 >= foregroundG.size;
      do {
          let borderlessp = String.fromCharCode(101,95,50,53,95,99,104,111,111,115,105,110,103,0);
         foregroundG = new Map([[`${sportsN}`, (String.fromCharCode(113,0) == borderlessp ? borderlessp.length : parseInt(`${sportsN}`))]]);
         if (mail1) {
            break;
         }
      } while (mail1 && (foregroundG.size <= 1));
         foregroundG.set(`${sportsN}`, foregroundG.size << (Math.min(Math.abs(1), 3)));
       let smallj: Map<any, any> = new Map([[String.fromCharCode(109,97,115,116,101,114,95,117,95,54,52,0),481], [String.fromCharCode(122,95,53,57,95,112,97,114,107,0),662], [String.fromCharCode(115,116,121,108,101,115,95,122,95,50,55,0),426]]);
          let awaym = String.fromCharCode(104,95,49,51,95,100,101,97,108,108,111,99,0);
          let mintegralp = String.fromCharCode(105,110,115,116,97,108,108,95,102,95,52,48,0);
          let leagueU: Array<any> = [958, 912];
         rncoreJ %= Math.max(2, awaym.length | 2);
         awaym += `${mintegralp.length}`;
         mintegralp += `${mintegralp.length ^ leagueU.length}`;
         leagueU.push(leagueU.length);
          let floateru = true;
          let graphL = 0;
         rncoreJ -= 1;
         floateru = !floateru && graphL == 13;
         graphL ^= 3;
      for (let r = 0; r < 2; r++) {
          let indicatorZ = 1.0;
          let androidy = 3.0;
          let final_zA = String.fromCharCode(104,95,52,50,95,103,97,116,105,110,103,0);
          let whatsapp4 = String.fromCharCode(103,95,56,48,95,105,115,110,101,103,97,116,105,118,101,0);
          let gradlei: Array<any> = [String.fromCharCode(108,105,98,115,119,115,99,97,108,101,95,50,95,50,0), String.fromCharCode(101,120,116,114,97,99,102,103,95,53,95,50,52,0), String.fromCharCode(99,95,52,51,0)];
         sportsN *= 1;
         indicatorZ /= Math.max(final_zA.length - 1, 3);
         androidy -= whatsapp4.length;
         final_zA += `${parseInt(`${indicatorZ}`)}`;
         whatsapp4 = `${parseInt(`${indicatorZ}`) - gradlei.length}`;
         gradlei.push(gradlei.length);
      }
      for (let n = 0; n < 3; n++) {
          let zoomH: Array<any> = [418, 892];
          let halfk = String.fromCharCode(110,115,112,97,99,101,115,95,97,95,54,54,0);
          let signinupt = true;
         sportsN += rncoreJ << (Math.min(Math.abs(foregroundG.size), 1));
         zoomH.push(halfk.length >> (Math.min(Math.abs(3), 3)));
         halfk = `${zoomH.length & halfk.length}`;
         signinupt = String.fromCharCode(87,0) == halfk;
      }
      for (let t = 0; t < 1; t++) {
         sportsN *= 2;
      }
      searchbart += `${parseInt(`${catagoryL}`) - leakcheckeri.length}`;
   for (let q = 0; q < 2; q++) {
      leakcheckeri += `${scheduleQ.size}`;
   }

    const state = await NetInfo.fetch();

       let package_9i9 = String.fromCharCode(105,114,99,97,109,95,99,95,56,54,0);
         package_9i9 = `${(package_9i9 == String.fromCharCode(48,0) ? package_9i9.length : package_9i9.length)}`;
          let downloaderx: Map<any, any> = new Map([[String.fromCharCode(103,95,54,57,95,118,109,97,102,109,111,116,105,111,110,0),String.fromCharCode(104,95,56,49,95,105,103,110,111,114,101,100,0)], [String.fromCharCode(115,116,97,99,107,118,105,101,119,95,109,95,53,48,0),String.fromCharCode(112,95,54,56,95,119,97,107,101,117,112,0)]]);
          let tempN = 4;
         package_9i9 = "2";
         downloaderx = new Map([[`${downloaderx.size}`, tempN / 1]]);
         tempN += downloaderx.size << (Math.min(Math.abs(2), 4));
          let kuaishouQ = 2;
         package_9i9 += `${kuaishouQ >> (Math.min(package_9i9.length, 5))}`;
      placeholderm.set(`${binddatasX}`, scheduleQ.size);
   let thumbnailB = String.fromCharCode(97,107,103,108,50,0) == searchbart;
   do {
      searchbart = `${parseInt(`${catagoryL}`)}`;
      if (thumbnailB) {
         break;
      }
   } while (((searchbart.length * 1) >= 2 || (searchbart.length * scheduleQ.size) >= 1) && thumbnailB);
   while (5 < (binddatasX >> (Math.min(Math.abs(4), 2)))) {
       let qaagF = String.fromCharCode(115,116,105,99,107,101,114,115,101,116,95,51,95,54,51,0);
       let championi = 0.0;
         qaagF += `${2 ^ parseInt(`${championi}`)}`;
          let streaming7 = 2.0;
          let cores = 1.0;
          let manifestL: Array<any> = [536, 661];
         qaagF += `${parseInt(`${streaming7}`)}`;
         cores *= manifestL.length;
         manifestL.push(manifestL.length);
      if (qaagF.length == championi) {
         championi *= 2 + parseInt(`${championi}`);
      }
          let umengK = 4.0;
         championi += parseInt(`${umengK}`);
      while (championi > 1.70) {
          let libswresamplez: Array<any> = [165, 694, 383];
          let championR: Array<any> = [940, 962];
          let nativem = String.fromCharCode(111,95,49,55,95,100,97,116,97,115,0);
         qaagF = "1";
         libswresamplez.push(2 & libswresamplez.length);
         championR.push(3 >> (Math.min(4, championR.length)));
         nativem = "1";
         break;
      }
         championi /= Math.max(2, parseInt(`${championi}`) % (Math.max(qaagF.length, 1)));
      binddatasX *= placeholderm.size;
      break;
   }
      binddatasX %= Math.max(4, placeholderm.size);
   while (4 == (scheduleQ.size - parseInt(`${relatedh}`))) {
      scheduleQ.set(leakcheckeri, searchbart.length);
      break;
   }
    const offline = !(state.isConnected && state.isInternetReachable);

      placeholderm = new Map([[searchbart, 3 << (Math.min(2, searchbart.length))]]);
      placeholderm = new Map([[searchbart, searchbart.length << (Math.min(Math.abs(1), 1))]]);
   while (!searchbart.endsWith(`${placeholderm.size}`)) {
      placeholderm.set(leakcheckeri, leakcheckeri.length ^ 1);
      break;
   }
      catagoryL *= searchbart.length - 2;
      placeholderm.set(`${binddatasX}`, placeholderm.size);
    setIsOffline(offline);

   while (leakcheckeri == String.fromCharCode(106,0) && searchbart.length >= 5) {
      leakcheckeri = `${binddatasX + placeholderm.size}`;
      break;
   }
   while (leakcheckeri.length <= catagoryL) {
      catagoryL /= Math.max(3, parseInt(`${catagoryL}`) / 1);
      break;
   }
       let lightW = String.fromCharCode(115,119,105,116,99,104,105,110,103,95,98,95,56,57,0);
       let logout4 = 3;
          let scheduler3: Map<any, any> = new Map([[String.fromCharCode(116,105,116,108,101,115,95,116,95,56,54,0),64], [String.fromCharCode(99,111,108,108,105,100,101,114,95,117,95,55,51,0),729]]);
          let componentregistryP: Array<any> = [503, 883];
         lightW = `${scheduler3.size}`;
         scheduler3 = new Map([[`${componentregistryP.length}`, componentregistryP.length % 1]]);
         logout4 <<= Math.min(2, Math.abs((lightW == String.fromCharCode(70,0) ? lightW.length : logout4)));
       let predictionb = 0.0;
       let cinit_gsh = 1.0;
      while ((lightW.length << (Math.min(5, Math.abs(logout4)))) < 3) {
          let moreN: Array<any> = [791, 559, 98];
          let taiwan8: Map<any, any> = new Map([[String.fromCharCode(111,110,116,101,120,116,95,114,95,49,49,0),String.fromCharCode(108,105,102,116,95,98,95,50,55,0)], [String.fromCharCode(114,95,49,57,95,115,112,105,108,108,115,105,122,101,0),String.fromCharCode(117,110,112,105,110,110,101,100,95,106,95,49,57,0)]]);
          let scrollviewt = String.fromCharCode(105,100,101,110,116,105,116,121,95,53,95,52,57,0);
         logout4 |= 1 >> (Math.min(3, Math.abs(parseInt(`${predictionb}`))));
         moreN.push(moreN.length);
         taiwan8 = new Map([[`${moreN.length}`, moreN.length]]);
         scrollviewt += `${(String.fromCharCode(71,0) == scrollviewt ? taiwan8.size : scrollviewt.length)}`;
         break;
      }
      let teamh = logout4 <= 8144830;
      do {
          let a_playerM = 1.0;
          let actionsI = String.fromCharCode(115,95,55,55,95,112,114,111,112,115,0);
          let dropdownA = 5.0;
         logout4 *= parseInt(`${dropdownA}`) ^ 2;
         a_playerM *= 2 + parseInt(`${a_playerM}`);
         actionsI = "3";
         dropdownA -= parseFloat(`${2 - parseInt(`${a_playerM}`)}`);
         if (teamh) {
            break;
         }
      } while (teamh && ((cinit_gsh - logout4) >= 1.69));
       let feedbackQ: Map<any, any> = new Map([[String.fromCharCode(111,95,57,53,95,98,105,116,112,108,97,110,101,0),458], [String.fromCharCode(109,97,116,101,114,105,97,108,95,110,95,52,53,0),272], [String.fromCharCode(99,97,112,105,116,97,108,115,95,55,95,51,50,0),458]]);
      libsgcorec.push(binddatasX);
   if (1 > (4 % (Math.max(4, scheduleQ.size))) && (searchbart.length % (Math.max(2, scheduleQ.size))) > 4) {
       let gradler = false;
       let umeng9 = 4.0;
       let viewerW = 4.0;
       let datay = String.fromCharCode(109,95,54,50,95,113,117,111,116,101,115,0);
       let nterstitialG = String.fromCharCode(102,97,99,105,108,105,116,97,116,101,95,122,95,49,50,0);
      let expandp = gradler ? !gradler : gradler;
      do {
         gradler = umeng9 > 100.86;
         if (expandp) {
            break;
         }
      } while (expandp && (nterstitialG.length <= 5 && !gradler));
      while (!gradler) {
         umeng9 *= parseFloat(`${nterstitialG.length & 1}`);
         break;
      }
       let hookA = 2;
       let internets = 4;
      if ((3 / (Math.max(6, hookA))) <= 1) {
         hookA /= Math.max(parseInt(`${umeng9}`) % 3, 4);
      }
         nterstitialG += `${nterstitialG.length - 1}`;
      for (let u = 0; u < 3; u++) {
         gradler = nterstitialG.startsWith(`${hookA}`);
      }
       let lighta = String.fromCharCode(105,95,54,50,95,116,121,112,101,100,0);
       let applicationw = String.fromCharCode(97,95,56,54,95,115,104,111,114,116,101,114,0);
       let const_ta: Map<any, any> = new Map([[String.fromCharCode(112,114,101,109,105,117,109,95,116,95,49,57,0),2], [String.fromCharCode(99,97,110,99,101,108,95,108,95,54,50,0),956], [String.fromCharCode(105,100,101,97,108,95,57,95,55,57,0),701]]);
      if (datay == lighta) {
         lighta = `${((gradler ? 4 : 4) & 2)}`;
      }
      if ((parseFloat(`${applicationw.length}`) + umeng9) > 1.54 || 1.54 > (parseFloat(`${applicationw.length}`) + umeng9)) {
         umeng9 += parseFloat(`${hookA ^ datay.length}`);
      }
         umeng9 *= parseFloat(`${2 << (Math.min(1, Math.abs(internets)))}`);
          let zhengpianI = 1.0;
          let taiwan5: Map<any, any> = new Map([[String.fromCharCode(99,101,110,116,101,114,101,100,95,103,95,50,53,0),219], [String.fromCharCode(103,95,51,95,99,116,105,118,105,116,121,0),159]]);
         applicationw = `${const_ta.size}`;
         zhengpianI *= taiwan5.size;
         taiwan5 = new Map([[`${taiwan5.size}`, parseInt(`${zhengpianI}`) << (Math.min(Math.abs(2), 1))]]);
      let analyticsi = 9089200.0 <= viewerW;
      do {
          let buildH = String.fromCharCode(115,118,97,103,95,97,95,57,57,0);
          let collectionv = String.fromCharCode(118,95,51,53,95,99,112,117,117,115,101,100,0);
          let playlistV = String.fromCharCode(105,95,50,51,95,114,101,109,101,109,98,101,114,101,100,0);
         viewerW += lighta.length;
         buildH += `${buildH.length + collectionv.length}`;
         collectionv += `${collectionv.length}`;
         playlistV = `${collectionv.length / 1}`;
         if (analyticsi) {
            break;
         }
      } while (analyticsi && ((viewerW * umeng9) <= 3.96));
      while (!applicationw.includes(`${gradler}`)) {
         applicationw += `${parseInt(`${viewerW}`) + 1}`;
         break;
      }
          let executor7 = String.fromCharCode(99,109,97,112,95,53,95,52,52,0);
          let pageF = 5.0;
         internets >>= Math.min(applicationw.length, 5);
         executor7 += `${(executor7 == String.fromCharCode(102,0) ? parseInt(`${pageF}`) : executor7.length)}`;
         pageF -= parseFloat(`${executor7.length}`);
      searchbart += `${parseInt(`${relatedh}`) * 1}`;
   }
   while (libsgcorec.length == leakcheckeri.length) {
      leakcheckeri = `${(leakcheckeri == String.fromCharCode(49,0) ? leakcheckeri.length : parseInt(`${catagoryL}`))}`;
      break;
   }
    if (!offline) {

   let zhengpian5 = 6289179 >= binddatasX;
   do {
      binddatasX += parseInt(`${catagoryL}`) | libsgcorec.length;
      if (zhengpian5) {
         break;
      }
   } while (((scheduleQ.size << (Math.min(Math.abs(1), 4))) <= 5 && 5 <= (1 << (Math.min(3, Math.abs(scheduleQ.size))))) && zhengpian5);
       let libreactperfloggerjniE = String.fromCharCode(102,95,54,54,95,112,97,115,119,111,114,100,0);
      while (libreactperfloggerjniE.length <= 2) {
         libreactperfloggerjniE += `${libreactperfloggerjniE.length | 3}`;
         break;
      }
      let country9 = 5527532 <= libreactperfloggerjniE.length;
      do {
         libreactperfloggerjniE += `${3 & libreactperfloggerjniE.length}`;
         if (country9) {
            break;
         }
      } while (country9 && (libreactperfloggerjniE != String.fromCharCode(67,0)));
       let playV = String.fromCharCode(121,95,56,95,112,114,111,103,114,97,109,0);
      binddatasX >>= Math.min(1, Math.abs(1 + parseInt(`${relatedh}`)));
   if (scheduleQ.size >= placeholderm.size) {
      scheduleQ = new Map([[`${placeholderm.size}`, libsgcorec.length]]);
   }
      relatedh += parseFloat(`${scheduleQ.size}`);
      leakcheckeri += `${libsgcorec.length}`;
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
       let regengu: Map<any, any> = new Map([[String.fromCharCode(115,95,54,53,95,112,97,105,114,119,105,115,101,0),true ], [String.fromCharCode(100,101,97,99,116,105,118,97,116,101,95,50,95,55,50,0),false ], [String.fromCharCode(104,95,52,95,111,112,101,110,115,115,108,99,111,110,102,0),true ]]);
    let grayA = String.fromCharCode(99,111,110,118,101,110,105,101,110,99,101,95,101,95,53,54,0);
    let mini2 = 4;
    let vignettej = 1;
    let infob = String.fromCharCode(105,95,56,51,95,102,108,111,119,0);
    let moduleC = 1.0;
    let transferm = true;
    let reminderA = String.fromCharCode(100,101,112,114,101,99,97,116,101,100,95,105,95,53,50,0);
    let changer = 0;
    let privacym: Map<any, any> = new Map([[String.fromCharCode(103,112,116,111,112,116,115,95,115,95,52,55,0),642], [String.fromCharCode(104,95,54,49,95,115,101,115,115,105,111,110,115,0),712]]);
       let dataA: Array<any> = [494, 217, 469];
         dataA.push(dataA.length | dataA.length);
      for (let h = 0; h < 3; h++) {
         dataA = [dataA.length];
      }
      for (let i = 0; i < 1; i++) {
         dataA = [dataA.length >> (Math.min(Math.abs(3), 5))];
      }
      vignettej |= regengu.size;
      grayA = `${parseInt(`${moduleC}`)}`;
   let usernameB = 8586242 <= changer;
   do {
       let sentryL: Array<any> = [756, 112, 745];
       let const_faa = String.fromCharCode(112,114,101,109,117,108,116,105,112,108,121,95,50,95,50,56,0);
      let anythinkx = sentryL.length <= 9589802;
      do {
         sentryL.push(sentryL.length % 2);
         if (anythinkx) {
            break;
         }
      } while ((const_faa.endsWith(`${sentryL.length}`)) && anythinkx);
      let xvodQ = 7237287 >= const_faa.length;
      do {
         const_faa = "1";
         if (xvodQ) {
            break;
         }
      } while (xvodQ && (sentryL.length < 4));
         const_faa += "1";
      for (let k = 0; k < 2; k++) {
         const_faa = `${sentryL.length}`;
      }
          let filedM = String.fromCharCode(103,97,109,117,116,95,117,95,49,51,0);
          let liveQ = 4;
         sentryL = [const_faa.length - 3];
         filedM += `${liveQ}`;
         liveQ *= 1;
       let screenM = String.fromCharCode(108,111,115,115,121,95,108,95,56,55,0);
       let signinupV = String.fromCharCode(105,113,109,112,95,102,95,57,50,0);
      changer <<= Math.min(Math.abs(3), 4);
      if (usernameB) {
         break;
      }
   } while (usernameB && (3 == (3 >> (Math.min(4, Math.abs(changer))))));
   if (reminderA == String.fromCharCode(71,0) || grayA.length <= 2) {
      grayA += `${parseInt(`${moduleC}`) * 1}`;
   }
       let libswresampleZ = 3.0;
      while ((libswresampleZ - 1.29) == 3.78 && (libswresampleZ - 1.29) == 5.72) {
          let configure2: Array<any> = [978, 698];
          let recommendationy = 0;
          let usernameN: Array<any> = [String.fromCharCode(103,95,49,54,95,105,110,115,116,114,117,99,116,105,111,110,115,0), String.fromCharCode(105,110,118,97,114,105,97,110,116,115,95,120,95,51,53,0)];
         libswresampleZ += parseFloat(`${configure2.length >> (Math.min(1, Math.abs(recommendationy)))}`);
         configure2.push(usernameN.length & usernameN.length);
         recommendationy *= 2 & usernameN.length;
         break;
      }
         libswresampleZ += parseFloat(`${parseInt(`${libswresampleZ}`) * 3}`);
          let langkeyf = String.fromCharCode(109,95,50,51,95,109,97,110,121,0);
          let zoomI = 5.0;
          let disconnectedP = true;
         libswresampleZ += parseFloat(`${parseInt(`${zoomI}`) ^ 3}`);
         langkeyf += `${(langkeyf == String.fromCharCode(117,0) ? (disconnectedP ? 1 : 3) : langkeyf.length)}`;
         zoomI += (parseFloat(`${langkeyf == String.fromCharCode(82,0) ? (disconnectedP ? 3 : 4) : langkeyf.length}`));
      reminderA += `${2 - reminderA.length}`;
   if (reminderA.length < 1 || infob != String.fromCharCode(115,0)) {
       let search5 = String.fromCharCode(112,97,115,119,111,114,100,95,53,95,50,56,0);
       let leagueZ = 2.0;
       let philippinesT = 2;
       let lang7 = false;
         leagueZ /= Math.max(parseInt(`${leagueZ}`) * search5.length, 2);
       let libjsinspectorU = true;
       let videoT = false;
          let calendarA = String.fromCharCode(108,95,49,50,95,112,104,111,110,101,98,111,111,107,0);
         philippinesT >>= Math.min(Math.abs(philippinesT), 5);
         calendarA = `${calendarA.length >> (Math.min(Math.abs(2), 4))}`;
      let z_lockW = lang7 ? !lang7 : lang7;
      do {
         lang7 = !lang7 || search5.length >= 11;
         if (z_lockW) {
            break;
         }
      } while ((4 >= philippinesT) && z_lockW);
      let cricketK = philippinesT >= 7833586;
      do {
          let memberj = 5.0;
         philippinesT <<= Math.min(2, Math.abs(parseInt(`${memberj}`) - philippinesT));
         if (cricketK) {
            break;
         }
      } while ((5.20 <= leagueZ) && cricketK);
          let switch_4Z = 4.0;
          let leftl = String.fromCharCode(114,95,50,51,95,112,111,108,108,115,0);
         videoT = philippinesT < 9;
         switch_4Z /= Math.max(4, parseFloat(`${3 << (Math.min(4, Math.abs(parseInt(`${switch_4Z}`))))}`));
         leftl += `${parseInt(`${switch_4Z}`)}`;
         videoT = philippinesT > 33 && 29.36 > leagueZ;
          let crown9 = String.fromCharCode(99,95,52,56,95,114,97,100,105,117,115,0);
          let smallB: Map<any, any> = new Map([[String.fromCharCode(105,95,56,50,95,115,116,101,112,0),367], [String.fromCharCode(112,95,53,51,95,100,101,112,116,104,0),104], [String.fromCharCode(117,112,115,104,105,102,116,95,112,95,50,51,0),837]]);
          let bannerd: Map<any, any> = new Map([[String.fromCharCode(99,95,54,51,95,98,97,99,107,105,110,103,0),56], [String.fromCharCode(113,95,53,50,95,117,108,108,115,99,114,101,101,110,0),978]]);
         videoT = 7 > philippinesT || crown9.length > 7;
         crown9 += `${3 ^ bannerd.size}`;
         smallB = new Map([[`${bannerd.size}`, bannerd.size]]);
          let anewsq: Array<any> = [904, 893, 423];
          let libswscalep = String.fromCharCode(112,114,111,116,101,99,116,101,100,95,111,95,56,49,0);
         philippinesT |= (String.fromCharCode(111,0) == libswscalep ? parseInt(`${leagueZ}`) : libswscalep.length);
         anewsq.push(anewsq.length);
          let statso = 4;
          let readE = String.fromCharCode(112,114,101,115,115,117,114,101,95,52,95,53,0);
          let pressurev = 2.0;
         philippinesT %= Math.max((readE.length | (lang7 ? 2 : 2)), 1);
         statso >>= Math.min(Math.abs(3 >> (Math.min(Math.abs(statso), 3))), 1);
         readE += `${parseInt(`${pressurev}`) + statso}`;
         pressurev /= Math.max(1, parseInt(`${pressurev}`) << (Math.min(2, Math.abs(1))));
         philippinesT &= parseInt(`${leagueZ}`) - philippinesT;
      if (4 > search5.length || !libjsinspectorU) {
         search5 += `${1 << (Math.min(Math.abs(parseInt(`${leagueZ}`)), 1))}`;
      }
      reminderA = `${parseInt(`${moduleC}`) >> (Math.min(Math.abs(1), 5))}`;
   }
       let feedbacke = false;
       let trashW = String.fromCharCode(102,105,116,95,97,95,50,52,0);
      for (let e = 0; e < 2; e++) {
          let textlayoutmanagerw: Map<any, any> = new Map([[String.fromCharCode(118,111,99,97,98,95,115,95,53,50,0),false ], [String.fromCharCode(104,95,55,95,97,101,97,100,0),false ]]);
          let spinnerg = 2;
          let baiduW = 1;
          let guideH = String.fromCharCode(112,117,115,104,101,100,95,48,95,53,0);
          let product5: Map<any, any> = new Map([[String.fromCharCode(115,95,56,51,95,100,114,97,119,117,116,105,108,115,0),String.fromCharCode(122,95,56,49,95,101,118,101,110,0)], [String.fromCharCode(118,101,108,111,99,105,116,121,95,103,95,52,48,0),String.fromCharCode(115,116,114,101,97,109,95,107,95,50,48,0)]]);
         trashW += `${(trashW.length << (Math.min(5, Math.abs((feedbacke ? 2 : 4)))))}`;
         textlayoutmanagerw.set(`${spinnerg}`, spinnerg);
         baiduW -= 1 >> (Math.min(5, Math.abs(textlayoutmanagerw.size)));
         guideH += `${baiduW << (Math.min(Math.abs(3), 1))}`;
         product5 = new Map([[`${textlayoutmanagerw.size}`, 2]]);
      }
      if (!trashW.startsWith(`${feedbacke}`)) {
         trashW = `${((feedbacke ? 1 : 2) | trashW.length)}`;
      }
         trashW = `${trashW.length}`;
      while (trashW.length == 1) {
          let crownW = String.fromCharCode(98,101,104,97,118,105,111,114,95,111,95,55,55,0);
         trashW += `${trashW.length}`;
         crownW += `${crownW.length}`;
         break;
      }
      let nterstitialq = feedbacke ? !feedbacke : feedbacke;
      do {
         feedbacke = !feedbacke;
         if (nterstitialq) {
            break;
         }
      } while (nterstitialq && (trashW.length == 5));
         trashW = "3";
      reminderA += `${vignettej}`;

    setIsRefreshing(true);

      grayA += "2";
   while (4 > (regengu.size << (Math.min(reminderA.length, 2)))) {
       let encrypt5 = false;
       let weibo9 = String.fromCharCode(115,104,105,102,116,105,110,103,115,95,121,95,56,48,0);
       let applef = String.fromCharCode(110,95,55,53,95,99,107,112,116,0);
      if (encrypt5) {
          let eventm: Array<any> = [727, 860];
         encrypt5 = applef.length <= weibo9.length;
         eventm.push(eventm.length & 1);
      }
      while (3 < applef.length && !encrypt5) {
          let condensedS = 4.0;
          let refreshn = 2;
          let libglogy = 4.0;
          let libavcodecx = 2.0;
         encrypt5 = !applef.includes(`${condensedS}`);
         condensedS -= parseInt(`${libglogy}`);
         refreshn |= refreshn >> (Math.min(4, Math.abs(3)));
         libavcodecx /= Math.max(parseFloat(`${refreshn}`), 2);
         break;
      }
      reminderA += `${((encrypt5 ? 4 : 4) % (Math.max(2, mini2)))}`;
      break;
   }
      transferm = (reminderA.length >> (Math.min(1, Math.abs(regengu.size)))) > 18;
   let combinedv = 5810143 <= infob.length;
   do {
      infob += `${parseInt(`${moduleC}`) - reminderA.length}`;
      if (combinedv) {
         break;
      }
   } while (combinedv && ((infob.length / 2) < 1 && 3 < (2 / (Math.max(8, infob.length)))));
      regengu.set(`${moduleC}`, parseInt(`${moduleC}`) << (Math.min(3, Math.abs(1))));
      regengu.set(`${transferm}`, 1);
      infob = `${changer}`;
    

      moduleC *= (String.fromCharCode(120,0) == infob ? infob.length : parseInt(`${moduleC}`));
   if (reminderA.length >= changer) {
       let tooltipsm = String.fromCharCode(120,95,55,57,95,99,111,100,101,98,108,111,99,107,115,0);
       let chinasamev = 5.0;
       let reactC = 1;
       let codegenr: Array<any> = [692, 35, 706];
         tooltipsm = `${reactC}`;
         chinasamev *= parseFloat(`${3 | codegenr.length}`);
      for (let i = 0; i < 2; i++) {
          let libswscaleQ = String.fromCharCode(99,95,56,55,95,115,97,108,116,108,101,110,0);
          let placeholderq = String.fromCharCode(117,110,98,105,110,100,95,49,95,57,50,0);
          let sport2 = true;
          let wind5: Map<any, any> = new Map([[String.fromCharCode(100,101,99,111,109,112,97,110,100,95,98,95,53,57,0),true ], [String.fromCharCode(115,119,97,112,112,97,98,108,101,95,54,95,49,0),true ], [String.fromCharCode(108,95,51,54,95,99,111,108,108,97,112,115,101,0),false ]]);
          let expandx = false;
         codegenr = [3 * reactC];
         libswscaleQ += `${((expandx ? 2 : 2))}`;
         placeholderq += `${placeholderq.length}`;
         sport2 = wind5.size == 49;
         wind5.set(placeholderq, (placeholderq.length & (expandx ? 4 : 2)));
      }
          let topon5 = 3.0;
          let sheeth = String.fromCharCode(105,95,57,55,95,97,98,108,0);
          let arrowF = String.fromCharCode(116,97,107,101,110,95,122,95,52,49,0);
         tooltipsm = `${3 ^ reactC}`;
         topon5 *= parseFloat(`${sheeth.length + 2}`);
         sheeth = `${arrowF.length}`;
         arrowF += `${(String.fromCharCode(73,0) == sheeth ? sheeth.length : parseInt(`${topon5}`))}`;
      if ((chinasamev - 5.76) < 4.33 || 1 < (tooltipsm.length - parseInt(`${chinasamev}`))) {
          let navigation2 = String.fromCharCode(105,95,53,56,95,115,105,110,107,0);
          let fastforward7: Array<any> = [658, 935];
          let benefitC: Map<any, any> = new Map([[String.fromCharCode(115,111,99,107,101,116,118,97,114,95,97,95,57,48,0),String.fromCharCode(108,95,52,51,95,102,117,108,108,98,97,110,100,0)], [String.fromCharCode(97,99,116,111,114,115,95,121,95,49,48,48,0),String.fromCharCode(97,110,100,95,119,95,51,55,0)], [String.fromCharCode(97,100,111,112,116,101,100,95,120,95,50,55,0),String.fromCharCode(112,114,101,115,115,101,115,95,107,95,50,50,0)]]);
          let buttonW = String.fromCharCode(98,111,117,110,99,101,95,116,95,57,54,0);
         chinasamev += parseFloat(`${navigation2.length + benefitC.size}`);
         navigation2 = `${fastforward7.length + buttonW.length}`;
         fastforward7 = [buttonW.length];
         benefitC = new Map([[`${fastforward7.length}`, buttonW.length | 1]]);
      }
       let chinac = true;
         chinasamev /= Math.max(parseFloat(`${reactC}`), 5);
         chinac = codegenr.includes(chinac);
      reminderA = `${tooltipsm.length}`;
   }
      vignettej &= parseInt(`${moduleC}`) % (Math.max(10, mini2));
      infob = "1";
   for (let y = 0; y < 3; y++) {
      changer >>= Math.min(Math.abs(reminderA.length | grayA.length), 4);
   }
       let configureR = String.fromCharCode(101,95,49,57,95,97,120,112,0);
       let fadfdeebbbfdabbbabdadfaaddaaP = String.fromCharCode(98,101,114,114,105,101,115,95,118,95,51,54,0);
         fadfdeebbbfdabbbabdadfaaddaaP = `${(fadfdeebbbfdabbbabdadfaaddaaP == String.fromCharCode(107,0) ? fadfdeebbbfdabbbabdadfaaddaaP.length : configureR.length)}`;
          let viewerD = 0.0;
         configureR = "3";
         viewerD -= parseFloat(`${parseInt(`${viewerD}`) / 2}`);
         configureR += `${fadfdeebbbfdabbbabdadfaaddaaP.length * 2}`;
      let bufferm = configureR.length <= 9470080;
      do {
         configureR += `${2 << (Math.min(4, fadfdeebbbfdabbbabdadfaaddaaP.length))}`;
         if (bufferm) {
            break;
         }
      } while (bufferm && (configureR.includes(fadfdeebbbfdabbbabdadfaaddaaP)));
      if (fadfdeebbbfdabbbabdadfaaddaaP.length <= 2 && configureR == String.fromCharCode(85,0)) {
         fadfdeebbbfdabbbabdadfaaddaaP = `${configureR.length}`;
      }
      while (!configureR.endsWith(`${fadfdeebbbfdabbbabdadfaaddaaP.length}`)) {
          let blackz = String.fromCharCode(119,95,53,48,95,112,111,115,116,99,111,100,101,0);
          let rewind5 = String.fromCharCode(107,95,53,57,95,97,116,111,110,0);
          let guideT: Map<any, any> = new Map([[String.fromCharCode(98,95,56,55,95,108,105,115,116,0),727], [String.fromCharCode(106,95,49,51,95,101,113,117,105,118,97,108,101,110,116,0),838]]);
         fadfdeebbbfdabbbabdadfaaddaaP = `${fadfdeebbbfdabbbabdadfaaddaaP.length << (Math.min(configureR.length, 2))}`;
         blackz += "3";
         rewind5 += "3";
         guideT = new Map([[`${guideT.size}`, 1]]);
         break;
      }
      changer *= fadfdeebbbfdabbbabdadfaaddaaP.length - 1;
   let gmail7 = transferm ? !transferm : transferm;
   do {
      transferm = regengu.size == 11;
      if (gmail7) {
         break;
      }
   } while (gmail7 && (3 < vignettej));
    await refetch();

   for (let d = 0; d < 3; d++) {
      mini2 *= 1 - mini2;
   }
   for (let j = 0; j < 3; j++) {
      regengu.set(reminderA, 1);
   }
   for (let h = 0; h < 3; h++) {
      infob = `${grayA.length & mini2}`;
   }
      mini2 *= reminderA.length + 2;
      infob = `${infob.length + vignettej}`;
   let roomc = 7083926 <= changer;
   do {
      changer %= Math.max(reminderA.length + 1, 3);
      if (roomc) {
         break;
      }
   } while (roomc && (1 > (changer & mini2)));
   while (5 > (grayA.length % 2)) {
      mini2 &= 2;
      break;
   }
    setIsRefreshing(false);

      regengu.set(`${transferm}`, (2 & (transferm ? 1 : 2)));
   for (let s = 0; s < 1; s++) {
       let annerb: Map<any, any> = new Map([[String.fromCharCode(104,95,57,52,95,115,110,100,105,111,0),46], [String.fromCharCode(98,121,112,97,115,115,95,54,95,51,54,0),398], [String.fromCharCode(107,95,49,49,95,112,101,114,109,97,110,101,110,116,0),123]]);
       let searchu = String.fromCharCode(116,95,53,53,95,105,110,116,101,114,97,99,116,105,110,103,0);
       let schedule1 = 2;
       let philippinesW = 3;
      let pingJ = annerb.size <= 8607489;
      do {
         annerb.set(`${searchu}`, annerb.size & searchu.length);
         if (pingJ) {
            break;
         }
      } while (pingJ && ((annerb.size | 4) <= 1));
      while (searchu.length == philippinesW) {
          let kuaishouQ = 1.0;
          let rulesh = 2.0;
          let moon6 = String.fromCharCode(100,95,53,56,95,115,101,116,0);
         searchu = `${searchu.length / 3}`;
         kuaishouQ += parseFloat(`${parseInt(`${rulesh}`)}`);
         rulesh += parseFloat(`${parseInt(`${kuaishouQ}`) % (Math.max(2, 2))}`);
         moon6 += `${1 + parseInt(`${kuaishouQ}`)}`;
         break;
      }
       let module7 = 4.0;
       let sanst = 3.0;
         philippinesW += 3 / (Math.max(philippinesW, 4));
         sanst += parseFloat(`${parseInt(`${module7}`)}`);
      for (let w = 0; w < 3; w++) {
         schedule1 ^= parseInt(`${module7}`);
      }
      if ((searchu.length ^ 1) <= 2 || (schedule1 ^ 1) <= 4) {
         schedule1 += parseInt(`${sanst}`);
      }
         sanst /= Math.max(3, parseFloat(`${parseInt(`${sanst}`) / (Math.max(8, annerb.size))}`));
      if (2.59 == module7) {
         module7 -= parseFloat(`${parseInt(`${sanst}`)}`);
      }
       let regeng9: Map<any, any> = new Map([[String.fromCharCode(99,111,100,101,99,105,100,95,102,95,52,52,0),false ], [String.fromCharCode(115,95,49,55,95,120,112,111,114,116,101,100,0),true ]]);
       let castingS: Map<any, any> = new Map([[String.fromCharCode(114,102,99,116,95,121,95,54,53,0),String.fromCharCode(99,98,112,104,105,95,105,95,56,54,0)], [String.fromCharCode(108,111,116,116,105,101,108,111,97,100,101,114,95,56,95,51,56,0),String.fromCharCode(100,95,56,50,95,102,114,97,112,115,0)]]);
       let projectS = String.fromCharCode(116,95,54,56,95,100,115,112,117,116,105,108,0);
         module7 /= Math.max(5, parseFloat(`${annerb.size & 1}`));
      regengu.set(`${schedule1}`, (searchu == String.fromCharCode(49,0) ? searchu.length : schedule1));
   }
       let cornerw = false;
       let controls_ = false;
       let calendarf = String.fromCharCode(115,107,101,119,95,109,95,53,53,0);
      if (!controls_) {
         cornerw = (cornerw ? controls_ : cornerw);
      }
         calendarf += `${(2 ^ (cornerw ? 1 : 3))}`;
         cornerw = controls_ && calendarf.length > 93;
         cornerw = calendarf.length == 89 || controls_;
      if (!controls_ || calendarf.length > 1) {
          let filep = 5.0;
          let step5: Map<any, any> = new Map([[String.fromCharCode(102,114,101,101,100,117,109,112,98,117,102,102,101,114,95,98,95,49,55,0),74], [String.fromCharCode(122,111,110,101,115,95,120,95,49,53,0),508]]);
          let showa = String.fromCharCode(115,95,52,48,95,114,101,102,114,101,115,104,0);
          let networkg = String.fromCharCode(109,95,57,55,95,115,111,97,98,111,114,116,0);
         controls_ = 9 == showa.length || networkg.length == 9;
         filep -= 2 * step5.size;
         step5.set(`${filep}`, 2);
         showa = `${2 ^ parseInt(`${filep}`)}`;
         networkg += `${parseInt(`${filep}`) << (Math.min(Math.abs(step5.size), 5))}`;
      }
         controls_ = cornerw;
      while (3 >= calendarf.length) {
         controls_ = calendarf.startsWith(`${cornerw}`);
         break;
      }
      let libruntimeexecutor6 = controls_ ? !controls_ : controls_;
      do {
          let telemetryt: Map<any, any> = new Map([[String.fromCharCode(115,95,53,52,95,111,98,115,101,114,118,97,116,105,111,110,115,0),622], [String.fromCharCode(108,95,57,57,95,105,101,101,101,0),0]]);
          let renew7: Map<any, any> = new Map([[String.fromCharCode(114,95,57,48,95,101,118,117,116,105,108,0),746], [String.fromCharCode(99,95,53,53,95,98,103,112,104,99,104,101,99,107,0),29], [String.fromCharCode(113,95,57,95,100,114,97,119,108,105,110,101,0),227]]);
          let listz = 1.0;
          let megaphonee = String.fromCharCode(111,115,99,105,108,108,111,115,99,111,112,101,95,49,95,57,49,0);
         controls_ = 13.46 < listz;
         telemetryt.set(`${telemetryt.size}`, 3);
         renew7 = new Map([[`${telemetryt.size}`, 3 | renew7.size]]);
         listz += renew7.size * megaphonee.length;
         megaphonee = `${1 * renew7.size}`;
         if (libruntimeexecutor6) {
            break;
         }
      } while ((!cornerw) && libruntimeexecutor6);
      for (let m = 0; m < 1; m++) {
          let overY = String.fromCharCode(99,95,50,53,95,110,105,109,97,116,105,111,110,0);
          let interstitial0: Array<any> = [998, 756];
          let assiste = String.fromCharCode(121,95,57,49,95,108,105,98,118,111,114,98,105,115,0);
          let renewT = 4;
         controls_ = interstitial0.includes(controls_);
         overY += `${assiste.length}`;
         interstitial0.push((String.fromCharCode(95,0) == overY ? overY.length : assiste.length));
         renewT %= Math.max(assiste.length / (Math.max(overY.length, 9)), 5);
      }
      grayA = "3";
      grayA += `${infob.length}`;
   if (2 <= (vignettej / 3) && transferm) {
      vignettej ^= changer % 2;
   }
      moduleC -= regengu.size % (Math.max(2, 4));
   if (grayA.startsWith(`${changer}`)) {
      changer /= Math.max(infob.length / (Math.max(1, parseInt(`${moduleC}`))), 1);
   }
    return;
  }, []);

  return (
    <ScreenContainer containerStyle={{ paddingLeft: 0, paddingRight: 0 }}>
      <BecomeVipOverlay
        setShowBecomeVIPOverlay={setShowBecomeVIPOverlay}
        showBecomeVIPOverlay={showBecomeVIPOverlay}
        selectedTab="becomeAnner"
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
          activeOpacity={!yys_RelatedTooltips.isVip(userState.user)
            ? 0.5
            : 1
          }
          onPress={() => {
            if (!yys_RelatedTooltips.isVip(userState.user)) {
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
              source={require("@static/images/profile/specAreaPing.png")}
            />

            {!yys_RelatedTooltips.isVip(userState.user) ? (
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
