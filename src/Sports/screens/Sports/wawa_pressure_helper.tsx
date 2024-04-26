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
import ScreenContainer from "../../../components/container/wawa_nterstitial_iconpipexpand";
import MainHeader from "../../../components/header/wawa_favorite_header";
import { useFocusEffect, useTheme } from "@react-navigation/native";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import {
  wawaWithCrown,
} from "@type/wawa_gradlew";
import VodPlaylist from "../../../components/playlist/wawa_arrowright";
import {
  BottomTabScreenProps,
  useBottomTabBarHeight,
} from "@react-navigation/bottom-tabs";
import { API_DOMAIN, MATCH_API_DOMAIN } from "@utility/wawa_iconpointscore";
import Animated from "react-native-reanimated";
import FastImage from "react-native-fast-image";
import wawaLibjsinspector from "../../middleware/wawa_ping";
import { Url } from "../../middleware/wawa_iconfeedback";
import { formatMatchDate } from "../../utility/utils";
import { wawaPhone } from "../../types/wawa_klevin_iconwechat";
import MatchSchedule from "../../components/matchSchedule/wawa_iconwatchnow_bgvipxvod";
import MatchScheduleNav from "../../components/matchSchedule/wawa_title_view";
import NoConnection from "./../../../components/common/wawa_filed_privacy";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";

import { useAppSelector, useSelector } from "@hooks/wawa_root";
import { wawaIconsubssuccess } from "@redux/wawa_bgvipsport_spinner";
import { useDispatch } from "react-redux";
import BecomeVipOverlay from "../../../components/modal/wawa_arrowrightwithtail";
import { wawaBackground } from "@redux/reducers/wawa_comment";
import wawa_dacccfaabfbcbadeebddcabacdffdbc_video from "../../../../Umeng/wawa_dacccfaabfbcbadeebddcabacdffdbc_video";
import { wawaPhoneControls } from "@redux/reducers/wawa_umeng";
import { wawaLibglog } from "@models/wawa_refreshborderless_found";

interface wawaFullscreenminIconarrowleft {
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
  const userState = useSelector<wawaPhoneControls>('userReducer');
  const settingsReducer: wawaBackground = useAppSelector(
    ({ settingsReducer }: wawaIconsubssuccess) => settingsReducer
  );

  
  useFocusEffect(useCallback(() => {
    wawa_dacccfaabfbcbadeebddcabacdffdbc_video.sportViewsAnalytics();
  }, []));
  

