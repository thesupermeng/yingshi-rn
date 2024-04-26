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
import { useAppDispatch, useAppSelector, useSelector } from "@hooks/wawa_root";
import { wawaIconsubssuccess } from "@redux/wawa_bgvipsport_spinner";
import ShowMoreButton from "../../components/button/wawa_iconlogout_button";

import CollectionIcon from "@static/images/iconwatchMinimize.svg";
import HistoryIcon from "@static/images/iconarrowrightorangeMappingDefaultfootballbg.svg";
import FeedbackIcon from "@static/images/predictionarrowLibavfilter.svg";
import ReviewIcon from "@static/images/centerFriendsChat.svg";
import SettingsIcon from "@static/images/trophyDark.svg";
import InfoIcon from "@static/images/logoIcontransferclub.svg";
import DownloadIcon from "@static/images/customOrangeclock.svg";
import { useNavigation } from "@react-navigation/native";

import Orientation from "react-native-orientation-locker";
import ProfileIcon from "@static/images/libavdeviceQuest.svg";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import MoreArrow from "@static/images/combinePredictionbuttonSelect.svg";
import EditIcn from "@static/images/profile/codegenChatroombackgroundShootyesgoal.svg";

import VipIcon from "@static/images/privatechatbgMinimizeRelated.svg";
import VipArrow from "@static/images/projectEyeopen.svg";
import AddIcon from "@static/images/vip/pushFiled.svg";
import { wawaBasketballiconPenaltyshootnogoal } from "../../../wawa_shareblack_orientation";

import {
  hideBottomSheetAction,
  removeScreenAction,
  setShowGuestPurchaseSuccess,
  showLoginAction,
} from "@redux/actions/wawa_related";
import NotificationModal from "../../components/modal/wawa_lock";
import { updateUserAuth, updateUserReferral } from "@redux/actions/wawa_loginsuccess";
import ExpiredOverlay from "../../components/modal/wawa_holder";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { DOWNLOAD_FEATURE_ENABLED, INVITE_FRIEND, SHOW_ZF_CONST, UMENG_CHANNEL } from "@utility/wawa_iconpointscore";
import FastImage from "../../components/common/wawa_iconarrowrightblack";
import { wawaEvent } from "@api";
import { wawaYellowvideolive } from "../../Sports/global/wawa_mini";
import { BannerContainer } from "../../components/container/wawa_typing_libfabricjni";
import { wawaLeaguedetailsbgMbbid } from "@type/wawa_gradlew";
import { wawaGreyChange } from "@utility/wawa_graphics_manager";
import { wawaStatisticsEpisodes } from "../../constants/wawa_ping";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { wawaFlagStations } from "../../api/wawa_iconclosewhite_iconplay";
import wawa_dacccfaabfbcbadeebddcabacdffdbc_video from "../../../Umeng/wawa_dacccfaabfbcbadeebddcabacdffdbc_video";
import DeviceInfo from "react-native-device-info";
import style from "../../Sports/components/matchDetails/liveChatPage/wawa_hiad_iconnewchat";
import { VipLoginAlertOverlay } from "../../components/modal/wawa_sina";
import { wawaLibhermes } from "@redux/reducers/wawa_sharewhite";
import { wawaPhoneControls } from "@redux/reducers/wawa_umeng";
import { wawaLibglog } from "@models/wawa_refreshborderless_found";
import ReviewModal from "../../components/modal/wawa_livenodatabgimg";
import InAppReview from 'react-native-in-app-review';

