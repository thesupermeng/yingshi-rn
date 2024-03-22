import React, { useCallback, useEffect, useState, memo } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  RefreshControl,
  Platform,
} from "react-native";
import { useTheme, useFocusEffect } from "@react-navigation/native";
import { useAppDispatch, useAppSelector, useSelector } from "@hooks/mayi_redirect";
import { mayi_Libapminsightb } from "@redux/mayi_live_tumbnail";
import ShowMoreButton from "../../components/button/mayi_push_bodan_button";

import CollectionIcon from "@static/images/chatroombackgroundLauncher.svg";
import HistoryIcon from "@static/images/backMore.svg";
import FeedbackIcon from "@static/images/ballDefaultroombg.svg";
import SettingsIcon from "@static/images/mbsplashDescription_v.svg";
import InfoIcon from "@static/images/downloaderLibavdevice.svg";
import DownloadIcon from "@static/images/greenBlacklistSave.svg";
import { useNavigation } from "@react-navigation/native";

import Orientation from "react-native-orientation-locker";
import ProfileIcon from "@static/images/dependencyAgreementWhatsapp.svg";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import MoreArrow from "@static/images/scorepopsoundDefaultprofilepicDycreator.svg";
import EditIcn from "@static/images/profile/eighteenLineSlider.svg";

import VipIcon from "@static/images/episodeModuleEmbed.svg";
import VipArrow from "@static/images/downloadNetworkPlaceholder.svg";
import AddIcon from "@static/images/vip/textlayoutmanagerInouttargetred.svg";
import { mayi_Librrc } from "../../../mayi_gift";

import {
  hideBottomSheetAction,
  removeScreenAction,
  setShowGuestPurchaseSuccess,
  showLoginAction,
} from "@redux/actions/mayi_iconorientation_chatroombackground";
import NotificationModal from "../../components/modal/mayi_muted_edit";
import { updateUserAuth, updateUserReferral } from "@redux/actions/mayi_librrc";
import ExpiredOverlay from "../../components/modal/mayi_ball_canvas";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { DOWNLOAD_FEATURE_ENABLED, SHOW_ZF_CONST, UMENG_CHANNEL } from "@utility/mayi_middleware_apps";
import FastImage from "../../components/common/mayi_slider";
import { mayi_Injury } from "@api";
import { mayi_VideojsInit } from "../../Sports/global/mayi_sans_common";
import { BannerContainer } from "../../components/container/mayi_iconarrowright_feedback";
import { mayi_Room } from "@type/mayi_green";
import { mayi_ReactBang } from "@utility/mayi_zhubo";
import { mayi_Iconclosewhitewithbg } from "../../constants/mayi_plash_basketballtrophy";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { mayi_ConstCheckbox } from "../../api/mayi_iconsetting_chinasame";
import mayi_push from "../../../Umeng/mayi_push";
import DeviceInfo from "react-native-device-info";
import style from "../../Sports/components/matchDetails/liveChatPage/mayi_iconarrowrightwhite";
import { VipLoginAlertOverlay } from "../../components/modal/mayi_down";
import { mayi_CircleImage } from "@redux/reducers/mayi_imagenomoredata";
import { mayi_Baseline } from "@redux/reducers/mayi_chatroombackground_unlock";
import { mayi_Gift } from "@models/mayi_libjsinspector";