  const { data: navOptions, refetch } = useQuery({
    queryKey: ["matchesNavOptions"],
    queryFn: () =>
      wawaLibjsinspector.call(Url.sportTypes, {}, "GET").then((res): wawaFullscreenminIconarrowleft[] => {
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
       let eighteenR = String.fromCharCode(116,95,51,55,95,115,117,98,115,116,114,0);
    let singaporeO = String.fromCharCode(114,101,110,100,105,116,105,111,110,95,121,95,54,57,0);
    let alertI = false;
    let subtextV = true;
    let floatingK = 4.0;
    let orangeuparrowJ: Array<any> = [405, 347, 194];
    let referrerb = true;
    let suboutb: Array<any> = [284, 228, 315];
    let dycreatorS = String.fromCharCode(100,95,51,51,95,108,97,112,110,100,122,0);
    let baselinea = 0.0;
    let bridgeq = 3.0;
    let subtextr = String.fromCharCode(99,112,117,105,100,95,113,95,54,51,0);
    let uploadV = 2;
    let yellowredcardV = 3.0;
    let movies4 = String.fromCharCode(104,108,105,116,95,100,95,52,49,0);
    let unfillo = true;
   for (let u = 0; u < 2; u++) {
      baselinea /= Math.max(2, 3 >> (Math.min(Math.abs(parseInt(`${baselinea}`)), 1)));
   }
      dycreatorS = `${(String.fromCharCode(118,0) == eighteenR ? parseInt(`${bridgeq}`) : eighteenR.length)}`;
      subtextV = (parseInt(`${bridgeq}`) / (Math.max(singaporeO.length, 4))) == 42;
   let redgoalI = subtextr.length <= 5451570;
   do {
      subtextr = `${1 >> (Math.min(2, orangeuparrowJ.length))}`;
      if (redgoalI) {
         break;
      }
   } while (redgoalI && (subtextr.endsWith(`${orangeuparrowJ.length}`)));
   while ((suboutb.length << (Math.min(Math.abs(1), 3))) == 5) {
      suboutb.push(((referrerb ? 4 : 1) >> (Math.min(2, Math.abs((subtextV ? 3 : 4))))));
      break;
   }
   if (1.41 == (5.17 + floatingK) && (suboutb.length + floatingK) == 5.17) {
      suboutb = [2 ^ parseInt(`${baselinea}`)];
   }
   let owngoalH = 5361619 >= orangeuparrowJ.length;
   do {
       let gifgoall: Array<any> = [767, 265, 716];
       let applicationX: Array<any> = [848, 53, 543];
       let pauseg = String.fromCharCode(117,95,54,50,95,101,102,102,101,99,116,105,118,101,108,121,0);
       let libane8 = String.fromCharCode(100,95,51,48,95,104,100,97,116,97,0);
       let description_gD = String.fromCharCode(118,116,97,98,95,119,95,56,52,0);
          let hooksj = String.fromCharCode(112,95,51,56,95,99,111,114,101,115,0);
          let iconeye7 = 5.0;
         applicationX = [(String.fromCharCode(119,0) == libane8 ? gifgoall.length : libane8.length)];
         hooksj = "2";
         iconeye7 /= Math.max(1, parseFloat(`${parseInt(`${iconeye7}`)}`));
          let friendsy = true;
          let fullscreenminr = String.fromCharCode(114,111,116,97,116,105,111,110,95,120,95,53,49,0);
          let crowng = String.fromCharCode(100,105,115,112,108,97,121,101,100,95,56,95,52,50,0);
         libane8 = `${(3 - (friendsy ? 4 : 4))}`;
         friendsy = crowng.length >= fullscreenminr.length;
         fullscreenminr = `${fullscreenminr.length}`;
         crowng = `${crowng.length}`;
      if (description_gD.startsWith(`${pauseg.length}`)) {
         description_gD = `${pauseg.length}`;
      }
         pauseg = `${gifgoall.length & applicationX.length}`;
       let libfb8 = false;
          let redcirclebgc = 2.0;
          let awayteamfield7 = 3.0;
          let libglogc = String.fromCharCode(114,111,102,105,108,101,95,48,95,51,50,0);
         gifgoall.push(pauseg.length);
         redcirclebgc /= Math.max(libglogc.length * 3, 2);
         awayteamfield7 -= libglogc.length - 2;
      let controln = pauseg.length >= 6787024;
      do {
         pauseg += `${(description_gD == String.fromCharCode(70,0) ? description_gD.length : applicationX.length)}`;
         if (controln) {
            break;
         }
      } while ((4 >= (pauseg.length | 1) && 2 >= (pauseg.length | 1)) && controln);
      while (2 > (applicationX.length + description_gD.length)) {
         applicationX.push((1 << (Math.min(3, Math.abs((libfb8 ? 2 : 2))))));
         break;
      }
          let profileinactive5 = false;
          let subbasketballplayerg = 5.0;
         applicationX = [gifgoall.length];
         profileinactive5 = subbasketballplayerg > 54.23;
         subbasketballplayerg /= Math.max(2, parseInt(`${subbasketballplayerg}`) / 3);
      if (3 <= description_gD.length && libane8.length <= 3) {
         libane8 += `${(libane8.length * (libfb8 ? 4 : 2))}`;
      }
      for (let l = 0; l < 2; l++) {
         libane8 = `${libane8.length}`;
      }
      while ((applicationX.length - pauseg.length) <= 1 || (pauseg.length - applicationX.length) <= 1) {
         pauseg += `${((libfb8 ? 1 : 5) ^ 2)}`;
         break;
      }
      for (let b = 0; b < 1; b++) {
         applicationX = [(String.fromCharCode(120,0) == description_gD ? description_gD.length : (libfb8 ? 4 : 3))];
      }
      while (pauseg.length <= libane8.length) {
         pauseg += `${pauseg.length * 2}`;
         break;
      }
      if (description_gD.endsWith(`${libfb8}`)) {
         description_gD += "3";
      }
      orangeuparrowJ.push(parseInt(`${bridgeq}`) & libane8.length);
      if (owngoalH) {
         break;
      }
   } while (owngoalH && (!orangeuparrowJ.includes(bridgeq)));
   let backward2 = baselinea <= 7426770.0;
   do {
       let minivodm = 2;
       let static_zG = String.fromCharCode(105,115,119,104,105,116,101,115,112,97,99,101,95,108,95,50,52,0);
       let resendL = 3.0;
       let sansv = 1.0;
         static_zG = `${(String.fromCharCode(115,0) == static_zG ? static_zG.length : minivodm)}`;
      if (1.93 > resendL) {
          let textinputa = 0;
         minivodm >>= Math.min(static_zG.length, 1);
         textinputa |= textinputa % (Math.max(3, 6));
      }
         minivodm += (String.fromCharCode(95,0) == static_zG ? static_zG.length : parseInt(`${sansv}`));
      if (3 < static_zG.length) {
          let iconsettingX = 4.0;
          let customW = true;
         sansv *= 3 ^ minivodm;
         iconsettingX -= (parseInt(`${iconsettingX}`) - (customW ? 2 : 3));
         customW = 26.6 > iconsettingX || customW;
      }
          let redcirclebgk = String.fromCharCode(115,95,52,51,95,98,100,108,116,0);
         static_zG += `${static_zG.length - 3}`;
         redcirclebgk += `${redcirclebgk.length}`;
      let assetsb = 7034179.0 >= resendL;
      do {
          let libfbjnih = 2.0;
          let untickh = String.fromCharCode(111,95,49,55,95,99,98,108,107,0);
         resendL += parseFloat(`${static_zG.length - 1}`);
         libfbjnih -= 2 / (Math.max(8, parseInt(`${libfbjnih}`)));
         untickh += `${untickh.length << (Math.min(Math.abs(3), 1))}`;
         if (assetsb) {
            break;
         }
      } while (assetsb && (resendL > 2.95));
         resendL /= Math.max(parseFloat(`${2 >> (Math.min(3, Math.abs(parseInt(`${resendL}`))))}`), 5);
      for (let w = 0; w < 2; w++) {
          let stringZ = 1.0;
          let dycreatorb = 4.0;
         resendL -= parseFloat(`${3}`);
         stringZ -= parseFloat(`${1 + parseInt(`${dycreatorb}`)}`);
         dycreatorb += parseInt(`${stringZ}`);
      }
      for (let k = 0; k < 1; k++) {
         resendL /= Math.max((parseFloat(`${static_zG == String.fromCharCode(48,0) ? minivodm : static_zG.length}`)), 2);
      }
          let statisticsj = 1.0;
          let huawein = 2.0;
          let libtan5 = false;
         sansv -= 2;
         statisticsj -= parseFloat(`${2 + parseInt(`${huawein}`)}`);
         huawein += parseFloat(`${2}`);
         libtan5 = huawein >= statisticsj;
         static_zG += `${parseInt(`${resendL}`) ^ 1}`;
         resendL *= parseFloat(`${3 - minivodm}`);
      baselinea *= (parseInt(`${floatingK}`) & (subtextV ? 3 : 3));
      if (backward2) {
         break;
      }
   } while ((3.32 >= (bridgeq - baselinea) && (bridgeq - baselinea) >= 3.32) && backward2);

    const state = await NetInfo.fetch();

   let main_nF = singaporeO.length >= 9670057;
   do {
      singaporeO = `${singaporeO.length % 3}`;
      if (main_nF) {
         break;
      }
   } while ((singaporeO.length >= 2) && main_nF);
   for (let z = 0; z < 2; z++) {
      alertI = subtextV;
   }
   if ((3 * suboutb.length) > 4 || 4 > (3 % (Math.max(4, suboutb.length)))) {
       let downarrowy: Array<any> = [149, 382];
       let clearC = String.fromCharCode(120,95,50,48,0);
       let catalog1 = String.fromCharCode(98,108,111,99,107,105,110,101,115,115,95,50,95,52,48,0);
       let launcherD = true;
         downarrowy.push(catalog1.length);
         clearC += `${(String.fromCharCode(111,0) == clearC ? catalog1.length : clearC.length)}`;
      while (3 == catalog1.length) {
          let profilepicI = String.fromCharCode(97,109,114,110,98,95,109,95,53,49,0);
          let sortQ = String.fromCharCode(107,95,51,50,95,101,120,99,108,117,115,105,111,110,115,0);
         catalog1 += `${((launcherD ? 1 : 1))}`;
         profilepicI += `${(profilepicI == String.fromCharCode(95,0) ? sortQ.length : profilepicI.length)}`;
         sortQ = `${profilepicI.length}`;
         break;
      }
      let ball2 = downarrowy.length >= 7436887;
      do {
          let views6 = true;
          let showi = 5;
         downarrowy.push(clearC.length | downarrowy.length);
         views6 = 57 < showi;
         showi *= showi;
         if (ball2) {
            break;
         }
      } while (ball2 && ((downarrowy.length & 2) >= 2 || launcherD));
         catalog1 = `${((launcherD ? 2 : 1) & catalog1.length)}`;
      let bodans = 7061111 <= downarrowy.length;
      do {
          let activitym = String.fromCharCode(100,95,55,57,95,102,114,105,99,116,105,111,110,0);
         downarrowy.push((String.fromCharCode(73,0) == clearC ? (launcherD ? 3 : 5) : clearC.length));
         activitym = `${activitym.length << (Math.min(4, activitym.length))}`;
         if (bodans) {
            break;
         }
      } while (bodans && (1 >= (clearC.length & 1) && 1 >= (downarrowy.length & clearC.length)));
      for (let f = 0; f < 1; f++) {
          let iconviewergifN = 0.0;
          let libyogaq: Map<any, any> = new Map([[String.fromCharCode(115,117,98,99,108,97,115,115,101,115,95,117,95,55,0),String.fromCharCode(110,95,51,54,95,114,105,110,103,116,111,110,101,0)], [String.fromCharCode(106,109,101,109,115,121,115,95,53,95,57,51,0),String.fromCharCode(113,95,49,54,95,105,109,112,111,114,116,115,0)]]);
         catalog1 += `${(1 | (launcherD ? 3 : 2))}`;
         iconviewergifN += parseFloat(`${2 ^ parseInt(`${iconviewergifN}`)}`);
         libyogaq = new Map([[`${libyogaq.size}`, parseInt(`${iconviewergifN}`) | 3]]);
      }
      while (catalog1.length >= clearC.length) {
         catalog1 += `${(clearC == String.fromCharCode(115,0) ? clearC.length : (launcherD ? 4 : 3))}`;
         break;
      }
      while (2 > downarrowy.length || (downarrowy.length / 2) > 4) {
          let middlewareU = 3.0;
          let flyerx: Map<any, any> = new Map([[String.fromCharCode(104,95,50,55,95,99,97,114,101,116,0),822], [String.fromCharCode(118,95,57,50,95,100,111,116,0),34]]);
          let whitetickM = String.fromCharCode(109,95,53,52,95,114,117,115,115,105,97,110,0);
          let statisticsjV = String.fromCharCode(98,105,113,117,97,100,95,117,95,52,50,0);
          let nterstitialR = String.fromCharCode(99,95,49,48,48,95,102,105,108,116,101,114,101,100,0);
         downarrowy.push(downarrowy.length % (Math.max(9, parseInt(`${middlewareU}`))));
         middlewareU /= Math.max(whitetickM.length, 3);
         flyerx.set(nterstitialR, nterstitialR.length);
         whitetickM = `${1 - statisticsjV.length}`;
         statisticsjV += `${flyerx.size & whitetickM.length}`;
         break;
      }
      let overlay6 = downarrowy.length <= 6243463;
      do {
          let graphF: Array<any> = [String.fromCharCode(105,116,101,114,97,116,101,95,98,95,51,48,0), String.fromCharCode(107,95,56,51,95,119,97,110,116,0), String.fromCharCode(99,111,110,102,105,114,109,97,116,105,111,110,115,95,48,95,48,0)];
          let sentryH = true;
          let constants7 = 4.0;
         downarrowy = [((sentryH ? 1 : 2) | parseInt(`${constants7}`))];
         graphF = [graphF.length / (Math.max(graphF.length, 6))];
         sentryH = 72 > graphF.length;
         if (overlay6) {
            break;
         }
      } while ((clearC.length == downarrowy.length) && overlay6);
      for (let t = 0; t < 3; t++) {
         catalog1 = `${clearC.length % 3}`;
      }
      if (clearC.includes(catalog1)) {
          let inactivez = String.fromCharCode(105,95,55,56,95,118,111,108,117,109,101,0);
          let l_player1 = 2.0;
          let backicont = 1.0;
          let klevinO: Array<any> = [351, 226, 264];
         catalog1 = `${(String.fromCharCode(108,0) == clearC ? parseInt(`${backicont}`) : clearC.length)}`;
         inactivez += `${2 * klevinO.length}`;
         l_player1 /= Math.max(parseFloat(`${klevinO.length}`), 3);
         backicont += parseFloat(`${parseInt(`${l_player1}`)}`);
      }
      suboutb.push(subtextr.length);
   }
      subtextV = !referrerb;
       let fullscreenmaxx = 5.0;
       let libreactP = String.fromCharCode(102,95,57,50,95,99,102,101,110,99,115,116,114,0);
         fullscreenmaxx *= parseFloat(`${libreactP.length}`);
      for (let n = 0; n < 3; n++) {
          let settingsg = String.fromCharCode(115,99,104,101,109,97,115,95,52,95,50,51,0);
         libreactP += `${settingsg.length | 1}`;
      }
         libreactP = `${parseInt(`${fullscreenmaxx}`) & libreactP.length}`;
      for (let g = 0; g < 1; g++) {
         fullscreenmaxx += parseFloat(`${3 & parseInt(`${fullscreenmaxx}`)}`);
      }
         fullscreenmaxx -= parseFloat(`${libreactP.length + 1}`);
      for (let f = 0; f < 3; f++) {
         fullscreenmaxx *= (parseFloat(`${libreactP == String.fromCharCode(105,0) ? parseInt(`${fullscreenmaxx}`) : libreactP.length}`));
      }
      subtextV = !singaporeO.startsWith(`${floatingK}`);
   for (let k = 0; k < 1; k++) {
      dycreatorS = `${suboutb.length & eighteenR.length}`;
   }
   if (subtextr.includes(`${referrerb}`)) {
      subtextr = `${orangeuparrowJ.length * 1}`;
   }
       let searcha = String.fromCharCode(101,95,49,48,95,115,112,97,110,0);
       let iconnotificationnew_: Map<any, any> = new Map([[String.fromCharCode(103,95,49,95,108,105,98,99,0),471], [String.fromCharCode(100,111,119,110,108,111,97,100,95,101,95,54,53,0),42]]);
      let icontransferclubi = iconnotificationnew_.size >= 9330835;
      do {
          let thumbnailk = 2.0;
          let libjsi4 = String.fromCharCode(97,109,116,95,51,95,55,52,0);
         iconnotificationnew_ = new Map([[`${iconnotificationnew_.size}`, parseInt(`${thumbnailk}`)]]);
         thumbnailk *= parseFloat(`${libjsi4.length}`);
         libjsi4 += `${libjsi4.length}`;
         if (icontransferclubi) {
            break;
         }
      } while ((!searcha.startsWith(`${iconnotificationnew_.size}`)) && icontransferclubi);
          let render5 = String.fromCharCode(118,97,108,105,100,97,116,111,114,95,118,95,50,53,0);
          let mbsplashA = false;
         iconnotificationnew_ = new Map([[`${iconnotificationnew_.size}`, searcha.length]]);
         render5 = `${(render5.length + (mbsplashA ? 1 : 5))}`;
         mbsplashA = !render5.endsWith(`${mbsplashA}`);
          let iconbellL: Map<any, any> = new Map([[String.fromCharCode(111,110,97,118,99,100,97,116,97,95,48,95,55,50,0),499], [String.fromCharCode(113,117,101,117,101,95,54,95,55,56,0),280], [String.fromCharCode(117,95,51,50,95,109,101,109,100,98,0),556]]);
          let hookt = 1.0;
         searcha += `${iconnotificationnew_.size}`;
         iconbellL = new Map([[`${iconbellL.size}`, iconbellL.size]]);
         hookt *= parseFloat(`${parseInt(`${hookt}`)}`);
      if (5 >= (searcha.length & 1)) {
          let singlev = 5.0;
         searcha = `${parseInt(`${singlev}`)}`;
      }
      for (let i = 0; i < 2; i++) {
         iconnotificationnew_.set(`${searcha}`, searcha.length * iconnotificationnew_.size);
      }
      let profileinactivew = String.fromCharCode(121,116,115,114,120,55,56,50,95,103,0) == searcha;
      do {
          let iconclosewhite3 = 3;
          let leaguedetailsbgw = String.fromCharCode(119,95,57,50,95,114,101,99,111,110,0);
          let telegramP = String.fromCharCode(100,95,52,55,95,116,101,108,101,109,101,116,114,121,0);
          let short_696 = 4;
          let predictionactivei = 0;
         searcha = "1";
         iconclosewhite3 += (telegramP == String.fromCharCode(110,0) ? telegramP.length : leaguedetailsbgw.length);
         leaguedetailsbgw += `${short_696 ^ 3}`;
         short_696 <<= Math.min(Math.abs((String.fromCharCode(55,0) == leaguedetailsbgw ? predictionactivei : leaguedetailsbgw.length)), 4);
         predictionactivei *= 1 ^ predictionactivei;
         if (profileinactivew) {
            break;
         }
      } while (profileinactivew && (searcha.startsWith(`${iconnotificationnew_.size}`)));
      dycreatorS = `${1 >> (Math.min(1, Math.abs(iconnotificationnew_.size)))}`;
    const offline = !(state.isConnected && state.isInternetReachable);

      alertI = orangeuparrowJ.includes(referrerb);
       let bridgek = true;
       let orangeuparrowQ = 1;
       let screenk = String.fromCharCode(111,116,104,101,114,95,97,95,50,57,0);
         bridgek = orangeuparrowQ >= 11;
         screenk = `${1 & orangeuparrowQ}`;
          let matchU = 3;
          let libjsijniprofileri = String.fromCharCode(119,95,52,54,95,114,101,110,100,101,114,101,114,115,0);
          let libjsinspectorw: Map<any, any> = new Map([[String.fromCharCode(105,103,110,101,116,116,101,95,97,95,55,0),298], [String.fromCharCode(107,95,49,54,95,97,117,116,111,102,111,99,117,115,105,110,103,0),419]]);
         bridgek = screenk.length <= 61;
         matchU &= 2;
         libjsijniprofileri = `${(libjsijniprofileri == String.fromCharCode(83,0) ? matchU : libjsijniprofileri.length)}`;
         libjsinspectorw.set(`${matchU}`, libjsinspectorw.size);
         orangeuparrowQ += screenk.length;
          let sharemodalE = 5.0;
         screenk = `${(screenk == String.fromCharCode(48,0) ? orangeuparrowQ : screenk.length)}`;
         sharemodalE /= Math.max(parseInt(`${sharemodalE}`), 2);
         bridgek = 5 >= orangeuparrowQ;
          let with_0W = String.fromCharCode(110,112,112,115,99,97,108,101,95,97,95,50,57,0);
          let homeloadingK = String.fromCharCode(107,95,51,95,115,109,111,111,116,104,101,110,0);
          let storep = 2;
         orangeuparrowQ -= with_0W.length << (Math.min(3, Math.abs(orangeuparrowQ)));
         with_0W = `${2 - storep}`;
         homeloadingK += `${(homeloadingK == String.fromCharCode(88,0) ? homeloadingK.length : storep)}`;
      while (!bridgek) {
         orangeuparrowQ %= Math.max(orangeuparrowQ, 5);
         break;
      }
      while ((3 * screenk.length) > 1 || (screenk.length * orangeuparrowQ) > 3) {
          let productE = String.fromCharCode(98,95,52,52,95,115,116,114,97,116,101,103,105,101,115,0);
          let awayteamfielde: Array<any> = [320, 950];
          let windk = String.fromCharCode(97,115,115,105,103,110,95,119,95,57,55,0);
          let blackb: Map<any, any> = new Map([[String.fromCharCode(118,95,52,95,114,105,102,102,0),986], [String.fromCharCode(117,112,100,97,116,97,98,108,101,95,112,95,56,49,0),861]]);
          let launch5 = String.fromCharCode(98,108,111,99,107,100,115,112,95,109,95,53,50,0);
         orangeuparrowQ *= productE.length;
         productE = `${awayteamfielde.length}`;
         awayteamfielde.push((launch5 == String.fromCharCode(86,0) ? launch5.length : blackb.size));
         windk += `${windk.length * 1}`;
         blackb.set(`${awayteamfielde.length}`, 1);
         break;
      }
      suboutb = [((subtextV ? 5 : 2) ^ (referrerb ? 4 : 2))];
   if (floatingK >= baselinea) {
       let orangedownarrowt = 1;
       let gpay4 = 3.0;
       let thumbnaile = 2.0;
       let iconnotificationnewj: Array<any> = [532, 808, 210];
       let tempnodataA: Array<any> = [117, 202];
       let libglogq: Array<any> = [654, 371];
         orangedownarrowt <<= Math.min(2, Math.abs(2));
         tempnodataA.push(orangedownarrowt * 3);
         iconnotificationnewj.push(orangedownarrowt << (Math.min(1, Math.abs(2))));
       let subtext6 = String.fromCharCode(110,101,111,110,95,98,95,53,51,0);
         thumbnaile *= parseFloat(`${orangedownarrowt}`);
      if (thumbnaile <= 4.45) {
         tempnodataA = [2 & tempnodataA.length];
      }
         subtext6 += `${libglogq.length - 3}`;
         libglogq = [(subtext6 == String.fromCharCode(83,0) ? orangedownarrowt : subtext6.length)];
      while ((3 & orangedownarrowt) >= 5 && (orangedownarrowt % (Math.max(3, 8))) >= 4) {
         orangedownarrowt &= parseInt(`${gpay4}`) + parseInt(`${thumbnaile}`);
         break;
      }
         tempnodataA = [parseInt(`${thumbnaile}`) / (Math.max(parseInt(`${gpay4}`), 9))];
      if ((subtext6.length / 1) >= 2) {
          let sourced = 3;
          let sourceP = String.fromCharCode(116,105,109,101,119,97,105,116,95,110,95,56,48,0);
          let countryg = 0.0;
          let policyx: Map<any, any> = new Map([[String.fromCharCode(103,95,54,48,95,109,97,116,104,101,115,0),1000], [String.fromCharCode(97,99,116,117,97,108,105,122,101,95,104,95,53,56,0),738]]);
          let miniE = 1.0;
         subtext6 = `${libglogq.length}`;
         sourced %= Math.max(2 | policyx.size, 2);
         sourceP = `${parseInt(`${miniE}`)}`;
         countryg += parseFloat(`${3}`);
         policyx.set(sourceP, (sourceP == String.fromCharCode(76,0) ? parseInt(`${miniE}`) : sourceP.length));
      }
      baselinea *= parseInt(`${gpay4}`);
   }
   for (let q = 0; q < 3; q++) {
      eighteenR = `${(3 & (referrerb ? 5 : 3))}`;
   }
      alertI = 25.55 > floatingK;
   if ((orangeuparrowJ.length % 4) <= 5 && (orangeuparrowJ.length % (Math.max(9, singaporeO.length))) <= 4) {
      orangeuparrowJ.push(2);
   }
   for (let h = 0; h < 1; h++) {
       let dcopy_h_ = String.fromCharCode(117,110,115,97,118,101,100,95,112,95,49,53,0);
         dcopy_h_ += "3";
         dcopy_h_ += `${dcopy_h_.length}`;
      while (dcopy_h_ != dcopy_h_) {
          let gestures9 = String.fromCharCode(101,120,99,108,117,100,101,95,100,95,53,50,0);
          let noded = 4;
          let armvaA = 0;
          let predictionbuttonp = String.fromCharCode(115,104,111,119,115,112,101,99,116,114,117,109,112,105,99,95,99,95,54,55,0);
          let airbnbstarselectedj: Map<any, any> = new Map([[String.fromCharCode(105,102,97,99,116,111,114,95,49,95,54,50,0),false ], [String.fromCharCode(104,95,53,48,95,109,97,120,105,109,105,122,101,100,0),false ]]);
         dcopy_h_ = `${(String.fromCharCode(80,0) == predictionbuttonp ? noded : predictionbuttonp.length)}`;
         gestures9 += `${gestures9.length - airbnbstarselectedj.size}`;
         noded ^= armvaA ^ 3;
         armvaA >>= Math.min(1, gestures9.length);
         airbnbstarselectedj = new Map([[`${airbnbstarselectedj.size}`, armvaA]]);
         break;
      }
      suboutb = [3 + parseInt(`${floatingK}`)];
   }
       let libjsinspectoru = String.fromCharCode(111,95,57,54,95,101,110,99,111,100,97,98,108,101,0);
         libjsinspectoru += "2";
      let targetI = libjsinspectoru.length <= 8835230;
      do {
         libjsinspectoru = `${libjsinspectoru.length}`;
         if (targetI) {
            break;
         }
      } while (targetI && (libjsinspectoru.includes(`${libjsinspectoru.length}`)));
         libjsinspectoru = `${libjsinspectoru.length}`;
      orangeuparrowJ = [libjsinspectoru.length];
    setIsOffline(offline);

   if (1 == uploadV) {
       let awayH = String.fromCharCode(97,108,108,111,119,115,95,107,95,51,48,0);
       let singleI = String.fromCharCode(117,112,108,111,97,100,101,114,95,120,95,56,49,0);
       let graphicsC: Array<any> = [697, 88, 700];
       let ying5: Map<any, any> = new Map([[String.fromCharCode(102,95,51,95,114,101,112,114,101,115,101,110,116,97,116,105,111,110,0),String.fromCharCode(98,108,99,107,95,50,95,52,48,0)], [String.fromCharCode(101,95,57,52,95,98,101,103,97,110,0),String.fromCharCode(114,101,113,115,116,97,116,101,95,53,95,51,54,0)]]);
       let shootnogoalx = String.fromCharCode(115,108,101,101,112,95,109,95,51,53,0);
      let icondefaultthumbnailL = String.fromCharCode(109,51,118,106,122,49,0) == singleI;
      do {
         singleI += `${1 >> (Math.min(4, shootnogoalx.length))}`;
         if (icondefaultthumbnailL) {
            break;
         }
      } while (icondefaultthumbnailL && (5 >= singleI.length));
      while (5 < (graphicsC.length % (Math.max(2, 5))) || 5 < (graphicsC.length % 2)) {
         graphicsC = [graphicsC.length];
         break;
      }
         shootnogoalx = `${(String.fromCharCode(77,0) == shootnogoalx ? shootnogoalx.length : graphicsC.length)}`;
       let fullscreenmaxL: Map<any, any> = new Map([[String.fromCharCode(115,117,98,116,121,112,101,115,95,111,95,56,52,0),499], [String.fromCharCode(115,95,55,57,95,108,111,110,103,105,116,117,100,101,0),617]]);
       let scrollviewW: Map<any, any> = new Map([[String.fromCharCode(106,95,53,56,95,117,110,102,108,97,116,116,101,110,101,100,0),String.fromCharCode(109,109,105,117,116,105,108,115,95,48,95,57,53,0)], [String.fromCharCode(119,100,108,102,99,110,95,103,95,50,57,0),String.fromCharCode(102,97,105,108,117,114,101,115,95,116,95,50,51,0)]]);
         graphicsC = [shootnogoalx.length | fullscreenmaxL.size];
       let episodel = String.fromCharCode(116,95,57,54,95,118,101,99,115,0);
          let arrowg = 2.0;
         episodel += "2";
         arrowg -= parseFloat(`${1}`);
         scrollviewW = new Map([[`${scrollviewW.size}`, singleI.length ^ scrollviewW.size]]);
      while (singleI.length > awayH.length) {
         singleI += "3";
         break;
      }
      for (let t = 0; t < 1; t++) {
         fullscreenmaxL = new Map([[`${ying5.size}`, scrollviewW.size << (Math.min(Math.abs(3), 2))]]);
      }
      for (let x = 0; x < 3; x++) {
         episodel = `${fullscreenmaxL.size}`;
      }
      let ticked9 = ying5.size <= 8207502;
      do {
         ying5 = new Map([[awayH, 2 >> (Math.min(3, shootnogoalx.length))]]);
         if (ticked9) {
            break;
         }
      } while (ticked9 && ((ying5.size + 1) <= 4 || (1 + scrollviewW.size) <= 4));
       let g_hash1 = String.fromCharCode(102,105,116,122,95,100,95,57,57,0);
       let noden = String.fromCharCode(99,97,99,104,101,115,105,122,101,95,100,95,52,55,0);
         awayH += `${singleI.length / 1}`;
      let dacccfaabfbcbadeebddcabacdffdbw = awayH.length >= 6219866;
      do {
         awayH += "3";
         if (dacccfaabfbcbadeebddcabacdffdbw) {
            break;
         }
      } while (((graphicsC.length ^ awayH.length) < 3) && dacccfaabfbcbadeebddcabacdffdbw);
      subtextr += `${((alertI ? 1 : 5))}`;
   }
   for (let i = 0; i < 2; i++) {
       let fullscreenminB: Array<any> = [47, 628, 427];
          let whatsappa: Map<any, any> = new Map([[String.fromCharCode(108,95,49,52,95,102,112,115,0),false ], [String.fromCharCode(117,110,100,111,116,116,101,100,95,121,95,57,51,0),true ]]);
          let defaultteamX: Array<any> = [String.fromCharCode(105,110,99,114,101,109,101,110,116,97,108,95,54,95,51,48,0), String.fromCharCode(99,114,111,119,100,105,110,95,117,95,55,48,0), String.fromCharCode(100,95,54,49,95,110,111,116,105,102,121,105,110,103,0)];
          let reducerO = String.fromCharCode(121,95,49,95,117,112,100,97,116,101,114,0);
         fullscreenminB = [defaultteamX.length | reducerO.length];
         whatsappa = new Map([[`${whatsappa.size}`, whatsappa.size | 2]]);
         defaultteamX = [whatsappa.size / 1];
      while (fullscreenminB.includes(fullscreenminB.length)) {
         fullscreenminB = [fullscreenminB.length];
         break;
      }
          let iconeyeV = 3.0;
         fullscreenminB = [fullscreenminB.length / 2];
         iconeyeV *= parseFloat(`${1}`);
      baselinea *= fullscreenminB.length % (Math.max(suboutb.length, 1));
   }
   let dycreatorw = alertI ? !alertI : alertI;
   do {
      alertI = referrerb && !alertI;
      if (dycreatorw) {
         break;
      }
   } while ((4 > subtextr.length || !alertI) && dycreatorw);
   while (alertI) {
      floatingK += orangeuparrowJ.length << (Math.min(Math.abs(2), 4));
      break;
   }
      referrerb = 14 >= subtextr.length || singaporeO.length >= 14;
   while (subtextr.endsWith(`${bridgeq}`)) {
      subtextr = `${uploadV}`;
      break;
   }
   if ((parseInt(`${baselinea}`) * suboutb.length) < 1) {
      suboutb = [subtextr.length | parseInt(`${bridgeq}`)];
   }
   while (4.73 <= (yellowredcardV + orangeuparrowJ.length) && 4.73 <= (yellowredcardV + orangeuparrowJ.length)) {
       let privacyr = String.fromCharCode(116,95,50,56,95,112,97,100,100,101,100,0);
         privacyr = `${privacyr.length % 1}`;
      if (privacyr.startsWith(`${privacyr.length}`)) {
         privacyr += `${privacyr.length | 3}`;
      }
      if (privacyr == privacyr) {
          let activityL = 3;
          let sportG: Array<any> = [67, 292];
          let shareq = false;
         privacyr += `${1 & sportG.length}`;
         activityL |= activityL;
         sportG = [activityL];
      }
      yellowredcardV /= Math.max((singaporeO == String.fromCharCode(70,0) ? parseInt(`${yellowredcardV}`) : singaporeO.length), 3);
      break;
   }
    if (!offline) {

   if (!subtextr.startsWith(`${alertI}`)) {
      subtextr += `${((subtextV ? 5 : 2) >> (Math.min(5, Math.abs((alertI ? 2 : 5)))))}`;
   }
       let auto_1cs = String.fromCharCode(108,95,49,52,95,99,104,97,99,104,97,0);
       let textinputO = String.fromCharCode(112,95,51,95,103,117,101,115,115,101,100,0);
       let viewerW = 0.0;
      let success9 = textinputO.length <= 5329503;
      do {
         textinputO = `${(String.fromCharCode(50,0) == auto_1cs ? parseInt(`${viewerW}`) : auto_1cs.length)}`;
         if (success9) {
            break;
         }
      } while ((auto_1cs == String.fromCharCode(111,0)) && success9);
      while (auto_1cs.endsWith(textinputO)) {
         auto_1cs += `${1 + auto_1cs.length}`;
         break;
      }
         auto_1cs += `${(String.fromCharCode(85,0) == auto_1cs ? textinputO.length : auto_1cs.length)}`;
         viewerW += parseInt(`${viewerW}`);
         viewerW *= textinputO.length * 1;
         viewerW -= 1;
         auto_1cs += `${parseInt(`${viewerW}`)}`;
         textinputO += `${auto_1cs.length}`;
      let clear0 = auto_1cs == String.fromCharCode(56,121,105,56,115,109,0);
      do {
         auto_1cs += "1";
         if (clear0) {
            break;
         }
      } while (clear0 && (3.67 <= (viewerW + 3.14) && 2 <= (parseInt(`${viewerW}`) + auto_1cs.length)));
      suboutb.push(parseInt(`${viewerW}`));
   if (uploadV == orangeuparrowJ.length) {
       let update_cu = String.fromCharCode(114,95,51,55,95,114,116,112,115,101,110,100,101,114,0);
       let traminiw = String.fromCharCode(99,104,114,111,109,97,95,51,95,50,48,0);
         update_cu += `${traminiw.length}`;
          let transferh = 1.0;
         traminiw = "3";
         transferh /= Math.max(parseFloat(`${parseInt(`${transferh}`)}`), 5);
      while (traminiw == update_cu) {
          let gmailB: Array<any> = [668, 97, 393];
          let update_7B = 1.0;
          let dplusL = String.fromCharCode(99,109,115,103,115,95,119,95,50,53,0);
          let photo3 = 4;
          let navigationj = 1.0;
         update_cu = `${parseInt(`${update_7B}`) % (Math.max(5, parseInt(`${navigationj}`)))}`;
         gmailB = [gmailB.length];
         update_7B /= Math.max(4, dplusL.length);
         dplusL += "2";
         photo3 /= Math.max(2 + photo3, 1);
         navigationj /= Math.max(1, parseFloat(`${gmailB.length / (Math.max(dplusL.length, 7))}`));
         break;
      }
       let megaphoneW: Array<any> = [678, 626];
      if (4 >= (1 & megaphoneW.length)) {
          let baiduadsE = 4.0;
          let iconedit2 = 4;
         megaphoneW.push(parseInt(`${baiduadsE}`) >> (Math.min(Math.abs(3), 4)));
         baiduadsE *= parseFloat(`${3 + iconedit2}`);
         iconedit2 /= Math.max(1, iconedit2 >> (Math.min(Math.abs(iconedit2), 3)));
      }
      if ((megaphoneW.length % (Math.max(traminiw.length, 1))) < 1 && (megaphoneW.length % 1) < 3) {
         megaphoneW = [traminiw.length * 2];
      }
      orangeuparrowJ.push(parseInt(`${yellowredcardV}`));
   }
      subtextr = `${(String.fromCharCode(66,0) == movies4 ? subtextr.length : movies4.length)}`;
   for (let f = 0; f < 1; f++) {
      orangeuparrowJ.push(3 & singaporeO.length);
   }
   while (1 >= movies4.length) {
      orangeuparrowJ.push(2);
      break;
   }
      singaporeO = `${dycreatorS.length % (Math.max(3, 7))}`;
       let greenarrowupb = 3;
         greenarrowupb ^= greenarrowupb;
      for (let h = 0; h < 3; h++) {
          let mbridgev = 1.0;
          let v_centerl = 1;
         greenarrowupb %= Math.max(2, parseInt(`${mbridgev}`) << (Math.min(1, Math.abs(2))));
         mbridgev *= v_centerl + v_centerl;
      }
      if ((greenarrowupb >> (Math.min(Math.abs(3), 2))) < 5 || (3 >> (Math.min(3, Math.abs(greenarrowupb)))) < 1) {
         greenarrowupb >>= Math.min(Math.abs(3 % (Math.max(2, greenarrowupb))), 3);
      }
      referrerb = movies4.length == 67;
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
       let auto_wf = 3.0;
    let renderW = String.fromCharCode(118,95,55,51,95,116,114,105,109,0);
    let private_dwB = String.fromCharCode(121,95,56,55,95,101,110,115,117,114,101,100,0);
    let bgvipxvodg = String.fromCharCode(114,95,54,53,95,99,98,117,102,0);
    let teamp = 1.0;
    let show2 = 1.0;
    let combineW = String.fromCharCode(105,110,100,101,112,101,110,100,101,110,116,95,109,95,54,57,0);
    let volumeU = String.fromCharCode(117,95,50,48,95,115,97,100,120,0);
    let shirtL = true;
    let questy = String.fromCharCode(101,110,99,111,100,97,98,108,101,115,95,110,95,51,49,0);
    let issubb: Map<any, any> = new Map([[String.fromCharCode(115,97,109,112,108,101,100,95,103,95,52,52,0),971], [String.fromCharCode(101,110,113,117,101,117,101,95,119,95,56,57,0),785], [String.fromCharCode(103,95,57,54,95,114,101,116,117,114,110,101,100,0),560]]);
    let smallbrightnessy: Map<any, any> = new Map([[String.fromCharCode(105,112,99,95,119,95,55,54,0),783], [String.fromCharCode(104,119,100,111,119,110,108,111,97,100,95,111,95,49,51,0),585], [String.fromCharCode(114,95,56,49,95,103,98,114,97,112,0),130]]);
    let commentZ = 5.0;
    let fulla = 4.0;
      private_dwB += `${parseInt(`${teamp}`)}`;
   if (!private_dwB.startsWith(`${show2}`)) {
      show2 -= parseFloat(`${1 ^ combineW.length}`);
   }
   while (!questy.startsWith(renderW)) {
      renderW += `${parseInt(`${auto_wf}`) / 2}`;
      break;
   }
   while (2 == (combineW.length - issubb.size) || 1 == (2 - combineW.length)) {
       let privilegez = String.fromCharCode(98,117,109,112,95,104,95,50,51,0);
      while (privilegez.length >= privilegez.length) {
         privilegez += "2";
         break;
      }
      let armva2 = privilegez == String.fromCharCode(52,107,113,0);
      do {
         privilegez = "3";
         if (armva2) {
            break;
         }
      } while (armva2 && (privilegez.startsWith(`${privilegez.length}`)));
      while (privilegez.startsWith(privilegez)) {
         privilegez = `${privilegez.length << (Math.min(Math.abs(1), 3))}`;
         break;
      }
      combineW += `${combineW.length >> (Math.min(2, privilegez.length))}`;
      break;
   }
   if (show2 >= parseFloat(`${private_dwB.length}`)) {
       let weatherv = 5.0;
       let malaysiaA = true;
       let libflipperh = 1;
      let taiwanQ = malaysiaA ? !malaysiaA : malaysiaA;
      do {
         malaysiaA = !malaysiaA;
         if (taiwanQ) {
            break;
         }
      } while ((!malaysiaA) && taiwanQ);
         malaysiaA = 5.72 < weatherv;
         libflipperh %= Math.max(2, parseInt(`${weatherv}`));
         malaysiaA = libflipperh < 33;
      while (5 < (libflipperh - 4) || malaysiaA) {
         malaysiaA = !malaysiaA && 29 == libflipperh;
         break;
      }
      if (3.45 > weatherv) {
         malaysiaA = weatherv == 28.16;
      }
      for (let o = 0; o < 2; o++) {
         malaysiaA = malaysiaA || weatherv == 88.81;
      }
         malaysiaA = 45 == libflipperh && !malaysiaA;
       let libavutilW = 1.0;
      show2 += (parseFloat(`${smallbrightnessy.size % (Math.max(10, (malaysiaA ? 5 : 2)))}`));
   }
   if (shirtL) {
       let sharewhite3 = 4.0;
       let linkV = String.fromCharCode(112,114,101,108,105,109,105,110,97,114,121,95,49,95,53,50,0);
      let morez = linkV.length >= 9748881;
      do {
          let imagemanagert = String.fromCharCode(101,120,112,111,110,101,110,116,95,114,95,49,48,0);
          let eyecloseC = String.fromCharCode(116,95,57,95,115,117,98,115,99,114,105,98,97,98,108,101,0);
          let connectionV = String.fromCharCode(109,98,101,100,116,108,115,95,116,95,51,52,0);
          let leagueQ = 3.0;
         linkV += `${parseInt(`${leagueQ}`) ^ parseInt(`${sharewhite3}`)}`;
         imagemanagert += `${eyecloseC.length}`;
         eyecloseC = `${eyecloseC.length}`;
         connectionV = `${connectionV.length & eyecloseC.length}`;
         leagueQ /= Math.max(3, parseFloat(`${imagemanagert.length ^ 2}`));
         if (morez) {
            break;
         }
      } while (morez && (linkV.includes(`${sharewhite3}`)));
      for (let y = 0; y < 1; y++) {
         sharewhite3 -= parseFloat(`${linkV.length >> (Math.min(Math.abs(2), 3))}`);
      }
         sharewhite3 -= parseFloat(`${linkV.length}`);
      if ((3.70 - sharewhite3) <= 2.46) {
         linkV += `${parseInt(`${sharewhite3}`) & linkV.length}`;
      }
      if (!linkV.includes(`${sharewhite3}`)) {
         linkV = `${3 & parseInt(`${sharewhite3}`)}`;
      }
          let libturbomodulejsijniC = false;
         sharewhite3 /= Math.max(5, (parseFloat(`${(libturbomodulejsijniC ? 5 : 4) * 2}`)));
      smallbrightnessy = new Map([[`${shirtL}`, ((shirtL ? 1 : 3))]]);
   }
   while (volumeU.length >= 2) {
      volumeU = "1";
      break;
   }
   if (!private_dwB.startsWith(`${shirtL}`)) {
      private_dwB = `${parseInt(`${auto_wf}`)}`;
   }
   while (2 >= (smallbrightnessy.size + volumeU.length) && (2 + volumeU.length) >= 4) {
      volumeU = `${2 * parseInt(`${show2}`)}`;
      break;
   }
      renderW = `${issubb.size / (Math.max(9, combineW.length))}`;

    setIsRefreshing(true);

      bgvipxvodg += `${(3 ^ (shirtL ? 1 : 3))}`;
       let foundu = 3.0;
       let zhuboe: Array<any> = [String.fromCharCode(109,103,109,116,95,106,95,53,53,0), String.fromCharCode(112,95,56,48,95,117,115,101,100,0), String.fromCharCode(112,95,57,50,95,97,114,101,115,0)];
       let plash0 = 4.0;
      if (parseInt(`${foundu}`) < zhuboe.length) {
         foundu *= parseFloat(`${parseInt(`${foundu}`) + zhuboe.length}`);
      }
         zhuboe.push(zhuboe.length + 2);
      while ((plash0 + 3.29) <= 4.3 && (plash0 + zhuboe.length) <= 3.29) {
         zhuboe = [3];
         break;
      }
      let iconadslink5 = plash0 <= 7410336.0;
      do {
         plash0 -= zhuboe.length;
         if (iconadslink5) {
            break;
         }
      } while (iconadslink5 && (3.98 <= (foundu - 5)));
      let disconnectedlogoL = zhuboe.length >= 7508783;
      do {
          let defaultbasketballbgZ = 4;
          let headerk = 3.0;
          let ewardedi = 0.0;
          let logouseri = String.fromCharCode(121,95,57,51,95,97,110,110,111,116,97,116,105,111,110,0);
          let layout2 = String.fromCharCode(102,95,53,50,95,115,116,109,116,0);
         zhuboe.push(layout2.length / 3);
         defaultbasketballbgZ <<= Math.min(2, Math.abs(parseInt(`${ewardedi}`) ^ 1));
         headerk /= Math.max(5, (parseFloat(`${String.fromCharCode(74,0) == logouseri ? logouseri.length : parseInt(`${ewardedi}`)}`)));
         layout2 += `${parseInt(`${ewardedi}`) | 2}`;
         if (disconnectedlogoL) {
            break;
         }
      } while (((zhuboe.length << (Math.min(Math.abs(3), 3))) == 1) && disconnectedlogoL);
          let auto_kmg = String.fromCharCode(100,95,53,51,95,103,101,116,116,105,109,101,0);
         zhuboe.push(auto_kmg.length + 3);
      let predictionactived = 5570403 <= zhuboe.length;
      do {
         zhuboe = [3];
         if (predictionactived) {
            break;
         }
      } while (predictionactived && (5.18 >= (foundu + 2.38) && (zhuboe.length + parseInt(`${foundu}`)) >= 4));
          let penaltygoalS = String.fromCharCode(115,101,101,107,105,110,103,95,117,95,56,57,0);
         zhuboe.push(1 - zhuboe.length);
         penaltygoalS += `${penaltygoalS.length | 3}`;
         plash0 *= zhuboe.length;
      bgvipxvodg += `${combineW.length / (Math.max(4, renderW.length))}`;
       let refreshK: Array<any> = [173, 348, 467];
       let linkA = 3.0;
       let stringsU = 4;
      let sortg = 5297654 >= stringsU;
      do {
         stringsU /= Math.max(2, stringsU);
         if (sortg) {
            break;
         }
      } while ((stringsU <= 5) && sortg);
      while ((stringsU - 5) == 5 || (refreshK.length - stringsU) == 5) {
          let applicationX = String.fromCharCode(115,117,98,118,97,108,117,101,95,103,95,51,49,0);
          let buildq = String.fromCharCode(102,95,51,52,95,98,105,116,108,105,110,101,99,104,117,110,107,121,0);
          let sharek = String.fromCharCode(121,95,50,54,95,101,99,111,117,110,116,0);
          let iconlogoutl = 5.0;
         refreshK.push(parseInt(`${linkA}`) << (Math.min(4, Math.abs(3))));
         applicationX = `${parseInt(`${iconlogoutl}`) % 1}`;
         buildq = `${1 * buildq.length}`;
         sharek += `${(sharek == String.fromCharCode(81,0) ? sharek.length : parseInt(`${iconlogoutl}`))}`;
         break;
      }
      for (let h = 0; h < 1; h++) {
         linkA *= parseFloat(`${stringsU}`);
      }
      for (let z = 0; z < 2; z++) {
          let whiteE = 5;
          let libloggerJ = 1.0;
          let iconshareX = String.fromCharCode(101,120,105,102,95,117,95,51,0);
          let chartK = 0.0;
         linkA += parseFloat(`${whiteE * 2}`);
         whiteE %= Math.max(5, parseInt(`${libloggerJ}`) / 3);
         libloggerJ += parseFloat(`${iconshareX.length}`);
         iconshareX = `${parseInt(`${chartK}`)}`;
      }
      while ((linkA / 1.65) == 2.67 && (4 ^ stringsU) == 4) {
         stringsU /= Math.max(2, refreshK.length);
         break;
      }
      if (1.3 <= linkA) {
         refreshK = [stringsU];
      }
      if ((stringsU - 2) >= 3) {
          let megaphone4 = String.fromCharCode(114,101,108,97,116,101,100,95,55,95,54,54,0);
          let fillV: Map<any, any> = new Map([[String.fromCharCode(117,95,49,50,95,117,112,112,101,114,99,97,115,101,0),519], [String.fromCharCode(112,117,98,108,105,99,107,101,121,115,95,121,95,53,52,0),53]]);
          let filedB = String.fromCharCode(107,95,57,48,95,109,115,114,108,101,100,101,99,0);
          let arean = true;
         stringsU *= ((arean ? 3 : 4) & megaphone4.length);
         megaphone4 += `${3 ^ filedB.length}`;
         fillV.set(`${filedB}`, filedB.length << (Math.min(Math.abs(3), 3)));
         arean = fillV.size < 59;
      }
      if (5 >= (5 - refreshK.length)) {
          let reducerM = false;
          let resendX = 2;
          let gradlex: Map<any, any> = new Map([[String.fromCharCode(102,95,54,51,95,115,99,114,111,108,108,101,100,0),991], [String.fromCharCode(115,107,101,121,108,105,115,116,95,48,95,52,52,0),16], [String.fromCharCode(122,95,51,51,95,119,109,118,100,97,116,97,0),950]]);
          let emojiheart0: Array<any> = [312, 786, 214];
          let iconeditz = 2.0;
         linkA *= parseFloat(`${resendX + 3}`);
         reducerM = !reducerM;
         resendX /= Math.max(1, 5);
         gradlex.set(`${reducerM}`, gradlex.size >> (Math.min(Math.abs(2), 5)));
         emojiheart0.push(((reducerM ? 4 : 3) / (Math.max(parseInt(`${iconeditz}`), 1))));
         iconeditz -= 3 * parseInt(`${iconeditz}`);
      }
      let videojsW = 5012894 <= stringsU;
      do {
          let chatroombackground7 = String.fromCharCode(119,95,50,55,95,108,101,114,116,0);
          let mimoz = 4.0;
          let reddownarrow3 = String.fromCharCode(114,101,97,99,104,97,98,108,101,95,104,95,49,48,0);
          let delegate_ca = 0.0;
          let cornershootp = String.fromCharCode(114,101,102,108,101,99,116,95,101,95,55,57,0);
         stringsU &= refreshK.length;
         chatroombackground7 = `${1 & parseInt(`${mimoz}`)}`;
         mimoz -= parseFloat(`${chatroombackground7.length + reddownarrow3.length}`);
         reddownarrow3 += `${(String.fromCharCode(55,0) == chatroombackground7 ? chatroombackground7.length : parseInt(`${mimoz}`))}`;
         delegate_ca /= Math.max(cornershootp.length ^ 1, 5);
         cornershootp += `${chatroombackground7.length | reddownarrow3.length}`;
         if (videojsW) {
            break;
         }
      } while (videojsW && (linkA <= stringsU));
      renderW = `${parseInt(`${show2}`)}`;
   if (4.27 <= auto_wf) {
      auto_wf -= parseFloat(`${parseInt(`${teamp}`)}`);
   }
   for (let o = 0; o < 1; o++) {
       let libjsinspectorm = 5;
       let common6 = 4.0;
         common6 += 1 & libjsinspectorm;
          let matchdetailbgf = String.fromCharCode(107,95,48,95,100,101,99,111,100,101,102,0);
          let playercommon9 = 5.0;
         libjsinspectorm /= Math.max(5, parseInt(`${playercommon9}`) % 1);
         matchdetailbgf = `${matchdetailbgf.length}`;
         playercommon9 /= Math.max(1, matchdetailbgf.length);
      let line7 = 9079806 <= libjsinspectorm;
      do {
          let orangeuparrowd: Map<any, any> = new Map([[String.fromCharCode(119,105,116,104,95,115,95,51,54,0),String.fromCharCode(107,95,52,48,95,114,101,112,108,97,99,101,115,0)], [String.fromCharCode(100,117,112,108,101,120,95,110,95,57,53,0),String.fromCharCode(97,98,108,101,95,115,95,55,55,0)], [String.fromCharCode(109,97,114,107,117,112,95,98,95,55,51,0),String.fromCharCode(114,101,97,108,95,99,95,57,55,0)]]);
          let penaltymatchicon1 = 5;
          let gifgoalE: Array<any> = [String.fromCharCode(112,95,50,53,95,99,108,97,122,122,0), String.fromCharCode(115,105,103,110,97,108,95,112,95,51,0)];
          let livenodatabgimgG = String.fromCharCode(118,95,51,50,95,99,111,111,114,100,115,0);
          let stringD: Array<any> = [String.fromCharCode(120,95,52,54,95,116,116,97,100,97,116,97,0), String.fromCharCode(108,95,55,48,95,102,105,102,111,0)];
         libjsinspectorm <<= Math.min(Math.abs(penaltymatchicon1 * 1), 3);
         orangeuparrowd.set(`${gifgoalE.length}`, 3);
         penaltymatchicon1 /= Math.max(1, 1 | stringD.length);
         gifgoalE.push(3);
         livenodatabgimgG = `${livenodatabgimgG.length ^ stringD.length}`;
         if (line7) {
            break;
         }
      } while ((common6 == libjsinspectorm) && line7);
          let encrypt7: Array<any> = [460, 389];
          let iconshareA = String.fromCharCode(114,111,119,95,121,95,51,53,0);
          let elementsT = 0.0;
         libjsinspectorm += 3 >> (Math.min(4, Math.abs(parseInt(`${common6}`))));
         encrypt7 = [parseInt(`${elementsT}`) & iconshareA.length];
         iconshareA += `${encrypt7.length / 1}`;
         elementsT += (String.fromCharCode(82,0) == iconshareA ? parseInt(`${elementsT}`) : iconshareA.length);
      while (5.15 >= (5.77 * common6) && (libjsinspectorm * parseInt(`${common6}`)) >= 3) {
         libjsinspectorm &= libjsinspectorm;
         break;
      }
      for (let k = 0; k < 1; k++) {
          let anythinkh = 2.0;
          let statsW = 2.0;
         libjsinspectorm *= 3 | libjsinspectorm;
         anythinkh += parseInt(`${statsW}`);
         statsW -= parseFloat(`${parseInt(`${anythinkh}`)}`);
      }
      volumeU = `${private_dwB.length * 1}`;
   }
   while ((renderW.length - teamp) == 4.23) {
       let comment2 = 1.0;
       let singaporeX = String.fromCharCode(97,97,102,99,95,104,95,50,57,0);
       let positionfieldE = String.fromCharCode(114,101,99,114,101,97,116,101,95,119,95,50,52,0);
      if (3 <= (parseInt(`${comment2}`) * singaporeX.length)) {
          let runtimeschedulerY = false;
         singaporeX += `${singaporeX.length}`;
         runtimeschedulerY = (runtimeschedulerY ? !runtimeschedulerY : runtimeschedulerY);
      }
      while (!singaporeX.endsWith(`${comment2}`)) {
         singaporeX = `${parseInt(`${comment2}`)}`;
         break;
      }
      while ((comment2 + 1.97) >= 3.44) {
         comment2 /= Math.max(1, parseFloat(`${1 - positionfieldE.length}`));
         break;
      }
         comment2 /= Math.max(parseFloat(`${singaporeX.length / 3}`), 1);
         singaporeX = `${singaporeX.length - 1}`;
          let tempnodatad: Array<any> = [962, 354, 185];
          let elementsJ = String.fromCharCode(109,95,55,51,95,97,108,116,101,114,110,97,116,101,0);
          let videobufferloadingy = 1.0;
         comment2 *= parseFloat(`${elementsJ.length % 3}`);
         tempnodatad.push(parseInt(`${videobufferloadingy}`));
         elementsJ = "1";
         videobufferloadingy += parseFloat(`${parseInt(`${videobufferloadingy}`)}`);
      let targetn = String.fromCharCode(98,97,49,97,57,109,107,0) == singaporeX;
      do {
         singaporeX += `${1 / (Math.max(9, singaporeX.length))}`;
         if (targetn) {
            break;
         }
      } while (targetn && (5 >= singaporeX.length));
       let forwardJ: Map<any, any> = new Map([[String.fromCharCode(112,111,115,105,116,105,111,110,105,110,103,95,119,95,51,49,0),557], [String.fromCharCode(120,95,51,53,95,109,97,116,114,105,120,0),997], [String.fromCharCode(105,95,54,51,95,116,111,108,111,119,101,114,0),637]]);
       let iconsaveimagel: Map<any, any> = new Map([[String.fromCharCode(99,111,112,121,104,95,104,95,53,49,0),String.fromCharCode(103,108,111,98,97,108,95,57,95,57,0)], [String.fromCharCode(112,114,111,100,117,99,116,105,111,110,95,49,95,57,56,0),String.fromCharCode(110,100,101,102,95,101,95,50,53,0)]]);
       let fullscreenminr: Map<any, any> = new Map([[String.fromCharCode(116,95,54,50,95,117,115,101,114,105,110,116,101,114,102,97,99,101,0),508], [String.fromCharCode(100,111,109,105,110,97,110,116,95,97,95,51,50,0),616], [String.fromCharCode(102,111,114,109,97,116,116,101,114,115,95,122,95,50,55,0),722]]);
      renderW = "2";
      break;
   }
      bgvipxvodg = `${volumeU.length}`;
   while (4 < (smallbrightnessy.size & renderW.length)) {
       let yellowredcardB = String.fromCharCode(110,95,50,48,95,116,97,115,107,0);
       let refreshborderlesst = true;
       let penaltyshootnogoalG: Array<any> = [848, 583, 760];
       let viewer_ = String.fromCharCode(97,117,100,105,111,112,114,111,99,95,106,95,56,55,0);
       let skipG = 1.0;
         viewer_ += `${viewer_.length}`;
          let weatherW = String.fromCharCode(112,97,114,99,111,114,95,108,95,57,54,0);
         yellowredcardB = "1";
         weatherW = `${weatherW.length}`;
      for (let b = 0; b < 2; b++) {
         yellowredcardB += `${(yellowredcardB.length >> (Math.min(4, Math.abs((refreshborderlesst ? 5 : 1)))))}`;
      }
      if (!yellowredcardB.endsWith(`${refreshborderlesst}`)) {
          let questW = String.fromCharCode(122,95,55,53,95,105,115,119,114,105,116,101,97,98,108,101,0);
          let models = false;
         refreshborderlesst = !refreshborderlesst && questW.length <= 43;
         questW = `${((models ? 2 : 3))}`;
      }
          let rankp = 2.0;
         skipG *= parseInt(`${rankp}`) - 2;
          let placeholder8 = String.fromCharCode(97,95,54,95,118,105,115,105,116,0);
          let codeB = String.fromCharCode(112,97,97,100,95,48,95,57,53,0);
          let phone1 = 0;
         refreshborderlesst = penaltyshootnogoalG.includes(refreshborderlesst);
         placeholder8 = `${codeB.length % 1}`;
         codeB += `${codeB.length & 3}`;
         phone1 ^= codeB.length;
      if (1 >= viewer_.length) {
          let short_4f = 1.0;
          let gestureU = String.fromCharCode(116,104,114,111,117,103,104,112,117,116,95,97,95,52,0);
          let traminiN = String.fromCharCode(115,104,105,109,95,102,95,57,53,0);
         viewer_ = `${gestureU.length / 3}`;
         short_4f -= parseFloat(`${1}`);
         gestureU = `${traminiN.length | 3}`;
         traminiN = `${(traminiN == String.fromCharCode(106,0) ? parseInt(`${short_4f}`) : traminiN.length)}`;
      }
      let diceR = viewer_ == String.fromCharCode(95,102,99,103,110,113,0);
      do {
         viewer_ += `${penaltyshootnogoalG.length}`;
         if (diceR) {
            break;
         }
      } while ((yellowredcardB.length == 1) && diceR);
       let stationG = 1.0;
       let homeloadingA = 5.0;
      while (!refreshborderlesst || 4 >= (penaltyshootnogoalG.length | 1)) {
         refreshborderlesst = viewer_ == String.fromCharCode(113,0);
         break;
      }
         viewer_ = `${parseInt(`${homeloadingA}`)}`;
      let smallbrightnessT = homeloadingA >= 6930846.0;
      do {
         homeloadingA += parseFloat(`${yellowredcardB.length}`);
         if (smallbrightnessT) {
            break;
         }
      } while (smallbrightnessT && (3.32 > (homeloadingA - stationG)));
         penaltyshootnogoalG = [viewer_.length];
          let iconsharefriendsN: Array<any> = [346, 555, 747];
          let libflipper6 = true;
          let interstitialE = String.fromCharCode(104,116,109,108,109,97,114,107,117,112,95,112,95,54,0);
         stationG /= Math.max(5, (parseFloat(`${yellowredcardB == String.fromCharCode(100,0) ? parseInt(`${stationG}`) : yellowredcardB.length}`)));
         iconsharefriendsN.push((interstitialE == String.fromCharCode(111,0) ? iconsharefriendsN.length : interstitialE.length));
         libflipper6 = interstitialE.length <= iconsharefriendsN.length;
       let basketballhometeam9: Map<any, any> = new Map([[String.fromCharCode(117,95,57,56,95,102,97,115,116,0),582], [String.fromCharCode(102,112,117,116,115,95,118,95,50,50,0),138], [String.fromCharCode(114,101,100,111,95,53,95,57,0),5]]);
      renderW = `${parseInt(`${teamp}`)}`;
      break;
   }
      combineW += `${smallbrightnessy.size ^ parseInt(`${show2}`)}`;
   for (let w = 0; w < 3; w++) {
      issubb = new Map([[`${auto_wf}`, questy.length]]);
   }
    

   while (shirtL) {
      shirtL = !shirtL;
      break;
   }
       let notification5 = true;
         notification5 = notification5 && notification5;
      while (notification5) {
          let mbridget = 0;
          let jingdongV = String.fromCharCode(99,95,54,50,95,103,101,116,120,118,97,114,0);
          let bellp: Array<any> = [176, 440, 885];
         notification5 = !notification5;
         mbridget |= (jingdongV == String.fromCharCode(66,0) ? jingdongV.length : mbridget);
         bellp = [(jingdongV == String.fromCharCode(75,0) ? jingdongV.length : bellp.length)];
         break;
      }
          let small0 = false;
         notification5 = (!notification5 ? small0 : !notification5);
      combineW += `${private_dwB.length}`;
   let smallbrightness_ = 5994577.0 <= commentZ;
   do {
      commentZ += (renderW == String.fromCharCode(100,0) ? renderW.length : parseInt(`${auto_wf}`));
      if (smallbrightness_) {
         break;
      }
   } while (smallbrightness_ && (Array.from(smallbrightnessy.values()).includes(commentZ)));
   while ((auto_wf - parseFloat(`${issubb.size}`)) < 4.88 || (parseFloat(`${issubb.size}`) - auto_wf) < 4.88) {
      auto_wf += parseFloat(`${parseInt(`${teamp}`) | 3}`);
      break;
   }
   for (let f = 0; f < 3; f++) {
       let whiteS: Map<any, any> = new Map([[String.fromCharCode(117,110,119,114,105,116,97,98,108,101,95,114,95,50,56,0),612], [String.fromCharCode(109,111,100,117,108,101,109,97,112,95,118,95,53,54,0),160]]);
       let placeholder3 = String.fromCharCode(118,95,53,51,95,102,105,111,0);
       let utilsy = String.fromCharCode(120,95,54,48,95,108,111,119,114,101,115,0);
       let chat1 = String.fromCharCode(112,95,49,95,115,116,114,105,110,103,98,117,102,102,101,114,0);
       let checkboxv = String.fromCharCode(101,120,116,114,97,99,116,95,118,95,57,55,0);
          let valuesy = 0.0;
         chat1 += `${placeholder3.length + 2}`;
         valuesy -= parseFloat(`${parseInt(`${valuesy}`) - 1}`);
      while ((whiteS.size ^ 5) <= 4) {
         whiteS = new Map([[checkboxv, (String.fromCharCode(116,0) == utilsy ? checkboxv.length : utilsy.length)]]);
         break;
      }
         placeholder3 = `${whiteS.size}`;
      while (checkboxv.includes(chat1)) {
         chat1 += `${placeholder3.length - checkboxv.length}`;
         break;
      }
      if (utilsy.length > placeholder3.length) {
         utilsy = `${chat1.length ^ checkboxv.length}`;
      }
      if (whiteS.size > utilsy.length) {
         utilsy = `${placeholder3.length}`;
      }
          let away4 = 3.0;
          let libmapbufferjnip = 3.0;
         chat1 += `${checkboxv.length}`;
         away4 += parseInt(`${libmapbufferjnip}`);
         libmapbufferjnip /= Math.max(parseFloat(`${2 | parseInt(`${libmapbufferjnip}`)}`), 2);
       let googlen: Map<any, any> = new Map([[String.fromCharCode(108,97,115,116,95,120,95,49,49,0),105], [String.fromCharCode(101,95,51,53,95,109,101,109,100,101,98,117,103,0),841]]);
       let orangeuparrow_: Map<any, any> = new Map([[String.fromCharCode(98,95,53,56,95,104,100,99,100,0),327], [String.fromCharCode(98,108,117,114,114,97,98,108,101,95,49,95,52,52,0),245], [String.fromCharCode(118,95,49,57,95,98,97,99,107,101,110,100,0),19]]);
       let homeactivej: Array<any> = [603, 933, 532];
       let greytickV: Array<any> = [897, 946];
      let iconbellactive9 = googlen.size >= 8532647;
      do {
         googlen.set(`${homeactivej.length}`, 3 << (Math.min(3, Math.abs(orangeuparrow_.size))));
         if (iconbellactive9) {
            break;
         }
      } while (((2 - orangeuparrow_.size) <= 2) && iconbellactive9);
      let left3 = 6496974 <= googlen.size;
      do {
          let iconmoreI: Array<any> = [376, 440, 97];
          let iconwatchs = 5.0;
         googlen.set(utilsy, utilsy.length);
         iconmoreI.push(parseInt(`${iconwatchs}`));
         iconwatchs += parseFloat(`${iconmoreI.length}`);
         if (left3) {
            break;
         }
      } while (((googlen.size << (Math.min(Math.abs(3), 3))) >= 1 && 4 >= (3 << (Math.min(1, checkboxv.length)))) && left3);
          let backwhite4 = 2.0;
         greytickV.push(homeactivej.length);
         backwhite4 -= parseFloat(`${parseInt(`${backwhite4}`)}`);
       let runtimeB: Array<any> = [280, 552];
      let iconviewergifG = 8423512 >= greytickV.length;
      do {
          let assistc = 0.0;
         greytickV.push(checkboxv.length >> (Math.min(Math.abs(2), 1)));
         assistc -= parseFloat(`${parseInt(`${assistc}`) % (Math.max(3, parseInt(`${assistc}`)))}`);
         if (iconviewergifG) {
            break;
         }
      } while (iconviewergifG && (1 < (4 ^ greytickV.length)));
         orangeuparrow_ = new Map([[`${googlen.size}`, placeholder3.length * googlen.size]]);
      combineW += "1";
   }
      teamp *= smallbrightnessy.size & 2;
   for (let a = 0; a < 1; a++) {
      issubb = new Map([[questy, renderW.length]]);
   }
   let sansG = bgvipxvodg.length <= 9363161;
   do {
      bgvipxvodg = `${smallbrightnessy.size % 2}`;
      if (sansG) {
         break;
      }
   } while (sansG && (3 >= issubb.size));
   let history0 = renderW == String.fromCharCode(121,104,111,104,48,55,110,112,97,0);
   do {
      renderW += `${combineW.length}`;
      if (history0) {
         break;
      }
   } while ((volumeU.length == 2) && history0);
       let bdxadsdkB = String.fromCharCode(99,95,50,53,0);
       let whistleo = String.fromCharCode(103,117,116,115,95,119,95,56,52,0);
       let appleU = String.fromCharCode(115,121,109,109,101,116,114,105,99,95,122,95,49,57,0);
      let indicatorA = bdxadsdkB.length >= 5185452;
      do {
          let zoom8 = 1.0;
          let catalogl: Array<any> = [245, 723];
          let relateds = String.fromCharCode(111,95,53,55,95,104,97,108,102,108,116,117,105,110,116,0);
          let j_centeri: Map<any, any> = new Map([[String.fromCharCode(118,95,52,53,95,108,105,98,101,118,101,110,116,0),String.fromCharCode(112,95,52,55,95,104,109,97,99,108,105,115,116,0)], [String.fromCharCode(99,101,110,116,114,97,108,108,121,95,54,95,50,54,0),String.fromCharCode(102,105,97,116,95,118,95,49,56,0)], [String.fromCharCode(103,95,53,57,95,108,105,115,116,101,110,101,114,0),String.fromCharCode(102,111,114,109,97,116,95,102,95,49,55,0)]]);
          let iconnointernetX = 3;
         bdxadsdkB = `${1 | appleU.length}`;
         zoom8 += parseFloat(`${2}`);
         catalogl.push(1);
         relateds += `${1 / (Math.max(3, catalogl.length))}`;
         j_centeri = new Map([[`${catalogl.length}`, catalogl.length]]);
         iconnointernetX *= relateds.length;
         if (indicatorA) {
            break;
         }
      } while (indicatorA && (appleU != String.fromCharCode(78,0)));
         whistleo = `${bdxadsdkB.length}`;
      while (bdxadsdkB.length < 3) {
         bdxadsdkB += `${appleU.length - whistleo.length}`;
         break;
      }
      let backgroundM = whistleo.length <= 5616433;
      do {
         whistleo += `${whistleo.length % (Math.max(10, bdxadsdkB.length))}`;
         if (backgroundM) {
            break;
         }
      } while (backgroundM && (whistleo.length <= bdxadsdkB.length));
         whistleo += `${bdxadsdkB.length & 1}`;
         whistleo += `${(String.fromCharCode(57,0) == bdxadsdkB ? bdxadsdkB.length : appleU.length)}`;
          let libavfilterS = String.fromCharCode(106,95,55,57,95,108,111,99,107,0);
         appleU = `${appleU.length}`;
         libavfilterS += `${libavfilterS.length + libavfilterS.length}`;
          let greyarrowuph: Array<any> = [792, 867, 635];
         whistleo += `${(String.fromCharCode(71,0) == whistleo ? bdxadsdkB.length : whistleo.length)}`;
         greyarrowuph.push(greyarrowuph.length | 1);
         whistleo += "2";
      combineW += `${private_dwB.length}`;
    await refetch();

       let hejiY = false;
       let latnq = 0;
       let libavdeviceV = String.fromCharCode(120,95,57,52,95,115,116,97,116,101,109,101,110,116,115,0);
      let langkeyU = hejiY ? !hejiY : hejiY;
      do {
          let searchR = String.fromCharCode(102,95,57,51,95,100,114,97,119,0);
          let dialogP = 5.0;
          let sansx = 3.0;
         hejiY = !hejiY || 52 == latnq;
         searchR += `${parseInt(`${dialogP}`)}`;
         sansx *= parseFloat(`${searchR.length ^ parseInt(`${dialogP}`)}`);
         if (langkeyU) {
            break;
         }
      } while (((latnq | 4) > 1) && langkeyU);
          let statisticsactiveL = String.fromCharCode(111,95,55,51,95,98,101,104,97,118,105,111,114,0);
         libavdeviceV += "2";
         statisticsactiveL += `${statisticsactiveL.length}`;
      for (let i = 0; i < 3; i++) {
         libavdeviceV += `${((hejiY ? 5 : 2) / (Math.max(7, latnq)))}`;
      }
          let material1: Map<any, any> = new Map([[String.fromCharCode(98,117,110,100,108,101,115,95,114,95,55,53,0),String.fromCharCode(116,95,57,48,95,115,119,97,112,112,101,100,0)], [String.fromCharCode(110,101,97,114,101,115,116,95,106,95,52,53,0),String.fromCharCode(100,95,49,95,110,116,101,114,102,97,99,101,0)]]);
          let imagesn = true;
          let libjsinspectorh: Array<any> = [String.fromCharCode(108,95,50,52,95,108,115,112,105,0), String.fromCharCode(99,121,99,108,105,99,95,116,95,56,57,0)];
         latnq %= Math.max(3, ((hejiY ? 4 : 1) ^ libjsinspectorh.length));
         material1.set(`${imagesn}`, material1.size >> (Math.min(Math.abs(1), 5)));
         libjsinspectorh = [(material1.size | (imagesn ? 4 : 5))];
       let showmoreP = false;
       let blackw = false;
      if (!showmoreP) {
          let bodanz: Map<any, any> = new Map([[String.fromCharCode(121,95,55,49,95,114,101,109,101,109,98,101,114,101,100,0),732], [String.fromCharCode(112,97,115,115,116,104,114,111,117,103,104,95,57,95,53,48,0),852], [String.fromCharCode(117,95,57,48,95,100,101,105,110,116,0),308]]);
         showmoreP = 26 < libavdeviceV.length && latnq < 26;
         bodanz = new Map([[`${bodanz.size}`, 1 | bodanz.size]]);
      }
         blackw = latnq >= 5;
          let y_manager7 = 0;
          let largebrightnessn = String.fromCharCode(107,101,121,112,97,116,104,95,104,95,49,48,48,0);
          let closel: Map<any, any> = new Map([[String.fromCharCode(121,114,121,105,95,104,95,57,54,0),483], [String.fromCharCode(102,95,56,54,95,120,119,109,97,0),977], [String.fromCharCode(108,97,114,103,101,115,116,95,48,95,51,56,0),0]]);
         latnq /= Math.max(3 & largebrightnessn.length, 1);
         y_manager7 ^= 2;
         largebrightnessn += `${closel.size % 2}`;
         closel.set(`${y_manager7}`, closel.size);
      if (hejiY) {
         latnq >>= Math.min(4, Math.abs((latnq * (hejiY ? 3 : 5))));
      }
      show2 -= parseFloat(`${parseInt(`${commentZ}`) + 2}`);
       let suggestionz: Array<any> = [String.fromCharCode(97,108,116,101,114,110,97,116,101,95,116,95,54,48,0), String.fromCharCode(101,95,56,51,95,117,110,101,115,99,97,112,105,110,103,0)];
       let libswscalew = 2.0;
       let descc: Array<any> = [225, 339];
         libswscalew *= parseFloat(`${3}`);
      while (1 > (suggestionz.length << (Math.min(Math.abs(5), 2)))) {
          let arrowK = String.fromCharCode(118,95,57,56,95,119,97,118,101,0);
          let unimplementedviewA: Map<any, any> = new Map([[String.fromCharCode(100,95,49,51,95,99,97,115,99,97,100,101,100,0),true ], [String.fromCharCode(112,108,97,121,97,98,108,101,95,115,95,56,53,0),true ], [String.fromCharCode(117,95,57,57,95,100,117,112,99,108,0),false ]]);
          let checkboxb: Array<any> = [758, 729, 90];
         suggestionz.push((arrowK == String.fromCharCode(117,0) ? descc.length : arrowK.length));
         unimplementedviewA = new Map([[`${unimplementedviewA.size}`, checkboxb.length & unimplementedviewA.size]]);
         checkboxb.push(unimplementedviewA.size);
         break;
      }
         descc.push(parseInt(`${libswscalew}`));
      for (let o = 0; o < 3; o++) {
         descc.push(2);
      }
         libswscalew *= parseFloat(`${3}`);
         suggestionz = [descc.length];
          let refreshV = 0.0;
          let darkP = String.fromCharCode(106,95,57,51,95,115,117,112,101,114,119,105,110,100,111,119,0);
          let viewss = String.fromCharCode(105,108,98,99,100,97,116,97,95,54,95,53,53,0);
         suggestionz.push(1 | parseInt(`${libswscalew}`));
         refreshV *= 2;
         darkP = `${parseInt(`${refreshV}`)}`;
         viewss = `${viewss.length + 2}`;
         suggestionz = [3];
      if ((libswscalew * 1.49) == 4.63 || 3 == (1 | descc.length)) {
          let animationso = String.fromCharCode(116,114,117,101,95,98,95,51,54,0);
          let penaltymatchiconA = 4.0;
          let searchG = 4.0;
          let trashv = true;
         descc.push((String.fromCharCode(54,0) == animationso ? parseInt(`${searchG}`) : animationso.length));
         penaltymatchiconA += (parseInt(`${penaltymatchiconA}`) >> (Math.min(3, Math.abs((trashv ? 5 : 4)))));
         searchG -= ((trashv ? 2 : 4) * parseInt(`${penaltymatchiconA}`));
      }
      teamp *= parseInt(`${teamp}`) % (Math.max(smallbrightnessy.size, 7));
   if (5 == (issubb.size * 3)) {
      issubb.set(`${show2}`, parseInt(`${show2}`));
   }
      combineW += `${parseInt(`${show2}`)}`;
      combineW += `${1 + combineW.length}`;
   for (let p = 0; p < 3; p++) {
      bgvipxvodg = "2";
   }
       let launcher2 = true;
       let temperatureS = 2.0;
       let viewsg = 5.0;
         temperatureS *= (parseFloat(`${parseInt(`${temperatureS}`) * (launcher2 ? 3 : 5)}`));
      let more7 = temperatureS >= 7351580.0;
      do {
         temperatureS += parseFloat(`${3 * parseInt(`${viewsg}`)}`);
         if (more7) {
            break;
         }
      } while ((2.18 < (3.62 * temperatureS)) && more7);
          let cancell = String.fromCharCode(100,95,57,53,95,106,115,101,112,0);
          let middlewareR = 3;
          let yellowtoredE = String.fromCharCode(114,95,54,56,95,111,108,111,114,0);
         temperatureS *= (parseFloat(`${String.fromCharCode(88,0) == cancell ? middlewareR : cancell.length}`));
         middlewareR |= yellowtoredE.length;
      let detailn = launcher2 ? !launcher2 : launcher2;
      do {
         launcher2 = !launcher2;
         if (detailn) {
            break;
         }
      } while ((!launcher2 || (5.21 * viewsg) > 2.63) && detailn);
          let statsnomoredatad = String.fromCharCode(119,105,110,100,111,119,101,100,95,118,95,51,50,0);
         temperatureS /= Math.max(5, (parseFloat(`${(launcher2 ? 4 : 1) ^ parseInt(`${temperatureS}`)}`)));
         statsnomoredatad += "3";
         viewsg /= Math.max(4, parseFloat(`${1 % (Math.max(10, parseInt(`${temperatureS}`)))}`));
       let robotoF: Map<any, any> = new Map([[String.fromCharCode(98,95,55,54,95,119,105,110,116,104,114,101,97,100,0),String.fromCharCode(120,95,57,49,95,99,104,97,110,110,101,108,109,97,112,0)], [String.fromCharCode(112,114,105,110,116,99,111,109,112,95,53,95,57,51,0),String.fromCharCode(117,95,49,54,95,112,117,115,104,98,97,99,107,0)], [String.fromCharCode(109,95,53,55,95,102,97,108,108,98,97,99,107,0),String.fromCharCode(100,101,108,97,95,106,95,57,52,0)]]);
      if ((2 * robotoF.size) <= 2) {
         temperatureS += parseFloat(`${parseInt(`${viewsg}`)}`);
      }
         robotoF = new Map([[`${robotoF.size}`, robotoF.size * parseInt(`${viewsg}`)]]);
      bgvipxvodg = `${(parseInt(`${viewsg}`) + (launcher2 ? 5 : 3))}`;
   let baseS = 8930178 <= combineW.length;
   do {
       let bannerT = false;
       let yellowanimationlivee = 5;
       let smallorangemant = false;
       let matchdetailbgfj = String.fromCharCode(100,101,99,111,100,101,114,115,95,120,95,51,48,0);
         smallorangemant = (yellowanimationlivee + matchdetailbgfj.length) >= 51;
         smallorangemant = yellowanimationlivee <= 39;
         bannerT = yellowanimationlivee >= 35;
      while (!matchdetailbgfj.endsWith(`${smallorangemant}`)) {
          let bgvipxvodB = String.fromCharCode(115,95,51,95,118,105,100,101,111,99,111,100,101,99,0);
          let lineO = 4.0;
          let iconcalendarv = false;
         matchdetailbgfj += `${((smallorangemant ? 2 : 4))}`;
         bgvipxvodB = `${bgvipxvodB.length}`;
         lineO *= (parseInt(`${lineO}`) >> (Math.min(2, Math.abs((iconcalendarv ? 2 : 3)))));
         break;
      }
      while (smallorangemant) {
          let applej = String.fromCharCode(104,111,109,101,95,52,95,49,48,48,0);
         smallorangemant = applej.length > 31;
         break;
      }
      for (let r = 0; r < 3; r++) {
         matchdetailbgfj = `${(yellowanimationlivee * (bannerT ? 1 : 1))}`;
      }
         yellowanimationlivee %= Math.max(yellowanimationlivee << (Math.min(1, Math.abs(1))), 3);
      let selectedy = smallorangemant ? !smallorangemant : smallorangemant;
      do {
          let forwardH = 2;
         smallorangemant = !smallorangemant;
         forwardH /= Math.max(forwardH, 4);
         if (selectedy) {
            break;
         }
      } while ((2 == yellowanimationlivee) && selectedy);
      while (4 < yellowanimationlivee && 2 < (4 ^ yellowanimationlivee)) {
         smallorangemant = smallorangemant || matchdetailbgfj.length == 20;
         break;
      }
          let attributedstring6 = false;
          let cornerkickl = true;
          let anewsshareX: Array<any> = [955, 16, 572];
         smallorangemant = anewsshareX.length == 26;
         attributedstring6 = !cornerkickl;
         cornerkickl = (cornerkickl ? !attributedstring6 : cornerkickl);
         anewsshareX.push(((attributedstring6 ? 4 : 3) | (cornerkickl ? 5 : 5)));
      for (let j = 0; j < 2; j++) {
         matchdetailbgfj += "3";
      }
      let side_ = matchdetailbgfj.length <= 7086917;
      do {
         matchdetailbgfj = `${matchdetailbgfj.length - 1}`;
         if (side_) {
            break;
         }
      } while (side_ && (!bannerT));
      combineW = `${parseInt(`${teamp}`)}`;
      if (baseS) {
         break;
      }
   } while ((combineW.length <= 5) && baseS);
      bgvipxvodg = `${parseInt(`${commentZ}`) >> (Math.min(1, Math.abs(3)))}`;
      show2 -= parseFloat(`${renderW.length & bgvipxvodg.length}`);
    setIsRefreshing(false);

   for (let q = 0; q < 2; q++) {
      combineW = `${(questy == String.fromCharCode(72,0) ? parseInt(`${auto_wf}`) : questy.length)}`;
   }
   for (let q = 0; q < 2; q++) {
      shirtL = 99 >= combineW.length;
   }
      volumeU = `${bgvipxvodg.length - 3}`;
   while (2.36 >= teamp) {
      teamp /= Math.max(5, (String.fromCharCode(51,0) == questy ? volumeU.length : questy.length));
      break;
   }
      shirtL = (parseInt(`${fulla}`) / (Math.max(private_dwB.length, 8))) <= 45;
      volumeU += `${(private_dwB == String.fromCharCode(114,0) ? private_dwB.length : issubb.size)}`;
   for (let c = 0; c < 1; c++) {
       let gdtadvy = 4.0;
       let bggradientk = String.fromCharCode(119,95,50,49,95,99,104,101,118,114,111,110,0);
      while (5 <= bggradientk.length) {
         gdtadvy *= parseFloat(`${parseInt(`${gdtadvy}`) * 1}`);
         break;
      }
         bggradientk = `${bggradientk.length}`;
         bggradientk = `${3 - bggradientk.length}`;
         gdtadvy /= Math.max(3, parseFloat(`${bggradientk.length & 1}`));
          let libfbA: Array<any> = [703, 940, 696];
         bggradientk += `${libfbA.length}`;
      while ((1 & bggradientk.length) > 4 && 3 > (parseInt(`${gdtadvy}`) / (Math.max(1, 3)))) {
         bggradientk = `${(String.fromCharCode(78,0) == bggradientk ? parseInt(`${gdtadvy}`) : bggradientk.length)}`;
         break;
      }
      renderW += `${private_dwB.length % 3}`;
   }
      private_dwB = `${private_dwB.length & parseInt(`${teamp}`)}`;
   for (let s = 0; s < 3; s++) {
      commentZ += renderW.length;
   }
       let assetsj = 5.0;
       let arrowright_ = 4.0;
       let redirectl = String.fromCharCode(116,95,57,48,95,109,97,105,110,115,116,97,103,101,0);
          let libreactnativejnip = String.fromCharCode(100,95,57,55,95,98,111,116,116,111,109,0);
          let suggestionv = 5.0;
         arrowright_ *= parseInt(`${arrowright_}`);
         libreactnativejnip += `${libreactnativejnip.length % 3}`;
         suggestionv *= parseFloat(`${3 << (Math.min(2, Math.abs(parseInt(`${suggestionv}`))))}`);
      for (let f = 0; f < 3; f++) {
         assetsj -= parseFloat(`${parseInt(`${arrowright_}`) / (Math.max(5, redirectl.length))}`);
      }
      let libfbd = 9286405.0 >= assetsj;
      do {
         assetsj += parseFloat(`${parseInt(`${assetsj}`) << (Math.min(redirectl.length, 2))}`);
         if (libfbd) {
            break;
         }
      } while (libfbd && (assetsj > parseFloat(`${redirectl.length}`)));
          let favoritek = String.fromCharCode(103,95,49,48,48,95,115,97,110,115,0);
         redirectl += `${(favoritek == String.fromCharCode(86,0) ? favoritek.length : redirectl.length)}`;
      while (assetsj > 1.90) {
         assetsj /= Math.max(2, parseFloat(`${redirectl.length << (Math.min(Math.abs(3), 2))}`));
         break;
      }
         arrowright_ /= Math.max(redirectl.length & parseInt(`${assetsj}`), 2);
         assetsj /= Math.max(3, parseFloat(`${parseInt(`${assetsj}`) << (Math.min(Math.abs(parseInt(`${arrowright_}`)), 1))}`));
      while (5 >= (1 | redirectl.length)) {
          let hiadw = 4.0;
         assetsj -= parseFloat(`${parseInt(`${assetsj}`) ^ parseInt(`${arrowright_}`)}`);
         hiadw += 3;
         break;
      }
          let sends = true;
          let infoW: Array<any> = [String.fromCharCode(110,95,56,54,95,112,111,108,108,101,100,0), String.fromCharCode(105,116,101,109,115,95,54,95,53,48,0), String.fromCharCode(115,110,97,112,112,101,100,95,102,95,55,57,0)];
         assetsj /= Math.max(4, parseFloat(`${parseInt(`${assetsj}`) & 3}`));
         sends = infoW.includes(sends);
         infoW = [3];
      renderW = "1";
    return;
  }, []);

  return (
    <ScreenContainer containerStyle={{ paddingLeft: 0, paddingRight: 0 }}>
      <BecomeVipOverlay
        setShowBecomeVIPOverlay={setShowBecomeVIPOverlay}
        showBecomeVIPOverlay={showBecomeVIPOverlay}
        selectedTab="positionLibsgcoreStatisticsinactive"
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
          activeOpacity={!wawaLibglog.isVip(userState.user)
            ? 0.5
            : 1
          }
          onPress={() => {
            if (!wawaLibglog.isVip(userState.user)) {
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
              source={require("@static/images/profile/viewerRoundCommon.png")}
            />

            {!wawaLibglog.isVip(userState.user) ? (
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