function Profile({ navigation, route }: BottomTabScreenProps<any>) {
  const navigator = useNavigation();
  const { colors, textVariants, icons, spacing } = useTheme();
  const dispatch = useAppDispatch();
  const [refreshing, setRefreshing] = useState(false);
  const [displayedDate, setDisplayedDate] = useState("");
  const [isShowReview, setShowReview] = useState(false);
  const isInAppReviewAvailable = InAppReview.isAvailable();
  const userState = useSelector<wawaPhoneControls>('userReducer');
  const appState = useSelector<wawaLibhermes>('backgroundReducer');
  
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [bannerAd, setBannerAd] = useState<wawaLeaguedetailsbgMbbid[]>();

  const toggleOverlay = () => {
       let holderp = 1;
    let disconnectedlogoA = 3;
    let eyecloseL = true;
    let path7 = String.fromCharCode(112,95,49,57,95,102,116,115,116,111,107,0);
    let textr = String.fromCharCode(102,95,57,55,95,104,114,101,97,100,0);
    let disconnectedn = false;
    let libjsiS = String.fromCharCode(117,95,53,95,101,110,117,109,101,114,97,116,101,100,0);
    let filedg: Array<any> = [730, 822];
    let placeholder_: Array<any> = [511, 377];
    let dragP: Map<any, any> = new Map([[String.fromCharCode(112,97,117,115,101,95,121,95,55,0),405], [String.fromCharCode(115,95,50,95,114,101,97,115,111,110,115,0),817]]);
    let searcha: Array<any> = [628, 788, 138];
      libjsiS = `${2 & disconnectedlogoA}`;
      filedg.push(2 / (Math.max(1, holderp)));
      disconnectedn = ((filedg.length & (eyecloseL ? 26 : filedg.length)) == 26);
   for (let w = 0; w < 3; w++) {
      textr += `${holderp}`;
   }
      holderp /= Math.max(5, 2);
   for (let v = 0; v < 3; v++) {
      holderp *= placeholder_.length >> (Math.min(Math.abs(2), 1));
   }
   if (libjsiS.startsWith(`${disconnectedn}`)) {
      disconnectedn = (libjsiS.length ^ dragP.size) < 84;
   }
      holderp %= Math.max(1, libjsiS.length << (Math.min(Math.abs(1), 4)));
   for (let d = 0; d < 2; d++) {
      textr = `${placeholder_.length}`;
   }
   while ((5 ^ filedg.length) <= 3 && 5 <= (filedg.length ^ dragP.size)) {
      dragP = new Map([[`${placeholder_.length}`, placeholder_.length]]);
      break;
   }
   for (let x = 0; x < 3; x++) {
      path7 += "2";
   }
   for (let o = 0; o < 1; o++) {
      disconnectedn = (filedg.length & textr.length) == 59;
   }
       let moviesf = String.fromCharCode(103,95,52,54,95,97,117,116,111,99,111,114,114,101,108,97,116,101,0);
         moviesf = `${moviesf.length * moviesf.length}`;
         moviesf = `${moviesf.length}`;
      if (moviesf.length < moviesf.length) {
          let valuesO = 4.0;
          let foundj: Map<any, any> = new Map([[String.fromCharCode(115,99,114,101,101,110,95,106,95,55,49,0),332], [String.fromCharCode(117,95,55,52,95,102,116,101,108,108,0),771], [String.fromCharCode(99,114,121,115,116,97,108,104,100,95,97,95,52,50,0),152]]);
         moviesf += `${parseInt(`${valuesO}`) ^ 3}`;
         valuesO -= parseFloat(`${1}`);
         foundj = new Map([[`${foundj.size}`, 1 << (Math.min(4, Math.abs(foundj.size)))]]);
      }
      libjsiS = `${holderp}`;
      textr = `${textr.length / 3}`;
       let scrollview0: Map<any, any> = new Map([[String.fromCharCode(109,95,57,53,95,118,101,110,99,0),503], [String.fromCharCode(119,97,116,99,104,105,110,103,95,102,95,57,52,0),29], [String.fromCharCode(114,101,115,117,108,116,95,55,95,57,49,0),133]]);
       let whitetick8 = String.fromCharCode(116,101,120,116,95,117,95,54,52,0);
       let googleD = String.fromCharCode(115,117,98,116,114,97,99,116,109,111,100,95,101,95,51,50,0);
      let bufferI = googleD == String.fromCharCode(103,102,113,99,112,98,97,0);
      do {
          let librrcJ = 5;
          let bodanb = String.fromCharCode(97,116,116,101,109,112,116,95,120,95,52,50,0);
         googleD += `${scrollview0.size >> (Math.min(Math.abs(1), 2))}`;
         librrcJ ^= bodanb.length - librrcJ;
         bodanb += `${bodanb.length | librrcJ}`;
         if (bufferI) {
            break;
         }
      } while (bufferI && (whitetick8 == googleD));
      if (!whitetick8.endsWith(`${scrollview0.size}`)) {
          let shootnogoald = String.fromCharCode(116,105,109,101,115,116,97,109,112,101,100,95,101,95,54,52,0);
          let popupF = String.fromCharCode(103,95,56,54,95,117,110,99,97,99,104,101,100,0);
          let mnewsh = true;
          let penaltymatchiconu = false;
         scrollview0 = new Map([[`${mnewsh}`, ((penaltymatchiconu ? 4 : 3) / (Math.max(9, (mnewsh ? 1 : 4))))]]);
         shootnogoald += `${popupF.length}`;
         popupF += `${popupF.length & shootnogoald.length}`;
         penaltymatchiconu = shootnogoald.length > popupF.length;
      }
         whitetick8 += `${googleD.length}`;
      let headerJ = scrollview0.size <= 8909170;
      do {
         scrollview0.set(googleD, googleD.length);
         if (headerJ) {
            break;
         }
      } while (headerJ && (1 <= (googleD.length ^ scrollview0.size)));
         scrollview0 = new Map([[`${scrollview0.size}`, 3]]);
      if (googleD.length < 3) {
         googleD += `${3 & whitetick8.length}`;
      }
          let imagewatchlivep: Map<any, any> = new Map([[String.fromCharCode(113,95,52,55,95,110,111,114,109,97,108,105,122,101,0),440], [String.fromCharCode(118,95,55,48,95,100,101,99,111,100,101,112,108,97,110,101,0),86]]);
         whitetick8 += `${googleD.length >> (Math.min(4, Math.abs(imagewatchlivep.size)))}`;
      if (2 == (4 + scrollview0.size)) {
         whitetick8 += `${scrollview0.size}`;
      }
         whitetick8 = "1";
      holderp ^= (String.fromCharCode(78,0) == path7 ? path7.length : placeholder_.length);
       let iconF = 5.0;
       let whitevideoliveA = String.fromCharCode(121,95,50,50,95,100,105,103,105,116,99,111,117,110,116,0);
      if (3 == (parseInt(`${iconF}`) * whitevideoliveA.length)) {
         iconF *= 1;
      }
         whitevideoliveA += `${parseInt(`${iconF}`) % (Math.max(3, 4))}`;
         whitevideoliveA += `${parseInt(`${iconF}`) / (Math.max(3, whitevideoliveA.length))}`;
         whitevideoliveA += `${whitevideoliveA.length}`;
         iconF += whitevideoliveA.length - parseInt(`${iconF}`);
         whitevideoliveA += `${parseInt(`${iconF}`) % (Math.max(4, whitevideoliveA.length))}`;
      placeholder_ = [(holderp - (eyecloseL ? 1 : 3))];
   let icontransferclubx = 6235489 <= path7.length;
   do {
       let privacy1: Map<any, any> = new Map([[String.fromCharCode(101,108,108,105,103,105,98,108,101,95,50,95,55,49,0),String.fromCharCode(115,95,53,50,95,98,101,110,99,104,109,97,114,107,0)], [String.fromCharCode(106,95,51,48,95,99,108,111,115,101,100,0),String.fromCharCode(122,95,50,52,95,100,121,97,100,105,99,0)], [String.fromCharCode(116,114,97,110,115,108,105,116,101,114,97,116,101,100,95,105,95,57,51,0),String.fromCharCode(116,95,51,49,95,97,110,121,0)]]);
       let downloaderw = false;
       let overlayp = 3;
       let more0 = true;
       let entryO = false;
          let libfolly3 = 2.0;
          let appsW = 2.0;
          let traminiE = String.fromCharCode(109,95,54,50,95,109,99,100,101,99,0);
         overlayp /= Math.max(1 | parseInt(`${libfolly3}`), 2);
         libfolly3 -= parseFloat(`${traminiE.length}`);
         appsW += parseInt(`${appsW}`);
         traminiE = `${2 ^ parseInt(`${appsW}`)}`;
         overlayp &= 1;
         more0 = (entryO ? downloaderw : entryO);
          let libsgcores = String.fromCharCode(119,95,54,49,95,114,101,113,117,101,115,116,105,110,103,0);
         entryO = libsgcores.length <= 28;
         more0 = privacy1.size <= 84;
      let mbridgeF = downloaderw ? !downloaderw : downloaderw;
      do {
          let reducer3 = 4.0;
          let refreshv = 0.0;
         downloaderw = !entryO || overlayp <= 69;
         reducer3 *= parseInt(`${refreshv}`);
         refreshv /= Math.max(1, parseInt(`${reducer3}`));
         if (mbridgeF) {
            break;
         }
      } while (mbridgeF && ((overlayp % 1) <= 5));
      if (!downloaderw) {
         privacy1 = new Map([[`${privacy1.size}`, ((more0 ? 1 : 4) << (Math.min(Math.abs(privacy1.size), 2)))]]);
      }
      if (entryO && 3 >= (2 | overlayp)) {
         entryO = 80 == overlayp;
      }
      if (privacy1.size > 3) {
         downloaderw = more0;
      }
      for (let i = 0; i < 1; i++) {
         privacy1.set(`${more0}`, ((more0 ? 2 : 4) / (Math.max(privacy1.size, 2))));
      }
      for (let k = 0; k < 3; k++) {
          let libfbjniU = String.fromCharCode(120,95,52,57,95,102,111,112,101,110,0);
          let footballfiledlayoutO: Array<any> = [922, 798];
          let filtere = 3;
         more0 = filtere <= 75;
         libfbjniU = `${footballfiledlayoutO.length}`;
         footballfiledlayoutO = [libfbjniU.length / (Math.max(1, 10))];
         filtere *= footballfiledlayoutO.length - 3;
      }
         downloaderw = 44 > overlayp;
          let catalogc: Array<any> = [71, 678, 54];
          let tempP = String.fromCharCode(115,95,54,55,95,101,111,109,101,116,114,121,0);
         downloaderw = !downloaderw && privacy1.size == 34;
         catalogc.push(catalogc.length & tempP.length);
         tempP += "1";
          let libloggerA: Map<any, any> = new Map([[String.fromCharCode(98,95,53,50,95,114,101,116,114,97,110,115,109,105,116,0),844], [String.fromCharCode(99,104,97,110,103,101,95,111,95,53,57,0),772], [String.fromCharCode(118,95,54,57,95,100,105,114,110,97,109,101,0),372]]);
         entryO = !downloaderw;
         libloggerA.set(`${libloggerA.size}`, libloggerA.size % 2);
         more0 = !entryO;
      path7 += `${(libjsiS.length + (eyecloseL ? 1 : 1))}`;
      if (icontransferclubx) {
         break;
      }
   } while (((path7.length & 5) == 3 && 5 == (holderp & path7.length)) && icontransferclubx);
   for (let s = 0; s < 2; s++) {
      libjsiS = `${holderp | 2}`;
   }
      placeholder_ = [libjsiS.length];
      searcha.push((disconnectedlogoA / (Math.max(9, (disconnectedn ? 3 : 4)))));
   let reacta = eyecloseL ? !eyecloseL : eyecloseL;
   do {
      eyecloseL = (dragP.size + filedg.length) < 40;
      if (reacta) {
         break;
      }
   } while (reacta && (2 >= disconnectedlogoA));
      disconnectedn = holderp > path7.length;
   let gradle2 = disconnectedn ? !disconnectedn : disconnectedn;
   do {
      disconnectedn = filedg.includes(disconnectedlogoA);
      if (gradle2) {
         break;
      }
   } while (gradle2 && (disconnectedn));

    setIsDialogOpen(!isDialogOpen);
  };

  const refreshUserState = async () => {
       let liveendmodallogoS = String.fromCharCode(106,95,57,57,95,115,117,112,112,114,101,115,115,105,111,110,0);
    let iconstary = true;
    let register_vi = true;
    let half2 = 5.0;
    let hoverb = 1.0;
    let unselectedQ: Array<any> = [String.fromCharCode(97,118,97,105,108,97,98,105,108,105,116,121,95,49,95,57,57,0), String.fromCharCode(112,114,111,109,105,110,101,110,116,95,55,95,52,48,0), String.fromCharCode(105,95,57,54,95,114,101,115,117,108,116,0)];
    let goallogow = String.fromCharCode(106,95,51,53,95,105,110,116,101,114,110,101,100,0);
    let linkX: Map<any, any> = new Map([[String.fromCharCode(98,95,49,95,98,111,117,110,99,105,110,103,0),String.fromCharCode(101,95,53,95,101,109,117,108,97,116,101,100,0)], [String.fromCharCode(112,114,101,102,105,120,95,57,95,49,0),String.fromCharCode(116,104,114,111,117,103,104,112,117,116,95,104,95,52,50,0)]]);
    let found7 = 0;
    let q_unlock8 = 3.0;
    let nodeM = String.fromCharCode(99,95,51,51,95,114,101,115,105,103,110,101,100,0);
    let data2 = true;
    let backiconmaskg = String.fromCharCode(103,101,116,115,111,99,107,97,100,100,114,95,112,95,49,0);
      unselectedQ = [3];
       let review0: Map<any, any> = new Map([[String.fromCharCode(108,95,50,95,114,101,99,111,118,101,114,97,98,108,101,0),true ], [String.fromCharCode(116,95,56,55,95,99,111,109,112,97,114,97,116,111,114,0),false ], [String.fromCharCode(100,105,118,105,100,101,114,115,95,115,95,55,53,0),false ]]);
       let styleQ = String.fromCharCode(109,95,57,48,95,112,114,101,104,97,115,104,0);
       let rocket0 = 0;
      while ((styleQ.length - 5) > 4) {
         rocket0 += rocket0 + styleQ.length;
         break;
      }
         review0 = new Map([[`${review0.size}`, review0.size ^ styleQ.length]]);
         styleQ += `${styleQ.length << (Math.min(1, Math.abs(review0.size)))}`;
         rocket0 /= Math.max(1, rocket0 / (Math.max(review0.size, 1)));
         styleQ = `${rocket0}`;
      let short_wpp = styleQ == String.fromCharCode(49,109,100,97,109,107,0);
      do {
          let flipperb = String.fromCharCode(116,114,97,110,115,108,105,116,101,114,97,116,105,111,110,95,109,95,54,56,0);
          let subtextl = true;
          let hejia = 2.0;
         styleQ = `${(flipperb.length | (subtextl ? 1 : 2))}`;
         flipperb += "3";
         subtextl = hejia == hejia;
         if (short_wpp) {
            break;
         }
      } while (short_wpp && (styleQ.endsWith(`${review0.size}`)));
         review0 = new Map([[`${review0.size}`, rocket0]]);
      for (let o = 0; o < 3; o++) {
         styleQ = `${2 << (Math.min(4, Math.abs(rocket0)))}`;
      }
         styleQ += "2";
      half2 *= parseFloat(`${found7}`);
       let libswresampleW: Array<any> = [String.fromCharCode(107,101,109,112,102,95,99,95,52,56,0), String.fromCharCode(114,101,112,97,105,110,116,95,114,95,50,56,0)];
       let pageJ = true;
          let libaneL: Map<any, any> = new Map([[String.fromCharCode(120,95,51,49,95,108,101,118,101,108,115,0),false ], [String.fromCharCode(108,95,49,52,95,117,110,101,115,99,97,112,105,110,103,0),false ], [String.fromCharCode(102,95,49,53,95,118,105,115,105,98,108,101,0),false ]]);
         libswresampleW.push(1 * libswresampleW.length);
         libaneL = new Map([[`${libaneL.size}`, libaneL.size % 3]]);
      for (let f = 0; f < 1; f++) {
         pageJ = (((pageJ ? 56 : libswresampleW.length) * libswresampleW.length) > 56);
      }
      for (let q = 0; q < 3; q++) {
         libswresampleW.push(1 | libswresampleW.length);
      }
      while (2 <= libswresampleW.length) {
          let gmailT = String.fromCharCode(104,95,55,95,112,111,115,108,105,115,116,115,0);
          let predictionbuttonO = String.fromCharCode(98,95,50,52,95,97,110,105,109,97,116,97,98,108,101,0);
          let basketballO = 1.0;
          let basketballhometeamy = 3.0;
         libswresampleW = [predictionbuttonO.length * 2];
         gmailT = "1";
         predictionbuttonO = `${parseInt(`${basketballO}`) | parseInt(`${basketballhometeamy}`)}`;
         basketballO *= 3;
         basketballhometeamy -= parseInt(`${basketballO}`);
         break;
      }
         libswresampleW = [((pageJ ? 2 : 5) | 1)];
      if ((libswresampleW.length - 3) > 3 || libswresampleW.length > 3) {
         libswresampleW.push(((pageJ ? 5 : 5) >> (Math.min(libswresampleW.length, 4))));
      }
      register_vi = !pageJ || 92.13 >= hoverb;
   let dropdownm = iconstary ? !iconstary : iconstary;
   do {
      iconstary = 78 == linkX.size;
      if (dropdownm) {
         break;
      }
   } while (dropdownm && (iconstary));
      q_unlock8 /= Math.max(unselectedQ.length ^ 2, 1);
       let saveX = false;
       let sellm = true;
      let turn9 = saveX ? !saveX : saveX;
      do {
          let libjsix = String.fromCharCode(114,101,108,101,97,115,101,100,95,117,95,57,51,0);
          let telegram7: Array<any> = [String.fromCharCode(112,95,50,48,95,98,97,116,99,104,101,115,0), String.fromCharCode(122,95,50,57,95,98,108,111,99,107,120,0), String.fromCharCode(113,95,57,50,95,114,101,115,105,122,97,98,108,101,0)];
          let matches0 = String.fromCharCode(116,95,57,52,95,109,105,114,114,111,114,105,110,103,0);
         saveX = libjsix == String.fromCharCode(69,0);
         libjsix += `${matches0.length - telegram7.length}`;
         telegram7 = [matches0.length + telegram7.length];
         if (turn9) {
            break;
         }
      } while (turn9 && (!sellm));
         saveX = (saveX ? !sellm : saveX);
      goallogow = "1";

    const result = await wawaEvent.getUserDetails();

   for (let q = 0; q < 1; q++) {
       let backwardZ = false;
       let iconfeedbackW: Map<any, any> = new Map([[String.fromCharCode(111,95,53,55,95,100,101,115,105,103,110,0),567], [String.fromCharCode(111,95,52,57,95,100,101,99,108,116,121,112,101,0),350]]);
       let small4 = String.fromCharCode(117,95,51,56,95,112,114,102,0);
       let blackD = String.fromCharCode(116,111,107,104,122,95,114,95,49,51,0);
       let assistP: Map<any, any> = new Map([[String.fromCharCode(106,95,50,55,95,97,109,114,110,98,0),316], [String.fromCharCode(104,95,51,48,95,112,114,115,99,116,112,0),993], [String.fromCharCode(105,100,99,116,100,115,112,95,121,95,54,0),57]]);
       let huaweiT: Array<any> = [612, 67, 547];
       let moduleA: Array<any> = [215, 624, 775];
          let homeplayerC = String.fromCharCode(98,95,50,51,95,102,99,112,117,98,108,105,115,104,0);
         iconfeedbackW.set(`${backwardZ}`, 1 + assistP.size);
         homeplayerC = `${homeplayerC.length * 3}`;
          let bodanK = String.fromCharCode(116,95,57,49,95,114,107,109,112,112,0);
         backwardZ = bodanK == String.fromCharCode(83,0) || 64 > huaweiT.length;
       let showlessS = 0;
       let sharemodal5 = 2;
       let unreadF: Array<any> = [937, 433, 327];
         assistP.set(`${unreadF.length}`, assistP.size);
         iconfeedbackW = new Map([[`${assistP.size}`, (String.fromCharCode(100,0) == small4 ? assistP.size : small4.length)]]);
      for (let z = 0; z < 3; z++) {
          let moduleT = 5.0;
          let securityf = 4.0;
          let humiditym = true;
          let emojiheartj = String.fromCharCode(118,97,108,117,101,115,95,51,95,53,0);
          let iconsubssuccesst: Array<any> = [898, 895];
         blackD = `${moduleA.length}`;
         moduleT /= Math.max(5, parseFloat(`${parseInt(`${securityf}`)}`));
         securityf /= Math.max(1, 2);
         humiditym = (securityf / (Math.max(emojiheartj.length, 6))) <= 66.14;
         emojiheartj = `${3 % (Math.max(parseInt(`${moduleT}`), 9))}`;
         iconsubssuccesst.push(1 * parseInt(`${securityf}`));
      }
         showlessS |= showlessS;
      while (!blackD.includes(`${iconfeedbackW.size}`)) {
          let anytimeh = false;
          let qaag9: Array<any> = [352, 95];
          let yellowvideoliveJ = 3.0;
         blackD = `${moduleA.length}`;
         anytimeh = 60 >= qaag9.length;
         qaag9.push(parseInt(`${yellowvideoliveJ}`) << (Math.min(4, Math.abs(2))));
         yellowvideoliveJ += parseFloat(`${qaag9.length}`);
         break;
      }
      if ((1 + iconfeedbackW.size) > 2 || (1 + blackD.length) > 3) {
         blackD = `${showlessS >> (Math.min(4, Math.abs(3)))}`;
      }
      if ((huaweiT.length >> (Math.min(Math.abs(1), 5))) > 4 || 5 > (huaweiT.length >> (Math.min(Math.abs(1), 3)))) {
          let apple9: Map<any, any> = new Map([[String.fromCharCode(105,119,97,108,115,104,95,107,95,51,50,0),731], [String.fromCharCode(97,115,99,101,110,100,105,110,103,95,57,95,54,53,0),46], [String.fromCharCode(112,95,49,95,104,109,109,116,0),0]]);
          let sortw: Map<any, any> = new Map([[String.fromCharCode(99,104,112,108,95,49,95,57,57,0),336], [String.fromCharCode(114,115,97,122,95,103,95,54,53,0),419]]);
          let iconeyed: Map<any, any> = new Map([[String.fromCharCode(100,101,108,105,118,101,114,121,95,107,95,50,48,0),939], [String.fromCharCode(115,117,105,116,101,115,95,112,95,56,54,0),570], [String.fromCharCode(104,95,57,55,95,118,105,115,105,98,105,108,105,116,105,101,115,0),798]]);
         huaweiT.push(1);
         apple9 = new Map([[`${sortw.size}`, apple9.size | sortw.size]]);
         iconeyed = new Map([[`${sortw.size}`, sortw.size + apple9.size]]);
      }
       let mountingj = 3.0;
       let assetsr = 3.0;
      let mintegralI = 7556314 <= huaweiT.length;
      do {
         huaweiT.push(3 - sharemodal5);
         if (mintegralI) {
            break;
         }
      } while (((huaweiT.length & moduleA.length) <= 4) && mintegralI);
      for (let c = 0; c < 3; c++) {
          let internetR = String.fromCharCode(119,95,57,51,95,105,112,97,100,100,0);
          let middlesoundD = 4.0;
          let middleb = 0.0;
          let b_titleZ = 3;
         sharemodal5 &= 3 / (Math.max(5, parseInt(`${middlesoundD}`)));
         internetR = `${3 | b_titleZ}`;
         middlesoundD += (parseFloat(`${String.fromCharCode(78,0) == internetR ? internetR.length : parseInt(`${middleb}`)}`));
         middleb += 2;
         b_titleZ /= Math.max(internetR.length, 4);
      }
      goallogow += "3";
   }
      unselectedQ.push((String.fromCharCode(98,0) == liveendmodallogoS ? (iconstary ? 5 : 1) : liveendmodallogoS.length));
      nodeM += `${goallogow.length}`;
   for (let t = 0; t < 1; t++) {
      register_vi = iconstary;
   }
   let p_countm = 8587423 >= linkX.size;
   do {
      linkX = new Map([[`${unselectedQ.length}`, ((iconstary ? 3 : 4) >> (Math.min(unselectedQ.length, 3)))]]);
      if (p_countm) {
         break;
      }
   } while ((iconstary) && p_countm);
      iconstary = !iconstary;
    if (result == null) {

      q_unlock8 *= (parseInt(`${half2}`) >> (Math.min(2, Math.abs((register_vi ? 4 : 5)))));
      unselectedQ.push(1 | found7);
   for (let z = 0; z < 2; z++) {
      hoverb += parseFloat(`${1}`);
   }
      linkX.set(`${found7}`, found7);
      register_vi = !iconstary;
      liveendmodallogoS += `${liveendmodallogoS.length}`;
      return;
    }

    await dispatch(updateUserAuth(result));

   while ((found7 - 5) < 2) {
      found7 <<= Math.min(unselectedQ.length, 2);
      break;
   }
      goallogow += `${unselectedQ.length}`;
   let downarrowi = 9112917.0 >= half2;
   do {
      half2 -= (parseFloat(`${(register_vi ? 5 : 1) / 3}`));
      if (downarrowi) {
         break;
      }
   } while ((2.87 >= (half2 * 2.59) || 2.59 >= (hoverb / (Math.max(9, half2)))) && downarrowi);
      unselectedQ.push((parseInt(`${half2}`) | (iconstary ? 5 : 2)));
   let package_4T = 8496634.0 <= q_unlock8;
   do {
       let floatingR = 4;
       let memberC = 4.0;
       let username6 = String.fromCharCode(99,95,56,54,95,109,97,115,107,101,100,0);
       let basketballmatchdetailbgT = false;
      if (memberC < username6.length) {
          let readt = String.fromCharCode(100,101,115,105,114,101,100,95,51,95,55,57,0);
         username6 += "1";
         readt += `${readt.length}`;
      }
       let viewers = 0.0;
       let sortM = 4.0;
      while ((viewers - parseFloat(`${username6.length}`)) > 2.20) {
          let g_titlee = String.fromCharCode(115,111,99,105,97,108,95,102,95,51,51,0);
          let chatroombackgroundr = String.fromCharCode(107,95,51,55,95,121,117,118,103,98,114,112,0);
          let brightnessz = String.fromCharCode(102,95,57,48,95,97,117,116,111,97,114,99,104,105,118,101,0);
         username6 += `${1 << (Math.min(2, g_titlee.length))}`;
         g_titlee += `${(String.fromCharCode(66,0) == chatroombackgroundr ? chatroombackgroundr.length : brightnessz.length)}`;
         brightnessz = `${1 | brightnessz.length}`;
         break;
      }
         floatingR &= 2 / (Math.max(1, parseInt(`${sortM}`)));
      if (2.67 <= (2 + memberC)) {
          let adult1 = String.fromCharCode(120,95,50,95,114,101,99,101,112,116,105,111,110,0);
          let room0: Map<any, any> = new Map([[String.fromCharCode(101,97,115,121,95,118,95,57,0),80], [String.fromCharCode(110,117,108,108,115,95,100,95,56,51,0),52]]);
          let bnewinterstitialp = 4.0;
          let dropdownP = String.fromCharCode(103,95,52,57,95,99,111,110,102,108,105,99,116,105,110,103,0);
          let emojib: Map<any, any> = new Map([[String.fromCharCode(109,103,109,116,95,102,95,50,55,0),false ], [String.fromCharCode(98,95,53,49,95,113,117,105,99,107,99,111,109,112,114,101,115,115,0),true ], [String.fromCharCode(98,115,111,110,95,51,95,49,49,0),false ]]);
         sortM /= Math.max(parseFloat(`${emojib.size >> (Math.min(username6.length, 1))}`), 5);
         adult1 += `${parseInt(`${bnewinterstitialp}`)}`;
         room0 = new Map([[`${room0.size}`, 3]]);
         bnewinterstitialp /= Math.max(2, 2);
         dropdownP = `${room0.size}`;
         emojib = new Map([[`${room0.size}`, room0.size]]);
      }
      if ((parseInt(`${memberC}`) * floatingR) == 1 && (memberC * 4.34) == 3.57) {
         memberC -= floatingR / 1;
      }
         memberC /= Math.max(floatingR, 1);
      for (let u = 0; u < 1; u++) {
         username6 += `${2 | parseInt(`${viewers}`)}`;
      }
         basketballmatchdetailbgT = !basketballmatchdetailbgT;
         sortM += parseFloat(`${parseInt(`${viewers}`)}`);
      let b_managerE = basketballmatchdetailbgT ? !basketballmatchdetailbgT : basketballmatchdetailbgT;
      do {
         basketballmatchdetailbgT = 55 <= floatingR;
         if (b_managerE) {
            break;
         }
      } while ((!basketballmatchdetailbgT) && b_managerE);
      if (4.22 >= (viewers - 1.93)) {
         viewers *= parseFloat(`${1 << (Math.min(3, username6.length))}`);
      }
      q_unlock8 -= ((iconstary ? 1 : 5));
      if (package_4T) {
         break;
      }
   } while ((3 <= (4 >> (Math.min(4, liveendmodallogoS.length))) || 4 <= (liveendmodallogoS.length * parseInt(`${q_unlock8}`))) && package_4T);
       let middlewareZ = String.fromCharCode(122,95,54,49,95,121,97,114,110,0);
       let liveendmodallogol: Array<any> = [998, 850];
       let redscoreballQ = 2.0;
      while (4 > (liveendmodallogol.length & 2)) {
         redscoreballQ *= parseFloat(`${liveendmodallogol.length / (Math.max(3, 3))}`);
         break;
      }
      while (5 < (liveendmodallogol.length | 3) || 4.54 < (redscoreballQ / 4.5)) {
          let loginR = String.fromCharCode(113,95,57,56,95,101,110,104,97,110,99,101,109,101,110,116,115,0);
          let logoutp = 5;
          let closex = 4.0;
          let mergerN = String.fromCharCode(119,95,55,48,95,115,104,97,112,101,0);
         redscoreballQ *= (parseFloat(`${String.fromCharCode(115,0) == loginR ? parseInt(`${redscoreballQ}`) : loginR.length}`));
         logoutp <<= Math.min(Math.abs(logoutp), 4);
         closex -= (mergerN == String.fromCharCode(65,0) ? mergerN.length : parseInt(`${closex}`));
         break;
      }
       let runtimeb = String.fromCharCode(117,95,48,95,109,107,100,105,114,0);
      for (let t = 0; t < 2; t++) {
         liveendmodallogol = [liveendmodallogol.length * 2];
      }
      while ((5 | middlewareZ.length) > 4 || 4 > (middlewareZ.length | 5)) {
         liveendmodallogol.push(parseInt(`${redscoreballQ}`));
         break;
      }
      for (let d = 0; d < 3; d++) {
         liveendmodallogol.push(3 << (Math.min(5, Math.abs(parseInt(`${redscoreballQ}`)))));
      }
      if (runtimeb.length < 4) {
         runtimeb = `${runtimeb.length ^ parseInt(`${redscoreballQ}`)}`;
      }
         runtimeb = `${liveendmodallogol.length}`;
         liveendmodallogol.push(2);
      iconstary = register_vi;
    return;
  };

  const handleRefresh = async () => {
       let favoriteQ: Map<any, any> = new Map([[String.fromCharCode(100,101,97,99,116,105,118,97,116,101,100,95,53,95,55,52,0),166], [String.fromCharCode(102,97,118,101,100,95,100,95,53,51,0),388]]);
    let referrer0 = true;
    let iconbella = String.fromCharCode(118,95,56,51,95,97,100,100,0);
    let middle0 = 2.0;
    let slider0 = 4;
    let member0 = false;
    let resultA = 1.0;
    let mailY = String.fromCharCode(114,101,99,116,97,110,103,108,101,95,115,95,52,55,0);
   while (2 >= iconbella.length) {
       let promotion9: Map<any, any> = new Map([[String.fromCharCode(110,95,56,50,95,102,111,108,100,0),479], [String.fromCharCode(103,95,51,48,95,98,105,116,112,97,99,107,101,100,0),256]]);
       let libfabricjnib = false;
       let defaultfootballbgC = String.fromCharCode(112,97,116,116,101,114,110,95,121,95,54,50,0);
       let predictionwinv = String.fromCharCode(102,95,56,49,95,112,117,98,108,105,99,105,116,121,0);
      let airbnbstarselectedt = 7875149 >= promotion9.size;
      do {
         promotion9.set(defaultfootballbgC, promotion9.size);
         if (airbnbstarselectedt) {
            break;
         }
      } while ((libfabricjnib) && airbnbstarselectedt);
          let gifgoalT = false;
         defaultfootballbgC = `${(2 - (gifgoalT ? 4 : 4))}`;
       let textZ = String.fromCharCode(97,100,100,114,101,115,115,95,112,95,51,0);
       let checkboxN = String.fromCharCode(115,116,114,105,114,101,112,108,97,99,101,95,50,95,55,56,0);
      for (let g = 0; g < 2; g++) {
         predictionwinv += `${(checkboxN.length - (libfabricjnib ? 2 : 4))}`;
      }
      while (2 <= (promotion9.size + predictionwinv.length) || 2 <= (predictionwinv.length + 2)) {
          let loginsuccessp = String.fromCharCode(113,117,97,110,116,95,101,95,48,0);
          let tempnodata_ = String.fromCharCode(110,95,57,57,95,108,105,110,117,120,0);
          let completeR = 5;
         predictionwinv = `${(defaultfootballbgC == String.fromCharCode(51,0) ? promotion9.size : defaultfootballbgC.length)}`;
         loginsuccessp = "1";
         tempnodata_ = `${completeR * 2}`;
         completeR ^= completeR - loginsuccessp.length;
         break;
      }
         defaultfootballbgC += `${((libfabricjnib ? 2 : 1))}`;
         promotion9 = new Map([[`${promotion9.size}`, 1]]);
      let rewardH = predictionwinv == String.fromCharCode(103,103,107,103,106,110,109,95,0);
      do {
         predictionwinv += `${promotion9.size}`;
         if (rewardH) {
            break;
         }
      } while ((defaultfootballbgC == String.fromCharCode(117,0)) && rewardH);
      iconbella = `${iconbella.length}`;
      break;
   }
   while (2 > mailY.length) {
      mailY = `${mailY.length}`;
      break;
   }
   let homeplayero = resultA >= 7923501.0;
   do {
      resultA -= parseInt(`${resultA}`) | iconbella.length;
      if (homeplayero) {
         break;
      }
   } while (((middle0 - resultA) > 5.19 && 4.69 > (middle0 - 5.19)) && homeplayero);
      slider0 -= (mailY == String.fromCharCode(117,0) ? mailY.length : parseInt(`${resultA}`));
       let filedI = 0.0;
       let membershipv = String.fromCharCode(119,95,54,50,95,98,105,114,116,104,100,97,121,0);
       let resende = String.fromCharCode(116,105,101,114,95,52,95,57,57,0);
         resende += `${membershipv.length % (Math.max(3, 4))}`;
       let livej = String.fromCharCode(97,95,50,57,95,97,100,100,114,105,110,102,111,0);
      if ((filedI + 3.39) <= 3.20) {
         filedI += parseFloat(`${1}`);
      }
      let iconsaveimaged = resende == String.fromCharCode(52,118,52,54,50,0);
      do {
         resende += `${parseInt(`${filedI}`)}`;
         if (iconsaveimaged) {
            break;
         }
      } while (iconsaveimaged && (3 == (resende.length + 5) && (resende.length + 5) == 3));
       let loginsuccess2 = String.fromCharCode(116,95,49,48,95,109,97,108,108,111,99,122,0);
       let redscoreballs = String.fromCharCode(114,95,53,55,95,100,101,100,117,112,101,0);
      let bingp = 9380255.0 >= filedI;
      do {
         filedI *= parseFloat(`${membershipv.length << (Math.min(1, Math.abs(parseInt(`${filedI}`))))}`);
         if (bingp) {
            break;
         }
      } while (bingp && (5 < (3 | membershipv.length) && 1.18 < (filedI - parseFloat(`${membershipv.length}`))));
      if (!membershipv.endsWith(`${filedI}`)) {
          let componentregistryR = String.fromCharCode(110,95,57,95,99,108,111,115,105,110,103,0);
          let o_positionx = String.fromCharCode(112,111,115,116,112,111,110,101,100,95,104,95,57,53,0);
         filedI /= Math.max(1, parseFloat(`${membershipv.length << (Math.min(Math.abs(1), 5))}`));
         componentregistryR += `${o_positionx.length}`;
         o_positionx += `${o_positionx.length & componentregistryR.length}`;
      }
      for (let o = 0; o < 3; o++) {
         loginsuccess2 += `${redscoreballs.length}`;
      }
      let release_wG = resende == String.fromCharCode(115,101,52,110,109,104,99,115,0);
      do {
          let gpaym = 3.0;
          let defaultfootballbgG = 4;
          let telemetryS = true;
         resende += `${resende.length >> (Math.min(3, loginsuccess2.length))}`;
         gpaym -= ((telemetryS ? 2 : 3) % (Math.max(parseInt(`${gpaym}`), 2)));
         defaultfootballbgG %= Math.max(2, 3);
         telemetryS = 78 <= defaultfootballbgG;
         if (release_wG) {
            break;
         }
      } while (((resende.length - parseInt(`${filedI}`)) > 2 || 1 > (2 & resende.length)) && release_wG);
      member0 = filedI > 79.24;
   if (iconbella != String.fromCharCode(122,0)) {
      mailY += `${favoriteQ.size / 2}`;
   }
       let liveendmodallogoO = String.fromCharCode(105,100,101,110,116,105,102,105,101,114,115,95,100,95,49,52,0);
       let fieldI = 5;
      let robotop = fieldI <= 5871804;
      do {
         fieldI *= liveendmodallogoO.length;
         if (robotop) {
            break;
         }
      } while ((liveendmodallogoO.startsWith(`${fieldI}`)) && robotop);
          let iconrightorangeq = String.fromCharCode(114,101,102,99,111,117,110,116,101,114,95,122,95,57,48,0);
          let gifgoalN = true;
          let libreanimatedt = String.fromCharCode(98,117,102,95,100,95,55,48,0);
         fieldI <<= Math.min(5, Math.abs(liveendmodallogoO.length << (Math.min(4, iconrightorangeq.length))));
         iconrightorangeq += `${((gifgoalN ? 1 : 3) & 3)}`;
         gifgoalN = libreanimatedt.endsWith(`${gifgoalN}`);
         libreanimatedt += `${(2 + (gifgoalN ? 5 : 5))}`;
      if (2 <= fieldI) {
         fieldI /= Math.max(2, (liveendmodallogoO == String.fromCharCode(66,0) ? fieldI : liveendmodallogoO.length));
      }
      let g_titleM = liveendmodallogoO.length <= 9868492;
      do {
          let inviteK = 2;
          let uploadQ: Array<any> = [8, 744];
         liveendmodallogoO = `${liveendmodallogoO.length}`;
         inviteK <<= Math.min(5, Math.abs(inviteK));
         uploadQ = [2];
         if (g_titleM) {
            break;
         }
      } while ((!liveendmodallogoO.endsWith(`${fieldI}`)) && g_titleM);
         fieldI -= 3;
         fieldI *= (liveendmodallogoO == String.fromCharCode(87,0) ? liveendmodallogoO.length : fieldI);
      iconbella += `${liveendmodallogoO.length * parseInt(`${middle0}`)}`;
   if ((slider0 << (Math.min(Math.abs(5), 3))) <= 1) {
      referrer0 = !mailY.includes(`${member0}`);
   }
   let activeY = referrer0 ? !referrer0 : referrer0;
   do {
      referrer0 = (resultA + mailY.length) >= 28.40;
      if (activeY) {
         break;
      }
   } while (activeY && (3 >= slider0 || 5 >= (slider0 - 3)));
   while ((resultA - 3.49) >= 5.23 || !member0) {
      resultA += 2;
      break;
   }

    setRefreshing(true);

   let profileinactivex = resultA <= 6107294.0;
   do {
      resultA /= Math.max(5, 1);
      if (profileinactivex) {
         break;
      }
   } while (profileinactivex && (1.49 < resultA));
      mailY += `${(parseInt(`${middle0}`) + (member0 ? 3 : 5))}`;
      middle0 *= parseFloat(`${favoriteQ.size}`);
   let attributedstringw = member0 ? !member0 : member0;
   do {
      member0 = (((!referrer0 ? favoriteQ.size : 85) / (Math.max(favoriteQ.size, 2))) >= 21);
      if (attributedstringw) {
         break;
      }
   } while ((!member0) && attributedstringw);
      middle0 -= parseFloat(`${2 << (Math.min(Math.abs(parseInt(`${resultA}`)), 2))}`);
      middle0 *= (parseFloat(`${1 | (referrer0 ? 2 : 4)}`));
      iconbella += `${favoriteQ.size}`;
      resultA += ((referrer0 ? 2 : 3) + (member0 ? 3 : 1));
      favoriteQ = new Map([[`${resultA}`, 2]]);
       let dragcloseG = String.fromCharCode(111,118,101,114,108,97,112,115,95,102,95,54,51,0);
       let vipsportE: Array<any> = [786, 252];
       let guideq: Array<any> = [713, 594];
         vipsportE.push((dragcloseG == String.fromCharCode(87,0) ? dragcloseG.length : vipsportE.length));
         dragcloseG += `${vipsportE.length}`;
       let chatbotphotoW = false;
       let vertical6 = false;
       let fnewsZ = 1.0;
      if (dragcloseG.length == 3) {
          let backicon8 = 4.0;
         vertical6 = fnewsZ > 79.25;
         backicon8 += 3;
      }
      if (vertical6) {
          let projectk = String.fromCharCode(109,98,99,115,95,56,95,54,56,0);
          let langkeyt = 3.0;
          let ecopy_wV = 5.0;
         vertical6 = !vertical6;
         projectk = `${3 << (Math.min(2, Math.abs(parseInt(`${langkeyt}`))))}`;
         langkeyt *= 2 & parseInt(`${langkeyt}`);
         ecopy_wV += projectk.length;
      }
      while (!vertical6 || (3.92 - fnewsZ) <= 2.84) {
         vertical6 = fnewsZ >= 63.45;
         break;
      }
       let plashN = 0;
         vipsportE.push(dragcloseG.length - vipsportE.length);
      mailY += `${parseInt(`${middle0}`) >> (Math.min(2, Math.abs(parseInt(`${resultA}`))))}`;
    await refreshUserState();

   for (let m = 0; m < 2; m++) {
       let zoomM = 1;
       let basketballplayerplaceholderW: Map<any, any> = new Map([[String.fromCharCode(98,95,49,56,95,97,108,115,97,115,121,109,98,111,108,116,97,98,108,101,0),400], [String.fromCharCode(115,95,49,48,48,95,108,97,110,99,122,111,115,0),330], [String.fromCharCode(116,104,114,101,115,104,111,108,100,115,95,97,95,51,48,0),996]]);
       let fill9 = String.fromCharCode(97,112,112,101,110,100,95,100,95,55,52,0);
       let anytimew = 1.0;
      let yellowcirclebga = 7855182 <= basketballplayerplaceholderW.size;
      do {
         basketballplayerplaceholderW.set(`${fill9}`, (fill9 == String.fromCharCode(49,0) ? basketballplayerplaceholderW.size : fill9.length));
         if (yellowcirclebga) {
            break;
         }
      } while (yellowcirclebga && ((basketballplayerplaceholderW.size ^ zoomM) < 3));
          let down7 = String.fromCharCode(114,101,99,111,110,115,116,114,117,99,116,101,100,95,120,95,51,50,0);
          let matchx: Array<any> = [404, 564, 961];
          let themeg: Array<any> = [String.fromCharCode(121,95,53,54,95,98,105,116,114,101,118,0), String.fromCharCode(104,95,55,48,95,105,101,101,101,0), String.fromCharCode(110,111,114,109,97,108,105,115,101,95,51,95,55,54,0)];
         basketballplayerplaceholderW.set(`${anytimew}`, 3);
         down7 = `${themeg.length - 2}`;
         matchx.push(matchx.length);
         themeg = [themeg.length];
      while (basketballplayerplaceholderW.size >= zoomM) {
          let interstitialB: Map<any, any> = new Map([[String.fromCharCode(108,95,49,49,95,97,100,100,114,0),84], [String.fromCharCode(112,114,101,99,111,109,112,95,48,95,57,50,0),348], [String.fromCharCode(109,117,116,97,98,108,101,95,116,95,53,51,0),933]]);
          let reminders = false;
          let fastforwards = 0.0;
          let scheduleH = 2.0;
          let xadsdkF = 0.0;
         zoomM |= 1 | parseInt(`${fastforwards}`);
         interstitialB.set(`${reminders}`, ((reminders ? 1 : 1) * interstitialB.size));
         fastforwards *= parseInt(`${xadsdkF}`) - 2;
         scheduleH -= parseFloat(`${1 / (Math.max(8, parseInt(`${scheduleH}`)))}`);
         xadsdkF /= Math.max(5, interstitialB.size);
         break;
      }
      for (let l = 0; l < 3; l++) {
         fill9 = `${1 ^ basketballplayerplaceholderW.size}`;
      }
      while ((basketballplayerplaceholderW.size ^ fill9.length) < 5 || (fill9.length ^ basketballplayerplaceholderW.size) < 5) {
         basketballplayerplaceholderW = new Map([[`${anytimew}`, fill9.length | parseInt(`${anytimew}`)]]);
         break;
      }
         anytimew *= 3 << (Math.min(3, Math.abs(zoomM)));
         zoomM ^= zoomM;
         basketballplayerplaceholderW = new Map([[`${anytimew}`, parseInt(`${anytimew}`) | fill9.length]]);
          let assist3 = String.fromCharCode(119,114,105,116,97,98,108,101,95,105,95,49,53,0);
          let combinedI = 3;
          let kickj: Map<any, any> = new Map([[String.fromCharCode(100,95,52,52,95,97,112,112,108,105,101,115,0),false ], [String.fromCharCode(122,95,52,51,95,112,114,101,116,116,121,119,114,105,116,101,114,0),true ]]);
         anytimew /= Math.max(3, 1);
         assist3 = `${kickj.size << (Math.min(Math.abs(1), 1))}`;
         combinedI %= Math.max(5, combinedI);
         kickj = new Map([[assist3, combinedI << (Math.min(Math.abs(3), 3))]]);
       let imageactionlivef = String.fromCharCode(102,95,57,57,95,115,109,97,108,108,101,115,116,0);
       let fastforwardK = String.fromCharCode(100,101,99,114,101,97,115,105,110,103,95,112,95,48,0);
       let photof: Array<any> = [683, 79];
      while ((anytimew + zoomM) == 5.95) {
         zoomM >>= Math.min(fastforwardK.length, 5);
         break;
      }
      mailY += `${parseInt(`${middle0}`) | basketballplayerplaceholderW.size}`;
   }
      mailY = "2";
       let hookZ = String.fromCharCode(116,121,112,101,99,111,100,101,95,109,95,56,56,0);
       let libavfilterw: Array<any> = [254, 977, 458];
       let refresh4: Array<any> = [471, 250, 944];
       let iconmegaphoneK = true;
      for (let j = 0; j < 1; j++) {
         refresh4 = [(String.fromCharCode(85,0) == hookZ ? (iconmegaphoneK ? 3 : 1) : hookZ.length)];
      }
         libavfilterw = [libavfilterw.length % (Math.max(hookZ.length, 2))];
          let sanso = false;
          let foundt = String.fromCharCode(117,110,105,110,116,101,114,112,114,101,116,101,100,95,105,95,54,53,0);
         libavfilterw = [((sanso ? 4 : 2) / 2)];
         sanso = 87 < foundt.length;
         foundt = `${(String.fromCharCode(100,0) == foundt ? foundt.length : foundt.length)}`;
      while (5 >= libavfilterw.length) {
          let penaltyshootnogoalT = String.fromCharCode(120,95,57,50,95,108,105,98,114,97,114,105,101,115,0);
          let debug3 = 5;
          let flipper_: Map<any, any> = new Map([[String.fromCharCode(114,95,49,95,122,101,114,111,109,118,0),String.fromCharCode(99,100,97,116,97,95,56,95,49,53,0)], [String.fromCharCode(100,95,55,56,95,99,111,118,101,114,115,0),String.fromCharCode(104,97,108,108,95,119,95,52,54,0)]]);
         libavfilterw.push(3 | debug3);
         penaltyshootnogoalT += `${flipper_.size}`;
         debug3 ^= flipper_.size;
         break;
      }
      while ((refresh4.length * 1) >= 1 && 5 >= (1 * refresh4.length)) {
         hookZ += `${refresh4.length}`;
         break;
      }
          let routery: Map<any, any> = new Map([[String.fromCharCode(117,110,114,101,102,99,111,117,110,116,95,101,95,52,55,0),false ], [String.fromCharCode(107,95,50,95,118,97,108,105,100,97,116,101,0),true ], [String.fromCharCode(121,95,54,51,95,99,97,108,99,117,97,108,116,101,0),true ]]);
         refresh4 = [libavfilterw.length / (Math.max(7, refresh4.length))];
         routery.set(`${routery.size}`, routery.size - routery.size);
         refresh4 = [(hookZ == String.fromCharCode(83,0) ? hookZ.length : libavfilterw.length)];
         libavfilterw = [hookZ.length ^ 2];
      middle0 /= Math.max(parseFloat(`${3 - mailY.length}`), 2);
   while (!referrer0 || 3 <= iconbella.length) {
      referrer0 = !referrer0;
      break;
   }
       let trashZ = true;
       let iconusers = String.fromCharCode(102,95,51,54,95,100,105,115,97,112,112,101,97,114,0);
       let bootsplashp = String.fromCharCode(103,95,55,49,95,107,105,108,108,0);
      let nativeexQ = String.fromCharCode(117,109,55,54,97,116,110,0) == iconusers;
      do {
         iconusers += `${bootsplashp.length + 2}`;
         if (nativeexQ) {
            break;
         }
      } while ((bootsplashp != String.fromCharCode(50,0) && 2 == iconusers.length) && nativeexQ);
      if (trashZ) {
         iconusers = `${iconusers.length}`;
      }
      for (let t = 0; t < 3; t++) {
         iconusers = `${(bootsplashp == String.fromCharCode(88,0) ? (trashZ ? 5 : 1) : bootsplashp.length)}`;
      }
      let signinupJ = 8052560 >= iconusers.length;
      do {
         iconusers += `${iconusers.length - 1}`;
         if (signinupJ) {
            break;
         }
      } while (signinupJ && (!iconusers.endsWith(`${bootsplashp.length}`)));
         trashZ = (((!trashZ ? bootsplashp.length : 75) / (Math.max(bootsplashp.length, 1))) >= 75);
      let plusI = trashZ ? !trashZ : trashZ;
      do {
         trashZ = !trashZ && bootsplashp.length <= 20;
         if (plusI) {
            break;
         }
      } while (plusI && (!trashZ));
         bootsplashp = "3";
          let animationse: Array<any> = [804, 903];
          let defaultfootballbgN = 1;
         bootsplashp += `${animationse.length % (Math.max(10, iconusers.length))}`;
         animationse.push(1);
         defaultfootballbgN >>= Math.min(Math.abs(defaultfootballbgN), 3);
         iconusers = `${iconusers.length | 1}`;
      resultA *= 3 - mailY.length;
   for (let t = 0; t < 2; t++) {
      middle0 -= parseFloat(`${mailY.length * 2}`);
   }
       let iconclosewhitebg1 = String.fromCharCode(108,95,51,95,112,114,111,114,101,115,100,97,116,97,0);
       let static_lwf = String.fromCharCode(118,95,49,53,95,115,97,98,101,114,0);
      let watchnowbgs = iconclosewhitebg1 == String.fromCharCode(120,56,52,49,118,50,54,103,103,116,0);
      do {
          let react7 = String.fromCharCode(97,117,116,111,99,111,109,109,105,116,95,49,95,53,56,0);
         iconclosewhitebg1 += `${static_lwf.length}`;
         react7 = `${2 * react7.length}`;
         if (watchnowbgs) {
            break;
         }
      } while ((static_lwf.length <= iconclosewhitebg1.length) && watchnowbgs);
      for (let o = 0; o < 2; o++) {
         iconclosewhitebg1 = `${static_lwf.length - 2}`;
      }
          let short_aP = String.fromCharCode(114,95,57,50,95,105,109,112,111,114,116,0);
          let verticalI = String.fromCharCode(119,95,56,57,95,115,99,97,108,101,100,0);
          let t_playerN = String.fromCharCode(104,95,48,95,114,101,99,112,0);
         iconclosewhitebg1 += "2";
         short_aP = `${(String.fromCharCode(81,0) == verticalI ? verticalI.length : short_aP.length)}`;
         t_playerN = `${verticalI.length}`;
      let downloadingQ = static_lwf.length >= 5565665;
      do {
         static_lwf = `${iconclosewhitebg1.length % 2}`;
         if (downloadingQ) {
            break;
         }
      } while (downloadingQ && (iconclosewhitebg1.length == static_lwf.length));
         static_lwf += `${3 >> (Math.min(5, static_lwf.length))}`;
      for (let k = 0; k < 1; k++) {
          let rulesH = String.fromCharCode(117,95,55,57,95,109,111,118,105,101,0);
          let sportsY = String.fromCharCode(111,95,52,95,105,110,102,111,114,109,0);
          let rankn = 3;
          let flipperr = 1;
          let imageactionliveh = String.fromCharCode(118,111,114,100,105,112,108,111,109,95,107,95,50,56,0);
         static_lwf += `${flipperr}`;
         rulesH += `${(String.fromCharCode(111,0) == imageactionliveh ? imageactionliveh.length : sportsY.length)}`;
         sportsY += "2";
         rankn &= 1 | rankn;
         flipperr -= sportsY.length - rulesH.length;
      }
      iconbella = "2";
   for (let q = 0; q < 3; q++) {
      resultA += 2 - parseInt(`${middle0}`);
   }
      mailY = `${parseInt(`${middle0}`)}`;
      slider0 <<= Math.min(Math.abs(3 % (Math.max(10, slider0))), 3);
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
       let googleJ = 0.0;
    let eyeopenP: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,114,112,111,108,95,116,95,53,48,0),String.fromCharCode(114,111,103,114,97,109,95,54,95,55,50,0)], [String.fromCharCode(114,101,109,111,116,101,95,105,95,53,48,0),String.fromCharCode(108,108,118,105,100,100,115,112,101,110,99,95,97,95,49,57,0)], [String.fromCharCode(98,114,105,100,103,105,110,103,95,108,95,56,49,0),String.fromCharCode(111,112,101,114,97,116,105,111,110,95,120,95,55,48,0)]]);
    let homeplayerV: Map<any, any> = new Map([[String.fromCharCode(115,105,103,110,108,101,95,54,95,52,49,0),546], [String.fromCharCode(110,101,105,103,104,98,111,114,115,95,110,95,57,55,0),331]]);
    let distT = 1;
    let dycreatorY = 2.0;
    let guideL: Map<any, any> = new Map([[String.fromCharCode(97,116,116,114,105,98,95,52,95,51,48,0),908], [String.fromCharCode(100,95,50,48,95,108,111,97,116,0),147], [String.fromCharCode(114,101,100,117,99,116,105,111,110,95,97,95,57,49,0),987]]);
    let iconstarR = String.fromCharCode(102,111,114,103,101,116,95,104,95,50,55,0);
    let binddatasZ: Map<any, any> = new Map([[String.fromCharCode(116,114,101,101,114,101,97,100,101,114,95,109,95,51,49,0),824], [String.fromCharCode(102,95,49,49,95,97,99,99,114,117,101,0),53], [String.fromCharCode(102,95,52,56,95,108,111,110,103,101,114,0),116]]);
    let dragw: Map<any, any> = new Map([[String.fromCharCode(112,114,101,115,101,110,116,101,114,95,115,95,57,51,0),false ], [String.fromCharCode(97,95,57,51,95,99,105,114,99,108,101,100,0),false ], [String.fromCharCode(114,101,99,111,110,105,110,116,101,114,95,122,95,50,55,0),true ]]);
    let half4 = 0;
   if (4 <= (distT | binddatasZ.size) || 3 <= (binddatasZ.size | 4)) {
      distT |= guideL.size;
   }
       let previewR = 0.0;
       let mapbuffern = false;
       let zhuboq = String.fromCharCode(115,112,108,105,116,95,116,95,50,53,0);
          let holderE = 0.0;
          let handler4 = String.fromCharCode(113,95,52,53,95,101,120,112,114,0);
         mapbuffern = 35.83 > previewR;
         holderE /= Math.max(4, parseFloat(`${handler4.length}`));
         handler4 += `${parseInt(`${holderE}`) * 3}`;
          let unreade = String.fromCharCode(120,121,122,116,97,98,108,101,115,95,49,95,56,56,0);
          let descI = 0.0;
          let iconmoreH = 5.0;
         previewR += 1;
         unreade += "1";
         descI /= Math.max(1, parseInt(`${iconmoreH}`));
      let homeplayeri = previewR <= 6380244.0;
      do {
          let tumbnailw = 1;
          let usernamep = 4;
          let vignetted = 4.0;
         previewR *= (1 % (Math.max(1, (mapbuffern ? 2 : 2))));
         tumbnailw |= parseInt(`${vignetted}`);
         usernamep += usernamep / (Math.max(parseInt(`${vignetted}`), 2));
         if (homeplayeri) {
            break;
         }
      } while ((1 == (2 * zhuboq.length)) && homeplayeri);
          let emojiheartY: Array<any> = [975, 372, 3];
         zhuboq = `${((mapbuffern ? 1 : 3) & parseInt(`${previewR}`))}`;
         emojiheartY.push(emojiheartY.length);
         previewR /= Math.max((parseInt(`${previewR}`) & (mapbuffern ? 4 : 2)), 1);
         mapbuffern = 77.72 == previewR && mapbuffern;
         zhuboq += `${((mapbuffern ? 3 : 2) - parseInt(`${previewR}`))}`;
      if (previewR > 4.74) {
          let pingp: Map<any, any> = new Map([[String.fromCharCode(118,99,116,101,115,116,95,103,95,57,57,0),false ], [String.fromCharCode(110,95,54,57,95,101,110,99,108,111,115,105,110,103,0),false ]]);
          let imagesi: Array<any> = [223, 883, 327];
         previewR -= 3 >> (Math.min(3, Math.abs(pingp.size)));
         pingp.set(`${imagesi.length}`, 3 << (Math.min(3, imagesi.length)));
      }
       let libjsiv = 2.0;
      homeplayerV = new Map([[`${dragw.size}`, 3]]);
   while (2.27 == googleJ) {
      googleJ *= distT + 1;
      break;
   }
   if (5 >= (4 % (Math.max(8, eyeopenP.size))) || 3 >= (4 - eyeopenP.size)) {
      eyeopenP = new Map([[`${eyeopenP.size}`, eyeopenP.size | parseInt(`${googleJ}`)]]);
   }
       let largebrightnesst = String.fromCharCode(115,95,52,48,95,101,116,119,111,114,107,0);
       let albumf = 2.0;
       let runtimeschedulerz: Map<any, any> = new Map([[String.fromCharCode(107,95,50,51,95,99,102,102,116,98,0),658], [String.fromCharCode(100,105,100,95,105,95,50,57,0),685], [String.fromCharCode(109,95,52,53,95,112,117,108,108,113,117,111,116,101,0),901]]);
      if (4 <= largebrightnesst.length) {
          let rncore3 = 0.0;
         albumf *= parseFloat(`${runtimeschedulerz.size ^ 3}`);
         rncore3 -= parseInt(`${rncore3}`);
      }
         albumf /= Math.max(2, parseFloat(`${2 ^ parseInt(`${albumf}`)}`));
       let fillB = String.fromCharCode(110,114,101,102,95,122,95,55,0);
       let chatbotphotoB = String.fromCharCode(113,95,56,53,95,110,111,116,105,102,105,99,97,116,105,111,110,0);
         runtimeschedulerz.set(largebrightnesst, 1);
      let libfbjnif = runtimeschedulerz.size >= 8841265;
      do {
         runtimeschedulerz = new Map([[`${albumf}`, fillB.length]]);
         if (libfbjnif) {
            break;
         }
      } while (((fillB.length ^ runtimeschedulerz.size) >= 3 || (3 ^ runtimeschedulerz.size) >= 3) && libfbjnif);
         runtimeschedulerz = new Map([[`${albumf}`, (chatbotphotoB == String.fromCharCode(72,0) ? chatbotphotoB.length : parseInt(`${albumf}`))]]);
       let stepQ = 3.0;
       let delegate_jN = 1.0;
         stepQ += parseFloat(`${parseInt(`${stepQ}`)}`);
      if (4 >= (chatbotphotoB.length ^ 3) && 5.90 >= (delegate_jN * parseFloat(`${chatbotphotoB.length}`))) {
          let show3 = String.fromCharCode(107,95,53,53,95,118,105,109,101,111,0);
          let j_view7 = String.fromCharCode(117,95,56,48,95,102,105,114,101,98,97,115,101,0);
          let panglec: Map<any, any> = new Map([[String.fromCharCode(113,95,51,95,110,105,100,110,105,115,116,0),true ], [String.fromCharCode(100,107,101,121,95,122,95,54,56,0),false ]]);
          let videojs5 = true;
         delegate_jN += parseFloat(`${1 & chatbotphotoB.length}`);
         show3 += `${((videojs5 ? 3 : 5) % 1)}`;
         j_view7 = `${panglec.size}`;
         panglec = new Map([[show3, show3.length ^ j_view7.length]]);
         videojs5 = (8 <= ((!videojs5 ? 8 : show3.length) & show3.length));
      }
      iconstarR += `${eyeopenP.size * iconstarR.length}`;
   for (let w = 0; w < 2; w++) {
      dragw = new Map([[`${googleJ}`, parseInt(`${googleJ}`) & distT]]);
   }

    const banner = await wawaFlagStations.getEventBanner();

       let backgroundX = 4.0;
       let nbatrophyD = String.fromCharCode(122,95,52,49,95,105,100,101,110,116,105,116,105,121,0);
      for (let p = 0; p < 1; p++) {
          let analyticsM = 5.0;
          let footballfieldB = String.fromCharCode(97,95,53,95,114,101,109,105,120,105,110,103,0);
         backgroundX *= parseFloat(`${footballfieldB.length + 1}`);
         analyticsM /= Math.max(1, 2);
         footballfieldB += `${parseInt(`${analyticsM}`)}`;
      }
      while (nbatrophyD.length > 2) {
         nbatrophyD += `${parseInt(`${backgroundX}`)}`;
         break;
      }
          let redscoreballd = 2.0;
          let schedulez = String.fromCharCode(117,110,99,97,99,104,101,100,95,121,95,51,54,0);
          let cornerkick4: Array<any> = [761, 397, 466];
         backgroundX *= parseFloat(`${parseInt(`${redscoreballd}`) << (Math.min(Math.abs(parseInt(`${backgroundX}`)), 1))}`);
         redscoreballd -= parseFloat(`${schedulez.length}`);
         schedulez = `${cornerkick4.length}`;
         cornerkick4 = [1 >> (Math.min(4, cornerkick4.length))];
         backgroundX += (parseFloat(`${String.fromCharCode(117,0) == nbatrophyD ? nbatrophyD.length : parseInt(`${backgroundX}`)}`));
         backgroundX -= parseFloat(`${nbatrophyD.length}`);
       let libruntimeexecutorG = 3.0;
      homeplayerV = new Map([[`${guideL.size}`, guideL.size >> (Math.min(3, Math.abs(parseInt(`${backgroundX}`))))]]);
      iconstarR = `${parseInt(`${googleJ}`)}`;
   for (let j = 0; j < 3; j++) {
      dragw = new Map([[`${homeplayerV.size}`, dragw.size]]);
   }
   let fullscreenminB = 7160396 <= guideL.size;
   do {
      guideL.set(`${guideL.size}`, 2);
      if (fullscreenminB) {
         break;
      }
   } while (fullscreenminB && (guideL.get(`${binddatasZ.size}`) != null));
   while (distT > 4) {
      homeplayerV = new Map([[`${dragw.size}`, iconstarR.length]]);
      break;
   }
      iconstarR = "3";

    if (banner) {

      guideL = new Map([[`${dragw.size}`, binddatasZ.size - 1]]);
       let friendsC = String.fromCharCode(114,103,98,116,111,121,118,95,99,95,52,50,0);
      let fullscreenminw = friendsC.length <= 6700639;
      do {
         friendsC += `${friendsC.length}`;
         if (fullscreenminw) {
            break;
         }
      } while ((friendsC == friendsC) && fullscreenminw);
      let ballz = String.fromCharCode(112,56,57,122,114,98,121,110,0) == friendsC;
      do {
         friendsC = `${friendsC.length >> (Math.min(friendsC.length, 5))}`;
         if (ballz) {
            break;
         }
      } while ((friendsC == String.fromCharCode(56,0) || 4 <= friendsC.length) && ballz);
         friendsC += `${friendsC.length + friendsC.length}`;
      googleJ += iconstarR.length << (Math.min(Math.abs(2), 3));
   if (eyeopenP.get(`${googleJ}`) != null) {
      eyeopenP.set(`${eyeopenP.size}`, eyeopenP.size);
   }
   for (let j = 0; j < 2; j++) {
      distT *= 1 - distT;
   }
      dycreatorY /= Math.max(3, parseFloat(`${distT}`));
      distT -= dragw.size % 1;
      setBannerAd(banner);
    } else {

   if (Array.from(homeplayerV.values()).includes(guideL.size)) {
      homeplayerV = new Map([[`${binddatasZ.size}`, binddatasZ.size]]);
   }
   if ((iconstarR.length / (Math.max(2, homeplayerV.size))) < 5 && 3 < (homeplayerV.size / 5)) {
      homeplayerV.set(`${binddatasZ.size}`, homeplayerV.size >> (Math.min(Math.abs(3), 5)));
   }
      guideL = new Map([[`${dragw.size}`, binddatasZ.size]]);
   let pagea = iconstarR.length <= 8696055;
   do {
      iconstarR += `${binddatasZ.size + parseInt(`${googleJ}`)}`;
      if (pagea) {
         break;
      }
   } while ((iconstarR.endsWith(`${googleJ}`)) && pagea);
   if ((eyeopenP.size + iconstarR.length) < 5 && 2 < (5 + iconstarR.length)) {
      iconstarR += `${iconstarR.length}`;
   }
      homeplayerV.set(iconstarR, iconstarR.length);
      setBannerAd(undefined);
    }
  };

  const shouldShowAds = async () => {
       let package_h4L = String.fromCharCode(115,95,56,48,95,109,97,112,0);
    let q_imageC = true;
    let inouttargetyellow1: Map<any, any> = new Map([[String.fromCharCode(99,95,49,56,95,97,108,97,114,109,0),String.fromCharCode(98,97,110,100,119,105,100,116,104,95,117,95,49,48,48,0)], [String.fromCharCode(118,95,54,57,95,112,101,114,99,101,112,116,117,97,108,0),String.fromCharCode(108,95,49,48,95,115,104,117,116,116,105,110,103,0)]]);
    let tumbnailL = 5.0;
    let leftC = false;
    let changeI = 1;
    let fileZ: Map<any, any> = new Map([[String.fromCharCode(101,110,116,114,111,112,121,109,111,100,101,100,97,116,97,95,49,95,56,53,0),true ], [String.fromCharCode(107,95,49,95,104,100,115,112,0),false ], [String.fromCharCode(104,95,53,49,95,112,104,97,115,101,0),false ]]);
    let elementsi = String.fromCharCode(112,95,49,51,95,99,111,110,115,116,114,117,99,116,111,114,0);
    let starV: Map<any, any> = new Map([[String.fromCharCode(107,95,55,49,95,116,111,117,112,112,101,114,0),808], [String.fromCharCode(104,105,103,104,108,105,103,104,116,105,110,103,95,116,95,50,56,0),355], [String.fromCharCode(99,104,97,110,103,101,115,101,116,95,101,95,54,53,0),890]]);
    let elementsN = 2.0;
    let libsgcore4 = 0.0;
    let actionsn = String.fromCharCode(99,115,104,97,114,112,95,54,95,56,49,0);
    let basketballtrophym = 4.0;
    let agreementY = String.fromCharCode(102,111,114,109,97,116,115,95,53,95,53,57,0);
    let whiteanimationlive5 = 2;
   for (let c = 0; c < 3; c++) {
       let currentK = String.fromCharCode(119,95,49,48,48,95,114,101,115,105,122,101,0);
          let trophyB = 2;
          let update_k69 = false;
          let predictionarrowK = 5.0;
         currentK += `${parseInt(`${predictionarrowK}`) << (Math.min(currentK.length, 2))}`;
         trophyB ^= 1 - trophyB;
         update_k69 = 49 < trophyB;
         predictionarrowK /= Math.max(3, 2);
          let notification7: Array<any> = [String.fromCharCode(99,111,110,110,101,99,116,95,105,95,52,51,0), String.fromCharCode(113,95,57,57,95,104,117,103,103,105,110,103,0), String.fromCharCode(115,105,98,108,105,110,103,115,95,98,95,52,57,0)];
          let package_dV = String.fromCharCode(110,95,55,56,0);
         currentK += `${2 >> (Math.min(1, package_dV.length))}`;
         notification7.push(notification7.length + notification7.length);
         package_dV = `${notification7.length}`;
       let encrypth = String.fromCharCode(109,95,52,51,95,114,114,111,114,0);
       let viewerB = String.fromCharCode(115,117,105,116,101,115,95,111,95,53,57,0);
      inouttargetyellow1.set(elementsi, elementsi.length);
   }
   let predictionbuttonu = 6979891 <= inouttargetyellow1.size;
   do {
      inouttargetyellow1 = new Map([[`${tumbnailL}`, (String.fromCharCode(101,0) == elementsi ? parseInt(`${tumbnailL}`) : elementsi.length)]]);
      if (predictionbuttonu) {
         break;
      }
   } while (predictionbuttonu && ((elementsi.length & inouttargetyellow1.size) == 4 && (4 & elementsi.length) == 2));
   while ((4 - starV.size) == 5 && 4 == (fileZ.size - starV.size)) {
      starV = new Map([[`${fileZ.size}`, fileZ.size % 1]]);
      break;
   }
      elementsi += `${(changeI - (leftC ? 5 : 4))}`;
   while ((elementsN / 2) <= 2.8) {
      tumbnailL -= parseInt(`${elementsN}`);
      break;
   }
   for (let j = 0; j < 2; j++) {
       let commenti = String.fromCharCode(120,95,51,57,95,114,101,110,100,105,116,105,111,110,115,0);
       let chatbotphotoo = 3;
       let appsA = 3;
       let footballtrophyh = 4.0;
       let button7: Map<any, any> = new Map([[String.fromCharCode(102,108,105,112,95,119,95,53,52,0),String.fromCharCode(99,111,109,112,108,101,120,95,115,95,54,57,0)], [String.fromCharCode(108,111,99,95,100,95,57,51,0),String.fromCharCode(107,101,114,110,101,114,95,55,95,54,57,0)], [String.fromCharCode(104,99,104,97,99,104,97,95,100,95,57,51,0),String.fromCharCode(115,105,116,101,109,97,112,95,49,95,57,57,0)]]);
      let icontransferclubK = button7.size >= 7082148;
      do {
          let reactJ = String.fromCharCode(109,111,100,101,108,95,116,95,52,53,0);
          let defaultfootballbgt = 3.0;
          let libjsik: Map<any, any> = new Map([[String.fromCharCode(101,95,56,48,95,118,109,115,108,0),702], [String.fromCharCode(114,101,102,112,108,97,110,101,95,57,95,55,52,0),609]]);
          let buffers = 1.0;
         button7.set(reactJ, 1 | libjsik.size);
         reactJ += "3";
         defaultfootballbgt += parseInt(`${defaultfootballbgt}`) / (Math.max(parseInt(`${buffers}`), 7));
         libjsik = new Map([[`${defaultfootballbgt}`, parseInt(`${defaultfootballbgt}`)]]);
         buffers *= parseFloat(`${parseInt(`${defaultfootballbgt}`)}`);
         if (icontransferclubK) {
            break;
         }
      } while (icontransferclubK && (4 <= (button7.size + 3)));
         commenti = `${commenti.length}`;
       let livenodatabgimgv = false;
       let backwhiteM = false;
      for (let w = 0; w < 2; w++) {
         button7 = new Map([[`${appsA}`, appsA << (Math.min(4, Math.abs(2)))]]);
      }
         appsA <<= Math.min(2, Math.abs(parseInt(`${footballtrophyh}`) >> (Math.min(3, Math.abs(2)))));
          let attributedstringY = String.fromCharCode(105,110,116,101,110,116,105,111,110,95,110,95,49,0);
         button7.set(`${footballtrophyh}`, 2 | parseInt(`${footballtrophyh}`));
         attributedstringY = `${attributedstringY.length * attributedstringY.length}`;
      if (3 > (button7.size * commenti.length) && (commenti.length * button7.size) > 3) {
         commenti = "2";
      }
         appsA >>= Math.min(4, commenti.length);
       let subtext2 = String.fromCharCode(113,95,51,48,95,100,101,102,101,114,114,101,114,0);
       let playn = String.fromCharCode(102,97,100,101,100,95,120,95,56,54,0);
      while ((button7.size ^ 2) >= 1 || 3 >= (button7.size ^ 2)) {
          let humidityC = 3.0;
          let rewardvideoT = 5;
          let yellowscoreballr = 4.0;
         chatbotphotoo |= parseInt(`${yellowscoreballr}`);
         humidityC /= Math.max(3, parseInt(`${humidityC}`));
         rewardvideoT /= Math.max(parseInt(`${humidityC}`), 4);
         yellowscoreballr /= Math.max(2, parseFloat(`${rewardvideoT}`));
         break;
      }
         playn += `${3 & commenti.length}`;
      let build_ = 5293616 <= subtext2.length;
      do {
          let inactiveX = String.fromCharCode(113,95,55,52,95,112,114,105,110,116,118,97,108,0);
          let delegate_gP = String.fromCharCode(118,109,97,102,109,111,116,105,111,110,95,98,95,52,55,0);
         subtext2 = "1";
         inactiveX += `${(String.fromCharCode(100,0) == inactiveX ? delegate_gP.length : inactiveX.length)}`;
         delegate_gP += "2";
         if (build_) {
            break;
         }
      } while (build_ && (2.67 == (2.71 - footballtrophyh)));
         appsA += subtext2.length;
         footballtrophyh *= 2;
      for (let e = 0; e < 1; e++) {
         commenti += `${3 - appsA}`;
      }
      leftC = !q_imageC;
   }
       let libpangleflippedt = false;
         libpangleflippedt = !libpangleflippedt;
         libpangleflippedt = (libpangleflippedt ? libpangleflippedt : libpangleflippedt);
      let const_bh = libpangleflippedt ? !libpangleflippedt : libpangleflippedt;
      do {
          let streamingc = 4;
          let redscoreballb = String.fromCharCode(115,116,114,102,117,110,99,95,106,95,55,54,0);
          let areag = String.fromCharCode(99,111,112,121,104,95,116,95,49,53,0);
          let redscoreballQ = String.fromCharCode(109,95,50,52,95,114,105,110,103,116,111,110,101,115,0);
          let launchU = String.fromCharCode(121,95,49,48,95,103,101,110,102,105,108,101,115,0);
         libpangleflippedt = 18 > streamingc;
         streamingc += launchU.length | 2;
         redscoreballb = `${3 / (Math.max(7, areag.length))}`;
         areag = `${1 + areag.length}`;
         redscoreballQ = `${redscoreballb.length}`;
         launchU += `${3 | areag.length}`;
         if (const_bh) {
            break;
         }
      } while ((!libpangleflippedt) && const_bh);
      tumbnailL -= ((leftC ? 4 : 3) / 2);
   for (let a = 0; a < 2; a++) {
      elementsi += `${3 - parseInt(`${libsgcore4}`)}`;
   }
       let defaultbasketballbg4 = 0.0;
       let toponI = 4;
       let greyarrowupA = 0.0;
      let iconlogout3 = defaultbasketballbg4 <= 8655040.0;
      do {
         defaultbasketballbg4 -= parseFloat(`${toponI}`);
         if (iconlogout3) {
            break;
         }
      } while (iconlogout3 && (3.94 > (2.55 * defaultbasketballbg4) && 1.48 > (greyarrowupA * 2.55)));
       let libavformatF = String.fromCharCode(117,110,114,101,109,111,118,97,98,108,101,95,102,95,52,48,0);
          let shootyesgoalA = String.fromCharCode(106,95,49,55,95,114,101,99,116,97,110,103,117,108,97,114,0);
         libavformatF += "3";
         shootyesgoalA += `${1 << (Math.min(2, shootyesgoalA.length))}`;
       let whitebellU: Map<any, any> = new Map([[String.fromCharCode(117,95,53,51,95,115,115,121,98,0),String.fromCharCode(104,111,117,114,115,95,103,95,56,51,0)], [String.fromCharCode(98,97,110,95,102,95,51,52,0),String.fromCharCode(101,95,57,48,95,105,109,112,108,101,109,101,110,116,97,116,105,111,110,0)]]);
       let resultf: Map<any, any> = new Map([[String.fromCharCode(100,105,114,101,99,116,111,114,121,95,112,95,50,50,0),615], [String.fromCharCode(105,109,112,117,108,115,101,95,105,95,51,57,0),778]]);
          let airbnbstarselectedY = 2;
          let forward0: Map<any, any> = new Map([[String.fromCharCode(101,95,54,48,95,110,111,100,101,0),true ], [String.fromCharCode(117,95,49,95,122,109,113,115,104,101,108,108,0),false ]]);
          let gpayW = String.fromCharCode(112,101,105,114,115,95,119,95,54,51,0);
         toponI |= toponI >> (Math.min(Math.abs(2), 2));
         airbnbstarselectedY ^= gpayW.length;
         forward0 = new Map([[`${forward0.size}`, gpayW.length * 2]]);
         toponI *= toponI / 3;
      if ((greyarrowupA + 2.66) >= 2.14 && 3.38 >= (greyarrowupA + 2.66)) {
          let iconstar9 = String.fromCharCode(114,95,50,56,95,110,116,104,0);
          let orangetick9 = String.fromCharCode(119,104,101,116,104,101,114,95,110,95,54,51,0);
          let whistleorangey = 0;
          let predictionbuttonV = String.fromCharCode(111,95,51,50,95,101,97,115,101,0);
         toponI <<= Math.min(Math.abs(toponI - 1), 3);
         iconstar9 = `${3 + predictionbuttonV.length}`;
         orangetick9 = `${orangetick9.length}`;
         whistleorangey += orangetick9.length;
         predictionbuttonV += `${whistleorangey << (Math.min(Math.abs(3), 3))}`;
      }
         toponI *= libavformatF.length;
         greyarrowupA /= Math.max(parseFloat(`${resultf.size >> (Math.min(Math.abs(2), 2))}`), 5);
      leftC = 53.54 < basketballtrophym;
       let c_animationt: Map<any, any> = new Map([[String.fromCharCode(100,95,56,51,95,103,100,105,103,114,97,98,0),String.fromCharCode(117,95,57,56,95,102,111,108,100,0)], [String.fromCharCode(109,111,114,112,104,101,100,95,117,95,53,53,0),String.fromCharCode(97,95,52,50,95,97,101,118,97,108,0)]]);
       let sortQ: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,103,114,97,116,101,95,55,95,54,56,0),394], [String.fromCharCode(109,97,116,99,104,101,95,57,95,54,52,0),452]]);
          let predictionlossp = String.fromCharCode(113,117,97,100,95,51,95,54,56,0);
          let singaporek: Array<any> = [674, 282];
         c_animationt.set(`${sortQ.size}`, c_animationt.size - 3);
         predictionlossp += `${predictionlossp.length % 3}`;
         singaporek = [2];
         c_animationt = new Map([[`${sortQ.size}`, 2 % (Math.max(3, sortQ.size))]]);
         c_animationt = new Map([[`${c_animationt.size}`, sortQ.size]]);
          let orangeuparrowN = String.fromCharCode(103,95,54,56,95,102,112,117,116,115,0);
          let fullt: Map<any, any> = new Map([[String.fromCharCode(113,95,53,95,109,111,116,105,111,110,115,101,97,114,99,104,0),231], [String.fromCharCode(108,111,99,107,101,100,95,54,95,51,55,0),987]]);
          let closeM = 1.0;
         sortQ = new Map([[`${sortQ.size}`, sortQ.size ^ orangeuparrowN.length]]);
         orangeuparrowN += "3";
         fullt.set(`${closeM}`, fullt.size - parseInt(`${closeM}`));
      for (let c = 0; c < 3; c++) {
         sortQ = new Map([[`${sortQ.size}`, c_animationt.size]]);
      }
      if (!Array.from(sortQ.keys()).includes(`${c_animationt.size}`)) {
         sortQ.set(`${c_animationt.size}`, c_animationt.size + sortQ.size);
      }
      basketballtrophym += parseFloat(`${parseInt(`${elementsN}`) & changeI}`);
   let catagoryz = 5981939 <= inouttargetyellow1.size;
   do {
      inouttargetyellow1 = new Map([[`${basketballtrophym}`, (parseInt(`${basketballtrophym}`) >> (Math.min(1, Math.abs((q_imageC ? 3 : 5)))))]]);
      if (catagoryz) {
         break;
      }
   } while ((inouttargetyellow1.get(`${tumbnailL}`) == null) && catagoryz);
   let qaagz = actionsn == String.fromCharCode(103,102,51,0);
   do {
      actionsn += `${elementsi.length & package_h4L.length}`;
      if (qaagz) {
         break;
      }
   } while (((actionsn.length - 4) <= 4) && qaagz);
   for (let m = 0; m < 2; m++) {
      elementsi += `${parseInt(`${elementsN}`)}`;
   }
      q_imageC = fileZ.size <= 61 || !leftC;
      elementsi = `${2 - changeI}`;
      package_h4L = `${changeI}`;
      actionsn += `${fileZ.size % (Math.max(1, actionsn.length))}`;
   let videojsI = elementsi.length <= 5600145;
   do {
       let defaultplayerimgX = 2.0;
       let commonD = String.fromCharCode(99,109,112,97,100,100,114,95,53,95,48,0);
         defaultplayerimgX *= (commonD == String.fromCharCode(99,0) ? commonD.length : parseInt(`${defaultplayerimgX}`));
      if ((5 >> (Math.min(4, commonD.length))) < 5) {
          let smallv = 5.0;
          let dialogH: Array<any> = [787, 954];
         defaultplayerimgX *= parseInt(`${defaultplayerimgX}`);
         smallv *= parseFloat(`${3 - parseInt(`${smallv}`)}`);
         dialogH.push(dialogH.length);
      }
         defaultplayerimgX *= parseInt(`${defaultplayerimgX}`);
         commonD = `${commonD.length - parseInt(`${defaultplayerimgX}`)}`;
      if (commonD.startsWith(`${defaultplayerimgX}`)) {
         defaultplayerimgX += 1;
      }
         commonD += `${(String.fromCharCode(73,0) == commonD ? parseInt(`${defaultplayerimgX}`) : commonD.length)}`;
      elementsi = `${3 & package_h4L.length}`;
      if (videojsI) {
         break;
      }
   } while (videojsI && (4 == elementsi.length));
   if (Array.from(inouttargetyellow1.keys()).includes(`${changeI}`)) {
       let emojiz = 0.0;
       let home7: Map<any, any> = new Map([[String.fromCharCode(107,95,50,56,95,119,105,114,101,102,114,97,109,101,0),665], [String.fromCharCode(98,117,102,115,95,101,95,56,50,0),342], [String.fromCharCode(122,95,54,48,95,114,111,111,116,115,0),808]]);
       let bridger = String.fromCharCode(115,112,97,116,105,97,108,95,50,95,56,53,0);
       let downloaderk = String.fromCharCode(105,95,49,51,95,112,103,109,120,0);
          let sportsW = 3;
          let libaneB = 3.0;
          let xadsdk1 = String.fromCharCode(118,95,49,95,100,101,108,105,118,101,114,121,0);
         downloaderk += `${sportsW}`;
         sportsW >>= Math.min(1, Math.abs(2 & xadsdk1.length));
         libaneB -= parseFloat(`${parseInt(`${libaneB}`)}`);
         xadsdk1 = `${2 | xadsdk1.length}`;
      if (bridger.length > downloaderk.length) {
         downloaderk = `${3 >> (Math.min(2, downloaderk.length))}`;
      }
          let e_titlew: Array<any> = [490, 541];
          let iconsettingd = String.fromCharCode(111,108,100,101,115,116,95,107,95,57,52,0);
         emojiz /= Math.max(4, parseFloat(`${e_titlew.length}`));
         e_titlew = [3 % (Math.max(1, iconsettingd.length))];
         iconsettingd = `${iconsettingd.length % 3}`;
       let pushS: Map<any, any> = new Map([[String.fromCharCode(121,95,51,56,95,108,105,118,101,0),557], [String.fromCharCode(103,95,51,51,95,99,97,110,116,111,112,101,110,0),168], [String.fromCharCode(104,105,103,104,101,114,95,107,95,57,57,0),626]]);
       let iconadslinkU: Map<any, any> = new Map([[String.fromCharCode(108,112,99,101,110,118,95,100,95,56,48,0),791], [String.fromCharCode(97,100,100,114,105,110,102,111,95,108,95,50,56,0),574], [String.fromCharCode(114,101,99,105,112,114,111,99,97,108,95,56,95,52,55,0),952]]);
          let z_animationo = 5.0;
          let flyerY = 4.0;
          let profileactiveh = String.fromCharCode(99,111,110,116,105,103,117,111,117,115,95,108,95,55,49,0);
         iconadslinkU.set(`${emojiz}`, home7.size + 1);
         z_animationo *= parseInt(`${z_animationo}`);
         flyerY -= parseInt(`${z_animationo}`);
         profileactiveh = "2";
      let iconbellactivey = pushS.size <= 9881124;
      do {
          let changeN = 2;
          let baiduadsH = String.fromCharCode(117,95,57,57,95,111,112,99,111,100,101,115,0);
          let filled8: Array<any> = [108, 310, 318];
          let floatingf = 4.0;
         pushS = new Map([[`${changeN}`, 3 / (Math.max(changeN, 1))]]);
         baiduadsH = `${1 * filled8.length}`;
         filled8 = [3 % (Math.max(1, parseInt(`${floatingf}`)))];
         floatingf += baiduadsH.length;
         if (iconbellactivey) {
            break;
         }
      } while ((5 == (pushS.size % 5)) && iconbellactivey);
         bridger = `${pushS.size + home7.size}`;
          let untickf: Array<any> = [275, 92, 629];
         bridger = `${untickf.length ^ 1}`;
      for (let n = 0; n < 2; n++) {
          let privatechatbgo: Array<any> = [String.fromCharCode(99,97,116,99,104,97,98,108,101,95,112,95,52,55,0), String.fromCharCode(108,95,56,95,111,109,112,114,101,115,115,111,114,0)];
          let analyticsT = 3;
          let confirmationN = String.fromCharCode(99,111,112,121,102,100,95,120,95,53,53,0);
          let mapbufferE = 0;
          let moduleQ = String.fromCharCode(102,116,118,100,111,99,95,122,95,49,57,0);
         iconadslinkU = new Map([[`${pushS.size}`, parseInt(`${emojiz}`) << (Math.min(Math.abs(1), 5))]]);
         privatechatbgo = [privatechatbgo.length];
         analyticsT >>= Math.min(2, Math.abs(2));
         confirmationN = `${confirmationN.length >> (Math.min(Math.abs(2), 1))}`;
         mapbufferE /= Math.max(analyticsT % (Math.max(3, privatechatbgo.length)), 3);
         moduleQ = `${3 >> (Math.min(4, Math.abs(analyticsT)))}`;
      }
         home7 = new Map([[`${home7.size}`, home7.size + parseInt(`${emojiz}`)]]);
         iconadslinkU.set(`${emojiz}`, downloaderk.length);
      while (4 < (2 >> (Math.min(4, Math.abs(iconadslinkU.size)))) || (iconadslinkU.size >> (Math.min(downloaderk.length, 2))) < 2) {
          let update_oU = String.fromCharCode(115,109,112,116,101,104,100,98,97,114,115,95,115,95,50,0);
          let time_g6V = String.fromCharCode(113,95,55,53,95,118,101,114,115,105,111,110,103,101,110,101,114,97,116,101,0);
          let pingZ = 0.0;
         iconadslinkU = new Map([[time_g6V, time_g6V.length]]);
         update_oU += `${parseInt(`${pingZ}`) - 1}`;
         pingZ += parseInt(`${pingZ}`);
         break;
      }
      changeI >>= Math.min(2, Math.abs(3));
   }
      inouttargetyellow1.set(`${fileZ.size}`, fileZ.size);
      elementsN += parseInt(`${tumbnailL}`) % 3;
       let scrollviewb = String.fromCharCode(101,95,52,55,95,100,111,110,110,97,0);
       let libreactnativeblobq = 2.0;
      if (3 <= (scrollviewb.length % 1) || (parseInt(`${libreactnativeblobq}`) - scrollviewb.length) <= 1) {
          let dangerb: Array<any> = [String.fromCharCode(102,105,110,97,108,95,52,95,50,54,0), String.fromCharCode(99,116,114,95,52,95,56,54,0)];
          let privatechatbg4 = 0.0;
          let shielddoner = String.fromCharCode(111,95,50,54,95,103,97,109,117,116,0);
          let launcherH = String.fromCharCode(107,95,49,50,95,105,101,101,101,0);
          let qaagK = true;
         scrollviewb = "1";
         dangerb.push(dangerb.length);
         privatechatbg4 -= 2;
         shielddoner = `${parseInt(`${privatechatbg4}`) << (Math.min(1, Math.abs(3)))}`;
         launcherH = `${dangerb.length * 1}`;
         qaagK = 10.52 < privatechatbg4;
      }
      let areaQ = 5062217.0 >= libreactnativeblobq;
      do {
          let rewardvideol = String.fromCharCode(100,101,97,99,116,105,118,97,116,101,100,95,100,95,54,50,0);
         libreactnativeblobq += rewardvideol.length - 1;
         if (areaQ) {
            break;
         }
      } while (areaQ && (scrollviewb.length < 5));
       let brightnessQ: Array<any> = [692, 677, 32];
       let castt: Array<any> = [160, 584];
      let searchbarU = brightnessQ.length >= 7991065;
      do {
          let episoded = 2.0;
         brightnessQ.push(brightnessQ.length & 3);
         episoded -= parseInt(`${episoded}`);
         if (searchbarU) {
            break;
         }
      } while (searchbarU && (castt.length == 2));
          let descj = 3.0;
         libreactnativeblobq -= 2 >> (Math.min(2, Math.abs(parseInt(`${libreactnativeblobq}`))));
         descj *= parseInt(`${descj}`);
      for (let x = 0; x < 3; x++) {
         libreactnativeblobq -= brightnessQ.length;
      }
      fileZ = new Map([[`${fileZ.size}`, fileZ.size]]);
      libsgcore4 += 1;
   if (3.13 < elementsN) {
      elementsN /= Math.max(3, (package_h4L == String.fromCharCode(111,0) ? package_h4L.length : parseInt(`${elementsN}`)));
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
       let mbsplashG = String.fromCharCode(117,95,50,56,95,120,121,122,116,97,98,108,101,115,0);
    let pangleC = 3;
    let register_ri: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,114,112,95,114,95,52,57,0),917], [String.fromCharCode(101,95,51,55,95,109,114,122,0),8]]);
    let taiwanE = String.fromCharCode(115,95,54,54,95,98,97,99,107,105,110,103,0);
    let iconarrowrightorangeL = 0.0;
    let f_managerA = String.fromCharCode(111,95,53,55,95,116,111,117,112,112,101,114,0);
    let runtimej = String.fromCharCode(119,95,51,49,95,101,110,116,114,111,112,121,109,111,100,101,0);
    let telegramj: Array<any> = [468, 233, 582];
    let modalY = String.fromCharCode(109,95,54,55,95,105,110,115,101,116,115,0);
      taiwanE = `${modalY.length}`;
   if (taiwanE.length == 4) {
       let sendI = 5;
         sendI *= sendI | sendI;
         sendI ^= 2 - sendI;
      if ((sendI * 3) >= 4 || 5 >= (3 * sendI)) {
         sendI <<= Math.min(2, Math.abs(sendI));
      }
      modalY = `${sendI}`;
   }
   while (3 <= (parseInt(`${iconarrowrightorangeL}`) * modalY.length)) {
       let saves = 5.0;
       let whitesmallticku = 5;
       let utilsI = 4.0;
       let tempnodatac: Map<any, any> = new Map([[String.fromCharCode(106,95,49,48,95,114,97,110,100,111,109,105,122,101,0),false ], [String.fromCharCode(115,105,103,110,97,116,117,114,101,95,55,95,53,53,0),false ]]);
          let nodeZ = 1.0;
         utilsI /= Math.max(4, parseFloat(`${3 << (Math.min(Math.abs(whitesmallticku), 3))}`));
         nodeZ += parseFloat(`${parseInt(`${nodeZ}`) >> (Math.min(3, Math.abs(parseInt(`${nodeZ}`))))}`);
          let telegram4 = 2.0;
          let kuaishouU = String.fromCharCode(98,95,56,95,100,105,97,103,114,97,109,0);
         tempnodatac.set(`${saves}`, 2 | parseInt(`${saves}`));
         telegram4 += kuaishouU.length;
         kuaishouU = "1";
         saves /= Math.max(parseFloat(`${3 ^ parseInt(`${utilsI}`)}`), 1);
      if (1.7 == (saves * utilsI)) {
          let launcherW = 4.0;
          let targetl: Array<any> = [618, 286];
         saves -= parseFloat(`${2 + tempnodatac.size}`);
         launcherW -= parseFloat(`${parseInt(`${launcherW}`) | 2}`);
         targetl.push(parseInt(`${launcherW}`) * 2);
      }
      if (utilsI > 5.98) {
         utilsI -= parseFloat(`${1}`);
      }
       let uimanagerX = String.fromCharCode(97,95,50,57,95,112,114,101,114,111,108,108,0);
      while (!Array.from(tempnodatac.keys()).includes(`${utilsI}`)) {
         tempnodatac.set(`${saves}`, parseInt(`${saves}`) % 3);
         break;
      }
         whitesmallticku %= Math.max(parseInt(`${utilsI}`), 1);
      for (let l = 0; l < 3; l++) {
         tempnodatac.set(`${saves}`, whitesmallticku);
      }
       let emojiheartN: Array<any> = [String.fromCharCode(98,95,53,54,95,106,115,105,109,100,100,99,116,0), String.fromCharCode(117,117,105,100,95,120,95,56,56,0)];
       let backiconmaskg = String.fromCharCode(97,108,115,111,95,102,95,52,56,0);
      let downloadedH = saves >= 6042948.0;
      do {
          let basketballplayerplaceholderx = 2.0;
          let iconbackwhited = 4.0;
          let neonC = 3.0;
          let styleso = 1.0;
          let constants9 = true;
         saves *= parseFloat(`${whitesmallticku}`);
         basketballplayerplaceholderx /= Math.max(2, 1 >> (Math.min(Math.abs(parseInt(`${basketballplayerplaceholderx}`)), 2)));
         iconbackwhited *= parseInt(`${styleso}`);
         neonC += parseFloat(`${parseInt(`${iconbackwhited}`) - 2}`);
         constants9 = 24.75 == styleso;
         if (downloadedH) {
            break;
         }
      } while (downloadedH && ((4 ^ backiconmaskg.length) > 2 || (saves * 3.21) > 3.88));
      modalY += `${3 / (Math.max(7, parseInt(`${utilsI}`)))}`;
      break;
   }
   while ((register_ri.size * modalY.length) > 1) {
       let icontransferclubU = 2.0;
       let injuryF = true;
       let dragY = true;
       let whitebellg = 2.0;
       let interstitialz = String.fromCharCode(104,95,54,54,95,109,101,97,115,117,114,101,115,0);
      for (let r = 0; r < 2; r++) {
          let libreanimatedJ: Array<any> = [984, 614];
          let linko = 4.0;
          let pushP = 0.0;
          let profileE = 4.0;
          let flagE = String.fromCharCode(118,101,114,105,102,121,95,109,95,54,51,0);
         icontransferclubU *= (parseFloat(`${String.fromCharCode(95,0) == interstitialz ? interstitialz.length : parseInt(`${pushP}`)}`));
         libreanimatedJ.push(2 & parseInt(`${profileE}`));
         linko *= (String.fromCharCode(100,0) == flagE ? flagE.length : parseInt(`${linko}`));
         pushP += parseFloat(`${3 * parseInt(`${linko}`)}`);
         profileE /= Math.max(libreanimatedJ.length * 2, 4);
      }
      for (let m = 0; m < 3; m++) {
          let filled9 = 3.0;
          let questiconh = String.fromCharCode(109,95,55,50,95,108,111,103,105,99,97,108,0);
          let searchbarX = 1.0;
         whitebellg *= (questiconh.length << (Math.min(2, Math.abs((dragY ? 1 : 3)))));
         filled9 -= parseInt(`${searchbarX}`) & parseInt(`${filled9}`);
         questiconh += `${parseInt(`${filled9}`)}`;
         searchbarX /= Math.max(5, parseInt(`${filled9}`));
      }
          let actives = true;
         whitebellg /= Math.max(((dragY ? 4 : 1)), 3);
         actives = (!actives ? !actives : !actives);
      let taiwan5 = whitebellg <= 9441168.0;
      do {
         whitebellg -= (parseInt(`${whitebellg}`) + (injuryF ? 3 : 5));
         if (taiwan5) {
            break;
         }
      } while (taiwan5 && (parseInt(`${whitebellg}`) == interstitialz.length));
         icontransferclubU /= Math.max((parseFloat(`${(dragY ? 4 : 2) - parseInt(`${whitebellg}`)}`)), 2);
      if (interstitialz.startsWith(`${injuryF}`)) {
         injuryF = 88.45 >= icontransferclubU;
      }
      if (interstitialz.length > 2) {
         interstitialz += `${2 + parseInt(`${whitebellg}`)}`;
      }
         dragY = whitebellg < 90.79 || dragY;
          let sliderN = 4.0;
          let sansh = true;
          let privatechatbgl = String.fromCharCode(103,95,57,49,95,122,101,114,111,109,118,0);
         dragY = sansh;
         sliderN -= parseFloat(`${privatechatbgl.length - parseInt(`${sliderN}`)}`);
         privatechatbgl = `${1 * privatechatbgl.length}`;
       let casti = 3;
      if (1 == casti) {
         casti %= Math.max(5, ((dragY ? 3 : 3) >> (Math.min(2, Math.abs((injuryF ? 5 : 1))))));
      }
      let verticalB = injuryF ? !injuryF : injuryF;
      do {
          let downloading2 = 5.0;
         injuryF = 35.32 == whitebellg || dragY;
         downloading2 -= parseFloat(`${parseInt(`${downloading2}`) + parseInt(`${downloading2}`)}`);
         if (verticalB) {
            break;
         }
      } while (verticalB && (5.26 > (icontransferclubU + 5.42) && injuryF));
          let iconarrowrightorange8: Array<any> = [560, 6, 789];
          let dycreatort = String.fromCharCode(103,97,112,95,48,95,56,48,0);
         whitebellg *= ((dragY ? 2 : 3) % (Math.max(parseInt(`${icontransferclubU}`), 1)));
         iconarrowrightorange8.push(iconarrowrightorange8.length & 2);
         dycreatort = `${(String.fromCharCode(114,0) == dycreatort ? dycreatort.length : iconarrowrightorange8.length)}`;
         interstitialz += `${((dragY ? 5 : 5) - parseInt(`${whitebellg}`))}`;
      let showO = icontransferclubU >= 9888511.0;
      do {
         icontransferclubU -= parseFloat(`${1 ^ casti}`);
         if (showO) {
            break;
         }
      } while (showO && (icontransferclubU < 1.52));
      modalY = `${mbsplashG.length >> (Math.min(1, Math.abs(pangleC)))}`;
      break;
   }
       let basketballtrophyM: Map<any, any> = new Map([[String.fromCharCode(99,95,54,48,95,103,101,116,116,105,109,101,0),false ], [String.fromCharCode(112,105,116,99,104,95,103,95,52,51,0),false ]]);
      while (basketballtrophyM.size >= 5) {
         basketballtrophyM.set(`${basketballtrophyM.size}`, basketballtrophyM.size % (Math.max(basketballtrophyM.size, 4)));
         break;
      }
         basketballtrophyM = new Map([[`${basketballtrophyM.size}`, basketballtrophyM.size]]);
         basketballtrophyM = new Map([[`${basketballtrophyM.size}`, 1 - basketballtrophyM.size]]);
      mbsplashG = `${telegramj.length / (Math.max(3, 3))}`;
      runtimej += `${3 | f_managerA.length}`;
   for (let z = 0; z < 1; z++) {
      runtimej = "3";
   }
      mbsplashG = `${pangleC}`;
      register_ri.set(mbsplashG, modalY.length);
      f_managerA += `${2 + f_managerA.length}`;
       let defaultfootballbg0 = 1.0;
       let sigmobk = 2;
         defaultfootballbg0 *= parseInt(`${defaultfootballbg0}`) % 3;
      for (let m = 0; m < 2; m++) {
         sigmobk <<= Math.min(Math.abs(parseInt(`${defaultfootballbg0}`) | sigmobk), 1);
      }
      register_ri.set(mbsplashG, (String.fromCharCode(81,0) == mbsplashG ? runtimej.length : mbsplashG.length));
   while (runtimej.length <= 2) {
      runtimej = `${modalY.length * 1}`;
      break;
   }
   if (f_managerA == runtimej) {
      runtimej += "3";
   }
   let faviconj = iconarrowrightorangeL >= 4920048.0;
   do {
      iconarrowrightorangeL /= Math.max((parseFloat(`${String.fromCharCode(88,0) == taiwanE ? taiwanE.length : pangleC}`)), 3);
      if (faviconj) {
         break;
      }
   } while (faviconj && ((2.23 - iconarrowrightorangeL) >= 5.85 || (modalY.length - parseInt(`${iconarrowrightorangeL}`)) >= 5));
      f_managerA = "2";

    let deviceId = await DeviceInfo.getUniqueId();

      f_managerA += `${f_managerA.length / (Math.max(8, register_ri.size))}`;
      f_managerA = `${(modalY == String.fromCharCode(76,0) ? modalY.length : register_ri.size)}`;
      register_ri.set(`${pangleC}`, mbsplashG.length);
   while ((5 + runtimej.length) == 4) {
      runtimej += `${1 + taiwanE.length}`;
      break;
   }
      pangleC &= 3 & modalY.length;
       let baiduadsl: Map<any, any> = new Map([[String.fromCharCode(99,108,101,97,110,101,100,95,50,95,56,48,0),78], [String.fromCharCode(114,97,115,116,101,114,105,122,101,95,50,95,57,54,0),862], [String.fromCharCode(112,95,50,50,95,115,102,116,112,0),295]]);
       let matchdetailbgm = String.fromCharCode(115,117,98,108,101,110,103,116,104,95,119,95,55,49,0);
      for (let g = 0; g < 2; g++) {
         baiduadsl.set(matchdetailbgm, 1 / (Math.max(1, baiduadsl.size)));
      }
       let paginationE = true;
       let bangs = true;
      pangleC %= Math.max(runtimej.length >> (Math.min(Math.abs(3), 2)), 3);
   while (1 == (register_ri.size % (Math.max(taiwanE.length, 1))) && (1 % (Math.max(10, register_ri.size))) == 2) {
       let carousel5 = String.fromCharCode(112,95,57,50,95,99,117,115,116,111,109,0);
       let gpayV = 3.0;
       let floaterT = false;
       let vipsportT = 3;
       let castY: Array<any> = [685, 880];
      while ((1 * castY.length) < 1 || 1 < castY.length) {
          let shootp = String.fromCharCode(111,95,52,95,107,101,121,115,116,111,114,101,0);
          let nalytics3 = 0.0;
         castY.push(2);
         shootp = `${parseInt(`${nalytics3}`) | shootp.length}`;
         nalytics3 -= parseFloat(`${shootp.length & parseInt(`${nalytics3}`)}`);
         break;
      }
       let directF = 2;
          let targetI = 1;
          let privacy6: Array<any> = [3, 919, 729];
         directF *= ((floaterT ? 4 : 5) | privacy6.length);
         targetI -= 2 * targetI;
         privacy6 = [3];
      let bdxadsdk4 = castY.length >= 9680648;
      do {
         castY.push(((floaterT ? 2 : 5) ^ vipsportT));
         if (bdxadsdk4) {
            break;
         }
      } while ((1 >= (directF | 3) || 3 >= (castY.length | directF)) && bdxadsdk4);
      for (let d = 0; d < 2; d++) {
          let targeti: Array<any> = [281, 931, 901];
          let anytime5 = String.fromCharCode(118,95,55,57,95,99,104,105,108,100,114,101,110,0);
          let reactnativeultimatelistviewC = String.fromCharCode(107,95,54,54,95,99,111,110,102,111,114,109,97,110,99,101,0);
         castY = [targeti.length];
         targeti.push(anytime5.length * 1);
         anytime5 += `${1 * reactnativeultimatelistviewC.length}`;
         reactnativeultimatelistviewC += `${anytime5.length >> (Math.min(3, reactnativeultimatelistviewC.length))}`;
      }
         gpayV -= parseFloat(`${castY.length << (Math.min(5, Math.abs(directF)))}`);
         carousel5 += `${(vipsportT ^ (floaterT ? 4 : 2))}`;
      if (1 >= (directF % (Math.max(castY.length, 10)))) {
         directF /= Math.max(4, ((floaterT ? 4 : 5) << (Math.min(Math.abs(1), 2))));
      }
      while (carousel5.length >= 4) {
         gpayV -= (parseFloat(`${castY.length & (floaterT ? 4 : 5)}`));
         break;
      }
       let iconnotificationnewX = false;
       let pauseF = false;
      while (!pauseF) {
         carousel5 += `${(carousel5 == String.fromCharCode(78,0) ? carousel5.length : (pauseF ? 1 : 5))}`;
         break;
      }
         gpayV /= Math.max(parseFloat(`${directF}`), 4);
      if (directF <= 4) {
          let storel = String.fromCharCode(111,112,101,110,99,108,95,98,95,55,52,0);
         castY.push(((pauseF ? 5 : 4) & (iconnotificationnewX ? 3 : 4)));
         storel = `${(storel == String.fromCharCode(88,0) ? storel.length : storel.length)}`;
      }
         gpayV += parseFloat(`${1}`);
       let moonQ: Array<any> = [22, 68, 820];
       let jingdongq: Array<any> = [String.fromCharCode(99,95,50,54,95,109,97,116,99,104,101,115,0), String.fromCharCode(114,95,55,55,95,115,101,116,99,98,0)];
      register_ri.set(`${iconarrowrightorangeL}`, f_managerA.length * parseInt(`${iconarrowrightorangeL}`));
      break;
   }
      runtimej += `${register_ri.size}`;
   let stationsH = telegramj.length <= 5936311;
   do {
      telegramj.push(runtimej.length + 2);
      if (stationsH) {
         break;
      }
   } while ((1 < (5 & taiwanE.length)) && stationsH);
      iconarrowrightorangeL += parseFloat(`${mbsplashG.length}`);
   if (iconarrowrightorangeL == 5.75) {
      register_ri.set(`${iconarrowrightorangeL}`, telegramj.length);
   }
   while (modalY.length > parseInt(`${iconarrowrightorangeL}`)) {
       let loadingspinnerz = 3;
       let hover2 = String.fromCharCode(112,114,101,117,112,100,97,116,101,95,116,95,51,52,0);
       let mbsplashf = String.fromCharCode(98,105,100,105,114,95,116,95,56,0);
       let moduleO: Map<any, any> = new Map([[String.fromCharCode(97,95,50,57,95,119,97,108,107,105,110,103,0),false ], [String.fromCharCode(108,95,57,53,95,110,101,97,114,0),false ]]);
          let entryj = String.fromCharCode(112,95,54,48,95,99,108,105,112,98,111,97,114,100,0);
         moduleO.set(entryj, mbsplashf.length);
         mbsplashf = `${moduleO.size}`;
         mbsplashf = `${moduleO.size}`;
      let sendq = loadingspinnerz >= 5029797;
      do {
         loadingspinnerz -= (String.fromCharCode(57,0) == hover2 ? hover2.length : loadingspinnerz);
         if (sendq) {
            break;
         }
      } while (sendq && ((loadingspinnerz | mbsplashf.length) <= 5 && 5 <= (mbsplashf.length | loadingspinnerz)));
          let libyogaI: Map<any, any> = new Map([[String.fromCharCode(115,116,97,108,101,95,49,95,53,56,0),true ], [String.fromCharCode(109,115,114,108,101,100,101,99,95,106,95,53,53,0),false ], [String.fromCharCode(103,95,49,50,95,117,99,109,112,0),false ]]);
         mbsplashf += "3";
         libyogaI = new Map([[`${libyogaI.size}`, libyogaI.size - 1]]);
       let streamingY = String.fromCharCode(104,95,52,53,95,111,118,101,114,119,114,105,116,101,0);
       let fcdaebecbcbafcdfceaaeccfeacdbL = String.fromCharCode(100,101,99,114,101,102,95,49,95,51,51,0);
       let dependenciesy: Map<any, any> = new Map([[String.fromCharCode(101,95,53,52,95,106,117,103,103,108,101,0),true ], [String.fromCharCode(106,95,53,55,95,97,112,105,115,0),true ], [String.fromCharCode(105,110,115,101,116,115,95,104,95,56,52,0),false ]]);
          let imagewatchliveh = 0.0;
          let userM = String.fromCharCode(101,95,51,56,95,110,111,116,105,99,101,115,0);
          let modalC = String.fromCharCode(112,111,112,111,118,101,114,95,99,95,57,55,0);
         streamingY = "1";
         imagewatchliveh *= (String.fromCharCode(52,0) == userM ? modalC.length : userM.length);
         modalC += `${(String.fromCharCode(49,0) == userM ? userM.length : modalC.length)}`;
         hover2 = `${mbsplashf.length | dependenciesy.size}`;
      for (let g = 0; g < 3; g++) {
          let roomH = 2.0;
          let googlej: Array<any> = [String.fromCharCode(105,110,116,101,114,108,101,97,118,101,100,95,115,95,55,52,0), String.fromCharCode(111,118,101,114,108,97,112,115,95,116,95,53,57,0), String.fromCharCode(120,95,55,51,95,97,112,112,118,101,121,111,114,0)];
          let rewind1 = 3;
          let iconbell7: Map<any, any> = new Map([[String.fromCharCode(116,111,117,116,95,103,95,49,50,0),200], [String.fromCharCode(104,95,56,51,95,105,115,115,117,101,100,0),380], [String.fromCharCode(114,101,115,105,100,101,110,99,101,95,116,95,56,54,0),53]]);
         mbsplashf = `${streamingY.length}`;
         roomH += parseFloat(`${1 & iconbell7.size}`);
         googlej = [rewind1];
         rewind1 *= rewind1;
         iconbell7.set(`${rewind1}`, 3 - rewind1);
      }
         dependenciesy = new Map([[`${moduleO.size}`, mbsplashf.length | moduleO.size]]);
          let react3 = String.fromCharCode(106,95,52,50,95,100,111,115,100,97,116,101,0);
         dependenciesy = new Map([[hover2, 3 << (Math.min(5, Math.abs(loadingspinnerz)))]]);
         react3 = `${react3.length ^ 2}`;
      modalY = `${pangleC / 2}`;
      break;
   }
   if ((1 * parseInt(`${iconarrowrightorangeL}`)) == 2 && (f_managerA.length >> (Math.min(Math.abs(1), 2))) == 2) {
      f_managerA += `${telegramj.length}`;
   }
       let langE: Array<any> = [813, 849, 412];
          let mergerW = 1.0;
         langE = [langE.length];
         mergerW -= parseFloat(`${parseInt(`${mergerW}`)}`);
      let imagemanagerm = langE.length >= 6191850;
      do {
         langE.push(langE.length);
         if (imagemanagerm) {
            break;
         }
      } while (imagemanagerm && (2 > langE.length));
         langE.push(langE.length - langE.length);
      mbsplashG = `${pangleC}`;
      iconarrowrightorangeL += parseFloat(`${f_managerA.length}`);
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
    wawa_dacccfaabfbcbadeebddcabacdffdbc_video.profileBannerViewAnalytics({
      ads_id: id,
      ads_name: name,
      ads_slot_id: slot_id,
      ads_title: title,
    });
  }, []);

  const onBannerPress = useCallback(({ id, name, slot_id, title }: any) => {
    wawa_dacccfaabfbcbadeebddcabacdffdbc_video.profileBannerClickAnalytics({
      ads_id: id,
      ads_name: name,
      ads_slot_id: slot_id,
      ads_title: title,
    });
  }, []);



  const [showBecomeVIPOverlay, setShowBecomeVIPOverlay] = useState(false);

  const renderOverlay = () => {
       let target0 = String.fromCharCode(103,95,57,48,0);
    let debugj = true;
    let bridger = 0.0;
    let tempnodatagifN = 3.0;
    let gradlex: Map<any, any> = new Map([[String.fromCharCode(97,107,105,100,95,51,95,52,48,0),false ], [String.fromCharCode(108,100,105,115,116,95,105,95,53,56,0),false ], [String.fromCharCode(105,95,53,95,114,101,99,111,110,102,105,103,117,114,97,98,108,101,0),false ]]);
    let privacy1 = 1.0;
    let ticked4 = 0;
    let spinnerT: Map<any, any> = new Map([[String.fromCharCode(117,110,111,114,100,101,114,101,100,95,117,95,50,0),755], [String.fromCharCode(103,95,55,54,95,109,105,114,114,111,114,0),438], [String.fromCharCode(100,101,112,101,110,100,101,110,99,121,95,106,95,57,54,0),230]]);
    let termsk = 5.0;
    let smallsoundC: Array<any> = [String.fromCharCode(114,111,117,112,95,114,95,49,51,0), String.fromCharCode(107,95,57,48,95,99,114,108,105,115,115,117,101,114,0)];
    let downloaderN = String.fromCharCode(100,97,114,107,101,110,105,110,103,95,53,95,51,49,0);
   let pagea = tempnodatagifN >= 5810321.0;
   do {
      tempnodatagifN *= (parseInt(`${bridger}`) & (debugj ? 5 : 5));
      if (pagea) {
         break;
      }
   } while (pagea && ((5.39 / (Math.max(6, tempnodatagifN))) <= 3.77 || 2 <= (ticked4 / (Math.max(parseInt(`${tempnodatagifN}`), 5)))));
       let imagenomoredataj = String.fromCharCode(112,114,101,118,105,101,119,105,110,103,95,119,95,50,56,0);
       let libreact7 = String.fromCharCode(105,110,116,105,95,119,95,49,52,0);
         libreact7 += `${libreact7.length % (Math.max(imagenomoredataj.length, 8))}`;
      let privacyq = String.fromCharCode(104,55,103,117,53,49,115,103,0) == libreact7;
      do {
          let unfillK = String.fromCharCode(108,101,100,103,101,114,95,57,95,49,48,48,0);
          let success1 = false;
          let action8 = String.fromCharCode(119,95,57,51,95,104,108,115,112,108,97,121,108,105,115,116,0);
         libreact7 += `${(unfillK.length % (Math.max(3, (success1 ? 5 : 5))))}`;
         unfillK = `${action8.length}`;
         success1 = (action8.length ^ action8.length) < 28;
         if (privacyq) {
            break;
         }
      } while (privacyq && (4 > imagenomoredataj.length));
          let profileB = String.fromCharCode(97,108,105,103,110,101,100,95,114,95,49,56,0);
          let volumev = false;
         libreact7 = `${imagenomoredataj.length - profileB.length}`;
         profileB = "2";
          let livenodatabgimgd = 2.0;
          let championa = String.fromCharCode(100,101,108,105,109,105,116,101,114,115,95,98,95,57,54,0);
          let libswresampled = String.fromCharCode(118,95,53,56,95,112,108,97,121,105,110,103,0);
         libreact7 += `${parseInt(`${livenodatabgimgd}`) << (Math.min(libswresampled.length, 1))}`;
         livenodatabgimgd -= (championa == String.fromCharCode(105,0) ? championa.length : championa.length);
         libreact7 = `${2 << (Math.min(5, libreact7.length))}`;
       let progressZ = String.fromCharCode(112,103,110,111,95,103,95,51,56,0);
       let positionfieldd = String.fromCharCode(98,105,116,115,116,114,101,97,109,95,113,95,51,57,0);
      debugj = privacy1 >= 42.77;
   while (debugj) {
      tempnodatagifN -= parseInt(`${tempnodatagifN}`) / 1;
      break;
   }
   let arrowselectdown3 = gradlex.size >= 6948896;
   do {
      gradlex = new Map([[`${spinnerT.size}`, spinnerT.size >> (Math.min(Math.abs(3), 3))]]);
      if (arrowselectdown3) {
         break;
      }
   } while (arrowselectdown3 && (Array.from(gradlex.keys()).includes(`${privacy1}`)));
      tempnodatagifN += gradlex.size;
   for (let z = 0; z < 1; z++) {
      gradlex = new Map([[`${ticked4}`, parseInt(`${privacy1}`)]]);
   }
   if ((5.74 + tempnodatagifN) > 5.5 && debugj) {
      tempnodatagifN -= 3 + parseInt(`${tempnodatagifN}`);
   }
       let downloade = 1;
         downloade <<= Math.min(2, Math.abs(downloade % 3));
      while (downloade < 1) {
         downloade -= 1;
         break;
      }
         downloade ^= downloade | downloade;
      gradlex = new Map([[`${bridger}`, ((debugj ? 5 : 3) + parseInt(`${bridger}`))]]);
       let minivodp = 0;
       let promotionb: Array<any> = [146, 470];
      if (1 >= (minivodp / 5) && 4 >= (5 / (Math.max(1, promotionb.length)))) {
          let iconclosewhitewithbgc: Array<any> = [String.fromCharCode(97,112,97,114,97,109,115,95,111,95,49,48,0), String.fromCharCode(120,95,57,55,95,114,101,112,108,105,101,115,0)];
          let yellowtoredS = true;
          let saveR: Map<any, any> = new Map([[String.fromCharCode(119,95,57,56,95,117,101,102,97,0),78], [String.fromCharCode(99,111,118,101,114,95,52,95,52,49,0),202], [String.fromCharCode(102,95,52,56,95,101,120,112,108,105,99,105,116,108,121,0),973]]);
         promotionb = [saveR.size / 3];
         iconclosewhitewithbgc = [(iconclosewhitewithbgc.length / (Math.max(1, (yellowtoredS ? 2 : 1))))];
         yellowtoredS = iconclosewhitewithbgc.length < 30 && !yellowtoredS;
         saveR = new Map([[`${iconclosewhitewithbgc.length}`, 3 * iconclosewhitewithbgc.length]]);
      }
          let iconplayf = false;
          let incidentr = false;
         promotionb.push(1);
         iconplayf = (iconplayf ? incidentr : iconplayf);
         incidentr = !iconplayf || incidentr;
      for (let t = 0; t < 1; t++) {
         promotionb.push(3);
      }
         promotionb.push(2);
         promotionb = [promotionb.length];
          let iconrightorangeK: Array<any> = [66, 213, 556];
          let iconnewchatF: Array<any> = [196, 928, 631];
          let rules0 = false;
         minivodp -= iconrightorangeK.length << (Math.min(3, Math.abs(minivodp)));
         iconrightorangeK = [((rules0 ? 3 : 1) & 1)];
         iconnewchatF = [(iconnewchatF.length * (rules0 ? 5 : 3))];
      target0 = `${parseInt(`${tempnodatagifN}`) % 3}`;
   let alertK = 6235765.0 <= privacy1;
   do {
      privacy1 -= parseFloat(`${spinnerT.size}`);
      if (alertK) {
         break;
      }
   } while (((target0.length * parseInt(`${privacy1}`)) < 3) && alertK);
      spinnerT.set(target0, gradlex.size + 3);
   while (4.98 >= (termsk - 4.80) && 4.80 >= termsk) {
      termsk *= gradlex.size;
      break;
   }
      gradlex.set(`${tempnodatagifN}`, parseInt(`${tempnodatagifN}`) | gradlex.size);
       let elementsg = String.fromCharCode(114,111,119,107,101,121,95,117,95,50,0);
       let libzeusG = String.fromCharCode(116,119,111,95,48,95,53,0);
      while (!elementsg.endsWith(`${libzeusG.length}`)) {
         elementsg += `${elementsg.length}`;
         break;
      }
      let anythinke = elementsg == String.fromCharCode(103,95,114,117,106,115,53,114,113,105,0);
      do {
          let proxy5 = false;
          let combinedm = String.fromCharCode(102,105,108,101,102,117,110,99,95,105,95,55,56,0);
          let clearm: Map<any, any> = new Map([[String.fromCharCode(118,108,105,110,101,95,48,95,57,49,0),483], [String.fromCharCode(116,95,51,95,100,105,118,112,111,119,109,0),768]]);
         elementsg = "2";
         proxy5 = !proxy5;
         combinedm = `${((proxy5 ? 2 : 3))}`;
         clearm.set(`${proxy5}`, (clearm.size << (Math.min(4, Math.abs((proxy5 ? 1 : 5))))));
         if (anythinke) {
            break;
         }
      } while ((3 < libzeusG.length && elementsg == String.fromCharCode(120,0)) && anythinke);
      while (elementsg != libzeusG) {
         libzeusG += "1";
         break;
      }
      if (elementsg.length > 4) {
          let heart4: Array<any> = [265, 512, 23];
         libzeusG += "2";
         heart4.push(heart4.length + heart4.length);
      }
      if (!libzeusG.startsWith(elementsg)) {
          let w_animationP = String.fromCharCode(119,97,108,108,112,97,112,101,114,95,105,95,49,55,0);
          let positionfieldj = 4.0;
         elementsg = `${parseInt(`${positionfieldj}`)}`;
         w_animationP += `${w_animationP.length + w_animationP.length}`;
         positionfieldj += w_animationP.length;
      }
          let short_9x = 1.0;
         elementsg = `${(String.fromCharCode(115,0) == elementsg ? elementsg.length : libzeusG.length)}`;
         short_9x -= parseInt(`${short_9x}`) / 3;
      bridger /= Math.max(1, 5);
   while ((spinnerT.size * 5) < 2) {
      smallsoundC = [ticked4 / 3];
      break;
   }
   for (let o = 0; o < 1; o++) {
       let airbnbstarS = String.fromCharCode(113,95,54,54,95,98,102,115,116,109,0);
      while (2 > airbnbstarS.length) {
         airbnbstarS += `${airbnbstarS.length * airbnbstarS.length}`;
         break;
      }
      while (1 < airbnbstarS.length) {
         airbnbstarS = `${airbnbstarS.length}`;
         break;
      }
         airbnbstarS = `${(airbnbstarS == String.fromCharCode(75,0) ? airbnbstarS.length : airbnbstarS.length)}`;
      privacy1 *= parseFloat(`${parseInt(`${tempnodatagifN}`) - parseInt(`${bridger}`)}`);
   }
   for (let h = 0; h < 1; h++) {
       let pressurem = String.fromCharCode(103,97,105,110,115,95,104,95,49,0);
      for (let z = 0; z < 1; z++) {
         pressurem += `${pressurem.length}`;
      }
       let q_hashh = String.fromCharCode(107,105,108,111,98,121,116,101,95,52,95,54,55,0);
       let orangef = String.fromCharCode(98,105,116,114,101,118,95,48,95,49,56,0);
         orangef = "1";
      ticked4 >>= Math.min(pressurem.length, 4);
   }
   while ((ticked4 >> (Math.min(target0.length, 2))) == 5) {
      ticked4 >>= Math.min(Math.abs(1 / (Math.max(10, ticked4))), 5);
      break;
   }

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


    
    if (!wawaLibglog.fakeIsLogin(userState.user) && wawaLibglog.isVip(userState.user)) {
      setShowBecomeVIPOverlay(true)
    }
  }, []);


  
  
  
  
  

  const onReviewPress = () => {
       let predictionarrow1 = 0.0;
    let resendZ = String.fromCharCode(103,95,53,54,95,110,111,114,109,97,108,105,122,101,100,0);
    let filtern = String.fromCharCode(100,101,98,117,103,103,101,114,95,97,95,50,56,0);
    let bggradient_ = 3.0;
    let sharemodalG = 0.0;
    let iconclosev = String.fromCharCode(99,95,50,53,95,115,105,103,0);
    let gifgoalbgx = String.fromCharCode(103,117,101,115,115,101,100,95,111,95,55,54,0);
    let watch6 = 1.0;
    let expiredj: Array<any> = [String.fromCharCode(107,95,51,57,95,108,111,99,111,0), String.fromCharCode(108,101,97,121,95,114,95,57,51,0)];
    let prediction_ = String.fromCharCode(102,111,108,100,95,52,95,50,56,0);
    let positionfieldn = 2.0;
    let dacccfaabfbcbadeebddcabacdffdby = 5.0;
    let predictionbannerQ = String.fromCharCode(99,95,57,54,95,102,102,109,109,97,108,0);
    let topicc = true;
    let videobufferloadingB = 1.0;
      predictionarrow1 *= parseFloat(`${resendZ.length}`);
   let changer = iconclosev.length >= 6551694;
   do {
      iconclosev = "1";
      if (changer) {
         break;
      }
   } while (changer && (1 > iconclosev.length));
       let team0 = 5.0;
       let rootq = 0.0;
       let heartZ = String.fromCharCode(116,111,117,99,104,101,115,95,118,95,53,52,0);
      let libjsi_ = rootq >= 4932425.0;
      do {
          let fullscreenmint = String.fromCharCode(114,95,57,56,95,98,97,100,114,101,113,0);
          let renderc = String.fromCharCode(117,95,49,55,95,115,112,101,97,107,101,114,115,0);
          let libtanM = String.fromCharCode(97,98,115,101,105,108,95,111,95,53,55,0);
          let componentregistryU = String.fromCharCode(118,95,56,57,95,120,112,97,116,104,0);
         rootq /= Math.max(3 >> (Math.min(3, Math.abs(parseInt(`${team0}`)))), 2);
         fullscreenmint = `${componentregistryU.length / 2}`;
         renderc += `${(fullscreenmint == String.fromCharCode(114,0) ? renderc.length : fullscreenmint.length)}`;
         libtanM += `${(fullscreenmint == String.fromCharCode(89,0) ? fullscreenmint.length : renderc.length)}`;
         componentregistryU += `${libtanM.length + 3}`;
         if (libjsi_) {
            break;
         }
      } while (libjsi_ && (2.92 == rootq));
      while (3.36 == (rootq / 3.30) || (rootq / 3.30) == 1.92) {
          let modew = String.fromCharCode(107,95,54,49,95,109,100,99,118,0);
          let stylesK: Array<any> = [144, 543, 484];
          let libruntimeexecutor1: Map<any, any> = new Map([[String.fromCharCode(108,108,118,105,100,100,115,112,101,110,99,95,116,95,52,0),String.fromCharCode(117,95,50,48,95,109,97,120,106,0)], [String.fromCharCode(103,95,56,55,95,114,101,108,97,117,110,99,104,0),String.fromCharCode(109,97,112,112,105,110,103,95,54,95,54,51,0)], [String.fromCharCode(112,115,110,114,104,118,115,95,55,95,49,54,0),String.fromCharCode(102,95,49,95,112,114,101,97,108,108,111,99,97,116,101,0)]]);
         heartZ = `${modew.length}`;
         modew += `${libruntimeexecutor1.size}`;
         stylesK.push(1);
         libruntimeexecutor1 = new Map([[`${libruntimeexecutor1.size}`, stylesK.length + libruntimeexecutor1.size]]);
         break;
      }
      while (1.32 <= (team0 - rootq) || 1.32 <= (team0 - rootq)) {
         team0 -= heartZ.length % 2;
         break;
      }
      for (let z = 0; z < 1; z++) {
         team0 /= Math.max(parseInt(`${rootq}`), 1);
      }
          let langkey0: Array<any> = [String.fromCharCode(102,105,114,101,100,95,108,95,49,52,0), String.fromCharCode(98,97,114,95,109,95,54,48,0)];
          let basej = 1;
         rootq /= Math.max(1 >> (Math.min(2, langkey0.length)), 4);
         langkey0 = [basej & 1];
         basej |= 3;
         heartZ = `${parseInt(`${team0}`) % (Math.max(1, 1))}`;
         heartZ += `${parseInt(`${rootq}`) + heartZ.length}`;
      if ((rootq / (Math.max(10, team0))) == 2.61 && 4.94 == (team0 / 2.61)) {
         rootq *= parseInt(`${team0}`);
      }
      if ((rootq * team0) < 3.95) {
         rootq /= Math.max(3, 5);
      }
      sharemodalG /= Math.max(3, 1);
      resendZ += `${parseInt(`${dacccfaabfbcbadeebddcabacdffdby}`)}`;
   while ((1 + parseInt(`${dacccfaabfbcbadeebddcabacdffdby}`)) >= 5 || (dacccfaabfbcbadeebddcabacdffdby + 4.55) >= 3.13) {
       let networkM = String.fromCharCode(109,95,54,49,95,110,115,117,112,112,111,114,116,101,100,0);
       let utils1: Array<any> = [773, 458];
      for (let s = 0; s < 2; s++) {
         networkM += `${networkM.length << (Math.min(1, utils1.length))}`;
      }
          let commong = 1.0;
          let wifirouterO = false;
         utils1 = [2];
         commong *= (parseFloat(`${parseInt(`${commong}`) << (Math.min(2, Math.abs((wifirouterO ? 2 : 4))))}`));
         wifirouterO = commong == 14.79;
      if (networkM.includes(`${utils1.length}`)) {
         utils1 = [(String.fromCharCode(121,0) == networkM ? networkM.length : utils1.length)];
      }
      while (2 == (3 - utils1.length)) {
          let upload7 = 1.0;
          let penaltyshootP = String.fromCharCode(107,95,53,55,95,111,109,101,103,97,0);
          let injuryI = 3;
          let sharewhitef = 5.0;
         utils1.push(2 >> (Math.min(Math.abs(parseInt(`${upload7}`)), 2)));
         upload7 += parseFloat(`${injuryI}`);
         penaltyshootP = `${parseInt(`${sharewhitef}`) - 1}`;
         injuryI >>= Math.min(Math.abs(3 << (Math.min(3, Math.abs(injuryI)))), 5);
         sharewhitef *= parseFloat(`${2 << (Math.min(Math.abs(injuryI), 2))}`);
         break;
      }
         networkM = `${utils1.length}`;
       let imagemanagerb = true;
      prediction_ = "1";
      break;
   }
      prediction_ = "3";

    InAppReview.RequestInAppReview()
      .then((hasFlowFinishedSuccessfully) => {
        if (hasFlowFinishedSuccessfully) {

        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const onReview = (mark: number) => {
    
    
  }

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

              
              
              
              
              
              
              
              
            }}
          >
            <View
              style={{
                ...styles.btnHeader,
              }}
            >
              <View style={{ flexDirection: "row" }}>
                {!wawaLibglog.isLogin(userState.user) || Platform.OS === "android" ? (
                  <ProfileIcon
                    style={{ color: colors.button, width: 18, height: 18 }}
                  />
                ) : (
                  <FastImage
                    style={{
                      height: 36,
                      width: 36,
                      marginVertical: 2,
                    }}
                    resizeMode={"contain"}
                    source={require("@static/images/iconviewerConfirmation.png")}
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
                  {wawaLibglog.isGuest(userState.user) && (
                    <>
                      <Text style={{ color: "#ffffff", fontSize: 14 }}>
                        游客ID:
                      </Text>
                      <Text style={{ color: "#ffffff", fontSize: 20 }}>
                        {deviceUniqueId.slice(0, 16)}
                      </Text>
                    </>
                  )}
                  {wawaLibglog.isLogin(userState.user) && (
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
                            color: "#ffffff",
                            fontSize: 20,
                          }}
                          numberOfLines={1}
                          ellipsizeMode="tail"
                        >
                          {userState.user?.userName}
                        </Text>


                        {wawaLibglog.isVip(userState.user) && (
                          <Image
                            style={styles.iconStyle}
                            source={require("@static/images/profile/iconrefreshMatchesGraphics.png")}
                          />
                        )}
                      </View>

                      {/* {userState.userMemberExpired == '0' && (
                      <Text style={{fontSize: 14}}>VIP会员已经到期</Text>
                    )} */}
                      {wawaLibglog.isVip(userState.user) &&
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
                  {wawaLibglog.isLogin(userState.user) && (
                    <EditIcn width={29} height={29} color={colors.muted} />
                  )}
                </View>
              </View>
              { }
              {/* {wawaLibglog.isGuest(userState.user) &&
                !wawaLibglog.isVip(userState.user) && (
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
                      <Text style={{ color: colors.primaryContrast, fontWeight: "700" }}>
                        登录{" "}
                      </Text>
                    </View>
                  </View>
                )} */}

              { }
              {/* {wawaLibglog.isGuest(userState.user) &&
                wawaLibglog.isVip(userState.user) && (
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
                      <Text style={{ color: colors.primaryContrast, fontWeight: "700" }}>
                        登录{" "}
                      </Text>
                    </View>
                  </View>
                )} */}
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
                          wawaBasketballiconPenaltyshootnogoal.instance.showBecomeVip
                            ? "成为VIP"
                            : "付费VIP",
                          ""
                        )}
                      </Text>
                      {wawaBasketballiconPenaltyshootnogoal.instance.tabConfig != null &&
                        wawaBasketballiconPenaltyshootnogoal.instance.len == 5 ? (
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

            {!SHOW_ZF_CONST && INVITE_FRIEND && (
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
            {/* {isInAppReviewAvailable && <ShowMoreButton
              text="评价我们"
              leftIcon={<ReviewIcon style={{ color: colors.button }} />}
              // onPress={() => setShowReview(true)}
              onPress={onReviewPress}
            />} */}
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

          {/* <ReviewModal
            isVisible={isShowReview}
            onBackdropPress={() => setShowReview(false)}
            onCancelPress={() => setShowReview(false)}
            onReview={onReview}
          /> */}
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