function Profile({ navigation, route }: BottomTabScreenProps<any>) {
  const navigator = useNavigation();
  const { colors, textVariants, icons, spacing } = useTheme();
  const dispatch = useAppDispatch();
  const [refreshing, setRefreshing] = useState(false);
  const [displayedDate, setDisplayedDate] = useState("");
  const userState = useSelector<mayi_Baseline>('userReducer');
  const appState = useSelector<mayi_CircleImage>('backgroundReducer');
  
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [bannerAd, setBannerAd] = useState<mayi_Room[]>();

  const toggleOverlay = () => {
       let chinasame1: Array<any> = [204, 520];
    let tailm = 2.0;
    let weibom = true;
    let huaweiu = String.fromCharCode(104,101,120,98,110,95,97,95,57,52,0);
    let nalyticsP = 0.0;
    let projectU = String.fromCharCode(101,116,104,114,101,97,100,105,110,103,95,51,95,53,54,0);
    let smallT = String.fromCharCode(99,95,51,51,95,101,110,99,111,100,101,100,115,116,114,101,97,109,0);
    let configureS = String.fromCharCode(119,95,51,55,95,111,110,101,111,102,0);
    let homeactiveP = 4.0;
    let usernameY: Array<any> = [76, 497, 611];
    let backgroundu = 5.0;
    let iconarrowrightorangeW = String.fromCharCode(118,105,100,101,111,104,100,114,95,103,95,50,49,0);
    let x_unlockb = String.fromCharCode(100,121,110,108,111,97,100,95,104,95,51,54,0);
    let rootN: Array<any> = [198, 8];
    let ajaxM = String.fromCharCode(104,95,55,52,95,112,97,110,0);
       let videocommon4 = 1.0;
       let yellowanimationliveb = true;
       let iconedits = true;
      let matchinactiveD = yellowanimationliveb ? !yellowanimationliveb : yellowanimationliveb;
      do {
         yellowanimationliveb = !yellowanimationliveb && !iconedits;
         if (matchinactiveD) {
            break;
         }
      } while (matchinactiveD && (yellowanimationliveb));
         videocommon4 -= ((iconedits ? 2 : 4));
         iconedits = (!iconedits ? !yellowanimationliveb : iconedits);
       let lightf: Map<any, any> = new Map([[String.fromCharCode(105,115,111,108,97,116,101,95,107,95,51,49,0),747], [String.fromCharCode(108,95,55,95,116,114,97,118,101,108,0),352], [String.fromCharCode(114,101,104,97,115,104,95,101,95,55,57,0),960]]);
       let transferw: Map<any, any> = new Map([[String.fromCharCode(114,101,118,111,107,105,110,103,95,109,95,57,54,0),true ], [String.fromCharCode(97,99,99,101,112,116,101,100,95,113,95,49,49,0),false ], [String.fromCharCode(98,115,111,110,95,121,95,57,56,0),false ]]);
         lightf = new Map([[`${transferw.size}`, (transferw.size + (iconedits ? 5 : 3))]]);
         transferw.set(`${iconedits}`, 2);
         lightf.set(`${yellowanimationliveb}`, 1 & transferw.size);
      if (transferw.size == 5) {
          let internetZ = String.fromCharCode(99,111,110,115,116,114,97,105,110,116,115,95,51,95,52,50,0);
          let pangleS = String.fromCharCode(108,105,98,106,112,101,103,116,117,114,98,111,95,108,95,52,49,0);
          let shoot3 = 1.0;
          let collectione = String.fromCharCode(112,117,108,108,100,111,119,110,95,48,95,49,49,0);
         transferw = new Map([[`${lightf.size}`, (1 | (iconedits ? 3 : 2))]]);
         internetZ = `${internetZ.length >> (Math.min(Math.abs(2), 5))}`;
         pangleS = `${(String.fromCharCode(82,0) == pangleS ? pangleS.length : parseInt(`${shoot3}`))}`;
         shoot3 -= parseFloat(`${3}`);
         collectione += `${parseInt(`${shoot3}`)}`;
      }
      while (2.100 > (3.65 + videocommon4)) {
          let analyticsb = String.fromCharCode(116,105,109,101,108,105,110,101,115,95,54,95,57,50,0);
         videocommon4 -= 3;
         analyticsb += `${(String.fromCharCode(104,0) == analyticsb ? analyticsb.length : analyticsb.length)}`;
         break;
      }
      projectU += `${huaweiu.length}`;
       let networkQ = false;
       let modulesN: Map<any, any> = new Map([[String.fromCharCode(117,95,57,48,95,102,100,99,116,120,0),false ], [String.fromCharCode(115,112,114,105,110,103,95,109,95,54,57,0),false ]]);
       let sort4: Array<any> = [680, 227];
          let libapminsightaF = String.fromCharCode(99,95,54,53,0);
          let sportsB = 2.0;
         modulesN.set(libapminsightaF, libapminsightaF.length | 2);
         sportsB -= parseInt(`${sportsB}`) << (Math.min(Math.abs(parseInt(`${sportsB}`)), 5));
      if (networkQ && 5 < (sort4.length & 2)) {
          let turndownT = 1.0;
         sort4.push(2 / (Math.max(10, sort4.length)));
         turndownT -= parseFloat(`${parseInt(`${turndownT}`) + parseInt(`${turndownT}`)}`);
      }
      let iconeditR = sort4.length >= 8000459;
      do {
         sort4 = [modulesN.size + sort4.length];
         if (iconeditR) {
            break;
         }
      } while ((modulesN.size > 4) && iconeditR);
       let tickedX: Array<any> = [849, 199];
          let customb = true;
          let homeactive3 = String.fromCharCode(119,95,51,48,95,114,101,97,99,104,97,98,108,101,0);
         modulesN.set(homeactive3, (String.fromCharCode(120,0) == homeactive3 ? homeactive3.length : sort4.length));
         customb = (customb ? !customb : customb);
          let classesa = 2.0;
         tickedX = [modulesN.size * sort4.length];
         classesa *= parseInt(`${classesa}`);
      let foundE = networkQ ? !networkQ : networkQ;
      do {
         networkQ = 6 > modulesN.size || tickedX.length > 6;
         if (foundE) {
            break;
         }
      } while ((!networkQ) && foundE);
       let tempw: Map<any, any> = new Map([[String.fromCharCode(101,120,112,114,101,115,115,105,111,110,95,111,95,51,57,0),false ], [String.fromCharCode(99,95,51,57,95,102,119,97,108,115,104,0),true ], [String.fromCharCode(116,95,56,52,95,117,116,120,111,0),false ]]);
       let middleh: Map<any, any> = new Map([[String.fromCharCode(120,95,51,52,95,116,101,115,116,111,114,105,103,0),561], [String.fromCharCode(104,111,117,114,115,95,117,95,56,49,0),974], [String.fromCharCode(106,95,48,95,111,119,110,101,114,0),726]]);
      if ((1 + modulesN.size) < 1 || (modulesN.size + 1) < 1) {
         modulesN = new Map([[`${sort4.length}`, 1]]);
      }
      projectU = `${huaweiu.length + parseInt(`${nalyticsP}`)}`;
   while (!weibom) {
       let schedule2 = String.fromCharCode(117,116,117,114,101,95,51,95,51,48,0);
       let canvas6 = true;
          let smallbrightnessg = 1;
         schedule2 = `${((canvas6 ? 3 : 2) % 2)}`;
         smallbrightnessg += smallbrightnessg;
      while (schedule2.length > 2) {
         schedule2 += `${(String.fromCharCode(78,0) == schedule2 ? schedule2.length : (canvas6 ? 5 : 3))}`;
         break;
      }
          let iconcalendarP = String.fromCharCode(99,95,50,50,95,102,108,118,101,110,99,0);
          let detailsF = String.fromCharCode(120,102,111,114,109,95,53,95,56,0);
          let utilsV: Array<any> = [130, 54, 98];
         schedule2 += `${iconcalendarP.length ^ 2}`;
         iconcalendarP += `${detailsF.length}`;
         detailsF = `${detailsF.length >> (Math.min(5, utilsV.length))}`;
         utilsV = [3 - utilsV.length];
       let macau7: Array<any> = [796, 457, 642];
      for (let e = 0; e < 2; e++) {
         canvas6 = 83 == macau7.length && 83 == schedule2.length;
      }
      if ((macau7.length - 5) >= 1) {
         macau7 = [((canvas6 ? 3 : 5) | macau7.length)];
      }
      weibom = parseInt(`${tailm}`) <= projectU.length;
      break;
   }
   if ((4 >> (Math.min(1, configureS.length))) < 1) {
       let logoutj = String.fromCharCode(97,105,109,105,110,103,95,107,95,54,55,0);
       let stringsp = 4;
       let analyticf: Array<any> = [617, 840];
       let assisty: Array<any> = [219, 526];
       let shootG: Array<any> = [871, 279];
          let mathY = String.fromCharCode(99,105,110,97,117,100,105,111,95,120,95,50,54,0);
          let homeinactiveH: Map<any, any> = new Map([[String.fromCharCode(102,95,51,48,95,111,115,116,114,101,97,109,119,114,97,112,112,101,114,0),true ], [String.fromCharCode(102,119,104,116,95,56,95,52,53,0),true ], [String.fromCharCode(115,116,114,103,108,111,98,95,49,95,57,51,0),true ]]);
         assisty = [stringsp];
         mathY += `${mathY.length << (Math.min(4, Math.abs(homeinactiveH.size)))}`;
         homeinactiveH.set(mathY, mathY.length);
         stringsp += stringsp;
      while ((stringsp & shootG.length) > 4 && (4 & stringsp) > 1) {
         stringsp <<= Math.min(Math.abs(2), 2);
         break;
      }
      for (let u = 0; u < 3; u++) {
         stringsp /= Math.max(1, 2 - shootG.length);
      }
      let securityj = stringsp >= 5139057;
      do {
         stringsp ^= stringsp;
         if (securityj) {
            break;
         }
      } while (securityj && (5 > (2 | stringsp)));
       let libjsijniprofilerZ = String.fromCharCode(100,115,116,114,95,111,95,55,51,0);
      for (let o = 0; o < 1; o++) {
          let container4 = String.fromCharCode(98,114,111,119,115,101,95,56,95,48,0);
         libjsijniprofilerZ += "2";
         container4 += "1";
      }
         stringsp -= assisty.length;
      let basketballtrophy3 = stringsp >= 8090110;
      do {
         stringsp += shootG.length % 1;
         if (basketballtrophy3) {
            break;
         }
      } while ((2 < (5 - stringsp) || 3 < (logoutj.length - 5)) && basketballtrophy3);
         logoutj = `${libjsijniprofilerZ.length}`;
          let streamingf = String.fromCharCode(111,95,50,50,95,103,117,101,115,115,101,100,0);
         libjsijniprofilerZ = `${streamingf.length / 2}`;
      let penaltymatchiconW = 8141705 <= stringsp;
      do {
         stringsp -= 1;
         if (penaltymatchiconW) {
            break;
         }
      } while (((assisty.length ^ 5) < 3 || (5 ^ assisty.length) < 5) && penaltymatchiconW);
      while ((logoutj.length % (Math.max(5, 3))) < 2 || 5 < (logoutj.length % 5)) {
         logoutj = `${libjsijniprofilerZ.length}`;
         break;
      }
         logoutj = "2";
         analyticf = [stringsp];
      backgroundu -= parseInt(`${nalyticsP}`);
   }
   while ((usernameY.length | configureS.length) == 2 || (usernameY.length | 2) == 3) {
      configureS = `${usernameY.length >> (Math.min(Math.abs(2), 4))}`;
      break;
   }
   let sideW = 8678572.0 >= homeactiveP;
   do {
       let sportD: Array<any> = [290, 622];
       let footballa = String.fromCharCode(105,115,112,97,99,107,101,100,95,97,95,52,48,0);
       let typingp = String.fromCharCode(114,95,55,56,95,114,101,97,115,111,110,0);
       let bgvipsportU = false;
       let crownU = String.fromCharCode(113,117,101,117,101,115,95,107,95,56,48,0);
      while (!bgvipsportU && crownU.length > 1) {
          let greytickI = String.fromCharCode(98,95,50,49,95,99,111,110,102,108,105,99,116,0);
          let yellowb = String.fromCharCode(115,95,49,56,95,99,116,120,116,0);
          let qaagl = false;
          let layouts = String.fromCharCode(119,95,50,57,95,101,114,105,97,108,105,122,97,116,105,111,110,0);
         bgvipsportU = 31 < crownU.length;
         greytickI += `${layouts.length}`;
         yellowb += `${(greytickI == String.fromCharCode(102,0) ? (qaagl ? 3 : 3) : greytickI.length)}`;
         qaagl = !qaagl;
         layouts += "1";
         break;
      }
      while (crownU.length == 5) {
         crownU += `${1 & sportD.length}`;
         break;
      }
         sportD.push((String.fromCharCode(71,0) == crownU ? crownU.length : sportD.length));
          let attributedstringg = 2.0;
          let mailz = false;
         footballa += `${3 + crownU.length}`;
         attributedstringg /= Math.max(((mailz ? 5 : 3) + parseInt(`${attributedstringg}`)), 2);
         mailz = attributedstringg <= 14.24;
      while (1 >= (sportD.length | footballa.length) || 1 >= (1 | footballa.length)) {
         footballa = `${(String.fromCharCode(118,0) == crownU ? crownU.length : footballa.length)}`;
         break;
      }
      while (bgvipsportU) {
         sportD.push(sportD.length);
         break;
      }
         crownU = `${((bgvipsportU ? 2 : 4) - 2)}`;
       let trophy2 = String.fromCharCode(97,118,112,107,116,95,106,95,53,51,0);
      let action2 = sportD.length >= 5275689;
      do {
         sportD.push((trophy2 == String.fromCharCode(103,0) ? trophy2.length : footballa.length));
         if (action2) {
            break;
         }
      } while (((4 * footballa.length) >= 2) && action2);
         footballa = `${2 ^ typingp.length}`;
      let redscoreballV = bgvipsportU ? !bgvipsportU : bgvipsportU;
      do {
         bgvipsportU = !bgvipsportU;
         if (redscoreballV) {
            break;
         }
      } while ((3 <= (sportD.length << (Math.min(Math.abs(5), 1))) || 5 <= sportD.length) && redscoreballV);
      let user_ = sportD.length >= 7266213;
      do {
         sportD = [((bgvipsportU ? 5 : 2) / (Math.max(typingp.length, 4)))];
         if (user_) {
            break;
         }
      } while (user_ && (!bgvipsportU));
         crownU = "2";
          let informationj = false;
          let sans8 = 0.0;
          let moduleS: Map<any, any> = new Map([[String.fromCharCode(106,95,50,54,95,102,111,114,103,101,116,0),String.fromCharCode(107,95,56,48,95,106,115,116,121,112,101,0)], [String.fromCharCode(115,97,118,101,112,111,105,110,116,115,95,116,95,52,48,0),String.fromCharCode(101,95,54,57,95,111,103,103,105,110,103,0)], [String.fromCharCode(109,101,115,97,103,101,95,111,95,57,57,0),String.fromCharCode(115,112,101,97,107,95,111,95,53,56,0)]]);
         sportD.push(sportD.length | 3);
         informationj = (parseInt(`${sans8}`) / (Math.max(5, moduleS.size))) == 35;
         sans8 -= parseInt(`${sans8}`);
         moduleS.set(`${sans8}`, ((informationj ? 3 : 1) * parseInt(`${sans8}`)));
      while (!bgvipsportU && 1 <= typingp.length) {
         typingp = `${sportD.length | crownU.length}`;
         break;
      }
      homeactiveP *= configureS.length + 2;
      if (sideW) {
         break;
      }
   } while (sideW && (5.95 < (homeactiveP - 2.91)));
       let awayteamfieldr: Map<any, any> = new Map([[String.fromCharCode(119,95,50,55,95,102,105,110,0),842], [String.fromCharCode(114,95,51,50,95,103,108,111,98,97,108,115,0),2]]);
          let iconarrowrightT = String.fromCharCode(118,95,55,50,0);
          let libreanimated1 = 0.0;
          let fullscreenminp: Array<any> = [123, 610];
         awayteamfieldr.set(`${iconarrowrightT}`, iconarrowrightT.length | 3);
         libreanimated1 -= parseFloat(`${2 ^ fullscreenminp.length}`);
         fullscreenminp.push(1 * fullscreenminp.length);
      while (3 == (awayteamfieldr.size | 5) && (5 | awayteamfieldr.size) == 1) {
         awayteamfieldr.set(`${awayteamfieldr.size}`, awayteamfieldr.size & awayteamfieldr.size);
         break;
      }
      let vipsportn = 7324414 >= awayteamfieldr.size;
      do {
          let analyticsv = String.fromCharCode(117,95,52,50,95,113,109,98,108,0);
         awayteamfieldr.set(`${analyticsv}`, analyticsv.length & 1);
         if (vipsportn) {
            break;
         }
      } while (vipsportn && ((awayteamfieldr.size - 4) < 2 || (awayteamfieldr.size - 4) < 5));
      chinasame1 = [3];
   while (!projectU.startsWith(`${configureS.length}`)) {
       let profilepic8 = String.fromCharCode(106,95,54,95,116,105,109,101,111,117,116,115,0);
       let homeplayerc = true;
       let basketballawayteamy = 5.0;
       let tickg = String.fromCharCode(102,111,117,114,105,101,114,95,101,95,56,54,0);
       let klevint = 3.0;
         klevint += ((homeplayerc ? 1 : 1));
         homeplayerc = 82.33 <= klevint;
          let applej = String.fromCharCode(100,95,57,49,95,109,101,116,97,100,97,116,97,115,0);
          let private_a8s = String.fromCharCode(102,108,97,103,95,101,95,56,50,0);
         basketballawayteamy -= parseFloat(`${profilepic8.length}`);
         applej += `${applej.length - 1}`;
         private_a8s = `${private_a8s.length}`;
      while (homeplayerc) {
         klevint += parseInt(`${basketballawayteamy}`) << (Math.min(profilepic8.length, 5));
         break;
      }
      let register_xT = String.fromCharCode(54,107,105,55,107,54,117,54,49,112,0) == tickg;
      do {
         tickg += `${((homeplayerc ? 1 : 2))}`;
         if (register_xT) {
            break;
         }
      } while (register_xT && (4.56 == (4.35 * klevint)));
          let predictionwin8 = String.fromCharCode(116,114,97,105,116,115,95,116,95,50,0);
          let animationsk = 1.0;
         basketballawayteamy *= (parseFloat(`${String.fromCharCode(69,0) == predictionwin8 ? predictionwin8.length : tickg.length}`));
         animationsk *= 1 - parseInt(`${animationsk}`);
         homeplayerc = basketballawayteamy == klevint;
         tickg += `${(String.fromCharCode(77,0) == tickg ? tickg.length : parseInt(`${basketballawayteamy}`))}`;
          let showlessS = String.fromCharCode(106,95,54,50,95,114,116,112,0);
         profilepic8 = "2";
         showlessS += "1";
      if (4 < (tickg.length >> (Math.min(Math.abs(3), 1)))) {
         tickg = `${(profilepic8.length >> (Math.min(5, Math.abs((homeplayerc ? 5 : 1)))))}`;
      }
         basketballawayteamy /= Math.max(4, (parseFloat(`${parseInt(`${klevint}`) << (Math.min(1, Math.abs((homeplayerc ? 4 : 5))))}`)));
         tickg += `${(profilepic8 == String.fromCharCode(115,0) ? profilepic8.length : tickg.length)}`;
      while (tickg != profilepic8) {
          let reactnavigationS = String.fromCharCode(101,110,117,109,101,114,97,116,105,111,110,95,100,95,51,52,0);
         profilepic8 = `${parseInt(`${basketballawayteamy}`)}`;
         reactnavigationS += `${reactnavigationS.length + 3}`;
         break;
      }
      let uploads = 8070778 >= profilepic8.length;
      do {
         profilepic8 += `${2 - parseInt(`${basketballawayteamy}`)}`;
         if (uploads) {
            break;
         }
      } while (uploads && (profilepic8.length == 2));
          let twitterJ = true;
         klevint /= Math.max((2 * (twitterJ ? 2 : 1)), 2);
      configureS += `${(String.fromCharCode(73,0) == profilepic8 ? parseInt(`${nalyticsP}`) : profilepic8.length)}`;
      break;
   }
      huaweiu += `${iconarrowrightorangeW.length}`;
   for (let h = 0; h < 1; h++) {
      iconarrowrightorangeW = `${iconarrowrightorangeW.length}`;
   }
      usernameY.push(chinasame1.length);
   while ((3.7 - backgroundu) == 3.83 || (backgroundu - homeactiveP) == 3.7) {
      homeactiveP -= (String.fromCharCode(87,0) == iconarrowrightorangeW ? iconarrowrightorangeW.length : parseInt(`${backgroundu}`));
      break;
   }
   for (let b = 0; b < 3; b++) {
      iconarrowrightorangeW += `${2 + parseInt(`${homeactiveP}`)}`;
   }
   while (1.35 < homeactiveP) {
       let trashl: Map<any, any> = new Map([[String.fromCharCode(99,95,50,54,95,105,110,116,101,114,108,101,97,118,101,100,0),346], [String.fromCharCode(101,110,116,114,111,112,121,109,118,95,54,95,50,0),128]]);
       let encryptI = String.fromCharCode(98,114,105,100,103,101,100,95,97,95,57,54,0);
      for (let d = 0; d < 1; d++) {
         encryptI = `${trashl.size}`;
      }
       let predictiondefaultU = String.fromCharCode(102,105,108,116,101,114,103,114,97,112,104,95,120,95,49,0);
       let fullscreenminN = String.fromCharCode(114,95,50,55,95,99,112,108,120,0);
      if (fullscreenminN == String.fromCharCode(121,0)) {
         predictiondefaultU = `${trashl.size}`;
      }
         trashl.set(`${predictiondefaultU}`, predictiondefaultU.length + 2);
      while (!predictiondefaultU.includes(encryptI)) {
         encryptI += `${trashl.size + encryptI.length}`;
         break;
      }
      let contextN = predictiondefaultU == String.fromCharCode(51,99,119,109,53,114,52,100,109,0);
      do {
         predictiondefaultU += `${trashl.size << (Math.min(Math.abs(1), 2))}`;
         if (contextN) {
            break;
         }
      } while (contextN && (fullscreenminN.length > predictiondefaultU.length));
      homeactiveP -= huaweiu.length + 2;
      break;
   }
      nalyticsP /= Math.max(2, parseInt(`${homeactiveP}`));
   let libfbjniP = backgroundu >= 5893986.0;
   do {
      backgroundu /= Math.max(2 / (Math.max(3, parseInt(`${homeactiveP}`))), 5);
      if (libfbjniP) {
         break;
      }
   } while (libfbjniP && (5.15 < (5.78 * backgroundu) && (backgroundu * 5.78) < 1.22));
      iconarrowrightorangeW += `${parseInt(`${backgroundu}`) | usernameY.length}`;
      projectU += `${chinasame1.length ^ 3}`;
   let matchesB = huaweiu.length >= 8819872;
   do {
      huaweiu += `${smallT.length / 1}`;
      if (matchesB) {
         break;
      }
   } while (((parseInt(`${nalyticsP}`) / (Math.max(10, huaweiu.length))) == 1 || (nalyticsP / 1.12) == 1.10) && matchesB);
       let basketballmatchdetailbg5 = 4.0;
      if ((2.6 / (Math.max(3, basketballmatchdetailbg5))) == 1.49 || (basketballmatchdetailbg5 / (Math.max(2.6, 1))) == 4.28) {
          let filef = String.fromCharCode(114,95,56,95,97,100,106,117,115,116,109,101,110,116,115,0);
         basketballmatchdetailbg5 /= Math.max(4, (filef == String.fromCharCode(85,0) ? parseInt(`${basketballmatchdetailbg5}`) : filef.length));
      }
       let f_center7 = true;
         f_center7 = !f_center7;
      x_unlockb += `${projectU.length << (Math.min(3, configureS.length))}`;
      chinasame1 = [projectU.length / (Math.max(3, 9))];
   for (let w = 0; w < 2; w++) {
       let listk: Array<any> = [350, 251];
       let minimizeW = String.fromCharCode(104,95,53,52,95,121,117,118,109,111,110,111,0);
       let hoverp = 3.0;
       let currents = String.fromCharCode(109,98,103,114,97,112,104,95,48,95,52,53,0);
       let windA = String.fromCharCode(102,95,51,56,95,116,97,103,0);
      while (5 == (minimizeW.length % 3)) {
          let backgroundp: Array<any> = [369, 938, 707];
          let philippines6 = 3.0;
          let subtextw = String.fromCharCode(113,95,55,53,95,99,121,99,108,101,100,0);
          let gpayI = String.fromCharCode(97,101,99,95,120,95,57,50,0);
         listk = [minimizeW.length % (Math.max(9, backgroundp.length))];
         backgroundp.push(3 << (Math.min(4, gpayI.length)));
         philippines6 -= parseFloat(`${gpayI.length}`);
         subtextw = `${gpayI.length * subtextw.length}`;
         break;
      }
      for (let q = 0; q < 1; q++) {
         windA += `${3 * listk.length}`;
      }
         hoverp += (parseFloat(`${String.fromCharCode(122,0) == minimizeW ? listk.length : minimizeW.length}`));
          let iconqqL: Array<any> = [799, 805];
          let predictionbanner7 = String.fromCharCode(112,101,114,115,112,95,106,95,49,48,48,0);
          let carouself = false;
         hoverp -= parseFloat(`${parseInt(`${hoverp}`) & 2}`);
         iconqqL.push(predictionbanner7.length);
         predictionbanner7 += `${predictionbanner7.length}`;
         carouself = predictionbanner7.length <= 29;
      if (!minimizeW.includes(`${listk.length}`)) {
         minimizeW = `${currents.length & 3}`;
      }
      let whitetickW = hoverp <= 9766204.0;
      do {
         hoverp /= Math.max(4, parseFloat(`${minimizeW.length ^ 2}`));
         if (whitetickW) {
            break;
         }
      } while ((parseFloat(`${currents.length}`) == hoverp) && whitetickW);
      let notificationfillemptyz = currents == String.fromCharCode(113,97,56,116,56,112,0);
      do {
         currents += `${minimizeW.length}`;
         if (notificationfillemptyz) {
            break;
         }
      } while (notificationfillemptyz && (currents.endsWith(`${hoverp}`)));
         listk.push(2 * parseInt(`${hoverp}`));
       let complete_ = String.fromCharCode(101,97,99,104,95,113,95,56,50,0);
       let homeloading1 = String.fromCharCode(99,111,110,99,101,97,108,109,101,110,116,95,112,95,52,0);
          let navigation9 = String.fromCharCode(112,95,56,48,95,116,114,97,99,107,115,0);
          let androidZ = false;
         hoverp *= parseFloat(`${parseInt(`${hoverp}`) & complete_.length}`);
         navigation9 = `${(navigation9 == String.fromCharCode(97,0) ? navigation9.length : (androidZ ? 4 : 4))}`;
         androidZ = (((!androidZ ? navigation9.length : 69) / (Math.max(navigation9.length, 1))) < 69);
          let megaphonev = 3;
          let rocketD = 1.0;
          let analyticsl = String.fromCharCode(97,95,51,55,95,115,97,103,97,0);
         homeloading1 += `${parseInt(`${rocketD}`)}`;
         megaphonev += megaphonev;
         analyticsl += `${(String.fromCharCode(66,0) == analyticsl ? megaphonev : analyticsl.length)}`;
         listk = [2];
         complete_ += `${1 & complete_.length}`;
       let notificationP: Array<any> = [378, 431, 752];
       let libjsinspectorS: Array<any> = [381, 496];
         notificationP.push(1 << (Math.min(5, currents.length)));
      x_unlockb += `${(projectU == String.fromCharCode(103,0) ? parseInt(`${hoverp}`) : projectU.length)}`;
   }
   if (backgroundu > 2.69) {
       let emptyf = false;
      for (let o = 0; o < 2; o++) {
         emptyf = !emptyf;
      }
         emptyf = (!emptyf ? emptyf : !emptyf);
      while (!emptyf) {
          let liblogger7: Map<any, any> = new Map([[String.fromCharCode(107,95,57,95,115,101,110,116,0),true ], [String.fromCharCode(117,114,105,95,54,95,50,54,0),true ], [String.fromCharCode(119,101,105,103,104,116,95,52,95,54,48,0),false ]]);
          let weatherZ = false;
          let textlayoutmanagerG = 3;
          let vipsportK = String.fromCharCode(115,95,56,53,95,105,110,118,105,116,101,0);
         emptyf = !weatherZ;
         liblogger7 = new Map([[`${liblogger7.size}`, vipsportK.length | 3]]);
         textlayoutmanagerG &= textlayoutmanagerG;
         vipsportK = "3";
         break;
      }
      projectU = `${((emptyf ? 2 : 5) ^ 3)}`;
   }
      usernameY = [x_unlockb.length * 3];
       let runtimescheduler7: Map<any, any> = new Map([[String.fromCharCode(106,95,51,48,95,117,118,97,114,105,110,116,0),String.fromCharCode(97,95,49,48,95,100,101,97,99,116,0)], [String.fromCharCode(102,111,114,109,95,119,95,51,50,0),String.fromCharCode(108,111,97,100,101,100,95,105,95,49,52,0)]]);
          let arrowI = String.fromCharCode(99,95,55,95,114,101,103,105,115,116,101,114,101,114,0);
          let androidP = 3.0;
         runtimescheduler7 = new Map([[`${androidP}`, arrowI.length * parseInt(`${androidP}`)]]);
      if (runtimescheduler7.size > 2) {
         runtimescheduler7.set(`${runtimescheduler7.size}`, 2 / (Math.max(9, runtimescheduler7.size)));
      }
      if (runtimescheduler7.size > runtimescheduler7.size) {
          let footballp: Map<any, any> = new Map([[String.fromCharCode(100,121,110,108,105,110,107,95,112,95,54,48,0),993], [String.fromCharCode(102,95,50,55,95,99,111,110,102,105,114,109,97,116,105,111,110,115,0),953], [String.fromCharCode(105,110,99,114,101,97,115,105,110,103,95,49,95,49,53,0),819]]);
          let modali = String.fromCharCode(100,106,112,101,103,95,51,95,51,55,0);
         runtimescheduler7.set(`${modali}`, modali.length / (Math.max(6, runtimescheduler7.size)));
         footballp = new Map([[`${footballp.size}`, 1]]);
      }
      backgroundu -= (huaweiu == String.fromCharCode(85,0) ? huaweiu.length : smallT.length);

    setIsDialogOpen(!isDialogOpen);
  };

  const refreshUserState = async () => {
       let brightnesso = 2.0;
    let settingF: Array<any> = [237, 279];
    let reminderw = 2.0;
    let eabafadfadddbafeddddeeefeaafG = String.fromCharCode(102,95,51,95,97,100,97,112,116,101,114,0);
    let corer = false;
    let matchD = 0;
    let libglogu: Array<any> = [984, 295];
    let iconclosewhiteH: Array<any> = [String.fromCharCode(99,111,99,103,95,111,95,51,55,0), String.fromCharCode(117,121,118,121,95,116,95,50,56,0), String.fromCharCode(111,95,54,55,95,109,105,110,113,0)];
    let shared_ = 0;
    let disconnectedP = 5.0;
       let executory = String.fromCharCode(121,99,111,99,103,114,103,98,97,95,98,95,56,57,0);
      let libloggerA = executory.length <= 9433518;
      do {
         executory = `${executory.length}`;
         if (libloggerA) {
            break;
         }
      } while ((5 < executory.length) && libloggerA);
          let gradlewn = 2.0;
          let release_9cC = 4.0;
         executory += `${parseInt(`${gradlewn}`) << (Math.min(Math.abs(parseInt(`${release_9cC}`)), 1))}`;
      while (executory.length == 3 || executory == String.fromCharCode(100,0)) {
         executory += `${executory.length}`;
         break;
      }
      brightnesso *= parseInt(`${reminderw}`);
      shared_ /= Math.max(matchD, 1);
      corer = reminderw > eabafadfadddbafeddddeeefeaafG.length;
      eabafadfadddbafeddddeeefeaafG = `${libglogu.length / 3}`;
   while ((iconclosewhiteH.length >> (Math.min(Math.abs(2), 2))) >= 1 && 1 >= (2 >> (Math.min(4, libglogu.length)))) {
      iconclosewhiteH = [settingF.length];
      break;
   }

    const result = await mayi_Injury.getUserDetails();

   while ((settingF.length + 5) < 2 && (settingF.length - parseInt(`${brightnesso}`)) < 5) {
      brightnesso -= eabafadfadddbafeddddeeefeaafG.length / 3;
      break;
   }
   for (let p = 0; p < 1; p++) {
      corer = eabafadfadddbafeddddeeefeaafG.endsWith(`${reminderw}`);
   }
      libglogu.push(shared_ * eabafadfadddbafeddddeeefeaafG.length);
   for (let h = 0; h < 1; h++) {
      shared_ -= libglogu.length + 3;
   }
   for (let l = 0; l < 1; l++) {
      matchD += parseInt(`${disconnectedP}`);
   }
    if (result == null) {

   let mbsplashN = matchD <= 6306747;
   do {
      matchD |= iconclosewhiteH.length << (Math.min(2, Math.abs(matchD)));
      if (mbsplashN) {
         break;
      }
   } while (mbsplashN && ((matchD >> (Math.min(Math.abs(1), 1))) < 3 || (eabafadfadddbafeddddeeefeaafG.length >> (Math.min(Math.abs(1), 1))) < 4));
      brightnesso += 1;
      reminderw *= 3 + parseInt(`${disconnectedP}`);
      matchD += 2 - libglogu.length;
   for (let n = 0; n < 2; n++) {
       let sansP = String.fromCharCode(106,95,55,53,95,109,111,118,105,101,0);
       let logoutR = true;
       let libfbjnil = false;
      for (let d = 0; d < 3; d++) {
         logoutR = !logoutR && sansP.length >= 15;
      }
          let string6: Map<any, any> = new Map([[String.fromCharCode(97,97,99,100,101,99,116,97,98,95,114,95,56,52,0),false ], [String.fromCharCode(110,95,55,56,0),false ]]);
          let verticalj: Map<any, any> = new Map([[String.fromCharCode(107,95,57,95,115,97,110,105,116,105,122,101,100,0),50], [String.fromCharCode(102,95,56,55,95,116,101,109,112,108,97,116,101,115,0),363], [String.fromCharCode(114,101,115,116,114,97,105,110,95,119,95,55,56,0),79]]);
          let iconpipexpandr = 5.0;
         libfbjnil = 25.65 == iconpipexpandr;
         string6.set(`${verticalj.size}`, 3 & verticalj.size);
         iconpipexpandr *= parseFloat(`${verticalj.size}`);
      let play6 = libfbjnil ? !libfbjnil : libfbjnil;
      do {
         libfbjnil = sansP.length == 17;
         if (play6) {
            break;
         }
      } while ((!libfbjnil && 2 >= sansP.length) && play6);
      let debugN = 8744536 >= sansP.length;
      do {
          let injuryC = String.fromCharCode(115,95,55,48,95,100,101,97,100,0);
          let pangles = String.fromCharCode(113,95,56,53,95,115,121,109,98,111,108,0);
          let settings3 = false;
          let smallP = 2.0;
         sansP = "2";
         injuryC += `${(String.fromCharCode(115,0) == pangles ? pangles.length : parseInt(`${smallP}`))}`;
         settings3 = 61.35 == smallP;
         if (debugN) {
            break;
         }
      } while (debugN && (sansP.length <= 2));
          let fillB = 3.0;
          let appsY = false;
          let awaym = true;
         libfbjnil = !awaym;
         fillB *= parseFloat(`${parseInt(`${fillB}`) ^ 1}`);
         appsY = fillB < 53.98 && appsY;
      eabafadfadddbafeddddeeefeaafG += `${(2 + (corer ? 1 : 2))}`;
   }
      return;
    }

    await dispatch(updateUserAuth(result));

      settingF.push((1 << (Math.min(1, Math.abs((corer ? 5 : 3))))));
       let appsN = 3.0;
      for (let d = 0; d < 1; d++) {
         appsN /= Math.max(4, parseFloat(`${parseInt(`${appsN}`) % (Math.max(8, parseInt(`${appsN}`)))}`));
      }
         appsN *= parseFloat(`${parseInt(`${appsN}`) - parseInt(`${appsN}`)}`);
          let downloadedU = String.fromCharCode(110,111,116,99,104,95,115,95,49,51,0);
          let close3: Map<any, any> = new Map([[String.fromCharCode(116,95,49,55,95,100,110,111,119,0),false ], [String.fromCharCode(107,95,48,95,116,105,108,108,0),true ], [String.fromCharCode(104,95,54,57,95,99,114,111,119,100,105,110,0),false ]]);
          let c_lockX = String.fromCharCode(111,118,101,114,108,97,121,105,110,103,95,118,95,50,51,0);
         appsN -= parseFloat(`${parseInt(`${appsN}`) ^ 3}`);
         downloadedU += `${close3.size}`;
         close3 = new Map([[c_lockX, c_lockX.length]]);
      eabafadfadddbafeddddeeefeaafG += "3";
   for (let s = 0; s < 2; s++) {
      matchD %= Math.max(5, 3);
   }
       let libswscaleZ: Array<any> = [618, 424, 111];
       let storeA = 2;
       let greyarrowupX = 3;
          let catagoryQ = 5.0;
          let textlayoutmanagerN = 2;
         greyarrowupX &= parseInt(`${catagoryQ}`);
         catagoryQ -= 1;
         textlayoutmanagerN ^= textlayoutmanagerN ^ 3;
      for (let v = 0; v < 3; v++) {
         greyarrowupX ^= storeA;
      }
      while (storeA == 1) {
          let libbuffers = String.fromCharCode(107,105,99,107,95,120,95,57,50,0);
          let weathern = 1.0;
          let carousel3 = false;
         storeA -= storeA | 1;
         libbuffers = `${parseInt(`${weathern}`) * 3}`;
         weathern -= 3 % (Math.max(4, parseInt(`${weathern}`)));
         carousel3 = weathern >= 38.58 && !carousel3;
         break;
      }
      if ((storeA / 1) >= 2 || 5 >= (1 / (Math.max(2, storeA)))) {
         storeA &= 3 * libswscaleZ.length;
      }
         storeA |= storeA * greyarrowupX;
         libswscaleZ.push(storeA);
       let detaild: Map<any, any> = new Map([[String.fromCharCode(109,97,99,114,111,98,108,111,99,107,95,121,95,49,54,0),String.fromCharCode(100,105,115,115,105,109,105,108,97,114,105,116,121,95,112,95,57,53,0)], [String.fromCharCode(100,114,97,103,95,112,95,50,55,0),String.fromCharCode(101,118,98,117,102,102,101,114,95,122,95,55,0)]]);
         libswscaleZ.push(greyarrowupX);
      let uploadh = storeA >= 5916095;
      do {
         storeA ^= greyarrowupX + 3;
         if (uploadh) {
            break;
         }
      } while ((!libswscaleZ.includes(storeA)) && uploadh);
      matchD %= Math.max(2, parseInt(`${reminderw}`) & 2);
       let videovarJ = 5.0;
       let brightness9 = String.fromCharCode(98,95,56,53,95,98,97,103,0);
         brightness9 = "3";
       let verticaljl = 0.0;
         videovarJ /= Math.max(5, parseFloat(`${parseInt(`${verticaljl}`) | 2}`));
          let project4 = String.fromCharCode(115,95,57,53,95,101,116,101,114,110,105,116,121,0);
          let libturbomodulejsijniz = 2;
          let homeplayerT = 3;
         brightness9 += `${parseInt(`${videovarJ}`)}`;
         project4 += "3";
         libturbomodulejsijniz ^= project4.length << (Math.min(1, Math.abs(libturbomodulejsijniz)));
         homeplayerT ^= libturbomodulejsijniz << (Math.min(Math.abs(1), 2));
         brightness9 = `${brightness9.length & 2}`;
          let footballfiledlayoutO = 1;
         verticaljl *= 2;
         footballfiledlayoutO &= footballfiledlayoutO;
      settingF.push((parseInt(`${brightnesso}`) | (corer ? 5 : 2)));
    return;
  };

  const handleRefresh = async () => {
       let nativemoduleA = 0;
    let themeB = String.fromCharCode(115,104,97,108,108,95,50,95,49,48,0);
    let philippines6 = String.fromCharCode(122,95,56,49,95,97,116,116,114,105,98,117,116,101,0);
    let dycreatoru = String.fromCharCode(100,117,109,95,106,95,49,53,0);
    let bootsplashU: Map<any, any> = new Map([[String.fromCharCode(99,116,120,105,100,120,105,110,99,95,112,95,55,51,0),String.fromCharCode(104,95,54,49,95,108,101,102,116,109,111,115,116,0)], [String.fromCharCode(117,95,49,52,95,114,101,102,114,101,115,104,0),String.fromCharCode(102,95,55,49,95,97,118,99,99,0)]]);
    let bannerc = 1.0;
    let crownT = true;
    let friendsS = String.fromCharCode(117,95,54,57,95,100,101,99,111,109,112,0);
    let predictionwin9 = 1;
    let zoomG = String.fromCharCode(105,114,100,102,116,95,102,95,52,48,0);
    let hongkongo = 4.0;
    let popupn = 4.0;
    let reducerR = false;
    let kickA: Map<any, any> = new Map([[String.fromCharCode(110,95,56,95,100,118,100,97,116,97,0),String.fromCharCode(121,95,56,48,95,115,110,97,112,112,121,0)], [String.fromCharCode(115,97,108,116,101,100,95,113,95,49,55,0),String.fromCharCode(99,109,115,103,115,95,56,95,52,56,0)], [String.fromCharCode(114,95,57,55,95,115,105,103,110,105,110,103,0),String.fromCharCode(116,114,97,110,115,97,99,116,105,111,110,115,95,57,95,55,56,0)]]);
    let sharex: Map<any, any> = new Map([[String.fromCharCode(101,100,103,101,115,95,104,95,55,50,0),false ], [String.fromCharCode(100,105,115,116,95,112,95,53,55,0),true ], [String.fromCharCode(98,95,54,49,95,99,121,112,114,101,115,115,0),true ]]);
    let iconcloseZ: Map<any, any> = new Map([[String.fromCharCode(104,97,115,104,101,100,95,48,95,50,57,0),true ], [String.fromCharCode(98,110,99,98,98,95,100,95,56,49,0),false ]]);
    let videovarZ = 4;
    let playercommon5 = String.fromCharCode(111,95,49,53,95,100,101,115,116,114,117,99,116,0);
    let emojiheart2 = String.fromCharCode(104,119,97,99,99,101,108,95,105,95,57,0);
   let androidy = themeB == String.fromCharCode(49,120,104,112,98,98,102,118,120,111,0);
   do {
       let iconorientation0 = 1.0;
         iconorientation0 *= parseInt(`${iconorientation0}`) / 1;
         iconorientation0 += parseInt(`${iconorientation0}`);
      if (1.4 >= (iconorientation0 + iconorientation0) || (iconorientation0 / 1.4) >= 2.69) {
         iconorientation0 -= parseInt(`${iconorientation0}`);
      }
      themeB += "3";
      if (androidy) {
         break;
      }
   } while (androidy && (philippines6 == themeB));
   while (5 < (dycreatoru.length + parseInt(`${hongkongo}`))) {
      dycreatoru += `${nativemoduleA | 1}`;
      break;
   }
       let fullscreenmaxJ: Map<any, any> = new Map([[String.fromCharCode(122,95,50,55,95,117,110,114,101,108,105,97,98,108,101,0),971], [String.fromCharCode(109,97,103,110,105,116,117,100,101,95,54,95,51,0),572]]);
       let awayteamfield6: Map<any, any> = new Map([[String.fromCharCode(100,95,49,48,48,95,100,111,117,98,108,101,0),647], [String.fromCharCode(104,97,100,97,109,97,114,100,95,51,95,53,55,0),491]]);
       let canvasF: Array<any> = [71, 456];
      for (let q = 0; q < 1; q++) {
          let grayf = 0.0;
          let refreshborderlesse = String.fromCharCode(110,95,50,53,95,105,110,116,101,114,99,101,112,116,0);
         canvasF.push(canvasF.length);
         grayf += 2;
         refreshborderlesse = `${(String.fromCharCode(105,0) == refreshborderlesse ? refreshborderlesse.length : parseInt(`${grayf}`))}`;
      }
      while ((5 + awayteamfield6.size) == 3 && (5 + awayteamfield6.size) == 4) {
         awayteamfield6.set(`${awayteamfield6.size}`, fullscreenmaxJ.size & awayteamfield6.size);
         break;
      }
       let close5 = false;
       let areaj = false;
      let yellowh = areaj ? !areaj : areaj;
      do {
          let sellmathbackgroundK = String.fromCharCode(109,95,55,95,112,97,114,101,110,116,104,101,115,101,115,0);
         areaj = String.fromCharCode(68,0) == sellmathbackgroundK;
         if (yellowh) {
            break;
         }
      } while (yellowh && ((3 << (Math.min(3, Math.abs(awayteamfield6.size)))) <= 1));
       let j_imageT = String.fromCharCode(100,117,112,108,105,99,97,116,101,115,95,55,95,56,57,0);
       let libswscaleC: Array<any> = [557, 837, 390];
       let telemetryL: Array<any> = [510, 846];
          let dicej = 1.0;
          let downloadingF = 4.0;
         libswscaleC = [((areaj ? 5 : 2) >> (Math.min(Math.abs(parseInt(`${downloadingF}`)), 3)))];
         dicej *= parseFloat(`${parseInt(`${dicej}`)}`);
         downloadingF += parseFloat(`${parseInt(`${dicej}`)}`);
          let paginationh = 0;
          let subtexty: Map<any, any> = new Map([[String.fromCharCode(120,112,101,114,105,109,101,110,116,97,108,95,97,95,50,54,0),416], [String.fromCharCode(101,109,98,101,100,100,105,110,103,95,53,95,49,0),804]]);
         fullscreenmaxJ = new Map([[`${telemetryL.length}`, (telemetryL.length - (areaj ? 4 : 3))]]);
         paginationh |= subtexty.size;
         subtexty.set(`${paginationh}`, 1);
      while (4 < (libswscaleC.length & 1) && 1 < (fullscreenmaxJ.size & libswscaleC.length)) {
         libswscaleC.push(2);
         break;
      }
      bootsplashU.set(`${canvasF.length}`, canvasF.length | 1);
      friendsS += "3";
   if (bootsplashU.size > popupn) {
      bootsplashU = new Map([[`${predictionwin9}`, 1 * parseInt(`${hongkongo}`)]]);
   }
      hongkongo /= Math.max(5, bootsplashU.size);
      crownT = parseInt(`${hongkongo}`) >= friendsS.length;
       let manifestR = String.fromCharCode(112,97,110,101,108,95,100,95,50,51,0);
      for (let e = 0; e < 2; e++) {
          let goallogow = 5.0;
          let classesJ = false;
          let profilepicn = String.fromCharCode(101,120,105,115,116,97,110,99,101,95,111,95,52,52,0);
          let penaltymatchicon5: Map<any, any> = new Map([[String.fromCharCode(108,105,115,116,115,95,97,95,55,51,0),873], [String.fromCharCode(99,111,110,99,97,116,100,101,99,95,107,95,57,51,0),729], [String.fromCharCode(110,95,49,49,95,99,111,112,121,116,101,115,116,0),279]]);
          let other7 = String.fromCharCode(114,95,56,54,95,111,118,101,114,108,111,97,100,0);
         manifestR += `${other7.length >> (Math.min(Math.abs(1), 3))}`;
         goallogow /= Math.max(4, parseFloat(`${penaltymatchicon5.size}`));
         classesJ = classesJ && profilepicn.length > 55;
         profilepicn = `${profilepicn.length}`;
         penaltymatchicon5.set(`${classesJ}`, 1 % (Math.max(parseInt(`${goallogow}`), 3)));
         other7 += `${3 ^ parseInt(`${goallogow}`)}`;
      }
      for (let y = 0; y < 2; y++) {
         manifestR += `${manifestR.length}`;
      }
      for (let m = 0; m < 1; m++) {
          let episode6 = String.fromCharCode(100,95,55,56,95,98,97,115,105,115,0);
          let friendsd = 5.0;
          let bgvipxvod_ = String.fromCharCode(101,115,116,97,98,108,105,115,104,95,99,95,54,48,0);
          let progress8 = String.fromCharCode(98,95,52,53,95,100,101,112,101,110,100,101,110,99,121,0);
          let template_p0_: Map<any, any> = new Map([[String.fromCharCode(110,100,101,120,95,99,95,53,56,0),true ], [String.fromCharCode(112,95,49,50,95,115,97,109,112,108,105,110,103,0),false ], [String.fromCharCode(97,115,102,114,116,112,95,114,95,50,55,0),false ]]);
         manifestR = `${progress8.length * manifestR.length}`;
         episode6 += `${parseInt(`${friendsd}`)}`;
         friendsd -= parseFloat(`${episode6.length}`);
         bgvipxvod_ += `${(String.fromCharCode(86,0) == episode6 ? episode6.length : template_p0_.size)}`;
         progress8 = `${bgvipxvod_.length | episode6.length}`;
         template_p0_ = new Map([[`${template_p0_.size}`, (episode6 == String.fromCharCode(118,0) ? episode6.length : template_p0_.size)]]);
      }
      predictionwin9 |= 2;
   let floatingU = String.fromCharCode(107,117,120,56,52,117,0) == dycreatoru;
   do {
      dycreatoru += `${parseInt(`${bannerc}`) & 3}`;
      if (floatingU) {
         break;
      }
   } while (floatingU && (themeB == String.fromCharCode(86,0)));
   for (let z = 0; z < 3; z++) {
      dycreatoru += "3";
   }
      dycreatoru += `${predictionwin9 / (Math.max(philippines6.length, 9))}`;
      philippines6 += `${parseInt(`${bannerc}`)}`;
      bootsplashU.set(friendsS, 2);
   let backward3 = hongkongo >= 6735918.0;
   do {
      hongkongo /= Math.max(4, 1);
      if (backward3) {
         break;
      }
   } while ((hongkongo >= 2.98) && backward3);

    setRefreshing(true);

   if (friendsS.endsWith(`${nativemoduleA}`)) {
      friendsS = `${parseInt(`${popupn}`) + friendsS.length}`;
   }
      themeB += `${parseInt(`${bannerc}`) >> (Math.min(5, Math.abs(3)))}`;
      philippines6 += "3";
   for (let a = 0; a < 2; a++) {
      dycreatoru = `${zoomG.length ^ 2}`;
   }
   if ((popupn / 4.92) >= 1.98) {
      themeB = `${friendsS.length}`;
   }
   let settingsn = popupn >= 7222703.0;
   do {
      popupn /= Math.max(5, parseInt(`${bannerc}`));
      if (settingsn) {
         break;
      }
   } while ((popupn == 4.89) && settingsn);
      philippines6 += `${philippines6.length | themeB.length}`;
      popupn += zoomG.length;
      popupn /= Math.max(philippines6.length >> (Math.min(2, Math.abs(predictionwin9))), 1);
      bannerc -= bootsplashU.size * 1;
   let codegenF = 5160790 >= themeB.length;
   do {
      themeB += "1";
      if (codegenF) {
         break;
      }
   } while (codegenF && (themeB.length <= hongkongo));
   let libreactnativeblobU = 8609678 <= bootsplashU.size;
   do {
      bootsplashU = new Map([[`${crownT}`, 3 & parseInt(`${bannerc}`)]]);
      if (libreactnativeblobU) {
         break;
      }
   } while ((4 < (philippines6.length % (Math.max(4, 3)))) && libreactnativeblobU);
   while (philippines6.includes(`${predictionwin9}`)) {
      predictionwin9 &= dycreatoru.length >> (Math.min(Math.abs(2), 2));
      break;
   }
   for (let b = 0; b < 2; b++) {
      bannerc -= parseInt(`${popupn}`);
   }
    await refreshUserState();

      bootsplashU = new Map([[`${nativemoduleA}`, nativemoduleA - philippines6.length]]);
   let abidetectp = 5418458 >= bootsplashU.size;
   do {
       let libloggerx = String.fromCharCode(101,103,119,105,116,95,118,95,55,56,0);
          let k_positionp: Map<any, any> = new Map([[String.fromCharCode(119,97,116,99,104,101,100,95,53,95,52,49,0),7], [String.fromCharCode(122,95,54,49,95,119,100,108,116,0),384]]);
          let nbatrophyL: Map<any, any> = new Map([[String.fromCharCode(112,114,111,102,105,108,101,95,101,95,56,52,0),String.fromCharCode(102,95,53,55,95,100,105,118,105,115,105,111,110,0)], [String.fromCharCode(101,95,54,48,95,99,105,114,99,117,108,97,116,105,110,103,0),String.fromCharCode(97,95,49,53,95,115,113,108,105,116,101,101,120,116,0)]]);
         libloggerx += `${k_positionp.size}`;
         k_positionp.set(`${nbatrophyL.size}`, nbatrophyL.size >> (Math.min(2, Math.abs(nbatrophyL.size))));
         libloggerx = `${libloggerx.length | libloggerx.length}`;
      let awayicond = libloggerx == String.fromCharCode(112,99,118,0);
      do {
          let codegenL = 0;
         libloggerx += `${codegenL | libloggerx.length}`;
         if (awayicond) {
            break;
         }
      } while (awayicond && (5 <= libloggerx.length && libloggerx != String.fromCharCode(86,0)));
      bootsplashU.set(`${dycreatoru}`, (dycreatoru == String.fromCharCode(78,0) ? dycreatoru.length : bootsplashU.size));
      if (abidetectp) {
         break;
      }
   } while (abidetectp && (4 >= (parseInt(`${bannerc}`) / (Math.max(6, bootsplashU.size))) || 4 >= (parseInt(`${bannerc}`) / (Math.max(1, bootsplashU.size)))));
   for (let o = 0; o < 1; o++) {
       let libfbL: Map<any, any> = new Map([[String.fromCharCode(108,95,55,50,95,114,116,114,101,101,0),467], [String.fromCharCode(116,101,114,109,105,110,97,108,95,122,95,50,54,0),97], [String.fromCharCode(117,95,54,55,95,102,116,118,110,111,100,101,0),913]]);
       let backwardL = 0;
       let mbjscommonJ = 4.0;
       let iconcloseq: Array<any> = [String.fromCharCode(118,95,53,57,95,116,114,117,110,107,0), String.fromCharCode(118,95,57,48,95,112,114,101,100,120,0), String.fromCharCode(107,95,57,95,100,118,100,97,116,97,0)];
      if (4 == backwardL) {
         mbjscommonJ *= parseFloat(`${iconcloseq.length - 2}`);
      }
          let largeu: Map<any, any> = new Map([[String.fromCharCode(121,95,54,55,95,108,97,110,103,117,97,103,101,0),495], [String.fromCharCode(102,114,101,101,102,111,114,109,95,122,95,50,55,0),370]]);
          let latnV = true;
         libfbL = new Map([[`${mbjscommonJ}`, 1 ^ backwardL]]);
         largeu = new Map([[`${largeu.size}`, largeu.size]]);
         latnV = !latnV || largeu.size == 5;
      if (libfbL.get(`${backwardL}`) != null) {
         backwardL &= 3;
      }
       let backwardV = 5;
       let listz = 0;
          let acceptedA = String.fromCharCode(102,95,50,57,95,108,105,98,110,100,105,0);
         libfbL.set(`${listz}`, iconcloseq.length);
         acceptedA = `${(acceptedA == String.fromCharCode(114,0) ? acceptedA.length : acceptedA.length)}`;
      for (let y = 0; y < 2; y++) {
         backwardL -= 2;
      }
      if (2 > (3 << (Math.min(4, Math.abs(backwardL))))) {
         backwardL >>= Math.min(Math.abs(listz), 2);
      }
         mbjscommonJ *= parseFloat(`${2}`);
      while ((iconcloseq.length & listz) > 5 && 3 > (5 & listz)) {
          let zhengpianF = String.fromCharCode(121,95,52,95,105,110,116,105,0);
         iconcloseq.push(2 ^ libfbL.size);
         zhengpianF += `${zhengpianF.length - 2}`;
         break;
      }
       let scrollviewp = String.fromCharCode(116,109,112,95,122,95,50,52,0);
      while ((1 - backwardL) >= 3) {
         backwardL %= Math.max(1, 2);
         break;
      }
      while (iconcloseq.length == 4) {
         backwardL += listz + 1;
         break;
      }
      crownT = 30 <= friendsS.length && 12.98 <= hongkongo;
   }
      bootsplashU.set(themeB, 1);
      friendsS = `${1 % (Math.max(3, philippines6.length))}`;
       let gradle5 = String.fromCharCode(121,95,56,50,95,115,116,114,101,97,109,102,111,117,114,99,99,0);
       let mbbannerZ = 0.0;
       let successe = 4;
       let modalp: Array<any> = [String.fromCharCode(107,95,53,95,101,105,112,0), String.fromCharCode(100,101,99,114,101,102,95,106,95,49,48,0), String.fromCharCode(105,100,120,95,122,95,56,51,0)];
       let typesk: Array<any> = [86, 432];
      while (!modalp.includes(successe)) {
          let rightM: Array<any> = [732, 21, 528];
          let whiteanimationlive0 = false;
          let suggestion0: Map<any, any> = new Map([[String.fromCharCode(97,95,53,53,95,114,101,112,97,105,110,116,0),true ], [String.fromCharCode(100,95,56,55,95,105,110,100,105,99,105,101,115,0),false ]]);
          let sportsZ = String.fromCharCode(112,114,101,116,116,121,95,108,95,57,49,0);
          let toponA: Array<any> = [538, 669, 463];
         modalp = [parseInt(`${mbbannerZ}`) / 3];
         rightM = [toponA.length ^ 1];
         whiteanimationlive0 = 19 <= toponA.length;
         suggestion0 = new Map([[`${suggestion0.size}`, suggestion0.size % (Math.max(2, 7))]]);
         sportsZ = "1";
         break;
      }
         gradle5 += `${(String.fromCharCode(69,0) == gradle5 ? successe : gradle5.length)}`;
          let iconarrowrightS = 0;
          let matchinactiveE = 2;
          let heartN: Array<any> = [939, 109, 830];
         mbbannerZ /= Math.max(1, heartN.length);
         iconarrowrightS >>= Math.min(Math.abs(matchinactiveE | 1), 2);
         matchinactiveE ^= iconarrowrightS;
         heartN.push(matchinactiveE | iconarrowrightS);
      for (let f = 0; f < 1; f++) {
         successe >>= Math.min(gradle5.length, 2);
      }
      while (gradle5.length <= 3) {
          let statsnomoredataq: Map<any, any> = new Map([[String.fromCharCode(103,95,52,95,110,111,99,97,115,101,0),118], [String.fromCharCode(100,95,51,95,115,116,100,97,116,111,109,105,99,0),416]]);
          let binddatas5 = 0.0;
         gradle5 += `${2 - gradle5.length}`;
         statsnomoredataq.set(`${binddatas5}`, statsnomoredataq.size);
         binddatas5 -= parseInt(`${binddatas5}`);
         break;
      }
          let baselineI = 1.0;
          let q_hashy = 0.0;
          let shirtY = String.fromCharCode(97,95,53,51,95,112,111,115,116,0);
         successe ^= parseInt(`${q_hashy}`);
         baselineI -= parseInt(`${baselineI}`) / (Math.max(1, 10));
         q_hashy += parseInt(`${baselineI}`);
         shirtY += "1";
         modalp = [successe];
      if ((modalp.length * 4) == 4 || 3 == (4 * successe)) {
         successe <<= Math.min(Math.abs(3), 3);
      }
      kickA.set(dycreatoru, predictionwin9 - 1);
   let edit8 = 5870115 >= nativemoduleA;
   do {
       let iconsharefriendsF: Array<any> = [225, 392];
       let whistle8 = String.fromCharCode(114,95,52,56,95,116,104,97,110,0);
       let greyarrowupW = false;
       let internetH = String.fromCharCode(111,95,50,49,95,116,106,101,120,97,109,112,108,101,116,101,115,116,0);
       let refreshborderlessR: Array<any> = [619, 211, 143];
      if (!greyarrowupW) {
         greyarrowupW = (whistle8.length << (Math.min(1, iconsharefriendsF.length))) <= 63;
      }
         greyarrowupW = 51 == refreshborderlessR.length || 51 == iconsharefriendsF.length;
          let chatj = 1.0;
          let trashD: Array<any> = [873, 107];
          let profileG = String.fromCharCode(115,101,116,117,112,95,121,95,52,49,0);
         whistle8 += `${1 * parseInt(`${chatj}`)}`;
         chatj /= Math.max(3, 3);
         trashD = [3];
         profileG += `${trashD.length}`;
      if (greyarrowupW) {
         refreshborderlessR = [3];
      }
      let videovard = greyarrowupW ? !greyarrowupW : greyarrowupW;
      do {
          let u_count5 = 4;
         greyarrowupW = 21 > refreshborderlessR.length;
         u_count5 %= Math.max(2, u_count5 & u_count5);
         if (videovard) {
            break;
         }
      } while ((greyarrowupW) && videovard);
      if (4 > (iconsharefriendsF.length ^ 2) && !greyarrowupW) {
         iconsharefriendsF = [(internetH.length & (greyarrowupW ? 5 : 3))];
      }
          let mapping9 = 2;
          let whatsappH = 5.0;
         refreshborderlessR.push(iconsharefriendsF.length + mapping9);
         mapping9 %= Math.max(4, parseInt(`${whatsappH}`));
         internetH = `${((greyarrowupW ? 2 : 4))}`;
      if (greyarrowupW || (1 << (Math.min(2, refreshborderlessR.length))) == 2) {
         refreshborderlessR.push(internetH.length ^ refreshborderlessR.length);
      }
          let bingS = String.fromCharCode(106,95,49,53,95,117,112,100,97,116,101,0);
          let userv: Map<any, any> = new Map([[String.fromCharCode(112,105,110,95,114,95,49,48,0),382], [String.fromCharCode(108,95,53,48,95,100,105,115,112,108,97,121,0),13], [String.fromCharCode(104,95,53,53,95,115,121,109,98,111,108,105,99,97,116,97,98,108,101,0),486]]);
          let imagesa = 1;
         refreshborderlessR = [bingS.length * userv.size];
         bingS += `${imagesa << (Math.min(Math.abs(2), 5))}`;
         userv = new Map([[`${imagesa}`, imagesa >> (Math.min(2, Math.abs(imagesa)))]]);
         greyarrowupW = whistle8.length < 80;
      for (let s = 0; s < 1; s++) {
          let libturbomodulejsijniL = String.fromCharCode(99,111,110,115,117,109,112,116,105,111,110,95,117,95,52,48,0);
          let uploade: Map<any, any> = new Map([[String.fromCharCode(106,95,51,50,95,98,111,114,105,110,103,115,115,108,0),String.fromCharCode(98,95,56,51,95,117,112,100,97,116,101,0)], [String.fromCharCode(102,95,49,57,95,105,110,116,101,114,109,105,100,105,97,116,101,0),String.fromCharCode(110,111,116,97,116,105,111,110,95,116,95,53,57,0)], [String.fromCharCode(100,111,99,115,95,55,95,53,57,0),String.fromCharCode(116,101,115,116,99,111,110,102,105,103,95,106,95,53,50,0)]]);
          let libnmsJ: Array<any> = [445, 843];
          let transfer6 = 4.0;
          let videovarA: Map<any, any> = new Map([[String.fromCharCode(116,95,52,49,95,100,101,99,111,100,101,102,114,97,109,101,0),701], [String.fromCharCode(97,98,115,111,108,117,116,101,95,55,95,52,48,0),255], [String.fromCharCode(97,95,56,53,95,110,97,110,112,97,0),832]]);
         refreshborderlessR.push(((greyarrowupW ? 2 : 3) | iconsharefriendsF.length));
         libturbomodulejsijniL += `${uploade.size}`;
         uploade.set(libturbomodulejsijniL, parseInt(`${transfer6}`));
         libnmsJ = [libturbomodulejsijniL.length % 2];
         transfer6 += parseInt(`${transfer6}`);
         videovarA.set(libturbomodulejsijniL, libturbomodulejsijniL.length);
      }
       let videojsm: Map<any, any> = new Map([[String.fromCharCode(111,98,116,97,105,110,101,114,95,101,95,51,51,0),983], [String.fromCharCode(106,95,57,53,95,115,105,103,110,112,111,115,116,0),297], [String.fromCharCode(115,95,52,50,95,104,101,120,98,110,0),302]]);
         greyarrowupW = whistle8.length == 27;
          let o_positionf = 0;
          let libavcodecb: Map<any, any> = new Map([[String.fromCharCode(121,95,53,56,95,116,114,97,99,101,114,0),205], [String.fromCharCode(97,112,115,95,104,95,56,51,0),75], [String.fromCharCode(110,95,49,55,95,116,119,105,110,118,113,0),706]]);
         iconsharefriendsF = [((greyarrowupW ? 5 : 2) | 1)];
         o_positionf %= Math.max(o_positionf * 2, 5);
         libavcodecb = new Map([[`${libavcodecb.size}`, o_positionf]]);
      nativemoduleA += 2 | parseInt(`${popupn}`);
      if (edit8) {
         break;
      }
   } while (edit8 && (4 < (nativemoduleA >> (Math.min(dycreatoru.length, 1))) || (nativemoduleA >> (Math.min(dycreatoru.length, 3))) < 4));
       let libloggerw: Array<any> = [612, 50, 764];
       let reacti: Map<any, any> = new Map([[String.fromCharCode(98,114,101,97,107,111,117,116,95,122,95,52,54,0),true ], [String.fromCharCode(107,95,51,52,95,111,99,116,112,111,105,110,116,0),false ]]);
         libloggerw = [reacti.size >> (Math.min(Math.abs(1), 5))];
      let bellM = reacti.size <= 9034567;
      do {
         reacti.set(`${libloggerw.length}`, reacti.size ^ libloggerw.length);
         if (bellM) {
            break;
         }
      } while ((Array.from(reacti.values()).includes(libloggerw.length)) && bellM);
         reacti.set(`${libloggerw.length}`, 2);
      let type__W = 7361604 >= reacti.size;
      do {
         reacti.set(`${libloggerw.length}`, 1);
         if (type__W) {
            break;
         }
      } while ((reacti.get(`${libloggerw.length}`) != null) && type__W);
          let settingsq = 3;
         libloggerw = [libloggerw.length + reacti.size];
         settingsq -= settingsq;
      if (Array.from(reacti.keys()).includes(`${libloggerw.length}`)) {
          let videovarv = true;
          let mimex = String.fromCharCode(117,112,97,116,101,100,95,112,95,55,52,0);
          let reactnavigationq = 3;
          let encryptorS = 4;
          let slidera = false;
         libloggerw = [2];
         videovarv = mimex.length == 64;
         mimex = `${encryptorS}`;
         reactnavigationq /= Math.max(5, (reactnavigationq / (Math.max(7, (videovarv ? 4 : 2)))));
         slidera = videovarv;
      }
      themeB += `${friendsS.length}`;
      sharex = new Map([[`${popupn}`, 1]]);
       let tempnodatan = 1.0;
         tempnodatan -= parseFloat(`${parseInt(`${tempnodatan}`)}`);
       let unreadM = String.fromCharCode(116,114,97,99,107,95,108,95,55,52,0);
      let videobufferloadingP = tempnodatan >= 9347737.0;
      do {
          let popupv: Map<any, any> = new Map([[String.fromCharCode(111,95,51,56,95,110,105,101,108,115,97,100,100,0),406], [String.fromCharCode(108,95,55,56,95,108,104,115,0),508]]);
          let transfers = String.fromCharCode(103,114,111,101,115,116,108,95,121,95,54,48,0);
          let previewy = 2.0;
          let whistle8K = 1.0;
          let philippinesM: Map<any, any> = new Map([[String.fromCharCode(98,108,105,110,100,101,100,95,109,95,54,48,0),983], [String.fromCharCode(102,114,97,109,101,115,121,110,99,95,103,95,55,0),520], [String.fromCharCode(115,105,103,116,101,114,109,95,48,95,51,51,0),330]]);
         tempnodatan += parseFloat(`${unreadM.length}`);
         popupv.set(`${previewy}`, 2);
         transfers = `${philippinesM.size / (Math.max(transfers.length, 1))}`;
         previewy *= parseFloat(`${2 / (Math.max(8, parseInt(`${whistle8K}`)))}`);
         whistle8K *= parseFloat(`${3}`);
         philippinesM = new Map([[`${philippinesM.size}`, parseInt(`${whistle8K}`) & 2]]);
         if (videobufferloadingP) {
            break;
         }
      } while (videobufferloadingP && (3 < (2 ^ unreadM.length) && (unreadM.length - 2) < 1));
      kickA = new Map([[`${reducerR}`, (philippines6.length >> (Math.min(3, Math.abs((reducerR ? 1 : 4)))))]]);
      themeB = `${(String.fromCharCode(76,0) == dycreatoru ? dycreatoru.length : nativemoduleA)}`;
       let moreT: Map<any, any> = new Map([[String.fromCharCode(105,95,53,49,95,115,101,116,117,112,105,110,116,114,97,114,101,99,111,110,0),322], [String.fromCharCode(101,95,53,53,95,102,117,115,101,0),824], [String.fromCharCode(112,114,111,108,111,110,103,95,118,95,55,57,0),455]]);
       let indexW = 1.0;
       let sellE = false;
         indexW += parseFloat(`${1 - parseInt(`${indexW}`)}`);
      if (!sellE && 2 >= (moreT.size + 5)) {
         moreT = new Map([[`${moreT.size}`, moreT.size]]);
      }
         indexW *= parseFloat(`${2}`);
      let league_ = indexW <= 8737074.0;
      do {
          let codeE: Array<any> = [822, 453];
          let reminderS = String.fromCharCode(108,95,53,48,95,103,100,105,103,114,97,98,0);
          let twitterY = 1;
         indexW -= parseFloat(`${2}`);
         codeE.push(codeE.length / (Math.max(6, twitterY)));
         reminderS += `${3 / (Math.max(5, reminderS.length))}`;
         twitterY *= twitterY;
         if (league_) {
            break;
         }
      } while (league_ && (moreT.get(`${indexW}`) != null));
          let buttonb = String.fromCharCode(104,95,52,52,95,114,116,112,101,110,99,0);
          let control7 = true;
         indexW += parseFloat(`${2 * buttonb.length}`);
         buttonb += `${((control7 ? 5 : 1))}`;
          let datao = 1.0;
          let sinap = String.fromCharCode(102,119,104,116,95,56,95,52,49,0);
         moreT = new Map([[`${datao}`, parseInt(`${indexW}`) * 3]]);
         datao *= parseFloat(`${sinap.length - 2}`);
         sinap = "1";
          let build0 = 1.0;
          let stringS = false;
          let iconlogoutb = 4.0;
         moreT = new Map([[`${moreT.size}`, moreT.size]]);
         build0 *= parseFloat(`${3 * parseInt(`${iconlogoutb}`)}`);
         stringS = build0 < 90.72;
         iconlogoutb /= Math.max(5, parseFloat(`${parseInt(`${build0}`) | 3}`));
      while (moreT.get(`${indexW}`) != null) {
          let videobufferloading8 = true;
          let agreementb: Map<any, any> = new Map([[String.fromCharCode(100,97,116,97,116,121,112,101,115,95,54,95,51,53,0),168], [String.fromCharCode(99,119,114,115,105,95,103,95,53,50,0),770], [String.fromCharCode(120,95,52,51,95,109,106,112,101,103,101,110,99,0),253]]);
          let penaltyshootj: Array<any> = [756, 594, 387];
          let cedbadcebfbfbfbcfecbc1 = 5;
         indexW /= Math.max(parseFloat(`${3 | parseInt(`${indexW}`)}`), 2);
         videobufferloading8 = 90 == penaltyshootj.length;
         agreementb = new Map([[`${cedbadcebfbfbfbcfecbc1}`, (cedbadcebfbfbfbcfecbc1 - (videobufferloading8 ? 5 : 2))]]);
         penaltyshootj.push(((videobufferloading8 ? 5 : 2) * 3));
         break;
      }
      for (let d = 0; d < 1; d++) {
         moreT.set(`${indexW}`, (parseInt(`${indexW}`) ^ (sellE ? 2 : 2)));
      }
      crownT = bootsplashU.get(`${hongkongo}`) != null;
   if (iconcloseZ.get(`${hongkongo}`) == null) {
      iconcloseZ = new Map([[`${bootsplashU.size}`, 1]]);
   }
      reducerR = bootsplashU.size > predictionwin9;
    setRefreshing(false);
  };

  const insets = useSafeAreaInsets();

  useEffect(() => {
    const unsubscribe = navigation.addListener("blur", () => {
      
      dispatch(hideBottomSheetAction());
    });
    return unsubscribe;
  }, [navigator]);

  useFocusEffect(
    useCallback(() => {
      Orientation.lockToPortrait();
      return () => {
        
      };
    }, [])
  );

  
  
  
  
  const escapeRegExp = (string: string) => {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  };
  const highlightText = (text: string, keyword: string) => {
    
    const escapedKeyword = escapeRegExp(keyword);
    const parts = text.split(new RegExp(`(${escapedKeyword})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === keyword.toLowerCase() ? (
        <Text
          key={index}
          style={{ ...textVariants.body, color: colors.yellow, fontSize: 15 }}
        >
          {part}
        </Text>
      ) : (
        <Text
          key={index}
          style={{ ...textVariants.body, color: "#FFF0CA", fontSize: 15 }}
        >
          {part}
        </Text>
      )
    );
  };

  const fetchBannerAd = async () => {
       let navigationT = false;
    let manifest9 = true;
    let backwardx = 4;
    let reactnativeratings6 = 3.0;
    let configurex = String.fromCharCode(111,95,55,56,95,109,100,112,114,0);
    let libjsif = false;
    let weatherb = String.fromCharCode(116,114,101,101,119,114,105,116,101,114,95,119,95,55,55,0);
    let iconarrowrightG = 0;
    let iconsaveimagev: Array<any> = [933, 345, 202];
    let attributedstringR = 0.0;
    let o_titlec = 3;
    let downloading5 = String.fromCharCode(122,95,54,48,95,111,99,115,112,0);
    let attributedstrings = String.fromCharCode(102,95,49,54,95,97,115,99,111,110,102,0);
    let defaultroombgt = 2;
      weatherb += `${1 * iconsaveimagev.length}`;
       let chinaE = 3;
       let klevinN: Array<any> = [83, 797];
      let tickedH = 8690891 <= klevinN.length;
      do {
         klevinN.push(klevinN.length << (Math.min(5, Math.abs(chinaE))));
         if (tickedH) {
            break;
         }
      } while (tickedH && ((chinaE ^ 3) > 1 && (chinaE ^ 3) > 3));
      while (5 > (klevinN.length & chinaE)) {
         klevinN = [1];
         break;
      }
      if (3 <= (chinaE - klevinN.length) && 5 <= (klevinN.length - 3)) {
          let rewind1: Map<any, any> = new Map([[String.fromCharCode(118,105,100,101,111,95,122,95,55,50,0),740], [String.fromCharCode(103,95,52,49,95,115,101,103,102,101,97,116,117,114,101,0),488]]);
          let gmailJ: Array<any> = [273, 678, 90];
          let yellowD = 0;
          let episodesF = false;
          let u_unlockb = String.fromCharCode(113,95,51,57,95,114,101,102,101,114,114,101,114,0);
         klevinN = [rewind1.size % (Math.max(1, 10))];
         rewind1 = new Map([[u_unlockb, u_unlockb.length]]);
         gmailJ = [2];
         yellowD -= 1 | gmailJ.length;
         episodesF = 66 <= yellowD && u_unlockb == String.fromCharCode(80,0);
      }
         chinaE *= chinaE;
       let optionsd = String.fromCharCode(115,111,102,116,102,108,111,97,116,95,103,95,57,50,0);
         optionsd = `${klevinN.length % (Math.max(5, optionsd.length))}`;
      navigationT = iconarrowrightG > 42;
   while (!navigationT && 3 < (backwardx >> (Math.min(Math.abs(5), 5)))) {
      navigationT = backwardx >= iconsaveimagev.length;
      break;
   }
      backwardx |= ((manifest9 ? 3 : 5));
   let textinputi = configurex == String.fromCharCode(105,115,112,118,48,100,103,0);
   do {
      configurex = `${configurex.length * parseInt(`${reactnativeratings6}`)}`;
      if (textinputi) {
         break;
      }
   } while (textinputi && (configurex.includes(`${iconsaveimagev.length}`)));
       let privatechatbg7 = 4;
       let iconsettingd: Map<any, any> = new Map([[String.fromCharCode(101,115,116,114,111,121,95,50,95,51,56,0),667], [String.fromCharCode(105,110,116,101,114,115,101,99,116,115,95,121,95,51,48,0),554], [String.fromCharCode(119,95,51,50,95,108,111,119,0),296]]);
      let forwardj = privatechatbg7 <= 7885081;
      do {
         privatechatbg7 *= 2;
         if (forwardj) {
            break;
         }
      } while (forwardj && ((privatechatbg7 - iconsettingd.size) > 1 || 5 > (1 - privatechatbg7)));
      if (privatechatbg7 < iconsettingd.size) {
         privatechatbg7 += 3;
      }
         privatechatbg7 *= privatechatbg7 - iconsettingd.size;
      for (let j = 0; j < 1; j++) {
          let catalogJ: Array<any> = [String.fromCharCode(108,117,116,100,95,110,95,50,48,0), String.fromCharCode(99,111,110,115,117,109,101,100,95,54,95,52,51,0)];
          let skipQ = String.fromCharCode(103,95,52,49,95,115,101,115,115,105,111,110,105,100,0);
          let routera = String.fromCharCode(104,95,56,55,95,115,121,109,0);
          let vipsportu = String.fromCharCode(115,95,56,51,95,100,101,97,99,116,0);
         privatechatbg7 *= skipQ.length - routera.length;
         catalogJ = [catalogJ.length / 1];
         skipQ += `${vipsportu.length << (Math.min(2, catalogJ.length))}`;
         routera = `${(String.fromCharCode(81,0) == vipsportu ? catalogJ.length : vipsportu.length)}`;
      }
         privatechatbg7 /= Math.max(1, privatechatbg7 & 1);
         iconsettingd = new Map([[`${iconsettingd.size}`, iconsettingd.size]]);
      attributedstringR += downloading5.length;

    const banner = await mayi_ConstCheckbox.getEventBanner();

   for (let g = 0; g < 2; g++) {
      navigationT = configurex.endsWith(`${o_titlec}`);
   }
      downloading5 += `${((manifest9 ? 4 : 1) & weatherb.length)}`;
       let pageW = String.fromCharCode(105,109,112,108,105,99,105,116,101,108,121,95,56,95,56,52,0);
       let chat8 = String.fromCharCode(120,95,52,55,95,101,109,117,108,97,116,111,114,0);
         chat8 += `${chat8.length ^ 3}`;
      while (3 < chat8.length) {
         pageW += `${chat8.length}`;
         break;
      }
      let libflipperB = chat8.length >= 6156773;
      do {
         chat8 = "2";
         if (libflipperB) {
            break;
         }
      } while ((pageW.length >= chat8.length) && libflipperB);
         pageW += "2";
       let viewsb: Array<any> = [806, 413];
      for (let m = 0; m < 3; m++) {
          let read3 = String.fromCharCode(118,115,114,99,95,56,95,53,52,0);
         pageW += `${3 & read3.length}`;
      }
      configurex += `${weatherb.length}`;
      navigationT = 67 <= o_titlec;
   for (let b = 0; b < 2; b++) {
      reactnativeratings6 -= (String.fromCharCode(116,0) == configurex ? configurex.length : (manifest9 ? 5 : 5));
   }
       let whiteG = 5.0;
      if (whiteG > whiteG) {
         whiteG -= parseInt(`${whiteG}`) - 2;
      }
      if ((whiteG / (Math.max(3, whiteG))) >= 3.59 && (whiteG / 3.59) >= 1.92) {
         whiteG *= 1 % (Math.max(4, parseInt(`${whiteG}`)));
      }
         whiteG -= parseInt(`${whiteG}`);
      o_titlec &= iconarrowrightG;

    if (banner) {

      libjsif = (o_titlec % (Math.max(iconsaveimagev.length, 7))) > 79;
   for (let t = 0; t < 1; t++) {
      downloading5 = `${weatherb.length}`;
   }
      libjsif = downloading5.endsWith(`${navigationT}`);
       let iconclosewhiteH = 2.0;
      while (iconclosewhiteH >= iconclosewhiteH) {
          let singleY = String.fromCharCode(122,95,51,53,95,102,117,116,101,120,0);
          let libnms2 = String.fromCharCode(104,97,115,120,95,109,95,49,0);
          let pausez: Map<any, any> = new Map([[String.fromCharCode(99,108,103,101,116,95,106,95,55,52,0),831], [String.fromCharCode(109,112,99,104,117,102,102,95,120,95,57,53,0),108], [String.fromCharCode(120,106,112,101,103,95,115,95,51,49,0),934]]);
          let predictionbuttonu: Array<any> = [659, 795, 807];
          let ewardede: Array<any> = [String.fromCharCode(117,95,52,55,95,109,97,107,101,115,114,112,109,0), String.fromCharCode(103,95,56,50,0), String.fromCharCode(97,95,51,49,95,99,111,110,116,114,111,108,108,101,114,115,0)];
         iconclosewhiteH /= Math.max(3, pausez.size + 2);
         singleY += `${libnms2.length}`;
         libnms2 = `${singleY.length}`;
         pausez = new Map([[`${ewardede.length}`, 3]]);
         predictionbuttonu.push(ewardede.length ^ predictionbuttonu.length);
         break;
      }
       let clubF: Array<any> = [621, 924];
       let agreement0: Array<any> = [769, 421, 664];
         clubF = [clubF.length << (Math.min(Math.abs(1), 4))];
      o_titlec >>= Math.min(parseInt(`${Math.abs(((libjsif ? 1 : 1) % (Math.max(weatherb.length, 7))))}`), 5);
   let privacyL = String.fromCharCode(105,48,107,103,0) == configurex;
   do {
       let moreR = String.fromCharCode(115,99,97,108,101,100,99,111,110,118,111,108,118,101,95,52,95,51,52,0);
       let trashM = false;
       let vietnamv = false;
          let applications: Map<any, any> = new Map([[String.fromCharCode(112,105,116,99,104,95,119,95,56,56,0),313], [String.fromCharCode(116,114,117,101,104,100,95,98,95,55,53,0),82], [String.fromCharCode(109,95,55,48,95,110,100,111,116,115,0),822]]);
         trashM = 58 < applications.size;
      for (let i = 0; i < 3; i++) {
          let resendz = 2;
          let send7 = String.fromCharCode(101,100,105,116,97,98,108,101,95,120,95,55,53,0);
          let hooksR = String.fromCharCode(113,99,101,108,112,95,54,95,52,57,0);
          let termsA: Map<any, any> = new Map([[String.fromCharCode(97,100,106,117,115,109,101,110,116,115,95,120,95,57,53,0),String.fromCharCode(98,95,49,95,98,115,101,114,118,101,114,0)], [String.fromCharCode(107,105,99,107,95,119,95,52,48,0),String.fromCharCode(116,105,109,101,122,111,110,101,95,99,95,53,57,0)]]);
          let issubq = 3;
         vietnamv = trashM;
         resendz /= Math.max(issubq, 3);
         send7 = `${1 + issubq}`;
         hooksR += `${termsA.size * send7.length}`;
         termsA.set(hooksR, 3 >> (Math.min(5, send7.length)));
      }
      configurex += `${attributedstrings.length | 1}`;
      moreR = "3";
      if (privacyL) {
         break;
      }
   } while (privacyL && (1 >= (2 + configurex.length)));
   if ((parseInt(`${reactnativeratings6}`) - weatherb.length) > 2 || (weatherb.length % (Math.max(2, 6))) > 1) {
      reactnativeratings6 /= Math.max(parseInt(`${attributedstringR}`) | configurex.length, 1);
   }
      setBannerAd(banner);
    } else {

   let unimplementedviewR = navigationT ? !navigationT : navigationT;
   do {
       let championO = 1;
       let reportl = 5.0;
       let logoD: Map<any, any> = new Map([[String.fromCharCode(99,116,120,112,95,98,95,55,48,0),8], [String.fromCharCode(116,97,98,108,101,112,114,105,110,116,95,109,95,54,51,0),857], [String.fromCharCode(108,115,112,108,112,99,95,112,95,49,48,48,0),497]]);
          let bootsplashE = String.fromCharCode(104,95,49,49,95,99,104,101,118,114,111,110,0);
          let shrink0 = 0;
         championO >>= Math.min(Math.abs(championO), 3);
         bootsplashE += `${(String.fromCharCode(81,0) == bootsplashE ? bootsplashE.length : shrink0)}`;
         shrink0 &= (bootsplashE == String.fromCharCode(86,0) ? bootsplashE.length : shrink0);
         championO >>= Math.min(4, Math.abs(logoD.size));
         logoD.set(`${reportl}`, 2);
         championO *= 3 % (Math.max(10, parseInt(`${reportl}`)));
      for (let y = 0; y < 1; y++) {
          let dataP: Array<any> = [String.fromCharCode(119,95,54,51,95,108,105,98,119,101,98,112,101,110,99,0), String.fromCharCode(101,95,56,57,95,120,105,110,99,0), String.fromCharCode(115,101,112,97,114,97,116,111,114,115,95,106,95,55,54,0)];
          let detail7: Array<any> = [String.fromCharCode(104,95,55,51,95,112,101,114,115,105,115,116,0), String.fromCharCode(113,95,50,54,95,114,101,115,101,116,115,0), String.fromCharCode(105,110,116,101,110,116,115,95,52,95,51,56,0)];
          let topicR: Map<any, any> = new Map([[String.fromCharCode(117,110,109,97,112,102,105,108,101,95,99,95,51,56,0),540], [String.fromCharCode(119,95,51,57,95,118,105,100,115,116,97,98,117,116,105,108,115,0),936]]);
         reportl += parseFloat(`${2}`);
         dataP.push(detail7.length);
         detail7.push(dataP.length);
         topicR.set(`${dataP.length}`, topicR.size);
      }
      for (let z = 0; z < 3; z++) {
         championO %= Math.max(logoD.size + parseInt(`${reportl}`), 2);
      }
      for (let x = 0; x < 1; x++) {
          let handlerr: Array<any> = [73, 582];
         reportl -= parseFloat(`${handlerr.length >> (Math.min(Math.abs(2), 2))}`);
      }
      while (3.37 > (reportl / 5.89) && 1.69 > (reportl / 5.89)) {
          let rncoreR = String.fromCharCode(105,95,50,50,95,105,110,116,101,114,112,111,108,97,116,101,0);
          let termsN = String.fromCharCode(116,101,109,112,111,114,97,114,105,108,121,95,56,95,50,50,0);
         reportl /= Math.max(parseFloat(`${termsN.length >> (Math.min(rncoreR.length, 1))}`), 1);
         break;
      }
          let ewarded1 = String.fromCharCode(99,104,97,110,103,101,95,104,95,53,57,0);
          let uploads = true;
         reportl *= parseFloat(`${championO}`);
         ewarded1 = `${ewarded1.length}`;
         uploads = !uploads || ewarded1.length > 61;
      navigationT = defaultroombgt == 68;
      if (unimplementedviewR) {
         break;
      }
   } while (unimplementedviewR && (!navigationT && 3 < (1 + iconarrowrightG)));
   for (let y = 0; y < 2; y++) {
      configurex = "1";
   }
   while (!attributedstrings.includes(`${defaultroombgt}`)) {
       let refreshborderlessv = String.fromCharCode(108,95,55,54,95,109,115,103,0);
       let successr = String.fromCharCode(116,105,109,101,111,117,116,101,100,95,101,95,56,51,0);
      if (refreshborderlessv.length == 5) {
          let combinedf = 1.0;
          let episoded = 2.0;
          let actionh: Array<any> = [918, 696, 351];
          let delegate_vuy: Map<any, any> = new Map([[String.fromCharCode(109,95,49,53,95,101,114,111,100,101,0),512], [String.fromCharCode(99,111,109,102,111,114,116,95,49,95,51,48,0),522]]);
         refreshborderlessv += `${parseInt(`${combinedf}`)}`;
         combinedf *= delegate_vuy.size;
         episoded += 1;
         actionh = [parseInt(`${episoded}`)];
         delegate_vuy = new Map([[`${actionh.length}`, 1 % (Math.max(8, parseInt(`${episoded}`)))]]);
      }
      if (refreshborderlessv == String.fromCharCode(85,0)) {
         successr += "1";
      }
         refreshborderlessv += `${refreshborderlessv.length / 2}`;
      let libfabricjniW = successr == String.fromCharCode(99,105,113,55,120,0);
      do {
          let libyogam: Map<any, any> = new Map([[String.fromCharCode(103,108,121,112,104,115,95,57,95,53,54,0),389], [String.fromCharCode(98,95,52,56,95,103,114,111,117,112,0),667], [String.fromCharCode(112,95,54,53,95,121,117,118,97,0),796]]);
         successr = "2";
         libyogam.set(`${libyogam.size}`, libyogam.size / 2);
         if (libfabricjniW) {
            break;
         }
      } while ((refreshborderlessv.length < 5) && libfabricjniW);
          let downloadeds = String.fromCharCode(121,95,51,55,95,101,110,116,114,121,0);
          let windv = 4.0;
          let forwardS = String.fromCharCode(97,95,49,51,95,101,120,116,110,0);
         successr = `${forwardS.length >> (Math.min(Math.abs(1), 2))}`;
         downloadeds = `${parseInt(`${windv}`) << (Math.min(downloadeds.length, 4))}`;
         windv += (String.fromCharCode(104,0) == downloadeds ? downloadeds.length : parseInt(`${windv}`));
         forwardS = `${downloadeds.length & parseInt(`${windv}`)}`;
      while (successr != refreshborderlessv) {
         refreshborderlessv += `${successr.length}`;
         break;
      }
      attributedstrings = `${(parseInt(`${attributedstringR}`) * (navigationT ? 1 : 4))}`;
      break;
   }
   while (defaultroombgt >= 5) {
      navigationT = 73 < iconsaveimagev.length || weatherb.length < 73;
      break;
   }
   for (let b = 0; b < 1; b++) {
      o_titlec ^= 1;
   }
       let defaultteam_ = String.fromCharCode(114,95,54,95,99,114,111,112,112,105,110,103,0);
       let stringsV = 1;
       let expiredM = false;
      for (let m = 0; m < 3; m++) {
         stringsV /= Math.max(5, defaultteam_.length);
      }
      let dependencyN = expiredM ? !expiredM : expiredM;
      do {
         expiredM = !expiredM;
         if (dependencyN) {
            break;
         }
      } while (dependencyN && (2 <= (3 ^ stringsV)));
       let networkH: Array<any> = [290, 744];
       let libreactl: Array<any> = [657, 300, 187];
      while (!expiredM && 5 == (libreactl.length << (Math.min(Math.abs(5), 2)))) {
         libreactl.push(3);
         break;
      }
         stringsV |= 1;
         stringsV *= 2;
         libreactl.push(3 % (Math.max(2, defaultteam_.length)));
         libreactl = [networkH.length];
         stringsV <<= Math.min(2, Math.abs(networkH.length * stringsV));
      reactnativeratings6 += ((libjsif ? 5 : 3));
      setBannerAd(undefined);
    }
  };

  const shouldShowAds = async () => {
       let cast0 = 0.0;
    let libsentryk: Map<any, any> = new Map([[String.fromCharCode(112,111,115,105,116,105,111,110,105,110,103,95,102,95,56,57,0),841], [String.fromCharCode(102,95,51,51,95,112,114,111,112,97,103,97,116,101,0),681]]);
    let gifgoalbgv: Map<any, any> = new Map([[String.fromCharCode(118,115,101,114,118,105,99,101,95,104,95,55,52,0),499], [String.fromCharCode(109,95,51,95,101,111,109,101,116,114,121,0),875]]);
    let libturbomodulejsijnif: Array<any> = [710, 726];
    let smallorangeman_ = String.fromCharCode(99,97,116,101,103,111,114,105,122,101,95,119,95,56,51,0);
    let defaultplayerimgl = 2.0;
    let launcherr = false;
    let kuaishouP: Array<any> = [851, 760];
    let footballfiledlayout3: Map<any, any> = new Map([[String.fromCharCode(120,95,53,55,95,110,97,110,111,115,118,103,0),false ], [String.fromCharCode(102,105,108,116,101,114,98,97,110,107,95,120,95,53,49,0),false ], [String.fromCharCode(113,117,97,100,114,95,48,95,54,54,0),false ]]);
    let cornershootP: Map<any, any> = new Map([[String.fromCharCode(103,108,105,116,99,104,95,113,95,49,48,0),720], [String.fromCharCode(105,102,105,108,116,101,114,95,106,95,57,52,0),337], [String.fromCharCode(113,95,53,57,95,119,116,118,102,105,108,101,0),871]]);
    let utilsj = 5;
    let libreactnativejni3 = String.fromCharCode(114,101,112,108,105,101,114,115,95,98,95,55,55,0);
    let stationQ = true;
    let matchdetailbgY = 3.0;
       let orangeuparrowd = 4.0;
       let iconclosewhitej: Map<any, any> = new Map([[String.fromCharCode(105,115,115,117,105,110,103,95,107,95,52,52,0),914], [String.fromCharCode(109,101,110,117,115,95,52,95,54,55,0),702], [String.fromCharCode(105,95,53,57,95,116,119,101,97,107,0),540]]);
       let icondefaultthumbnailm: Map<any, any> = new Map([[String.fromCharCode(103,108,121,112,104,95,115,95,57,51,0),724], [String.fromCharCode(112,97,112,101,114,115,95,105,95,50,48,0),165], [String.fromCharCode(105,110,100,105,99,101,115,95,49,95,54,48,0),412]]);
          let greenW = String.fromCharCode(111,103,103,105,110,103,95,103,95,51,52,0);
          let singapore4 = 2.0;
          let rulesa: Map<any, any> = new Map([[String.fromCharCode(110,95,55,57,95,100,101,112,101,110,100,115,0),386], [String.fromCharCode(107,95,49,54,95,106,111,105,110,0),153], [String.fromCharCode(100,95,54,55,95,115,97,102,101,115,116,97,99,107,0),983]]);
         icondefaultthumbnailm = new Map([[`${iconclosewhitej.size}`, iconclosewhitej.size]]);
         greenW += "3";
         singapore4 /= Math.max(3, (greenW == String.fromCharCode(118,0) ? greenW.length : parseInt(`${singapore4}`)));
         rulesa.set(`${singapore4}`, parseInt(`${singapore4}`));
       let const_93v = false;
       let videovarD = false;
          let icondefaultthumbnaill = true;
         iconclosewhitej.set(`${icondefaultthumbnaill}`, ((icondefaultthumbnaill ? 5 : 5) >> (Math.min(1, Math.abs((const_93v ? 1 : 2))))));
          let controlsr: Array<any> = [294, 451, 647];
         orangeuparrowd /= Math.max(1, icondefaultthumbnailm.size);
         controlsr.push(controlsr.length / 3);
       let animationg = String.fromCharCode(115,95,55,50,95,119,97,116,99,104,0);
       let tailn = String.fromCharCode(108,109,100,98,95,99,95,51,51,0);
      while (videovarD || 3 > (iconclosewhitej.size << (Math.min(Math.abs(2), 4)))) {
         videovarD = !videovarD;
         break;
      }
          let stringz = 3.0;
          let stringsy: Array<any> = [503, 789];
          let tempM = 1;
         animationg += `${tailn.length >> (Math.min(4, animationg.length))}`;
         stringz /= Math.max(4, parseFloat(`${stringsy.length}`));
         stringsy = [stringsy.length / (Math.max(3, parseInt(`${stringz}`)))];
         tempM <<= Math.min(4, Math.abs(tempM | 1));
         animationg += `${animationg.length & tailn.length}`;
         animationg += `${3 | parseInt(`${orangeuparrowd}`)}`;
      utilsj /= Math.max(4, libturbomodulejsijnif.length & 3);
       let coreG = 5.0;
       let basketballmatchdetailbgm = 4.0;
         basketballmatchdetailbgm /= Math.max(parseInt(`${coreG}`), 2);
          let sigmob6 = String.fromCharCode(111,95,57,50,95,97,115,115,105,103,110,109,101,110,116,0);
          let backwardf: Array<any> = [245, 815];
          let penaltyshootnogoal9 = String.fromCharCode(119,95,49,52,95,101,114,112,105,99,0);
         coreG *= parseInt(`${basketballmatchdetailbgm}`);
         sigmob6 += `${backwardf.length % (Math.max(1, 6))}`;
         backwardf = [3];
         penaltyshootnogoal9 += `${sigmob6.length}`;
          let libfbjniW = String.fromCharCode(121,105,101,108,100,95,48,95,55,49,0);
          let shootL: Map<any, any> = new Map([[String.fromCharCode(122,95,57,56,95,97,117,116,111,114,101,118,101,114,115,101,115,0),555], [String.fromCharCode(110,95,50,56,95,105,110,116,101,114,115,101,99,116,115,0),193], [String.fromCharCode(122,95,57,52,95,99,97,112,116,117,114,101,114,0),88]]);
          let delegate_hzC = 4;
         coreG *= delegate_hzC << (Math.min(Math.abs(2), 2));
         libfbjniW = `${libfbjniW.length ^ 3}`;
         shootL.set(`${libfbjniW}`, 2);
         delegate_hzC <<= Math.min(2, Math.abs(shootL.size));
         basketballmatchdetailbgm += parseInt(`${basketballmatchdetailbgm}`) / (Math.max(6, parseInt(`${coreG}`)));
      while (4.53 >= (4.15 - basketballmatchdetailbgm) || (basketballmatchdetailbgm - 4.15) >= 2.91) {
         coreG += parseInt(`${basketballmatchdetailbgm}`);
         break;
      }
      while (basketballmatchdetailbgm < 4.83) {
         basketballmatchdetailbgm -= parseInt(`${coreG}`) % 1;
         break;
      }
      footballfiledlayout3 = new Map([[`${gifgoalbgv.size}`, gifgoalbgv.size % 3]]);
   let backicone = footballfiledlayout3.size <= 7638923;
   do {
       let defaultteamr = 1.0;
       let temperaturej = false;
       let time_42c = false;
      for (let x = 0; x < 1; x++) {
         defaultteamr -= (parseFloat(`${(time_42c ? 3 : 3) / 1}`));
      }
         temperaturej = !temperaturej;
      while (!time_42c) {
          let codegenY = String.fromCharCode(112,117,114,112,111,115,101,102,117,108,95,110,95,55,49,0);
          let circlep = String.fromCharCode(102,99,109,117,108,95,115,95,49,54,0);
          let pathr = String.fromCharCode(109,106,112,101,103,106,112,101,103,95,115,95,51,53,0);
          let routerl = false;
          let templateprocessorQ = 5;
         defaultteamr *= parseFloat(`${templateprocessorQ - 1}`);
         codegenY = `${circlep.length}`;
         circlep = "2";
         pathr += `${((routerl ? 1 : 1))}`;
         templateprocessorQ <<= Math.min(Math.abs(pathr.length | circlep.length), 5);
         break;
      }
      if (temperaturej) {
         temperaturej = !temperaturej;
      }
       let successn = 1.0;
      while (successn == 1.97 && 2.60 == (1.97 - successn)) {
         successn /= Math.max(5, parseFloat(`${parseInt(`${defaultteamr}`) + 2}`));
         break;
      }
       let corner0 = 1.0;
      if (temperaturej) {
          let abidetectu: Array<any> = [952, 729];
          let thumbnailk = 4.0;
         temperaturej = 77.38 < successn;
         abidetectu.push(parseInt(`${thumbnailk}`));
         thumbnailk /= Math.max(parseFloat(`${3 + abidetectu.length}`), 4);
      }
      while (temperaturej && (5.80 - defaultteamr) <= 5.87) {
         temperaturej = !time_42c && successn > 40.21;
         break;
      }
      footballfiledlayout3.set(`${time_42c}`, 1 + footballfiledlayout3.size);
      if (backicone) {
         break;
      }
   } while ((footballfiledlayout3.get(`${libsentryk.size}`) == null) && backicone);
      footballfiledlayout3.set(`${cast0}`, cornershootP.size);
   if ((kuaishouP.length % (Math.max(cornershootP.size, 8))) > 4 || (kuaishouP.length % 4) > 4) {
      cornershootP.set(smallorangeman_, (String.fromCharCode(107,0) == smallorangeman_ ? smallorangeman_.length : cornershootP.size));
   }
       let listc = true;
       let smallbrightnessk = String.fromCharCode(115,112,114,111,112,95,113,95,56,54,0);
       let iconcalendar_: Array<any> = [882, 382, 347];
      let gifgoalbgR = listc ? !listc : listc;
      do {
         listc = listc && smallbrightnessk.length <= 44;
         if (gifgoalbgR) {
            break;
         }
      } while ((smallbrightnessk.includes(`${listc}`)) && gifgoalbgR);
         smallbrightnessk += `${smallbrightnessk.length}`;
         iconcalendar_ = [iconcalendar_.length / 1];
         smallbrightnessk += `${((listc ? 2 : 4) & 2)}`;
         smallbrightnessk = `${((listc ? 2 : 2))}`;
      let clubg = 8310284 <= iconcalendar_.length;
      do {
         iconcalendar_ = [(smallbrightnessk.length / (Math.max(3, (listc ? 1 : 1))))];
         if (clubg) {
            break;
         }
      } while ((3 > (smallbrightnessk.length + 2)) && clubg);
      while ((smallbrightnessk.length * iconcalendar_.length) > 3 || (smallbrightnessk.length * iconcalendar_.length) > 3) {
         smallbrightnessk = `${(3 % (Math.max(7, (listc ? 1 : 2))))}`;
         break;
      }
      if (2 > iconcalendar_.length || (iconcalendar_.length & 2) > 4) {
         listc = !listc;
      }
      if (listc && smallbrightnessk.length < 5) {
         smallbrightnessk = "1";
      }
      libturbomodulejsijnif = [(parseInt(`${defaultplayerimgl}`) * (listc ? 2 : 5))];
       let moviesn = String.fromCharCode(115,111,114,116,101,100,95,117,95,53,57,0);
       let traminiC = 1.0;
       let ball8 = 0;
          let orientationU: Map<any, any> = new Map([[String.fromCharCode(115,121,115,99,116,108,95,122,95,51,49,0),String.fromCharCode(102,111,114,109,97,116,115,95,106,95,54,57,0)], [String.fromCharCode(110,101,111,110,116,101,115,116,95,112,95,49,52,0),String.fromCharCode(97,103,97,105,110,95,53,95,51,51,0)], [String.fromCharCode(120,95,51,48,95,99,111,110,102,105,114,109,101,100,0),String.fromCharCode(105,110,100,105,110,103,95,103,95,55,50,0)]]);
          let refreshf = 5.0;
         moviesn += `${parseInt(`${traminiC}`)}`;
         orientationU = new Map([[`${orientationU.size}`, parseInt(`${refreshf}`) << (Math.min(Math.abs(orientationU.size), 5))]]);
         refreshf -= parseFloat(`${orientationU.size % (Math.max(1, 3))}`);
         ball8 += parseInt(`${traminiC}`) ^ 2;
         traminiC -= parseFloat(`${ball8}`);
          let updatesu = String.fromCharCode(97,117,116,104,105,110,102,111,95,57,95,51,57,0);
          let pressureb = String.fromCharCode(101,95,53,54,95,98,105,116,0);
          let libfbS = true;
         traminiC -= parseFloat(`${updatesu.length}`);
         updatesu += `${((libfbS ? 1 : 4))}`;
         pressureb += `${((libfbS ? 3 : 2))}`;
      let robotoZ = 6214837 <= ball8;
      do {
          let turnY = 5;
          let whatsappJ = String.fromCharCode(106,95,53,50,95,115,105,103,118,101,114,0);
          let referrer3 = String.fromCharCode(118,105,100,115,116,97,98,117,116,105,108,115,95,121,95,57,53,0);
         ball8 >>= Math.min(2, Math.abs(2));
         turnY -= (String.fromCharCode(78,0) == whatsappJ ? turnY : whatsappJ.length);
         referrer3 += `${referrer3.length}`;
         if (robotoZ) {
            break;
         }
      } while (robotoZ && ((parseInt(`${traminiC}`) - ball8) == 5 || 4.47 == (traminiC - 4.91)));
         ball8 >>= Math.min(Math.abs((moviesn == String.fromCharCode(113,0) ? moviesn.length : parseInt(`${traminiC}`))), 4);
       let sansf = String.fromCharCode(109,97,107,101,99,121,103,119,105,110,112,107,103,95,111,95,51,49,0);
         traminiC += parseFloat(`${ball8 >> (Math.min(Math.abs(1), 5))}`);
          let awayteamfieldI = 1.0;
          let refresh2 = 3;
          let libcrashsdka = String.fromCharCode(107,97,110,110,97,95,108,95,56,0);
         ball8 <<= Math.min(Math.abs(ball8 + 2), 5);
         awayteamfieldI /= Math.max(2, 2);
         refresh2 <<= Math.min(Math.abs(libcrashsdka.length % (Math.max(2, parseInt(`${awayteamfieldI}`)))), 4);
         libcrashsdka += `${refresh2}`;
      cast0 /= Math.max(2, parseFloat(`${smallorangeman_.length + 3}`));
      defaultplayerimgl -= libsentryk.size >> (Math.min(5, Math.abs(utilsj)));
      launcherr = kuaishouP.length < 8;
      smallorangeman_ += `${3 + cornershootP.size}`;
       let selecteds: Array<any> = [String.fromCharCode(121,95,50,56,95,120,104,116,109,108,0), String.fromCharCode(114,95,49,53,95,115,116,115,115,0)];
       let transferi = 0.0;
      let entryy = selecteds.length <= 7715423;
      do {
         selecteds = [parseInt(`${transferi}`)];
         if (entryy) {
            break;
         }
      } while ((selecteds.length <= 3) && entryy);
          let awayteamfieldK = 2.0;
          let mbnativeadvancedi = String.fromCharCode(106,95,49,56,95,114,101,97,100,101,114,0);
          let showU = 0;
         transferi += parseInt(`${awayteamfieldK}`) << (Math.min(mbnativeadvancedi.length, 1));
         awayteamfieldK += 3 << (Math.min(5, Math.abs(showU)));
         mbnativeadvancedi = `${showU}`;
          let overlayi = String.fromCharCode(110,95,51,49,95,106,115,111,110,0);
          let umengx = 5.0;
         selecteds = [selecteds.length - 3];
         overlayi += `${3 | overlayi.length}`;
         umengx *= parseInt(`${umengx}`) & overlayi.length;
      while (selecteds.includes(transferi)) {
         selecteds.push(selecteds.length);
         break;
      }
         transferi += 1;
         selecteds.push(1);
      footballfiledlayout3 = new Map([[`${cornershootP.size}`, 2 & parseInt(`${transferi}`)]]);
   for (let r = 0; r < 1; r++) {
      launcherr = null == footballfiledlayout3.get(`${defaultplayerimgl}`);
   }
      cornershootP = new Map([[`${cast0}`, 1]]);
   let baiduP = smallorangeman_.length <= 9620681;
   do {
      smallorangeman_ = `${(parseInt(`${cast0}`) | (launcherr ? 4 : 5))}`;
      if (baiduP) {
         break;
      }
   } while (baiduP && (3 < (smallorangeman_.length * 1) && 4 < (kuaishouP.length * 1)));
      defaultplayerimgl -= libsentryk.size;
      defaultplayerimgl *= parseInt(`${cast0}`);
   while ((footballfiledlayout3.size % (Math.max(5, 4))) <= 3 && (footballfiledlayout3.size << (Math.min(Math.abs(5), 1))) <= 4) {
       let bgvipsport_ = 2;
       let defaultfootballbg1 = 4.0;
       let reactnativeratingsy = String.fromCharCode(113,95,49,49,0);
       let leakchecker7 = false;
         reactnativeratingsy += "3";
       let fullscreenmaxT = String.fromCharCode(122,95,51,48,95,118,115,121,110,99,0);
      while (reactnativeratingsy.length <= bgvipsport_) {
         reactnativeratingsy += "3";
         break;
      }
      let benefitL = 6753117 <= fullscreenmaxT.length;
      do {
         fullscreenmaxT += `${reactnativeratingsy.length}`;
         if (benefitL) {
            break;
         }
      } while ((fullscreenmaxT.endsWith(`${leakchecker7}`)) && benefitL);
      while (1 >= (5 ^ fullscreenmaxT.length)) {
         fullscreenmaxT += `${((leakchecker7 ? 1 : 3))}`;
         break;
      }
       let green0: Map<any, any> = new Map([[String.fromCharCode(100,95,57,49,95,116,97,98,108,101,99,0),false ], [String.fromCharCode(121,95,49,49,95,111,109,112,111,115,101,0),false ]]);
       let dplusq: Map<any, any> = new Map([[String.fromCharCode(101,95,51,57,95,105,110,116,101,108,0),String.fromCharCode(97,95,53,95,108,117,116,114,103,98,0)], [String.fromCharCode(101,95,50,52,95,118,97,108,105,100,97,116,111,114,0),String.fromCharCode(119,95,52,51,95,102,111,108,100,0)], [String.fromCharCode(104,95,54,52,95,105,110,116,101,114,97,99,116,0),String.fromCharCode(108,95,56,52,95,100,101,99,111,109,112,114,101,115,115,101,100,0)]]);
      let styleo = dplusq.size >= 6705347;
      do {
         dplusq.set(`${defaultfootballbg1}`, green0.size & 3);
         if (styleo) {
            break;
         }
      } while (styleo && (1 == (reactnativeratingsy.length << (Math.min(Math.abs(5), 3)))));
         bgvipsport_ <<= Math.min(3, Math.abs(2 & reactnativeratingsy.length));
      while (leakchecker7) {
         leakchecker7 = !leakchecker7;
         break;
      }
      let vipsportH = 5073812 >= bgvipsport_;
      do {
         bgvipsport_ ^= dplusq.size;
         if (vipsportH) {
            break;
         }
      } while (vipsportH && (Array.from(dplusq.keys()).includes(`${bgvipsport_}`)));
         reactnativeratingsy += `${(parseInt(`${defaultfootballbg1}`) / (Math.max(6, (leakchecker7 ? 3 : 4))))}`;
          let airbnbstarw = 4;
         dplusq.set(`${airbnbstarw}`, airbnbstarw);
      defaultplayerimgl *= parseInt(`${cast0}`);
      break;
   }
   while (!launcherr && (2.46 - defaultplayerimgl) >= 2.50) {
      defaultplayerimgl *= kuaishouP.length / 3;
      break;
   }
       let sharedi = String.fromCharCode(97,112,112,114,111,120,95,100,95,48,0);
       let chinasamer = String.fromCharCode(103,95,52,52,95,114,101,115,117,108,116,105,110,103,0);
       let castingm = String.fromCharCode(106,95,52,54,95,109,112,101,103,97,117,100,105,111,0);
         chinasamer += "1";
          let stylese = 2.0;
          let libreactnativejni6 = 3;
         sharedi = "1 + libreactnativejni6";
         stylese += parseFloat(`${2 % (Math.max(parseInt(`${stylese}`), 5))}`);
         libreactnativejni6 -= 1 << (Math.min(Math.abs(parseInt(`${stylese}`)), 2));
      libturbomodulejsijnif.push(1);
   if (defaultplayerimgl > 5.19) {
      defaultplayerimgl *= utilsj / (Math.max(6, cornershootP.size));
   }
      utilsj <<= Math.min(Math.abs(1), 5);
   while (1 < (utilsj >> (Math.min(Math.abs(5), 3)))) {
      utilsj /= Math.max(5, (utilsj - (launcherr ? 4 : 2)));
      break;
   }
   let viewsV = 5085129.0 >= defaultplayerimgl;
   do {
       let iconsharefriendsQ: Array<any> = [String.fromCharCode(98,114,111,119,115,101,95,107,95,51,57,0), String.fromCharCode(114,101,108,97,117,110,99,104,95,117,95,49,49,0)];
       let moonL: Array<any> = [4, 148, 854];
       let send_ = String.fromCharCode(102,109,105,120,95,100,95,54,51,0);
       let connectionG = String.fromCharCode(110,95,54,57,95,115,117,98,114,101,115,117,108,116,115,0);
      for (let g = 0; g < 1; g++) {
          let executorG = false;
          let androidY = String.fromCharCode(103,95,50,49,95,100,99,98,108,111,99,107,0);
          let yingK: Map<any, any> = new Map([[String.fromCharCode(108,105,110,101,95,56,95,55,56,0),382], [String.fromCharCode(108,95,51,95,102,111,117,114,105,101,114,0),616], [String.fromCharCode(120,95,56,57,95,116,108,117,116,0),102]]);
         iconsharefriendsQ.push(moonL.length | iconsharefriendsQ.length);
         executorG = (100 >= ((executorG ? androidY.length : 100) << (Math.min(androidY.length, 4))));
         yingK = new Map([[`${executorG}`, (androidY.length ^ (executorG ? 4 : 4))]]);
      }
         send_ += `${2 / (Math.max(3, send_.length))}`;
         iconsharefriendsQ = [moonL.length];
         send_ += `${connectionG.length >> (Math.min(Math.abs(3), 1))}`;
          let productu = 2;
          let iconadslinks = String.fromCharCode(115,95,55,57,95,109,101,115,115,97,103,101,115,0);
         send_ += "3";
         productu %= Math.max(1, productu);
         iconadslinks += `${productu + iconadslinks.length}`;
      defaultplayerimgl -= libsentryk.size << (Math.min(iconsharefriendsQ.length, 5));
      if (viewsV) {
         break;
      }
   } while ((gifgoalbgv.get(`${defaultplayerimgl}`) != null) && viewsV);
   let iconwatchl = libsentryk.size >= 7653316;
   do {
       let dependencyo = String.fromCharCode(101,95,49,54,95,99,114,111,119,100,105,110,0);
         dependencyo = `${dependencyo.length}`;
          let iconwatchnowW: Array<any> = [49, 847];
          let smallorangemano = String.fromCharCode(110,99,111,110,102,95,53,95,49,49,0);
         dependencyo = `${3 | dependencyo.length}`;
         iconwatchnowW = [smallorangemano.length + iconwatchnowW.length];
         smallorangemano += `${iconwatchnowW.length}`;
       let notificationfillempty6 = 4;
       let statisticsG = 1;
      libsentryk = new Map([[`${gifgoalbgv.size}`, kuaishouP.length]]);
      if (iconwatchl) {
         break;
      }
   } while ((5 >= footballfiledlayout3.size) && iconwatchl);
   while (defaultplayerimgl > 1.74) {
       let fullscreenminX = 0;
       let iconadslinkG: Map<any, any> = new Map([[String.fromCharCode(102,116,118,118,101,114,116,108,105,110,101,95,98,95,54,0),92], [String.fromCharCode(103,95,49,49,95,115,105,103,110,97,98,108,101,0),929], [String.fromCharCode(120,95,56,54,95,102,111,110,116,115,0),41]]);
       let bgvipxvodw = String.fromCharCode(114,101,116,117,114,110,105,110,103,95,117,95,56,48,0);
       let basketballawayteaml = 0.0;
       let telegramz = 0;
       let score2 = 1;
          let splasho = 1;
          let textinputM: Array<any> = [441, 815];
          let constantsc = 3.0;
         telegramz += splasho ^ 3;
         splasho /= Math.max(2 >> (Math.min(Math.abs(parseInt(`${constantsc}`)), 3)), 2);
         textinputM.push(parseInt(`${constantsc}`) | textinputM.length);
      for (let e = 0; e < 2; e++) {
          let iconstar3 = 5.0;
          let resultS = 1.0;
          let backU = String.fromCharCode(114,95,51,48,95,110,97,109,101,115,101,114,118,101,114,115,0);
         score2 -= backU.length;
         iconstar3 -= 1 ^ parseInt(`${resultS}`);
         resultS *= parseFloat(`${parseInt(`${iconstar3}`) >> (Math.min(Math.abs(parseInt(`${resultS}`)), 5))}`);
         backU += `${parseInt(`${resultS}`)}`;
      }
      let halfZ = basketballawayteaml >= 9579748.0;
      do {
         basketballawayteaml /= Math.max(3, bgvipxvodw.length);
         if (halfZ) {
            break;
         }
      } while (halfZ && (4 >= (1 / (Math.max(5, telegramz)))));
      let megaphoneB = 8289726 <= telegramz;
      do {
          let sportM: Array<any> = [848, 704];
          let statisticsinactiveB = 5.0;
         telegramz <<= Math.min(1, Math.abs(score2 << (Math.min(Math.abs(1), 1))));
         sportM = [sportM.length];
         statisticsinactiveB -= parseFloat(`${sportM.length / (Math.max(9, parseInt(`${statisticsinactiveB}`)))}`);
         if (megaphoneB) {
            break;
         }
      } while (megaphoneB && (score2 <= 4));
       let user3 = String.fromCharCode(115,117,115,112,101,110,100,95,49,95,51,57,0);
          let windr: Array<any> = [376, 278, 425];
          let iconclosewhiteS = 2.0;
         bgvipxvodw += "1";
         windr = [2];
         iconclosewhiteS += parseFloat(`${windr.length & 2}`);
      for (let h = 0; h < 3; h++) {
          let dropdown6 = 0;
         score2 %= Math.max(1, parseInt(`${basketballawayteaml}`) % (Math.max(6, telegramz)));
         dropdown6 ^= dropdown6;
      }
          let macaus = false;
         iconadslinkG.set(user3, 3);
         bgvipxvodw = `${user3.length >> (Math.min(Math.abs(2), 5))}`;
      while ((1.83 + basketballawayteaml) == 2.48 || (bgvipxvodw.length + parseInt(`${basketballawayteaml}`)) == 3) {
         basketballawayteaml *= bgvipxvodw.length ^ parseInt(`${basketballawayteaml}`);
         break;
      }
      let gesturesr = score2 <= 5880079;
      do {
         score2 -= telegramz;
         if (gesturesr) {
            break;
         }
      } while (((user3.length + score2) < 2) && gesturesr);
      defaultplayerimgl *= smallorangeman_.length;
      fullscreenminX >>= Math.min(Math.abs(1), 3);
      break;
   }
   if (!Array.from(cornershootP.keys()).includes(`${defaultplayerimgl}`)) {
      cornershootP = new Map([[`${libsentryk.size}`, ((launcherr ? 5 : 5) | libsentryk.size)]]);
   }

    fetchBannerAd();
  };

  useFocusEffect(
    useCallback(() => {
      shouldShowAds();
    }, [])
  );

  const [deviceUniqueId, setDeviceUniqueId] = useState("");

  const setDeviceId = async () => {
       let libjsijniprofilert: Array<any> = [88, 677];
    let soundB = 4.0;
    let giftbuttonC = 1.0;
    let tramini4 = 3;
    let handlerg = 0.0;
    let signinupu = false;
    let index0: Array<any> = [338, 338];
    let favorite2 = 5.0;
    let qaagm = String.fromCharCode(99,97,108,105,110,103,95,56,95,50,53,0);
    let nalyticsx = String.fromCharCode(106,95,56,56,95,110,111,114,111,117,110,100,0);
    let z_managerW = true;
    let complete0 = String.fromCharCode(104,95,54,55,95,104,101,97,100,105,110,103,0);
    let middlewarei = String.fromCharCode(104,95,54,51,95,115,101,103,117,101,0);
    let turnW = true;
      index0.push((parseInt(`${favorite2}`) >> (Math.min(2, Math.abs((z_managerW ? 1 : 4))))));
   while (3.49 < (1 * handlerg)) {
      soundB -= (index0.length & (signinupu ? 3 : 5));
      break;
   }
   while ((libjsijniprofilert.length / 2) <= 4) {
       let readY: Array<any> = [411, 802, 76];
       let neons: Array<any> = [572, 698, 282];
       let line8 = false;
       let internetH = 2.0;
       let eabafadfadddbafeddddeeefeaaf3 = true;
      while ((readY.length % 1) > 5) {
         eabafadfadddbafeddddeeefeaaf3 = neons.includes(line8);
         break;
      }
      let teamdetailsbgP = line8 ? !line8 : line8;
      do {
          let textlayoutmanagerL = String.fromCharCode(108,117,97,95,111,95,50,56,0);
          let iconclosewhitebgh: Map<any, any> = new Map([[String.fromCharCode(99,95,51,57,95,97,108,112,104,97,98,101,116,115,0),String.fromCharCode(114,110,110,111,105,115,101,95,121,95,55,0)], [String.fromCharCode(111,95,55,54,95,118,112,100,97,116,97,0),String.fromCharCode(109,118,112,114,101,100,95,110,95,50,0)], [String.fromCharCode(113,95,54,57,95,116,114,97,110,115,105,116,105,111,110,101,100,0),String.fromCharCode(97,95,49,54,95,100,97,116,97,98,97,115,101,0)]]);
         line8 = (((line8 ? 22 : readY.length) % (Math.max(readY.length, 3))) < 22);
         textlayoutmanagerL = `${1 % (Math.max(9, iconclosewhitebgh.size))}`;
         iconclosewhitebgh.set(`${textlayoutmanagerL}`, textlayoutmanagerL.length + iconclosewhitebgh.size);
         if (teamdetailsbgP) {
            break;
         }
      } while ((!eabafadfadddbafeddddeeefeaaf3) && teamdetailsbgP);
          let twitterh = String.fromCharCode(100,95,50,56,95,112,115,102,105,108,101,0);
         line8 = (readY.length - neons.length) < 13;
         twitterh = `${(String.fromCharCode(78,0) == twitterh ? twitterh.length : twitterh.length)}`;
      for (let z = 0; z < 1; z++) {
          let executora = 0.0;
         neons = [3 * parseInt(`${internetH}`)];
         executora -= 3;
      }
      if ((2 + neons.length) == 4 || (2 + readY.length) == 4) {
         neons = [neons.length];
      }
         line8 = neons.length < readY.length;
       let analyticp = false;
      let pagination4 = 9701458.0 >= internetH;
      do {
          let weatherr: Map<any, any> = new Map([[String.fromCharCode(115,105,103,110,97,108,115,95,122,95,54,0),149], [String.fromCharCode(110,115,117,105,114,103,98,97,95,114,95,50,49,0),680]]);
          let greenS = false;
          let sinit_uA = String.fromCharCode(99,97,114,114,121,95,122,95,52,48,0);
          let middlewareW = 3.0;
          let subsC = true;
         internetH -= (parseFloat(`${sinit_uA == String.fromCharCode(111,0) ? (greenS ? 3 : 3) : sinit_uA.length}`));
         weatherr.set(`${subsC}`, ((subsC ? 4 : 3) + parseInt(`${middlewareW}`)));
         greenS = !subsC;
         middlewareW *= parseFloat(`${1 / (Math.max(7, weatherr.size))}`);
         if (pagination4) {
            break;
         }
      } while (pagination4 && (readY.includes(internetH)));
      let awayicong = internetH >= 9151438.0;
      do {
          let spec_ = 0.0;
          let scoreQ = 5;
         internetH += parseFloat(`${2 / (Math.max(3, scoreQ))}`);
         spec_ -= parseFloat(`${parseInt(`${spec_}`) % 1}`);
         scoreQ ^= 3 & parseInt(`${spec_}`);
         if (awayicong) {
            break;
         }
      } while ((1.43 <= (internetH + parseFloat(`${readY.length}`)) || (readY.length + 3) <= 4) && awayicong);
      let clubN = analyticp ? !analyticp : analyticp;
      do {
          let controlsF = 4;
          let temperature5: Array<any> = [29, 76, 418];
          let libloggerO = 1.0;
         analyticp = temperature5.length > 10;
         controlsF /= Math.max(5, 3 << (Math.min(Math.abs(parseInt(`${libloggerO}`)), 2)));
         temperature5.push(controlsF % 2);
         libloggerO /= Math.max(1, 3 ^ controlsF);
         if (clubN) {
            break;
         }
      } while (clubN && (readY.length < 1 || (readY.length | 1) < 3));
          let controlsr = String.fromCharCode(116,109,99,100,95,109,95,49,51,0);
          let chartC = 5.0;
          let canvas_: Array<any> = [134, 243, 105];
         neons.push(controlsr.length);
         controlsr += "3";
         chartC *= parseFloat(`${canvas_.length >> (Math.min(Math.abs(1), 1))}`);
         canvas_ = [canvas_.length];
      for (let e = 0; e < 2; e++) {
          let footballfield4 = 2;
          let libglogb = String.fromCharCode(111,95,51,57,95,112,105,99,116,117,114,101,115,0);
         eabafadfadddbafeddddeeefeaaf3 = line8;
         footballfield4 |= footballfield4;
         libglogb = "1 * footballfield4";
      }
         analyticp = neons.length < readY.length;
       let kick_ = 3.0;
          let awayB: Array<any> = [731, 562, 720];
          let selection8 = true;
         readY = [parseInt(`${kick_}`) - 3];
         awayB.push(2);
         selection8 = (((selection8 ? 7 : awayB.length) ^ awayB.length) == 7);
      libjsijniprofilert = [(3 & (eabafadfadddbafeddddeeefeaaf3 ? 4 : 2))];
      break;
   }
   for (let m = 0; m < 1; m++) {
      giftbuttonC *= tramini4;
   }
       let awayD = String.fromCharCode(109,115,118,105,100,101,111,95,116,95,52,51,0);
       let libbuffery: Map<any, any> = new Map([[String.fromCharCode(97,95,52,53,95,100,99,115,116,114,0),false ], [String.fromCharCode(105,95,56,56,95,117,110,105,102,111,114,109,115,0),false ], [String.fromCharCode(112,114,111,103,114,101,115,105,118,101,95,101,95,57,53,0),false ]]);
         awayD += `${(awayD == String.fromCharCode(119,0) ? awayD.length : libbuffery.size)}`;
       let match6 = 4;
         libbuffery = new Map([[`${libbuffery.size}`, 3 ^ libbuffery.size]]);
      if (!Array.from(libbuffery.keys()).includes(`${match6}`)) {
         match6 |= match6;
      }
         match6 >>= Math.min(5, Math.abs(1));
         awayD += `${libbuffery.size * 3}`;
      giftbuttonC *= libjsijniprofilert.length << (Math.min(Math.abs(3), 2));
      soundB -= parseInt(`${handlerg}`);
   while ((tramini4 % 5) <= 3 || (tramini4 % (Math.max(3, libjsijniprofilert.length))) <= 5) {
      tramini4 &= 2;
      break;
   }
   if (libjsijniprofilert.length > 5) {
       let basketballmatchdetailbg7: Array<any> = [222, 145];
       let moviesw: Map<any, any> = new Map([[String.fromCharCode(112,95,52,56,95,97,117,116,104,0),314], [String.fromCharCode(114,95,52,57,95,111,99,115,112,105,100,0),360], [String.fromCharCode(98,95,57,53,95,115,99,111,114,101,0),274]]);
       let coreU = 1;
      if (basketballmatchdetailbg7.length <= coreU) {
          let windq: Array<any> = [650, 507, 759];
          let yellowscoreballc = String.fromCharCode(97,117,116,111,99,111,114,114,101,108,97,116,105,111,110,95,119,95,51,57,0);
          let submits: Map<any, any> = new Map([[String.fromCharCode(109,115,101,112,115,110,114,95,114,95,50,56,0),756], [String.fromCharCode(107,95,51,95,115,104,97,100,101,114,0),440]]);
         coreU >>= Math.min(Math.abs(1 | windq.length), 4);
         windq.push(3);
         yellowscoreballc = `${1 | yellowscoreballc.length}`;
         submits.set(`${yellowscoreballc}`, submits.size);
      }
      for (let i = 0; i < 2; i++) {
         basketballmatchdetailbg7 = [moviesw.size];
      }
      if (Array.from(moviesw.values()).includes(coreU)) {
         coreU &= 1 * moviesw.size;
      }
      let abidetectf = basketballmatchdetailbg7.length >= 9386790;
      do {
         basketballmatchdetailbg7.push(2 << (Math.min(5, basketballmatchdetailbg7.length)));
         if (abidetectf) {
            break;
         }
      } while ((1 >= (2 & basketballmatchdetailbg7.length) || (2 & coreU) >= 1) && abidetectf);
          let iconclosewhitebgg: Array<any> = [String.fromCharCode(97,108,116,114,101,102,95,117,95,49,53,0), String.fromCharCode(105,95,52,52,95,118,97,114,105,97,110,99,101,115,0), String.fromCharCode(100,101,108,111,103,111,95,117,95,54,52,0)];
         basketballmatchdetailbg7 = [coreU];
         iconclosewhitebgg.push(iconclosewhitebgg.length);
         coreU &= moviesw.size - coreU;
         coreU -= moviesw.size;
       let canvasn: Map<any, any> = new Map([[String.fromCharCode(105,110,116,114,97,120,109,98,117,118,95,100,95,49,48,48,0),614], [String.fromCharCode(107,95,54,95,114,101,97,100,102,114,97,109,101,0),725]]);
      while (1 < (1 * basketballmatchdetailbg7.length)) {
          let selectiono = String.fromCharCode(97,95,55,52,95,99,111,110,110,105,110,112,117,116,0);
          let liveF: Map<any, any> = new Map([[String.fromCharCode(113,95,52,95,97,118,117,116,105,108,114,101,115,0),String.fromCharCode(109,95,55,51,95,118,114,101,103,105,111,110,0)], [String.fromCharCode(116,111,108,101,114,97,110,99,101,95,105,95,56,51,0),String.fromCharCode(115,117,112,112,111,114,116,95,122,95,50,0)], [String.fromCharCode(101,95,53,57,95,99,108,101,97,114,0),String.fromCharCode(114,101,100,101,108,105,118,101,114,121,95,52,95,50,54,0)]]);
          let upgradeQ = 4.0;
          let trophyr = String.fromCharCode(108,95,52,53,95,99,111,115,116,105,0);
         basketballmatchdetailbg7.push(basketballmatchdetailbg7.length * trophyr.length);
         selectiono += `${parseInt(`${upgradeQ}`)}`;
         liveF = new Map([[`${liveF.size}`, parseInt(`${upgradeQ}`)]]);
         trophyr += `${parseInt(`${upgradeQ}`)}`;
         break;
      }
      signinupu = parseInt(`${giftbuttonC}`) <= libjsijniprofilert.length;
   }
       let injuryx = true;
      let reducerg = injuryx ? !injuryx : injuryx;
      do {
         injuryx = !injuryx;
         if (reducerg) {
            break;
         }
      } while (reducerg && (!injuryx || injuryx));
         injuryx = !injuryx || !injuryx;
      for (let k = 0; k < 3; k++) {
         injuryx = !injuryx;
      }
      handlerg += index0.length;
       let config6 = String.fromCharCode(117,95,56,49,95,99,101,110,116,114,101,0);
       let iconrightorangeW = String.fromCharCode(103,95,56,53,95,113,100,114,97,119,0);
       let halffieldimageX: Array<any> = [String.fromCharCode(101,95,55,53,95,98,101,103,105,110,110,105,110,103,0), String.fromCharCode(119,114,105,116,101,111,117,116,95,52,95,51,57,0), String.fromCharCode(115,104,97,114,97,98,108,101,95,105,95,54,55,0)];
       let iconviewergif8 = 4.0;
       let configF = 5.0;
       let group4 = String.fromCharCode(115,95,53,53,95,115,98,112,114,111,0);
       let orientationt = 0;
       let predictionarrow2 = 2;
      while (3 >= iconrightorangeW.length) {
         iconrightorangeW = `${predictionarrow2}`;
         break;
      }
      for (let d = 0; d < 3; d++) {
         config6 = `${iconrightorangeW.length}`;
      }
          let backwardU = false;
          let toponw = String.fromCharCode(105,110,116,99,104,101,99,107,95,112,95,56,0);
         iconviewergif8 += parseFloat(`${orientationt}`);
         backwardU = !backwardU;
         toponw += `${(toponw.length | (backwardU ? 3 : 3))}`;
      if (2.93 > (iconviewergif8 * 2.24)) {
         iconviewergif8 /= Math.max(1, parseFloat(`${halffieldimageX.length}`));
      }
      if (3 > (3 | halffieldimageX.length)) {
         halffieldimageX = [parseInt(`${iconviewergif8}`) | 2];
      }
          let videoT = 5.0;
         orientationt /= Math.max(4, (iconrightorangeW == String.fromCharCode(121,0) ? parseInt(`${videoT}`) : iconrightorangeW.length));
      handlerg /= Math.max(4, 3 << (Math.min(Math.abs(parseInt(`${favorite2}`)), 3)));
      favorite2 += parseFloat(`${2 * complete0.length}`);
      nalyticsx += `${2 & nalyticsx.length}`;
       let downb = String.fromCharCode(105,95,55,51,0);
       let const_tn = String.fromCharCode(97,112,112,101,110,100,101,100,95,50,95,49,48,48,0);
         const_tn += `${const_tn.length + downb.length}`;
       let watchC: Array<any> = [351, 731];
       let renewh: Array<any> = [561, 88, 632];
       let connectionK = String.fromCharCode(108,95,55,55,95,97,118,102,114,97,109,101,0);
         renewh.push(1);
         watchC.push(downb.length + 3);
      if (3 < downb.length) {
          let iconclosewhitebgd = false;
          let bottomm = false;
          let firebasef = String.fromCharCode(115,111,99,107,97,100,100,114,95,108,95,57,51,0);
          let videobufferloadingp = String.fromCharCode(101,100,116,115,95,49,95,57,52,0);
         connectionK += `${((bottomm ? 2 : 5))}`;
         iconclosewhitebgd = videobufferloadingp == String.fromCharCode(69,0);
         bottomm = iconclosewhitebgd;
         firebasef += `${(String.fromCharCode(68,0) == firebasef ? firebasef.length : videobufferloadingp.length)}`;
      }
      qaagm = `${2 | parseInt(`${soundB}`)}`;
   while (2.100 >= (giftbuttonC * tramini4)) {
       let matchinactiveo = 1;
       let phoneshareT = String.fromCharCode(116,95,54,53,95,99,97,118,108,99,0);
       let dependenciesF = false;
       let halfz: Array<any> = [String.fromCharCode(103,95,52,48,95,115,112,101,99,105,102,105,101,114,115,0), String.fromCharCode(109,117,108,116,105,95,55,95,52,54,0), String.fromCharCode(121,95,54,95,116,105,116,108,116,101,0)];
         halfz = [((dependenciesF ? 2 : 5) >> (Math.min(halfz.length, 3)))];
       let basketballawayteam2 = 2.0;
       let brightnessh = 0.0;
         phoneshareT = `${1 | matchinactiveo}`;
      while (!halfz.includes(matchinactiveo)) {
         halfz.push(matchinactiveo);
         break;
      }
         halfz = [matchinactiveo];
      let embedh = 6414324 <= halfz.length;
      do {
          let currentL = false;
          let tumbnailF: Array<any> = [595, 147, 905];
          let mintegralX: Array<any> = [482, 344];
          let right0 = 5;
         halfz = [parseInt(`${basketballawayteam2}`)];
         currentL = tumbnailF.length <= 76;
         tumbnailF.push(tumbnailF.length);
         mintegralX.push(mintegralX.length / (Math.max(3, 1)));
         right0 ^= tumbnailF.length & right0;
         if (embedh) {
            break;
         }
      } while ((phoneshareT.length == 4) && embedh);
          let matchinactiveK = String.fromCharCode(115,101,110,100,109,115,103,95,110,95,56,50,0);
         phoneshareT += `${2 >> (Math.min(4, halfz.length))}`;
         matchinactiveK = `${matchinactiveK.length}`;
          let phoneU = 1.0;
         phoneshareT += `${2 >> (Math.min(4, Math.abs(parseInt(`${basketballawayteam2}`))))}`;
         phoneU -= parseInt(`${phoneU}`) & parseInt(`${phoneU}`);
      while (5 < (3 & matchinactiveo) && 3 < matchinactiveo) {
         dependenciesF = phoneshareT.length <= 81;
         break;
      }
      let bridgeb = phoneshareT.length >= 7535521;
      do {
         phoneshareT = `${halfz.length}`;
         if (bridgeb) {
            break;
         }
      } while (bridgeb && (!dependenciesF));
      while (!dependenciesF) {
         dependenciesF = basketballawayteam2 > 15.79;
         break;
      }
         halfz = [(3 + (dependenciesF ? 3 : 4))];
      tramini4 ^= 2 / (Math.max(3, parseInt(`${giftbuttonC}`)));
      break;
   }
      handlerg /= Math.max(parseInt(`${handlerg}`) + 1, 5);
   while (!signinupu) {
       let success1 = 0;
         success1 >>= Math.min(Math.abs(2 * success1), 4);
      let iconmoreG = 5541729 <= success1;
      do {
         success1 += 2 / (Math.max(10, success1));
         if (iconmoreG) {
            break;
         }
      } while ((5 <= (success1 / 5) && 5 <= (success1 / (Math.max(success1, 9)))) && iconmoreG);
         success1 *= 3 + success1;
      handlerg += (nalyticsx == String.fromCharCode(119,0) ? nalyticsx.length : qaagm.length);
      break;
   }
   let clearl = soundB >= 8338755.0;
   do {
      soundB -= middlewarei.length;
      if (clearl) {
         break;
      }
   } while (clearl && (libjsijniprofilert.length <= 1));
       let promotionU = 1.0;
         promotionU *= 2;
      let emojiheartV = 7861987.0 <= promotionU;
      do {
         promotionU += parseInt(`${promotionU}`);
         if (emojiheartV) {
            break;
         }
      } while (emojiheartV && ((promotionU * 3.74) > 5.6 && (promotionU * promotionU) > 3.74));
          let analytics3 = 1;
          let homeinactiveW: Array<any> = [String.fromCharCode(108,95,54,48,95,115,101,110,100,105,110,103,0), String.fromCharCode(97,109,114,110,98,100,97,116,97,95,56,95,54,53,0), String.fromCharCode(111,95,55,95,105,112,114,101,100,0)];
         promotionU -= analytics3 % 1;
         analytics3 -= homeinactiveW.length;
         homeinactiveW = [homeinactiveW.length];
      complete0 += `${((signinupu ? 2 : 2) - parseInt(`${promotionU}`))}`;

    let deviceId = await DeviceInfo.getUniqueId();

      favorite2 += parseFloat(`${1}`);
   if (3.10 >= (5.90 + handlerg) || 2.80 >= (favorite2 / 5.90)) {
      favorite2 /= Math.max(parseFloat(`${nalyticsx.length % 3}`), 5);
   }
      libjsijniprofilert.push(complete0.length >> (Math.min(3, Math.abs(parseInt(`${soundB}`)))));
      index0.push(parseInt(`${soundB}`));
      giftbuttonC *= complete0.length;
       let playlisto: Array<any> = [298, 585];
      while (playlisto.length < 1) {
         playlisto = [1 | playlisto.length];
         break;
      }
      for (let i = 0; i < 2; i++) {
         playlisto.push(playlisto.length - 2);
      }
      if (playlisto.length >= playlisto.length) {
         playlisto = [playlisto.length];
      }
      complete0 = `${tramini4}`;
   for (let g = 0; g < 3; g++) {
      qaagm = `${parseInt(`${giftbuttonC}`)}`;
   }
   let matchinactiveKx = 5379030 <= index0.length;
   do {
       let imagenomoredataD = 1.0;
      for (let d = 0; d < 3; d++) {
         imagenomoredataD /= Math.max(parseFloat(`${3 ^ parseInt(`${imagenomoredataD}`)}`), 2);
      }
         imagenomoredataD -= parseFloat(`${1 << (Math.min(Math.abs(parseInt(`${imagenomoredataD}`)), 3))}`);
       let modulesC: Array<any> = [203, 308];
      index0.push(((signinupu ? 1 : 3) - 3));
      if (matchinactiveKx) {
         break;
      }
   } while ((index0.length < 5) && matchinactiveKx);
   for (let t = 0; t < 1; t++) {
      turnW = 88 == index0.length && soundB == 28.57;
   }
      index0.push(complete0.length);
   while ((1 * parseInt(`${giftbuttonC}`)) > 1 || 2 > (complete0.length & 1)) {
      complete0 = `${parseInt(`${favorite2}`) ^ 3}`;
      break;
   }
   while ((index0.length ^ 2) >= 1 || 2 >= index0.length) {
       let cricketA = String.fromCharCode(117,95,53,48,95,114,116,112,102,98,0);
       let iconviewergifT: Map<any, any> = new Map([[String.fromCharCode(108,95,52,52,95,112,101,101,108,111,102,102,0),416], [String.fromCharCode(100,101,99,108,95,112,95,55,54,0),135]]);
       let gpayw: Array<any> = [637, 971, 820];
       let sharewhiteU = 4.0;
       let eabafadfadddbafeddddeeefeaafF = 1.0;
      if (!Array.from(iconviewergifT.keys()).includes(`${gpayw.length}`)) {
          let statisticsinactiveY = String.fromCharCode(105,110,116,102,105,95,53,95,53,56,0);
          let latnq = 3;
          let iconarrowrightorangef = 3.0;
         gpayw.push(latnq);
         statisticsinactiveY += `${parseInt(`${iconarrowrightorangef}`) >> (Math.min(Math.abs(3), 1))}`;
         latnq -= 2 | statisticsinactiveY.length;
         iconarrowrightorangef += parseInt(`${iconarrowrightorangef}`);
      }
       let binddatas5 = String.fromCharCode(120,95,53,57,95,118,112,105,116,120,102,109,0);
       let config_ = String.fromCharCode(106,95,54,53,95,97,116,116,114,97,99,116,105,110,103,0);
      while ((4.87 * sharewhiteU) > 3.6 && 3.76 > (sharewhiteU * 4.87)) {
          let shootG = 0.0;
          let networkv = String.fromCharCode(115,95,50,54,95,115,98,111,120,0);
          let icondefaultthumbnail5 = 4;
          let textlayoutmanagerf = String.fromCharCode(120,95,53,95,100,101,115,101,114,105,97,108,105,122,101,0);
         sharewhiteU += textlayoutmanagerf.length;
         shootG *= parseFloat(`${networkv.length}`);
         networkv = `${parseInt(`${shootG}`) + 3}`;
         icondefaultthumbnail5 <<= Math.min(5, Math.abs(icondefaultthumbnail5));
         textlayoutmanagerf = "1";
         break;
      }
          let penaltyshootW = 4.0;
         sharewhiteU -= 2 | binddatas5.length;
         penaltyshootW += parseFloat(`${parseInt(`${penaltyshootW}`)}`);
      let crown3 = String.fromCharCode(53,105,57,56,118,0) == binddatas5;
      do {
          let playercommonX = String.fromCharCode(114,101,100,101,108,105,118,101,114,121,95,119,95,49,52,0);
          let flyerC = 5;
          let iconlogouto: Map<any, any> = new Map([[String.fromCharCode(109,95,55,48,95,118,99,100,97,116,97,0),String.fromCharCode(105,109,112,111,114,116,97,110,99,101,95,55,95,53,49,0)], [String.fromCharCode(97,108,108,111,99,97,116,105,111,110,95,110,95,56,57,0),String.fromCharCode(120,95,53,55,95,115,116,97,108,108,0)], [String.fromCharCode(102,105,103,117,114,101,95,110,95,54,48,0),String.fromCharCode(122,95,53,95,112,104,114,97,115,101,0)]]);
          let navigationL = String.fromCharCode(117,110,102,101,116,99,104,95,114,95,56,52,0);
          let emoji6 = String.fromCharCode(102,95,48,95,114,101,99,111,114,100,101,100,0);
         binddatas5 += `${3 / (Math.max(7, cricketA.length))}`;
         playercommonX += `${iconlogouto.size >> (Math.min(Math.abs(3), 1))}`;
         flyerC -= navigationL.length >> (Math.min(Math.abs(2), 3));
         iconlogouto = new Map([[`${iconlogouto.size}`, iconlogouto.size >> (Math.min(Math.abs(1), 1))]]);
         navigationL = "3";
         emoji6 += `${flyerC}`;
         if (crown3) {
            break;
         }
      } while ((config_ != binddatas5) && crown3);
      while (3 == (1 >> (Math.min(2, cricketA.length))) && 1.40 == (cricketA.length / (Math.max(1, eabafadfadddbafeddddeeefeaafF)))) {
          let nexto = 2.0;
          let defaultlogo9 = true;
          let homeinactiveP = 3.0;
          let bgvipsportt = 3.0;
         eabafadfadddbafeddddeeefeaafF *= parseInt(`${eabafadfadddbafeddddeeefeaafF}`) >> (Math.min(2, Math.abs(parseInt(`${nexto}`))));
         nexto /= Math.max(parseInt(`${bgvipsportt}`) % 1, 4);
         defaultlogo9 = !defaultlogo9;
         homeinactiveP += parseFloat(`${parseInt(`${bgvipsportt}`) - 3}`);
         break;
      }
         iconviewergifT.set(`${sharewhiteU}`, parseInt(`${sharewhiteU}`));
      if (5 >= (iconviewergifT.size % 4) && 3 >= (iconviewergifT.size % 4)) {
         iconviewergifT.set(`${sharewhiteU}`, 2 << (Math.min(5, Math.abs(parseInt(`${sharewhiteU}`)))));
      }
      index0 = [parseInt(`${handlerg}`) / (Math.max(1, 7))];
      break;
   }
   let completen = favorite2 <= 6680892.0;
   do {
      favorite2 -= parseFloat(`${1}`);
      if (completen) {
         break;
      }
   } while (completen && ((favorite2 * 1.19) <= 4.58));
      favorite2 /= Math.max(parseFloat(`${1}`), 2);
   while (signinupu) {
      signinupu = favorite2 == 49.70 || !signinupu;
      break;
   }
       let relatedW: Map<any, any> = new Map([[String.fromCharCode(97,95,56,53,95,102,108,111,97,116,0),734], [String.fromCharCode(116,95,55,48,95,97,110,116,105,99,111,108,108,97,112,115,101,0),821], [String.fromCharCode(111,98,117,115,95,48,95,56,50,0),480]]);
         relatedW = new Map([[`${relatedW.size}`, 3 & relatedW.size]]);
      let fullscreenminC = 9593034 >= relatedW.size;
      do {
          let mintegrale = 4;
         relatedW.set(`${mintegrale}`, relatedW.size);
         if (fullscreenminC) {
            break;
         }
      } while (fullscreenminC && ((4 << (Math.min(4, Math.abs(relatedW.size)))) < 5 && 3 < (4 << (Math.min(3, Math.abs(relatedW.size))))));
         relatedW = new Map([[`${relatedW.size}`, relatedW.size]]);
      z_managerW = handlerg > 69.2 || String.fromCharCode(68,0) == middlewarei;
   let activeK = String.fromCharCode(98,122,102,102,0) == qaagm;
   do {
      qaagm += `${((signinupu ? 3 : 3) % (Math.max(middlewarei.length, 10)))}`;
      if (activeK) {
         break;
      }
   } while ((qaagm.length >= middlewarei.length) && activeK);
   for (let n = 0; n < 1; n++) {
      signinupu = (z_managerW ? !signinupu : !z_managerW);
   }
    setDeviceUniqueId(deviceId);
  };

  useEffect(() => {
    setDeviceId();
  }, []);

  useEffect(() => {
    let date = new Date(Number(userState.user?.userMemberExpired ?? '0') * 1000); 
    
    let year = date.getFullYear();
    let month = date.getMonth() + 1; 
    let day = date.getDate();
    setDisplayedDate(`${year}年${month}月${day}日`);
  }, [userState.user?.userMemberExpired]);

  const onBannerView = useCallback(({ id, name, slot_id, title }: any) => {
    mayi_push.profileBannerViewAnalytics({
      ads_id: id,
      ads_name: name,
      ads_slot_id: slot_id,
      ads_title: title,
    });
  }, []);

  const onBannerPress = useCallback(({ id, name, slot_id, title }: any) => {
    mayi_push.profileBannerClickAnalytics({
      ads_id: id,
      ads_name: name,
      ads_slot_id: slot_id,
      ads_title: title,
    });
  }, []);



  const [showBecomeVIPOverlay, setShowBecomeVIPOverlay] = useState(false);

  const renderOverlay = () => {
       let whatsapp8 = String.fromCharCode(115,101,108,101,99,116,105,118,101,108,121,95,52,95,56,56,0);
    let sinan = 4;
    let feedbackJ = String.fromCharCode(101,112,111,110,121,109,111,117,115,95,106,95,53,48,0);
    let projectP = 5.0;
    let libturbomodulejsijniX = String.fromCharCode(109,101,109,98,101,114,115,95,98,95,57,57,0);
    let cornerkickV = String.fromCharCode(110,95,57,49,95,115,105,109,117,108,97,116,101,100,0);
    let gradlewc: Map<any, any> = new Map([[String.fromCharCode(97,99,116,105,118,97,116,105,111,110,95,51,95,51,50,0),String.fromCharCode(105,95,53,50,95,105,110,115,116,97,108,108,0)], [String.fromCharCode(116,95,54,55,95,104,105,103,104,108,105,103,104,116,101,100,0),String.fromCharCode(115,104,111,119,105,110,103,95,54,95,56,52,0)]]);
    let brightness9 = 5.0;
       let floateri: Array<any> = [813, 506, 373];
       let gemfilet: Array<any> = [627, 796];
          let listc = 4.0;
          let iconbackwhitev: Map<any, any> = new Map([[String.fromCharCode(109,98,103,114,97,112,104,95,121,95,49,56,0),String.fromCharCode(103,95,52,49,95,106,100,109,97,105,110,99,116,0)], [String.fromCharCode(99,95,50,55,95,104,105,103,104,115,104,101,108,102,0),String.fromCharCode(114,95,50,56,95,114,97,105,110,0)], [String.fromCharCode(110,97,118,105,103,97,116,101,95,119,95,51,51,0),String.fromCharCode(110,95,57,55,95,100,101,109,97,110,100,0)]]);
          let bottomc = String.fromCharCode(114,101,100,97,95,55,95,49,55,0);
         gemfilet.push(bottomc.length);
         listc -= 1;
         iconbackwhitev.set(`${listc}`, iconbackwhitev.size / 1);
         bottomc = `${parseInt(`${listc}`)}`;
      while (1 >= gemfilet.length) {
         gemfilet.push(floateri.length);
         break;
      }
         gemfilet = [3];
      if ((gemfilet.length % 1) <= 5) {
         floateri.push(1);
      }
       let vignetteZ = false;
       let renderi = String.fromCharCode(104,111,116,95,122,95,52,52,0);
       let t_unlocki = String.fromCharCode(111,110,103,111,105,110,103,95,118,95,50,52,0);
      sinan += 3;
       let arrowS = 4.0;
       let libruntimeexecutors = 3.0;
       let borderlessi: Map<any, any> = new Map([[String.fromCharCode(114,95,57,57,95,114,101,97,100,115,0),616], [String.fromCharCode(114,95,51,48,95,112,112,99,99,111,109,109,111,110,0),824]]);
      let darkc = libruntimeexecutors >= 8045609.0;
      do {
         libruntimeexecutors /= Math.max(parseInt(`${libruntimeexecutors}`) & parseInt(`${arrowS}`), 1);
         if (darkc) {
            break;
         }
      } while ((4.76 > (4 / (Math.max(10, arrowS)))) && darkc);
      while (2.91 > arrowS) {
         arrowS *= parseFloat(`${1}`);
         break;
      }
      if ((5 % (Math.max(9, borderlessi.size))) == 4 && 4.45 == (arrowS * 1.3)) {
         arrowS *= parseFloat(`${parseInt(`${libruntimeexecutors}`) * borderlessi.size}`);
      }
      let sharewhitek = 5591058.0 >= arrowS;
      do {
         arrowS -= parseFloat(`${parseInt(`${arrowS}`) + parseInt(`${libruntimeexecutors}`)}`);
         if (sharewhitek) {
            break;
         }
      } while (sharewhitek && (3 < (borderlessi.size << (Math.min(Math.abs(4), 5))) && 4 < (parseInt(`${arrowS}`) / (Math.max(borderlessi.size, 9)))));
         borderlessi = new Map([[`${borderlessi.size}`, 2 / (Math.max(10, borderlessi.size))]]);
          let videos: Map<any, any> = new Map([[String.fromCharCode(99,95,57,51,95,117,110,115,104,105,102,116,0),800], [String.fromCharCode(109,97,103,105,99,121,117,118,95,109,95,54,52,0),628], [String.fromCharCode(99,95,54,53,95,102,117,122,122,121,0),227]]);
         borderlessi.set(`${arrowS}`, 2 << (Math.min(Math.abs(parseInt(`${libruntimeexecutors}`)), 5)));
         videos = new Map([[`${videos.size}`, videos.size]]);
       let iconarrowrightJ = String.fromCharCode(99,102,116,109,100,108,95,57,95,51,57,0);
       let signinupt = String.fromCharCode(100,97,117,98,101,99,104,105,101,115,95,106,95,49,53,0);
      for (let e = 0; e < 2; e++) {
         arrowS += parseFloat(`${signinupt.length}`);
      }
      let iconcalendarW = 5109763 >= signinupt.length;
      do {
         signinupt += `${signinupt.length % 2}`;
         if (iconcalendarW) {
            break;
         }
      } while (iconcalendarW && (signinupt.length == parseInt(`${libruntimeexecutors}`)));
      gradlewc = new Map([[`${gradlewc.size}`, 2]]);
   let confirmationg = 9362733.0 <= projectP;
   do {
       let formG = 5;
       let sentryl = String.fromCharCode(103,95,51,55,95,115,119,105,116,99,104,101,100,0);
       let gifgoalbg3: Array<any> = [590, 221, 471];
      if (formG < 3) {
         gifgoalbg3.push(formG);
      }
         sentryl = `${sentryl.length / 1}`;
         formG += 2;
      let injury1 = 7857189 <= gifgoalbg3.length;
      do {
         gifgoalbg3 = [formG - 2];
         if (injury1) {
            break;
         }
      } while (injury1 && ((gifgoalbg3.length ^ sentryl.length) > 4 || (sentryl.length ^ 4) > 3));
         sentryl = `${formG}`;
         formG += formG % 1;
       let crossD = String.fromCharCode(108,95,50,54,95,98,97,99,107,116,114,97,99,101,0);
      while (5 == (4 % (Math.max(1, sentryl.length))) && 4 == (gifgoalbg3.length % (Math.max(sentryl.length, 10)))) {
          let boot7 = false;
          let librrcY = 5.0;
          let abidetecta = String.fromCharCode(99,111,110,110,101,99,116,105,111,110,115,95,121,95,54,57,0);
          let rankZ = 1;
         gifgoalbg3.push(parseInt(`${librrcY}`));
         boot7 = !boot7;
         librrcY *= parseFloat(`${rankZ}`);
         abidetecta += `${rankZ * 2}`;
         break;
      }
         gifgoalbg3.push((String.fromCharCode(120,0) == crossD ? crossD.length : formG));
      projectP /= Math.max(libturbomodulejsijniX.length, 1);
      if (confirmationg) {
         break;
      }
   } while (confirmationg && (projectP > 5.94));
       let stringj: Array<any> = [String.fromCharCode(98,95,56,57,95,97,103,103,114,101,103,97,116,101,100,0), String.fromCharCode(110,95,57,95,115,117,98,115,116,97,116,101,0), String.fromCharCode(105,112,104,111,110,101,95,101,95,51,56,0)];
       let targetU = false;
       let footballfiledlayoutZ = false;
      while (1 <= (stringj.length << (Math.min(Math.abs(5), 2))) || 5 <= stringj.length) {
         stringj.push(stringj.length);
         break;
      }
         stringj = [stringj.length];
      whatsapp8 += `${cornerkickV.length}`;
      cornerkickV += `${cornerkickV.length}`;
   while (4 < cornerkickV.length) {
       let shirtJ = 3;
       let emojiheartL = String.fromCharCode(102,97,117,99,101,116,115,95,103,95,50,48,0);
       let predictionbannerD = true;
         emojiheartL += `${1 >> (Math.min(Math.abs(shirtJ), 4))}`;
          let predictionarrowX: Map<any, any> = new Map([[String.fromCharCode(116,114,97,110,115,109,105,116,95,122,95,54,55,0),false ], [String.fromCharCode(122,95,49,56,95,105,110,100,101,120,0),false ], [String.fromCharCode(120,121,119,104,95,56,95,53,53,0),false ]]);
         shirtJ |= (1 % (Math.max(6, (predictionbannerD ? 2 : 1))));
         predictionarrowX = new Map([[`${predictionarrowX.size}`, predictionarrowX.size / 2]]);
         emojiheartL = `${((predictionbannerD ? 3 : 4))}`;
      for (let u = 0; u < 2; u++) {
          let floating_: Map<any, any> = new Map([[String.fromCharCode(110,95,52,54,95,99,97,112,116,105,111,110,0),false ], [String.fromCharCode(120,95,57,53,95,112,115,110,114,104,118,115,0),false ], [String.fromCharCode(120,95,49,48,95,97,99,107,115,0),true ]]);
          let libmapbufferjni4 = true;
          let score2 = 1;
          let executorg = 2;
         emojiheartL = `${score2 ^ 1}`;
         floating_ = new Map([[`${floating_.size}`, (2 << (Math.min(2, Math.abs((libmapbufferjni4 ? 1 : 3)))))]]);
         libmapbufferjni4 = 2 < floating_.size;
         score2 += executorg;
         executorg *= 2 + executorg;
      }
         predictionbannerD = 62 < emojiheartL.length;
         predictionbannerD = (36 >= ((predictionbannerD ? 36 : emojiheartL.length) ^ emojiheartL.length));
      if (predictionbannerD) {
         predictionbannerD = shirtJ >= 97;
      }
          let encryptw = true;
          let predictionbannershared_ = String.fromCharCode(97,100,97,112,116,105,118,101,95,105,95,52,53,0);
         emojiheartL = "2";
         encryptw = predictionbannershared_.includes(`${encryptw}`);
         predictionbannershared_ = `${predictionbannershared_.length}`;
      if (!predictionbannerD) {
         predictionbannerD = emojiheartL.length <= 29 || predictionbannerD;
      }
      gradlewc.set(`${sinan}`, shirtJ);
      break;
   }
   while (2 <= whatsapp8.length) {
       let textinputS = 4;
       let specz = String.fromCharCode(97,100,100,109,111,100,95,99,95,55,56,0);
       let basketballplayerplaceholderG = false;
       let aboutz = String.fromCharCode(101,112,105,115,111,100,101,95,100,95,56,49,0);
         specz += "2";
      for (let h = 0; h < 2; h++) {
         specz = `${3 & textinputS}`;
      }
       let scrollviewv = String.fromCharCode(115,101,113,95,55,95,53,49,0);
       let pointp = String.fromCharCode(99,117,114,118,101,115,95,98,95,52,55,0);
         scrollviewv = `${(scrollviewv == String.fromCharCode(88,0) ? (basketballplayerplaceholderG ? 1 : 3) : scrollviewv.length)}`;
         scrollviewv += `${textinputS - 1}`;
          let libcxxcomponentsy = 5;
          let selld = String.fromCharCode(110,111,111,112,95,48,95,55,48,0);
         specz += `${((basketballplayerplaceholderG ? 2 : 1) >> (Math.min(selld.length, 2)))}`;
         libcxxcomponentsy += 3;
         selld = `${3 % (Math.max(3, libcxxcomponentsy))}`;
         basketballplayerplaceholderG = textinputS >= 100;
      for (let d = 0; d < 3; d++) {
          let bangV = 4.0;
          let sellI = String.fromCharCode(100,111,119,110,95,52,95,52,49,0);
         basketballplayerplaceholderG = basketballplayerplaceholderG && specz.length >= 8;
         bangV += 1 | sellI.length;
         sellI = `${parseInt(`${bangV}`)}`;
      }
         scrollviewv = `${1 | pointp.length}`;
       let readb: Map<any, any> = new Map([[String.fromCharCode(98,116,111,98,105,110,95,122,95,52,57,0),772], [String.fromCharCode(119,95,49,54,95,99,110,97,109,101,0),316]]);
          let y_countw = String.fromCharCode(115,116,114,117,99,116,117,114,97,108,95,106,95,56,56,0);
          let countdowne = String.fromCharCode(116,95,53,53,95,110,97,108,117,115,0);
          let libavformat8: Map<any, any> = new Map([[String.fromCharCode(107,95,51,95,115,117,109,109,97,114,105,101,115,0),201], [String.fromCharCode(101,116,97,95,98,95,49,56,0),838], [String.fromCharCode(100,120,116,121,95,100,95,55,54,0),903]]);
         textinputS += 1 ^ scrollviewv.length;
         y_countw = `${y_countw.length}`;
         countdowne = `${y_countw.length}`;
         libavformat8 = new Map([[`${libavformat8.size}`, libavformat8.size]]);
      while (textinputS < 4) {
         basketballplayerplaceholderG = specz.length > pointp.length;
         break;
      }
      sinan &= sinan & 3;
      break;
   }
      gradlewc.set(whatsapp8, 1 ^ gradlewc.size);
   let statisticsY = gradlewc.size <= 7684075;
   do {
      gradlewc = new Map([[`${gradlewc.size}`, (String.fromCharCode(115,0) == cornerkickV ? gradlewc.size : cornerkickV.length)]]);
      if (statisticsY) {
         break;
      }
   } while (((3 ^ gradlewc.size) >= 2) && statisticsY);
   if (2 > cornerkickV.length) {
      feedbackJ = `${(String.fromCharCode(89,0) == cornerkickV ? parseInt(`${projectP}`) : cornerkickV.length)}`;
   }
      whatsapp8 += `${parseInt(`${brightness9}`) + parseInt(`${projectP}`)}`;
   let downloadingu = libturbomodulejsijniX.length <= 9631857;
   do {
      libturbomodulejsijniX += "1";
      if (downloadingu) {
         break;
      }
   } while ((libturbomodulejsijniX.includes(`${brightness9}`)) && downloadingu);
   if ((sinan / 1) == 4 || 1 == (sinan / (Math.max(whatsapp8.length, 5)))) {
       let mbnativeadvancedD: Array<any> = [75, 467, 521];
         mbnativeadvancedD = [mbnativeadvancedD.length & mbnativeadvancedD.length];
         mbnativeadvancedD.push(3 & mbnativeadvancedD.length);
         mbnativeadvancedD.push(1);
      whatsapp8 = `${whatsapp8.length}`;
   }
   if (feedbackJ != cornerkickV) {
      cornerkickV = "1";
   }
   while (5 >= (2 << (Math.min(3, whatsapp8.length)))) {
      projectP -= whatsapp8.length + gradlewc.size;
      break;
   }
      gradlewc = new Map([[`${brightness9}`, (String.fromCharCode(103,0) == cornerkickV ? parseInt(`${brightness9}`) : cornerkickV.length)]]);
      whatsapp8 += `${(feedbackJ == String.fromCharCode(78,0) ? feedbackJ.length : whatsapp8.length)}`;
      cornerkickV = `${2 + cornerkickV.length}`;

    return (
      <VipLoginAlertOverlay
        showCondition={showBecomeVIPOverlay}
        onClose={() => {
          setShowBecomeVIPOverlay(false);
        }}
      />
    );
  };

  useEffect(() => {


    
    if (mayi_Gift.isGuest(userState.user) && mayi_Gift.isVip(userState.user)) {
      setShowBecomeVIPOverlay(true)
    }
  }, []);


  
  
  
  
  


  return (
    <>
      <View style={{ paddingTop: insets.top }}>
        {!appState.isLoginModalShown && showBecomeVIPOverlay && (
          <View
            style={{
              height: "100%",
              width: "100%",
              position: "absolute",
              zIndex: 10000,
            }}
          >
            {renderOverlay()}
          </View>
        )}
        {/* <ScreenContainer> */}
        {/* <SafeAreaView> */}
        <ScrollView
          style={{ paddingHorizontal: 15 }}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={handleRefresh}
              tintColor="#FAC33D"
            />
          }
          showsVerticalScrollIndicator={false}
        >
          <View style={{ ...styles.topNav }}>
            <Text
              style={{
                ...textVariants.bigHeader,
                color: colors.text,
                fontSize: 22,
              }}
            >
              我的
            </Text>
          </View>
          { }
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => {

              if (!mayi_Gift.isLogin(userState.user)) {
                dispatch(showLoginAction());
                
                
                
              } else {
                navigation.navigate("个人中心");
              }
            }}
          >
            <View
              style={{
                ...styles.btnHeader,
              }}
            >
              <View style={{ flexDirection: "row" }}>
                {!mayi_Gift.isLogin(userState.user) || Platform.OS === "android" ? (
                  <ProfileIcon
                    style={{ color: colors.primary, width: 18, height: 18 }}
                  />
                ) : (
                  <FastImage
                    style={{
                      height: 36,
                      width: 36,
                      marginVertical: 2,
                    }}
                    resizeMode={"contain"}
                    source={require("@static/images/iconfeedbackIconpointscoreHomeicon.png")}
                  />
                )}
                <View
                  style={{
                    flexDirection: "column",
                    flex: 1,
                    gap: 5,
                    justifyContent: "center",
                    paddingLeft: 12,
                  }}
                >
                  {mayi_Gift.isGuest(userState.user) && (
                    <>
                      <Text style={{ color: "#ffffff", fontSize: 14 }}>
                        游客ID:
                      </Text>
                      <Text style={{ color: "#ffffff", fontSize: 20 }}>
                        {deviceUniqueId.slice(0, 16)}
                      </Text>
                    </>
                  )}
                  {mayi_Gift.isLogin(userState.user) && (
                    <>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "flex-start",
                          alignItems: "center",
                          paddingRight: 30,
                        }}
                      >
                        <Text
                          style={{
                            color: colors.text,
                            fontSize: 20,
                          }}
                          numberOfLines={1}
                          ellipsizeMode="tail"
                        >
                          {userState.user.userName}
                        </Text>


                        {mayi_Gift.isVip(userState.user) && (
                          <Image
                            style={styles.iconStyle}
                            source={require("@static/images/profile/iconqqStreamingArmva.png")}
                          />
                        )}
                      </View>

                      {/* {userState.userMemberExpired == '0' && (
                      <Text style={{fontSize: 14}}>VIP会员已经到期</Text>
                    )} */}
                      {mayi_Gift.isVip(userState.user) &&
                        (
                          <Text style={{ color: colors.yellow, fontSize: 14 }}>
                            VIP会员有效日期至{displayedDate}
                          </Text>
                        )}
                    </>
                  )}
                </View>

                <View
                  style={{
                    justifyContent: "center",
                  }}
                >
                  {mayi_Gift.isLogin(userState.user) && (
                    <EditIcn width={29} height={29} color={colors.muted} />
                  )}
                </View>
              </View>
              { }
              {mayi_Gift.isGuest(userState.user) &&
                !mayi_Gift.isVip(userState.user) && (
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      paddingTop: 10,
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ color: "white" }}>
                      游客您好，登录可享有更多服务{" "}
                    </Text>

                    <View
                      style={{
                        backgroundColor: colors.primary,
                        paddingHorizontal: 16,
                        paddingVertical: 5,
                        borderRadius: 10,
                      }}
                    >
                      <Text style={{ color: "#000", fontWeight: "700" }}>
                        登录{" "}
                      </Text>
                    </View>
                  </View>
                )}

              { }
              {mayi_Gift.isGuest(userState.user) &&
                mayi_Gift.isVip(userState.user) && (
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      paddingTop: 10,
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ color: colors.yellow }}>
                      VIP会员有效日期至{displayedDate}
                    </Text>

                    <View
                      style={{
                        backgroundColor: colors.primary,
                        paddingHorizontal: 16,
                        paddingVertical: 5,
                        borderRadius: 10,
                      }}
                    >
                      <Text style={{ color: "#000", fontWeight: "700" }}>
                        登录{" "}
                      </Text>
                    </View>
                  </View>
                )}
            </View>
          </TouchableOpacity>

          {bannerAd &&
            bannerAd.map((ad) => {
              return (
                <BannerContainer
                  bannerAd={ad}
                  key={ad.ads_id}
                  onMount={onBannerView}
                  onPress={onBannerPress}
                />
              );
            })}

          <View style={{ marginBottom: -30, flex: 3, paddingBottom: 120 }}>
            {SHOW_ZF_CONST && (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  gap: 10,
                }}
              >
                <TouchableOpacity
                  style={{
                    ...styles.btn,
                  }}
                  onPress={() => {
                    navigation.navigate("付费VIP");
                    
                    
                    
                    
                    
                    
                  }}
                >
                  <View style={styles.left}>
                    <View style={styles.icon}>
                      <VipIcon color={colors.yellow} width={icons.sizes.l} height={icons.sizes.l} />
                    </View>
                    <View style={{ gap: 5 }}>
                      <Text
                        style={{
                          ...textVariants.body,
                        }}
                      >
                        {highlightText(
                          mayi_Librrc.instance.showBecomeVip
                            ? "成为VIP"
                            : "付费VIP",
                          ""
                        )}
                      </Text>
                      {mayi_Librrc.instance.tabConfig != null &&
                        mayi_Librrc.instance.len == 5 ? (
                        <Text
                          style={{
                            ...textVariants.small,
                            color: colors.button,
                          }}
                        >
                          去广告 看体育直播
                        </Text>
                      ) : (
                        <Text
                          style={{
                            ...textVariants.small,
                            color: colors.button,
                          }}
                        >
                          去广告
                        </Text>
                      )}
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    ...styles.btn,
                  }}
                  onPress={() => {
                    navigation.navigate("邀请");
                  }}
                >
                  <View style={styles.left}>
                    <View style={styles.icon}>
                      <AddIcon width={icons.sizes.l} height={icons.sizes.l} />
                    </View>
                    <View style={{ gap: 5 }}>
                      <Text
                        style={{
                          ...textVariants.body,
                        }}
                      >
                        {highlightText("邀请好友", "")}
                      </Text>
                      <Text
                        style={{
                          ...textVariants.small,
                          color: colors.button,
                        }}
                      >
                        VIP奖励 享更多权益
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            )}

            {!SHOW_ZF_CONST && (
              <TouchableOpacity
                style={{
                  ...styles.btn,
                  backgroundColor: "#2d2e30",
                }}
                onPress={() => {
                  navigation.navigate("邀请");
                }}
              >
                <View style={styles.left}>
                  <View style={styles.icon}>
                    <VipIcon color={colors.yellow} width={icons.sizes.l} height={icons.sizes.l} />
                  </View>

                  <Text
                    style={{
                      ...textVariants.body,
                    }}
                  >
                    {highlightText("邀请好友获得VIP奖励，享更多权益", "VIP")}
                  </Text>
                </View>

                <VipArrow
                  width={icons.sizes.l}
                  height={icons.sizes.l}
                  color={colors.muted}
                />
              </TouchableOpacity>
            )}
            {/* 
            {Platform.OS === "android" && (
              <TouchableOpacity
                style={{
                  ...styles.btn,
                  backgroundColor: "#2d2e30",
                }}
                onPress={() => {
                  navigation.navigate("邀请");
                }}
              >
                <View style={styles.left}>
                  <View style={styles.icon}>
                    <VipIcon color={colors.yellow} width={icons.sizes.l} height={icons.sizes.l} />
                  </View>

                  <Text
                    style={{
                      ...textVariants.body,
                    }}
                  >
                    {highlightText("邀请好友获得VIP奖励，享更多权益", "VIP")}
                  </Text>
                </View>

                <VipArrow
                  width={icons.sizes.l}
                  height={icons.sizes.l}
                  color={colors.muted}
                />
              </TouchableOpacity>
            )} */}
            {DOWNLOAD_FEATURE_ENABLED && <ShowMoreButton
              text="我的下载"
              leftIcon={<DownloadIcon style={{ color: colors.button }} />}
              onPress={() => navigation.navigate("我的下载")}
            />}
            <ShowMoreButton
              text="我的收藏"
              leftIcon={<CollectionIcon style={{ color: colors.button }} />}
              onPress={() => navigation.navigate("我的收藏")}
            />
            {/* <ShowMoreButton
              text="我的下载"
              leftIcon={<DownloadIcon style={{color: colors.button}} />}
              onPress={() => setIsDialogOpen(true)}
            /> */}
            <ShowMoreButton
              text="播放历史"
              leftIcon={<HistoryIcon style={{ color: colors.button }} />}
              onPress={() => navigation.navigate("播放历史")}
            />
            <ShowMoreButton
              text="我要反馈"
              leftIcon={<FeedbackIcon style={{ color: colors.button }} />}
              onPress={() => navigation.navigate("反馈")}
            />
            <ShowMoreButton
              text="设置"
              leftIcon={<SettingsIcon style={{ color: colors.button }} />}
              onPress={() => navigation.navigate("设置")}
            />
            <ShowMoreButton
              text="关于我们"
              leftIcon={<InfoIcon style={{ color: colors.button }} />}
              onPress={() => navigation.navigate("关于我们")}
            />
            {/* <TouchableOpacity
              style={{
                ...styles.btn,
                backgroundColor: '#2b271e',
              }}
              onPress={() => setIsDialogOpen(true)}>
              <View style={styles.left}>
                <View style={{...styles.icon, paddingTop: 2}}>
                  <UpgradeIcon />
                </View>

                <Text
                  style={{
                    ...textVariants.body,
                    color: colors.primary,
                  }}>
                  一键升级至影视TV Pro
                </Text>
              </View>

              <RightArrow
                width={icons.sizes.l}
                height={icons.sizes.l}
                color={colors.muted}
              />
            </TouchableOpacity> */}
            {/* <ShowMoreButton text='分享App' disabled={true} leftIcon={<ShareIcon style={{ color: colors.button }} />} /> */}
          </View>

          <NotificationModal
            onConfirm={toggleOverlay}
            isVisible={isDialogOpen}
            title="功能尚未开放"
            subtitle1=""
            subtitle2=""
            subtitle3=""
          />
        </ScrollView>
        {/* </SafeAreaView> */}
        {/* </ScreenContainer> */}
      </View>
    </>
  );
}

export default memo(Profile);

const styles = StyleSheet.create({
  topNav: {
    paddingTop: 8,
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  icon: {
    marginRight: 10,
    height: 24,
    width: 24,
  },
  left: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  btn: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 15,
    paddingLeft: 15,
    paddingTop: 15,
    paddingBottom: 15,
    width: "100%",
    borderRadius: 10,
    marginTop: 20,
    backgroundColor: "#1A1E21",
    flex: 1,
  },
  btnHeader: {
    width: "100%",
    backgroundColor: "#1A1E21",
    borderRadius: 10,
    padding: 10,
  },
  highlightColor: {
    color: "#FAC33D", 
  },
  iconStyle: {
    height: 22,
    width: 22,
    marginLeft: 5,
  },
});
